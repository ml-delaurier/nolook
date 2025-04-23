var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var Ha = Object.defineProperty;
var Ns = (e) => {
  throw TypeError(e);
};
var xr = (e, t) => {
  for (var r in t) Ha(e, r, { get: t[r], enumerable: true });
};
var Gs = (e, t, r) => t.has(e) || Ns("Cannot " + r);
var ct = (e, t, r) => (Gs(e, t, "read from private field"), t.get(e)), Us = (e, t, r) => t.has(e) ? Ns("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ys = (e, t, r, n) => (Gs(e, t, "write to private field"), t.set(e, r), r);
var Ms = {};
xr(Ms, { languages: () => lm, options: () => Na, printers: () => cm });
var Xs = [{ linguistLanguageId: 183, name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib", ".wxs"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell", "zx"], parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"] }, { linguistLanguageId: 183, name: "Flow", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: [], extensions: [".js.flow"], filenames: [], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"] }, { linguistLanguageId: 183, name: "JSX", type: "programming", tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0, aliases: void 0, extensions: [".jsx"], filenames: void 0, interpreters: void 0, parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], group: "JavaScript" }, { linguistLanguageId: 378, name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] }, { linguistLanguageId: 94901924, name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] }];
var vs = {};
xr(vs, { canAttachComment: () => xp, embed: () => ri, experimentalFeatures: () => sm, getCommentChildNodes: () => hp, getVisitorKeys: () => br, handleComments: () => zn, insertPragma: () => yi, isBlockComment: () => ee, isGap: () => gp, massageAstNode: () => xu, print: () => ja, printComment: () => Ou, willPrintOwnComments: () => Zn });
var Va = (e, t, r, n) => {
  if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
}, Y = Va;
var $a = (e, t, r) => {
  if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
}, M = $a;
function Ka(e) {
  return e !== null && typeof e == "object";
}
var Hs = Ka;
function* Qa(e, t) {
  let { getVisitorKeys: r, filter: n = () => true } = t, s = (u) => Hs(u) && n(u);
  for (let u of r(e)) {
    let i = e[u];
    if (Array.isArray(i)) for (let a of i) s(a) && (yield a);
    else s(i) && (yield i);
  }
}
function* za(e, t) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let s = r[n];
    for (let u of Qa(s, t)) yield u, r.push(u);
  }
}
function Vs(e, { getVisitorKeys: t, predicate: r }) {
  for (let n of za(e, { getVisitorKeys: t })) if (r(n)) return true;
  return false;
}
var $s = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Ks(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Qs(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var zs = (e) => !(Ks(e) || Qs(e));
var Za = /[^\x20-\x7F]/u;
function eo(e) {
  if (!e) return 0;
  if (!Za.test(e)) return e.length;
  e = e.replace($s(), "  ");
  let t = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += zs(n) ? 1 : 2);
  }
  return t;
}
var rt = eo;
function hr(e) {
  return (t, r, n) => {
    let s = !!(n != null && n.backwards);
    if (r === false) return false;
    let { length: u } = t, i = r;
    for (; i >= 0 && i < u; ) {
      let a = t.charAt(i);
      if (e instanceof RegExp) {
        if (!e.test(a)) return i;
      } else if (!e.includes(a)) return i;
      s ? i-- : i++;
    }
    return i === -1 || i === u ? i : false;
  };
}
var Xe = hr(" 	"), Zs = hr(",; 	"), eu = hr(/[^\n\r]/u);
function to(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === false) return false;
  let s = e.charAt(t);
  if (n) {
    if (e.charAt(t - 1) === "\r" && s === `
`) return t - 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return t - 1;
  } else {
    if (s === "\r" && e.charAt(t + 1) === `
`) return t + 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return t + 1;
  }
  return t;
}
var He = to;
function ro(e, t, r = {}) {
  let n = Xe(e, r.backwards ? t - 1 : t, r), s = He(e, n, r);
  return n !== s;
}
var Z = ro;
function no(e, t) {
  if (t === false) return false;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return t;
}
var _t = no;
function so(e, t) {
  return t === false ? false : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? eu(e, t) : t;
}
var vt = so;
function uo(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = Zs(e, n), n = _t(e, n), n = Xe(e, n);
  return n = vt(e, n), n = He(e, n), n !== false && Z(e, n);
}
var jt = uo;
function io(e) {
  return Array.isArray(e) && e.length > 0;
}
var O = io;
var tu = new Proxy(() => {
}, { get: () => tu }), Mt = tu;
var gr = "'", ru = '"';
function ao(e, t) {
  let r = t === true || t === gr ? gr : ru, n = r === gr ? ru : gr, s = 0, u = 0;
  for (let i of e) i === r ? s++ : i === n && u++;
  return s > u ? n : r;
}
var Sr = ao;
function oo(e, t, r) {
  let n = t === '"' ? "'" : '"', u = Y(false, e, /\\(.)|(["'])/gsu, (i, a, o) => a === n ? a : o === t ? "\\" + o : o || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(a) ? a : "\\" + a));
  return t + u + t;
}
var nu = oo;
function po(e, t) {
  Mt.ok(/^(?<quote>["']).*\k<quote>$/su.test(e));
  let r = e.slice(1, -1), n = t.parser === "json" || t.parser === "jsonc" || t.parser === "json5" && t.quoteProps === "preserve" && !t.singleQuote ? '"' : t.__isInHtmlAttribute ? "'" : Sr(r, t.singleQuote);
  return e.charAt(0) === n ? e : nu(r, n, false);
}
var nt = po;
function q(e) {
  var n, s, u;
  let t = ((n = e.range) == null ? void 0 : n[0]) ?? e.start, r = (u = ((s = e.declaration) == null ? void 0 : s.decorators) ?? e.decorators) == null ? void 0 : u[0];
  return r ? Math.min(q(r), t) : t;
}
function k(e) {
  var t;
  return ((t = e.range) == null ? void 0 : t[1]) ?? e.end;
}
function Pt(e, t) {
  let r = q(e);
  return Number.isInteger(r) && r === q(t);
}
function co(e, t) {
  let r = k(e);
  return Number.isInteger(r) && r === k(t);
}
function su(e, t) {
  return Pt(e, t) && co(e, t);
}
var rr = null;
function nr(e) {
  if (rr !== null && typeof rr.property) {
    let t = rr;
    return rr = nr.prototype = null, t;
  }
  return rr = nr.prototype = e ?? /* @__PURE__ */ Object.create(null), new nr();
}
var lo = 10;
for (let e = 0; e <= lo; e++) nr();
function wn(e) {
  return nr(e);
}
function mo(e, t = "type") {
  wn(e);
  function r(n) {
    let s = n[t], u = e[s];
    if (!Array.isArray(u)) throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
    return u;
  }
  return r;
}
var Br = mo;
var uu = { ArrayExpression: ["elements"], AssignmentExpression: ["left", "right"], BinaryExpression: ["left", "right"], InterpreterDirective: [], Directive: ["value"], DirectiveLiteral: [], BlockStatement: ["directives", "body"], BreakStatement: ["label"], CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], CatchClause: ["param", "body"], ConditionalExpression: ["test", "consequent", "alternate"], ContinueStatement: ["label"], DebuggerStatement: [], DoWhileStatement: ["body", "test"], EmptyStatement: [], ExpressionStatement: ["expression"], File: ["program"], ForInStatement: ["left", "right", "body"], ForStatement: ["init", "test", "update", "body"], FunctionDeclaration: ["id", "typeParameters", "params", "predicate", "returnType", "body"], FunctionExpression: ["id", "typeParameters", "params", "returnType", "body"], Identifier: ["typeAnnotation", "decorators"], IfStatement: ["test", "consequent", "alternate"], LabeledStatement: ["label", "body"], StringLiteral: [], NumericLiteral: [], NullLiteral: [], BooleanLiteral: [], RegExpLiteral: [], LogicalExpression: ["left", "right"], MemberExpression: ["object", "property"], NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"], Program: ["directives", "body"], ObjectExpression: ["properties"], ObjectMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectProperty: ["key", "value", "decorators"], RestElement: ["argument", "typeAnnotation", "decorators"], ReturnStatement: ["argument"], SequenceExpression: ["expressions"], ParenthesizedExpression: ["expression"], SwitchCase: ["test", "consequent"], SwitchStatement: ["discriminant", "cases"], ThisExpression: [], ThrowStatement: ["argument"], TryStatement: ["block", "handler", "finalizer"], UnaryExpression: ["argument"], UpdateExpression: ["argument"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id", "init"], WhileStatement: ["test", "body"], WithStatement: ["object", "body"], AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"], ArrayPattern: ["elements", "typeAnnotation", "decorators"], ArrowFunctionExpression: ["typeParameters", "params", "predicate", "returnType", "body"], ClassBody: ["body"], ClassExpression: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ClassDeclaration: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ExportAllDeclaration: ["source", "attributes", "exported"], ExportDefaultDeclaration: ["declaration"], ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"], ExportSpecifier: ["local", "exported"], ForOfStatement: ["left", "right", "body"], ImportDeclaration: ["specifiers", "source", "attributes"], ImportDefaultSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportSpecifier: ["imported", "local"], ImportExpression: ["source", "options"], MetaProperty: ["meta", "property"], ClassMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectPattern: ["properties", "typeAnnotation", "decorators"], SpreadElement: ["argument"], Super: [], TaggedTemplateExpression: ["tag", "typeParameters", "quasi", "typeArguments"], TemplateElement: [], TemplateLiteral: ["quasis", "expressions"], YieldExpression: ["argument"], AwaitExpression: ["argument"], BigIntLiteral: [], ExportNamespaceSpecifier: ["exported"], OptionalMemberExpression: ["object", "property"], OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], ClassProperty: ["decorators", "variance", "key", "typeAnnotation", "value"], ClassAccessorProperty: ["decorators", "key", "typeAnnotation", "value"], ClassPrivateProperty: ["decorators", "variance", "key", "typeAnnotation", "value"], ClassPrivateMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], PrivateName: ["id"], StaticBlock: ["body"], AnyTypeAnnotation: [], ArrayTypeAnnotation: ["elementType"], BooleanTypeAnnotation: [], BooleanLiteralTypeAnnotation: [], NullLiteralTypeAnnotation: [], ClassImplements: ["id", "typeParameters"], DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"], DeclareFunction: ["id", "predicate"], DeclareInterface: ["id", "typeParameters", "extends", "body"], DeclareModule: ["id", "body"], DeclareModuleExports: ["typeAnnotation"], DeclareTypeAlias: ["id", "typeParameters", "right"], DeclareOpaqueType: ["id", "typeParameters", "supertype"], DeclareVariable: ["id"], DeclareExportDeclaration: ["declaration", "specifiers", "source", "attributes"], DeclareExportAllDeclaration: ["source", "attributes"], DeclaredPredicate: ["value"], ExistsTypeAnnotation: [], FunctionTypeAnnotation: ["typeParameters", "this", "params", "rest", "returnType"], FunctionTypeParam: ["name", "typeAnnotation"], GenericTypeAnnotation: ["id", "typeParameters"], InferredPredicate: [], InterfaceExtends: ["id", "typeParameters"], InterfaceDeclaration: ["id", "typeParameters", "extends", "body"], InterfaceTypeAnnotation: ["extends", "body"], IntersectionTypeAnnotation: ["types"], MixedTypeAnnotation: [], EmptyTypeAnnotation: [], NullableTypeAnnotation: ["typeAnnotation"], NumberLiteralTypeAnnotation: [], NumberTypeAnnotation: [], ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"], ObjectTypeInternalSlot: ["id", "value"], ObjectTypeCallProperty: ["value"], ObjectTypeIndexer: ["variance", "id", "key", "value"], ObjectTypeProperty: ["key", "value", "variance"], ObjectTypeSpreadProperty: ["argument"], OpaqueType: ["id", "typeParameters", "supertype", "impltype"], QualifiedTypeIdentifier: ["qualification", "id"], StringLiteralTypeAnnotation: [], StringTypeAnnotation: [], SymbolTypeAnnotation: [], ThisTypeAnnotation: [], TupleTypeAnnotation: ["types", "elementTypes"], TypeofTypeAnnotation: ["argument", "typeArguments"], TypeAlias: ["id", "typeParameters", "right"], TypeAnnotation: ["typeAnnotation"], TypeCastExpression: ["expression", "typeAnnotation"], TypeParameter: ["bound", "default", "variance"], TypeParameterDeclaration: ["params"], TypeParameterInstantiation: ["params"], UnionTypeAnnotation: ["types"], Variance: [], VoidTypeAnnotation: [], EnumDeclaration: ["id", "body"], EnumBooleanBody: ["members"], EnumNumberBody: ["members"], EnumStringBody: ["members"], EnumSymbolBody: ["members"], EnumBooleanMember: ["id", "init"], EnumNumberMember: ["id", "init"], EnumStringMember: ["id", "init"], EnumDefaultedMember: ["id"], IndexedAccessType: ["objectType", "indexType"], OptionalIndexedAccessType: ["objectType", "indexType"], JSXAttribute: ["name", "value"], JSXClosingElement: ["name"], JSXElement: ["openingElement", "children", "closingElement"], JSXEmptyExpression: [], JSXExpressionContainer: ["expression"], JSXSpreadChild: ["expression"], JSXIdentifier: [], JSXMemberExpression: ["object", "property"], JSXNamespacedName: ["namespace", "name"], JSXOpeningElement: ["name", "typeParameters", "typeArguments", "attributes"], JSXSpreadAttribute: ["argument"], JSXText: [], JSXFragment: ["openingFragment", "children", "closingFragment"], JSXOpeningFragment: [], JSXClosingFragment: [], Noop: [], Placeholder: [], V8IntrinsicIdentifier: [], ArgumentPlaceholder: [], BindExpression: ["object", "callee"], ImportAttribute: ["key", "value"], Decorator: ["expression"], DoExpression: ["body"], ExportDefaultSpecifier: ["exported"], RecordExpression: ["properties"], TupleExpression: ["elements"], ModuleExpression: ["body"], TopicReference: [], PipelineTopicExpression: ["expression"], PipelineBareFunction: ["callee"], PipelinePrimaryTopicReference: [], TSParameterProperty: ["parameter", "decorators"], TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"], TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"], TSQualifiedName: ["left", "right"], TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSPropertySignature: ["key", "typeAnnotation"], TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSIndexSignature: ["parameters", "typeAnnotation"], TSAnyKeyword: [], TSBooleanKeyword: [], TSBigIntKeyword: [], TSIntrinsicKeyword: [], TSNeverKeyword: [], TSNullKeyword: [], TSNumberKeyword: [], TSObjectKeyword: [], TSStringKeyword: [], TSSymbolKeyword: [], TSUndefinedKeyword: [], TSUnknownKeyword: [], TSVoidKeyword: [], TSThisType: [], TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSTypeReference: ["typeName", "typeParameters", "typeArguments"], TSTypePredicate: ["parameterName", "typeAnnotation"], TSTypeQuery: ["exprName", "typeParameters", "typeArguments"], TSTypeLiteral: ["members"], TSArrayType: ["elementType"], TSTupleType: ["elementTypes"], TSOptionalType: ["typeAnnotation"], TSRestType: ["typeAnnotation"], TSNamedTupleMember: ["label", "elementType"], TSUnionType: ["types"], TSIntersectionType: ["types"], TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"], TSInferType: ["typeParameter"], TSParenthesizedType: ["typeAnnotation"], TSTypeOperator: ["typeAnnotation"], TSIndexedAccessType: ["objectType", "indexType"], TSMappedType: ["typeParameter", "nameType", "typeAnnotation"], TSTemplateLiteralType: ["quasis", "types"], TSLiteralType: ["literal"], TSExpressionWithTypeArguments: ["expression", "typeParameters"], TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"], TSInterfaceBody: ["body"], TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"], TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"], TSAsExpression: ["expression", "typeAnnotation"], TSSatisfiesExpression: ["expression", "typeAnnotation"], TSTypeAssertion: ["typeAnnotation", "expression"], TSEnumBody: ["members"], TSEnumDeclaration: ["id", "members"], TSEnumMember: ["id", "initializer"], TSModuleDeclaration: ["id", "body"], TSModuleBlock: ["body"], TSImportType: ["argument", "options", "qualifier", "typeParameters", "typeArguments"], TSImportEqualsDeclaration: ["id", "moduleReference"], TSExternalModuleReference: ["expression"], TSNonNullExpression: ["expression"], TSExportAssignment: ["expression"], TSNamespaceExportDeclaration: ["id"], TSTypeAnnotation: ["typeAnnotation"], TSTypeParameterInstantiation: ["params"], TSTypeParameterDeclaration: ["params"], TSTypeParameter: ["constraint", "default", "name"], ChainExpression: ["expression"], ExperimentalRestProperty: ["argument"], ExperimentalSpreadProperty: ["argument"], Literal: [], MethodDefinition: ["decorators", "key", "value"], PrivateIdentifier: [], Property: ["key", "value"], PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"], AccessorProperty: ["decorators", "key", "typeAnnotation", "value"], TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"], TSAbstractKeyword: [], TSAbstractMethodDefinition: ["key", "value"], TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"], TSAsyncKeyword: [], TSClassImplements: ["expression", "typeArguments", "typeParameters"], TSDeclareKeyword: [], TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"], TSExportKeyword: [], TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"], TSPrivateKeyword: [], TSProtectedKeyword: [], TSPublicKeyword: [], TSReadonlyKeyword: [], TSStaticKeyword: [], AsConstExpression: ["expression"], AsExpression: ["expression", "typeAnnotation"], BigIntLiteralTypeAnnotation: [], BigIntTypeAnnotation: [], ComponentDeclaration: ["id", "params", "body", "typeParameters", "rendersType"], ComponentParameter: ["name", "local"], ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"], ComponentTypeParameter: ["name", "typeAnnotation"], ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"], DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"], DeclareEnum: ["id", "body"], DeclareHook: ["id"], DeclareNamespace: ["id", "body"], EnumBigIntBody: ["members"], EnumBigIntMember: ["id", "init"], HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"], HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"], InferTypeAnnotation: ["typeParameter"], KeyofTypeAnnotation: ["argument"], ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"], QualifiedTypeofIdentifier: ["qualification", "id"], TupleTypeLabeledElement: ["label", "elementType", "variance"], TupleTypeSpreadElement: ["label", "typeAnnotation"], TypeOperator: ["typeAnnotation"], TypePredicate: ["parameterName", "typeAnnotation", "asserts"], NGRoot: ["node"], NGPipeExpression: ["left", "right", "arguments"], NGChainedExpression: ["expressions"], NGEmptyExpression: [], NGMicrosyntax: ["body"], NGMicrosyntaxKey: [], NGMicrosyntaxExpression: ["expression", "alias"], NGMicrosyntaxKeyedExpression: ["key", "expression"], NGMicrosyntaxLet: ["key", "value"], NGMicrosyntaxAs: ["key", "alias"], JsExpressionRoot: ["node"], JsonRoot: ["node"], TSJSDocAllType: [], TSJSDocUnknownType: [], TSJSDocNullableType: ["typeAnnotation"], TSJSDocNonNullableType: ["typeAnnotation"], NeverTypeAnnotation: [], UndefinedTypeAnnotation: [], UnknownTypeAnnotation: [], SatisfiesExpression: ["expression", "typeAnnotation"] };
var yo = Br(uu), br = yo;
function Do(e) {
  let t = new Set(e);
  return (r) => t.has(r == null ? void 0 : r.type);
}
var R = Do;
var fo = R(["Block", "CommentBlock", "MultiLine"]), ee = fo;
var Eo = R(["AnyTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "BooleanTypeAnnotation", "BigIntTypeAnnotation", "SymbolTypeAnnotation", "StringTypeAnnotation", "NeverTypeAnnotation", "UndefinedTypeAnnotation", "UnknownTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation"]), Pr = Eo;
function Fo(e, t) {
  let r = t.split(".");
  for (let n = r.length - 1; n >= 0; n--) {
    let s = r[n];
    if (n === 0) return e.type === "Identifier" && e.name === s;
    if (e.type !== "MemberExpression" || e.optional || e.computed || e.property.type !== "Identifier" || e.property.name !== s) return false;
    e = e.object;
  }
}
function Co(e, t) {
  return t.some((r) => Fo(e, r));
}
var iu = Co;
function Ao({ type: e }) {
  return e.startsWith("TS") && e.endsWith("Keyword");
}
var kr = Ao;
function ur(e, t) {
  return t(e) || Vs(e, { getVisitorKeys: br, predicate: t });
}
function Jt(e) {
  return e.type === "AssignmentExpression" || e.type === "BinaryExpression" || e.type === "LogicalExpression" || e.type === "NGPipeExpression" || e.type === "ConditionalExpression" || L(e) || W(e) || e.type === "SequenceExpression" || e.type === "TaggedTemplateExpression" || e.type === "BindExpression" || e.type === "UpdateExpression" && !e.prefix || Ae(e) || e.type === "TSNonNullExpression" || e.type === "ChainExpression";
}
function pu(e) {
  return e.expressions ? e.expressions[0] : e.left ?? e.test ?? e.callee ?? e.object ?? e.tag ?? e.argument ?? e.expression;
}
function Lr(e) {
  if (e.expressions) return ["expressions", 0];
  if (e.left) return ["left"];
  if (e.test) return ["test"];
  if (e.object) return ["object"];
  if (e.callee) return ["callee"];
  if (e.tag) return ["tag"];
  if (e.argument) return ["argument"];
  if (e.expression) return ["expression"];
  throw new Error("Unexpected node has no left side.");
}
var At = R(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose", "Hashbang", "InterpreterDirective"]), cu = R(["ExportDefaultDeclaration", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "DeclareExportAllDeclaration"]), U = R(["ArrayExpression", "TupleExpression"]), se = R(["ObjectExpression", "RecordExpression"]);
function lu(e) {
  return e.type === "LogicalExpression" && e.operator === "??";
}
function Fe(e) {
  return e.type === "NumericLiteral" || e.type === "Literal" && typeof e.value == "number";
}
function Mn(e) {
  return e.type === "UnaryExpression" && (e.operator === "+" || e.operator === "-") && Fe(e.argument);
}
function te(e) {
  return !!(e && (e.type === "StringLiteral" || e.type === "Literal" && typeof e.value == "string"));
}
function Rn(e) {
  return e.type === "RegExpLiteral" || e.type === "Literal" && !!e.regex;
}
var wr = R(["Literal", "BooleanLiteral", "BigIntLiteral", "DirectiveLiteral", "NullLiteral", "NumericLiteral", "RegExpLiteral", "StringLiteral"]), To = R(["Identifier", "ThisExpression", "Super", "PrivateName", "PrivateIdentifier"]), Re = R(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), Rt = R(["FunctionExpression", "ArrowFunctionExpression"]);
function xo(e) {
  return e.type === "FunctionExpression" || e.type === "ArrowFunctionExpression" && e.body.type === "BlockStatement";
}
function On(e) {
  return L(e) && e.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(e.callee.name);
}
var X = R(["JSXElement", "JSXFragment"]);
function kt(e) {
  return e.method && e.kind === "init" || e.kind === "get" || e.kind === "set";
}
function Or(e) {
  return (e.type === "ObjectTypeProperty" || e.type === "ObjectTypeInternalSlot") && !e.static && !e.method && e.kind !== "get" && e.kind !== "set" && e.value.type === "FunctionTypeAnnotation";
}
function mu(e) {
  return (e.type === "TypeAnnotation" || e.type === "TSTypeAnnotation") && e.typeAnnotation.type === "FunctionTypeAnnotation" && !e.static && !Pt(e, e.typeAnnotation);
}
var De = R(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
function Tt(e) {
  return W(e) || e.type === "BindExpression" && !!e.object;
}
var ho = R(["TSThisType", "NullLiteralTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType"]);
function qt(e) {
  return kr(e) || Pr(e) || ho(e) || (e.type === "GenericTypeAnnotation" || e.type === "TSTypeReference") && !e.typeParameters && !e.typeArguments;
}
function go(e) {
  return e.type === "Identifier" && (e.name === "beforeEach" || e.name === "beforeAll" || e.name === "afterEach" || e.name === "afterAll");
}
var So = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
function Bo(e) {
  return iu(e, So);
}
function It(e, t) {
  if ((e == null ? void 0 : e.type) !== "CallExpression" || e.optional) return false;
  let r = pe(e);
  if (r.length === 1) {
    if (On(e) && It(t)) return Rt(r[0]);
    if (go(e.callee)) return On(r[0]);
  } else if ((r.length === 2 || r.length === 3) && (r[0].type === "TemplateLiteral" || te(r[0])) && Bo(e.callee)) return r[2] && !Fe(r[2]) ? false : (r.length === 2 ? Rt(r[1]) : xo(r[1]) && z(r[1]).length <= 1) || On(r[1]);
  return false;
}
var yu = (e) => (t) => ((t == null ? void 0 : t.type) === "ChainExpression" && (t = t.expression), e(t)), L = yu(R(["CallExpression", "OptionalCallExpression"])), W = yu(R(["MemberExpression", "OptionalMemberExpression"]));
function Jn(e, t = 5) {
  return Du(e, t) <= t;
}
function Du(e, t) {
  let r = 0;
  for (let n in e) {
    let s = e[n];
    if (s && typeof s == "object" && typeof s.type == "string" && (r++, r += Du(s, t - r)), r > t) return r;
  }
  return r;
}
var bo = 0.25;
function ir(e, t) {
  let { printWidth: r } = t;
  if (T(e)) return false;
  let n = r * bo;
  if (e.type === "ThisExpression" || e.type === "Identifier" && e.name.length <= n || Mn(e) && !T(e.argument)) return true;
  let s = e.type === "Literal" && "regex" in e && e.regex.pattern || e.type === "RegExpLiteral" && e.pattern;
  return s ? s.length <= n : te(e) ? nt(fe(e), t).length <= n : e.type === "TemplateLiteral" ? e.expressions.length === 0 && e.quasis[0].value.raw.length <= n && !e.quasis[0].value.raw.includes(`
`) : e.type === "UnaryExpression" ? ir(e.argument, { printWidth: r }) : e.type === "CallExpression" && e.arguments.length === 0 && e.callee.type === "Identifier" ? e.callee.name.length <= n - 2 : wr(e);
}
function Le(e, t) {
  return X(t) ? Lt(t) : T(t, h.Leading, (r) => Z(e, k(r)));
}
function au(e) {
  return e.quasis.some((t) => t.value.raw.includes(`
`));
}
function _r(e, t) {
  return (e.type === "TemplateLiteral" && au(e) || e.type === "TaggedTemplateExpression" && au(e.quasi)) && !Z(t, q(e), { backwards: true });
}
function vr(e) {
  if (!T(e)) return false;
  let t = M(false, lt(e, h.Dangling), -1);
  return t && !ee(t);
}
function fu(e) {
  if (e.length <= 1) return false;
  let t = 0;
  for (let r of e) if (Rt(r)) {
    if (t += 1, t > 1) return true;
  } else if (L(r)) {
    for (let n of pe(r)) if (Rt(n)) return true;
  }
  return false;
}
function jr(e) {
  let { node: t, parent: r, key: n } = e;
  return n === "callee" && L(t) && L(r) && r.arguments.length > 0 && t.arguments.length > r.arguments.length;
}
var Po = /* @__PURE__ */ new Set(["!", "-", "+", "~"]);
function Ie(e, t = 2) {
  if (t <= 0) return false;
  if (e.type === "ChainExpression" || e.type === "TSNonNullExpression") return Ie(e.expression, t);
  let r = (n) => Ie(n, t - 1);
  if (Rn(e)) return rt(e.pattern ?? e.regex.pattern) <= 5;
  if (wr(e) || To(e) || e.type === "ArgumentPlaceholder") return true;
  if (e.type === "TemplateLiteral") return e.quasis.every((n) => !n.value.raw.includes(`
`)) && e.expressions.every(r);
  if (se(e)) return e.properties.every((n) => !n.computed && (n.shorthand || n.value && r(n.value)));
  if (U(e)) return e.elements.every((n) => n === null || r(n));
  if (mt(e)) {
    if (e.type === "ImportExpression" || Ie(e.callee, t)) {
      let n = pe(e);
      return n.length <= t && n.every(r);
    }
    return false;
  }
  return W(e) ? Ie(e.object, t) && Ie(e.property, t) : e.type === "UnaryExpression" && Po.has(e.operator) || e.type === "UpdateExpression" ? Ie(e.argument, t) : false;
}
function fe(e) {
  var t;
  return ((t = e.extra) == null ? void 0 : t.raw) ?? e.raw;
}
function Eu(e) {
  return e;
}
function oe(e, t = "es5") {
  return e.trailingComma === "es5" && t === "es5" || e.trailingComma === "all" && (t === "all" || t === "es5");
}
function ae(e, t) {
  switch (e.type) {
    case "BinaryExpression":
    case "LogicalExpression":
    case "AssignmentExpression":
    case "NGPipeExpression":
      return ae(e.left, t);
    case "MemberExpression":
    case "OptionalMemberExpression":
      return ae(e.object, t);
    case "TaggedTemplateExpression":
      return e.tag.type === "FunctionExpression" ? false : ae(e.tag, t);
    case "CallExpression":
    case "OptionalCallExpression":
      return e.callee.type === "FunctionExpression" ? false : ae(e.callee, t);
    case "ConditionalExpression":
      return ae(e.test, t);
    case "UpdateExpression":
      return !e.prefix && ae(e.argument, t);
    case "BindExpression":
      return e.object && ae(e.object, t);
    case "SequenceExpression":
      return ae(e.expressions[0], t);
    case "ChainExpression":
    case "TSSatisfiesExpression":
    case "TSAsExpression":
    case "TSNonNullExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return ae(e.expression, t);
    default:
      return t(e);
  }
}
var ou = { "==": true, "!=": true, "===": true, "!==": true }, Ir = { "*": true, "/": true, "%": true }, jn = { ">>": true, ">>>": true, "<<": true };
function ar(e, t) {
  return !(sr(t) !== sr(e) || e === "**" || ou[e] && ou[t] || t === "%" && Ir[e] || e === "%" && Ir[t] || t !== e && Ir[t] && Ir[e] || jn[e] && jn[t]);
}
var ko = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((e, t) => e.map((r) => [r, t])));
function sr(e) {
  return ko.get(e);
}
function Fu(e) {
  return !!jn[e] || e === "|" || e === "^" || e === "&";
}
function Cu(e) {
  var r;
  if (e.rest) return true;
  let t = z(e);
  return ((r = M(false, t, -1)) == null ? void 0 : r.type) === "RestElement";
}
var _n = /* @__PURE__ */ new WeakMap();
function z(e) {
  if (_n.has(e)) return _n.get(e);
  let t = [];
  return e.this && t.push(e.this), Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params), e.rest && t.push(e.rest), _n.set(e, t), t;
}
function Au(e, t) {
  let { node: r } = e, n = 0, s = (u) => t(u, n++);
  r.this && e.call(s, "this"), Array.isArray(r.parameters) ? e.each(s, "parameters") : Array.isArray(r.params) && e.each(s, "params"), r.rest && e.call(s, "rest");
}
var vn = /* @__PURE__ */ new WeakMap();
function pe(e) {
  if (vn.has(e)) return vn.get(e);
  if (e.type === "ChainExpression") return pe(e.expression);
  let t = e.arguments;
  return e.type === "ImportExpression" && (t = [e.source], e.options && t.push(e.options)), vn.set(e, t), t;
}
function Wt(e, t) {
  let { node: r } = e;
  if (r.type === "ChainExpression") return e.call(() => Wt(e, t), "expression");
  r.type === "ImportExpression" ? (e.call((n) => t(n, 0), "source"), r.options && e.call((n) => t(n, 1), "options")) : e.each(t, "arguments");
}
function qn(e, t) {
  let r = [];
  if (e.type === "ChainExpression" && (e = e.expression, r.push("expression")), e.type === "ImportExpression") {
    if (t === 0 || t === (e.options ? -2 : -1)) return [...r, "source"];
    if (e.options && (t === 1 || t === -1)) return [...r, "options"];
    throw new RangeError("Invalid argument index");
  }
  if (t < 0 && (t = e.arguments.length + t), t < 0 || t >= e.arguments.length) throw new RangeError("Invalid argument index");
  return [...r, "arguments", t];
}
function or(e) {
  return e.value.trim() === "prettier-ignore" && !e.unignore;
}
function Lt(e) {
  return (e == null ? void 0 : e.prettierIgnore) || T(e, h.PrettierIgnore);
}
var h = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 }, Tu = (e, t) => {
  if (typeof e == "function" && (t = e, e = 0), e || t) return (r, n, s) => !(e & h.Leading && !r.leading || e & h.Trailing && !r.trailing || e & h.Dangling && (r.leading || r.trailing) || e & h.Block && !ee(r) || e & h.Line && !At(r) || e & h.First && n !== 0 || e & h.Last && n !== s.length - 1 || e & h.PrettierIgnore && !or(r) || t && !t(r));
};
function T(e, t, r) {
  if (!O(e == null ? void 0 : e.comments)) return false;
  let n = Tu(t, r);
  return n ? e.comments.some(n) : true;
}
function lt(e, t, r) {
  if (!Array.isArray(e == null ? void 0 : e.comments)) return [];
  let n = Tu(t, r);
  return n ? e.comments.filter(n) : e.comments;
}
var ce = (e, { originalText: t }) => jt(t, k(e));
function mt(e) {
  return L(e) || e.type === "NewExpression" || e.type === "ImportExpression";
}
function Ce(e) {
  return e && (e.type === "ObjectProperty" || e.type === "Property" && !kt(e));
}
var Ae = R(["TSAsExpression", "TSSatisfiesExpression", "AsExpression", "AsConstExpression", "SatisfiesExpression"]), we = R(["TSUnionType", "UnionTypeAnnotation"]), Nt = R(["TSIntersectionType", "IntersectionTypeAnnotation"]), Je = R(["TSConditionalType", "ConditionalTypeAnnotation"]);
var Io = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), Gt = (e) => {
  for (let t of e.quasis) delete t.value;
};
function du(e, t, r) {
  var s, u;
  if (e.type === "Program" && delete t.sourceType, (e.type === "BigIntLiteral" || e.type === "BigIntLiteralTypeAnnotation") && e.value && (t.value = e.value.toLowerCase()), (e.type === "BigIntLiteral" || e.type === "Literal") && e.bigint && (t.bigint = e.bigint.toLowerCase()), e.type === "EmptyStatement" || e.type === "JSXText" || e.type === "JSXExpressionContainer" && (e.expression.type === "Literal" || e.expression.type === "StringLiteral") && e.expression.value === " ") return null;
  if ((e.type === "Property" || e.type === "ObjectProperty" || e.type === "MethodDefinition" || e.type === "ClassProperty" || e.type === "ClassMethod" || e.type === "PropertyDefinition" || e.type === "TSDeclareMethod" || e.type === "TSPropertySignature" || e.type === "ObjectTypeProperty" || e.type === "ImportAttribute") && e.key && !e.computed) {
    let { key: i } = e;
    te(i) || Fe(i) ? t.key = String(i.value) : i.type === "Identifier" && (t.key = i.name);
  }
  if (e.type === "JSXElement" && e.openingElement.name.name === "style" && e.openingElement.attributes.some((i) => i.type === "JSXAttribute" && i.name.name === "jsx")) for (let { type: i, expression: a } of t.children) i === "JSXExpressionContainer" && a.type === "TemplateLiteral" && Gt(a);
  e.type === "JSXAttribute" && e.name.name === "css" && e.value.type === "JSXExpressionContainer" && e.value.expression.type === "TemplateLiteral" && Gt(t.value.expression), e.type === "JSXAttribute" && ((s = e.value) == null ? void 0 : s.type) === "Literal" && /["']|&quot;|&apos;/u.test(e.value.value) && (t.value.value = Y(false, e.value.value, /["']|&quot;|&apos;/gu, '"'));
  let n = e.expression || e.callee;
  if (e.type === "Decorator" && n.type === "CallExpression" && n.callee.name === "Component" && n.arguments.length === 1) {
    let i = e.expression.arguments[0].properties;
    for (let [a, o] of t.expression.arguments[0].properties.entries()) switch (i[a].key.name) {
      case "styles":
        U(o.value) && Gt(o.value.elements[0]);
        break;
      case "template":
        o.value.type === "TemplateLiteral" && Gt(o.value);
        break;
    }
  }
  e.type === "TaggedTemplateExpression" && (e.tag.type === "MemberExpression" || e.tag.type === "Identifier" && (e.tag.name === "gql" || e.tag.name === "graphql" || e.tag.name === "css" || e.tag.name === "md" || e.tag.name === "markdown" || e.tag.name === "html") || e.tag.type === "CallExpression") && Gt(t.quasi), e.type === "TemplateLiteral" && ((u = e.leadingComments) != null && u.some((a) => ee(a) && ["GraphQL", "HTML"].some((o) => a.value === ` ${o} `)) || r.type === "CallExpression" && r.callee.name === "graphql" || !e.leadingComments) && Gt(t), e.type === "ChainExpression" && e.expression.type === "TSNonNullExpression" && (t.type = "TSNonNullExpression", t.expression.type = "ChainExpression"), e.type === "TSMappedType" && (delete t.key, delete t.constraint), e.type === "TSEnumDeclaration" && delete t.body;
}
du.ignoredProperties = Io;
var xu = du;
var qe = "string", he = "array", st = "cursor", Ve = "indent", $e = "align", Ke = "trim", me = "group", Oe = "fill", Te = "if-break", Qe = "indent-if-break", ze = "line-suffix", We = "line-suffix-boundary", ie = "line", ge = "label", _e = "break-parent", Mr = /* @__PURE__ */ new Set([st, Ve, $e, Ke, me, Oe, Te, Qe, ze, We, ie, ge, _e]);
function Lo(e) {
  if (typeof e == "string") return qe;
  if (Array.isArray(e)) return he;
  if (!e) return;
  let { type: t } = e;
  if (Mr.has(t)) return t;
}
var Se = Lo;
var wo = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Oo(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Se(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = wo([...Mr].map((s) => `'${s}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Wn = class extends Error {
  constructor(t) {
    super(Oo(t));
    __publicField(this, "name", "InvalidDocError");
    this.doc = t;
  }
}, dt = Wn;
var hu = {};
function _o(e, t, r, n) {
  let s = [e];
  for (; s.length > 0; ) {
    let u = s.pop();
    if (u === hu) {
      r(s.pop());
      continue;
    }
    r && s.push(u, hu);
    let i = Se(u);
    if (!i) throw new dt(u);
    if ((t == null ? void 0 : t(u)) !== false) switch (i) {
      case he:
      case Oe: {
        let a = i === he ? u : u.parts;
        for (let o = a.length, p = o - 1; p >= 0; --p) s.push(a[p]);
        break;
      }
      case Te:
        s.push(u.flatContents, u.breakContents);
        break;
      case me:
        if (n && u.expandedStates) for (let a = u.expandedStates.length, o = a - 1; o >= 0; --o) s.push(u.expandedStates[o]);
        else s.push(u.contents);
        break;
      case $e:
      case Ve:
      case Qe:
      case ge:
      case ze:
        s.push(u.contents);
        break;
      case qe:
      case st:
      case Ke:
      case We:
      case ie:
      case _e:
        break;
      default:
        throw new dt(u);
    }
  }
}
var pr = _o;
function yt(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(u) {
    if (r.has(u)) return r.get(u);
    let i = s(u);
    return r.set(u, i), i;
  }
  function s(u) {
    switch (Se(u)) {
      case he:
        return t(u.map(n));
      case Oe:
        return t({ ...u, parts: u.parts.map(n) });
      case Te:
        return t({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
      case me: {
        let { expandedStates: i, contents: a } = u;
        return i ? (i = i.map(n), a = i[0]) : a = n(a), t({ ...u, contents: a, expandedStates: i });
      }
      case $e:
      case Ve:
      case Qe:
      case ge:
      case ze:
        return t({ ...u, contents: n(u.contents) });
      case qe:
      case st:
      case Ke:
      case We:
      case ie:
      case _e:
        return t(u);
      default:
        throw new dt(u);
    }
  }
}
function Su(e, t, r) {
  let n = r, s = false;
  function u(i) {
    if (s) return false;
    let a = t(i);
    a !== void 0 && (s = true, n = a);
  }
  return pr(e, u), n;
}
function vo(e) {
  if (e.type === me && e.break || e.type === ie && e.hard || e.type === _e) return true;
}
function re(e) {
  return Su(e, vo, false);
}
function gu(e) {
  if (e.length > 0) {
    let t = M(false, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function Bu(e) {
  let t = /* @__PURE__ */ new Set(), r = [];
  function n(u) {
    if (u.type === _e && gu(r), u.type === me) {
      if (r.push(u), t.has(u)) return false;
      t.add(u);
    }
  }
  function s(u) {
    u.type === me && r.pop().break && gu(r);
  }
  pr(e, n, s, true);
}
function jo(e) {
  return e.type === ie && !e.hard ? e.soft ? "" : " " : e.type === Te ? e.flatContents : e;
}
function cr(e) {
  return yt(e, jo);
}
function Mo(e) {
  switch (Se(e)) {
    case Oe:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case me:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === me && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case $e:
    case Ve:
    case Qe:
    case ze:
      if (!e.contents) return "";
      break;
    case Te:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case he: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...s] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof M(false, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...s);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case qe:
    case st:
    case Ke:
    case We:
    case ie:
    case ge:
    case _e:
      break;
    default:
      throw new dt(e);
  }
  return e;
}
function Ut(e) {
  return yt(e, (t) => Mo(t));
}
function ve(e, t = Rr) {
  return yt(e, (r) => typeof r == "string" ? b(t, r.split(`
`)) : r);
}
function Ro(e) {
  if (e.type === ie) return true;
}
function bu(e) {
  return Su(e, Ro, false);
}
function lr(e, t) {
  return e.type === ge ? { ...e, contents: t(e.contents) } : t(e);
}
function Pu(e) {
  let t = true;
  return pr(e, (r) => {
    switch (Se(r)) {
      case qe:
        if (r === "") break;
      case Ke:
      case We:
      case ie:
      case _e:
        return t = false, false;
    }
  }), t;
}
var Nn = () => {
}, Gn = Nn;
function f(e) {
  return { type: Ve, contents: e };
}
function Be(e, t) {
  return { type: $e, contents: t, n: e };
}
function l(e, t = {}) {
  return Gn(t.expandedStates), { type: me, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Iu(e) {
  return Be(Number.NEGATIVE_INFINITY, e);
}
function Jr(e) {
  return Be(-1, e);
}
function et(e, t) {
  return l(e[0], { ...t, expandedStates: e });
}
function qr(e) {
  return { type: Oe, parts: e };
}
function B(e, t = "", r = {}) {
  return { type: Te, breakContents: e, flatContents: t, groupId: r.groupId };
}
function xt(e, t) {
  return { type: Qe, contents: e, groupId: t.groupId, negate: t.negate };
}
function Un(e) {
  return { type: ze, contents: e };
}
var je = { type: We }, Ee = { type: _e };
var Yn = { type: ie, hard: true }, Jo = { type: ie, hard: true, literal: true }, x = { type: ie }, E = { type: ie, soft: true }, F = [Yn, Ee], Rr = [Jo, Ee], mr = { type: st };
function b(e, t) {
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function Lu(e, t, r) {
  let n = e;
  if (t > 0) {
    for (let s = 0; s < Math.floor(t / r); ++s) n = f(n);
    n = Be(t % r, n), n = Be(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function ut(e, t) {
  return e ? { type: ge, label: e, contents: t } : t;
}
function qo(e) {
  let t = `*${e.value}*`.split(`
`);
  return t.length > 1 && t.every((r) => r.trimStart()[0] === "*");
}
var wu = qo;
function Ou(e, t) {
  let r = e.node;
  if (At(r)) return t.originalText.slice(q(r), k(r)).trimEnd();
  if (ee(r)) return wu(r) ? Wo(r) : ["/*", ve(r.value), "*/"];
  throw new Error("Not a comment: " + JSON.stringify(r));
}
function Wo(e) {
  let t = e.value.split(`
`);
  return ["/*", b(F, t.map((r, n) => n === 0 ? r.trimEnd() : " " + (n < t.length - 1 ? r.trim() : r.trimStart()))), "*/"];
}
var zn = {};
xr(zn, { endOfLine: () => Vo, ownLine: () => Ho, remaining: () => $o });
function No(e) {
  let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function Xn(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = false, t.nodeDescription = No(e);
}
function le(e, t) {
  t.leading = true, t.trailing = false, Xn(e, t);
}
function Me(e, t, r) {
  t.leading = false, t.trailing = false, r && (t.marker = r), Xn(e, t);
}
function V(e, t) {
  t.leading = false, t.trailing = true, Xn(e, t);
}
function Go(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = Xe(e, n), n = _t(e, n), n = vt(e, n), n = He(e, n);
  return n;
}
var it = Go;
function Uo(e, t) {
  let r = it(e, t);
  return r === false ? "" : e.charAt(r);
}
var be = Uo;
function Yo(e, t, r) {
  for (let n = t; n < r; ++n) if (e.charAt(n) === `
`) return true;
  return false;
}
var de = Yo;
function Xo(e) {
  return ee(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value);
}
var Wr = Xo;
function Ho(e) {
  return [Wu, vu, Ru, ip, Qo, Vn, $n, _u, ju, cp, op, Qn, qu, lp, Mu, Ju, Kn, zo, Ap].some((t) => t(e));
}
function Vo(e) {
  return [Ko, Ru, vu, qu, Vn, $n, _u, ju, Ju, ap, pp, Qn, Dp, Kn, Fp, Cp, Tp].some((t) => t(e));
}
function $o(e) {
  return [Wu, Vn, $n, Zo, up, Mu, Qn, sp, np, Ep, Kn, fp].some((t) => t(e));
}
function wt(e, t) {
  let r = (e.body || e.properties).find(({ type: n }) => n !== "EmptyStatement");
  r ? le(r, t) : Me(e, t);
}
function Hn(e, t) {
  e.type === "BlockStatement" ? wt(e, t) : le(e, t);
}
function Ko({ comment: e, followingNode: t }) {
  return t && Wr(e) ? (le(t, e), true) : false;
}
function Vn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  if ((r == null ? void 0 : r.type) !== "IfStatement" || !n) return false;
  if (be(s, k(e)) === ")") return V(t, e), true;
  if (t === r.consequent && n === r.alternate) {
    let i = it(s, k(r.consequent));
    if (q(e) < i || r.alternate.type === "BlockStatement") {
      if (t.type === "BlockStatement") V(t, e);
      else {
        let a = At(e) || e.loc.start.line === e.loc.end.line, o = e.loc.start.line === t.loc.start.line;
        a && o ? V(t, e) : Me(r, e);
      }
      return true;
    }
  }
  return n.type === "BlockStatement" ? (wt(n, e), true) : n.type === "IfStatement" ? (Hn(n.consequent, e), true) : r.consequent === n ? (le(n, e), true) : false;
}
function $n({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  return (r == null ? void 0 : r.type) !== "WhileStatement" || !n ? false : be(s, k(e)) === ")" ? (V(t, e), true) : n.type === "BlockStatement" ? (wt(n, e), true) : r.body === n ? (le(n, e), true) : false;
}
function _u({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return (r == null ? void 0 : r.type) !== "TryStatement" && (r == null ? void 0 : r.type) !== "CatchClause" || !n ? false : r.type === "CatchClause" && t ? (V(t, e), true) : n.type === "BlockStatement" ? (wt(n, e), true) : n.type === "TryStatement" ? (Hn(n.finalizer, e), true) : n.type === "CatchClause" ? (Hn(n.body, e), true) : false;
}
function Qo({ comment: e, enclosingNode: t, followingNode: r }) {
  return W(t) && (r == null ? void 0 : r.type) === "Identifier" ? (le(t, e), true) : false;
}
function zo({ comment: e, enclosingNode: t, followingNode: r, options: n }) {
  return !n.experimentalTernaries || !((t == null ? void 0 : t.type) === "ConditionalExpression" || Je(t)) ? false : (r == null ? void 0 : r.type) === "ConditionalExpression" || Je(r) ? (Me(t, e), true) : false;
}
function vu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s, options: u }) {
  let i = t && !de(s, k(t), q(e));
  return (!t || !i) && ((r == null ? void 0 : r.type) === "ConditionalExpression" || Je(r)) && n ? u.experimentalTernaries && r.alternate === n && !(ee(e) && !de(u.originalText, q(e), k(e))) ? (Me(r, e), true) : (le(n, e), true) : false;
}
function Zo({ comment: e, precedingNode: t, enclosingNode: r }) {
  return Ce(r) && r.shorthand && r.key === t && r.value.type === "AssignmentPattern" ? (V(r.value.left, e), true) : false;
}
var ep = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
function ju({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  if (ep.has(r == null ? void 0 : r.type)) {
    if (O(r.decorators) && (n == null ? void 0 : n.type) !== "Decorator") return V(M(false, r.decorators, -1), e), true;
    if (r.body && n === r.body) return wt(r.body, e), true;
    if (n) {
      if (r.superClass && n === r.superClass && t && (t === r.id || t === r.typeParameters)) return V(t, e), true;
      for (let s of ["implements", "extends", "mixins"]) if (r[s] && n === r[s][0]) return t && (t === r.id || t === r.typeParameters || t === r.superClass) ? V(t, e) : Me(r, e, s), true;
    }
  }
  return false;
}
var tp = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "TSParameterProperty"]);
function Mu({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
  return r && t && be(n, k(e)) === "(" && (r.type === "Property" || r.type === "TSDeclareMethod" || r.type === "TSAbstractMethodDefinition") && t.type === "Identifier" && r.key === t && be(n, k(t)) !== ":" ? (V(t, e), true) : (t == null ? void 0 : t.type) === "Decorator" && tp.has(r == null ? void 0 : r.type) && (At(e) || e.placement === "ownLine") ? (V(t, e), true) : false;
}
var rp = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
function np({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
  return be(n, k(e)) !== "(" ? false : t && rp.has(r == null ? void 0 : r.type) ? (V(t, e), true) : false;
}
function sp({ comment: e, enclosingNode: t, text: r }) {
  if ((t == null ? void 0 : t.type) !== "ArrowFunctionExpression") return false;
  let n = it(r, k(e));
  return n !== false && r.slice(n, n + 2) === "=>" ? (Me(t, e), true) : false;
}
function up({ comment: e, enclosingNode: t, text: r }) {
  return be(r, k(e)) !== ")" ? false : t && (Nu(t) && z(t).length === 0 || mt(t) && pe(t).length === 0) ? (Me(t, e), true) : ((t == null ? void 0 : t.type) === "MethodDefinition" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && z(t.value).length === 0 ? (Me(t.value, e), true) : false;
}
function ip({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  return (t == null ? void 0 : t.type) === "ComponentTypeParameter" && ((r == null ? void 0 : r.type) === "DeclareComponent" || (r == null ? void 0 : r.type) === "ComponentTypeAnnotation") && (n == null ? void 0 : n.type) !== "ComponentTypeParameter" ? (V(t, e), true) : ((t == null ? void 0 : t.type) === "ComponentParameter" || (t == null ? void 0 : t.type) === "RestElement") && (r == null ? void 0 : r.type) === "ComponentDeclaration" && be(s, k(e)) === ")" ? (V(t, e), true) : false;
}
function Ru({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
  return (t == null ? void 0 : t.type) === "FunctionTypeParam" && (r == null ? void 0 : r.type) === "FunctionTypeAnnotation" && (n == null ? void 0 : n.type) !== "FunctionTypeParam" ? (V(t, e), true) : ((t == null ? void 0 : t.type) === "Identifier" || (t == null ? void 0 : t.type) === "AssignmentPattern" || (t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern" || (t == null ? void 0 : t.type) === "RestElement" || (t == null ? void 0 : t.type) === "TSParameterProperty") && Nu(r) && be(s, k(e)) === ")" ? (V(t, e), true) : !ee(e) && ((r == null ? void 0 : r.type) === "FunctionDeclaration" || (r == null ? void 0 : r.type) === "FunctionExpression" || (r == null ? void 0 : r.type) === "ObjectMethod") && (n == null ? void 0 : n.type) === "BlockStatement" && r.body === n && it(s, k(e)) === q(n) ? (wt(n, e), true) : false;
}
function Ju({ comment: e, enclosingNode: t }) {
  return (t == null ? void 0 : t.type) === "LabeledStatement" ? (le(t, e), true) : false;
}
function Kn({ comment: e, enclosingNode: t }) {
  return ((t == null ? void 0 : t.type) === "ContinueStatement" || (t == null ? void 0 : t.type) === "BreakStatement") && !t.label ? (V(t, e), true) : false;
}
function ap({ comment: e, precedingNode: t, enclosingNode: r }) {
  return L(r) && t && r.callee === t && r.arguments.length > 0 ? (le(r.arguments[0], e), true) : false;
}
function op({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return we(r) ? (or(e) && (n.prettierIgnore = true, e.unignore = true), t ? (V(t, e), true) : false) : (we(n) && or(e) && (n.types[0].prettierIgnore = true, e.unignore = true), false);
}
function pp({ comment: e, enclosingNode: t }) {
  return Ce(t) ? (le(t, e), true) : false;
}
function Qn({ comment: e, enclosingNode: t, ast: r, isLastComment: n }) {
  var s;
  return ((s = r == null ? void 0 : r.body) == null ? void 0 : s.length) === 0 ? (n ? Me(r, e) : le(r, e), true) : (t == null ? void 0 : t.type) === "Program" && t.body.length === 0 && !O(t.directives) ? (n ? Me(t, e) : le(t, e), true) : false;
}
function cp({ comment: e, enclosingNode: t }) {
  return (t == null ? void 0 : t.type) === "ForInStatement" || (t == null ? void 0 : t.type) === "ForOfStatement" ? (le(t, e), true) : false;
}
function qu({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
  if ((r == null ? void 0 : r.type) === "ImportSpecifier" || (r == null ? void 0 : r.type) === "ExportSpecifier") return le(r, e), true;
  let s = (t == null ? void 0 : t.type) === "ImportSpecifier" && (r == null ? void 0 : r.type) === "ImportDeclaration", u = (t == null ? void 0 : t.type) === "ExportSpecifier" && (r == null ? void 0 : r.type) === "ExportNamedDeclaration";
  return (s || u) && Z(n, k(e)) ? (V(t, e), true) : false;
}
function lp({ comment: e, enclosingNode: t }) {
  return (t == null ? void 0 : t.type) === "AssignmentPattern" ? (le(t, e), true) : false;
}
var mp = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), yp = /* @__PURE__ */ new Set(["ObjectExpression", "RecordExpression", "ArrayExpression", "TupleExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
function Dp({ comment: e, enclosingNode: t, followingNode: r }) {
  return mp.has(t == null ? void 0 : t.type) && r && (yp.has(r.type) || ee(e)) ? (le(r, e), true) : false;
}
function fp({ comment: e, enclosingNode: t, followingNode: r, text: n }) {
  return !r && ((t == null ? void 0 : t.type) === "TSMethodSignature" || (t == null ? void 0 : t.type) === "TSDeclareFunction" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && be(n, k(e)) === ";" ? (V(t, e), true) : false;
}
function Wu({ comment: e, enclosingNode: t, followingNode: r }) {
  if (or(e) && (t == null ? void 0 : t.type) === "TSMappedType" && (r == null ? void 0 : r.type) === "TSTypeParameter" && r.constraint) return t.prettierIgnore = true, e.unignore = true, true;
}
function Ep({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return (r == null ? void 0 : r.type) !== "TSMappedType" ? false : (n == null ? void 0 : n.type) === "TSTypeParameter" && n.name ? (le(n.name, e), true) : (t == null ? void 0 : t.type) === "TSTypeParameter" && t.constraint ? (V(t.constraint, e), true) : false;
}
function Fp({ comment: e, enclosingNode: t, followingNode: r }) {
  return !t || t.type !== "SwitchCase" || t.test || !r || r !== t.consequent[0] ? false : (r.type === "BlockStatement" && At(e) ? wt(r, e) : Me(t, e), true);
}
function Cp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  return we(t) && ((r.type === "TSArrayType" || r.type === "ArrayTypeAnnotation") && !n || Nt(r)) ? (V(M(false, t.types, -1), e), true) : false;
}
function Ap({ comment: e, enclosingNode: t, precedingNode: r, followingNode: n }) {
  if (((t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern") && (n == null ? void 0 : n.type) === "TSTypeAnnotation") return r ? V(r, e) : Me(t, e), true;
}
function Tp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
  var s;
  if (!n && (r == null ? void 0 : r.type) === "UnaryExpression" && ((t == null ? void 0 : t.type) === "LogicalExpression" || (t == null ? void 0 : t.type) === "BinaryExpression")) {
    let u = ((s = r.argument.loc) == null ? void 0 : s.start.line) !== t.right.loc.start.line, i = At(e) || e.loc.start.line === e.loc.end.line, a = e.loc.start.line === t.right.loc.start.line;
    if (u && i && a) return V(t.right, e), true;
  }
  return false;
}
var Nu = R(["ArrowFunctionExpression", "FunctionExpression", "FunctionDeclaration", "ObjectMethod", "ClassMethod", "TSDeclareFunction", "TSCallSignatureDeclaration", "TSConstructSignatureDeclaration", "TSMethodSignature", "TSConstructorType", "TSFunctionType", "TSDeclareMethod"]);
var dp = /* @__PURE__ */ new Set(["EmptyStatement", "TemplateElement", "TSEmptyBodyFunctionExpression", "ChainExpression"]);
function xp(e) {
  return !dp.has(e.type);
}
function hp(e, t) {
  var r;
  if ((t.parser === "typescript" || t.parser === "flow" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree") && e.type === "MethodDefinition" && ((r = e.value) == null ? void 0 : r.type) === "FunctionExpression" && z(e.value).length === 0 && !e.value.returnType && !O(e.value.typeParameters) && e.value.body) return [...e.decorators || [], e.key, e.value.body];
}
function Zn(e) {
  let { node: t, parent: r } = e;
  return (X(t) || r && (r.type === "JSXSpreadAttribute" || r.type === "JSXSpreadChild" || we(r) || (r.type === "ClassDeclaration" || r.type === "ClassExpression") && r.superClass === t)) && (!Lt(t) || we(r));
}
function gp(e, { parser: t }) {
  if (t === "flow" || t === "babel-flow") return e = Y(false, e, /[\s(]/gu, ""), e === "" || e === "/*" || e === "/*::";
}
function Gu(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
var Pe = Symbol("MODE_BREAK"), at = Symbol("MODE_FLAT"), Yt = Symbol("cursor"), es = Symbol("DOC_FILL_PRINTED_LENGTH");
function Uu() {
  return { value: "", length: 0, queue: [] };
}
function Sp(e, t) {
  return ts(e, { type: "indent" }, t);
}
function Bp(e, t, r) {
  return t === Number.NEGATIVE_INFINITY ? e.root || Uu() : t < 0 ? ts(e, { type: "dedent" }, r) : t ? t.type === "root" ? { ...e, root: e } : ts(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r) : e;
}
function ts(e, t, r) {
  let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], s = "", u = 0, i = 0, a = 0;
  for (let c of n) switch (c.type) {
    case "indent":
      y(), r.useTabs ? o(1) : p(r.tabWidth);
      break;
    case "stringAlign":
      y(), s += c.n, u += c.n.length;
      break;
    case "numberAlign":
      i += 1, a += c.n;
      break;
    default:
      throw new Error(`Unexpected type '${c.type}'`);
  }
  return m(), { ...e, value: s, length: u, queue: n };
  function o(c) {
    s += "	".repeat(c), u += r.tabWidth * c;
  }
  function p(c) {
    s += " ".repeat(c), u += c;
  }
  function y() {
    r.useTabs ? D() : m();
  }
  function D() {
    i > 0 && o(i), C();
  }
  function m() {
    a > 0 && p(a), C();
  }
  function C() {
    i = 0, a = 0;
  }
}
function rs(e) {
  let t = 0, r = 0, n = e.length;
  e: for (; n--; ) {
    let s = e[n];
    if (s === Yt) {
      r++;
      continue;
    }
    for (let u = s.length - 1; u >= 0; u--) {
      let i = s[u];
      if (i === " " || i === "	") t++;
      else {
        e[n] = s.slice(0, u + 1);
        break e;
      }
    }
  }
  if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Yt);
  return t;
}
function Nr(e, t, r, n, s, u) {
  if (r === Number.POSITIVE_INFINITY) return true;
  let i = t.length, a = [e], o = [];
  for (; r >= 0; ) {
    if (a.length === 0) {
      if (i === 0) return true;
      a.push(t[--i]);
      continue;
    }
    let { mode: p, doc: y } = a.pop(), D = Se(y);
    switch (D) {
      case qe:
        o.push(y), r -= rt(y);
        break;
      case he:
      case Oe: {
        let m = D === he ? y : y.parts, C = y[es] ?? 0;
        for (let c = m.length - 1; c >= C; c--) a.push({ mode: p, doc: m[c] });
        break;
      }
      case Ve:
      case $e:
      case Qe:
      case ge:
        a.push({ mode: p, doc: y.contents });
        break;
      case Ke:
        r += rs(o);
        break;
      case me: {
        if (u && y.break) return false;
        let m = y.break ? Pe : p, C = y.expandedStates && m === Pe ? M(false, y.expandedStates, -1) : y.contents;
        a.push({ mode: m, doc: C });
        break;
      }
      case Te: {
        let C = (y.groupId ? s[y.groupId] || at : p) === Pe ? y.breakContents : y.flatContents;
        C && a.push({ mode: p, doc: C });
        break;
      }
      case ie:
        if (p === Pe || y.hard) return true;
        y.soft || (o.push(" "), r--);
        break;
      case ze:
        n = true;
        break;
      case We:
        if (n) return false;
        break;
    }
  }
  return false;
}
function ns(e, t) {
  let r = {}, n = t.printWidth, s = Gu(t.endOfLine), u = 0, i = [{ ind: Uu(), mode: Pe, doc: e }], a = [], o = false, p = [], y = 0;
  for (Bu(e); i.length > 0; ) {
    let { ind: m, mode: C, doc: c } = i.pop();
    switch (Se(c)) {
      case qe: {
        let A = s !== `
` ? Y(false, c, `
`, s) : c;
        a.push(A), i.length > 0 && (u += rt(A));
        break;
      }
      case he:
        for (let A = c.length - 1; A >= 0; A--) i.push({ ind: m, mode: C, doc: c[A] });
        break;
      case st:
        if (y >= 2) throw new Error("There are too many 'cursor' in doc.");
        a.push(Yt), y++;
        break;
      case Ve:
        i.push({ ind: Sp(m, t), mode: C, doc: c.contents });
        break;
      case $e:
        i.push({ ind: Bp(m, c.n, t), mode: C, doc: c.contents });
        break;
      case Ke:
        u -= rs(a);
        break;
      case me:
        switch (C) {
          case at:
            if (!o) {
              i.push({ ind: m, mode: c.break ? Pe : at, doc: c.contents });
              break;
            }
          case Pe: {
            o = false;
            let A = { ind: m, mode: at, doc: c.contents }, d = n - u, S = p.length > 0;
            if (!c.break && Nr(A, i, d, S, r)) i.push(A);
            else if (c.expandedStates) {
              let g = M(false, c.expandedStates, -1);
              if (c.break) {
                i.push({ ind: m, mode: Pe, doc: g });
                break;
              } else for (let _ = 1; _ < c.expandedStates.length + 1; _++) if (_ >= c.expandedStates.length) {
                i.push({ ind: m, mode: Pe, doc: g });
                break;
              } else {
                let v = c.expandedStates[_], j = { ind: m, mode: at, doc: v };
                if (Nr(j, i, d, S, r)) {
                  i.push(j);
                  break;
                }
              }
            } else i.push({ ind: m, mode: Pe, doc: c.contents });
            break;
          }
        }
        c.id && (r[c.id] = M(false, i, -1).mode);
        break;
      case Oe: {
        let A = n - u, d = c[es] ?? 0, { parts: S } = c, g = S.length - d;
        if (g === 0) break;
        let _ = S[d + 0], v = S[d + 1], j = { ind: m, mode: at, doc: _ }, I = { ind: m, mode: Pe, doc: _ }, G = Nr(j, [], A, p.length > 0, r, true);
        if (g === 1) {
          G ? i.push(j) : i.push(I);
          break;
        }
        let P = { ind: m, mode: at, doc: v }, N = { ind: m, mode: Pe, doc: v };
        if (g === 2) {
          G ? i.push(P, j) : i.push(N, I);
          break;
        }
        let ue = S[d + 2], Q = { ind: m, mode: C, doc: { ...c, [es]: d + 2 } };
        Nr({ ind: m, mode: at, doc: [_, v, ue] }, [], A, p.length > 0, r, true) ? i.push(Q, P, j) : G ? i.push(Q, N, j) : i.push(Q, N, I);
        break;
      }
      case Te:
      case Qe: {
        let A = c.groupId ? r[c.groupId] : C;
        if (A === Pe) {
          let d = c.type === Te ? c.breakContents : c.negate ? c.contents : f(c.contents);
          d && i.push({ ind: m, mode: C, doc: d });
        }
        if (A === at) {
          let d = c.type === Te ? c.flatContents : c.negate ? f(c.contents) : c.contents;
          d && i.push({ ind: m, mode: C, doc: d });
        }
        break;
      }
      case ze:
        p.push({ ind: m, mode: C, doc: c.contents });
        break;
      case We:
        p.length > 0 && i.push({ ind: m, mode: C, doc: Yn });
        break;
      case ie:
        switch (C) {
          case at:
            if (c.hard) o = true;
            else {
              c.soft || (a.push(" "), u += 1);
              break;
            }
          case Pe:
            if (p.length > 0) {
              i.push({ ind: m, mode: C, doc: c }, ...p.reverse()), p.length = 0;
              break;
            }
            c.literal ? m.root ? (a.push(s, m.root.value), u = m.root.length) : (a.push(s), u = 0) : (u -= rs(a), a.push(s + m.value), u = m.length);
            break;
        }
        break;
      case ge:
        i.push({ ind: m, mode: C, doc: c.contents });
        break;
      case _e:
        break;
      default:
        throw new dt(c);
    }
    i.length === 0 && p.length > 0 && (i.push(...p.reverse()), p.length = 0);
  }
  let D = a.indexOf(Yt);
  if (D !== -1) {
    let m = a.indexOf(Yt, D + 1);
    if (m === -1) return { formatted: a.filter((d) => d !== Yt).join("") };
    let C = a.slice(0, D).join(""), c = a.slice(D + 1, m).join(""), A = a.slice(m + 1).join("");
    return { formatted: C + c + A, cursorNodeStart: C.length, cursorNodeText: c };
  }
  return { formatted: a.join("") };
}
function bp(e, t, r = 0) {
  let n = 0;
  for (let s = r; s < e.length; ++s) e[s] === "	" ? n = n + t - n % t : n++;
  return n;
}
var Yu = bp;
function Pp(e, t) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : Yu(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var Xu = Pp;
function Gr(e, t, r) {
  let { node: n } = e;
  if (n.type === "TemplateLiteral" && Lp(e)) {
    let p = kp(e, r, t);
    if (p) return p;
  }
  let u = "expressions";
  n.type === "TSTemplateLiteralType" && (u = "types");
  let i = [], a = e.map(t, u);
  i.push(je, "`");
  let o = 0;
  return e.each(({ index: p, node: y }) => {
    if (i.push(t()), y.tail) return;
    let { tabWidth: D } = r, m = y.value.raw, C = m.includes(`
`) ? Xu(m, D) : o;
    o = C;
    let c = a[p], A = n[u][p], d = de(r.originalText, k(y), q(n.quasis[p + 1]));
    if (!d) {
      let g = ns(c, { ...r, printWidth: Number.POSITIVE_INFINITY }).formatted;
      g.includes(`
`) ? d = true : c = g;
    }
    d && (T(A) || A.type === "Identifier" || W(A) || A.type === "ConditionalExpression" || A.type === "SequenceExpression" || Ae(A) || De(A)) && (c = [f([E, c]), E]);
    let S = C === 0 && m.endsWith(`
`) ? Be(Number.NEGATIVE_INFINITY, c) : Lu(c, C, D);
    i.push(l(["${", S, je, "}"]));
  }, "quasis"), i.push("`"), i;
}
function Hu(e, t) {
  let r = t("quasi");
  return ut(r.label && { tagged: true, ...r.label }, [t("tag"), t(e.node.typeArguments ? "typeArguments" : "typeParameters"), je, r]);
}
function kp(e, t, r) {
  let { node: n } = e, s = n.quasis[0].value.raw.trim().split(/\s*\|\s*/u);
  if (s.length > 1 || s.some((u) => u.length > 0)) {
    t.__inJestEach = true;
    let u = e.map(r, "expressions");
    t.__inJestEach = false;
    let i = [], a = u.map((m) => "${" + ns(m, { ...t, printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" }).formatted + "}"), o = [{ hasLineBreak: false, cells: [] }];
    for (let m = 1; m < n.quasis.length; m++) {
      let C = M(false, o, -1), c = a[m - 1];
      C.cells.push(c), c.includes(`
`) && (C.hasLineBreak = true), n.quasis[m].value.raw.includes(`
`) && o.push({ hasLineBreak: false, cells: [] });
    }
    let p = Math.max(s.length, ...o.map((m) => m.cells.length)), y = Array.from({ length: p }).fill(0), D = [{ cells: s }, ...o.filter((m) => m.cells.length > 0)];
    for (let { cells: m } of D.filter((C) => !C.hasLineBreak)) for (let [C, c] of m.entries()) y[C] = Math.max(y[C], rt(c));
    return i.push(je, "`", f([F, b(F, D.map((m) => b(" | ", m.cells.map((C, c) => m.hasLineBreak ? C : C + " ".repeat(y[c] - rt(C))))))]), F, "`"), i;
  }
}
function Ip(e, t) {
  let { node: r } = e, n = t();
  return T(r) && (n = l([f([E, n]), E])), ["${", n, je, "}"];
}
function Xt(e, t) {
  return e.map((r) => Ip(r, t), "expressions");
}
function Ur(e, t) {
  return yt(e, (r) => typeof r == "string" ? t ? Y(false, r, /(\\*)`/gu, "$1$1\\`") : ss(r) : r);
}
function ss(e) {
  return Y(false, e, /([\\`]|\$\{)/gu, String.raw`\$1`);
}
function Lp({ node: e, parent: t }) {
  let r = /^[fx]?(?:describe|it|test)$/u;
  return t.type === "TaggedTemplateExpression" && t.quasi === e && t.tag.type === "MemberExpression" && t.tag.property.type === "Identifier" && t.tag.property.name === "each" && (t.tag.object.type === "Identifier" && r.test(t.tag.object.name) || t.tag.object.type === "MemberExpression" && t.tag.object.property.type === "Identifier" && (t.tag.object.property.name === "only" || t.tag.object.property.name === "skip") && t.tag.object.object.type === "Identifier" && r.test(t.tag.object.object.name));
}
var is = [(e, t) => e.type === "ObjectExpression" && t === "properties", (e, t) => e.type === "CallExpression" && e.callee.type === "Identifier" && e.callee.name === "Component" && t === "arguments", (e, t) => e.type === "Decorator" && t === "expression"];
function Vu(e) {
  let t = (n) => n.type === "TemplateLiteral", r = (n, s) => Ce(n) && !n.computed && n.key.type === "Identifier" && n.key.name === "styles" && s === "value";
  return e.match(t, (n, s) => U(n) && s === "elements", r, ...is) || e.match(t, r, ...is);
}
function $u(e) {
  return e.match((t) => t.type === "TemplateLiteral", (t, r) => Ce(t) && !t.computed && t.key.type === "Identifier" && t.key.name === "template" && r === "value", ...is);
}
function us(e, t) {
  return T(e, h.Block | h.Leading, ({ value: r }) => r === ` ${t} `);
}
function Yr({ node: e, parent: t }, r) {
  return us(e, r) || wp(t) && us(t, r) || t.type === "ExpressionStatement" && us(t, r);
}
function wp(e) {
  return e.type === "AsConstExpression" || e.type === "TSAsExpression" && e.typeAnnotation.type === "TSTypeReference" && e.typeAnnotation.typeName.type === "Identifier" && e.typeAnnotation.typeName.name === "const";
}
async function Op(e, t, r) {
  let { node: n } = r, s = n.quasis.map((y) => y.value.raw), u = 0, i = s.reduce((y, D, m) => m === 0 ? D : y + "@prettier-placeholder-" + u++ + "-id" + D, ""), a = await e(i, { parser: "scss" }), o = Xt(r, t), p = _p(a, o);
  if (!p) throw new Error("Couldn't insert all the expressions");
  return ["`", f([F, p]), E, "`"];
}
function _p(e, t) {
  if (!O(t)) return e;
  let r = 0, n = yt(Ut(e), (s) => typeof s != "string" || !s.includes("@prettier-placeholder") ? s : s.split(/@prettier-placeholder-(\d+)-id/u).map((u, i) => i % 2 === 0 ? ve(u) : (r++, t[u])));
  return t.length === r ? n : null;
}
function vp({ node: e, parent: t, grandparent: r }) {
  return r && e.quasis && t.type === "JSXExpressionContainer" && r.type === "JSXElement" && r.openingElement.name.name === "style" && r.openingElement.attributes.some((n) => n.type === "JSXAttribute" && n.name.name === "jsx") || (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "css" || (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "MemberExpression" && t.tag.object.name === "css" && (t.tag.property.name === "global" || t.tag.property.name === "resolve");
}
function Xr(e) {
  return e.type === "Identifier" && e.name === "styled";
}
function Ku(e) {
  return /^[A-Z]/u.test(e.object.name) && e.property.name === "extend";
}
function jp({ parent: e }) {
  if (!e || e.type !== "TaggedTemplateExpression") return false;
  let t = e.tag.type === "ParenthesizedExpression" ? e.tag.expression : e.tag;
  switch (t.type) {
    case "MemberExpression":
      return Xr(t.object) || Ku(t);
    case "CallExpression":
      return Xr(t.callee) || t.callee.type === "MemberExpression" && (t.callee.object.type === "MemberExpression" && (Xr(t.callee.object.object) || Ku(t.callee.object)) || t.callee.object.type === "CallExpression" && Xr(t.callee.object.callee));
    case "Identifier":
      return t.name === "css";
    default:
      return false;
  }
}
function Mp({ parent: e, grandparent: t }) {
  return (t == null ? void 0 : t.type) === "JSXAttribute" && e.type === "JSXExpressionContainer" && t.name.type === "JSXIdentifier" && t.name.name === "css";
}
function Rp(e) {
  if (vp(e) || jp(e) || Mp(e) || Vu(e)) return Op;
}
var Qu = Rp;
async function Jp(e, t, r) {
  let { node: n } = r, s = n.quasis.length, u = Xt(r, t), i = [];
  for (let a = 0; a < s; a++) {
    let o = n.quasis[a], p = a === 0, y = a === s - 1, D = o.value.cooked, m = D.split(`
`), C = m.length, c = u[a], A = C > 2 && m[0].trim() === "" && m[1].trim() === "", d = C > 2 && m[C - 1].trim() === "" && m[C - 2].trim() === "", S = m.every((_) => /^\s*(?:#[^\n\r]*)?$/u.test(_));
    if (!y && /#[^\n\r]*$/u.test(m[C - 1])) return null;
    let g = null;
    S ? g = qp(m) : g = await e(D, { parser: "graphql" }), g ? (g = Ur(g, false), !p && A && i.push(""), i.push(g), !y && d && i.push("")) : !p && !y && A && i.push(""), c && i.push(c);
  }
  return ["`", f([F, b(F, i)]), F, "`"];
}
function qp(e) {
  let t = [], r = false, n = e.map((s) => s.trim());
  for (let [s, u] of n.entries()) u !== "" && (n[s - 1] === "" && r ? t.push([F, u]) : t.push(u), r = true);
  return t.length === 0 ? null : b(F, t);
}
function Wp({ node: e, parent: t }) {
  return Yr({ node: e, parent: t }, "GraphQL") || t && (t.type === "TaggedTemplateExpression" && (t.tag.type === "MemberExpression" && t.tag.object.name === "graphql" && t.tag.property.name === "experimental" || t.tag.type === "Identifier" && (t.tag.name === "gql" || t.tag.name === "graphql")) || t.type === "CallExpression" && t.callee.type === "Identifier" && t.callee.name === "graphql");
}
function Np(e) {
  if (Wp(e)) return Jp;
}
var zu = Np;
var as = 0;
async function Zu(e, t, r, n, s) {
  let { node: u } = n, i = as;
  as = as + 1 >>> 0;
  let a = (S) => `PRETTIER_HTML_PLACEHOLDER_${S}_${i}_IN_JS`, o = u.quasis.map((S, g, _) => g === _.length - 1 ? S.value.cooked : S.value.cooked + a(g)).join(""), p = Xt(n, r), y = new RegExp(a(String.raw`(\d+)`), "gu"), D = 0, m = await t(o, { parser: e, __onHtmlRoot(S) {
    D = S.children.length;
  } }), C = yt(m, (S) => {
    if (typeof S != "string") return S;
    let g = [], _ = S.split(y);
    for (let v = 0; v < _.length; v++) {
      let j = _[v];
      if (v % 2 === 0) {
        j && (j = ss(j), s.__embeddedInHtml && (j = Y(false, j, /<\/(?=script\b)/giu, String.raw`<\/`)), g.push(j));
        continue;
      }
      let I = Number(j);
      g.push(p[I]);
    }
    return g;
  }), c = /^\s/u.test(o) ? " " : "", A = /\s$/u.test(o) ? " " : "", d = s.htmlWhitespaceSensitivity === "ignore" ? F : c && A ? x : null;
  return d ? l(["`", f([d, l(C)]), d, "`"]) : ut({ hug: false }, l(["`", c, D > 1 ? f(l(C)) : l(C), A, "`"]));
}
function Gp(e) {
  return Yr(e, "HTML") || e.match((t) => t.type === "TemplateLiteral", (t, r) => t.type === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "html" && r === "quasi");
}
var Up = Zu.bind(void 0, "html"), Yp = Zu.bind(void 0, "angular");
function Xp(e) {
  if (Gp(e)) return Up;
  if ($u(e)) return Yp;
}
var ei = Xp;
async function Hp(e, t, r) {
  let { node: n } = r, s = Y(false, n.quasis[0].value.raw, /((?:\\\\)*)\\`/gu, (o, p) => "\\".repeat(p.length / 2) + "`"), u = Vp(s), i = u !== "";
  i && (s = Y(false, s, new RegExp(`^${u}`, "gmu"), ""));
  let a = Ur(await e(s, { parser: "markdown", __inJsTemplate: true }), true);
  return ["`", i ? f([E, a]) : [Rr, Iu(a)], E, "`"];
}
function Vp(e) {
  let t = e.match(/^([^\S\n]*)\S/mu);
  return t === null ? "" : t[1];
}
function $p(e) {
  if (Kp(e)) return Hp;
}
function Kp({ node: e, parent: t }) {
  return (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && e.quasis.length === 1 && t.tag.type === "Identifier" && (t.tag.name === "md" || t.tag.name === "markdown");
}
var ti = $p;
function Qp(e) {
  let { node: t } = e;
  if (t.type !== "TemplateLiteral" || zp(t)) return;
  let r;
  for (let n of [Qu, zu, ei, ti]) if (r = n(e), !!r) return t.quasis.length === 1 && t.quasis[0].value.raw.trim() === "" ? "``" : async (...s) => {
    let u = await r(...s);
    return u && ut({ embed: true, ...u.label }, u);
  };
}
function zp({ quasis: e }) {
  return e.some(({ value: { cooked: t } }) => t === null);
}
var ri = Qp;
var Zp = /\*\/$/, ec = /^\/\*\*?/, ii = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, tc = /(^|\s+)\/\/([^\n\r]*)/g, ni = /^(\r?\n)+/, rc = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, si = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, nc = /(\r?\n|^) *\* ?/g, ai = [];
function oi(e) {
  let t = e.match(ii);
  return t ? t[0].trimStart() : "";
}
function pi(e) {
  let t = e.match(ii), r = t == null ? void 0 : t[0];
  return r == null ? e : e.slice(r.length);
}
function ci(e) {
  let t = `
`;
  e = Y(false, e.replace(ec, "").replace(Zp, ""), nc, "$1");
  let r = "";
  for (; r !== e; ) r = e, e = Y(false, e, rc, `${t}$1 $2${t}`);
  e = e.replace(ni, "").trimEnd();
  let n = /* @__PURE__ */ Object.create(null), s = Y(false, e, si, "").replace(ni, "").trimEnd(), u;
  for (; u = si.exec(e); ) {
    let i = Y(false, u[2], tc, "");
    if (typeof n[u[1]] == "string" || Array.isArray(n[u[1]])) {
      let a = n[u[1]];
      n[u[1]] = [...ai, ...Array.isArray(a) ? a : [a], i];
    } else n[u[1]] = i;
  }
  return { comments: s, pragmas: n };
}
function li({ comments: e = "", pragmas: t = {} }) {
  let r = `
`, n = "/**", s = " *", u = " */", i = Object.keys(t), a = i.flatMap((p) => ui(p, t[p])).map((p) => `${s} ${p}${r}`).join("");
  if (!e) {
    if (i.length === 0) return "";
    if (i.length === 1 && !Array.isArray(t[i[0]])) {
      let p = t[i[0]];
      return `${n} ${ui(i[0], p)[0]}${u}`;
    }
  }
  let o = e.split(r).map((p) => `${s} ${p}`).join(r) + r;
  return n + r + (e ? o : "") + (e && i.length > 0 ? s + r : "") + a + u;
}
function ui(e, t) {
  return [...ai, ...Array.isArray(t) ? t : [t]].map((r) => `@${e} ${r}`.trim());
}
function sc(e) {
  if (!e.startsWith("#!")) return "";
  let t = e.indexOf(`
`);
  return t === -1 ? e : e.slice(0, t);
}
var mi = sc;
function uc(e) {
  let t = mi(e);
  t && (e = e.slice(t.length + 1));
  let r = oi(e), { pragmas: n, comments: s } = ci(r);
  return { shebang: t, text: e, pragmas: n, comments: s };
}
function yi(e) {
  let { shebang: t, text: r, pragmas: n, comments: s } = uc(e), u = pi(r), i = li({ pragmas: { format: "", ...n }, comments: s.trimStart() });
  return (t ? `${t}
` : "") + i + (u.startsWith(`
`) ? `
` : `

`) + u;
}
function ic(e, t) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: s, locEnd: u, [Symbol.for("printedComments")]: i } = t, { node: a } = e, o = s(a), p = u(a);
  for (let y of n) s(y) >= o && u(y) <= p && i.add(y);
  return r.slice(o, p);
}
var Di = ic;
function os(e, t) {
  var u, i, a, o, p, y, D, m, C;
  if (e.isRoot) return false;
  let { node: r, key: n, parent: s } = e;
  if (t.__isInHtmlInterpolation && !t.bracketSpacing && cc(r) && yr(e)) return true;
  if (ac(r)) return false;
  if (r.type === "Identifier") {
    if ((u = r.extra) != null && u.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r.name) || n === "left" && (r.name === "async" && !s.await || r.name === "let") && s.type === "ForOfStatement") return true;
    if (r.name === "let") {
      let c = (i = e.findAncestor((A) => A.type === "ForOfStatement")) == null ? void 0 : i.left;
      if (c && ae(c, (A) => A === r)) return true;
    }
    if (n === "object" && r.name === "let" && s.type === "MemberExpression" && s.computed && !s.optional) {
      let c = e.findAncestor((d) => d.type === "ExpressionStatement" || d.type === "ForStatement" || d.type === "ForInStatement"), A = c ? c.type === "ExpressionStatement" ? c.expression : c.type === "ForStatement" ? c.init : c.left : void 0;
      if (A && ae(A, (d) => d === r)) return true;
    }
    if (n === "expression") switch (r.name) {
      case "await":
      case "interface":
      case "module":
      case "using":
      case "yield":
      case "let":
      case "component":
      case "hook":
      case "type": {
        let c = e.findAncestor((A) => !Ae(A));
        if (c !== s && c.type === "ExpressionStatement") return true;
      }
    }
    return false;
  }
  if (r.type === "ObjectExpression" || r.type === "FunctionExpression" || r.type === "ClassExpression" || r.type === "DoExpression") {
    let c = (a = e.findAncestor((A) => A.type === "ExpressionStatement")) == null ? void 0 : a.expression;
    if (c && ae(c, (A) => A === r)) return true;
  }
  if (r.type === "ObjectExpression") {
    let c = (o = e.findAncestor((A) => A.type === "ArrowFunctionExpression")) == null ? void 0 : o.body;
    if (c && c.type !== "SequenceExpression" && c.type !== "AssignmentExpression" && ae(c, (A) => A === r)) return true;
  }
  switch (s.type) {
    case "ParenthesizedExpression":
      return false;
    case "ClassDeclaration":
    case "ClassExpression":
      if (n === "superClass" && (r.type === "ArrowFunctionExpression" || r.type === "AssignmentExpression" || r.type === "AwaitExpression" || r.type === "BinaryExpression" || r.type === "ConditionalExpression" || r.type === "LogicalExpression" || r.type === "NewExpression" || r.type === "ObjectExpression" || r.type === "SequenceExpression" || r.type === "TaggedTemplateExpression" || r.type === "UnaryExpression" || r.type === "UpdateExpression" || r.type === "YieldExpression" || r.type === "TSNonNullExpression" || r.type === "ClassExpression" && O(r.decorators))) return true;
      break;
    case "ExportDefaultDeclaration":
      return fi(e, t) || r.type === "SequenceExpression";
    case "Decorator":
      if (n === "expression" && !mc(r)) return true;
      break;
    case "TypeAnnotation":
      if (e.match(void 0, void 0, (c, A) => A === "returnType" && c.type === "ArrowFunctionExpression") && pc(r)) return true;
      break;
    case "BinaryExpression":
      if (n === "left" && (s.operator === "in" || s.operator === "instanceof") && r.type === "UnaryExpression") return true;
      break;
    case "VariableDeclarator":
      if (n === "init" && e.match(void 0, void 0, (c, A) => A === "declarations" && c.type === "VariableDeclaration", (c, A) => A === "left" && c.type === "ForInStatement")) return true;
      break;
  }
  switch (r.type) {
    case "UpdateExpression":
      if (s.type === "UnaryExpression") return r.prefix && (r.operator === "++" && s.operator === "+" || r.operator === "--" && s.operator === "-");
    case "UnaryExpression":
      switch (s.type) {
        case "UnaryExpression":
          return r.operator === s.operator && (r.operator === "+" || r.operator === "-");
        case "BindExpression":
          return true;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "TaggedTemplateExpression":
          return true;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "BinaryExpression":
          return n === "left" && s.operator === "**";
        case "TSNonNullExpression":
          return true;
        default:
          return false;
      }
    case "BinaryExpression":
      if (s.type === "UpdateExpression" || r.operator === "in" && oc(e)) return true;
      if (r.operator === "|>" && ((p = r.extra) != null && p.parenthesized)) {
        let c = e.grandparent;
        if (c.type === "BinaryExpression" && c.operator === "|>") return true;
      }
    case "TSTypeAssertion":
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
    case "LogicalExpression":
      switch (s.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
          return !Ae(r);
        case "ConditionalExpression":
          return Ae(r) || lu(r);
        case "CallExpression":
        case "NewExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "ClassExpression":
        case "ClassDeclaration":
          return n === "superClass";
        case "TSTypeAssertion":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "JSXSpreadAttribute":
        case "SpreadElement":
        case "BindExpression":
        case "AwaitExpression":
        case "TSNonNullExpression":
        case "UpdateExpression":
          return true;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "AssignmentExpression":
        case "AssignmentPattern":
          return n === "left" && (r.type === "TSTypeAssertion" || Ae(r));
        case "LogicalExpression":
          if (r.type === "LogicalExpression") return s.operator !== r.operator;
        case "BinaryExpression": {
          let { operator: c, type: A } = r;
          if (!c && A !== "TSTypeAssertion") return true;
          let d = sr(c), S = s.operator, g = sr(S);
          return g > d || n === "right" && g === d || g === d && !ar(S, c) ? true : g < d && c === "%" ? S === "+" || S === "-" : !!Fu(S);
        }
        default:
          return false;
      }
    case "SequenceExpression":
      switch (s.type) {
        case "ReturnStatement":
          return false;
        case "ForStatement":
          return false;
        case "ExpressionStatement":
          return n !== "expression";
        case "ArrowFunctionExpression":
          return n !== "body";
        default:
          return true;
      }
    case "YieldExpression":
      if (s.type === "AwaitExpression" || s.type === "TSTypeAssertion") return true;
    case "AwaitExpression":
      switch (s.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "SpreadElement":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "BindExpression":
          return true;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "ConditionalExpression":
          return n === "test";
        case "BinaryExpression":
          return !(!r.argument && s.operator === "|>");
        default:
          return false;
      }
    case "TSFunctionType":
      if (e.match((c) => c.type === "TSFunctionType", (c, A) => A === "typeAnnotation" && c.type === "TSTypeAnnotation", (c, A) => A === "returnType" && c.type === "ArrowFunctionExpression")) return true;
    case "TSConditionalType":
    case "TSConstructorType":
    case "ConditionalTypeAnnotation":
      if (n === "extendsType" && Je(r) && s.type === r.type || n === "checkType" && Je(s)) return true;
      if (n === "extendsType" && s.type === "TSConditionalType") {
        let { typeAnnotation: c } = r.returnType || r.typeAnnotation;
        if (c.type === "TSTypePredicate" && c.typeAnnotation && (c = c.typeAnnotation.typeAnnotation), c.type === "TSInferType" && c.typeParameter.constraint) return true;
      }
    case "TSUnionType":
    case "TSIntersectionType":
      if ((we(s) || Nt(s)) && s.types.length > 1 && (!r.types || r.types.length > 1)) return true;
    case "TSInferType":
      if (r.type === "TSInferType") {
        if (s.type === "TSRestType") return false;
        if (n === "types" && (s.type === "TSUnionType" || s.type === "TSIntersectionType") && r.typeParameter.type === "TSTypeParameter" && r.typeParameter.constraint) return true;
      }
    case "TSTypeOperator":
      return s.type === "TSArrayType" || s.type === "TSOptionalType" || s.type === "TSRestType" || n === "objectType" && s.type === "TSIndexedAccessType" || s.type === "TSTypeOperator" || s.type === "TSTypeAnnotation" && e.grandparent.type.startsWith("TSJSDoc");
    case "TSTypeQuery":
      return n === "objectType" && s.type === "TSIndexedAccessType" || n === "elementType" && s.type === "TSArrayType";
    case "TypeOperator":
      return s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType") || s.type === "TypeOperator";
    case "TypeofTypeAnnotation":
      return n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType") || n === "elementType" && s.type === "ArrayTypeAnnotation";
    case "ArrayTypeAnnotation":
      return s.type === "NullableTypeAnnotation";
    case "IntersectionTypeAnnotation":
    case "UnionTypeAnnotation":
      return s.type === "TypeOperator" || s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || s.type === "IntersectionTypeAnnotation" || s.type === "UnionTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType");
    case "InferTypeAnnotation":
    case "NullableTypeAnnotation":
      return s.type === "ArrayTypeAnnotation" || n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType");
    case "ComponentTypeAnnotation":
    case "FunctionTypeAnnotation": {
      if (r.type === "ComponentTypeAnnotation" && (r.rendersType === null || r.rendersType === void 0)) return false;
      if (e.match(void 0, (A, d) => d === "typeAnnotation" && A.type === "TypeAnnotation", (A, d) => d === "returnType" && A.type === "ArrowFunctionExpression") || e.match(void 0, (A, d) => d === "typeAnnotation" && A.type === "TypePredicate", (A, d) => d === "typeAnnotation" && A.type === "TypeAnnotation", (A, d) => d === "returnType" && A.type === "ArrowFunctionExpression")) return true;
      let c = s.type === "NullableTypeAnnotation" ? e.grandparent : s;
      return c.type === "UnionTypeAnnotation" || c.type === "IntersectionTypeAnnotation" || c.type === "ArrayTypeAnnotation" || n === "objectType" && (c.type === "IndexedAccessType" || c.type === "OptionalIndexedAccessType") || n === "checkType" && s.type === "ConditionalTypeAnnotation" || n === "extendsType" && s.type === "ConditionalTypeAnnotation" && ((y = r.returnType) == null ? void 0 : y.type) === "InferTypeAnnotation" && ((D = r.returnType) == null ? void 0 : D.typeParameter.bound) || c.type === "NullableTypeAnnotation" || s.type === "FunctionTypeParam" && s.name === null && z(r).some((A) => {
        var d;
        return ((d = A.typeAnnotation) == null ? void 0 : d.type) === "NullableTypeAnnotation";
      });
    }
    case "OptionalIndexedAccessType":
      return n === "objectType" && s.type === "IndexedAccessType";
    case "StringLiteral":
    case "NumericLiteral":
    case "Literal":
      if (typeof r.value == "string" && s.type === "ExpressionStatement" && !s.directive) {
        let c = e.grandparent;
        return c.type === "Program" || c.type === "BlockStatement";
      }
      return n === "object" && s.type === "MemberExpression" && typeof r.value == "number";
    case "AssignmentExpression": {
      let c = e.grandparent;
      return n === "body" && s.type === "ArrowFunctionExpression" ? true : n === "key" && (s.type === "ClassProperty" || s.type === "PropertyDefinition") && s.computed || (n === "init" || n === "update") && s.type === "ForStatement" ? false : s.type === "ExpressionStatement" ? r.left.type === "ObjectPattern" : !(n === "key" && s.type === "TSPropertySignature" || s.type === "AssignmentExpression" || s.type === "SequenceExpression" && c.type === "ForStatement" && (c.init === s || c.update === s) || n === "value" && s.type === "Property" && c.type === "ObjectPattern" && c.properties.includes(s) || s.type === "NGChainedExpression" || n === "node" && s.type === "JsExpressionRoot");
    }
    case "ConditionalExpression":
      switch (s.type) {
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "SpreadElement":
        case "BinaryExpression":
        case "LogicalExpression":
        case "NGPipeExpression":
        case "ExportDefaultDeclaration":
        case "AwaitExpression":
        case "JSXSpreadAttribute":
        case "TSTypeAssertion":
        case "TypeCastExpression":
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
          return true;
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "ConditionalExpression":
          return t.experimentalTernaries ? false : n === "test";
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        default:
          return false;
      }
    case "FunctionExpression":
      switch (s.type) {
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "TaggedTemplateExpression":
          return true;
        default:
          return false;
      }
    case "ArrowFunctionExpression":
      switch (s.type) {
        case "BinaryExpression":
          return s.operator !== "|>" || ((m = r.extra) == null ? void 0 : m.parenthesized);
        case "NewExpression":
        case "CallExpression":
        case "OptionalCallExpression":
          return n === "callee";
        case "MemberExpression":
        case "OptionalMemberExpression":
          return n === "object";
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "AsExpression":
        case "AsConstExpression":
        case "SatisfiesExpression":
        case "TSNonNullExpression":
        case "BindExpression":
        case "TaggedTemplateExpression":
        case "UnaryExpression":
        case "LogicalExpression":
        case "AwaitExpression":
        case "TSTypeAssertion":
          return true;
        case "ConditionalExpression":
          return n === "test";
        default:
          return false;
      }
    case "ClassExpression":
      switch (s.type) {
        case "NewExpression":
          return n === "callee";
        default:
          return false;
      }
    case "OptionalMemberExpression":
    case "OptionalCallExpression":
    case "CallExpression":
    case "MemberExpression":
      if (lc(e)) return true;
    case "TaggedTemplateExpression":
    case "TSNonNullExpression":
      if (n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression")) {
        let c = r;
        for (; c; ) switch (c.type) {
          case "CallExpression":
          case "OptionalCallExpression":
            return true;
          case "MemberExpression":
          case "OptionalMemberExpression":
          case "BindExpression":
            c = c.object;
            break;
          case "TaggedTemplateExpression":
            c = c.tag;
            break;
          case "TSNonNullExpression":
            c = c.expression;
            break;
          default:
            return false;
        }
      }
      return false;
    case "BindExpression":
      return n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression") || n === "object" && W(s);
    case "NGPipeExpression":
      return !(s.type === "NGRoot" || s.type === "NGMicrosyntaxExpression" || s.type === "ObjectProperty" && !((C = r.extra) != null && C.parenthesized) || U(s) || n === "arguments" && L(s) || n === "right" && s.type === "NGPipeExpression" || n === "property" && s.type === "MemberExpression" || s.type === "AssignmentExpression");
    case "JSXFragment":
    case "JSXElement":
      return n === "callee" || n === "left" && s.type === "BinaryExpression" && s.operator === "<" || !U(s) && s.type !== "ArrowFunctionExpression" && s.type !== "AssignmentExpression" && s.type !== "AssignmentPattern" && s.type !== "BinaryExpression" && s.type !== "NewExpression" && s.type !== "ConditionalExpression" && s.type !== "ExpressionStatement" && s.type !== "JsExpressionRoot" && s.type !== "JSXAttribute" && s.type !== "JSXElement" && s.type !== "JSXExpressionContainer" && s.type !== "JSXFragment" && s.type !== "LogicalExpression" && !L(s) && !Ce(s) && s.type !== "ReturnStatement" && s.type !== "ThrowStatement" && s.type !== "TypeCastExpression" && s.type !== "VariableDeclarator" && s.type !== "YieldExpression";
    case "TSInstantiationExpression":
      return n === "object" && W(s);
  }
  return false;
}
var ac = R(["BlockStatement", "BreakStatement", "ComponentDeclaration", "ClassBody", "ClassDeclaration", "ClassMethod", "ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ContinueStatement", "DebuggerStatement", "DeclareComponent", "DeclareClass", "DeclareExportAllDeclaration", "DeclareExportDeclaration", "DeclareFunction", "DeclareHook", "DeclareInterface", "DeclareModule", "DeclareModuleExports", "DeclareNamespace", "DeclareVariable", "DeclareEnum", "DoWhileStatement", "EnumDeclaration", "ExportAllDeclaration", "ExportDefaultDeclaration", "ExportNamedDeclaration", "ExpressionStatement", "ForInStatement", "ForOfStatement", "ForStatement", "FunctionDeclaration", "HookDeclaration", "IfStatement", "ImportDeclaration", "InterfaceDeclaration", "LabeledStatement", "MethodDefinition", "ReturnStatement", "SwitchStatement", "ThrowStatement", "TryStatement", "TSDeclareFunction", "TSEnumDeclaration", "TSImportEqualsDeclaration", "TSInterfaceDeclaration", "TSModuleDeclaration", "TSNamespaceExportDeclaration", "TypeAlias", "VariableDeclaration", "WhileStatement", "WithStatement"]);
function oc(e) {
  let t = 0, { node: r } = e;
  for (; r; ) {
    let n = e.getParentNode(t++);
    if ((n == null ? void 0 : n.type) === "ForStatement" && n.init === r) return true;
    r = n;
  }
  return false;
}
function pc(e) {
  return ur(e, (t) => t.type === "ObjectTypeAnnotation" && ur(t, (r) => r.type === "FunctionTypeAnnotation"));
}
function cc(e) {
  return se(e);
}
function yr(e) {
  let { parent: t, key: r } = e;
  switch (t.type) {
    case "NGPipeExpression":
      if (r === "arguments" && e.isLast) return e.callParent(yr);
      break;
    case "ObjectProperty":
      if (r === "value") return e.callParent(() => e.key === "properties" && e.isLast);
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      if (r === "right") return e.callParent(yr);
      break;
    case "ConditionalExpression":
      if (r === "alternate") return e.callParent(yr);
      break;
    case "UnaryExpression":
      if (t.prefix) return e.callParent(yr);
      break;
  }
  return false;
}
function fi(e, t) {
  let { node: r, parent: n } = e;
  return r.type === "FunctionExpression" || r.type === "ClassExpression" ? n.type === "ExportDefaultDeclaration" || !os(e, t) : !Jt(r) || n.type !== "ExportDefaultDeclaration" && os(e, t) ? false : e.call(() => fi(e, t), ...Lr(r));
}
function lc(e) {
  return !!(e.match(void 0, (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match((t) => t.type === "OptionalCallExpression" || t.type === "OptionalMemberExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match((t) => t.type === "OptionalCallExpression" || t.type === "OptionalMemberExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match(void 0, (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match(void 0, (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "tag" && t.type === "TaggedTemplateExpression") || e.match((t) => t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && (t.type === "CallExpression" || t.type === "NewExpression")) || e.match((t) => t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && t.type === "CallExpression") || e.match((t) => t.type === "CallExpression" || t.type === "MemberExpression", (t, r) => r === "expression" && t.type === "ChainExpression") && (e.match(void 0, void 0, (t, r) => r === "callee" && (t.type === "CallExpression" && !t.optional || t.type === "NewExpression") || r === "object" && t.type === "MemberExpression" && !t.optional) || e.match(void 0, void 0, (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && t.type === "CallExpression")) || e.match((t) => t.type === "CallExpression" || t.type === "MemberExpression", (t, r) => r === "expression" && t.type === "TSNonNullExpression", (t, r) => r === "expression" && t.type === "ChainExpression", (t, r) => r === "object" && t.type === "MemberExpression" || r === "callee" && t.type === "CallExpression"));
}
function ps(e) {
  return e.type === "Identifier" ? true : W(e) ? !e.computed && !e.optional && e.property.type === "Identifier" && ps(e.object) : false;
}
function mc(e) {
  return e.type === "ChainExpression" && (e = e.expression), ps(e) || L(e) && !e.optional && ps(e.callee);
}
var ke = os;
function yc(e, t) {
  let r = t - 1;
  r = Xe(e, r, { backwards: true }), r = He(e, r, { backwards: true }), r = Xe(e, r, { backwards: true });
  let n = He(e, r, { backwards: true });
  return r !== n;
}
var Ei = yc;
var Dc = () => true;
function cs(e, t) {
  let r = e.node;
  return r.printed = true, t.printer.printComment(e, t);
}
function fc(e, t) {
  var y;
  let r = e.node, n = [cs(e, t)], { printer: s, originalText: u, locStart: i, locEnd: a } = t;
  if ((y = s.isBlockComment) == null ? void 0 : y.call(s, r)) {
    let D = Z(u, a(r)) ? Z(u, i(r), { backwards: true }) ? F : x : " ";
    n.push(D);
  } else n.push(F);
  let p = He(u, Xe(u, a(r)));
  return p !== false && Z(u, p) && n.push(F), n;
}
function Ec(e, t, r) {
  var p;
  let n = e.node, s = cs(e, t), { printer: u, originalText: i, locStart: a } = t, o = (p = u.isBlockComment) == null ? void 0 : p.call(u, n);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || Z(i, a(n), { backwards: true })) {
    let y = Ei(i, a(n));
    return { doc: Un([F, y ? F : "", s]), isBlock: o, hasLineSuffix: true };
  }
  return !o || r != null && r.hasLineSuffix ? { doc: [Un([" ", s]), Ee], isBlock: o, hasLineSuffix: true } : { doc: [" ", s], isBlock: o, hasLineSuffix: false };
}
function J(e, t, r = {}) {
  let { node: n } = e;
  if (!O(n == null ? void 0 : n.comments)) return "";
  let { indent: s = false, marker: u, filter: i = Dc } = r, a = [];
  if (e.each(({ node: p }) => {
    p.leading || p.trailing || p.marker !== u || !i(p) || a.push(cs(e, t));
  }, "comments"), a.length === 0) return "";
  let o = b(F, a);
  return s ? f([F, o]) : o;
}
function ls(e, t) {
  let r = e.node;
  if (!r) return {};
  let n = t[Symbol.for("printedComments")];
  if ((r.comments || []).filter((o) => !n.has(o)).length === 0) return { leading: "", trailing: "" };
  let u = [], i = [], a;
  return e.each(() => {
    let o = e.node;
    if (n != null && n.has(o)) return;
    let { leading: p, trailing: y } = o;
    p ? u.push(fc(e, t)) : y && (a = Ec(e, t, a), i.push(a.doc));
  }, "comments"), { leading: u, trailing: i };
}
function ye(e, t, r) {
  let { leading: n, trailing: s } = ls(e, r);
  return !n && !s ? t : lr(t, (u) => [n, u, s]);
}
var ms = class extends Error {
  constructor(t, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`);
    __publicField(this, "name", "UnexpectedNodeError");
    this.node = t;
  }
}, Ne = ms;
function ys(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var Ge, Ds = class {
  constructor(t) {
    Us(this, Ge);
    Ys(this, Ge, new Set(t));
  }
  getLeadingWhitespaceCount(t) {
    let r = ct(this, Ge), n = 0;
    for (let s = 0; s < t.length && r.has(t.charAt(s)); s++) n++;
    return n;
  }
  getTrailingWhitespaceCount(t) {
    let r = ct(this, Ge), n = 0;
    for (let s = t.length - 1; s >= 0 && r.has(t.charAt(s)); s--) n++;
    return n;
  }
  getLeadingWhitespace(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(0, r);
  }
  getTrailingWhitespace(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(t.length - r);
  }
  hasLeadingWhitespace(t) {
    return ct(this, Ge).has(t.charAt(0));
  }
  hasTrailingWhitespace(t) {
    return ct(this, Ge).has(M(false, t, -1));
  }
  trimStart(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(r);
  }
  trimEnd(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(0, t.length - r);
  }
  trim(t) {
    return this.trimEnd(this.trimStart(t));
  }
  split(t, r = false) {
    let n = `[${ys([...ct(this, Ge)].join(""))}]+`, s = new RegExp(r ? `(${n})` : n, "u");
    return t.split(s);
  }
  hasWhitespaceCharacter(t) {
    let r = ct(this, Ge);
    return Array.prototype.some.call(t, (n) => r.has(n));
  }
  hasNonWhitespaceCharacter(t) {
    let r = ct(this, Ge);
    return Array.prototype.some.call(t, (n) => !r.has(n));
  }
  isWhitespaceOnly(t) {
    let r = ct(this, Ge);
    return Array.prototype.every.call(t, (n) => r.has(n));
  }
};
Ge = /* @__PURE__ */ new WeakMap();
var Fi = Ds;
var Hr = new Fi(` 
\r	`), fs = (e) => e === "" || e === x || e === F || e === E;
function Fc(e, t, r) {
  var _, v, j, I, G;
  let { node: n } = e;
  if (n.type === "JSXElement" && Lc(n)) return [r("openingElement"), r("closingElement")];
  let s = n.type === "JSXElement" ? r("openingElement") : r("openingFragment"), u = n.type === "JSXElement" ? r("closingElement") : r("closingFragment");
  if (n.children.length === 1 && n.children[0].type === "JSXExpressionContainer" && (n.children[0].expression.type === "TemplateLiteral" || n.children[0].expression.type === "TaggedTemplateExpression")) return [s, ...e.map(r, "children"), u];
  n.children = n.children.map((P) => wc(P) ? { type: "JSXText", value: " ", raw: " " } : P);
  let i = n.children.some(X), a = n.children.filter((P) => P.type === "JSXExpressionContainer").length > 1, o = n.type === "JSXElement" && n.openingElement.attributes.length > 1, p = re(s) || i || o || a, y = e.parent.rootMarker === "mdx", D = t.singleQuote ? "{' '}" : '{" "}', m = y ? x : B([D, E], " "), C = ((v = (_ = n.openingElement) == null ? void 0 : _.name) == null ? void 0 : v.name) === "fbt", c = Cc(e, t, r, m, C), A = n.children.some((P) => Dr(P));
  for (let P = c.length - 2; P >= 0; P--) {
    let N = c[P] === "" && c[P + 1] === "", ue = c[P] === F && c[P + 1] === "" && c[P + 2] === F, Q = (c[P] === E || c[P] === F) && c[P + 1] === "" && c[P + 2] === m, Bt = c[P] === m && c[P + 1] === "" && (c[P + 2] === E || c[P + 2] === F), Ct = c[P] === m && c[P + 1] === "" && c[P + 2] === m, w = c[P] === E && c[P + 1] === "" && c[P + 2] === F || c[P] === F && c[P + 1] === "" && c[P + 2] === E;
    ue && A || N || Q || Ct || w ? c.splice(P, 2) : Bt && c.splice(P + 1, 2);
  }
  for (; c.length > 0 && fs(M(false, c, -1)); ) c.pop();
  for (; c.length > 1 && fs(c[0]) && fs(c[1]); ) c.shift(), c.shift();
  let d = [""];
  for (let [P, N] of c.entries()) {
    if (N === m) {
      if (P === 1 && Pu(c[P - 1])) {
        if (c.length === 2) {
          d.push([d.pop(), D]);
          continue;
        }
        d.push([D, F], "");
        continue;
      } else if (P === c.length - 1) {
        d.push([d.pop(), D]);
        continue;
      } else if (c[P - 1] === "" && c[P - 2] === F) {
        d.push([d.pop(), D]);
        continue;
      }
    }
    P % 2 === 0 ? d.push([d.pop(), N]) : d.push(N, ""), re(N) && (p = true);
  }
  let S = A ? qr(d) : l(d, { shouldBreak: true });
  if (((j = t.cursorNode) == null ? void 0 : j.type) === "JSXText" && n.children.includes(t.cursorNode) ? S = [mr, S, mr] : ((I = t.nodeBeforeCursor) == null ? void 0 : I.type) === "JSXText" && n.children.includes(t.nodeBeforeCursor) ? S = [mr, S] : ((G = t.nodeAfterCursor) == null ? void 0 : G.type) === "JSXText" && n.children.includes(t.nodeAfterCursor) && (S = [S, mr]), y) return S;
  let g = l([s, f([F, S]), F, u]);
  return p ? g : et([l([s, ...c, u]), g]);
}
function Cc(e, t, r, n, s) {
  let u = "", i = [u];
  function a(p) {
    u = p, i.push([i.pop(), p]);
  }
  function o(p) {
    p !== "" && (u = p, i.push(p, ""));
  }
  return e.each(({ node: p, next: y }) => {
    if (p.type === "JSXText") {
      let D = fe(p);
      if (Dr(p)) {
        let m = Hr.split(D, true);
        m[0] === "" && (m.shift(), /\n/u.test(m[0]) ? o(Ai(s, m[1], p, y)) : o(n), m.shift());
        let C;
        if (M(false, m, -1) === "" && (m.pop(), C = m.pop()), m.length === 0) return;
        for (let [c, A] of m.entries()) c % 2 === 1 ? o(x) : a(A);
        C !== void 0 ? /\n/u.test(C) ? o(Ai(s, u, p, y)) : o(n) : o(Ci(s, u, p, y));
      } else /\n/u.test(D) ? D.match(/\n/gu).length > 1 && o(F) : o(n);
    } else {
      let D = r();
      if (a(D), y && Dr(y)) {
        let C = Hr.trim(fe(y)), [c] = Hr.split(C);
        o(Ci(s, c, p, y));
      } else o(F);
    }
  }, "children"), i;
}
function Ci(e, t, r, n) {
  return e ? "" : r.type === "JSXElement" && !r.closingElement || (n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement ? t.length === 1 ? E : F : E;
}
function Ai(e, t, r, n) {
  return e ? F : t.length === 1 ? r.type === "JSXElement" && !r.closingElement || (n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement ? F : E : F;
}
var Ac = /* @__PURE__ */ new Set(["ArrayExpression", "TupleExpression", "JSXAttribute", "JSXElement", "JSXExpressionContainer", "JSXFragment", "ExpressionStatement", "CallExpression", "OptionalCallExpression", "ConditionalExpression", "JsExpressionRoot"]);
function Tc(e, t, r) {
  let { parent: n } = e;
  if (Ac.has(n.type)) return t;
  let s = e.match(void 0, (i) => i.type === "ArrowFunctionExpression", L, (i) => i.type === "JSXExpressionContainer"), u = ke(e, r);
  return l([u ? "" : B("("), f([E, t]), E, u ? "" : B(")")], { shouldBreak: s });
}
function dc(e, t, r) {
  let { node: n } = e, s = [];
  if (s.push(r("name")), n.value) {
    let u;
    if (te(n.value)) {
      let i = fe(n.value), a = Y(false, Y(false, i.slice(1, -1), "&apos;", "'"), "&quot;", '"'), o = Sr(a, t.jsxSingleQuote);
      a = o === '"' ? Y(false, a, '"', "&quot;") : Y(false, a, "'", "&apos;"), u = e.call(() => ye(e, ve(o + a + o), t), "value");
    } else u = r("value");
    s.push("=", u);
  }
  return s;
}
function xc(e, t, r) {
  let { node: n } = e, s = (u, i) => u.type === "JSXEmptyExpression" || !T(u) && (U(u) || se(u) || u.type === "ArrowFunctionExpression" || u.type === "AwaitExpression" && (s(u.argument, u) || u.argument.type === "JSXElement") || L(u) || u.type === "ChainExpression" && L(u.expression) || u.type === "FunctionExpression" || u.type === "TemplateLiteral" || u.type === "TaggedTemplateExpression" || u.type === "DoExpression" || X(i) && (u.type === "ConditionalExpression" || De(u)));
  return s(n.expression, e.parent) ? l(["{", r("expression"), je, "}"]) : l(["{", f([E, r("expression")]), E, je, "}"]);
}
function hc(e, t, r) {
  var a, o;
  let { node: n } = e, s = T(n.name) || T(n.typeParameters) || T(n.typeArguments);
  if (n.selfClosing && n.attributes.length === 0 && !s) return ["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), " />"];
  if (((a = n.attributes) == null ? void 0 : a.length) === 1 && te(n.attributes[0].value) && !n.attributes[0].value.value.includes(`
`) && !s && !T(n.attributes[0])) return l(["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), " ", ...e.map(r, "attributes"), n.selfClosing ? " />" : ">"]);
  let u = (o = n.attributes) == null ? void 0 : o.some((p) => te(p.value) && p.value.value.includes(`
`)), i = t.singleAttributePerLine && n.attributes.length > 1 ? F : x;
  return l(["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), f(e.map(() => [i, r()], "attributes")), ...gc(n, t, s)], { shouldBreak: u });
}
function gc(e, t, r) {
  return e.selfClosing ? [x, "/>"] : Sc(e, t, r) ? [">"] : [E, ">"];
}
function Sc(e, t, r) {
  let n = e.attributes.length > 0 && T(M(false, e.attributes, -1), h.Trailing);
  return e.attributes.length === 0 && !r || (t.bracketSameLine || t.jsxBracketSameLine) && (!r || e.attributes.length > 0) && !n;
}
function Bc(e, t, r) {
  let { node: n } = e, s = [];
  s.push("</");
  let u = r("name");
  return T(n.name, h.Leading | h.Line) ? s.push(f([F, u]), F) : T(n.name, h.Leading | h.Block) ? s.push(" ", u) : s.push(u), s.push(">"), s;
}
function bc(e, t) {
  let { node: r } = e, n = T(r), s = T(r, h.Line), u = r.type === "JSXOpeningFragment";
  return [u ? "<" : "</", f([s ? F : n && !u ? " " : "", J(e, t)]), s ? F : "", ">"];
}
function Pc(e, t, r) {
  let n = ye(e, Fc(e, t, r), t);
  return Tc(e, n, t);
}
function kc(e, t) {
  let { node: r } = e, n = T(r, h.Line);
  return [J(e, t, { indent: n }), n ? F : ""];
}
function Ic(e, t, r) {
  let { node: n } = e;
  return ["{", e.call(({ node: s }) => {
    let u = ["...", r()];
    return !T(s) || !Zn(e) ? u : [f([E, ye(e, u, t)]), E];
  }, n.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
}
function Ti(e, t, r) {
  let { node: n } = e;
  if (n.type.startsWith("JSX")) switch (n.type) {
    case "JSXAttribute":
      return dc(e, t, r);
    case "JSXIdentifier":
      return n.name;
    case "JSXNamespacedName":
      return b(":", [r("namespace"), r("name")]);
    case "JSXMemberExpression":
      return b(".", [r("object"), r("property")]);
    case "JSXSpreadAttribute":
    case "JSXSpreadChild":
      return Ic(e, t, r);
    case "JSXExpressionContainer":
      return xc(e, t, r);
    case "JSXFragment":
    case "JSXElement":
      return Pc(e, t, r);
    case "JSXOpeningElement":
      return hc(e, t, r);
    case "JSXClosingElement":
      return Bc(e, t, r);
    case "JSXOpeningFragment":
    case "JSXClosingFragment":
      return bc(e, t);
    case "JSXEmptyExpression":
      return kc(e, t);
    case "JSXText":
      throw new Error("JSXText should be handled by JSXElement");
    default:
      throw new Ne(n, "JSX");
  }
}
function Lc(e) {
  if (e.children.length === 0) return true;
  if (e.children.length > 1) return false;
  let t = e.children[0];
  return t.type === "JSXText" && !Dr(t);
}
function Dr(e) {
  return e.type === "JSXText" && (Hr.hasNonWhitespaceCharacter(fe(e)) || !/\n/u.test(fe(e)));
}
function wc(e) {
  return e.type === "JSXExpressionContainer" && te(e.expression) && e.expression.value === " " && !T(e.expression);
}
function di(e) {
  let { node: t, parent: r } = e;
  if (!X(t) || !X(r)) return false;
  let { index: n, siblings: s } = e, u;
  for (let i = n; i > 0; i--) {
    let a = s[i - 1];
    if (!(a.type === "JSXText" && !Dr(a))) {
      u = a;
      break;
    }
  }
  return (u == null ? void 0 : u.type) === "JSXExpressionContainer" && u.expression.type === "JSXEmptyExpression" && Lt(u.expression);
}
function Oc(e) {
  return Lt(e.node) || di(e);
}
var Vr = Oc;
var _c = 0;
function $r(e, t, r) {
  var v;
  let { node: n, parent: s, grandparent: u, key: i } = e, a = i !== "body" && (s.type === "IfStatement" || s.type === "WhileStatement" || s.type === "SwitchStatement" || s.type === "DoWhileStatement"), o = n.operator === "|>" && ((v = e.root.extra) == null ? void 0 : v.__isUsingHackPipeline), p = Es(e, r, t, false, a);
  if (a) return p;
  if (o) return l(p);
  if (L(s) && s.callee === n || s.type === "UnaryExpression" || W(s) && !s.computed) return l([f([E, ...p]), E]);
  let y = s.type === "ReturnStatement" || s.type === "ThrowStatement" || s.type === "JSXExpressionContainer" && u.type === "JSXAttribute" || n.operator !== "|" && s.type === "JsExpressionRoot" || n.type !== "NGPipeExpression" && (s.type === "NGRoot" && t.parser === "__ng_binding" || s.type === "NGMicrosyntaxExpression" && u.type === "NGMicrosyntax" && u.body.length === 1) || n === s.body && s.type === "ArrowFunctionExpression" || n !== s.body && s.type === "ForStatement" || s.type === "ConditionalExpression" && u.type !== "ReturnStatement" && u.type !== "ThrowStatement" && !L(u) || s.type === "TemplateLiteral", D = s.type === "AssignmentExpression" || s.type === "VariableDeclarator" || s.type === "ClassProperty" || s.type === "PropertyDefinition" || s.type === "TSAbstractPropertyDefinition" || s.type === "ClassPrivateProperty" || Ce(s), m = De(n.left) && ar(n.operator, n.left.operator);
  if (y || Ht(n) && !m || !Ht(n) && D) return l(p);
  if (p.length === 0) return "";
  let C = X(n.right), c = p.findIndex((j) => typeof j != "string" && !Array.isArray(j) && j.type === me), A = p.slice(0, c === -1 ? 1 : c + 1), d = p.slice(A.length, C ? -1 : void 0), S = Symbol("logicalChain-" + ++_c), g = l([...A, f(d)], { id: S });
  if (!C) return g;
  let _ = M(false, p, -1);
  return l([g, xt(_, { groupId: S })]);
}
function Es(e, t, r, n, s) {
  var S;
  let { node: u } = e;
  if (!De(u)) return [l(t())];
  let i = [];
  ar(u.operator, u.left.operator) ? i = e.call((g) => Es(g, t, r, true, s), "left") : i.push(l(t("left")));
  let a = Ht(u), o = (u.operator === "|>" || u.type === "NGPipeExpression" || vc(e, r)) && !Le(r.originalText, u.right), y = !T(u.right, h.Leading, Wr) && Le(r.originalText, u.right), D = u.type === "NGPipeExpression" ? "|" : u.operator, m = u.type === "NGPipeExpression" && u.arguments.length > 0 ? l(f([E, ": ", b([x, ": "], e.map(() => Be(2, l(t())), "arguments"))])) : "", C;
  if (a) C = [D, " ", t("right"), m];
  else {
    let _ = D === "|>" && ((S = e.root.extra) == null ? void 0 : S.__isUsingHackPipeline) ? e.call((v) => Es(v, t, r, true, s), "right") : t("right");
    if (r.experimentalOperatorPosition === "start") {
      let v = "";
      if (y) switch (Se(_)) {
        case he:
          v = _.splice(0, 1)[0];
          break;
        case ge:
          v = _.contents.splice(0, 1)[0];
          break;
      }
      C = [x, v, D, " ", _, m];
    } else C = [o ? x : "", D, o ? " " : x, _, m];
  }
  let { parent: c } = e, A = T(u.left, h.Trailing | h.Line);
  if ((A || !(s && u.type === "LogicalExpression") && c.type !== u.type && u.left.type !== u.type && u.right.type !== u.type) && (C = l(C, { shouldBreak: A })), r.experimentalOperatorPosition === "start" ? i.push(a || y ? " " : "", C) : i.push(o ? "" : " ", C), n && T(u)) {
    let g = Ut(ye(e, i, r));
    return g.type === Oe ? g.parts : Array.isArray(g) ? g : [g];
  }
  return i;
}
function Ht(e) {
  return e.type !== "LogicalExpression" ? false : !!(se(e.right) && e.right.properties.length > 0 || U(e.right) && e.right.elements.length > 0 || X(e.right));
}
var xi = (e) => e.type === "BinaryExpression" && e.operator === "|";
function vc(e, t) {
  return (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && xi(e.node) && !e.hasAncestor((r) => !xi(r) && r.type !== "JsExpressionRoot");
}
function gi(e, t, r) {
  let { node: n } = e;
  if (n.type.startsWith("NG")) switch (n.type) {
    case "NGRoot":
      return [r("node"), T(n.node) ? " //" + lt(n.node)[0].value.trimEnd() : ""];
    case "NGPipeExpression":
      return $r(e, t, r);
    case "NGChainedExpression":
      return l(b([";", x], e.map(() => Mc(e) ? r() : ["(", r(), ")"], "expressions")));
    case "NGEmptyExpression":
      return "";
    case "NGMicrosyntax":
      return e.map(() => [e.isFirst ? "" : hi(e) ? " " : [";", x], r()], "body");
    case "NGMicrosyntaxKey":
      return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/iu.test(n.name) ? n.name : JSON.stringify(n.name);
    case "NGMicrosyntaxExpression":
      return [r("expression"), n.alias === null ? "" : [" as ", r("alias")]];
    case "NGMicrosyntaxKeyedExpression": {
      let { index: s, parent: u } = e, i = hi(e) || (s === 1 && (n.key.name === "then" || n.key.name === "else" || n.key.name === "as") || (s === 2 || s === 3) && (n.key.name === "else" && u.body[s - 1].type === "NGMicrosyntaxKeyedExpression" && u.body[s - 1].key.name === "then" || n.key.name === "track")) && u.body[0].type === "NGMicrosyntaxExpression";
      return [r("key"), i ? " " : ": ", r("expression")];
    }
    case "NGMicrosyntaxLet":
      return ["let ", r("key"), n.value === null ? "" : [" = ", r("value")]];
    case "NGMicrosyntaxAs":
      return [r("key"), " as ", r("alias")];
    default:
      throw new Ne(n, "Angular");
  }
}
function hi({ node: e, index: t }) {
  return e.type === "NGMicrosyntaxKeyedExpression" && e.key.name === "of" && t === 1;
}
var jc = R(["CallExpression", "OptionalCallExpression", "AssignmentExpression"]);
function Mc({ node: e }) {
  return ur(e, jc);
}
function Fs(e, t, r) {
  let { node: n } = e;
  return l([b(x, e.map(r, "decorators")), bi(n, t) ? F : x]);
}
function Si(e, t, r) {
  return Pi(e.node) ? [b(F, e.map(r, "declaration", "decorators")), F] : "";
}
function Bi(e, t, r) {
  let { node: n, parent: s } = e, { decorators: u } = n;
  if (!O(u) || Pi(s) || Vr(e)) return "";
  let i = n.type === "ClassExpression" || n.type === "ClassDeclaration" || bi(n, t);
  return [e.key === "declaration" && cu(s) ? F : i ? Ee : "", b(x, e.map(r, "decorators")), x];
}
function bi(e, t) {
  return e.decorators.some((r) => Z(t.originalText, k(r)));
}
function Pi(e) {
  var r;
  if (e.type !== "ExportDefaultDeclaration" && e.type !== "ExportNamedDeclaration" && e.type !== "DeclareExportDeclaration") return false;
  let t = (r = e.declaration) == null ? void 0 : r.decorators;
  return O(t) && Pt(e, t[0]);
}
var Dt = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "ArgExpansionBailout");
  }
};
function Rc(e, t, r) {
  let { node: n } = e, s = pe(n);
  if (s.length === 0) return ["(", J(e, t), ")"];
  let u = s.length - 1;
  if (Wc(s)) {
    let D = ["("];
    return Wt(e, (m, C) => {
      D.push(r()), C !== u && D.push(", ");
    }), D.push(")"), D;
  }
  let i = false, a = [];
  Wt(e, ({ node: D }, m) => {
    let C = r();
    m === u || (ce(D, t) ? (i = true, C = [C, ",", F, F]) : C = [C, ",", x]), a.push(C);
  });
  let o = !t.parser.startsWith("__ng_") && n.type !== "ImportExpression" && oe(t, "all") ? "," : "";
  function p() {
    return l(["(", f([x, ...a]), o, x, ")"], { shouldBreak: true });
  }
  if (i || e.parent.type !== "Decorator" && fu(s)) return p();
  if (qc(s)) {
    let D = a.slice(1);
    if (D.some(re)) return p();
    let m;
    try {
      m = r(qn(n, 0), { expandFirstArg: true });
    } catch (C) {
      if (C instanceof Dt) return p();
      throw C;
    }
    return re(m) ? [Ee, et([["(", l(m, { shouldBreak: true }), ", ", ...D, ")"], p()])] : et([["(", m, ", ", ...D, ")"], ["(", l(m, { shouldBreak: true }), ", ", ...D, ")"], p()]);
  }
  if (Jc(s, a, t)) {
    let D = a.slice(0, -1);
    if (D.some(re)) return p();
    let m;
    try {
      m = r(qn(n, -1), { expandLastArg: true });
    } catch (C) {
      if (C instanceof Dt) return p();
      throw C;
    }
    return re(m) ? [Ee, et([["(", ...D, l(m, { shouldBreak: true }), ")"], p()])] : et([["(", ...D, m, ")"], ["(", ...D, l(m, { shouldBreak: true }), ")"], p()]);
  }
  let y = ["(", f([E, ...a]), B(o), E, ")"];
  return jr(e) ? y : l(y, { shouldBreak: a.some(re) || i });
}
function fr(e, t = false) {
  return se(e) && (e.properties.length > 0 || T(e)) || U(e) && (e.elements.length > 0 || T(e)) || e.type === "TSTypeAssertion" && fr(e.expression) || Ae(e) && fr(e.expression) || e.type === "FunctionExpression" || e.type === "ArrowFunctionExpression" && (!e.returnType || !e.returnType.typeAnnotation || e.returnType.typeAnnotation.type !== "TSTypeReference" || Nc(e.body)) && (e.body.type === "BlockStatement" || e.body.type === "ArrowFunctionExpression" && fr(e.body, true) || se(e.body) || U(e.body) || !t && (L(e.body) || e.body.type === "ConditionalExpression") || X(e.body)) || e.type === "DoExpression" || e.type === "ModuleExpression";
}
function Jc(e, t, r) {
  var u, i;
  let n = M(false, e, -1);
  if (e.length === 1) {
    let a = M(false, t, -1);
    if ((u = a.label) != null && u.embed && ((i = a.label) == null ? void 0 : i.hug) !== false) return true;
  }
  let s = M(false, e, -2);
  return !T(n, h.Leading) && !T(n, h.Trailing) && fr(n) && (!s || s.type !== n.type) && (e.length !== 2 || s.type !== "ArrowFunctionExpression" || !U(n)) && !(e.length > 1 && Cs(n, r));
}
function qc(e) {
  if (e.length !== 2) return false;
  let [t, r] = e;
  return t.type === "ModuleExpression" && Gc(r) ? true : !T(t) && (t.type === "FunctionExpression" || t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement") && r.type !== "FunctionExpression" && r.type !== "ArrowFunctionExpression" && r.type !== "ConditionalExpression" && Ii(r) && !fr(r);
}
function Ii(e) {
  if (e.type === "ParenthesizedExpression") return Ii(e.expression);
  if (Ae(e) || e.type === "TypeCastExpression") {
    let { typeAnnotation: t } = e;
    if (t.type === "TypeAnnotation" && (t = t.typeAnnotation), t.type === "TSArrayType" && (t = t.elementType, t.type === "TSArrayType" && (t = t.elementType)), t.type === "GenericTypeAnnotation" || t.type === "TSTypeReference") {
      let r = t.typeArguments ?? t.typeParameters;
      (r == null ? void 0 : r.params.length) === 1 && (t = r.params[0]);
    }
    return qt(t) && Ie(e.expression, 1);
  }
  return mt(e) && pe(e).length > 1 ? false : De(e) ? Ie(e.left, 1) && Ie(e.right, 1) : Rn(e) || Ie(e);
}
function Wc(e) {
  return e.length === 2 ? ki(e, 0) : e.length === 3 ? e[0].type === "Identifier" && ki(e, 1) : false;
}
function ki(e, t) {
  let r = e[t], n = e[t + 1];
  return r.type === "ArrowFunctionExpression" && z(r).length === 0 && r.body.type === "BlockStatement" && n.type === "ArrayExpression" && !e.some((s) => T(s));
}
function Nc(e) {
  return e.type === "BlockStatement" && (e.body.some((t) => t.type !== "EmptyStatement") || T(e, h.Dangling));
}
function Gc(e) {
  return e.type === "ObjectExpression" && e.properties.length === 1 && Ce(e.properties[0]) && e.properties[0].key.type === "Identifier" && e.properties[0].key.name === "type" && te(e.properties[0].value) && e.properties[0].value.value === "module";
}
var Er = Rc;
var Uc = (e) => ((e.type === "ChainExpression" || e.type === "TSNonNullExpression") && (e = e.expression), L(e) && pe(e).length > 0);
function Li(e, t, r) {
  var p;
  let n = r("object"), s = As(e, t, r), { node: u } = e, i = e.findAncestor((y) => !(W(y) || y.type === "TSNonNullExpression")), a = e.findAncestor((y) => !(y.type === "ChainExpression" || y.type === "TSNonNullExpression")), o = i && (i.type === "NewExpression" || i.type === "BindExpression" || i.type === "AssignmentExpression" && i.left.type !== "Identifier") || u.computed || u.object.type === "Identifier" && u.property.type === "Identifier" && !W(a) || (a.type === "AssignmentExpression" || a.type === "VariableDeclarator") && (Uc(u.object) || ((p = n.label) == null ? void 0 : p.memberChain));
  return ut(n.label, [n, o ? s : l(f([E, s]))]);
}
function As(e, t, r) {
  let n = r("property"), { node: s } = e, u = $(e);
  return s.computed ? !s.property || Fe(s.property) ? [u, "[", n, "]"] : l([u, "[", f([E, n]), E, "]"]) : [u, ".", n];
}
function wi(e, t, r) {
  if (e.node.type === "ChainExpression") return e.call(() => wi(e, t, r), "expression");
  let { parent: n } = e, s = !n || n.type === "ExpressionStatement", u = [];
  function i(w) {
    let { originalText: ne } = t, xe = it(ne, k(w));
    return ne.charAt(xe) === ")" ? xe !== false && jt(ne, xe + 1) : ce(w, t);
  }
  function a() {
    let { node: w } = e;
    if (w.type === "ChainExpression") return e.call(a, "expression");
    if (L(w) && (Tt(w.callee) || L(w.callee))) {
      let ne = i(w);
      u.unshift({ node: w, hasTrailingEmptyLine: ne, printed: [ye(e, [$(e), tt(e, t, r), Er(e, t, r)], t), ne ? F : ""] }), e.call(a, "callee");
    } else Tt(w) ? (u.unshift({ node: w, needsParens: ke(e, t), printed: ye(e, W(w) ? As(e, t, r) : Kr(e, t, r), t) }), e.call(a, "object")) : w.type === "TSNonNullExpression" ? (u.unshift({ node: w, printed: ye(e, "!", t) }), e.call(a, "expression")) : u.unshift({ node: w, printed: r() });
  }
  let { node: o } = e;
  u.unshift({ node: o, printed: [$(e), tt(e, t, r), Er(e, t, r)] }), o.callee && e.call(a, "callee");
  let p = [], y = [u[0]], D = 1;
  for (; D < u.length && (u[D].node.type === "TSNonNullExpression" || L(u[D].node) || W(u[D].node) && u[D].node.computed && Fe(u[D].node.property)); ++D) y.push(u[D]);
  if (!L(u[0].node)) for (; D + 1 < u.length && (Tt(u[D].node) && Tt(u[D + 1].node)); ++D) y.push(u[D]);
  p.push(y), y = [];
  let m = false;
  for (; D < u.length; ++D) {
    if (m && Tt(u[D].node)) {
      if (u[D].node.computed && Fe(u[D].node.property)) {
        y.push(u[D]);
        continue;
      }
      p.push(y), y = [], m = false;
    }
    (L(u[D].node) || u[D].node.type === "ImportExpression") && (m = true), y.push(u[D]), T(u[D].node, h.Trailing) && (p.push(y), y = [], m = false);
  }
  y.length > 0 && p.push(y);
  function C(w) {
    return /^[A-Z]|^[$_]+$/u.test(w);
  }
  function c(w) {
    return w.length <= t.tabWidth;
  }
  function A(w) {
    var pt;
    let ne = (pt = w[1][0]) == null ? void 0 : pt.node.computed;
    if (w[0].length === 1) {
      let bt = w[0][0].node;
      return bt.type === "ThisExpression" || bt.type === "Identifier" && (C(bt.name) || s && c(bt.name) || ne);
    }
    let xe = M(false, w[0], -1).node;
    return W(xe) && xe.property.type === "Identifier" && (C(xe.property.name) || ne);
  }
  let d = p.length >= 2 && !T(p[1][0].node) && A(p);
  function S(w) {
    let ne = w.map((xe) => xe.printed);
    return w.length > 0 && M(false, w, -1).needsParens ? ["(", ...ne, ")"] : ne;
  }
  function g(w) {
    return w.length === 0 ? "" : f([F, b(F, w.map(S))]);
  }
  let _ = p.map(S), v = _, j = d ? 3 : 2, I = p.flat(), G = I.slice(1, -1).some((w) => T(w.node, h.Leading)) || I.slice(0, -1).some((w) => T(w.node, h.Trailing)) || p[j] && T(p[j][0].node, h.Leading);
  if (p.length <= j && !G && !p.some((w) => M(false, w, -1).hasTrailingEmptyLine)) return jr(e) ? v : l(v);
  let P = M(false, p[d ? 1 : 0], -1).node, N = !L(P) && i(P), ue = [S(p[0]), d ? p.slice(1, 2).map(S) : "", N ? F : "", g(p.slice(d ? 2 : 1))], Q = u.map(({ node: w }) => w).filter(L);
  function Bt() {
    let w = M(false, M(false, p, -1), -1).node, ne = M(false, _, -1);
    return L(w) && re(ne) && Q.slice(0, -1).some((xe) => xe.arguments.some(Rt));
  }
  let Ct;
  return G || Q.length > 2 && Q.some((w) => !w.arguments.every((ne) => Ie(ne))) || _.slice(0, -1).some(re) || Bt() ? Ct = l(ue) : Ct = [re(v) || N ? Ee : "", et([v, ue])], ut({ memberChain: true }, Ct);
}
var Oi = wi;
function Qr(e, t, r) {
  var y;
  let { node: n } = e, s = n.type === "NewExpression", u = n.type === "ImportExpression", i = $(e), a = pe(n), o = a.length === 1 && _r(a[0], t.originalText);
  if (o || Yc(e) || It(n, e.parent)) {
    let D = [];
    if (Wt(e, () => {
      D.push(r());
    }), !(o && ((y = D[0].label) != null && y.embed))) return [s ? "new " : "", _i(e, r), i, tt(e, t, r), "(", b(", ", D), ")"];
  }
  if (!u && !s && Tt(n.callee) && !e.call((D) => ke(D, t), "callee", ...n.callee.type === "ChainExpression" ? ["expression"] : [])) return Oi(e, t, r);
  let p = [s ? "new " : "", _i(e, r), i, tt(e, t, r), Er(e, t, r)];
  return u || L(n.callee) ? l(p) : p;
}
function _i(e, t) {
  let { node: r } = e;
  return r.type === "ImportExpression" ? `import${r.phase ? `.${r.phase}` : ""}` : t("callee");
}
function Yc(e) {
  let { node: t } = e;
  if (t.type !== "CallExpression" || t.optional || t.callee.type !== "Identifier") return false;
  let r = pe(t);
  return t.callee.name === "require" ? r.length === 1 && te(r[0]) || r.length > 1 : t.callee.name === "define" && e.parent.type === "ExpressionStatement" ? r.length === 1 || r.length === 2 && r[0].type === "ArrayExpression" || r.length === 3 && te(r[0]) && r[1].type === "ArrayExpression" : false;
}
function ht(e, t, r, n, s, u) {
  let i = Xc(e, t, r, n, u), a = u ? r(u, { assignmentLayout: i }) : "";
  switch (i) {
    case "break-after-operator":
      return l([l(n), s, l(f([x, a]))]);
    case "never-break-after-operator":
      return l([l(n), s, " ", a]);
    case "fluid": {
      let o = Symbol("assignment");
      return l([l(n), s, l(f(x), { id: o }), je, xt(a, { groupId: o })]);
    }
    case "break-lhs":
      return l([n, s, " ", l(a)]);
    case "chain":
      return [l(n), s, x, a];
    case "chain-tail":
      return [l(n), s, f([x, a])];
    case "chain-tail-arrow-chain":
      return [l(n), s, a];
    case "only-left":
      return n;
  }
}
function ji(e, t, r) {
  let { node: n } = e;
  return ht(e, t, r, r("left"), [" ", n.operator], "right");
}
function Mi(e, t, r) {
  return ht(e, t, r, r("id"), " =", "init");
}
function Xc(e, t, r, n, s) {
  let { node: u } = e, i = u[s];
  if (!i) return "only-left";
  let a = !zr(i);
  if (e.match(zr, Ri, (m) => !a || m.type !== "ExpressionStatement" && m.type !== "VariableDeclaration")) return a ? i.type === "ArrowFunctionExpression" && i.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
  if (!a && zr(i.right) || Le(t.originalText, i)) return "break-after-operator";
  if (u.type === "ImportAttribute" || i.type === "CallExpression" && i.callee.name === "require" || t.parser === "json5" || t.parser === "jsonc" || t.parser === "json") return "never-break-after-operator";
  let y = bu(n);
  if (Vc(u) || zc(u) || Ts(u) && y) return "break-lhs";
  let D = el(u, n, t);
  return e.call(() => Hc(e, t, r, D), s) ? "break-after-operator" : $c(u) ? "break-lhs" : !y && (D || i.type === "TemplateLiteral" || i.type === "TaggedTemplateExpression" || i.type === "BooleanLiteral" || Fe(i) || i.type === "ClassExpression") ? "never-break-after-operator" : "fluid";
}
function Hc(e, t, r, n) {
  let s = e.node;
  if (De(s) && !Ht(s)) return true;
  switch (s.type) {
    case "StringLiteralTypeAnnotation":
    case "SequenceExpression":
      return true;
    case "TSConditionalType":
    case "ConditionalTypeAnnotation":
      if (!t.experimentalTernaries && !nl(s)) break;
      return true;
    case "ConditionalExpression": {
      if (!t.experimentalTernaries) {
        let { test: p } = s;
        return De(p) && !Ht(p);
      }
      let { consequent: a, alternate: o } = s;
      return a.type === "ConditionalExpression" || o.type === "ConditionalExpression";
    }
    case "ClassExpression":
      return O(s.decorators);
  }
  if (n) return false;
  let u = s, i = [];
  for (; ; ) if (u.type === "UnaryExpression" || u.type === "AwaitExpression" || u.type === "YieldExpression" && u.argument !== null) u = u.argument, i.push("argument");
  else if (u.type === "TSNonNullExpression") u = u.expression, i.push("expression");
  else break;
  return !!(te(u) || e.call(() => Ji(e, t, r), ...i));
}
function Vc(e) {
  if (Ri(e)) {
    let t = e.left || e.id;
    return t.type === "ObjectPattern" && t.properties.length > 2 && t.properties.some((r) => {
      var n;
      return Ce(r) && (!r.shorthand || ((n = r.value) == null ? void 0 : n.type) === "AssignmentPattern");
    });
  }
  return false;
}
function zr(e) {
  return e.type === "AssignmentExpression";
}
function Ri(e) {
  return zr(e) || e.type === "VariableDeclarator";
}
function $c(e) {
  let t = Qc(e);
  if (O(t)) {
    let r = e.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
    if (t.length > 1 && t.some((n) => n[r] || n.default)) return true;
  }
  return false;
}
var Kc = R(["TSTypeAliasDeclaration", "TypeAlias"]);
function Qc(e) {
  var t;
  if (Kc(e)) return (t = e.typeParameters) == null ? void 0 : t.params;
}
function zc(e) {
  if (e.type !== "VariableDeclarator") return false;
  let { typeAnnotation: t } = e.id;
  if (!t || !t.typeAnnotation) return false;
  let r = vi(t.typeAnnotation);
  return O(r) && r.length > 1 && r.some((n) => O(vi(n)) || n.type === "TSConditionalType");
}
function Ts(e) {
  var t;
  return e.type === "VariableDeclarator" && ((t = e.init) == null ? void 0 : t.type) === "ArrowFunctionExpression";
}
var Zc = R(["TSTypeReference", "GenericTypeAnnotation"]);
function vi(e) {
  var t;
  if (Zc(e)) return (t = e.typeArguments ?? e.typeParameters) == null ? void 0 : t.params;
}
function Ji(e, t, r, n = false) {
  var i;
  let { node: s } = e, u = () => Ji(e, t, r, true);
  if (s.type === "ChainExpression" || s.type === "TSNonNullExpression") return e.call(u, "expression");
  if (L(s)) {
    if ((i = Qr(e, t, r).label) != null && i.memberChain) return false;
    let o = pe(s);
    return !(o.length === 0 || o.length === 1 && ir(o[0], t)) || tl(s, r) ? false : e.call(u, "callee");
  }
  return W(s) ? e.call(u, "object") : n && (s.type === "Identifier" || s.type === "ThisExpression");
}
function el(e, t, r) {
  return Ce(e) ? (t = Ut(t), typeof t == "string" && rt(t) < r.tabWidth + 3) : false;
}
function tl(e, t) {
  let r = rl(e);
  if (O(r)) {
    if (r.length > 1) return true;
    if (r.length === 1) {
      let s = r[0];
      if (we(s) || Nt(s) || s.type === "TSTypeLiteral" || s.type === "ObjectTypeAnnotation") return true;
    }
    let n = e.typeParameters ? "typeParameters" : "typeArguments";
    if (re(t(n))) return true;
  }
  return false;
}
function rl(e) {
  var t;
  return (t = e.typeParameters ?? e.typeArguments) == null ? void 0 : t.params;
}
function nl(e) {
  function t(r) {
    switch (r.type) {
      case "FunctionTypeAnnotation":
      case "GenericTypeAnnotation":
      case "TSFunctionType":
        return !!r.typeParameters;
      case "TSTypeReference":
        return !!(r.typeArguments ?? r.typeParameters);
      default:
        return false;
    }
  }
  return t(e.checkType) || t(e.extendsType);
}
function Ue(e, t, r, n, s) {
  let u = e.node, i = z(u), a = s ? tt(e, r, t) : "";
  if (i.length === 0) return [a, "(", J(e, r, { filter: (c) => be(r.originalText, k(c)) === ")" }), ")"];
  let { parent: o } = e, p = It(o), y = ds(u), D = [];
  if (Au(e, (c, A) => {
    let d = A === i.length - 1;
    d && u.rest && D.push("..."), D.push(t()), !d && (D.push(","), p || y ? D.push(" ") : ce(i[A], r) ? D.push(F, F) : D.push(x));
  }), n && !ul(e)) {
    if (re(a) || re(D)) throw new Dt();
    return l([cr(a), "(", cr(D), ")"]);
  }
  let m = i.every((c) => !O(c.decorators));
  return y && m ? [a, "(", ...D, ")"] : p ? [a, "(", ...D, ")"] : (Or(o) || mu(o) || o.type === "TypeAlias" || o.type === "UnionTypeAnnotation" || o.type === "IntersectionTypeAnnotation" || o.type === "FunctionTypeAnnotation" && o.returnType === u) && i.length === 1 && i[0].name === null && u.this !== i[0] && i[0].typeAnnotation && u.typeParameters === null && qt(i[0].typeAnnotation) && !u.rest ? r.arrowParens === "always" || u.type === "HookTypeAnnotation" ? ["(", ...D, ")"] : D : [a, "(", f([E, ...D]), B(!Cu(u) && oe(r, "all") ? "," : ""), E, ")"];
}
function ds(e) {
  if (!e) return false;
  let t = z(e);
  if (t.length !== 1) return false;
  let [r] = t;
  return !T(r) && (r.type === "ObjectPattern" || r.type === "ArrayPattern" || r.type === "Identifier" && r.typeAnnotation && (r.typeAnnotation.type === "TypeAnnotation" || r.typeAnnotation.type === "TSTypeAnnotation") && Re(r.typeAnnotation.typeAnnotation) || r.type === "FunctionTypeParam" && Re(r.typeAnnotation) && r !== e.rest || r.type === "AssignmentPattern" && (r.left.type === "ObjectPattern" || r.left.type === "ArrayPattern") && (r.right.type === "Identifier" || se(r.right) && r.right.properties.length === 0 || U(r.right) && r.right.elements.length === 0));
}
function sl(e) {
  let t;
  return e.returnType ? (t = e.returnType, t.typeAnnotation && (t = t.typeAnnotation)) : e.typeAnnotation && (t = e.typeAnnotation), t;
}
function ot(e, t) {
  var s;
  let r = sl(e);
  if (!r) return false;
  let n = (s = e.typeParameters) == null ? void 0 : s.params;
  if (n) {
    if (n.length > 1) return false;
    if (n.length === 1) {
      let u = n[0];
      if (u.constraint || u.default) return false;
    }
  }
  return z(e).length === 1 && (Re(r) || re(t));
}
function ul(e) {
  return e.match((t) => t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement", (t, r) => {
    if (t.type === "CallExpression" && r === "arguments" && t.arguments.length === 1 && t.callee.type === "CallExpression") {
      let n = t.callee.callee;
      return n.type === "Identifier" || n.type === "MemberExpression" && !n.computed && n.object.type === "Identifier" && n.property.type === "Identifier";
    }
    return false;
  }, (t, r) => t.type === "VariableDeclarator" && r === "init" || t.type === "ExportDefaultDeclaration" && r === "declaration" || t.type === "TSExportAssignment" && r === "expression" || t.type === "AssignmentExpression" && r === "right" && t.left.type === "MemberExpression" && t.left.object.type === "Identifier" && t.left.object.name === "module" && t.left.property.type === "Identifier" && t.left.property.name === "exports", (t) => t.type !== "VariableDeclaration" || t.kind === "const" && t.declarations.length === 1);
}
function qi(e) {
  let t = z(e);
  return t.length > 1 && t.some((r) => r.type === "TSParameterProperty");
}
var il = R(["VoidTypeAnnotation", "TSVoidKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword"]), al = R(["ObjectTypeAnnotation", "TSTypeLiteral", "GenericTypeAnnotation", "TSTypeReference"]);
function ol(e) {
  let { types: t } = e;
  if (t.some((n) => T(n))) return false;
  let r = t.find((n) => al(n));
  return r ? t.every((n) => n === r || il(n)) : false;
}
function xs(e) {
  return qt(e) || Re(e) ? true : we(e) ? ol(e) : false;
}
function Wi(e, t, r) {
  let n = t.semi ? ";" : "", { node: s } = e, u = [K(e), "opaque type ", r("id"), r("typeParameters")];
  return s.supertype && u.push(": ", r("supertype")), s.impltype && u.push(" = ", r("impltype")), u.push(n), u;
}
function Zr(e, t, r) {
  let n = t.semi ? ";" : "", { node: s } = e, u = [K(e)];
  u.push("type ", r("id"), r("typeParameters"));
  let i = s.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
  return [ht(e, t, r, u, " =", i), n];
}
function en(e, t, r) {
  let n = false;
  return l(e.map(({ isFirst: s, previous: u, node: i, index: a }) => {
    let o = r();
    if (s) return o;
    let p = Re(i), y = Re(u);
    return y && p ? [" & ", n ? f(o) : o] : !y && !p ? t.experimentalOperatorPosition === "start" ? f([x, "& ", o]) : f([" &", x, o]) : (a > 1 && (n = true), [" & ", a > 1 ? f(o) : o]);
  }, "types"));
}
function tn(e, t, r) {
  let { node: n } = e, { parent: s } = e, u = s.type !== "TypeParameterInstantiation" && (!Je(s) || !t.experimentalTernaries) && s.type !== "TSTypeParameterInstantiation" && s.type !== "GenericTypeAnnotation" && s.type !== "TSTypeReference" && s.type !== "TSTypeAssertion" && s.type !== "TupleTypeAnnotation" && s.type !== "TSTupleType" && !(s.type === "FunctionTypeParam" && !s.name && e.grandparent.this !== s) && !((s.type === "TypeAlias" || s.type === "VariableDeclarator" || s.type === "TSTypeAliasDeclaration") && Le(t.originalText, n)), i = xs(n), a = e.map((y) => {
    let D = r();
    return i || (D = Be(2, D)), ye(y, D, t);
  }, "types");
  if (i) return b(" | ", a);
  let o = u && !Le(t.originalText, n), p = [B([o ? x : "", "| "]), b([x, "| "], a)];
  return ke(e, t) ? l([f(p), E]) : (s.type === "TupleTypeAnnotation" || s.type === "TSTupleType") && s[s.type === "TupleTypeAnnotation" && s.types ? "types" : "elementTypes"].length > 1 ? l([f([B(["(", E]), p]), E, B(")")]) : l(u ? f(p) : p);
}
function pl(e) {
  var n;
  let { node: t, parent: r } = e;
  return t.type === "FunctionTypeAnnotation" && (Or(r) || !((r.type === "ObjectTypeProperty" || r.type === "ObjectTypeInternalSlot") && !r.variance && !r.optional && Pt(r, t) || r.type === "ObjectTypeCallProperty" || ((n = e.getParentNode(2)) == null ? void 0 : n.type) === "DeclareFunction"));
}
function rn(e, t, r) {
  let { node: n } = e, s = [Vt(e)];
  (n.type === "TSConstructorType" || n.type === "TSConstructSignatureDeclaration") && s.push("new ");
  let u = Ue(e, r, t, false, true), i = [];
  return n.type === "FunctionTypeAnnotation" ? i.push(pl(e) ? " => " : ": ", r("returnType")) : i.push(H(e, r, n.returnType ? "returnType" : "typeAnnotation")), ot(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function nn(e, t, r) {
  return [r("objectType"), $(e), "[", r("indexType"), "]"];
}
function sn(e, t, r) {
  return ["infer ", r("typeParameter")];
}
function hs(e, t, r) {
  let { node: n } = e;
  return [n.postfix ? "" : r, H(e, t), n.postfix ? r : ""];
}
function un(e, t, r) {
  let { node: n } = e;
  return ["...", ...n.type === "TupleTypeSpreadElement" && n.label ? [r("label"), ": "] : [], r("typeAnnotation")];
}
function an(e, t, r) {
  let { node: n } = e;
  return [n.variance ? r("variance") : "", r("label"), n.optional ? "?" : "", ": ", r("elementType")];
}
var cl = /* @__PURE__ */ new WeakSet();
function H(e, t, r = "typeAnnotation") {
  let { node: { [r]: n } } = e;
  if (!n) return "";
  let s = false;
  if (n.type === "TSTypeAnnotation" || n.type === "TypeAnnotation") {
    let u = e.call(Ni, r);
    (u === "=>" || u === ":" && T(n, h.Leading)) && (s = true), cl.add(n);
  }
  return s ? [" ", t(r)] : t(r);
}
var Ni = (e) => e.match((t) => t.type === "TSTypeAnnotation", (t, r) => (r === "returnType" || r === "typeAnnotation") && (t.type === "TSFunctionType" || t.type === "TSConstructorType")) ? "=>" : e.match((t) => t.type === "TSTypeAnnotation", (t, r) => r === "typeAnnotation" && (t.type === "TSJSDocNullableType" || t.type === "TSJSDocNonNullableType" || t.type === "TSTypePredicate")) || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "typeAnnotation" && t.type === "Identifier", (t, r) => r === "id" && t.type === "DeclareFunction") || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "typeAnnotation" && t.type === "Identifier", (t, r) => r === "id" && t.type === "DeclareHook") || e.match((t) => t.type === "TypeAnnotation", (t, r) => r === "bound" && t.type === "TypeParameter" && t.usesExtendsBound) ? "" : ":";
function on(e, t, r) {
  let n = Ni(e);
  return n ? [n, " ", r("typeAnnotation")] : r("typeAnnotation");
}
function pn(e) {
  return [e("elementType"), "[]"];
}
function cn({ node: e }, t) {
  let r = e.type === "TSTypeQuery" ? "exprName" : "argument", n = e.type === "TypeofTypeAnnotation" || e.typeArguments ? "typeArguments" : "typeParameters";
  return ["typeof ", t(r), t(n)];
}
function ln(e, t) {
  let { node: r } = e;
  return [r.type === "TSTypePredicate" && r.asserts ? "asserts " : r.type === "TypePredicate" && r.kind ? `${r.kind} ` : "", t("parameterName"), r.typeAnnotation ? [" is ", H(e, t)] : ""];
}
function $(e) {
  let { node: t } = e;
  return !t.optional || t.type === "Identifier" && t === e.parent.key ? "" : L(t) || W(t) && t.computed || t.type === "OptionalIndexedAccessType" ? "?." : "?";
}
function mn(e) {
  return e.node.definite || e.match(void 0, (t, r) => r === "id" && t.type === "VariableDeclarator" && t.definite) ? "!" : "";
}
var ll = /* @__PURE__ */ new Set(["DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "DeclareVariable", "DeclareExportDeclaration", "DeclareExportAllDeclaration", "DeclareOpaqueType", "DeclareTypeAlias", "DeclareEnum", "DeclareInterface"]);
function K(e) {
  let { node: t } = e;
  return t.declare || ll.has(t.type) && e.parent.type !== "DeclareExportDeclaration" ? "declare " : "";
}
var ml = /* @__PURE__ */ new Set(["TSAbstractMethodDefinition", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function Vt({ node: e }) {
  return e.abstract || ml.has(e.type) ? "abstract " : "";
}
function tt(e, t, r) {
  let n = e.node;
  return n.typeArguments ? r("typeArguments") : n.typeParameters ? r("typeParameters") : "";
}
function Kr(e, t, r) {
  return ["::", r("callee")];
}
function ft(e, t, r) {
  return e.type === "EmptyStatement" ? ";" : e.type === "BlockStatement" || r ? [" ", t] : f([x, t]);
}
function yn(e, t) {
  return ["...", t("argument"), H(e, t)];
}
function $t(e) {
  return e.accessibility ? e.accessibility + " " : "";
}
function yl(e, t, r, n) {
  let { node: s } = e, u = s.inexact ? "..." : "";
  return T(s, h.Dangling) ? l([r, u, J(e, t, { indent: true }), E, n]) : [r, u, n];
}
function Kt(e, t, r) {
  let { node: n } = e, s = [], u = n.type === "TupleExpression" ? "#[" : "[", i = "]", a = n.type === "TupleTypeAnnotation" && n.types ? "types" : n.type === "TSTupleType" || n.type === "TupleTypeAnnotation" ? "elementTypes" : "elements", o = n[a];
  if (o.length === 0) s.push(yl(e, t, u, i));
  else {
    let p = M(false, o, -1), y = (p == null ? void 0 : p.type) !== "RestElement" && !n.inexact, D = p === null, m = Symbol("array"), C = !t.__inJestEach && o.length > 1 && o.every((d, S, g) => {
      let _ = d == null ? void 0 : d.type;
      if (!U(d) && !se(d)) return false;
      let v = g[S + 1];
      if (v && _ !== v.type) return false;
      let j = U(d) ? "elements" : "properties";
      return d[j] && d[j].length > 1;
    }), c = Cs(n, t), A = y ? D ? "," : oe(t) ? c ? B(",", "", { groupId: m }) : B(",") : "" : "";
    s.push(l([u, f([E, c ? fl(e, t, r, A) : [Dl(e, t, a, n.inexact, r), A], J(e, t)]), E, i], { shouldBreak: C, id: m }));
  }
  return s.push($(e), H(e, r)), s;
}
function Cs(e, t) {
  return U(e) && e.elements.length > 1 && e.elements.every((r) => r && (Fe(r) || Mn(r) && !T(r.argument)) && !T(r, h.Trailing | h.Line, (n) => !Z(t.originalText, q(n), { backwards: true })));
}
function Gi({ node: e }, { originalText: t }) {
  let r = (s) => _t(t, vt(t, s)), n = (s) => t[s] === "," ? s : n(r(s + 1));
  return jt(t, n(k(e)));
}
function Dl(e, t, r, n, s) {
  let u = [];
  return e.each(({ node: i, isLast: a }) => {
    u.push(i ? l(s()) : ""), (!a || n) && u.push([",", x, i && Gi(e, t) ? E : ""]);
  }, r), n && u.push("..."), u;
}
function fl(e, t, r, n) {
  let s = [];
  return e.each(({ isLast: u, next: i }) => {
    s.push([r(), u ? n : ","]), u || s.push(Gi(e, t) ? [F, F] : T(i, h.Leading | h.Line) ? F : x);
  }, "elements"), qr(s);
}
var El = /^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/, Fl = (e) => El.test(e), Ui = Fl;
function Cl(e) {
  return e.length === 1 ? e : e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/u, "$1").replace(/^([+-])?\./u, "$10.").replace(/(\.\d+?)0+(?=e|$)/u, "$1").replace(/\.(?=e|$)/u, "");
}
var Et = Cl;
var Dn = /* @__PURE__ */ new WeakMap();
function Xi(e) {
  return /^(?:\d+|\d+\.\d+)$/u.test(e);
}
function Yi(e, t) {
  return t.parser === "json" || t.parser === "jsonc" || !te(e.key) || nt(fe(e.key), t).slice(1, -1) !== e.key.value ? false : !!(Ui(e.key.value) && !(t.parser === "babel-ts" && e.type === "ClassProperty" || t.parser === "typescript" && e.type === "PropertyDefinition") || Xi(e.key.value) && String(Number(e.key.value)) === e.key.value && e.type !== "ImportAttribute" && (t.parser === "babel" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree"));
}
function Al(e, t) {
  let { key: r } = e.node;
  return (r.type === "Identifier" || Fe(r) && Xi(Et(fe(r))) && String(r.value) === Et(fe(r)) && !(t.parser === "typescript" || t.parser === "babel-ts")) && (t.parser === "json" || t.parser === "jsonc" || t.quoteProps === "consistent" && Dn.get(e.parent));
}
function Ft(e, t, r) {
  let { node: n } = e;
  if (n.computed) return ["[", r("key"), "]"];
  let { parent: s } = e, { key: u } = n;
  if (t.quoteProps === "consistent" && !Dn.has(s)) {
    let i = e.siblings.some((a) => !a.computed && te(a.key) && !Yi(a, t));
    Dn.set(s, i);
  }
  if (Al(e, t)) {
    let i = nt(JSON.stringify(u.type === "Identifier" ? u.name : u.value.toString()), t);
    return e.call((a) => ye(a, i, t), "key");
  }
  return Yi(n, t) && (t.quoteProps === "as-needed" || t.quoteProps === "consistent" && !Dn.get(s)) ? e.call((i) => ye(i, /^\d/u.test(u.value) ? Et(u.value) : u.value, t), "key") : r("key");
}
function fn(e, t, r) {
  let { node: n } = e;
  return n.shorthand ? r("value") : ht(e, t, r, Ft(e, t, r), ":", "value");
}
var Tl = ({ node: e, key: t, parent: r }) => t === "value" && e.type === "FunctionExpression" && (r.type === "ObjectMethod" || r.type === "ClassMethod" || r.type === "ClassPrivateMethod" || r.type === "MethodDefinition" || r.type === "TSAbstractMethodDefinition" || r.type === "TSDeclareMethod" || r.type === "Property" && kt(r));
function En(e, t, r, n) {
  if (Tl(e)) return Fn(e, r, t);
  let { node: s } = e, u = false;
  if ((s.type === "FunctionDeclaration" || s.type === "FunctionExpression") && (n != null && n.expandLastArg)) {
    let { parent: y } = e;
    L(y) && (pe(y).length > 1 || z(s).every((D) => D.type === "Identifier" && !D.typeAnnotation)) && (u = true);
  }
  let i = [K(e), s.async ? "async " : "", `function${s.generator ? "*" : ""} `, s.id ? t("id") : ""], a = Ue(e, t, r, u), o = Qt(e, t), p = ot(s, o);
  return i.push(tt(e, r, t), l([p ? l(a) : a, o]), s.body ? " " : "", t("body")), r.semi && (s.declare || !s.body) && i.push(";"), i;
}
function Fr(e, t, r) {
  let { node: n } = e, { kind: s } = n, u = n.value || n, i = [];
  return !s || s === "init" || s === "method" || s === "constructor" ? u.async && i.push("async ") : (Mt.ok(s === "get" || s === "set"), i.push(s, " ")), u.generator && i.push("*"), i.push(Ft(e, t, r), n.optional || n.key.optional ? "?" : "", n === u ? Fn(e, t, r) : r("value")), i;
}
function Fn(e, t, r) {
  let { node: n } = e, s = Ue(e, r, t), u = Qt(e, r), i = qi(n), a = ot(n, u), o = [tt(e, t, r), l([i ? l(s, { shouldBreak: true }) : a ? l(s) : s, u])];
  return n.body ? o.push(" ", r("body")) : o.push(t.semi ? ";" : ""), o;
}
function dl(e) {
  let t = z(e);
  return t.length === 1 && !e.typeParameters && !T(e, h.Dangling) && t[0].type === "Identifier" && !t[0].typeAnnotation && !T(t[0]) && !t[0].optional && !e.predicate && !e.returnType;
}
function Cn(e, t) {
  if (t.arrowParens === "always") return false;
  if (t.arrowParens === "avoid") {
    let { node: r } = e;
    return dl(r);
  }
  return false;
}
function Qt(e, t) {
  let { node: r } = e, s = [H(e, t, "returnType")];
  return r.predicate && s.push(t("predicate")), s;
}
function Hi(e, t, r) {
  let { node: n } = e, s = t.semi ? ";" : "", u = [];
  if (n.argument) {
    let o = r("argument");
    xl(t, n.argument) ? o = ["(", f([F, o]), F, ")"] : (De(n.argument) || n.argument.type === "SequenceExpression" || t.experimentalTernaries && n.argument.type === "ConditionalExpression" && (n.argument.consequent.type === "ConditionalExpression" || n.argument.alternate.type === "ConditionalExpression")) && (o = l([B("("), f([E, o]), E, B(")")])), u.push(" ", o);
  }
  let i = T(n, h.Dangling), a = s && i && T(n, h.Last | h.Line);
  return a && u.push(s), i && u.push(" ", J(e, t)), a || u.push(s), u;
}
function Vi(e, t, r) {
  return ["return", Hi(e, t, r)];
}
function $i(e, t, r) {
  return ["throw", Hi(e, t, r)];
}
function xl(e, t) {
  if (Le(e.originalText, t) || T(t, h.Leading, (r) => de(e.originalText, q(r), k(r))) && !X(t)) return true;
  if (Jt(t)) {
    let r = t, n;
    for (; n = pu(r); ) if (r = n, Le(e.originalText, r)) return true;
  }
  return false;
}
var gs = /* @__PURE__ */ new WeakMap();
function Ki(e) {
  return gs.has(e) || gs.set(e, e.type === "ConditionalExpression" && !ae(e, (t) => t.type === "ObjectExpression")), gs.get(e);
}
var Qi = (e) => e.type === "SequenceExpression";
function zi(e, t, r, n = {}) {
  let s = [], u, i = [], a = false, o = !n.expandLastArg && e.node.body.type === "ArrowFunctionExpression", p;
  (function S() {
    let { node: g } = e, _ = hl(e, t, r, n);
    if (s.length === 0) s.push(_);
    else {
      let { leading: v, trailing: j } = ls(e, t);
      s.push([v, _]), i.unshift(j);
    }
    o && (a || (a = g.returnType && z(g).length > 0 || g.typeParameters || z(g).some((v) => v.type !== "Identifier"))), !o || g.body.type !== "ArrowFunctionExpression" ? (u = r("body", n), p = g.body) : e.call(S, "body");
  })();
  let y = !Le(t.originalText, p) && (Qi(p) || gl(p, u, t) || !a && Ki(p)), D = e.key === "callee" && mt(e.parent), m = Symbol("arrow-chain"), C = Sl(e, n, { signatureDocs: s, shouldBreak: a }), c = false, A = false, d = false;
  return o && (D || n.assignmentLayout) && (A = true, d = !T(e.node, h.Leading & h.Line), c = n.assignmentLayout === "chain-tail-arrow-chain" || D && !y), u = Bl(e, t, n, { bodyDoc: u, bodyComments: i, functionBody: p, shouldPutBodyOnSameLine: y }), l([l(A ? f([d ? E : "", C]) : C, { shouldBreak: c, id: m }), " =>", o ? xt(u, { groupId: m }) : l(u), o && D ? B(E, "", { groupId: m }) : ""]);
}
function hl(e, t, r, n) {
  let { node: s } = e, u = [];
  if (s.async && u.push("async "), Cn(e, t)) u.push(r(["params", 0]));
  else {
    let a = n.expandLastArg || n.expandFirstArg, o = Qt(e, r);
    if (a) {
      if (re(o)) throw new Dt();
      o = l(cr(o));
    }
    u.push(l([Ue(e, r, t, a, true), o]));
  }
  let i = J(e, t, { filter(a) {
    let o = it(t.originalText, k(a));
    return o !== false && t.originalText.slice(o, o + 2) === "=>";
  } });
  return i && u.push(" ", i), u;
}
function gl(e, t, r) {
  var n, s;
  return U(e) || se(e) || e.type === "ArrowFunctionExpression" || e.type === "DoExpression" || e.type === "BlockStatement" || X(e) || ((n = t.label) == null ? void 0 : n.hug) !== false && (((s = t.label) == null ? void 0 : s.embed) || _r(e, r.originalText));
}
function Sl(e, t, { signatureDocs: r, shouldBreak: n }) {
  if (r.length === 1) return r[0];
  let { parent: s, key: u } = e;
  return u !== "callee" && mt(s) || De(s) ? l([r[0], " =>", f([x, b([" =>", x], r.slice(1))])], { shouldBreak: n }) : u === "callee" && mt(s) || t.assignmentLayout ? l(b([" =>", x], r), { shouldBreak: n }) : l(f(b([" =>", x], r)), { shouldBreak: n });
}
function Bl(e, t, r, { bodyDoc: n, bodyComments: s, functionBody: u, shouldPutBodyOnSameLine: i }) {
  let { node: a, parent: o } = e, p = r.expandLastArg && oe(t, "all") ? B(",") : "", y = (r.expandLastArg || o.type === "JSXExpressionContainer") && !T(a) ? E : "";
  return i && Ki(u) ? [" ", l([B("", "("), f([E, n]), B("", ")"), p, y]), s] : (Qi(u) && (n = l(["(", f([E, n]), E, ")"])), i ? [" ", n, s] : [f([x, n, s]), p, y]);
}
var bl = (e, t, r) => {
  if (!(e && t == null)) {
    if (t.findLast) return t.findLast(r);
    for (let n = t.length - 1; n >= 0; n--) {
      let s = t[n];
      if (r(s, n, t)) return s;
    }
  }
}, Zi = bl;
function Cr(e, t, r, n) {
  let { node: s } = e, u = [], i = Zi(false, s[n], (a) => a.type !== "EmptyStatement");
  return e.each(({ node: a }) => {
    a.type !== "EmptyStatement" && (u.push(r()), a !== i && (u.push(F), ce(a, t) && u.push(F)));
  }, n), u;
}
function An(e, t, r) {
  let n = Pl(e, t, r), { node: s, parent: u } = e;
  if (s.type === "Program" && (u == null ? void 0 : u.type) !== "ModuleExpression") return n ? [n, F] : "";
  let i = [];
  if (s.type === "StaticBlock" && i.push("static "), i.push("{"), n) i.push(f([F, n]), F);
  else {
    let a = e.grandparent;
    u.type === "ArrowFunctionExpression" || u.type === "FunctionExpression" || u.type === "FunctionDeclaration" || u.type === "ComponentDeclaration" || u.type === "HookDeclaration" || u.type === "ObjectMethod" || u.type === "ClassMethod" || u.type === "ClassPrivateMethod" || u.type === "ForStatement" || u.type === "WhileStatement" || u.type === "DoWhileStatement" || u.type === "DoExpression" || u.type === "ModuleExpression" || u.type === "CatchClause" && !a.finalizer || u.type === "TSModuleDeclaration" || s.type === "StaticBlock" || i.push(F);
  }
  return i.push("}"), i;
}
function Pl(e, t, r) {
  let { node: n } = e, s = O(n.directives), u = n.body.some((o) => o.type !== "EmptyStatement"), i = T(n, h.Dangling);
  if (!s && !u && !i) return "";
  let a = [];
  return s && (a.push(Cr(e, t, r, "directives")), (u || i) && (a.push(F), ce(M(false, n.directives, -1), t) && a.push(F))), u && a.push(Cr(e, t, r, "body")), i && a.push(J(e, t)), a;
}
function kl(e) {
  let t = /* @__PURE__ */ new WeakMap();
  return function(r) {
    return t.has(r) || t.set(r, Symbol(e)), t.get(r);
  };
}
var Tn = kl;
function Il(e) {
  switch (e) {
    case null:
      return "";
    case "PlusOptional":
      return "+?";
    case "MinusOptional":
      return "-?";
    case "Optional":
      return "?";
  }
}
function ea(e, t, r) {
  let { node: n } = e;
  return l([n.variance ? r("variance") : "", "[", f([r("keyTparam"), " in ", r("sourceType")]), "]", Il(n.optional), ": ", r("propType")]);
}
function Ss(e, t) {
  return e === "+" || e === "-" ? e + t : t;
}
function ta(e, t, r) {
  let { node: n } = e, s = t.objectWrap === "preserve" && de(t.originalText, q(n), q(n.typeParameter));
  return l(["{", f([t.bracketSpacing ? x : E, l([r("typeParameter"), n.optional ? Ss(n.optional, "?") : "", n.typeAnnotation ? ": " : "", r("typeAnnotation")]), t.semi ? B(";") : ""]), J(e, t), t.bracketSpacing ? x : E, "}"], { shouldBreak: s });
}
var Ar = Tn("typeParameters");
function Ll(e, t, r) {
  let { node: n } = e;
  return z(n).length === 1 && n.type.startsWith("TS") && !n[r][0].constraint && e.parent.type === "ArrowFunctionExpression" && !(t.filepath && /\.ts$/u.test(t.filepath));
}
function Ot(e, t, r, n) {
  let { node: s } = e;
  if (!s[n]) return "";
  if (!Array.isArray(s[n])) return r(n);
  let u = It(e.grandparent), i = e.match((p) => !(p[n].length === 1 && Re(p[n][0])), void 0, (p, y) => y === "typeAnnotation", (p) => p.type === "Identifier", Ts);
  if (s[n].length === 0 || !i && (u || s[n].length === 1 && (s[n][0].type === "NullableTypeAnnotation" || xs(s[n][0])))) return ["<", b(", ", e.map(r, n)), wl(e, t), ">"];
  let o = s.type === "TSTypeParameterInstantiation" ? "" : Ll(e, t, n) ? "," : oe(t) ? B(",") : "";
  return l(["<", f([E, b([",", x], e.map(r, n))]), o, E, ">"], { id: Ar(s) });
}
function wl(e, t) {
  let { node: r } = e;
  if (!T(r, h.Dangling)) return "";
  let n = !T(r, h.Line), s = J(e, t, { indent: !n });
  return n ? s : [s, F];
}
function dn(e, t, r) {
  let { node: n, parent: s } = e, u = [n.const ? "const " : ""], i = n.type === "TSTypeParameter" ? r("name") : n.name;
  if (s.type === "TSMappedType") return s.readonly && u.push(Ss(s.readonly, "readonly"), " "), u.push("[", i), n.constraint && u.push(" in ", r("constraint")), s.nameType && u.push(" as ", e.callParent(() => r("nameType"))), u.push("]"), u;
  if (n.variance && u.push(r("variance")), n.in && u.push("in "), n.out && u.push("out "), u.push(i), n.bound && (n.usesExtendsBound && u.push(" extends "), u.push(H(e, r, "bound"))), n.constraint) {
    let a = Symbol("constraint");
    u.push(" extends", l(f(x), { id: a }), je, xt(r("constraint"), { groupId: a }));
  }
  return n.default && u.push(" = ", r("default")), l(u);
}
var ra = R(["ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function xn(e, t, r) {
  let { node: n } = e, s = [K(e), Vt(e), "class"], u = T(n.id, h.Trailing) || T(n.typeParameters, h.Trailing) || T(n.superClass) || O(n.extends) || O(n.mixins) || O(n.implements), i = [], a = [];
  if (n.id && i.push(" ", r("id")), i.push(r("typeParameters")), n.superClass) {
    let y = [_l(e, t, r), r(n.superTypeArguments ? "superTypeArguments" : "superTypeParameters")], D = e.call((m) => ["extends ", ye(m, y, t)], "superClass");
    u ? a.push(x, l(D)) : a.push(" ", D);
  } else a.push(Bs(e, t, r, "extends"));
  a.push(Bs(e, t, r, "mixins"), Bs(e, t, r, "implements"));
  let o;
  if (u) {
    let y;
    ua(n) ? y = [...i, f(a)] : y = f([...i, a]), o = na(n), s.push(l(y, { id: o }));
  } else s.push(...i, ...a);
  let p = n.body;
  return u && O(p.body) ? s.push(B(F, " ", { groupId: o })) : s.push(" "), s.push(r("body")), s;
}
var na = Tn("heritageGroup");
function sa(e) {
  return B(F, "", { groupId: na(e) });
}
function Ol(e) {
  return ["extends", "mixins", "implements"].reduce((t, r) => t + (Array.isArray(e[r]) ? e[r].length : 0), e.superClass ? 1 : 0) > 1;
}
function ua(e) {
  return e.typeParameters && !T(e.typeParameters, h.Trailing | h.Line) && !Ol(e);
}
function Bs(e, t, r, n) {
  let { node: s } = e;
  if (!O(s[n])) return "";
  let u = J(e, t, { marker: n });
  return [ua(s) ? B(" ", x, { groupId: Ar(s.typeParameters) }) : x, u, u && F, n, l(f([x, b([",", x], e.map(r, n))]))];
}
function _l(e, t, r) {
  let n = r("superClass"), { parent: s } = e;
  return s.type === "AssignmentExpression" ? l(B(["(", f([E, n]), E, ")"], n)) : n;
}
function hn(e, t, r) {
  let { node: n } = e, s = [];
  return O(n.decorators) && s.push(Fs(e, t, r)), s.push($t(n)), n.static && s.push("static "), s.push(Vt(e)), n.override && s.push("override "), s.push(Fr(e, t, r)), s;
}
function gn(e, t, r) {
  let { node: n } = e, s = [], u = t.semi ? ";" : "";
  O(n.decorators) && s.push(Fs(e, t, r)), s.push(K(e), $t(n)), n.static && s.push("static "), s.push(Vt(e)), n.override && s.push("override "), n.readonly && s.push("readonly "), n.variance && s.push(r("variance")), (n.type === "ClassAccessorProperty" || n.type === "AccessorProperty" || n.type === "TSAbstractAccessorProperty") && s.push("accessor "), s.push(Ft(e, t, r), $(e), mn(e), H(e, r));
  let i = n.type === "TSAbstractPropertyDefinition" || n.type === "TSAbstractAccessorProperty";
  return [ht(e, t, r, s, " =", i ? void 0 : "value"), u];
}
function ia(e, t, r) {
  let { node: n } = e, s = [];
  return e.each(({ node: u, next: i, isLast: a }) => {
    s.push(r()), !t.semi && ra(u) && vl(u, i) && s.push(";"), a || (s.push(F), ce(u, t) && s.push(F));
  }, "body"), T(n, h.Dangling) && s.push(J(e, t)), ["{", s.length > 0 ? [f([F, s]), F] : "", "}"];
}
function vl(e, t) {
  var s;
  let { type: r, name: n } = e.key;
  if (!e.computed && r === "Identifier" && (n === "static" || n === "get" || n === "set") && !e.value && !e.typeAnnotation) return true;
  if (!t || t.static || t.accessibility || t.readonly) return false;
  if (!t.computed) {
    let u = (s = t.key) == null ? void 0 : s.name;
    if (u === "in" || u === "instanceof") return true;
  }
  if (ra(t) && t.variance && !t.static && !t.declare) return true;
  switch (t.type) {
    case "ClassProperty":
    case "PropertyDefinition":
    case "TSAbstractPropertyDefinition":
      return t.computed;
    case "MethodDefinition":
    case "TSAbstractMethodDefinition":
    case "ClassMethod":
    case "ClassPrivateMethod": {
      if ((t.value ? t.value.async : t.async) || t.kind === "get" || t.kind === "set") return false;
      let i = t.value ? t.value.generator : t.generator;
      return !!(t.computed || i);
    }
    case "TSIndexSignature":
      return true;
  }
  return false;
}
var jl = R(["TSAsExpression", "TSTypeAssertion", "TSNonNullExpression", "TSInstantiationExpression", "TSSatisfiesExpression"]);
function bs(e) {
  return jl(e) ? bs(e.expression) : e;
}
var aa = R(["FunctionExpression", "ArrowFunctionExpression"]);
function oa(e) {
  return e.type === "MemberExpression" || e.type === "OptionalMemberExpression" || e.type === "Identifier" && e.name !== "undefined";
}
function pa(e, t) {
  if (t.semi || Ps(e, t) || ks(e, t)) return false;
  let { node: r, key: n, parent: s } = e;
  return !!(r.type === "ExpressionStatement" && (n === "body" && (s.type === "Program" || s.type === "BlockStatement" || s.type === "StaticBlock" || s.type === "TSModuleBlock") || n === "consequent" && s.type === "SwitchCase") && e.call(() => ca(e, t), "expression"));
}
function ca(e, t) {
  let { node: r } = e;
  switch (r.type) {
    case "ParenthesizedExpression":
    case "TypeCastExpression":
    case "ArrayExpression":
    case "ArrayPattern":
    case "TemplateLiteral":
    case "TemplateElement":
    case "RegExpLiteral":
      return true;
    case "ArrowFunctionExpression":
      if (!Cn(e, t)) return true;
      break;
    case "UnaryExpression": {
      let { prefix: n, operator: s } = r;
      if (n && (s === "+" || s === "-")) return true;
      break;
    }
    case "BindExpression":
      if (!r.object) return true;
      break;
    case "Literal":
      if (r.regex) return true;
      break;
    default:
      if (X(r)) return true;
  }
  return ke(e, t) ? true : Jt(r) ? e.call(() => ca(e, t), ...Lr(r)) : false;
}
function Ps({ node: e, parent: t }, r) {
  return (r.parentParser === "markdown" || r.parentParser === "mdx") && e.type === "ExpressionStatement" && X(e.expression) && t.type === "Program" && t.body.length === 1;
}
function ks({ node: e, parent: t }, r) {
  return (r.parser === "__vue_event_binding" || r.parser === "__vue_ts_event_binding") && e.type === "ExpressionStatement" && t.type === "Program" && t.body.length === 1;
}
function la(e, t, r) {
  let n = [r("expression")];
  if (ks(e, t)) {
    let s = bs(e.node.expression);
    (aa(s) || oa(s)) && n.push(";");
  } else Ps(e, t) || t.semi && n.push(";");
  return n;
}
function ma(e, t, r) {
  if (t.__isVueBindings || t.__isVueForBindingLeft) {
    let n = e.map(r, "program", "body", 0, "params");
    if (n.length === 1) return n[0];
    let s = b([",", x], n);
    return t.__isVueForBindingLeft ? ["(", f([E, l(s)]), E, ")"] : s;
  }
  if (t.__isEmbeddedTypescriptGenericParameters) {
    let n = e.map(r, "program", "body", 0, "typeParameters", "params");
    return b([",", x], n);
  }
}
function fa(e, t) {
  let { node: r } = e;
  switch (r.type) {
    case "RegExpLiteral":
      return ya(r);
    case "BigIntLiteral":
      return Sn(r.extra.raw);
    case "NumericLiteral":
      return Et(r.extra.raw);
    case "StringLiteral":
      return ve(nt(r.extra.raw, t));
    case "NullLiteral":
      return "null";
    case "BooleanLiteral":
      return String(r.value);
    case "DirectiveLiteral":
      return Da(r.extra.raw, t);
    case "Literal": {
      if (r.regex) return ya(r.regex);
      if (r.bigint) return Sn(r.raw);
      let { value: n } = r;
      return typeof n == "number" ? Et(r.raw) : typeof n == "string" ? Ml(e) ? Da(r.raw, t) : ve(nt(r.raw, t)) : String(n);
    }
  }
}
function Ml(e) {
  if (e.key !== "expression") return;
  let { parent: t } = e;
  return t.type === "ExpressionStatement" && t.directive;
}
function Sn(e) {
  return e.toLowerCase();
}
function ya({ pattern: e, flags: t }) {
  return t = [...t].sort().join(""), `/${e}/${t}`;
}
function Da(e, t) {
  let r = e.slice(1, -1);
  if (r.includes('"') || r.includes("'")) return e;
  let n = t.singleQuote ? "'" : '"';
  return n + r + n;
}
function Rl(e, t, r) {
  let n = e.originalText.slice(t, r);
  for (let s of e[Symbol.for("comments")]) {
    let u = q(s);
    if (u > r) break;
    let i = k(s);
    if (i < t) continue;
    let a = i - u;
    n = n.slice(0, u - t) + " ".repeat(a) + n.slice(i - t);
  }
  return n;
}
var Is = Rl;
function Ea(e, t, r) {
  let { node: n } = e;
  return ["import", n.phase ? ` ${n.phase}` : "", ws(n), Aa(e, t, r), Ca(e, t, r), da(e, t, r), t.semi ? ";" : ""];
}
var Fa = (e) => e.type === "ExportDefaultDeclaration" || e.type === "DeclareExportDeclaration" && e.default;
function Bn(e, t, r) {
  let { node: n } = e, s = [Si(e, t, r), K(e), "export", Fa(n) ? " default" : ""], { declaration: u, exported: i } = n;
  return T(n, h.Dangling) && (s.push(" ", J(e, t)), vr(n) && s.push(F)), u ? s.push(" ", r("declaration")) : (s.push(Wl(n)), n.type === "ExportAllDeclaration" || n.type === "DeclareExportAllDeclaration" ? (s.push(" *"), i && s.push(" as ", r("exported"))) : s.push(Aa(e, t, r)), s.push(Ca(e, t, r), da(e, t, r))), s.push(ql(n, t)), s;
}
var Jl = R(["ClassDeclaration", "ComponentDeclaration", "FunctionDeclaration", "TSInterfaceDeclaration", "DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "HookDeclaration", "TSDeclareFunction", "EnumDeclaration"]);
function ql(e, t) {
  return t.semi && (!e.declaration || Fa(e) && !Jl(e.declaration)) ? ";" : "";
}
function Ls(e, t = true) {
  return e && e !== "value" ? `${t ? " " : ""}${e}${t ? "" : " "}` : "";
}
function ws(e, t) {
  return Ls(e.importKind, t);
}
function Wl(e) {
  return Ls(e.exportKind);
}
function Ca(e, t, r) {
  let { node: n } = e;
  if (!n.source) return "";
  let s = [];
  return Ta(n, t) && s.push(" from"), s.push(" ", r("source")), s;
}
function Aa(e, t, r) {
  let { node: n } = e;
  if (!Ta(n, t)) return "";
  let s = [" "];
  if (O(n.specifiers)) {
    let u = [], i = [];
    e.each(() => {
      let a = e.node.type;
      if (a === "ExportNamespaceSpecifier" || a === "ExportDefaultSpecifier" || a === "ImportNamespaceSpecifier" || a === "ImportDefaultSpecifier") u.push(r());
      else if (a === "ExportSpecifier" || a === "ImportSpecifier") i.push(r());
      else throw new Ne(n, "specifier");
    }, "specifiers"), s.push(b(", ", u)), i.length > 0 && (u.length > 0 && s.push(", "), i.length > 1 || u.length > 0 || n.specifiers.some((o) => T(o)) ? s.push(l(["{", f([t.bracketSpacing ? x : E, b([",", x], i)]), B(oe(t) ? "," : ""), t.bracketSpacing ? x : E, "}"])) : s.push(["{", t.bracketSpacing ? " " : "", ...i, t.bracketSpacing ? " " : "", "}"]));
  } else s.push("{}");
  return s;
}
function Ta(e, t) {
  return e.type !== "ImportDeclaration" || O(e.specifiers) || e.importKind === "type" ? true : Is(t, q(e), q(e.source)).trimEnd().endsWith("from");
}
function Nl(e, t) {
  var n, s;
  if ((n = e.extra) != null && n.deprecatedAssertSyntax) return "assert";
  let r = Is(t, k(e.source), (s = e.attributes) != null && s[0] ? q(e.attributes[0]) : k(e)).trimStart();
  return r.startsWith("assert") ? "assert" : r.startsWith("with") || O(e.attributes) ? "with" : void 0;
}
function da(e, t, r) {
  let { node: n } = e;
  if (!n.source) return "";
  let s = Nl(n, t);
  if (!s) return "";
  let u = [` ${s} {`];
  return O(n.attributes) && (t.bracketSpacing && u.push(" "), u.push(b(", ", e.map(r, "attributes"))), t.bracketSpacing && u.push(" ")), u.push("}"), u;
}
function xa(e, t, r) {
  let { node: n } = e, { type: s } = n, u = s.startsWith("Import"), i = u ? "imported" : "local", a = u ? "local" : "exported", o = n[i], p = n[a], y = "", D = "";
  return s === "ExportNamespaceSpecifier" || s === "ImportNamespaceSpecifier" ? y = "*" : o && (y = r(i)), p && !Gl(n) && (D = r(a)), [Ls(s === "ImportSpecifier" ? n.importKind : n.exportKind, false), y, y && D ? " as " : "", D];
}
function Gl(e) {
  if (e.type !== "ImportSpecifier" && e.type !== "ExportSpecifier") return false;
  let { local: t, [e.type === "ImportSpecifier" ? "imported" : "exported"]: r } = e;
  if (t.type !== r.type || !su(t, r)) return false;
  if (te(t)) return t.value === r.value && fe(t) === fe(r);
  switch (t.type) {
    case "Identifier":
      return t.name === r.name;
    default:
      return false;
  }
}
function gt(e, t, r) {
  var j;
  let n = t.semi ? ";" : "", { node: s } = e, u = s.type === "ObjectTypeAnnotation", i = s.type === "TSEnumDeclaration" || s.type === "EnumBooleanBody" || s.type === "EnumNumberBody" || s.type === "EnumBigIntBody" || s.type === "EnumStringBody" || s.type === "EnumSymbolBody", a = [s.type === "TSTypeLiteral" || i ? "members" : s.type === "TSInterfaceBody" ? "body" : "properties"];
  u && a.push("indexers", "callProperties", "internalSlots");
  let o = a.flatMap((I) => e.map(({ node: G }) => ({ node: G, printed: r(), loc: q(G) }), I));
  a.length > 1 && o.sort((I, G) => I.loc - G.loc);
  let { parent: p, key: y } = e, D = u && y === "body" && (p.type === "InterfaceDeclaration" || p.type === "DeclareInterface" || p.type === "DeclareClass"), m = s.type === "TSInterfaceBody" || i || D || s.type === "ObjectPattern" && p.type !== "FunctionDeclaration" && p.type !== "FunctionExpression" && p.type !== "ArrowFunctionExpression" && p.type !== "ObjectMethod" && p.type !== "ClassMethod" && p.type !== "ClassPrivateMethod" && p.type !== "AssignmentPattern" && p.type !== "CatchClause" && s.properties.some((I) => I.value && (I.value.type === "ObjectPattern" || I.value.type === "ArrayPattern")) || s.type !== "ObjectPattern" && t.objectWrap === "preserve" && o.length > 0 && de(t.originalText, q(s), o[0].loc), C = D ? ";" : s.type === "TSInterfaceBody" || s.type === "TSTypeLiteral" ? B(n, ";") : ",", c = s.type === "RecordExpression" ? "#{" : s.exact ? "{|" : "{", A = s.exact ? "|}" : "}", d = [], S = o.map((I) => {
    let G = [...d, l(I.printed)];
    return d = [C, x], (I.node.type === "TSPropertySignature" || I.node.type === "TSMethodSignature" || I.node.type === "TSConstructSignatureDeclaration" || I.node.type === "TSCallSignatureDeclaration") && T(I.node, h.PrettierIgnore) && d.shift(), ce(I.node, t) && d.push(F), G;
  });
  if (s.inexact || s.hasUnknownMembers) {
    let I;
    if (T(s, h.Dangling)) {
      let G = T(s, h.Line);
      I = [J(e, t), G || Z(t.originalText, k(M(false, lt(s), -1))) ? F : x, "..."];
    } else I = ["..."];
    S.push([...d, ...I]);
  }
  let g = (j = M(false, o, -1)) == null ? void 0 : j.node, _ = !(s.inexact || s.hasUnknownMembers || g && (g.type === "RestElement" || (g.type === "TSPropertySignature" || g.type === "TSCallSignatureDeclaration" || g.type === "TSMethodSignature" || g.type === "TSConstructSignatureDeclaration") && T(g, h.PrettierIgnore))), v;
  if (S.length === 0) {
    if (!T(s, h.Dangling)) return [c, A, H(e, r)];
    v = l([c, J(e, t, { indent: true }), E, A, $(e), H(e, r)]);
  } else v = [D && O(s.properties) ? sa(p) : "", c, f([t.bracketSpacing ? x : E, ...S]), B(_ && (C !== "," || oe(t)) ? C : ""), t.bracketSpacing ? x : E, A, $(e), H(e, r)];
  return e.match((I) => I.type === "ObjectPattern" && !O(I.decorators), Os) || Re(s) && (e.match(void 0, (I, G) => G === "typeAnnotation", (I, G) => G === "typeAnnotation", Os) || e.match(void 0, (I, G) => I.type === "FunctionTypeParam" && G === "typeAnnotation", Os)) || !m && e.match((I) => I.type === "ObjectPattern", (I) => I.type === "AssignmentExpression" || I.type === "VariableDeclarator") ? v : l(v, { shouldBreak: m });
}
function Os(e, t) {
  return (t === "params" || t === "parameters" || t === "this" || t === "rest") && ds(e);
}
function Ul(e) {
  let t = [e];
  for (let r = 0; r < t.length; r++) {
    let n = t[r];
    for (let s of ["test", "consequent", "alternate"]) {
      let u = n[s];
      if (X(u)) return true;
      u.type === "ConditionalExpression" && t.push(u);
    }
  }
  return false;
}
function Yl(e, t, r) {
  let { node: n } = e, s = n.type === "ConditionalExpression", u = s ? "alternate" : "falseType", { parent: i } = e, a = s ? r("test") : [r("checkType"), " ", "extends", " ", r("extendsType")];
  return i.type === n.type && i[u] === n ? Be(2, a) : a;
}
var Xl = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
function Hl(e) {
  let { node: t } = e;
  if (t.type !== "ConditionalExpression") return false;
  let r, n = t;
  for (let s = 0; !r; s++) {
    let u = e.getParentNode(s);
    if (u.type === "ChainExpression" && u.expression === n || L(u) && u.callee === n || W(u) && u.object === n || u.type === "TSNonNullExpression" && u.expression === n) {
      n = u;
      continue;
    }
    u.type === "NewExpression" && u.callee === n || Ae(u) && u.expression === n ? (r = e.getParentNode(s + 1), n = u) : r = u;
  }
  return n === t ? false : r[Xl.get(r.type)] === n;
}
function ha(e, t, r) {
  let { node: n } = e, s = n.type === "ConditionalExpression", u = s ? "consequent" : "trueType", i = s ? "alternate" : "falseType", a = s ? ["test"] : ["checkType", "extendsType"], o = n[u], p = n[i], y = [], D = false, { parent: m } = e, C = m.type === n.type && a.some((N) => m[N] === n), c = m.type === n.type && !C, A, d, S = 0;
  do
    d = A || n, A = e.getParentNode(S), S++;
  while (A && A.type === n.type && a.every((N) => A[N] !== d));
  let g = A || m, _ = d;
  if (s && (X(n[a[0]]) || X(o) || X(p) || Ul(_))) {
    D = true, c = true;
    let N = (Q) => [B("("), f([E, Q]), E, B(")")], ue = (Q) => Q.type === "NullLiteral" || Q.type === "Literal" && Q.value === null || Q.type === "Identifier" && Q.name === "undefined";
    y.push(" ? ", ue(o) ? r(u) : N(r(u)), " : ", p.type === n.type || ue(p) ? r(i) : N(r(i)));
  } else {
    let N = (Q) => t.useTabs ? f(r(Q)) : Be(2, r(Q)), ue = [x, "? ", o.type === n.type ? B("", "(") : "", N(u), o.type === n.type ? B("", ")") : "", x, ": ", N(i)];
    y.push(m.type !== n.type || m[i] === n || C ? ue : t.useTabs ? Jr(f(ue)) : Be(Math.max(0, t.tabWidth - 2), ue));
  }
  let v = [u, i, ...a].some((N) => T(n[N], (ue) => ee(ue) && de(t.originalText, q(ue), k(ue)))), j = (N) => m === g ? l(N, { shouldBreak: v }) : v ? [N, Ee] : N, I = !D && (W(m) || m.type === "NGPipeExpression" && m.left === n) && !m.computed, G = Hl(e), P = j([Yl(e, t, r), c ? y : f(y), s && I && !G ? E : ""]);
  return C || G ? l([f([E, P]), E]) : P;
}
function Vl(e, t) {
  return (W(t) || t.type === "NGPipeExpression" && t.left === e) && !t.computed;
}
function $l(e, t, r, n) {
  return [...e.map((u) => lt(u)), lt(t), lt(r)].flat().some((u) => ee(u) && de(n.originalText, q(u), k(u)));
}
var Kl = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"], ["AwaitExpression", "argument"]]);
function Ql(e) {
  let { node: t } = e;
  if (t.type !== "ConditionalExpression") return false;
  let r, n = t;
  for (let s = 0; !r; s++) {
    let u = e.getParentNode(s);
    if (u.type === "ChainExpression" && u.expression === n || L(u) && u.callee === n || W(u) && u.object === n || u.type === "TSNonNullExpression" && u.expression === n) {
      n = u;
      continue;
    }
    u.type === "NewExpression" && u.callee === n || Ae(u) && u.expression === n ? (r = e.getParentNode(s + 1), n = u) : r = u;
  }
  return n === t ? false : r[Kl.get(r.type)] === n;
}
var _s = (e) => [B("("), f([E, e]), E, B(")")];
function zt(e, t, r, n) {
  if (!t.experimentalTernaries) return ha(e, t, r);
  let { node: s } = e, u = s.type === "ConditionalExpression", i = Je(s), a = u ? "consequent" : "trueType", o = u ? "alternate" : "falseType", p = u ? ["test"] : ["checkType", "extendsType"], y = s[a], D = s[o], m = p.map((Ye) => s[Ye]), { parent: C } = e, c = C.type === s.type, A = c && p.some((Ye) => C[Ye] === s), d = c && C[o] === s, S = y.type === s.type, g = D.type === s.type, _ = g || d, v = t.tabWidth > 2 || t.useTabs, j, I, G = 0;
  do
    I = j || s, j = e.getParentNode(G), G++;
  while (j && j.type === s.type && p.every((Ye) => j[Ye] !== I));
  let P = j || C, N = n && n.assignmentLayout && n.assignmentLayout !== "break-after-operator" && (C.type === "AssignmentExpression" || C.type === "VariableDeclarator" || C.type === "ClassProperty" || C.type === "PropertyDefinition" || C.type === "ClassPrivateProperty" || C.type === "ObjectProperty" || C.type === "Property"), ue = (C.type === "ReturnStatement" || C.type === "ThrowStatement") && !(S || g), Q = u && P.type === "JSXExpressionContainer" && e.grandparent.type !== "JSXAttribute", Bt = Ql(e), Ct = Vl(s, C), w = i && ke(e, t), ne = v ? t.useTabs ? "	" : " ".repeat(t.tabWidth - 1) : "", xe = $l(m, y, D, t) || S || g, pt = !_ && !c && !i && (Q ? y.type === "NullLiteral" || y.type === "Literal" && y.value === null : ir(y, t) && Jn(s.test, 3)), bt = _ || d || i && !c || c && u && Jn(s.test, 1) || pt, Rs = [];
  !S && T(y, h.Dangling) && e.call((Ye) => {
    Rs.push(J(Ye, t), F);
  }, "consequent");
  let er = [];
  T(s.test, h.Dangling) && e.call((Ye) => {
    er.push(J(Ye, t));
  }, "test"), !g && T(D, h.Dangling) && e.call((Ye) => {
    er.push(J(Ye, t));
  }, "alternate"), T(s, h.Dangling) && er.push(J(e, t));
  let Js = Symbol("test"), Ga = Symbol("consequent"), Tr = Symbol("test-and-consequent"), Ua = u ? [_s(r("test")), s.test.type === "ConditionalExpression" ? Ee : ""] : [r("checkType"), " ", "extends", " ", Je(s.extendsType) || s.extendsType.type === "TSMappedType" ? r("extendsType") : l(_s(r("extendsType")))], qs = l([Ua, " ?"], { id: Js }), Ya = r(a), dr = f([S || Q && (X(y) || c || _) ? F : x, Rs, Ya]), Xa = bt ? l([qs, _ ? dr : B(dr, l(dr, { id: Ga }), { groupId: Js })], { id: Tr }) : [qs, dr], Ln = r(o), Ws = pt ? B(Ln, Jr(_s(Ln)), { groupId: Tr }) : Ln, tr = [Xa, er.length > 0 ? [f([F, er]), F] : g ? F : pt ? B(x, " ", { groupId: Tr }) : x, ":", g ? " " : v ? bt ? B(ne, B(_ || pt ? " " : ne, " "), { groupId: Tr }) : B(ne, " ") : " ", g ? Ws : l([f(Ws), Q && !pt ? E : ""]), Ct && !Bt ? E : "", xe ? Ee : ""];
  return N && !xe ? l(f([E, l(tr)])) : N || ue ? l(f(tr)) : Bt || i && A ? l([f([E, tr]), w ? E : ""]) : C === P ? l(tr) : tr;
}
function ga(e, t, r, n) {
  let { node: s } = e;
  if (wr(s)) return fa(e, t);
  let u = t.semi ? ";" : "", i = [];
  switch (s.type) {
    case "JsExpressionRoot":
      return r("node");
    case "JsonRoot":
      return [r("node"), F];
    case "File":
      return ma(e, t, r) ?? r("program");
    case "EmptyStatement":
      return "";
    case "ExpressionStatement":
      return la(e, t, r);
    case "ChainExpression":
      return r("expression");
    case "ParenthesizedExpression":
      return !T(s.expression) && (se(s.expression) || U(s.expression)) ? ["(", r("expression"), ")"] : l(["(", f([E, r("expression")]), E, ")"]);
    case "AssignmentExpression":
      return ji(e, t, r);
    case "VariableDeclarator":
      return Mi(e, t, r);
    case "BinaryExpression":
    case "LogicalExpression":
      return $r(e, t, r);
    case "AssignmentPattern":
      return [r("left"), " = ", r("right")];
    case "OptionalMemberExpression":
    case "MemberExpression":
      return Li(e, t, r);
    case "MetaProperty":
      return [r("meta"), ".", r("property")];
    case "BindExpression":
      return s.object && i.push(r("object")), i.push(l(f([E, Kr(e, t, r)]))), i;
    case "Identifier":
      return [s.name, $(e), mn(e), H(e, r)];
    case "V8IntrinsicIdentifier":
      return ["%", s.name];
    case "SpreadElement":
    case "SpreadElementPattern":
    case "SpreadPropertyPattern":
    case "RestElement":
      return yn(e, r);
    case "FunctionDeclaration":
    case "FunctionExpression":
      return En(e, r, t, n);
    case "ArrowFunctionExpression":
      return zi(e, t, r, n);
    case "YieldExpression":
      return i.push("yield"), s.delegate && i.push("*"), s.argument && i.push(" ", r("argument")), i;
    case "AwaitExpression":
      if (i.push("await"), s.argument) {
        i.push(" ", r("argument"));
        let { parent: a } = e;
        if (L(a) && a.callee === s || W(a) && a.object === s) {
          i = [f([E, ...i]), E];
          let o = e.findAncestor((p) => p.type === "AwaitExpression" || p.type === "BlockStatement");
          if ((o == null ? void 0 : o.type) !== "AwaitExpression" || !ae(o.argument, (p) => p === s)) return l(i);
        }
      }
      return i;
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
    case "ExportAllDeclaration":
      return Bn(e, t, r);
    case "ImportDeclaration":
      return Ea(e, t, r);
    case "ImportSpecifier":
    case "ExportSpecifier":
    case "ImportNamespaceSpecifier":
    case "ExportNamespaceSpecifier":
    case "ImportDefaultSpecifier":
    case "ExportDefaultSpecifier":
      return xa(e, t, r);
    case "ImportAttribute":
      return fn(e, t, r);
    case "Program":
    case "BlockStatement":
    case "StaticBlock":
      return An(e, t, r);
    case "ClassBody":
      return ia(e, t, r);
    case "ThrowStatement":
      return $i(e, t, r);
    case "ReturnStatement":
      return Vi(e, t, r);
    case "NewExpression":
    case "ImportExpression":
    case "OptionalCallExpression":
    case "CallExpression":
      return Qr(e, t, r);
    case "ObjectExpression":
    case "ObjectPattern":
    case "RecordExpression":
      return gt(e, t, r);
    case "Property":
      return kt(s) ? Fr(e, t, r) : fn(e, t, r);
    case "ObjectProperty":
      return fn(e, t, r);
    case "ObjectMethod":
      return Fr(e, t, r);
    case "Decorator":
      return ["@", r("expression")];
    case "ArrayExpression":
    case "ArrayPattern":
    case "TupleExpression":
      return Kt(e, t, r);
    case "SequenceExpression": {
      let { parent: a } = e;
      if (a.type === "ExpressionStatement" || a.type === "ForStatement") {
        let o = [];
        return e.each(({ isFirst: p }) => {
          p ? o.push(r()) : o.push(",", f([x, r()]));
        }, "expressions"), l(o);
      }
      return l(b([",", x], e.map(r, "expressions")));
    }
    case "ThisExpression":
      return "this";
    case "Super":
      return "super";
    case "Directive":
      return [r("value"), u];
    case "UnaryExpression":
      return i.push(s.operator), /[a-z]$/u.test(s.operator) && i.push(" "), T(s.argument) ? i.push(l(["(", f([E, r("argument")]), E, ")"])) : i.push(r("argument")), i;
    case "UpdateExpression":
      return [s.prefix ? s.operator : "", r("argument"), s.prefix ? "" : s.operator];
    case "ConditionalExpression":
      return zt(e, t, r, n);
    case "VariableDeclaration": {
      let a = e.map(r, "declarations"), o = e.parent, p = o.type === "ForStatement" || o.type === "ForInStatement" || o.type === "ForOfStatement", y = s.declarations.some((m) => m.init), D;
      return a.length === 1 && !T(s.declarations[0]) ? D = a[0] : a.length > 0 && (D = f(a[0])), i = [K(e), s.kind, D ? [" ", D] : "", f(a.slice(1).map((m) => [",", y && !p ? F : x, m]))], p && o.body !== s || i.push(u), l(i);
    }
    case "WithStatement":
      return l(["with (", r("object"), ")", ft(s.body, r("body"))]);
    case "IfStatement": {
      let a = ft(s.consequent, r("consequent")), o = l(["if (", l([f([E, r("test")]), E]), ")", a]);
      if (i.push(o), s.alternate) {
        let p = T(s.consequent, h.Trailing | h.Line) || vr(s), y = s.consequent.type === "BlockStatement" && !p;
        i.push(y ? " " : F), T(s, h.Dangling) && i.push(J(e, t), p ? F : " "), i.push("else", l(ft(s.alternate, r("alternate"), s.alternate.type === "IfStatement")));
      }
      return i;
    }
    case "ForStatement": {
      let a = ft(s.body, r("body")), o = J(e, t), p = o ? [o, E] : "";
      return !s.init && !s.test && !s.update ? [p, l(["for (;;)", a])] : [p, l(["for (", l([f([E, r("init"), ";", x, r("test"), ";", x, r("update")]), E]), ")", a])];
    }
    case "WhileStatement":
      return l(["while (", l([f([E, r("test")]), E]), ")", ft(s.body, r("body"))]);
    case "ForInStatement":
      return l(["for (", r("left"), " in ", r("right"), ")", ft(s.body, r("body"))]);
    case "ForOfStatement":
      return l(["for", s.await ? " await" : "", " (", r("left"), " of ", r("right"), ")", ft(s.body, r("body"))]);
    case "DoWhileStatement": {
      let a = ft(s.body, r("body"));
      return i = [l(["do", a])], s.body.type === "BlockStatement" ? i.push(" ") : i.push(F), i.push("while (", l([f([E, r("test")]), E]), ")", u), i;
    }
    case "DoExpression":
      return [s.async ? "async " : "", "do ", r("body")];
    case "BreakStatement":
    case "ContinueStatement":
      return i.push(s.type === "BreakStatement" ? "break" : "continue"), s.label && i.push(" ", r("label")), i.push(u), i;
    case "LabeledStatement":
      return s.body.type === "EmptyStatement" ? [r("label"), ":;"] : [r("label"), ": ", r("body")];
    case "TryStatement":
      return ["try ", r("block"), s.handler ? [" ", r("handler")] : "", s.finalizer ? [" finally ", r("finalizer")] : ""];
    case "CatchClause":
      if (s.param) {
        let a = T(s.param, (p) => !ee(p) || p.leading && Z(t.originalText, k(p)) || p.trailing && Z(t.originalText, q(p), { backwards: true })), o = r("param");
        return ["catch ", a ? ["(", f([E, o]), E, ") "] : ["(", o, ") "], r("body")];
      }
      return ["catch ", r("body")];
    case "SwitchStatement":
      return [l(["switch (", f([E, r("discriminant")]), E, ")"]), " {", s.cases.length > 0 ? f([F, b(F, e.map(({ node: a, isLast: o }) => [r(), !o && ce(a, t) ? F : ""], "cases"))]) : "", F, "}"];
    case "SwitchCase": {
      s.test ? i.push("case ", r("test"), ":") : i.push("default:"), T(s, h.Dangling) && i.push(" ", J(e, t));
      let a = s.consequent.filter((o) => o.type !== "EmptyStatement");
      if (a.length > 0) {
        let o = Cr(e, t, r, "consequent");
        i.push(a.length === 1 && a[0].type === "BlockStatement" ? [" ", o] : f([F, o]));
      }
      return i;
    }
    case "DebuggerStatement":
      return ["debugger", u];
    case "ClassDeclaration":
    case "ClassExpression":
      return xn(e, t, r);
    case "ClassMethod":
    case "ClassPrivateMethod":
    case "MethodDefinition":
      return hn(e, t, r);
    case "ClassProperty":
    case "PropertyDefinition":
    case "ClassPrivateProperty":
    case "ClassAccessorProperty":
    case "AccessorProperty":
      return gn(e, t, r);
    case "TemplateElement":
      return ve(s.value.raw);
    case "TemplateLiteral":
      return Gr(e, r, t);
    case "TaggedTemplateExpression":
      return Hu(e, r);
    case "PrivateIdentifier":
      return ["#", s.name];
    case "PrivateName":
      return ["#", r("id")];
    case "TopicReference":
      return "%";
    case "ArgumentPlaceholder":
      return "?";
    case "ModuleExpression":
      return ["module ", r("body")];
    case "InterpreterDirective":
    default:
      throw new Ne(s, "ESTree");
  }
}
function bn(e, t, r) {
  let { parent: n, node: s, key: u } = e, i = [r("expression")];
  switch (s.type) {
    case "AsConstExpression":
      i.push(" as const");
      break;
    case "AsExpression":
    case "TSAsExpression":
      i.push(" as ", r("typeAnnotation"));
      break;
    case "SatisfiesExpression":
    case "TSSatisfiesExpression":
      i.push(" satisfies ", r("typeAnnotation"));
      break;
  }
  return u === "callee" && L(n) || u === "object" && W(n) ? l([f([E, ...i]), E]) : i;
}
function Sa(e, t, r) {
  let { node: n } = e, s = [K(e), "component"];
  n.id && s.push(" ", r("id")), s.push(r("typeParameters"));
  let u = zl(e, r, t);
  return n.rendersType ? s.push(l([u, " ", r("rendersType")])) : s.push(l([u])), n.body && s.push(" ", r("body")), t.semi && n.type === "DeclareComponent" && s.push(";"), s;
}
function zl(e, t, r) {
  let { node: n } = e, s = n.params;
  if (n.rest && (s = [...s, n.rest]), s.length === 0) return ["(", J(e, r, { filter: (i) => be(r.originalText, k(i)) === ")" }), ")"];
  let u = [];
  return em(e, (i, a) => {
    let o = a === s.length - 1;
    o && n.rest && u.push("..."), u.push(t()), !o && (u.push(","), ce(s[a], r) ? u.push(F, F) : u.push(x));
  }), ["(", f([E, ...u]), B(oe(r, "all") && !Zl(n, s) ? "," : ""), E, ")"];
}
function Zl(e, t) {
  var r;
  return e.rest || ((r = M(false, t, -1)) == null ? void 0 : r.type) === "RestElement";
}
function em(e, t) {
  let { node: r } = e, n = 0, s = (u) => t(u, n++);
  e.each(s, "params"), r.rest && e.call(s, "rest");
}
function Ba(e, t, r) {
  let { node: n } = e;
  return n.shorthand ? r("local") : [r("name"), " as ", r("local")];
}
function ba(e, t, r) {
  let { node: n } = e, s = [];
  return n.name && s.push(r("name"), n.optional ? "?: " : ": "), s.push(r("typeAnnotation")), s;
}
function Pa(e, t, r) {
  return gt(e, r, t);
}
function Pn(e, t) {
  let { node: r } = e, n = t("id");
  r.computed && (n = ["[", n, "]"]);
  let s = "";
  return r.initializer && (s = t("initializer")), r.init && (s = t("init")), s ? [n, " = ", s] : n;
}
function ka(e, t, r) {
  let { node: n } = e, s;
  if (n.type === "EnumSymbolBody" || n.explicitType) switch (n.type) {
    case "EnumBooleanBody":
      s = "boolean";
      break;
    case "EnumNumberBody":
      s = "number";
      break;
    case "EnumBigIntBody":
      s = "bigint";
      break;
    case "EnumStringBody":
      s = "string";
      break;
    case "EnumSymbolBody":
      s = "symbol";
      break;
  }
  return [s ? `of ${s} ` : "", Pa(e, t, r)];
}
function kn(e, t, r) {
  let { node: n } = e;
  return [K(e), n.const ? "const " : "", "enum ", t("id"), " ", n.type === "TSEnumDeclaration" ? Pa(e, t, r) : t("body")];
}
function La(e, t, r) {
  let { node: n } = e, s = ["hook"];
  n.id && s.push(" ", r("id"));
  let u = Ue(e, r, t, false, true), i = Qt(e, r), a = ot(n, i);
  return s.push(l([a ? l(u) : u, i]), n.body ? " " : "", r("body")), s;
}
function wa(e, t, r) {
  let { node: n } = e, s = [K(e), "hook"];
  return n.id && s.push(" ", r("id")), t.semi && s.push(";"), s;
}
function Ia(e) {
  var r;
  let { node: t } = e;
  return t.type === "HookTypeAnnotation" && ((r = e.getParentNode(2)) == null ? void 0 : r.type) === "DeclareHook";
}
function Oa(e, t, r) {
  let { node: n } = e, s = [];
  s.push(Ia(e) ? "" : "hook ");
  let u = Ue(e, r, t, false, true), i = [];
  return i.push(Ia(e) ? ": " : " => ", r("returnType")), ot(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function In(e, t, r) {
  let { node: n } = e, s = [K(e), "interface"], u = [], i = [];
  n.type !== "InterfaceTypeAnnotation" && u.push(" ", r("id"), r("typeParameters"));
  let a = n.typeParameters && !T(n.typeParameters, h.Trailing | h.Line);
  return O(n.extends) && i.push(a ? B(" ", x, { groupId: Ar(n.typeParameters) }) : x, "extends ", (n.extends.length === 1 ? Eu : f)(b([",", x], e.map(r, "extends")))), T(n.id, h.Trailing) || O(n.extends) ? a ? s.push(l([...u, f(i)])) : s.push(l(f([...u, ...i]))) : s.push(...u, ...i), s.push(" ", r("body")), l(s);
}
function _a(e, t, r) {
  let { node: n } = e;
  if (Pr(n)) return n.type.slice(0, -14).toLowerCase();
  let s = t.semi ? ";" : "";
  switch (n.type) {
    case "ComponentDeclaration":
    case "DeclareComponent":
    case "ComponentTypeAnnotation":
      return Sa(e, t, r);
    case "ComponentParameter":
      return Ba(e, t, r);
    case "ComponentTypeParameter":
      return ba(e, t, r);
    case "HookDeclaration":
      return La(e, t, r);
    case "DeclareHook":
      return wa(e, t, r);
    case "HookTypeAnnotation":
      return Oa(e, t, r);
    case "DeclareClass":
      return xn(e, t, r);
    case "DeclareFunction":
      return [K(e), "function ", r("id"), r("predicate"), s];
    case "DeclareModule":
      return ["declare module ", r("id"), " ", r("body")];
    case "DeclareModuleExports":
      return ["declare module.exports", H(e, r), s];
    case "DeclareNamespace":
      return ["declare namespace ", r("id"), " ", r("body")];
    case "DeclareVariable":
      return [K(e), n.kind ?? "var", " ", r("id"), s];
    case "DeclareExportDeclaration":
    case "DeclareExportAllDeclaration":
      return Bn(e, t, r);
    case "DeclareOpaqueType":
    case "OpaqueType":
      return Wi(e, t, r);
    case "DeclareTypeAlias":
    case "TypeAlias":
      return Zr(e, t, r);
    case "IntersectionTypeAnnotation":
      return en(e, t, r);
    case "UnionTypeAnnotation":
      return tn(e, t, r);
    case "ConditionalTypeAnnotation":
      return zt(e, t, r);
    case "InferTypeAnnotation":
      return sn(e, t, r);
    case "FunctionTypeAnnotation":
      return rn(e, t, r);
    case "TupleTypeAnnotation":
      return Kt(e, t, r);
    case "TupleTypeLabeledElement":
      return an(e, t, r);
    case "TupleTypeSpreadElement":
      return un(e, t, r);
    case "GenericTypeAnnotation":
      return [r("id"), Ot(e, t, r, "typeParameters")];
    case "IndexedAccessType":
    case "OptionalIndexedAccessType":
      return nn(e, t, r);
    case "TypeAnnotation":
      return on(e, t, r);
    case "TypeParameter":
      return dn(e, t, r);
    case "TypeofTypeAnnotation":
      return cn(e, r);
    case "ExistsTypeAnnotation":
      return "*";
    case "ArrayTypeAnnotation":
      return pn(r);
    case "DeclareEnum":
    case "EnumDeclaration":
      return kn(e, r, t);
    case "EnumBooleanBody":
    case "EnumNumberBody":
    case "EnumBigIntBody":
    case "EnumStringBody":
    case "EnumSymbolBody":
      return ka(e, r, t);
    case "EnumBooleanMember":
    case "EnumNumberMember":
    case "EnumBigIntMember":
    case "EnumStringMember":
    case "EnumDefaultedMember":
      return Pn(e, r);
    case "FunctionTypeParam": {
      let u = n.name ? r("name") : e.parent.this === n ? "this" : "";
      return [u, $(e), u ? ": " : "", r("typeAnnotation")];
    }
    case "DeclareInterface":
    case "InterfaceDeclaration":
    case "InterfaceTypeAnnotation":
      return In(e, t, r);
    case "ClassImplements":
    case "InterfaceExtends":
      return [r("id"), r("typeParameters")];
    case "NullableTypeAnnotation":
      return ["?", r("typeAnnotation")];
    case "Variance": {
      let { kind: u } = n;
      return Mt.ok(u === "plus" || u === "minus"), u === "plus" ? "+" : "-";
    }
    case "KeyofTypeAnnotation":
      return ["keyof ", r("argument")];
    case "ObjectTypeCallProperty":
      return [n.static ? "static " : "", r("value")];
    case "ObjectTypeMappedTypeProperty":
      return ea(e, t, r);
    case "ObjectTypeIndexer":
      return [n.static ? "static " : "", n.variance ? r("variance") : "", "[", r("id"), n.id ? ": " : "", r("key"), "]: ", r("value")];
    case "ObjectTypeProperty": {
      let u = "";
      return n.proto ? u = "proto " : n.static && (u = "static "), [u, n.kind !== "init" ? n.kind + " " : "", n.variance ? r("variance") : "", Ft(e, t, r), $(e), kt(n) ? "" : ": ", r("value")];
    }
    case "ObjectTypeAnnotation":
      return gt(e, t, r);
    case "ObjectTypeInternalSlot":
      return [n.static ? "static " : "", "[[", r("id"), "]]", $(e), n.method ? "" : ": ", r("value")];
    case "ObjectTypeSpreadProperty":
      return yn(e, r);
    case "QualifiedTypeofIdentifier":
    case "QualifiedTypeIdentifier":
      return [r("qualification"), ".", r("id")];
    case "NullLiteralTypeAnnotation":
      return "null";
    case "BooleanLiteralTypeAnnotation":
      return String(n.value);
    case "StringLiteralTypeAnnotation":
      return ve(nt(fe(n), t));
    case "NumberLiteralTypeAnnotation":
      return Et(n.raw ?? n.extra.raw);
    case "BigIntLiteralTypeAnnotation":
      return Sn(n.raw ?? n.extra.raw);
    case "TypeCastExpression":
      return ["(", r("expression"), H(e, r), ")"];
    case "TypePredicate":
      return ln(e, r);
    case "TypeOperator":
      return [n.operator, " ", r("typeAnnotation")];
    case "TypeParameterDeclaration":
    case "TypeParameterInstantiation":
      return Ot(e, t, r, "params");
    case "InferredPredicate":
    case "DeclaredPredicate":
      return [e.key === "predicate" && e.parent.type !== "DeclareFunction" && !e.parent.returnType ? ": " : " ", "%checks", ...n.type === "DeclaredPredicate" ? ["(", r("value"), ")"] : []];
    case "AsExpression":
    case "AsConstExpression":
    case "SatisfiesExpression":
      return bn(e, t, r);
  }
}
function va(e, t, r) {
  var i;
  let { node: n } = e;
  if (!n.type.startsWith("TS")) return;
  if (kr(n)) return n.type.slice(2, -7).toLowerCase();
  let s = t.semi ? ";" : "", u = [];
  switch (n.type) {
    case "TSThisType":
      return "this";
    case "TSTypeAssertion": {
      let a = !(U(n.expression) || se(n.expression)), o = l(["<", f([E, r("typeAnnotation")]), E, ">"]), p = [B("("), f([E, r("expression")]), E, B(")")];
      return a ? et([[o, r("expression")], [o, l(p, { shouldBreak: true })], [o, r("expression")]]) : l([o, r("expression")]);
    }
    case "TSDeclareFunction":
      return En(e, r, t);
    case "TSExportAssignment":
      return ["export = ", r("expression"), s];
    case "TSModuleBlock":
      return An(e, t, r);
    case "TSInterfaceBody":
    case "TSTypeLiteral":
      return gt(e, t, r);
    case "TSTypeAliasDeclaration":
      return Zr(e, t, r);
    case "TSQualifiedName":
      return [r("left"), ".", r("right")];
    case "TSAbstractMethodDefinition":
    case "TSDeclareMethod":
      return hn(e, t, r);
    case "TSAbstractAccessorProperty":
    case "TSAbstractPropertyDefinition":
      return gn(e, t, r);
    case "TSInterfaceHeritage":
    case "TSClassImplements":
    case "TSExpressionWithTypeArguments":
    case "TSInstantiationExpression":
      return [r("expression"), r(n.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSTemplateLiteralType":
      return Gr(e, r, t);
    case "TSNamedTupleMember":
      return an(e, t, r);
    case "TSRestType":
      return un(e, t, r);
    case "TSOptionalType":
      return [r("typeAnnotation"), "?"];
    case "TSInterfaceDeclaration":
      return In(e, t, r);
    case "TSTypeParameterDeclaration":
    case "TSTypeParameterInstantiation":
      return Ot(e, t, r, "params");
    case "TSTypeParameter":
      return dn(e, t, r);
    case "TSAsExpression":
    case "TSSatisfiesExpression":
      return bn(e, t, r);
    case "TSArrayType":
      return pn(r);
    case "TSPropertySignature":
      return [n.readonly ? "readonly " : "", Ft(e, t, r), $(e), H(e, r)];
    case "TSParameterProperty":
      return [$t(n), n.static ? "static " : "", n.override ? "override " : "", n.readonly ? "readonly " : "", r("parameter")];
    case "TSTypeQuery":
      return cn(e, r);
    case "TSIndexSignature": {
      let a = n.parameters.length > 1 ? B(oe(t) ? "," : "") : "", o = l([f([E, b([", ", E], e.map(r, "parameters"))]), a, E]), p = e.parent.type === "ClassBody" && e.key === "body";
      return [p && n.static ? "static " : "", n.readonly ? "readonly " : "", "[", n.parameters ? o : "", "]", H(e, r), p ? s : ""];
    }
    case "TSTypePredicate":
      return ln(e, r);
    case "TSNonNullExpression":
      return [r("expression"), "!"];
    case "TSImportType":
      return ["import(", r("argument"), ")", n.qualifier ? [".", r("qualifier")] : "", Ot(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSLiteralType":
      return r("literal");
    case "TSIndexedAccessType":
      return nn(e, t, r);
    case "TSTypeOperator":
      return [n.operator, " ", r("typeAnnotation")];
    case "TSMappedType":
      return ta(e, t, r);
    case "TSMethodSignature": {
      let a = n.kind && n.kind !== "method" ? `${n.kind} ` : "";
      u.push($t(n), a, n.computed ? "[" : "", r("key"), n.computed ? "]" : "", $(e));
      let o = Ue(e, r, t, false, true), p = n.returnType ? "returnType" : "typeAnnotation", y = n[p], D = y ? H(e, r, p) : "", m = ot(n, D);
      return u.push(m ? l(o) : o), y && u.push(l(D)), l(u);
    }
    case "TSNamespaceExportDeclaration":
      return ["export as namespace ", r("id"), t.semi ? ";" : ""];
    case "TSEnumDeclaration":
      return kn(e, r, t);
    case "TSEnumMember":
      return Pn(e, r);
    case "TSImportEqualsDeclaration":
      return [n.isExport ? "export " : "", "import ", ws(n, false), r("id"), " = ", r("moduleReference"), t.semi ? ";" : ""];
    case "TSExternalModuleReference":
      return ["require(", r("expression"), ")"];
    case "TSModuleDeclaration": {
      let { parent: a } = e, o = a.type === "TSModuleDeclaration", p = ((i = n.body) == null ? void 0 : i.type) === "TSModuleDeclaration";
      return o ? u.push(".") : (u.push(K(e)), n.kind !== "global" && u.push(n.kind, " ")), u.push(r("id")), p ? u.push(r("body")) : n.body ? u.push(" ", l(r("body"))) : u.push(s), u;
    }
    case "TSConditionalType":
      return zt(e, t, r);
    case "TSInferType":
      return sn(e, t, r);
    case "TSIntersectionType":
      return en(e, t, r);
    case "TSUnionType":
      return tn(e, t, r);
    case "TSFunctionType":
    case "TSCallSignatureDeclaration":
    case "TSConstructorType":
    case "TSConstructSignatureDeclaration":
      return rn(e, t, r);
    case "TSTupleType":
      return Kt(e, t, r);
    case "TSTypeReference":
      return [r("typeName"), Ot(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")];
    case "TSTypeAnnotation":
      return on(e, t, r);
    case "TSEmptyBodyFunctionExpression":
      return Fn(e, t, r);
    case "TSJSDocAllType":
      return "*";
    case "TSJSDocUnknownType":
      return "?";
    case "TSJSDocNullableType":
      return hs(e, r, "?");
    case "TSJSDocNonNullableType":
      return hs(e, r, "!");
    case "TSParenthesizedType":
    default:
      throw new Ne(n, "TypeScript");
  }
}
function tm(e, t, r, n) {
  if (Vr(e)) return Di(e, t);
  for (let s of [gi, Ti, _a, va, ga]) {
    let u = s(e, t, r, n);
    if (u !== void 0) return u;
  }
}
var rm = R(["ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "ClassPrivateProperty", "MethodDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod"]);
function nm(e, t, r, n) {
  var D;
  e.isRoot && ((D = t.__onHtmlBindingRoot) == null || D.call(t, e.node, t));
  let s = tm(e, t, r, n);
  if (!s) return "";
  let { node: u } = e;
  if (rm(u)) return s;
  let i = O(u.decorators), a = Bi(e, t, r), o = u.type === "ClassExpression";
  if (i && !o) return lr(s, (m) => l([a, m]));
  let p = ke(e, t), y = pa(e, t);
  return !a && !p && !y ? s : lr(s, (m) => [y ? ";" : "", p ? "(" : "", p && o && i ? [f([x, a, m]), x] : [a, m], p ? ")" : ""]);
}
var ja = nm;
var sm = { avoidAstMutation: true };
var Ma = [{ linguistLanguageId: 174, name: "JSON.stringify", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"], parsers: ["json-stringify"], vscodeLanguageIds: ["json"] }, { linguistLanguageId: 174, name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".all-contributorsrc", ".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "flake.lock", "mcmod.info", ".babelrc", ".jscsrc", ".jshintrc", ".jslintrc", ".swcrc"], parsers: ["json"], vscodeLanguageIds: ["json"] }, { linguistLanguageId: 423, name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".code-workspace", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [], parsers: ["jsonc"], vscodeLanguageIds: ["jsonc"] }, { linguistLanguageId: 175, name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", parsers: ["json5"], vscodeLanguageIds: ["json5"] }];
var js = {};
xr(js, { getVisitorKeys: () => Ja, massageAstNode: () => Wa, print: () => am });
var um = { JsonRoot: ["node"], ArrayExpression: ["elements"], ObjectExpression: ["properties"], ObjectProperty: ["key", "value"], UnaryExpression: ["argument"], NullLiteral: [], BooleanLiteral: [], StringLiteral: [], NumericLiteral: [], Identifier: [], TemplateLiteral: ["quasis"], TemplateElement: [] }, Ra = um;
var im = Br(Ra), Ja = im;
function am(e, t, r) {
  let { node: n } = e;
  switch (n.type) {
    case "JsonRoot":
      return [r("node"), F];
    case "ArrayExpression": {
      if (n.elements.length === 0) return "[]";
      let s = e.map(() => e.node === null ? "null" : r(), "elements");
      return ["[", f([F, b([",", F], s)]), F, "]"];
    }
    case "ObjectExpression":
      return n.properties.length === 0 ? "{}" : ["{", f([F, b([",", F], e.map(r, "properties"))]), F, "}"];
    case "ObjectProperty":
      return [r("key"), ": ", r("value")];
    case "UnaryExpression":
      return [n.operator === "+" ? "" : n.operator, r("argument")];
    case "NullLiteral":
      return "null";
    case "BooleanLiteral":
      return n.value ? "true" : "false";
    case "StringLiteral":
      return JSON.stringify(n.value);
    case "NumericLiteral":
      return qa(e) ? JSON.stringify(String(n.value)) : JSON.stringify(n.value);
    case "Identifier":
      return qa(e) ? JSON.stringify(n.name) : n.name;
    case "TemplateLiteral":
      return r(["quasis", 0]);
    case "TemplateElement":
      return JSON.stringify(n.value.cooked);
    default:
      throw new Ne(n, "JSON");
  }
}
function qa(e) {
  return e.key === "key" && e.parent.type === "ObjectProperty";
}
var om = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
function Wa(e, t) {
  let { type: r } = e;
  if (r === "ObjectProperty") {
    let { key: n } = e;
    n.type === "Identifier" ? t.key = { type: "StringLiteral", value: n.name } : n.type === "NumericLiteral" && (t.key = { type: "StringLiteral", value: String(n.value) });
    return;
  }
  if (r === "UnaryExpression" && e.operator === "+") return t.argument;
  if (r === "ArrayExpression") {
    for (let [n, s] of e.elements.entries()) s === null && t.elements.splice(n, 0, { type: "NullLiteral" });
    return;
  }
  if (r === "TemplateLiteral") return { type: "StringLiteral", value: e.quasis[0].value.cooked };
}
Wa.ignoredProperties = om;
var Zt = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, objectWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap object literals.", choices: [{ value: "preserve", description: "Keep as multi-line, if there is a newline between the opening brace and first property." }, { value: "collapse", description: "Fit to a single line when possible." }] }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var St = "JavaScript", pm = { arrowParens: { category: St, type: "choice", default: "always", description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: Zt.bracketSameLine, objectWrap: Zt.objectWrap, bracketSpacing: Zt.bracketSpacing, jsxBracketSameLine: { category: St, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { category: St, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, experimentalOperatorPosition: { category: St, type: "choice", default: "end", description: "Where to print operators when binary expressions wrap lines.", choices: [{ value: "start", description: "Print operators at the start of new lines." }, { value: "end", description: "Print operators at the end of previous lines." }] }, experimentalTernaries: { category: St, type: "boolean", default: false, description: "Use curious ternaries, with the question mark after the condition.", oppositeDescription: "Default behavior of ternaries; keep question marks on the same line as the consequent." }, singleQuote: Zt.singleQuote, jsxSingleQuote: { category: St, type: "boolean", default: false, description: "Use single quotes in JSX." }, quoteProps: { category: St, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { category: St, type: "choice", default: "all", description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "all", description: "Trailing commas wherever possible (including function arguments)." }, { value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }] }, singleAttributePerLine: Zt.singleAttributePerLine }, Na = pm;
var cm = { estree: vs, "estree-json": js }, lm = [...Xs, ...Ma];
var lx = Ms;
export {
  lx as default,
  lm as languages,
  Na as options,
  cm as printers
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXN0cmVlLUI2a1hSUks0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJldHRpZXIvcGx1Z2lucy9lc3RyZWUubWpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBIYT1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIE5zPWU9Pnt0aHJvdyBUeXBlRXJyb3IoZSl9O3ZhciB4cj0oZSx0KT0+e2Zvcih2YXIgciBpbiB0KUhhKGUscix7Z2V0OnRbcl0sZW51bWVyYWJsZTohMH0pfTt2YXIgR3M9KGUsdCxyKT0+dC5oYXMoZSl8fE5zKFwiQ2Fubm90IFwiK3IpO3ZhciBjdD0oZSx0LHIpPT4oR3MoZSx0LFwicmVhZCBmcm9tIHByaXZhdGUgZmllbGRcIikscj9yLmNhbGwoZSk6dC5nZXQoZSkpLFVzPShlLHQscik9PnQuaGFzKGUpP05zKFwiQ2Fubm90IGFkZCB0aGUgc2FtZSBwcml2YXRlIG1lbWJlciBtb3JlIHRoYW4gb25jZVwiKTp0IGluc3RhbmNlb2YgV2Vha1NldD90LmFkZChlKTp0LnNldChlLHIpLFlzPShlLHQscixuKT0+KEdzKGUsdCxcIndyaXRlIHRvIHByaXZhdGUgZmllbGRcIiksbj9uLmNhbGwoZSxyKTp0LnNldChlLHIpLHIpO3ZhciBNcz17fTt4cihNcyx7bGFuZ3VhZ2VzOigpPT5sbSxvcHRpb25zOigpPT5OYSxwcmludGVyczooKT0+Y219KTt2YXIgWHM9W3tsaW5ndWlzdExhbmd1YWdlSWQ6MTgzLG5hbWU6XCJKYXZhU2NyaXB0XCIsdHlwZTpcInByb2dyYW1taW5nXCIsdG1TY29wZTpcInNvdXJjZS5qc1wiLGFjZU1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1pbWVUeXBlOlwidGV4dC9qYXZhc2NyaXB0XCIsY29sb3I6XCIjZjFlMDVhXCIsYWxpYXNlczpbXCJqc1wiLFwibm9kZVwiXSxleHRlbnNpb25zOltcIi5qc1wiLFwiLl9qc1wiLFwiLmJvbmVzXCIsXCIuY2pzXCIsXCIuZXNcIixcIi5lczZcIixcIi5mcmFnXCIsXCIuZ3NcIixcIi5qYWtlXCIsXCIuamF2YXNjcmlwdFwiLFwiLmpzYlwiLFwiLmpzY2FkXCIsXCIuanNmbFwiLFwiLmpzbGliXCIsXCIuanNtXCIsXCIuanNwcmVcIixcIi5qc3NcIixcIi5tanNcIixcIi5uanNcIixcIi5wYWNcIixcIi5zanNcIixcIi5zc2pzXCIsXCIueHNqc1wiLFwiLnhzanNsaWJcIixcIi53eHNcIl0sZmlsZW5hbWVzOltcIkpha2VmaWxlXCJdLGludGVycHJldGVyczpbXCJjaGFrcmFcIixcImQ4XCIsXCJnanNcIixcImpzXCIsXCJub2RlXCIsXCJub2RlanNcIixcInFqc1wiLFwicmhpbm9cIixcInY4XCIsXCJ2OC1zaGVsbFwiLFwienhcIl0scGFyc2VyczpbXCJiYWJlbFwiLFwiYWNvcm5cIixcImVzcHJlZVwiLFwibWVyaXlhaFwiLFwiYmFiZWwtZmxvd1wiLFwiYmFiZWwtdHNcIixcImZsb3dcIixcInR5cGVzY3JpcHRcIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1wiamF2YXNjcmlwdFwiLFwibW9uZ29cIl19LHtsaW5ndWlzdExhbmd1YWdlSWQ6MTgzLG5hbWU6XCJGbG93XCIsdHlwZTpcInByb2dyYW1taW5nXCIsdG1TY29wZTpcInNvdXJjZS5qc1wiLGFjZU1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1pbWVUeXBlOlwidGV4dC9qYXZhc2NyaXB0XCIsY29sb3I6XCIjZjFlMDVhXCIsYWxpYXNlczpbXSxleHRlbnNpb25zOltcIi5qcy5mbG93XCJdLGZpbGVuYW1lczpbXSxpbnRlcnByZXRlcnM6W1wiY2hha3JhXCIsXCJkOFwiLFwiZ2pzXCIsXCJqc1wiLFwibm9kZVwiLFwibm9kZWpzXCIsXCJxanNcIixcInJoaW5vXCIsXCJ2OFwiLFwidjgtc2hlbGxcIl0scGFyc2VyczpbXCJmbG93XCIsXCJiYWJlbC1mbG93XCJdLHZzY29kZUxhbmd1YWdlSWRzOltcImphdmFzY3JpcHRcIl19LHtsaW5ndWlzdExhbmd1YWdlSWQ6MTgzLG5hbWU6XCJKU1hcIix0eXBlOlwicHJvZ3JhbW1pbmdcIix0bVNjb3BlOlwic291cmNlLmpzLmpzeFwiLGFjZU1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1vZGU6XCJqc3hcIixjb2RlbWlycm9yTWltZVR5cGU6XCJ0ZXh0L2pzeFwiLGNvbG9yOnZvaWQgMCxhbGlhc2VzOnZvaWQgMCxleHRlbnNpb25zOltcIi5qc3hcIl0sZmlsZW5hbWVzOnZvaWQgMCxpbnRlcnByZXRlcnM6dm9pZCAwLHBhcnNlcnM6W1wiYmFiZWxcIixcImJhYmVsLWZsb3dcIixcImJhYmVsLXRzXCIsXCJmbG93XCIsXCJ0eXBlc2NyaXB0XCIsXCJlc3ByZWVcIixcIm1lcml5YWhcIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1wiamF2YXNjcmlwdHJlYWN0XCJdLGdyb3VwOlwiSmF2YVNjcmlwdFwifSx7bGluZ3Vpc3RMYW5ndWFnZUlkOjM3OCxuYW1lOlwiVHlwZVNjcmlwdFwiLHR5cGU6XCJwcm9ncmFtbWluZ1wiLGNvbG9yOlwiIzMxNzhjNlwiLGFsaWFzZXM6W1widHNcIl0saW50ZXJwcmV0ZXJzOltcImRlbm9cIixcInRzLW5vZGVcIl0sZXh0ZW5zaW9uczpbXCIudHNcIixcIi5jdHNcIixcIi5tdHNcIl0sdG1TY29wZTpcInNvdXJjZS50c1wiLGFjZU1vZGU6XCJ0eXBlc2NyaXB0XCIsY29kZW1pcnJvck1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1pbWVUeXBlOlwiYXBwbGljYXRpb24vdHlwZXNjcmlwdFwiLHBhcnNlcnM6W1widHlwZXNjcmlwdFwiLFwiYmFiZWwtdHNcIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1widHlwZXNjcmlwdFwiXX0se2xpbmd1aXN0TGFuZ3VhZ2VJZDo5NDkwMTkyNCxuYW1lOlwiVFNYXCIsdHlwZTpcInByb2dyYW1taW5nXCIsY29sb3I6XCIjMzE3OGM2XCIsZ3JvdXA6XCJUeXBlU2NyaXB0XCIsZXh0ZW5zaW9uczpbXCIudHN4XCJdLHRtU2NvcGU6XCJzb3VyY2UudHN4XCIsYWNlTW9kZTpcImphdmFzY3JpcHRcIixjb2RlbWlycm9yTW9kZTpcImpzeFwiLGNvZGVtaXJyb3JNaW1lVHlwZTpcInRleHQvanN4XCIscGFyc2VyczpbXCJ0eXBlc2NyaXB0XCIsXCJiYWJlbC10c1wiXSx2c2NvZGVMYW5ndWFnZUlkczpbXCJ0eXBlc2NyaXB0cmVhY3RcIl19XTt2YXIgdnM9e307eHIodnMse2NhbkF0dGFjaENvbW1lbnQ6KCk9PnhwLGVtYmVkOigpPT5yaSxleHBlcmltZW50YWxGZWF0dXJlczooKT0+c20sZ2V0Q29tbWVudENoaWxkTm9kZXM6KCk9PmhwLGdldFZpc2l0b3JLZXlzOigpPT5icixoYW5kbGVDb21tZW50czooKT0+em4saW5zZXJ0UHJhZ21hOigpPT55aSxpc0Jsb2NrQ29tbWVudDooKT0+ZWUsaXNHYXA6KCk9PmdwLG1hc3NhZ2VBc3ROb2RlOigpPT54dSxwcmludDooKT0+amEscHJpbnRDb21tZW50OigpPT5PdSx3aWxsUHJpbnRPd25Db21tZW50czooKT0+Wm59KTt2YXIgVmE9KGUsdCxyLG4pPT57aWYoIShlJiZ0PT1udWxsKSlyZXR1cm4gdC5yZXBsYWNlQWxsP3QucmVwbGFjZUFsbChyLG4pOnIuZ2xvYmFsP3QucmVwbGFjZShyLG4pOnQuc3BsaXQocikuam9pbihuKX0sWT1WYTt2YXIgJGE9KGUsdCxyKT0+e2lmKCEoZSYmdD09bnVsbCkpcmV0dXJuIEFycmF5LmlzQXJyYXkodCl8fHR5cGVvZiB0PT1cInN0cmluZ1wiP3RbcjwwP3QubGVuZ3RoK3I6cl06dC5hdChyKX0sTT0kYTtmdW5jdGlvbiBLYShlKXtyZXR1cm4gZSE9PW51bGwmJnR5cGVvZiBlPT1cIm9iamVjdFwifXZhciBIcz1LYTtmdW5jdGlvbipRYShlLHQpe2xldHtnZXRWaXNpdG9yS2V5czpyLGZpbHRlcjpuPSgpPT4hMH09dCxzPXU9PkhzKHUpJiZuKHUpO2ZvcihsZXQgdSBvZiByKGUpKXtsZXQgaT1lW3VdO2lmKEFycmF5LmlzQXJyYXkoaSkpZm9yKGxldCBhIG9mIGkpcyhhKSYmKHlpZWxkIGEpO2Vsc2UgcyhpKSYmKHlpZWxkIGkpfX1mdW5jdGlvbip6YShlLHQpe2xldCByPVtlXTtmb3IobGV0IG49MDtuPHIubGVuZ3RoO24rKyl7bGV0IHM9cltuXTtmb3IobGV0IHUgb2YgUWEocyx0KSl5aWVsZCB1LHIucHVzaCh1KX19ZnVuY3Rpb24gVnMoZSx7Z2V0VmlzaXRvcktleXM6dCxwcmVkaWNhdGU6cn0pe2ZvcihsZXQgbiBvZiB6YShlLHtnZXRWaXNpdG9yS2V5czp0fSkpaWYocihuKSlyZXR1cm4hMDtyZXR1cm4hMX12YXIgJHM9KCk9Pi9bIyowLTldXFx1RkUwRj9cXHUyMEUzfFtcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRUQtXFx1MjNFRlxcdTIzRjFcXHUyM0YyXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCXFx1MjVGQ1xcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTJcXHUyNjk0LVxcdTI2OTdcXHUyNjk5XFx1MjY5QlxcdTI2OUNcXHUyNkEwXFx1MjZBN1xcdTI2QUFcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzhcXHUyNkNGXFx1MjZEMVxcdTI2RTlcXHUyNkYwLVxcdTI2RjVcXHUyNkY3XFx1MjZGOFxcdTI2RkFcXHUyNzAyXFx1MjcwOFxcdTI3MDlcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc1N1xcdTI3NjNcXHUyN0ExXFx1MjkzNFxcdTI5MzVcXHUyQjA1LVxcdTJCMDdcXHUyQjFCXFx1MkIxQ1xcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XVxcdUZFMEY/fFtcXHUyNjFEXFx1MjcwQ1xcdTI3MERdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpP3xbXFx1MjcwQVxcdTI3MEJdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI2OTNcXHUyNkExXFx1MjZBQlxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkZEXFx1MjcwNVxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkI1MF18XFx1MjZEM1xcdUZFMEY/KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E1KT98XFx1MjZGOSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1Mjc2NFxcdUZFMEY/KD86XFx1MjAwRCg/OlxcdUQ4M0RcXHVERDI1fFxcdUQ4M0VcXHVERTc5KSk/fFxcdUQ4M0MoPzpbXFx1REMwNFxcdURENzBcXHVERDcxXFx1REQ3RVxcdUREN0ZcXHVERTAyXFx1REUzN1xcdURGMjFcXHVERjI0LVxcdURGMkNcXHVERjM2XFx1REY3RFxcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RVxcdURGOUZcXHVERkNEXFx1REZDRVxcdURGRDQtXFx1REZERlxcdURGRjVcXHVERkY3XVxcdUZFMEY/fFtcXHVERjg1XFx1REZDMlxcdURGQzddKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURGQzRcXHVERkNBXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERkNCXFx1REZDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjQzXFx1REY0NS1cXHVERjRBXFx1REY0Qy1cXHVERjdDXFx1REY3RS1cXHVERjg0XFx1REY4Ni1cXHVERjkzXFx1REZBMC1cXHVERkMxXFx1REZDNVxcdURGQzZcXHVERkM4XFx1REZDOVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjgtXFx1REZGRl18XFx1RERFNlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl18XFx1RERFN1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREU4XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjdcXHVEREZBLVxcdURERkZdfFxcdURERTlcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdfFxcdURERUFcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXXxcXHVEREVCXFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddfFxcdURERUNcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdfFxcdURERURcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV18XFx1RERFRVxcdUQ4M0NbXFx1RERFOC1cXHVEREVBXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XXxcXHVEREVGXFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XXxcXHVEREYwXFx1RDgzQ1tcXHVEREVBXFx1RERFQy1cXHVEREVFXFx1RERGMlxcdURERjNcXHVEREY1XFx1RERGN1xcdURERkNcXHVEREZFXFx1RERGRl18XFx1RERGMVxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXXxcXHVEREYyXFx1RDgzQ1tcXHVEREU2XFx1RERFOC1cXHVEREVEXFx1RERGMC1cXHVEREZGXXxcXHVEREYzXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdfFxcdURERjRcXHVEODNDXFx1RERGMnxcXHVEREY1XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdfFxcdURERjZcXHVEODNDXFx1RERFNnxcXHVEREY3XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ118XFx1RERGOFxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl18XFx1RERGOVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVEXFx1RERFRi1cXHVEREY0XFx1RERGN1xcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkZdfFxcdURERkFcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdfFxcdURERkJcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdfFxcdURERkNcXHVEODNDW1xcdURERUJcXHVEREY4XXxcXHVEREZEXFx1RDgzQ1xcdURERjB8XFx1RERGRVxcdUQ4M0NbXFx1RERFQVxcdURERjldfFxcdURERkZcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ118XFx1REY0NCg/OlxcdTIwMERcXHVEODNEXFx1REZFQik/fFxcdURGNEIoPzpcXHUyMDBEXFx1RDgzRFxcdURGRTkpP3xcXHVERkMzKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVERkYzXFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1MjZBN1xcdUZFMEY/fFxcdUQ4M0NcXHVERjA4KSk/fFxcdURGRjQoPzpcXHUyMDBEXFx1MjYyMFxcdUZFMEY/fFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjJcXHVEQjQwKD86XFx1REM2NVxcdURCNDBcXHVEQzZFXFx1REI0MFxcdURDNjd8XFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0YpPyl8XFx1RDgzRCg/OltcXHVEQzNGXFx1RENGRFxcdURENDlcXHVERDRBXFx1REQ2RlxcdURENzBcXHVERDczXFx1REQ3Ni1cXHVERDc5XFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREQTVcXHVEREE4XFx1RERCMVxcdUREQjJcXHVEREJDXFx1RERDMi1cXHVEREM0XFx1REREMS1cXHVEREQzXFx1REREQy1cXHVERERFXFx1RERFMVxcdURERTNcXHVEREU4XFx1RERFRlxcdURERjNcXHVEREZBXFx1REVDQlxcdURFQ0QtXFx1REVDRlxcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUYwXFx1REVGM11cXHVGRTBGP3xbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzJcXHVEQzc0LVxcdURDNzZcXHVEQzc4XFx1REM3Q1xcdURDODNcXHVEQzg1XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3QVxcdUREOTVcXHVERDk2XFx1REU0Q1xcdURFNEZcXHVERUMwXFx1REVDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REM2RVxcdURDNzBcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjRcXHVERUI1XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDc0XFx1REQ5MF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/fFtcXHVEQzAwLVxcdURDMDdcXHVEQzA5LVxcdURDMTRcXHVEQzE2LVxcdURDMjVcXHVEQzI3LVxcdURDM0FcXHVEQzNDLVxcdURDM0VcXHVEQzQwXFx1REM0NFxcdURDNDVcXHVEQzUxLVxcdURDNjVcXHVEQzZBXFx1REM3OS1cXHVEQzdCXFx1REM3RC1cXHVEQzgwXFx1REM4NFxcdURDODgtXFx1REM4RVxcdURDOTBcXHVEQzkyLVxcdURDQTlcXHVEQ0FCLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVEREE0XFx1RERGQi1cXHVERTJEXFx1REUyRi1cXHVERTM0XFx1REUzNy1cXHVERTQxXFx1REU0M1xcdURFNDRcXHVERTQ4LVxcdURFNEFcXHVERTgwLVxcdURFQTJcXHVERUE0LVxcdURFQjNcXHVERUI3LVxcdURFQkZcXHVERUMxLVxcdURFQzVcXHVERUQwLVxcdURFRDJcXHVERUQ1LVxcdURFRDdcXHVERURDLVxcdURFREZcXHVERUVCXFx1REVFQ1xcdURFRjQtXFx1REVGQ1xcdURGRTAtXFx1REZFQlxcdURGRjBdfFxcdURDMDgoPzpcXHUyMDBEXFx1MkIxQik/fFxcdURDMTUoPzpcXHUyMDBEXFx1RDgzRVxcdUREQkEpP3xcXHVEQzI2KD86XFx1MjAwRCg/OlxcdTJCMUJ8XFx1RDgzRFxcdUREMjUpKT98XFx1REMzQig/OlxcdTIwMERcXHUyNzQ0XFx1RkUwRj8pP3xcXHVEQzQxXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURERThcXHVGRTBGPyk/fFxcdURDNjgoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OHxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURDNjkoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/W1xcdURDNjhcXHVEQzY5XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pP3xcXHVEQzY5XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2Rig/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERDc1KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERTJFKD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E4KT98XFx1REUzNSg/OlxcdTIwMERcXHVEODNEXFx1RENBQik/fFxcdURFMzYoPzpcXHUyMDBEXFx1RDgzQ1xcdURGMkJcXHVGRTBGPyk/fFxcdURFNDIoPzpcXHUyMDBEW1xcdTIxOTRcXHUyMTk1XVxcdUZFMEY/KT98XFx1REVCNig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT8pfFxcdUQ4M0UoPzpbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDMwLVxcdUREMzRcXHVERDM2XFx1REQ3N1xcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDJcXHVEREQzXFx1RERENVxcdURFQzMtXFx1REVDNVxcdURFRjBcXHVERUYyLVxcdURFRjhdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdUREMjZcXHVERDM1XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0RcXHVERENGXFx1RERENFxcdURERDYtXFx1RERERF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RERERVxcdUREREZdKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDBEXFx1REQwRVxcdUREMTAtXFx1REQxN1xcdUREMjAtXFx1REQyNVxcdUREMjctXFx1REQyRlxcdUREM0FcXHVERDNGLVxcdURENDVcXHVERDQ3LVxcdURENzZcXHVERDc4LVxcdUREQjRcXHVEREI3XFx1RERCQVxcdUREQkMtXFx1RERDQ1xcdURERDBcXHVEREUwLVxcdURERkZcXHVERTcwLVxcdURFN0NcXHVERTgwLVxcdURFODlcXHVERThGLVxcdURFQzJcXHVERUM2XFx1REVDRS1cXHVERURDXFx1REVERi1cXHVERUU5XXxcXHVERDNDKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGP3xcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xcXHVERENFKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVEREQxKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEREQxXFx1MjAwRFxcdUQ4M0VcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT98XFx1REREMig/OlxcdTIwMERcXHVEODNFXFx1REREMik/KSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRV18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT8pKT98XFx1REVGMSg/OlxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKT98XFx1REZGQyg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pP3xcXHVERkZEKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSk/fFxcdURGRkUoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKT98XFx1REZGRig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSk/KSk/KS9nO2Z1bmN0aW9uIEtzKGUpe3JldHVybiBlPT09MTIyODh8fGU+PTY1MjgxJiZlPD02NTM3Nnx8ZT49NjU1MDQmJmU8PTY1NTEwfWZ1bmN0aW9uIFFzKGUpe3JldHVybiBlPj00MzUyJiZlPD00NDQ3fHxlPT09ODk4Nnx8ZT09PTg5ODd8fGU9PT05MDAxfHxlPT09OTAwMnx8ZT49OTE5MyYmZTw9OTE5Nnx8ZT09PTkyMDB8fGU9PT05MjAzfHxlPT09OTcyNXx8ZT09PTk3MjZ8fGU9PT05NzQ4fHxlPT09OTc0OXx8ZT49OTc3NiYmZTw9OTc4M3x8ZT49OTgwMCYmZTw9OTgxMXx8ZT09PTk4NTV8fGU+PTk4NjYmJmU8PTk4NzF8fGU9PT05ODc1fHxlPT09OTg4OXx8ZT09PTk4OTh8fGU9PT05ODk5fHxlPT09OTkxN3x8ZT09PTk5MTh8fGU9PT05OTI0fHxlPT09OTkyNXx8ZT09PTk5MzR8fGU9PT05OTQwfHxlPT09OTk2Mnx8ZT09PTk5NzB8fGU9PT05OTcxfHxlPT09OTk3M3x8ZT09PTk5Nzh8fGU9PT05OTgxfHxlPT09OTk4OXx8ZT09PTk5OTR8fGU9PT05OTk1fHxlPT09MTAwMjR8fGU9PT0xMDA2MHx8ZT09PTEwMDYyfHxlPj0xMDA2NyYmZTw9MTAwNjl8fGU9PT0xMDA3MXx8ZT49MTAxMzMmJmU8PTEwMTM1fHxlPT09MTAxNjB8fGU9PT0xMDE3NXx8ZT09PTExMDM1fHxlPT09MTEwMzZ8fGU9PT0xMTA4OHx8ZT09PTExMDkzfHxlPj0xMTkwNCYmZTw9MTE5Mjl8fGU+PTExOTMxJiZlPD0xMjAxOXx8ZT49MTIwMzImJmU8PTEyMjQ1fHxlPj0xMjI3MiYmZTw9MTIyODd8fGU+PTEyMjg5JiZlPD0xMjM1MHx8ZT49MTIzNTMmJmU8PTEyNDM4fHxlPj0xMjQ0MSYmZTw9MTI1NDN8fGU+PTEyNTQ5JiZlPD0xMjU5MXx8ZT49MTI1OTMmJmU8PTEyNjg2fHxlPj0xMjY4OCYmZTw9MTI3NzN8fGU+PTEyNzgzJiZlPD0xMjgzMHx8ZT49MTI4MzImJmU8PTEyODcxfHxlPj0xMjg4MCYmZTw9NDIxMjR8fGU+PTQyMTI4JiZlPD00MjE4Mnx8ZT49NDMzNjAmJmU8PTQzMzg4fHxlPj00NDAzMiYmZTw9NTUyMDN8fGU+PTYzNzQ0JiZlPD02NDI1NXx8ZT49NjUwNDAmJmU8PTY1MDQ5fHxlPj02NTA3MiYmZTw9NjUxMDZ8fGU+PTY1MTA4JiZlPD02NTEyNnx8ZT49NjUxMjgmJmU8PTY1MTMxfHxlPj05NDE3NiYmZTw9OTQxODB8fGU9PT05NDE5Mnx8ZT09PTk0MTkzfHxlPj05NDIwOCYmZTw9MTAwMzQzfHxlPj0xMDAzNTImJmU8PTEwMTU4OXx8ZT49MTAxNjMxJiZlPD0xMDE2NDB8fGU+PTExMDU3NiYmZTw9MTEwNTc5fHxlPj0xMTA1ODEmJmU8PTExMDU4N3x8ZT09PTExMDU4OXx8ZT09PTExMDU5MHx8ZT49MTEwNTkyJiZlPD0xMTA4ODJ8fGU9PT0xMTA4OTh8fGU+PTExMDkyOCYmZTw9MTEwOTMwfHxlPT09MTEwOTMzfHxlPj0xMTA5NDgmJmU8PTExMDk1MXx8ZT49MTEwOTYwJiZlPD0xMTEzNTV8fGU+PTExOTU1MiYmZTw9MTE5NjM4fHxlPj0xMTk2NDgmJmU8PTExOTY3MHx8ZT09PTEyNjk4MHx8ZT09PTEyNzE4M3x8ZT09PTEyNzM3NHx8ZT49MTI3Mzc3JiZlPD0xMjczODZ8fGU+PTEyNzQ4OCYmZTw9MTI3NDkwfHxlPj0xMjc1MDQmJmU8PTEyNzU0N3x8ZT49MTI3NTUyJiZlPD0xMjc1NjB8fGU9PT0xMjc1Njh8fGU9PT0xMjc1Njl8fGU+PTEyNzU4NCYmZTw9MTI3NTg5fHxlPj0xMjc3NDQmJmU8PTEyNzc3Nnx8ZT49MTI3Nzg5JiZlPD0xMjc3OTd8fGU+PTEyNzc5OSYmZTw9MTI3ODY4fHxlPj0xMjc4NzAmJmU8PTEyNzg5MXx8ZT49MTI3OTA0JiZlPD0xMjc5NDZ8fGU+PTEyNzk1MSYmZTw9MTI3OTU1fHxlPj0xMjc5NjgmJmU8PTEyNzk4NHx8ZT09PTEyNzk4OHx8ZT49MTI3OTkyJiZlPD0xMjgwNjJ8fGU9PT0xMjgwNjR8fGU+PTEyODA2NiYmZTw9MTI4MjUyfHxlPj0xMjgyNTUmJmU8PTEyODMxN3x8ZT49MTI4MzMxJiZlPD0xMjgzMzR8fGU+PTEyODMzNiYmZTw9MTI4MzU5fHxlPT09MTI4Mzc4fHxlPT09MTI4NDA1fHxlPT09MTI4NDA2fHxlPT09MTI4NDIwfHxlPj0xMjg1MDcmJmU8PTEyODU5MXx8ZT49MTI4NjQwJiZlPD0xMjg3MDl8fGU9PT0xMjg3MTZ8fGU+PTEyODcyMCYmZTw9MTI4NzIyfHxlPj0xMjg3MjUmJmU8PTEyODcyN3x8ZT49MTI4NzMyJiZlPD0xMjg3MzV8fGU9PT0xMjg3NDd8fGU9PT0xMjg3NDh8fGU+PTEyODc1NiYmZTw9MTI4NzY0fHxlPj0xMjg5OTImJmU8PTEyOTAwM3x8ZT09PTEyOTAwOHx8ZT49MTI5MjkyJiZlPD0xMjkzMzh8fGU+PTEyOTM0MCYmZTw9MTI5MzQ5fHxlPj0xMjkzNTEmJmU8PTEyOTUzNXx8ZT49MTI5NjQ4JiZlPD0xMjk2NjB8fGU+PTEyOTY2NCYmZTw9MTI5NjczfHxlPj0xMjk2NzkmJmU8PTEyOTczNHx8ZT49MTI5NzQyJiZlPD0xMjk3NTZ8fGU+PTEyOTc1OSYmZTw9MTI5NzY5fHxlPj0xMjk3NzYmJmU8PTEyOTc4NHx8ZT49MTMxMDcyJiZlPD0xOTY2MDV8fGU+PTE5NjYwOCYmZTw9MjYyMTQxfXZhciB6cz1lPT4hKEtzKGUpfHxRcyhlKSk7dmFyIFphPS9bXlxceDIwLVxceDdGXS91O2Z1bmN0aW9uIGVvKGUpe2lmKCFlKXJldHVybiAwO2lmKCFaYS50ZXN0KGUpKXJldHVybiBlLmxlbmd0aDtlPWUucmVwbGFjZSgkcygpLFwiICBcIik7bGV0IHQ9MDtmb3IobGV0IHIgb2YgZSl7bGV0IG49ci5jb2RlUG9pbnRBdCgwKTtuPD0zMXx8bj49MTI3JiZuPD0xNTl8fG4+PTc2OCYmbjw9ODc5fHwodCs9enMobik/MToyKX1yZXR1cm4gdH12YXIgcnQ9ZW87ZnVuY3Rpb24gaHIoZSl7cmV0dXJuKHQscixuKT0+e2xldCBzPSEhKG4hPW51bGwmJm4uYmFja3dhcmRzKTtpZihyPT09ITEpcmV0dXJuITE7bGV0e2xlbmd0aDp1fT10LGk9cjtmb3IoO2k+PTAmJmk8dTspe2xldCBhPXQuY2hhckF0KGkpO2lmKGUgaW5zdGFuY2VvZiBSZWdFeHApe2lmKCFlLnRlc3QoYSkpcmV0dXJuIGl9ZWxzZSBpZighZS5pbmNsdWRlcyhhKSlyZXR1cm4gaTtzP2ktLTppKyt9cmV0dXJuIGk9PT0tMXx8aT09PXU/aTohMX19dmFyIGttPWhyKC9cXHMvdSksWGU9aHIoXCIgXHRcIiksWnM9aHIoXCIsOyBcdFwiKSxldT1ocigvW15cXG5cXHJdL3UpO2Z1bmN0aW9uIHRvKGUsdCxyKXtsZXQgbj0hIShyIT1udWxsJiZyLmJhY2t3YXJkcyk7aWYodD09PSExKXJldHVybiExO2xldCBzPWUuY2hhckF0KHQpO2lmKG4pe2lmKGUuY2hhckF0KHQtMSk9PT1cIlxcclwiJiZzPT09YFxuYClyZXR1cm4gdC0yO2lmKHM9PT1gXG5gfHxzPT09XCJcXHJcInx8cz09PVwiXFx1MjAyOFwifHxzPT09XCJcXHUyMDI5XCIpcmV0dXJuIHQtMX1lbHNle2lmKHM9PT1cIlxcclwiJiZlLmNoYXJBdCh0KzEpPT09YFxuYClyZXR1cm4gdCsyO2lmKHM9PT1gXG5gfHxzPT09XCJcXHJcInx8cz09PVwiXFx1MjAyOFwifHxzPT09XCJcXHUyMDI5XCIpcmV0dXJuIHQrMX1yZXR1cm4gdH12YXIgSGU9dG87ZnVuY3Rpb24gcm8oZSx0LHI9e30pe2xldCBuPVhlKGUsci5iYWNrd2FyZHM/dC0xOnQscikscz1IZShlLG4scik7cmV0dXJuIG4hPT1zfXZhciBaPXJvO2Z1bmN0aW9uIG5vKGUsdCl7aWYodD09PSExKXJldHVybiExO2lmKGUuY2hhckF0KHQpPT09XCIvXCImJmUuY2hhckF0KHQrMSk9PT1cIipcIil7Zm9yKGxldCByPXQrMjtyPGUubGVuZ3RoOysrcilpZihlLmNoYXJBdChyKT09PVwiKlwiJiZlLmNoYXJBdChyKzEpPT09XCIvXCIpcmV0dXJuIHIrMn1yZXR1cm4gdH12YXIgX3Q9bm87ZnVuY3Rpb24gc28oZSx0KXtyZXR1cm4gdD09PSExPyExOmUuY2hhckF0KHQpPT09XCIvXCImJmUuY2hhckF0KHQrMSk9PT1cIi9cIj9ldShlLHQpOnR9dmFyIHZ0PXNvO2Z1bmN0aW9uIHVvKGUsdCl7bGV0IHI9bnVsbCxuPXQ7Zm9yKDtuIT09cjspcj1uLG49WnMoZSxuKSxuPV90KGUsbiksbj1YZShlLG4pO3JldHVybiBuPXZ0KGUsbiksbj1IZShlLG4pLG4hPT0hMSYmWihlLG4pfXZhciBqdD11bztmdW5jdGlvbiBpbyhlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKSYmZS5sZW5ndGg+MH12YXIgTz1pbzt2YXIgdHU9bmV3IFByb3h5KCgpPT57fSx7Z2V0OigpPT50dX0pLE10PXR1O3ZhciBncj1cIidcIixydT0nXCInO2Z1bmN0aW9uIGFvKGUsdCl7bGV0IHI9dD09PSEwfHx0PT09Z3I/Z3I6cnUsbj1yPT09Z3I/cnU6Z3Iscz0wLHU9MDtmb3IobGV0IGkgb2YgZSlpPT09cj9zKys6aT09PW4mJnUrKztyZXR1cm4gcz51P246cn12YXIgU3I9YW87ZnVuY3Rpb24gb28oZSx0LHIpe2xldCBuPXQ9PT0nXCInP1wiJ1wiOidcIicsdT1ZKCExLGUsL1xcXFwoLil8KFtcIiddKS9nc3UsKGksYSxvKT0+YT09PW4/YTpvPT09dD9cIlxcXFxcIitvOm98fChyJiYvXlteXFxuXFxyXCInMC03XFxcXGJmbnJ0LXZ4XFx1MjAyOFxcdTIwMjldJC91LnRlc3QoYSk/YTpcIlxcXFxcIithKSk7cmV0dXJuIHQrdSt0fXZhciBudT1vbztmdW5jdGlvbiBwbyhlLHQpe010Lm9rKC9eKD88cXVvdGU+W1wiJ10pLipcXGs8cXVvdGU+JC9zdS50ZXN0KGUpKTtsZXQgcj1lLnNsaWNlKDEsLTEpLG49dC5wYXJzZXI9PT1cImpzb25cInx8dC5wYXJzZXI9PT1cImpzb25jXCJ8fHQucGFyc2VyPT09XCJqc29uNVwiJiZ0LnF1b3RlUHJvcHM9PT1cInByZXNlcnZlXCImJiF0LnNpbmdsZVF1b3RlPydcIic6dC5fX2lzSW5IdG1sQXR0cmlidXRlP1wiJ1wiOlNyKHIsdC5zaW5nbGVRdW90ZSk7cmV0dXJuIGUuY2hhckF0KDApPT09bj9lOm51KHIsbiwhMSl9dmFyIG50PXBvO2Z1bmN0aW9uIHEoZSl7dmFyIG4scyx1O2xldCB0PSgobj1lLnJhbmdlKT09bnVsbD92b2lkIDA6blswXSk/P2Uuc3RhcnQscj0odT0oKHM9ZS5kZWNsYXJhdGlvbik9PW51bGw/dm9pZCAwOnMuZGVjb3JhdG9ycyk/P2UuZGVjb3JhdG9ycyk9PW51bGw/dm9pZCAwOnVbMF07cmV0dXJuIHI/TWF0aC5taW4ocShyKSx0KTp0fWZ1bmN0aW9uIGsoZSl7dmFyIHQ7cmV0dXJuKCh0PWUucmFuZ2UpPT1udWxsP3ZvaWQgMDp0WzFdKT8/ZS5lbmR9ZnVuY3Rpb24gUHQoZSx0KXtsZXQgcj1xKGUpO3JldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHIpJiZyPT09cSh0KX1mdW5jdGlvbiBjbyhlLHQpe2xldCByPWsoZSk7cmV0dXJuIE51bWJlci5pc0ludGVnZXIocikmJnI9PT1rKHQpfWZ1bmN0aW9uIHN1KGUsdCl7cmV0dXJuIFB0KGUsdCkmJmNvKGUsdCl9dmFyIHJyPW51bGw7ZnVuY3Rpb24gbnIoZSl7aWYocnIhPT1udWxsJiZ0eXBlb2YgcnIucHJvcGVydHkpe2xldCB0PXJyO3JldHVybiBycj1uci5wcm90b3R5cGU9bnVsbCx0fXJldHVybiBycj1uci5wcm90b3R5cGU9ZT8/T2JqZWN0LmNyZWF0ZShudWxsKSxuZXcgbnJ9dmFyIGxvPTEwO2ZvcihsZXQgZT0wO2U8PWxvO2UrKylucigpO2Z1bmN0aW9uIHduKGUpe3JldHVybiBucihlKX1mdW5jdGlvbiBtbyhlLHQ9XCJ0eXBlXCIpe3duKGUpO2Z1bmN0aW9uIHIobil7bGV0IHM9blt0XSx1PWVbc107aWYoIUFycmF5LmlzQXJyYXkodSkpdGhyb3cgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYE1pc3NpbmcgdmlzaXRvciBrZXlzIGZvciAnJHtzfScuYCkse25vZGU6bn0pO3JldHVybiB1fXJldHVybiByfXZhciBCcj1tbzt2YXIgdXU9e0FycmF5RXhwcmVzc2lvbjpbXCJlbGVtZW50c1wiXSxBc3NpZ25tZW50RXhwcmVzc2lvbjpbXCJsZWZ0XCIsXCJyaWdodFwiXSxCaW5hcnlFeHByZXNzaW9uOltcImxlZnRcIixcInJpZ2h0XCJdLEludGVycHJldGVyRGlyZWN0aXZlOltdLERpcmVjdGl2ZTpbXCJ2YWx1ZVwiXSxEaXJlY3RpdmVMaXRlcmFsOltdLEJsb2NrU3RhdGVtZW50OltcImRpcmVjdGl2ZXNcIixcImJvZHlcIl0sQnJlYWtTdGF0ZW1lbnQ6W1wibGFiZWxcIl0sQ2FsbEV4cHJlc3Npb246W1wiY2FsbGVlXCIsXCJhcmd1bWVudHNcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJ0eXBlQXJndW1lbnRzXCJdLENhdGNoQ2xhdXNlOltcInBhcmFtXCIsXCJib2R5XCJdLENvbmRpdGlvbmFsRXhwcmVzc2lvbjpbXCJ0ZXN0XCIsXCJjb25zZXF1ZW50XCIsXCJhbHRlcm5hdGVcIl0sQ29udGludWVTdGF0ZW1lbnQ6W1wibGFiZWxcIl0sRGVidWdnZXJTdGF0ZW1lbnQ6W10sRG9XaGlsZVN0YXRlbWVudDpbXCJib2R5XCIsXCJ0ZXN0XCJdLEVtcHR5U3RhdGVtZW50OltdLEV4cHJlc3Npb25TdGF0ZW1lbnQ6W1wiZXhwcmVzc2lvblwiXSxGaWxlOltcInByb2dyYW1cIl0sRm9ySW5TdGF0ZW1lbnQ6W1wibGVmdFwiLFwicmlnaHRcIixcImJvZHlcIl0sRm9yU3RhdGVtZW50OltcImluaXRcIixcInRlc3RcIixcInVwZGF0ZVwiLFwiYm9keVwiXSxGdW5jdGlvbkRlY2xhcmF0aW9uOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJwcmVkaWNhdGVcIixcInJldHVyblR5cGVcIixcImJvZHlcIl0sRnVuY3Rpb25FeHByZXNzaW9uOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCIsXCJib2R5XCJdLElkZW50aWZpZXI6W1widHlwZUFubm90YXRpb25cIixcImRlY29yYXRvcnNcIl0sSWZTdGF0ZW1lbnQ6W1widGVzdFwiLFwiY29uc2VxdWVudFwiLFwiYWx0ZXJuYXRlXCJdLExhYmVsZWRTdGF0ZW1lbnQ6W1wibGFiZWxcIixcImJvZHlcIl0sU3RyaW5nTGl0ZXJhbDpbXSxOdW1lcmljTGl0ZXJhbDpbXSxOdWxsTGl0ZXJhbDpbXSxCb29sZWFuTGl0ZXJhbDpbXSxSZWdFeHBMaXRlcmFsOltdLExvZ2ljYWxFeHByZXNzaW9uOltcImxlZnRcIixcInJpZ2h0XCJdLE1lbWJlckV4cHJlc3Npb246W1wib2JqZWN0XCIsXCJwcm9wZXJ0eVwiXSxOZXdFeHByZXNzaW9uOltcImNhbGxlZVwiLFwiYXJndW1lbnRzXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiXSxQcm9ncmFtOltcImRpcmVjdGl2ZXNcIixcImJvZHlcIl0sT2JqZWN0RXhwcmVzc2lvbjpbXCJwcm9wZXJ0aWVzXCJdLE9iamVjdE1ldGhvZDpbXCJkZWNvcmF0b3JzXCIsXCJrZXlcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIixcImJvZHlcIl0sT2JqZWN0UHJvcGVydHk6W1wia2V5XCIsXCJ2YWx1ZVwiLFwiZGVjb3JhdG9yc1wiXSxSZXN0RWxlbWVudDpbXCJhcmd1bWVudFwiLFwidHlwZUFubm90YXRpb25cIixcImRlY29yYXRvcnNcIl0sUmV0dXJuU3RhdGVtZW50OltcImFyZ3VtZW50XCJdLFNlcXVlbmNlRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uc1wiXSxQYXJlbnRoZXNpemVkRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCJdLFN3aXRjaENhc2U6W1widGVzdFwiLFwiY29uc2VxdWVudFwiXSxTd2l0Y2hTdGF0ZW1lbnQ6W1wiZGlzY3JpbWluYW50XCIsXCJjYXNlc1wiXSxUaGlzRXhwcmVzc2lvbjpbXSxUaHJvd1N0YXRlbWVudDpbXCJhcmd1bWVudFwiXSxUcnlTdGF0ZW1lbnQ6W1wiYmxvY2tcIixcImhhbmRsZXJcIixcImZpbmFsaXplclwiXSxVbmFyeUV4cHJlc3Npb246W1wiYXJndW1lbnRcIl0sVXBkYXRlRXhwcmVzc2lvbjpbXCJhcmd1bWVudFwiXSxWYXJpYWJsZURlY2xhcmF0aW9uOltcImRlY2xhcmF0aW9uc1wiXSxWYXJpYWJsZURlY2xhcmF0b3I6W1wiaWRcIixcImluaXRcIl0sV2hpbGVTdGF0ZW1lbnQ6W1widGVzdFwiLFwiYm9keVwiXSxXaXRoU3RhdGVtZW50OltcIm9iamVjdFwiLFwiYm9keVwiXSxBc3NpZ25tZW50UGF0dGVybjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwiZGVjb3JhdG9yc1wiLFwidHlwZUFubm90YXRpb25cIl0sQXJyYXlQYXR0ZXJuOltcImVsZW1lbnRzXCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwiZGVjb3JhdG9yc1wiXSxBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjpbXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJwcmVkaWNhdGVcIixcInJldHVyblR5cGVcIixcImJvZHlcIl0sQ2xhc3NCb2R5OltcImJvZHlcIl0sQ2xhc3NFeHByZXNzaW9uOltcImRlY29yYXRvcnNcIixcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwic3VwZXJDbGFzc1wiLFwic3VwZXJUeXBlUGFyYW1ldGVyc1wiLFwibWl4aW5zXCIsXCJpbXBsZW1lbnRzXCIsXCJib2R5XCIsXCJzdXBlclR5cGVBcmd1bWVudHNcIl0sQ2xhc3NEZWNsYXJhdGlvbjpbXCJkZWNvcmF0b3JzXCIsXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInN1cGVyQ2xhc3NcIixcInN1cGVyVHlwZVBhcmFtZXRlcnNcIixcIm1peGluc1wiLFwiaW1wbGVtZW50c1wiLFwiYm9keVwiLFwic3VwZXJUeXBlQXJndW1lbnRzXCJdLEV4cG9ydEFsbERlY2xhcmF0aW9uOltcInNvdXJjZVwiLFwiYXR0cmlidXRlc1wiLFwiZXhwb3J0ZWRcIl0sRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uOltcImRlY2xhcmF0aW9uXCJdLEV4cG9ydE5hbWVkRGVjbGFyYXRpb246W1wiZGVjbGFyYXRpb25cIixcInNwZWNpZmllcnNcIixcInNvdXJjZVwiLFwiYXR0cmlidXRlc1wiXSxFeHBvcnRTcGVjaWZpZXI6W1wibG9jYWxcIixcImV4cG9ydGVkXCJdLEZvck9mU3RhdGVtZW50OltcImxlZnRcIixcInJpZ2h0XCIsXCJib2R5XCJdLEltcG9ydERlY2xhcmF0aW9uOltcInNwZWNpZmllcnNcIixcInNvdXJjZVwiLFwiYXR0cmlidXRlc1wiXSxJbXBvcnREZWZhdWx0U3BlY2lmaWVyOltcImxvY2FsXCJdLEltcG9ydE5hbWVzcGFjZVNwZWNpZmllcjpbXCJsb2NhbFwiXSxJbXBvcnRTcGVjaWZpZXI6W1wiaW1wb3J0ZWRcIixcImxvY2FsXCJdLEltcG9ydEV4cHJlc3Npb246W1wic291cmNlXCIsXCJvcHRpb25zXCJdLE1ldGFQcm9wZXJ0eTpbXCJtZXRhXCIsXCJwcm9wZXJ0eVwiXSxDbGFzc01ldGhvZDpbXCJkZWNvcmF0b3JzXCIsXCJrZXlcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIixcImJvZHlcIl0sT2JqZWN0UGF0dGVybjpbXCJwcm9wZXJ0aWVzXCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwiZGVjb3JhdG9yc1wiXSxTcHJlYWRFbGVtZW50OltcImFyZ3VtZW50XCJdLFN1cGVyOltdLFRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvbjpbXCJ0YWdcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJxdWFzaVwiLFwidHlwZUFyZ3VtZW50c1wiXSxUZW1wbGF0ZUVsZW1lbnQ6W10sVGVtcGxhdGVMaXRlcmFsOltcInF1YXNpc1wiLFwiZXhwcmVzc2lvbnNcIl0sWWllbGRFeHByZXNzaW9uOltcImFyZ3VtZW50XCJdLEF3YWl0RXhwcmVzc2lvbjpbXCJhcmd1bWVudFwiXSxCaWdJbnRMaXRlcmFsOltdLEV4cG9ydE5hbWVzcGFjZVNwZWNpZmllcjpbXCJleHBvcnRlZFwiXSxPcHRpb25hbE1lbWJlckV4cHJlc3Npb246W1wib2JqZWN0XCIsXCJwcm9wZXJ0eVwiXSxPcHRpb25hbENhbGxFeHByZXNzaW9uOltcImNhbGxlZVwiLFwiYXJndW1lbnRzXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiXSxDbGFzc1Byb3BlcnR5OltcImRlY29yYXRvcnNcIixcInZhcmlhbmNlXCIsXCJrZXlcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJ2YWx1ZVwiXSxDbGFzc0FjY2Vzc29yUHJvcGVydHk6W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwidmFsdWVcIl0sQ2xhc3NQcml2YXRlUHJvcGVydHk6W1wiZGVjb3JhdG9yc1wiLFwidmFyaWFuY2VcIixcImtleVwiLFwidHlwZUFubm90YXRpb25cIixcInZhbHVlXCJdLENsYXNzUHJpdmF0ZU1ldGhvZDpbXCJkZWNvcmF0b3JzXCIsXCJrZXlcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIixcImJvZHlcIl0sUHJpdmF0ZU5hbWU6W1wiaWRcIl0sU3RhdGljQmxvY2s6W1wiYm9keVwiXSxBbnlUeXBlQW5ub3RhdGlvbjpbXSxBcnJheVR5cGVBbm5vdGF0aW9uOltcImVsZW1lbnRUeXBlXCJdLEJvb2xlYW5UeXBlQW5ub3RhdGlvbjpbXSxCb29sZWFuTGl0ZXJhbFR5cGVBbm5vdGF0aW9uOltdLE51bGxMaXRlcmFsVHlwZUFubm90YXRpb246W10sQ2xhc3NJbXBsZW1lbnRzOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiXSxEZWNsYXJlQ2xhc3M6W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJleHRlbmRzXCIsXCJtaXhpbnNcIixcImltcGxlbWVudHNcIixcImJvZHlcIl0sRGVjbGFyZUZ1bmN0aW9uOltcImlkXCIsXCJwcmVkaWNhdGVcIl0sRGVjbGFyZUludGVyZmFjZTpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcImV4dGVuZHNcIixcImJvZHlcIl0sRGVjbGFyZU1vZHVsZTpbXCJpZFwiLFwiYm9keVwiXSxEZWNsYXJlTW9kdWxlRXhwb3J0czpbXCJ0eXBlQW5ub3RhdGlvblwiXSxEZWNsYXJlVHlwZUFsaWFzOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicmlnaHRcIl0sRGVjbGFyZU9wYXF1ZVR5cGU6W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJzdXBlcnR5cGVcIl0sRGVjbGFyZVZhcmlhYmxlOltcImlkXCJdLERlY2xhcmVFeHBvcnREZWNsYXJhdGlvbjpbXCJkZWNsYXJhdGlvblwiLFwic3BlY2lmaWVyc1wiLFwic291cmNlXCIsXCJhdHRyaWJ1dGVzXCJdLERlY2xhcmVFeHBvcnRBbGxEZWNsYXJhdGlvbjpbXCJzb3VyY2VcIixcImF0dHJpYnV0ZXNcIl0sRGVjbGFyZWRQcmVkaWNhdGU6W1widmFsdWVcIl0sRXhpc3RzVHlwZUFubm90YXRpb246W10sRnVuY3Rpb25UeXBlQW5ub3RhdGlvbjpbXCJ0eXBlUGFyYW1ldGVyc1wiLFwidGhpc1wiLFwicGFyYW1zXCIsXCJyZXN0XCIsXCJyZXR1cm5UeXBlXCJdLEZ1bmN0aW9uVHlwZVBhcmFtOltcIm5hbWVcIixcInR5cGVBbm5vdGF0aW9uXCJdLEdlbmVyaWNUeXBlQW5ub3RhdGlvbjpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIl0sSW5mZXJyZWRQcmVkaWNhdGU6W10sSW50ZXJmYWNlRXh0ZW5kczpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIl0sSW50ZXJmYWNlRGVjbGFyYXRpb246W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJleHRlbmRzXCIsXCJib2R5XCJdLEludGVyZmFjZVR5cGVBbm5vdGF0aW9uOltcImV4dGVuZHNcIixcImJvZHlcIl0sSW50ZXJzZWN0aW9uVHlwZUFubm90YXRpb246W1widHlwZXNcIl0sTWl4ZWRUeXBlQW5ub3RhdGlvbjpbXSxFbXB0eVR5cGVBbm5vdGF0aW9uOltdLE51bGxhYmxlVHlwZUFubm90YXRpb246W1widHlwZUFubm90YXRpb25cIl0sTnVtYmVyTGl0ZXJhbFR5cGVBbm5vdGF0aW9uOltdLE51bWJlclR5cGVBbm5vdGF0aW9uOltdLE9iamVjdFR5cGVBbm5vdGF0aW9uOltcInByb3BlcnRpZXNcIixcImluZGV4ZXJzXCIsXCJjYWxsUHJvcGVydGllc1wiLFwiaW50ZXJuYWxTbG90c1wiXSxPYmplY3RUeXBlSW50ZXJuYWxTbG90OltcImlkXCIsXCJ2YWx1ZVwiXSxPYmplY3RUeXBlQ2FsbFByb3BlcnR5OltcInZhbHVlXCJdLE9iamVjdFR5cGVJbmRleGVyOltcInZhcmlhbmNlXCIsXCJpZFwiLFwia2V5XCIsXCJ2YWx1ZVwiXSxPYmplY3RUeXBlUHJvcGVydHk6W1wia2V5XCIsXCJ2YWx1ZVwiLFwidmFyaWFuY2VcIl0sT2JqZWN0VHlwZVNwcmVhZFByb3BlcnR5OltcImFyZ3VtZW50XCJdLE9wYXF1ZVR5cGU6W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJzdXBlcnR5cGVcIixcImltcGx0eXBlXCJdLFF1YWxpZmllZFR5cGVJZGVudGlmaWVyOltcInF1YWxpZmljYXRpb25cIixcImlkXCJdLFN0cmluZ0xpdGVyYWxUeXBlQW5ub3RhdGlvbjpbXSxTdHJpbmdUeXBlQW5ub3RhdGlvbjpbXSxTeW1ib2xUeXBlQW5ub3RhdGlvbjpbXSxUaGlzVHlwZUFubm90YXRpb246W10sVHVwbGVUeXBlQW5ub3RhdGlvbjpbXCJ0eXBlc1wiLFwiZWxlbWVudFR5cGVzXCJdLFR5cGVvZlR5cGVBbm5vdGF0aW9uOltcImFyZ3VtZW50XCIsXCJ0eXBlQXJndW1lbnRzXCJdLFR5cGVBbGlhczpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInJpZ2h0XCJdLFR5cGVBbm5vdGF0aW9uOltcInR5cGVBbm5vdGF0aW9uXCJdLFR5cGVDYXN0RXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxUeXBlUGFyYW1ldGVyOltcImJvdW5kXCIsXCJkZWZhdWx0XCIsXCJ2YXJpYW5jZVwiXSxUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb246W1wicGFyYW1zXCJdLFR5cGVQYXJhbWV0ZXJJbnN0YW50aWF0aW9uOltcInBhcmFtc1wiXSxVbmlvblR5cGVBbm5vdGF0aW9uOltcInR5cGVzXCJdLFZhcmlhbmNlOltdLFZvaWRUeXBlQW5ub3RhdGlvbjpbXSxFbnVtRGVjbGFyYXRpb246W1wiaWRcIixcImJvZHlcIl0sRW51bUJvb2xlYW5Cb2R5OltcIm1lbWJlcnNcIl0sRW51bU51bWJlckJvZHk6W1wibWVtYmVyc1wiXSxFbnVtU3RyaW5nQm9keTpbXCJtZW1iZXJzXCJdLEVudW1TeW1ib2xCb2R5OltcIm1lbWJlcnNcIl0sRW51bUJvb2xlYW5NZW1iZXI6W1wiaWRcIixcImluaXRcIl0sRW51bU51bWJlck1lbWJlcjpbXCJpZFwiLFwiaW5pdFwiXSxFbnVtU3RyaW5nTWVtYmVyOltcImlkXCIsXCJpbml0XCJdLEVudW1EZWZhdWx0ZWRNZW1iZXI6W1wiaWRcIl0sSW5kZXhlZEFjY2Vzc1R5cGU6W1wib2JqZWN0VHlwZVwiLFwiaW5kZXhUeXBlXCJdLE9wdGlvbmFsSW5kZXhlZEFjY2Vzc1R5cGU6W1wib2JqZWN0VHlwZVwiLFwiaW5kZXhUeXBlXCJdLEpTWEF0dHJpYnV0ZTpbXCJuYW1lXCIsXCJ2YWx1ZVwiXSxKU1hDbG9zaW5nRWxlbWVudDpbXCJuYW1lXCJdLEpTWEVsZW1lbnQ6W1wib3BlbmluZ0VsZW1lbnRcIixcImNoaWxkcmVuXCIsXCJjbG9zaW5nRWxlbWVudFwiXSxKU1hFbXB0eUV4cHJlc3Npb246W10sSlNYRXhwcmVzc2lvbkNvbnRhaW5lcjpbXCJleHByZXNzaW9uXCJdLEpTWFNwcmVhZENoaWxkOltcImV4cHJlc3Npb25cIl0sSlNYSWRlbnRpZmllcjpbXSxKU1hNZW1iZXJFeHByZXNzaW9uOltcIm9iamVjdFwiLFwicHJvcGVydHlcIl0sSlNYTmFtZXNwYWNlZE5hbWU6W1wibmFtZXNwYWNlXCIsXCJuYW1lXCJdLEpTWE9wZW5pbmdFbGVtZW50OltcIm5hbWVcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJ0eXBlQXJndW1lbnRzXCIsXCJhdHRyaWJ1dGVzXCJdLEpTWFNwcmVhZEF0dHJpYnV0ZTpbXCJhcmd1bWVudFwiXSxKU1hUZXh0OltdLEpTWEZyYWdtZW50OltcIm9wZW5pbmdGcmFnbWVudFwiLFwiY2hpbGRyZW5cIixcImNsb3NpbmdGcmFnbWVudFwiXSxKU1hPcGVuaW5nRnJhZ21lbnQ6W10sSlNYQ2xvc2luZ0ZyYWdtZW50OltdLE5vb3A6W10sUGxhY2Vob2xkZXI6W10sVjhJbnRyaW5zaWNJZGVudGlmaWVyOltdLEFyZ3VtZW50UGxhY2Vob2xkZXI6W10sQmluZEV4cHJlc3Npb246W1wib2JqZWN0XCIsXCJjYWxsZWVcIl0sSW1wb3J0QXR0cmlidXRlOltcImtleVwiLFwidmFsdWVcIl0sRGVjb3JhdG9yOltcImV4cHJlc3Npb25cIl0sRG9FeHByZXNzaW9uOltcImJvZHlcIl0sRXhwb3J0RGVmYXVsdFNwZWNpZmllcjpbXCJleHBvcnRlZFwiXSxSZWNvcmRFeHByZXNzaW9uOltcInByb3BlcnRpZXNcIl0sVHVwbGVFeHByZXNzaW9uOltcImVsZW1lbnRzXCJdLE1vZHVsZUV4cHJlc3Npb246W1wiYm9keVwiXSxUb3BpY1JlZmVyZW5jZTpbXSxQaXBlbGluZVRvcGljRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCJdLFBpcGVsaW5lQmFyZUZ1bmN0aW9uOltcImNhbGxlZVwiXSxQaXBlbGluZVByaW1hcnlUb3BpY1JlZmVyZW5jZTpbXSxUU1BhcmFtZXRlclByb3BlcnR5OltcInBhcmFtZXRlclwiLFwiZGVjb3JhdG9yc1wiXSxUU0RlY2xhcmVGdW5jdGlvbjpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInBhcmFtc1wiLFwicmV0dXJuVHlwZVwiLFwiYm9keVwiXSxUU0RlY2xhcmVNZXRob2Q6W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCJdLFRTUXVhbGlmaWVkTmFtZTpbXCJsZWZ0XCIsXCJyaWdodFwiXSxUU0NhbGxTaWduYXR1cmVEZWNsYXJhdGlvbjpbXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1ldGVyc1wiLFwidHlwZUFubm90YXRpb25cIixcInBhcmFtc1wiLFwicmV0dXJuVHlwZVwiXSxUU0NvbnN0cnVjdFNpZ25hdHVyZURlY2xhcmF0aW9uOltcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbWV0ZXJzXCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCJdLFRTUHJvcGVydHlTaWduYXR1cmU6W1wia2V5XCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxUU01ldGhvZFNpZ25hdHVyZTpbXCJrZXlcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbWV0ZXJzXCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCJdLFRTSW5kZXhTaWduYXR1cmU6W1wicGFyYW1ldGVyc1wiLFwidHlwZUFubm90YXRpb25cIl0sVFNBbnlLZXl3b3JkOltdLFRTQm9vbGVhbktleXdvcmQ6W10sVFNCaWdJbnRLZXl3b3JkOltdLFRTSW50cmluc2ljS2V5d29yZDpbXSxUU05ldmVyS2V5d29yZDpbXSxUU051bGxLZXl3b3JkOltdLFRTTnVtYmVyS2V5d29yZDpbXSxUU09iamVjdEtleXdvcmQ6W10sVFNTdHJpbmdLZXl3b3JkOltdLFRTU3ltYm9sS2V5d29yZDpbXSxUU1VuZGVmaW5lZEtleXdvcmQ6W10sVFNVbmtub3duS2V5d29yZDpbXSxUU1ZvaWRLZXl3b3JkOltdLFRTVGhpc1R5cGU6W10sVFNGdW5jdGlvblR5cGU6W1widHlwZVBhcmFtZXRlcnNcIixcInBhcmFtZXRlcnNcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIl0sVFNDb25zdHJ1Y3RvclR5cGU6W1widHlwZVBhcmFtZXRlcnNcIixcInBhcmFtZXRlcnNcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIl0sVFNUeXBlUmVmZXJlbmNlOltcInR5cGVOYW1lXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiXSxUU1R5cGVQcmVkaWNhdGU6W1wicGFyYW1ldGVyTmFtZVwiLFwidHlwZUFubm90YXRpb25cIl0sVFNUeXBlUXVlcnk6W1wiZXhwck5hbWVcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJ0eXBlQXJndW1lbnRzXCJdLFRTVHlwZUxpdGVyYWw6W1wibWVtYmVyc1wiXSxUU0FycmF5VHlwZTpbXCJlbGVtZW50VHlwZVwiXSxUU1R1cGxlVHlwZTpbXCJlbGVtZW50VHlwZXNcIl0sVFNPcHRpb25hbFR5cGU6W1widHlwZUFubm90YXRpb25cIl0sVFNSZXN0VHlwZTpbXCJ0eXBlQW5ub3RhdGlvblwiXSxUU05hbWVkVHVwbGVNZW1iZXI6W1wibGFiZWxcIixcImVsZW1lbnRUeXBlXCJdLFRTVW5pb25UeXBlOltcInR5cGVzXCJdLFRTSW50ZXJzZWN0aW9uVHlwZTpbXCJ0eXBlc1wiXSxUU0NvbmRpdGlvbmFsVHlwZTpbXCJjaGVja1R5cGVcIixcImV4dGVuZHNUeXBlXCIsXCJ0cnVlVHlwZVwiLFwiZmFsc2VUeXBlXCJdLFRTSW5mZXJUeXBlOltcInR5cGVQYXJhbWV0ZXJcIl0sVFNQYXJlbnRoZXNpemVkVHlwZTpbXCJ0eXBlQW5ub3RhdGlvblwiXSxUU1R5cGVPcGVyYXRvcjpbXCJ0eXBlQW5ub3RhdGlvblwiXSxUU0luZGV4ZWRBY2Nlc3NUeXBlOltcIm9iamVjdFR5cGVcIixcImluZGV4VHlwZVwiXSxUU01hcHBlZFR5cGU6W1widHlwZVBhcmFtZXRlclwiLFwibmFtZVR5cGVcIixcInR5cGVBbm5vdGF0aW9uXCJdLFRTVGVtcGxhdGVMaXRlcmFsVHlwZTpbXCJxdWFzaXNcIixcInR5cGVzXCJdLFRTTGl0ZXJhbFR5cGU6W1wibGl0ZXJhbFwiXSxUU0V4cHJlc3Npb25XaXRoVHlwZUFyZ3VtZW50czpbXCJleHByZXNzaW9uXCIsXCJ0eXBlUGFyYW1ldGVyc1wiXSxUU0ludGVyZmFjZURlY2xhcmF0aW9uOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwiZXh0ZW5kc1wiLFwiYm9keVwiXSxUU0ludGVyZmFjZUJvZHk6W1wiYm9keVwiXSxUU1R5cGVBbGlhc0RlY2xhcmF0aW9uOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFubm90YXRpb25cIl0sVFNJbnN0YW50aWF0aW9uRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiXSxUU0FzRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxUU1NhdGlzZmllc0V4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiLFwidHlwZUFubm90YXRpb25cIl0sVFNUeXBlQXNzZXJ0aW9uOltcInR5cGVBbm5vdGF0aW9uXCIsXCJleHByZXNzaW9uXCJdLFRTRW51bUJvZHk6W1wibWVtYmVyc1wiXSxUU0VudW1EZWNsYXJhdGlvbjpbXCJpZFwiLFwibWVtYmVyc1wiXSxUU0VudW1NZW1iZXI6W1wiaWRcIixcImluaXRpYWxpemVyXCJdLFRTTW9kdWxlRGVjbGFyYXRpb246W1wiaWRcIixcImJvZHlcIl0sVFNNb2R1bGVCbG9jazpbXCJib2R5XCJdLFRTSW1wb3J0VHlwZTpbXCJhcmd1bWVudFwiLFwib3B0aW9uc1wiLFwicXVhbGlmaWVyXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiXSxUU0ltcG9ydEVxdWFsc0RlY2xhcmF0aW9uOltcImlkXCIsXCJtb2R1bGVSZWZlcmVuY2VcIl0sVFNFeHRlcm5hbE1vZHVsZVJlZmVyZW5jZTpbXCJleHByZXNzaW9uXCJdLFRTTm9uTnVsbEV4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiXSxUU0V4cG9ydEFzc2lnbm1lbnQ6W1wiZXhwcmVzc2lvblwiXSxUU05hbWVzcGFjZUV4cG9ydERlY2xhcmF0aW9uOltcImlkXCJdLFRTVHlwZUFubm90YXRpb246W1widHlwZUFubm90YXRpb25cIl0sVFNUeXBlUGFyYW1ldGVySW5zdGFudGlhdGlvbjpbXCJwYXJhbXNcIl0sVFNUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb246W1wicGFyYW1zXCJdLFRTVHlwZVBhcmFtZXRlcjpbXCJjb25zdHJhaW50XCIsXCJkZWZhdWx0XCIsXCJuYW1lXCJdLENoYWluRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCJdLEV4cGVyaW1lbnRhbFJlc3RQcm9wZXJ0eTpbXCJhcmd1bWVudFwiXSxFeHBlcmltZW50YWxTcHJlYWRQcm9wZXJ0eTpbXCJhcmd1bWVudFwiXSxMaXRlcmFsOltdLE1ldGhvZERlZmluaXRpb246W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ2YWx1ZVwiXSxQcml2YXRlSWRlbnRpZmllcjpbXSxQcm9wZXJ0eTpbXCJrZXlcIixcInZhbHVlXCJdLFByb3BlcnR5RGVmaW5pdGlvbjpbXCJkZWNvcmF0b3JzXCIsXCJrZXlcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJ2YWx1ZVwiLFwidmFyaWFuY2VcIl0sQWNjZXNzb3JQcm9wZXJ0eTpbXCJkZWNvcmF0b3JzXCIsXCJrZXlcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJ2YWx1ZVwiXSxUU0Fic3RyYWN0QWNjZXNzb3JQcm9wZXJ0eTpbXCJkZWNvcmF0b3JzXCIsXCJrZXlcIixcInR5cGVBbm5vdGF0aW9uXCJdLFRTQWJzdHJhY3RLZXl3b3JkOltdLFRTQWJzdHJhY3RNZXRob2REZWZpbml0aW9uOltcImtleVwiLFwidmFsdWVcIl0sVFNBYnN0cmFjdFByb3BlcnR5RGVmaW5pdGlvbjpbXCJkZWNvcmF0b3JzXCIsXCJrZXlcIixcInR5cGVBbm5vdGF0aW9uXCJdLFRTQXN5bmNLZXl3b3JkOltdLFRTQ2xhc3NJbXBsZW1lbnRzOltcImV4cHJlc3Npb25cIixcInR5cGVBcmd1bWVudHNcIixcInR5cGVQYXJhbWV0ZXJzXCJdLFRTRGVjbGFyZUtleXdvcmQ6W10sVFNFbXB0eUJvZHlGdW5jdGlvbkV4cHJlc3Npb246W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIl0sVFNFeHBvcnRLZXl3b3JkOltdLFRTSW50ZXJmYWNlSGVyaXRhZ2U6W1wiZXhwcmVzc2lvblwiLFwidHlwZUFyZ3VtZW50c1wiLFwidHlwZVBhcmFtZXRlcnNcIl0sVFNQcml2YXRlS2V5d29yZDpbXSxUU1Byb3RlY3RlZEtleXdvcmQ6W10sVFNQdWJsaWNLZXl3b3JkOltdLFRTUmVhZG9ubHlLZXl3b3JkOltdLFRTU3RhdGljS2V5d29yZDpbXSxBc0NvbnN0RXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCJdLEFzRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxCaWdJbnRMaXRlcmFsVHlwZUFubm90YXRpb246W10sQmlnSW50VHlwZUFubm90YXRpb246W10sQ29tcG9uZW50RGVjbGFyYXRpb246W1wiaWRcIixcInBhcmFtc1wiLFwiYm9keVwiLFwidHlwZVBhcmFtZXRlcnNcIixcInJlbmRlcnNUeXBlXCJdLENvbXBvbmVudFBhcmFtZXRlcjpbXCJuYW1lXCIsXCJsb2NhbFwiXSxDb21wb25lbnRUeXBlQW5ub3RhdGlvbjpbXCJwYXJhbXNcIixcInJlc3RcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJyZW5kZXJzVHlwZVwiXSxDb21wb25lbnRUeXBlUGFyYW1ldGVyOltcIm5hbWVcIixcInR5cGVBbm5vdGF0aW9uXCJdLENvbmRpdGlvbmFsVHlwZUFubm90YXRpb246W1wiY2hlY2tUeXBlXCIsXCJleHRlbmRzVHlwZVwiLFwidHJ1ZVR5cGVcIixcImZhbHNlVHlwZVwiXSxEZWNsYXJlQ29tcG9uZW50OltcImlkXCIsXCJwYXJhbXNcIixcInJlc3RcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJyZW5kZXJzVHlwZVwiXSxEZWNsYXJlRW51bTpbXCJpZFwiLFwiYm9keVwiXSxEZWNsYXJlSG9vazpbXCJpZFwiXSxEZWNsYXJlTmFtZXNwYWNlOltcImlkXCIsXCJib2R5XCJdLEVudW1CaWdJbnRCb2R5OltcIm1lbWJlcnNcIl0sRW51bUJpZ0ludE1lbWJlcjpbXCJpZFwiLFwiaW5pdFwiXSxIb29rRGVjbGFyYXRpb246W1wiaWRcIixcInBhcmFtc1wiLFwiYm9keVwiLFwidHlwZVBhcmFtZXRlcnNcIixcInJldHVyblR5cGVcIl0sSG9va1R5cGVBbm5vdGF0aW9uOltcInBhcmFtc1wiLFwicmV0dXJuVHlwZVwiLFwicmVzdFwiLFwidHlwZVBhcmFtZXRlcnNcIl0sSW5mZXJUeXBlQW5ub3RhdGlvbjpbXCJ0eXBlUGFyYW1ldGVyXCJdLEtleW9mVHlwZUFubm90YXRpb246W1wiYXJndW1lbnRcIl0sT2JqZWN0VHlwZU1hcHBlZFR5cGVQcm9wZXJ0eTpbXCJrZXlUcGFyYW1cIixcInByb3BUeXBlXCIsXCJzb3VyY2VUeXBlXCIsXCJ2YXJpYW5jZVwiXSxRdWFsaWZpZWRUeXBlb2ZJZGVudGlmaWVyOltcInF1YWxpZmljYXRpb25cIixcImlkXCJdLFR1cGxlVHlwZUxhYmVsZWRFbGVtZW50OltcImxhYmVsXCIsXCJlbGVtZW50VHlwZVwiLFwidmFyaWFuY2VcIl0sVHVwbGVUeXBlU3ByZWFkRWxlbWVudDpbXCJsYWJlbFwiLFwidHlwZUFubm90YXRpb25cIl0sVHlwZU9wZXJhdG9yOltcInR5cGVBbm5vdGF0aW9uXCJdLFR5cGVQcmVkaWNhdGU6W1wicGFyYW1ldGVyTmFtZVwiLFwidHlwZUFubm90YXRpb25cIixcImFzc2VydHNcIl0sTkdSb290OltcIm5vZGVcIl0sTkdQaXBlRXhwcmVzc2lvbjpbXCJsZWZ0XCIsXCJyaWdodFwiLFwiYXJndW1lbnRzXCJdLE5HQ2hhaW5lZEV4cHJlc3Npb246W1wiZXhwcmVzc2lvbnNcIl0sTkdFbXB0eUV4cHJlc3Npb246W10sTkdNaWNyb3N5bnRheDpbXCJib2R5XCJdLE5HTWljcm9zeW50YXhLZXk6W10sTkdNaWNyb3N5bnRheEV4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiLFwiYWxpYXNcIl0sTkdNaWNyb3N5bnRheEtleWVkRXhwcmVzc2lvbjpbXCJrZXlcIixcImV4cHJlc3Npb25cIl0sTkdNaWNyb3N5bnRheExldDpbXCJrZXlcIixcInZhbHVlXCJdLE5HTWljcm9zeW50YXhBczpbXCJrZXlcIixcImFsaWFzXCJdLEpzRXhwcmVzc2lvblJvb3Q6W1wibm9kZVwiXSxKc29uUm9vdDpbXCJub2RlXCJdLFRTSlNEb2NBbGxUeXBlOltdLFRTSlNEb2NVbmtub3duVHlwZTpbXSxUU0pTRG9jTnVsbGFibGVUeXBlOltcInR5cGVBbm5vdGF0aW9uXCJdLFRTSlNEb2NOb25OdWxsYWJsZVR5cGU6W1widHlwZUFubm90YXRpb25cIl0sTmV2ZXJUeXBlQW5ub3RhdGlvbjpbXSxVbmRlZmluZWRUeXBlQW5ub3RhdGlvbjpbXSxVbmtub3duVHlwZUFubm90YXRpb246W10sU2F0aXNmaWVzRXhwcmVzc2lvbjpbXCJleHByZXNzaW9uXCIsXCJ0eXBlQW5ub3RhdGlvblwiXX07dmFyIHlvPUJyKHV1KSxicj15bztmdW5jdGlvbiBEbyhlKXtsZXQgdD1uZXcgU2V0KGUpO3JldHVybiByPT50LmhhcyhyPT1udWxsP3ZvaWQgMDpyLnR5cGUpfXZhciBSPURvO3ZhciBmbz1SKFtcIkJsb2NrXCIsXCJDb21tZW50QmxvY2tcIixcIk11bHRpTGluZVwiXSksZWU9Zm87dmFyIEVvPVIoW1wiQW55VHlwZUFubm90YXRpb25cIixcIlRoaXNUeXBlQW5ub3RhdGlvblwiLFwiTnVtYmVyVHlwZUFubm90YXRpb25cIixcIlZvaWRUeXBlQW5ub3RhdGlvblwiLFwiQm9vbGVhblR5cGVBbm5vdGF0aW9uXCIsXCJCaWdJbnRUeXBlQW5ub3RhdGlvblwiLFwiU3ltYm9sVHlwZUFubm90YXRpb25cIixcIlN0cmluZ1R5cGVBbm5vdGF0aW9uXCIsXCJOZXZlclR5cGVBbm5vdGF0aW9uXCIsXCJVbmRlZmluZWRUeXBlQW5ub3RhdGlvblwiLFwiVW5rbm93blR5cGVBbm5vdGF0aW9uXCIsXCJFbXB0eVR5cGVBbm5vdGF0aW9uXCIsXCJNaXhlZFR5cGVBbm5vdGF0aW9uXCJdKSxQcj1FbztmdW5jdGlvbiBGbyhlLHQpe2xldCByPXQuc3BsaXQoXCIuXCIpO2ZvcihsZXQgbj1yLmxlbmd0aC0xO24+PTA7bi0tKXtsZXQgcz1yW25dO2lmKG49PT0wKXJldHVybiBlLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmZS5uYW1lPT09cztpZihlLnR5cGUhPT1cIk1lbWJlckV4cHJlc3Npb25cInx8ZS5vcHRpb25hbHx8ZS5jb21wdXRlZHx8ZS5wcm9wZXJ0eS50eXBlIT09XCJJZGVudGlmaWVyXCJ8fGUucHJvcGVydHkubmFtZSE9PXMpcmV0dXJuITE7ZT1lLm9iamVjdH19ZnVuY3Rpb24gQ28oZSx0KXtyZXR1cm4gdC5zb21lKHI9PkZvKGUscikpfXZhciBpdT1DbztmdW5jdGlvbiBBbyh7dHlwZTplfSl7cmV0dXJuIGUuc3RhcnRzV2l0aChcIlRTXCIpJiZlLmVuZHNXaXRoKFwiS2V5d29yZFwiKX12YXIga3I9QW87ZnVuY3Rpb24gdXIoZSx0KXtyZXR1cm4gdChlKXx8VnMoZSx7Z2V0VmlzaXRvcktleXM6YnIscHJlZGljYXRlOnR9KX1mdW5jdGlvbiBKdChlKXtyZXR1cm4gZS50eXBlPT09XCJBc3NpZ25tZW50RXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIkJpbmFyeUV4cHJlc3Npb25cInx8ZS50eXBlPT09XCJMb2dpY2FsRXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIk5HUGlwZUV4cHJlc3Npb25cInx8ZS50eXBlPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cInx8TChlKXx8VyhlKXx8ZS50eXBlPT09XCJTZXF1ZW5jZUV4cHJlc3Npb25cInx8ZS50eXBlPT09XCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cInx8ZS50eXBlPT09XCJCaW5kRXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIlVwZGF0ZUV4cHJlc3Npb25cIiYmIWUucHJlZml4fHxBZShlKXx8ZS50eXBlPT09XCJUU05vbk51bGxFeHByZXNzaW9uXCJ8fGUudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCJ9ZnVuY3Rpb24gcHUoZSl7cmV0dXJuIGUuZXhwcmVzc2lvbnM/ZS5leHByZXNzaW9uc1swXTplLmxlZnQ/P2UudGVzdD8/ZS5jYWxsZWU/P2Uub2JqZWN0Pz9lLnRhZz8/ZS5hcmd1bWVudD8/ZS5leHByZXNzaW9ufWZ1bmN0aW9uIExyKGUpe2lmKGUuZXhwcmVzc2lvbnMpcmV0dXJuW1wiZXhwcmVzc2lvbnNcIiwwXTtpZihlLmxlZnQpcmV0dXJuW1wibGVmdFwiXTtpZihlLnRlc3QpcmV0dXJuW1widGVzdFwiXTtpZihlLm9iamVjdClyZXR1cm5bXCJvYmplY3RcIl07aWYoZS5jYWxsZWUpcmV0dXJuW1wiY2FsbGVlXCJdO2lmKGUudGFnKXJldHVybltcInRhZ1wiXTtpZihlLmFyZ3VtZW50KXJldHVybltcImFyZ3VtZW50XCJdO2lmKGUuZXhwcmVzc2lvbilyZXR1cm5bXCJleHByZXNzaW9uXCJdO3Rocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgbm9kZSBoYXMgbm8gbGVmdCBzaWRlLlwiKX12YXIgQXQ9UihbXCJMaW5lXCIsXCJDb21tZW50TGluZVwiLFwiU2luZ2xlTGluZVwiLFwiSGFzaGJhbmdDb21tZW50XCIsXCJIVE1MT3BlblwiLFwiSFRNTENsb3NlXCIsXCJIYXNoYmFuZ1wiLFwiSW50ZXJwcmV0ZXJEaXJlY3RpdmVcIl0pLGN1PVIoW1wiRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uXCIsXCJEZWNsYXJlRXhwb3J0RGVjbGFyYXRpb25cIixcIkV4cG9ydE5hbWVkRGVjbGFyYXRpb25cIixcIkV4cG9ydEFsbERlY2xhcmF0aW9uXCIsXCJEZWNsYXJlRXhwb3J0QWxsRGVjbGFyYXRpb25cIl0pLFU9UihbXCJBcnJheUV4cHJlc3Npb25cIixcIlR1cGxlRXhwcmVzc2lvblwiXSksc2U9UihbXCJPYmplY3RFeHByZXNzaW9uXCIsXCJSZWNvcmRFeHByZXNzaW9uXCJdKTtmdW5jdGlvbiBsdShlKXtyZXR1cm4gZS50eXBlPT09XCJMb2dpY2FsRXhwcmVzc2lvblwiJiZlLm9wZXJhdG9yPT09XCI/P1wifWZ1bmN0aW9uIEZlKGUpe3JldHVybiBlLnR5cGU9PT1cIk51bWVyaWNMaXRlcmFsXCJ8fGUudHlwZT09PVwiTGl0ZXJhbFwiJiZ0eXBlb2YgZS52YWx1ZT09XCJudW1iZXJcIn1mdW5jdGlvbiBNbihlKXtyZXR1cm4gZS50eXBlPT09XCJVbmFyeUV4cHJlc3Npb25cIiYmKGUub3BlcmF0b3I9PT1cIitcInx8ZS5vcGVyYXRvcj09PVwiLVwiKSYmRmUoZS5hcmd1bWVudCl9ZnVuY3Rpb24gdGUoZSl7cmV0dXJuISEoZSYmKGUudHlwZT09PVwiU3RyaW5nTGl0ZXJhbFwifHxlLnR5cGU9PT1cIkxpdGVyYWxcIiYmdHlwZW9mIGUudmFsdWU9PVwic3RyaW5nXCIpKX1mdW5jdGlvbiBSbihlKXtyZXR1cm4gZS50eXBlPT09XCJSZWdFeHBMaXRlcmFsXCJ8fGUudHlwZT09PVwiTGl0ZXJhbFwiJiYhIWUucmVnZXh9dmFyIHdyPVIoW1wiTGl0ZXJhbFwiLFwiQm9vbGVhbkxpdGVyYWxcIixcIkJpZ0ludExpdGVyYWxcIixcIkRpcmVjdGl2ZUxpdGVyYWxcIixcIk51bGxMaXRlcmFsXCIsXCJOdW1lcmljTGl0ZXJhbFwiLFwiUmVnRXhwTGl0ZXJhbFwiLFwiU3RyaW5nTGl0ZXJhbFwiXSksVG89UihbXCJJZGVudGlmaWVyXCIsXCJUaGlzRXhwcmVzc2lvblwiLFwiU3VwZXJcIixcIlByaXZhdGVOYW1lXCIsXCJQcml2YXRlSWRlbnRpZmllclwiXSksUmU9UihbXCJPYmplY3RUeXBlQW5ub3RhdGlvblwiLFwiVFNUeXBlTGl0ZXJhbFwiLFwiVFNNYXBwZWRUeXBlXCJdKSxSdD1SKFtcIkZ1bmN0aW9uRXhwcmVzc2lvblwiLFwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIl0pO2Z1bmN0aW9uIHhvKGUpe3JldHVybiBlLnR5cGU9PT1cIkZ1bmN0aW9uRXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCImJmUuYm9keS50eXBlPT09XCJCbG9ja1N0YXRlbWVudFwifWZ1bmN0aW9uIE9uKGUpe3JldHVybiBMKGUpJiZlLmNhbGxlZS50eXBlPT09XCJJZGVudGlmaWVyXCImJltcImFzeW5jXCIsXCJpbmplY3RcIixcImZha2VBc3luY1wiLFwid2FpdEZvckFzeW5jXCJdLmluY2x1ZGVzKGUuY2FsbGVlLm5hbWUpfXZhciBYPVIoW1wiSlNYRWxlbWVudFwiLFwiSlNYRnJhZ21lbnRcIl0pO2Z1bmN0aW9uIGt0KGUpe3JldHVybiBlLm1ldGhvZCYmZS5raW5kPT09XCJpbml0XCJ8fGUua2luZD09PVwiZ2V0XCJ8fGUua2luZD09PVwic2V0XCJ9ZnVuY3Rpb24gT3IoZSl7cmV0dXJuKGUudHlwZT09PVwiT2JqZWN0VHlwZVByb3BlcnR5XCJ8fGUudHlwZT09PVwiT2JqZWN0VHlwZUludGVybmFsU2xvdFwiKSYmIWUuc3RhdGljJiYhZS5tZXRob2QmJmUua2luZCE9PVwiZ2V0XCImJmUua2luZCE9PVwic2V0XCImJmUudmFsdWUudHlwZT09PVwiRnVuY3Rpb25UeXBlQW5ub3RhdGlvblwifWZ1bmN0aW9uIG11KGUpe3JldHVybihlLnR5cGU9PT1cIlR5cGVBbm5vdGF0aW9uXCJ8fGUudHlwZT09PVwiVFNUeXBlQW5ub3RhdGlvblwiKSYmZS50eXBlQW5ub3RhdGlvbi50eXBlPT09XCJGdW5jdGlvblR5cGVBbm5vdGF0aW9uXCImJiFlLnN0YXRpYyYmIVB0KGUsZS50eXBlQW5ub3RhdGlvbil9dmFyIERlPVIoW1wiQmluYXJ5RXhwcmVzc2lvblwiLFwiTG9naWNhbEV4cHJlc3Npb25cIixcIk5HUGlwZUV4cHJlc3Npb25cIl0pO2Z1bmN0aW9uIFR0KGUpe3JldHVybiBXKGUpfHxlLnR5cGU9PT1cIkJpbmRFeHByZXNzaW9uXCImJiEhZS5vYmplY3R9dmFyIGhvPVIoW1wiVFNUaGlzVHlwZVwiLFwiTnVsbExpdGVyYWxUeXBlQW5ub3RhdGlvblwiLFwiQm9vbGVhbkxpdGVyYWxUeXBlQW5ub3RhdGlvblwiLFwiU3RyaW5nTGl0ZXJhbFR5cGVBbm5vdGF0aW9uXCIsXCJCaWdJbnRMaXRlcmFsVHlwZUFubm90YXRpb25cIixcIk51bWJlckxpdGVyYWxUeXBlQW5ub3RhdGlvblwiLFwiVFNMaXRlcmFsVHlwZVwiLFwiVFNUZW1wbGF0ZUxpdGVyYWxUeXBlXCJdKTtmdW5jdGlvbiBxdChlKXtyZXR1cm4ga3IoZSl8fFByKGUpfHxobyhlKXx8KGUudHlwZT09PVwiR2VuZXJpY1R5cGVBbm5vdGF0aW9uXCJ8fGUudHlwZT09PVwiVFNUeXBlUmVmZXJlbmNlXCIpJiYhZS50eXBlUGFyYW1ldGVycyYmIWUudHlwZUFyZ3VtZW50c31mdW5jdGlvbiBnbyhlKXtyZXR1cm4gZS50eXBlPT09XCJJZGVudGlmaWVyXCImJihlLm5hbWU9PT1cImJlZm9yZUVhY2hcInx8ZS5uYW1lPT09XCJiZWZvcmVBbGxcInx8ZS5uYW1lPT09XCJhZnRlckVhY2hcInx8ZS5uYW1lPT09XCJhZnRlckFsbFwiKX12YXIgU289W1wiaXRcIixcIml0Lm9ubHlcIixcIml0LnNraXBcIixcImRlc2NyaWJlXCIsXCJkZXNjcmliZS5vbmx5XCIsXCJkZXNjcmliZS5za2lwXCIsXCJ0ZXN0XCIsXCJ0ZXN0Lm9ubHlcIixcInRlc3Quc2tpcFwiLFwidGVzdC5zdGVwXCIsXCJ0ZXN0LmRlc2NyaWJlXCIsXCJ0ZXN0LmRlc2NyaWJlLm9ubHlcIixcInRlc3QuZGVzY3JpYmUucGFyYWxsZWxcIixcInRlc3QuZGVzY3JpYmUucGFyYWxsZWwub25seVwiLFwidGVzdC5kZXNjcmliZS5zZXJpYWxcIixcInRlc3QuZGVzY3JpYmUuc2VyaWFsLm9ubHlcIixcInNraXBcIixcInhpdFwiLFwieGRlc2NyaWJlXCIsXCJ4dGVzdFwiLFwiZml0XCIsXCJmZGVzY3JpYmVcIixcImZ0ZXN0XCJdO2Z1bmN0aW9uIEJvKGUpe3JldHVybiBpdShlLFNvKX1mdW5jdGlvbiBJdChlLHQpe2lmKChlPT1udWxsP3ZvaWQgMDplLnR5cGUpIT09XCJDYWxsRXhwcmVzc2lvblwifHxlLm9wdGlvbmFsKXJldHVybiExO2xldCByPXBlKGUpO2lmKHIubGVuZ3RoPT09MSl7aWYoT24oZSkmJkl0KHQpKXJldHVybiBSdChyWzBdKTtpZihnbyhlLmNhbGxlZSkpcmV0dXJuIE9uKHJbMF0pfWVsc2UgaWYoKHIubGVuZ3RoPT09Mnx8ci5sZW5ndGg9PT0zKSYmKHJbMF0udHlwZT09PVwiVGVtcGxhdGVMaXRlcmFsXCJ8fHRlKHJbMF0pKSYmQm8oZS5jYWxsZWUpKXJldHVybiByWzJdJiYhRmUoclsyXSk/ITE6KHIubGVuZ3RoPT09Mj9SdChyWzFdKTp4byhyWzFdKSYmeihyWzFdKS5sZW5ndGg8PTEpfHxPbihyWzFdKTtyZXR1cm4hMX12YXIgeXU9ZT0+dD0+KCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJDaGFpbkV4cHJlc3Npb25cIiYmKHQ9dC5leHByZXNzaW9uKSxlKHQpKSxMPXl1KFIoW1wiQ2FsbEV4cHJlc3Npb25cIixcIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIl0pKSxXPXl1KFIoW1wiTWVtYmVyRXhwcmVzc2lvblwiLFwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCJdKSk7ZnVuY3Rpb24gSm4oZSx0PTUpe3JldHVybiBEdShlLHQpPD10fWZ1bmN0aW9uIER1KGUsdCl7bGV0IHI9MDtmb3IobGV0IG4gaW4gZSl7bGV0IHM9ZVtuXTtpZihzJiZ0eXBlb2Ygcz09XCJvYmplY3RcIiYmdHlwZW9mIHMudHlwZT09XCJzdHJpbmdcIiYmKHIrKyxyKz1EdShzLHQtcikpLHI+dClyZXR1cm4gcn1yZXR1cm4gcn12YXIgYm89LjI1O2Z1bmN0aW9uIGlyKGUsdCl7bGV0e3ByaW50V2lkdGg6cn09dDtpZihUKGUpKXJldHVybiExO2xldCBuPXIqYm87aWYoZS50eXBlPT09XCJUaGlzRXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmZS5uYW1lLmxlbmd0aDw9bnx8TW4oZSkmJiFUKGUuYXJndW1lbnQpKXJldHVybiEwO2xldCBzPWUudHlwZT09PVwiTGl0ZXJhbFwiJiZcInJlZ2V4XCJpbiBlJiZlLnJlZ2V4LnBhdHRlcm58fGUudHlwZT09PVwiUmVnRXhwTGl0ZXJhbFwiJiZlLnBhdHRlcm47cmV0dXJuIHM/cy5sZW5ndGg8PW46dGUoZSk/bnQoZmUoZSksdCkubGVuZ3RoPD1uOmUudHlwZT09PVwiVGVtcGxhdGVMaXRlcmFsXCI/ZS5leHByZXNzaW9ucy5sZW5ndGg9PT0wJiZlLnF1YXNpc1swXS52YWx1ZS5yYXcubGVuZ3RoPD1uJiYhZS5xdWFzaXNbMF0udmFsdWUucmF3LmluY2x1ZGVzKGBcbmApOmUudHlwZT09PVwiVW5hcnlFeHByZXNzaW9uXCI/aXIoZS5hcmd1bWVudCx7cHJpbnRXaWR0aDpyfSk6ZS50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiJiZlLmFyZ3VtZW50cy5sZW5ndGg9PT0wJiZlLmNhbGxlZS50eXBlPT09XCJJZGVudGlmaWVyXCI/ZS5jYWxsZWUubmFtZS5sZW5ndGg8PW4tMjp3cihlKX1mdW5jdGlvbiBMZShlLHQpe3JldHVybiBYKHQpP0x0KHQpOlQodCxoLkxlYWRpbmcscj0+WihlLGsocikpKX1mdW5jdGlvbiBhdShlKXtyZXR1cm4gZS5xdWFzaXMuc29tZSh0PT50LnZhbHVlLnJhdy5pbmNsdWRlcyhgXG5gKSl9ZnVuY3Rpb24gX3IoZSx0KXtyZXR1cm4oZS50eXBlPT09XCJUZW1wbGF0ZUxpdGVyYWxcIiYmYXUoZSl8fGUudHlwZT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCImJmF1KGUucXVhc2kpKSYmIVoodCxxKGUpLHtiYWNrd2FyZHM6ITB9KX1mdW5jdGlvbiB2cihlKXtpZighVChlKSlyZXR1cm4hMTtsZXQgdD1NKCExLGx0KGUsaC5EYW5nbGluZyksLTEpO3JldHVybiB0JiYhZWUodCl9ZnVuY3Rpb24gZnUoZSl7aWYoZS5sZW5ndGg8PTEpcmV0dXJuITE7bGV0IHQ9MDtmb3IobGV0IHIgb2YgZSlpZihSdChyKSl7aWYodCs9MSx0PjEpcmV0dXJuITB9ZWxzZSBpZihMKHIpKXtmb3IobGV0IG4gb2YgcGUocikpaWYoUnQobikpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24ganIoZSl7bGV0e25vZGU6dCxwYXJlbnQ6cixrZXk6bn09ZTtyZXR1cm4gbj09PVwiY2FsbGVlXCImJkwodCkmJkwocikmJnIuYXJndW1lbnRzLmxlbmd0aD4wJiZ0LmFyZ3VtZW50cy5sZW5ndGg+ci5hcmd1bWVudHMubGVuZ3RofXZhciBQbz1uZXcgU2V0KFtcIiFcIixcIi1cIixcIitcIixcIn5cIl0pO2Z1bmN0aW9uIEllKGUsdD0yKXtpZih0PD0wKXJldHVybiExO2lmKGUudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCJ8fGUudHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiKXJldHVybiBJZShlLmV4cHJlc3Npb24sdCk7bGV0IHI9bj0+SWUobix0LTEpO2lmKFJuKGUpKXJldHVybiBydChlLnBhdHRlcm4/P2UucmVnZXgucGF0dGVybik8PTU7aWYod3IoZSl8fFRvKGUpfHxlLnR5cGU9PT1cIkFyZ3VtZW50UGxhY2Vob2xkZXJcIilyZXR1cm4hMDtpZihlLnR5cGU9PT1cIlRlbXBsYXRlTGl0ZXJhbFwiKXJldHVybiBlLnF1YXNpcy5ldmVyeShuPT4hbi52YWx1ZS5yYXcuaW5jbHVkZXMoYFxuYCkpJiZlLmV4cHJlc3Npb25zLmV2ZXJ5KHIpO2lmKHNlKGUpKXJldHVybiBlLnByb3BlcnRpZXMuZXZlcnkobj0+IW4uY29tcHV0ZWQmJihuLnNob3J0aGFuZHx8bi52YWx1ZSYmcihuLnZhbHVlKSkpO2lmKFUoZSkpcmV0dXJuIGUuZWxlbWVudHMuZXZlcnkobj0+bj09PW51bGx8fHIobikpO2lmKG10KGUpKXtpZihlLnR5cGU9PT1cIkltcG9ydEV4cHJlc3Npb25cInx8SWUoZS5jYWxsZWUsdCkpe2xldCBuPXBlKGUpO3JldHVybiBuLmxlbmd0aDw9dCYmbi5ldmVyeShyKX1yZXR1cm4hMX1yZXR1cm4gVyhlKT9JZShlLm9iamVjdCx0KSYmSWUoZS5wcm9wZXJ0eSx0KTplLnR5cGU9PT1cIlVuYXJ5RXhwcmVzc2lvblwiJiZQby5oYXMoZS5vcGVyYXRvcil8fGUudHlwZT09PVwiVXBkYXRlRXhwcmVzc2lvblwiP0llKGUuYXJndW1lbnQsdCk6ITF9ZnVuY3Rpb24gZmUoZSl7dmFyIHQ7cmV0dXJuKCh0PWUuZXh0cmEpPT1udWxsP3ZvaWQgMDp0LnJhdyk/P2UucmF3fWZ1bmN0aW9uIEV1KGUpe3JldHVybiBlfWZ1bmN0aW9uIG9lKGUsdD1cImVzNVwiKXtyZXR1cm4gZS50cmFpbGluZ0NvbW1hPT09XCJlczVcIiYmdD09PVwiZXM1XCJ8fGUudHJhaWxpbmdDb21tYT09PVwiYWxsXCImJih0PT09XCJhbGxcInx8dD09PVwiZXM1XCIpfWZ1bmN0aW9uIGFlKGUsdCl7c3dpdGNoKGUudHlwZSl7Y2FzZVwiQmluYXJ5RXhwcmVzc2lvblwiOmNhc2VcIkxvZ2ljYWxFeHByZXNzaW9uXCI6Y2FzZVwiQXNzaWdubWVudEV4cHJlc3Npb25cIjpjYXNlXCJOR1BpcGVFeHByZXNzaW9uXCI6cmV0dXJuIGFlKGUubGVmdCx0KTtjYXNlXCJNZW1iZXJFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCI6cmV0dXJuIGFlKGUub2JqZWN0LHQpO2Nhc2VcIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiOnJldHVybiBlLnRhZy50eXBlPT09XCJGdW5jdGlvbkV4cHJlc3Npb25cIj8hMTphZShlLnRhZyx0KTtjYXNlXCJDYWxsRXhwcmVzc2lvblwiOmNhc2VcIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIjpyZXR1cm4gZS5jYWxsZWUudHlwZT09PVwiRnVuY3Rpb25FeHByZXNzaW9uXCI/ITE6YWUoZS5jYWxsZWUsdCk7Y2FzZVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI6cmV0dXJuIGFlKGUudGVzdCx0KTtjYXNlXCJVcGRhdGVFeHByZXNzaW9uXCI6cmV0dXJuIWUucHJlZml4JiZhZShlLmFyZ3VtZW50LHQpO2Nhc2VcIkJpbmRFeHByZXNzaW9uXCI6cmV0dXJuIGUub2JqZWN0JiZhZShlLm9iamVjdCx0KTtjYXNlXCJTZXF1ZW5jZUV4cHJlc3Npb25cIjpyZXR1cm4gYWUoZS5leHByZXNzaW9uc1swXSx0KTtjYXNlXCJDaGFpbkV4cHJlc3Npb25cIjpjYXNlXCJUU1NhdGlzZmllc0V4cHJlc3Npb25cIjpjYXNlXCJUU0FzRXhwcmVzc2lvblwiOmNhc2VcIlRTTm9uTnVsbEV4cHJlc3Npb25cIjpjYXNlXCJBc0V4cHJlc3Npb25cIjpjYXNlXCJBc0NvbnN0RXhwcmVzc2lvblwiOmNhc2VcIlNhdGlzZmllc0V4cHJlc3Npb25cIjpyZXR1cm4gYWUoZS5leHByZXNzaW9uLHQpO2RlZmF1bHQ6cmV0dXJuIHQoZSl9fXZhciBvdT17XCI9PVwiOiEwLFwiIT1cIjohMCxcIj09PVwiOiEwLFwiIT09XCI6ITB9LElyPXtcIipcIjohMCxcIi9cIjohMCxcIiVcIjohMH0sam49e1wiPj5cIjohMCxcIj4+PlwiOiEwLFwiPDxcIjohMH07ZnVuY3Rpb24gYXIoZSx0KXtyZXR1cm4hKHNyKHQpIT09c3IoZSl8fGU9PT1cIioqXCJ8fG91W2VdJiZvdVt0XXx8dD09PVwiJVwiJiZJcltlXXx8ZT09PVwiJVwiJiZJclt0XXx8dCE9PWUmJklyW3RdJiZJcltlXXx8am5bZV0mJmpuW3RdKX12YXIga289bmV3IE1hcChbW1wifD5cIl0sW1wiPz9cIl0sW1wifHxcIl0sW1wiJiZcIl0sW1wifFwiXSxbXCJeXCJdLFtcIiZcIl0sW1wiPT1cIixcIj09PVwiLFwiIT1cIixcIiE9PVwiXSxbXCI8XCIsXCI+XCIsXCI8PVwiLFwiPj1cIixcImluXCIsXCJpbnN0YW5jZW9mXCJdLFtcIj4+XCIsXCI8PFwiLFwiPj4+XCJdLFtcIitcIixcIi1cIl0sW1wiKlwiLFwiL1wiLFwiJVwiXSxbXCIqKlwiXV0uZmxhdE1hcCgoZSx0KT0+ZS5tYXAocj0+W3IsdF0pKSk7ZnVuY3Rpb24gc3IoZSl7cmV0dXJuIGtvLmdldChlKX1mdW5jdGlvbiBGdShlKXtyZXR1cm4hIWpuW2VdfHxlPT09XCJ8XCJ8fGU9PT1cIl5cInx8ZT09PVwiJlwifWZ1bmN0aW9uIEN1KGUpe3ZhciByO2lmKGUucmVzdClyZXR1cm4hMDtsZXQgdD16KGUpO3JldHVybigocj1NKCExLHQsLTEpKT09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiUmVzdEVsZW1lbnRcIn12YXIgX249bmV3IFdlYWtNYXA7ZnVuY3Rpb24geihlKXtpZihfbi5oYXMoZSkpcmV0dXJuIF9uLmdldChlKTtsZXQgdD1bXTtyZXR1cm4gZS50aGlzJiZ0LnB1c2goZS50aGlzKSxBcnJheS5pc0FycmF5KGUucGFyYW1ldGVycyk/dC5wdXNoKC4uLmUucGFyYW1ldGVycyk6QXJyYXkuaXNBcnJheShlLnBhcmFtcykmJnQucHVzaCguLi5lLnBhcmFtcyksZS5yZXN0JiZ0LnB1c2goZS5yZXN0KSxfbi5zZXQoZSx0KSx0fWZ1bmN0aW9uIEF1KGUsdCl7bGV0e25vZGU6cn09ZSxuPTAscz11PT50KHUsbisrKTtyLnRoaXMmJmUuY2FsbChzLFwidGhpc1wiKSxBcnJheS5pc0FycmF5KHIucGFyYW1ldGVycyk/ZS5lYWNoKHMsXCJwYXJhbWV0ZXJzXCIpOkFycmF5LmlzQXJyYXkoci5wYXJhbXMpJiZlLmVhY2gocyxcInBhcmFtc1wiKSxyLnJlc3QmJmUuY2FsbChzLFwicmVzdFwiKX12YXIgdm49bmV3IFdlYWtNYXA7ZnVuY3Rpb24gcGUoZSl7aWYodm4uaGFzKGUpKXJldHVybiB2bi5nZXQoZSk7aWYoZS50eXBlPT09XCJDaGFpbkV4cHJlc3Npb25cIilyZXR1cm4gcGUoZS5leHByZXNzaW9uKTtsZXQgdD1lLmFyZ3VtZW50cztyZXR1cm4gZS50eXBlPT09XCJJbXBvcnRFeHByZXNzaW9uXCImJih0PVtlLnNvdXJjZV0sZS5vcHRpb25zJiZ0LnB1c2goZS5vcHRpb25zKSksdm4uc2V0KGUsdCksdH1mdW5jdGlvbiBXdChlLHQpe2xldHtub2RlOnJ9PWU7aWYoci50eXBlPT09XCJDaGFpbkV4cHJlc3Npb25cIilyZXR1cm4gZS5jYWxsKCgpPT5XdChlLHQpLFwiZXhwcmVzc2lvblwiKTtyLnR5cGU9PT1cIkltcG9ydEV4cHJlc3Npb25cIj8oZS5jYWxsKG49PnQobiwwKSxcInNvdXJjZVwiKSxyLm9wdGlvbnMmJmUuY2FsbChuPT50KG4sMSksXCJvcHRpb25zXCIpKTplLmVhY2godCxcImFyZ3VtZW50c1wiKX1mdW5jdGlvbiBxbihlLHQpe2xldCByPVtdO2lmKGUudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCImJihlPWUuZXhwcmVzc2lvbixyLnB1c2goXCJleHByZXNzaW9uXCIpKSxlLnR5cGU9PT1cIkltcG9ydEV4cHJlc3Npb25cIil7aWYodD09PTB8fHQ9PT0oZS5vcHRpb25zPy0yOi0xKSlyZXR1cm5bLi4ucixcInNvdXJjZVwiXTtpZihlLm9wdGlvbnMmJih0PT09MXx8dD09PS0xKSlyZXR1cm5bLi4ucixcIm9wdGlvbnNcIl07dGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50IGluZGV4XCIpfWlmKHQ8MCYmKHQ9ZS5hcmd1bWVudHMubGVuZ3RoK3QpLHQ8MHx8dD49ZS5hcmd1bWVudHMubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCBhcmd1bWVudCBpbmRleFwiKTtyZXR1cm5bLi4ucixcImFyZ3VtZW50c1wiLHRdfWZ1bmN0aW9uIG9yKGUpe3JldHVybiBlLnZhbHVlLnRyaW0oKT09PVwicHJldHRpZXItaWdub3JlXCImJiFlLnVuaWdub3JlfWZ1bmN0aW9uIEx0KGUpe3JldHVybihlPT1udWxsP3ZvaWQgMDplLnByZXR0aWVySWdub3JlKXx8VChlLGguUHJldHRpZXJJZ25vcmUpfXZhciBoPXtMZWFkaW5nOjIsVHJhaWxpbmc6NCxEYW5nbGluZzo4LEJsb2NrOjE2LExpbmU6MzIsUHJldHRpZXJJZ25vcmU6NjQsRmlyc3Q6MTI4LExhc3Q6MjU2fSxUdT0oZSx0KT0+e2lmKHR5cGVvZiBlPT1cImZ1bmN0aW9uXCImJih0PWUsZT0wKSxlfHx0KXJldHVybihyLG4scyk9PiEoZSZoLkxlYWRpbmcmJiFyLmxlYWRpbmd8fGUmaC5UcmFpbGluZyYmIXIudHJhaWxpbmd8fGUmaC5EYW5nbGluZyYmKHIubGVhZGluZ3x8ci50cmFpbGluZyl8fGUmaC5CbG9jayYmIWVlKHIpfHxlJmguTGluZSYmIUF0KHIpfHxlJmguRmlyc3QmJm4hPT0wfHxlJmguTGFzdCYmbiE9PXMubGVuZ3RoLTF8fGUmaC5QcmV0dGllcklnbm9yZSYmIW9yKHIpfHx0JiYhdChyKSl9O2Z1bmN0aW9uIFQoZSx0LHIpe2lmKCFPKGU9PW51bGw/dm9pZCAwOmUuY29tbWVudHMpKXJldHVybiExO2xldCBuPVR1KHQscik7cmV0dXJuIG4/ZS5jb21tZW50cy5zb21lKG4pOiEwfWZ1bmN0aW9uIGx0KGUsdCxyKXtpZighQXJyYXkuaXNBcnJheShlPT1udWxsP3ZvaWQgMDplLmNvbW1lbnRzKSlyZXR1cm5bXTtsZXQgbj1UdSh0LHIpO3JldHVybiBuP2UuY29tbWVudHMuZmlsdGVyKG4pOmUuY29tbWVudHN9dmFyIGNlPShlLHtvcmlnaW5hbFRleHQ6dH0pPT5qdCh0LGsoZSkpO2Z1bmN0aW9uIG10KGUpe3JldHVybiBMKGUpfHxlLnR5cGU9PT1cIk5ld0V4cHJlc3Npb25cInx8ZS50eXBlPT09XCJJbXBvcnRFeHByZXNzaW9uXCJ9ZnVuY3Rpb24gQ2UoZSl7cmV0dXJuIGUmJihlLnR5cGU9PT1cIk9iamVjdFByb3BlcnR5XCJ8fGUudHlwZT09PVwiUHJvcGVydHlcIiYmIWt0KGUpKX12YXIgQWU9UihbXCJUU0FzRXhwcmVzc2lvblwiLFwiVFNTYXRpc2ZpZXNFeHByZXNzaW9uXCIsXCJBc0V4cHJlc3Npb25cIixcIkFzQ29uc3RFeHByZXNzaW9uXCIsXCJTYXRpc2ZpZXNFeHByZXNzaW9uXCJdKSx3ZT1SKFtcIlRTVW5pb25UeXBlXCIsXCJVbmlvblR5cGVBbm5vdGF0aW9uXCJdKSxOdD1SKFtcIlRTSW50ZXJzZWN0aW9uVHlwZVwiLFwiSW50ZXJzZWN0aW9uVHlwZUFubm90YXRpb25cIl0pLEplPVIoW1wiVFNDb25kaXRpb25hbFR5cGVcIixcIkNvbmRpdGlvbmFsVHlwZUFubm90YXRpb25cIl0pO3ZhciBJbz1uZXcgU2V0KFtcInJhbmdlXCIsXCJyYXdcIixcImNvbW1lbnRzXCIsXCJsZWFkaW5nQ29tbWVudHNcIixcInRyYWlsaW5nQ29tbWVudHNcIixcImlubmVyQ29tbWVudHNcIixcImV4dHJhXCIsXCJzdGFydFwiLFwiZW5kXCIsXCJsb2NcIixcImZsYWdzXCIsXCJlcnJvcnNcIixcInRva2Vuc1wiXSksR3Q9ZT0+e2ZvcihsZXQgdCBvZiBlLnF1YXNpcylkZWxldGUgdC52YWx1ZX07ZnVuY3Rpb24gZHUoZSx0LHIpe3ZhciBzLHU7aWYoZS50eXBlPT09XCJQcm9ncmFtXCImJmRlbGV0ZSB0LnNvdXJjZVR5cGUsKGUudHlwZT09PVwiQmlnSW50TGl0ZXJhbFwifHxlLnR5cGU9PT1cIkJpZ0ludExpdGVyYWxUeXBlQW5ub3RhdGlvblwiKSYmZS52YWx1ZSYmKHQudmFsdWU9ZS52YWx1ZS50b0xvd2VyQ2FzZSgpKSwoZS50eXBlPT09XCJCaWdJbnRMaXRlcmFsXCJ8fGUudHlwZT09PVwiTGl0ZXJhbFwiKSYmZS5iaWdpbnQmJih0LmJpZ2ludD1lLmJpZ2ludC50b0xvd2VyQ2FzZSgpKSxlLnR5cGU9PT1cIkVtcHR5U3RhdGVtZW50XCJ8fGUudHlwZT09PVwiSlNYVGV4dFwifHxlLnR5cGU9PT1cIkpTWEV4cHJlc3Npb25Db250YWluZXJcIiYmKGUuZXhwcmVzc2lvbi50eXBlPT09XCJMaXRlcmFsXCJ8fGUuZXhwcmVzc2lvbi50eXBlPT09XCJTdHJpbmdMaXRlcmFsXCIpJiZlLmV4cHJlc3Npb24udmFsdWU9PT1cIiBcIilyZXR1cm4gbnVsbDtpZigoZS50eXBlPT09XCJQcm9wZXJ0eVwifHxlLnR5cGU9PT1cIk9iamVjdFByb3BlcnR5XCJ8fGUudHlwZT09PVwiTWV0aG9kRGVmaW5pdGlvblwifHxlLnR5cGU9PT1cIkNsYXNzUHJvcGVydHlcInx8ZS50eXBlPT09XCJDbGFzc01ldGhvZFwifHxlLnR5cGU9PT1cIlByb3BlcnR5RGVmaW5pdGlvblwifHxlLnR5cGU9PT1cIlRTRGVjbGFyZU1ldGhvZFwifHxlLnR5cGU9PT1cIlRTUHJvcGVydHlTaWduYXR1cmVcInx8ZS50eXBlPT09XCJPYmplY3RUeXBlUHJvcGVydHlcInx8ZS50eXBlPT09XCJJbXBvcnRBdHRyaWJ1dGVcIikmJmUua2V5JiYhZS5jb21wdXRlZCl7bGV0e2tleTppfT1lO3RlKGkpfHxGZShpKT90LmtleT1TdHJpbmcoaS52YWx1ZSk6aS50eXBlPT09XCJJZGVudGlmaWVyXCImJih0LmtleT1pLm5hbWUpfWlmKGUudHlwZT09PVwiSlNYRWxlbWVudFwiJiZlLm9wZW5pbmdFbGVtZW50Lm5hbWUubmFtZT09PVwic3R5bGVcIiYmZS5vcGVuaW5nRWxlbWVudC5hdHRyaWJ1dGVzLnNvbWUoaT0+aS50eXBlPT09XCJKU1hBdHRyaWJ1dGVcIiYmaS5uYW1lLm5hbWU9PT1cImpzeFwiKSlmb3IobGV0e3R5cGU6aSxleHByZXNzaW9uOmF9b2YgdC5jaGlsZHJlbilpPT09XCJKU1hFeHByZXNzaW9uQ29udGFpbmVyXCImJmEudHlwZT09PVwiVGVtcGxhdGVMaXRlcmFsXCImJkd0KGEpO2UudHlwZT09PVwiSlNYQXR0cmlidXRlXCImJmUubmFtZS5uYW1lPT09XCJjc3NcIiYmZS52YWx1ZS50eXBlPT09XCJKU1hFeHByZXNzaW9uQ29udGFpbmVyXCImJmUudmFsdWUuZXhwcmVzc2lvbi50eXBlPT09XCJUZW1wbGF0ZUxpdGVyYWxcIiYmR3QodC52YWx1ZS5leHByZXNzaW9uKSxlLnR5cGU9PT1cIkpTWEF0dHJpYnV0ZVwiJiYoKHM9ZS52YWx1ZSk9PW51bGw/dm9pZCAwOnMudHlwZSk9PT1cIkxpdGVyYWxcIiYmL1tcIiddfCZxdW90O3wmYXBvczsvdS50ZXN0KGUudmFsdWUudmFsdWUpJiYodC52YWx1ZS52YWx1ZT1ZKCExLGUudmFsdWUudmFsdWUsL1tcIiddfCZxdW90O3wmYXBvczsvZ3UsJ1wiJykpO2xldCBuPWUuZXhwcmVzc2lvbnx8ZS5jYWxsZWU7aWYoZS50eXBlPT09XCJEZWNvcmF0b3JcIiYmbi50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiJiZuLmNhbGxlZS5uYW1lPT09XCJDb21wb25lbnRcIiYmbi5hcmd1bWVudHMubGVuZ3RoPT09MSl7bGV0IGk9ZS5leHByZXNzaW9uLmFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzO2ZvcihsZXRbYSxvXW9mIHQuZXhwcmVzc2lvbi5hcmd1bWVudHNbMF0ucHJvcGVydGllcy5lbnRyaWVzKCkpc3dpdGNoKGlbYV0ua2V5Lm5hbWUpe2Nhc2VcInN0eWxlc1wiOlUoby52YWx1ZSkmJkd0KG8udmFsdWUuZWxlbWVudHNbMF0pO2JyZWFrO2Nhc2VcInRlbXBsYXRlXCI6by52YWx1ZS50eXBlPT09XCJUZW1wbGF0ZUxpdGVyYWxcIiYmR3Qoby52YWx1ZSk7YnJlYWt9fWUudHlwZT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCImJihlLnRhZy50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCJ8fGUudGFnLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmKGUudGFnLm5hbWU9PT1cImdxbFwifHxlLnRhZy5uYW1lPT09XCJncmFwaHFsXCJ8fGUudGFnLm5hbWU9PT1cImNzc1wifHxlLnRhZy5uYW1lPT09XCJtZFwifHxlLnRhZy5uYW1lPT09XCJtYXJrZG93blwifHxlLnRhZy5uYW1lPT09XCJodG1sXCIpfHxlLnRhZy50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiKSYmR3QodC5xdWFzaSksZS50eXBlPT09XCJUZW1wbGF0ZUxpdGVyYWxcIiYmKCh1PWUubGVhZGluZ0NvbW1lbnRzKSE9bnVsbCYmdS5zb21lKGE9PmVlKGEpJiZbXCJHcmFwaFFMXCIsXCJIVE1MXCJdLnNvbWUobz0+YS52YWx1ZT09PWAgJHtvfSBgKSl8fHIudHlwZT09PVwiQ2FsbEV4cHJlc3Npb25cIiYmci5jYWxsZWUubmFtZT09PVwiZ3JhcGhxbFwifHwhZS5sZWFkaW5nQ29tbWVudHMpJiZHdCh0KSxlLnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiJiZlLmV4cHJlc3Npb24udHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiJiYodC50eXBlPVwiVFNOb25OdWxsRXhwcmVzc2lvblwiLHQuZXhwcmVzc2lvbi50eXBlPVwiQ2hhaW5FeHByZXNzaW9uXCIpLGUudHlwZT09PVwiVFNNYXBwZWRUeXBlXCImJihkZWxldGUgdC5rZXksZGVsZXRlIHQuY29uc3RyYWludCksZS50eXBlPT09XCJUU0VudW1EZWNsYXJhdGlvblwiJiZkZWxldGUgdC5ib2R5fWR1Lmlnbm9yZWRQcm9wZXJ0aWVzPUlvO3ZhciB4dT1kdTt2YXIgcWU9XCJzdHJpbmdcIixoZT1cImFycmF5XCIsc3Q9XCJjdXJzb3JcIixWZT1cImluZGVudFwiLCRlPVwiYWxpZ25cIixLZT1cInRyaW1cIixtZT1cImdyb3VwXCIsT2U9XCJmaWxsXCIsVGU9XCJpZi1icmVha1wiLFFlPVwiaW5kZW50LWlmLWJyZWFrXCIsemU9XCJsaW5lLXN1ZmZpeFwiLFdlPVwibGluZS1zdWZmaXgtYm91bmRhcnlcIixpZT1cImxpbmVcIixnZT1cImxhYmVsXCIsX2U9XCJicmVhay1wYXJlbnRcIixNcj1uZXcgU2V0KFtzdCxWZSwkZSxLZSxtZSxPZSxUZSxRZSx6ZSxXZSxpZSxnZSxfZV0pO2Z1bmN0aW9uIExvKGUpe2lmKHR5cGVvZiBlPT1cInN0cmluZ1wiKXJldHVybiBxZTtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBoZTtpZighZSlyZXR1cm47bGV0e3R5cGU6dH09ZTtpZihNci5oYXModCkpcmV0dXJuIHR9dmFyIFNlPUxvO3ZhciB3bz1lPT5uZXcgSW50bC5MaXN0Rm9ybWF0KFwiZW4tVVNcIix7dHlwZTpcImRpc2p1bmN0aW9uXCJ9KS5mb3JtYXQoZSk7ZnVuY3Rpb24gT28oZSl7bGV0IHQ9ZT09PW51bGw/XCJudWxsXCI6dHlwZW9mIGU7aWYodCE9PVwic3RyaW5nXCImJnQhPT1cIm9iamVjdFwiKXJldHVybmBVbmV4cGVjdGVkIGRvYyAnJHt0fScsIFxuRXhwZWN0ZWQgaXQgdG8gYmUgJ3N0cmluZycgb3IgJ29iamVjdCcuYDtpZihTZShlKSl0aHJvdyBuZXcgRXJyb3IoXCJkb2MgaXMgdmFsaWQuXCIpO2xldCByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKTtpZihyIT09XCJbb2JqZWN0IE9iamVjdF1cIilyZXR1cm5gVW5leHBlY3RlZCBkb2MgJyR7cn0nLmA7bGV0IG49d28oWy4uLk1yXS5tYXAocz0+YCcke3N9J2ApKTtyZXR1cm5gVW5leHBlY3RlZCBkb2MudHlwZSAnJHtlLnR5cGV9Jy5cbkV4cGVjdGVkIGl0IHRvIGJlICR7bn0uYH12YXIgV249Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiSW52YWxpZERvY0Vycm9yXCI7Y29uc3RydWN0b3IodCl7c3VwZXIoT28odCkpLHRoaXMuZG9jPXR9fSxkdD1Xbjt2YXIgaHU9e307ZnVuY3Rpb24gX28oZSx0LHIsbil7bGV0IHM9W2VdO2Zvcig7cy5sZW5ndGg+MDspe2xldCB1PXMucG9wKCk7aWYodT09PWh1KXtyKHMucG9wKCkpO2NvbnRpbnVlfXImJnMucHVzaCh1LGh1KTtsZXQgaT1TZSh1KTtpZighaSl0aHJvdyBuZXcgZHQodSk7aWYoKHQ9PW51bGw/dm9pZCAwOnQodSkpIT09ITEpc3dpdGNoKGkpe2Nhc2UgaGU6Y2FzZSBPZTp7bGV0IGE9aT09PWhlP3U6dS5wYXJ0cztmb3IobGV0IG89YS5sZW5ndGgscD1vLTE7cD49MDstLXApcy5wdXNoKGFbcF0pO2JyZWFrfWNhc2UgVGU6cy5wdXNoKHUuZmxhdENvbnRlbnRzLHUuYnJlYWtDb250ZW50cyk7YnJlYWs7Y2FzZSBtZTppZihuJiZ1LmV4cGFuZGVkU3RhdGVzKWZvcihsZXQgYT11LmV4cGFuZGVkU3RhdGVzLmxlbmd0aCxvPWEtMTtvPj0wOy0tbylzLnB1c2godS5leHBhbmRlZFN0YXRlc1tvXSk7ZWxzZSBzLnB1c2godS5jb250ZW50cyk7YnJlYWs7Y2FzZSAkZTpjYXNlIFZlOmNhc2UgUWU6Y2FzZSBnZTpjYXNlIHplOnMucHVzaCh1LmNvbnRlbnRzKTticmVhaztjYXNlIHFlOmNhc2Ugc3Q6Y2FzZSBLZTpjYXNlIFdlOmNhc2UgaWU6Y2FzZSBfZTpicmVhaztkZWZhdWx0OnRocm93IG5ldyBkdCh1KX19fXZhciBwcj1fbztmdW5jdGlvbiB5dChlLHQpe2lmKHR5cGVvZiBlPT1cInN0cmluZ1wiKXJldHVybiB0KGUpO2xldCByPW5ldyBNYXA7cmV0dXJuIG4oZSk7ZnVuY3Rpb24gbih1KXtpZihyLmhhcyh1KSlyZXR1cm4gci5nZXQodSk7bGV0IGk9cyh1KTtyZXR1cm4gci5zZXQodSxpKSxpfWZ1bmN0aW9uIHModSl7c3dpdGNoKFNlKHUpKXtjYXNlIGhlOnJldHVybiB0KHUubWFwKG4pKTtjYXNlIE9lOnJldHVybiB0KHsuLi51LHBhcnRzOnUucGFydHMubWFwKG4pfSk7Y2FzZSBUZTpyZXR1cm4gdCh7Li4udSxicmVha0NvbnRlbnRzOm4odS5icmVha0NvbnRlbnRzKSxmbGF0Q29udGVudHM6bih1LmZsYXRDb250ZW50cyl9KTtjYXNlIG1lOntsZXR7ZXhwYW5kZWRTdGF0ZXM6aSxjb250ZW50czphfT11O3JldHVybiBpPyhpPWkubWFwKG4pLGE9aVswXSk6YT1uKGEpLHQoey4uLnUsY29udGVudHM6YSxleHBhbmRlZFN0YXRlczppfSl9Y2FzZSAkZTpjYXNlIFZlOmNhc2UgUWU6Y2FzZSBnZTpjYXNlIHplOnJldHVybiB0KHsuLi51LGNvbnRlbnRzOm4odS5jb250ZW50cyl9KTtjYXNlIHFlOmNhc2Ugc3Q6Y2FzZSBLZTpjYXNlIFdlOmNhc2UgaWU6Y2FzZSBfZTpyZXR1cm4gdCh1KTtkZWZhdWx0OnRocm93IG5ldyBkdCh1KX19fWZ1bmN0aW9uIFN1KGUsdCxyKXtsZXQgbj1yLHM9ITE7ZnVuY3Rpb24gdShpKXtpZihzKXJldHVybiExO2xldCBhPXQoaSk7YSE9PXZvaWQgMCYmKHM9ITAsbj1hKX1yZXR1cm4gcHIoZSx1KSxufWZ1bmN0aW9uIHZvKGUpe2lmKGUudHlwZT09PW1lJiZlLmJyZWFrfHxlLnR5cGU9PT1pZSYmZS5oYXJkfHxlLnR5cGU9PT1fZSlyZXR1cm4hMH1mdW5jdGlvbiByZShlKXtyZXR1cm4gU3UoZSx2bywhMSl9ZnVuY3Rpb24gZ3UoZSl7aWYoZS5sZW5ndGg+MCl7bGV0IHQ9TSghMSxlLC0xKTshdC5leHBhbmRlZFN0YXRlcyYmIXQuYnJlYWsmJih0LmJyZWFrPVwicHJvcGFnYXRlZFwiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBCdShlKXtsZXQgdD1uZXcgU2V0LHI9W107ZnVuY3Rpb24gbih1KXtpZih1LnR5cGU9PT1fZSYmZ3UociksdS50eXBlPT09bWUpe2lmKHIucHVzaCh1KSx0Lmhhcyh1KSlyZXR1cm4hMTt0LmFkZCh1KX19ZnVuY3Rpb24gcyh1KXt1LnR5cGU9PT1tZSYmci5wb3AoKS5icmVhayYmZ3Uocil9cHIoZSxuLHMsITApfWZ1bmN0aW9uIGpvKGUpe3JldHVybiBlLnR5cGU9PT1pZSYmIWUuaGFyZD9lLnNvZnQ/XCJcIjpcIiBcIjplLnR5cGU9PT1UZT9lLmZsYXRDb250ZW50czplfWZ1bmN0aW9uIGNyKGUpe3JldHVybiB5dChlLGpvKX1mdW5jdGlvbiBNbyhlKXtzd2l0Y2goU2UoZSkpe2Nhc2UgT2U6aWYoZS5wYXJ0cy5ldmVyeSh0PT50PT09XCJcIikpcmV0dXJuXCJcIjticmVhaztjYXNlIG1lOmlmKCFlLmNvbnRlbnRzJiYhZS5pZCYmIWUuYnJlYWsmJiFlLmV4cGFuZGVkU3RhdGVzKXJldHVyblwiXCI7aWYoZS5jb250ZW50cy50eXBlPT09bWUmJmUuY29udGVudHMuaWQ9PT1lLmlkJiZlLmNvbnRlbnRzLmJyZWFrPT09ZS5icmVhayYmZS5jb250ZW50cy5leHBhbmRlZFN0YXRlcz09PWUuZXhwYW5kZWRTdGF0ZXMpcmV0dXJuIGUuY29udGVudHM7YnJlYWs7Y2FzZSAkZTpjYXNlIFZlOmNhc2UgUWU6Y2FzZSB6ZTppZighZS5jb250ZW50cylyZXR1cm5cIlwiO2JyZWFrO2Nhc2UgVGU6aWYoIWUuZmxhdENvbnRlbnRzJiYhZS5icmVha0NvbnRlbnRzKXJldHVyblwiXCI7YnJlYWs7Y2FzZSBoZTp7bGV0IHQ9W107Zm9yKGxldCByIG9mIGUpe2lmKCFyKWNvbnRpbnVlO2xldFtuLC4uLnNdPUFycmF5LmlzQXJyYXkocik/cjpbcl07dHlwZW9mIG49PVwic3RyaW5nXCImJnR5cGVvZiBNKCExLHQsLTEpPT1cInN0cmluZ1wiP3RbdC5sZW5ndGgtMV0rPW46dC5wdXNoKG4pLHQucHVzaCguLi5zKX1yZXR1cm4gdC5sZW5ndGg9PT0wP1wiXCI6dC5sZW5ndGg9PT0xP3RbMF06dH1jYXNlIHFlOmNhc2Ugc3Q6Y2FzZSBLZTpjYXNlIFdlOmNhc2UgaWU6Y2FzZSBnZTpjYXNlIF9lOmJyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IGR0KGUpfXJldHVybiBlfWZ1bmN0aW9uIFV0KGUpe3JldHVybiB5dChlLHQ9Pk1vKHQpKX1mdW5jdGlvbiB2ZShlLHQ9UnIpe3JldHVybiB5dChlLHI9PnR5cGVvZiByPT1cInN0cmluZ1wiP2IodCxyLnNwbGl0KGBcbmApKTpyKX1mdW5jdGlvbiBSbyhlKXtpZihlLnR5cGU9PT1pZSlyZXR1cm4hMH1mdW5jdGlvbiBidShlKXtyZXR1cm4gU3UoZSxSbywhMSl9ZnVuY3Rpb24gbHIoZSx0KXtyZXR1cm4gZS50eXBlPT09Z2U/ey4uLmUsY29udGVudHM6dChlLmNvbnRlbnRzKX06dChlKX1mdW5jdGlvbiBQdShlKXtsZXQgdD0hMDtyZXR1cm4gcHIoZSxyPT57c3dpdGNoKFNlKHIpKXtjYXNlIHFlOmlmKHI9PT1cIlwiKWJyZWFrO2Nhc2UgS2U6Y2FzZSBXZTpjYXNlIGllOmNhc2UgX2U6cmV0dXJuIHQ9ITEsITF9fSksdH12YXIgTm49KCk9Pnt9LFplPU5uLEduPU5uLGt1PU5uO2Z1bmN0aW9uIGYoZSl7cmV0dXJuIFplKGUpLHt0eXBlOlZlLGNvbnRlbnRzOmV9fWZ1bmN0aW9uIEJlKGUsdCl7cmV0dXJuIFplKHQpLHt0eXBlOiRlLGNvbnRlbnRzOnQsbjplfX1mdW5jdGlvbiBsKGUsdD17fSl7cmV0dXJuIFplKGUpLEduKHQuZXhwYW5kZWRTdGF0ZXMsITApLHt0eXBlOm1lLGlkOnQuaWQsY29udGVudHM6ZSxicmVhazohIXQuc2hvdWxkQnJlYWssZXhwYW5kZWRTdGF0ZXM6dC5leHBhbmRlZFN0YXRlc319ZnVuY3Rpb24gSXUoZSl7cmV0dXJuIEJlKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxlKX1mdW5jdGlvbiBKcihlKXtyZXR1cm4gQmUoLTEsZSl9ZnVuY3Rpb24gZXQoZSx0KXtyZXR1cm4gbChlWzBdLHsuLi50LGV4cGFuZGVkU3RhdGVzOmV9KX1mdW5jdGlvbiBxcihlKXtyZXR1cm4ga3UoZSkse3R5cGU6T2UscGFydHM6ZX19ZnVuY3Rpb24gQihlLHQ9XCJcIixyPXt9KXtyZXR1cm4gWmUoZSksdCE9PVwiXCImJlplKHQpLHt0eXBlOlRlLGJyZWFrQ29udGVudHM6ZSxmbGF0Q29udGVudHM6dCxncm91cElkOnIuZ3JvdXBJZH19ZnVuY3Rpb24geHQoZSx0KXtyZXR1cm4gWmUoZSkse3R5cGU6UWUsY29udGVudHM6ZSxncm91cElkOnQuZ3JvdXBJZCxuZWdhdGU6dC5uZWdhdGV9fWZ1bmN0aW9uIFVuKGUpe3JldHVybiBaZShlKSx7dHlwZTp6ZSxjb250ZW50czplfX12YXIgamU9e3R5cGU6V2V9LEVlPXt0eXBlOl9lfTt2YXIgWW49e3R5cGU6aWUsaGFyZDohMH0sSm89e3R5cGU6aWUsaGFyZDohMCxsaXRlcmFsOiEwfSx4PXt0eXBlOmllfSxFPXt0eXBlOmllLHNvZnQ6ITB9LEY9W1luLEVlXSxScj1bSm8sRWVdLG1yPXt0eXBlOnN0fTtmdW5jdGlvbiBiKGUsdCl7WmUoZSksR24odCk7bGV0IHI9W107Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspbiE9PTAmJnIucHVzaChlKSxyLnB1c2godFtuXSk7cmV0dXJuIHJ9ZnVuY3Rpb24gTHUoZSx0LHIpe1plKGUpO2xldCBuPWU7aWYodD4wKXtmb3IobGV0IHM9MDtzPE1hdGguZmxvb3IodC9yKTsrK3Mpbj1mKG4pO249QmUodCVyLG4pLG49QmUoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLG4pfXJldHVybiBufWZ1bmN0aW9uIHV0KGUsdCl7cmV0dXJuIFplKHQpLGU/e3R5cGU6Z2UsbGFiZWw6ZSxjb250ZW50czp0fTp0fWZ1bmN0aW9uIHFvKGUpe2xldCB0PWAqJHtlLnZhbHVlfSpgLnNwbGl0KGBcbmApO3JldHVybiB0Lmxlbmd0aD4xJiZ0LmV2ZXJ5KHI9PnIudHJpbVN0YXJ0KClbMF09PT1cIipcIil9dmFyIHd1PXFvO2Z1bmN0aW9uIE91KGUsdCl7bGV0IHI9ZS5ub2RlO2lmKEF0KHIpKXJldHVybiB0Lm9yaWdpbmFsVGV4dC5zbGljZShxKHIpLGsocikpLnRyaW1FbmQoKTtpZihlZShyKSlyZXR1cm4gd3Uocik/V28ocik6W1wiLypcIix2ZShyLnZhbHVlKSxcIiovXCJdO3Rocm93IG5ldyBFcnJvcihcIk5vdCBhIGNvbW1lbnQ6IFwiK0pTT04uc3RyaW5naWZ5KHIpKX1mdW5jdGlvbiBXbyhlKXtsZXQgdD1lLnZhbHVlLnNwbGl0KGBcbmApO3JldHVybltcIi8qXCIsYihGLHQubWFwKChyLG4pPT5uPT09MD9yLnRyaW1FbmQoKTpcIiBcIisobjx0Lmxlbmd0aC0xP3IudHJpbSgpOnIudHJpbVN0YXJ0KCkpKSksXCIqL1wiXX12YXIgem49e307eHIoem4se2VuZE9mTGluZTooKT0+Vm8sb3duTGluZTooKT0+SG8scmVtYWluaW5nOigpPT4kb30pO2Z1bmN0aW9uIE5vKGUpe2xldCB0PWUudHlwZXx8ZS5raW5kfHxcIih1bmtub3duIHR5cGUpXCIscj1TdHJpbmcoZS5uYW1lfHxlLmlkJiYodHlwZW9mIGUuaWQ9PVwib2JqZWN0XCI/ZS5pZC5uYW1lOmUuaWQpfHxlLmtleSYmKHR5cGVvZiBlLmtleT09XCJvYmplY3RcIj9lLmtleS5uYW1lOmUua2V5KXx8ZS52YWx1ZSYmKHR5cGVvZiBlLnZhbHVlPT1cIm9iamVjdFwiP1wiXCI6U3RyaW5nKGUudmFsdWUpKXx8ZS5vcGVyYXRvcnx8XCJcIik7cmV0dXJuIHIubGVuZ3RoPjIwJiYocj1yLnNsaWNlKDAsMTkpK1wiXFx1MjAyNlwiKSx0KyhyP1wiIFwiK3I6XCJcIil9ZnVuY3Rpb24gWG4oZSx0KXsoZS5jb21tZW50cz8/KGUuY29tbWVudHM9W10pKS5wdXNoKHQpLHQucHJpbnRlZD0hMSx0Lm5vZGVEZXNjcmlwdGlvbj1ObyhlKX1mdW5jdGlvbiBsZShlLHQpe3QubGVhZGluZz0hMCx0LnRyYWlsaW5nPSExLFhuKGUsdCl9ZnVuY3Rpb24gTWUoZSx0LHIpe3QubGVhZGluZz0hMSx0LnRyYWlsaW5nPSExLHImJih0Lm1hcmtlcj1yKSxYbihlLHQpfWZ1bmN0aW9uIFYoZSx0KXt0LmxlYWRpbmc9ITEsdC50cmFpbGluZz0hMCxYbihlLHQpfWZ1bmN0aW9uIEdvKGUsdCl7bGV0IHI9bnVsbCxuPXQ7Zm9yKDtuIT09cjspcj1uLG49WGUoZSxuKSxuPV90KGUsbiksbj12dChlLG4pLG49SGUoZSxuKTtyZXR1cm4gbn12YXIgaXQ9R287ZnVuY3Rpb24gVW8oZSx0KXtsZXQgcj1pdChlLHQpO3JldHVybiByPT09ITE/XCJcIjplLmNoYXJBdChyKX12YXIgYmU9VW87ZnVuY3Rpb24gWW8oZSx0LHIpe2ZvcihsZXQgbj10O248cjsrK24paWYoZS5jaGFyQXQobik9PT1gXG5gKXJldHVybiEwO3JldHVybiExfXZhciBkZT1ZbztmdW5jdGlvbiBYbyhlKXtyZXR1cm4gZWUoZSkmJmUudmFsdWVbMF09PT1cIipcIiYmL0AoPzp0eXBlfHNhdGlzZmllcylcXGIvdS50ZXN0KGUudmFsdWUpfXZhciBXcj1YbztmdW5jdGlvbiBIbyhlKXtyZXR1cm5bV3UsdnUsUnUsaXAsUW8sVm4sJG4sX3UsanUsY3Asb3AsUW4scXUsbHAsTXUsSnUsS24sem8sQXBdLnNvbWUodD0+dChlKSl9ZnVuY3Rpb24gVm8oZSl7cmV0dXJuW0tvLFJ1LHZ1LHF1LFZuLCRuLF91LGp1LEp1LGFwLHBwLFFuLERwLEtuLEZwLENwLFRwXS5zb21lKHQ9PnQoZSkpfWZ1bmN0aW9uICRvKGUpe3JldHVybltXdSxWbiwkbixabyx1cCxNdSxRbixzcCxucCxFcCxLbixmcF0uc29tZSh0PT50KGUpKX1mdW5jdGlvbiB3dChlLHQpe2xldCByPShlLmJvZHl8fGUucHJvcGVydGllcykuZmluZCgoe3R5cGU6bn0pPT5uIT09XCJFbXB0eVN0YXRlbWVudFwiKTtyP2xlKHIsdCk6TWUoZSx0KX1mdW5jdGlvbiBIbihlLHQpe2UudHlwZT09PVwiQmxvY2tTdGF0ZW1lbnRcIj93dChlLHQpOmxlKGUsdCl9ZnVuY3Rpb24gS28oe2NvbW1lbnQ6ZSxmb2xsb3dpbmdOb2RlOnR9KXtyZXR1cm4gdCYmV3IoZSk/KGxlKHQsZSksITApOiExfWZ1bmN0aW9uIFZuKHtjb21tZW50OmUscHJlY2VkaW5nTm9kZTp0LGVuY2xvc2luZ05vZGU6cixmb2xsb3dpbmdOb2RlOm4sdGV4dDpzfSl7aWYoKHI9PW51bGw/dm9pZCAwOnIudHlwZSkhPT1cIklmU3RhdGVtZW50XCJ8fCFuKXJldHVybiExO2lmKGJlKHMsayhlKSk9PT1cIilcIilyZXR1cm4gVih0LGUpLCEwO2lmKHQ9PT1yLmNvbnNlcXVlbnQmJm49PT1yLmFsdGVybmF0ZSl7bGV0IGk9aXQocyxrKHIuY29uc2VxdWVudCkpO2lmKHEoZSk8aXx8ci5hbHRlcm5hdGUudHlwZT09PVwiQmxvY2tTdGF0ZW1lbnRcIil7aWYodC50eXBlPT09XCJCbG9ja1N0YXRlbWVudFwiKVYodCxlKTtlbHNle2xldCBhPUF0KGUpfHxlLmxvYy5zdGFydC5saW5lPT09ZS5sb2MuZW5kLmxpbmUsbz1lLmxvYy5zdGFydC5saW5lPT09dC5sb2Muc3RhcnQubGluZTthJiZvP1YodCxlKTpNZShyLGUpfXJldHVybiEwfX1yZXR1cm4gbi50eXBlPT09XCJCbG9ja1N0YXRlbWVudFwiPyh3dChuLGUpLCEwKTpuLnR5cGU9PT1cIklmU3RhdGVtZW50XCI/KEhuKG4uY29uc2VxdWVudCxlKSwhMCk6ci5jb25zZXF1ZW50PT09bj8obGUobixlKSwhMCk6ITF9ZnVuY3Rpb24gJG4oe2NvbW1lbnQ6ZSxwcmVjZWRpbmdOb2RlOnQsZW5jbG9zaW5nTm9kZTpyLGZvbGxvd2luZ05vZGU6bix0ZXh0OnN9KXtyZXR1cm4ocj09bnVsbD92b2lkIDA6ci50eXBlKSE9PVwiV2hpbGVTdGF0ZW1lbnRcInx8IW4/ITE6YmUocyxrKGUpKT09PVwiKVwiPyhWKHQsZSksITApOm4udHlwZT09PVwiQmxvY2tTdGF0ZW1lbnRcIj8od3QobixlKSwhMCk6ci5ib2R5PT09bj8obGUobixlKSwhMCk6ITF9ZnVuY3Rpb24gX3Uoe2NvbW1lbnQ6ZSxwcmVjZWRpbmdOb2RlOnQsZW5jbG9zaW5nTm9kZTpyLGZvbGxvd2luZ05vZGU6bn0pe3JldHVybihyPT1udWxsP3ZvaWQgMDpyLnR5cGUpIT09XCJUcnlTdGF0ZW1lbnRcIiYmKHI9PW51bGw/dm9pZCAwOnIudHlwZSkhPT1cIkNhdGNoQ2xhdXNlXCJ8fCFuPyExOnIudHlwZT09PVwiQ2F0Y2hDbGF1c2VcIiYmdD8oVih0LGUpLCEwKTpuLnR5cGU9PT1cIkJsb2NrU3RhdGVtZW50XCI/KHd0KG4sZSksITApOm4udHlwZT09PVwiVHJ5U3RhdGVtZW50XCI/KEhuKG4uZmluYWxpemVyLGUpLCEwKTpuLnR5cGU9PT1cIkNhdGNoQ2xhdXNlXCI/KEhuKG4uYm9keSxlKSwhMCk6ITF9ZnVuY3Rpb24gUW8oe2NvbW1lbnQ6ZSxlbmNsb3NpbmdOb2RlOnQsZm9sbG93aW5nTm9kZTpyfSl7cmV0dXJuIFcodCkmJihyPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJJZGVudGlmaWVyXCI/KGxlKHQsZSksITApOiExfWZ1bmN0aW9uIHpvKHtjb21tZW50OmUsZW5jbG9zaW5nTm9kZTp0LGZvbGxvd2luZ05vZGU6cixvcHRpb25zOm59KXtyZXR1cm4hbi5leHBlcmltZW50YWxUZXJuYXJpZXN8fCEoKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwifHxKZSh0KSk/ITE6KHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwifHxKZShyKT8oTWUodCxlKSwhMCk6ITF9ZnVuY3Rpb24gdnUoe2NvbW1lbnQ6ZSxwcmVjZWRpbmdOb2RlOnQsZW5jbG9zaW5nTm9kZTpyLGZvbGxvd2luZ05vZGU6bix0ZXh0OnMsb3B0aW9uczp1fSl7bGV0IGk9dCYmIWRlKHMsayh0KSxxKGUpKTtyZXR1cm4oIXR8fCFpKSYmKChyPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cInx8SmUocikpJiZuP3UuZXhwZXJpbWVudGFsVGVybmFyaWVzJiZyLmFsdGVybmF0ZT09PW4mJiEoZWUoZSkmJiFkZSh1Lm9yaWdpbmFsVGV4dCxxKGUpLGsoZSkpKT8oTWUocixlKSwhMCk6KGxlKG4sZSksITApOiExfWZ1bmN0aW9uIFpvKHtjb21tZW50OmUscHJlY2VkaW5nTm9kZTp0LGVuY2xvc2luZ05vZGU6cn0pe3JldHVybiBDZShyKSYmci5zaG9ydGhhbmQmJnIua2V5PT09dCYmci52YWx1ZS50eXBlPT09XCJBc3NpZ25tZW50UGF0dGVyblwiPyhWKHIudmFsdWUubGVmdCxlKSwhMCk6ITF9dmFyIGVwPW5ldyBTZXQoW1wiQ2xhc3NEZWNsYXJhdGlvblwiLFwiQ2xhc3NFeHByZXNzaW9uXCIsXCJEZWNsYXJlQ2xhc3NcIixcIkRlY2xhcmVJbnRlcmZhY2VcIixcIkludGVyZmFjZURlY2xhcmF0aW9uXCIsXCJUU0ludGVyZmFjZURlY2xhcmF0aW9uXCJdKTtmdW5jdGlvbiBqdSh7Y29tbWVudDplLHByZWNlZGluZ05vZGU6dCxlbmNsb3NpbmdOb2RlOnIsZm9sbG93aW5nTm9kZTpufSl7aWYoZXAuaGFzKHI9PW51bGw/dm9pZCAwOnIudHlwZSkpe2lmKE8oci5kZWNvcmF0b3JzKSYmKG49PW51bGw/dm9pZCAwOm4udHlwZSkhPT1cIkRlY29yYXRvclwiKXJldHVybiBWKE0oITEsci5kZWNvcmF0b3JzLC0xKSxlKSwhMDtpZihyLmJvZHkmJm49PT1yLmJvZHkpcmV0dXJuIHd0KHIuYm9keSxlKSwhMDtpZihuKXtpZihyLnN1cGVyQ2xhc3MmJm49PT1yLnN1cGVyQ2xhc3MmJnQmJih0PT09ci5pZHx8dD09PXIudHlwZVBhcmFtZXRlcnMpKXJldHVybiBWKHQsZSksITA7Zm9yKGxldCBzIG9mW1wiaW1wbGVtZW50c1wiLFwiZXh0ZW5kc1wiLFwibWl4aW5zXCJdKWlmKHJbc10mJm49PT1yW3NdWzBdKXJldHVybiB0JiYodD09PXIuaWR8fHQ9PT1yLnR5cGVQYXJhbWV0ZXJzfHx0PT09ci5zdXBlckNsYXNzKT9WKHQsZSk6TWUocixlLHMpLCEwfX1yZXR1cm4hMX12YXIgdHA9bmV3IFNldChbXCJDbGFzc01ldGhvZFwiLFwiQ2xhc3NQcm9wZXJ0eVwiLFwiUHJvcGVydHlEZWZpbml0aW9uXCIsXCJUU0Fic3RyYWN0UHJvcGVydHlEZWZpbml0aW9uXCIsXCJUU0Fic3RyYWN0TWV0aG9kRGVmaW5pdGlvblwiLFwiVFNEZWNsYXJlTWV0aG9kXCIsXCJNZXRob2REZWZpbml0aW9uXCIsXCJDbGFzc0FjY2Vzc29yUHJvcGVydHlcIixcIkFjY2Vzc29yUHJvcGVydHlcIixcIlRTQWJzdHJhY3RBY2Nlc3NvclByb3BlcnR5XCIsXCJUU1BhcmFtZXRlclByb3BlcnR5XCJdKTtmdW5jdGlvbiBNdSh7Y29tbWVudDplLHByZWNlZGluZ05vZGU6dCxlbmNsb3NpbmdOb2RlOnIsdGV4dDpufSl7cmV0dXJuIHImJnQmJmJlKG4sayhlKSk9PT1cIihcIiYmKHIudHlwZT09PVwiUHJvcGVydHlcInx8ci50eXBlPT09XCJUU0RlY2xhcmVNZXRob2RcInx8ci50eXBlPT09XCJUU0Fic3RyYWN0TWV0aG9kRGVmaW5pdGlvblwiKSYmdC50eXBlPT09XCJJZGVudGlmaWVyXCImJnIua2V5PT09dCYmYmUobixrKHQpKSE9PVwiOlwiPyhWKHQsZSksITApOih0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJEZWNvcmF0b3JcIiYmdHAuaGFzKHI9PW51bGw/dm9pZCAwOnIudHlwZSkmJihBdChlKXx8ZS5wbGFjZW1lbnQ9PT1cIm93bkxpbmVcIik/KFYodCxlKSwhMCk6ITF9dmFyIHJwPW5ldyBTZXQoW1wiRnVuY3Rpb25EZWNsYXJhdGlvblwiLFwiRnVuY3Rpb25FeHByZXNzaW9uXCIsXCJDbGFzc01ldGhvZFwiLFwiTWV0aG9kRGVmaW5pdGlvblwiLFwiT2JqZWN0TWV0aG9kXCJdKTtmdW5jdGlvbiBucCh7Y29tbWVudDplLHByZWNlZGluZ05vZGU6dCxlbmNsb3NpbmdOb2RlOnIsdGV4dDpufSl7cmV0dXJuIGJlKG4sayhlKSkhPT1cIihcIj8hMTp0JiZycC5oYXMocj09bnVsbD92b2lkIDA6ci50eXBlKT8oVih0LGUpLCEwKTohMX1mdW5jdGlvbiBzcCh7Y29tbWVudDplLGVuY2xvc2luZ05vZGU6dCx0ZXh0OnJ9KXtpZigodD09bnVsbD92b2lkIDA6dC50eXBlKSE9PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIilyZXR1cm4hMTtsZXQgbj1pdChyLGsoZSkpO3JldHVybiBuIT09ITEmJnIuc2xpY2UobixuKzIpPT09XCI9PlwiPyhNZSh0LGUpLCEwKTohMX1mdW5jdGlvbiB1cCh7Y29tbWVudDplLGVuY2xvc2luZ05vZGU6dCx0ZXh0OnJ9KXtyZXR1cm4gYmUocixrKGUpKSE9PVwiKVwiPyExOnQmJihOdSh0KSYmeih0KS5sZW5ndGg9PT0wfHxtdCh0KSYmcGUodCkubGVuZ3RoPT09MCk/KE1lKHQsZSksITApOigodD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiTWV0aG9kRGVmaW5pdGlvblwifHwodD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiVFNBYnN0cmFjdE1ldGhvZERlZmluaXRpb25cIikmJnoodC52YWx1ZSkubGVuZ3RoPT09MD8oTWUodC52YWx1ZSxlKSwhMCk6ITF9ZnVuY3Rpb24gaXAoe2NvbW1lbnQ6ZSxwcmVjZWRpbmdOb2RlOnQsZW5jbG9zaW5nTm9kZTpyLGZvbGxvd2luZ05vZGU6bix0ZXh0OnN9KXtyZXR1cm4odD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiQ29tcG9uZW50VHlwZVBhcmFtZXRlclwiJiYoKHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIkRlY2xhcmVDb21wb25lbnRcInx8KHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIkNvbXBvbmVudFR5cGVBbm5vdGF0aW9uXCIpJiYobj09bnVsbD92b2lkIDA6bi50eXBlKSE9PVwiQ29tcG9uZW50VHlwZVBhcmFtZXRlclwiPyhWKHQsZSksITApOigodD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiQ29tcG9uZW50UGFyYW1ldGVyXCJ8fCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJSZXN0RWxlbWVudFwiKSYmKHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIkNvbXBvbmVudERlY2xhcmF0aW9uXCImJmJlKHMsayhlKSk9PT1cIilcIj8oVih0LGUpLCEwKTohMX1mdW5jdGlvbiBSdSh7Y29tbWVudDplLHByZWNlZGluZ05vZGU6dCxlbmNsb3NpbmdOb2RlOnIsZm9sbG93aW5nTm9kZTpuLHRleHQ6c30pe3JldHVybih0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJGdW5jdGlvblR5cGVQYXJhbVwiJiYocj09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiRnVuY3Rpb25UeXBlQW5ub3RhdGlvblwiJiYobj09bnVsbD92b2lkIDA6bi50eXBlKSE9PVwiRnVuY3Rpb25UeXBlUGFyYW1cIj8oVih0LGUpLCEwKTooKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIklkZW50aWZpZXJcInx8KHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIkFzc2lnbm1lbnRQYXR0ZXJuXCJ8fCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJPYmplY3RQYXR0ZXJuXCJ8fCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJBcnJheVBhdHRlcm5cInx8KHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIlJlc3RFbGVtZW50XCJ8fCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJUU1BhcmFtZXRlclByb3BlcnR5XCIpJiZOdShyKSYmYmUocyxrKGUpKT09PVwiKVwiPyhWKHQsZSksITApOiFlZShlKSYmKChyPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJGdW5jdGlvbkRlY2xhcmF0aW9uXCJ8fChyPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJGdW5jdGlvbkV4cHJlc3Npb25cInx8KHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIk9iamVjdE1ldGhvZFwiKSYmKG49PW51bGw/dm9pZCAwOm4udHlwZSk9PT1cIkJsb2NrU3RhdGVtZW50XCImJnIuYm9keT09PW4mJml0KHMsayhlKSk9PT1xKG4pPyh3dChuLGUpLCEwKTohMX1mdW5jdGlvbiBKdSh7Y29tbWVudDplLGVuY2xvc2luZ05vZGU6dH0pe3JldHVybih0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJMYWJlbGVkU3RhdGVtZW50XCI/KGxlKHQsZSksITApOiExfWZ1bmN0aW9uIEtuKHtjb21tZW50OmUsZW5jbG9zaW5nTm9kZTp0fSl7cmV0dXJuKCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJDb250aW51ZVN0YXRlbWVudFwifHwodD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiQnJlYWtTdGF0ZW1lbnRcIikmJiF0LmxhYmVsPyhWKHQsZSksITApOiExfWZ1bmN0aW9uIGFwKHtjb21tZW50OmUscHJlY2VkaW5nTm9kZTp0LGVuY2xvc2luZ05vZGU6cn0pe3JldHVybiBMKHIpJiZ0JiZyLmNhbGxlZT09PXQmJnIuYXJndW1lbnRzLmxlbmd0aD4wPyhsZShyLmFyZ3VtZW50c1swXSxlKSwhMCk6ITF9ZnVuY3Rpb24gb3Aoe2NvbW1lbnQ6ZSxwcmVjZWRpbmdOb2RlOnQsZW5jbG9zaW5nTm9kZTpyLGZvbGxvd2luZ05vZGU6bn0pe3JldHVybiB3ZShyKT8ob3IoZSkmJihuLnByZXR0aWVySWdub3JlPSEwLGUudW5pZ25vcmU9ITApLHQ/KFYodCxlKSwhMCk6ITEpOih3ZShuKSYmb3IoZSkmJihuLnR5cGVzWzBdLnByZXR0aWVySWdub3JlPSEwLGUudW5pZ25vcmU9ITApLCExKX1mdW5jdGlvbiBwcCh7Y29tbWVudDplLGVuY2xvc2luZ05vZGU6dH0pe3JldHVybiBDZSh0KT8obGUodCxlKSwhMCk6ITF9ZnVuY3Rpb24gUW4oe2NvbW1lbnQ6ZSxlbmNsb3NpbmdOb2RlOnQsYXN0OnIsaXNMYXN0Q29tbWVudDpufSl7dmFyIHM7cmV0dXJuKChzPXI9PW51bGw/dm9pZCAwOnIuYm9keSk9PW51bGw/dm9pZCAwOnMubGVuZ3RoKT09PTA/KG4/TWUocixlKTpsZShyLGUpLCEwKToodD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiUHJvZ3JhbVwiJiZ0LmJvZHkubGVuZ3RoPT09MCYmIU8odC5kaXJlY3RpdmVzKT8obj9NZSh0LGUpOmxlKHQsZSksITApOiExfWZ1bmN0aW9uIGNwKHtjb21tZW50OmUsZW5jbG9zaW5nTm9kZTp0fSl7cmV0dXJuKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIkZvckluU3RhdGVtZW50XCJ8fCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJGb3JPZlN0YXRlbWVudFwiPyhsZSh0LGUpLCEwKTohMX1mdW5jdGlvbiBxdSh7Y29tbWVudDplLHByZWNlZGluZ05vZGU6dCxlbmNsb3NpbmdOb2RlOnIsdGV4dDpufSl7aWYoKHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIkltcG9ydFNwZWNpZmllclwifHwocj09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiRXhwb3J0U3BlY2lmaWVyXCIpcmV0dXJuIGxlKHIsZSksITA7bGV0IHM9KHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIkltcG9ydFNwZWNpZmllclwiJiYocj09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiSW1wb3J0RGVjbGFyYXRpb25cIix1PSh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJFeHBvcnRTcGVjaWZpZXJcIiYmKHI9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIkV4cG9ydE5hbWVkRGVjbGFyYXRpb25cIjtyZXR1cm4oc3x8dSkmJloobixrKGUpKT8oVih0LGUpLCEwKTohMX1mdW5jdGlvbiBscCh7Y29tbWVudDplLGVuY2xvc2luZ05vZGU6dH0pe3JldHVybih0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJBc3NpZ25tZW50UGF0dGVyblwiPyhsZSh0LGUpLCEwKTohMX12YXIgbXA9bmV3IFNldChbXCJWYXJpYWJsZURlY2xhcmF0b3JcIixcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIsXCJUeXBlQWxpYXNcIixcIlRTVHlwZUFsaWFzRGVjbGFyYXRpb25cIl0pLHlwPW5ldyBTZXQoW1wiT2JqZWN0RXhwcmVzc2lvblwiLFwiUmVjb3JkRXhwcmVzc2lvblwiLFwiQXJyYXlFeHByZXNzaW9uXCIsXCJUdXBsZUV4cHJlc3Npb25cIixcIlRlbXBsYXRlTGl0ZXJhbFwiLFwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCIsXCJPYmplY3RUeXBlQW5ub3RhdGlvblwiLFwiVFNUeXBlTGl0ZXJhbFwiXSk7ZnVuY3Rpb24gRHAoe2NvbW1lbnQ6ZSxlbmNsb3NpbmdOb2RlOnQsZm9sbG93aW5nTm9kZTpyfSl7cmV0dXJuIG1wLmhhcyh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpJiZyJiYoeXAuaGFzKHIudHlwZSl8fGVlKGUpKT8obGUocixlKSwhMCk6ITF9ZnVuY3Rpb24gZnAoe2NvbW1lbnQ6ZSxlbmNsb3NpbmdOb2RlOnQsZm9sbG93aW5nTm9kZTpyLHRleHQ6bn0pe3JldHVybiFyJiYoKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIlRTTWV0aG9kU2lnbmF0dXJlXCJ8fCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJUU0RlY2xhcmVGdW5jdGlvblwifHwodD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiVFNBYnN0cmFjdE1ldGhvZERlZmluaXRpb25cIikmJmJlKG4sayhlKSk9PT1cIjtcIj8oVih0LGUpLCEwKTohMX1mdW5jdGlvbiBXdSh7Y29tbWVudDplLGVuY2xvc2luZ05vZGU6dCxmb2xsb3dpbmdOb2RlOnJ9KXtpZihvcihlKSYmKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIlRTTWFwcGVkVHlwZVwiJiYocj09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiVFNUeXBlUGFyYW1ldGVyXCImJnIuY29uc3RyYWludClyZXR1cm4gdC5wcmV0dGllcklnbm9yZT0hMCxlLnVuaWdub3JlPSEwLCEwfWZ1bmN0aW9uIEVwKHtjb21tZW50OmUscHJlY2VkaW5nTm9kZTp0LGVuY2xvc2luZ05vZGU6cixmb2xsb3dpbmdOb2RlOm59KXtyZXR1cm4ocj09bnVsbD92b2lkIDA6ci50eXBlKSE9PVwiVFNNYXBwZWRUeXBlXCI/ITE6KG49PW51bGw/dm9pZCAwOm4udHlwZSk9PT1cIlRTVHlwZVBhcmFtZXRlclwiJiZuLm5hbWU/KGxlKG4ubmFtZSxlKSwhMCk6KHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIlRTVHlwZVBhcmFtZXRlclwiJiZ0LmNvbnN0cmFpbnQ/KFYodC5jb25zdHJhaW50LGUpLCEwKTohMX1mdW5jdGlvbiBGcCh7Y29tbWVudDplLGVuY2xvc2luZ05vZGU6dCxmb2xsb3dpbmdOb2RlOnJ9KXtyZXR1cm4hdHx8dC50eXBlIT09XCJTd2l0Y2hDYXNlXCJ8fHQudGVzdHx8IXJ8fHIhPT10LmNvbnNlcXVlbnRbMF0/ITE6KHIudHlwZT09PVwiQmxvY2tTdGF0ZW1lbnRcIiYmQXQoZSk/d3QocixlKTpNZSh0LGUpLCEwKX1mdW5jdGlvbiBDcCh7Y29tbWVudDplLHByZWNlZGluZ05vZGU6dCxlbmNsb3NpbmdOb2RlOnIsZm9sbG93aW5nTm9kZTpufSl7cmV0dXJuIHdlKHQpJiYoKHIudHlwZT09PVwiVFNBcnJheVR5cGVcInx8ci50eXBlPT09XCJBcnJheVR5cGVBbm5vdGF0aW9uXCIpJiYhbnx8TnQocikpPyhWKE0oITEsdC50eXBlcywtMSksZSksITApOiExfWZ1bmN0aW9uIEFwKHtjb21tZW50OmUsZW5jbG9zaW5nTm9kZTp0LHByZWNlZGluZ05vZGU6cixmb2xsb3dpbmdOb2RlOm59KXtpZigoKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIk9iamVjdFBhdHRlcm5cInx8KHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIkFycmF5UGF0dGVyblwiKSYmKG49PW51bGw/dm9pZCAwOm4udHlwZSk9PT1cIlRTVHlwZUFubm90YXRpb25cIilyZXR1cm4gcj9WKHIsZSk6TWUodCxlKSwhMH1mdW5jdGlvbiBUcCh7Y29tbWVudDplLHByZWNlZGluZ05vZGU6dCxlbmNsb3NpbmdOb2RlOnIsZm9sbG93aW5nTm9kZTpufSl7dmFyIHM7aWYoIW4mJihyPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJVbmFyeUV4cHJlc3Npb25cIiYmKCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJMb2dpY2FsRXhwcmVzc2lvblwifHwodD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiQmluYXJ5RXhwcmVzc2lvblwiKSl7bGV0IHU9KChzPXIuYXJndW1lbnQubG9jKT09bnVsbD92b2lkIDA6cy5zdGFydC5saW5lKSE9PXQucmlnaHQubG9jLnN0YXJ0LmxpbmUsaT1BdChlKXx8ZS5sb2Muc3RhcnQubGluZT09PWUubG9jLmVuZC5saW5lLGE9ZS5sb2Muc3RhcnQubGluZT09PXQucmlnaHQubG9jLnN0YXJ0LmxpbmU7aWYodSYmaSYmYSlyZXR1cm4gVih0LnJpZ2h0LGUpLCEwfXJldHVybiExfXZhciBOdT1SKFtcIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCIsXCJGdW5jdGlvbkV4cHJlc3Npb25cIixcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIixcIk9iamVjdE1ldGhvZFwiLFwiQ2xhc3NNZXRob2RcIixcIlRTRGVjbGFyZUZ1bmN0aW9uXCIsXCJUU0NhbGxTaWduYXR1cmVEZWNsYXJhdGlvblwiLFwiVFNDb25zdHJ1Y3RTaWduYXR1cmVEZWNsYXJhdGlvblwiLFwiVFNNZXRob2RTaWduYXR1cmVcIixcIlRTQ29uc3RydWN0b3JUeXBlXCIsXCJUU0Z1bmN0aW9uVHlwZVwiLFwiVFNEZWNsYXJlTWV0aG9kXCJdKTt2YXIgZHA9bmV3IFNldChbXCJFbXB0eVN0YXRlbWVudFwiLFwiVGVtcGxhdGVFbGVtZW50XCIsXCJUU0VtcHR5Qm9keUZ1bmN0aW9uRXhwcmVzc2lvblwiLFwiQ2hhaW5FeHByZXNzaW9uXCJdKTtmdW5jdGlvbiB4cChlKXtyZXR1cm4hZHAuaGFzKGUudHlwZSl9ZnVuY3Rpb24gaHAoZSx0KXt2YXIgcjtpZigodC5wYXJzZXI9PT1cInR5cGVzY3JpcHRcInx8dC5wYXJzZXI9PT1cImZsb3dcInx8dC5wYXJzZXI9PT1cImFjb3JuXCJ8fHQucGFyc2VyPT09XCJlc3ByZWVcInx8dC5wYXJzZXI9PT1cIm1lcml5YWhcInx8dC5wYXJzZXI9PT1cIl9fYmFiZWxfZXN0cmVlXCIpJiZlLnR5cGU9PT1cIk1ldGhvZERlZmluaXRpb25cIiYmKChyPWUudmFsdWUpPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJGdW5jdGlvbkV4cHJlc3Npb25cIiYmeihlLnZhbHVlKS5sZW5ndGg9PT0wJiYhZS52YWx1ZS5yZXR1cm5UeXBlJiYhTyhlLnZhbHVlLnR5cGVQYXJhbWV0ZXJzKSYmZS52YWx1ZS5ib2R5KXJldHVyblsuLi5lLmRlY29yYXRvcnN8fFtdLGUua2V5LGUudmFsdWUuYm9keV19ZnVuY3Rpb24gWm4oZSl7bGV0e25vZGU6dCxwYXJlbnQ6cn09ZTtyZXR1cm4oWCh0KXx8ciYmKHIudHlwZT09PVwiSlNYU3ByZWFkQXR0cmlidXRlXCJ8fHIudHlwZT09PVwiSlNYU3ByZWFkQ2hpbGRcInx8d2Uocil8fChyLnR5cGU9PT1cIkNsYXNzRGVjbGFyYXRpb25cInx8ci50eXBlPT09XCJDbGFzc0V4cHJlc3Npb25cIikmJnIuc3VwZXJDbGFzcz09PXQpKSYmKCFMdCh0KXx8d2UocikpfWZ1bmN0aW9uIGdwKGUse3BhcnNlcjp0fSl7aWYodD09PVwiZmxvd1wifHx0PT09XCJiYWJlbC1mbG93XCIpcmV0dXJuIGU9WSghMSxlLC9bXFxzKF0vZ3UsXCJcIiksZT09PVwiXCJ8fGU9PT1cIi8qXCJ8fGU9PT1cIi8qOjpcIn1mdW5jdGlvbiBHdShlKXtzd2l0Y2goZSl7Y2FzZVwiY3JcIjpyZXR1cm5cIlxcclwiO2Nhc2VcImNybGZcIjpyZXR1cm5gXFxyXG5gO2RlZmF1bHQ6cmV0dXJuYFxuYH19dmFyIFBlPVN5bWJvbChcIk1PREVfQlJFQUtcIiksYXQ9U3ltYm9sKFwiTU9ERV9GTEFUXCIpLFl0PVN5bWJvbChcImN1cnNvclwiKSxlcz1TeW1ib2woXCJET0NfRklMTF9QUklOVEVEX0xFTkdUSFwiKTtmdW5jdGlvbiBVdSgpe3JldHVybnt2YWx1ZTpcIlwiLGxlbmd0aDowLHF1ZXVlOltdfX1mdW5jdGlvbiBTcChlLHQpe3JldHVybiB0cyhlLHt0eXBlOlwiaW5kZW50XCJ9LHQpfWZ1bmN0aW9uIEJwKGUsdCxyKXtyZXR1cm4gdD09PU51bWJlci5ORUdBVElWRV9JTkZJTklUWT9lLnJvb3R8fFV1KCk6dDwwP3RzKGUse3R5cGU6XCJkZWRlbnRcIn0scik6dD90LnR5cGU9PT1cInJvb3RcIj97Li4uZSxyb290OmV9OnRzKGUse3R5cGU6dHlwZW9mIHQ9PVwic3RyaW5nXCI/XCJzdHJpbmdBbGlnblwiOlwibnVtYmVyQWxpZ25cIixuOnR9LHIpOmV9ZnVuY3Rpb24gdHMoZSx0LHIpe2xldCBuPXQudHlwZT09PVwiZGVkZW50XCI/ZS5xdWV1ZS5zbGljZSgwLC0xKTpbLi4uZS5xdWV1ZSx0XSxzPVwiXCIsdT0wLGk9MCxhPTA7Zm9yKGxldCBjIG9mIG4pc3dpdGNoKGMudHlwZSl7Y2FzZVwiaW5kZW50XCI6eSgpLHIudXNlVGFicz9vKDEpOnAoci50YWJXaWR0aCk7YnJlYWs7Y2FzZVwic3RyaW5nQWxpZ25cIjp5KCkscys9Yy5uLHUrPWMubi5sZW5ndGg7YnJlYWs7Y2FzZVwibnVtYmVyQWxpZ25cIjppKz0xLGErPWMubjticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB0eXBlICcke2MudHlwZX0nYCl9cmV0dXJuIG0oKSx7Li4uZSx2YWx1ZTpzLGxlbmd0aDp1LHF1ZXVlOm59O2Z1bmN0aW9uIG8oYyl7cys9XCJcdFwiLnJlcGVhdChjKSx1Kz1yLnRhYldpZHRoKmN9ZnVuY3Rpb24gcChjKXtzKz1cIiBcIi5yZXBlYXQoYyksdSs9Y31mdW5jdGlvbiB5KCl7ci51c2VUYWJzP0QoKTptKCl9ZnVuY3Rpb24gRCgpe2k+MCYmbyhpKSxDKCl9ZnVuY3Rpb24gbSgpe2E+MCYmcChhKSxDKCl9ZnVuY3Rpb24gQygpe2k9MCxhPTB9fWZ1bmN0aW9uIHJzKGUpe2xldCB0PTAscj0wLG49ZS5sZW5ndGg7ZTpmb3IoO24tLTspe2xldCBzPWVbbl07aWYocz09PVl0KXtyKys7Y29udGludWV9Zm9yKGxldCB1PXMubGVuZ3RoLTE7dT49MDt1LS0pe2xldCBpPXNbdV07aWYoaT09PVwiIFwifHxpPT09XCJcdFwiKXQrKztlbHNle2Vbbl09cy5zbGljZSgwLHUrMSk7YnJlYWsgZX19fWlmKHQ+MHx8cj4wKWZvcihlLmxlbmd0aD1uKzE7ci0tID4wOyllLnB1c2goWXQpO3JldHVybiB0fWZ1bmN0aW9uIE5yKGUsdCxyLG4scyx1KXtpZihyPT09TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKXJldHVybiEwO2xldCBpPXQubGVuZ3RoLGE9W2VdLG89W107Zm9yKDtyPj0wOyl7aWYoYS5sZW5ndGg9PT0wKXtpZihpPT09MClyZXR1cm4hMDthLnB1c2godFstLWldKTtjb250aW51ZX1sZXR7bW9kZTpwLGRvYzp5fT1hLnBvcCgpLEQ9U2UoeSk7c3dpdGNoKEQpe2Nhc2UgcWU6by5wdXNoKHkpLHItPXJ0KHkpO2JyZWFrO2Nhc2UgaGU6Y2FzZSBPZTp7bGV0IG09RD09PWhlP3k6eS5wYXJ0cyxDPXlbZXNdPz8wO2ZvcihsZXQgYz1tLmxlbmd0aC0xO2M+PUM7Yy0tKWEucHVzaCh7bW9kZTpwLGRvYzptW2NdfSk7YnJlYWt9Y2FzZSBWZTpjYXNlICRlOmNhc2UgUWU6Y2FzZSBnZTphLnB1c2goe21vZGU6cCxkb2M6eS5jb250ZW50c30pO2JyZWFrO2Nhc2UgS2U6cis9cnMobyk7YnJlYWs7Y2FzZSBtZTp7aWYodSYmeS5icmVhaylyZXR1cm4hMTtsZXQgbT15LmJyZWFrP1BlOnAsQz15LmV4cGFuZGVkU3RhdGVzJiZtPT09UGU/TSghMSx5LmV4cGFuZGVkU3RhdGVzLC0xKTp5LmNvbnRlbnRzO2EucHVzaCh7bW9kZTptLGRvYzpDfSk7YnJlYWt9Y2FzZSBUZTp7bGV0IEM9KHkuZ3JvdXBJZD9zW3kuZ3JvdXBJZF18fGF0OnApPT09UGU/eS5icmVha0NvbnRlbnRzOnkuZmxhdENvbnRlbnRzO0MmJmEucHVzaCh7bW9kZTpwLGRvYzpDfSk7YnJlYWt9Y2FzZSBpZTppZihwPT09UGV8fHkuaGFyZClyZXR1cm4hMDt5LnNvZnR8fChvLnB1c2goXCIgXCIpLHItLSk7YnJlYWs7Y2FzZSB6ZTpuPSEwO2JyZWFrO2Nhc2UgV2U6aWYobilyZXR1cm4hMTticmVha319cmV0dXJuITF9ZnVuY3Rpb24gbnMoZSx0KXtsZXQgcj17fSxuPXQucHJpbnRXaWR0aCxzPUd1KHQuZW5kT2ZMaW5lKSx1PTAsaT1be2luZDpVdSgpLG1vZGU6UGUsZG9jOmV9XSxhPVtdLG89ITEscD1bXSx5PTA7Zm9yKEJ1KGUpO2kubGVuZ3RoPjA7KXtsZXR7aW5kOm0sbW9kZTpDLGRvYzpjfT1pLnBvcCgpO3N3aXRjaChTZShjKSl7Y2FzZSBxZTp7bGV0IEE9cyE9PWBcbmA/WSghMSxjLGBcbmAscyk6YzthLnB1c2goQSksaS5sZW5ndGg+MCYmKHUrPXJ0KEEpKTticmVha31jYXNlIGhlOmZvcihsZXQgQT1jLmxlbmd0aC0xO0E+PTA7QS0tKWkucHVzaCh7aW5kOm0sbW9kZTpDLGRvYzpjW0FdfSk7YnJlYWs7Y2FzZSBzdDppZih5Pj0yKXRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSB0b28gbWFueSAnY3Vyc29yJyBpbiBkb2MuXCIpO2EucHVzaChZdCkseSsrO2JyZWFrO2Nhc2UgVmU6aS5wdXNoKHtpbmQ6U3AobSx0KSxtb2RlOkMsZG9jOmMuY29udGVudHN9KTticmVhaztjYXNlICRlOmkucHVzaCh7aW5kOkJwKG0sYy5uLHQpLG1vZGU6Qyxkb2M6Yy5jb250ZW50c30pO2JyZWFrO2Nhc2UgS2U6dS09cnMoYSk7YnJlYWs7Y2FzZSBtZTpzd2l0Y2goQyl7Y2FzZSBhdDppZighbyl7aS5wdXNoKHtpbmQ6bSxtb2RlOmMuYnJlYWs/UGU6YXQsZG9jOmMuY29udGVudHN9KTticmVha31jYXNlIFBlOntvPSExO2xldCBBPXtpbmQ6bSxtb2RlOmF0LGRvYzpjLmNvbnRlbnRzfSxkPW4tdSxTPXAubGVuZ3RoPjA7aWYoIWMuYnJlYWsmJk5yKEEsaSxkLFMscikpaS5wdXNoKEEpO2Vsc2UgaWYoYy5leHBhbmRlZFN0YXRlcyl7bGV0IGc9TSghMSxjLmV4cGFuZGVkU3RhdGVzLC0xKTtpZihjLmJyZWFrKXtpLnB1c2goe2luZDptLG1vZGU6UGUsZG9jOmd9KTticmVha31lbHNlIGZvcihsZXQgXz0xO188Yy5leHBhbmRlZFN0YXRlcy5sZW5ndGgrMTtfKyspaWYoXz49Yy5leHBhbmRlZFN0YXRlcy5sZW5ndGgpe2kucHVzaCh7aW5kOm0sbW9kZTpQZSxkb2M6Z30pO2JyZWFrfWVsc2V7bGV0IHY9Yy5leHBhbmRlZFN0YXRlc1tfXSxqPXtpbmQ6bSxtb2RlOmF0LGRvYzp2fTtpZihOcihqLGksZCxTLHIpKXtpLnB1c2goaik7YnJlYWt9fX1lbHNlIGkucHVzaCh7aW5kOm0sbW9kZTpQZSxkb2M6Yy5jb250ZW50c30pO2JyZWFrfX1jLmlkJiYocltjLmlkXT1NKCExLGksLTEpLm1vZGUpO2JyZWFrO2Nhc2UgT2U6e2xldCBBPW4tdSxkPWNbZXNdPz8wLHtwYXJ0czpTfT1jLGc9Uy5sZW5ndGgtZDtpZihnPT09MClicmVhaztsZXQgXz1TW2QrMF0sdj1TW2QrMV0saj17aW5kOm0sbW9kZTphdCxkb2M6X30sST17aW5kOm0sbW9kZTpQZSxkb2M6X30sRz1OcihqLFtdLEEscC5sZW5ndGg+MCxyLCEwKTtpZihnPT09MSl7Rz9pLnB1c2goaik6aS5wdXNoKEkpO2JyZWFrfWxldCBQPXtpbmQ6bSxtb2RlOmF0LGRvYzp2fSxOPXtpbmQ6bSxtb2RlOlBlLGRvYzp2fTtpZihnPT09Mil7Rz9pLnB1c2goUCxqKTppLnB1c2goTixJKTticmVha31sZXQgdWU9U1tkKzJdLFE9e2luZDptLG1vZGU6Qyxkb2M6ey4uLmMsW2VzXTpkKzJ9fTtOcih7aW5kOm0sbW9kZTphdCxkb2M6W18sdix1ZV19LFtdLEEscC5sZW5ndGg+MCxyLCEwKT9pLnB1c2goUSxQLGopOkc/aS5wdXNoKFEsTixqKTppLnB1c2goUSxOLEkpO2JyZWFrfWNhc2UgVGU6Y2FzZSBRZTp7bGV0IEE9Yy5ncm91cElkP3JbYy5ncm91cElkXTpDO2lmKEE9PT1QZSl7bGV0IGQ9Yy50eXBlPT09VGU/Yy5icmVha0NvbnRlbnRzOmMubmVnYXRlP2MuY29udGVudHM6ZihjLmNvbnRlbnRzKTtkJiZpLnB1c2goe2luZDptLG1vZGU6Qyxkb2M6ZH0pfWlmKEE9PT1hdCl7bGV0IGQ9Yy50eXBlPT09VGU/Yy5mbGF0Q29udGVudHM6Yy5uZWdhdGU/ZihjLmNvbnRlbnRzKTpjLmNvbnRlbnRzO2QmJmkucHVzaCh7aW5kOm0sbW9kZTpDLGRvYzpkfSl9YnJlYWt9Y2FzZSB6ZTpwLnB1c2goe2luZDptLG1vZGU6Qyxkb2M6Yy5jb250ZW50c30pO2JyZWFrO2Nhc2UgV2U6cC5sZW5ndGg+MCYmaS5wdXNoKHtpbmQ6bSxtb2RlOkMsZG9jOllufSk7YnJlYWs7Y2FzZSBpZTpzd2l0Y2goQyl7Y2FzZSBhdDppZihjLmhhcmQpbz0hMDtlbHNle2Muc29mdHx8KGEucHVzaChcIiBcIiksdSs9MSk7YnJlYWt9Y2FzZSBQZTppZihwLmxlbmd0aD4wKXtpLnB1c2goe2luZDptLG1vZGU6Qyxkb2M6Y30sLi4ucC5yZXZlcnNlKCkpLHAubGVuZ3RoPTA7YnJlYWt9Yy5saXRlcmFsP20ucm9vdD8oYS5wdXNoKHMsbS5yb290LnZhbHVlKSx1PW0ucm9vdC5sZW5ndGgpOihhLnB1c2gocyksdT0wKToodS09cnMoYSksYS5wdXNoKHMrbS52YWx1ZSksdT1tLmxlbmd0aCk7YnJlYWt9YnJlYWs7Y2FzZSBnZTppLnB1c2goe2luZDptLG1vZGU6Qyxkb2M6Yy5jb250ZW50c30pO2JyZWFrO2Nhc2UgX2U6YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgZHQoYyl9aS5sZW5ndGg9PT0wJiZwLmxlbmd0aD4wJiYoaS5wdXNoKC4uLnAucmV2ZXJzZSgpKSxwLmxlbmd0aD0wKX1sZXQgRD1hLmluZGV4T2YoWXQpO2lmKEQhPT0tMSl7bGV0IG09YS5pbmRleE9mKFl0LEQrMSk7aWYobT09PS0xKXJldHVybntmb3JtYXR0ZWQ6YS5maWx0ZXIoZD0+ZCE9PVl0KS5qb2luKFwiXCIpfTtsZXQgQz1hLnNsaWNlKDAsRCkuam9pbihcIlwiKSxjPWEuc2xpY2UoRCsxLG0pLmpvaW4oXCJcIiksQT1hLnNsaWNlKG0rMSkuam9pbihcIlwiKTtyZXR1cm57Zm9ybWF0dGVkOkMrYytBLGN1cnNvck5vZGVTdGFydDpDLmxlbmd0aCxjdXJzb3JOb2RlVGV4dDpjfX1yZXR1cm57Zm9ybWF0dGVkOmEuam9pbihcIlwiKX19ZnVuY3Rpb24gYnAoZSx0LHI9MCl7bGV0IG49MDtmb3IobGV0IHM9cjtzPGUubGVuZ3RoOysrcyllW3NdPT09XCJcdFwiP249bit0LW4ldDpuKys7cmV0dXJuIG59dmFyIFl1PWJwO2Z1bmN0aW9uIFBwKGUsdCl7bGV0IHI9ZS5sYXN0SW5kZXhPZihgXG5gKTtyZXR1cm4gcj09PS0xPzA6WXUoZS5zbGljZShyKzEpLm1hdGNoKC9eW1xcdCBdKi91KVswXSx0KX12YXIgWHU9UHA7ZnVuY3Rpb24gR3IoZSx0LHIpe2xldHtub2RlOm59PWU7aWYobi50eXBlPT09XCJUZW1wbGF0ZUxpdGVyYWxcIiYmTHAoZSkpe2xldCBwPWtwKGUscix0KTtpZihwKXJldHVybiBwfWxldCB1PVwiZXhwcmVzc2lvbnNcIjtuLnR5cGU9PT1cIlRTVGVtcGxhdGVMaXRlcmFsVHlwZVwiJiYodT1cInR5cGVzXCIpO2xldCBpPVtdLGE9ZS5tYXAodCx1KTtpLnB1c2goamUsXCJgXCIpO2xldCBvPTA7cmV0dXJuIGUuZWFjaCgoe2luZGV4OnAsbm9kZTp5fSk9PntpZihpLnB1c2godCgpKSx5LnRhaWwpcmV0dXJuO2xldHt0YWJXaWR0aDpEfT1yLG09eS52YWx1ZS5yYXcsQz1tLmluY2x1ZGVzKGBcbmApP1h1KG0sRCk6bztvPUM7bGV0IGM9YVtwXSxBPW5bdV1bcF0sZD1kZShyLm9yaWdpbmFsVGV4dCxrKHkpLHEobi5xdWFzaXNbcCsxXSkpO2lmKCFkKXtsZXQgZz1ucyhjLHsuLi5yLHByaW50V2lkdGg6TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZfSkuZm9ybWF0dGVkO2cuaW5jbHVkZXMoYFxuYCk/ZD0hMDpjPWd9ZCYmKFQoQSl8fEEudHlwZT09PVwiSWRlbnRpZmllclwifHxXKEEpfHxBLnR5cGU9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwifHxBLnR5cGU9PT1cIlNlcXVlbmNlRXhwcmVzc2lvblwifHxBZShBKXx8RGUoQSkpJiYoYz1bZihbRSxjXSksRV0pO2xldCBTPUM9PT0wJiZtLmVuZHNXaXRoKGBcbmApP0JlKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxjKTpMdShjLEMsRCk7aS5wdXNoKGwoW1wiJHtcIixTLGplLFwifVwiXSkpfSxcInF1YXNpc1wiKSxpLnB1c2goXCJgXCIpLGl9ZnVuY3Rpb24gSHUoZSx0KXtsZXQgcj10KFwicXVhc2lcIik7cmV0dXJuIHV0KHIubGFiZWwmJnt0YWdnZWQ6ITAsLi4uci5sYWJlbH0sW3QoXCJ0YWdcIiksdChlLm5vZGUudHlwZUFyZ3VtZW50cz9cInR5cGVBcmd1bWVudHNcIjpcInR5cGVQYXJhbWV0ZXJzXCIpLGplLHJdKX1mdW5jdGlvbiBrcChlLHQscil7bGV0e25vZGU6bn09ZSxzPW4ucXVhc2lzWzBdLnZhbHVlLnJhdy50cmltKCkuc3BsaXQoL1xccypcXHxcXHMqL3UpO2lmKHMubGVuZ3RoPjF8fHMuc29tZSh1PT51Lmxlbmd0aD4wKSl7dC5fX2luSmVzdEVhY2g9ITA7bGV0IHU9ZS5tYXAocixcImV4cHJlc3Npb25zXCIpO3QuX19pbkplc3RFYWNoPSExO2xldCBpPVtdLGE9dS5tYXAobT0+XCIke1wiK25zKG0sey4uLnQscHJpbnRXaWR0aDpOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksZW5kT2ZMaW5lOlwibGZcIn0pLmZvcm1hdHRlZCtcIn1cIiksbz1be2hhc0xpbmVCcmVhazohMSxjZWxsczpbXX1dO2ZvcihsZXQgbT0xO208bi5xdWFzaXMubGVuZ3RoO20rKyl7bGV0IEM9TSghMSxvLC0xKSxjPWFbbS0xXTtDLmNlbGxzLnB1c2goYyksYy5pbmNsdWRlcyhgXG5gKSYmKEMuaGFzTGluZUJyZWFrPSEwKSxuLnF1YXNpc1ttXS52YWx1ZS5yYXcuaW5jbHVkZXMoYFxuYCkmJm8ucHVzaCh7aGFzTGluZUJyZWFrOiExLGNlbGxzOltdfSl9bGV0IHA9TWF0aC5tYXgocy5sZW5ndGgsLi4uby5tYXAobT0+bS5jZWxscy5sZW5ndGgpKSx5PUFycmF5LmZyb20oe2xlbmd0aDpwfSkuZmlsbCgwKSxEPVt7Y2VsbHM6c30sLi4uby5maWx0ZXIobT0+bS5jZWxscy5sZW5ndGg+MCldO2ZvcihsZXR7Y2VsbHM6bX1vZiBELmZpbHRlcihDPT4hQy5oYXNMaW5lQnJlYWspKWZvcihsZXRbQyxjXW9mIG0uZW50cmllcygpKXlbQ109TWF0aC5tYXgoeVtDXSxydChjKSk7cmV0dXJuIGkucHVzaChqZSxcImBcIixmKFtGLGIoRixELm1hcChtPT5iKFwiIHwgXCIsbS5jZWxscy5tYXAoKEMsYyk9Pm0uaGFzTGluZUJyZWFrP0M6QytcIiBcIi5yZXBlYXQoeVtjXS1ydChDKSkpKSkpXSksRixcImBcIiksaX19ZnVuY3Rpb24gSXAoZSx0KXtsZXR7bm9kZTpyfT1lLG49dCgpO3JldHVybiBUKHIpJiYobj1sKFtmKFtFLG5dKSxFXSkpLFtcIiR7XCIsbixqZSxcIn1cIl19ZnVuY3Rpb24gWHQoZSx0KXtyZXR1cm4gZS5tYXAocj0+SXAocix0KSxcImV4cHJlc3Npb25zXCIpfWZ1bmN0aW9uIFVyKGUsdCl7cmV0dXJuIHl0KGUscj0+dHlwZW9mIHI9PVwic3RyaW5nXCI/dD9ZKCExLHIsLyhcXFxcKilgL2d1LFwiJDEkMVxcXFxgXCIpOnNzKHIpOnIpfWZ1bmN0aW9uIHNzKGUpe3JldHVybiBZKCExLGUsLyhbXFxcXGBdfFxcJFxceykvZ3UsU3RyaW5nLnJhd2BcXCQxYCl9ZnVuY3Rpb24gTHAoe25vZGU6ZSxwYXJlbnQ6dH0pe2xldCByPS9eW2Z4XT8oPzpkZXNjcmliZXxpdHx0ZXN0KSQvdTtyZXR1cm4gdC50eXBlPT09XCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIiYmdC5xdWFzaT09PWUmJnQudGFnLnR5cGU9PT1cIk1lbWJlckV4cHJlc3Npb25cIiYmdC50YWcucHJvcGVydHkudHlwZT09PVwiSWRlbnRpZmllclwiJiZ0LnRhZy5wcm9wZXJ0eS5uYW1lPT09XCJlYWNoXCImJih0LnRhZy5vYmplY3QudHlwZT09PVwiSWRlbnRpZmllclwiJiZyLnRlc3QodC50YWcub2JqZWN0Lm5hbWUpfHx0LnRhZy5vYmplY3QudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwiJiZ0LnRhZy5vYmplY3QucHJvcGVydHkudHlwZT09PVwiSWRlbnRpZmllclwiJiYodC50YWcub2JqZWN0LnByb3BlcnR5Lm5hbWU9PT1cIm9ubHlcInx8dC50YWcub2JqZWN0LnByb3BlcnR5Lm5hbWU9PT1cInNraXBcIikmJnQudGFnLm9iamVjdC5vYmplY3QudHlwZT09PVwiSWRlbnRpZmllclwiJiZyLnRlc3QodC50YWcub2JqZWN0Lm9iamVjdC5uYW1lKSl9dmFyIGlzPVsoZSx0KT0+ZS50eXBlPT09XCJPYmplY3RFeHByZXNzaW9uXCImJnQ9PT1cInByb3BlcnRpZXNcIiwoZSx0KT0+ZS50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiJiZlLmNhbGxlZS50eXBlPT09XCJJZGVudGlmaWVyXCImJmUuY2FsbGVlLm5hbWU9PT1cIkNvbXBvbmVudFwiJiZ0PT09XCJhcmd1bWVudHNcIiwoZSx0KT0+ZS50eXBlPT09XCJEZWNvcmF0b3JcIiYmdD09PVwiZXhwcmVzc2lvblwiXTtmdW5jdGlvbiBWdShlKXtsZXQgdD1uPT5uLnR5cGU9PT1cIlRlbXBsYXRlTGl0ZXJhbFwiLHI9KG4scyk9PkNlKG4pJiYhbi5jb21wdXRlZCYmbi5rZXkudHlwZT09PVwiSWRlbnRpZmllclwiJiZuLmtleS5uYW1lPT09XCJzdHlsZXNcIiYmcz09PVwidmFsdWVcIjtyZXR1cm4gZS5tYXRjaCh0LChuLHMpPT5VKG4pJiZzPT09XCJlbGVtZW50c1wiLHIsLi4uaXMpfHxlLm1hdGNoKHQsciwuLi5pcyl9ZnVuY3Rpb24gJHUoZSl7cmV0dXJuIGUubWF0Y2godD0+dC50eXBlPT09XCJUZW1wbGF0ZUxpdGVyYWxcIiwodCxyKT0+Q2UodCkmJiF0LmNvbXB1dGVkJiZ0LmtleS50eXBlPT09XCJJZGVudGlmaWVyXCImJnQua2V5Lm5hbWU9PT1cInRlbXBsYXRlXCImJnI9PT1cInZhbHVlXCIsLi4uaXMpfWZ1bmN0aW9uIHVzKGUsdCl7cmV0dXJuIFQoZSxoLkJsb2NrfGguTGVhZGluZywoe3ZhbHVlOnJ9KT0+cj09PWAgJHt0fSBgKX1mdW5jdGlvbiBZcih7bm9kZTplLHBhcmVudDp0fSxyKXtyZXR1cm4gdXMoZSxyKXx8d3AodCkmJnVzKHQscil8fHQudHlwZT09PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiJiZ1cyh0LHIpfWZ1bmN0aW9uIHdwKGUpe3JldHVybiBlLnR5cGU9PT1cIkFzQ29uc3RFeHByZXNzaW9uXCJ8fGUudHlwZT09PVwiVFNBc0V4cHJlc3Npb25cIiYmZS50eXBlQW5ub3RhdGlvbi50eXBlPT09XCJUU1R5cGVSZWZlcmVuY2VcIiYmZS50eXBlQW5ub3RhdGlvbi50eXBlTmFtZS50eXBlPT09XCJJZGVudGlmaWVyXCImJmUudHlwZUFubm90YXRpb24udHlwZU5hbWUubmFtZT09PVwiY29uc3RcIn1hc3luYyBmdW5jdGlvbiBPcChlLHQscil7bGV0e25vZGU6bn09cixzPW4ucXVhc2lzLm1hcCh5PT55LnZhbHVlLnJhdyksdT0wLGk9cy5yZWR1Y2UoKHksRCxtKT0+bT09PTA/RDp5K1wiQHByZXR0aWVyLXBsYWNlaG9sZGVyLVwiK3UrKytcIi1pZFwiK0QsXCJcIiksYT1hd2FpdCBlKGkse3BhcnNlcjpcInNjc3NcIn0pLG89WHQocix0KSxwPV9wKGEsbyk7aWYoIXApdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgaW5zZXJ0IGFsbCB0aGUgZXhwcmVzc2lvbnNcIik7cmV0dXJuW1wiYFwiLGYoW0YscF0pLEUsXCJgXCJdfWZ1bmN0aW9uIF9wKGUsdCl7aWYoIU8odCkpcmV0dXJuIGU7bGV0IHI9MCxuPXl0KFV0KGUpLHM9PnR5cGVvZiBzIT1cInN0cmluZ1wifHwhcy5pbmNsdWRlcyhcIkBwcmV0dGllci1wbGFjZWhvbGRlclwiKT9zOnMuc3BsaXQoL0BwcmV0dGllci1wbGFjZWhvbGRlci0oXFxkKyktaWQvdSkubWFwKCh1LGkpPT5pJTI9PT0wP3ZlKHUpOihyKyssdFt1XSkpKTtyZXR1cm4gdC5sZW5ndGg9PT1yP246bnVsbH1mdW5jdGlvbiB2cCh7bm9kZTplLHBhcmVudDp0LGdyYW5kcGFyZW50OnJ9KXtyZXR1cm4gciYmZS5xdWFzaXMmJnQudHlwZT09PVwiSlNYRXhwcmVzc2lvbkNvbnRhaW5lclwiJiZyLnR5cGU9PT1cIkpTWEVsZW1lbnRcIiYmci5vcGVuaW5nRWxlbWVudC5uYW1lLm5hbWU9PT1cInN0eWxlXCImJnIub3BlbmluZ0VsZW1lbnQuYXR0cmlidXRlcy5zb21lKG49Pm4udHlwZT09PVwiSlNYQXR0cmlidXRlXCImJm4ubmFtZS5uYW1lPT09XCJqc3hcIil8fCh0PT1udWxsP3ZvaWQgMDp0LnR5cGUpPT09XCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIiYmdC50YWcudHlwZT09PVwiSWRlbnRpZmllclwiJiZ0LnRhZy5uYW1lPT09XCJjc3NcInx8KHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiJiZ0LnRhZy50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCImJnQudGFnLm9iamVjdC5uYW1lPT09XCJjc3NcIiYmKHQudGFnLnByb3BlcnR5Lm5hbWU9PT1cImdsb2JhbFwifHx0LnRhZy5wcm9wZXJ0eS5uYW1lPT09XCJyZXNvbHZlXCIpfWZ1bmN0aW9uIFhyKGUpe3JldHVybiBlLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmZS5uYW1lPT09XCJzdHlsZWRcIn1mdW5jdGlvbiBLdShlKXtyZXR1cm4vXltBLVpdL3UudGVzdChlLm9iamVjdC5uYW1lKSYmZS5wcm9wZXJ0eS5uYW1lPT09XCJleHRlbmRcIn1mdW5jdGlvbiBqcCh7cGFyZW50OmV9KXtpZighZXx8ZS50eXBlIT09XCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIilyZXR1cm4hMTtsZXQgdD1lLnRhZy50eXBlPT09XCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiP2UudGFnLmV4cHJlc3Npb246ZS50YWc7c3dpdGNoKHQudHlwZSl7Y2FzZVwiTWVtYmVyRXhwcmVzc2lvblwiOnJldHVybiBYcih0Lm9iamVjdCl8fEt1KHQpO2Nhc2VcIkNhbGxFeHByZXNzaW9uXCI6cmV0dXJuIFhyKHQuY2FsbGVlKXx8dC5jYWxsZWUudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwiJiYodC5jYWxsZWUub2JqZWN0LnR5cGU9PT1cIk1lbWJlckV4cHJlc3Npb25cIiYmKFhyKHQuY2FsbGVlLm9iamVjdC5vYmplY3QpfHxLdSh0LmNhbGxlZS5vYmplY3QpKXx8dC5jYWxsZWUub2JqZWN0LnR5cGU9PT1cIkNhbGxFeHByZXNzaW9uXCImJlhyKHQuY2FsbGVlLm9iamVjdC5jYWxsZWUpKTtjYXNlXCJJZGVudGlmaWVyXCI6cmV0dXJuIHQubmFtZT09PVwiY3NzXCI7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gTXAoe3BhcmVudDplLGdyYW5kcGFyZW50OnR9KXtyZXR1cm4odD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiSlNYQXR0cmlidXRlXCImJmUudHlwZT09PVwiSlNYRXhwcmVzc2lvbkNvbnRhaW5lclwiJiZ0Lm5hbWUudHlwZT09PVwiSlNYSWRlbnRpZmllclwiJiZ0Lm5hbWUubmFtZT09PVwiY3NzXCJ9ZnVuY3Rpb24gUnAoZSl7aWYodnAoZSl8fGpwKGUpfHxNcChlKXx8VnUoZSkpcmV0dXJuIE9wfXZhciBRdT1ScDthc3luYyBmdW5jdGlvbiBKcChlLHQscil7bGV0e25vZGU6bn09cixzPW4ucXVhc2lzLmxlbmd0aCx1PVh0KHIsdCksaT1bXTtmb3IobGV0IGE9MDthPHM7YSsrKXtsZXQgbz1uLnF1YXNpc1thXSxwPWE9PT0wLHk9YT09PXMtMSxEPW8udmFsdWUuY29va2VkLG09RC5zcGxpdChgXG5gKSxDPW0ubGVuZ3RoLGM9dVthXSxBPUM+MiYmbVswXS50cmltKCk9PT1cIlwiJiZtWzFdLnRyaW0oKT09PVwiXCIsZD1DPjImJm1bQy0xXS50cmltKCk9PT1cIlwiJiZtW0MtMl0udHJpbSgpPT09XCJcIixTPW0uZXZlcnkoXz0+L15cXHMqKD86I1teXFxuXFxyXSopPyQvdS50ZXN0KF8pKTtpZigheSYmLyNbXlxcblxccl0qJC91LnRlc3QobVtDLTFdKSlyZXR1cm4gbnVsbDtsZXQgZz1udWxsO1M/Zz1xcChtKTpnPWF3YWl0IGUoRCx7cGFyc2VyOlwiZ3JhcGhxbFwifSksZz8oZz1VcihnLCExKSwhcCYmQSYmaS5wdXNoKFwiXCIpLGkucHVzaChnKSwheSYmZCYmaS5wdXNoKFwiXCIpKTohcCYmIXkmJkEmJmkucHVzaChcIlwiKSxjJiZpLnB1c2goYyl9cmV0dXJuW1wiYFwiLGYoW0YsYihGLGkpXSksRixcImBcIl19ZnVuY3Rpb24gcXAoZSl7bGV0IHQ9W10scj0hMSxuPWUubWFwKHM9PnMudHJpbSgpKTtmb3IobGV0W3MsdV1vZiBuLmVudHJpZXMoKSl1IT09XCJcIiYmKG5bcy0xXT09PVwiXCImJnI/dC5wdXNoKFtGLHVdKTp0LnB1c2godSkscj0hMCk7cmV0dXJuIHQubGVuZ3RoPT09MD9udWxsOmIoRix0KX1mdW5jdGlvbiBXcCh7bm9kZTplLHBhcmVudDp0fSl7cmV0dXJuIFlyKHtub2RlOmUscGFyZW50OnR9LFwiR3JhcGhRTFwiKXx8dCYmKHQudHlwZT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCImJih0LnRhZy50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCImJnQudGFnLm9iamVjdC5uYW1lPT09XCJncmFwaHFsXCImJnQudGFnLnByb3BlcnR5Lm5hbWU9PT1cImV4cGVyaW1lbnRhbFwifHx0LnRhZy50eXBlPT09XCJJZGVudGlmaWVyXCImJih0LnRhZy5uYW1lPT09XCJncWxcInx8dC50YWcubmFtZT09PVwiZ3JhcGhxbFwiKSl8fHQudHlwZT09PVwiQ2FsbEV4cHJlc3Npb25cIiYmdC5jYWxsZWUudHlwZT09PVwiSWRlbnRpZmllclwiJiZ0LmNhbGxlZS5uYW1lPT09XCJncmFwaHFsXCIpfWZ1bmN0aW9uIE5wKGUpe2lmKFdwKGUpKXJldHVybiBKcH12YXIgenU9TnA7dmFyIGFzPTA7YXN5bmMgZnVuY3Rpb24gWnUoZSx0LHIsbixzKXtsZXR7bm9kZTp1fT1uLGk9YXM7YXM9YXMrMT4+PjA7bGV0IGE9Uz0+YFBSRVRUSUVSX0hUTUxfUExBQ0VIT0xERVJfJHtTfV8ke2l9X0lOX0pTYCxvPXUucXVhc2lzLm1hcCgoUyxnLF8pPT5nPT09Xy5sZW5ndGgtMT9TLnZhbHVlLmNvb2tlZDpTLnZhbHVlLmNvb2tlZCthKGcpKS5qb2luKFwiXCIpLHA9WHQobixyKSx5PW5ldyBSZWdFeHAoYShTdHJpbmcucmF3YChcXGQrKWApLFwiZ3VcIiksRD0wLG09YXdhaXQgdChvLHtwYXJzZXI6ZSxfX29uSHRtbFJvb3QoUyl7RD1TLmNoaWxkcmVuLmxlbmd0aH19KSxDPXl0KG0sUz0+e2lmKHR5cGVvZiBTIT1cInN0cmluZ1wiKXJldHVybiBTO2xldCBnPVtdLF89Uy5zcGxpdCh5KTtmb3IobGV0IHY9MDt2PF8ubGVuZ3RoO3YrKyl7bGV0IGo9X1t2XTtpZih2JTI9PT0wKXtqJiYoaj1zcyhqKSxzLl9fZW1iZWRkZWRJbkh0bWwmJihqPVkoITEsaiwvPFxcLyg/PXNjcmlwdFxcYikvZ2l1LFN0cmluZy5yYXdgPFxcL2ApKSxnLnB1c2goaikpO2NvbnRpbnVlfWxldCBJPU51bWJlcihqKTtnLnB1c2gocFtJXSl9cmV0dXJuIGd9KSxjPS9eXFxzL3UudGVzdChvKT9cIiBcIjpcIlwiLEE9L1xccyQvdS50ZXN0KG8pP1wiIFwiOlwiXCIsZD1zLmh0bWxXaGl0ZXNwYWNlU2Vuc2l0aXZpdHk9PT1cImlnbm9yZVwiP0Y6YyYmQT94Om51bGw7cmV0dXJuIGQ/bChbXCJgXCIsZihbZCxsKEMpXSksZCxcImBcIl0pOnV0KHtodWc6ITF9LGwoW1wiYFwiLGMsRD4xP2YobChDKSk6bChDKSxBLFwiYFwiXSkpfWZ1bmN0aW9uIEdwKGUpe3JldHVybiBZcihlLFwiSFRNTFwiKXx8ZS5tYXRjaCh0PT50LnR5cGU9PT1cIlRlbXBsYXRlTGl0ZXJhbFwiLCh0LHIpPT50LnR5cGU9PT1cIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiJiZ0LnRhZy50eXBlPT09XCJJZGVudGlmaWVyXCImJnQudGFnLm5hbWU9PT1cImh0bWxcIiYmcj09PVwicXVhc2lcIil9dmFyIFVwPVp1LmJpbmQodm9pZCAwLFwiaHRtbFwiKSxZcD1adS5iaW5kKHZvaWQgMCxcImFuZ3VsYXJcIik7ZnVuY3Rpb24gWHAoZSl7aWYoR3AoZSkpcmV0dXJuIFVwO2lmKCR1KGUpKXJldHVybiBZcH12YXIgZWk9WHA7YXN5bmMgZnVuY3Rpb24gSHAoZSx0LHIpe2xldHtub2RlOm59PXIscz1ZKCExLG4ucXVhc2lzWzBdLnZhbHVlLnJhdywvKCg/OlxcXFxcXFxcKSopXFxcXGAvZ3UsKG8scCk9PlwiXFxcXFwiLnJlcGVhdChwLmxlbmd0aC8yKStcImBcIiksdT1WcChzKSxpPXUhPT1cIlwiO2kmJihzPVkoITEscyxuZXcgUmVnRXhwKGBeJHt1fWAsXCJnbXVcIiksXCJcIikpO2xldCBhPVVyKGF3YWl0IGUocyx7cGFyc2VyOlwibWFya2Rvd25cIixfX2luSnNUZW1wbGF0ZTohMH0pLCEwKTtyZXR1cm5bXCJgXCIsaT9mKFtFLGFdKTpbUnIsSXUoYSldLEUsXCJgXCJdfWZ1bmN0aW9uIFZwKGUpe2xldCB0PWUubWF0Y2goL14oW15cXFNcXG5dKilcXFMvbXUpO3JldHVybiB0PT09bnVsbD9cIlwiOnRbMV19ZnVuY3Rpb24gJHAoZSl7aWYoS3AoZSkpcmV0dXJuIEhwfWZ1bmN0aW9uIEtwKHtub2RlOmUscGFyZW50OnR9KXtyZXR1cm4odD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCImJmUucXVhc2lzLmxlbmd0aD09PTEmJnQudGFnLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmKHQudGFnLm5hbWU9PT1cIm1kXCJ8fHQudGFnLm5hbWU9PT1cIm1hcmtkb3duXCIpfXZhciB0aT0kcDtmdW5jdGlvbiBRcChlKXtsZXR7bm9kZTp0fT1lO2lmKHQudHlwZSE9PVwiVGVtcGxhdGVMaXRlcmFsXCJ8fHpwKHQpKXJldHVybjtsZXQgcjtmb3IobGV0IG4gb2ZbUXUsenUsZWksdGldKWlmKHI9bihlKSwhIXIpcmV0dXJuIHQucXVhc2lzLmxlbmd0aD09PTEmJnQucXVhc2lzWzBdLnZhbHVlLnJhdy50cmltKCk9PT1cIlwiP1wiYGBcIjphc3luYyguLi5zKT0+e2xldCB1PWF3YWl0IHIoLi4ucyk7cmV0dXJuIHUmJnV0KHtlbWJlZDohMCwuLi51LmxhYmVsfSx1KX19ZnVuY3Rpb24genAoe3F1YXNpczplfSl7cmV0dXJuIGUuc29tZSgoe3ZhbHVlOntjb29rZWQ6dH19KT0+dD09PW51bGwpfXZhciByaT1RcDt2YXIgWnA9L1xcKlxcLyQvLGVjPS9eXFwvXFwqXFwqPy8saWk9L15cXHMqKFxcL1xcKlxcKj8oLnxcXHI/XFxuKSo/XFwqXFwvKS8sdGM9LyhefFxccyspXFwvXFwvKFteXFxuXFxyXSopL2csbmk9L14oXFxyP1xcbikrLyxyYz0vKD86XnxcXHI/XFxuKSAqKEBbXlxcblxccl0qPykgKlxccj9cXG4gKig/IVteXFxuXFxyQF0qXFwvXFwvW15dKikoW15cXHNAXVteXFxuXFxyQF0rPykgKlxccj9cXG4vZyxzaT0vKD86XnxcXHI/XFxuKSAqQChcXFMrKSAqKFteXFxuXFxyXSopL2csbmM9LyhcXHI/XFxufF4pICpcXCogPy9nLGFpPVtdO2Z1bmN0aW9uIG9pKGUpe2xldCB0PWUubWF0Y2goaWkpO3JldHVybiB0P3RbMF0udHJpbVN0YXJ0KCk6XCJcIn1mdW5jdGlvbiBwaShlKXtsZXQgdD1lLm1hdGNoKGlpKSxyPXQ9PW51bGw/dm9pZCAwOnRbMF07cmV0dXJuIHI9PW51bGw/ZTplLnNsaWNlKHIubGVuZ3RoKX1mdW5jdGlvbiBjaShlKXtsZXQgdD1gXG5gO2U9WSghMSxlLnJlcGxhY2UoZWMsXCJcIikucmVwbGFjZShacCxcIlwiKSxuYyxcIiQxXCIpO2xldCByPVwiXCI7Zm9yKDtyIT09ZTspcj1lLGU9WSghMSxlLHJjLGAke3R9JDEgJDIke3R9YCk7ZT1lLnJlcGxhY2UobmksXCJcIikudHJpbUVuZCgpO2xldCBuPU9iamVjdC5jcmVhdGUobnVsbCkscz1ZKCExLGUsc2ksXCJcIikucmVwbGFjZShuaSxcIlwiKS50cmltRW5kKCksdTtmb3IoO3U9c2kuZXhlYyhlKTspe2xldCBpPVkoITEsdVsyXSx0YyxcIlwiKTtpZih0eXBlb2Ygblt1WzFdXT09XCJzdHJpbmdcInx8QXJyYXkuaXNBcnJheShuW3VbMV1dKSl7bGV0IGE9blt1WzFdXTtuW3VbMV1dPVsuLi5haSwuLi5BcnJheS5pc0FycmF5KGEpP2E6W2FdLGldfWVsc2Ugblt1WzFdXT1pfXJldHVybntjb21tZW50czpzLHByYWdtYXM6bn19ZnVuY3Rpb24gbGkoe2NvbW1lbnRzOmU9XCJcIixwcmFnbWFzOnQ9e319KXtsZXQgcj1gXG5gLG49XCIvKipcIixzPVwiICpcIix1PVwiICovXCIsaT1PYmplY3Qua2V5cyh0KSxhPWkuZmxhdE1hcChwPT51aShwLHRbcF0pKS5tYXAocD0+YCR7c30gJHtwfSR7cn1gKS5qb2luKFwiXCIpO2lmKCFlKXtpZihpLmxlbmd0aD09PTApcmV0dXJuXCJcIjtpZihpLmxlbmd0aD09PTEmJiFBcnJheS5pc0FycmF5KHRbaVswXV0pKXtsZXQgcD10W2lbMF1dO3JldHVybmAke259ICR7dWkoaVswXSxwKVswXX0ke3V9YH19bGV0IG89ZS5zcGxpdChyKS5tYXAocD0+YCR7c30gJHtwfWApLmpvaW4ocikrcjtyZXR1cm4gbityKyhlP286XCJcIikrKGUmJmkubGVuZ3RoPjA/cytyOlwiXCIpK2ErdX1mdW5jdGlvbiB1aShlLHQpe3JldHVyblsuLi5haSwuLi5BcnJheS5pc0FycmF5KHQpP3Q6W3RdXS5tYXAocj0+YEAke2V9ICR7cn1gLnRyaW0oKSl9ZnVuY3Rpb24gc2MoZSl7aWYoIWUuc3RhcnRzV2l0aChcIiMhXCIpKXJldHVyblwiXCI7bGV0IHQ9ZS5pbmRleE9mKGBcbmApO3JldHVybiB0PT09LTE/ZTplLnNsaWNlKDAsdCl9dmFyIG1pPXNjO2Z1bmN0aW9uIHVjKGUpe2xldCB0PW1pKGUpO3QmJihlPWUuc2xpY2UodC5sZW5ndGgrMSkpO2xldCByPW9pKGUpLHtwcmFnbWFzOm4sY29tbWVudHM6c309Y2kocik7cmV0dXJue3NoZWJhbmc6dCx0ZXh0OmUscHJhZ21hczpuLGNvbW1lbnRzOnN9fWZ1bmN0aW9uIHlpKGUpe2xldHtzaGViYW5nOnQsdGV4dDpyLHByYWdtYXM6bixjb21tZW50czpzfT11YyhlKSx1PXBpKHIpLGk9bGkoe3ByYWdtYXM6e2Zvcm1hdDpcIlwiLC4uLm59LGNvbW1lbnRzOnMudHJpbVN0YXJ0KCl9KTtyZXR1cm4odD9gJHt0fVxuYDpcIlwiKStpKyh1LnN0YXJ0c1dpdGgoYFxuYCk/YFxuYDpgXG5cbmApK3V9ZnVuY3Rpb24gaWMoZSx0KXtsZXR7b3JpZ2luYWxUZXh0OnIsW1N5bWJvbC5mb3IoXCJjb21tZW50c1wiKV06bixsb2NTdGFydDpzLGxvY0VuZDp1LFtTeW1ib2wuZm9yKFwicHJpbnRlZENvbW1lbnRzXCIpXTppfT10LHtub2RlOmF9PWUsbz1zKGEpLHA9dShhKTtmb3IobGV0IHkgb2YgbilzKHkpPj1vJiZ1KHkpPD1wJiZpLmFkZCh5KTtyZXR1cm4gci5zbGljZShvLHApfXZhciBEaT1pYztmdW5jdGlvbiBvcyhlLHQpe3ZhciB1LGksYSxvLHAseSxELG0sQztpZihlLmlzUm9vdClyZXR1cm4hMTtsZXR7bm9kZTpyLGtleTpuLHBhcmVudDpzfT1lO2lmKHQuX19pc0luSHRtbEludGVycG9sYXRpb24mJiF0LmJyYWNrZXRTcGFjaW5nJiZjYyhyKSYmeXIoZSkpcmV0dXJuITA7aWYoYWMocikpcmV0dXJuITE7aWYoci50eXBlPT09XCJJZGVudGlmaWVyXCIpe2lmKCh1PXIuZXh0cmEpIT1udWxsJiZ1LnBhcmVudGhlc2l6ZWQmJi9eUFJFVFRJRVJfSFRNTF9QTEFDRUhPTERFUl9cXGQrX1xcZCtfSU5fSlMkL3UudGVzdChyLm5hbWUpfHxuPT09XCJsZWZ0XCImJihyLm5hbWU9PT1cImFzeW5jXCImJiFzLmF3YWl0fHxyLm5hbWU9PT1cImxldFwiKSYmcy50eXBlPT09XCJGb3JPZlN0YXRlbWVudFwiKXJldHVybiEwO2lmKHIubmFtZT09PVwibGV0XCIpe2xldCBjPShpPWUuZmluZEFuY2VzdG9yKEE9PkEudHlwZT09PVwiRm9yT2ZTdGF0ZW1lbnRcIikpPT1udWxsP3ZvaWQgMDppLmxlZnQ7aWYoYyYmYWUoYyxBPT5BPT09cikpcmV0dXJuITB9aWYobj09PVwib2JqZWN0XCImJnIubmFtZT09PVwibGV0XCImJnMudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwiJiZzLmNvbXB1dGVkJiYhcy5vcHRpb25hbCl7bGV0IGM9ZS5maW5kQW5jZXN0b3IoZD0+ZC50eXBlPT09XCJFeHByZXNzaW9uU3RhdGVtZW50XCJ8fGQudHlwZT09PVwiRm9yU3RhdGVtZW50XCJ8fGQudHlwZT09PVwiRm9ySW5TdGF0ZW1lbnRcIiksQT1jP2MudHlwZT09PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiP2MuZXhwcmVzc2lvbjpjLnR5cGU9PT1cIkZvclN0YXRlbWVudFwiP2MuaW5pdDpjLmxlZnQ6dm9pZCAwO2lmKEEmJmFlKEEsZD0+ZD09PXIpKXJldHVybiEwfWlmKG49PT1cImV4cHJlc3Npb25cIilzd2l0Y2goci5uYW1lKXtjYXNlXCJhd2FpdFwiOmNhc2VcImludGVyZmFjZVwiOmNhc2VcIm1vZHVsZVwiOmNhc2VcInVzaW5nXCI6Y2FzZVwieWllbGRcIjpjYXNlXCJsZXRcIjpjYXNlXCJjb21wb25lbnRcIjpjYXNlXCJob29rXCI6Y2FzZVwidHlwZVwiOntsZXQgYz1lLmZpbmRBbmNlc3RvcihBPT4hQWUoQSkpO2lmKGMhPT1zJiZjLnR5cGU9PT1cIkV4cHJlc3Npb25TdGF0ZW1lbnRcIilyZXR1cm4hMH19cmV0dXJuITF9aWYoci50eXBlPT09XCJPYmplY3RFeHByZXNzaW9uXCJ8fHIudHlwZT09PVwiRnVuY3Rpb25FeHByZXNzaW9uXCJ8fHIudHlwZT09PVwiQ2xhc3NFeHByZXNzaW9uXCJ8fHIudHlwZT09PVwiRG9FeHByZXNzaW9uXCIpe2xldCBjPShhPWUuZmluZEFuY2VzdG9yKEE9PkEudHlwZT09PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiKSk9PW51bGw/dm9pZCAwOmEuZXhwcmVzc2lvbjtpZihjJiZhZShjLEE9PkE9PT1yKSlyZXR1cm4hMH1pZihyLnR5cGU9PT1cIk9iamVjdEV4cHJlc3Npb25cIil7bGV0IGM9KG89ZS5maW5kQW5jZXN0b3IoQT0+QS50eXBlPT09XCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiKSk9PW51bGw/dm9pZCAwOm8uYm9keTtpZihjJiZjLnR5cGUhPT1cIlNlcXVlbmNlRXhwcmVzc2lvblwiJiZjLnR5cGUhPT1cIkFzc2lnbm1lbnRFeHByZXNzaW9uXCImJmFlKGMsQT0+QT09PXIpKXJldHVybiEwfXN3aXRjaChzLnR5cGUpe2Nhc2VcIlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCI6cmV0dXJuITE7Y2FzZVwiQ2xhc3NEZWNsYXJhdGlvblwiOmNhc2VcIkNsYXNzRXhwcmVzc2lvblwiOmlmKG49PT1cInN1cGVyQ2xhc3NcIiYmKHIudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cInx8ci50eXBlPT09XCJBc3NpZ25tZW50RXhwcmVzc2lvblwifHxyLnR5cGU9PT1cIkF3YWl0RXhwcmVzc2lvblwifHxyLnR5cGU9PT1cIkJpbmFyeUV4cHJlc3Npb25cInx8ci50eXBlPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cInx8ci50eXBlPT09XCJMb2dpY2FsRXhwcmVzc2lvblwifHxyLnR5cGU9PT1cIk5ld0V4cHJlc3Npb25cInx8ci50eXBlPT09XCJPYmplY3RFeHByZXNzaW9uXCJ8fHIudHlwZT09PVwiU2VxdWVuY2VFeHByZXNzaW9uXCJ8fHIudHlwZT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCJ8fHIudHlwZT09PVwiVW5hcnlFeHByZXNzaW9uXCJ8fHIudHlwZT09PVwiVXBkYXRlRXhwcmVzc2lvblwifHxyLnR5cGU9PT1cIllpZWxkRXhwcmVzc2lvblwifHxyLnR5cGU9PT1cIlRTTm9uTnVsbEV4cHJlc3Npb25cInx8ci50eXBlPT09XCJDbGFzc0V4cHJlc3Npb25cIiYmTyhyLmRlY29yYXRvcnMpKSlyZXR1cm4hMDticmVhaztjYXNlXCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb25cIjpyZXR1cm4gZmkoZSx0KXx8ci50eXBlPT09XCJTZXF1ZW5jZUV4cHJlc3Npb25cIjtjYXNlXCJEZWNvcmF0b3JcIjppZihuPT09XCJleHByZXNzaW9uXCImJiFtYyhyKSlyZXR1cm4hMDticmVhaztjYXNlXCJUeXBlQW5ub3RhdGlvblwiOmlmKGUubWF0Y2godm9pZCAwLHZvaWQgMCwoYyxBKT0+QT09PVwicmV0dXJuVHlwZVwiJiZjLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCIpJiZwYyhyKSlyZXR1cm4hMDticmVhaztjYXNlXCJCaW5hcnlFeHByZXNzaW9uXCI6aWYobj09PVwibGVmdFwiJiYocy5vcGVyYXRvcj09PVwiaW5cInx8cy5vcGVyYXRvcj09PVwiaW5zdGFuY2VvZlwiKSYmci50eXBlPT09XCJVbmFyeUV4cHJlc3Npb25cIilyZXR1cm4hMDticmVhaztjYXNlXCJWYXJpYWJsZURlY2xhcmF0b3JcIjppZihuPT09XCJpbml0XCImJmUubWF0Y2godm9pZCAwLHZvaWQgMCwoYyxBKT0+QT09PVwiZGVjbGFyYXRpb25zXCImJmMudHlwZT09PVwiVmFyaWFibGVEZWNsYXJhdGlvblwiLChjLEEpPT5BPT09XCJsZWZ0XCImJmMudHlwZT09PVwiRm9ySW5TdGF0ZW1lbnRcIikpcmV0dXJuITA7YnJlYWt9c3dpdGNoKHIudHlwZSl7Y2FzZVwiVXBkYXRlRXhwcmVzc2lvblwiOmlmKHMudHlwZT09PVwiVW5hcnlFeHByZXNzaW9uXCIpcmV0dXJuIHIucHJlZml4JiYoci5vcGVyYXRvcj09PVwiKytcIiYmcy5vcGVyYXRvcj09PVwiK1wifHxyLm9wZXJhdG9yPT09XCItLVwiJiZzLm9wZXJhdG9yPT09XCItXCIpO2Nhc2VcIlVuYXJ5RXhwcmVzc2lvblwiOnN3aXRjaChzLnR5cGUpe2Nhc2VcIlVuYXJ5RXhwcmVzc2lvblwiOnJldHVybiByLm9wZXJhdG9yPT09cy5vcGVyYXRvciYmKHIub3BlcmF0b3I9PT1cIitcInx8ci5vcGVyYXRvcj09PVwiLVwiKTtjYXNlXCJCaW5kRXhwcmVzc2lvblwiOnJldHVybiEwO2Nhc2VcIk1lbWJlckV4cHJlc3Npb25cIjpjYXNlXCJPcHRpb25hbE1lbWJlckV4cHJlc3Npb25cIjpyZXR1cm4gbj09PVwib2JqZWN0XCI7Y2FzZVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCI6cmV0dXJuITA7Y2FzZVwiTmV3RXhwcmVzc2lvblwiOmNhc2VcIkNhbGxFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxDYWxsRXhwcmVzc2lvblwiOnJldHVybiBuPT09XCJjYWxsZWVcIjtjYXNlXCJCaW5hcnlFeHByZXNzaW9uXCI6cmV0dXJuIG49PT1cImxlZnRcIiYmcy5vcGVyYXRvcj09PVwiKipcIjtjYXNlXCJUU05vbk51bGxFeHByZXNzaW9uXCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1jYXNlXCJCaW5hcnlFeHByZXNzaW9uXCI6aWYocy50eXBlPT09XCJVcGRhdGVFeHByZXNzaW9uXCJ8fHIub3BlcmF0b3I9PT1cImluXCImJm9jKGUpKXJldHVybiEwO2lmKHIub3BlcmF0b3I9PT1cInw+XCImJigocD1yLmV4dHJhKSE9bnVsbCYmcC5wYXJlbnRoZXNpemVkKSl7bGV0IGM9ZS5ncmFuZHBhcmVudDtpZihjLnR5cGU9PT1cIkJpbmFyeUV4cHJlc3Npb25cIiYmYy5vcGVyYXRvcj09PVwifD5cIilyZXR1cm4hMH1jYXNlXCJUU1R5cGVBc3NlcnRpb25cIjpjYXNlXCJUU0FzRXhwcmVzc2lvblwiOmNhc2VcIlRTU2F0aXNmaWVzRXhwcmVzc2lvblwiOmNhc2VcIkFzRXhwcmVzc2lvblwiOmNhc2VcIkFzQ29uc3RFeHByZXNzaW9uXCI6Y2FzZVwiU2F0aXNmaWVzRXhwcmVzc2lvblwiOmNhc2VcIkxvZ2ljYWxFeHByZXNzaW9uXCI6c3dpdGNoKHMudHlwZSl7Y2FzZVwiVFNBc0V4cHJlc3Npb25cIjpjYXNlXCJUU1NhdGlzZmllc0V4cHJlc3Npb25cIjpjYXNlXCJBc0V4cHJlc3Npb25cIjpjYXNlXCJBc0NvbnN0RXhwcmVzc2lvblwiOmNhc2VcIlNhdGlzZmllc0V4cHJlc3Npb25cIjpyZXR1cm4hQWUocik7Y2FzZVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI6cmV0dXJuIEFlKHIpfHxsdShyKTtjYXNlXCJDYWxsRXhwcmVzc2lvblwiOmNhc2VcIk5ld0V4cHJlc3Npb25cIjpjYXNlXCJPcHRpb25hbENhbGxFeHByZXNzaW9uXCI6cmV0dXJuIG49PT1cImNhbGxlZVwiO2Nhc2VcIkNsYXNzRXhwcmVzc2lvblwiOmNhc2VcIkNsYXNzRGVjbGFyYXRpb25cIjpyZXR1cm4gbj09PVwic3VwZXJDbGFzc1wiO2Nhc2VcIlRTVHlwZUFzc2VydGlvblwiOmNhc2VcIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiOmNhc2VcIlVuYXJ5RXhwcmVzc2lvblwiOmNhc2VcIkpTWFNwcmVhZEF0dHJpYnV0ZVwiOmNhc2VcIlNwcmVhZEVsZW1lbnRcIjpjYXNlXCJCaW5kRXhwcmVzc2lvblwiOmNhc2VcIkF3YWl0RXhwcmVzc2lvblwiOmNhc2VcIlRTTm9uTnVsbEV4cHJlc3Npb25cIjpjYXNlXCJVcGRhdGVFeHByZXNzaW9uXCI6cmV0dXJuITA7Y2FzZVwiTWVtYmVyRXhwcmVzc2lvblwiOmNhc2VcIk9wdGlvbmFsTWVtYmVyRXhwcmVzc2lvblwiOnJldHVybiBuPT09XCJvYmplY3RcIjtjYXNlXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiOmNhc2VcIkFzc2lnbm1lbnRQYXR0ZXJuXCI6cmV0dXJuIG49PT1cImxlZnRcIiYmKHIudHlwZT09PVwiVFNUeXBlQXNzZXJ0aW9uXCJ8fEFlKHIpKTtjYXNlXCJMb2dpY2FsRXhwcmVzc2lvblwiOmlmKHIudHlwZT09PVwiTG9naWNhbEV4cHJlc3Npb25cIilyZXR1cm4gcy5vcGVyYXRvciE9PXIub3BlcmF0b3I7Y2FzZVwiQmluYXJ5RXhwcmVzc2lvblwiOntsZXR7b3BlcmF0b3I6Yyx0eXBlOkF9PXI7aWYoIWMmJkEhPT1cIlRTVHlwZUFzc2VydGlvblwiKXJldHVybiEwO2xldCBkPXNyKGMpLFM9cy5vcGVyYXRvcixnPXNyKFMpO3JldHVybiBnPmR8fG49PT1cInJpZ2h0XCImJmc9PT1kfHxnPT09ZCYmIWFyKFMsYyk/ITA6ZzxkJiZjPT09XCIlXCI/Uz09PVwiK1wifHxTPT09XCItXCI6ISFGdShTKX1kZWZhdWx0OnJldHVybiExfWNhc2VcIlNlcXVlbmNlRXhwcmVzc2lvblwiOnN3aXRjaChzLnR5cGUpe2Nhc2VcIlJldHVyblN0YXRlbWVudFwiOnJldHVybiExO2Nhc2VcIkZvclN0YXRlbWVudFwiOnJldHVybiExO2Nhc2VcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIjpyZXR1cm4gbiE9PVwiZXhwcmVzc2lvblwiO2Nhc2VcIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCI6cmV0dXJuIG4hPT1cImJvZHlcIjtkZWZhdWx0OnJldHVybiEwfWNhc2VcIllpZWxkRXhwcmVzc2lvblwiOmlmKHMudHlwZT09PVwiQXdhaXRFeHByZXNzaW9uXCJ8fHMudHlwZT09PVwiVFNUeXBlQXNzZXJ0aW9uXCIpcmV0dXJuITA7Y2FzZVwiQXdhaXRFeHByZXNzaW9uXCI6c3dpdGNoKHMudHlwZSl7Y2FzZVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCI6Y2FzZVwiVW5hcnlFeHByZXNzaW9uXCI6Y2FzZVwiTG9naWNhbEV4cHJlc3Npb25cIjpjYXNlXCJTcHJlYWRFbGVtZW50XCI6Y2FzZVwiVFNBc0V4cHJlc3Npb25cIjpjYXNlXCJUU1NhdGlzZmllc0V4cHJlc3Npb25cIjpjYXNlXCJUU05vbk51bGxFeHByZXNzaW9uXCI6Y2FzZVwiQXNFeHByZXNzaW9uXCI6Y2FzZVwiQXNDb25zdEV4cHJlc3Npb25cIjpjYXNlXCJTYXRpc2ZpZXNFeHByZXNzaW9uXCI6Y2FzZVwiQmluZEV4cHJlc3Npb25cIjpyZXR1cm4hMDtjYXNlXCJNZW1iZXJFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCI6cmV0dXJuIG49PT1cIm9iamVjdFwiO2Nhc2VcIk5ld0V4cHJlc3Npb25cIjpjYXNlXCJDYWxsRXhwcmVzc2lvblwiOmNhc2VcIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIjpyZXR1cm4gbj09PVwiY2FsbGVlXCI7Y2FzZVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI6cmV0dXJuIG49PT1cInRlc3RcIjtjYXNlXCJCaW5hcnlFeHByZXNzaW9uXCI6cmV0dXJuISghci5hcmd1bWVudCYmcy5vcGVyYXRvcj09PVwifD5cIik7ZGVmYXVsdDpyZXR1cm4hMX1jYXNlXCJUU0Z1bmN0aW9uVHlwZVwiOmlmKGUubWF0Y2goYz0+Yy50eXBlPT09XCJUU0Z1bmN0aW9uVHlwZVwiLChjLEEpPT5BPT09XCJ0eXBlQW5ub3RhdGlvblwiJiZjLnR5cGU9PT1cIlRTVHlwZUFubm90YXRpb25cIiwoYyxBKT0+QT09PVwicmV0dXJuVHlwZVwiJiZjLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCIpKXJldHVybiEwO2Nhc2VcIlRTQ29uZGl0aW9uYWxUeXBlXCI6Y2FzZVwiVFNDb25zdHJ1Y3RvclR5cGVcIjpjYXNlXCJDb25kaXRpb25hbFR5cGVBbm5vdGF0aW9uXCI6aWYobj09PVwiZXh0ZW5kc1R5cGVcIiYmSmUocikmJnMudHlwZT09PXIudHlwZXx8bj09PVwiY2hlY2tUeXBlXCImJkplKHMpKXJldHVybiEwO2lmKG49PT1cImV4dGVuZHNUeXBlXCImJnMudHlwZT09PVwiVFNDb25kaXRpb25hbFR5cGVcIil7bGV0e3R5cGVBbm5vdGF0aW9uOmN9PXIucmV0dXJuVHlwZXx8ci50eXBlQW5ub3RhdGlvbjtpZihjLnR5cGU9PT1cIlRTVHlwZVByZWRpY2F0ZVwiJiZjLnR5cGVBbm5vdGF0aW9uJiYoYz1jLnR5cGVBbm5vdGF0aW9uLnR5cGVBbm5vdGF0aW9uKSxjLnR5cGU9PT1cIlRTSW5mZXJUeXBlXCImJmMudHlwZVBhcmFtZXRlci5jb25zdHJhaW50KXJldHVybiEwfWNhc2VcIlRTVW5pb25UeXBlXCI6Y2FzZVwiVFNJbnRlcnNlY3Rpb25UeXBlXCI6aWYoKHdlKHMpfHxOdChzKSkmJnMudHlwZXMubGVuZ3RoPjEmJighci50eXBlc3x8ci50eXBlcy5sZW5ndGg+MSkpcmV0dXJuITA7Y2FzZVwiVFNJbmZlclR5cGVcIjppZihyLnR5cGU9PT1cIlRTSW5mZXJUeXBlXCIpe2lmKHMudHlwZT09PVwiVFNSZXN0VHlwZVwiKXJldHVybiExO2lmKG49PT1cInR5cGVzXCImJihzLnR5cGU9PT1cIlRTVW5pb25UeXBlXCJ8fHMudHlwZT09PVwiVFNJbnRlcnNlY3Rpb25UeXBlXCIpJiZyLnR5cGVQYXJhbWV0ZXIudHlwZT09PVwiVFNUeXBlUGFyYW1ldGVyXCImJnIudHlwZVBhcmFtZXRlci5jb25zdHJhaW50KXJldHVybiEwfWNhc2VcIlRTVHlwZU9wZXJhdG9yXCI6cmV0dXJuIHMudHlwZT09PVwiVFNBcnJheVR5cGVcInx8cy50eXBlPT09XCJUU09wdGlvbmFsVHlwZVwifHxzLnR5cGU9PT1cIlRTUmVzdFR5cGVcInx8bj09PVwib2JqZWN0VHlwZVwiJiZzLnR5cGU9PT1cIlRTSW5kZXhlZEFjY2Vzc1R5cGVcInx8cy50eXBlPT09XCJUU1R5cGVPcGVyYXRvclwifHxzLnR5cGU9PT1cIlRTVHlwZUFubm90YXRpb25cIiYmZS5ncmFuZHBhcmVudC50eXBlLnN0YXJ0c1dpdGgoXCJUU0pTRG9jXCIpO2Nhc2VcIlRTVHlwZVF1ZXJ5XCI6cmV0dXJuIG49PT1cIm9iamVjdFR5cGVcIiYmcy50eXBlPT09XCJUU0luZGV4ZWRBY2Nlc3NUeXBlXCJ8fG49PT1cImVsZW1lbnRUeXBlXCImJnMudHlwZT09PVwiVFNBcnJheVR5cGVcIjtjYXNlXCJUeXBlT3BlcmF0b3JcIjpyZXR1cm4gcy50eXBlPT09XCJBcnJheVR5cGVBbm5vdGF0aW9uXCJ8fHMudHlwZT09PVwiTnVsbGFibGVUeXBlQW5ub3RhdGlvblwifHxuPT09XCJvYmplY3RUeXBlXCImJihzLnR5cGU9PT1cIkluZGV4ZWRBY2Nlc3NUeXBlXCJ8fHMudHlwZT09PVwiT3B0aW9uYWxJbmRleGVkQWNjZXNzVHlwZVwiKXx8cy50eXBlPT09XCJUeXBlT3BlcmF0b3JcIjtjYXNlXCJUeXBlb2ZUeXBlQW5ub3RhdGlvblwiOnJldHVybiBuPT09XCJvYmplY3RUeXBlXCImJihzLnR5cGU9PT1cIkluZGV4ZWRBY2Nlc3NUeXBlXCJ8fHMudHlwZT09PVwiT3B0aW9uYWxJbmRleGVkQWNjZXNzVHlwZVwiKXx8bj09PVwiZWxlbWVudFR5cGVcIiYmcy50eXBlPT09XCJBcnJheVR5cGVBbm5vdGF0aW9uXCI7Y2FzZVwiQXJyYXlUeXBlQW5ub3RhdGlvblwiOnJldHVybiBzLnR5cGU9PT1cIk51bGxhYmxlVHlwZUFubm90YXRpb25cIjtjYXNlXCJJbnRlcnNlY3Rpb25UeXBlQW5ub3RhdGlvblwiOmNhc2VcIlVuaW9uVHlwZUFubm90YXRpb25cIjpyZXR1cm4gcy50eXBlPT09XCJUeXBlT3BlcmF0b3JcInx8cy50eXBlPT09XCJBcnJheVR5cGVBbm5vdGF0aW9uXCJ8fHMudHlwZT09PVwiTnVsbGFibGVUeXBlQW5ub3RhdGlvblwifHxzLnR5cGU9PT1cIkludGVyc2VjdGlvblR5cGVBbm5vdGF0aW9uXCJ8fHMudHlwZT09PVwiVW5pb25UeXBlQW5ub3RhdGlvblwifHxuPT09XCJvYmplY3RUeXBlXCImJihzLnR5cGU9PT1cIkluZGV4ZWRBY2Nlc3NUeXBlXCJ8fHMudHlwZT09PVwiT3B0aW9uYWxJbmRleGVkQWNjZXNzVHlwZVwiKTtjYXNlXCJJbmZlclR5cGVBbm5vdGF0aW9uXCI6Y2FzZVwiTnVsbGFibGVUeXBlQW5ub3RhdGlvblwiOnJldHVybiBzLnR5cGU9PT1cIkFycmF5VHlwZUFubm90YXRpb25cInx8bj09PVwib2JqZWN0VHlwZVwiJiYocy50eXBlPT09XCJJbmRleGVkQWNjZXNzVHlwZVwifHxzLnR5cGU9PT1cIk9wdGlvbmFsSW5kZXhlZEFjY2Vzc1R5cGVcIik7Y2FzZVwiQ29tcG9uZW50VHlwZUFubm90YXRpb25cIjpjYXNlXCJGdW5jdGlvblR5cGVBbm5vdGF0aW9uXCI6e2lmKHIudHlwZT09PVwiQ29tcG9uZW50VHlwZUFubm90YXRpb25cIiYmKHIucmVuZGVyc1R5cGU9PT1udWxsfHxyLnJlbmRlcnNUeXBlPT09dm9pZCAwKSlyZXR1cm4hMTtpZihlLm1hdGNoKHZvaWQgMCwoQSxkKT0+ZD09PVwidHlwZUFubm90YXRpb25cIiYmQS50eXBlPT09XCJUeXBlQW5ub3RhdGlvblwiLChBLGQpPT5kPT09XCJyZXR1cm5UeXBlXCImJkEudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIil8fGUubWF0Y2godm9pZCAwLChBLGQpPT5kPT09XCJ0eXBlQW5ub3RhdGlvblwiJiZBLnR5cGU9PT1cIlR5cGVQcmVkaWNhdGVcIiwoQSxkKT0+ZD09PVwidHlwZUFubm90YXRpb25cIiYmQS50eXBlPT09XCJUeXBlQW5ub3RhdGlvblwiLChBLGQpPT5kPT09XCJyZXR1cm5UeXBlXCImJkEudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIikpcmV0dXJuITA7bGV0IGM9cy50eXBlPT09XCJOdWxsYWJsZVR5cGVBbm5vdGF0aW9uXCI/ZS5ncmFuZHBhcmVudDpzO3JldHVybiBjLnR5cGU9PT1cIlVuaW9uVHlwZUFubm90YXRpb25cInx8Yy50eXBlPT09XCJJbnRlcnNlY3Rpb25UeXBlQW5ub3RhdGlvblwifHxjLnR5cGU9PT1cIkFycmF5VHlwZUFubm90YXRpb25cInx8bj09PVwib2JqZWN0VHlwZVwiJiYoYy50eXBlPT09XCJJbmRleGVkQWNjZXNzVHlwZVwifHxjLnR5cGU9PT1cIk9wdGlvbmFsSW5kZXhlZEFjY2Vzc1R5cGVcIil8fG49PT1cImNoZWNrVHlwZVwiJiZzLnR5cGU9PT1cIkNvbmRpdGlvbmFsVHlwZUFubm90YXRpb25cInx8bj09PVwiZXh0ZW5kc1R5cGVcIiYmcy50eXBlPT09XCJDb25kaXRpb25hbFR5cGVBbm5vdGF0aW9uXCImJigoeT1yLnJldHVyblR5cGUpPT1udWxsP3ZvaWQgMDp5LnR5cGUpPT09XCJJbmZlclR5cGVBbm5vdGF0aW9uXCImJigoRD1yLnJldHVyblR5cGUpPT1udWxsP3ZvaWQgMDpELnR5cGVQYXJhbWV0ZXIuYm91bmQpfHxjLnR5cGU9PT1cIk51bGxhYmxlVHlwZUFubm90YXRpb25cInx8cy50eXBlPT09XCJGdW5jdGlvblR5cGVQYXJhbVwiJiZzLm5hbWU9PT1udWxsJiZ6KHIpLnNvbWUoQT0+e3ZhciBkO3JldHVybigoZD1BLnR5cGVBbm5vdGF0aW9uKT09bnVsbD92b2lkIDA6ZC50eXBlKT09PVwiTnVsbGFibGVUeXBlQW5ub3RhdGlvblwifSl9Y2FzZVwiT3B0aW9uYWxJbmRleGVkQWNjZXNzVHlwZVwiOnJldHVybiBuPT09XCJvYmplY3RUeXBlXCImJnMudHlwZT09PVwiSW5kZXhlZEFjY2Vzc1R5cGVcIjtjYXNlXCJTdHJpbmdMaXRlcmFsXCI6Y2FzZVwiTnVtZXJpY0xpdGVyYWxcIjpjYXNlXCJMaXRlcmFsXCI6aWYodHlwZW9mIHIudmFsdWU9PVwic3RyaW5nXCImJnMudHlwZT09PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiJiYhcy5kaXJlY3RpdmUpe2xldCBjPWUuZ3JhbmRwYXJlbnQ7cmV0dXJuIGMudHlwZT09PVwiUHJvZ3JhbVwifHxjLnR5cGU9PT1cIkJsb2NrU3RhdGVtZW50XCJ9cmV0dXJuIG49PT1cIm9iamVjdFwiJiZzLnR5cGU9PT1cIk1lbWJlckV4cHJlc3Npb25cIiYmdHlwZW9mIHIudmFsdWU9PVwibnVtYmVyXCI7Y2FzZVwiQXNzaWdubWVudEV4cHJlc3Npb25cIjp7bGV0IGM9ZS5ncmFuZHBhcmVudDtyZXR1cm4gbj09PVwiYm9keVwiJiZzLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCI/ITA6bj09PVwia2V5XCImJihzLnR5cGU9PT1cIkNsYXNzUHJvcGVydHlcInx8cy50eXBlPT09XCJQcm9wZXJ0eURlZmluaXRpb25cIikmJnMuY29tcHV0ZWR8fChuPT09XCJpbml0XCJ8fG49PT1cInVwZGF0ZVwiKSYmcy50eXBlPT09XCJGb3JTdGF0ZW1lbnRcIj8hMTpzLnR5cGU9PT1cIkV4cHJlc3Npb25TdGF0ZW1lbnRcIj9yLmxlZnQudHlwZT09PVwiT2JqZWN0UGF0dGVyblwiOiEobj09PVwia2V5XCImJnMudHlwZT09PVwiVFNQcm9wZXJ0eVNpZ25hdHVyZVwifHxzLnR5cGU9PT1cIkFzc2lnbm1lbnRFeHByZXNzaW9uXCJ8fHMudHlwZT09PVwiU2VxdWVuY2VFeHByZXNzaW9uXCImJmMudHlwZT09PVwiRm9yU3RhdGVtZW50XCImJihjLmluaXQ9PT1zfHxjLnVwZGF0ZT09PXMpfHxuPT09XCJ2YWx1ZVwiJiZzLnR5cGU9PT1cIlByb3BlcnR5XCImJmMudHlwZT09PVwiT2JqZWN0UGF0dGVyblwiJiZjLnByb3BlcnRpZXMuaW5jbHVkZXMocyl8fHMudHlwZT09PVwiTkdDaGFpbmVkRXhwcmVzc2lvblwifHxuPT09XCJub2RlXCImJnMudHlwZT09PVwiSnNFeHByZXNzaW9uUm9vdFwiKX1jYXNlXCJDb25kaXRpb25hbEV4cHJlc3Npb25cIjpzd2l0Y2gocy50eXBlKXtjYXNlXCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIjpjYXNlXCJVbmFyeUV4cHJlc3Npb25cIjpjYXNlXCJTcHJlYWRFbGVtZW50XCI6Y2FzZVwiQmluYXJ5RXhwcmVzc2lvblwiOmNhc2VcIkxvZ2ljYWxFeHByZXNzaW9uXCI6Y2FzZVwiTkdQaXBlRXhwcmVzc2lvblwiOmNhc2VcIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvblwiOmNhc2VcIkF3YWl0RXhwcmVzc2lvblwiOmNhc2VcIkpTWFNwcmVhZEF0dHJpYnV0ZVwiOmNhc2VcIlRTVHlwZUFzc2VydGlvblwiOmNhc2VcIlR5cGVDYXN0RXhwcmVzc2lvblwiOmNhc2VcIlRTQXNFeHByZXNzaW9uXCI6Y2FzZVwiVFNTYXRpc2ZpZXNFeHByZXNzaW9uXCI6Y2FzZVwiQXNFeHByZXNzaW9uXCI6Y2FzZVwiQXNDb25zdEV4cHJlc3Npb25cIjpjYXNlXCJTYXRpc2ZpZXNFeHByZXNzaW9uXCI6Y2FzZVwiVFNOb25OdWxsRXhwcmVzc2lvblwiOnJldHVybiEwO2Nhc2VcIk5ld0V4cHJlc3Npb25cIjpjYXNlXCJDYWxsRXhwcmVzc2lvblwiOmNhc2VcIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIjpyZXR1cm4gbj09PVwiY2FsbGVlXCI7Y2FzZVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI6cmV0dXJuIHQuZXhwZXJpbWVudGFsVGVybmFyaWVzPyExOm49PT1cInRlc3RcIjtjYXNlXCJNZW1iZXJFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCI6cmV0dXJuIG49PT1cIm9iamVjdFwiO2RlZmF1bHQ6cmV0dXJuITF9Y2FzZVwiRnVuY3Rpb25FeHByZXNzaW9uXCI6c3dpdGNoKHMudHlwZSl7Y2FzZVwiTmV3RXhwcmVzc2lvblwiOmNhc2VcIkNhbGxFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxDYWxsRXhwcmVzc2lvblwiOnJldHVybiBuPT09XCJjYWxsZWVcIjtjYXNlXCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfWNhc2VcIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCI6c3dpdGNoKHMudHlwZSl7Y2FzZVwiQmluYXJ5RXhwcmVzc2lvblwiOnJldHVybiBzLm9wZXJhdG9yIT09XCJ8PlwifHwoKG09ci5leHRyYSk9PW51bGw/dm9pZCAwOm0ucGFyZW50aGVzaXplZCk7Y2FzZVwiTmV3RXhwcmVzc2lvblwiOmNhc2VcIkNhbGxFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxDYWxsRXhwcmVzc2lvblwiOnJldHVybiBuPT09XCJjYWxsZWVcIjtjYXNlXCJNZW1iZXJFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCI6cmV0dXJuIG49PT1cIm9iamVjdFwiO2Nhc2VcIlRTQXNFeHByZXNzaW9uXCI6Y2FzZVwiVFNTYXRpc2ZpZXNFeHByZXNzaW9uXCI6Y2FzZVwiQXNFeHByZXNzaW9uXCI6Y2FzZVwiQXNDb25zdEV4cHJlc3Npb25cIjpjYXNlXCJTYXRpc2ZpZXNFeHByZXNzaW9uXCI6Y2FzZVwiVFNOb25OdWxsRXhwcmVzc2lvblwiOmNhc2VcIkJpbmRFeHByZXNzaW9uXCI6Y2FzZVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCI6Y2FzZVwiVW5hcnlFeHByZXNzaW9uXCI6Y2FzZVwiTG9naWNhbEV4cHJlc3Npb25cIjpjYXNlXCJBd2FpdEV4cHJlc3Npb25cIjpjYXNlXCJUU1R5cGVBc3NlcnRpb25cIjpyZXR1cm4hMDtjYXNlXCJDb25kaXRpb25hbEV4cHJlc3Npb25cIjpyZXR1cm4gbj09PVwidGVzdFwiO2RlZmF1bHQ6cmV0dXJuITF9Y2FzZVwiQ2xhc3NFeHByZXNzaW9uXCI6c3dpdGNoKHMudHlwZSl7Y2FzZVwiTmV3RXhwcmVzc2lvblwiOnJldHVybiBuPT09XCJjYWxsZWVcIjtkZWZhdWx0OnJldHVybiExfWNhc2VcIk9wdGlvbmFsTWVtYmVyRXhwcmVzc2lvblwiOmNhc2VcIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIjpjYXNlXCJDYWxsRXhwcmVzc2lvblwiOmNhc2VcIk1lbWJlckV4cHJlc3Npb25cIjppZihsYyhlKSlyZXR1cm4hMDtjYXNlXCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIjpjYXNlXCJUU05vbk51bGxFeHByZXNzaW9uXCI6aWYobj09PVwiY2FsbGVlXCImJihzLnR5cGU9PT1cIkJpbmRFeHByZXNzaW9uXCJ8fHMudHlwZT09PVwiTmV3RXhwcmVzc2lvblwiKSl7bGV0IGM9cjtmb3IoO2M7KXN3aXRjaChjLnR5cGUpe2Nhc2VcIkNhbGxFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxDYWxsRXhwcmVzc2lvblwiOnJldHVybiEwO2Nhc2VcIk1lbWJlckV4cHJlc3Npb25cIjpjYXNlXCJPcHRpb25hbE1lbWJlckV4cHJlc3Npb25cIjpjYXNlXCJCaW5kRXhwcmVzc2lvblwiOmM9Yy5vYmplY3Q7YnJlYWs7Y2FzZVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCI6Yz1jLnRhZzticmVhaztjYXNlXCJUU05vbk51bGxFeHByZXNzaW9uXCI6Yz1jLmV4cHJlc3Npb247YnJlYWs7ZGVmYXVsdDpyZXR1cm4hMX19cmV0dXJuITE7Y2FzZVwiQmluZEV4cHJlc3Npb25cIjpyZXR1cm4gbj09PVwiY2FsbGVlXCImJihzLnR5cGU9PT1cIkJpbmRFeHByZXNzaW9uXCJ8fHMudHlwZT09PVwiTmV3RXhwcmVzc2lvblwiKXx8bj09PVwib2JqZWN0XCImJlcocyk7Y2FzZVwiTkdQaXBlRXhwcmVzc2lvblwiOnJldHVybiEocy50eXBlPT09XCJOR1Jvb3RcInx8cy50eXBlPT09XCJOR01pY3Jvc3ludGF4RXhwcmVzc2lvblwifHxzLnR5cGU9PT1cIk9iamVjdFByb3BlcnR5XCImJiEoKEM9ci5leHRyYSkhPW51bGwmJkMucGFyZW50aGVzaXplZCl8fFUocyl8fG49PT1cImFyZ3VtZW50c1wiJiZMKHMpfHxuPT09XCJyaWdodFwiJiZzLnR5cGU9PT1cIk5HUGlwZUV4cHJlc3Npb25cInx8bj09PVwicHJvcGVydHlcIiYmcy50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCJ8fHMudHlwZT09PVwiQXNzaWdubWVudEV4cHJlc3Npb25cIik7Y2FzZVwiSlNYRnJhZ21lbnRcIjpjYXNlXCJKU1hFbGVtZW50XCI6cmV0dXJuIG49PT1cImNhbGxlZVwifHxuPT09XCJsZWZ0XCImJnMudHlwZT09PVwiQmluYXJ5RXhwcmVzc2lvblwiJiZzLm9wZXJhdG9yPT09XCI8XCJ8fCFVKHMpJiZzLnR5cGUhPT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCImJnMudHlwZSE9PVwiQXNzaWdubWVudEV4cHJlc3Npb25cIiYmcy50eXBlIT09XCJBc3NpZ25tZW50UGF0dGVyblwiJiZzLnR5cGUhPT1cIkJpbmFyeUV4cHJlc3Npb25cIiYmcy50eXBlIT09XCJOZXdFeHByZXNzaW9uXCImJnMudHlwZSE9PVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCImJnMudHlwZSE9PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiJiZzLnR5cGUhPT1cIkpzRXhwcmVzc2lvblJvb3RcIiYmcy50eXBlIT09XCJKU1hBdHRyaWJ1dGVcIiYmcy50eXBlIT09XCJKU1hFbGVtZW50XCImJnMudHlwZSE9PVwiSlNYRXhwcmVzc2lvbkNvbnRhaW5lclwiJiZzLnR5cGUhPT1cIkpTWEZyYWdtZW50XCImJnMudHlwZSE9PVwiTG9naWNhbEV4cHJlc3Npb25cIiYmIUwocykmJiFDZShzKSYmcy50eXBlIT09XCJSZXR1cm5TdGF0ZW1lbnRcIiYmcy50eXBlIT09XCJUaHJvd1N0YXRlbWVudFwiJiZzLnR5cGUhPT1cIlR5cGVDYXN0RXhwcmVzc2lvblwiJiZzLnR5cGUhPT1cIlZhcmlhYmxlRGVjbGFyYXRvclwiJiZzLnR5cGUhPT1cIllpZWxkRXhwcmVzc2lvblwiO2Nhc2VcIlRTSW5zdGFudGlhdGlvbkV4cHJlc3Npb25cIjpyZXR1cm4gbj09PVwib2JqZWN0XCImJlcocyl9cmV0dXJuITF9dmFyIGFjPVIoW1wiQmxvY2tTdGF0ZW1lbnRcIixcIkJyZWFrU3RhdGVtZW50XCIsXCJDb21wb25lbnREZWNsYXJhdGlvblwiLFwiQ2xhc3NCb2R5XCIsXCJDbGFzc0RlY2xhcmF0aW9uXCIsXCJDbGFzc01ldGhvZFwiLFwiQ2xhc3NQcm9wZXJ0eVwiLFwiUHJvcGVydHlEZWZpbml0aW9uXCIsXCJDbGFzc1ByaXZhdGVQcm9wZXJ0eVwiLFwiQ29udGludWVTdGF0ZW1lbnRcIixcIkRlYnVnZ2VyU3RhdGVtZW50XCIsXCJEZWNsYXJlQ29tcG9uZW50XCIsXCJEZWNsYXJlQ2xhc3NcIixcIkRlY2xhcmVFeHBvcnRBbGxEZWNsYXJhdGlvblwiLFwiRGVjbGFyZUV4cG9ydERlY2xhcmF0aW9uXCIsXCJEZWNsYXJlRnVuY3Rpb25cIixcIkRlY2xhcmVIb29rXCIsXCJEZWNsYXJlSW50ZXJmYWNlXCIsXCJEZWNsYXJlTW9kdWxlXCIsXCJEZWNsYXJlTW9kdWxlRXhwb3J0c1wiLFwiRGVjbGFyZU5hbWVzcGFjZVwiLFwiRGVjbGFyZVZhcmlhYmxlXCIsXCJEZWNsYXJlRW51bVwiLFwiRG9XaGlsZVN0YXRlbWVudFwiLFwiRW51bURlY2xhcmF0aW9uXCIsXCJFeHBvcnRBbGxEZWNsYXJhdGlvblwiLFwiRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uXCIsXCJFeHBvcnROYW1lZERlY2xhcmF0aW9uXCIsXCJFeHByZXNzaW9uU3RhdGVtZW50XCIsXCJGb3JJblN0YXRlbWVudFwiLFwiRm9yT2ZTdGF0ZW1lbnRcIixcIkZvclN0YXRlbWVudFwiLFwiRnVuY3Rpb25EZWNsYXJhdGlvblwiLFwiSG9va0RlY2xhcmF0aW9uXCIsXCJJZlN0YXRlbWVudFwiLFwiSW1wb3J0RGVjbGFyYXRpb25cIixcIkludGVyZmFjZURlY2xhcmF0aW9uXCIsXCJMYWJlbGVkU3RhdGVtZW50XCIsXCJNZXRob2REZWZpbml0aW9uXCIsXCJSZXR1cm5TdGF0ZW1lbnRcIixcIlN3aXRjaFN0YXRlbWVudFwiLFwiVGhyb3dTdGF0ZW1lbnRcIixcIlRyeVN0YXRlbWVudFwiLFwiVFNEZWNsYXJlRnVuY3Rpb25cIixcIlRTRW51bURlY2xhcmF0aW9uXCIsXCJUU0ltcG9ydEVxdWFsc0RlY2xhcmF0aW9uXCIsXCJUU0ludGVyZmFjZURlY2xhcmF0aW9uXCIsXCJUU01vZHVsZURlY2xhcmF0aW9uXCIsXCJUU05hbWVzcGFjZUV4cG9ydERlY2xhcmF0aW9uXCIsXCJUeXBlQWxpYXNcIixcIlZhcmlhYmxlRGVjbGFyYXRpb25cIixcIldoaWxlU3RhdGVtZW50XCIsXCJXaXRoU3RhdGVtZW50XCJdKTtmdW5jdGlvbiBvYyhlKXtsZXQgdD0wLHtub2RlOnJ9PWU7Zm9yKDtyOyl7bGV0IG49ZS5nZXRQYXJlbnROb2RlKHQrKyk7aWYoKG49PW51bGw/dm9pZCAwOm4udHlwZSk9PT1cIkZvclN0YXRlbWVudFwiJiZuLmluaXQ9PT1yKXJldHVybiEwO3I9bn1yZXR1cm4hMX1mdW5jdGlvbiBwYyhlKXtyZXR1cm4gdXIoZSx0PT50LnR5cGU9PT1cIk9iamVjdFR5cGVBbm5vdGF0aW9uXCImJnVyKHQscj0+ci50eXBlPT09XCJGdW5jdGlvblR5cGVBbm5vdGF0aW9uXCIpKX1mdW5jdGlvbiBjYyhlKXtyZXR1cm4gc2UoZSl9ZnVuY3Rpb24geXIoZSl7bGV0e3BhcmVudDp0LGtleTpyfT1lO3N3aXRjaCh0LnR5cGUpe2Nhc2VcIk5HUGlwZUV4cHJlc3Npb25cIjppZihyPT09XCJhcmd1bWVudHNcIiYmZS5pc0xhc3QpcmV0dXJuIGUuY2FsbFBhcmVudCh5cik7YnJlYWs7Y2FzZVwiT2JqZWN0UHJvcGVydHlcIjppZihyPT09XCJ2YWx1ZVwiKXJldHVybiBlLmNhbGxQYXJlbnQoKCk9PmUua2V5PT09XCJwcm9wZXJ0aWVzXCImJmUuaXNMYXN0KTticmVhaztjYXNlXCJCaW5hcnlFeHByZXNzaW9uXCI6Y2FzZVwiTG9naWNhbEV4cHJlc3Npb25cIjppZihyPT09XCJyaWdodFwiKXJldHVybiBlLmNhbGxQYXJlbnQoeXIpO2JyZWFrO2Nhc2VcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiOmlmKHI9PT1cImFsdGVybmF0ZVwiKXJldHVybiBlLmNhbGxQYXJlbnQoeXIpO2JyZWFrO2Nhc2VcIlVuYXJ5RXhwcmVzc2lvblwiOmlmKHQucHJlZml4KXJldHVybiBlLmNhbGxQYXJlbnQoeXIpO2JyZWFrfXJldHVybiExfWZ1bmN0aW9uIGZpKGUsdCl7bGV0e25vZGU6cixwYXJlbnQ6bn09ZTtyZXR1cm4gci50eXBlPT09XCJGdW5jdGlvbkV4cHJlc3Npb25cInx8ci50eXBlPT09XCJDbGFzc0V4cHJlc3Npb25cIj9uLnR5cGU9PT1cIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvblwifHwhb3MoZSx0KTohSnQocil8fG4udHlwZSE9PVwiRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uXCImJm9zKGUsdCk/ITE6ZS5jYWxsKCgpPT5maShlLHQpLC4uLkxyKHIpKX1mdW5jdGlvbiBsYyhlKXtyZXR1cm4hIShlLm1hdGNoKHZvaWQgMCwodCxyKT0+cj09PVwiZXhwcmVzc2lvblwiJiZ0LnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiLCh0LHIpPT5yPT09XCJ0YWdcIiYmdC50eXBlPT09XCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIil8fGUubWF0Y2godD0+dC50eXBlPT09XCJPcHRpb25hbENhbGxFeHByZXNzaW9uXCJ8fHQudHlwZT09PVwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCIsKHQscik9PnI9PT1cInRhZ1wiJiZ0LnR5cGU9PT1cIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiKXx8ZS5tYXRjaCh0PT50LnR5cGU9PT1cIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cInx8dC50eXBlPT09XCJPcHRpb25hbE1lbWJlckV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwiZXhwcmVzc2lvblwiJiZ0LnR5cGU9PT1cIlRTTm9uTnVsbEV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwidGFnXCImJnQudHlwZT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCIpfHxlLm1hdGNoKHZvaWQgMCwodCxyKT0+cj09PVwiZXhwcmVzc2lvblwiJiZ0LnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiLCh0LHIpPT5yPT09XCJleHByZXNzaW9uXCImJnQudHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiLCh0LHIpPT5yPT09XCJ0YWdcIiYmdC50eXBlPT09XCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIil8fGUubWF0Y2godm9pZCAwLCh0LHIpPT5yPT09XCJleHByZXNzaW9uXCImJnQudHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiLCh0LHIpPT5yPT09XCJleHByZXNzaW9uXCImJnQudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCIsKHQscik9PnI9PT1cInRhZ1wiJiZ0LnR5cGU9PT1cIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiKXx8ZS5tYXRjaCh0PT50LnR5cGU9PT1cIk9wdGlvbmFsTWVtYmVyRXhwcmVzc2lvblwifHx0LnR5cGU9PT1cIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwib2JqZWN0XCImJnQudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwifHxyPT09XCJjYWxsZWVcIiYmKHQudHlwZT09PVwiQ2FsbEV4cHJlc3Npb25cInx8dC50eXBlPT09XCJOZXdFeHByZXNzaW9uXCIpKXx8ZS5tYXRjaCh0PT50LnR5cGU9PT1cIk9wdGlvbmFsTWVtYmVyRXhwcmVzc2lvblwifHx0LnR5cGU9PT1cIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwiZXhwcmVzc2lvblwiJiZ0LnR5cGU9PT1cIlRTTm9uTnVsbEV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwib2JqZWN0XCImJnQudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwifHxyPT09XCJjYWxsZWVcIiYmdC50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiKXx8ZS5tYXRjaCh0PT50LnR5cGU9PT1cIkNhbGxFeHByZXNzaW9uXCJ8fHQudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwiLCh0LHIpPT5yPT09XCJleHByZXNzaW9uXCImJnQudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCIpJiYoZS5tYXRjaCh2b2lkIDAsdm9pZCAwLCh0LHIpPT5yPT09XCJjYWxsZWVcIiYmKHQudHlwZT09PVwiQ2FsbEV4cHJlc3Npb25cIiYmIXQub3B0aW9uYWx8fHQudHlwZT09PVwiTmV3RXhwcmVzc2lvblwiKXx8cj09PVwib2JqZWN0XCImJnQudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwiJiYhdC5vcHRpb25hbCl8fGUubWF0Y2godm9pZCAwLHZvaWQgMCwodCxyKT0+cj09PVwiZXhwcmVzc2lvblwiJiZ0LnR5cGU9PT1cIlRTTm9uTnVsbEV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwib2JqZWN0XCImJnQudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwifHxyPT09XCJjYWxsZWVcIiYmdC50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiKSl8fGUubWF0Y2godD0+dC50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwifHx0LnR5cGU9PT1cIk1lbWJlckV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwiZXhwcmVzc2lvblwiJiZ0LnR5cGU9PT1cIlRTTm9uTnVsbEV4cHJlc3Npb25cIiwodCxyKT0+cj09PVwiZXhwcmVzc2lvblwiJiZ0LnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiLCh0LHIpPT5yPT09XCJvYmplY3RcIiYmdC50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCJ8fHI9PT1cImNhbGxlZVwiJiZ0LnR5cGU9PT1cIkNhbGxFeHByZXNzaW9uXCIpKX1mdW5jdGlvbiBwcyhlKXtyZXR1cm4gZS50eXBlPT09XCJJZGVudGlmaWVyXCI/ITA6VyhlKT8hZS5jb21wdXRlZCYmIWUub3B0aW9uYWwmJmUucHJvcGVydHkudHlwZT09PVwiSWRlbnRpZmllclwiJiZwcyhlLm9iamVjdCk6ITF9ZnVuY3Rpb24gbWMoZSl7cmV0dXJuIGUudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCImJihlPWUuZXhwcmVzc2lvbikscHMoZSl8fEwoZSkmJiFlLm9wdGlvbmFsJiZwcyhlLmNhbGxlZSl9dmFyIGtlPW9zO2Z1bmN0aW9uIHljKGUsdCl7bGV0IHI9dC0xO3I9WGUoZSxyLHtiYWNrd2FyZHM6ITB9KSxyPUhlKGUscix7YmFja3dhcmRzOiEwfSkscj1YZShlLHIse2JhY2t3YXJkczohMH0pO2xldCBuPUhlKGUscix7YmFja3dhcmRzOiEwfSk7cmV0dXJuIHIhPT1ufXZhciBFaT15Yzt2YXIgRGM9KCk9PiEwO2Z1bmN0aW9uIGNzKGUsdCl7bGV0IHI9ZS5ub2RlO3JldHVybiByLnByaW50ZWQ9ITAsdC5wcmludGVyLnByaW50Q29tbWVudChlLHQpfWZ1bmN0aW9uIGZjKGUsdCl7dmFyIHk7bGV0IHI9ZS5ub2RlLG49W2NzKGUsdCldLHtwcmludGVyOnMsb3JpZ2luYWxUZXh0OnUsbG9jU3RhcnQ6aSxsb2NFbmQ6YX09dDtpZigoeT1zLmlzQmxvY2tDb21tZW50KT09bnVsbD92b2lkIDA6eS5jYWxsKHMscikpe2xldCBEPVoodSxhKHIpKT9aKHUsaShyKSx7YmFja3dhcmRzOiEwfSk/Rjp4OlwiIFwiO24ucHVzaChEKX1lbHNlIG4ucHVzaChGKTtsZXQgcD1IZSh1LFhlKHUsYShyKSkpO3JldHVybiBwIT09ITEmJloodSxwKSYmbi5wdXNoKEYpLG59ZnVuY3Rpb24gRWMoZSx0LHIpe3ZhciBwO2xldCBuPWUubm9kZSxzPWNzKGUsdCkse3ByaW50ZXI6dSxvcmlnaW5hbFRleHQ6aSxsb2NTdGFydDphfT10LG89KHA9dS5pc0Jsb2NrQ29tbWVudCk9PW51bGw/dm9pZCAwOnAuY2FsbCh1LG4pO2lmKHIhPW51bGwmJnIuaGFzTGluZVN1ZmZpeCYmIShyIT1udWxsJiZyLmlzQmxvY2spfHxaKGksYShuKSx7YmFja3dhcmRzOiEwfSkpe2xldCB5PUVpKGksYShuKSk7cmV0dXJue2RvYzpVbihbRix5P0Y6XCJcIixzXSksaXNCbG9jazpvLGhhc0xpbmVTdWZmaXg6ITB9fXJldHVybiFvfHxyIT1udWxsJiZyLmhhc0xpbmVTdWZmaXg/e2RvYzpbVW4oW1wiIFwiLHNdKSxFZV0saXNCbG9jazpvLGhhc0xpbmVTdWZmaXg6ITB9Ontkb2M6W1wiIFwiLHNdLGlzQmxvY2s6byxoYXNMaW5lU3VmZml4OiExfX1mdW5jdGlvbiBKKGUsdCxyPXt9KXtsZXR7bm9kZTpufT1lO2lmKCFPKG49PW51bGw/dm9pZCAwOm4uY29tbWVudHMpKXJldHVyblwiXCI7bGV0e2luZGVudDpzPSExLG1hcmtlcjp1LGZpbHRlcjppPURjfT1yLGE9W107aWYoZS5lYWNoKCh7bm9kZTpwfSk9PntwLmxlYWRpbmd8fHAudHJhaWxpbmd8fHAubWFya2VyIT09dXx8IWkocCl8fGEucHVzaChjcyhlLHQpKX0sXCJjb21tZW50c1wiKSxhLmxlbmd0aD09PTApcmV0dXJuXCJcIjtsZXQgbz1iKEYsYSk7cmV0dXJuIHM/ZihbRixvXSk6b31mdW5jdGlvbiBscyhlLHQpe2xldCByPWUubm9kZTtpZighcilyZXR1cm57fTtsZXQgbj10W1N5bWJvbC5mb3IoXCJwcmludGVkQ29tbWVudHNcIildO2lmKChyLmNvbW1lbnRzfHxbXSkuZmlsdGVyKG89PiFuLmhhcyhvKSkubGVuZ3RoPT09MClyZXR1cm57bGVhZGluZzpcIlwiLHRyYWlsaW5nOlwiXCJ9O2xldCB1PVtdLGk9W10sYTtyZXR1cm4gZS5lYWNoKCgpPT57bGV0IG89ZS5ub2RlO2lmKG4hPW51bGwmJm4uaGFzKG8pKXJldHVybjtsZXR7bGVhZGluZzpwLHRyYWlsaW5nOnl9PW87cD91LnB1c2goZmMoZSx0KSk6eSYmKGE9RWMoZSx0LGEpLGkucHVzaChhLmRvYykpfSxcImNvbW1lbnRzXCIpLHtsZWFkaW5nOnUsdHJhaWxpbmc6aX19ZnVuY3Rpb24geWUoZSx0LHIpe2xldHtsZWFkaW5nOm4sdHJhaWxpbmc6c309bHMoZSxyKTtyZXR1cm4hbiYmIXM/dDpscih0LHU9PltuLHUsc10pfXZhciBtcz1jbGFzcyBleHRlbmRzIEVycm9ye25hbWU9XCJVbmV4cGVjdGVkTm9kZUVycm9yXCI7Y29uc3RydWN0b3IodCxyLG49XCJ0eXBlXCIpe3N1cGVyKGBVbmV4cGVjdGVkICR7cn0gbm9kZSAke259OiAke0pTT04uc3RyaW5naWZ5KHRbbl0pfS5gKSx0aGlzLm5vZGU9dH19LE5lPW1zO2Z1bmN0aW9uIHlzKGUpe2lmKHR5cGVvZiBlIT1cInN0cmluZ1wiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIHN0cmluZ1wiKTtyZXR1cm4gZS5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC8tL2csXCJcXFxceDJkXCIpfXZhciBHZSxEcz1jbGFzc3tjb25zdHJ1Y3Rvcih0KXtVcyh0aGlzLEdlKTtZcyh0aGlzLEdlLG5ldyBTZXQodCkpfWdldExlYWRpbmdXaGl0ZXNwYWNlQ291bnQodCl7bGV0IHI9Y3QodGhpcyxHZSksbj0wO2ZvcihsZXQgcz0wO3M8dC5sZW5ndGgmJnIuaGFzKHQuY2hhckF0KHMpKTtzKyspbisrO3JldHVybiBufWdldFRyYWlsaW5nV2hpdGVzcGFjZUNvdW50KHQpe2xldCByPWN0KHRoaXMsR2UpLG49MDtmb3IobGV0IHM9dC5sZW5ndGgtMTtzPj0wJiZyLmhhcyh0LmNoYXJBdChzKSk7cy0tKW4rKztyZXR1cm4gbn1nZXRMZWFkaW5nV2hpdGVzcGFjZSh0KXtsZXQgcj10aGlzLmdldExlYWRpbmdXaGl0ZXNwYWNlQ291bnQodCk7cmV0dXJuIHQuc2xpY2UoMCxyKX1nZXRUcmFpbGluZ1doaXRlc3BhY2UodCl7bGV0IHI9dGhpcy5nZXRUcmFpbGluZ1doaXRlc3BhY2VDb3VudCh0KTtyZXR1cm4gdC5zbGljZSh0Lmxlbmd0aC1yKX1oYXNMZWFkaW5nV2hpdGVzcGFjZSh0KXtyZXR1cm4gY3QodGhpcyxHZSkuaGFzKHQuY2hhckF0KDApKX1oYXNUcmFpbGluZ1doaXRlc3BhY2UodCl7cmV0dXJuIGN0KHRoaXMsR2UpLmhhcyhNKCExLHQsLTEpKX10cmltU3RhcnQodCl7bGV0IHI9dGhpcy5nZXRMZWFkaW5nV2hpdGVzcGFjZUNvdW50KHQpO3JldHVybiB0LnNsaWNlKHIpfXRyaW1FbmQodCl7bGV0IHI9dGhpcy5nZXRUcmFpbGluZ1doaXRlc3BhY2VDb3VudCh0KTtyZXR1cm4gdC5zbGljZSgwLHQubGVuZ3RoLXIpfXRyaW0odCl7cmV0dXJuIHRoaXMudHJpbUVuZCh0aGlzLnRyaW1TdGFydCh0KSl9c3BsaXQodCxyPSExKXtsZXQgbj1gWyR7eXMoWy4uLmN0KHRoaXMsR2UpXS5qb2luKFwiXCIpKX1dK2Ascz1uZXcgUmVnRXhwKHI/YCgke259KWA6bixcInVcIik7cmV0dXJuIHQuc3BsaXQocyl9aGFzV2hpdGVzcGFjZUNoYXJhY3Rlcih0KXtsZXQgcj1jdCh0aGlzLEdlKTtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbCh0LG49PnIuaGFzKG4pKX1oYXNOb25XaGl0ZXNwYWNlQ2hhcmFjdGVyKHQpe2xldCByPWN0KHRoaXMsR2UpO3JldHVybiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKHQsbj0+IXIuaGFzKG4pKX1pc1doaXRlc3BhY2VPbmx5KHQpe2xldCByPWN0KHRoaXMsR2UpO3JldHVybiBBcnJheS5wcm90b3R5cGUuZXZlcnkuY2FsbCh0LG49PnIuaGFzKG4pKX19O0dlPW5ldyBXZWFrTWFwO3ZhciBGaT1Eczt2YXIgSHI9bmV3IEZpKGAgXG5cXHJcdGApLGZzPWU9PmU9PT1cIlwifHxlPT09eHx8ZT09PUZ8fGU9PT1FO2Z1bmN0aW9uIEZjKGUsdCxyKXt2YXIgXyx2LGosSSxHO2xldHtub2RlOm59PWU7aWYobi50eXBlPT09XCJKU1hFbGVtZW50XCImJkxjKG4pKXJldHVybltyKFwib3BlbmluZ0VsZW1lbnRcIikscihcImNsb3NpbmdFbGVtZW50XCIpXTtsZXQgcz1uLnR5cGU9PT1cIkpTWEVsZW1lbnRcIj9yKFwib3BlbmluZ0VsZW1lbnRcIik6cihcIm9wZW5pbmdGcmFnbWVudFwiKSx1PW4udHlwZT09PVwiSlNYRWxlbWVudFwiP3IoXCJjbG9zaW5nRWxlbWVudFwiKTpyKFwiY2xvc2luZ0ZyYWdtZW50XCIpO2lmKG4uY2hpbGRyZW4ubGVuZ3RoPT09MSYmbi5jaGlsZHJlblswXS50eXBlPT09XCJKU1hFeHByZXNzaW9uQ29udGFpbmVyXCImJihuLmNoaWxkcmVuWzBdLmV4cHJlc3Npb24udHlwZT09PVwiVGVtcGxhdGVMaXRlcmFsXCJ8fG4uY2hpbGRyZW5bMF0uZXhwcmVzc2lvbi50eXBlPT09XCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIikpcmV0dXJuW3MsLi4uZS5tYXAocixcImNoaWxkcmVuXCIpLHVdO24uY2hpbGRyZW49bi5jaGlsZHJlbi5tYXAoUD0+d2MoUCk/e3R5cGU6XCJKU1hUZXh0XCIsdmFsdWU6XCIgXCIscmF3OlwiIFwifTpQKTtsZXQgaT1uLmNoaWxkcmVuLnNvbWUoWCksYT1uLmNoaWxkcmVuLmZpbHRlcihQPT5QLnR5cGU9PT1cIkpTWEV4cHJlc3Npb25Db250YWluZXJcIikubGVuZ3RoPjEsbz1uLnR5cGU9PT1cIkpTWEVsZW1lbnRcIiYmbi5vcGVuaW5nRWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aD4xLHA9cmUocyl8fGl8fG98fGEseT1lLnBhcmVudC5yb290TWFya2VyPT09XCJtZHhcIixEPXQuc2luZ2xlUXVvdGU/XCJ7JyAnfVwiOid7XCIgXCJ9JyxtPXk/eDpCKFtELEVdLFwiIFwiKSxDPSgodj0oXz1uLm9wZW5pbmdFbGVtZW50KT09bnVsbD92b2lkIDA6Xy5uYW1lKT09bnVsbD92b2lkIDA6di5uYW1lKT09PVwiZmJ0XCIsYz1DYyhlLHQscixtLEMpLEE9bi5jaGlsZHJlbi5zb21lKFA9PkRyKFApKTtmb3IobGV0IFA9Yy5sZW5ndGgtMjtQPj0wO1AtLSl7bGV0IE49Y1tQXT09PVwiXCImJmNbUCsxXT09PVwiXCIsdWU9Y1tQXT09PUYmJmNbUCsxXT09PVwiXCImJmNbUCsyXT09PUYsUT0oY1tQXT09PUV8fGNbUF09PT1GKSYmY1tQKzFdPT09XCJcIiYmY1tQKzJdPT09bSxCdD1jW1BdPT09bSYmY1tQKzFdPT09XCJcIiYmKGNbUCsyXT09PUV8fGNbUCsyXT09PUYpLEN0PWNbUF09PT1tJiZjW1ArMV09PT1cIlwiJiZjW1ArMl09PT1tLHc9Y1tQXT09PUUmJmNbUCsxXT09PVwiXCImJmNbUCsyXT09PUZ8fGNbUF09PT1GJiZjW1ArMV09PT1cIlwiJiZjW1ArMl09PT1FO3VlJiZBfHxOfHxRfHxDdHx8dz9jLnNwbGljZShQLDIpOkJ0JiZjLnNwbGljZShQKzEsMil9Zm9yKDtjLmxlbmd0aD4wJiZmcyhNKCExLGMsLTEpKTspYy5wb3AoKTtmb3IoO2MubGVuZ3RoPjEmJmZzKGNbMF0pJiZmcyhjWzFdKTspYy5zaGlmdCgpLGMuc2hpZnQoKTtsZXQgZD1bXCJcIl07Zm9yKGxldFtQLE5db2YgYy5lbnRyaWVzKCkpe2lmKE49PT1tKXtpZihQPT09MSYmUHUoY1tQLTFdKSl7aWYoYy5sZW5ndGg9PT0yKXtkLnB1c2goW2QucG9wKCksRF0pO2NvbnRpbnVlfWQucHVzaChbRCxGXSxcIlwiKTtjb250aW51ZX1lbHNlIGlmKFA9PT1jLmxlbmd0aC0xKXtkLnB1c2goW2QucG9wKCksRF0pO2NvbnRpbnVlfWVsc2UgaWYoY1tQLTFdPT09XCJcIiYmY1tQLTJdPT09Ril7ZC5wdXNoKFtkLnBvcCgpLERdKTtjb250aW51ZX19UCUyPT09MD9kLnB1c2goW2QucG9wKCksTl0pOmQucHVzaChOLFwiXCIpLHJlKE4pJiYocD0hMCl9bGV0IFM9QT9xcihkKTpsKGQse3Nob3VsZEJyZWFrOiEwfSk7aWYoKChqPXQuY3Vyc29yTm9kZSk9PW51bGw/dm9pZCAwOmoudHlwZSk9PT1cIkpTWFRleHRcIiYmbi5jaGlsZHJlbi5pbmNsdWRlcyh0LmN1cnNvck5vZGUpP1M9W21yLFMsbXJdOigoST10Lm5vZGVCZWZvcmVDdXJzb3IpPT1udWxsP3ZvaWQgMDpJLnR5cGUpPT09XCJKU1hUZXh0XCImJm4uY2hpbGRyZW4uaW5jbHVkZXModC5ub2RlQmVmb3JlQ3Vyc29yKT9TPVttcixTXTooKEc9dC5ub2RlQWZ0ZXJDdXJzb3IpPT1udWxsP3ZvaWQgMDpHLnR5cGUpPT09XCJKU1hUZXh0XCImJm4uY2hpbGRyZW4uaW5jbHVkZXModC5ub2RlQWZ0ZXJDdXJzb3IpJiYoUz1bUyxtcl0pLHkpcmV0dXJuIFM7bGV0IGc9bChbcyxmKFtGLFNdKSxGLHVdKTtyZXR1cm4gcD9nOmV0KFtsKFtzLC4uLmMsdV0pLGddKX1mdW5jdGlvbiBDYyhlLHQscixuLHMpe2xldCB1PVwiXCIsaT1bdV07ZnVuY3Rpb24gYShwKXt1PXAsaS5wdXNoKFtpLnBvcCgpLHBdKX1mdW5jdGlvbiBvKHApe3AhPT1cIlwiJiYodT1wLGkucHVzaChwLFwiXCIpKX1yZXR1cm4gZS5lYWNoKCh7bm9kZTpwLG5leHQ6eX0pPT57aWYocC50eXBlPT09XCJKU1hUZXh0XCIpe2xldCBEPWZlKHApO2lmKERyKHApKXtsZXQgbT1Ici5zcGxpdChELCEwKTttWzBdPT09XCJcIiYmKG0uc2hpZnQoKSwvXFxuL3UudGVzdChtWzBdKT9vKEFpKHMsbVsxXSxwLHkpKTpvKG4pLG0uc2hpZnQoKSk7bGV0IEM7aWYoTSghMSxtLC0xKT09PVwiXCImJihtLnBvcCgpLEM9bS5wb3AoKSksbS5sZW5ndGg9PT0wKXJldHVybjtmb3IobGV0W2MsQV1vZiBtLmVudHJpZXMoKSljJTI9PT0xP28oeCk6YShBKTtDIT09dm9pZCAwPy9cXG4vdS50ZXN0KEMpP28oQWkocyx1LHAseSkpOm8obik6byhDaShzLHUscCx5KSl9ZWxzZS9cXG4vdS50ZXN0KEQpP0QubWF0Y2goL1xcbi9ndSkubGVuZ3RoPjEmJm8oRik6byhuKX1lbHNle2xldCBEPXIoKTtpZihhKEQpLHkmJkRyKHkpKXtsZXQgQz1Ici50cmltKGZlKHkpKSxbY109SHIuc3BsaXQoQyk7byhDaShzLGMscCx5KSl9ZWxzZSBvKEYpfX0sXCJjaGlsZHJlblwiKSxpfWZ1bmN0aW9uIENpKGUsdCxyLG4pe3JldHVybiBlP1wiXCI6ci50eXBlPT09XCJKU1hFbGVtZW50XCImJiFyLmNsb3NpbmdFbGVtZW50fHwobj09bnVsbD92b2lkIDA6bi50eXBlKT09PVwiSlNYRWxlbWVudFwiJiYhbi5jbG9zaW5nRWxlbWVudD90Lmxlbmd0aD09PTE/RTpGOkV9ZnVuY3Rpb24gQWkoZSx0LHIsbil7cmV0dXJuIGU/Rjp0Lmxlbmd0aD09PTE/ci50eXBlPT09XCJKU1hFbGVtZW50XCImJiFyLmNsb3NpbmdFbGVtZW50fHwobj09bnVsbD92b2lkIDA6bi50eXBlKT09PVwiSlNYRWxlbWVudFwiJiYhbi5jbG9zaW5nRWxlbWVudD9GOkU6Rn12YXIgQWM9bmV3IFNldChbXCJBcnJheUV4cHJlc3Npb25cIixcIlR1cGxlRXhwcmVzc2lvblwiLFwiSlNYQXR0cmlidXRlXCIsXCJKU1hFbGVtZW50XCIsXCJKU1hFeHByZXNzaW9uQ29udGFpbmVyXCIsXCJKU1hGcmFnbWVudFwiLFwiRXhwcmVzc2lvblN0YXRlbWVudFwiLFwiQ2FsbEV4cHJlc3Npb25cIixcIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIixcIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiLFwiSnNFeHByZXNzaW9uUm9vdFwiXSk7ZnVuY3Rpb24gVGMoZSx0LHIpe2xldHtwYXJlbnQ6bn09ZTtpZihBYy5oYXMobi50eXBlKSlyZXR1cm4gdDtsZXQgcz1lLm1hdGNoKHZvaWQgMCxpPT5pLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCIsTCxpPT5pLnR5cGU9PT1cIkpTWEV4cHJlc3Npb25Db250YWluZXJcIiksdT1rZShlLHIpO3JldHVybiBsKFt1P1wiXCI6QihcIihcIiksZihbRSx0XSksRSx1P1wiXCI6QihcIilcIildLHtzaG91bGRCcmVhazpzfSl9ZnVuY3Rpb24gZGMoZSx0LHIpe2xldHtub2RlOm59PWUscz1bXTtpZihzLnB1c2gocihcIm5hbWVcIikpLG4udmFsdWUpe2xldCB1O2lmKHRlKG4udmFsdWUpKXtsZXQgaT1mZShuLnZhbHVlKSxhPVkoITEsWSghMSxpLnNsaWNlKDEsLTEpLFwiJmFwb3M7XCIsXCInXCIpLFwiJnF1b3Q7XCIsJ1wiJyksbz1TcihhLHQuanN4U2luZ2xlUXVvdGUpO2E9bz09PSdcIic/WSghMSxhLCdcIicsXCImcXVvdDtcIik6WSghMSxhLFwiJ1wiLFwiJmFwb3M7XCIpLHU9ZS5jYWxsKCgpPT55ZShlLHZlKG8rYStvKSx0KSxcInZhbHVlXCIpfWVsc2UgdT1yKFwidmFsdWVcIik7cy5wdXNoKFwiPVwiLHUpfXJldHVybiBzfWZ1bmN0aW9uIHhjKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9KHUsaSk9PnUudHlwZT09PVwiSlNYRW1wdHlFeHByZXNzaW9uXCJ8fCFUKHUpJiYoVSh1KXx8c2UodSl8fHUudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cInx8dS50eXBlPT09XCJBd2FpdEV4cHJlc3Npb25cIiYmKHModS5hcmd1bWVudCx1KXx8dS5hcmd1bWVudC50eXBlPT09XCJKU1hFbGVtZW50XCIpfHxMKHUpfHx1LnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiJiZMKHUuZXhwcmVzc2lvbil8fHUudHlwZT09PVwiRnVuY3Rpb25FeHByZXNzaW9uXCJ8fHUudHlwZT09PVwiVGVtcGxhdGVMaXRlcmFsXCJ8fHUudHlwZT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCJ8fHUudHlwZT09PVwiRG9FeHByZXNzaW9uXCJ8fFgoaSkmJih1LnR5cGU9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwifHxEZSh1KSkpO3JldHVybiBzKG4uZXhwcmVzc2lvbixlLnBhcmVudCk/bChbXCJ7XCIscihcImV4cHJlc3Npb25cIiksamUsXCJ9XCJdKTpsKFtcIntcIixmKFtFLHIoXCJleHByZXNzaW9uXCIpXSksRSxqZSxcIn1cIl0pfWZ1bmN0aW9uIGhjKGUsdCxyKXt2YXIgYSxvO2xldHtub2RlOm59PWUscz1UKG4ubmFtZSl8fFQobi50eXBlUGFyYW1ldGVycyl8fFQobi50eXBlQXJndW1lbnRzKTtpZihuLnNlbGZDbG9zaW5nJiZuLmF0dHJpYnV0ZXMubGVuZ3RoPT09MCYmIXMpcmV0dXJuW1wiPFwiLHIoXCJuYW1lXCIpLG4udHlwZUFyZ3VtZW50cz9yKFwidHlwZUFyZ3VtZW50c1wiKTpyKFwidHlwZVBhcmFtZXRlcnNcIiksXCIgLz5cIl07aWYoKChhPW4uYXR0cmlidXRlcyk9PW51bGw/dm9pZCAwOmEubGVuZ3RoKT09PTEmJnRlKG4uYXR0cmlidXRlc1swXS52YWx1ZSkmJiFuLmF0dHJpYnV0ZXNbMF0udmFsdWUudmFsdWUuaW5jbHVkZXMoYFxuYCkmJiFzJiYhVChuLmF0dHJpYnV0ZXNbMF0pKXJldHVybiBsKFtcIjxcIixyKFwibmFtZVwiKSxuLnR5cGVBcmd1bWVudHM/cihcInR5cGVBcmd1bWVudHNcIik6cihcInR5cGVQYXJhbWV0ZXJzXCIpLFwiIFwiLC4uLmUubWFwKHIsXCJhdHRyaWJ1dGVzXCIpLG4uc2VsZkNsb3Npbmc/XCIgLz5cIjpcIj5cIl0pO2xldCB1PShvPW4uYXR0cmlidXRlcyk9PW51bGw/dm9pZCAwOm8uc29tZShwPT50ZShwLnZhbHVlKSYmcC52YWx1ZS52YWx1ZS5pbmNsdWRlcyhgXG5gKSksaT10LnNpbmdsZUF0dHJpYnV0ZVBlckxpbmUmJm4uYXR0cmlidXRlcy5sZW5ndGg+MT9GOng7cmV0dXJuIGwoW1wiPFwiLHIoXCJuYW1lXCIpLG4udHlwZUFyZ3VtZW50cz9yKFwidHlwZUFyZ3VtZW50c1wiKTpyKFwidHlwZVBhcmFtZXRlcnNcIiksZihlLm1hcCgoKT0+W2kscigpXSxcImF0dHJpYnV0ZXNcIikpLC4uLmdjKG4sdCxzKV0se3Nob3VsZEJyZWFrOnV9KX1mdW5jdGlvbiBnYyhlLHQscil7cmV0dXJuIGUuc2VsZkNsb3Npbmc/W3gsXCIvPlwiXTpTYyhlLHQscik/W1wiPlwiXTpbRSxcIj5cIl19ZnVuY3Rpb24gU2MoZSx0LHIpe2xldCBuPWUuYXR0cmlidXRlcy5sZW5ndGg+MCYmVChNKCExLGUuYXR0cmlidXRlcywtMSksaC5UcmFpbGluZyk7cmV0dXJuIGUuYXR0cmlidXRlcy5sZW5ndGg9PT0wJiYhcnx8KHQuYnJhY2tldFNhbWVMaW5lfHx0LmpzeEJyYWNrZXRTYW1lTGluZSkmJighcnx8ZS5hdHRyaWJ1dGVzLmxlbmd0aD4wKSYmIW59ZnVuY3Rpb24gQmMoZSx0LHIpe2xldHtub2RlOm59PWUscz1bXTtzLnB1c2goXCI8L1wiKTtsZXQgdT1yKFwibmFtZVwiKTtyZXR1cm4gVChuLm5hbWUsaC5MZWFkaW5nfGguTGluZSk/cy5wdXNoKGYoW0YsdV0pLEYpOlQobi5uYW1lLGguTGVhZGluZ3xoLkJsb2NrKT9zLnB1c2goXCIgXCIsdSk6cy5wdXNoKHUpLHMucHVzaChcIj5cIiksc31mdW5jdGlvbiBiYyhlLHQpe2xldHtub2RlOnJ9PWUsbj1UKHIpLHM9VChyLGguTGluZSksdT1yLnR5cGU9PT1cIkpTWE9wZW5pbmdGcmFnbWVudFwiO3JldHVyblt1P1wiPFwiOlwiPC9cIixmKFtzP0Y6biYmIXU/XCIgXCI6XCJcIixKKGUsdCldKSxzP0Y6XCJcIixcIj5cIl19ZnVuY3Rpb24gUGMoZSx0LHIpe2xldCBuPXllKGUsRmMoZSx0LHIpLHQpO3JldHVybiBUYyhlLG4sdCl9ZnVuY3Rpb24ga2MoZSx0KXtsZXR7bm9kZTpyfT1lLG49VChyLGguTGluZSk7cmV0dXJuW0ooZSx0LHtpbmRlbnQ6bn0pLG4/RjpcIlwiXX1mdW5jdGlvbiBJYyhlLHQscil7bGV0e25vZGU6bn09ZTtyZXR1cm5bXCJ7XCIsZS5jYWxsKCh7bm9kZTpzfSk9PntsZXQgdT1bXCIuLi5cIixyKCldO3JldHVybiFUKHMpfHwhWm4oZSk/dTpbZihbRSx5ZShlLHUsdCldKSxFXX0sbi50eXBlPT09XCJKU1hTcHJlYWRBdHRyaWJ1dGVcIj9cImFyZ3VtZW50XCI6XCJleHByZXNzaW9uXCIpLFwifVwiXX1mdW5jdGlvbiBUaShlLHQscil7bGV0e25vZGU6bn09ZTtpZihuLnR5cGUuc3RhcnRzV2l0aChcIkpTWFwiKSlzd2l0Y2gobi50eXBlKXtjYXNlXCJKU1hBdHRyaWJ1dGVcIjpyZXR1cm4gZGMoZSx0LHIpO2Nhc2VcIkpTWElkZW50aWZpZXJcIjpyZXR1cm4gbi5uYW1lO2Nhc2VcIkpTWE5hbWVzcGFjZWROYW1lXCI6cmV0dXJuIGIoXCI6XCIsW3IoXCJuYW1lc3BhY2VcIikscihcIm5hbWVcIildKTtjYXNlXCJKU1hNZW1iZXJFeHByZXNzaW9uXCI6cmV0dXJuIGIoXCIuXCIsW3IoXCJvYmplY3RcIikscihcInByb3BlcnR5XCIpXSk7Y2FzZVwiSlNYU3ByZWFkQXR0cmlidXRlXCI6Y2FzZVwiSlNYU3ByZWFkQ2hpbGRcIjpyZXR1cm4gSWMoZSx0LHIpO2Nhc2VcIkpTWEV4cHJlc3Npb25Db250YWluZXJcIjpyZXR1cm4geGMoZSx0LHIpO2Nhc2VcIkpTWEZyYWdtZW50XCI6Y2FzZVwiSlNYRWxlbWVudFwiOnJldHVybiBQYyhlLHQscik7Y2FzZVwiSlNYT3BlbmluZ0VsZW1lbnRcIjpyZXR1cm4gaGMoZSx0LHIpO2Nhc2VcIkpTWENsb3NpbmdFbGVtZW50XCI6cmV0dXJuIEJjKGUsdCxyKTtjYXNlXCJKU1hPcGVuaW5nRnJhZ21lbnRcIjpjYXNlXCJKU1hDbG9zaW5nRnJhZ21lbnRcIjpyZXR1cm4gYmMoZSx0KTtjYXNlXCJKU1hFbXB0eUV4cHJlc3Npb25cIjpyZXR1cm4ga2MoZSx0KTtjYXNlXCJKU1hUZXh0XCI6dGhyb3cgbmV3IEVycm9yKFwiSlNYVGV4dCBzaG91bGQgYmUgaGFuZGxlZCBieSBKU1hFbGVtZW50XCIpO2RlZmF1bHQ6dGhyb3cgbmV3IE5lKG4sXCJKU1hcIil9fWZ1bmN0aW9uIExjKGUpe2lmKGUuY2hpbGRyZW4ubGVuZ3RoPT09MClyZXR1cm4hMDtpZihlLmNoaWxkcmVuLmxlbmd0aD4xKXJldHVybiExO2xldCB0PWUuY2hpbGRyZW5bMF07cmV0dXJuIHQudHlwZT09PVwiSlNYVGV4dFwiJiYhRHIodCl9ZnVuY3Rpb24gRHIoZSl7cmV0dXJuIGUudHlwZT09PVwiSlNYVGV4dFwiJiYoSHIuaGFzTm9uV2hpdGVzcGFjZUNoYXJhY3RlcihmZShlKSl8fCEvXFxuL3UudGVzdChmZShlKSkpfWZ1bmN0aW9uIHdjKGUpe3JldHVybiBlLnR5cGU9PT1cIkpTWEV4cHJlc3Npb25Db250YWluZXJcIiYmdGUoZS5leHByZXNzaW9uKSYmZS5leHByZXNzaW9uLnZhbHVlPT09XCIgXCImJiFUKGUuZXhwcmVzc2lvbil9ZnVuY3Rpb24gZGkoZSl7bGV0e25vZGU6dCxwYXJlbnQ6cn09ZTtpZighWCh0KXx8IVgocikpcmV0dXJuITE7bGV0e2luZGV4Om4sc2libGluZ3M6c309ZSx1O2ZvcihsZXQgaT1uO2k+MDtpLS0pe2xldCBhPXNbaS0xXTtpZighKGEudHlwZT09PVwiSlNYVGV4dFwiJiYhRHIoYSkpKXt1PWE7YnJlYWt9fXJldHVybih1PT1udWxsP3ZvaWQgMDp1LnR5cGUpPT09XCJKU1hFeHByZXNzaW9uQ29udGFpbmVyXCImJnUuZXhwcmVzc2lvbi50eXBlPT09XCJKU1hFbXB0eUV4cHJlc3Npb25cIiYmTHQodS5leHByZXNzaW9uKX1mdW5jdGlvbiBPYyhlKXtyZXR1cm4gTHQoZS5ub2RlKXx8ZGkoZSl9dmFyIFZyPU9jO3ZhciBfYz0wO2Z1bmN0aW9uICRyKGUsdCxyKXt2YXIgdjtsZXR7bm9kZTpuLHBhcmVudDpzLGdyYW5kcGFyZW50OnUsa2V5Oml9PWUsYT1pIT09XCJib2R5XCImJihzLnR5cGU9PT1cIklmU3RhdGVtZW50XCJ8fHMudHlwZT09PVwiV2hpbGVTdGF0ZW1lbnRcInx8cy50eXBlPT09XCJTd2l0Y2hTdGF0ZW1lbnRcInx8cy50eXBlPT09XCJEb1doaWxlU3RhdGVtZW50XCIpLG89bi5vcGVyYXRvcj09PVwifD5cIiYmKCh2PWUucm9vdC5leHRyYSk9PW51bGw/dm9pZCAwOnYuX19pc1VzaW5nSGFja1BpcGVsaW5lKSxwPUVzKGUscix0LCExLGEpO2lmKGEpcmV0dXJuIHA7aWYobylyZXR1cm4gbChwKTtpZihMKHMpJiZzLmNhbGxlZT09PW58fHMudHlwZT09PVwiVW5hcnlFeHByZXNzaW9uXCJ8fFcocykmJiFzLmNvbXB1dGVkKXJldHVybiBsKFtmKFtFLC4uLnBdKSxFXSk7bGV0IHk9cy50eXBlPT09XCJSZXR1cm5TdGF0ZW1lbnRcInx8cy50eXBlPT09XCJUaHJvd1N0YXRlbWVudFwifHxzLnR5cGU9PT1cIkpTWEV4cHJlc3Npb25Db250YWluZXJcIiYmdS50eXBlPT09XCJKU1hBdHRyaWJ1dGVcInx8bi5vcGVyYXRvciE9PVwifFwiJiZzLnR5cGU9PT1cIkpzRXhwcmVzc2lvblJvb3RcInx8bi50eXBlIT09XCJOR1BpcGVFeHByZXNzaW9uXCImJihzLnR5cGU9PT1cIk5HUm9vdFwiJiZ0LnBhcnNlcj09PVwiX19uZ19iaW5kaW5nXCJ8fHMudHlwZT09PVwiTkdNaWNyb3N5bnRheEV4cHJlc3Npb25cIiYmdS50eXBlPT09XCJOR01pY3Jvc3ludGF4XCImJnUuYm9keS5sZW5ndGg9PT0xKXx8bj09PXMuYm9keSYmcy50eXBlPT09XCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwifHxuIT09cy5ib2R5JiZzLnR5cGU9PT1cIkZvclN0YXRlbWVudFwifHxzLnR5cGU9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiJiZ1LnR5cGUhPT1cIlJldHVyblN0YXRlbWVudFwiJiZ1LnR5cGUhPT1cIlRocm93U3RhdGVtZW50XCImJiFMKHUpfHxzLnR5cGU9PT1cIlRlbXBsYXRlTGl0ZXJhbFwiLEQ9cy50eXBlPT09XCJBc3NpZ25tZW50RXhwcmVzc2lvblwifHxzLnR5cGU9PT1cIlZhcmlhYmxlRGVjbGFyYXRvclwifHxzLnR5cGU9PT1cIkNsYXNzUHJvcGVydHlcInx8cy50eXBlPT09XCJQcm9wZXJ0eURlZmluaXRpb25cInx8cy50eXBlPT09XCJUU0Fic3RyYWN0UHJvcGVydHlEZWZpbml0aW9uXCJ8fHMudHlwZT09PVwiQ2xhc3NQcml2YXRlUHJvcGVydHlcInx8Q2UocyksbT1EZShuLmxlZnQpJiZhcihuLm9wZXJhdG9yLG4ubGVmdC5vcGVyYXRvcik7aWYoeXx8SHQobikmJiFtfHwhSHQobikmJkQpcmV0dXJuIGwocCk7aWYocC5sZW5ndGg9PT0wKXJldHVyblwiXCI7bGV0IEM9WChuLnJpZ2h0KSxjPXAuZmluZEluZGV4KGo9PnR5cGVvZiBqIT1cInN0cmluZ1wiJiYhQXJyYXkuaXNBcnJheShqKSYmai50eXBlPT09bWUpLEE9cC5zbGljZSgwLGM9PT0tMT8xOmMrMSksZD1wLnNsaWNlKEEubGVuZ3RoLEM/LTE6dm9pZCAwKSxTPVN5bWJvbChcImxvZ2ljYWxDaGFpbi1cIisgKytfYyksZz1sKFsuLi5BLGYoZCldLHtpZDpTfSk7aWYoIUMpcmV0dXJuIGc7bGV0IF89TSghMSxwLC0xKTtyZXR1cm4gbChbZyx4dChfLHtncm91cElkOlN9KV0pfWZ1bmN0aW9uIEVzKGUsdCxyLG4scyl7dmFyIFM7bGV0e25vZGU6dX09ZTtpZighRGUodSkpcmV0dXJuW2wodCgpKV07bGV0IGk9W107YXIodS5vcGVyYXRvcix1LmxlZnQub3BlcmF0b3IpP2k9ZS5jYWxsKGc9PkVzKGcsdCxyLCEwLHMpLFwibGVmdFwiKTppLnB1c2gobCh0KFwibGVmdFwiKSkpO2xldCBhPUh0KHUpLG89KHUub3BlcmF0b3I9PT1cInw+XCJ8fHUudHlwZT09PVwiTkdQaXBlRXhwcmVzc2lvblwifHx2YyhlLHIpKSYmIUxlKHIub3JpZ2luYWxUZXh0LHUucmlnaHQpLHk9IVQodS5yaWdodCxoLkxlYWRpbmcsV3IpJiZMZShyLm9yaWdpbmFsVGV4dCx1LnJpZ2h0KSxEPXUudHlwZT09PVwiTkdQaXBlRXhwcmVzc2lvblwiP1wifFwiOnUub3BlcmF0b3IsbT11LnR5cGU9PT1cIk5HUGlwZUV4cHJlc3Npb25cIiYmdS5hcmd1bWVudHMubGVuZ3RoPjA/bChmKFtFLFwiOiBcIixiKFt4LFwiOiBcIl0sZS5tYXAoKCk9PkJlKDIsbCh0KCkpKSxcImFyZ3VtZW50c1wiKSldKSk6XCJcIixDO2lmKGEpQz1bRCxcIiBcIix0KFwicmlnaHRcIiksbV07ZWxzZXtsZXQgXz1EPT09XCJ8PlwiJiYoKFM9ZS5yb290LmV4dHJhKT09bnVsbD92b2lkIDA6Uy5fX2lzVXNpbmdIYWNrUGlwZWxpbmUpP2UuY2FsbCh2PT5Fcyh2LHQsciwhMCxzKSxcInJpZ2h0XCIpOnQoXCJyaWdodFwiKTtpZihyLmV4cGVyaW1lbnRhbE9wZXJhdG9yUG9zaXRpb249PT1cInN0YXJ0XCIpe2xldCB2PVwiXCI7aWYoeSlzd2l0Y2goU2UoXykpe2Nhc2UgaGU6dj1fLnNwbGljZSgwLDEpWzBdO2JyZWFrO2Nhc2UgZ2U6dj1fLmNvbnRlbnRzLnNwbGljZSgwLDEpWzBdO2JyZWFrfUM9W3gsdixELFwiIFwiLF8sbV19ZWxzZSBDPVtvP3g6XCJcIixELG8/XCIgXCI6eCxfLG1dfWxldHtwYXJlbnQ6Y309ZSxBPVQodS5sZWZ0LGguVHJhaWxpbmd8aC5MaW5lKTtpZigoQXx8IShzJiZ1LnR5cGU9PT1cIkxvZ2ljYWxFeHByZXNzaW9uXCIpJiZjLnR5cGUhPT11LnR5cGUmJnUubGVmdC50eXBlIT09dS50eXBlJiZ1LnJpZ2h0LnR5cGUhPT11LnR5cGUpJiYoQz1sKEMse3Nob3VsZEJyZWFrOkF9KSksci5leHBlcmltZW50YWxPcGVyYXRvclBvc2l0aW9uPT09XCJzdGFydFwiP2kucHVzaChhfHx5P1wiIFwiOlwiXCIsQyk6aS5wdXNoKG8/XCJcIjpcIiBcIixDKSxuJiZUKHUpKXtsZXQgZz1VdCh5ZShlLGkscikpO3JldHVybiBnLnR5cGU9PT1PZT9nLnBhcnRzOkFycmF5LmlzQXJyYXkoZyk/ZzpbZ119cmV0dXJuIGl9ZnVuY3Rpb24gSHQoZSl7cmV0dXJuIGUudHlwZSE9PVwiTG9naWNhbEV4cHJlc3Npb25cIj8hMTohIShzZShlLnJpZ2h0KSYmZS5yaWdodC5wcm9wZXJ0aWVzLmxlbmd0aD4wfHxVKGUucmlnaHQpJiZlLnJpZ2h0LmVsZW1lbnRzLmxlbmd0aD4wfHxYKGUucmlnaHQpKX12YXIgeGk9ZT0+ZS50eXBlPT09XCJCaW5hcnlFeHByZXNzaW9uXCImJmUub3BlcmF0b3I9PT1cInxcIjtmdW5jdGlvbiB2YyhlLHQpe3JldHVybih0LnBhcnNlcj09PVwiX192dWVfZXhwcmVzc2lvblwifHx0LnBhcnNlcj09PVwiX192dWVfdHNfZXhwcmVzc2lvblwiKSYmeGkoZS5ub2RlKSYmIWUuaGFzQW5jZXN0b3Iocj0+IXhpKHIpJiZyLnR5cGUhPT1cIkpzRXhwcmVzc2lvblJvb3RcIil9ZnVuY3Rpb24gZ2koZSx0LHIpe2xldHtub2RlOm59PWU7aWYobi50eXBlLnN0YXJ0c1dpdGgoXCJOR1wiKSlzd2l0Y2gobi50eXBlKXtjYXNlXCJOR1Jvb3RcIjpyZXR1cm5bcihcIm5vZGVcIiksVChuLm5vZGUpP1wiIC8vXCIrbHQobi5ub2RlKVswXS52YWx1ZS50cmltRW5kKCk6XCJcIl07Y2FzZVwiTkdQaXBlRXhwcmVzc2lvblwiOnJldHVybiAkcihlLHQscik7Y2FzZVwiTkdDaGFpbmVkRXhwcmVzc2lvblwiOnJldHVybiBsKGIoW1wiO1wiLHhdLGUubWFwKCgpPT5NYyhlKT9yKCk6W1wiKFwiLHIoKSxcIilcIl0sXCJleHByZXNzaW9uc1wiKSkpO2Nhc2VcIk5HRW1wdHlFeHByZXNzaW9uXCI6cmV0dXJuXCJcIjtjYXNlXCJOR01pY3Jvc3ludGF4XCI6cmV0dXJuIGUubWFwKCgpPT5bZS5pc0ZpcnN0P1wiXCI6aGkoZSk/XCIgXCI6W1wiO1wiLHhdLHIoKV0sXCJib2R5XCIpO2Nhc2VcIk5HTWljcm9zeW50YXhLZXlcIjpyZXR1cm4vXlskX2Etel1bXFx3JF0qKD86LVskX2Etel1bXFx3JF0pKiQvaXUudGVzdChuLm5hbWUpP24ubmFtZTpKU09OLnN0cmluZ2lmeShuLm5hbWUpO2Nhc2VcIk5HTWljcm9zeW50YXhFeHByZXNzaW9uXCI6cmV0dXJuW3IoXCJleHByZXNzaW9uXCIpLG4uYWxpYXM9PT1udWxsP1wiXCI6W1wiIGFzIFwiLHIoXCJhbGlhc1wiKV1dO2Nhc2VcIk5HTWljcm9zeW50YXhLZXllZEV4cHJlc3Npb25cIjp7bGV0e2luZGV4OnMscGFyZW50OnV9PWUsaT1oaShlKXx8KHM9PT0xJiYobi5rZXkubmFtZT09PVwidGhlblwifHxuLmtleS5uYW1lPT09XCJlbHNlXCJ8fG4ua2V5Lm5hbWU9PT1cImFzXCIpfHwocz09PTJ8fHM9PT0zKSYmKG4ua2V5Lm5hbWU9PT1cImVsc2VcIiYmdS5ib2R5W3MtMV0udHlwZT09PVwiTkdNaWNyb3N5bnRheEtleWVkRXhwcmVzc2lvblwiJiZ1LmJvZHlbcy0xXS5rZXkubmFtZT09PVwidGhlblwifHxuLmtleS5uYW1lPT09XCJ0cmFja1wiKSkmJnUuYm9keVswXS50eXBlPT09XCJOR01pY3Jvc3ludGF4RXhwcmVzc2lvblwiO3JldHVybltyKFwia2V5XCIpLGk/XCIgXCI6XCI6IFwiLHIoXCJleHByZXNzaW9uXCIpXX1jYXNlXCJOR01pY3Jvc3ludGF4TGV0XCI6cmV0dXJuW1wibGV0IFwiLHIoXCJrZXlcIiksbi52YWx1ZT09PW51bGw/XCJcIjpbXCIgPSBcIixyKFwidmFsdWVcIildXTtjYXNlXCJOR01pY3Jvc3ludGF4QXNcIjpyZXR1cm5bcihcImtleVwiKSxcIiBhcyBcIixyKFwiYWxpYXNcIildO2RlZmF1bHQ6dGhyb3cgbmV3IE5lKG4sXCJBbmd1bGFyXCIpfX1mdW5jdGlvbiBoaSh7bm9kZTplLGluZGV4OnR9KXtyZXR1cm4gZS50eXBlPT09XCJOR01pY3Jvc3ludGF4S2V5ZWRFeHByZXNzaW9uXCImJmUua2V5Lm5hbWU9PT1cIm9mXCImJnQ9PT0xfXZhciBqYz1SKFtcIkNhbGxFeHByZXNzaW9uXCIsXCJPcHRpb25hbENhbGxFeHByZXNzaW9uXCIsXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiXSk7ZnVuY3Rpb24gTWMoe25vZGU6ZX0pe3JldHVybiB1cihlLGpjKX1mdW5jdGlvbiBGcyhlLHQscil7bGV0e25vZGU6bn09ZTtyZXR1cm4gbChbYih4LGUubWFwKHIsXCJkZWNvcmF0b3JzXCIpKSxiaShuLHQpP0Y6eF0pfWZ1bmN0aW9uIFNpKGUsdCxyKXtyZXR1cm4gUGkoZS5ub2RlKT9bYihGLGUubWFwKHIsXCJkZWNsYXJhdGlvblwiLFwiZGVjb3JhdG9yc1wiKSksRl06XCJcIn1mdW5jdGlvbiBCaShlLHQscil7bGV0e25vZGU6bixwYXJlbnQ6c309ZSx7ZGVjb3JhdG9yczp1fT1uO2lmKCFPKHUpfHxQaShzKXx8VnIoZSkpcmV0dXJuXCJcIjtsZXQgaT1uLnR5cGU9PT1cIkNsYXNzRXhwcmVzc2lvblwifHxuLnR5cGU9PT1cIkNsYXNzRGVjbGFyYXRpb25cInx8Ymkobix0KTtyZXR1cm5bZS5rZXk9PT1cImRlY2xhcmF0aW9uXCImJmN1KHMpP0Y6aT9FZTpcIlwiLGIoeCxlLm1hcChyLFwiZGVjb3JhdG9yc1wiKSkseF19ZnVuY3Rpb24gYmkoZSx0KXtyZXR1cm4gZS5kZWNvcmF0b3JzLnNvbWUocj0+Wih0Lm9yaWdpbmFsVGV4dCxrKHIpKSl9ZnVuY3Rpb24gUGkoZSl7dmFyIHI7aWYoZS50eXBlIT09XCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb25cIiYmZS50eXBlIT09XCJFeHBvcnROYW1lZERlY2xhcmF0aW9uXCImJmUudHlwZSE9PVwiRGVjbGFyZUV4cG9ydERlY2xhcmF0aW9uXCIpcmV0dXJuITE7bGV0IHQ9KHI9ZS5kZWNsYXJhdGlvbik9PW51bGw/dm9pZCAwOnIuZGVjb3JhdG9ycztyZXR1cm4gTyh0KSYmUHQoZSx0WzBdKX12YXIgRHQ9Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiQXJnRXhwYW5zaW9uQmFpbG91dFwifTtmdW5jdGlvbiBSYyhlLHQscil7bGV0e25vZGU6bn09ZSxzPXBlKG4pO2lmKHMubGVuZ3RoPT09MClyZXR1cm5bXCIoXCIsSihlLHQpLFwiKVwiXTtsZXQgdT1zLmxlbmd0aC0xO2lmKFdjKHMpKXtsZXQgRD1bXCIoXCJdO3JldHVybiBXdChlLChtLEMpPT57RC5wdXNoKHIoKSksQyE9PXUmJkQucHVzaChcIiwgXCIpfSksRC5wdXNoKFwiKVwiKSxEfWxldCBpPSExLGE9W107V3QoZSwoe25vZGU6RH0sbSk9PntsZXQgQz1yKCk7bT09PXV8fChjZShELHQpPyhpPSEwLEM9W0MsXCIsXCIsRixGXSk6Qz1bQyxcIixcIix4XSksYS5wdXNoKEMpfSk7bGV0IG89IXQucGFyc2VyLnN0YXJ0c1dpdGgoXCJfX25nX1wiKSYmbi50eXBlIT09XCJJbXBvcnRFeHByZXNzaW9uXCImJm9lKHQsXCJhbGxcIik/XCIsXCI6XCJcIjtmdW5jdGlvbiBwKCl7cmV0dXJuIGwoW1wiKFwiLGYoW3gsLi4uYV0pLG8seCxcIilcIl0se3Nob3VsZEJyZWFrOiEwfSl9aWYoaXx8ZS5wYXJlbnQudHlwZSE9PVwiRGVjb3JhdG9yXCImJmZ1KHMpKXJldHVybiBwKCk7aWYocWMocykpe2xldCBEPWEuc2xpY2UoMSk7aWYoRC5zb21lKHJlKSlyZXR1cm4gcCgpO2xldCBtO3RyeXttPXIocW4obiwwKSx7ZXhwYW5kRmlyc3RBcmc6ITB9KX1jYXRjaChDKXtpZihDIGluc3RhbmNlb2YgRHQpcmV0dXJuIHAoKTt0aHJvdyBDfXJldHVybiByZShtKT9bRWUsZXQoW1tcIihcIixsKG0se3Nob3VsZEJyZWFrOiEwfSksXCIsIFwiLC4uLkQsXCIpXCJdLHAoKV0pXTpldChbW1wiKFwiLG0sXCIsIFwiLC4uLkQsXCIpXCJdLFtcIihcIixsKG0se3Nob3VsZEJyZWFrOiEwfSksXCIsIFwiLC4uLkQsXCIpXCJdLHAoKV0pfWlmKEpjKHMsYSx0KSl7bGV0IEQ9YS5zbGljZSgwLC0xKTtpZihELnNvbWUocmUpKXJldHVybiBwKCk7bGV0IG07dHJ5e209cihxbihuLC0xKSx7ZXhwYW5kTGFzdEFyZzohMH0pfWNhdGNoKEMpe2lmKEMgaW5zdGFuY2VvZiBEdClyZXR1cm4gcCgpO3Rocm93IEN9cmV0dXJuIHJlKG0pP1tFZSxldChbW1wiKFwiLC4uLkQsbChtLHtzaG91bGRCcmVhazohMH0pLFwiKVwiXSxwKCldKV06ZXQoW1tcIihcIiwuLi5ELG0sXCIpXCJdLFtcIihcIiwuLi5ELGwobSx7c2hvdWxkQnJlYWs6ITB9KSxcIilcIl0scCgpXSl9bGV0IHk9W1wiKFwiLGYoW0UsLi4uYV0pLEIobyksRSxcIilcIl07cmV0dXJuIGpyKGUpP3k6bCh5LHtzaG91bGRCcmVhazphLnNvbWUocmUpfHxpfSl9ZnVuY3Rpb24gZnIoZSx0PSExKXtyZXR1cm4gc2UoZSkmJihlLnByb3BlcnRpZXMubGVuZ3RoPjB8fFQoZSkpfHxVKGUpJiYoZS5lbGVtZW50cy5sZW5ndGg+MHx8VChlKSl8fGUudHlwZT09PVwiVFNUeXBlQXNzZXJ0aW9uXCImJmZyKGUuZXhwcmVzc2lvbil8fEFlKGUpJiZmcihlLmV4cHJlc3Npb24pfHxlLnR5cGU9PT1cIkZ1bmN0aW9uRXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCImJighZS5yZXR1cm5UeXBlfHwhZS5yZXR1cm5UeXBlLnR5cGVBbm5vdGF0aW9ufHxlLnJldHVyblR5cGUudHlwZUFubm90YXRpb24udHlwZSE9PVwiVFNUeXBlUmVmZXJlbmNlXCJ8fE5jKGUuYm9keSkpJiYoZS5ib2R5LnR5cGU9PT1cIkJsb2NrU3RhdGVtZW50XCJ8fGUuYm9keS50eXBlPT09XCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiJiZmcihlLmJvZHksITApfHxzZShlLmJvZHkpfHxVKGUuYm9keSl8fCF0JiYoTChlLmJvZHkpfHxlLmJvZHkudHlwZT09PVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIpfHxYKGUuYm9keSkpfHxlLnR5cGU9PT1cIkRvRXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIk1vZHVsZUV4cHJlc3Npb25cIn1mdW5jdGlvbiBKYyhlLHQscil7dmFyIHUsaTtsZXQgbj1NKCExLGUsLTEpO2lmKGUubGVuZ3RoPT09MSl7bGV0IGE9TSghMSx0LC0xKTtpZigodT1hLmxhYmVsKSE9bnVsbCYmdS5lbWJlZCYmKChpPWEubGFiZWwpPT1udWxsP3ZvaWQgMDppLmh1ZykhPT0hMSlyZXR1cm4hMH1sZXQgcz1NKCExLGUsLTIpO3JldHVybiFUKG4saC5MZWFkaW5nKSYmIVQobixoLlRyYWlsaW5nKSYmZnIobikmJighc3x8cy50eXBlIT09bi50eXBlKSYmKGUubGVuZ3RoIT09Mnx8cy50eXBlIT09XCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwifHwhVShuKSkmJiEoZS5sZW5ndGg+MSYmQ3MobixyKSl9ZnVuY3Rpb24gcWMoZSl7aWYoZS5sZW5ndGghPT0yKXJldHVybiExO2xldFt0LHJdPWU7cmV0dXJuIHQudHlwZT09PVwiTW9kdWxlRXhwcmVzc2lvblwiJiZHYyhyKT8hMDohVCh0KSYmKHQudHlwZT09PVwiRnVuY3Rpb25FeHByZXNzaW9uXCJ8fHQudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIiYmdC5ib2R5LnR5cGU9PT1cIkJsb2NrU3RhdGVtZW50XCIpJiZyLnR5cGUhPT1cIkZ1bmN0aW9uRXhwcmVzc2lvblwiJiZyLnR5cGUhPT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCImJnIudHlwZSE9PVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCImJklpKHIpJiYhZnIocil9ZnVuY3Rpb24gSWkoZSl7aWYoZS50eXBlPT09XCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiKXJldHVybiBJaShlLmV4cHJlc3Npb24pO2lmKEFlKGUpfHxlLnR5cGU9PT1cIlR5cGVDYXN0RXhwcmVzc2lvblwiKXtsZXR7dHlwZUFubm90YXRpb246dH09ZTtpZih0LnR5cGU9PT1cIlR5cGVBbm5vdGF0aW9uXCImJih0PXQudHlwZUFubm90YXRpb24pLHQudHlwZT09PVwiVFNBcnJheVR5cGVcIiYmKHQ9dC5lbGVtZW50VHlwZSx0LnR5cGU9PT1cIlRTQXJyYXlUeXBlXCImJih0PXQuZWxlbWVudFR5cGUpKSx0LnR5cGU9PT1cIkdlbmVyaWNUeXBlQW5ub3RhdGlvblwifHx0LnR5cGU9PT1cIlRTVHlwZVJlZmVyZW5jZVwiKXtsZXQgcj10LnR5cGVBcmd1bWVudHM/P3QudHlwZVBhcmFtZXRlcnM7KHI9PW51bGw/dm9pZCAwOnIucGFyYW1zLmxlbmd0aCk9PT0xJiYodD1yLnBhcmFtc1swXSl9cmV0dXJuIHF0KHQpJiZJZShlLmV4cHJlc3Npb24sMSl9cmV0dXJuIG10KGUpJiZwZShlKS5sZW5ndGg+MT8hMTpEZShlKT9JZShlLmxlZnQsMSkmJkllKGUucmlnaHQsMSk6Um4oZSl8fEllKGUpfWZ1bmN0aW9uIFdjKGUpe3JldHVybiBlLmxlbmd0aD09PTI/a2koZSwwKTplLmxlbmd0aD09PTM/ZVswXS50eXBlPT09XCJJZGVudGlmaWVyXCImJmtpKGUsMSk6ITF9ZnVuY3Rpb24ga2koZSx0KXtsZXQgcj1lW3RdLG49ZVt0KzFdO3JldHVybiByLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCImJnoocikubGVuZ3RoPT09MCYmci5ib2R5LnR5cGU9PT1cIkJsb2NrU3RhdGVtZW50XCImJm4udHlwZT09PVwiQXJyYXlFeHByZXNzaW9uXCImJiFlLnNvbWUocz0+VChzKSl9ZnVuY3Rpb24gTmMoZSl7cmV0dXJuIGUudHlwZT09PVwiQmxvY2tTdGF0ZW1lbnRcIiYmKGUuYm9keS5zb21lKHQ9PnQudHlwZSE9PVwiRW1wdHlTdGF0ZW1lbnRcIil8fFQoZSxoLkRhbmdsaW5nKSl9ZnVuY3Rpb24gR2MoZSl7cmV0dXJuIGUudHlwZT09PVwiT2JqZWN0RXhwcmVzc2lvblwiJiZlLnByb3BlcnRpZXMubGVuZ3RoPT09MSYmQ2UoZS5wcm9wZXJ0aWVzWzBdKSYmZS5wcm9wZXJ0aWVzWzBdLmtleS50eXBlPT09XCJJZGVudGlmaWVyXCImJmUucHJvcGVydGllc1swXS5rZXkubmFtZT09PVwidHlwZVwiJiZ0ZShlLnByb3BlcnRpZXNbMF0udmFsdWUpJiZlLnByb3BlcnRpZXNbMF0udmFsdWUudmFsdWU9PT1cIm1vZHVsZVwifXZhciBFcj1SYzt2YXIgVWM9ZT0+KChlLnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwifHxlLnR5cGU9PT1cIlRTTm9uTnVsbEV4cHJlc3Npb25cIikmJihlPWUuZXhwcmVzc2lvbiksTChlKSYmcGUoZSkubGVuZ3RoPjApO2Z1bmN0aW9uIExpKGUsdCxyKXt2YXIgcDtsZXQgbj1yKFwib2JqZWN0XCIpLHM9QXMoZSx0LHIpLHtub2RlOnV9PWUsaT1lLmZpbmRBbmNlc3Rvcih5PT4hKFcoeSl8fHkudHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiKSksYT1lLmZpbmRBbmNlc3Rvcih5PT4hKHkudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCJ8fHkudHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiKSksbz1pJiYoaS50eXBlPT09XCJOZXdFeHByZXNzaW9uXCJ8fGkudHlwZT09PVwiQmluZEV4cHJlc3Npb25cInx8aS50eXBlPT09XCJBc3NpZ25tZW50RXhwcmVzc2lvblwiJiZpLmxlZnQudHlwZSE9PVwiSWRlbnRpZmllclwiKXx8dS5jb21wdXRlZHx8dS5vYmplY3QudHlwZT09PVwiSWRlbnRpZmllclwiJiZ1LnByb3BlcnR5LnR5cGU9PT1cIklkZW50aWZpZXJcIiYmIVcoYSl8fChhLnR5cGU9PT1cIkFzc2lnbm1lbnRFeHByZXNzaW9uXCJ8fGEudHlwZT09PVwiVmFyaWFibGVEZWNsYXJhdG9yXCIpJiYoVWModS5vYmplY3QpfHwoKHA9bi5sYWJlbCk9PW51bGw/dm9pZCAwOnAubWVtYmVyQ2hhaW4pKTtyZXR1cm4gdXQobi5sYWJlbCxbbixvP3M6bChmKFtFLHNdKSldKX1mdW5jdGlvbiBBcyhlLHQscil7bGV0IG49cihcInByb3BlcnR5XCIpLHtub2RlOnN9PWUsdT0kKGUpO3JldHVybiBzLmNvbXB1dGVkPyFzLnByb3BlcnR5fHxGZShzLnByb3BlcnR5KT9bdSxcIltcIixuLFwiXVwiXTpsKFt1LFwiW1wiLGYoW0Usbl0pLEUsXCJdXCJdKTpbdSxcIi5cIixuXX1mdW5jdGlvbiB3aShlLHQscil7aWYoZS5ub2RlLnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiKXJldHVybiBlLmNhbGwoKCk9PndpKGUsdCxyKSxcImV4cHJlc3Npb25cIik7bGV0e3BhcmVudDpufT1lLHM9IW58fG4udHlwZT09PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiLHU9W107ZnVuY3Rpb24gaSh3KXtsZXR7b3JpZ2luYWxUZXh0Om5lfT10LHhlPWl0KG5lLGsodykpO3JldHVybiBuZS5jaGFyQXQoeGUpPT09XCIpXCI/eGUhPT0hMSYmanQobmUseGUrMSk6Y2Uodyx0KX1mdW5jdGlvbiBhKCl7bGV0e25vZGU6d309ZTtpZih3LnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiKXJldHVybiBlLmNhbGwoYSxcImV4cHJlc3Npb25cIik7aWYoTCh3KSYmKFR0KHcuY2FsbGVlKXx8TCh3LmNhbGxlZSkpKXtsZXQgbmU9aSh3KTt1LnVuc2hpZnQoe25vZGU6dyxoYXNUcmFpbGluZ0VtcHR5TGluZTpuZSxwcmludGVkOlt5ZShlLFskKGUpLHR0KGUsdCxyKSxFcihlLHQscildLHQpLG5lP0Y6XCJcIl19KSxlLmNhbGwoYSxcImNhbGxlZVwiKX1lbHNlIFR0KHcpPyh1LnVuc2hpZnQoe25vZGU6dyxuZWVkc1BhcmVuczprZShlLHQpLHByaW50ZWQ6eWUoZSxXKHcpP0FzKGUsdCxyKTpLcihlLHQsciksdCl9KSxlLmNhbGwoYSxcIm9iamVjdFwiKSk6dy50eXBlPT09XCJUU05vbk51bGxFeHByZXNzaW9uXCI/KHUudW5zaGlmdCh7bm9kZTp3LHByaW50ZWQ6eWUoZSxcIiFcIix0KX0pLGUuY2FsbChhLFwiZXhwcmVzc2lvblwiKSk6dS51bnNoaWZ0KHtub2RlOncscHJpbnRlZDpyKCl9KX1sZXR7bm9kZTpvfT1lO3UudW5zaGlmdCh7bm9kZTpvLHByaW50ZWQ6WyQoZSksdHQoZSx0LHIpLEVyKGUsdCxyKV19KSxvLmNhbGxlZSYmZS5jYWxsKGEsXCJjYWxsZWVcIik7bGV0IHA9W10seT1bdVswXV0sRD0xO2Zvcig7RDx1Lmxlbmd0aCYmKHVbRF0ubm9kZS50eXBlPT09XCJUU05vbk51bGxFeHByZXNzaW9uXCJ8fEwodVtEXS5ub2RlKXx8Vyh1W0RdLm5vZGUpJiZ1W0RdLm5vZGUuY29tcHV0ZWQmJkZlKHVbRF0ubm9kZS5wcm9wZXJ0eSkpOysrRCl5LnB1c2godVtEXSk7aWYoIUwodVswXS5ub2RlKSlmb3IoO0QrMTx1Lmxlbmd0aCYmKFR0KHVbRF0ubm9kZSkmJlR0KHVbRCsxXS5ub2RlKSk7KytEKXkucHVzaCh1W0RdKTtwLnB1c2goeSkseT1bXTtsZXQgbT0hMTtmb3IoO0Q8dS5sZW5ndGg7KytEKXtpZihtJiZUdCh1W0RdLm5vZGUpKXtpZih1W0RdLm5vZGUuY29tcHV0ZWQmJkZlKHVbRF0ubm9kZS5wcm9wZXJ0eSkpe3kucHVzaCh1W0RdKTtjb250aW51ZX1wLnB1c2goeSkseT1bXSxtPSExfShMKHVbRF0ubm9kZSl8fHVbRF0ubm9kZS50eXBlPT09XCJJbXBvcnRFeHByZXNzaW9uXCIpJiYobT0hMCkseS5wdXNoKHVbRF0pLFQodVtEXS5ub2RlLGguVHJhaWxpbmcpJiYocC5wdXNoKHkpLHk9W10sbT0hMSl9eS5sZW5ndGg+MCYmcC5wdXNoKHkpO2Z1bmN0aW9uIEModyl7cmV0dXJuL15bQS1aXXxeWyRfXSskL3UudGVzdCh3KX1mdW5jdGlvbiBjKHcpe3JldHVybiB3Lmxlbmd0aDw9dC50YWJXaWR0aH1mdW5jdGlvbiBBKHcpe3ZhciBwdDtsZXQgbmU9KHB0PXdbMV1bMF0pPT1udWxsP3ZvaWQgMDpwdC5ub2RlLmNvbXB1dGVkO2lmKHdbMF0ubGVuZ3RoPT09MSl7bGV0IGJ0PXdbMF1bMF0ubm9kZTtyZXR1cm4gYnQudHlwZT09PVwiVGhpc0V4cHJlc3Npb25cInx8YnQudHlwZT09PVwiSWRlbnRpZmllclwiJiYoQyhidC5uYW1lKXx8cyYmYyhidC5uYW1lKXx8bmUpfWxldCB4ZT1NKCExLHdbMF0sLTEpLm5vZGU7cmV0dXJuIFcoeGUpJiZ4ZS5wcm9wZXJ0eS50eXBlPT09XCJJZGVudGlmaWVyXCImJihDKHhlLnByb3BlcnR5Lm5hbWUpfHxuZSl9bGV0IGQ9cC5sZW5ndGg+PTImJiFUKHBbMV1bMF0ubm9kZSkmJkEocCk7ZnVuY3Rpb24gUyh3KXtsZXQgbmU9dy5tYXAoeGU9PnhlLnByaW50ZWQpO3JldHVybiB3Lmxlbmd0aD4wJiZNKCExLHcsLTEpLm5lZWRzUGFyZW5zP1tcIihcIiwuLi5uZSxcIilcIl06bmV9ZnVuY3Rpb24gZyh3KXtyZXR1cm4gdy5sZW5ndGg9PT0wP1wiXCI6ZihbRixiKEYsdy5tYXAoUykpXSl9bGV0IF89cC5tYXAoUyksdj1fLGo9ZD8zOjIsST1wLmZsYXQoKSxHPUkuc2xpY2UoMSwtMSkuc29tZSh3PT5UKHcubm9kZSxoLkxlYWRpbmcpKXx8SS5zbGljZSgwLC0xKS5zb21lKHc9PlQody5ub2RlLGguVHJhaWxpbmcpKXx8cFtqXSYmVChwW2pdWzBdLm5vZGUsaC5MZWFkaW5nKTtpZihwLmxlbmd0aDw9aiYmIUcmJiFwLnNvbWUodz0+TSghMSx3LC0xKS5oYXNUcmFpbGluZ0VtcHR5TGluZSkpcmV0dXJuIGpyKGUpP3Y6bCh2KTtsZXQgUD1NKCExLHBbZD8xOjBdLC0xKS5ub2RlLE49IUwoUCkmJmkoUCksdWU9W1MocFswXSksZD9wLnNsaWNlKDEsMikubWFwKFMpOlwiXCIsTj9GOlwiXCIsZyhwLnNsaWNlKGQ/MjoxKSldLFE9dS5tYXAoKHtub2RlOnd9KT0+dykuZmlsdGVyKEwpO2Z1bmN0aW9uIEJ0KCl7bGV0IHc9TSghMSxNKCExLHAsLTEpLC0xKS5ub2RlLG5lPU0oITEsXywtMSk7cmV0dXJuIEwodykmJnJlKG5lKSYmUS5zbGljZSgwLC0xKS5zb21lKHhlPT54ZS5hcmd1bWVudHMuc29tZShSdCkpfWxldCBDdDtyZXR1cm4gR3x8US5sZW5ndGg+MiYmUS5zb21lKHc9PiF3LmFyZ3VtZW50cy5ldmVyeShuZT0+SWUobmUpKSl8fF8uc2xpY2UoMCwtMSkuc29tZShyZSl8fEJ0KCk/Q3Q9bCh1ZSk6Q3Q9W3JlKHYpfHxOP0VlOlwiXCIsZXQoW3YsdWVdKV0sdXQoe21lbWJlckNoYWluOiEwfSxDdCl9dmFyIE9pPXdpO2Z1bmN0aW9uIFFyKGUsdCxyKXt2YXIgeTtsZXR7bm9kZTpufT1lLHM9bi50eXBlPT09XCJOZXdFeHByZXNzaW9uXCIsdT1uLnR5cGU9PT1cIkltcG9ydEV4cHJlc3Npb25cIixpPSQoZSksYT1wZShuKSxvPWEubGVuZ3RoPT09MSYmX3IoYVswXSx0Lm9yaWdpbmFsVGV4dCk7aWYob3x8WWMoZSl8fEl0KG4sZS5wYXJlbnQpKXtsZXQgRD1bXTtpZihXdChlLCgpPT57RC5wdXNoKHIoKSl9KSwhKG8mJigoeT1EWzBdLmxhYmVsKSE9bnVsbCYmeS5lbWJlZCkpKXJldHVybltzP1wibmV3IFwiOlwiXCIsX2koZSxyKSxpLHR0KGUsdCxyKSxcIihcIixiKFwiLCBcIixEKSxcIilcIl19aWYoIXUmJiFzJiZUdChuLmNhbGxlZSkmJiFlLmNhbGwoRD0+a2UoRCx0KSxcImNhbGxlZVwiLC4uLm4uY2FsbGVlLnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiP1tcImV4cHJlc3Npb25cIl06W10pKXJldHVybiBPaShlLHQscik7bGV0IHA9W3M/XCJuZXcgXCI6XCJcIixfaShlLHIpLGksdHQoZSx0LHIpLEVyKGUsdCxyKV07cmV0dXJuIHV8fEwobi5jYWxsZWUpP2wocCk6cH1mdW5jdGlvbiBfaShlLHQpe2xldHtub2RlOnJ9PWU7cmV0dXJuIHIudHlwZT09PVwiSW1wb3J0RXhwcmVzc2lvblwiP2BpbXBvcnQke3IucGhhc2U/YC4ke3IucGhhc2V9YDpcIlwifWA6dChcImNhbGxlZVwiKX1mdW5jdGlvbiBZYyhlKXtsZXR7bm9kZTp0fT1lO2lmKHQudHlwZSE9PVwiQ2FsbEV4cHJlc3Npb25cInx8dC5vcHRpb25hbHx8dC5jYWxsZWUudHlwZSE9PVwiSWRlbnRpZmllclwiKXJldHVybiExO2xldCByPXBlKHQpO3JldHVybiB0LmNhbGxlZS5uYW1lPT09XCJyZXF1aXJlXCI/ci5sZW5ndGg9PT0xJiZ0ZShyWzBdKXx8ci5sZW5ndGg+MTp0LmNhbGxlZS5uYW1lPT09XCJkZWZpbmVcIiYmZS5wYXJlbnQudHlwZT09PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiP3IubGVuZ3RoPT09MXx8ci5sZW5ndGg9PT0yJiZyWzBdLnR5cGU9PT1cIkFycmF5RXhwcmVzc2lvblwifHxyLmxlbmd0aD09PTMmJnRlKHJbMF0pJiZyWzFdLnR5cGU9PT1cIkFycmF5RXhwcmVzc2lvblwiOiExfWZ1bmN0aW9uIGh0KGUsdCxyLG4scyx1KXtsZXQgaT1YYyhlLHQscixuLHUpLGE9dT9yKHUse2Fzc2lnbm1lbnRMYXlvdXQ6aX0pOlwiXCI7c3dpdGNoKGkpe2Nhc2VcImJyZWFrLWFmdGVyLW9wZXJhdG9yXCI6cmV0dXJuIGwoW2wobikscyxsKGYoW3gsYV0pKV0pO2Nhc2VcIm5ldmVyLWJyZWFrLWFmdGVyLW9wZXJhdG9yXCI6cmV0dXJuIGwoW2wobikscyxcIiBcIixhXSk7Y2FzZVwiZmx1aWRcIjp7bGV0IG89U3ltYm9sKFwiYXNzaWdubWVudFwiKTtyZXR1cm4gbChbbChuKSxzLGwoZih4KSx7aWQ6b30pLGplLHh0KGEse2dyb3VwSWQ6b30pXSl9Y2FzZVwiYnJlYWstbGhzXCI6cmV0dXJuIGwoW24scyxcIiBcIixsKGEpXSk7Y2FzZVwiY2hhaW5cIjpyZXR1cm5bbChuKSxzLHgsYV07Y2FzZVwiY2hhaW4tdGFpbFwiOnJldHVybltsKG4pLHMsZihbeCxhXSldO2Nhc2VcImNoYWluLXRhaWwtYXJyb3ctY2hhaW5cIjpyZXR1cm5bbChuKSxzLGFdO2Nhc2VcIm9ubHktbGVmdFwiOnJldHVybiBufX1mdW5jdGlvbiBqaShlLHQscil7bGV0e25vZGU6bn09ZTtyZXR1cm4gaHQoZSx0LHIscihcImxlZnRcIiksW1wiIFwiLG4ub3BlcmF0b3JdLFwicmlnaHRcIil9ZnVuY3Rpb24gTWkoZSx0LHIpe3JldHVybiBodChlLHQscixyKFwiaWRcIiksXCIgPVwiLFwiaW5pdFwiKX1mdW5jdGlvbiBYYyhlLHQscixuLHMpe2xldHtub2RlOnV9PWUsaT11W3NdO2lmKCFpKXJldHVyblwib25seS1sZWZ0XCI7bGV0IGE9IXpyKGkpO2lmKGUubWF0Y2goenIsUmksbT0+IWF8fG0udHlwZSE9PVwiRXhwcmVzc2lvblN0YXRlbWVudFwiJiZtLnR5cGUhPT1cIlZhcmlhYmxlRGVjbGFyYXRpb25cIikpcmV0dXJuIGE/aS50eXBlPT09XCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiJiZpLmJvZHkudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIj9cImNoYWluLXRhaWwtYXJyb3ctY2hhaW5cIjpcImNoYWluLXRhaWxcIjpcImNoYWluXCI7aWYoIWEmJnpyKGkucmlnaHQpfHxMZSh0Lm9yaWdpbmFsVGV4dCxpKSlyZXR1cm5cImJyZWFrLWFmdGVyLW9wZXJhdG9yXCI7aWYodS50eXBlPT09XCJJbXBvcnRBdHRyaWJ1dGVcInx8aS50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiJiZpLmNhbGxlZS5uYW1lPT09XCJyZXF1aXJlXCJ8fHQucGFyc2VyPT09XCJqc29uNVwifHx0LnBhcnNlcj09PVwianNvbmNcInx8dC5wYXJzZXI9PT1cImpzb25cIilyZXR1cm5cIm5ldmVyLWJyZWFrLWFmdGVyLW9wZXJhdG9yXCI7bGV0IHk9YnUobik7aWYoVmModSl8fHpjKHUpfHxUcyh1KSYmeSlyZXR1cm5cImJyZWFrLWxoc1wiO2xldCBEPWVsKHUsbix0KTtyZXR1cm4gZS5jYWxsKCgpPT5IYyhlLHQscixEKSxzKT9cImJyZWFrLWFmdGVyLW9wZXJhdG9yXCI6JGModSk/XCJicmVhay1saHNcIjoheSYmKER8fGkudHlwZT09PVwiVGVtcGxhdGVMaXRlcmFsXCJ8fGkudHlwZT09PVwiVGFnZ2VkVGVtcGxhdGVFeHByZXNzaW9uXCJ8fGkudHlwZT09PVwiQm9vbGVhbkxpdGVyYWxcInx8RmUoaSl8fGkudHlwZT09PVwiQ2xhc3NFeHByZXNzaW9uXCIpP1wibmV2ZXItYnJlYWstYWZ0ZXItb3BlcmF0b3JcIjpcImZsdWlkXCJ9ZnVuY3Rpb24gSGMoZSx0LHIsbil7bGV0IHM9ZS5ub2RlO2lmKERlKHMpJiYhSHQocykpcmV0dXJuITA7c3dpdGNoKHMudHlwZSl7Y2FzZVwiU3RyaW5nTGl0ZXJhbFR5cGVBbm5vdGF0aW9uXCI6Y2FzZVwiU2VxdWVuY2VFeHByZXNzaW9uXCI6cmV0dXJuITA7Y2FzZVwiVFNDb25kaXRpb25hbFR5cGVcIjpjYXNlXCJDb25kaXRpb25hbFR5cGVBbm5vdGF0aW9uXCI6aWYoIXQuZXhwZXJpbWVudGFsVGVybmFyaWVzJiYhbmwocykpYnJlYWs7cmV0dXJuITA7Y2FzZVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI6e2lmKCF0LmV4cGVyaW1lbnRhbFRlcm5hcmllcyl7bGV0e3Rlc3Q6cH09cztyZXR1cm4gRGUocCkmJiFIdChwKX1sZXR7Y29uc2VxdWVudDphLGFsdGVybmF0ZTpvfT1zO3JldHVybiBhLnR5cGU9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwifHxvLnR5cGU9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwifWNhc2VcIkNsYXNzRXhwcmVzc2lvblwiOnJldHVybiBPKHMuZGVjb3JhdG9ycyl9aWYobilyZXR1cm4hMTtsZXQgdT1zLGk9W107Zm9yKDs7KWlmKHUudHlwZT09PVwiVW5hcnlFeHByZXNzaW9uXCJ8fHUudHlwZT09PVwiQXdhaXRFeHByZXNzaW9uXCJ8fHUudHlwZT09PVwiWWllbGRFeHByZXNzaW9uXCImJnUuYXJndW1lbnQhPT1udWxsKXU9dS5hcmd1bWVudCxpLnB1c2goXCJhcmd1bWVudFwiKTtlbHNlIGlmKHUudHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiKXU9dS5leHByZXNzaW9uLGkucHVzaChcImV4cHJlc3Npb25cIik7ZWxzZSBicmVhaztyZXR1cm4hISh0ZSh1KXx8ZS5jYWxsKCgpPT5KaShlLHQsciksLi4uaSkpfWZ1bmN0aW9uIFZjKGUpe2lmKFJpKGUpKXtsZXQgdD1lLmxlZnR8fGUuaWQ7cmV0dXJuIHQudHlwZT09PVwiT2JqZWN0UGF0dGVyblwiJiZ0LnByb3BlcnRpZXMubGVuZ3RoPjImJnQucHJvcGVydGllcy5zb21lKHI9Pnt2YXIgbjtyZXR1cm4gQ2UocikmJighci5zaG9ydGhhbmR8fCgobj1yLnZhbHVlKT09bnVsbD92b2lkIDA6bi50eXBlKT09PVwiQXNzaWdubWVudFBhdHRlcm5cIil9KX1yZXR1cm4hMX1mdW5jdGlvbiB6cihlKXtyZXR1cm4gZS50eXBlPT09XCJBc3NpZ25tZW50RXhwcmVzc2lvblwifWZ1bmN0aW9uIFJpKGUpe3JldHVybiB6cihlKXx8ZS50eXBlPT09XCJWYXJpYWJsZURlY2xhcmF0b3JcIn1mdW5jdGlvbiAkYyhlKXtsZXQgdD1RYyhlKTtpZihPKHQpKXtsZXQgcj1lLnR5cGU9PT1cIlRTVHlwZUFsaWFzRGVjbGFyYXRpb25cIj9cImNvbnN0cmFpbnRcIjpcImJvdW5kXCI7aWYodC5sZW5ndGg+MSYmdC5zb21lKG49Pm5bcl18fG4uZGVmYXVsdCkpcmV0dXJuITB9cmV0dXJuITF9dmFyIEtjPVIoW1wiVFNUeXBlQWxpYXNEZWNsYXJhdGlvblwiLFwiVHlwZUFsaWFzXCJdKTtmdW5jdGlvbiBRYyhlKXt2YXIgdDtpZihLYyhlKSlyZXR1cm4odD1lLnR5cGVQYXJhbWV0ZXJzKT09bnVsbD92b2lkIDA6dC5wYXJhbXN9ZnVuY3Rpb24gemMoZSl7aWYoZS50eXBlIT09XCJWYXJpYWJsZURlY2xhcmF0b3JcIilyZXR1cm4hMTtsZXR7dHlwZUFubm90YXRpb246dH09ZS5pZDtpZighdHx8IXQudHlwZUFubm90YXRpb24pcmV0dXJuITE7bGV0IHI9dmkodC50eXBlQW5ub3RhdGlvbik7cmV0dXJuIE8ocikmJnIubGVuZ3RoPjEmJnIuc29tZShuPT5PKHZpKG4pKXx8bi50eXBlPT09XCJUU0NvbmRpdGlvbmFsVHlwZVwiKX1mdW5jdGlvbiBUcyhlKXt2YXIgdDtyZXR1cm4gZS50eXBlPT09XCJWYXJpYWJsZURlY2xhcmF0b3JcIiYmKCh0PWUuaW5pdCk9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCJ9dmFyIFpjPVIoW1wiVFNUeXBlUmVmZXJlbmNlXCIsXCJHZW5lcmljVHlwZUFubm90YXRpb25cIl0pO2Z1bmN0aW9uIHZpKGUpe3ZhciB0O2lmKFpjKGUpKXJldHVybih0PWUudHlwZUFyZ3VtZW50cz8/ZS50eXBlUGFyYW1ldGVycyk9PW51bGw/dm9pZCAwOnQucGFyYW1zfWZ1bmN0aW9uIEppKGUsdCxyLG49ITEpe3ZhciBpO2xldHtub2RlOnN9PWUsdT0oKT0+SmkoZSx0LHIsITApO2lmKHMudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCJ8fHMudHlwZT09PVwiVFNOb25OdWxsRXhwcmVzc2lvblwiKXJldHVybiBlLmNhbGwodSxcImV4cHJlc3Npb25cIik7aWYoTChzKSl7aWYoKGk9UXIoZSx0LHIpLmxhYmVsKSE9bnVsbCYmaS5tZW1iZXJDaGFpbilyZXR1cm4hMTtsZXQgbz1wZShzKTtyZXR1cm4hKG8ubGVuZ3RoPT09MHx8by5sZW5ndGg9PT0xJiZpcihvWzBdLHQpKXx8dGwocyxyKT8hMTplLmNhbGwodSxcImNhbGxlZVwiKX1yZXR1cm4gVyhzKT9lLmNhbGwodSxcIm9iamVjdFwiKTpuJiYocy50eXBlPT09XCJJZGVudGlmaWVyXCJ8fHMudHlwZT09PVwiVGhpc0V4cHJlc3Npb25cIil9ZnVuY3Rpb24gZWwoZSx0LHIpe3JldHVybiBDZShlKT8odD1VdCh0KSx0eXBlb2YgdD09XCJzdHJpbmdcIiYmcnQodCk8ci50YWJXaWR0aCszKTohMX1mdW5jdGlvbiB0bChlLHQpe2xldCByPXJsKGUpO2lmKE8ocikpe2lmKHIubGVuZ3RoPjEpcmV0dXJuITA7aWYoci5sZW5ndGg9PT0xKXtsZXQgcz1yWzBdO2lmKHdlKHMpfHxOdChzKXx8cy50eXBlPT09XCJUU1R5cGVMaXRlcmFsXCJ8fHMudHlwZT09PVwiT2JqZWN0VHlwZUFubm90YXRpb25cIilyZXR1cm4hMH1sZXQgbj1lLnR5cGVQYXJhbWV0ZXJzP1widHlwZVBhcmFtZXRlcnNcIjpcInR5cGVBcmd1bWVudHNcIjtpZihyZSh0KG4pKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBybChlKXt2YXIgdDtyZXR1cm4odD1lLnR5cGVQYXJhbWV0ZXJzPz9lLnR5cGVBcmd1bWVudHMpPT1udWxsP3ZvaWQgMDp0LnBhcmFtc31mdW5jdGlvbiBubChlKXtmdW5jdGlvbiB0KHIpe3N3aXRjaChyLnR5cGUpe2Nhc2VcIkZ1bmN0aW9uVHlwZUFubm90YXRpb25cIjpjYXNlXCJHZW5lcmljVHlwZUFubm90YXRpb25cIjpjYXNlXCJUU0Z1bmN0aW9uVHlwZVwiOnJldHVybiEhci50eXBlUGFyYW1ldGVycztjYXNlXCJUU1R5cGVSZWZlcmVuY2VcIjpyZXR1cm4hIShyLnR5cGVBcmd1bWVudHM/P3IudHlwZVBhcmFtZXRlcnMpO2RlZmF1bHQ6cmV0dXJuITF9fXJldHVybiB0KGUuY2hlY2tUeXBlKXx8dChlLmV4dGVuZHNUeXBlKX1mdW5jdGlvbiBVZShlLHQscixuLHMpe2xldCB1PWUubm9kZSxpPXoodSksYT1zP3R0KGUscix0KTpcIlwiO2lmKGkubGVuZ3RoPT09MClyZXR1cm5bYSxcIihcIixKKGUscix7ZmlsdGVyOmM9PmJlKHIub3JpZ2luYWxUZXh0LGsoYykpPT09XCIpXCJ9KSxcIilcIl07bGV0e3BhcmVudDpvfT1lLHA9SXQobykseT1kcyh1KSxEPVtdO2lmKEF1KGUsKGMsQSk9PntsZXQgZD1BPT09aS5sZW5ndGgtMTtkJiZ1LnJlc3QmJkQucHVzaChcIi4uLlwiKSxELnB1c2godCgpKSwhZCYmKEQucHVzaChcIixcIikscHx8eT9ELnB1c2goXCIgXCIpOmNlKGlbQV0scik/RC5wdXNoKEYsRik6RC5wdXNoKHgpKX0pLG4mJiF1bChlKSl7aWYocmUoYSl8fHJlKEQpKXRocm93IG5ldyBEdDtyZXR1cm4gbChbY3IoYSksXCIoXCIsY3IoRCksXCIpXCJdKX1sZXQgbT1pLmV2ZXJ5KGM9PiFPKGMuZGVjb3JhdG9ycykpO3JldHVybiB5JiZtP1thLFwiKFwiLC4uLkQsXCIpXCJdOnA/W2EsXCIoXCIsLi4uRCxcIilcIl06KE9yKG8pfHxtdShvKXx8by50eXBlPT09XCJUeXBlQWxpYXNcInx8by50eXBlPT09XCJVbmlvblR5cGVBbm5vdGF0aW9uXCJ8fG8udHlwZT09PVwiSW50ZXJzZWN0aW9uVHlwZUFubm90YXRpb25cInx8by50eXBlPT09XCJGdW5jdGlvblR5cGVBbm5vdGF0aW9uXCImJm8ucmV0dXJuVHlwZT09PXUpJiZpLmxlbmd0aD09PTEmJmlbMF0ubmFtZT09PW51bGwmJnUudGhpcyE9PWlbMF0mJmlbMF0udHlwZUFubm90YXRpb24mJnUudHlwZVBhcmFtZXRlcnM9PT1udWxsJiZxdChpWzBdLnR5cGVBbm5vdGF0aW9uKSYmIXUucmVzdD9yLmFycm93UGFyZW5zPT09XCJhbHdheXNcInx8dS50eXBlPT09XCJIb29rVHlwZUFubm90YXRpb25cIj9bXCIoXCIsLi4uRCxcIilcIl06RDpbYSxcIihcIixmKFtFLC4uLkRdKSxCKCFDdSh1KSYmb2UocixcImFsbFwiKT9cIixcIjpcIlwiKSxFLFwiKVwiXX1mdW5jdGlvbiBkcyhlKXtpZighZSlyZXR1cm4hMTtsZXQgdD16KGUpO2lmKHQubGVuZ3RoIT09MSlyZXR1cm4hMTtsZXRbcl09dDtyZXR1cm4hVChyKSYmKHIudHlwZT09PVwiT2JqZWN0UGF0dGVyblwifHxyLnR5cGU9PT1cIkFycmF5UGF0dGVyblwifHxyLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmci50eXBlQW5ub3RhdGlvbiYmKHIudHlwZUFubm90YXRpb24udHlwZT09PVwiVHlwZUFubm90YXRpb25cInx8ci50eXBlQW5ub3RhdGlvbi50eXBlPT09XCJUU1R5cGVBbm5vdGF0aW9uXCIpJiZSZShyLnR5cGVBbm5vdGF0aW9uLnR5cGVBbm5vdGF0aW9uKXx8ci50eXBlPT09XCJGdW5jdGlvblR5cGVQYXJhbVwiJiZSZShyLnR5cGVBbm5vdGF0aW9uKSYmciE9PWUucmVzdHx8ci50eXBlPT09XCJBc3NpZ25tZW50UGF0dGVyblwiJiYoci5sZWZ0LnR5cGU9PT1cIk9iamVjdFBhdHRlcm5cInx8ci5sZWZ0LnR5cGU9PT1cIkFycmF5UGF0dGVyblwiKSYmKHIucmlnaHQudHlwZT09PVwiSWRlbnRpZmllclwifHxzZShyLnJpZ2h0KSYmci5yaWdodC5wcm9wZXJ0aWVzLmxlbmd0aD09PTB8fFUoci5yaWdodCkmJnIucmlnaHQuZWxlbWVudHMubGVuZ3RoPT09MCkpfWZ1bmN0aW9uIHNsKGUpe2xldCB0O3JldHVybiBlLnJldHVyblR5cGU/KHQ9ZS5yZXR1cm5UeXBlLHQudHlwZUFubm90YXRpb24mJih0PXQudHlwZUFubm90YXRpb24pKTplLnR5cGVBbm5vdGF0aW9uJiYodD1lLnR5cGVBbm5vdGF0aW9uKSx0fWZ1bmN0aW9uIG90KGUsdCl7dmFyIHM7bGV0IHI9c2woZSk7aWYoIXIpcmV0dXJuITE7bGV0IG49KHM9ZS50eXBlUGFyYW1ldGVycyk9PW51bGw/dm9pZCAwOnMucGFyYW1zO2lmKG4pe2lmKG4ubGVuZ3RoPjEpcmV0dXJuITE7aWYobi5sZW5ndGg9PT0xKXtsZXQgdT1uWzBdO2lmKHUuY29uc3RyYWludHx8dS5kZWZhdWx0KXJldHVybiExfX1yZXR1cm4geihlKS5sZW5ndGg9PT0xJiYoUmUocil8fHJlKHQpKX1mdW5jdGlvbiB1bChlKXtyZXR1cm4gZS5tYXRjaCh0PT50LnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCImJnQuYm9keS50eXBlPT09XCJCbG9ja1N0YXRlbWVudFwiLCh0LHIpPT57aWYodC50eXBlPT09XCJDYWxsRXhwcmVzc2lvblwiJiZyPT09XCJhcmd1bWVudHNcIiYmdC5hcmd1bWVudHMubGVuZ3RoPT09MSYmdC5jYWxsZWUudHlwZT09PVwiQ2FsbEV4cHJlc3Npb25cIil7bGV0IG49dC5jYWxsZWUuY2FsbGVlO3JldHVybiBuLnR5cGU9PT1cIklkZW50aWZpZXJcInx8bi50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCImJiFuLmNvbXB1dGVkJiZuLm9iamVjdC50eXBlPT09XCJJZGVudGlmaWVyXCImJm4ucHJvcGVydHkudHlwZT09PVwiSWRlbnRpZmllclwifXJldHVybiExfSwodCxyKT0+dC50eXBlPT09XCJWYXJpYWJsZURlY2xhcmF0b3JcIiYmcj09PVwiaW5pdFwifHx0LnR5cGU9PT1cIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvblwiJiZyPT09XCJkZWNsYXJhdGlvblwifHx0LnR5cGU9PT1cIlRTRXhwb3J0QXNzaWdubWVudFwiJiZyPT09XCJleHByZXNzaW9uXCJ8fHQudHlwZT09PVwiQXNzaWdubWVudEV4cHJlc3Npb25cIiYmcj09PVwicmlnaHRcIiYmdC5sZWZ0LnR5cGU9PT1cIk1lbWJlckV4cHJlc3Npb25cIiYmdC5sZWZ0Lm9iamVjdC50eXBlPT09XCJJZGVudGlmaWVyXCImJnQubGVmdC5vYmplY3QubmFtZT09PVwibW9kdWxlXCImJnQubGVmdC5wcm9wZXJ0eS50eXBlPT09XCJJZGVudGlmaWVyXCImJnQubGVmdC5wcm9wZXJ0eS5uYW1lPT09XCJleHBvcnRzXCIsdD0+dC50eXBlIT09XCJWYXJpYWJsZURlY2xhcmF0aW9uXCJ8fHQua2luZD09PVwiY29uc3RcIiYmdC5kZWNsYXJhdGlvbnMubGVuZ3RoPT09MSl9ZnVuY3Rpb24gcWkoZSl7bGV0IHQ9eihlKTtyZXR1cm4gdC5sZW5ndGg+MSYmdC5zb21lKHI9PnIudHlwZT09PVwiVFNQYXJhbWV0ZXJQcm9wZXJ0eVwiKX12YXIgaWw9UihbXCJWb2lkVHlwZUFubm90YXRpb25cIixcIlRTVm9pZEtleXdvcmRcIixcIk51bGxMaXRlcmFsVHlwZUFubm90YXRpb25cIixcIlRTTnVsbEtleXdvcmRcIl0pLGFsPVIoW1wiT2JqZWN0VHlwZUFubm90YXRpb25cIixcIlRTVHlwZUxpdGVyYWxcIixcIkdlbmVyaWNUeXBlQW5ub3RhdGlvblwiLFwiVFNUeXBlUmVmZXJlbmNlXCJdKTtmdW5jdGlvbiBvbChlKXtsZXR7dHlwZXM6dH09ZTtpZih0LnNvbWUobj0+VChuKSkpcmV0dXJuITE7bGV0IHI9dC5maW5kKG49PmFsKG4pKTtyZXR1cm4gcj90LmV2ZXJ5KG49Pm49PT1yfHxpbChuKSk6ITF9ZnVuY3Rpb24geHMoZSl7cmV0dXJuIHF0KGUpfHxSZShlKT8hMDp3ZShlKT9vbChlKTohMX1mdW5jdGlvbiBXaShlLHQscil7bGV0IG49dC5zZW1pP1wiO1wiOlwiXCIse25vZGU6c309ZSx1PVtLKGUpLFwib3BhcXVlIHR5cGUgXCIscihcImlkXCIpLHIoXCJ0eXBlUGFyYW1ldGVyc1wiKV07cmV0dXJuIHMuc3VwZXJ0eXBlJiZ1LnB1c2goXCI6IFwiLHIoXCJzdXBlcnR5cGVcIikpLHMuaW1wbHR5cGUmJnUucHVzaChcIiA9IFwiLHIoXCJpbXBsdHlwZVwiKSksdS5wdXNoKG4pLHV9ZnVuY3Rpb24gWnIoZSx0LHIpe2xldCBuPXQuc2VtaT9cIjtcIjpcIlwiLHtub2RlOnN9PWUsdT1bSyhlKV07dS5wdXNoKFwidHlwZSBcIixyKFwiaWRcIikscihcInR5cGVQYXJhbWV0ZXJzXCIpKTtsZXQgaT1zLnR5cGU9PT1cIlRTVHlwZUFsaWFzRGVjbGFyYXRpb25cIj9cInR5cGVBbm5vdGF0aW9uXCI6XCJyaWdodFwiO3JldHVybltodChlLHQscix1LFwiID1cIixpKSxuXX1mdW5jdGlvbiBlbihlLHQscil7bGV0IG49ITE7cmV0dXJuIGwoZS5tYXAoKHtpc0ZpcnN0OnMscHJldmlvdXM6dSxub2RlOmksaW5kZXg6YX0pPT57bGV0IG89cigpO2lmKHMpcmV0dXJuIG87bGV0IHA9UmUoaSkseT1SZSh1KTtyZXR1cm4geSYmcD9bXCIgJiBcIixuP2Yobyk6b106IXkmJiFwP3QuZXhwZXJpbWVudGFsT3BlcmF0b3JQb3NpdGlvbj09PVwic3RhcnRcIj9mKFt4LFwiJiBcIixvXSk6ZihbXCIgJlwiLHgsb10pOihhPjEmJihuPSEwKSxbXCIgJiBcIixhPjE/ZihvKTpvXSl9LFwidHlwZXNcIikpfWZ1bmN0aW9uIHRuKGUsdCxyKXtsZXR7bm9kZTpufT1lLHtwYXJlbnQ6c309ZSx1PXMudHlwZSE9PVwiVHlwZVBhcmFtZXRlckluc3RhbnRpYXRpb25cIiYmKCFKZShzKXx8IXQuZXhwZXJpbWVudGFsVGVybmFyaWVzKSYmcy50eXBlIT09XCJUU1R5cGVQYXJhbWV0ZXJJbnN0YW50aWF0aW9uXCImJnMudHlwZSE9PVwiR2VuZXJpY1R5cGVBbm5vdGF0aW9uXCImJnMudHlwZSE9PVwiVFNUeXBlUmVmZXJlbmNlXCImJnMudHlwZSE9PVwiVFNUeXBlQXNzZXJ0aW9uXCImJnMudHlwZSE9PVwiVHVwbGVUeXBlQW5ub3RhdGlvblwiJiZzLnR5cGUhPT1cIlRTVHVwbGVUeXBlXCImJiEocy50eXBlPT09XCJGdW5jdGlvblR5cGVQYXJhbVwiJiYhcy5uYW1lJiZlLmdyYW5kcGFyZW50LnRoaXMhPT1zKSYmISgocy50eXBlPT09XCJUeXBlQWxpYXNcInx8cy50eXBlPT09XCJWYXJpYWJsZURlY2xhcmF0b3JcInx8cy50eXBlPT09XCJUU1R5cGVBbGlhc0RlY2xhcmF0aW9uXCIpJiZMZSh0Lm9yaWdpbmFsVGV4dCxuKSksaT14cyhuKSxhPWUubWFwKHk9PntsZXQgRD1yKCk7cmV0dXJuIGl8fChEPUJlKDIsRCkpLHllKHksRCx0KX0sXCJ0eXBlc1wiKTtpZihpKXJldHVybiBiKFwiIHwgXCIsYSk7bGV0IG89dSYmIUxlKHQub3JpZ2luYWxUZXh0LG4pLHA9W0IoW28/eDpcIlwiLFwifCBcIl0pLGIoW3gsXCJ8IFwiXSxhKV07cmV0dXJuIGtlKGUsdCk/bChbZihwKSxFXSk6KHMudHlwZT09PVwiVHVwbGVUeXBlQW5ub3RhdGlvblwifHxzLnR5cGU9PT1cIlRTVHVwbGVUeXBlXCIpJiZzW3MudHlwZT09PVwiVHVwbGVUeXBlQW5ub3RhdGlvblwiJiZzLnR5cGVzP1widHlwZXNcIjpcImVsZW1lbnRUeXBlc1wiXS5sZW5ndGg+MT9sKFtmKFtCKFtcIihcIixFXSkscF0pLEUsQihcIilcIildKTpsKHU/ZihwKTpwKX1mdW5jdGlvbiBwbChlKXt2YXIgbjtsZXR7bm9kZTp0LHBhcmVudDpyfT1lO3JldHVybiB0LnR5cGU9PT1cIkZ1bmN0aW9uVHlwZUFubm90YXRpb25cIiYmKE9yKHIpfHwhKChyLnR5cGU9PT1cIk9iamVjdFR5cGVQcm9wZXJ0eVwifHxyLnR5cGU9PT1cIk9iamVjdFR5cGVJbnRlcm5hbFNsb3RcIikmJiFyLnZhcmlhbmNlJiYhci5vcHRpb25hbCYmUHQocix0KXx8ci50eXBlPT09XCJPYmplY3RUeXBlQ2FsbFByb3BlcnR5XCJ8fCgobj1lLmdldFBhcmVudE5vZGUoMikpPT1udWxsP3ZvaWQgMDpuLnR5cGUpPT09XCJEZWNsYXJlRnVuY3Rpb25cIikpfWZ1bmN0aW9uIHJuKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9W1Z0KGUpXTsobi50eXBlPT09XCJUU0NvbnN0cnVjdG9yVHlwZVwifHxuLnR5cGU9PT1cIlRTQ29uc3RydWN0U2lnbmF0dXJlRGVjbGFyYXRpb25cIikmJnMucHVzaChcIm5ldyBcIik7bGV0IHU9VWUoZSxyLHQsITEsITApLGk9W107cmV0dXJuIG4udHlwZT09PVwiRnVuY3Rpb25UeXBlQW5ub3RhdGlvblwiP2kucHVzaChwbChlKT9cIiA9PiBcIjpcIjogXCIscihcInJldHVyblR5cGVcIikpOmkucHVzaChIKGUscixuLnJldHVyblR5cGU/XCJyZXR1cm5UeXBlXCI6XCJ0eXBlQW5ub3RhdGlvblwiKSksb3QobixpKSYmKHU9bCh1KSkscy5wdXNoKHUsaSksbChzKX1mdW5jdGlvbiBubihlLHQscil7cmV0dXJuW3IoXCJvYmplY3RUeXBlXCIpLCQoZSksXCJbXCIscihcImluZGV4VHlwZVwiKSxcIl1cIl19ZnVuY3Rpb24gc24oZSx0LHIpe3JldHVybltcImluZmVyIFwiLHIoXCJ0eXBlUGFyYW1ldGVyXCIpXX1mdW5jdGlvbiBocyhlLHQscil7bGV0e25vZGU6bn09ZTtyZXR1cm5bbi5wb3N0Zml4P1wiXCI6cixIKGUsdCksbi5wb3N0Zml4P3I6XCJcIl19ZnVuY3Rpb24gdW4oZSx0LHIpe2xldHtub2RlOm59PWU7cmV0dXJuW1wiLi4uXCIsLi4ubi50eXBlPT09XCJUdXBsZVR5cGVTcHJlYWRFbGVtZW50XCImJm4ubGFiZWw/W3IoXCJsYWJlbFwiKSxcIjogXCJdOltdLHIoXCJ0eXBlQW5ub3RhdGlvblwiKV19ZnVuY3Rpb24gYW4oZSx0LHIpe2xldHtub2RlOm59PWU7cmV0dXJuW24udmFyaWFuY2U/cihcInZhcmlhbmNlXCIpOlwiXCIscihcImxhYmVsXCIpLG4ub3B0aW9uYWw/XCI/XCI6XCJcIixcIjogXCIscihcImVsZW1lbnRUeXBlXCIpXX12YXIgY2w9bmV3IFdlYWtTZXQ7ZnVuY3Rpb24gSChlLHQscj1cInR5cGVBbm5vdGF0aW9uXCIpe2xldHtub2RlOntbcl06bn19PWU7aWYoIW4pcmV0dXJuXCJcIjtsZXQgcz0hMTtpZihuLnR5cGU9PT1cIlRTVHlwZUFubm90YXRpb25cInx8bi50eXBlPT09XCJUeXBlQW5ub3RhdGlvblwiKXtsZXQgdT1lLmNhbGwoTmkscik7KHU9PT1cIj0+XCJ8fHU9PT1cIjpcIiYmVChuLGguTGVhZGluZykpJiYocz0hMCksY2wuYWRkKG4pfXJldHVybiBzP1tcIiBcIix0KHIpXTp0KHIpfXZhciBOaT1lPT5lLm1hdGNoKHQ9PnQudHlwZT09PVwiVFNUeXBlQW5ub3RhdGlvblwiLCh0LHIpPT4ocj09PVwicmV0dXJuVHlwZVwifHxyPT09XCJ0eXBlQW5ub3RhdGlvblwiKSYmKHQudHlwZT09PVwiVFNGdW5jdGlvblR5cGVcInx8dC50eXBlPT09XCJUU0NvbnN0cnVjdG9yVHlwZVwiKSk/XCI9PlwiOmUubWF0Y2godD0+dC50eXBlPT09XCJUU1R5cGVBbm5vdGF0aW9uXCIsKHQscik9PnI9PT1cInR5cGVBbm5vdGF0aW9uXCImJih0LnR5cGU9PT1cIlRTSlNEb2NOdWxsYWJsZVR5cGVcInx8dC50eXBlPT09XCJUU0pTRG9jTm9uTnVsbGFibGVUeXBlXCJ8fHQudHlwZT09PVwiVFNUeXBlUHJlZGljYXRlXCIpKXx8ZS5tYXRjaCh0PT50LnR5cGU9PT1cIlR5cGVBbm5vdGF0aW9uXCIsKHQscik9PnI9PT1cInR5cGVBbm5vdGF0aW9uXCImJnQudHlwZT09PVwiSWRlbnRpZmllclwiLCh0LHIpPT5yPT09XCJpZFwiJiZ0LnR5cGU9PT1cIkRlY2xhcmVGdW5jdGlvblwiKXx8ZS5tYXRjaCh0PT50LnR5cGU9PT1cIlR5cGVBbm5vdGF0aW9uXCIsKHQscik9PnI9PT1cInR5cGVBbm5vdGF0aW9uXCImJnQudHlwZT09PVwiSWRlbnRpZmllclwiLCh0LHIpPT5yPT09XCJpZFwiJiZ0LnR5cGU9PT1cIkRlY2xhcmVIb29rXCIpfHxlLm1hdGNoKHQ9PnQudHlwZT09PVwiVHlwZUFubm90YXRpb25cIiwodCxyKT0+cj09PVwiYm91bmRcIiYmdC50eXBlPT09XCJUeXBlUGFyYW1ldGVyXCImJnQudXNlc0V4dGVuZHNCb3VuZCk/XCJcIjpcIjpcIjtmdW5jdGlvbiBvbihlLHQscil7bGV0IG49TmkoZSk7cmV0dXJuIG4/W24sXCIgXCIscihcInR5cGVBbm5vdGF0aW9uXCIpXTpyKFwidHlwZUFubm90YXRpb25cIil9ZnVuY3Rpb24gcG4oZSl7cmV0dXJuW2UoXCJlbGVtZW50VHlwZVwiKSxcIltdXCJdfWZ1bmN0aW9uIGNuKHtub2RlOmV9LHQpe2xldCByPWUudHlwZT09PVwiVFNUeXBlUXVlcnlcIj9cImV4cHJOYW1lXCI6XCJhcmd1bWVudFwiLG49ZS50eXBlPT09XCJUeXBlb2ZUeXBlQW5ub3RhdGlvblwifHxlLnR5cGVBcmd1bWVudHM/XCJ0eXBlQXJndW1lbnRzXCI6XCJ0eXBlUGFyYW1ldGVyc1wiO3JldHVybltcInR5cGVvZiBcIix0KHIpLHQobildfWZ1bmN0aW9uIGxuKGUsdCl7bGV0e25vZGU6cn09ZTtyZXR1cm5bci50eXBlPT09XCJUU1R5cGVQcmVkaWNhdGVcIiYmci5hc3NlcnRzP1wiYXNzZXJ0cyBcIjpyLnR5cGU9PT1cIlR5cGVQcmVkaWNhdGVcIiYmci5raW5kP2Ake3Iua2luZH0gYDpcIlwiLHQoXCJwYXJhbWV0ZXJOYW1lXCIpLHIudHlwZUFubm90YXRpb24/W1wiIGlzIFwiLEgoZSx0KV06XCJcIl19ZnVuY3Rpb24gJChlKXtsZXR7bm9kZTp0fT1lO3JldHVybiF0Lm9wdGlvbmFsfHx0LnR5cGU9PT1cIklkZW50aWZpZXJcIiYmdD09PWUucGFyZW50LmtleT9cIlwiOkwodCl8fFcodCkmJnQuY29tcHV0ZWR8fHQudHlwZT09PVwiT3B0aW9uYWxJbmRleGVkQWNjZXNzVHlwZVwiP1wiPy5cIjpcIj9cIn1mdW5jdGlvbiBtbihlKXtyZXR1cm4gZS5ub2RlLmRlZmluaXRlfHxlLm1hdGNoKHZvaWQgMCwodCxyKT0+cj09PVwiaWRcIiYmdC50eXBlPT09XCJWYXJpYWJsZURlY2xhcmF0b3JcIiYmdC5kZWZpbml0ZSk/XCIhXCI6XCJcIn12YXIgbGw9bmV3IFNldChbXCJEZWNsYXJlQ2xhc3NcIixcIkRlY2xhcmVDb21wb25lbnRcIixcIkRlY2xhcmVGdW5jdGlvblwiLFwiRGVjbGFyZUhvb2tcIixcIkRlY2xhcmVWYXJpYWJsZVwiLFwiRGVjbGFyZUV4cG9ydERlY2xhcmF0aW9uXCIsXCJEZWNsYXJlRXhwb3J0QWxsRGVjbGFyYXRpb25cIixcIkRlY2xhcmVPcGFxdWVUeXBlXCIsXCJEZWNsYXJlVHlwZUFsaWFzXCIsXCJEZWNsYXJlRW51bVwiLFwiRGVjbGFyZUludGVyZmFjZVwiXSk7ZnVuY3Rpb24gSyhlKXtsZXR7bm9kZTp0fT1lO3JldHVybiB0LmRlY2xhcmV8fGxsLmhhcyh0LnR5cGUpJiZlLnBhcmVudC50eXBlIT09XCJEZWNsYXJlRXhwb3J0RGVjbGFyYXRpb25cIj9cImRlY2xhcmUgXCI6XCJcIn12YXIgbWw9bmV3IFNldChbXCJUU0Fic3RyYWN0TWV0aG9kRGVmaW5pdGlvblwiLFwiVFNBYnN0cmFjdFByb3BlcnR5RGVmaW5pdGlvblwiLFwiVFNBYnN0cmFjdEFjY2Vzc29yUHJvcGVydHlcIl0pO2Z1bmN0aW9uIFZ0KHtub2RlOmV9KXtyZXR1cm4gZS5hYnN0cmFjdHx8bWwuaGFzKGUudHlwZSk/XCJhYnN0cmFjdCBcIjpcIlwifWZ1bmN0aW9uIHR0KGUsdCxyKXtsZXQgbj1lLm5vZGU7cmV0dXJuIG4udHlwZUFyZ3VtZW50cz9yKFwidHlwZUFyZ3VtZW50c1wiKTpuLnR5cGVQYXJhbWV0ZXJzP3IoXCJ0eXBlUGFyYW1ldGVyc1wiKTpcIlwifWZ1bmN0aW9uIEtyKGUsdCxyKXtyZXR1cm5bXCI6OlwiLHIoXCJjYWxsZWVcIildfWZ1bmN0aW9uIGZ0KGUsdCxyKXtyZXR1cm4gZS50eXBlPT09XCJFbXB0eVN0YXRlbWVudFwiP1wiO1wiOmUudHlwZT09PVwiQmxvY2tTdGF0ZW1lbnRcInx8cj9bXCIgXCIsdF06ZihbeCx0XSl9ZnVuY3Rpb24geW4oZSx0KXtyZXR1cm5bXCIuLi5cIix0KFwiYXJndW1lbnRcIiksSChlLHQpXX1mdW5jdGlvbiAkdChlKXtyZXR1cm4gZS5hY2Nlc3NpYmlsaXR5P2UuYWNjZXNzaWJpbGl0eStcIiBcIjpcIlwifWZ1bmN0aW9uIHlsKGUsdCxyLG4pe2xldHtub2RlOnN9PWUsdT1zLmluZXhhY3Q/XCIuLi5cIjpcIlwiO3JldHVybiBUKHMsaC5EYW5nbGluZyk/bChbcix1LEooZSx0LHtpbmRlbnQ6ITB9KSxFLG5dKTpbcix1LG5dfWZ1bmN0aW9uIEt0KGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9W10sdT1uLnR5cGU9PT1cIlR1cGxlRXhwcmVzc2lvblwiP1wiI1tcIjpcIltcIixpPVwiXVwiLGE9bi50eXBlPT09XCJUdXBsZVR5cGVBbm5vdGF0aW9uXCImJm4udHlwZXM/XCJ0eXBlc1wiOm4udHlwZT09PVwiVFNUdXBsZVR5cGVcInx8bi50eXBlPT09XCJUdXBsZVR5cGVBbm5vdGF0aW9uXCI/XCJlbGVtZW50VHlwZXNcIjpcImVsZW1lbnRzXCIsbz1uW2FdO2lmKG8ubGVuZ3RoPT09MClzLnB1c2goeWwoZSx0LHUsaSkpO2Vsc2V7bGV0IHA9TSghMSxvLC0xKSx5PShwPT1udWxsP3ZvaWQgMDpwLnR5cGUpIT09XCJSZXN0RWxlbWVudFwiJiYhbi5pbmV4YWN0LEQ9cD09PW51bGwsbT1TeW1ib2woXCJhcnJheVwiKSxDPSF0Ll9faW5KZXN0RWFjaCYmby5sZW5ndGg+MSYmby5ldmVyeSgoZCxTLGcpPT57bGV0IF89ZD09bnVsbD92b2lkIDA6ZC50eXBlO2lmKCFVKGQpJiYhc2UoZCkpcmV0dXJuITE7bGV0IHY9Z1tTKzFdO2lmKHYmJl8hPT12LnR5cGUpcmV0dXJuITE7bGV0IGo9VShkKT9cImVsZW1lbnRzXCI6XCJwcm9wZXJ0aWVzXCI7cmV0dXJuIGRbal0mJmRbal0ubGVuZ3RoPjF9KSxjPUNzKG4sdCksQT15P0Q/XCIsXCI6b2UodCk/Yz9CKFwiLFwiLFwiXCIse2dyb3VwSWQ6bX0pOkIoXCIsXCIpOlwiXCI6XCJcIjtzLnB1c2gobChbdSxmKFtFLGM/ZmwoZSx0LHIsQSk6W0RsKGUsdCxhLG4uaW5leGFjdCxyKSxBXSxKKGUsdCldKSxFLGldLHtzaG91bGRCcmVhazpDLGlkOm19KSl9cmV0dXJuIHMucHVzaCgkKGUpLEgoZSxyKSksc31mdW5jdGlvbiBDcyhlLHQpe3JldHVybiBVKGUpJiZlLmVsZW1lbnRzLmxlbmd0aD4xJiZlLmVsZW1lbnRzLmV2ZXJ5KHI9PnImJihGZShyKXx8TW4ocikmJiFUKHIuYXJndW1lbnQpKSYmIVQocixoLlRyYWlsaW5nfGguTGluZSxuPT4hWih0Lm9yaWdpbmFsVGV4dCxxKG4pLHtiYWNrd2FyZHM6ITB9KSkpfWZ1bmN0aW9uIEdpKHtub2RlOmV9LHtvcmlnaW5hbFRleHQ6dH0pe2xldCByPXM9Pl90KHQsdnQodCxzKSksbj1zPT50W3NdPT09XCIsXCI/czpuKHIocysxKSk7cmV0dXJuIGp0KHQsbihrKGUpKSl9ZnVuY3Rpb24gRGwoZSx0LHIsbixzKXtsZXQgdT1bXTtyZXR1cm4gZS5lYWNoKCh7bm9kZTppLGlzTGFzdDphfSk9Pnt1LnB1c2goaT9sKHMoKSk6XCJcIiksKCFhfHxuKSYmdS5wdXNoKFtcIixcIix4LGkmJkdpKGUsdCk/RTpcIlwiXSl9LHIpLG4mJnUucHVzaChcIi4uLlwiKSx1fWZ1bmN0aW9uIGZsKGUsdCxyLG4pe2xldCBzPVtdO3JldHVybiBlLmVhY2goKHtpc0xhc3Q6dSxuZXh0Oml9KT0+e3MucHVzaChbcigpLHU/bjpcIixcIl0pLHV8fHMucHVzaChHaShlLHQpP1tGLEZdOlQoaSxoLkxlYWRpbmd8aC5MaW5lKT9GOngpfSxcImVsZW1lbnRzXCIpLHFyKHMpfXZhciBFbD0vXltcXCRBLVpfYS16XFx4QUFcXHhCNVxceEJBXFx4QzAtXFx4RDZcXHhEOC1cXHhGNlxceEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM3RlxcdTAzODZcXHUwMzg4LVxcdTAzOEFcXHUwMzhDXFx1MDM4RS1cXHUwM0ExXFx1MDNBMy1cXHUwM0Y1XFx1MDNGNy1cXHUwNDgxXFx1MDQ4QS1cXHUwNTJGXFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1RDAtXFx1MDVFQVxcdTA1RjAtXFx1MDVGMlxcdTA2MjAtXFx1MDY0QVxcdTA2NkVcXHUwNjZGXFx1MDY3MS1cXHUwNkQzXFx1MDZENVxcdTA2RTVcXHUwNkU2XFx1MDZFRVxcdTA2RUZcXHUwNkZBLVxcdTA2RkNcXHUwNkZGXFx1MDcxMFxcdTA3MTItXFx1MDcyRlxcdTA3NEQtXFx1MDdBNVxcdTA3QjFcXHUwN0NBLVxcdTA3RUFcXHUwN0Y0XFx1MDdGNVxcdTA3RkFcXHUwODAwLVxcdTA4MTVcXHUwODFBXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwOEEwLVxcdTA4QjRcXHUwOEI2LVxcdTA4QkRcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk4MFxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBBRjlcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzRFxcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI3MVxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJEMFxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzOVxcdTBDM0RcXHUwQzU4LVxcdTBDNUFcXHUwQzYwXFx1MEM2MVxcdTBDODBcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENTQtXFx1MEQ1NlxcdTBENUYtXFx1MEQ2MVxcdTBEN0EtXFx1MEQ3RlxcdTBEODUtXFx1MEQ5NlxcdTBEOUEtXFx1MERCMVxcdTBEQjMtXFx1MERCQlxcdTBEQkRcXHUwREMwLVxcdTBEQzZcXHUwRTAxLVxcdTBFMzBcXHUwRTMyXFx1MEUzM1xcdTBFNDAtXFx1MEU0NlxcdTBFODFcXHUwRTgyXFx1MEU4NFxcdTBFODdcXHUwRTg4XFx1MEU4QVxcdTBFOERcXHUwRTk0LVxcdTBFOTdcXHUwRTk5LVxcdTBFOUZcXHUwRUExLVxcdTBFQTNcXHUwRUE1XFx1MEVBN1xcdTBFQUFcXHUwRUFCXFx1MEVBRC1cXHUwRUIwXFx1MEVCMlxcdTBFQjNcXHUwRUJEXFx1MEVDMC1cXHUwRUM0XFx1MEVDNlxcdTBFREMtXFx1MEVERlxcdTBGMDBcXHUwRjQwLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjg4LVxcdTBGOENcXHUxMDAwLVxcdTEwMkFcXHUxMDNGXFx1MTA1MC1cXHUxMDU1XFx1MTA1QS1cXHUxMDVEXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2RS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4RVxcdTEwQTAtXFx1MTBDNVxcdTEwQzdcXHUxMENEXFx1MTBEMC1cXHUxMEZBXFx1MTBGQy1cXHUxMjQ4XFx1MTI0QS1cXHUxMjREXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNUEtXFx1MTI1RFxcdTEyNjAtXFx1MTI4OFxcdTEyOEEtXFx1MTI4RFxcdTEyOTAtXFx1MTJCMFxcdTEyQjItXFx1MTJCNVxcdTEyQjgtXFx1MTJCRVxcdTEyQzBcXHUxMkMyLVxcdTEyQzVcXHUxMkM4LVxcdTEyRDZcXHUxMkQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNUFcXHUxMzgwLVxcdTEzOEZcXHUxM0EwLVxcdTEzRjVcXHUxM0Y4LVxcdTEzRkRcXHUxNDAxLVxcdTE2NkNcXHUxNjZGLVxcdTE2N0ZcXHUxNjgxLVxcdTE2OUFcXHUxNkEwLVxcdTE2RUFcXHUxNkVFLVxcdTE2RjhcXHUxNzAwLVxcdTE3MENcXHUxNzBFLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NkNcXHUxNzZFLVxcdTE3NzBcXHUxNzgwLVxcdTE3QjNcXHUxN0Q3XFx1MTdEQ1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MTg4NFxcdTE4ODctXFx1MThBOFxcdTE4QUFcXHUxOEIwLVxcdTE4RjVcXHUxOTAwLVxcdTE5MUVcXHUxOTUwLVxcdTE5NkRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5QUJcXHUxOUIwLVxcdTE5QzlcXHUxQTAwLVxcdTFBMTZcXHUxQTIwLVxcdTFBNTRcXHUxQUE3XFx1MUIwNS1cXHUxQjMzXFx1MUI0NS1cXHUxQjRCXFx1MUI4My1cXHUxQkEwXFx1MUJBRVxcdTFCQUZcXHUxQkJBLVxcdTFCRTVcXHUxQzAwLVxcdTFDMjNcXHUxQzRELVxcdTFDNEZcXHUxQzVBLVxcdTFDN0RcXHUxQzgwLVxcdTFDODhcXHUxQ0U5LVxcdTFDRUNcXHUxQ0VFLVxcdTFDRjFcXHUxQ0Y1XFx1MUNGNlxcdTFEMDAtXFx1MURCRlxcdTFFMDAtXFx1MUYxNVxcdTFGMTgtXFx1MUYxRFxcdTFGMjAtXFx1MUY0NVxcdTFGNDgtXFx1MUY0RFxcdTFGNTAtXFx1MUY1N1xcdTFGNTlcXHUxRjVCXFx1MUY1RFxcdTFGNUYtXFx1MUY3RFxcdTFGODAtXFx1MUZCNFxcdTFGQjYtXFx1MUZCQ1xcdTFGQkVcXHUxRkMyLVxcdTFGQzRcXHUxRkM2LVxcdTFGQ0NcXHUxRkQwLVxcdTFGRDNcXHUxRkQ2LVxcdTFGREJcXHUxRkUwLVxcdTFGRUNcXHUxRkYyLVxcdTFGRjRcXHUxRkY2LVxcdTFGRkNcXHUyMDcxXFx1MjA3RlxcdTIwOTAtXFx1MjA5Q1xcdTIxMDJcXHUyMTA3XFx1MjEwQS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExRFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMkEtXFx1MjEyRFxcdTIxMkYtXFx1MjEzOVxcdTIxM0MtXFx1MjEzRlxcdTIxNDUtXFx1MjE0OVxcdTIxNEVcXHUyMTYwLVxcdTIxODhcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJFMkZcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDlELVxcdTMwOUZcXHUzMEExLVxcdTMwRkFcXHUzMEZDLVxcdTMwRkZcXHUzMTA1LVxcdTMxMkRcXHUzMTMxLVxcdTMxOEVcXHUzMUEwLVxcdTMxQkFcXHUzMUYwLVxcdTMxRkZcXHUzNDAwLVxcdTREQjVcXHU0RTAwLVxcdTlGRDVcXHVBMDAwLVxcdUE0OENcXHVBNEQwLVxcdUE0RkRcXHVBNTAwLVxcdUE2MENcXHVBNjEwLVxcdUE2MUZcXHVBNjJBXFx1QTYyQlxcdUE2NDAtXFx1QTY2RVxcdUE2N0YtXFx1QTY5RFxcdUE2QTAtXFx1QTZFRlxcdUE3MTctXFx1QTcxRlxcdUE3MjItXFx1QTc4OFxcdUE3OEItXFx1QTdBRVxcdUE3QjAtXFx1QTdCN1xcdUE3RjctXFx1QTgwMVxcdUE4MDMtXFx1QTgwNVxcdUE4MDctXFx1QTgwQVxcdUE4MEMtXFx1QTgyMlxcdUE4NDAtXFx1QTg3M1xcdUE4ODItXFx1QThCM1xcdUE4RjItXFx1QThGN1xcdUE4RkJcXHVBOEZEXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUE5RTAtXFx1QTlFNFxcdUE5RTYtXFx1QTlFRlxcdUE5RkEtXFx1QTlGRVxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTdFLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCMzAtXFx1QUI1QVxcdUFCNUMtXFx1QUI2NVxcdUFCNzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ11bXFwkMC05QS1aX2EtelxceEFBXFx4QjVcXHhCQVxceEMwLVxceEQ2XFx4RDgtXFx4RjZcXHhGOC1cXHUwMkMxXFx1MDJDNi1cXHUwMkQxXFx1MDJFMC1cXHUwMkU0XFx1MDJFQ1xcdTAyRUVcXHUwMzAwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN0EtXFx1MDM3RFxcdTAzN0ZcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0ODMtXFx1MDQ4N1xcdTA0OEEtXFx1MDUyRlxcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNTkxLVxcdTA1QkRcXHUwNUJGXFx1MDVDMVxcdTA1QzJcXHUwNUM0XFx1MDVDNVxcdTA1QzdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjEwLVxcdTA2MUFcXHUwNjIwLVxcdTA2NjlcXHUwNjZFLVxcdTA2RDNcXHUwNkQ1LVxcdTA2RENcXHUwNkRGLVxcdTA2RThcXHUwNkVBLVxcdTA2RkNcXHUwNkZGXFx1MDcxMC1cXHUwNzRBXFx1MDc0RC1cXHUwN0IxXFx1MDdDMC1cXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgyRFxcdTA4NDAtXFx1MDg1QlxcdTA4QTAtXFx1MDhCNFxcdTA4QjYtXFx1MDhCRFxcdTA4RDQtXFx1MDhFMVxcdTA4RTMtXFx1MDk2M1xcdTA5NjYtXFx1MDk2RlxcdTA5NzEtXFx1MDk4M1xcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkMtXFx1MDlDNFxcdTA5QzdcXHUwOUM4XFx1MDlDQi1cXHUwOUNFXFx1MDlEN1xcdTA5RENcXHUwOUREXFx1MDlERi1cXHUwOUUzXFx1MDlFNi1cXHUwOUYxXFx1MEEwMS1cXHUwQTAzXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTNDXFx1MEEzRS1cXHUwQTQyXFx1MEE0N1xcdTBBNDhcXHUwQTRCLVxcdTBBNERcXHUwQTUxXFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNjYtXFx1MEE3NVxcdTBBODEtXFx1MEE4M1xcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCQy1cXHUwQUM1XFx1MEFDNy1cXHUwQUM5XFx1MEFDQi1cXHUwQUNEXFx1MEFEMFxcdTBBRTAtXFx1MEFFM1xcdTBBRTYtXFx1MEFFRlxcdTBBRjlcXHUwQjAxLVxcdTBCMDNcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzQy1cXHUwQjQ0XFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYzXFx1MEI2Ni1cXHUwQjZGXFx1MEI3MVxcdTBCODJcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDBcXHUwQkQ3XFx1MEJFNi1cXHUwQkVGXFx1MEMwMC1cXHUwQzAzXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzM5XFx1MEMzRC1cXHUwQzQ0XFx1MEM0Ni1cXHUwQzQ4XFx1MEM0QS1cXHUwQzREXFx1MEM1NVxcdTBDNTZcXHUwQzU4LVxcdTBDNUFcXHUwQzYwLVxcdTBDNjNcXHUwQzY2LVxcdTBDNkZcXHUwQzgwLVxcdTBDODNcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JDLVxcdTBDQzRcXHUwQ0M2LVxcdTBDQzhcXHUwQ0NBLVxcdTBDQ0RcXHUwQ0Q1XFx1MENENlxcdTBDREVcXHUwQ0UwLVxcdTBDRTNcXHUwQ0U2LVxcdTBDRUZcXHUwQ0YxXFx1MENGMlxcdTBEMDEtXFx1MEQwM1xcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0QtXFx1MEQ0NFxcdTBENDYtXFx1MEQ0OFxcdTBENEEtXFx1MEQ0RVxcdTBENTQtXFx1MEQ1N1xcdTBENUYtXFx1MEQ2M1xcdTBENjYtXFx1MEQ2RlxcdTBEN0EtXFx1MEQ3RlxcdTBEODJcXHUwRDgzXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBEQ0FcXHUwRENGLVxcdTBERDRcXHUwREQ2XFx1MEREOC1cXHUwRERGXFx1MERFNi1cXHUwREVGXFx1MERGMlxcdTBERjNcXHUwRTAxLVxcdTBFM0FcXHUwRTQwLVxcdTBFNEVcXHUwRTUwLVxcdTBFNTlcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCOVxcdTBFQkItXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRUM4LVxcdTBFQ0RcXHUwRUQwLVxcdTBFRDlcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEYxOFxcdTBGMTlcXHUwRjIwLVxcdTBGMjlcXHUwRjM1XFx1MEYzN1xcdTBGMzlcXHUwRjNFLVxcdTBGNDdcXHUwRjQ5LVxcdTBGNkNcXHUwRjcxLVxcdTBGODRcXHUwRjg2LVxcdTBGOTdcXHUwRjk5LVxcdTBGQkNcXHUwRkM2XFx1MTAwMC1cXHUxMDQ5XFx1MTA1MC1cXHUxMDlEXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzNUQtXFx1MTM1RlxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNVxcdTEzRjgtXFx1MTNGRFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE2RUUtXFx1MTZGOFxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxNFxcdTE3MjAtXFx1MTczNFxcdTE3NDAtXFx1MTc1M1xcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3NzJcXHUxNzczXFx1MTc4MC1cXHUxN0QzXFx1MTdEN1xcdTE3RENcXHUxN0REXFx1MTdFMC1cXHUxN0U5XFx1MTgwQi1cXHUxODBEXFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFFXFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTk0Ni1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlCMC1cXHUxOUM5XFx1MTlEMC1cXHUxOUQ5XFx1MUEwMC1cXHUxQTFCXFx1MUEyMC1cXHUxQTVFXFx1MUE2MC1cXHUxQTdDXFx1MUE3Ri1cXHUxQTg5XFx1MUE5MC1cXHUxQTk5XFx1MUFBN1xcdTFBQjAtXFx1MUFCRFxcdTFCMDAtXFx1MUI0QlxcdTFCNTAtXFx1MUI1OVxcdTFCNkItXFx1MUI3M1xcdTFCODAtXFx1MUJGM1xcdTFDMDAtXFx1MUMzN1xcdTFDNDAtXFx1MUM0OVxcdTFDNEQtXFx1MUM3RFxcdTFDODAtXFx1MUM4OFxcdTFDRDAtXFx1MUNEMlxcdTFDRDQtXFx1MUNGNlxcdTFDRjhcXHUxQ0Y5XFx1MUQwMC1cXHUxREY1XFx1MURGQi1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwMENcXHUyMDBEXFx1MjAzRlxcdTIwNDBcXHUyMDU0XFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMEQwLVxcdTIwRENcXHUyMEUxXFx1MjBFNS1cXHUyMEYwXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxNjAtXFx1MjE4OFxcdTJDMDAtXFx1MkMyRVxcdTJDMzAtXFx1MkM1RVxcdTJDNjAtXFx1MkNFNFxcdTJDRUItXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEN0YtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJERTAtXFx1MkRGRlxcdTJFMkZcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMkZcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM0NcXHUzMDQxLVxcdTMwOTZcXHUzMDk5XFx1MzA5QVxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZENVxcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYyQlxcdUE2NDAtXFx1QTY2RlxcdUE2NzQtXFx1QTY3RFxcdUE2N0YtXFx1QTZGMVxcdUE3MTctXFx1QTcxRlxcdUE3MjItXFx1QTc4OFxcdUE3OEItXFx1QTdBRVxcdUE3QjAtXFx1QTdCN1xcdUE3RjctXFx1QTgyN1xcdUE4NDAtXFx1QTg3M1xcdUE4ODAtXFx1QThDNVxcdUE4RDAtXFx1QThEOVxcdUE4RTAtXFx1QThGN1xcdUE4RkJcXHVBOEZEXFx1QTkwMC1cXHVBOTJEXFx1QTkzMC1cXHVBOTUzXFx1QTk2MC1cXHVBOTdDXFx1QTk4MC1cXHVBOUMwXFx1QTlDRi1cXHVBOUQ5XFx1QTlFMC1cXHVBOUZFXFx1QUEwMC1cXHVBQTM2XFx1QUE0MC1cXHVBQTREXFx1QUE1MC1cXHVBQTU5XFx1QUE2MC1cXHVBQTc2XFx1QUE3QS1cXHVBQUMyXFx1QUFEQi1cXHVBQUREXFx1QUFFMC1cXHVBQUVGXFx1QUFGMi1cXHVBQUY2XFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXFx1QUIzMC1cXHVBQjVBXFx1QUI1Qy1cXHVBQjY1XFx1QUI3MC1cXHVBQkVBXFx1QUJFQ1xcdUFCRURcXHVBQkYwLVxcdUFCRjlcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFELVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFMDAtXFx1RkUwRlxcdUZFMjAtXFx1RkUyRlxcdUZFMzNcXHVGRTM0XFx1RkU0RC1cXHVGRTRGXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYxMC1cXHVGRjE5XFx1RkYyMS1cXHVGRjNBXFx1RkYzRlxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10qJC8sRmw9ZT0+RWwudGVzdChlKSxVaT1GbDtmdW5jdGlvbiBDbChlKXtyZXR1cm4gZS5sZW5ndGg9PT0xP2U6ZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL14oWystXT9bXFxkLl0rZSkoPzpcXCt8KC0pKT8wKig/PVxcZCkvdSxcIiQxJDJcIikucmVwbGFjZSgvXihbKy1dP1tcXGQuXSspZVsrLV0/MCskL3UsXCIkMVwiKS5yZXBsYWNlKC9eKFsrLV0pP1xcLi91LFwiJDEwLlwiKS5yZXBsYWNlKC8oXFwuXFxkKz8pMCsoPz1lfCQpL3UsXCIkMVwiKS5yZXBsYWNlKC9cXC4oPz1lfCQpL3UsXCJcIil9dmFyIEV0PUNsO3ZhciBEbj1uZXcgV2Vha01hcDtmdW5jdGlvbiBYaShlKXtyZXR1cm4vXig/OlxcZCt8XFxkK1xcLlxcZCspJC91LnRlc3QoZSl9ZnVuY3Rpb24gWWkoZSx0KXtyZXR1cm4gdC5wYXJzZXI9PT1cImpzb25cInx8dC5wYXJzZXI9PT1cImpzb25jXCJ8fCF0ZShlLmtleSl8fG50KGZlKGUua2V5KSx0KS5zbGljZSgxLC0xKSE9PWUua2V5LnZhbHVlPyExOiEhKFVpKGUua2V5LnZhbHVlKSYmISh0LnBhcnNlcj09PVwiYmFiZWwtdHNcIiYmZS50eXBlPT09XCJDbGFzc1Byb3BlcnR5XCJ8fHQucGFyc2VyPT09XCJ0eXBlc2NyaXB0XCImJmUudHlwZT09PVwiUHJvcGVydHlEZWZpbml0aW9uXCIpfHxYaShlLmtleS52YWx1ZSkmJlN0cmluZyhOdW1iZXIoZS5rZXkudmFsdWUpKT09PWUua2V5LnZhbHVlJiZlLnR5cGUhPT1cIkltcG9ydEF0dHJpYnV0ZVwiJiYodC5wYXJzZXI9PT1cImJhYmVsXCJ8fHQucGFyc2VyPT09XCJhY29yblwifHx0LnBhcnNlcj09PVwiZXNwcmVlXCJ8fHQucGFyc2VyPT09XCJtZXJpeWFoXCJ8fHQucGFyc2VyPT09XCJfX2JhYmVsX2VzdHJlZVwiKSl9ZnVuY3Rpb24gQWwoZSx0KXtsZXR7a2V5OnJ9PWUubm9kZTtyZXR1cm4oci50eXBlPT09XCJJZGVudGlmaWVyXCJ8fEZlKHIpJiZYaShFdChmZShyKSkpJiZTdHJpbmcoci52YWx1ZSk9PT1FdChmZShyKSkmJiEodC5wYXJzZXI9PT1cInR5cGVzY3JpcHRcInx8dC5wYXJzZXI9PT1cImJhYmVsLXRzXCIpKSYmKHQucGFyc2VyPT09XCJqc29uXCJ8fHQucGFyc2VyPT09XCJqc29uY1wifHx0LnF1b3RlUHJvcHM9PT1cImNvbnNpc3RlbnRcIiYmRG4uZ2V0KGUucGFyZW50KSl9ZnVuY3Rpb24gRnQoZSx0LHIpe2xldHtub2RlOm59PWU7aWYobi5jb21wdXRlZClyZXR1cm5bXCJbXCIscihcImtleVwiKSxcIl1cIl07bGV0e3BhcmVudDpzfT1lLHtrZXk6dX09bjtpZih0LnF1b3RlUHJvcHM9PT1cImNvbnNpc3RlbnRcIiYmIURuLmhhcyhzKSl7bGV0IGk9ZS5zaWJsaW5ncy5zb21lKGE9PiFhLmNvbXB1dGVkJiZ0ZShhLmtleSkmJiFZaShhLHQpKTtEbi5zZXQocyxpKX1pZihBbChlLHQpKXtsZXQgaT1udChKU09OLnN0cmluZ2lmeSh1LnR5cGU9PT1cIklkZW50aWZpZXJcIj91Lm5hbWU6dS52YWx1ZS50b1N0cmluZygpKSx0KTtyZXR1cm4gZS5jYWxsKGE9PnllKGEsaSx0KSxcImtleVwiKX1yZXR1cm4gWWkobix0KSYmKHQucXVvdGVQcm9wcz09PVwiYXMtbmVlZGVkXCJ8fHQucXVvdGVQcm9wcz09PVwiY29uc2lzdGVudFwiJiYhRG4uZ2V0KHMpKT9lLmNhbGwoaT0+eWUoaSwvXlxcZC91LnRlc3QodS52YWx1ZSk/RXQodS52YWx1ZSk6dS52YWx1ZSx0KSxcImtleVwiKTpyKFwia2V5XCIpfWZ1bmN0aW9uIGZuKGUsdCxyKXtsZXR7bm9kZTpufT1lO3JldHVybiBuLnNob3J0aGFuZD9yKFwidmFsdWVcIik6aHQoZSx0LHIsRnQoZSx0LHIpLFwiOlwiLFwidmFsdWVcIil9dmFyIFRsPSh7bm9kZTplLGtleTp0LHBhcmVudDpyfSk9PnQ9PT1cInZhbHVlXCImJmUudHlwZT09PVwiRnVuY3Rpb25FeHByZXNzaW9uXCImJihyLnR5cGU9PT1cIk9iamVjdE1ldGhvZFwifHxyLnR5cGU9PT1cIkNsYXNzTWV0aG9kXCJ8fHIudHlwZT09PVwiQ2xhc3NQcml2YXRlTWV0aG9kXCJ8fHIudHlwZT09PVwiTWV0aG9kRGVmaW5pdGlvblwifHxyLnR5cGU9PT1cIlRTQWJzdHJhY3RNZXRob2REZWZpbml0aW9uXCJ8fHIudHlwZT09PVwiVFNEZWNsYXJlTWV0aG9kXCJ8fHIudHlwZT09PVwiUHJvcGVydHlcIiYma3QocikpO2Z1bmN0aW9uIEVuKGUsdCxyLG4pe2lmKFRsKGUpKXJldHVybiBGbihlLHIsdCk7bGV0e25vZGU6c309ZSx1PSExO2lmKChzLnR5cGU9PT1cIkZ1bmN0aW9uRGVjbGFyYXRpb25cInx8cy50eXBlPT09XCJGdW5jdGlvbkV4cHJlc3Npb25cIikmJihuIT1udWxsJiZuLmV4cGFuZExhc3RBcmcpKXtsZXR7cGFyZW50Onl9PWU7TCh5KSYmKHBlKHkpLmxlbmd0aD4xfHx6KHMpLmV2ZXJ5KEQ9PkQudHlwZT09PVwiSWRlbnRpZmllclwiJiYhRC50eXBlQW5ub3RhdGlvbikpJiYodT0hMCl9bGV0IGk9W0soZSkscy5hc3luYz9cImFzeW5jIFwiOlwiXCIsYGZ1bmN0aW9uJHtzLmdlbmVyYXRvcj9cIipcIjpcIlwifSBgLHMuaWQ/dChcImlkXCIpOlwiXCJdLGE9VWUoZSx0LHIsdSksbz1RdChlLHQpLHA9b3QocyxvKTtyZXR1cm4gaS5wdXNoKHR0KGUscix0KSxsKFtwP2woYSk6YSxvXSkscy5ib2R5P1wiIFwiOlwiXCIsdChcImJvZHlcIikpLHIuc2VtaSYmKHMuZGVjbGFyZXx8IXMuYm9keSkmJmkucHVzaChcIjtcIiksaX1mdW5jdGlvbiBGcihlLHQscil7bGV0e25vZGU6bn09ZSx7a2luZDpzfT1uLHU9bi52YWx1ZXx8bixpPVtdO3JldHVybiFzfHxzPT09XCJpbml0XCJ8fHM9PT1cIm1ldGhvZFwifHxzPT09XCJjb25zdHJ1Y3RvclwiP3UuYXN5bmMmJmkucHVzaChcImFzeW5jIFwiKTooTXQub2socz09PVwiZ2V0XCJ8fHM9PT1cInNldFwiKSxpLnB1c2gocyxcIiBcIikpLHUuZ2VuZXJhdG9yJiZpLnB1c2goXCIqXCIpLGkucHVzaChGdChlLHQsciksbi5vcHRpb25hbHx8bi5rZXkub3B0aW9uYWw/XCI/XCI6XCJcIixuPT09dT9GbihlLHQscik6cihcInZhbHVlXCIpKSxpfWZ1bmN0aW9uIEZuKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9VWUoZSxyLHQpLHU9UXQoZSxyKSxpPXFpKG4pLGE9b3Qobix1KSxvPVt0dChlLHQsciksbChbaT9sKHMse3Nob3VsZEJyZWFrOiEwfSk6YT9sKHMpOnMsdV0pXTtyZXR1cm4gbi5ib2R5P28ucHVzaChcIiBcIixyKFwiYm9keVwiKSk6by5wdXNoKHQuc2VtaT9cIjtcIjpcIlwiKSxvfWZ1bmN0aW9uIGRsKGUpe2xldCB0PXooZSk7cmV0dXJuIHQubGVuZ3RoPT09MSYmIWUudHlwZVBhcmFtZXRlcnMmJiFUKGUsaC5EYW5nbGluZykmJnRbMF0udHlwZT09PVwiSWRlbnRpZmllclwiJiYhdFswXS50eXBlQW5ub3RhdGlvbiYmIVQodFswXSkmJiF0WzBdLm9wdGlvbmFsJiYhZS5wcmVkaWNhdGUmJiFlLnJldHVyblR5cGV9ZnVuY3Rpb24gQ24oZSx0KXtpZih0LmFycm93UGFyZW5zPT09XCJhbHdheXNcIilyZXR1cm4hMTtpZih0LmFycm93UGFyZW5zPT09XCJhdm9pZFwiKXtsZXR7bm9kZTpyfT1lO3JldHVybiBkbChyKX1yZXR1cm4hMX1mdW5jdGlvbiBRdChlLHQpe2xldHtub2RlOnJ9PWUscz1bSChlLHQsXCJyZXR1cm5UeXBlXCIpXTtyZXR1cm4gci5wcmVkaWNhdGUmJnMucHVzaCh0KFwicHJlZGljYXRlXCIpKSxzfWZ1bmN0aW9uIEhpKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9dC5zZW1pP1wiO1wiOlwiXCIsdT1bXTtpZihuLmFyZ3VtZW50KXtsZXQgbz1yKFwiYXJndW1lbnRcIik7eGwodCxuLmFyZ3VtZW50KT9vPVtcIihcIixmKFtGLG9dKSxGLFwiKVwiXTooRGUobi5hcmd1bWVudCl8fG4uYXJndW1lbnQudHlwZT09PVwiU2VxdWVuY2VFeHByZXNzaW9uXCJ8fHQuZXhwZXJpbWVudGFsVGVybmFyaWVzJiZuLmFyZ3VtZW50LnR5cGU9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiJiYobi5hcmd1bWVudC5jb25zZXF1ZW50LnR5cGU9PT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwifHxuLmFyZ3VtZW50LmFsdGVybmF0ZS50eXBlPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cIikpJiYobz1sKFtCKFwiKFwiKSxmKFtFLG9dKSxFLEIoXCIpXCIpXSkpLHUucHVzaChcIiBcIixvKX1sZXQgaT1UKG4saC5EYW5nbGluZyksYT1zJiZpJiZUKG4saC5MYXN0fGguTGluZSk7cmV0dXJuIGEmJnUucHVzaChzKSxpJiZ1LnB1c2goXCIgXCIsSihlLHQpKSxhfHx1LnB1c2gocyksdX1mdW5jdGlvbiBWaShlLHQscil7cmV0dXJuW1wicmV0dXJuXCIsSGkoZSx0LHIpXX1mdW5jdGlvbiAkaShlLHQscil7cmV0dXJuW1widGhyb3dcIixIaShlLHQscildfWZ1bmN0aW9uIHhsKGUsdCl7aWYoTGUoZS5vcmlnaW5hbFRleHQsdCl8fFQodCxoLkxlYWRpbmcscj0+ZGUoZS5vcmlnaW5hbFRleHQscShyKSxrKHIpKSkmJiFYKHQpKXJldHVybiEwO2lmKEp0KHQpKXtsZXQgcj10LG47Zm9yKDtuPXB1KHIpOylpZihyPW4sTGUoZS5vcmlnaW5hbFRleHQscikpcmV0dXJuITB9cmV0dXJuITF9dmFyIGdzPW5ldyBXZWFrTWFwO2Z1bmN0aW9uIEtpKGUpe3JldHVybiBncy5oYXMoZSl8fGdzLnNldChlLGUudHlwZT09PVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCImJiFhZShlLHQ9PnQudHlwZT09PVwiT2JqZWN0RXhwcmVzc2lvblwiKSksZ3MuZ2V0KGUpfXZhciBRaT1lPT5lLnR5cGU9PT1cIlNlcXVlbmNlRXhwcmVzc2lvblwiO2Z1bmN0aW9uIHppKGUsdCxyLG49e30pe2xldCBzPVtdLHUsaT1bXSxhPSExLG89IW4uZXhwYW5kTGFzdEFyZyYmZS5ub2RlLmJvZHkudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIixwOyhmdW5jdGlvbiBTKCl7bGV0e25vZGU6Z309ZSxfPWhsKGUsdCxyLG4pO2lmKHMubGVuZ3RoPT09MClzLnB1c2goXyk7ZWxzZXtsZXR7bGVhZGluZzp2LHRyYWlsaW5nOmp9PWxzKGUsdCk7cy5wdXNoKFt2LF9dKSxpLnVuc2hpZnQoail9byYmKGF8fChhPWcucmV0dXJuVHlwZSYmeihnKS5sZW5ndGg+MHx8Zy50eXBlUGFyYW1ldGVyc3x8eihnKS5zb21lKHY9PnYudHlwZSE9PVwiSWRlbnRpZmllclwiKSkpLCFvfHxnLmJvZHkudHlwZSE9PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIj8odT1yKFwiYm9keVwiLG4pLHA9Zy5ib2R5KTplLmNhbGwoUyxcImJvZHlcIil9KSgpO2xldCB5PSFMZSh0Lm9yaWdpbmFsVGV4dCxwKSYmKFFpKHApfHxnbChwLHUsdCl8fCFhJiZLaShwKSksRD1lLmtleT09PVwiY2FsbGVlXCImJm10KGUucGFyZW50KSxtPVN5bWJvbChcImFycm93LWNoYWluXCIpLEM9U2woZSxuLHtzaWduYXR1cmVEb2NzOnMsc2hvdWxkQnJlYWs6YX0pLGM9ITEsQT0hMSxkPSExO3JldHVybiBvJiYoRHx8bi5hc3NpZ25tZW50TGF5b3V0KSYmKEE9ITAsZD0hVChlLm5vZGUsaC5MZWFkaW5nJmguTGluZSksYz1uLmFzc2lnbm1lbnRMYXlvdXQ9PT1cImNoYWluLXRhaWwtYXJyb3ctY2hhaW5cInx8RCYmIXkpLHU9QmwoZSx0LG4se2JvZHlEb2M6dSxib2R5Q29tbWVudHM6aSxmdW5jdGlvbkJvZHk6cCxzaG91bGRQdXRCb2R5T25TYW1lTGluZTp5fSksbChbbChBP2YoW2Q/RTpcIlwiLENdKTpDLHtzaG91bGRCcmVhazpjLGlkOm19KSxcIiA9PlwiLG8/eHQodSx7Z3JvdXBJZDptfSk6bCh1KSxvJiZEP0IoRSxcIlwiLHtncm91cElkOm19KTpcIlwiXSl9ZnVuY3Rpb24gaGwoZSx0LHIsbil7bGV0e25vZGU6c309ZSx1PVtdO2lmKHMuYXN5bmMmJnUucHVzaChcImFzeW5jIFwiKSxDbihlLHQpKXUucHVzaChyKFtcInBhcmFtc1wiLDBdKSk7ZWxzZXtsZXQgYT1uLmV4cGFuZExhc3RBcmd8fG4uZXhwYW5kRmlyc3RBcmcsbz1RdChlLHIpO2lmKGEpe2lmKHJlKG8pKXRocm93IG5ldyBEdDtvPWwoY3IobykpfXUucHVzaChsKFtVZShlLHIsdCxhLCEwKSxvXSkpfWxldCBpPUooZSx0LHtmaWx0ZXIoYSl7bGV0IG89aXQodC5vcmlnaW5hbFRleHQsayhhKSk7cmV0dXJuIG8hPT0hMSYmdC5vcmlnaW5hbFRleHQuc2xpY2UobyxvKzIpPT09XCI9PlwifX0pO3JldHVybiBpJiZ1LnB1c2goXCIgXCIsaSksdX1mdW5jdGlvbiBnbChlLHQscil7dmFyIG4scztyZXR1cm4gVShlKXx8c2UoZSl8fGUudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cInx8ZS50eXBlPT09XCJEb0V4cHJlc3Npb25cInx8ZS50eXBlPT09XCJCbG9ja1N0YXRlbWVudFwifHxYKGUpfHwoKG49dC5sYWJlbCk9PW51bGw/dm9pZCAwOm4uaHVnKSE9PSExJiYoKChzPXQubGFiZWwpPT1udWxsP3ZvaWQgMDpzLmVtYmVkKXx8X3IoZSxyLm9yaWdpbmFsVGV4dCkpfWZ1bmN0aW9uIFNsKGUsdCx7c2lnbmF0dXJlRG9jczpyLHNob3VsZEJyZWFrOm59KXtpZihyLmxlbmd0aD09PTEpcmV0dXJuIHJbMF07bGV0e3BhcmVudDpzLGtleTp1fT1lO3JldHVybiB1IT09XCJjYWxsZWVcIiYmbXQocyl8fERlKHMpP2woW3JbMF0sXCIgPT5cIixmKFt4LGIoW1wiID0+XCIseF0sci5zbGljZSgxKSldKV0se3Nob3VsZEJyZWFrOm59KTp1PT09XCJjYWxsZWVcIiYmbXQocyl8fHQuYXNzaWdubWVudExheW91dD9sKGIoW1wiID0+XCIseF0scikse3Nob3VsZEJyZWFrOm59KTpsKGYoYihbXCIgPT5cIix4XSxyKSkse3Nob3VsZEJyZWFrOm59KX1mdW5jdGlvbiBCbChlLHQscix7Ym9keURvYzpuLGJvZHlDb21tZW50czpzLGZ1bmN0aW9uQm9keTp1LHNob3VsZFB1dEJvZHlPblNhbWVMaW5lOml9KXtsZXR7bm9kZTphLHBhcmVudDpvfT1lLHA9ci5leHBhbmRMYXN0QXJnJiZvZSh0LFwiYWxsXCIpP0IoXCIsXCIpOlwiXCIseT0oci5leHBhbmRMYXN0QXJnfHxvLnR5cGU9PT1cIkpTWEV4cHJlc3Npb25Db250YWluZXJcIikmJiFUKGEpP0U6XCJcIjtyZXR1cm4gaSYmS2kodSk/W1wiIFwiLGwoW0IoXCJcIixcIihcIiksZihbRSxuXSksQihcIlwiLFwiKVwiKSxwLHldKSxzXTooUWkodSkmJihuPWwoW1wiKFwiLGYoW0Usbl0pLEUsXCIpXCJdKSksaT9bXCIgXCIsbixzXTpbZihbeCxuLHNdKSxwLHldKX12YXIgYmw9KGUsdCxyKT0+e2lmKCEoZSYmdD09bnVsbCkpe2lmKHQuZmluZExhc3QpcmV0dXJuIHQuZmluZExhc3Qocik7Zm9yKGxldCBuPXQubGVuZ3RoLTE7bj49MDtuLS0pe2xldCBzPXRbbl07aWYocihzLG4sdCkpcmV0dXJuIHN9fX0sWmk9Ymw7ZnVuY3Rpb24gQ3IoZSx0LHIsbil7bGV0e25vZGU6c309ZSx1PVtdLGk9WmkoITEsc1tuXSxhPT5hLnR5cGUhPT1cIkVtcHR5U3RhdGVtZW50XCIpO3JldHVybiBlLmVhY2goKHtub2RlOmF9KT0+e2EudHlwZSE9PVwiRW1wdHlTdGF0ZW1lbnRcIiYmKHUucHVzaChyKCkpLGEhPT1pJiYodS5wdXNoKEYpLGNlKGEsdCkmJnUucHVzaChGKSkpfSxuKSx1fWZ1bmN0aW9uIEFuKGUsdCxyKXtsZXQgbj1QbChlLHQscikse25vZGU6cyxwYXJlbnQ6dX09ZTtpZihzLnR5cGU9PT1cIlByb2dyYW1cIiYmKHU9PW51bGw/dm9pZCAwOnUudHlwZSkhPT1cIk1vZHVsZUV4cHJlc3Npb25cIilyZXR1cm4gbj9bbixGXTpcIlwiO2xldCBpPVtdO2lmKHMudHlwZT09PVwiU3RhdGljQmxvY2tcIiYmaS5wdXNoKFwic3RhdGljIFwiKSxpLnB1c2goXCJ7XCIpLG4paS5wdXNoKGYoW0Ysbl0pLEYpO2Vsc2V7bGV0IGE9ZS5ncmFuZHBhcmVudDt1LnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCJ8fHUudHlwZT09PVwiRnVuY3Rpb25FeHByZXNzaW9uXCJ8fHUudHlwZT09PVwiRnVuY3Rpb25EZWNsYXJhdGlvblwifHx1LnR5cGU9PT1cIkNvbXBvbmVudERlY2xhcmF0aW9uXCJ8fHUudHlwZT09PVwiSG9va0RlY2xhcmF0aW9uXCJ8fHUudHlwZT09PVwiT2JqZWN0TWV0aG9kXCJ8fHUudHlwZT09PVwiQ2xhc3NNZXRob2RcInx8dS50eXBlPT09XCJDbGFzc1ByaXZhdGVNZXRob2RcInx8dS50eXBlPT09XCJGb3JTdGF0ZW1lbnRcInx8dS50eXBlPT09XCJXaGlsZVN0YXRlbWVudFwifHx1LnR5cGU9PT1cIkRvV2hpbGVTdGF0ZW1lbnRcInx8dS50eXBlPT09XCJEb0V4cHJlc3Npb25cInx8dS50eXBlPT09XCJNb2R1bGVFeHByZXNzaW9uXCJ8fHUudHlwZT09PVwiQ2F0Y2hDbGF1c2VcIiYmIWEuZmluYWxpemVyfHx1LnR5cGU9PT1cIlRTTW9kdWxlRGVjbGFyYXRpb25cInx8cy50eXBlPT09XCJTdGF0aWNCbG9ja1wifHxpLnB1c2goRil9cmV0dXJuIGkucHVzaChcIn1cIiksaX1mdW5jdGlvbiBQbChlLHQscil7bGV0e25vZGU6bn09ZSxzPU8obi5kaXJlY3RpdmVzKSx1PW4uYm9keS5zb21lKG89Pm8udHlwZSE9PVwiRW1wdHlTdGF0ZW1lbnRcIiksaT1UKG4saC5EYW5nbGluZyk7aWYoIXMmJiF1JiYhaSlyZXR1cm5cIlwiO2xldCBhPVtdO3JldHVybiBzJiYoYS5wdXNoKENyKGUsdCxyLFwiZGlyZWN0aXZlc1wiKSksKHV8fGkpJiYoYS5wdXNoKEYpLGNlKE0oITEsbi5kaXJlY3RpdmVzLC0xKSx0KSYmYS5wdXNoKEYpKSksdSYmYS5wdXNoKENyKGUsdCxyLFwiYm9keVwiKSksaSYmYS5wdXNoKEooZSx0KSksYX1mdW5jdGlvbiBrbChlKXtsZXQgdD1uZXcgV2Vha01hcDtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHQuaGFzKHIpfHx0LnNldChyLFN5bWJvbChlKSksdC5nZXQocil9fXZhciBUbj1rbDtmdW5jdGlvbiBJbChlKXtzd2l0Y2goZSl7Y2FzZSBudWxsOnJldHVyblwiXCI7Y2FzZVwiUGx1c09wdGlvbmFsXCI6cmV0dXJuXCIrP1wiO2Nhc2VcIk1pbnVzT3B0aW9uYWxcIjpyZXR1cm5cIi0/XCI7Y2FzZVwiT3B0aW9uYWxcIjpyZXR1cm5cIj9cIn19ZnVuY3Rpb24gZWEoZSx0LHIpe2xldHtub2RlOm59PWU7cmV0dXJuIGwoW24udmFyaWFuY2U/cihcInZhcmlhbmNlXCIpOlwiXCIsXCJbXCIsZihbcihcImtleVRwYXJhbVwiKSxcIiBpbiBcIixyKFwic291cmNlVHlwZVwiKV0pLFwiXVwiLElsKG4ub3B0aW9uYWwpLFwiOiBcIixyKFwicHJvcFR5cGVcIildKX1mdW5jdGlvbiBTcyhlLHQpe3JldHVybiBlPT09XCIrXCJ8fGU9PT1cIi1cIj9lK3Q6dH1mdW5jdGlvbiB0YShlLHQscil7bGV0e25vZGU6bn09ZSxzPXQub2JqZWN0V3JhcD09PVwicHJlc2VydmVcIiYmZGUodC5vcmlnaW5hbFRleHQscShuKSxxKG4udHlwZVBhcmFtZXRlcikpO3JldHVybiBsKFtcIntcIixmKFt0LmJyYWNrZXRTcGFjaW5nP3g6RSxsKFtyKFwidHlwZVBhcmFtZXRlclwiKSxuLm9wdGlvbmFsP1NzKG4ub3B0aW9uYWwsXCI/XCIpOlwiXCIsbi50eXBlQW5ub3RhdGlvbj9cIjogXCI6XCJcIixyKFwidHlwZUFubm90YXRpb25cIildKSx0LnNlbWk/QihcIjtcIik6XCJcIl0pLEooZSx0KSx0LmJyYWNrZXRTcGFjaW5nP3g6RSxcIn1cIl0se3Nob3VsZEJyZWFrOnN9KX12YXIgQXI9VG4oXCJ0eXBlUGFyYW1ldGVyc1wiKTtmdW5jdGlvbiBMbChlLHQscil7bGV0e25vZGU6bn09ZTtyZXR1cm4geihuKS5sZW5ndGg9PT0xJiZuLnR5cGUuc3RhcnRzV2l0aChcIlRTXCIpJiYhbltyXVswXS5jb25zdHJhaW50JiZlLnBhcmVudC50eXBlPT09XCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiJiYhKHQuZmlsZXBhdGgmJi9cXC50cyQvdS50ZXN0KHQuZmlsZXBhdGgpKX1mdW5jdGlvbiBPdChlLHQscixuKXtsZXR7bm9kZTpzfT1lO2lmKCFzW25dKXJldHVyblwiXCI7aWYoIUFycmF5LmlzQXJyYXkoc1tuXSkpcmV0dXJuIHIobik7bGV0IHU9SXQoZS5ncmFuZHBhcmVudCksaT1lLm1hdGNoKHA9PiEocFtuXS5sZW5ndGg9PT0xJiZSZShwW25dWzBdKSksdm9pZCAwLChwLHkpPT55PT09XCJ0eXBlQW5ub3RhdGlvblwiLHA9PnAudHlwZT09PVwiSWRlbnRpZmllclwiLFRzKTtpZihzW25dLmxlbmd0aD09PTB8fCFpJiYodXx8c1tuXS5sZW5ndGg9PT0xJiYoc1tuXVswXS50eXBlPT09XCJOdWxsYWJsZVR5cGVBbm5vdGF0aW9uXCJ8fHhzKHNbbl1bMF0pKSkpcmV0dXJuW1wiPFwiLGIoXCIsIFwiLGUubWFwKHIsbikpLHdsKGUsdCksXCI+XCJdO2xldCBvPXMudHlwZT09PVwiVFNUeXBlUGFyYW1ldGVySW5zdGFudGlhdGlvblwiP1wiXCI6TGwoZSx0LG4pP1wiLFwiOm9lKHQpP0IoXCIsXCIpOlwiXCI7cmV0dXJuIGwoW1wiPFwiLGYoW0UsYihbXCIsXCIseF0sZS5tYXAocixuKSldKSxvLEUsXCI+XCJdLHtpZDpBcihzKX0pfWZ1bmN0aW9uIHdsKGUsdCl7bGV0e25vZGU6cn09ZTtpZighVChyLGguRGFuZ2xpbmcpKXJldHVyblwiXCI7bGV0IG49IVQocixoLkxpbmUpLHM9SihlLHQse2luZGVudDohbn0pO3JldHVybiBuP3M6W3MsRl19ZnVuY3Rpb24gZG4oZSx0LHIpe2xldHtub2RlOm4scGFyZW50OnN9PWUsdT1bbi5jb25zdD9cImNvbnN0IFwiOlwiXCJdLGk9bi50eXBlPT09XCJUU1R5cGVQYXJhbWV0ZXJcIj9yKFwibmFtZVwiKTpuLm5hbWU7aWYocy50eXBlPT09XCJUU01hcHBlZFR5cGVcIilyZXR1cm4gcy5yZWFkb25seSYmdS5wdXNoKFNzKHMucmVhZG9ubHksXCJyZWFkb25seVwiKSxcIiBcIiksdS5wdXNoKFwiW1wiLGkpLG4uY29uc3RyYWludCYmdS5wdXNoKFwiIGluIFwiLHIoXCJjb25zdHJhaW50XCIpKSxzLm5hbWVUeXBlJiZ1LnB1c2goXCIgYXMgXCIsZS5jYWxsUGFyZW50KCgpPT5yKFwibmFtZVR5cGVcIikpKSx1LnB1c2goXCJdXCIpLHU7aWYobi52YXJpYW5jZSYmdS5wdXNoKHIoXCJ2YXJpYW5jZVwiKSksbi5pbiYmdS5wdXNoKFwiaW4gXCIpLG4ub3V0JiZ1LnB1c2goXCJvdXQgXCIpLHUucHVzaChpKSxuLmJvdW5kJiYobi51c2VzRXh0ZW5kc0JvdW5kJiZ1LnB1c2goXCIgZXh0ZW5kcyBcIiksdS5wdXNoKEgoZSxyLFwiYm91bmRcIikpKSxuLmNvbnN0cmFpbnQpe2xldCBhPVN5bWJvbChcImNvbnN0cmFpbnRcIik7dS5wdXNoKFwiIGV4dGVuZHNcIixsKGYoeCkse2lkOmF9KSxqZSx4dChyKFwiY29uc3RyYWludFwiKSx7Z3JvdXBJZDphfSkpfXJldHVybiBuLmRlZmF1bHQmJnUucHVzaChcIiA9IFwiLHIoXCJkZWZhdWx0XCIpKSxsKHUpfXZhciByYT1SKFtcIkNsYXNzUHJvcGVydHlcIixcIlByb3BlcnR5RGVmaW5pdGlvblwiLFwiQ2xhc3NQcml2YXRlUHJvcGVydHlcIixcIkNsYXNzQWNjZXNzb3JQcm9wZXJ0eVwiLFwiQWNjZXNzb3JQcm9wZXJ0eVwiLFwiVFNBYnN0cmFjdFByb3BlcnR5RGVmaW5pdGlvblwiLFwiVFNBYnN0cmFjdEFjY2Vzc29yUHJvcGVydHlcIl0pO2Z1bmN0aW9uIHhuKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9W0soZSksVnQoZSksXCJjbGFzc1wiXSx1PVQobi5pZCxoLlRyYWlsaW5nKXx8VChuLnR5cGVQYXJhbWV0ZXJzLGguVHJhaWxpbmcpfHxUKG4uc3VwZXJDbGFzcyl8fE8obi5leHRlbmRzKXx8TyhuLm1peGlucyl8fE8obi5pbXBsZW1lbnRzKSxpPVtdLGE9W107aWYobi5pZCYmaS5wdXNoKFwiIFwiLHIoXCJpZFwiKSksaS5wdXNoKHIoXCJ0eXBlUGFyYW1ldGVyc1wiKSksbi5zdXBlckNsYXNzKXtsZXQgeT1bX2woZSx0LHIpLHIobi5zdXBlclR5cGVBcmd1bWVudHM/XCJzdXBlclR5cGVBcmd1bWVudHNcIjpcInN1cGVyVHlwZVBhcmFtZXRlcnNcIildLEQ9ZS5jYWxsKG09PltcImV4dGVuZHMgXCIseWUobSx5LHQpXSxcInN1cGVyQ2xhc3NcIik7dT9hLnB1c2goeCxsKEQpKTphLnB1c2goXCIgXCIsRCl9ZWxzZSBhLnB1c2goQnMoZSx0LHIsXCJleHRlbmRzXCIpKTthLnB1c2goQnMoZSx0LHIsXCJtaXhpbnNcIiksQnMoZSx0LHIsXCJpbXBsZW1lbnRzXCIpKTtsZXQgbztpZih1KXtsZXQgeTt1YShuKT95PVsuLi5pLGYoYSldOnk9ZihbLi4uaSxhXSksbz1uYShuKSxzLnB1c2gobCh5LHtpZDpvfSkpfWVsc2Ugcy5wdXNoKC4uLmksLi4uYSk7bGV0IHA9bi5ib2R5O3JldHVybiB1JiZPKHAuYm9keSk/cy5wdXNoKEIoRixcIiBcIix7Z3JvdXBJZDpvfSkpOnMucHVzaChcIiBcIikscy5wdXNoKHIoXCJib2R5XCIpKSxzfXZhciBuYT1UbihcImhlcml0YWdlR3JvdXBcIik7ZnVuY3Rpb24gc2EoZSl7cmV0dXJuIEIoRixcIlwiLHtncm91cElkOm5hKGUpfSl9ZnVuY3Rpb24gT2woZSl7cmV0dXJuW1wiZXh0ZW5kc1wiLFwibWl4aW5zXCIsXCJpbXBsZW1lbnRzXCJdLnJlZHVjZSgodCxyKT0+dCsoQXJyYXkuaXNBcnJheShlW3JdKT9lW3JdLmxlbmd0aDowKSxlLnN1cGVyQ2xhc3M/MTowKT4xfWZ1bmN0aW9uIHVhKGUpe3JldHVybiBlLnR5cGVQYXJhbWV0ZXJzJiYhVChlLnR5cGVQYXJhbWV0ZXJzLGguVHJhaWxpbmd8aC5MaW5lKSYmIU9sKGUpfWZ1bmN0aW9uIEJzKGUsdCxyLG4pe2xldHtub2RlOnN9PWU7aWYoIU8oc1tuXSkpcmV0dXJuXCJcIjtsZXQgdT1KKGUsdCx7bWFya2VyOm59KTtyZXR1cm5bdWEocyk/QihcIiBcIix4LHtncm91cElkOkFyKHMudHlwZVBhcmFtZXRlcnMpfSk6eCx1LHUmJkYsbixsKGYoW3gsYihbXCIsXCIseF0sZS5tYXAocixuKSldKSldfWZ1bmN0aW9uIF9sKGUsdCxyKXtsZXQgbj1yKFwic3VwZXJDbGFzc1wiKSx7cGFyZW50OnN9PWU7cmV0dXJuIHMudHlwZT09PVwiQXNzaWdubWVudEV4cHJlc3Npb25cIj9sKEIoW1wiKFwiLGYoW0Usbl0pLEUsXCIpXCJdLG4pKTpufWZ1bmN0aW9uIGhuKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9W107cmV0dXJuIE8obi5kZWNvcmF0b3JzKSYmcy5wdXNoKEZzKGUsdCxyKSkscy5wdXNoKCR0KG4pKSxuLnN0YXRpYyYmcy5wdXNoKFwic3RhdGljIFwiKSxzLnB1c2goVnQoZSkpLG4ub3ZlcnJpZGUmJnMucHVzaChcIm92ZXJyaWRlIFwiKSxzLnB1c2goRnIoZSx0LHIpKSxzfWZ1bmN0aW9uIGduKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9W10sdT10LnNlbWk/XCI7XCI6XCJcIjtPKG4uZGVjb3JhdG9ycykmJnMucHVzaChGcyhlLHQscikpLHMucHVzaChLKGUpLCR0KG4pKSxuLnN0YXRpYyYmcy5wdXNoKFwic3RhdGljIFwiKSxzLnB1c2goVnQoZSkpLG4ub3ZlcnJpZGUmJnMucHVzaChcIm92ZXJyaWRlIFwiKSxuLnJlYWRvbmx5JiZzLnB1c2goXCJyZWFkb25seSBcIiksbi52YXJpYW5jZSYmcy5wdXNoKHIoXCJ2YXJpYW5jZVwiKSksKG4udHlwZT09PVwiQ2xhc3NBY2Nlc3NvclByb3BlcnR5XCJ8fG4udHlwZT09PVwiQWNjZXNzb3JQcm9wZXJ0eVwifHxuLnR5cGU9PT1cIlRTQWJzdHJhY3RBY2Nlc3NvclByb3BlcnR5XCIpJiZzLnB1c2goXCJhY2Nlc3NvciBcIikscy5wdXNoKEZ0KGUsdCxyKSwkKGUpLG1uKGUpLEgoZSxyKSk7bGV0IGk9bi50eXBlPT09XCJUU0Fic3RyYWN0UHJvcGVydHlEZWZpbml0aW9uXCJ8fG4udHlwZT09PVwiVFNBYnN0cmFjdEFjY2Vzc29yUHJvcGVydHlcIjtyZXR1cm5baHQoZSx0LHIscyxcIiA9XCIsaT92b2lkIDA6XCJ2YWx1ZVwiKSx1XX1mdW5jdGlvbiBpYShlLHQscil7bGV0e25vZGU6bn09ZSxzPVtdO3JldHVybiBlLmVhY2goKHtub2RlOnUsbmV4dDppLGlzTGFzdDphfSk9PntzLnB1c2gocigpKSwhdC5zZW1pJiZyYSh1KSYmdmwodSxpKSYmcy5wdXNoKFwiO1wiKSxhfHwocy5wdXNoKEYpLGNlKHUsdCkmJnMucHVzaChGKSl9LFwiYm9keVwiKSxUKG4saC5EYW5nbGluZykmJnMucHVzaChKKGUsdCkpLFtcIntcIixzLmxlbmd0aD4wP1tmKFtGLHNdKSxGXTpcIlwiLFwifVwiXX1mdW5jdGlvbiB2bChlLHQpe3ZhciBzO2xldHt0eXBlOnIsbmFtZTpufT1lLmtleTtpZighZS5jb21wdXRlZCYmcj09PVwiSWRlbnRpZmllclwiJiYobj09PVwic3RhdGljXCJ8fG49PT1cImdldFwifHxuPT09XCJzZXRcIikmJiFlLnZhbHVlJiYhZS50eXBlQW5ub3RhdGlvbilyZXR1cm4hMDtpZighdHx8dC5zdGF0aWN8fHQuYWNjZXNzaWJpbGl0eXx8dC5yZWFkb25seSlyZXR1cm4hMTtpZighdC5jb21wdXRlZCl7bGV0IHU9KHM9dC5rZXkpPT1udWxsP3ZvaWQgMDpzLm5hbWU7aWYodT09PVwiaW5cInx8dT09PVwiaW5zdGFuY2VvZlwiKXJldHVybiEwfWlmKHJhKHQpJiZ0LnZhcmlhbmNlJiYhdC5zdGF0aWMmJiF0LmRlY2xhcmUpcmV0dXJuITA7c3dpdGNoKHQudHlwZSl7Y2FzZVwiQ2xhc3NQcm9wZXJ0eVwiOmNhc2VcIlByb3BlcnR5RGVmaW5pdGlvblwiOmNhc2VcIlRTQWJzdHJhY3RQcm9wZXJ0eURlZmluaXRpb25cIjpyZXR1cm4gdC5jb21wdXRlZDtjYXNlXCJNZXRob2REZWZpbml0aW9uXCI6Y2FzZVwiVFNBYnN0cmFjdE1ldGhvZERlZmluaXRpb25cIjpjYXNlXCJDbGFzc01ldGhvZFwiOmNhc2VcIkNsYXNzUHJpdmF0ZU1ldGhvZFwiOntpZigodC52YWx1ZT90LnZhbHVlLmFzeW5jOnQuYXN5bmMpfHx0LmtpbmQ9PT1cImdldFwifHx0LmtpbmQ9PT1cInNldFwiKXJldHVybiExO2xldCBpPXQudmFsdWU/dC52YWx1ZS5nZW5lcmF0b3I6dC5nZW5lcmF0b3I7cmV0dXJuISEodC5jb21wdXRlZHx8aSl9Y2FzZVwiVFNJbmRleFNpZ25hdHVyZVwiOnJldHVybiEwfXJldHVybiExfXZhciBqbD1SKFtcIlRTQXNFeHByZXNzaW9uXCIsXCJUU1R5cGVBc3NlcnRpb25cIixcIlRTTm9uTnVsbEV4cHJlc3Npb25cIixcIlRTSW5zdGFudGlhdGlvbkV4cHJlc3Npb25cIixcIlRTU2F0aXNmaWVzRXhwcmVzc2lvblwiXSk7ZnVuY3Rpb24gYnMoZSl7cmV0dXJuIGpsKGUpP2JzKGUuZXhwcmVzc2lvbik6ZX12YXIgYWE9UihbXCJGdW5jdGlvbkV4cHJlc3Npb25cIixcIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCJdKTtmdW5jdGlvbiBvYShlKXtyZXR1cm4gZS50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCJ8fGUudHlwZT09PVwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCJ8fGUudHlwZT09PVwiSWRlbnRpZmllclwiJiZlLm5hbWUhPT1cInVuZGVmaW5lZFwifWZ1bmN0aW9uIHBhKGUsdCl7aWYodC5zZW1pfHxQcyhlLHQpfHxrcyhlLHQpKXJldHVybiExO2xldHtub2RlOnIsa2V5Om4scGFyZW50OnN9PWU7cmV0dXJuISEoci50eXBlPT09XCJFeHByZXNzaW9uU3RhdGVtZW50XCImJihuPT09XCJib2R5XCImJihzLnR5cGU9PT1cIlByb2dyYW1cInx8cy50eXBlPT09XCJCbG9ja1N0YXRlbWVudFwifHxzLnR5cGU9PT1cIlN0YXRpY0Jsb2NrXCJ8fHMudHlwZT09PVwiVFNNb2R1bGVCbG9ja1wiKXx8bj09PVwiY29uc2VxdWVudFwiJiZzLnR5cGU9PT1cIlN3aXRjaENhc2VcIikmJmUuY2FsbCgoKT0+Y2EoZSx0KSxcImV4cHJlc3Npb25cIikpfWZ1bmN0aW9uIGNhKGUsdCl7bGV0e25vZGU6cn09ZTtzd2l0Y2goci50eXBlKXtjYXNlXCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiOmNhc2VcIlR5cGVDYXN0RXhwcmVzc2lvblwiOmNhc2VcIkFycmF5RXhwcmVzc2lvblwiOmNhc2VcIkFycmF5UGF0dGVyblwiOmNhc2VcIlRlbXBsYXRlTGl0ZXJhbFwiOmNhc2VcIlRlbXBsYXRlRWxlbWVudFwiOmNhc2VcIlJlZ0V4cExpdGVyYWxcIjpyZXR1cm4hMDtjYXNlXCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvblwiOmlmKCFDbihlLHQpKXJldHVybiEwO2JyZWFrO2Nhc2VcIlVuYXJ5RXhwcmVzc2lvblwiOntsZXR7cHJlZml4Om4sb3BlcmF0b3I6c309cjtpZihuJiYocz09PVwiK1wifHxzPT09XCItXCIpKXJldHVybiEwO2JyZWFrfWNhc2VcIkJpbmRFeHByZXNzaW9uXCI6aWYoIXIub2JqZWN0KXJldHVybiEwO2JyZWFrO2Nhc2VcIkxpdGVyYWxcIjppZihyLnJlZ2V4KXJldHVybiEwO2JyZWFrO2RlZmF1bHQ6aWYoWChyKSlyZXR1cm4hMH1yZXR1cm4ga2UoZSx0KT8hMDpKdChyKT9lLmNhbGwoKCk9PmNhKGUsdCksLi4uTHIocikpOiExfWZ1bmN0aW9uIFBzKHtub2RlOmUscGFyZW50OnR9LHIpe3JldHVybihyLnBhcmVudFBhcnNlcj09PVwibWFya2Rvd25cInx8ci5wYXJlbnRQYXJzZXI9PT1cIm1keFwiKSYmZS50eXBlPT09XCJFeHByZXNzaW9uU3RhdGVtZW50XCImJlgoZS5leHByZXNzaW9uKSYmdC50eXBlPT09XCJQcm9ncmFtXCImJnQuYm9keS5sZW5ndGg9PT0xfWZ1bmN0aW9uIGtzKHtub2RlOmUscGFyZW50OnR9LHIpe3JldHVybihyLnBhcnNlcj09PVwiX192dWVfZXZlbnRfYmluZGluZ1wifHxyLnBhcnNlcj09PVwiX192dWVfdHNfZXZlbnRfYmluZGluZ1wiKSYmZS50eXBlPT09XCJFeHByZXNzaW9uU3RhdGVtZW50XCImJnQudHlwZT09PVwiUHJvZ3JhbVwiJiZ0LmJvZHkubGVuZ3RoPT09MX1mdW5jdGlvbiBsYShlLHQscil7bGV0IG49W3IoXCJleHByZXNzaW9uXCIpXTtpZihrcyhlLHQpKXtsZXQgcz1icyhlLm5vZGUuZXhwcmVzc2lvbik7KGFhKHMpfHxvYShzKSkmJm4ucHVzaChcIjtcIil9ZWxzZSBQcyhlLHQpfHx0LnNlbWkmJm4ucHVzaChcIjtcIik7cmV0dXJuIG59ZnVuY3Rpb24gbWEoZSx0LHIpe2lmKHQuX19pc1Z1ZUJpbmRpbmdzfHx0Ll9faXNWdWVGb3JCaW5kaW5nTGVmdCl7bGV0IG49ZS5tYXAocixcInByb2dyYW1cIixcImJvZHlcIiwwLFwicGFyYW1zXCIpO2lmKG4ubGVuZ3RoPT09MSlyZXR1cm4gblswXTtsZXQgcz1iKFtcIixcIix4XSxuKTtyZXR1cm4gdC5fX2lzVnVlRm9yQmluZGluZ0xlZnQ/W1wiKFwiLGYoW0UsbChzKV0pLEUsXCIpXCJdOnN9aWYodC5fX2lzRW1iZWRkZWRUeXBlc2NyaXB0R2VuZXJpY1BhcmFtZXRlcnMpe2xldCBuPWUubWFwKHIsXCJwcm9ncmFtXCIsXCJib2R5XCIsMCxcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbXNcIik7cmV0dXJuIGIoW1wiLFwiLHhdLG4pfX1mdW5jdGlvbiBmYShlLHQpe2xldHtub2RlOnJ9PWU7c3dpdGNoKHIudHlwZSl7Y2FzZVwiUmVnRXhwTGl0ZXJhbFwiOnJldHVybiB5YShyKTtjYXNlXCJCaWdJbnRMaXRlcmFsXCI6cmV0dXJuIFNuKHIuZXh0cmEucmF3KTtjYXNlXCJOdW1lcmljTGl0ZXJhbFwiOnJldHVybiBFdChyLmV4dHJhLnJhdyk7Y2FzZVwiU3RyaW5nTGl0ZXJhbFwiOnJldHVybiB2ZShudChyLmV4dHJhLnJhdyx0KSk7Y2FzZVwiTnVsbExpdGVyYWxcIjpyZXR1cm5cIm51bGxcIjtjYXNlXCJCb29sZWFuTGl0ZXJhbFwiOnJldHVybiBTdHJpbmcoci52YWx1ZSk7Y2FzZVwiRGlyZWN0aXZlTGl0ZXJhbFwiOnJldHVybiBEYShyLmV4dHJhLnJhdyx0KTtjYXNlXCJMaXRlcmFsXCI6e2lmKHIucmVnZXgpcmV0dXJuIHlhKHIucmVnZXgpO2lmKHIuYmlnaW50KXJldHVybiBTbihyLnJhdyk7bGV0e3ZhbHVlOm59PXI7cmV0dXJuIHR5cGVvZiBuPT1cIm51bWJlclwiP0V0KHIucmF3KTp0eXBlb2Ygbj09XCJzdHJpbmdcIj9NbChlKT9EYShyLnJhdyx0KTp2ZShudChyLnJhdyx0KSk6U3RyaW5nKG4pfX19ZnVuY3Rpb24gTWwoZSl7aWYoZS5rZXkhPT1cImV4cHJlc3Npb25cIilyZXR1cm47bGV0e3BhcmVudDp0fT1lO3JldHVybiB0LnR5cGU9PT1cIkV4cHJlc3Npb25TdGF0ZW1lbnRcIiYmdC5kaXJlY3RpdmV9ZnVuY3Rpb24gU24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKX1mdW5jdGlvbiB5YSh7cGF0dGVybjplLGZsYWdzOnR9KXtyZXR1cm4gdD1bLi4udF0uc29ydCgpLmpvaW4oXCJcIiksYC8ke2V9LyR7dH1gfWZ1bmN0aW9uIERhKGUsdCl7bGV0IHI9ZS5zbGljZSgxLC0xKTtpZihyLmluY2x1ZGVzKCdcIicpfHxyLmluY2x1ZGVzKFwiJ1wiKSlyZXR1cm4gZTtsZXQgbj10LnNpbmdsZVF1b3RlP1wiJ1wiOidcIic7cmV0dXJuIG4rcitufWZ1bmN0aW9uIFJsKGUsdCxyKXtsZXQgbj1lLm9yaWdpbmFsVGV4dC5zbGljZSh0LHIpO2ZvcihsZXQgcyBvZiBlW1N5bWJvbC5mb3IoXCJjb21tZW50c1wiKV0pe2xldCB1PXEocyk7aWYodT5yKWJyZWFrO2xldCBpPWsocyk7aWYoaTx0KWNvbnRpbnVlO2xldCBhPWktdTtuPW4uc2xpY2UoMCx1LXQpK1wiIFwiLnJlcGVhdChhKStuLnNsaWNlKGktdCl9cmV0dXJuIG59dmFyIElzPVJsO2Z1bmN0aW9uIEVhKGUsdCxyKXtsZXR7bm9kZTpufT1lO3JldHVybltcImltcG9ydFwiLG4ucGhhc2U/YCAke24ucGhhc2V9YDpcIlwiLHdzKG4pLEFhKGUsdCxyKSxDYShlLHQsciksZGEoZSx0LHIpLHQuc2VtaT9cIjtcIjpcIlwiXX12YXIgRmE9ZT0+ZS50eXBlPT09XCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb25cInx8ZS50eXBlPT09XCJEZWNsYXJlRXhwb3J0RGVjbGFyYXRpb25cIiYmZS5kZWZhdWx0O2Z1bmN0aW9uIEJuKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9W1NpKGUsdCxyKSxLKGUpLFwiZXhwb3J0XCIsRmEobik/XCIgZGVmYXVsdFwiOlwiXCJdLHtkZWNsYXJhdGlvbjp1LGV4cG9ydGVkOml9PW47cmV0dXJuIFQobixoLkRhbmdsaW5nKSYmKHMucHVzaChcIiBcIixKKGUsdCkpLHZyKG4pJiZzLnB1c2goRikpLHU/cy5wdXNoKFwiIFwiLHIoXCJkZWNsYXJhdGlvblwiKSk6KHMucHVzaChXbChuKSksbi50eXBlPT09XCJFeHBvcnRBbGxEZWNsYXJhdGlvblwifHxuLnR5cGU9PT1cIkRlY2xhcmVFeHBvcnRBbGxEZWNsYXJhdGlvblwiPyhzLnB1c2goXCIgKlwiKSxpJiZzLnB1c2goXCIgYXMgXCIscihcImV4cG9ydGVkXCIpKSk6cy5wdXNoKEFhKGUsdCxyKSkscy5wdXNoKENhKGUsdCxyKSxkYShlLHQscikpKSxzLnB1c2gocWwobix0KSksc312YXIgSmw9UihbXCJDbGFzc0RlY2xhcmF0aW9uXCIsXCJDb21wb25lbnREZWNsYXJhdGlvblwiLFwiRnVuY3Rpb25EZWNsYXJhdGlvblwiLFwiVFNJbnRlcmZhY2VEZWNsYXJhdGlvblwiLFwiRGVjbGFyZUNsYXNzXCIsXCJEZWNsYXJlQ29tcG9uZW50XCIsXCJEZWNsYXJlRnVuY3Rpb25cIixcIkRlY2xhcmVIb29rXCIsXCJIb29rRGVjbGFyYXRpb25cIixcIlRTRGVjbGFyZUZ1bmN0aW9uXCIsXCJFbnVtRGVjbGFyYXRpb25cIl0pO2Z1bmN0aW9uIHFsKGUsdCl7cmV0dXJuIHQuc2VtaSYmKCFlLmRlY2xhcmF0aW9ufHxGYShlKSYmIUpsKGUuZGVjbGFyYXRpb24pKT9cIjtcIjpcIlwifWZ1bmN0aW9uIExzKGUsdD0hMCl7cmV0dXJuIGUmJmUhPT1cInZhbHVlXCI/YCR7dD9cIiBcIjpcIlwifSR7ZX0ke3Q/XCJcIjpcIiBcIn1gOlwiXCJ9ZnVuY3Rpb24gd3MoZSx0KXtyZXR1cm4gTHMoZS5pbXBvcnRLaW5kLHQpfWZ1bmN0aW9uIFdsKGUpe3JldHVybiBMcyhlLmV4cG9ydEtpbmQpfWZ1bmN0aW9uIENhKGUsdCxyKXtsZXR7bm9kZTpufT1lO2lmKCFuLnNvdXJjZSlyZXR1cm5cIlwiO2xldCBzPVtdO3JldHVybiBUYShuLHQpJiZzLnB1c2goXCIgZnJvbVwiKSxzLnB1c2goXCIgXCIscihcInNvdXJjZVwiKSksc31mdW5jdGlvbiBBYShlLHQscil7bGV0e25vZGU6bn09ZTtpZighVGEobix0KSlyZXR1cm5cIlwiO2xldCBzPVtcIiBcIl07aWYoTyhuLnNwZWNpZmllcnMpKXtsZXQgdT1bXSxpPVtdO2UuZWFjaCgoKT0+e2xldCBhPWUubm9kZS50eXBlO2lmKGE9PT1cIkV4cG9ydE5hbWVzcGFjZVNwZWNpZmllclwifHxhPT09XCJFeHBvcnREZWZhdWx0U3BlY2lmaWVyXCJ8fGE9PT1cIkltcG9ydE5hbWVzcGFjZVNwZWNpZmllclwifHxhPT09XCJJbXBvcnREZWZhdWx0U3BlY2lmaWVyXCIpdS5wdXNoKHIoKSk7ZWxzZSBpZihhPT09XCJFeHBvcnRTcGVjaWZpZXJcInx8YT09PVwiSW1wb3J0U3BlY2lmaWVyXCIpaS5wdXNoKHIoKSk7ZWxzZSB0aHJvdyBuZXcgTmUobixcInNwZWNpZmllclwiKX0sXCJzcGVjaWZpZXJzXCIpLHMucHVzaChiKFwiLCBcIix1KSksaS5sZW5ndGg+MCYmKHUubGVuZ3RoPjAmJnMucHVzaChcIiwgXCIpLGkubGVuZ3RoPjF8fHUubGVuZ3RoPjB8fG4uc3BlY2lmaWVycy5zb21lKG89PlQobykpP3MucHVzaChsKFtcIntcIixmKFt0LmJyYWNrZXRTcGFjaW5nP3g6RSxiKFtcIixcIix4XSxpKV0pLEIob2UodCk/XCIsXCI6XCJcIiksdC5icmFja2V0U3BhY2luZz94OkUsXCJ9XCJdKSk6cy5wdXNoKFtcIntcIix0LmJyYWNrZXRTcGFjaW5nP1wiIFwiOlwiXCIsLi4uaSx0LmJyYWNrZXRTcGFjaW5nP1wiIFwiOlwiXCIsXCJ9XCJdKSl9ZWxzZSBzLnB1c2goXCJ7fVwiKTtyZXR1cm4gc31mdW5jdGlvbiBUYShlLHQpe3JldHVybiBlLnR5cGUhPT1cIkltcG9ydERlY2xhcmF0aW9uXCJ8fE8oZS5zcGVjaWZpZXJzKXx8ZS5pbXBvcnRLaW5kPT09XCJ0eXBlXCI/ITA6SXModCxxKGUpLHEoZS5zb3VyY2UpKS50cmltRW5kKCkuZW5kc1dpdGgoXCJmcm9tXCIpfWZ1bmN0aW9uIE5sKGUsdCl7dmFyIG4scztpZigobj1lLmV4dHJhKSE9bnVsbCYmbi5kZXByZWNhdGVkQXNzZXJ0U3ludGF4KXJldHVyblwiYXNzZXJ0XCI7bGV0IHI9SXModCxrKGUuc291cmNlKSwocz1lLmF0dHJpYnV0ZXMpIT1udWxsJiZzWzBdP3EoZS5hdHRyaWJ1dGVzWzBdKTprKGUpKS50cmltU3RhcnQoKTtyZXR1cm4gci5zdGFydHNXaXRoKFwiYXNzZXJ0XCIpP1wiYXNzZXJ0XCI6ci5zdGFydHNXaXRoKFwid2l0aFwiKXx8TyhlLmF0dHJpYnV0ZXMpP1wid2l0aFwiOnZvaWQgMH1mdW5jdGlvbiBkYShlLHQscil7bGV0e25vZGU6bn09ZTtpZighbi5zb3VyY2UpcmV0dXJuXCJcIjtsZXQgcz1ObChuLHQpO2lmKCFzKXJldHVyblwiXCI7bGV0IHU9W2AgJHtzfSB7YF07cmV0dXJuIE8obi5hdHRyaWJ1dGVzKSYmKHQuYnJhY2tldFNwYWNpbmcmJnUucHVzaChcIiBcIiksdS5wdXNoKGIoXCIsIFwiLGUubWFwKHIsXCJhdHRyaWJ1dGVzXCIpKSksdC5icmFja2V0U3BhY2luZyYmdS5wdXNoKFwiIFwiKSksdS5wdXNoKFwifVwiKSx1fWZ1bmN0aW9uIHhhKGUsdCxyKXtsZXR7bm9kZTpufT1lLHt0eXBlOnN9PW4sdT1zLnN0YXJ0c1dpdGgoXCJJbXBvcnRcIiksaT11P1wiaW1wb3J0ZWRcIjpcImxvY2FsXCIsYT11P1wibG9jYWxcIjpcImV4cG9ydGVkXCIsbz1uW2ldLHA9blthXSx5PVwiXCIsRD1cIlwiO3JldHVybiBzPT09XCJFeHBvcnROYW1lc3BhY2VTcGVjaWZpZXJcInx8cz09PVwiSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyXCI/eT1cIipcIjpvJiYoeT1yKGkpKSxwJiYhR2wobikmJihEPXIoYSkpLFtMcyhzPT09XCJJbXBvcnRTcGVjaWZpZXJcIj9uLmltcG9ydEtpbmQ6bi5leHBvcnRLaW5kLCExKSx5LHkmJkQ/XCIgYXMgXCI6XCJcIixEXX1mdW5jdGlvbiBHbChlKXtpZihlLnR5cGUhPT1cIkltcG9ydFNwZWNpZmllclwiJiZlLnR5cGUhPT1cIkV4cG9ydFNwZWNpZmllclwiKXJldHVybiExO2xldHtsb2NhbDp0LFtlLnR5cGU9PT1cIkltcG9ydFNwZWNpZmllclwiP1wiaW1wb3J0ZWRcIjpcImV4cG9ydGVkXCJdOnJ9PWU7aWYodC50eXBlIT09ci50eXBlfHwhc3UodCxyKSlyZXR1cm4hMTtpZih0ZSh0KSlyZXR1cm4gdC52YWx1ZT09PXIudmFsdWUmJmZlKHQpPT09ZmUocik7c3dpdGNoKHQudHlwZSl7Y2FzZVwiSWRlbnRpZmllclwiOnJldHVybiB0Lm5hbWU9PT1yLm5hbWU7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gZ3QoZSx0LHIpe3ZhciBqO2xldCBuPXQuc2VtaT9cIjtcIjpcIlwiLHtub2RlOnN9PWUsdT1zLnR5cGU9PT1cIk9iamVjdFR5cGVBbm5vdGF0aW9uXCIsaT1zLnR5cGU9PT1cIlRTRW51bURlY2xhcmF0aW9uXCJ8fHMudHlwZT09PVwiRW51bUJvb2xlYW5Cb2R5XCJ8fHMudHlwZT09PVwiRW51bU51bWJlckJvZHlcInx8cy50eXBlPT09XCJFbnVtQmlnSW50Qm9keVwifHxzLnR5cGU9PT1cIkVudW1TdHJpbmdCb2R5XCJ8fHMudHlwZT09PVwiRW51bVN5bWJvbEJvZHlcIixhPVtzLnR5cGU9PT1cIlRTVHlwZUxpdGVyYWxcInx8aT9cIm1lbWJlcnNcIjpzLnR5cGU9PT1cIlRTSW50ZXJmYWNlQm9keVwiP1wiYm9keVwiOlwicHJvcGVydGllc1wiXTt1JiZhLnB1c2goXCJpbmRleGVyc1wiLFwiY2FsbFByb3BlcnRpZXNcIixcImludGVybmFsU2xvdHNcIik7bGV0IG89YS5mbGF0TWFwKEk9PmUubWFwKCh7bm9kZTpHfSk9Pih7bm9kZTpHLHByaW50ZWQ6cigpLGxvYzpxKEcpfSksSSkpO2EubGVuZ3RoPjEmJm8uc29ydCgoSSxHKT0+SS5sb2MtRy5sb2MpO2xldHtwYXJlbnQ6cCxrZXk6eX09ZSxEPXUmJnk9PT1cImJvZHlcIiYmKHAudHlwZT09PVwiSW50ZXJmYWNlRGVjbGFyYXRpb25cInx8cC50eXBlPT09XCJEZWNsYXJlSW50ZXJmYWNlXCJ8fHAudHlwZT09PVwiRGVjbGFyZUNsYXNzXCIpLG09cy50eXBlPT09XCJUU0ludGVyZmFjZUJvZHlcInx8aXx8RHx8cy50eXBlPT09XCJPYmplY3RQYXR0ZXJuXCImJnAudHlwZSE9PVwiRnVuY3Rpb25EZWNsYXJhdGlvblwiJiZwLnR5cGUhPT1cIkZ1bmN0aW9uRXhwcmVzc2lvblwiJiZwLnR5cGUhPT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCImJnAudHlwZSE9PVwiT2JqZWN0TWV0aG9kXCImJnAudHlwZSE9PVwiQ2xhc3NNZXRob2RcIiYmcC50eXBlIT09XCJDbGFzc1ByaXZhdGVNZXRob2RcIiYmcC50eXBlIT09XCJBc3NpZ25tZW50UGF0dGVyblwiJiZwLnR5cGUhPT1cIkNhdGNoQ2xhdXNlXCImJnMucHJvcGVydGllcy5zb21lKEk9PkkudmFsdWUmJihJLnZhbHVlLnR5cGU9PT1cIk9iamVjdFBhdHRlcm5cInx8SS52YWx1ZS50eXBlPT09XCJBcnJheVBhdHRlcm5cIikpfHxzLnR5cGUhPT1cIk9iamVjdFBhdHRlcm5cIiYmdC5vYmplY3RXcmFwPT09XCJwcmVzZXJ2ZVwiJiZvLmxlbmd0aD4wJiZkZSh0Lm9yaWdpbmFsVGV4dCxxKHMpLG9bMF0ubG9jKSxDPUQ/XCI7XCI6cy50eXBlPT09XCJUU0ludGVyZmFjZUJvZHlcInx8cy50eXBlPT09XCJUU1R5cGVMaXRlcmFsXCI/QihuLFwiO1wiKTpcIixcIixjPXMudHlwZT09PVwiUmVjb3JkRXhwcmVzc2lvblwiP1wiI3tcIjpzLmV4YWN0P1wie3xcIjpcIntcIixBPXMuZXhhY3Q/XCJ8fVwiOlwifVwiLGQ9W10sUz1vLm1hcChJPT57bGV0IEc9Wy4uLmQsbChJLnByaW50ZWQpXTtyZXR1cm4gZD1bQyx4XSwoSS5ub2RlLnR5cGU9PT1cIlRTUHJvcGVydHlTaWduYXR1cmVcInx8SS5ub2RlLnR5cGU9PT1cIlRTTWV0aG9kU2lnbmF0dXJlXCJ8fEkubm9kZS50eXBlPT09XCJUU0NvbnN0cnVjdFNpZ25hdHVyZURlY2xhcmF0aW9uXCJ8fEkubm9kZS50eXBlPT09XCJUU0NhbGxTaWduYXR1cmVEZWNsYXJhdGlvblwiKSYmVChJLm5vZGUsaC5QcmV0dGllcklnbm9yZSkmJmQuc2hpZnQoKSxjZShJLm5vZGUsdCkmJmQucHVzaChGKSxHfSk7aWYocy5pbmV4YWN0fHxzLmhhc1Vua25vd25NZW1iZXJzKXtsZXQgSTtpZihUKHMsaC5EYW5nbGluZykpe2xldCBHPVQocyxoLkxpbmUpO0k9W0ooZSx0KSxHfHxaKHQub3JpZ2luYWxUZXh0LGsoTSghMSxsdChzKSwtMSkpKT9GOngsXCIuLi5cIl19ZWxzZSBJPVtcIi4uLlwiXTtTLnB1c2goWy4uLmQsLi4uSV0pfWxldCBnPShqPU0oITEsbywtMSkpPT1udWxsP3ZvaWQgMDpqLm5vZGUsXz0hKHMuaW5leGFjdHx8cy5oYXNVbmtub3duTWVtYmVyc3x8ZyYmKGcudHlwZT09PVwiUmVzdEVsZW1lbnRcInx8KGcudHlwZT09PVwiVFNQcm9wZXJ0eVNpZ25hdHVyZVwifHxnLnR5cGU9PT1cIlRTQ2FsbFNpZ25hdHVyZURlY2xhcmF0aW9uXCJ8fGcudHlwZT09PVwiVFNNZXRob2RTaWduYXR1cmVcInx8Zy50eXBlPT09XCJUU0NvbnN0cnVjdFNpZ25hdHVyZURlY2xhcmF0aW9uXCIpJiZUKGcsaC5QcmV0dGllcklnbm9yZSkpKSx2O2lmKFMubGVuZ3RoPT09MCl7aWYoIVQocyxoLkRhbmdsaW5nKSlyZXR1cm5bYyxBLEgoZSxyKV07dj1sKFtjLEooZSx0LHtpbmRlbnQ6ITB9KSxFLEEsJChlKSxIKGUscildKX1lbHNlIHY9W0QmJk8ocy5wcm9wZXJ0aWVzKT9zYShwKTpcIlwiLGMsZihbdC5icmFja2V0U3BhY2luZz94OkUsLi4uU10pLEIoXyYmKEMhPT1cIixcInx8b2UodCkpP0M6XCJcIiksdC5icmFja2V0U3BhY2luZz94OkUsQSwkKGUpLEgoZSxyKV07cmV0dXJuIGUubWF0Y2goST0+SS50eXBlPT09XCJPYmplY3RQYXR0ZXJuXCImJiFPKEkuZGVjb3JhdG9ycyksT3MpfHxSZShzKSYmKGUubWF0Y2godm9pZCAwLChJLEcpPT5HPT09XCJ0eXBlQW5ub3RhdGlvblwiLChJLEcpPT5HPT09XCJ0eXBlQW5ub3RhdGlvblwiLE9zKXx8ZS5tYXRjaCh2b2lkIDAsKEksRyk9PkkudHlwZT09PVwiRnVuY3Rpb25UeXBlUGFyYW1cIiYmRz09PVwidHlwZUFubm90YXRpb25cIixPcykpfHwhbSYmZS5tYXRjaChJPT5JLnR5cGU9PT1cIk9iamVjdFBhdHRlcm5cIixJPT5JLnR5cGU9PT1cIkFzc2lnbm1lbnRFeHByZXNzaW9uXCJ8fEkudHlwZT09PVwiVmFyaWFibGVEZWNsYXJhdG9yXCIpP3Y6bCh2LHtzaG91bGRCcmVhazptfSl9ZnVuY3Rpb24gT3MoZSx0KXtyZXR1cm4odD09PVwicGFyYW1zXCJ8fHQ9PT1cInBhcmFtZXRlcnNcInx8dD09PVwidGhpc1wifHx0PT09XCJyZXN0XCIpJiZkcyhlKX1mdW5jdGlvbiBVbChlKXtsZXQgdD1bZV07Zm9yKGxldCByPTA7cjx0Lmxlbmd0aDtyKyspe2xldCBuPXRbcl07Zm9yKGxldCBzIG9mW1widGVzdFwiLFwiY29uc2VxdWVudFwiLFwiYWx0ZXJuYXRlXCJdKXtsZXQgdT1uW3NdO2lmKFgodSkpcmV0dXJuITA7dS50eXBlPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cIiYmdC5wdXNoKHUpfX1yZXR1cm4hMX1mdW5jdGlvbiBZbChlLHQscil7bGV0e25vZGU6bn09ZSxzPW4udHlwZT09PVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIsdT1zP1wiYWx0ZXJuYXRlXCI6XCJmYWxzZVR5cGVcIix7cGFyZW50Oml9PWUsYT1zP3IoXCJ0ZXN0XCIpOltyKFwiY2hlY2tUeXBlXCIpLFwiIFwiLFwiZXh0ZW5kc1wiLFwiIFwiLHIoXCJleHRlbmRzVHlwZVwiKV07cmV0dXJuIGkudHlwZT09PW4udHlwZSYmaVt1XT09PW4/QmUoMixhKTphfXZhciBYbD1uZXcgTWFwKFtbXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiLFwicmlnaHRcIl0sW1wiVmFyaWFibGVEZWNsYXJhdG9yXCIsXCJpbml0XCJdLFtcIlJldHVyblN0YXRlbWVudFwiLFwiYXJndW1lbnRcIl0sW1wiVGhyb3dTdGF0ZW1lbnRcIixcImFyZ3VtZW50XCJdLFtcIlVuYXJ5RXhwcmVzc2lvblwiLFwiYXJndW1lbnRcIl0sW1wiWWllbGRFeHByZXNzaW9uXCIsXCJhcmd1bWVudFwiXSxbXCJBd2FpdEV4cHJlc3Npb25cIixcImFyZ3VtZW50XCJdXSk7ZnVuY3Rpb24gSGwoZSl7bGV0e25vZGU6dH09ZTtpZih0LnR5cGUhPT1cIkNvbmRpdGlvbmFsRXhwcmVzc2lvblwiKXJldHVybiExO2xldCByLG49dDtmb3IobGV0IHM9MDshcjtzKyspe2xldCB1PWUuZ2V0UGFyZW50Tm9kZShzKTtpZih1LnR5cGU9PT1cIkNoYWluRXhwcmVzc2lvblwiJiZ1LmV4cHJlc3Npb249PT1ufHxMKHUpJiZ1LmNhbGxlZT09PW58fFcodSkmJnUub2JqZWN0PT09bnx8dS50eXBlPT09XCJUU05vbk51bGxFeHByZXNzaW9uXCImJnUuZXhwcmVzc2lvbj09PW4pe249dTtjb250aW51ZX11LnR5cGU9PT1cIk5ld0V4cHJlc3Npb25cIiYmdS5jYWxsZWU9PT1ufHxBZSh1KSYmdS5leHByZXNzaW9uPT09bj8ocj1lLmdldFBhcmVudE5vZGUocysxKSxuPXUpOnI9dX1yZXR1cm4gbj09PXQ/ITE6cltYbC5nZXQoci50eXBlKV09PT1ufWZ1bmN0aW9uIGhhKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9bi50eXBlPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cIix1PXM/XCJjb25zZXF1ZW50XCI6XCJ0cnVlVHlwZVwiLGk9cz9cImFsdGVybmF0ZVwiOlwiZmFsc2VUeXBlXCIsYT1zP1tcInRlc3RcIl06W1wiY2hlY2tUeXBlXCIsXCJleHRlbmRzVHlwZVwiXSxvPW5bdV0scD1uW2ldLHk9W10sRD0hMSx7cGFyZW50Om19PWUsQz1tLnR5cGU9PT1uLnR5cGUmJmEuc29tZShOPT5tW05dPT09biksYz1tLnR5cGU9PT1uLnR5cGUmJiFDLEEsZCxTPTA7ZG8gZD1BfHxuLEE9ZS5nZXRQYXJlbnROb2RlKFMpLFMrKzt3aGlsZShBJiZBLnR5cGU9PT1uLnR5cGUmJmEuZXZlcnkoTj0+QVtOXSE9PWQpKTtsZXQgZz1BfHxtLF89ZDtpZihzJiYoWChuW2FbMF1dKXx8WChvKXx8WChwKXx8VWwoXykpKXtEPSEwLGM9ITA7bGV0IE49UT0+W0IoXCIoXCIpLGYoW0UsUV0pLEUsQihcIilcIildLHVlPVE9PlEudHlwZT09PVwiTnVsbExpdGVyYWxcInx8US50eXBlPT09XCJMaXRlcmFsXCImJlEudmFsdWU9PT1udWxsfHxRLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmUS5uYW1lPT09XCJ1bmRlZmluZWRcIjt5LnB1c2goXCIgPyBcIix1ZShvKT9yKHUpOk4ocih1KSksXCIgOiBcIixwLnR5cGU9PT1uLnR5cGV8fHVlKHApP3IoaSk6TihyKGkpKSl9ZWxzZXtsZXQgTj1RPT50LnVzZVRhYnM/ZihyKFEpKTpCZSgyLHIoUSkpLHVlPVt4LFwiPyBcIixvLnR5cGU9PT1uLnR5cGU/QihcIlwiLFwiKFwiKTpcIlwiLE4odSksby50eXBlPT09bi50eXBlP0IoXCJcIixcIilcIik6XCJcIix4LFwiOiBcIixOKGkpXTt5LnB1c2gobS50eXBlIT09bi50eXBlfHxtW2ldPT09bnx8Qz91ZTp0LnVzZVRhYnM/SnIoZih1ZSkpOkJlKE1hdGgubWF4KDAsdC50YWJXaWR0aC0yKSx1ZSkpfWxldCB2PVt1LGksLi4uYV0uc29tZShOPT5UKG5bTl0sdWU9PmVlKHVlKSYmZGUodC5vcmlnaW5hbFRleHQscSh1ZSksayh1ZSkpKSksaj1OPT5tPT09Zz9sKE4se3Nob3VsZEJyZWFrOnZ9KTp2P1tOLEVlXTpOLEk9IUQmJihXKG0pfHxtLnR5cGU9PT1cIk5HUGlwZUV4cHJlc3Npb25cIiYmbS5sZWZ0PT09bikmJiFtLmNvbXB1dGVkLEc9SGwoZSksUD1qKFtZbChlLHQsciksYz95OmYoeSkscyYmSSYmIUc/RTpcIlwiXSk7cmV0dXJuIEN8fEc/bChbZihbRSxQXSksRV0pOlB9ZnVuY3Rpb24gVmwoZSx0KXtyZXR1cm4oVyh0KXx8dC50eXBlPT09XCJOR1BpcGVFeHByZXNzaW9uXCImJnQubGVmdD09PWUpJiYhdC5jb21wdXRlZH1mdW5jdGlvbiAkbChlLHQscixuKXtyZXR1cm5bLi4uZS5tYXAodT0+bHQodSkpLGx0KHQpLGx0KHIpXS5mbGF0KCkuc29tZSh1PT5lZSh1KSYmZGUobi5vcmlnaW5hbFRleHQscSh1KSxrKHUpKSl9dmFyIEtsPW5ldyBNYXAoW1tcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIsXCJyaWdodFwiXSxbXCJWYXJpYWJsZURlY2xhcmF0b3JcIixcImluaXRcIl0sW1wiUmV0dXJuU3RhdGVtZW50XCIsXCJhcmd1bWVudFwiXSxbXCJUaHJvd1N0YXRlbWVudFwiLFwiYXJndW1lbnRcIl0sW1wiVW5hcnlFeHByZXNzaW9uXCIsXCJhcmd1bWVudFwiXSxbXCJZaWVsZEV4cHJlc3Npb25cIixcImFyZ3VtZW50XCJdLFtcIkF3YWl0RXhwcmVzc2lvblwiLFwiYXJndW1lbnRcIl1dKTtmdW5jdGlvbiBRbChlKXtsZXR7bm9kZTp0fT1lO2lmKHQudHlwZSE9PVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIpcmV0dXJuITE7bGV0IHIsbj10O2ZvcihsZXQgcz0wOyFyO3MrKyl7bGV0IHU9ZS5nZXRQYXJlbnROb2RlKHMpO2lmKHUudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCImJnUuZXhwcmVzc2lvbj09PW58fEwodSkmJnUuY2FsbGVlPT09bnx8Vyh1KSYmdS5vYmplY3Q9PT1ufHx1LnR5cGU9PT1cIlRTTm9uTnVsbEV4cHJlc3Npb25cIiYmdS5leHByZXNzaW9uPT09bil7bj11O2NvbnRpbnVlfXUudHlwZT09PVwiTmV3RXhwcmVzc2lvblwiJiZ1LmNhbGxlZT09PW58fEFlKHUpJiZ1LmV4cHJlc3Npb249PT1uPyhyPWUuZ2V0UGFyZW50Tm9kZShzKzEpLG49dSk6cj11fXJldHVybiBuPT09dD8hMTpyW0tsLmdldChyLnR5cGUpXT09PW59dmFyIF9zPWU9PltCKFwiKFwiKSxmKFtFLGVdKSxFLEIoXCIpXCIpXTtmdW5jdGlvbiB6dChlLHQscixuKXtpZighdC5leHBlcmltZW50YWxUZXJuYXJpZXMpcmV0dXJuIGhhKGUsdCxyKTtsZXR7bm9kZTpzfT1lLHU9cy50eXBlPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cIixpPUplKHMpLGE9dT9cImNvbnNlcXVlbnRcIjpcInRydWVUeXBlXCIsbz11P1wiYWx0ZXJuYXRlXCI6XCJmYWxzZVR5cGVcIixwPXU/W1widGVzdFwiXTpbXCJjaGVja1R5cGVcIixcImV4dGVuZHNUeXBlXCJdLHk9c1thXSxEPXNbb10sbT1wLm1hcChZZT0+c1tZZV0pLHtwYXJlbnQ6Q309ZSxjPUMudHlwZT09PXMudHlwZSxBPWMmJnAuc29tZShZZT0+Q1tZZV09PT1zKSxkPWMmJkNbb109PT1zLFM9eS50eXBlPT09cy50eXBlLGc9RC50eXBlPT09cy50eXBlLF89Z3x8ZCx2PXQudGFiV2lkdGg+Mnx8dC51c2VUYWJzLGosSSxHPTA7ZG8gST1qfHxzLGo9ZS5nZXRQYXJlbnROb2RlKEcpLEcrKzt3aGlsZShqJiZqLnR5cGU9PT1zLnR5cGUmJnAuZXZlcnkoWWU9PmpbWWVdIT09SSkpO2xldCBQPWp8fEMsTj1uJiZuLmFzc2lnbm1lbnRMYXlvdXQmJm4uYXNzaWdubWVudExheW91dCE9PVwiYnJlYWstYWZ0ZXItb3BlcmF0b3JcIiYmKEMudHlwZT09PVwiQXNzaWdubWVudEV4cHJlc3Npb25cInx8Qy50eXBlPT09XCJWYXJpYWJsZURlY2xhcmF0b3JcInx8Qy50eXBlPT09XCJDbGFzc1Byb3BlcnR5XCJ8fEMudHlwZT09PVwiUHJvcGVydHlEZWZpbml0aW9uXCJ8fEMudHlwZT09PVwiQ2xhc3NQcml2YXRlUHJvcGVydHlcInx8Qy50eXBlPT09XCJPYmplY3RQcm9wZXJ0eVwifHxDLnR5cGU9PT1cIlByb3BlcnR5XCIpLHVlPShDLnR5cGU9PT1cIlJldHVyblN0YXRlbWVudFwifHxDLnR5cGU9PT1cIlRocm93U3RhdGVtZW50XCIpJiYhKFN8fGcpLFE9dSYmUC50eXBlPT09XCJKU1hFeHByZXNzaW9uQ29udGFpbmVyXCImJmUuZ3JhbmRwYXJlbnQudHlwZSE9PVwiSlNYQXR0cmlidXRlXCIsQnQ9UWwoZSksQ3Q9VmwocyxDKSx3PWkmJmtlKGUsdCksbmU9dj90LnVzZVRhYnM/XCJcdFwiOlwiIFwiLnJlcGVhdCh0LnRhYldpZHRoLTEpOlwiXCIseGU9JGwobSx5LEQsdCl8fFN8fGcscHQ9IV8mJiFjJiYhaSYmKFE/eS50eXBlPT09XCJOdWxsTGl0ZXJhbFwifHx5LnR5cGU9PT1cIkxpdGVyYWxcIiYmeS52YWx1ZT09PW51bGw6aXIoeSx0KSYmSm4ocy50ZXN0LDMpKSxidD1ffHxkfHxpJiYhY3x8YyYmdSYmSm4ocy50ZXN0LDEpfHxwdCxScz1bXTshUyYmVCh5LGguRGFuZ2xpbmcpJiZlLmNhbGwoWWU9PntScy5wdXNoKEooWWUsdCksRil9LFwiY29uc2VxdWVudFwiKTtsZXQgZXI9W107VChzLnRlc3QsaC5EYW5nbGluZykmJmUuY2FsbChZZT0+e2VyLnB1c2goSihZZSx0KSl9LFwidGVzdFwiKSwhZyYmVChELGguRGFuZ2xpbmcpJiZlLmNhbGwoWWU9Pntlci5wdXNoKEooWWUsdCkpfSxcImFsdGVybmF0ZVwiKSxUKHMsaC5EYW5nbGluZykmJmVyLnB1c2goSihlLHQpKTtsZXQgSnM9U3ltYm9sKFwidGVzdFwiKSxHYT1TeW1ib2woXCJjb25zZXF1ZW50XCIpLFRyPVN5bWJvbChcInRlc3QtYW5kLWNvbnNlcXVlbnRcIiksVWE9dT9bX3MocihcInRlc3RcIikpLHMudGVzdC50eXBlPT09XCJDb25kaXRpb25hbEV4cHJlc3Npb25cIj9FZTpcIlwiXTpbcihcImNoZWNrVHlwZVwiKSxcIiBcIixcImV4dGVuZHNcIixcIiBcIixKZShzLmV4dGVuZHNUeXBlKXx8cy5leHRlbmRzVHlwZS50eXBlPT09XCJUU01hcHBlZFR5cGVcIj9yKFwiZXh0ZW5kc1R5cGVcIik6bChfcyhyKFwiZXh0ZW5kc1R5cGVcIikpKV0scXM9bChbVWEsXCIgP1wiXSx7aWQ6SnN9KSxZYT1yKGEpLGRyPWYoW1N8fFEmJihYKHkpfHxjfHxfKT9GOngsUnMsWWFdKSxYYT1idD9sKFtxcyxfP2RyOkIoZHIsbChkcix7aWQ6R2F9KSx7Z3JvdXBJZDpKc30pXSx7aWQ6VHJ9KTpbcXMsZHJdLExuPXIobyksV3M9cHQ/QihMbixKcihfcyhMbikpLHtncm91cElkOlRyfSk6TG4sdHI9W1hhLGVyLmxlbmd0aD4wP1tmKFtGLGVyXSksRl06Zz9GOnB0P0IoeCxcIiBcIix7Z3JvdXBJZDpUcn0pOngsXCI6XCIsZz9cIiBcIjp2P2J0P0IobmUsQihffHxwdD9cIiBcIjpuZSxcIiBcIikse2dyb3VwSWQ6VHJ9KTpCKG5lLFwiIFwiKTpcIiBcIixnP1dzOmwoW2YoV3MpLFEmJiFwdD9FOlwiXCJdKSxDdCYmIUJ0P0U6XCJcIix4ZT9FZTpcIlwiXTtyZXR1cm4gTiYmIXhlP2woZihbRSxsKHRyKV0pKTpOfHx1ZT9sKGYodHIpKTpCdHx8aSYmQT9sKFtmKFtFLHRyXSksdz9FOlwiXCJdKTpDPT09UD9sKHRyKTp0cn1mdW5jdGlvbiBnYShlLHQscixuKXtsZXR7bm9kZTpzfT1lO2lmKHdyKHMpKXJldHVybiBmYShlLHQpO2xldCB1PXQuc2VtaT9cIjtcIjpcIlwiLGk9W107c3dpdGNoKHMudHlwZSl7Y2FzZVwiSnNFeHByZXNzaW9uUm9vdFwiOnJldHVybiByKFwibm9kZVwiKTtjYXNlXCJKc29uUm9vdFwiOnJldHVybltyKFwibm9kZVwiKSxGXTtjYXNlXCJGaWxlXCI6cmV0dXJuIG1hKGUsdCxyKT8/cihcInByb2dyYW1cIik7Y2FzZVwiRW1wdHlTdGF0ZW1lbnRcIjpyZXR1cm5cIlwiO2Nhc2VcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIjpyZXR1cm4gbGEoZSx0LHIpO2Nhc2VcIkNoYWluRXhwcmVzc2lvblwiOnJldHVybiByKFwiZXhwcmVzc2lvblwiKTtjYXNlXCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiOnJldHVybiFUKHMuZXhwcmVzc2lvbikmJihzZShzLmV4cHJlc3Npb24pfHxVKHMuZXhwcmVzc2lvbikpP1tcIihcIixyKFwiZXhwcmVzc2lvblwiKSxcIilcIl06bChbXCIoXCIsZihbRSxyKFwiZXhwcmVzc2lvblwiKV0pLEUsXCIpXCJdKTtjYXNlXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiOnJldHVybiBqaShlLHQscik7Y2FzZVwiVmFyaWFibGVEZWNsYXJhdG9yXCI6cmV0dXJuIE1pKGUsdCxyKTtjYXNlXCJCaW5hcnlFeHByZXNzaW9uXCI6Y2FzZVwiTG9naWNhbEV4cHJlc3Npb25cIjpyZXR1cm4gJHIoZSx0LHIpO2Nhc2VcIkFzc2lnbm1lbnRQYXR0ZXJuXCI6cmV0dXJuW3IoXCJsZWZ0XCIpLFwiID0gXCIscihcInJpZ2h0XCIpXTtjYXNlXCJPcHRpb25hbE1lbWJlckV4cHJlc3Npb25cIjpjYXNlXCJNZW1iZXJFeHByZXNzaW9uXCI6cmV0dXJuIExpKGUsdCxyKTtjYXNlXCJNZXRhUHJvcGVydHlcIjpyZXR1cm5bcihcIm1ldGFcIiksXCIuXCIscihcInByb3BlcnR5XCIpXTtjYXNlXCJCaW5kRXhwcmVzc2lvblwiOnJldHVybiBzLm9iamVjdCYmaS5wdXNoKHIoXCJvYmplY3RcIikpLGkucHVzaChsKGYoW0UsS3IoZSx0LHIpXSkpKSxpO2Nhc2VcIklkZW50aWZpZXJcIjpyZXR1cm5bcy5uYW1lLCQoZSksbW4oZSksSChlLHIpXTtjYXNlXCJWOEludHJpbnNpY0lkZW50aWZpZXJcIjpyZXR1cm5bXCIlXCIscy5uYW1lXTtjYXNlXCJTcHJlYWRFbGVtZW50XCI6Y2FzZVwiU3ByZWFkRWxlbWVudFBhdHRlcm5cIjpjYXNlXCJTcHJlYWRQcm9wZXJ0eVBhdHRlcm5cIjpjYXNlXCJSZXN0RWxlbWVudFwiOnJldHVybiB5bihlLHIpO2Nhc2VcIkZ1bmN0aW9uRGVjbGFyYXRpb25cIjpjYXNlXCJGdW5jdGlvbkV4cHJlc3Npb25cIjpyZXR1cm4gRW4oZSxyLHQsbik7Y2FzZVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIjpyZXR1cm4gemkoZSx0LHIsbik7Y2FzZVwiWWllbGRFeHByZXNzaW9uXCI6cmV0dXJuIGkucHVzaChcInlpZWxkXCIpLHMuZGVsZWdhdGUmJmkucHVzaChcIipcIikscy5hcmd1bWVudCYmaS5wdXNoKFwiIFwiLHIoXCJhcmd1bWVudFwiKSksaTtjYXNlXCJBd2FpdEV4cHJlc3Npb25cIjppZihpLnB1c2goXCJhd2FpdFwiKSxzLmFyZ3VtZW50KXtpLnB1c2goXCIgXCIscihcImFyZ3VtZW50XCIpKTtsZXR7cGFyZW50OmF9PWU7aWYoTChhKSYmYS5jYWxsZWU9PT1zfHxXKGEpJiZhLm9iamVjdD09PXMpe2k9W2YoW0UsLi4uaV0pLEVdO2xldCBvPWUuZmluZEFuY2VzdG9yKHA9PnAudHlwZT09PVwiQXdhaXRFeHByZXNzaW9uXCJ8fHAudHlwZT09PVwiQmxvY2tTdGF0ZW1lbnRcIik7aWYoKG89PW51bGw/dm9pZCAwOm8udHlwZSkhPT1cIkF3YWl0RXhwcmVzc2lvblwifHwhYWUoby5hcmd1bWVudCxwPT5wPT09cykpcmV0dXJuIGwoaSl9fXJldHVybiBpO2Nhc2VcIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvblwiOmNhc2VcIkV4cG9ydE5hbWVkRGVjbGFyYXRpb25cIjpjYXNlXCJFeHBvcnRBbGxEZWNsYXJhdGlvblwiOnJldHVybiBCbihlLHQscik7Y2FzZVwiSW1wb3J0RGVjbGFyYXRpb25cIjpyZXR1cm4gRWEoZSx0LHIpO2Nhc2VcIkltcG9ydFNwZWNpZmllclwiOmNhc2VcIkV4cG9ydFNwZWNpZmllclwiOmNhc2VcIkltcG9ydE5hbWVzcGFjZVNwZWNpZmllclwiOmNhc2VcIkV4cG9ydE5hbWVzcGFjZVNwZWNpZmllclwiOmNhc2VcIkltcG9ydERlZmF1bHRTcGVjaWZpZXJcIjpjYXNlXCJFeHBvcnREZWZhdWx0U3BlY2lmaWVyXCI6cmV0dXJuIHhhKGUsdCxyKTtjYXNlXCJJbXBvcnRBdHRyaWJ1dGVcIjpyZXR1cm4gZm4oZSx0LHIpO2Nhc2VcIlByb2dyYW1cIjpjYXNlXCJCbG9ja1N0YXRlbWVudFwiOmNhc2VcIlN0YXRpY0Jsb2NrXCI6cmV0dXJuIEFuKGUsdCxyKTtjYXNlXCJDbGFzc0JvZHlcIjpyZXR1cm4gaWEoZSx0LHIpO2Nhc2VcIlRocm93U3RhdGVtZW50XCI6cmV0dXJuICRpKGUsdCxyKTtjYXNlXCJSZXR1cm5TdGF0ZW1lbnRcIjpyZXR1cm4gVmkoZSx0LHIpO2Nhc2VcIk5ld0V4cHJlc3Npb25cIjpjYXNlXCJJbXBvcnRFeHByZXNzaW9uXCI6Y2FzZVwiT3B0aW9uYWxDYWxsRXhwcmVzc2lvblwiOmNhc2VcIkNhbGxFeHByZXNzaW9uXCI6cmV0dXJuIFFyKGUsdCxyKTtjYXNlXCJPYmplY3RFeHByZXNzaW9uXCI6Y2FzZVwiT2JqZWN0UGF0dGVyblwiOmNhc2VcIlJlY29yZEV4cHJlc3Npb25cIjpyZXR1cm4gZ3QoZSx0LHIpO2Nhc2VcIlByb3BlcnR5XCI6cmV0dXJuIGt0KHMpP0ZyKGUsdCxyKTpmbihlLHQscik7Y2FzZVwiT2JqZWN0UHJvcGVydHlcIjpyZXR1cm4gZm4oZSx0LHIpO2Nhc2VcIk9iamVjdE1ldGhvZFwiOnJldHVybiBGcihlLHQscik7Y2FzZVwiRGVjb3JhdG9yXCI6cmV0dXJuW1wiQFwiLHIoXCJleHByZXNzaW9uXCIpXTtjYXNlXCJBcnJheUV4cHJlc3Npb25cIjpjYXNlXCJBcnJheVBhdHRlcm5cIjpjYXNlXCJUdXBsZUV4cHJlc3Npb25cIjpyZXR1cm4gS3QoZSx0LHIpO2Nhc2VcIlNlcXVlbmNlRXhwcmVzc2lvblwiOntsZXR7cGFyZW50OmF9PWU7aWYoYS50eXBlPT09XCJFeHByZXNzaW9uU3RhdGVtZW50XCJ8fGEudHlwZT09PVwiRm9yU3RhdGVtZW50XCIpe2xldCBvPVtdO3JldHVybiBlLmVhY2goKHtpc0ZpcnN0OnB9KT0+e3A/by5wdXNoKHIoKSk6by5wdXNoKFwiLFwiLGYoW3gscigpXSkpfSxcImV4cHJlc3Npb25zXCIpLGwobyl9cmV0dXJuIGwoYihbXCIsXCIseF0sZS5tYXAocixcImV4cHJlc3Npb25zXCIpKSl9Y2FzZVwiVGhpc0V4cHJlc3Npb25cIjpyZXR1cm5cInRoaXNcIjtjYXNlXCJTdXBlclwiOnJldHVyblwic3VwZXJcIjtjYXNlXCJEaXJlY3RpdmVcIjpyZXR1cm5bcihcInZhbHVlXCIpLHVdO2Nhc2VcIlVuYXJ5RXhwcmVzc2lvblwiOnJldHVybiBpLnB1c2gocy5vcGVyYXRvciksL1thLXpdJC91LnRlc3Qocy5vcGVyYXRvcikmJmkucHVzaChcIiBcIiksVChzLmFyZ3VtZW50KT9pLnB1c2gobChbXCIoXCIsZihbRSxyKFwiYXJndW1lbnRcIildKSxFLFwiKVwiXSkpOmkucHVzaChyKFwiYXJndW1lbnRcIikpLGk7Y2FzZVwiVXBkYXRlRXhwcmVzc2lvblwiOnJldHVybltzLnByZWZpeD9zLm9wZXJhdG9yOlwiXCIscihcImFyZ3VtZW50XCIpLHMucHJlZml4P1wiXCI6cy5vcGVyYXRvcl07Y2FzZVwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCI6cmV0dXJuIHp0KGUsdCxyLG4pO2Nhc2VcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjp7bGV0IGE9ZS5tYXAocixcImRlY2xhcmF0aW9uc1wiKSxvPWUucGFyZW50LHA9by50eXBlPT09XCJGb3JTdGF0ZW1lbnRcInx8by50eXBlPT09XCJGb3JJblN0YXRlbWVudFwifHxvLnR5cGU9PT1cIkZvck9mU3RhdGVtZW50XCIseT1zLmRlY2xhcmF0aW9ucy5zb21lKG09Pm0uaW5pdCksRDtyZXR1cm4gYS5sZW5ndGg9PT0xJiYhVChzLmRlY2xhcmF0aW9uc1swXSk/RD1hWzBdOmEubGVuZ3RoPjAmJihEPWYoYVswXSkpLGk9W0soZSkscy5raW5kLEQ/W1wiIFwiLERdOlwiXCIsZihhLnNsaWNlKDEpLm1hcChtPT5bXCIsXCIseSYmIXA/Rjp4LG1dKSldLHAmJm8uYm9keSE9PXN8fGkucHVzaCh1KSxsKGkpfWNhc2VcIldpdGhTdGF0ZW1lbnRcIjpyZXR1cm4gbChbXCJ3aXRoIChcIixyKFwib2JqZWN0XCIpLFwiKVwiLGZ0KHMuYm9keSxyKFwiYm9keVwiKSldKTtjYXNlXCJJZlN0YXRlbWVudFwiOntsZXQgYT1mdChzLmNvbnNlcXVlbnQscihcImNvbnNlcXVlbnRcIikpLG89bChbXCJpZiAoXCIsbChbZihbRSxyKFwidGVzdFwiKV0pLEVdKSxcIilcIixhXSk7aWYoaS5wdXNoKG8pLHMuYWx0ZXJuYXRlKXtsZXQgcD1UKHMuY29uc2VxdWVudCxoLlRyYWlsaW5nfGguTGluZSl8fHZyKHMpLHk9cy5jb25zZXF1ZW50LnR5cGU9PT1cIkJsb2NrU3RhdGVtZW50XCImJiFwO2kucHVzaCh5P1wiIFwiOkYpLFQocyxoLkRhbmdsaW5nKSYmaS5wdXNoKEooZSx0KSxwP0Y6XCIgXCIpLGkucHVzaChcImVsc2VcIixsKGZ0KHMuYWx0ZXJuYXRlLHIoXCJhbHRlcm5hdGVcIikscy5hbHRlcm5hdGUudHlwZT09PVwiSWZTdGF0ZW1lbnRcIikpKX1yZXR1cm4gaX1jYXNlXCJGb3JTdGF0ZW1lbnRcIjp7bGV0IGE9ZnQocy5ib2R5LHIoXCJib2R5XCIpKSxvPUooZSx0KSxwPW8/W28sRV06XCJcIjtyZXR1cm4hcy5pbml0JiYhcy50ZXN0JiYhcy51cGRhdGU/W3AsbChbXCJmb3IgKDs7KVwiLGFdKV06W3AsbChbXCJmb3IgKFwiLGwoW2YoW0UscihcImluaXRcIiksXCI7XCIseCxyKFwidGVzdFwiKSxcIjtcIix4LHIoXCJ1cGRhdGVcIildKSxFXSksXCIpXCIsYV0pXX1jYXNlXCJXaGlsZVN0YXRlbWVudFwiOnJldHVybiBsKFtcIndoaWxlIChcIixsKFtmKFtFLHIoXCJ0ZXN0XCIpXSksRV0pLFwiKVwiLGZ0KHMuYm9keSxyKFwiYm9keVwiKSldKTtjYXNlXCJGb3JJblN0YXRlbWVudFwiOnJldHVybiBsKFtcImZvciAoXCIscihcImxlZnRcIiksXCIgaW4gXCIscihcInJpZ2h0XCIpLFwiKVwiLGZ0KHMuYm9keSxyKFwiYm9keVwiKSldKTtjYXNlXCJGb3JPZlN0YXRlbWVudFwiOnJldHVybiBsKFtcImZvclwiLHMuYXdhaXQ/XCIgYXdhaXRcIjpcIlwiLFwiIChcIixyKFwibGVmdFwiKSxcIiBvZiBcIixyKFwicmlnaHRcIiksXCIpXCIsZnQocy5ib2R5LHIoXCJib2R5XCIpKV0pO2Nhc2VcIkRvV2hpbGVTdGF0ZW1lbnRcIjp7bGV0IGE9ZnQocy5ib2R5LHIoXCJib2R5XCIpKTtyZXR1cm4gaT1bbChbXCJkb1wiLGFdKV0scy5ib2R5LnR5cGU9PT1cIkJsb2NrU3RhdGVtZW50XCI/aS5wdXNoKFwiIFwiKTppLnB1c2goRiksaS5wdXNoKFwid2hpbGUgKFwiLGwoW2YoW0UscihcInRlc3RcIildKSxFXSksXCIpXCIsdSksaX1jYXNlXCJEb0V4cHJlc3Npb25cIjpyZXR1cm5bcy5hc3luYz9cImFzeW5jIFwiOlwiXCIsXCJkbyBcIixyKFwiYm9keVwiKV07Y2FzZVwiQnJlYWtTdGF0ZW1lbnRcIjpjYXNlXCJDb250aW51ZVN0YXRlbWVudFwiOnJldHVybiBpLnB1c2gocy50eXBlPT09XCJCcmVha1N0YXRlbWVudFwiP1wiYnJlYWtcIjpcImNvbnRpbnVlXCIpLHMubGFiZWwmJmkucHVzaChcIiBcIixyKFwibGFiZWxcIikpLGkucHVzaCh1KSxpO2Nhc2VcIkxhYmVsZWRTdGF0ZW1lbnRcIjpyZXR1cm4gcy5ib2R5LnR5cGU9PT1cIkVtcHR5U3RhdGVtZW50XCI/W3IoXCJsYWJlbFwiKSxcIjo7XCJdOltyKFwibGFiZWxcIiksXCI6IFwiLHIoXCJib2R5XCIpXTtjYXNlXCJUcnlTdGF0ZW1lbnRcIjpyZXR1cm5bXCJ0cnkgXCIscihcImJsb2NrXCIpLHMuaGFuZGxlcj9bXCIgXCIscihcImhhbmRsZXJcIildOlwiXCIscy5maW5hbGl6ZXI/W1wiIGZpbmFsbHkgXCIscihcImZpbmFsaXplclwiKV06XCJcIl07Y2FzZVwiQ2F0Y2hDbGF1c2VcIjppZihzLnBhcmFtKXtsZXQgYT1UKHMucGFyYW0scD0+IWVlKHApfHxwLmxlYWRpbmcmJloodC5vcmlnaW5hbFRleHQsayhwKSl8fHAudHJhaWxpbmcmJloodC5vcmlnaW5hbFRleHQscShwKSx7YmFja3dhcmRzOiEwfSkpLG89cihcInBhcmFtXCIpO3JldHVybltcImNhdGNoIFwiLGE/W1wiKFwiLGYoW0Usb10pLEUsXCIpIFwiXTpbXCIoXCIsbyxcIikgXCJdLHIoXCJib2R5XCIpXX1yZXR1cm5bXCJjYXRjaCBcIixyKFwiYm9keVwiKV07Y2FzZVwiU3dpdGNoU3RhdGVtZW50XCI6cmV0dXJuW2woW1wic3dpdGNoIChcIixmKFtFLHIoXCJkaXNjcmltaW5hbnRcIildKSxFLFwiKVwiXSksXCIge1wiLHMuY2FzZXMubGVuZ3RoPjA/ZihbRixiKEYsZS5tYXAoKHtub2RlOmEsaXNMYXN0Om99KT0+W3IoKSwhbyYmY2UoYSx0KT9GOlwiXCJdLFwiY2FzZXNcIikpXSk6XCJcIixGLFwifVwiXTtjYXNlXCJTd2l0Y2hDYXNlXCI6e3MudGVzdD9pLnB1c2goXCJjYXNlIFwiLHIoXCJ0ZXN0XCIpLFwiOlwiKTppLnB1c2goXCJkZWZhdWx0OlwiKSxUKHMsaC5EYW5nbGluZykmJmkucHVzaChcIiBcIixKKGUsdCkpO2xldCBhPXMuY29uc2VxdWVudC5maWx0ZXIobz0+by50eXBlIT09XCJFbXB0eVN0YXRlbWVudFwiKTtpZihhLmxlbmd0aD4wKXtsZXQgbz1DcihlLHQscixcImNvbnNlcXVlbnRcIik7aS5wdXNoKGEubGVuZ3RoPT09MSYmYVswXS50eXBlPT09XCJCbG9ja1N0YXRlbWVudFwiP1tcIiBcIixvXTpmKFtGLG9dKSl9cmV0dXJuIGl9Y2FzZVwiRGVidWdnZXJTdGF0ZW1lbnRcIjpyZXR1cm5bXCJkZWJ1Z2dlclwiLHVdO2Nhc2VcIkNsYXNzRGVjbGFyYXRpb25cIjpjYXNlXCJDbGFzc0V4cHJlc3Npb25cIjpyZXR1cm4geG4oZSx0LHIpO2Nhc2VcIkNsYXNzTWV0aG9kXCI6Y2FzZVwiQ2xhc3NQcml2YXRlTWV0aG9kXCI6Y2FzZVwiTWV0aG9kRGVmaW5pdGlvblwiOnJldHVybiBobihlLHQscik7Y2FzZVwiQ2xhc3NQcm9wZXJ0eVwiOmNhc2VcIlByb3BlcnR5RGVmaW5pdGlvblwiOmNhc2VcIkNsYXNzUHJpdmF0ZVByb3BlcnR5XCI6Y2FzZVwiQ2xhc3NBY2Nlc3NvclByb3BlcnR5XCI6Y2FzZVwiQWNjZXNzb3JQcm9wZXJ0eVwiOnJldHVybiBnbihlLHQscik7Y2FzZVwiVGVtcGxhdGVFbGVtZW50XCI6cmV0dXJuIHZlKHMudmFsdWUucmF3KTtjYXNlXCJUZW1wbGF0ZUxpdGVyYWxcIjpyZXR1cm4gR3IoZSxyLHQpO2Nhc2VcIlRhZ2dlZFRlbXBsYXRlRXhwcmVzc2lvblwiOnJldHVybiBIdShlLHIpO2Nhc2VcIlByaXZhdGVJZGVudGlmaWVyXCI6cmV0dXJuW1wiI1wiLHMubmFtZV07Y2FzZVwiUHJpdmF0ZU5hbWVcIjpyZXR1cm5bXCIjXCIscihcImlkXCIpXTtjYXNlXCJUb3BpY1JlZmVyZW5jZVwiOnJldHVyblwiJVwiO2Nhc2VcIkFyZ3VtZW50UGxhY2Vob2xkZXJcIjpyZXR1cm5cIj9cIjtjYXNlXCJNb2R1bGVFeHByZXNzaW9uXCI6cmV0dXJuW1wibW9kdWxlIFwiLHIoXCJib2R5XCIpXTtjYXNlXCJJbnRlcnByZXRlckRpcmVjdGl2ZVwiOmRlZmF1bHQ6dGhyb3cgbmV3IE5lKHMsXCJFU1RyZWVcIil9fWZ1bmN0aW9uIGJuKGUsdCxyKXtsZXR7cGFyZW50Om4sbm9kZTpzLGtleTp1fT1lLGk9W3IoXCJleHByZXNzaW9uXCIpXTtzd2l0Y2gocy50eXBlKXtjYXNlXCJBc0NvbnN0RXhwcmVzc2lvblwiOmkucHVzaChcIiBhcyBjb25zdFwiKTticmVhaztjYXNlXCJBc0V4cHJlc3Npb25cIjpjYXNlXCJUU0FzRXhwcmVzc2lvblwiOmkucHVzaChcIiBhcyBcIixyKFwidHlwZUFubm90YXRpb25cIikpO2JyZWFrO2Nhc2VcIlNhdGlzZmllc0V4cHJlc3Npb25cIjpjYXNlXCJUU1NhdGlzZmllc0V4cHJlc3Npb25cIjppLnB1c2goXCIgc2F0aXNmaWVzIFwiLHIoXCJ0eXBlQW5ub3RhdGlvblwiKSk7YnJlYWt9cmV0dXJuIHU9PT1cImNhbGxlZVwiJiZMKG4pfHx1PT09XCJvYmplY3RcIiYmVyhuKT9sKFtmKFtFLC4uLmldKSxFXSk6aX1mdW5jdGlvbiBTYShlLHQscil7bGV0e25vZGU6bn09ZSxzPVtLKGUpLFwiY29tcG9uZW50XCJdO24uaWQmJnMucHVzaChcIiBcIixyKFwiaWRcIikpLHMucHVzaChyKFwidHlwZVBhcmFtZXRlcnNcIikpO2xldCB1PXpsKGUscix0KTtyZXR1cm4gbi5yZW5kZXJzVHlwZT9zLnB1c2gobChbdSxcIiBcIixyKFwicmVuZGVyc1R5cGVcIildKSk6cy5wdXNoKGwoW3VdKSksbi5ib2R5JiZzLnB1c2goXCIgXCIscihcImJvZHlcIikpLHQuc2VtaSYmbi50eXBlPT09XCJEZWNsYXJlQ29tcG9uZW50XCImJnMucHVzaChcIjtcIiksc31mdW5jdGlvbiB6bChlLHQscil7bGV0e25vZGU6bn09ZSxzPW4ucGFyYW1zO2lmKG4ucmVzdCYmKHM9Wy4uLnMsbi5yZXN0XSkscy5sZW5ndGg9PT0wKXJldHVybltcIihcIixKKGUscix7ZmlsdGVyOmk9PmJlKHIub3JpZ2luYWxUZXh0LGsoaSkpPT09XCIpXCJ9KSxcIilcIl07bGV0IHU9W107cmV0dXJuIGVtKGUsKGksYSk9PntsZXQgbz1hPT09cy5sZW5ndGgtMTtvJiZuLnJlc3QmJnUucHVzaChcIi4uLlwiKSx1LnB1c2godCgpKSwhbyYmKHUucHVzaChcIixcIiksY2Uoc1thXSxyKT91LnB1c2goRixGKTp1LnB1c2goeCkpfSksW1wiKFwiLGYoW0UsLi4udV0pLEIob2UocixcImFsbFwiKSYmIVpsKG4scyk/XCIsXCI6XCJcIiksRSxcIilcIl19ZnVuY3Rpb24gWmwoZSx0KXt2YXIgcjtyZXR1cm4gZS5yZXN0fHwoKHI9TSghMSx0LC0xKSk9PW51bGw/dm9pZCAwOnIudHlwZSk9PT1cIlJlc3RFbGVtZW50XCJ9ZnVuY3Rpb24gZW0oZSx0KXtsZXR7bm9kZTpyfT1lLG49MCxzPXU9PnQodSxuKyspO2UuZWFjaChzLFwicGFyYW1zXCIpLHIucmVzdCYmZS5jYWxsKHMsXCJyZXN0XCIpfWZ1bmN0aW9uIEJhKGUsdCxyKXtsZXR7bm9kZTpufT1lO3JldHVybiBuLnNob3J0aGFuZD9yKFwibG9jYWxcIik6W3IoXCJuYW1lXCIpLFwiIGFzIFwiLHIoXCJsb2NhbFwiKV19ZnVuY3Rpb24gYmEoZSx0LHIpe2xldHtub2RlOm59PWUscz1bXTtyZXR1cm4gbi5uYW1lJiZzLnB1c2gocihcIm5hbWVcIiksbi5vcHRpb25hbD9cIj86IFwiOlwiOiBcIikscy5wdXNoKHIoXCJ0eXBlQW5ub3RhdGlvblwiKSksc31mdW5jdGlvbiBQYShlLHQscil7cmV0dXJuIGd0KGUscix0KX1mdW5jdGlvbiBQbihlLHQpe2xldHtub2RlOnJ9PWUsbj10KFwiaWRcIik7ci5jb21wdXRlZCYmKG49W1wiW1wiLG4sXCJdXCJdKTtsZXQgcz1cIlwiO3JldHVybiByLmluaXRpYWxpemVyJiYocz10KFwiaW5pdGlhbGl6ZXJcIikpLHIuaW5pdCYmKHM9dChcImluaXRcIikpLHM/W24sXCIgPSBcIixzXTpufWZ1bmN0aW9uIGthKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM7aWYobi50eXBlPT09XCJFbnVtU3ltYm9sQm9keVwifHxuLmV4cGxpY2l0VHlwZSlzd2l0Y2gobi50eXBlKXtjYXNlXCJFbnVtQm9vbGVhbkJvZHlcIjpzPVwiYm9vbGVhblwiO2JyZWFrO2Nhc2VcIkVudW1OdW1iZXJCb2R5XCI6cz1cIm51bWJlclwiO2JyZWFrO2Nhc2VcIkVudW1CaWdJbnRCb2R5XCI6cz1cImJpZ2ludFwiO2JyZWFrO2Nhc2VcIkVudW1TdHJpbmdCb2R5XCI6cz1cInN0cmluZ1wiO2JyZWFrO2Nhc2VcIkVudW1TeW1ib2xCb2R5XCI6cz1cInN5bWJvbFwiO2JyZWFrfXJldHVybltzP2BvZiAke3N9IGA6XCJcIixQYShlLHQscildfWZ1bmN0aW9uIGtuKGUsdCxyKXtsZXR7bm9kZTpufT1lO3JldHVybltLKGUpLG4uY29uc3Q/XCJjb25zdCBcIjpcIlwiLFwiZW51bSBcIix0KFwiaWRcIiksXCIgXCIsbi50eXBlPT09XCJUU0VudW1EZWNsYXJhdGlvblwiP1BhKGUsdCxyKTp0KFwiYm9keVwiKV19ZnVuY3Rpb24gTGEoZSx0LHIpe2xldHtub2RlOm59PWUscz1bXCJob29rXCJdO24uaWQmJnMucHVzaChcIiBcIixyKFwiaWRcIikpO2xldCB1PVVlKGUscix0LCExLCEwKSxpPVF0KGUsciksYT1vdChuLGkpO3JldHVybiBzLnB1c2gobChbYT9sKHUpOnUsaV0pLG4uYm9keT9cIiBcIjpcIlwiLHIoXCJib2R5XCIpKSxzfWZ1bmN0aW9uIHdhKGUsdCxyKXtsZXR7bm9kZTpufT1lLHM9W0soZSksXCJob29rXCJdO3JldHVybiBuLmlkJiZzLnB1c2goXCIgXCIscihcImlkXCIpKSx0LnNlbWkmJnMucHVzaChcIjtcIiksc31mdW5jdGlvbiBJYShlKXt2YXIgcjtsZXR7bm9kZTp0fT1lO3JldHVybiB0LnR5cGU9PT1cIkhvb2tUeXBlQW5ub3RhdGlvblwiJiYoKHI9ZS5nZXRQYXJlbnROb2RlKDIpKT09bnVsbD92b2lkIDA6ci50eXBlKT09PVwiRGVjbGFyZUhvb2tcIn1mdW5jdGlvbiBPYShlLHQscil7bGV0e25vZGU6bn09ZSxzPVtdO3MucHVzaChJYShlKT9cIlwiOlwiaG9vayBcIik7bGV0IHU9VWUoZSxyLHQsITEsITApLGk9W107cmV0dXJuIGkucHVzaChJYShlKT9cIjogXCI6XCIgPT4gXCIscihcInJldHVyblR5cGVcIikpLG90KG4saSkmJih1PWwodSkpLHMucHVzaCh1LGkpLGwocyl9ZnVuY3Rpb24gSW4oZSx0LHIpe2xldHtub2RlOm59PWUscz1bSyhlKSxcImludGVyZmFjZVwiXSx1PVtdLGk9W107bi50eXBlIT09XCJJbnRlcmZhY2VUeXBlQW5ub3RhdGlvblwiJiZ1LnB1c2goXCIgXCIscihcImlkXCIpLHIoXCJ0eXBlUGFyYW1ldGVyc1wiKSk7bGV0IGE9bi50eXBlUGFyYW1ldGVycyYmIVQobi50eXBlUGFyYW1ldGVycyxoLlRyYWlsaW5nfGguTGluZSk7cmV0dXJuIE8obi5leHRlbmRzKSYmaS5wdXNoKGE/QihcIiBcIix4LHtncm91cElkOkFyKG4udHlwZVBhcmFtZXRlcnMpfSk6eCxcImV4dGVuZHMgXCIsKG4uZXh0ZW5kcy5sZW5ndGg9PT0xP0V1OmYpKGIoW1wiLFwiLHhdLGUubWFwKHIsXCJleHRlbmRzXCIpKSkpLFQobi5pZCxoLlRyYWlsaW5nKXx8TyhuLmV4dGVuZHMpP2E/cy5wdXNoKGwoWy4uLnUsZihpKV0pKTpzLnB1c2gobChmKFsuLi51LC4uLmldKSkpOnMucHVzaCguLi51LC4uLmkpLHMucHVzaChcIiBcIixyKFwiYm9keVwiKSksbChzKX1mdW5jdGlvbiBfYShlLHQscil7bGV0e25vZGU6bn09ZTtpZihQcihuKSlyZXR1cm4gbi50eXBlLnNsaWNlKDAsLTE0KS50b0xvd2VyQ2FzZSgpO2xldCBzPXQuc2VtaT9cIjtcIjpcIlwiO3N3aXRjaChuLnR5cGUpe2Nhc2VcIkNvbXBvbmVudERlY2xhcmF0aW9uXCI6Y2FzZVwiRGVjbGFyZUNvbXBvbmVudFwiOmNhc2VcIkNvbXBvbmVudFR5cGVBbm5vdGF0aW9uXCI6cmV0dXJuIFNhKGUsdCxyKTtjYXNlXCJDb21wb25lbnRQYXJhbWV0ZXJcIjpyZXR1cm4gQmEoZSx0LHIpO2Nhc2VcIkNvbXBvbmVudFR5cGVQYXJhbWV0ZXJcIjpyZXR1cm4gYmEoZSx0LHIpO2Nhc2VcIkhvb2tEZWNsYXJhdGlvblwiOnJldHVybiBMYShlLHQscik7Y2FzZVwiRGVjbGFyZUhvb2tcIjpyZXR1cm4gd2EoZSx0LHIpO2Nhc2VcIkhvb2tUeXBlQW5ub3RhdGlvblwiOnJldHVybiBPYShlLHQscik7Y2FzZVwiRGVjbGFyZUNsYXNzXCI6cmV0dXJuIHhuKGUsdCxyKTtjYXNlXCJEZWNsYXJlRnVuY3Rpb25cIjpyZXR1cm5bSyhlKSxcImZ1bmN0aW9uIFwiLHIoXCJpZFwiKSxyKFwicHJlZGljYXRlXCIpLHNdO2Nhc2VcIkRlY2xhcmVNb2R1bGVcIjpyZXR1cm5bXCJkZWNsYXJlIG1vZHVsZSBcIixyKFwiaWRcIiksXCIgXCIscihcImJvZHlcIildO2Nhc2VcIkRlY2xhcmVNb2R1bGVFeHBvcnRzXCI6cmV0dXJuW1wiZGVjbGFyZSBtb2R1bGUuZXhwb3J0c1wiLEgoZSxyKSxzXTtjYXNlXCJEZWNsYXJlTmFtZXNwYWNlXCI6cmV0dXJuW1wiZGVjbGFyZSBuYW1lc3BhY2UgXCIscihcImlkXCIpLFwiIFwiLHIoXCJib2R5XCIpXTtjYXNlXCJEZWNsYXJlVmFyaWFibGVcIjpyZXR1cm5bSyhlKSxuLmtpbmQ/P1widmFyXCIsXCIgXCIscihcImlkXCIpLHNdO2Nhc2VcIkRlY2xhcmVFeHBvcnREZWNsYXJhdGlvblwiOmNhc2VcIkRlY2xhcmVFeHBvcnRBbGxEZWNsYXJhdGlvblwiOnJldHVybiBCbihlLHQscik7Y2FzZVwiRGVjbGFyZU9wYXF1ZVR5cGVcIjpjYXNlXCJPcGFxdWVUeXBlXCI6cmV0dXJuIFdpKGUsdCxyKTtjYXNlXCJEZWNsYXJlVHlwZUFsaWFzXCI6Y2FzZVwiVHlwZUFsaWFzXCI6cmV0dXJuIFpyKGUsdCxyKTtjYXNlXCJJbnRlcnNlY3Rpb25UeXBlQW5ub3RhdGlvblwiOnJldHVybiBlbihlLHQscik7Y2FzZVwiVW5pb25UeXBlQW5ub3RhdGlvblwiOnJldHVybiB0bihlLHQscik7Y2FzZVwiQ29uZGl0aW9uYWxUeXBlQW5ub3RhdGlvblwiOnJldHVybiB6dChlLHQscik7Y2FzZVwiSW5mZXJUeXBlQW5ub3RhdGlvblwiOnJldHVybiBzbihlLHQscik7Y2FzZVwiRnVuY3Rpb25UeXBlQW5ub3RhdGlvblwiOnJldHVybiBybihlLHQscik7Y2FzZVwiVHVwbGVUeXBlQW5ub3RhdGlvblwiOnJldHVybiBLdChlLHQscik7Y2FzZVwiVHVwbGVUeXBlTGFiZWxlZEVsZW1lbnRcIjpyZXR1cm4gYW4oZSx0LHIpO2Nhc2VcIlR1cGxlVHlwZVNwcmVhZEVsZW1lbnRcIjpyZXR1cm4gdW4oZSx0LHIpO2Nhc2VcIkdlbmVyaWNUeXBlQW5ub3RhdGlvblwiOnJldHVybltyKFwiaWRcIiksT3QoZSx0LHIsXCJ0eXBlUGFyYW1ldGVyc1wiKV07Y2FzZVwiSW5kZXhlZEFjY2Vzc1R5cGVcIjpjYXNlXCJPcHRpb25hbEluZGV4ZWRBY2Nlc3NUeXBlXCI6cmV0dXJuIG5uKGUsdCxyKTtjYXNlXCJUeXBlQW5ub3RhdGlvblwiOnJldHVybiBvbihlLHQscik7Y2FzZVwiVHlwZVBhcmFtZXRlclwiOnJldHVybiBkbihlLHQscik7Y2FzZVwiVHlwZW9mVHlwZUFubm90YXRpb25cIjpyZXR1cm4gY24oZSxyKTtjYXNlXCJFeGlzdHNUeXBlQW5ub3RhdGlvblwiOnJldHVyblwiKlwiO2Nhc2VcIkFycmF5VHlwZUFubm90YXRpb25cIjpyZXR1cm4gcG4ocik7Y2FzZVwiRGVjbGFyZUVudW1cIjpjYXNlXCJFbnVtRGVjbGFyYXRpb25cIjpyZXR1cm4ga24oZSxyLHQpO2Nhc2VcIkVudW1Cb29sZWFuQm9keVwiOmNhc2VcIkVudW1OdW1iZXJCb2R5XCI6Y2FzZVwiRW51bUJpZ0ludEJvZHlcIjpjYXNlXCJFbnVtU3RyaW5nQm9keVwiOmNhc2VcIkVudW1TeW1ib2xCb2R5XCI6cmV0dXJuIGthKGUscix0KTtjYXNlXCJFbnVtQm9vbGVhbk1lbWJlclwiOmNhc2VcIkVudW1OdW1iZXJNZW1iZXJcIjpjYXNlXCJFbnVtQmlnSW50TWVtYmVyXCI6Y2FzZVwiRW51bVN0cmluZ01lbWJlclwiOmNhc2VcIkVudW1EZWZhdWx0ZWRNZW1iZXJcIjpyZXR1cm4gUG4oZSxyKTtjYXNlXCJGdW5jdGlvblR5cGVQYXJhbVwiOntsZXQgdT1uLm5hbWU/cihcIm5hbWVcIik6ZS5wYXJlbnQudGhpcz09PW4/XCJ0aGlzXCI6XCJcIjtyZXR1cm5bdSwkKGUpLHU/XCI6IFwiOlwiXCIscihcInR5cGVBbm5vdGF0aW9uXCIpXX1jYXNlXCJEZWNsYXJlSW50ZXJmYWNlXCI6Y2FzZVwiSW50ZXJmYWNlRGVjbGFyYXRpb25cIjpjYXNlXCJJbnRlcmZhY2VUeXBlQW5ub3RhdGlvblwiOnJldHVybiBJbihlLHQscik7Y2FzZVwiQ2xhc3NJbXBsZW1lbnRzXCI6Y2FzZVwiSW50ZXJmYWNlRXh0ZW5kc1wiOnJldHVybltyKFwiaWRcIikscihcInR5cGVQYXJhbWV0ZXJzXCIpXTtjYXNlXCJOdWxsYWJsZVR5cGVBbm5vdGF0aW9uXCI6cmV0dXJuW1wiP1wiLHIoXCJ0eXBlQW5ub3RhdGlvblwiKV07Y2FzZVwiVmFyaWFuY2VcIjp7bGV0e2tpbmQ6dX09bjtyZXR1cm4gTXQub2sodT09PVwicGx1c1wifHx1PT09XCJtaW51c1wiKSx1PT09XCJwbHVzXCI/XCIrXCI6XCItXCJ9Y2FzZVwiS2V5b2ZUeXBlQW5ub3RhdGlvblwiOnJldHVybltcImtleW9mIFwiLHIoXCJhcmd1bWVudFwiKV07Y2FzZVwiT2JqZWN0VHlwZUNhbGxQcm9wZXJ0eVwiOnJldHVybltuLnN0YXRpYz9cInN0YXRpYyBcIjpcIlwiLHIoXCJ2YWx1ZVwiKV07Y2FzZVwiT2JqZWN0VHlwZU1hcHBlZFR5cGVQcm9wZXJ0eVwiOnJldHVybiBlYShlLHQscik7Y2FzZVwiT2JqZWN0VHlwZUluZGV4ZXJcIjpyZXR1cm5bbi5zdGF0aWM/XCJzdGF0aWMgXCI6XCJcIixuLnZhcmlhbmNlP3IoXCJ2YXJpYW5jZVwiKTpcIlwiLFwiW1wiLHIoXCJpZFwiKSxuLmlkP1wiOiBcIjpcIlwiLHIoXCJrZXlcIiksXCJdOiBcIixyKFwidmFsdWVcIildO2Nhc2VcIk9iamVjdFR5cGVQcm9wZXJ0eVwiOntsZXQgdT1cIlwiO3JldHVybiBuLnByb3RvP3U9XCJwcm90byBcIjpuLnN0YXRpYyYmKHU9XCJzdGF0aWMgXCIpLFt1LG4ua2luZCE9PVwiaW5pdFwiP24ua2luZCtcIiBcIjpcIlwiLG4udmFyaWFuY2U/cihcInZhcmlhbmNlXCIpOlwiXCIsRnQoZSx0LHIpLCQoZSksa3Qobik/XCJcIjpcIjogXCIscihcInZhbHVlXCIpXX1jYXNlXCJPYmplY3RUeXBlQW5ub3RhdGlvblwiOnJldHVybiBndChlLHQscik7Y2FzZVwiT2JqZWN0VHlwZUludGVybmFsU2xvdFwiOnJldHVybltuLnN0YXRpYz9cInN0YXRpYyBcIjpcIlwiLFwiW1tcIixyKFwiaWRcIiksXCJdXVwiLCQoZSksbi5tZXRob2Q/XCJcIjpcIjogXCIscihcInZhbHVlXCIpXTtjYXNlXCJPYmplY3RUeXBlU3ByZWFkUHJvcGVydHlcIjpyZXR1cm4geW4oZSxyKTtjYXNlXCJRdWFsaWZpZWRUeXBlb2ZJZGVudGlmaWVyXCI6Y2FzZVwiUXVhbGlmaWVkVHlwZUlkZW50aWZpZXJcIjpyZXR1cm5bcihcInF1YWxpZmljYXRpb25cIiksXCIuXCIscihcImlkXCIpXTtjYXNlXCJOdWxsTGl0ZXJhbFR5cGVBbm5vdGF0aW9uXCI6cmV0dXJuXCJudWxsXCI7Y2FzZVwiQm9vbGVhbkxpdGVyYWxUeXBlQW5ub3RhdGlvblwiOnJldHVybiBTdHJpbmcobi52YWx1ZSk7Y2FzZVwiU3RyaW5nTGl0ZXJhbFR5cGVBbm5vdGF0aW9uXCI6cmV0dXJuIHZlKG50KGZlKG4pLHQpKTtjYXNlXCJOdW1iZXJMaXRlcmFsVHlwZUFubm90YXRpb25cIjpyZXR1cm4gRXQobi5yYXc/P24uZXh0cmEucmF3KTtjYXNlXCJCaWdJbnRMaXRlcmFsVHlwZUFubm90YXRpb25cIjpyZXR1cm4gU24obi5yYXc/P24uZXh0cmEucmF3KTtjYXNlXCJUeXBlQ2FzdEV4cHJlc3Npb25cIjpyZXR1cm5bXCIoXCIscihcImV4cHJlc3Npb25cIiksSChlLHIpLFwiKVwiXTtjYXNlXCJUeXBlUHJlZGljYXRlXCI6cmV0dXJuIGxuKGUscik7Y2FzZVwiVHlwZU9wZXJhdG9yXCI6cmV0dXJuW24ub3BlcmF0b3IsXCIgXCIscihcInR5cGVBbm5vdGF0aW9uXCIpXTtjYXNlXCJUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb25cIjpjYXNlXCJUeXBlUGFyYW1ldGVySW5zdGFudGlhdGlvblwiOnJldHVybiBPdChlLHQscixcInBhcmFtc1wiKTtjYXNlXCJJbmZlcnJlZFByZWRpY2F0ZVwiOmNhc2VcIkRlY2xhcmVkUHJlZGljYXRlXCI6cmV0dXJuW2Uua2V5PT09XCJwcmVkaWNhdGVcIiYmZS5wYXJlbnQudHlwZSE9PVwiRGVjbGFyZUZ1bmN0aW9uXCImJiFlLnBhcmVudC5yZXR1cm5UeXBlP1wiOiBcIjpcIiBcIixcIiVjaGVja3NcIiwuLi5uLnR5cGU9PT1cIkRlY2xhcmVkUHJlZGljYXRlXCI/W1wiKFwiLHIoXCJ2YWx1ZVwiKSxcIilcIl06W11dO2Nhc2VcIkFzRXhwcmVzc2lvblwiOmNhc2VcIkFzQ29uc3RFeHByZXNzaW9uXCI6Y2FzZVwiU2F0aXNmaWVzRXhwcmVzc2lvblwiOnJldHVybiBibihlLHQscil9fWZ1bmN0aW9uIHZhKGUsdCxyKXt2YXIgaTtsZXR7bm9kZTpufT1lO2lmKCFuLnR5cGUuc3RhcnRzV2l0aChcIlRTXCIpKXJldHVybjtpZihrcihuKSlyZXR1cm4gbi50eXBlLnNsaWNlKDIsLTcpLnRvTG93ZXJDYXNlKCk7bGV0IHM9dC5zZW1pP1wiO1wiOlwiXCIsdT1bXTtzd2l0Y2gobi50eXBlKXtjYXNlXCJUU1RoaXNUeXBlXCI6cmV0dXJuXCJ0aGlzXCI7Y2FzZVwiVFNUeXBlQXNzZXJ0aW9uXCI6e2xldCBhPSEoVShuLmV4cHJlc3Npb24pfHxzZShuLmV4cHJlc3Npb24pKSxvPWwoW1wiPFwiLGYoW0UscihcInR5cGVBbm5vdGF0aW9uXCIpXSksRSxcIj5cIl0pLHA9W0IoXCIoXCIpLGYoW0UscihcImV4cHJlc3Npb25cIildKSxFLEIoXCIpXCIpXTtyZXR1cm4gYT9ldChbW28scihcImV4cHJlc3Npb25cIildLFtvLGwocCx7c2hvdWxkQnJlYWs6ITB9KV0sW28scihcImV4cHJlc3Npb25cIildXSk6bChbbyxyKFwiZXhwcmVzc2lvblwiKV0pfWNhc2VcIlRTRGVjbGFyZUZ1bmN0aW9uXCI6cmV0dXJuIEVuKGUscix0KTtjYXNlXCJUU0V4cG9ydEFzc2lnbm1lbnRcIjpyZXR1cm5bXCJleHBvcnQgPSBcIixyKFwiZXhwcmVzc2lvblwiKSxzXTtjYXNlXCJUU01vZHVsZUJsb2NrXCI6cmV0dXJuIEFuKGUsdCxyKTtjYXNlXCJUU0ludGVyZmFjZUJvZHlcIjpjYXNlXCJUU1R5cGVMaXRlcmFsXCI6cmV0dXJuIGd0KGUsdCxyKTtjYXNlXCJUU1R5cGVBbGlhc0RlY2xhcmF0aW9uXCI6cmV0dXJuIFpyKGUsdCxyKTtjYXNlXCJUU1F1YWxpZmllZE5hbWVcIjpyZXR1cm5bcihcImxlZnRcIiksXCIuXCIscihcInJpZ2h0XCIpXTtjYXNlXCJUU0Fic3RyYWN0TWV0aG9kRGVmaW5pdGlvblwiOmNhc2VcIlRTRGVjbGFyZU1ldGhvZFwiOnJldHVybiBobihlLHQscik7Y2FzZVwiVFNBYnN0cmFjdEFjY2Vzc29yUHJvcGVydHlcIjpjYXNlXCJUU0Fic3RyYWN0UHJvcGVydHlEZWZpbml0aW9uXCI6cmV0dXJuIGduKGUsdCxyKTtjYXNlXCJUU0ludGVyZmFjZUhlcml0YWdlXCI6Y2FzZVwiVFNDbGFzc0ltcGxlbWVudHNcIjpjYXNlXCJUU0V4cHJlc3Npb25XaXRoVHlwZUFyZ3VtZW50c1wiOmNhc2VcIlRTSW5zdGFudGlhdGlvbkV4cHJlc3Npb25cIjpyZXR1cm5bcihcImV4cHJlc3Npb25cIikscihuLnR5cGVBcmd1bWVudHM/XCJ0eXBlQXJndW1lbnRzXCI6XCJ0eXBlUGFyYW1ldGVyc1wiKV07Y2FzZVwiVFNUZW1wbGF0ZUxpdGVyYWxUeXBlXCI6cmV0dXJuIEdyKGUscix0KTtjYXNlXCJUU05hbWVkVHVwbGVNZW1iZXJcIjpyZXR1cm4gYW4oZSx0LHIpO2Nhc2VcIlRTUmVzdFR5cGVcIjpyZXR1cm4gdW4oZSx0LHIpO2Nhc2VcIlRTT3B0aW9uYWxUeXBlXCI6cmV0dXJuW3IoXCJ0eXBlQW5ub3RhdGlvblwiKSxcIj9cIl07Y2FzZVwiVFNJbnRlcmZhY2VEZWNsYXJhdGlvblwiOnJldHVybiBJbihlLHQscik7Y2FzZVwiVFNUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb25cIjpjYXNlXCJUU1R5cGVQYXJhbWV0ZXJJbnN0YW50aWF0aW9uXCI6cmV0dXJuIE90KGUsdCxyLFwicGFyYW1zXCIpO2Nhc2VcIlRTVHlwZVBhcmFtZXRlclwiOnJldHVybiBkbihlLHQscik7Y2FzZVwiVFNBc0V4cHJlc3Npb25cIjpjYXNlXCJUU1NhdGlzZmllc0V4cHJlc3Npb25cIjpyZXR1cm4gYm4oZSx0LHIpO2Nhc2VcIlRTQXJyYXlUeXBlXCI6cmV0dXJuIHBuKHIpO2Nhc2VcIlRTUHJvcGVydHlTaWduYXR1cmVcIjpyZXR1cm5bbi5yZWFkb25seT9cInJlYWRvbmx5IFwiOlwiXCIsRnQoZSx0LHIpLCQoZSksSChlLHIpXTtjYXNlXCJUU1BhcmFtZXRlclByb3BlcnR5XCI6cmV0dXJuWyR0KG4pLG4uc3RhdGljP1wic3RhdGljIFwiOlwiXCIsbi5vdmVycmlkZT9cIm92ZXJyaWRlIFwiOlwiXCIsbi5yZWFkb25seT9cInJlYWRvbmx5IFwiOlwiXCIscihcInBhcmFtZXRlclwiKV07Y2FzZVwiVFNUeXBlUXVlcnlcIjpyZXR1cm4gY24oZSxyKTtjYXNlXCJUU0luZGV4U2lnbmF0dXJlXCI6e2xldCBhPW4ucGFyYW1ldGVycy5sZW5ndGg+MT9CKG9lKHQpP1wiLFwiOlwiXCIpOlwiXCIsbz1sKFtmKFtFLGIoW1wiLCBcIixFXSxlLm1hcChyLFwicGFyYW1ldGVyc1wiKSldKSxhLEVdKSxwPWUucGFyZW50LnR5cGU9PT1cIkNsYXNzQm9keVwiJiZlLmtleT09PVwiYm9keVwiO3JldHVybltwJiZuLnN0YXRpYz9cInN0YXRpYyBcIjpcIlwiLG4ucmVhZG9ubHk/XCJyZWFkb25seSBcIjpcIlwiLFwiW1wiLG4ucGFyYW1ldGVycz9vOlwiXCIsXCJdXCIsSChlLHIpLHA/czpcIlwiXX1jYXNlXCJUU1R5cGVQcmVkaWNhdGVcIjpyZXR1cm4gbG4oZSxyKTtjYXNlXCJUU05vbk51bGxFeHByZXNzaW9uXCI6cmV0dXJuW3IoXCJleHByZXNzaW9uXCIpLFwiIVwiXTtjYXNlXCJUU0ltcG9ydFR5cGVcIjpyZXR1cm5bXCJpbXBvcnQoXCIscihcImFyZ3VtZW50XCIpLFwiKVwiLG4ucXVhbGlmaWVyP1tcIi5cIixyKFwicXVhbGlmaWVyXCIpXTpcIlwiLE90KGUsdCxyLG4udHlwZUFyZ3VtZW50cz9cInR5cGVBcmd1bWVudHNcIjpcInR5cGVQYXJhbWV0ZXJzXCIpXTtjYXNlXCJUU0xpdGVyYWxUeXBlXCI6cmV0dXJuIHIoXCJsaXRlcmFsXCIpO2Nhc2VcIlRTSW5kZXhlZEFjY2Vzc1R5cGVcIjpyZXR1cm4gbm4oZSx0LHIpO2Nhc2VcIlRTVHlwZU9wZXJhdG9yXCI6cmV0dXJuW24ub3BlcmF0b3IsXCIgXCIscihcInR5cGVBbm5vdGF0aW9uXCIpXTtjYXNlXCJUU01hcHBlZFR5cGVcIjpyZXR1cm4gdGEoZSx0LHIpO2Nhc2VcIlRTTWV0aG9kU2lnbmF0dXJlXCI6e2xldCBhPW4ua2luZCYmbi5raW5kIT09XCJtZXRob2RcIj9gJHtuLmtpbmR9IGA6XCJcIjt1LnB1c2goJHQobiksYSxuLmNvbXB1dGVkP1wiW1wiOlwiXCIscihcImtleVwiKSxuLmNvbXB1dGVkP1wiXVwiOlwiXCIsJChlKSk7bGV0IG89VWUoZSxyLHQsITEsITApLHA9bi5yZXR1cm5UeXBlP1wicmV0dXJuVHlwZVwiOlwidHlwZUFubm90YXRpb25cIix5PW5bcF0sRD15P0goZSxyLHApOlwiXCIsbT1vdChuLEQpO3JldHVybiB1LnB1c2gobT9sKG8pOm8pLHkmJnUucHVzaChsKEQpKSxsKHUpfWNhc2VcIlRTTmFtZXNwYWNlRXhwb3J0RGVjbGFyYXRpb25cIjpyZXR1cm5bXCJleHBvcnQgYXMgbmFtZXNwYWNlIFwiLHIoXCJpZFwiKSx0LnNlbWk/XCI7XCI6XCJcIl07Y2FzZVwiVFNFbnVtRGVjbGFyYXRpb25cIjpyZXR1cm4ga24oZSxyLHQpO2Nhc2VcIlRTRW51bU1lbWJlclwiOnJldHVybiBQbihlLHIpO2Nhc2VcIlRTSW1wb3J0RXF1YWxzRGVjbGFyYXRpb25cIjpyZXR1cm5bbi5pc0V4cG9ydD9cImV4cG9ydCBcIjpcIlwiLFwiaW1wb3J0IFwiLHdzKG4sITEpLHIoXCJpZFwiKSxcIiA9IFwiLHIoXCJtb2R1bGVSZWZlcmVuY2VcIiksdC5zZW1pP1wiO1wiOlwiXCJdO2Nhc2VcIlRTRXh0ZXJuYWxNb2R1bGVSZWZlcmVuY2VcIjpyZXR1cm5bXCJyZXF1aXJlKFwiLHIoXCJleHByZXNzaW9uXCIpLFwiKVwiXTtjYXNlXCJUU01vZHVsZURlY2xhcmF0aW9uXCI6e2xldHtwYXJlbnQ6YX09ZSxvPWEudHlwZT09PVwiVFNNb2R1bGVEZWNsYXJhdGlvblwiLHA9KChpPW4uYm9keSk9PW51bGw/dm9pZCAwOmkudHlwZSk9PT1cIlRTTW9kdWxlRGVjbGFyYXRpb25cIjtyZXR1cm4gbz91LnB1c2goXCIuXCIpOih1LnB1c2goSyhlKSksbi5raW5kIT09XCJnbG9iYWxcIiYmdS5wdXNoKG4ua2luZCxcIiBcIikpLHUucHVzaChyKFwiaWRcIikpLHA/dS5wdXNoKHIoXCJib2R5XCIpKTpuLmJvZHk/dS5wdXNoKFwiIFwiLGwocihcImJvZHlcIikpKTp1LnB1c2gocyksdX1jYXNlXCJUU0NvbmRpdGlvbmFsVHlwZVwiOnJldHVybiB6dChlLHQscik7Y2FzZVwiVFNJbmZlclR5cGVcIjpyZXR1cm4gc24oZSx0LHIpO2Nhc2VcIlRTSW50ZXJzZWN0aW9uVHlwZVwiOnJldHVybiBlbihlLHQscik7Y2FzZVwiVFNVbmlvblR5cGVcIjpyZXR1cm4gdG4oZSx0LHIpO2Nhc2VcIlRTRnVuY3Rpb25UeXBlXCI6Y2FzZVwiVFNDYWxsU2lnbmF0dXJlRGVjbGFyYXRpb25cIjpjYXNlXCJUU0NvbnN0cnVjdG9yVHlwZVwiOmNhc2VcIlRTQ29uc3RydWN0U2lnbmF0dXJlRGVjbGFyYXRpb25cIjpyZXR1cm4gcm4oZSx0LHIpO2Nhc2VcIlRTVHVwbGVUeXBlXCI6cmV0dXJuIEt0KGUsdCxyKTtjYXNlXCJUU1R5cGVSZWZlcmVuY2VcIjpyZXR1cm5bcihcInR5cGVOYW1lXCIpLE90KGUsdCxyLG4udHlwZUFyZ3VtZW50cz9cInR5cGVBcmd1bWVudHNcIjpcInR5cGVQYXJhbWV0ZXJzXCIpXTtjYXNlXCJUU1R5cGVBbm5vdGF0aW9uXCI6cmV0dXJuIG9uKGUsdCxyKTtjYXNlXCJUU0VtcHR5Qm9keUZ1bmN0aW9uRXhwcmVzc2lvblwiOnJldHVybiBGbihlLHQscik7Y2FzZVwiVFNKU0RvY0FsbFR5cGVcIjpyZXR1cm5cIipcIjtjYXNlXCJUU0pTRG9jVW5rbm93blR5cGVcIjpyZXR1cm5cIj9cIjtjYXNlXCJUU0pTRG9jTnVsbGFibGVUeXBlXCI6cmV0dXJuIGhzKGUscixcIj9cIik7Y2FzZVwiVFNKU0RvY05vbk51bGxhYmxlVHlwZVwiOnJldHVybiBocyhlLHIsXCIhXCIpO2Nhc2VcIlRTUGFyZW50aGVzaXplZFR5cGVcIjpkZWZhdWx0OnRocm93IG5ldyBOZShuLFwiVHlwZVNjcmlwdFwiKX19ZnVuY3Rpb24gdG0oZSx0LHIsbil7aWYoVnIoZSkpcmV0dXJuIERpKGUsdCk7Zm9yKGxldCBzIG9mW2dpLFRpLF9hLHZhLGdhXSl7bGV0IHU9cyhlLHQscixuKTtpZih1IT09dm9pZCAwKXJldHVybiB1fX12YXIgcm09UihbXCJDbGFzc01ldGhvZFwiLFwiQ2xhc3NQcml2YXRlTWV0aG9kXCIsXCJDbGFzc1Byb3BlcnR5XCIsXCJDbGFzc0FjY2Vzc29yUHJvcGVydHlcIixcIkFjY2Vzc29yUHJvcGVydHlcIixcIlRTQWJzdHJhY3RBY2Nlc3NvclByb3BlcnR5XCIsXCJQcm9wZXJ0eURlZmluaXRpb25cIixcIlRTQWJzdHJhY3RQcm9wZXJ0eURlZmluaXRpb25cIixcIkNsYXNzUHJpdmF0ZVByb3BlcnR5XCIsXCJNZXRob2REZWZpbml0aW9uXCIsXCJUU0Fic3RyYWN0TWV0aG9kRGVmaW5pdGlvblwiLFwiVFNEZWNsYXJlTWV0aG9kXCJdKTtmdW5jdGlvbiBubShlLHQscixuKXt2YXIgRDtlLmlzUm9vdCYmKChEPXQuX19vbkh0bWxCaW5kaW5nUm9vdCk9PW51bGx8fEQuY2FsbCh0LGUubm9kZSx0KSk7bGV0IHM9dG0oZSx0LHIsbik7aWYoIXMpcmV0dXJuXCJcIjtsZXR7bm9kZTp1fT1lO2lmKHJtKHUpKXJldHVybiBzO2xldCBpPU8odS5kZWNvcmF0b3JzKSxhPUJpKGUsdCxyKSxvPXUudHlwZT09PVwiQ2xhc3NFeHByZXNzaW9uXCI7aWYoaSYmIW8pcmV0dXJuIGxyKHMsbT0+bChbYSxtXSkpO2xldCBwPWtlKGUsdCkseT1wYShlLHQpO3JldHVybiFhJiYhcCYmIXk/czpscihzLG09Plt5P1wiO1wiOlwiXCIscD9cIihcIjpcIlwiLHAmJm8mJmk/W2YoW3gsYSxtXSkseF06W2EsbV0scD9cIilcIjpcIlwiXSl9dmFyIGphPW5tO3ZhciBzbT17YXZvaWRBc3RNdXRhdGlvbjohMH07dmFyIE1hPVt7bGluZ3Vpc3RMYW5ndWFnZUlkOjE3NCxuYW1lOlwiSlNPTi5zdHJpbmdpZnlcIix0eXBlOlwiZGF0YVwiLGNvbG9yOlwiIzI5MjkyOVwiLHRtU2NvcGU6XCJzb3VyY2UuanNvblwiLGFjZU1vZGU6XCJqc29uXCIsY29kZW1pcnJvck1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1pbWVUeXBlOlwiYXBwbGljYXRpb24vanNvblwiLGFsaWFzZXM6W1wiZ2VvanNvblwiLFwianNvbmxcIixcInRvcG9qc29uXCJdLGV4dGVuc2lvbnM6W1wiLmltcG9ydG1hcFwiXSxmaWxlbmFtZXM6W1wicGFja2FnZS5qc29uXCIsXCJwYWNrYWdlLWxvY2suanNvblwiLFwiY29tcG9zZXIuanNvblwiXSxwYXJzZXJzOltcImpzb24tc3RyaW5naWZ5XCJdLHZzY29kZUxhbmd1YWdlSWRzOltcImpzb25cIl19LHtsaW5ndWlzdExhbmd1YWdlSWQ6MTc0LG5hbWU6XCJKU09OXCIsdHlwZTpcImRhdGFcIixjb2xvcjpcIiMyOTI5MjlcIix0bVNjb3BlOlwic291cmNlLmpzb25cIixhY2VNb2RlOlwianNvblwiLGNvZGVtaXJyb3JNb2RlOlwiamF2YXNjcmlwdFwiLGNvZGVtaXJyb3JNaW1lVHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixhbGlhc2VzOltcImdlb2pzb25cIixcImpzb25sXCIsXCJ0b3BvanNvblwiXSxleHRlbnNpb25zOltcIi5qc29uXCIsXCIuNERGb3JtXCIsXCIuNERQcm9qZWN0XCIsXCIuYXZzY1wiLFwiLmdlb2pzb25cIixcIi5nbHRmXCIsXCIuaGFyXCIsXCIuaWNlXCIsXCIuSlNPTi10bUxhbmd1YWdlXCIsXCIubWNtZXRhXCIsXCIudGZzdGF0ZVwiLFwiLnRmc3RhdGUuYmFja3VwXCIsXCIudG9wb2pzb25cIixcIi53ZWJhcHBcIixcIi53ZWJtYW5pZmVzdFwiLFwiLnl5XCIsXCIueXlwXCJdLGZpbGVuYW1lczpbXCIuYWxsLWNvbnRyaWJ1dG9yc3JjXCIsXCIuYXJjY29uZmlnXCIsXCIuYXV0by1jaGFuZ2Vsb2dcIixcIi5jOHJjXCIsXCIuaHRtbGhpbnRyY1wiLFwiLmltZ2JvdGNvbmZpZ1wiLFwiLm55Y3JjXCIsXCIudGVybi1jb25maWdcIixcIi50ZXJuLXByb2plY3RcIixcIi53YXRjaG1hbmNvbmZpZ1wiLFwiUGlwZmlsZS5sb2NrXCIsXCJjb21wb3Nlci5sb2NrXCIsXCJmbGFrZS5sb2NrXCIsXCJtY21vZC5pbmZvXCIsXCIuYmFiZWxyY1wiLFwiLmpzY3NyY1wiLFwiLmpzaGludHJjXCIsXCIuanNsaW50cmNcIixcIi5zd2NyY1wiXSxwYXJzZXJzOltcImpzb25cIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1wianNvblwiXX0se2xpbmd1aXN0TGFuZ3VhZ2VJZDo0MjMsbmFtZTpcIkpTT04gd2l0aCBDb21tZW50c1wiLHR5cGU6XCJkYXRhXCIsY29sb3I6XCIjMjkyOTI5XCIsZ3JvdXA6XCJKU09OXCIsdG1TY29wZTpcInNvdXJjZS5qc1wiLGFjZU1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1vZGU6XCJqYXZhc2NyaXB0XCIsY29kZW1pcnJvck1pbWVUeXBlOlwidGV4dC9qYXZhc2NyaXB0XCIsYWxpYXNlczpbXCJqc29uY1wiXSxleHRlbnNpb25zOltcIi5qc29uY1wiLFwiLmNvZGUtc25pcHBldHNcIixcIi5jb2RlLXdvcmtzcGFjZVwiLFwiLnN1YmxpbWUtYnVpbGRcIixcIi5zdWJsaW1lLWNvbW1hbmRzXCIsXCIuc3VibGltZS1jb21wbGV0aW9uc1wiLFwiLnN1YmxpbWUta2V5bWFwXCIsXCIuc3VibGltZS1tYWNyb1wiLFwiLnN1YmxpbWUtbWVudVwiLFwiLnN1YmxpbWUtbW91c2VtYXBcIixcIi5zdWJsaW1lLXByb2plY3RcIixcIi5zdWJsaW1lLXNldHRpbmdzXCIsXCIuc3VibGltZS10aGVtZVwiLFwiLnN1YmxpbWUtd29ya3NwYWNlXCIsXCIuc3VibGltZV9tZXRyaWNzXCIsXCIuc3VibGltZV9zZXNzaW9uXCJdLGZpbGVuYW1lczpbXSxwYXJzZXJzOltcImpzb25jXCJdLHZzY29kZUxhbmd1YWdlSWRzOltcImpzb25jXCJdfSx7bGluZ3Vpc3RMYW5ndWFnZUlkOjE3NSxuYW1lOlwiSlNPTjVcIix0eXBlOlwiZGF0YVwiLGNvbG9yOlwiIzI2N0NCOVwiLGV4dGVuc2lvbnM6W1wiLmpzb241XCJdLHRtU2NvcGU6XCJzb3VyY2UuanNcIixhY2VNb2RlOlwiamF2YXNjcmlwdFwiLGNvZGVtaXJyb3JNb2RlOlwiamF2YXNjcmlwdFwiLGNvZGVtaXJyb3JNaW1lVHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixwYXJzZXJzOltcImpzb241XCJdLHZzY29kZUxhbmd1YWdlSWRzOltcImpzb241XCJdfV07dmFyIGpzPXt9O3hyKGpzLHtnZXRWaXNpdG9yS2V5czooKT0+SmEsbWFzc2FnZUFzdE5vZGU6KCk9PldhLHByaW50OigpPT5hbX0pO3ZhciB1bT17SnNvblJvb3Q6W1wibm9kZVwiXSxBcnJheUV4cHJlc3Npb246W1wiZWxlbWVudHNcIl0sT2JqZWN0RXhwcmVzc2lvbjpbXCJwcm9wZXJ0aWVzXCJdLE9iamVjdFByb3BlcnR5OltcImtleVwiLFwidmFsdWVcIl0sVW5hcnlFeHByZXNzaW9uOltcImFyZ3VtZW50XCJdLE51bGxMaXRlcmFsOltdLEJvb2xlYW5MaXRlcmFsOltdLFN0cmluZ0xpdGVyYWw6W10sTnVtZXJpY0xpdGVyYWw6W10sSWRlbnRpZmllcjpbXSxUZW1wbGF0ZUxpdGVyYWw6W1wicXVhc2lzXCJdLFRlbXBsYXRlRWxlbWVudDpbXX0sUmE9dW07dmFyIGltPUJyKFJhKSxKYT1pbTtmdW5jdGlvbiBhbShlLHQscil7bGV0e25vZGU6bn09ZTtzd2l0Y2gobi50eXBlKXtjYXNlXCJKc29uUm9vdFwiOnJldHVybltyKFwibm9kZVwiKSxGXTtjYXNlXCJBcnJheUV4cHJlc3Npb25cIjp7aWYobi5lbGVtZW50cy5sZW5ndGg9PT0wKXJldHVyblwiW11cIjtsZXQgcz1lLm1hcCgoKT0+ZS5ub2RlPT09bnVsbD9cIm51bGxcIjpyKCksXCJlbGVtZW50c1wiKTtyZXR1cm5bXCJbXCIsZihbRixiKFtcIixcIixGXSxzKV0pLEYsXCJdXCJdfWNhc2VcIk9iamVjdEV4cHJlc3Npb25cIjpyZXR1cm4gbi5wcm9wZXJ0aWVzLmxlbmd0aD09PTA/XCJ7fVwiOltcIntcIixmKFtGLGIoW1wiLFwiLEZdLGUubWFwKHIsXCJwcm9wZXJ0aWVzXCIpKV0pLEYsXCJ9XCJdO2Nhc2VcIk9iamVjdFByb3BlcnR5XCI6cmV0dXJuW3IoXCJrZXlcIiksXCI6IFwiLHIoXCJ2YWx1ZVwiKV07Y2FzZVwiVW5hcnlFeHByZXNzaW9uXCI6cmV0dXJuW24ub3BlcmF0b3I9PT1cIitcIj9cIlwiOm4ub3BlcmF0b3IscihcImFyZ3VtZW50XCIpXTtjYXNlXCJOdWxsTGl0ZXJhbFwiOnJldHVyblwibnVsbFwiO2Nhc2VcIkJvb2xlYW5MaXRlcmFsXCI6cmV0dXJuIG4udmFsdWU/XCJ0cnVlXCI6XCJmYWxzZVwiO2Nhc2VcIlN0cmluZ0xpdGVyYWxcIjpyZXR1cm4gSlNPTi5zdHJpbmdpZnkobi52YWx1ZSk7Y2FzZVwiTnVtZXJpY0xpdGVyYWxcIjpyZXR1cm4gcWEoZSk/SlNPTi5zdHJpbmdpZnkoU3RyaW5nKG4udmFsdWUpKTpKU09OLnN0cmluZ2lmeShuLnZhbHVlKTtjYXNlXCJJZGVudGlmaWVyXCI6cmV0dXJuIHFhKGUpP0pTT04uc3RyaW5naWZ5KG4ubmFtZSk6bi5uYW1lO2Nhc2VcIlRlbXBsYXRlTGl0ZXJhbFwiOnJldHVybiByKFtcInF1YXNpc1wiLDBdKTtjYXNlXCJUZW1wbGF0ZUVsZW1lbnRcIjpyZXR1cm4gSlNPTi5zdHJpbmdpZnkobi52YWx1ZS5jb29rZWQpO2RlZmF1bHQ6dGhyb3cgbmV3IE5lKG4sXCJKU09OXCIpfX1mdW5jdGlvbiBxYShlKXtyZXR1cm4gZS5rZXk9PT1cImtleVwiJiZlLnBhcmVudC50eXBlPT09XCJPYmplY3RQcm9wZXJ0eVwifXZhciBvbT1uZXcgU2V0KFtcInN0YXJ0XCIsXCJlbmRcIixcImV4dHJhXCIsXCJsb2NcIixcImNvbW1lbnRzXCIsXCJsZWFkaW5nQ29tbWVudHNcIixcInRyYWlsaW5nQ29tbWVudHNcIixcImlubmVyQ29tbWVudHNcIixcImVycm9yc1wiLFwicmFuZ2VcIixcInRva2Vuc1wiXSk7ZnVuY3Rpb24gV2EoZSx0KXtsZXR7dHlwZTpyfT1lO2lmKHI9PT1cIk9iamVjdFByb3BlcnR5XCIpe2xldHtrZXk6bn09ZTtuLnR5cGU9PT1cIklkZW50aWZpZXJcIj90LmtleT17dHlwZTpcIlN0cmluZ0xpdGVyYWxcIix2YWx1ZTpuLm5hbWV9Om4udHlwZT09PVwiTnVtZXJpY0xpdGVyYWxcIiYmKHQua2V5PXt0eXBlOlwiU3RyaW5nTGl0ZXJhbFwiLHZhbHVlOlN0cmluZyhuLnZhbHVlKX0pO3JldHVybn1pZihyPT09XCJVbmFyeUV4cHJlc3Npb25cIiYmZS5vcGVyYXRvcj09PVwiK1wiKXJldHVybiB0LmFyZ3VtZW50O2lmKHI9PT1cIkFycmF5RXhwcmVzc2lvblwiKXtmb3IobGV0W24sc11vZiBlLmVsZW1lbnRzLmVudHJpZXMoKSlzPT09bnVsbCYmdC5lbGVtZW50cy5zcGxpY2UobiwwLHt0eXBlOlwiTnVsbExpdGVyYWxcIn0pO3JldHVybn1pZihyPT09XCJUZW1wbGF0ZUxpdGVyYWxcIilyZXR1cm57dHlwZTpcIlN0cmluZ0xpdGVyYWxcIix2YWx1ZTplLnF1YXNpc1swXS52YWx1ZS5jb29rZWR9fVdhLmlnbm9yZWRQcm9wZXJ0aWVzPW9tO3ZhciBadD17YnJhY2tldFNwYWNpbmc6e2NhdGVnb3J5OlwiQ29tbW9uXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiEwLGRlc2NyaXB0aW9uOlwiUHJpbnQgc3BhY2VzIGJldHdlZW4gYnJhY2tldHMuXCIsb3Bwb3NpdGVEZXNjcmlwdGlvbjpcIkRvIG5vdCBwcmludCBzcGFjZXMgYmV0d2VlbiBicmFja2V0cy5cIn0sb2JqZWN0V3JhcDp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJIb3cgdG8gd3JhcCBvYmplY3QgbGl0ZXJhbHMuXCIsY2hvaWNlczpbe3ZhbHVlOlwicHJlc2VydmVcIixkZXNjcmlwdGlvbjpcIktlZXAgYXMgbXVsdGktbGluZSwgaWYgdGhlcmUgaXMgYSBuZXdsaW5lIGJldHdlZW4gdGhlIG9wZW5pbmcgYnJhY2UgYW5kIGZpcnN0IHByb3BlcnR5LlwifSx7dmFsdWU6XCJjb2xsYXBzZVwiLGRlc2NyaXB0aW9uOlwiRml0IHRvIGEgc2luZ2xlIGxpbmUgd2hlbiBwb3NzaWJsZS5cIn1dfSxzaW5nbGVRdW90ZTp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJVc2Ugc2luZ2xlIHF1b3RlcyBpbnN0ZWFkIG9mIGRvdWJsZSBxdW90ZXMuXCJ9LHByb3NlV3JhcDp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJIb3cgdG8gd3JhcCBwcm9zZS5cIixjaG9pY2VzOlt7dmFsdWU6XCJhbHdheXNcIixkZXNjcmlwdGlvbjpcIldyYXAgcHJvc2UgaWYgaXQgZXhjZWVkcyB0aGUgcHJpbnQgd2lkdGguXCJ9LHt2YWx1ZTpcIm5ldmVyXCIsZGVzY3JpcHRpb246XCJEbyBub3Qgd3JhcCBwcm9zZS5cIn0se3ZhbHVlOlwicHJlc2VydmVcIixkZXNjcmlwdGlvbjpcIldyYXAgcHJvc2UgYXMtaXMuXCJ9XX0sYnJhY2tldFNhbWVMaW5lOntjYXRlZ29yeTpcIkNvbW1vblwiLHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMSxkZXNjcmlwdGlvbjpcIlB1dCA+IG9mIG9wZW5pbmcgdGFncyBvbiB0aGUgbGFzdCBsaW5lIGluc3RlYWQgb2Ygb24gYSBuZXcgbGluZS5cIn0sc2luZ2xlQXR0cmlidXRlUGVyTGluZTp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJFbmZvcmNlIHNpbmdsZSBhdHRyaWJ1dGUgcGVyIGxpbmUgaW4gSFRNTCwgVnVlIGFuZCBKU1guXCJ9fTt2YXIgU3Q9XCJKYXZhU2NyaXB0XCIscG09e2Fycm93UGFyZW5zOntjYXRlZ29yeTpTdCx0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcImFsd2F5c1wiLGRlc2NyaXB0aW9uOlwiSW5jbHVkZSBwYXJlbnRoZXNlcyBhcm91bmQgYSBzb2xlIGFycm93IGZ1bmN0aW9uIHBhcmFtZXRlci5cIixjaG9pY2VzOlt7dmFsdWU6XCJhbHdheXNcIixkZXNjcmlwdGlvbjpcIkFsd2F5cyBpbmNsdWRlIHBhcmVucy4gRXhhbXBsZTogYCh4KSA9PiB4YFwifSx7dmFsdWU6XCJhdm9pZFwiLGRlc2NyaXB0aW9uOlwiT21pdCBwYXJlbnMgd2hlbiBwb3NzaWJsZS4gRXhhbXBsZTogYHggPT4geGBcIn1dfSxicmFja2V0U2FtZUxpbmU6WnQuYnJhY2tldFNhbWVMaW5lLG9iamVjdFdyYXA6WnQub2JqZWN0V3JhcCxicmFja2V0U3BhY2luZzpadC5icmFja2V0U3BhY2luZyxqc3hCcmFja2V0U2FtZUxpbmU6e2NhdGVnb3J5OlN0LHR5cGU6XCJib29sZWFuXCIsZGVzY3JpcHRpb246XCJQdXQgPiBvbiB0aGUgbGFzdCBsaW5lIGluc3RlYWQgb2YgYXQgYSBuZXcgbGluZS5cIixkZXByZWNhdGVkOlwiMi40LjBcIn0sc2VtaTp7Y2F0ZWdvcnk6U3QsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiEwLGRlc2NyaXB0aW9uOlwiUHJpbnQgc2VtaWNvbG9ucy5cIixvcHBvc2l0ZURlc2NyaXB0aW9uOlwiRG8gbm90IHByaW50IHNlbWljb2xvbnMsIGV4Y2VwdCBhdCB0aGUgYmVnaW5uaW5nIG9mIGxpbmVzIHdoaWNoIG1heSBuZWVkIHRoZW0uXCJ9LGV4cGVyaW1lbnRhbE9wZXJhdG9yUG9zaXRpb246e2NhdGVnb3J5OlN0LHR5cGU6XCJjaG9pY2VcIixkZWZhdWx0OlwiZW5kXCIsZGVzY3JpcHRpb246XCJXaGVyZSB0byBwcmludCBvcGVyYXRvcnMgd2hlbiBiaW5hcnkgZXhwcmVzc2lvbnMgd3JhcCBsaW5lcy5cIixjaG9pY2VzOlt7dmFsdWU6XCJzdGFydFwiLGRlc2NyaXB0aW9uOlwiUHJpbnQgb3BlcmF0b3JzIGF0IHRoZSBzdGFydCBvZiBuZXcgbGluZXMuXCJ9LHt2YWx1ZTpcImVuZFwiLGRlc2NyaXB0aW9uOlwiUHJpbnQgb3BlcmF0b3JzIGF0IHRoZSBlbmQgb2YgcHJldmlvdXMgbGluZXMuXCJ9XX0sZXhwZXJpbWVudGFsVGVybmFyaWVzOntjYXRlZ29yeTpTdCx0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJVc2UgY3VyaW91cyB0ZXJuYXJpZXMsIHdpdGggdGhlIHF1ZXN0aW9uIG1hcmsgYWZ0ZXIgdGhlIGNvbmRpdGlvbi5cIixvcHBvc2l0ZURlc2NyaXB0aW9uOlwiRGVmYXVsdCBiZWhhdmlvciBvZiB0ZXJuYXJpZXM7IGtlZXAgcXVlc3Rpb24gbWFya3Mgb24gdGhlIHNhbWUgbGluZSBhcyB0aGUgY29uc2VxdWVudC5cIn0sc2luZ2xlUXVvdGU6WnQuc2luZ2xlUXVvdGUsanN4U2luZ2xlUXVvdGU6e2NhdGVnb3J5OlN0LHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMSxkZXNjcmlwdGlvbjpcIlVzZSBzaW5nbGUgcXVvdGVzIGluIEpTWC5cIn0scXVvdGVQcm9wczp7Y2F0ZWdvcnk6U3QsdHlwZTpcImNob2ljZVwiLGRlZmF1bHQ6XCJhcy1uZWVkZWRcIixkZXNjcmlwdGlvbjpcIkNoYW5nZSB3aGVuIHByb3BlcnRpZXMgaW4gb2JqZWN0cyBhcmUgcXVvdGVkLlwiLGNob2ljZXM6W3t2YWx1ZTpcImFzLW5lZWRlZFwiLGRlc2NyaXB0aW9uOlwiT25seSBhZGQgcXVvdGVzIGFyb3VuZCBvYmplY3QgcHJvcGVydGllcyB3aGVyZSByZXF1aXJlZC5cIn0se3ZhbHVlOlwiY29uc2lzdGVudFwiLGRlc2NyaXB0aW9uOlwiSWYgYXQgbGVhc3Qgb25lIHByb3BlcnR5IGluIGFuIG9iamVjdCByZXF1aXJlcyBxdW90ZXMsIHF1b3RlIGFsbCBwcm9wZXJ0aWVzLlwifSx7dmFsdWU6XCJwcmVzZXJ2ZVwiLGRlc2NyaXB0aW9uOlwiUmVzcGVjdCB0aGUgaW5wdXQgdXNlIG9mIHF1b3RlcyBpbiBvYmplY3QgcHJvcGVydGllcy5cIn1dfSx0cmFpbGluZ0NvbW1hOntjYXRlZ29yeTpTdCx0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcImFsbFwiLGRlc2NyaXB0aW9uOlwiUHJpbnQgdHJhaWxpbmcgY29tbWFzIHdoZXJldmVyIHBvc3NpYmxlIHdoZW4gbXVsdGktbGluZS5cIixjaG9pY2VzOlt7dmFsdWU6XCJhbGxcIixkZXNjcmlwdGlvbjpcIlRyYWlsaW5nIGNvbW1hcyB3aGVyZXZlciBwb3NzaWJsZSAoaW5jbHVkaW5nIGZ1bmN0aW9uIGFyZ3VtZW50cykuXCJ9LHt2YWx1ZTpcImVzNVwiLGRlc2NyaXB0aW9uOlwiVHJhaWxpbmcgY29tbWFzIHdoZXJlIHZhbGlkIGluIEVTNSAob2JqZWN0cywgYXJyYXlzLCBldGMuKVwifSx7dmFsdWU6XCJub25lXCIsZGVzY3JpcHRpb246XCJObyB0cmFpbGluZyBjb21tYXMuXCJ9XX0sc2luZ2xlQXR0cmlidXRlUGVyTGluZTpadC5zaW5nbGVBdHRyaWJ1dGVQZXJMaW5lfSxOYT1wbTt2YXIgY209e2VzdHJlZTp2cyxcImVzdHJlZS1qc29uXCI6anN9LGxtPVsuLi5YcywuLi5NYV07dmFyIGx4PU1zO2V4cG9ydHtseCBhcyBkZWZhdWx0LGxtIGFzIGxhbmd1YWdlcyxOYSBhcyBvcHRpb25zLGNtIGFzIHByaW50ZXJzfTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLEtBQUcsT0FBTztBQUFlLElBQUksS0FBRyxPQUFHO0FBQUMsUUFBTSxVQUFVLENBQUM7QUFBQztBQUFFLElBQUksS0FBRyxDQUFDLEdBQUUsTUFBSTtBQUFDLFdBQVEsS0FBSyxFQUFFLElBQUcsR0FBRSxHQUFFLEVBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxZQUFXLEtBQUUsQ0FBQztBQUFDO0FBQUUsSUFBSSxLQUFHLENBQUMsR0FBRSxHQUFFLE1BQUksRUFBRSxJQUFJLENBQUMsS0FBRyxHQUFHLFlBQVUsQ0FBQztBQUFFLElBQUksS0FBRyxDQUFDLEdBQUUsR0FBRSxPQUFLLEdBQUcsR0FBRSxHQUFFLHlCQUF5QixHQUFjLEVBQUUsSUFBSSxDQUFDLElBQUcsS0FBRyxDQUFDLEdBQUUsR0FBRSxNQUFJLEVBQUUsSUFBSSxDQUFDLElBQUUsR0FBRyxtREFBbUQsSUFBRSxhQUFhLFVBQVEsRUFBRSxJQUFJLENBQUMsSUFBRSxFQUFFLElBQUksR0FBRSxDQUFDLEdBQUUsS0FBRyxDQUFDLEdBQUUsR0FBRSxHQUFFLE9BQUssR0FBRyxHQUFFLEdBQUUsd0JBQXdCLEdBQWdCLEVBQUUsSUFBSSxHQUFFLENBQUMsR0FBRTtBQUFHLElBQUksS0FBRztBQUFHLEdBQUcsSUFBRyxFQUFDLFdBQVUsTUFBSSxJQUFHLFNBQVEsTUFBSSxJQUFHLFVBQVMsTUFBSSxHQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsQ0FBQyxFQUFDLG9CQUFtQixLQUFJLE1BQUssY0FBYSxNQUFLLGVBQWMsU0FBUSxhQUFZLFNBQVEsY0FBYSxnQkFBZSxjQUFhLG9CQUFtQixtQkFBa0IsT0FBTSxXQUFVLFNBQVEsQ0FBQyxNQUFLLE1BQU0sR0FBRSxZQUFXLENBQUMsT0FBTSxRQUFPLFVBQVMsUUFBTyxPQUFNLFFBQU8sU0FBUSxPQUFNLFNBQVEsZUFBYyxRQUFPLFVBQVMsU0FBUSxVQUFTLFFBQU8sVUFBUyxRQUFPLFFBQU8sUUFBTyxRQUFPLFFBQU8sU0FBUSxTQUFRLFlBQVcsTUFBTSxHQUFFLFdBQVUsQ0FBQyxVQUFVLEdBQUUsY0FBYSxDQUFDLFVBQVMsTUFBSyxPQUFNLE1BQUssUUFBTyxVQUFTLE9BQU0sU0FBUSxNQUFLLFlBQVcsSUFBSSxHQUFFLFNBQVEsQ0FBQyxTQUFRLFNBQVEsVUFBUyxXQUFVLGNBQWEsWUFBVyxRQUFPLFlBQVksR0FBRSxtQkFBa0IsQ0FBQyxjQUFhLE9BQU8sRUFBQyxHQUFFLEVBQUMsb0JBQW1CLEtBQUksTUFBSyxRQUFPLE1BQUssZUFBYyxTQUFRLGFBQVksU0FBUSxjQUFhLGdCQUFlLGNBQWEsb0JBQW1CLG1CQUFrQixPQUFNLFdBQVUsU0FBUSxDQUFBLEdBQUcsWUFBVyxDQUFDLFVBQVUsR0FBRSxXQUFVLENBQUUsR0FBQyxjQUFhLENBQUMsVUFBUyxNQUFLLE9BQU0sTUFBSyxRQUFPLFVBQVMsT0FBTSxTQUFRLE1BQUssVUFBVSxHQUFFLFNBQVEsQ0FBQyxRQUFPLFlBQVksR0FBRSxtQkFBa0IsQ0FBQyxZQUFZLEVBQUMsR0FBRSxFQUFDLG9CQUFtQixLQUFJLE1BQUssT0FBTSxNQUFLLGVBQWMsU0FBUSxpQkFBZ0IsU0FBUSxjQUFhLGdCQUFlLE9BQU0sb0JBQW1CLFlBQVcsT0FBTSxRQUFPLFNBQVEsUUFBTyxZQUFXLENBQUMsTUFBTSxHQUFFLFdBQVUsUUFBTyxjQUFhLFFBQU8sU0FBUSxDQUFDLFNBQVEsY0FBYSxZQUFXLFFBQU8sY0FBYSxVQUFTLFNBQVMsR0FBRSxtQkFBa0IsQ0FBQyxpQkFBaUIsR0FBRSxPQUFNLGFBQVksR0FBRSxFQUFDLG9CQUFtQixLQUFJLE1BQUssY0FBYSxNQUFLLGVBQWMsT0FBTSxXQUFVLFNBQVEsQ0FBQyxJQUFJLEdBQUUsY0FBYSxDQUFDLFFBQU8sU0FBUyxHQUFFLFlBQVcsQ0FBQyxPQUFNLFFBQU8sTUFBTSxHQUFFLFNBQVEsYUFBWSxTQUFRLGNBQWEsZ0JBQWUsY0FBYSxvQkFBbUIsMEJBQXlCLFNBQVEsQ0FBQyxjQUFhLFVBQVUsR0FBRSxtQkFBa0IsQ0FBQyxZQUFZLEVBQUMsR0FBRSxFQUFDLG9CQUFtQixVQUFTLE1BQUssT0FBTSxNQUFLLGVBQWMsT0FBTSxXQUFVLE9BQU0sY0FBYSxZQUFXLENBQUMsTUFBTSxHQUFFLFNBQVEsY0FBYSxTQUFRLGNBQWEsZ0JBQWUsT0FBTSxvQkFBbUIsWUFBVyxTQUFRLENBQUMsY0FBYSxVQUFVLEdBQUUsbUJBQWtCLENBQUMsaUJBQWlCLEVBQUMsQ0FBQztBQUFFLElBQUksS0FBRztBQUFHLEdBQUcsSUFBRyxFQUFDLGtCQUFpQixNQUFJLElBQUcsT0FBTSxNQUFJLElBQUcsc0JBQXFCLE1BQUksSUFBRyxzQkFBcUIsTUFBSSxJQUFHLGdCQUFlLE1BQUksSUFBRyxnQkFBZSxNQUFJLElBQUcsY0FBYSxNQUFJLElBQUcsZ0JBQWUsTUFBSSxJQUFHLE9BQU0sTUFBSSxJQUFHLGdCQUFlLE1BQUksSUFBRyxPQUFNLE1BQUksSUFBRyxjQUFhLE1BQUksSUFBRyxzQkFBcUIsTUFBSSxHQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsQ0FBQyxHQUFFLEdBQUUsR0FBRSxNQUFJO0FBQUMsTUFBRyxFQUFFLEtBQUcsS0FBRyxNQUFNLFFBQU8sRUFBRSxhQUFXLEVBQUUsV0FBVyxHQUFFLENBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxRQUFRLEdBQUUsQ0FBQyxJQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUMsR0FBRSxJQUFFO0FBQUcsSUFBSSxLQUFHLENBQUMsR0FBRSxHQUFFLE1BQUk7QUFBQyxNQUFHLEVBQUUsS0FBRyxLQUFHLE1BQU0sUUFBTyxNQUFNLFFBQVEsQ0FBQyxLQUFHLE9BQU8sS0FBRyxXQUFTLEVBQUUsSUFBRSxJQUFFLEVBQUUsU0FBTyxJQUFFLENBQUMsSUFBRSxFQUFFLEdBQUcsQ0FBQztBQUFDLEdBQUUsSUFBRTtBQUFHLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxNQUFJLFFBQU0sT0FBTyxLQUFHO0FBQVE7QUFBQyxJQUFJLEtBQUc7QUFBRyxVQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLGdCQUFlLEdBQUUsUUFBTyxJQUFFLE1BQUksS0FBRSxJQUFFLEdBQUUsSUFBRSxPQUFHLEdBQUcsQ0FBQyxLQUFHLEVBQUUsQ0FBQztBQUFFLFdBQVEsS0FBSyxFQUFFLENBQUMsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFHLE1BQU0sUUFBUSxDQUFDLEVBQUUsVUFBUSxLQUFLLEVBQUUsR0FBRSxDQUFDLE1BQUksTUFBTTtBQUFBLFFBQVEsR0FBRSxDQUFDLE1BQUksTUFBTTtBQUFBLEVBQUU7QUFBQztBQUFDLFVBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxhQUFRLEtBQUssR0FBRyxHQUFFLENBQUMsRUFBRSxPQUFNLEdBQUUsRUFBRSxLQUFLLENBQUM7QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxFQUFDLGdCQUFlLEdBQUUsV0FBVSxFQUFDLEdBQUU7QUFBQyxXQUFRLEtBQUssR0FBRyxHQUFFLEVBQUMsZ0JBQWUsRUFBQyxDQUFDLEVBQUUsS0FBRyxFQUFFLENBQUMsRUFBRSxRQUFNO0FBQUc7QUFBUTtBQUFDLElBQUksS0FBRyxNQUFJO0FBQTJnWixTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sTUFBSSxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUc7QUFBSztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxLQUFHLFFBQU0sS0FBRyxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxLQUFHLFFBQU0sS0FBRyxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLEtBQUcsUUFBTSxLQUFHLFFBQU0sS0FBRyxRQUFNLEtBQUcsUUFBTSxNQUFJLFFBQU0sS0FBRyxRQUFNLEtBQUcsUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxRQUFNLE1BQUksUUFBTSxNQUFJLFFBQU0sTUFBSSxTQUFPLE1BQUksU0FBTyxNQUFJLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxNQUFJLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxNQUFJLFNBQU8sTUFBSSxTQUFPLE1BQUksU0FBTyxNQUFJLFNBQU8sTUFBSSxTQUFPLE1BQUksU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxTQUFPLE1BQUksU0FBTyxNQUFJLFNBQU8sS0FBRyxTQUFPLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLE1BQUksVUFBUSxNQUFJLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxNQUFJLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxNQUFJLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxNQUFJLFVBQVEsTUFBSSxVQUFRLE1BQUksVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLE1BQUksVUFBUSxNQUFJLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLE1BQUksVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLE1BQUksVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLE1BQUksVUFBUSxNQUFJLFVBQVEsTUFBSSxVQUFRLE1BQUksVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsTUFBSSxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLE1BQUksVUFBUSxNQUFJLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLE1BQUksVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHLFVBQVEsS0FBRyxVQUFRLEtBQUcsVUFBUSxLQUFHO0FBQU07QUFBQyxJQUFJLEtBQUcsT0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQztBQUFHLElBQUksS0FBRztBQUFnQixTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsQ0FBQyxFQUFFLFFBQU87QUFBRSxNQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxRQUFPLEVBQUU7QUFBTyxNQUFFLEVBQUUsUUFBUSxHQUFJLEdBQUMsSUFBSTtBQUFFLE1BQUksSUFBRTtBQUFFLFdBQVEsS0FBSyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsWUFBWSxDQUFDO0FBQUUsU0FBRyxNQUFJLEtBQUcsT0FBSyxLQUFHLE9BQUssS0FBRyxPQUFLLEtBQUcsUUFBTSxLQUFHLEdBQUcsQ0FBQyxJQUFFLElBQUU7QUFBQSxFQUFFO0FBQUMsU0FBTztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFNLENBQUMsR0FBRSxHQUFFLE1BQUk7QUFBQyxRQUFJLElBQUUsQ0FBQyxFQUFFLEtBQUcsUUFBTSxFQUFFO0FBQVcsUUFBRyxNQUFJLE1BQUcsUUFBTTtBQUFHLFFBQUcsRUFBQyxRQUFPLEVBQUMsSUFBRSxHQUFFLElBQUU7QUFBRSxXQUFLLEtBQUcsS0FBRyxJQUFFLEtBQUc7QUFBQyxVQUFJLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBRSxVQUFHLGFBQWEsUUFBTztBQUFDLFlBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQU87QUFBQSxNQUFDLFdBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQU87QUFBRSxVQUFFLE1BQUk7QUFBQSxJQUFHO0FBQUMsV0FBTyxNQUFJLE1BQUksTUFBSSxJQUFFLElBQUU7QUFBQSxFQUFFO0FBQUM7QUFBSSxJQUFjLEtBQUcsR0FBRyxJQUFJLEdBQUUsS0FBRyxHQUFHLE1BQU0sR0FBRSxLQUFHLEdBQUcsVUFBVTtBQUFFLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxDQUFDLEVBQUUsS0FBRyxRQUFNLEVBQUU7QUFBVyxNQUFHLE1BQUksTUFBRyxRQUFNO0FBQUcsTUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUUsTUFBRyxHQUFFO0FBQUMsUUFBRyxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksUUFBTSxNQUFJO0FBQUEsRUFDaDZsQixRQUFPLElBQUU7QUFBRSxRQUFHLE1BQUk7QUFBQSxLQUNqQixNQUFJLFFBQU0sTUFBSSxZQUFVLE1BQUksU0FBUyxRQUFPLElBQUU7QUFBQSxFQUFDLE9BQUs7QUFBQyxRQUFHLE1BQUksUUFBTSxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUk7QUFBQSxFQUNuRixRQUFPLElBQUU7QUFBRSxRQUFHLE1BQUk7QUFBQSxLQUNqQixNQUFJLFFBQU0sTUFBSSxZQUFVLE1BQUksU0FBUyxRQUFPLElBQUU7QUFBQSxFQUFDO0FBQUMsU0FBTztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUUsR0FBRSxJQUFFLElBQUc7QUFBQyxNQUFJLElBQUUsR0FBRyxHQUFFLEVBQUUsWUFBVSxJQUFFLElBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUUsU0FBTyxNQUFJO0FBQUM7QUFBQyxJQUFJLElBQUU7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxNQUFJLE1BQUcsUUFBUTtBQUFDLE1BQUcsRUFBRSxPQUFPLENBQUMsTUFBSSxPQUFLLEVBQUUsT0FBTyxJQUFFLENBQUMsTUFBSSxLQUFJO0FBQUMsYUFBUSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxFQUFFLEVBQUUsS0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFJLE9BQUssRUFBRSxPQUFPLElBQUUsQ0FBQyxNQUFJLElBQUksUUFBTyxJQUFFO0FBQUEsRUFBQztBQUFDLFNBQU87QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFPLE1BQUksUUFBRyxRQUFHLEVBQUUsT0FBTyxDQUFDLE1BQUksT0FBSyxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksTUFBSSxHQUFHLEdBQUUsQ0FBQyxJQUFFO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLE1BQUssSUFBRTtBQUFFLFNBQUssTUFBSSxJQUFHLEtBQUUsR0FBRSxJQUFFLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxTQUFPLElBQUUsR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxDQUFDLEdBQUUsTUFBSSxTQUFJLEVBQUUsR0FBRSxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sTUFBTSxRQUFRLENBQUMsS0FBRyxFQUFFLFNBQU87QUFBQztBQUFDLElBQUksSUFBRTtBQUFHLElBQUksS0FBRyxJQUFJLE1BQU0sTUFBSTtBQUFBLEdBQUcsRUFBQyxLQUFJLE1BQUksR0FBRSxDQUFDLEdBQUUsS0FBRztBQUFHLElBQUksS0FBRyxLQUFJLEtBQUc7QUFBSSxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLE1BQUksUUFBSSxNQUFJLEtBQUcsS0FBRyxJQUFHLElBQUUsTUFBSSxLQUFHLEtBQUcsSUFBRyxJQUFFLEdBQUUsSUFBRTtBQUFFLFdBQVEsS0FBSyxFQUFFLE9BQUksSUFBRSxNQUFJLE1BQUksS0FBRztBQUFJLFNBQU8sSUFBRSxJQUFFLElBQUU7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxNQUFJLE1BQUksTUFBSSxLQUFJLElBQUUsRUFBRSxPQUFHLEdBQUUsbUJBQWtC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QUFHLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFPLEVBQUUsQ0FBQyxJQUFFLEdBQUcsQ0FBQyxJQUFFLEVBQUUsR0FBRSxFQUFFLFNBQVEsT0FBRyxFQUFFLEdBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEVBQUUsT0FBTyxLQUFLLE9BQUcsRUFBRSxNQUFNLElBQUksU0FBUztBQUFBLENBQ3RTLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxVQUFPLEVBQUUsU0FBTyxxQkFBbUIsR0FBRyxDQUFDLEtBQUcsRUFBRSxTQUFPLDhCQUE0QixHQUFHLEVBQUUsS0FBSyxNQUFJLENBQUMsRUFBRSxHQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUMsV0FBVSxLQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVE7QUFBQyxNQUFJLElBQUUsRUFBRSxPQUFHLEdBQUcsR0FBRSxFQUFFLFFBQVEsR0FBRSxFQUFFO0FBQUUsU0FBTyxLQUFHLENBQUMsR0FBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsRUFBRSxVQUFRLEVBQUUsUUFBUTtBQUFDLE1BQUksSUFBRTtBQUFFLFdBQVEsS0FBSyxFQUFFLEtBQUcsR0FBRyxDQUFDLEdBQUU7QUFBQyxRQUFHLEtBQUcsR0FBRSxJQUFFLEVBQUU7RUFBUSxXQUFTLEVBQUUsQ0FBQyxHQUFFO0FBQUMsYUFBUSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUcsR0FBRyxDQUFDLEVBQUUsUUFBTTtBQUFBLEVBQUU7QUFBQyxTQUFNO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEdBQUUsUUFBTyxHQUFFLEtBQUksRUFBQyxJQUFFO0FBQUUsU0FBTyxNQUFJLFlBQVUsRUFBRSxDQUFDLEtBQUcsRUFBRSxDQUFDLEtBQUcsRUFBRSxV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QUksRUFBRSxJQUFJLE9BQUcsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxJQUFJLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUcsTUFBSSxPQUFLLE1BQUksT0FBSyxNQUFJO0FBQUc7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHLEVBQUUsS0FBSztBQUFTLE1BQUksSUFBRSxFQUFFLENBQUM7QUFBRSxXQUFRLElBQUUsRUFBRSxPQUFHLEdBQUUsRUFBRSxNQUFJLE9BQUssU0FBTyxFQUFFLFVBQVE7QUFBYTtBQUFDLElBQUksS0FBRyxvQkFBSTtBQUFRLFNBQVMsRUFBRSxHQUFFO0FBQUMsTUFBRyxHQUFHLElBQUksQ0FBQyxFQUFFLFFBQU8sR0FBRyxJQUFJLENBQUM7QUFBRSxNQUFJLElBQUUsQ0FBQTtBQUFHLFNBQU8sRUFBRSxRQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksR0FBRSxNQUFNLFFBQVEsRUFBRSxVQUFVLElBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxVQUFVLElBQUUsTUFBTSxRQUFRLEVBQUUsTUFBTSxLQUFHLEVBQUUsS0FBSyxHQUFHLEVBQUUsTUFBTSxHQUFFLEVBQUUsUUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEdBQUUsR0FBRyxJQUFJLEdBQUUsQ0FBQyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsT0FBRyxFQUFFLEdBQUUsR0FBRztBQUFFLElBQUUsUUFBTSxFQUFFLEtBQUssR0FBRSxNQUFNLEdBQUUsTUFBTSxRQUFRLEVBQUUsVUFBVSxJQUFFLEVBQUUsS0FBSyxHQUFFLFlBQVksSUFBRSxNQUFNLFFBQVEsRUFBRSxNQUFNLEtBQUcsRUFBRSxLQUFLLEdBQUUsUUFBUSxHQUFFLEVBQUUsUUFBTSxF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QUFBLE1BQU0sS0FBSztBQUFHLFlBQUcsS0FBRyxFQUFFLGVBQWUsVUFBUSxJQUFFLEVBQUUsZUFBZSxRQUFPLElBQUUsSUFBRSxHQUFFLEtBQUcsR0FBRSxFQUFFLEVBQUUsR0FBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFBQSxZQUFPLEdBQUUsS0FBSyxFQUFFLFFBQVE7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFHLFVBQUUsS0FBSyxFQUFFLFFBQVE7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFHO0FBQUEsTUFBTTtBQUFRLGNBQU0sSUFBSSxHQUFHLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUcsT0FBTyxLQUFHLFNBQVMsUUFBTyxFQUFFLENBQUM7QUFBRSxNQUFJLElBQUUsb0JBQUk7QUFBSSxTQUFPLEVBQUUsQ0FBQztBQUFFLFdBQVMsRUFBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFFBQU8sRUFBRSxJQUFJLENBQUM7QUFBRSxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsV0FBTyxFQUFFLElBQUksR0FBRSxDQUFDLEdBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxFQUFFLEdBQUU7QUFBQyxZQUFPLEdBQUcsQ0FBQyxHQUFHO0FBQUEsTUFBQSxLQUFLO0FBQUcsZUFBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBRyxlQUFPLEVBQUUsRUFBQyxHQUFHLEdBQUUsT0FBTSxFQUFFLE1BQU0sSUFBSSxDQUFDLEVBQUMsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFHLGVBQU8sRUFBRSxFQUFDLEdBQUcsR0FBRSxlQUFjLEVBQUUsRUFBRSxhQUFhLEdBQUUsY0FBYSxFQUFFLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFBQSxNQUFFLEtBQUssSUFBRztBQUFDLFlBQUcsRUFBQyxnQkFBZSxHQUFFLFVBQVMsRUFBQyxJQUFFO0FBQUUsZUFBTyxLQUFHLElBQUUsRUFBRSxJQUFJLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQyxLQUFHLElBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxFQUFDLEdBQUcsR0FBRSxVQUFTLEdBQUUsZ0JBQWUsRUFBQyxDQUFDO0FBQUEsTUFBQztBQUFBLE1BQUMsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFHLGVBQU8sRUFBRSxFQUFDLEdBQUcsR0FBRSxVQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUMsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFHLGVBQU8sRUFBRSxDQUFDO0FBQUEsTUFBRTtBQUFRLGNBQU0sSUFBSSxHQUFHLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUUsSUFBRTtBQUFHLFdBQVMsRUFBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLFFBQU07QUFBRyxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBSSxXQUFTLElBQUUsTUFBRyxJQUFFO0FBQUEsRUFBRTtBQUFDLFNBQU8sR0FBRyxHQUFFLENBQUMsR0FBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLEVBQUUsU0FBTyxNQUFJLEVBQUUsU0FBTyxFQUFFLFNBQU8sTUFBSSxFQUFFLFFBQU0sRUFBRSxTQUFPLEdBQUcsUUFBTTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsR0FBRSxJQUFHLEtBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxFQUFFLFNBQU8sR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLE9BQUcsR0FBRSxFQUFFO0FBQUUsS0FBQyxFQUFFLGtCQUFnQixDQUFDLEVBQUUsVUFBUSxFQUFFLFFBQU07QUFBQSxFQUFhO0FBQUMsU0FBTztBQUFJO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLElBQUUsb0JBQUksT0FBSSxJQUFFLENBQUU7QUFBQyxXQUFTLEVBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxTQUFPLE1BQUksR0FBRyxDQUFDLEdBQUUsRUFBRSxTQUFPLElBQUc7QUFBQyxVQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtBQUFTLFFBQUUsSUFBSSxDQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEVBQUUsR0FBRTtBQUFDLE1BQUUsU0FBTyxNQUFJLEVBQUUsTUFBTSxTQUFPLEdBQUcsQ0FBQztBQUFBLEVBQUM7QUFBQyxLQUFHLEdBQUUsR0FBRSxHQUFFLElBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLFNBQU8sTUFBSSxDQUFDLEVBQUUsT0FBSyxFQUFFLE9BQUssS0FBRyxNQUFJLEVBQUUsU0FBTyxLQUFHLEVBQUUsZUFBYTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsR0FBRSxFQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFVBQU8sR0FBRyxDQUFDLEdBQUM7QUFBQSxJQUFFLEtBQUs7QUFBRyxVQUFHLEVBQUUsTUFBTSxNQUFNLE9BQUcsTUFBSSxFQUFFLEVBQUUsUUFBTTtBQUFHO0FBQUEsSUFBTSxLQUFLO0FBQUcsVUFBRyxDQUFDLEVBQUUsWUFBVSxDQUFDLEVBQUUsTUFBSSxDQUFDLEVBQUUsU0FBTyxDQUFDLEVBQUUsZUFBZSxRQUFNO0FBQUcsVUFBRyxFQUFFLFNBQVMsU0FBTyxNQUFJLEVBQUUsU0FBUyxPQUFLLEVBQUUsTUFBSSxFQUFFLFNBQVMsVUFBUSxFQUFFLFNBQU8sRUFBRSxTQUFTLG1CQUFpQixFQUFFLGVBQWUsUUFBTyxFQUFFO0FBQVM7QUFBQSxJQUFNLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBRyxVQUFHLENBQUMsRUFBRSxTQUFTLFFBQU07QUFBRztBQUFBLElBQU0sS0FBSztBQUFHLFVBQUcsQ0FBQyxFQUFFLGdCQUFjLENBQUMsRUFBRSxjQUFjLFFBQU07QUFBRztBQUFBLElBQU0sS0FBSyxJQUFHO0FBQUMsVUFBSSxJQUFFLENBQUU7QUFBQyxlQUFRLEtBQUssR0FBRTtBQUFDLFlBQUcsQ0FBQyxFQUFFO0FBQVMsWUFBRyxDQUFDLEdBQUUsR0FBRyxDQUFDLElBQUUsTUFBTSxRQUFRLENBQUMsSUFBRSxJQUFFLENBQUMsQ0FBQztBQUFFLGVBQU8sS0FBRyxZQUFVLE9BQU8sRUFBRSxPQUFHLEdBQUUsRUFBRSxLQUFHLFdBQVMsRUFBRSxFQUFFLFNBQU8sQ0FBQyxLQUFHLElBQUUsRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLEtBQUssR0FBRyxDQUFDO0FBQUEsTUFBQztBQUFDLGFBQU8sRUFBRSxXQUFTLElBQUUsS0FBRyxFQUFFLFdBQVMsSUFBRSxFQUFFLENBQUMsSUFBRTtBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBRztBQUFBLElBQU07QUFBUSxZQUFNLElBQUksR0FBRyxDQUFDO0FBQUEsRUFBQztBQUFDLFNBQU87QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUUsT0FBRyxHQUFHLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsSUFBRSxJQUFHO0FBQUMsU0FBTyxHQUFHLEdBQUUsT0FBRyxPQUFPLEtBQUcsV0FBUyxFQUFFLEdBQUUsRUFBRSxNQUFNO0FBQUEsQ0FDN3hGLENBQUMsSUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsRUFBRSxTQUFPLEdBQUc7QUFBUTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUUsSUFBRyxLQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLFNBQU8sS0FBRyxFQUFDLEdBQUcsR0FBRSxVQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUMsSUFBRSxFQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFO0FBQUcsU0FBTyxHQUFHLEdBQUUsT0FBRztBQUFDLFlBQU8sR0FBRyxDQUFDO01BQUcsS0FBSztBQUFHLFlBQUcsTUFBSSxHQUFHO0FBQUEsTUFBTSxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUcsZUFBTyxJQUFFLE9BQUc7QUFBQSxJQUFFO0FBQUEsRUFBQyxDQUFDLEdBQUU7QUFBQztBQUFJLElBQUMsS0FBRyxNQUFJO0FBQUUsR0FBTyxLQUFHO0FBQVMsU0FBUyxFQUFFLEdBQUU7QUFBQyxTQUFhLEVBQUMsTUFBSyxJQUFHLFVBQVMsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQWEsRUFBQyxNQUFLLElBQUcsVUFBUyxHQUFFLEdBQUUsRUFBQztBQUFDO0FBQUMsU0FBUyxFQUFFLEdBQUUsSUFBRSxJQUFHO0FBQUMsU0FBYSxHQUFHLEVBQUUsY0FBaUIsR0FBRSxFQUFDLE1BQUssSUFBRyxJQUFHLEVBQUUsSUFBRyxVQUFTLEdBQUUsT0FBTSxDQUFDLENBQUMsRUFBRSxhQUFZLGdCQUFlLEVBQUUsZUFBYztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsT0FBTyxtQkFBa0IsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsSUFBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUMsR0FBRyxHQUFFLGdCQUFlLEVBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFhLEVBQUMsTUFBSyxJQUFHLE9BQU0sRUFBQztBQUFDO0FBQUMsU0FBUyxFQUFFLEdBQUUsSUFBRSxJQUFHLElBQUUsQ0FBRSxHQUFDO0FBQUMsU0FBMkIsRUFBQyxNQUFLLElBQUcsZUFBYyxHQUFFLGNBQWEsR0FBRSxTQUFRLEVBQUUsUUFBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQWEsRUFBQyxNQUFLLElBQUcsVUFBUyxHQUFFLFNBQVEsRUFBRSxTQUFRLFFBQU8sRUFBRSxPQUFNO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQWEsRUFBQyxNQUFLLElBQUcsVUFBUyxFQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUcsRUFBQyxNQUFLLEdBQUUsR0FBRSxLQUFHLEVBQUMsTUFBSyxHQUFFO0FBQUUsSUFBSSxLQUFHLEVBQUMsTUFBSyxJQUFHLE1BQUssS0FBRSxHQUFFLEtBQUcsRUFBQyxNQUFLLElBQUcsTUFBSyxNQUFHLFNBQVEsS0FBRSxHQUFFLElBQUUsRUFBQyxNQUFLLEdBQUUsR0FBRSxJQUFFLEVBQUMsTUFBSyxJQUFHLE1BQUssS0FBRSxHQUFFLElBQUUsQ0FBQyxJQUFHLEVBQUUsR0FBRSxLQUFHLENBQUMsSUFBRyxFQUFFLEdBQUUsS0FBRyxFQUFDLE1BQUssR0FBRTtBQUFFLFNBQVMsRUFBRSxHQUFFLEdBQUU7QUFBYSxNQUFJLElBQUUsQ0FBRTtBQUFDLFdBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksT0FBSSxLQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsU0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQU8sTUFBSSxJQUFFO0FBQUUsTUFBRyxJQUFFLEdBQUU7QUFBQyxhQUFRLElBQUUsR0FBRSxJQUFFLEtBQUssTUFBTSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsS0FBRSxFQUFFLENBQUM7QUFBRSxRQUFFLEdBQUcsSUFBRSxHQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsT0FBTyxtQkFBa0IsQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBYSxJQUFFLEVBQUMsTUFBSyxJQUFHLE9BQU0sR0FBRSxVQUFTLEVBQUMsSUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLElBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxNQUFNO0FBQUEsQ0FDejhDO0FBQUUsU0FBTyxFQUFFLFNBQU8sS0FBRyxFQUFFLE1BQU0sT0FBRyxFQUFFLFVBQVcsRUFBQyxDQUFDLE1BQUksR0FBRztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUssTUFBRyxHQUFHLENBQUMsRUFBRSxRQUFPLEVBQUUsYUFBYSxNQUFNLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUztBQUFDLE1BQUcsR0FBRyxDQUFDLEVBQUUsUUFBTyxHQUFHLENBQUMsSUFBRSxHQUFHLENBQUMsSUFBRSxDQUFDLE1BQUssR0FBRyxFQUFFLEtBQUssR0FBRSxJQUFJO0FBQUUsUUFBTSxJQUFJLE1BQU0sb0JBQWtCLEtBQUssVUFBVSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsTUFBTSxNQUFNO0FBQUEsQ0FDdFM7QUFBRSxTQUFNLENBQUMsTUFBSyxFQUFFLEdBQUUsRUFBRSxJQUFJLENBQUMsR0FBRSxNQUFJLE1BQUksSUFBRSxFQUFFLFFBQVMsSUFBQyxPQUFLLElBQUUsRUFBRSxTQUFPLElBQUUsRUFBRSxLQUFNLElBQUMsRUFBRSxVQUFXLEVBQUMsQ0FBQyxHQUFFLElBQUk7QUFBQztBQUFDLElBQUksS0FBRyxDQUFBO0FBQUcsR0FBRyxJQUFHLEVBQUMsV0FBVSxNQUFJLElBQUcsU0FBUSxNQUFJLElBQUcsV0FBVSxNQUFJLEdBQUUsQ0FBQztBQUFFLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFLFFBQU0sa0JBQWlCLElBQUUsT0FBTyxFQUFFLFFBQU0sRUFBRSxPQUFLLE9BQU8sRUFBRSxNQUFJLFdBQVMsRUFBRSxHQUFHLE9BQUssRUFBRSxPQUFLLEVBQUUsUUFBTSxPQUFPLEVBQUUsT0FBSyxXQUFTLEVBQUUsSUFBSSxPQUFLLEVBQUUsUUFBTSxFQUFFLFVBQVEsT0FBTyxFQUFFLFNBQU8sV0FBUyxLQUFHLE9BQU8sRUFBRSxLQUFLLE1BQUksRUFBRSxZQUFVLEVBQUU7QUFBRSxTQUFPLEVBQUUsU0FBTyxPQUFLLElBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRSxJQUFFLE1BQVUsS0FBRyxJQUFFLE1BQUksSUFBRTtBQUFHO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLEdBQUMsRUFBRSxhQUFXLEVBQUUsV0FBUyxDQUFBLElBQUssS0FBSyxDQUFDLEdBQUUsRUFBRSxVQUFRLE9BQUcsRUFBRSxrQkFBZ0IsR0FBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsSUFBRSxVQUFRLE1BQUcsRUFBRSxXQUFTLE9BQUcsR0FBRyxHQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLElBQUUsVUFBUSxPQUFHLEVBQUUsV0FBUyxPQUFHLE1BQUksRUFBRSxTQUFPLElBQUcsR0FBRyxHQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxJQUFFLFVBQVEsT0FBRyxFQUFFLFdBQVMsTUFBRyxHQUFHLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxNQUFLLElBQUU7QUFBRSxTQUFLLE1BQUksSUFBRyxLQUFFLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFFLFNBQU87QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxTQUFPLE1BQUksUUFBRyxLQUFHLEVBQUUsT0FBTyxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxFQUFFLEtBQUcsRUFBRSxPQUFPLENBQUMsTUFBSTtBQUFBLEVBQ3I4QixRQUFNO0FBQUcsU0FBUTtBQUFBO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsQ0FBQyxLQUFHLEVBQUUsTUFBTSxDQUFDLE1BQUksT0FBSyx5QkFBeUIsS0FBSyxFQUFFLEtBQUs7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsRUFBRSxLQUFLLE9BQUcsRUFBRSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTSxDQUFDLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsRUFBRSxFQUFFLEtBQUssT0FBRyxFQUFFLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFNLENBQUMsSUFBRyxJQUFH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O0FBQUEsSUFBTTtBQUFRLFlBQU0sSUFBSSxNQUFNLG9CQUFvQixFQUFFLElBQUksR0FBRztBQUFBLEVBQUM7QUFBQyxTQUFPLEVBQUcsR0FBQyxFQUFDLEdBQUcsR0FBRSxPQUFNLEdBQUUsUUFBTyxHQUFFLE9BQU0sRUFBQztBQUFFLFdBQVMsRUFBRSxHQUFFO0FBQUMsU0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFFLEtBQUcsRUFBRSxXQUFTO0FBQUEsRUFBQztBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsU0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFFLEtBQUc7QUFBQSxFQUFDO0FBQUMsV0FBUyxJQUFHO0FBQUMsTUFBRSxVQUFRLEVBQUcsSUFBQyxFQUFDO0FBQUEsRUFBRTtBQUFDLFdBQVMsSUFBRztBQUFDLFFBQUUsS0FBRyxFQUFFLENBQUMsR0FBRSxFQUFHO0FBQUEsRUFBQTtBQUFDLFdBQVMsSUFBRztBQUFDLFFBQUUsS0FBRyxFQUFFLENBQUMsR0FBRSxFQUFDO0FBQUEsRUFBRTtBQUFDLFdBQVMsSUFBRztBQUFDLFFBQUUsR0FBRSxJQUFFO0FBQUEsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFO0FBQU8sSUFBRSxRQUFLLE9BQUs7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRyxNQUFJLElBQUc7QUFBQztBQUFJO0FBQUEsSUFBUTtBQUFDLGFBQVEsSUFBRSxFQUFFLFNBQU8sR0FBRSxLQUFHLEdBQUUsS0FBSTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFHLE1BQUksT0FBSyxNQUFJLElBQUk7QUFBQSxXQUFRO0FBQUMsVUFBRSxDQUFDLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDO0FBQUUsY0FBTTtBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLE1BQUcsSUFBRSxLQUFHLElBQUUsRUFBRSxNQUFJLEVBQUUsU0FBTyxJQUFFLEdBQUUsTUFBSyxJQUFHLEdBQUUsS0FBSyxFQUFFO0FBQUUsU0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxNQUFJLE9BQU8sa0JBQWtCLFFBQU07QUFBRyxNQUFJLElBQUUsRUFBRSxRQUFPLElBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxDQUFBO0FBQUcsU0FBSyxLQUFHLEtBQUc7QUFBQyxRQUFHLEVBQUUsV0FBUyxHQUFFO0FBQUMsVUFBRyxNQUFJLEVBQUUsUUFBTTtBQUFHLFFBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxJQUFRO0FBQUMsUUFBRyxFQUFDLE1BQUssR0FBRSxLQUFJLEVBQUMsSUFBRSxFQUFFLElBQUcsR0FBRyxJQUFFLEdBQUcsQ0FBQztBQUFFLFlBQU8sR0FBQztBQUFBLE1BQUUsS0FBSztBQUFHLFVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBRyxHQUFHLENBQUM7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFBLE1BQUcsS0FBSyxJQUFHO0FBQUMsWUFBSSxJQUFFLE1BQUksS0FBRyxJQUFFLEVBQUUsT0FBTSxJQUFFLEVBQUUsRUFBRSxLQUFHO0FBQUUsaUJBQVEsSUFBRSxFQUFFLFNBQU8sR0FBRSxLQUFHLEdBQUUsSUFBSSxHQUFFLEtBQUssRUFBQyxNQUFLLEdBQUUsS0FBSSxFQUFFLENBQUMsRUFBQyxDQUFDO0FBQUU7QUFBQSxNQUFLO0FBQUEsTUFBQyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUcsVUFBRSxLQUFLLEVBQUMsTUFBSyxHQUFFLEtBQUksRUFBRSxTQUFRLENBQUM7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFHLGFBQUcsR0FBRyxDQUFDO0FBQUU7QUFBQSxNQUFNLEtBQUssSUFBRztBQUFDLFlBQUcsS0FBRyxFQUFFLE1BQU0sUUFBUTtBQUFDLFlBQUksSUFBRSxFQUFFLFFBQU0sS0FBRyxHQUFFLElBQUUsRUFBRSxrQkFBZ0IsTUFBSSxLQUFHLEVBQUUsT0FBRyxFQUFFLGdCQUFlLEVBQUUsSUFBRSxFQUFFO0FBQVMsVUFBRSxLQUFLLEVBQUMsTUFBSyxHQUFFLEtBQUksRUFBQyxDQUFDO0FBQUU7QUFBQSxNQUFLO0FBQUEsTUFBQyxLQUFLLElBQUc7QUFBQyxZQUFJLEtBQUcsRUFBRSxVQUFRLEVBQUUsRUFBRSxPQUFPLEtBQUcsS0FBRyxPQUFLLEtBQUcsRUFBRSxnQkFBYyxFQUFFO0FBQWEsYUFBRyxFQUFFLEtBQUssRUFBQyxNQUFLLEdBQUUsS0FBSSxFQUFDLENBQUM7QUFBRTtBQUFBLE1BQUs7QUFBQSxNQUFDLEtBQUs7QUFBRyxZQUFHLE1BQUksTUFBSSxFQUFFLEtBQUssUUFBUTtBQUFDLFVBQUUsU0FBTyxFQUFFLEtBQUssR0FBRyxHQUFFO0FBQUs7QUFBQSxNQUFNLEtBQUs7QUFBRyxZQUFFO0FBQUc7QUFBQSxNQUFNLEtBQUs7QUFBRyxZQUFHLEVBQUUsUUFBTTtBQUFHO0FBQUEsSUFBSztBQUFBLEVBQUM7QUFBQyxTQUFNO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLElBQUcsSUFBRSxFQUFFLFlBQVcsSUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFFLElBQUUsR0FBRSxJQUFFLENBQUMsRUFBQyxLQUFJLEdBQUksR0FBQyxNQUFLLElBQUcsS0FBSSxFQUFDLENBQUMsR0FBRSxJQUFFLENBQUEsR0FBRyxJQUFFLE9BQUcsSUFBRSxDQUFBLEdBQUcsSUFBRTtBQUFFLE9BQUksR0FBRyxDQUFDLEdBQUUsRUFBRSxTQUFPLEtBQUc7QUFBQyxRQUFHLEVBQUMsS0FBSSxHQUFFLE1BQUssR0FBRSxLQUFJLEVBQUMsSUFBRSxFQUFFLElBQUc7QUFBRyxZQUFPLEdBQUcsQ0FBQyxHQUFHO0FBQUEsTUFBQSxLQUFLLElBQUc7QUFBQyxZQUFJLElBQUUsTUFBSTtBQUFBLElBQy9xRSxFQUFFLE9BQUcsR0FBRTtBQUFBLEdBQ1AsQ0FBQyxJQUFFO0FBQUUsVUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLFNBQU8sTUFBSSxLQUFHLEdBQUcsQ0FBQztBQUFHO0FBQUEsTUFBSztBQUFBLE1BQUMsS0FBSztBQUFHLGlCQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBRyxHQUFFLElBQUksR0FBRSxLQUFLLEVBQUMsS0FBSSxHQUFFLE1BQUssR0FBRSxLQUFJLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFHLFlBQUcsS0FBRyxFQUFFLE9BQU0sSUFBSSxNQUFNLHFDQUFxQztBQUFFLFVBQUUsS0FBSyxFQUFFLEdBQUU7QUFBSTtBQUFBLE1BQU0sS0FBSztBQUFHLFVBQUUsS0FBSyxFQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxNQUFLLEdBQUUsS0FBSSxFQUFFLFNBQVEsQ0FBQztBQUFFO0FBQUEsTUFBTSxLQUFLO0FBQUcsVUFBRSxLQUFLLEVBQUMsS0FBSSxHQUFHLEdBQUUsRUFBRSxHQUFFLENBQUMsR0FBRSxNQUFLLEdBQUUsS0FBSSxFQUFFLFNBQVEsQ0FBQztBQUFFO0FBQUEsTUFBTSxLQUFLO0FBQUcsYUFBRyxHQUFHLENBQUM7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFHLGdCQUFPLEdBQUc7QUFBQSxVQUFBLEtBQUs7QUFBRyxnQkFBRyxDQUFDLEdBQUU7QUFBQyxnQkFBRSxLQUFLLEVBQUMsS0FBSSxHQUFFLE1BQUssRUFBRSxRQUFNLEtBQUcsSUFBRyxLQUFJLEVBQUUsU0FBUSxDQUFDO0FBQUU7QUFBQSxZQUFLO0FBQUEsVUFBQyxLQUFLLElBQUc7QUFBQyxnQkFBRTtBQUFHLGdCQUFJLElBQUUsRUFBQyxLQUFJLEdBQUUsTUFBSyxJQUFHLEtBQUksRUFBRSxTQUFRLEdBQUUsSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU87QUFBRSxnQkFBRyxDQUFDLEVBQUUsU0FBTyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxFQUFFLEdBQUUsS0FBSyxDQUFDO0FBQUEscUJBQVUsRUFBRSxnQkFBZTtBQUFDLGtCQUFJLElBQUUsRUFBRSxPQUFHLEVBQUUsZ0JBQWUsRUFBRTtBQUFFLGtCQUFHLEVBQUUsT0FBTTtBQUFDLGtCQUFFLEtBQUssRUFBQyxLQUFJLEdBQUUsTUFBSyxJQUFHLEtBQUksRUFBQyxDQUFDO0FBQUU7QUFBQSxjQUFLLE1BQU0sVUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLGVBQWUsU0FBTyxHQUFFLElBQUksS0FBRyxLQUFHLEVBQUUsZUFBZSxRQUFPO0FBQUMsa0JBQUUsS0FBSyxFQUFDLEtBQUksR0FBRSxNQUFLLElBQUcsS0FBSSxFQUFDLENBQUM7QUFBRTtBQUFBLGNBQUssT0FBSztBQUFDLG9CQUFJLElBQUUsRUFBRSxlQUFlLENBQUMsR0FBRSxJQUFFLEVBQUMsS0FBSSxHQUFFLE1BQUssSUFBRyxLQUFJLEVBQUM7QUFBRSxvQkFBRyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQyxHQUFFO0FBQUMsb0JBQUUsS0FBSyxDQUFDO0FBQUU7QUFBQSxnQkFBSztBQUFBLGNBQUM7QUFBQSxZQUFDLE1BQU0sR0FBRSxLQUFLLEVBQUMsS0FBSSxHQUFFLE1BQUssSUFBRyxLQUFJLEVBQUUsU0FBUSxDQUFDO0FBQUU7QUFBQSxVQUFLO0FBQUEsUUFBQztBQUFDLFVBQUUsT0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFFLEVBQUUsT0FBRyxHQUFFLEVBQUUsRUFBRTtBQUFNO0FBQUEsTUFBTSxLQUFLLElBQUc7QUFBQyxZQUFJLElBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxFQUFFLEtBQUcsR0FBRSxFQUFDLE9BQU0sRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU87QUFBRSxZQUFHLE1BQUksRUFBRTtBQUFNLFlBQUksSUFBRSxFQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUMsS0FBSSxHQUFFLE1BQUssSUFBRyxLQUFJLEVBQUMsR0FBRSxJQUFFLEVBQUMsS0FBSSxHQUFFLE1BQUssSUFBRyxLQUFJLEVBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxDQUFFLEdBQUMsR0FBRSxFQUFFLFNBQU8sR0FBRSxHQUFFLElBQUU7QUFBRSxZQUFHLE1BQUksR0FBRTtBQUFDLGNBQUUsRUFBRSxLQUFLLENBQUMsSUFBRSxFQUFFLEtBQUssQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFDLFlBQUksSUFBRSxFQUFDLEtBQUksR0FBRSxNQUFLLElBQUcsS0FBSSxFQUFDLEdBQUUsSUFBRSxFQUFDLEtBQUksR0FBRSxNQUFLLElBQUcsS0FBSSxFQUFDO0FBQUUsWUFBRyxNQUFJLEdBQUU7QUFBQyxjQUFFLEVBQUUsS0FBSyxHQUFFLENBQUMsSUFBRSxFQUFFLEtBQUssR0FBRSxDQUFDO0FBQUU7QUFBQSxRQUFLO0FBQUMsWUFBSSxLQUFHLEVBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFDLEtBQUksR0FBRSxNQUFLLEdBQUUsS0FBSSxFQUFDLEdBQUcsR0FBRSxDQUFDLEVBQUUsR0FBRSxJQUFFLEVBQUMsRUFBQztBQUFFLFdBQUcsRUFBQyxLQUFJLEdBQUUsTUFBSyxJQUFHLEtBQUksQ0FBQyxHQUFFLEdBQUUsRUFBRSxFQUFDLEdBQUUsSUFBRyxHQUFFLEVBQUUsU0FBTyxHQUFFLEdBQUUsSUFBRSxJQUFFLEVBQUUsS0FBSyxHQUFFLEdBQUUsQ0FBQyxJQUFFLElBQUUsRUFBRSxLQUFLLEdBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxLQUFLLEdBQUUsR0FBRSxDQUFDO0FBQUU7QUFBQSxNQUFLO0FBQUEsTUFBQyxLQUFLO0FBQUEsTUFBRyxLQUFLLElBQUc7QUFBQyxZQUFJLElBQUUsRUFBRSxVQUFRLEVBQUUsRUFBRSxPQUFPLElBQUU7QUFBRSxZQUFHLE1BQUksSUFBRztBQUFDLGNBQUksSUFBRSxFQUFFLFNBQU8sS0FBRyxFQUFFLGdCQUFjLEVBQUUsU0FBTyxFQUFFLFdBQVMsRUFBRSxFQUFFLFFBQVE7QUFBRSxlQUFHLEVBQUUsS0FBSyxFQUFDLEtBQUksR0FBRSxNQUFLLEdBQUUsS0FBSSxFQUFDLENBQUM7QUFBQSxRQUFDO0FBQUMsWUFBRyxNQUFJLElBQUc7QUFBQyxjQUFJLElBQUUsRUFBRSxTQUFPLEtBQUcsRUFBRSxlQUFhLEVBQUUsU0FBTyxFQUFFLEVBQUUsUUFBUSxJQUFFLEVBQUU7QUFBUyxlQUFHLEVBQUUsS0FBSyxFQUFDLEtBQUksR0FBRSxNQUFLLEdBQUUsS0FBSSxFQUFDLENBQUM7QUFBQSxRQUFDO0FBQUM7QUFBQSxNQUFLO0FBQUEsTUFBQyxLQUFLO0FBQUcsVUFBRSxLQUFLLEVBQUMsS0FBSSxHQUFFLE1BQUssR0FBRSxLQUFJLEVBQUUsU0FBUSxDQUFDO0FBQUU7QUFBQSxNQUFNLEtBQUs7QUFBRyxVQUFFLFNBQU8sS0FBRyxFQUFFLEtBQUssRUFBQyxLQUFJLEdBQUUsTUFBSyxHQUFFLEtBQUksR0FBRSxDQUFDO0FBQUU7QUFBQSxNQUFNLEtBQUs7QUFBRyxnQkFBTyxHQUFDO0FBQUEsVUFBRSxLQUFLO0FBQUcsZ0JBQUcsRUFBRSxLQUFLLEtBQUU7QUFBQSxpQkFBTztBQUFDLGdCQUFFLFNBQU8sRUFBRSxLQUFLLEdBQUcsR0FBRSxLQUFHO0FBQUc7QUFBQSxZQUFLO0FBQUEsVUFBQyxLQUFLO0FBQUcsZ0JBQUcsRUFBRSxTQUFPLEdBQUU7QUFBQyxnQkFBRSxLQUFLLEVBQUMsS0FBSSxHQUFFLE1BQUssR0FBRSxLQUFJLEVBQUMsR0FBRSxHQUFHLEVBQUUsUUFBUyxDQUFBLEdBQUUsRUFBRSxTQUFPO0FBQUU7QUFBQSxZQUFLO0FBQUMsY0FBRSxVQUFRLEVBQUUsUUFBTSxFQUFFLEtBQUssR0FBRSxFQUFFLEtBQUssS0FBSyxHQUFFLElBQUUsRUFBRSxLQUFLLFdBQVMsRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLE1BQUksS0FBRyxHQUFHLENBQUMsR0FBRSxFQUFFLEtBQUssSUFBRSxFQUFFLEtBQUssR0FBRSxJQUFFLEVBQUU7QUFBUTtBQUFBLFFBQUs7QUFBQztBQUFBLE1BQU0sS0FBSztBQUFHLFVBQUUsS0FBSyxFQUFDLEtBQUksR0FBRSxNQUFLLEdBQUUsS0FBSSxFQUFFLFNBQVEsQ0FBQztBQUFFO0FBQUEsTUFBTSxLQUFLO0FBQUc7QUFBQSxNQUFNO0FBQVEsY0FBTSxJ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O0FBQUMsSUFBSSxLQUFHO0FBQUcsSUFBSSxLQUFHO0FBQUUsZUFBZSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUU7QUFBRyxPQUFHLEtBQUcsTUFBSTtBQUFFLE1BQUksSUFBRSxPQUFHLDZCQUE2QixDQUFDLElBQUksQ0FBQyxVQUFTLElBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxHQUFFLEdBQUUsTUFBSSxNQUFJLEVBQUUsU0FBTyxJQUFFLEVBQUUsTUFBTSxTQUFPLEVBQUUsTUFBTSxTQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsSUFBSSxPQUFPLEVBQUUsT0FBTyxVQUFVLEdBQUUsSUFBSSxHQUFFLElBQUUsR0FBRSxJQUFFLE1BQU0sRUFBRSxHQUFFLEVBQUMsUUFBTyxHQUFFLGFBQWEsR0FBRTtBQUFDLFFBQUUsRUFBRSxTQUFTO0FBQUEsRUFBTSxFQUFDLENBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxPQUFHO0FBQUMsUUFBRyxPQUFPLEtBQUcsU0FBUyxRQUFPO0FBQUUsUUFBSSxJQUFFLENBQUUsR0FBQyxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFHLElBQUUsTUFBSSxHQUFFO0FBQUMsY0FBSSxJQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUUscUJBQW1CLElBQUUsRUFBRSxPQUFHLEdBQUUsc0JBQXFCLE9BQU8sUUFBUSxJQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUc7QUFBQSxNQUFRO0FBQUMsVUFBSSxJQUFFLE9BQU8sQ0FBQztBQUFFLFFBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQyxDQUFDLEdBQUUsSUFBRSxPQUFPLEtBQUssQ0FBQyxJQUFFLE1BQUksSUFB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RSxDQUFDLENBQUMsS0FBRyxZQUFVLE1BQU0sUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUUsUUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBRyxJQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBRSxJQUFFLENBQUMsQ0FBQyxHQUFFLENBQUM7QUFBQSxJQUFDLE1BQU0sR0FBRSxFQUFFLENBQUMsQ0FBQyxJQUFFO0FBQUEsRUFBQztBQUFDLFNBQU0sRUFBQyxVQUFTLEdBQUUsU0FBUSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQyxVQUFTLElBQUUsSUFBRyxTQUFRLElBQUUsQ0FBRSxFQUFBLEdBQUU7QUFBQyxNQUFJLElBQUU7QUFBQSxHQUM5YixJQUFFLE9BQU0sSUFBRSxNQUFLLElBQUUsT0FBTSxJQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQVEsT0FBRyxHQUFHLEdBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO0FBQUUsTUFBRyxDQUFDLEdBQUU7QUFBQyxRQUFHLEVBQUUsV0FBUyxFQUFFLFFBQU07QUFBRyxRQUFHLEVBQUUsV0FBUyxLQUFHLENBQUMsTUFBTSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFBRSxhQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFBQSxJQUFFO0FBQUEsRUFBQztBQUFDLE1BQUksSUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksT0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBRTtBQUFFLFNBQU8sSUFBRSxLQUFHLElBQUUsSUFBRSxPQUFLLEtBQUcsRUFBRSxTQUFPLElBQUUsSUFBRSxJQUFFLE1BQUksSUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQU0sQ0FBQyxHQUFHLElBQUcsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFFLElBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQU0sQ0FBQTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLENBQUMsRUFBRSxXQUFXLElBQUksRUFBRSxRQUFNO0FBQUcsTUFBSSxJQUFFLEVBQUUsUUFBUTtBQUFBLENBQ2xkO0FBQUUsU0FBTyxNQUFJLEtBQUcsSUFBRSxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUksSUFBRSxHQUFHLENBQUM7QUFBRSxRQUFJLElBQUUsRUFBRSxNQUFNLEVBQUUsU0FBTyxDQUFDO0FBQUcsTUFBSSxJQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUMsU0FBUSxHQUFFLFVBQVMsRUFBQyxJQUFFLEdBQUcsQ0FBQztBQUFFLFNBQU0sRUFBQyxTQUFRLEdBQUUsTUFBSyxHQUFFLFNBQVEsR0FBRSxVQUFTLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxFQUFDLFNBQVEsR0FBRSxNQUFLLEdBQUUsU0FBUSxHQUFFLFVBQVMsRUFBQyxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxHQUFHLEVBQUMsU0FBUSxFQUFDLFFBQU8sSUFBRyxHQUFHLEVBQUMsR0FBRSxVQUFTLEVBQUUsVUFBUyxFQUFFLENBQUM7QUFBRSxVQUFPLElBQUUsR0FBRyxDQUFDO0FBQUEsSUFDbFUsTUFBSSxLQUFHLEVBQUUsV0FBVztBQUFBLENBQ3JCLElBQUU7QUFBQSxJQUNEO0FBQUE7QUFBQSxLQUVDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFF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T0FBRyxNQUFLLElBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLDBCQUEwQixHQUFFO0FBQUMsUUFBSSxJQUFFLEdBQUcsTUFBSyxFQUFFLEdBQUUsSUFBRTtBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxVQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUUsSUFBSTtBQUFJLFdBQU87QUFBQSxFQUFDO0FBQUEsRUFBQywyQkFBMkIsR0FBRTtBQUFDLFFBQUksSUFBRSxHQUFHLE1BQUssRUFBRSxHQUFFLElBQUU7QUFBRSxhQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBRyxLQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUUsSUFBSTtBQUFJLFdBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyxxQkFBcUIsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLDBCQUEwQixDQUFDO0FBQUUsV0FBTyxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsc0JBQXNCLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSywyQkFBMkIsQ0FBQztBQUFFLFdBQU8sRUFBRSxNQUFNLEVBQUUsU0FBTyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMscUJBQXFCLEdBQUU7QUFBQyxXQUFPLEdBQUcsTUFBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsc0JBQXNCLEdBQUU7QUFBQyxXQUFPLEdBQUcsTUFBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQUcsR0FBRSxFQUFFLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxVQUFVLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSywwQkFBMEIsQ0FBQztBQUFFLFdBQU8sRUFBRSxNQUFNLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxRQUFRLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSywyQkFBMkIsQ0FBQztBQUFFLFdBQU8sRUFBRSxNQUFNLEdBQUUs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QUFFLFNBQU8sR0FBRSxLQUFHLEdBQUUsS0FBSTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsSUFBRSxDQUFDLE1BQUksSUFBRyxLQUFHLEVBQUUsQ0FBQyxNQUFJLEtBQUcsRUFBRSxJQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsSUFBRSxDQUFDLE1BQUksR0FBRSxLQUFHLEVBQUUsQ0FBQyxNQUFJLEtBQUcsRUFBRSxDQUFDLE1BQUksTUFBSSxFQUFFLElBQUUsQ0FBQyxNQUFJLE1BQUksRUFBRSxJQUFFLENBQUMsTUFBSSxHQUFFLEtBQUcsRUFBRSxDQUFDLE1BQUksS0FBRyxFQUFFLElBQUUsQ0FBQyxNQUFJLE9BQUssRUFBRSxJQUFFLENBQUMsTUFBSSxLQUFHLEVBQUUsSUFBRSxDQUFDLE1BQUksSUFBRyxLQUFHLEVBQUUsQ0FBQyxNQUFJLEtBQUcsRUFBRSxJQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsSUFBRSxDQUFDLE1BQUksR0FBRSxJQUFFLEVBQUUsQ0FBQyxNQUFJLEtBQUcsRUFBRSxJQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsSUFBRSxDQUFDLE1BQUksS0FBRyxFQUFFLENBQUMsTUFBSSxLQUFHLEVBQUUsSUFBRSxDQUFDLE1BQUksTUFBSSxFQUFFLElBQUUsQ0FBQyxNQUFJO0FBQUUsVUFBSSxLQUFHLEtBQUcsS0FBRyxNQUFJLElBQUUsRUFBRSxPQUFPLEdBQUUsQ0FBQyxJQUFFLE1BQUksRUFBRSxPQUFPLElBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFDLFNBQUssRUFBRSxTQUFPLEtBQUcsR0FBRyxFQUFFLE9BQUcsR0FBRSxFQUFFLENBQUMsSUFBRyxHQUFFO0FBQU0sU0FBSyxFQUFFLFNBQU8sS0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFHLEdBQUUsTUFBSyxHQUFHLEVBQUUsTUFBTztBQUFDLE1BQUksSUFBRSxDQUFDLEVBQUU7QUFBRSxXQUFPLENBQUMsR0FBRSxDQUFDLEtBQUksRUFBRSxRQUFTLEdBQUM7QUFBQyxRQUFHLE1BQUksR0FBRTtBQUFDLFVBQUcsTUFBSSxLQUFHLEdBQUcsRUFBRSxJQUFFLENBQUMsQ0FBQyxHQUFFO0FBQUMsWUFBRyxFQUFFLFdBQVMsR0FBRTtBQUFDLFlBQUUsS0FBSyxDQUFDLEVBQUUsSUFBRyxHQUFHLENBQUMsQ0FBQztBQUFFO0FBQUEsUUFBUTtBQUFDLFVBQUUsS0FBSyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEVBQUU7QUFBRTtBQUFBLE1BQVEsV0FBUyxNQUFJLEVBQUUsU0FBTyxHQUFFO0FBQUMsVUFBRSxLQUFLLENBQUMsRUFBRSxJQUFLLEdBQUMsQ0FBQyxDQUFDO0FBQUU7QUFBQSxNQUFRLFdBQVMsRUFBRSxJQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsSUFBRSxDQUFDLE1BQUksR0FBRTtBQUFDLFVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTSxDQUFDLENBQUM7QUFBRTtBQUFBLE1BQVE7QUFBQSxJQUFDO0FBQUMsUUFBRSxNQUFJLElBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsRUFBRSxLQUFLLEdBQUUsRUFBRSxHQUFFLEdBQUcsQ0FBQyxNQUFJLElBQUU7QUFBQSxFQUFHO0FBQUMsTUFBSSxJQUFFLElBQUUsR0FBRyxDQUFDLElBQUUsRUFBRSxHQUFFLEVBQUMsYUFBWSxLQUFFLENBQUM7QUFBRSxRQUFLLElBQUUsRUFBRSxlQUFhLE9BQUssU0FBTyxFQUFFLFVBQVEsYUFBVyxFQUFFLFNBQVMsU0FBUyxFQUFFLFVBQVUsSUFBRSxJQUFFLENBQUMsSUFBRyxHQUFFLEVBQUUsTUFBSSxJQUFFLEVBQUUscUJBQW1CLE9BQUssU0FBTyxFQUFFLFVBQVEsYUFBVyxFQUFFLFNBQVMsU0FBUyxFQUFFLGdCQUFnQixJQUFFLElBQUUsQ0FBQyxJQUFHLENBQUMsTUFBSSxJQUFFLEVBQUUsb0JBQWtCLE9BQUssU0FBTyxFQUFFLFVBQVEsYUFBVyxFQUFFLFNBQVMsU0FBUyxFQUFFLGVBQWUsTUFBSSxJQUFFLENBQUMsR0FBRSxFQUFFLElBQUcsRUFBRSxRQUFPO0FBQUUsTUFBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUUsU0FBTyxJQUFFLElBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsSUFBRyxJQUFFLENBQUMsQ0FBQztBQUFFLFdBQVMsRUFBRSxHQUFFO0FBQUMsUUFBRSxHQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBRyxHQUFHLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEVBQUUsR0FBRTtBQUFDLFVBQUksT0FBSyxJQUFFLEdBQUUsRUFBRSxLQUFLLEdBQUUsRUFBRTtBQUFBLEVBQUU7QUFBQyxTQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBSyxHQUFFLE1BQUssRUFBQyxNQUFJO0FBQUMsUUFBRyxFQUFFLFNBQU8sV0FBVTtBQUFDLFVBQUksSUFBRSxHQUFHLENBQUM7QUFBRSxVQUFHLEdBQUcsQ0FBQyxHQUFFO0FBQUMsWUFBSSxJQUFFLEdBQUcsTUFBTSxHQUFFLElBQUU7QUFBRSxVQUFFLENBQUMsTUFBSSxPQUFLLEVBQUUsTUFBTyxHQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsR0FBRyxHQUFFLEVBQUUsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxNQUFPO0FBQUUsWUFBSTtBQUFFLFlBQUcsRUFBRSxPQUFHLEdBQUUsRUFBRSxNQUFJLE9BQUssRUFBRSxPQUFNLElBQUUsRUFBRSxJQUFLLElBQUUsRUFBRSxXQUFTLEVBQUU7QUFBTyxpQkFBTyxDQUFDLEdBQUUsQ0FBQyxLQUFJLEVBQUUsUUFBUyxFQUFDLEtBQUUsTUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFF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LG1CQUFpQixFQUFFLHdCQUFzQixDQUFDLEtBQUcsRUFBRSxXQUFXLFNBQU8sTUFBSSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLENBQUE7QUFBRyxJQUFFLEtBQUssSUFBSTtBQUFFLE1BQUksSUFBRSxFQUFFLE1BQU07QUFBRSxTQUFPLEVBQUUsRUFBRSxNQUFLLEVBQUUsVUFBUSxFQUFFLElBQUksSUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBRSxNQUFLLEVBQUUsVUFBUSxFQUFFLEtBQUssSUFBRSxFQUFFLEtBQUssS0FBSSxDQUFDLElBQUUsRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLEtBQUssR0FBRyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFFLEVBQUUsU0FBTztBQUFxQixTQUFNLENBQUMsSUFBRSxNQUFJLE1BQUssRUFBRSxDQUFDLElBQUUsSUFBRSxLQUFHLENBQUMsSUFBRSxNQUFJLElBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsSUFBRSxJQUFFLElBQUcsR0FBRztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsR0FBRSxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsQ0FBQztBQUFFLFNBQU8sR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLEVBQUUsSUFBSTtBQUFFLFNBQU0sQ0FBQyxFQUFFLEdBQUUsR0FBRSxFQUFDLFFBQU8sRUFBQyxDQUFD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QUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSTtBQUFFLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRTtBQUFFLE1BQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFNLENBQUMsRUFBRSxFQUFHLENBQUEsQ0FBQztBQUFFLE1BQUksSUFBRSxDQUFBO0FBQUcsS0FBRyxFQUFFLFVBQVMsRUFBRSxLQUFLLFFBQVEsSUFBRSxJQUFFLEVBQUUsS0FBSyxPQUFHLEdBQUcsR0FBRSxHQUFFLEdBQUUsTUFBRyxDQUFDLEdBQUUsTUFBTSxJQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFBRSxNQUFJLElBQUUsR0FBRyxDQUFDLEdBQUUsS0FBRyxFQUFFLGFBQVcsUUFBTSxFQUFFLFNBQU8sc0JBQW9CLEdBQUcsR0FBRSxDQUFDLE1BQUksQ0FBQyxHQUFHLEVBQUUsY0FBYSxFQUFFLEtBQUssR0FBRSxJQUFFLENBQUMsRUFBRSxFQUFFLE9BQU0sRUFBRSxTQUFRLEVBQUUsS0FBRyxHQUFHLEVBQUUsY0FBYSxFQUFFLEtBQUssR0FBRSxJQUFFLEVBQUUsU0FBTyxxQkFBbUIsTUFBSSxFQUFFLFVBQVMsSUFBRSxFQUFFLFNBQU8sc0JBQW9CLEVBQUUsVUFBVSxTQUFPLElBQUUsRUFBRSxFQUFFLENBQUMsR0FBRSxNQUFLLEVBQUUsQ0FBQyxHQUFFLElBQUksR0FBRSxFQUFFLElBQUksTUFBSSxHQUFHLEdBQUUsRUFBRSxFQUFDLENBQUUsQ0FBQyxHQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUc7QUFBRSxNQUFHLEVBQUUsS0FBRSxDQUFDLEdBQUUsS0FBSSxFQUFFLE9BQU8sR0FBRSxDQUFDO0FBQUEsT0FBTTtBQUFDLFFBQUksSUFBRSxNQUFJLFVBQVEsSUFBRSxFQUFFLEtBQUssVUFBUSxPQUFLLFNBQU8sRUFBRSx5QkFBdUIsRUFBRSxLQUFLLE9BQUcsR0FBRyxHQUFFLEdBQUUsR0FBRSxNQUFHLENBQUMsR0FBRSxPQUFPLElBQUUsRUFB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RSxFQUFFLGdCQUFjLE9BQUssU0FBTyxFQUFFO0FBQVcsU0FBTyxFQUFFLENBQUMsS0FBRyxHQUFHLEdBQUUsRUFBRSxDQUFDLENBQUM7QUFBQztBQUFDLElBQUksS0FBRyxjQUFjLE1BQUs7QUFBQSxFQUFuQjtBQUFBO0FBQW9CLGdDQUFLO0FBQUE7QUFBcUI7QUFBRSxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLEdBQUcsQ0FBQztBQUFFLE1BQUcsRUFBRSxXQUFTLEVBQUUsUUFBTSxDQUFDLEtBQUksRUFBRSxHQUFFLENBQUMsR0FBRSxHQUFHO0FBQUUsTUFBSSxJQUFFLEVBQUUsU0FBTztBQUFFLE1BQUcsR0FBRyxDQUFDLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQyxHQUFHO0FBQUUsV0FBTyxHQUFHLEdBQUUsQ0FBQyxHQUFFLE1BQUk7QUFBQyxRQUFFLEtBQUssRUFBQyxDQUFFLEdBQUUsTUFBSSxLQUFHLEVBQUUsS0FBSyxJQUFJO0FBQUEsSUFBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRTtBQUFBLEVBQUM7QUFBQyxNQUFJLElBQUUsT0FBRyxJQUFFLENBQUE7QUFBRyxLQUFHLEdBQUUsQ0FBQyxFQUFDLE1BQUssRUFBQyxHQUFFLE1BQUk7QUFBQyxRQUFJLElBQUUsRUFBQztBQUFHLFVBQUksTUFBSSxHQUFHLEdBQUUsQ0FBQyxLQUFHLElBQUUsTUFBRyxJQUFFLENBQUMsR0FBRSxLQUFJLEdBQUUsQ0FBQyxLQUFHLElBQUUsQ0FBQyxHQUFFLEtBQUksQ0FBQyxJQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUEsRUFBQyxDQUFDO0FBQUUsTUFBSSxJQUFFLENBQUMsRUFBRSxPQUFPLFdBQVcsT0FBTyxLQUFHLEVBQUUsU0FBTyxzQkFBb0IsR0FBRyxHQUFFLEtBQUssSUFBRSxNQUFJO0FBQUcsV0FBUyxJQUFHO0FBQUMsV0FBTyxFQUFFLENBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFHLEdBQUUsRUFBQyxhQUFZLEtBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFHLEtBQUcsRUFBRSxPQUFPLFNBQU8sZUFBYSxHQUFHLENBQUMsRUFBRSxRQUFPLEVBQUM7QUFBRyxNQUFHLEdBQUcsQ0FBQyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsUUFBRyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQU8sRUFBRztBQUFDLFFBQUk7QUFBRSxRQUFHO0FBQUMsVUFBRSxFQUFFLEdBQUcsR0FBRSxDQUFDLEdBQUUsRUFBQyxnQkFBZSxLQUFFLENBQUM7QUFBQSxJQUFDLFNBQU8sR0FBRTtBQUFDLFVBQUcsYUFBYSxHQUFHLFFBQU8sRUFBQztBQUFHLFlBQU07QUFBQSxJQUFDO0FBQUMsV0FBTyxHQUFHLENBQUMsSUFBRSxDQUFDLElBQUcsR0FBRyxDQUFDLENBQUMsS0FBSSxFQUFFLEdBQUUsRUFBQyxhQUFZLEtBQUUsQ0FBQyxHQUFFLE1BQUssR0FBRyxHQUFFLEdBQUcsR0FBRSxFQUFDLENBQUUsQ0FBQyxDQUFDLElBQUUsR0FBRyxDQUFDLENBQUMsS0FBSSxHQUFFLE1BQUssR0FBRyxHQUFFLEdBQUcsR0FBRSxDQUFDLEtBQUksRUFBRSxHQUFFLEVBQUMsYUFBWSxLQUFFLENBQUMsR0FBRSxNQUFLLEdBQUcsR0FBRSxHQUFHLEdBQUUsRUFBQyxDQUFFLENBQUM7QUFBQSxFQUFDO0FBQUMsTUFBRyxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRTtBQUFFLFFBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxRQUFPLEVBQUc7QUFBQyxRQUFJO0FBQUUsUUFBRztBQUFDLFVBQUUsRUFBRSxHQUFHLEdBQUUsRUFBRSxHQUFFLEVBQUMsZUFBYyxLQUFFLENBQUM7QUFBQSxJQUFDLFNBQU8sR0FBRTtBQUFDLFVBQUcsYUFBYSxHQUFHLFFBQU8sRUFBQztBQUFHLFlBQU07QUFBQSxJQUFDO0FBQUMs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LEdBQUcsRUFBRSxNQUFNLEtBQUcsRUFBRSxFQUFFLE1BQU0sSUFBRztBQUFDLFVBQUksS0FBRyxFQUFFLENBQUM7QUFBRSxRQUFFLFFBQVEsRUFBQyxNQUFLLEdBQUUsc0JBQXFCLElBQUcsU0FBUSxDQUFDLEdBQUcsR0FBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxHQUFHLEdBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUUsS0FBRyxJQUFFLEVBQUUsRUFBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLEdBQUUsUUFBUTtBQUFBLElBQUMsTUFBTSxJQUFHLENBQUMsS0FBRyxFQUFFLFFBQVEsRUFBQyxNQUFLLEdBQUUsYUFBWSxHQUFHLEdBQUUsQ0FBQyxHQUFFLFNBQVEsR0FBRyxHQUFFLEVBQUUsQ0FBQyxJQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsQ0FBQyxFQUFDLENBQUMsR0FBRSxFQUFFLEtBQUssR0FBRSxRQUFRLEtBQUcsRUFBRSxTQUFPLHlCQUF1QixFQUFFLFFBQVEsRUFBQyxNQUFLLEdBQUUsU0FBUSxHQUFHLEdBQUUsS0FBSSxDQUFDLEVBQUMsQ0FBQyxHQUFFLEVBQUUsS0FBSyxHQUFFLFlBQVksS0FBRyxFQUFFLFFBQVEsRUFBQyxNQUFLLEdBQUUsU0FBUSxFQUFHLEVBQUEsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxJQUFFLFFBQVEsRUFBQyxNQUFLLEdBQUUsU0FBUSxDQUFDLEVBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxHQUFHLEdBQUUsR0FBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsRUFBRSxVQUFRLEVBQUUsS0FBSyxHQUFFLFFBQVE7QUFBRSxNQUFJLElBQUUsQ0FBRSxHQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFFLElBQUU7QUFBRSxTQUFLLElBQUUsRUFBRSxXQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssU0FBTyx5QkFBdUIsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEtBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxZQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUcsRUFBRSxFQUFFLEdBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUFFLE1BQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFLLElBQUUsSUFBRSxFQUFFLFdBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEtBQUcsR0FBRyxFQUFFLElBQUUsQ0FBQyxFQUFFLElBQUksSUFBRyxFQUFFLEVBQUUsR0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsSUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLENBQUU7QUFBQyxNQUFJLElBQUU7QUFBRyxTQUFLLElBQUUsRUFBRSxRQUFPLEVBQUUsR0FBRTtBQUFDLFFBQUcsS0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRTtBQUFDLFVBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxZQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxRQUFRLEdBQUU7QUFBQyxVQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRTtBQUFBLE1BQVE7QUFBQyxRQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsQ0FBQSxHQUFHLElBQUU7QUFBQSxJQUFFO0FBQUMsS0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksS0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLFNBQU8sd0JBQXNCLElBQUUsT0FBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQUssRUFBRSxRQUFRLE1BQUksRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLENBQUEsR0FBRyxJQUFFO0FBQUEsRUFBRztBQUFDLElBQUUsU0FBTyxLQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUUsV0FBUyxFQUFFLEdBQUU7QUFBQyxXQUFNLGtCQUFrQixLQUFLLENBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxFQUFFLEdBQUU7QUFBQyxXQUFPLEVBQUUsVUFBUSxFQUFFO0FBQUEsRUFBUTtBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsUUFBSTtBQUFHLFFBQUksTUFBSSxLQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBSSxPQUFLLFNBQU8sR0FBRyxLQUFLO0FBQVMsUUFBRyxFQUFFLENBQUMsRUFBRSxXQUFTLEdBQUU7QUFBQyxVQUFJLEtBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQUssYUFBTyxHQUFHLFNBQU8sb0JBQWtCLEdBQUcsU0FBTyxpQkFBZSxFQUFFLEdBQUcsSUFBSSxLQUFHLEtBQUcsRUFBRSxHQUFHLElBQUksS0FBRztBQUFBLElBQUc7QUFBQyxRQUFJLEtBQUcsRUFBRSxPQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUUsRUFBRTtBQUFLLFdBQU8sRUFBRSxFQUFFLEtBQUcsR0FBRyxTQUFTLFNBQU8saUJBQWUsRUFBRSxHQUFHLFNBQVMsSUFBSSxLQUFHO0FBQUEsRUFBRztBQUFDLE1BQUksSUFBRSxFQUFFLFVBQVEsS0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksS0FBRyxFQUFFLENBQUM7QUFBRSxXQUFTLEVBQUUsR0FBRTtBQUFDLFFBQUksS0FBRyxFQUFFLElBQUksUUFBSSxHQUFHLE9BQU87QUFBRSxXQUFPLEVBQUUsU0FBTyxLQUFHLEVBQUUsT0FBRyxHQUFFLEVBQUUsRUFBRSxjQUFZLENBQUMsS0FBSSxHQUFHLElBQUcsR0FBRyxJQUFFO0FBQUEsRUFBRTtBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsV0FBTyxFQUFFLFdBQVMsSUFBRSxLQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFJLElBQUUsRUFBRSxJQUFJLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxJQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsS0FBTSxHQUFDLElBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRSxFQUFFLEtBQUssT0FBRyxFQUFFLEVBQUUsTUFBSyxFQUFFLE9BQU8sQ0FBQyxLQUFHLEVBQUUsTUFBTSxHQUFFLEVBQUUsRUFBRSxLQUFLLE9BQUcsRUFBRSxFQUFFLE1BQUssRUFBRSxRQUFRLENBQUMsS0FBRyxFQUFFLENBQUMsS0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFLLEVBQUUsT0FBTztBQUFFLE1BQUcsRUFBRSxVQUFRLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxLQUFLLE9BQUcsRUFBRSxPQUFHLEdBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLFFBQU8sR0FBRyxDQUFDLElBQUUsSUFBRSxFQUFFLENBQUM7QUFBRSxNQUFJLElBQUUsRUFBRSxPQUFHLEVBQUUsSUFBRSxJQUFFLENBQUMsR0FBRSxFQUFFLEVBQUUsTUFBSyxJQUFFLENBQUMsRUFBRSxDQUFDLEtBQUcsRUFBRSxDQUFDLEdBQUUsS0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBRSxJQUFHLElBQUUsSUFBRSxJQUFHLEVBQUUsRUFBRSxNQUFNLElBQUUsSUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFJLENBQUMsRUFBQyxNQUFLLEVBQUMsTUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDO0FBQUUsV0FBUyxLQUFJO0FBQUMsUUFBSSxJQUFFLEVBQUUsT0FBRyxFQUFFLE9BQUcsR0FBRSxFQUFFLEdBQUUsRUFBRSxFQUFFLE1BQUssS0FBRyxFQUFFLE9BQUcsR0FBRSxFQUFFO0FBQUUsV0FBTyxFQUFFLENBQUMsS0FBRyxHQUFHLEVBQUUsS0FBRyxFQUFFLE1BQU0sR0FBRSxFQUFFLEVBQUUsS0FBSyxRQUFJLEdBQUcsVUFBVSxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFJO0FBQUcsU0FBTyxLQUFHLEVBQUUsU0FBTyxLQUFHLEVBQUUsS0FBSyxPQUFHLENBQUMsRUFBRSxVQUFVLE1BQU0sUUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEtBQUcsRUFBRSxNQUFNLEdBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFHLEdBQUUsSUFBRyxLQUFHLEVBQUUsRUFBRSxJQUFFLEtBQUcsQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFFLEtBQUcsSUFBRyxHQUFHLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLEdBQUcsRUFBQyxhQUFZLEtBQUUsR0FBRSxFQUFFO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFJO0FBQUUsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU8saUJBQWdCLElBQUUsRUFBRSxTQUFPLG9CQUFtQixJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxFQUFFLFdBQVMsS0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBWTtBQUFFLE1BQUcsS0FBRyxHQUFHLENBQUMsS0FBRyxHQUFHLEdBQUUsRUFBRSxNQUFNLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBRTtBQUFDLFFBQUcsR0FBRyxHQUFFLE1BQUk7QUFBQyxRQUFFLEtBQUssRUFBRyxDQUFBO0FBQUEsSUFBQyxDQUFDLEdBQUUsRUFBRSxPQUFLLElBQUUsRUFBRSxDQUFDLEVBQUUsVUFBUSxRQUFNLEVBQUUsUUFBUSxRQUFNLENBQUMsSUFBRSxTQUFPLElBQUcsR0FBRyxHQUFFLENBQUMsR0FBRSxHQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFJLEVBQUUsTUFBSyxDQUFDLEdBQUUsR0FBRztBQUFBLEVBQUM7QUFBQyxNQUFHLENBQUMsS0FBRyxDQUFDLEtBQUcsR0FBRyxFQUFFLE1BQU0sS0FBRyxDQUFDLEVBQUUsS0FBSyxPQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUUsVUFBUyxHQUFHLEVBQUUsT0FBTyxTQUFPLG9CQUFrQixDQUFDLFlBQVksSUFBRSxDQUFBLENBQUUsRUFBRSxRQUFPLEdBQUcsR0FBRSxHQUFFLENBQUM7QUFBRSxNQUFJLElBQUUsQ0FBQyxJQUFFLFNBQU8sSUFBRyxHQUFHLEdBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsQ0FBQztBQUFFLFNBQU8sS0FBRyxFQUFFLEVBQUUsTUFBTSxJQUFFLEVBQUUsQ0FBQyxJQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFO0FBQUUsU0FBTyxFQUFFLFNBQU8scUJBQW1CLFNBQVMsRUFBRSxRQUFNLElBQUksRUFBRSxLQUFLLEtBQUcsRUFBRSxLQUFHLEVBQUUsUUFBUTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxNQUFHLEVBQUUsU0FBTyxvQkFBa0IsRUFBRSxZQUFVLEVBQUUsT0FBTyxTQUFPLGFBQWEsUUFBUTtBQUFDLE1BQUksSUFBRSxHQUFHLENBQUM7QUFBRSxTQUFPLEVBQUUsT0FBTyxTQUFPLFlBQVUsRUFBRSxXQUFTLEtBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFHLEVBQUUsU0FBTyxJQUFFLEVBQUUsT0FBTyxTQUFPLFlBQVUsRUFBRSxPQUFPLFNBQU8sd0JBQXNCLEVBQUUsV0FBUyxLQUFHLEVBQUUsV0FBUyxLQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQU8scUJBQW1CLEVBQUUsV0FBUyxLQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBRyxFQUFFLENBQUMsRUFBRSxTQUFPLG9CQUFrQjtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxJQUFFLEVBQUUsR0FBRSxFQUFDLGtCQUFpQixFQUFDLENBQUMsSUFBRTtBQUFHLFVBQU8sR0FBRztBQUFBLElBQUEsS0FBSTtBQUF1QixhQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRSxHQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFBRSxLQUFJO0FBQTZCLGFBQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLEdBQUUsS0FBSSxDQUFDLENBQUM7QUFBQSxJQUFFLEtBQUksU0FBUTtBQUFDLFVBQUksSUFBRSxPQUFPLFlBQVk7QUFBRSxhQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRSxHQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUUsRUFBQyxJQUFHLEVBQUMsQ0FBQyxHQUFFLElBQUcsR0FBRyxHQUFFLEVBQUMsU0FBUSxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSTtBQUFZLGFBQU8sRUFBRSxDQUFDLEdBQUUsR0FBRSxLQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxJQUFFLEtBQUk7QUFBUSxhQUFNLENBQUMsRUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxJQUFFLEtBQUk7QUFBYSxhQUFNLENBQUMsRUFBRSxDQUFDLEdBQUUsR0FBRSxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQUUsS0FBSTtBQUF5QixhQUFNLENBQUMsRUFBRSxDQUFDLEdBQUUsR0FBRSxDQUFDO0FBQUEsSUFBRSxLQUFJO0FBQVksYUFBTztBQUFBLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRTtBQUFFLFNBQU8sR0FBRyxHQUFFLEdBQUUsR0FBRSxFQUFFLE1BQU0sR0FBRSxDQUFDLEtBQUksRUFBRSxRQUFRLEdBQUUsT0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUUsR0FBRSxHQUFFLEVBQUUsSUFBSSxHQUFFLE1BQUssTUFBTTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsTUFBRyxDQUFDLEVBQUUsUUFBTTtBQUFZLE1BQUksSUFBRSxDQUFDLEdBQUcsQ0FBQztBQUFFLE1BQUcsRUFBRSxNQUFNLElBQUcsSUFBRyxPQUFHLENBQUMsS0FBRyxFQUFFLFNBQU8seUJBQXVCLEVBQUUsU0FBTyxxQkFBcUIsRUFBRSxRQUFPLElBQUUsRUFBRSxTQUFPLDZCQUEyQixFQUFFLEtBQUssU0FBTyw0QkFBMEIsMkJBQXlCLGVBQWE7QUFBUSxNQUFHLENBQUMsS0FBRyxHQUFHLEVBQUUsS0FBSyxLQUFHLEdBQUcsRUFBRSxjQUFhLENBQUMsRUFBRSxRQUFNO0FBQXVCLE1BQUcsRUFBRSxTQUFPLHFCQUFtQixFQUFFLFNBQU8sb0JBQWtCLEVBQUUsT0FBTyxTQUFPLGFBQVcsRUFBRSxXQUFTLFdBQVMsRUFBRSxXQUFTLFdBQVMsRUFBRSxXQUFTLE9BQU8sUUFBTTtBQUE2QixNQUFJLElBQUUsR0FBRyxDQUFDO0FBQUUsTUFBRyxHQUFHLENBQUMsS0FBRyxHQUFHLENBQUMsS0FBRyxHQUFHLENBQUMsS0FBRyxFQUFFLFFBQU07QUFBWSxNQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFFLFNBQU8sRUFBRSxLQUFLLE1BQUksR0FBRyxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsQ0FBQyxJQUFFLHlCQUF1QixHQUFHLENBQUMsSUFBRSxjQUFZLENBQUMsTUFBSSxLQUFHLEVBQUUsU0FBTyxxQkFBbUIsRUFBRSxTQUFPLDhCQUE0QixFQUFFLFNBQU8sb0JBQWtCLEdBQUcsQ0FBQyxLQUFHLEVBQUUsU0FBTyxxQkFBbUIsK0JBQTZCO0FBQU87QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUssTUFBRyxHQUFHLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQU07QUFBRyxVQUFPLEVBQUUsTUFBSTtBQUFBLElBQUUsS0FBSTtBQUFBLElBQThCLEtBQUk7QUFBcUIsYUFBTTtBQUFBLElBQUcsS0FBSTtBQUFBLElBQW9CLEtBQUk7QUFBNEIsVUFBRyxDQUFDLEVBQUUseUJBQXVCLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFBTSxhQUFNO0FBQUEsSUFBRyxLQUFJLHlCQUF3QjtBQUFDLFVBQUcsQ0FBQyxFQUFFLHVCQUFzQjtBQUFDLFlBQUcsRUFBQyxNQUFLLEVBQUMsSUFBRTtBQUFFLGVBQU8sR0FBRyxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUM7QUFBQSxNQUFDO0FBQUMsVUFBRyxFQUFDLFlBQVcsR0FBRSxXQUFVLEVBQUMsSUFBRTtBQUFFLGFBQU8sRUFBRSxTQUFPLDJCQUF5QixFQUFFLFNBQU87QUFBQSxJQUF1QjtBQUFBLElBQUMsS0FBSTtBQUFrQixhQUFPLEVBQUUsRUFBRSxVQUFVO0FBQUEsRUFBQztBQUFDLE1BQUcsRUFBRSxRQUFRO0FBQUMsTUFBSSxJQUFFLEdBQUUsSUFBRSxDQUFBO0FBQUcsWUFBTyxLQUFHLEVBQUUsU0FBTyxxQkFBbUIsRUFBRSxTQUFPLHFCQUFtQixFQUFFLFNBQU8scUJBQW1CLEVBQUUsYUFBVyxLQUFLLEtBQUUsRUFBRSxVQUFTLEVBQUUsS0FBSyxVQUFVO0FBQUEsV0FBVSxFQUFFLFNBQU8sc0JBQXNCLEtBQUUsRUFBRSxZQUFXLEVBQUUsS0FBSyxZQUFZO0FBQUEsTUFBTztBQUFNLFNBQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFHLEVBQUUsS0FBSyxNQUFJLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxHQUFHLENBQUM7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxHQUFHLENBQUMsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLFFBQU0sRUFBRTtBQUFHLFdBQU8sRUFBRSxTQUFPLG1CQUFpQixFQUFFLFdBQVcsU0FBTyxLQUFHLEVBQUUsV0FBVyxLQUFLLE9BQUc7QUFBQyxVQUFJO0FBQUUsYUFBTyxHQUFHLENBQUMsTUFBSSxDQUFDLEVBQUUsZUFBYSxJQUFFLEVBQUUsVUFBUSxPQUFLLFNBQU8sRUFBRSxVQUFRO0FBQUEsSUFBb0IsQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFNO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxTQUFPO0FBQXNCO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsQ0FBQyxLQUFHLEVBQUUsU0FBTztBQUFvQjtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsQ0FBQztBQUFFLE1BQUcsRUFBRSxDQUFDLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxTQUFPLDJCQUF5QixlQUFhO0FBQVEsUUFBRyxFQUFFLFNBQU8sS0FBRyxFQUFFLEtBQUssT0FBRyxFQUFFLENBQUMsS0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRO0FBQUEsRUFBQTtBQUFDLFNBQU07QUFBRTtBQUFDLElBQUksS0FBRyxFQUFFLENBQUMsMEJBQXlCLFdBQVcsQ0FBQztBQUFFLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSTtBQUFFLE1BQUcsR0FBRyxDQUFDLEVBQUUsU0FBTyxJQUFFLEVBQUUsbUJBQWlCLE9BQUssU0FBTyxFQUFFO0FBQU07QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsRUFBRSxTQUFPLHFCQUFxQixRQUFRO0FBQUMsTUFBRyxFQUFDLGdCQUFlLEVBQUMsSUFBRSxFQUFFO0FBQUcsTUFBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLGVBQWUsUUFBTTtBQUFHLE1BQUksSUFBRSxHQUFHLEVBQUUsY0FBYztBQUFFLFNBQU8sRUFBRSxDQUFDLEtBQUcsRUFBRSxTQUFPLEtBQUcsRUFBRSxLQUFLLE9BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFHLEVBQUUsU0FBTyxtQkFBbUI7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSTtBQUFFLFNBQU8sRUFBRSxTQUFPLDBCQUF3QixJQUFFLEVBQUUsU0FBTyxPQUFLLFNBQU8sRUFBRSxVQUFRO0FBQXlCO0FBQUMsSUFBSSxLQUFHLEVBQUUsQ0FBQyxtQkFBa0IsdUJBQXVCLENBQUM7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQU8sSUFBRSxFQUFFLGlCQUFlLEVBQUUsbUJBQWlCLE9BQUssU0FBTyxFQUFFO0FBQU07QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRSxPQUFHO0FBQUMsTUFBSTtBQUFFLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsTUFBSSxHQUFHLEdBQUUsR0FBRSxHQUFFLElBQUU7QUFBRSxNQUFHLEVBQUUsU0FBTyxxQkFBbUIsRUFBRSxTQUFPLHNCQUFzQixRQUFPLEVBQUUsS0FBSyxHQUFFLFlBQVk7QUFBRSxNQUFHLEVBQUUsQ0FBQyxHQUFFO0FBQUMsU0FBSSxJQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsRUFBRSxVQUFRLFFBQU0sRUFBRSxZQUFZLFFBQU07QUFBRyxRQUFJLElBQUUsR0FBRyxDQUFDO0FBQUUsV0FBTSxFQUFFLEVBQUUsV0FBUyxLQUFHLEVBQUUsV0FBUyxLQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxNQUFJLEdBQUcsR0FBRSxDQUFDLElBQUUsUUFBRyxFQUFFLEtBQUssR0FBRSxRQUFRO0FBQUEsRUFBQztBQUFDLFNBQU8sRUFBRSxDQUFDLElBQUUsRUFBRSxLQUFLLEdBQUUsUUFBUSxJQUFFLE1BQUksRUFBRSxTQUFPLGdCQUFjLEVBQUUsU0FBTztBQUFpQjtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU8sR0FBRyxDQUFDLEtBQUcsSUFBRSxHQUFHLENBQUMsR0FBRSxPQUFPLEtBQUcsWUFBVSxHQUFHLENBQUMsSUFBRSxFQUFFLFdBQVMsS0FBRztBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxHQUFHLENBQUM7QUFBRSxNQUFHLEVBQUUsQ0FBQyxHQUFFO0FBQUMsUUFBRyxFQUFFLFNBQU8sRUFBRSxRQUFNO0FBQUcsUUFBRyxFQUFFLFdBQVMsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFHLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxLQUFHLEVBQUUsU0FBTyxtQkFBaUIsRUFBRSxTQUFPLHVCQUF1QixRQUFNO0FBQUEsSUFBRTtBQUFDLFFBQUksSUFBRSxFQUFFLGlCQUFlLG1CQUFpQjtBQUFnQixRQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRO0FBQUEsRUFBQTtBQUFDLFNBQU07QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSTtBQUFFLFVBQU8sSUFBRSxFQUFFLGtCQUFnQixFQUFFLGtCQUFnQixPQUFLLFNBQU8sRUFBRTtBQUFNO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxXQUFTLEVBQUUsR0FBRTtBQUFDLFlBQU8sRUFBRSxNQUFJO0FBQUEsTUFBRSxLQUFJO0FBQUEsTUFBeUIsS0FBSTtBQUFBLE1BQXdCLEtBQUk7QUFBaUIsZUFBTSxDQUFDLENBQUMsRUFBRTtBQUFBLE1BQWUsS0FBSTtBQUFrQixlQUFNLENBQUMsRUFBRSxFQUFFLGlCQUFlLEVBQUU7QUFBQSxNQUFnQjtBQUFRLGVBQU07QUFBQSxJQUFFO0FBQUEsRUFBQztBQUFDLFNBQU8sRUFBRSxFQUFFLFNBQVMsS0FBRyxFQUFFLEVBQUUsV0FBVztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLE1BQUssSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQyxJQUFFO0FBQUcsTUFBRyxFQUFFLFdBQVMsRUFBRSxRQUFNLENBQUMsR0FBRSxLQUFJLEVBQUUsR0FBRSxHQUFFLEVBQUMsUUFBTyxPQUFHLEdBQUcsRUFBRSxjQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQUksSUFBRyxDQUFDLEdBQUUsR0FBRztBQUFFLE1BQUcsRUFBQyxRQUFPLEVBQUMsSUFBRSxHQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxHQUFHLENBQUMsR0FBRSxJQUFFLENBQUU7QUFBQyxNQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUUsTUFBSTtBQUFDLFFBQUksSUFBRSxNQUFJLEVBQUUsU0FBTztBQUFFLFNBQUcsRUFBRSxRQUFNLEVBQUUsS0FBSyxLQUFLLEdBQUUsRUFBRSxLQUFLLEVBQUcsQ0FBQSxHQUFFLENBQUMsTUFBSSxFQUFFLEtBQUssR0FBRyxHQUFFLEtBQUcsSUFBRSxFQUFFLEtBQUssR0FBRyxJQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxJQUFFLEVBQUUsS0FBSyxHQUFFLENBQUMsSUFBRSxFQUFFLEtBQUssQ0FBQztBQUFBLEVBQUUsQ0FBQyxHQUFFLEtBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRTtBQUFDLFFBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEVBQUUsT0FBTSxJQUFJO0FBQUcsV0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUUsS0FBSSxHQUFHLENBQUMsR0FBRSxHQUFHLENBQUM7QUFBQSxFQUFDO0FBQUMsTUFBSSxJQUFFLEVBQUUsTUFBTSxPQUFHLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQztBQUFFLFNBQU8sS0FBRyxJQUFFLENBQUMsR0FBRSxLQUFJLEdBQUcsR0FBRSxHQUFHLElBQUUsSUFBRSxDQUFDLEdBQUUsS0FBSSxHQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxLQUFHLEVBQUUsU0FBTyxlQUFhLEVBQUUsU0FBTyx5QkFBdUIsRUFBRSxTQUFPLGdDQUE4QixFQUFFLFNBQU8sNEJBQTBCLEVBQUUsZUFBYSxNQUFJLEVBQUUsV0FBUyxLQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQU8sUUFBTSxFQUFFLFNBQU8sRUFBRSxDQUFDLEtBQUcsRUFBRSxDQUFDLEVBQUUsa0JBQWdCLEVBQUUsbUJBQWlCLFFBQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxjQUFjLEtBQUcsQ0FBQyxFQUFFLE9BQUssRUFBRSxnQkFBYyxZQUFVLEVBQUUsU0FBTyx1QkFBcUIsQ0FBQyxLQUFJLEdBQUcsR0FBRSxHQUFHLElBQUUsSUFBRSxDQUFDLEdBQUUsS0FBSSxFQUFFLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBRyxHQUFHLEdBQUUsS0FBSyxJQUFFLE1BQUksRUFBRSxHQUFFLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLENBQUMsRUFBRSxRQUFNO0FBQUcsTUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLE1BQUcsRUFBRSxXQUFTLEVBQUUsUUFBTTtBQUFHLE1BQUcsQ0FBQyxDQUFDLElBQUU7QUFBRSxTQUFNLENBQUMsRUFBRSxDQUFDLE1BQUksRUFBRSxTQUFPLG1CQUFpQixFQUFFLFNBQU8sa0JBQWdCLEVBQUUsU0FBTyxnQkFBYyxFQUFFLG1CQUFpQixFQUFFLGVBQWUsU0FBTyxvQkFBa0IsRUFBRSxlQUFlLFNBQU8sdUJBQXFCLEdBQUcsRUFBRSxlQUFlLGNBQWMsS0FBRyxFQUFFLFNBQU8sdUJBQXFCLEdBQUcsRUFBRSxjQUFjLEtBQUcsTUFBSSxFQUFFLFFBQU0sRUFBRSxTQUFPLHdCQUFzQixFQUFFLEtBQUssU0FBTyxtQkFBaUIsRUFBRSxLQUFLLFNBQU8sb0JBQWtCLEVBQUUsTUFBTSxTQUFPLGdCQUFjLEdBQUcsRUFBRSxLQUFLLEtBQUcsRUFBRSxNQUFNLFdBQVcsV0FBUyxLQUFHLEVBQUUsRUFBRSxLQUFLLEtBQUcsRUFBRSxNQUFNLFNBQVMsV0FBUztBQUFHO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJO0FBQUUsU0FBTyxFQUFFLGNBQVksSUFBRSxFQUFFLFlBQVcsRUFBRSxtQkFBaUIsSUFBRSxFQUFFLG1CQUFpQixFQUFFLG1CQUFpQixJQUFFLEVBQUUsaUJBQWdCO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSTtBQUFFLE1BQUksSUFBRSxHQUFHLENBQUM7QUFBRSxNQUFHLENBQUMsRUFBRSxRQUFNO0FBQUcsTUFBSSxLQUFHLElBQUUsRUFBRSxtQkFBaUIsT0FBSyxTQUFPLEVBQUU7QUFBTyxNQUFHLEdBQUU7QUFBQyxRQUFHLEVBQUUsU0FBTyxFQUFFLFFBQVE7QUFBQyxRQUFHLEVBQUUsV0FBUyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUcsRUFBRSxjQUFZLEVBQUUsUUFBUSxRQUFRO0FBQUEsSUFBQTtBQUFBLEVBQUM7QUFBQyxTQUFPLEVBQUUsQ0FBQyxFQUFFLFdBQVMsTUFBSSxHQUFHLENBQUMsS0FBRyxHQUFHLENBQUM7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLE1BQU0sT0FBRyxFQUFFLFNBQU8sNkJBQTJCLEVBQUUsS0FBSyxTQUFPLGtCQUFpQixDQUFDLEdBQUUsTUFBSTtBQUFDLFFBQUcsRUFBRSxTQUFPLG9CQUFrQixNQUFJLGVBQWEsRUFBRSxVQUFVLFdBQVMsS0FBRyxFQUFFLE9BQU8sU0FBTyxrQkFBaUI7QUFBQyxVQUFJLElBQUUsRUFBRSxPQUFPO0FBQU8sYUFBTyxFQUFFLFNBQU8sZ0JBQWMsRUFBRSxTQUFPLHNCQUFvQixDQUFDLEVBQUUsWUFBVSxFQUFFLE9BQU8sU0FBTyxnQkFBYyxFQUFFLFNBQVMsU0FBTztBQUFBLElBQVk7QUFBQyxXQUFNO0FBQUEsRUFBRSxHQUFFLENBQUMsR0FBRSxNQUFJLEVBQUUsU0FBTyx3QkFBc0IsTUFBSSxVQUFRLEVBQUUsU0FBTyw4QkFBNEIsTUFBSSxpQkFBZSxFQUFFLFNBQU8sd0JBQXNCLE1BQUksZ0JBQWMsRUFBRSxTQUFPLDBCQUF3QixNQUFJLFdBQVMsRUFBRSxLQUFLLFNBQU8sc0JBQW9CLEVBQUUsS0FBSyxPQUFPLFNBQU8sZ0JBQWMsRUFBRSxLQUFLLE9BQU8sU0FBTyxZQUFVLEVBQUUsS0FBSyxTQUFTLFNBQU8sZ0JBQWMsRUFBRSxLQUFLLFNBQVMsU0FBTyxXQUFVLE9BQUcsRUFBRSxTQUFPLHlCQUF1QixFQUFFLFNBQU8sV0FBUyxFQUFFLGFBQWEsV0FBUyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLENBQUM7QUFBRSxTQUFPLEVBQUUsU0FBTyxLQUFHLEVBQUUsS0FBSyxPQUFHLEVBQUUsU0FBTyxxQkFBcUI7QUFBQztBQUFDLElBQUksS0FBRyxFQUFFLENBQUMsc0JBQXFCLGlCQUFnQiw2QkFBNEIsZUFBZSxDQUFDLEdBQUUsS0FBRyxFQUFFLENBQUMsd0JBQXVCLGlCQUFnQix5QkFBd0IsaUJBQWlCLENBQUM7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsRUFBQyxPQUFNLEVBQUMsSUFBRTtBQUFFLE1BQUcsRUFBRSxLQUFLLE9BQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFNO0FBQUcsTUFBSSxJQUFFLEVBQUUsS0FBSyxPQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUUsU0FBTyxJQUFFLEVBQUUsTUFBTSxPQUFHLE1BQUksS0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLElBQUUsT0FBRyxHQUFHLENBQUMsSUFBRSxHQUFHLENBQUMsSUFBRTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsT0FBSyxNQUFJLElBQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRSxnQkFBZSxFQUFFLElBQUksR0FBRSxFQUFFLGdCQUFnQixDQUFDO0FBQUUsU0FBTyxFQUFFLGFBQVcsRUFBRSxLQUFLLE1BQUssRUFBRSxXQUFXLENBQUMsR0FBRSxFQUFFLFlBQVUsRUFBRSxLQUFLLE9BQU0sRUFBRSxVQUFVLENBQUMsR0FBRSxFQUFFLEtBQUssQ0FBQyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxPQUFLLE1BQUksSUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUUsSUFBRSxLQUFLLFNBQVEsRUFBRSxJQUFJLEdBQUUsRUFBRSxnQkFBZ0IsQ0FBQztBQUFFLE1BQUksSUFBRSxFQUFFLFNBQU8sMkJBQXlCLG1CQUFpQjtBQUFRLFNBQU0sQ0FBQyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsTUFBSyxDQUFDLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFO0FBQUcsU0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUMsU0FBUSxHQUFFLFVBQVMsR0FBRSxNQUFLLEdBQUUsT0FBTSxFQUFDLE1BQUk7QUFBQyxRQUFJLElBQUUsRUFBQztBQUFHLFFBQUcsRUFBRSxRQUFPO0FBQUUsUUFBSSxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDO0FBQUUsV0FBTyxLQUFHLElBQUUsQ0FBQyxPQUFNLElBQUUsRUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFFLENBQUMsS0FBRyxDQUFDLElBQUUsRUFBRSxpQ0FBK0IsVUFBUSxFQUFFLENBQUMsR0FBRSxNQUFLLENBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxNQUFLLEdBQUUsQ0FBQyxDQUFDLEtBQUcsSUFBRSxNQUFJLElBQUUsT0FBSSxDQUFDLE9BQU0sSUFBRSxJQUFFLEVBQUUsQ0FBQyxJQUFFLENBQUM7QUFBQSxFQUFFLEdBQUUsT0FBTyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxFQUFDLFFBQU8sRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU8saUNBQStCLENBQUMsR0FBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLDBCQUF3QixFQUFFLFNBQU8sa0NBQWdDLEVBQUUsU0FBTywyQkFBeUIsRUFBRSxTQUFPLHFCQUFtQixFQUFFLFNBQU8scUJBQW1CLEVBQUUsU0FBTyx5QkFBdUIsRUFBRSxTQUFPLGlCQUFlLEVBQUUsRUFBRSxTQUFPLHVCQUFxQixDQUFDLEVBQUUsUUFBTSxFQUFFLFlBQVksU0FBTyxNQUFJLEdBQUcsRUFBRSxTQUFPLGVBQWEsRUFBRSxTQUFPLHdCQUFzQixFQUFFLFNBQU8sNkJBQTJCLEdBQUcsRUFBRSxjQUFhLENBQUMsSUFBRyxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFJLE9BQUc7QUFBQyxRQUFJLElBQUUsRUFBRztBQUFDLFdBQU8sTUFBSSxJQUFFLEdBQUcsR0FBRSxDQUFDLElBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUMsR0FBRSxPQUFPO0FBQUUsTUFBRyxFQUFFLFFBQU8sRUFBRSxPQUFNLENBQUM7QUFBRSxNQUFJLElBQUUsS0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFhLENBQUMsR0FBRSxJQUFFLENBQUMsRUFBRSxDQUFDLElBQUUsSUFBRSxJQUFHLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUksR0FBRSxDQUFDLENBQUM7QUFBRSxTQUFPLEdBQUcsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxLQUFHLEVBQUUsU0FBTyx5QkFBdUIsRUFBRSxTQUFPLGtCQUFnQixFQUFFLEVBQUUsU0FBTyx5QkFBdUIsRUFBRSxRQUFNLFVBQVEsY0FBYyxFQUFFLFNBQU8sSUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLEdBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFFLEVBQUUsSUFBRSxFQUFFLENBQUMsSUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHLEVBQUMsTUFBSyxHQUFFLFFBQU8sRUFBQyxJQUFFO0FBQUUsU0FBTyxFQUFFLFNBQU8sNkJBQTJCLEdBQUcsQ0FBQyxLQUFHLEdBQUcsRUFBRSxTQUFPLHdCQUFzQixFQUFFLFNBQU8sNkJBQTJCLENBQUMsRUFBRSxZQUFVLENBQUMsRUFBRSxZQUFVLEdBQUcsR0FBRSxDQUFDLEtBQUcsRUFBRSxTQUFPLDhCQUE0QixJQUFFLEVBQUUsY0FBYyxDQUFDLE1BQUksT0FBSyxTQUFPLEVBQUUsVUFBUTtBQUFtQjtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUFFLEdBQUMsRUFBRSxTQUFPLHVCQUFxQixFQUFFLFNBQU8sc0NBQW9DLEVBQUUsS0FBSyxNQUFNO0FBQUUsTUFBSSxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsT0FBRyxJQUFFLEdBQUUsSUFBRSxDQUFFO0FBQUMsU0FBTyxFQUFFLFNBQU8sMkJBQXlCLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBRSxTQUFPLE1BQUssRUFBRSxZQUFZLENBQUMsSUFBRSxFQUFFLEtBQUssRUFBRSxHQUFFLEdBQUUsRUFBRSxhQUFXLGVBQWEsZ0JBQWdCLENBQUMsR0FBRSxHQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUUsRUFBRSxDQUFDLElBQUcsRUFBRSxLQUFLLEdBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxDQUFDLEVBQUUsWUFBWSxHQUFFLEVBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxXQUFXLEdBQUUsR0FBRztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxDQUFDLFVBQVMsRUFBRSxlQUFlLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRTtBQUFFLFNBQU0sQ0FBQyxFQUFFLFVBQVEsS0FBRyxHQUFFLEVBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxVQUFRLElBQUUsRUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFO0FBQUUsU0FBTSxDQUFDLE9BQU0sR0FBRyxFQUFFLFNBQU8sNEJBQTBCLEVBQUUsUUFBTSxDQUFDLEVBQUUsT0FBTyxHQUFFLElBQUksSUFBRSxDQUFBLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFO0FBQUUsU0FBTSxDQUFDLEVBQUUsV0FBUyxFQUFFLFVBQVUsSUFBRSxJQUFHLEVBQUUsT0FBTyxHQUFFLEVBQUUsV0FBUyxNQUFJLElBQUcsTUFBSyxFQUFFLGFBQWEsQ0FBQztBQUFDO0FBQUMsSUFBSSxLQUFHLG9CQUFJO0FBQVEsU0FBUyxFQUFFLEdBQUUsR0FBRSxJQUFFLGtCQUFpQjtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsQ0FBQyxDQUFDLEdBQUUsRUFBQyxFQUFDLElBQUU7QUFBRSxNQUFHLENBQUMsRUFBRSxRQUFNO0FBQUcsTUFBSSxJQUFFO0FBQUcsTUFBRyxFQUFFLFNBQU8sc0JBQW9CLEVBQUUsU0FBTyxrQkFBaUI7QUFBQyxRQUFJLElBQUUsRUFBRSxLQUFLLElBQUcsQ0FBQztBQUFFLEtBQUMsTUFBSSxRQUFNLE1BQUksT0FBSyxFQUFFLEdBQUUsRUFBRSxPQUFPLE9BQUssSUFBRSxPQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUFDLFNBQU8sSUFBRSxDQUFDLEtBQUksRUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBQztBQUFDLElBQUksS0FBRyxPQUFHLEVBQUUsTUFBTSxPQUFHLEVBQUUsU0FBTyxvQkFBbUIsQ0FBQyxHQUFFLE9BQUssTUFBSSxnQkFBYyxNQUFJLHNCQUFvQixFQUFFLFNBQU8sb0JBQWtCLEVBQUUsU0FBTyxvQkFBb0IsSUFBRSxPQUFLLEVBQUUsTUFBTSxPQUFHLEVBQUUsU0FBTyxvQkFBbUIsQ0FBQyxHQUFFLE1BQUksTUFBSSxxQkFBbUIsRUFBRSxTQUFPLHlCQUF1QixFQUFFLFNBQU8sNEJBQTBCLEVBQUUsU0FBTyxrQkFBa0IsS0FBRyxFQUFFLE1BQU0sT0FBRyxFQUFFLFNBQU8sa0JBQWlCLENBQUMsR0FBRSxNQUFJLE1BQUksb0JBQWtCLEVBQUUsU0FBTyxjQUFhLENBQUMsR0FBRSxNQUFJLE1BQUksUUFBTSxFQUFFLFNBQU8saUJBQWlCLEtBQUcsRUFBRSxNQUFNLE9BQUcsRUFBRSxTQUFPLGtCQUFpQixDQUFDLEdBQUUsTUFBSSxNQUFJLG9CQUFrQixFQUFFLFNBQU8sY0FBYSxDQUFDLEdBQUUsTUFBSSxNQUFJLFFBQU0sRUFBRSxTQUFPLGFBQWEsS0FBRyxFQUFFLE1BQU0sT0FBRyxFQUFFLFNBQU8sa0JBQWlCLENBQUMsR0FBRSxNQUFJLE1BQUksV0FBUyxFQUFFLFNBQU8sbUJBQWlCLEVBQUUsZ0JBQWdCLElBQUUsS0FBRztBQUFJLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxHQUFHLENBQUM7QUFBRSxTQUFPLElBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFFLEVBQUUsZ0JBQWdCO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU0sQ0FBQyxFQUFFLGFBQWEsR0FBRSxJQUFJO0FBQUM7QUFBQyxTQUFTLEdBQUcsRUFBQyxNQUFLLEVBQUMsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsU0FBTyxnQkFBYyxhQUFXLFlBQVcsSUFBRSxFQUFFLFNBQU8sMEJBQXdCLEVBQUUsZ0JBQWMsa0JBQWdCO0FBQWlCLFNBQU0sQ0FBQyxXQUFVLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFO0FBQUUsU0FBTSxDQUFDLEVBQUUsU0FBTyxxQkFBbUIsRUFBRSxVQUFRLGFBQVcsRUFBRSxTQUFPLG1CQUFpQixFQUFFLE9BQUssR0FBRyxFQUFFLElBQUksTUFBSSxJQUFHLEVBQUUsZUFBZSxHQUFFLEVBQUUsaUJBQWUsQ0FBQyxRQUFPLEVBQUUsR0FBRSxDQUFDLENBQUMsSUFBRSxFQUFFO0FBQUM7QUFBQyxTQUFTLEVBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRTtBQUFFLFNBQU0sQ0FBQyxFQUFFLFlBQVUsRUFBRSxTQUFPLGdCQUFjLE1BQUksRUFBRSxPQUFPLE1BQUksS0FBRyxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsS0FBRyxFQUFFLFlBQVUsRUFBRSxTQUFPLDhCQUE0QixPQUFLO0FBQUc7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxLQUFLLFlBQVUsRUFBRSxNQUFNLFFBQU8sQ0FBQyxHQUFFLE1BQUksTUFBSSxRQUFNLEVBQUUsU0FBTyx3QkFBc0IsRUFBRSxRQUFRLElBQUUsTUFBSTtBQUFFO0FBQUMsSUFBSSxLQUFHLG9CQUFJLElBQUksQ0FBQyxnQkFBZSxvQkFBbUIsbUJBQWtCLGVBQWMsbUJBQWtCLDRCQUEyQiwrQkFBOEIscUJBQW9CLG9CQUFtQixlQUFjLGtCQUFrQixDQUFDO0FBQUUsU0FBUyxFQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxTQUFPLEVBQUUsV0FBUyxHQUFHLElBQUksRUFBRSxJQUFJLEtBQUcsRUFBRSxPQUFPLFNBQU8sNkJBQTJCLGFBQVc7QUFBRTtBQUFDLElBQUksS0FBRyxvQkFBSSxJQUFJLENBQUMsOEJBQTZCLGdDQUErQiw0QkFBNEIsQ0FBQztBQUFFLFNBQVMsR0FBRyxFQUFDLE1BQUssRUFBQyxHQUFFO0FBQUMsU0FBTyxFQUFFLFlBQVUsR0FBRyxJQUFJLEVBQUUsSUFBSSxJQUFFLGNBQVk7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUssU0FBTyxFQUFFLGdCQUFjLEVBQUUsZUFBZSxJQUFFLEVBQUUsaUJBQWUsRUFBRSxnQkFBZ0IsSUFBRTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxDQUFDLE1BQUssRUFBRSxRQUFRLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU8sRUFBRSxTQUFPLG1CQUFpQixNQUFJLEVBQUUsU0FBTyxvQkFBa0IsSUFBRSxDQUFDLEtBQUksQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQU0sQ0FBQyxPQUFNLEVBQUUsVUFBVSxHQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLGdCQUFjLEVBQUUsZ0JBQWMsTUFBSTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsVUFBUSxRQUFNO0FBQUcsU0FBTyxFQUFFLEdBQUUsRUFBRSxRQUFRLElBQUUsRUFBRSxDQUFDLEdBQUUsR0FBRSxFQUFFLEdBQUUsR0FBRSxFQUFDLFFBQU8sS0FBRSxDQUFDLEdBQUUsR0FBRSxDQUFDLENBQUMsSUFBRSxDQUFDLEdBQUUsR0FBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLENBQUEsR0FBRyxJQUFFLEVBQUUsU0FBTyxvQkFBa0IsT0FBSyxLQUFJLElBQUUsS0FBSSxJQUFFLEVBQUUsU0FBTyx5QkFBdUIsRUFBRSxRQUFNLFVBQVEsRUFBRSxTQUFPLGlCQUFlLEVBQUUsU0FBTyx3QkFBc0IsaUJBQWUsWUFBVyxJQUFFLEVBQUUsQ0FBQztBQUFFLE1BQUcsRUFBRSxXQUFTLEVBQUUsR0FBRSxLQUFLLEdBQUcsR0FBRSxHQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUEsT0FBTTtBQUFDLFFBQUksSUFBRSxFQUFFLE9BQUcsR0FBRSxFQUFFLEdBQUUsS0FBRyxLQUFHLE9BQUssU0FBTyxFQUFFLFVBQVEsaUJBQWUsQ0FBQyxFQUFFLFNBQVEsSUFBRSxNQUFJLE1BQUssSUFBRSxPQUFPLE9BQU8sR0FBRSxJQUFFLENBQUMsRUFBRSxnQkFBYyxFQUFFLFNBQU8sS0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFFLEdBQUUsTUFBSTtBQUFDLFVBQUksSUFBRSxLQUFHLE9BQUssU0FBTyxFQUFFO0FBQUssVUFBRyxDQUFDLEVBQUUsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBTTtBQUFHLFVBQUksSUFBRSxFQUFFLElBQUUsQ0FBQztBQUFFLFVBQUcsS0FBRyxNQUFJLEVBQUUsS0FBSyxRQUFNO0FBQUcsVUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFFLGFBQVc7QUFBYSxhQUFPLEVBQUUsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQU87QUFBQSxJQUFDLENBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRSxJQUFFLElBQUUsTUFBSSxHQUFHLENBQUMsSUFBRSxJQUFFLEVBQUUsS0FBSSxJQUFHLEVBQUMsU0FBUSxFQUFDLENBQUMsSUFBRSxFQUFFLEdBQUcsSUFBRSxLQUFHO0FBQUcsTUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUUsQ0FBQyxHQUFHLEdBQUUsR0FBRSxHQUFFLEVBQUUsU0FBUSxDQUFDLEdBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUMsYUFBWSxHQUFFLElBQUcsRUFBQyxDQUFDLENBQUM7QUFBQSxFQUFDO0FBQUMsU0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLENBQUMsS0FBRyxFQUFFLFNBQVMsU0FBTyxLQUFHLEVBQUUsU0FBUyxNQUFNLE9BQUcsTUFBSSxHQUFHLENBQUMsS0FBRyxHQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLE1BQUksQ0FBQyxFQUFFLEdBQUUsRUFBRSxXQUFTLEVBQUUsTUFBSyxPQUFHLENBQUMsRUFBRSxFQUFFLGNBQWEsRUFBRSxDQUFDLEdBQUUsRUFBQyxXQUFVLEtBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxFQUFDLE1BQUssRUFBQyxHQUFFLEVBQUMsY0FBYSxFQUFDLEdBQUU7QUFBQyxNQUFJLElBQUUsT0FBRyxHQUFHLEdBQUUsR0FBRyxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsT0FBRyxFQUFFLENBQUMsTUFBSSxNQUFJLElBQUUsRUFBRSxFQUFFLElBQUUsQ0FBQyxDQUFDO0FBQUUsU0FBTyxHQUFHLEdBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLENBQUE7QUFBRyxTQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBSyxHQUFFLFFBQU8sRUFBQyxNQUFJO0FBQUMsTUFBRSxLQUFLLElBQUUsRUFBRSxFQUFDLENBQUUsSUFBRSxFQUFFLElBQUcsQ0FBQyxLQUFHLE1BQUksRUFBRSxLQUFLLENBQUMsS0FBSSxHQUFFLEtBQUcsR0FBRyxHQUFFLENBQUMsSUFBRSxJQUFFLEVBQUUsQ0FBQztBQUFBLEVBQUMsR0FBRSxDQUFDLEdBQUUsS0FBRyxFQUFFLEtBQUssS0FBSyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxDQUFBO0FBQUcsU0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFDLFFBQU8sR0FBRSxNQUFLLEVBQUMsTUFBSTtBQUFDLE1BQUUsS0FBSyxDQUFDLEVBQUcsR0FBQyxJQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsS0FBRyxFQUFFLEtBQUssR0FBRyxHQUFFLENBQUMsSUFBRSxDQUFDLEdBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRSxFQUFFLFVBQVEsRUFBRSxJQUFJLElBQUUsSUFBRSxDQUFDO0FBQUEsRUFBQyxHQUFFLFVBQVUsR0FBRSxHQUFHLENBQUM7QUFBQztBQUFDLElBQUksS0FBRyw0dFNBQTJ0UyxLQUFHLE9BQUcsR0FBRyxLQUFLLENBQUMsR0FBRSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEVBQUUsV0FBUyxJQUFFLElBQUUsRUFBRSxZQUFhLEVBQUMsUUFBUSx1Q0FBc0MsTUFBTSxFQUFFLFFBQVEsNEJBQTJCLElBQUksRUFBRSxRQUFRLGVBQWMsTUFBTSxFQUFFLFFBQVEsc0JBQXFCLElBQUksRUFBRSxRQUFRLGNBQWEsRUFBRTtBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsSUFBSSxLQUFHLG9CQUFJO0FBQVEsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFNLHNCQUFzQixLQUFLLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFPLEVBQUUsV0FBUyxVQUFRLEVBQUUsV0FBUyxXQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRSxFQUFFLE1BQUksRUFBRSxJQUFJLFFBQU0sUUFBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksS0FBSyxLQUFHLEVBQUUsRUFBRSxXQUFTLGNBQVksRUFBRSxTQUFPLG1CQUFpQixFQUFFLFdBQVMsZ0JBQWMsRUFBRSxTQUFPLHlCQUF1QixHQUFHLEVBQUUsSUFBSSxLQUFLLEtBQUcsT0FBTyxPQUFPLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBSSxFQUFFLElBQUksU0FBTyxFQUFFLFNBQU8sc0JBQW9CLEVBQUUsV0FBUyxXQUFTLEVBQUUsV0FBUyxXQUFTLEVBQUUsV0FBUyxZQUFVLEVBQUUsV0FBUyxhQUFXLEVBQUUsV0FBUztBQUFrQjtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsS0FBSSxFQUFDLElBQUUsRUFBRTtBQUFLLFVBQU8sRUFBRSxTQUFPLGdCQUFjLEdBQUcsQ0FBQyxLQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUcsT0FBTyxFQUFFLEtBQUssTUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUcsRUFBRSxFQUFFLFdBQVMsZ0JBQWMsRUFBRSxXQUFTLGlCQUFlLEVBQUUsV0FBUyxVQUFRLEVBQUUsV0FBUyxXQUFTLEVBQUUsZUFBYSxnQkFBYyxHQUFHLElBQUksRUFBRSxNQUFNO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxNQUFHLEVBQUUsU0FBUyxRQUFNLENBQUMsS0FBSSxFQUFFLEtBQUssR0FBRSxHQUFHO0FBQUUsTUFBRyxFQUFDLFFBQU8sRUFBQyxJQUFFLEdBQUUsRUFBQyxLQUFJLEVBQUMsSUFBRTtBQUFFLE1BQUcsRUFBRSxlQUFhLGdCQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLFNBQVMsS0FBSyxPQUFHLENBQUMsRUFBRSxZQUFVLEdBQUcsRUFBRSxHQUFHLEtBQUcsQ0FBQyxHQUFHLEdBQUUsQ0FBQyxDQUFDO0FBQUUsT0FBRyxJQUFJLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUU7QUFBQyxRQUFJLElBQUUsR0FBRyxLQUFLLFVBQVUsRUFBRSxTQUFPLGVBQWEsRUFBRSxPQUFLLEVBQUUsTUFBTSxTQUFRLENBQUUsR0FBRSxDQUFDO0FBQUUsV0FBTyxFQUFFLEtBQUssT0FBRyxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsS0FBSztBQUFBLEVBQUM7QUFBQyxTQUFPLEdBQUcsR0FBRSxDQUFDLE1BQUksRUFBRSxlQUFhLGVBQWEsRUFBRSxlQUFhLGdCQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBRyxFQUFFLEtBQUssT0FBRyxHQUFHLEdBQUUsT0FBTyxLQUFLLEVBQUUsS0FBSyxJQUFFLEdBQUcsRUFBRSxLQUFLLElBQUUsRUFBRSxPQUFNLENBQUMsR0FBRSxLQUFLLElBQUUsRUFBRSxLQUFLO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxTQUFPLEVBQUUsWUFBVSxFQUFFLE9BQU8sSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFJLE9BQU87QUFBQztBQUFDLElBQUksS0FBRyxDQUFDLEVBQUMsTUFBSyxHQUFFLEtBQUksR0FBRSxRQUFPLEVBQUMsTUFBSSxNQUFJLFdBQVMsRUFBRSxTQUFPLHlCQUF1QixFQUFFLFNBQU8sa0JBQWdCLEVBQUUsU0FBTyxpQkFBZSxFQUFFLFNBQU8sd0JBQXNCLEVBQUUsU0FBTyxzQkFBb0IsRUFBRSxTQUFPLGdDQUE4QixFQUFFLFNBQU8scUJBQW1CLEVBQUUsU0FBTyxjQUFZLEdBQUcsQ0FBQztBQUFHLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxHQUFHLENBQUMsRUFBRSxRQUFPLEdBQUcsR0FBRSxHQUFFLENBQUM7QUFBRSxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFO0FBQUcsT0FBSSxFQUFFLFNBQU8seUJBQXVCLEVBQUUsU0FBTywwQkFBd0IsS0FBRyxRQUFNLEVBQUUsZ0JBQWU7QUFBQyxRQUFHLEVBQUMsUUFBTyxFQUFDLElBQUU7QUFBRSxNQUFFLENBQUMsTUFBSSxHQUFHLENBQUMsRUFBRSxTQUFPLEtBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxPQUFHLEVBQUUsU0FBTyxnQkFBYyxDQUFDLEVBQUUsY0FBYyxPQUFLLElBQUU7QUFBQSxFQUFHO0FBQUMsTUFBSSxJQUFFLENBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxRQUFNLFdBQVMsSUFBRyxXQUFXLEVBQUUsWUFBVSxNQUFJLEVBQUUsS0FBSSxFQUFFLEtBQUcsRUFBRSxJQUFJLElBQUUsRUFBRSxHQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxTQUFPLEVBQUUsS0FBSyxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxDQUFDLElBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxFQUFFLE9BQUssTUFBSSxJQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUUsRUFBRSxTQUFPLEVBQUUsV0FBUyxDQUFDLEVBQUUsU0FBTyxFQUFFLEtBQUssR0FBRyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLENBQUU7QUFBQyxTQUFNLENBQUMsS0FBRyxNQUFJLFVBQVEsTUFBSSxZQUFVLE1BQUksZ0JBQWMsRUFBRSxTQUFPLEVBQUUsS0FBSyxRQUFRLEtBQUcsR0FBRyxHQUFHLE1BQUksU0FBTyxNQUFJLEtBQUssR0FBRSxFQUFFLEtBQUssR0FBRSxHQUFHLElBQUcsRUFBRSxhQUFXLEVBQUUsS0FBSyxHQUFHLEdBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFFLFlBQVUsRUFBRSxJQUFJLFdBQVMsTUFBSSxJQUFHLE1BQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxHQUFFLEVBQUMsYUFBWSxLQUFFLENBQUMsSUFBRSxJQUFFLEVBQUUsQ0FBQyxJQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7QUFBRSxTQUFPLEVBQUUsT0FBSyxFQUFFLEtBQUssS0FBSSxFQUFFLE1BQU0sQ0FBQyxJQUFFLEVBQUUsS0FBSyxFQUFFLE9BQUssTUFBSSxFQUFFLEdBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFNBQU8sRUFBRSxXQUFTLEtBQUcsQ0FBQyxFQUFFLGtCQUFnQixDQUFDLEVBQUUsR0FBRSxFQUFFLFFBQVEsS0FBRyxFQUFFLENBQUMsRUFBRSxTQUFPLGdCQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsa0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBVSxDQUFDLEVBQUUsYUFBVyxDQUFDLEVBQUU7QUFBVTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUUsZ0JBQWMsU0FBUyxRQUFRO0FBQUMsTUFBRyxFQUFFLGdCQUFjLFNBQVE7QUFBQyxRQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxXQUFPLEdBQUcsQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFRO0FBQUE7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxDQUFDLEVBQUUsR0FBRSxHQUFFLFlBQVksQ0FBQztBQUFFLFNBQU8sRUFBRSxhQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsT0FBSyxNQUFJLElBQUcsSUFBRSxDQUFFO0FBQUMsTUFBRyxFQUFFLFVBQVM7QUFBQyxRQUFJLElBQUUsRUFBRSxVQUFVO0FBQUUsT0FBRyxHQUFFLEVBQUUsUUFBUSxJQUFFLElBQUUsQ0FBQyxLQUFJLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLEdBQUUsR0FBRyxLQUFHLEdBQUcsRUFBRSxRQUFRLEtBQUcsRUFBRSxTQUFTLFNBQU8sd0JBQXNCLEVBQUUseUJBQXVCLEVBQUUsU0FBUyxTQUFPLDRCQUEwQixFQUFFLFNBQVMsV0FBVyxTQUFPLDJCQUF5QixFQUFFLFNBQVMsVUFBVSxTQUFPLDhCQUE0QixJQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRSxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsR0FBRSxHQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBRyxFQUFFLEtBQUssS0FBSSxDQUFDO0FBQUEsRUFBQztBQUFDLE1BQUksSUFBRSxFQUFFLEdBQUUsRUFBRSxRQUFRLEdBQUUsSUFBRSxLQUFHLEtBQUcsRUFBRSxHQUFFLEVBQUUsT0FBSyxFQUFFLElBQUk7QUFBRSxTQUFPLEtBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxLQUFHLEVBQUUsS0FBSyxLQUFJLEVBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxLQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU0sQ0FBQyxVQUFTLEdBQUcsR0FBRSxHQUFFLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxDQUFDLFNBQVEsR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxHQUFHLEVBQUUsY0FBYSxDQUFDLEtBQUcsRUFBRSxHQUFFLEVBQUUsU0FBUSxPQUFHLEdBQUcsRUFBRSxjQUFhLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVE7QUFBQyxNQUFHLEdBQUcsQ0FBQyxHQUFFO0FBQUMsUUFBSSxJQUFFLEdBQUU7QUFBRSxXQUFLLElBQUUsR0FBRyxDQUFDLElBQUcsS0FBRyxJQUFFLEdBQUUsR0FBRyxFQUFFLGNBQWEsQ0FBQyxFQUFFLFFBQU07QUFBQSxFQUFFO0FBQUMsU0FBUTtBQUFBO0FBQUMsSUFBSSxLQUFHLG9CQUFJO0FBQVEsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUcsR0FBRyxJQUFJLEdBQUUsRUFBRSxTQUFPLDJCQUF5QixDQUFDLEdBQUcsR0FBRSxPQUFHLEVBQUUsU0FBTyxrQkFBa0IsQ0FBQyxHQUFFLEdBQUcsSUFBSSxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUcsT0FBRyxFQUFFLFNBQU87QUFBcUIsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLElBQUUsQ0FBQSxHQUFHO0FBQUMsTUFBSSxJQUFFLENBQUEsR0FBRyxHQUFFLElBQUUsQ0FBQSxHQUFHLElBQUUsT0FBRyxJQUFFLENBQUMsRUFBRSxpQkFBZSxFQUFFLEtBQUssS0FBSyxTQUFPLDJCQUEwQjtBQUFFLEdBQUMsU0FBUyxJQUFHO0FBQUMsUUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxHQUFHLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsV0FBUyxFQUFFLEdBQUUsS0FBSyxDQUFDO0FBQUEsU0FBTTtBQUFDLFVBQUcsRUFBQyxTQUFRLEdBQUUsVUFBUyxFQUFDLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxRQUFFLEtBQUssQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsUUFBUSxDQUFDO0FBQUEsSUFBQztBQUFDLFVBQUksTUFBSSxJQUFFLEVBQUUsY0FBWSxFQUFFLENBQUMsRUFBRSxTQUFPLEtBQUcsRUFBRSxrQkFBZ0IsRUFBRSxDQUFDLEVBQUUsS0FBSyxPQUFHLEVBQUUsU0FBTyxZQUFZLEtBQUksQ0FBQyxLQUFHLEVBQUUsS0FBSyxTQUFPLDZCQUEyQixJQUFFLEVBQUUsUUFBTyxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQU0sRUFBRSxLQUFLLEdBQUUsTUFBTTtBQUFBLEVBQUMsR0FBQztBQUFJLE1BQUksSUFBRSxDQUFDLEdBQUcsRUFBRSxjQUFhLENBQUMsTUFBSSxHQUFHLENBQUMsS0FBRyxHQUFHLEdBQUUsR0FBRSxDQUFDLEtBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxJQUFHLElBQUUsRUFBRSxRQUFNLFlBQVUsR0FBRyxFQUFFLE1BQU0sR0FBRSxJQUFFLE9BQU8sYUFBYSxHQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsRUFBQyxlQUFjLEdBQUUsYUFBWSxFQUFDLENBQUMsR0FBRSxJQUFFLE9BQUcsSUFBRSxPQUFHLElBQUU7QUFBRyxTQUFPLE1BQUksS0FBRyxFQUFFLHNCQUFvQixJQUFFLE1BQUcsSUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFLLEVBQUUsVUFBUSxFQUFFLElBQUksR0FBRSxJQUFFLEVBQUUscUJBQW1CLDRCQUEwQixLQUFHLENBQUMsSUFBRyxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsRUFBQyxTQUFRLEdBQUUsY0FBYSxHQUFFLGNBQWEsR0FBRSx5QkFBd0IsRUFBQyxDQUFDLEdBQUUsRUFBRSxDQUFDLEVBQUUsSUFBRSxFQUFFLENBQUMsSUFBRSxJQUFFLElBQUcsQ0FBQyxDQUFDLElBQUUsR0FBRSxFQUFDLGFBQVksR0FBRSxJQUFHLEVBQUMsQ0FBQyxHQUFFLE9BQU0sSUFBRSxHQUFHLEdBQUUsRUFBQyxTQUFRLEVBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEtBQUcsSUFBRSxFQUFFLEdBQUUsSUFBRyxFQUFDLFNBQVEsRUFBQyxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQTtBQUFHLE1BQUcsRUFBRSxTQUFPLEVBQUUsS0FBSyxRQUFRLEdBQUUsR0FBRyxHQUFFLENBQUMsRUFBRSxHQUFFLEtBQUssRUFBRSxDQUFDLFVBQVMsQ0FBQyxDQUFDLENBQUM7QUFBQSxPQUFNO0FBQUMsUUFBSSxJQUFFLEVBQUUsaUJBQWUsRUFBRSxnQkFBZSxJQUFFLEdBQUcsR0FBRSxDQUFDO0FBQUUsUUFBRyxHQUFFO0FBQUMsVUFBRyxHQUFHLENBQUMsRUFBRSxPQUFNLElBQUk7QUFBRyxVQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsTUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUFDLE1BQUksSUFBRSxFQUFFLEdBQUUsR0FBRSxFQUFDLE9BQU8sR0FBRTtBQUFDLFFBQUksSUFBRSxHQUFHLEVBQUUsY0FBYSxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU8sTUFBSSxTQUFJLEVBQUUsYUFBYSxNQUFNLEdBQUUsSUFBRSxDQUFDLE1BQUk7QUFBQSxFQUFJLEVBQUMsQ0FBQztBQUFFLFNBQU8sS0FBRyxFQUFFLEtBQUssS0FBSSxDQUFDLEdBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksR0FBRTtBQUFFLFNBQU8sRUFBRSxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsRUFBRSxTQUFPLDZCQUEyQixFQUFFLFNBQU8sa0JBQWdCLEVBQUUsU0FBTyxvQkFBa0IsRUFBRSxDQUFDLE9BQUssSUFBRSxFQUFFLFVBQVEsT0FBSyxTQUFPLEVBQUUsU0FBTyxZQUFPLElBQUUsRUFBRSxVQUFRLE9BQUssU0FBTyxFQUFFLFVBQVEsR0FBRyxHQUFFLEVBQUUsWUFBWTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxFQUFDLGVBQWMsR0FBRSxhQUFZLEVBQUMsR0FBRTtBQUFDLE1BQUcsRUFBRSxXQUFTLEVBQUUsUUFBTyxFQUFFLENBQUM7QUFBRSxNQUFHLEVBQUMsUUFBTyxHQUFFLEtBQUksRUFBQyxJQUFFO0FBQUUsU0FBTyxNQUFJLFlBQVUsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLElBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLE9BQU0sRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLE9BQU0sQ0FBQyxHQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxFQUFDLGFBQVksRUFBQyxDQUFDLElBQUUsTUFBSSxZQUFVLEdBQUcsQ0FBQyxLQUFHLEVBQUUsbUJBQWlCLEVBQUUsRUFBRSxDQUFDLE9BQU0sQ0FBQyxHQUFFLENBQUMsR0FBRSxFQUFDLGFBQVksRUFBQyxDQUFDLElBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFNLENBQUMsR0FBRSxDQUFDLENBQUMsR0FBRSxFQUFDLGFBQVksRUFBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsRUFBQyxTQUFRLEdBQUUsY0FBYSxHQUFFLGNBQWEsR0FBRSx5QkFBd0IsRUFBQyxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssR0FBRSxRQUFPLEVBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxpQkFBZSxHQUFHLEdBQUUsS0FBSyxJQUFFLEVBQUUsR0FBRyxJQUFFLElBQUcsS0FBRyxFQUFFLGlCQUFlLEVBQUUsU0FBTyw2QkFBMkIsQ0FBQyxFQUFFLENBQUMsSUFBRSxJQUFFO0FBQUcsU0FBTyxLQUFHLEdBQUcsQ0FBQyxJQUFFLENBQUMsS0FBSSxFQUFFLENBQUMsRUFBRSxJQUFHLEdBQUcsR0FBRSxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsR0FBRSxFQUFFLElBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxNQUFJLElBQUUsRUFBRSxDQUFDLEtBQUksRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUUsR0FBRSxHQUFHLENBQUMsSUFBRyxJQUFFLENBQUMsS0FBSSxHQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsR0FBRSxDQUFDO0FBQUU7QUFBQyxJQUFJLEtBQUcsQ0FBQyxHQUFFLEdBQUUsTUFBSTtBQUFDLE1BQUcsRUFBRSxLQUFHLEtBQUcsT0FBTTtBQUFDLFFBQUcsRUFBRSxTQUFTLFFBQU8sRUFBRSxTQUFTLENBQUM7QUFBRSxhQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBRyxHQUFFLEtBQUk7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRyxFQUFFLEdBQUUsR0FBRSxDQUFDLEVBQUUsUUFBTztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsR0FBRSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLENBQUUsR0FBQyxJQUFFLEdBQUcsT0FBRyxFQUFFLENBQUMsR0FBRSxPQUFHLEVBQUUsU0FBTyxnQkFBZ0I7QUFBRSxTQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBSyxFQUFDLE1BQUk7QUFBQyxNQUFFLFNBQU8scUJBQW1CLEVBQUUsS0FBSyxFQUFHLENBQUEsR0FBRSxNQUFJLE1BQUksRUFBRSxLQUFLLENBQUMsR0FBRSxHQUFHLEdBQUUsQ0FBQyxLQUFHLEVBQUUsS0FBSyxDQUFDO0FBQUEsRUFBRyxHQUFFLENBQUMsR0FBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFDLE1BQUssR0FBRSxRQUFPLEVBQUMsSUFBRTtBQUFFLE1BQUcsRUFBRSxTQUFPLGNBQVksS0FBRyxPQUFLLFNBQU8sRUFBRSxVQUFRLG1CQUFtQixRQUFPLElBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRTtBQUFHLE1BQUksSUFBRSxDQUFBO0FBQUcsTUFBRyxFQUFFLFNBQU8saUJBQWUsRUFBRSxLQUFLLFNBQVMsR0FBRSxFQUFFLEtBQUssR0FBRyxHQUFFLEVBQUUsR0FBRSxLQUFLLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLENBQUM7QUFBQSxPQUFNO0FBQUMsUUFB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LEdBQUUsRUFBRSxFQUFFLHFCQUFtQix1QkFBcUIscUJBQXFCLENBQUMsR0FBRSxJQUFFLEVBQUUsS0FBSyxPQUFHLENBQUMsWUFBVyxHQUFHLEdBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxZQUFZO0FBQUUsUUFBRSxFQUFFLEtBQUssR0FBRSxFQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsS0FBSyxLQUFJLENBQUM7QUFBQSxFQUFDLE1BQU0sR0FBRSxLQUFLLEdBQUcsR0FBRSxHQUFFLEdBQUUsU0FBUyxDQUFDO0FBQUUsSUFBRSxLQUFLLEdBQUcsR0FBRSxHQUFFLEdBQUUsUUFBUSxHQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsWUFBWSxDQUFDO0FBQUUsTUFBSTtBQUFFLE1BQUcsR0FBRTtBQUFDLFFBQUk7QUFBRSxPQUFHLENBQUMsSUFBRSxJQUFFLENBQUMsR0FBRyxHQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUUsSUFBRSxFQUFFLENBQUMsR0FBRyxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRSxFQUFDLElBQUcsRUFBQyxDQUFDLENBQUM7QUFBQSxFQUFDLE1BQU0sR0FBRSxLQUFLLEdBQUcsR0FBRSxHQUFHLENBQUM7QUFBRSxNQUFJLElBQUUsRUFBRTtBQUFLLFNBQU8sS0FBRyxFQUFFLEVBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUUsS0FBSSxFQUFDLFNBQVEsRUFBQyxDQUFDLENBQUMsSUFBRSxFQUFFLEtBQUssR0FBRyxHQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFFO0FBQUM7QUFBQyxJQUFJLEtBQUcsR0FBRyxlQUFlO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEVBQUUsR0FBRSxJQUFHLEVBQUMsU0FBUSxHQUFHLENBQUMsRUFBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU0sQ0FBQyxXQUFVLFVBQVMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFFLE1BQUksS0FBRyxNQUFNLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLENBQUMsRUFBRSxTQUFPLElBQUcsRUFBRSxhQUFXLElBQUUsQ0FBQyxJQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxrQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsZ0JBQWUsRUFBRSxXQUFTLEVBQUUsSUFBSSxLQUFHLENBQUMsR0FBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRTtBQUFFLE1BQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBTTtBQUFHLE1BQUksSUFBRSxFQUFFLEdBQUUsR0FBRSxFQUFDLFFBQU8sRUFBQyxDQUFDO0FBQUUsU0FBTSxDQUFDLEdBQUcsQ0FBQyxJQUFFLEVBQUUsS0FBSSxHQUFFLEVBQUMsU0FBUSxHQUFHLEVBQUUsY0FBYyxFQUFDLENBQUMsSUFBRSxHQUFFLEdBQUUsS0FBRyxHQUFFLEdBQUUsRUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsS0FBSSxDQUFDLEdBQUUsRUFBRSxJQUFJLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLFlBQVksR0FBRSxFQUFDLFFBQU8sRUFBQyxJQUFFO0FBQUUsU0FBTyxFQUFFLFNBQU8seUJBQXVCLEVBQUUsRUFBRSxDQUFDLEtBQUksRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUUsR0FBRSxHQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQTtBQUFHLFNBQU8sRUFBRSxFQUFFLFVBQVUsS0FBRyxFQUFFLEtBQUssR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUUsRUFBRSxVQUFRLEVBQUUsS0FBSyxTQUFTLEdBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUUsRUFBRSxZQUFVLEVBQUUsS0FBSyxXQUFXLEdBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRSxHQUFFLENBQUMsQ0FBQyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLENBQUUsR0FBQyxJQUFFLEVBQUUsT0FBSyxNQUFJO0FBQUcsSUFBRSxFQUFFLFVBQVUsS0FBRyxFQUFFLEtBQUssR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUUsRUFBRSxVQUFRLEVBQUUsS0FBSyxTQUFTLEdBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUUsRUFBRSxZQUFVLEVBQUUsS0FBSyxXQUFXLEdBQUUsRUFBRSxZQUFVLEVBQUUsS0FBSyxXQUFXLEdBQUUsRUFBRSxZQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFHLEVBQUUsU0FBTywyQkFBeUIsRUFBRSxTQUFPLHNCQUFvQixFQUFFLFNBQU8saUNBQStCLEVBQUUsS0FBSyxXQUFXLEdBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsR0FBRSxHQUFHLENBQUMsR0FBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUUsTUFBSSxJQUFFLEVBQUUsU0FBTyxrQ0FBZ0MsRUFBRSxTQUFPO0FBQTZCLFNBQU0sQ0FBQyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsTUFBSyxJQUFFLFNBQU8sT0FBTyxHQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQTtBQUFHLFNBQU8sRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFLLEdBQUUsTUFBSyxHQUFFLFFBQU8sRUFBQyxNQUFJO0FBQUMsTUFBRSxLQUFLLEVBQUMsQ0FBRSxHQUFFLENBQUMsRUFBRSxRQUFNLEdBQUcsQ0FBQyxLQUFHLEdBQUcsR0FBRSxDQUFDLEtBQUcsRUFBRSxLQUFLLEdBQUcsR0FBRSxNQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUUsR0FBRyxHQUFFLENBQUMsS0FBRyxFQUFFLEtBQUssQ0FBQztBQUFBLEVBQUUsR0FBRSxNQUFNLEdBQUUsRUFBRSxHQUFFLEVBQUUsUUFBUSxLQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxLQUFJLEVBQUUsU0FBTyxJQUFFLENBQUMsRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxJQUFFLElBQUcsR0FBRztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHLEVBQUMsTUFBSyxHQUFFLE1BQUssRUFBQyxJQUFFLEVBQUU7QUFBSSxNQUFHLENBQUMsRUFBRSxZQUFVLE1BQUksaUJBQWUsTUFBSSxZQUFVLE1BQUksU0FBTyxNQUFJLFVBQVEsQ0FBQyxFQUFFLFNBQU8sQ0FBQyxFQUFFLGVBQWUsUUFBUTtBQUFDLE1BQUcsQ0FBQyxLQUFHLEVBQUUsVUFBUSxFQUFFLGlCQUFlLEVBQUUsU0FBUyxRQUFNO0FBQUcsTUFBRyxDQUFDLEVBQUUsVUFBUztBQUFDLFFBQUksS0FBRyxJQUFFLEVBQUUsUUFBTSxPQUFLLFNBQU8sRUFBRTtBQUFLLFFBQUcsTUFBSSxRQUFNLE1BQUksYUFBYSxRQUFRO0FBQUEsRUFBQTtBQUFDLE1BQUcsR0FBRyxDQUFDLEtBQUcsRUFBRSxZQUFVLENBQUMsRUFBRSxVQUFRLENBQUMsRUFBRSxRQUFRLFFBQU07QUFBRyxVQUFPLEVBQUUsTUFBSTtBQUFBLElBQUUsS0FBSTtBQUFBLElBQWdCLEtBQUk7QUFBQSxJQUFxQixLQUFJO0FBQStCLGFBQU8sRUFBRTtBQUFBLElBQVMsS0FBSTtBQUFB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QUFBLFNBQVUsS0FBRyxFQUFFLFNBQU8sRUFBRSxRQUFNLEVBQUUsTUFBTSxPQUFHLEVBQUUsQ0FBQyxNQUFJLENBQUM7QUFBRyxNQUFJLElBQUUsS0FBRyxHQUFFLElBQUU7QUFBRSxNQUFHLE1BQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBRyxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsS0FBRyxHQUFHLENBQUMsSUFBRztBQUFDLFFBQUUsTUFBRyxJQUFFO0FBQUcsUUFBSSxJQUFFLE9BQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRSxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsR0FBRSxHQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUUsS0FBRyxPQUFHLEVBQUUsU0FBTyxpQkFBZSxFQUFFLFNBQU8sYUFBVyxFQUFFLFVBQVEsUUFBTSxFQUFFLFNBQU8sZ0JBQWMsRUFBRSxTQUFPO0FBQVksTUFBRSxLQUFLLE9BQU0sR0FBRyxDQUFDLElBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLE9BQU0sRUFBRSxTQUFPLEVBQUUsUUFBTSxHQUFHLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUFDLE9BQUs7QUFBQyxRQUFJLElBQUUsT0FBRyxFQUFFLFVBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFFLEdBQUcsR0FBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLEtBQUcsQ0FBQyxHQUFFLE1BQUssRUFBRSxTQUFPLEVBQUUsT0FBSyxFQUFFLElBQUcsR0FBRyxJQUFFLElBQUcsRUFBRSxDQUFDLEdBQUUsRUFBRSxTQUFPLEVBQUUsT0FBSyxFQUFFLElBQUcsR0FBRyxJQUFFLElBQUcsR0FBRSxNQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsTUFBRSxLQUFLLEVBQUUsU0FBTyxFQUFFLFFBQU0sRUFBRSxDQUFDLE1BQUksS0FBRyxJQUFFLEtBQUcsRUFBRSxVQUFRLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBRSxHQUFHLEtBQUssSUFBSSxHQUFFLEVBQUUsV0FBUyxDQUFDLEdBQUUsRUFBRSxDQUFDO0FBQUEsRUFBQztBQUFDLE1BQUksSUFBRSxDQUFDLEdBQUUsR0FBRSxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQUcsRUFBRSxFQUFFLENBQUMsR0FBRSxRQUFJLEdBQUcsRUFBRSxLQUFHLEdBQUcsRUFBRSxjQUFhLEVBQUUsRUFBRSxHQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFFLElBQUUsT0FBRyxNQUFJLElBQUUsRUFBRSxHQUFFLEVBQUMsYUFBWSxFQUFDLENBQUMsSUFBRSxJQUFFLENBQUMsR0FBRSxFQUFFLElBQUUsR0FBRSxJQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsS0FBRyxFQUFFLFNBQU8sc0JBQW9CLEVBQUUsU0FBTyxNQUFJLENBQUMsRUFBRSxVQUFTLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxLQUFHLEtBQUcsQ0FBQyxJQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsU0FBTyxLQUFHLElBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxJQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsVUFBTyxFQUFFLENBQUMsS0FBRyxFQUFFLFNBQU8sc0JBQW9CLEVBQUUsU0FBTyxNQUFJLENBQUMsRUFBRTtBQUFRO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFNLENBQUMsR0FBRyxFQUFFLElBQUksT0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBTSxFQUFDLEtBQUssT0FBRyxHQUFHLENBQUMsS0FBRyxHQUFHLEVBQUUsY0FBYSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUcs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RSxLQUFHLEdBQUcsR0FBRSxDQUFDLEdBQUUsS0FBRyxJQUFFLEVBQUUsVUFBUSxNQUFJLElBQUksT0FBTyxFQUFFLFdBQVMsQ0FBQyxJQUFFLElBQUcsS0FBRyxHQUFHLEdBQUUsR0FBRSxHQUFFLENBQUMsS0FBRyxLQUFHLEdBQUUsS0FBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLENBQUMsTUFBSSxJQUFFLEVBQUUsU0FBTyxpQkFBZSxFQUFFLFNBQU8sYUFBVyxFQUFFLFVBQVEsT0FBSyxHQUFHLEdBQUUsQ0FBQyxLQUFHLEdBQUcsRUFBRSxNQUFLLENBQUMsSUFBRyxLQUFHLEtBQUcsS0FBRyxLQUFHLENBQUMsS0FBRyxLQUFHLEtBQUcsR0FBRyxFQUFFLE1BQUssQ0FBQyxLQUFHLElBQUcsS0FBRyxDQUFFO0FBQUMsR0FBQyxLQUFHLEVBQUUsR0FBRSxFQUFFLFFBQVEsS0FBRyxFQUFFLEtBQUssUUFBSTtBQUFDLE9BQUcsS0FBSyxFQUFFLElBQUcsQ0FBQyxHQUFFLENBQUM7QUFBQSxFQUFDLEdBQUUsWUFBWTtBQUFFLE1BQUksS0FBRyxDQUFFO0FBQUMsSUFBRSxFQUFFLE1BQUssRUFBRSxRQUFRLEtBQUcsRUFBRSxLQUFLLFFBQUk7QUFBQyxPQUFHLEtBQUssRUFBRSxJQUFHLENBQUMsQ0FBQztBQUFBLEVBQUMsR0FBRSxNQUFNLEdBQUUsQ0FBQyxLQUFHLEVBQUUsR0FBRSxFQUFFLFFBQVEsS0FBRyxFQUFFLEtBQUssUUFBSTtBQUFDLE9BQUcsS0FBSyxFQUFFLElBQUcsQ0FBQyxDQUFDO0FBQUEsRUFBQyxHQUFFLFdBQVcsR0FBRSxFQUFFLEdBQUUsRUFBRSxRQUFRLEtBQUcsR0FBRyxLQUFLLEVBQUUsR0FBRSxDQUFDLENBQUM7QUFBRSxNQUFJLEtBQUcsT0FBTyxNQUFNLEdBQUUsS0FBRyxPQUFPLFlBQVksR0FBRSxLQUFHLE9BQU8scUJBQXFCLEdBQUUsS0FBRyxJQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFFLEVBQUUsS0FBSyxTQUFPLDBCQUF3QixLQUFHLEVBQUUsSUFBRSxDQUFDLEVBQUUsV0FBVyxHQUFFLEtBQUksV0FBVSxLQUFJLEdBQUcsRUFBRSxXQUFXLEtBQUcsRUFBRSxZQUFZLFNBQU8saUJBQWUsRUFBRSxhQUFhLElBQUUsRUFBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFFLEtBQUcsRUFBRSxDQUFDLElBQUcsSUFBSSxHQUFFLEVBQUMsSUFBRyxHQUFFLENBQUMsR0FBRSxLQUFHLEVBQUUsQ0FBQyxHQUFFLEtBQUcsRUFBRSxDQUFDLEtBQUcsTUFBSSxFQUFFLENBQUMsS0FBRyxLQUFHLEtBQUcsSUFBRSxHQUFFLElBQUcsRUFBRSxDQUFDLEdBQUUsS0FBRyxLQUFHLEVBQUUsQ0FBQyxJQUFHLElBQUUsS0FBRyxFQUFFLElBQUcsRUFBRSxJQUFHLEVBQUMsSUFBRyxHQUFFLENBQUMsR0FBRSxFQUFDLFNBQVEsR0FBRSxDQUFDLENBQUMsR0FBRSxFQUFDLElBQUcsR0FBRSxDQUFDLElBQUUsQ0FBQyxJQUFHLEVBQUUsR0FBRSxLQUFHLEVBQUUsQ0FBQyxHQUFFLEtBQUcsS0FBRyxFQUFFLElBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUMsU0FBUSxHQUFFLENBQUMsSUFBRSxJQUFHLEtBQUcsQ0FBQyxJQUFHLEdBQUcsU0FBTyxJQUFFLENBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLEdBQUUsQ0FBQyxJQUFFLElBQUUsSUFBRSxLQUFHLEVBQUUsR0FBRSxLQUFJLEVBQUMsU0FBUSxHQUFFLENBQUMsSUFBRSxHQUFFLEtBQUksSUFBRSxNQUFJLElBQUUsS0FBRyxFQUFFLElBQUcsRUFBRSxLQUFHLEtBQUcsTUFBSSxJQUFHLEdBQUcsR0FBRSxFQUFDLFNBQVEsR0FBRSxDQUFDLElBQUUsRUFBRSxJQUFHLEdBQUcsSUFBRSxLQUFJLElBQUUsS0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUUsS0FBRyxDQUFDLEtBQUcsSUFBRSxFQUFFLENBQUMsR0FBRSxNQUFJLENBQUMsS0FBRyxJQUFFLElBQUcsS0FBRyxLQUFHLEVBQUU7QUFBRSxTQUFPLEtBQUcsQ0FBQyxLQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUUsS0FBRyxLQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBRSxNQUFJLEtBQUcsSUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxJQUFFLEVBQUUsQ0FBQyxJQUFFLE1BQUksSUFBRSxFQUFFLEVBQUUsSUFBRTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxNQUFHLEdBQUcsQ0FBQyxFQUFFLFFBQU8sR0FBRyxHQUFFLENBQUM7QUFBRSxNQUFJLElBQUUsRUFBRSxPQUFLLE1BQUksSUFBRyxJQUFFLENBQUU7QUFBQyxVQUFPLEVBQUUsTUFBTTtBQUFBLElBQUEsS0FBSTtBQUFtQixhQUFPLEVBQUUsTUFBTTtBQUFBLElBQUUsS0FBSTtBQUFXLGFBQU0sQ0FBQyxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUEsSUFBRSxLQUFJO0FBQU8sYUFBTyxHQUFHLEdBQUUsR0FBRSxDQUFDLEtBQUcsRUFBRSxTQUFTO0FBQUEsSUFBRSxLQUFJO0FBQWlCLGFBQU07QUFBQSxJQUFHLEtBQUk7QUFBc0IsYUFBTyxHQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUEsSUFBRSxLQUFJO0FBQWtCLGFBQU8sRUFBRSxZQUFZO0FBQUEsSUFBRSxLQUFJO0FBQTBCLGFBQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxNQUFJLEdBQUcsRUFBRSxVQUFVLEtBQUcsRUFBRSxFQUFFLFVBQVUsS0FBRyxDQUFDLEtBQUksRUFBRSxZQUFZLEdBQUUsR0FBRyxJQUFFLEVBQUUsQ0FBQyxLQUFJLEVBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBRSxHQUFFLEdBQUcsQ0FBQztBQUFBLElBQUUsS0FBSTtBQUF1QixhQUFPLEdBQUcsR0FBRSxHQUFFLENBQUM7QUFBQSxJ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LEdBQUUsR0FBRyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsSUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLFdBQVc7QUFBRSxJQUFFLE1BQUksRUFBRSxLQUFLLEtBQUksRUFBRSxJQUFJLENBQUMsR0FBRSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQztBQUFFLE1BQUksSUFBRSxHQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUUsU0FBTyxFQUFFLGNBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsUUFBTSxFQUFFLEtBQUssS0FBSSxFQUFFLE1BQU0sQ0FBQyxHQUFFLEVBQUUsUUFBTSxFQUFFLFNBQU8sc0JBQW9CLEVBQUUsS0FBSyxHQUFHLEdBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsRUFBRTtBQUFPLE1BQUcsRUFBRSxTQUFPLElBQUUsQ0FBQyxHQUFHLEdBQUUsRUFBRSxJQUFJLElBQUcsRUFBRSxXQUFTLEVBQUUsUUFBTSxDQUFDLEtBQUksRUFBRSxHQUFFLEdBQUUsRUFBQyxRQUFPLE9BQUcsR0FBRyxFQUFFLGNBQWEsRUFBRSxDQUFDLENBQUMsTUFBSSxJQUFHLENBQUMsR0FBRSxHQUFHO0FBQUUsTUFBSSxJQUFFLENBQUU7QUFBQyxTQUFPLEdBQUcsR0FBRSxDQUFDLEdBQUUsTUFBSTtBQUFDLFFBQUksSUFBRSxNQUFJLEVBQUUsU0FBTztBQUFFLFNBQUcsRUFBRSxRQUFNLEVBQUUsS0FBSyxLQUFLLEdBQUUsRUFBRSxLQUFLLEVBQUcsQ0FBQSxHQUFFLENBQUMsTUFBSSxFQUFFLEtBQUssR0FBRyxHQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUUsQ0FBQyxJQUFFLEVBQUUsS0FBSyxHQUFFLENBQUMsSUFBRSxFQUFFLEtBQUssQ0FBQztBQUFBLEVBQUUsQ0FBQyxHQUFFLENBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxHQUFFLEtBQUssS0FBRyxDQUFDLEdBQUcsR0FBRSxDQUFDLElBQUUsTUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFHO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSTtBQUFFLFNBQU8sRUFBRSxVQUFRLElBQUUsRUFBRSxPQUFHLEdBQUUsRUFBRSxNQUFJLE9BQUssU0FBTyxFQUFFLFVBQVE7QUFBYTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxPQUFHLEVBQUUsR0FBRSxHQUFHO0FBQUUsSUFBRSxLQUFLLEdBQUUsUUFBUSxHQUFFLEVBQUUsUUFBTSxFQUFFLEtBQUssR0FBRSxNQUFNO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxTQUFPLEVBQUUsWUFBVSxFQUFFLE9BQU8sSUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFFLFFBQU8sRUFBRSxPQUFPLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBRTtBQUFDLFNBQU8sRUFBRSxRQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sR0FBRSxFQUFFLFdBQVMsUUFBTSxJQUFJLEdBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsR0FBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLElBQUk7QUFBRSxJQUFFLGFBQVcsSUFBRSxDQUFDLEtBQUksR0FBRSxHQUFHO0FBQUcsTUFBSSxJQUFFO0FBQUcsU0FBTyxFQUFFLGdCQUFjLElBQUUsRUFBRSxhQUFhLElBQUcsRUFBRSxTQUFPLElBQUUsRUFBRSxNQUFNLElBQUcsSUFBRSxDQUFDLEdBQUUsT0FBTSxDQUFDLElBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFO0FBQUUsTUFBRyxFQUFFLFNBQU8sb0JBQWtCLEVBQUUsYUFBYSxTQUFPLEVBQUUsTUFBSTtBQUFBLElBQUUsS0FBSTtBQUFrQixVQUFFO0FBQVU7QUFBQSxJQUFNLEtBQUk7QUFBaUIsVUFBRTtBQUFTO0FBQUEsSUFBTSxLQUFJO0FBQWlCLFVBQUU7QUFBUztBQUFBLElBQU0sS0FBSTtBQUFpQixVQUFFO0FBQVM7QUFBQSxJQUFNLEtBQUk7QUFBaUIsVUFBRTtBQUFTO0FBQUEsRUFBSztBQUFDLFNBQU0sQ0FBQyxJQUFFLE1BQU0sQ0FBQyxNQUFJLElBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxTQUFNLENBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxRQUFNLFdBQVMsSUFBRyxTQUFRLEVBQUUsSUFBSSxHQUFFLEtBQUksRUFBRSxTQUFPLHNCQUFvQixHQUFHLEdBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxNQUFNLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQyxNQUFNO0FBQUUsSUFBRSxNQUFJLEVBQUUsS0FBSyxLQUFJLEVBQUUsSUFBSSxDQUFDO0FBQUUsTUFBSSxJQUFFLEdBQUcsR0FBRSxHQUFFLEdBQUUsT0FBRyxJQUFFLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxTQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsT0FBSyxNQUFJLElBQUcsRUFBRSxNQUFNLENBQUMsR0FBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFFLE1BQU07QUFBRSxTQUFPLEVBQUUsTUFBSSxFQUFFLEtBQUssS0FBSSxFQUFFLElBQUksQ0FBQyxHQUFFLEVBQUUsUUFBTSxFQUFFLEtBQUssR0FBRyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxTQUFPLEVBQUUsU0FBTywwQkFBd0IsSUFBRSxFQUFFLGNBQWMsQ0FBQyxNQUFJLE9BQUssU0FBTyxFQUFFLFVBQVE7QUFBYTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQTtBQUFHLElBQUUsS0FBSyxHQUFHLENBQUMsSUFBRSxLQUFHLE9BQU87QUFBRSxNQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsR0FBRSxPQUFHLElBQUUsR0FBRSxJQUFFLENBQUE7QUFBRyxTQUFPLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBRSxPQUFLLFFBQU8sRUFBRSxZQUFZLENBQUMsR0FBRSxHQUFHLEdBQUUsQ0FBQyxNQUFJLElBQUUsRUFBRSxDQUFDLElBQUcsRUFBRSxLQUFLLEdBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxD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
