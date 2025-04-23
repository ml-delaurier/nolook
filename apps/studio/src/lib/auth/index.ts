import { MainChannels } from '@onlook/models/constants';
import type { UserMetadata } from '@onlook/models/settings';
import supabase from '@onlook/supabase/clients';
import { makeAutoObservable } from 'mobx';
import { invokeMainChannel } from '../utils';

// LOCAL DEV PATCH: Bypass authentication for local development
export class AuthManager {
    authenticated = true; // Always authenticated
    userMetadata: UserMetadata | null = null;
    isAuthEnabled = false; // Disable auth checks for local/dev

    constructor() {
        makeAutoObservable(this);
        // Skip fetchUserMetadata and listenForAuthEvents for local/dev
        // this.fetchUserMetadata();
        // this.listenForAuthEvents();
    }

    async fetchUserMetadata() {
        this.userMetadata = (await invokeMainChannel(
            MainChannels.GET_USER_METADATA,
        )) as UserMetadata;

        const signedIn = (await invokeMainChannel(MainChannels.IS_USER_SIGNED_IN)) as boolean;

        if (this.userMetadata && signedIn) {
            this.authenticated = true;
        }
    }

    listenForAuthEvents() {
        window.api.on(MainChannels.USER_SIGNED_IN, async (e, args) => {
            this.authenticated = true;
            this.fetchUserMetadata();
        });

        window.api.on(MainChannels.USER_SIGNED_OUT, async (e, args) => {
            this.authenticated = false;
            this.userMetadata = null;
        });
    }

    async signIn(provider: 'github' | 'google') {
        await invokeMainChannel(MainChannels.SIGN_IN, { provider });
    }

    async signOut() {
        await invokeMainChannel(MainChannels.SIGN_OUT);
    }
}
