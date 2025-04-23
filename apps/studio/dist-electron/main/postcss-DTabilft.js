var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var hl = Object.create;
var $r = Object.defineProperty;
var dl = Object.getOwnPropertyDescriptor;
var ml = Object.getOwnPropertyNames;
var yl = Object.getPrototypeOf, gl = Object.prototype.hasOwnProperty;
var g = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), en = (t, e) => {
  for (var s in e) $r(t, s, { get: e[s], enumerable: true });
}, wl = (t, e, s, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of ml(e)) !gl.call(t, n) && n !== s && $r(t, n, { get: () => e[n], enumerable: !(r = dl(e, n)) || r.enumerable });
  return t;
};
var xe = (t, e, s) => (s = t != null ? hl(yl(t)) : {}, wl($r(s, "default", { value: t, enumerable: true }), t));
var bi = g((xv, ss) => {
  var _ = String, xi = function() {
    return { isColorSupported: false, reset: _, bold: _, dim: _, italic: _, underline: _, inverse: _, hidden: _, strikethrough: _, black: _, red: _, green: _, yellow: _, blue: _, magenta: _, cyan: _, white: _, gray: _, bgBlack: _, bgRed: _, bgGreen: _, bgYellow: _, bgBlue: _, bgMagenta: _, bgCyan: _, bgWhite: _, blackBright: _, redBright: _, greenBright: _, yellowBright: _, blueBright: _, magentaBright: _, cyanBright: _, whiteBright: _, bgBlackBright: _, bgRedBright: _, bgGreenBright: _, bgYellowBright: _, bgBlueBright: _, bgMagentaBright: _, bgCyanBright: _, bgWhiteBright: _ };
  };
  ss.exports = xi();
  ss.exports.createColors = xi;
});
var ns = g(() => {
});
var Wt = g((Ev, ki) => {
  var _i = bi(), Ei = ns(), ot = class t extends Error {
    constructor(e, s, r, n, i, o) {
      super(e), this.name = "CssSyntaxError", this.reason = e, i && (this.file = i), n && (this.source = n), o && (this.plugin = o), typeof s < "u" && typeof r < "u" && (typeof s == "number" ? (this.line = s, this.column = r) : (this.line = s.line, this.column = s.column, this.endLine = r.line, this.endColumn = r.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, t);
    }
    setMessage() {
      this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
    }
    showSourceCode(e) {
      if (!this.source) return "";
      let s = this.source;
      e == null && (e = _i.isColorSupported);
      let r = (f) => f, n = (f) => f, i = (f) => f;
      if (e) {
        let { bold: f, gray: p, red: l } = _i.createColors(true);
        n = (y) => f(l(y)), r = (y) => p(y), Ei && (i = (y) => Ei(y));
      }
      let o = s.split(/\r?\n/), u = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, o.length), c = String(a).length;
      return o.slice(u, a).map((f, p) => {
        let l = u + 1 + p, y = " " + (" " + l).slice(-c) + " | ";
        if (l === this.line) {
          if (f.length > 160) {
            let h = 20, d = Math.max(0, this.column - h), m = Math.max(this.column + h, this.endColumn + h), b = f.slice(d, m), w = r(y.replace(/\d/g, " ")) + f.slice(0, Math.min(this.column - 1, h - 1)).replace(/[^\t]/g, " ");
            return n(">") + r(y) + i(b) + `
 ` + w + n("^");
          }
          let x = r(y.replace(/\d/g, " ")) + f.slice(0, this.column - 1).replace(/[^\t]/g, " ");
          return n(">") + r(y) + i(f) + `
 ` + x + n("^");
        }
        return " " + r(y) + i(f);
      }).join(`
`);
    }
    toString() {
      let e = this.showSourceCode();
      return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
    }
  };
  ki.exports = ot;
  ot.default = ot;
});
var Yt = g((kv, Ti) => {
  var Si = { after: `
`, beforeClose: `
`, beforeComment: `
`, beforeDecl: `
`, beforeOpen: " ", beforeRule: `
`, colon: ": ", commentLeft: " ", commentRight: " ", emptyBody: "", indent: "    ", semicolon: false };
  function wc(t) {
    return t[0].toUpperCase() + t.slice(1);
  }
  var at = class {
    constructor(e) {
      this.builder = e;
    }
    atrule(e, s) {
      let r = "@" + e.name, n = e.params ? this.rawValue(e, "params") : "";
      if (typeof e.raws.afterName < "u" ? r += e.raws.afterName : n && (r += " "), e.nodes) this.block(e, r + n);
      else {
        let i = (e.raws.between || "") + (s ? ";" : "");
        this.builder(r + n + i, e);
      }
    }
    beforeAfter(e, s) {
      let r;
      e.type === "decl" ? r = this.raw(e, null, "beforeDecl") : e.type === "comment" ? r = this.raw(e, null, "beforeComment") : s === "before" ? r = this.raw(e, null, "beforeRule") : r = this.raw(e, null, "beforeClose");
      let n = e.parent, i = 0;
      for (; n && n.type !== "root"; ) i += 1, n = n.parent;
      if (r.includes(`
`)) {
        let o = this.raw(e, null, "indent");
        if (o.length) for (let u = 0; u < i; u++) r += o;
      }
      return r;
    }
    block(e, s) {
      let r = this.raw(e, "between", "beforeOpen");
      this.builder(s + r + "{", e, "start");
      let n;
      e.nodes && e.nodes.length ? (this.body(e), n = this.raw(e, "after")) : n = this.raw(e, "after", "emptyBody"), n && this.builder(n), this.builder("}", e, "end");
    }
    body(e) {
      let s = e.nodes.length - 1;
      for (; s > 0 && e.nodes[s].type === "comment"; ) s -= 1;
      let r = this.raw(e, "semicolon");
      for (let n = 0; n < e.nodes.length; n++) {
        let i = e.nodes[n], o = this.raw(i, "before");
        o && this.builder(o), this.stringify(i, s !== n || r);
      }
    }
    comment(e) {
      let s = this.raw(e, "left", "commentLeft"), r = this.raw(e, "right", "commentRight");
      this.builder("/*" + s + e.text + r + "*/", e);
    }
    decl(e, s) {
      let r = this.raw(e, "between", "colon"), n = e.prop + r + this.rawValue(e, "value");
      e.important && (n += e.raws.important || " !important"), s && (n += ";"), this.builder(n, e);
    }
    document(e) {
      this.body(e);
    }
    raw(e, s, r) {
      let n;
      if (r || (r = s), s && (n = e.raws[s], typeof n < "u")) return n;
      let i = e.parent;
      if (r === "before" && (!i || i.type === "root" && i.first === e || i && i.type === "document")) return "";
      if (!i) return Si[r];
      let o = e.root();
      if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[r] < "u") return o.rawCache[r];
      if (r === "before" || r === "after") return this.beforeAfter(e, r);
      {
        let u = "raw" + wc(r);
        this[u] ? n = this[u](o, e) : o.walk((a) => {
          if (n = a.raws[s], typeof n < "u") return false;
        });
      }
      return typeof n > "u" && (n = Si[r]), o.rawCache[r] = n, n;
    }
    rawBeforeClose(e) {
      let s;
      return e.walk((r) => {
        if (r.nodes && r.nodes.length > 0 && typeof r.raws.after < "u") return s = r.raws.after, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), false;
      }), s && (s = s.replace(/\S/g, "")), s;
    }
    rawBeforeComment(e, s) {
      let r;
      return e.walkComments((n) => {
        if (typeof n.raws.before < "u") return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), false;
      }), typeof r > "u" ? r = this.raw(s, null, "beforeDecl") : r && (r = r.replace(/\S/g, "")), r;
    }
    rawBeforeDecl(e, s) {
      let r;
      return e.walkDecls((n) => {
        if (typeof n.raws.before < "u") return r = n.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), false;
      }), typeof r > "u" ? r = this.raw(s, null, "beforeRule") : r && (r = r.replace(/\S/g, "")), r;
    }
    rawBeforeOpen(e) {
      let s;
      return e.walk((r) => {
        if (r.type !== "decl" && (s = r.raws.between, typeof s < "u")) return false;
      }), s;
    }
    rawBeforeRule(e) {
      let s;
      return e.walk((r) => {
        if (r.nodes && (r.parent !== e || e.first !== r) && typeof r.raws.before < "u") return s = r.raws.before, s.includes(`
`) && (s = s.replace(/[^\n]+$/, "")), false;
      }), s && (s = s.replace(/\S/g, "")), s;
    }
    rawColon(e) {
      let s;
      return e.walkDecls((r) => {
        if (typeof r.raws.between < "u") return s = r.raws.between.replace(/[^\s:]/g, ""), false;
      }), s;
    }
    rawEmptyBody(e) {
      let s;
      return e.walk((r) => {
        if (r.nodes && r.nodes.length === 0 && (s = r.raws.after, typeof s < "u")) return false;
      }), s;
    }
    rawIndent(e) {
      if (e.raws.indent) return e.raws.indent;
      let s;
      return e.walk((r) => {
        let n = r.parent;
        if (n && n !== e && n.parent && n.parent === e && typeof r.raws.before < "u") {
          let i = r.raws.before.split(`
`);
          return s = i[i.length - 1], s = s.replace(/\S/g, ""), false;
        }
      }), s;
    }
    rawSemicolon(e) {
      let s;
      return e.walk((r) => {
        if (r.nodes && r.nodes.length && r.last.type === "decl" && (s = r.raws.semicolon, typeof s < "u")) return false;
      }), s;
    }
    rawValue(e, s) {
      let r = e[s], n = e.raws[s];
      return n && n.value === r ? n.raw : r;
    }
    root(e) {
      this.body(e), e.raws.after && this.builder(e.raws.after);
    }
    rule(e) {
      this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
    }
    stringify(e, s) {
      if (!this[e.type]) throw new Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
      this[e.type](e, s);
    }
  };
  Ti.exports = at;
  at.default = at;
});
var ut = g((Sv, Ci) => {
  var vc = Yt();
  function is(t, e) {
    new vc(e).stringify(t);
  }
  Ci.exports = is;
  is.default = is;
});
var Vt = g((Tv, os) => {
  os.exports.isClean = Symbol("isClean");
  os.exports.my = Symbol("my");
});
var pt = g((Cv, Oi) => {
  var xc = Wt(), bc = Yt(), _c = ut(), { isClean: lt, my: Ec } = Vt();
  function as(t, e) {
    let s = new t.constructor();
    for (let r in t) {
      if (!Object.prototype.hasOwnProperty.call(t, r) || r === "proxyCache") continue;
      let n = t[r], i = typeof n;
      r === "parent" && i === "object" ? e && (s[r] = e) : r === "source" ? s[r] = n : Array.isArray(n) ? s[r] = n.map((o) => as(o, s)) : (i === "object" && n !== null && (n = as(n)), s[r] = n);
    }
    return s;
  }
  function ct(t, e) {
    if (e && typeof e.offset < "u") return e.offset;
    let s = 1, r = 1, n = 0;
    for (let i = 0; i < t.length; i++) {
      if (r === e.line && s === e.column) {
        n = i;
        break;
      }
      t[i] === `
` ? (s = 1, r += 1) : s += 1;
    }
    return n;
  }
  var ft = class {
    get proxyOf() {
      return this;
    }
    constructor(e = {}) {
      this.raws = {}, this[lt] = false, this[Ec] = true;
      for (let s in e) if (s === "nodes") {
        this.nodes = [];
        for (let r of e[s]) typeof r.clone == "function" ? this.append(r.clone()) : this.append(r);
      } else this[s] = e[s];
    }
    addToError(e) {
      if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
        let s = this.source;
        e.stack = e.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
      }
      return e;
    }
    after(e) {
      return this.parent.insertAfter(this, e), this;
    }
    assign(e = {}) {
      for (let s in e) this[s] = e[s];
      return this;
    }
    before(e) {
      return this.parent.insertBefore(this, e), this;
    }
    cleanRaws(e) {
      delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
    }
    clone(e = {}) {
      let s = as(this);
      for (let r in e) s[r] = e[r];
      return s;
    }
    cloneAfter(e = {}) {
      let s = this.clone(e);
      return this.parent.insertAfter(this, s), s;
    }
    cloneBefore(e = {}) {
      let s = this.clone(e);
      return this.parent.insertBefore(this, s), s;
    }
    error(e, s = {}) {
      if (this.source) {
        let { end: r, start: n } = this.rangeBy(s);
        return this.source.input.error(e, { column: n.column, line: n.line }, { column: r.column, line: r.line }, s);
      }
      return new xc(e);
    }
    getProxyProcessor() {
      return { get(e, s) {
        return s === "proxyOf" ? e : s === "root" ? () => e.root().toProxy() : e[s];
      }, set(e, s, r) {
        return e[s] === r || (e[s] = r, (s === "prop" || s === "value" || s === "name" || s === "params" || s === "important" || s === "text") && e.markDirty()), true;
      } };
    }
    markClean() {
      this[lt] = true;
    }
    markDirty() {
      if (this[lt]) {
        this[lt] = false;
        let e = this;
        for (; e = e.parent; ) e[lt] = false;
      }
    }
    next() {
      if (!this.parent) return;
      let e = this.parent.index(this);
      return this.parent.nodes[e + 1];
    }
    positionBy(e) {
      let s = this.source.start;
      if (e.index) s = this.positionInside(e.index);
      else if (e.word) {
        let r = "document" in this.source.input ? this.source.input.document : this.source.input.css, i = r.slice(ct(r, this.source.start), ct(r, this.source.end)).indexOf(e.word);
        i !== -1 && (s = this.positionInside(i));
      }
      return s;
    }
    positionInside(e) {
      let s = this.source.start.column, r = this.source.start.line, n = "document" in this.source.input ? this.source.input.document : this.source.input.css, i = ct(n, this.source.start), o = i + e;
      for (let u = i; u < o; u++) n[u] === `
` ? (s = 1, r += 1) : s += 1;
      return { column: s, line: r };
    }
    prev() {
      if (!this.parent) return;
      let e = this.parent.index(this);
      return this.parent.nodes[e - 1];
    }
    rangeBy(e) {
      let s = { column: this.source.start.column, line: this.source.start.line }, r = this.source.end ? { column: this.source.end.column + 1, line: this.source.end.line } : { column: s.column + 1, line: s.line };
      if (e.word) {
        let n = "document" in this.source.input ? this.source.input.document : this.source.input.css, o = n.slice(ct(n, this.source.start), ct(n, this.source.end)).indexOf(e.word);
        o !== -1 && (s = this.positionInside(o), r = this.positionInside(o + e.word.length));
      } else e.start ? s = { column: e.start.column, line: e.start.line } : e.index && (s = this.positionInside(e.index)), e.end ? r = { column: e.end.column, line: e.end.line } : typeof e.endIndex == "number" ? r = this.positionInside(e.endIndex) : e.index && (r = this.positionInside(e.index + 1));
      return (r.line < s.line || r.line === s.line && r.column <= s.column) && (r = { column: s.column + 1, line: s.line }), { end: r, start: s };
    }
    raw(e, s) {
      return new bc().raw(this, e, s);
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    replaceWith(...e) {
      if (this.parent) {
        let s = this, r = false;
        for (let n of e) n === this ? r = true : r ? (this.parent.insertAfter(s, n), s = n) : this.parent.insertBefore(s, n);
        r || this.remove();
      }
      return this;
    }
    root() {
      let e = this;
      for (; e.parent && e.parent.type !== "document"; ) e = e.parent;
      return e;
    }
    toJSON(e, s) {
      let r = {}, n = s == null;
      s = s || /* @__PURE__ */ new Map();
      let i = 0;
      for (let o in this) {
        if (!Object.prototype.hasOwnProperty.call(this, o) || o === "parent" || o === "proxyCache") continue;
        let u = this[o];
        if (Array.isArray(u)) r[o] = u.map((a) => typeof a == "object" && a.toJSON ? a.toJSON(null, s) : a);
        else if (typeof u == "object" && u.toJSON) r[o] = u.toJSON(null, s);
        else if (o === "source") {
          let a = s.get(u.input);
          a == null && (a = i, s.set(u.input, i), i++), r[o] = { end: u.end, inputId: a, start: u.start };
        } else r[o] = u;
      }
      return n && (r.inputs = [...s.keys()].map((o) => o.toJSON())), r;
    }
    toProxy() {
      return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
    }
    toString(e = _c) {
      e.stringify && (e = e.stringify);
      let s = "";
      return e(this, (r) => {
        s += r;
      }), s;
    }
    warn(e, s, r) {
      let n = { node: this };
      for (let i in r) n[i] = r[i];
      return e.warn(s, n);
    }
  };
  Oi.exports = ft;
  ft.default = ft;
});
var Re = g((Ov, Ai) => {
  var kc = pt(), ht = class extends kc {
    constructor(e) {
      super(e), this.type = "comment";
    }
  };
  Ai.exports = ht;
  ht.default = ht;
});
var mt = g((Av, Ni) => {
  var Sc = pt(), dt = class extends Sc {
    get variable() {
      return this.prop.startsWith("--") || this.prop[0] === "$";
    }
    constructor(e) {
      e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
    }
  };
  Ni.exports = dt;
  dt.default = dt;
});
var le = g((Nv, Ui) => {
  var Pi = Re(), Ri = mt(), Tc = pt(), { isClean: Ii, my: qi } = Vt(), us, Li, Di, ls;
  function Bi(t) {
    return t.map((e) => (e.nodes && (e.nodes = Bi(e.nodes)), delete e.source, e));
  }
  function Mi(t) {
    if (t[Ii] = false, t.proxyOf.nodes) for (let e of t.proxyOf.nodes) Mi(e);
  }
  var z = class t extends Tc {
    get first() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
    }
    get last() {
      if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
    append(...e) {
      for (let s of e) {
        let r = this.normalize(s, this.last);
        for (let n of r) this.proxyOf.nodes.push(n);
      }
      return this.markDirty(), this;
    }
    cleanRaws(e) {
      if (super.cleanRaws(e), this.nodes) for (let s of this.nodes) s.cleanRaws(e);
    }
    each(e) {
      if (!this.proxyOf.nodes) return;
      let s = this.getIterator(), r, n;
      for (; this.indexes[s] < this.proxyOf.nodes.length && (r = this.indexes[s], n = e(this.proxyOf.nodes[r], r), n !== false); ) this.indexes[s] += 1;
      return delete this.indexes[s], n;
    }
    every(e) {
      return this.nodes.every(e);
    }
    getIterator() {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let e = this.lastEach;
      return this.indexes[e] = 0, e;
    }
    getProxyProcessor() {
      return { get(e, s) {
        return s === "proxyOf" ? e : e[s] ? s === "each" || typeof s == "string" && s.startsWith("walk") ? (...r) => e[s](...r.map((n) => typeof n == "function" ? (i, o) => n(i.toProxy(), o) : n)) : s === "every" || s === "some" ? (r) => e[s]((n, ...i) => r(n.toProxy(), ...i)) : s === "root" ? () => e.root().toProxy() : s === "nodes" ? e.nodes.map((r) => r.toProxy()) : s === "first" || s === "last" ? e[s].toProxy() : e[s] : e[s];
      }, set(e, s, r) {
        return e[s] === r || (e[s] = r, (s === "name" || s === "params" || s === "selector") && e.markDirty()), true;
      } };
    }
    index(e) {
      return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
    }
    insertAfter(e, s) {
      let r = this.index(e), n = this.normalize(s, this.proxyOf.nodes[r]).reverse();
      r = this.index(e);
      for (let o of n) this.proxyOf.nodes.splice(r + 1, 0, o);
      let i;
      for (let o in this.indexes) i = this.indexes[o], r < i && (this.indexes[o] = i + n.length);
      return this.markDirty(), this;
    }
    insertBefore(e, s) {
      let r = this.index(e), n = r === 0 ? "prepend" : false, i = this.normalize(s, this.proxyOf.nodes[r], n).reverse();
      r = this.index(e);
      for (let u of i) this.proxyOf.nodes.splice(r, 0, u);
      let o;
      for (let u in this.indexes) o = this.indexes[u], r <= o && (this.indexes[u] = o + i.length);
      return this.markDirty(), this;
    }
    normalize(e, s) {
      if (typeof e == "string") e = Bi(Li(e).nodes);
      else if (typeof e > "u") e = [];
      else if (Array.isArray(e)) {
        e = e.slice(0);
        for (let n of e) n.parent && n.parent.removeChild(n, "ignore");
      } else if (e.type === "root" && this.type !== "document") {
        e = e.nodes.slice(0);
        for (let n of e) n.parent && n.parent.removeChild(n, "ignore");
      } else if (e.type) e = [e];
      else if (e.prop) {
        if (typeof e.value > "u") throw new Error("Value field is missed in node creation");
        typeof e.value != "string" && (e.value = String(e.value)), e = [new Ri(e)];
      } else if (e.selector || e.selectors) e = [new ls(e)];
      else if (e.name) e = [new us(e)];
      else if (e.text) e = [new Pi(e)];
      else throw new Error("Unknown node type in node creation");
      return e.map((n) => (n[qi] || t.rebuild(n), n = n.proxyOf, n.parent && n.parent.removeChild(n), n[Ii] && Mi(n), n.raws || (n.raws = {}), typeof n.raws.before > "u" && s && typeof s.raws.before < "u" && (n.raws.before = s.raws.before.replace(/\S/g, "")), n.parent = this.proxyOf, n));
    }
    prepend(...e) {
      e = e.reverse();
      for (let s of e) {
        let r = this.normalize(s, this.first, "prepend").reverse();
        for (let n of r) this.proxyOf.nodes.unshift(n);
        for (let n in this.indexes) this.indexes[n] = this.indexes[n] + r.length;
      }
      return this.markDirty(), this;
    }
    push(e) {
      return e.parent = this, this.proxyOf.nodes.push(e), this;
    }
    removeAll() {
      for (let e of this.proxyOf.nodes) e.parent = void 0;
      return this.proxyOf.nodes = [], this.markDirty(), this;
    }
    removeChild(e) {
      e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
      let s;
      for (let r in this.indexes) s = this.indexes[r], s >= e && (this.indexes[r] = s - 1);
      return this.markDirty(), this;
    }
    replaceValues(e, s, r) {
      return r || (r = s, s = {}), this.walkDecls((n) => {
        s.props && !s.props.includes(n.prop) || s.fast && !n.value.includes(s.fast) || (n.value = n.value.replace(e, r));
      }), this.markDirty(), this;
    }
    some(e) {
      return this.nodes.some(e);
    }
    walk(e) {
      return this.each((s, r) => {
        let n;
        try {
          n = e(s, r);
        } catch (i) {
          throw s.addToError(i);
        }
        return n !== false && s.walk && (n = s.walk(e)), n;
      });
    }
    walkAtRules(e, s) {
      return s ? e instanceof RegExp ? this.walk((r, n) => {
        if (r.type === "atrule" && e.test(r.name)) return s(r, n);
      }) : this.walk((r, n) => {
        if (r.type === "atrule" && r.name === e) return s(r, n);
      }) : (s = e, this.walk((r, n) => {
        if (r.type === "atrule") return s(r, n);
      }));
    }
    walkComments(e) {
      return this.walk((s, r) => {
        if (s.type === "comment") return e(s, r);
      });
    }
    walkDecls(e, s) {
      return s ? e instanceof RegExp ? this.walk((r, n) => {
        if (r.type === "decl" && e.test(r.prop)) return s(r, n);
      }) : this.walk((r, n) => {
        if (r.type === "decl" && r.prop === e) return s(r, n);
      }) : (s = e, this.walk((r, n) => {
        if (r.type === "decl") return s(r, n);
      }));
    }
    walkRules(e, s) {
      return s ? e instanceof RegExp ? this.walk((r, n) => {
        if (r.type === "rule" && e.test(r.selector)) return s(r, n);
      }) : this.walk((r, n) => {
        if (r.type === "rule" && r.selector === e) return s(r, n);
      }) : (s = e, this.walk((r, n) => {
        if (r.type === "rule") return s(r, n);
      }));
    }
  };
  z.registerParse = (t) => {
    Li = t;
  };
  z.registerRule = (t) => {
    ls = t;
  };
  z.registerAtRule = (t) => {
    us = t;
  };
  z.registerRoot = (t) => {
    Di = t;
  };
  Ui.exports = z;
  z.default = z;
  z.rebuild = (t) => {
    t.type === "atrule" ? Object.setPrototypeOf(t, us.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, ls.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, Ri.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, Pi.prototype) : t.type === "root" && Object.setPrototypeOf(t, Di.prototype), t[qi] = true, t.nodes && t.nodes.forEach((e) => {
      z.rebuild(e);
    });
  };
});
var $i = g((Pv, Fi) => {
  var Cc = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Oc = (t, e = 21) => (s = e) => {
    let r = "", n = s | 0;
    for (; n--; ) r += t[Math.random() * t.length | 0];
    return r;
  }, Ac = (t = 21) => {
    let e = "", s = t | 0;
    for (; s--; ) e += Cc[Math.random() * 64 | 0];
    return e;
  };
  Fi.exports = { nanoid: Ac, customAlphabet: Oc };
});
var Wi = g(() => {
});
var cs = g((qv, Yi) => {
  Yi.exports = class {
  };
});
var qe = g((Dv, ji) => {
  var { nanoid: Nc } = $i(), { isAbsolute: hs, resolve: ds } = {}, { SourceMapConsumer: Pc, SourceMapGenerator: Rc } = Wi(), { fileURLToPath: Vi, pathToFileURL: zt } = {}, zi = Wt(), Ic = cs(), fs = ns(), ps = Symbol("fromOffsetCache"), qc = !!(Pc && Rc), Gi = !!(ds && hs), Ie = class {
    get from() {
      return this.file || this.id;
    }
    constructor(e, s = {}) {
      if (e === null || typeof e > "u" || typeof e == "object" && !e.toString) throw new Error(`PostCSS received ${e} instead of CSS string`);
      if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, this.document = this.css, s.document && (this.document = s.document.toString()), s.from && (!Gi || /^\w+:\/\//.test(s.from) || hs(s.from) ? this.file = s.from : this.file = ds(s.from)), Gi && qc) {
        let r = new Ic(this.css, s);
        if (r.text) {
          this.map = r;
          let n = r.consumer().file;
          !this.file && n && (this.file = this.mapResolve(n));
        }
      }
      this.file || (this.id = "<input css " + Nc(6) + ">"), this.map && (this.map.file = this.from);
    }
    error(e, s, r, n = {}) {
      let i, o, u;
      if (s && typeof s == "object") {
        let c = s, f = r;
        if (typeof c.offset == "number") {
          let p = this.fromOffset(c.offset);
          s = p.line, r = p.col;
        } else s = c.line, r = c.column;
        if (typeof f.offset == "number") {
          let p = this.fromOffset(f.offset);
          o = p.line, i = p.col;
        } else o = f.line, i = f.column;
      } else if (!r) {
        let c = this.fromOffset(s);
        s = c.line, r = c.col;
      }
      let a = this.origin(s, r, o, i);
      return a ? u = new zi(e, a.endLine === void 0 ? a.line : { column: a.column, line: a.line }, a.endLine === void 0 ? a.column : { column: a.endColumn, line: a.endLine }, a.source, a.file, n.plugin) : u = new zi(e, o === void 0 ? s : { column: r, line: s }, o === void 0 ? r : { column: i, line: o }, this.css, this.file, n.plugin), u.input = { column: r, endColumn: i, endLine: o, line: s, source: this.css }, this.file && (zt && (u.input.url = zt(this.file).toString()), u.input.file = this.file), u;
    }
    fromOffset(e) {
      let s, r;
      if (this[ps]) r = this[ps];
      else {
        let i = this.css.split(`
`);
        r = new Array(i.length);
        let o = 0;
        for (let u = 0, a = i.length; u < a; u++) r[u] = o, o += i[u].length + 1;
        this[ps] = r;
      }
      s = r[r.length - 1];
      let n = 0;
      if (e >= s) n = r.length - 1;
      else {
        let i = r.length - 2, o;
        for (; n < i; ) if (o = n + (i - n >> 1), e < r[o]) i = o - 1;
        else if (e >= r[o + 1]) n = o + 1;
        else {
          n = o;
          break;
        }
      }
      return { col: e - r[n] + 1, line: n + 1 };
    }
    mapResolve(e) {
      return /^\w+:\/\//.test(e) ? e : ds(this.map.consumer().sourceRoot || this.map.root || ".", e);
    }
    origin(e, s, r, n) {
      if (!this.map) return false;
      let i = this.map.consumer(), o = i.originalPositionFor({ column: s, line: e });
      if (!o.source) return false;
      let u;
      typeof r == "number" && (u = i.originalPositionFor({ column: n, line: r }));
      let a;
      hs(o.source) ? a = zt(o.source) : a = new URL(o.source, this.map.consumer().sourceRoot || zt(this.map.mapFile));
      let c = { column: o.column, endColumn: u && u.column, endLine: u && u.line, line: o.line, url: a.toString() };
      if (a.protocol === "file:") if (Vi) c.file = Vi(a);
      else throw new Error("file: protocol is not available in this PostCSS build");
      let f = i.sourceContentFor(o.source);
      return f && (c.source = f), c;
    }
    toJSON() {
      let e = {};
      for (let s of ["hasBOM", "css", "file", "id"]) this[s] != null && (e[s] = this[s]);
      return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
    }
  };
  ji.exports = Ie;
  Ie.default = Ie;
  fs && fs.registerInput && fs.registerInput(Ie);
});
var Gt = g((Bv, Ki) => {
  var Hi = le(), Le = class extends Hi {
    constructor(e) {
      super(e), this.type = "atrule";
    }
    append(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
    }
    prepend(...e) {
      return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
    }
  };
  Ki.exports = Le;
  Le.default = Le;
  Hi.registerAtRule(Le);
});
var De = g((Mv, Zi) => {
  var Qi = le(), Ji, Xi, ce = class extends Qi {
    constructor(e) {
      super(e), this.type = "root", this.nodes || (this.nodes = []);
    }
    normalize(e, s, r) {
      let n = super.normalize(e);
      if (s) {
        if (r === "prepend") this.nodes.length > 1 ? s.raws.before = this.nodes[1].raws.before : delete s.raws.before;
        else if (this.first !== s) for (let i of n) i.raws.before = s.raws.before;
      }
      return n;
    }
    removeChild(e, s) {
      let r = this.index(e);
      return !s && r === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[r].raws.before), super.removeChild(e);
    }
    toResult(e = {}) {
      return new Ji(new Xi(), this, e).stringify();
    }
  };
  ce.registerLazyResult = (t) => {
    Ji = t;
  };
  ce.registerProcessor = (t) => {
    Xi = t;
  };
  Zi.exports = ce;
  ce.default = ce;
  Qi.registerRoot(ce);
});
var ms = g((Uv, eo) => {
  var yt = { comma(t) {
    return yt.split(t, [","], true);
  }, space(t) {
    let e = [" ", `
`, "	"];
    return yt.split(t, e);
  }, split(t, e, s) {
    let r = [], n = "", i = false, o = 0, u = false, a = "", c = false;
    for (let f of t) c ? c = false : f === "\\" ? c = true : u ? f === a && (u = false) : f === '"' || f === "'" ? (u = true, a = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (i = true), i ? (n !== "" && r.push(n.trim()), n = "", i = false) : n += f;
    return (s || n !== "") && r.push(n.trim()), r;
  } };
  eo.exports = yt;
  yt.default = yt;
});
var jt = g((Fv, ro) => {
  var to = le(), Lc = ms(), Be = class extends to {
    get selectors() {
      return Lc.comma(this.selector);
    }
    set selectors(e) {
      let s = this.selector ? this.selector.match(/,\s*/) : null, r = s ? s[0] : "," + this.raw("between", "beforeOpen");
      this.selector = e.join(r);
    }
    constructor(e) {
      super(e), this.type = "rule", this.nodes || (this.nodes = []);
    }
  };
  ro.exports = Be;
  Be.default = Be;
  to.registerRule(Be);
});
var Qt = g(($v, no) => {
  var Ht = /[\t\n\f\r "#'()/;[\\\]{}]/g, Kt = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Dc = /.[\r\n"'(/\\]/, so = /[\da-f]/i;
  no.exports = function(e, s = {}) {
    let r = e.css.valueOf(), n = s.ignoreErrors, i, o, u, a, c, f, p, l, y, x, h = r.length, d = 0, m = [], b = [];
    function w() {
      return d;
    }
    function v(W) {
      throw e.error("Unclosed " + W, d);
    }
    function N() {
      return b.length === 0 && d >= h;
    }
    function F(W) {
      if (b.length) return b.pop();
      if (d >= h) return;
      let T = W ? W.ignoreUnclosed : false;
      switch (i = r.charCodeAt(d), i) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12: {
          a = d;
          do
            a += 1, i = r.charCodeAt(a);
          while (i === 32 || i === 10 || i === 9 || i === 13 || i === 12);
          f = ["space", r.slice(d, a)], d = a - 1;
          break;
        }
        case 91:
        case 93:
        case 123:
        case 125:
        case 58:
        case 59:
        case 41: {
          let C = String.fromCharCode(i);
          f = [C, C, d];
          break;
        }
        case 40: {
          if (x = m.length ? m.pop()[1] : "", y = r.charCodeAt(d + 1), x === "url" && y !== 39 && y !== 34 && y !== 32 && y !== 10 && y !== 9 && y !== 12 && y !== 13) {
            a = d;
            do {
              if (p = false, a = r.indexOf(")", a + 1), a === -1) if (n || T) {
                a = d;
                break;
              } else v("bracket");
              for (l = a; r.charCodeAt(l - 1) === 92; ) l -= 1, p = !p;
            } while (p);
            f = ["brackets", r.slice(d, a + 1), d, a], d = a;
          } else a = r.indexOf(")", d + 1), o = r.slice(d, a + 1), a === -1 || Dc.test(o) ? f = ["(", "(", d] : (f = ["brackets", o, d, a], d = a);
          break;
        }
        case 39:
        case 34: {
          c = i === 39 ? "'" : '"', a = d;
          do {
            if (p = false, a = r.indexOf(c, a + 1), a === -1) if (n || T) {
              a = d + 1;
              break;
            } else v("string");
            for (l = a; r.charCodeAt(l - 1) === 92; ) l -= 1, p = !p;
          } while (p);
          f = ["string", r.slice(d, a + 1), d, a], d = a;
          break;
        }
        case 64: {
          Ht.lastIndex = d + 1, Ht.test(r), Ht.lastIndex === 0 ? a = r.length - 1 : a = Ht.lastIndex - 2, f = ["at-word", r.slice(d, a + 1), d, a], d = a;
          break;
        }
        case 92: {
          for (a = d, u = true; r.charCodeAt(a + 1) === 92; ) a += 1, u = !u;
          if (i = r.charCodeAt(a + 1), u && i !== 47 && i !== 32 && i !== 10 && i !== 9 && i !== 13 && i !== 12 && (a += 1, so.test(r.charAt(a)))) {
            for (; so.test(r.charAt(a + 1)); ) a += 1;
            r.charCodeAt(a + 1) === 32 && (a += 1);
          }
          f = ["word", r.slice(d, a + 1), d, a], d = a;
          break;
        }
        default: {
          i === 47 && r.charCodeAt(d + 1) === 42 ? (a = r.indexOf("*/", d + 2) + 1, a === 0 && (n || T ? a = r.length : v("comment")), f = ["comment", r.slice(d, a + 1), d, a], d = a) : (Kt.lastIndex = d + 1, Kt.test(r), Kt.lastIndex === 0 ? a = r.length - 1 : a = Kt.lastIndex - 2, f = ["word", r.slice(d, a + 1), d, a], m.push(f), d = a);
          break;
        }
      }
      return d++, f;
    }
    function Q(W) {
      b.push(W);
    }
    return { back: Q, endOfFile: N, nextToken: F, position: w };
  };
});
var Jt = g((Wv, ao) => {
  var Bc = Gt(), Mc = Re(), Uc = mt(), Fc = De(), io = jt(), $c = Qt(), oo = { empty: true, space: true };
  function Wc(t) {
    for (let e = t.length - 1; e >= 0; e--) {
      let s = t[e], r = s[3] || s[2];
      if (r) return r;
    }
  }
  var ys = class {
    constructor(e) {
      this.input = e, this.root = new Fc(), this.current = this.root, this.spaces = "", this.semicolon = false, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
    }
    atrule(e) {
      let s = new Bc();
      s.name = e[1].slice(1), s.name === "" && this.unnamedAtrule(s, e), this.init(s, e[2]);
      let r, n, i, o = false, u = false, a = [], c = [];
      for (; !this.tokenizer.endOfFile(); ) {
        if (e = this.tokenizer.nextToken(), r = e[0], r === "(" || r === "[" ? c.push(r === "(" ? ")" : "]") : r === "{" && c.length > 0 ? c.push("}") : r === c[c.length - 1] && c.pop(), c.length === 0) if (r === ";") {
          s.source.end = this.getPosition(e[2]), s.source.end.offset++, this.semicolon = true;
          break;
        } else if (r === "{") {
          u = true;
          break;
        } else if (r === "}") {
          if (a.length > 0) {
            for (i = a.length - 1, n = a[i]; n && n[0] === "space"; ) n = a[--i];
            n && (s.source.end = this.getPosition(n[3] || n[2]), s.source.end.offset++);
          }
          this.end(e);
          break;
        } else a.push(e);
        else a.push(e);
        if (this.tokenizer.endOfFile()) {
          o = true;
          break;
        }
      }
      s.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (s.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(s, "params", a), o && (e = a[a.length - 1], s.source.end = this.getPosition(e[3] || e[2]), s.source.end.offset++, this.spaces = s.raws.between, s.raws.between = "")) : (s.raws.afterName = "", s.params = ""), u && (s.nodes = [], this.current = s);
    }
    checkMissedSemicolon(e) {
      let s = this.colon(e);
      if (s === false) return;
      let r = 0, n;
      for (let i = s - 1; i >= 0 && (n = e[i], !(n[0] !== "space" && (r += 1, r === 2))); i--) ;
      throw this.input.error("Missed semicolon", n[0] === "word" ? n[3] + 1 : n[2]);
    }
    colon(e) {
      let s = 0, r, n, i;
      for (let [o, u] of e.entries()) {
        if (n = u, i = n[0], i === "(" && (s += 1), i === ")" && (s -= 1), s === 0 && i === ":") if (!r) this.doubleColon(n);
        else {
          if (r[0] === "word" && r[1] === "progid") continue;
          return o;
        }
        r = n;
      }
      return false;
    }
    comment(e) {
      let s = new Mc();
      this.init(s, e[2]), s.source.end = this.getPosition(e[3] || e[2]), s.source.end.offset++;
      let r = e[1].slice(2, -2);
      if (/^\s*$/.test(r)) s.text = "", s.raws.left = r, s.raws.right = "";
      else {
        let n = r.match(/^(\s*)([^]*\S)(\s*)$/);
        s.text = n[2], s.raws.left = n[1], s.raws.right = n[3];
      }
    }
    createTokenizer() {
      this.tokenizer = $c(this.input);
    }
    decl(e, s) {
      let r = new Uc();
      this.init(r, e[0][2]);
      let n = e[e.length - 1];
      for (n[0] === ";" && (this.semicolon = true, e.pop()), r.source.end = this.getPosition(n[3] || n[2] || Wc(e)), r.source.end.offset++; e[0][0] !== "word"; ) e.length === 1 && this.unknownWord(e), r.raws.before += e.shift()[1];
      for (r.source.start = this.getPosition(e[0][2]), r.prop = ""; e.length; ) {
        let c = e[0][0];
        if (c === ":" || c === "space" || c === "comment") break;
        r.prop += e.shift()[1];
      }
      r.raws.between = "";
      let i;
      for (; e.length; ) if (i = e.shift(), i[0] === ":") {
        r.raws.between += i[1];
        break;
      } else i[0] === "word" && /\w/.test(i[1]) && this.unknownWord([i]), r.raws.between += i[1];
      (r.prop[0] === "_" || r.prop[0] === "*") && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
      let o = [], u;
      for (; e.length && (u = e[0][0], !(u !== "space" && u !== "comment")); ) o.push(e.shift());
      this.precheckMissedSemicolon(e);
      for (let c = e.length - 1; c >= 0; c--) {
        if (i = e[c], i[1].toLowerCase() === "!important") {
          r.important = true;
          let f = this.stringFrom(e, c);
          f = this.spacesFromEnd(e) + f, f !== " !important" && (r.raws.important = f);
          break;
        } else if (i[1].toLowerCase() === "important") {
          let f = e.slice(0), p = "";
          for (let l = c; l > 0; l--) {
            let y = f[l][0];
            if (p.trim().startsWith("!") && y !== "space") break;
            p = f.pop()[1] + p;
          }
          p.trim().startsWith("!") && (r.important = true, r.raws.important = p, e = f);
        }
        if (i[0] !== "space" && i[0] !== "comment") break;
      }
      e.some((c) => c[0] !== "space" && c[0] !== "comment") && (r.raws.between += o.map((c) => c[1]).join(""), o = []), this.raw(r, "value", o.concat(e), s), r.value.includes(":") && !s && this.checkMissedSemicolon(e);
    }
    doubleColon(e) {
      throw this.input.error("Double colon", { offset: e[2] }, { offset: e[2] + e[1].length });
    }
    emptyRule(e) {
      let s = new io();
      this.init(s, e[2]), s.selector = "", s.raws.between = "", this.current = s;
    }
    end(e) {
      this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
    }
    endFile() {
      this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(e) {
      if (this.spaces += e[1], this.current.nodes) {
        let s = this.current.nodes[this.current.nodes.length - 1];
        s && s.type === "rule" && !s.raws.ownSemicolon && (s.raws.ownSemicolon = this.spaces, this.spaces = "", s.source.end = this.getPosition(e[2]), s.source.end.offset += s.raws.ownSemicolon.length);
      }
    }
    getPosition(e) {
      let s = this.input.fromOffset(e);
      return { column: s.col, line: s.line, offset: e };
    }
    init(e, s) {
      this.current.push(e), e.source = { input: this.input, start: this.getPosition(s) }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = false);
    }
    other(e) {
      let s = false, r = null, n = false, i = null, o = [], u = e[1].startsWith("--"), a = [], c = e;
      for (; c; ) {
        if (r = c[0], a.push(c), r === "(" || r === "[") i || (i = c), o.push(r === "(" ? ")" : "]");
        else if (u && n && r === "{") i || (i = c), o.push("}");
        else if (o.length === 0) if (r === ";") if (n) {
          this.decl(a, u);
          return;
        } else break;
        else if (r === "{") {
          this.rule(a);
          return;
        } else if (r === "}") {
          this.tokenizer.back(a.pop()), s = true;
          break;
        } else r === ":" && (n = true);
        else r === o[o.length - 1] && (o.pop(), o.length === 0 && (i = null));
        c = this.tokenizer.nextToken();
      }
      if (this.tokenizer.endOfFile() && (s = true), o.length > 0 && this.unclosedBracket(i), s && n) {
        if (!u) for (; a.length && (c = a[a.length - 1][0], !(c !== "space" && c !== "comment")); ) this.tokenizer.back(a.pop());
        this.decl(a, u);
      } else this.unknownWord(a);
    }
    parse() {
      let e;
      for (; !this.tokenizer.endOfFile(); ) switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
      this.endFile();
    }
    precheckMissedSemicolon() {
    }
    raw(e, s, r, n) {
      let i, o, u = r.length, a = "", c = true, f, p;
      for (let l = 0; l < u; l += 1) i = r[l], o = i[0], o === "space" && l === u - 1 && !n ? c = false : o === "comment" ? (p = r[l - 1] ? r[l - 1][0] : "empty", f = r[l + 1] ? r[l + 1][0] : "empty", !oo[p] && !oo[f] ? a.slice(-1) === "," ? c = false : a += i[1] : c = false) : a += i[1];
      if (!c) {
        let l = r.reduce((y, x) => y + x[1], "");
        e.raws[s] = { raw: l, value: a };
      }
      e[s] = a;
    }
    rule(e) {
      e.pop();
      let s = new io();
      this.init(s, e[0][2]), s.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(s, "selector", e), this.current = s;
    }
    spacesAndCommentsFromEnd(e) {
      let s, r = "";
      for (; e.length && (s = e[e.length - 1][0], !(s !== "space" && s !== "comment")); ) r = e.pop()[1] + r;
      return r;
    }
    spacesAndCommentsFromStart(e) {
      let s, r = "";
      for (; e.length && (s = e[0][0], !(s !== "space" && s !== "comment")); ) r += e.shift()[1];
      return r;
    }
    spacesFromEnd(e) {
      let s, r = "";
      for (; e.length && (s = e[e.length - 1][0], s === "space"); ) r = e.pop()[1] + r;
      return r;
    }
    stringFrom(e, s) {
      let r = "";
      for (let n = s; n < e.length; n++) r += e[n][1];
      return e.splice(s, e.length - s), r;
    }
    unclosedBlock() {
      let e = this.current.source.start;
      throw this.input.error("Unclosed block", e.line, e.column);
    }
    unclosedBracket(e) {
      throw this.input.error("Unclosed bracket", { offset: e[2] }, { offset: e[2] + 1 });
    }
    unexpectedClose(e) {
      throw this.input.error("Unexpected }", { offset: e[2] }, { offset: e[2] + 1 });
    }
    unknownWord(e) {
      throw this.input.error("Unknown word " + e[0][1], { offset: e[0][2] }, { offset: e[0][2] + e[0][1].length });
    }
    unnamedAtrule(e, s) {
      throw this.input.error("At-rule without name", { offset: s[2] }, { offset: s[2] + s[1].length });
    }
  };
  ao.exports = ys;
});
var gt = g((Yv, uo) => {
  var Yc = le(), Vc = qe(), zc = Jt();
  function Xt(t, e) {
    let s = new Vc(t, e), r = new zc(s);
    try {
      r.parse();
    } catch (n) {
      throw n;
    }
    return r.root;
  }
  uo.exports = Xt;
  Xt.default = Xt;
  Yc.registerParse(Xt);
});
var lo = g((Vv, gs) => {
  var Gc = Qt(), jc = qe();
  gs.exports = { isInlineComment(t) {
    if (t[0] === "word" && t[1].slice(0, 2) === "//") {
      let e = t, s = [], r, n;
      for (; t; ) {
        if (/\r?\n/.test(t[1])) {
          if (/['"].*\r?\n/.test(t[1])) {
            s.push(t[1].substring(0, t[1].indexOf(`
`))), n = t[1].substring(t[1].indexOf(`
`));
            let o = this.input.css.valueOf().substring(this.tokenizer.position());
            n += o, r = t[3] + o.length - n.length;
          } else this.tokenizer.back(t);
          break;
        }
        s.push(t[1]), r = t[2], t = this.tokenizer.nextToken({ ignoreUnclosed: true });
      }
      let i = ["comment", s.join(""), e[2], r];
      return this.inlineComment(i), n && (this.input = new jc(n), this.tokenizer = Gc(this.input)), true;
    } else if (t[1] === "/") {
      let e = this.tokenizer.nextToken({ ignoreUnclosed: true });
      if (e[0] === "comment" && /^\/\*/.test(e[1])) return e[0] = "word", e[1] = e[1].slice(1), t[1] = "//", this.tokenizer.back(e), gs.exports.isInlineComment.bind(this)(t);
    }
    return false;
  } };
});
var fo = g((zv, co) => {
  co.exports = { interpolation(t) {
    let e = [t, this.tokenizer.nextToken()], s = ["word", "}"];
    if (e[0][1].length > 1 || e[1][0] !== "{") return this.tokenizer.back(e[1]), false;
    for (t = this.tokenizer.nextToken(); t && s.includes(t[0]); ) e.push(t), t = this.tokenizer.nextToken();
    let r = e.map((u) => u[1]), [n] = e, i = e.pop(), o = ["word", r.join(""), n[2], i[2]];
    return this.tokenizer.back(t), this.tokenizer.back(o), true;
  } };
});
var ho = g((Gv, po) => {
  var Hc = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/, Kc = /\.[0-9]/, Qc = (t) => {
    let [, e] = t, [s] = e;
    return (s === "." || s === "#") && Hc.test(e) === false && Kc.test(e) === false;
  };
  po.exports = { isMixinToken: Qc };
});
var yo = g((jv, mo) => {
  var Jc = Qt(), Xc = /^url\((.+)\)/;
  mo.exports = (t) => {
    let { name: e, params: s = "" } = t;
    if (e === "import" && s.length) {
      t.import = true;
      let r = Jc({ css: s });
      for (t.filename = s.replace(Xc, "$1"); !r.endOfFile(); ) {
        let [n, i] = r.nextToken();
        if (n === "word" && i === "url") return;
        if (n === "brackets") {
          t.options = i, t.filename = s.replace(i, "").trim();
          break;
        }
      }
    }
  };
});
var xo = g((Hv, vo) => {
  var go = /:$/, wo = /^:(\s+)?/;
  vo.exports = (t) => {
    let { name: e, params: s = "" } = t;
    if (t.name.slice(-1) === ":") {
      if (go.test(e)) {
        let [r] = e.match(go);
        t.name = e.replace(r, ""), t.raws.afterName = r + (t.raws.afterName || ""), t.variable = true, t.value = t.params;
      }
      if (wo.test(s)) {
        let [r] = s.match(wo);
        t.value = s.replace(r, ""), t.raws.afterName = (t.raws.afterName || "") + r, t.variable = true;
      }
    }
  };
});
var Eo = g((Qv, _o) => {
  var Zc = Re(), ef = Jt(), { isInlineComment: tf } = lo(), { interpolation: bo } = fo(), { isMixinToken: rf } = ho(), sf = yo(), nf = xo(), of = /(!\s*important)$/i;
  _o.exports = class extends ef {
    constructor(...e) {
      super(...e), this.lastNode = null;
    }
    atrule(e) {
      bo.bind(this)(e) || (super.atrule(e), sf(this.lastNode), nf(this.lastNode));
    }
    decl(...e) {
      super.decl(...e), /extend\(.+\)/i.test(this.lastNode.value) && (this.lastNode.extend = true);
    }
    each(e) {
      e[0][1] = ` ${e[0][1]}`;
      let s = e.findIndex((u) => u[0] === "("), r = e.reverse().find((u) => u[0] === ")"), n = e.reverse().indexOf(r), o = e.splice(s, n).map((u) => u[1]).join("");
      for (let u of e.reverse()) this.tokenizer.back(u);
      this.atrule(this.tokenizer.nextToken()), this.lastNode.function = true, this.lastNode.params = o;
    }
    init(e, s, r) {
      super.init(e, s, r), this.lastNode = e;
    }
    inlineComment(e) {
      let s = new Zc(), r = e[1].slice(2);
      if (this.init(s, e[2]), s.source.end = this.getPosition(e[3] || e[2]), s.inline = true, s.raws.begin = "//", /^\s*$/.test(r)) s.text = "", s.raws.left = r, s.raws.right = "";
      else {
        let n = r.match(/^(\s*)([^]*[^\s])(\s*)$/);
        [, s.raws.left, s.text, s.raws.right] = n;
      }
    }
    mixin(e) {
      let [s] = e, r = s[1].slice(0, 1), n = e.findIndex((c) => c[0] === "brackets"), i = e.findIndex((c) => c[0] === "("), o = "";
      if ((n < 0 || n > 3) && i > 0) {
        let c = e.reduce((w, v, N) => v[0] === ")" ? N : w), p = e.slice(i, c + i).map((w) => w[1]).join(""), [l] = e.slice(i), y = [l[2], l[3]], [x] = e.slice(c, c + 1), h = [x[2], x[3]], d = ["brackets", p].concat(y, h), m = e.slice(0, i), b = e.slice(c + 1);
        e = m, e.push(d), e = e.concat(b);
      }
      let u = [];
      for (let c of e) if ((c[1] === "!" || u.length) && u.push(c), c[1] === "important") break;
      if (u.length) {
        let [c] = u, f = e.indexOf(c), p = u[u.length - 1], l = [c[2], c[3]], y = [p[4], p[5]], h = ["word", u.map((d) => d[1]).join("")].concat(l, y);
        e.splice(f, u.length, h);
      }
      let a = e.findIndex((c) => of.test(c[1]));
      a > 0 && ([, o] = e[a], e.splice(a, 1));
      for (let c of e.reverse()) this.tokenizer.back(c);
      this.atrule(this.tokenizer.nextToken()), this.lastNode.mixin = true, this.lastNode.raws.identifier = r, o && (this.lastNode.important = true, this.lastNode.raws.important = o);
    }
    other(e) {
      tf.bind(this)(e) || super.other(e);
    }
    rule(e) {
      let s = e[e.length - 1], r = e[e.length - 2];
      if (r[0] === "at-word" && s[0] === "{" && (this.tokenizer.back(s), bo.bind(this)(r))) {
        let i = this.tokenizer.nextToken();
        e = e.slice(0, e.length - 2).concat([i]);
        for (let o of e.reverse()) this.tokenizer.back(o);
        return;
      }
      super.rule(e), /:extend\(.+\)/i.test(this.lastNode.selector) && (this.lastNode.extend = true);
    }
    unknownWord(e) {
      let [s] = e;
      if (e[0][1] === "each" && e[1][0] === "(") {
        this.each(e);
        return;
      }
      if (rf(s)) {
        this.mixin(e);
        return;
      }
      super.unknownWord(e);
    }
  };
});
var So = g((Xv, ko) => {
  var af = Yt();
  ko.exports = class extends af {
    atrule(e, s) {
      if (!e.mixin && !e.variable && !e.function) {
        super.atrule(e, s);
        return;
      }
      let n = `${e.function ? "" : e.raws.identifier || "@"}${e.name}`, i = e.params ? this.rawValue(e, "params") : "", o = e.raws.important || "";
      if (e.variable && (i = e.value), typeof e.raws.afterName < "u" ? n += e.raws.afterName : i && (n += " "), e.nodes) this.block(e, n + i + o);
      else {
        let u = (e.raws.between || "") + o + (s ? ";" : "");
        this.builder(n + i + u, e);
      }
    }
    comment(e) {
      if (e.inline) {
        let s = this.raw(e, "left", "commentLeft"), r = this.raw(e, "right", "commentRight");
        this.builder(`//${s}${e.text}${r}`, e);
      } else super.comment(e);
    }
  };
});
var To = g((Zv, ws) => {
  var uf = qe(), lf = Eo(), cf = So();
  ws.exports = { parse(t, e) {
    let s = new uf(t, e), r = new lf(s);
    return r.parse(), r.root.walk((n) => {
      let i = s.css.lastIndexOf(n.source.input.css);
      if (i === 0) return;
      if (i + n.source.input.css.length !== s.css.length) throw new Error("Invalid state detected in postcss-less");
      let o = i + n.source.start.offset, u = s.fromOffset(i + n.source.start.offset);
      if (n.source.start = { offset: o, line: u.line, column: u.col }, n.source.end) {
        let a = i + n.source.end.offset, c = s.fromOffset(i + n.source.end.offset);
        n.source.end = { offset: a, line: c.line, column: c.col };
      }
    }), r.root;
  }, stringify(t, e) {
    new cf(e).stringify(t);
  }, nodeToString(t) {
    let e = "";
    return ws.exports.stringify(t, (s) => {
      e += s;
    }), e;
  } };
});
var Zt = g((ex, Ao) => {
  var ff = le(), Co, Oo, ye = class extends ff {
    constructor(e) {
      super({ type: "document", ...e }), this.nodes || (this.nodes = []);
    }
    toResult(e = {}) {
      return new Co(new Oo(), this, e).stringify();
    }
  };
  ye.registerLazyResult = (t) => {
    Co = t;
  };
  ye.registerProcessor = (t) => {
    Oo = t;
  };
  Ao.exports = ye;
  ye.default = ye;
});
var Po = g((tx, No) => {
  var pf = Gt(), hf = Re(), df = mt(), mf = qe(), yf = cs(), gf = De(), wf = jt();
  function wt(t, e) {
    if (Array.isArray(t)) return t.map((n) => wt(n));
    let { inputs: s, ...r } = t;
    if (s) {
      e = [];
      for (let n of s) {
        let i = { ...n, __proto__: mf.prototype };
        i.map && (i.map = { ...i.map, __proto__: yf.prototype }), e.push(i);
      }
    }
    if (r.nodes && (r.nodes = t.nodes.map((n) => wt(n, e))), r.source) {
      let { inputId: n, ...i } = r.source;
      r.source = i, n != null && (r.source.input = e[n]);
    }
    if (r.type === "root") return new gf(r);
    if (r.type === "decl") return new df(r);
    if (r.type === "rule") return new wf(r);
    if (r.type === "comment") return new hf(r);
    if (r.type === "atrule") return new pf(r);
    throw new Error("Unknown node type: " + t.type);
  }
  No.exports = wt;
  wt.default = wt;
});
var vs = g((rx, Ro) => {
  Ro.exports = class {
    generate() {
    }
  };
});
var xs = g((nx, Io) => {
  var vt = class {
    constructor(e, s = {}) {
      if (this.type = "warning", this.text = e, s.node && s.node.source) {
        let r = s.node.rangeBy(s);
        this.line = r.start.line, this.column = r.start.column, this.endLine = r.end.line, this.endColumn = r.end.column;
      }
      for (let r in s) this[r] = s[r];
    }
    toString() {
      return this.node ? this.node.error(this.text, { index: this.index, plugin: this.plugin, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
    }
  };
  Io.exports = vt;
  vt.default = vt;
});
var er = g((ix, qo) => {
  var vf = xs(), xt = class {
    get content() {
      return this.css;
    }
    constructor(e, s, r) {
      this.processor = e, this.messages = [], this.root = s, this.opts = r, this.css = void 0, this.map = void 0;
    }
    toString() {
      return this.css;
    }
    warn(e, s = {}) {
      s.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (s.plugin = this.lastPlugin.postcssPlugin);
      let r = new vf(e, s);
      return this.messages.push(r), r;
    }
    warnings() {
      return this.messages.filter((e) => e.type === "warning");
    }
  };
  qo.exports = xt;
  xt.default = xt;
});
var bs = g((ox, Do) => {
  var Lo = {};
  Do.exports = function(e) {
    Lo[e] || (Lo[e] = true, typeof console < "u" && console.warn && console.warn(e));
  };
});
var ks = g((ux, Fo) => {
  var xf = le(), bf = Zt(), _f = vs(), Ef = gt(), Bo = er(), kf = De(), Sf = ut(), { isClean: K, my: Tf } = Vt();
  bs();
  var Cf = { atrule: "AtRule", comment: "Comment", decl: "Declaration", document: "Document", root: "Root", rule: "Rule" }, Of = { AtRule: true, AtRuleExit: true, Comment: true, CommentExit: true, Declaration: true, DeclarationExit: true, Document: true, DocumentExit: true, Once: true, OnceExit: true, postcssPlugin: true, prepare: true, Root: true, RootExit: true, Rule: true, RuleExit: true }, Af = { Once: true, postcssPlugin: true, prepare: true }, Me = 0;
  function bt(t) {
    return typeof t == "object" && typeof t.then == "function";
  }
  function Uo(t) {
    let e = false, s = Cf[t.type];
    return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [s, s + "-" + e, Me, s + "Exit", s + "Exit-" + e] : e ? [s, s + "-" + e, s + "Exit", s + "Exit-" + e] : t.append ? [s, Me, s + "Exit"] : [s, s + "Exit"];
  }
  function Mo(t) {
    let e;
    return t.type === "document" ? e = ["Document", Me, "DocumentExit"] : t.type === "root" ? e = ["Root", Me, "RootExit"] : e = Uo(t), { eventIndex: 0, events: e, iterator: 0, node: t, visitorIndex: 0, visitors: [] };
  }
  function _s(t) {
    return t[K] = false, t.nodes && t.nodes.forEach((e) => _s(e)), t;
  }
  var Es = {}, fe = class t {
    get content() {
      return this.stringify().content;
    }
    get css() {
      return this.stringify().css;
    }
    get map() {
      return this.stringify().map;
    }
    get messages() {
      return this.sync().messages;
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      return this.sync().root;
    }
    get [Symbol.toStringTag]() {
      return "LazyResult";
    }
    constructor(e, s, r) {
      this.stringified = false, this.processed = false;
      let n;
      if (typeof s == "object" && s !== null && (s.type === "root" || s.type === "document")) n = _s(s);
      else if (s instanceof t || s instanceof Bo) n = _s(s.root), s.map && (typeof r.map > "u" && (r.map = {}), r.map.inline || (r.map.inline = false), r.map.prev = s.map);
      else {
        let i = Ef;
        r.syntax && (i = r.syntax.parse), r.parser && (i = r.parser), i.parse && (i = i.parse);
        try {
          n = i(s, r);
        } catch (o) {
          this.processed = true, this.error = o;
        }
        n && !n[Tf] && xf.rebuild(n);
      }
      this.result = new Bo(e, n, r), this.helpers = { ...Es, postcss: Es, result: this.result }, this.plugins = this.processor.plugins.map((i) => typeof i == "object" && i.prepare ? { ...i, ...i.prepare(this.result) } : i);
    }
    async() {
      return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
    }
    catch(e) {
      return this.async().catch(e);
    }
    finally(e) {
      return this.async().then(e, e);
    }
    getAsyncError() {
      throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(e, s) {
      let r = this.result.lastPlugin;
      try {
        s && s.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin ? (e.plugin = r.postcssPlugin, e.setMessage()) : r.postcssVersion;
      } catch (n) {
        console && console.error && console.error(n);
      }
      return e;
    }
    prepareVisitors() {
      this.listeners = {};
      let e = (s, r, n) => {
        this.listeners[r] || (this.listeners[r] = []), this.listeners[r].push([s, n]);
      };
      for (let s of this.plugins) if (typeof s == "object") for (let r in s) {
        if (!Of[r] && /^[A-Z]/.test(r)) throw new Error(`Unknown event ${r} in ${s.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
        if (!Af[r]) if (typeof s[r] == "object") for (let n in s[r]) n === "*" ? e(s, r, s[r][n]) : e(s, r + "-" + n.toLowerCase(), s[r][n]);
        else typeof s[r] == "function" && e(s, r, s[r]);
      }
      this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
      this.plugin = 0;
      for (let e = 0; e < this.plugins.length; e++) {
        let s = this.plugins[e], r = this.runOnRoot(s);
        if (bt(r)) try {
          await r;
        } catch (n) {
          throw this.handleError(n);
        }
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e = this.result.root;
        for (; !e[K]; ) {
          e[K] = true;
          let s = [Mo(e)];
          for (; s.length > 0; ) {
            let r = this.visitTick(s);
            if (bt(r)) try {
              await r;
            } catch (n) {
              let i = s[s.length - 1].node;
              throw this.handleError(n, i);
            }
          }
        }
        if (this.listeners.OnceExit) for (let [s, r] of this.listeners.OnceExit) {
          this.result.lastPlugin = s;
          try {
            if (e.type === "document") {
              let n = e.nodes.map((i) => r(i, this.helpers));
              await Promise.all(n);
            } else await r(e, this.helpers);
          } catch (n) {
            throw this.handleError(n);
          }
        }
      }
      return this.processed = true, this.stringify();
    }
    runOnRoot(e) {
      this.result.lastPlugin = e;
      try {
        if (typeof e == "object" && e.Once) {
          if (this.result.root.type === "document") {
            let s = this.result.root.nodes.map((r) => e.Once(r, this.helpers));
            return bt(s[0]) ? Promise.all(s) : s;
          }
          return e.Once(this.result.root, this.helpers);
        } else if (typeof e == "function") return e(this.result.root, this.result);
      } catch (s) {
        throw this.handleError(s);
      }
    }
    stringify() {
      if (this.error) throw this.error;
      if (this.stringified) return this.result;
      this.stringified = true, this.sync();
      let e = this.result.opts, s = Sf;
      e.syntax && (s = e.syntax.stringify), e.stringifier && (s = e.stringifier), s.stringify && (s = s.stringify);
      let n = new _f(s, this.result.root, this.result.opts).generate();
      return this.result.css = n[0], this.result.map = n[1], this.result;
    }
    sync() {
      if (this.error) throw this.error;
      if (this.processed) return this.result;
      if (this.processed = true, this.processing) throw this.getAsyncError();
      for (let e of this.plugins) {
        let s = this.runOnRoot(e);
        if (bt(s)) throw this.getAsyncError();
      }
      if (this.prepareVisitors(), this.hasListener) {
        let e = this.result.root;
        for (; !e[K]; ) e[K] = true, this.walkSync(e);
        if (this.listeners.OnceExit) if (e.type === "document") for (let s of e.nodes) this.visitSync(this.listeners.OnceExit, s);
        else this.visitSync(this.listeners.OnceExit, e);
      }
      return this.result;
    }
    then(e, s) {
      return this.async().then(e, s);
    }
    toString() {
      return this.css;
    }
    visitSync(e, s) {
      for (let [r, n] of e) {
        this.result.lastPlugin = r;
        let i;
        try {
          i = n(s, this.helpers);
        } catch (o) {
          throw this.handleError(o, s.proxyOf);
        }
        if (s.type !== "root" && s.type !== "document" && !s.parent) return true;
        if (bt(i)) throw this.getAsyncError();
      }
    }
    visitTick(e) {
      let s = e[e.length - 1], { node: r, visitors: n } = s;
      if (r.type !== "root" && r.type !== "document" && !r.parent) {
        e.pop();
        return;
      }
      if (n.length > 0 && s.visitorIndex < n.length) {
        let [o, u] = n[s.visitorIndex];
        s.visitorIndex += 1, s.visitorIndex === n.length && (s.visitors = [], s.visitorIndex = 0), this.result.lastPlugin = o;
        try {
          return u(r.toProxy(), this.helpers);
        } catch (a) {
          throw this.handleError(a, r);
        }
      }
      if (s.iterator !== 0) {
        let o = s.iterator, u;
        for (; u = r.nodes[r.indexes[o]]; ) if (r.indexes[o] += 1, !u[K]) {
          u[K] = true, e.push(Mo(u));
          return;
        }
        s.iterator = 0, delete r.indexes[o];
      }
      let i = s.events;
      for (; s.eventIndex < i.length; ) {
        let o = i[s.eventIndex];
        if (s.eventIndex += 1, o === Me) {
          r.nodes && r.nodes.length && (r[K] = true, s.iterator = r.getIterator());
          return;
        } else if (this.listeners[o]) {
          s.visitors = this.listeners[o];
          return;
        }
      }
      e.pop();
    }
    walkSync(e) {
      e[K] = true;
      let s = Uo(e);
      for (let r of s) if (r === Me) e.nodes && e.each((n) => {
        n[K] || this.walkSync(n);
      });
      else {
        let n = this.listeners[r];
        if (n && this.visitSync(n, e.toProxy())) return;
      }
    }
    warnings() {
      return this.sync().warnings();
    }
  };
  fe.registerPostcss = (t) => {
    Es = t;
  };
  Fo.exports = fe;
  fe.default = fe;
  kf.registerLazyResult(fe);
  bf.registerLazyResult(fe);
});
var Wo = g((cx, $o) => {
  var Nf = vs(), Pf = gt(), Rf = er(), If = ut();
  bs();
  var _t = class {
    get content() {
      return this.result.css;
    }
    get css() {
      return this.result.css;
    }
    get map() {
      return this.result.map;
    }
    get messages() {
      return [];
    }
    get opts() {
      return this.result.opts;
    }
    get processor() {
      return this.result.processor;
    }
    get root() {
      if (this._root) return this._root;
      let e, s = Pf;
      try {
        e = s(this._css, this._opts);
      } catch (r) {
        this.error = r;
      }
      if (this.error) throw this.error;
      return this._root = e, e;
    }
    get [Symbol.toStringTag]() {
      return "NoWorkResult";
    }
    constructor(e, s, r) {
      s = s.toString(), this.stringified = false, this._processor = e, this._css = s, this._opts = r, this._map = void 0;
      let n, i = If;
      this.result = new Rf(this._processor, n, this._opts), this.result.css = s;
      let o = this;
      Object.defineProperty(this.result, "root", { get() {
        return o.root;
      } });
      let u = new Nf(i, n, this._opts, s);
      if (u.isMap()) {
        let [a, c] = u.generate();
        a && (this.result.css = a), c && (this.result.map = c);
      } else u.clearAnnotation(), this.result.css = u.css;
    }
    async() {
      return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
    }
    catch(e) {
      return this.async().catch(e);
    }
    finally(e) {
      return this.async().then(e, e);
    }
    sync() {
      if (this.error) throw this.error;
      return this.result;
    }
    then(e, s) {
      return this.async().then(e, s);
    }
    toString() {
      return this._css;
    }
    warnings() {
      return [];
    }
  };
  $o.exports = _t;
  _t.default = _t;
});
var Vo = g((fx, Yo) => {
  var qf = Zt(), Lf = ks(), Df = Wo(), Bf = De(), ge = class {
    constructor(e = []) {
      this.version = "8.5.3", this.plugins = this.normalize(e);
    }
    normalize(e) {
      let s = [];
      for (let r of e) if (r.postcss === true ? r = r() : r.postcss && (r = r.postcss), typeof r == "object" && Array.isArray(r.plugins)) s = s.concat(r.plugins);
      else if (typeof r == "object" && r.postcssPlugin) s.push(r);
      else if (typeof r == "function") s.push(r);
      else if (!(typeof r == "object" && (r.parse || r.stringify))) throw new Error(r + " is not a PostCSS plugin");
      return s;
    }
    process(e, s = {}) {
      return !this.plugins.length && !s.parser && !s.stringifier && !s.syntax ? new Df(this, e, s) : new Lf(this, e, s);
    }
    use(e) {
      return this.plugins = this.plugins.concat(this.normalize([e])), this;
    }
  };
  Yo.exports = ge;
  ge.default = ge;
  Bf.registerProcessor(ge);
  qf.registerProcessor(ge);
});
var tr = g((px, Jo) => {
  var zo = Gt(), Go = Re(), Mf = le(), Uf = Wt(), jo = mt(), Ho = Zt(), Ff = Po(), $f = qe(), Wf = ks(), Yf = ms(), Vf = pt(), zf = gt(), Ss = Vo(), Gf = er(), Ko = De(), Qo = jt(), jf = ut(), Hf = xs();
  function k(...t) {
    return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new Ss(t);
  }
  k.plugin = function(e, s) {
    let r = false;
    function n(...o) {
      console && console.warn && !r && (r = true, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`));
      let u = s(...o);
      return u.postcssPlugin = e, u.postcssVersion = new Ss().version, u;
    }
    let i;
    return Object.defineProperty(n, "postcss", { get() {
      return i || (i = n()), i;
    } }), n.process = function(o, u, a) {
      return k([n(a)]).process(o, u);
    }, n;
  };
  k.stringify = jf;
  k.parse = zf;
  k.fromJSON = Ff;
  k.list = Yf;
  k.comment = (t) => new Go(t);
  k.atRule = (t) => new zo(t);
  k.decl = (t) => new jo(t);
  k.rule = (t) => new Qo(t);
  k.root = (t) => new Ko(t);
  k.document = (t) => new Ho(t);
  k.CssSyntaxError = Uf;
  k.Declaration = jo;
  k.Container = Mf;
  k.Processor = Ss;
  k.Document = Ho;
  k.Comment = Go;
  k.Warning = Hf;
  k.AtRule = zo;
  k.Result = Gf;
  k.Input = $f;
  k.Rule = Qo;
  k.Root = Ko;
  k.Node = Vf;
  Wf.registerPostcss(k);
  Jo.exports = k;
  k.default = k;
});
var Zo = g((hx, Xo) => {
  var { Container: Kf } = tr(), Ts = class extends Kf {
    constructor(e) {
      super(e), this.type = "decl", this.isNested = true, this.nodes || (this.nodes = []);
    }
  };
  Xo.exports = Ts;
});
var ra = g((dx, ta) => {
  var rr = /[\t\n\f\r "#'()/;[\\\]{}]/g, sr = /[,\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, Qf = /.[\r\n"'(/\\]/, ea = /[\da-f]/i, nr = /[\n\f\r]/g;
  ta.exports = function(e, s = {}) {
    let r = e.css.valueOf(), n = s.ignoreErrors, i, o, u, a, c, f, p, l, y, x = r.length, h = 0, d = [], m = [], b;
    function w() {
      return h;
    }
    function v(T) {
      throw e.error("Unclosed " + T, h);
    }
    function N() {
      return m.length === 0 && h >= x;
    }
    function F() {
      let T = 1, C = false, O = false;
      for (; T > 0; ) o += 1, r.length <= o && v("interpolation"), i = r.charCodeAt(o), l = r.charCodeAt(o + 1), C ? !O && i === C ? (C = false, O = false) : i === 92 ? O = !O : O && (O = false) : i === 39 || i === 34 ? C = i : i === 125 ? T -= 1 : i === 35 && l === 123 && (T += 1);
    }
    function Q(T) {
      if (m.length) return m.pop();
      if (h >= x) return;
      let C = T ? T.ignoreUnclosed : false;
      switch (i = r.charCodeAt(h), i) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12: {
          o = h;
          do
            o += 1, i = r.charCodeAt(o);
          while (i === 32 || i === 10 || i === 9 || i === 13 || i === 12);
          y = ["space", r.slice(h, o)], h = o - 1;
          break;
        }
        case 91:
        case 93:
        case 123:
        case 125:
        case 58:
        case 59:
        case 41: {
          let O = String.fromCharCode(i);
          y = [O, O, h];
          break;
        }
        case 44: {
          y = ["word", ",", h, h + 1];
          break;
        }
        case 40: {
          if (p = d.length ? d.pop()[1] : "", l = r.charCodeAt(h + 1), p === "url" && l !== 39 && l !== 34) {
            for (b = 1, f = false, o = h + 1; o <= r.length - 1; ) {
              if (l = r.charCodeAt(o), l === 92) f = !f;
              else if (l === 40) b += 1;
              else if (l === 41 && (b -= 1, b === 0)) break;
              o += 1;
            }
            a = r.slice(h, o + 1), y = ["brackets", a, h, o], h = o;
          } else o = r.indexOf(")", h + 1), a = r.slice(h, o + 1), o === -1 || Qf.test(a) ? y = ["(", "(", h] : (y = ["brackets", a, h, o], h = o);
          break;
        }
        case 39:
        case 34: {
          for (u = i, o = h, f = false; o < x && (o++, o === x && v("string"), i = r.charCodeAt(o), l = r.charCodeAt(o + 1), !(!f && i === u)); ) i === 92 ? f = !f : f ? f = false : i === 35 && l === 123 && F();
          y = ["string", r.slice(h, o + 1), h, o], h = o;
          break;
        }
        case 64: {
          rr.lastIndex = h + 1, rr.test(r), rr.lastIndex === 0 ? o = r.length - 1 : o = rr.lastIndex - 2, y = ["at-word", r.slice(h, o + 1), h, o], h = o;
          break;
        }
        case 92: {
          for (o = h, c = true; r.charCodeAt(o + 1) === 92; ) o += 1, c = !c;
          if (i = r.charCodeAt(o + 1), c && i !== 47 && i !== 32 && i !== 10 && i !== 9 && i !== 13 && i !== 12 && (o += 1, ea.test(r.charAt(o)))) {
            for (; ea.test(r.charAt(o + 1)); ) o += 1;
            r.charCodeAt(o + 1) === 32 && (o += 1);
          }
          y = ["word", r.slice(h, o + 1), h, o], h = o;
          break;
        }
        default:
          l = r.charCodeAt(h + 1), i === 35 && l === 123 ? (o = h, F(), a = r.slice(h, o + 1), y = ["word", a, h, o], h = o) : i === 47 && l === 42 ? (o = r.indexOf("*/", h + 2) + 1, o === 0 && (n || C ? o = r.length : v("comment")), y = ["comment", r.slice(h, o + 1), h, o], h = o) : i === 47 && l === 47 ? (nr.lastIndex = h + 1, nr.test(r), nr.lastIndex === 0 ? o = r.length - 1 : o = nr.lastIndex - 2, a = r.slice(h, o + 1), y = ["comment", a, h, o, "inline"], h = o) : (sr.lastIndex = h + 1, sr.test(r), sr.lastIndex === 0 ? o = r.length - 1 : o = sr.lastIndex - 2, y = ["word", r.slice(h, o + 1), h, o], d.push(y), h = o);
          break;
      }
      return h++, y;
    }
    function W(T) {
      m.push(T);
    }
    return { back: W, endOfFile: N, nextToken: Q, position: w };
  };
});
var na = g((mx, sa) => {
  var { Comment: Jf } = tr(), Xf = Jt(), Zf = Zo(), ep = ra(), Cs = class extends Xf {
    atrule(e) {
      let s = e[1], r = e;
      for (; !this.tokenizer.endOfFile(); ) {
        let n = this.tokenizer.nextToken();
        if (n[0] === "word" && n[2] === r[3] + 1) s += n[1], r = n;
        else {
          this.tokenizer.back(n);
          break;
        }
      }
      super.atrule(["at-word", s, e[2], r[3]]);
    }
    comment(e) {
      if (e[4] === "inline") {
        let s = new Jf();
        this.init(s, e[2]), s.raws.inline = true;
        let r = this.input.fromOffset(e[3]);
        s.source.end = { column: r.col, line: r.line, offset: e[3] + 1 };
        let n = e[1].slice(2);
        if (/^\s*$/.test(n)) s.text = "", s.raws.left = n, s.raws.right = "";
        else {
          let i = n.match(/^(\s*)([^]*\S)(\s*)$/), o = i[2].replace(/(\*\/|\/\*)/g, "*//*");
          s.text = o, s.raws.left = i[1], s.raws.right = i[3], s.raws.text = i[2];
        }
      } else super.comment(e);
    }
    createTokenizer() {
      this.tokenizer = ep(this.input);
    }
    raw(e, s, r, n) {
      if (super.raw(e, s, r, n), e.raws[s]) {
        let i = e.raws[s].raw;
        e.raws[s].raw = r.reduce((o, u) => {
          if (u[0] === "comment" && u[4] === "inline") {
            let a = u[1].slice(2).replace(/(\*\/|\/\*)/g, "*//*");
            return o + "/*" + a + "*/";
          } else return o + u[1];
        }, ""), i !== e.raws[s].raw && (e.raws[s].scss = i);
      }
    }
    rule(e) {
      let s = false, r = 0, n = "";
      for (let i of e) if (s) i[0] !== "comment" && i[0] !== "{" && (n += i[1]);
      else {
        if (i[0] === "space" && i[1].includes(`
`)) break;
        i[0] === "(" ? r += 1 : i[0] === ")" ? r -= 1 : r === 0 && i[0] === ":" && (s = true);
      }
      if (!s || n.trim() === "" || /^[#:A-Za-z-]/.test(n)) super.rule(e);
      else {
        e.pop();
        let i = new Zf();
        this.init(i, e[0][2]);
        let o;
        for (let a = e.length - 1; a >= 0; a--) if (e[a][0] !== "space") {
          o = e[a];
          break;
        }
        if (o[3]) {
          let a = this.input.fromOffset(o[3]);
          i.source.end = { column: a.col, line: a.line, offset: o[3] + 1 };
        } else {
          let a = this.input.fromOffset(o[2]);
          i.source.end = { column: a.col, line: a.line, offset: o[2] + 1 };
        }
        for (; e[0][0] !== "word"; ) i.raws.before += e.shift()[1];
        if (e[0][2]) {
          let a = this.input.fromOffset(e[0][2]);
          i.source.start = { column: a.col, line: a.line, offset: e[0][2] };
        }
        for (i.prop = ""; e.length; ) {
          let a = e[0][0];
          if (a === ":" || a === "space" || a === "comment") break;
          i.prop += e.shift()[1];
        }
        i.raws.between = "";
        let u;
        for (; e.length; ) if (u = e.shift(), u[0] === ":") {
          i.raws.between += u[1];
          break;
        } else i.raws.between += u[1];
        (i.prop[0] === "_" || i.prop[0] === "*") && (i.raws.before += i.prop[0], i.prop = i.prop.slice(1)), i.raws.between += this.spacesAndCommentsFromStart(e), this.precheckMissedSemicolon(e);
        for (let a = e.length - 1; a > 0; a--) {
          if (u = e[a], u[1] === "!important") {
            i.important = true;
            let c = this.stringFrom(e, a);
            c = this.spacesFromEnd(e) + c, c !== " !important" && (i.raws.important = c);
            break;
          } else if (u[1] === "important") {
            let c = e.slice(0), f = "";
            for (let p = a; p > 0; p--) {
              let l = c[p][0];
              if (f.trim().indexOf("!") === 0 && l !== "space") break;
              f = c.pop()[1] + f;
            }
            f.trim().indexOf("!") === 0 && (i.important = true, i.raws.important = f, e = c);
          }
          if (u[0] !== "space" && u[0] !== "comment") break;
        }
        this.raw(i, "value", e), i.value.includes(":") && this.checkMissedSemicolon(e), this.current = i;
      }
    }
  };
  sa.exports = Cs;
});
var oa = g((yx, ia) => {
  var { Input: tp } = tr(), rp = na();
  ia.exports = function(e, s) {
    let r = new tp(e, s), n = new rp(r);
    return n.parse(), n.root;
  };
});
var As = g((Os) => {
  Object.defineProperty(Os, "__esModule", { value: true });
  function np(t) {
    this.after = t.after, this.before = t.before, this.type = t.type, this.value = t.value, this.sourceIndex = t.sourceIndex;
  }
  Os.default = np;
});
var Ps = g((Ns) => {
  Object.defineProperty(Ns, "__esModule", { value: true });
  var ip = As(), ua = op(ip);
  function op(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Et(t) {
    var e = this;
    this.constructor(t), this.nodes = t.nodes, this.after === void 0 && (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : ""), this.before === void 0 && (this.before = this.nodes.length > 0 ? this.nodes[0].before : ""), this.sourceIndex === void 0 && (this.sourceIndex = this.before.length), this.nodes.forEach(function(s) {
      s.parent = e;
    });
  }
  Et.prototype = Object.create(ua.default.prototype);
  Et.constructor = ua.default;
  Et.prototype.walk = function(e, s) {
    for (var r = typeof e == "string" || e instanceof RegExp, n = r ? s : e, i = typeof e == "string" ? new RegExp(e) : e, o = 0; o < this.nodes.length; o++) {
      var u = this.nodes[o], a = r ? i.test(u.type) : true;
      if (a && n && n(u, o, this.nodes) === false || u.nodes && u.walk(e, s) === false) return false;
    }
    return true;
  };
  Et.prototype.each = function() {
    for (var e = arguments.length <= 0 || arguments[0] === void 0 ? function() {
    } : arguments[0], s = 0; s < this.nodes.length; s++) {
      var r = this.nodes[s];
      if (e(r, s, this.nodes) === false) return false;
    }
    return true;
  };
  Ns.default = Et;
});
var pa = g((kt) => {
  Object.defineProperty(kt, "__esModule", { value: true });
  kt.parseMediaFeature = fa;
  kt.parseMediaQuery = Is;
  kt.parseMediaList = lp;
  var ap = As(), la = ca(ap), up = Ps(), Rs = ca(up);
  function ca(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function fa(t) {
    var e = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], s = [{ mode: "normal", character: null }], r = [], n = 0, i = "", o = null, u = null, a = e, c = t;
    t[0] === "(" && t[t.length - 1] === ")" && (c = t.substring(1, t.length - 1), a++);
    for (var f = 0; f < c.length; f++) {
      var p = c[f];
      if ((p === "'" || p === '"') && (s[n].isCalculationEnabled === true ? (s.push({ mode: "string", isCalculationEnabled: false, character: p }), n++) : s[n].mode === "string" && s[n].character === p && c[f - 1] !== "\\" && (s.pop(), n--)), p === "{" ? (s.push({ mode: "interpolation", isCalculationEnabled: true }), n++) : p === "}" && (s.pop(), n--), s[n].mode === "normal" && p === ":") {
        var l = c.substring(f + 1);
        u = { type: "value", before: /^(\s*)/.exec(l)[1], after: /(\s*)$/.exec(l)[1], value: l.trim() }, u.sourceIndex = u.before.length + f + 1 + a, o = { type: "colon", sourceIndex: f + a, after: u.before, value: ":" };
        break;
      }
      i += p;
    }
    return i = { type: "media-feature", before: /^(\s*)/.exec(i)[1], after: /(\s*)$/.exec(i)[1], value: i.trim() }, i.sourceIndex = i.before.length + a, r.push(i), o !== null && (o.before = i.after, r.push(o)), u !== null && r.push(u), r;
  }
  function Is(t) {
    var e = arguments.length <= 1 || arguments[1] === void 0 ? 0 : arguments[1], s = [], r = 0, n = false, i = void 0;
    function o() {
      return { before: "", after: "", value: "" };
    }
    i = o();
    for (var u = 0; u < t.length; u++) {
      var a = t[u];
      n ? (i.value += a, (a === "{" || a === "(") && r++, (a === ")" || a === "}") && r--) : a.search(/\s/) !== -1 ? i.before += a : (a === "(" && (i.type = "media-feature-expression", r++), i.value = a, i.sourceIndex = e + u, n = true), n && r === 0 && (a === ")" || u === t.length - 1 || t[u + 1].search(/\s/) !== -1) && (["not", "only", "and"].indexOf(i.value) !== -1 && (i.type = "keyword"), i.type === "media-feature-expression" && (i.nodes = fa(i.value, i.sourceIndex)), s.push(Array.isArray(i.nodes) ? new Rs.default(i) : new la.default(i)), i = o(), n = false);
    }
    for (var c = 0; c < s.length; c++) if (i = s[c], c > 0 && (s[c - 1].after = i.before), i.type === void 0) {
      if (c > 0) {
        if (s[c - 1].type === "media-feature-expression") {
          i.type = "keyword";
          continue;
        }
        if (s[c - 1].value === "not" || s[c - 1].value === "only") {
          i.type = "media-type";
          continue;
        }
        if (s[c - 1].value === "and") {
          i.type = "media-feature-expression";
          continue;
        }
        s[c - 1].type === "media-type" && (s[c + 1] ? i.type = s[c + 1].type === "media-feature-expression" ? "keyword" : "media-feature-expression" : i.type = "media-feature-expression");
      }
      if (c === 0) {
        if (!s[c + 1]) {
          i.type = "media-type";
          continue;
        }
        if (s[c + 1] && (s[c + 1].type === "media-feature-expression" || s[c + 1].type === "keyword")) {
          i.type = "media-type";
          continue;
        }
        if (s[c + 2]) {
          if (s[c + 2].type === "media-feature-expression") {
            i.type = "media-type", s[c + 1].type = "keyword";
            continue;
          }
          if (s[c + 2].type === "keyword") {
            i.type = "keyword", s[c + 1].type = "media-type";
            continue;
          }
        }
        if (s[c + 3] && s[c + 3].type === "media-feature-expression") {
          i.type = "keyword", s[c + 1].type = "media-type", s[c + 2].type = "keyword";
          continue;
        }
      }
    }
    return s;
  }
  function lp(t) {
    var e = [], s = 0, r = 0, n = /^(\s*)url\s*\(/.exec(t);
    if (n !== null) {
      for (var i = n[0].length, o = 1; o > 0; ) {
        var u = t[i];
        u === "(" && o++, u === ")" && o--, i++;
      }
      e.unshift(new la.default({ type: "url", value: t.substring(0, i).trim(), sourceIndex: n[1].length, before: n[1], after: /^(\s*)/.exec(t.substring(i))[1] })), s = i;
    }
    for (var a = s; a < t.length; a++) {
      var c = t[a];
      if (c === "(" && r++, c === ")" && r--, r === 0 && c === ",") {
        var f = t.substring(s, a), p = /^(\s*)/.exec(f)[1];
        e.push(new Rs.default({ type: "media-query", value: f.trim(), sourceIndex: s + p.length, nodes: Is(f, s), before: p, after: /(\s*)$/.exec(f)[1] })), s = a + 1;
      }
    }
    var l = t.substring(s), y = /^(\s*)/.exec(l)[1];
    return e.push(new Rs.default({ type: "media-query", value: l.trim(), sourceIndex: s + y.length, nodes: Is(l, s), before: y, after: /(\s*)$/.exec(l)[1] })), e;
  }
});
var ha = g((qs) => {
  Object.defineProperty(qs, "__esModule", { value: true });
  qs.default = dp;
  var cp = Ps(), fp = hp(cp), pp = pa();
  function hp(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function dp(t) {
    return new fp.default({ nodes: (0, pp.parseMediaList)(t), type: "media-query-list", value: t.trim() });
  }
});
var Ds = g((Sx, ya) => {
  ya.exports = function(e, s) {
    if (s = typeof s == "number" ? s : 1 / 0, !s) return Array.isArray(e) ? e.map(function(n) {
      return n;
    }) : e;
    return r(e, 1);
    function r(n, i) {
      return n.reduce(function(o, u) {
        return Array.isArray(u) && i < s ? o.concat(r(u, i + 1)) : o.concat(u);
      }, []);
    }
  };
});
var Bs = g((Tx, ga) => {
  ga.exports = function(t, e) {
    for (var s = -1, r = []; (s = t.indexOf(e, s + 1)) !== -1; ) r.push(s);
    return r;
  };
});
var Ms = g((Cx, wa) => {
  function gp(t, e) {
    for (var s = 1, r = t.length, n = t[0], i = t[0], o = 1; o < r; ++o) if (i = n, n = t[o], e(n, i)) {
      if (o === s) {
        s++;
        continue;
      }
      t[s++] = n;
    }
    return t.length = s, t;
  }
  function wp(t) {
    for (var e = 1, s = t.length, r = t[0], n = t[0], i = 1; i < s; ++i, n = r) if (n = r, r = t[i], r !== n) {
      if (i === e) {
        e++;
        continue;
      }
      t[e++] = r;
    }
    return t.length = e, t;
  }
  function vp(t, e, s) {
    return t.length === 0 ? t : e ? (s || t.sort(e), gp(t, e)) : (s || t.sort(), wp(t));
  }
  wa.exports = vp;
});
var we = g((ir, xa) => {
  ir.__esModule = true;
  var va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  };
  function xp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var bp = function t(e, s) {
    if ((typeof e > "u" ? "undefined" : va(e)) !== "object") return e;
    var r = new e.constructor();
    for (var n in e) if (e.hasOwnProperty(n)) {
      var i = e[n], o = typeof i > "u" ? "undefined" : va(i);
      n === "parent" && o === "object" ? s && (r[n] = s) : i instanceof Array ? r[n] = i.map(function(u) {
        return t(u, r);
      }) : r[n] = t(i, r);
    }
    return r;
  }, _p = function() {
    function t() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      xp(this, t);
      for (var s in e) this[s] = e[s];
      var r = e.spaces;
      r = r === void 0 ? {} : r;
      var n = r.before, i = n === void 0 ? "" : n, o = r.after, u = o === void 0 ? "" : o;
      this.spaces = { before: i, after: u };
    }
    return t.prototype.remove = function() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }, t.prototype.replaceWith = function() {
      if (this.parent) {
        for (var s in arguments) this.parent.insertBefore(this, arguments[s]);
        this.remove();
      }
      return this;
    }, t.prototype.next = function() {
      return this.parent.at(this.parent.index(this) + 1);
    }, t.prototype.prev = function() {
      return this.parent.at(this.parent.index(this) - 1);
    }, t.prototype.clone = function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = bp(this);
      for (var n in s) r[n] = s[n];
      return r;
    }, t.prototype.toString = function() {
      return [this.spaces.before, String(this.value), this.spaces.after].join("");
    }, t;
  }();
  ir.default = _p;
  xa.exports = ir.default;
});
var B = g((M) => {
  M.__esModule = true;
  M.TAG = "tag";
  M.STRING = "string";
  M.SELECTOR = "selector";
  M.ROOT = "root";
  M.PSEUDO = "pseudo";
  M.NESTING = "nesting";
  M.ID = "id";
  M.COMMENT = "comment";
  M.COMBINATOR = "combinator";
  M.CLASS = "class";
  M.ATTRIBUTE = "attribute";
  M.UNIVERSAL = "universal";
});
var ar = g((or, ba) => {
  or.__esModule = true;
  var Ep = /* @__PURE__ */ function() {
    function t(e, s) {
      for (var r = 0; r < s.length; r++) {
        var n = s[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
      }
    }
    return function(e, s, r) {
      return s && t(e.prototype, s), r && t(e, r), e;
    };
  }(), kp = we(), Sp = Op(kp), Tp = B(), Z = Cp(Tp);
  function Cp(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (t != null) for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e.default = t, e;
  }
  function Op(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Ap(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Np(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function Pp(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var Rp = function(t) {
    Pp(e, t);
    function e(s) {
      Ap(this, e);
      var r = Np(this, t.call(this, s));
      return r.nodes || (r.nodes = []), r;
    }
    return e.prototype.append = function(r) {
      return r.parent = this, this.nodes.push(r), this;
    }, e.prototype.prepend = function(r) {
      return r.parent = this, this.nodes.unshift(r), this;
    }, e.prototype.at = function(r) {
      return this.nodes[r];
    }, e.prototype.index = function(r) {
      return typeof r == "number" ? r : this.nodes.indexOf(r);
    }, e.prototype.removeChild = function(r) {
      r = this.index(r), this.at(r).parent = void 0, this.nodes.splice(r, 1);
      var n = void 0;
      for (var i in this.indexes) n = this.indexes[i], n >= r && (this.indexes[i] = n - 1);
      return this;
    }, e.prototype.removeAll = function() {
      for (var i = this.nodes, r = Array.isArray(i), n = 0, i = r ? i : i[Symbol.iterator](); ; ) {
        var o;
        if (r) {
          if (n >= i.length) break;
          o = i[n++];
        } else {
          if (n = i.next(), n.done) break;
          o = n.value;
        }
        var u = o;
        u.parent = void 0;
      }
      return this.nodes = [], this;
    }, e.prototype.empty = function() {
      return this.removeAll();
    }, e.prototype.insertAfter = function(r, n) {
      var i = this.index(r);
      this.nodes.splice(i + 1, 0, n);
      var o = void 0;
      for (var u in this.indexes) o = this.indexes[u], i <= o && (this.indexes[u] = o + this.nodes.length);
      return this;
    }, e.prototype.insertBefore = function(r, n) {
      var i = this.index(r);
      this.nodes.splice(i, 0, n);
      var o = void 0;
      for (var u in this.indexes) o = this.indexes[u], i <= o && (this.indexes[u] = o + this.nodes.length);
      return this;
    }, e.prototype.each = function(r) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach++;
      var n = this.lastEach;
      if (this.indexes[n] = 0, !!this.length) {
        for (var i = void 0, o = void 0; this.indexes[n] < this.length && (i = this.indexes[n], o = r(this.at(i), i), o !== false); ) this.indexes[n] += 1;
        if (delete this.indexes[n], o === false) return false;
      }
    }, e.prototype.walk = function(r) {
      return this.each(function(n, i) {
        var o = r(n, i);
        if (o !== false && n.length && (o = n.walk(r)), o === false) return false;
      });
    }, e.prototype.walkAttributes = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.ATTRIBUTE) return r.call(n, i);
      });
    }, e.prototype.walkClasses = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.CLASS) return r.call(n, i);
      });
    }, e.prototype.walkCombinators = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.COMBINATOR) return r.call(n, i);
      });
    }, e.prototype.walkComments = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.COMMENT) return r.call(n, i);
      });
    }, e.prototype.walkIds = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.ID) return r.call(n, i);
      });
    }, e.prototype.walkNesting = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.NESTING) return r.call(n, i);
      });
    }, e.prototype.walkPseudos = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.PSEUDO) return r.call(n, i);
      });
    }, e.prototype.walkTags = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.TAG) return r.call(n, i);
      });
    }, e.prototype.walkUniversals = function(r) {
      var n = this;
      return this.walk(function(i) {
        if (i.type === Z.UNIVERSAL) return r.call(n, i);
      });
    }, e.prototype.split = function(r) {
      var n = this, i = [];
      return this.reduce(function(o, u, a) {
        var c = r.call(n, u);
        return i.push(u), c ? (o.push(i), i = []) : a === n.length - 1 && o.push(i), o;
      }, []);
    }, e.prototype.map = function(r) {
      return this.nodes.map(r);
    }, e.prototype.reduce = function(r, n) {
      return this.nodes.reduce(r, n);
    }, e.prototype.every = function(r) {
      return this.nodes.every(r);
    }, e.prototype.some = function(r) {
      return this.nodes.some(r);
    }, e.prototype.filter = function(r) {
      return this.nodes.filter(r);
    }, e.prototype.sort = function(r) {
      return this.nodes.sort(r);
    }, e.prototype.toString = function() {
      return this.map(String).join("");
    }, Ep(e, [{ key: "first", get: function() {
      return this.at(0);
    } }, { key: "last", get: function() {
      return this.at(this.length - 1);
    } }, { key: "length", get: function() {
      return this.nodes.length;
    } }]), e;
  }(Sp.default);
  or.default = Rp;
  ba.exports = or.default;
});
var Ea = g((ur, _a) => {
  ur.__esModule = true;
  var Ip = ar(), qp = Dp(Ip), Lp = B();
  function Dp(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Bp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Mp(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function Up(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var Fp = function(t) {
    Up(e, t);
    function e(s) {
      Bp(this, e);
      var r = Mp(this, t.call(this, s));
      return r.type = Lp.ROOT, r;
    }
    return e.prototype.toString = function() {
      var r = this.reduce(function(n, i) {
        var o = String(i);
        return o ? n + o + "," : "";
      }, "").slice(0, -1);
      return this.trailingComma ? r + "," : r;
    }, e;
  }(qp.default);
  ur.default = Fp;
  _a.exports = ur.default;
});
var Sa = g((lr, ka) => {
  lr.__esModule = true;
  var $p = ar(), Wp = Vp($p), Yp = B();
  function Vp(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function zp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Gp(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function jp(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var Hp = function(t) {
    jp(e, t);
    function e(s) {
      zp(this, e);
      var r = Gp(this, t.call(this, s));
      return r.type = Yp.SELECTOR, r;
    }
    return e;
  }(Wp.default);
  lr.default = Hp;
  ka.exports = lr.default;
});
var Ue = g((cr, Ta) => {
  cr.__esModule = true;
  var Kp = /* @__PURE__ */ function() {
    function t(e, s) {
      for (var r = 0; r < s.length; r++) {
        var n = s[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
      }
    }
    return function(e, s, r) {
      return s && t(e.prototype, s), r && t(e, r), e;
    };
  }(), Qp = we(), Jp = Xp(Qp);
  function Xp(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Zp(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function eh(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function th(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var rh = function(t) {
    th(e, t);
    function e() {
      return Zp(this, e), eh(this, t.apply(this, arguments));
    }
    return e.prototype.toString = function() {
      return [this.spaces.before, this.ns, String(this.value), this.spaces.after].join("");
    }, Kp(e, [{ key: "ns", get: function() {
      var r = this.namespace;
      return r ? (typeof r == "string" ? r : "") + "|" : "";
    } }]), e;
  }(Jp.default);
  cr.default = rh;
  Ta.exports = cr.default;
});
var Oa = g((fr, Ca) => {
  fr.__esModule = true;
  var sh = Ue(), nh = oh(sh), ih = B();
  function oh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function ah(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function uh(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function lh(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var ch = function(t) {
    lh(e, t);
    function e(s) {
      ah(this, e);
      var r = uh(this, t.call(this, s));
      return r.type = ih.CLASS, r;
    }
    return e.prototype.toString = function() {
      return [this.spaces.before, this.ns, "." + this.value, this.spaces.after].join("");
    }, e;
  }(nh.default);
  fr.default = ch;
  Ca.exports = fr.default;
});
var Na = g((pr, Aa) => {
  pr.__esModule = true;
  var fh = we(), ph = dh(fh), hh = B();
  function dh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function mh(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function yh(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function gh(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var wh = function(t) {
    gh(e, t);
    function e(s) {
      mh(this, e);
      var r = yh(this, t.call(this, s));
      return r.type = hh.COMMENT, r;
    }
    return e;
  }(ph.default);
  pr.default = wh;
  Aa.exports = pr.default;
});
var Ra = g((hr, Pa) => {
  hr.__esModule = true;
  var vh = Ue(), xh = _h(vh), bh = B();
  function _h(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Eh(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function kh(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function Sh(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var Th = function(t) {
    Sh(e, t);
    function e(s) {
      Eh(this, e);
      var r = kh(this, t.call(this, s));
      return r.type = bh.ID, r;
    }
    return e.prototype.toString = function() {
      return [this.spaces.before, this.ns, "#" + this.value, this.spaces.after].join("");
    }, e;
  }(xh.default);
  hr.default = Th;
  Pa.exports = hr.default;
});
var qa = g((dr, Ia) => {
  dr.__esModule = true;
  var Ch = Ue(), Oh = Nh(Ch), Ah = B();
  function Nh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Ph(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Rh(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function Ih(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var qh = function(t) {
    Ih(e, t);
    function e(s) {
      Ph(this, e);
      var r = Rh(this, t.call(this, s));
      return r.type = Ah.TAG, r;
    }
    return e;
  }(Oh.default);
  dr.default = qh;
  Ia.exports = dr.default;
});
var Da = g((mr, La) => {
  mr.__esModule = true;
  var Lh = we(), Dh = Mh(Lh), Bh = B();
  function Mh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Uh(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Fh(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function $h(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var Wh = function(t) {
    $h(e, t);
    function e(s) {
      Uh(this, e);
      var r = Fh(this, t.call(this, s));
      return r.type = Bh.STRING, r;
    }
    return e;
  }(Dh.default);
  mr.default = Wh;
  La.exports = mr.default;
});
var Ma = g((yr, Ba) => {
  yr.__esModule = true;
  var Yh = ar(), Vh = Gh(Yh), zh = B();
  function Gh(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function jh(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Hh(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function Kh(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var Qh = function(t) {
    Kh(e, t);
    function e(s) {
      jh(this, e);
      var r = Hh(this, t.call(this, s));
      return r.type = zh.PSEUDO, r;
    }
    return e.prototype.toString = function() {
      var r = this.length ? "(" + this.map(String).join(",") + ")" : "";
      return [this.spaces.before, String(this.value), r, this.spaces.after].join("");
    }, e;
  }(Vh.default);
  yr.default = Qh;
  Ba.exports = yr.default;
});
var Fa = g((gr, Ua) => {
  gr.__esModule = true;
  var Jh = Ue(), Xh = ed(Jh), Zh = B();
  function ed(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function td(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function rd(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function sd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var nd = function(t) {
    sd(e, t);
    function e(s) {
      td(this, e);
      var r = rd(this, t.call(this, s));
      return r.type = Zh.ATTRIBUTE, r.raws = {}, r;
    }
    return e.prototype.toString = function() {
      var r = [this.spaces.before, "[", this.ns, this.attribute];
      return this.operator && r.push(this.operator), this.value && r.push(this.value), this.raws.insensitive ? r.push(this.raws.insensitive) : this.insensitive && r.push(" i"), r.push("]"), r.concat(this.spaces.after).join("");
    }, e;
  }(Xh.default);
  gr.default = nd;
  Ua.exports = gr.default;
});
var Wa = g((wr, $a) => {
  wr.__esModule = true;
  var id = Ue(), od = ud(id), ad = B();
  function ud(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function ld(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function cd(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function fd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var pd = function(t) {
    fd(e, t);
    function e(s) {
      ld(this, e);
      var r = cd(this, t.call(this, s));
      return r.type = ad.UNIVERSAL, r.value = "*", r;
    }
    return e;
  }(od.default);
  wr.default = pd;
  $a.exports = wr.default;
});
var Va = g((vr, Ya) => {
  vr.__esModule = true;
  var hd = we(), dd = yd(hd), md = B();
  function yd(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function gd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function wd(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function vd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var xd = function(t) {
    vd(e, t);
    function e(s) {
      gd(this, e);
      var r = wd(this, t.call(this, s));
      return r.type = md.COMBINATOR, r;
    }
    return e;
  }(dd.default);
  vr.default = xd;
  Ya.exports = vr.default;
});
var Ga = g((xr, za) => {
  xr.__esModule = true;
  var bd = we(), _d = kd(bd), Ed = B();
  function kd(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Sd(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Td(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : t;
  }
  function Cd(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  var Od = function(t) {
    Cd(e, t);
    function e(s) {
      Sd(this, e);
      var r = Td(this, t.call(this, s));
      return r.type = Ed.NESTING, r.value = "&", r;
    }
    return e;
  }(_d.default);
  xr.default = Od;
  za.exports = xr.default;
});
var Ha = g((br, ja) => {
  br.__esModule = true;
  br.default = Ad;
  function Ad(t) {
    return t.sort(function(e, s) {
      return e - s;
    });
  }
  ja.exports = br.default;
});
var su = g((kr, ru) => {
  kr.__esModule = true;
  kr.default = Fd;
  var Ka = 39, Nd = 34, Us = 92, Qa = 47, St = 10, Fs = 32, $s = 12, Ws = 9, Ys = 13, Ja = 43, Xa = 62, Za = 126, eu = 124, Pd = 44, Rd = 40, Id = 41, qd = 91, Ld = 93, Dd = 59, tu = 42, Bd = 58, Md = 38, Ud = 64, _r = /[ \n\t\r\{\(\)'"\\;/]/g, Er = /[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
  function Fd(t) {
    for (var e = [], s = t.css.valueOf(), r = void 0, n = void 0, i = void 0, o = void 0, u = void 0, a = void 0, c = void 0, f = void 0, p = void 0, l = void 0, y = void 0, x = s.length, h = -1, d = 1, m = 0, b = function(v, N) {
      if (t.safe) s += N, n = s.length - 1;
      else throw t.error("Unclosed " + v, d, m - h, m);
    }; m < x; ) {
      switch (r = s.charCodeAt(m), r === St && (h = m, d += 1), r) {
        case St:
        case Fs:
        case Ws:
        case Ys:
        case $s:
          n = m;
          do
            n += 1, r = s.charCodeAt(n), r === St && (h = n, d += 1);
          while (r === Fs || r === St || r === Ws || r === Ys || r === $s);
          e.push(["space", s.slice(m, n), d, m - h, m]), m = n - 1;
          break;
        case Ja:
        case Xa:
        case Za:
        case eu:
          n = m;
          do
            n += 1, r = s.charCodeAt(n);
          while (r === Ja || r === Xa || r === Za || r === eu);
          e.push(["combinator", s.slice(m, n), d, m - h, m]), m = n - 1;
          break;
        case tu:
          e.push(["*", "*", d, m - h, m]);
          break;
        case Md:
          e.push(["&", "&", d, m - h, m]);
          break;
        case Pd:
          e.push([",", ",", d, m - h, m]);
          break;
        case qd:
          e.push(["[", "[", d, m - h, m]);
          break;
        case Ld:
          e.push(["]", "]", d, m - h, m]);
          break;
        case Bd:
          e.push([":", ":", d, m - h, m]);
          break;
        case Dd:
          e.push([";", ";", d, m - h, m]);
          break;
        case Rd:
          e.push(["(", "(", d, m - h, m]);
          break;
        case Id:
          e.push([")", ")", d, m - h, m]);
          break;
        case Ka:
        case Nd:
          i = r === Ka ? "'" : '"', n = m;
          do
            for (l = false, n = s.indexOf(i, n + 1), n === -1 && b("quote", i), y = n; s.charCodeAt(y - 1) === Us; ) y -= 1, l = !l;
          while (l);
          e.push(["string", s.slice(m, n + 1), d, m - h, d, n - h, m]), m = n;
          break;
        case Ud:
          _r.lastIndex = m + 1, _r.test(s), _r.lastIndex === 0 ? n = s.length - 1 : n = _r.lastIndex - 2, e.push(["at-word", s.slice(m, n + 1), d, m - h, d, n - h, m]), m = n;
          break;
        case Us:
          for (n = m, c = true; s.charCodeAt(n + 1) === Us; ) n += 1, c = !c;
          r = s.charCodeAt(n + 1), c && r !== Qa && r !== Fs && r !== St && r !== Ws && r !== Ys && r !== $s && (n += 1), e.push(["word", s.slice(m, n + 1), d, m - h, d, n - h, m]), m = n;
          break;
        default:
          r === Qa && s.charCodeAt(m + 1) === tu ? (n = s.indexOf("*/", m + 2) + 1, n === 0 && b("comment", "*/"), a = s.slice(m, n + 1), o = a.split(`
`), u = o.length - 1, u > 0 ? (f = d + u, p = n - o[u].length) : (f = d, p = h), e.push(["comment", a, d, m - h, f, n - p, m]), h = p, d = f, m = n) : (Er.lastIndex = m + 1, Er.test(s), Er.lastIndex === 0 ? n = s.length - 1 : n = Er.lastIndex - 2, e.push(["word", s.slice(m, n + 1), d, m - h, d, n - h, m]), m = n);
          break;
      }
      m++;
    }
    return e;
  }
  ru.exports = kr.default;
});
var ou = g((Sr, iu) => {
  Sr.__esModule = true;
  var $d = /* @__PURE__ */ function() {
    function t(e, s) {
      for (var r = 0; r < s.length; r++) {
        var n = s[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
      }
    }
    return function(e, s, r) {
      return s && t(e.prototype, s), r && t(e, r), e;
    };
  }(), Wd = Ds(), Yd = I(Wd), Vd = Bs(), Vs = I(Vd), zd = Ms(), Gd = I(zd), jd = Ea(), Hd = I(jd), Kd = Sa(), zs = I(Kd), Qd = Oa(), Jd = I(Qd), Xd = Na(), Zd = I(Xd), em = Ra(), tm = I(em), rm = qa(), sm = I(rm), nm = Da(), im = I(nm), om = Ma(), am = I(om), um = Fa(), lm = I(um), cm = Wa(), fm = I(cm), pm = Va(), hm = I(pm), dm = Ga(), mm = I(dm), ym = Ha(), gm = I(ym), wm = su(), nu = I(wm), vm = B(), xm = bm(vm);
  function bm(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (t != null) for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e.default = t, e;
  }
  function I(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function _m(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var Em = function() {
    function t(e) {
      _m(this, t), this.input = e, this.lossy = e.options.lossless === false, this.position = 0, this.root = new Hd.default();
      var s = new zs.default();
      return this.root.append(s), this.current = s, this.lossy ? this.tokens = (0, nu.default)({ safe: e.safe, css: e.css.trim() }) : this.tokens = (0, nu.default)(e), this.loop();
    }
    return t.prototype.attribute = function() {
      var s = "", r = void 0, n = this.currToken;
      for (this.position++; this.position < this.tokens.length && this.currToken[0] !== "]"; ) s += this.tokens[this.position][1], this.position++;
      this.position === this.tokens.length && !~s.indexOf("]") && this.error("Expected a closing square bracket.");
      var i = s.split(/((?:[*~^$|]?=))([^]*)/), o = i[0].split(/(\|)/g), u = { operator: i[1], value: i[2], source: { start: { line: n[2], column: n[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: n[4] };
      if (o.length > 1 ? (o[0] === "" && (o[0] = true), u.attribute = this.parseValue(o[2]), u.namespace = this.parseNamespace(o[0])) : u.attribute = this.parseValue(i[0]), r = new lm.default(u), i[2]) {
        var a = i[2].split(/(\s+i\s*?)$/), c = a[0].trim();
        r.value = this.lossy ? c : a[0], a[1] && (r.insensitive = true, this.lossy || (r.raws.insensitive = a[1])), r.quoted = c[0] === "'" || c[0] === '"', r.raws.unquoted = r.quoted ? c.slice(1, -1) : c;
      }
      this.newNode(r), this.position++;
    }, t.prototype.combinator = function() {
      if (this.currToken[1] === "|") return this.namespace();
      for (var s = new hm.default({ value: "", source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] }); this.position < this.tokens.length && this.currToken && (this.currToken[0] === "space" || this.currToken[0] === "combinator"); ) this.nextToken && this.nextToken[0] === "combinator" ? (s.spaces.before = this.parseSpace(this.currToken[1]), s.source.start.line = this.nextToken[2], s.source.start.column = this.nextToken[3], s.source.end.column = this.nextToken[3], s.source.end.line = this.nextToken[2], s.sourceIndex = this.nextToken[4]) : this.prevToken && this.prevToken[0] === "combinator" ? s.spaces.after = this.parseSpace(this.currToken[1]) : this.currToken[0] === "combinator" ? s.value = this.currToken[1] : this.currToken[0] === "space" && (s.value = this.parseSpace(this.currToken[1], " ")), this.position++;
      return this.newNode(s);
    }, t.prototype.comma = function() {
      if (this.position === this.tokens.length - 1) {
        this.root.trailingComma = true, this.position++;
        return;
      }
      var s = new zs.default();
      this.current.parent.append(s), this.current = s, this.position++;
    }, t.prototype.comment = function() {
      var s = new Zd.default({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] });
      this.newNode(s), this.position++;
    }, t.prototype.error = function(s) {
      throw new this.input.error(s);
    }, t.prototype.missingBackslash = function() {
      return this.error("Expected a backslash preceding the semicolon.");
    }, t.prototype.missingParenthesis = function() {
      return this.error("Expected opening parenthesis.");
    }, t.prototype.missingSquareBracket = function() {
      return this.error("Expected opening square bracket.");
    }, t.prototype.namespace = function() {
      var s = this.prevToken && this.prevToken[1] || true;
      if (this.nextToken[0] === "word") return this.position++, this.word(s);
      if (this.nextToken[0] === "*") return this.position++, this.universal(s);
    }, t.prototype.nesting = function() {
      this.newNode(new mm.default({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] })), this.position++;
    }, t.prototype.parentheses = function() {
      var s = this.current.last;
      if (s && s.type === xm.PSEUDO) {
        var r = new zs.default(), n = this.current;
        s.append(r), this.current = r;
        var i = 1;
        for (this.position++; this.position < this.tokens.length && i; ) this.currToken[0] === "(" && i++, this.currToken[0] === ")" && i--, i ? this.parse() : (r.parent.source.end.line = this.currToken[2], r.parent.source.end.column = this.currToken[3], this.position++);
        i && this.error("Expected closing parenthesis."), this.current = n;
      } else {
        var o = 1;
        for (this.position++, s.value += "("; this.position < this.tokens.length && o; ) this.currToken[0] === "(" && o++, this.currToken[0] === ")" && o--, s.value += this.parseParenthesisToken(this.currToken), this.position++;
        o && this.error("Expected closing parenthesis.");
      }
    }, t.prototype.pseudo = function() {
      for (var s = this, r = "", n = this.currToken; this.currToken && this.currToken[0] === ":"; ) r += this.currToken[1], this.position++;
      if (!this.currToken) return this.error("Expected pseudo-class or pseudo-element");
      if (this.currToken[0] === "word") {
        var i = void 0;
        this.splitWord(false, function(o, u) {
          r += o, i = new am.default({ value: r, source: { start: { line: n[2], column: n[3] }, end: { line: s.currToken[4], column: s.currToken[5] } }, sourceIndex: n[4] }), s.newNode(i), u > 1 && s.nextToken && s.nextToken[0] === "(" && s.error("Misplaced parenthesis.");
        });
      } else this.error('Unexpected "' + this.currToken[0] + '" found.');
    }, t.prototype.space = function() {
      var s = this.currToken;
      this.position === 0 || this.prevToken[0] === "," || this.prevToken[0] === "(" ? (this.spaces = this.parseSpace(s[1]), this.position++) : this.position === this.tokens.length - 1 || this.nextToken[0] === "," || this.nextToken[0] === ")" ? (this.current.last.spaces.after = this.parseSpace(s[1]), this.position++) : this.combinator();
    }, t.prototype.string = function() {
      var s = this.currToken;
      this.newNode(new im.default({ value: this.currToken[1], source: { start: { line: s[2], column: s[3] }, end: { line: s[4], column: s[5] } }, sourceIndex: s[6] })), this.position++;
    }, t.prototype.universal = function(s) {
      var r = this.nextToken;
      if (r && r[1] === "|") return this.position++, this.namespace();
      this.newNode(new fm.default({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] }), s), this.position++;
    }, t.prototype.splitWord = function(s, r) {
      for (var n = this, i = this.nextToken, o = this.currToken[1]; i && i[0] === "word"; ) {
        this.position++;
        var u = this.currToken[1];
        if (o += u, u.lastIndexOf("\\") === u.length - 1) {
          var a = this.nextToken;
          a && a[0] === "space" && (o += this.parseSpace(a[1], " "), this.position++);
        }
        i = this.nextToken;
      }
      var c = (0, Vs.default)(o, "."), f = (0, Vs.default)(o, "#"), p = (0, Vs.default)(o, "#{");
      p.length && (f = f.filter(function(y) {
        return !~p.indexOf(y);
      }));
      var l = (0, gm.default)((0, Gd.default)((0, Yd.default)([[0], c, f])));
      l.forEach(function(y, x) {
        var h = l[x + 1] || o.length, d = o.slice(y, h);
        if (x === 0 && r) return r.call(n, d, l.length);
        var m = void 0;
        ~c.indexOf(y) ? m = new Jd.default({ value: d.slice(1), source: { start: { line: n.currToken[2], column: n.currToken[3] + y }, end: { line: n.currToken[4], column: n.currToken[3] + (h - 1) } }, sourceIndex: n.currToken[6] + l[x] }) : ~f.indexOf(y) ? m = new tm.default({ value: d.slice(1), source: { start: { line: n.currToken[2], column: n.currToken[3] + y }, end: { line: n.currToken[4], column: n.currToken[3] + (h - 1) } }, sourceIndex: n.currToken[6] + l[x] }) : m = new sm.default({ value: d, source: { start: { line: n.currToken[2], column: n.currToken[3] + y }, end: { line: n.currToken[4], column: n.currToken[3] + (h - 1) } }, sourceIndex: n.currToken[6] + l[x] }), n.newNode(m, s);
      }), this.position++;
    }, t.prototype.word = function(s) {
      var r = this.nextToken;
      return r && r[1] === "|" ? (this.position++, this.namespace()) : this.splitWord(s);
    }, t.prototype.loop = function() {
      for (; this.position < this.tokens.length; ) this.parse(true);
      return this.root;
    }, t.prototype.parse = function(s) {
      switch (this.currToken[0]) {
        case "space":
          this.space();
          break;
        case "comment":
          this.comment();
          break;
        case "(":
          this.parentheses();
          break;
        case ")":
          s && this.missingParenthesis();
          break;
        case "[":
          this.attribute();
          break;
        case "]":
          this.missingSquareBracket();
          break;
        case "at-word":
        case "word":
          this.word();
          break;
        case ":":
          this.pseudo();
          break;
        case ";":
          this.missingBackslash();
          break;
        case ",":
          this.comma();
          break;
        case "*":
          this.universal();
          break;
        case "&":
          this.nesting();
          break;
        case "combinator":
          this.combinator();
          break;
        case "string":
          this.string();
          break;
      }
    }, t.prototype.parseNamespace = function(s) {
      if (this.lossy && typeof s == "string") {
        var r = s.trim();
        return r.length ? r : true;
      }
      return s;
    }, t.prototype.parseSpace = function(s, r) {
      return this.lossy ? r || "" : s;
    }, t.prototype.parseValue = function(s) {
      return this.lossy && s && typeof s == "string" ? s.trim() : s;
    }, t.prototype.parseParenthesisToken = function(s) {
      return this.lossy ? s[0] === "space" ? this.parseSpace(s[1], " ") : this.parseValue(s[1]) : s[1];
    }, t.prototype.newNode = function(s, r) {
      return r && (s.namespace = this.parseNamespace(r)), this.spaces && (s.spaces.before = this.spaces, this.spaces = ""), this.current.append(s);
    }, $d(t, [{ key: "currToken", get: function() {
      return this.tokens[this.position];
    } }, { key: "nextToken", get: function() {
      return this.tokens[this.position + 1];
    } }, { key: "prevToken", get: function() {
      return this.tokens[this.position - 1];
    } }]), t;
  }();
  Sr.default = Em;
  iu.exports = Sr.default;
});
var uu = g((Tr, au) => {
  Tr.__esModule = true;
  var km = /* @__PURE__ */ function() {
    function t(e, s) {
      for (var r = 0; r < s.length; r++) {
        var n = s[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
      }
    }
    return function(e, s, r) {
      return s && t(e.prototype, s), r && t(e, r), e;
    };
  }(), Sm = ou(), Tm = Cm(Sm);
  function Cm(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function Om(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var Am = function() {
    function t(e) {
      return Om(this, t), this.func = e || function() {
      }, this;
    }
    return t.prototype.process = function(s) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = new Tm.default({ css: s, error: function(o) {
        throw new Error(o);
      }, options: r });
      return this.res = n, this.func(n), this;
    }, km(t, [{ key: "result", get: function() {
      return String(this.res);
    } }]), t;
  }();
  Tr.default = Am;
  au.exports = Tr.default;
});
var G = g((Vx, cu) => {
  var Gs = function(t, e) {
    let s = new t.constructor();
    for (let r in t) {
      if (!t.hasOwnProperty(r)) continue;
      let n = t[r], i = typeof n;
      r === "parent" && i === "object" ? e && (s[r] = e) : r === "source" ? s[r] = n : n instanceof Array ? s[r] = n.map((o) => Gs(o, s)) : r !== "before" && r !== "after" && r !== "between" && r !== "semicolon" && (i === "object" && n !== null && (n = Gs(n)), s[r] = n);
    }
    return s;
  };
  cu.exports = class {
    constructor(e) {
      e = e || {}, this.raws = { before: "", after: "" };
      for (let s in e) this[s] = e[s];
    }
    remove() {
      return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
    }
    toString() {
      return [this.raws.before, String(this.value), this.raws.after].join("");
    }
    clone(e) {
      e = e || {};
      let s = Gs(this);
      for (let r in e) s[r] = e[r];
      return s;
    }
    cloneBefore(e) {
      e = e || {};
      let s = this.clone(e);
      return this.parent.insertBefore(this, s), s;
    }
    cloneAfter(e) {
      e = e || {};
      let s = this.clone(e);
      return this.parent.insertAfter(this, s), s;
    }
    replaceWith() {
      let e = Array.prototype.slice.call(arguments);
      if (this.parent) {
        for (let s of e) this.parent.insertBefore(this, s);
        this.remove();
      }
      return this;
    }
    moveTo(e) {
      return this.cleanRaws(this.root() === e.root()), this.remove(), e.append(this), this;
    }
    moveBefore(e) {
      return this.cleanRaws(this.root() === e.root()), this.remove(), e.parent.insertBefore(e, this), this;
    }
    moveAfter(e) {
      return this.cleanRaws(this.root() === e.root()), this.remove(), e.parent.insertAfter(e, this), this;
    }
    next() {
      let e = this.parent.index(this);
      return this.parent.nodes[e + 1];
    }
    prev() {
      let e = this.parent.index(this);
      return this.parent.nodes[e - 1];
    }
    toJSON() {
      let e = {};
      for (let s in this) {
        if (!this.hasOwnProperty(s) || s === "parent") continue;
        let r = this[s];
        r instanceof Array ? e[s] = r.map((n) => typeof n == "object" && n.toJSON ? n.toJSON() : n) : typeof r == "object" && r.toJSON ? e[s] = r.toJSON() : e[s] = r;
      }
      return e;
    }
    root() {
      let e = this;
      for (; e.parent; ) e = e.parent;
      return e;
    }
    cleanRaws(e) {
      delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
    }
    positionInside(e) {
      let s = this.toString(), r = this.source.start.column, n = this.source.start.line;
      for (let i = 0; i < e; i++) s[i] === `
` ? (r = 1, n += 1) : r += 1;
      return { line: n, column: r };
    }
    positionBy(e) {
      let s = this.source.start;
      if (Object(e).index) s = this.positionInside(e.index);
      else if (Object(e).word) {
        let r = this.toString().indexOf(e.word);
        r !== -1 && (s = this.positionInside(r));
      }
      return s;
    }
  };
});
var U = g((zx, fu) => {
  var Pm = G(), Fe = class extends Pm {
    constructor(e) {
      super(e), this.nodes || (this.nodes = []);
    }
    push(e) {
      return e.parent = this, this.nodes.push(e), this;
    }
    each(e) {
      this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
      let s = this.lastEach, r, n;
      if (this.indexes[s] = 0, !!this.nodes) {
        for (; this.indexes[s] < this.nodes.length && (r = this.indexes[s], n = e(this.nodes[r], r), n !== false); ) this.indexes[s] += 1;
        return delete this.indexes[s], n;
      }
    }
    walk(e) {
      return this.each((s, r) => {
        let n = e(s, r);
        return n !== false && s.walk && (n = s.walk(e)), n;
      });
    }
    walkType(e, s) {
      if (!e || !s) throw new Error("Parameters {type} and {callback} are required.");
      let r = typeof e == "function";
      return this.walk((n, i) => {
        if (r && n instanceof e || !r && n.type === e) return s.call(this, n, i);
      });
    }
    append(e) {
      return e.parent = this, this.nodes.push(e), this;
    }
    prepend(e) {
      return e.parent = this, this.nodes.unshift(e), this;
    }
    cleanRaws(e) {
      if (super.cleanRaws(e), this.nodes) for (let s of this.nodes) s.cleanRaws(e);
    }
    insertAfter(e, s) {
      let r = this.index(e), n;
      this.nodes.splice(r + 1, 0, s);
      for (let i in this.indexes) n = this.indexes[i], r <= n && (this.indexes[i] = n + this.nodes.length);
      return this;
    }
    insertBefore(e, s) {
      let r = this.index(e), n;
      this.nodes.splice(r, 0, s);
      for (let i in this.indexes) n = this.indexes[i], r <= n && (this.indexes[i] = n + this.nodes.length);
      return this;
    }
    removeChild(e) {
      e = this.index(e), this.nodes[e].parent = void 0, this.nodes.splice(e, 1);
      let s;
      for (let r in this.indexes) s = this.indexes[r], s >= e && (this.indexes[r] = s - 1);
      return this;
    }
    removeAll() {
      for (let e of this.nodes) e.parent = void 0;
      return this.nodes = [], this;
    }
    every(e) {
      return this.nodes.every(e);
    }
    some(e) {
      return this.nodes.some(e);
    }
    index(e) {
      return typeof e == "number" ? e : this.nodes.indexOf(e);
    }
    get first() {
      if (this.nodes) return this.nodes[0];
    }
    get last() {
      if (this.nodes) return this.nodes[this.nodes.length - 1];
    }
    toString() {
      let e = this.nodes.map(String).join("");
      return this.value && (e = this.value + e), this.raws.before && (e = this.raws.before + e), this.raws.after && (e += this.raws.after), e;
    }
  };
  Fe.registerWalker = (t) => {
    let e = "walk" + t.name;
    e.lastIndexOf("s") !== e.length - 1 && (e += "s"), !Fe.prototype[e] && (Fe.prototype[e] = function(s) {
      return this.walkType(t, s);
    });
  };
  fu.exports = Fe;
});
var hu = g((jx, pu) => {
  var Rm = U();
  pu.exports = class extends Rm {
    constructor(e) {
      super(e), this.type = "root";
    }
  };
});
var mu = g((Kx, du) => {
  var Im = U();
  du.exports = class extends Im {
    constructor(e) {
      super(e), this.type = "value", this.unbalanced = 0;
    }
  };
});
var wu = g((Qx, gu) => {
  var yu = U(), Cr = class extends yu {
    constructor(e) {
      super(e), this.type = "atword";
    }
    toString() {
      this.quoted ? this.raws.quote : "";
      return [this.raws.before, "@", String.prototype.toString.call(this.value), this.raws.after].join("");
    }
  };
  yu.registerWalker(Cr);
  gu.exports = Cr;
});
var xu = g((Jx, vu) => {
  var qm = U(), Lm = G(), Or = class extends Lm {
    constructor(e) {
      super(e), this.type = "colon";
    }
  };
  qm.registerWalker(Or);
  vu.exports = Or;
});
var _u = g((Xx, bu) => {
  var Dm = U(), Bm = G(), Ar = class extends Bm {
    constructor(e) {
      super(e), this.type = "comma";
    }
  };
  Dm.registerWalker(Ar);
  bu.exports = Ar;
});
var ku = g((Zx, Eu) => {
  var Mm = U(), Um = G(), Nr = class extends Um {
    constructor(e) {
      super(e), this.type = "comment", this.inline = Object(e).inline || false;
    }
    toString() {
      return [this.raws.before, this.inline ? "//" : "/*", String(this.value), this.inline ? "" : "*/", this.raws.after].join("");
    }
  };
  Mm.registerWalker(Nr);
  Eu.exports = Nr;
});
var Cu = g((eb, Tu) => {
  var Su = U(), Pr = class extends Su {
    constructor(e) {
      super(e), this.type = "func", this.unbalanced = -1;
    }
  };
  Su.registerWalker(Pr);
  Tu.exports = Pr;
});
var Au = g((tb, Ou) => {
  var Fm = U(), $m = G(), Rr = class extends $m {
    constructor(e) {
      super(e), this.type = "number", this.unit = Object(e).unit || "";
    }
    toString() {
      return [this.raws.before, String(this.value), this.unit, this.raws.after].join("");
    }
  };
  Fm.registerWalker(Rr);
  Ou.exports = Rr;
});
var Pu = g((rb, Nu) => {
  var Wm = U(), Ym = G(), Ir = class extends Ym {
    constructor(e) {
      super(e), this.type = "operator";
    }
  };
  Wm.registerWalker(Ir);
  Nu.exports = Ir;
});
var Iu = g((sb, Ru) => {
  var Vm = U(), zm = G(), qr = class extends zm {
    constructor(e) {
      super(e), this.type = "paren", this.parenType = "";
    }
  };
  Vm.registerWalker(qr);
  Ru.exports = qr;
});
var Lu = g((nb, qu) => {
  var Gm = U(), jm = G(), Lr = class extends jm {
    constructor(e) {
      super(e), this.type = "string";
    }
    toString() {
      let e = this.quoted ? this.raws.quote : "";
      return [this.raws.before, e, this.value + "", e, this.raws.after].join("");
    }
  };
  Gm.registerWalker(Lr);
  qu.exports = Lr;
});
var Bu = g((ib, Du) => {
  var Hm = U(), Km = G(), Dr = class extends Km {
    constructor(e) {
      super(e), this.type = "word";
    }
  };
  Hm.registerWalker(Dr);
  Du.exports = Dr;
});
var Uu = g((ob, Mu) => {
  var Qm = U(), Jm = G(), Br = class extends Jm {
    constructor(e) {
      super(e), this.type = "unicode-range";
    }
  };
  Qm.registerWalker(Br);
  Mu.exports = Br;
});
var $u = g((ab, Fu) => {
  var js = class extends Error {
    constructor(e) {
      super(e), this.name = this.constructor.name, this.message = e || "An error ocurred while tokzenizing.", typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack;
    }
  };
  Fu.exports = js;
});
var Vu = g((ub, Yu) => {
  var Mr = /[ \n\t\r\{\(\)'"\\;,/]/g, Xm = /[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g, $e = /[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g, Zm = /^[a-z0-9]/i, ey = /^[a-f0-9?\-]/i, Wu = $u();
  Yu.exports = function(e, s) {
    s = s || {};
    let r = [], n = e.valueOf(), i = n.length, o = -1, u = 1, a = 0, c = 0, f = null, p, l, y, x, h, d, b, w, v, N, F;
    function Q(T) {
      let C = `Unclosed ${T} at line: ${u}, column: ${a - o}, token: ${a}`;
      throw new Wu(C);
    }
    for (; a < i; ) {
      switch (p = n.charCodeAt(a), p === 10 && (o = a, u += 1), p) {
        case 10:
        case 32:
        case 9:
        case 13:
        case 12:
          l = a;
          do
            l += 1, p = n.charCodeAt(l), p === 10 && (o = l, u += 1);
          while (p === 32 || p === 10 || p === 9 || p === 13 || p === 12);
          r.push(["space", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
          break;
        case 58:
          l = a + 1, r.push(["colon", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
          break;
        case 44:
          l = a + 1, r.push(["comma", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
          break;
        case 123:
          r.push(["{", "{", u, a - o, u, l - o, a]);
          break;
        case 125:
          r.push(["}", "}", u, a - o, u, l - o, a]);
          break;
        case 40:
          c++, f = !f && c === 1 && r.length > 0 && r[r.length - 1][0] === "word" && r[r.length - 1][1] === "url", r.push(["(", "(", u, a - o, u, l - o, a]);
          break;
        case 41:
          c--, f = f && c > 0, r.push([")", ")", u, a - o, u, l - o, a]);
          break;
        case 39:
        case 34:
          y = p === 39 ? "'" : '"', l = a;
          do
            for (v = false, l = n.indexOf(y, l + 1), l === -1 && Q("quote"), N = l; n.charCodeAt(N - 1) === 92; ) N -= 1, v = !v;
          while (v);
          r.push(["string", n.slice(a, l + 1), u, a - o, u, l - o, a]), a = l;
          break;
        case 64:
          Mr.lastIndex = a + 1, Mr.test(n), Mr.lastIndex === 0 ? l = n.length - 1 : l = Mr.lastIndex - 2, r.push(["atword", n.slice(a, l + 1), u, a - o, u, l - o, a]), a = l;
          break;
        case 92:
          l = a, p = n.charCodeAt(l + 1), r.push(["word", n.slice(a, l + 1), u, a - o, u, l - o, a]), a = l;
          break;
        case 43:
        case 45:
        case 42:
          l = a + 1, F = n.slice(a + 1, l + 1);
          n.slice(a - 1, a);
          if (p === 45 && F.charCodeAt(0) === 45) {
            l++, r.push(["word", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
            break;
          }
          r.push(["operator", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
          break;
        default:
          if (p === 47 && (n.charCodeAt(a + 1) === 42 || s.loose && !f && n.charCodeAt(a + 1) === 47)) {
            if (n.charCodeAt(a + 1) === 42) l = n.indexOf("*/", a + 2) + 1, l === 0 && Q("comment");
            else {
              let O = n.indexOf(`
`, a + 2);
              l = O !== -1 ? O - 1 : i;
            }
            d = n.slice(a, l + 1), x = d.split(`
`), h = x.length - 1, h > 0 ? (b = u + h, w = l - x[h].length) : (b = u, w = o), r.push(["comment", d, u, a - o, b, l - w, a]), o = w, u = b, a = l;
          } else if (p === 35 && !Zm.test(n.slice(a + 1, a + 2))) l = a + 1, r.push(["#", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
          else if ((p === 117 || p === 85) && n.charCodeAt(a + 1) === 43) {
            l = a + 2;
            do
              l += 1, p = n.charCodeAt(l);
            while (l < i && ey.test(n.slice(l, l + 1)));
            r.push(["unicoderange", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
          } else if (p === 47) l = a + 1, r.push(["operator", n.slice(a, l), u, a - o, u, l - o, a]), a = l - 1;
          else {
            let C = Xm;
            if (p >= 48 && p <= 57 && (C = $e), C.lastIndex = a + 1, C.test(n), C.lastIndex === 0 ? l = n.length - 1 : l = C.lastIndex - 2, C === $e || p === 46) {
              let O = n.charCodeAt(l), ve = n.charCodeAt(l + 1), Zs = n.charCodeAt(l + 2);
              (O === 101 || O === 69) && (ve === 45 || ve === 43) && Zs >= 48 && Zs <= 57 && ($e.lastIndex = l + 2, $e.test(n), $e.lastIndex === 0 ? l = n.length - 1 : l = $e.lastIndex - 2);
            }
            r.push(["word", n.slice(a, l + 1), u, a - o, u, l - o, a]), a = l;
          }
          break;
      }
      a++;
    }
    return r;
  };
});
var Gu = g((lb, zu) => {
  var Hs = class extends Error {
    constructor(e) {
      super(e), this.name = this.constructor.name, this.message = e || "An error ocurred while parsing.", typeof Error.captureStackTrace == "function" ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack;
    }
  };
  zu.exports = Hs;
});
var Qu = g((fb, Ku) => {
  var ty = hu(), ry = mu(), sy = wu(), ny = xu(), iy = _u(), oy = ku(), ay = Cu(), uy = Au(), ly = Pu(), ju = Iu(), cy = Lu(), Hu = Bu(), fy = Uu(), py = Vu(), hy = Ds(), dy = Bs(), my = Ms(), yy = Gu();
  function gy(t) {
    return t.sort((e, s) => e - s);
  }
  Ku.exports = class {
    constructor(e, s) {
      let r = { loose: false };
      this.cache = [], this.input = e, this.options = Object.assign({}, r, s), this.position = 0, this.unbalanced = 0, this.root = new ty();
      let n = new ry();
      this.root.append(n), this.current = n, this.tokens = py(e, this.options);
    }
    parse() {
      return this.loop();
    }
    colon() {
      let e = this.currToken;
      this.newNode(new ny({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++;
    }
    comma() {
      let e = this.currToken;
      this.newNode(new iy({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++;
    }
    comment() {
      let e = false, s = this.currToken[1].replace(/\/\*|\*\//g, ""), r;
      this.options.loose && s.startsWith("//") && (s = s.substring(2), e = true), r = new oy({ value: s, inline: e, source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] }), this.newNode(r), this.position++;
    }
    error(e, s) {
      throw new yy(e + ` at line: ${s[2]}, column ${s[3]}`);
    }
    loop() {
      for (; this.position < this.tokens.length; ) this.parseTokens();
      return !this.current.last && this.spaces ? this.current.raws.before += this.spaces : this.spaces && (this.current.last.raws.after += this.spaces), this.spaces = "", this.root;
    }
    operator() {
      let e = this.currToken[1], s;
      if (e === "+" || e === "-") {
        if (this.options.loose || this.position > 0 && (this.current.type === "func" && this.current.value === "calc" ? this.prevToken[0] !== "space" && this.prevToken[0] !== "(" ? this.error("Syntax Error", this.currToken) : this.nextToken[0] !== "space" && this.nextToken[0] !== "word" ? this.error("Syntax Error", this.currToken) : this.nextToken[0] === "word" && this.current.last.type !== "operator" && this.current.last.value !== "(" && this.error("Syntax Error", this.currToken) : (this.nextToken[0] === "space" || this.nextToken[0] === "operator" || this.prevToken[0] === "operator") && this.error("Syntax Error", this.currToken)), this.options.loose) {
          if ((!this.current.nodes.length || this.current.last && this.current.last.type === "operator") && this.nextToken[0] === "word") return this.word();
        } else if (this.nextToken[0] === "word") return this.word();
      }
      return s = new ly({ value: this.currToken[1], source: { start: { line: this.currToken[2], column: this.currToken[3] }, end: { line: this.currToken[2], column: this.currToken[3] } }, sourceIndex: this.currToken[4] }), this.position++, this.newNode(s);
    }
    parseTokens() {
      switch (this.currToken[0]) {
        case "space":
          this.space();
          break;
        case "colon":
          this.colon();
          break;
        case "comma":
          this.comma();
          break;
        case "comment":
          this.comment();
          break;
        case "(":
          this.parenOpen();
          break;
        case ")":
          this.parenClose();
          break;
        case "atword":
        case "word":
          this.word();
          break;
        case "operator":
          this.operator();
          break;
        case "string":
          this.string();
          break;
        case "unicoderange":
          this.unicodeRange();
          break;
        default:
          this.word();
          break;
      }
    }
    parenOpen() {
      let e = 1, s = this.position + 1, r = this.currToken, n;
      for (; s < this.tokens.length && e; ) {
        let i = this.tokens[s];
        i[0] === "(" && e++, i[0] === ")" && e--, s++;
      }
      if (e && this.error("Expected closing parenthesis", r), n = this.current.last, n && n.type === "func" && n.unbalanced < 0 && (n.unbalanced = 0, this.current = n), this.current.unbalanced++, this.newNode(new ju({ value: r[1], source: { start: { line: r[2], column: r[3] }, end: { line: r[4], column: r[5] } }, sourceIndex: r[6] })), this.position++, this.current.type === "func" && this.current.unbalanced && this.current.value === "url" && this.currToken[0] !== "string" && this.currToken[0] !== ")" && !this.options.loose) {
        let i = this.nextToken, o = this.currToken[1], u = { line: this.currToken[2], column: this.currToken[3] };
        for (; i && i[0] !== ")" && this.current.unbalanced; ) this.position++, o += this.currToken[1], i = this.nextToken;
        this.position !== this.tokens.length - 1 && (this.position++, this.newNode(new Hu({ value: o, source: { start: u, end: { line: this.currToken[4], column: this.currToken[5] } }, sourceIndex: this.currToken[6] })));
      }
    }
    parenClose() {
      let e = this.currToken;
      this.newNode(new ju({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++, !(this.position >= this.tokens.length - 1 && !this.current.unbalanced) && (this.current.unbalanced--, this.current.unbalanced < 0 && this.error("Expected opening parenthesis", e), !this.current.unbalanced && this.cache.length && (this.current = this.cache.pop()));
    }
    space() {
      let e = this.currToken;
      this.position === this.tokens.length - 1 || this.nextToken[0] === "," || this.nextToken[0] === ")" ? (this.current.last.raws.after += e[1], this.position++) : (this.spaces = e[1], this.position++);
    }
    unicodeRange() {
      let e = this.currToken;
      this.newNode(new fy({ value: e[1], source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6] })), this.position++;
    }
    splitWord() {
      let e = this.nextToken, s = this.currToken[1], r = /^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/, n = /^(?!\#([a-z0-9]+))[\#\{\}]/gi, i, o;
      if (!n.test(s)) for (; e && e[0] === "word"; ) {
        this.position++;
        let u = this.currToken[1];
        s += u, e = this.nextToken;
      }
      i = dy(s, "@"), o = gy(my(hy([[0], i]))), o.forEach((u, a) => {
        let c = o[a + 1] || s.length, f = s.slice(u, c), p;
        if (~i.indexOf(u)) p = new sy({ value: f.slice(1), source: { start: { line: this.currToken[2], column: this.currToken[3] + u }, end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) } }, sourceIndex: this.currToken[6] + o[a] });
        else if (r.test(this.currToken[1])) {
          let l = f.replace(r, "");
          p = new uy({ value: f.replace(l, ""), source: { start: { line: this.currToken[2], column: this.currToken[3] + u }, end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) } }, sourceIndex: this.currToken[6] + o[a], unit: l });
        } else p = new (e && e[0] === "(" ? ay : Hu)({ value: f, source: { start: { line: this.currToken[2], column: this.currToken[3] + u }, end: { line: this.currToken[4], column: this.currToken[3] + (c - 1) } }, sourceIndex: this.currToken[6] + o[a] }), p.type === "word" ? (p.isHex = /^#(.+)/.test(f), p.isColor = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(f)) : this.cache.push(this.current);
        this.newNode(p);
      }), this.position++;
    }
    string() {
      let e = this.currToken, s = this.currToken[1], r = /^(\"|\')/, n = r.test(s), i = "", o;
      n && (i = s.match(r)[0], s = s.slice(1, s.length - 1)), o = new cy({ value: s, source: { start: { line: e[2], column: e[3] }, end: { line: e[4], column: e[5] } }, sourceIndex: e[6], quoted: n }), o.raws.quote = i, this.newNode(o), this.position++;
    }
    word() {
      return this.splitWord();
    }
    newNode(e) {
      return this.spaces && (e.raws.before += this.spaces, this.spaces = ""), this.current.append(e);
    }
    get currToken() {
      return this.tokens[this.position];
    }
    get nextToken() {
      return this.tokens[this.position + 1];
    }
    get prevToken() {
      return this.tokens[this.position - 1];
    }
  };
});
var Xs = {};
en(Xs, { languages: () => gi, options: () => vi, parsers: () => Js, printers: () => Iy });
var vl = (t, e, s, r) => {
  if (!(t && e == null)) return e.replaceAll ? e.replaceAll(s, r) : s.global ? e.replace(s, r) : e.split(s).join(r);
}, E = vl;
var be = "string", We = "array", Ye = "cursor", te = "indent", _e = "align", Ve = "trim", re = "group", se = "fill", ne = "if-break", ze = "indent-if-break", Ee = "line-suffix", Ge = "line-suffix-boundary", j = "line", je = "label", ke = "break-parent", Tt = /* @__PURE__ */ new Set([Ye, te, _e, Ve, re, se, ne, ze, Ee, Ge, j, je, ke]);
var xl = (t, e, s) => {
  if (!(t && e == null)) return Array.isArray(e) || typeof e == "string" ? e[s < 0 ? e.length + s : s] : e.at(s);
}, $ = xl;
function bl(t) {
  if (typeof t == "string") return be;
  if (Array.isArray(t)) return We;
  if (!t) return;
  let { type: e } = t;
  if (Tt.has(e)) return e;
}
var H = bl;
var _l = (t) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t);
function El(t) {
  let e = t === null ? "null" : typeof t;
  if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (H(t)) throw new Error("doc is valid.");
  let s = Object.prototype.toString.call(t);
  if (s !== "[object Object]") return `Unexpected doc '${s}'.`;
  let r = _l([...Tt].map((n) => `'${n}'`));
  return `Unexpected doc.type '${t.type}'.
Expected it to be ${r}.`;
}
var Wr = class extends Error {
  constructor(e) {
    super(El(e));
    __publicField(this, "name", "InvalidDocError");
    this.doc = e;
  }
}, Yr = Wr;
function Sl(t, e) {
  if (typeof t == "string") return e(t);
  let s = /* @__PURE__ */ new Map();
  return r(t);
  function r(i) {
    if (s.has(i)) return s.get(i);
    let o = n(i);
    return s.set(i, o), o;
  }
  function n(i) {
    switch (H(i)) {
      case We:
        return e(i.map(r));
      case se:
        return e({ ...i, parts: i.parts.map(r) });
      case ne:
        return e({ ...i, breakContents: r(i.breakContents), flatContents: r(i.flatContents) });
      case re: {
        let { expandedStates: o, contents: u } = i;
        return o ? (o = o.map(r), u = o[0]) : u = r(u), e({ ...i, contents: u, expandedStates: o });
      }
      case _e:
      case te:
      case ze:
      case je:
      case Ee:
        return e({ ...i, contents: r(i.contents) });
      case be:
      case Ye:
      case Ve:
      case Ge:
      case j:
      case ke:
        return e(i);
      default:
        throw new Yr(i);
    }
  }
}
function Tl(t) {
  return t.type === j && !t.hard ? t.soft ? "" : " " : t.type === ne ? t.flatContents : t;
}
function tn(t) {
  return Sl(t, Tl);
}
var Vr = () => {
}, He = Vr;
function q(t) {
  return { type: te, contents: t };
}
function sn(t, e) {
  return { type: _e, contents: e, n: t };
}
function L(t, e = {}) {
  return He(e.expandedStates), { type: re, id: e.id, contents: t, break: !!e.shouldBreak, expandedStates: e.expandedStates };
}
function nn(t) {
  return sn({ type: "root" }, t);
}
function oe(t) {
  return sn(-1, t);
}
function Se(t) {
  return { type: se, parts: t };
}
function Ct(t, e = "", s = {}) {
  return { type: ne, breakContents: t, flatContents: e, groupId: s.groupId };
}
function on(t) {
  return { type: Ee, contents: t };
}
var Ke = { type: ke };
var Cl = { type: j, hard: true };
var A = { type: j }, D = { type: j, soft: true }, S = [Cl, Ke];
function Y(t, e) {
  let s = [];
  for (let r = 0; r < e.length; r++) r !== 0 && s.push(t), s.push(e[r]);
  return s;
}
function Ol(t) {
  return Array.isArray(t) && t.length > 0;
}
var ae = Ol;
var an = new Proxy(() => {
}, { get: () => an }), un = an;
var Ot = "'", ln = '"';
function Al(t, e) {
  let s = e === true || e === Ot ? Ot : ln, r = s === Ot ? ln : Ot, n = 0, i = 0;
  for (let o of t) o === s ? n++ : o === r && i++;
  return n > i ? r : s;
}
var cn = Al;
function Nl(t, e, s) {
  let r = e === '"' ? "'" : '"', i = E(false, t, /\\(.)|(["'])/gsu, (o, u, a) => u === r ? u : a === e ? "\\" + a : a || (s && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(u) ? u : "\\" + u));
  return e + i + e;
}
var fn = Nl;
function Pl(t, e) {
  un.ok(/^(?<quote>["']).*\k<quote>$/su.test(t));
  let s = t.slice(1, -1), r = e.parser === "json" || e.parser === "jsonc" || e.parser === "json5" && e.quoteProps === "preserve" && !e.singleQuote ? '"' : e.__isInHtmlAttribute ? "'" : cn(s, e.singleQuote);
  return t.charAt(0) === r ? t : fn(s, r, false);
}
var At = Pl;
var zr = class extends Error {
  constructor(e, s, r = "type") {
    super(`Unexpected ${s} node ${r}: ${JSON.stringify(e[r])}.`);
    __publicField(this, "name", "UnexpectedNodeError");
    this.node = e;
  }
}, pn = zr;
function Rl(t) {
  return (t == null ? void 0 : t.type) === "front-matter";
}
var Te = Rl;
var Il = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma", "spaces"]);
function hn(t, e, s) {
  if (Te(t) && t.language === "yaml" && delete e.value, t.type === "css-comment" && s.type === "css-root" && s.nodes.length > 0 && ((s.nodes[0] === t || Te(s.nodes[0]) && s.nodes[1] === t) && (delete e.text, /^\*\s*@(?:format|prettier)\s*$/u.test(t.text)) || s.type === "css-root" && $(false, s.nodes, -1) === t)) return null;
  if (t.type === "value-root" && delete e.text, (t.type === "media-query" || t.type === "media-query-list" || t.type === "media-feature-expression") && delete e.value, t.type === "css-rule" && delete e.params, (t.type === "media-feature" || t.type === "media-keyword" || t.type === "media-type" || t.type === "media-unknown" || t.type === "media-url" || t.type === "media-value" || t.type === "selector-attribute" || t.type === "selector-string" || t.type === "selector-class" || t.type === "selector-combinator" || t.type === "value-string") && t.value && (e.value = ql(t.value)), t.type === "selector-combinator" && (e.value = E(false, e.value, /\s+/gu, " ")), t.type === "media-feature" && (e.value = E(false, e.value, " ", "")), (t.type === "value-word" && (t.isColor && t.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.toLowerCase())) || t.type === "media-feature" || t.type === "selector-root-invalid" || t.type === "selector-pseudo") && (e.value = e.value.toLowerCase()), t.type === "css-decl" && (e.prop = t.prop.toLowerCase()), (t.type === "css-atrule" || t.type === "css-import") && (e.name = t.name.toLowerCase()), t.type === "value-number" && (e.unit = t.unit.toLowerCase()), t.type === "value-unknown" && (e.value = E(false, e.value, /;$/gu, "")), t.type === "selector-attribute" && (e.attribute = t.attribute.trim(), t.namespace && typeof t.namespace == "string" && (e.namespace = t.namespace.trim() || true), t.value && (e.value = E(false, e.value.trim(), /^["']|["']$/gu, ""), delete e.quoted)), (t.type === "media-value" || t.type === "media-type" || t.type === "value-number" || t.type === "selector-root-invalid" || t.type === "selector-class" || t.type === "selector-combinator" || t.type === "selector-tag") && t.value && (e.value = E(false, e.value, /([\d+.e-]+)([a-z]*)/giu, (r, n, i) => {
    let o = Number(n);
    return Number.isNaN(o) ? r : o + i.toLowerCase();
  })), t.type === "selector-tag") {
    let r = e.value.toLowerCase();
    ["from", "to"].includes(r) && (e.value = r);
  }
  if (t.type === "css-atrule" && t.name.toLowerCase() === "supports" && delete e.value, t.type === "selector-unknown" && delete e.value, t.type === "value-comma_group") {
    let r = t.groups.findIndex((n) => n.type === "value-number" && n.unit === "...");
    r !== -1 && (e.groups[r].unit = "", e.groups.splice(r + 1, 0, { type: "value-word", value: "...", isColor: false, isHex: false }));
  }
  if (t.type === "value-comma_group" && t.groups.some((r) => r.type === "value-atword" && r.value.endsWith("[") || r.type === "value-word" && r.value.startsWith("]"))) return { type: "value-atword", value: t.groups.map((r) => r.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
}
hn.ignoredProperties = Il;
function ql(t) {
  return E(false, E(false, t, "'", '"'), /\\([^\da-f])/giu, "$1");
}
var dn = hn;
async function Ll(t, e) {
  if (t.language === "yaml") {
    let s = t.value.trim(), r = s ? await e(s, { parser: "yaml" }) : "";
    return nn([t.startDelimiter, t.explicitLanguage, S, r, r ? S : "", t.endDelimiter]);
  }
}
var mn = Ll;
function yn(t) {
  let { node: e } = t;
  if (e.type === "front-matter") return async (s) => {
    let r = await mn(e, s);
    return r ? [r, S] : void 0;
  };
}
yn.getVisitorKeys = (t) => t.type === "css-root" ? ["frontMatter"] : [];
var gn = yn;
var Qe = null;
function Je(t) {
  if (Qe !== null && typeof Qe.property) {
    let e = Qe;
    return Qe = Je.prototype = null, e;
  }
  return Qe = Je.prototype = t ?? /* @__PURE__ */ Object.create(null), new Je();
}
var Dl = 10;
for (let t = 0; t <= Dl; t++) Je();
function Gr(t) {
  return Je(t);
}
function Bl(t, e = "type") {
  Gr(t);
  function s(r) {
    let n = r[e], i = t[n];
    if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${n}'.`), { node: r });
    return i;
  }
  return s;
}
var wn = Bl;
var Ml = { "front-matter": [], "css-root": ["frontMatter", "nodes"], "css-comment": [], "css-rule": ["selector", "nodes"], "css-decl": ["value", "selector", "nodes"], "css-atrule": ["selector", "params", "value", "nodes"], "media-query-list": ["nodes"], "media-query": ["nodes"], "media-type": [], "media-feature-expression": ["nodes"], "media-feature": [], "media-colon": [], "media-value": [], "media-keyword": [], "media-url": [], "media-unknown": [], "selector-root": ["nodes"], "selector-selector": ["nodes"], "selector-comment": [], "selector-string": [], "selector-tag": [], "selector-id": [], "selector-class": [], "selector-attribute": [], "selector-combinator": ["nodes"], "selector-universal": [], "selector-pseudo": ["nodes"], "selector-nesting": [], "selector-unknown": [], "value-value": ["group"], "value-root": ["group"], "value-comment": [], "value-comma_group": ["groups"], "value-paren_group": ["open", "groups", "close"], "value-func": ["group"], "value-paren": [], "value-number": [], "value-operator": [], "value-word": [], "value-colon": [], "value-comma": [], "value-string": [], "value-atword": [], "value-unicode-range": [], "value-unknown": [] }, vn = Ml;
var Ul = wn(vn), xn = Ul;
function Fl(t, e) {
  let s = 0;
  for (let r = 0; r < t.line - 1; ++r) s = e.indexOf(`
`, s) + 1;
  return s + t.column;
}
var jr = Fl;
function Nt(t) {
  return (e, s, r) => {
    let n = !!(r != null && r.backwards);
    if (s === false) return false;
    let { length: i } = e, o = s;
    for (; o >= 0 && o < i; ) {
      let u = e.charAt(o);
      if (t instanceof RegExp) {
        if (!t.test(u)) return o;
      } else if (!t.includes(u)) return o;
      n ? o-- : o++;
    }
    return o === -1 || o === i ? o : false;
  };
}
var Pt = Nt(" 	"), bn = Nt(",; 	"), Rt = Nt(/[^\n\r]/u);
function _n(t, e) {
  var s, r, n;
  if (typeof ((r = (s = t.source) == null ? void 0 : s.start) == null ? void 0 : r.offset) == "number") return t.source.start.offset;
  if (typeof t.sourceIndex == "number") return t.sourceIndex;
  if ((n = t.source) != null && n.start) return jr(t.source.start, e);
  throw Object.assign(new Error("Can not locate node."), { node: t });
}
function Hr(t, e) {
  var s, r;
  if (t.type === "css-comment" && t.inline) return Rt(e, t.source.startOffset);
  if (typeof ((r = (s = t.source) == null ? void 0 : s.end) == null ? void 0 : r.offset) == "number") return t.source.end.offset;
  if (t.source) {
    if (t.source.end) return jr(t.source.end, e);
    if (ae(t.nodes)) return Hr($(false, t.nodes, -1), e);
  }
  return null;
}
function Kr(t, e) {
  t.source && (t.source.startOffset = _n(t, e), t.source.endOffset = Hr(t, e));
  for (let s in t) {
    let r = t[s];
    s === "source" || !r || typeof r != "object" || (r.type === "value-root" || r.type === "value-unknown" ? En(r, $l(t), r.text || r.value) : Kr(r, e));
  }
}
function En(t, e, s) {
  t.source && (t.source.startOffset = _n(t, s) + e, t.source.endOffset = Hr(t, s) + e);
  for (let r in t) {
    let n = t[r];
    r === "source" || !n || typeof n != "object" || En(n, e, s);
  }
}
function $l(t) {
  var s;
  let e = t.source.startOffset;
  return typeof t.prop == "string" && (e += t.prop.length), t.type === "css-atrule" && typeof t.name == "string" && (e += 1 + t.name.length + t.raws.afterName.match(/^\s*:?\s*/u)[0].length), t.type !== "css-atrule" && typeof ((s = t.raws) == null ? void 0 : s.between) == "string" && (e += t.raws.between.length), e;
}
function kn(t) {
  let e = "initial", s = "initial", r, n = false, i = [];
  for (let o = 0; o < t.length; o++) {
    let u = t[o];
    switch (e) {
      case "initial":
        if (u === "'") {
          e = "single-quotes";
          continue;
        }
        if (u === '"') {
          e = "double-quotes";
          continue;
        }
        if ((u === "u" || u === "U") && t.slice(o, o + 4).toLowerCase() === "url(") {
          e = "url", o += 3;
          continue;
        }
        if (u === "*" && t[o - 1] === "/") {
          e = "comment-block";
          continue;
        }
        if (u === "/" && t[o - 1] === "/") {
          e = "comment-inline", r = o - 1;
          continue;
        }
        continue;
      case "single-quotes":
        if (u === "'" && t[o - 1] !== "\\" && (e = s, s = "initial"), u === `
` || u === "\r") return t;
        continue;
      case "double-quotes":
        if (u === '"' && t[o - 1] !== "\\" && (e = s, s = "initial"), u === `
` || u === "\r") return t;
        continue;
      case "url":
        if (u === ")" && (e = "initial"), u === `
` || u === "\r") return t;
        if (u === "'") {
          e = "single-quotes", s = "url";
          continue;
        }
        if (u === '"') {
          e = "double-quotes", s = "url";
          continue;
        }
        continue;
      case "comment-block":
        u === "/" && t[o - 1] === "*" && (e = "initial");
        continue;
      case "comment-inline":
        (u === '"' || u === "'" || u === "*") && (n = true), (u === `
` || u === "\r") && (n && i.push([r, o]), e = "initial", n = false);
        continue;
    }
  }
  for (let [o, u] of i) t = t.slice(0, o) + E(false, t.slice(o, u), /["'*]/gu, " ") + t.slice(u);
  return t;
}
function P(t) {
  var e;
  return (e = t.source) == null ? void 0 : e.startOffset;
}
function R(t) {
  var e;
  return (e = t.source) == null ? void 0 : e.endOffset;
}
var Wl = /\*\/$/, Yl = /^\/\*\*?/, On = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, Vl = /(^|\s+)\/\/([^\n\r]*)/g, Sn = /^(\r?\n)+/, zl = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, Tn = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, Gl = /(\r?\n|^) *\* ?/g, An = [];
function Nn(t) {
  let e = t.match(On);
  return e ? e[0].trimStart() : "";
}
function Pn(t) {
  let e = t.match(On), s = e == null ? void 0 : e[0];
  return s == null ? t : t.slice(s.length);
}
function Rn(t) {
  let e = `
`;
  t = E(false, t.replace(Yl, "").replace(Wl, ""), Gl, "$1");
  let s = "";
  for (; s !== t; ) s = t, t = E(false, t, zl, `${e}$1 $2${e}`);
  t = t.replace(Sn, "").trimEnd();
  let r = /* @__PURE__ */ Object.create(null), n = E(false, t, Tn, "").replace(Sn, "").trimEnd(), i;
  for (; i = Tn.exec(t); ) {
    let o = E(false, i[2], Vl, "");
    if (typeof r[i[1]] == "string" || Array.isArray(r[i[1]])) {
      let u = r[i[1]];
      r[i[1]] = [...An, ...Array.isArray(u) ? u : [u], o];
    } else r[i[1]] = o;
  }
  return { comments: n, pragmas: r };
}
function In({ comments: t = "", pragmas: e = {} }) {
  let s = `
`, r = "/**", n = " *", i = " */", o = Object.keys(e), u = o.flatMap((c) => Cn(c, e[c])).map((c) => `${n} ${c}${s}`).join("");
  if (!t) {
    if (o.length === 0) return "";
    if (o.length === 1 && !Array.isArray(e[o[0]])) {
      let c = e[o[0]];
      return `${r} ${Cn(o[0], c)[0]}${i}`;
    }
  }
  let a = t.split(s).map((c) => `${n} ${c}`).join(s) + s;
  return r + s + (t ? a : "") + (t && o.length > 0 ? n + s : "") + u + i;
}
function Cn(t, e) {
  return [...An, ...Array.isArray(e) ? e : [e]].map((s) => `@${t} ${s}`.trim());
}
function jl(t) {
  if (!t.startsWith("#!")) return "";
  let e = t.indexOf(`
`);
  return e === -1 ? t : t.slice(0, e);
}
var qn = jl;
function Ln(t) {
  let e = qn(t);
  e && (t = t.slice(e.length + 1));
  let s = Nn(t), { pragmas: r, comments: n } = Rn(s);
  return { shebang: e, text: t, pragmas: r, comments: n };
}
function Dn(t) {
  let { pragmas: e } = Ln(t);
  return Object.prototype.hasOwnProperty.call(e, "prettier") || Object.prototype.hasOwnProperty.call(e, "format");
}
function Bn(t) {
  let { shebang: e, text: s, pragmas: r, comments: n } = Ln(t), i = Pn(s), o = In({ pragmas: { format: "", ...r }, comments: n.trimStart() });
  return (e ? `${e}
` : "") + o + (i.startsWith(`
`) ? `
` : `

`) + i;
}
var Xe = 3;
function Hl(t) {
  let e = t.slice(0, Xe);
  if (e !== "---" && e !== "+++") return;
  let s = t.indexOf(`
`, Xe);
  if (s === -1) return;
  let r = t.slice(Xe, s).trim(), n = t.indexOf(`
${e}`, s), i = r;
  if (i || (i = e === "+++" ? "toml" : "yaml"), n === -1 && e === "---" && i === "yaml" && (n = t.indexOf(`
...`, s)), n === -1) return;
  let o = n + 1 + Xe, u = t.charAt(o + 1);
  if (!/\s?/u.test(u)) return;
  let a = t.slice(0, o);
  return { type: "front-matter", language: i, explicitLanguage: r, value: t.slice(s + 1, n), startDelimiter: e, endDelimiter: a.slice(-3), raw: a };
}
function Kl(t) {
  let e = Hl(t);
  if (!e) return { content: t };
  let { raw: s } = e;
  return { frontMatter: e, content: E(false, s, /[^\n]/gu, " ") + t.slice(s.length) };
}
var Ze = Kl;
function Mn(t) {
  return Dn(Ze(t).content);
}
function Un(t) {
  let { frontMatter: e, content: s } = Ze(t);
  return (e ? e.raw + `

` : "") + Bn(s);
}
var Ql = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
function Fn(t) {
  var e, s;
  return (s = (e = t.findAncestor((r) => r.type === "css-decl")) == null ? void 0 : e.prop) == null ? void 0 : s.toLowerCase();
}
var Jl = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
function $n(t) {
  return Jl.has(t.toLowerCase());
}
function Wn(t, e) {
  var r;
  let s = t.findAncestor((n) => n.type === "css-atrule");
  return ((r = s == null ? void 0 : s.name) == null ? void 0 : r.toLowerCase().endsWith("keyframes")) && ["from", "to"].includes(e.toLowerCase());
}
function ue(t) {
  return t.includes("$") || t.includes("@") || t.includes("#") || t.startsWith("%") || t.startsWith("--") || t.startsWith(":--") || t.includes("(") && t.includes(")") ? t : t.toLowerCase();
}
function Ce(t, e) {
  var r;
  let s = t.findAncestor((n) => n.type === "value-func");
  return ((r = s == null ? void 0 : s.value) == null ? void 0 : r.toLowerCase()) === e;
}
function Yn(t) {
  var r;
  let e = t.findAncestor((n) => n.type === "css-rule"), s = (r = e == null ? void 0 : e.raws) == null ? void 0 : r.selector;
  return s && (s.startsWith(":import") || s.startsWith(":export"));
}
function Oe(t, e) {
  let s = Array.isArray(e) ? e : [e], r = t.findAncestor((n) => n.type === "css-atrule");
  return r && s.includes(r.name.toLowerCase());
}
function Vn(t) {
  var s;
  let { node: e } = t;
  return e.groups[0].value === "url" && e.groups.length === 2 && ((s = t.findAncestor((r) => r.type === "css-atrule")) == null ? void 0 : s.name) === "import";
}
function zn(t) {
  return t.type === "value-func" && t.value.toLowerCase() === "url";
}
function Gn(t) {
  return t.type === "value-func" && t.value.toLowerCase() === "var";
}
function jn(t) {
  let { selector: e } = t;
  return e ? typeof e == "string" && /^@.+:.*$/u.test(e) || e.value && /^@.+:.*$/u.test(e.value) : false;
}
function Hn(t) {
  return t.type === "value-word" && ["from", "through", "end"].includes(t.value);
}
function Kn(t) {
  return t.type === "value-word" && ["and", "or", "not"].includes(t.value);
}
function Qn(t) {
  return t.type === "value-word" && t.value === "in";
}
function It(t) {
  return t.type === "value-operator" && t.value === "*";
}
function et(t) {
  return t.type === "value-operator" && t.value === "/";
}
function J(t) {
  return t.type === "value-operator" && t.value === "+";
}
function he(t) {
  return t.type === "value-operator" && t.value === "-";
}
function Xl(t) {
  return t.type === "value-operator" && t.value === "%";
}
function qt(t) {
  return It(t) || et(t) || J(t) || he(t) || Xl(t);
}
function Jn(t) {
  return t.type === "value-word" && ["==", "!="].includes(t.value);
}
function Xn(t) {
  return t.type === "value-word" && ["<", ">", "<=", ">="].includes(t.value);
}
function tt(t, e) {
  return e.parser === "scss" && t.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(t.name);
}
function Jr(t) {
  var e;
  return ((e = t.raws) == null ? void 0 : e.params) && /^\(\s*\)$/u.test(t.raws.params);
}
function Lt(t) {
  return t.name.startsWith("prettier-placeholder");
}
function Zn(t) {
  return t.prop.startsWith("@prettier-placeholder");
}
function ei(t, e) {
  return t.value === "$$" && t.type === "value-func" && (e == null ? void 0 : e.type) === "value-word" && !e.raws.before;
}
function ti(t) {
  var e, s;
  return ((e = t.value) == null ? void 0 : e.type) === "value-root" && ((s = t.value.group) == null ? void 0 : s.type) === "value-value" && t.prop.toLowerCase() === "composes";
}
function ri(t) {
  var e, s, r;
  return ((r = (s = (e = t.value) == null ? void 0 : e.group) == null ? void 0 : s.group) == null ? void 0 : r.type) === "value-paren_group" && t.value.group.group.open !== null && t.value.group.group.close !== null;
}
function de(t) {
  var e;
  return ((e = t.raws) == null ? void 0 : e.before) === "";
}
function Dt(t) {
  var e, s;
  return t.type === "value-comma_group" && ((s = (e = t.groups) == null ? void 0 : e[1]) == null ? void 0 : s.type) === "value-colon";
}
function Qr(t) {
  var e;
  return t.type === "value-paren_group" && ((e = t.groups) == null ? void 0 : e[0]) && Dt(t.groups[0]);
}
function Xr(t, e) {
  var i;
  if (e.parser !== "scss") return false;
  let { node: s } = t;
  if (s.groups.length === 0) return false;
  let r = t.grandparent;
  if (!Qr(s) && !(r && Qr(r))) return false;
  let n = t.findAncestor((o) => o.type === "css-decl");
  return !!((i = n == null ? void 0 : n.prop) != null && i.startsWith("$") || Qr(r) || r.type === "value-func");
}
function Ae(t) {
  return t.type === "value-comment" && t.inline;
}
function Bt(t) {
  return t.type === "value-word" && t.value === "#";
}
function Zr(t) {
  return t.type === "value-word" && t.value === "{";
}
function Mt(t) {
  return t.type === "value-word" && t.value === "}";
}
function rt(t) {
  return ["value-word", "value-atword"].includes(t.type);
}
function st(t) {
  return (t == null ? void 0 : t.type) === "value-colon";
}
function si(t, e) {
  if (!Dt(e)) return false;
  let { groups: s } = e, r = s.indexOf(t);
  return r === -1 ? false : st(s[r + 1]);
}
function ni(t) {
  return t.value && ["not", "and", "or"].includes(t.value.toLowerCase());
}
function ii(t) {
  return t.type !== "value-func" ? false : Ql.has(t.value.toLowerCase());
}
function Ne(t) {
  return /\/\//u.test(t.split(/[\n\r]/u).pop());
}
function nt(t) {
  return (t == null ? void 0 : t.type) === "value-atword" && t.value.startsWith("prettier-placeholder-");
}
function oi(t, e) {
  var s, r;
  if (((s = t.open) == null ? void 0 : s.value) !== "(" || ((r = t.close) == null ? void 0 : r.value) !== ")" || t.groups.some((n) => n.type !== "value-comma_group")) return false;
  if (e.type === "value-comma_group") {
    let n = e.groups.indexOf(t) - 1, i = e.groups[n];
    if ((i == null ? void 0 : i.type) === "value-word" && i.value === "with") return true;
  }
  return false;
}
function it(t) {
  var e, s;
  return t.type === "value-paren_group" && ((e = t.open) == null ? void 0 : e.value) === "(" && ((s = t.close) == null ? void 0 : s.value) === ")";
}
function Zl(t, e, s) {
  var d;
  let { node: r } = t, n = t.parent, i = t.grandparent, o = Fn(t), u = o && n.type === "value-value" && (o === "grid" || o.startsWith("grid-template")), a = t.findAncestor((m) => m.type === "css-atrule"), c = a && tt(a, e), f = r.groups.some((m) => Ae(m)), p = t.map(s, "groups"), l = [""], y = Ce(t, "url"), x = false, h = false;
  for (let m = 0; m < r.groups.length; ++m) {
    let b = r.groups[m - 1], w = r.groups[m], v = r.groups[m + 1], N = r.groups[m + 2];
    if (Ae(w) && !v) {
      l.push([l.pop(), on([" ", p[m]])]);
      continue;
    }
    if (l.push([l.pop(), p[m]]), y) {
      (v && J(v) || J(w)) && l.push([l.pop(), " "]);
      continue;
    }
    if (st(v) && w.type === "value-word" && l.length > 2 && r.groups.slice(0, m).every((O) => O.type === "value-comment") && !Ae(b) && (l[l.length - 2] = oe($(false, l, -2))), Oe(t, "forward") && w.type === "value-word" && w.value && b !== void 0 && b.type === "value-word" && b.value === "as" && v.type === "value-operator" && v.value === "*" || !v || w.type === "value-word" && w.value.endsWith("-") && nt(v)) continue;
    if (w.type === "value-string" && w.quoted) {
      let O = w.value.lastIndexOf("#{"), ve = w.value.lastIndexOf("}");
      O !== -1 && ve !== -1 ? x = O > ve : O !== -1 ? x = true : ve !== -1 && (x = false);
    }
    if (x || st(w) || st(v) || w.type === "value-atword" && (w.value === "" || w.value.endsWith("[")) || v.type === "value-word" && v.value.startsWith("]") || w.value === "~" || w.type !== "value-string" && w.value && w.value.includes("\\") && v && v.type !== "value-comment" || b != null && b.value && b.value.indexOf("\\") === b.value.length - 1 && w.type === "value-operator" && w.value === "/" || w.value === "\\" || ei(w, v) || Bt(w) || Zr(w) || Mt(v) || Zr(v) && de(v) || Mt(w) && de(v) || w.value === "--" && Bt(v)) continue;
    let F = qt(w), Q = qt(v);
    if ((F && Bt(v) || Q && Mt(w)) && de(v) || !b && et(w) || Ce(t, "calc") && (J(w) || J(v) || he(w) || he(v)) && de(v)) continue;
    let W = (J(w) || he(w)) && m === 0 && (v.type === "value-number" || v.isHex) && i && ii(i) && !de(v), T = (N == null ? void 0 : N.type) === "value-func" || N && rt(N) || w.type === "value-func" || rt(w), C = v.type === "value-func" || rt(v) || (b == null ? void 0 : b.type) === "value-func" || b && rt(b);
    if (e.parser === "scss" && F && w.value === "-" && v.type === "value-func" && R(w) !== P(v)) {
      l.push([l.pop(), " "]);
      continue;
    }
    if (!(!(It(v) || It(w)) && !Ce(t, "calc") && !W && (et(v) && !T || et(w) && !C || J(v) && !T || J(w) && !C || he(v) || he(w)) && (de(v) || F && (!b || b && qt(b)))) && !((e.parser === "scss" || e.parser === "less") && F && w.value === "-" && it(v) && R(w) === P(v.open) && v.open.value === "(")) {
      if (Ae(w)) {
        if (n.type === "value-paren_group") {
          l.push(oe(S), "");
          continue;
        }
        l.push(S, "");
        continue;
      }
      if (c && (Jn(v) || Xn(v) || Kn(v) || Qn(w) || Hn(w))) {
        l.push([l.pop(), " "]);
        continue;
      }
      if (a && a.name.toLowerCase() === "namespace") {
        l.push([l.pop(), " "]);
        continue;
      }
      if (u) {
        w.source && v.source && w.source.start.line !== v.source.start.line ? (l.push(S, ""), h = true) : l.push([l.pop(), " "]);
        continue;
      }
      if (Q) {
        l.push([l.pop(), " "]);
        continue;
      }
      if ((v == null ? void 0 : v.value) !== "..." && !(nt(w) && nt(v) && R(w) === P(v))) {
        if (nt(w) && it(v) && R(w) === P(v.open)) {
          l.push(D, "");
          continue;
        }
        if (w.value === "with" && it(v)) {
          l = [[Se(l), " "]];
          continue;
        }
        (d = w.value) != null && d.endsWith("#") && v.value === "{" && it(v.group) || Ae(v) && !N || l.push(A, "");
      }
    }
  }
  return f && l.push([l.pop(), Ke]), h && l.unshift("", S), c ? L(q(l)) : Vn(t) ? L(Se(l)) : L(q(Se(l)));
}
var ai = Zl;
function ec(t) {
  return t.length === 1 ? t : t.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/u, "$1").replace(/^([+-])?\./u, "$10.").replace(/(\.\d+?)0+(?=e|$)/u, "$1").replace(/\.(?=e|$)/u, "");
}
var ui = ec;
var es = /* @__PURE__ */ new Map([["em", "em"], ["rem", "rem"], ["ex", "ex"], ["rex", "rex"], ["cap", "cap"], ["rcap", "rcap"], ["ch", "ch"], ["rch", "rch"], ["ic", "ic"], ["ric", "ric"], ["lh", "lh"], ["rlh", "rlh"], ["vw", "vw"], ["svw", "svw"], ["lvw", "lvw"], ["dvw", "dvw"], ["vh", "vh"], ["svh", "svh"], ["lvh", "lvh"], ["dvh", "dvh"], ["vi", "vi"], ["svi", "svi"], ["lvi", "lvi"], ["dvi", "dvi"], ["vb", "vb"], ["svb", "svb"], ["lvb", "lvb"], ["dvb", "dvb"], ["vmin", "vmin"], ["svmin", "svmin"], ["lvmin", "lvmin"], ["dvmin", "dvmin"], ["vmax", "vmax"], ["svmax", "svmax"], ["lvmax", "lvmax"], ["dvmax", "dvmax"], ["cm", "cm"], ["mm", "mm"], ["q", "Q"], ["in", "in"], ["pt", "pt"], ["pc", "pc"], ["px", "px"], ["deg", "deg"], ["grad", "grad"], ["rad", "rad"], ["turn", "turn"], ["s", "s"], ["ms", "ms"], ["hz", "Hz"], ["khz", "kHz"], ["dpi", "dpi"], ["dpcm", "dpcm"], ["dppx", "dppx"], ["x", "x"], ["cqw", "cqw"], ["cqh", "cqh"], ["cqi", "cqi"], ["cqb", "cqb"], ["cqmin", "cqmin"], ["cqmax", "cqmax"], ["fr", "fr"]]);
function li(t) {
  let e = t.toLowerCase();
  return es.has(e) ? es.get(e) : t;
}
var ci = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gsu, tc = /(?:\d*\.\d+|\d+\.?)(?:e[+-]?\d+)?/giu, rc = /[a-z]+/giu, sc = /[$@]?[_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/giu, nc = new RegExp(ci.source + `|(${sc.source})?(${tc.source})(${rc.source})?`, "giu");
function V(t, e) {
  return E(false, t, ci, (s) => At(s, e));
}
function fi(t, e) {
  let s = e.singleQuote ? "'" : '"';
  return t.includes('"') || t.includes("'") ? t : s + t + s;
}
function me(t) {
  return E(false, t, nc, (e, s, r, n, i) => !r && n ? ts(n) + ue(i || "") : e);
}
function ts(t) {
  return ui(t).replace(/\.0(?=$|e)/u, "");
}
function pi(t) {
  return t.trailingComma === "es5" || t.trailingComma === "all";
}
function ic(t, e, s) {
  let r = !!(s != null && s.backwards);
  if (e === false) return false;
  let n = t.charAt(e);
  if (r) {
    if (t.charAt(e - 1) === "\r" && n === `
`) return e - 2;
    if (n === `
` || n === "\r" || n === "\u2028" || n === "\u2029") return e - 1;
  } else {
    if (n === "\r" && t.charAt(e + 1) === `
`) return e + 2;
    if (n === `
` || n === "\r" || n === "\u2028" || n === "\u2029") return e + 1;
  }
  return e;
}
var Ut = ic;
function oc(t, e, s = {}) {
  let r = Pt(t, s.backwards ? e - 1 : e, s), n = Ut(t, r, s);
  return r !== n;
}
var Ft = oc;
function ac(t, e) {
  if (e === false) return false;
  if (t.charAt(e) === "/" && t.charAt(e + 1) === "*") {
    for (let s = e + 2; s < t.length; ++s) if (t.charAt(s) === "*" && t.charAt(s + 1) === "/") return s + 2;
  }
  return e;
}
var hi = ac;
function uc(t, e) {
  return e === false ? false : t.charAt(e) === "/" && t.charAt(e + 1) === "/" ? Rt(t, e) : e;
}
var di = uc;
function lc(t, e) {
  let s = null, r = e;
  for (; r !== s; ) s = r, r = bn(t, r), r = hi(t, r), r = Pt(t, r);
  return r = di(t, r), r = Ut(t, r), r !== false && Ft(t, r);
}
var $t = lc;
function cc({ node: t, parent: e }, s) {
  return !!(t.source && s.originalText.slice(P(t), P(e.close)).trimEnd().endsWith(","));
}
function fc(t, e) {
  return Gn(t.grandparent) && cc(t, e) ? "," : t.node.type !== "value-comment" && !(t.node.type === "value-comma_group" && t.node.groups.every((s) => s.type === "value-comment")) && pi(e) && t.callParent(() => Xr(t, e)) ? Ct(",") : "";
}
function mi(t, e, s) {
  let { node: r, parent: n } = t, i = t.map(({ node: y }) => typeof y == "string" ? y : s(), "groups");
  if (n && zn(n) && (r.groups.length === 1 || r.groups.length > 0 && r.groups[0].type === "value-comma_group" && r.groups[0].groups.length > 0 && r.groups[0].groups[0].type === "value-word" && r.groups[0].groups[0].value.startsWith("data:"))) return [r.open ? s("open") : "", Y(",", i), r.close ? s("close") : ""];
  if (!r.open) {
    let y = rs(t);
    let x = hc(Y(",", i), 2), h = Y(y ? S : A, x);
    return q(y ? [S, h] : L([pc(t) ? D : "", Se(h)]));
  }
  let o = t.map(({ node: y, isLast: x, index: h }) => {
    var b;
    let d = i[h];
    Dt(y) && y.type === "value-comma_group" && y.groups && y.groups[0].type !== "value-paren_group" && ((b = y.groups[2]) == null ? void 0 : b.type) === "value-paren_group" && H(d) === re && H(d.contents) === te && H(d.contents.contents) === se && (d = L(oe(d)));
    let m = [d, x ? fc(t, e) : ","];
    if (!x && y.type === "value-comma_group" && ae(y.groups)) {
      let w = $(false, y.groups, -1);
      !w.source && w.close && (w = w.close), w.source && $t(e.originalText, R(w)) && m.push(S);
    }
    return m;
  }, "groups"), u = si(r, n), a = oi(r, n), c = Xr(t, e), f = a || c && !u, p = a || u, l = L([r.open ? s("open") : "", q([D, Y(A, o)]), D, r.close ? s("close") : ""], { shouldBreak: f });
  return p ? oe(l) : l;
}
function rs(t) {
  return t.match((e) => e.type === "value-paren_group" && !e.open && e.groups.some((s) => s.type === "value-comma_group"), (e, s) => s === "group" && e.type === "value-value", (e, s) => s === "group" && e.type === "value-root", (e, s) => s === "value" && (e.type === "css-decl" && !e.prop.startsWith("--") || e.type === "css-atrule" && e.variable));
}
function pc(t) {
  return t.match((e) => e.type === "value-paren_group" && !e.open, (e, s) => s === "group" && e.type === "value-value", (e, s) => s === "group" && e.type === "value-root", (e, s) => s === "value" && e.type === "css-decl");
}
function hc(t, e) {
  let s = [];
  for (let r = 0; r < t.length; r += e) s.push(t.slice(r, r + e));
  return s;
}
function dc(t, e, s) {
  let r = [];
  return t.each(() => {
    let { node: n, previous: i } = t;
    if ((i == null ? void 0 : i.type) === "css-comment" && i.text.trim() === "prettier-ignore" ? r.push(e.originalText.slice(P(n), R(n))) : r.push(s()), t.isLast) return;
    let { next: o } = t;
    o.type === "css-comment" && !Ft(e.originalText, P(o), { backwards: true }) && !Te(n) || o.type === "css-atrule" && o.name === "else" && n.type !== "css-comment" ? r.push(" ") : (r.push(e.__isHTMLStyleAttribute ? A : S), $t(e.originalText, R(n)) && !Te(n) && r.push(S));
  }, "nodes"), r;
}
var Pe = dc;
function mc(t, e, s) {
  var n, i, o, u, a, c;
  let { node: r } = t;
  switch (r.type) {
    case "front-matter":
      return [r.raw, S];
    case "css-root": {
      let f = Pe(t, e, s), p = r.raws.after.trim();
      return p.startsWith(";") && (p = p.slice(1).trim()), [r.frontMatter ? [s("frontMatter"), S] : "", f, p ? ` ${p}` : "", r.nodes.length > 0 ? S : ""];
    }
    case "css-comment": {
      let f = r.inline || r.raws.inline, p = e.originalText.slice(P(r), R(r));
      return f ? p.trimEnd() : p;
    }
    case "css-rule":
      return [s("selector"), r.important ? " !important" : "", r.nodes ? [((n = r.selector) == null ? void 0 : n.type) === "selector-unknown" && Ne(r.selector.value) ? A : r.selector ? " " : "", "{", r.nodes.length > 0 ? q([S, Pe(t, e, s)]) : "", S, "}", jn(r) ? ";" : ""] : ";"];
    case "css-decl": {
      let f = t.parent, { between: p } = r.raws, l = p.trim(), y = l === ":", x = typeof r.value == "string" && /^ *$/u.test(r.value), h = typeof r.value == "string" ? r.value : s("value");
      return h = ti(r) ? tn(h) : h, !y && Ne(l) && !((o = (i = r.value) == null ? void 0 : i.group) != null && o.group && t.call(() => rs(t), "value", "group", "group")) && (h = q([S, oe(h)])), [E(false, r.raws.before, /[\s;]/gu, ""), f.type === "css-atrule" && f.variable || Yn(t) ? r.prop : ue(r.prop), l.startsWith("//") ? " " : "", l, r.extend || x ? "" : " ", e.parser === "less" && r.extend && r.selector ? ["extend(", s("selector"), ")"] : "", h, r.raws.important ? r.raws.important.replace(/\s*!\s*important/iu, " !important") : r.important ? " !important" : "", r.raws.scssDefault ? r.raws.scssDefault.replace(/\s*!default/iu, " !default") : r.scssDefault ? " !default" : "", r.raws.scssGlobal ? r.raws.scssGlobal.replace(/\s*!global/iu, " !global") : r.scssGlobal ? " !global" : "", r.nodes ? [" {", q([D, Pe(t, e, s)]), D, "}"] : Zn(r) && !f.raws.semicolon && e.originalText[R(r) - 1] !== ";" ? "" : e.__isHTMLStyleAttribute && t.isLast ? Ct(";") : ";"];
    }
    case "css-atrule": {
      let f = t.parent, p = Lt(r) && !f.raws.semicolon && e.originalText[R(r) - 1] !== ";";
      if (e.parser === "less") {
        if (r.mixin) return [s("selector"), r.important ? " !important" : "", p ? "" : ";"];
        if (r.function) return [r.name, typeof r.params == "string" ? r.params : s("params"), p ? "" : ";"];
        if (r.variable) return ["@", r.name, ": ", r.value ? s("value") : "", r.raws.between.trim() ? r.raws.between.trim() + " " : "", r.nodes ? ["{", q([r.nodes.length > 0 ? D : "", Pe(t, e, s)]), D, "}"] : "", p ? "" : ";"];
      }
      let l = r.name === "import" && ((u = r.params) == null ? void 0 : u.type) === "value-unknown" && r.params.value.endsWith(";");
      return ["@", Jr(r) || r.name.endsWith(":") || Lt(r) ? r.name : ue(r.name), r.params ? [Jr(r) ? "" : Lt(r) ? r.raws.afterName === "" ? "" : r.name.endsWith(":") ? " " : /^\s*\n\s*\n/u.test(r.raws.afterName) ? [S, S] : /^\s*\n/u.test(r.raws.afterName) ? S : " " : " ", typeof r.params == "string" ? r.params : s("params")] : "", r.selector ? q([" ", s("selector")]) : "", r.value ? L([" ", s("value"), tt(r, e) ? ri(r) ? " " : A : ""]) : r.name === "else" ? " " : "", r.nodes ? [tt(r, e) ? "" : r.selector && !r.selector.nodes && typeof r.selector.value == "string" && Ne(r.selector.value) || !r.selector && typeof r.params == "string" && Ne(r.params) ? A : " ", "{", q([r.nodes.length > 0 ? D : "", Pe(t, e, s)]), D, "}"] : p || l ? "" : ";"];
    }
    case "media-query-list": {
      let f = [];
      return t.each(({ node: p }) => {
        p.type === "media-query" && p.value === "" || f.push(s());
      }, "nodes"), L(q(Y(A, f)));
    }
    case "media-query":
      return [Y(" ", t.map(s, "nodes")), t.isLast ? "" : ","];
    case "media-type":
      return me(V(r.value, e));
    case "media-feature-expression":
      return r.nodes ? ["(", ...t.map(s, "nodes"), ")"] : r.value;
    case "media-feature":
      return ue(V(E(false, r.value, / +/gu, " "), e));
    case "media-colon":
      return [r.value, " "];
    case "media-value":
      return me(V(r.value, e));
    case "media-keyword":
      return V(r.value, e);
    case "media-url":
      return V(E(false, E(false, r.value, /^url\(\s+/giu, "url("), /\s+\)$/gu, ")"), e);
    case "media-unknown":
      return r.value;
    case "selector-root":
      return L([Oe(t, "custom-selector") ? [t.findAncestor((f) => f.type === "css-atrule").customSelector, A] : "", Y([",", Oe(t, ["extend", "custom-selector", "nest"]) ? A : S], t.map(s, "nodes"))]);
    case "selector-selector": {
      let f = r.nodes.length > 1;
      return L((f ? q : (p) => p)(t.map(s, "nodes")));
    }
    case "selector-comment":
      return r.value;
    case "selector-string":
      return V(r.value, e);
    case "selector-tag":
      return [r.namespace ? [r.namespace === true ? "" : r.namespace.trim(), "|"] : "", ((a = t.previous) == null ? void 0 : a.type) === "selector-nesting" ? r.value : me(Wn(t, r.value) ? r.value.toLowerCase() : r.value)];
    case "selector-id":
      return ["#", r.value];
    case "selector-class":
      return [".", me(V(r.value, e))];
    case "selector-attribute":
      return ["[", r.namespace ? [r.namespace === true ? "" : r.namespace.trim(), "|"] : "", r.attribute.trim(), r.operator ?? "", r.value ? fi(V(r.value.trim(), e), e) : "", r.insensitive ? " i" : "", "]"];
    case "selector-combinator": {
      if (r.value === "+" || r.value === ">" || r.value === "~" || r.value === ">>>") {
        let l = t.parent;
        return [l.type === "selector-selector" && l.nodes[0] === r ? "" : A, r.value, t.isLast ? "" : " "];
      }
      let f = r.value.trim().startsWith("(") ? A : "", p = me(V(r.value.trim(), e)) || A;
      return [f, p];
    }
    case "selector-universal":
      return [r.namespace ? [r.namespace === true ? "" : r.namespace.trim(), "|"] : "", r.value];
    case "selector-pseudo":
      return [ue(r.value), ae(r.nodes) ? L(["(", q([D, Y([",", A], t.map(s, "nodes"))]), D, ")"]) : ""];
    case "selector-nesting":
      return r.value;
    case "selector-unknown": {
      let f = t.findAncestor((y) => y.type === "css-rule");
      if (f != null && f.isSCSSNesterProperty) return me(V(ue(r.value), e));
      let p = t.parent;
      if ((c = p.raws) != null && c.selector) {
        let y = P(p), x = y + p.raws.selector.length;
        return e.originalText.slice(y, x).trim();
      }
      let l = t.grandparent;
      if (p.type === "value-paren_group" && (l == null ? void 0 : l.type) === "value-func" && l.value === "selector") {
        let y = R(p.open) + 1, x = P(p.close), h = e.originalText.slice(y, x).trim();
        return Ne(h) ? [Ke, h] : h;
      }
      return r.value;
    }
    case "value-value":
    case "value-root":
      return s("group");
    case "value-comment":
      return e.originalText.slice(P(r), R(r));
    case "value-comma_group":
      return ai(t, e, s);
    case "value-paren_group":
      return mi(t, e, s);
    case "value-func":
      return [r.value, Oe(t, "supports") && ni(r) ? " " : "", s("group")];
    case "value-paren":
      return r.value;
    case "value-number":
      return [ts(r.value), li(r.unit)];
    case "value-operator":
      return r.value;
    case "value-word":
      return r.isColor && r.isHex || $n(r.value) ? r.value.toLowerCase() : r.value;
    case "value-colon": {
      let { previous: f } = t;
      return L([r.value, typeof (f == null ? void 0 : f.value) == "string" && f.value.endsWith("\\") || Ce(t, "url") ? "" : A]);
    }
    case "value-string":
      return At(r.raws.quote + r.value + r.raws.quote, e);
    case "value-atword":
      return ["@", r.value];
    case "value-unicode-range":
      return r.value;
    case "value-unknown":
      return r.value;
    case "value-comma":
    default:
      throw new pn(r, "PostCSS");
  }
}
var yc = { print: mc, embed: gn, insertPragma: Un, massageAstNode: dn, getVisitorKeys: xn }, yi = yc;
var gi = [{ linguistLanguageId: 50, name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css", ".wxss"], parsers: ["css"], vscodeLanguageIds: ["css"] }, { linguistLanguageId: 262764437, name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", parsers: ["css"], vscodeLanguageIds: ["postcss"] }, { linguistLanguageId: 198, name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", parsers: ["less"], vscodeLanguageIds: ["less"] }, { linguistLanguageId: 329, name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], parsers: ["scss"], vscodeLanguageIds: ["scss"] }];
var wi = { singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." } };
var gc = { singleQuote: wi.singleQuote }, vi = gc;
var Js = {};
en(Js, { css: () => Ny, less: () => Py, scss: () => Ry });
var ol = xe(gt()), al = xe(To()), ul = xe(oa());
function sp(t, e) {
  let s = new SyntaxError(t + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
  return Object.assign(s, e);
}
var aa = sp;
var da = xe(ha());
function X(t, e, s) {
  if (t && typeof t == "object") {
    delete t.parent;
    for (let r in t) X(t[r], e, s), r === "type" && typeof t[r] == "string" && !t[r].startsWith(e) && (!s || !s.test(t[r])) && (t[r] = e + t[r]);
  }
  return t;
}
function Ls(t) {
  if (t && typeof t == "object") {
    delete t.parent;
    for (let e in t) Ls(t[e]);
    !Array.isArray(t) && t.value && !t.type && (t.type = "unknown");
  }
  return t;
}
var mp = da.default.default;
function yp(t) {
  let e;
  try {
    e = mp(t);
  } catch {
    return { type: "selector-unknown", value: t };
  }
  return X(Ls(e), "media-");
}
var ma = yp;
var lu = xe(uu());
function Nm(t) {
  if (/\/\/|\/\*/u.test(t)) return { type: "selector-unknown", value: t.trim() };
  let e;
  try {
    new lu.default((s) => {
      e = s;
    }).process(t);
  } catch {
    return { type: "selector-unknown", value: t };
  }
  return X(e, "selector-");
}
var ee = Nm;
var rl = xe(Qu());
var wy = (t) => {
  for (; t.parent; ) t = t.parent;
  return t;
}, Ur = wy;
function vy(t) {
  return Ur(t).text.slice(t.group.open.sourceIndex + 1, t.group.close.sourceIndex).trim();
}
var Ju = vy;
function xy(t) {
  if (ae(t)) {
    for (let e = t.length - 1; e > 0; e--) if (t[e].type === "word" && t[e].value === "{" && t[e - 1].type === "word" && t[e - 1].value.endsWith("#")) return true;
  }
  return false;
}
var Xu = xy;
function by(t) {
  return t.some((e) => e.type === "string" || e.type === "func" && !e.value.endsWith("\\"));
}
var Zu = by;
function _y(t, e) {
  return !!(e.parser === "scss" && (t == null ? void 0 : t.type) === "word" && t.value.startsWith("$"));
}
var el = _y;
var tl = (t) => t.type === "paren" && t.value === ")";
function Ey(t, e) {
  var a;
  let { nodes: s } = t, r = { open: null, close: null, groups: [], type: "paren_group" }, n = [r], i = r, o = { groups: [], type: "comma_group" }, u = [o];
  for (let c = 0; c < s.length; ++c) {
    let f = s[c];
    if (e.parser === "scss" && f.type === "number" && f.unit === ".." && f.value.endsWith(".") && (f.value = f.value.slice(0, -1), f.unit = "..."), f.type === "func" && f.value === "selector" && (f.group.groups = [ee(Ur(t).text.slice(f.group.open.sourceIndex + 1, f.group.close.sourceIndex))]), f.type === "func" && f.value === "url") {
      let p = ((a = f.group) == null ? void 0 : a.groups) ?? [], l = [];
      for (let y = 0; y < p.length; y++) {
        let x = p[y];
        x.type === "comma_group" ? l = [...l, ...x.groups] : l.push(x);
      }
      (Xu(l) || !Zu(l) && !el(l[0], e)) && (f.group.groups = [Ju(f)]);
    }
    if (f.type === "paren" && f.value === "(") r = { open: f, close: null, groups: [], type: "paren_group" }, n.push(r), o = { groups: [], type: "comma_group" }, u.push(o);
    else if (tl(f)) {
      if (o.groups.length > 0 && r.groups.push(o), r.close = f, u.length === 1) throw new Error("Unbalanced parenthesis");
      u.pop(), o = $(false, u, -1), o.groups.push(r), n.pop(), r = $(false, n, -1);
    } else if (f.type === "comma") {
      if (c === s.length - 3 && s[c + 1].type === "comment" && tl(s[c + 2])) continue;
      r.groups.push(o), o = { groups: [], type: "comma_group" }, u[u.length - 1] = o;
    } else o.groups.push(f);
  }
  return o.groups.length > 0 && r.groups.push(o), i;
}
function Fr(t) {
  return t.type === "paren_group" && !t.open && !t.close && t.groups.length === 1 || t.type === "comma_group" && t.groups.length === 1 ? Fr(t.groups[0]) : t.type === "paren_group" || t.type === "comma_group" ? { ...t, groups: t.groups.map(Fr) } : t;
}
function sl(t, e) {
  if (t && typeof t == "object") for (let s in t) s !== "parent" && (sl(t[s], e), s === "nodes" && (t.group = Fr(Ey(t, e)), delete t[s]));
  return t;
}
function ky(t, e) {
  if (e.parser === "less" && t.startsWith("~`")) return { type: "value-unknown", value: t };
  let s = null;
  try {
    s = new rl.default(t, { loose: true }).parse();
  } catch {
    return { type: "value-unknown", value: t };
  }
  s.text = t;
  let r = sl(s, e);
  return X(r, "value-", /^selector-/u);
}
var pe = ky;
var Sy = /* @__PURE__ */ new Set(["import", "use", "forward"]);
function Ty(t) {
  return Sy.has(t);
}
var nl = Ty;
function Cy(t, e) {
  return e.parser !== "scss" || !t.selector ? false : t.selector.replace(/\/\*.*?\*\//u, "").replace(/\/\/.*\n/u, "").trim().endsWith(":");
}
var il = Cy;
var Oy = /(\s*)(!default).*$/u, Ay = /(\s*)(!global).*$/u;
function ll(t, e) {
  var s, r;
  if (t && typeof t == "object") {
    delete t.parent;
    for (let u in t) ll(t[u], e);
    if (!t.type) return t;
    if (t.raws ?? (t.raws = {}), t.type === "css-decl" && typeof t.prop == "string" && t.prop.startsWith("--") && typeof t.value == "string" && t.value.startsWith("{")) {
      let u;
      if (t.value.trimEnd().endsWith("}")) {
        let a = e.originalText.slice(0, t.source.start.offset), c = "a".repeat(t.prop.length) + e.originalText.slice(t.source.start.offset + t.prop.length, t.source.end.offset), f = E(false, a, /[^\n]/gu, " ") + c, p;
        e.parser === "scss" ? p = pl : e.parser === "less" ? p = fl : p = cl;
        let l;
        try {
          l = p(f, { ...e });
        } catch {
        }
        ((s = l == null ? void 0 : l.nodes) == null ? void 0 : s.length) === 1 && l.nodes[0].type === "css-rule" && (u = l.nodes[0].nodes);
      }
      return u ? t.value = { type: "css-rule", nodes: u } : t.value = { type: "value-unknown", value: t.raws.value.raw }, t;
    }
    let n = "";
    typeof t.selector == "string" && (n = t.raws.selector ? t.raws.selector.scss ?? t.raws.selector.raw : t.selector, t.raws.between && t.raws.between.trim().length > 0 && (n += t.raws.between), t.raws.selector = n);
    let i = "";
    typeof t.value == "string" && (i = t.raws.value ? t.raws.value.scss ?? t.raws.value.raw : t.value, t.raws.value = i.trim());
    let o = "";
    if (typeof t.params == "string" && (o = t.raws.params ? t.raws.params.scss ?? t.raws.params.raw : t.params, t.raws.afterName && t.raws.afterName.trim().length > 0 && (o = t.raws.afterName + o), t.raws.between && t.raws.between.trim().length > 0 && (o = o + t.raws.between), o = o.trim(), t.raws.params = o), n.trim().length > 0) return n.startsWith("@") && n.endsWith(":") ? t : t.mixin ? (t.selector = pe(n, e), t) : (il(t, e) && (t.isSCSSNesterProperty = true), t.selector = ee(n), t);
    if (i.trim().length > 0) {
      let u = i.match(Oy);
      u && (i = i.slice(0, u.index), t.scssDefault = true, u[0].trim() !== "!default" && (t.raws.scssDefault = u[0]));
      let a = i.match(Ay);
      if (a && (i = i.slice(0, a.index), t.scssGlobal = true, a[0].trim() !== "!global" && (t.raws.scssGlobal = a[0])), i.startsWith("progid:")) return { type: "value-unknown", value: i };
      t.value = pe(i, e);
    }
    if (e.parser === "less" && t.type === "css-decl" && i.startsWith("extend(") && (t.extend || (t.extend = t.raws.between === ":"), t.extend && !t.selector && (delete t.value, t.selector = ee(i.slice(7, -1)))), t.type === "css-atrule") {
      if (e.parser === "less") {
        if (t.mixin) {
          let u = t.raws.identifier + t.name + t.raws.afterName + t.raws.params;
          return t.selector = ee(u), delete t.params, t;
        }
        if (t.function) return t;
      }
      if (e.parser === "css" && t.name === "custom-selector") {
        let u = t.params.match(/:--\S+\s+/u)[0].trim();
        return t.customSelector = u, t.selector = ee(t.params.slice(u.length).trim()), delete t.params, t;
      }
      if (e.parser === "less") {
        if (t.name.includes(":") && !t.params) {
          t.variable = true;
          let u = t.name.split(":");
          t.name = u[0], t.value = pe(u.slice(1).join(":"), e);
        }
        if (!["page", "nest", "keyframes"].includes(t.name) && ((r = t.params) == null ? void 0 : r[0]) === ":") {
          t.variable = true;
          let u = t.params.slice(1);
          u && (t.value = pe(u, e)), t.raws.afterName += ":";
        }
        if (t.variable) return delete t.params, t.value || delete t.value, t;
      }
    }
    if (t.type === "css-atrule" && o.length > 0) {
      let { name: u } = t, a = t.name.toLowerCase();
      return u === "warn" || u === "error" ? (t.params = { type: "media-unknown", value: o }, t) : u === "extend" || u === "nest" ? (t.selector = ee(o), delete t.params, t) : u === "at-root" ? (/^\(\s*(?:without|with)\s*:.+\)$/su.test(o) ? t.params = pe(o, e) : (t.selector = ee(o), delete t.params), t) : nl(a) ? (t.import = true, delete t.filename, t.params = pe(o, e), t) : ["namespace", "supports", "if", "else", "for", "each", "while", "debug", "mixin", "include", "function", "return", "define-mixin", "add-mixin"].includes(u) ? (o = o.replace(/(\$\S+?)(\s+)?\.{3}/u, "$1...$2"), o = o.replace(/^(?!if)(\S+)(\s+)\(/u, "$1($2"), t.value = pe(o, e), delete t.params, t) : ["media", "custom-media"].includes(a) ? o.includes("#{") ? { type: "media-unknown", value: o } : (t.params = ma(o), t) : (t.params = o, t);
    }
  }
  return t;
}
function Ks(t, e, s) {
  let r = Ze(e), { frontMatter: n } = r;
  e = r.content;
  let i;
  try {
    i = t(e, { map: false });
  } catch (o) {
    let { name: u, reason: a, line: c, column: f } = o;
    throw typeof c != "number" ? o : aa(`${u}: ${a}`, { loc: { start: { line: c, column: f } }, cause: o });
  }
  return s.originalText = e, i = ll(X(i, "css-"), s), Kr(i, e), n && (n.source = { startOffset: 0, endOffset: n.raw.length }, i.frontMatter = n), i;
}
function cl(t, e = {}) {
  return Ks(ol.default.default, t, e);
}
function fl(t, e = {}) {
  return Ks((s) => al.default.parse(kn(s)), t, e);
}
function pl(t, e = {}) {
  return Ks(ul.default, t, e);
}
var Qs = { astFormat: "postcss", hasPragma: Mn, locStart: P, locEnd: R }, Ny = { ...Qs, parse: cl }, Py = { ...Qs, parse: fl }, Ry = { ...Qs, parse: pl };
var Iy = { postcss: yi };
var Gb = Xs;
export {
  Gb as default,
  gi as languages,
  vi as options,
  Js as parsers,
  Iy as printers
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGNzcy1EVGFiaWxmdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0aWVyL3BsdWdpbnMvcG9zdGNzcy5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGhsPU9iamVjdC5jcmVhdGU7dmFyICRyPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgZGw9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgbWw9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIHlsPU9iamVjdC5nZXRQcm90b3R5cGVPZixnbD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBnPSh0LGUpPT4oKT0+KGV8fHQoKGU9e2V4cG9ydHM6e319KS5leHBvcnRzLGUpLGUuZXhwb3J0cyksZW49KHQsZSk9Pntmb3IodmFyIHMgaW4gZSkkcih0LHMse2dldDplW3NdLGVudW1lcmFibGU6ITB9KX0sd2w9KHQsZSxzLHIpPT57aWYoZSYmdHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBuIG9mIG1sKGUpKSFnbC5jYWxsKHQsbikmJm4hPT1zJiYkcih0LG4se2dldDooKT0+ZVtuXSxlbnVtZXJhYmxlOiEocj1kbChlLG4pKXx8ci5lbnVtZXJhYmxlfSk7cmV0dXJuIHR9O3ZhciB4ZT0odCxlLHMpPT4ocz10IT1udWxsP2hsKHlsKHQpKTp7fSx3bChlfHwhdHx8IXQuX19lc01vZHVsZT8kcihzLFwiZGVmYXVsdFwiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KTpzLHQpKTt2YXIgYmk9ZygoeHYsc3MpPT57dmFyIF89U3RyaW5nLHhpPWZ1bmN0aW9uKCl7cmV0dXJue2lzQ29sb3JTdXBwb3J0ZWQ6ITEscmVzZXQ6Xyxib2xkOl8sZGltOl8saXRhbGljOl8sdW5kZXJsaW5lOl8saW52ZXJzZTpfLGhpZGRlbjpfLHN0cmlrZXRocm91Z2g6XyxibGFjazpfLHJlZDpfLGdyZWVuOl8seWVsbG93Ol8sYmx1ZTpfLG1hZ2VudGE6XyxjeWFuOl8sd2hpdGU6XyxncmF5Ol8sYmdCbGFjazpfLGJnUmVkOl8sYmdHcmVlbjpfLGJnWWVsbG93Ol8sYmdCbHVlOl8sYmdNYWdlbnRhOl8sYmdDeWFuOl8sYmdXaGl0ZTpfLGJsYWNrQnJpZ2h0Ol8scmVkQnJpZ2h0Ol8sZ3JlZW5CcmlnaHQ6Xyx5ZWxsb3dCcmlnaHQ6XyxibHVlQnJpZ2h0Ol8sbWFnZW50YUJyaWdodDpfLGN5YW5CcmlnaHQ6Xyx3aGl0ZUJyaWdodDpfLGJnQmxhY2tCcmlnaHQ6XyxiZ1JlZEJyaWdodDpfLGJnR3JlZW5CcmlnaHQ6XyxiZ1llbGxvd0JyaWdodDpfLGJnQmx1ZUJyaWdodDpfLGJnTWFnZW50YUJyaWdodDpfLGJnQ3lhbkJyaWdodDpfLGJnV2hpdGVCcmlnaHQ6X319O3NzLmV4cG9ydHM9eGkoKTtzcy5leHBvcnRzLmNyZWF0ZUNvbG9ycz14aX0pO3ZhciBucz1nKCgpPT57fSk7dmFyIFd0PWcoKEV2LGtpKT0+e1widXNlIHN0cmljdFwiO3ZhciBfaT1iaSgpLEVpPW5zKCksb3Q9Y2xhc3MgdCBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUscyxyLG4saSxvKXtzdXBlcihlKSx0aGlzLm5hbWU9XCJDc3NTeW50YXhFcnJvclwiLHRoaXMucmVhc29uPWUsaSYmKHRoaXMuZmlsZT1pKSxuJiYodGhpcy5zb3VyY2U9biksbyYmKHRoaXMucGx1Z2luPW8pLHR5cGVvZiBzPFwidVwiJiZ0eXBlb2YgcjxcInVcIiYmKHR5cGVvZiBzPT1cIm51bWJlclwiPyh0aGlzLmxpbmU9cyx0aGlzLmNvbHVtbj1yKToodGhpcy5saW5lPXMubGluZSx0aGlzLmNvbHVtbj1zLmNvbHVtbix0aGlzLmVuZExpbmU9ci5saW5lLHRoaXMuZW5kQ29sdW1uPXIuY29sdW1uKSksdGhpcy5zZXRNZXNzYWdlKCksRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsdCl9c2V0TWVzc2FnZSgpe3RoaXMubWVzc2FnZT10aGlzLnBsdWdpbj90aGlzLnBsdWdpbitcIjogXCI6XCJcIix0aGlzLm1lc3NhZ2UrPXRoaXMuZmlsZT90aGlzLmZpbGU6XCI8Y3NzIGlucHV0PlwiLHR5cGVvZiB0aGlzLmxpbmU8XCJ1XCImJih0aGlzLm1lc3NhZ2UrPVwiOlwiK3RoaXMubGluZStcIjpcIit0aGlzLmNvbHVtbiksdGhpcy5tZXNzYWdlKz1cIjogXCIrdGhpcy5yZWFzb259c2hvd1NvdXJjZUNvZGUoZSl7aWYoIXRoaXMuc291cmNlKXJldHVyblwiXCI7bGV0IHM9dGhpcy5zb3VyY2U7ZT09bnVsbCYmKGU9X2kuaXNDb2xvclN1cHBvcnRlZCk7bGV0IHI9Zj0+ZixuPWY9PmYsaT1mPT5mO2lmKGUpe2xldHtib2xkOmYsZ3JheTpwLHJlZDpsfT1faS5jcmVhdGVDb2xvcnMoITApO249eT0+ZihsKHkpKSxyPXk9PnAoeSksRWkmJihpPXk9PkVpKHkpKX1sZXQgbz1zLnNwbGl0KC9cXHI/XFxuLyksdT1NYXRoLm1heCh0aGlzLmxpbmUtMywwKSxhPU1hdGgubWluKHRoaXMubGluZSsyLG8ubGVuZ3RoKSxjPVN0cmluZyhhKS5sZW5ndGg7cmV0dXJuIG8uc2xpY2UodSxhKS5tYXAoKGYscCk9PntsZXQgbD11KzErcCx5PVwiIFwiKyhcIiBcIitsKS5zbGljZSgtYykrXCIgfCBcIjtpZihsPT09dGhpcy5saW5lKXtpZihmLmxlbmd0aD4xNjApe2xldCBoPTIwLGQ9TWF0aC5tYXgoMCx0aGlzLmNvbHVtbi1oKSxtPU1hdGgubWF4KHRoaXMuY29sdW1uK2gsdGhpcy5lbmRDb2x1bW4raCksYj1mLnNsaWNlKGQsbSksdz1yKHkucmVwbGFjZSgvXFxkL2csXCIgXCIpKStmLnNsaWNlKDAsTWF0aC5taW4odGhpcy5jb2x1bW4tMSxoLTEpKS5yZXBsYWNlKC9bXlxcdF0vZyxcIiBcIik7cmV0dXJuIG4oXCI+XCIpK3IoeSkraShiKStgXG4gYCt3K24oXCJeXCIpfWxldCB4PXIoeS5yZXBsYWNlKC9cXGQvZyxcIiBcIikpK2Yuc2xpY2UoMCx0aGlzLmNvbHVtbi0xKS5yZXBsYWNlKC9bXlxcdF0vZyxcIiBcIik7cmV0dXJuIG4oXCI+XCIpK3IoeSkraShmKStgXG4gYCt4K24oXCJeXCIpfXJldHVyblwiIFwiK3IoeSkraShmKX0pLmpvaW4oYFxuYCl9dG9TdHJpbmcoKXtsZXQgZT10aGlzLnNob3dTb3VyY2VDb2RlKCk7cmV0dXJuIGUmJihlPWBcblxuYCtlK2BcbmApLHRoaXMubmFtZStcIjogXCIrdGhpcy5tZXNzYWdlK2V9fTtraS5leHBvcnRzPW90O290LmRlZmF1bHQ9b3R9KTt2YXIgWXQ9Zygoa3YsVGkpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIFNpPXthZnRlcjpgXG5gLGJlZm9yZUNsb3NlOmBcbmAsYmVmb3JlQ29tbWVudDpgXG5gLGJlZm9yZURlY2w6YFxuYCxiZWZvcmVPcGVuOlwiIFwiLGJlZm9yZVJ1bGU6YFxuYCxjb2xvbjpcIjogXCIsY29tbWVudExlZnQ6XCIgXCIsY29tbWVudFJpZ2h0OlwiIFwiLGVtcHR5Qm9keTpcIlwiLGluZGVudDpcIiAgICBcIixzZW1pY29sb246ITF9O2Z1bmN0aW9uIHdjKHQpe3JldHVybiB0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKX12YXIgYXQ9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy5idWlsZGVyPWV9YXRydWxlKGUscyl7bGV0IHI9XCJAXCIrZS5uYW1lLG49ZS5wYXJhbXM/dGhpcy5yYXdWYWx1ZShlLFwicGFyYW1zXCIpOlwiXCI7aWYodHlwZW9mIGUucmF3cy5hZnRlck5hbWU8XCJ1XCI/cis9ZS5yYXdzLmFmdGVyTmFtZTpuJiYocis9XCIgXCIpLGUubm9kZXMpdGhpcy5ibG9jayhlLHIrbik7ZWxzZXtsZXQgaT0oZS5yYXdzLmJldHdlZW58fFwiXCIpKyhzP1wiO1wiOlwiXCIpO3RoaXMuYnVpbGRlcihyK24raSxlKX19YmVmb3JlQWZ0ZXIoZSxzKXtsZXQgcjtlLnR5cGU9PT1cImRlY2xcIj9yPXRoaXMucmF3KGUsbnVsbCxcImJlZm9yZURlY2xcIik6ZS50eXBlPT09XCJjb21tZW50XCI/cj10aGlzLnJhdyhlLG51bGwsXCJiZWZvcmVDb21tZW50XCIpOnM9PT1cImJlZm9yZVwiP3I9dGhpcy5yYXcoZSxudWxsLFwiYmVmb3JlUnVsZVwiKTpyPXRoaXMucmF3KGUsbnVsbCxcImJlZm9yZUNsb3NlXCIpO2xldCBuPWUucGFyZW50LGk9MDtmb3IoO24mJm4udHlwZSE9PVwicm9vdFwiOylpKz0xLG49bi5wYXJlbnQ7aWYoci5pbmNsdWRlcyhgXG5gKSl7bGV0IG89dGhpcy5yYXcoZSxudWxsLFwiaW5kZW50XCIpO2lmKG8ubGVuZ3RoKWZvcihsZXQgdT0wO3U8aTt1Kyspcis9b31yZXR1cm4gcn1ibG9jayhlLHMpe2xldCByPXRoaXMucmF3KGUsXCJiZXR3ZWVuXCIsXCJiZWZvcmVPcGVuXCIpO3RoaXMuYnVpbGRlcihzK3IrXCJ7XCIsZSxcInN0YXJ0XCIpO2xldCBuO2Uubm9kZXMmJmUubm9kZXMubGVuZ3RoPyh0aGlzLmJvZHkoZSksbj10aGlzLnJhdyhlLFwiYWZ0ZXJcIikpOm49dGhpcy5yYXcoZSxcImFmdGVyXCIsXCJlbXB0eUJvZHlcIiksbiYmdGhpcy5idWlsZGVyKG4pLHRoaXMuYnVpbGRlcihcIn1cIixlLFwiZW5kXCIpfWJvZHkoZSl7bGV0IHM9ZS5ub2Rlcy5sZW5ndGgtMTtmb3IoO3M+MCYmZS5ub2Rlc1tzXS50eXBlPT09XCJjb21tZW50XCI7KXMtPTE7bGV0IHI9dGhpcy5yYXcoZSxcInNlbWljb2xvblwiKTtmb3IobGV0IG49MDtuPGUubm9kZXMubGVuZ3RoO24rKyl7bGV0IGk9ZS5ub2Rlc1tuXSxvPXRoaXMucmF3KGksXCJiZWZvcmVcIik7byYmdGhpcy5idWlsZGVyKG8pLHRoaXMuc3RyaW5naWZ5KGkscyE9PW58fHIpfX1jb21tZW50KGUpe2xldCBzPXRoaXMucmF3KGUsXCJsZWZ0XCIsXCJjb21tZW50TGVmdFwiKSxyPXRoaXMucmF3KGUsXCJyaWdodFwiLFwiY29tbWVudFJpZ2h0XCIpO3RoaXMuYnVpbGRlcihcIi8qXCIrcytlLnRleHQrcitcIiovXCIsZSl9ZGVjbChlLHMpe2xldCByPXRoaXMucmF3KGUsXCJiZXR3ZWVuXCIsXCJjb2xvblwiKSxuPWUucHJvcCtyK3RoaXMucmF3VmFsdWUoZSxcInZhbHVlXCIpO2UuaW1wb3J0YW50JiYobis9ZS5yYXdzLmltcG9ydGFudHx8XCIgIWltcG9ydGFudFwiKSxzJiYobis9XCI7XCIpLHRoaXMuYnVpbGRlcihuLGUpfWRvY3VtZW50KGUpe3RoaXMuYm9keShlKX1yYXcoZSxzLHIpe2xldCBuO2lmKHJ8fChyPXMpLHMmJihuPWUucmF3c1tzXSx0eXBlb2YgbjxcInVcIikpcmV0dXJuIG47bGV0IGk9ZS5wYXJlbnQ7aWYocj09PVwiYmVmb3JlXCImJighaXx8aS50eXBlPT09XCJyb290XCImJmkuZmlyc3Q9PT1lfHxpJiZpLnR5cGU9PT1cImRvY3VtZW50XCIpKXJldHVyblwiXCI7aWYoIWkpcmV0dXJuIFNpW3JdO2xldCBvPWUucm9vdCgpO2lmKG8ucmF3Q2FjaGV8fChvLnJhd0NhY2hlPXt9KSx0eXBlb2Ygby5yYXdDYWNoZVtyXTxcInVcIilyZXR1cm4gby5yYXdDYWNoZVtyXTtpZihyPT09XCJiZWZvcmVcInx8cj09PVwiYWZ0ZXJcIilyZXR1cm4gdGhpcy5iZWZvcmVBZnRlcihlLHIpO3tsZXQgdT1cInJhd1wiK3djKHIpO3RoaXNbdV0/bj10aGlzW3VdKG8sZSk6by53YWxrKGE9PntpZihuPWEucmF3c1tzXSx0eXBlb2YgbjxcInVcIilyZXR1cm4hMX0pfXJldHVybiB0eXBlb2Ygbj5cInVcIiYmKG49U2lbcl0pLG8ucmF3Q2FjaGVbcl09bixufXJhd0JlZm9yZUNsb3NlKGUpe2xldCBzO3JldHVybiBlLndhbGsocj0+e2lmKHIubm9kZXMmJnIubm9kZXMubGVuZ3RoPjAmJnR5cGVvZiByLnJhd3MuYWZ0ZXI8XCJ1XCIpcmV0dXJuIHM9ci5yYXdzLmFmdGVyLHMuaW5jbHVkZXMoYFxuYCkmJihzPXMucmVwbGFjZSgvW15cXG5dKyQvLFwiXCIpKSwhMX0pLHMmJihzPXMucmVwbGFjZSgvXFxTL2csXCJcIikpLHN9cmF3QmVmb3JlQ29tbWVudChlLHMpe2xldCByO3JldHVybiBlLndhbGtDb21tZW50cyhuPT57aWYodHlwZW9mIG4ucmF3cy5iZWZvcmU8XCJ1XCIpcmV0dXJuIHI9bi5yYXdzLmJlZm9yZSxyLmluY2x1ZGVzKGBcbmApJiYocj1yLnJlcGxhY2UoL1teXFxuXSskLyxcIlwiKSksITF9KSx0eXBlb2Ygcj5cInVcIj9yPXRoaXMucmF3KHMsbnVsbCxcImJlZm9yZURlY2xcIik6ciYmKHI9ci5yZXBsYWNlKC9cXFMvZyxcIlwiKSkscn1yYXdCZWZvcmVEZWNsKGUscyl7bGV0IHI7cmV0dXJuIGUud2Fsa0RlY2xzKG49PntpZih0eXBlb2Ygbi5yYXdzLmJlZm9yZTxcInVcIilyZXR1cm4gcj1uLnJhd3MuYmVmb3JlLHIuaW5jbHVkZXMoYFxuYCkmJihyPXIucmVwbGFjZSgvW15cXG5dKyQvLFwiXCIpKSwhMX0pLHR5cGVvZiByPlwidVwiP3I9dGhpcy5yYXcocyxudWxsLFwiYmVmb3JlUnVsZVwiKTpyJiYocj1yLnJlcGxhY2UoL1xcUy9nLFwiXCIpKSxyfXJhd0JlZm9yZU9wZW4oZSl7bGV0IHM7cmV0dXJuIGUud2FsayhyPT57aWYoci50eXBlIT09XCJkZWNsXCImJihzPXIucmF3cy5iZXR3ZWVuLHR5cGVvZiBzPFwidVwiKSlyZXR1cm4hMX0pLHN9cmF3QmVmb3JlUnVsZShlKXtsZXQgcztyZXR1cm4gZS53YWxrKHI9PntpZihyLm5vZGVzJiYoci5wYXJlbnQhPT1lfHxlLmZpcnN0IT09cikmJnR5cGVvZiByLnJhd3MuYmVmb3JlPFwidVwiKXJldHVybiBzPXIucmF3cy5iZWZvcmUscy5pbmNsdWRlcyhgXG5gKSYmKHM9cy5yZXBsYWNlKC9bXlxcbl0rJC8sXCJcIikpLCExfSkscyYmKHM9cy5yZXBsYWNlKC9cXFMvZyxcIlwiKSksc31yYXdDb2xvbihlKXtsZXQgcztyZXR1cm4gZS53YWxrRGVjbHMocj0+e2lmKHR5cGVvZiByLnJhd3MuYmV0d2VlbjxcInVcIilyZXR1cm4gcz1yLnJhd3MuYmV0d2Vlbi5yZXBsYWNlKC9bXlxcczpdL2csXCJcIiksITF9KSxzfXJhd0VtcHR5Qm9keShlKXtsZXQgcztyZXR1cm4gZS53YWxrKHI9PntpZihyLm5vZGVzJiZyLm5vZGVzLmxlbmd0aD09PTAmJihzPXIucmF3cy5hZnRlcix0eXBlb2YgczxcInVcIikpcmV0dXJuITF9KSxzfXJhd0luZGVudChlKXtpZihlLnJhd3MuaW5kZW50KXJldHVybiBlLnJhd3MuaW5kZW50O2xldCBzO3JldHVybiBlLndhbGsocj0+e2xldCBuPXIucGFyZW50O2lmKG4mJm4hPT1lJiZuLnBhcmVudCYmbi5wYXJlbnQ9PT1lJiZ0eXBlb2Ygci5yYXdzLmJlZm9yZTxcInVcIil7bGV0IGk9ci5yYXdzLmJlZm9yZS5zcGxpdChgXG5gKTtyZXR1cm4gcz1pW2kubGVuZ3RoLTFdLHM9cy5yZXBsYWNlKC9cXFMvZyxcIlwiKSwhMX19KSxzfXJhd1NlbWljb2xvbihlKXtsZXQgcztyZXR1cm4gZS53YWxrKHI9PntpZihyLm5vZGVzJiZyLm5vZGVzLmxlbmd0aCYmci5sYXN0LnR5cGU9PT1cImRlY2xcIiYmKHM9ci5yYXdzLnNlbWljb2xvbix0eXBlb2YgczxcInVcIikpcmV0dXJuITF9KSxzfXJhd1ZhbHVlKGUscyl7bGV0IHI9ZVtzXSxuPWUucmF3c1tzXTtyZXR1cm4gbiYmbi52YWx1ZT09PXI/bi5yYXc6cn1yb290KGUpe3RoaXMuYm9keShlKSxlLnJhd3MuYWZ0ZXImJnRoaXMuYnVpbGRlcihlLnJhd3MuYWZ0ZXIpfXJ1bGUoZSl7dGhpcy5ibG9jayhlLHRoaXMucmF3VmFsdWUoZSxcInNlbGVjdG9yXCIpKSxlLnJhd3Mub3duU2VtaWNvbG9uJiZ0aGlzLmJ1aWxkZXIoZS5yYXdzLm93blNlbWljb2xvbixlLFwiZW5kXCIpfXN0cmluZ2lmeShlLHMpe2lmKCF0aGlzW2UudHlwZV0pdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBBU1Qgbm9kZSB0eXBlIFwiK2UudHlwZStcIi4gTWF5YmUgeW91IG5lZWQgdG8gY2hhbmdlIFBvc3RDU1Mgc3RyaW5naWZpZXIuXCIpO3RoaXNbZS50eXBlXShlLHMpfX07VGkuZXhwb3J0cz1hdDthdC5kZWZhdWx0PWF0fSk7dmFyIHV0PWcoKFN2LENpKT0+e1widXNlIHN0cmljdFwiO3ZhciB2Yz1ZdCgpO2Z1bmN0aW9uIGlzKHQsZSl7bmV3IHZjKGUpLnN0cmluZ2lmeSh0KX1DaS5leHBvcnRzPWlzO2lzLmRlZmF1bHQ9aXN9KTt2YXIgVnQ9ZygoVHYsb3MpPT57XCJ1c2Ugc3RyaWN0XCI7b3MuZXhwb3J0cy5pc0NsZWFuPVN5bWJvbChcImlzQ2xlYW5cIik7b3MuZXhwb3J0cy5teT1TeW1ib2woXCJteVwiKX0pO3ZhciBwdD1nKChDdixPaSk9PntcInVzZSBzdHJpY3RcIjt2YXIgeGM9V3QoKSxiYz1ZdCgpLF9jPXV0KCkse2lzQ2xlYW46bHQsbXk6RWN9PVZ0KCk7ZnVuY3Rpb24gYXModCxlKXtsZXQgcz1uZXcgdC5jb25zdHJ1Y3Rvcjtmb3IobGV0IHIgaW4gdCl7aWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHIpfHxyPT09XCJwcm94eUNhY2hlXCIpY29udGludWU7bGV0IG49dFtyXSxpPXR5cGVvZiBuO3I9PT1cInBhcmVudFwiJiZpPT09XCJvYmplY3RcIj9lJiYoc1tyXT1lKTpyPT09XCJzb3VyY2VcIj9zW3JdPW46QXJyYXkuaXNBcnJheShuKT9zW3JdPW4ubWFwKG89PmFzKG8scykpOihpPT09XCJvYmplY3RcIiYmbiE9PW51bGwmJihuPWFzKG4pKSxzW3JdPW4pfXJldHVybiBzfWZ1bmN0aW9uIGN0KHQsZSl7aWYoZSYmdHlwZW9mIGUub2Zmc2V0PFwidVwiKXJldHVybiBlLm9mZnNldDtsZXQgcz0xLHI9MSxuPTA7Zm9yKGxldCBpPTA7aTx0Lmxlbmd0aDtpKyspe2lmKHI9PT1lLmxpbmUmJnM9PT1lLmNvbHVtbil7bj1pO2JyZWFrfXRbaV09PT1gXG5gPyhzPTEscis9MSk6cys9MX1yZXR1cm4gbn12YXIgZnQ9Y2xhc3N7Z2V0IHByb3h5T2YoKXtyZXR1cm4gdGhpc31jb25zdHJ1Y3RvcihlPXt9KXt0aGlzLnJhd3M9e30sdGhpc1tsdF09ITEsdGhpc1tFY109ITA7Zm9yKGxldCBzIGluIGUpaWYocz09PVwibm9kZXNcIil7dGhpcy5ub2Rlcz1bXTtmb3IobGV0IHIgb2YgZVtzXSl0eXBlb2Ygci5jbG9uZT09XCJmdW5jdGlvblwiP3RoaXMuYXBwZW5kKHIuY2xvbmUoKSk6dGhpcy5hcHBlbmQocil9ZWxzZSB0aGlzW3NdPWVbc119YWRkVG9FcnJvcihlKXtpZihlLnBvc3Rjc3NOb2RlPXRoaXMsZS5zdGFjayYmdGhpcy5zb3VyY2UmJi9cXG5cXHN7NH1hdCAvLnRlc3QoZS5zdGFjaykpe2xldCBzPXRoaXMuc291cmNlO2Uuc3RhY2s9ZS5zdGFjay5yZXBsYWNlKC9cXG5cXHN7NH1hdCAvLGAkJiR7cy5pbnB1dC5mcm9tfToke3Muc3RhcnQubGluZX06JHtzLnN0YXJ0LmNvbHVtbn0kJmApfXJldHVybiBlfWFmdGVyKGUpe3JldHVybiB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLGUpLHRoaXN9YXNzaWduKGU9e30pe2ZvcihsZXQgcyBpbiBlKXRoaXNbc109ZVtzXTtyZXR1cm4gdGhpc31iZWZvcmUoZSl7cmV0dXJuIHRoaXMucGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLGUpLHRoaXN9Y2xlYW5SYXdzKGUpe2RlbGV0ZSB0aGlzLnJhd3MuYmVmb3JlLGRlbGV0ZSB0aGlzLnJhd3MuYWZ0ZXIsZXx8ZGVsZXRlIHRoaXMucmF3cy5iZXR3ZWVufWNsb25lKGU9e30pe2xldCBzPWFzKHRoaXMpO2ZvcihsZXQgciBpbiBlKXNbcl09ZVtyXTtyZXR1cm4gc31jbG9uZUFmdGVyKGU9e30pe2xldCBzPXRoaXMuY2xvbmUoZSk7cmV0dXJuIHRoaXMucGFyZW50Lmluc2VydEFmdGVyKHRoaXMscyksc31jbG9uZUJlZm9yZShlPXt9KXtsZXQgcz10aGlzLmNsb25lKGUpO3JldHVybiB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcyxzKSxzfWVycm9yKGUscz17fSl7aWYodGhpcy5zb3VyY2Upe2xldHtlbmQ6cixzdGFydDpufT10aGlzLnJhbmdlQnkocyk7cmV0dXJuIHRoaXMuc291cmNlLmlucHV0LmVycm9yKGUse2NvbHVtbjpuLmNvbHVtbixsaW5lOm4ubGluZX0se2NvbHVtbjpyLmNvbHVtbixsaW5lOnIubGluZX0scyl9cmV0dXJuIG5ldyB4YyhlKX1nZXRQcm94eVByb2Nlc3Nvcigpe3JldHVybntnZXQoZSxzKXtyZXR1cm4gcz09PVwicHJveHlPZlwiP2U6cz09PVwicm9vdFwiPygpPT5lLnJvb3QoKS50b1Byb3h5KCk6ZVtzXX0sc2V0KGUscyxyKXtyZXR1cm4gZVtzXT09PXJ8fChlW3NdPXIsKHM9PT1cInByb3BcInx8cz09PVwidmFsdWVcInx8cz09PVwibmFtZVwifHxzPT09XCJwYXJhbXNcInx8cz09PVwiaW1wb3J0YW50XCJ8fHM9PT1cInRleHRcIikmJmUubWFya0RpcnR5KCkpLCEwfX19bWFya0NsZWFuKCl7dGhpc1tsdF09ITB9bWFya0RpcnR5KCl7aWYodGhpc1tsdF0pe3RoaXNbbHRdPSExO2xldCBlPXRoaXM7Zm9yKDtlPWUucGFyZW50OyllW2x0XT0hMX19bmV4dCgpe2lmKCF0aGlzLnBhcmVudClyZXR1cm47bGV0IGU9dGhpcy5wYXJlbnQuaW5kZXgodGhpcyk7cmV0dXJuIHRoaXMucGFyZW50Lm5vZGVzW2UrMV19cG9zaXRpb25CeShlKXtsZXQgcz10aGlzLnNvdXJjZS5zdGFydDtpZihlLmluZGV4KXM9dGhpcy5wb3NpdGlvbkluc2lkZShlLmluZGV4KTtlbHNlIGlmKGUud29yZCl7bGV0IHI9XCJkb2N1bWVudFwiaW4gdGhpcy5zb3VyY2UuaW5wdXQ/dGhpcy5zb3VyY2UuaW5wdXQuZG9jdW1lbnQ6dGhpcy5zb3VyY2UuaW5wdXQuY3NzLGk9ci5zbGljZShjdChyLHRoaXMuc291cmNlLnN0YXJ0KSxjdChyLHRoaXMuc291cmNlLmVuZCkpLmluZGV4T2YoZS53b3JkKTtpIT09LTEmJihzPXRoaXMucG9zaXRpb25JbnNpZGUoaSkpfXJldHVybiBzfXBvc2l0aW9uSW5zaWRlKGUpe2xldCBzPXRoaXMuc291cmNlLnN0YXJ0LmNvbHVtbixyPXRoaXMuc291cmNlLnN0YXJ0LmxpbmUsbj1cImRvY3VtZW50XCJpbiB0aGlzLnNvdXJjZS5pbnB1dD90aGlzLnNvdXJjZS5pbnB1dC5kb2N1bWVudDp0aGlzLnNvdXJjZS5pbnB1dC5jc3MsaT1jdChuLHRoaXMuc291cmNlLnN0YXJ0KSxvPWkrZTtmb3IobGV0IHU9aTt1PG87dSsrKW5bdV09PT1gXG5gPyhzPTEscis9MSk6cys9MTtyZXR1cm57Y29sdW1uOnMsbGluZTpyfX1wcmV2KCl7aWYoIXRoaXMucGFyZW50KXJldHVybjtsZXQgZT10aGlzLnBhcmVudC5pbmRleCh0aGlzKTtyZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbZS0xXX1yYW5nZUJ5KGUpe2xldCBzPXtjb2x1bW46dGhpcy5zb3VyY2Uuc3RhcnQuY29sdW1uLGxpbmU6dGhpcy5zb3VyY2Uuc3RhcnQubGluZX0scj10aGlzLnNvdXJjZS5lbmQ/e2NvbHVtbjp0aGlzLnNvdXJjZS5lbmQuY29sdW1uKzEsbGluZTp0aGlzLnNvdXJjZS5lbmQubGluZX06e2NvbHVtbjpzLmNvbHVtbisxLGxpbmU6cy5saW5lfTtpZihlLndvcmQpe2xldCBuPVwiZG9jdW1lbnRcImluIHRoaXMuc291cmNlLmlucHV0P3RoaXMuc291cmNlLmlucHV0LmRvY3VtZW50OnRoaXMuc291cmNlLmlucHV0LmNzcyxvPW4uc2xpY2UoY3Qobix0aGlzLnNvdXJjZS5zdGFydCksY3Qobix0aGlzLnNvdXJjZS5lbmQpKS5pbmRleE9mKGUud29yZCk7byE9PS0xJiYocz10aGlzLnBvc2l0aW9uSW5zaWRlKG8pLHI9dGhpcy5wb3NpdGlvbkluc2lkZShvK2Uud29yZC5sZW5ndGgpKX1lbHNlIGUuc3RhcnQ/cz17Y29sdW1uOmUuc3RhcnQuY29sdW1uLGxpbmU6ZS5zdGFydC5saW5lfTplLmluZGV4JiYocz10aGlzLnBvc2l0aW9uSW5zaWRlKGUuaW5kZXgpKSxlLmVuZD9yPXtjb2x1bW46ZS5lbmQuY29sdW1uLGxpbmU6ZS5lbmQubGluZX06dHlwZW9mIGUuZW5kSW5kZXg9PVwibnVtYmVyXCI/cj10aGlzLnBvc2l0aW9uSW5zaWRlKGUuZW5kSW5kZXgpOmUuaW5kZXgmJihyPXRoaXMucG9zaXRpb25JbnNpZGUoZS5pbmRleCsxKSk7cmV0dXJuKHIubGluZTxzLmxpbmV8fHIubGluZT09PXMubGluZSYmci5jb2x1bW48PXMuY29sdW1uKSYmKHI9e2NvbHVtbjpzLmNvbHVtbisxLGxpbmU6cy5saW5lfSkse2VuZDpyLHN0YXJ0OnN9fXJhdyhlLHMpe3JldHVybiBuZXcgYmMoKS5yYXcodGhpcyxlLHMpfXJlbW92ZSgpe3JldHVybiB0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyksdGhpcy5wYXJlbnQ9dm9pZCAwLHRoaXN9cmVwbGFjZVdpdGgoLi4uZSl7aWYodGhpcy5wYXJlbnQpe2xldCBzPXRoaXMscj0hMTtmb3IobGV0IG4gb2YgZSluPT09dGhpcz9yPSEwOnI/KHRoaXMucGFyZW50Lmluc2VydEFmdGVyKHMsbikscz1uKTp0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUocyxuKTtyfHx0aGlzLnJlbW92ZSgpfXJldHVybiB0aGlzfXJvb3QoKXtsZXQgZT10aGlzO2Zvcig7ZS5wYXJlbnQmJmUucGFyZW50LnR5cGUhPT1cImRvY3VtZW50XCI7KWU9ZS5wYXJlbnQ7cmV0dXJuIGV9dG9KU09OKGUscyl7bGV0IHI9e30sbj1zPT1udWxsO3M9c3x8bmV3IE1hcDtsZXQgaT0wO2ZvcihsZXQgbyBpbiB0aGlzKXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsbyl8fG89PT1cInBhcmVudFwifHxvPT09XCJwcm94eUNhY2hlXCIpY29udGludWU7bGV0IHU9dGhpc1tvXTtpZihBcnJheS5pc0FycmF5KHUpKXJbb109dS5tYXAoYT0+dHlwZW9mIGE9PVwib2JqZWN0XCImJmEudG9KU09OP2EudG9KU09OKG51bGwscyk6YSk7ZWxzZSBpZih0eXBlb2YgdT09XCJvYmplY3RcIiYmdS50b0pTT04pcltvXT11LnRvSlNPTihudWxsLHMpO2Vsc2UgaWYobz09PVwic291cmNlXCIpe2xldCBhPXMuZ2V0KHUuaW5wdXQpO2E9PW51bGwmJihhPWkscy5zZXQodS5pbnB1dCxpKSxpKyspLHJbb109e2VuZDp1LmVuZCxpbnB1dElkOmEsc3RhcnQ6dS5zdGFydH19ZWxzZSByW29dPXV9cmV0dXJuIG4mJihyLmlucHV0cz1bLi4ucy5rZXlzKCldLm1hcChvPT5vLnRvSlNPTigpKSkscn10b1Byb3h5KCl7cmV0dXJuIHRoaXMucHJveHlDYWNoZXx8KHRoaXMucHJveHlDYWNoZT1uZXcgUHJveHkodGhpcyx0aGlzLmdldFByb3h5UHJvY2Vzc29yKCkpKSx0aGlzLnByb3h5Q2FjaGV9dG9TdHJpbmcoZT1fYyl7ZS5zdHJpbmdpZnkmJihlPWUuc3RyaW5naWZ5KTtsZXQgcz1cIlwiO3JldHVybiBlKHRoaXMscj0+e3MrPXJ9KSxzfXdhcm4oZSxzLHIpe2xldCBuPXtub2RlOnRoaXN9O2ZvcihsZXQgaSBpbiByKW5baV09cltpXTtyZXR1cm4gZS53YXJuKHMsbil9fTtPaS5leHBvcnRzPWZ0O2Z0LmRlZmF1bHQ9ZnR9KTt2YXIgUmU9ZygoT3YsQWkpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGtjPXB0KCksaHQ9Y2xhc3MgZXh0ZW5kcyBrY3tjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLnR5cGU9XCJjb21tZW50XCJ9fTtBaS5leHBvcnRzPWh0O2h0LmRlZmF1bHQ9aHR9KTt2YXIgbXQ9ZygoQXYsTmkpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIFNjPXB0KCksZHQ9Y2xhc3MgZXh0ZW5kcyBTY3tnZXQgdmFyaWFibGUoKXtyZXR1cm4gdGhpcy5wcm9wLnN0YXJ0c1dpdGgoXCItLVwiKXx8dGhpcy5wcm9wWzBdPT09XCIkXCJ9Y29uc3RydWN0b3IoZSl7ZSYmdHlwZW9mIGUudmFsdWU8XCJ1XCImJnR5cGVvZiBlLnZhbHVlIT1cInN0cmluZ1wiJiYoZT17Li4uZSx2YWx1ZTpTdHJpbmcoZS52YWx1ZSl9KSxzdXBlcihlKSx0aGlzLnR5cGU9XCJkZWNsXCJ9fTtOaS5leHBvcnRzPWR0O2R0LmRlZmF1bHQ9ZHR9KTt2YXIgbGU9ZygoTnYsVWkpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIFBpPVJlKCksUmk9bXQoKSxUYz1wdCgpLHtpc0NsZWFuOklpLG15OnFpfT1WdCgpLHVzLExpLERpLGxzO2Z1bmN0aW9uIEJpKHQpe3JldHVybiB0Lm1hcChlPT4oZS5ub2RlcyYmKGUubm9kZXM9QmkoZS5ub2RlcykpLGRlbGV0ZSBlLnNvdXJjZSxlKSl9ZnVuY3Rpb24gTWkodCl7aWYodFtJaV09ITEsdC5wcm94eU9mLm5vZGVzKWZvcihsZXQgZSBvZiB0LnByb3h5T2Yubm9kZXMpTWkoZSl9dmFyIHo9Y2xhc3MgdCBleHRlbmRzIFRje2dldCBmaXJzdCgpe2lmKHRoaXMucHJveHlPZi5ub2RlcylyZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzWzBdfWdldCBsYXN0KCl7aWYodGhpcy5wcm94eU9mLm5vZGVzKXJldHVybiB0aGlzLnByb3h5T2Yubm9kZXNbdGhpcy5wcm94eU9mLm5vZGVzLmxlbmd0aC0xXX1hcHBlbmQoLi4uZSl7Zm9yKGxldCBzIG9mIGUpe2xldCByPXRoaXMubm9ybWFsaXplKHMsdGhpcy5sYXN0KTtmb3IobGV0IG4gb2Ygcil0aGlzLnByb3h5T2Yubm9kZXMucHVzaChuKX1yZXR1cm4gdGhpcy5tYXJrRGlydHkoKSx0aGlzfWNsZWFuUmF3cyhlKXtpZihzdXBlci5jbGVhblJhd3MoZSksdGhpcy5ub2Rlcylmb3IobGV0IHMgb2YgdGhpcy5ub2RlcylzLmNsZWFuUmF3cyhlKX1lYWNoKGUpe2lmKCF0aGlzLnByb3h5T2Yubm9kZXMpcmV0dXJuO2xldCBzPXRoaXMuZ2V0SXRlcmF0b3IoKSxyLG47Zm9yKDt0aGlzLmluZGV4ZXNbc108dGhpcy5wcm94eU9mLm5vZGVzLmxlbmd0aCYmKHI9dGhpcy5pbmRleGVzW3NdLG49ZSh0aGlzLnByb3h5T2Yubm9kZXNbcl0sciksbiE9PSExKTspdGhpcy5pbmRleGVzW3NdKz0xO3JldHVybiBkZWxldGUgdGhpcy5pbmRleGVzW3NdLG59ZXZlcnkoZSl7cmV0dXJuIHRoaXMubm9kZXMuZXZlcnkoZSl9Z2V0SXRlcmF0b3IoKXt0aGlzLmxhc3RFYWNofHwodGhpcy5sYXN0RWFjaD0wKSx0aGlzLmluZGV4ZXN8fCh0aGlzLmluZGV4ZXM9e30pLHRoaXMubGFzdEVhY2grPTE7bGV0IGU9dGhpcy5sYXN0RWFjaDtyZXR1cm4gdGhpcy5pbmRleGVzW2VdPTAsZX1nZXRQcm94eVByb2Nlc3Nvcigpe3JldHVybntnZXQoZSxzKXtyZXR1cm4gcz09PVwicHJveHlPZlwiP2U6ZVtzXT9zPT09XCJlYWNoXCJ8fHR5cGVvZiBzPT1cInN0cmluZ1wiJiZzLnN0YXJ0c1dpdGgoXCJ3YWxrXCIpPyguLi5yKT0+ZVtzXSguLi5yLm1hcChuPT50eXBlb2Ygbj09XCJmdW5jdGlvblwiPyhpLG8pPT5uKGkudG9Qcm94eSgpLG8pOm4pKTpzPT09XCJldmVyeVwifHxzPT09XCJzb21lXCI/cj0+ZVtzXSgobiwuLi5pKT0+cihuLnRvUHJveHkoKSwuLi5pKSk6cz09PVwicm9vdFwiPygpPT5lLnJvb3QoKS50b1Byb3h5KCk6cz09PVwibm9kZXNcIj9lLm5vZGVzLm1hcChyPT5yLnRvUHJveHkoKSk6cz09PVwiZmlyc3RcInx8cz09PVwibGFzdFwiP2Vbc10udG9Qcm94eSgpOmVbc106ZVtzXX0sc2V0KGUscyxyKXtyZXR1cm4gZVtzXT09PXJ8fChlW3NdPXIsKHM9PT1cIm5hbWVcInx8cz09PVwicGFyYW1zXCJ8fHM9PT1cInNlbGVjdG9yXCIpJiZlLm1hcmtEaXJ0eSgpKSwhMH19fWluZGV4KGUpe3JldHVybiB0eXBlb2YgZT09XCJudW1iZXJcIj9lOihlLnByb3h5T2YmJihlPWUucHJveHlPZiksdGhpcy5wcm94eU9mLm5vZGVzLmluZGV4T2YoZSkpfWluc2VydEFmdGVyKGUscyl7bGV0IHI9dGhpcy5pbmRleChlKSxuPXRoaXMubm9ybWFsaXplKHMsdGhpcy5wcm94eU9mLm5vZGVzW3JdKS5yZXZlcnNlKCk7cj10aGlzLmluZGV4KGUpO2ZvcihsZXQgbyBvZiBuKXRoaXMucHJveHlPZi5ub2Rlcy5zcGxpY2UocisxLDAsbyk7bGV0IGk7Zm9yKGxldCBvIGluIHRoaXMuaW5kZXhlcylpPXRoaXMuaW5kZXhlc1tvXSxyPGkmJih0aGlzLmluZGV4ZXNbb109aStuLmxlbmd0aCk7cmV0dXJuIHRoaXMubWFya0RpcnR5KCksdGhpc31pbnNlcnRCZWZvcmUoZSxzKXtsZXQgcj10aGlzLmluZGV4KGUpLG49cj09PTA/XCJwcmVwZW5kXCI6ITEsaT10aGlzLm5vcm1hbGl6ZShzLHRoaXMucHJveHlPZi5ub2Rlc1tyXSxuKS5yZXZlcnNlKCk7cj10aGlzLmluZGV4KGUpO2ZvcihsZXQgdSBvZiBpKXRoaXMucHJveHlPZi5ub2Rlcy5zcGxpY2UociwwLHUpO2xldCBvO2ZvcihsZXQgdSBpbiB0aGlzLmluZGV4ZXMpbz10aGlzLmluZGV4ZXNbdV0scjw9byYmKHRoaXMuaW5kZXhlc1t1XT1vK2kubGVuZ3RoKTtyZXR1cm4gdGhpcy5tYXJrRGlydHkoKSx0aGlzfW5vcm1hbGl6ZShlLHMpe2lmKHR5cGVvZiBlPT1cInN0cmluZ1wiKWU9QmkoTGkoZSkubm9kZXMpO2Vsc2UgaWYodHlwZW9mIGU+XCJ1XCIpZT1bXTtlbHNlIGlmKEFycmF5LmlzQXJyYXkoZSkpe2U9ZS5zbGljZSgwKTtmb3IobGV0IG4gb2YgZSluLnBhcmVudCYmbi5wYXJlbnQucmVtb3ZlQ2hpbGQobixcImlnbm9yZVwiKX1lbHNlIGlmKGUudHlwZT09PVwicm9vdFwiJiZ0aGlzLnR5cGUhPT1cImRvY3VtZW50XCIpe2U9ZS5ub2Rlcy5zbGljZSgwKTtmb3IobGV0IG4gb2YgZSluLnBhcmVudCYmbi5wYXJlbnQucmVtb3ZlQ2hpbGQobixcImlnbm9yZVwiKX1lbHNlIGlmKGUudHlwZSllPVtlXTtlbHNlIGlmKGUucHJvcCl7aWYodHlwZW9mIGUudmFsdWU+XCJ1XCIpdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgZmllbGQgaXMgbWlzc2VkIGluIG5vZGUgY3JlYXRpb25cIik7dHlwZW9mIGUudmFsdWUhPVwic3RyaW5nXCImJihlLnZhbHVlPVN0cmluZyhlLnZhbHVlKSksZT1bbmV3IFJpKGUpXX1lbHNlIGlmKGUuc2VsZWN0b3J8fGUuc2VsZWN0b3JzKWU9W25ldyBscyhlKV07ZWxzZSBpZihlLm5hbWUpZT1bbmV3IHVzKGUpXTtlbHNlIGlmKGUudGV4dCllPVtuZXcgUGkoZSldO2Vsc2UgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBub2RlIHR5cGUgaW4gbm9kZSBjcmVhdGlvblwiKTtyZXR1cm4gZS5tYXAobj0+KG5bcWldfHx0LnJlYnVpbGQobiksbj1uLnByb3h5T2Ysbi5wYXJlbnQmJm4ucGFyZW50LnJlbW92ZUNoaWxkKG4pLG5bSWldJiZNaShuKSxuLnJhd3N8fChuLnJhd3M9e30pLHR5cGVvZiBuLnJhd3MuYmVmb3JlPlwidVwiJiZzJiZ0eXBlb2Ygcy5yYXdzLmJlZm9yZTxcInVcIiYmKG4ucmF3cy5iZWZvcmU9cy5yYXdzLmJlZm9yZS5yZXBsYWNlKC9cXFMvZyxcIlwiKSksbi5wYXJlbnQ9dGhpcy5wcm94eU9mLG4pKX1wcmVwZW5kKC4uLmUpe2U9ZS5yZXZlcnNlKCk7Zm9yKGxldCBzIG9mIGUpe2xldCByPXRoaXMubm9ybWFsaXplKHMsdGhpcy5maXJzdCxcInByZXBlbmRcIikucmV2ZXJzZSgpO2ZvcihsZXQgbiBvZiByKXRoaXMucHJveHlPZi5ub2Rlcy51bnNoaWZ0KG4pO2ZvcihsZXQgbiBpbiB0aGlzLmluZGV4ZXMpdGhpcy5pbmRleGVzW25dPXRoaXMuaW5kZXhlc1tuXStyLmxlbmd0aH1yZXR1cm4gdGhpcy5tYXJrRGlydHkoKSx0aGlzfXB1c2goZSl7cmV0dXJuIGUucGFyZW50PXRoaXMsdGhpcy5wcm94eU9mLm5vZGVzLnB1c2goZSksdGhpc31yZW1vdmVBbGwoKXtmb3IobGV0IGUgb2YgdGhpcy5wcm94eU9mLm5vZGVzKWUucGFyZW50PXZvaWQgMDtyZXR1cm4gdGhpcy5wcm94eU9mLm5vZGVzPVtdLHRoaXMubWFya0RpcnR5KCksdGhpc31yZW1vdmVDaGlsZChlKXtlPXRoaXMuaW5kZXgoZSksdGhpcy5wcm94eU9mLm5vZGVzW2VdLnBhcmVudD12b2lkIDAsdGhpcy5wcm94eU9mLm5vZGVzLnNwbGljZShlLDEpO2xldCBzO2ZvcihsZXQgciBpbiB0aGlzLmluZGV4ZXMpcz10aGlzLmluZGV4ZXNbcl0scz49ZSYmKHRoaXMuaW5kZXhlc1tyXT1zLTEpO3JldHVybiB0aGlzLm1hcmtEaXJ0eSgpLHRoaXN9cmVwbGFjZVZhbHVlcyhlLHMscil7cmV0dXJuIHJ8fChyPXMscz17fSksdGhpcy53YWxrRGVjbHMobj0+e3MucHJvcHMmJiFzLnByb3BzLmluY2x1ZGVzKG4ucHJvcCl8fHMuZmFzdCYmIW4udmFsdWUuaW5jbHVkZXMocy5mYXN0KXx8KG4udmFsdWU9bi52YWx1ZS5yZXBsYWNlKGUscikpfSksdGhpcy5tYXJrRGlydHkoKSx0aGlzfXNvbWUoZSl7cmV0dXJuIHRoaXMubm9kZXMuc29tZShlKX13YWxrKGUpe3JldHVybiB0aGlzLmVhY2goKHMscik9PntsZXQgbjt0cnl7bj1lKHMscil9Y2F0Y2goaSl7dGhyb3cgcy5hZGRUb0Vycm9yKGkpfXJldHVybiBuIT09ITEmJnMud2FsayYmKG49cy53YWxrKGUpKSxufSl9d2Fsa0F0UnVsZXMoZSxzKXtyZXR1cm4gcz9lIGluc3RhbmNlb2YgUmVnRXhwP3RoaXMud2FsaygocixuKT0+e2lmKHIudHlwZT09PVwiYXRydWxlXCImJmUudGVzdChyLm5hbWUpKXJldHVybiBzKHIsbil9KTp0aGlzLndhbGsoKHIsbik9PntpZihyLnR5cGU9PT1cImF0cnVsZVwiJiZyLm5hbWU9PT1lKXJldHVybiBzKHIsbil9KToocz1lLHRoaXMud2FsaygocixuKT0+e2lmKHIudHlwZT09PVwiYXRydWxlXCIpcmV0dXJuIHMocixuKX0pKX13YWxrQ29tbWVudHMoZSl7cmV0dXJuIHRoaXMud2FsaygocyxyKT0+e2lmKHMudHlwZT09PVwiY29tbWVudFwiKXJldHVybiBlKHMscil9KX13YWxrRGVjbHMoZSxzKXtyZXR1cm4gcz9lIGluc3RhbmNlb2YgUmVnRXhwP3RoaXMud2FsaygocixuKT0+e2lmKHIudHlwZT09PVwiZGVjbFwiJiZlLnRlc3Qoci5wcm9wKSlyZXR1cm4gcyhyLG4pfSk6dGhpcy53YWxrKChyLG4pPT57aWYoci50eXBlPT09XCJkZWNsXCImJnIucHJvcD09PWUpcmV0dXJuIHMocixuKX0pOihzPWUsdGhpcy53YWxrKChyLG4pPT57aWYoci50eXBlPT09XCJkZWNsXCIpcmV0dXJuIHMocixuKX0pKX13YWxrUnVsZXMoZSxzKXtyZXR1cm4gcz9lIGluc3RhbmNlb2YgUmVnRXhwP3RoaXMud2FsaygocixuKT0+e2lmKHIudHlwZT09PVwicnVsZVwiJiZlLnRlc3Qoci5zZWxlY3RvcikpcmV0dXJuIHMocixuKX0pOnRoaXMud2FsaygocixuKT0+e2lmKHIudHlwZT09PVwicnVsZVwiJiZyLnNlbGVjdG9yPT09ZSlyZXR1cm4gcyhyLG4pfSk6KHM9ZSx0aGlzLndhbGsoKHIsbik9PntpZihyLnR5cGU9PT1cInJ1bGVcIilyZXR1cm4gcyhyLG4pfSkpfX07ei5yZWdpc3RlclBhcnNlPXQ9PntMaT10fTt6LnJlZ2lzdGVyUnVsZT10PT57bHM9dH07ei5yZWdpc3RlckF0UnVsZT10PT57dXM9dH07ei5yZWdpc3RlclJvb3Q9dD0+e0RpPXR9O1VpLmV4cG9ydHM9ejt6LmRlZmF1bHQ9ejt6LnJlYnVpbGQ9dD0+e3QudHlwZT09PVwiYXRydWxlXCI/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsdXMucHJvdG90eXBlKTp0LnR5cGU9PT1cInJ1bGVcIj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxscy5wcm90b3R5cGUpOnQudHlwZT09PVwiZGVjbFwiP09iamVjdC5zZXRQcm90b3R5cGVPZih0LFJpLnByb3RvdHlwZSk6dC50eXBlPT09XCJjb21tZW50XCI/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsUGkucHJvdG90eXBlKTp0LnR5cGU9PT1cInJvb3RcIiYmT2JqZWN0LnNldFByb3RvdHlwZU9mKHQsRGkucHJvdG90eXBlKSx0W3FpXT0hMCx0Lm5vZGVzJiZ0Lm5vZGVzLmZvckVhY2goZT0+e3oucmVidWlsZChlKX0pfX0pO3ZhciAkaT1nKChQdixGaSk9Pnt2YXIgQ2M9XCJ1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0XCIsT2M9KHQsZT0yMSk9PihzPWUpPT57bGV0IHI9XCJcIixuPXN8MDtmb3IoO24tLTspcis9dFtNYXRoLnJhbmRvbSgpKnQubGVuZ3RofDBdO3JldHVybiByfSxBYz0odD0yMSk9PntsZXQgZT1cIlwiLHM9dHwwO2Zvcig7cy0tOyllKz1DY1tNYXRoLnJhbmRvbSgpKjY0fDBdO3JldHVybiBlfTtGaS5leHBvcnRzPXtuYW5vaWQ6QWMsY3VzdG9tQWxwaGFiZXQ6T2N9fSk7dmFyIFdpPWcoKCk9Pnt9KTt2YXIgY3M9ZygocXYsWWkpPT57WWkuZXhwb3J0cz1jbGFzc3t9fSk7dmFyIHFlPWcoKER2LGppKT0+e1widXNlIHN0cmljdFwiO3ZhcntuYW5vaWQ6TmN9PSRpKCkse2lzQWJzb2x1dGU6aHMscmVzb2x2ZTpkc309e30se1NvdXJjZU1hcENvbnN1bWVyOlBjLFNvdXJjZU1hcEdlbmVyYXRvcjpSY309V2koKSx7ZmlsZVVSTFRvUGF0aDpWaSxwYXRoVG9GaWxlVVJMOnp0fT17fSx6aT1XdCgpLEljPWNzKCksZnM9bnMoKSxwcz1TeW1ib2woXCJmcm9tT2Zmc2V0Q2FjaGVcIikscWM9ISEoUGMmJlJjKSxHaT0hIShkcyYmaHMpLEllPWNsYXNze2dldCBmcm9tKCl7cmV0dXJuIHRoaXMuZmlsZXx8dGhpcy5pZH1jb25zdHJ1Y3RvcihlLHM9e30pe2lmKGU9PT1udWxsfHx0eXBlb2YgZT5cInVcInx8dHlwZW9mIGU9PVwib2JqZWN0XCImJiFlLnRvU3RyaW5nKXRocm93IG5ldyBFcnJvcihgUG9zdENTUyByZWNlaXZlZCAke2V9IGluc3RlYWQgb2YgQ1NTIHN0cmluZ2ApO2lmKHRoaXMuY3NzPWUudG9TdHJpbmcoKSx0aGlzLmNzc1swXT09PVwiXFx1RkVGRlwifHx0aGlzLmNzc1swXT09PVwiXFx1RkZGRVwiPyh0aGlzLmhhc0JPTT0hMCx0aGlzLmNzcz10aGlzLmNzcy5zbGljZSgxKSk6dGhpcy5oYXNCT009ITEsdGhpcy5kb2N1bWVudD10aGlzLmNzcyxzLmRvY3VtZW50JiYodGhpcy5kb2N1bWVudD1zLmRvY3VtZW50LnRvU3RyaW5nKCkpLHMuZnJvbSYmKCFHaXx8L15cXHcrOlxcL1xcLy8udGVzdChzLmZyb20pfHxocyhzLmZyb20pP3RoaXMuZmlsZT1zLmZyb206dGhpcy5maWxlPWRzKHMuZnJvbSkpLEdpJiZxYyl7bGV0IHI9bmV3IEljKHRoaXMuY3NzLHMpO2lmKHIudGV4dCl7dGhpcy5tYXA9cjtsZXQgbj1yLmNvbnN1bWVyKCkuZmlsZTshdGhpcy5maWxlJiZuJiYodGhpcy5maWxlPXRoaXMubWFwUmVzb2x2ZShuKSl9fXRoaXMuZmlsZXx8KHRoaXMuaWQ9XCI8aW5wdXQgY3NzIFwiK05jKDYpK1wiPlwiKSx0aGlzLm1hcCYmKHRoaXMubWFwLmZpbGU9dGhpcy5mcm9tKX1lcnJvcihlLHMscixuPXt9KXtsZXQgaSxvLHU7aWYocyYmdHlwZW9mIHM9PVwib2JqZWN0XCIpe2xldCBjPXMsZj1yO2lmKHR5cGVvZiBjLm9mZnNldD09XCJudW1iZXJcIil7bGV0IHA9dGhpcy5mcm9tT2Zmc2V0KGMub2Zmc2V0KTtzPXAubGluZSxyPXAuY29sfWVsc2Ugcz1jLmxpbmUscj1jLmNvbHVtbjtpZih0eXBlb2YgZi5vZmZzZXQ9PVwibnVtYmVyXCIpe2xldCBwPXRoaXMuZnJvbU9mZnNldChmLm9mZnNldCk7bz1wLmxpbmUsaT1wLmNvbH1lbHNlIG89Zi5saW5lLGk9Zi5jb2x1bW59ZWxzZSBpZighcil7bGV0IGM9dGhpcy5mcm9tT2Zmc2V0KHMpO3M9Yy5saW5lLHI9Yy5jb2x9bGV0IGE9dGhpcy5vcmlnaW4ocyxyLG8saSk7cmV0dXJuIGE/dT1uZXcgemkoZSxhLmVuZExpbmU9PT12b2lkIDA/YS5saW5lOntjb2x1bW46YS5jb2x1bW4sbGluZTphLmxpbmV9LGEuZW5kTGluZT09PXZvaWQgMD9hLmNvbHVtbjp7Y29sdW1uOmEuZW5kQ29sdW1uLGxpbmU6YS5lbmRMaW5lfSxhLnNvdXJjZSxhLmZpbGUsbi5wbHVnaW4pOnU9bmV3IHppKGUsbz09PXZvaWQgMD9zOntjb2x1bW46cixsaW5lOnN9LG89PT12b2lkIDA/cjp7Y29sdW1uOmksbGluZTpvfSx0aGlzLmNzcyx0aGlzLmZpbGUsbi5wbHVnaW4pLHUuaW5wdXQ9e2NvbHVtbjpyLGVuZENvbHVtbjppLGVuZExpbmU6byxsaW5lOnMsc291cmNlOnRoaXMuY3NzfSx0aGlzLmZpbGUmJih6dCYmKHUuaW5wdXQudXJsPXp0KHRoaXMuZmlsZSkudG9TdHJpbmcoKSksdS5pbnB1dC5maWxlPXRoaXMuZmlsZSksdX1mcm9tT2Zmc2V0KGUpe2xldCBzLHI7aWYodGhpc1twc10pcj10aGlzW3BzXTtlbHNle2xldCBpPXRoaXMuY3NzLnNwbGl0KGBcbmApO3I9bmV3IEFycmF5KGkubGVuZ3RoKTtsZXQgbz0wO2ZvcihsZXQgdT0wLGE9aS5sZW5ndGg7dTxhO3UrKylyW3VdPW8sbys9aVt1XS5sZW5ndGgrMTt0aGlzW3BzXT1yfXM9cltyLmxlbmd0aC0xXTtsZXQgbj0wO2lmKGU+PXMpbj1yLmxlbmd0aC0xO2Vsc2V7bGV0IGk9ci5sZW5ndGgtMixvO2Zvcig7bjxpOylpZihvPW4rKGktbj4+MSksZTxyW29dKWk9by0xO2Vsc2UgaWYoZT49cltvKzFdKW49bysxO2Vsc2V7bj1vO2JyZWFrfX1yZXR1cm57Y29sOmUtcltuXSsxLGxpbmU6bisxfX1tYXBSZXNvbHZlKGUpe3JldHVybi9eXFx3KzpcXC9cXC8vLnRlc3QoZSk/ZTpkcyh0aGlzLm1hcC5jb25zdW1lcigpLnNvdXJjZVJvb3R8fHRoaXMubWFwLnJvb3R8fFwiLlwiLGUpfW9yaWdpbihlLHMscixuKXtpZighdGhpcy5tYXApcmV0dXJuITE7bGV0IGk9dGhpcy5tYXAuY29uc3VtZXIoKSxvPWkub3JpZ2luYWxQb3NpdGlvbkZvcih7Y29sdW1uOnMsbGluZTplfSk7aWYoIW8uc291cmNlKXJldHVybiExO2xldCB1O3R5cGVvZiByPT1cIm51bWJlclwiJiYodT1pLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe2NvbHVtbjpuLGxpbmU6cn0pKTtsZXQgYTtocyhvLnNvdXJjZSk/YT16dChvLnNvdXJjZSk6YT1uZXcgVVJMKG8uc291cmNlLHRoaXMubWFwLmNvbnN1bWVyKCkuc291cmNlUm9vdHx8enQodGhpcy5tYXAubWFwRmlsZSkpO2xldCBjPXtjb2x1bW46by5jb2x1bW4sZW5kQ29sdW1uOnUmJnUuY29sdW1uLGVuZExpbmU6dSYmdS5saW5lLGxpbmU6by5saW5lLHVybDphLnRvU3RyaW5nKCl9O2lmKGEucHJvdG9jb2w9PT1cImZpbGU6XCIpaWYoVmkpYy5maWxlPVZpKGEpO2Vsc2UgdGhyb3cgbmV3IEVycm9yKFwiZmlsZTogcHJvdG9jb2wgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIFBvc3RDU1MgYnVpbGRcIik7bGV0IGY9aS5zb3VyY2VDb250ZW50Rm9yKG8uc291cmNlKTtyZXR1cm4gZiYmKGMuc291cmNlPWYpLGN9dG9KU09OKCl7bGV0IGU9e307Zm9yKGxldCBzIG9mW1wiaGFzQk9NXCIsXCJjc3NcIixcImZpbGVcIixcImlkXCJdKXRoaXNbc10hPW51bGwmJihlW3NdPXRoaXNbc10pO3JldHVybiB0aGlzLm1hcCYmKGUubWFwPXsuLi50aGlzLm1hcH0sZS5tYXAuY29uc3VtZXJDYWNoZSYmKGUubWFwLmNvbnN1bWVyQ2FjaGU9dm9pZCAwKSksZX19O2ppLmV4cG9ydHM9SWU7SWUuZGVmYXVsdD1JZTtmcyYmZnMucmVnaXN0ZXJJbnB1dCYmZnMucmVnaXN0ZXJJbnB1dChJZSl9KTt2YXIgR3Q9ZygoQnYsS2kpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIEhpPWxlKCksTGU9Y2xhc3MgZXh0ZW5kcyBIaXtjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLnR5cGU9XCJhdHJ1bGVcIn1hcHBlbmQoLi4uZSl7cmV0dXJuIHRoaXMucHJveHlPZi5ub2Rlc3x8KHRoaXMubm9kZXM9W10pLHN1cGVyLmFwcGVuZCguLi5lKX1wcmVwZW5kKC4uLmUpe3JldHVybiB0aGlzLnByb3h5T2Yubm9kZXN8fCh0aGlzLm5vZGVzPVtdKSxzdXBlci5wcmVwZW5kKC4uLmUpfX07S2kuZXhwb3J0cz1MZTtMZS5kZWZhdWx0PUxlO0hpLnJlZ2lzdGVyQXRSdWxlKExlKX0pO3ZhciBEZT1nKChNdixaaSk9PntcInVzZSBzdHJpY3RcIjt2YXIgUWk9bGUoKSxKaSxYaSxjZT1jbGFzcyBleHRlbmRzIFFpe2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMudHlwZT1cInJvb3RcIix0aGlzLm5vZGVzfHwodGhpcy5ub2Rlcz1bXSl9bm9ybWFsaXplKGUscyxyKXtsZXQgbj1zdXBlci5ub3JtYWxpemUoZSk7aWYocyl7aWYocj09PVwicHJlcGVuZFwiKXRoaXMubm9kZXMubGVuZ3RoPjE/cy5yYXdzLmJlZm9yZT10aGlzLm5vZGVzWzFdLnJhd3MuYmVmb3JlOmRlbGV0ZSBzLnJhd3MuYmVmb3JlO2Vsc2UgaWYodGhpcy5maXJzdCE9PXMpZm9yKGxldCBpIG9mIG4paS5yYXdzLmJlZm9yZT1zLnJhd3MuYmVmb3JlfXJldHVybiBufXJlbW92ZUNoaWxkKGUscyl7bGV0IHI9dGhpcy5pbmRleChlKTtyZXR1cm4hcyYmcj09PTAmJnRoaXMubm9kZXMubGVuZ3RoPjEmJih0aGlzLm5vZGVzWzFdLnJhd3MuYmVmb3JlPXRoaXMubm9kZXNbcl0ucmF3cy5iZWZvcmUpLHN1cGVyLnJlbW92ZUNoaWxkKGUpfXRvUmVzdWx0KGU9e30pe3JldHVybiBuZXcgSmkobmV3IFhpLHRoaXMsZSkuc3RyaW5naWZ5KCl9fTtjZS5yZWdpc3RlckxhenlSZXN1bHQ9dD0+e0ppPXR9O2NlLnJlZ2lzdGVyUHJvY2Vzc29yPXQ9PntYaT10fTtaaS5leHBvcnRzPWNlO2NlLmRlZmF1bHQ9Y2U7UWkucmVnaXN0ZXJSb290KGNlKX0pO3ZhciBtcz1nKChVdixlbyk9PntcInVzZSBzdHJpY3RcIjt2YXIgeXQ9e2NvbW1hKHQpe3JldHVybiB5dC5zcGxpdCh0LFtcIixcIl0sITApfSxzcGFjZSh0KXtsZXQgZT1bXCIgXCIsYFxuYCxcIlx0XCJdO3JldHVybiB5dC5zcGxpdCh0LGUpfSxzcGxpdCh0LGUscyl7bGV0IHI9W10sbj1cIlwiLGk9ITEsbz0wLHU9ITEsYT1cIlwiLGM9ITE7Zm9yKGxldCBmIG9mIHQpYz9jPSExOmY9PT1cIlxcXFxcIj9jPSEwOnU/Zj09PWEmJih1PSExKTpmPT09J1wiJ3x8Zj09PVwiJ1wiPyh1PSEwLGE9Zik6Zj09PVwiKFwiP28rPTE6Zj09PVwiKVwiP28+MCYmKG8tPTEpOm89PT0wJiZlLmluY2x1ZGVzKGYpJiYoaT0hMCksaT8obiE9PVwiXCImJnIucHVzaChuLnRyaW0oKSksbj1cIlwiLGk9ITEpOm4rPWY7cmV0dXJuKHN8fG4hPT1cIlwiKSYmci5wdXNoKG4udHJpbSgpKSxyfX07ZW8uZXhwb3J0cz15dDt5dC5kZWZhdWx0PXl0fSk7dmFyIGp0PWcoKEZ2LHJvKT0+e1widXNlIHN0cmljdFwiO3ZhciB0bz1sZSgpLExjPW1zKCksQmU9Y2xhc3MgZXh0ZW5kcyB0b3tnZXQgc2VsZWN0b3JzKCl7cmV0dXJuIExjLmNvbW1hKHRoaXMuc2VsZWN0b3IpfXNldCBzZWxlY3RvcnMoZSl7bGV0IHM9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yLm1hdGNoKC8sXFxzKi8pOm51bGwscj1zP3NbMF06XCIsXCIrdGhpcy5yYXcoXCJiZXR3ZWVuXCIsXCJiZWZvcmVPcGVuXCIpO3RoaXMuc2VsZWN0b3I9ZS5qb2luKHIpfWNvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMudHlwZT1cInJ1bGVcIix0aGlzLm5vZGVzfHwodGhpcy5ub2Rlcz1bXSl9fTtyby5leHBvcnRzPUJlO0JlLmRlZmF1bHQ9QmU7dG8ucmVnaXN0ZXJSdWxlKEJlKX0pO3ZhciBRdD1nKCgkdixubyk9PntcInVzZSBzdHJpY3RcIjt2YXIgSHQ9L1tcXHRcXG5cXGZcXHIgXCIjJygpLztbXFxcXFxcXXt9XS9nLEt0PS9bXFx0XFxuXFxmXFxyICFcIiMnKCk6O0BbXFxcXFxcXXt9XXxcXC8oPz1cXCopL2csRGM9Ly5bXFxyXFxuXCInKC9cXFxcXS8sc289L1tcXGRhLWZdL2k7bm8uZXhwb3J0cz1mdW5jdGlvbihlLHM9e30pe2xldCByPWUuY3NzLnZhbHVlT2YoKSxuPXMuaWdub3JlRXJyb3JzLGksbyx1LGEsYyxmLHAsbCx5LHgsaD1yLmxlbmd0aCxkPTAsbT1bXSxiPVtdO2Z1bmN0aW9uIHcoKXtyZXR1cm4gZH1mdW5jdGlvbiB2KFcpe3Rocm93IGUuZXJyb3IoXCJVbmNsb3NlZCBcIitXLGQpfWZ1bmN0aW9uIE4oKXtyZXR1cm4gYi5sZW5ndGg9PT0wJiZkPj1ofWZ1bmN0aW9uIEYoVyl7aWYoYi5sZW5ndGgpcmV0dXJuIGIucG9wKCk7aWYoZD49aClyZXR1cm47bGV0IFQ9Vz9XLmlnbm9yZVVuY2xvc2VkOiExO3N3aXRjaChpPXIuY2hhckNvZGVBdChkKSxpKXtjYXNlIDEwOmNhc2UgMzI6Y2FzZSA5OmNhc2UgMTM6Y2FzZSAxMjp7YT1kO2RvIGErPTEsaT1yLmNoYXJDb2RlQXQoYSk7d2hpbGUoaT09PTMyfHxpPT09MTB8fGk9PT05fHxpPT09MTN8fGk9PT0xMik7Zj1bXCJzcGFjZVwiLHIuc2xpY2UoZCxhKV0sZD1hLTE7YnJlYWt9Y2FzZSA5MTpjYXNlIDkzOmNhc2UgMTIzOmNhc2UgMTI1OmNhc2UgNTg6Y2FzZSA1OTpjYXNlIDQxOntsZXQgQz1TdHJpbmcuZnJvbUNoYXJDb2RlKGkpO2Y9W0MsQyxkXTticmVha31jYXNlIDQwOntpZih4PW0ubGVuZ3RoP20ucG9wKClbMV06XCJcIix5PXIuY2hhckNvZGVBdChkKzEpLHg9PT1cInVybFwiJiZ5IT09MzkmJnkhPT0zNCYmeSE9PTMyJiZ5IT09MTAmJnkhPT05JiZ5IT09MTImJnkhPT0xMyl7YT1kO2Rve2lmKHA9ITEsYT1yLmluZGV4T2YoXCIpXCIsYSsxKSxhPT09LTEpaWYobnx8VCl7YT1kO2JyZWFrfWVsc2UgdihcImJyYWNrZXRcIik7Zm9yKGw9YTtyLmNoYXJDb2RlQXQobC0xKT09PTkyOylsLT0xLHA9IXB9d2hpbGUocCk7Zj1bXCJicmFja2V0c1wiLHIuc2xpY2UoZCxhKzEpLGQsYV0sZD1hfWVsc2UgYT1yLmluZGV4T2YoXCIpXCIsZCsxKSxvPXIuc2xpY2UoZCxhKzEpLGE9PT0tMXx8RGMudGVzdChvKT9mPVtcIihcIixcIihcIixkXTooZj1bXCJicmFja2V0c1wiLG8sZCxhXSxkPWEpO2JyZWFrfWNhc2UgMzk6Y2FzZSAzNDp7Yz1pPT09Mzk/XCInXCI6J1wiJyxhPWQ7ZG97aWYocD0hMSxhPXIuaW5kZXhPZihjLGErMSksYT09PS0xKWlmKG58fFQpe2E9ZCsxO2JyZWFrfWVsc2UgdihcInN0cmluZ1wiKTtmb3IobD1hO3IuY2hhckNvZGVBdChsLTEpPT09OTI7KWwtPTEscD0hcH13aGlsZShwKTtmPVtcInN0cmluZ1wiLHIuc2xpY2UoZCxhKzEpLGQsYV0sZD1hO2JyZWFrfWNhc2UgNjQ6e0h0Lmxhc3RJbmRleD1kKzEsSHQudGVzdChyKSxIdC5sYXN0SW5kZXg9PT0wP2E9ci5sZW5ndGgtMTphPUh0Lmxhc3RJbmRleC0yLGY9W1wiYXQtd29yZFwiLHIuc2xpY2UoZCxhKzEpLGQsYV0sZD1hO2JyZWFrfWNhc2UgOTI6e2ZvcihhPWQsdT0hMDtyLmNoYXJDb2RlQXQoYSsxKT09PTkyOylhKz0xLHU9IXU7aWYoaT1yLmNoYXJDb2RlQXQoYSsxKSx1JiZpIT09NDcmJmkhPT0zMiYmaSE9PTEwJiZpIT09OSYmaSE9PTEzJiZpIT09MTImJihhKz0xLHNvLnRlc3Qoci5jaGFyQXQoYSkpKSl7Zm9yKDtzby50ZXN0KHIuY2hhckF0KGErMSkpOylhKz0xO3IuY2hhckNvZGVBdChhKzEpPT09MzImJihhKz0xKX1mPVtcIndvcmRcIixyLnNsaWNlKGQsYSsxKSxkLGFdLGQ9YTticmVha31kZWZhdWx0OntpPT09NDcmJnIuY2hhckNvZGVBdChkKzEpPT09NDI/KGE9ci5pbmRleE9mKFwiKi9cIixkKzIpKzEsYT09PTAmJihufHxUP2E9ci5sZW5ndGg6dihcImNvbW1lbnRcIikpLGY9W1wiY29tbWVudFwiLHIuc2xpY2UoZCxhKzEpLGQsYV0sZD1hKTooS3QubGFzdEluZGV4PWQrMSxLdC50ZXN0KHIpLEt0Lmxhc3RJbmRleD09PTA/YT1yLmxlbmd0aC0xOmE9S3QubGFzdEluZGV4LTIsZj1bXCJ3b3JkXCIsci5zbGljZShkLGErMSksZCxhXSxtLnB1c2goZiksZD1hKTticmVha319cmV0dXJuIGQrKyxmfWZ1bmN0aW9uIFEoVyl7Yi5wdXNoKFcpfXJldHVybntiYWNrOlEsZW5kT2ZGaWxlOk4sbmV4dFRva2VuOkYscG9zaXRpb246d319fSk7dmFyIEp0PWcoKFd2LGFvKT0+e1widXNlIHN0cmljdFwiO3ZhciBCYz1HdCgpLE1jPVJlKCksVWM9bXQoKSxGYz1EZSgpLGlvPWp0KCksJGM9UXQoKSxvbz17ZW1wdHk6ITAsc3BhY2U6ITB9O2Z1bmN0aW9uIFdjKHQpe2ZvcihsZXQgZT10Lmxlbmd0aC0xO2U+PTA7ZS0tKXtsZXQgcz10W2VdLHI9c1szXXx8c1syXTtpZihyKXJldHVybiByfX12YXIgeXM9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy5pbnB1dD1lLHRoaXMucm9vdD1uZXcgRmMsdGhpcy5jdXJyZW50PXRoaXMucm9vdCx0aGlzLnNwYWNlcz1cIlwiLHRoaXMuc2VtaWNvbG9uPSExLHRoaXMuY3JlYXRlVG9rZW5pemVyKCksdGhpcy5yb290LnNvdXJjZT17aW5wdXQ6ZSxzdGFydDp7Y29sdW1uOjEsbGluZToxLG9mZnNldDowfX19YXRydWxlKGUpe2xldCBzPW5ldyBCYztzLm5hbWU9ZVsxXS5zbGljZSgxKSxzLm5hbWU9PT1cIlwiJiZ0aGlzLnVubmFtZWRBdHJ1bGUocyxlKSx0aGlzLmluaXQocyxlWzJdKTtsZXQgcixuLGksbz0hMSx1PSExLGE9W10sYz1bXTtmb3IoOyF0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKTspe2lmKGU9dGhpcy50b2tlbml6ZXIubmV4dFRva2VuKCkscj1lWzBdLHI9PT1cIihcInx8cj09PVwiW1wiP2MucHVzaChyPT09XCIoXCI/XCIpXCI6XCJdXCIpOnI9PT1cIntcIiYmYy5sZW5ndGg+MD9jLnB1c2goXCJ9XCIpOnI9PT1jW2MubGVuZ3RoLTFdJiZjLnBvcCgpLGMubGVuZ3RoPT09MClpZihyPT09XCI7XCIpe3Muc291cmNlLmVuZD10aGlzLmdldFBvc2l0aW9uKGVbMl0pLHMuc291cmNlLmVuZC5vZmZzZXQrKyx0aGlzLnNlbWljb2xvbj0hMDticmVha31lbHNlIGlmKHI9PT1cIntcIil7dT0hMDticmVha31lbHNlIGlmKHI9PT1cIn1cIil7aWYoYS5sZW5ndGg+MCl7Zm9yKGk9YS5sZW5ndGgtMSxuPWFbaV07biYmblswXT09PVwic3BhY2VcIjspbj1hWy0taV07biYmKHMuc291cmNlLmVuZD10aGlzLmdldFBvc2l0aW9uKG5bM118fG5bMl0pLHMuc291cmNlLmVuZC5vZmZzZXQrKyl9dGhpcy5lbmQoZSk7YnJlYWt9ZWxzZSBhLnB1c2goZSk7ZWxzZSBhLnB1c2goZSk7aWYodGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCkpe289ITA7YnJlYWt9fXMucmF3cy5iZXR3ZWVuPXRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tRW5kKGEpLGEubGVuZ3RoPyhzLnJhd3MuYWZ0ZXJOYW1lPXRoaXMuc3BhY2VzQW5kQ29tbWVudHNGcm9tU3RhcnQoYSksdGhpcy5yYXcocyxcInBhcmFtc1wiLGEpLG8mJihlPWFbYS5sZW5ndGgtMV0scy5zb3VyY2UuZW5kPXRoaXMuZ2V0UG9zaXRpb24oZVszXXx8ZVsyXSkscy5zb3VyY2UuZW5kLm9mZnNldCsrLHRoaXMuc3BhY2VzPXMucmF3cy5iZXR3ZWVuLHMucmF3cy5iZXR3ZWVuPVwiXCIpKToocy5yYXdzLmFmdGVyTmFtZT1cIlwiLHMucGFyYW1zPVwiXCIpLHUmJihzLm5vZGVzPVtdLHRoaXMuY3VycmVudD1zKX1jaGVja01pc3NlZFNlbWljb2xvbihlKXtsZXQgcz10aGlzLmNvbG9uKGUpO2lmKHM9PT0hMSlyZXR1cm47bGV0IHI9MCxuO2ZvcihsZXQgaT1zLTE7aT49MCYmKG49ZVtpXSwhKG5bMF0hPT1cInNwYWNlXCImJihyKz0xLHI9PT0yKSkpO2ktLSk7dGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcIk1pc3NlZCBzZW1pY29sb25cIixuWzBdPT09XCJ3b3JkXCI/blszXSsxOm5bMl0pfWNvbG9uKGUpe2xldCBzPTAscixuLGk7Zm9yKGxldFtvLHVdb2YgZS5lbnRyaWVzKCkpe2lmKG49dSxpPW5bMF0saT09PVwiKFwiJiYocys9MSksaT09PVwiKVwiJiYocy09MSkscz09PTAmJmk9PT1cIjpcIilpZighcil0aGlzLmRvdWJsZUNvbG9uKG4pO2Vsc2V7aWYoclswXT09PVwid29yZFwiJiZyWzFdPT09XCJwcm9naWRcIiljb250aW51ZTtyZXR1cm4gb31yPW59cmV0dXJuITF9Y29tbWVudChlKXtsZXQgcz1uZXcgTWM7dGhpcy5pbml0KHMsZVsyXSkscy5zb3VyY2UuZW5kPXRoaXMuZ2V0UG9zaXRpb24oZVszXXx8ZVsyXSkscy5zb3VyY2UuZW5kLm9mZnNldCsrO2xldCByPWVbMV0uc2xpY2UoMiwtMik7aWYoL15cXHMqJC8udGVzdChyKSlzLnRleHQ9XCJcIixzLnJhd3MubGVmdD1yLHMucmF3cy5yaWdodD1cIlwiO2Vsc2V7bGV0IG49ci5tYXRjaCgvXihcXHMqKShbXl0qXFxTKShcXHMqKSQvKTtzLnRleHQ9blsyXSxzLnJhd3MubGVmdD1uWzFdLHMucmF3cy5yaWdodD1uWzNdfX1jcmVhdGVUb2tlbml6ZXIoKXt0aGlzLnRva2VuaXplcj0kYyh0aGlzLmlucHV0KX1kZWNsKGUscyl7bGV0IHI9bmV3IFVjO3RoaXMuaW5pdChyLGVbMF1bMl0pO2xldCBuPWVbZS5sZW5ndGgtMV07Zm9yKG5bMF09PT1cIjtcIiYmKHRoaXMuc2VtaWNvbG9uPSEwLGUucG9wKCkpLHIuc291cmNlLmVuZD10aGlzLmdldFBvc2l0aW9uKG5bM118fG5bMl18fFdjKGUpKSxyLnNvdXJjZS5lbmQub2Zmc2V0Kys7ZVswXVswXSE9PVwid29yZFwiOyllLmxlbmd0aD09PTEmJnRoaXMudW5rbm93bldvcmQoZSksci5yYXdzLmJlZm9yZSs9ZS5zaGlmdCgpWzFdO2ZvcihyLnNvdXJjZS5zdGFydD10aGlzLmdldFBvc2l0aW9uKGVbMF1bMl0pLHIucHJvcD1cIlwiO2UubGVuZ3RoOyl7bGV0IGM9ZVswXVswXTtpZihjPT09XCI6XCJ8fGM9PT1cInNwYWNlXCJ8fGM9PT1cImNvbW1lbnRcIilicmVhaztyLnByb3ArPWUuc2hpZnQoKVsxXX1yLnJhd3MuYmV0d2Vlbj1cIlwiO2xldCBpO2Zvcig7ZS5sZW5ndGg7KWlmKGk9ZS5zaGlmdCgpLGlbMF09PT1cIjpcIil7ci5yYXdzLmJldHdlZW4rPWlbMV07YnJlYWt9ZWxzZSBpWzBdPT09XCJ3b3JkXCImJi9cXHcvLnRlc3QoaVsxXSkmJnRoaXMudW5rbm93bldvcmQoW2ldKSxyLnJhd3MuYmV0d2Vlbis9aVsxXTsoci5wcm9wWzBdPT09XCJfXCJ8fHIucHJvcFswXT09PVwiKlwiKSYmKHIucmF3cy5iZWZvcmUrPXIucHJvcFswXSxyLnByb3A9ci5wcm9wLnNsaWNlKDEpKTtsZXQgbz1bXSx1O2Zvcig7ZS5sZW5ndGgmJih1PWVbMF1bMF0sISh1IT09XCJzcGFjZVwiJiZ1IT09XCJjb21tZW50XCIpKTspby5wdXNoKGUuc2hpZnQoKSk7dGhpcy5wcmVjaGVja01pc3NlZFNlbWljb2xvbihlKTtmb3IobGV0IGM9ZS5sZW5ndGgtMTtjPj0wO2MtLSl7aWYoaT1lW2NdLGlbMV0udG9Mb3dlckNhc2UoKT09PVwiIWltcG9ydGFudFwiKXtyLmltcG9ydGFudD0hMDtsZXQgZj10aGlzLnN0cmluZ0Zyb20oZSxjKTtmPXRoaXMuc3BhY2VzRnJvbUVuZChlKStmLGYhPT1cIiAhaW1wb3J0YW50XCImJihyLnJhd3MuaW1wb3J0YW50PWYpO2JyZWFrfWVsc2UgaWYoaVsxXS50b0xvd2VyQ2FzZSgpPT09XCJpbXBvcnRhbnRcIil7bGV0IGY9ZS5zbGljZSgwKSxwPVwiXCI7Zm9yKGxldCBsPWM7bD4wO2wtLSl7bGV0IHk9ZltsXVswXTtpZihwLnRyaW0oKS5zdGFydHNXaXRoKFwiIVwiKSYmeSE9PVwic3BhY2VcIilicmVhaztwPWYucG9wKClbMV0rcH1wLnRyaW0oKS5zdGFydHNXaXRoKFwiIVwiKSYmKHIuaW1wb3J0YW50PSEwLHIucmF3cy5pbXBvcnRhbnQ9cCxlPWYpfWlmKGlbMF0hPT1cInNwYWNlXCImJmlbMF0hPT1cImNvbW1lbnRcIilicmVha31lLnNvbWUoYz0+Y1swXSE9PVwic3BhY2VcIiYmY1swXSE9PVwiY29tbWVudFwiKSYmKHIucmF3cy5iZXR3ZWVuKz1vLm1hcChjPT5jWzFdKS5qb2luKFwiXCIpLG89W10pLHRoaXMucmF3KHIsXCJ2YWx1ZVwiLG8uY29uY2F0KGUpLHMpLHIudmFsdWUuaW5jbHVkZXMoXCI6XCIpJiYhcyYmdGhpcy5jaGVja01pc3NlZFNlbWljb2xvbihlKX1kb3VibGVDb2xvbihlKXt0aHJvdyB0aGlzLmlucHV0LmVycm9yKFwiRG91YmxlIGNvbG9uXCIse29mZnNldDplWzJdfSx7b2Zmc2V0OmVbMl0rZVsxXS5sZW5ndGh9KX1lbXB0eVJ1bGUoZSl7bGV0IHM9bmV3IGlvO3RoaXMuaW5pdChzLGVbMl0pLHMuc2VsZWN0b3I9XCJcIixzLnJhd3MuYmV0d2Vlbj1cIlwiLHRoaXMuY3VycmVudD1zfWVuZChlKXt0aGlzLmN1cnJlbnQubm9kZXMmJnRoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGgmJih0aGlzLmN1cnJlbnQucmF3cy5zZW1pY29sb249dGhpcy5zZW1pY29sb24pLHRoaXMuc2VtaWNvbG9uPSExLHRoaXMuY3VycmVudC5yYXdzLmFmdGVyPSh0aGlzLmN1cnJlbnQucmF3cy5hZnRlcnx8XCJcIikrdGhpcy5zcGFjZXMsdGhpcy5zcGFjZXM9XCJcIix0aGlzLmN1cnJlbnQucGFyZW50Pyh0aGlzLmN1cnJlbnQuc291cmNlLmVuZD10aGlzLmdldFBvc2l0aW9uKGVbMl0pLHRoaXMuY3VycmVudC5zb3VyY2UuZW5kLm9mZnNldCsrLHRoaXMuY3VycmVudD10aGlzLmN1cnJlbnQucGFyZW50KTp0aGlzLnVuZXhwZWN0ZWRDbG9zZShlKX1lbmRGaWxlKCl7dGhpcy5jdXJyZW50LnBhcmVudCYmdGhpcy51bmNsb3NlZEJsb2NrKCksdGhpcy5jdXJyZW50Lm5vZGVzJiZ0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoJiYodGhpcy5jdXJyZW50LnJhd3Muc2VtaWNvbG9uPXRoaXMuc2VtaWNvbG9uKSx0aGlzLmN1cnJlbnQucmF3cy5hZnRlcj0odGhpcy5jdXJyZW50LnJhd3MuYWZ0ZXJ8fFwiXCIpK3RoaXMuc3BhY2VzLHRoaXMucm9vdC5zb3VyY2UuZW5kPXRoaXMuZ2V0UG9zaXRpb24odGhpcy50b2tlbml6ZXIucG9zaXRpb24oKSl9ZnJlZVNlbWljb2xvbihlKXtpZih0aGlzLnNwYWNlcys9ZVsxXSx0aGlzLmN1cnJlbnQubm9kZXMpe2xldCBzPXRoaXMuY3VycmVudC5ub2Rlc1t0aGlzLmN1cnJlbnQubm9kZXMubGVuZ3RoLTFdO3MmJnMudHlwZT09PVwicnVsZVwiJiYhcy5yYXdzLm93blNlbWljb2xvbiYmKHMucmF3cy5vd25TZW1pY29sb249dGhpcy5zcGFjZXMsdGhpcy5zcGFjZXM9XCJcIixzLnNvdXJjZS5lbmQ9dGhpcy5nZXRQb3NpdGlvbihlWzJdKSxzLnNvdXJjZS5lbmQub2Zmc2V0Kz1zLnJhd3Mub3duU2VtaWNvbG9uLmxlbmd0aCl9fWdldFBvc2l0aW9uKGUpe2xldCBzPXRoaXMuaW5wdXQuZnJvbU9mZnNldChlKTtyZXR1cm57Y29sdW1uOnMuY29sLGxpbmU6cy5saW5lLG9mZnNldDplfX1pbml0KGUscyl7dGhpcy5jdXJyZW50LnB1c2goZSksZS5zb3VyY2U9e2lucHV0OnRoaXMuaW5wdXQsc3RhcnQ6dGhpcy5nZXRQb3NpdGlvbihzKX0sZS5yYXdzLmJlZm9yZT10aGlzLnNwYWNlcyx0aGlzLnNwYWNlcz1cIlwiLGUudHlwZSE9PVwiY29tbWVudFwiJiYodGhpcy5zZW1pY29sb249ITEpfW90aGVyKGUpe2xldCBzPSExLHI9bnVsbCxuPSExLGk9bnVsbCxvPVtdLHU9ZVsxXS5zdGFydHNXaXRoKFwiLS1cIiksYT1bXSxjPWU7Zm9yKDtjOyl7aWYocj1jWzBdLGEucHVzaChjKSxyPT09XCIoXCJ8fHI9PT1cIltcIilpfHwoaT1jKSxvLnB1c2gocj09PVwiKFwiP1wiKVwiOlwiXVwiKTtlbHNlIGlmKHUmJm4mJnI9PT1cIntcIilpfHwoaT1jKSxvLnB1c2goXCJ9XCIpO2Vsc2UgaWYoby5sZW5ndGg9PT0wKWlmKHI9PT1cIjtcIilpZihuKXt0aGlzLmRlY2woYSx1KTtyZXR1cm59ZWxzZSBicmVhaztlbHNlIGlmKHI9PT1cIntcIil7dGhpcy5ydWxlKGEpO3JldHVybn1lbHNlIGlmKHI9PT1cIn1cIil7dGhpcy50b2tlbml6ZXIuYmFjayhhLnBvcCgpKSxzPSEwO2JyZWFrfWVsc2Ugcj09PVwiOlwiJiYobj0hMCk7ZWxzZSByPT09b1tvLmxlbmd0aC0xXSYmKG8ucG9wKCksby5sZW5ndGg9PT0wJiYoaT1udWxsKSk7Yz10aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKX1pZih0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKSYmKHM9ITApLG8ubGVuZ3RoPjAmJnRoaXMudW5jbG9zZWRCcmFja2V0KGkpLHMmJm4pe2lmKCF1KWZvcig7YS5sZW5ndGgmJihjPWFbYS5sZW5ndGgtMV1bMF0sIShjIT09XCJzcGFjZVwiJiZjIT09XCJjb21tZW50XCIpKTspdGhpcy50b2tlbml6ZXIuYmFjayhhLnBvcCgpKTt0aGlzLmRlY2woYSx1KX1lbHNlIHRoaXMudW5rbm93bldvcmQoYSl9cGFyc2UoKXtsZXQgZTtmb3IoOyF0aGlzLnRva2VuaXplci5lbmRPZkZpbGUoKTspc3dpdGNoKGU9dGhpcy50b2tlbml6ZXIubmV4dFRva2VuKCksZVswXSl7Y2FzZVwic3BhY2VcIjp0aGlzLnNwYWNlcys9ZVsxXTticmVhaztjYXNlXCI7XCI6dGhpcy5mcmVlU2VtaWNvbG9uKGUpO2JyZWFrO2Nhc2VcIn1cIjp0aGlzLmVuZChlKTticmVhaztjYXNlXCJjb21tZW50XCI6dGhpcy5jb21tZW50KGUpO2JyZWFrO2Nhc2VcImF0LXdvcmRcIjp0aGlzLmF0cnVsZShlKTticmVhaztjYXNlXCJ7XCI6dGhpcy5lbXB0eVJ1bGUoZSk7YnJlYWs7ZGVmYXVsdDp0aGlzLm90aGVyKGUpO2JyZWFrfXRoaXMuZW5kRmlsZSgpfXByZWNoZWNrTWlzc2VkU2VtaWNvbG9uKCl7fXJhdyhlLHMscixuKXtsZXQgaSxvLHU9ci5sZW5ndGgsYT1cIlwiLGM9ITAsZixwO2ZvcihsZXQgbD0wO2w8dTtsKz0xKWk9cltsXSxvPWlbMF0sbz09PVwic3BhY2VcIiYmbD09PXUtMSYmIW4/Yz0hMTpvPT09XCJjb21tZW50XCI/KHA9cltsLTFdP3JbbC0xXVswXTpcImVtcHR5XCIsZj1yW2wrMV0/cltsKzFdWzBdOlwiZW1wdHlcIiwhb29bcF0mJiFvb1tmXT9hLnNsaWNlKC0xKT09PVwiLFwiP2M9ITE6YSs9aVsxXTpjPSExKTphKz1pWzFdO2lmKCFjKXtsZXQgbD1yLnJlZHVjZSgoeSx4KT0+eSt4WzFdLFwiXCIpO2UucmF3c1tzXT17cmF3OmwsdmFsdWU6YX19ZVtzXT1hfXJ1bGUoZSl7ZS5wb3AoKTtsZXQgcz1uZXcgaW87dGhpcy5pbml0KHMsZVswXVsyXSkscy5yYXdzLmJldHdlZW49dGhpcy5zcGFjZXNBbmRDb21tZW50c0Zyb21FbmQoZSksdGhpcy5yYXcocyxcInNlbGVjdG9yXCIsZSksdGhpcy5jdXJyZW50PXN9c3BhY2VzQW5kQ29tbWVudHNGcm9tRW5kKGUpe2xldCBzLHI9XCJcIjtmb3IoO2UubGVuZ3RoJiYocz1lW2UubGVuZ3RoLTFdWzBdLCEocyE9PVwic3BhY2VcIiYmcyE9PVwiY29tbWVudFwiKSk7KXI9ZS5wb3AoKVsxXStyO3JldHVybiByfXNwYWNlc0FuZENvbW1lbnRzRnJvbVN0YXJ0KGUpe2xldCBzLHI9XCJcIjtmb3IoO2UubGVuZ3RoJiYocz1lWzBdWzBdLCEocyE9PVwic3BhY2VcIiYmcyE9PVwiY29tbWVudFwiKSk7KXIrPWUuc2hpZnQoKVsxXTtyZXR1cm4gcn1zcGFjZXNGcm9tRW5kKGUpe2xldCBzLHI9XCJcIjtmb3IoO2UubGVuZ3RoJiYocz1lW2UubGVuZ3RoLTFdWzBdLHM9PT1cInNwYWNlXCIpOylyPWUucG9wKClbMV0rcjtyZXR1cm4gcn1zdHJpbmdGcm9tKGUscyl7bGV0IHI9XCJcIjtmb3IobGV0IG49cztuPGUubGVuZ3RoO24rKylyKz1lW25dWzFdO3JldHVybiBlLnNwbGljZShzLGUubGVuZ3RoLXMpLHJ9dW5jbG9zZWRCbG9jaygpe2xldCBlPXRoaXMuY3VycmVudC5zb3VyY2Uuc3RhcnQ7dGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcIlVuY2xvc2VkIGJsb2NrXCIsZS5saW5lLGUuY29sdW1uKX11bmNsb3NlZEJyYWNrZXQoZSl7dGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcIlVuY2xvc2VkIGJyYWNrZXRcIix7b2Zmc2V0OmVbMl19LHtvZmZzZXQ6ZVsyXSsxfSl9dW5leHBlY3RlZENsb3NlKGUpe3Rocm93IHRoaXMuaW5wdXQuZXJyb3IoXCJVbmV4cGVjdGVkIH1cIix7b2Zmc2V0OmVbMl19LHtvZmZzZXQ6ZVsyXSsxfSl9dW5rbm93bldvcmQoZSl7dGhyb3cgdGhpcy5pbnB1dC5lcnJvcihcIlVua25vd24gd29yZCBcIitlWzBdWzFdLHtvZmZzZXQ6ZVswXVsyXX0se29mZnNldDplWzBdWzJdK2VbMF1bMV0ubGVuZ3RofSl9dW5uYW1lZEF0cnVsZShlLHMpe3Rocm93IHRoaXMuaW5wdXQuZXJyb3IoXCJBdC1ydWxlIHdpdGhvdXQgbmFtZVwiLHtvZmZzZXQ6c1syXX0se29mZnNldDpzWzJdK3NbMV0ubGVuZ3RofSl9fTthby5leHBvcnRzPXlzfSk7dmFyIGd0PWcoKFl2LHVvKT0+e1widXNlIHN0cmljdFwiO3ZhciBZYz1sZSgpLFZjPXFlKCksemM9SnQoKTtmdW5jdGlvbiBYdCh0LGUpe2xldCBzPW5ldyBWYyh0LGUpLHI9bmV3IHpjKHMpO3RyeXtyLnBhcnNlKCl9Y2F0Y2gobil7dGhyb3cgbn1yZXR1cm4gci5yb290fXVvLmV4cG9ydHM9WHQ7WHQuZGVmYXVsdD1YdDtZYy5yZWdpc3RlclBhcnNlKFh0KX0pO3ZhciBsbz1nKChWdixncyk9Pnt2YXIgR2M9UXQoKSxqYz1xZSgpO2dzLmV4cG9ydHM9e2lzSW5saW5lQ29tbWVudCh0KXtpZih0WzBdPT09XCJ3b3JkXCImJnRbMV0uc2xpY2UoMCwyKT09PVwiLy9cIil7bGV0IGU9dCxzPVtdLHIsbjtmb3IoO3Q7KXtpZigvXFxyP1xcbi8udGVzdCh0WzFdKSl7aWYoL1snXCJdLipcXHI/XFxuLy50ZXN0KHRbMV0pKXtzLnB1c2godFsxXS5zdWJzdHJpbmcoMCx0WzFdLmluZGV4T2YoYFxuYCkpKSxuPXRbMV0uc3Vic3RyaW5nKHRbMV0uaW5kZXhPZihgXG5gKSk7bGV0IG89dGhpcy5pbnB1dC5jc3MudmFsdWVPZigpLnN1YnN0cmluZyh0aGlzLnRva2VuaXplci5wb3NpdGlvbigpKTtuKz1vLHI9dFszXStvLmxlbmd0aC1uLmxlbmd0aH1lbHNlIHRoaXMudG9rZW5pemVyLmJhY2sodCk7YnJlYWt9cy5wdXNoKHRbMV0pLHI9dFsyXSx0PXRoaXMudG9rZW5pemVyLm5leHRUb2tlbih7aWdub3JlVW5jbG9zZWQ6ITB9KX1sZXQgaT1bXCJjb21tZW50XCIscy5qb2luKFwiXCIpLGVbMl0scl07cmV0dXJuIHRoaXMuaW5saW5lQ29tbWVudChpKSxuJiYodGhpcy5pbnB1dD1uZXcgamMobiksdGhpcy50b2tlbml6ZXI9R2ModGhpcy5pbnB1dCkpLCEwfWVsc2UgaWYodFsxXT09PVwiL1wiKXtsZXQgZT10aGlzLnRva2VuaXplci5uZXh0VG9rZW4oe2lnbm9yZVVuY2xvc2VkOiEwfSk7aWYoZVswXT09PVwiY29tbWVudFwiJiYvXlxcL1xcKi8udGVzdChlWzFdKSlyZXR1cm4gZVswXT1cIndvcmRcIixlWzFdPWVbMV0uc2xpY2UoMSksdFsxXT1cIi8vXCIsdGhpcy50b2tlbml6ZXIuYmFjayhlKSxncy5leHBvcnRzLmlzSW5saW5lQ29tbWVudC5iaW5kKHRoaXMpKHQpfXJldHVybiExfX19KTt2YXIgZm89ZygoenYsY28pPT57Y28uZXhwb3J0cz17aW50ZXJwb2xhdGlvbih0KXtsZXQgZT1bdCx0aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKV0scz1bXCJ3b3JkXCIsXCJ9XCJdO2lmKGVbMF1bMV0ubGVuZ3RoPjF8fGVbMV1bMF0hPT1cIntcIilyZXR1cm4gdGhpcy50b2tlbml6ZXIuYmFjayhlWzFdKSwhMTtmb3IodD10aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTt0JiZzLmluY2x1ZGVzKHRbMF0pOyllLnB1c2godCksdD10aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTtsZXQgcj1lLm1hcCh1PT51WzFdKSxbbl09ZSxpPWUucG9wKCksbz1bXCJ3b3JkXCIsci5qb2luKFwiXCIpLG5bMl0saVsyXV07cmV0dXJuIHRoaXMudG9rZW5pemVyLmJhY2sodCksdGhpcy50b2tlbml6ZXIuYmFjayhvKSwhMH19fSk7dmFyIGhvPWcoKEd2LHBvKT0+e3ZhciBIYz0vXiNbMC05YS1mQS1GXXs2fSR8XiNbMC05YS1mQS1GXXszfSQvLEtjPS9cXC5bMC05XS8sUWM9dD0+e2xldFssZV09dCxbc109ZTtyZXR1cm4ocz09PVwiLlwifHxzPT09XCIjXCIpJiZIYy50ZXN0KGUpPT09ITEmJktjLnRlc3QoZSk9PT0hMX07cG8uZXhwb3J0cz17aXNNaXhpblRva2VuOlFjfX0pO3ZhciB5bz1nKChqdixtbyk9Pnt2YXIgSmM9UXQoKSxYYz0vXnVybFxcKCguKylcXCkvO21vLmV4cG9ydHM9dD0+e2xldHtuYW1lOmUscGFyYW1zOnM9XCJcIn09dDtpZihlPT09XCJpbXBvcnRcIiYmcy5sZW5ndGgpe3QuaW1wb3J0PSEwO2xldCByPUpjKHtjc3M6c30pO2Zvcih0LmZpbGVuYW1lPXMucmVwbGFjZShYYyxcIiQxXCIpOyFyLmVuZE9mRmlsZSgpOyl7bGV0W24saV09ci5uZXh0VG9rZW4oKTtpZihuPT09XCJ3b3JkXCImJmk9PT1cInVybFwiKXJldHVybjtpZihuPT09XCJicmFja2V0c1wiKXt0Lm9wdGlvbnM9aSx0LmZpbGVuYW1lPXMucmVwbGFjZShpLFwiXCIpLnRyaW0oKTticmVha319fX19KTt2YXIgeG89ZygoSHYsdm8pPT57dmFyIGdvPS86JC8sd289L146KFxccyspPy87dm8uZXhwb3J0cz10PT57bGV0e25hbWU6ZSxwYXJhbXM6cz1cIlwifT10O2lmKHQubmFtZS5zbGljZSgtMSk9PT1cIjpcIil7aWYoZ28udGVzdChlKSl7bGV0W3JdPWUubWF0Y2goZ28pO3QubmFtZT1lLnJlcGxhY2UocixcIlwiKSx0LnJhd3MuYWZ0ZXJOYW1lPXIrKHQucmF3cy5hZnRlck5hbWV8fFwiXCIpLHQudmFyaWFibGU9ITAsdC52YWx1ZT10LnBhcmFtc31pZih3by50ZXN0KHMpKXtsZXRbcl09cy5tYXRjaCh3byk7dC52YWx1ZT1zLnJlcGxhY2UocixcIlwiKSx0LnJhd3MuYWZ0ZXJOYW1lPSh0LnJhd3MuYWZ0ZXJOYW1lfHxcIlwiKStyLHQudmFyaWFibGU9ITB9fX19KTt2YXIgRW89ZygoUXYsX28pPT57dmFyIFpjPVJlKCksZWY9SnQoKSx7aXNJbmxpbmVDb21tZW50OnRmfT1sbygpLHtpbnRlcnBvbGF0aW9uOmJvfT1mbygpLHtpc01peGluVG9rZW46cmZ9PWhvKCksc2Y9eW8oKSxuZj14bygpLG9mPS8oIVxccyppbXBvcnRhbnQpJC9pO19vLmV4cG9ydHM9Y2xhc3MgZXh0ZW5kcyBlZntjb25zdHJ1Y3RvciguLi5lKXtzdXBlciguLi5lKSx0aGlzLmxhc3ROb2RlPW51bGx9YXRydWxlKGUpe2JvLmJpbmQodGhpcykoZSl8fChzdXBlci5hdHJ1bGUoZSksc2YodGhpcy5sYXN0Tm9kZSksbmYodGhpcy5sYXN0Tm9kZSkpfWRlY2woLi4uZSl7c3VwZXIuZGVjbCguLi5lKSwvZXh0ZW5kXFwoLitcXCkvaS50ZXN0KHRoaXMubGFzdE5vZGUudmFsdWUpJiYodGhpcy5sYXN0Tm9kZS5leHRlbmQ9ITApfWVhY2goZSl7ZVswXVsxXT1gICR7ZVswXVsxXX1gO2xldCBzPWUuZmluZEluZGV4KHU9PnVbMF09PT1cIihcIikscj1lLnJldmVyc2UoKS5maW5kKHU9PnVbMF09PT1cIilcIiksbj1lLnJldmVyc2UoKS5pbmRleE9mKHIpLG89ZS5zcGxpY2UocyxuKS5tYXAodT0+dVsxXSkuam9pbihcIlwiKTtmb3IobGV0IHUgb2YgZS5yZXZlcnNlKCkpdGhpcy50b2tlbml6ZXIuYmFjayh1KTt0aGlzLmF0cnVsZSh0aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKSksdGhpcy5sYXN0Tm9kZS5mdW5jdGlvbj0hMCx0aGlzLmxhc3ROb2RlLnBhcmFtcz1vfWluaXQoZSxzLHIpe3N1cGVyLmluaXQoZSxzLHIpLHRoaXMubGFzdE5vZGU9ZX1pbmxpbmVDb21tZW50KGUpe2xldCBzPW5ldyBaYyxyPWVbMV0uc2xpY2UoMik7aWYodGhpcy5pbml0KHMsZVsyXSkscy5zb3VyY2UuZW5kPXRoaXMuZ2V0UG9zaXRpb24oZVszXXx8ZVsyXSkscy5pbmxpbmU9ITAscy5yYXdzLmJlZ2luPVwiLy9cIiwvXlxccyokLy50ZXN0KHIpKXMudGV4dD1cIlwiLHMucmF3cy5sZWZ0PXIscy5yYXdzLnJpZ2h0PVwiXCI7ZWxzZXtsZXQgbj1yLm1hdGNoKC9eKFxccyopKFteXSpbXlxcc10pKFxccyopJC8pO1sscy5yYXdzLmxlZnQscy50ZXh0LHMucmF3cy5yaWdodF09bn19bWl4aW4oZSl7bGV0W3NdPWUscj1zWzFdLnNsaWNlKDAsMSksbj1lLmZpbmRJbmRleChjPT5jWzBdPT09XCJicmFja2V0c1wiKSxpPWUuZmluZEluZGV4KGM9PmNbMF09PT1cIihcIiksbz1cIlwiO2lmKChuPDB8fG4+MykmJmk+MCl7bGV0IGM9ZS5yZWR1Y2UoKHcsdixOKT0+dlswXT09PVwiKVwiP046dykscD1lLnNsaWNlKGksYytpKS5tYXAodz0+d1sxXSkuam9pbihcIlwiKSxbbF09ZS5zbGljZShpKSx5PVtsWzJdLGxbM11dLFt4XT1lLnNsaWNlKGMsYysxKSxoPVt4WzJdLHhbM11dLGQ9W1wiYnJhY2tldHNcIixwXS5jb25jYXQoeSxoKSxtPWUuc2xpY2UoMCxpKSxiPWUuc2xpY2UoYysxKTtlPW0sZS5wdXNoKGQpLGU9ZS5jb25jYXQoYil9bGV0IHU9W107Zm9yKGxldCBjIG9mIGUpaWYoKGNbMV09PT1cIiFcInx8dS5sZW5ndGgpJiZ1LnB1c2goYyksY1sxXT09PVwiaW1wb3J0YW50XCIpYnJlYWs7aWYodS5sZW5ndGgpe2xldFtjXT11LGY9ZS5pbmRleE9mKGMpLHA9dVt1Lmxlbmd0aC0xXSxsPVtjWzJdLGNbM11dLHk9W3BbNF0scFs1XV0saD1bXCJ3b3JkXCIsdS5tYXAoZD0+ZFsxXSkuam9pbihcIlwiKV0uY29uY2F0KGwseSk7ZS5zcGxpY2UoZix1Lmxlbmd0aCxoKX1sZXQgYT1lLmZpbmRJbmRleChjPT5vZi50ZXN0KGNbMV0pKTthPjAmJihbLG9dPWVbYV0sZS5zcGxpY2UoYSwxKSk7Zm9yKGxldCBjIG9mIGUucmV2ZXJzZSgpKXRoaXMudG9rZW5pemVyLmJhY2soYyk7dGhpcy5hdHJ1bGUodGhpcy50b2tlbml6ZXIubmV4dFRva2VuKCkpLHRoaXMubGFzdE5vZGUubWl4aW49ITAsdGhpcy5sYXN0Tm9kZS5yYXdzLmlkZW50aWZpZXI9cixvJiYodGhpcy5sYXN0Tm9kZS5pbXBvcnRhbnQ9ITAsdGhpcy5sYXN0Tm9kZS5yYXdzLmltcG9ydGFudD1vKX1vdGhlcihlKXt0Zi5iaW5kKHRoaXMpKGUpfHxzdXBlci5vdGhlcihlKX1ydWxlKGUpe2xldCBzPWVbZS5sZW5ndGgtMV0scj1lW2UubGVuZ3RoLTJdO2lmKHJbMF09PT1cImF0LXdvcmRcIiYmc1swXT09PVwie1wiJiYodGhpcy50b2tlbml6ZXIuYmFjayhzKSxiby5iaW5kKHRoaXMpKHIpKSl7bGV0IGk9dGhpcy50b2tlbml6ZXIubmV4dFRva2VuKCk7ZT1lLnNsaWNlKDAsZS5sZW5ndGgtMikuY29uY2F0KFtpXSk7Zm9yKGxldCBvIG9mIGUucmV2ZXJzZSgpKXRoaXMudG9rZW5pemVyLmJhY2sobyk7cmV0dXJufXN1cGVyLnJ1bGUoZSksLzpleHRlbmRcXCguK1xcKS9pLnRlc3QodGhpcy5sYXN0Tm9kZS5zZWxlY3RvcikmJih0aGlzLmxhc3ROb2RlLmV4dGVuZD0hMCl9dW5rbm93bldvcmQoZSl7bGV0W3NdPWU7aWYoZVswXVsxXT09PVwiZWFjaFwiJiZlWzFdWzBdPT09XCIoXCIpe3RoaXMuZWFjaChlKTtyZXR1cm59aWYocmYocykpe3RoaXMubWl4aW4oZSk7cmV0dXJufXN1cGVyLnVua25vd25Xb3JkKGUpfX19KTt2YXIgU289ZygoWHYsa28pPT57dmFyIGFmPVl0KCk7a28uZXhwb3J0cz1jbGFzcyBleHRlbmRzIGFme2F0cnVsZShlLHMpe2lmKCFlLm1peGluJiYhZS52YXJpYWJsZSYmIWUuZnVuY3Rpb24pe3N1cGVyLmF0cnVsZShlLHMpO3JldHVybn1sZXQgbj1gJHtlLmZ1bmN0aW9uP1wiXCI6ZS5yYXdzLmlkZW50aWZpZXJ8fFwiQFwifSR7ZS5uYW1lfWAsaT1lLnBhcmFtcz90aGlzLnJhd1ZhbHVlKGUsXCJwYXJhbXNcIik6XCJcIixvPWUucmF3cy5pbXBvcnRhbnR8fFwiXCI7aWYoZS52YXJpYWJsZSYmKGk9ZS52YWx1ZSksdHlwZW9mIGUucmF3cy5hZnRlck5hbWU8XCJ1XCI/bis9ZS5yYXdzLmFmdGVyTmFtZTppJiYobis9XCIgXCIpLGUubm9kZXMpdGhpcy5ibG9jayhlLG4raStvKTtlbHNle2xldCB1PShlLnJhd3MuYmV0d2Vlbnx8XCJcIikrbysocz9cIjtcIjpcIlwiKTt0aGlzLmJ1aWxkZXIobitpK3UsZSl9fWNvbW1lbnQoZSl7aWYoZS5pbmxpbmUpe2xldCBzPXRoaXMucmF3KGUsXCJsZWZ0XCIsXCJjb21tZW50TGVmdFwiKSxyPXRoaXMucmF3KGUsXCJyaWdodFwiLFwiY29tbWVudFJpZ2h0XCIpO3RoaXMuYnVpbGRlcihgLy8ke3N9JHtlLnRleHR9JHtyfWAsZSl9ZWxzZSBzdXBlci5jb21tZW50KGUpfX19KTt2YXIgVG89ZygoWnYsd3MpPT57dmFyIHVmPXFlKCksbGY9RW8oKSxjZj1TbygpO3dzLmV4cG9ydHM9e3BhcnNlKHQsZSl7bGV0IHM9bmV3IHVmKHQsZSkscj1uZXcgbGYocyk7cmV0dXJuIHIucGFyc2UoKSxyLnJvb3Qud2FsayhuPT57bGV0IGk9cy5jc3MubGFzdEluZGV4T2Yobi5zb3VyY2UuaW5wdXQuY3NzKTtpZihpPT09MClyZXR1cm47aWYoaStuLnNvdXJjZS5pbnB1dC5jc3MubGVuZ3RoIT09cy5jc3MubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RhdGUgZGV0ZWN0ZWQgaW4gcG9zdGNzcy1sZXNzXCIpO2xldCBvPWkrbi5zb3VyY2Uuc3RhcnQub2Zmc2V0LHU9cy5mcm9tT2Zmc2V0KGkrbi5zb3VyY2Uuc3RhcnQub2Zmc2V0KTtpZihuLnNvdXJjZS5zdGFydD17b2Zmc2V0Om8sbGluZTp1LmxpbmUsY29sdW1uOnUuY29sfSxuLnNvdXJjZS5lbmQpe2xldCBhPWkrbi5zb3VyY2UuZW5kLm9mZnNldCxjPXMuZnJvbU9mZnNldChpK24uc291cmNlLmVuZC5vZmZzZXQpO24uc291cmNlLmVuZD17b2Zmc2V0OmEsbGluZTpjLmxpbmUsY29sdW1uOmMuY29sfX19KSxyLnJvb3R9LHN0cmluZ2lmeSh0LGUpe25ldyBjZihlKS5zdHJpbmdpZnkodCl9LG5vZGVUb1N0cmluZyh0KXtsZXQgZT1cIlwiO3JldHVybiB3cy5leHBvcnRzLnN0cmluZ2lmeSh0LHM9PntlKz1zfSksZX19fSk7dmFyIFp0PWcoKGV4LEFvKT0+e1widXNlIHN0cmljdFwiO3ZhciBmZj1sZSgpLENvLE9vLHllPWNsYXNzIGV4dGVuZHMgZmZ7Y29uc3RydWN0b3IoZSl7c3VwZXIoe3R5cGU6XCJkb2N1bWVudFwiLC4uLmV9KSx0aGlzLm5vZGVzfHwodGhpcy5ub2Rlcz1bXSl9dG9SZXN1bHQoZT17fSl7cmV0dXJuIG5ldyBDbyhuZXcgT28sdGhpcyxlKS5zdHJpbmdpZnkoKX19O3llLnJlZ2lzdGVyTGF6eVJlc3VsdD10PT57Q289dH07eWUucmVnaXN0ZXJQcm9jZXNzb3I9dD0+e09vPXR9O0FvLmV4cG9ydHM9eWU7eWUuZGVmYXVsdD15ZX0pO3ZhciBQbz1nKCh0eCxObyk9PntcInVzZSBzdHJpY3RcIjt2YXIgcGY9R3QoKSxoZj1SZSgpLGRmPW10KCksbWY9cWUoKSx5Zj1jcygpLGdmPURlKCksd2Y9anQoKTtmdW5jdGlvbiB3dCh0LGUpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHQubWFwKG49Pnd0KG4pKTtsZXR7aW5wdXRzOnMsLi4ucn09dDtpZihzKXtlPVtdO2ZvcihsZXQgbiBvZiBzKXtsZXQgaT17Li4ubixfX3Byb3RvX186bWYucHJvdG90eXBlfTtpLm1hcCYmKGkubWFwPXsuLi5pLm1hcCxfX3Byb3RvX186eWYucHJvdG90eXBlfSksZS5wdXNoKGkpfX1pZihyLm5vZGVzJiYoci5ub2Rlcz10Lm5vZGVzLm1hcChuPT53dChuLGUpKSksci5zb3VyY2Upe2xldHtpbnB1dElkOm4sLi4uaX09ci5zb3VyY2U7ci5zb3VyY2U9aSxuIT1udWxsJiYoci5zb3VyY2UuaW5wdXQ9ZVtuXSl9aWYoci50eXBlPT09XCJyb290XCIpcmV0dXJuIG5ldyBnZihyKTtpZihyLnR5cGU9PT1cImRlY2xcIilyZXR1cm4gbmV3IGRmKHIpO2lmKHIudHlwZT09PVwicnVsZVwiKXJldHVybiBuZXcgd2Yocik7aWYoci50eXBlPT09XCJjb21tZW50XCIpcmV0dXJuIG5ldyBoZihyKTtpZihyLnR5cGU9PT1cImF0cnVsZVwiKXJldHVybiBuZXcgcGYocik7dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBub2RlIHR5cGU6IFwiK3QudHlwZSl9Tm8uZXhwb3J0cz13dDt3dC5kZWZhdWx0PXd0fSk7dmFyIHZzPWcoKHJ4LFJvKT0+e1JvLmV4cG9ydHM9Y2xhc3N7Z2VuZXJhdGUoKXt9fX0pO3ZhciB4cz1nKChueCxJbyk9PntcInVzZSBzdHJpY3RcIjt2YXIgdnQ9Y2xhc3N7Y29uc3RydWN0b3IoZSxzPXt9KXtpZih0aGlzLnR5cGU9XCJ3YXJuaW5nXCIsdGhpcy50ZXh0PWUscy5ub2RlJiZzLm5vZGUuc291cmNlKXtsZXQgcj1zLm5vZGUucmFuZ2VCeShzKTt0aGlzLmxpbmU9ci5zdGFydC5saW5lLHRoaXMuY29sdW1uPXIuc3RhcnQuY29sdW1uLHRoaXMuZW5kTGluZT1yLmVuZC5saW5lLHRoaXMuZW5kQ29sdW1uPXIuZW5kLmNvbHVtbn1mb3IobGV0IHIgaW4gcyl0aGlzW3JdPXNbcl19dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5ub2RlP3RoaXMubm9kZS5lcnJvcih0aGlzLnRleHQse2luZGV4OnRoaXMuaW5kZXgscGx1Z2luOnRoaXMucGx1Z2luLHdvcmQ6dGhpcy53b3JkfSkubWVzc2FnZTp0aGlzLnBsdWdpbj90aGlzLnBsdWdpbitcIjogXCIrdGhpcy50ZXh0OnRoaXMudGV4dH19O0lvLmV4cG9ydHM9dnQ7dnQuZGVmYXVsdD12dH0pO3ZhciBlcj1nKChpeCxxbyk9PntcInVzZSBzdHJpY3RcIjt2YXIgdmY9eHMoKSx4dD1jbGFzc3tnZXQgY29udGVudCgpe3JldHVybiB0aGlzLmNzc31jb25zdHJ1Y3RvcihlLHMscil7dGhpcy5wcm9jZXNzb3I9ZSx0aGlzLm1lc3NhZ2VzPVtdLHRoaXMucm9vdD1zLHRoaXMub3B0cz1yLHRoaXMuY3NzPXZvaWQgMCx0aGlzLm1hcD12b2lkIDB9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5jc3N9d2FybihlLHM9e30pe3MucGx1Z2lufHx0aGlzLmxhc3RQbHVnaW4mJnRoaXMubGFzdFBsdWdpbi5wb3N0Y3NzUGx1Z2luJiYocy5wbHVnaW49dGhpcy5sYXN0UGx1Z2luLnBvc3Rjc3NQbHVnaW4pO2xldCByPW5ldyB2ZihlLHMpO3JldHVybiB0aGlzLm1lc3NhZ2VzLnB1c2gocikscn13YXJuaW5ncygpe3JldHVybiB0aGlzLm1lc3NhZ2VzLmZpbHRlcihlPT5lLnR5cGU9PT1cIndhcm5pbmdcIil9fTtxby5leHBvcnRzPXh0O3h0LmRlZmF1bHQ9eHR9KTt2YXIgYnM9Zygob3gsRG8pPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIExvPXt9O0RvLmV4cG9ydHM9ZnVuY3Rpb24oZSl7TG9bZV18fChMb1tlXT0hMCx0eXBlb2YgY29uc29sZTxcInVcIiYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4oZSkpfX0pO3ZhciBrcz1nKCh1eCxGbyk9PntcInVzZSBzdHJpY3RcIjt2YXIgeGY9bGUoKSxiZj1adCgpLF9mPXZzKCksRWY9Z3QoKSxCbz1lcigpLGtmPURlKCksU2Y9dXQoKSx7aXNDbGVhbjpLLG15OlRmfT1WdCgpLGF4PWJzKCksQ2Y9e2F0cnVsZTpcIkF0UnVsZVwiLGNvbW1lbnQ6XCJDb21tZW50XCIsZGVjbDpcIkRlY2xhcmF0aW9uXCIsZG9jdW1lbnQ6XCJEb2N1bWVudFwiLHJvb3Q6XCJSb290XCIscnVsZTpcIlJ1bGVcIn0sT2Y9e0F0UnVsZTohMCxBdFJ1bGVFeGl0OiEwLENvbW1lbnQ6ITAsQ29tbWVudEV4aXQ6ITAsRGVjbGFyYXRpb246ITAsRGVjbGFyYXRpb25FeGl0OiEwLERvY3VtZW50OiEwLERvY3VtZW50RXhpdDohMCxPbmNlOiEwLE9uY2VFeGl0OiEwLHBvc3Rjc3NQbHVnaW46ITAscHJlcGFyZTohMCxSb290OiEwLFJvb3RFeGl0OiEwLFJ1bGU6ITAsUnVsZUV4aXQ6ITB9LEFmPXtPbmNlOiEwLHBvc3Rjc3NQbHVnaW46ITAscHJlcGFyZTohMH0sTWU9MDtmdW5jdGlvbiBidCh0KXtyZXR1cm4gdHlwZW9mIHQ9PVwib2JqZWN0XCImJnR5cGVvZiB0LnRoZW49PVwiZnVuY3Rpb25cIn1mdW5jdGlvbiBVbyh0KXtsZXQgZT0hMSxzPUNmW3QudHlwZV07cmV0dXJuIHQudHlwZT09PVwiZGVjbFwiP2U9dC5wcm9wLnRvTG93ZXJDYXNlKCk6dC50eXBlPT09XCJhdHJ1bGVcIiYmKGU9dC5uYW1lLnRvTG93ZXJDYXNlKCkpLGUmJnQuYXBwZW5kP1tzLHMrXCItXCIrZSxNZSxzK1wiRXhpdFwiLHMrXCJFeGl0LVwiK2VdOmU/W3MscytcIi1cIitlLHMrXCJFeGl0XCIscytcIkV4aXQtXCIrZV06dC5hcHBlbmQ/W3MsTWUscytcIkV4aXRcIl06W3MscytcIkV4aXRcIl19ZnVuY3Rpb24gTW8odCl7bGV0IGU7cmV0dXJuIHQudHlwZT09PVwiZG9jdW1lbnRcIj9lPVtcIkRvY3VtZW50XCIsTWUsXCJEb2N1bWVudEV4aXRcIl06dC50eXBlPT09XCJyb290XCI/ZT1bXCJSb290XCIsTWUsXCJSb290RXhpdFwiXTplPVVvKHQpLHtldmVudEluZGV4OjAsZXZlbnRzOmUsaXRlcmF0b3I6MCxub2RlOnQsdmlzaXRvckluZGV4OjAsdmlzaXRvcnM6W119fWZ1bmN0aW9uIF9zKHQpe3JldHVybiB0W0tdPSExLHQubm9kZXMmJnQubm9kZXMuZm9yRWFjaChlPT5fcyhlKSksdH12YXIgRXM9e30sZmU9Y2xhc3MgdHtnZXQgY29udGVudCgpe3JldHVybiB0aGlzLnN0cmluZ2lmeSgpLmNvbnRlbnR9Z2V0IGNzcygpe3JldHVybiB0aGlzLnN0cmluZ2lmeSgpLmNzc31nZXQgbWFwKCl7cmV0dXJuIHRoaXMuc3RyaW5naWZ5KCkubWFwfWdldCBtZXNzYWdlcygpe3JldHVybiB0aGlzLnN5bmMoKS5tZXNzYWdlc31nZXQgb3B0cygpe3JldHVybiB0aGlzLnJlc3VsdC5vcHRzfWdldCBwcm9jZXNzb3IoKXtyZXR1cm4gdGhpcy5yZXN1bHQucHJvY2Vzc29yfWdldCByb290KCl7cmV0dXJuIHRoaXMuc3luYygpLnJvb3R9Z2V0W1N5bWJvbC50b1N0cmluZ1RhZ10oKXtyZXR1cm5cIkxhenlSZXN1bHRcIn1jb25zdHJ1Y3RvcihlLHMscil7dGhpcy5zdHJpbmdpZmllZD0hMSx0aGlzLnByb2Nlc3NlZD0hMTtsZXQgbjtpZih0eXBlb2Ygcz09XCJvYmplY3RcIiYmcyE9PW51bGwmJihzLnR5cGU9PT1cInJvb3RcInx8cy50eXBlPT09XCJkb2N1bWVudFwiKSluPV9zKHMpO2Vsc2UgaWYocyBpbnN0YW5jZW9mIHR8fHMgaW5zdGFuY2VvZiBCbyluPV9zKHMucm9vdCkscy5tYXAmJih0eXBlb2Ygci5tYXA+XCJ1XCImJihyLm1hcD17fSksci5tYXAuaW5saW5lfHwoci5tYXAuaW5saW5lPSExKSxyLm1hcC5wcmV2PXMubWFwKTtlbHNle2xldCBpPUVmO3Iuc3ludGF4JiYoaT1yLnN5bnRheC5wYXJzZSksci5wYXJzZXImJihpPXIucGFyc2VyKSxpLnBhcnNlJiYoaT1pLnBhcnNlKTt0cnl7bj1pKHMscil9Y2F0Y2gobyl7dGhpcy5wcm9jZXNzZWQ9ITAsdGhpcy5lcnJvcj1vfW4mJiFuW1RmXSYmeGYucmVidWlsZChuKX10aGlzLnJlc3VsdD1uZXcgQm8oZSxuLHIpLHRoaXMuaGVscGVycz17Li4uRXMscG9zdGNzczpFcyxyZXN1bHQ6dGhpcy5yZXN1bHR9LHRoaXMucGx1Z2lucz10aGlzLnByb2Nlc3Nvci5wbHVnaW5zLm1hcChpPT50eXBlb2YgaT09XCJvYmplY3RcIiYmaS5wcmVwYXJlP3suLi5pLC4uLmkucHJlcGFyZSh0aGlzLnJlc3VsdCl9OmkpfWFzeW5jKCl7cmV0dXJuIHRoaXMuZXJyb3I/UHJvbWlzZS5yZWplY3QodGhpcy5lcnJvcik6dGhpcy5wcm9jZXNzZWQ/UHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzdWx0KToodGhpcy5wcm9jZXNzaW5nfHwodGhpcy5wcm9jZXNzaW5nPXRoaXMucnVuQXN5bmMoKSksdGhpcy5wcm9jZXNzaW5nKX1jYXRjaChlKXtyZXR1cm4gdGhpcy5hc3luYygpLmNhdGNoKGUpfWZpbmFsbHkoZSl7cmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKGUsZSl9Z2V0QXN5bmNFcnJvcigpe3Rocm93IG5ldyBFcnJvcihcIlVzZSBwcm9jZXNzKGNzcykudGhlbihjYikgdG8gd29yayB3aXRoIGFzeW5jIHBsdWdpbnNcIil9aGFuZGxlRXJyb3IoZSxzKXtsZXQgcj10aGlzLnJlc3VsdC5sYXN0UGx1Z2luO3RyeXtzJiZzLmFkZFRvRXJyb3IoZSksdGhpcy5lcnJvcj1lLGUubmFtZT09PVwiQ3NzU3ludGF4RXJyb3JcIiYmIWUucGx1Z2luPyhlLnBsdWdpbj1yLnBvc3Rjc3NQbHVnaW4sZS5zZXRNZXNzYWdlKCkpOnIucG9zdGNzc1ZlcnNpb259Y2F0Y2gobil7Y29uc29sZSYmY29uc29sZS5lcnJvciYmY29uc29sZS5lcnJvcihuKX1yZXR1cm4gZX1wcmVwYXJlVmlzaXRvcnMoKXt0aGlzLmxpc3RlbmVycz17fTtsZXQgZT0ocyxyLG4pPT57dGhpcy5saXN0ZW5lcnNbcl18fCh0aGlzLmxpc3RlbmVyc1tyXT1bXSksdGhpcy5saXN0ZW5lcnNbcl0ucHVzaChbcyxuXSl9O2ZvcihsZXQgcyBvZiB0aGlzLnBsdWdpbnMpaWYodHlwZW9mIHM9PVwib2JqZWN0XCIpZm9yKGxldCByIGluIHMpe2lmKCFPZltyXSYmL15bQS1aXS8udGVzdChyKSl0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZXZlbnQgJHtyfSBpbiAke3MucG9zdGNzc1BsdWdpbn0uIFRyeSB0byB1cGRhdGUgUG9zdENTUyAoJHt0aGlzLnByb2Nlc3Nvci52ZXJzaW9ufSBub3cpLmApO2lmKCFBZltyXSlpZih0eXBlb2Ygc1tyXT09XCJvYmplY3RcIilmb3IobGV0IG4gaW4gc1tyXSluPT09XCIqXCI/ZShzLHIsc1tyXVtuXSk6ZShzLHIrXCItXCIrbi50b0xvd2VyQ2FzZSgpLHNbcl1bbl0pO2Vsc2UgdHlwZW9mIHNbcl09PVwiZnVuY3Rpb25cIiYmZShzLHIsc1tyXSl9dGhpcy5oYXNMaXN0ZW5lcj1PYmplY3Qua2V5cyh0aGlzLmxpc3RlbmVycykubGVuZ3RoPjB9YXN5bmMgcnVuQXN5bmMoKXt0aGlzLnBsdWdpbj0wO2ZvcihsZXQgZT0wO2U8dGhpcy5wbHVnaW5zLmxlbmd0aDtlKyspe2xldCBzPXRoaXMucGx1Z2luc1tlXSxyPXRoaXMucnVuT25Sb290KHMpO2lmKGJ0KHIpKXRyeXthd2FpdCByfWNhdGNoKG4pe3Rocm93IHRoaXMuaGFuZGxlRXJyb3Iobil9fWlmKHRoaXMucHJlcGFyZVZpc2l0b3JzKCksdGhpcy5oYXNMaXN0ZW5lcil7bGV0IGU9dGhpcy5yZXN1bHQucm9vdDtmb3IoOyFlW0tdOyl7ZVtLXT0hMDtsZXQgcz1bTW8oZSldO2Zvcig7cy5sZW5ndGg+MDspe2xldCByPXRoaXMudmlzaXRUaWNrKHMpO2lmKGJ0KHIpKXRyeXthd2FpdCByfWNhdGNoKG4pe2xldCBpPXNbcy5sZW5ndGgtMV0ubm9kZTt0aHJvdyB0aGlzLmhhbmRsZUVycm9yKG4saSl9fX1pZih0aGlzLmxpc3RlbmVycy5PbmNlRXhpdClmb3IobGV0W3Mscl1vZiB0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCl7dGhpcy5yZXN1bHQubGFzdFBsdWdpbj1zO3RyeXtpZihlLnR5cGU9PT1cImRvY3VtZW50XCIpe2xldCBuPWUubm9kZXMubWFwKGk9PnIoaSx0aGlzLmhlbHBlcnMpKTthd2FpdCBQcm9taXNlLmFsbChuKX1lbHNlIGF3YWl0IHIoZSx0aGlzLmhlbHBlcnMpfWNhdGNoKG4pe3Rocm93IHRoaXMuaGFuZGxlRXJyb3Iobil9fX1yZXR1cm4gdGhpcy5wcm9jZXNzZWQ9ITAsdGhpcy5zdHJpbmdpZnkoKX1ydW5PblJvb3QoZSl7dGhpcy5yZXN1bHQubGFzdFBsdWdpbj1lO3RyeXtpZih0eXBlb2YgZT09XCJvYmplY3RcIiYmZS5PbmNlKXtpZih0aGlzLnJlc3VsdC5yb290LnR5cGU9PT1cImRvY3VtZW50XCIpe2xldCBzPXRoaXMucmVzdWx0LnJvb3Qubm9kZXMubWFwKHI9PmUuT25jZShyLHRoaXMuaGVscGVycykpO3JldHVybiBidChzWzBdKT9Qcm9taXNlLmFsbChzKTpzfXJldHVybiBlLk9uY2UodGhpcy5yZXN1bHQucm9vdCx0aGlzLmhlbHBlcnMpfWVsc2UgaWYodHlwZW9mIGU9PVwiZnVuY3Rpb25cIilyZXR1cm4gZSh0aGlzLnJlc3VsdC5yb290LHRoaXMucmVzdWx0KX1jYXRjaChzKXt0aHJvdyB0aGlzLmhhbmRsZUVycm9yKHMpfX1zdHJpbmdpZnkoKXtpZih0aGlzLmVycm9yKXRocm93IHRoaXMuZXJyb3I7aWYodGhpcy5zdHJpbmdpZmllZClyZXR1cm4gdGhpcy5yZXN1bHQ7dGhpcy5zdHJpbmdpZmllZD0hMCx0aGlzLnN5bmMoKTtsZXQgZT10aGlzLnJlc3VsdC5vcHRzLHM9U2Y7ZS5zeW50YXgmJihzPWUuc3ludGF4LnN0cmluZ2lmeSksZS5zdHJpbmdpZmllciYmKHM9ZS5zdHJpbmdpZmllcikscy5zdHJpbmdpZnkmJihzPXMuc3RyaW5naWZ5KTtsZXQgbj1uZXcgX2Yocyx0aGlzLnJlc3VsdC5yb290LHRoaXMucmVzdWx0Lm9wdHMpLmdlbmVyYXRlKCk7cmV0dXJuIHRoaXMucmVzdWx0LmNzcz1uWzBdLHRoaXMucmVzdWx0Lm1hcD1uWzFdLHRoaXMucmVzdWx0fXN5bmMoKXtpZih0aGlzLmVycm9yKXRocm93IHRoaXMuZXJyb3I7aWYodGhpcy5wcm9jZXNzZWQpcmV0dXJuIHRoaXMucmVzdWx0O2lmKHRoaXMucHJvY2Vzc2VkPSEwLHRoaXMucHJvY2Vzc2luZyl0aHJvdyB0aGlzLmdldEFzeW5jRXJyb3IoKTtmb3IobGV0IGUgb2YgdGhpcy5wbHVnaW5zKXtsZXQgcz10aGlzLnJ1bk9uUm9vdChlKTtpZihidChzKSl0aHJvdyB0aGlzLmdldEFzeW5jRXJyb3IoKX1pZih0aGlzLnByZXBhcmVWaXNpdG9ycygpLHRoaXMuaGFzTGlzdGVuZXIpe2xldCBlPXRoaXMucmVzdWx0LnJvb3Q7Zm9yKDshZVtLXTspZVtLXT0hMCx0aGlzLndhbGtTeW5jKGUpO2lmKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0KWlmKGUudHlwZT09PVwiZG9jdW1lbnRcIilmb3IobGV0IHMgb2YgZS5ub2Rlcyl0aGlzLnZpc2l0U3luYyh0aGlzLmxpc3RlbmVycy5PbmNlRXhpdCxzKTtlbHNlIHRoaXMudmlzaXRTeW5jKHRoaXMubGlzdGVuZXJzLk9uY2VFeGl0LGUpfXJldHVybiB0aGlzLnJlc3VsdH10aGVuKGUscyl7cmV0dXJuIHRoaXMuYXN5bmMoKS50aGVuKGUscyl9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5jc3N9dmlzaXRTeW5jKGUscyl7Zm9yKGxldFtyLG5db2YgZSl7dGhpcy5yZXN1bHQubGFzdFBsdWdpbj1yO2xldCBpO3RyeXtpPW4ocyx0aGlzLmhlbHBlcnMpfWNhdGNoKG8pe3Rocm93IHRoaXMuaGFuZGxlRXJyb3IobyxzLnByb3h5T2YpfWlmKHMudHlwZSE9PVwicm9vdFwiJiZzLnR5cGUhPT1cImRvY3VtZW50XCImJiFzLnBhcmVudClyZXR1cm4hMDtpZihidChpKSl0aHJvdyB0aGlzLmdldEFzeW5jRXJyb3IoKX19dmlzaXRUaWNrKGUpe2xldCBzPWVbZS5sZW5ndGgtMV0se25vZGU6cix2aXNpdG9yczpufT1zO2lmKHIudHlwZSE9PVwicm9vdFwiJiZyLnR5cGUhPT1cImRvY3VtZW50XCImJiFyLnBhcmVudCl7ZS5wb3AoKTtyZXR1cm59aWYobi5sZW5ndGg+MCYmcy52aXNpdG9ySW5kZXg8bi5sZW5ndGgpe2xldFtvLHVdPW5bcy52aXNpdG9ySW5kZXhdO3MudmlzaXRvckluZGV4Kz0xLHMudmlzaXRvckluZGV4PT09bi5sZW5ndGgmJihzLnZpc2l0b3JzPVtdLHMudmlzaXRvckluZGV4PTApLHRoaXMucmVzdWx0Lmxhc3RQbHVnaW49bzt0cnl7cmV0dXJuIHUoci50b1Byb3h5KCksdGhpcy5oZWxwZXJzKX1jYXRjaChhKXt0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGEscil9fWlmKHMuaXRlcmF0b3IhPT0wKXtsZXQgbz1zLml0ZXJhdG9yLHU7Zm9yKDt1PXIubm9kZXNbci5pbmRleGVzW29dXTspaWYoci5pbmRleGVzW29dKz0xLCF1W0tdKXt1W0tdPSEwLGUucHVzaChNbyh1KSk7cmV0dXJufXMuaXRlcmF0b3I9MCxkZWxldGUgci5pbmRleGVzW29dfWxldCBpPXMuZXZlbnRzO2Zvcig7cy5ldmVudEluZGV4PGkubGVuZ3RoOyl7bGV0IG89aVtzLmV2ZW50SW5kZXhdO2lmKHMuZXZlbnRJbmRleCs9MSxvPT09TWUpe3Iubm9kZXMmJnIubm9kZXMubGVuZ3RoJiYocltLXT0hMCxzLml0ZXJhdG9yPXIuZ2V0SXRlcmF0b3IoKSk7cmV0dXJufWVsc2UgaWYodGhpcy5saXN0ZW5lcnNbb10pe3MudmlzaXRvcnM9dGhpcy5saXN0ZW5lcnNbb107cmV0dXJufX1lLnBvcCgpfXdhbGtTeW5jKGUpe2VbS109ITA7bGV0IHM9VW8oZSk7Zm9yKGxldCByIG9mIHMpaWYocj09PU1lKWUubm9kZXMmJmUuZWFjaChuPT57bltLXXx8dGhpcy53YWxrU3luYyhuKX0pO2Vsc2V7bGV0IG49dGhpcy5saXN0ZW5lcnNbcl07aWYobiYmdGhpcy52aXNpdFN5bmMobixlLnRvUHJveHkoKSkpcmV0dXJufX13YXJuaW5ncygpe3JldHVybiB0aGlzLnN5bmMoKS53YXJuaW5ncygpfX07ZmUucmVnaXN0ZXJQb3N0Y3NzPXQ9PntFcz10fTtGby5leHBvcnRzPWZlO2ZlLmRlZmF1bHQ9ZmU7a2YucmVnaXN0ZXJMYXp5UmVzdWx0KGZlKTtiZi5yZWdpc3RlckxhenlSZXN1bHQoZmUpfSk7dmFyIFdvPWcoKGN4LCRvKT0+e1widXNlIHN0cmljdFwiO3ZhciBOZj12cygpLFBmPWd0KCksUmY9ZXIoKSxJZj11dCgpLGx4PWJzKCksX3Q9Y2xhc3N7Z2V0IGNvbnRlbnQoKXtyZXR1cm4gdGhpcy5yZXN1bHQuY3NzfWdldCBjc3MoKXtyZXR1cm4gdGhpcy5yZXN1bHQuY3NzfWdldCBtYXAoKXtyZXR1cm4gdGhpcy5yZXN1bHQubWFwfWdldCBtZXNzYWdlcygpe3JldHVybltdfWdldCBvcHRzKCl7cmV0dXJuIHRoaXMucmVzdWx0Lm9wdHN9Z2V0IHByb2Nlc3Nvcigpe3JldHVybiB0aGlzLnJlc3VsdC5wcm9jZXNzb3J9Z2V0IHJvb3QoKXtpZih0aGlzLl9yb290KXJldHVybiB0aGlzLl9yb290O2xldCBlLHM9UGY7dHJ5e2U9cyh0aGlzLl9jc3MsdGhpcy5fb3B0cyl9Y2F0Y2gocil7dGhpcy5lcnJvcj1yfWlmKHRoaXMuZXJyb3IpdGhyb3cgdGhpcy5lcnJvcjtyZXR1cm4gdGhpcy5fcm9vdD1lLGV9Z2V0W1N5bWJvbC50b1N0cmluZ1RhZ10oKXtyZXR1cm5cIk5vV29ya1Jlc3VsdFwifWNvbnN0cnVjdG9yKGUscyxyKXtzPXMudG9TdHJpbmcoKSx0aGlzLnN0cmluZ2lmaWVkPSExLHRoaXMuX3Byb2Nlc3Nvcj1lLHRoaXMuX2Nzcz1zLHRoaXMuX29wdHM9cix0aGlzLl9tYXA9dm9pZCAwO2xldCBuLGk9SWY7dGhpcy5yZXN1bHQ9bmV3IFJmKHRoaXMuX3Byb2Nlc3NvcixuLHRoaXMuX29wdHMpLHRoaXMucmVzdWx0LmNzcz1zO2xldCBvPXRoaXM7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucmVzdWx0LFwicm9vdFwiLHtnZXQoKXtyZXR1cm4gby5yb290fX0pO2xldCB1PW5ldyBOZihpLG4sdGhpcy5fb3B0cyxzKTtpZih1LmlzTWFwKCkpe2xldFthLGNdPXUuZ2VuZXJhdGUoKTthJiYodGhpcy5yZXN1bHQuY3NzPWEpLGMmJih0aGlzLnJlc3VsdC5tYXA9Yyl9ZWxzZSB1LmNsZWFyQW5ub3RhdGlvbigpLHRoaXMucmVzdWx0LmNzcz11LmNzc31hc3luYygpe3JldHVybiB0aGlzLmVycm9yP1Byb21pc2UucmVqZWN0KHRoaXMuZXJyb3IpOlByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3VsdCl9Y2F0Y2goZSl7cmV0dXJuIHRoaXMuYXN5bmMoKS5jYXRjaChlKX1maW5hbGx5KGUpe3JldHVybiB0aGlzLmFzeW5jKCkudGhlbihlLGUpfXN5bmMoKXtpZih0aGlzLmVycm9yKXRocm93IHRoaXMuZXJyb3I7cmV0dXJuIHRoaXMucmVzdWx0fXRoZW4oZSxzKXtyZXR1cm4gdGhpcy5hc3luYygpLnRoZW4oZSxzKX10b1N0cmluZygpe3JldHVybiB0aGlzLl9jc3N9d2FybmluZ3MoKXtyZXR1cm5bXX19OyRvLmV4cG9ydHM9X3Q7X3QuZGVmYXVsdD1fdH0pO3ZhciBWbz1nKChmeCxZbyk9PntcInVzZSBzdHJpY3RcIjt2YXIgcWY9WnQoKSxMZj1rcygpLERmPVdvKCksQmY9RGUoKSxnZT1jbGFzc3tjb25zdHJ1Y3RvcihlPVtdKXt0aGlzLnZlcnNpb249XCI4LjUuM1wiLHRoaXMucGx1Z2lucz10aGlzLm5vcm1hbGl6ZShlKX1ub3JtYWxpemUoZSl7bGV0IHM9W107Zm9yKGxldCByIG9mIGUpaWYoci5wb3N0Y3NzPT09ITA/cj1yKCk6ci5wb3N0Y3NzJiYocj1yLnBvc3Rjc3MpLHR5cGVvZiByPT1cIm9iamVjdFwiJiZBcnJheS5pc0FycmF5KHIucGx1Z2lucykpcz1zLmNvbmNhdChyLnBsdWdpbnMpO2Vsc2UgaWYodHlwZW9mIHI9PVwib2JqZWN0XCImJnIucG9zdGNzc1BsdWdpbilzLnB1c2gocik7ZWxzZSBpZih0eXBlb2Ygcj09XCJmdW5jdGlvblwiKXMucHVzaChyKTtlbHNlIGlmKCEodHlwZW9mIHI9PVwib2JqZWN0XCImJihyLnBhcnNlfHxyLnN0cmluZ2lmeSkpKXRocm93IG5ldyBFcnJvcihyK1wiIGlzIG5vdCBhIFBvc3RDU1MgcGx1Z2luXCIpO3JldHVybiBzfXByb2Nlc3MoZSxzPXt9KXtyZXR1cm4hdGhpcy5wbHVnaW5zLmxlbmd0aCYmIXMucGFyc2VyJiYhcy5zdHJpbmdpZmllciYmIXMuc3ludGF4P25ldyBEZih0aGlzLGUscyk6bmV3IExmKHRoaXMsZSxzKX11c2UoZSl7cmV0dXJuIHRoaXMucGx1Z2lucz10aGlzLnBsdWdpbnMuY29uY2F0KHRoaXMubm9ybWFsaXplKFtlXSkpLHRoaXN9fTtZby5leHBvcnRzPWdlO2dlLmRlZmF1bHQ9Z2U7QmYucmVnaXN0ZXJQcm9jZXNzb3IoZ2UpO3FmLnJlZ2lzdGVyUHJvY2Vzc29yKGdlKX0pO3ZhciB0cj1nKChweCxKbyk9PntcInVzZSBzdHJpY3RcIjt2YXIgem89R3QoKSxHbz1SZSgpLE1mPWxlKCksVWY9V3QoKSxqbz1tdCgpLEhvPVp0KCksRmY9UG8oKSwkZj1xZSgpLFdmPWtzKCksWWY9bXMoKSxWZj1wdCgpLHpmPWd0KCksU3M9Vm8oKSxHZj1lcigpLEtvPURlKCksUW89anQoKSxqZj11dCgpLEhmPXhzKCk7ZnVuY3Rpb24gayguLi50KXtyZXR1cm4gdC5sZW5ndGg9PT0xJiZBcnJheS5pc0FycmF5KHRbMF0pJiYodD10WzBdKSxuZXcgU3ModCl9ay5wbHVnaW49ZnVuY3Rpb24oZSxzKXtsZXQgcj0hMTtmdW5jdGlvbiBuKC4uLm8pe2NvbnNvbGUmJmNvbnNvbGUud2FybiYmIXImJihyPSEwLGNvbnNvbGUud2FybihlK2A6IHBvc3Rjc3MucGx1Z2luIHdhcyBkZXByZWNhdGVkLiBNaWdyYXRpb24gZ3VpZGU6XG5odHRwczovL2V2aWxtYXJ0aWFucy5jb20vY2hyb25pY2xlcy9wb3N0Y3NzLTgtcGx1Z2luLW1pZ3JhdGlvbmApKTtsZXQgdT1zKC4uLm8pO3JldHVybiB1LnBvc3Rjc3NQbHVnaW49ZSx1LnBvc3Rjc3NWZXJzaW9uPW5ldyBTcygpLnZlcnNpb24sdX1sZXQgaTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJwb3N0Y3NzXCIse2dldCgpe3JldHVybiBpfHwoaT1uKCkpLGl9fSksbi5wcm9jZXNzPWZ1bmN0aW9uKG8sdSxhKXtyZXR1cm4gayhbbihhKV0pLnByb2Nlc3Mobyx1KX0sbn07ay5zdHJpbmdpZnk9amY7ay5wYXJzZT16ZjtrLmZyb21KU09OPUZmO2subGlzdD1ZZjtrLmNvbW1lbnQ9dD0+bmV3IEdvKHQpO2suYXRSdWxlPXQ9Pm5ldyB6byh0KTtrLmRlY2w9dD0+bmV3IGpvKHQpO2sucnVsZT10PT5uZXcgUW8odCk7ay5yb290PXQ9Pm5ldyBLbyh0KTtrLmRvY3VtZW50PXQ9Pm5ldyBIbyh0KTtrLkNzc1N5bnRheEVycm9yPVVmO2suRGVjbGFyYXRpb249am87ay5Db250YWluZXI9TWY7ay5Qcm9jZXNzb3I9U3M7ay5Eb2N1bWVudD1IbztrLkNvbW1lbnQ9R287ay5XYXJuaW5nPUhmO2suQXRSdWxlPXpvO2suUmVzdWx0PUdmO2suSW5wdXQ9JGY7ay5SdWxlPVFvO2suUm9vdD1LbztrLk5vZGU9VmY7V2YucmVnaXN0ZXJQb3N0Y3NzKGspO0pvLmV4cG9ydHM9aztrLmRlZmF1bHQ9a30pO3ZhciBabz1nKChoeCxYbyk9Pnt2YXJ7Q29udGFpbmVyOktmfT10cigpLFRzPWNsYXNzIGV4dGVuZHMgS2Z7Y29uc3RydWN0b3IoZSl7c3VwZXIoZSksdGhpcy50eXBlPVwiZGVjbFwiLHRoaXMuaXNOZXN0ZWQ9ITAsdGhpcy5ub2Rlc3x8KHRoaXMubm9kZXM9W10pfX07WG8uZXhwb3J0cz1Uc30pO3ZhciByYT1nKChkeCx0YSk9PntcInVzZSBzdHJpY3RcIjt2YXIgcnI9L1tcXHRcXG5cXGZcXHIgXCIjJygpLztbXFxcXFxcXXt9XS9nLHNyPS9bLFxcdFxcblxcZlxcciAhXCIjJygpOjtAW1xcXFxcXF17fV18XFwvKD89XFwqKS9nLFFmPS8uW1xcclxcblwiJygvXFxcXF0vLGVhPS9bXFxkYS1mXS9pLG5yPS9bXFxuXFxmXFxyXS9nO3RhLmV4cG9ydHM9ZnVuY3Rpb24oZSxzPXt9KXtsZXQgcj1lLmNzcy52YWx1ZU9mKCksbj1zLmlnbm9yZUVycm9ycyxpLG8sdSxhLGMsZixwLGwseSx4PXIubGVuZ3RoLGg9MCxkPVtdLG09W10sYjtmdW5jdGlvbiB3KCl7cmV0dXJuIGh9ZnVuY3Rpb24gdihUKXt0aHJvdyBlLmVycm9yKFwiVW5jbG9zZWQgXCIrVCxoKX1mdW5jdGlvbiBOKCl7cmV0dXJuIG0ubGVuZ3RoPT09MCYmaD49eH1mdW5jdGlvbiBGKCl7bGV0IFQ9MSxDPSExLE89ITE7Zm9yKDtUPjA7KW8rPTEsci5sZW5ndGg8PW8mJnYoXCJpbnRlcnBvbGF0aW9uXCIpLGk9ci5jaGFyQ29kZUF0KG8pLGw9ci5jaGFyQ29kZUF0KG8rMSksQz8hTyYmaT09PUM/KEM9ITEsTz0hMSk6aT09PTkyP089IU86TyYmKE89ITEpOmk9PT0zOXx8aT09PTM0P0M9aTppPT09MTI1P1QtPTE6aT09PTM1JiZsPT09MTIzJiYoVCs9MSl9ZnVuY3Rpb24gUShUKXtpZihtLmxlbmd0aClyZXR1cm4gbS5wb3AoKTtpZihoPj14KXJldHVybjtsZXQgQz1UP1QuaWdub3JlVW5jbG9zZWQ6ITE7c3dpdGNoKGk9ci5jaGFyQ29kZUF0KGgpLGkpe2Nhc2UgMTA6Y2FzZSAzMjpjYXNlIDk6Y2FzZSAxMzpjYXNlIDEyOntvPWg7ZG8gbys9MSxpPXIuY2hhckNvZGVBdChvKTt3aGlsZShpPT09MzJ8fGk9PT0xMHx8aT09PTl8fGk9PT0xM3x8aT09PTEyKTt5PVtcInNwYWNlXCIsci5zbGljZShoLG8pXSxoPW8tMTticmVha31jYXNlIDkxOmNhc2UgOTM6Y2FzZSAxMjM6Y2FzZSAxMjU6Y2FzZSA1ODpjYXNlIDU5OmNhc2UgNDE6e2xldCBPPVN0cmluZy5mcm9tQ2hhckNvZGUoaSk7eT1bTyxPLGhdO2JyZWFrfWNhc2UgNDQ6e3k9W1wid29yZFwiLFwiLFwiLGgsaCsxXTticmVha31jYXNlIDQwOntpZihwPWQubGVuZ3RoP2QucG9wKClbMV06XCJcIixsPXIuY2hhckNvZGVBdChoKzEpLHA9PT1cInVybFwiJiZsIT09MzkmJmwhPT0zNCl7Zm9yKGI9MSxmPSExLG89aCsxO288PXIubGVuZ3RoLTE7KXtpZihsPXIuY2hhckNvZGVBdChvKSxsPT09OTIpZj0hZjtlbHNlIGlmKGw9PT00MCliKz0xO2Vsc2UgaWYobD09PTQxJiYoYi09MSxiPT09MCkpYnJlYWs7bys9MX1hPXIuc2xpY2UoaCxvKzEpLHk9W1wiYnJhY2tldHNcIixhLGgsb10saD1vfWVsc2Ugbz1yLmluZGV4T2YoXCIpXCIsaCsxKSxhPXIuc2xpY2UoaCxvKzEpLG89PT0tMXx8UWYudGVzdChhKT95PVtcIihcIixcIihcIixoXTooeT1bXCJicmFja2V0c1wiLGEsaCxvXSxoPW8pO2JyZWFrfWNhc2UgMzk6Y2FzZSAzNDp7Zm9yKHU9aSxvPWgsZj0hMTtvPHgmJihvKyssbz09PXgmJnYoXCJzdHJpbmdcIiksaT1yLmNoYXJDb2RlQXQobyksbD1yLmNoYXJDb2RlQXQobysxKSwhKCFmJiZpPT09dSkpOylpPT09OTI/Zj0hZjpmP2Y9ITE6aT09PTM1JiZsPT09MTIzJiZGKCk7eT1bXCJzdHJpbmdcIixyLnNsaWNlKGgsbysxKSxoLG9dLGg9bzticmVha31jYXNlIDY0Ontyci5sYXN0SW5kZXg9aCsxLHJyLnRlc3QocikscnIubGFzdEluZGV4PT09MD9vPXIubGVuZ3RoLTE6bz1yci5sYXN0SW5kZXgtMix5PVtcImF0LXdvcmRcIixyLnNsaWNlKGgsbysxKSxoLG9dLGg9bzticmVha31jYXNlIDkyOntmb3Iobz1oLGM9ITA7ci5jaGFyQ29kZUF0KG8rMSk9PT05Mjspbys9MSxjPSFjO2lmKGk9ci5jaGFyQ29kZUF0KG8rMSksYyYmaSE9PTQ3JiZpIT09MzImJmkhPT0xMCYmaSE9PTkmJmkhPT0xMyYmaSE9PTEyJiYobys9MSxlYS50ZXN0KHIuY2hhckF0KG8pKSkpe2Zvcig7ZWEudGVzdChyLmNoYXJBdChvKzEpKTspbys9MTtyLmNoYXJDb2RlQXQobysxKT09PTMyJiYobys9MSl9eT1bXCJ3b3JkXCIsci5zbGljZShoLG8rMSksaCxvXSxoPW87YnJlYWt9ZGVmYXVsdDpsPXIuY2hhckNvZGVBdChoKzEpLGk9PT0zNSYmbD09PTEyMz8obz1oLEYoKSxhPXIuc2xpY2UoaCxvKzEpLHk9W1wid29yZFwiLGEsaCxvXSxoPW8pOmk9PT00NyYmbD09PTQyPyhvPXIuaW5kZXhPZihcIiovXCIsaCsyKSsxLG89PT0wJiYobnx8Qz9vPXIubGVuZ3RoOnYoXCJjb21tZW50XCIpKSx5PVtcImNvbW1lbnRcIixyLnNsaWNlKGgsbysxKSxoLG9dLGg9byk6aT09PTQ3JiZsPT09NDc/KG5yLmxhc3RJbmRleD1oKzEsbnIudGVzdChyKSxuci5sYXN0SW5kZXg9PT0wP289ci5sZW5ndGgtMTpvPW5yLmxhc3RJbmRleC0yLGE9ci5zbGljZShoLG8rMSkseT1bXCJjb21tZW50XCIsYSxoLG8sXCJpbmxpbmVcIl0saD1vKTooc3IubGFzdEluZGV4PWgrMSxzci50ZXN0KHIpLHNyLmxhc3RJbmRleD09PTA/bz1yLmxlbmd0aC0xOm89c3IubGFzdEluZGV4LTIseT1bXCJ3b3JkXCIsci5zbGljZShoLG8rMSksaCxvXSxkLnB1c2goeSksaD1vKTticmVha31yZXR1cm4gaCsrLHl9ZnVuY3Rpb24gVyhUKXttLnB1c2goVCl9cmV0dXJue2JhY2s6VyxlbmRPZkZpbGU6TixuZXh0VG9rZW46USxwb3NpdGlvbjp3fX19KTt2YXIgbmE9ZygobXgsc2EpPT57dmFye0NvbW1lbnQ6SmZ9PXRyKCksWGY9SnQoKSxaZj1abygpLGVwPXJhKCksQ3M9Y2xhc3MgZXh0ZW5kcyBYZnthdHJ1bGUoZSl7bGV0IHM9ZVsxXSxyPWU7Zm9yKDshdGhpcy50b2tlbml6ZXIuZW5kT2ZGaWxlKCk7KXtsZXQgbj10aGlzLnRva2VuaXplci5uZXh0VG9rZW4oKTtpZihuWzBdPT09XCJ3b3JkXCImJm5bMl09PT1yWzNdKzEpcys9blsxXSxyPW47ZWxzZXt0aGlzLnRva2VuaXplci5iYWNrKG4pO2JyZWFrfX1zdXBlci5hdHJ1bGUoW1wiYXQtd29yZFwiLHMsZVsyXSxyWzNdXSl9Y29tbWVudChlKXtpZihlWzRdPT09XCJpbmxpbmVcIil7bGV0IHM9bmV3IEpmO3RoaXMuaW5pdChzLGVbMl0pLHMucmF3cy5pbmxpbmU9ITA7bGV0IHI9dGhpcy5pbnB1dC5mcm9tT2Zmc2V0KGVbM10pO3Muc291cmNlLmVuZD17Y29sdW1uOnIuY29sLGxpbmU6ci5saW5lLG9mZnNldDplWzNdKzF9O2xldCBuPWVbMV0uc2xpY2UoMik7aWYoL15cXHMqJC8udGVzdChuKSlzLnRleHQ9XCJcIixzLnJhd3MubGVmdD1uLHMucmF3cy5yaWdodD1cIlwiO2Vsc2V7bGV0IGk9bi5tYXRjaCgvXihcXHMqKShbXl0qXFxTKShcXHMqKSQvKSxvPWlbMl0ucmVwbGFjZSgvKFxcKlxcL3xcXC9cXCopL2csXCIqLy8qXCIpO3MudGV4dD1vLHMucmF3cy5sZWZ0PWlbMV0scy5yYXdzLnJpZ2h0PWlbM10scy5yYXdzLnRleHQ9aVsyXX19ZWxzZSBzdXBlci5jb21tZW50KGUpfWNyZWF0ZVRva2VuaXplcigpe3RoaXMudG9rZW5pemVyPWVwKHRoaXMuaW5wdXQpfXJhdyhlLHMscixuKXtpZihzdXBlci5yYXcoZSxzLHIsbiksZS5yYXdzW3NdKXtsZXQgaT1lLnJhd3Nbc10ucmF3O2UucmF3c1tzXS5yYXc9ci5yZWR1Y2UoKG8sdSk9PntpZih1WzBdPT09XCJjb21tZW50XCImJnVbNF09PT1cImlubGluZVwiKXtsZXQgYT11WzFdLnNsaWNlKDIpLnJlcGxhY2UoLyhcXCpcXC98XFwvXFwqKS9nLFwiKi8vKlwiKTtyZXR1cm4gbytcIi8qXCIrYStcIiovXCJ9ZWxzZSByZXR1cm4gbyt1WzFdfSxcIlwiKSxpIT09ZS5yYXdzW3NdLnJhdyYmKGUucmF3c1tzXS5zY3NzPWkpfX1ydWxlKGUpe2xldCBzPSExLHI9MCxuPVwiXCI7Zm9yKGxldCBpIG9mIGUpaWYocylpWzBdIT09XCJjb21tZW50XCImJmlbMF0hPT1cIntcIiYmKG4rPWlbMV0pO2Vsc2V7aWYoaVswXT09PVwic3BhY2VcIiYmaVsxXS5pbmNsdWRlcyhgXG5gKSlicmVhaztpWzBdPT09XCIoXCI/cis9MTppWzBdPT09XCIpXCI/ci09MTpyPT09MCYmaVswXT09PVwiOlwiJiYocz0hMCl9aWYoIXN8fG4udHJpbSgpPT09XCJcInx8L15bIzpBLVphLXotXS8udGVzdChuKSlzdXBlci5ydWxlKGUpO2Vsc2V7ZS5wb3AoKTtsZXQgaT1uZXcgWmY7dGhpcy5pbml0KGksZVswXVsyXSk7bGV0IG87Zm9yKGxldCBhPWUubGVuZ3RoLTE7YT49MDthLS0paWYoZVthXVswXSE9PVwic3BhY2VcIil7bz1lW2FdO2JyZWFrfWlmKG9bM10pe2xldCBhPXRoaXMuaW5wdXQuZnJvbU9mZnNldChvWzNdKTtpLnNvdXJjZS5lbmQ9e2NvbHVtbjphLmNvbCxsaW5lOmEubGluZSxvZmZzZXQ6b1szXSsxfX1lbHNle2xldCBhPXRoaXMuaW5wdXQuZnJvbU9mZnNldChvWzJdKTtpLnNvdXJjZS5lbmQ9e2NvbHVtbjphLmNvbCxsaW5lOmEubGluZSxvZmZzZXQ6b1syXSsxfX1mb3IoO2VbMF1bMF0hPT1cIndvcmRcIjspaS5yYXdzLmJlZm9yZSs9ZS5zaGlmdCgpWzFdO2lmKGVbMF1bMl0pe2xldCBhPXRoaXMuaW5wdXQuZnJvbU9mZnNldChlWzBdWzJdKTtpLnNvdXJjZS5zdGFydD17Y29sdW1uOmEuY29sLGxpbmU6YS5saW5lLG9mZnNldDplWzBdWzJdfX1mb3IoaS5wcm9wPVwiXCI7ZS5sZW5ndGg7KXtsZXQgYT1lWzBdWzBdO2lmKGE9PT1cIjpcInx8YT09PVwic3BhY2VcInx8YT09PVwiY29tbWVudFwiKWJyZWFrO2kucHJvcCs9ZS5zaGlmdCgpWzFdfWkucmF3cy5iZXR3ZWVuPVwiXCI7bGV0IHU7Zm9yKDtlLmxlbmd0aDspaWYodT1lLnNoaWZ0KCksdVswXT09PVwiOlwiKXtpLnJhd3MuYmV0d2Vlbis9dVsxXTticmVha31lbHNlIGkucmF3cy5iZXR3ZWVuKz11WzFdOyhpLnByb3BbMF09PT1cIl9cInx8aS5wcm9wWzBdPT09XCIqXCIpJiYoaS5yYXdzLmJlZm9yZSs9aS5wcm9wWzBdLGkucHJvcD1pLnByb3Auc2xpY2UoMSkpLGkucmF3cy5iZXR3ZWVuKz10aGlzLnNwYWNlc0FuZENvbW1lbnRzRnJvbVN0YXJ0KGUpLHRoaXMucHJlY2hlY2tNaXNzZWRTZW1pY29sb24oZSk7Zm9yKGxldCBhPWUubGVuZ3RoLTE7YT4wO2EtLSl7aWYodT1lW2FdLHVbMV09PT1cIiFpbXBvcnRhbnRcIil7aS5pbXBvcnRhbnQ9ITA7bGV0IGM9dGhpcy5zdHJpbmdGcm9tKGUsYSk7Yz10aGlzLnNwYWNlc0Zyb21FbmQoZSkrYyxjIT09XCIgIWltcG9ydGFudFwiJiYoaS5yYXdzLmltcG9ydGFudD1jKTticmVha31lbHNlIGlmKHVbMV09PT1cImltcG9ydGFudFwiKXtsZXQgYz1lLnNsaWNlKDApLGY9XCJcIjtmb3IobGV0IHA9YTtwPjA7cC0tKXtsZXQgbD1jW3BdWzBdO2lmKGYudHJpbSgpLmluZGV4T2YoXCIhXCIpPT09MCYmbCE9PVwic3BhY2VcIilicmVhaztmPWMucG9wKClbMV0rZn1mLnRyaW0oKS5pbmRleE9mKFwiIVwiKT09PTAmJihpLmltcG9ydGFudD0hMCxpLnJhd3MuaW1wb3J0YW50PWYsZT1jKX1pZih1WzBdIT09XCJzcGFjZVwiJiZ1WzBdIT09XCJjb21tZW50XCIpYnJlYWt9dGhpcy5yYXcoaSxcInZhbHVlXCIsZSksaS52YWx1ZS5pbmNsdWRlcyhcIjpcIikmJnRoaXMuY2hlY2tNaXNzZWRTZW1pY29sb24oZSksdGhpcy5jdXJyZW50PWl9fX07c2EuZXhwb3J0cz1Dc30pO3ZhciBvYT1nKCh5eCxpYSk9Pnt2YXJ7SW5wdXQ6dHB9PXRyKCkscnA9bmEoKTtpYS5leHBvcnRzPWZ1bmN0aW9uKGUscyl7bGV0IHI9bmV3IHRwKGUscyksbj1uZXcgcnAocik7cmV0dXJuIG4ucGFyc2UoKSxuLnJvb3R9fSk7dmFyIEFzPWcoT3M9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoT3MsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZnVuY3Rpb24gbnAodCl7dGhpcy5hZnRlcj10LmFmdGVyLHRoaXMuYmVmb3JlPXQuYmVmb3JlLHRoaXMudHlwZT10LnR5cGUsdGhpcy52YWx1ZT10LnZhbHVlLHRoaXMuc291cmNlSW5kZXg9dC5zb3VyY2VJbmRleH1Pcy5kZWZhdWx0PW5wfSk7dmFyIFBzPWcoTnM9PntcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoTnMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGlwPUFzKCksdWE9b3AoaXApO2Z1bmN0aW9uIG9wKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBFdCh0KXt2YXIgZT10aGlzO3RoaXMuY29uc3RydWN0b3IodCksdGhpcy5ub2Rlcz10Lm5vZGVzLHRoaXMuYWZ0ZXI9PT12b2lkIDAmJih0aGlzLmFmdGVyPXRoaXMubm9kZXMubGVuZ3RoPjA/dGhpcy5ub2Rlc1t0aGlzLm5vZGVzLmxlbmd0aC0xXS5hZnRlcjpcIlwiKSx0aGlzLmJlZm9yZT09PXZvaWQgMCYmKHRoaXMuYmVmb3JlPXRoaXMubm9kZXMubGVuZ3RoPjA/dGhpcy5ub2Rlc1swXS5iZWZvcmU6XCJcIiksdGhpcy5zb3VyY2VJbmRleD09PXZvaWQgMCYmKHRoaXMuc291cmNlSW5kZXg9dGhpcy5iZWZvcmUubGVuZ3RoKSx0aGlzLm5vZGVzLmZvckVhY2goZnVuY3Rpb24ocyl7cy5wYXJlbnQ9ZX0pfUV0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHVhLmRlZmF1bHQucHJvdG90eXBlKTtFdC5jb25zdHJ1Y3Rvcj11YS5kZWZhdWx0O0V0LnByb3RvdHlwZS53YWxrPWZ1bmN0aW9uKGUscyl7Zm9yKHZhciByPXR5cGVvZiBlPT1cInN0cmluZ1wifHxlIGluc3RhbmNlb2YgUmVnRXhwLG49cj9zOmUsaT10eXBlb2YgZT09XCJzdHJpbmdcIj9uZXcgUmVnRXhwKGUpOmUsbz0wO288dGhpcy5ub2Rlcy5sZW5ndGg7bysrKXt2YXIgdT10aGlzLm5vZGVzW29dLGE9cj9pLnRlc3QodS50eXBlKTohMDtpZihhJiZuJiZuKHUsbyx0aGlzLm5vZGVzKT09PSExfHx1Lm5vZGVzJiZ1LndhbGsoZSxzKT09PSExKXJldHVybiExfXJldHVybiEwfTtFdC5wcm90b3R5cGUuZWFjaD1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wfHxhcmd1bWVudHNbMF09PT12b2lkIDA/ZnVuY3Rpb24oKXt9OmFyZ3VtZW50c1swXSxzPTA7czx0aGlzLm5vZGVzLmxlbmd0aDtzKyspe3ZhciByPXRoaXMubm9kZXNbc107aWYoZShyLHMsdGhpcy5ub2Rlcyk9PT0hMSlyZXR1cm4hMX1yZXR1cm4hMH07TnMuZGVmYXVsdD1FdH0pO3ZhciBwYT1nKGt0PT57XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGt0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2t0LnBhcnNlTWVkaWFGZWF0dXJlPWZhO2t0LnBhcnNlTWVkaWFRdWVyeT1JcztrdC5wYXJzZU1lZGlhTGlzdD1scDt2YXIgYXA9QXMoKSxsYT1jYShhcCksdXA9UHMoKSxScz1jYSh1cCk7ZnVuY3Rpb24gY2EodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIGZhKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTF8fGFyZ3VtZW50c1sxXT09PXZvaWQgMD8wOmFyZ3VtZW50c1sxXSxzPVt7bW9kZTpcIm5vcm1hbFwiLGNoYXJhY3RlcjpudWxsfV0scj1bXSxuPTAsaT1cIlwiLG89bnVsbCx1PW51bGwsYT1lLGM9dDt0WzBdPT09XCIoXCImJnRbdC5sZW5ndGgtMV09PT1cIilcIiYmKGM9dC5zdWJzdHJpbmcoMSx0Lmxlbmd0aC0xKSxhKyspO2Zvcih2YXIgZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgcD1jW2ZdO2lmKChwPT09XCInXCJ8fHA9PT0nXCInKSYmKHNbbl0uaXNDYWxjdWxhdGlvbkVuYWJsZWQ9PT0hMD8ocy5wdXNoKHttb2RlOlwic3RyaW5nXCIsaXNDYWxjdWxhdGlvbkVuYWJsZWQ6ITEsY2hhcmFjdGVyOnB9KSxuKyspOnNbbl0ubW9kZT09PVwic3RyaW5nXCImJnNbbl0uY2hhcmFjdGVyPT09cCYmY1tmLTFdIT09XCJcXFxcXCImJihzLnBvcCgpLG4tLSkpLHA9PT1cIntcIj8ocy5wdXNoKHttb2RlOlwiaW50ZXJwb2xhdGlvblwiLGlzQ2FsY3VsYXRpb25FbmFibGVkOiEwfSksbisrKTpwPT09XCJ9XCImJihzLnBvcCgpLG4tLSksc1tuXS5tb2RlPT09XCJub3JtYWxcIiYmcD09PVwiOlwiKXt2YXIgbD1jLnN1YnN0cmluZyhmKzEpO3U9e3R5cGU6XCJ2YWx1ZVwiLGJlZm9yZTovXihcXHMqKS8uZXhlYyhsKVsxXSxhZnRlcjovKFxccyopJC8uZXhlYyhsKVsxXSx2YWx1ZTpsLnRyaW0oKX0sdS5zb3VyY2VJbmRleD11LmJlZm9yZS5sZW5ndGgrZisxK2Esbz17dHlwZTpcImNvbG9uXCIsc291cmNlSW5kZXg6ZithLGFmdGVyOnUuYmVmb3JlLHZhbHVlOlwiOlwifTticmVha31pKz1wfXJldHVybiBpPXt0eXBlOlwibWVkaWEtZmVhdHVyZVwiLGJlZm9yZTovXihcXHMqKS8uZXhlYyhpKVsxXSxhZnRlcjovKFxccyopJC8uZXhlYyhpKVsxXSx2YWx1ZTppLnRyaW0oKX0saS5zb3VyY2VJbmRleD1pLmJlZm9yZS5sZW5ndGgrYSxyLnB1c2goaSksbyE9PW51bGwmJihvLmJlZm9yZT1pLmFmdGVyLHIucHVzaChvKSksdSE9PW51bGwmJnIucHVzaCh1KSxyfWZ1bmN0aW9uIElzKHQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTF8fGFyZ3VtZW50c1sxXT09PXZvaWQgMD8wOmFyZ3VtZW50c1sxXSxzPVtdLHI9MCxuPSExLGk9dm9pZCAwO2Z1bmN0aW9uIG8oKXtyZXR1cm57YmVmb3JlOlwiXCIsYWZ0ZXI6XCJcIix2YWx1ZTpcIlwifX1pPW8oKTtmb3IodmFyIHU9MDt1PHQubGVuZ3RoO3UrKyl7dmFyIGE9dFt1XTtuPyhpLnZhbHVlKz1hLChhPT09XCJ7XCJ8fGE9PT1cIihcIikmJnIrKywoYT09PVwiKVwifHxhPT09XCJ9XCIpJiZyLS0pOmEuc2VhcmNoKC9cXHMvKSE9PS0xP2kuYmVmb3JlKz1hOihhPT09XCIoXCImJihpLnR5cGU9XCJtZWRpYS1mZWF0dXJlLWV4cHJlc3Npb25cIixyKyspLGkudmFsdWU9YSxpLnNvdXJjZUluZGV4PWUrdSxuPSEwKSxuJiZyPT09MCYmKGE9PT1cIilcInx8dT09PXQubGVuZ3RoLTF8fHRbdSsxXS5zZWFyY2goL1xccy8pIT09LTEpJiYoW1wibm90XCIsXCJvbmx5XCIsXCJhbmRcIl0uaW5kZXhPZihpLnZhbHVlKSE9PS0xJiYoaS50eXBlPVwia2V5d29yZFwiKSxpLnR5cGU9PT1cIm1lZGlhLWZlYXR1cmUtZXhwcmVzc2lvblwiJiYoaS5ub2Rlcz1mYShpLnZhbHVlLGkuc291cmNlSW5kZXgpKSxzLnB1c2goQXJyYXkuaXNBcnJheShpLm5vZGVzKT9uZXcgUnMuZGVmYXVsdChpKTpuZXcgbGEuZGVmYXVsdChpKSksaT1vKCksbj0hMSl9Zm9yKHZhciBjPTA7YzxzLmxlbmd0aDtjKyspaWYoaT1zW2NdLGM+MCYmKHNbYy0xXS5hZnRlcj1pLmJlZm9yZSksaS50eXBlPT09dm9pZCAwKXtpZihjPjApe2lmKHNbYy0xXS50eXBlPT09XCJtZWRpYS1mZWF0dXJlLWV4cHJlc3Npb25cIil7aS50eXBlPVwia2V5d29yZFwiO2NvbnRpbnVlfWlmKHNbYy0xXS52YWx1ZT09PVwibm90XCJ8fHNbYy0xXS52YWx1ZT09PVwib25seVwiKXtpLnR5cGU9XCJtZWRpYS10eXBlXCI7Y29udGludWV9aWYoc1tjLTFdLnZhbHVlPT09XCJhbmRcIil7aS50eXBlPVwibWVkaWEtZmVhdHVyZS1leHByZXNzaW9uXCI7Y29udGludWV9c1tjLTFdLnR5cGU9PT1cIm1lZGlhLXR5cGVcIiYmKHNbYysxXT9pLnR5cGU9c1tjKzFdLnR5cGU9PT1cIm1lZGlhLWZlYXR1cmUtZXhwcmVzc2lvblwiP1wia2V5d29yZFwiOlwibWVkaWEtZmVhdHVyZS1leHByZXNzaW9uXCI6aS50eXBlPVwibWVkaWEtZmVhdHVyZS1leHByZXNzaW9uXCIpfWlmKGM9PT0wKXtpZighc1tjKzFdKXtpLnR5cGU9XCJtZWRpYS10eXBlXCI7Y29udGludWV9aWYoc1tjKzFdJiYoc1tjKzFdLnR5cGU9PT1cIm1lZGlhLWZlYXR1cmUtZXhwcmVzc2lvblwifHxzW2MrMV0udHlwZT09PVwia2V5d29yZFwiKSl7aS50eXBlPVwibWVkaWEtdHlwZVwiO2NvbnRpbnVlfWlmKHNbYysyXSl7aWYoc1tjKzJdLnR5cGU9PT1cIm1lZGlhLWZlYXR1cmUtZXhwcmVzc2lvblwiKXtpLnR5cGU9XCJtZWRpYS10eXBlXCIsc1tjKzFdLnR5cGU9XCJrZXl3b3JkXCI7Y29udGludWV9aWYoc1tjKzJdLnR5cGU9PT1cImtleXdvcmRcIil7aS50eXBlPVwia2V5d29yZFwiLHNbYysxXS50eXBlPVwibWVkaWEtdHlwZVwiO2NvbnRpbnVlfX1pZihzW2MrM10mJnNbYyszXS50eXBlPT09XCJtZWRpYS1mZWF0dXJlLWV4cHJlc3Npb25cIil7aS50eXBlPVwia2V5d29yZFwiLHNbYysxXS50eXBlPVwibWVkaWEtdHlwZVwiLHNbYysyXS50eXBlPVwia2V5d29yZFwiO2NvbnRpbnVlfX19cmV0dXJuIHN9ZnVuY3Rpb24gbHAodCl7dmFyIGU9W10scz0wLHI9MCxuPS9eKFxccyopdXJsXFxzKlxcKC8uZXhlYyh0KTtpZihuIT09bnVsbCl7Zm9yKHZhciBpPW5bMF0ubGVuZ3RoLG89MTtvPjA7KXt2YXIgdT10W2ldO3U9PT1cIihcIiYmbysrLHU9PT1cIilcIiYmby0tLGkrK31lLnVuc2hpZnQobmV3IGxhLmRlZmF1bHQoe3R5cGU6XCJ1cmxcIix2YWx1ZTp0LnN1YnN0cmluZygwLGkpLnRyaW0oKSxzb3VyY2VJbmRleDpuWzFdLmxlbmd0aCxiZWZvcmU6blsxXSxhZnRlcjovXihcXHMqKS8uZXhlYyh0LnN1YnN0cmluZyhpKSlbMV19KSkscz1pfWZvcih2YXIgYT1zO2E8dC5sZW5ndGg7YSsrKXt2YXIgYz10W2FdO2lmKGM9PT1cIihcIiYmcisrLGM9PT1cIilcIiYmci0tLHI9PT0wJiZjPT09XCIsXCIpe3ZhciBmPXQuc3Vic3RyaW5nKHMsYSkscD0vXihcXHMqKS8uZXhlYyhmKVsxXTtlLnB1c2gobmV3IFJzLmRlZmF1bHQoe3R5cGU6XCJtZWRpYS1xdWVyeVwiLHZhbHVlOmYudHJpbSgpLHNvdXJjZUluZGV4OnMrcC5sZW5ndGgsbm9kZXM6SXMoZixzKSxiZWZvcmU6cCxhZnRlcjovKFxccyopJC8uZXhlYyhmKVsxXX0pKSxzPWErMX19dmFyIGw9dC5zdWJzdHJpbmcocykseT0vXihcXHMqKS8uZXhlYyhsKVsxXTtyZXR1cm4gZS5wdXNoKG5ldyBScy5kZWZhdWx0KHt0eXBlOlwibWVkaWEtcXVlcnlcIix2YWx1ZTpsLnRyaW0oKSxzb3VyY2VJbmRleDpzK3kubGVuZ3RoLG5vZGVzOklzKGwscyksYmVmb3JlOnksYWZ0ZXI6LyhcXHMqKSQvLmV4ZWMobClbMV19KSksZX19KTt2YXIgaGE9Zyhxcz0+e1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShxcyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtxcy5kZWZhdWx0PWRwO3ZhciBjcD1QcygpLGZwPWhwKGNwKSxwcD1wYSgpO2Z1bmN0aW9uIGhwKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBkcCh0KXtyZXR1cm4gbmV3IGZwLmRlZmF1bHQoe25vZGVzOigwLHBwLnBhcnNlTWVkaWFMaXN0KSh0KSx0eXBlOlwibWVkaWEtcXVlcnktbGlzdFwiLHZhbHVlOnQudHJpbSgpfSl9fSk7dmFyIERzPWcoKFN4LHlhKT0+e3lhLmV4cG9ydHM9ZnVuY3Rpb24oZSxzKXtpZihzPXR5cGVvZiBzPT1cIm51bWJlclwiP3M6MS8wLCFzKXJldHVybiBBcnJheS5pc0FycmF5KGUpP2UubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBufSk6ZTtyZXR1cm4gcihlLDEpO2Z1bmN0aW9uIHIobixpKXtyZXR1cm4gbi5yZWR1Y2UoZnVuY3Rpb24obyx1KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh1KSYmaTxzP28uY29uY2F0KHIodSxpKzEpKTpvLmNvbmNhdCh1KX0sW10pfX19KTt2YXIgQnM9ZygoVHgsZ2EpPT57Z2EuZXhwb3J0cz1mdW5jdGlvbih0LGUpe2Zvcih2YXIgcz0tMSxyPVtdOyhzPXQuaW5kZXhPZihlLHMrMSkpIT09LTE7KXIucHVzaChzKTtyZXR1cm4gcn19KTt2YXIgTXM9ZygoQ3gsd2EpPT57XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZ3AodCxlKXtmb3IodmFyIHM9MSxyPXQubGVuZ3RoLG49dFswXSxpPXRbMF0sbz0xO288cjsrK28paWYoaT1uLG49dFtvXSxlKG4saSkpe2lmKG89PT1zKXtzKys7Y29udGludWV9dFtzKytdPW59cmV0dXJuIHQubGVuZ3RoPXMsdH1mdW5jdGlvbiB3cCh0KXtmb3IodmFyIGU9MSxzPXQubGVuZ3RoLHI9dFswXSxuPXRbMF0saT0xO2k8czsrK2ksbj1yKWlmKG49cixyPXRbaV0sciE9PW4pe2lmKGk9PT1lKXtlKys7Y29udGludWV9dFtlKytdPXJ9cmV0dXJuIHQubGVuZ3RoPWUsdH1mdW5jdGlvbiB2cCh0LGUscyl7cmV0dXJuIHQubGVuZ3RoPT09MD90OmU/KHN8fHQuc29ydChlKSxncCh0LGUpKTooc3x8dC5zb3J0KCksd3AodCkpfXdhLmV4cG9ydHM9dnB9KTt2YXIgd2U9ZygoaXIseGEpPT57XCJ1c2Ugc3RyaWN0XCI7aXIuX19lc01vZHVsZT0hMDt2YXIgdmE9dHlwZW9mIFN5bWJvbD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgU3ltYm9sLml0ZXJhdG9yPT1cInN5bWJvbFwiP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnR5cGVvZiBTeW1ib2w9PVwiZnVuY3Rpb25cIiYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH07ZnVuY3Rpb24geHAodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciBicD1mdW5jdGlvbiB0KGUscyl7aWYoKHR5cGVvZiBlPlwidVwiP1widW5kZWZpbmVkXCI6dmEoZSkpIT09XCJvYmplY3RcIilyZXR1cm4gZTt2YXIgcj1uZXcgZS5jb25zdHJ1Y3Rvcjtmb3IodmFyIG4gaW4gZSlpZihlLmhhc093blByb3BlcnR5KG4pKXt2YXIgaT1lW25dLG89dHlwZW9mIGk+XCJ1XCI/XCJ1bmRlZmluZWRcIjp2YShpKTtuPT09XCJwYXJlbnRcIiYmbz09PVwib2JqZWN0XCI/cyYmKHJbbl09cyk6aSBpbnN0YW5jZW9mIEFycmF5P3Jbbl09aS5tYXAoZnVuY3Rpb24odSl7cmV0dXJuIHQodSxyKX0pOnJbbl09dChpLHIpfXJldHVybiByfSxfcD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJmFyZ3VtZW50c1swXSE9PXZvaWQgMD9hcmd1bWVudHNbMF06e307eHAodGhpcyx0KTtmb3IodmFyIHMgaW4gZSl0aGlzW3NdPWVbc107dmFyIHI9ZS5zcGFjZXM7cj1yPT09dm9pZCAwP3t9OnI7dmFyIG49ci5iZWZvcmUsaT1uPT09dm9pZCAwP1wiXCI6bixvPXIuYWZ0ZXIsdT1vPT09dm9pZCAwP1wiXCI6bzt0aGlzLnNwYWNlcz17YmVmb3JlOmksYWZ0ZXI6dX19cmV0dXJuIHQucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcyksdGhpcy5wYXJlbnQ9dm9pZCAwLHRoaXN9LHQucHJvdG90eXBlLnJlcGxhY2VXaXRoPWZ1bmN0aW9uKCl7aWYodGhpcy5wYXJlbnQpe2Zvcih2YXIgcyBpbiBhcmd1bWVudHMpdGhpcy5wYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsYXJndW1lbnRzW3NdKTt0aGlzLnJlbW92ZSgpfXJldHVybiB0aGlzfSx0LnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50LmF0KHRoaXMucGFyZW50LmluZGV4KHRoaXMpKzEpfSx0LnByb3RvdHlwZS5wcmV2PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50LmF0KHRoaXMucGFyZW50LmluZGV4KHRoaXMpLTEpfSx0LnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciBzPWFyZ3VtZW50cy5sZW5ndGg+MCYmYXJndW1lbnRzWzBdIT09dm9pZCAwP2FyZ3VtZW50c1swXTp7fSxyPWJwKHRoaXMpO2Zvcih2YXIgbiBpbiBzKXJbbl09c1tuXTtyZXR1cm4gcn0sdC5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5bdGhpcy5zcGFjZXMuYmVmb3JlLFN0cmluZyh0aGlzLnZhbHVlKSx0aGlzLnNwYWNlcy5hZnRlcl0uam9pbihcIlwiKX0sdH0oKTtpci5kZWZhdWx0PV9wO3hhLmV4cG9ydHM9aXIuZGVmYXVsdH0pO3ZhciBCPWcoTT0+e1widXNlIHN0cmljdFwiO00uX19lc01vZHVsZT0hMDt2YXIgT3g9TS5UQUc9XCJ0YWdcIixBeD1NLlNUUklORz1cInN0cmluZ1wiLE54PU0uU0VMRUNUT1I9XCJzZWxlY3RvclwiLFB4PU0uUk9PVD1cInJvb3RcIixSeD1NLlBTRVVETz1cInBzZXVkb1wiLEl4PU0uTkVTVElORz1cIm5lc3RpbmdcIixxeD1NLklEPVwiaWRcIixMeD1NLkNPTU1FTlQ9XCJjb21tZW50XCIsRHg9TS5DT01CSU5BVE9SPVwiY29tYmluYXRvclwiLEJ4PU0uQ0xBU1M9XCJjbGFzc1wiLE14PU0uQVRUUklCVVRFPVwiYXR0cmlidXRlXCIsVXg9TS5VTklWRVJTQUw9XCJ1bml2ZXJzYWxcIn0pO3ZhciBhcj1nKChvcixiYSk9PntcInVzZSBzdHJpY3RcIjtvci5fX2VzTW9kdWxlPSEwO3ZhciBFcD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxzKXtmb3IodmFyIHI9MDtyPHMubGVuZ3RoO3IrKyl7dmFyIG49c1tyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbihlLHMscil7cmV0dXJuIHMmJnQoZS5wcm90b3R5cGUscyksciYmdChlLHIpLGV9fSgpLGtwPXdlKCksU3A9T3Aoa3ApLFRwPUIoKSxaPUNwKFRwKTtmdW5jdGlvbiBDcCh0KXtpZih0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGU9e307aWYodCE9bnVsbClmb3IodmFyIHMgaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxzKSYmKGVbc109dFtzXSk7cmV0dXJuIGUuZGVmYXVsdD10LGV9ZnVuY3Rpb24gT3AodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIEFwKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBOcCh0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZSYmKHR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKT9lOnR9ZnVuY3Rpb24gUHAodCxlKXtpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZlIT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX12YXIgUnA9ZnVuY3Rpb24odCl7UHAoZSx0KTtmdW5jdGlvbiBlKHMpe0FwKHRoaXMsZSk7dmFyIHI9TnAodGhpcyx0LmNhbGwodGhpcyxzKSk7cmV0dXJuIHIubm9kZXN8fChyLm5vZGVzPVtdKSxyfXJldHVybiBlLnByb3RvdHlwZS5hcHBlbmQ9ZnVuY3Rpb24ocil7cmV0dXJuIHIucGFyZW50PXRoaXMsdGhpcy5ub2Rlcy5wdXNoKHIpLHRoaXN9LGUucHJvdG90eXBlLnByZXBlbmQ9ZnVuY3Rpb24ocil7cmV0dXJuIHIucGFyZW50PXRoaXMsdGhpcy5ub2Rlcy51bnNoaWZ0KHIpLHRoaXN9LGUucHJvdG90eXBlLmF0PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLm5vZGVzW3JdfSxlLnByb3RvdHlwZS5pbmRleD1mdW5jdGlvbihyKXtyZXR1cm4gdHlwZW9mIHI9PVwibnVtYmVyXCI/cjp0aGlzLm5vZGVzLmluZGV4T2Yocil9LGUucHJvdG90eXBlLnJlbW92ZUNoaWxkPWZ1bmN0aW9uKHIpe3I9dGhpcy5pbmRleChyKSx0aGlzLmF0KHIpLnBhcmVudD12b2lkIDAsdGhpcy5ub2Rlcy5zcGxpY2UociwxKTt2YXIgbj12b2lkIDA7Zm9yKHZhciBpIGluIHRoaXMuaW5kZXhlcyluPXRoaXMuaW5kZXhlc1tpXSxuPj1yJiYodGhpcy5pbmRleGVzW2ldPW4tMSk7cmV0dXJuIHRoaXN9LGUucHJvdG90eXBlLnJlbW92ZUFsbD1mdW5jdGlvbigpe2Zvcih2YXIgaT10aGlzLm5vZGVzLHI9QXJyYXkuaXNBcnJheShpKSxuPTAsaT1yP2k6aVtTeW1ib2wuaXRlcmF0b3JdKCk7Oyl7dmFyIG87aWYocil7aWYobj49aS5sZW5ndGgpYnJlYWs7bz1pW24rK119ZWxzZXtpZihuPWkubmV4dCgpLG4uZG9uZSlicmVhaztvPW4udmFsdWV9dmFyIHU9bzt1LnBhcmVudD12b2lkIDB9cmV0dXJuIHRoaXMubm9kZXM9W10sdGhpc30sZS5wcm90b3R5cGUuZW1wdHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZW1vdmVBbGwoKX0sZS5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXI9ZnVuY3Rpb24ocixuKXt2YXIgaT10aGlzLmluZGV4KHIpO3RoaXMubm9kZXMuc3BsaWNlKGkrMSwwLG4pO3ZhciBvPXZvaWQgMDtmb3IodmFyIHUgaW4gdGhpcy5pbmRleGVzKW89dGhpcy5pbmRleGVzW3VdLGk8PW8mJih0aGlzLmluZGV4ZXNbdV09byt0aGlzLm5vZGVzLmxlbmd0aCk7cmV0dXJuIHRoaXN9LGUucHJvdG90eXBlLmluc2VydEJlZm9yZT1mdW5jdGlvbihyLG4pe3ZhciBpPXRoaXMuaW5kZXgocik7dGhpcy5ub2Rlcy5zcGxpY2UoaSwwLG4pO3ZhciBvPXZvaWQgMDtmb3IodmFyIHUgaW4gdGhpcy5pbmRleGVzKW89dGhpcy5pbmRleGVzW3VdLGk8PW8mJih0aGlzLmluZGV4ZXNbdV09byt0aGlzLm5vZGVzLmxlbmd0aCk7cmV0dXJuIHRoaXN9LGUucHJvdG90eXBlLmVhY2g9ZnVuY3Rpb24ocil7dGhpcy5sYXN0RWFjaHx8KHRoaXMubGFzdEVhY2g9MCksdGhpcy5pbmRleGVzfHwodGhpcy5pbmRleGVzPXt9KSx0aGlzLmxhc3RFYWNoKys7dmFyIG49dGhpcy5sYXN0RWFjaDtpZih0aGlzLmluZGV4ZXNbbl09MCwhIXRoaXMubGVuZ3RoKXtmb3IodmFyIGk9dm9pZCAwLG89dm9pZCAwO3RoaXMuaW5kZXhlc1tuXTx0aGlzLmxlbmd0aCYmKGk9dGhpcy5pbmRleGVzW25dLG89cih0aGlzLmF0KGkpLGkpLG8hPT0hMSk7KXRoaXMuaW5kZXhlc1tuXSs9MTtpZihkZWxldGUgdGhpcy5pbmRleGVzW25dLG89PT0hMSlyZXR1cm4hMX19LGUucHJvdG90eXBlLndhbGs9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihuLGkpe3ZhciBvPXIobixpKTtpZihvIT09ITEmJm4ubGVuZ3RoJiYobz1uLndhbGsocikpLG89PT0hMSlyZXR1cm4hMX0pfSxlLnByb3RvdHlwZS53YWxrQXR0cmlidXRlcz1mdW5jdGlvbihyKXt2YXIgbj10aGlzO3JldHVybiB0aGlzLndhbGsoZnVuY3Rpb24oaSl7aWYoaS50eXBlPT09Wi5BVFRSSUJVVEUpcmV0dXJuIHIuY2FsbChuLGkpfSl9LGUucHJvdG90eXBlLndhbGtDbGFzc2VzPWZ1bmN0aW9uKHIpe3ZhciBuPXRoaXM7cmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbihpKXtpZihpLnR5cGU9PT1aLkNMQVNTKXJldHVybiByLmNhbGwobixpKX0pfSxlLnByb3RvdHlwZS53YWxrQ29tYmluYXRvcnM9ZnVuY3Rpb24ocil7dmFyIG49dGhpcztyZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uKGkpe2lmKGkudHlwZT09PVouQ09NQklOQVRPUilyZXR1cm4gci5jYWxsKG4saSl9KX0sZS5wcm90b3R5cGUud2Fsa0NvbW1lbnRzPWZ1bmN0aW9uKHIpe3ZhciBuPXRoaXM7cmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbihpKXtpZihpLnR5cGU9PT1aLkNPTU1FTlQpcmV0dXJuIHIuY2FsbChuLGkpfSl9LGUucHJvdG90eXBlLndhbGtJZHM9ZnVuY3Rpb24ocil7dmFyIG49dGhpcztyZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uKGkpe2lmKGkudHlwZT09PVouSUQpcmV0dXJuIHIuY2FsbChuLGkpfSl9LGUucHJvdG90eXBlLndhbGtOZXN0aW5nPWZ1bmN0aW9uKHIpe3ZhciBuPXRoaXM7cmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbihpKXtpZihpLnR5cGU9PT1aLk5FU1RJTkcpcmV0dXJuIHIuY2FsbChuLGkpfSl9LGUucHJvdG90eXBlLndhbGtQc2V1ZG9zPWZ1bmN0aW9uKHIpe3ZhciBuPXRoaXM7cmV0dXJuIHRoaXMud2FsayhmdW5jdGlvbihpKXtpZihpLnR5cGU9PT1aLlBTRVVETylyZXR1cm4gci5jYWxsKG4saSl9KX0sZS5wcm90b3R5cGUud2Fsa1RhZ3M9ZnVuY3Rpb24ocil7dmFyIG49dGhpcztyZXR1cm4gdGhpcy53YWxrKGZ1bmN0aW9uKGkpe2lmKGkudHlwZT09PVouVEFHKXJldHVybiByLmNhbGwobixpKX0pfSxlLnByb3RvdHlwZS53YWxrVW5pdmVyc2Fscz1mdW5jdGlvbihyKXt2YXIgbj10aGlzO3JldHVybiB0aGlzLndhbGsoZnVuY3Rpb24oaSl7aWYoaS50eXBlPT09Wi5VTklWRVJTQUwpcmV0dXJuIHIuY2FsbChuLGkpfSl9LGUucHJvdG90eXBlLnNwbGl0PWZ1bmN0aW9uKHIpe3ZhciBuPXRoaXMsaT1bXTtyZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24obyx1LGEpe3ZhciBjPXIuY2FsbChuLHUpO3JldHVybiBpLnB1c2godSksYz8oby5wdXNoKGkpLGk9W10pOmE9PT1uLmxlbmd0aC0xJiZvLnB1c2goaSksb30sW10pfSxlLnByb3RvdHlwZS5tYXA9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMubm9kZXMubWFwKHIpfSxlLnByb3RvdHlwZS5yZWR1Y2U9ZnVuY3Rpb24ocixuKXtyZXR1cm4gdGhpcy5ub2Rlcy5yZWR1Y2UocixuKX0sZS5wcm90b3R5cGUuZXZlcnk9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMubm9kZXMuZXZlcnkocil9LGUucHJvdG90eXBlLnNvbWU9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMubm9kZXMuc29tZShyKX0sZS5wcm90b3R5cGUuZmlsdGVyPWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLm5vZGVzLmZpbHRlcihyKX0sZS5wcm90b3R5cGUuc29ydD1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy5ub2Rlcy5zb3J0KHIpfSxlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChTdHJpbmcpLmpvaW4oXCJcIil9LEVwKGUsW3trZXk6XCJmaXJzdFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmF0KDApfX0se2tleTpcImxhc3RcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hdCh0aGlzLmxlbmd0aC0xKX19LHtrZXk6XCJsZW5ndGhcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ub2Rlcy5sZW5ndGh9fV0pLGV9KFNwLmRlZmF1bHQpO29yLmRlZmF1bHQ9UnA7YmEuZXhwb3J0cz1vci5kZWZhdWx0fSk7dmFyIEVhPWcoKHVyLF9hKT0+e1widXNlIHN0cmljdFwiO3VyLl9fZXNNb2R1bGU9ITA7dmFyIElwPWFyKCkscXA9RHAoSXApLExwPUIoKTtmdW5jdGlvbiBEcCh0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gQnAodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIE1wKHQsZSl7aWYoIXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBlJiYodHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpP2U6dH1mdW5jdGlvbiBVcCh0LGUpe2lmKHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJmUhPT1udWxsKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiBlKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGUpOnQuX19wcm90b19fPWUpfXZhciBGcD1mdW5jdGlvbih0KXtVcChlLHQpO2Z1bmN0aW9uIGUocyl7QnAodGhpcyxlKTt2YXIgcj1NcCh0aGlzLHQuY2FsbCh0aGlzLHMpKTtyZXR1cm4gci50eXBlPUxwLlJPT1Qscn1yZXR1cm4gZS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgcj10aGlzLnJlZHVjZShmdW5jdGlvbihuLGkpe3ZhciBvPVN0cmluZyhpKTtyZXR1cm4gbz9uK28rXCIsXCI6XCJcIn0sXCJcIikuc2xpY2UoMCwtMSk7cmV0dXJuIHRoaXMudHJhaWxpbmdDb21tYT9yK1wiLFwiOnJ9LGV9KHFwLmRlZmF1bHQpO3VyLmRlZmF1bHQ9RnA7X2EuZXhwb3J0cz11ci5kZWZhdWx0fSk7dmFyIFNhPWcoKGxyLGthKT0+e1widXNlIHN0cmljdFwiO2xyLl9fZXNNb2R1bGU9ITA7dmFyICRwPWFyKCksV3A9VnAoJHApLFlwPUIoKTtmdW5jdGlvbiBWcCh0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24genAodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIEdwKHQsZSl7aWYoIXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBlJiYodHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpP2U6dH1mdW5jdGlvbiBqcCh0LGUpe2lmKHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJmUhPT1udWxsKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiBlKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGUpOnQuX19wcm90b19fPWUpfXZhciBIcD1mdW5jdGlvbih0KXtqcChlLHQpO2Z1bmN0aW9uIGUocyl7enAodGhpcyxlKTt2YXIgcj1HcCh0aGlzLHQuY2FsbCh0aGlzLHMpKTtyZXR1cm4gci50eXBlPVlwLlNFTEVDVE9SLHJ9cmV0dXJuIGV9KFdwLmRlZmF1bHQpO2xyLmRlZmF1bHQ9SHA7a2EuZXhwb3J0cz1sci5kZWZhdWx0fSk7dmFyIFVlPWcoKGNyLFRhKT0+e1widXNlIHN0cmljdFwiO2NyLl9fZXNNb2R1bGU9ITA7dmFyIEtwPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLHMpe2Zvcih2YXIgcj0wO3I8cy5sZW5ndGg7cisrKXt2YXIgbj1zW3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19cmV0dXJuIGZ1bmN0aW9uKGUscyxyKXtyZXR1cm4gcyYmdChlLnByb3RvdHlwZSxzKSxyJiZ0KGUsciksZX19KCksUXA9d2UoKSxKcD1YcChRcCk7ZnVuY3Rpb24gWHAodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIFpwKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBlaCh0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZSYmKHR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKT9lOnR9ZnVuY3Rpb24gdGgodCxlKXtpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZlIT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX12YXIgcmg9ZnVuY3Rpb24odCl7dGgoZSx0KTtmdW5jdGlvbiBlKCl7cmV0dXJuIFpwKHRoaXMsZSksZWgodGhpcyx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9cmV0dXJuIGUucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuW3RoaXMuc3BhY2VzLmJlZm9yZSx0aGlzLm5zLFN0cmluZyh0aGlzLnZhbHVlKSx0aGlzLnNwYWNlcy5hZnRlcl0uam9pbihcIlwiKX0sS3AoZSxbe2tleTpcIm5zXCIsZ2V0OmZ1bmN0aW9uKCl7dmFyIHI9dGhpcy5uYW1lc3BhY2U7cmV0dXJuIHI/KHR5cGVvZiByPT1cInN0cmluZ1wiP3I6XCJcIikrXCJ8XCI6XCJcIn19XSksZX0oSnAuZGVmYXVsdCk7Y3IuZGVmYXVsdD1yaDtUYS5leHBvcnRzPWNyLmRlZmF1bHR9KTt2YXIgT2E9ZygoZnIsQ2EpPT57XCJ1c2Ugc3RyaWN0XCI7ZnIuX19lc01vZHVsZT0hMDt2YXIgc2g9VWUoKSxuaD1vaChzaCksaWg9QigpO2Z1bmN0aW9uIG9oKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBhaCh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gdWgodCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGUmJih0eXBlb2YgZT09XCJvYmplY3RcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIik/ZTp0fWZ1bmN0aW9uIGxoKHQsZSl7aWYodHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmZSE9PW51bGwpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIGUpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsZSk6dC5fX3Byb3RvX189ZSl9dmFyIGNoPWZ1bmN0aW9uKHQpe2xoKGUsdCk7ZnVuY3Rpb24gZShzKXthaCh0aGlzLGUpO3ZhciByPXVoKHRoaXMsdC5jYWxsKHRoaXMscykpO3JldHVybiByLnR5cGU9aWguQ0xBU1Mscn1yZXR1cm4gZS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5bdGhpcy5zcGFjZXMuYmVmb3JlLHRoaXMubnMsXCIuXCIrdGhpcy52YWx1ZSx0aGlzLnNwYWNlcy5hZnRlcl0uam9pbihcIlwiKX0sZX0obmguZGVmYXVsdCk7ZnIuZGVmYXVsdD1jaDtDYS5leHBvcnRzPWZyLmRlZmF1bHR9KTt2YXIgTmE9ZygocHIsQWEpPT57XCJ1c2Ugc3RyaWN0XCI7cHIuX19lc01vZHVsZT0hMDt2YXIgZmg9d2UoKSxwaD1kaChmaCksaGg9QigpO2Z1bmN0aW9uIGRoKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBtaCh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24geWgodCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGUmJih0eXBlb2YgZT09XCJvYmplY3RcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIik/ZTp0fWZ1bmN0aW9uIGdoKHQsZSl7aWYodHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmZSE9PW51bGwpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIGUpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsZSk6dC5fX3Byb3RvX189ZSl9dmFyIHdoPWZ1bmN0aW9uKHQpe2doKGUsdCk7ZnVuY3Rpb24gZShzKXttaCh0aGlzLGUpO3ZhciByPXloKHRoaXMsdC5jYWxsKHRoaXMscykpO3JldHVybiByLnR5cGU9aGguQ09NTUVOVCxyfXJldHVybiBlfShwaC5kZWZhdWx0KTtwci5kZWZhdWx0PXdoO0FhLmV4cG9ydHM9cHIuZGVmYXVsdH0pO3ZhciBSYT1nKChocixQYSk9PntcInVzZSBzdHJpY3RcIjtoci5fX2VzTW9kdWxlPSEwO3ZhciB2aD1VZSgpLHhoPV9oKHZoKSxiaD1CKCk7ZnVuY3Rpb24gX2godCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIEVoKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBraCh0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZSYmKHR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKT9lOnR9ZnVuY3Rpb24gU2godCxlKXtpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZlIT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX12YXIgVGg9ZnVuY3Rpb24odCl7U2goZSx0KTtmdW5jdGlvbiBlKHMpe0VoKHRoaXMsZSk7dmFyIHI9a2godGhpcyx0LmNhbGwodGhpcyxzKSk7cmV0dXJuIHIudHlwZT1iaC5JRCxyfXJldHVybiBlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblt0aGlzLnNwYWNlcy5iZWZvcmUsdGhpcy5ucyxcIiNcIit0aGlzLnZhbHVlLHRoaXMuc3BhY2VzLmFmdGVyXS5qb2luKFwiXCIpfSxlfSh4aC5kZWZhdWx0KTtoci5kZWZhdWx0PVRoO1BhLmV4cG9ydHM9aHIuZGVmYXVsdH0pO3ZhciBxYT1nKChkcixJYSk9PntcInVzZSBzdHJpY3RcIjtkci5fX2VzTW9kdWxlPSEwO3ZhciBDaD1VZSgpLE9oPU5oKENoKSxBaD1CKCk7ZnVuY3Rpb24gTmgodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIFBoKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBSaCh0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZSYmKHR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKT9lOnR9ZnVuY3Rpb24gSWgodCxlKXtpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZlIT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX12YXIgcWg9ZnVuY3Rpb24odCl7SWgoZSx0KTtmdW5jdGlvbiBlKHMpe1BoKHRoaXMsZSk7dmFyIHI9UmgodGhpcyx0LmNhbGwodGhpcyxzKSk7cmV0dXJuIHIudHlwZT1BaC5UQUcscn1yZXR1cm4gZX0oT2guZGVmYXVsdCk7ZHIuZGVmYXVsdD1xaDtJYS5leHBvcnRzPWRyLmRlZmF1bHR9KTt2YXIgRGE9ZygobXIsTGEpPT57XCJ1c2Ugc3RyaWN0XCI7bXIuX19lc01vZHVsZT0hMDt2YXIgTGg9d2UoKSxEaD1NaChMaCksQmg9QigpO2Z1bmN0aW9uIE1oKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBVaCh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gRmgodCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGUmJih0eXBlb2YgZT09XCJvYmplY3RcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIik/ZTp0fWZ1bmN0aW9uICRoKHQsZSl7aWYodHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmZSE9PW51bGwpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIGUpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsZSk6dC5fX3Byb3RvX189ZSl9dmFyIFdoPWZ1bmN0aW9uKHQpeyRoKGUsdCk7ZnVuY3Rpb24gZShzKXtVaCh0aGlzLGUpO3ZhciByPUZoKHRoaXMsdC5jYWxsKHRoaXMscykpO3JldHVybiByLnR5cGU9QmguU1RSSU5HLHJ9cmV0dXJuIGV9KERoLmRlZmF1bHQpO21yLmRlZmF1bHQ9V2g7TGEuZXhwb3J0cz1tci5kZWZhdWx0fSk7dmFyIE1hPWcoKHlyLEJhKT0+e1widXNlIHN0cmljdFwiO3lyLl9fZXNNb2R1bGU9ITA7dmFyIFloPWFyKCksVmg9R2goWWgpLHpoPUIoKTtmdW5jdGlvbiBHaCh0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gamgodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIEhoKHQsZSl7aWYoIXQpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBlJiYodHlwZW9mIGU9PVwib2JqZWN0XCJ8fHR5cGVvZiBlPT1cImZ1bmN0aW9uXCIpP2U6dH1mdW5jdGlvbiBLaCh0LGUpe2lmKHR5cGVvZiBlIT1cImZ1bmN0aW9uXCImJmUhPT1udWxsKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiBlKTt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUmJmUucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6dCxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZih0LGUpOnQuX19wcm90b19fPWUpfXZhciBRaD1mdW5jdGlvbih0KXtLaChlLHQpO2Z1bmN0aW9uIGUocyl7amgodGhpcyxlKTt2YXIgcj1IaCh0aGlzLHQuY2FsbCh0aGlzLHMpKTtyZXR1cm4gci50eXBlPXpoLlBTRVVETyxyfXJldHVybiBlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciByPXRoaXMubGVuZ3RoP1wiKFwiK3RoaXMubWFwKFN0cmluZykuam9pbihcIixcIikrXCIpXCI6XCJcIjtyZXR1cm5bdGhpcy5zcGFjZXMuYmVmb3JlLFN0cmluZyh0aGlzLnZhbHVlKSxyLHRoaXMuc3BhY2VzLmFmdGVyXS5qb2luKFwiXCIpfSxlfShWaC5kZWZhdWx0KTt5ci5kZWZhdWx0PVFoO0JhLmV4cG9ydHM9eXIuZGVmYXVsdH0pO3ZhciBGYT1nKChncixVYSk9PntcInVzZSBzdHJpY3RcIjtnci5fX2VzTW9kdWxlPSEwO3ZhciBKaD1VZSgpLFhoPWVkKEpoKSxaaD1CKCk7ZnVuY3Rpb24gZWQodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIHRkKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiByZCh0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZSYmKHR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKT9lOnR9ZnVuY3Rpb24gc2QodCxlKXtpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZlIT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX12YXIgbmQ9ZnVuY3Rpb24odCl7c2QoZSx0KTtmdW5jdGlvbiBlKHMpe3RkKHRoaXMsZSk7dmFyIHI9cmQodGhpcyx0LmNhbGwodGhpcyxzKSk7cmV0dXJuIHIudHlwZT1aaC5BVFRSSUJVVEUsci5yYXdzPXt9LHJ9cmV0dXJuIGUucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7dmFyIHI9W3RoaXMuc3BhY2VzLmJlZm9yZSxcIltcIix0aGlzLm5zLHRoaXMuYXR0cmlidXRlXTtyZXR1cm4gdGhpcy5vcGVyYXRvciYmci5wdXNoKHRoaXMub3BlcmF0b3IpLHRoaXMudmFsdWUmJnIucHVzaCh0aGlzLnZhbHVlKSx0aGlzLnJhd3MuaW5zZW5zaXRpdmU/ci5wdXNoKHRoaXMucmF3cy5pbnNlbnNpdGl2ZSk6dGhpcy5pbnNlbnNpdGl2ZSYmci5wdXNoKFwiIGlcIiksci5wdXNoKFwiXVwiKSxyLmNvbmNhdCh0aGlzLnNwYWNlcy5hZnRlcikuam9pbihcIlwiKX0sZX0oWGguZGVmYXVsdCk7Z3IuZGVmYXVsdD1uZDtVYS5leHBvcnRzPWdyLmRlZmF1bHR9KTt2YXIgV2E9Zygod3IsJGEpPT57XCJ1c2Ugc3RyaWN0XCI7d3IuX19lc01vZHVsZT0hMDt2YXIgaWQ9VWUoKSxvZD11ZChpZCksYWQ9QigpO2Z1bmN0aW9uIHVkKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBsZCh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gY2QodCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGUmJih0eXBlb2YgZT09XCJvYmplY3RcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIik/ZTp0fWZ1bmN0aW9uIGZkKHQsZSl7aWYodHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmZSE9PW51bGwpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIGUpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsZSk6dC5fX3Byb3RvX189ZSl9dmFyIHBkPWZ1bmN0aW9uKHQpe2ZkKGUsdCk7ZnVuY3Rpb24gZShzKXtsZCh0aGlzLGUpO3ZhciByPWNkKHRoaXMsdC5jYWxsKHRoaXMscykpO3JldHVybiByLnR5cGU9YWQuVU5JVkVSU0FMLHIudmFsdWU9XCIqXCIscn1yZXR1cm4gZX0ob2QuZGVmYXVsdCk7d3IuZGVmYXVsdD1wZDskYS5leHBvcnRzPXdyLmRlZmF1bHR9KTt2YXIgVmE9ZygodnIsWWEpPT57XCJ1c2Ugc3RyaWN0XCI7dnIuX19lc01vZHVsZT0hMDt2YXIgaGQ9d2UoKSxkZD15ZChoZCksbWQ9QigpO2Z1bmN0aW9uIHlkKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBnZCh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gd2QodCxlKXtpZighdCl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIGUmJih0eXBlb2YgZT09XCJvYmplY3RcInx8dHlwZW9mIGU9PVwiZnVuY3Rpb25cIik/ZTp0fWZ1bmN0aW9uIHZkKHQsZSl7aWYodHlwZW9mIGUhPVwiZnVuY3Rpb25cIiYmZSE9PW51bGwpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIGUpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsZSk6dC5fX3Byb3RvX189ZSl9dmFyIHhkPWZ1bmN0aW9uKHQpe3ZkKGUsdCk7ZnVuY3Rpb24gZShzKXtnZCh0aGlzLGUpO3ZhciByPXdkKHRoaXMsdC5jYWxsKHRoaXMscykpO3JldHVybiByLnR5cGU9bWQuQ09NQklOQVRPUixyfXJldHVybiBlfShkZC5kZWZhdWx0KTt2ci5kZWZhdWx0PXhkO1lhLmV4cG9ydHM9dnIuZGVmYXVsdH0pO3ZhciBHYT1nKCh4cix6YSk9PntcInVzZSBzdHJpY3RcIjt4ci5fX2VzTW9kdWxlPSEwO3ZhciBiZD13ZSgpLF9kPWtkKGJkKSxFZD1CKCk7ZnVuY3Rpb24ga2QodCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fWZ1bmN0aW9uIFNkKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBUZCh0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZSYmKHR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKT9lOnR9ZnVuY3Rpb24gQ2QodCxlKXtpZih0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZlIT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgZSk7dC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnQsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksZSYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YodCxlKTp0Ll9fcHJvdG9fXz1lKX12YXIgT2Q9ZnVuY3Rpb24odCl7Q2QoZSx0KTtmdW5jdGlvbiBlKHMpe1NkKHRoaXMsZSk7dmFyIHI9VGQodGhpcyx0LmNhbGwodGhpcyxzKSk7cmV0dXJuIHIudHlwZT1FZC5ORVNUSU5HLHIudmFsdWU9XCImXCIscn1yZXR1cm4gZX0oX2QuZGVmYXVsdCk7eHIuZGVmYXVsdD1PZDt6YS5leHBvcnRzPXhyLmRlZmF1bHR9KTt2YXIgSGE9ZygoYnIsamEpPT57XCJ1c2Ugc3RyaWN0XCI7YnIuX19lc01vZHVsZT0hMDtici5kZWZhdWx0PUFkO2Z1bmN0aW9uIEFkKHQpe3JldHVybiB0LnNvcnQoZnVuY3Rpb24oZSxzKXtyZXR1cm4gZS1zfSl9amEuZXhwb3J0cz1ici5kZWZhdWx0fSk7dmFyIHN1PWcoKGtyLHJ1KT0+e1widXNlIHN0cmljdFwiO2tyLl9fZXNNb2R1bGU9ITA7a3IuZGVmYXVsdD1GZDt2YXIgS2E9MzksTmQ9MzQsVXM9OTIsUWE9NDcsU3Q9MTAsRnM9MzIsJHM9MTIsV3M9OSxZcz0xMyxKYT00MyxYYT02MixaYT0xMjYsZXU9MTI0LFBkPTQ0LFJkPTQwLElkPTQxLHFkPTkxLExkPTkzLERkPTU5LHR1PTQyLEJkPTU4LE1kPTM4LFVkPTY0LF9yPS9bIFxcblxcdFxcclxce1xcKFxcKSdcIlxcXFw7L10vZyxFcj0vWyBcXG5cXHRcXHJcXChcXClcXCo6O0AhJidcIlxcK1xcfH4+LFxcW1xcXVxcXFxdfFxcLyg/PVxcKikvZztmdW5jdGlvbiBGZCh0KXtmb3IodmFyIGU9W10scz10LmNzcy52YWx1ZU9mKCkscj12b2lkIDAsbj12b2lkIDAsaT12b2lkIDAsbz12b2lkIDAsdT12b2lkIDAsYT12b2lkIDAsYz12b2lkIDAsZj12b2lkIDAscD12b2lkIDAsbD12b2lkIDAseT12b2lkIDAseD1zLmxlbmd0aCxoPS0xLGQ9MSxtPTAsYj1mdW5jdGlvbih2LE4pe2lmKHQuc2FmZSlzKz1OLG49cy5sZW5ndGgtMTtlbHNlIHRocm93IHQuZXJyb3IoXCJVbmNsb3NlZCBcIit2LGQsbS1oLG0pfTttPHg7KXtzd2l0Y2gocj1zLmNoYXJDb2RlQXQobSkscj09PVN0JiYoaD1tLGQrPTEpLHIpe2Nhc2UgU3Q6Y2FzZSBGczpjYXNlIFdzOmNhc2UgWXM6Y2FzZSAkczpuPW07ZG8gbis9MSxyPXMuY2hhckNvZGVBdChuKSxyPT09U3QmJihoPW4sZCs9MSk7d2hpbGUocj09PUZzfHxyPT09U3R8fHI9PT1Xc3x8cj09PVlzfHxyPT09JHMpO2UucHVzaChbXCJzcGFjZVwiLHMuc2xpY2UobSxuKSxkLG0taCxtXSksbT1uLTE7YnJlYWs7Y2FzZSBKYTpjYXNlIFhhOmNhc2UgWmE6Y2FzZSBldTpuPW07ZG8gbis9MSxyPXMuY2hhckNvZGVBdChuKTt3aGlsZShyPT09SmF8fHI9PT1YYXx8cj09PVphfHxyPT09ZXUpO2UucHVzaChbXCJjb21iaW5hdG9yXCIscy5zbGljZShtLG4pLGQsbS1oLG1dKSxtPW4tMTticmVhaztjYXNlIHR1OmUucHVzaChbXCIqXCIsXCIqXCIsZCxtLWgsbV0pO2JyZWFrO2Nhc2UgTWQ6ZS5wdXNoKFtcIiZcIixcIiZcIixkLG0taCxtXSk7YnJlYWs7Y2FzZSBQZDplLnB1c2goW1wiLFwiLFwiLFwiLGQsbS1oLG1dKTticmVhaztjYXNlIHFkOmUucHVzaChbXCJbXCIsXCJbXCIsZCxtLWgsbV0pO2JyZWFrO2Nhc2UgTGQ6ZS5wdXNoKFtcIl1cIixcIl1cIixkLG0taCxtXSk7YnJlYWs7Y2FzZSBCZDplLnB1c2goW1wiOlwiLFwiOlwiLGQsbS1oLG1dKTticmVhaztjYXNlIERkOmUucHVzaChbXCI7XCIsXCI7XCIsZCxtLWgsbV0pO2JyZWFrO2Nhc2UgUmQ6ZS5wdXNoKFtcIihcIixcIihcIixkLG0taCxtXSk7YnJlYWs7Y2FzZSBJZDplLnB1c2goW1wiKVwiLFwiKVwiLGQsbS1oLG1dKTticmVhaztjYXNlIEthOmNhc2UgTmQ6aT1yPT09S2E/XCInXCI6J1wiJyxuPW07ZG8gZm9yKGw9ITEsbj1zLmluZGV4T2YoaSxuKzEpLG49PT0tMSYmYihcInF1b3RlXCIsaSkseT1uO3MuY2hhckNvZGVBdCh5LTEpPT09VXM7KXktPTEsbD0hbDt3aGlsZShsKTtlLnB1c2goW1wic3RyaW5nXCIscy5zbGljZShtLG4rMSksZCxtLWgsZCxuLWgsbV0pLG09bjticmVhaztjYXNlIFVkOl9yLmxhc3RJbmRleD1tKzEsX3IudGVzdChzKSxfci5sYXN0SW5kZXg9PT0wP249cy5sZW5ndGgtMTpuPV9yLmxhc3RJbmRleC0yLGUucHVzaChbXCJhdC13b3JkXCIscy5zbGljZShtLG4rMSksZCxtLWgsZCxuLWgsbV0pLG09bjticmVhaztjYXNlIFVzOmZvcihuPW0sYz0hMDtzLmNoYXJDb2RlQXQobisxKT09PVVzOyluKz0xLGM9IWM7cj1zLmNoYXJDb2RlQXQobisxKSxjJiZyIT09UWEmJnIhPT1GcyYmciE9PVN0JiZyIT09V3MmJnIhPT1ZcyYmciE9PSRzJiYobis9MSksZS5wdXNoKFtcIndvcmRcIixzLnNsaWNlKG0sbisxKSxkLG0taCxkLG4taCxtXSksbT1uO2JyZWFrO2RlZmF1bHQ6cj09PVFhJiZzLmNoYXJDb2RlQXQobSsxKT09PXR1PyhuPXMuaW5kZXhPZihcIiovXCIsbSsyKSsxLG49PT0wJiZiKFwiY29tbWVudFwiLFwiKi9cIiksYT1zLnNsaWNlKG0sbisxKSxvPWEuc3BsaXQoYFxuYCksdT1vLmxlbmd0aC0xLHU+MD8oZj1kK3UscD1uLW9bdV0ubGVuZ3RoKTooZj1kLHA9aCksZS5wdXNoKFtcImNvbW1lbnRcIixhLGQsbS1oLGYsbi1wLG1dKSxoPXAsZD1mLG09bik6KEVyLmxhc3RJbmRleD1tKzEsRXIudGVzdChzKSxFci5sYXN0SW5kZXg9PT0wP249cy5sZW5ndGgtMTpuPUVyLmxhc3RJbmRleC0yLGUucHVzaChbXCJ3b3JkXCIscy5zbGljZShtLG4rMSksZCxtLWgsZCxuLWgsbV0pLG09bik7YnJlYWt9bSsrfXJldHVybiBlfXJ1LmV4cG9ydHM9a3IuZGVmYXVsdH0pO3ZhciBvdT1nKChTcixpdSk9PntcInVzZSBzdHJpY3RcIjtTci5fX2VzTW9kdWxlPSEwO3ZhciAkZD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxzKXtmb3IodmFyIHI9MDtyPHMubGVuZ3RoO3IrKyl7dmFyIG49c1tyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fXJldHVybiBmdW5jdGlvbihlLHMscil7cmV0dXJuIHMmJnQoZS5wcm90b3R5cGUscyksciYmdChlLHIpLGV9fSgpLFdkPURzKCksWWQ9SShXZCksVmQ9QnMoKSxWcz1JKFZkKSx6ZD1NcygpLEdkPUkoemQpLGpkPUVhKCksSGQ9SShqZCksS2Q9U2EoKSx6cz1JKEtkKSxRZD1PYSgpLEpkPUkoUWQpLFhkPU5hKCksWmQ9SShYZCksZW09UmEoKSx0bT1JKGVtKSxybT1xYSgpLHNtPUkocm0pLG5tPURhKCksaW09SShubSksb209TWEoKSxhbT1JKG9tKSx1bT1GYSgpLGxtPUkodW0pLGNtPVdhKCksZm09SShjbSkscG09VmEoKSxobT1JKHBtKSxkbT1HYSgpLG1tPUkoZG0pLHltPUhhKCksZ209SSh5bSksd209c3UoKSxudT1JKHdtKSx2bT1CKCkseG09Ym0odm0pO2Z1bmN0aW9uIGJtKHQpe2lmKHQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgZT17fTtpZih0IT1udWxsKWZvcih2YXIgcyBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHMpJiYoZVtzXT10W3NdKTtyZXR1cm4gZS5kZWZhdWx0PXQsZX1mdW5jdGlvbiBJKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX1mdW5jdGlvbiBfbSh0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIEVtPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXtfbSh0aGlzLHQpLHRoaXMuaW5wdXQ9ZSx0aGlzLmxvc3N5PWUub3B0aW9ucy5sb3NzbGVzcz09PSExLHRoaXMucG9zaXRpb249MCx0aGlzLnJvb3Q9bmV3IEhkLmRlZmF1bHQ7dmFyIHM9bmV3IHpzLmRlZmF1bHQ7cmV0dXJuIHRoaXMucm9vdC5hcHBlbmQocyksdGhpcy5jdXJyZW50PXMsdGhpcy5sb3NzeT90aGlzLnRva2Vucz0oMCxudS5kZWZhdWx0KSh7c2FmZTplLnNhZmUsY3NzOmUuY3NzLnRyaW0oKX0pOnRoaXMudG9rZW5zPSgwLG51LmRlZmF1bHQpKGUpLHRoaXMubG9vcCgpfXJldHVybiB0LnByb3RvdHlwZS5hdHRyaWJ1dGU9ZnVuY3Rpb24oKXt2YXIgcz1cIlwiLHI9dm9pZCAwLG49dGhpcy5jdXJyVG9rZW47Zm9yKHRoaXMucG9zaXRpb24rKzt0aGlzLnBvc2l0aW9uPHRoaXMudG9rZW5zLmxlbmd0aCYmdGhpcy5jdXJyVG9rZW5bMF0hPT1cIl1cIjspcys9dGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl1bMV0sdGhpcy5wb3NpdGlvbisrO3RoaXMucG9zaXRpb249PT10aGlzLnRva2Vucy5sZW5ndGgmJiF+cy5pbmRleE9mKFwiXVwiKSYmdGhpcy5lcnJvcihcIkV4cGVjdGVkIGEgY2xvc2luZyBzcXVhcmUgYnJhY2tldC5cIik7dmFyIGk9cy5zcGxpdCgvKCg/Olsqfl4kfF0/PSkpKFteXSopLyksbz1pWzBdLnNwbGl0KC8oXFx8KS9nKSx1PXtvcGVyYXRvcjppWzFdLHZhbHVlOmlbMl0sc291cmNlOntzdGFydDp7bGluZTpuWzJdLGNvbHVtbjpuWzNdfSxlbmQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfX0sc291cmNlSW5kZXg6bls0XX07aWYoby5sZW5ndGg+MT8ob1swXT09PVwiXCImJihvWzBdPSEwKSx1LmF0dHJpYnV0ZT10aGlzLnBhcnNlVmFsdWUob1syXSksdS5uYW1lc3BhY2U9dGhpcy5wYXJzZU5hbWVzcGFjZShvWzBdKSk6dS5hdHRyaWJ1dGU9dGhpcy5wYXJzZVZhbHVlKGlbMF0pLHI9bmV3IGxtLmRlZmF1bHQodSksaVsyXSl7dmFyIGE9aVsyXS5zcGxpdCgvKFxccytpXFxzKj8pJC8pLGM9YVswXS50cmltKCk7ci52YWx1ZT10aGlzLmxvc3N5P2M6YVswXSxhWzFdJiYoci5pbnNlbnNpdGl2ZT0hMCx0aGlzLmxvc3N5fHwoci5yYXdzLmluc2Vuc2l0aXZlPWFbMV0pKSxyLnF1b3RlZD1jWzBdPT09XCInXCJ8fGNbMF09PT0nXCInLHIucmF3cy51bnF1b3RlZD1yLnF1b3RlZD9jLnNsaWNlKDEsLTEpOmN9dGhpcy5uZXdOb2RlKHIpLHRoaXMucG9zaXRpb24rK30sdC5wcm90b3R5cGUuY29tYmluYXRvcj1mdW5jdGlvbigpe2lmKHRoaXMuY3VyclRva2VuWzFdPT09XCJ8XCIpcmV0dXJuIHRoaXMubmFtZXNwYWNlKCk7Zm9yKHZhciBzPW5ldyBobS5kZWZhdWx0KHt2YWx1ZTpcIlwiLHNvdXJjZTp7c3RhcnQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfSxlbmQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfX0sc291cmNlSW5kZXg6dGhpcy5jdXJyVG9rZW5bNF19KTt0aGlzLnBvc2l0aW9uPHRoaXMudG9rZW5zLmxlbmd0aCYmdGhpcy5jdXJyVG9rZW4mJih0aGlzLmN1cnJUb2tlblswXT09PVwic3BhY2VcInx8dGhpcy5jdXJyVG9rZW5bMF09PT1cImNvbWJpbmF0b3JcIik7KXRoaXMubmV4dFRva2VuJiZ0aGlzLm5leHRUb2tlblswXT09PVwiY29tYmluYXRvclwiPyhzLnNwYWNlcy5iZWZvcmU9dGhpcy5wYXJzZVNwYWNlKHRoaXMuY3VyclRva2VuWzFdKSxzLnNvdXJjZS5zdGFydC5saW5lPXRoaXMubmV4dFRva2VuWzJdLHMuc291cmNlLnN0YXJ0LmNvbHVtbj10aGlzLm5leHRUb2tlblszXSxzLnNvdXJjZS5lbmQuY29sdW1uPXRoaXMubmV4dFRva2VuWzNdLHMuc291cmNlLmVuZC5saW5lPXRoaXMubmV4dFRva2VuWzJdLHMuc291cmNlSW5kZXg9dGhpcy5uZXh0VG9rZW5bNF0pOnRoaXMucHJldlRva2VuJiZ0aGlzLnByZXZUb2tlblswXT09PVwiY29tYmluYXRvclwiP3Muc3BhY2VzLmFmdGVyPXRoaXMucGFyc2VTcGFjZSh0aGlzLmN1cnJUb2tlblsxXSk6dGhpcy5jdXJyVG9rZW5bMF09PT1cImNvbWJpbmF0b3JcIj9zLnZhbHVlPXRoaXMuY3VyclRva2VuWzFdOnRoaXMuY3VyclRva2VuWzBdPT09XCJzcGFjZVwiJiYocy52YWx1ZT10aGlzLnBhcnNlU3BhY2UodGhpcy5jdXJyVG9rZW5bMV0sXCIgXCIpKSx0aGlzLnBvc2l0aW9uKys7cmV0dXJuIHRoaXMubmV3Tm9kZShzKX0sdC5wcm90b3R5cGUuY29tbWE9ZnVuY3Rpb24oKXtpZih0aGlzLnBvc2l0aW9uPT09dGhpcy50b2tlbnMubGVuZ3RoLTEpe3RoaXMucm9vdC50cmFpbGluZ0NvbW1hPSEwLHRoaXMucG9zaXRpb24rKztyZXR1cm59dmFyIHM9bmV3IHpzLmRlZmF1bHQ7dGhpcy5jdXJyZW50LnBhcmVudC5hcHBlbmQocyksdGhpcy5jdXJyZW50PXMsdGhpcy5wb3NpdGlvbisrfSx0LnByb3RvdHlwZS5jb21tZW50PWZ1bmN0aW9uKCl7dmFyIHM9bmV3IFpkLmRlZmF1bHQoe3ZhbHVlOnRoaXMuY3VyclRva2VuWzFdLHNvdXJjZTp7c3RhcnQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfSxlbmQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bNF0sY29sdW1uOnRoaXMuY3VyclRva2VuWzVdfX0sc291cmNlSW5kZXg6dGhpcy5jdXJyVG9rZW5bNl19KTt0aGlzLm5ld05vZGUocyksdGhpcy5wb3NpdGlvbisrfSx0LnByb3RvdHlwZS5lcnJvcj1mdW5jdGlvbihzKXt0aHJvdyBuZXcgdGhpcy5pbnB1dC5lcnJvcihzKX0sdC5wcm90b3R5cGUubWlzc2luZ0JhY2tzbGFzaD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVycm9yKFwiRXhwZWN0ZWQgYSBiYWNrc2xhc2ggcHJlY2VkaW5nIHRoZSBzZW1pY29sb24uXCIpfSx0LnByb3RvdHlwZS5taXNzaW5nUGFyZW50aGVzaXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcnJvcihcIkV4cGVjdGVkIG9wZW5pbmcgcGFyZW50aGVzaXMuXCIpfSx0LnByb3RvdHlwZS5taXNzaW5nU3F1YXJlQnJhY2tldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVycm9yKFwiRXhwZWN0ZWQgb3BlbmluZyBzcXVhcmUgYnJhY2tldC5cIil9LHQucHJvdG90eXBlLm5hbWVzcGFjZT1mdW5jdGlvbigpe3ZhciBzPXRoaXMucHJldlRva2VuJiZ0aGlzLnByZXZUb2tlblsxXXx8ITA7aWYodGhpcy5uZXh0VG9rZW5bMF09PT1cIndvcmRcIilyZXR1cm4gdGhpcy5wb3NpdGlvbisrLHRoaXMud29yZChzKTtpZih0aGlzLm5leHRUb2tlblswXT09PVwiKlwiKXJldHVybiB0aGlzLnBvc2l0aW9uKyssdGhpcy51bml2ZXJzYWwocyl9LHQucHJvdG90eXBlLm5lc3Rpbmc9ZnVuY3Rpb24oKXt0aGlzLm5ld05vZGUobmV3IG1tLmRlZmF1bHQoe3ZhbHVlOnRoaXMuY3VyclRva2VuWzFdLHNvdXJjZTp7c3RhcnQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfSxlbmQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfX0sc291cmNlSW5kZXg6dGhpcy5jdXJyVG9rZW5bNF19KSksdGhpcy5wb3NpdGlvbisrfSx0LnByb3RvdHlwZS5wYXJlbnRoZXNlcz1mdW5jdGlvbigpe3ZhciBzPXRoaXMuY3VycmVudC5sYXN0O2lmKHMmJnMudHlwZT09PXhtLlBTRVVETyl7dmFyIHI9bmV3IHpzLmRlZmF1bHQsbj10aGlzLmN1cnJlbnQ7cy5hcHBlbmQociksdGhpcy5jdXJyZW50PXI7dmFyIGk9MTtmb3IodGhpcy5wb3NpdGlvbisrO3RoaXMucG9zaXRpb248dGhpcy50b2tlbnMubGVuZ3RoJiZpOyl0aGlzLmN1cnJUb2tlblswXT09PVwiKFwiJiZpKyssdGhpcy5jdXJyVG9rZW5bMF09PT1cIilcIiYmaS0tLGk/dGhpcy5wYXJzZSgpOihyLnBhcmVudC5zb3VyY2UuZW5kLmxpbmU9dGhpcy5jdXJyVG9rZW5bMl0sci5wYXJlbnQuc291cmNlLmVuZC5jb2x1bW49dGhpcy5jdXJyVG9rZW5bM10sdGhpcy5wb3NpdGlvbisrKTtpJiZ0aGlzLmVycm9yKFwiRXhwZWN0ZWQgY2xvc2luZyBwYXJlbnRoZXNpcy5cIiksdGhpcy5jdXJyZW50PW59ZWxzZXt2YXIgbz0xO2Zvcih0aGlzLnBvc2l0aW9uKysscy52YWx1ZSs9XCIoXCI7dGhpcy5wb3NpdGlvbjx0aGlzLnRva2Vucy5sZW5ndGgmJm87KXRoaXMuY3VyclRva2VuWzBdPT09XCIoXCImJm8rKyx0aGlzLmN1cnJUb2tlblswXT09PVwiKVwiJiZvLS0scy52YWx1ZSs9dGhpcy5wYXJzZVBhcmVudGhlc2lzVG9rZW4odGhpcy5jdXJyVG9rZW4pLHRoaXMucG9zaXRpb24rKztvJiZ0aGlzLmVycm9yKFwiRXhwZWN0ZWQgY2xvc2luZyBwYXJlbnRoZXNpcy5cIil9fSx0LnByb3RvdHlwZS5wc2V1ZG89ZnVuY3Rpb24oKXtmb3IodmFyIHM9dGhpcyxyPVwiXCIsbj10aGlzLmN1cnJUb2tlbjt0aGlzLmN1cnJUb2tlbiYmdGhpcy5jdXJyVG9rZW5bMF09PT1cIjpcIjspcis9dGhpcy5jdXJyVG9rZW5bMV0sdGhpcy5wb3NpdGlvbisrO2lmKCF0aGlzLmN1cnJUb2tlbilyZXR1cm4gdGhpcy5lcnJvcihcIkV4cGVjdGVkIHBzZXVkby1jbGFzcyBvciBwc2V1ZG8tZWxlbWVudFwiKTtpZih0aGlzLmN1cnJUb2tlblswXT09PVwid29yZFwiKXt2YXIgaT12b2lkIDA7dGhpcy5zcGxpdFdvcmQoITEsZnVuY3Rpb24obyx1KXtyKz1vLGk9bmV3IGFtLmRlZmF1bHQoe3ZhbHVlOnIsc291cmNlOntzdGFydDp7bGluZTpuWzJdLGNvbHVtbjpuWzNdfSxlbmQ6e2xpbmU6cy5jdXJyVG9rZW5bNF0sY29sdW1uOnMuY3VyclRva2VuWzVdfX0sc291cmNlSW5kZXg6bls0XX0pLHMubmV3Tm9kZShpKSx1PjEmJnMubmV4dFRva2VuJiZzLm5leHRUb2tlblswXT09PVwiKFwiJiZzLmVycm9yKFwiTWlzcGxhY2VkIHBhcmVudGhlc2lzLlwiKX0pfWVsc2UgdGhpcy5lcnJvcignVW5leHBlY3RlZCBcIicrdGhpcy5jdXJyVG9rZW5bMF0rJ1wiIGZvdW5kLicpfSx0LnByb3RvdHlwZS5zcGFjZT1mdW5jdGlvbigpe3ZhciBzPXRoaXMuY3VyclRva2VuO3RoaXMucG9zaXRpb249PT0wfHx0aGlzLnByZXZUb2tlblswXT09PVwiLFwifHx0aGlzLnByZXZUb2tlblswXT09PVwiKFwiPyh0aGlzLnNwYWNlcz10aGlzLnBhcnNlU3BhY2Uoc1sxXSksdGhpcy5wb3NpdGlvbisrKTp0aGlzLnBvc2l0aW9uPT09dGhpcy50b2tlbnMubGVuZ3RoLTF8fHRoaXMubmV4dFRva2VuWzBdPT09XCIsXCJ8fHRoaXMubmV4dFRva2VuWzBdPT09XCIpXCI/KHRoaXMuY3VycmVudC5sYXN0LnNwYWNlcy5hZnRlcj10aGlzLnBhcnNlU3BhY2Uoc1sxXSksdGhpcy5wb3NpdGlvbisrKTp0aGlzLmNvbWJpbmF0b3IoKX0sdC5wcm90b3R5cGUuc3RyaW5nPWZ1bmN0aW9uKCl7dmFyIHM9dGhpcy5jdXJyVG9rZW47dGhpcy5uZXdOb2RlKG5ldyBpbS5kZWZhdWx0KHt2YWx1ZTp0aGlzLmN1cnJUb2tlblsxXSxzb3VyY2U6e3N0YXJ0OntsaW5lOnNbMl0sY29sdW1uOnNbM119LGVuZDp7bGluZTpzWzRdLGNvbHVtbjpzWzVdfX0sc291cmNlSW5kZXg6c1s2XX0pKSx0aGlzLnBvc2l0aW9uKyt9LHQucHJvdG90eXBlLnVuaXZlcnNhbD1mdW5jdGlvbihzKXt2YXIgcj10aGlzLm5leHRUb2tlbjtpZihyJiZyWzFdPT09XCJ8XCIpcmV0dXJuIHRoaXMucG9zaXRpb24rKyx0aGlzLm5hbWVzcGFjZSgpO3RoaXMubmV3Tm9kZShuZXcgZm0uZGVmYXVsdCh7dmFsdWU6dGhpcy5jdXJyVG9rZW5bMV0sc291cmNlOntzdGFydDp7bGluZTp0aGlzLmN1cnJUb2tlblsyXSxjb2x1bW46dGhpcy5jdXJyVG9rZW5bM119LGVuZDp7bGluZTp0aGlzLmN1cnJUb2tlblsyXSxjb2x1bW46dGhpcy5jdXJyVG9rZW5bM119fSxzb3VyY2VJbmRleDp0aGlzLmN1cnJUb2tlbls0XX0pLHMpLHRoaXMucG9zaXRpb24rK30sdC5wcm90b3R5cGUuc3BsaXRXb3JkPWZ1bmN0aW9uKHMscil7Zm9yKHZhciBuPXRoaXMsaT10aGlzLm5leHRUb2tlbixvPXRoaXMuY3VyclRva2VuWzFdO2kmJmlbMF09PT1cIndvcmRcIjspe3RoaXMucG9zaXRpb24rKzt2YXIgdT10aGlzLmN1cnJUb2tlblsxXTtpZihvKz11LHUubGFzdEluZGV4T2YoXCJcXFxcXCIpPT09dS5sZW5ndGgtMSl7dmFyIGE9dGhpcy5uZXh0VG9rZW47YSYmYVswXT09PVwic3BhY2VcIiYmKG8rPXRoaXMucGFyc2VTcGFjZShhWzFdLFwiIFwiKSx0aGlzLnBvc2l0aW9uKyspfWk9dGhpcy5uZXh0VG9rZW59dmFyIGM9KDAsVnMuZGVmYXVsdCkobyxcIi5cIiksZj0oMCxWcy5kZWZhdWx0KShvLFwiI1wiKSxwPSgwLFZzLmRlZmF1bHQpKG8sXCIje1wiKTtwLmxlbmd0aCYmKGY9Zi5maWx0ZXIoZnVuY3Rpb24oeSl7cmV0dXJuIX5wLmluZGV4T2YoeSl9KSk7dmFyIGw9KDAsZ20uZGVmYXVsdCkoKDAsR2QuZGVmYXVsdCkoKDAsWWQuZGVmYXVsdCkoW1swXSxjLGZdKSkpO2wuZm9yRWFjaChmdW5jdGlvbih5LHgpe3ZhciBoPWxbeCsxXXx8by5sZW5ndGgsZD1vLnNsaWNlKHksaCk7aWYoeD09PTAmJnIpcmV0dXJuIHIuY2FsbChuLGQsbC5sZW5ndGgpO3ZhciBtPXZvaWQgMDt+Yy5pbmRleE9mKHkpP209bmV3IEpkLmRlZmF1bHQoe3ZhbHVlOmQuc2xpY2UoMSksc291cmNlOntzdGFydDp7bGluZTpuLmN1cnJUb2tlblsyXSxjb2x1bW46bi5jdXJyVG9rZW5bM10reX0sZW5kOntsaW5lOm4uY3VyclRva2VuWzRdLGNvbHVtbjpuLmN1cnJUb2tlblszXSsoaC0xKX19LHNvdXJjZUluZGV4Om4uY3VyclRva2VuWzZdK2xbeF19KTp+Zi5pbmRleE9mKHkpP209bmV3IHRtLmRlZmF1bHQoe3ZhbHVlOmQuc2xpY2UoMSksc291cmNlOntzdGFydDp7bGluZTpuLmN1cnJUb2tlblsyXSxjb2x1bW46bi5jdXJyVG9rZW5bM10reX0sZW5kOntsaW5lOm4uY3VyclRva2VuWzRdLGNvbHVtbjpuLmN1cnJUb2tlblszXSsoaC0xKX19LHNvdXJjZUluZGV4Om4uY3VyclRva2VuWzZdK2xbeF19KTptPW5ldyBzbS5kZWZhdWx0KHt2YWx1ZTpkLHNvdXJjZTp7c3RhcnQ6e2xpbmU6bi5jdXJyVG9rZW5bMl0sY29sdW1uOm4uY3VyclRva2VuWzNdK3l9LGVuZDp7bGluZTpuLmN1cnJUb2tlbls0XSxjb2x1bW46bi5jdXJyVG9rZW5bM10rKGgtMSl9fSxzb3VyY2VJbmRleDpuLmN1cnJUb2tlbls2XStsW3hdfSksbi5uZXdOb2RlKG0scyl9KSx0aGlzLnBvc2l0aW9uKyt9LHQucHJvdG90eXBlLndvcmQ9ZnVuY3Rpb24ocyl7dmFyIHI9dGhpcy5uZXh0VG9rZW47cmV0dXJuIHImJnJbMV09PT1cInxcIj8odGhpcy5wb3NpdGlvbisrLHRoaXMubmFtZXNwYWNlKCkpOnRoaXMuc3BsaXRXb3JkKHMpfSx0LnByb3RvdHlwZS5sb29wPWZ1bmN0aW9uKCl7Zm9yKDt0aGlzLnBvc2l0aW9uPHRoaXMudG9rZW5zLmxlbmd0aDspdGhpcy5wYXJzZSghMCk7cmV0dXJuIHRoaXMucm9vdH0sdC5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24ocyl7c3dpdGNoKHRoaXMuY3VyclRva2VuWzBdKXtjYXNlXCJzcGFjZVwiOnRoaXMuc3BhY2UoKTticmVhaztjYXNlXCJjb21tZW50XCI6dGhpcy5jb21tZW50KCk7YnJlYWs7Y2FzZVwiKFwiOnRoaXMucGFyZW50aGVzZXMoKTticmVhaztjYXNlXCIpXCI6cyYmdGhpcy5taXNzaW5nUGFyZW50aGVzaXMoKTticmVhaztjYXNlXCJbXCI6dGhpcy5hdHRyaWJ1dGUoKTticmVhaztjYXNlXCJdXCI6dGhpcy5taXNzaW5nU3F1YXJlQnJhY2tldCgpO2JyZWFrO2Nhc2VcImF0LXdvcmRcIjpjYXNlXCJ3b3JkXCI6dGhpcy53b3JkKCk7YnJlYWs7Y2FzZVwiOlwiOnRoaXMucHNldWRvKCk7YnJlYWs7Y2FzZVwiO1wiOnRoaXMubWlzc2luZ0JhY2tzbGFzaCgpO2JyZWFrO2Nhc2VcIixcIjp0aGlzLmNvbW1hKCk7YnJlYWs7Y2FzZVwiKlwiOnRoaXMudW5pdmVyc2FsKCk7YnJlYWs7Y2FzZVwiJlwiOnRoaXMubmVzdGluZygpO2JyZWFrO2Nhc2VcImNvbWJpbmF0b3JcIjp0aGlzLmNvbWJpbmF0b3IoKTticmVhaztjYXNlXCJzdHJpbmdcIjp0aGlzLnN0cmluZygpO2JyZWFrfX0sdC5wcm90b3R5cGUucGFyc2VOYW1lc3BhY2U9ZnVuY3Rpb24ocyl7aWYodGhpcy5sb3NzeSYmdHlwZW9mIHM9PVwic3RyaW5nXCIpe3ZhciByPXMudHJpbSgpO3JldHVybiByLmxlbmd0aD9yOiEwfXJldHVybiBzfSx0LnByb3RvdHlwZS5wYXJzZVNwYWNlPWZ1bmN0aW9uKHMscil7cmV0dXJuIHRoaXMubG9zc3k/cnx8XCJcIjpzfSx0LnByb3RvdHlwZS5wYXJzZVZhbHVlPWZ1bmN0aW9uKHMpe3JldHVybiB0aGlzLmxvc3N5JiZzJiZ0eXBlb2Ygcz09XCJzdHJpbmdcIj9zLnRyaW0oKTpzfSx0LnByb3RvdHlwZS5wYXJzZVBhcmVudGhlc2lzVG9rZW49ZnVuY3Rpb24ocyl7cmV0dXJuIHRoaXMubG9zc3k/c1swXT09PVwic3BhY2VcIj90aGlzLnBhcnNlU3BhY2Uoc1sxXSxcIiBcIik6dGhpcy5wYXJzZVZhbHVlKHNbMV0pOnNbMV19LHQucHJvdG90eXBlLm5ld05vZGU9ZnVuY3Rpb24ocyxyKXtyZXR1cm4gciYmKHMubmFtZXNwYWNlPXRoaXMucGFyc2VOYW1lc3BhY2UocikpLHRoaXMuc3BhY2VzJiYocy5zcGFjZXMuYmVmb3JlPXRoaXMuc3BhY2VzLHRoaXMuc3BhY2VzPVwiXCIpLHRoaXMuY3VycmVudC5hcHBlbmQocyl9LCRkKHQsW3trZXk6XCJjdXJyVG9rZW5cIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl19fSx7a2V5OlwibmV4dFRva2VuXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMucG9zaXRpb24rMV19fSx7a2V5OlwicHJldlRva2VuXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9rZW5zW3RoaXMucG9zaXRpb24tMV19fV0pLHR9KCk7U3IuZGVmYXVsdD1FbTtpdS5leHBvcnRzPVNyLmRlZmF1bHR9KTt2YXIgdXU9ZygoVHIsYXUpPT57XCJ1c2Ugc3RyaWN0XCI7VHIuX19lc01vZHVsZT0hMDt2YXIga209ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUscyl7Zm9yKHZhciByPTA7cjxzLmxlbmd0aDtyKyspe3ZhciBuPXNbcl07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24oZSxzLHIpe3JldHVybiBzJiZ0KGUucHJvdG90eXBlLHMpLHImJnQoZSxyKSxlfX0oKSxTbT1vdSgpLFRtPUNtKFNtKTtmdW5jdGlvbiBDbSh0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19ZnVuY3Rpb24gT20odCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfXZhciBBbT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSl7cmV0dXJuIE9tKHRoaXMsdCksdGhpcy5mdW5jPWV8fGZ1bmN0aW9uKCl7fSx0aGlzfXJldHVybiB0LnByb3RvdHlwZS5wcm9jZXNzPWZ1bmN0aW9uKHMpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MSYmYXJndW1lbnRzWzFdIT09dm9pZCAwP2FyZ3VtZW50c1sxXTp7fSxuPW5ldyBUbS5kZWZhdWx0KHtjc3M6cyxlcnJvcjpmdW5jdGlvbihvKXt0aHJvdyBuZXcgRXJyb3Iobyl9LG9wdGlvbnM6cn0pO3JldHVybiB0aGlzLnJlcz1uLHRoaXMuZnVuYyhuKSx0aGlzfSxrbSh0LFt7a2V5OlwicmVzdWx0XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIFN0cmluZyh0aGlzLnJlcyl9fV0pLHR9KCk7VHIuZGVmYXVsdD1BbTthdS5leHBvcnRzPVRyLmRlZmF1bHR9KTt2YXIgRz1nKChWeCxjdSk9PntcInVzZSBzdHJpY3RcIjt2YXIgR3M9ZnVuY3Rpb24odCxlKXtsZXQgcz1uZXcgdC5jb25zdHJ1Y3Rvcjtmb3IobGV0IHIgaW4gdCl7aWYoIXQuaGFzT3duUHJvcGVydHkocikpY29udGludWU7bGV0IG49dFtyXSxpPXR5cGVvZiBuO3I9PT1cInBhcmVudFwiJiZpPT09XCJvYmplY3RcIj9lJiYoc1tyXT1lKTpyPT09XCJzb3VyY2VcIj9zW3JdPW46biBpbnN0YW5jZW9mIEFycmF5P3Nbcl09bi5tYXAobz0+R3MobyxzKSk6ciE9PVwiYmVmb3JlXCImJnIhPT1cImFmdGVyXCImJnIhPT1cImJldHdlZW5cIiYmciE9PVwic2VtaWNvbG9uXCImJihpPT09XCJvYmplY3RcIiYmbiE9PW51bGwmJihuPUdzKG4pKSxzW3JdPW4pfXJldHVybiBzfTtjdS5leHBvcnRzPWNsYXNze2NvbnN0cnVjdG9yKGUpe2U9ZXx8e30sdGhpcy5yYXdzPXtiZWZvcmU6XCJcIixhZnRlcjpcIlwifTtmb3IobGV0IHMgaW4gZSl0aGlzW3NdPWVbc119cmVtb3ZlKCl7cmV0dXJuIHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKSx0aGlzLnBhcmVudD12b2lkIDAsdGhpc310b1N0cmluZygpe3JldHVyblt0aGlzLnJhd3MuYmVmb3JlLFN0cmluZyh0aGlzLnZhbHVlKSx0aGlzLnJhd3MuYWZ0ZXJdLmpvaW4oXCJcIil9Y2xvbmUoZSl7ZT1lfHx7fTtsZXQgcz1Hcyh0aGlzKTtmb3IobGV0IHIgaW4gZSlzW3JdPWVbcl07cmV0dXJuIHN9Y2xvbmVCZWZvcmUoZSl7ZT1lfHx7fTtsZXQgcz10aGlzLmNsb25lKGUpO3JldHVybiB0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcyxzKSxzfWNsb25lQWZ0ZXIoZSl7ZT1lfHx7fTtsZXQgcz10aGlzLmNsb25lKGUpO3JldHVybiB0aGlzLnBhcmVudC5pbnNlcnRBZnRlcih0aGlzLHMpLHN9cmVwbGFjZVdpdGgoKXtsZXQgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO2lmKHRoaXMucGFyZW50KXtmb3IobGV0IHMgb2YgZSl0aGlzLnBhcmVudC5pbnNlcnRCZWZvcmUodGhpcyxzKTt0aGlzLnJlbW92ZSgpfXJldHVybiB0aGlzfW1vdmVUbyhlKXtyZXR1cm4gdGhpcy5jbGVhblJhd3ModGhpcy5yb290KCk9PT1lLnJvb3QoKSksdGhpcy5yZW1vdmUoKSxlLmFwcGVuZCh0aGlzKSx0aGlzfW1vdmVCZWZvcmUoZSl7cmV0dXJuIHRoaXMuY2xlYW5SYXdzKHRoaXMucm9vdCgpPT09ZS5yb290KCkpLHRoaXMucmVtb3ZlKCksZS5wYXJlbnQuaW5zZXJ0QmVmb3JlKGUsdGhpcyksdGhpc31tb3ZlQWZ0ZXIoZSl7cmV0dXJuIHRoaXMuY2xlYW5SYXdzKHRoaXMucm9vdCgpPT09ZS5yb290KCkpLHRoaXMucmVtb3ZlKCksZS5wYXJlbnQuaW5zZXJ0QWZ0ZXIoZSx0aGlzKSx0aGlzfW5leHQoKXtsZXQgZT10aGlzLnBhcmVudC5pbmRleCh0aGlzKTtyZXR1cm4gdGhpcy5wYXJlbnQubm9kZXNbZSsxXX1wcmV2KCl7bGV0IGU9dGhpcy5wYXJlbnQuaW5kZXgodGhpcyk7cmV0dXJuIHRoaXMucGFyZW50Lm5vZGVzW2UtMV19dG9KU09OKCl7bGV0IGU9e307Zm9yKGxldCBzIGluIHRoaXMpe2lmKCF0aGlzLmhhc093blByb3BlcnR5KHMpfHxzPT09XCJwYXJlbnRcIiljb250aW51ZTtsZXQgcj10aGlzW3NdO3IgaW5zdGFuY2VvZiBBcnJheT9lW3NdPXIubWFwKG49PnR5cGVvZiBuPT1cIm9iamVjdFwiJiZuLnRvSlNPTj9uLnRvSlNPTigpOm4pOnR5cGVvZiByPT1cIm9iamVjdFwiJiZyLnRvSlNPTj9lW3NdPXIudG9KU09OKCk6ZVtzXT1yfXJldHVybiBlfXJvb3QoKXtsZXQgZT10aGlzO2Zvcig7ZS5wYXJlbnQ7KWU9ZS5wYXJlbnQ7cmV0dXJuIGV9Y2xlYW5SYXdzKGUpe2RlbGV0ZSB0aGlzLnJhd3MuYmVmb3JlLGRlbGV0ZSB0aGlzLnJhd3MuYWZ0ZXIsZXx8ZGVsZXRlIHRoaXMucmF3cy5iZXR3ZWVufXBvc2l0aW9uSW5zaWRlKGUpe2xldCBzPXRoaXMudG9TdHJpbmcoKSxyPXRoaXMuc291cmNlLnN0YXJ0LmNvbHVtbixuPXRoaXMuc291cmNlLnN0YXJ0LmxpbmU7Zm9yKGxldCBpPTA7aTxlO2krKylzW2ldPT09YFxuYD8ocj0xLG4rPTEpOnIrPTE7cmV0dXJue2xpbmU6bixjb2x1bW46cn19cG9zaXRpb25CeShlKXtsZXQgcz10aGlzLnNvdXJjZS5zdGFydDtpZihPYmplY3QoZSkuaW5kZXgpcz10aGlzLnBvc2l0aW9uSW5zaWRlKGUuaW5kZXgpO2Vsc2UgaWYoT2JqZWN0KGUpLndvcmQpe2xldCByPXRoaXMudG9TdHJpbmcoKS5pbmRleE9mKGUud29yZCk7ciE9PS0xJiYocz10aGlzLnBvc2l0aW9uSW5zaWRlKHIpKX1yZXR1cm4gc319fSk7dmFyIFU9ZygoengsZnUpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIFBtPUcoKSxGZT1jbGFzcyBleHRlbmRzIFBte2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMubm9kZXN8fCh0aGlzLm5vZGVzPVtdKX1wdXNoKGUpe3JldHVybiBlLnBhcmVudD10aGlzLHRoaXMubm9kZXMucHVzaChlKSx0aGlzfWVhY2goZSl7dGhpcy5sYXN0RWFjaHx8KHRoaXMubGFzdEVhY2g9MCksdGhpcy5pbmRleGVzfHwodGhpcy5pbmRleGVzPXt9KSx0aGlzLmxhc3RFYWNoKz0xO2xldCBzPXRoaXMubGFzdEVhY2gscixuO2lmKHRoaXMuaW5kZXhlc1tzXT0wLCEhdGhpcy5ub2Rlcyl7Zm9yKDt0aGlzLmluZGV4ZXNbc108dGhpcy5ub2Rlcy5sZW5ndGgmJihyPXRoaXMuaW5kZXhlc1tzXSxuPWUodGhpcy5ub2Rlc1tyXSxyKSxuIT09ITEpOyl0aGlzLmluZGV4ZXNbc10rPTE7cmV0dXJuIGRlbGV0ZSB0aGlzLmluZGV4ZXNbc10sbn19d2FsayhlKXtyZXR1cm4gdGhpcy5lYWNoKChzLHIpPT57bGV0IG49ZShzLHIpO3JldHVybiBuIT09ITEmJnMud2FsayYmKG49cy53YWxrKGUpKSxufSl9d2Fsa1R5cGUoZSxzKXtpZighZXx8IXMpdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVycyB7dHlwZX0gYW5kIHtjYWxsYmFja30gYXJlIHJlcXVpcmVkLlwiKTtsZXQgcj10eXBlb2YgZT09XCJmdW5jdGlvblwiO3JldHVybiB0aGlzLndhbGsoKG4saSk9PntpZihyJiZuIGluc3RhbmNlb2YgZXx8IXImJm4udHlwZT09PWUpcmV0dXJuIHMuY2FsbCh0aGlzLG4saSl9KX1hcHBlbmQoZSl7cmV0dXJuIGUucGFyZW50PXRoaXMsdGhpcy5ub2Rlcy5wdXNoKGUpLHRoaXN9cHJlcGVuZChlKXtyZXR1cm4gZS5wYXJlbnQ9dGhpcyx0aGlzLm5vZGVzLnVuc2hpZnQoZSksdGhpc31jbGVhblJhd3MoZSl7aWYoc3VwZXIuY2xlYW5SYXdzKGUpLHRoaXMubm9kZXMpZm9yKGxldCBzIG9mIHRoaXMubm9kZXMpcy5jbGVhblJhd3MoZSl9aW5zZXJ0QWZ0ZXIoZSxzKXtsZXQgcj10aGlzLmluZGV4KGUpLG47dGhpcy5ub2Rlcy5zcGxpY2UocisxLDAscyk7Zm9yKGxldCBpIGluIHRoaXMuaW5kZXhlcyluPXRoaXMuaW5kZXhlc1tpXSxyPD1uJiYodGhpcy5pbmRleGVzW2ldPW4rdGhpcy5ub2Rlcy5sZW5ndGgpO3JldHVybiB0aGlzfWluc2VydEJlZm9yZShlLHMpe2xldCByPXRoaXMuaW5kZXgoZSksbjt0aGlzLm5vZGVzLnNwbGljZShyLDAscyk7Zm9yKGxldCBpIGluIHRoaXMuaW5kZXhlcyluPXRoaXMuaW5kZXhlc1tpXSxyPD1uJiYodGhpcy5pbmRleGVzW2ldPW4rdGhpcy5ub2Rlcy5sZW5ndGgpO3JldHVybiB0aGlzfXJlbW92ZUNoaWxkKGUpe2U9dGhpcy5pbmRleChlKSx0aGlzLm5vZGVzW2VdLnBhcmVudD12b2lkIDAsdGhpcy5ub2Rlcy5zcGxpY2UoZSwxKTtsZXQgcztmb3IobGV0IHIgaW4gdGhpcy5pbmRleGVzKXM9dGhpcy5pbmRleGVzW3JdLHM+PWUmJih0aGlzLmluZGV4ZXNbcl09cy0xKTtyZXR1cm4gdGhpc31yZW1vdmVBbGwoKXtmb3IobGV0IGUgb2YgdGhpcy5ub2RlcyllLnBhcmVudD12b2lkIDA7cmV0dXJuIHRoaXMubm9kZXM9W10sdGhpc31ldmVyeShlKXtyZXR1cm4gdGhpcy5ub2Rlcy5ldmVyeShlKX1zb21lKGUpe3JldHVybiB0aGlzLm5vZGVzLnNvbWUoZSl9aW5kZXgoZSl7cmV0dXJuIHR5cGVvZiBlPT1cIm51bWJlclwiP2U6dGhpcy5ub2Rlcy5pbmRleE9mKGUpfWdldCBmaXJzdCgpe2lmKHRoaXMubm9kZXMpcmV0dXJuIHRoaXMubm9kZXNbMF19Z2V0IGxhc3QoKXtpZih0aGlzLm5vZGVzKXJldHVybiB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoLTFdfXRvU3RyaW5nKCl7bGV0IGU9dGhpcy5ub2Rlcy5tYXAoU3RyaW5nKS5qb2luKFwiXCIpO3JldHVybiB0aGlzLnZhbHVlJiYoZT10aGlzLnZhbHVlK2UpLHRoaXMucmF3cy5iZWZvcmUmJihlPXRoaXMucmF3cy5iZWZvcmUrZSksdGhpcy5yYXdzLmFmdGVyJiYoZSs9dGhpcy5yYXdzLmFmdGVyKSxlfX07RmUucmVnaXN0ZXJXYWxrZXI9dD0+e2xldCBlPVwid2Fsa1wiK3QubmFtZTtlLmxhc3RJbmRleE9mKFwic1wiKSE9PWUubGVuZ3RoLTEmJihlKz1cInNcIiksIUZlLnByb3RvdHlwZVtlXSYmKEZlLnByb3RvdHlwZVtlXT1mdW5jdGlvbihzKXtyZXR1cm4gdGhpcy53YWxrVHlwZSh0LHMpfSl9O2Z1LmV4cG9ydHM9RmV9KTt2YXIgaHU9ZygoangscHUpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIFJtPVUoKTtwdS5leHBvcnRzPWNsYXNzIGV4dGVuZHMgUm17Y29uc3RydWN0b3IoZSl7c3VwZXIoZSksdGhpcy50eXBlPVwicm9vdFwifX19KTt2YXIgbXU9ZygoS3gsZHUpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIEltPVUoKTtkdS5leHBvcnRzPWNsYXNzIGV4dGVuZHMgSW17Y29uc3RydWN0b3IoZSl7c3VwZXIoZSksdGhpcy50eXBlPVwidmFsdWVcIix0aGlzLnVuYmFsYW5jZWQ9MH19fSk7dmFyIHd1PWcoKFF4LGd1KT0+e1widXNlIHN0cmljdFwiO3ZhciB5dT1VKCksQ3I9Y2xhc3MgZXh0ZW5kcyB5dXtjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLnR5cGU9XCJhdHdvcmRcIn10b1N0cmluZygpe2xldCBlPXRoaXMucXVvdGVkP3RoaXMucmF3cy5xdW90ZTpcIlwiO3JldHVyblt0aGlzLnJhd3MuYmVmb3JlLFwiQFwiLFN0cmluZy5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzLnZhbHVlKSx0aGlzLnJhd3MuYWZ0ZXJdLmpvaW4oXCJcIil9fTt5dS5yZWdpc3RlcldhbGtlcihDcik7Z3UuZXhwb3J0cz1Dcn0pO3ZhciB4dT1nKChKeCx2dSk9PntcInVzZSBzdHJpY3RcIjt2YXIgcW09VSgpLExtPUcoKSxPcj1jbGFzcyBleHRlbmRzIExte2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMudHlwZT1cImNvbG9uXCJ9fTtxbS5yZWdpc3RlcldhbGtlcihPcik7dnUuZXhwb3J0cz1Pcn0pO3ZhciBfdT1nKChYeCxidSk9PntcInVzZSBzdHJpY3RcIjt2YXIgRG09VSgpLEJtPUcoKSxBcj1jbGFzcyBleHRlbmRzIEJte2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMudHlwZT1cImNvbW1hXCJ9fTtEbS5yZWdpc3RlcldhbGtlcihBcik7YnUuZXhwb3J0cz1Bcn0pO3ZhciBrdT1nKChaeCxFdSk9PntcInVzZSBzdHJpY3RcIjt2YXIgTW09VSgpLFVtPUcoKSxOcj1jbGFzcyBleHRlbmRzIFVte2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMudHlwZT1cImNvbW1lbnRcIix0aGlzLmlubGluZT1PYmplY3QoZSkuaW5saW5lfHwhMX10b1N0cmluZygpe3JldHVyblt0aGlzLnJhd3MuYmVmb3JlLHRoaXMuaW5saW5lP1wiLy9cIjpcIi8qXCIsU3RyaW5nKHRoaXMudmFsdWUpLHRoaXMuaW5saW5lP1wiXCI6XCIqL1wiLHRoaXMucmF3cy5hZnRlcl0uam9pbihcIlwiKX19O01tLnJlZ2lzdGVyV2Fsa2VyKE5yKTtFdS5leHBvcnRzPU5yfSk7dmFyIEN1PWcoKGViLFR1KT0+e1widXNlIHN0cmljdFwiO3ZhciBTdT1VKCksUHI9Y2xhc3MgZXh0ZW5kcyBTdXtjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLnR5cGU9XCJmdW5jXCIsdGhpcy51bmJhbGFuY2VkPS0xfX07U3UucmVnaXN0ZXJXYWxrZXIoUHIpO1R1LmV4cG9ydHM9UHJ9KTt2YXIgQXU9ZygodGIsT3UpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIEZtPVUoKSwkbT1HKCksUnI9Y2xhc3MgZXh0ZW5kcyAkbXtjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLnR5cGU9XCJudW1iZXJcIix0aGlzLnVuaXQ9T2JqZWN0KGUpLnVuaXR8fFwiXCJ9dG9TdHJpbmcoKXtyZXR1cm5bdGhpcy5yYXdzLmJlZm9yZSxTdHJpbmcodGhpcy52YWx1ZSksdGhpcy51bml0LHRoaXMucmF3cy5hZnRlcl0uam9pbihcIlwiKX19O0ZtLnJlZ2lzdGVyV2Fsa2VyKFJyKTtPdS5leHBvcnRzPVJyfSk7dmFyIFB1PWcoKHJiLE51KT0+e1widXNlIHN0cmljdFwiO3ZhciBXbT1VKCksWW09RygpLElyPWNsYXNzIGV4dGVuZHMgWW17Y29uc3RydWN0b3IoZSl7c3VwZXIoZSksdGhpcy50eXBlPVwib3BlcmF0b3JcIn19O1dtLnJlZ2lzdGVyV2Fsa2VyKElyKTtOdS5leHBvcnRzPUlyfSk7dmFyIEl1PWcoKHNiLFJ1KT0+e1widXNlIHN0cmljdFwiO3ZhciBWbT1VKCksem09RygpLHFyPWNsYXNzIGV4dGVuZHMgem17Y29uc3RydWN0b3IoZSl7c3VwZXIoZSksdGhpcy50eXBlPVwicGFyZW5cIix0aGlzLnBhcmVuVHlwZT1cIlwifX07Vm0ucmVnaXN0ZXJXYWxrZXIocXIpO1J1LmV4cG9ydHM9cXJ9KTt2YXIgTHU9ZygobmIscXUpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIEdtPVUoKSxqbT1HKCksTHI9Y2xhc3MgZXh0ZW5kcyBqbXtjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLnR5cGU9XCJzdHJpbmdcIn10b1N0cmluZygpe2xldCBlPXRoaXMucXVvdGVkP3RoaXMucmF3cy5xdW90ZTpcIlwiO3JldHVyblt0aGlzLnJhd3MuYmVmb3JlLGUsdGhpcy52YWx1ZStcIlwiLGUsdGhpcy5yYXdzLmFmdGVyXS5qb2luKFwiXCIpfX07R20ucmVnaXN0ZXJXYWxrZXIoTHIpO3F1LmV4cG9ydHM9THJ9KTt2YXIgQnU9ZygoaWIsRHUpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIEhtPVUoKSxLbT1HKCksRHI9Y2xhc3MgZXh0ZW5kcyBLbXtjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLnR5cGU9XCJ3b3JkXCJ9fTtIbS5yZWdpc3RlcldhbGtlcihEcik7RHUuZXhwb3J0cz1Ecn0pO3ZhciBVdT1nKChvYixNdSk9PntcInVzZSBzdHJpY3RcIjt2YXIgUW09VSgpLEptPUcoKSxCcj1jbGFzcyBleHRlbmRzIEpte2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMudHlwZT1cInVuaWNvZGUtcmFuZ2VcIn19O1FtLnJlZ2lzdGVyV2Fsa2VyKEJyKTtNdS5leHBvcnRzPUJyfSk7dmFyICR1PWcoKGFiLEZ1KT0+e1widXNlIHN0cmljdFwiO3ZhciBqcz1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMubmFtZT10aGlzLmNvbnN0cnVjdG9yLm5hbWUsdGhpcy5tZXNzYWdlPWV8fFwiQW4gZXJyb3Igb2N1cnJlZCB3aGlsZSB0b2t6ZW5pemluZy5cIix0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U9PVwiZnVuY3Rpb25cIj9FcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLHRoaXMuY29uc3RydWN0b3IpOnRoaXMuc3RhY2s9bmV3IEVycm9yKGUpLnN0YWNrfX07RnUuZXhwb3J0cz1qc30pO3ZhciBWdT1nKCh1YixZdSk9PntcInVzZSBzdHJpY3RcIjt2YXIgTXI9L1sgXFxuXFx0XFxyXFx7XFwoXFwpJ1wiXFxcXDssL10vZyxYbT0vWyBcXG5cXHRcXHJcXChcXClcXHtcXH1cXCo6O0AhJidcIlxcK1xcfH4+LFxcW1xcXVxcXFxdfFxcLyg/PVxcKikvZywkZT0vWyBcXG5cXHRcXHJcXChcXClcXHtcXH1cXCo6O0AhJidcIlxcLVxcK1xcfH4+LFxcW1xcXVxcXFxdfFxcLy9nLFptPS9eW2EtejAtOV0vaSxleT0vXlthLWYwLTk/XFwtXS9pLFd1PSR1KCk7WXUuZXhwb3J0cz1mdW5jdGlvbihlLHMpe3M9c3x8e307bGV0IHI9W10sbj1lLnZhbHVlT2YoKSxpPW4ubGVuZ3RoLG89LTEsdT0xLGE9MCxjPTAsZj1udWxsLHAsbCx5LHgsaCxkLG0sYix3LHYsTixGO2Z1bmN0aW9uIFEoVCl7bGV0IEM9YFVuY2xvc2VkICR7VH0gYXQgbGluZTogJHt1fSwgY29sdW1uOiAke2Etb30sIHRva2VuOiAke2F9YDt0aHJvdyBuZXcgV3UoQyl9ZnVuY3Rpb24gVygpe2xldCBUPWBTeW50YXggZXJyb3IgYXQgbGluZTogJHt1fSwgY29sdW1uOiAke2Etb30sIHRva2VuOiAke2F9YDt0aHJvdyBuZXcgV3UoVCl9Zm9yKDthPGk7KXtzd2l0Y2gocD1uLmNoYXJDb2RlQXQoYSkscD09PTEwJiYobz1hLHUrPTEpLHApe2Nhc2UgMTA6Y2FzZSAzMjpjYXNlIDk6Y2FzZSAxMzpjYXNlIDEyOmw9YTtkbyBsKz0xLHA9bi5jaGFyQ29kZUF0KGwpLHA9PT0xMCYmKG89bCx1Kz0xKTt3aGlsZShwPT09MzJ8fHA9PT0xMHx8cD09PTl8fHA9PT0xM3x8cD09PTEyKTtyLnB1c2goW1wic3BhY2VcIixuLnNsaWNlKGEsbCksdSxhLW8sdSxsLW8sYV0pLGE9bC0xO2JyZWFrO2Nhc2UgNTg6bD1hKzEsci5wdXNoKFtcImNvbG9uXCIsbi5zbGljZShhLGwpLHUsYS1vLHUsbC1vLGFdKSxhPWwtMTticmVhaztjYXNlIDQ0Omw9YSsxLHIucHVzaChbXCJjb21tYVwiLG4uc2xpY2UoYSxsKSx1LGEtbyx1LGwtbyxhXSksYT1sLTE7YnJlYWs7Y2FzZSAxMjM6ci5wdXNoKFtcIntcIixcIntcIix1LGEtbyx1LGwtbyxhXSk7YnJlYWs7Y2FzZSAxMjU6ci5wdXNoKFtcIn1cIixcIn1cIix1LGEtbyx1LGwtbyxhXSk7YnJlYWs7Y2FzZSA0MDpjKyssZj0hZiYmYz09PTEmJnIubGVuZ3RoPjAmJnJbci5sZW5ndGgtMV1bMF09PT1cIndvcmRcIiYmcltyLmxlbmd0aC0xXVsxXT09PVwidXJsXCIsci5wdXNoKFtcIihcIixcIihcIix1LGEtbyx1LGwtbyxhXSk7YnJlYWs7Y2FzZSA0MTpjLS0sZj1mJiZjPjAsci5wdXNoKFtcIilcIixcIilcIix1LGEtbyx1LGwtbyxhXSk7YnJlYWs7Y2FzZSAzOTpjYXNlIDM0Onk9cD09PTM5P1wiJ1wiOidcIicsbD1hO2RvIGZvcih2PSExLGw9bi5pbmRleE9mKHksbCsxKSxsPT09LTEmJlEoXCJxdW90ZVwiLHkpLE49bDtuLmNoYXJDb2RlQXQoTi0xKT09PTkyOylOLT0xLHY9IXY7d2hpbGUodik7ci5wdXNoKFtcInN0cmluZ1wiLG4uc2xpY2UoYSxsKzEpLHUsYS1vLHUsbC1vLGFdKSxhPWw7YnJlYWs7Y2FzZSA2NDpNci5sYXN0SW5kZXg9YSsxLE1yLnRlc3QobiksTXIubGFzdEluZGV4PT09MD9sPW4ubGVuZ3RoLTE6bD1Nci5sYXN0SW5kZXgtMixyLnB1c2goW1wiYXR3b3JkXCIsbi5zbGljZShhLGwrMSksdSxhLW8sdSxsLW8sYV0pLGE9bDticmVhaztjYXNlIDkyOmw9YSxwPW4uY2hhckNvZGVBdChsKzEpLG0mJnAhPT00NyYmcCE9PTMyJiZwIT09MTAmJnAhPT05JiZwIT09MTMmJnAhPT0xMiYmKGwrPTEpLHIucHVzaChbXCJ3b3JkXCIsbi5zbGljZShhLGwrMSksdSxhLW8sdSxsLW8sYV0pLGE9bDticmVhaztjYXNlIDQzOmNhc2UgNDU6Y2FzZSA0MjpsPWErMSxGPW4uc2xpY2UoYSsxLGwrMSk7bGV0IFQ9bi5zbGljZShhLTEsYSk7aWYocD09PTQ1JiZGLmNoYXJDb2RlQXQoMCk9PT00NSl7bCsrLHIucHVzaChbXCJ3b3JkXCIsbi5zbGljZShhLGwpLHUsYS1vLHUsbC1vLGFdKSxhPWwtMTticmVha31yLnB1c2goW1wib3BlcmF0b3JcIixuLnNsaWNlKGEsbCksdSxhLW8sdSxsLW8sYV0pLGE9bC0xO2JyZWFrO2RlZmF1bHQ6aWYocD09PTQ3JiYobi5jaGFyQ29kZUF0KGErMSk9PT00Mnx8cy5sb29zZSYmIWYmJm4uY2hhckNvZGVBdChhKzEpPT09NDcpKXtpZihuLmNoYXJDb2RlQXQoYSsxKT09PTQyKWw9bi5pbmRleE9mKFwiKi9cIixhKzIpKzEsbD09PTAmJlEoXCJjb21tZW50XCIsXCIqL1wiKTtlbHNle2xldCBPPW4uaW5kZXhPZihgXG5gLGErMik7bD1PIT09LTE/Ty0xOml9ZD1uLnNsaWNlKGEsbCsxKSx4PWQuc3BsaXQoYFxuYCksaD14Lmxlbmd0aC0xLGg+MD8oYj11K2gsdz1sLXhbaF0ubGVuZ3RoKTooYj11LHc9byksci5wdXNoKFtcImNvbW1lbnRcIixkLHUsYS1vLGIsbC13LGFdKSxvPXcsdT1iLGE9bH1lbHNlIGlmKHA9PT0zNSYmIVptLnRlc3Qobi5zbGljZShhKzEsYSsyKSkpbD1hKzEsci5wdXNoKFtcIiNcIixuLnNsaWNlKGEsbCksdSxhLW8sdSxsLW8sYV0pLGE9bC0xO2Vsc2UgaWYoKHA9PT0xMTd8fHA9PT04NSkmJm4uY2hhckNvZGVBdChhKzEpPT09NDMpe2w9YSsyO2RvIGwrPTEscD1uLmNoYXJDb2RlQXQobCk7d2hpbGUobDxpJiZleS50ZXN0KG4uc2xpY2UobCxsKzEpKSk7ci5wdXNoKFtcInVuaWNvZGVyYW5nZVwiLG4uc2xpY2UoYSxsKSx1LGEtbyx1LGwtbyxhXSksYT1sLTF9ZWxzZSBpZihwPT09NDcpbD1hKzEsci5wdXNoKFtcIm9wZXJhdG9yXCIsbi5zbGljZShhLGwpLHUsYS1vLHUsbC1vLGFdKSxhPWwtMTtlbHNle2xldCBDPVhtO2lmKHA+PTQ4JiZwPD01NyYmKEM9JGUpLEMubGFzdEluZGV4PWErMSxDLnRlc3QobiksQy5sYXN0SW5kZXg9PT0wP2w9bi5sZW5ndGgtMTpsPUMubGFzdEluZGV4LTIsQz09PSRlfHxwPT09NDYpe2xldCBPPW4uY2hhckNvZGVBdChsKSx2ZT1uLmNoYXJDb2RlQXQobCsxKSxacz1uLmNoYXJDb2RlQXQobCsyKTsoTz09PTEwMXx8Tz09PTY5KSYmKHZlPT09NDV8fHZlPT09NDMpJiZacz49NDgmJlpzPD01NyYmKCRlLmxhc3RJbmRleD1sKzIsJGUudGVzdChuKSwkZS5sYXN0SW5kZXg9PT0wP2w9bi5sZW5ndGgtMTpsPSRlLmxhc3RJbmRleC0yKX1yLnB1c2goW1wid29yZFwiLG4uc2xpY2UoYSxsKzEpLHUsYS1vLHUsbC1vLGFdKSxhPWx9YnJlYWt9YSsrfXJldHVybiByfX0pO3ZhciBHdT1nKChsYix6dSk9PntcInVzZSBzdHJpY3RcIjt2YXIgSHM9Y2xhc3MgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlKXtzdXBlcihlKSx0aGlzLm5hbWU9dGhpcy5jb25zdHJ1Y3Rvci5uYW1lLHRoaXMubWVzc2FnZT1lfHxcIkFuIGVycm9yIG9jdXJyZWQgd2hpbGUgcGFyc2luZy5cIix0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U9PVwiZnVuY3Rpb25cIj9FcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLHRoaXMuY29uc3RydWN0b3IpOnRoaXMuc3RhY2s9bmV3IEVycm9yKGUpLnN0YWNrfX07enUuZXhwb3J0cz1Ic30pO3ZhciBRdT1nKChmYixLdSk9PntcInVzZSBzdHJpY3RcIjt2YXIgdHk9aHUoKSxyeT1tdSgpLHN5PXd1KCksbnk9eHUoKSxpeT1fdSgpLG95PWt1KCksYXk9Q3UoKSx1eT1BdSgpLGx5PVB1KCksanU9SXUoKSxjeT1MdSgpLEh1PUJ1KCksZnk9VXUoKSxweT1WdSgpLGh5PURzKCksZHk9QnMoKSxteT1NcygpLHl5PUd1KCk7ZnVuY3Rpb24gZ3kodCl7cmV0dXJuIHQuc29ydCgoZSxzKT0+ZS1zKX1LdS5leHBvcnRzPWNsYXNze2NvbnN0cnVjdG9yKGUscyl7bGV0IHI9e2xvb3NlOiExfTt0aGlzLmNhY2hlPVtdLHRoaXMuaW5wdXQ9ZSx0aGlzLm9wdGlvbnM9T2JqZWN0LmFzc2lnbih7fSxyLHMpLHRoaXMucG9zaXRpb249MCx0aGlzLnVuYmFsYW5jZWQ9MCx0aGlzLnJvb3Q9bmV3IHR5O2xldCBuPW5ldyByeTt0aGlzLnJvb3QuYXBwZW5kKG4pLHRoaXMuY3VycmVudD1uLHRoaXMudG9rZW5zPXB5KGUsdGhpcy5vcHRpb25zKX1wYXJzZSgpe3JldHVybiB0aGlzLmxvb3AoKX1jb2xvbigpe2xldCBlPXRoaXMuY3VyclRva2VuO3RoaXMubmV3Tm9kZShuZXcgbnkoe3ZhbHVlOmVbMV0sc291cmNlOntzdGFydDp7bGluZTplWzJdLGNvbHVtbjplWzNdfSxlbmQ6e2xpbmU6ZVs0XSxjb2x1bW46ZVs1XX19LHNvdXJjZUluZGV4OmVbNl19KSksdGhpcy5wb3NpdGlvbisrfWNvbW1hKCl7bGV0IGU9dGhpcy5jdXJyVG9rZW47dGhpcy5uZXdOb2RlKG5ldyBpeSh7dmFsdWU6ZVsxXSxzb3VyY2U6e3N0YXJ0OntsaW5lOmVbMl0sY29sdW1uOmVbM119LGVuZDp7bGluZTplWzRdLGNvbHVtbjplWzVdfX0sc291cmNlSW5kZXg6ZVs2XX0pKSx0aGlzLnBvc2l0aW9uKyt9Y29tbWVudCgpe2xldCBlPSExLHM9dGhpcy5jdXJyVG9rZW5bMV0ucmVwbGFjZSgvXFwvXFwqfFxcKlxcLy9nLFwiXCIpLHI7dGhpcy5vcHRpb25zLmxvb3NlJiZzLnN0YXJ0c1dpdGgoXCIvL1wiKSYmKHM9cy5zdWJzdHJpbmcoMiksZT0hMCkscj1uZXcgb3koe3ZhbHVlOnMsaW5saW5lOmUsc291cmNlOntzdGFydDp7bGluZTp0aGlzLmN1cnJUb2tlblsyXSxjb2x1bW46dGhpcy5jdXJyVG9rZW5bM119LGVuZDp7bGluZTp0aGlzLmN1cnJUb2tlbls0XSxjb2x1bW46dGhpcy5jdXJyVG9rZW5bNV19fSxzb3VyY2VJbmRleDp0aGlzLmN1cnJUb2tlbls2XX0pLHRoaXMubmV3Tm9kZShyKSx0aGlzLnBvc2l0aW9uKyt9ZXJyb3IoZSxzKXt0aHJvdyBuZXcgeXkoZStgIGF0IGxpbmU6ICR7c1syXX0sIGNvbHVtbiAke3NbM119YCl9bG9vcCgpe2Zvcig7dGhpcy5wb3NpdGlvbjx0aGlzLnRva2Vucy5sZW5ndGg7KXRoaXMucGFyc2VUb2tlbnMoKTtyZXR1cm4hdGhpcy5jdXJyZW50Lmxhc3QmJnRoaXMuc3BhY2VzP3RoaXMuY3VycmVudC5yYXdzLmJlZm9yZSs9dGhpcy5zcGFjZXM6dGhpcy5zcGFjZXMmJih0aGlzLmN1cnJlbnQubGFzdC5yYXdzLmFmdGVyKz10aGlzLnNwYWNlcyksdGhpcy5zcGFjZXM9XCJcIix0aGlzLnJvb3R9b3BlcmF0b3IoKXtsZXQgZT10aGlzLmN1cnJUb2tlblsxXSxzO2lmKGU9PT1cIitcInx8ZT09PVwiLVwiKXtpZih0aGlzLm9wdGlvbnMubG9vc2V8fHRoaXMucG9zaXRpb24+MCYmKHRoaXMuY3VycmVudC50eXBlPT09XCJmdW5jXCImJnRoaXMuY3VycmVudC52YWx1ZT09PVwiY2FsY1wiP3RoaXMucHJldlRva2VuWzBdIT09XCJzcGFjZVwiJiZ0aGlzLnByZXZUb2tlblswXSE9PVwiKFwiP3RoaXMuZXJyb3IoXCJTeW50YXggRXJyb3JcIix0aGlzLmN1cnJUb2tlbik6dGhpcy5uZXh0VG9rZW5bMF0hPT1cInNwYWNlXCImJnRoaXMubmV4dFRva2VuWzBdIT09XCJ3b3JkXCI/dGhpcy5lcnJvcihcIlN5bnRheCBFcnJvclwiLHRoaXMuY3VyclRva2VuKTp0aGlzLm5leHRUb2tlblswXT09PVwid29yZFwiJiZ0aGlzLmN1cnJlbnQubGFzdC50eXBlIT09XCJvcGVyYXRvclwiJiZ0aGlzLmN1cnJlbnQubGFzdC52YWx1ZSE9PVwiKFwiJiZ0aGlzLmVycm9yKFwiU3ludGF4IEVycm9yXCIsdGhpcy5jdXJyVG9rZW4pOih0aGlzLm5leHRUb2tlblswXT09PVwic3BhY2VcInx8dGhpcy5uZXh0VG9rZW5bMF09PT1cIm9wZXJhdG9yXCJ8fHRoaXMucHJldlRva2VuWzBdPT09XCJvcGVyYXRvclwiKSYmdGhpcy5lcnJvcihcIlN5bnRheCBFcnJvclwiLHRoaXMuY3VyclRva2VuKSksdGhpcy5vcHRpb25zLmxvb3NlKXtpZigoIXRoaXMuY3VycmVudC5ub2Rlcy5sZW5ndGh8fHRoaXMuY3VycmVudC5sYXN0JiZ0aGlzLmN1cnJlbnQubGFzdC50eXBlPT09XCJvcGVyYXRvclwiKSYmdGhpcy5uZXh0VG9rZW5bMF09PT1cIndvcmRcIilyZXR1cm4gdGhpcy53b3JkKCl9ZWxzZSBpZih0aGlzLm5leHRUb2tlblswXT09PVwid29yZFwiKXJldHVybiB0aGlzLndvcmQoKX1yZXR1cm4gcz1uZXcgbHkoe3ZhbHVlOnRoaXMuY3VyclRva2VuWzFdLHNvdXJjZTp7c3RhcnQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfSxlbmQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdfX0sc291cmNlSW5kZXg6dGhpcy5jdXJyVG9rZW5bNF19KSx0aGlzLnBvc2l0aW9uKyssdGhpcy5uZXdOb2RlKHMpfXBhcnNlVG9rZW5zKCl7c3dpdGNoKHRoaXMuY3VyclRva2VuWzBdKXtjYXNlXCJzcGFjZVwiOnRoaXMuc3BhY2UoKTticmVhaztjYXNlXCJjb2xvblwiOnRoaXMuY29sb24oKTticmVhaztjYXNlXCJjb21tYVwiOnRoaXMuY29tbWEoKTticmVhaztjYXNlXCJjb21tZW50XCI6dGhpcy5jb21tZW50KCk7YnJlYWs7Y2FzZVwiKFwiOnRoaXMucGFyZW5PcGVuKCk7YnJlYWs7Y2FzZVwiKVwiOnRoaXMucGFyZW5DbG9zZSgpO2JyZWFrO2Nhc2VcImF0d29yZFwiOmNhc2VcIndvcmRcIjp0aGlzLndvcmQoKTticmVhaztjYXNlXCJvcGVyYXRvclwiOnRoaXMub3BlcmF0b3IoKTticmVhaztjYXNlXCJzdHJpbmdcIjp0aGlzLnN0cmluZygpO2JyZWFrO2Nhc2VcInVuaWNvZGVyYW5nZVwiOnRoaXMudW5pY29kZVJhbmdlKCk7YnJlYWs7ZGVmYXVsdDp0aGlzLndvcmQoKTticmVha319cGFyZW5PcGVuKCl7bGV0IGU9MSxzPXRoaXMucG9zaXRpb24rMSxyPXRoaXMuY3VyclRva2VuLG47Zm9yKDtzPHRoaXMudG9rZW5zLmxlbmd0aCYmZTspe2xldCBpPXRoaXMudG9rZW5zW3NdO2lbMF09PT1cIihcIiYmZSsrLGlbMF09PT1cIilcIiYmZS0tLHMrK31pZihlJiZ0aGlzLmVycm9yKFwiRXhwZWN0ZWQgY2xvc2luZyBwYXJlbnRoZXNpc1wiLHIpLG49dGhpcy5jdXJyZW50Lmxhc3QsbiYmbi50eXBlPT09XCJmdW5jXCImJm4udW5iYWxhbmNlZDwwJiYobi51bmJhbGFuY2VkPTAsdGhpcy5jdXJyZW50PW4pLHRoaXMuY3VycmVudC51bmJhbGFuY2VkKyssdGhpcy5uZXdOb2RlKG5ldyBqdSh7dmFsdWU6clsxXSxzb3VyY2U6e3N0YXJ0OntsaW5lOnJbMl0sY29sdW1uOnJbM119LGVuZDp7bGluZTpyWzRdLGNvbHVtbjpyWzVdfX0sc291cmNlSW5kZXg6cls2XX0pKSx0aGlzLnBvc2l0aW9uKyssdGhpcy5jdXJyZW50LnR5cGU9PT1cImZ1bmNcIiYmdGhpcy5jdXJyZW50LnVuYmFsYW5jZWQmJnRoaXMuY3VycmVudC52YWx1ZT09PVwidXJsXCImJnRoaXMuY3VyclRva2VuWzBdIT09XCJzdHJpbmdcIiYmdGhpcy5jdXJyVG9rZW5bMF0hPT1cIilcIiYmIXRoaXMub3B0aW9ucy5sb29zZSl7bGV0IGk9dGhpcy5uZXh0VG9rZW4sbz10aGlzLmN1cnJUb2tlblsxXSx1PXtsaW5lOnRoaXMuY3VyclRva2VuWzJdLGNvbHVtbjp0aGlzLmN1cnJUb2tlblszXX07Zm9yKDtpJiZpWzBdIT09XCIpXCImJnRoaXMuY3VycmVudC51bmJhbGFuY2VkOyl0aGlzLnBvc2l0aW9uKyssbys9dGhpcy5jdXJyVG9rZW5bMV0saT10aGlzLm5leHRUb2tlbjt0aGlzLnBvc2l0aW9uIT09dGhpcy50b2tlbnMubGVuZ3RoLTEmJih0aGlzLnBvc2l0aW9uKyssdGhpcy5uZXdOb2RlKG5ldyBIdSh7dmFsdWU6byxzb3VyY2U6e3N0YXJ0OnUsZW5kOntsaW5lOnRoaXMuY3VyclRva2VuWzRdLGNvbHVtbjp0aGlzLmN1cnJUb2tlbls1XX19LHNvdXJjZUluZGV4OnRoaXMuY3VyclRva2VuWzZdfSkpKX19cGFyZW5DbG9zZSgpe2xldCBlPXRoaXMuY3VyclRva2VuO3RoaXMubmV3Tm9kZShuZXcganUoe3ZhbHVlOmVbMV0sc291cmNlOntzdGFydDp7bGluZTplWzJdLGNvbHVtbjplWzNdfSxlbmQ6e2xpbmU6ZVs0XSxjb2x1bW46ZVs1XX19LHNvdXJjZUluZGV4OmVbNl19KSksdGhpcy5wb3NpdGlvbisrLCEodGhpcy5wb3NpdGlvbj49dGhpcy50b2tlbnMubGVuZ3RoLTEmJiF0aGlzLmN1cnJlbnQudW5iYWxhbmNlZCkmJih0aGlzLmN1cnJlbnQudW5iYWxhbmNlZC0tLHRoaXMuY3VycmVudC51bmJhbGFuY2VkPDAmJnRoaXMuZXJyb3IoXCJFeHBlY3RlZCBvcGVuaW5nIHBhcmVudGhlc2lzXCIsZSksIXRoaXMuY3VycmVudC51bmJhbGFuY2VkJiZ0aGlzLmNhY2hlLmxlbmd0aCYmKHRoaXMuY3VycmVudD10aGlzLmNhY2hlLnBvcCgpKSl9c3BhY2UoKXtsZXQgZT10aGlzLmN1cnJUb2tlbjt0aGlzLnBvc2l0aW9uPT09dGhpcy50b2tlbnMubGVuZ3RoLTF8fHRoaXMubmV4dFRva2VuWzBdPT09XCIsXCJ8fHRoaXMubmV4dFRva2VuWzBdPT09XCIpXCI/KHRoaXMuY3VycmVudC5sYXN0LnJhd3MuYWZ0ZXIrPWVbMV0sdGhpcy5wb3NpdGlvbisrKToodGhpcy5zcGFjZXM9ZVsxXSx0aGlzLnBvc2l0aW9uKyspfXVuaWNvZGVSYW5nZSgpe2xldCBlPXRoaXMuY3VyclRva2VuO3RoaXMubmV3Tm9kZShuZXcgZnkoe3ZhbHVlOmVbMV0sc291cmNlOntzdGFydDp7bGluZTplWzJdLGNvbHVtbjplWzNdfSxlbmQ6e2xpbmU6ZVs0XSxjb2x1bW46ZVs1XX19LHNvdXJjZUluZGV4OmVbNl19KSksdGhpcy5wb3NpdGlvbisrfXNwbGl0V29yZCgpe2xldCBlPXRoaXMubmV4dFRva2VuLHM9dGhpcy5jdXJyVG9rZW5bMV0scj0vXltcXCtcXC1dPygoXFxkKyhcXC5cXGQqKT8pfChcXC5cXGQrKSkoW2VFXVtcXCtcXC1dP1xcZCspPy8sbj0vXig/IVxcIyhbYS16MC05XSspKVtcXCNcXHtcXH1dL2dpLGksbztpZighbi50ZXN0KHMpKWZvcig7ZSYmZVswXT09PVwid29yZFwiOyl7dGhpcy5wb3NpdGlvbisrO2xldCB1PXRoaXMuY3VyclRva2VuWzFdO3MrPXUsZT10aGlzLm5leHRUb2tlbn1pPWR5KHMsXCJAXCIpLG89Z3kobXkoaHkoW1swXSxpXSkpKSxvLmZvckVhY2goKHUsYSk9PntsZXQgYz1vW2ErMV18fHMubGVuZ3RoLGY9cy5zbGljZSh1LGMpLHA7aWYofmkuaW5kZXhPZih1KSlwPW5ldyBzeSh7dmFsdWU6Zi5zbGljZSgxKSxzb3VyY2U6e3N0YXJ0OntsaW5lOnRoaXMuY3VyclRva2VuWzJdLGNvbHVtbjp0aGlzLmN1cnJUb2tlblszXSt1fSxlbmQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bNF0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdKyhjLTEpfX0sc291cmNlSW5kZXg6dGhpcy5jdXJyVG9rZW5bNl0rb1thXX0pO2Vsc2UgaWYoci50ZXN0KHRoaXMuY3VyclRva2VuWzFdKSl7bGV0IGw9Zi5yZXBsYWNlKHIsXCJcIik7cD1uZXcgdXkoe3ZhbHVlOmYucmVwbGFjZShsLFwiXCIpLHNvdXJjZTp7c3RhcnQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bMl0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdK3V9LGVuZDp7bGluZTp0aGlzLmN1cnJUb2tlbls0XSxjb2x1bW46dGhpcy5jdXJyVG9rZW5bM10rKGMtMSl9fSxzb3VyY2VJbmRleDp0aGlzLmN1cnJUb2tlbls2XStvW2FdLHVuaXQ6bH0pfWVsc2UgcD1uZXcoZSYmZVswXT09PVwiKFwiP2F5Okh1KSh7dmFsdWU6Zixzb3VyY2U6e3N0YXJ0OntsaW5lOnRoaXMuY3VyclRva2VuWzJdLGNvbHVtbjp0aGlzLmN1cnJUb2tlblszXSt1fSxlbmQ6e2xpbmU6dGhpcy5jdXJyVG9rZW5bNF0sY29sdW1uOnRoaXMuY3VyclRva2VuWzNdKyhjLTEpfX0sc291cmNlSW5kZXg6dGhpcy5jdXJyVG9rZW5bNl0rb1thXX0pLHAudHlwZT09PVwid29yZFwiPyhwLmlzSGV4PS9eIyguKykvLnRlc3QoZikscC5pc0NvbG9yPS9eIyhbMC05YS1mXXszfXxbMC05YS1mXXs0fXxbMC05YS1mXXs2fXxbMC05YS1mXXs4fSkkL2kudGVzdChmKSk6dGhpcy5jYWNoZS5wdXNoKHRoaXMuY3VycmVudCk7dGhpcy5uZXdOb2RlKHApfSksdGhpcy5wb3NpdGlvbisrfXN0cmluZygpe2xldCBlPXRoaXMuY3VyclRva2VuLHM9dGhpcy5jdXJyVG9rZW5bMV0scj0vXihcXFwifFxcJykvLG49ci50ZXN0KHMpLGk9XCJcIixvO24mJihpPXMubWF0Y2gocilbMF0scz1zLnNsaWNlKDEscy5sZW5ndGgtMSkpLG89bmV3IGN5KHt2YWx1ZTpzLHNvdXJjZTp7c3RhcnQ6e2xpbmU6ZVsyXSxjb2x1bW46ZVszXX0sZW5kOntsaW5lOmVbNF0sY29sdW1uOmVbNV19fSxzb3VyY2VJbmRleDplWzZdLHF1b3RlZDpufSksby5yYXdzLnF1b3RlPWksdGhpcy5uZXdOb2RlKG8pLHRoaXMucG9zaXRpb24rK313b3JkKCl7cmV0dXJuIHRoaXMuc3BsaXRXb3JkKCl9bmV3Tm9kZShlKXtyZXR1cm4gdGhpcy5zcGFjZXMmJihlLnJhd3MuYmVmb3JlKz10aGlzLnNwYWNlcyx0aGlzLnNwYWNlcz1cIlwiKSx0aGlzLmN1cnJlbnQuYXBwZW5kKGUpfWdldCBjdXJyVG9rZW4oKXtyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl19Z2V0IG5leHRUb2tlbigpe3JldHVybiB0aGlzLnRva2Vuc1t0aGlzLnBvc2l0aW9uKzFdfWdldCBwcmV2VG9rZW4oKXtyZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbi0xXX19fSk7dmFyIFhzPXt9O2VuKFhzLHtsYW5ndWFnZXM6KCk9PmdpLG9wdGlvbnM6KCk9PnZpLHBhcnNlcnM6KCk9PkpzLHByaW50ZXJzOigpPT5JeX0pO3ZhciB2bD0odCxlLHMscik9PntpZighKHQmJmU9PW51bGwpKXJldHVybiBlLnJlcGxhY2VBbGw/ZS5yZXBsYWNlQWxsKHMscik6cy5nbG9iYWw/ZS5yZXBsYWNlKHMscik6ZS5zcGxpdChzKS5qb2luKHIpfSxFPXZsO3ZhciBiZT1cInN0cmluZ1wiLFdlPVwiYXJyYXlcIixZZT1cImN1cnNvclwiLHRlPVwiaW5kZW50XCIsX2U9XCJhbGlnblwiLFZlPVwidHJpbVwiLHJlPVwiZ3JvdXBcIixzZT1cImZpbGxcIixuZT1cImlmLWJyZWFrXCIsemU9XCJpbmRlbnQtaWYtYnJlYWtcIixFZT1cImxpbmUtc3VmZml4XCIsR2U9XCJsaW5lLXN1ZmZpeC1ib3VuZGFyeVwiLGo9XCJsaW5lXCIsamU9XCJsYWJlbFwiLGtlPVwiYnJlYWstcGFyZW50XCIsVHQ9bmV3IFNldChbWWUsdGUsX2UsVmUscmUsc2UsbmUsemUsRWUsR2UsaixqZSxrZV0pO3ZhciB4bD0odCxlLHMpPT57aWYoISh0JiZlPT1udWxsKSlyZXR1cm4gQXJyYXkuaXNBcnJheShlKXx8dHlwZW9mIGU9PVwic3RyaW5nXCI/ZVtzPDA/ZS5sZW5ndGgrczpzXTplLmF0KHMpfSwkPXhsO2Z1bmN0aW9uIGJsKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXJldHVybiBiZTtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBXZTtpZighdClyZXR1cm47bGV0e3R5cGU6ZX09dDtpZihUdC5oYXMoZSkpcmV0dXJuIGV9dmFyIEg9Ymw7dmFyIF9sPXQ9Pm5ldyBJbnRsLkxpc3RGb3JtYXQoXCJlbi1VU1wiLHt0eXBlOlwiZGlzanVuY3Rpb25cIn0pLmZvcm1hdCh0KTtmdW5jdGlvbiBFbCh0KXtsZXQgZT10PT09bnVsbD9cIm51bGxcIjp0eXBlb2YgdDtpZihlIT09XCJzdHJpbmdcIiYmZSE9PVwib2JqZWN0XCIpcmV0dXJuYFVuZXhwZWN0ZWQgZG9jICcke2V9JywgXG5FeHBlY3RlZCBpdCB0byBiZSAnc3RyaW5nJyBvciAnb2JqZWN0Jy5gO2lmKEgodCkpdGhyb3cgbmV3IEVycm9yKFwiZG9jIGlzIHZhbGlkLlwiKTtsZXQgcz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCk7aWYocyE9PVwiW29iamVjdCBPYmplY3RdXCIpcmV0dXJuYFVuZXhwZWN0ZWQgZG9jICcke3N9Jy5gO2xldCByPV9sKFsuLi5UdF0ubWFwKG49PmAnJHtufSdgKSk7cmV0dXJuYFVuZXhwZWN0ZWQgZG9jLnR5cGUgJyR7dC50eXBlfScuXG5FeHBlY3RlZCBpdCB0byBiZSAke3J9LmB9dmFyIFdyPWNsYXNzIGV4dGVuZHMgRXJyb3J7bmFtZT1cIkludmFsaWREb2NFcnJvclwiO2NvbnN0cnVjdG9yKGUpe3N1cGVyKEVsKGUpKSx0aGlzLmRvYz1lfX0sWXI9V3I7ZnVuY3Rpb24gU2wodCxlKXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIilyZXR1cm4gZSh0KTtsZXQgcz1uZXcgTWFwO3JldHVybiByKHQpO2Z1bmN0aW9uIHIoaSl7aWYocy5oYXMoaSkpcmV0dXJuIHMuZ2V0KGkpO2xldCBvPW4oaSk7cmV0dXJuIHMuc2V0KGksbyksb31mdW5jdGlvbiBuKGkpe3N3aXRjaChIKGkpKXtjYXNlIFdlOnJldHVybiBlKGkubWFwKHIpKTtjYXNlIHNlOnJldHVybiBlKHsuLi5pLHBhcnRzOmkucGFydHMubWFwKHIpfSk7Y2FzZSBuZTpyZXR1cm4gZSh7Li4uaSxicmVha0NvbnRlbnRzOnIoaS5icmVha0NvbnRlbnRzKSxmbGF0Q29udGVudHM6cihpLmZsYXRDb250ZW50cyl9KTtjYXNlIHJlOntsZXR7ZXhwYW5kZWRTdGF0ZXM6byxjb250ZW50czp1fT1pO3JldHVybiBvPyhvPW8ubWFwKHIpLHU9b1swXSk6dT1yKHUpLGUoey4uLmksY29udGVudHM6dSxleHBhbmRlZFN0YXRlczpvfSl9Y2FzZSBfZTpjYXNlIHRlOmNhc2UgemU6Y2FzZSBqZTpjYXNlIEVlOnJldHVybiBlKHsuLi5pLGNvbnRlbnRzOnIoaS5jb250ZW50cyl9KTtjYXNlIGJlOmNhc2UgWWU6Y2FzZSBWZTpjYXNlIEdlOmNhc2UgajpjYXNlIGtlOnJldHVybiBlKGkpO2RlZmF1bHQ6dGhyb3cgbmV3IFlyKGkpfX19ZnVuY3Rpb24gVGwodCl7cmV0dXJuIHQudHlwZT09PWomJiF0LmhhcmQ/dC5zb2Z0P1wiXCI6XCIgXCI6dC50eXBlPT09bmU/dC5mbGF0Q29udGVudHM6dH1mdW5jdGlvbiB0bih0KXtyZXR1cm4gU2wodCxUbCl9dmFyIFZyPSgpPT57fSxpZT1WcixIZT1Wcixybj1WcjtmdW5jdGlvbiBxKHQpe3JldHVybiBpZSh0KSx7dHlwZTp0ZSxjb250ZW50czp0fX1mdW5jdGlvbiBzbih0LGUpe3JldHVybiBpZShlKSx7dHlwZTpfZSxjb250ZW50czplLG46dH19ZnVuY3Rpb24gTCh0LGU9e30pe3JldHVybiBpZSh0KSxIZShlLmV4cGFuZGVkU3RhdGVzLCEwKSx7dHlwZTpyZSxpZDplLmlkLGNvbnRlbnRzOnQsYnJlYWs6ISFlLnNob3VsZEJyZWFrLGV4cGFuZGVkU3RhdGVzOmUuZXhwYW5kZWRTdGF0ZXN9fWZ1bmN0aW9uIG5uKHQpe3JldHVybiBzbih7dHlwZTpcInJvb3RcIn0sdCl9ZnVuY3Rpb24gb2UodCl7cmV0dXJuIHNuKC0xLHQpfWZ1bmN0aW9uIFNlKHQpe3JldHVybiBybih0KSx7dHlwZTpzZSxwYXJ0czp0fX1mdW5jdGlvbiBDdCh0LGU9XCJcIixzPXt9KXtyZXR1cm4gaWUodCksZSE9PVwiXCImJmllKGUpLHt0eXBlOm5lLGJyZWFrQ29udGVudHM6dCxmbGF0Q29udGVudHM6ZSxncm91cElkOnMuZ3JvdXBJZH19ZnVuY3Rpb24gb24odCl7cmV0dXJuIGllKHQpLHt0eXBlOkVlLGNvbnRlbnRzOnR9fXZhciBLZT17dHlwZTprZX07dmFyIENsPXt0eXBlOmosaGFyZDohMH07dmFyIEE9e3R5cGU6an0sRD17dHlwZTpqLHNvZnQ6ITB9LFM9W0NsLEtlXTtmdW5jdGlvbiBZKHQsZSl7aWUodCksSGUoZSk7bGV0IHM9W107Zm9yKGxldCByPTA7cjxlLmxlbmd0aDtyKyspciE9PTAmJnMucHVzaCh0KSxzLnB1c2goZVtyXSk7cmV0dXJuIHN9ZnVuY3Rpb24gT2wodCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCkmJnQubGVuZ3RoPjB9dmFyIGFlPU9sO3ZhciBhbj1uZXcgUHJveHkoKCk9Pnt9LHtnZXQ6KCk9PmFufSksdW49YW47dmFyIE90PVwiJ1wiLGxuPSdcIic7ZnVuY3Rpb24gQWwodCxlKXtsZXQgcz1lPT09ITB8fGU9PT1PdD9PdDpsbixyPXM9PT1PdD9sbjpPdCxuPTAsaT0wO2ZvcihsZXQgbyBvZiB0KW89PT1zP24rKzpvPT09ciYmaSsrO3JldHVybiBuPmk/cjpzfXZhciBjbj1BbDtmdW5jdGlvbiBObCh0LGUscyl7bGV0IHI9ZT09PSdcIic/XCInXCI6J1wiJyxpPUUoITEsdCwvXFxcXCguKXwoW1wiJ10pL2dzdSwobyx1LGEpPT51PT09cj91OmE9PT1lP1wiXFxcXFwiK2E6YXx8KHMmJi9eW15cXG5cXHJcIicwLTdcXFxcYmZucnQtdnhcXHUyMDI4XFx1MjAyOV0kL3UudGVzdCh1KT91OlwiXFxcXFwiK3UpKTtyZXR1cm4gZStpK2V9dmFyIGZuPU5sO2Z1bmN0aW9uIFBsKHQsZSl7dW4ub2soL14oPzxxdW90ZT5bXCInXSkuKlxcazxxdW90ZT4kL3N1LnRlc3QodCkpO2xldCBzPXQuc2xpY2UoMSwtMSkscj1lLnBhcnNlcj09PVwianNvblwifHxlLnBhcnNlcj09PVwianNvbmNcInx8ZS5wYXJzZXI9PT1cImpzb241XCImJmUucXVvdGVQcm9wcz09PVwicHJlc2VydmVcIiYmIWUuc2luZ2xlUXVvdGU/J1wiJzplLl9faXNJbkh0bWxBdHRyaWJ1dGU/XCInXCI6Y24ocyxlLnNpbmdsZVF1b3RlKTtyZXR1cm4gdC5jaGFyQXQoMCk9PT1yP3Q6Zm4ocyxyLCExKX12YXIgQXQ9UGw7dmFyIHpyPWNsYXNzIGV4dGVuZHMgRXJyb3J7bmFtZT1cIlVuZXhwZWN0ZWROb2RlRXJyb3JcIjtjb25zdHJ1Y3RvcihlLHMscj1cInR5cGVcIil7c3VwZXIoYFVuZXhwZWN0ZWQgJHtzfSBub2RlICR7cn06ICR7SlNPTi5zdHJpbmdpZnkoZVtyXSl9LmApLHRoaXMubm9kZT1lfX0scG49enI7ZnVuY3Rpb24gUmwodCl7cmV0dXJuKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cImZyb250LW1hdHRlclwifXZhciBUZT1SbDt2YXIgSWw9bmV3IFNldChbXCJyYXdcIixcInJhd3NcIixcInNvdXJjZUluZGV4XCIsXCJzb3VyY2VcIixcImJlZm9yZVwiLFwiYWZ0ZXJcIixcInRyYWlsaW5nQ29tbWFcIixcInNwYWNlc1wiXSk7ZnVuY3Rpb24gaG4odCxlLHMpe2lmKFRlKHQpJiZ0Lmxhbmd1YWdlPT09XCJ5YW1sXCImJmRlbGV0ZSBlLnZhbHVlLHQudHlwZT09PVwiY3NzLWNvbW1lbnRcIiYmcy50eXBlPT09XCJjc3Mtcm9vdFwiJiZzLm5vZGVzLmxlbmd0aD4wJiYoKHMubm9kZXNbMF09PT10fHxUZShzLm5vZGVzWzBdKSYmcy5ub2Rlc1sxXT09PXQpJiYoZGVsZXRlIGUudGV4dCwvXlxcKlxccypAKD86Zm9ybWF0fHByZXR0aWVyKVxccyokL3UudGVzdCh0LnRleHQpKXx8cy50eXBlPT09XCJjc3Mtcm9vdFwiJiYkKCExLHMubm9kZXMsLTEpPT09dCkpcmV0dXJuIG51bGw7aWYodC50eXBlPT09XCJ2YWx1ZS1yb290XCImJmRlbGV0ZSBlLnRleHQsKHQudHlwZT09PVwibWVkaWEtcXVlcnlcInx8dC50eXBlPT09XCJtZWRpYS1xdWVyeS1saXN0XCJ8fHQudHlwZT09PVwibWVkaWEtZmVhdHVyZS1leHByZXNzaW9uXCIpJiZkZWxldGUgZS52YWx1ZSx0LnR5cGU9PT1cImNzcy1ydWxlXCImJmRlbGV0ZSBlLnBhcmFtcywodC50eXBlPT09XCJtZWRpYS1mZWF0dXJlXCJ8fHQudHlwZT09PVwibWVkaWEta2V5d29yZFwifHx0LnR5cGU9PT1cIm1lZGlhLXR5cGVcInx8dC50eXBlPT09XCJtZWRpYS11bmtub3duXCJ8fHQudHlwZT09PVwibWVkaWEtdXJsXCJ8fHQudHlwZT09PVwibWVkaWEtdmFsdWVcInx8dC50eXBlPT09XCJzZWxlY3Rvci1hdHRyaWJ1dGVcInx8dC50eXBlPT09XCJzZWxlY3Rvci1zdHJpbmdcInx8dC50eXBlPT09XCJzZWxlY3Rvci1jbGFzc1wifHx0LnR5cGU9PT1cInNlbGVjdG9yLWNvbWJpbmF0b3JcInx8dC50eXBlPT09XCJ2YWx1ZS1zdHJpbmdcIikmJnQudmFsdWUmJihlLnZhbHVlPXFsKHQudmFsdWUpKSx0LnR5cGU9PT1cInNlbGVjdG9yLWNvbWJpbmF0b3JcIiYmKGUudmFsdWU9RSghMSxlLnZhbHVlLC9cXHMrL2d1LFwiIFwiKSksdC50eXBlPT09XCJtZWRpYS1mZWF0dXJlXCImJihlLnZhbHVlPUUoITEsZS52YWx1ZSxcIiBcIixcIlwiKSksKHQudHlwZT09PVwidmFsdWUtd29yZFwiJiYodC5pc0NvbG9yJiZ0LmlzSGV4fHxbXCJpbml0aWFsXCIsXCJpbmhlcml0XCIsXCJ1bnNldFwiLFwicmV2ZXJ0XCJdLmluY2x1ZGVzKHQudmFsdWUudG9Mb3dlckNhc2UoKSkpfHx0LnR5cGU9PT1cIm1lZGlhLWZlYXR1cmVcInx8dC50eXBlPT09XCJzZWxlY3Rvci1yb290LWludmFsaWRcInx8dC50eXBlPT09XCJzZWxlY3Rvci1wc2V1ZG9cIikmJihlLnZhbHVlPWUudmFsdWUudG9Mb3dlckNhc2UoKSksdC50eXBlPT09XCJjc3MtZGVjbFwiJiYoZS5wcm9wPXQucHJvcC50b0xvd2VyQ2FzZSgpKSwodC50eXBlPT09XCJjc3MtYXRydWxlXCJ8fHQudHlwZT09PVwiY3NzLWltcG9ydFwiKSYmKGUubmFtZT10Lm5hbWUudG9Mb3dlckNhc2UoKSksdC50eXBlPT09XCJ2YWx1ZS1udW1iZXJcIiYmKGUudW5pdD10LnVuaXQudG9Mb3dlckNhc2UoKSksdC50eXBlPT09XCJ2YWx1ZS11bmtub3duXCImJihlLnZhbHVlPUUoITEsZS52YWx1ZSwvOyQvZ3UsXCJcIikpLHQudHlwZT09PVwic2VsZWN0b3ItYXR0cmlidXRlXCImJihlLmF0dHJpYnV0ZT10LmF0dHJpYnV0ZS50cmltKCksdC5uYW1lc3BhY2UmJnR5cGVvZiB0Lm5hbWVzcGFjZT09XCJzdHJpbmdcIiYmKGUubmFtZXNwYWNlPXQubmFtZXNwYWNlLnRyaW0oKXx8ITApLHQudmFsdWUmJihlLnZhbHVlPUUoITEsZS52YWx1ZS50cmltKCksL15bXCInXXxbXCInXSQvZ3UsXCJcIiksZGVsZXRlIGUucXVvdGVkKSksKHQudHlwZT09PVwibWVkaWEtdmFsdWVcInx8dC50eXBlPT09XCJtZWRpYS10eXBlXCJ8fHQudHlwZT09PVwidmFsdWUtbnVtYmVyXCJ8fHQudHlwZT09PVwic2VsZWN0b3Itcm9vdC1pbnZhbGlkXCJ8fHQudHlwZT09PVwic2VsZWN0b3ItY2xhc3NcInx8dC50eXBlPT09XCJzZWxlY3Rvci1jb21iaW5hdG9yXCJ8fHQudHlwZT09PVwic2VsZWN0b3ItdGFnXCIpJiZ0LnZhbHVlJiYoZS52YWx1ZT1FKCExLGUudmFsdWUsLyhbXFxkKy5lLV0rKShbYS16XSopL2dpdSwocixuLGkpPT57bGV0IG89TnVtYmVyKG4pO3JldHVybiBOdW1iZXIuaXNOYU4obyk/cjpvK2kudG9Mb3dlckNhc2UoKX0pKSx0LnR5cGU9PT1cInNlbGVjdG9yLXRhZ1wiKXtsZXQgcj1lLnZhbHVlLnRvTG93ZXJDYXNlKCk7W1wiZnJvbVwiLFwidG9cIl0uaW5jbHVkZXMocikmJihlLnZhbHVlPXIpfWlmKHQudHlwZT09PVwiY3NzLWF0cnVsZVwiJiZ0Lm5hbWUudG9Mb3dlckNhc2UoKT09PVwic3VwcG9ydHNcIiYmZGVsZXRlIGUudmFsdWUsdC50eXBlPT09XCJzZWxlY3Rvci11bmtub3duXCImJmRlbGV0ZSBlLnZhbHVlLHQudHlwZT09PVwidmFsdWUtY29tbWFfZ3JvdXBcIil7bGV0IHI9dC5ncm91cHMuZmluZEluZGV4KG49Pm4udHlwZT09PVwidmFsdWUtbnVtYmVyXCImJm4udW5pdD09PVwiLi4uXCIpO3IhPT0tMSYmKGUuZ3JvdXBzW3JdLnVuaXQ9XCJcIixlLmdyb3Vwcy5zcGxpY2UocisxLDAse3R5cGU6XCJ2YWx1ZS13b3JkXCIsdmFsdWU6XCIuLi5cIixpc0NvbG9yOiExLGlzSGV4OiExfSkpfWlmKHQudHlwZT09PVwidmFsdWUtY29tbWFfZ3JvdXBcIiYmdC5ncm91cHMuc29tZShyPT5yLnR5cGU9PT1cInZhbHVlLWF0d29yZFwiJiZyLnZhbHVlLmVuZHNXaXRoKFwiW1wiKXx8ci50eXBlPT09XCJ2YWx1ZS13b3JkXCImJnIudmFsdWUuc3RhcnRzV2l0aChcIl1cIikpKXJldHVybnt0eXBlOlwidmFsdWUtYXR3b3JkXCIsdmFsdWU6dC5ncm91cHMubWFwKHI9PnIudmFsdWUpLmpvaW4oXCJcIiksZ3JvdXA6e29wZW46bnVsbCxjbG9zZTpudWxsLGdyb3VwczpbXSx0eXBlOlwidmFsdWUtcGFyZW5fZ3JvdXBcIn19fWhuLmlnbm9yZWRQcm9wZXJ0aWVzPUlsO2Z1bmN0aW9uIHFsKHQpe3JldHVybiBFKCExLEUoITEsdCxcIidcIiwnXCInKSwvXFxcXChbXlxcZGEtZl0pL2dpdSxcIiQxXCIpfXZhciBkbj1objthc3luYyBmdW5jdGlvbiBMbCh0LGUpe2lmKHQubGFuZ3VhZ2U9PT1cInlhbWxcIil7bGV0IHM9dC52YWx1ZS50cmltKCkscj1zP2F3YWl0IGUocyx7cGFyc2VyOlwieWFtbFwifSk6XCJcIjtyZXR1cm4gbm4oW3Quc3RhcnREZWxpbWl0ZXIsdC5leHBsaWNpdExhbmd1YWdlLFMscixyP1M6XCJcIix0LmVuZERlbGltaXRlcl0pfX12YXIgbW49TGw7ZnVuY3Rpb24geW4odCl7bGV0e25vZGU6ZX09dDtpZihlLnR5cGU9PT1cImZyb250LW1hdHRlclwiKXJldHVybiBhc3luYyBzPT57bGV0IHI9YXdhaXQgbW4oZSxzKTtyZXR1cm4gcj9bcixTXTp2b2lkIDB9fXluLmdldFZpc2l0b3JLZXlzPXQ9PnQudHlwZT09PVwiY3NzLXJvb3RcIj9bXCJmcm9udE1hdHRlclwiXTpbXTt2YXIgZ249eW47dmFyIFFlPW51bGw7ZnVuY3Rpb24gSmUodCl7aWYoUWUhPT1udWxsJiZ0eXBlb2YgUWUucHJvcGVydHkpe2xldCBlPVFlO3JldHVybiBRZT1KZS5wcm90b3R5cGU9bnVsbCxlfXJldHVybiBRZT1KZS5wcm90b3R5cGU9dD8/T2JqZWN0LmNyZWF0ZShudWxsKSxuZXcgSmV9dmFyIERsPTEwO2ZvcihsZXQgdD0wO3Q8PURsO3QrKylKZSgpO2Z1bmN0aW9uIEdyKHQpe3JldHVybiBKZSh0KX1mdW5jdGlvbiBCbCh0LGU9XCJ0eXBlXCIpe0dyKHQpO2Z1bmN0aW9uIHMocil7bGV0IG49cltlXSxpPXRbbl07aWYoIUFycmF5LmlzQXJyYXkoaSkpdGhyb3cgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoYE1pc3NpbmcgdmlzaXRvciBrZXlzIGZvciAnJHtufScuYCkse25vZGU6cn0pO3JldHVybiBpfXJldHVybiBzfXZhciB3bj1CbDt2YXIgTWw9e1wiZnJvbnQtbWF0dGVyXCI6W10sXCJjc3Mtcm9vdFwiOltcImZyb250TWF0dGVyXCIsXCJub2Rlc1wiXSxcImNzcy1jb21tZW50XCI6W10sXCJjc3MtcnVsZVwiOltcInNlbGVjdG9yXCIsXCJub2Rlc1wiXSxcImNzcy1kZWNsXCI6W1widmFsdWVcIixcInNlbGVjdG9yXCIsXCJub2Rlc1wiXSxcImNzcy1hdHJ1bGVcIjpbXCJzZWxlY3RvclwiLFwicGFyYW1zXCIsXCJ2YWx1ZVwiLFwibm9kZXNcIl0sXCJtZWRpYS1xdWVyeS1saXN0XCI6W1wibm9kZXNcIl0sXCJtZWRpYS1xdWVyeVwiOltcIm5vZGVzXCJdLFwibWVkaWEtdHlwZVwiOltdLFwibWVkaWEtZmVhdHVyZS1leHByZXNzaW9uXCI6W1wibm9kZXNcIl0sXCJtZWRpYS1mZWF0dXJlXCI6W10sXCJtZWRpYS1jb2xvblwiOltdLFwibWVkaWEtdmFsdWVcIjpbXSxcIm1lZGlhLWtleXdvcmRcIjpbXSxcIm1lZGlhLXVybFwiOltdLFwibWVkaWEtdW5rbm93blwiOltdLFwic2VsZWN0b3Itcm9vdFwiOltcIm5vZGVzXCJdLFwic2VsZWN0b3Itc2VsZWN0b3JcIjpbXCJub2Rlc1wiXSxcInNlbGVjdG9yLWNvbW1lbnRcIjpbXSxcInNlbGVjdG9yLXN0cmluZ1wiOltdLFwic2VsZWN0b3ItdGFnXCI6W10sXCJzZWxlY3Rvci1pZFwiOltdLFwic2VsZWN0b3ItY2xhc3NcIjpbXSxcInNlbGVjdG9yLWF0dHJpYnV0ZVwiOltdLFwic2VsZWN0b3ItY29tYmluYXRvclwiOltcIm5vZGVzXCJdLFwic2VsZWN0b3ItdW5pdmVyc2FsXCI6W10sXCJzZWxlY3Rvci1wc2V1ZG9cIjpbXCJub2Rlc1wiXSxcInNlbGVjdG9yLW5lc3RpbmdcIjpbXSxcInNlbGVjdG9yLXVua25vd25cIjpbXSxcInZhbHVlLXZhbHVlXCI6W1wiZ3JvdXBcIl0sXCJ2YWx1ZS1yb290XCI6W1wiZ3JvdXBcIl0sXCJ2YWx1ZS1jb21tZW50XCI6W10sXCJ2YWx1ZS1jb21tYV9ncm91cFwiOltcImdyb3Vwc1wiXSxcInZhbHVlLXBhcmVuX2dyb3VwXCI6W1wib3BlblwiLFwiZ3JvdXBzXCIsXCJjbG9zZVwiXSxcInZhbHVlLWZ1bmNcIjpbXCJncm91cFwiXSxcInZhbHVlLXBhcmVuXCI6W10sXCJ2YWx1ZS1udW1iZXJcIjpbXSxcInZhbHVlLW9wZXJhdG9yXCI6W10sXCJ2YWx1ZS13b3JkXCI6W10sXCJ2YWx1ZS1jb2xvblwiOltdLFwidmFsdWUtY29tbWFcIjpbXSxcInZhbHVlLXN0cmluZ1wiOltdLFwidmFsdWUtYXR3b3JkXCI6W10sXCJ2YWx1ZS11bmljb2RlLXJhbmdlXCI6W10sXCJ2YWx1ZS11bmtub3duXCI6W119LHZuPU1sO3ZhciBVbD13bih2bikseG49VWw7ZnVuY3Rpb24gRmwodCxlKXtsZXQgcz0wO2ZvcihsZXQgcj0wO3I8dC5saW5lLTE7KytyKXM9ZS5pbmRleE9mKGBcbmAscykrMTtyZXR1cm4gcyt0LmNvbHVtbn12YXIganI9Rmw7ZnVuY3Rpb24gTnQodCl7cmV0dXJuKGUscyxyKT0+e2xldCBuPSEhKHIhPW51bGwmJnIuYmFja3dhcmRzKTtpZihzPT09ITEpcmV0dXJuITE7bGV0e2xlbmd0aDppfT1lLG89cztmb3IoO28+PTAmJm88aTspe2xldCB1PWUuY2hhckF0KG8pO2lmKHQgaW5zdGFuY2VvZiBSZWdFeHApe2lmKCF0LnRlc3QodSkpcmV0dXJuIG99ZWxzZSBpZighdC5pbmNsdWRlcyh1KSlyZXR1cm4gbztuP28tLTpvKyt9cmV0dXJuIG89PT0tMXx8bz09PWk/bzohMX19dmFyIEZnPU50KC9cXHMvdSksUHQ9TnQoXCIgXHRcIiksYm49TnQoXCIsOyBcdFwiKSxSdD1OdCgvW15cXG5cXHJdL3UpO2Z1bmN0aW9uIF9uKHQsZSl7dmFyIHMscixuO2lmKHR5cGVvZigocj0ocz10LnNvdXJjZSk9PW51bGw/dm9pZCAwOnMuc3RhcnQpPT1udWxsP3ZvaWQgMDpyLm9mZnNldCk9PVwibnVtYmVyXCIpcmV0dXJuIHQuc291cmNlLnN0YXJ0Lm9mZnNldDtpZih0eXBlb2YgdC5zb3VyY2VJbmRleD09XCJudW1iZXJcIilyZXR1cm4gdC5zb3VyY2VJbmRleDtpZigobj10LnNvdXJjZSkhPW51bGwmJm4uc3RhcnQpcmV0dXJuIGpyKHQuc291cmNlLnN0YXJ0LGUpO3Rocm93IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKFwiQ2FuIG5vdCBsb2NhdGUgbm9kZS5cIikse25vZGU6dH0pfWZ1bmN0aW9uIEhyKHQsZSl7dmFyIHMscjtpZih0LnR5cGU9PT1cImNzcy1jb21tZW50XCImJnQuaW5saW5lKXJldHVybiBSdChlLHQuc291cmNlLnN0YXJ0T2Zmc2V0KTtpZih0eXBlb2YoKHI9KHM9dC5zb3VyY2UpPT1udWxsP3ZvaWQgMDpzLmVuZCk9PW51bGw/dm9pZCAwOnIub2Zmc2V0KT09XCJudW1iZXJcIilyZXR1cm4gdC5zb3VyY2UuZW5kLm9mZnNldDtpZih0LnNvdXJjZSl7aWYodC5zb3VyY2UuZW5kKXJldHVybiBqcih0LnNvdXJjZS5lbmQsZSk7aWYoYWUodC5ub2RlcykpcmV0dXJuIEhyKCQoITEsdC5ub2RlcywtMSksZSl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gS3IodCxlKXt0LnNvdXJjZSYmKHQuc291cmNlLnN0YXJ0T2Zmc2V0PV9uKHQsZSksdC5zb3VyY2UuZW5kT2Zmc2V0PUhyKHQsZSkpO2ZvcihsZXQgcyBpbiB0KXtsZXQgcj10W3NdO3M9PT1cInNvdXJjZVwifHwhcnx8dHlwZW9mIHIhPVwib2JqZWN0XCJ8fChyLnR5cGU9PT1cInZhbHVlLXJvb3RcInx8ci50eXBlPT09XCJ2YWx1ZS11bmtub3duXCI/RW4ociwkbCh0KSxyLnRleHR8fHIudmFsdWUpOktyKHIsZSkpfX1mdW5jdGlvbiBFbih0LGUscyl7dC5zb3VyY2UmJih0LnNvdXJjZS5zdGFydE9mZnNldD1fbih0LHMpK2UsdC5zb3VyY2UuZW5kT2Zmc2V0PUhyKHQscykrZSk7Zm9yKGxldCByIGluIHQpe2xldCBuPXRbcl07cj09PVwic291cmNlXCJ8fCFufHx0eXBlb2YgbiE9XCJvYmplY3RcInx8RW4obixlLHMpfX1mdW5jdGlvbiAkbCh0KXt2YXIgcztsZXQgZT10LnNvdXJjZS5zdGFydE9mZnNldDtyZXR1cm4gdHlwZW9mIHQucHJvcD09XCJzdHJpbmdcIiYmKGUrPXQucHJvcC5sZW5ndGgpLHQudHlwZT09PVwiY3NzLWF0cnVsZVwiJiZ0eXBlb2YgdC5uYW1lPT1cInN0cmluZ1wiJiYoZSs9MSt0Lm5hbWUubGVuZ3RoK3QucmF3cy5hZnRlck5hbWUubWF0Y2goL15cXHMqOj9cXHMqL3UpWzBdLmxlbmd0aCksdC50eXBlIT09XCJjc3MtYXRydWxlXCImJnR5cGVvZigocz10LnJhd3MpPT1udWxsP3ZvaWQgMDpzLmJldHdlZW4pPT1cInN0cmluZ1wiJiYoZSs9dC5yYXdzLmJldHdlZW4ubGVuZ3RoKSxlfWZ1bmN0aW9uIGtuKHQpe2xldCBlPVwiaW5pdGlhbFwiLHM9XCJpbml0aWFsXCIscixuPSExLGk9W107Zm9yKGxldCBvPTA7bzx0Lmxlbmd0aDtvKyspe2xldCB1PXRbb107c3dpdGNoKGUpe2Nhc2VcImluaXRpYWxcIjppZih1PT09XCInXCIpe2U9XCJzaW5nbGUtcXVvdGVzXCI7Y29udGludWV9aWYodT09PSdcIicpe2U9XCJkb3VibGUtcXVvdGVzXCI7Y29udGludWV9aWYoKHU9PT1cInVcInx8dT09PVwiVVwiKSYmdC5zbGljZShvLG8rNCkudG9Mb3dlckNhc2UoKT09PVwidXJsKFwiKXtlPVwidXJsXCIsbys9Mztjb250aW51ZX1pZih1PT09XCIqXCImJnRbby0xXT09PVwiL1wiKXtlPVwiY29tbWVudC1ibG9ja1wiO2NvbnRpbnVlfWlmKHU9PT1cIi9cIiYmdFtvLTFdPT09XCIvXCIpe2U9XCJjb21tZW50LWlubGluZVwiLHI9by0xO2NvbnRpbnVlfWNvbnRpbnVlO2Nhc2VcInNpbmdsZS1xdW90ZXNcIjppZih1PT09XCInXCImJnRbby0xXSE9PVwiXFxcXFwiJiYoZT1zLHM9XCJpbml0aWFsXCIpLHU9PT1gXG5gfHx1PT09XCJcXHJcIilyZXR1cm4gdDtjb250aW51ZTtjYXNlXCJkb3VibGUtcXVvdGVzXCI6aWYodT09PSdcIicmJnRbby0xXSE9PVwiXFxcXFwiJiYoZT1zLHM9XCJpbml0aWFsXCIpLHU9PT1gXG5gfHx1PT09XCJcXHJcIilyZXR1cm4gdDtjb250aW51ZTtjYXNlXCJ1cmxcIjppZih1PT09XCIpXCImJihlPVwiaW5pdGlhbFwiKSx1PT09YFxuYHx8dT09PVwiXFxyXCIpcmV0dXJuIHQ7aWYodT09PVwiJ1wiKXtlPVwic2luZ2xlLXF1b3Rlc1wiLHM9XCJ1cmxcIjtjb250aW51ZX1pZih1PT09J1wiJyl7ZT1cImRvdWJsZS1xdW90ZXNcIixzPVwidXJsXCI7Y29udGludWV9Y29udGludWU7Y2FzZVwiY29tbWVudC1ibG9ja1wiOnU9PT1cIi9cIiYmdFtvLTFdPT09XCIqXCImJihlPVwiaW5pdGlhbFwiKTtjb250aW51ZTtjYXNlXCJjb21tZW50LWlubGluZVwiOih1PT09J1wiJ3x8dT09PVwiJ1wifHx1PT09XCIqXCIpJiYobj0hMCksKHU9PT1gXG5gfHx1PT09XCJcXHJcIikmJihuJiZpLnB1c2goW3Isb10pLGU9XCJpbml0aWFsXCIsbj0hMSk7Y29udGludWV9fWZvcihsZXRbbyx1XW9mIGkpdD10LnNsaWNlKDAsbykrRSghMSx0LnNsaWNlKG8sdSksL1tcIicqXS9ndSxcIiBcIikrdC5zbGljZSh1KTtyZXR1cm4gdH1mdW5jdGlvbiBQKHQpe3ZhciBlO3JldHVybihlPXQuc291cmNlKT09bnVsbD92b2lkIDA6ZS5zdGFydE9mZnNldH1mdW5jdGlvbiBSKHQpe3ZhciBlO3JldHVybihlPXQuc291cmNlKT09bnVsbD92b2lkIDA6ZS5lbmRPZmZzZXR9dmFyIFdsPS9cXCpcXC8kLyxZbD0vXlxcL1xcKlxcKj8vLE9uPS9eXFxzKihcXC9cXCpcXCo/KC58XFxyP1xcbikqP1xcKlxcLykvLFZsPS8oXnxcXHMrKVxcL1xcLyhbXlxcblxccl0qKS9nLFNuPS9eKFxccj9cXG4pKy8semw9Lyg/Ol58XFxyP1xcbikgKihAW15cXG5cXHJdKj8pICpcXHI/XFxuICooPyFbXlxcblxcckBdKlxcL1xcL1teXSopKFteXFxzQF1bXlxcblxcckBdKz8pICpcXHI/XFxuL2csVG49Lyg/Ol58XFxyP1xcbikgKkAoXFxTKykgKihbXlxcblxccl0qKS9nLEdsPS8oXFxyP1xcbnxeKSAqXFwqID8vZyxBbj1bXTtmdW5jdGlvbiBObih0KXtsZXQgZT10Lm1hdGNoKE9uKTtyZXR1cm4gZT9lWzBdLnRyaW1TdGFydCgpOlwiXCJ9ZnVuY3Rpb24gUG4odCl7bGV0IGU9dC5tYXRjaChPbikscz1lPT1udWxsP3ZvaWQgMDplWzBdO3JldHVybiBzPT1udWxsP3Q6dC5zbGljZShzLmxlbmd0aCl9ZnVuY3Rpb24gUm4odCl7bGV0IGU9YFxuYDt0PUUoITEsdC5yZXBsYWNlKFlsLFwiXCIpLnJlcGxhY2UoV2wsXCJcIiksR2wsXCIkMVwiKTtsZXQgcz1cIlwiO2Zvcig7cyE9PXQ7KXM9dCx0PUUoITEsdCx6bCxgJHtlfSQxICQyJHtlfWApO3Q9dC5yZXBsYWNlKFNuLFwiXCIpLnRyaW1FbmQoKTtsZXQgcj1PYmplY3QuY3JlYXRlKG51bGwpLG49RSghMSx0LFRuLFwiXCIpLnJlcGxhY2UoU24sXCJcIikudHJpbUVuZCgpLGk7Zm9yKDtpPVRuLmV4ZWModCk7KXtsZXQgbz1FKCExLGlbMl0sVmwsXCJcIik7aWYodHlwZW9mIHJbaVsxXV09PVwic3RyaW5nXCJ8fEFycmF5LmlzQXJyYXkocltpWzFdXSkpe2xldCB1PXJbaVsxXV07cltpWzFdXT1bLi4uQW4sLi4uQXJyYXkuaXNBcnJheSh1KT91Olt1XSxvXX1lbHNlIHJbaVsxXV09b31yZXR1cm57Y29tbWVudHM6bixwcmFnbWFzOnJ9fWZ1bmN0aW9uIEluKHtjb21tZW50czp0PVwiXCIscHJhZ21hczplPXt9fSl7bGV0IHM9YFxuYCxyPVwiLyoqXCIsbj1cIiAqXCIsaT1cIiAqL1wiLG89T2JqZWN0LmtleXMoZSksdT1vLmZsYXRNYXAoYz0+Q24oYyxlW2NdKSkubWFwKGM9PmAke259ICR7Y30ke3N9YCkuam9pbihcIlwiKTtpZighdCl7aWYoby5sZW5ndGg9PT0wKXJldHVyblwiXCI7aWYoby5sZW5ndGg9PT0xJiYhQXJyYXkuaXNBcnJheShlW29bMF1dKSl7bGV0IGM9ZVtvWzBdXTtyZXR1cm5gJHtyfSAke0NuKG9bMF0sYylbMF19JHtpfWB9fWxldCBhPXQuc3BsaXQocykubWFwKGM9PmAke259ICR7Y31gKS5qb2luKHMpK3M7cmV0dXJuIHIrcysodD9hOlwiXCIpKyh0JiZvLmxlbmd0aD4wP24rczpcIlwiKSt1K2l9ZnVuY3Rpb24gQ24odCxlKXtyZXR1cm5bLi4uQW4sLi4uQXJyYXkuaXNBcnJheShlKT9lOltlXV0ubWFwKHM9PmBAJHt0fSAke3N9YC50cmltKCkpfWZ1bmN0aW9uIGpsKHQpe2lmKCF0LnN0YXJ0c1dpdGgoXCIjIVwiKSlyZXR1cm5cIlwiO2xldCBlPXQuaW5kZXhPZihgXG5gKTtyZXR1cm4gZT09PS0xP3Q6dC5zbGljZSgwLGUpfXZhciBxbj1qbDtmdW5jdGlvbiBMbih0KXtsZXQgZT1xbih0KTtlJiYodD10LnNsaWNlKGUubGVuZ3RoKzEpKTtsZXQgcz1Obih0KSx7cHJhZ21hczpyLGNvbW1lbnRzOm59PVJuKHMpO3JldHVybntzaGViYW5nOmUsdGV4dDp0LHByYWdtYXM6cixjb21tZW50czpufX1mdW5jdGlvbiBEbih0KXtsZXR7cHJhZ21hczplfT1Mbih0KTtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsXCJwcmV0dGllclwiKXx8T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsXCJmb3JtYXRcIil9ZnVuY3Rpb24gQm4odCl7bGV0e3NoZWJhbmc6ZSx0ZXh0OnMscHJhZ21hczpyLGNvbW1lbnRzOm59PUxuKHQpLGk9UG4ocyksbz1Jbih7cHJhZ21hczp7Zm9ybWF0OlwiXCIsLi4ucn0sY29tbWVudHM6bi50cmltU3RhcnQoKX0pO3JldHVybihlP2Ake2V9XG5gOlwiXCIpK28rKGkuc3RhcnRzV2l0aChgXG5gKT9gXG5gOmBcblxuYCkraX12YXIgWGU9MztmdW5jdGlvbiBIbCh0KXtsZXQgZT10LnNsaWNlKDAsWGUpO2lmKGUhPT1cIi0tLVwiJiZlIT09XCIrKytcIilyZXR1cm47bGV0IHM9dC5pbmRleE9mKGBcbmAsWGUpO2lmKHM9PT0tMSlyZXR1cm47bGV0IHI9dC5zbGljZShYZSxzKS50cmltKCksbj10LmluZGV4T2YoYFxuJHtlfWAscyksaT1yO2lmKGl8fChpPWU9PT1cIisrK1wiP1widG9tbFwiOlwieWFtbFwiKSxuPT09LTEmJmU9PT1cIi0tLVwiJiZpPT09XCJ5YW1sXCImJihuPXQuaW5kZXhPZihgXG4uLi5gLHMpKSxuPT09LTEpcmV0dXJuO2xldCBvPW4rMStYZSx1PXQuY2hhckF0KG8rMSk7aWYoIS9cXHM/L3UudGVzdCh1KSlyZXR1cm47bGV0IGE9dC5zbGljZSgwLG8pO3JldHVybnt0eXBlOlwiZnJvbnQtbWF0dGVyXCIsbGFuZ3VhZ2U6aSxleHBsaWNpdExhbmd1YWdlOnIsdmFsdWU6dC5zbGljZShzKzEsbiksc3RhcnREZWxpbWl0ZXI6ZSxlbmREZWxpbWl0ZXI6YS5zbGljZSgtWGUpLHJhdzphfX1mdW5jdGlvbiBLbCh0KXtsZXQgZT1IbCh0KTtpZighZSlyZXR1cm57Y29udGVudDp0fTtsZXR7cmF3OnN9PWU7cmV0dXJue2Zyb250TWF0dGVyOmUsY29udGVudDpFKCExLHMsL1teXFxuXS9ndSxcIiBcIikrdC5zbGljZShzLmxlbmd0aCl9fXZhciBaZT1LbDtmdW5jdGlvbiBNbih0KXtyZXR1cm4gRG4oWmUodCkuY29udGVudCl9ZnVuY3Rpb24gVW4odCl7bGV0e2Zyb250TWF0dGVyOmUsY29udGVudDpzfT1aZSh0KTtyZXR1cm4oZT9lLnJhdytgXG5cbmA6XCJcIikrQm4ocyl9dmFyIFFsPW5ldyBTZXQoW1wicmVkXCIsXCJncmVlblwiLFwiYmx1ZVwiLFwiYWxwaGFcIixcImFcIixcInJnYlwiLFwiaHVlXCIsXCJoXCIsXCJzYXR1cmF0aW9uXCIsXCJzXCIsXCJsaWdodG5lc3NcIixcImxcIixcIndoaXRlbmVzc1wiLFwid1wiLFwiYmxhY2tuZXNzXCIsXCJiXCIsXCJ0aW50XCIsXCJzaGFkZVwiLFwiYmxlbmRcIixcImJsZW5kYVwiLFwiY29udHJhc3RcIixcImhzbFwiLFwiaHNsYVwiLFwiaHdiXCIsXCJod2JhXCJdKTtmdW5jdGlvbiBGbih0KXt2YXIgZSxzO3JldHVybihzPShlPXQuZmluZEFuY2VzdG9yKHI9PnIudHlwZT09PVwiY3NzLWRlY2xcIikpPT1udWxsP3ZvaWQgMDplLnByb3ApPT1udWxsP3ZvaWQgMDpzLnRvTG93ZXJDYXNlKCl9dmFyIEpsPW5ldyBTZXQoW1wiaW5pdGlhbFwiLFwiaW5oZXJpdFwiLFwidW5zZXRcIixcInJldmVydFwiXSk7ZnVuY3Rpb24gJG4odCl7cmV0dXJuIEpsLmhhcyh0LnRvTG93ZXJDYXNlKCkpfWZ1bmN0aW9uIFduKHQsZSl7dmFyIHI7bGV0IHM9dC5maW5kQW5jZXN0b3Iobj0+bi50eXBlPT09XCJjc3MtYXRydWxlXCIpO3JldHVybigocj1zPT1udWxsP3ZvaWQgMDpzLm5hbWUpPT1udWxsP3ZvaWQgMDpyLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoXCJrZXlmcmFtZXNcIikpJiZbXCJmcm9tXCIsXCJ0b1wiXS5pbmNsdWRlcyhlLnRvTG93ZXJDYXNlKCkpfWZ1bmN0aW9uIHVlKHQpe3JldHVybiB0LmluY2x1ZGVzKFwiJFwiKXx8dC5pbmNsdWRlcyhcIkBcIil8fHQuaW5jbHVkZXMoXCIjXCIpfHx0LnN0YXJ0c1dpdGgoXCIlXCIpfHx0LnN0YXJ0c1dpdGgoXCItLVwiKXx8dC5zdGFydHNXaXRoKFwiOi0tXCIpfHx0LmluY2x1ZGVzKFwiKFwiKSYmdC5pbmNsdWRlcyhcIilcIik/dDp0LnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gQ2UodCxlKXt2YXIgcjtsZXQgcz10LmZpbmRBbmNlc3RvcihuPT5uLnR5cGU9PT1cInZhbHVlLWZ1bmNcIik7cmV0dXJuKChyPXM9PW51bGw/dm9pZCAwOnMudmFsdWUpPT1udWxsP3ZvaWQgMDpyLnRvTG93ZXJDYXNlKCkpPT09ZX1mdW5jdGlvbiBZbih0KXt2YXIgcjtsZXQgZT10LmZpbmRBbmNlc3RvcihuPT5uLnR5cGU9PT1cImNzcy1ydWxlXCIpLHM9KHI9ZT09bnVsbD92b2lkIDA6ZS5yYXdzKT09bnVsbD92b2lkIDA6ci5zZWxlY3RvcjtyZXR1cm4gcyYmKHMuc3RhcnRzV2l0aChcIjppbXBvcnRcIil8fHMuc3RhcnRzV2l0aChcIjpleHBvcnRcIikpfWZ1bmN0aW9uIE9lKHQsZSl7bGV0IHM9QXJyYXkuaXNBcnJheShlKT9lOltlXSxyPXQuZmluZEFuY2VzdG9yKG49Pm4udHlwZT09PVwiY3NzLWF0cnVsZVwiKTtyZXR1cm4gciYmcy5pbmNsdWRlcyhyLm5hbWUudG9Mb3dlckNhc2UoKSl9ZnVuY3Rpb24gVm4odCl7dmFyIHM7bGV0e25vZGU6ZX09dDtyZXR1cm4gZS5ncm91cHNbMF0udmFsdWU9PT1cInVybFwiJiZlLmdyb3Vwcy5sZW5ndGg9PT0yJiYoKHM9dC5maW5kQW5jZXN0b3Iocj0+ci50eXBlPT09XCJjc3MtYXRydWxlXCIpKT09bnVsbD92b2lkIDA6cy5uYW1lKT09PVwiaW1wb3J0XCJ9ZnVuY3Rpb24gem4odCl7cmV0dXJuIHQudHlwZT09PVwidmFsdWUtZnVuY1wiJiZ0LnZhbHVlLnRvTG93ZXJDYXNlKCk9PT1cInVybFwifWZ1bmN0aW9uIEduKHQpe3JldHVybiB0LnR5cGU9PT1cInZhbHVlLWZ1bmNcIiYmdC52YWx1ZS50b0xvd2VyQ2FzZSgpPT09XCJ2YXJcIn1mdW5jdGlvbiBqbih0KXtsZXR7c2VsZWN0b3I6ZX09dDtyZXR1cm4gZT90eXBlb2YgZT09XCJzdHJpbmdcIiYmL15ALis6LiokL3UudGVzdChlKXx8ZS52YWx1ZSYmL15ALis6LiokL3UudGVzdChlLnZhbHVlKTohMX1mdW5jdGlvbiBIbih0KXtyZXR1cm4gdC50eXBlPT09XCJ2YWx1ZS13b3JkXCImJltcImZyb21cIixcInRocm91Z2hcIixcImVuZFwiXS5pbmNsdWRlcyh0LnZhbHVlKX1mdW5jdGlvbiBLbih0KXtyZXR1cm4gdC50eXBlPT09XCJ2YWx1ZS13b3JkXCImJltcImFuZFwiLFwib3JcIixcIm5vdFwiXS5pbmNsdWRlcyh0LnZhbHVlKX1mdW5jdGlvbiBRbih0KXtyZXR1cm4gdC50eXBlPT09XCJ2YWx1ZS13b3JkXCImJnQudmFsdWU9PT1cImluXCJ9ZnVuY3Rpb24gSXQodCl7cmV0dXJuIHQudHlwZT09PVwidmFsdWUtb3BlcmF0b3JcIiYmdC52YWx1ZT09PVwiKlwifWZ1bmN0aW9uIGV0KHQpe3JldHVybiB0LnR5cGU9PT1cInZhbHVlLW9wZXJhdG9yXCImJnQudmFsdWU9PT1cIi9cIn1mdW5jdGlvbiBKKHQpe3JldHVybiB0LnR5cGU9PT1cInZhbHVlLW9wZXJhdG9yXCImJnQudmFsdWU9PT1cIitcIn1mdW5jdGlvbiBoZSh0KXtyZXR1cm4gdC50eXBlPT09XCJ2YWx1ZS1vcGVyYXRvclwiJiZ0LnZhbHVlPT09XCItXCJ9ZnVuY3Rpb24gWGwodCl7cmV0dXJuIHQudHlwZT09PVwidmFsdWUtb3BlcmF0b3JcIiYmdC52YWx1ZT09PVwiJVwifWZ1bmN0aW9uIHF0KHQpe3JldHVybiBJdCh0KXx8ZXQodCl8fEoodCl8fGhlKHQpfHxYbCh0KX1mdW5jdGlvbiBKbih0KXtyZXR1cm4gdC50eXBlPT09XCJ2YWx1ZS13b3JkXCImJltcIj09XCIsXCIhPVwiXS5pbmNsdWRlcyh0LnZhbHVlKX1mdW5jdGlvbiBYbih0KXtyZXR1cm4gdC50eXBlPT09XCJ2YWx1ZS13b3JkXCImJltcIjxcIixcIj5cIixcIjw9XCIsXCI+PVwiXS5pbmNsdWRlcyh0LnZhbHVlKX1mdW5jdGlvbiB0dCh0LGUpe3JldHVybiBlLnBhcnNlcj09PVwic2Nzc1wiJiZ0LnR5cGU9PT1cImNzcy1hdHJ1bGVcIiYmW1wiaWZcIixcImVsc2VcIixcImZvclwiLFwiZWFjaFwiLFwid2hpbGVcIl0uaW5jbHVkZXModC5uYW1lKX1mdW5jdGlvbiBKcih0KXt2YXIgZTtyZXR1cm4oKGU9dC5yYXdzKT09bnVsbD92b2lkIDA6ZS5wYXJhbXMpJiYvXlxcKFxccypcXCkkL3UudGVzdCh0LnJhd3MucGFyYW1zKX1mdW5jdGlvbiBMdCh0KXtyZXR1cm4gdC5uYW1lLnN0YXJ0c1dpdGgoXCJwcmV0dGllci1wbGFjZWhvbGRlclwiKX1mdW5jdGlvbiBabih0KXtyZXR1cm4gdC5wcm9wLnN0YXJ0c1dpdGgoXCJAcHJldHRpZXItcGxhY2Vob2xkZXJcIil9ZnVuY3Rpb24gZWkodCxlKXtyZXR1cm4gdC52YWx1ZT09PVwiJCRcIiYmdC50eXBlPT09XCJ2YWx1ZS1mdW5jXCImJihlPT1udWxsP3ZvaWQgMDplLnR5cGUpPT09XCJ2YWx1ZS13b3JkXCImJiFlLnJhd3MuYmVmb3JlfWZ1bmN0aW9uIHRpKHQpe3ZhciBlLHM7cmV0dXJuKChlPXQudmFsdWUpPT1udWxsP3ZvaWQgMDplLnR5cGUpPT09XCJ2YWx1ZS1yb290XCImJigocz10LnZhbHVlLmdyb3VwKT09bnVsbD92b2lkIDA6cy50eXBlKT09PVwidmFsdWUtdmFsdWVcIiYmdC5wcm9wLnRvTG93ZXJDYXNlKCk9PT1cImNvbXBvc2VzXCJ9ZnVuY3Rpb24gcmkodCl7dmFyIGUscyxyO3JldHVybigocj0ocz0oZT10LnZhbHVlKT09bnVsbD92b2lkIDA6ZS5ncm91cCk9PW51bGw/dm9pZCAwOnMuZ3JvdXApPT1udWxsP3ZvaWQgMDpyLnR5cGUpPT09XCJ2YWx1ZS1wYXJlbl9ncm91cFwiJiZ0LnZhbHVlLmdyb3VwLmdyb3VwLm9wZW4hPT1udWxsJiZ0LnZhbHVlLmdyb3VwLmdyb3VwLmNsb3NlIT09bnVsbH1mdW5jdGlvbiBkZSh0KXt2YXIgZTtyZXR1cm4oKGU9dC5yYXdzKT09bnVsbD92b2lkIDA6ZS5iZWZvcmUpPT09XCJcIn1mdW5jdGlvbiBEdCh0KXt2YXIgZSxzO3JldHVybiB0LnR5cGU9PT1cInZhbHVlLWNvbW1hX2dyb3VwXCImJigocz0oZT10Lmdyb3Vwcyk9PW51bGw/dm9pZCAwOmVbMV0pPT1udWxsP3ZvaWQgMDpzLnR5cGUpPT09XCJ2YWx1ZS1jb2xvblwifWZ1bmN0aW9uIFFyKHQpe3ZhciBlO3JldHVybiB0LnR5cGU9PT1cInZhbHVlLXBhcmVuX2dyb3VwXCImJigoZT10Lmdyb3Vwcyk9PW51bGw/dm9pZCAwOmVbMF0pJiZEdCh0Lmdyb3Vwc1swXSl9ZnVuY3Rpb24gWHIodCxlKXt2YXIgaTtpZihlLnBhcnNlciE9PVwic2Nzc1wiKXJldHVybiExO2xldHtub2RlOnN9PXQ7aWYocy5ncm91cHMubGVuZ3RoPT09MClyZXR1cm4hMTtsZXQgcj10LmdyYW5kcGFyZW50O2lmKCFRcihzKSYmIShyJiZRcihyKSkpcmV0dXJuITE7bGV0IG49dC5maW5kQW5jZXN0b3Iobz0+by50eXBlPT09XCJjc3MtZGVjbFwiKTtyZXR1cm4hISgoaT1uPT1udWxsP3ZvaWQgMDpuLnByb3ApIT1udWxsJiZpLnN0YXJ0c1dpdGgoXCIkXCIpfHxRcihyKXx8ci50eXBlPT09XCJ2YWx1ZS1mdW5jXCIpfWZ1bmN0aW9uIEFlKHQpe3JldHVybiB0LnR5cGU9PT1cInZhbHVlLWNvbW1lbnRcIiYmdC5pbmxpbmV9ZnVuY3Rpb24gQnQodCl7cmV0dXJuIHQudHlwZT09PVwidmFsdWUtd29yZFwiJiZ0LnZhbHVlPT09XCIjXCJ9ZnVuY3Rpb24gWnIodCl7cmV0dXJuIHQudHlwZT09PVwidmFsdWUtd29yZFwiJiZ0LnZhbHVlPT09XCJ7XCJ9ZnVuY3Rpb24gTXQodCl7cmV0dXJuIHQudHlwZT09PVwidmFsdWUtd29yZFwiJiZ0LnZhbHVlPT09XCJ9XCJ9ZnVuY3Rpb24gcnQodCl7cmV0dXJuW1widmFsdWUtd29yZFwiLFwidmFsdWUtYXR3b3JkXCJdLmluY2x1ZGVzKHQudHlwZSl9ZnVuY3Rpb24gc3QodCl7cmV0dXJuKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cInZhbHVlLWNvbG9uXCJ9ZnVuY3Rpb24gc2kodCxlKXtpZighRHQoZSkpcmV0dXJuITE7bGV0e2dyb3VwczpzfT1lLHI9cy5pbmRleE9mKHQpO3JldHVybiByPT09LTE/ITE6c3Qoc1tyKzFdKX1mdW5jdGlvbiBuaSh0KXtyZXR1cm4gdC52YWx1ZSYmW1wibm90XCIsXCJhbmRcIixcIm9yXCJdLmluY2x1ZGVzKHQudmFsdWUudG9Mb3dlckNhc2UoKSl9ZnVuY3Rpb24gaWkodCl7cmV0dXJuIHQudHlwZSE9PVwidmFsdWUtZnVuY1wiPyExOlFsLmhhcyh0LnZhbHVlLnRvTG93ZXJDYXNlKCkpfWZ1bmN0aW9uIE5lKHQpe3JldHVybi9cXC9cXC8vdS50ZXN0KHQuc3BsaXQoL1tcXG5cXHJdL3UpLnBvcCgpKX1mdW5jdGlvbiBudCh0KXtyZXR1cm4odD09bnVsbD92b2lkIDA6dC50eXBlKT09PVwidmFsdWUtYXR3b3JkXCImJnQudmFsdWUuc3RhcnRzV2l0aChcInByZXR0aWVyLXBsYWNlaG9sZGVyLVwiKX1mdW5jdGlvbiBvaSh0LGUpe3ZhciBzLHI7aWYoKChzPXQub3Blbik9PW51bGw/dm9pZCAwOnMudmFsdWUpIT09XCIoXCJ8fCgocj10LmNsb3NlKT09bnVsbD92b2lkIDA6ci52YWx1ZSkhPT1cIilcInx8dC5ncm91cHMuc29tZShuPT5uLnR5cGUhPT1cInZhbHVlLWNvbW1hX2dyb3VwXCIpKXJldHVybiExO2lmKGUudHlwZT09PVwidmFsdWUtY29tbWFfZ3JvdXBcIil7bGV0IG49ZS5ncm91cHMuaW5kZXhPZih0KS0xLGk9ZS5ncm91cHNbbl07aWYoKGk9PW51bGw/dm9pZCAwOmkudHlwZSk9PT1cInZhbHVlLXdvcmRcIiYmaS52YWx1ZT09PVwid2l0aFwiKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIGl0KHQpe3ZhciBlLHM7cmV0dXJuIHQudHlwZT09PVwidmFsdWUtcGFyZW5fZ3JvdXBcIiYmKChlPXQub3Blbik9PW51bGw/dm9pZCAwOmUudmFsdWUpPT09XCIoXCImJigocz10LmNsb3NlKT09bnVsbD92b2lkIDA6cy52YWx1ZSk9PT1cIilcIn1mdW5jdGlvbiBabCh0LGUscyl7dmFyIGQ7bGV0e25vZGU6cn09dCxuPXQucGFyZW50LGk9dC5ncmFuZHBhcmVudCxvPUZuKHQpLHU9byYmbi50eXBlPT09XCJ2YWx1ZS12YWx1ZVwiJiYobz09PVwiZ3JpZFwifHxvLnN0YXJ0c1dpdGgoXCJncmlkLXRlbXBsYXRlXCIpKSxhPXQuZmluZEFuY2VzdG9yKG09Pm0udHlwZT09PVwiY3NzLWF0cnVsZVwiKSxjPWEmJnR0KGEsZSksZj1yLmdyb3Vwcy5zb21lKG09PkFlKG0pKSxwPXQubWFwKHMsXCJncm91cHNcIiksbD1bXCJcIl0seT1DZSh0LFwidXJsXCIpLHg9ITEsaD0hMTtmb3IobGV0IG09MDttPHIuZ3JvdXBzLmxlbmd0aDsrK20pe2xldCBiPXIuZ3JvdXBzW20tMV0sdz1yLmdyb3Vwc1ttXSx2PXIuZ3JvdXBzW20rMV0sTj1yLmdyb3Vwc1ttKzJdO2lmKEFlKHcpJiYhdil7bC5wdXNoKFtsLnBvcCgpLG9uKFtcIiBcIixwW21dXSldKTtjb250aW51ZX1pZihsLnB1c2goW2wucG9wKCkscFttXV0pLHkpeyh2JiZKKHYpfHxKKHcpKSYmbC5wdXNoKFtsLnBvcCgpLFwiIFwiXSk7Y29udGludWV9aWYoc3QodikmJncudHlwZT09PVwidmFsdWUtd29yZFwiJiZsLmxlbmd0aD4yJiZyLmdyb3Vwcy5zbGljZSgwLG0pLmV2ZXJ5KE89Pk8udHlwZT09PVwidmFsdWUtY29tbWVudFwiKSYmIUFlKGIpJiYobFtsLmxlbmd0aC0yXT1vZSgkKCExLGwsLTIpKSksT2UodCxcImZvcndhcmRcIikmJncudHlwZT09PVwidmFsdWUtd29yZFwiJiZ3LnZhbHVlJiZiIT09dm9pZCAwJiZiLnR5cGU9PT1cInZhbHVlLXdvcmRcIiYmYi52YWx1ZT09PVwiYXNcIiYmdi50eXBlPT09XCJ2YWx1ZS1vcGVyYXRvclwiJiZ2LnZhbHVlPT09XCIqXCJ8fCF2fHx3LnR5cGU9PT1cInZhbHVlLXdvcmRcIiYmdy52YWx1ZS5lbmRzV2l0aChcIi1cIikmJm50KHYpKWNvbnRpbnVlO2lmKHcudHlwZT09PVwidmFsdWUtc3RyaW5nXCImJncucXVvdGVkKXtsZXQgTz13LnZhbHVlLmxhc3RJbmRleE9mKFwiI3tcIiksdmU9dy52YWx1ZS5sYXN0SW5kZXhPZihcIn1cIik7TyE9PS0xJiZ2ZSE9PS0xP3g9Tz52ZTpPIT09LTE/eD0hMDp2ZSE9PS0xJiYoeD0hMSl9aWYoeHx8c3Qodyl8fHN0KHYpfHx3LnR5cGU9PT1cInZhbHVlLWF0d29yZFwiJiYody52YWx1ZT09PVwiXCJ8fHcudmFsdWUuZW5kc1dpdGgoXCJbXCIpKXx8di50eXBlPT09XCJ2YWx1ZS13b3JkXCImJnYudmFsdWUuc3RhcnRzV2l0aChcIl1cIil8fHcudmFsdWU9PT1cIn5cInx8dy50eXBlIT09XCJ2YWx1ZS1zdHJpbmdcIiYmdy52YWx1ZSYmdy52YWx1ZS5pbmNsdWRlcyhcIlxcXFxcIikmJnYmJnYudHlwZSE9PVwidmFsdWUtY29tbWVudFwifHxiIT1udWxsJiZiLnZhbHVlJiZiLnZhbHVlLmluZGV4T2YoXCJcXFxcXCIpPT09Yi52YWx1ZS5sZW5ndGgtMSYmdy50eXBlPT09XCJ2YWx1ZS1vcGVyYXRvclwiJiZ3LnZhbHVlPT09XCIvXCJ8fHcudmFsdWU9PT1cIlxcXFxcInx8ZWkodyx2KXx8QnQodyl8fFpyKHcpfHxNdCh2KXx8WnIodikmJmRlKHYpfHxNdCh3KSYmZGUodil8fHcudmFsdWU9PT1cIi0tXCImJkJ0KHYpKWNvbnRpbnVlO2xldCBGPXF0KHcpLFE9cXQodik7aWYoKEYmJkJ0KHYpfHxRJiZNdCh3KSkmJmRlKHYpfHwhYiYmZXQodyl8fENlKHQsXCJjYWxjXCIpJiYoSih3KXx8Sih2KXx8aGUodyl8fGhlKHYpKSYmZGUodikpY29udGludWU7bGV0IFc9KEoodyl8fGhlKHcpKSYmbT09PTAmJih2LnR5cGU9PT1cInZhbHVlLW51bWJlclwifHx2LmlzSGV4KSYmaSYmaWkoaSkmJiFkZSh2KSxUPShOPT1udWxsP3ZvaWQgMDpOLnR5cGUpPT09XCJ2YWx1ZS1mdW5jXCJ8fE4mJnJ0KE4pfHx3LnR5cGU9PT1cInZhbHVlLWZ1bmNcInx8cnQodyksQz12LnR5cGU9PT1cInZhbHVlLWZ1bmNcInx8cnQodil8fChiPT1udWxsP3ZvaWQgMDpiLnR5cGUpPT09XCJ2YWx1ZS1mdW5jXCJ8fGImJnJ0KGIpO2lmKGUucGFyc2VyPT09XCJzY3NzXCImJkYmJncudmFsdWU9PT1cIi1cIiYmdi50eXBlPT09XCJ2YWx1ZS1mdW5jXCImJlIodykhPT1QKHYpKXtsLnB1c2goW2wucG9wKCksXCIgXCJdKTtjb250aW51ZX1pZighKCEoSXQodil8fEl0KHcpKSYmIUNlKHQsXCJjYWxjXCIpJiYhVyYmKGV0KHYpJiYhVHx8ZXQodykmJiFDfHxKKHYpJiYhVHx8Sih3KSYmIUN8fGhlKHYpfHxoZSh3KSkmJihkZSh2KXx8RiYmKCFifHxiJiZxdChiKSkpKSYmISgoZS5wYXJzZXI9PT1cInNjc3NcInx8ZS5wYXJzZXI9PT1cImxlc3NcIikmJkYmJncudmFsdWU9PT1cIi1cIiYmaXQodikmJlIodyk9PT1QKHYub3BlbikmJnYub3Blbi52YWx1ZT09PVwiKFwiKSl7aWYoQWUodykpe2lmKG4udHlwZT09PVwidmFsdWUtcGFyZW5fZ3JvdXBcIil7bC5wdXNoKG9lKFMpLFwiXCIpO2NvbnRpbnVlfWwucHVzaChTLFwiXCIpO2NvbnRpbnVlfWlmKGMmJihKbih2KXx8WG4odil8fEtuKHYpfHxRbih3KXx8SG4odykpKXtsLnB1c2goW2wucG9wKCksXCIgXCJdKTtjb250aW51ZX1pZihhJiZhLm5hbWUudG9Mb3dlckNhc2UoKT09PVwibmFtZXNwYWNlXCIpe2wucHVzaChbbC5wb3AoKSxcIiBcIl0pO2NvbnRpbnVlfWlmKHUpe3cuc291cmNlJiZ2LnNvdXJjZSYmdy5zb3VyY2Uuc3RhcnQubGluZSE9PXYuc291cmNlLnN0YXJ0LmxpbmU/KGwucHVzaChTLFwiXCIpLGg9ITApOmwucHVzaChbbC5wb3AoKSxcIiBcIl0pO2NvbnRpbnVlfWlmKFEpe2wucHVzaChbbC5wb3AoKSxcIiBcIl0pO2NvbnRpbnVlfWlmKCh2PT1udWxsP3ZvaWQgMDp2LnZhbHVlKSE9PVwiLi4uXCImJiEobnQodykmJm50KHYpJiZSKHcpPT09UCh2KSkpe2lmKG50KHcpJiZpdCh2KSYmUih3KT09PVAodi5vcGVuKSl7bC5wdXNoKEQsXCJcIik7Y29udGludWV9aWYody52YWx1ZT09PVwid2l0aFwiJiZpdCh2KSl7bD1bW1NlKGwpLFwiIFwiXV07Y29udGludWV9KGQ9dy52YWx1ZSkhPW51bGwmJmQuZW5kc1dpdGgoXCIjXCIpJiZ2LnZhbHVlPT09XCJ7XCImJml0KHYuZ3JvdXApfHxBZSh2KSYmIU58fGwucHVzaChBLFwiXCIpfX19cmV0dXJuIGYmJmwucHVzaChbbC5wb3AoKSxLZV0pLGgmJmwudW5zaGlmdChcIlwiLFMpLGM/TChxKGwpKTpWbih0KT9MKFNlKGwpKTpMKHEoU2UobCkpKX12YXIgYWk9Wmw7ZnVuY3Rpb24gZWModCl7cmV0dXJuIHQubGVuZ3RoPT09MT90OnQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eKFsrLV0/W1xcZC5dK2UpKD86XFwrfCgtKSk/MCooPz1cXGQpL3UsXCIkMSQyXCIpLnJlcGxhY2UoL14oWystXT9bXFxkLl0rKWVbKy1dPzArJC91LFwiJDFcIikucmVwbGFjZSgvXihbKy1dKT9cXC4vdSxcIiQxMC5cIikucmVwbGFjZSgvKFxcLlxcZCs/KTArKD89ZXwkKS91LFwiJDFcIikucmVwbGFjZSgvXFwuKD89ZXwkKS91LFwiXCIpfXZhciB1aT1lYzt2YXIgZXM9bmV3IE1hcChbW1wiZW1cIixcImVtXCJdLFtcInJlbVwiLFwicmVtXCJdLFtcImV4XCIsXCJleFwiXSxbXCJyZXhcIixcInJleFwiXSxbXCJjYXBcIixcImNhcFwiXSxbXCJyY2FwXCIsXCJyY2FwXCJdLFtcImNoXCIsXCJjaFwiXSxbXCJyY2hcIixcInJjaFwiXSxbXCJpY1wiLFwiaWNcIl0sW1wicmljXCIsXCJyaWNcIl0sW1wibGhcIixcImxoXCJdLFtcInJsaFwiLFwicmxoXCJdLFtcInZ3XCIsXCJ2d1wiXSxbXCJzdndcIixcInN2d1wiXSxbXCJsdndcIixcImx2d1wiXSxbXCJkdndcIixcImR2d1wiXSxbXCJ2aFwiLFwidmhcIl0sW1wic3ZoXCIsXCJzdmhcIl0sW1wibHZoXCIsXCJsdmhcIl0sW1wiZHZoXCIsXCJkdmhcIl0sW1widmlcIixcInZpXCJdLFtcInN2aVwiLFwic3ZpXCJdLFtcImx2aVwiLFwibHZpXCJdLFtcImR2aVwiLFwiZHZpXCJdLFtcInZiXCIsXCJ2YlwiXSxbXCJzdmJcIixcInN2YlwiXSxbXCJsdmJcIixcImx2YlwiXSxbXCJkdmJcIixcImR2YlwiXSxbXCJ2bWluXCIsXCJ2bWluXCJdLFtcInN2bWluXCIsXCJzdm1pblwiXSxbXCJsdm1pblwiLFwibHZtaW5cIl0sW1wiZHZtaW5cIixcImR2bWluXCJdLFtcInZtYXhcIixcInZtYXhcIl0sW1wic3ZtYXhcIixcInN2bWF4XCJdLFtcImx2bWF4XCIsXCJsdm1heFwiXSxbXCJkdm1heFwiLFwiZHZtYXhcIl0sW1wiY21cIixcImNtXCJdLFtcIm1tXCIsXCJtbVwiXSxbXCJxXCIsXCJRXCJdLFtcImluXCIsXCJpblwiXSxbXCJwdFwiLFwicHRcIl0sW1wicGNcIixcInBjXCJdLFtcInB4XCIsXCJweFwiXSxbXCJkZWdcIixcImRlZ1wiXSxbXCJncmFkXCIsXCJncmFkXCJdLFtcInJhZFwiLFwicmFkXCJdLFtcInR1cm5cIixcInR1cm5cIl0sW1wic1wiLFwic1wiXSxbXCJtc1wiLFwibXNcIl0sW1wiaHpcIixcIkh6XCJdLFtcImtoelwiLFwia0h6XCJdLFtcImRwaVwiLFwiZHBpXCJdLFtcImRwY21cIixcImRwY21cIl0sW1wiZHBweFwiLFwiZHBweFwiXSxbXCJ4XCIsXCJ4XCJdLFtcImNxd1wiLFwiY3F3XCJdLFtcImNxaFwiLFwiY3FoXCJdLFtcImNxaVwiLFwiY3FpXCJdLFtcImNxYlwiLFwiY3FiXCJdLFtcImNxbWluXCIsXCJjcW1pblwiXSxbXCJjcW1heFwiLFwiY3FtYXhcIl0sW1wiZnJcIixcImZyXCJdXSk7ZnVuY3Rpb24gbGkodCl7bGV0IGU9dC50b0xvd2VyQ2FzZSgpO3JldHVybiBlcy5oYXMoZSk/ZXMuZ2V0KGUpOnR9dmFyIGNpPS8oW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKlxcMS9nc3UsdGM9Lyg/OlxcZCpcXC5cXGQrfFxcZCtcXC4/KSg/OmVbKy1dP1xcZCspPy9naXUscmM9L1thLXpdKy9naXUsc2M9L1skQF0/W19hLXpcXHUwMDgwLVxcdUZGRkZdW1xcd1xcdTAwODAtXFx1RkZGRi1dKi9naXUsbmM9bmV3IFJlZ0V4cChjaS5zb3VyY2UrYHwoJHtzYy5zb3VyY2V9KT8oJHt0Yy5zb3VyY2V9KSgke3JjLnNvdXJjZX0pP2AsXCJnaXVcIik7ZnVuY3Rpb24gVih0LGUpe3JldHVybiBFKCExLHQsY2kscz0+QXQocyxlKSl9ZnVuY3Rpb24gZmkodCxlKXtsZXQgcz1lLnNpbmdsZVF1b3RlP1wiJ1wiOidcIic7cmV0dXJuIHQuaW5jbHVkZXMoJ1wiJyl8fHQuaW5jbHVkZXMoXCInXCIpP3Q6cyt0K3N9ZnVuY3Rpb24gbWUodCl7cmV0dXJuIEUoITEsdCxuYywoZSxzLHIsbixpKT0+IXImJm4/dHMobikrdWUoaXx8XCJcIik6ZSl9ZnVuY3Rpb24gdHModCl7cmV0dXJuIHVpKHQpLnJlcGxhY2UoL1xcLjAoPz0kfGUpL3UsXCJcIil9ZnVuY3Rpb24gcGkodCl7cmV0dXJuIHQudHJhaWxpbmdDb21tYT09PVwiZXM1XCJ8fHQudHJhaWxpbmdDb21tYT09PVwiYWxsXCJ9ZnVuY3Rpb24gaWModCxlLHMpe2xldCByPSEhKHMhPW51bGwmJnMuYmFja3dhcmRzKTtpZihlPT09ITEpcmV0dXJuITE7bGV0IG49dC5jaGFyQXQoZSk7aWYocil7aWYodC5jaGFyQXQoZS0xKT09PVwiXFxyXCImJm49PT1gXG5gKXJldHVybiBlLTI7aWYobj09PWBcbmB8fG49PT1cIlxcclwifHxuPT09XCJcXHUyMDI4XCJ8fG49PT1cIlxcdTIwMjlcIilyZXR1cm4gZS0xfWVsc2V7aWYobj09PVwiXFxyXCImJnQuY2hhckF0KGUrMSk9PT1gXG5gKXJldHVybiBlKzI7aWYobj09PWBcbmB8fG49PT1cIlxcclwifHxuPT09XCJcXHUyMDI4XCJ8fG49PT1cIlxcdTIwMjlcIilyZXR1cm4gZSsxfXJldHVybiBlfXZhciBVdD1pYztmdW5jdGlvbiBvYyh0LGUscz17fSl7bGV0IHI9UHQodCxzLmJhY2t3YXJkcz9lLTE6ZSxzKSxuPVV0KHQscixzKTtyZXR1cm4gciE9PW59dmFyIEZ0PW9jO2Z1bmN0aW9uIGFjKHQsZSl7aWYoZT09PSExKXJldHVybiExO2lmKHQuY2hhckF0KGUpPT09XCIvXCImJnQuY2hhckF0KGUrMSk9PT1cIipcIil7Zm9yKGxldCBzPWUrMjtzPHQubGVuZ3RoOysrcylpZih0LmNoYXJBdChzKT09PVwiKlwiJiZ0LmNoYXJBdChzKzEpPT09XCIvXCIpcmV0dXJuIHMrMn1yZXR1cm4gZX12YXIgaGk9YWM7ZnVuY3Rpb24gdWModCxlKXtyZXR1cm4gZT09PSExPyExOnQuY2hhckF0KGUpPT09XCIvXCImJnQuY2hhckF0KGUrMSk9PT1cIi9cIj9SdCh0LGUpOmV9dmFyIGRpPXVjO2Z1bmN0aW9uIGxjKHQsZSl7bGV0IHM9bnVsbCxyPWU7Zm9yKDtyIT09czspcz1yLHI9Ym4odCxyKSxyPWhpKHQscikscj1QdCh0LHIpO3JldHVybiByPWRpKHQscikscj1VdCh0LHIpLHIhPT0hMSYmRnQodCxyKX12YXIgJHQ9bGM7ZnVuY3Rpb24gY2Moe25vZGU6dCxwYXJlbnQ6ZX0scyl7cmV0dXJuISEodC5zb3VyY2UmJnMub3JpZ2luYWxUZXh0LnNsaWNlKFAodCksUChlLmNsb3NlKSkudHJpbUVuZCgpLmVuZHNXaXRoKFwiLFwiKSl9ZnVuY3Rpb24gZmModCxlKXtyZXR1cm4gR24odC5ncmFuZHBhcmVudCkmJmNjKHQsZSk/XCIsXCI6dC5ub2RlLnR5cGUhPT1cInZhbHVlLWNvbW1lbnRcIiYmISh0Lm5vZGUudHlwZT09PVwidmFsdWUtY29tbWFfZ3JvdXBcIiYmdC5ub2RlLmdyb3Vwcy5ldmVyeShzPT5zLnR5cGU9PT1cInZhbHVlLWNvbW1lbnRcIikpJiZwaShlKSYmdC5jYWxsUGFyZW50KCgpPT5Ycih0LGUpKT9DdChcIixcIik6XCJcIn1mdW5jdGlvbiBtaSh0LGUscyl7bGV0e25vZGU6cixwYXJlbnQ6bn09dCxpPXQubWFwKCh7bm9kZTp5fSk9PnR5cGVvZiB5PT1cInN0cmluZ1wiP3k6cygpLFwiZ3JvdXBzXCIpO2lmKG4mJnpuKG4pJiYoci5ncm91cHMubGVuZ3RoPT09MXx8ci5ncm91cHMubGVuZ3RoPjAmJnIuZ3JvdXBzWzBdLnR5cGU9PT1cInZhbHVlLWNvbW1hX2dyb3VwXCImJnIuZ3JvdXBzWzBdLmdyb3Vwcy5sZW5ndGg+MCYmci5ncm91cHNbMF0uZ3JvdXBzWzBdLnR5cGU9PT1cInZhbHVlLXdvcmRcIiYmci5ncm91cHNbMF0uZ3JvdXBzWzBdLnZhbHVlLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkpcmV0dXJuW3Iub3Blbj9zKFwib3BlblwiKTpcIlwiLFkoXCIsXCIsaSksci5jbG9zZT9zKFwiY2xvc2VcIik6XCJcIl07aWYoIXIub3Blbil7bGV0IHk9cnModCk7SGUoaSk7bGV0IHg9aGMoWShcIixcIixpKSwyKSxoPVkoeT9TOkEseCk7cmV0dXJuIHEoeT9bUyxoXTpMKFtwYyh0KT9EOlwiXCIsU2UoaCldKSl9bGV0IG89dC5tYXAoKHtub2RlOnksaXNMYXN0OngsaW5kZXg6aH0pPT57dmFyIGI7bGV0IGQ9aVtoXTtEdCh5KSYmeS50eXBlPT09XCJ2YWx1ZS1jb21tYV9ncm91cFwiJiZ5Lmdyb3VwcyYmeS5ncm91cHNbMF0udHlwZSE9PVwidmFsdWUtcGFyZW5fZ3JvdXBcIiYmKChiPXkuZ3JvdXBzWzJdKT09bnVsbD92b2lkIDA6Yi50eXBlKT09PVwidmFsdWUtcGFyZW5fZ3JvdXBcIiYmSChkKT09PXJlJiZIKGQuY29udGVudHMpPT09dGUmJkgoZC5jb250ZW50cy5jb250ZW50cyk9PT1zZSYmKGQ9TChvZShkKSkpO2xldCBtPVtkLHg/ZmModCxlKTpcIixcIl07aWYoIXgmJnkudHlwZT09PVwidmFsdWUtY29tbWFfZ3JvdXBcIiYmYWUoeS5ncm91cHMpKXtsZXQgdz0kKCExLHkuZ3JvdXBzLC0xKTshdy5zb3VyY2UmJncuY2xvc2UmJih3PXcuY2xvc2UpLHcuc291cmNlJiYkdChlLm9yaWdpbmFsVGV4dCxSKHcpKSYmbS5wdXNoKFMpfXJldHVybiBtfSxcImdyb3Vwc1wiKSx1PXNpKHIsbiksYT1vaShyLG4pLGM9WHIodCxlKSxmPWF8fGMmJiF1LHA9YXx8dSxsPUwoW3Iub3Blbj9zKFwib3BlblwiKTpcIlwiLHEoW0QsWShBLG8pXSksRCxyLmNsb3NlP3MoXCJjbG9zZVwiKTpcIlwiXSx7c2hvdWxkQnJlYWs6Zn0pO3JldHVybiBwP29lKGwpOmx9ZnVuY3Rpb24gcnModCl7cmV0dXJuIHQubWF0Y2goZT0+ZS50eXBlPT09XCJ2YWx1ZS1wYXJlbl9ncm91cFwiJiYhZS5vcGVuJiZlLmdyb3Vwcy5zb21lKHM9PnMudHlwZT09PVwidmFsdWUtY29tbWFfZ3JvdXBcIiksKGUscyk9PnM9PT1cImdyb3VwXCImJmUudHlwZT09PVwidmFsdWUtdmFsdWVcIiwoZSxzKT0+cz09PVwiZ3JvdXBcIiYmZS50eXBlPT09XCJ2YWx1ZS1yb290XCIsKGUscyk9PnM9PT1cInZhbHVlXCImJihlLnR5cGU9PT1cImNzcy1kZWNsXCImJiFlLnByb3Auc3RhcnRzV2l0aChcIi0tXCIpfHxlLnR5cGU9PT1cImNzcy1hdHJ1bGVcIiYmZS52YXJpYWJsZSkpfWZ1bmN0aW9uIHBjKHQpe3JldHVybiB0Lm1hdGNoKGU9PmUudHlwZT09PVwidmFsdWUtcGFyZW5fZ3JvdXBcIiYmIWUub3BlbiwoZSxzKT0+cz09PVwiZ3JvdXBcIiYmZS50eXBlPT09XCJ2YWx1ZS12YWx1ZVwiLChlLHMpPT5zPT09XCJncm91cFwiJiZlLnR5cGU9PT1cInZhbHVlLXJvb3RcIiwoZSxzKT0+cz09PVwidmFsdWVcIiYmZS50eXBlPT09XCJjc3MtZGVjbFwiKX1mdW5jdGlvbiBoYyh0LGUpe2xldCBzPVtdO2ZvcihsZXQgcj0wO3I8dC5sZW5ndGg7cis9ZSlzLnB1c2godC5zbGljZShyLHIrZSkpO3JldHVybiBzfWZ1bmN0aW9uIGRjKHQsZSxzKXtsZXQgcj1bXTtyZXR1cm4gdC5lYWNoKCgpPT57bGV0e25vZGU6bixwcmV2aW91czppfT10O2lmKChpPT1udWxsP3ZvaWQgMDppLnR5cGUpPT09XCJjc3MtY29tbWVudFwiJiZpLnRleHQudHJpbSgpPT09XCJwcmV0dGllci1pZ25vcmVcIj9yLnB1c2goZS5vcmlnaW5hbFRleHQuc2xpY2UoUChuKSxSKG4pKSk6ci5wdXNoKHMoKSksdC5pc0xhc3QpcmV0dXJuO2xldHtuZXh0Om99PXQ7by50eXBlPT09XCJjc3MtY29tbWVudFwiJiYhRnQoZS5vcmlnaW5hbFRleHQsUChvKSx7YmFja3dhcmRzOiEwfSkmJiFUZShuKXx8by50eXBlPT09XCJjc3MtYXRydWxlXCImJm8ubmFtZT09PVwiZWxzZVwiJiZuLnR5cGUhPT1cImNzcy1jb21tZW50XCI/ci5wdXNoKFwiIFwiKTooci5wdXNoKGUuX19pc0hUTUxTdHlsZUF0dHJpYnV0ZT9BOlMpLCR0KGUub3JpZ2luYWxUZXh0LFIobikpJiYhVGUobikmJnIucHVzaChTKSl9LFwibm9kZXNcIikscn12YXIgUGU9ZGM7ZnVuY3Rpb24gbWModCxlLHMpe3ZhciBuLGksbyx1LGEsYztsZXR7bm9kZTpyfT10O3N3aXRjaChyLnR5cGUpe2Nhc2VcImZyb250LW1hdHRlclwiOnJldHVybltyLnJhdyxTXTtjYXNlXCJjc3Mtcm9vdFwiOntsZXQgZj1QZSh0LGUscykscD1yLnJhd3MuYWZ0ZXIudHJpbSgpO3JldHVybiBwLnN0YXJ0c1dpdGgoXCI7XCIpJiYocD1wLnNsaWNlKDEpLnRyaW0oKSksW3IuZnJvbnRNYXR0ZXI/W3MoXCJmcm9udE1hdHRlclwiKSxTXTpcIlwiLGYscD9gICR7cH1gOlwiXCIsci5ub2Rlcy5sZW5ndGg+MD9TOlwiXCJdfWNhc2VcImNzcy1jb21tZW50XCI6e2xldCBmPXIuaW5saW5lfHxyLnJhd3MuaW5saW5lLHA9ZS5vcmlnaW5hbFRleHQuc2xpY2UoUChyKSxSKHIpKTtyZXR1cm4gZj9wLnRyaW1FbmQoKTpwfWNhc2VcImNzcy1ydWxlXCI6cmV0dXJuW3MoXCJzZWxlY3RvclwiKSxyLmltcG9ydGFudD9cIiAhaW1wb3J0YW50XCI6XCJcIixyLm5vZGVzP1soKG49ci5zZWxlY3Rvcik9PW51bGw/dm9pZCAwOm4udHlwZSk9PT1cInNlbGVjdG9yLXVua25vd25cIiYmTmUoci5zZWxlY3Rvci52YWx1ZSk/QTpyLnNlbGVjdG9yP1wiIFwiOlwiXCIsXCJ7XCIsci5ub2Rlcy5sZW5ndGg+MD9xKFtTLFBlKHQsZSxzKV0pOlwiXCIsUyxcIn1cIixqbihyKT9cIjtcIjpcIlwiXTpcIjtcIl07Y2FzZVwiY3NzLWRlY2xcIjp7bGV0IGY9dC5wYXJlbnQse2JldHdlZW46cH09ci5yYXdzLGw9cC50cmltKCkseT1sPT09XCI6XCIseD10eXBlb2Ygci52YWx1ZT09XCJzdHJpbmdcIiYmL14gKiQvdS50ZXN0KHIudmFsdWUpLGg9dHlwZW9mIHIudmFsdWU9PVwic3RyaW5nXCI/ci52YWx1ZTpzKFwidmFsdWVcIik7cmV0dXJuIGg9dGkocik/dG4oaCk6aCwheSYmTmUobCkmJiEoKG89KGk9ci52YWx1ZSk9PW51bGw/dm9pZCAwOmkuZ3JvdXApIT1udWxsJiZvLmdyb3VwJiZ0LmNhbGwoKCk9PnJzKHQpLFwidmFsdWVcIixcImdyb3VwXCIsXCJncm91cFwiKSkmJihoPXEoW1Msb2UoaCldKSksW0UoITEsci5yYXdzLmJlZm9yZSwvW1xccztdL2d1LFwiXCIpLGYudHlwZT09PVwiY3NzLWF0cnVsZVwiJiZmLnZhcmlhYmxlfHxZbih0KT9yLnByb3A6dWUoci5wcm9wKSxsLnN0YXJ0c1dpdGgoXCIvL1wiKT9cIiBcIjpcIlwiLGwsci5leHRlbmR8fHg/XCJcIjpcIiBcIixlLnBhcnNlcj09PVwibGVzc1wiJiZyLmV4dGVuZCYmci5zZWxlY3Rvcj9bXCJleHRlbmQoXCIscyhcInNlbGVjdG9yXCIpLFwiKVwiXTpcIlwiLGgsci5yYXdzLmltcG9ydGFudD9yLnJhd3MuaW1wb3J0YW50LnJlcGxhY2UoL1xccyohXFxzKmltcG9ydGFudC9pdSxcIiAhaW1wb3J0YW50XCIpOnIuaW1wb3J0YW50P1wiICFpbXBvcnRhbnRcIjpcIlwiLHIucmF3cy5zY3NzRGVmYXVsdD9yLnJhd3Muc2Nzc0RlZmF1bHQucmVwbGFjZSgvXFxzKiFkZWZhdWx0L2l1LFwiICFkZWZhdWx0XCIpOnIuc2Nzc0RlZmF1bHQ/XCIgIWRlZmF1bHRcIjpcIlwiLHIucmF3cy5zY3NzR2xvYmFsP3IucmF3cy5zY3NzR2xvYmFsLnJlcGxhY2UoL1xccyohZ2xvYmFsL2l1LFwiICFnbG9iYWxcIik6ci5zY3NzR2xvYmFsP1wiICFnbG9iYWxcIjpcIlwiLHIubm9kZXM/W1wiIHtcIixxKFtELFBlKHQsZSxzKV0pLEQsXCJ9XCJdOlpuKHIpJiYhZi5yYXdzLnNlbWljb2xvbiYmZS5vcmlnaW5hbFRleHRbUihyKS0xXSE9PVwiO1wiP1wiXCI6ZS5fX2lzSFRNTFN0eWxlQXR0cmlidXRlJiZ0LmlzTGFzdD9DdChcIjtcIik6XCI7XCJdfWNhc2VcImNzcy1hdHJ1bGVcIjp7bGV0IGY9dC5wYXJlbnQscD1MdChyKSYmIWYucmF3cy5zZW1pY29sb24mJmUub3JpZ2luYWxUZXh0W1IociktMV0hPT1cIjtcIjtpZihlLnBhcnNlcj09PVwibGVzc1wiKXtpZihyLm1peGluKXJldHVybltzKFwic2VsZWN0b3JcIiksci5pbXBvcnRhbnQ/XCIgIWltcG9ydGFudFwiOlwiXCIscD9cIlwiOlwiO1wiXTtpZihyLmZ1bmN0aW9uKXJldHVybltyLm5hbWUsdHlwZW9mIHIucGFyYW1zPT1cInN0cmluZ1wiP3IucGFyYW1zOnMoXCJwYXJhbXNcIikscD9cIlwiOlwiO1wiXTtpZihyLnZhcmlhYmxlKXJldHVybltcIkBcIixyLm5hbWUsXCI6IFwiLHIudmFsdWU/cyhcInZhbHVlXCIpOlwiXCIsci5yYXdzLmJldHdlZW4udHJpbSgpP3IucmF3cy5iZXR3ZWVuLnRyaW0oKStcIiBcIjpcIlwiLHIubm9kZXM/W1wie1wiLHEoW3Iubm9kZXMubGVuZ3RoPjA/RDpcIlwiLFBlKHQsZSxzKV0pLEQsXCJ9XCJdOlwiXCIscD9cIlwiOlwiO1wiXX1sZXQgbD1yLm5hbWU9PT1cImltcG9ydFwiJiYoKHU9ci5wYXJhbXMpPT1udWxsP3ZvaWQgMDp1LnR5cGUpPT09XCJ2YWx1ZS11bmtub3duXCImJnIucGFyYW1zLnZhbHVlLmVuZHNXaXRoKFwiO1wiKTtyZXR1cm5bXCJAXCIsSnIocil8fHIubmFtZS5lbmRzV2l0aChcIjpcIil8fEx0KHIpP3IubmFtZTp1ZShyLm5hbWUpLHIucGFyYW1zP1tKcihyKT9cIlwiOkx0KHIpP3IucmF3cy5hZnRlck5hbWU9PT1cIlwiP1wiXCI6ci5uYW1lLmVuZHNXaXRoKFwiOlwiKT9cIiBcIjovXlxccypcXG5cXHMqXFxuL3UudGVzdChyLnJhd3MuYWZ0ZXJOYW1lKT9bUyxTXTovXlxccypcXG4vdS50ZXN0KHIucmF3cy5hZnRlck5hbWUpP1M6XCIgXCI6XCIgXCIsdHlwZW9mIHIucGFyYW1zPT1cInN0cmluZ1wiP3IucGFyYW1zOnMoXCJwYXJhbXNcIildOlwiXCIsci5zZWxlY3Rvcj9xKFtcIiBcIixzKFwic2VsZWN0b3JcIildKTpcIlwiLHIudmFsdWU/TChbXCIgXCIscyhcInZhbHVlXCIpLHR0KHIsZSk/cmkocik/XCIgXCI6QTpcIlwiXSk6ci5uYW1lPT09XCJlbHNlXCI/XCIgXCI6XCJcIixyLm5vZGVzP1t0dChyLGUpP1wiXCI6ci5zZWxlY3RvciYmIXIuc2VsZWN0b3Iubm9kZXMmJnR5cGVvZiByLnNlbGVjdG9yLnZhbHVlPT1cInN0cmluZ1wiJiZOZShyLnNlbGVjdG9yLnZhbHVlKXx8IXIuc2VsZWN0b3ImJnR5cGVvZiByLnBhcmFtcz09XCJzdHJpbmdcIiYmTmUoci5wYXJhbXMpP0E6XCIgXCIsXCJ7XCIscShbci5ub2Rlcy5sZW5ndGg+MD9EOlwiXCIsUGUodCxlLHMpXSksRCxcIn1cIl06cHx8bD9cIlwiOlwiO1wiXX1jYXNlXCJtZWRpYS1xdWVyeS1saXN0XCI6e2xldCBmPVtdO3JldHVybiB0LmVhY2goKHtub2RlOnB9KT0+e3AudHlwZT09PVwibWVkaWEtcXVlcnlcIiYmcC52YWx1ZT09PVwiXCJ8fGYucHVzaChzKCkpfSxcIm5vZGVzXCIpLEwocShZKEEsZikpKX1jYXNlXCJtZWRpYS1xdWVyeVwiOnJldHVybltZKFwiIFwiLHQubWFwKHMsXCJub2Rlc1wiKSksdC5pc0xhc3Q/XCJcIjpcIixcIl07Y2FzZVwibWVkaWEtdHlwZVwiOnJldHVybiBtZShWKHIudmFsdWUsZSkpO2Nhc2VcIm1lZGlhLWZlYXR1cmUtZXhwcmVzc2lvblwiOnJldHVybiByLm5vZGVzP1tcIihcIiwuLi50Lm1hcChzLFwibm9kZXNcIiksXCIpXCJdOnIudmFsdWU7Y2FzZVwibWVkaWEtZmVhdHVyZVwiOnJldHVybiB1ZShWKEUoITEsci52YWx1ZSwvICsvZ3UsXCIgXCIpLGUpKTtjYXNlXCJtZWRpYS1jb2xvblwiOnJldHVybltyLnZhbHVlLFwiIFwiXTtjYXNlXCJtZWRpYS12YWx1ZVwiOnJldHVybiBtZShWKHIudmFsdWUsZSkpO2Nhc2VcIm1lZGlhLWtleXdvcmRcIjpyZXR1cm4gVihyLnZhbHVlLGUpO2Nhc2VcIm1lZGlhLXVybFwiOnJldHVybiBWKEUoITEsRSghMSxyLnZhbHVlLC9edXJsXFwoXFxzKy9naXUsXCJ1cmwoXCIpLC9cXHMrXFwpJC9ndSxcIilcIiksZSk7Y2FzZVwibWVkaWEtdW5rbm93blwiOnJldHVybiByLnZhbHVlO2Nhc2VcInNlbGVjdG9yLXJvb3RcIjpyZXR1cm4gTChbT2UodCxcImN1c3RvbS1zZWxlY3RvclwiKT9bdC5maW5kQW5jZXN0b3IoZj0+Zi50eXBlPT09XCJjc3MtYXRydWxlXCIpLmN1c3RvbVNlbGVjdG9yLEFdOlwiXCIsWShbXCIsXCIsT2UodCxbXCJleHRlbmRcIixcImN1c3RvbS1zZWxlY3RvclwiLFwibmVzdFwiXSk/QTpTXSx0Lm1hcChzLFwibm9kZXNcIikpXSk7Y2FzZVwic2VsZWN0b3Itc2VsZWN0b3JcIjp7bGV0IGY9ci5ub2Rlcy5sZW5ndGg+MTtyZXR1cm4gTCgoZj9xOnA9PnApKHQubWFwKHMsXCJub2Rlc1wiKSkpfWNhc2VcInNlbGVjdG9yLWNvbW1lbnRcIjpyZXR1cm4gci52YWx1ZTtjYXNlXCJzZWxlY3Rvci1zdHJpbmdcIjpyZXR1cm4gVihyLnZhbHVlLGUpO2Nhc2VcInNlbGVjdG9yLXRhZ1wiOnJldHVybltyLm5hbWVzcGFjZT9bci5uYW1lc3BhY2U9PT0hMD9cIlwiOnIubmFtZXNwYWNlLnRyaW0oKSxcInxcIl06XCJcIiwoKGE9dC5wcmV2aW91cyk9PW51bGw/dm9pZCAwOmEudHlwZSk9PT1cInNlbGVjdG9yLW5lc3RpbmdcIj9yLnZhbHVlOm1lKFduKHQsci52YWx1ZSk/ci52YWx1ZS50b0xvd2VyQ2FzZSgpOnIudmFsdWUpXTtjYXNlXCJzZWxlY3Rvci1pZFwiOnJldHVybltcIiNcIixyLnZhbHVlXTtjYXNlXCJzZWxlY3Rvci1jbGFzc1wiOnJldHVybltcIi5cIixtZShWKHIudmFsdWUsZSkpXTtjYXNlXCJzZWxlY3Rvci1hdHRyaWJ1dGVcIjpyZXR1cm5bXCJbXCIsci5uYW1lc3BhY2U/W3IubmFtZXNwYWNlPT09ITA/XCJcIjpyLm5hbWVzcGFjZS50cmltKCksXCJ8XCJdOlwiXCIsci5hdHRyaWJ1dGUudHJpbSgpLHIub3BlcmF0b3I/P1wiXCIsci52YWx1ZT9maShWKHIudmFsdWUudHJpbSgpLGUpLGUpOlwiXCIsci5pbnNlbnNpdGl2ZT9cIiBpXCI6XCJcIixcIl1cIl07Y2FzZVwic2VsZWN0b3ItY29tYmluYXRvclwiOntpZihyLnZhbHVlPT09XCIrXCJ8fHIudmFsdWU9PT1cIj5cInx8ci52YWx1ZT09PVwiflwifHxyLnZhbHVlPT09XCI+Pj5cIil7bGV0IGw9dC5wYXJlbnQ7cmV0dXJuW2wudHlwZT09PVwic2VsZWN0b3Itc2VsZWN0b3JcIiYmbC5ub2Rlc1swXT09PXI/XCJcIjpBLHIudmFsdWUsdC5pc0xhc3Q/XCJcIjpcIiBcIl19bGV0IGY9ci52YWx1ZS50cmltKCkuc3RhcnRzV2l0aChcIihcIik/QTpcIlwiLHA9bWUoVihyLnZhbHVlLnRyaW0oKSxlKSl8fEE7cmV0dXJuW2YscF19Y2FzZVwic2VsZWN0b3ItdW5pdmVyc2FsXCI6cmV0dXJuW3IubmFtZXNwYWNlP1tyLm5hbWVzcGFjZT09PSEwP1wiXCI6ci5uYW1lc3BhY2UudHJpbSgpLFwifFwiXTpcIlwiLHIudmFsdWVdO2Nhc2VcInNlbGVjdG9yLXBzZXVkb1wiOnJldHVyblt1ZShyLnZhbHVlKSxhZShyLm5vZGVzKT9MKFtcIihcIixxKFtELFkoW1wiLFwiLEFdLHQubWFwKHMsXCJub2Rlc1wiKSldKSxELFwiKVwiXSk6XCJcIl07Y2FzZVwic2VsZWN0b3ItbmVzdGluZ1wiOnJldHVybiByLnZhbHVlO2Nhc2VcInNlbGVjdG9yLXVua25vd25cIjp7bGV0IGY9dC5maW5kQW5jZXN0b3IoeT0+eS50eXBlPT09XCJjc3MtcnVsZVwiKTtpZihmIT1udWxsJiZmLmlzU0NTU05lc3RlclByb3BlcnR5KXJldHVybiBtZShWKHVlKHIudmFsdWUpLGUpKTtsZXQgcD10LnBhcmVudDtpZigoYz1wLnJhd3MpIT1udWxsJiZjLnNlbGVjdG9yKXtsZXQgeT1QKHApLHg9eStwLnJhd3Muc2VsZWN0b3IubGVuZ3RoO3JldHVybiBlLm9yaWdpbmFsVGV4dC5zbGljZSh5LHgpLnRyaW0oKX1sZXQgbD10LmdyYW5kcGFyZW50O2lmKHAudHlwZT09PVwidmFsdWUtcGFyZW5fZ3JvdXBcIiYmKGw9PW51bGw/dm9pZCAwOmwudHlwZSk9PT1cInZhbHVlLWZ1bmNcIiYmbC52YWx1ZT09PVwic2VsZWN0b3JcIil7bGV0IHk9UihwLm9wZW4pKzEseD1QKHAuY2xvc2UpLGg9ZS5vcmlnaW5hbFRleHQuc2xpY2UoeSx4KS50cmltKCk7cmV0dXJuIE5lKGgpP1tLZSxoXTpofXJldHVybiByLnZhbHVlfWNhc2VcInZhbHVlLXZhbHVlXCI6Y2FzZVwidmFsdWUtcm9vdFwiOnJldHVybiBzKFwiZ3JvdXBcIik7Y2FzZVwidmFsdWUtY29tbWVudFwiOnJldHVybiBlLm9yaWdpbmFsVGV4dC5zbGljZShQKHIpLFIocikpO2Nhc2VcInZhbHVlLWNvbW1hX2dyb3VwXCI6cmV0dXJuIGFpKHQsZSxzKTtjYXNlXCJ2YWx1ZS1wYXJlbl9ncm91cFwiOnJldHVybiBtaSh0LGUscyk7Y2FzZVwidmFsdWUtZnVuY1wiOnJldHVybltyLnZhbHVlLE9lKHQsXCJzdXBwb3J0c1wiKSYmbmkocik/XCIgXCI6XCJcIixzKFwiZ3JvdXBcIildO2Nhc2VcInZhbHVlLXBhcmVuXCI6cmV0dXJuIHIudmFsdWU7Y2FzZVwidmFsdWUtbnVtYmVyXCI6cmV0dXJuW3RzKHIudmFsdWUpLGxpKHIudW5pdCldO2Nhc2VcInZhbHVlLW9wZXJhdG9yXCI6cmV0dXJuIHIudmFsdWU7Y2FzZVwidmFsdWUtd29yZFwiOnJldHVybiByLmlzQ29sb3ImJnIuaXNIZXh8fCRuKHIudmFsdWUpP3IudmFsdWUudG9Mb3dlckNhc2UoKTpyLnZhbHVlO2Nhc2VcInZhbHVlLWNvbG9uXCI6e2xldHtwcmV2aW91czpmfT10O3JldHVybiBMKFtyLnZhbHVlLHR5cGVvZihmPT1udWxsP3ZvaWQgMDpmLnZhbHVlKT09XCJzdHJpbmdcIiYmZi52YWx1ZS5lbmRzV2l0aChcIlxcXFxcIil8fENlKHQsXCJ1cmxcIik/XCJcIjpBXSl9Y2FzZVwidmFsdWUtc3RyaW5nXCI6cmV0dXJuIEF0KHIucmF3cy5xdW90ZStyLnZhbHVlK3IucmF3cy5xdW90ZSxlKTtjYXNlXCJ2YWx1ZS1hdHdvcmRcIjpyZXR1cm5bXCJAXCIsci52YWx1ZV07Y2FzZVwidmFsdWUtdW5pY29kZS1yYW5nZVwiOnJldHVybiByLnZhbHVlO2Nhc2VcInZhbHVlLXVua25vd25cIjpyZXR1cm4gci52YWx1ZTtjYXNlXCJ2YWx1ZS1jb21tYVwiOmRlZmF1bHQ6dGhyb3cgbmV3IHBuKHIsXCJQb3N0Q1NTXCIpfX12YXIgeWM9e3ByaW50Om1jLGVtYmVkOmduLGluc2VydFByYWdtYTpVbixtYXNzYWdlQXN0Tm9kZTpkbixnZXRWaXNpdG9yS2V5czp4bn0seWk9eWM7dmFyIGdpPVt7bGluZ3Vpc3RMYW5ndWFnZUlkOjUwLG5hbWU6XCJDU1NcIix0eXBlOlwibWFya3VwXCIsdG1TY29wZTpcInNvdXJjZS5jc3NcIixhY2VNb2RlOlwiY3NzXCIsY29kZW1pcnJvck1vZGU6XCJjc3NcIixjb2RlbWlycm9yTWltZVR5cGU6XCJ0ZXh0L2Nzc1wiLGNvbG9yOlwiIzU2M2Q3Y1wiLGV4dGVuc2lvbnM6W1wiLmNzc1wiLFwiLnd4c3NcIl0scGFyc2VyczpbXCJjc3NcIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1wiY3NzXCJdfSx7bGluZ3Vpc3RMYW5ndWFnZUlkOjI2Mjc2NDQzNyxuYW1lOlwiUG9zdENTU1wiLHR5cGU6XCJtYXJrdXBcIixjb2xvcjpcIiNkYzNhMGNcIix0bVNjb3BlOlwic291cmNlLnBvc3Rjc3NcIixncm91cDpcIkNTU1wiLGV4dGVuc2lvbnM6W1wiLnBjc3NcIixcIi5wb3N0Y3NzXCJdLGFjZU1vZGU6XCJ0ZXh0XCIscGFyc2VyczpbXCJjc3NcIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1wicG9zdGNzc1wiXX0se2xpbmd1aXN0TGFuZ3VhZ2VJZDoxOTgsbmFtZTpcIkxlc3NcIix0eXBlOlwibWFya3VwXCIsY29sb3I6XCIjMWQzNjVkXCIsYWxpYXNlczpbXCJsZXNzLWNzc1wiXSxleHRlbnNpb25zOltcIi5sZXNzXCJdLHRtU2NvcGU6XCJzb3VyY2UuY3NzLmxlc3NcIixhY2VNb2RlOlwibGVzc1wiLGNvZGVtaXJyb3JNb2RlOlwiY3NzXCIsY29kZW1pcnJvck1pbWVUeXBlOlwidGV4dC9jc3NcIixwYXJzZXJzOltcImxlc3NcIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1wibGVzc1wiXX0se2xpbmd1aXN0TGFuZ3VhZ2VJZDozMjksbmFtZTpcIlNDU1NcIix0eXBlOlwibWFya3VwXCIsY29sb3I6XCIjYzY1MzhjXCIsdG1TY29wZTpcInNvdXJjZS5jc3Muc2Nzc1wiLGFjZU1vZGU6XCJzY3NzXCIsY29kZW1pcnJvck1vZGU6XCJjc3NcIixjb2RlbWlycm9yTWltZVR5cGU6XCJ0ZXh0L3gtc2Nzc1wiLGV4dGVuc2lvbnM6W1wiLnNjc3NcIl0scGFyc2VyczpbXCJzY3NzXCJdLHZzY29kZUxhbmd1YWdlSWRzOltcInNjc3NcIl19XTt2YXIgd2k9e2JyYWNrZXRTcGFjaW5nOntjYXRlZ29yeTpcIkNvbW1vblwiLHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMCxkZXNjcmlwdGlvbjpcIlByaW50IHNwYWNlcyBiZXR3ZWVuIGJyYWNrZXRzLlwiLG9wcG9zaXRlRGVzY3JpcHRpb246XCJEbyBub3QgcHJpbnQgc3BhY2VzIGJldHdlZW4gYnJhY2tldHMuXCJ9LG9iamVjdFdyYXA6e2NhdGVnb3J5OlwiQ29tbW9uXCIsdHlwZTpcImNob2ljZVwiLGRlZmF1bHQ6XCJwcmVzZXJ2ZVwiLGRlc2NyaXB0aW9uOlwiSG93IHRvIHdyYXAgb2JqZWN0IGxpdGVyYWxzLlwiLGNob2ljZXM6W3t2YWx1ZTpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJLZWVwIGFzIG11bHRpLWxpbmUsIGlmIHRoZXJlIGlzIGEgbmV3bGluZSBiZXR3ZWVuIHRoZSBvcGVuaW5nIGJyYWNlIGFuZCBmaXJzdCBwcm9wZXJ0eS5cIn0se3ZhbHVlOlwiY29sbGFwc2VcIixkZXNjcmlwdGlvbjpcIkZpdCB0byBhIHNpbmdsZSBsaW5lIHdoZW4gcG9zc2libGUuXCJ9XX0sc2luZ2xlUXVvdGU6e2NhdGVnb3J5OlwiQ29tbW9uXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiExLGRlc2NyaXB0aW9uOlwiVXNlIHNpbmdsZSBxdW90ZXMgaW5zdGVhZCBvZiBkb3VibGUgcXVvdGVzLlwifSxwcm9zZVdyYXA6e2NhdGVnb3J5OlwiQ29tbW9uXCIsdHlwZTpcImNob2ljZVwiLGRlZmF1bHQ6XCJwcmVzZXJ2ZVwiLGRlc2NyaXB0aW9uOlwiSG93IHRvIHdyYXAgcHJvc2UuXCIsY2hvaWNlczpbe3ZhbHVlOlwiYWx3YXlzXCIsZGVzY3JpcHRpb246XCJXcmFwIHByb3NlIGlmIGl0IGV4Y2VlZHMgdGhlIHByaW50IHdpZHRoLlwifSx7dmFsdWU6XCJuZXZlclwiLGRlc2NyaXB0aW9uOlwiRG8gbm90IHdyYXAgcHJvc2UuXCJ9LHt2YWx1ZTpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJXcmFwIHByb3NlIGFzLWlzLlwifV19LGJyYWNrZXRTYW1lTGluZTp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJQdXQgPiBvZiBvcGVuaW5nIHRhZ3Mgb24gdGhlIGxhc3QgbGluZSBpbnN0ZWFkIG9mIG9uIGEgbmV3IGxpbmUuXCJ9LHNpbmdsZUF0dHJpYnV0ZVBlckxpbmU6e2NhdGVnb3J5OlwiQ29tbW9uXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiExLGRlc2NyaXB0aW9uOlwiRW5mb3JjZSBzaW5nbGUgYXR0cmlidXRlIHBlciBsaW5lIGluIEhUTUwsIFZ1ZSBhbmQgSlNYLlwifX07dmFyIGdjPXtzaW5nbGVRdW90ZTp3aS5zaW5nbGVRdW90ZX0sdmk9Z2M7dmFyIEpzPXt9O2VuKEpzLHtjc3M6KCk9Pk55LGxlc3M6KCk9PlB5LHNjc3M6KCk9PlJ5fSk7dmFyIG9sPXhlKGd0KCksMSksYWw9eGUoVG8oKSwxKSx1bD14ZShvYSgpLDEpO2Z1bmN0aW9uIHNwKHQsZSl7bGV0IHM9bmV3IFN5bnRheEVycm9yKHQrXCIgKFwiK2UubG9jLnN0YXJ0LmxpbmUrXCI6XCIrZS5sb2Muc3RhcnQuY29sdW1uK1wiKVwiKTtyZXR1cm4gT2JqZWN0LmFzc2lnbihzLGUpfXZhciBhYT1zcDt2YXIgZGE9eGUoaGEoKSwxKTtmdW5jdGlvbiBYKHQsZSxzKXtpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcIil7ZGVsZXRlIHQucGFyZW50O2ZvcihsZXQgciBpbiB0KVgodFtyXSxlLHMpLHI9PT1cInR5cGVcIiYmdHlwZW9mIHRbcl09PVwic3RyaW5nXCImJiF0W3JdLnN0YXJ0c1dpdGgoZSkmJighc3x8IXMudGVzdCh0W3JdKSkmJih0W3JdPWUrdFtyXSl9cmV0dXJuIHR9ZnVuY3Rpb24gTHModCl7aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCIpe2RlbGV0ZSB0LnBhcmVudDtmb3IobGV0IGUgaW4gdClMcyh0W2VdKTshQXJyYXkuaXNBcnJheSh0KSYmdC52YWx1ZSYmIXQudHlwZSYmKHQudHlwZT1cInVua25vd25cIil9cmV0dXJuIHR9dmFyIG1wPWRhLmRlZmF1bHQuZGVmYXVsdDtmdW5jdGlvbiB5cCh0KXtsZXQgZTt0cnl7ZT1tcCh0KX1jYXRjaHtyZXR1cm57dHlwZTpcInNlbGVjdG9yLXVua25vd25cIix2YWx1ZTp0fX1yZXR1cm4gWChMcyhlKSxcIm1lZGlhLVwiKX12YXIgbWE9eXA7dmFyIGx1PXhlKHV1KCksMSk7ZnVuY3Rpb24gTm0odCl7aWYoL1xcL1xcL3xcXC9cXCovdS50ZXN0KHQpKXJldHVybnt0eXBlOlwic2VsZWN0b3ItdW5rbm93blwiLHZhbHVlOnQudHJpbSgpfTtsZXQgZTt0cnl7bmV3IGx1LmRlZmF1bHQocz0+e2U9c30pLnByb2Nlc3ModCl9Y2F0Y2h7cmV0dXJue3R5cGU6XCJzZWxlY3Rvci11bmtub3duXCIsdmFsdWU6dH19cmV0dXJuIFgoZSxcInNlbGVjdG9yLVwiKX12YXIgZWU9Tm07dmFyIHJsPXhlKFF1KCksMSk7dmFyIHd5PXQ9Pntmb3IoO3QucGFyZW50Oyl0PXQucGFyZW50O3JldHVybiB0fSxVcj13eTtmdW5jdGlvbiB2eSh0KXtyZXR1cm4gVXIodCkudGV4dC5zbGljZSh0Lmdyb3VwLm9wZW4uc291cmNlSW5kZXgrMSx0Lmdyb3VwLmNsb3NlLnNvdXJjZUluZGV4KS50cmltKCl9dmFyIEp1PXZ5O2Z1bmN0aW9uIHh5KHQpe2lmKGFlKHQpKXtmb3IobGV0IGU9dC5sZW5ndGgtMTtlPjA7ZS0tKWlmKHRbZV0udHlwZT09PVwid29yZFwiJiZ0W2VdLnZhbHVlPT09XCJ7XCImJnRbZS0xXS50eXBlPT09XCJ3b3JkXCImJnRbZS0xXS52YWx1ZS5lbmRzV2l0aChcIiNcIikpcmV0dXJuITB9cmV0dXJuITF9dmFyIFh1PXh5O2Z1bmN0aW9uIGJ5KHQpe3JldHVybiB0LnNvbWUoZT0+ZS50eXBlPT09XCJzdHJpbmdcInx8ZS50eXBlPT09XCJmdW5jXCImJiFlLnZhbHVlLmVuZHNXaXRoKFwiXFxcXFwiKSl9dmFyIFp1PWJ5O2Z1bmN0aW9uIF95KHQsZSl7cmV0dXJuISEoZS5wYXJzZXI9PT1cInNjc3NcIiYmKHQ9PW51bGw/dm9pZCAwOnQudHlwZSk9PT1cIndvcmRcIiYmdC52YWx1ZS5zdGFydHNXaXRoKFwiJFwiKSl9dmFyIGVsPV95O3ZhciB0bD10PT50LnR5cGU9PT1cInBhcmVuXCImJnQudmFsdWU9PT1cIilcIjtmdW5jdGlvbiBFeSh0LGUpe3ZhciBhO2xldHtub2RlczpzfT10LHI9e29wZW46bnVsbCxjbG9zZTpudWxsLGdyb3VwczpbXSx0eXBlOlwicGFyZW5fZ3JvdXBcIn0sbj1bcl0saT1yLG89e2dyb3VwczpbXSx0eXBlOlwiY29tbWFfZ3JvdXBcIn0sdT1bb107Zm9yKGxldCBjPTA7YzxzLmxlbmd0aDsrK2Mpe2xldCBmPXNbY107aWYoZS5wYXJzZXI9PT1cInNjc3NcIiYmZi50eXBlPT09XCJudW1iZXJcIiYmZi51bml0PT09XCIuLlwiJiZmLnZhbHVlLmVuZHNXaXRoKFwiLlwiKSYmKGYudmFsdWU9Zi52YWx1ZS5zbGljZSgwLC0xKSxmLnVuaXQ9XCIuLi5cIiksZi50eXBlPT09XCJmdW5jXCImJmYudmFsdWU9PT1cInNlbGVjdG9yXCImJihmLmdyb3VwLmdyb3Vwcz1bZWUoVXIodCkudGV4dC5zbGljZShmLmdyb3VwLm9wZW4uc291cmNlSW5kZXgrMSxmLmdyb3VwLmNsb3NlLnNvdXJjZUluZGV4KSldKSxmLnR5cGU9PT1cImZ1bmNcIiYmZi52YWx1ZT09PVwidXJsXCIpe2xldCBwPSgoYT1mLmdyb3VwKT09bnVsbD92b2lkIDA6YS5ncm91cHMpPz9bXSxsPVtdO2ZvcihsZXQgeT0wO3k8cC5sZW5ndGg7eSsrKXtsZXQgeD1wW3ldO3gudHlwZT09PVwiY29tbWFfZ3JvdXBcIj9sPVsuLi5sLC4uLnguZ3JvdXBzXTpsLnB1c2goeCl9KFh1KGwpfHwhWnUobCkmJiFlbChsWzBdLGUpKSYmKGYuZ3JvdXAuZ3JvdXBzPVtKdShmKV0pfWlmKGYudHlwZT09PVwicGFyZW5cIiYmZi52YWx1ZT09PVwiKFwiKXI9e29wZW46ZixjbG9zZTpudWxsLGdyb3VwczpbXSx0eXBlOlwicGFyZW5fZ3JvdXBcIn0sbi5wdXNoKHIpLG89e2dyb3VwczpbXSx0eXBlOlwiY29tbWFfZ3JvdXBcIn0sdS5wdXNoKG8pO2Vsc2UgaWYodGwoZikpe2lmKG8uZ3JvdXBzLmxlbmd0aD4wJiZyLmdyb3Vwcy5wdXNoKG8pLHIuY2xvc2U9Zix1Lmxlbmd0aD09PTEpdGhyb3cgbmV3IEVycm9yKFwiVW5iYWxhbmNlZCBwYXJlbnRoZXNpc1wiKTt1LnBvcCgpLG89JCghMSx1LC0xKSxvLmdyb3Vwcy5wdXNoKHIpLG4ucG9wKCkscj0kKCExLG4sLTEpfWVsc2UgaWYoZi50eXBlPT09XCJjb21tYVwiKXtpZihjPT09cy5sZW5ndGgtMyYmc1tjKzFdLnR5cGU9PT1cImNvbW1lbnRcIiYmdGwoc1tjKzJdKSljb250aW51ZTtyLmdyb3Vwcy5wdXNoKG8pLG89e2dyb3VwczpbXSx0eXBlOlwiY29tbWFfZ3JvdXBcIn0sdVt1Lmxlbmd0aC0xXT1vfWVsc2Ugby5ncm91cHMucHVzaChmKX1yZXR1cm4gby5ncm91cHMubGVuZ3RoPjAmJnIuZ3JvdXBzLnB1c2gobyksaX1mdW5jdGlvbiBGcih0KXtyZXR1cm4gdC50eXBlPT09XCJwYXJlbl9ncm91cFwiJiYhdC5vcGVuJiYhdC5jbG9zZSYmdC5ncm91cHMubGVuZ3RoPT09MXx8dC50eXBlPT09XCJjb21tYV9ncm91cFwiJiZ0Lmdyb3Vwcy5sZW5ndGg9PT0xP0ZyKHQuZ3JvdXBzWzBdKTp0LnR5cGU9PT1cInBhcmVuX2dyb3VwXCJ8fHQudHlwZT09PVwiY29tbWFfZ3JvdXBcIj97Li4udCxncm91cHM6dC5ncm91cHMubWFwKEZyKX06dH1mdW5jdGlvbiBzbCh0LGUpe2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwiKWZvcihsZXQgcyBpbiB0KXMhPT1cInBhcmVudFwiJiYoc2wodFtzXSxlKSxzPT09XCJub2Rlc1wiJiYodC5ncm91cD1GcihFeSh0LGUpKSxkZWxldGUgdFtzXSkpO3JldHVybiB0fWZ1bmN0aW9uIGt5KHQsZSl7aWYoZS5wYXJzZXI9PT1cImxlc3NcIiYmdC5zdGFydHNXaXRoKFwifmBcIikpcmV0dXJue3R5cGU6XCJ2YWx1ZS11bmtub3duXCIsdmFsdWU6dH07bGV0IHM9bnVsbDt0cnl7cz1uZXcgcmwuZGVmYXVsdCh0LHtsb29zZTohMH0pLnBhcnNlKCl9Y2F0Y2h7cmV0dXJue3R5cGU6XCJ2YWx1ZS11bmtub3duXCIsdmFsdWU6dH19cy50ZXh0PXQ7bGV0IHI9c2wocyxlKTtyZXR1cm4gWChyLFwidmFsdWUtXCIsL15zZWxlY3Rvci0vdSl9dmFyIHBlPWt5O3ZhciBTeT1uZXcgU2V0KFtcImltcG9ydFwiLFwidXNlXCIsXCJmb3J3YXJkXCJdKTtmdW5jdGlvbiBUeSh0KXtyZXR1cm4gU3kuaGFzKHQpfXZhciBubD1UeTtmdW5jdGlvbiBDeSh0LGUpe3JldHVybiBlLnBhcnNlciE9PVwic2Nzc1wifHwhdC5zZWxlY3Rvcj8hMTp0LnNlbGVjdG9yLnJlcGxhY2UoL1xcL1xcKi4qP1xcKlxcLy91LFwiXCIpLnJlcGxhY2UoL1xcL1xcLy4qXFxuL3UsXCJcIikudHJpbSgpLmVuZHNXaXRoKFwiOlwiKX12YXIgaWw9Q3k7dmFyIE95PS8oXFxzKikoIWRlZmF1bHQpLiokL3UsQXk9LyhcXHMqKSghZ2xvYmFsKS4qJC91O2Z1bmN0aW9uIGxsKHQsZSl7dmFyIHMscjtpZih0JiZ0eXBlb2YgdD09XCJvYmplY3RcIil7ZGVsZXRlIHQucGFyZW50O2ZvcihsZXQgdSBpbiB0KWxsKHRbdV0sZSk7aWYoIXQudHlwZSlyZXR1cm4gdDtpZih0LnJhd3M/Pyh0LnJhd3M9e30pLHQudHlwZT09PVwiY3NzLWRlY2xcIiYmdHlwZW9mIHQucHJvcD09XCJzdHJpbmdcIiYmdC5wcm9wLnN0YXJ0c1dpdGgoXCItLVwiKSYmdHlwZW9mIHQudmFsdWU9PVwic3RyaW5nXCImJnQudmFsdWUuc3RhcnRzV2l0aChcIntcIikpe2xldCB1O2lmKHQudmFsdWUudHJpbUVuZCgpLmVuZHNXaXRoKFwifVwiKSl7bGV0IGE9ZS5vcmlnaW5hbFRleHQuc2xpY2UoMCx0LnNvdXJjZS5zdGFydC5vZmZzZXQpLGM9XCJhXCIucmVwZWF0KHQucHJvcC5sZW5ndGgpK2Uub3JpZ2luYWxUZXh0LnNsaWNlKHQuc291cmNlLnN0YXJ0Lm9mZnNldCt0LnByb3AubGVuZ3RoLHQuc291cmNlLmVuZC5vZmZzZXQpLGY9RSghMSxhLC9bXlxcbl0vZ3UsXCIgXCIpK2MscDtlLnBhcnNlcj09PVwic2Nzc1wiP3A9cGw6ZS5wYXJzZXI9PT1cImxlc3NcIj9wPWZsOnA9Y2w7bGV0IGw7dHJ5e2w9cChmLHsuLi5lfSl9Y2F0Y2h7fSgocz1sPT1udWxsP3ZvaWQgMDpsLm5vZGVzKT09bnVsbD92b2lkIDA6cy5sZW5ndGgpPT09MSYmbC5ub2Rlc1swXS50eXBlPT09XCJjc3MtcnVsZVwiJiYodT1sLm5vZGVzWzBdLm5vZGVzKX1yZXR1cm4gdT90LnZhbHVlPXt0eXBlOlwiY3NzLXJ1bGVcIixub2Rlczp1fTp0LnZhbHVlPXt0eXBlOlwidmFsdWUtdW5rbm93blwiLHZhbHVlOnQucmF3cy52YWx1ZS5yYXd9LHR9bGV0IG49XCJcIjt0eXBlb2YgdC5zZWxlY3Rvcj09XCJzdHJpbmdcIiYmKG49dC5yYXdzLnNlbGVjdG9yP3QucmF3cy5zZWxlY3Rvci5zY3NzPz90LnJhd3Muc2VsZWN0b3IucmF3OnQuc2VsZWN0b3IsdC5yYXdzLmJldHdlZW4mJnQucmF3cy5iZXR3ZWVuLnRyaW0oKS5sZW5ndGg+MCYmKG4rPXQucmF3cy5iZXR3ZWVuKSx0LnJhd3Muc2VsZWN0b3I9bik7bGV0IGk9XCJcIjt0eXBlb2YgdC52YWx1ZT09XCJzdHJpbmdcIiYmKGk9dC5yYXdzLnZhbHVlP3QucmF3cy52YWx1ZS5zY3NzPz90LnJhd3MudmFsdWUucmF3OnQudmFsdWUsdC5yYXdzLnZhbHVlPWkudHJpbSgpKTtsZXQgbz1cIlwiO2lmKHR5cGVvZiB0LnBhcmFtcz09XCJzdHJpbmdcIiYmKG89dC5yYXdzLnBhcmFtcz90LnJhd3MucGFyYW1zLnNjc3M/P3QucmF3cy5wYXJhbXMucmF3OnQucGFyYW1zLHQucmF3cy5hZnRlck5hbWUmJnQucmF3cy5hZnRlck5hbWUudHJpbSgpLmxlbmd0aD4wJiYobz10LnJhd3MuYWZ0ZXJOYW1lK28pLHQucmF3cy5iZXR3ZWVuJiZ0LnJhd3MuYmV0d2Vlbi50cmltKCkubGVuZ3RoPjAmJihvPW8rdC5yYXdzLmJldHdlZW4pLG89by50cmltKCksdC5yYXdzLnBhcmFtcz1vKSxuLnRyaW0oKS5sZW5ndGg+MClyZXR1cm4gbi5zdGFydHNXaXRoKFwiQFwiKSYmbi5lbmRzV2l0aChcIjpcIik/dDp0Lm1peGluPyh0LnNlbGVjdG9yPXBlKG4sZSksdCk6KGlsKHQsZSkmJih0LmlzU0NTU05lc3RlclByb3BlcnR5PSEwKSx0LnNlbGVjdG9yPWVlKG4pLHQpO2lmKGkudHJpbSgpLmxlbmd0aD4wKXtsZXQgdT1pLm1hdGNoKE95KTt1JiYoaT1pLnNsaWNlKDAsdS5pbmRleCksdC5zY3NzRGVmYXVsdD0hMCx1WzBdLnRyaW0oKSE9PVwiIWRlZmF1bHRcIiYmKHQucmF3cy5zY3NzRGVmYXVsdD11WzBdKSk7bGV0IGE9aS5tYXRjaChBeSk7aWYoYSYmKGk9aS5zbGljZSgwLGEuaW5kZXgpLHQuc2Nzc0dsb2JhbD0hMCxhWzBdLnRyaW0oKSE9PVwiIWdsb2JhbFwiJiYodC5yYXdzLnNjc3NHbG9iYWw9YVswXSkpLGkuc3RhcnRzV2l0aChcInByb2dpZDpcIikpcmV0dXJue3R5cGU6XCJ2YWx1ZS11bmtub3duXCIsdmFsdWU6aX07dC52YWx1ZT1wZShpLGUpfWlmKGUucGFyc2VyPT09XCJsZXNzXCImJnQudHlwZT09PVwiY3NzLWRlY2xcIiYmaS5zdGFydHNXaXRoKFwiZXh0ZW5kKFwiKSYmKHQuZXh0ZW5kfHwodC5leHRlbmQ9dC5yYXdzLmJldHdlZW49PT1cIjpcIiksdC5leHRlbmQmJiF0LnNlbGVjdG9yJiYoZGVsZXRlIHQudmFsdWUsdC5zZWxlY3Rvcj1lZShpLnNsaWNlKDcsLTEpKSkpLHQudHlwZT09PVwiY3NzLWF0cnVsZVwiKXtpZihlLnBhcnNlcj09PVwibGVzc1wiKXtpZih0Lm1peGluKXtsZXQgdT10LnJhd3MuaWRlbnRpZmllcit0Lm5hbWUrdC5yYXdzLmFmdGVyTmFtZSt0LnJhd3MucGFyYW1zO3JldHVybiB0LnNlbGVjdG9yPWVlKHUpLGRlbGV0ZSB0LnBhcmFtcyx0fWlmKHQuZnVuY3Rpb24pcmV0dXJuIHR9aWYoZS5wYXJzZXI9PT1cImNzc1wiJiZ0Lm5hbWU9PT1cImN1c3RvbS1zZWxlY3RvclwiKXtsZXQgdT10LnBhcmFtcy5tYXRjaCgvOi0tXFxTK1xccysvdSlbMF0udHJpbSgpO3JldHVybiB0LmN1c3RvbVNlbGVjdG9yPXUsdC5zZWxlY3Rvcj1lZSh0LnBhcmFtcy5zbGljZSh1Lmxlbmd0aCkudHJpbSgpKSxkZWxldGUgdC5wYXJhbXMsdH1pZihlLnBhcnNlcj09PVwibGVzc1wiKXtpZih0Lm5hbWUuaW5jbHVkZXMoXCI6XCIpJiYhdC5wYXJhbXMpe3QudmFyaWFibGU9ITA7bGV0IHU9dC5uYW1lLnNwbGl0KFwiOlwiKTt0Lm5hbWU9dVswXSx0LnZhbHVlPXBlKHUuc2xpY2UoMSkuam9pbihcIjpcIiksZSl9aWYoIVtcInBhZ2VcIixcIm5lc3RcIixcImtleWZyYW1lc1wiXS5pbmNsdWRlcyh0Lm5hbWUpJiYoKHI9dC5wYXJhbXMpPT1udWxsP3ZvaWQgMDpyWzBdKT09PVwiOlwiKXt0LnZhcmlhYmxlPSEwO2xldCB1PXQucGFyYW1zLnNsaWNlKDEpO3UmJih0LnZhbHVlPXBlKHUsZSkpLHQucmF3cy5hZnRlck5hbWUrPVwiOlwifWlmKHQudmFyaWFibGUpcmV0dXJuIGRlbGV0ZSB0LnBhcmFtcyx0LnZhbHVlfHxkZWxldGUgdC52YWx1ZSx0fX1pZih0LnR5cGU9PT1cImNzcy1hdHJ1bGVcIiYmby5sZW5ndGg+MCl7bGV0e25hbWU6dX09dCxhPXQubmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiB1PT09XCJ3YXJuXCJ8fHU9PT1cImVycm9yXCI/KHQucGFyYW1zPXt0eXBlOlwibWVkaWEtdW5rbm93blwiLHZhbHVlOm99LHQpOnU9PT1cImV4dGVuZFwifHx1PT09XCJuZXN0XCI/KHQuc2VsZWN0b3I9ZWUobyksZGVsZXRlIHQucGFyYW1zLHQpOnU9PT1cImF0LXJvb3RcIj8oL15cXChcXHMqKD86d2l0aG91dHx3aXRoKVxccyo6LitcXCkkL3N1LnRlc3Qobyk/dC5wYXJhbXM9cGUobyxlKToodC5zZWxlY3Rvcj1lZShvKSxkZWxldGUgdC5wYXJhbXMpLHQpOm5sKGEpPyh0LmltcG9ydD0hMCxkZWxldGUgdC5maWxlbmFtZSx0LnBhcmFtcz1wZShvLGUpLHQpOltcIm5hbWVzcGFjZVwiLFwic3VwcG9ydHNcIixcImlmXCIsXCJlbHNlXCIsXCJmb3JcIixcImVhY2hcIixcIndoaWxlXCIsXCJkZWJ1Z1wiLFwibWl4aW5cIixcImluY2x1ZGVcIixcImZ1bmN0aW9uXCIsXCJyZXR1cm5cIixcImRlZmluZS1taXhpblwiLFwiYWRkLW1peGluXCJdLmluY2x1ZGVzKHUpPyhvPW8ucmVwbGFjZSgvKFxcJFxcUys/KShcXHMrKT9cXC57M30vdSxcIiQxLi4uJDJcIiksbz1vLnJlcGxhY2UoL14oPyFpZikoXFxTKykoXFxzKylcXCgvdSxcIiQxKCQyXCIpLHQudmFsdWU9cGUobyxlKSxkZWxldGUgdC5wYXJhbXMsdCk6W1wibWVkaWFcIixcImN1c3RvbS1tZWRpYVwiXS5pbmNsdWRlcyhhKT9vLmluY2x1ZGVzKFwiI3tcIik/e3R5cGU6XCJtZWRpYS11bmtub3duXCIsdmFsdWU6b306KHQucGFyYW1zPW1hKG8pLHQpOih0LnBhcmFtcz1vLHQpfX1yZXR1cm4gdH1mdW5jdGlvbiBLcyh0LGUscyl7bGV0IHI9WmUoZSkse2Zyb250TWF0dGVyOm59PXI7ZT1yLmNvbnRlbnQ7bGV0IGk7dHJ5e2k9dChlLHttYXA6ITF9KX1jYXRjaChvKXtsZXR7bmFtZTp1LHJlYXNvbjphLGxpbmU6Yyxjb2x1bW46Zn09bzt0aHJvdyB0eXBlb2YgYyE9XCJudW1iZXJcIj9vOmFhKGAke3V9OiAke2F9YCx7bG9jOntzdGFydDp7bGluZTpjLGNvbHVtbjpmfX0sY2F1c2U6b30pfXJldHVybiBzLm9yaWdpbmFsVGV4dD1lLGk9bGwoWChpLFwiY3NzLVwiKSxzKSxLcihpLGUpLG4mJihuLnNvdXJjZT17c3RhcnRPZmZzZXQ6MCxlbmRPZmZzZXQ6bi5yYXcubGVuZ3RofSxpLmZyb250TWF0dGVyPW4pLGl9ZnVuY3Rpb24gY2wodCxlPXt9KXtyZXR1cm4gS3Mob2wuZGVmYXVsdC5kZWZhdWx0LHQsZSl9ZnVuY3Rpb24gZmwodCxlPXt9KXtyZXR1cm4gS3Mocz0+YWwuZGVmYXVsdC5wYXJzZShrbihzKSksdCxlKX1mdW5jdGlvbiBwbCh0LGU9e30pe3JldHVybiBLcyh1bC5kZWZhdWx0LHQsZSl9dmFyIFFzPXthc3RGb3JtYXQ6XCJwb3N0Y3NzXCIsaGFzUHJhZ21hOk1uLGxvY1N0YXJ0OlAsbG9jRW5kOlJ9LE55PXsuLi5RcyxwYXJzZTpjbH0sUHk9ey4uLlFzLHBhcnNlOmZsfSxSeT17Li4uUXMscGFyc2U6cGx9O3ZhciBJeT17cG9zdGNzczp5aX07dmFyIEdiPVhzO2V4cG9ydHtHYiBhcyBkZWZhdWx0LGdpIGFzIGxhbmd1YWdlcyx2aSBhcyBvcHRpb25zLEpzIGFz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UUFBUTtBQUFFLFlBQUcsRUFBRSxPQUFPLFVBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLE1BQUc7QUFBQSxNQUFDO0FBQUMsYUFBTztBQUFBLElBQUM7QUFBQSxJQUFDLE1BQU0sR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssSUFBSSxHQUFFLFdBQVUsWUFBWTtBQUFFLFdBQUssUUFBUSxJQUFFLElBQUUsS0FBSSxHQUFFLE9BQU87QUFBRSxVQUFJO0FBQUUsUUFBRSxTQUFPLEVBQUUsTUFBTSxVQUFRLEtBQUssS0FBSyxDQUFDLEdBQUUsSUFBRSxLQUFLLElBQUksR0FBRSxPQUFPLEtBQUcsSUFBRSxLQUFLLElBQUksR0FBRSxTQUFRLFdBQVcsR0FBRSxLQUFHLEtBQUssUUFBUSxDQUFDLEdBQUUsS0FBSyxRQUFRLEtBQUksR0FBRSxLQUFLO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBTSxTQUFPO0FBQUUsYUFBSyxJQUFFLEtBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxTQUFPLFlBQVcsTUFBRztBQUFFLFVBQUksSUFBRSxLQUFLLElBQUksR0FBRSxXQUFXO0FBQUUsZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sUUFBTyxLQUFJO0FBQUMsWUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUUsSUFBRSxLQUFLLElBQUksR0FBRSxRQUFRO0FBQUUsYUFBRyxLQUFLLFFBQVEsQ0FBQyxHQUFFLEtBQUssVUFBVSxHQUFFLE1BQUksS0FBRyxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQSxJQUFDLFFBQVEsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLLElBQUksR0FBRSxRQUFPLGFBQWEsR0FBRSxJQUFFLEtBQUssSUFBSSxHQUFFLFNBQVEsY0FBYztBQUFFLFdBQUssUUFBUSxPQUFLLElBQUUsRUFBRSxPQUFLLElBQUUsTUFBSyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsS0FBSyxJQUFJLEdBQUUsV0FBVSxPQUFPLEdBQUUsSUFBRSxFQUFFLE9BQUssSUFBRSxLQUFLLFNBQVMsR0FBRSxPQUFPO0FBQUUsUUFBRSxjQUFZLEtBQUcsRUFBRSxLQUFLLGFBQVcsZ0JBQWUsTUFBSSxLQUFHLE1BQUssS0FBSyxRQUFRLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFNBQVMsR0FBRTtBQUFDLFdBQUssS0FBSyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUk7QUFBRSxVQUFHLE1BQUksSUFBRSxJQUFHLE1BQUksSUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLE9BQU8sSUFBRSxLQUFLLFFBQU87QUFBRSxVQUFJLElBQUUsRUFBRTtBQUFPLFVBQUcsTUFBSSxhQUFXLENBQUMsS0FBRyxFQUFFLFNBQU8sVUFBUSxFQUFFLFVBQVEsS0FBRyxLQUFHLEVBQUUsU0FBTyxZQUFZLFFBQU07QUFBRyxVQUFHLENBQUMsRUFBRSxRQUFPLEdBQUcsQ0FBQztBQUFFLFVBQUksSUFBRSxFQUFFLEtBQUk7QUFBRyxVQUFHLEVBQUUsYUFBVyxFQUFFLFdBQVMsS0FBSSxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUUsSUFBSSxRQUFPLEVBQUUsU0FBUyxDQUFDO0FBQUUsVUFBRyxNQUFJLFlBQVUsTUFBSSxRQUFRLFFBQU8sS0FBSyxZQUFZLEdBQUUsQ0FBQztBQUFFO0FBQUMsWUFBSSxJQUFFLFFBQU0sR0FBRyxDQUFDO0FBQUUsYUFBSyxDQUFDLElBQUUsSUFBRSxLQUFLLENBQUMsRUFBRSxHQUFFLENBQUMsSUFBRSxFQUFFLEtBQUssT0FBRztBQUFDLGNBQUcsSUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLE9BQU8sSUFBRSxJQUFJO1FBQVEsQ0FBQztBQUFBLE1BQUM7QUFBQyxhQUFPLE9BQU8sSUFBRSxRQUFNLElBQUUsR0FBRyxDQUFDLElBQUcsRUFBRSxTQUFTLENBQUMsSUFBRSxHQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsZUFBZSxHQUFFO0FBQUMsVUFBSTtBQUFFLGFBQU8sRUFBRSxLQUFLLE9BQUc7QUFBQyxZQUFHLEVBQUUsU0FBTyxFQUFFLE1BQU0sU0FBTyxLQUFHLE9BQU8sRUFBRSxLQUFLLFFBQU0sSUFBSSxRQUFPLElBQUUsRUFBRSxLQUFLLE9BQU0sRUFBRSxTQUFTO0FBQUEsQ0FDLzZDLE1BQUksSUFBRSxFQUFFLFFBQVEsV0FBVSxFQUFFLElBQUc7QUFBQSxNQUFFLENBQUMsR0FBRSxNQUFJLElBQUUsRUFBRSxRQUFRLE9BQU0sRUFBRSxJQUFHO0FBQUEsSUFBQztBQUFBLElBQUMsaUJBQWlCLEdBQUUsR0FBRTtBQUFDLFVBQUk7QUFBRSxhQUFPLEVBQUUsYUFBYSxPQUFHO0FBQUMsWUFBRyxPQUFPLEVBQUUsS0FBSyxTQUFPLElBQUksUUFBTyxJQUFFLEVBQUUsS0FBSyxRQUFPLEVBQUUsU0FBUztBQUFBLENBQ3JMLE1BQUksSUFBRSxFQUFFLFFBQVEsV0FBVSxFQUFFLElBQUc7QUFBQSxNQUFFLENBQUMsR0FBRSxPQUFPLElBQUUsTUFBSSxJQUFFLEtBQUssSUFBSSxHQUFFLE1BQUssWUFBWSxJQUFFLE1BQUksSUFBRSxFQUFFLFFBQVEsT0FBTSxFQUFFLElBQUc7QUFBQSxJQUFDO0FBQUEsSUFBQyxjQUFjLEdBQUUsR0FBRTtBQUFDLFVBQUk7QUFBRSxhQUFPLEVBQUUsVUFBVSxPQUFHO0FBQUMsWUFBRyxPQUFPLEVBQUUsS0FBSyxTQUFPLElBQUksUUFBTyxJQUFFLEVBQUUsS0FBSyxRQUFPLEVBQUUsU0FBUztBQUFBLENBQzVOLE1BQUksSUFBRSxFQUFFLFFBQVEsV0FBVSxFQUFFLElBQUc7QUFBQSxNQUFFLENBQUMsR0FBRSxPQUFPLElBQUUsTUFBSSxJQUFFLEtBQUssSUFBSSxHQUFFLE1BQUssWUFBWSxJQUFFLE1BQUksSUFBRSxFQUFFLFFBQVEsT0FBTSxFQUFFLElBQUc7QUFBQSxJQUFDO0FBQUEsSUFBQyxjQUFjLEdBQUU7QUFBQyxVQUFJO0FBQUUsYUFBTyxFQUFFLEtBQUssT0FBRztBQUFDLFlBQUcsRUFBRSxTQUFPLFdBQVMsSUFBRSxFQUFFLEtBQUssU0FBUSxPQUFPLElBQUUsS0FBSyxRQUFNO0FBQUEsTUFBRSxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxjQUFjLEdBQUU7QUFBQyxVQUFJO0FBQUUsYUFBTyxFQUFFLEtBQUssT0FBRztBQUFDLFlBQUcsRUFBRSxVQUFRLEVBQUUsV0FBUyxLQUFHLEVBQUUsVUFBUSxNQUFJLE9BQU8sRUFBRSxLQUFLLFNBQU8sSUFBSSxRQUFPLElBQUUsRUFBRSxLQUFLLFFBQU8sRUFBRSxTQUFTO0FBQUEsQ0FDclcsTUFBSSxJQUFFLEVBQUUsUUFBUSxXQUFVLEVBQUUsSUFBRztBQUFBLE1BQUUsQ0FBQyxHQUFFLE1BQUksSUFBRSxFQUFFLFFBQVEsT0FBTSxFQUFFLElBQUc7QUFBQSxJQUFDO0FBQUEsSUFBQyxTQUFTLEdBQUU7QUFBQyxVQUFJO0FBQUUsYUFBTyxFQUFFLFVBQVUsT0FBRztBQUFDLFlBQUcsT0FBTyxFQUFFLEtBQUssVUFBUSxJQUFJLFFBQU8sSUFBRSxFQUFFLEtBQUssUUFBUSxRQUFRLFdBQVUsRUFBRSxHQUFFO0FBQUEsTUFBRSxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxhQUFhLEdBQUU7QUFBQyxVQUFJO0FBQUUsYUFBTyxFQUFFLEtBQUssT0FBRztBQUFDLFlBQUcsRUFBRSxTQUFPLEVBQUUsTUFBTSxXQUFTLE1BQUksSUFBRSxFQUFFLEtBQUssT0FBTSxPQUFPLElBQUUsS0FBSyxRQUFNO0FBQUEsTUFBRSxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxVQUFVLEdBQUU7QUFBQyxVQUFHLEVBQUUsS0FBSyxPQUFPLFFBQU8sRUFBRSxLQUFLO0FBQU8sVUFBSTtBQUFFLGFBQU8sRUFBRSxLQUFLLE9BQUc7QUFBQyxZQUFJLElBQUUsRUFBRTtBQUFPLFlBQUcsS0FBRyxNQUFJLEtBQUcsRUFBRSxVQUFRLEVBQUUsV0FBUyxLQUFHLE9BQU8sRUFBRSxLQUFLLFNBQU8sS0FBSTtBQUFDLGNBQUksSUFBRSxFQUFFLEtBQUssT0FBTyxNQUFNO0FBQUEsQ0FDbGU7QUFBRSxpQkFBTyxJQUFFLEVBQUUsRUFBRSxTQUFPLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBUSxPQUFNLEVBQUUsR0FBRTtBQUFBLFFBQUU7QUFBQSxNQUFDLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxJQUFDLGFBQWEsR0FBRTtBQUFDLFVBQUk7QUFBRSxhQUFPLEVBQUUsS0FBSyxPQUFHO0FBQUMsWUFBRyxFQUFFLFNBQU8sRUFBRSxNQUFNLFVBQVEsRUFBRSxLQUFLLFNBQU8sV0FBUyxJQUFFLEVBQUUsS0FBSyxXQUFVLE9BQU8sSUFBRSxLQUFLLFFBQU07QUFBQSxNQUFFLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxJQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxLQUFLLENBQUM7QUFBRSxhQUFPLEtBQUcsRUFBRSxVQUFRLElBQUUsRUFBRSxNQUFJO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSyxHQUFFO0FBQUMsV0FBSyxLQUFLLENBQUMsR0FBRSxFQUFFLEtBQUssU0FBTyxLQUFLLFFBQVEsRUFBRSxLQUFLLEtBQUs7QUFBQSxJQUFDO0FBQUEsSUFBQyxLQUFLLEdBQUU7QUFBQyxXQUFLLE1BQU0sR0FBRSxLQUFLLFNBQVMsR0FBRSxVQUFVLENBQUMsR0FBRSxFQUFFLEtBQUssZ0JBQWMsS0FBSyxRQUFRLEVBQUUsS0FBSyxjQUFhLEdBQUUsS0FBSztBQUFBLElBQUM7QUFBQSxJQUFDLFVBQVUsR0FBRSxHQUFFO0FBQUMsVUFBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTSxJQUFJLE1BQU0sMkJBQXlCLEVBQUUsT0FBSyxpREFBaUQ7QUFBRSxXQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHO0FBQUssV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUksR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDO0FBQUEsRUFBQztBQUFDLEtBQUcsVUFBUTtBQUFHLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLEtBQUcsUUFBUSxVQUFRLE9BQU8sU0FBUztBQUFFLEtBQUcsUUFBUSxLQUFHLE9BQU8sSUFBSTtBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFFLEdBQUcsRUFBQyxTQUFRLElBQUcsSUFBRyxHQUFFLElBQUUsR0FBSTtBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsSUFBSSxFQUFFO0FBQVksYUFBUSxLQUFLLEdBQUU7QUFBQyxVQUFHLENBQUMsT0FBTyxVQUFVLGVBQWUsS0FBSyxHQUFFLENBQUMsS0FBRyxNQUFJLGFBQWE7QUFBUyxVQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxPQUFPO0FBQUUsWUFBSSxZQUFVLE1BQUksV0FBUyxNQUFJLEVBQUUsQ0FBQyxJQUFFLEtBQUcsTUFBSSxXQUFTLEVBQUUsQ0FBQyxJQUFFLElBQUUsTUFBTSxRQUFRLENBQUMsSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLElBQUksT0FBRyxHQUFHLEdBQUUsQ0FBQyxDQUFDLEtBQUcsTUFBSSxZQUFVLE1BQUksU0FBTyxJQUFFLEdBQUcsQ0FBQyxJQUFHLEVBQUUsQ0FBQyxJQUFFO0FBQUEsSUFBRTtBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsS0FBRyxPQUFPLEVBQUUsU0FBTyxJQUFJLFFBQU8sRUFBRTtBQUFPLFFBQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFO0FBQUUsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFVBQUcsTUFBSSxFQUFFLFFBQU0sTUFBSSxFQUFFLFFBQU87QUFBQyxZQUFFO0FBQUU7QUFBQSxNQUFLO0FBQUMsUUFBRSxDQUFDLE1BQUk7QUFBQSxLQUNqMUMsSUFBRSxHQUFFLEtBQUcsS0FBRyxLQUFHO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsTUFBSSxLQUFHLE1BQUs7QUFBQSxJQUFDLElBQUksVUFBUztBQUFDLGFBQU87QUFBQSxJQUFJO0FBQUEsSUFBQyxZQUFZLElBQUUsQ0FBQSxHQUFHO0FBQUMsV0FBSyxPQUFLLENBQUEsR0FBRyxLQUFLLEVBQUUsSUFBRSxPQUFHLEtBQUssRUFBRSxJQUFFO0FBQUcsZUFBUSxLQUFLLEVBQUUsS0FBRyxNQUFJLFNBQVE7QUFBQyxhQUFLLFFBQU0sQ0FBRTtBQUFDLGlCQUFRLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBTyxFQUFFLFNBQU8sYUFBVyxLQUFLLE9BQU8sRUFBRSxNQUFLLENBQUUsSUFBRSxLQUFLLE9BQU8sQ0FBQztBQUFBLE1BQUMsTUFBTSxNQUFLLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxXQUFXLEdBQUU7QUFBQyxVQUFHLEVBQUUsY0FBWSxNQUFLLEVBQUUsU0FBTyxLQUFLLFVBQVEsYUFBYSxLQUFLLEVBQUUsS0FBSyxHQUFFO0FBQUMsWUFBSSxJQUFFLEtBQUs7QUFBTyxVQUFFLFFBQU0sRUFBRSxNQUFNLFFBQVEsY0FBYSxLQUFLLEVBQUUsTUFBTSxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxFQUFFLE1BQU0sTUFBTSxJQUFJO0FBQUEsTUFBQztBQUFDLGFBQU87QUFBQSxJQUFDO0FBQUEsSUFBQyxNQUFNLEdBQUU7QUFBQyxhQUFPLEtBQUssT0FBTyxZQUFZLE1BQUssQ0FBQyxHQUFFO0FBQUEsSUFBSTtBQUFBLElBQUMsT0FBTyxJQUFFLENBQUEsR0FBRztBQUFDLGVBQVEsS0FBSyxFQUFFLE1BQUssQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLGFBQU87QUFBQSxJQUFJO0FBQUEsSUFBQyxPQUFPLEdBQUU7QUFBQyxhQUFPLEtBQUssT0FBTyxhQUFhLE1BQUssQ0FBQyxHQUFFO0FBQUEsSUFBSTtBQUFBLElBQUMsVUFBVSxHQUFFO0FBQUMsYUFBTyxLQUFLLEtBQUssUUFBTyxPQUFPLEtBQUssS0FBSyxPQUFNLEtBQUcsT0FBTyxLQUFLLEtBQUs7QUFBQSxJQUFPO0FBQUEsSUFBQyxNQUFNLElBQUUsSUFBRztBQUFDLFVBQUksSUFBRSxHQUFHLElBQUk7QUFBRSxlQUFRLEtBQUssRUFBRSxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRSxhQUFPO0FBQUEsSUFBQztBQUFBLElBQUMsV0FBVyxJQUFFLENBQUEsR0FBRztBQUFDLFVBQUksSUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFFLGFBQU8sS0FBSyxPQUFPLFlBQVksTUFBSyxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxZQUFZLElBQUUsQ0FBQSxHQUFHO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUUsYUFBTyxLQUFLLE9BQU8sYUFBYSxNQUFLLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxJQUFDLE1BQU0sR0FBRSxJQUFFLENBQUUsR0FBQztBQUFDLFVBQUcsS0FBSyxRQUFPO0FBQUMsWUFBRyxFQUFDLEtBQUksR0FBRSxPQUFNLEVBQUMsSUFBRSxLQUFLLFFBQVEsQ0FBQztBQUFFLGVBQU8sS0FBSyxPQUFPLE1BQU0sTUFBTSxHQUFFLEVBQUMsUUFBTyxFQUFFLFFBQU8sTUFBSyxFQUFFLEtBQUksR0FBRSxFQUFDLFFBQU8sRUFBRSxRQUFPLE1BQUssRUFBRSxLQUFJLEdBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQyxhQUFPLElBQUksR0FBRyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsb0JBQW1CO0FBQUMsYUFBTSxFQUFDLElBQUksR0FBRSxHQUFFO0FBQUMsZUFBTyxNQUFJLFlBQVUsSUFBRSxNQUFJLFNBQU8sTUFBSSxFQUFFLEtBQUksRUFBRyxZQUFVLEVBQUUsQ0FBQztBQUFBLE1BQUMsR0FBRSxJQUFJLEdBQUUsR0FBRSxHQUFFO0FBQUMsZUFBTyxFQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsQ0FBQyxJQUFFLElBQUcsTUFBSSxVQUFRLE1BQUksV0FBUyxNQUFJLFVBQVEsTUFBSSxZQUFVLE1BQUksZUFBYSxNQUFJLFdBQVMsRUFBRSxjQUFhO0FBQUEsTUFBRSxFQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsWUFBVztBQUFDLFdBQUssRUFBRSxJQUFFO0FBQUEsSUFBRTtBQUFBLElBQUMsWUFBVztBQUFDLFVBQUcsS0FBSyxFQUFFLEdBQUU7QUFBQyxhQUFLLEVBQUUsSUFBRTtBQUFHLFlBQUksSUFBRTtBQUFLLGVBQUssSUFBRSxFQUFFLFNBQVEsR0FBRSxFQUFFLElBQUU7QUFBQSxNQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsT0FBTTtBQUFDLFVBQUcsQ0FBQyxLQUFLLE9BQU87QUFBTyxVQUFJLElBQUUsS0FBSyxPQUFPLE1BQU0sSUFBSTtBQUFFLGFBQU8sS0FBSyxPQUFPLE1BQU0sSUFBRSxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsV0FBVyxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssT0FBTztBQUFNLFVBQUcsRUFBRSxNQUFNLEtBQUUsS0FBSyxlQUFlLEVBQUUsS0FBSztBQUFBLGVBQVUsRUFBRSxNQUFLO0FBQUMsWUFBSSxJQUFFLGNBQWEsS0FBSyxPQUFPLFFBQU0sS0FBSyxPQUFPLE1BQU0sV0FBUyxLQUFLLE9BQU8sTUFBTSxLQUFJLElBQUUsRUFBRSxNQUFNLEdBQUcsR0FBRSxLQUFLLE9BQU8sS0FBSyxHQUFFLEdBQUcsR0FBRSxLQUFLLE9BQU8sR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUk7QUFBRSxjQUFJLE9BQUssSUFBRSxLQUFLLGVBQWUsQ0FBQztBQUFBLE1BQUU7QUFBQyxhQUFPO0FBQUEsSUFBQztBQUFBLElBQUMsZUFBZSxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssT0FBTyxNQUFNLFFBQU8sSUFBRSxLQUFLLE9BQU8sTUFBTSxNQUFLLElBQUUsY0FBYSxLQUFLLE9BQU8sUUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFTLEtBQUssT0FBTyxNQUFNLEtBQUksSUFBRSxHQUFHLEdBQUUsS0FBSyxPQUFPLEtBQUssR0FBRSxJQUFFLElBQUU7QUFBRSxlQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBSSxHQUFFLENBQUMsTUFBSTtBQUFBLEtBQ3pnRSxJQUFFLEdBQUUsS0FBRyxLQUFHLEtBQUc7QUFBRSxhQUFNLEVBQUMsUUFBTyxHQUFFLE1BQUssRUFBQztBQUFBLElBQUM7QUFBQSxJQUFDLE9BQU07QUFBQyxVQUFHLENBQUMsS0FBSyxPQUFPO0FBQU8sVUFBSSxJQUFFLEtBQUssT0FBTyxNQUFNLElBQUk7QUFBRSxhQUFPLEtBQUssT0FBTyxNQUFNLElBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFFBQVEsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFDLFFBQU8sS0FBSyxPQUFPLE1BQU0sUUFBTyxNQUFLLEtBQUssT0FBTyxNQUFNLEtBQUksR0FBRSxJQUFFLEtBQUssT0FBTyxNQUFJLEVBQUMsUUFBTyxLQUFLLE9BQU8sSUFBSSxTQUFPLEdBQUUsTUFBSyxLQUFLLE9BQU8sSUFBSSxLQUFJLElBQUUsRUFBQyxRQUFPLEVBQUUsU0FBTyxHQUFFLE1BQUssRUFBRSxLQUFJO0FBQUUsVUFBRyxFQUFFLE1BQUs7QUFBQyxZQUFJLElBQUUsY0FBYSxLQUFLLE9BQU8sUUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFTLEtBQUssT0FBTyxNQUFNLEtBQUksSUFBRSxFQUFFLE1BQU0sR0FBRyxHQUFFLEtBQUssT0FBTyxLQUFLLEdBQUUsR0FBRyxHQUFFLEtBQUssT0FBTyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSTtBQUFFLGNBQUksT0FBSyxJQUFFLEtBQUssZUFBZSxDQUFDLEdBQUUsSUFBRSxLQUFLLGVBQWUsSUFBRSxFQUFFLEtBQUssTUFBTTtBQUFBLE1BQUUsTUFBTSxHQUFFLFFBQU0sSUFBRSxFQUFDLFFBQU8sRUFBRSxNQUFNLFFBQU8sTUFBSyxFQUFFLE1BQU0sS0FBSSxJQUFFLEVBQUUsVUFBUSxJQUFFLEtBQUssZUFBZSxFQUFFLEtBQUssSUFBRyxFQUFFLE1BQUksSUFBRSxFQUFDLFFBQU8sRUFBRSxJQUFJLFFBQU8sTUFBSyxFQUFFLElBQUksS0FBSSxJQUFFLE9BQU8sRUFBRSxZQUFVLFdBQVMsSUFBRSxLQUFLLGVBQWUsRUFBRSxRQUFRLElBQUUsRUFBRSxVQUFRLElBQUUsS0FBSyxlQUFlLEVBQUUsUUFBTSxDQUFDO0FBQUcsY0FBTyxFQUFFLE9BQUssRUFBRSxRQUFNLEVBQUUsU0FBTyxFQUFFLFFBQU0sRUFBRSxVQUFRLEVBQUUsWUFBVSxJQUFFLEVBQUMsUUFBTyxFQUFFLFNBQU8sR0FBRSxNQUFLLEVBQUUsS0FBSSxJQUFHLEVBQUMsS0FBSSxHQUFFLE9BQU0sRUFBQztBQUFBLElBQUM7QUFBQSxJQUFDLElBQUksR0FBRSxHQUFFO0FBQUMsYUFBTyxJQUFJLEdBQUUsRUFBRyxJQUFJLE1BQUssR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsU0FBUTtBQUFDLGFBQU8sS0FBSyxVQUFRLEtBQUssT0FBTyxZQUFZLElBQUksR0FBRSxLQUFLLFNBQU8sUUFBTztBQUFBLElBQUk7QUFBQSxJQUFDLGVBQWUsR0FBRTtBQUFDLFVBQUcsS0FBSyxRQUFPO0FBQUMsWUFBSSxJQUFFLE1BQUssSUFBRTtBQUFHLGlCQUFRLEtBQUssRUFBRSxPQUFJLE9BQUssSUFBRSxPQUFHLEtBQUcsS0FBSyxPQUFPLFlBQVksR0FBRSxDQUFDLEdBQUUsSUFBRSxLQUFHLEtBQUssT0FBTyxhQUFhLEdBQUUsQ0FBQztBQUFFLGFBQUcsS0FBSyxPQUFRO0FBQUEsTUFBQTtBQUFDLGFBQU87QUFBQSxJQUFJO0FBQUEsSUFBQyxPQUFNO0FBQUMsVUFBSSxJQUFFO0FBQUssYUFBSyxFQUFFLFVBQVEsRUFBRSxPQUFPLFNBQU8sYUFBWSxLQUFFLEVBQUU7QUFBTyxhQUFPO0FBQUEsSUFBQztBQUFBLElBQUMsT0FBTyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsQ0FBRSxHQUFDLElBQUUsS0FBRztBQUFLLFVBQUUsS0FBRyxvQkFBSTtBQUFJLFVBQUksSUFBRTtBQUFFLGVBQVEsS0FBSyxNQUFLO0FBQUMsWUFBRyxDQUFDLE9BQU8sVUFBVSxlQUFlLEtBQUssTUFBSyxDQUFDLEtBQUcsTUFBSSxZQUFVLE1BQUksYUFBYTtBQUFTLFlBQUksSUFBRSxLQUFLLENBQUM7QUFBRSxZQUFHLE1BQU0sUUFBUSxDQUFDLEVBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxJQUFJLE9BQUcsT0FBTyxLQUFHLFlBQVUsRUFBRSxTQUFPLEVBQUUsT0FBTyxNQUFLLENBQUMsSUFBRSxDQUFDO0FBQUEsaUJBQVUsT0FBTyxLQUFHLFlBQVUsRUFBRSxPQUFPLEdBQUUsQ0FBQyxJQUFFLEVBQUUsT0FBTyxNQUFLLENBQUM7QUFBQSxpQkFBVSxNQUFJLFVBQVM7QUFBQyxjQUFJLElBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSztBQUFFLGVBQUcsU0FBTyxJQUFFLEdBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTSxDQUFDLEdBQUUsTUFBSyxFQUFFLENBQUMsSUFBRSxFQUFDLEtBQUksRUFBRSxLQUFJLFNBQVEsR0FBRSxPQUFNLEVBQUUsTUFBSztBQUFBLFFBQUMsTUFBTSxHQUFFLENBQUMsSUFBRTtBQUFBLE1BQUM7QUFBQyxhQUFPLE1BQUksRUFBRSxTQUFPLENBQUMsR0FBRyxFQUFFLEtBQU0sQ0FBQSxFQUFFLElBQUksT0FBRyxFQUFFLE9BQVEsQ0FBQSxJQUFHO0FBQUEsSUFBQztBQUFBLElBQUMsVUFBUztBQUFDLGFBQU8sS0FBSyxlQUFhLEtBQUssYUFBVyxJQUFJLE1BQU0sTUFBSyxLQUFLLGtCQUFpQixDQUFFLElBQUcsS0FBSztBQUFBLElBQVU7QUFBQSxJQUFDLFNBQVMsSUFBRSxJQUFHO0FBQUMsUUFBRSxjQUFZLElBQUUsRUFBRTtBQUFXLFVBQUksSUFBRTtBQUFHLGFBQU8sRUFBRSxNQUFLLE9BQUc7QUFBQyxhQUFHO0FBQUEsTUFBQyxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxLQUFLLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUMsTUFBSyxLQUFJO0FBQUUsZUFBUSxLQUFLLEVBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUUsYUFBTyxFQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBRSxLQUFHLFVBQVE7QUFBRyxLQUFHLFVBQVE7QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxNQUFJLEtBQUcsR0FBSSxHQUFDLEtBQUcsY0FBYyxHQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLENBQUMsR0FBRSxLQUFLLE9BQUs7QUFBQSxJQUFTO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBUTtBQUFHLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxHQUFJLEdBQUMsS0FBRyxjQUFjLEdBQUU7QUFBQSxJQUFDLElBQUksV0FBVTtBQUFDLGFBQU8sS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFHLEtBQUssS0FBSyxDQUFDLE1BQUk7QUFBQSxJQUFHO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxXQUFHLE9BQU8sRUFBRSxRQUFNLE9BQUssT0FBTyxFQUFFLFNBQU8sYUFBVyxJQUFFLEVBQUMsR0FBRyxHQUFFLE9BQU0sT0FBTyxFQUFFLEtBQUssRUFBQyxJQUFHLE1BQU0sQ0FBQyxHQUFFLEtBQUssT0FBSztBQUFBLElBQU07QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUksR0FBQyxLQUFHLEdBQUUsR0FBRyxFQUFDLFNBQVEsSUFBRyxJQUFHLEdBQUUsSUFBRSxHQUFJLEdBQUMsSUFBRyxJQUFHLElBQUc7QUFBRyxXQUFTLEdBQUcsR0FBRTtBQUFDLFdBQU8sRUFBRSxJQUFJLFFBQUksRUFBRSxVQUFRLEVBQUUsUUFBTSxHQUFHLEVBQUUsS0FBSyxJQUFHLE9BQU8sRUFBRSxRQUFPLEVBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFHLEVBQUUsRUFBRSxJQUFFLE9BQUcsRUFBRSxRQUFRLE1BQU0sVUFBUSxLQUFLLEVBQUUsUUFBUSxNQUFNLElBQUcsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFJLElBQUUsTUFBTSxVQUFVLEdBQUU7QUFBQSxJQUFDLElBQUksUUFBTztBQUFDLFVBQUcsS0FBSyxRQUFRLE1BQU0sUUFBTyxLQUFLLFFBQVEsTUFBTSxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsSUFBSSxPQUFNO0FBQUMsVUFBRyxLQUFLLFFBQVEsTUFBTSxRQUFPLEtBQUssUUFBUSxNQUFNLEtBQUssUUFBUSxNQUFNLFNBQU8sQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFVBQVUsR0FBRTtBQUFDLGVBQVEsS0FBSyxHQUFFO0FBQUMsWUFBSSxJQUFFLEtBQUssVUFBVSxHQUFFLEtBQUssSUFBSTtBQUFFLGlCQUFRLEtBQUssRUFBRSxNQUFLLFFBQVEsTUFBTSxLQUFLLENBQUM7QUFBQSxNQUFDO0FBQUMsYUFBTyxLQUFLLFVBQVMsR0FBRztBQUFBLElBQUk7QUFBQSxJQUFDLFVBQVUsR0FBRTtBQUFDLFVBQUcsTUFBTSxVQUFVLENBQUMsR0FBRSxLQUFLLE1BQU0sVUFBUSxLQUFLLEtBQUssTUFBTSxHQUFFLFVBQVUsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUssR0FBRTtBQUFDLFVBQUcsQ0FBQyxLQUFLLFFBQVEsTUFBTTtBQUFPLFVBQUksSUFBRSxLQUFLLFlBQVcsR0FBRyxHQUFFO0FBQUUsYUFBSyxLQUFLLFFBQVEsQ0FBQyxJQUFFLEtBQUssUUFBUSxNQUFNLFdBQVMsSUFBRSxLQUFLLFFBQVEsQ0FBQyxHQUFFLElBQUUsRUFBRSxLQUFLLFFBQVEsTUFBTSxDQUFDLEdBQUUsQ0FBQyxHQUFFLE1BQUksU0FBSyxNQUFLLFFBQVEsQ0FBQyxLQUFHO0FBQUUsYUFBTyxPQUFPLEtBQUssUUFBUSxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxNQUFNLEdBQUU7QUFBQyxhQUFPLEtBQUssTUFBTSxNQUFNLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxjQUFhO0FBQUMsV0FBSyxhQUFXLEtBQUssV0FBUyxJQUFHLEtBQUssWUFBVSxLQUFLLFVBQVEsQ0FBQSxJQUFJLEtBQUssWUFBVTtBQUFFLFVBQUksSUFBRSxLQUFLO0FBQVMsYUFBTyxLQUFLLFFBQVEsQ0FBQyxJQUFFLEdBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxvQkFBbUI7QUFBQyxhQUFNLEVBQUMsSUFBSSxHQUFFLEdBQUU7QUFBQyxlQUFPLE1BQUksWUFBVSxJQUFFLEVBQUUsQ0FBQyxJQUFFLE1BQUksVUFBUSxPQUFPLEtBQUcsWUFBVSxFQUFFLFdBQVcsTUFBTSxJQUFFLElBQUksTUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxPQUFHLE9BQU8sS0FBRyxhQUFXLENBQUMsR0FBRSxNQUFJLEVBQUUsRUFBRSxRQUFPLEdBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFFLE1BQUksV0FBUyxNQUFJLFNBQU8sT0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQUssTUFBSSxFQUFFLEVBQUUsUUFBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUUsTUFBSSxTQUFPLE1BQUksRUFBRSxLQUFNLEVBQUMsUUFBTyxJQUFHLE1BQUksVUFBUSxFQUFFLE1BQU0sSUFBSSxPQUFHLEVBQUUsUUFBTyxDQUFFLElBQUUsTUFBSSxXQUFTLE1BQUksU0FBTyxFQUFFLENBQUMsRUFBRSxZQUFVLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFBLE1BQUMsR0FBRSxJQUFJLEdBQUUsR0FBRSxHQUFFO0FBQUMsZUFBTyxFQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsQ0FBQyxJQUFFLElBQUcsTUFBSSxVQUFRLE1BQUksWUFBVSxNQUFJLGVBQWEsRUFBRSxVQUFTLElBQUk7QUFBQSxNQUFFLEVBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxNQUFNLEdBQUU7QUFBQyxhQUFPLE9BQU8sS0FBRyxXQUFTLEtBQUcsRUFBRSxZQUFVLElBQUUsRUFBRSxVQUFTLEtBQUssUUFBUSxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQUU7QUFBQSxJQUFDLFlBQVksR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDLEdBQUUsSUFBRSxLQUFLLFVBQVUsR0FBRSxLQUFLLFFBQVEsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUFVLFVBQUUsS0FBSyxNQUFNLENBQUM7QUFBRSxlQUFRLEtBQUssRUFBRSxNQUFLLFFBQVEsTUFBTSxPQUFPLElBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxVQUFJO0FBQUUsZUFBUSxLQUFLLEtBQUssUUFBUSxLQUFFLEtBQUssUUFBUSxDQUFDLEdBQUUsSUFBRSxNQUFJLEtBQUssUUFBUSxDQUFDLElBQUUsSUFBRSxFQUFFO0FBQVEsYUFBTyxLQUFLLFVBQVMsR0FBRztBQUFBLElBQUk7QUFBQSxJQUFDLGFBQWEsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDLEdBQUUsSUFBRSxNQUFJLElBQUUsWUFBVSxPQUFHLElBQUUsS0FBSyxVQUFVLEdBQUUsS0FBSyxRQUFRLE1BQU0sQ0FBQyxHQUFFLENBQUMsRUFBRSxRQUFTO0FBQUMsVUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFFLGVBQVEsS0FBSyxFQUFFLE1BQUssUUFBUSxNQUFNLE9BQU8sR0FBRSxHQUFFLENBQUM7QUFBRSxVQUFJO0FBQUUsZUFBUSxLQUFLLEtBQUssUUFBUSxLQUFFLEtBQUssUUFBUSxDQUFDLEdBQUUsS0FBRyxNQUFJLEtBQUssUUFBUSxDQUFDLElBQUUsSUFBRSxFQUFFO0FBQVEsYUFBTyxLQUFLLFVBQVMsR0FBRztBQUFBLElBQUk7QUFBQSxJQUFDLFVBQVUsR0FBRSxHQUFFO0FBQUMsVUFBRyxPQUFPLEtBQUcsU0FBUyxLQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSztBQUFBLGVBQVUsT0FBTyxJQUFFLElBQUksS0FBRSxDQUFFO0FBQUEsZUFBUyxNQUFNLFFBQVEsQ0FBQyxHQUFFO0FBQUMsWUFBRSxFQUFFLE1BQU0sQ0FBQztBQUFFLGlCQUFRLEtBQUssRUFBRSxHQUFFLFVBQVEsRUFBRSxPQUFPLFlBQVksR0FBRSxRQUFRO0FBQUEsTUFBQyxXQUFTLEVBQUUsU0FBTyxVQUFRLEtBQUssU0FBTyxZQUFXO0FBQUMsWUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQUUsaUJBQVEsS0FBSyxFQUFFLEdBQUUsVUFBUSxFQUFFLE9BQU8sWUFBWSxHQUFFLFFBQVE7QUFBQSxNQUFDLFdBQVMsRUFBRSxLQUFLLEtBQUUsQ0FBQyxDQUFDO0FBQUEsZUFBVSxFQUFFLE1BQUs7QUFBQyxZQUFHLE9BQU8sRUFBRSxRQUFNLElBQUksT0FBTSxJQUFJLE1BQU0sd0NBQXdDO0FBQUUsZUFBTyxFQUFFLFNBQU8sYUFBVyxFQUFFLFFBQU0sT0FBTyxFQUFFLEtBQUssSUFBRyxJQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUFBLE1BQUMsV0FBUyxFQUFFLFlBQVUsRUFBRSxVQUFVLEtBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQUEsZUFBVSxFQUFFLEtBQUssS0FBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFBQSxlQUFVLEVBQUUsS0FBSyxLQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUFBLFVBQU8sT0FBTSxJQUFJLE1BQU0sb0NBQW9DO0FBQUUsYUFBTyxFQUFFLElBQUksUUFBSSxFQUFFLEVBQUUsS0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFFLElBQUUsRUFBRSxTQUFRLEVBQUUsVUFBUSxFQUFFLE9BQU8sWUFBWSxDQUFDLEdBQUUsRUFBRSxFQUFFLEtBQUcsR0FBRyxDQUFDLEdBQUUsRUFBRSxTQUFPLEVBQUUsT0FBSyxDQUFBLElBQUksT0FBTyxFQUFFLEtBQUssU0FBTyxPQUFLLEtBQUcsT0FBTyxFQUFFLEtBQUssU0FBTyxRQUFNLEVBQUUsS0FBSyxTQUFPLEVBQUUsS0FBSyxPQUFPLFFBQVEsT0FBTSxFQUFFLElBQUcsRUFBRSxTQUFPLEtBQUssU0FBUSxFQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsV0FBVyxHQUFFO0FBQUMsVUFBRSxFQUFFLFFBQU87QUFBRyxlQUFRLEtBQUssR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLLFVBQVUsR0FBRSxLQUFLLE9BQU0sU0FBUyxFQUFFLFFBQVM7QUFBQyxpQkFBUSxLQUFLLEVBQUUsTUFBSyxRQUFRLE1BQU0sUUFBUSxDQUFDO0FBQUUsaUJBQVEsS0FBSyxLQUFLLFFBQVEsTUFBSyxRQUFRLENBQUMsSUFBRSxLQUFLLFFBQVEsQ0FBQyxJQUFFLEVBQUU7QUFBQSxNQUFNO0FBQUMsYUFBTyxLQUFLLFVBQVcsR0FBQztBQUFBLElBQUk7QUFBQSxJQUFDLEtBQUssR0FBRTtBQUFDLGFBQU8sRUFBRSxTQUFPLE1BQUssS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDLEdBQUU7QUFBQSxJQUFJO0FBQUEsSUFBQyxZQUFXO0FBQUMsZUFBUSxLQUFLLEtBQUssUUFBUSxNQUFNLEdBQUUsU0FBTztBQUFPLGFBQU8sS0FBSyxRQUFRLFFBQU0sQ0FBQSxHQUFHLEtBQUssVUFBVyxHQUFDO0FBQUEsSUFBSTtBQUFBLElBQUMsWUFBWSxHQUFFO0FBQUMsVUFBRSxLQUFLLE1BQU0sQ0FBQyxHQUFFLEtBQUssUUFBUSxNQUFNLENBQUMsRUFBRSxTQUFPLFFBQU8sS0FBSyxRQUFRLE1BQU0sT0FBTyxHQUFFLENBQUM7QUFBRSxVQUFJO0FBQUUsZUFBUSxLQUFLLEtBQUssUUFBUSxLQUFFLEtBQUssUUFBUSxDQUFDLEdBQUUsS0FBRyxNQUFJLEtBQUssUUFBUSxDQUFDLElBQUUsSUFBRTtBQUFHLGFBQU8sS0FBSyxVQUFTLEdBQUc7QUFBQSxJQUFJO0FBQUEsSUFBQyxjQUFjLEdBQUUsR0FBRSxHQUFFO0FBQUMsYUFBTyxNQUFJLElBQUUsR0FBRSxJQUFFLENBQUEsSUFBSSxLQUFLLFVBQVUsT0FBRztBQUFDLFVBQUUsU0FBTyxDQUFDLEVBQUUsTUFBTSxTQUFTLEVBQUUsSUFBSSxLQUFHLEVBQUUsUUFBTSxDQUFDLEVBQUUsTUFBTSxTQUFTLEVBQUUsSUFBSSxNQUFJLEVBQUUsUUFBTSxFQUFFLE1BQU0sUUFBUSxHQUFFLENBQUM7QUFBQSxNQUFFLENBQUMsR0FBRSxLQUFLLFVBQVcsR0FBQztBQUFBLElBQUk7QUFBQSxJQUFDLEtBQUssR0FBRTtBQUFDLGFBQU8sS0FBSyxNQUFNLEtBQUssQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUssR0FBRTtBQUFDLGFBQU8sS0FBSyxLQUFLLENBQUMsR0FBRSxNQUFJO0FBQUMsWUFBSTtBQUFFLFlBQUc7QUFBQyxjQUFFLEVBQUUsR0FBRSxDQUFDO0FBQUEsUUFBQyxTQUFPLEdBQUU7QUFBQyxnQkFBTSxFQUFFLFdBQVcsQ0FBQztBQUFBLFFBQUM7QUFBQyxlQUFPLE1BQUksU0FBSSxFQUFFLFNBQU8sSUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFHO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsWUFBWSxHQUFFLEdBQUU7QUFBQyxhQUFPLElBQUUsYUFBYSxTQUFPLEtBQUssS0FBSyxDQUFDLEdBQUUsTUFBSTtBQUFDLFlBQUcsRUFBRSxTQUFPLFlBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQU8sRUFBRSxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUMsSUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLE1BQUk7QUFBQyxZQUFHLEVBQUUsU0FBTyxZQUFVLEVBQUUsU0FBTyxFQUFFLFFBQU8sRUFBRSxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUMsS0FBRyxJQUFFLEdBQUUsS0FBSyxLQUFLLENBQUMsR0FBRSxNQUFJO0FBQUMsWUFBRyxFQUFFLFNBQU8sU0FBUyxRQUFPLEVBQUUsR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBRTtBQUFBLElBQUMsYUFBYSxHQUFFO0FBQUMsYUFBTyxLQUFLLEtBQUssQ0FBQyxHQUFFLE1BQUk7QUFBQyxZQUFHLEVBQUUsU0FBTyxVQUFVLFFBQU8sRUFBRSxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxVQUFVLEdBQUUsR0FBRTtBQUFDLGFBQU8sSUFBRSxhQUFhLFNBQU8sS0FBSyxLQUFLLENBQUMsR0FBRSxNQUFJO0FBQUMsWUFBRyxFQUFFLFNBQU8sVUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBTyxFQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxJQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsTUFBSTtBQUFDLFlBQUcsRUFBRSxTQUFPLFVBQVEsRUFBRSxTQUFPLEVBQUUsUUFBTyxFQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxLQUFHLElBQUUsR0FBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLE1BQUk7QUFBQyxZQUFHLEVBQUUsU0FBTyxPQUFPLFFBQU8sRUFBRSxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFFO0FBQUEsSUFBQyxVQUFVLEdBQUUsR0FBRTtBQUFDLGFBQU8sSUFBRSxhQUFhLFNBQU8sS0FBSyxLQUFLLENBQUMsR0FBRSxNQUFJO0FBQUMsWUFBRyxFQUFFLFNBQU8sVUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBTyxFQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxJQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsTUFBSTtBQUFDLFlBQUcsRUFBRSxTQUFPLFVBQVEsRUFBRSxhQUFXLEVBQUUsUUFBTyxFQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxLQUFHLElBQUUsR0FBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLE1BQUk7QUFBQyxZQUFHLEVBQUUsU0FBTyxPQUFPLFFBQU8sRUFBRSxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFFO0FBQUEsRUFBQztBQUFFLElBQUUsZ0JBQWMsT0FBRztBQUFDLFNBQUc7QUFBQSxFQUFDO0FBQUUsSUFBRSxlQUFhLE9BQUc7QUFBQyxTQUFHO0FBQUEsRUFBQztBQUFFLElBQUUsaUJBQWUsT0FBRztBQUFDLFNBQUc7QUFBQSxFQUFDO0FBQUUsSUFBRSxlQUFhLE9BQUc7QUFBQyxTQUFHO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBUTtBQUFFLElBQUUsVUFBUTtBQUFFLElBQUUsVUFBUSxPQUFHO0FBQUMsTUFBRSxTQUFPLFdBQVMsT0FBTyxlQUFlLEdBQUUsR0FBRyxTQUFTLElBQUUsRUFBRSxTQUFPLFNBQU8sT0FBTyxlQUFlLEdBQUUsR0FBRyxTQUFTLElBQUUsRUFBRSxTQUFPLFNBQU8sT0FBTyxlQUFlLEdBQUUsR0FBRyxTQUFTLElBQUUsRUFBRSxTQUFPLFlBQVUsT0FBTyxlQUFlLEdBQUUsR0FBRyxTQUFTLElBQUUsRUFBRSxTQUFPLFVBQVEsT0FBTyxlQUFlLEdBQUUsR0FBRyxTQUFTLEdBQUUsRUFBRSxFQUFFLElBQUUsTUFBRyxFQUFFLFNBQU8sRUFBRSxNQUFNLFFBQVEsT0FBRztBQUFDLFFBQUUsUUFBUSxDQUFDO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFDLE1BQUksS0FBRyxvRUFBbUUsS0FBRyxDQUFDLEdBQUUsSUFBRSxPQUFLLENBQUMsSUFBRSxNQUFJO0FBQUMsUUFBSSxJQUFFLElBQUcsSUFBRSxJQUFFO0FBQUUsV0FBSyxNQUFLLE1BQUcsRUFBRSxLQUFLLE9BQVEsSUFBQyxFQUFFLFNBQU8sQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDLEdBQUUsS0FBRyxDQUFDLElBQUUsT0FBSztBQUFDLFFBQUksSUFBRSxJQUFHLElBQUUsSUFBRTtBQUFFLFdBQUssTUFBSyxNQUFHLEdBQUcsS0FBSyxPQUFNLElBQUcsS0FBRyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBRSxLQUFHLFVBQVEsRUFBQyxRQUFPLElBQUcsZ0JBQWUsR0FBRTtBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxNQUFJO0FBQUEsQ0FBRTtBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQUMsS0FBRyxVQUFRLE1BQUs7QUFBQSxFQUFFO0FBQUEsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBRyxFQUFDLFFBQU8sR0FBRSxJQUFFLEdBQUksR0FBQyxFQUFDLFlBQVcsSUFBRyxTQUFRLEdBQUUsSUFBRSxDQUFFLEdBQUMsRUFBQyxtQkFBa0IsSUFBRyxvQkFBbUIsR0FBRSxJQUFFLEdBQUksR0FBQyxFQUFDLGVBQWMsSUFBRyxlQUFjLEdBQUUsSUFBRSxDQUFFLEdBQUMsS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFJLEdBQUMsS0FBRyxHQUFJLEdBQUMsS0FBRyxPQUFPLGlCQUFpQixHQUFFLEtBQUcsQ0FBQyxFQUFFLE1BQUksS0FBSSxLQUFHLENBQUMsRUFBRSxNQUFJLEtBQUksS0FBRyxNQUFLO0FBQUEsSUFBQyxJQUFJLE9BQU07QUFBQyxhQUFPLEtBQUssUUFBTSxLQUFLO0FBQUEsSUFBRTtBQUFBLElBQUMsWUFBWSxHQUFFLElBQUUsQ0FBQSxHQUFHO0FBQUMsVUFBRyxNQUFJLFFBQU0sT0FBTyxJQUFFLE9BQUssT0FBTyxLQUFHLFlBQVUsQ0FBQyxFQUFFLFNBQVMsT0FBTSxJQUFJLE1BQU0sb0JBQW9CLENBQUMsd0JBQXdCO0FBQUUsVUFBRyxLQUFLLE1BQUksRUFBRSxTQUFVLEdBQUMsS0FBSyxJQUFJLENBQUMsTUFBSSxZQUFVLEtBQUssSUFBSSxDQUFDLE1BQUksT0FBVSxLQUFLLFNBQU8sTUFBRyxLQUFLLE1BQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFHLEtBQUssU0FBTyxPQUFHLEtBQUssV0FBUyxLQUFLLEtBQUksRUFBRSxhQUFXLEtBQUssV0FBUyxFQUFFLFNBQVMsU0FBVSxJQUFFLEVBQUUsU0FBTyxDQUFDLE1BQUksWUFBWSxLQUFLLEVBQUUsSUFBSSxLQUFHLEdBQUcsRUFBRSxJQUFJLElBQUUsS0FBSyxPQUFLLEVBQUUsT0FBSyxLQUFLLE9BQUssR0FBRyxFQUFFLElBQUksSUFBRyxNQUFJLElBQUc7QUFBQyxZQUFJLElBQUUsSUFBSSxHQUFHLEtBQUssS0FBSSxDQUFDO0FBQUUsWUFBRyxFQUFFLE1BQUs7QUFBQyxlQUFLLE1BQUk7QUFBRSxjQUFJLElBQUUsRUFBRSxTQUFRLEVBQUc7QUFBSyxXQUFDLEtBQUssUUFBTSxNQUFJLEtBQUssT0FBSyxLQUFLLFdBQVcsQ0FBQztBQUFBLFFBQUU7QUFBQSxNQUFDO0FBQUMsV0FBSyxTQUFPLEtBQUssS0FBRyxnQkFBYyxHQUFHLENBQUMsSUFBRSxNQUFLLEtBQUssUUFBTSxLQUFLLElBQUksT0FBSyxLQUFLO0FBQUEsSUFBSztBQUFBLElBQUMsTUFBTSxHQUFFLEdBQUUsR0FBRSxJQUFFLENBQUUsR0FBQztBQUFDLFVBQUksR0FBRSxHQUFFO0FBQUUsVUFBRyxLQUFHLE9BQU8sS0FBRyxVQUFTO0FBQUMsWUFBSSxJQUFFLEdBQUUsSUFBRTtBQUFFLFlBQUcsT0FBTyxFQUFFLFVBQVEsVUFBUztBQUFDLGNBQUksSUFBRSxLQUFLLFdBQVcsRUFBRSxNQUFNO0FBQUUsY0FBRSxFQUFFLE1BQUssSUFBRSxFQUFFO0FBQUEsUUFBRyxNQUFNLEtBQUUsRUFBRSxNQUFLLElBQUUsRUFBRTtBQUFPLFlBQUcsT0FBTyxFQUFFLFVBQVEsVUFBUztBQUFDLGNBQUksSUFBRSxLQUFLLFdBQVcsRUFBRSxNQUFNO0FBQUUsY0FBRSxFQUFFLE1BQUssSUFBRSxFQUFFO0FBQUEsUUFBRyxNQUFNLEtBQUUsRUFBRSxNQUFLLElBQUUsRUFBRTtBQUFBLE1BQU0sV0FBUyxDQUFDLEdBQUU7QUFBQyxZQUFJLElBQUUsS0FBSyxXQUFXLENBQUM7QUFBRSxZQUFFLEVBQUUsTUFBSyxJQUFFLEVBQUU7QUFBQSxNQUFHO0FBQUMsVUFBSSxJQUFFLEtBQUssT0FBTyxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsYUFBTyxJQUFFLElBQUUsSUFBSSxHQUFHLEdBQUUsRUFBRSxZQUFVLFNBQU8sRUFBRSxPQUFLLEVBQUMsUUFBTyxFQUFFLFFBQU8sTUFBSyxFQUFFLEtBQUksR0FBRSxFQUFFLFlBQVUsU0FBTyxFQUFFLFNBQU8sRUFBQyxRQUFPLEVBQUUsV0FBVSxNQUFLLEVBQUUsUUFBTyxHQUFFLEVBQUUsUUFBTyxFQUFFLE1BQUssRUFBRSxNQUFNLElBQUUsSUFBRSxJQUFJLEdBQUcsR0FBRSxNQUFJLFNBQU8sSUFBRSxFQUFDLFFBQU8sR0FBRSxNQUFLLEVBQUMsR0FBRSxNQUFJLFNBQU8sSUFBRSxFQUFDLFFBQU8sR0FBRSxNQUFLLEVBQUMsR0FBRSxLQUFLLEtBQUksS0FBSyxNQUFLLEVBQUUsTUFBTSxHQUFFLEVBQUUsUUFBTSxFQUFDLFFBQU8sR0FBRSxXQUFVLEdBQUUsU0FBUSxHQUFFLE1BQUssR0FBRSxRQUFPLEtBQUssSUFBRyxHQUFFLEtBQUssU0FBTyxPQUFLLEVBQUUsTUFBTSxNQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsU0FBUSxJQUFJLEVBQUUsTUFBTSxPQUFLLEtBQUssT0FBTTtBQUFBLElBQUM7QUFBQSxJQUFDLFdBQVcsR0FBRTtBQUFDLFVBQUksR0FBRTtBQUFFLFVBQUcsS0FBSyxFQUFFLEVBQUUsS0FBRSxLQUFLLEVBQUU7QUFBQSxXQUFNO0FBQUMsWUFBSSxJQUFFLEtBQUssSUFBSSxNQUFNO0FBQUEsQ0FDdHdUO0FBQUUsWUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNO0FBQUUsWUFBSSxJQUFFO0FBQUUsaUJBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxJQUFJLEdBQUUsQ0FBQyxJQUFFLEdBQUUsS0FBRyxFQUFFLENBQUMsRUFBRSxTQUFPO0FBQUUsYUFBSyxFQUFFLElBQUU7QUFBQSxNQUFDO0FBQUMsVUFBRSxFQUFFLEVBQUUsU0FBTyxDQUFDO0FBQUUsVUFBSSxJQUFFO0FBQUUsVUFBRyxLQUFHLEVBQUUsS0FBRSxFQUFFLFNBQU87QUFBQSxXQUFNO0FBQUMsWUFBSSxJQUFFLEVBQUUsU0FBTyxHQUFFO0FBQUUsZUFBSyxJQUFFLElBQUcsS0FBRyxJ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QSxFQUFDLEdBQUUsTUFBTSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUMsS0FBSTtBQUFBLEdBQzl2RSxHQUFHO0FBQUUsV0FBTyxHQUFHLE1BQU0sR0FBRSxDQUFDO0FBQUEsRUFBQyxHQUFFLE1BQU0sR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQSxHQUFHLElBQUUsSUFBRyxJQUFFLE9BQUcsSUFBRSxHQUFFLElBQUUsT0FBRyxJQUFFLElBQUcsSUFBRTtBQUFHLGFBQVEsS0FBSyxFQUFFLEtBQUUsSUFBRSxRQUFHLE1BQUksT0FBSyxJQUFFLE9BQUcsSUFBRSxNQUFJLE1BQUksSUFBRSxTQUFJLE1BQUksT0FBSyxNQUFJLE9BQUssSUFBRSxNQUFHLElBQUUsS0FBRyxNQUFJLE1BQUksS0FBRyxJQUFFLE1BQUksTUFBSSxJQUFFLE1BQUksS0FBRyxLQUFHLE1BQUksS0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFJLElBQUUsT0FBSSxLQUFHLE1BQUksTUFBSSxFQUFFLEtBQUssRUFBRSxLQUFNLENBQUEsR0FBRSxJQUFFLElBQUcsSUFBRSxTQUFJLEtBQUc7QUFBRSxZQUFPLEtBQUcsTUFBSSxPQUFLLEVBQUUsS0FBSyxFQUFFLEtBQU0sQ0FBQSxHQUFFO0FBQUEsRUFBQyxFQUFDO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLE1BQUssS0FBRyxNQUFLLEtBQUcsY0FBYyxHQUFFO0FBQUEsSUFBQyxJQUFJLFlBQVc7QUFBQyxhQUFPLEdBQUcsTUFBTSxLQUFLLFFBQVE7QUFBQSxJQUFDO0FBQUEsSUFBQyxJQUFJLFVBQVUsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLLFdBQVMsS0FBSyxTQUFTLE1BQU0sTUFBTSxJQUFFLE1BQUssSUFBRSxJQUFFLEVBQUUsQ0FBQyxJQUFFLE1BQUksS0FBSyxJQUFJLFdBQVUsWUFBWTtBQUFFLFdBQUssV0FBUyxFQUFFLEtBQUssQ0FBQztB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QUksQ0FBQyxLQUFHLElBQUUsQ0FBQyxZQUFXLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRTtBQUFHO0FBQUEsUUFBSztBQUFBLFFBQUMsS0FBSztBQUFBLFFBQUcsS0FBSyxJQUFHO0FBQUMsY0FBRSxNQUFJLEtBQUcsTUFBSSxLQUFJLElBQUU7QUFBRSxhQUFFO0FBQUMsZ0JBQUcsSUFBRSxPQUFHLElBQUUsRUFBRSxRQUFRLEdBQUUsSUFBRSxDQUFDLEdBQUUsTUFBSSxHQUFHLEtBQUcsS0FBRyxHQUFFO0FBQUMsa0JBQUUsSUFBRTtBQUFFO0FBQUEsWUFBSyxNQUFNLEdBQUUsUUFBUTtBQUFFLGlCQUFJLElBQUUsR0FBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksS0FBSSxNQUFHLEdBQUUsSUFBRSxDQUFDO0FBQUEsVUFBQyxTQUFPO0FBQUcsY0FBRSxDQUFDLFVBQVMsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRTtBQUFFO0FBQUEsUUFBSztBQUFBLFFBQUMsS0FBSyxJQUFHO0FBQUMsYUFBRyxZQUFVLElBQUUsR0FBRSxHQUFHLEtBQUssQ0FBQyxHQUFFLEdBQUcsY0FBWSxJQUFFLElBQUUsRUFBRSxTQUFPLElBQUUsSUFBRSxHQUFHLFlBQVUsR0FBRSxJQUFFLENBQUMsV0FBVSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUU7QUFBQSxRQUFLO0FBQUEsUUFBQyxLQUFLLElBQUc7QUFBQyxlQUFJLElBQUUsR0FBRSxJQUFFLE1BQUcsRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLEtBQUksTUFBRyxHQUFFLElBQUUsQ0FBQztBQUFFLGNBQUcsSUFBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLEdBQUUsS0FBRyxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLEtBQUcsTUFBSSxNQUFJLE1BQUksT0FBSyxLQUFHLEdBQUUsR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBRztBQUFDLG1CQUFLLEdBQUcsS0FBSyxFQUFFLE9BQU8sSUFBRSxDQUFDLENBQUMsSUFBRyxNQUFHO0FBQUUsY0FBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLE9BQUssS0FBRztBQUFBLFVBQUU7QUFBQyxjQUFFLENBQUMsUUFBTyxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUU7QUFBQSxRQUFLO0FBQUEsUUFBQyxTQUFRO0FBQUMsZ0JBQUksTUFBSSxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksTUFBSSxJQUFFLEVBQUUsUUFBUSxNQUFLLElBQUUsQ0FBQyxJQUFFLEdBQUUsTUFBSSxNQUFJLEtBQUcsSUFBRSxJQUFFLEVBQUUsU0FBTyxFQUFFLFNBQVMsSUFBRyxJQUFFLENBQUMsV0FBVSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFLE1BQUksR0FBRyxZQUFVLElBQUUsR0FBRSxHQUFHLEtBQUssQ0FBQyxHQUFFLEdBQUcsY0FBWSxJQUFFLElBQUUsRUFBRSxTQUFPLElBQUUsSUFBRSxHQUFHLFlBQVUsR0FBRSxJQUFFLENBQUMsUUFBTyxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUU7QUFBRztBQUFBLFFBQUs7QUFBQSxNQUFDO0FBQUMsYUFBTyxLQUFJO0FBQUEsSUFBQztBQUFDLGFBQVMsRUFBRSxHQUFFO0FBQUMsUUFBRSxLQUFLLENBQUM7QUFBQSxJQUFDO0FBQUMsV0FBTSxFQUFDLE1BQUssR0FBRSxXQUFVLEdBQUUsV0FBVSxHQUFFLFVBQVMsRUFBQztBQUFBLEVBQUM7QUFBQyxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxNQUFJLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsRUFBQyxPQUFNLE1BQUcsT0FBTSxLQUFFO0FBQUUsV0FBUyxHQUFHLEdBQUU7QUFBQyxhQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBRyxHQUFFLEtBQUk7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUM7QUFBRSxVQUFHLEVBQUUsUUFBTztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsTUFBSSxLQUFHLE1BQUs7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFdBQUssUUFBTSxHQUFFLEtBQUssT0FBSyxJQUFJLE1BQUcsS0FBSyxVQUFRLEtBQUssTUFBSyxLQUFLLFNBQU8sSUFBRyxLQUFLLFlBQVUsT0FBRyxLQUFLLGdCQUFpQixHQUFDLEtBQUssS0FBSyxTQUFPLEVBQUMsT0FBTSxHQUFFLE9BQU0sRUFBQyxRQUFPLEdBQUUsTUFBSyxHQUFFLFFBQU8sRUFBQyxFQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsT0FBTyxHQUFFO0FBQUMsVUFBSSxJQUFFLElBQUk7QUFBRyxRQUFFLE9BQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUUsRUFBRSxTQUFPLE1BQUksS0FBSyxjQUFjLEdBQUUsQ0FBQyxHQUFFLEtBQUssS0FBSyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUUsVUFBSSxHQUFFLEdBQUUsR0FBRSxJQUFFLE9BQUcsSUFBRSxPQUFHLElBQUUsQ0FBRSxHQUFDLElBQUUsQ0FBRTtBQUFDLGFBQUssQ0FBQyxLQUFLLFVBQVUsVUFBUyxLQUFJO0FBQUMsWUFBRyxJQUFFLEtBQUssVUFBVSxVQUFXLEdBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxNQUFJLE9BQUssTUFBSSxNQUFJLEVBQUUsS0FBSyxNQUFJLE1BQUksTUFBSSxHQUFHLElBQUUsTUFBSSxPQUFLLEVBQUUsU0FBTyxJQUFFLEVBQUUsS0FBSyxHQUFHLElBQUUsTUFBSSxFQUFFLEVBQUUsU0FBTyxDQUFDLEtBQUcsRUFBRSxJQUFHLEdBQUcsRUFBRSxXQUFTLEVBQUUs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RUFBQyxXQUFXLEdBQUcsTUFBSSxFQUFFLFlBQVUsTUFBRyxFQUFFLEtBQUssWUFBVSxHQUFFLElBQUU7QUFBQSxRQUFFO0FBQUMsWUFBRyxFQUFFLENBQUMsTUFBSSxXQUFTLEVBQUUsQ0FBQyxNQUFJLFVBQVU7QUFBQSxNQUFLO0FBQUMsUUFBRSxLQUFLLE9BQUcsRUFBRSxDQUFDLE1BQUksV0FBUyxFQUFFLENBQUMsTUFBSSxTQUFTLE1BQUksRUFBRSxLQUFLLFdBQVMsRUFBRSxJQUFJLE9BQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRSxJQUFFLENBQUEsSUFBSSxLQUFLLElBQUksR0FBRSxTQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEVBQUUsTUFBTSxTQUFTLEdBQUcsS0FBRyxDQUFDLEtBQUcsS0FBSyxxQkFBcUIsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQU0sS0FBSyxNQUFNLE1BQU0sZ0JBQWUsRUFBQyxRQUFPLEVBQUUsQ0FBQyxFQUFDLEdBQUUsRUFBQyxRQUFPLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU0sQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFVBQVUsR0FBRTtBQUFDLFVBQUksSUFBRSxJQUFJO0FBQUcsV0FBSyxLQUFLLEdBQUUsRUFBRSxDQUFDLENBQUMsR0FBRSxFQUFFLFdBQVMsSUFBRyxFQUFFLEtBQUssVUFBUSxJQUFHLEtBQUssVUFBUTtBQUFBLElBQUM7QUFBQSxJQUFDLElBQUksR0FBRTtBQUFDLFdBQUssUUFBUSxTQUFPLEtBQUssUUFBUSxNQUFNLFdBQVMsS0FBSyxRQUFRLEtBQUssWUFBVSxLQUFLLFlBQVcsS0FBSyxZQUFVLE9BQUcsS0FBSyxRQUFRLEtBQUssU0FBTyxLQUFLLFFBQVEsS0FBSyxTQUFPLE1BQUksS0FBSyxRQUFPLEtBQUssU0FBTyxJQUFHLEtBQUssUUFBUSxVQUFRLEtBQUssUUFBUSxPQUFPLE1BQUksS0FBSyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEdB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LFVBQVUsS0FBSyxFQUFFLElBQUcsQ0FBRTtBQUFFLGFBQUssS0FBSyxHQUFFLENBQUM7QUFBQSxNQUFDLE1BQU0sTUFBSyxZQUFZLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxRQUFPO0FBQUMsVUFBSTtBQUFFLGFBQUssQ0FBQyxLQUFLLFVBQVUsVUFBVyxJQUFFLFNBQU8sSUFBRSxLQUFLLFVBQVUsVUFBVyxHQUFDLEVBQUUsQ0FBQztRQUFHLEtBQUk7QUFBUSxlQUFLLFVBQVEsRUFBRSxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUk7QUFBSSxlQUFLLGNBQWMsQ0FBQztBQUFFO0FBQUEsUUFBTSxLQUFJO0FBQUksZUFBSyxJQUFJLENBQUM7QUFBRTtBQUFBLFFBQU0sS0FBSTtBQUFVLGVBQUssUUFBUSxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUk7QUFBVSxlQUFLLE9BQU8sQ0FBQztBQUFFO0FBQUEsUUFBTSxLQUFJO0FBQUksZUFBSyxVQUFVLENBQUM7QUFBRTtBQUFBLFFBQU07QUFBUSxlQUFLLE1BQU0sQ0FBQztBQUFFO0FBQUEsTUFBSztBQUFDLFdBQUssUUFBTztBQUFBLElBQUU7QUFBQSxJQUFDLDBCQUF5QjtBQUFBLElBQUU7QUFBQSxJQUFBLElBQUksR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUksR0FBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRyxJQUFFLE1BQUcsR0FBRTtBQUFFLGVBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFHLEVBQUUsS0FBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQyxHQUFFLE1BQUksV0FBUyxNQUFJLElBQUUsS0FBRyxDQUFDLElBQUUsSUFBRSxRQUFHLE1BQUksYUFBVyxJQUFFLEVBQUUsSUFBRSxDQUFDLElBQUUsRUFBRSxJQUFFLENBQUMsRUFBRSxDQUFDLElBQUUsU0FBUSxJQUFFLEVBQUUsSUFBRSxDQUFDLElBQUUsRUFBRSxJQUFFLENBQUMsRUFBRSxDQUFDLElBQUUsU0FBUSxDQUFDLEdBQUcsQ0FBQyxLQUFHLENB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QUFFLENBQUMsRUFBRSxDQUFDLE1BQUksSUFBSSxRQUFPLEtBQUssVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBRyxTQUFJLElBQUUsS0FBSyxVQUFVLFVBQVMsR0FBRyxLQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFHLEdBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxLQUFLLFVBQVU7QUFBWSxRQUFJLElBQUUsRUFBRSxJQUFJLE9BQUcsRUFBRSxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxJQUFLLEdBQUMsSUFBRSxDQUFDLFFBQU8sRUFBRSxLQUFLLEVBQUUsR0FBRSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUFFLFdBQU8sS0FBSyxVQUFVLEtBQUssQ0FBQyxHQUFFLEtBQUssVUFBVSxLQUFLLENBQUMsR0FBRTtBQUFBLEVBQUUsRUFBQztBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFDLE1BQUksS0FBRyx1Q0FBc0MsS0FBRyxXQUFVLEtBQUcsT0FBRztBQUFDLFFBQUcsQ0FBQSxFQUFFLENBQUMsSUFBRSxHQUFFLENBQUMsQ0FBQyxJQUFFO0FBQUUsWUFBTyxNQUFJLE9BQUssTUFBSSxRQUFNLEdBQUcsS0FBSyxDQUFDLE1BQUksU0FBSSxHQUFHLEtBQUssQ0FBQyxNQUFJO0FBQUEsRUFBRTtBQUFFLEtBQUcsVUFBUSxFQUFDLGNBQWEsR0FBRTtBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFDLE1BQUksS0FBRyxHQUFFLEdBQUcsS0FBRztBQUFlLEtBQUcsVUFBUSxPQUFHO0FBQUMsUUFBRyxFQUFDLE1BQUssR0FBRSxRQUFPLElBQUUsR0FBRSxJQUFFO0FBQUUsUUFBRyxNQUFJLFlBQVUsRUFBRSxRQUFPO0FBQUMsUUFBRSxTQUFPO0FBQUcsVUFBSSxJQUFFLEdBQUcsRUFBQyxLQUFJLEVBQUMsQ0FBQztBQUFFLFdBQUksRUFBRSxXQUFTLEVBQUUsUUFBUSxJQUFHLElBQUksR0FBRSxDQUFDLEVBQUUsVUFBUyxLQUFJO0FBQUMsWUFBRyxDQUFDLEdBQUUsQ0FBQyxJQUFFLEVBQUUsVUFBVztBQUFDLFlBQUcsTUFBSSxVQUFRLE1BQUksTUFBTTtBQUFPLFlBQUcsTUFBSSxZQUFXO0FBQUMsWUFBRSxVQUFRLEdBQUUsRUFBRSxXQUFTLEVBQUUsUUFBUSxHQUFFLEVBQUUsRUFBRSxLQUFNO0FBQUM7QUFBQSxRQUFLO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQUMsTUFBSSxLQUFHLE1BQUssS0FBRztBQUFXLEtBQUcsVUFBUSxPQUFHO0FBQUMsUUFBRyxFQUFDLE1BQUssR0FBRSxRQUFPLElBQUUsR0FBRSxJQUFFO0FBQUUsUUFBRyxFQUFFLEtBQUssTUFBTSxFQUFFLE1BQUksS0FBSTtBQUFDLFVBQUcsR0FBRyxLQUFLLENBQUMsR0FBRTtBQUFDLFlBQUcsQ0FBQyxDQUFDLElBQUUsRUFBRSxNQUFNLEVBQUU7QUFBRSxVQUFFLE9BQUssRUFBRSxRQUFRLEdBQUUsRUFBRSxHQUFFLEVBQUUsS0FBSyxZQUFVLEtBQUcsRUFBRSxLQUFLLGFBQVcsS0FBSSxFQUFFLFdBQVMsTUFBRyxFQUFFLFFBQU0sRUFBRTtBQUFBLE1BQU07QUFBQyxVQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUU7QUFBQyxZQUFHLENBQUMsQ0FBQyxJQUFFLEVBQUUsTUFBTSxFQUFFO0FBQUUsVUFBRSxRQUFNLEVBQUUsUUFBUSxHQUFFLEVBQUUsR0FBRSxFQUFFLEtBQUssYUFBVyxFQUFFLEtBQUssYUFBVyxNQUFJLEdBQUUsRUFBRSxXQUFTO0FBQUEsTUFBRTtBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQUMsTUFBSSxLQUFHLE1BQUssS0FBRyxHQUFFLEdBQUcsRUFBQyxpQkFBZ0IsR0FBRSxJQUFFLEdBQUksR0FBQyxFQUFDLGVBQWMsR0FBRSxJQUFFLEdBQUksR0FBQyxFQUFDLGNBQWEsR0FBRSxJQUFFLEdBQUUsR0FBRyxLQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUUsR0FBRyxLQUFHO0FBQW9CLEtBQUcsVUFBUSxjQUFjLEdBQUU7QUFBQSxJQUFDLGVBQWUsR0FBRTtBQUFDLFlBQU0sR0FBRyxDQUFDLEdBQUUsS0FBSyxXQUFTO0FBQUEsSUFBSTtBQUFBLElBQUMsT0FBTyxHQUFFO0FBQUMsU0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLE1BQUksTUFBTSxPQUFPLENBQUMsR0FBRSxHQUFHLEtBQUssUUFBUSxHQUFFLEdBQUcsS0FBSyxRQUFRO0FBQUEsSUFBRTtBQUFBLElBQUMsUUFBUSxHQUFFO0FBQUMsWUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFFLGdCQUFnQixLQUFLLEtBQUssU0FBUyxLQUFLLE1BQUksS0FBSyxTQUFTLFNBQU87QUFBQSxJQUFHO0FBQUEsSUFBQyxLQUFLLEdBQUU7QUFBQyxRQUFFLENBQUMsRUFBRSxDQUFDLElBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFBRyxVQUFJLElBQUUsRUFBRSxVQUFVLE9BQUcsRUFBRSxDQUFDLE1BQUksR0FBRyxHQUFFLElBQUUsRUFBRSxRQUFTLEVBQUMsS0FBSyxPQUFHLEVBQUUsQ0FBQyxNQUFJLEdBQUcsR0FBRSxJQUFFLEVBQUUsUUFBUyxFQUFDLFFBQVEsQ0FBQyxHQUFFLElBQUUsRUFBRSxPQUFPLEdBQUUsQ0FBQyxFQUFFLElBQUksT0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRTtBQUFFLGVBQVEsS0FBSyxFQUFFLFFBQVMsRUFBQyxNQUFLLFVBQVUsS0FBSyxDQUFDO0FBQUUsV0FBSyxPQUFPLEtBQUssVUFBVSxXQUFXLEdBQUUsS0FBSyxTQUFTLFdBQVMsTUFBRyxLQUFLLFNBQVMsU0FBTztBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUssR0FBRSxHQUFFLEdBQUU7QUFBQyxZQUFNLEtBQUssR0FBRSxHQUFFLENBQUMsR0FBRSxLQUFLLFdBQVM7QUFBQSxJQUFDO0FBQUEsSUFBQyxjQUFjLEdBQUU7QUFBQyxVQUFJLElBQUUsSUFBSSxNQUFHLElBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDO0FBQUUsVUFBRyxLQUFLLEtBQUssR0FBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsT0FBTyxNQUFJLEtBQUssWUFBWSxFQUFFLENBQUMsS0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsU0FBTyxNQUFHLEVBQUUsS0FBSyxRQUFNLE1BQUssUUFBUSxLQUFLLENBQUMsRUFBRSxHQUFFLE9BQUssSUFBRyxFQUFFLEtBQUssT0FBSyxHQUFFLEVBQUUsS0FBSyxRQUFNO0FBQUEsV0FBTztBQUFDLFlBQUksSUFBRSxFQUFFLE1BQU0seUJBQXlCO0FBQUUsV0FBRSxFQUFFLEtBQUssTUFBSyxFQUFFLE1BQUssRUFBRSxLQUFLLEtBQUssSUFBRTtBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxNQUFNLEdBQUU7QUFBQyxVQUFHLENBQUMsQ0FBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxVQUFVLE9BQUcsRUFBRSxDQUFDLE1BQUksVUFBVSxHQUFFLElBQUUsRUFBRSxVQUFVLE9BQUcsRUFBRSxDQUFDLE1BQUksR0FBRyxHQUFFLElBQUU7QUFBRyxXQUFJLElBQUUsS0FBRyxJQUFFLE1BQUksSUFBRSxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUUsR0FBRSxNQUFJLEVBQUUsQ0FBQyxNQUFJLE1BQUksSUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsRUFBRSxJQUFJLE9BQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRSxDQUFDLENBQUMsSUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxJQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsQ0FBQyxZQUFXLENBQUMsRUFBRSxPQUFPLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxNQUFNLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxNQUFNLElBQUUsQ0FBQztBQUFFLFlBQUUsR0FBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBQSxNQUFDO0FBQUMsVUFBSSxJQUFFLENBQUE7QUFBRyxlQUFRLEtBQUssRUFBRSxNQUFJLEVBQUUsQ0FBQyxNQUFJLE9BQUssRUFBRSxXQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxDQUFDLE1BQUksWUFBWTtBQUFNLFVBQUcsRUFBRSxRQUFPO0FBQUMsWUFBRyxDQUFDLENBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFRLENBQUMsR0FBRSxJQUFFLEVBQUUsRUFBRSxTQUFPLENBQUMsR0FBRSxJQUFFLENBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLENBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLENBQUMsUUFBTyxFQUFFLElBQUksT0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxHQUFFLENBQUM7QUFBRSxVQUFFLE9BQU8sR0FBRSxFQUFFLFFBQU8sQ0FBQztBQUFBLE1BQUM7QUFBQyxVQUFJLElBQUUsRUFBRSxVQUFVLE9BQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFBRSxVQUFFLE1BQUksQ0FBQSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxFQUFFLE9BQU8sR0FBRSxDQUFDO0FBQUcsZUFBUSxLQUFLLEVBQUUsUUFBUyxFQUFDLE1BQUssVUFBVSxLQUFLLENBQUM7QUFBRSxXQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVcsQ0FBQSxHQUFFLEtBQUssU0FBUyxRQUFNLE1BQUcsS0FBSyxTQUFTLEtBQUssYUFBVyxHQUFFLE1BQUksS0FBSyxTQUFTLFlBQVUsTUFBRyxLQUFLLFNBQVMsS0FBSyxZQUFVO0FBQUEsSUFBRTtBQUFBLElBQUMsTUFBTSxHQUFFO0FBQUMsU0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLEtBQUcsTUFBTSxNQUFNLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxLQUFLLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxFQUFFLFNBQU8sQ0FBQyxHQUFFLElBQUUsRUFBRSxFQUFFLFNBQU8sQ0FBQztBQUFFLFVBQUcsRUFBRSxDQUFDLE1BQUksYUFBVyxFQUFFLENBQUMsTUFBSSxRQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsR0FBRSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBRztBQUFDLFlBQUksSUFBRSxLQUFLLFVBQVUsVUFBUztBQUFHLFlBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRSxTQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQUUsaUJBQVEsS0FBSyxFQUFFLFFBQVMsRUFBQyxNQUFLLFVBQVUsS0FBSyxDQUFDO0FBQUU7QUFBQSxNQUFNO0FBQUMsWUFBTSxLQUFLLENBQUMsR0FBRSxpQkFBaUIsS0FBSyxLQUFLLFNBQVMsUUFBUSxNQUFJLEtBQUssU0FBUyxTQUFPO0FBQUEsSUFBRztBQUFBLElBQUMsWUFBWSxHQUFFO0FBQUMsVUFBRyxDQUFDLENBQUMsSUFBRTtBQUFFLFVBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFJLFVBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFJLEtBQUk7QUFBQyxhQUFLLEtBQUssQ0FBQztBQUFFO0FBQUEsTUFBTTtBQUFDLFVBQUcsR0FBRyxDQUFDLEdBQUU7QUFBQyxhQUFLLE1BQU0sQ0FBQztBQUFFO0FBQUEsTUFBTTtBQUFDLFlBQU0sWUFBWSxDQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBQyxNQUFJLEtBQUc7QUFBSyxLQUFHLFVBQVEsY0FBYyxHQUFFO0FBQUEsSUFBQyxPQUFPLEdBQUUsR0FBRTtBQUFDLFVBQUcsQ0FBQyxFQUFFLFNBQU8sQ0FBQyxFQUFFLFlBQVUsQ0FBQyxFQUFFLFVBQVM7QUFBQyxjQUFNLE9BQU8sR0FBRSxDQUFDO0FBQUU7QUFBQSxNQUFNO0FBQUMsVUFBSSxJQUFFLEdBQUcsRUFBRSxXQUFTLEtBQUcsRUFBRSxLQUFLLGNBQVksR0FBRyxHQUFHLEVBQUUsSUFBSSxJQUFHLElBQUUsRUFBRSxTQUFPLEtBQUssU0FBUyxHQUFFLFFBQVEsSUFBRSxJQUFHLElBQUUsRUFBRSxLQUFLLGFBQVc7QUFBRyxVQUFHLEVBQUUsYUFBVyxJQUFFLEVBQUUsUUFBTyxPQUFPLEVBQUUsS0FBSyxZQUFVLE1BQUksS0FBRyxFQUFFLEtBQUssWUFBVSxNQUFJLEtBQUcsTUFBSyxFQUFFLE1BQU0sTUFBSyxNQUFNLEdBQUUsSUFBRSxJQUFFLENBQUM7QUFBQSxXQUFNO0FBQUMsWUFBSSxLQUFHLEVBQUUsS0FBSyxXQUFTLE1BQUksS0FBRyxJQUFFLE1BQUk7QUFBSSxhQUFLLFFBQVEsSUFBRSxJQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxRQUFRLEdBQUU7QUFBQyxVQUFHLEVBQUUsUUFBTztBQUFDLFlBQUksSUFBRSxLQUFLLElBQUksR0FBRSxRQUFPLGFBQWEsR0FBRSxJQUFFLEtBQUssSUFBSSxHQUFFLFNBQVEsY0FBYztBQUFFLGFBQUssUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLElBQUcsQ0FBQztBQUFBLE1BQUMsTUFBTSxPQUFNLFFBQVEsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQUMsTUFBSSxLQUFHLE1BQUssS0FBRyxHQUFFLEdBQUcsS0FBRztBQUFLLEtBQUcsVUFBUSxFQUFDLE1BQU0sR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLElBQUksR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFFLElBQUksR0FBRyxDQUFDO0FBQUUsV0FBTyxFQUFFLE1BQUssR0FBRyxFQUFFLEtBQUssS0FBSyxPQUFHO0FBQUMsVUFBSSxJQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUUsT0FBTyxNQUFNLEdBQUc7QUFBRSxVQUFHLE1BQUksRUFBRTtBQUFPLFVBQUcsSUFBRSxFQUFFLE9BQU8sTUFBTSxJQUFJLFdBQVMsRUFBRSxJQUFJLE9BQU8sT0FBTSxJQUFJLE1BQU0sd0NBQXdDO0FBQUUsVUFBSSxJQUFFLElBQUUsRUFBRSxPQUFPLE1BQU0sUUFBTyxJQUFFLEVBQUUsV0FBVyxJQUFFLEVBQUUsT0FBTyxNQUFNLE1BQU07QUFBRSxVQUFHLEVBQUUsT0FBTyxRQUFNLEVBQUMsUUFBTyxHQUFFLE1BQUssRUFBRSxNQUFLLFFBQU8sRUFBRSxJQUFHLEdBQUUsRUFBRSxPQUFPLEtBQUk7QUFBQyxZQUFJLElBQUUsSUFBRSxFQUFFLE9BQU8sSUFBSSxRQUFPLElBQUUsRUFBRSxXQUFXLElBQUUsRUFBRSxPQUFPLElBQUksTUFBTTtBQUFFLFVBQUUsT0FBTyxNQUFJLEVBQUMsUUFBTyxHQUFFLE1BQUssRUFBRSxNQUFLLFFBQU8sRUFBRSxJQUFHO0FBQUEsTUFBQztBQUFBLElBQUMsQ0FBQyxHQUFFLEVBQUU7QUFBQSxFQUFJLEdBQUUsVUFBVSxHQUFFLEdBQUU7QUFBQyxRQUFJLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQztBQUFBLEVBQUMsR0FBRSxhQUFhLEdBQUU7QUFBQyxRQUFJLElBQUU7QUFBRyxXQUFPLEdBQUcsUUFBUSxVQUFVLEdBQUUsT0FBRztBQUFDLFdBQUc7QUFBQSxJQUFDLENBQUMsR0FBRTtBQUFBLEVBQUMsRUFBQztBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxNQUFLLElBQUcsSUFBRyxLQUFHLGNBQWMsR0FBRTtBQUFBLElBQUMsWUFBWSxHQUFFO0FBQUMsWUFBTSxFQUFDLE1BQUssWUFBVyxHQUFHLEVBQUMsQ0FBQyxHQUFFLEtBQUssVUFBUSxLQUFLLFFBQU0sQ0FBQTtBQUFBLElBQUc7QUFBQSxJQUFDLFNBQVMsSUFBRSxDQUFBLEdBQUc7QUFBQyxhQUFPLElBQUksR0FBRyxJQUFJLE1BQUcsTUFBSyxDQUFDLEVBQUUsVUFBUztBQUFBLElBQUU7QUFBQSxFQUFDO0FBQUUsS0FBRyxxQkFBbUIsT0FBRztBQUFDLFNBQUc7QUFBQSxFQUFDO0FBQUUsS0FBRyxvQkFBa0IsT0FBRztBQUFDLFNBQUc7QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEdBQUksR0FBQyxLQUFHLEdBQUksR0FBQyxLQUFHLEdBQUksR0FBQyxLQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUksR0FBQyxLQUFHLEdBQUksR0FBQyxLQUFHLEdBQUk7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxNQUFNLFFBQVEsQ0FBQyxFQUFFLFFBQU8sRUFBRSxJQUFJLE9BQUcsR0FBRyxDQUFDLENBQUM7QUFBRSxRQUFHLEVBQUMsUUFBTyxHQUFFLEdBQUcsRUFBQyxJQUFFO0FBQUUsUUFBRyxHQUFFO0FBQUMsVUFBRSxDQUFBO0FBQUcsZUFBUSxLQUFLLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBQyxHQUFHLEdBQUUsV0FBVSxHQUFHLFVBQVM7QUFBRSxVQUFFLFFBQU0sRUFBRSxNQUFJLEVBQUMsR0FBRyxFQUFFLEtBQUksV0FBVSxHQUFHLFVBQVMsSUFBRyxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxFQUFFLFVBQVEsRUFBRSxRQUFNLEVBQUUsTUFBTSxJQUFJLE9BQUcsR0FBRyxHQUFFLENBQUMsQ0FBQyxJQUFHLEVBQUUsUUFBTztBQUFDLFVBQUcsRUFBQyxTQUFRLEdBQUUsR0FBRyxFQUFDLElBQUUsRUFBRTtBQUFPLFFBQUUsU0FBTyxHQUFFLEtBQUcsU0FBTyxFQUFFLE9BQU8sUUFBTSxFQUFFLENBQUM7QUFBQSxJQUFFO0FBQUMsUUFBRyxFQUFFLFNBQU8sT0FBTyxRQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsUUFBRyxFQUFFLFNBQU8sT0FBTyxRQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsUUFBRyxFQUFFLFNBQU8sT0FBTyxRQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsUUFBRyxFQUFFLFNBQU8sVUFBVSxRQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsUUFBRyxFQUFFLFNBQU8sU0FBUyxRQUFPLElBQUksR0FBRyxDQUFDO0FBQUUsVUFBTSxJQUFJLE1BQU0sd0JBQXNCLEVBQUUsSUFBSTtBQUFBLEVBQUM7QUFBQyxLQUFHLFVBQVE7QUFBRyxLQUFHLFVBQVE7QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBQyxLQUFHLFVBQVEsTUFBSztBQUFBLElBQUMsV0FBVTtBQUFBLElBQUE7QUFBQSxFQUFFO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLE1BQUs7QUFBQSxJQUFDLFlBQVksR0FBRSxJQUFFLENBQUEsR0FBRztBQUFDLFVBQUcsS0FBSyxPQUFLLFdBQVUsS0FBSyxPQUFLLEdBQUUsRUFBRSxRQUFNLEVBQUUsS0FBSyxRQUFPO0FBQUMsWUFBSSxJQUFFLEVBQUUsS0FBSyxRQUFRLENBQUM7QUFBRSxhQUFLLE9BQUssRUFBRSxNQUFNLE1BQUssS0FBSyxTQUFPLEVBQUUsTUFBTSxRQUFPLEtBQUssVUFBUSxFQUFFLElBQUksTUFBSyxLQUFLLFlBQVUsRUFBRSxJQUFJO0FBQUEsTUFBTTtBQUFDLGVBQVEsS0FBSyxFQUFFLE1BQUssQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFdBQVU7QUFBQyxhQUFPLEtBQUssT0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQUssRUFBQyxPQUFNLEtBQUssT0FBTSxRQUFPLEtBQUssUUFBTyxNQUFLLEtBQUssS0FBSSxDQUFDLEVBQUUsVUFBUSxLQUFLLFNBQU8sS0FBSyxTQUFPLE9BQUssS0FBSyxPQUFLLEtBQUs7QUFBQSxJQUFJO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBUTtBQUFHLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxHQUFJLEdBQUMsS0FBRyxNQUFLO0FBQUEsSUFBQyxJQUFJLFVBQVM7QUFBQyxhQUFPLEtBQUs7QUFBQSxJQUFHO0FBQUEsSUFBQyxZQUFZLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBSyxZQUFVLEdBQUUsS0FBSyxXQUFTLENBQUUsR0FBQyxLQUFLLE9BQUssR0FBRSxLQUFLLE9BQUssR0FBRSxLQUFLLE1BQUksUUFBTyxLQUFLLE1BQUk7QUFBQSxJQUFNO0FBQUEsSUFBQyxXQUFVO0FBQUMsYUFBTyxLQUFLO0FBQUEsSUFBRztBQUFBLElBQUMsS0FBSyxHQUFFLElBQUUsQ0FBQSxHQUFHO0FBQUMsUUFBRSxVQUFRLEtBQUssY0FBWSxLQUFLLFdBQVcsa0JBQWdCLEVBQUUsU0FBTyxLQUFLLFdBQVc7QUFBZSxVQUFJLElBQUUsSUFBSSxHQUFHLEdBQUUsQ0FBQztBQUFFLGFBQU8sS0FBSyxTQUFTLEtBQUssQ0FBQyxHQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsV0FBVTtBQUFDLGFBQU8sS0FBSyxTQUFTLE9BQU8sT0FBRyxFQUFFLFNBQU8sU0FBUztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLENBQUE7QUFBRyxLQUFHLFVBQVEsU0FBUyxHQUFFO0FBQUMsT0FBRyxDQUFDLE1BQUksR0FBRyxDQUFDLElBQUUsTUFBRyxPQUFPLFVBQVEsT0FBSyxRQUFRLFFBQU0sUUFBUSxLQUFLLENBQUM7QUFBQSxFQUFFO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWlCLE1BQUMsS0FBRyxHQUFJLEdBQUMsS0FBRyxHQUFJLEdBQUMsS0FBRyxHQUFJLEdBQUMsS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFJLEdBQUMsRUFBQyxTQUFRLEdBQUUsSUFBRyxHQUFFLElBQUU7QUFBUSxLQUFJO0FBQUEsTUFBQyxLQUFHLEVBQUMsUUFBTyxVQUFTLFNBQVEsV0FBVSxNQUFLLGVBQWMsVUFBUyxZQUFXLE1BQUssUUFBTyxNQUFLLE9BQU0sR0FBRSxLQUFHLEVBQUMsUUFBTyxNQUFHLFlBQVcsTUFBRyxTQUFRLE1BQUcsYUFBWSxNQUFHLGFBQVksTUFBRyxpQkFBZ0IsTUFBRyxVQUFTLE1BQUcsY0FBYSxNQUFHLE1BQUssTUFBRyxVQUFTLE1BQUcsZUFBYyxNQUFHLFNBQVEsTUFBRyxNQUFLLE1BQUcsVUFBUyxNQUFHLE1BQUssTUFBRyxVQUFTLEtBQUUsR0FBRSxLQUFHLEVBQUMsTUFBSyxNQUFHLGVBQWMsTUFBRyxTQUFRLEtBQUUsR0FBRSxLQUFHO0FBQUUsV0FBUyxHQUFHLEdBQUU7QUFBQyxXQUFPLE9BQU8sS0FBRyxZQUFVLE9BQU8sRUFBRSxRQUFNO0FBQUEsRUFBVTtBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLE9BQUcsSUFBRSxHQUFHLEVBQUUsSUFBSTtBQUFFLFdBQU8sRUFBRSxTQUFPLFNBQU8sSUFBRSxFQUFFLEtBQUssZ0JBQWMsRUFBRSxTQUFPLGFBQVcsSUFBRSxFQUFFLEtBQUssWUFBYSxJQUFFLEtBQUcsRUFBRSxTQUFPLENBQUMsR0FBRSxJQUFFLE1BQUksR0FBRSxJQUFHLElBQUUsUUFBTyxJQUFFLFVBQVEsQ0FBQyxJQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsTUFBSSxHQUFFLElBQUUsUUFBTyxJQUFFLFVBQVEsQ0FBQyxJQUFFLEVBQUUsU0FBTyxDQUFDLEdBQUUsSUFBRyxJQUFFLE1BQU0sSUFBRSxDQUFDLEdBQUUsSUFBRSxNQUFNO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBSTtBQUFFLFdBQU8sRUFBRSxTQUFPLGFBQVcsSUFBRSxDQUFDLFlBQVcsSUFBRyxjQUFjLElBQUUsRUFBRSxTQUFPLFNBQU8sSUFBRSxDQUFDLFFBQU8sSUFBRyxVQUFVLElBQUUsSUFBRSxHQUFHLENBQUMsR0FBRSxFQUFDLFlBQVcsR0FBRSxRQUFPLEdBQUUsVUFBUyxHQUFFLE1BQUssR0FBRSxjQUFhLEdBQUUsVUFBUyxDQUFBLEVBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxXQUFPLEVBQUUsQ0FBQyxJQUFFLE9BQUcsRUFBRSxTQUFPLEVBQUUsTUFBTSxRQUFRLE9BQUcsR0FBRyxDQUFDLENBQUMsR0FBRTtBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsQ0FBRSxHQUFDLEtBQUcsTUFBTSxFQUFDO0FBQUEsSUFBQyxJQUFJLFVBQVM7QUFBQyxhQUFPLEtBQUssVUFBUyxFQUFHO0FBQUEsSUFBTztBQUFBLElBQUMsSUFBSSxNQUFLO0FBQUMsYUFBTyxLQUFLLFVBQVcsRUFBQztBQUFBLElBQUc7QUFBQSxJQUFDLElBQUksTUFBSztBQUFDLGFBQU8sS0FBSyxVQUFTLEVBQUc7QUFBQSxJQUFHO0FBQUEsSUFBQyxJQUFJLFdBQVU7QUFBQyxhQUFPLEtBQUssS0FBTSxFQUFDO0FBQUEsSUFBUTtBQUFBLElBQUMsSUFBSSxPQUFNO0FBQUMsYUFBTyxLQUFLLE9BQU87QUFBQSxJQUFJO0FBQUEsSUFBQyxJQUFJLFlBQVc7QUFBQyxhQUFPLEtBQUssT0FBTztBQUFBLElBQVM7QUFBQSxJQUFDLElBQUksT0FBTTtBQUFDLGFBQU8sS0FBSyxLQUFNLEVBQUM7QUFBQSxJQUFJO0FBQUEsSUFBQyxLQUFJLE9BQU8sV0FBVyxJQUFHO0FBQUMsYUFBTTtBQUFBLElBQVk7QUFBQSxJQUFDLFlBQVksR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFLLGNBQVksT0FBRyxLQUFLLFlBQVU7QUFBRyxVQUFJO0FBQUUsVUFBRyxPQUFPLEtBQUcsWUFBVSxNQUFJLFNBQU8sRUFBRSxTQUFPLFVBQVEsRUFBRSxTQUFPLFlBQVksS0FBRSxHQUFHLENBQUM7QUFBQSxlQUFVLGFBQWEsS0FBRyxhQUFhLEdBQUcsS0FBRSxHQUFHLEVBQUUsSUFBSSxHQUFFLEVBQUUsUUFBTSxPQUFPLEVBQUUsTUFBSSxRQUFNLEVBQUUsTUFBSSxDQUFFLElBQUUsRUFBRSxJQUFJLFdBQVMsRUFBRSxJQUFJLFNBQU8sUUFBSSxFQUFFLElBQUksT0FBSyxFQUFFO0FBQUEsV0FBUztBQUFDLFlBQUksSUFBRTtBQUFHLFVBQUUsV0FBUyxJQUFFLEVBQUUsT0FBTyxRQUFPLEVBQUUsV0FBUyxJQUFFLEVBQUUsU0FBUSxFQUFFLFVBQVEsSUFBRSxFQUFFO0FBQU8sWUFBRztBQUFDLGNBQUUsRUFBRSxHQUFFLENBQUM7QUFBQSxRQUFDLFNBQU8sR0FBRTtBQUFDLGVBQUssWUFBVSxNQUFHLEtBQUssUUFBTTtBQUFBLFFBQUM7QUFBQyxhQUFHLENBQUMsRUFBRSxFQUFFLEtBQUcsR0FBRyxRQUFRLENBQUM7QUFBQSxNQUFDO0FBQUMsV0FBSyxTQUFPLElBQUksR0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUssVUFBUSxFQUFDLEdBQUcsSUFBRyxTQUFRLElBQUcsUUFBTyxLQUFLLE9BQU0sR0FBRSxLQUFLLFVBQVEsS0FBSyxVQUFVLFFBQVEsSUFBSSxPQUFHLE9BQU8sS0FBRyxZQUFVLEVBQUUsVUFBUSxFQUFDLEdBQUcsR0FBRSxHQUFHLEVBQUUsUUFBUSxLQUFLLE1BQU0sRUFBQyxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxRQUFPO0FBQUMsYUFBTyxLQUFLLFFBQU0sUUFBUSxPQUFPLEtBQUssS0FBSyxJQUFFLEtBQUssWUFBVSxRQUFRLFFBQVEsS0FBSyxNQUFNLEtBQUcsS0FBSyxlQUFhLEtBQUssYUFBVyxLQUFLLFNBQVUsSUFBRSxLQUFLO0FBQUEs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V0FBUyxJQUFFLEVBQUUsT0FBTyxZQUFXLEVBQUUsZ0JBQWMsSUFBRSxFQUFFLGNBQWEsRUFBRSxjQUFZLElBQUUsRUFBRTtBQUFXLFVBQUksSUFBRSxJQUFJLEdBQUcsR0FBRSxLQUFLLE9BQU8sTUFBSyxLQUFLLE9BQU8sSUFBSSxFQUFFLFNBQVE7QUFBRyxhQUFPLEtBQUssT0FBTyxNQUFJLEVBQUUsQ0FBQyxHQUFFLEtBQUssT0FBTyxNQUFJLEVBQUUsQ0FBQyxHQUFFLEtBQUs7QUFBQSxJQUFNO0FBQUEsSUFBQyxPQUFNO0FBQUMsVUFBRyxLQUFLLE1BQU0sT0FBTSxLQUFLO0FBQU0sVUFBRyxLQUFLLFVBQVUsUUFBTyxLQUFLO0FBQU8sVUFBRyxLQUFLLFlBQVUsTUFBRyxLQUFLLFdBQVcsT0FBTSxLQUFLLGNBQWE7QUFBRyxlQUFRLEtBQUssS0FBSyxTQUFRO0FBQUMsWUFBSSxJQUFFLEtBQUssVUFBVSxDQUFDO0FBQUUsWUFBRyxHQUFHLENBQUMsRUFBRSxPQUFNLEtBQUssY0FBYTtBQUFBLE1BQUU7QUFBQyxVQUFHLEtBQUssZ0JBQWlCLEdBQUMsS0FBSyxhQUFZO0FBQUMsWUFBSSxJQUFFLEtBQUssT0FBTztBQUFLLGVBQUssQ0FBQyxFQUFFLENBQUMsSUFBRyxHQUFFLENBQUMsSUFBRSxNQUFHLEtBQUssU0FBUyxDQUFDO0FBQUUsWUFBRyxLQUFLLFVBQVUsU0FBUyxLQUFHLEVBQUUsU0FBTyxXQUFXLFVBQVEsS0FBSyxFQUFFLE1BQU0sTUFBSyxVQUFVLEtBQUssVUFBVSxVQUFTLENBQUM7QUFBQSxZQUFPLE1BQUssVUFBVSxLQUFLLFVBQVUsVUFBUyxDQUFDO0FBQUEsTUFBQztBQUFDLGFBQU8sS0FBSztBQUFBLElBQU07QUFBQSxJQUFDLEtBQUssR0FBRSxHQUFFO0FBQUMsYUFBTyxLQUFLLE1BQU8sRUFBQyxLQUFLLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFdBQVU7QUFBQyxhQUFPLEtBQUs7QUFBQSxJQUFHO0FBQUEsSUFBQyxVQUFVLEdBQUUsR0FBRTtBQUFDLGVB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QUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWlCLE1BQUMsS0FBRyxNQUFLLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBSTtBQUFJLEtBQUU7QUFBRyxNQUFBLEtBQUcsTUFBSztBQUFBLElBQUMsSUFBSSxVQUFTO0FBQUMsYUFBTyxLQUFLLE9BQU87QUFBQSxJQUFHO0FBQUEsSUFBQyxJQUFJLE1BQUs7QUFBQyxhQUFPLEtBQUssT0FBTztBQUFBLElBQUc7QUFBQSxJQUFDLElBQUksTUFBSztBQUFDLGFBQU8sS0FBSyxPQUFPO0FBQUEsSUFBRztBQUFBLElBQUMsSUFBSSxXQUFVO0FBQUMsYUFBTTtJQUFFO0FBQUEsSUFBQyxJQUFJLE9BQU07QUFBQyxhQUFPLEtBQUssT0FBTztBQUFBLElBQUk7QUFBQSxJQUFDLElBQUksWUFBVztBQUFDLGFBQU8sS0FBSyxPQUFPO0FBQUEsSUFBUztBQUFBLElBQUMsSUFBSSxPQUFNO0FBQUMsVUFBRyxLQUFLLE1BQU0sUUFBTyxLQUFLO0FBQU0sVUFBSSxHQUFFLElBQUU7QUFBRyxVQUFHO0FBQUMsWUFBRSxFQUFFLEtBQUssTUFBSyxLQUFLLEtBQUs7QUFBQSxNQUFDLFNBQU8sR0FBRTtBQUFDLGFBQUssUUFBTTtBQUFBLE1BQUM7QUFBQyxVQUFHLEtBQUssTUFBTSxPQUFNLEtBQUs7QUFBTSxhQUFPLEtBQUssUUFBTSxHQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSSxPQUFPLFdBQVcsSUFBRztBQUFDLGFBQU07QUFBQSxJQUFjO0FBQUEsSUFBQyxZQUFZLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBRSxFQUFFLFNBQVUsR0FBQyxLQUFLLGNBQVksT0FBRyxLQUFLLGFBQVcsR0FBRSxLQUFLLE9BQUssR0FBRSxLQUFLLFFBQU0sR0FBRSxLQUFLLE9BQUs7QUFBTyxVQUFJLEdBQUUsSUFBRTtBQUFHLFdBQUssU0FBTyxJQUFJLEdBQUcsS0FBSyxZQUFXLEdBQUUsS0FBSyxLQUFLLEdBQUUsS0FBSyxPQUFPLE1BQUk7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QUFFLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxJQUFFLENBQUEsR0FBRyxJQUFFLENBQUUsR0FBQztBQUFFLGFBQVMsSUFBRztBQUFDLGFBQU87QUFBQSxJQUFDO0FBQUMsYUFBUyxFQUFFLEdBQUU7QUFBQyxZQUFNLEVBQUUsTUFBTSxjQUFZLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQyxhQUFTLElBQUc7QUFBQyxhQUFPLEVBQUUsV0FBUyxLQUFHLEtBQUc7QUFBQSxJQUFDO0FBQUMsYUFBUyxJQUFHO0FBQUMsVUFBSSxJQUFFLEdBQUUsSUFBRSxPQUFHLElBQUU7QUFBRyxhQUFLLElBQUUsSUFBRyxNQUFHLEdBQUUsRUFBRSxVQUFRLEtBQUcsRUFBRSxlQUFlLEdBQUUsSUFBRSxFQUFFLFdBQVcsQ0FBQyxHQUFFLElBQUUsRUFBRSxXQUFXLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxLQUFHLE1BQUksS0FBRyxJQUFFLE9BQUcsSUFBRSxTQUFJLE1BQUksS0FBRyxJQUFFLENBQUMsSUFBRSxNQUFJLElBQUUsU0FBSSxNQUFJLE1BQUksTUFBSSxLQUFHLElBQUUsSUFBRSxNQUFJLE1BQUksS0FBRyxJQUFFLE1BQUksTUFBSSxNQUFJLFFBQU0sS0FBRztBQUFBLElBQUU7QUFBQyxhQUFTLEVBQUUsR0FBRTtBQUFDLFVBQUcsRUFBRSxPQUFPLFFBQU8sRUFBRSxJQUFLO0FBQUMsVUFBRyxLQUFHLEVBQUU7QUFBTyxVQUFJLElBQUUsSUFBRSxFQUFFLGlCQUFlO0FBQUcsY0FBTyxJQUFFLEVBQUUsV0FBVyxDQUFDLEdBQUUsR0FBQztBQUFBLFFBQUUsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFBLFFBQUUsS0FBSztBQUFBLFFBQUcsS0FBSyxJQUFHO0FBQUMsY0FBRTtBQUFFO0FBQUcsaUJBQUcsR0FBRSxJQUFFLEVBQUUsV0FBVyxDQUFDO0FBQUEsaUJBQVEsTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLEtBQUcsTUFBSSxNQUFJLE1BQUk7QUFBSSxjQUFFLENBQUMsU0FBUSxFQUFFLE1BQU0sR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFLElBQUU7QUFBRTtBQUFBLFFBQUs7QUFBQSxRQUFDLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFJLEtBQUs7QUFBQSxRQUFJLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFHLEtBQUssSUFBRztBQUFDLGNBQUksSUFBRSxPQUFPLGFBQWEsQ0FBQztBQUFFLGNBQUUsQ0FBQyxHQUFFLEdBQUUsQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFBLFFBQUMsS0FBSyxJQUFHO0FBQUMsY0FBRSxDQUFDLFFBQU8sS0FBSSxHQUFFLElBQUUsQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFBLFFBQUMsS0FBSyxJQUFHO0FBQUMsY0FBRyxJQUFFLEVBQUUsU0FBTyxFQUFFLElBQUssRUFBQyxDQUFDLElBQUUsSUFBRyxJQUFFLEVBQUUsV0FBVyxJQUFFLENBQUMsR0FBRSxNQUFJLFNBQU8sTUFBSSxNQUFJLE1BQUksSUFBRztBQUFDLGlCQUFJLElBQUUsR0FBRSxJQUFFLE9BQUcsSUFBRSxJQUFFLEdBQUUsS0FBRyxFQUFFLFNBQU8sS0FBRztBQUFDLGtCQUFHLElBQUUsRUFBRSxXQUFXLENBQUMsR0FBRSxNQUFJLEdBQUcsS0FBRSxDQUFDO0FBQUEsdUJBQVUsTUFBSSxHQUFHLE1BQUc7QUFBQSx1QkFBVSxNQUFJLE9BQUssS0FBRyxHQUFFLE1BQUksR0FBRztBQUFNLG1CQUFHO0FBQUEsWUFBQztBQUFDLGdCQUFFLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQyxZQUFXLEdBQUUsR0FBRSxDQUFDLEdBQUUsSUFBRTtBQUFBLFVBQUMsTUFBTSxLQUFFLEVBQUUsUUFBUSxLQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsTUFBSSxNQUFJLEdBQUcsS0FBSyxDQUFDLElBQUUsSUFBRSxDQUFDLEtBQUksS0FBSSxDQUFDLEtBQUcsSUFBRSxDQUFDLFlBQVcsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUc7QUFBQSxRQUFLO0FBQUEsUUFBQyxLQUFLO0FBQUEsUUFBRyxLQUFLLElBQUc7QUFBQyxlQUFJLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxPQUFHLElBQUUsTUFBSSxLQUFJLE1BQUksS0FBRyxFQUFFLFFBQVEsR0FBRSxJQUFFLEVBQUUsV0FBVyxDQUFDLEdBQUUsSUFBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLEtBQUcsTUFBSSxNQUFLLE9BQUksS0FBRyxJQUFFLENBQUMsSUFBRSxJQUFFLElBQUUsUUFBRyxNQUFJLE1BQUksTUFBSSxPQUFLLEVBQUc7QUFBQyxjQUFFLENBQUMsVUFBUyxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUU7QUFBQSxRQUFLO0FBQUEsUUFBQyxLQUFLLElBQUc7QUFBQyxhQUFHLFlBQVUsSUFBRSxHQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUUsR0FBRyxjQUFZLElBQUUsSUFBRSxFQUFFLFNBQU8sSUFBRSxJQUFFLEdBQUcsWUFBVSxHQUFFLElBQUUsQ0FBQyxXQUFVLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUU7QUFBRTtBQUFBLFFBQUs7QUFBQSxRQUFDLEtBQUssSUFBRztBQUFDLGVBQUksSUFBRSxHQUFFLElBQUUsTUFBRyxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksS0FBSSxNQUFHLEdBQUUsSUFBRSxDQUFDO0FBQUUsY0FBRyxJQUFFLEVBQUUsV0FBVyxJQUFFLENBQUMsR0FBRSxLQUFHLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksS0FBRyxNQUFJLE1BQUksTUFBSSxPQUFLLEtBQUcsR0FBRSxHQUFHLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFHO0FBQUMsbUJBQUssR0FBRyxLQUFLLEVBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxJQUFHLE1BQUc7QUFBRSxjQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksT0FBSyxLQUFHO0FBQUEsVUFBRTtBQUFDLGNBQUUsQ0FBQyxRQUFPLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUU7QUFBRTtBQUFBLFFBQUs7QUFBQSxRQUFDO0FBQVEsY0FBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLEdBQUUsTUFBSSxNQUFJLE1BQUksT0FBSyxJQUFFLEdBQUUsRUFBQyxHQUFHLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLFFBQU8sR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFLEtBQUcsTUFBSSxNQUFJLE1BQUksTUFBSSxJQUFFLEVBQUUsUUFBUSxNQUFLLElBQUUsQ0FBQyxJQUFFLEdBQUUsTUFBSSxNQUFJLEtBQUcsSUFBRSxJQUFFLEVBQUUsU0FBTyxFQUFFLFNBQVMsSUFBRyxJQUFFLENBQUMsV0FBVSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLENBQUMsR0FBRSxJQUFFLEtBQUcsTUFBSSxNQUFJLE1BQUksTUFBSSxHQUFHLFlBQVUsSUFBRSxHQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUUsR0FBRyxjQUFZLElBQUUsSUFBRSxFQUFFLFNBQU8sSUFBRSxJQUFFLEdBQUcsWUFBVSxHQUFFLElBQUUsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsSUFBRSxDQUFDLFdBQVUsR0FBRSxHQUFFLEdBQUUsUUFBUSxHQUFFLElBQUUsTUFBSSxHQUFHLFlBQVUsSUFBRSxHQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUUsR0FBRyxjQUFZLElBQUUsSUFBRSxFQUFFLFNBQU8sSUFBRSxJQUFFLEdBQUcsWUFBVSxHQUFFLElBQUUsQ0FBQyxRQUFPLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRTtBQUFHO0FBQUEsTUFBSztBQUFDLGFBQU8sS0FBSTtBQUFBLElBQUM7QUFBQyxhQUFTLEVBQUUsR0FBRTtBQUFDLFFBQUUsS0FBSyxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU0sRUFBQyxNQUFLLEdBQUUsV0FBVSxHQUFFLFdBQVUsR0FBRSxVQUFTLEVBQUM7QUFBQSxFQUFDO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQUMsTUFBRyxFQUFDLFNBQVEsR0FBRSxJQUFFLEdBQUUsR0FBRyxLQUFHLE1BQUssS0FBRyxHQUFJLEdBQUMsS0FBRyxHQUFJLEdBQUMsS0FBRyxjQUFjLEdBQUU7QUFBQSxJQUFDLE9BQU8sR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFO0FBQUUsYUFBSyxDQUFDLEtBQUssVUFBVSxVQUFTLEtBQUk7QUFBQyxZQUFJLElBQUUsS0FBSyxVQUFVLFVBQVM7QUFBRyxZQUFHLEVBQUUsQ0FBQyxNQUFJLFVBQVEsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsRUFBRSxNQUFHLEVBQUUsQ0FBQyxHQUFFLElBQUU7QUFBQSxhQUFNO0FBQUMsZUFBSyxVQUFVLEtBQUssQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFBLE1BQUM7QUFBQyxZQUFNLE9BQU8sQ0FBQyxXQUFVLEdBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFFBQVEsR0FBRTtBQUFDLFVBQUcsRUFBRSxDQUFDLE1BQUksVUFBUztBQUFDLFlBQUksSUFBRSxJQUFJO0FBQUcsYUFBSyxLQUFLLEdBQUUsRUFBRSxDQUFDLENBQUMsR0FBRSxFQUFFLEtBQUssU0FBTztBQUFHLFlBQUksSUFBRSxLQUFLLE1BQU0sV0FBVyxFQUFFLENBQUMsQ0FBQztBQUFFLFVBQUUsT0FBTyxNQUFJLEVBQUMsUUFBTyxFQUFFLEtBQUksTUFBSyxFQUFFLE1BQUssUUFBTyxFQUFFLENBQUMsSUFBRSxFQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztBQUFFLFlBQUcsUUFBUSxLQUFLLENBQUMsRUFBRSxHQUFFLE9BQUssSUFBRyxFQUFFLEtBQUssT0FBSyxHQUFFLEVBQUUsS0FBSyxRQUFNO0FBQUEsYUFBTztBQUFDLGNBQUksSUFBRSxFQUFFLE1BQU0sc0JBQXNCLEdBQUUsSUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLGdCQUFlLE1BQU07QUFBRSxZQUFFLE9BQUssR0FBRSxFQUFFLEtBQUssT0FBSyxFQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssUUFBTSxFQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssT0FBSyxFQUFFLENBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQyxNQUFNLE9BQU0sUUFBUSxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsa0JBQWlCO0FBQUMsV0FBSyxZQUFVLEdBQUcsS0FBSyxLQUFLO0FBQUEsSUFBQztBQUFBLElBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBRyxNQUFNLElBQUksR0FBRSxHQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtBQUFJLFVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFFLE1BQUk7QUFBQyxjQUFHLEVBQUUsQ0FBQyxNQUFJLGFBQVcsRUFBRSxDQUFDLE1BQUksVUFBUztBQUFDLGdCQUFJLElBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQUUsUUFBUSxnQkFBZSxNQUFNO0FBQUUsbUJBQU8sSUFBRSxPQUFLLElBQUU7QUFBQSxVQUFJLE1BQU0sUUFBTyxJQUFFLEVBQUUsQ0FBQztBQUFBLFFBQUMsR0FBRSxFQUFFLEdBQUUsTUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFLO0FBQUEsTUFBRTtBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUssR0FBRTtBQUFDLFVBQUksSUFBRSxPQUFHLElBQUUsR0FBRSxJQUFFO0FBQUcsZUFBUSxLQUFLLEVBQUUsS0FBRyxFQUFFLEdBQUUsQ0FBQyxNQUFJLGFBQVcsRUFBRSxDQUFDLE1BQUksUUFBTSxLQUFHLEVBQUUsQ0FBQztBQUFBLFdBQU87QUFBQyxZQUFHLEVBQUUsQ0FBQyxNQUFJLFdBQVMsRUFBRSxDQUFDLEVBQUUsU0FBUztBQUFBLENBQzU1SSxFQUFFO0FBQU0sVUFBRSxDQUFDLE1BQUksTUFBSSxLQUFHLElBQUUsRUFBRSxDQUFDLE1BQUksTUFBSSxLQUFHLElBQUUsTUFBSSxLQUFHLEVBQUUsQ0FBQyxNQUFJLFFBQU0sSUFBRTtBQUFBLE1BQUc7QUFBQyxVQUFHLENBQUMsS0FBRyxFQUFFLEtBQUksTUFBSyxNQUFJLGVBQWUsS0FBSyxDQUFDLEVBQUUsT0FBTSxLQUFLLENBQUM7QUFBQSxXQUFNO0FBQUMsVUFBRTtBQUFNLFlBQUksSUFBRSxJQUFJO0FBQUcsYUFBSyxLQUFLLEdBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUUsWUFBSTtBQUFFLGlCQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBRyxHQUFFLElBQUksS0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQUksU0FBUTtBQUFDLGNBQUUsRUFBRSxDQUFDO0FBQUU7QUFBQSxRQUFLO0FBQUMsWUFBRyxFQUFFLENBQUMsR0FBRTtBQUFDLGNBQUksSUFBRSxLQUFLLE1BQU0sV0FBVyxFQUFFLENBQUMsQ0FBQztBQUFFLFlBQUUsT0FBTyxNQUFJLEVBQUMsUUFBTyxFQUFFLEtBQUksTUFBSyxFQUFFLE1BQUssUUFBTyxFQUFFLENBQUMsSUFBRSxFQUFDO0FBQUEsUUFBQyxPQUFLO0FBQUMsY0FBSSxJQUFFLEtBQUssTUFBTSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQUUsWUFBRSxPQUFPLE1BQUksRUFBQyxRQUFPLEVBQUUsS0FBSSxNQUFLLEVBQUUsTUFBSyxRQUFPLEVBQUUsQ0FBQyxJQUFFLEVBQUM7QUFBQSxRQUFDO0FBQUMsZUFBSyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQUksU0FBUSxHQUFFLEtBQUssVUFBUSxFQUFFLE1BQU8s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LEtBQUssU0FBTyxFQUFFLFFBQU8sS0FBSyxPQUFLLEVBQUUsTUFBSyxLQUFLLFFBQU0sRUFBRSxPQUFNLEtBQUssY0FBWSxFQUFFO0FBQUEsRUFBVztBQUFDLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxRQUFJO0FBQWMsU0FBTyxlQUFlLElBQUcsY0FBYSxFQUFDLE9BQU0sS0FBRSxDQUFDO0FBQUUsTUFBSSxLQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUcsRUFBRTtBQUFFLFdBQVMsR0FBRyxHQUFFO0FBQUMsV0FBTyxLQUFHLEVBQUUsYUFBVyxJQUFFLEVBQUMsU0FBUSxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFO0FBQUssU0FBSyxZQUFZLENBQUMsR0FBRSxLQUFLLFFBQU0sRUFBRSxPQUFNLEtBQUssVUFBUSxXQUFTLEtBQUssUUFBTSxLQUFLLE1BQU0sU0FBTyxJQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sU0FBTyxDQUFDLEVBQUUsUUFBTSxLQUFJLEtBQUssV0FBUyxXQUFTLEtBQUssU0FBTyxLQUFLLE1BQU0sU0FBTyxJQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsU0FBTyxLQUFJLEtBQUssZ0JBQWMsV0FBUyxLQUFLLGNBQVksS0FBSyxPQUFPLFNBQVEsS0FBSyxNQUFNLFFBQVEsU0FBUyxHQUFFO0FBQUMsUUFBRSxTQUFPO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUFDLEtBQUcsWUFBVSxPQUFPLE9BQU8sR0FBRyxRQUFRLFNBQVM7QUFBRSxLQUFHLGNBQVksR0FBRztBQUFRLEtBQUcsVUFBVSxPQUFLLFNBQVMsR0FBRSxHQUFFO0FBQUMsYUFBUSxJQUFFLE9BQU8sS0FBRyxZQUFVLGFBQWEsUUFBTyxJQUFFLElBQUUsSUFBRSxHQUFFLElBQUUsT0FBTyxLQUFHLFdBQVMsSUFBSSxPQUFPLENBQUMsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEtBQUssTUFBTSxRQUFPLEtBQUk7QUFBQyxVQUFJLElBQUUsS0FB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RyxVQUFRLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBRyxJQUFFLE9BQU8sS0FBRyxXQUFTLElBQUUsSUFBRSxHQUFFLENBQUMsRUFBRSxRQUFPLE1BQU0sUUFBUSxDQUFDLElBQUUsRUFBRSxJQUFJLFNBQVMsR0FBRTtBQUFDLGFBQU87QUFBQSxJQUFDLENBQUMsSUFBRTtBQUFFLFdBQU8sRUFBRSxHQUFFLENBQUM7QUFBRSxhQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsYUFBTyxFQUFFLE9BQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFPLE1BQU0sUUFBUSxDQUFDLEtBQUcsSUFBRSxJQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUUsSUFBRSxDQUFDLENBQUMsSUFBRSxFQUFFLE9BQU8sQ0FBQztBQUFBLE1BQUMsR0FBRSxDQUFFLENBQUE7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFDLEtBQUcsVUFBUSxTQUFTLEdBQUUsR0FBRTtBQUFDLGFBQVEsSUFBRSxJQUFHLElBQUUsQ0FBRSxJQUFFLElBQUUsRUFBRSxRQUFRLEdBQUUsSUFBRSxDQUFDLE9BQUssS0FBSSxHQUFFLEtBQUssQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsRUFBRSxLQUFHLElBQUUsR0FBRSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDLEdBQUU7QUFBQyxVQUFHLE1BQUksR0FBRTtBQUFDO0FBQUk7QUFBQSxNQUFRO0FBQUMsUUFBRSxHQUFHLElBQUU7QUFBQSxJQUFDO0FBQUMsV0FBTyxFQUFFLFNBQU8sR0FBRTtBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRTtBQUFDLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsR0FBRSxJQUFFLEVBQUUsS0FBRyxJQUFFLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxNQUFJLEdBQUU7QUFBQyxVQUFHLE1BQUksR0FBRTtBQUFDO0FBQUk7QUFBQSxNQUFRO0FBQUMsUUFBRSxHQUFHLElBQUU7QUFBQSxJQUFDO0FBQUMsV0FBTyxFQUFFLFNBQU8sR0FBRTtBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFPLEVBQUUsV0FBUyxJQUFFLElBQUUsS0FBRyxLQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsR0FBRyxHQUFFLENBQUMsTUFBSSxLQUFHLEVBQUUsS0FBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQUU7QUFBQyxLQUFHLFVBQVE7QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxLQUFHLGFBQVc7QUFBRyxNQUFJLEtBQUcsT0FBTyxVQUFRLGNBQVksT0FBTyxPQUFPLFlBQVUsV0FBUyxTQUFTLEdBQUU7QUFBQyxXQUFPLE9BQU87QUFBQSxFQUFDLElBQUUsU0FBUyxHQUFFO0FBQUMsV0FBTyxLQUFHLE9BQU8sVUFBUSxjQUFZLEVBQUUsZ0JBQWMsVUFBUSxNQUFJLE9BQU8sWUFBVSxXQUFTLE9BQU87QUFBQSxFQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxhQUFhLEdBQUcsT0FBTSxJQUFJLFVBQVUsbUNBQW1DO0FBQUEsRUFBQztBQUFDLE1BQUksS0FBRyxTQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsU0FBSSxPQUFPLElBQUUsTUFBSSxjQUFZLEdBQUcsQ0FBQyxPQUFLLFNBQVMsUUFBTztBQUFFLFFBQUksSUFBRSxJQUFJLEVBQUU7QUFBWSxhQUFRLEtBQUssRUFBRSxLQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxPQUFPLElBQUUsTUFBSSxjQUFZLEdBQUcsQ0FBQztBQUFFLFlBQUksWUFBVSxNQUFJLFdBQVMsTUFBSSxFQUFFLENBQUMsSUFBRSxLQUFHLGFBQWEsUUFBTSxFQUFFLENBQUMsSUFBRSxFQUFFLElBQUksU0FBUyxHQUFFO0FBQUMsZUFBTyxFQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDLEdBQUUsS0FBRyxXQUFVO0FBQUMsYUFBUyxJQUFHO0FBQUMsVUFBSSxJQUFFLFVBQVUsU0FBTyxLQUFHLFVBQVUsQ0FBQyxNQUFJLFNBQU8sVUFBVSxDQUFDLElBQUUsQ0FBQTtBQUFHLFNBQUcsTUFBSyxDQUFDO0FBQUUsZUFBUSxLQUFLLEVBQUUsTUFBSyxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBSSxJQUFFLEVBQUU7QUFBTyxVQUFFLE1BQUksU0FBTyxDQUFFLElBQUM7QUFBRSxVQUFJLElBQUUsRUFBRSxRQUFPLElBQUUsTUFBSSxTQUFPLEtBQUcsR0FBRSxJQUFFLEVBQUUsT0FBTSxJQUFFLE1BQUksU0FBTyxLQUFHO0FBQUUsV0FBSyxTQUFPLEVBQUMsUUFBTyxHQUFFLE9BQU0sRUFBQztBQUFBLElBQUM7QUFBQyxXQUFPLEVBQUUsVUFBVSxTQUFPLFdBQVU7QUFBQyxhQUFPLEtBQUssVUFBUSxLQUFLLE9BQU8sWUFBWSxJQUFJLEdBQUUsS0FBSyxTQUFPLFFBQU87QUFBQSxJQUFJLEdBQUUsRUFBRSxVQUFVLGNBQVksV0FBVTtBQUFDLFVBQUcsS0FBSyxRQUFPO0FBQUMsaUJBQVEsS0FBSyxVQUFVLE1BQUssT0FBTyxhQUFhLE1BQUssVUFBVSxDQUFDLENBQUM7QUFBRSxhQUFLO01BQVE7QUFBQyxhQUFPO0FBQUEsSUFBSSxHQUFFLEVBQUUsVUFBVSxPQUFLLFdBQVU7QUFBQyxhQUFPLEtBQUssT0FBTyxHQUFHLEtBQUssT0FBTyxNQUFNLElBQUksSUFBRSxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxPQUFLLFdBQVU7QUFBQyxhQUFPLEtBQUssT0FBTyxHQUFHLEtBQUssT0FBTyxNQUFNLElBQUksSUFBRSxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxRQUFNLFdBQVU7QUFBQyxVQUFJLElBQUUsVUFBVSxTQUFPLEtBQUcsVUFBVSxDQUFDLE1BQUksU0FBTyxVQUFVLENBQUMsSUFBRSxDQUFBLEdBQUcsSUFBRSxHQUFHLElBQUk7QUFBRSxlQUFRLEtBQUssRUFBRSxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRSxhQUFPO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxXQUFTLFdBQVU7QUFBQyxhQUFNLENBQUMsS0FBSyxPQUFPLFFBQU8sT0FBTyxLQUFLLEtBQUssR0FBRSxLQUFLLE9BQU8sS0FBSyxFQUFFLEtBQUssRUFBRTtBQUFBLElBQUMsR0FBRTtBQUFBLEVBQUM7QUFBSSxLQUFHLFVBQVE7QUFBRyxLQUFHLFVBQVEsR0FBRztBQUFPLENBQUM7QUFBRSxJQUFJLElBQUUsRUFBRSxPQUFHO0FBQWMsSUFBRSxhQUFXO0FBQVUsSUFBRSxNQUFJO0FBQVMsSUFBRSxTQUFPO0FBQVksSUFBRSxXQUFTO0FBQWMsSUFBRSxPQUFLO0FBQVUsSUFBRSxTQUFPO0FBQVksSUFBRSxVQUFRO0FBQWEsSUFBRSxLQUFHO0FBQVEsSUFBRSxVQUFRO0FBQWEsSUFBRSxhQUFXO0FBQWdCLElBQUUsUUFBTTtBQUFXLElBQUUsWUFBVTtBQUFlLElBQUUsWUFBVTtBQUFXLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLEtBQUcsYUFBVztBQUFHLE1BQUksS0FBRywyQkFBVTtBQUFDLGFBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsWUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUUsYUFBVyxFQUFFLGNBQVksT0FBRyxFQUFFLGVBQWEsTUFBRyxXQUFVLE1BQUksRUFBRSxXQUFTLE9BQUksT0FBTyxlQUFlLEdBQUUsRUFBRSxLQUFJLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFdBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLGFBQU8sS0FBRyxFQUFFLEVBQUUsV0FBVSxDQUFDLEdBQUUsS0FBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFO0FBQUEsSUFBQztBQUFBLEVBQUMsRUFBRyxHQUFDLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBRyxFQUFFLEdBQUUsS0FBRyxFQUFDLEdBQUcsSUFBRSxHQUFHLEVBQUU7QUFBRSxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUcsS0FBRyxFQUFFLFdBQVcsUUFBTztBQUFFLFFBQUksSUFBRSxDQUFBO0FBQUcsUUFBRyxLQUFHLEtBQUssVUFBUSxLQUFLLEVBQUUsUUFBTyxVQUFVLGVBQWUsS0FBSyxHQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBRyxXQUFPLEVBQUUsVUFBUSxHQUFFO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsV0FBTyxLQUFHLEVBQUUsYUFBVyxJQUFFLEVBQUMsU0FBUSxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsYUFBYSxHQUFHLE9BQU0sSUFBSSxVQUFVLG1DQUFtQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLGVBQWUsMkRBQTJEO0FBQUUsV0FBTyxNQUFJLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxjQUFZLElBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxLQUFHLGNBQVksTUFBSSxLQUFLLE9BQU0sSUFBSSxVQUFVLDZEQUEyRCxPQUFPLENBQUM7QUFBRSxNQUFFLFlBQVUsT0FBTyxPQUFPLEtBQUcsRUFBRSxXQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sR0FBRSxZQUFXLE9BQUcsVUFBUyxNQUFHLGNBQWEsS0FBRSxFQUFDLENBQUMsR0FBRSxNQUFJLE9BQU8saUJBQWUsT0FBTyxlQUFlLEdBQUUsQ0FBQyxJQUFFLEVBQUUsWUFBVTtBQUFBLEVBQUU7QUFBQyxNQUFJLEtBQUcsU0FBUyxHQUFFO0FBQUMsT0FBRyxHQUFFLENBQUM7QUFBRSxhQUFTLEVBQUUsR0FBRTtBQUFDLFNBQUcsTUFBSyxDQUFDO0FBQUUsVUFBSSxJQUFFLEdBQUcsTUFBSyxFQUFFLEtBQUssTUFBSyxDQUFDLENBQUM7QUFBRSxhQUFPLEVBQUUsVUFBUSxFQUFFLFFBQU0sQ0FBQSxJQUFJO0FBQUEsSUFBQztBQUFDLFdBQU8sRUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFO0FBQUMsYUFBTyxFQUFFLFNBQU8sTUFBSyxLQUFLLE1BQU0sS0FBSyxDQUFDLEdBQUU7QUFBQSxJQUFJLEdBQUUsRUFBRSxVQUFVLFVBQVEsU0FBUyxHQUFFO0FBQUMsYUFBTyxFQUFFLFNBQU8sTUFBSyxLQUFLLE1BQU0sUUFBUSxDQUFDLEdBQUU7QUFBQSxJQUFJLEdBQUUsRUFBRSxVQUFVLEtBQUcsU0FBUyxHQUFFO0FBQUMsYUFBTyxLQUFLLE1BQU0sQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsUUFBTSxTQUFTLEdBQUU7QUFBQyxhQUFPLE9BQU8sS0FBRyxXQUFTLElBQUUsS0FBSyxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsY0FBWSxTQUFTLEdBQUU7QUFBQyxVQUFFLEtBQUssTUFBTSxDQUFDLEdBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxTQUFPLFFBQU8sS0FBSyxNQUFNLE9BQU8sR0FBRSxDQUFDO0FBQUUsVUFBSSxJQUFFO0FBQU8sZUFBUSxLQUFLLEtBQUssUUFBUSxLQUFFLEtBQUssUUFBUSxDQUFDLEdBQUUsS0FBRyxNQUFJLEtBQUssUUFBUSxDQUFDLElBQUUsSUFBRTtBQUFHLGFBQU87QUFBQSxJQUFJLEdBQUUsRUFBRSxVQUFVLFlBQVUsV0FBVTtBQUFDLGVBQVEsSUFBRSxLQUFLLE9BQU0sSUFBRSxNQUFNLFFBQVEsQ0FBQyxHQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsSUFBRSxFQUFFLE9BQU8sUUFBUSxFQUFDLE9BQUs7QUFBQyxZQUFJO0FBQUUsWUFBRyxHQUFFO0FBQUMsY0FBRyxLQUFHLEVBQUUsT0FBTztBQUFNLGNBQUUsRUFBRSxHQUFHO0FBQUEsUUFBQyxPQUFLO0FBQUMsY0FBRyxJQUFFLEVBQUUsUUFBTyxFQUFFLEtBQUs7QUFBTSxjQUFFLEVBQUU7QUFBQSxRQUFLO0FBQUMsWUFBSSxJQUFFO0FBQUUsVUFBRSxTQUFPO0FBQUEsTUFBTTtBQUFDLGFBQU8sS0FBSyxRQUFNLENBQUEsR0FBRztBQUFBLElBQUksR0FBRSxFQUFFLFVBQVUsUUFBTSxXQUFVO0FBQUMsYUFBTyxLQUFLLFVBQVM7QUFBQSxJQUFFLEdBQUUsRUFBRSxVQUFVLGNBQVksU0FBUyxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsS0FBSyxNQUFNLENBQUM7QUFBRSxXQUFLLE1BQU0sT0FBTyxJQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsVUFBSSxJQUFFO0FBQU8sZUFBUSxLQUFLLEtBQUssUUFBUSxLQUFFLEtBQUssUUFBUSxDQUFDLEdBQUUsS0FBRyxNQUFJLEtBQUssUUFBUSxDQUFDLElBQUUsSUFBRSxLQUFLLE1BQU07QUFBUSxhQUFPO0FBQUEsSUFBSSxHQUFFLEVBQUUsVUFBVSxlQUFhLFNBQVMsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUUsV0FBSyxNQUFNLE9BQU8sR0FBRSxHQUFFLENBQUM7QUFBRSxVQUFJLElBQUU7QUFBTyxlQUFRLEtBQUssS0FBSyxRQUFRLEtBQUUsS0FBSyxRQUFRLENBQUMsR0FBRSxLQUFHLE1BQUksS0FBSyxRQUFRLENBQUMsSUFBRSxJQUFFLEtBQUssTUFBTTtBQUFRLGFBQU87QUFBQSxJQUFJLEdBQUUsRUFBRSxVQUFVLE9BQUssU0FBUyxHQUFFO0FBQUMsV0FBSyxhQUFXLEtBQUssV0FBUyxJQUFHLEtBQUssWUFBVSxLQUFLLFVBQVEsQ0FBRSxJQUFFLEtBQUs7QUFBVyxVQUFJLElBQUUsS0FBSztBQUFTLFVBQUcsS0FBSyxRQUFRLENBQUMsSUFBRSxHQUFFLENBQUMsQ0FBQyxLQUFLLFFBQU87QUFBQyxpQkFBUSxJQUFFLFFBQU8sSUFBRSxRQUFPLEtBQUssUUFBUSxDQUFDLElBQUUsS0FBSyxXQUFTLElBQUUsS0FBSyxRQUFRLENBQUMsR0FBRSxJQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRSxDQUFDLEdBQUUsTUFBSSxTQUFLLE1BQUssUUFBUSxDQUFDLEtBQUc7QUFBRSxZQUFHLE9BQU8sS0FBSyxRQUFRLENBQUMsR0FBRSxNQUFJLE1BQUcsUUFBUTtBQUFBLE1BQUE7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLE9BQUssU0FBUyxHQUFFO0FBQUMsYUFBTyxLQUFLLEtBQUssU0FBUyxHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxHQUFFLENBQUM7QUFBRSxZQUFHLE1BQUksU0FBSSxFQUFFLFdBQVMsSUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFHLE1BQUksTUFBRyxRQUFNO0FBQUEsTUFBRSxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxpQkFBZSxTQUFTLEdBQUU7QUFBQyxVQUFJLElBQUU7QUFBSyxhQUFPLEtBQUssS0FBSyxTQUFTLEdBQUU7QUFBQyxZQUFHLEVBQUUsU0FBTyxFQUFFLFVBQVUsUUFBTyxFQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxjQUFZLFNBQVMsR0FBRTtBQUFDLFVBQUksSUFBRTtBQUFLLGFBQU8sS0FBSyxLQUFLLFNBQVMsR0FBRTtBQUFDLFlBQUcsRUFBRSxTQUFPLEVBQUUsTUFBTSxRQUFPLEVBQUUsS0FBSyxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLGtCQUFnQixTQUFTLEdBQUU7QUFBQyxVQUFJLElBQUU7QUFBSyxhQUFPLEtBQUssS0FBSyxTQUFTLEdBQUU7QUFBQyxZQUFHLEVBQUUsU0FBTyxFQUFFLFdBQVcsUUFBTyxFQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxlQUFhLFNBQVMsR0FBRTtBQUFDLFVBQUksSUFBRTtBQUFLLGFBQU8sS0FBSyxLQUFLLFNBQVMsR0FBRTtBQUFDLFlBQUcsRUFBRSxTQUFPLEVBQUUsUUFBUSxRQUFPLEVBQUUsS0FBSyxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLFVBQVEsU0FBUyxHQUFFO0FBQUMsVUFBSSxJQUFFO0FBQUssYUFBTyxLQUFLLEtBQUssU0FBUyxHQUFFO0FBQUMsWUFBRyxFQUFFLFNBQU8sRUFBRSxHQUFHLFFBQU8sRUFBRSxLQUFLLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsY0FBWSxTQUFTLEdBQUU7QUFBQyxVQUFJLElBQUU7QUFBSyxhQUFPLEtBQUssS0FBSyxTQUFTLEdBQUU7QUFBQyxZQUFHLEVBQUUsU0FBTyxFQUFFLFFBQVEsUUFBTyxFQUFFLEtBQUssR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxjQUFZLFNBQVMsR0FBRTtBQUFDLFVBQUksSUFBRTtBQUFLLGFBQU8sS0FBSyxLQUFLLFNBQVMsR0FBRTtBQUFDLFlBQUcsRUFBRSxTQUFPLEVBQUUsT0FBTyxRQUFPLEVBQUUsS0FBSyxHQUFFLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLFdBQVMsU0FBUyxHQUFFO0FBQUMsVUFBSSxJQUFFO0FBQUssYUFBTyxLQUFLLEtBQUssU0FBUyxHQUFFO0FBQUMsWUFBRyxFQUFFLFNBQU8sRUFBRSxJQUFJLFFBQU8sRUFBRSxLQUFLLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsaUJBQWUsU0FBUyxHQUFFO0FBQUMsVUFBSSxJQUFFO0FBQUssYUFBTyxLQUFLLEtBQUssU0FBUyxHQUFFO0FBQUMsWUFBRyxFQUFFLFNBQU8sRUFBRSxVQUFVLFFBQU8sRUFBRSxLQUFLLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsUUFBTSxTQUFTLEdBQUU7QUFBQyxVQUFJLElBQUUsTUFBSyxJQUFFO0FBQUcsYUFBTyxLQUFLLE9BQU8sU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLEtBQUssR0FBRSxDQUFDO0FBQUUsZUFBTyxFQUFFLEtBQUssQ0FBQyxHQUFFLEtBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLENBQUEsS0FBSSxNQUFJLEVBQUUsU0FBTyxLQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUU7QUFBQSxNQUFDLEdBQUUsRUFBRTtBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsTUFBSSxTQUFTLEdBQUU7QUFBQyxhQUFPLEtBQUssTUFBTSxJQUFJLENBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLFNBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxhQUFPLEtBQUssTUFBTSxPQUFPLEdBQUUsQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsUUFBTSxTQUFTLEdBQUU7QUFBQyxhQUFPLEtBQUssTUFBTSxNQUFNLENBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLE9BQUssU0FBUyxHQUFFO0FBQUMsYUFBTyxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxTQUFPLFNBQVMsR0FBRTtBQUFDLGFBQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsT0FBSyxTQUFTLEdBQUU7QUFBQyxhQUFPLEtBQUssTUFBTSxLQUFLLENBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLFdBQVMsV0FBVTtBQUFDLGFBQU8sS0FBSyxJQUFJLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUFDLEdBQUUsR0FBRyxHQUFFLENBQUMsRUFBQyxLQUFJLFNBQVEsS0FBSSxXQUFVO0FBQUMsYUFBTyxLQUFLLEdBQUcsQ0FBQztBQUFBLElBQUMsRUFBQyxHQUFFLEVBQUMsS0FBSSxRQUFPLEtBQUksV0FBVTtBQUFDLGFBQU8sS0FBSyxHQUFHLEtBQUssU0FBTyxDQUFDO0FBQUEsSUFBQyxFQUFDLEdBQUUsRUFBQyxLQUFJLFVBQVMsS0FBSSxXQUFVO0FBQUMsYUFBTyxLQUFLLE1BQU07QUFBQSxJQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUU7QUFBQSxFQUFDLEVBQUUsR0FBRyxPQUFPO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRLEdBQUc7QUFBTyxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxLQUFHLGFBQVc7QUFBRyxNQUFJLEtBQUcsTUFBSyxLQUFHLEdBQUcsRUFBRSxHQUFFLEtBQUcsRUFBRztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsV0FBTyxLQUFHLEVBQUUsYUFBVyxJQUFFLEVBQUMsU0FBUSxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsYUFBYSxHQUFHLE9BQU0sSUFBSSxVQUFVLG1DQUFtQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLGVBQWUsMkRBQTJEO0FBQUUsV0FBTyxNQUFJLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxjQUFZLElBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxLQUFHLGNBQVksTUFBSSxLQUFLLE9BQU0sSUFBSSxVQUFVLDZEQUEyRCxPQUFPLENBQUM7QUFBRSxNQUFFLFlBQVUsT0FBTyxPQUFPLEtBQUcsRUFBRSxXQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sR0FBRSxZQUFXLE9BQUcsVUFBUyxNQUFHLGNBQWEsS0FBRSxFQUFDLENBQUMsR0FBRSxNQUFJLE9BQU8saUJBQWUsT0FBTyxlQUFlLEdBQUUsQ0FBQyxJQUFFLEVBQUUsWUFBVTtBQUFBLEVBQUU7QUFBQyxNQUFJLEtBQUcsU0FBUyxHQUFFO0FBQUMsT0FBRyxHQUFFLENBQUM7QUFBRSxhQUFTLEVBQUUsR0FBRTtBQUFDLFNBQUcsTUFBSyxDQUFDO0FBQUUsVUFBSSxJQUFFLEdBQUcsTUFBSyxFQUFFLEtBQUssTUFBSyxDQUFDLENBQUM7QUFBRSxhQUFPLEVBQUUsT0FBSyxHQUFHLE1BQUs7QUFBQSxJQUFDO0FBQUMsV0FBTyxFQUFFLFVBQVUsV0FBUyxXQUFVO0FBQUMsVUFBSSxJQUFFLEtBQUssT0FBTyxTQUFTLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxPQUFPLENBQUM7QUFBRSxlQUFPLElBQUUsSUFBRSxJQUFFLE1BQUk7QUFBQSxNQUFFLEdBQUUsRUFBRSxFQUFFLE1BQU0sR0FBRSxFQUFFO0FBQUUsYUFBTyxLQUFLLGdCQUFjLElBQUUsTUFBSTtBQUFBLElBQUMsR0FBRTtBQUFBLEVBQUMsRUFBRSxHQUFHLE9BQU87QUFBRSxLQUFHLFVBQVE7QUFBRyxLQUFHLFVBQVEsR0FBRztBQUFPLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLEtBQUcsYUFBVztBQUFHLE1BQUksS0FBRyxNQUFLLEtBQUcsR0FBRyxFQUFFLEdBQUUsS0FBRyxFQUFHO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxXQUFPLEtBQUcsRUFBRSxhQUFXLElBQUUsRUFBQyxTQUFRLEVBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxhQUFhLEdBQUcsT0FBTSxJQUFJLFVBQVUsbUNBQW1DO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsRUFBRSxPQUFNLElBQUksZUFBZSwyREFBMkQ7QUFBRSxXQUFPLE1BQUksT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLGNBQVksSUFBRTtBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxPQUFPLEtBQUcsY0FBWSxNQUFJLEtBQUssT0FBTSxJQUFJLFVBQVUsNkRBQTJELE9BQU8sQ0FBQztBQUFFLE1BQUUsWUFBVSxPQUFPLE9BQU8sS0FBRyxFQUFFLFdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxHQUFFLFlBQVcsT0FBRyxVQUFTLE1BQUcsY0FBYSxLQUFFLEVBQUMsQ0FBQyxHQUFFLE1BQUksT0FBTyxpQkFBZSxPQUFPLGVBQWUsR0FBRSxDQUFDLElBQUUsRUFBRSxZQUFVO0FBQUEsRUFBRTtBQUFDLE1BQUksS0FBRyxTQUFTLEdBQUU7QUFBQyxPQUFHLEdBQUUsQ0FBQztBQUFFLGFBQVMsRUFBRSxHQUFFO0FBQUMsU0FBRyxNQUFLLENBQUM7QUFBRSxVQUFJLElBQUUsR0FBRyxNQUFLLEVBQUUsS0FBSyxNQUFLLENBQUMsQ0FBQztBQUFFLGFBQU8sRUFBRSxPQUFLLEdBQUcsVUFBUztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQyxFQUFFLEdBQUcsT0FBTztBQUFFLEtBQUcsVUFBUTtBQUFHLEtBQUcsVUFBUSxHQUFHO0FBQU8sQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsS0FBRyxhQUFXO0FBQUcsTUFBSSxLQUFHLDJCQUFVO0FBQUMsYUFBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRSxhQUFXLEVBQUUsY0FBWSxPQUFHLEVBQUUsZUFBYSxNQUFHLFdBQVUsTUFBSSxFQUFFLFdBQVMsT0FBSSxPQUFPLGVBQWUsR0FBRSxFQUFFLEtBQUksQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsV0FBTyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsYUFBTyxLQUFH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R0FBRTtBQUFDLE9BQUcsR0FBRSxDQUFDO0FBQUUsYUFBUyxFQUFFLEdBQUU7QUFBQyxTQUFHLE1BQUssQ0FBQztBQUFFLFVBQUksSUFBRSxHQUFHLE1BQUssRUFBRSxLQUFLLE1BQUssQ0FBQyxDQUFDO0FBQUUsYUFBTyxFQUFFLE9BQUssR0FBRyxPQUFNO0FBQUEsSUFBQztBQUFDLFdBQU8sRUFBRSxVQUFVLFdBQVMsV0FBVTtBQUFDLGFBQU0sQ0FBQyxLQUFLLE9BQU8sUUFBTyxLQUFLLElBQUcsTUFBSSxLQUFLLE9BQU0sS0FBSyxPQUFPLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUFDLEdBQUU7QUFBQSxFQUFDLEVBQUUsR0FBRyxPQUFPO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRLEdBQUc7QUFBTyxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxLQUFHLGFBQVc7QUFBRyxNQUFJLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBRyxFQUFFLEdBQUUsS0FBRyxFQUFDO0FBQUcsV0FBUyxHQUFHLEdBQUU7QUFBQyxXQUFPLEtBQUcsRUFBRSxhQUFXLElBQUUsRUFBQyxTQUFRLEVBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxhQUFhLEdBQUcsT0FBTSxJQUFJLFVBQVUsbUNBQW1DO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsRUFBRSxPQUFNLElBQUksZUFBZSwyREFBMkQ7QUFBRSxXQUFPLE1BQUksT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLGNBQVksSUFBRTtBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxPQUFPLEtBQUcsY0FBWSxNQUFJLEtBQUssT0FBTSxJQUFJLFVBQVUsNkRBQTJELE9BQU8sQ0FBQztBQUFFLE1BQUUsWUFBVSxPQUFPLE9BQU8sS0FBRyxFQUFFLFdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxHQUFFLFlBQVcsT0FBRyxVQUFTLE1BQUcsY0FBYSxLQUFFLEVBQUMsQ0FBQyxHQUFFLE1BQUksT0FBTyxpQkFBZSxPQUFPLGVBQWUsR0FBRSxDQUFDLElBQUUsRUFBRSxZQUFVO0FBQUEsRUFBRTtBQUFDLE1BQUksS0FBRyxTQUFTLEdBQUU7QUFBQyxPQUFHLEdBQUUsQ0FBQztBQUFFLGFBQVMsRUFBRSxHQUFFO0FBQUMsU0FBRyxNQUFLLENBQUM7QUFBRSxVQUFJLElBQUUsR0FBRyxNQUFLLEVBQUUsS0FBSyxNQUFLLENBQUMsQ0FBQztBQUFFLGFBQU8sRUFBRSxPQUFLLEdBQUcsU0FBUTtBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQyxFQUFFLEdBQUcsT0FBTztBQUFFLEtBQUcsVUFBUTtBQUFHLEtBQUcsVUFBUSxHQUFHO0FBQU8sQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsS0FBRyxhQUFXO0FBQUcsTUFBSSxLQUFHLE1BQUssS0FBRyxHQUFHLEVBQUUsR0FBRSxLQUFHLEVBQUc7QUFBQyxXQUFTLEdBQUcsR0FBRTtBQUFDLFdBQU8sS0FBRyxFQUFFLGFBQVcsSUFBRSxFQUFDLFNBQVEsRUFBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLGFBQWEsR0FBRyxPQUFNLElBQUksVUFBVSxtQ0FBbUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxFQUFFLE9BQU0sSUFBSSxlQUFlLDJEQUEyRDtBQUFFLFdBQU8sTUFBSSxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsY0FBWSxJQUFFO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLE9BQU8sS0FBRyxjQUFZLE1BQUksS0FBSyxPQUFNLElBQUksVUFBVSw2REFBMkQsT0FBTyxDQUFDO0FBQUUsTUFBRSxZQUFVLE9BQU8sT0FBTyxLQUFHLEVBQUUsV0FBVSxFQUFDLGFBQVksRUFBQyxPQUFNLEdBQUUsWUFBVyxPQUFHLFVBQVMsTUFBRyxjQUFhLEtBQUUsRUFBQyxDQUFDLEdBQUUsTUFBSSxPQUFPLGlCQUFlLE9BQU8sZUFBZSxHQUFFLENBQUMsSUFBRSxFQUFFLFlBQVU7QUFBQSxFQUFFO0FBQUMsTUFBSSxLQUFHLFNBQVMsR0FBRTtBQUFDLE9BQUcsR0FBRSxDQUFDO0FBQUUsYUFBUyxFQUFFLEdBQUU7QUFBQyxTQUFHLE1BQUssQ0FBQztBQUFFLFVBQUksSUFBRSxHQUFHLE1BQUssRUFBRSxLQUFLLE1BQUssQ0FBQyxDQUFDO0FBQUUsYUFBTyxFQUFFLE9BQUssR0FBRyxJQUFHO0FBQUEsSUFBQztBQUFDLFdBQU8sRUFBRSxVQUFVLFdBQVMsV0FBVTtBQUFDLGFBQU0sQ0FBQyxLQUFLLE9BQU8sUUFBTyxLQUFLLElBQUcsTUFBSSxLQUFLLE9BQU0sS0FBSyxPQUFPLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUFDLEdBQUU7QUFBQSxFQUFDLEVBQUUsR0FBRyxPQUFPO0FBQUUsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRLEdBQUc7QUFBTyxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxLQUFHLGFBQVc7QUFBRyxNQUFJLEtBQUcsTUFBSyxLQUFHLEdBQUcsRUFBRSxHQUFFLEtBQUcsRUFBRztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsV0FBTyxLQUFHLEVBQUUsYUFBVyxJQUFFLEVBQUMsU0FBUSxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsYUFBYSxHQUFHLE9BQU0sSUFBSSxVQUFVLG1DQUFtQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxDQUFDLEVBQUUsT0FBTSxJQUFJLGVBQWUsMkRBQTJEO0FBQUUsV0FBTyxNQUFJLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxjQUFZLElBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxLQUFHLGNBQVksTUFBSSxLQUFLLE9BQU0sSUFBSSxVQUFVLDZEQUEyRCxPQUFPLENBQUM7QUFBRSxNQUFFLFlBQVUsT0FBTyxPQUFPLEtBQUcsRUFBRSxXQUFVLEVBQUMsYUFBWSxFQUFDLE9BQU0sR0FBRSxZQUFXLE9BQUcsVUFBUyxNQUFHLGNBQWEsS0FBRSxFQUFDLENBQUMsR0FBRSxNQUFJLE9BQU8saUJBQWUsT0FBTyxlQUFlLEdBQUUsQ0FBQyxJQUFFLEVBQUUsWUFBVTtBQUFBLEVBQUU7QUFBQyxNQUFJLEtBQUcsU0FBUyxHQUFFO0FBQUMsT0FBRyxHQUFFLENBQUM7QUFBRSxhQUFTLEVBQUUsR0FBRTtBQUFDLFNBQUcsTUFBSyxDQUFDO0FBQUUsVUFBSSxJQUFFLEdBQUcsTUFBSyxFQUFFLEtBQUssTUFBSyxDQUFDLENBQUM7QUFBRSxhQUFPLEVBQUUsT0FBSyxHQUFHLEtBQUk7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUMsRUFBRSxHQUFHLE9BQU87QUFBRSxLQUFHLFVBQVE7QUFBRyxLQUFHLFVBQVEsR0FBRztBQUFPLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLEtBQUcsYUFBVztBQUFHLE1BQUksS0FBRyxNQUFLLEtBQUcsR0FBRyxFQUFFLEdBQUUsS0FBRyxFQUFHO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxXQUFPLEtBQUcsRUFBRSxhQUFXLElBQUUsRUFBQyxTQUFRLEVBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxhQUFhLEdBQUcsT0FBTSxJQUFJLFVBQVUsbUNBQW1DO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsRUFBRSxPQUFNLElBQUksZUFBZSwyREFBMkQ7QUFBRSxXQUFPLE1BQUksT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLGNBQVksSUFBRTtBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxPQUFPLEtBQUcsY0FBWSxNQUFJLEtBQUssT0FBTSxJQUFJLFVBQVUsNkRBQTJELE9BQU8sQ0FBQztBQUFFLE1BQUUsWUFBVSxPQUFPLE9BQU8sS0FBRyxFQUFFLFdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxHQUFFLFlBQVcsT0FBRyxVQUFTLE1BQUcsY0FBYSxLQUFFLEVBQUMsQ0FBQyxHQUFFLE1BQUksT0FBTyxpQkFBZSxPQUFPLGVBQWUsR0FBRSxDQUFDLElBQUUsRUFBRSxZQUFVO0FBQUEsRUFBRTtBQUFDLE1BQUksS0FBRyxTQUFTLEdBQUU7QUFBQyxPQUFHLEdBQUUsQ0FBQztBQUFFLGFBQVMsRUFBRSxHQUFFO0FBQUMsU0FBRyxNQUFLLENBQUM7QUFBRSxVQUFJLElBQUUsR0FBRyxNQUFLLEVBQUUsS0FBSyxNQUFLLENBQUMsQ0FBQztBQUFFLGFBQU8sRUFBRSxPQUFLLEdBQUcsUUFBTztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQyxFQUFFLEdBQUcsT0FBTztBQUFFLEtBQUcsVUFBUTtBQUFHLEtBQUcsVUFBUSxHQUFHO0FBQU8sQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsS0FBRyxhQUFXO0FBQUcsTUFBSSxLQUFHLE1BQUssS0FBRyxHQUFHLEVBQUUsR0FBRSxLQUFHLEVBQUc7QUFBQyxXQUFTLEdBQUcsR0FBRTtBQUFDLFdBQU8sS0FBRyxFQUFFLGFBQVcsSUFBRSxFQUFDLFNBQVEsRUFBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFFLGFBQWEsR0FBRyxPQUFNLElBQUksVUFBVSxtQ0FBbUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxFQUFFLE9BQU0sSUFBSSxlQUFlLDJEQUEyRDtBQUFFLFdBQU8sTUFBSSxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsY0FBWSxJQUFFO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFB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LEdBQUUsR0FBRTtBQUFDLFVBQUcsRUFBRSxLQUFLLE1BQUcsR0FBRSxJQUFFLEVBQUUsU0FBTztBQUFBLFVBQU8sT0FBTSxFQUFFLE1BQU0sY0FBWSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUM7QUFBQSxJQUFDLEdBQUUsSUFBRSxLQUFHO0FBQUMsY0FBTyxJQUFFLEVBQUUsV0FBVyxDQUFDLEdBQUUsTUFBSSxPQUFLLElBQUUsR0FBRSxLQUFHLElBQUcsR0FBQztBQUFBLFFBQUUsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFBLFFBQUcsS0FBSztBQUFHLGNBQUU7QUFBRTtBQUFHLGlCQUFHLEdBQUUsSUFBRSxFQUFFLFdBQVcsQ0FBQyxHQUFFLE1BQUksT0FBSyxJQUFFLEdBQUUsS0FBRztBQUFBLGlCQUFTLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJO0FBQUksWUFBRSxLQUFLLENBQUMsU0FBUSxFQUFFLE1BQU0sR0FBRSxDQUFDLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxJQUFFO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBRyxjQUFFO0FBQUU7QUFBRyxpQkFBRyxHQUFFLElBQUUsRUFBRSxXQUFXLENBQUM7QUFBQSxpQkFBUSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJO0FBQUksWUFBRSxLQUFLLENBQUMsY0FBYSxFQUFFLE1BQU0sR0FBRSxDQUFDLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxJQUFFO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBRyxjQUFFLE1BQUksS0FBRyxNQUFJLEtBQUksSUFBRTtBQUFFO0FBQUcsaUJBQUksSUFBRSxPQUFHLElBQUUsRUFBRSxRQUFRLEdBQUUsSUFBRSxDQUFDLEdBQUUsTUFBSSxNQUFJLEVBQUUsU0FBUSxDQUFDLEdBQUUsSUFBRSxHQUFFLEVBQUUsV0FBVyxJQUFFLENBQUMsTUFBSSxLQUFJLE1BQUcsR0FBRSxJQUFFLENBQUM7QUFBQSxpQkFBUTtBQUFHLFlBQUUsS0FBSyxDQUFDLFVBQVMsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRTtBQUFFO0FBQUEsUUFBTSxLQUFLO0FBQUcsYUFBRyxZQUFVLElBQUUsR0FBRSxHQUFHLEtBQUssQ0FBQyxHQUFFLEdBQUcsY0FBWSxJQUFFLElBQUUsRUFBRSxTQUFPLElBQUUsSUFBRSxHQUFHLFlBQVUsR0FBRSxFQUFFLEtBQUssQ0FBQyxXQUFVLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUU7QUFBRTtBQUFBLFFBQU0sS0FBSztBQUFHLGVBQUksSUFBRSxHQUFFLElBQUUsTUFBRyxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksS0FBSSxNQUFHLEdBQUUsSUFBRSxDQUFDO0FBQUUsY0FBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLEdBQUUsS0FBRyxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksT0FBSyxLQUFHLElBQUcsRUFBRSxLQUFLLENBQUMsUUFBTyxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFO0FBQUU7QUFBQSxRQUFNO0FBQVEsZ0JBQUksTUFBSSxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksTUFBSSxJQUFFLEVBQUUsUUFBUSxNQUFLLElBQUUsQ0FBQyxJQUFFLEdBQUUsTUFBSSxLQUFHLEVBQUUsV0FBVSxJQUFJLEdBQUUsSUFBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsTUFBTTtBQUFBLENBQzExNEIsR0FBRSxJQUFFLEVBQUUsU0FBTyxHQUFFLElBQUUsS0FBRyxJQUFFLElBQUUsR0FBRSxJQUFFLElBQUUsRUFBRSxDQUFDLEVBQUUsV0FBUyxJQUFFLEdBQUUsSUFBRSxJQUFHLEVBQUUsS0FBSyxDQUFDLFdBQVUsR0FBRSxHQUFFLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsTUFBSSxHQUFHLFlBQVUsSUFBRSxHQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUUsR0FBRyxjQUFZLElBQUUsSUFBRSxFQUFFLFNBQU8sSUFBRSxJQUFFLEdBQUcsWUFBVSxHQUFFLEVBQUUsS0FBSyxDQUFDLFFBQU8sRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRTtBQUFHO0FBQUEsTUFBSztBQUFDO0FBQUEsSUFBRztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsS0FBRyxVQUFRLEdBQUc7QUFBTyxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxLQUFHLGFBQVc7QUFBRyxNQUFJLEtBQUcsMkJBQVU7QUFBQyxhQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFlBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFFLGFBQVcsRUFBRSxjQUFZLE9BQUcsRUFBRSxlQUFhLE1BQUcsV0FBVSxNQUFJLEVBQUUsV0FBUyxPQUFJLE9BQU8sZUFBZSxHQUFFLEVBQUUsS0FBSSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxXQUFPLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxhQUFPLEtBQUcsRUFBRSxFQUFFLFdBQVUsQ0FBQyxHQUFFLEtBQUcsRUFBRSxHQUFFLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxFQUFDLEtBQUksS0FBRyxHQUFJLEdBQUMsS0FBRyxFQUFFLEVBQUUsR0FBRSxLQUFHLEdBQUksR0FBQyxLQUFHLEVBQUUsRUFBRSxHQUFFLEtBQUcsR0FBSSxHQUFDLEtBQUcsRUFBRSxFQUFFLEdBQUUsS0FBRyxHQUFJLEdBQUMsS0FBRyxFQUFFLEVBQUUsR0FBRSxLQUFHLEdBQUksR0FBQyxLQUFHLEVBQUUsRUFBRSxHQUFFLEtBQUcsR0FBRSxHQUFHLEtBQUcsRUFBRSxFQUFFLEdBQUUsS0FBRyxHQUFJLEdBQUMsS0FBRyxFQUFFLEVBQUUsR0FBRSxLQUFHLEdBQUUsR0FBRyxLQUFHLEVBQUUsRUFBRSxHQUFFLEtBQUcsR0FBRSxHQUFHLEtBQUcsRUFBRSxFQUFFLEdBQUUsS0FBRyxHQUFFLEdBQUcsS0FBRyxFQUFFLEVBQUUsR0FBRSxLQUFHLEdBQUUsR0FBRyxLQUFHLEVBQUUsRUFBRSxHQUFFLEtBQUcsR0FBRSxHQUFHLEtBQUcsRUFBRSxFQUFFLEdBQUUsS0FBRyxHQUFFLEdBQUcsS0FBRyxFQUFFLEVBQUUsR0FBRSxLQUFHLE1BQUssS0FBRyxFQUFFLEVBQUUsR0FBRSxLQUFHLEdBQUUsR0FBRyxLQUFHLEVBQUUsRUFBRSxHQUFFLEtBQUcsTUFBSyxLQUFHLEVBQUUsRUFBRSxHQUFFLEtBQUcsR0FBSSxHQUFDLEtBQUcsRUFBRSxFQUFFLEdBQUUsS0FBRyxLQUFJLEtBQUcsR0FBRyxFQUFFO0FBQUUsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFHLEtBQUcsRUFBRSxXQUFXLFFBQU87QUFBRSxRQUFJLElBQUU7QUFBRyxRQUFHLEtBQUcsS0FBSyxVQUFRLEtBQUssRUFBRSxRQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUUsQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFFLEVBQUUsQ0FBQztBQUFHLFdBQU8sRUFBRSxVQUFRLEdBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxFQUFFLEdBQUU7QUFBQyxXQUFPLEtBQUcsRUFBRSxhQUFXLElBQUUsRUFBQyxTQUFRLEVBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxhQUFhLEdBQUcsT0FBTSxJQUFJLFVBQVUsbUNBQW1DO0FBQUEsRUFBQztBQUFDLE1BQUksS0FBRyxXQUFVO0FBQUMsYUFBUyxFQUFFLEdBQUU7QUFBQyxTQUFHLE1BQUssQ0FBQyxHQUFFLEtBQUssUUFBTSxHQUFFLEtBQUssUUFBTSxFQUFFLFFBQVEsYUFBVyxPQUFHLEtBQUssV0FBUyxHQUFFLEtBQUssT0FBSyxJQUFJLEdBQUc7QUFBUSxVQUFJLElBQUUsSUFBSSxHQUFHO0FBQVEsYUFBTyxLQUFLLEtBQUssT0FBTyxDQUFDLEdBQUUsS0FBSyxVQUFRLEdBQUUsS0FBSyxRQUFNLEtBQUssYUFBVSxHQUFHLFNBQVMsRUFBQyxNQUFLLEVBQUUsTUFBSyxLQUFJLEVBQUUsSUFBSSxPQUFNLENBQUMsSUFBRSxLQUFLLFVBQVUsR0FBQSxHQUFHLFNBQVMsQ0FBQyxHQUFFLEtBQUs7SUFBTTtBQUFDLFdBQU8sRUFBRSxVQUFVLFlBQVUsV0FBVTtBQUFDLFVBQUksSUFBRSxJQUFHLElBQUUsUUFBTyxJQUFFLEtBQUs7QUFBVSxXQUFJLEtBQUssWUFBVyxLQUFLLFdBQVMsS0FBSyxPQUFPLFVBQVEsS0FBSyxVQUFVLENBQUMsTUFBSSxNQUFLLE1BQUcsS0FBSyxPQUFPLEtBQUssUUFBUSxFQUFFLENBQUMsR0FBRSxLQUFLO0FBQVcsV0FBSyxhQUFXLEtBQUssT0FBTyxVQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsR0FBRyxLQUFHLEtBQUssTUFBTSxvQ0FBb0M7QUFBRSxVQUFJLElBQUUsRUFBRSxNQUFNLHVCQUF1QixHQUFFLElBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxPQUFPLEdBQUUsSUFBRSxFQUFDLFVBQVMsRUFBRSxDQUFDLEdBQUUsT0FBTSxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxHQUFFLEtBQUksRUFBQyxNQUFLLEtBQUssVUFBVSxDQUFDLEdBQUUsUUFBTyxLQUFLLFVBQVUsQ0FBQyxFQUFDLEVBQUMsR0FBRSxhQUFZLEVBQUUsQ0FBQyxFQUFDO0FBQUUsVUFBRyxFQUFFLFNBQU8sS0FBRyxFQUFFLENBQUMsTUFBSSxPQUFLLEVBQUUsQ0FBQyxJQUFFLE9BQUksRUFBRSxZQUFVLEtBQUssV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsWUFBVSxLQUFLLGVBQWUsRUFBRSxDQUFDLENBQUMsS0FBRyxFQUFFLFlBQVUsS0FBSyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUUsRUFBRSxDQUFDLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxhQUFhLEdBQUUsSUFBRSxFQUFFLENBQUMsRUFBRSxLQUFNO0FBQUMsVUFBRSxRQUFNLEtBQUssUUFBTSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxNQUFJLEVBQUUsY0FBWSxNQUFHLEtBQUssVUFBUSxFQUFFLEtBQUssY0FBWSxFQUFFLENBQUMsS0FBSSxFQUFFLFNBQU8sRUFBRSxDQUFDLE1BQUksT0FBSyxFQUFFLENBQUMsTUFBSSxLQUFJLEVBQUUsS0FBSyxXQUFTLEVBQUUsU0FBTyxFQUFFLE1BQU0sR0FBRSxFQUFFLElBQUU7QUFBQSxNQUFDO0FBQUMsV0FBSyxRQUFRLENBQUMsR0FBRSxLQUFLO0FBQUEsSUFBVSxHQUFFLEVBQUUsVUFBVSxhQUFXLFdBQVU7QUFBQyxVQUFHLEtBQUssVUFBVSxDQUFDLE1BQUksSUFBSSxRQUFPLEtBQUssVUFBVztBQUFDLGVBQVEsSUFBRSxJQUFJLEdBQUcsUUFBUSxFQUFDLE9BQU0sSUFBRyxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEtBQUssVUFBVSxDQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsRUFBQyxFQUFDLEdBQUUsYUFBWSxLQUFLLFVBQVUsQ0FBQyxFQUFDLENBQUMsR0FBRSxLQUFLLFdBQVMsS0FBSyxPQUFPLFVBQVEsS0FBSyxjQUFZLEtBQUssVUFBVSxDQUFDLE1BQUksV0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFJLGdCQUFlLE1BQUssYUFBVyxLQUFLLFVBQVUsQ0FBQyxNQUFJLGdCQUFjLEVBQUUsT0FBTyxTQUFPLEtBQUssV0FBVyxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxPQUFPLE1BQU0sT0FBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLEVBQUUsT0FBTyxNQUFNLFNBQU8sS0FBSyxVQUFVLENBQUMsR0FBRSxFQUFFLE9BQU8sSUFBSSxTQUFPLEtBQUssVUFBVSxDQUFDLEdBQUUsRUFBRSxPQUFPLElBQUksT0FBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLEVBQUUsY0FBWSxLQUFLLFVBQVUsQ0FBQyxLQUFHLEtBQUssYUFBVyxLQUFLLFVBQVUsQ0FBQyxNQUFJLGVBQWEsRUFBRSxPQUFPLFFBQU0sS0FBSyxXQUFXLEtBQUssVUFBVSxDQUFDLENBQUMsSUFBRSxLQUFLLFVBQVUsQ0FBQyxNQUFJLGVBQWEsRUFBRSxRQUFNLEtBQUssVUFBVSxDQUFDLElBQUUsS0FBSyxVQUFVLENBQUMsTUFBSSxZQUFVLEVBQUUsUUFBTSxLQUFLLFdBQVcsS0FBSyxVQUFVLENBQUMsR0FBRSxHQUFHLElBQUcsS0FBSztBQUFXLGFBQU8sS0FBSyxRQUFRLENBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLFFBQU0sV0FBVTtBQUFDLFVBQUcsS0FBSyxhQUFXLEtBQUssT0FBTyxTQUFPLEdBQUU7QUFBQyxhQUFLLEtBQUssZ0JBQWMsTUFBRyxLQUFLO0FBQVc7QUFBQSxNQUFNO0FBQUMsVUFBSSxJQUFFLElBQUksR0FBRztBQUFRLFdBQUssUUFBUSxPQUFPLE9BQU8sQ0FBQyxHQUFFLEtBQUssVUFBUSxHQUFFLEtBQUs7QUFBQSxJQUFVLEdBQUUsRUFBRSxVQUFVLFVBQVEsV0FBVTtBQUFDLFVBQUksSUFBRSxJQUFJLEdBQUcsUUFBUSxFQUFDLE9BQU0sS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEtBQUssVUFBVSxDQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsRUFBQyxFQUFDLEdBQUUsYUFBWSxLQUFLLFVBQVUsQ0FBQyxFQUFDLENBQUM7QUFBRSxXQUFLLFFBQVEsQ0FBQyxHQUFFLEtBQUs7QUFBQSxJQUFV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LEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxHQUFFLEtBQUksRUFBQyxNQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUUsUUFBTyxFQUFFLFVBQVUsQ0FBQyxFQUFDLEVBQUMsR0FBRSxhQUFZLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBRSxFQUFFLFFBQVEsQ0FBQyxHQUFFLElBQUUsS0FBRyxFQUFFLGFBQVcsRUFBRSxVQUFVLENBQUMsTUFBSSxPQUFLLEVBQUUsTUFBTSx3QkFBd0I7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDLE1BQU0sTUFBSyxNQUFNLGlCQUFlLEtBQUssVUFBVSxDQUFDLElBQUUsVUFBVTtBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsUUFBTSxXQUFVO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBVSxXQUFLLGFBQVcsS0FBRyxLQUFLLFVBQVUsQ0FBQyxNQUFJLE9BQUssS0FBSyxVQUFVLENBQUMsTUFBSSxPQUFLLEtBQUssU0FBTyxLQUFLLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRSxLQUFLLGNBQVksS0FBSyxhQUFXLEtBQUssT0FBTyxTQUFPLEtBQUcsS0FBSyxVQUFVLENBQUMsTUFBSSxPQUFLLEtBQUssVUFBVSxDQUFDLE1BQUksT0FBSyxLQUFLLFFBQVEsS0FBSyxPQUFPLFFBQU0sS0FBSyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUUsS0FBSyxjQUFZLEtBQUssV0FBWTtBQUFBLElBQUEsR0FBRSxFQUFFLFVBQVUsU0FBTyxXQUFVO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBVSxXQUFLLFFBQVEsSUFBSSxHQUFHLFFBQVEsRUFBQyxPQUFNLEtBQUssVUFBVSxDQUFDLEdBQUUsUUFBTyxFQUFDLE9BQU0sRUFBQyxNQUFLLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBRSxDQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUMsR0FBRSxhQUFZLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFFLEtBQUs7QUFBQSxJQUFVLEdBQUUsRUFBRSxVQUFVLFlBQVUsU0FBUyxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBVSxVQUFHLEtBQUcsRUFBRSxDQUFDLE1BQUksSUFBSSxRQUFPLEtBQUssWUFBVyxLQUFLLFVBQVc7QUFBQyxXQUFLLFFBQVEsSUFBSSxHQUFHLFFBQVEsRUFBQyxPQUFNLEtBQUssVUFBVSxDQUFDLEdBQUUsUUFBTyxFQUFDLE9BQU0sRUFBQyxNQUFLLEtBQUssVUFBVSxDQUFDLEdBQUUsUUFBTyxLQUFLLFVBQVUsQ0FBQyxFQUFDLEdBQUUsS0FBSSxFQUFDLE1BQUssS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEtBQUssVUFBVSxDQUFDLEVBQUMsRUFBQyxHQUFFLGFBQVksS0FBSyxVQUFVLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEtBQUs7QUFBQSxJQUFVLEdBQUUsRUFBRSxVQUFVLFlBQVUsU0FBUyxHQUFFLEdBQUU7QUFBQyxlQUFRLElBQUUsTUFBSyxJQUFFLEtBQUssV0FBVSxJQUFFLEtBQUssVUFBVSxDQUFDLEdBQUUsS0FBRyxFQUFFLENBQUMsTUFBSSxVQUFRO0FBQUMsYUFBSztBQUFXLFlBQUksSUFBRSxLQUFLLFVBQVUsQ0FBQztBQUFFLFlBQUcsS0FBRyxHQUFFLEVBQUUsWUFBWSxJQUFJLE1BQUksRUFBRSxTQUFPLEdBQUU7QUFBQyxjQUFJLElBQUUsS0FBSztBQUFVLGVBQUcsRUFBRSxDQUFDLE1BQUksWUFBVSxLQUFHLEtBQUssV0FBVyxFQUFFLENBQUMsR0FBRSxHQUFHLEdBQUUsS0FBSztBQUFBLFFBQVc7QUFBQyxZQUFFLEtBQUs7QUFBQSxNQUFTO0FBQUMsVUFBSSxLQUFLLEdBQUEsR0FBRyxTQUFTLEdBQUUsR0FBRyxHQUFFLEtBQUssR0FBQSxHQUFHLFNBQVMsR0FBRSxHQUFHLEdBQUUsS0FBRSxHQUFHLEdBQUcsU0FBUyxHQUFFLElBQUk7QUFBRSxRQUFFLFdBQVMsSUFBRSxFQUFFLE9BQU8sU0FBUyxHQUFFO0FBQUMsZUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7QUFBQSxNQUFDLENBQUM7QUFBRyxVQUFJLEtBQUssR0FBQSxHQUFHLFVBQVksR0FBQSxHQUFHLFVBQVksR0FBQSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBRSxRQUFFLFFBQVEsU0FBUyxHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxJQUFFLENBQUMsS0FBRyxFQUFFLFFBQU8sSUFBRSxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUUsWUFBRyxNQUFJLEtBQUcsRUFBRSxRQUFPLEVBQUUsS0FBSyxHQUFFLEdBQUUsRUFBRSxNQUFNO0FBQUUsWUFBSSxJQUFFO0FBQU8sU0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFFLElBQUUsSUFBSSxHQUFHLFFBQVEsRUFBQyxPQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUUsUUFBTyxFQUFDLE9BQU0sRUFBQyxNQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUUsUUFBTyxFQUFFLFVBQVUsQ0FBQyxJQUFFLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxFQUFFLFVBQVUsQ0FBQyxHQUFFLFFBQU8sRUFBRSxVQUFVLENBQUMsS0FBRyxJQUFFLEdBQUUsRUFBQyxHQUFFLGFBQVksRUFBRSxVQUFVLENBQUMsSUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFFLElBQUUsSUFBSSxHQUFHLFFBQVEsRUFBQyxPQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUUsUUFBTyxFQUFDLE9BQU0sRUFBQyxNQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUUsUUFBTyxFQUFFLFVBQVUsQ0FBQyxJQUFFLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxFQUFFLFVBQVUsQ0FBQyxHQUFFLFFBQU8sRUFBRSxVQUFVLENBQUMsS0FBRyxJQUFFLEdBQUUsRUFBQyxHQUFFLGFBQVksRUFBRSxVQUFVLENBQUMsSUFBRSxFQUFFLENBQUMsRUFBQyxDQUFDLElBQUUsSUFBRSxJQUFJLEdBQUcsUUFBUSxFQUFDLE9BQU0sR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssRUFBRSxVQUFVLENBQUMsR0FBRSxRQUFPLEVBQUUsVUFBVSxDQUFDLElBQUUsRUFBQyxHQUFFLEtBQUksRUFBQyxNQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUUsUUFBTyxFQUFFLFVBQVUsQ0FBQyxLQUFHLElBQUUsR0FBRSxFQUFDLEdBQUUsYUFBWSxFQUFFLFVBQVUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBRSxFQUFFLFFBQVEsR0FBRSxDQUFDO0FBQUEsTUFBQyxDQUFDLEdBQUUsS0FBSztBQUFBLElBQVUsR0FBRSxFQUFFLFVBQVUsT0FBSyxTQUFTLEdBQUU7QUFBQyxVQUFJLElBQUUsS0FBSztBQUFVLGFBQU8sS0FBRyxFQUFFLENBQUMsTUFBSSxPQUFLLEtBQUssWUFBVyxLQUFLLFVBQVcsS0FBRSxLQUFLLFVBQVUsQ0FBQztBQUFBLElBQUMsR0FBRSxFQUFFLFVBQVUsT0FBSyxXQUFVO0FBQUMsYUFBSyxLQUFLLFdBQVMsS0FBSyxPQUFPLFNBQVEsTUFBSyxNQUFNLElBQUU7QUFBRSxhQUFPLEtBQUs7QUFBQSxJQUFJLEdBQUUsRUFBRSxVQUFVLFFBQU0sU0FBUyxHQUFFO0FBQUMsY0FBTyxLQUFLLFVBQVUsQ0FBQztRQUFHLEtBQUk7QUFBUSxlQUFLLE1BQUs7QUFBRztBQUFBLFFBQU0sS0FBSTtBQUFVLGVBQUssUUFBTztBQUFHO0FBQUEsUUFBTSxLQUFJO0FBQUksZUFBSyxZQUFhO0FBQUM7QUFBQSxRQUFNLEtBQUk7QUFBSSxlQUFHLEtBQUssbUJBQW9CO0FBQUM7QUFBQSxRQUFNLEtBQUk7QUFBSSxlQUFLLFVBQVM7QUFBRztBQUFBLFFBQU0sS0FBSTtBQUFJLGVBQUsscUJBQW9CO0FBQUc7QUFBQSxRQUFNLEtBQUk7QUFBQSxRQUFVLEtBQUk7QUFBTyxlQUFLLEtBQUk7QUFBRztBQUFBLFFBQU0sS0FBSTtBQUFJLGVBQUssT0FBTTtBQUFHO0FBQUEsUUFBTSxLQUFJO0FBQUksZUFBSyxpQkFBa0I7QUFBQztBQUFBLFFBQU0sS0FBSTtBQUFJLGVBQUssTUFBTztBQUFDO0FBQUEsUUFBTSxLQUFJO0FBQUksZUFBSyxVQUFTO0FBQUc7QUFBQSxRQUFNLEtBQUk7QUFBSSxlQUFLLFFBQU87QUFBRztBQUFBLFFBQU0sS0FBSTtBQUFhLGVBQUssV0FBWTtBQUFDO0FBQUEsUUFBTSxLQUFJO0FBQVMsZUFBSyxPQUFRO0FBQUM7QUFBQSxNQUFLO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxpQkFBZSxTQUFTLEdBQUU7QUFBQyxVQUFHLEtBQUssU0FBTyxPQUFPLEtBQUcsVUFBUztBQUFDLFlBQUksSUFBRSxFQUFFO0FBQU8sZUFBTyxFQUFFLFNBQU8sSUFBRTtBQUFBLE1BQUU7QUFBQyxhQUFPO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxhQUFXLFNBQVMsR0FBRSxHQUFFO0FBQUMsYUFBTyxLQUFLLFFBQU0sS0FBRyxLQUFHO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxhQUFXLFNBQVMsR0FBRTtBQUFDLGFBQU8sS0FBSyxTQUFPLEtBQUcsT0FBTyxLQUFHLFdBQVMsRUFBRSxLQUFNLElBQUM7QUFBQSxJQUFDLEdBQUUsRUFBRSxVQUFVLHdCQUFzQixTQUFTLEdBQUU7QUFBQyxhQUFPLEtBQUssUUFBTSxFQUFFLENBQUMsTUFBSSxVQUFRLEtBQUssV0FBVyxFQUFFLENBQUMsR0FBRSxHQUFHLElBQUUsS0FBSyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUEsSUFBQyxHQUFFLEVBQUUsVUFBVSxVQUFRLFNBQVMsR0FBRSxHQUFFO0FBQUMsYUFBTyxNQUFJLEVBQUUsWUFBVSxLQUFLLGVBQWUsQ0FBQyxJQUFHLEtBQUssV0FBUyxFQUFFLE9BQU8sU0FBTyxLQUFLLFFBQU8sS0FBSyxTQUFPLEtBQUksS0FBSyxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQUMsR0FBRSxHQUFHLEdBQUUsQ0FBQyxFQUFDLEtBQUksYUFBWSxLQUFJLFdBQVU7QUFBQyxhQUFPLEtBQUssT0FBTyxLQUFLLFFBQVE7QUFBQSxJQUFDLEVBQUMsR0FBRSxFQUFDLEtBQUksYUFBWSxLQUFJLFdBQVU7QUFBQyxhQUFPLEtBQUssT0FBTyxLQUFLLFdBQVMsQ0FBQztBQUFBLElBQUMsRUFBQyxHQUFFLEVBQUMsS0FBSSxhQUFZLEtBQUksV0FBVTtBQUFDLGFBQU8sS0FBSyxPQUFPLEtBQUssV0FBUyxDQUFDO0FBQUEsSUFBQyxFQUFDLENBQUMsQ0FBQyxHQUFFO0FBQUEsRUFBQyxFQUFHO0FBQUMsS0FBRyxVQUFRO0FBQUcsS0FBRyxVQUFRLEdBQUc7QUFBTyxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxLQUFHLGFBQVc7QUFBRyxNQUFJLEtBQUcsMkJBQVU7QUFBQyxhQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFlBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFFLGFBQVcsRUFBRSxjQUFZLE9BQUcsRUFBRSxlQUFhLE1BQUcsV0FBVSxNQUFJLEVBQUUsV0FBUyxPQUFJLE9BQU8sZUFBZSxHQUFFLEVBQUUsS0FBSSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxXQUFPLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxhQUFPLEtBQUcsRUFBRSxFQUFFLFdBQVUsQ0FBQyxHQUFFLEtBQUcsRUFBRSxHQUFFLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxFQUFDLEVBQUMsR0FBRyxLQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUcsRUFBRTtBQUFFLFdBQVMsR0FBRyxHQUFFO0FBQUMsV0FBTyxLQUFHLEVBQUUsYUFBVyxJQUFFLEVBQUMsU0FBUSxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsYUFBYSxHQUFHLE9BQU0sSUFBSSxVQUFVLG1DQUFtQztBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsV0FBVTtBQUFDLGFBQVMsRUFBRSxHQUFFO0FBQUMsYUFBTyxHQUFHLE1BQUssQ0FBQyxHQUFFLEtBQUssT0FBSyxLQUFHLFdBQVU7QUFBQSxNQUFBLEdBQUc7QUFBQSxJQUFJO0FBQUMsV0FBTyxFQUFFLFVBQVUsVUFBUSxTQUFTLEdBQUU7QUFBQyxVQUFJLElBQUUsVUFBVSxTQUFPLEtBQUcsVUFBVSxDQUFDLE1BQUksU0FBTyxVQUFVLENBQUMsSUFBRSxDQUFBLEdBQUcsSUFBRSxJQUFJLEdBQUcsUUFBUSxFQUFDLEtBQUksR0FBRSxPQUFNLFNBQVMsR0FBRTtBQUFDLGNBQU0sSUFBSSxNQUFNLENBQUM7QUFBQSxNQUFDLEdBQUUsU0FBUSxFQUFDLENBQUM7QUFBRSxhQUFPLEtBQUssTUFBSSxHQUFFLEtBQUssS0FBSyxDQUFDLEdBQUU7QUFBQSxJQUFJLEdBQUUsR0FBRyxHQUFFLENBQUMsRUFBQyxLQUFJLFVBQVMsS0FBSSxXQUFVO0FBQUMsYUFBTyxPQUFPLEtBQUssR0FBRztBQUFBLElBQUMsRUFBQyxDQUFDLENBQUMsR0FBRTtBQUFBLEVBQUMsRUFBRztBQUFDLEtBQUcsVUFBUTtBQUFHLEtBQUcsVUFBUSxHQUFHO0FBQU8sQ0FBQztBQUFFLElBQUksSUFBRSxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLElBQUksRUFBRTtBQUFZLGFBQVEsS0FBSyxHQUFFO0FBQUMsVUFBRyxDQUFDLEVBQUUsZUFBZSxDQUFDLEVBQUU7QUFBUyxVQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxPQUFPO0FBQUUsWUFBSSxZQUFVLE1BQUksV0FBUyxNQUFJLEVBQUUsQ0FBQyxJQUFFLEtBQUcsTUFBSSxXQUFTLEVBQUUsQ0FBQyxJQUFFLElBQUUsYUFBYSxRQUFNLEVBQUUsQ0FBQyxJQUFFLEVBQUUsSUFBSSxPQUFHLEdBQUcsR0FBRSxDQUFDLENBQUMsSUFBRSxNQUFJLFlBQVUsTUFBSSxXQUFTLE1BQUksYUFBVyxNQUFJLGdCQUFjLE1BQUksWUFBVSxNQUFJLFNBQU8sSUFBRSxHQUFHLENBQUMsSUFBRyxFQUFFLENBQUMsSUFBRTtBQUFBLElBQUU7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBUSxNQUFLO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxVQUFFLEtBQUcsQ0FBRSxHQUFDLEtBQUssT0FBSyxFQUFDLFFBQU8sSUFBRyxPQUFNLEdBQUU7QUFBRSxlQUFRLEtBQUssRUFBRSxNQUFLLENBQUMsSUFBRSxFQUFFLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxTQUFRO0FBQUMsYUFBTyxLQUFLLFVBQVEsS0FBSyxPQUFPLFlBQVksSUFBSSxHQUFFLEtBQUssU0FBTyxRQUFPO0FBQUEsSUFBSTtBQUFBLElBQUMsV0FBVTtBQUFDLGFBQU0sQ0FBQyxLQUFLLEtBQUssUUFBTyxPQUFPLEtBQUssS0FBSyxHQUFFLEtBQUssS0FBSyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsTUFBTSxHQUFFO0FBQUMsVUFBRSxLQUFHLENBQUE7QUFBRyxVQUFJLElBQUUsR0FBRyxJQUFJO0FBQUUsZUFBUSxLQUFLLEVBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxDQUFDO0FBQUUsYUFBTztBQUFBLElBQUM7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFVBQUUsS0FBRyxDQUFBO0FBQUcsVUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUUsYUFBTyxLQUFLLE9BQU8sYUFBYSxNQUFLLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxJQUFDLFdBQVcsR0FBRTtBQUFDLFVBQUUsS0FBRyxDQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDO0FBQUUsYUFBTyxLQUFLLE9BQU8sWUFBWSxNQUFLLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxJQUFDLGNBQWE7QUFBQyxVQUFJLElBQUUsTUFBTSxVQUFVLE1BQU0sS0FBSyxTQUFTO0FBQUUsVUFBRyxLQUFLLFFBQU87QUFBQyxpQkFBUSxLQUFLLEVBQUUsTUFBSyxPQUFPLGFBQWEsTUFBSyxDQUFDO0FBQUUsYUFBSyxPQUFNO0FBQUEsTUFBRTtBQUFDLGFBQU87QUFBQSxJQUFJO0FBQUEsSUFBQyxPQUFPLEdBQUU7QUFBQyxhQUFPLEtBQUssVUFBVSxLQUFLLEtBQU0sTUFBRyxFQUFFLEtBQU0sQ0FBQSxHQUFFLEtBQUssT0FBTSxHQUFHLEVBQUUsT0FBTyxJQUFJLEdBQUU7QUFBQSxJQUFJO0FBQUEsSUFBQyxXQUFXLEdBQUU7QUFBQyxhQUFPLEtBQUssVUFBVSxLQUFLLEtBQUksTUFBSyxFQUFFLEtBQUksQ0FBRSxHQUFFLEtBQUssVUFBUyxFQUFFLE9BQU8sYUFBYSxHQUFFLElBQUksR0FBRTtBQUFBLElBQUk7QUFBQSxJQUFDLFVBQVUsR0FBRTtBQUFDLGFBQU8sS0FBSyxVQUFVLEtBQUssV0FBUyxFQUFFLE1BQU0sR0FBRSxLQUFLLE9BQVEsR0FBQyxFQUFFLE9BQU8sWUFBWSxHQUFFLElBQUksR0FBRTtBQUFBLElBQUk7QUFBQSxJQUFDLE9BQU07QUFBQyxVQUFJLElBQUUsS0FBSyxPQUFPLE1BQU0sSUFBSTtBQUFFLGFBQU8sS0FBSyxPQUFPLE1BQU0sSUFBRSxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsT0FBTTtBQUFDLFVBQUksSUFBRSxLQUFLLE9BQU8sTUFBTSxJQUFJO0FBQUUsYUFBTyxLQUFLLE9BQU8sTUFBTSxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxTQUFRO0FBQUMsVUFBSSxJQUFFO0FBQUcsZUFBUSxLQUFLLE1BQUs7QUFBQyxZQUFHLENBQUMsS0FBSyxlQUFlLENBQUMsS0FBRyxNQUFJLFNBQVM7QUFBUyxZQUFJLElBQUUsS0FBSyxDQUFDO0FBQUUscUJBQWEsUUFBTSxFQUFFLENBQUMsSUFBRSxFQUFFLElBQUksT0FBRyxPQUFPLEtBQUcsWUFBVSxFQUFFLFNBQU8sRUFBRSxPQUFRLElBQUMsQ0FBQyxJQUFFLE9BQU8sS0FBRyxZQUFVLEVBQUUsU0FBTyxFQUFFLENBQUMsSUFBRSxFQUFFLE9BQU0sSUFBRyxFQUFFLENBQUMsSUFBRTtBQUFBLE1BQUM7QUFBQyxhQUFPO0FBQUEsSUFBQztBQUFBLElBQUMsT0FBTTtBQUFDLFVBQUksSUFBRTtBQUFLLGFBQUssRUFBRSxTQUFRLEtBQUUsRUFBRTtBQUFPLGFBQU87QUFBQSxJQUFDO0FBQUEsSUFBQyxVQUFVLEdBQUU7QUFBQyxhQUFPLEtBQUssS0FBSyxRQUFPLE9BQU8sS0FBSyxLQUFLLE9BQU0sS0FBRyxPQUFPLEtBQUssS0FBSztBQUFBLElBQU87QUFBQSxJQUFDLGVBQWUsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLLFNBQVUsR0FBQyxJQUFFLEtBQUssT0FBTyxNQUFNLFFBQU8sSUFBRSxLQUFLLE9BQU8sTUFBTTtBQUFLLGVBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLEdBQUUsQ0FBQyxNQUFJO0FBQUEsS0FDM3BZLElBQUUsR0FBRSxLQUFHLEtBQUcsS0FBRztBQUFFLGFBQU0sRUFBQyxNQUFLLEdBQUUsUUFBTyxFQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsV0FBVyxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssT0FBTztBQUFNLFVBQUcsT0FBTyxDQUFDLEVBQUUsTUFBTSxLQUFFLEtBQUssZUFBZSxFQUFFLEtBQUs7QUFBQSxlQUFVLE9BQU8sQ0FBQyxFQUFFLE1BQUs7QUFBQyxZQUFJLElBQUUsS0FBSyxTQUFVLEVBQUMsUUFBUSxFQUFFLElBQUk7QUFBRSxjQUFJLE9BQUssSUFBRSxLQUFLLGVBQWUsQ0FBQztBQUFBLE1BQUU7QUFBQyxhQUFPO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxDQUFDO0FBQUUsSUFBSSxJQUFFLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxNQUFJLEtBQUcsRUFBQyxHQUFHLEtBQUcsY0FBYyxHQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLENBQUMsR0FBRSxLQUFLLFVBQVEsS0FBSyxRQUFNO0lBQUc7QUFBQSxJQUFDLEtBQUssR0FBRTtBQUFDLGFBQU8sRUFBRSxTQUFPLE1BQUssS0FBSyxNQUFNLEtBQUssQ0FBQyxHQUFFO0FBQUEsSUFBSTtBQUFBLElBQUMsS0FBSyxHQUFFO0FBQUMsV0FBSyxhQUFXLEtBQUssV0FBUyxJQUFHLEtBQUssWUFBVSxLQUFLLFVBQVEsS0FBSSxLQUFLLFlBQVU7QUFBRSxVQUFJLElBQUUsS0FBSyxVQUFTLEdBQUU7QUFBRSxVQUFHLEtBQUssUUFBUSxDQUFDLElBQUUsR0FBRSxDQUFDLENBQUMsS0FBSyxPQUFNO0FBQUMsZUFBSyxLQUFLLFFBQVEsQ0FBQyxJQUFFLEtBQUssTUFBTSxXQUFTLElBQUUsS0FBSyxRQUFRLENBQUMsR0FBRSxJQUFFLEVBQUUsS0FBSyxNQUFNLENBQUMsR0FBRSxDQUFDLEdBQUUsTUFBSSxTQUFLLE1BQUssUUFBUSxDQUFDLEtBQUc7QUFBRSxlQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsR0FBRTtBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxLQUFLLEdBQUU7QUFBQyxhQUFPLEtBQUssS0FBSyxDQUFDLEdBQUUsTUFBSTtBQUFDLFlBQUksSUFBRSxFQUFFLEdBQUUsQ0FBQztBQUFFLGVBQU8sTUFBSSxTQUFJLEVBQUUsU0FBTyxJQUFFLEVBQUUsS0FBSyxDQUFDLElBQUc7QUFBQSxNQUFDLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxTQUFTLEdBQUUsR0FBRTtBQUFDLFVBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxnREFBZ0Q7QUFBRSxVQUFJLElBQUUsT0FBTyxLQUFHO0FBQVcsYUFBTyxLQUFLLEtBQUssQ0FBQyxHQUFFLE1BQUk7QUFBQyxZQUFHLEtBQUcsYUFBYSxLQUFHLENBQUMsS0FBRyxFQUFFLFNBQU8sRUFBRSxRQUFPLEVBQUUsS0FBSyxNQUFLLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLE9BQU8sR0FBRTtBQUFDLGFBQU8sRUFBRSxTQUFPLE1BQUssS0FBSyxNQUFNLEtBQUssQ0FBQyxHQUFFO0FBQUEsSUFBSTtBQUFBLElBQUMsUUFBUSxHQUFFO0FBQUMsYUFBTyxFQUFFLFNBQU8sTUFBSyxLQUFLLE1BQU0sUUFBUSxDQUFDLEdBQUU7QUFBQSxJQUFJO0FBQUEsSUFBQyxVQUFVLEdBQUU7QUFBQyxVQUFHLE1BQU0sVUFBVSxDQUFDLEdBQUUsS0FBSyxNQUFNLFVBQVEsS0FBSyxLQUFLLE1BQU0sR0FBRSxVQUFVLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxZQUFZLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLLE1BQU0sQ0FBQyxHQUFFO0FBQUUsV0FBSyxNQUFNLE9BQU8sSUFBRSxHQUFFLEdBQUUsQ0FBQztBQUFFLGVBQVEsS0FBSyxLQUFLLFFBQVEsS0FBRSxLQUFLLFFBQVEsQ0FBQyxHQUFFLEtBQUcsTUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFFLElBQUUsS0FBSyxNQUFNO0FBQVEsYUFBTztBQUFBLElBQUk7QUFBQSxJQUFDLGFBQWEsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxDQUFDLEdBQUU7QUFBRSxXQUFLLE1BQU0sT0FBTyxHQUFFLEdBQUUsQ0FBQztBQUFFLGVBQVEsS0FBSyxLQUFLLFFBQVEsS0FBRSxLQUFLLFFBQVEsQ0FBQyxHQUFFLEtBQUcsTUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFFLElBQUUsS0FBSyxNQUFNO0FBQVEsYUFBTztBQUFBLElBQUk7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFVBQUUsS0FBSyxNQUFNLENBQUMsR0FBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLFNBQU8sUUFBTyxLQUFLLE1BQU0sT0FBTyxHQUFFLENBQUM7QUFBRSxVQUFJO0FBQUUsZUFBUSxLQUFLLEtBQUssUUFBUSxLQUFFLEtBQUssUUFBUSxDQUFDLEdBQUUsS0FBRyxNQUFJLEtBQUssUUFBUSxDQUFDLElBQUUsSUFBRTtBQUFHLGFBQU87QUFBQSxJQUFJO0FBQUEsSUFBQyxZQUFXO0FBQUMsZUFBUSxLQUFLLEtBQUssTUFBTSxHQUFFLFNBQU87QUFBTyxhQUFPLEtBQUssUUFBTSxDQUFFLEdBQUM7QUFBQSxJQUFJO0FBQUEsSUFBQyxNQUFNLEdBQUU7QUFBQyxhQUFPLEtBQUssTUFBTSxNQUFNLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxLQUFLLEdBQUU7QUFBQyxhQUFPLEtBQUssTUFBTSxLQUFLLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxNQUFNLEdBQUU7QUFBQyxhQUFPLE9BQU8sS0FBRyxXQUFTLElBQUUsS0FBSyxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLElBQUksUUFBTztBQUFDLFVBQUcsS0FBSyxNQUFNLFFBQU8sS0FBSyxNQUFNLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxJQUFJLE9BQU07QUFBQyxVQUFHLEtBQUssTUFBTSxRQUFPLEtBQUssTUFBTSxLQUFLLE1BQU0sU0FBTyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsV0FBVTtBQUFDLFVBQUksSUFBRSxLQUFLLE1BQU0sSUFBSSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQUUsYUFBTyxLQUFLLFVBQVEsSUFBRSxLQUFLLFFBQU0sSUFBRyxLQUFLLEtBQUssV0FBUyxJQUFFLEtBQUssS0FBSyxTQUFPLElBQUcsS0FBSyxLQUFLLFVBQVEsS0FBRyxLQUFLLEtBQUssUUFBTztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUUsS0FBRyxpQkFBZSxPQUFHO0FBQUMsUUFBSSxJQUFFLFNBQU8sRUFBRTtBQUFLLE1BQUUsWUFBWSxHQUFHLE1BQUksRUFBRSxTQUFPLE1BQUksS0FBRyxNQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFFLFNBQVMsR0FBRTtBQUFDLGFBQU8sS0FBSyxTQUFTLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFFO0FBQUUsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEVBQUc7QUFBQyxLQUFHLFVBQVEsY0FBYyxHQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLENBQUMsR0FBRSxLQUFLLE9BQUs7QUFBQSxJQUFNO0FBQUEsRUFBQztBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRztBQUFJLEtBQUcsVUFBUSxjQUFjLEdBQUU7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQU0sQ0FBQyxHQUFFLEtBQUssT0FBSyxTQUFRLEtBQUssYUFBVztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEtBQUksS0FBRyxjQUFjLEdBQUU7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQU0sQ0FBQyxHQUFFLEtBQUssT0FBSztBQUFBLElBQVE7QUFBQSxJQUFDLFdBQVU7QUFBTyxXQUFLLFNBQU8sS0FBSyxLQUFLLFFBQU07QUFBRyxhQUFNLENBQUMsS0FBSyxLQUFLLFFBQU8sS0FBSSxPQUFPLFVBQVUsU0FBUyxLQUFLLEtBQUssS0FBSyxHQUFFLEtBQUssS0FBSyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBRSxLQUFHLGVBQWUsRUFBRTtBQUFFLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxLQUFJLEtBQUcsRUFBQyxHQUFHLEtBQUcsY0FBYyxHQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLENBQUMsR0FBRSxLQUFLLE9BQUs7QUFBQSxJQUFPO0FBQUEsRUFBQztBQUFFLEtBQUcsZUFBZSxFQUFFO0FBQUUsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEVBQUcsR0FBQyxLQUFHLEtBQUksS0FBRyxjQUFjLEdBQUU7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQU0sQ0FBQyxHQUFFLEtBQUssT0FBSztBQUFBLElBQU87QUFBQSxFQUFDO0FBQUUsS0FBRyxlQUFlLEVBQUU7QUFBRSxLQUFHLFVBQVE7QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxNQUFJLEtBQUcsRUFBRyxHQUFDLEtBQUcsS0FBSSxLQUFHLGNBQWMsR0FBRTtBQUFBLElBQUMsWUFBWSxHQUFFO0FBQUMsWUFBTSxDQUFDLEdBQUUsS0FBSyxPQUFLLFdBQVUsS0FBSyxTQUFPLE9BQU8sQ0FBQyxFQUFFLFVBQVE7QUFBQSxJQUFFO0FBQUEsSUFBQyxXQUFVO0FBQUMsYUFBTSxDQUFDLEtBQUssS0FBSyxRQUFPLEtBQUssU0FBTyxPQUFLLE1BQUssT0FBTyxLQUFLLEtBQUssR0FBRSxLQUFLLFNBQU8sS0FBRyxNQUFLLEtBQUssS0FBSyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBRSxLQUFHLGVBQWUsRUFBRTtBQUFFLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxFQUFHLEdBQUMsS0FBRyxjQUFjLEdBQUU7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQU0sQ0FBQyxHQUFFLEtBQUssT0FBSyxRQUFPLEtBQUssYUFBVztBQUFBLElBQUU7QUFBQSxFQUFDO0FBQUUsS0FBRyxlQUFlLEVBQUU7QUFBRSxLQUFHLFVBQVE7QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxNQUFJLEtBQUcsRUFBQyxHQUFHLEtBQUcsRUFBRyxHQUFDLEtBQUcsY0FBYyxHQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLENBQUMsR0FBRSxLQUFLLE9BQUssVUFBUyxLQUFLLE9BQUssT0FBTyxDQUFDLEVBQUUsUUFBTTtBQUFBLElBQUU7QUFBQSxJQUFDLFdBQVU7QUFBQyxhQUFNLENBQUMsS0FBSyxLQUFLLFFBQU8sT0FBTyxLQUFLLEtBQUssR0FBRSxLQUFLLE1BQUssS0FBSyxLQUFLLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFFLEtBQUcsZUFBZSxFQUFFO0FBQUUsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEVBQUMsR0FBRyxLQUFHLEVBQUcsR0FBQyxLQUFHLGNBQWMsR0FBRTtBQUFBLElBQUMsWUFBWSxHQUFFO0FBQUMsWUFBTSxDQUFDLEdBQUUsS0FBSyxPQUFLO0FBQUEsSUFBVTtBQUFBLEVBQUM7QUFBRSxLQUFHLGVBQWUsRUFBRTtBQUFFLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxLQUFJLEtBQUcsRUFBQyxHQUFHLEtBQUcsY0FBYyxHQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLENBQUMsR0FBRSxLQUFLLE9BQUssU0FBUSxLQUFLLFlBQVU7QUFBQSxJQUFFO0FBQUEsRUFBQztBQUFFLEtBQUcsZUFBZSxFQUFFO0FBQUUsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEVBQUcsR0FBQyxLQUFHLEtBQUksS0FBRyxjQUFjLEdBQUU7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQU0sQ0FBQyxHQUFFLEtBQUssT0FBSztBQUFBLElBQVE7QUFBQSxJQUFDLFdBQVU7QUFBQyxVQUFJLElBQUUsS0FBSyxTQUFPLEtBQUssS0FBSyxRQUFNO0FBQUcsYUFBTSxDQUFDLEtBQUssS0FBSyxRQUFPLEdBQUUsS0FBSyxRQUFNLElBQUcsR0FBRSxLQUFLLEtBQUssS0FBSyxFQUFFLEtBQUssRUFBRTtBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUUsS0FBRyxlQUFlLEVBQUU7QUFBRSxLQUFHLFVBQVE7QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUUsQ0FBQyxJQUFHLE9BQUs7QUFBYyxNQUFJLEtBQUcsRUFBQyxHQUFHLEtBQUcsRUFBRyxHQUFDLEtBQUcsY0FBYyxHQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLENBQUMsR0FBRSxLQUFLLE9BQUs7QUFBQSxJQUFNO0FBQUEsRUFBQztBQUFFLEtBQUcsZUFBZSxFQUFFO0FBQUUsS0FBRyxVQUFRO0FBQUUsQ0FBQztBQUFFLElBQUksS0FBRyxFQUFFLENBQUMsSUFBRyxPQUFLO0FBQWMsTUFBSSxLQUFHLEVBQUMsR0FBRyxLQUFHLEVBQUcsR0FBQyxLQUFHLGNBQWMsR0FBRTtBQUFBLElBQUMsWUFBWSxHQUFFO0FBQUMsWUFBTSxDQUFDLEdBQUUsS0FBSyxPQUFLO0FBQUEsSUFBZTtBQUFBLEVBQUM7QUFBRSxLQUFHLGVBQWUsRUFBRTtBQUFFLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxjQUFjLE1BQUs7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQU0sQ0FBQyxHQUFFLEtBQUssT0FBSyxLQUFLLFlBQVksTUFBSyxLQUFLLFVBQVEsS0FBRyx1Q0FBc0MsT0FBTyxNQUFNLHFCQUFtQixhQUFXLE1BQU0sa0JBQWtCLE1BQUssS0FBSyxXQUFXLElBQUUsS0FBSyxRQUFNLElBQUksTUFBTSxDQUFDLEVBQUU7QUFBQSxJQUFLO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRywyQkFBMEIsS0FBRyxxREFBb0QsS0FBRyxpREFBZ0QsS0FBRyxjQUFhLEtBQUcsaUJBQWdCLEtBQUcsR0FBSTtBQUFDLEtBQUcsVUFBUSxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUUsS0FBRyxDQUFBO0FBQU0sUUFBQyxJQUFFLENBQUUsR0FBQyxJQUFFLEVBQUUsUUFBTyxHQUFHLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLE1BQUssR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUksR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFFLGFBQVMsRUFBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsYUFBYSxJQUFFLENBQUMsWUFBWSxDQUFDO0FBQUcsWUFBTSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQUM7QUFBOEYsV0FBSyxJQUFFLEtBQUc7QUFBQyxjQUFPLElBQUUsRUFBRSxXQUFXLENBQUMsR0FBRSxNQUFJLE9BQUssSUFBRSxHQUFFLEtBQUcsSUFBRyxHQUFDO0FBQUEsUUFBRSxLQUFLO0FBQUEsUUFBRyxLQUFLO0FBQUEsUUFBRyxLQUFLO0FBQUEsUUFBRSxLQUFLO0FBQUEsUUFBRyxLQUFLO0FBQUcsY0FBRTtBQUFFO0FBQUcsaUJBQUcsR0FBRSxJQUFFLEVBQUUsV0FBVyxDQUFDLEdBQUUsTUFBSSxPQUFLLElBQUUsR0FBRSxLQUFHO0FBQUEsaUJBQVMsTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLEtBQUcsTUFBSSxNQUFJLE1BQUk7QUFBSSxZQUFFLEtBQUssQ0FBQyxTQUFRLEVBQUUsTUFBTSxHQUFFLENBQUMsR0FBRSxHQUFFLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFLElBQUU7QUFBRTtBQUFBLFFBQU0sS0FBSztBQUFHLGNBQUUsSUFBRSxHQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVEsRUFBRSxNQUFNLEdBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsSUFBRTtBQUFFO0FBQUEsUUFBTSxLQUFLO0FBQUcsY0FBRSxJQUFFLEdBQUUsRUFBRSxLQUFLLENBQUMsU0FBUSxFQUFFLE1BQU0sR0FBRSxDQUFDLEdBQUUsR0FBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxJQUFFO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBSSxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBSSxZQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxlQUFJLElBQUUsQ0FBQyxLQUFHLE1BQUksS0FBRyxFQUFFLFNBQU8sS0FBRyxFQUFFLEVBQUUsU0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFJLFVBQVEsRUFBRSxFQUFFLFNBQU8sQ0FBQyxFQUFFLENBQUMsTUFBSSxPQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUksS0FBSSxHQUFFLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxDQUFDLENBQUM7QUFBRTtBQUFBLFFBQU0sS0FBSztBQUFHLGVBQUksSUFBRSxLQUFHLElBQUUsR0FBRSxFQUFFLEtBQUssQ0FBQyxLQUFJLEtBQUksR0FBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBQSxRQUFHLEtBQUs7QUFBRyxjQUFFLE1BQUksS0FBRyxNQUFJLEtBQUksSUFBRTtBQUFFO0FBQUcsaUJBQUksSUFBRSxPQUFHLElBQUUsRUFBRSxRQUFRLEdBQUUsSUFBRSxDQUFDLEdBQUUsTUFBSSxNQUFJLEVBQUUsT0FBUyxHQUFFLElBQUUsR0FBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksS0FBSSxNQUFHLEdBQUUsSUFBRSxDQUFDO0FBQUEsaUJBQVE7QUFBRyxZQUFFLEtBQUssQ0FBQyxVQUFTLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUU7QUFBRTtBQUFBLFFBQU0sS0FBSztBQUFHLGFBQUcsWUFBVSxJQUFFLEdBQUUsR0FBRyxLQUFLLENBQUMsR0FBRSxHQUFHLGNBQVksSUFBRSxJQUFFLEVBQUUsU0FBTyxJQUFFLElBQUUsR0FBRyxZQUFVLEdBQUUsRUFBRSxLQUFLLENBQUMsVUFBUyxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUUsR0FBRSxHQUFFLElBQUUsR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFO0FBQUU7QUFBQSxRQUFNLEtBQUs7QUFBRyxjQUFFLEdBQUUsSUFBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLEdBQTJELEVBQUUsS0FBSyxDQUFDLFFBQU8sRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRSxJQUFFLEdBQUUsR0FBRSxJQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRTtBQUFFO0FBQUEsUUFBTSxLQUFLO0FBQUEsUUFBRyxLQUFLO0FBQUEsUUFBRyxLQUFLO0FBQUcsY0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sSUFBRSxHQUFFLElBQUUsQ0FBQztBQUFRLFlBQUUsTUFBTSxJQUFFLEdBQUUsQ0FBQztBQUFFLGNBQUcsTUFBSSxNQUFJLEVBQUUsV0FBVyxDQUFDLE1BQUksSUFBRztBQUFDLGlCQUFJLEVBQUUsS0FBSyxDQUFDLFFBQU8sRUFBRSxNQUFNLEdBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsSUFBRTtBQUFFO0FBQUEsVUFBSztBQUFDLFlBQUUsS0FBSyxDQUFDLFlBQVcsRUFBRSxNQUFNLEdBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxHQUFFLEdBQUUsSUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsSUFBRTtBQUFFO0FBQUEsUUFBTTtBQUFRLGNBQUcsTUFBSSxPQUFLLEVBQUUsV0FBVyxJQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsU0FBTyxDQUFDLEtBQUcsRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLEtBQUk7QUFBQyxnQkFBRyxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksR0FBRyxLQUFFLEVBQUUsUUFBUSxNQUFLLElBQUUsQ0FBQyxJQUFFLEdBQUUsTUFBSSxLQUFHLEVBQUUsU0FBYztBQUFBLGlCQUFNO0FBQUMsa0JB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TSxDQUFDLEVBQUU7QUFBQSxJQUFLO0FBQUEsRUFBQztBQUFFLEtBQUcsVUFBUTtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsRUFBRSxDQUFDLElBQUcsT0FBSztBQUFjLE1BQUksS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFFLEdBQUcsS0FBRyxHQUFFLEdBQUcsS0FBRyxNQUFLLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBSSxHQUFDLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsR0FBRSxHQUFHLEtBQUcsTUFBSyxLQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUUsR0FBRyxLQUFHLEdBQUU7QUFBRyxXQUFTLEdBQUcsR0FBRTtBQUFDLFdBQU8sRUFBRSxLQUFLLENBQUMsR0FBRSxNQUFJLElBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQyxLQUFHLFVBQVEsTUFBSztBQUFBLElBQUMsWUFBWSxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBQyxPQUFNLE1BQUU7QUFBRSxXQUFLLFFBQU0sQ0FBRSxHQUFDLEtBQUssUUFBTSxHQUFFLEtBQUssVUFBUSxPQUFPLE9BQU8sQ0FBRSxHQUFDLEdBQUUsQ0FBQyxHQUFFLEtBQUssV0FBUyxHQUFFLEtBQUssYUFBVyxHQUFFLEtBQUssT0FBSyxJQUFJO0FBQUcsVUFBSSxJQUFFLElBQUk7QUFBRyxXQUFLLEtBQUssT0FBTyxDQUFDLEdBQUUsS0FBSyxVQUFRLEdBQUUsS0FBSyxTQUFPLEdBQUcsR0FBRSxLQUFLLE9BQU87QUFBQSxJQUFDO0FBQUEsSUFBQyxRQUFPO0FBQUMsYUFBTyxLQUFLLEtBQUk7QUFBQSxJQUFFO0FBQUEsSUFBQyxRQUFPO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBVSxXQUFLLFFBQVEsSUFBSSxHQUFHLEVBQUMsT0FBTSxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxHQUFFLEtBQUksRUFBQyxNQUFLLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBRSxDQUFDLEVBQUMsRUFBQyxHQUFFLGFBQVksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUUsS0FBSztBQUFBLElBQVU7QUFBQSxJQUFDLFFBQU87QUFBQyxVQUFJLElBQUUsS0FBSztBQUFVLFdBQUssUUFBUSxJQUFJLEdBQUcsRUFBQyxPQUFNLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBQyxPQUFNLEVBQUMsTUFBSyxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUUsQ0FBQyxFQUFDLEdBQUUsS0FBSSxFQUFDLE1BQUssRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxFQUFDLEdBQUUsYUFBWSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRSxLQUFLO0FBQUEsSUFBVTtBQUFBLElBQUMsVUFBUztBQUFDLFVBQUksSUFBRSxPQUFHLElBQUUsS0FBSyxVQUFVLENBQUMsRUFBRSxRQUFRLGNBQWEsRUFBRSxHQUFFO0FBQUUsV0FBSyxRQUFRLFNBQU8sRUFBRSxXQUFXLElBQUksTUFBSSxJQUFFLEVBQUUsVUFBVSxDQUFDLEdBQUUsSUFBRSxPQUFJLElBQUUsSUFBSSxHQUFHLEVBQUMsT0FBTSxHQUFFLFFBQU8sR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEtBQUssVUFBVSxDQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsRUFBQyxFQUFDLEdBQUUsYUFBWSxLQUFLLFVBQVUsQ0FBQyxFQUFDLENBQUMsR0FBRSxLQUFLLFFBQVEsQ0FBQyxHQUFFLEtBQUs7QUFBQSxJQUFVO0FBQUEsSUFBQyxNQUFNLEdBQUUsR0FBRTtBQUFDLFlBQU0sSUFBSSxHQUFHLElBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxPQUFNO0FBQUMsYUFBSyxLQUFLLFdBQVMsS0FBSyxPQUFPLFNBQVEsTUFBSyxZQUFXO0FBQUcsYUFBTSxDQUFDLEtBQUssUUFBUSxRQUFNLEtBQUssU0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFRLEtBQUssU0FBTyxLQUFLLFdBQVMsS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFPLEtBQUssU0FBUSxLQUFLLFNBQU8sSUFBRyxLQUFLO0FBQUEsSUFBSTtBQUFBLElBQUMsV0FBVTtBQUFDLFVBQUksSUFBRSxLQUFLLFVBQVUsQ0FBQyxHQUFFO0FBQUUsVUFBRyxNQUFJLE9BQUssTUFBSSxLQUFJO0FBQUMsWUFBRyxLQUFLLFFBQVEsU0FBTyxLQUFLLFdBQVMsTUFBSSxLQUFLLFFBQVEsU0FBTyxVQUFRLEtBQUssUUFBUSxVQUFRLFNBQU8sS0FBSyxVQUFVLENBQUMsTUFBSSxXQUFTLEtBQUssVUFBVSxDQUFDLE1BQUksTUFBSSxLQUFLLE1BQU0sZ0JBQWUsS0FBSyxTQUFTLElBQUUsS0FBSyxVQUFVLENBQUMsTUFBSSxXQUFTLEtBQUssVUFBVSxDQUFDLE1BQUksU0FBTyxLQUFLLE1BQU0sZ0JBQWUsS0FBSyxTQUFTLElBQUUsS0FBSyxVQUFVLENBQUMsTUFBSSxVQUFRLEtBQUssUUFBUSxLQUFLLFNBQU8sY0FBWSxLQUFLLFFBQVEsS0FBSyxVQUFRLE9BQUssS0FBSyxNQUFNLGdCQUFlLEtBQUssU0FBUyxLQUFHLEtBQUssVUFBVSxDQUFDLE1BQUksV0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFJLGNBQVksS0FBSyxVQUFVLENBQUMsTUFBSSxlQUFhLEtBQUssTUFBTSxnQkFBZSxLQUFLLFNBQVMsSUFBRyxLQUFLLFFBQVEsT0FBTTtBQUFDLGVBQUksQ0FBQyxLQUFLLFFBQVEsTUFBTSxVQUFRLEtBQUssUUFBUSxRQUFNLEtBQUssUUFBUSxLQUFLLFNBQU8sZUFBYSxLQUFLLFVBQVUsQ0FBQyxNQUFJLE9BQU8sUUFBTyxLQUFLLEtBQU07QUFBQSxRQUFBLFdBQVMsS0FBSyxVQUFVLENBQUMsTUFBSSxPQUFPLFFBQU8sS0FBSztNQUFNO0FBQUMsYUFBTyxJQUFFLElBQUksR0FBRyxFQUFDLE9BQU0sS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEtBQUssVUFBVSxDQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsRUFBQyxFQUFDLEdBQUUsYUFBWSxLQUFLLFVBQVUsQ0FBQyxFQUFDLENBQUMsR0FBRSxLQUFLLFlBQVcsS0FBSyxRQUFRLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxjQUFhO0FBQUMsY0FBTyxLQUFLLFVBQVUsQ0FBQztRQUFHLEtBQUk7QUFBUSxlQUFLLE1BQUs7QUFBRztBQUFBLFFBQU0sS0FBSTtBQUFRLGVBQUssTUFBSztBQUFHO0FBQUEsUUFBTSxLQUFJO0FBQVEsZUFBSyxNQUFPO0FBQUM7QUFBQSxRQUFNLEtBQUk7QUFBVSxlQUFLLFFBQVM7QUFBQztBQUFBLFFBQU0sS0FBSTtBQUFJLGVBQUssVUFBVztBQUFDO0FBQUEsUUFBTSxLQUFJO0FBQUksZUFBSztBQUFhO0FBQUEsUUFBTSxLQUFJO0FBQUEsUUFBUyxLQUFJO0FBQU8sZUFBSyxLQUFJO0FBQUc7QUFBQSxRQUFNLEtBQUk7QUFBVyxlQUFLLFNBQVU7QUFBQztBQUFBLFFBQU0sS0FBSTtBQUFTLGVBQUssT0FBUTtBQUFDO0FBQUEsUUFBTSxLQUFJO0FBQWUsZUFBSyxhQUFjO0FBQUM7QUFBQSxRQUFNO0FBQVEsZUFBSyxLQUFNO0FBQUM7QUFBQSxNQUFLO0FBQUEsSUFBQztBQUFBLElBQUMsWUFBVztBQUFDLFVBQUksSUFBRSxHQUFFLElBQUUsS0FBSyxXQUFTLEdBQUUsSUFBRSxLQUFLLFdBQVU7QUFBRSxhQUFLLElBQUUsS0FBSyxPQUFPLFVBQVEsS0FBRztBQUFDLFlBQUksSUFBRSxLQUFLLE9BQU8sQ0FBQztBQUFFLFVBQUUsQ0FBQyxNQUFJLE9BQUssS0FBSSxFQUFFLENBQUMsTUFBSSxPQUFLLEtBQUk7QUFBQSxNQUFHO0FBQUMsVUFBRyxLQUFHLEtBQUssTUFBTSxnQ0FBK0IsQ0FBQyxHQUFFLElBQUUsS0FBSyxRQUFRLE1BQUssS0FBRyxFQUFFLFNBQU8sVUFBUSxFQUFFLGFBQVcsTUFBSSxFQUFFLGFBQVcsR0FBRSxLQUFLLFVBQVEsSUFBRyxLQUFLLFFBQVEsY0FBYSxLQUFLLFFBQVEsSUFBSSxHQUFHLEVBQUMsT0FBTSxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxHQUFFLEtBQUksRUFBQyxNQUFLLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBRSxDQUFDLEVBQUMsRUFBQyxHQUFFLGFBQVksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUUsS0FBSyxZQUFXLEtBQUssUUFBUSxTQUFPLFVBQVEsS0FBSyxRQUFRLGNBQVksS0FBSyxRQUFRLFVBQVEsU0FBTyxLQUFLLFVBQVUsQ0FBQyxNQUFJLFlBQVUsS0FBSyxVQUFVLENBQUMsTUFBSSxPQUFLLENBQUMsS0FBSyxRQUFRLE9BQU07QUFBQyxZQUFJLElBQUUsS0FBSyxXQUFVLElBQUUsS0FBSyxVQUFVLENBQUMsR0FBRSxJQUFFLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsRUFBQztBQUFFLGVBQUssS0FBRyxFQUFFLENBQUMsTUFBSSxPQUFLLEtBQUssUUFBUSxhQUFZLE1BQUssWUFBVyxLQUFHLEtBQUssVUFBVSxDQUFDLEdBQUUsSUFBRSxLQUFLO0FBQVUsYUFBSyxhQUFXLEtBQUssT0FBTyxTQUFPLE1BQUksS0FBSyxZQUFXLEtBQUssUUFBUSxJQUFJLEdBQUcsRUFBQyxPQUFNLEdBQUUsUUFBTyxFQUFDLE9BQU0sR0FBRSxLQUFJLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsRUFBQyxFQUFDLEdBQUUsYUFBWSxLQUFLLFVBQVUsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUFBLE1BQUU7QUFBQSxJQUFDO0FBQUEsSUFBQyxhQUFZO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBVSxXQUFLLFFBQVEsSUFBSSxHQUFHLEVBQUMsT0FBTSxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxHQUFFLEtBQUksRUFBQyxNQUFLLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBRSxDQUFDLEVBQUMsRUFBQyxHQUFFLGFBQVksRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUUsS0FBSyxZQUFXLEVBQUUsS0FBSyxZQUFVLEtBQUssT0FBTyxTQUFPLEtBQUcsQ0FBQyxLQUFLLFFBQVEsZ0JBQWMsS0FBSyxRQUFRLGNBQWEsS0FBSyxRQUFRLGFBQVcsS0FBRyxLQUFLLE1BQU0sZ0NBQStCLENBQUMsR0FBRSxDQUFDLEtBQUssUUFBUSxjQUFZLEtBQUssTUFBTSxXQUFTLEtBQUssVUFBUSxLQUFLLE1BQU0sSUFBRztBQUFBLElBQUk7QUFBQSxJQUFDLFFBQU87QUFBQyxVQUFJLElBQUUsS0FBSztBQUFVLFdBQUssYUFBVyxLQUFLLE9BQU8sU0FBTyxLQUFHLEtBQUssVUFBVSxDQUFDLE1BQUksT0FBSyxLQUFLLFVBQVUsQ0FBQyxNQUFJLE9BQUssS0FBSyxRQUFRLEtBQUssS0FBSyxTQUFPLEVBQUUsQ0FBQyxHQUFFLEtBQUssZUFBYSxLQUFLLFNBQU8sRUFBRSxDQUFDLEdBQUUsS0FBSztBQUFBLElBQVc7QUFBQSxJQUFDLGVBQWM7QUFBQyxVQUFJLElBQUUsS0FBSztBQUFVLFdBQUssUUFBUSxJQUFJLEdBQUcsRUFBQyxPQUFNLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBQyxPQUFNLEVBQUMsTUFBSyxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUUsQ0FBQyxFQUFDLEdBQUUsS0FBSSxFQUFDLE1BQUssRUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLENBQUMsRUFBQyxFQUFDLEdBQUUsYUFBWSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRSxLQUFLO0FBQUEsSUFBVTtBQUFBLElBQUMsWUFBVztBQUFDLFVBQUksSUFBRSxLQUFLLFdBQVUsSUFBRSxLQUFLLFVBQVUsQ0FBQyxHQUFFLElBQUUsb0RBQW1ELElBQUUsZ0NBQStCLEdBQUU7QUFBRSxVQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxRQUFLLEtBQUcsRUFBRSxDQUFDLE1BQUksVUFBUTtBQUFDLGFBQUs7QUFBVyxZQUFJLElBQUUsS0FBSyxVQUFVLENBQUM7QUFBRSxhQUFHLEdBQUUsSUFBRSxLQUFLO0FBQUEsTUFBUztBQUFDLFVBQUUsR0FBRyxHQUFFLEdBQUcsR0FBRSxJQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUUsTUFBSTtBQUFDLFlBQUksSUFBRSxFQUFFLElBQUUsQ0FBQyxLQUFHLEVBQUUsUUFBTyxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUMsR0FBRTtBQUFFLFlBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUUsSUFBSSxHQUFHLEVBQUMsT0FBTSxFQUFFLE1BQU0sQ0FBQyxHQUFFLFFBQU8sRUFBQyxPQUFNLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsSUFBRSxFQUFDLEdBQUUsS0FBSSxFQUFDLE1BQUssS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEtBQUssVUFBVSxDQUFDLEtBQUcsSUFBRSxHQUFFLEVBQUMsR0FBRSxhQUFZLEtBQUssVUFBVSxDQUFDLElBQUUsRUFBRSxDQUFDLEVBQUMsQ0FBQztBQUFBLGlCQUFVLEVBQUUsS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDLEdBQUU7QUFBQyxjQUFJLElBQUUsRUFBRSxRQUFRLEdBQUUsRUFBRTtBQUFFLGNBQUUsSUFBSSxHQUFHLEVBQUMsT0FBTSxFQUFFLFFBQVEsR0FBRSxFQUFFLEdBQUUsUUFBTyxFQUFDLE9BQU0sRUFBQyxNQUFLLEtBQUssVUFBVSxDQUFDLEdBQUUsUUFBTyxLQUFLLFVBQVUsQ0FBQyxJQUFFLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxLQUFLLFVBQVUsQ0FBQyxHQUFFLFFBQU8sS0FBSyxVQUFVLENBQUMsS0FBRyxJQUFFLEdBQUUsRUFBQyxHQUFFLGFBQVksS0FBSyxVQUFVLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRSxNQUFLLEVBQUMsQ0FBQztBQUFBLFFBQUMsTUFBTSxLQUFFLEtBQUksS0FBRyxFQUFFLENBQUMsTUFBSSxNQUFJLEtBQUcsSUFBSSxFQUFDLE9BQU0sR0FBRSxRQUFPLEVBQUMsT0FBTSxFQUFDLE1BQUssS0FBSyxVQUFVLENBQUMsR0FBRSxRQUFPLEtBQUssVUFBVSxDQUFDLElBQUUsRUFBQyxHQUFFLEtBQUksRUFBQyxNQUFLLEtBQUssVUFBVSxDQUFDLEdBQUUsUUFBTyxLQUFLLFVBQVUsQ0FBQyxLQUFHLElBQUUsR0FBRSxFQUFDLEdBQUUsYUFBWSxLQUFLLFVBQVUsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUMsR0FBRSxFQUFFLFNBQU8sVUFBUSxFQUFFLFFBQU0sU0FBUyxLQUFLLENBQUMsR0FBRSxFQUFFLFVBQVEsd0RBQXdELEtBQUssQ0FBQyxLQUFHLEtBQUssTUFBTSxLQUFLLEtBQUssT0FBTztBQUFFLGFBQUssUUFBUSxDQUFDO0FBQUEsTUFBQyxDQUFDLEdBQUUsS0FBSztBQUFBLElBQVU7QUFBQSxJQUFDLFNBQVE7QUFBQyxVQUFJLElBQUUsS0FBSyxXQUFVLElBQUUsS0FBSyxVQUFVLENBQUMsR0FBRSxJQUFFLFlBQVcsSUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLElBQUUsSUFBRztBQUFFLFlBQUksSUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsTUFBTSxHQUFFLEVBQUUsU0FBTyxDQUFDLElBQUcsSUFBRSxJQUFJLEdBQUcsRUFBQyxPQUFNLEdBQUUsUUFBTyxFQUFDLE9BQU0sRUFBQyxNQUFLLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBRSxDQUFDLEVBQUMsR0FBRSxLQUFJLEVBQUMsTUFBSyxFQUFFLENBQUMsR0FBRSxRQUFPLEVBQUUsQ0FBQyxFQUFDLEVBQUMsR0FBRSxhQUFZLEVBQUUsQ0FBQyxHQUFFLFFBQU8sRUFBQyxDQUFDLEdBQUUsRUFBRSxLQUFLLFFBQU0sR0FBRSxLQUFLLFFBQVEsQ0FBQyxHQUFFLEtBQUs7QUFBQSxJQUFVO0FBQUEsSUFBQyxPQUFNO0FBQUMsYUFBTyxLQUFLLFVBQVM7QUFBQSxJQUFFO0FBQUEsSUFBQyxRQUFRLEdBQUU7QUFBQyxhQUFPLEtBQUssV0FBUyxFQUFFLEtBQUssVUFBUSxLQUFLLFFBQU8sS0FBSyxTQUFPLEtBQUksS0FBSyxRQUFRLE9BQU8sQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLElBQUksWUFBVztBQUFDLGFBQU8sS0FBSyxPQUFPLEtBQUssUUFBUTtBQUFBLElBQUM7QUFBQSxJQUFDLElBQUksWUFBVztBQUFDLGFBQU8sS0FBSyxPQUFPLEtBQUssV0FBUyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsSUFBSSxZQUFXO0FBQUMsYUFBTyxLQUFLLE9BQU8sS0FBSyxXQUFTLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUc7QUFBRyxHQUFHLElBQUcsRUFBQyxXQUFVLE1BQUksSUFBRyxTQUFRLE1BQUksSUFBRyxTQUFRLE1BQUksSUFBRyxVQUFTLE1BQUksR0FBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLENBQUMsR0FBRSxHQUFFLEdBQUUsTUFBSTtBQUFDLE1BQUcsRUFBRSxLQUFHLEtBQUcsTUFBTSxRQUFPLEVBQUUsYUFBVyxFQUFFLFdBQVcsR0FBRSxDQUFDLElBQUUsRUFBRSxTQUFPLEVBQUUsUUFBUSxHQUFFLENBQUMsSUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUFDLEdBQUUsSUFBRTtBQUFHLElB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RSxFQUFFLENBQUMsR0FBRSxFQUFFLEVBQUMsR0FBRyxHQUFFLFVBQVMsR0FBRSxnQkFBZSxFQUFDLENBQUM7QUFBQSxNQUFDO0FBQUEsTUFBQyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUcsZUFBTyxFQUFFLEVBQUMsR0FBRyxHQUFFLFVBQVMsRUFBRSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQUEsTUFBRSxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRyxLQUFLO0FBQUEsTUFBRSxLQUFLO0FBQUcsZUFBTyxFQUFFLENBQUM7QUFBQSxNQUFFO0FBQVEsY0FBTSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxTQUFPLEtBQUcsQ0FBQyxFQUFFLE9BQUssRUFBRSxPQUFLLEtBQUcsTUFBSSxFQUFFLFNBQU8sS0FBRyxFQUFFLGVBQWE7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUUsRUFBRTtBQUFDO0FBQUksSUFBQyxLQUFHLE1BQUk7QUFBRSxHQUFPLEtBQUc7QUFBUyxTQUFTLEVBQUUsR0FBRTtBQUFDLFNBQWEsRUFBQyxNQUFLLElBQUcsVUFBUyxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBYSxFQUFDLE1BQUssSUFBRyxVQUFTLEdBQUUsR0FBRSxFQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsR0FBRSxJQUFFLENBQUUsR0FBQztBQUFDLFNBQWEsR0FBRyxFQUFFLGNBQWlCLEdBQUUsRUFBQyxNQUFLLElBQUcsSUFBRyxFQUFFLElBQUcsVUFBUyxHQUFFLE9BQU0sQ0FBQyxDQUFDLEVBQUUsYUFBWSxnQkFBZSxFQUFFLGVBQWM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLEVBQUMsTUFBSyxPQUFNLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsSUFBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQWEsRUFBQyxNQUFLLElBQUcsT0FBTSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxJQUFFLElBQUcsSUFBRSxDQUFFLEdBQUM7QUFBQyxTQUEyQixFQUFDLE1BQUssSUFBRyxlQUFjLEdBQUUsY0FBYSxHQUFFLFNBQVEsRUFBRSxRQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQWEsRUFBQyxNQUFLLElBQUcsVUFBUyxFQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUcsRUFBQyxNQUFLLEdBQUU7QUFBRSxJQUFJLEtBQUcsRUFBQyxNQUFLLEdBQUUsTUFBSyxLQUFFO0FBQUUsSUFBSSxJQUFFLEVBQUMsTUFBSyxFQUFDLEdBQUUsSUFBRSxFQUFDLE1BQUssR0FBRSxNQUFLLEtBQUUsR0FBRSxJQUFFLENBQUMsSUFBRyxFQUFFO0FBQUUsU0FBUyxFQUFFLEdBQUUsR0FBRTtBQUFhLE1BQUksSUFBRSxDQUFBO0FBQUcsV0FBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBSSxPQUFJLEtBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRSxTQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sTUFBTSxRQUFRLENBQUMsS0FBRyxFQUFFLFNBQU87QUFBQztBQUFDLElBQUksS0FBRztBQUFHLElBQUksS0FBRyxJQUFJLE1BQU0sTUFBSTtBQUFFLEdBQUMsRUFBQyxLQUFJLE1BQUksR0FBRSxDQUFDLEdBQUUsS0FBRztBQUFHLElBQUksS0FBRyxLQUFJLEtBQUc7QUFBSSxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLE1BQUksUUFBSSxNQUFJLEtBQUcsS0FBRyxJQUFHLElBQUUsTUFBSSxLQUFHLEtBQUcsSUFBRyxJQUFF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QUksSUFBRTtBQUFFLFdBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxPQUFLLEdBQUUsRUFBRSxFQUFFLEtBQUUsRUFBRSxRQUFRO0FBQUEsR0FDeHFPLENBQUMsSUFBRTtBQUFFLFNBQU8sSUFBRSxFQUFFO0FBQU07QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU0sQ0FBQyxHQUFFLEdBQUUsTUFBSTtBQUFDLFFBQUksSUFBRSxDQUFDLEVBQUUsS0FBRyxRQUFNLEVBQUU7QUFBVyxRQUFHLE1BQUksTUFBRyxRQUFNO0FBQUcsUUFBRyxFQUFDLFFBQU8sRUFBQyxJQUFFLEdBQUUsSUFBRTtBQUFFLFdBQUssS0FBRyxLQUFHLElBQUUsS0FBRztBQUFDLFVBQUksSUFBRSxFQUFFLE9BQU8sQ0FBQztBQUFFLFVBQUcsYUFBYSxRQUFPO0FBQUMsWUFBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsUUFBTztBQUFBLE1BQUMsV0FBUyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsUUFBTztBQUFFLFVBQUUsTUFBSTtBQUFBLElBQUc7QUFBQyxXQUFPLE1BQUksTUFBSSxNQUFJLElBQUUsSUFBRTtBQUFBLEVBQUU7QUFBQztBQUFJLElBQWMsS0FBRyxHQUFHLElBQUksR0FBRSxLQUFHLEdBQUcsTUFBTSxHQUFFLEtBQUcsR0FBRyxVQUFVO0FBQUUsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksR0FBRSxHQUFFO0FBQUUsTUFBRyxTQUFRLEtBQUcsSUFBRSxFQUFFLFdBQVMsT0FBSyxTQUFPLEVBQUUsVUFBUSxPQUFLLFNBQU8sRUFBRSxXQUFTLFNBQVMsUUFBTyxFQUFFLE9BQU8sTUFBTTtBQUFPLE1BQUcsT0FBTyxFQUFFLGVBQWEsU0FBUyxRQUFPLEVBQUU7QUFBWSxPQUFJLElBQUUsRUFBRSxXQUFTLFFBQU0sRUFBRSxNQUFNLFFBQU8sR0FBRyxFQUFFLE9BQU8sT0FBTSxDQUFDO0FBQUUsUUFBTSxPQUFPLE9BQU8sSUFBSSxNQUFNLHNCQUFzQixHQUFFLEVBQUMsTUFBSyxFQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLEdBQUU7QUFBRSxNQUFHLEVBQUUsU0FBTyxpQkFBZSxFQUFFLE9BQU8sUUFBTyxHQUFHLEdBQUUsRUFBRSxPQUFPLFdBQVc7QUFBRSxNQUFHLFNBQVEsS0FBRyxJQUFFLEVBQUUsV0FBUyxPQUFLLFNBQU8sRUFBRSxRQUFNLE9BQUssU0FBTyxFQUFFLFdBQVMsU0FBUyxRQUFPLEVBQUUsT0FBTyxJQUFJO0FBQU8sTUFBRyxFQUFFLFFBQU87QUFBQyxRQUFHLEVBQUUsT0FBTyxJQUFJLFFBQU8sR0FBRyxFQUFFLE9BQU8sS0FBSSxDQUFDO0FBQUUsUUFBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQU8sR0FBRyxFQUFFLE9BQUcsRUFBRSxPQUFNLEVBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFDLFNBQU87QUFBSTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxJQUFFLFdBQVMsRUFBRSxPQUFPLGNBQVksR0FBRyxHQUFFLENBQUMsR0FBRSxFQUFFLE9BQU8sWUFBVSxHQUFHLEdBQUUsQ0FBQztBQUFHLFdBQVEsS0FBSyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUksWUFBVSxDQUFDLEtBQUcsT0FBTyxLQUFHLGFBQVcsRUFBRSxTQUFPLGdCQUFjLEVBQUUsU0FBTyxrQkFBZ0IsR0FBRyxHQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUUsUUFBTSxFQUFFLEtBQUssSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFBLEVBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLElBQUUsV0FBUyxFQUFFLE9BQU8sY0FBWSxHQUFHLEdBQUUsQ0FBQyxJQUFFLEdBQUUsRUFBRSxPQUFPLFlBQVUsR0FBRyxHQUFFLENBQUMsSUFBRTtBQUFHLFdBQVEsS0FBSyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUksWUFBVSxDQUFDLEtBQUcsT0FBTyxLQUFH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QUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFBRSxRQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUUsQ0FBQyxHQUFHLElBQUcsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFFLElBQUUsQ0FBQyxDQUFDLEdBQUUsQ0FBQztBQUFBLElBQUMsTUFBTSxHQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUU7QUFBQSxFQUFDO0FBQUMsU0FBTSxFQUFDLFVBQVMsR0FBRSxTQUFRLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxFQUFDLFVBQVMsSUFBRSxJQUFHLFNBQVEsSUFBRSxDQUFFLEVBQUEsR0FBRTtBQUFDLE1BQUksSUFBRTtBQUFBLEdBQzliLElBQUUsT0FBTSxJQUFFLE1BQUssSUFBRSxPQUFNLElBQUUsT0FBTyxLQUFLLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBUSxPQUFHLEdBQUcsR0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFBRSxNQUFHLENBQUMsR0FBRTtBQUFDLFFBQUcsRUFBRSxXQUFTLEVBQUUsUUFBTTtBQUFHLFFBQUcsRUFBRSxXQUFTLEtBQUcsQ0FBQyxNQUFNLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFFLGFBQU0sR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUFBLElBQUU7QUFBQSxFQUFDO0FBQUMsTUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxPQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFFO0FBQUUsU0FBTyxJQUFFLEtBQUcsSUFBRSxJQUFFLE9BQUssS0FBRyxFQUFFLFNBQU8sSUFBRSxJQUFFLElBQUUsTUFBSSxJQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTSxDQUFDLEdBQUcsSUFBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUUsSUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBTSxDQUFBO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsQ0FBQyxFQUFFLFdBQVcsSUFBSSxFQUFFLFFBQU07QUFBRyxNQUFJLElBQUUsRUFBRSxRQUFRO0FBQUEsQ0FDbGQ7QUFBRSxTQUFPLE1BQUksS0FBRyxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsQ0FBQztBQUFFLFFBQUksSUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFPLENBQUM7QUFBRyxNQUFJLElBQUUsR0FBRyxDQUFDLEdBQUUsRUFBQyxTQUFRLEdBQUUsVUFBUyxFQUFDLElBQUUsR0FBRyxDQUFDO0FBQUUsU0FBTSxFQUFDLFNBQVEsR0FBRSxNQUFLLEdBQUUsU0FBUSxHQUFFLFVBQVMsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLEVBQUMsU0FBUSxFQUFDLElBQUUsR0FBRyxDQUFDO0FBQUUsU0FBTyxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUUsVUFBVSxLQUFHLE9BQU8sVUFBVSxlQUFlLEtBQUssR0FBRSxRQUFRO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsRUFBQyxTQUFRLEdBQUUsTUFBSyxHQUFFLFNBQVEsR0FBRSxVQUFTLEVBQUMsSUFBRSxHQUFHLENBQUMsR0FBRSxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsR0FBRyxFQUFDLFNBQVEsRUFBQyxRQUFPLElBQUcsR0FBRyxFQUFDLEdBQUUsVUFBUyxFQUFFLFVBQVMsRUFBRSxDQUFDO0FBQUUsVUFBTyxJQUFFLEdBQUcsQ0FBQztBQUFBLElBQ2xkLE1BQUksS0FBRyxFQUFFLFdBQVc7QUFBQSxDQUNyQixJQUFFO0FBQUEsSUFDRDtBQUFBO0FBQUEsS0FFQztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRTtBQUFFLE1BQUcsTUFBSSxTQUFPLE1BQUksTUFBTTtBQUFPLE1BQUksSUFBRSxFQUFFLFFBQVE7QUFBQSxHQUM5RixFQUFFO0FBQUUsTUFBRyxNQUFJLEdBQUc7QUFBTyxNQUFJLElBQUUsRUFBRSxNQUFNLElBQUcsQ0FBQyxFQUFFLEtBQU0sR0FBQyxJQUFFLEVBQUUsUUFBUTtBQUFBLEVBQzVELENBQUMsSUFBRyxDQUFDLEdBQUUsSUFBRTtBQUFFLE1BQUcsTUFBSSxJQUFFLE1BQUksUUFBTSxTQUFPLFNBQVEsTUFBSSxNQUFJLE1BQUksU0FBTyxNQUFJLFdBQVMsSUFBRSxFQUFFLFFBQVE7QUFBQSxNQUN0RixDQUFDLElBQUcsTUFBSSxHQUFHO0FBQU8sTUFBSSxJQUFFLElBQUUsSUFBRSxJQUFHLElBQUUsRUFBRSxPQUFPLElBQUUsQ0FBQztBQUFFLE1BQUcsQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQU8sTUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBRSxTQUFNLEVBQUMsTUFBSyxnQkFBZSxVQUFTLEdBQUUsa0JBQWlCLEdBQUUsT0FBTSxFQUFFLE1BQU0sSUFBRSxHQUFFLENBQUMsR0FBRSxnQkFBZSxHQUFFLGNBQWEsRUFBRSxNQUFNLEVBQUcsR0FBRSxLQUFJLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsQ0FBQztBQUFFLE1BQUcsQ0FBQyxFQUFFLFFBQU0sRUFBQyxTQUFRLEVBQUM7QUFBRSxNQUFHLEVBQUMsS0FBSSxFQUFDLElBQUU7QUFBRSxTQUFNLEVBQUMsYUFBWSxHQUFFLFNBQVEsRUFBRSxPQUFHLEdBQUUsV0FBVSxHQUFHLElBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxHQUFHLENBQUMsRUFBRSxPQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsRUFBQyxhQUFZLEdBQUUsU0FBUSxFQUFDLElBQUUsR0FBRyxDQUFDO0FBQUUsVUFBTyxJQUFFLEVBQUUsTUFBSTtBQUFBO0FBQUEsSUFFeGQsTUFBSSxHQUFHLENBQUM7QUFBQztBQUFDLElBQUksS0FBRyxvQkFBSSxJQUFJLENBQUMsT0FBTSxTQUFRLFFBQU8sU0FBUSxLQUFJLE9BQU0sT0FBTSxLQUFJLGNBQWEsS0FBSSxhQUFZLEtBQUksYUFBWSxLQUFJLGFBQVksS0FBSSxRQUFPLFNBQVEsU0FBUSxVQUFTLFlBQVcsT0FBTSxRQUFPLE9BQU0sTUFBTSxDQUFDO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLEdBQUU7QUFBRSxVQUFPLEtBQUcsSUFBRSxFQUFFLGFBQWEsT0FBRyxFQUFFLFNBQU8sVUFBVSxNQUFJLE9BQUssU0FBTyxFQUFFLFNBQU8sT0FBSyxTQUFPLEVBQUUsWUFBVztBQUFFO0FBQUMsSUFBSSxLQUFHLG9CQUFJLElBQUksQ0FBQyxXQUFVLFdBQVUsU0FBUSxRQUFRLENBQUM7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxJQUFJLEVBQUUsWUFBVyxDQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSTtBQUFFLE1BQUksSUFBRSxFQUFFLGFBQWEsT0FBRyxFQUFFLFNBQU8sWUFBWTtBQUFFLFdBQVEsSUFBRSxLQUFHLE9BQUssU0FBTyxFQUFFLFNBQU8sT0FBSyxTQUFPLEVBQUUsWUFBYSxFQUFDLFNBQVMsV0FBVyxNQUFJLENBQUMsUUFBTyxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQWEsQ0FBQTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEVBQUUsU0FBUyxHQUFHLEtBQUcsRUFBRSxTQUFTLEdBQUcsS0FBRyxFQUFFLFNBQVMsR0FBRyxLQUFHLEVBQUUsV0FBVyxHQUFHLEtBQUcsRUFBRSxXQUFXLElBQUksS0FBRyxFQUFFLFdBQVcsS0FBSyxLQUFHLEVBQUUsU0FBUyxHQUFHLEtBQUcsRUFBRSxTQUFTLEdBQUcsSUFBRSxJQUFFLEVBQUUsWUFBYTtBQUFBO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFJLElBQUUsRUFBRSxhQUFhLE9BQUcsRUFBRSxTQUFPLFlBQVk7QUFBRSxXQUFRLElBQUUsS0FBRyxPQUFLLFNBQU8sRUFBRSxVQUFRLE9BQUssU0FBTyxFQUFFLFlBQWEsT0FBSTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJO0FBQUUsTUFBSSxJQUFFLEVBQUUsYUFBYSxPQUFHLEVBQUUsU0FBTyxVQUFVLEdBQUUsS0FBRyxJQUFFLEtBQUcsT0FBSyxTQUFPLEVBQUUsU0FBTyxPQUFLLFNBQU8sRUFBRTtBQUFTLFNBQU8sTUFBSSxFQUFFLFdBQVcsU0FBUyxLQUFHLEVBQUUsV0FBVyxTQUFTO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLE1BQU0sUUFBUSxDQUFDLElBQUUsSUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLEVBQUUsYUFBYSxPQUFHLEVBQUUsU0FBTyxZQUFZO0FBQUUsU0FBTyxLQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssWUFBYSxDQUFBO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxTQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsVUFBUSxTQUFPLEVBQUUsT0FBTyxXQUFTLE9BQUssSUFBRSxFQUFFLGFBQWEsT0FBRyxFQUFFLFNBQU8sWUFBWSxNQUFJLE9BQUssU0FBTyxFQUFFLFVBQVE7QUFBUTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLFNBQU8sZ0JBQWMsRUFBRSxNQUFNLFlBQVcsTUFBSztBQUFLO0FBQUMsU0FBUyxH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SUFBRSxFQUFFLFNBQU8sZ0JBQWMsR0FBRyxDQUFDLE1BQUksS0FBRyxPQUFLLFNBQU8sRUFBRSxVQUFRLGdCQUFjLEtBQUcsR0FBRyxDQUFDO0FBQUUsUUFBRyxFQUFFLFdBQVMsVUFBUSxLQUFHLEVBQUUsVUFBUSxPQUFLLEVBQUUsU0FBTyxnQkFBYyxFQUFFLENBQUMsTUFBSSxFQUFFLENBQUMsR0FBRTtBQUFDLFFBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSyxHQUFDLEdBQUcsQ0FBQztBQUFFO0FBQUEsSUFBUTtBQUFDLFFBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxNQUFJLENBQUMsR0FBRyxHQUFFLE1BQU0sS0FBRyxDQUFDLE1BQUksR0FBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxLQUFHLENBQUMsS0FBRyxFQUFFLENBQUMsS0FBRyxDQUFDLEtBQUcsRUFBRSxDQUFDLEtBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxPQUFLLEdBQUcsQ0FBQyxLQUFHLE1BQUksQ0FBQyxLQUFHLEtBQUcsR0FBRyxDQUFDLFFBQU0sR0FBRyxFQUFFLFdBQVMsVUFBUSxFQUFFLFdBQVMsV0FBUyxLQUFHLEVBQUUsVUFBUSxPQUFLLEdBQUcsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxNQUFJLEVBQUUsRUFBRSxJQUFJLEtBQUcsRUFBRSxLQUFLLFVBQVEsTUFBSztBQUFDLFVBQUcsR0FBRyxDQUFDLEdBQUU7QUFBQyxZQUFHLEVBQUUsU0FBTyxxQkFBb0I7QUFBQyxZQUFFLEtBQUssR0FBRyxDQUFDLEdBQUUsRUFBRTtBQUFFO0FBQUEsUUFBUTtBQUFDLFVBQUUsS0FBSyxHQUFFLEVBQUU7QUFBRTtBQUFBLE1BQVE7QUFBQyxVQUFHLE1BQUksR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLElBQUc7QUFBQyxVQUFFLEtBQUssQ0FBQyxFQUFFLElBQUssR0FBQyxHQUFHLENBQUM7QUFBRTtBQUFBLE1BQVE7QUFBQyxVQUFHLEtBQUcsRUFBRSxLQUFLLFlBQWEsTUFBRyxhQUFZO0FBQUMsVUFBRSxLQUFLLENBQUMsRUFBRSxJQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUU7QUFBQSxNQUFRO0FBQUMsVUFBRyxHQUFFO0FBQUMsVUFBRSxVQUFRLEVBQUUsVUFBUSxFQUFFLE9BQU8sTUFBTSxTQUFPLEVBQUUsT0FBTyxNQUFNLFFBQU0sRUFBRSxLQUFLLEdBQUUsRUFBRSxHQUFFLElBQUUsUUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUcsR0FBRyxHQUFHLENBQUM7QUFBRTtBQUFBLE1BQVE7QUFBQyxVQUFHLEdBQUU7QUFBQyxVQUFFLEtBQUssQ0FBQyxFQUFFLElBQUcsR0FBRyxHQUFHLENBQUM7QUFBRTtBQUFBLE1BQVE7QUFBQyxXQUFJLEtBQUcsT0FBSyxTQUFPLEVBQUUsV0FBUyxTQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUc7QUFBQyxZQUFHLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxLQUFHLEVBQUUsQ0FBQyxNQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUU7QUFBQyxZQUFFLEtBQUssR0FBRSxFQUFFO0FBQUU7QUFBQSxRQUFRO0FBQUMsWUFBRyxFQUFFLFVBQVEsVUFBUSxHQUFHLENBQUMsR0FBRTtBQUFDLGNBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFFLEdBQUcsQ0FBQztBQUFFO0FBQUEsUUFBUTtBQUFDLFNBQUMsSUFBRSxFQUFFLFVBQVEsUUFBTSxFQUFFLFNBQVMsR0FBRyxLQUFHLEVBQUUsVUFBUSxPQUFLLEdBQUcsRUFBRSxLQUFLLEtBQUcsR0FBRyxDQUFDLEtBQUcsQ0FBQyxLQUFHLEVBQUUsS0FBSyxHQUFFLEVBQUU7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxTQUFPLEtBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUUsS0FBRyxFQUFFLFFBQVEsSUFBRyxDQUFDLEdBQUUsSUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUUsR0FBRyxDQUFDLElBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxXQUFTLElBQUUsSUFBRSxFQUFFLFlBQWEsRUFBQyxRQUFRLHVDQUFzQyxNQUFNLEVBQUUsUUFBUSw0QkFBMkIsSUFBSSxFQUFFLFFBQVEsZUFBYyxNQUFNLEVBQUUsUUFBUSxzQkFBcUIsSUFBSSxFQUFFLFFBQVEsY0FBYSxFQUFFO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxJQUFJLEtBQUcsb0JBQUksSUFBSSxDQUFDLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLE1BQUssSUFBSSxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLFFBQU8sTUFBTSxHQUFFLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLE1BQUssSUFBSSxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxNQUFLLElBQUksR0FBRSxDQUFDLE9BQU0sS0FBSyxHQUFFLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLE9BQU0sS0FBSyxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxNQUFLLElBQUksR0FBRSxDQUFDLE9BQU0sS0FBSyxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLE1BQUssSUFBSSxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLE9BQU0sS0FBSyxHQUFFLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLE9BQU0sS0FBSyxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxRQUFPLE1BQU0sR0FBRSxDQUFDLFNBQVEsT0FBTyxHQUFFLENBQUMsU0FBUSxPQUFPLEdBQUUsQ0FBQyxTQUFRLE9BQU8sR0FBRSxDQUFDLFFBQU8sTUFBTSxHQUFFLENBQUMsU0FBUSxPQUFPLEdBQUUsQ0FBQyxTQUFRLE9BQU8sR0FBRSxDQUFDLFNBQVEsT0FBTyxHQUFFLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxNQUFLLElBQUksR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxNQUFLLElBQUksR0FBRSxDQUFDLE1BQUssSUFBSSxHQUFFLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLFFBQU8sTUFBTSxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxRQUFPLE1BQU0sR0FBRSxDQUFDLEtBQUksR0FBRyxHQUFFLENBQUMsTUFBSyxJQUFJLEdBQUUsQ0FBQyxNQUFLLElBQUksR0FBRSxDQUFDLE9BQU0sS0FBSyxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxRQUFPLE1BQU0sR0FBRSxDQUFDLFFBQU8sTUFBTSxHQUFFLENBQUMsS0FBSSxHQUFHLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLE9BQU0sS0FBSyxHQUFFLENBQUMsT0FBTSxLQUFLLEdBQUUsQ0FBQyxPQUFNLEtBQUssR0FBRSxDQUFDLFNBQVEsT0FBTyxHQUFFLENBQUMsU0FBUSxPQUFPLEdBQUUsQ0FBQyxNQUFLLElBQUksQ0FBQyxDQUFDO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxZQUFXO0FBQUcsU0FBTyxHQUFHLElBQUksQ0FBQyxJQUFFLEdBQUcsSUFBSSxDQUFDLElBQUU7QUFBQztBQUFDLElBQUksS0FBRyxtQ0FBa0MsS0FBRyx3Q0FBdUMsS0FBRyxhQUFZLEtBQUcsa0RBQWlELEtBQUcsSUFBSSxPQUFPLEdBQUcsU0FBTyxLQUFLLEdBQUcsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLEdBQUcsTUFBTSxNQUFLLEtBQUs7QUFBRSxTQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLE9BQUcsR0FBRSxJQUFHLE9BQUcsR0FBRyxHQUFFLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLGNBQVksTUFBSTtBQUFJLFNBQU8sRUFBRSxTQUFTLEdBQUcsS0FBRyxFQUFFLFNBQVMsR0FBRyxJQUFFLElBQUUsSUFBRSxJQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxPQUFHLEdBQUUsSUFBRyxDQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsTUFBSSxDQUFDLEtBQUcsSUFBRSxHQUFHLENBQUMsSUFBRSxHQUFHLEtBQUcsRUFBRSxJQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLENBQUMsRUFBRSxRQUFRLGVBQWMsRUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEVBQUUsa0JBQWdCLFNBQU8sRUFBRSxrQkFBZ0I7QUFBSztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxDQUFDLEVBQUUsS0FBRyxRQUFNLEVBQUU7QUFBVyxNQUFHLE1BQUksTUFBRyxRQUFNO0FBQUcsTUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUUsTUFBRyxHQUFFO0FBQUMsUUFBRyxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksUUFBTSxNQUFJO0FBQUEsRUFDN3NULFFBQU8sSUFBRTtBQUFFLFFBQUcsTUFBSTtBQUFBLEtBQ2pCLE1BQUksUUFBTSxNQUFJLFlBQVUsTUFBSSxTQUFTLFFBQU8sSUFBRTtBQUFBLEVBQUMsT0FBSztBQUFDLFFBQUcsTUFBSSxRQUFNLEVBQUUsT0FBTyxJQUFFLENBQUMsTUFBSTtBQUFBLEVBQ25GLFFBQU8sSUFBRTtBQUFFLFFBQUcsTUFBSTtBQUFBLEtBQ2pCLE1BQUksUUFBTSxNQUFJLFlBQVUsTUFBSSxTQUFTLFFBQU8sSUFBRTtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFLElBQUUsQ0FBRSxHQUFDO0FBQUMsTUFBSSxJQUFFLEdBQUcsR0FBRSxFQUFFLFlBQVUsSUFBRSxJQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFFLFNBQU8sTUFBSTtBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUcsTUFBSSxNQUFHLFFBQU07QUFBRyxNQUFHLEVBQUUsT0FBTyxDQUFDLE1BQUksT0FBSyxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksS0FBSTtBQUFDLGFBQVEsSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxFQUFFLEtBQUcsRUFBRSxPQUFPLENBQUMsTUFBSSxPQUFLLEVBQUUsT0FBTyxJQUFFLENBQUMsTUFBSSxJQUFJLFFBQU8sSUFBRTtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTyxNQUFJLFFBQUcsUUFBRyxFQUFFLE9BQU8sQ0FBQyxNQUFJLE9BQUssRUFBRSxPQUFPLElBQUUsQ0FBQyxNQUFJLE1BQUksR0FBRyxHQUFFLENBQUMsSUFBRTtBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxNQUFLLElBQUU7QUFBRSxTQUFLLE1BQUksSUFBRyxLQUFFLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxDQUFDO0FBQUUsU0FBTyxJQUFFLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLE1BQUksU0FBSSxHQUFHLEdBQUUsQ0FBQztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEVBQUMsTUFBSyxHQUFFLFFBQU8sRUFBQyxHQUFFLEdBQUU7QUFBQyxTQUFNLENBQUMsRUFBRSxFQUFFLFVBQVEsRUFBRSxhQUFhLE1BQU0sRUFBRSxDQUFDLEdBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQU8sRUFBRyxTQUFTLEdBQUc7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFPLEdBQUcsRUFBRSxXQUFXLEtBQUcsR0FBRyxHQUFFLENBQUMsSUFBRSxNQUFJLEVBQUUsS0FBSyxTQUFPLG1CQUFpQixFQUFFLEVBQUUsS0FBSyxTQUFPLHVCQUFxQixFQUFFLEtBQUssT0FBTyxNQUFNLE9BQUcsRUFBRSxTQUFPLGVBQWUsTUFBSSxHQUFHLENBQUMsS0FBRyxFQUFFLFdBQVcsTUFBSSxHQUFHLEdBQUUsQ0FBQyxDQUFDLElBQUUsR0FBRyxHQUFHLElBQUU7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEdBQUUsUUFBTyxFQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUMsTUFBSyxFQUFDLE1BQUksT0FBTyxLQUFHLFdBQVMsSUFBRSxFQUFDLEdBQUcsUUFBUTtBQUFFLE1BQUcsS0FBRyxHQUFHLENBQUMsTUFBSSxFQUFFLE9BQU8sV0FBUyxLQUFHLEVBQUUsT0FBTyxTQUFPLEtBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxTQUFPLHVCQUFxQixFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBTyxLQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsU0FBTyxnQkFBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQU0sV0FBVyxPQUFPLEdBQUcsUUFBTSxDQUFDLEVBQUUsT0FBSyxFQUFFLE1BQU0sSUFBRSxJQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUUsRUFBRSxRQUFNLEVBQUUsT0FBTyxJQUFFLEVBQUU7QUFBRSxNQUFHLENBQUMsRUFBRSxNQUFLO0FBQUMsUUFBSSxJQUFFLEdBQUcsQ0FBQztBQUFRLFFBQUksSUFBRSxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFFLElBQUUsR0FBRSxDQUFDO0FBQUUsV0FBTyxFQUFFLElBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUUsSUFBRSxJQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFJLElBQUUsRUFBRSxJQUFJLENBQUMsRUFBQyxNQUFLLEdBQUUsUUFBTyxHQUFFLE9BQU0sRUFBQyxNQUFJO0FBQUMsUUFBSTtBQUFFLFFBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxPQUFHLENBQUMsS0FBRyxFQUFFLFNBQU8sdUJBQXFCLEVBQUUsVUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFNBQU8seUJBQXVCLElBQUUsRUFBRSxPQUFPLENBQUMsTUFBSSxPQUFLLFNBQU8sRUFBRSxVQUFRLHVCQUFxQixFQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsRUFBRSxRQUFRLE1BQUksTUFBSSxFQUFFLEVBQUUsU0FBUyxRQUFRLE1BQUksT0FBSyxJQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBRyxRQUFJLElBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLENBQUMsSUFBRSxHQUFHO0FBQUUsUUFBRyxDQUFDLEtBQUcsRUFBRSxTQUFPLHVCQUFxQixHQUFHLEVBQUUsTUFBTSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsT0FBRyxFQUFFLFFBQU8sRUFBRTtBQUFFLE9BQUMsRUFBRSxVQUFRLEVBQUUsVUFBUSxJQUFFLEVBQUUsUUFBTyxFQUFFLFVBQVEsR0FBRyxFQUFFLGNBQWEsRUFBRSxDQUFDLENBQUMsS0FBRyxFQUFFLEtBQUssQ0FBQztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQyxHQUFFLFFBQVEsR0FBRSxJQUFFLEdBQUcsR0FB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QUFFLFFBQU8sSUFBRSxHQUFHLENBQUMsS0FBRyxDQUFDLEVBQUUsS0FBSyxhQUFXLEVBQUUsYUFBYSxFQUFFLENBQUMsSUFBRSxDQUFDLE1BQUk7QUFBSSxVQUFHLEVBQUUsV0FBUyxRQUFPO0FBQUMsWUFBRyxFQUFFLE1BQU0sUUFBTSxDQUFDLEVBQUUsVUFBVSxHQUFFLEVBQUUsWUFBVSxnQkFBYyxJQUFHLElBQUUsS0FBRyxHQUFHO0FBQUUsWUFBRyxFQUFFLFNBQVMsUUFBTSxDQUFDLEVBQUUsTUFBSyxPQUFPLEVBQUUsVUFBUSxXQUFTLEVBQUUsU0FBTyxFQUFFLFFBQVEsR0FBRSxJQUFFLEtBQUcsR0FBRztBQUFFLFlBQUcsRUFBRSxTQUFTLFFBQU0sQ0FBQyxLQUFJLEVBQUUsTUFBSyxNQUFLLEVBQUUsUUFBTSxFQUFFLE9BQU8sSUFBRSxJQUFHLEVBQUUsS0FBSyxRQUFRLEtBQUksSUFBRyxFQUFFLEtBQUssUUFBUSxLQUFJLElBQUcsTUFBSSxJQUFHLEVBQUUsUUFBTSxDQUFDLEtBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxTQUFPLElBQUUsSUFBRSxJQUFHLEdBQUcsR0FBRSxHQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsR0FBRSxHQUFHLElBQUUsSUFBRyxJQUFFLEtBQUcsR0FBRztBQUFBLE1BQUM7QUFBQyxVQUFJLElBQUUsRUFBRSxTQUFPLGNBQVksSUFBRSxFQUFFLFdBQVMsT0FBSyxTQUFPLEVBQUUsVUFBUSxtQkFBaUIsRUFBRSxPQUFPLE1BQU0sU0FBUyxHQUFHO0FBQUUsYUFBTSxDQUFDLEtBQUksR0FBRyxDQUFDLEtBQUcsRUFBRSxLQUFLLFNBQVMsR0FBRyxLQUFHLEdBQUcsQ0FBQyxJQUFFLEVBQUUsT0FBSyxHQUFHLEVBQUUsSUFBSSxHQUFFLEVBQUUsU0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFFLEtBQUcsR0FBRyxDQUFDLElBQUUsRUFBRSxLQUFLLGNBQVksS0FBRyxLQUFHLEVBQUUsS0FBSyxTQUFTLEdBQUcsSUFBRSxNQUFJLGVBQWUsS0FBSyxFQUFFLEtBQUssU0FBUyxJQUFFLENBQUMsR0FBRSxDQUFDLElBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxTQUFTLElBQUUsSUFBRSxNQUFJLEtBQUksT0FBTyxFQUFFLFVBQVEsV0FBUyxFQUFFLFNBQU8sRUFBRSxRQUFRLENBQUMsSUFBRSxJQUFHLEVBQUUsV0FBUyxFQUFFLENBQUMsS0FBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUUsSUFBRyxFQUFFLFFBQU0sRUFBRSxDQUFDLEtBQUksRUFBRSxPQUFPLEdBQUUsR0FBRyxHQUFFLENBQUMsSUFBRSxHQUFHLENBQUMsSUFBRSxNQUFJLElBQUUsRUFBRSxDQUFDLElBQUUsRUFBRSxTQUFPLFNBQU8sTUFBSSxJQUFHLEVBQUUsUUFBTSxDQUFDLEdBQUcsR0FBRSxDQUFDLElBQUUsS0FBRyxFQUFFLFlBQVUsQ0FBQyxFQUFFLFNBQVMsU0FBTyxPQUFPLEVBQUUsU0FBUyxTQUFPLFlBQVUsR0FBRyxFQUFFLFNBQVMsS0FBSyxLQUFHLENBQUMsRUFBRSxZQUFVLE9BQU8sRUFBRSxVQUFRLFlBQVUsR0FBRyxFQUFFLE1BQU0sSUFBRSxJQUFFLEtBQUksS0FBSSxFQUFFLENBQUMsRUFBRSxNQUFNLFNBQU8sSUFBRSxJQUFFLElBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFFLEdBQUcsSUFBRSxLQUFHLElBQUUsS0FBRyxHQUFHO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSSxvQkFBbUI7QUFBQyxVQUFJLElBQUUsQ0FBQTtBQUFHLGFBQU8sRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFLLEVBQUMsTUFBSTtBQUFDLFVBQUUsU0FBTyxpQkFBZSxFQUFFLFVBQVEsTUFBSSxFQUFFLEtBQUssRUFBQyxDQUFFO0FBQUEsTUFBQyxHQUFFLE9BQU8sR0FBRSxFQUFFLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSTtBQUFjLGFBQU0sQ0FBQyxFQUFFLEtBQUksRUFBRSxJQUFJLEdBQUUsT0FBTyxDQUFDLEdBQUUs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RyxFQUFFLENBQUMsQ0FBQztBQUFFLEtBQUMsTUFBTSxRQUFRLENBQUMsS0FBRyxFQUFFLFNBQU8sQ0FBQyxFQUFFLFNBQU8sRUFBRSxPQUFLO0FBQUEsRUFBVTtBQUFDLFNBQU87QUFBQztBQUFDLElBQUksS0FBRyxHQUFHLFFBQVE7QUFBUSxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHO0FBQUMsUUFBRSxHQUFHLENBQUM7QUFBQSxFQUFDLFFBQU07QUFBQyxXQUFNLEVBQUMsTUFBSyxvQkFBbUIsT0FBTSxFQUFDO0FBQUEsRUFBQztBQUFDLFNBQU8sRUFBRSxHQUFHLENBQUMsR0FBRSxRQUFRO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxJQUFJLEtBQUcsR0FBRyxHQUFFLENBQUk7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsYUFBYSxLQUFLLENBQUMsRUFBRSxRQUFNLEVBQUMsTUFBSyxvQkFBbUIsT0FBTSxFQUFFLEtBQUksRUFBRTtBQUFFLE1BQUk7QUFBRSxNQUFHO0FBQUMsUUFBSSxHQUFHLFFBQVEsT0FBRztBQUFDLFVBQUU7QUFBQSxJQUFDLENBQUMsRUFBRSxRQUFRLENBQUM7QUFBQSxFQUFDLFFBQU07QUFBQyxXQUFNLEVBQUMsTUFBSyxvQkFBbUIsT0FBTSxFQUFDO0FBQUEsRUFBQztBQUFDLFNBQU8sRUFBRSxHQUFFLFdBQVc7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLElBQUksS0FBRyxHQUFHLEdBQUUsQ0FBSTtBQUFFLElBQUksS0FBRyxPQUFHO0FBQUMsU0FBSyxFQUFFLFNBQVEsS0FBRSxFQUFFO0FBQU8sU0FBTztBQUFDLEdBQUUsS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRSxNQUFNLEtBQUssY0FBWSxHQUFFLEVBQUUsTUFBTSxNQUFNLFdBQVcsRUFBRSxLQUFJO0FBQUU7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsR0FBRyxDQUFDLEdBQUU7QUFBQyxhQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsSUFBRSxHQUFFLElBQUksS0FBRyxFQUFFLENBQUMsRUFBRSxTQUFPLFVBQVEsRUFBRSxDQUFDLEVBQUUsVUFBUSxPQUFLLEVBQUUsSUFBRSxDQUFDLEVBQUUsU0FBTyxVQUFRLEVBQUUsSUFBRSxDQUFDLEVBQUUsTUFBTSxTQUFTLEdBQUcsRUFBRSxRQUFRO0FBQUEsRUFBQTtBQUFDLFNBQVE7QUFBQTtBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLEtBQUssT0FBRyxFQUFFLFNBQU8sWUFBVSxFQUFFLFNBQU8sVUFBUSxDQUFDLEVBQUUsTUFBTSxTQUFTLElBQUksQ0FBQztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQU0sQ0FBQyxFQUFFLEVBQUUsV0FBUyxXQUFTLEtBQUcsT0FBSyxTQUFPLEVBQUUsVUFBUSxVQUFRLEVBQUUsTUFBTSxXQUFXLEdBQUc7QUFBRTtBQUFDLElBQUksS0FBRztBQUFHLElBQUksS0FBRyxPQUFHLEVBQUUsU0FBTyxXQUFTLEVBQUUsVUFBUTtBQUFJLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJO0FBQUUsTUFBRyxFQUFDLE9BQU0sRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFDLE1BQUssTUFBSyxPQUFNLE1BQUssUUFBTyxDQUFBLEdBQUcsTUFBSyxjQUFhLEdBQUUsSUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFDLFFBQU8sQ0FBQSxHQUFHLE1BQUssY0FBYSxHQUFFLElBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxXQUFTLFVBQVEsRUFBRSxTQUFPLFlBQVUsRUFBRSxTQUFPLFFBQU0sRUFBRSxNQUFNLFNBQVMsR0FBRyxNQUFJLEVBQUUsUUFBTSxFQUFFLE1BQU0sTUFBTSxHQUFFLEVBQUUsR0FBRSxFQUFFLE9BQUssUUFBTyxFQUFFLFNBQU8sVUFBUSxFQUFFLFVBQVEsZUFBYSxFQUFFLE1BQU0sU0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUUsTUFBTSxLQUFLLGNBQVksR0FBRSxFQUFFLE1BQU0sTUFBTSxXQUFXLENBQUMsQ0FBQyxJQUFHLEVBQUUsU0FBTyxVQUFRLEVBQUUsVUFBUSxPQUFNO0FBQUMsVUFBSSxNQUFJLElBQUUsRUFBRSxVQUFRLE9BQUssU0FBTyxFQUFFLFdBQVMsQ0FBQSxHQUFHLElBQUUsQ0FBQTtBQUFHLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsVUFBRSxTQUFPLGdCQUFjLElBQUUsQ0FBQyxHQUFHLEdBQUUsR0FBRyxFQUFFLE1BQU0sSUFBRSxFQUFFLEtBQUssQ0FBQztBQUFBLE1BQUM7QUFBQyxPQUFDLEdBQUcsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFDLEtBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFFLENBQUMsT0FBSyxFQUFFLE1BQU0sU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFBRTtBQUFDLFFBQUcsRUFBRSxTQUFPLFdBQVMsRUFBRSxVQUFRLElBQUksS0FBRSxFQUFDLE1BQUssR0FBRSxPQUFNLE1BQUssUUFBTyxDQUFBLEdBQUcsTUFBSyxjQUFhLEdBQUUsRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLEVBQUMsUUFBTyxDQUFBLEdBQUcsTUFBSyxjQUFhLEdBQUUsRUFBRSxLQUFLLENBQUM7QUFBQSxhQUFVLEdBQUcsQ0FBQyxHQUFFO0FBQUMsVUFBRyxFQUFFLE9BQU8sU0FBTyxLQUFHLEVBQUUsT0FBTyxLQUFLLENBQUMsR0FBRSxFQUFFLFFBQU0sR0FBRSxFQUFFLFdBQVMsRUFBRSxPQUFNLElBQUksTUFBTSx3QkFBd0I7QUFBRSxRQUFFLElBQUssR0FBQyxJQUFFLEVBQUUsT0FBRyxHQUFFLEVBQUUsR0FBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUUsRUFBRSxJQUFLLEdBQUMsSUFBRSxFQUFFLE9BQUcsR0FBRSxFQUFFO0FBQUEsSUFBQyxXQUFTLEVBQUUsU0FBTyxTQUFRO0FBQUMsVUFBRyxNQUFJLEVBQUUsU0FBTyxLQUFHLEVBQUUsSUFBRSxDQUFDLEVBQUUsU0FBTyxhQUFXLEdBQUcsRUFBRSxJQUFFLENBQUMsQ0FBQyxFQUFFO0FBQVMsUUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFFLElBQUUsRUFBQyxRQUFPLENBQUEsR0FBRyxNQUFLLGNBQWEsR0FBRSxFQUFFLEVBQUUsU0FBTyxDQUFDLElBQUU7QUFBQSxJQUFDLE1BQU0sR0FBRSxPQUFPLEtBQUssQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFPLEVBQUUsT0FBTyxTQUFPLEtBQUcsRUFBRSxPQUFPLEtBQUssQ0FBQyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxTQUFPLGlCQUFlLENBQUMsRUFBRSxRQUFNLENBQUMsRUFBRSxTQUFPLEVBQUUsT0FBTyxXQUFTLEtBQUcsRUFBRSxTQUFPLGlCQUFlLEVBQUUsT0FBTyxXQUFTLElBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUUsRUFBRSxTQUFPLGlCQUFlLEVBQUUsU0FBTyxnQkFBYyxFQUFDLEdBQUcsR0FBRSxRQUFPLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBQyxJQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxLQUFHLE9BQU8sS0FBRyxTQUFTLFVBQVEsS0FBSyxFQUFFLE9BQUksYUFBVyxHQUFHLEVBQUUsQ0FBQyxHQUFFLENBQUMsR0FBRSxNQUFJLFlBQVUsRUFBRSxRQUFNLEdBQUcsR0FBRyxHQUFFLENBQUMsQ0FBQyxHQUFFLE9BQU8sRUFBRSxDQUFDO0FBQUksU0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBRSxXQUFTLFVBQVEsRUFBRSxXQUFXLElBQUksRUFBRSxRQUFNLEVBQUMsTUFBSyxpQkFBZ0IsT0FBTSxFQUFDO0FBQUUsTUFBSSxJQUFFO0FBQUssTUFBRztBQUFDLFFBQUUsSUFBSSxHQUFHLFFBQVEsR0FBRSxFQUFDLE9BQU0sS0FBRSxDQUFDLEVBQUUsTUFBTztBQUFBLEVBQUEsUUFBTTtBQUFDLFdBQU0sRUFBQyxNQUFLLGlCQUFnQixPQUFNLEVBQUM7QUFBQSxFQUFDO0FBQUMsSUFBRSxPQUFLO0FBQUUsTUFBSSxJQUFFLEdBQUcsR0FBRSxDQUFDO0FBQUUsU0FBTyxFQUFFLEdBQUUsVUFBUyxhQUFhO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxJQUFJLEtBQUcsb0JBQUksSUFBSSxDQUFDLFVBQVMsT0FBTSxTQUFTLENBQUM7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxJQUFJLENBQUM7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFPLEVBQUUsV0FBUyxVQUFRLENBQUMsRUFBRSxXQUFTLFFBQUcsRUFBRSxTQUFTLFFBQVEsZ0JBQWUsRUFBRSxFQUFFLFFBQVEsYUFBWSxFQUFFLEVBQUUsS0FBTSxFQUFDLFNBQVMsR0FBRztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsSUFBSSxLQUFHLHVCQUFzQixLQUFHO0FBQXFCLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLEdBQUU7QUFBRSxNQUFHLEtBQUcsT0FBTyxLQUFHLFVBQVM7QUFBQyxXQUFPLEVBQUU7QUFBTyxhQUFRLEtBQUssRUFBRSxJQUFHLEVBQUUsQ0FBQyxHQUFFLENBQUM7QUFBRSxRQUFHLENBQUMsRUFBRSxLQUFLLFFBQU87QUFBRSxRQUFHLEVBQUUsU0FBTyxFQUFFLE9BQUssQ0FBQSxJQUFJLEVBQUUsU0FBTyxjQUFZLE9BQU8sRUFBRSxRQUFNLFlBQVUsRUFBRSxLQUFLLFdBQVcsSUFBSSxLQUFHLE9BQU8sRUFBRSxTQUFPLFlBQVUsRUFBRSxNQUFNLFdBQVcsR0FBRyxHQUFFO0FBQUMsVUFBSTtBQUFFLFVBQUcsRUFBRSxNQUFNLFFBQVMsRUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLGFBQWEsTUFBTSxHQUFFLEVBQUUsT0FBTyxNQUFNLE1BQU0sR0FBRSxJQUFFLElBQUksT0FBTyxFQUFFLEtBQUssTUFBTSxJQUFFLEVBQUUsYUFBYSxNQUFNLEVBQUUsT0FBTyxNQUFNLFNBQU8sRUFBRSxLQUFLLFFBQU8sRUFBRSxPQUFPLElBQUksTUFBTSxHQUFFLElBQUUsRUFBRSxPQUFHLEdBQUUsV0FBVSxHQUFHLElBQUUsR0FBRTtBQUFFLFVBQUUsV0FBUyxTQUFPLElBQUUsS0FBRyxFQUFFLFdBQVMsU0FBTyxJQUFFLEtBQUcsSUFBRTtBQUFHLFlBQUk7QUFBRSxZQUFHO0FBQUMsY0FBRSxFQUFFLEdBQUUsRUFBQyxHQUFHLEVBQUMsQ0FBQztBQUFBLFFBQUMsUUFBTTtBQUFBO0FBQUUsVUFBRSxJQUFFLEtBQUcsT0FBSyxTQUFPLEVBQUUsVUFBUSxPQUFLLFNBQU8sRUFBRSxZQUFVLEtBQUcsRUFBRSxNQUFNLENBQUMsRUFBRSxTQUFPLGVBQWEsSUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO0FBQUEsTUFBTTtBQUFDLGFBQU8sSUFBRSxFQUFFLFFBQU0sRUFBQyxNQUFLLFlBQVcsT0FBTSxFQUFDLElBQUUsRUFBRSxRQUFNLEVBQUMsTUFBSyxpQkFBZ0IsT0FBTSxFQUFFLEtBQUssTUFBTSxJQUFHLEdBQUU7QUFBQSxJQUFDO0FBQUMsUUFBSSxJQUFFO0FBQUcsV0FBTyxFQUFFLFlBQVUsYUFBVyxJQUFFLEVBQUUsS0FBSyxXQUFTLEVBQUUsS0FBSyxTQUFTLFFBQU0sRUFBRSxLQUFLLFNBQVMsTUFBSSxFQUFFLFVBQVMsRUFBRSxLQUFLLFdBQVMsRUFBRSxLQUFLLFFBQVEsT0FBTyxTQUFPLE1BQUksS0FBRyxFQUFFLEtBQUssVUFBUyxFQUFFLEtBQUssV0FBUztBQUFHLFFBQUksSUFBRTtBQUFHLFdBQU8sRUFBRSxTQUFPLGFBQVcsSUFBRSxFQUFFLEtBQUssUUFBTSxFQUFFLEtBQUssTUFBTSxRQUFNLEVBQUUsS0FBSyxNQUFNLE1BQUksRUFBRSxPQUFNLEVBQUUsS0FBSyxRQUFNLEVBQUUsS0FBSTtBQUFJLFFBQUksSUFBRTtBQUFHLFFBQUcsT0FBTyxFQUFFLFVBQVEsYUFBVyxJQUFFLEVBQUUsS0FBSyxTQUFPLEVBQUUsS0FBSyxPQUFPLFFBQU0sRUFBRSxLQUFLLE9BQU8sTUFBSSxFQUFFLFFBQU8sRUFBRSxLQUFLLGFBQVcsRUFBRSxLQUFLLFVBQVUsS0FBSSxFQUFHLFNBQU8sTUFBSSxJQUFFLEVBQUUsS0FBSyxZQUFVLElBQUcsRUFBRSxLQUFLLFdBQVMsRUFBRSxLQUFLLFFBQVEsS0FBTSxFQUFDLFNBQU8sTUFBSSxJQUFFLElBQUUsRUFBRSxLQUFLLFVBQVMsSUFBRSxFQUFFLEtBQU0sR0FBQyxFQUFFLEtBQUssU0FBTyxJQUFHLEVBQUUsS0FBSSxFQUFHLFNBQU8sRUFBRSxRQUFPLEVBQUUsV0FBVyxHQUFHLEtBQUcsRUFBRSxTQUFTLEdBQUcsSUFBRSxJQUFFLEVBQUUsU0FBTyxFQUFFLFdBQVMsR0FBRyxHQUFFLENBQUMsR0FBRSxNQUFJLEdBQUcsR0FBRSxDQUFDLE1BQUksRUFBRSx1QkFBcUIsT0FBSSxFQUFFLFdBQVMsR0FBRyxDQUFDLEdBQUU7QUFBRyxRQUFHLEVBQUUsT0FBTyxTQUFPLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxNQUFNLEVBQUU7QUFBRSxZQUFJLElBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRSxLQUFLLEdBQUUsRUFBRSxjQUFZLE1BQUcsRUFBRSxDQUFDLEVBQUUsV0FBUyxlQUFhLEVBQUUsS0FBSyxjQUFZLEVBQUUsQ0FBQztBQUFJLFVBQUksSUFBRSxFQUFFLE1BQU0sRUFBRTtBQUFFLFVBQUcsTUFBSSxJQUFFLEVBQUUsTUFBTSxHQUFFLEVBQUUsS0FBSyxHQUFFLEVBQUUsYUFBVyxNQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQU0sTUFBRyxjQUFZLEVBQUUsS0FBSyxhQUFXLEVBQUUsQ0FBQyxLQUFJLEVBQUUsV0FBVyxTQUFTLEVB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
