var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var Ti = Object.create;
var tn = Object.defineProperty;
var Ci = Object.getOwnPropertyDescriptor;
var Mi = Object.getOwnPropertyNames;
var ki = Object.getPrototypeOf, vi = Object.prototype.hasOwnProperty;
var te = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), rr = (t, e) => {
  for (var n in e) tn(t, n, { get: e[n], enumerable: true });
}, Ii = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let s of Mi(e)) !vi.call(t, s) && s !== n && tn(t, s, { get: () => e[s], enumerable: !(r = Ci(e, s)) || r.enumerable });
  return t;
};
var sr = (t, e, n) => (n = t != null ? Ti(ki(t)) : {}, Ii(tn(n, "default", { value: t, enumerable: true }), t));
var le = te((U) => {
  var re = { ANCHOR: "&", COMMENT: "#", TAG: "!", DIRECTIVES_END: "-", DOCUMENT_END: "." }, lt = { ALIAS: "ALIAS", BLANK_LINE: "BLANK_LINE", BLOCK_FOLDED: "BLOCK_FOLDED", BLOCK_LITERAL: "BLOCK_LITERAL", COMMENT: "COMMENT", DIRECTIVE: "DIRECTIVE", DOCUMENT: "DOCUMENT", FLOW_MAP: "FLOW_MAP", FLOW_SEQ: "FLOW_SEQ", MAP: "MAP", MAP_KEY: "MAP_KEY", MAP_VALUE: "MAP_VALUE", PLAIN: "PLAIN", QUOTE_DOUBLE: "QUOTE_DOUBLE", QUOTE_SINGLE: "QUOTE_SINGLE", SEQ: "SEQ", SEQ_ITEM: "SEQ_ITEM" }, Ao = "tag:yaml.org,2002:", To = { MAP: "tag:yaml.org,2002:map", SEQ: "tag:yaml.org,2002:seq", STR: "tag:yaml.org,2002:str" };
  function Ps(t) {
    let e = [0], n = t.indexOf(`
`);
    for (; n !== -1; ) n += 1, e.push(n), n = t.indexOf(`
`, n);
    return e;
  }
  function _s(t) {
    let e, n;
    return typeof t == "string" ? (e = Ps(t), n = t) : (Array.isArray(t) && (t = t[0]), t && t.context && (t.lineStarts || (t.lineStarts = Ps(t.context.src)), e = t.lineStarts, n = t.context.src)), { lineStarts: e, src: n };
  }
  function Tn(t, e) {
    if (typeof t != "number" || t < 0) return null;
    let { lineStarts: n, src: r } = _s(e);
    if (!n || !r || t > r.length) return null;
    for (let i = 0; i < n.length; ++i) {
      let o = n[i];
      if (t < o) return { line: i, col: t - n[i - 1] + 1 };
      if (t === o) return { line: i + 1, col: 1 };
    }
    let s = n.length;
    return { line: s, col: t - n[s - 1] + 1 };
  }
  function Co(t, e) {
    let { lineStarts: n, src: r } = _s(e);
    if (!n || !(t >= 1) || t > n.length) return null;
    let s = n[t - 1], i = n[t];
    for (; i && i > s && r[i - 1] === `
`; ) --i;
    return r.slice(s, i);
  }
  function Mo({ start: t, end: e }, n, r = 80) {
    let s = Co(t.line, n);
    if (!s) return null;
    let { col: i } = t;
    if (s.length > r) if (i <= r - 10) s = s.substr(0, r - 1) + "…";
    else {
      let f = Math.round(r / 2);
      s.length > i + f && (s = s.substr(0, i + f - 1) + "…"), i -= s.length - r, s = "…" + s.substr(1 - r);
    }
    let o = 1, a = "";
    e && (e.line === t.line && i + (e.col - t.col) <= r + 1 ? o = e.col - t.col : (o = Math.min(s.length + 1, r) - i, a = "…"));
    let c = i > 1 ? " ".repeat(i - 1) : "", l = "^".repeat(o);
    return `${s}
${c}${l}${a}`;
  }
  var Be = class t {
    static copy(e) {
      return new t(e.start, e.end);
    }
    constructor(e, n) {
      this.start = e, this.end = n || e;
    }
    isEmpty() {
      return typeof this.start != "number" || !this.end || this.end <= this.start;
    }
    setOrigRange(e, n) {
      let { start: r, end: s } = this;
      if (e.length === 0 || s <= e[0]) return this.origStart = r, this.origEnd = s, n;
      let i = n;
      for (; i < e.length && !(e[i] > r); ) ++i;
      this.origStart = r + i;
      let o = i;
      for (; i < e.length && !(e[i] >= s); ) ++i;
      return this.origEnd = s + i, o;
    }
  }, se = class t {
    static addStringTerminator(e, n, r) {
      if (r[r.length - 1] === `
`) return r;
      let s = t.endOfWhiteSpace(e, n);
      return s >= e.length || e[s] === `
` ? r + `
` : r;
    }
    static atDocumentBoundary(e, n, r) {
      let s = e[n];
      if (!s) return true;
      let i = e[n - 1];
      if (i && i !== `
`) return false;
      if (r) {
        if (s !== r) return false;
      } else if (s !== re.DIRECTIVES_END && s !== re.DOCUMENT_END) return false;
      let o = e[n + 1], a = e[n + 2];
      if (o !== s || a !== s) return false;
      let c = e[n + 3];
      return !c || c === `
` || c === "	" || c === " ";
    }
    static endOfIdentifier(e, n) {
      let r = e[n], s = r === "<", i = s ? [`
`, "	", " ", ">"] : [`
`, "	", " ", "[", "]", "{", "}", ","];
      for (; r && i.indexOf(r) === -1; ) r = e[n += 1];
      return s && r === ">" && (n += 1), n;
    }
    static endOfIndent(e, n) {
      let r = e[n];
      for (; r === " "; ) r = e[n += 1];
      return n;
    }
    static endOfLine(e, n) {
      let r = e[n];
      for (; r && r !== `
`; ) r = e[n += 1];
      return n;
    }
    static endOfWhiteSpace(e, n) {
      let r = e[n];
      for (; r === "	" || r === " "; ) r = e[n += 1];
      return n;
    }
    static startOfLine(e, n) {
      let r = e[n - 1];
      if (r === `
`) return n;
      for (; r && r !== `
`; ) r = e[n -= 1];
      return n + 1;
    }
    static endOfBlockIndent(e, n, r) {
      let s = t.endOfIndent(e, r);
      if (s > r + n) return s;
      {
        let i = t.endOfWhiteSpace(e, s), o = e[i];
        if (!o || o === `
`) return i;
      }
      return null;
    }
    static atBlank(e, n, r) {
      let s = e[n];
      return s === `
` || s === "	" || s === " " || r && !s;
    }
    static nextNodeIsIndented(e, n, r) {
      return !e || n < 0 ? false : n > 0 ? true : r && e === "-";
    }
    static normalizeOffset(e, n) {
      let r = e[n];
      return r ? r !== `
` && e[n - 1] === `
` ? n - 1 : t.endOfWhiteSpace(e, n) : n;
    }
    static foldNewline(e, n, r) {
      let s = 0, i = false, o = "", a = e[n + 1];
      for (; a === " " || a === "	" || a === `
`; ) {
        switch (a) {
          case `
`:
            s = 0, n += 1, o += `
`;
            break;
          case "	":
            s <= r && (i = true), n = t.endOfWhiteSpace(e, n + 2) - 1;
            break;
          case " ":
            s += 1, n += 1;
            break;
        }
        a = e[n + 1];
      }
      return o || (o = " "), a && s <= r && (i = true), { fold: o, offset: n, error: i };
    }
    constructor(e, n, r) {
      Object.defineProperty(this, "context", { value: r || null, writable: true }), this.error = null, this.range = null, this.valueRange = null, this.props = n || [], this.type = e, this.value = null;
    }
    getPropValue(e, n, r) {
      if (!this.context) return null;
      let { src: s } = this.context, i = this.props[e];
      return i && s[i.start] === n ? s.slice(i.start + (r ? 1 : 0), i.end) : null;
    }
    get anchor() {
      for (let e = 0; e < this.props.length; ++e) {
        let n = this.getPropValue(e, re.ANCHOR, true);
        if (n != null) return n;
      }
      return null;
    }
    get comment() {
      let e = [];
      for (let n = 0; n < this.props.length; ++n) {
        let r = this.getPropValue(n, re.COMMENT, true);
        r != null && e.push(r);
      }
      return e.length > 0 ? e.join(`
`) : null;
    }
    commentHasRequiredWhitespace(e) {
      let { src: n } = this.context;
      if (this.header && e === this.header.end || !this.valueRange) return false;
      let { end: r } = this.valueRange;
      return e !== r || t.atBlank(n, r - 1);
    }
    get hasComment() {
      if (this.context) {
        let { src: e } = this.context;
        for (let n = 0; n < this.props.length; ++n) if (e[this.props[n].start] === re.COMMENT) return true;
      }
      return false;
    }
    get hasProps() {
      if (this.context) {
        let { src: e } = this.context;
        for (let n = 0; n < this.props.length; ++n) if (e[this.props[n].start] !== re.COMMENT) return true;
      }
      return false;
    }
    get includesTrailingLines() {
      return false;
    }
    get jsonLike() {
      return [lt.FLOW_MAP, lt.FLOW_SEQ, lt.QUOTE_DOUBLE, lt.QUOTE_SINGLE].indexOf(this.type) !== -1;
    }
    get rangeAsLinePos() {
      if (!this.range || !this.context) return;
      let e = Tn(this.range.start, this.context.root);
      if (!e) return;
      let n = Tn(this.range.end, this.context.root);
      return { start: e, end: n };
    }
    get rawValue() {
      if (!this.valueRange || !this.context) return null;
      let { start: e, end: n } = this.valueRange;
      return this.context.src.slice(e, n);
    }
    get tag() {
      for (let e = 0; e < this.props.length; ++e) {
        let n = this.getPropValue(e, re.TAG, false);
        if (n != null) {
          if (n[1] === "<") return { verbatim: n.slice(2, -1) };
          {
            let [r, s, i] = n.match(/^(.*!)([^!]*)$/);
            return { handle: s, suffix: i };
          }
        }
      }
      return null;
    }
    get valueRangeContainsNewline() {
      if (!this.valueRange || !this.context) return false;
      let { start: e, end: n } = this.valueRange, { src: r } = this.context;
      for (let s = e; s < n; ++s) if (r[s] === `
`) return true;
      return false;
    }
    parseComment(e) {
      let { src: n } = this.context;
      if (n[e] === re.COMMENT) {
        let r = t.endOfLine(n, e + 1), s = new Be(e, r);
        return this.props.push(s), r;
      }
      return e;
    }
    setOrigRanges(e, n) {
      return this.range && (n = this.range.setOrigRange(e, n)), this.valueRange && this.valueRange.setOrigRange(e, n), this.props.forEach((r) => r.setOrigRange(e, n)), n;
    }
    toString() {
      let { context: { src: e }, range: n, value: r } = this;
      if (r != null) return r;
      let s = e.slice(n.start, n.end);
      return t.addStringTerminator(e, n.end, s);
    }
  }, ye = class extends Error {
    constructor(e, n, r) {
      if (!r || !(n instanceof se)) throw new Error(`Invalid arguments for new ${e}`);
      super(), this.name = e, this.message = r, this.source = n;
    }
    makePretty() {
      if (!this.source) return;
      this.nodeType = this.source.type;
      let e = this.source.context && this.source.context.root;
      if (typeof this.offset == "number") {
        this.range = new Be(this.offset, this.offset + 1);
        let n = e && Tn(this.offset, e);
        if (n) {
          let r = { line: n.line, col: n.col + 1 };
          this.linePos = { start: n, end: r };
        }
        delete this.offset;
      } else this.range = this.source.range, this.linePos = this.source.rangeAsLinePos;
      if (this.linePos) {
        let { line: n, col: r } = this.linePos.start;
        this.message += ` at line ${n}, column ${r}`;
        let s = e && Mo(this.linePos, e);
        s && (this.message += `:

${s}
`);
      }
      delete this.source;
    }
  }, Cn = class extends ye {
    constructor(e, n) {
      super("YAMLReferenceError", e, n);
    }
  }, ft = class extends ye {
    constructor(e, n) {
      super("YAMLSemanticError", e, n);
    }
  }, Mn = class extends ye {
    constructor(e, n) {
      super("YAMLSyntaxError", e, n);
    }
  }, kn = class extends ye {
    constructor(e, n) {
      super("YAMLWarning", e, n);
    }
  };
  function ko(t, e, n) {
    return e in t ? Object.defineProperty(t, e, { value: n, enumerable: true, configurable: true, writable: true }) : t[e] = n, t;
  }
  var vn = class t extends se {
    static endOfLine(e, n, r) {
      let s = e[n], i = n;
      for (; s && s !== `
` && !(r && (s === "[" || s === "]" || s === "{" || s === "}" || s === ",")); ) {
        let o = e[i + 1];
        if (s === ":" && (!o || o === `
` || o === "	" || o === " " || r && o === ",") || (s === " " || s === "	") && o === "#") break;
        i += 1, s = o;
      }
      return i;
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null;
      let { start: e, end: n } = this.valueRange, { src: r } = this.context, s = r[n - 1];
      for (; e < n && (s === `
` || s === "	" || s === " "); ) s = r[--n - 1];
      let i = "";
      for (let a = e; a < n; ++a) {
        let c = r[a];
        if (c === `
`) {
          let { fold: l, offset: f } = se.foldNewline(r, a, -1);
          i += l, a = f;
        } else if (c === " " || c === "	") {
          let l = a, f = r[a + 1];
          for (; a < n && (f === " " || f === "	"); ) a += 1, f = r[a + 1];
          f !== `
` && (i += a > l ? r.slice(l, a + 1) : c);
        } else i += c;
      }
      let o = r[e];
      switch (o) {
        case "	": {
          let a = "Plain value cannot start with a tab character";
          return { errors: [new ft(this, a)], str: i };
        }
        case "@":
        case "`": {
          let a = `Plain value cannot start with reserved character ${o}`;
          return { errors: [new ft(this, a)], str: i };
        }
        default:
          return i;
      }
    }
    parseBlockValue(e) {
      let { indent: n, inFlow: r, src: s } = this.context, i = e, o = e;
      for (let a = s[i]; a === `
` && !se.atDocumentBoundary(s, i + 1); a = s[i]) {
        let c = se.endOfBlockIndent(s, n, i + 1);
        if (c === null || s[c] === "#") break;
        s[c] === `
` ? i = c : (o = t.endOfLine(s, c, r), i = o);
      }
      return this.valueRange.isEmpty() && (this.valueRange.start = e), this.valueRange.end = o, o;
    }
    parse(e, n) {
      this.context = e;
      let { inFlow: r, src: s } = e, i = n, o = s[i];
      return o && o !== "#" && o !== `
` && (i = t.endOfLine(s, n, r)), this.valueRange = new Be(n, i), i = se.endOfWhiteSpace(s, i), i = this.parseComment(i), (!this.hasComment || this.valueRange.isEmpty()) && (i = this.parseBlockValue(i)), i;
    }
  };
  U.Char = re;
  U.Node = se;
  U.PlainValue = vn;
  U.Range = Be;
  U.Type = lt;
  U.YAMLError = ye;
  U.YAMLReferenceError = Cn;
  U.YAMLSemanticError = ft;
  U.YAMLSyntaxError = Mn;
  U.YAMLWarning = kn;
  U._defineProperty = ko;
  U.defaultTagPrefix = Ao;
  U.defaultTags = To;
});
var Rs = te((xs) => {
  var u = le(), Se = class extends u.Node {
    constructor() {
      super(u.Type.BLANK_LINE);
    }
    get includesTrailingLines() {
      return true;
    }
    parse(e, n) {
      return this.context = e, this.range = new u.Range(n, n + 1), n + 1;
    }
  }, ut = class extends u.Node {
    constructor(e, n) {
      super(e, n), this.node = null;
    }
    get includesTrailingLines() {
      return !!this.node && this.node.includesTrailingLines;
    }
    parse(e, n) {
      this.context = e;
      let { parseNode: r, src: s } = e, { atLineStart: i, lineStart: o } = e;
      !i && this.type === u.Type.SEQ_ITEM && (this.error = new u.YAMLSemanticError(this, "Sequence items must not have preceding content on the same line"));
      let a = i ? n - o : e.indent, c = u.Node.endOfWhiteSpace(s, n + 1), l = s[c], f = l === "#", m = [], d = null;
      for (; l === `
` || l === "#"; ) {
        if (l === "#") {
          let h = u.Node.endOfLine(s, c + 1);
          m.push(new u.Range(c, h)), c = h;
        } else {
          i = true, o = c + 1;
          let h = u.Node.endOfWhiteSpace(s, o);
          s[h] === `
` && m.length === 0 && (d = new Se(), o = d.parse({ src: s }, o)), c = u.Node.endOfIndent(s, o);
        }
        l = s[c];
      }
      if (u.Node.nextNodeIsIndented(l, c - (o + a), this.type !== u.Type.SEQ_ITEM) ? this.node = r({ atLineStart: i, inCollection: false, indent: a, lineStart: o, parent: this }, c) : l && o > n + 1 && (c = o - 1), this.node) {
        if (d) {
          let h = e.parent.items || e.parent.contents;
          h && h.push(d);
        }
        m.length && Array.prototype.push.apply(this.props, m), c = this.node.range.end;
      } else if (f) {
        let h = m[0];
        this.props.push(h), c = h.end;
      } else c = u.Node.endOfLine(s, n + 1);
      let y = this.node ? this.node.valueRange.end : c;
      return this.valueRange = new u.Range(n, y), c;
    }
    setOrigRanges(e, n) {
      return n = super.setOrigRanges(e, n), this.node ? this.node.setOrigRanges(e, n) : n;
    }
    toString() {
      let { context: { src: e }, node: n, range: r, value: s } = this;
      if (s != null) return s;
      let i = n ? e.slice(r.start, n.range.start) + String(n) : e.slice(r.start, r.end);
      return u.Node.addStringTerminator(e, r.end, i);
    }
  }, Ee = class extends u.Node {
    constructor() {
      super(u.Type.COMMENT);
    }
    parse(e, n) {
      this.context = e;
      let r = this.parseComment(n);
      return this.range = new u.Range(n, r), r;
    }
  };
  function In(t) {
    let e = t;
    for (; e instanceof ut; ) e = e.node;
    if (!(e instanceof $t)) return null;
    let n = e.items.length, r = -1;
    for (let o = n - 1; o >= 0; --o) {
      let a = e.items[o];
      if (a.type === u.Type.COMMENT) {
        let { indent: c, lineStart: l } = a.context;
        if (c > 0 && a.range.start >= l + c) break;
        r = o;
      } else if (a.type === u.Type.BLANK_LINE) r = o;
      else break;
    }
    if (r === -1) return null;
    let s = e.items.splice(r, n - r), i = s[0].range.start;
    for (; e.range.end = i, e.valueRange && e.valueRange.end > i && (e.valueRange.end = i), e !== t; ) e = e.context.parent;
    return s;
  }
  var $t = class t extends u.Node {
    static nextContentHasIndent(e, n, r) {
      let s = u.Node.endOfLine(e, n) + 1;
      n = u.Node.endOfWhiteSpace(e, s);
      let i = e[n];
      return i ? n >= s + r ? true : i !== "#" && i !== `
` ? false : t.nextContentHasIndent(e, n, r) : false;
    }
    constructor(e) {
      super(e.type === u.Type.SEQ_ITEM ? u.Type.SEQ : u.Type.MAP);
      for (let r = e.props.length - 1; r >= 0; --r) if (e.props[r].start < e.context.lineStart) {
        this.props = e.props.slice(0, r + 1), e.props = e.props.slice(r + 1);
        let s = e.props[0] || e.valueRange;
        e.range.start = s.start;
        break;
      }
      this.items = [e];
      let n = In(e);
      n && Array.prototype.push.apply(this.items, n);
    }
    get includesTrailingLines() {
      return this.items.length > 0;
    }
    parse(e, n) {
      this.context = e;
      let { parseNode: r, src: s } = e, i = u.Node.startOfLine(s, n), o = this.items[0];
      o.context.parent = this, this.valueRange = u.Range.copy(o.valueRange);
      let a = o.range.start - o.context.lineStart, c = n;
      c = u.Node.normalizeOffset(s, c);
      let l = s[c], f = u.Node.endOfWhiteSpace(s, i) === c, m = false;
      for (; l; ) {
        for (; l === `
` || l === "#"; ) {
          if (f && l === `
` && !m) {
            let h = new Se();
            if (c = h.parse({ src: s }, c), this.valueRange.end = c, c >= s.length) {
              l = null;
              break;
            }
            this.items.push(h), c -= 1;
          } else if (l === "#") {
            if (c < i + a && !t.nextContentHasIndent(s, c, a)) return c;
            let h = new Ee();
            if (c = h.parse({ indent: a, lineStart: i, src: s }, c), this.items.push(h), this.valueRange.end = c, c >= s.length) {
              l = null;
              break;
            }
          }
          if (i = c + 1, c = u.Node.endOfIndent(s, i), u.Node.atBlank(s, c)) {
            let h = u.Node.endOfWhiteSpace(s, c), g = s[h];
            (!g || g === `
` || g === "#") && (c = h);
          }
          l = s[c], f = true;
        }
        if (!l) break;
        if (c !== i + a && (f || l !== ":")) {
          if (c < i + a) {
            i > n && (c = i);
            break;
          } else if (!this.error) {
            let h = "All collection items must start at the same column";
            this.error = new u.YAMLSyntaxError(this, h);
          }
        }
        if (o.type === u.Type.SEQ_ITEM) {
          if (l !== "-") {
            i > n && (c = i);
            break;
          }
        } else if (l === "-" && !this.error) {
          let h = s[c + 1];
          if (!h || h === `
` || h === "	" || h === " ") {
            let g = "A collection cannot be both a mapping and a sequence";
            this.error = new u.YAMLSyntaxError(this, g);
          }
        }
        let d = r({ atLineStart: f, inCollection: true, indent: a, lineStart: i, parent: this }, c);
        if (!d) return c;
        if (this.items.push(d), this.valueRange.end = d.valueRange.end, c = u.Node.normalizeOffset(s, d.range.end), l = s[c], f = false, m = d.includesTrailingLines, l) {
          let h = c - 1, g = s[h];
          for (; g === " " || g === "	"; ) g = s[--h];
          g === `
` && (i = h + 1, f = true);
        }
        let y = In(d);
        y && Array.prototype.push.apply(this.items, y);
      }
      return c;
    }
    setOrigRanges(e, n) {
      return n = super.setOrigRanges(e, n), this.items.forEach((r) => {
        n = r.setOrigRanges(e, n);
      }), n;
    }
    toString() {
      let { context: { src: e }, items: n, range: r, value: s } = this;
      if (s != null) return s;
      let i = e.slice(r.start, n[0].range.start) + String(n[0]);
      for (let o = 1; o < n.length; ++o) {
        let a = n[o], { atLineStart: c, indent: l } = a.context;
        if (c) for (let f = 0; f < l; ++f) i += " ";
        i += String(a);
      }
      return u.Node.addStringTerminator(e, r.end, i);
    }
  }, Pn = class extends u.Node {
    constructor() {
      super(u.Type.DIRECTIVE), this.name = null;
    }
    get parameters() {
      let e = this.rawValue;
      return e ? e.trim().split(/[ \t]+/) : [];
    }
    parseName(e) {
      let { src: n } = this.context, r = e, s = n[r];
      for (; s && s !== `
` && s !== "	" && s !== " "; ) s = n[r += 1];
      return this.name = n.slice(e, r), r;
    }
    parseParameters(e) {
      let { src: n } = this.context, r = e, s = n[r];
      for (; s && s !== `
` && s !== "#"; ) s = n[r += 1];
      return this.valueRange = new u.Range(e, r), r;
    }
    parse(e, n) {
      this.context = e;
      let r = this.parseName(n + 1);
      return r = this.parseParameters(r), r = this.parseComment(r), this.range = new u.Range(n, r), r;
    }
  }, _n = class t extends u.Node {
    static startCommentOrEndBlankLine(e, n) {
      let r = u.Node.endOfWhiteSpace(e, n), s = e[r];
      return s === "#" || s === `
` ? r : n;
    }
    constructor() {
      super(u.Type.DOCUMENT), this.directives = null, this.contents = null, this.directivesEndMarker = null, this.documentEndMarker = null;
    }
    parseDirectives(e) {
      let { src: n } = this.context;
      this.directives = [];
      let r = true, s = false, i = e;
      for (; !u.Node.atDocumentBoundary(n, i, u.Char.DIRECTIVES_END); ) switch (i = t.startCommentOrEndBlankLine(n, i), n[i]) {
        case `
`:
          if (r) {
            let o = new Se();
            i = o.parse({ src: n }, i), i < n.length && this.directives.push(o);
          } else i += 1, r = true;
          break;
        case "#":
          {
            let o = new Ee();
            i = o.parse({ src: n }, i), this.directives.push(o), r = false;
          }
          break;
        case "%":
          {
            let o = new Pn();
            i = o.parse({ parent: this, src: n }, i), this.directives.push(o), s = true, r = false;
          }
          break;
        default:
          return s ? this.error = new u.YAMLSemanticError(this, "Missing directives-end indicator line") : this.directives.length > 0 && (this.contents = this.directives, this.directives = []), i;
      }
      return n[i] ? (this.directivesEndMarker = new u.Range(i, i + 3), i + 3) : (s ? this.error = new u.YAMLSemanticError(this, "Missing directives-end indicator line") : this.directives.length > 0 && (this.contents = this.directives, this.directives = []), i);
    }
    parseContents(e) {
      let { parseNode: n, src: r } = this.context;
      this.contents || (this.contents = []);
      let s = e;
      for (; r[s - 1] === "-"; ) s -= 1;
      let i = u.Node.endOfWhiteSpace(r, e), o = s === e;
      for (this.valueRange = new u.Range(i); !u.Node.atDocumentBoundary(r, i, u.Char.DOCUMENT_END); ) {
        switch (r[i]) {
          case `
`:
            if (o) {
              let a = new Se();
              i = a.parse({ src: r }, i), i < r.length && this.contents.push(a);
            } else i += 1, o = true;
            s = i;
            break;
          case "#":
            {
              let a = new Ee();
              i = a.parse({ src: r }, i), this.contents.push(a), o = false;
            }
            break;
          default: {
            let a = u.Node.endOfIndent(r, i), l = n({ atLineStart: o, indent: -1, inFlow: false, inCollection: false, lineStart: s, parent: this }, a);
            if (!l) return this.valueRange.end = a;
            this.contents.push(l), i = l.range.end, o = false;
            let f = In(l);
            f && Array.prototype.push.apply(this.contents, f);
          }
        }
        i = t.startCommentOrEndBlankLine(r, i);
      }
      if (this.valueRange.end = i, r[i] && (this.documentEndMarker = new u.Range(i, i + 3), i += 3, r[i])) {
        if (i = u.Node.endOfWhiteSpace(r, i), r[i] === "#") {
          let a = new Ee();
          i = a.parse({ src: r }, i), this.contents.push(a);
        }
        switch (r[i]) {
          case `
`:
            i += 1;
            break;
          case void 0:
            break;
          default:
            this.error = new u.YAMLSyntaxError(this, "Document end marker line cannot have a non-comment suffix");
        }
      }
      return i;
    }
    parse(e, n) {
      e.root = this, this.context = e;
      let { src: r } = e, s = r.charCodeAt(n) === 65279 ? n + 1 : n;
      return s = this.parseDirectives(s), s = this.parseContents(s), s;
    }
    setOrigRanges(e, n) {
      return n = super.setOrigRanges(e, n), this.directives.forEach((r) => {
        n = r.setOrigRanges(e, n);
      }), this.directivesEndMarker && (n = this.directivesEndMarker.setOrigRange(e, n)), this.contents.forEach((r) => {
        n = r.setOrigRanges(e, n);
      }), this.documentEndMarker && (n = this.documentEndMarker.setOrigRange(e, n)), n;
    }
    toString() {
      let { contents: e, directives: n, value: r } = this;
      if (r != null) return r;
      let s = n.join("");
      return e.length > 0 && ((n.length > 0 || e[0].type === u.Type.COMMENT) && (s += `---
`), s += e.join("")), s[s.length - 1] !== `
` && (s += `
`), s;
    }
  }, xn = class extends u.Node {
    parse(e, n) {
      this.context = e;
      let { src: r } = e, s = u.Node.endOfIdentifier(r, n + 1);
      return this.valueRange = new u.Range(n + 1, s), s = u.Node.endOfWhiteSpace(r, s), s = this.parseComment(s), s;
    }
  }, fe = { CLIP: "CLIP", KEEP: "KEEP", STRIP: "STRIP" }, Rn = class extends u.Node {
    constructor(e, n) {
      super(e, n), this.blockIndent = null, this.chomping = fe.CLIP, this.header = null;
    }
    get includesTrailingLines() {
      return this.chomping === fe.KEEP;
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null;
      let { start: e, end: n } = this.valueRange, { indent: r, src: s } = this.context;
      if (this.valueRange.isEmpty()) return "";
      let i = null, o = s[n - 1];
      for (; o === `
` || o === "	" || o === " "; ) {
        if (n -= 1, n <= e) {
          if (this.chomping === fe.KEEP) break;
          return "";
        }
        o === `
` && (i = n), o = s[n - 1];
      }
      let a = n + 1;
      i && (this.chomping === fe.KEEP ? (a = i, n = this.valueRange.end) : n = i);
      let c = r + this.blockIndent, l = this.type === u.Type.BLOCK_FOLDED, f = true, m = "", d = "", y = false;
      for (let h = e; h < n; ++h) {
        for (let w = 0; w < c && s[h] === " "; ++w) h += 1;
        let g = s[h];
        if (g === `
`) d === `
` ? m += `
` : d = `
`;
        else {
          let w = u.Node.endOfLine(s, h), C = s.slice(h, w);
          h = w, l && (g === " " || g === "	") && h < a ? (d === " " ? d = `
` : !y && !f && d === `
` && (d = `

`), m += d + C, d = w < n && s[w] || "", y = true) : (m += d + C, d = l && h < a ? " " : `
`, y = false), f && C !== "" && (f = false);
        }
      }
      return this.chomping === fe.STRIP ? m : m + `
`;
    }
    parseBlockHeader(e) {
      let { src: n } = this.context, r = e + 1, s = "";
      for (; ; ) {
        let i = n[r];
        switch (i) {
          case "-":
            this.chomping = fe.STRIP;
            break;
          case "+":
            this.chomping = fe.KEEP;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            s += i;
            break;
          default:
            return this.blockIndent = Number(s) || null, this.header = new u.Range(e, r), r;
        }
        r += 1;
      }
    }
    parseBlockValue(e) {
      let { indent: n, src: r } = this.context, s = !!this.blockIndent, i = e, o = e, a = 1;
      for (let c = r[i]; c === `
` && (i += 1, !u.Node.atDocumentBoundary(r, i)); c = r[i]) {
        let l = u.Node.endOfBlockIndent(r, n, i);
        if (l === null) break;
        let f = r[l], m = l - (i + n);
        if (this.blockIndent) {
          if (f && f !== `
` && m < this.blockIndent) {
            if (r[l] === "#") break;
            if (!this.error) {
              let y = `Block scalars must not be less indented than their ${s ? "explicit indentation indicator" : "first line"}`;
              this.error = new u.YAMLSemanticError(this, y);
            }
          }
        } else if (r[l] !== `
`) {
          if (m < a) {
            let d = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
            this.error = new u.YAMLSemanticError(this, d);
          }
          this.blockIndent = m;
        } else m > a && (a = m);
        r[l] === `
` ? i = l : i = o = u.Node.endOfLine(r, l);
      }
      return this.chomping !== fe.KEEP && (i = r[o] ? o + 1 : o), this.valueRange = new u.Range(e + 1, i), i;
    }
    parse(e, n) {
      this.context = e;
      let { src: r } = e, s = this.parseBlockHeader(n);
      return s = u.Node.endOfWhiteSpace(r, s), s = this.parseComment(s), s = this.parseBlockValue(s), s;
    }
    setOrigRanges(e, n) {
      return n = super.setOrigRanges(e, n), this.header ? this.header.setOrigRange(e, n) : n;
    }
  }, Dn = class extends u.Node {
    constructor(e, n) {
      super(e, n), this.items = null;
    }
    prevNodeIsJsonLike(e = this.items.length) {
      let n = this.items[e - 1];
      return !!n && (n.jsonLike || n.type === u.Type.COMMENT && this.prevNodeIsJsonLike(e - 1));
    }
    parse(e, n) {
      this.context = e;
      let { parseNode: r, src: s } = e, { indent: i, lineStart: o } = e, a = s[n];
      this.items = [{ char: a, offset: n }];
      let c = u.Node.endOfWhiteSpace(s, n + 1);
      for (a = s[c]; a && a !== "]" && a !== "}"; ) {
        switch (a) {
          case `
`:
            {
              o = c + 1;
              let l = u.Node.endOfWhiteSpace(s, o);
              if (s[l] === `
`) {
                let f = new Se();
                o = f.parse({ src: s }, o), this.items.push(f);
              }
              if (c = u.Node.endOfIndent(s, o), c <= o + i && (a = s[c], c < o + i || a !== "]" && a !== "}")) {
                let f = "Insufficient indentation in flow collection";
                this.error = new u.YAMLSemanticError(this, f);
              }
            }
            break;
          case ",":
            this.items.push({ char: a, offset: c }), c += 1;
            break;
          case "#":
            {
              let l = new Ee();
              c = l.parse({ src: s }, c), this.items.push(l);
            }
            break;
          case "?":
          case ":": {
            let l = s[c + 1];
            if (l === `
` || l === "	" || l === " " || l === "," || a === ":" && this.prevNodeIsJsonLike()) {
              this.items.push({ char: a, offset: c }), c += 1;
              break;
            }
          }
          default: {
            let l = r({ atLineStart: false, inCollection: false, inFlow: true, indent: -1, lineStart: o, parent: this }, c);
            if (!l) return this.valueRange = new u.Range(n, c), c;
            this.items.push(l), c = u.Node.normalizeOffset(s, l.range.end);
          }
        }
        c = u.Node.endOfWhiteSpace(s, c), a = s[c];
      }
      return this.valueRange = new u.Range(n, c + 1), a && (this.items.push({ char: a, offset: c }), c = u.Node.endOfWhiteSpace(s, c + 1), c = this.parseComment(c)), c;
    }
    setOrigRanges(e, n) {
      return n = super.setOrigRanges(e, n), this.items.forEach((r) => {
        if (r instanceof u.Node) n = r.setOrigRanges(e, n);
        else if (e.length === 0) r.origOffset = r.offset;
        else {
          let s = n;
          for (; s < e.length && !(e[s] > r.offset); ) ++s;
          r.origOffset = r.offset + s, n = s;
        }
      }), n;
    }
    toString() {
      let { context: { src: e }, items: n, range: r, value: s } = this;
      if (s != null) return s;
      let i = n.filter((c) => c instanceof u.Node), o = "", a = r.start;
      return i.forEach((c) => {
        let l = e.slice(a, c.range.start);
        a = c.range.end, o += l + String(c), o[o.length - 1] === `
` && e[a - 1] !== `
` && e[a] === `
` && (a += 1);
      }), o += e.slice(a, r.end), u.Node.addStringTerminator(e, r.end, o);
    }
  }, Yn = class t extends u.Node {
    static endOfQuote(e, n) {
      let r = e[n];
      for (; r && r !== '"'; ) n += r === "\\" ? 2 : 1, r = e[n];
      return n + 1;
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null;
      let e = [], { start: n, end: r } = this.valueRange, { indent: s, src: i } = this.context;
      i[r - 1] !== '"' && e.push(new u.YAMLSyntaxError(this, 'Missing closing "quote'));
      let o = "";
      for (let a = n + 1; a < r - 1; ++a) {
        let c = i[a];
        if (c === `
`) {
          u.Node.atDocumentBoundary(i, a + 1) && e.push(new u.YAMLSemanticError(this, "Document boundary indicators are not allowed within string values"));
          let { fold: l, offset: f, error: m } = u.Node.foldNewline(i, a, s);
          o += l, a = f, m && e.push(new u.YAMLSemanticError(this, "Multi-line double-quoted string needs to be sufficiently indented"));
        } else if (c === "\\") switch (a += 1, i[a]) {
          case "0":
            o += "\0";
            break;
          case "a":
            o += "\x07";
            break;
          case "b":
            o += "\b";
            break;
          case "e":
            o += "\x1B";
            break;
          case "f":
            o += "\f";
            break;
          case "n":
            o += `
`;
            break;
          case "r":
            o += "\r";
            break;
          case "t":
            o += "	";
            break;
          case "v":
            o += "\v";
            break;
          case "N":
            o += "";
            break;
          case "_":
            o += " ";
            break;
          case "L":
            o += "\u2028";
            break;
          case "P":
            o += "\u2029";
            break;
          case " ":
            o += " ";
            break;
          case '"':
            o += '"';
            break;
          case "/":
            o += "/";
            break;
          case "\\":
            o += "\\";
            break;
          case "	":
            o += "	";
            break;
          case "x":
            o += this.parseCharCode(a + 1, 2, e), a += 2;
            break;
          case "u":
            o += this.parseCharCode(a + 1, 4, e), a += 4;
            break;
          case "U":
            o += this.parseCharCode(a + 1, 8, e), a += 8;
            break;
          case `
`:
            for (; i[a + 1] === " " || i[a + 1] === "	"; ) a += 1;
            break;
          default:
            e.push(new u.YAMLSyntaxError(this, `Invalid escape sequence ${i.substr(a - 1, 2)}`)), o += "\\" + i[a];
        }
        else if (c === " " || c === "	") {
          let l = a, f = i[a + 1];
          for (; f === " " || f === "	"; ) a += 1, f = i[a + 1];
          f !== `
` && (o += a > l ? i.slice(l, a + 1) : c);
        } else o += c;
      }
      return e.length > 0 ? { errors: e, str: o } : o;
    }
    parseCharCode(e, n, r) {
      let { src: s } = this.context, i = s.substr(e, n), a = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
      return isNaN(a) ? (r.push(new u.YAMLSyntaxError(this, `Invalid escape sequence ${s.substr(e - 2, n + 2)}`)), s.substr(e - 2, n + 2)) : String.fromCodePoint(a);
    }
    parse(e, n) {
      this.context = e;
      let { src: r } = e, s = t.endOfQuote(r, n + 1);
      return this.valueRange = new u.Range(n, s), s = u.Node.endOfWhiteSpace(r, s), s = this.parseComment(s), s;
    }
  }, $n = class t extends u.Node {
    static endOfQuote(e, n) {
      let r = e[n];
      for (; r; ) if (r === "'") {
        if (e[n + 1] !== "'") break;
        r = e[n += 2];
      } else r = e[n += 1];
      return n + 1;
    }
    get strValue() {
      if (!this.valueRange || !this.context) return null;
      let e = [], { start: n, end: r } = this.valueRange, { indent: s, src: i } = this.context;
      i[r - 1] !== "'" && e.push(new u.YAMLSyntaxError(this, "Missing closing 'quote"));
      let o = "";
      for (let a = n + 1; a < r - 1; ++a) {
        let c = i[a];
        if (c === `
`) {
          u.Node.atDocumentBoundary(i, a + 1) && e.push(new u.YAMLSemanticError(this, "Document boundary indicators are not allowed within string values"));
          let { fold: l, offset: f, error: m } = u.Node.foldNewline(i, a, s);
          o += l, a = f, m && e.push(new u.YAMLSemanticError(this, "Multi-line single-quoted string needs to be sufficiently indented"));
        } else if (c === "'") o += c, a += 1, i[a] !== "'" && e.push(new u.YAMLSyntaxError(this, "Unescaped single quote? This should not happen."));
        else if (c === " " || c === "	") {
          let l = a, f = i[a + 1];
          for (; f === " " || f === "	"; ) a += 1, f = i[a + 1];
          f !== `
` && (o += a > l ? i.slice(l, a + 1) : c);
        } else o += c;
      }
      return e.length > 0 ? { errors: e, str: o } : o;
    }
    parse(e, n) {
      this.context = e;
      let { src: r } = e, s = t.endOfQuote(r, n + 1);
      return this.valueRange = new u.Range(n, s), s = u.Node.endOfWhiteSpace(r, s), s = this.parseComment(s), s;
    }
  };
  function vo(t, e) {
    switch (t) {
      case u.Type.ALIAS:
        return new xn(t, e);
      case u.Type.BLOCK_FOLDED:
      case u.Type.BLOCK_LITERAL:
        return new Rn(t, e);
      case u.Type.FLOW_MAP:
      case u.Type.FLOW_SEQ:
        return new Dn(t, e);
      case u.Type.MAP_KEY:
      case u.Type.MAP_VALUE:
      case u.Type.SEQ_ITEM:
        return new ut(t, e);
      case u.Type.COMMENT:
      case u.Type.PLAIN:
        return new u.PlainValue(t, e);
      case u.Type.QUOTE_DOUBLE:
        return new Yn(t, e);
      case u.Type.QUOTE_SINGLE:
        return new $n(t, e);
      default:
        return null;
    }
  }
  var Bn = class t {
    static parseType(e, n, r) {
      switch (e[n]) {
        case "*":
          return u.Type.ALIAS;
        case ">":
          return u.Type.BLOCK_FOLDED;
        case "|":
          return u.Type.BLOCK_LITERAL;
        case "{":
          return u.Type.FLOW_MAP;
        case "[":
          return u.Type.FLOW_SEQ;
        case "?":
          return !r && u.Node.atBlank(e, n + 1, true) ? u.Type.MAP_KEY : u.Type.PLAIN;
        case ":":
          return !r && u.Node.atBlank(e, n + 1, true) ? u.Type.MAP_VALUE : u.Type.PLAIN;
        case "-":
          return !r && u.Node.atBlank(e, n + 1, true) ? u.Type.SEQ_ITEM : u.Type.PLAIN;
        case '"':
          return u.Type.QUOTE_DOUBLE;
        case "'":
          return u.Type.QUOTE_SINGLE;
        default:
          return u.Type.PLAIN;
      }
    }
    constructor(e = {}, { atLineStart: n, inCollection: r, inFlow: s, indent: i, lineStart: o, parent: a } = {}) {
      u._defineProperty(this, "parseNode", (c, l) => {
        if (u.Node.atDocumentBoundary(this.src, l)) return null;
        let f = new t(this, c), { props: m, type: d, valueStart: y } = f.parseProps(l), h = vo(d, m), g = h.parse(f, y);
        if (h.range = new u.Range(l, g), g <= l && (h.error = new Error("Node#parse consumed no characters"), h.error.parseEnd = g, h.error.source = h, h.range.end = l + 1), f.nodeStartsCollection(h)) {
          !h.error && !f.atLineStart && f.parent.type === u.Type.DOCUMENT && (h.error = new u.YAMLSyntaxError(h, "Block collection must not have preceding content here (e.g. directives-end indicator)"));
          let w = new $t(h);
          return g = w.parse(new t(f), g), w.range = new u.Range(l, g), w;
        }
        return h;
      }), this.atLineStart = n ?? (e.atLineStart || false), this.inCollection = r ?? (e.inCollection || false), this.inFlow = s ?? (e.inFlow || false), this.indent = i ?? e.indent, this.lineStart = o ?? e.lineStart, this.parent = a ?? (e.parent || {}), this.root = e.root, this.src = e.src;
    }
    nodeStartsCollection(e) {
      let { inCollection: n, inFlow: r, src: s } = this;
      if (n || r) return false;
      if (e instanceof ut) return true;
      let i = e.range.end;
      return s[i] === `
` || s[i - 1] === `
` ? false : (i = u.Node.endOfWhiteSpace(s, i), s[i] === ":");
    }
    parseProps(e) {
      let { inFlow: n, parent: r, src: s } = this, i = [], o = false;
      e = this.atLineStart ? u.Node.endOfIndent(s, e) : u.Node.endOfWhiteSpace(s, e);
      let a = s[e];
      for (; a === u.Char.ANCHOR || a === u.Char.COMMENT || a === u.Char.TAG || a === `
`; ) {
        if (a === `
`) {
          let l = e, f;
          do
            f = l + 1, l = u.Node.endOfIndent(s, f);
          while (s[l] === `
`);
          let m = l - (f + this.indent), d = r.type === u.Type.SEQ_ITEM && r.context.atLineStart;
          if (s[l] !== "#" && !u.Node.nextNodeIsIndented(s[l], m, !d)) break;
          this.atLineStart = true, this.lineStart = f, o = false, e = l;
        } else if (a === u.Char.COMMENT) {
          let l = u.Node.endOfLine(s, e + 1);
          i.push(new u.Range(e, l)), e = l;
        } else {
          let l = u.Node.endOfIdentifier(s, e + 1);
          a === u.Char.TAG && s[l] === "," && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(s.slice(e + 1, l + 13)) && (l = u.Node.endOfIdentifier(s, l + 5)), i.push(new u.Range(e, l)), o = true, e = u.Node.endOfWhiteSpace(s, l);
        }
        a = s[e];
      }
      o && a === ":" && u.Node.atBlank(s, e + 1, true) && (e -= 1);
      let c = t.parseType(s, e, n);
      return { props: i, type: c, valueStart: e };
    }
  };
  function Io(t) {
    let e = [];
    t.indexOf("\r") !== -1 && (t = t.replace(/\r\n?/g, (s, i) => (s.length > 1 && e.push(i), `
`)));
    let n = [], r = 0;
    do {
      let s = new _n(), i = new Bn({ src: t });
      r = s.parse(i, r), n.push(s);
    } while (r < t.length);
    return n.setOrigRanges = () => {
      if (e.length === 0) return false;
      for (let i = 1; i < e.length; ++i) e[i] -= i;
      let s = 0;
      for (let i = 0; i < n.length; ++i) s = n[i].setOrigRanges(e, s);
      return e.splice(0, e.length), true;
    }, n.toString = () => n.join(`...
`), n;
  }
  xs.parse = Io;
});
var qe = te((k) => {
  var p = le();
  function Po(t, e, n) {
    return n ? `#${n.replace(/[\s\S]^/gm, `$&${e}#`)}
${e}${t}` : t;
  }
  function Fe(t, e, n) {
    return n ? n.indexOf(`
`) === -1 ? `${t} #${n}` : `${t}
` + n.replace(/^/gm, `${e || ""}#`) : t;
  }
  var W = class {
  };
  function ue(t, e, n) {
    if (Array.isArray(t)) return t.map((r, s) => ue(r, String(s), n));
    if (t && typeof t.toJSON == "function") {
      let r = n && n.anchors && n.anchors.get(t);
      r && (n.onCreate = (i) => {
        r.res = i, delete n.onCreate;
      });
      let s = t.toJSON(e, n);
      return r && n.onCreate && n.onCreate(s), s;
    }
    return (!n || !n.keep) && typeof t == "bigint" ? Number(t) : t;
  }
  var P = class extends W {
    constructor(e) {
      super(), this.value = e;
    }
    toJSON(e, n) {
      return n && n.keep ? this.value : ue(this.value, e, n);
    }
    toString() {
      return String(this.value);
    }
  };
  function Ds(t, e, n) {
    let r = n;
    for (let s = e.length - 1; s >= 0; --s) {
      let i = e[s];
      if (Number.isInteger(i) && i >= 0) {
        let o = [];
        o[i] = r, r = o;
      } else {
        let o = {};
        Object.defineProperty(o, i, { value: r, writable: true, enumerable: true, configurable: true }), r = o;
      }
    }
    return t.createNode(r, false);
  }
  var Bs = (t) => t == null || typeof t == "object" && t[Symbol.iterator]().next().done, j = class t extends W {
    constructor(e) {
      super(), p._defineProperty(this, "items", []), this.schema = e;
    }
    addIn(e, n) {
      if (Bs(e)) this.add(n);
      else {
        let [r, ...s] = e, i = this.get(r, true);
        if (i instanceof t) i.addIn(s, n);
        else if (i === void 0 && this.schema) this.set(r, Ds(this.schema, s, n));
        else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`);
      }
    }
    deleteIn([e, ...n]) {
      if (n.length === 0) return this.delete(e);
      let r = this.get(e, true);
      if (r instanceof t) return r.deleteIn(n);
      throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`);
    }
    getIn([e, ...n], r) {
      let s = this.get(e, true);
      return n.length === 0 ? !r && s instanceof P ? s.value : s : s instanceof t ? s.getIn(n, r) : void 0;
    }
    hasAllNullValues() {
      return this.items.every((e) => {
        if (!e || e.type !== "PAIR") return false;
        let n = e.value;
        return n == null || n instanceof P && n.value == null && !n.commentBefore && !n.comment && !n.tag;
      });
    }
    hasIn([e, ...n]) {
      if (n.length === 0) return this.has(e);
      let r = this.get(e, true);
      return r instanceof t ? r.hasIn(n) : false;
    }
    setIn([e, ...n], r) {
      if (n.length === 0) this.set(e, r);
      else {
        let s = this.get(e, true);
        if (s instanceof t) s.setIn(n, r);
        else if (s === void 0 && this.schema) this.set(e, Ds(this.schema, n, r));
        else throw new Error(`Expected YAML collection at ${e}. Remaining path: ${n}`);
      }
    }
    toJSON() {
      return null;
    }
    toString(e, { blockItem: n, flowChars: r, isMap: s, itemIndent: i }, o, a) {
      let { indent: c, indentStep: l, stringify: f } = e, m = this.type === p.Type.FLOW_MAP || this.type === p.Type.FLOW_SEQ || e.inFlow;
      m && (i += l);
      let d = s && this.hasAllNullValues();
      e = Object.assign({}, e, { allNullValues: d, indent: i, inFlow: m, type: null });
      let y = false, h = false, g = this.items.reduce((C, L, M) => {
        let A;
        L && (!y && L.spaceBefore && C.push({ type: "comment", str: "" }), L.commentBefore && L.commentBefore.match(/^.*$/gm).forEach((Ai) => {
          C.push({ type: "comment", str: `#${Ai}` });
        }), L.comment && (A = L.comment), m && (!y && L.spaceBefore || L.commentBefore || L.comment || L.key && (L.key.commentBefore || L.key.comment) || L.value && (L.value.commentBefore || L.value.comment)) && (h = true)), y = false;
        let _ = f(L, e, () => A = null, () => y = true);
        return m && !h && _.includes(`
`) && (h = true), m && M < this.items.length - 1 && (_ += ","), _ = Fe(_, i, A), y && (A || m) && (y = false), C.push({ type: "item", str: _ }), C;
      }, []), w;
      if (g.length === 0) w = r.start + r.end;
      else if (m) {
        let { start: C, end: L } = r, M = g.map((A) => A.str);
        if (h || M.reduce((A, _) => A + _.length + 2, 2) > t.maxFlowStringSingleLineLength) {
          w = C;
          for (let A of M) w += A ? `
${l}${c}${A}` : `
`;
          w += `
${c}${L}`;
        } else w = `${C} ${M.join(" ")} ${L}`;
      } else {
        let C = g.map(n);
        w = C.shift();
        for (let L of C) w += L ? `
${c}${L}` : `
`;
      }
      return this.comment ? (w += `
` + this.comment.replace(/^/gm, `${c}#`), o && o()) : y && a && a(), w;
    }
  };
  p._defineProperty(j, "maxFlowStringSingleLineLength", 60);
  function Bt(t) {
    let e = t instanceof P ? t.value : t;
    return e && typeof e == "string" && (e = Number(e)), Number.isInteger(e) && e >= 0 ? e : null;
  }
  var pe = class extends j {
    add(e) {
      this.items.push(e);
    }
    delete(e) {
      let n = Bt(e);
      return typeof n != "number" ? false : this.items.splice(n, 1).length > 0;
    }
    get(e, n) {
      let r = Bt(e);
      if (typeof r != "number") return;
      let s = this.items[r];
      return !n && s instanceof P ? s.value : s;
    }
    has(e) {
      let n = Bt(e);
      return typeof n == "number" && n < this.items.length;
    }
    set(e, n) {
      let r = Bt(e);
      if (typeof r != "number") throw new Error(`Expected a valid index, not ${e}.`);
      this.items[r] = n;
    }
    toJSON(e, n) {
      let r = [];
      n && n.onCreate && n.onCreate(r);
      let s = 0;
      for (let i of this.items) r.push(ue(i, String(s++), n));
      return r;
    }
    toString(e, n, r) {
      return e ? super.toString(e, { blockItem: (s) => s.type === "comment" ? s.str : `- ${s.str}`, flowChars: { start: "[", end: "]" }, isMap: false, itemIndent: (e.indent || "") + "  " }, n, r) : JSON.stringify(this);
    }
  }, _o = (t, e, n) => e === null ? "" : typeof e != "object" ? String(e) : t instanceof W && n && n.doc ? t.toString({ anchors: /* @__PURE__ */ Object.create(null), doc: n.doc, indent: "", indentStep: n.indentStep, inFlow: true, inStringifyKey: true, stringify: n.stringify }) : JSON.stringify(e), T = class t extends W {
    constructor(e, n = null) {
      super(), this.key = e, this.value = n, this.type = t.Type.PAIR;
    }
    get commentBefore() {
      return this.key instanceof W ? this.key.commentBefore : void 0;
    }
    set commentBefore(e) {
      if (this.key == null && (this.key = new P(null)), this.key instanceof W) this.key.commentBefore = e;
      else {
        let n = "Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.";
        throw new Error(n);
      }
    }
    addToJSMap(e, n) {
      let r = ue(this.key, "", e);
      if (n instanceof Map) {
        let s = ue(this.value, r, e);
        n.set(r, s);
      } else if (n instanceof Set) n.add(r);
      else {
        let s = _o(this.key, r, e), i = ue(this.value, s, e);
        s in n ? Object.defineProperty(n, s, { value: i, writable: true, enumerable: true, configurable: true }) : n[s] = i;
      }
      return n;
    }
    toJSON(e, n) {
      let r = n && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
      return this.addToJSMap(n, r);
    }
    toString(e, n, r) {
      if (!e || !e.doc) return JSON.stringify(this);
      let { indent: s, indentSeq: i, simpleKeys: o } = e.doc.options, { key: a, value: c } = this, l = a instanceof W && a.comment;
      if (o) {
        if (l) throw new Error("With simple keys, key nodes cannot have comments");
        if (a instanceof j) {
          let _ = "With simple keys, collection cannot be used as a key value";
          throw new Error(_);
        }
      }
      let f = !o && (!a || l || (a instanceof W ? a instanceof j || a.type === p.Type.BLOCK_FOLDED || a.type === p.Type.BLOCK_LITERAL : typeof a == "object")), { doc: m, indent: d, indentStep: y, stringify: h } = e;
      e = Object.assign({}, e, { implicitKey: !f, indent: d + y });
      let g = false, w = h(a, e, () => l = null, () => g = true);
      if (w = Fe(w, e.indent, l), !f && w.length > 1024) {
        if (o) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
        f = true;
      }
      if (e.allNullValues && !o) return this.comment ? (w = Fe(w, e.indent, this.comment), n && n()) : g && !l && r && r(), e.inFlow && !f ? w : `? ${w}`;
      w = f ? `? ${w}
${d}:` : `${w}:`, this.comment && (w = Fe(w, e.indent, this.comment), n && n());
      let C = "", L = null;
      if (c instanceof W) {
        if (c.spaceBefore && (C = `
`), c.commentBefore) {
          let _ = c.commentBefore.replace(/^/gm, `${e.indent}#`);
          C += `
${_}`;
        }
        L = c.comment;
      } else c && typeof c == "object" && (c = m.schema.createNode(c, true));
      e.implicitKey = false, !f && !this.comment && c instanceof P && (e.indentAtStart = w.length + 1), g = false, !i && s >= 2 && !e.inFlow && !f && c instanceof pe && c.type !== p.Type.FLOW_SEQ && !c.tag && !m.anchors.getName(c) && (e.indent = e.indent.substr(2));
      let M = h(c, e, () => L = null, () => g = true), A = " ";
      return C || this.comment ? A = `${C}
${e.indent}` : !f && c instanceof j ? (!(M[0] === "[" || M[0] === "{") || M.includes(`
`)) && (A = `
${e.indent}`) : M[0] === `
` && (A = ""), g && !L && r && r(), Fe(w + A + M, e.indent, L);
    }
  };
  p._defineProperty(T, "Type", { PAIR: "PAIR", MERGE_PAIR: "MERGE_PAIR" });
  var Ft = (t, e) => {
    if (t instanceof be) {
      let n = e.get(t.source);
      return n.count * n.aliasCount;
    } else if (t instanceof j) {
      let n = 0;
      for (let r of t.items) {
        let s = Ft(r, e);
        s > n && (n = s);
      }
      return n;
    } else if (t instanceof T) {
      let n = Ft(t.key, e), r = Ft(t.value, e);
      return Math.max(n, r);
    }
    return 1;
  }, be = class t extends W {
    static stringify({ range: e, source: n }, { anchors: r, doc: s, implicitKey: i, inStringifyKey: o }) {
      let a = Object.keys(r).find((l) => r[l] === n);
      if (!a && o && (a = s.anchors.getName(n) || s.anchors.newName()), a) return `*${a}${i ? " " : ""}`;
      let c = s.anchors.getName(n) ? "Alias node must be after source node" : "Source node not found for alias node";
      throw new Error(`${c} [${e}]`);
    }
    constructor(e) {
      super(), this.source = e, this.type = p.Type.ALIAS;
    }
    set tag(e) {
      throw new Error("Alias nodes cannot have tags");
    }
    toJSON(e, n) {
      if (!n) return ue(this.source, e, n);
      let { anchors: r, maxAliasCount: s } = n, i = r.get(this.source);
      if (!i || i.res === void 0) {
        let o = "This should not happen: Alias anchor was not resolved?";
        throw this.cstNode ? new p.YAMLReferenceError(this.cstNode, o) : new ReferenceError(o);
      }
      if (s >= 0 && (i.count += 1, i.aliasCount === 0 && (i.aliasCount = Ft(this.source, r)), i.count * i.aliasCount > s)) {
        let o = "Excessive alias count indicates a resource exhaustion attack";
        throw this.cstNode ? new p.YAMLReferenceError(this.cstNode, o) : new ReferenceError(o);
      }
      return i.res;
    }
    toString(e) {
      return t.stringify(this, e);
    }
  };
  p._defineProperty(be, "default", true);
  function pt(t, e) {
    let n = e instanceof P ? e.value : e;
    for (let r of t) if (r instanceof T && (r.key === e || r.key === n || r.key && r.key.value === n)) return r;
  }
  var mt = class extends j {
    add(e, n) {
      e ? e instanceof T || (e = new T(e.key || e, e.value)) : e = new T(e);
      let r = pt(this.items, e.key), s = this.schema && this.schema.sortMapEntries;
      if (r) if (n) r.value = e.value;
      else throw new Error(`Key ${e.key} already set`);
      else if (s) {
        let i = this.items.findIndex((o) => s(e, o) < 0);
        i === -1 ? this.items.push(e) : this.items.splice(i, 0, e);
      } else this.items.push(e);
    }
    delete(e) {
      let n = pt(this.items, e);
      return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : false;
    }
    get(e, n) {
      let r = pt(this.items, e), s = r && r.value;
      return !n && s instanceof P ? s.value : s;
    }
    has(e) {
      return !!pt(this.items, e);
    }
    set(e, n) {
      this.add(new T(e, n), true);
    }
    toJSON(e, n, r) {
      let s = r ? new r() : n && n.mapAsMap ? /* @__PURE__ */ new Map() : {};
      n && n.onCreate && n.onCreate(s);
      for (let i of this.items) i.addToJSMap(n, s);
      return s;
    }
    toString(e, n, r) {
      if (!e) return JSON.stringify(this);
      for (let s of this.items) if (!(s instanceof T)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);
      return super.toString(e, { blockItem: (s) => s.str, flowChars: { start: "{", end: "}" }, isMap: true, itemIndent: e.indent || "" }, n, r);
    }
  }, Fs = "<<", Kt = class extends T {
    constructor(e) {
      if (e instanceof T) {
        let n = e.value;
        n instanceof pe || (n = new pe(), n.items.push(e.value), n.range = e.value.range), super(e.key, n), this.range = e.range;
      } else super(new P(Fs), new pe());
      this.type = T.Type.MERGE_PAIR;
    }
    addToJSMap(e, n) {
      for (let { source: r } of this.value.items) {
        if (!(r instanceof mt)) throw new Error("Merge sources must be maps");
        let s = r.toJSON(null, e, Map);
        for (let [i, o] of s) n instanceof Map ? n.has(i) || n.set(i, o) : n instanceof Set ? n.add(i) : Object.prototype.hasOwnProperty.call(n, i) || Object.defineProperty(n, i, { value: o, writable: true, enumerable: true, configurable: true });
      }
      return n;
    }
    toString(e, n) {
      let r = this.value;
      if (r.items.length > 1) return super.toString(e, n);
      this.value = r.items[0];
      let s = super.toString(e, n);
      return this.value = r, s;
    }
  }, xo = { defaultType: p.Type.BLOCK_LITERAL, lineWidth: 76 }, Ro = { trueStr: "true", falseStr: "false" }, Do = { asBigInt: false }, Yo = { nullStr: "null" }, Ne = { defaultType: p.Type.PLAIN, doubleQuoted: { jsonEncoding: false, minMultiLineLength: 40 }, fold: { lineWidth: 80, minContentWidth: 20 } };
  function qn(t, e, n) {
    for (let { format: r, test: s, resolve: i } of e) if (s) {
      let o = t.match(s);
      if (o) {
        let a = i.apply(null, o);
        return a instanceof P || (a = new P(a)), r && (a.format = r), a;
      }
    }
    return n && (t = n(t)), new P(t);
  }
  var qs = "flow", Fn = "block", qt = "quoted", Ys = (t, e) => {
    let n = t[e + 1];
    for (; n === " " || n === "	"; ) {
      do
        n = t[e += 1];
      while (n && n !== `
`);
      n = t[e + 1];
    }
    return e;
  };
  function Vt(t, e, n, { indentAtStart: r, lineWidth: s = 80, minContentWidth: i = 20, onFold: o, onOverflow: a }) {
    if (!s || s < 0) return t;
    let c = Math.max(1 + i, 1 + s - e.length);
    if (t.length <= c) return t;
    let l = [], f = {}, m = s - e.length;
    typeof r == "number" && (r > s - Math.max(2, i) ? l.push(0) : m = s - r);
    let d, y, h = false, g = -1, w = -1, C = -1;
    n === Fn && (g = Ys(t, g), g !== -1 && (m = g + c));
    for (let M; M = t[g += 1]; ) {
      if (n === qt && M === "\\") {
        switch (w = g, t[g + 1]) {
          case "x":
            g += 3;
            break;
          case "u":
            g += 5;
            break;
          case "U":
            g += 9;
            break;
          default:
            g += 1;
        }
        C = g;
      }
      if (M === `
`) n === Fn && (g = Ys(t, g)), m = g + c, d = void 0;
      else {
        if (M === " " && y && y !== " " && y !== `
` && y !== "	") {
          let A = t[g + 1];
          A && A !== " " && A !== `
` && A !== "	" && (d = g);
        }
        if (g >= m) if (d) l.push(d), m = d + c, d = void 0;
        else if (n === qt) {
          for (; y === " " || y === "	"; ) y = M, M = t[g += 1], h = true;
          let A = g > C + 1 ? g - 2 : w - 1;
          if (f[A]) return t;
          l.push(A), f[A] = true, m = A + c, d = void 0;
        } else h = true;
      }
      y = M;
    }
    if (h && a && a(), l.length === 0) return t;
    o && o();
    let L = t.slice(0, l[0]);
    for (let M = 0; M < l.length; ++M) {
      let A = l[M], _ = l[M + 1] || t.length;
      A === 0 ? L = `
${e}${t.slice(0, _)}` : (n === qt && f[A] && (L += `${t[A]}\\`), L += `
${e}${t.slice(A + 1, _)}`);
    }
    return L;
  }
  var Un = ({ indentAtStart: t }) => t ? Object.assign({ indentAtStart: t }, Ne.fold) : Ne.fold, Wt = (t) => /^(%|---|\.\.\.)/m.test(t);
  function $o(t, e, n) {
    if (!e || e < 0) return false;
    let r = e - n, s = t.length;
    if (s <= r) return false;
    for (let i = 0, o = 0; i < s; ++i) if (t[i] === `
`) {
      if (i - o > r) return true;
      if (o = i + 1, s - o <= r) return false;
    }
    return true;
  }
  function we(t, e) {
    let { implicitKey: n } = e, { jsonEncoding: r, minMultiLineLength: s } = Ne.doubleQuoted, i = JSON.stringify(t);
    if (r) return i;
    let o = e.indent || (Wt(t) ? "  " : ""), a = "", c = 0;
    for (let l = 0, f = i[l]; f; f = i[++l]) if (f === " " && i[l + 1] === "\\" && i[l + 2] === "n" && (a += i.slice(c, l) + "\\ ", l += 1, c = l, f = "\\"), f === "\\") switch (i[l + 1]) {
      case "u":
        {
          a += i.slice(c, l);
          let m = i.substr(l + 2, 4);
          switch (m) {
            case "0000":
              a += "\\0";
              break;
            case "0007":
              a += "\\a";
              break;
            case "000b":
              a += "\\v";
              break;
            case "001b":
              a += "\\e";
              break;
            case "0085":
              a += "\\N";
              break;
            case "00a0":
              a += "\\_";
              break;
            case "2028":
              a += "\\L";
              break;
            case "2029":
              a += "\\P";
              break;
            default:
              m.substr(0, 2) === "00" ? a += "\\x" + m.substr(2) : a += i.substr(l, 6);
          }
          l += 5, c = l + 1;
        }
        break;
      case "n":
        if (n || i[l + 2] === '"' || i.length < s) l += 1;
        else {
          for (a += i.slice(c, l) + `

`; i[l + 2] === "\\" && i[l + 3] === "n" && i[l + 4] !== '"'; ) a += `
`, l += 2;
          a += o, i[l + 2] === " " && (a += "\\"), l += 1, c = l + 1;
        }
        break;
      default:
        l += 1;
    }
    return a = c ? a + i.slice(c) : i, n ? a : Vt(a, o, qt, Un(e));
  }
  function Us(t, e) {
    if (e.implicitKey) {
      if (/\n/.test(t)) return we(t, e);
    } else if (/[ \t]\n|\n[ \t]/.test(t)) return we(t, e);
    let n = e.indent || (Wt(t) ? "  " : ""), r = "'" + t.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
    return e.implicitKey ? r : Vt(r, n, qs, Un(e));
  }
  function Ut({ comment: t, type: e, value: n }, r, s, i) {
    if (/\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return we(n, r);
    let o = r.indent || (r.forceBlockIndent || Wt(n) ? "  " : ""), a = o ? "2" : "1", c = e === p.Type.BLOCK_FOLDED ? false : e === p.Type.BLOCK_LITERAL ? true : !$o(n, Ne.fold.lineWidth, o.length), l = c ? "|" : ">";
    if (!n) return l + `
`;
    let f = "", m = "";
    if (n = n.replace(/[\n\t ]*$/, (y) => {
      let h = y.indexOf(`
`);
      return h === -1 ? l += "-" : (n === y || h !== y.length - 1) && (l += "+", i && i()), m = y.replace(/\n$/, ""), "";
    }).replace(/^[\n ]*/, (y) => {
      y.indexOf(" ") !== -1 && (l += a);
      let h = y.match(/ +$/);
      return h ? (f = y.slice(0, -h[0].length), h[0]) : (f = y, "");
    }), m && (m = m.replace(/\n+(?!\n|$)/g, `$&${o}`)), f && (f = f.replace(/\n+/g, `$&${o}`)), t && (l += " #" + t.replace(/ ?[\r\n]+/g, " "), s && s()), !n) return `${l}${a}
${o}${m}`;
    if (c) return n = n.replace(/\n+/g, `$&${o}`), `${l}
${o}${f}${n}${m}`;
    n = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${o}`);
    let d = Vt(`${f}${n}${m}`, o, Fn, Ne.fold);
    return `${l}
${o}${d}`;
  }
  function Bo(t, e, n, r) {
    let { comment: s, type: i, value: o } = t, { actualString: a, implicitKey: c, indent: l, inFlow: f } = e;
    if (c && /[\n[\]{},]/.test(o) || f && /[[\]{},]/.test(o)) return we(o, e);
    if (!o || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o)) return c || f || o.indexOf(`
`) === -1 ? o.indexOf('"') !== -1 && o.indexOf("'") === -1 ? Us(o, e) : we(o, e) : Ut(t, e, n, r);
    if (!c && !f && i !== p.Type.PLAIN && o.indexOf(`
`) !== -1) return Ut(t, e, n, r);
    if (l === "" && Wt(o)) return e.forceBlockIndent = true, Ut(t, e, n, r);
    let m = o.replace(/\n+/g, `$&
${l}`);
    if (a) {
      let { tags: y } = e.doc.schema;
      if (typeof qn(m, y, y.scalarFallback).value != "string") return we(o, e);
    }
    let d = c ? m : Vt(m, l, qs, Un(e));
    return s && !f && (d.indexOf(`
`) !== -1 || s.indexOf(`
`) !== -1) ? (n && n(), Po(d, l, s)) : d;
  }
  function Fo(t, e, n, r) {
    let { defaultType: s } = Ne, { implicitKey: i, inFlow: o } = e, { type: a, value: c } = t;
    typeof c != "string" && (c = String(c), t = Object.assign({}, t, { value: c }));
    let l = (m) => {
      switch (m) {
        case p.Type.BLOCK_FOLDED:
        case p.Type.BLOCK_LITERAL:
          return Ut(t, e, n, r);
        case p.Type.QUOTE_DOUBLE:
          return we(c, e);
        case p.Type.QUOTE_SINGLE:
          return Us(c, e);
        case p.Type.PLAIN:
          return Bo(t, e, n, r);
        default:
          return null;
      }
    };
    (a !== p.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(c) || (i || o) && (a === p.Type.BLOCK_FOLDED || a === p.Type.BLOCK_LITERAL)) && (a = p.Type.QUOTE_DOUBLE);
    let f = l(a);
    if (f === null && (f = l(s), f === null)) throw new Error(`Unsupported default string type ${s}`);
    return f;
  }
  function qo({ format: t, minFractionDigits: e, tag: n, value: r }) {
    if (typeof r == "bigint") return String(r);
    if (!isFinite(r)) return isNaN(r) ? ".nan" : r < 0 ? "-.inf" : ".inf";
    let s = JSON.stringify(r);
    if (!t && e && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(s)) {
      let i = s.indexOf(".");
      i < 0 && (i = s.length, s += ".");
      let o = e - (s.length - i - 1);
      for (; o-- > 0; ) s += "0";
    }
    return s;
  }
  function Ks(t, e) {
    let n, r;
    switch (e.type) {
      case p.Type.FLOW_MAP:
        n = "}", r = "flow map";
        break;
      case p.Type.FLOW_SEQ:
        n = "]", r = "flow sequence";
        break;
      default:
        t.push(new p.YAMLSemanticError(e, "Not a flow collection!?"));
        return;
    }
    let s;
    for (let i = e.items.length - 1; i >= 0; --i) {
      let o = e.items[i];
      if (!o || o.type !== p.Type.COMMENT) {
        s = o;
        break;
      }
    }
    if (s && s.char !== n) {
      let i = `Expected ${r} to end with ${n}`, o;
      typeof s.offset == "number" ? (o = new p.YAMLSemanticError(e, i), o.offset = s.offset + 1) : (o = new p.YAMLSemanticError(s, i), s.range && s.range.end && (o.offset = s.range.end - s.range.start)), t.push(o);
    }
  }
  function Vs(t, e) {
    let n = e.context.src[e.range.start - 1];
    if (n !== `
` && n !== "	" && n !== " ") {
      let r = "Comments must be separated from other tokens by white space characters";
      t.push(new p.YAMLSemanticError(e, r));
    }
  }
  function Ws(t, e) {
    let n = String(e), r = n.substr(0, 8) + "..." + n.substr(-8);
    return new p.YAMLSemanticError(t, `The "${r}" key is too long`);
  }
  function js(t, e) {
    for (let { afterKey: n, before: r, comment: s } of e) {
      let i = t.items[r];
      i ? (n && i.value && (i = i.value), s === void 0 ? (n || !i.commentBefore) && (i.spaceBefore = true) : i.commentBefore ? i.commentBefore += `
` + s : i.commentBefore = s) : s !== void 0 && (t.comment ? t.comment += `
` + s : t.comment = s);
    }
  }
  function Kn(t, e) {
    let n = e.strValue;
    return n ? typeof n == "string" ? n : (n.errors.forEach((r) => {
      r.source || (r.source = e), t.errors.push(r);
    }), n.str) : "";
  }
  function Uo(t, e) {
    let { handle: n, suffix: r } = e.tag, s = t.tagPrefixes.find((i) => i.handle === n);
    if (!s) {
      let i = t.getDefaults().tagPrefixes;
      if (i && (s = i.find((o) => o.handle === n)), !s) throw new p.YAMLSemanticError(e, `The ${n} tag handle is non-default and was not declared.`);
    }
    if (!r) throw new p.YAMLSemanticError(e, `The ${n} tag has no suffix.`);
    if (n === "!" && (t.version || t.options.version) === "1.0") {
      if (r[0] === "^") return t.warnings.push(new p.YAMLWarning(e, "YAML 1.0 ^ tag expansion is not supported")), r;
      if (/[:/]/.test(r)) {
        let i = r.match(/^([a-z0-9-]+)\/(.*)/i);
        return i ? `tag:${i[1]}.yaml.org,2002:${i[2]}` : `tag:${r}`;
      }
    }
    return s.prefix + decodeURIComponent(r);
  }
  function Ko(t, e) {
    let { tag: n, type: r } = e, s = false;
    if (n) {
      let { handle: i, suffix: o, verbatim: a } = n;
      if (a) {
        if (a !== "!" && a !== "!!") return a;
        let c = `Verbatim tags aren't resolved, so ${a} is invalid.`;
        t.errors.push(new p.YAMLSemanticError(e, c));
      } else if (i === "!" && !o) s = true;
      else try {
        return Uo(t, e);
      } catch (c) {
        t.errors.push(c);
      }
    }
    switch (r) {
      case p.Type.BLOCK_FOLDED:
      case p.Type.BLOCK_LITERAL:
      case p.Type.QUOTE_DOUBLE:
      case p.Type.QUOTE_SINGLE:
        return p.defaultTags.STR;
      case p.Type.FLOW_MAP:
      case p.Type.MAP:
        return p.defaultTags.MAP;
      case p.Type.FLOW_SEQ:
      case p.Type.SEQ:
        return p.defaultTags.SEQ;
      case p.Type.PLAIN:
        return s ? p.defaultTags.STR : null;
      default:
        return null;
    }
  }
  function $s(t, e, n) {
    let { tags: r } = t.schema, s = [];
    for (let o of r) if (o.tag === n) if (o.test) s.push(o);
    else {
      let a = o.resolve(t, e);
      return a instanceof j ? a : new P(a);
    }
    let i = Kn(t, e);
    return typeof i == "string" && s.length > 0 ? qn(i, s, r.scalarFallback) : null;
  }
  function Vo({ type: t }) {
    switch (t) {
      case p.Type.FLOW_MAP:
      case p.Type.MAP:
        return p.defaultTags.MAP;
      case p.Type.FLOW_SEQ:
      case p.Type.SEQ:
        return p.defaultTags.SEQ;
      default:
        return p.defaultTags.STR;
    }
  }
  function Wo(t, e, n) {
    try {
      let r = $s(t, e, n);
      if (r) return n && e.tag && (r.tag = n), r;
    } catch (r) {
      return r.source || (r.source = e), t.errors.push(r), null;
    }
    try {
      let r = Vo(e);
      if (!r) throw new Error(`The tag ${n} is unavailable`);
      let s = `The tag ${n} is unavailable, falling back to ${r}`;
      t.warnings.push(new p.YAMLWarning(e, s));
      let i = $s(t, e, r);
      return i.tag = n, i;
    } catch (r) {
      let s = new p.YAMLReferenceError(e, r.message);
      return s.stack = r.stack, t.errors.push(s), null;
    }
  }
  var jo = (t) => {
    if (!t) return false;
    let { type: e } = t;
    return e === p.Type.MAP_KEY || e === p.Type.MAP_VALUE || e === p.Type.SEQ_ITEM;
  };
  function Qo(t, e) {
    let n = { before: [], after: [] }, r = false, s = false, i = jo(e.context.parent) ? e.context.parent.props.concat(e.props) : e.props;
    for (let { start: o, end: a } of i) switch (e.context.src[o]) {
      case p.Char.COMMENT: {
        if (!e.commentHasRequiredWhitespace(o)) {
          let m = "Comments must be separated from other tokens by white space characters";
          t.push(new p.YAMLSemanticError(e, m));
        }
        let { header: c, valueRange: l } = e;
        (l && (o > l.start || c && o > c.start) ? n.after : n.before).push(e.context.src.slice(o + 1, a));
        break;
      }
      case p.Char.ANCHOR:
        if (r) {
          let c = "A node can have at most one anchor";
          t.push(new p.YAMLSemanticError(e, c));
        }
        r = true;
        break;
      case p.Char.TAG:
        if (s) {
          let c = "A node can have at most one tag";
          t.push(new p.YAMLSemanticError(e, c));
        }
        s = true;
        break;
    }
    return { comments: n, hasAnchor: r, hasTag: s };
  }
  function Jo(t, e) {
    let { anchors: n, errors: r, schema: s } = t;
    if (e.type === p.Type.ALIAS) {
      let o = e.rawValue, a = n.getNode(o);
      if (!a) {
        let l = `Aliased anchor not found: ${o}`;
        return r.push(new p.YAMLReferenceError(e, l)), null;
      }
      let c = new be(a);
      return n._cstAliases.push(c), c;
    }
    let i = Ko(t, e);
    if (i) return Wo(t, e, i);
    if (e.type !== p.Type.PLAIN) {
      let o = `Failed to resolve ${e.type} node here`;
      return r.push(new p.YAMLSyntaxError(e, o)), null;
    }
    try {
      let o = Kn(t, e);
      return qn(o, s.tags, s.tags.scalarFallback);
    } catch (o) {
      return o.source || (o.source = e), r.push(o), null;
    }
  }
  function me(t, e) {
    if (!e) return null;
    e.error && t.errors.push(e.error);
    let { comments: n, hasAnchor: r, hasTag: s } = Qo(t.errors, e);
    if (r) {
      let { anchors: o } = t, a = e.anchor, c = o.getNode(a);
      c && (o.map[o.newName(a)] = c), o.map[a] = e;
    }
    if (e.type === p.Type.ALIAS && (r || s)) {
      let o = "An alias node must not specify any properties";
      t.errors.push(new p.YAMLSemanticError(e, o));
    }
    let i = Jo(t, e);
    if (i) {
      i.range = [e.range.start, e.range.end], t.options.keepCstNodes && (i.cstNode = e), t.options.keepNodeTypes && (i.type = e.type);
      let o = n.before.join(`
`);
      o && (i.commentBefore = i.commentBefore ? `${i.commentBefore}
${o}` : o);
      let a = n.after.join(`
`);
      a && (i.comment = i.comment ? `${i.comment}
${a}` : a);
    }
    return e.resolved = i;
  }
  function Go(t, e) {
    if (e.type !== p.Type.MAP && e.type !== p.Type.FLOW_MAP) {
      let o = `A ${e.type} node cannot be resolved as a mapping`;
      return t.errors.push(new p.YAMLSyntaxError(e, o)), null;
    }
    let { comments: n, items: r } = e.type === p.Type.FLOW_MAP ? Zo(t, e) : zo(t, e), s = new mt();
    s.items = r, js(s, n);
    let i = false;
    for (let o = 0; o < r.length; ++o) {
      let { key: a } = r[o];
      if (a instanceof j && (i = true), t.schema.merge && a && a.value === Fs) {
        r[o] = new Kt(r[o]);
        let c = r[o].value.items, l = null;
        c.some((f) => {
          if (f instanceof be) {
            let { type: m } = f.source;
            return m === p.Type.MAP || m === p.Type.FLOW_MAP ? false : l = "Merge nodes aliases can only point to maps";
          }
          return l = "Merge nodes can only have Alias nodes as values";
        }), l && t.errors.push(new p.YAMLSemanticError(e, l));
      } else for (let c = o + 1; c < r.length; ++c) {
        let { key: l } = r[c];
        if (a === l || a && l && Object.prototype.hasOwnProperty.call(a, "value") && a.value === l.value) {
          let f = `Map keys must be unique; "${a}" is repeated`;
          t.errors.push(new p.YAMLSemanticError(e, f));
          break;
        }
      }
    }
    if (i && !t.options.mapAsMap) {
      let o = "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
      t.warnings.push(new p.YAMLWarning(e, o));
    }
    return e.resolved = s, s;
  }
  var Ho = ({ context: { lineStart: t, node: e, src: n }, props: r }) => {
    if (r.length === 0) return false;
    let { start: s } = r[0];
    if (e && s > e.valueRange.start || n[s] !== p.Char.COMMENT) return false;
    for (let i = t; i < s; ++i) if (n[i] === `
`) return false;
    return true;
  };
  function Xo(t, e) {
    if (!Ho(t)) return;
    let n = t.getPropValue(0, p.Char.COMMENT, true), r = false, s = e.value.commentBefore;
    if (s && s.startsWith(n)) e.value.commentBefore = s.substr(n.length + 1), r = true;
    else {
      let i = e.value.comment;
      !t.node && i && i.startsWith(n) && (e.value.comment = i.substr(n.length + 1), r = true);
    }
    r && (e.comment = n);
  }
  function zo(t, e) {
    let n = [], r = [], s, i = null;
    for (let o = 0; o < e.items.length; ++o) {
      let a = e.items[o];
      switch (a.type) {
        case p.Type.BLANK_LINE:
          n.push({ afterKey: !!s, before: r.length });
          break;
        case p.Type.COMMENT:
          n.push({ afterKey: !!s, before: r.length, comment: a.comment });
          break;
        case p.Type.MAP_KEY:
          s !== void 0 && r.push(new T(s)), a.error && t.errors.push(a.error), s = me(t, a.node), i = null;
          break;
        case p.Type.MAP_VALUE:
          {
            if (s === void 0 && (s = null), a.error && t.errors.push(a.error), !a.context.atLineStart && a.node && a.node.type === p.Type.MAP && !a.node.context.atLineStart) {
              let f = "Nested mappings are not allowed in compact mappings";
              t.errors.push(new p.YAMLSemanticError(a.node, f));
            }
            let c = a.node;
            if (!c && a.props.length > 0) {
              c = new p.PlainValue(p.Type.PLAIN, []), c.context = { parent: a, src: a.context.src };
              let f = a.range.start + 1;
              if (c.range = { start: f, end: f }, c.valueRange = { start: f, end: f }, typeof a.range.origStart == "number") {
                let m = a.range.origStart + 1;
                c.range.origStart = c.range.origEnd = m, c.valueRange.origStart = c.valueRange.origEnd = m;
              }
            }
            let l = new T(s, me(t, c));
            Xo(a, l), r.push(l), s && typeof i == "number" && a.range.start > i + 1024 && t.errors.push(Ws(e, s)), s = void 0, i = null;
          }
          break;
        default:
          s !== void 0 && r.push(new T(s)), s = me(t, a), i = a.range.start, a.error && t.errors.push(a.error);
          e: for (let c = o + 1; ; ++c) {
            let l = e.items[c];
            switch (l && l.type) {
              case p.Type.BLANK_LINE:
              case p.Type.COMMENT:
                continue e;
              case p.Type.MAP_VALUE:
                break e;
              default: {
                let f = "Implicit map keys need to be followed by map values";
                t.errors.push(new p.YAMLSemanticError(a, f));
                break e;
              }
            }
          }
          if (a.valueRangeContainsNewline) {
            let c = "Implicit map keys need to be on a single line";
            t.errors.push(new p.YAMLSemanticError(a, c));
          }
      }
    }
    return s !== void 0 && r.push(new T(s)), { comments: n, items: r };
  }
  function Zo(t, e) {
    let n = [], r = [], s, i = false, o = "{";
    for (let a = 0; a < e.items.length; ++a) {
      let c = e.items[a];
      if (typeof c.char == "string") {
        let { char: l, offset: f } = c;
        if (l === "?" && s === void 0 && !i) {
          i = true, o = ":";
          continue;
        }
        if (l === ":") {
          if (s === void 0 && (s = null), o === ":") {
            o = ",";
            continue;
          }
        } else if (i && (s === void 0 && l !== "," && (s = null), i = false), s !== void 0 && (r.push(new T(s)), s = void 0, l === ",")) {
          o = ":";
          continue;
        }
        if (l === "}") {
          if (a === e.items.length - 1) continue;
        } else if (l === o) {
          o = ":";
          continue;
        }
        let m = `Flow map contains an unexpected ${l}`, d = new p.YAMLSyntaxError(e, m);
        d.offset = f, t.errors.push(d);
      } else c.type === p.Type.BLANK_LINE ? n.push({ afterKey: !!s, before: r.length }) : c.type === p.Type.COMMENT ? (Vs(t.errors, c), n.push({ afterKey: !!s, before: r.length, comment: c.comment })) : s === void 0 ? (o === "," && t.errors.push(new p.YAMLSemanticError(c, "Separator , missing in flow map")), s = me(t, c)) : (o !== "," && t.errors.push(new p.YAMLSemanticError(c, "Indicator : missing in flow map entry")), r.push(new T(s, me(t, c))), s = void 0, i = false);
    }
    return Ks(t.errors, e), s !== void 0 && r.push(new T(s)), { comments: n, items: r };
  }
  function ea(t, e) {
    if (e.type !== p.Type.SEQ && e.type !== p.Type.FLOW_SEQ) {
      let i = `A ${e.type} node cannot be resolved as a sequence`;
      return t.errors.push(new p.YAMLSyntaxError(e, i)), null;
    }
    let { comments: n, items: r } = e.type === p.Type.FLOW_SEQ ? na(t, e) : ta(t, e), s = new pe();
    if (s.items = r, js(s, n), !t.options.mapAsMap && r.some((i) => i instanceof T && i.key instanceof j)) {
      let i = "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
      t.warnings.push(new p.YAMLWarning(e, i));
    }
    return e.resolved = s, s;
  }
  function ta(t, e) {
    let n = [], r = [];
    for (let s = 0; s < e.items.length; ++s) {
      let i = e.items[s];
      switch (i.type) {
        case p.Type.BLANK_LINE:
          n.push({ before: r.length });
          break;
        case p.Type.COMMENT:
          n.push({ comment: i.comment, before: r.length });
          break;
        case p.Type.SEQ_ITEM:
          if (i.error && t.errors.push(i.error), r.push(me(t, i.node)), i.hasProps) {
            let o = "Sequence items cannot have tags or anchors before the - indicator";
            t.errors.push(new p.YAMLSemanticError(i, o));
          }
          break;
        default:
          i.error && t.errors.push(i.error), t.errors.push(new p.YAMLSyntaxError(i, `Unexpected ${i.type} node in sequence`));
      }
    }
    return { comments: n, items: r };
  }
  function na(t, e) {
    let n = [], r = [], s = false, i, o = null, a = "[", c = null;
    for (let l = 0; l < e.items.length; ++l) {
      let f = e.items[l];
      if (typeof f.char == "string") {
        let { char: m, offset: d } = f;
        if (m !== ":" && (s || i !== void 0) && (s && i === void 0 && (i = a ? r.pop() : null), r.push(new T(i)), s = false, i = void 0, o = null), m === a) a = null;
        else if (!a && m === "?") s = true;
        else if (a !== "[" && m === ":" && i === void 0) {
          if (a === ",") {
            if (i = r.pop(), i instanceof T) {
              let y = "Chaining flow sequence pairs is invalid", h = new p.YAMLSemanticError(e, y);
              h.offset = d, t.errors.push(h);
            }
            if (!s && typeof o == "number") {
              let y = f.range ? f.range.start : f.offset;
              y > o + 1024 && t.errors.push(Ws(e, i));
              let { src: h } = c.context;
              for (let g = o; g < y; ++g) if (h[g] === `
`) {
                let w = "Implicit keys of flow sequence pairs need to be on a single line";
                t.errors.push(new p.YAMLSemanticError(c, w));
                break;
              }
            }
          } else i = null;
          o = null, s = false, a = null;
        } else if (a === "[" || m !== "]" || l < e.items.length - 1) {
          let y = `Flow sequence contains an unexpected ${m}`, h = new p.YAMLSyntaxError(e, y);
          h.offset = d, t.errors.push(h);
        }
      } else if (f.type === p.Type.BLANK_LINE) n.push({ before: r.length });
      else if (f.type === p.Type.COMMENT) Vs(t.errors, f), n.push({ comment: f.comment, before: r.length });
      else {
        if (a) {
          let d = `Expected a ${a} in flow sequence`;
          t.errors.push(new p.YAMLSemanticError(f, d));
        }
        let m = me(t, f);
        i === void 0 ? (r.push(m), c = f) : (r.push(new T(i, m)), i = void 0), o = f.range.start, a = ",";
      }
    }
    return Ks(t.errors, e), i !== void 0 && r.push(new T(i)), { comments: n, items: r };
  }
  k.Alias = be;
  k.Collection = j;
  k.Merge = Kt;
  k.Node = W;
  k.Pair = T;
  k.Scalar = P;
  k.YAMLMap = mt;
  k.YAMLSeq = pe;
  k.addComment = Fe;
  k.binaryOptions = xo;
  k.boolOptions = Ro;
  k.findPair = pt;
  k.intOptions = Do;
  k.isEmptyPath = Bs;
  k.nullOptions = Yo;
  k.resolveMap = Go;
  k.resolveNode = me;
  k.resolveSeq = ea;
  k.resolveString = Kn;
  k.strOptions = Ne;
  k.stringifyNumber = qo;
  k.stringifyString = Fo;
  k.toJSON = ue;
});
var Qn = te((z) => {
  var Q = le(), O = qe(), ra = { identify: (t) => t instanceof Uint8Array, default: false, tag: "tag:yaml.org,2002:binary", resolve: (t, e) => {
    let n = O.resolveString(t, e);
    if (typeof Buffer == "function") return Buffer.from(n, "base64");
    if (typeof atob == "function") {
      let r = atob(n.replace(/[\n\r]/g, "")), s = new Uint8Array(r.length);
      for (let i = 0; i < r.length; ++i) s[i] = r.charCodeAt(i);
      return s;
    } else {
      let r = "This environment does not support reading binary tags; either Buffer or atob is required";
      return t.errors.push(new Q.YAMLReferenceError(e, r)), null;
    }
  }, options: O.binaryOptions, stringify: ({ comment: t, type: e, value: n }, r, s, i) => {
    let o;
    if (typeof Buffer == "function") o = n instanceof Buffer ? n.toString("base64") : Buffer.from(n.buffer).toString("base64");
    else if (typeof btoa == "function") {
      let a = "";
      for (let c = 0; c < n.length; ++c) a += String.fromCharCode(n[c]);
      o = btoa(a);
    } else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
    if (e || (e = O.binaryOptions.defaultType), e === Q.Type.QUOTE_DOUBLE) n = o;
    else {
      let { lineWidth: a } = O.binaryOptions, c = Math.ceil(o.length / a), l = new Array(c);
      for (let f = 0, m = 0; f < c; ++f, m += a) l[f] = o.substr(m, a);
      n = l.join(e === Q.Type.BLOCK_LITERAL ? `
` : " ");
    }
    return O.stringifyString({ comment: t, type: e, value: n }, r, s, i);
  } };
  function Js(t, e) {
    let n = O.resolveSeq(t, e);
    for (let r = 0; r < n.items.length; ++r) {
      let s = n.items[r];
      if (!(s instanceof O.Pair)) {
        if (s instanceof O.YAMLMap) {
          if (s.items.length > 1) {
            let o = "Each pair must have its own sequence indicator";
            throw new Q.YAMLSemanticError(e, o);
          }
          let i = s.items[0] || new O.Pair();
          s.commentBefore && (i.commentBefore = i.commentBefore ? `${s.commentBefore}
${i.commentBefore}` : s.commentBefore), s.comment && (i.comment = i.comment ? `${s.comment}
${i.comment}` : s.comment), s = i;
        }
        n.items[r] = s instanceof O.Pair ? s : new O.Pair(s);
      }
    }
    return n;
  }
  function Gs(t, e, n) {
    let r = new O.YAMLSeq(t);
    r.tag = "tag:yaml.org,2002:pairs";
    for (let s of e) {
      let i, o;
      if (Array.isArray(s)) if (s.length === 2) i = s[0], o = s[1];
      else throw new TypeError(`Expected [key, value] tuple: ${s}`);
      else if (s && s instanceof Object) {
        let c = Object.keys(s);
        if (c.length === 1) i = c[0], o = s[i];
        else throw new TypeError(`Expected { key: value } tuple: ${s}`);
      } else i = s;
      let a = t.createPair(i, o, n);
      r.items.push(a);
    }
    return r;
  }
  var sa = { default: false, tag: "tag:yaml.org,2002:pairs", resolve: Js, createNode: Gs }, Ue = class t extends O.YAMLSeq {
    constructor() {
      super(), Q._defineProperty(this, "add", O.YAMLMap.prototype.add.bind(this)), Q._defineProperty(this, "delete", O.YAMLMap.prototype.delete.bind(this)), Q._defineProperty(this, "get", O.YAMLMap.prototype.get.bind(this)), Q._defineProperty(this, "has", O.YAMLMap.prototype.has.bind(this)), Q._defineProperty(this, "set", O.YAMLMap.prototype.set.bind(this)), this.tag = t.tag;
    }
    toJSON(e, n) {
      let r = /* @__PURE__ */ new Map();
      n && n.onCreate && n.onCreate(r);
      for (let s of this.items) {
        let i, o;
        if (s instanceof O.Pair ? (i = O.toJSON(s.key, "", n), o = O.toJSON(s.value, i, n)) : i = O.toJSON(s, "", n), r.has(i)) throw new Error("Ordered maps must not include duplicate keys");
        r.set(i, o);
      }
      return r;
    }
  };
  Q._defineProperty(Ue, "tag", "tag:yaml.org,2002:omap");
  function ia(t, e) {
    let n = Js(t, e), r = [];
    for (let { key: s } of n.items) if (s instanceof O.Scalar) if (r.includes(s.value)) {
      let i = "Ordered maps must not include duplicate keys";
      throw new Q.YAMLSemanticError(e, i);
    } else r.push(s.value);
    return Object.assign(new Ue(), n);
  }
  function oa(t, e, n) {
    let r = Gs(t, e, n), s = new Ue();
    return s.items = r.items, s;
  }
  var aa = { identify: (t) => t instanceof Map, nodeClass: Ue, default: false, tag: "tag:yaml.org,2002:omap", resolve: ia, createNode: oa }, Ke = class t extends O.YAMLMap {
    constructor() {
      super(), this.tag = t.tag;
    }
    add(e) {
      let n = e instanceof O.Pair ? e : new O.Pair(e);
      O.findPair(this.items, n.key) || this.items.push(n);
    }
    get(e, n) {
      let r = O.findPair(this.items, e);
      return !n && r instanceof O.Pair ? r.key instanceof O.Scalar ? r.key.value : r.key : r;
    }
    set(e, n) {
      if (typeof n != "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
      let r = O.findPair(this.items, e);
      r && !n ? this.items.splice(this.items.indexOf(r), 1) : !r && n && this.items.push(new O.Pair(e));
    }
    toJSON(e, n) {
      return super.toJSON(e, n, Set);
    }
    toString(e, n, r) {
      if (!e) return JSON.stringify(this);
      if (this.hasAllNullValues()) return super.toString(e, n, r);
      throw new Error("Set items must all have null values");
    }
  };
  Q._defineProperty(Ke, "tag", "tag:yaml.org,2002:set");
  function ca(t, e) {
    let n = O.resolveMap(t, e);
    if (!n.hasAllNullValues()) throw new Q.YAMLSemanticError(e, "Set items must all have null values");
    return Object.assign(new Ke(), n);
  }
  function la(t, e, n) {
    let r = new Ke();
    for (let s of e) r.items.push(t.createPair(s, null, n));
    return r;
  }
  var fa = { identify: (t) => t instanceof Set, nodeClass: Ke, default: false, tag: "tag:yaml.org,2002:set", resolve: ca, createNode: la }, Vn = (t, e) => {
    let n = e.split(":").reduce((r, s) => r * 60 + Number(s), 0);
    return t === "-" ? -n : n;
  }, Hs = ({ value: t }) => {
    if (isNaN(t) || !isFinite(t)) return O.stringifyNumber(t);
    let e = "";
    t < 0 && (e = "-", t = Math.abs(t));
    let n = [t % 60];
    return t < 60 ? n.unshift(0) : (t = Math.round((t - n[0]) / 60), n.unshift(t % 60), t >= 60 && (t = Math.round((t - n[0]) / 60), n.unshift(t))), e + n.map((r) => r < 10 ? "0" + String(r) : String(r)).join(":").replace(/000000\d*$/, "");
  }, ua = { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:int", format: "TIME", test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/, resolve: (t, e, n) => Vn(e, n.replace(/_/g, "")), stringify: Hs }, pa = { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", format: "TIME", test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/, resolve: (t, e, n) => Vn(e, n.replace(/_/g, "")), stringify: Hs }, ma = { identify: (t) => t instanceof Date, default: true, tag: "tag:yaml.org,2002:timestamp", test: RegExp("^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$"), resolve: (t, e, n, r, s, i, o, a, c) => {
    a && (a = (a + "00").substr(1, 3));
    let l = Date.UTC(e, n - 1, r, s || 0, i || 0, o || 0, a || 0);
    if (c && c !== "Z") {
      let f = Vn(c[0], c.slice(1));
      Math.abs(f) < 30 && (f *= 60), l -= 6e4 * f;
    }
    return new Date(l);
  }, stringify: ({ value: t }) => t.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "") };
  function Wn(t) {
    let e = {};
    return t ? typeof YAML_SILENCE_DEPRECATION_WARNINGS < "u" ? !YAML_SILENCE_DEPRECATION_WARNINGS : !e.YAML_SILENCE_DEPRECATION_WARNINGS : typeof YAML_SILENCE_WARNINGS < "u" ? !YAML_SILENCE_WARNINGS : !e.YAML_SILENCE_WARNINGS;
  }
  function jn(t, e) {
    Wn(false) && console.warn(e ? `${e}: ${t}` : t);
  }
  function ha(t) {
    if (Wn(true)) {
      let e = t.replace(/.*yaml[/\\]/i, "").replace(/\.js$/, "").replace(/\\/g, "/");
      jn(`The endpoint 'yaml/${e}' will be removed in a future release.`, "DeprecationWarning");
    }
  }
  var Qs = {};
  function ga(t, e) {
    if (!Qs[t] && Wn(true)) {
      Qs[t] = true;
      let n = `The option '${t}' will be removed in a future release`;
      n += e ? `, use '${e}' instead.` : ".", jn(n, "DeprecationWarning");
    }
  }
  z.binary = ra;
  z.floatTime = pa;
  z.intTime = ua;
  z.omap = aa;
  z.pairs = sa;
  z.set = fa;
  z.timestamp = ma;
  z.warn = jn;
  z.warnFileDeprecation = ha;
  z.warnOptionDeprecation = ga;
});
var Xn = te((li) => {
  var Jt = le(), E = qe(), D = Qn();
  function da(t, e, n) {
    let r = new E.YAMLMap(t);
    if (e instanceof Map) for (let [s, i] of e) r.items.push(t.createPair(s, i, n));
    else if (e && typeof e == "object") for (let s of Object.keys(e)) r.items.push(t.createPair(s, e[s], n));
    return typeof t.sortMapEntries == "function" && r.items.sort(t.sortMapEntries), r;
  }
  var gt = { createNode: da, default: true, nodeClass: E.YAMLMap, tag: "tag:yaml.org,2002:map", resolve: E.resolveMap };
  function ya(t, e, n) {
    let r = new E.YAMLSeq(t);
    if (e && e[Symbol.iterator]) for (let s of e) {
      let i = t.createNode(s, n.wrapScalars, null, n);
      r.items.push(i);
    }
    return r;
  }
  var Gt = { createNode: ya, default: true, nodeClass: E.YAMLSeq, tag: "tag:yaml.org,2002:seq", resolve: E.resolveSeq }, Ea = { identify: (t) => typeof t == "string", default: true, tag: "tag:yaml.org,2002:str", resolve: E.resolveString, stringify(t, e, n, r) {
    return e = Object.assign({ actualString: true }, e), E.stringifyString(t, e, n, r);
  }, options: E.strOptions }, Gn = [gt, Gt, Ea], Ht = (t) => typeof t == "bigint" || Number.isInteger(t), Hn = (t, e, n) => E.intOptions.asBigInt ? BigInt(t) : parseInt(e, n);
  function Zs(t, e, n) {
    let { value: r } = t;
    return Ht(r) && r >= 0 ? n + r.toString(e) : E.stringifyNumber(t);
  }
  var ei = { identify: (t) => t == null, createNode: (t, e, n) => n.wrapScalars ? new E.Scalar(null) : null, default: true, tag: "tag:yaml.org,2002:null", test: /^(?:~|[Nn]ull|NULL)?$/, resolve: () => null, options: E.nullOptions, stringify: () => E.nullOptions.nullStr }, ti = { identify: (t) => typeof t == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/, resolve: (t) => t[0] === "t" || t[0] === "T", options: E.boolOptions, stringify: ({ value: t }) => t ? E.boolOptions.trueStr : E.boolOptions.falseStr }, ni = { identify: (t) => Ht(t) && t >= 0, default: true, tag: "tag:yaml.org,2002:int", format: "OCT", test: /^0o([0-7]+)$/, resolve: (t, e) => Hn(t, e, 8), options: E.intOptions, stringify: (t) => Zs(t, 8, "0o") }, ri = { identify: Ht, default: true, tag: "tag:yaml.org,2002:int", test: /^[-+]?[0-9]+$/, resolve: (t) => Hn(t, t, 10), options: E.intOptions, stringify: E.stringifyNumber }, si = { identify: (t) => Ht(t) && t >= 0, default: true, tag: "tag:yaml.org,2002:int", format: "HEX", test: /^0x([0-9a-fA-F]+)$/, resolve: (t, e) => Hn(t, e, 16), options: E.intOptions, stringify: (t) => Zs(t, 16, "0x") }, ii = { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^(?:[-+]?\.inf|(\.nan))$/i, resolve: (t, e) => e ? NaN : t[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, stringify: E.stringifyNumber }, oi = { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", format: "EXP", test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/, resolve: (t) => parseFloat(t), stringify: ({ value: t }) => Number(t).toExponential() }, ai = { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/, resolve(t, e, n) {
    let r = e || n, s = new E.Scalar(parseFloat(t));
    return r && r[r.length - 1] === "0" && (s.minFractionDigits = r.length), s;
  }, stringify: E.stringifyNumber }, Sa = Gn.concat([ei, ti, ni, ri, si, ii, oi, ai]), Xs = (t) => typeof t == "bigint" || Number.isInteger(t), jt = ({ value: t }) => JSON.stringify(t), ci = [gt, Gt, { identify: (t) => typeof t == "string", default: true, tag: "tag:yaml.org,2002:str", resolve: E.resolveString, stringify: jt }, { identify: (t) => t == null, createNode: (t, e, n) => n.wrapScalars ? new E.Scalar(null) : null, default: true, tag: "tag:yaml.org,2002:null", test: /^null$/, resolve: () => null, stringify: jt }, { identify: (t) => typeof t == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^true|false$/, resolve: (t) => t === "true", stringify: jt }, { identify: Xs, default: true, tag: "tag:yaml.org,2002:int", test: /^-?(?:0|[1-9][0-9]*)$/, resolve: (t) => E.intOptions.asBigInt ? BigInt(t) : parseInt(t, 10), stringify: ({ value: t }) => Xs(t) ? t.toString() : JSON.stringify(t) }, { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/, resolve: (t) => parseFloat(t), stringify: jt }];
  ci.scalarFallback = (t) => {
    throw new SyntaxError(`Unresolved plain scalar ${JSON.stringify(t)}`);
  };
  var zs = ({ value: t }) => t ? E.boolOptions.trueStr : E.boolOptions.falseStr, ht = (t) => typeof t == "bigint" || Number.isInteger(t);
  function Qt(t, e, n) {
    let r = e.replace(/_/g, "");
    if (E.intOptions.asBigInt) {
      switch (n) {
        case 2:
          r = `0b${r}`;
          break;
        case 8:
          r = `0o${r}`;
          break;
        case 16:
          r = `0x${r}`;
          break;
      }
      let i = BigInt(r);
      return t === "-" ? BigInt(-1) * i : i;
    }
    let s = parseInt(r, n);
    return t === "-" ? -1 * s : s;
  }
  function Jn(t, e, n) {
    let { value: r } = t;
    if (ht(r)) {
      let s = r.toString(e);
      return r < 0 ? "-" + n + s.substr(1) : n + s;
    }
    return E.stringifyNumber(t);
  }
  var wa = Gn.concat([{ identify: (t) => t == null, createNode: (t, e, n) => n.wrapScalars ? new E.Scalar(null) : null, default: true, tag: "tag:yaml.org,2002:null", test: /^(?:~|[Nn]ull|NULL)?$/, resolve: () => null, options: E.nullOptions, stringify: () => E.nullOptions.nullStr }, { identify: (t) => typeof t == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/, resolve: () => true, options: E.boolOptions, stringify: zs }, { identify: (t) => typeof t == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i, resolve: () => false, options: E.boolOptions, stringify: zs }, { identify: ht, default: true, tag: "tag:yaml.org,2002:int", format: "BIN", test: /^([-+]?)0b([0-1_]+)$/, resolve: (t, e, n) => Qt(e, n, 2), stringify: (t) => Jn(t, 2, "0b") }, { identify: ht, default: true, tag: "tag:yaml.org,2002:int", format: "OCT", test: /^([-+]?)0([0-7_]+)$/, resolve: (t, e, n) => Qt(e, n, 8), stringify: (t) => Jn(t, 8, "0") }, { identify: ht, default: true, tag: "tag:yaml.org,2002:int", test: /^([-+]?)([0-9][0-9_]*)$/, resolve: (t, e, n) => Qt(e, n, 10), stringify: E.stringifyNumber }, { identify: ht, default: true, tag: "tag:yaml.org,2002:int", format: "HEX", test: /^([-+]?)0x([0-9a-fA-F_]+)$/, resolve: (t, e, n) => Qt(e, n, 16), stringify: (t) => Jn(t, 16, "0x") }, { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^(?:[-+]?\.inf|(\.nan))$/i, resolve: (t, e) => e ? NaN : t[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, stringify: E.stringifyNumber }, { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", format: "EXP", test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/, resolve: (t) => parseFloat(t.replace(/_/g, "")), stringify: ({ value: t }) => Number(t).toExponential() }, { identify: (t) => typeof t == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/, resolve(t, e) {
    let n = new E.Scalar(parseFloat(t.replace(/_/g, "")));
    if (e) {
      let r = e.replace(/_/g, "");
      r[r.length - 1] === "0" && (n.minFractionDigits = r.length);
    }
    return n;
  }, stringify: E.stringifyNumber }], D.binary, D.omap, D.pairs, D.set, D.intTime, D.floatTime, D.timestamp), ba = { core: Sa, failsafe: Gn, json: ci, yaml11: wa }, Na = { binary: D.binary, bool: ti, float: ai, floatExp: oi, floatNaN: ii, floatTime: D.floatTime, int: ri, intHex: si, intOct: ni, intTime: D.intTime, map: gt, null: ei, omap: D.omap, pairs: D.pairs, seq: Gt, set: D.set, timestamp: D.timestamp };
  function Oa(t, e, n) {
    if (e) {
      let r = n.filter((i) => i.tag === e), s = r.find((i) => !i.format) || r[0];
      if (!s) throw new Error(`Tag ${e} not found`);
      return s;
    }
    return n.find((r) => (r.identify && r.identify(t) || r.class && t instanceof r.class) && !r.format);
  }
  function La(t, e, n) {
    if (t instanceof E.Node) return t;
    let { defaultPrefix: r, onTagObj: s, prevObjects: i, schema: o, wrapScalars: a } = n;
    e && e.startsWith("!!") && (e = r + e.slice(2));
    let c = Oa(t, e, o.tags);
    if (!c) {
      if (typeof t.toJSON == "function" && (t = t.toJSON()), !t || typeof t != "object") return a ? new E.Scalar(t) : t;
      c = t instanceof Map ? gt : t[Symbol.iterator] ? Gt : gt;
    }
    s && (s(c), delete n.onTagObj);
    let l = { value: void 0, node: void 0 };
    if (t && typeof t == "object" && i) {
      let f = i.get(t);
      if (f) {
        let m = new E.Alias(f);
        return n.aliasNodes.push(m), m;
      }
      l.value = t, i.set(t, l);
    }
    return l.node = c.createNode ? c.createNode(n.schema, t, n) : a ? new E.Scalar(t) : t, e && l.node instanceof E.Node && (l.node.tag = e), l.node;
  }
  function Aa(t, e, n, r) {
    let s = t[r.replace(/\W/g, "")];
    if (!s) {
      let i = Object.keys(t).map((o) => JSON.stringify(o)).join(", ");
      throw new Error(`Unknown schema "${r}"; use one of ${i}`);
    }
    if (Array.isArray(n)) for (let i of n) s = s.concat(i);
    else typeof n == "function" && (s = n(s.slice()));
    for (let i = 0; i < s.length; ++i) {
      let o = s[i];
      if (typeof o == "string") {
        let a = e[o];
        if (!a) {
          let c = Object.keys(e).map((l) => JSON.stringify(l)).join(", ");
          throw new Error(`Unknown custom tag "${o}"; use one of ${c}`);
        }
        s[i] = a;
      }
    }
    return s;
  }
  var Ta = (t, e) => t.key < e.key ? -1 : t.key > e.key ? 1 : 0, dt = class t {
    constructor({ customTags: e, merge: n, schema: r, sortMapEntries: s, tags: i }) {
      this.merge = !!n, this.name = r, this.sortMapEntries = s === true ? Ta : s || null, !e && i && D.warnOptionDeprecation("tags", "customTags"), this.tags = Aa(ba, Na, e || i, r);
    }
    createNode(e, n, r, s) {
      let i = { defaultPrefix: t.defaultPrefix, schema: this, wrapScalars: n }, o = s ? Object.assign(s, i) : i;
      return La(e, r, o);
    }
    createPair(e, n, r) {
      r || (r = { wrapScalars: true });
      let s = this.createNode(e, r.wrapScalars, null, r), i = this.createNode(n, r.wrapScalars, null, r);
      return new E.Pair(s, i);
    }
  };
  Jt._defineProperty(dt, "defaultPrefix", Jt.defaultTagPrefix);
  Jt._defineProperty(dt, "defaultTags", Jt.defaultTags);
  li.Schema = dt;
});
var mi = te((en) => {
  var Y = le(), S = qe(), fi = Xn(), Ca = { anchorPrefix: "a", customTags: null, indent: 2, indentSeq: true, keepCstNodes: false, keepNodeTypes: true, keepBlobsInJSON: true, mapAsMap: false, maxAliasCount: 100, prettyErrors: false, simpleKeys: false, version: "1.2" }, Ma = { get binary() {
    return S.binaryOptions;
  }, set binary(t) {
    Object.assign(S.binaryOptions, t);
  }, get bool() {
    return S.boolOptions;
  }, set bool(t) {
    Object.assign(S.boolOptions, t);
  }, get int() {
    return S.intOptions;
  }, set int(t) {
    Object.assign(S.intOptions, t);
  }, get null() {
    return S.nullOptions;
  }, set null(t) {
    Object.assign(S.nullOptions, t);
  }, get str() {
    return S.strOptions;
  }, set str(t) {
    Object.assign(S.strOptions, t);
  } }, pi = { "1.0": { schema: "yaml-1.1", merge: true, tagPrefixes: [{ handle: "!", prefix: Y.defaultTagPrefix }, { handle: "!!", prefix: "tag:private.yaml.org,2002:" }] }, 1.1: { schema: "yaml-1.1", merge: true, tagPrefixes: [{ handle: "!", prefix: "!" }, { handle: "!!", prefix: Y.defaultTagPrefix }] }, 1.2: { schema: "core", merge: false, tagPrefixes: [{ handle: "!", prefix: "!" }, { handle: "!!", prefix: Y.defaultTagPrefix }] } };
  function ui(t, e) {
    if ((t.version || t.options.version) === "1.0") {
      let s = e.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
      if (s) return "!" + s[1];
      let i = e.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
      return i ? `!${i[1]}/${i[2]}` : `!${e.replace(/^tag:/, "")}`;
    }
    let n = t.tagPrefixes.find((s) => e.indexOf(s.prefix) === 0);
    if (!n) {
      let s = t.getDefaults().tagPrefixes;
      n = s && s.find((i) => e.indexOf(i.prefix) === 0);
    }
    if (!n) return e[0] === "!" ? e : `!<${e}>`;
    let r = e.substr(n.prefix.length).replace(/[!,[\]{}]/g, (s) => ({ "!": "%21", ",": "%2C", "[": "%5B", "]": "%5D", "{": "%7B", "}": "%7D" })[s]);
    return n.handle + r;
  }
  function ka(t, e) {
    if (e instanceof S.Alias) return S.Alias;
    if (e.tag) {
      let s = t.filter((i) => i.tag === e.tag);
      if (s.length > 0) return s.find((i) => i.format === e.format) || s[0];
    }
    let n, r;
    if (e instanceof S.Scalar) {
      r = e.value;
      let s = t.filter((i) => i.identify && i.identify(r) || i.class && r instanceof i.class);
      n = s.find((i) => i.format === e.format) || s.find((i) => !i.format);
    } else r = e, n = t.find((s) => s.nodeClass && r instanceof s.nodeClass);
    if (!n) {
      let s = r && r.constructor ? r.constructor.name : typeof r;
      throw new Error(`Tag not resolved for ${s} value`);
    }
    return n;
  }
  function va(t, e, { anchors: n, doc: r }) {
    let s = [], i = r.anchors.getName(t);
    return i && (n[i] = t, s.push(`&${i}`)), t.tag ? s.push(ui(r, t.tag)) : e.default || s.push(ui(r, e.tag)), s.join(" ");
  }
  function Xt(t, e, n, r) {
    let { anchors: s, schema: i } = e.doc, o;
    if (!(t instanceof S.Node)) {
      let l = { aliasNodes: [], onTagObj: (f) => o = f, prevObjects: /* @__PURE__ */ new Map() };
      t = i.createNode(t, true, null, l);
      for (let f of l.aliasNodes) {
        f.source = f.source.node;
        let m = s.getName(f.source);
        m || (m = s.newName(), s.map[m] = f.source);
      }
    }
    if (t instanceof S.Pair) return t.toString(e, n, r);
    o || (o = ka(i.tags, t));
    let a = va(t, o, e);
    a.length > 0 && (e.indentAtStart = (e.indentAtStart || 0) + a.length + 1);
    let c = typeof o.stringify == "function" ? o.stringify(t, e, n, r) : t instanceof S.Scalar ? S.stringifyString(t, e, n, r) : t.toString(e, n, r);
    return a ? t instanceof S.Scalar || c[0] === "{" || c[0] === "[" ? `${a} ${c}` : `${a}
${e.indent}${c}` : c;
  }
  var zn = class t {
    static validAnchorNode(e) {
      return e instanceof S.Scalar || e instanceof S.YAMLSeq || e instanceof S.YAMLMap;
    }
    constructor(e) {
      Y._defineProperty(this, "map", /* @__PURE__ */ Object.create(null)), this.prefix = e;
    }
    createAlias(e, n) {
      return this.setAnchor(e, n), new S.Alias(e);
    }
    createMergePair(...e) {
      let n = new S.Merge();
      return n.value.items = e.map((r) => {
        if (r instanceof S.Alias) {
          if (r.source instanceof S.YAMLMap) return r;
        } else if (r instanceof S.YAMLMap) return this.createAlias(r);
        throw new Error("Merge sources must be Map nodes or their Aliases");
      }), n;
    }
    getName(e) {
      let { map: n } = this;
      return Object.keys(n).find((r) => n[r] === e);
    }
    getNames() {
      return Object.keys(this.map);
    }
    getNode(e) {
      return this.map[e];
    }
    newName(e) {
      e || (e = this.prefix);
      let n = Object.keys(this.map);
      for (let r = 1; ; ++r) {
        let s = `${e}${r}`;
        if (!n.includes(s)) return s;
      }
    }
    resolveNodes() {
      let { map: e, _cstAliases: n } = this;
      Object.keys(e).forEach((r) => {
        e[r] = e[r].resolved;
      }), n.forEach((r) => {
        r.source = r.source.resolved;
      }), delete this._cstAliases;
    }
    setAnchor(e, n) {
      if (e != null && !t.validAnchorNode(e)) throw new Error("Anchors may only be set for Scalar, Seq and Map nodes");
      if (n && /[\x00-\x19\s,[\]{}]/.test(n)) throw new Error("Anchor names must not contain whitespace or control characters");
      let { map: r } = this, s = e && Object.keys(r).find((i) => r[i] === e);
      if (s) if (n) s !== n && (delete r[s], r[n] = e);
      else return s;
      else {
        if (!n) {
          if (!e) return null;
          n = this.newName();
        }
        r[n] = e;
      }
      return n;
    }
  }, zt = (t, e) => {
    if (t && typeof t == "object") {
      let { tag: n } = t;
      t instanceof S.Collection ? (n && (e[n] = true), t.items.forEach((r) => zt(r, e))) : t instanceof S.Pair ? (zt(t.key, e), zt(t.value, e)) : t instanceof S.Scalar && n && (e[n] = true);
    }
    return e;
  }, Ia = (t) => Object.keys(zt(t, {}));
  function Pa(t, e) {
    let n = { before: [], after: [] }, r, s = false;
    for (let i of e) if (i.valueRange) {
      if (r !== void 0) {
        let a = "Document contains trailing content not separated by a ... or --- line";
        t.errors.push(new Y.YAMLSyntaxError(i, a));
        break;
      }
      let o = S.resolveNode(t, i);
      s && (o.spaceBefore = true, s = false), r = o;
    } else i.comment !== null ? (r === void 0 ? n.before : n.after).push(i.comment) : i.type === Y.Type.BLANK_LINE && (s = true, r === void 0 && n.before.length > 0 && !t.commentBefore && (t.commentBefore = n.before.join(`
`), n.before = []));
    if (t.contents = r || null, !r) t.comment = n.before.concat(n.after).join(`
`) || null;
    else {
      let i = n.before.join(`
`);
      if (i) {
        let o = r instanceof S.Collection && r.items[0] ? r.items[0] : r;
        o.commentBefore = o.commentBefore ? `${i}
${o.commentBefore}` : i;
      }
      t.comment = n.after.join(`
`) || null;
    }
  }
  function _a({ tagPrefixes: t }, e) {
    let [n, r] = e.parameters;
    if (!n || !r) {
      let s = "Insufficient parameters given for %TAG directive";
      throw new Y.YAMLSemanticError(e, s);
    }
    if (t.some((s) => s.handle === n)) {
      let s = "The %TAG directive must only be given at most once per handle in the same document.";
      throw new Y.YAMLSemanticError(e, s);
    }
    return { handle: n, prefix: r };
  }
  function xa(t, e) {
    let [n] = e.parameters;
    if (e.name === "YAML:1.0" && (n = "1.0"), !n) {
      let r = "Insufficient parameters given for %YAML directive";
      throw new Y.YAMLSemanticError(e, r);
    }
    if (!pi[n]) {
      let s = `Document will be parsed as YAML ${t.version || t.options.version} rather than YAML ${n}`;
      t.warnings.push(new Y.YAMLWarning(e, s));
    }
    return n;
  }
  function Ra(t, e, n) {
    let r = [], s = false;
    for (let i of e) {
      let { comment: o, name: a } = i;
      switch (a) {
        case "TAG":
          try {
            t.tagPrefixes.push(_a(t, i));
          } catch (c) {
            t.errors.push(c);
          }
          s = true;
          break;
        case "YAML":
        case "YAML:1.0":
          if (t.version) {
            let c = "The %YAML directive must only be given at most once per document.";
            t.errors.push(new Y.YAMLSemanticError(i, c));
          }
          try {
            t.version = xa(t, i);
          } catch (c) {
            t.errors.push(c);
          }
          s = true;
          break;
        default:
          if (a) {
            let c = `YAML only supports %TAG and %YAML directives, and not %${a}`;
            t.warnings.push(new Y.YAMLWarning(i, c));
          }
      }
      o && r.push(o);
    }
    if (n && !s && (t.version || n.version || t.options.version) === "1.1") {
      let i = ({ handle: o, prefix: a }) => ({ handle: o, prefix: a });
      t.tagPrefixes = n.tagPrefixes.map(i), t.version = n.version;
    }
    t.commentBefore = r.join(`
`) || null;
  }
  function Ve(t) {
    if (t instanceof S.Collection) return true;
    throw new Error("Expected a YAML collection as document contents");
  }
  var Zt = class t {
    constructor(e) {
      this.anchors = new zn(e.anchorPrefix), this.commentBefore = null, this.comment = null, this.contents = null, this.directivesEndMarker = null, this.errors = [], this.options = e, this.schema = null, this.tagPrefixes = [], this.version = null, this.warnings = [];
    }
    add(e) {
      return Ve(this.contents), this.contents.add(e);
    }
    addIn(e, n) {
      Ve(this.contents), this.contents.addIn(e, n);
    }
    delete(e) {
      return Ve(this.contents), this.contents.delete(e);
    }
    deleteIn(e) {
      return S.isEmptyPath(e) ? this.contents == null ? false : (this.contents = null, true) : (Ve(this.contents), this.contents.deleteIn(e));
    }
    getDefaults() {
      return t.defaults[this.version] || t.defaults[this.options.version] || {};
    }
    get(e, n) {
      return this.contents instanceof S.Collection ? this.contents.get(e, n) : void 0;
    }
    getIn(e, n) {
      return S.isEmptyPath(e) ? !n && this.contents instanceof S.Scalar ? this.contents.value : this.contents : this.contents instanceof S.Collection ? this.contents.getIn(e, n) : void 0;
    }
    has(e) {
      return this.contents instanceof S.Collection ? this.contents.has(e) : false;
    }
    hasIn(e) {
      return S.isEmptyPath(e) ? this.contents !== void 0 : this.contents instanceof S.Collection ? this.contents.hasIn(e) : false;
    }
    set(e, n) {
      Ve(this.contents), this.contents.set(e, n);
    }
    setIn(e, n) {
      S.isEmptyPath(e) ? this.contents = n : (Ve(this.contents), this.contents.setIn(e, n));
    }
    setSchema(e, n) {
      if (!e && !n && this.schema) return;
      typeof e == "number" && (e = e.toFixed(1)), e === "1.0" || e === "1.1" || e === "1.2" ? (this.version ? this.version = e : this.options.version = e, delete this.options.schema) : e && typeof e == "string" && (this.options.schema = e), Array.isArray(n) && (this.options.customTags = n);
      let r = Object.assign({}, this.getDefaults(), this.options);
      this.schema = new fi.Schema(r);
    }
    parse(e, n) {
      this.options.keepCstNodes && (this.cstNode = e), this.options.keepNodeTypes && (this.type = "DOCUMENT");
      let { directives: r = [], contents: s = [], directivesEndMarker: i, error: o, valueRange: a } = e;
      if (o && (o.source || (o.source = this), this.errors.push(o)), Ra(this, r, n), i && (this.directivesEndMarker = true), this.range = a ? [a.start, a.end] : null, this.setSchema(), this.anchors._cstAliases = [], Pa(this, s), this.anchors.resolveNodes(), this.options.prettyErrors) {
        for (let c of this.errors) c instanceof Y.YAMLError && c.makePretty();
        for (let c of this.warnings) c instanceof Y.YAMLError && c.makePretty();
      }
      return this;
    }
    listNonDefaultTags() {
      return Ia(this.contents).filter((e) => e.indexOf(fi.Schema.defaultPrefix) !== 0);
    }
    setTagPrefix(e, n) {
      if (e[0] !== "!" || e[e.length - 1] !== "!") throw new Error("Handle must start and end with !");
      if (n) {
        let r = this.tagPrefixes.find((s) => s.handle === e);
        r ? r.prefix = n : this.tagPrefixes.push({ handle: e, prefix: n });
      } else this.tagPrefixes = this.tagPrefixes.filter((r) => r.handle !== e);
    }
    toJSON(e, n) {
      let { keepBlobsInJSON: r, mapAsMap: s, maxAliasCount: i } = this.options, o = r && (typeof e != "string" || !(this.contents instanceof S.Scalar)), a = { doc: this, indentStep: "  ", keep: o, mapAsMap: o && !!s, maxAliasCount: i, stringify: Xt }, c = Object.keys(this.anchors.map);
      c.length > 0 && (a.anchors = new Map(c.map((f) => [this.anchors.map[f], { alias: [], aliasCount: 0, count: 1 }])));
      let l = S.toJSON(this.contents, e, a);
      if (typeof n == "function" && a.anchors) for (let { count: f, res: m } of a.anchors.values()) n(m, f);
      return l;
    }
    toString() {
      if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
      let e = this.options.indent;
      if (!Number.isInteger(e) || e <= 0) {
        let c = JSON.stringify(e);
        throw new Error(`"indent" option must be a positive integer, not ${c}`);
      }
      this.setSchema();
      let n = [], r = false;
      if (this.version) {
        let c = "%YAML 1.2";
        this.schema.name === "yaml-1.1" && (this.version === "1.0" ? c = "%YAML:1.0" : this.version === "1.1" && (c = "%YAML 1.1")), n.push(c), r = true;
      }
      let s = this.listNonDefaultTags();
      this.tagPrefixes.forEach(({ handle: c, prefix: l }) => {
        s.some((f) => f.indexOf(l) === 0) && (n.push(`%TAG ${c} ${l}`), r = true);
      }), (r || this.directivesEndMarker) && n.push("---"), this.commentBefore && ((r || !this.directivesEndMarker) && n.unshift(""), n.unshift(this.commentBefore.replace(/^/gm, "#")));
      let i = { anchors: /* @__PURE__ */ Object.create(null), doc: this, indent: "", indentStep: " ".repeat(e), stringify: Xt }, o = false, a = null;
      if (this.contents) {
        this.contents instanceof S.Node && (this.contents.spaceBefore && (r || this.directivesEndMarker) && n.push(""), this.contents.commentBefore && n.push(this.contents.commentBefore.replace(/^/gm, "#")), i.forceBlockIndent = !!this.comment, a = this.contents.comment);
        let c = a ? null : () => o = true, l = Xt(this.contents, i, () => a = null, c);
        n.push(S.addComment(l, "", a));
      } else this.contents !== void 0 && n.push(Xt(this.contents, i));
      return this.comment && ((!o || a) && n[n.length - 1] !== "" && n.push(""), n.push(this.comment.replace(/^/gm, "#"))), n.join(`
`) + `
`;
    }
  };
  Y._defineProperty(Zt, "defaults", pi);
  en.Document = Zt;
  en.defaultOptions = Ca;
  en.scalarOptions = Ma;
});
var di = te((gi) => {
  var Zn = Rs(), Oe = mi(), Da = Xn(), Ya = le(), $a = Qn();
  qe();
  function Ba(t, e = true, n) {
    n === void 0 && typeof e == "string" && (n = e, e = true);
    let r = Object.assign({}, Oe.Document.defaults[Oe.defaultOptions.version], Oe.defaultOptions);
    return new Da.Schema(r).createNode(t, e, n);
  }
  var We = class extends Oe.Document {
    constructor(e) {
      super(Object.assign({}, Oe.defaultOptions, e));
    }
  };
  function Fa(t, e) {
    let n = [], r;
    for (let s of Zn.parse(t)) {
      let i = new We(e);
      i.parse(s, r), n.push(i), r = i;
    }
    return n;
  }
  function hi(t, e) {
    let n = Zn.parse(t), r = new We(e).parse(n[0]);
    if (n.length > 1) {
      let s = "Source contains multiple documents; please use YAML.parseAllDocuments()";
      r.errors.unshift(new Ya.YAMLSemanticError(n[1], s));
    }
    return r;
  }
  function qa(t, e) {
    let n = hi(t, e);
    if (n.warnings.forEach((r) => $a.warn(r)), n.errors.length > 0) throw n.errors[0];
    return n.toJSON();
  }
  function Ua(t, e) {
    let n = new We(e);
    return n.contents = t, String(n);
  }
  var Ka = { createNode: Ba, defaultOptions: Oe.defaultOptions, Document: We, parse: qa, parseAllDocuments: Fa, parseCST: Zn.parse, parseDocument: hi, scalarOptions: Oe.scalarOptions, stringify: Ua };
  gi.YAML = Ka;
});
var Ei = te((qm, yi) => {
  yi.exports = di().YAML;
});
var Si = te((J) => {
  var je = qe(), Qe = le();
  J.findPair = je.findPair;
  J.parseMap = je.resolveMap;
  J.parseSeq = je.resolveSeq;
  J.stringifyNumber = je.stringifyNumber;
  J.stringifyString = je.stringifyString;
  J.toJSON = je.toJSON;
  J.Type = Qe.Type;
  J.YAMLError = Qe.YAMLError;
  J.YAMLReferenceError = Qe.YAMLReferenceError;
  J.YAMLSemanticError = Qe.YAMLSemanticError;
  J.YAMLSyntaxError = Qe.YAMLSyntaxError;
  J.YAMLWarning = Qe.YAMLWarning;
});
var nr = {};
rr(nr, { languages: () => _r, options: () => xr, parsers: () => tr, printers: () => Ha });
var Pi = (t, e, n, r) => {
  if (!(t && e == null)) return e.replaceAll ? e.replaceAll(n, r) : n.global ? e.replace(n, r) : e.split(n).join(r);
}, yt = Pi;
var Le = "string", Je = "array", Ge = "cursor", He = "indent", Ae = "align", Xe = "trim", Te = "group", Ce = "fill", he = "if-break", ze = "indent-if-break", Me = "line-suffix", Ze = "line-suffix-boundary", Z = "line", et = "label", ke = "break-parent", Et = /* @__PURE__ */ new Set([Ge, He, Ae, Xe, Te, Ce, he, ze, Me, Ze, Z, et, ke]);
var _i = (t, e, n) => {
  if (!(t && e == null)) return Array.isArray(e) || typeof e == "string" ? e[n < 0 ? e.length + n : n] : e.at(n);
}, x = _i;
function xi(t) {
  if (typeof t == "string") return Le;
  if (Array.isArray(t)) return Je;
  if (!t) return;
  let { type: e } = t;
  if (Et.has(e)) return e;
}
var ve = xi;
var Ri = (t) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t);
function Di(t) {
  let e = t === null ? "null" : typeof t;
  if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (ve(t)) throw new Error("doc is valid.");
  let n = Object.prototype.toString.call(t);
  if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
  let r = Ri([...Et].map((s) => `'${s}'`));
  return `Unexpected doc.type '${t.type}'.
Expected it to be ${r}.`;
}
var nn = class extends Error {
  constructor(e) {
    super(Di(e));
    __publicField(this, "name", "InvalidDocError");
    this.doc = e;
  }
}, rn = nn;
function $i(t, e) {
  if (typeof t == "string") return e(t);
  let n = /* @__PURE__ */ new Map();
  return r(t);
  function r(i) {
    if (n.has(i)) return n.get(i);
    let o = s(i);
    return n.set(i, o), o;
  }
  function s(i) {
    switch (ve(i)) {
      case Je:
        return e(i.map(r));
      case Ce:
        return e({ ...i, parts: i.parts.map(r) });
      case he:
        return e({ ...i, breakContents: r(i.breakContents), flatContents: r(i.flatContents) });
      case Te: {
        let { expandedStates: o, contents: a } = i;
        return o ? (o = o.map(r), a = o[0]) : a = r(a), e({ ...i, contents: a, expandedStates: o });
      }
      case Ae:
      case He:
      case ze:
      case et:
      case Me:
        return e({ ...i, contents: r(i.contents) });
      case Le:
      case Ge:
      case Xe:
      case Ze:
      case Z:
      case ke:
        return e(i);
      default:
        throw new rn(i);
    }
  }
}
function ir(t, e = tt) {
  return $i(t, (n) => typeof n == "string" ? v(e, n.split(`
`)) : n);
}
var sn = () => {
}, on = sn;
function nt(t, e) {
  return { type: Ae, contents: e, n: t };
}
function Ie(t, e = {}) {
  return on(e.expandedStates), { type: Te, id: e.id, contents: t, break: !!e.shouldBreak, expandedStates: e.expandedStates };
}
function an(t) {
  return nt(Number.NEGATIVE_INFINITY, t);
}
function ar(t) {
  return nt({ type: "root" }, t);
}
function cr(t) {
  return nt(-1, t);
}
function cn(t, e) {
  return Ie(t[0], { ...e, expandedStates: t });
}
function St(t) {
  return { type: Ce, parts: t };
}
function rt(t, e = "", n = {}) {
  return { type: he, breakContents: t, flatContents: e, groupId: n.groupId };
}
function lr(t) {
  return { type: Me, contents: t };
}
var wt = { type: ke };
var Bi = { type: Z, hard: true }, Fi = { type: Z, hard: true, literal: true }, ne = { type: Z }, bt = { type: Z, soft: true }, N = [Bi, wt], tt = [Fi, wt];
function v(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) r !== 0 && n.push(t), n.push(e[r]);
  return n;
}
function Nt(t) {
  return (e, n, r) => {
    let s = !!(r != null && r.backwards);
    if (n === false) return false;
    let { length: i } = e, o = n;
    for (; o >= 0 && o < i; ) {
      let a = e.charAt(o);
      if (t instanceof RegExp) {
        if (!t.test(a)) return o;
      } else if (!t.includes(a)) return o;
      s ? o-- : o++;
    }
    return o === -1 || o === i ? o : false;
  };
}
var ln = Nt(" 	");
function qi(t, e, n) {
  let r = !!(n != null && n.backwards);
  if (e === false) return false;
  let s = t.charAt(e);
  if (r) {
    if (t.charAt(e - 1) === "\r" && s === `
`) return e - 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return e - 1;
  } else {
    if (s === "\r" && t.charAt(e + 1) === `
`) return e + 2;
    if (s === `
` || s === "\r" || s === "\u2028" || s === "\u2029") return e + 1;
  }
  return e;
}
var fn = qi;
function Ui(t, e) {
  let n = e - 1;
  n = ln(t, n, { backwards: true }), n = fn(t, n, { backwards: true }), n = ln(t, n, { backwards: true });
  let r = fn(t, n, { backwards: true });
  return n !== r;
}
var fr = Ui;
var un = class extends Error {
  constructor(e, n, r = "type") {
    super(`Unexpected ${n} node ${r}: ${JSON.stringify(e[r])}.`);
    __publicField(this, "name", "UnexpectedNodeError");
    this.node = e;
  }
}, ur = un;
function pr(t, e) {
  let { node: n } = t;
  if (n.type === "root" && e.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/u.test(e.filepath)) return async (r) => {
    let s = await r(e.originalText, { parser: "json" });
    return s ? [s, N] : void 0;
  };
}
pr.getVisitorKeys = () => [];
var mr = pr;
var st = null;
function it(t) {
  if (st !== null && typeof st.property) {
    let e = st;
    return st = it.prototype = null, e;
  }
  return st = it.prototype = t ?? /* @__PURE__ */ Object.create(null), new it();
}
var Ki = 10;
for (let t = 0; t <= Ki; t++) it();
function pn(t) {
  return it(t);
}
function Vi(t, e = "type") {
  pn(t);
  function n(r) {
    let s = r[e], i = t[s];
    if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: r });
    return i;
  }
  return n;
}
var hr = Vi;
var Wi = Object.fromEntries(Object.entries({ root: ["children"], document: ["head", "body", "children"], documentHead: ["children"], documentBody: ["children"], directive: [], alias: [], blockLiteral: [], blockFolded: ["children"], plain: ["children"], quoteSingle: [], quoteDouble: [], mapping: ["children"], mappingItem: ["key", "value", "children"], mappingKey: ["content", "children"], mappingValue: ["content", "children"], sequence: ["children"], sequenceItem: ["content", "children"], flowMapping: ["children"], flowMappingItem: ["key", "value", "children"], flowSequence: ["children"], flowSequenceItem: ["content", "children"], comment: [], tag: [], anchor: [] }).map(([t, e]) => [t, [...e, "anchor", "tag", "indicatorComment", "leadingComments", "middleComments", "trailingComment", "endComments"]])), gr = Wi;
var ji = hr(gr), dr = ji;
function Pe(t) {
  return t.position.start.offset;
}
function yr(t) {
  return t.position.end.offset;
}
function Er(t) {
  return /^\s*@(?:prettier|format)\s*$/u.test(t);
}
function Sr(t) {
  return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/u.test(t);
}
function wr(t) {
  return `# @format

${t}`;
}
function Qi(t) {
  return Array.isArray(t) && t.length > 0;
}
var _e = Qi;
function H(t, e) {
  return typeof (t == null ? void 0 : t.type) == "string" && (!e || e.includes(t.type));
}
function mn(t, e, n) {
  return e("children" in t ? { ...t, children: t.children.map((r) => mn(r, e, t)) } : t, n);
}
function xe(t, e, n) {
  Object.defineProperty(t, e, { get: n, enumerable: false });
}
function Nr(t, e) {
  let n = 0, r = e.length;
  for (let s = t.position.end.offset - 1; s < r; s++) {
    let i = e[s];
    if (i === `
` && n++, n === 1 && /\S/u.test(i)) return false;
    if (n === 2) return true;
  }
  return false;
}
function Ot(t) {
  let { node: e } = t;
  switch (e.type) {
    case "tag":
    case "anchor":
    case "comment":
      return false;
  }
  let n = t.stack.length;
  for (let r = 1; r < n; r++) {
    let s = t.stack[r], i = t.stack[r - 1];
    if (Array.isArray(i) && typeof s == "number" && s !== i.length - 1) return false;
  }
  return true;
}
function Lt(t) {
  return _e(t.children) ? Lt(x(false, t.children, -1)) : t;
}
function br(t) {
  return t.value.trim() === "prettier-ignore";
}
function Or(t) {
  let { node: e } = t;
  if (e.type === "documentBody") {
    let n = t.parent.head;
    return R(n) && br(x(false, n.endComments, -1));
  }
  return ee(e) && br(x(false, e.leadingComments, -1));
}
function Re(t) {
  return !_e(t.children) && !Ji(t);
}
function Ji(t) {
  return ee(t) || ie(t) || hn(t) || K(t) || R(t);
}
function ee(t) {
  return _e(t == null ? void 0 : t.leadingComments);
}
function ie(t) {
  return _e(t == null ? void 0 : t.middleComments);
}
function hn(t) {
  return t == null ? void 0 : t.indicatorComment;
}
function K(t) {
  return t == null ? void 0 : t.trailingComment;
}
function R(t) {
  return _e(t == null ? void 0 : t.endComments);
}
function Lr(t) {
  let e = [], n;
  for (let r of t.split(/( +)/u)) r !== " " ? n === " " ? e.push(r) : e.push((e.pop() || "") + r) : n === void 0 && e.unshift(""), n = r;
  return n === " " && e.push((e.pop() || "") + " "), e[0] === "" && (e.shift(), e.unshift(" " + (e.shift() || ""))), e;
}
function Ar(t, e, n) {
  let r = e.split(`
`).map((s, i, o) => i === 0 && i === o.length - 1 ? s : i !== 0 && i !== o.length - 1 ? s.trim() : i === 0 ? s.trimEnd() : s.trimStart());
  return n.proseWrap === "preserve" ? r.map((s) => s.length === 0 ? [] : [s]) : r.map((s) => s.length === 0 ? [] : Lr(s)).reduce((s, i, o) => o !== 0 && r[o - 1].length > 0 && i.length > 0 && !(t === "quoteDouble" && x(false, x(false, s, -1), -1).endsWith("\\")) ? [...s.slice(0, -1), [...x(false, s, -1), ...i]] : [...s, i], []).map((s) => n.proseWrap === "never" ? [s.join(" ")] : s);
}
function Tr(t, { parentIndent: e, isLastDescendant: n, options: r }) {
  let s = t.position.start.line === t.position.end.line ? "" : r.originalText.slice(t.position.start.offset, t.position.end.offset).match(/^[^\n]*\n(.*)$/su)[1], i;
  if (t.indent === null) {
    let c = s.match(/^(?<leadingSpace> *)[^\n\r ]/mu);
    i = c ? c.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
  } else i = t.indent - 1 + e;
  let o = s.split(`
`).map((c) => c.slice(i));
  if (r.proseWrap === "preserve" || t.type === "blockLiteral") return a(o.map((c) => c.length === 0 ? [] : [c]));
  return a(o.map((c) => c.length === 0 ? [] : Lr(c)).reduce((c, l, f) => f !== 0 && o[f - 1].length > 0 && l.length > 0 && !/^\s/u.test(l[0]) && !/^\s|\s$/u.test(x(false, c, -1)) ? [...c.slice(0, -1), [...x(false, c, -1), ...l]] : [...c, l], []).map((c) => c.reduce((l, f) => l.length > 0 && /\s$/u.test(x(false, l, -1)) ? [...l.slice(0, -1), x(false, l, -1) + " " + f] : [...l, f], [])).map((c) => r.proseWrap === "never" ? [c.join(" ")] : c));
  function a(c) {
    if (t.chomping === "keep") return x(false, c, -1).length === 0 ? c.slice(0, -1) : c;
    let l = 0;
    for (let f = c.length - 1; f >= 0 && c[f].length === 0; f--) l++;
    return l === 0 ? c : l >= 2 && !n ? c.slice(0, -(l - 1)) : c.slice(0, -l);
  }
}
function ot(t) {
  if (!t) return true;
  switch (t.type) {
    case "plain":
    case "quoteDouble":
    case "quoteSingle":
    case "alias":
    case "flowMapping":
    case "flowSequence":
      return true;
    default:
      return false;
  }
}
var gn = /* @__PURE__ */ new WeakMap();
function At(t, e) {
  let { node: n, root: r } = t, s;
  return gn.has(r) ? s = gn.get(r) : (s = /* @__PURE__ */ new Set(), gn.set(r, s)), !s.has(n.position.end.line) && (s.add(n.position.end.line), Nr(n, e) && !dn(t.parent)) ? bt : "";
}
function dn(t) {
  return R(t) && !H(t, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
}
function I(t, e) {
  return nt(" ".repeat(t), e);
}
function Gi(t, e, n) {
  let { node: r } = t, s = t.ancestors.filter((l) => l.type === "sequence" || l.type === "mapping").length, i = Ot(t), o = [r.type === "blockFolded" ? ">" : "|"];
  r.indent !== null && o.push(r.indent.toString()), r.chomping !== "clip" && o.push(r.chomping === "keep" ? "+" : "-"), hn(r) && o.push(" ", e("indicatorComment"));
  let a = Tr(r, { parentIndent: s, isLastDescendant: i, options: n }), c = [];
  for (let [l, f] of a.entries()) l === 0 && c.push(N), c.push(St(v(ne, f))), l !== a.length - 1 ? c.push(f.length === 0 ? N : ar(tt)) : r.chomping === "keep" && i && c.push(an(f.length === 0 ? N : tt));
  return r.indent === null ? o.push(cr(I(n.tabWidth, c))) : o.push(an(I(r.indent - 1 + s, c))), o;
}
var Cr = Gi;
function Tt(t, e, n) {
  let { node: r } = t, s = r.type === "flowMapping", i = s ? "{" : "[", o = s ? "}" : "]", a = bt;
  s && r.children.length > 0 && n.bracketSpacing && (a = ne);
  let c = x(false, r.children, -1), l = (c == null ? void 0 : c.type) === "flowMappingItem" && Re(c.key) && Re(c.value);
  return [i, I(n.tabWidth, [a, Hi(t, e, n), n.trailingComma === "none" ? "" : rt(","), R(r) ? [N, v(N, t.map(e, "endComments"))] : ""]), l ? "" : a, o];
}
function Hi(t, e, n) {
  return t.map(({ isLast: r, node: s, next: i }) => [e(), r ? "" : [",", ne, s.position.start.line !== i.position.start.line ? At(t, n.originalText) : ""]], "children");
}
function Xi(t, e, n) {
  var C;
  let { node: r, parent: s } = t, { key: i, value: o } = r, a = Re(i), c = Re(o);
  if (a && c) return ": ";
  let l = e("key"), f = zi(r) ? " " : "";
  if (c) return r.type === "flowMappingItem" && s.type === "flowMapping" ? l : r.type === "mappingItem" && yn(i.content, n) && !K(i.content) && ((C = s.tag) == null ? void 0 : C.value) !== "tag:yaml.org,2002:set" ? [l, f, ":"] : ["? ", I(2, l)];
  let m = e("value");
  if (a) return [": ", I(2, m)];
  if (ee(o) || !ot(i.content)) return ["? ", I(2, l), N, ...t.map(() => [e(), N], "value", "leadingComments"), ": ", I(2, m)];
  if (Zi(i.content) && !ee(i.content) && !ie(i.content) && !K(i.content) && !R(i) && !ee(o.content) && !ie(o.content) && !R(o) && yn(o.content, n)) return [l, f, ": ", m];
  let d = Symbol("mappingKey"), y = Ie([rt("? "), Ie(I(2, l), { id: d })]), h = [N, ": ", I(2, m)], g = [f, ":"];
  ee(o.content) || R(o) && o.content && !H(o.content, ["mapping", "sequence"]) || s.type === "mapping" && K(i.content) && ot(o.content) || H(o.content, ["mapping", "sequence"]) && o.content.tag === null && o.content.anchor === null ? g.push(N) : o.content ? g.push(ne) : K(o) && g.push(" "), g.push(m);
  let w = I(n.tabWidth, g);
  return yn(i.content, n) && !ee(i.content) && !ie(i.content) && !R(i) ? cn([[l, w]]) : cn([[y, rt(h, w, { groupId: d })]]);
}
function yn(t, e) {
  if (!t) return true;
  switch (t.type) {
    case "plain":
    case "quoteSingle":
    case "quoteDouble":
      break;
    case "alias":
      return true;
    default:
      return false;
  }
  if (e.proseWrap === "preserve") return t.position.start.line === t.position.end.line;
  if (/\\$/mu.test(e.originalText.slice(t.position.start.offset, t.position.end.offset))) return false;
  switch (e.proseWrap) {
    case "never":
      return !t.value.includes(`
`);
    case "always":
      return !/[\n ]/u.test(t.value);
    default:
      return false;
  }
}
function zi(t) {
  var e;
  return ((e = t.key.content) == null ? void 0 : e.type) === "alias";
}
function Zi(t) {
  if (!t) return true;
  switch (t.type) {
    case "plain":
    case "quoteDouble":
    case "quoteSingle":
      return t.position.start.line === t.position.end.line;
    case "alias":
      return true;
    default:
      return false;
  }
}
var Mr = Xi;
function eo(t) {
  return mn(t, to);
}
function to(t) {
  switch (t.type) {
    case "document":
      xe(t, "head", () => t.children[0]), xe(t, "body", () => t.children[1]);
      break;
    case "documentBody":
    case "sequenceItem":
    case "flowSequenceItem":
    case "mappingKey":
    case "mappingValue":
      xe(t, "content", () => t.children[0]);
      break;
    case "mappingItem":
    case "flowMappingItem":
      xe(t, "key", () => t.children[0]), xe(t, "value", () => t.children[1]);
      break;
  }
  return t;
}
var kr = eo;
function no(t, e, n) {
  let { node: r } = t, s = [];
  r.type !== "mappingValue" && ee(r) && s.push([v(N, t.map(n, "leadingComments")), N]);
  let { tag: i, anchor: o } = r;
  i && s.push(n("tag")), i && o && s.push(" "), o && s.push(n("anchor"));
  let a = "";
  return H(r, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !Ot(t) && (a = At(t, e.originalText)), (i || o) && (H(r, ["sequence", "mapping"]) && !ie(r) ? s.push(N) : s.push(" ")), ie(r) && s.push([r.middleComments.length === 1 ? "" : N, v(N, t.map(n, "middleComments")), N]), Or(t) ? s.push(ir(e.originalText.slice(r.position.start.offset, r.position.end.offset).trimEnd())) : s.push(Ie(ro(t, e, n))), K(r) && !H(r, ["document", "documentHead"]) && s.push(lr([r.type === "mappingValue" && !r.content ? "" : " ", t.parent.type === "mappingKey" && t.getParentNode(2).type === "mapping" && ot(r) ? "" : wt, n("trailingComment")])), dn(r) && s.push(I(r.type === "sequenceItem" ? 2 : 0, [N, v(N, t.map(({ node: c }) => [fr(e.originalText, Pe(c)) ? N : "", n()], "endComments"))])), s.push(a), s;
}
function ro(t, e, n) {
  let { node: r } = t;
  switch (r.type) {
    case "root": {
      let s = [];
      t.each(({ node: o, next: a, isFirst: c }) => {
        c || s.push(N), s.push(n()), vr(o, a) ? (s.push(N, "..."), K(o) && s.push(" ", n("trailingComment"))) : a && !K(a.head) && s.push(N, "---");
      }, "children");
      let i = Lt(r);
      return (!H(i, ["blockLiteral", "blockFolded"]) || i.chomping !== "keep") && s.push(N), s;
    }
    case "document": {
      let s = [];
      return io(t, e) === "head" && ((r.head.children.length > 0 || r.head.endComments.length > 0) && s.push(n("head")), K(r.head) ? s.push(["---", " ", n(["head", "trailingComment"])]) : s.push("---")), so(r) && s.push(n("body")), v(N, s);
    }
    case "documentHead":
      return v(N, [...t.map(n, "children"), ...t.map(n, "endComments")]);
    case "documentBody": {
      let { children: s, endComments: i } = r, o = "";
      if (s.length > 0 && i.length > 0) {
        let a = Lt(r);
        H(a, ["blockFolded", "blockLiteral"]) ? a.chomping !== "keep" && (o = [N, N]) : o = N;
      }
      return [v(N, t.map(n, "children")), o, v(N, t.map(n, "endComments"))];
    }
    case "directive":
      return ["%", v(" ", [r.name, ...r.parameters])];
    case "comment":
      return ["#", r.value];
    case "alias":
      return ["*", r.value];
    case "tag":
      return e.originalText.slice(r.position.start.offset, r.position.end.offset);
    case "anchor":
      return ["&", r.value];
    case "plain":
      return at(r.type, e.originalText.slice(r.position.start.offset, r.position.end.offset), e);
    case "quoteDouble":
    case "quoteSingle": {
      let s = "'", i = '"', o = e.originalText.slice(r.position.start.offset + 1, r.position.end.offset - 1);
      if (r.type === "quoteSingle" && o.includes("\\") || r.type === "quoteDouble" && /\\[^"]/u.test(o)) {
        let c = r.type === "quoteDouble" ? i : s;
        return [c, at(r.type, o, e), c];
      }
      if (o.includes(i)) return [s, at(r.type, r.type === "quoteDouble" ? yt(false, yt(false, o, String.raw`\"`, i), "'", s.repeat(2)) : o, e), s];
      if (o.includes(s)) return [i, at(r.type, r.type === "quoteSingle" ? yt(false, o, "''", s) : o, e), i];
      let a = e.singleQuote ? s : i;
      return [a, at(r.type, o, e), a];
    }
    case "blockFolded":
    case "blockLiteral":
      return Cr(t, n, e);
    case "mapping":
    case "sequence":
      return v(N, t.map(n, "children"));
    case "sequenceItem":
      return ["- ", I(2, r.content ? n("content") : "")];
    case "mappingKey":
    case "mappingValue":
      return r.content ? n("content") : "";
    case "mappingItem":
    case "flowMappingItem":
      return Mr(t, n, e);
    case "flowMapping":
      return Tt(t, n, e);
    case "flowSequence":
      return Tt(t, n, e);
    case "flowSequenceItem":
      return n("content");
    default:
      throw new ur(r, "YAML");
  }
}
function so(t) {
  return t.body.children.length > 0 || R(t.body);
}
function vr(t, e) {
  return K(t) || e && (e.head.children.length > 0 || R(e.head));
}
function io(t, e) {
  let n = t.node;
  if (t.isFirst && /---(?:\s|$)/u.test(e.originalText.slice(Pe(n), Pe(n) + 4)) || n.head.children.length > 0 || R(n.head) || K(n.head)) return "head";
  let r = t.next;
  return vr(n, r) ? false : r ? "root" : false;
}
function at(t, e, n) {
  let r = Ar(t, e, n);
  return v(N, r.map((s) => St(v(ne, s))));
}
function Ir(t, e) {
  if (H(t)) switch (t.type) {
    case "comment":
      if (Er(t.value)) return null;
      break;
    case "quoteDouble":
    case "quoteSingle":
      e.type = "quote";
      break;
  }
}
Ir.ignoredProperties = /* @__PURE__ */ new Set(["position"]);
var oo = { preprocess: kr, embed: mr, print: no, massageAstNode: Ir, insertPragma: wr, getVisitorKeys: dr }, Pr = oo;
var _r = [{ linguistLanguageId: 407, name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", ".prettierrc", ".stylelintrc", ".lintstagedrc"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "dockercompose", "github-actions-workflow", "home-assistant"] }];
var Ct = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] } };
var ao = { bracketSpacing: Ct.bracketSpacing, singleQuote: Ct.singleQuote, proseWrap: Ct.proseWrap }, xr = ao;
var tr = {};
rr(tr, { yaml: () => Ga });
var Mt = `
`, Rr = "\r", Dr = function() {
  function t(e) {
    this.length = e.length;
    for (var n = [0], r = 0; r < e.length; ) switch (e[r]) {
      case Mt:
        r += Mt.length, n.push(r);
        break;
      case Rr:
        r += Rr.length, e[r] === Mt && (r += Mt.length), n.push(r);
        break;
      default:
        r++;
        break;
    }
    this.offsets = n;
  }
  return t.prototype.locationForIndex = function(e) {
    if (e < 0 || e > this.length) return null;
    for (var n = 0, r = this.offsets; r[n + 1] <= e; ) n++;
    var s = e - r[n];
    return { line: n, column: s };
  }, t.prototype.indexForLocation = function(e) {
    var n = e.line, r = e.column;
    return n < 0 || n >= this.offsets.length || r < 0 || r > this.lengthOfLine(n) ? null : this.offsets[n] + r;
  }, t.prototype.lengthOfLine = function(e) {
    var n = this.offsets[e], r = e === this.offsets.length - 1 ? this.length : this.offsets[e + 1];
    return r - n;
  }, t;
}();
function $(t, e = null) {
  "children" in t && t.children.forEach((n) => $(n, t)), "anchor" in t && t.anchor && $(t.anchor, t), "tag" in t && t.tag && $(t.tag, t), "leadingComments" in t && t.leadingComments.forEach((n) => $(n, t)), "middleComments" in t && t.middleComments.forEach((n) => $(n, t)), "indicatorComment" in t && t.indicatorComment && $(t.indicatorComment, t), "trailingComment" in t && t.trailingComment && $(t.trailingComment, t), "endComments" in t && t.endComments.forEach((n) => $(n, t)), Object.defineProperty(t, "_parent", { value: e, enumerable: false });
}
function de(t) {
  return `${t.line}:${t.column}`;
}
function Yr(t) {
  $(t);
  let e = co(t), n = t.children.slice();
  t.comments.sort((r, s) => r.position.start.offset - s.position.end.offset).filter((r) => !r._parent).forEach((r) => {
    for (; n.length > 1 && r.position.start.line > n[0].position.end.line; ) n.shift();
    lo(r, e, n[0]);
  });
}
function co(t) {
  let e = Array.from(new Array(t.position.end.line), () => ({}));
  for (let n of t.comments) e[n.position.start.line - 1].comment = n;
  return $r(e, t), e;
}
function $r(t, e) {
  if (e.position.start.offset !== e.position.end.offset) {
    if ("leadingComments" in e) {
      let { start: n } = e.position, { leadingAttachableNode: r } = t[n.line - 1];
      (!r || n.column < r.position.start.column) && (t[n.line - 1].leadingAttachableNode = e);
    }
    if ("trailingComment" in e && e.position.end.column > 1 && e.type !== "document" && e.type !== "documentHead") {
      let { end: n } = e.position, { trailingAttachableNode: r } = t[n.line - 1];
      (!r || n.column >= r.position.end.column) && (t[n.line - 1].trailingAttachableNode = e);
    }
    if (e.type !== "root" && e.type !== "document" && e.type !== "documentHead" && e.type !== "documentBody") {
      let { start: n, end: r } = e.position, s = [r.line].concat(n.line === r.line ? [] : n.line);
      for (let i of s) {
        let o = t[i - 1].trailingNode;
        (!o || r.column >= o.position.end.column) && (t[i - 1].trailingNode = e);
      }
    }
    "children" in e && e.children.forEach((n) => {
      $r(t, n);
    });
  }
}
function lo(t, e, n) {
  let r = t.position.start.line, { trailingAttachableNode: s } = e[r - 1];
  if (s) {
    if (s.trailingComment) throw new Error(`Unexpected multiple trailing comment at ${de(t.position.start)}`);
    $(t, s), s.trailingComment = t;
    return;
  }
  for (let o = r; o >= n.position.start.line; o--) {
    let { trailingNode: a } = e[o - 1], c;
    if (a) c = a;
    else if (o !== r && e[o - 1].comment) c = e[o - 1].comment._parent;
    else continue;
    if ((c.type === "sequence" || c.type === "mapping") && (c = c.children[0]), c.type === "mappingItem") {
      let [l, f] = c.children;
      c = Br(l) ? l : f;
    }
    for (; ; ) {
      if (fo(c, t)) {
        $(t, c), c.endComments.push(t);
        return;
      }
      if (!c._parent) break;
      c = c._parent;
    }
    break;
  }
  for (let o = r + 1; o <= n.position.end.line; o++) {
    let { leadingAttachableNode: a } = e[o - 1];
    if (a) {
      $(t, a), a.leadingComments.push(t);
      return;
    }
  }
  let i = n.children[1];
  $(t, i), i.endComments.push(t);
}
function fo(t, e) {
  if (t.position.start.offset < e.position.start.offset && t.position.end.offset > e.position.end.offset) switch (t.type) {
    case "flowMapping":
    case "flowSequence":
      return t.children.length === 0 || e.position.start.line > t.children[t.children.length - 1].position.end.line;
  }
  if (e.position.end.offset < t.position.end.offset) return false;
  switch (t.type) {
    case "sequenceItem":
      return e.position.start.column > t.position.start.column;
    case "mappingKey":
    case "mappingValue":
      return e.position.start.column > t._parent.position.start.column && (t.children.length === 0 || t.children.length === 1 && t.children[0].type !== "blockFolded" && t.children[0].type !== "blockLiteral") && (t.type === "mappingValue" || Br(t));
    default:
      return false;
  }
}
function Br(t) {
  return t.position.start !== t.position.end && (t.children.length === 0 || t.position.start.offset !== t.children[0].position.start.offset);
}
function b(t, e) {
  return { type: t, position: e };
}
function Fr(t, e, n) {
  return { ...b("root", t), children: e, comments: n };
}
function ct(t) {
  switch (t.type) {
    case "DOCUMENT":
      for (let e = t.contents.length - 1; e >= 0; e--) t.contents[e].type === "BLANK_LINE" ? t.contents.splice(e, 1) : ct(t.contents[e]);
      for (let e = t.directives.length - 1; e >= 0; e--) t.directives[e].type === "BLANK_LINE" && t.directives.splice(e, 1);
      break;
    case "FLOW_MAP":
    case "FLOW_SEQ":
    case "MAP":
    case "SEQ":
      for (let e = t.items.length - 1; e >= 0; e--) {
        let n = t.items[e];
        "char" in n || (n.type === "BLANK_LINE" ? t.items.splice(e, 1) : ct(n));
      }
      break;
    case "MAP_KEY":
    case "MAP_VALUE":
    case "SEQ_ITEM":
      t.node && ct(t.node);
      break;
    case "ALIAS":
    case "BLANK_LINE":
    case "BLOCK_FOLDED":
    case "BLOCK_LITERAL":
    case "COMMENT":
    case "DIRECTIVE":
    case "PLAIN":
    case "QUOTE_DOUBLE":
    case "QUOTE_SINGLE":
      break;
    default:
      throw new Error(`Unexpected node type ${JSON.stringify(t.type)}`);
  }
}
function X() {
  return { leadingComments: [] };
}
function oe(t = null) {
  return { trailingComment: t };
}
function B() {
  return { ...X(), ...oe() };
}
function qr(t, e, n) {
  return { ...b("alias", t), ...B(), ...e, value: n };
}
function Ur(t, e) {
  let n = t.cstNode;
  return qr(e.transformRange({ origStart: n.valueRange.origStart - 1, origEnd: n.valueRange.origEnd }), e.transformContent(t), n.rawValue);
}
function Kr(t) {
  return { ...t, type: "blockFolded" };
}
function Vr(t, e, n, r, s, i) {
  return { ...b("blockValue", t), ...X(), ...e, chomping: n, indent: r, value: s, indicatorComment: i };
}
var ae;
(function(t) {
  t.Tag = "!", t.Anchor = "&", t.Comment = "#";
})(ae || (ae = {}));
function Wr(t, e) {
  return { ...b("anchor", t), value: e };
}
function De(t, e) {
  return { ...b("comment", t), value: e };
}
function jr(t, e, n) {
  return { anchor: e, tag: t, middleComments: n };
}
function Qr(t, e) {
  return { ...b("tag", t), value: e };
}
function kt(t, e, n = () => false) {
  let r = t.cstNode, s = [], i = null, o = null, a = null;
  for (let c of r.props) {
    let l = e.text[c.origStart];
    switch (l) {
      case ae.Tag:
        i = i || c, o = Qr(e.transformRange(c), t.tag);
        break;
      case ae.Anchor:
        i = i || c, a = Wr(e.transformRange(c), r.anchor);
        break;
      case ae.Comment: {
        let f = De(e.transformRange(c), e.text.slice(c.origStart + 1, c.origEnd));
        e.comments.push(f), !n(f) && i && i.origEnd <= c.origStart && c.origEnd <= r.valueRange.origStart && s.push(f);
        break;
      }
      default:
        throw new Error(`Unexpected leading character ${JSON.stringify(l)}`);
    }
  }
  return jr(o, a, s);
}
var En;
(function(t) {
  t.CLIP = "clip", t.STRIP = "strip", t.KEEP = "keep";
})(En || (En = {}));
function vt(t, e) {
  let n = t.cstNode, r = 1, s = n.chomping === "CLIP" ? 0 : 1, o = n.header.origEnd - n.header.origStart - r - s !== 0, a = e.transformRange({ origStart: n.header.origStart, origEnd: n.valueRange.origEnd }), c = null, l = kt(t, e, (f) => {
    if (!(a.start.offset < f.position.start.offset && f.position.end.offset < a.end.offset)) return false;
    if (c) throw new Error(`Unexpected multiple indicator comments at ${de(f.position.start)}`);
    return c = f, true;
  });
  return Vr(a, l, En[n.chomping], o ? n.blockIndent : null, n.strValue, c);
}
function Jr(t, e) {
  return Kr(vt(t, e));
}
function Gr(t) {
  return { ...t, type: "blockLiteral" };
}
function Hr(t, e) {
  return Gr(vt(t, e));
}
function Xr(t, e) {
  return De(e.transformRange(t.range), t.comment);
}
function zr(t, e, n) {
  return { ...b("directive", t), ...B(), name: e, parameters: n };
}
function Ye(t, e) {
  for (let n of t.props) {
    let r = e.text[n.origStart];
    switch (r) {
      case ae.Comment:
        e.comments.push(De(e.transformRange(n), e.text.slice(n.origStart + 1, n.origEnd)));
        break;
      default:
        throw new Error(`Unexpected leading character ${JSON.stringify(r)}`);
    }
  }
}
function Zr(t, e) {
  return Ye(t, e), zr(e.transformRange(t.range), t.name, t.parameters);
}
function es(t, e, n, r) {
  return { ...b("document", t), ...oe(r), children: [e, n] };
}
function V(t, e) {
  return { start: t, end: e };
}
function Sn(t) {
  return { start: t, end: t };
}
function F(t = []) {
  return { endComments: t };
}
function ts(t, e, n) {
  return { ...b("documentBody", t), ...F(n), children: e ? [e] : [] };
}
function q(t) {
  return t[t.length - 1];
}
function It(t, e) {
  let n = t.match(e);
  return n ? n.index : -1;
}
function ns(t, e, n) {
  let r = t.cstNode, { comments: s, endComments: i, documentTrailingComment: o, documentHeadTrailingComment: a } = uo(r, e, n), c = e.transformNode(t.contents), { position: l, documentEndPoint: f } = po(r, c, e);
  return e.comments.push(...s, ...i), { documentBody: ts(l, c, i), documentEndPoint: f, documentTrailingComment: o, documentHeadTrailingComment: a };
}
function uo(t, e, n) {
  let r = [], s = [], i = [], o = [], a = false;
  for (let c = t.contents.length - 1; c >= 0; c--) {
    let l = t.contents[c];
    if (l.type === "COMMENT") {
      let f = e.transformNode(l);
      n && n.line === f.position.start.line ? o.unshift(f) : a ? r.unshift(f) : f.position.start.offset >= t.valueRange.origEnd ? i.unshift(f) : r.unshift(f);
    } else a = true;
  }
  if (i.length > 1) throw new Error(`Unexpected multiple document trailing comments at ${de(i[1].position.start)}`);
  if (o.length > 1) throw new Error(`Unexpected multiple documentHead trailing comments at ${de(o[1].position.start)}`);
  return { comments: r, endComments: s, documentTrailingComment: q(i) || null, documentHeadTrailingComment: q(o) || null };
}
function po(t, e, n) {
  let r = It(n.text.slice(t.valueRange.origEnd), /^\.\.\./), s = r === -1 ? t.valueRange.origEnd : Math.max(0, t.valueRange.origEnd - 1);
  n.text[s - 1] === "\r" && s--;
  let i = n.transformRange({ origStart: e !== null ? e.position.start.offset : s, origEnd: s }), o = r === -1 ? i.end : n.transformOffset(t.valueRange.origEnd + 3);
  return { position: i, documentEndPoint: o };
}
function rs(t, e, n, r) {
  return { ...b("documentHead", t), ...F(n), ...oe(r), children: e };
}
function ss(t, e) {
  let n = t.cstNode, { directives: r, comments: s, endComments: i } = mo(n, e), { position: o, endMarkerPoint: a } = ho(n, r, e);
  return e.comments.push(...s, ...i), { createDocumentHeadWithTrailingComment: (l) => (l && e.comments.push(l), rs(o, r, i, l)), documentHeadEndMarkerPoint: a };
}
function mo(t, e) {
  let n = [], r = [], s = [], i = false;
  for (let o = t.directives.length - 1; o >= 0; o--) {
    let a = e.transformNode(t.directives[o]);
    a.type === "comment" ? i ? r.unshift(a) : s.unshift(a) : (i = true, n.unshift(a));
  }
  return { directives: n, comments: r, endComments: s };
}
function ho(t, e, n) {
  let r = It(n.text.slice(0, t.valueRange.origStart), /---\s*$/);
  r > 0 && !/[\r\n]/.test(n.text[r - 1]) && (r = -1);
  let s = r === -1 ? { origStart: t.valueRange.origStart, origEnd: t.valueRange.origStart } : { origStart: r, origEnd: r + 3 };
  return e.length !== 0 && (s.origStart = e[0].position.start.offset), { position: n.transformRange(s), endMarkerPoint: r === -1 ? null : n.transformOffset(r) };
}
function is(t, e) {
  let { createDocumentHeadWithTrailingComment: n, documentHeadEndMarkerPoint: r } = ss(t, e), { documentBody: s, documentEndPoint: i, documentTrailingComment: o, documentHeadTrailingComment: a } = ns(t, e, r), c = n(a);
  return o && e.comments.push(o), es(V(c.position.start, i), c, s, o);
}
function Pt(t, e, n) {
  return { ...b("flowCollection", t), ...B(), ...F(), ...e, children: n };
}
function os(t, e, n) {
  return { ...Pt(t, e, n), type: "flowMapping" };
}
function _t(t, e, n) {
  return { ...b("flowMappingItem", t), ...X(), children: [e, n] };
}
function ce(t, e) {
  let n = [];
  for (let r of t) r && "type" in r && r.type === "COMMENT" ? e.comments.push(e.transformNode(r)) : n.push(r);
  return n;
}
function xt(t) {
  let [e, n] = ["?", ":"].map((r) => {
    let s = t.find((i) => "char" in i && i.char === r);
    return s ? { origStart: s.origOffset, origEnd: s.origOffset + 1 } : null;
  });
  return { additionalKeyRange: e, additionalValueRange: n };
}
function Rt(t, e) {
  let n = e;
  return (r) => t.slice(n, n = r);
}
function Dt(t) {
  let e = [], n = Rt(t, 1), r = false;
  for (let s = 1; s < t.length - 1; s++) {
    let i = t[s];
    if ("char" in i && i.char === ",") {
      e.push(n(s)), n(s + 1), r = false;
      continue;
    }
    r = true;
  }
  return r && e.push(n(t.length - 1)), e;
}
function wn(t, e) {
  return { ...b("mappingKey", t), ...oe(), ...F(), children: e ? [e] : [] };
}
function bn(t, e) {
  return { ...b("mappingValue", t), ...B(), ...F(), children: e ? [e] : [] };
}
function $e(t, e, n, r, s) {
  let i = e.transformNode(t.key), o = e.transformNode(t.value), a = i || r ? wn(e.transformRange({ origStart: r ? r.origStart : i.position.start.offset, origEnd: i ? i.position.end.offset : r.origStart + 1 }), i) : null, c = o || s ? bn(e.transformRange({ origStart: s ? s.origStart : o.position.start.offset, origEnd: o ? o.position.end.offset : s.origStart + 1 }), o) : null;
  return n(V(a ? a.position.start : c.position.start, c ? c.position.end : a.position.end), a || wn(Sn(c.position.start), null), c || bn(Sn(a.position.end), null));
}
function as(t, e) {
  let n = ce(t.cstNode.items, e), r = Dt(n), s = t.items.map((a, c) => {
    let l = r[c], { additionalKeyRange: f, additionalValueRange: m } = xt(l);
    return $e(a, e, _t, f, m);
  }), i = n[0], o = q(n);
  return os(e.transformRange({ origStart: i.origOffset, origEnd: o.origOffset + 1 }), e.transformContent(t), s);
}
function cs(t, e, n) {
  return { ...Pt(t, e, n), type: "flowSequence" };
}
function ls(t, e) {
  return { ...b("flowSequenceItem", t), children: [e] };
}
function fs(t, e) {
  let n = ce(t.cstNode.items, e), r = Dt(n), s = t.items.map((a, c) => {
    if (a.type !== "PAIR") {
      let l = e.transformNode(a);
      return ls(V(l.position.start, l.position.end), l);
    } else {
      let l = r[c], { additionalKeyRange: f, additionalValueRange: m } = xt(l);
      return $e(a, e, _t, f, m);
    }
  }), i = n[0], o = q(n);
  return cs(e.transformRange({ origStart: i.origOffset, origEnd: o.origOffset + 1 }), e.transformContent(t), s);
}
function us(t, e, n) {
  return { ...b("mapping", t), ...X(), ...e, children: n };
}
function ps(t, e, n) {
  return { ...b("mappingItem", t), ...X(), children: [e, n] };
}
function ms(t, e) {
  let n = t.cstNode;
  n.items.filter((o) => o.type === "MAP_KEY" || o.type === "MAP_VALUE").forEach((o) => Ye(o, e));
  let r = ce(n.items, e), s = go(r), i = t.items.map((o, a) => {
    let c = s[a], [l, f] = c[0].type === "MAP_VALUE" ? [null, c[0].range] : [c[0].range, c.length === 1 ? null : c[1].range];
    return $e(o, e, ps, l, f);
  });
  return us(V(i[0].position.start, q(i).position.end), e.transformContent(t), i);
}
function go(t) {
  let e = [], n = Rt(t, 0), r = false;
  for (let s = 0; s < t.length; s++) {
    if (t[s].type === "MAP_VALUE") {
      e.push(n(s + 1)), r = false;
      continue;
    }
    r && e.push(n(s)), r = true;
  }
  return r && e.push(n(1 / 0)), e;
}
function hs(t, e, n) {
  return { ...b("plain", t), ...B(), ...e, value: n };
}
function gs(t, e, n) {
  for (let r = e; r >= 0; r--) if (n.test(t[r])) return r;
  return -1;
}
function ds(t, e) {
  let n = t.cstNode;
  return hs(e.transformRange({ origStart: n.valueRange.origStart, origEnd: gs(e.text, n.valueRange.origEnd - 1, /\S/) + 1 }), e.transformContent(t), n.strValue);
}
function ys(t) {
  return { ...t, type: "quoteDouble" };
}
function Es(t, e, n) {
  return { ...b("quoteValue", t), ...e, ...B(), value: n };
}
function Yt(t, e) {
  let n = t.cstNode;
  return Es(e.transformRange(n.valueRange), e.transformContent(t), n.strValue);
}
function Ss(t, e) {
  return ys(Yt(t, e));
}
function ws(t) {
  return { ...t, type: "quoteSingle" };
}
function bs(t, e) {
  return ws(Yt(t, e));
}
function Ns(t, e, n) {
  return { ...b("sequence", t), ...X(), ...F(), ...e, children: n };
}
function Os(t, e) {
  return { ...b("sequenceItem", t), ...B(), ...F(), children: e ? [e] : [] };
}
function Ls(t, e) {
  let r = ce(t.cstNode.items, e).map((s, i) => {
    Ye(s, e);
    let o = e.transformNode(t.items[i]);
    return Os(V(e.transformOffset(s.valueRange.origStart), o === null ? e.transformOffset(s.valueRange.origStart + 1) : o.position.end), o);
  });
  return Ns(V(r[0].position.start, q(r).position.end), e.transformContent(t), r);
}
function As(t, e) {
  if (t === null || t.type === void 0 && t.value === null) return null;
  switch (t.type) {
    case "ALIAS":
      return Ur(t, e);
    case "BLOCK_FOLDED":
      return Jr(t, e);
    case "BLOCK_LITERAL":
      return Hr(t, e);
    case "COMMENT":
      return Xr(t, e);
    case "DIRECTIVE":
      return Zr(t, e);
    case "DOCUMENT":
      return is(t, e);
    case "FLOW_MAP":
      return as(t, e);
    case "FLOW_SEQ":
      return fs(t, e);
    case "MAP":
      return ms(t, e);
    case "PLAIN":
      return ds(t, e);
    case "QUOTE_DOUBLE":
      return Ss(t, e);
    case "QUOTE_SINGLE":
      return bs(t, e);
    case "SEQ":
      return Ls(t, e);
    default:
      throw new Error(`Unexpected node type ${t.type}`);
  }
}
function Ts(t, e, n) {
  let r = new SyntaxError(t);
  return r.name = "YAMLSyntaxError", r.source = e, r.position = n, r;
}
function Cs(t, e) {
  let n = t.source.range || t.source.valueRange;
  return Ts(t.message, e.text, e.transformRange(n));
}
function Ms(t, e, n) {
  return { offset: t, line: e, column: n };
}
function ks(t, e) {
  t < 0 ? t = 0 : t > e.text.length && (t = e.text.length);
  let n = e.locator.locationForIndex(t);
  return Ms(t, n.line + 1, n.column + 1);
}
function vs(t, e) {
  return V(e.transformOffset(t.origStart), e.transformOffset(t.origEnd));
}
function Is(t) {
  if (!t.setOrigRanges()) {
    let e = (n) => {
      if (yo(n)) return n.origStart = n.start, n.origEnd = n.end, true;
      if (Eo(n)) return n.origOffset = n.offset, true;
    };
    t.forEach((n) => Nn(n, e));
  }
}
function Nn(t, e) {
  if (!(!t || typeof t != "object") && e(t) !== true) for (let n of Object.keys(t)) {
    if (n === "context" || n === "error") continue;
    let r = t[n];
    Array.isArray(r) ? r.forEach((s) => Nn(s, e)) : Nn(r, e);
  }
}
function yo(t) {
  return typeof t.start == "number";
}
function Eo(t) {
  return typeof t.offset == "number";
}
function On(t) {
  if ("children" in t) {
    if (t.children.length === 1) {
      let e = t.children[0];
      if (e.type === "plain" && e.tag === null && e.anchor === null && e.value === "") return t.children.splice(0, 1), t;
    }
    t.children.forEach(On);
  }
  return t;
}
function Ln(t, e, n, r) {
  let s = e(t);
  return (i) => {
    r(s, i) && n(t, s = i);
  };
}
function An(t) {
  if (t === null || !("children" in t)) return;
  let e = t.children;
  if (e.forEach(An), t.type === "document") {
    let [i, o] = t.children;
    i.position.start.offset === i.position.end.offset ? i.position.start = i.position.end = o.position.start : o.position.start.offset === o.position.end.offset && (o.position.start = o.position.end = i.position.end);
  }
  let n = Ln(t.position, So, wo, Oo), r = Ln(t.position, bo, No, Lo);
  "endComments" in t && t.endComments.length !== 0 && (n(t.endComments[0].position.start), r(q(t.endComments).position.end));
  let s = e.filter((i) => i !== null);
  if (s.length !== 0) {
    let i = s[0], o = q(s);
    n(i.position.start), r(o.position.end), "leadingComments" in i && i.leadingComments.length !== 0 && n(i.leadingComments[0].position.start), "tag" in i && i.tag && n(i.tag.position.start), "anchor" in i && i.anchor && n(i.anchor.position.start), "trailingComment" in o && o.trailingComment && r(o.trailingComment.position.end);
  }
}
function So(t) {
  return t.start;
}
function wo(t, e) {
  t.start = e;
}
function bo(t) {
  return t.end;
}
function No(t, e) {
  t.end = e;
}
function Oo(t, e) {
  return e.offset < t.offset;
}
function Lo(t, e) {
  return e.offset > t.offset;
}
var wi = sr(Ei());
var G = sr(Si());
G.default.findPair;
G.default.toJSON;
G.default.parseMap;
G.default.parseSeq;
G.default.stringifyNumber;
G.default.stringifyString;
G.default.Type;
G.default.YAMLError;
G.default.YAMLReferenceError;
var er = G.default.YAMLSemanticError;
G.default.YAMLSyntaxError;
G.default.YAMLWarning;
var { Document: bi, parseCST: Ni } = wi.default;
function Oi(t) {
  let e = Ni(t);
  Is(e);
  let n = e.map((a) => new bi({ merge: false, keepCstNodes: true }).parse(a)), r = new Dr(t), s = [], i = { text: t, locator: r, comments: s, transformOffset: (a) => ks(a, i), transformRange: (a) => vs(a, i), transformNode: (a) => As(a, i), transformContent: (a) => kt(a, i) };
  for (let a of n) for (let c of a.errors) if (!(c instanceof er && c.message === 'Map keys must be unique; "<<" is repeated')) throw Cs(c, i);
  n.forEach((a) => ct(a.cstNode));
  let o = Fr(i.transformRange({ origStart: 0, origEnd: i.text.length }), n.map(i.transformNode), s);
  return Yr(o), An(o), On(o), o;
}
function Qa(t, e) {
  let n = new SyntaxError(t + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
  return Object.assign(n, e);
}
var Li = Qa;
function Ja(t) {
  try {
    let e = Oi(t);
    return delete e.comments, e;
  } catch (e) {
    throw e != null && e.position ? Li(e.message, { loc: e.position, cause: e }) : e;
  }
}
var Ga = { astFormat: "yaml", parse: Ja, hasPragma: Sr, locStart: Pe, locEnd: yr };
var Ha = { yaml: Pr };
var Oh = nr;
export {
  Oh as default,
  _r as languages,
  xr as options,
  tr as parsers,
  Ha as printers
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWFtbC1DTnFCS0phMC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0aWVyL3BsdWdpbnMveWFtbC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFRpPU9iamVjdC5jcmVhdGU7dmFyIHRuPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgQ2k9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjt2YXIgTWk9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7dmFyIGtpPU9iamVjdC5nZXRQcm90b3R5cGVPZix2aT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciB0ZT0odCxlKT0+KCk9PihlfHx0KChlPXtleHBvcnRzOnt9fSkuZXhwb3J0cyxlKSxlLmV4cG9ydHMpLHJyPSh0LGUpPT57Zm9yKHZhciBuIGluIGUpdG4odCxuLHtnZXQ6ZVtuXSxlbnVtZXJhYmxlOiEwfSl9LElpPSh0LGUsbixyKT0+e2lmKGUmJnR5cGVvZiBlPT1cIm9iamVjdFwifHx0eXBlb2YgZT09XCJmdW5jdGlvblwiKWZvcihsZXQgcyBvZiBNaShlKSkhdmkuY2FsbCh0LHMpJiZzIT09biYmdG4odCxzLHtnZXQ6KCk9PmVbc10sZW51bWVyYWJsZTohKHI9Q2koZSxzKSl8fHIuZW51bWVyYWJsZX0pO3JldHVybiB0fTt2YXIgc3I9KHQsZSxuKT0+KG49dCE9bnVsbD9UaShraSh0KSk6e30sSWkoZXx8IXR8fCF0Ll9fZXNNb2R1bGU/dG4obixcImRlZmF1bHRcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSk6bix0KSk7dmFyIGxlPXRlKFU9PntcInVzZSBzdHJpY3RcIjt2YXIgcmU9e0FOQ0hPUjpcIiZcIixDT01NRU5UOlwiI1wiLFRBRzpcIiFcIixESVJFQ1RJVkVTX0VORDpcIi1cIixET0NVTUVOVF9FTkQ6XCIuXCJ9LGx0PXtBTElBUzpcIkFMSUFTXCIsQkxBTktfTElORTpcIkJMQU5LX0xJTkVcIixCTE9DS19GT0xERUQ6XCJCTE9DS19GT0xERURcIixCTE9DS19MSVRFUkFMOlwiQkxPQ0tfTElURVJBTFwiLENPTU1FTlQ6XCJDT01NRU5UXCIsRElSRUNUSVZFOlwiRElSRUNUSVZFXCIsRE9DVU1FTlQ6XCJET0NVTUVOVFwiLEZMT1dfTUFQOlwiRkxPV19NQVBcIixGTE9XX1NFUTpcIkZMT1dfU0VRXCIsTUFQOlwiTUFQXCIsTUFQX0tFWTpcIk1BUF9LRVlcIixNQVBfVkFMVUU6XCJNQVBfVkFMVUVcIixQTEFJTjpcIlBMQUlOXCIsUVVPVEVfRE9VQkxFOlwiUVVPVEVfRE9VQkxFXCIsUVVPVEVfU0lOR0xFOlwiUVVPVEVfU0lOR0xFXCIsU0VROlwiU0VRXCIsU0VRX0lURU06XCJTRVFfSVRFTVwifSxBbz1cInRhZzp5YW1sLm9yZywyMDAyOlwiLFRvPXtNQVA6XCJ0YWc6eWFtbC5vcmcsMjAwMjptYXBcIixTRVE6XCJ0YWc6eWFtbC5vcmcsMjAwMjpzZXFcIixTVFI6XCJ0YWc6eWFtbC5vcmcsMjAwMjpzdHJcIn07ZnVuY3Rpb24gUHModCl7bGV0IGU9WzBdLG49dC5pbmRleE9mKGBcbmApO2Zvcig7biE9PS0xOyluKz0xLGUucHVzaChuKSxuPXQuaW5kZXhPZihgXG5gLG4pO3JldHVybiBlfWZ1bmN0aW9uIF9zKHQpe2xldCBlLG47cmV0dXJuIHR5cGVvZiB0PT1cInN0cmluZ1wiPyhlPVBzKHQpLG49dCk6KEFycmF5LmlzQXJyYXkodCkmJih0PXRbMF0pLHQmJnQuY29udGV4dCYmKHQubGluZVN0YXJ0c3x8KHQubGluZVN0YXJ0cz1Qcyh0LmNvbnRleHQuc3JjKSksZT10LmxpbmVTdGFydHMsbj10LmNvbnRleHQuc3JjKSkse2xpbmVTdGFydHM6ZSxzcmM6bn19ZnVuY3Rpb24gVG4odCxlKXtpZih0eXBlb2YgdCE9XCJudW1iZXJcInx8dDwwKXJldHVybiBudWxsO2xldHtsaW5lU3RhcnRzOm4sc3JjOnJ9PV9zKGUpO2lmKCFufHwhcnx8dD5yLmxlbmd0aClyZXR1cm4gbnVsbDtmb3IobGV0IGk9MDtpPG4ubGVuZ3RoOysraSl7bGV0IG89bltpXTtpZih0PG8pcmV0dXJue2xpbmU6aSxjb2w6dC1uW2ktMV0rMX07aWYodD09PW8pcmV0dXJue2xpbmU6aSsxLGNvbDoxfX1sZXQgcz1uLmxlbmd0aDtyZXR1cm57bGluZTpzLGNvbDp0LW5bcy0xXSsxfX1mdW5jdGlvbiBDbyh0LGUpe2xldHtsaW5lU3RhcnRzOm4sc3JjOnJ9PV9zKGUpO2lmKCFufHwhKHQ+PTEpfHx0Pm4ubGVuZ3RoKXJldHVybiBudWxsO2xldCBzPW5bdC0xXSxpPW5bdF07Zm9yKDtpJiZpPnMmJnJbaS0xXT09PWBcbmA7KS0taTtyZXR1cm4gci5zbGljZShzLGkpfWZ1bmN0aW9uIE1vKHtzdGFydDp0LGVuZDplfSxuLHI9ODApe2xldCBzPUNvKHQubGluZSxuKTtpZighcylyZXR1cm4gbnVsbDtsZXR7Y29sOml9PXQ7aWYocy5sZW5ndGg+cilpZihpPD1yLTEwKXM9cy5zdWJzdHIoMCxyLTEpK1wiXFx1MjAyNlwiO2Vsc2V7bGV0IGY9TWF0aC5yb3VuZChyLzIpO3MubGVuZ3RoPmkrZiYmKHM9cy5zdWJzdHIoMCxpK2YtMSkrXCJcXHUyMDI2XCIpLGktPXMubGVuZ3RoLXIscz1cIlxcdTIwMjZcIitzLnN1YnN0cigxLXIpfWxldCBvPTEsYT1cIlwiO2UmJihlLmxpbmU9PT10LmxpbmUmJmkrKGUuY29sLXQuY29sKTw9cisxP289ZS5jb2wtdC5jb2w6KG89TWF0aC5taW4ocy5sZW5ndGgrMSxyKS1pLGE9XCJcXHUyMDI2XCIpKTtsZXQgYz1pPjE/XCIgXCIucmVwZWF0KGktMSk6XCJcIixsPVwiXlwiLnJlcGVhdChvKTtyZXR1cm5gJHtzfVxuJHtjfSR7bH0ke2F9YH12YXIgQmU9Y2xhc3MgdHtzdGF0aWMgY29weShlKXtyZXR1cm4gbmV3IHQoZS5zdGFydCxlLmVuZCl9Y29uc3RydWN0b3IoZSxuKXt0aGlzLnN0YXJ0PWUsdGhpcy5lbmQ9bnx8ZX1pc0VtcHR5KCl7cmV0dXJuIHR5cGVvZiB0aGlzLnN0YXJ0IT1cIm51bWJlclwifHwhdGhpcy5lbmR8fHRoaXMuZW5kPD10aGlzLnN0YXJ0fXNldE9yaWdSYW5nZShlLG4pe2xldHtzdGFydDpyLGVuZDpzfT10aGlzO2lmKGUubGVuZ3RoPT09MHx8czw9ZVswXSlyZXR1cm4gdGhpcy5vcmlnU3RhcnQ9cix0aGlzLm9yaWdFbmQ9cyxuO2xldCBpPW47Zm9yKDtpPGUubGVuZ3RoJiYhKGVbaV0+cik7KSsraTt0aGlzLm9yaWdTdGFydD1yK2k7bGV0IG89aTtmb3IoO2k8ZS5sZW5ndGgmJiEoZVtpXT49cyk7KSsraTtyZXR1cm4gdGhpcy5vcmlnRW5kPXMraSxvfX0sc2U9Y2xhc3MgdHtzdGF0aWMgYWRkU3RyaW5nVGVybWluYXRvcihlLG4scil7aWYocltyLmxlbmd0aC0xXT09PWBcbmApcmV0dXJuIHI7bGV0IHM9dC5lbmRPZldoaXRlU3BhY2UoZSxuKTtyZXR1cm4gcz49ZS5sZW5ndGh8fGVbc109PT1gXG5gP3IrYFxuYDpyfXN0YXRpYyBhdERvY3VtZW50Qm91bmRhcnkoZSxuLHIpe2xldCBzPWVbbl07aWYoIXMpcmV0dXJuITA7bGV0IGk9ZVtuLTFdO2lmKGkmJmkhPT1gXG5gKXJldHVybiExO2lmKHIpe2lmKHMhPT1yKXJldHVybiExfWVsc2UgaWYocyE9PXJlLkRJUkVDVElWRVNfRU5EJiZzIT09cmUuRE9DVU1FTlRfRU5EKXJldHVybiExO2xldCBvPWVbbisxXSxhPWVbbisyXTtpZihvIT09c3x8YSE9PXMpcmV0dXJuITE7bGV0IGM9ZVtuKzNdO3JldHVybiFjfHxjPT09YFxuYHx8Yz09PVwiXHRcInx8Yz09PVwiIFwifXN0YXRpYyBlbmRPZklkZW50aWZpZXIoZSxuKXtsZXQgcj1lW25dLHM9cj09PVwiPFwiLGk9cz9bYFxuYCxcIlx0XCIsXCIgXCIsXCI+XCJdOltgXG5gLFwiXHRcIixcIiBcIixcIltcIixcIl1cIixcIntcIixcIn1cIixcIixcIl07Zm9yKDtyJiZpLmluZGV4T2Yocik9PT0tMTspcj1lW24rPTFdO3JldHVybiBzJiZyPT09XCI+XCImJihuKz0xKSxufXN0YXRpYyBlbmRPZkluZGVudChlLG4pe2xldCByPWVbbl07Zm9yKDtyPT09XCIgXCI7KXI9ZVtuKz0xXTtyZXR1cm4gbn1zdGF0aWMgZW5kT2ZMaW5lKGUsbil7bGV0IHI9ZVtuXTtmb3IoO3ImJnIhPT1gXG5gOylyPWVbbis9MV07cmV0dXJuIG59c3RhdGljIGVuZE9mV2hpdGVTcGFjZShlLG4pe2xldCByPWVbbl07Zm9yKDtyPT09XCJcdFwifHxyPT09XCIgXCI7KXI9ZVtuKz0xXTtyZXR1cm4gbn1zdGF0aWMgc3RhcnRPZkxpbmUoZSxuKXtsZXQgcj1lW24tMV07aWYocj09PWBcbmApcmV0dXJuIG47Zm9yKDtyJiZyIT09YFxuYDspcj1lW24tPTFdO3JldHVybiBuKzF9c3RhdGljIGVuZE9mQmxvY2tJbmRlbnQoZSxuLHIpe2xldCBzPXQuZW5kT2ZJbmRlbnQoZSxyKTtpZihzPnIrbilyZXR1cm4gczt7bGV0IGk9dC5lbmRPZldoaXRlU3BhY2UoZSxzKSxvPWVbaV07aWYoIW98fG89PT1gXG5gKXJldHVybiBpfXJldHVybiBudWxsfXN0YXRpYyBhdEJsYW5rKGUsbixyKXtsZXQgcz1lW25dO3JldHVybiBzPT09YFxuYHx8cz09PVwiXHRcInx8cz09PVwiIFwifHxyJiYhc31zdGF0aWMgbmV4dE5vZGVJc0luZGVudGVkKGUsbixyKXtyZXR1cm4hZXx8bjwwPyExOm4+MD8hMDpyJiZlPT09XCItXCJ9c3RhdGljIG5vcm1hbGl6ZU9mZnNldChlLG4pe2xldCByPWVbbl07cmV0dXJuIHI/ciE9PWBcbmAmJmVbbi0xXT09PWBcbmA/bi0xOnQuZW5kT2ZXaGl0ZVNwYWNlKGUsbik6bn1zdGF0aWMgZm9sZE5ld2xpbmUoZSxuLHIpe2xldCBzPTAsaT0hMSxvPVwiXCIsYT1lW24rMV07Zm9yKDthPT09XCIgXCJ8fGE9PT1cIlx0XCJ8fGE9PT1gXG5gOyl7c3dpdGNoKGEpe2Nhc2VgXG5gOnM9MCxuKz0xLG8rPWBcbmA7YnJlYWs7Y2FzZVwiXHRcIjpzPD1yJiYoaT0hMCksbj10LmVuZE9mV2hpdGVTcGFjZShlLG4rMiktMTticmVhaztjYXNlXCIgXCI6cys9MSxuKz0xO2JyZWFrfWE9ZVtuKzFdfXJldHVybiBvfHwobz1cIiBcIiksYSYmczw9ciYmKGk9ITApLHtmb2xkOm8sb2Zmc2V0Om4sZXJyb3I6aX19Y29uc3RydWN0b3IoZSxuLHIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiY29udGV4dFwiLHt2YWx1ZTpyfHxudWxsLHdyaXRhYmxlOiEwfSksdGhpcy5lcnJvcj1udWxsLHRoaXMucmFuZ2U9bnVsbCx0aGlzLnZhbHVlUmFuZ2U9bnVsbCx0aGlzLnByb3BzPW58fFtdLHRoaXMudHlwZT1lLHRoaXMudmFsdWU9bnVsbH1nZXRQcm9wVmFsdWUoZSxuLHIpe2lmKCF0aGlzLmNvbnRleHQpcmV0dXJuIG51bGw7bGV0e3NyYzpzfT10aGlzLmNvbnRleHQsaT10aGlzLnByb3BzW2VdO3JldHVybiBpJiZzW2kuc3RhcnRdPT09bj9zLnNsaWNlKGkuc3RhcnQrKHI/MTowKSxpLmVuZCk6bnVsbH1nZXQgYW5jaG9yKCl7Zm9yKGxldCBlPTA7ZTx0aGlzLnByb3BzLmxlbmd0aDsrK2Upe2xldCBuPXRoaXMuZ2V0UHJvcFZhbHVlKGUscmUuQU5DSE9SLCEwKTtpZihuIT1udWxsKXJldHVybiBufXJldHVybiBudWxsfWdldCBjb21tZW50KCl7bGV0IGU9W107Zm9yKGxldCBuPTA7bjx0aGlzLnByb3BzLmxlbmd0aDsrK24pe2xldCByPXRoaXMuZ2V0UHJvcFZhbHVlKG4scmUuQ09NTUVOVCwhMCk7ciE9bnVsbCYmZS5wdXNoKHIpfXJldHVybiBlLmxlbmd0aD4wP2Uuam9pbihgXG5gKTpudWxsfWNvbW1lbnRIYXNSZXF1aXJlZFdoaXRlc3BhY2UoZSl7bGV0e3NyYzpufT10aGlzLmNvbnRleHQ7aWYodGhpcy5oZWFkZXImJmU9PT10aGlzLmhlYWRlci5lbmR8fCF0aGlzLnZhbHVlUmFuZ2UpcmV0dXJuITE7bGV0e2VuZDpyfT10aGlzLnZhbHVlUmFuZ2U7cmV0dXJuIGUhPT1yfHx0LmF0QmxhbmsobixyLTEpfWdldCBoYXNDb21tZW50KCl7aWYodGhpcy5jb250ZXh0KXtsZXR7c3JjOmV9PXRoaXMuY29udGV4dDtmb3IobGV0IG49MDtuPHRoaXMucHJvcHMubGVuZ3RoOysrbilpZihlW3RoaXMucHJvcHNbbl0uc3RhcnRdPT09cmUuQ09NTUVOVClyZXR1cm4hMH1yZXR1cm4hMX1nZXQgaGFzUHJvcHMoKXtpZih0aGlzLmNvbnRleHQpe2xldHtzcmM6ZX09dGhpcy5jb250ZXh0O2ZvcihsZXQgbj0wO248dGhpcy5wcm9wcy5sZW5ndGg7KytuKWlmKGVbdGhpcy5wcm9wc1tuXS5zdGFydF0hPT1yZS5DT01NRU5UKXJldHVybiEwfXJldHVybiExfWdldCBpbmNsdWRlc1RyYWlsaW5nTGluZXMoKXtyZXR1cm4hMX1nZXQganNvbkxpa2UoKXtyZXR1cm5bbHQuRkxPV19NQVAsbHQuRkxPV19TRVEsbHQuUVVPVEVfRE9VQkxFLGx0LlFVT1RFX1NJTkdMRV0uaW5kZXhPZih0aGlzLnR5cGUpIT09LTF9Z2V0IHJhbmdlQXNMaW5lUG9zKCl7aWYoIXRoaXMucmFuZ2V8fCF0aGlzLmNvbnRleHQpcmV0dXJuO2xldCBlPVRuKHRoaXMucmFuZ2Uuc3RhcnQsdGhpcy5jb250ZXh0LnJvb3QpO2lmKCFlKXJldHVybjtsZXQgbj1Ubih0aGlzLnJhbmdlLmVuZCx0aGlzLmNvbnRleHQucm9vdCk7cmV0dXJue3N0YXJ0OmUsZW5kOm59fWdldCByYXdWYWx1ZSgpe2lmKCF0aGlzLnZhbHVlUmFuZ2V8fCF0aGlzLmNvbnRleHQpcmV0dXJuIG51bGw7bGV0e3N0YXJ0OmUsZW5kOm59PXRoaXMudmFsdWVSYW5nZTtyZXR1cm4gdGhpcy5jb250ZXh0LnNyYy5zbGljZShlLG4pfWdldCB0YWcoKXtmb3IobGV0IGU9MDtlPHRoaXMucHJvcHMubGVuZ3RoOysrZSl7bGV0IG49dGhpcy5nZXRQcm9wVmFsdWUoZSxyZS5UQUcsITEpO2lmKG4hPW51bGwpe2lmKG5bMV09PT1cIjxcIilyZXR1cm57dmVyYmF0aW06bi5zbGljZSgyLC0xKX07e2xldFtyLHMsaV09bi5tYXRjaCgvXiguKiEpKFteIV0qKSQvKTtyZXR1cm57aGFuZGxlOnMsc3VmZml4Oml9fX19cmV0dXJuIG51bGx9Z2V0IHZhbHVlUmFuZ2VDb250YWluc05ld2xpbmUoKXtpZighdGhpcy52YWx1ZVJhbmdlfHwhdGhpcy5jb250ZXh0KXJldHVybiExO2xldHtzdGFydDplLGVuZDpufT10aGlzLnZhbHVlUmFuZ2Use3NyYzpyfT10aGlzLmNvbnRleHQ7Zm9yKGxldCBzPWU7czxuOysrcylpZihyW3NdPT09YFxuYClyZXR1cm4hMDtyZXR1cm4hMX1wYXJzZUNvbW1lbnQoZSl7bGV0e3NyYzpufT10aGlzLmNvbnRleHQ7aWYobltlXT09PXJlLkNPTU1FTlQpe2xldCByPXQuZW5kT2ZMaW5lKG4sZSsxKSxzPW5ldyBCZShlLHIpO3JldHVybiB0aGlzLnByb3BzLnB1c2gocykscn1yZXR1cm4gZX1zZXRPcmlnUmFuZ2VzKGUsbil7cmV0dXJuIHRoaXMucmFuZ2UmJihuPXRoaXMucmFuZ2Uuc2V0T3JpZ1JhbmdlKGUsbikpLHRoaXMudmFsdWVSYW5nZSYmdGhpcy52YWx1ZVJhbmdlLnNldE9yaWdSYW5nZShlLG4pLHRoaXMucHJvcHMuZm9yRWFjaChyPT5yLnNldE9yaWdSYW5nZShlLG4pKSxufXRvU3RyaW5nKCl7bGV0e2NvbnRleHQ6e3NyYzplfSxyYW5nZTpuLHZhbHVlOnJ9PXRoaXM7aWYociE9bnVsbClyZXR1cm4gcjtsZXQgcz1lLnNsaWNlKG4uc3RhcnQsbi5lbmQpO3JldHVybiB0LmFkZFN0cmluZ1Rlcm1pbmF0b3IoZSxuLmVuZCxzKX19LHllPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSxuLHIpe2lmKCFyfHwhKG4gaW5zdGFuY2VvZiBzZSkpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFyZ3VtZW50cyBmb3IgbmV3ICR7ZX1gKTtzdXBlcigpLHRoaXMubmFtZT1lLHRoaXMubWVzc2FnZT1yLHRoaXMuc291cmNlPW59bWFrZVByZXR0eSgpe2lmKCF0aGlzLnNvdXJjZSlyZXR1cm47dGhpcy5ub2RlVHlwZT10aGlzLnNvdXJjZS50eXBlO2xldCBlPXRoaXMuc291cmNlLmNvbnRleHQmJnRoaXMuc291cmNlLmNvbnRleHQucm9vdDtpZih0eXBlb2YgdGhpcy5vZmZzZXQ9PVwibnVtYmVyXCIpe3RoaXMucmFuZ2U9bmV3IEJlKHRoaXMub2Zmc2V0LHRoaXMub2Zmc2V0KzEpO2xldCBuPWUmJlRuKHRoaXMub2Zmc2V0LGUpO2lmKG4pe2xldCByPXtsaW5lOm4ubGluZSxjb2w6bi5jb2wrMX07dGhpcy5saW5lUG9zPXtzdGFydDpuLGVuZDpyfX1kZWxldGUgdGhpcy5vZmZzZXR9ZWxzZSB0aGlzLnJhbmdlPXRoaXMuc291cmNlLnJhbmdlLHRoaXMubGluZVBvcz10aGlzLnNvdXJjZS5yYW5nZUFzTGluZVBvcztpZih0aGlzLmxpbmVQb3Mpe2xldHtsaW5lOm4sY29sOnJ9PXRoaXMubGluZVBvcy5zdGFydDt0aGlzLm1lc3NhZ2UrPWAgYXQgbGluZSAke259LCBjb2x1bW4gJHtyfWA7bGV0IHM9ZSYmTW8odGhpcy5saW5lUG9zLGUpO3MmJih0aGlzLm1lc3NhZ2UrPWA6XG5cbiR7c31cbmApfWRlbGV0ZSB0aGlzLnNvdXJjZX19LENuPWNsYXNzIGV4dGVuZHMgeWV7Y29uc3RydWN0b3IoZSxuKXtzdXBlcihcIllBTUxSZWZlcmVuY2VFcnJvclwiLGUsbil9fSxmdD1jbGFzcyBleHRlbmRzIHlle2NvbnN0cnVjdG9yKGUsbil7c3VwZXIoXCJZQU1MU2VtYW50aWNFcnJvclwiLGUsbil9fSxNbj1jbGFzcyBleHRlbmRzIHlle2NvbnN0cnVjdG9yKGUsbil7c3VwZXIoXCJZQU1MU3ludGF4RXJyb3JcIixlLG4pfX0sa249Y2xhc3MgZXh0ZW5kcyB5ZXtjb25zdHJ1Y3RvcihlLG4pe3N1cGVyKFwiWUFNTFdhcm5pbmdcIixlLG4pfX07ZnVuY3Rpb24ga28odCxlLG4pe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fXZhciB2bj1jbGFzcyB0IGV4dGVuZHMgc2V7c3RhdGljIGVuZE9mTGluZShlLG4scil7bGV0IHM9ZVtuXSxpPW47Zm9yKDtzJiZzIT09YFxuYCYmIShyJiYocz09PVwiW1wifHxzPT09XCJdXCJ8fHM9PT1cIntcInx8cz09PVwifVwifHxzPT09XCIsXCIpKTspe2xldCBvPWVbaSsxXTtpZihzPT09XCI6XCImJighb3x8bz09PWBcbmB8fG89PT1cIlx0XCJ8fG89PT1cIiBcInx8ciYmbz09PVwiLFwiKXx8KHM9PT1cIiBcInx8cz09PVwiXHRcIikmJm89PT1cIiNcIilicmVhaztpKz0xLHM9b31yZXR1cm4gaX1nZXQgc3RyVmFsdWUoKXtpZighdGhpcy52YWx1ZVJhbmdlfHwhdGhpcy5jb250ZXh0KXJldHVybiBudWxsO2xldHtzdGFydDplLGVuZDpufT10aGlzLnZhbHVlUmFuZ2Use3NyYzpyfT10aGlzLmNvbnRleHQscz1yW24tMV07Zm9yKDtlPG4mJihzPT09YFxuYHx8cz09PVwiXHRcInx8cz09PVwiIFwiKTspcz1yWy0tbi0xXTtsZXQgaT1cIlwiO2ZvcihsZXQgYT1lO2E8bjsrK2Epe2xldCBjPXJbYV07aWYoYz09PWBcbmApe2xldHtmb2xkOmwsb2Zmc2V0OmZ9PXNlLmZvbGROZXdsaW5lKHIsYSwtMSk7aSs9bCxhPWZ9ZWxzZSBpZihjPT09XCIgXCJ8fGM9PT1cIlx0XCIpe2xldCBsPWEsZj1yW2ErMV07Zm9yKDthPG4mJihmPT09XCIgXCJ8fGY9PT1cIlx0XCIpOylhKz0xLGY9clthKzFdO2YhPT1gXG5gJiYoaSs9YT5sP3Iuc2xpY2UobCxhKzEpOmMpfWVsc2UgaSs9Y31sZXQgbz1yW2VdO3N3aXRjaChvKXtjYXNlXCJcdFwiOntsZXQgYT1cIlBsYWluIHZhbHVlIGNhbm5vdCBzdGFydCB3aXRoIGEgdGFiIGNoYXJhY3RlclwiO3JldHVybntlcnJvcnM6W25ldyBmdCh0aGlzLGEpXSxzdHI6aX19Y2FzZVwiQFwiOmNhc2VcImBcIjp7bGV0IGE9YFBsYWluIHZhbHVlIGNhbm5vdCBzdGFydCB3aXRoIHJlc2VydmVkIGNoYXJhY3RlciAke299YDtyZXR1cm57ZXJyb3JzOltuZXcgZnQodGhpcyxhKV0sc3RyOml9fWRlZmF1bHQ6cmV0dXJuIGl9fXBhcnNlQmxvY2tWYWx1ZShlKXtsZXR7aW5kZW50Om4saW5GbG93OnIsc3JjOnN9PXRoaXMuY29udGV4dCxpPWUsbz1lO2ZvcihsZXQgYT1zW2ldO2E9PT1gXG5gJiYhc2UuYXREb2N1bWVudEJvdW5kYXJ5KHMsaSsxKTthPXNbaV0pe2xldCBjPXNlLmVuZE9mQmxvY2tJbmRlbnQocyxuLGkrMSk7aWYoYz09PW51bGx8fHNbY109PT1cIiNcIilicmVhaztzW2NdPT09YFxuYD9pPWM6KG89dC5lbmRPZkxpbmUocyxjLHIpLGk9byl9cmV0dXJuIHRoaXMudmFsdWVSYW5nZS5pc0VtcHR5KCkmJih0aGlzLnZhbHVlUmFuZ2Uuc3RhcnQ9ZSksdGhpcy52YWx1ZVJhbmdlLmVuZD1vLG99cGFyc2UoZSxuKXt0aGlzLmNvbnRleHQ9ZTtsZXR7aW5GbG93OnIsc3JjOnN9PWUsaT1uLG89c1tpXTtyZXR1cm4gbyYmbyE9PVwiI1wiJiZvIT09YFxuYCYmKGk9dC5lbmRPZkxpbmUocyxuLHIpKSx0aGlzLnZhbHVlUmFuZ2U9bmV3IEJlKG4saSksaT1zZS5lbmRPZldoaXRlU3BhY2UocyxpKSxpPXRoaXMucGFyc2VDb21tZW50KGkpLCghdGhpcy5oYXNDb21tZW50fHx0aGlzLnZhbHVlUmFuZ2UuaXNFbXB0eSgpKSYmKGk9dGhpcy5wYXJzZUJsb2NrVmFsdWUoaSkpLGl9fTtVLkNoYXI9cmU7VS5Ob2RlPXNlO1UuUGxhaW5WYWx1ZT12bjtVLlJhbmdlPUJlO1UuVHlwZT1sdDtVLllBTUxFcnJvcj15ZTtVLllBTUxSZWZlcmVuY2VFcnJvcj1DbjtVLllBTUxTZW1hbnRpY0Vycm9yPWZ0O1UuWUFNTFN5bnRheEVycm9yPU1uO1UuWUFNTFdhcm5pbmc9a247VS5fZGVmaW5lUHJvcGVydHk9a287VS5kZWZhdWx0VGFnUHJlZml4PUFvO1UuZGVmYXVsdFRhZ3M9VG99KTt2YXIgUnM9dGUoeHM9PntcInVzZSBzdHJpY3RcIjt2YXIgdT1sZSgpLFNlPWNsYXNzIGV4dGVuZHMgdS5Ob2Rle2NvbnN0cnVjdG9yKCl7c3VwZXIodS5UeXBlLkJMQU5LX0xJTkUpfWdldCBpbmNsdWRlc1RyYWlsaW5nTGluZXMoKXtyZXR1cm4hMH1wYXJzZShlLG4pe3JldHVybiB0aGlzLmNvbnRleHQ9ZSx0aGlzLnJhbmdlPW5ldyB1LlJhbmdlKG4sbisxKSxuKzF9fSx1dD1jbGFzcyBleHRlbmRzIHUuTm9kZXtjb25zdHJ1Y3RvcihlLG4pe3N1cGVyKGUsbiksdGhpcy5ub2RlPW51bGx9Z2V0IGluY2x1ZGVzVHJhaWxpbmdMaW5lcygpe3JldHVybiEhdGhpcy5ub2RlJiZ0aGlzLm5vZGUuaW5jbHVkZXNUcmFpbGluZ0xpbmVzfXBhcnNlKGUsbil7dGhpcy5jb250ZXh0PWU7bGV0e3BhcnNlTm9kZTpyLHNyYzpzfT1lLHthdExpbmVTdGFydDppLGxpbmVTdGFydDpvfT1lOyFpJiZ0aGlzLnR5cGU9PT11LlR5cGUuU0VRX0lURU0mJih0aGlzLmVycm9yPW5ldyB1LllBTUxTZW1hbnRpY0Vycm9yKHRoaXMsXCJTZXF1ZW5jZSBpdGVtcyBtdXN0IG5vdCBoYXZlIHByZWNlZGluZyBjb250ZW50IG9uIHRoZSBzYW1lIGxpbmVcIikpO2xldCBhPWk/bi1vOmUuaW5kZW50LGM9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShzLG4rMSksbD1zW2NdLGY9bD09PVwiI1wiLG09W10sZD1udWxsO2Zvcig7bD09PWBcbmB8fGw9PT1cIiNcIjspe2lmKGw9PT1cIiNcIil7bGV0IGg9dS5Ob2RlLmVuZE9mTGluZShzLGMrMSk7bS5wdXNoKG5ldyB1LlJhbmdlKGMsaCkpLGM9aH1lbHNle2k9ITAsbz1jKzE7bGV0IGg9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShzLG8pO3NbaF09PT1gXG5gJiZtLmxlbmd0aD09PTAmJihkPW5ldyBTZSxvPWQucGFyc2Uoe3NyYzpzfSxvKSksYz11Lk5vZGUuZW5kT2ZJbmRlbnQocyxvKX1sPXNbY119aWYodS5Ob2RlLm5leHROb2RlSXNJbmRlbnRlZChsLGMtKG8rYSksdGhpcy50eXBlIT09dS5UeXBlLlNFUV9JVEVNKT90aGlzLm5vZGU9cih7YXRMaW5lU3RhcnQ6aSxpbkNvbGxlY3Rpb246ITEsaW5kZW50OmEsbGluZVN0YXJ0Om8scGFyZW50OnRoaXN9LGMpOmwmJm8+bisxJiYoYz1vLTEpLHRoaXMubm9kZSl7aWYoZCl7bGV0IGg9ZS5wYXJlbnQuaXRlbXN8fGUucGFyZW50LmNvbnRlbnRzO2gmJmgucHVzaChkKX1tLmxlbmd0aCYmQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5wcm9wcyxtKSxjPXRoaXMubm9kZS5yYW5nZS5lbmR9ZWxzZSBpZihmKXtsZXQgaD1tWzBdO3RoaXMucHJvcHMucHVzaChoKSxjPWguZW5kfWVsc2UgYz11Lk5vZGUuZW5kT2ZMaW5lKHMsbisxKTtsZXQgeT10aGlzLm5vZGU/dGhpcy5ub2RlLnZhbHVlUmFuZ2UuZW5kOmM7cmV0dXJuIHRoaXMudmFsdWVSYW5nZT1uZXcgdS5SYW5nZShuLHkpLGN9c2V0T3JpZ1JhbmdlcyhlLG4pe3JldHVybiBuPXN1cGVyLnNldE9yaWdSYW5nZXMoZSxuKSx0aGlzLm5vZGU/dGhpcy5ub2RlLnNldE9yaWdSYW5nZXMoZSxuKTpufXRvU3RyaW5nKCl7bGV0e2NvbnRleHQ6e3NyYzplfSxub2RlOm4scmFuZ2U6cix2YWx1ZTpzfT10aGlzO2lmKHMhPW51bGwpcmV0dXJuIHM7bGV0IGk9bj9lLnNsaWNlKHIuc3RhcnQsbi5yYW5nZS5zdGFydCkrU3RyaW5nKG4pOmUuc2xpY2Uoci5zdGFydCxyLmVuZCk7cmV0dXJuIHUuTm9kZS5hZGRTdHJpbmdUZXJtaW5hdG9yKGUsci5lbmQsaSl9fSxFZT1jbGFzcyBleHRlbmRzIHUuTm9kZXtjb25zdHJ1Y3Rvcigpe3N1cGVyKHUuVHlwZS5DT01NRU5UKX1wYXJzZShlLG4pe3RoaXMuY29udGV4dD1lO2xldCByPXRoaXMucGFyc2VDb21tZW50KG4pO3JldHVybiB0aGlzLnJhbmdlPW5ldyB1LlJhbmdlKG4scikscn19O2Z1bmN0aW9uIEluKHQpe2xldCBlPXQ7Zm9yKDtlIGluc3RhbmNlb2YgdXQ7KWU9ZS5ub2RlO2lmKCEoZSBpbnN0YW5jZW9mICR0KSlyZXR1cm4gbnVsbDtsZXQgbj1lLml0ZW1zLmxlbmd0aCxyPS0xO2ZvcihsZXQgbz1uLTE7bz49MDstLW8pe2xldCBhPWUuaXRlbXNbb107aWYoYS50eXBlPT09dS5UeXBlLkNPTU1FTlQpe2xldHtpbmRlbnQ6YyxsaW5lU3RhcnQ6bH09YS5jb250ZXh0O2lmKGM+MCYmYS5yYW5nZS5zdGFydD49bCtjKWJyZWFrO3I9b31lbHNlIGlmKGEudHlwZT09PXUuVHlwZS5CTEFOS19MSU5FKXI9bztlbHNlIGJyZWFrfWlmKHI9PT0tMSlyZXR1cm4gbnVsbDtsZXQgcz1lLml0ZW1zLnNwbGljZShyLG4tciksaT1zWzBdLnJhbmdlLnN0YXJ0O2Zvcig7ZS5yYW5nZS5lbmQ9aSxlLnZhbHVlUmFuZ2UmJmUudmFsdWVSYW5nZS5lbmQ+aSYmKGUudmFsdWVSYW5nZS5lbmQ9aSksZSE9PXQ7KWU9ZS5jb250ZXh0LnBhcmVudDtyZXR1cm4gc312YXIgJHQ9Y2xhc3MgdCBleHRlbmRzIHUuTm9kZXtzdGF0aWMgbmV4dENvbnRlbnRIYXNJbmRlbnQoZSxuLHIpe2xldCBzPXUuTm9kZS5lbmRPZkxpbmUoZSxuKSsxO249dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShlLHMpO2xldCBpPWVbbl07cmV0dXJuIGk/bj49cytyPyEwOmkhPT1cIiNcIiYmaSE9PWBcbmA/ITE6dC5uZXh0Q29udGVudEhhc0luZGVudChlLG4scik6ITF9Y29uc3RydWN0b3IoZSl7c3VwZXIoZS50eXBlPT09dS5UeXBlLlNFUV9JVEVNP3UuVHlwZS5TRVE6dS5UeXBlLk1BUCk7Zm9yKGxldCByPWUucHJvcHMubGVuZ3RoLTE7cj49MDstLXIpaWYoZS5wcm9wc1tyXS5zdGFydDxlLmNvbnRleHQubGluZVN0YXJ0KXt0aGlzLnByb3BzPWUucHJvcHMuc2xpY2UoMCxyKzEpLGUucHJvcHM9ZS5wcm9wcy5zbGljZShyKzEpO2xldCBzPWUucHJvcHNbMF18fGUudmFsdWVSYW5nZTtlLnJhbmdlLnN0YXJ0PXMuc3RhcnQ7YnJlYWt9dGhpcy5pdGVtcz1bZV07bGV0IG49SW4oZSk7biYmQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5pdGVtcyxuKX1nZXQgaW5jbHVkZXNUcmFpbGluZ0xpbmVzKCl7cmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoPjB9cGFyc2UoZSxuKXt0aGlzLmNvbnRleHQ9ZTtsZXR7cGFyc2VOb2RlOnIsc3JjOnN9PWUsaT11Lk5vZGUuc3RhcnRPZkxpbmUocyxuKSxvPXRoaXMuaXRlbXNbMF07by5jb250ZXh0LnBhcmVudD10aGlzLHRoaXMudmFsdWVSYW5nZT11LlJhbmdlLmNvcHkoby52YWx1ZVJhbmdlKTtsZXQgYT1vLnJhbmdlLnN0YXJ0LW8uY29udGV4dC5saW5lU3RhcnQsYz1uO2M9dS5Ob2RlLm5vcm1hbGl6ZU9mZnNldChzLGMpO2xldCBsPXNbY10sZj11Lk5vZGUuZW5kT2ZXaGl0ZVNwYWNlKHMsaSk9PT1jLG09ITE7Zm9yKDtsOyl7Zm9yKDtsPT09YFxuYHx8bD09PVwiI1wiOyl7aWYoZiYmbD09PWBcbmAmJiFtKXtsZXQgaD1uZXcgU2U7aWYoYz1oLnBhcnNlKHtzcmM6c30sYyksdGhpcy52YWx1ZVJhbmdlLmVuZD1jLGM+PXMubGVuZ3RoKXtsPW51bGw7YnJlYWt9dGhpcy5pdGVtcy5wdXNoKGgpLGMtPTF9ZWxzZSBpZihsPT09XCIjXCIpe2lmKGM8aSthJiYhdC5uZXh0Q29udGVudEhhc0luZGVudChzLGMsYSkpcmV0dXJuIGM7bGV0IGg9bmV3IEVlO2lmKGM9aC5wYXJzZSh7aW5kZW50OmEsbGluZVN0YXJ0Omksc3JjOnN9LGMpLHRoaXMuaXRlbXMucHVzaChoKSx0aGlzLnZhbHVlUmFuZ2UuZW5kPWMsYz49cy5sZW5ndGgpe2w9bnVsbDticmVha319aWYoaT1jKzEsYz11Lk5vZGUuZW5kT2ZJbmRlbnQocyxpKSx1Lk5vZGUuYXRCbGFuayhzLGMpKXtsZXQgaD11Lk5vZGUuZW5kT2ZXaGl0ZVNwYWNlKHMsYyksZz1zW2hdOyghZ3x8Zz09PWBcbmB8fGc9PT1cIiNcIikmJihjPWgpfWw9c1tjXSxmPSEwfWlmKCFsKWJyZWFrO2lmKGMhPT1pK2EmJihmfHxsIT09XCI6XCIpKXtpZihjPGkrYSl7aT5uJiYoYz1pKTticmVha31lbHNlIGlmKCF0aGlzLmVycm9yKXtsZXQgaD1cIkFsbCBjb2xsZWN0aW9uIGl0ZW1zIG11c3Qgc3RhcnQgYXQgdGhlIHNhbWUgY29sdW1uXCI7dGhpcy5lcnJvcj1uZXcgdS5ZQU1MU3ludGF4RXJyb3IodGhpcyxoKX19aWYoby50eXBlPT09dS5UeXBlLlNFUV9JVEVNKXtpZihsIT09XCItXCIpe2k+biYmKGM9aSk7YnJlYWt9fWVsc2UgaWYobD09PVwiLVwiJiYhdGhpcy5lcnJvcil7bGV0IGg9c1tjKzFdO2lmKCFofHxoPT09YFxuYHx8aD09PVwiXHRcInx8aD09PVwiIFwiKXtsZXQgZz1cIkEgY29sbGVjdGlvbiBjYW5ub3QgYmUgYm90aCBhIG1hcHBpbmcgYW5kIGEgc2VxdWVuY2VcIjt0aGlzLmVycm9yPW5ldyB1LllBTUxTeW50YXhFcnJvcih0aGlzLGcpfX1sZXQgZD1yKHthdExpbmVTdGFydDpmLGluQ29sbGVjdGlvbjohMCxpbmRlbnQ6YSxsaW5lU3RhcnQ6aSxwYXJlbnQ6dGhpc30sYyk7aWYoIWQpcmV0dXJuIGM7aWYodGhpcy5pdGVtcy5wdXNoKGQpLHRoaXMudmFsdWVSYW5nZS5lbmQ9ZC52YWx1ZVJhbmdlLmVuZCxjPXUuTm9kZS5ub3JtYWxpemVPZmZzZXQocyxkLnJhbmdlLmVuZCksbD1zW2NdLGY9ITEsbT1kLmluY2x1ZGVzVHJhaWxpbmdMaW5lcyxsKXtsZXQgaD1jLTEsZz1zW2hdO2Zvcig7Zz09PVwiIFwifHxnPT09XCJcdFwiOylnPXNbLS1oXTtnPT09YFxuYCYmKGk9aCsxLGY9ITApfWxldCB5PUluKGQpO3kmJkFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMuaXRlbXMseSl9cmV0dXJuIGN9c2V0T3JpZ1JhbmdlcyhlLG4pe3JldHVybiBuPXN1cGVyLnNldE9yaWdSYW5nZXMoZSxuKSx0aGlzLml0ZW1zLmZvckVhY2gocj0+e249ci5zZXRPcmlnUmFuZ2VzKGUsbil9KSxufXRvU3RyaW5nKCl7bGV0e2NvbnRleHQ6e3NyYzplfSxpdGVtczpuLHJhbmdlOnIsdmFsdWU6c309dGhpcztpZihzIT1udWxsKXJldHVybiBzO2xldCBpPWUuc2xpY2Uoci5zdGFydCxuWzBdLnJhbmdlLnN0YXJ0KStTdHJpbmcoblswXSk7Zm9yKGxldCBvPTE7bzxuLmxlbmd0aDsrK28pe2xldCBhPW5bb10se2F0TGluZVN0YXJ0OmMsaW5kZW50Omx9PWEuY29udGV4dDtpZihjKWZvcihsZXQgZj0wO2Y8bDsrK2YpaSs9XCIgXCI7aSs9U3RyaW5nKGEpfXJldHVybiB1Lk5vZGUuYWRkU3RyaW5nVGVybWluYXRvcihlLHIuZW5kLGkpfX0sUG49Y2xhc3MgZXh0ZW5kcyB1Lk5vZGV7Y29uc3RydWN0b3IoKXtzdXBlcih1LlR5cGUuRElSRUNUSVZFKSx0aGlzLm5hbWU9bnVsbH1nZXQgcGFyYW1ldGVycygpe2xldCBlPXRoaXMucmF3VmFsdWU7cmV0dXJuIGU/ZS50cmltKCkuc3BsaXQoL1sgXFx0XSsvKTpbXX1wYXJzZU5hbWUoZSl7bGV0e3NyYzpufT10aGlzLmNvbnRleHQscj1lLHM9bltyXTtmb3IoO3MmJnMhPT1gXG5gJiZzIT09XCJcdFwiJiZzIT09XCIgXCI7KXM9bltyKz0xXTtyZXR1cm4gdGhpcy5uYW1lPW4uc2xpY2UoZSxyKSxyfXBhcnNlUGFyYW1ldGVycyhlKXtsZXR7c3JjOm59PXRoaXMuY29udGV4dCxyPWUscz1uW3JdO2Zvcig7cyYmcyE9PWBcbmAmJnMhPT1cIiNcIjspcz1uW3IrPTFdO3JldHVybiB0aGlzLnZhbHVlUmFuZ2U9bmV3IHUuUmFuZ2UoZSxyKSxyfXBhcnNlKGUsbil7dGhpcy5jb250ZXh0PWU7bGV0IHI9dGhpcy5wYXJzZU5hbWUobisxKTtyZXR1cm4gcj10aGlzLnBhcnNlUGFyYW1ldGVycyhyKSxyPXRoaXMucGFyc2VDb21tZW50KHIpLHRoaXMucmFuZ2U9bmV3IHUuUmFuZ2UobixyKSxyfX0sX249Y2xhc3MgdCBleHRlbmRzIHUuTm9kZXtzdGF0aWMgc3RhcnRDb21tZW50T3JFbmRCbGFua0xpbmUoZSxuKXtsZXQgcj11Lk5vZGUuZW5kT2ZXaGl0ZVNwYWNlKGUsbikscz1lW3JdO3JldHVybiBzPT09XCIjXCJ8fHM9PT1gXG5gP3I6bn1jb25zdHJ1Y3Rvcigpe3N1cGVyKHUuVHlwZS5ET0NVTUVOVCksdGhpcy5kaXJlY3RpdmVzPW51bGwsdGhpcy5jb250ZW50cz1udWxsLHRoaXMuZGlyZWN0aXZlc0VuZE1hcmtlcj1udWxsLHRoaXMuZG9jdW1lbnRFbmRNYXJrZXI9bnVsbH1wYXJzZURpcmVjdGl2ZXMoZSl7bGV0e3NyYzpufT10aGlzLmNvbnRleHQ7dGhpcy5kaXJlY3RpdmVzPVtdO2xldCByPSEwLHM9ITEsaT1lO2Zvcig7IXUuTm9kZS5hdERvY3VtZW50Qm91bmRhcnkobixpLHUuQ2hhci5ESVJFQ1RJVkVTX0VORCk7KXN3aXRjaChpPXQuc3RhcnRDb21tZW50T3JFbmRCbGFua0xpbmUobixpKSxuW2ldKXtjYXNlYFxuYDppZihyKXtsZXQgbz1uZXcgU2U7aT1vLnBhcnNlKHtzcmM6bn0saSksaTxuLmxlbmd0aCYmdGhpcy5kaXJlY3RpdmVzLnB1c2gobyl9ZWxzZSBpKz0xLHI9ITA7YnJlYWs7Y2FzZVwiI1wiOntsZXQgbz1uZXcgRWU7aT1vLnBhcnNlKHtzcmM6bn0saSksdGhpcy5kaXJlY3RpdmVzLnB1c2gobykscj0hMX1icmVhaztjYXNlXCIlXCI6e2xldCBvPW5ldyBQbjtpPW8ucGFyc2Uoe3BhcmVudDp0aGlzLHNyYzpufSxpKSx0aGlzLmRpcmVjdGl2ZXMucHVzaChvKSxzPSEwLHI9ITF9YnJlYWs7ZGVmYXVsdDpyZXR1cm4gcz90aGlzLmVycm9yPW5ldyB1LllBTUxTZW1hbnRpY0Vycm9yKHRoaXMsXCJNaXNzaW5nIGRpcmVjdGl2ZXMtZW5kIGluZGljYXRvciBsaW5lXCIpOnRoaXMuZGlyZWN0aXZlcy5sZW5ndGg+MCYmKHRoaXMuY29udGVudHM9dGhpcy5kaXJlY3RpdmVzLHRoaXMuZGlyZWN0aXZlcz1bXSksaX1yZXR1cm4gbltpXT8odGhpcy5kaXJlY3RpdmVzRW5kTWFya2VyPW5ldyB1LlJhbmdlKGksaSszKSxpKzMpOihzP3RoaXMuZXJyb3I9bmV3IHUuWUFNTFNlbWFudGljRXJyb3IodGhpcyxcIk1pc3NpbmcgZGlyZWN0aXZlcy1lbmQgaW5kaWNhdG9yIGxpbmVcIik6dGhpcy5kaXJlY3RpdmVzLmxlbmd0aD4wJiYodGhpcy5jb250ZW50cz10aGlzLmRpcmVjdGl2ZXMsdGhpcy5kaXJlY3RpdmVzPVtdKSxpKX1wYXJzZUNvbnRlbnRzKGUpe2xldHtwYXJzZU5vZGU6bixzcmM6cn09dGhpcy5jb250ZXh0O3RoaXMuY29udGVudHN8fCh0aGlzLmNvbnRlbnRzPVtdKTtsZXQgcz1lO2Zvcig7cltzLTFdPT09XCItXCI7KXMtPTE7bGV0IGk9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShyLGUpLG89cz09PWU7Zm9yKHRoaXMudmFsdWVSYW5nZT1uZXcgdS5SYW5nZShpKTshdS5Ob2RlLmF0RG9jdW1lbnRCb3VuZGFyeShyLGksdS5DaGFyLkRPQ1VNRU5UX0VORCk7KXtzd2l0Y2gocltpXSl7Y2FzZWBcbmA6aWYobyl7bGV0IGE9bmV3IFNlO2k9YS5wYXJzZSh7c3JjOnJ9LGkpLGk8ci5sZW5ndGgmJnRoaXMuY29udGVudHMucHVzaChhKX1lbHNlIGkrPTEsbz0hMDtzPWk7YnJlYWs7Y2FzZVwiI1wiOntsZXQgYT1uZXcgRWU7aT1hLnBhcnNlKHtzcmM6cn0saSksdGhpcy5jb250ZW50cy5wdXNoKGEpLG89ITF9YnJlYWs7ZGVmYXVsdDp7bGV0IGE9dS5Ob2RlLmVuZE9mSW5kZW50KHIsaSksbD1uKHthdExpbmVTdGFydDpvLGluZGVudDotMSxpbkZsb3c6ITEsaW5Db2xsZWN0aW9uOiExLGxpbmVTdGFydDpzLHBhcmVudDp0aGlzfSxhKTtpZighbClyZXR1cm4gdGhpcy52YWx1ZVJhbmdlLmVuZD1hO3RoaXMuY29udGVudHMucHVzaChsKSxpPWwucmFuZ2UuZW5kLG89ITE7bGV0IGY9SW4obCk7ZiYmQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5jb250ZW50cyxmKX19aT10LnN0YXJ0Q29tbWVudE9yRW5kQmxhbmtMaW5lKHIsaSl9aWYodGhpcy52YWx1ZVJhbmdlLmVuZD1pLHJbaV0mJih0aGlzLmRvY3VtZW50RW5kTWFya2VyPW5ldyB1LlJhbmdlKGksaSszKSxpKz0zLHJbaV0pKXtpZihpPXUuTm9kZS5lbmRPZldoaXRlU3BhY2UocixpKSxyW2ldPT09XCIjXCIpe2xldCBhPW5ldyBFZTtpPWEucGFyc2Uoe3NyYzpyfSxpKSx0aGlzLmNvbnRlbnRzLnB1c2goYSl9c3dpdGNoKHJbaV0pe2Nhc2VgXG5gOmkrPTE7YnJlYWs7Y2FzZSB2b2lkIDA6YnJlYWs7ZGVmYXVsdDp0aGlzLmVycm9yPW5ldyB1LllBTUxTeW50YXhFcnJvcih0aGlzLFwiRG9jdW1lbnQgZW5kIG1hcmtlciBsaW5lIGNhbm5vdCBoYXZlIGEgbm9uLWNvbW1lbnQgc3VmZml4XCIpfX1yZXR1cm4gaX1wYXJzZShlLG4pe2Uucm9vdD10aGlzLHRoaXMuY29udGV4dD1lO2xldHtzcmM6cn09ZSxzPXIuY2hhckNvZGVBdChuKT09PTY1Mjc5P24rMTpuO3JldHVybiBzPXRoaXMucGFyc2VEaXJlY3RpdmVzKHMpLHM9dGhpcy5wYXJzZUNvbnRlbnRzKHMpLHN9c2V0T3JpZ1JhbmdlcyhlLG4pe3JldHVybiBuPXN1cGVyLnNldE9yaWdSYW5nZXMoZSxuKSx0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChyPT57bj1yLnNldE9yaWdSYW5nZXMoZSxuKX0pLHRoaXMuZGlyZWN0aXZlc0VuZE1hcmtlciYmKG49dGhpcy5kaXJlY3RpdmVzRW5kTWFya2VyLnNldE9yaWdSYW5nZShlLG4pKSx0aGlzLmNvbnRlbnRzLmZvckVhY2gocj0+e249ci5zZXRPcmlnUmFuZ2VzKGUsbil9KSx0aGlzLmRvY3VtZW50RW5kTWFya2VyJiYobj10aGlzLmRvY3VtZW50RW5kTWFya2VyLnNldE9yaWdSYW5nZShlLG4pKSxufXRvU3RyaW5nKCl7bGV0e2NvbnRlbnRzOmUsZGlyZWN0aXZlczpuLHZhbHVlOnJ9PXRoaXM7aWYociE9bnVsbClyZXR1cm4gcjtsZXQgcz1uLmpvaW4oXCJcIik7cmV0dXJuIGUubGVuZ3RoPjAmJigobi5sZW5ndGg+MHx8ZVswXS50eXBlPT09dS5UeXBlLkNPTU1FTlQpJiYocys9YC0tLVxuYCkscys9ZS5qb2luKFwiXCIpKSxzW3MubGVuZ3RoLTFdIT09YFxuYCYmKHMrPWBcbmApLHN9fSx4bj1jbGFzcyBleHRlbmRzIHUuTm9kZXtwYXJzZShlLG4pe3RoaXMuY29udGV4dD1lO2xldHtzcmM6cn09ZSxzPXUuTm9kZS5lbmRPZklkZW50aWZpZXIocixuKzEpO3JldHVybiB0aGlzLnZhbHVlUmFuZ2U9bmV3IHUuUmFuZ2UobisxLHMpLHM9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShyLHMpLHM9dGhpcy5wYXJzZUNvbW1lbnQocyksc319LGZlPXtDTElQOlwiQ0xJUFwiLEtFRVA6XCJLRUVQXCIsU1RSSVA6XCJTVFJJUFwifSxSbj1jbGFzcyBleHRlbmRzIHUuTm9kZXtjb25zdHJ1Y3RvcihlLG4pe3N1cGVyKGUsbiksdGhpcy5ibG9ja0luZGVudD1udWxsLHRoaXMuY2hvbXBpbmc9ZmUuQ0xJUCx0aGlzLmhlYWRlcj1udWxsfWdldCBpbmNsdWRlc1RyYWlsaW5nTGluZXMoKXtyZXR1cm4gdGhpcy5jaG9tcGluZz09PWZlLktFRVB9Z2V0IHN0clZhbHVlKCl7aWYoIXRoaXMudmFsdWVSYW5nZXx8IXRoaXMuY29udGV4dClyZXR1cm4gbnVsbDtsZXR7c3RhcnQ6ZSxlbmQ6bn09dGhpcy52YWx1ZVJhbmdlLHtpbmRlbnQ6cixzcmM6c309dGhpcy5jb250ZXh0O2lmKHRoaXMudmFsdWVSYW5nZS5pc0VtcHR5KCkpcmV0dXJuXCJcIjtsZXQgaT1udWxsLG89c1tuLTFdO2Zvcig7bz09PWBcbmB8fG89PT1cIlx0XCJ8fG89PT1cIiBcIjspe2lmKG4tPTEsbjw9ZSl7aWYodGhpcy5jaG9tcGluZz09PWZlLktFRVApYnJlYWs7cmV0dXJuXCJcIn1vPT09YFxuYCYmKGk9biksbz1zW24tMV19bGV0IGE9bisxO2kmJih0aGlzLmNob21waW5nPT09ZmUuS0VFUD8oYT1pLG49dGhpcy52YWx1ZVJhbmdlLmVuZCk6bj1pKTtsZXQgYz1yK3RoaXMuYmxvY2tJbmRlbnQsbD10aGlzLnR5cGU9PT11LlR5cGUuQkxPQ0tfRk9MREVELGY9ITAsbT1cIlwiLGQ9XCJcIix5PSExO2ZvcihsZXQgaD1lO2g8bjsrK2gpe2ZvcihsZXQgdz0wO3c8YyYmc1toXT09PVwiIFwiOysrdyloKz0xO2xldCBnPXNbaF07aWYoZz09PWBcbmApZD09PWBcbmA/bSs9YFxuYDpkPWBcbmA7ZWxzZXtsZXQgdz11Lk5vZGUuZW5kT2ZMaW5lKHMsaCksQz1zLnNsaWNlKGgsdyk7aD13LGwmJihnPT09XCIgXCJ8fGc9PT1cIlx0XCIpJiZoPGE/KGQ9PT1cIiBcIj9kPWBcbmA6IXkmJiFmJiZkPT09YFxuYCYmKGQ9YFxuXG5gKSxtKz1kK0MsZD13PG4mJnNbd118fFwiXCIseT0hMCk6KG0rPWQrQyxkPWwmJmg8YT9cIiBcIjpgXG5gLHk9ITEpLGYmJkMhPT1cIlwiJiYoZj0hMSl9fXJldHVybiB0aGlzLmNob21waW5nPT09ZmUuU1RSSVA/bTptK2BcbmB9cGFyc2VCbG9ja0hlYWRlcihlKXtsZXR7c3JjOm59PXRoaXMuY29udGV4dCxyPWUrMSxzPVwiXCI7Zm9yKDs7KXtsZXQgaT1uW3JdO3N3aXRjaChpKXtjYXNlXCItXCI6dGhpcy5jaG9tcGluZz1mZS5TVFJJUDticmVhaztjYXNlXCIrXCI6dGhpcy5jaG9tcGluZz1mZS5LRUVQO2JyZWFrO2Nhc2VcIjBcIjpjYXNlXCIxXCI6Y2FzZVwiMlwiOmNhc2VcIjNcIjpjYXNlXCI0XCI6Y2FzZVwiNVwiOmNhc2VcIjZcIjpjYXNlXCI3XCI6Y2FzZVwiOFwiOmNhc2VcIjlcIjpzKz1pO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIHRoaXMuYmxvY2tJbmRlbnQ9TnVtYmVyKHMpfHxudWxsLHRoaXMuaGVhZGVyPW5ldyB1LlJhbmdlKGUscikscn1yKz0xfX1wYXJzZUJsb2NrVmFsdWUoZSl7bGV0e2luZGVudDpuLHNyYzpyfT10aGlzLmNvbnRleHQscz0hIXRoaXMuYmxvY2tJbmRlbnQsaT1lLG89ZSxhPTE7Zm9yKGxldCBjPXJbaV07Yz09PWBcbmAmJihpKz0xLCF1Lk5vZGUuYXREb2N1bWVudEJvdW5kYXJ5KHIsaSkpO2M9cltpXSl7bGV0IGw9dS5Ob2RlLmVuZE9mQmxvY2tJbmRlbnQocixuLGkpO2lmKGw9PT1udWxsKWJyZWFrO2xldCBmPXJbbF0sbT1sLShpK24pO2lmKHRoaXMuYmxvY2tJbmRlbnQpe2lmKGYmJmYhPT1gXG5gJiZtPHRoaXMuYmxvY2tJbmRlbnQpe2lmKHJbbF09PT1cIiNcIilicmVhaztpZighdGhpcy5lcnJvcil7bGV0IHk9YEJsb2NrIHNjYWxhcnMgbXVzdCBub3QgYmUgbGVzcyBpbmRlbnRlZCB0aGFuIHRoZWlyICR7cz9cImV4cGxpY2l0IGluZGVudGF0aW9uIGluZGljYXRvclwiOlwiZmlyc3QgbGluZVwifWA7dGhpcy5lcnJvcj1uZXcgdS5ZQU1MU2VtYW50aWNFcnJvcih0aGlzLHkpfX19ZWxzZSBpZihyW2xdIT09YFxuYCl7aWYobTxhKXtsZXQgZD1cIkJsb2NrIHNjYWxhcnMgd2l0aCBtb3JlLWluZGVudGVkIGxlYWRpbmcgZW1wdHkgbGluZXMgbXVzdCB1c2UgYW4gZXhwbGljaXQgaW5kZW50YXRpb24gaW5kaWNhdG9yXCI7dGhpcy5lcnJvcj1uZXcgdS5ZQU1MU2VtYW50aWNFcnJvcih0aGlzLGQpfXRoaXMuYmxvY2tJbmRlbnQ9bX1lbHNlIG0+YSYmKGE9bSk7cltsXT09PWBcbmA/aT1sOmk9bz11Lk5vZGUuZW5kT2ZMaW5lKHIsbCl9cmV0dXJuIHRoaXMuY2hvbXBpbmchPT1mZS5LRUVQJiYoaT1yW29dP28rMTpvKSx0aGlzLnZhbHVlUmFuZ2U9bmV3IHUuUmFuZ2UoZSsxLGkpLGl9cGFyc2UoZSxuKXt0aGlzLmNvbnRleHQ9ZTtsZXR7c3JjOnJ9PWUscz10aGlzLnBhcnNlQmxvY2tIZWFkZXIobik7cmV0dXJuIHM9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShyLHMpLHM9dGhpcy5wYXJzZUNvbW1lbnQocykscz10aGlzLnBhcnNlQmxvY2tWYWx1ZShzKSxzfXNldE9yaWdSYW5nZXMoZSxuKXtyZXR1cm4gbj1zdXBlci5zZXRPcmlnUmFuZ2VzKGUsbiksdGhpcy5oZWFkZXI/dGhpcy5oZWFkZXIuc2V0T3JpZ1JhbmdlKGUsbik6bn19LERuPWNsYXNzIGV4dGVuZHMgdS5Ob2Rle2NvbnN0cnVjdG9yKGUsbil7c3VwZXIoZSxuKSx0aGlzLml0ZW1zPW51bGx9cHJldk5vZGVJc0pzb25MaWtlKGU9dGhpcy5pdGVtcy5sZW5ndGgpe2xldCBuPXRoaXMuaXRlbXNbZS0xXTtyZXR1cm4hIW4mJihuLmpzb25MaWtlfHxuLnR5cGU9PT11LlR5cGUuQ09NTUVOVCYmdGhpcy5wcmV2Tm9kZUlzSnNvbkxpa2UoZS0xKSl9cGFyc2UoZSxuKXt0aGlzLmNvbnRleHQ9ZTtsZXR7cGFyc2VOb2RlOnIsc3JjOnN9PWUse2luZGVudDppLGxpbmVTdGFydDpvfT1lLGE9c1tuXTt0aGlzLml0ZW1zPVt7Y2hhcjphLG9mZnNldDpufV07bGV0IGM9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShzLG4rMSk7Zm9yKGE9c1tjXTthJiZhIT09XCJdXCImJmEhPT1cIn1cIjspe3N3aXRjaChhKXtjYXNlYFxuYDp7bz1jKzE7bGV0IGw9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShzLG8pO2lmKHNbbF09PT1gXG5gKXtsZXQgZj1uZXcgU2U7bz1mLnBhcnNlKHtzcmM6c30sbyksdGhpcy5pdGVtcy5wdXNoKGYpfWlmKGM9dS5Ob2RlLmVuZE9mSW5kZW50KHMsbyksYzw9bytpJiYoYT1zW2NdLGM8bytpfHxhIT09XCJdXCImJmEhPT1cIn1cIikpe2xldCBmPVwiSW5zdWZmaWNpZW50IGluZGVudGF0aW9uIGluIGZsb3cgY29sbGVjdGlvblwiO3RoaXMuZXJyb3I9bmV3IHUuWUFNTFNlbWFudGljRXJyb3IodGhpcyxmKX19YnJlYWs7Y2FzZVwiLFwiOnRoaXMuaXRlbXMucHVzaCh7Y2hhcjphLG9mZnNldDpjfSksYys9MTticmVhaztjYXNlXCIjXCI6e2xldCBsPW5ldyBFZTtjPWwucGFyc2Uoe3NyYzpzfSxjKSx0aGlzLml0ZW1zLnB1c2gobCl9YnJlYWs7Y2FzZVwiP1wiOmNhc2VcIjpcIjp7bGV0IGw9c1tjKzFdO2lmKGw9PT1gXG5gfHxsPT09XCJcdFwifHxsPT09XCIgXCJ8fGw9PT1cIixcInx8YT09PVwiOlwiJiZ0aGlzLnByZXZOb2RlSXNKc29uTGlrZSgpKXt0aGlzLml0ZW1zLnB1c2goe2NoYXI6YSxvZmZzZXQ6Y30pLGMrPTE7YnJlYWt9fWRlZmF1bHQ6e2xldCBsPXIoe2F0TGluZVN0YXJ0OiExLGluQ29sbGVjdGlvbjohMSxpbkZsb3c6ITAsaW5kZW50Oi0xLGxpbmVTdGFydDpvLHBhcmVudDp0aGlzfSxjKTtpZighbClyZXR1cm4gdGhpcy52YWx1ZVJhbmdlPW5ldyB1LlJhbmdlKG4sYyksYzt0aGlzLml0ZW1zLnB1c2gobCksYz11Lk5vZGUubm9ybWFsaXplT2Zmc2V0KHMsbC5yYW5nZS5lbmQpfX1jPXUuTm9kZS5lbmRPZldoaXRlU3BhY2UocyxjKSxhPXNbY119cmV0dXJuIHRoaXMudmFsdWVSYW5nZT1uZXcgdS5SYW5nZShuLGMrMSksYSYmKHRoaXMuaXRlbXMucHVzaCh7Y2hhcjphLG9mZnNldDpjfSksYz11Lk5vZGUuZW5kT2ZXaGl0ZVNwYWNlKHMsYysxKSxjPXRoaXMucGFyc2VDb21tZW50KGMpKSxjfXNldE9yaWdSYW5nZXMoZSxuKXtyZXR1cm4gbj1zdXBlci5zZXRPcmlnUmFuZ2VzKGUsbiksdGhpcy5pdGVtcy5mb3JFYWNoKHI9PntpZihyIGluc3RhbmNlb2YgdS5Ob2RlKW49ci5zZXRPcmlnUmFuZ2VzKGUsbik7ZWxzZSBpZihlLmxlbmd0aD09PTApci5vcmlnT2Zmc2V0PXIub2Zmc2V0O2Vsc2V7bGV0IHM9bjtmb3IoO3M8ZS5sZW5ndGgmJiEoZVtzXT5yLm9mZnNldCk7KSsrcztyLm9yaWdPZmZzZXQ9ci5vZmZzZXQrcyxuPXN9fSksbn10b1N0cmluZygpe2xldHtjb250ZXh0OntzcmM6ZX0saXRlbXM6bixyYW5nZTpyLHZhbHVlOnN9PXRoaXM7aWYocyE9bnVsbClyZXR1cm4gcztsZXQgaT1uLmZpbHRlcihjPT5jIGluc3RhbmNlb2YgdS5Ob2RlKSxvPVwiXCIsYT1yLnN0YXJ0O3JldHVybiBpLmZvckVhY2goYz0+e2xldCBsPWUuc2xpY2UoYSxjLnJhbmdlLnN0YXJ0KTthPWMucmFuZ2UuZW5kLG8rPWwrU3RyaW5nKGMpLG9bby5sZW5ndGgtMV09PT1gXG5gJiZlW2EtMV0hPT1gXG5gJiZlW2FdPT09YFxuYCYmKGErPTEpfSksbys9ZS5zbGljZShhLHIuZW5kKSx1Lk5vZGUuYWRkU3RyaW5nVGVybWluYXRvcihlLHIuZW5kLG8pfX0sWW49Y2xhc3MgdCBleHRlbmRzIHUuTm9kZXtzdGF0aWMgZW5kT2ZRdW90ZShlLG4pe2xldCByPWVbbl07Zm9yKDtyJiZyIT09J1wiJzspbis9cj09PVwiXFxcXFwiPzI6MSxyPWVbbl07cmV0dXJuIG4rMX1nZXQgc3RyVmFsdWUoKXtpZighdGhpcy52YWx1ZVJhbmdlfHwhdGhpcy5jb250ZXh0KXJldHVybiBudWxsO2xldCBlPVtdLHtzdGFydDpuLGVuZDpyfT10aGlzLnZhbHVlUmFuZ2Use2luZGVudDpzLHNyYzppfT10aGlzLmNvbnRleHQ7aVtyLTFdIT09J1wiJyYmZS5wdXNoKG5ldyB1LllBTUxTeW50YXhFcnJvcih0aGlzLCdNaXNzaW5nIGNsb3NpbmcgXCJxdW90ZScpKTtsZXQgbz1cIlwiO2ZvcihsZXQgYT1uKzE7YTxyLTE7KythKXtsZXQgYz1pW2FdO2lmKGM9PT1gXG5gKXt1Lk5vZGUuYXREb2N1bWVudEJvdW5kYXJ5KGksYSsxKSYmZS5wdXNoKG5ldyB1LllBTUxTZW1hbnRpY0Vycm9yKHRoaXMsXCJEb2N1bWVudCBib3VuZGFyeSBpbmRpY2F0b3JzIGFyZSBub3QgYWxsb3dlZCB3aXRoaW4gc3RyaW5nIHZhbHVlc1wiKSk7bGV0e2ZvbGQ6bCxvZmZzZXQ6ZixlcnJvcjptfT11Lk5vZGUuZm9sZE5ld2xpbmUoaSxhLHMpO28rPWwsYT1mLG0mJmUucHVzaChuZXcgdS5ZQU1MU2VtYW50aWNFcnJvcih0aGlzLFwiTXVsdGktbGluZSBkb3VibGUtcXVvdGVkIHN0cmluZyBuZWVkcyB0byBiZSBzdWZmaWNpZW50bHkgaW5kZW50ZWRcIikpfWVsc2UgaWYoYz09PVwiXFxcXFwiKXN3aXRjaChhKz0xLGlbYV0pe2Nhc2VcIjBcIjpvKz1cIlxcMFwiO2JyZWFrO2Nhc2VcImFcIjpvKz1cIlxceDA3XCI7YnJlYWs7Y2FzZVwiYlwiOm8rPVwiXFxiXCI7YnJlYWs7Y2FzZVwiZVwiOm8rPVwiXFx4MUJcIjticmVhaztjYXNlXCJmXCI6bys9XCJcXGZcIjticmVhaztjYXNlXCJuXCI6bys9YFxuYDticmVhaztjYXNlXCJyXCI6bys9XCJcXHJcIjticmVhaztjYXNlXCJ0XCI6bys9XCJcdFwiO2JyZWFrO2Nhc2VcInZcIjpvKz1cIlxcdlwiO2JyZWFrO2Nhc2VcIk5cIjpvKz1cIlxceDg1XCI7YnJlYWs7Y2FzZVwiX1wiOm8rPVwiXFx4QTBcIjticmVhaztjYXNlXCJMXCI6bys9XCJcXHUyMDI4XCI7YnJlYWs7Y2FzZVwiUFwiOm8rPVwiXFx1MjAyOVwiO2JyZWFrO2Nhc2VcIiBcIjpvKz1cIiBcIjticmVhaztjYXNlJ1wiJzpvKz0nXCInO2JyZWFrO2Nhc2VcIi9cIjpvKz1cIi9cIjticmVhaztjYXNlXCJcXFxcXCI6bys9XCJcXFxcXCI7YnJlYWs7Y2FzZVwiXHRcIjpvKz1cIlx0XCI7YnJlYWs7Y2FzZVwieFwiOm8rPXRoaXMucGFyc2VDaGFyQ29kZShhKzEsMixlKSxhKz0yO2JyZWFrO2Nhc2VcInVcIjpvKz10aGlzLnBhcnNlQ2hhckNvZGUoYSsxLDQsZSksYSs9NDticmVhaztjYXNlXCJVXCI6bys9dGhpcy5wYXJzZUNoYXJDb2RlKGErMSw4LGUpLGErPTg7YnJlYWs7Y2FzZWBcbmA6Zm9yKDtpW2ErMV09PT1cIiBcInx8aVthKzFdPT09XCJcdFwiOylhKz0xO2JyZWFrO2RlZmF1bHQ6ZS5wdXNoKG5ldyB1LllBTUxTeW50YXhFcnJvcih0aGlzLGBJbnZhbGlkIGVzY2FwZSBzZXF1ZW5jZSAke2kuc3Vic3RyKGEtMSwyKX1gKSksbys9XCJcXFxcXCIraVthXX1lbHNlIGlmKGM9PT1cIiBcInx8Yz09PVwiXHRcIil7bGV0IGw9YSxmPWlbYSsxXTtmb3IoO2Y9PT1cIiBcInx8Zj09PVwiXHRcIjspYSs9MSxmPWlbYSsxXTtmIT09YFxuYCYmKG8rPWE+bD9pLnNsaWNlKGwsYSsxKTpjKX1lbHNlIG8rPWN9cmV0dXJuIGUubGVuZ3RoPjA/e2Vycm9yczplLHN0cjpvfTpvfXBhcnNlQ2hhckNvZGUoZSxuLHIpe2xldHtzcmM6c309dGhpcy5jb250ZXh0LGk9cy5zdWJzdHIoZSxuKSxhPWkubGVuZ3RoPT09biYmL15bMC05YS1mQS1GXSskLy50ZXN0KGkpP3BhcnNlSW50KGksMTYpOk5hTjtyZXR1cm4gaXNOYU4oYSk/KHIucHVzaChuZXcgdS5ZQU1MU3ludGF4RXJyb3IodGhpcyxgSW52YWxpZCBlc2NhcGUgc2VxdWVuY2UgJHtzLnN1YnN0cihlLTIsbisyKX1gKSkscy5zdWJzdHIoZS0yLG4rMikpOlN0cmluZy5mcm9tQ29kZVBvaW50KGEpfXBhcnNlKGUsbil7dGhpcy5jb250ZXh0PWU7bGV0e3NyYzpyfT1lLHM9dC5lbmRPZlF1b3RlKHIsbisxKTtyZXR1cm4gdGhpcy52YWx1ZVJhbmdlPW5ldyB1LlJhbmdlKG4scykscz11Lk5vZGUuZW5kT2ZXaGl0ZVNwYWNlKHIscykscz10aGlzLnBhcnNlQ29tbWVudChzKSxzfX0sJG49Y2xhc3MgdCBleHRlbmRzIHUuTm9kZXtzdGF0aWMgZW5kT2ZRdW90ZShlLG4pe2xldCByPWVbbl07Zm9yKDtyOylpZihyPT09XCInXCIpe2lmKGVbbisxXSE9PVwiJ1wiKWJyZWFrO3I9ZVtuKz0yXX1lbHNlIHI9ZVtuKz0xXTtyZXR1cm4gbisxfWdldCBzdHJWYWx1ZSgpe2lmKCF0aGlzLnZhbHVlUmFuZ2V8fCF0aGlzLmNvbnRleHQpcmV0dXJuIG51bGw7bGV0IGU9W10se3N0YXJ0Om4sZW5kOnJ9PXRoaXMudmFsdWVSYW5nZSx7aW5kZW50OnMsc3JjOml9PXRoaXMuY29udGV4dDtpW3ItMV0hPT1cIidcIiYmZS5wdXNoKG5ldyB1LllBTUxTeW50YXhFcnJvcih0aGlzLFwiTWlzc2luZyBjbG9zaW5nICdxdW90ZVwiKSk7bGV0IG89XCJcIjtmb3IobGV0IGE9bisxO2E8ci0xOysrYSl7bGV0IGM9aVthXTtpZihjPT09YFxuYCl7dS5Ob2RlLmF0RG9jdW1lbnRCb3VuZGFyeShpLGErMSkmJmUucHVzaChuZXcgdS5ZQU1MU2VtYW50aWNFcnJvcih0aGlzLFwiRG9jdW1lbnQgYm91bmRhcnkgaW5kaWNhdG9ycyBhcmUgbm90IGFsbG93ZWQgd2l0aGluIHN0cmluZyB2YWx1ZXNcIikpO2xldHtmb2xkOmwsb2Zmc2V0OmYsZXJyb3I6bX09dS5Ob2RlLmZvbGROZXdsaW5lKGksYSxzKTtvKz1sLGE9ZixtJiZlLnB1c2gobmV3IHUuWUFNTFNlbWFudGljRXJyb3IodGhpcyxcIk11bHRpLWxpbmUgc2luZ2xlLXF1b3RlZCBzdHJpbmcgbmVlZHMgdG8gYmUgc3VmZmljaWVudGx5IGluZGVudGVkXCIpKX1lbHNlIGlmKGM9PT1cIidcIilvKz1jLGErPTEsaVthXSE9PVwiJ1wiJiZlLnB1c2gobmV3IHUuWUFNTFN5bnRheEVycm9yKHRoaXMsXCJVbmVzY2FwZWQgc2luZ2xlIHF1b3RlPyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLlwiKSk7ZWxzZSBpZihjPT09XCIgXCJ8fGM9PT1cIlx0XCIpe2xldCBsPWEsZj1pW2ErMV07Zm9yKDtmPT09XCIgXCJ8fGY9PT1cIlx0XCI7KWErPTEsZj1pW2ErMV07ZiE9PWBcbmAmJihvKz1hPmw/aS5zbGljZShsLGErMSk6Yyl9ZWxzZSBvKz1jfXJldHVybiBlLmxlbmd0aD4wP3tlcnJvcnM6ZSxzdHI6b306b31wYXJzZShlLG4pe3RoaXMuY29udGV4dD1lO2xldHtzcmM6cn09ZSxzPXQuZW5kT2ZRdW90ZShyLG4rMSk7cmV0dXJuIHRoaXMudmFsdWVSYW5nZT1uZXcgdS5SYW5nZShuLHMpLHM9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShyLHMpLHM9dGhpcy5wYXJzZUNvbW1lbnQocyksc319O2Z1bmN0aW9uIHZvKHQsZSl7c3dpdGNoKHQpe2Nhc2UgdS5UeXBlLkFMSUFTOnJldHVybiBuZXcgeG4odCxlKTtjYXNlIHUuVHlwZS5CTE9DS19GT0xERUQ6Y2FzZSB1LlR5cGUuQkxPQ0tfTElURVJBTDpyZXR1cm4gbmV3IFJuKHQsZSk7Y2FzZSB1LlR5cGUuRkxPV19NQVA6Y2FzZSB1LlR5cGUuRkxPV19TRVE6cmV0dXJuIG5ldyBEbih0LGUpO2Nhc2UgdS5UeXBlLk1BUF9LRVk6Y2FzZSB1LlR5cGUuTUFQX1ZBTFVFOmNhc2UgdS5UeXBlLlNFUV9JVEVNOnJldHVybiBuZXcgdXQodCxlKTtjYXNlIHUuVHlwZS5DT01NRU5UOmNhc2UgdS5UeXBlLlBMQUlOOnJldHVybiBuZXcgdS5QbGFpblZhbHVlKHQsZSk7Y2FzZSB1LlR5cGUuUVVPVEVfRE9VQkxFOnJldHVybiBuZXcgWW4odCxlKTtjYXNlIHUuVHlwZS5RVU9URV9TSU5HTEU6cmV0dXJuIG5ldyAkbih0LGUpO2RlZmF1bHQ6cmV0dXJuIG51bGx9fXZhciBCbj1jbGFzcyB0e3N0YXRpYyBwYXJzZVR5cGUoZSxuLHIpe3N3aXRjaChlW25dKXtjYXNlXCIqXCI6cmV0dXJuIHUuVHlwZS5BTElBUztjYXNlXCI+XCI6cmV0dXJuIHUuVHlwZS5CTE9DS19GT0xERUQ7Y2FzZVwifFwiOnJldHVybiB1LlR5cGUuQkxPQ0tfTElURVJBTDtjYXNlXCJ7XCI6cmV0dXJuIHUuVHlwZS5GTE9XX01BUDtjYXNlXCJbXCI6cmV0dXJuIHUuVHlwZS5GTE9XX1NFUTtjYXNlXCI/XCI6cmV0dXJuIXImJnUuTm9kZS5hdEJsYW5rKGUsbisxLCEwKT91LlR5cGUuTUFQX0tFWTp1LlR5cGUuUExBSU47Y2FzZVwiOlwiOnJldHVybiFyJiZ1Lk5vZGUuYXRCbGFuayhlLG4rMSwhMCk/dS5UeXBlLk1BUF9WQUxVRTp1LlR5cGUuUExBSU47Y2FzZVwiLVwiOnJldHVybiFyJiZ1Lk5vZGUuYXRCbGFuayhlLG4rMSwhMCk/dS5UeXBlLlNFUV9JVEVNOnUuVHlwZS5QTEFJTjtjYXNlJ1wiJzpyZXR1cm4gdS5UeXBlLlFVT1RFX0RPVUJMRTtjYXNlXCInXCI6cmV0dXJuIHUuVHlwZS5RVU9URV9TSU5HTEU7ZGVmYXVsdDpyZXR1cm4gdS5UeXBlLlBMQUlOfX1jb25zdHJ1Y3RvcihlPXt9LHthdExpbmVTdGFydDpuLGluQ29sbGVjdGlvbjpyLGluRmxvdzpzLGluZGVudDppLGxpbmVTdGFydDpvLHBhcmVudDphfT17fSl7dS5fZGVmaW5lUHJvcGVydHkodGhpcyxcInBhcnNlTm9kZVwiLChjLGwpPT57aWYodS5Ob2RlLmF0RG9jdW1lbnRCb3VuZGFyeSh0aGlzLnNyYyxsKSlyZXR1cm4gbnVsbDtsZXQgZj1uZXcgdCh0aGlzLGMpLHtwcm9wczptLHR5cGU6ZCx2YWx1ZVN0YXJ0Onl9PWYucGFyc2VQcm9wcyhsKSxoPXZvKGQsbSksZz1oLnBhcnNlKGYseSk7aWYoaC5yYW5nZT1uZXcgdS5SYW5nZShsLGcpLGc8PWwmJihoLmVycm9yPW5ldyBFcnJvcihcIk5vZGUjcGFyc2UgY29uc3VtZWQgbm8gY2hhcmFjdGVyc1wiKSxoLmVycm9yLnBhcnNlRW5kPWcsaC5lcnJvci5zb3VyY2U9aCxoLnJhbmdlLmVuZD1sKzEpLGYubm9kZVN0YXJ0c0NvbGxlY3Rpb24oaCkpeyFoLmVycm9yJiYhZi5hdExpbmVTdGFydCYmZi5wYXJlbnQudHlwZT09PXUuVHlwZS5ET0NVTUVOVCYmKGguZXJyb3I9bmV3IHUuWUFNTFN5bnRheEVycm9yKGgsXCJCbG9jayBjb2xsZWN0aW9uIG11c3Qgbm90IGhhdmUgcHJlY2VkaW5nIGNvbnRlbnQgaGVyZSAoZS5nLiBkaXJlY3RpdmVzLWVuZCBpbmRpY2F0b3IpXCIpKTtsZXQgdz1uZXcgJHQoaCk7cmV0dXJuIGc9dy5wYXJzZShuZXcgdChmKSxnKSx3LnJhbmdlPW5ldyB1LlJhbmdlKGwsZyksd31yZXR1cm4gaH0pLHRoaXMuYXRMaW5lU3RhcnQ9bj8/KGUuYXRMaW5lU3RhcnR8fCExKSx0aGlzLmluQ29sbGVjdGlvbj1yPz8oZS5pbkNvbGxlY3Rpb258fCExKSx0aGlzLmluRmxvdz1zPz8oZS5pbkZsb3d8fCExKSx0aGlzLmluZGVudD1pPz9lLmluZGVudCx0aGlzLmxpbmVTdGFydD1vPz9lLmxpbmVTdGFydCx0aGlzLnBhcmVudD1hPz8oZS5wYXJlbnR8fHt9KSx0aGlzLnJvb3Q9ZS5yb290LHRoaXMuc3JjPWUuc3JjfW5vZGVTdGFydHNDb2xsZWN0aW9uKGUpe2xldHtpbkNvbGxlY3Rpb246bixpbkZsb3c6cixzcmM6c309dGhpcztpZihufHxyKXJldHVybiExO2lmKGUgaW5zdGFuY2VvZiB1dClyZXR1cm4hMDtsZXQgaT1lLnJhbmdlLmVuZDtyZXR1cm4gc1tpXT09PWBcbmB8fHNbaS0xXT09PWBcbmA/ITE6KGk9dS5Ob2RlLmVuZE9mV2hpdGVTcGFjZShzLGkpLHNbaV09PT1cIjpcIil9cGFyc2VQcm9wcyhlKXtsZXR7aW5GbG93Om4scGFyZW50OnIsc3JjOnN9PXRoaXMsaT1bXSxvPSExO2U9dGhpcy5hdExpbmVTdGFydD91Lk5vZGUuZW5kT2ZJbmRlbnQocyxlKTp1Lk5vZGUuZW5kT2ZXaGl0ZVNwYWNlKHMsZSk7bGV0IGE9c1tlXTtmb3IoO2E9PT11LkNoYXIuQU5DSE9SfHxhPT09dS5DaGFyLkNPTU1FTlR8fGE9PT11LkNoYXIuVEFHfHxhPT09YFxuYDspe2lmKGE9PT1gXG5gKXtsZXQgbD1lLGY7ZG8gZj1sKzEsbD11Lk5vZGUuZW5kT2ZJbmRlbnQocyxmKTt3aGlsZShzW2xdPT09YFxuYCk7bGV0IG09bC0oZit0aGlzLmluZGVudCksZD1yLnR5cGU9PT11LlR5cGUuU0VRX0lURU0mJnIuY29udGV4dC5hdExpbmVTdGFydDtpZihzW2xdIT09XCIjXCImJiF1Lk5vZGUubmV4dE5vZGVJc0luZGVudGVkKHNbbF0sbSwhZCkpYnJlYWs7dGhpcy5hdExpbmVTdGFydD0hMCx0aGlzLmxpbmVTdGFydD1mLG89ITEsZT1sfWVsc2UgaWYoYT09PXUuQ2hhci5DT01NRU5UKXtsZXQgbD11Lk5vZGUuZW5kT2ZMaW5lKHMsZSsxKTtpLnB1c2gobmV3IHUuUmFuZ2UoZSxsKSksZT1sfWVsc2V7bGV0IGw9dS5Ob2RlLmVuZE9mSWRlbnRpZmllcihzLGUrMSk7YT09PXUuQ2hhci5UQUcmJnNbbF09PT1cIixcIiYmL15bYS16QS1aMC05LV0rXFwuW2EtekEtWjAtOS1dKyxcXGRcXGRcXGRcXGQoLVxcZFxcZCl7MCwyfVxcL1xcUy8udGVzdChzLnNsaWNlKGUrMSxsKzEzKSkmJihsPXUuTm9kZS5lbmRPZklkZW50aWZpZXIocyxsKzUpKSxpLnB1c2gobmV3IHUuUmFuZ2UoZSxsKSksbz0hMCxlPXUuTm9kZS5lbmRPZldoaXRlU3BhY2UocyxsKX1hPXNbZV19byYmYT09PVwiOlwiJiZ1Lk5vZGUuYXRCbGFuayhzLGUrMSwhMCkmJihlLT0xKTtsZXQgYz10LnBhcnNlVHlwZShzLGUsbik7cmV0dXJue3Byb3BzOmksdHlwZTpjLHZhbHVlU3RhcnQ6ZX19fTtmdW5jdGlvbiBJbyh0KXtsZXQgZT1bXTt0LmluZGV4T2YoXCJcXHJcIikhPT0tMSYmKHQ9dC5yZXBsYWNlKC9cXHJcXG4/L2csKHMsaSk9PihzLmxlbmd0aD4xJiZlLnB1c2goaSksYFxuYCkpKTtsZXQgbj1bXSxyPTA7ZG97bGV0IHM9bmV3IF9uLGk9bmV3IEJuKHtzcmM6dH0pO3I9cy5wYXJzZShpLHIpLG4ucHVzaChzKX13aGlsZShyPHQubGVuZ3RoKTtyZXR1cm4gbi5zZXRPcmlnUmFuZ2VzPSgpPT57aWYoZS5sZW5ndGg9PT0wKXJldHVybiExO2ZvcihsZXQgaT0xO2k8ZS5sZW5ndGg7KytpKWVbaV0tPWk7bGV0IHM9MDtmb3IobGV0IGk9MDtpPG4ubGVuZ3RoOysraSlzPW5baV0uc2V0T3JpZ1JhbmdlcyhlLHMpO3JldHVybiBlLnNwbGljZSgwLGUubGVuZ3RoKSwhMH0sbi50b1N0cmluZz0oKT0+bi5qb2luKGAuLi5cbmApLG59eHMucGFyc2U9SW99KTt2YXIgcWU9dGUoaz0+e1widXNlIHN0cmljdFwiO3ZhciBwPWxlKCk7ZnVuY3Rpb24gUG8odCxlLG4pe3JldHVybiBuP2AjJHtuLnJlcGxhY2UoL1tcXHNcXFNdXi9nbSxgJCYke2V9I2ApfVxuJHtlfSR7dH1gOnR9ZnVuY3Rpb24gRmUodCxlLG4pe3JldHVybiBuP24uaW5kZXhPZihgXG5gKT09PS0xP2Ake3R9ICMke259YDpgJHt0fVxuYCtuLnJlcGxhY2UoL14vZ20sYCR7ZXx8XCJcIn0jYCk6dH12YXIgVz1jbGFzc3t9O2Z1bmN0aW9uIHVlKHQsZSxuKXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0Lm1hcCgocixzKT0+dWUocixTdHJpbmcocyksbikpO2lmKHQmJnR5cGVvZiB0LnRvSlNPTj09XCJmdW5jdGlvblwiKXtsZXQgcj1uJiZuLmFuY2hvcnMmJm4uYW5jaG9ycy5nZXQodCk7ciYmKG4ub25DcmVhdGU9aT0+e3IucmVzPWksZGVsZXRlIG4ub25DcmVhdGV9KTtsZXQgcz10LnRvSlNPTihlLG4pO3JldHVybiByJiZuLm9uQ3JlYXRlJiZuLm9uQ3JlYXRlKHMpLHN9cmV0dXJuKCFufHwhbi5rZWVwKSYmdHlwZW9mIHQ9PVwiYmlnaW50XCI/TnVtYmVyKHQpOnR9dmFyIFA9Y2xhc3MgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKGUpe3N1cGVyKCksdGhpcy52YWx1ZT1lfXRvSlNPTihlLG4pe3JldHVybiBuJiZuLmtlZXA/dGhpcy52YWx1ZTp1ZSh0aGlzLnZhbHVlLGUsbil9dG9TdHJpbmcoKXtyZXR1cm4gU3RyaW5nKHRoaXMudmFsdWUpfX07ZnVuY3Rpb24gRHModCxlLG4pe2xldCByPW47Zm9yKGxldCBzPWUubGVuZ3RoLTE7cz49MDstLXMpe2xldCBpPWVbc107aWYoTnVtYmVyLmlzSW50ZWdlcihpKSYmaT49MCl7bGV0IG89W107b1tpXT1yLHI9b31lbHNle2xldCBvPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLGkse3ZhbHVlOnIsd3JpdGFibGU6ITAsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSxyPW99fXJldHVybiB0LmNyZWF0ZU5vZGUociwhMSl9dmFyIEJzPXQ9PnQ9PW51bGx8fHR5cGVvZiB0PT1cIm9iamVjdFwiJiZ0W1N5bWJvbC5pdGVyYXRvcl0oKS5uZXh0KCkuZG9uZSxqPWNsYXNzIHQgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKGUpe3N1cGVyKCkscC5fZGVmaW5lUHJvcGVydHkodGhpcyxcIml0ZW1zXCIsW10pLHRoaXMuc2NoZW1hPWV9YWRkSW4oZSxuKXtpZihCcyhlKSl0aGlzLmFkZChuKTtlbHNle2xldFtyLC4uLnNdPWUsaT10aGlzLmdldChyLCEwKTtpZihpIGluc3RhbmNlb2YgdClpLmFkZEluKHMsbik7ZWxzZSBpZihpPT09dm9pZCAwJiZ0aGlzLnNjaGVtYSl0aGlzLnNldChyLERzKHRoaXMuc2NoZW1hLHMsbikpO2Vsc2UgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBZQU1MIGNvbGxlY3Rpb24gYXQgJHtyfS4gUmVtYWluaW5nIHBhdGg6ICR7c31gKX19ZGVsZXRlSW4oW2UsLi4ubl0pe2lmKG4ubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5kZWxldGUoZSk7bGV0IHI9dGhpcy5nZXQoZSwhMCk7aWYociBpbnN0YW5jZW9mIHQpcmV0dXJuIHIuZGVsZXRlSW4obik7dGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBZQU1MIGNvbGxlY3Rpb24gYXQgJHtlfS4gUmVtYWluaW5nIHBhdGg6ICR7bn1gKX1nZXRJbihbZSwuLi5uXSxyKXtsZXQgcz10aGlzLmdldChlLCEwKTtyZXR1cm4gbi5sZW5ndGg9PT0wPyFyJiZzIGluc3RhbmNlb2YgUD9zLnZhbHVlOnM6cyBpbnN0YW5jZW9mIHQ/cy5nZXRJbihuLHIpOnZvaWQgMH1oYXNBbGxOdWxsVmFsdWVzKCl7cmV0dXJuIHRoaXMuaXRlbXMuZXZlcnkoZT0+e2lmKCFlfHxlLnR5cGUhPT1cIlBBSVJcIilyZXR1cm4hMTtsZXQgbj1lLnZhbHVlO3JldHVybiBuPT1udWxsfHxuIGluc3RhbmNlb2YgUCYmbi52YWx1ZT09bnVsbCYmIW4uY29tbWVudEJlZm9yZSYmIW4uY29tbWVudCYmIW4udGFnfSl9aGFzSW4oW2UsLi4ubl0pe2lmKG4ubGVuZ3RoPT09MClyZXR1cm4gdGhpcy5oYXMoZSk7bGV0IHI9dGhpcy5nZXQoZSwhMCk7cmV0dXJuIHIgaW5zdGFuY2VvZiB0P3IuaGFzSW4obik6ITF9c2V0SW4oW2UsLi4ubl0scil7aWYobi5sZW5ndGg9PT0wKXRoaXMuc2V0KGUscik7ZWxzZXtsZXQgcz10aGlzLmdldChlLCEwKTtpZihzIGluc3RhbmNlb2YgdClzLnNldEluKG4scik7ZWxzZSBpZihzPT09dm9pZCAwJiZ0aGlzLnNjaGVtYSl0aGlzLnNldChlLERzKHRoaXMuc2NoZW1hLG4scikpO2Vsc2UgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBZQU1MIGNvbGxlY3Rpb24gYXQgJHtlfS4gUmVtYWluaW5nIHBhdGg6ICR7bn1gKX19dG9KU09OKCl7cmV0dXJuIG51bGx9dG9TdHJpbmcoZSx7YmxvY2tJdGVtOm4sZmxvd0NoYXJzOnIsaXNNYXA6cyxpdGVtSW5kZW50Oml9LG8sYSl7bGV0e2luZGVudDpjLGluZGVudFN0ZXA6bCxzdHJpbmdpZnk6Zn09ZSxtPXRoaXMudHlwZT09PXAuVHlwZS5GTE9XX01BUHx8dGhpcy50eXBlPT09cC5UeXBlLkZMT1dfU0VRfHxlLmluRmxvdzttJiYoaSs9bCk7bGV0IGQ9cyYmdGhpcy5oYXNBbGxOdWxsVmFsdWVzKCk7ZT1PYmplY3QuYXNzaWduKHt9LGUse2FsbE51bGxWYWx1ZXM6ZCxpbmRlbnQ6aSxpbkZsb3c6bSx0eXBlOm51bGx9KTtsZXQgeT0hMSxoPSExLGc9dGhpcy5pdGVtcy5yZWR1Y2UoKEMsTCxNKT0+e2xldCBBO0wmJigheSYmTC5zcGFjZUJlZm9yZSYmQy5wdXNoKHt0eXBlOlwiY29tbWVudFwiLHN0cjpcIlwifSksTC5jb21tZW50QmVmb3JlJiZMLmNvbW1lbnRCZWZvcmUubWF0Y2goL14uKiQvZ20pLmZvckVhY2goQWk9PntDLnB1c2goe3R5cGU6XCJjb21tZW50XCIsc3RyOmAjJHtBaX1gfSl9KSxMLmNvbW1lbnQmJihBPUwuY29tbWVudCksbSYmKCF5JiZMLnNwYWNlQmVmb3JlfHxMLmNvbW1lbnRCZWZvcmV8fEwuY29tbWVudHx8TC5rZXkmJihMLmtleS5jb21tZW50QmVmb3JlfHxMLmtleS5jb21tZW50KXx8TC52YWx1ZSYmKEwudmFsdWUuY29tbWVudEJlZm9yZXx8TC52YWx1ZS5jb21tZW50KSkmJihoPSEwKSkseT0hMTtsZXQgXz1mKEwsZSwoKT0+QT1udWxsLCgpPT55PSEwKTtyZXR1cm4gbSYmIWgmJl8uaW5jbHVkZXMoYFxuYCkmJihoPSEwKSxtJiZNPHRoaXMuaXRlbXMubGVuZ3RoLTEmJihfKz1cIixcIiksXz1GZShfLGksQSkseSYmKEF8fG0pJiYoeT0hMSksQy5wdXNoKHt0eXBlOlwiaXRlbVwiLHN0cjpffSksQ30sW10pLHc7aWYoZy5sZW5ndGg9PT0wKXc9ci5zdGFydCtyLmVuZDtlbHNlIGlmKG0pe2xldHtzdGFydDpDLGVuZDpMfT1yLE09Zy5tYXAoQT0+QS5zdHIpO2lmKGh8fE0ucmVkdWNlKChBLF8pPT5BK18ubGVuZ3RoKzIsMik+dC5tYXhGbG93U3RyaW5nU2luZ2xlTGluZUxlbmd0aCl7dz1DO2ZvcihsZXQgQSBvZiBNKXcrPUE/YFxuJHtsfSR7Y30ke0F9YDpgXG5gO3crPWBcbiR7Y30ke0x9YH1lbHNlIHc9YCR7Q30gJHtNLmpvaW4oXCIgXCIpfSAke0x9YH1lbHNle2xldCBDPWcubWFwKG4pO3c9Qy5zaGlmdCgpO2ZvcihsZXQgTCBvZiBDKXcrPUw/YFxuJHtjfSR7TH1gOmBcbmB9cmV0dXJuIHRoaXMuY29tbWVudD8odys9YFxuYCt0aGlzLmNvbW1lbnQucmVwbGFjZSgvXi9nbSxgJHtjfSNgKSxvJiZvKCkpOnkmJmEmJmEoKSx3fX07cC5fZGVmaW5lUHJvcGVydHkoaixcIm1heEZsb3dTdHJpbmdTaW5nbGVMaW5lTGVuZ3RoXCIsNjApO2Z1bmN0aW9uIEJ0KHQpe2xldCBlPXQgaW5zdGFuY2VvZiBQP3QudmFsdWU6dDtyZXR1cm4gZSYmdHlwZW9mIGU9PVwic3RyaW5nXCImJihlPU51bWJlcihlKSksTnVtYmVyLmlzSW50ZWdlcihlKSYmZT49MD9lOm51bGx9dmFyIHBlPWNsYXNzIGV4dGVuZHMganthZGQoZSl7dGhpcy5pdGVtcy5wdXNoKGUpfWRlbGV0ZShlKXtsZXQgbj1CdChlKTtyZXR1cm4gdHlwZW9mIG4hPVwibnVtYmVyXCI/ITE6dGhpcy5pdGVtcy5zcGxpY2UobiwxKS5sZW5ndGg+MH1nZXQoZSxuKXtsZXQgcj1CdChlKTtpZih0eXBlb2YgciE9XCJudW1iZXJcIilyZXR1cm47bGV0IHM9dGhpcy5pdGVtc1tyXTtyZXR1cm4hbiYmcyBpbnN0YW5jZW9mIFA/cy52YWx1ZTpzfWhhcyhlKXtsZXQgbj1CdChlKTtyZXR1cm4gdHlwZW9mIG49PVwibnVtYmVyXCImJm48dGhpcy5pdGVtcy5sZW5ndGh9c2V0KGUsbil7bGV0IHI9QnQoZSk7aWYodHlwZW9mIHIhPVwibnVtYmVyXCIpdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhIHZhbGlkIGluZGV4LCBub3QgJHtlfS5gKTt0aGlzLml0ZW1zW3JdPW59dG9KU09OKGUsbil7bGV0IHI9W107biYmbi5vbkNyZWF0ZSYmbi5vbkNyZWF0ZShyKTtsZXQgcz0wO2ZvcihsZXQgaSBvZiB0aGlzLml0ZW1zKXIucHVzaCh1ZShpLFN0cmluZyhzKyspLG4pKTtyZXR1cm4gcn10b1N0cmluZyhlLG4scil7cmV0dXJuIGU/c3VwZXIudG9TdHJpbmcoZSx7YmxvY2tJdGVtOnM9PnMudHlwZT09PVwiY29tbWVudFwiP3Muc3RyOmAtICR7cy5zdHJ9YCxmbG93Q2hhcnM6e3N0YXJ0OlwiW1wiLGVuZDpcIl1cIn0saXNNYXA6ITEsaXRlbUluZGVudDooZS5pbmRlbnR8fFwiXCIpK1wiICBcIn0sbixyKTpKU09OLnN0cmluZ2lmeSh0aGlzKX19LF9vPSh0LGUsbik9PmU9PT1udWxsP1wiXCI6dHlwZW9mIGUhPVwib2JqZWN0XCI/U3RyaW5nKGUpOnQgaW5zdGFuY2VvZiBXJiZuJiZuLmRvYz90LnRvU3RyaW5nKHthbmNob3JzOk9iamVjdC5jcmVhdGUobnVsbCksZG9jOm4uZG9jLGluZGVudDpcIlwiLGluZGVudFN0ZXA6bi5pbmRlbnRTdGVwLGluRmxvdzohMCxpblN0cmluZ2lmeUtleTohMCxzdHJpbmdpZnk6bi5zdHJpbmdpZnl9KTpKU09OLnN0cmluZ2lmeShlKSxUPWNsYXNzIHQgZXh0ZW5kcyBXe2NvbnN0cnVjdG9yKGUsbj1udWxsKXtzdXBlcigpLHRoaXMua2V5PWUsdGhpcy52YWx1ZT1uLHRoaXMudHlwZT10LlR5cGUuUEFJUn1nZXQgY29tbWVudEJlZm9yZSgpe3JldHVybiB0aGlzLmtleSBpbnN0YW5jZW9mIFc/dGhpcy5rZXkuY29tbWVudEJlZm9yZTp2b2lkIDB9c2V0IGNvbW1lbnRCZWZvcmUoZSl7aWYodGhpcy5rZXk9PW51bGwmJih0aGlzLmtleT1uZXcgUChudWxsKSksdGhpcy5rZXkgaW5zdGFuY2VvZiBXKXRoaXMua2V5LmNvbW1lbnRCZWZvcmU9ZTtlbHNle2xldCBuPVwiUGFpci5jb21tZW50QmVmb3JlIGlzIGFuIGFsaWFzIGZvciBQYWlyLmtleS5jb21tZW50QmVmb3JlLiBUbyBzZXQgaXQsIHRoZSBrZXkgbXVzdCBiZSBhIE5vZGUuXCI7dGhyb3cgbmV3IEVycm9yKG4pfX1hZGRUb0pTTWFwKGUsbil7bGV0IHI9dWUodGhpcy5rZXksXCJcIixlKTtpZihuIGluc3RhbmNlb2YgTWFwKXtsZXQgcz11ZSh0aGlzLnZhbHVlLHIsZSk7bi5zZXQocixzKX1lbHNlIGlmKG4gaW5zdGFuY2VvZiBTZXQpbi5hZGQocik7ZWxzZXtsZXQgcz1fbyh0aGlzLmtleSxyLGUpLGk9dWUodGhpcy52YWx1ZSxzLGUpO3MgaW4gbj9PYmplY3QuZGVmaW5lUHJvcGVydHkobixzLHt2YWx1ZTppLHdyaXRhYmxlOiEwLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSk6bltzXT1pfXJldHVybiBufXRvSlNPTihlLG4pe2xldCByPW4mJm4ubWFwQXNNYXA/bmV3IE1hcDp7fTtyZXR1cm4gdGhpcy5hZGRUb0pTTWFwKG4scil9dG9TdHJpbmcoZSxuLHIpe2lmKCFlfHwhZS5kb2MpcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO2xldHtpbmRlbnQ6cyxpbmRlbnRTZXE6aSxzaW1wbGVLZXlzOm99PWUuZG9jLm9wdGlvbnMse2tleTphLHZhbHVlOmN9PXRoaXMsbD1hIGluc3RhbmNlb2YgVyYmYS5jb21tZW50O2lmKG8pe2lmKGwpdGhyb3cgbmV3IEVycm9yKFwiV2l0aCBzaW1wbGUga2V5cywga2V5IG5vZGVzIGNhbm5vdCBoYXZlIGNvbW1lbnRzXCIpO2lmKGEgaW5zdGFuY2VvZiBqKXtsZXQgXz1cIldpdGggc2ltcGxlIGtleXMsIGNvbGxlY3Rpb24gY2Fubm90IGJlIHVzZWQgYXMgYSBrZXkgdmFsdWVcIjt0aHJvdyBuZXcgRXJyb3IoXyl9fWxldCBmPSFvJiYoIWF8fGx8fChhIGluc3RhbmNlb2YgVz9hIGluc3RhbmNlb2Yganx8YS50eXBlPT09cC5UeXBlLkJMT0NLX0ZPTERFRHx8YS50eXBlPT09cC5UeXBlLkJMT0NLX0xJVEVSQUw6dHlwZW9mIGE9PVwib2JqZWN0XCIpKSx7ZG9jOm0saW5kZW50OmQsaW5kZW50U3RlcDp5LHN0cmluZ2lmeTpofT1lO2U9T2JqZWN0LmFzc2lnbih7fSxlLHtpbXBsaWNpdEtleTohZixpbmRlbnQ6ZCt5fSk7bGV0IGc9ITEsdz1oKGEsZSwoKT0+bD1udWxsLCgpPT5nPSEwKTtpZih3PUZlKHcsZS5pbmRlbnQsbCksIWYmJncubGVuZ3RoPjEwMjQpe2lmKG8pdGhyb3cgbmV3IEVycm9yKFwiV2l0aCBzaW1wbGUga2V5cywgc2luZ2xlIGxpbmUgc2NhbGFyIG11c3Qgbm90IHNwYW4gbW9yZSB0aGFuIDEwMjQgY2hhcmFjdGVyc1wiKTtmPSEwfWlmKGUuYWxsTnVsbFZhbHVlcyYmIW8pcmV0dXJuIHRoaXMuY29tbWVudD8odz1GZSh3LGUuaW5kZW50LHRoaXMuY29tbWVudCksbiYmbigpKTpnJiYhbCYmciYmcigpLGUuaW5GbG93JiYhZj93OmA/ICR7d31gO3c9Zj9gPyAke3d9XG4ke2R9OmA6YCR7d306YCx0aGlzLmNvbW1lbnQmJih3PUZlKHcsZS5pbmRlbnQsdGhpcy5jb21tZW50KSxuJiZuKCkpO2xldCBDPVwiXCIsTD1udWxsO2lmKGMgaW5zdGFuY2VvZiBXKXtpZihjLnNwYWNlQmVmb3JlJiYoQz1gXG5gKSxjLmNvbW1lbnRCZWZvcmUpe2xldCBfPWMuY29tbWVudEJlZm9yZS5yZXBsYWNlKC9eL2dtLGAke2UuaW5kZW50fSNgKTtDKz1gXG4ke199YH1MPWMuY29tbWVudH1lbHNlIGMmJnR5cGVvZiBjPT1cIm9iamVjdFwiJiYoYz1tLnNjaGVtYS5jcmVhdGVOb2RlKGMsITApKTtlLmltcGxpY2l0S2V5PSExLCFmJiYhdGhpcy5jb21tZW50JiZjIGluc3RhbmNlb2YgUCYmKGUuaW5kZW50QXRTdGFydD13Lmxlbmd0aCsxKSxnPSExLCFpJiZzPj0yJiYhZS5pbkZsb3cmJiFmJiZjIGluc3RhbmNlb2YgcGUmJmMudHlwZSE9PXAuVHlwZS5GTE9XX1NFUSYmIWMudGFnJiYhbS5hbmNob3JzLmdldE5hbWUoYykmJihlLmluZGVudD1lLmluZGVudC5zdWJzdHIoMikpO2xldCBNPWgoYyxlLCgpPT5MPW51bGwsKCk9Pmc9ITApLEE9XCIgXCI7cmV0dXJuIEN8fHRoaXMuY29tbWVudD9BPWAke0N9XG4ke2UuaW5kZW50fWA6IWYmJmMgaW5zdGFuY2VvZiBqPyghKE1bMF09PT1cIltcInx8TVswXT09PVwie1wiKXx8TS5pbmNsdWRlcyhgXG5gKSkmJihBPWBcbiR7ZS5pbmRlbnR9YCk6TVswXT09PWBcbmAmJihBPVwiXCIpLGcmJiFMJiZyJiZyKCksRmUodytBK00sZS5pbmRlbnQsTCl9fTtwLl9kZWZpbmVQcm9wZXJ0eShULFwiVHlwZVwiLHtQQUlSOlwiUEFJUlwiLE1FUkdFX1BBSVI6XCJNRVJHRV9QQUlSXCJ9KTt2YXIgRnQ9KHQsZSk9PntpZih0IGluc3RhbmNlb2YgYmUpe2xldCBuPWUuZ2V0KHQuc291cmNlKTtyZXR1cm4gbi5jb3VudCpuLmFsaWFzQ291bnR9ZWxzZSBpZih0IGluc3RhbmNlb2Ygail7bGV0IG49MDtmb3IobGV0IHIgb2YgdC5pdGVtcyl7bGV0IHM9RnQocixlKTtzPm4mJihuPXMpfXJldHVybiBufWVsc2UgaWYodCBpbnN0YW5jZW9mIFQpe2xldCBuPUZ0KHQua2V5LGUpLHI9RnQodC52YWx1ZSxlKTtyZXR1cm4gTWF0aC5tYXgobixyKX1yZXR1cm4gMX0sYmU9Y2xhc3MgdCBleHRlbmRzIFd7c3RhdGljIHN0cmluZ2lmeSh7cmFuZ2U6ZSxzb3VyY2U6bn0se2FuY2hvcnM6cixkb2M6cyxpbXBsaWNpdEtleTppLGluU3RyaW5naWZ5S2V5Om99KXtsZXQgYT1PYmplY3Qua2V5cyhyKS5maW5kKGw9PnJbbF09PT1uKTtpZighYSYmbyYmKGE9cy5hbmNob3JzLmdldE5hbWUobil8fHMuYW5jaG9ycy5uZXdOYW1lKCkpLGEpcmV0dXJuYCoke2F9JHtpP1wiIFwiOlwiXCJ9YDtsZXQgYz1zLmFuY2hvcnMuZ2V0TmFtZShuKT9cIkFsaWFzIG5vZGUgbXVzdCBiZSBhZnRlciBzb3VyY2Ugbm9kZVwiOlwiU291cmNlIG5vZGUgbm90IGZvdW5kIGZvciBhbGlhcyBub2RlXCI7dGhyb3cgbmV3IEVycm9yKGAke2N9IFske2V9XWApfWNvbnN0cnVjdG9yKGUpe3N1cGVyKCksdGhpcy5zb3VyY2U9ZSx0aGlzLnR5cGU9cC5UeXBlLkFMSUFTfXNldCB0YWcoZSl7dGhyb3cgbmV3IEVycm9yKFwiQWxpYXMgbm9kZXMgY2Fubm90IGhhdmUgdGFnc1wiKX10b0pTT04oZSxuKXtpZighbilyZXR1cm4gdWUodGhpcy5zb3VyY2UsZSxuKTtsZXR7YW5jaG9yczpyLG1heEFsaWFzQ291bnQ6c309bixpPXIuZ2V0KHRoaXMuc291cmNlKTtpZighaXx8aS5yZXM9PT12b2lkIDApe2xldCBvPVwiVGhpcyBzaG91bGQgbm90IGhhcHBlbjogQWxpYXMgYW5jaG9yIHdhcyBub3QgcmVzb2x2ZWQ/XCI7dGhyb3cgdGhpcy5jc3ROb2RlP25ldyBwLllBTUxSZWZlcmVuY2VFcnJvcih0aGlzLmNzdE5vZGUsbyk6bmV3IFJlZmVyZW5jZUVycm9yKG8pfWlmKHM+PTAmJihpLmNvdW50Kz0xLGkuYWxpYXNDb3VudD09PTAmJihpLmFsaWFzQ291bnQ9RnQodGhpcy5zb3VyY2UscikpLGkuY291bnQqaS5hbGlhc0NvdW50PnMpKXtsZXQgbz1cIkV4Y2Vzc2l2ZSBhbGlhcyBjb3VudCBpbmRpY2F0ZXMgYSByZXNvdXJjZSBleGhhdXN0aW9uIGF0dGFja1wiO3Rocm93IHRoaXMuY3N0Tm9kZT9uZXcgcC5ZQU1MUmVmZXJlbmNlRXJyb3IodGhpcy5jc3ROb2RlLG8pOm5ldyBSZWZlcmVuY2VFcnJvcihvKX1yZXR1cm4gaS5yZXN9dG9TdHJpbmcoZSl7cmV0dXJuIHQuc3RyaW5naWZ5KHRoaXMsZSl9fTtwLl9kZWZpbmVQcm9wZXJ0eShiZSxcImRlZmF1bHRcIiwhMCk7ZnVuY3Rpb24gcHQodCxlKXtsZXQgbj1lIGluc3RhbmNlb2YgUD9lLnZhbHVlOmU7Zm9yKGxldCByIG9mIHQpaWYociBpbnN0YW5jZW9mIFQmJihyLmtleT09PWV8fHIua2V5PT09bnx8ci5rZXkmJnIua2V5LnZhbHVlPT09bikpcmV0dXJuIHJ9dmFyIG10PWNsYXNzIGV4dGVuZHMganthZGQoZSxuKXtlP2UgaW5zdGFuY2VvZiBUfHwoZT1uZXcgVChlLmtleXx8ZSxlLnZhbHVlKSk6ZT1uZXcgVChlKTtsZXQgcj1wdCh0aGlzLml0ZW1zLGUua2V5KSxzPXRoaXMuc2NoZW1hJiZ0aGlzLnNjaGVtYS5zb3J0TWFwRW50cmllcztpZihyKWlmKG4pci52YWx1ZT1lLnZhbHVlO2Vsc2UgdGhyb3cgbmV3IEVycm9yKGBLZXkgJHtlLmtleX0gYWxyZWFkeSBzZXRgKTtlbHNlIGlmKHMpe2xldCBpPXRoaXMuaXRlbXMuZmluZEluZGV4KG89PnMoZSxvKTwwKTtpPT09LTE/dGhpcy5pdGVtcy5wdXNoKGUpOnRoaXMuaXRlbXMuc3BsaWNlKGksMCxlKX1lbHNlIHRoaXMuaXRlbXMucHVzaChlKX1kZWxldGUoZSl7bGV0IG49cHQodGhpcy5pdGVtcyxlKTtyZXR1cm4gbj90aGlzLml0ZW1zLnNwbGljZSh0aGlzLml0ZW1zLmluZGV4T2YobiksMSkubGVuZ3RoPjA6ITF9Z2V0KGUsbil7bGV0IHI9cHQodGhpcy5pdGVtcyxlKSxzPXImJnIudmFsdWU7cmV0dXJuIW4mJnMgaW5zdGFuY2VvZiBQP3MudmFsdWU6c31oYXMoZSl7cmV0dXJuISFwdCh0aGlzLml0ZW1zLGUpfXNldChlLG4pe3RoaXMuYWRkKG5ldyBUKGUsbiksITApfXRvSlNPTihlLG4scil7bGV0IHM9cj9uZXcgcjpuJiZuLm1hcEFzTWFwP25ldyBNYXA6e307biYmbi5vbkNyZWF0ZSYmbi5vbkNyZWF0ZShzKTtmb3IobGV0IGkgb2YgdGhpcy5pdGVtcylpLmFkZFRvSlNNYXAobixzKTtyZXR1cm4gc310b1N0cmluZyhlLG4scil7aWYoIWUpcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO2ZvcihsZXQgcyBvZiB0aGlzLml0ZW1zKWlmKCEocyBpbnN0YW5jZW9mIFQpKXRocm93IG5ldyBFcnJvcihgTWFwIGl0ZW1zIG11c3QgYWxsIGJlIHBhaXJzOyBmb3VuZCAke0pTT04uc3RyaW5naWZ5KHMpfSBpbnN0ZWFkYCk7cmV0dXJuIHN1cGVyLnRvU3RyaW5nKGUse2Jsb2NrSXRlbTpzPT5zLnN0cixmbG93Q2hhcnM6e3N0YXJ0Olwie1wiLGVuZDpcIn1cIn0saXNNYXA6ITAsaXRlbUluZGVudDplLmluZGVudHx8XCJcIn0sbixyKX19LEZzPVwiPDxcIixLdD1jbGFzcyBleHRlbmRzIFR7Y29uc3RydWN0b3IoZSl7aWYoZSBpbnN0YW5jZW9mIFQpe2xldCBuPWUudmFsdWU7biBpbnN0YW5jZW9mIHBlfHwobj1uZXcgcGUsbi5pdGVtcy5wdXNoKGUudmFsdWUpLG4ucmFuZ2U9ZS52YWx1ZS5yYW5nZSksc3VwZXIoZS5rZXksbiksdGhpcy5yYW5nZT1lLnJhbmdlfWVsc2Ugc3VwZXIobmV3IFAoRnMpLG5ldyBwZSk7dGhpcy50eXBlPVQuVHlwZS5NRVJHRV9QQUlSfWFkZFRvSlNNYXAoZSxuKXtmb3IobGV0e3NvdXJjZTpyfW9mIHRoaXMudmFsdWUuaXRlbXMpe2lmKCEociBpbnN0YW5jZW9mIG10KSl0aHJvdyBuZXcgRXJyb3IoXCJNZXJnZSBzb3VyY2VzIG11c3QgYmUgbWFwc1wiKTtsZXQgcz1yLnRvSlNPTihudWxsLGUsTWFwKTtmb3IobGV0W2ksb11vZiBzKW4gaW5zdGFuY2VvZiBNYXA/bi5oYXMoaSl8fG4uc2V0KGksbyk6biBpbnN0YW5jZW9mIFNldD9uLmFkZChpKTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KG4saSx7dmFsdWU6byx3cml0YWJsZTohMCxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfXJldHVybiBufXRvU3RyaW5nKGUsbil7bGV0IHI9dGhpcy52YWx1ZTtpZihyLml0ZW1zLmxlbmd0aD4xKXJldHVybiBzdXBlci50b1N0cmluZyhlLG4pO3RoaXMudmFsdWU9ci5pdGVtc1swXTtsZXQgcz1zdXBlci50b1N0cmluZyhlLG4pO3JldHVybiB0aGlzLnZhbHVlPXIsc319LHhvPXtkZWZhdWx0VHlwZTpwLlR5cGUuQkxPQ0tfTElURVJBTCxsaW5lV2lkdGg6NzZ9LFJvPXt0cnVlU3RyOlwidHJ1ZVwiLGZhbHNlU3RyOlwiZmFsc2VcIn0sRG89e2FzQmlnSW50OiExfSxZbz17bnVsbFN0cjpcIm51bGxcIn0sTmU9e2RlZmF1bHRUeXBlOnAuVHlwZS5QTEFJTixkb3VibGVRdW90ZWQ6e2pzb25FbmNvZGluZzohMSxtaW5NdWx0aUxpbmVMZW5ndGg6NDB9LGZvbGQ6e2xpbmVXaWR0aDo4MCxtaW5Db250ZW50V2lkdGg6MjB9fTtmdW5jdGlvbiBxbih0LGUsbil7Zm9yKGxldHtmb3JtYXQ6cix0ZXN0OnMscmVzb2x2ZTppfW9mIGUpaWYocyl7bGV0IG89dC5tYXRjaChzKTtpZihvKXtsZXQgYT1pLmFwcGx5KG51bGwsbyk7cmV0dXJuIGEgaW5zdGFuY2VvZiBQfHwoYT1uZXcgUChhKSksciYmKGEuZm9ybWF0PXIpLGF9fXJldHVybiBuJiYodD1uKHQpKSxuZXcgUCh0KX12YXIgcXM9XCJmbG93XCIsRm49XCJibG9ja1wiLHF0PVwicXVvdGVkXCIsWXM9KHQsZSk9PntsZXQgbj10W2UrMV07Zm9yKDtuPT09XCIgXCJ8fG49PT1cIlx0XCI7KXtkbyBuPXRbZSs9MV07d2hpbGUobiYmbiE9PWBcbmApO249dFtlKzFdfXJldHVybiBlfTtmdW5jdGlvbiBWdCh0LGUsbix7aW5kZW50QXRTdGFydDpyLGxpbmVXaWR0aDpzPTgwLG1pbkNvbnRlbnRXaWR0aDppPTIwLG9uRm9sZDpvLG9uT3ZlcmZsb3c6YX0pe2lmKCFzfHxzPDApcmV0dXJuIHQ7bGV0IGM9TWF0aC5tYXgoMStpLDErcy1lLmxlbmd0aCk7aWYodC5sZW5ndGg8PWMpcmV0dXJuIHQ7bGV0IGw9W10sZj17fSxtPXMtZS5sZW5ndGg7dHlwZW9mIHI9PVwibnVtYmVyXCImJihyPnMtTWF0aC5tYXgoMixpKT9sLnB1c2goMCk6bT1zLXIpO2xldCBkLHksaD0hMSxnPS0xLHc9LTEsQz0tMTtuPT09Rm4mJihnPVlzKHQsZyksZyE9PS0xJiYobT1nK2MpKTtmb3IobGV0IE07TT10W2crPTFdOyl7aWYobj09PXF0JiZNPT09XCJcXFxcXCIpe3N3aXRjaCh3PWcsdFtnKzFdKXtjYXNlXCJ4XCI6Zys9MzticmVhaztjYXNlXCJ1XCI6Zys9NTticmVhaztjYXNlXCJVXCI6Zys9OTticmVhaztkZWZhdWx0OmcrPTF9Qz1nfWlmKE09PT1gXG5gKW49PT1GbiYmKGc9WXModCxnKSksbT1nK2MsZD12b2lkIDA7ZWxzZXtpZihNPT09XCIgXCImJnkmJnkhPT1cIiBcIiYmeSE9PWBcbmAmJnkhPT1cIlx0XCIpe2xldCBBPXRbZysxXTtBJiZBIT09XCIgXCImJkEhPT1gXG5gJiZBIT09XCJcdFwiJiYoZD1nKX1pZihnPj1tKWlmKGQpbC5wdXNoKGQpLG09ZCtjLGQ9dm9pZCAwO2Vsc2UgaWYobj09PXF0KXtmb3IoO3k9PT1cIiBcInx8eT09PVwiXHRcIjspeT1NLE09dFtnKz0xXSxoPSEwO2xldCBBPWc+QysxP2ctMjp3LTE7aWYoZltBXSlyZXR1cm4gdDtsLnB1c2goQSksZltBXT0hMCxtPUErYyxkPXZvaWQgMH1lbHNlIGg9ITB9eT1NfWlmKGgmJmEmJmEoKSxsLmxlbmd0aD09PTApcmV0dXJuIHQ7byYmbygpO2xldCBMPXQuc2xpY2UoMCxsWzBdKTtmb3IobGV0IE09MDtNPGwubGVuZ3RoOysrTSl7bGV0IEE9bFtNXSxfPWxbTSsxXXx8dC5sZW5ndGg7QT09PTA/TD1gXG4ke2V9JHt0LnNsaWNlKDAsXyl9YDoobj09PXF0JiZmW0FdJiYoTCs9YCR7dFtBXX1cXFxcYCksTCs9YFxuJHtlfSR7dC5zbGljZShBKzEsXyl9YCl9cmV0dXJuIEx9dmFyIFVuPSh7aW5kZW50QXRTdGFydDp0fSk9PnQ/T2JqZWN0LmFzc2lnbih7aW5kZW50QXRTdGFydDp0fSxOZS5mb2xkKTpOZS5mb2xkLFd0PXQ9Pi9eKCV8LS0tfFxcLlxcLlxcLikvbS50ZXN0KHQpO2Z1bmN0aW9uICRvKHQsZSxuKXtpZighZXx8ZTwwKXJldHVybiExO2xldCByPWUtbixzPXQubGVuZ3RoO2lmKHM8PXIpcmV0dXJuITE7Zm9yKGxldCBpPTAsbz0wO2k8czsrK2kpaWYodFtpXT09PWBcbmApe2lmKGktbz5yKXJldHVybiEwO2lmKG89aSsxLHMtbzw9cilyZXR1cm4hMX1yZXR1cm4hMH1mdW5jdGlvbiB3ZSh0LGUpe2xldHtpbXBsaWNpdEtleTpufT1lLHtqc29uRW5jb2Rpbmc6cixtaW5NdWx0aUxpbmVMZW5ndGg6c309TmUuZG91YmxlUXVvdGVkLGk9SlNPTi5zdHJpbmdpZnkodCk7aWYocilyZXR1cm4gaTtsZXQgbz1lLmluZGVudHx8KFd0KHQpP1wiICBcIjpcIlwiKSxhPVwiXCIsYz0wO2ZvcihsZXQgbD0wLGY9aVtsXTtmO2Y9aVsrK2xdKWlmKGY9PT1cIiBcIiYmaVtsKzFdPT09XCJcXFxcXCImJmlbbCsyXT09PVwiblwiJiYoYSs9aS5zbGljZShjLGwpK1wiXFxcXCBcIixsKz0xLGM9bCxmPVwiXFxcXFwiKSxmPT09XCJcXFxcXCIpc3dpdGNoKGlbbCsxXSl7Y2FzZVwidVwiOnthKz1pLnNsaWNlKGMsbCk7bGV0IG09aS5zdWJzdHIobCsyLDQpO3N3aXRjaChtKXtjYXNlXCIwMDAwXCI6YSs9XCJcXFxcMFwiO2JyZWFrO2Nhc2VcIjAwMDdcIjphKz1cIlxcXFxhXCI7YnJlYWs7Y2FzZVwiMDAwYlwiOmErPVwiXFxcXHZcIjticmVhaztjYXNlXCIwMDFiXCI6YSs9XCJcXFxcZVwiO2JyZWFrO2Nhc2VcIjAwODVcIjphKz1cIlxcXFxOXCI7YnJlYWs7Y2FzZVwiMDBhMFwiOmErPVwiXFxcXF9cIjticmVhaztjYXNlXCIyMDI4XCI6YSs9XCJcXFxcTFwiO2JyZWFrO2Nhc2VcIjIwMjlcIjphKz1cIlxcXFxQXCI7YnJlYWs7ZGVmYXVsdDptLnN1YnN0cigwLDIpPT09XCIwMFwiP2ErPVwiXFxcXHhcIittLnN1YnN0cigyKTphKz1pLnN1YnN0cihsLDYpfWwrPTUsYz1sKzF9YnJlYWs7Y2FzZVwiblwiOmlmKG58fGlbbCsyXT09PSdcIid8fGkubGVuZ3RoPHMpbCs9MTtlbHNle2ZvcihhKz1pLnNsaWNlKGMsbCkrYFxuXG5gO2lbbCsyXT09PVwiXFxcXFwiJiZpW2wrM109PT1cIm5cIiYmaVtsKzRdIT09J1wiJzspYSs9YFxuYCxsKz0yO2ErPW8saVtsKzJdPT09XCIgXCImJihhKz1cIlxcXFxcIiksbCs9MSxjPWwrMX1icmVhaztkZWZhdWx0OmwrPTF9cmV0dXJuIGE9Yz9hK2kuc2xpY2UoYyk6aSxuP2E6VnQoYSxvLHF0LFVuKGUpKX1mdW5jdGlvbiBVcyh0LGUpe2lmKGUuaW1wbGljaXRLZXkpe2lmKC9cXG4vLnRlc3QodCkpcmV0dXJuIHdlKHQsZSl9ZWxzZSBpZigvWyBcXHRdXFxufFxcblsgXFx0XS8udGVzdCh0KSlyZXR1cm4gd2UodCxlKTtsZXQgbj1lLmluZGVudHx8KFd0KHQpP1wiICBcIjpcIlwiKSxyPVwiJ1wiK3QucmVwbGFjZSgvJy9nLFwiJydcIikucmVwbGFjZSgvXFxuKy9nLGAkJlxuJHtufWApK1wiJ1wiO3JldHVybiBlLmltcGxpY2l0S2V5P3I6VnQocixuLHFzLFVuKGUpKX1mdW5jdGlvbiBVdCh7Y29tbWVudDp0LHR5cGU6ZSx2YWx1ZTpufSxyLHMsaSl7aWYoL1xcbltcXHQgXSskLy50ZXN0KG4pfHwvXlxccyokLy50ZXN0KG4pKXJldHVybiB3ZShuLHIpO2xldCBvPXIuaW5kZW50fHwoci5mb3JjZUJsb2NrSW5kZW50fHxXdChuKT9cIiAgXCI6XCJcIiksYT1vP1wiMlwiOlwiMVwiLGM9ZT09PXAuVHlwZS5CTE9DS19GT0xERUQ/ITE6ZT09PXAuVHlwZS5CTE9DS19MSVRFUkFMPyEwOiEkbyhuLE5lLmZvbGQubGluZVdpZHRoLG8ubGVuZ3RoKSxsPWM/XCJ8XCI6XCI+XCI7aWYoIW4pcmV0dXJuIGwrYFxuYDtsZXQgZj1cIlwiLG09XCJcIjtpZihuPW4ucmVwbGFjZSgvW1xcblxcdCBdKiQvLHk9PntsZXQgaD15LmluZGV4T2YoYFxuYCk7cmV0dXJuIGg9PT0tMT9sKz1cIi1cIjoobj09PXl8fGghPT15Lmxlbmd0aC0xKSYmKGwrPVwiK1wiLGkmJmkoKSksbT15LnJlcGxhY2UoL1xcbiQvLFwiXCIpLFwiXCJ9KS5yZXBsYWNlKC9eW1xcbiBdKi8seT0+e3kuaW5kZXhPZihcIiBcIikhPT0tMSYmKGwrPWEpO2xldCBoPXkubWF0Y2goLyArJC8pO3JldHVybiBoPyhmPXkuc2xpY2UoMCwtaFswXS5sZW5ndGgpLGhbMF0pOihmPXksXCJcIil9KSxtJiYobT1tLnJlcGxhY2UoL1xcbisoPyFcXG58JCkvZyxgJCYke299YCkpLGYmJihmPWYucmVwbGFjZSgvXFxuKy9nLGAkJiR7b31gKSksdCYmKGwrPVwiICNcIit0LnJlcGxhY2UoLyA/W1xcclxcbl0rL2csXCIgXCIpLHMmJnMoKSksIW4pcmV0dXJuYCR7bH0ke2F9XG4ke299JHttfWA7aWYoYylyZXR1cm4gbj1uLnJlcGxhY2UoL1xcbisvZyxgJCYke299YCksYCR7bH1cbiR7b30ke2Z9JHtufSR7bX1gO249bi5yZXBsYWNlKC9cXG4rL2csYFxuJCZgKS5yZXBsYWNlKC8oPzpefFxcbikoW1xcdCBdLiopKD86KFtcXG5cXHQgXSopXFxuKD8hW1xcblxcdCBdKSk/L2csXCIkMSQyXCIpLnJlcGxhY2UoL1xcbisvZyxgJCYke299YCk7bGV0IGQ9VnQoYCR7Zn0ke259JHttfWAsbyxGbixOZS5mb2xkKTtyZXR1cm5gJHtsfVxuJHtvfSR7ZH1gfWZ1bmN0aW9uIEJvKHQsZSxuLHIpe2xldHtjb21tZW50OnMsdHlwZTppLHZhbHVlOm99PXQse2FjdHVhbFN0cmluZzphLGltcGxpY2l0S2V5OmMsaW5kZW50OmwsaW5GbG93OmZ9PWU7aWYoYyYmL1tcXG5bXFxde30sXS8udGVzdChvKXx8ZiYmL1tbXFxde30sXS8udGVzdChvKSlyZXR1cm4gd2UobyxlKTtpZighb3x8L15bXFxuXFx0ICxbXFxde30jJiohfD4nXCIlQGBdfF5bPy1dJHxeWz8tXVsgXFx0XXxbXFxuOl1bIFxcdF18WyBcXHRdXFxufFtcXG5cXHQgXSN8W1xcblxcdCA6XSQvLnRlc3QobykpcmV0dXJuIGN8fGZ8fG8uaW5kZXhPZihgXG5gKT09PS0xP28uaW5kZXhPZignXCInKSE9PS0xJiZvLmluZGV4T2YoXCInXCIpPT09LTE/VXMobyxlKTp3ZShvLGUpOlV0KHQsZSxuLHIpO2lmKCFjJiYhZiYmaSE9PXAuVHlwZS5QTEFJTiYmby5pbmRleE9mKGBcbmApIT09LTEpcmV0dXJuIFV0KHQsZSxuLHIpO2lmKGw9PT1cIlwiJiZXdChvKSlyZXR1cm4gZS5mb3JjZUJsb2NrSW5kZW50PSEwLFV0KHQsZSxuLHIpO2xldCBtPW8ucmVwbGFjZSgvXFxuKy9nLGAkJlxuJHtsfWApO2lmKGEpe2xldHt0YWdzOnl9PWUuZG9jLnNjaGVtYTtpZih0eXBlb2YgcW4obSx5LHkuc2NhbGFyRmFsbGJhY2spLnZhbHVlIT1cInN0cmluZ1wiKXJldHVybiB3ZShvLGUpfWxldCBkPWM/bTpWdChtLGwscXMsVW4oZSkpO3JldHVybiBzJiYhZiYmKGQuaW5kZXhPZihgXG5gKSE9PS0xfHxzLmluZGV4T2YoYFxuYCkhPT0tMSk/KG4mJm4oKSxQbyhkLGwscykpOmR9ZnVuY3Rpb24gRm8odCxlLG4scil7bGV0e2RlZmF1bHRUeXBlOnN9PU5lLHtpbXBsaWNpdEtleTppLGluRmxvdzpvfT1lLHt0eXBlOmEsdmFsdWU6Y309dDt0eXBlb2YgYyE9XCJzdHJpbmdcIiYmKGM9U3RyaW5nKGMpLHQ9T2JqZWN0LmFzc2lnbih7fSx0LHt2YWx1ZTpjfSkpO2xldCBsPW09Pntzd2l0Y2gobSl7Y2FzZSBwLlR5cGUuQkxPQ0tfRk9MREVEOmNhc2UgcC5UeXBlLkJMT0NLX0xJVEVSQUw6cmV0dXJuIFV0KHQsZSxuLHIpO2Nhc2UgcC5UeXBlLlFVT1RFX0RPVUJMRTpyZXR1cm4gd2UoYyxlKTtjYXNlIHAuVHlwZS5RVU9URV9TSU5HTEU6cmV0dXJuIFVzKGMsZSk7Y2FzZSBwLlR5cGUuUExBSU46cmV0dXJuIEJvKHQsZSxuLHIpO2RlZmF1bHQ6cmV0dXJuIG51bGx9fTsoYSE9PXAuVHlwZS5RVU9URV9ET1VCTEUmJi9bXFx4MDAtXFx4MDhcXHgwYi1cXHgxZlxceDdmLVxceDlmXS8udGVzdChjKXx8KGl8fG8pJiYoYT09PXAuVHlwZS5CTE9DS19GT0xERUR8fGE9PT1wLlR5cGUuQkxPQ0tfTElURVJBTCkpJiYoYT1wLlR5cGUuUVVPVEVfRE9VQkxFKTtsZXQgZj1sKGEpO2lmKGY9PT1udWxsJiYoZj1sKHMpLGY9PT1udWxsKSl0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGRlZmF1bHQgc3RyaW5nIHR5cGUgJHtzfWApO3JldHVybiBmfWZ1bmN0aW9uIHFvKHtmb3JtYXQ6dCxtaW5GcmFjdGlvbkRpZ2l0czplLHRhZzpuLHZhbHVlOnJ9KXtpZih0eXBlb2Ygcj09XCJiaWdpbnRcIilyZXR1cm4gU3RyaW5nKHIpO2lmKCFpc0Zpbml0ZShyKSlyZXR1cm4gaXNOYU4ocik/XCIubmFuXCI6cjwwP1wiLS5pbmZcIjpcIi5pbmZcIjtsZXQgcz1KU09OLnN0cmluZ2lmeShyKTtpZighdCYmZSYmKCFufHxuPT09XCJ0YWc6eWFtbC5vcmcsMjAwMjpmbG9hdFwiKSYmL15cXGQvLnRlc3Qocykpe2xldCBpPXMuaW5kZXhPZihcIi5cIik7aTwwJiYoaT1zLmxlbmd0aCxzKz1cIi5cIik7bGV0IG89ZS0ocy5sZW5ndGgtaS0xKTtmb3IoO28tLSA+MDspcys9XCIwXCJ9cmV0dXJuIHN9ZnVuY3Rpb24gS3ModCxlKXtsZXQgbixyO3N3aXRjaChlLnR5cGUpe2Nhc2UgcC5UeXBlLkZMT1dfTUFQOm49XCJ9XCIscj1cImZsb3cgbWFwXCI7YnJlYWs7Y2FzZSBwLlR5cGUuRkxPV19TRVE6bj1cIl1cIixyPVwiZmxvdyBzZXF1ZW5jZVwiO2JyZWFrO2RlZmF1bHQ6dC5wdXNoKG5ldyBwLllBTUxTZW1hbnRpY0Vycm9yKGUsXCJOb3QgYSBmbG93IGNvbGxlY3Rpb24hP1wiKSk7cmV0dXJufWxldCBzO2ZvcihsZXQgaT1lLml0ZW1zLmxlbmd0aC0xO2k+PTA7LS1pKXtsZXQgbz1lLml0ZW1zW2ldO2lmKCFvfHxvLnR5cGUhPT1wLlR5cGUuQ09NTUVOVCl7cz1vO2JyZWFrfX1pZihzJiZzLmNoYXIhPT1uKXtsZXQgaT1gRXhwZWN0ZWQgJHtyfSB0byBlbmQgd2l0aCAke259YCxvO3R5cGVvZiBzLm9mZnNldD09XCJudW1iZXJcIj8obz1uZXcgcC5ZQU1MU2VtYW50aWNFcnJvcihlLGkpLG8ub2Zmc2V0PXMub2Zmc2V0KzEpOihvPW5ldyBwLllBTUxTZW1hbnRpY0Vycm9yKHMsaSkscy5yYW5nZSYmcy5yYW5nZS5lbmQmJihvLm9mZnNldD1zLnJhbmdlLmVuZC1zLnJhbmdlLnN0YXJ0KSksdC5wdXNoKG8pfX1mdW5jdGlvbiBWcyh0LGUpe2xldCBuPWUuY29udGV4dC5zcmNbZS5yYW5nZS5zdGFydC0xXTtpZihuIT09YFxuYCYmbiE9PVwiXHRcIiYmbiE9PVwiIFwiKXtsZXQgcj1cIkNvbW1lbnRzIG11c3QgYmUgc2VwYXJhdGVkIGZyb20gb3RoZXIgdG9rZW5zIGJ5IHdoaXRlIHNwYWNlIGNoYXJhY3RlcnNcIjt0LnB1c2gobmV3IHAuWUFNTFNlbWFudGljRXJyb3IoZSxyKSl9fWZ1bmN0aW9uIFdzKHQsZSl7bGV0IG49U3RyaW5nKGUpLHI9bi5zdWJzdHIoMCw4KStcIi4uLlwiK24uc3Vic3RyKC04KTtyZXR1cm4gbmV3IHAuWUFNTFNlbWFudGljRXJyb3IodCxgVGhlIFwiJHtyfVwiIGtleSBpcyB0b28gbG9uZ2ApfWZ1bmN0aW9uIGpzKHQsZSl7Zm9yKGxldHthZnRlcktleTpuLGJlZm9yZTpyLGNvbW1lbnQ6c31vZiBlKXtsZXQgaT10Lml0ZW1zW3JdO2k/KG4mJmkudmFsdWUmJihpPWkudmFsdWUpLHM9PT12b2lkIDA/KG58fCFpLmNvbW1lbnRCZWZvcmUpJiYoaS5zcGFjZUJlZm9yZT0hMCk6aS5jb21tZW50QmVmb3JlP2kuY29tbWVudEJlZm9yZSs9YFxuYCtzOmkuY29tbWVudEJlZm9yZT1zKTpzIT09dm9pZCAwJiYodC5jb21tZW50P3QuY29tbWVudCs9YFxuYCtzOnQuY29tbWVudD1zKX19ZnVuY3Rpb24gS24odCxlKXtsZXQgbj1lLnN0clZhbHVlO3JldHVybiBuP3R5cGVvZiBuPT1cInN0cmluZ1wiP246KG4uZXJyb3JzLmZvckVhY2gocj0+e3Iuc291cmNlfHwoci5zb3VyY2U9ZSksdC5lcnJvcnMucHVzaChyKX0pLG4uc3RyKTpcIlwifWZ1bmN0aW9uIFVvKHQsZSl7bGV0e2hhbmRsZTpuLHN1ZmZpeDpyfT1lLnRhZyxzPXQudGFnUHJlZml4ZXMuZmluZChpPT5pLmhhbmRsZT09PW4pO2lmKCFzKXtsZXQgaT10LmdldERlZmF1bHRzKCkudGFnUHJlZml4ZXM7aWYoaSYmKHM9aS5maW5kKG89Pm8uaGFuZGxlPT09bikpLCFzKXRocm93IG5ldyBwLllBTUxTZW1hbnRpY0Vycm9yKGUsYFRoZSAke259IHRhZyBoYW5kbGUgaXMgbm9uLWRlZmF1bHQgYW5kIHdhcyBub3QgZGVjbGFyZWQuYCl9aWYoIXIpdGhyb3cgbmV3IHAuWUFNTFNlbWFudGljRXJyb3IoZSxgVGhlICR7bn0gdGFnIGhhcyBubyBzdWZmaXguYCk7aWYobj09PVwiIVwiJiYodC52ZXJzaW9ufHx0Lm9wdGlvbnMudmVyc2lvbik9PT1cIjEuMFwiKXtpZihyWzBdPT09XCJeXCIpcmV0dXJuIHQud2FybmluZ3MucHVzaChuZXcgcC5ZQU1MV2FybmluZyhlLFwiWUFNTCAxLjAgXiB0YWcgZXhwYW5zaW9uIGlzIG5vdCBzdXBwb3J0ZWRcIikpLHI7aWYoL1s6L10vLnRlc3Qocikpe2xldCBpPXIubWF0Y2goL14oW2EtejAtOS1dKylcXC8oLiopL2kpO3JldHVybiBpP2B0YWc6JHtpWzFdfS55YW1sLm9yZywyMDAyOiR7aVsyXX1gOmB0YWc6JHtyfWB9fXJldHVybiBzLnByZWZpeCtkZWNvZGVVUklDb21wb25lbnQocil9ZnVuY3Rpb24gS28odCxlKXtsZXR7dGFnOm4sdHlwZTpyfT1lLHM9ITE7aWYobil7bGV0e2hhbmRsZTppLHN1ZmZpeDpvLHZlcmJhdGltOmF9PW47aWYoYSl7aWYoYSE9PVwiIVwiJiZhIT09XCIhIVwiKXJldHVybiBhO2xldCBjPWBWZXJiYXRpbSB0YWdzIGFyZW4ndCByZXNvbHZlZCwgc28gJHthfSBpcyBpbnZhbGlkLmA7dC5lcnJvcnMucHVzaChuZXcgcC5ZQU1MU2VtYW50aWNFcnJvcihlLGMpKX1lbHNlIGlmKGk9PT1cIiFcIiYmIW8pcz0hMDtlbHNlIHRyeXtyZXR1cm4gVW8odCxlKX1jYXRjaChjKXt0LmVycm9ycy5wdXNoKGMpfX1zd2l0Y2gocil7Y2FzZSBwLlR5cGUuQkxPQ0tfRk9MREVEOmNhc2UgcC5UeXBlLkJMT0NLX0xJVEVSQUw6Y2FzZSBwLlR5cGUuUVVPVEVfRE9VQkxFOmNhc2UgcC5UeXBlLlFVT1RFX1NJTkdMRTpyZXR1cm4gcC5kZWZhdWx0VGFncy5TVFI7Y2FzZSBwLlR5cGUuRkxPV19NQVA6Y2FzZSBwLlR5cGUuTUFQOnJldHVybiBwLmRlZmF1bHRUYWdzLk1BUDtjYXNlIHAuVHlwZS5GTE9XX1NFUTpjYXNlIHAuVHlwZS5TRVE6cmV0dXJuIHAuZGVmYXVsdFRhZ3MuU0VRO2Nhc2UgcC5UeXBlLlBMQUlOOnJldHVybiBzP3AuZGVmYXVsdFRhZ3MuU1RSOm51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19ZnVuY3Rpb24gJHModCxlLG4pe2xldHt0YWdzOnJ9PXQuc2NoZW1hLHM9W107Zm9yKGxldCBvIG9mIHIpaWYoby50YWc9PT1uKWlmKG8udGVzdClzLnB1c2gobyk7ZWxzZXtsZXQgYT1vLnJlc29sdmUodCxlKTtyZXR1cm4gYSBpbnN0YW5jZW9mIGo/YTpuZXcgUChhKX1sZXQgaT1Lbih0LGUpO3JldHVybiB0eXBlb2YgaT09XCJzdHJpbmdcIiYmcy5sZW5ndGg+MD9xbihpLHMsci5zY2FsYXJGYWxsYmFjayk6bnVsbH1mdW5jdGlvbiBWbyh7dHlwZTp0fSl7c3dpdGNoKHQpe2Nhc2UgcC5UeXBlLkZMT1dfTUFQOmNhc2UgcC5UeXBlLk1BUDpyZXR1cm4gcC5kZWZhdWx0VGFncy5NQVA7Y2FzZSBwLlR5cGUuRkxPV19TRVE6Y2FzZSBwLlR5cGUuU0VROnJldHVybiBwLmRlZmF1bHRUYWdzLlNFUTtkZWZhdWx0OnJldHVybiBwLmRlZmF1bHRUYWdzLlNUUn19ZnVuY3Rpb24gV28odCxlLG4pe3RyeXtsZXQgcj0kcyh0LGUsbik7aWYocilyZXR1cm4gbiYmZS50YWcmJihyLnRhZz1uKSxyfWNhdGNoKHIpe3JldHVybiByLnNvdXJjZXx8KHIuc291cmNlPWUpLHQuZXJyb3JzLnB1c2gociksbnVsbH10cnl7bGV0IHI9Vm8oZSk7aWYoIXIpdGhyb3cgbmV3IEVycm9yKGBUaGUgdGFnICR7bn0gaXMgdW5hdmFpbGFibGVgKTtsZXQgcz1gVGhlIHRhZyAke259IGlzIHVuYXZhaWxhYmxlLCBmYWxsaW5nIGJhY2sgdG8gJHtyfWA7dC53YXJuaW5ncy5wdXNoKG5ldyBwLllBTUxXYXJuaW5nKGUscykpO2xldCBpPSRzKHQsZSxyKTtyZXR1cm4gaS50YWc9bixpfWNhdGNoKHIpe2xldCBzPW5ldyBwLllBTUxSZWZlcmVuY2VFcnJvcihlLHIubWVzc2FnZSk7cmV0dXJuIHMuc3RhY2s9ci5zdGFjayx0LmVycm9ycy5wdXNoKHMpLG51bGx9fXZhciBqbz10PT57aWYoIXQpcmV0dXJuITE7bGV0e3R5cGU6ZX09dDtyZXR1cm4gZT09PXAuVHlwZS5NQVBfS0VZfHxlPT09cC5UeXBlLk1BUF9WQUxVRXx8ZT09PXAuVHlwZS5TRVFfSVRFTX07ZnVuY3Rpb24gUW8odCxlKXtsZXQgbj17YmVmb3JlOltdLGFmdGVyOltdfSxyPSExLHM9ITEsaT1qbyhlLmNvbnRleHQucGFyZW50KT9lLmNvbnRleHQucGFyZW50LnByb3BzLmNvbmNhdChlLnByb3BzKTplLnByb3BzO2ZvcihsZXR7c3RhcnQ6byxlbmQ6YX1vZiBpKXN3aXRjaChlLmNvbnRleHQuc3JjW29dKXtjYXNlIHAuQ2hhci5DT01NRU5UOntpZighZS5jb21tZW50SGFzUmVxdWlyZWRXaGl0ZXNwYWNlKG8pKXtsZXQgbT1cIkNvbW1lbnRzIG11c3QgYmUgc2VwYXJhdGVkIGZyb20gb3RoZXIgdG9rZW5zIGJ5IHdoaXRlIHNwYWNlIGNoYXJhY3RlcnNcIjt0LnB1c2gobmV3IHAuWUFNTFNlbWFudGljRXJyb3IoZSxtKSl9bGV0e2hlYWRlcjpjLHZhbHVlUmFuZ2U6bH09ZTsobCYmKG8+bC5zdGFydHx8YyYmbz5jLnN0YXJ0KT9uLmFmdGVyOm4uYmVmb3JlKS5wdXNoKGUuY29udGV4dC5zcmMuc2xpY2UobysxLGEpKTticmVha31jYXNlIHAuQ2hhci5BTkNIT1I6aWYocil7bGV0IGM9XCJBIG5vZGUgY2FuIGhhdmUgYXQgbW9zdCBvbmUgYW5jaG9yXCI7dC5wdXNoKG5ldyBwLllBTUxTZW1hbnRpY0Vycm9yKGUsYykpfXI9ITA7YnJlYWs7Y2FzZSBwLkNoYXIuVEFHOmlmKHMpe2xldCBjPVwiQSBub2RlIGNhbiBoYXZlIGF0IG1vc3Qgb25lIHRhZ1wiO3QucHVzaChuZXcgcC5ZQU1MU2VtYW50aWNFcnJvcihlLGMpKX1zPSEwO2JyZWFrfXJldHVybntjb21tZW50czpuLGhhc0FuY2hvcjpyLGhhc1RhZzpzfX1mdW5jdGlvbiBKbyh0LGUpe2xldHthbmNob3JzOm4sZXJyb3JzOnIsc2NoZW1hOnN9PXQ7aWYoZS50eXBlPT09cC5UeXBlLkFMSUFTKXtsZXQgbz1lLnJhd1ZhbHVlLGE9bi5nZXROb2RlKG8pO2lmKCFhKXtsZXQgbD1gQWxpYXNlZCBhbmNob3Igbm90IGZvdW5kOiAke299YDtyZXR1cm4gci5wdXNoKG5ldyBwLllBTUxSZWZlcmVuY2VFcnJvcihlLGwpKSxudWxsfWxldCBjPW5ldyBiZShhKTtyZXR1cm4gbi5fY3N0QWxpYXNlcy5wdXNoKGMpLGN9bGV0IGk9S28odCxlKTtpZihpKXJldHVybiBXbyh0LGUsaSk7aWYoZS50eXBlIT09cC5UeXBlLlBMQUlOKXtsZXQgbz1gRmFpbGVkIHRvIHJlc29sdmUgJHtlLnR5cGV9IG5vZGUgaGVyZWA7cmV0dXJuIHIucHVzaChuZXcgcC5ZQU1MU3ludGF4RXJyb3IoZSxvKSksbnVsbH10cnl7bGV0IG89S24odCxlKTtyZXR1cm4gcW4obyxzLnRhZ3Mscy50YWdzLnNjYWxhckZhbGxiYWNrKX1jYXRjaChvKXtyZXR1cm4gby5zb3VyY2V8fChvLnNvdXJjZT1lKSxyLnB1c2gobyksbnVsbH19ZnVuY3Rpb24gbWUodCxlKXtpZighZSlyZXR1cm4gbnVsbDtlLmVycm9yJiZ0LmVycm9ycy5wdXNoKGUuZXJyb3IpO2xldHtjb21tZW50czpuLGhhc0FuY2hvcjpyLGhhc1RhZzpzfT1Rbyh0LmVycm9ycyxlKTtpZihyKXtsZXR7YW5jaG9yczpvfT10LGE9ZS5hbmNob3IsYz1vLmdldE5vZGUoYSk7YyYmKG8ubWFwW28ubmV3TmFtZShhKV09Yyksby5tYXBbYV09ZX1pZihlLnR5cGU9PT1wLlR5cGUuQUxJQVMmJihyfHxzKSl7bGV0IG89XCJBbiBhbGlhcyBub2RlIG11c3Qgbm90IHNwZWNpZnkgYW55IHByb3BlcnRpZXNcIjt0LmVycm9ycy5wdXNoKG5ldyBwLllBTUxTZW1hbnRpY0Vycm9yKGUsbykpfWxldCBpPUpvKHQsZSk7aWYoaSl7aS5yYW5nZT1bZS5yYW5nZS5zdGFydCxlLnJhbmdlLmVuZF0sdC5vcHRpb25zLmtlZXBDc3ROb2RlcyYmKGkuY3N0Tm9kZT1lKSx0Lm9wdGlvbnMua2VlcE5vZGVUeXBlcyYmKGkudHlwZT1lLnR5cGUpO2xldCBvPW4uYmVmb3JlLmpvaW4oYFxuYCk7byYmKGkuY29tbWVudEJlZm9yZT1pLmNvbW1lbnRCZWZvcmU/YCR7aS5jb21tZW50QmVmb3JlfVxuJHtvfWA6byk7bGV0IGE9bi5hZnRlci5qb2luKGBcbmApO2EmJihpLmNvbW1lbnQ9aS5jb21tZW50P2Ake2kuY29tbWVudH1cbiR7YX1gOmEpfXJldHVybiBlLnJlc29sdmVkPWl9ZnVuY3Rpb24gR28odCxlKXtpZihlLnR5cGUhPT1wLlR5cGUuTUFQJiZlLnR5cGUhPT1wLlR5cGUuRkxPV19NQVApe2xldCBvPWBBICR7ZS50eXBlfSBub2RlIGNhbm5vdCBiZSByZXNvbHZlZCBhcyBhIG1hcHBpbmdgO3JldHVybiB0LmVycm9ycy5wdXNoKG5ldyBwLllBTUxTeW50YXhFcnJvcihlLG8pKSxudWxsfWxldHtjb21tZW50czpuLGl0ZW1zOnJ9PWUudHlwZT09PXAuVHlwZS5GTE9XX01BUD9abyh0LGUpOnpvKHQsZSkscz1uZXcgbXQ7cy5pdGVtcz1yLGpzKHMsbik7bGV0IGk9ITE7Zm9yKGxldCBvPTA7bzxyLmxlbmd0aDsrK28pe2xldHtrZXk6YX09cltvXTtpZihhIGluc3RhbmNlb2YgaiYmKGk9ITApLHQuc2NoZW1hLm1lcmdlJiZhJiZhLnZhbHVlPT09RnMpe3Jbb109bmV3IEt0KHJbb10pO2xldCBjPXJbb10udmFsdWUuaXRlbXMsbD1udWxsO2Muc29tZShmPT57aWYoZiBpbnN0YW5jZW9mIGJlKXtsZXR7dHlwZTptfT1mLnNvdXJjZTtyZXR1cm4gbT09PXAuVHlwZS5NQVB8fG09PT1wLlR5cGUuRkxPV19NQVA/ITE6bD1cIk1lcmdlIG5vZGVzIGFsaWFzZXMgY2FuIG9ubHkgcG9pbnQgdG8gbWFwc1wifXJldHVybiBsPVwiTWVyZ2Ugbm9kZXMgY2FuIG9ubHkgaGF2ZSBBbGlhcyBub2RlcyBhcyB2YWx1ZXNcIn0pLGwmJnQuZXJyb3JzLnB1c2gobmV3IHAuWUFNTFNlbWFudGljRXJyb3IoZSxsKSl9ZWxzZSBmb3IobGV0IGM9bysxO2M8ci5sZW5ndGg7KytjKXtsZXR7a2V5Omx9PXJbY107aWYoYT09PWx8fGEmJmwmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLFwidmFsdWVcIikmJmEudmFsdWU9PT1sLnZhbHVlKXtsZXQgZj1gTWFwIGtleXMgbXVzdCBiZSB1bmlxdWU7IFwiJHthfVwiIGlzIHJlcGVhdGVkYDt0LmVycm9ycy5wdXNoKG5ldyBwLllBTUxTZW1hbnRpY0Vycm9yKGUsZikpO2JyZWFrfX19aWYoaSYmIXQub3B0aW9ucy5tYXBBc01hcCl7bGV0IG89XCJLZXlzIHdpdGggY29sbGVjdGlvbiB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZCBhcyBZQU1MIGR1ZSB0byBKUyBPYmplY3QgcmVzdHJpY3Rpb25zLiBVc2UgbWFwQXNNYXA6IHRydWUgdG8gYXZvaWQgdGhpcy5cIjt0Lndhcm5pbmdzLnB1c2gobmV3IHAuWUFNTFdhcm5pbmcoZSxvKSl9cmV0dXJuIGUucmVzb2x2ZWQ9cyxzfXZhciBIbz0oe2NvbnRleHQ6e2xpbmVTdGFydDp0LG5vZGU6ZSxzcmM6bn0scHJvcHM6cn0pPT57aWYoci5sZW5ndGg9PT0wKXJldHVybiExO2xldHtzdGFydDpzfT1yWzBdO2lmKGUmJnM+ZS52YWx1ZVJhbmdlLnN0YXJ0fHxuW3NdIT09cC5DaGFyLkNPTU1FTlQpcmV0dXJuITE7Zm9yKGxldCBpPXQ7aTxzOysraSlpZihuW2ldPT09YFxuYClyZXR1cm4hMTtyZXR1cm4hMH07ZnVuY3Rpb24gWG8odCxlKXtpZighSG8odCkpcmV0dXJuO2xldCBuPXQuZ2V0UHJvcFZhbHVlKDAscC5DaGFyLkNPTU1FTlQsITApLHI9ITEscz1lLnZhbHVlLmNvbW1lbnRCZWZvcmU7aWYocyYmcy5zdGFydHNXaXRoKG4pKWUudmFsdWUuY29tbWVudEJlZm9yZT1zLnN1YnN0cihuLmxlbmd0aCsxKSxyPSEwO2Vsc2V7bGV0IGk9ZS52YWx1ZS5jb21tZW50OyF0Lm5vZGUmJmkmJmkuc3RhcnRzV2l0aChuKSYmKGUudmFsdWUuY29tbWVudD1pLnN1YnN0cihuLmxlbmd0aCsxKSxyPSEwKX1yJiYoZS5jb21tZW50PW4pfWZ1bmN0aW9uIHpvKHQsZSl7bGV0IG49W10scj1bXSxzLGk9bnVsbDtmb3IobGV0IG89MDtvPGUuaXRlbXMubGVuZ3RoOysrbyl7bGV0IGE9ZS5pdGVtc1tvXTtzd2l0Y2goYS50eXBlKXtjYXNlIHAuVHlwZS5CTEFOS19MSU5FOm4ucHVzaCh7YWZ0ZXJLZXk6ISFzLGJlZm9yZTpyLmxlbmd0aH0pO2JyZWFrO2Nhc2UgcC5UeXBlLkNPTU1FTlQ6bi5wdXNoKHthZnRlcktleTohIXMsYmVmb3JlOnIubGVuZ3RoLGNvbW1lbnQ6YS5jb21tZW50fSk7YnJlYWs7Y2FzZSBwLlR5cGUuTUFQX0tFWTpzIT09dm9pZCAwJiZyLnB1c2gobmV3IFQocykpLGEuZXJyb3ImJnQuZXJyb3JzLnB1c2goYS5lcnJvcikscz1tZSh0LGEubm9kZSksaT1udWxsO2JyZWFrO2Nhc2UgcC5UeXBlLk1BUF9WQUxVRTp7aWYocz09PXZvaWQgMCYmKHM9bnVsbCksYS5lcnJvciYmdC5lcnJvcnMucHVzaChhLmVycm9yKSwhYS5jb250ZXh0LmF0TGluZVN0YXJ0JiZhLm5vZGUmJmEubm9kZS50eXBlPT09cC5UeXBlLk1BUCYmIWEubm9kZS5jb250ZXh0LmF0TGluZVN0YXJ0KXtsZXQgZj1cIk5lc3RlZCBtYXBwaW5ncyBhcmUgbm90IGFsbG93ZWQgaW4gY29tcGFjdCBtYXBwaW5nc1wiO3QuZXJyb3JzLnB1c2gobmV3IHAuWUFNTFNlbWFudGljRXJyb3IoYS5ub2RlLGYpKX1sZXQgYz1hLm5vZGU7aWYoIWMmJmEucHJvcHMubGVuZ3RoPjApe2M9bmV3IHAuUGxhaW5WYWx1ZShwLlR5cGUuUExBSU4sW10pLGMuY29udGV4dD17cGFyZW50OmEsc3JjOmEuY29udGV4dC5zcmN9O2xldCBmPWEucmFuZ2Uuc3RhcnQrMTtpZihjLnJhbmdlPXtzdGFydDpmLGVuZDpmfSxjLnZhbHVlUmFuZ2U9e3N0YXJ0OmYsZW5kOmZ9LHR5cGVvZiBhLnJhbmdlLm9yaWdTdGFydD09XCJudW1iZXJcIil7bGV0IG09YS5yYW5nZS5vcmlnU3RhcnQrMTtjLnJhbmdlLm9yaWdTdGFydD1jLnJhbmdlLm9yaWdFbmQ9bSxjLnZhbHVlUmFuZ2Uub3JpZ1N0YXJ0PWMudmFsdWVSYW5nZS5vcmlnRW5kPW19fWxldCBsPW5ldyBUKHMsbWUodCxjKSk7WG8oYSxsKSxyLnB1c2gobCkscyYmdHlwZW9mIGk9PVwibnVtYmVyXCImJmEucmFuZ2Uuc3RhcnQ+aSsxMDI0JiZ0LmVycm9ycy5wdXNoKFdzKGUscykpLHM9dm9pZCAwLGk9bnVsbH1icmVhaztkZWZhdWx0OnMhPT12b2lkIDAmJnIucHVzaChuZXcgVChzKSkscz1tZSh0LGEpLGk9YS5yYW5nZS5zdGFydCxhLmVycm9yJiZ0LmVycm9ycy5wdXNoKGEuZXJyb3IpO2U6Zm9yKGxldCBjPW8rMTs7KytjKXtsZXQgbD1lLml0ZW1zW2NdO3N3aXRjaChsJiZsLnR5cGUpe2Nhc2UgcC5UeXBlLkJMQU5LX0xJTkU6Y2FzZSBwLlR5cGUuQ09NTUVOVDpjb250aW51ZSBlO2Nhc2UgcC5UeXBlLk1BUF9WQUxVRTpicmVhayBlO2RlZmF1bHQ6e2xldCBmPVwiSW1wbGljaXQgbWFwIGtleXMgbmVlZCB0byBiZSBmb2xsb3dlZCBieSBtYXAgdmFsdWVzXCI7dC5lcnJvcnMucHVzaChuZXcgcC5ZQU1MU2VtYW50aWNFcnJvcihhLGYpKTticmVhayBlfX19aWYoYS52YWx1ZVJhbmdlQ29udGFpbnNOZXdsaW5lKXtsZXQgYz1cIkltcGxpY2l0IG1hcCBrZXlzIG5lZWQgdG8gYmUgb24gYSBzaW5nbGUgbGluZVwiO3QuZXJyb3JzLnB1c2gobmV3IHAuWUFNTFNlbWFudGljRXJyb3IoYSxjKSl9fX1yZXR1cm4gcyE9PXZvaWQgMCYmci5wdXNoKG5ldyBUKHMpKSx7Y29tbWVudHM6bixpdGVtczpyfX1mdW5jdGlvbiBabyh0LGUpe2xldCBuPVtdLHI9W10scyxpPSExLG89XCJ7XCI7Zm9yKGxldCBhPTA7YTxlLml0ZW1zLmxlbmd0aDsrK2Epe2xldCBjPWUuaXRlbXNbYV07aWYodHlwZW9mIGMuY2hhcj09XCJzdHJpbmdcIil7bGV0e2NoYXI6bCxvZmZzZXQ6Zn09YztpZihsPT09XCI/XCImJnM9PT12b2lkIDAmJiFpKXtpPSEwLG89XCI6XCI7Y29udGludWV9aWYobD09PVwiOlwiKXtpZihzPT09dm9pZCAwJiYocz1udWxsKSxvPT09XCI6XCIpe289XCIsXCI7Y29udGludWV9fWVsc2UgaWYoaSYmKHM9PT12b2lkIDAmJmwhPT1cIixcIiYmKHM9bnVsbCksaT0hMSkscyE9PXZvaWQgMCYmKHIucHVzaChuZXcgVChzKSkscz12b2lkIDAsbD09PVwiLFwiKSl7bz1cIjpcIjtjb250aW51ZX1pZihsPT09XCJ9XCIpe2lmKGE9PT1lLml0ZW1zLmxlbmd0aC0xKWNvbnRpbnVlfWVsc2UgaWYobD09PW8pe289XCI6XCI7Y29udGludWV9bGV0IG09YEZsb3cgbWFwIGNvbnRhaW5zIGFuIHVuZXhwZWN0ZWQgJHtsfWAsZD1uZXcgcC5ZQU1MU3ludGF4RXJyb3IoZSxtKTtkLm9mZnNldD1mLHQuZXJyb3JzLnB1c2goZCl9ZWxzZSBjLnR5cGU9PT1wLlR5cGUuQkxBTktfTElORT9uLnB1c2goe2FmdGVyS2V5OiEhcyxiZWZvcmU6ci5sZW5ndGh9KTpjLnR5cGU9PT1wLlR5cGUuQ09NTUVOVD8oVnModC5lcnJvcnMsYyksbi5wdXNoKHthZnRlcktleTohIXMsYmVmb3JlOnIubGVuZ3RoLGNvbW1lbnQ6Yy5jb21tZW50fSkpOnM9PT12b2lkIDA/KG89PT1cIixcIiYmdC5lcnJvcnMucHVzaChuZXcgcC5ZQU1MU2VtYW50aWNFcnJvcihjLFwiU2VwYXJhdG9yICwgbWlzc2luZyBpbiBmbG93IG1hcFwiKSkscz1tZSh0LGMpKToobyE9PVwiLFwiJiZ0LmVycm9ycy5wdXNoKG5ldyBwLllBTUxTZW1hbnRpY0Vycm9yKGMsXCJJbmRpY2F0b3IgOiBtaXNzaW5nIGluIGZsb3cgbWFwIGVudHJ5XCIpKSxyLnB1c2gobmV3IFQocyxtZSh0LGMpKSkscz12b2lkIDAsaT0hMSl9cmV0dXJuIEtzKHQuZXJyb3JzLGUpLHMhPT12b2lkIDAmJnIucHVzaChuZXcgVChzKSkse2NvbW1lbnRzOm4saXRlbXM6cn19ZnVuY3Rpb24gZWEodCxlKXtpZihlLnR5cGUhPT1wLlR5cGUuU0VRJiZlLnR5cGUhPT1wLlR5cGUuRkxPV19TRVEpe2xldCBpPWBBICR7ZS50eXBlfSBub2RlIGNhbm5vdCBiZSByZXNvbHZlZCBhcyBhIHNlcXVlbmNlYDtyZXR1cm4gdC5lcnJvcnMucHVzaChuZXcgcC5ZQU1MU3ludGF4RXJyb3IoZSxpKSksbnVsbH1sZXR7Y29tbWVudHM6bixpdGVtczpyfT1lLnR5cGU9PT1wLlR5cGUuRkxPV19TRVE/bmEodCxlKTp0YSh0LGUpLHM9bmV3IHBlO2lmKHMuaXRlbXM9cixqcyhzLG4pLCF0Lm9wdGlvbnMubWFwQXNNYXAmJnIuc29tZShpPT5pIGluc3RhbmNlb2YgVCYmaS5rZXkgaW5zdGFuY2VvZiBqKSl7bGV0IGk9XCJLZXlzIHdpdGggY29sbGVjdGlvbiB2YWx1ZXMgd2lsbCBiZSBzdHJpbmdpZmllZCBhcyBZQU1MIGR1ZSB0byBKUyBPYmplY3QgcmVzdHJpY3Rpb25zLiBVc2UgbWFwQXNNYXA6IHRydWUgdG8gYXZvaWQgdGhpcy5cIjt0Lndhcm5pbmdzLnB1c2gobmV3IHAuWUFNTFdhcm5pbmcoZSxpKSl9cmV0dXJuIGUucmVzb2x2ZWQ9cyxzfWZ1bmN0aW9uIHRhKHQsZSl7bGV0IG49W10scj1bXTtmb3IobGV0IHM9MDtzPGUuaXRlbXMubGVuZ3RoOysrcyl7bGV0IGk9ZS5pdGVtc1tzXTtzd2l0Y2goaS50eXBlKXtjYXNlIHAuVHlwZS5CTEFOS19MSU5FOm4ucHVzaCh7YmVmb3JlOnIubGVuZ3RofSk7YnJlYWs7Y2FzZSBwLlR5cGUuQ09NTUVOVDpuLnB1c2goe2NvbW1lbnQ6aS5jb21tZW50LGJlZm9yZTpyLmxlbmd0aH0pO2JyZWFrO2Nhc2UgcC5UeXBlLlNFUV9JVEVNOmlmKGkuZXJyb3ImJnQuZXJyb3JzLnB1c2goaS5lcnJvciksci5wdXNoKG1lKHQsaS5ub2RlKSksaS5oYXNQcm9wcyl7bGV0IG89XCJTZXF1ZW5jZSBpdGVtcyBjYW5ub3QgaGF2ZSB0YWdzIG9yIGFuY2hvcnMgYmVmb3JlIHRoZSAtIGluZGljYXRvclwiO3QuZXJyb3JzLnB1c2gobmV3IHAuWUFNTFNlbWFudGljRXJyb3IoaSxvKSl9YnJlYWs7ZGVmYXVsdDppLmVycm9yJiZ0LmVycm9ycy5wdXNoKGkuZXJyb3IpLHQuZXJyb3JzLnB1c2gobmV3IHAuWUFNTFN5bnRheEVycm9yKGksYFVuZXhwZWN0ZWQgJHtpLnR5cGV9IG5vZGUgaW4gc2VxdWVuY2VgKSl9fXJldHVybntjb21tZW50czpuLGl0ZW1zOnJ9fWZ1bmN0aW9uIG5hKHQsZSl7bGV0IG49W10scj1bXSxzPSExLGksbz1udWxsLGE9XCJbXCIsYz1udWxsO2ZvcihsZXQgbD0wO2w8ZS5pdGVtcy5sZW5ndGg7KytsKXtsZXQgZj1lLml0ZW1zW2xdO2lmKHR5cGVvZiBmLmNoYXI9PVwic3RyaW5nXCIpe2xldHtjaGFyOm0sb2Zmc2V0OmR9PWY7aWYobSE9PVwiOlwiJiYoc3x8aSE9PXZvaWQgMCkmJihzJiZpPT09dm9pZCAwJiYoaT1hP3IucG9wKCk6bnVsbCksci5wdXNoKG5ldyBUKGkpKSxzPSExLGk9dm9pZCAwLG89bnVsbCksbT09PWEpYT1udWxsO2Vsc2UgaWYoIWEmJm09PT1cIj9cIilzPSEwO2Vsc2UgaWYoYSE9PVwiW1wiJiZtPT09XCI6XCImJmk9PT12b2lkIDApe2lmKGE9PT1cIixcIil7aWYoaT1yLnBvcCgpLGkgaW5zdGFuY2VvZiBUKXtsZXQgeT1cIkNoYWluaW5nIGZsb3cgc2VxdWVuY2UgcGFpcnMgaXMgaW52YWxpZFwiLGg9bmV3IHAuWUFNTFNlbWFudGljRXJyb3IoZSx5KTtoLm9mZnNldD1kLHQuZXJyb3JzLnB1c2goaCl9aWYoIXMmJnR5cGVvZiBvPT1cIm51bWJlclwiKXtsZXQgeT1mLnJhbmdlP2YucmFuZ2Uuc3RhcnQ6Zi5vZmZzZXQ7eT5vKzEwMjQmJnQuZXJyb3JzLnB1c2goV3MoZSxpKSk7bGV0e3NyYzpofT1jLmNvbnRleHQ7Zm9yKGxldCBnPW87Zzx5OysrZylpZihoW2ddPT09YFxuYCl7bGV0IHc9XCJJbXBsaWNpdCBrZXlzIG9mIGZsb3cgc2VxdWVuY2UgcGFpcnMgbmVlZCB0byBiZSBvbiBhIHNpbmdsZSBsaW5lXCI7dC5lcnJvcnMucHVzaChuZXcgcC5ZQU1MU2VtYW50aWNFcnJvcihjLHcpKTticmVha319fWVsc2UgaT1udWxsO289bnVsbCxzPSExLGE9bnVsbH1lbHNlIGlmKGE9PT1cIltcInx8bSE9PVwiXVwifHxsPGUuaXRlbXMubGVuZ3RoLTEpe2xldCB5PWBGbG93IHNlcXVlbmNlIGNvbnRhaW5zIGFuIHVuZXhwZWN0ZWQgJHttfWAsaD1uZXcgcC5ZQU1MU3ludGF4RXJyb3IoZSx5KTtoLm9mZnNldD1kLHQuZXJyb3JzLnB1c2goaCl9fWVsc2UgaWYoZi50eXBlPT09cC5UeXBlLkJMQU5LX0xJTkUpbi5wdXNoKHtiZWZvcmU6ci5sZW5ndGh9KTtlbHNlIGlmKGYudHlwZT09PXAuVHlwZS5DT01NRU5UKVZzKHQuZXJyb3JzLGYpLG4ucHVzaCh7Y29tbWVudDpmLmNvbW1lbnQsYmVmb3JlOnIubGVuZ3RofSk7ZWxzZXtpZihhKXtsZXQgZD1gRXhwZWN0ZWQgYSAke2F9IGluIGZsb3cgc2VxdWVuY2VgO3QuZXJyb3JzLnB1c2gobmV3IHAuWUFNTFNlbWFudGljRXJyb3IoZixkKSl9bGV0IG09bWUodCxmKTtpPT09dm9pZCAwPyhyLnB1c2gobSksYz1mKTooci5wdXNoKG5ldyBUKGksbSkpLGk9dm9pZCAwKSxvPWYucmFuZ2Uuc3RhcnQsYT1cIixcIn19cmV0dXJuIEtzKHQuZXJyb3JzLGUpLGkhPT12b2lkIDAmJnIucHVzaChuZXcgVChpKSkse2NvbW1lbnRzOm4saXRlbXM6cn19ay5BbGlhcz1iZTtrLkNvbGxlY3Rpb249ajtrLk1lcmdlPUt0O2suTm9kZT1XO2suUGFpcj1UO2suU2NhbGFyPVA7ay5ZQU1MTWFwPW10O2suWUFNTFNlcT1wZTtrLmFkZENvbW1lbnQ9RmU7ay5iaW5hcnlPcHRpb25zPXhvO2suYm9vbE9wdGlvbnM9Um87ay5maW5kUGFpcj1wdDtrLmludE9wdGlvbnM9RG87ay5pc0VtcHR5UGF0aD1CcztrLm51bGxPcHRpb25zPVlvO2sucmVzb2x2ZU1hcD1HbztrLnJlc29sdmVOb2RlPW1lO2sucmVzb2x2ZVNlcT1lYTtrLnJlc29sdmVTdHJpbmc9S247ay5zdHJPcHRpb25zPU5lO2suc3RyaW5naWZ5TnVtYmVyPXFvO2suc3RyaW5naWZ5U3RyaW5nPUZvO2sudG9KU09OPXVlfSk7dmFyIFFuPXRlKHo9PntcInVzZSBzdHJpY3RcIjt2YXIgUT1sZSgpLE89cWUoKSxyYT17aWRlbnRpZnk6dD0+dCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXksZGVmYXVsdDohMSx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpiaW5hcnlcIixyZXNvbHZlOih0LGUpPT57bGV0IG49Ty5yZXNvbHZlU3RyaW5nKHQsZSk7aWYodHlwZW9mIEJ1ZmZlcj09XCJmdW5jdGlvblwiKXJldHVybiBCdWZmZXIuZnJvbShuLFwiYmFzZTY0XCIpO2lmKHR5cGVvZiBhdG9iPT1cImZ1bmN0aW9uXCIpe2xldCByPWF0b2Iobi5yZXBsYWNlKC9bXFxuXFxyXS9nLFwiXCIpKSxzPW5ldyBVaW50OEFycmF5KHIubGVuZ3RoKTtmb3IobGV0IGk9MDtpPHIubGVuZ3RoOysraSlzW2ldPXIuY2hhckNvZGVBdChpKTtyZXR1cm4gc31lbHNle2xldCByPVwiVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IHJlYWRpbmcgYmluYXJ5IHRhZ3M7IGVpdGhlciBCdWZmZXIgb3IgYXRvYiBpcyByZXF1aXJlZFwiO3JldHVybiB0LmVycm9ycy5wdXNoKG5ldyBRLllBTUxSZWZlcmVuY2VFcnJvcihlLHIpKSxudWxsfX0sb3B0aW9uczpPLmJpbmFyeU9wdGlvbnMsc3RyaW5naWZ5Oih7Y29tbWVudDp0LHR5cGU6ZSx2YWx1ZTpufSxyLHMsaSk9PntsZXQgbztpZih0eXBlb2YgQnVmZmVyPT1cImZ1bmN0aW9uXCIpbz1uIGluc3RhbmNlb2YgQnVmZmVyP24udG9TdHJpbmcoXCJiYXNlNjRcIik6QnVmZmVyLmZyb20obi5idWZmZXIpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO2Vsc2UgaWYodHlwZW9mIGJ0b2E9PVwiZnVuY3Rpb25cIil7bGV0IGE9XCJcIjtmb3IobGV0IGM9MDtjPG4ubGVuZ3RoOysrYylhKz1TdHJpbmcuZnJvbUNoYXJDb2RlKG5bY10pO289YnRvYShhKX1lbHNlIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCB3cml0aW5nIGJpbmFyeSB0YWdzOyBlaXRoZXIgQnVmZmVyIG9yIGJ0b2EgaXMgcmVxdWlyZWRcIik7aWYoZXx8KGU9Ty5iaW5hcnlPcHRpb25zLmRlZmF1bHRUeXBlKSxlPT09US5UeXBlLlFVT1RFX0RPVUJMRSluPW87ZWxzZXtsZXR7bGluZVdpZHRoOmF9PU8uYmluYXJ5T3B0aW9ucyxjPU1hdGguY2VpbChvLmxlbmd0aC9hKSxsPW5ldyBBcnJheShjKTtmb3IobGV0IGY9MCxtPTA7ZjxjOysrZixtKz1hKWxbZl09by5zdWJzdHIobSxhKTtuPWwuam9pbihlPT09US5UeXBlLkJMT0NLX0xJVEVSQUw/YFxuYDpcIiBcIil9cmV0dXJuIE8uc3RyaW5naWZ5U3RyaW5nKHtjb21tZW50OnQsdHlwZTplLHZhbHVlOm59LHIscyxpKX19O2Z1bmN0aW9uIEpzKHQsZSl7bGV0IG49Ty5yZXNvbHZlU2VxKHQsZSk7Zm9yKGxldCByPTA7cjxuLml0ZW1zLmxlbmd0aDsrK3Ipe2xldCBzPW4uaXRlbXNbcl07aWYoIShzIGluc3RhbmNlb2YgTy5QYWlyKSl7aWYocyBpbnN0YW5jZW9mIE8uWUFNTE1hcCl7aWYocy5pdGVtcy5sZW5ndGg+MSl7bGV0IG89XCJFYWNoIHBhaXIgbXVzdCBoYXZlIGl0cyBvd24gc2VxdWVuY2UgaW5kaWNhdG9yXCI7dGhyb3cgbmV3IFEuWUFNTFNlbWFudGljRXJyb3IoZSxvKX1sZXQgaT1zLml0ZW1zWzBdfHxuZXcgTy5QYWlyO3MuY29tbWVudEJlZm9yZSYmKGkuY29tbWVudEJlZm9yZT1pLmNvbW1lbnRCZWZvcmU/YCR7cy5jb21tZW50QmVmb3JlfVxuJHtpLmNvbW1lbnRCZWZvcmV9YDpzLmNvbW1lbnRCZWZvcmUpLHMuY29tbWVudCYmKGkuY29tbWVudD1pLmNvbW1lbnQ/YCR7cy5jb21tZW50fVxuJHtpLmNvbW1lbnR9YDpzLmNvbW1lbnQpLHM9aX1uLml0ZW1zW3JdPXMgaW5zdGFuY2VvZiBPLlBhaXI/czpuZXcgTy5QYWlyKHMpfX1yZXR1cm4gbn1mdW5jdGlvbiBHcyh0LGUsbil7bGV0IHI9bmV3IE8uWUFNTFNlcSh0KTtyLnRhZz1cInRhZzp5YW1sLm9yZywyMDAyOnBhaXJzXCI7Zm9yKGxldCBzIG9mIGUpe2xldCBpLG87aWYoQXJyYXkuaXNBcnJheShzKSlpZihzLmxlbmd0aD09PTIpaT1zWzBdLG89c1sxXTtlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIFtrZXksIHZhbHVlXSB0dXBsZTogJHtzfWApO2Vsc2UgaWYocyYmcyBpbnN0YW5jZW9mIE9iamVjdCl7bGV0IGM9T2JqZWN0LmtleXMocyk7aWYoYy5sZW5ndGg9PT0xKWk9Y1swXSxvPXNbaV07ZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCB7IGtleTogdmFsdWUgfSB0dXBsZTogJHtzfWApfWVsc2UgaT1zO2xldCBhPXQuY3JlYXRlUGFpcihpLG8sbik7ci5pdGVtcy5wdXNoKGEpfXJldHVybiByfXZhciBzYT17ZGVmYXVsdDohMSx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpwYWlyc1wiLHJlc29sdmU6SnMsY3JlYXRlTm9kZTpHc30sVWU9Y2xhc3MgdCBleHRlbmRzIE8uWUFNTFNlcXtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksUS5fZGVmaW5lUHJvcGVydHkodGhpcyxcImFkZFwiLE8uWUFNTE1hcC5wcm90b3R5cGUuYWRkLmJpbmQodGhpcykpLFEuX2RlZmluZVByb3BlcnR5KHRoaXMsXCJkZWxldGVcIixPLllBTUxNYXAucHJvdG90eXBlLmRlbGV0ZS5iaW5kKHRoaXMpKSxRLl9kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiZ2V0XCIsTy5ZQU1MTWFwLnByb3RvdHlwZS5nZXQuYmluZCh0aGlzKSksUS5fZGVmaW5lUHJvcGVydHkodGhpcyxcImhhc1wiLE8uWUFNTE1hcC5wcm90b3R5cGUuaGFzLmJpbmQodGhpcykpLFEuX2RlZmluZVByb3BlcnR5KHRoaXMsXCJzZXRcIixPLllBTUxNYXAucHJvdG90eXBlLnNldC5iaW5kKHRoaXMpKSx0aGlzLnRhZz10LnRhZ310b0pTT04oZSxuKXtsZXQgcj1uZXcgTWFwO24mJm4ub25DcmVhdGUmJm4ub25DcmVhdGUocik7Zm9yKGxldCBzIG9mIHRoaXMuaXRlbXMpe2xldCBpLG87aWYocyBpbnN0YW5jZW9mIE8uUGFpcj8oaT1PLnRvSlNPTihzLmtleSxcIlwiLG4pLG89Ty50b0pTT04ocy52YWx1ZSxpLG4pKTppPU8udG9KU09OKHMsXCJcIixuKSxyLmhhcyhpKSl0aHJvdyBuZXcgRXJyb3IoXCJPcmRlcmVkIG1hcHMgbXVzdCBub3QgaW5jbHVkZSBkdXBsaWNhdGUga2V5c1wiKTtyLnNldChpLG8pfXJldHVybiByfX07US5fZGVmaW5lUHJvcGVydHkoVWUsXCJ0YWdcIixcInRhZzp5YW1sLm9yZywyMDAyOm9tYXBcIik7ZnVuY3Rpb24gaWEodCxlKXtsZXQgbj1Kcyh0LGUpLHI9W107Zm9yKGxldHtrZXk6c31vZiBuLml0ZW1zKWlmKHMgaW5zdGFuY2VvZiBPLlNjYWxhcilpZihyLmluY2x1ZGVzKHMudmFsdWUpKXtsZXQgaT1cIk9yZGVyZWQgbWFwcyBtdXN0IG5vdCBpbmNsdWRlIGR1cGxpY2F0ZSBrZXlzXCI7dGhyb3cgbmV3IFEuWUFNTFNlbWFudGljRXJyb3IoZSxpKX1lbHNlIHIucHVzaChzLnZhbHVlKTtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgVWUsbil9ZnVuY3Rpb24gb2EodCxlLG4pe2xldCByPUdzKHQsZSxuKSxzPW5ldyBVZTtyZXR1cm4gcy5pdGVtcz1yLml0ZW1zLHN9dmFyIGFhPXtpZGVudGlmeTp0PT50IGluc3RhbmNlb2YgTWFwLG5vZGVDbGFzczpVZSxkZWZhdWx0OiExLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOm9tYXBcIixyZXNvbHZlOmlhLGNyZWF0ZU5vZGU6b2F9LEtlPWNsYXNzIHQgZXh0ZW5kcyBPLllBTUxNYXB7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMudGFnPXQudGFnfWFkZChlKXtsZXQgbj1lIGluc3RhbmNlb2YgTy5QYWlyP2U6bmV3IE8uUGFpcihlKTtPLmZpbmRQYWlyKHRoaXMuaXRlbXMsbi5rZXkpfHx0aGlzLml0ZW1zLnB1c2gobil9Z2V0KGUsbil7bGV0IHI9Ty5maW5kUGFpcih0aGlzLml0ZW1zLGUpO3JldHVybiFuJiZyIGluc3RhbmNlb2YgTy5QYWlyP3Iua2V5IGluc3RhbmNlb2YgTy5TY2FsYXI/ci5rZXkudmFsdWU6ci5rZXk6cn1zZXQoZSxuKXtpZih0eXBlb2YgbiE9XCJib29sZWFuXCIpdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBib29sZWFuIHZhbHVlIGZvciBzZXQoa2V5LCB2YWx1ZSkgaW4gYSBZQU1MIHNldCwgbm90ICR7dHlwZW9mIG59YCk7bGV0IHI9Ty5maW5kUGFpcih0aGlzLml0ZW1zLGUpO3ImJiFuP3RoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihyKSwxKTohciYmbiYmdGhpcy5pdGVtcy5wdXNoKG5ldyBPLlBhaXIoZSkpfXRvSlNPTihlLG4pe3JldHVybiBzdXBlci50b0pTT04oZSxuLFNldCl9dG9TdHJpbmcoZSxuLHIpe2lmKCFlKXJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtpZih0aGlzLmhhc0FsbE51bGxWYWx1ZXMoKSlyZXR1cm4gc3VwZXIudG9TdHJpbmcoZSxuLHIpO3Rocm93IG5ldyBFcnJvcihcIlNldCBpdGVtcyBtdXN0IGFsbCBoYXZlIG51bGwgdmFsdWVzXCIpfX07US5fZGVmaW5lUHJvcGVydHkoS2UsXCJ0YWdcIixcInRhZzp5YW1sLm9yZywyMDAyOnNldFwiKTtmdW5jdGlvbiBjYSh0LGUpe2xldCBuPU8ucmVzb2x2ZU1hcCh0LGUpO2lmKCFuLmhhc0FsbE51bGxWYWx1ZXMoKSl0aHJvdyBuZXcgUS5ZQU1MU2VtYW50aWNFcnJvcihlLFwiU2V0IGl0ZW1zIG11c3QgYWxsIGhhdmUgbnVsbCB2YWx1ZXNcIik7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEtlLG4pfWZ1bmN0aW9uIGxhKHQsZSxuKXtsZXQgcj1uZXcgS2U7Zm9yKGxldCBzIG9mIGUpci5pdGVtcy5wdXNoKHQuY3JlYXRlUGFpcihzLG51bGwsbikpO3JldHVybiByfXZhciBmYT17aWRlbnRpZnk6dD0+dCBpbnN0YW5jZW9mIFNldCxub2RlQ2xhc3M6S2UsZGVmYXVsdDohMSx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpzZXRcIixyZXNvbHZlOmNhLGNyZWF0ZU5vZGU6bGF9LFZuPSh0LGUpPT57bGV0IG49ZS5zcGxpdChcIjpcIikucmVkdWNlKChyLHMpPT5yKjYwK051bWJlcihzKSwwKTtyZXR1cm4gdD09PVwiLVwiPy1uOm59LEhzPSh7dmFsdWU6dH0pPT57aWYoaXNOYU4odCl8fCFpc0Zpbml0ZSh0KSlyZXR1cm4gTy5zdHJpbmdpZnlOdW1iZXIodCk7bGV0IGU9XCJcIjt0PDAmJihlPVwiLVwiLHQ9TWF0aC5hYnModCkpO2xldCBuPVt0JTYwXTtyZXR1cm4gdDw2MD9uLnVuc2hpZnQoMCk6KHQ9TWF0aC5yb3VuZCgodC1uWzBdKS82MCksbi51bnNoaWZ0KHQlNjApLHQ+PTYwJiYodD1NYXRoLnJvdW5kKCh0LW5bMF0pLzYwKSxuLnVuc2hpZnQodCkpKSxlK24ubWFwKHI9PnI8MTA/XCIwXCIrU3RyaW5nKHIpOlN0cmluZyhyKSkuam9pbihcIjpcIikucmVwbGFjZSgvMDAwMDAwXFxkKiQvLFwiXCIpfSx1YT17aWRlbnRpZnk6dD0+dHlwZW9mIHQ9PVwibnVtYmVyXCIsZGVmYXVsdDohMCx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjppbnRcIixmb3JtYXQ6XCJUSU1FXCIsdGVzdDovXihbLStdPykoWzAtOV1bMC05X10qKD86OlswLTVdP1swLTldKSspJC8scmVzb2x2ZToodCxlLG4pPT5WbihlLG4ucmVwbGFjZSgvXy9nLFwiXCIpKSxzdHJpbmdpZnk6SHN9LHBhPXtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJudW1iZXJcIixkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmZsb2F0XCIsZm9ybWF0OlwiVElNRVwiLHRlc3Q6L14oWy0rXT8pKFswLTldWzAtOV9dKig/OjpbMC01XT9bMC05XSkrXFwuWzAtOV9dKikkLyxyZXNvbHZlOih0LGUsbik9PlZuKGUsbi5yZXBsYWNlKC9fL2csXCJcIikpLHN0cmluZ2lmeTpIc30sbWE9e2lkZW50aWZ5OnQ9PnQgaW5zdGFuY2VvZiBEYXRlLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6dGltZXN0YW1wXCIsdGVzdDpSZWdFeHAoXCJeKD86KFswLTldezR9KS0oWzAtOV17MSwyfSktKFswLTldezEsMn0pKD86KD86dHxUfFsgXFxcXHRdKykoWzAtOV17MSwyfSk6KFswLTldezEsMn0pOihbMC05XXsxLDJ9KFxcXFwuWzAtOV0rKT8pKD86WyBcXFxcdF0qKFp8Wy0rXVswMTJdP1swLTldKD86OlswLTldezJ9KT8pKT8pPykkXCIpLHJlc29sdmU6KHQsZSxuLHIscyxpLG8sYSxjKT0+e2EmJihhPShhK1wiMDBcIikuc3Vic3RyKDEsMykpO2xldCBsPURhdGUuVVRDKGUsbi0xLHIsc3x8MCxpfHwwLG98fDAsYXx8MCk7aWYoYyYmYyE9PVwiWlwiKXtsZXQgZj1WbihjWzBdLGMuc2xpY2UoMSkpO01hdGguYWJzKGYpPDMwJiYoZio9NjApLGwtPTZlNCpmfXJldHVybiBuZXcgRGF0ZShsKX0sc3RyaW5naWZ5Oih7dmFsdWU6dH0pPT50LnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvKChUMDA6MDApPzowMCk/XFwuMDAwWiQvLFwiXCIpfTtmdW5jdGlvbiBXbih0KXtsZXQgZT17fTtyZXR1cm4gdD90eXBlb2YgWUFNTF9TSUxFTkNFX0RFUFJFQ0FUSU9OX1dBUk5JTkdTPFwidVwiPyFZQU1MX1NJTEVOQ0VfREVQUkVDQVRJT05fV0FSTklOR1M6IWUuWUFNTF9TSUxFTkNFX0RFUFJFQ0FUSU9OX1dBUk5JTkdTOnR5cGVvZiBZQU1MX1NJTEVOQ0VfV0FSTklOR1M8XCJ1XCI/IVlBTUxfU0lMRU5DRV9XQVJOSU5HUzohZS5ZQU1MX1NJTEVOQ0VfV0FSTklOR1N9ZnVuY3Rpb24gam4odCxlKXtXbighMSkmJmNvbnNvbGUud2FybihlP2Ake2V9OiAke3R9YDp0KX1mdW5jdGlvbiBoYSh0KXtpZihXbighMCkpe2xldCBlPXQucmVwbGFjZSgvLip5YW1sWy9cXFxcXS9pLFwiXCIpLnJlcGxhY2UoL1xcLmpzJC8sXCJcIikucmVwbGFjZSgvXFxcXC9nLFwiL1wiKTtqbihgVGhlIGVuZHBvaW50ICd5YW1sLyR7ZX0nIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLmAsXCJEZXByZWNhdGlvbldhcm5pbmdcIil9fXZhciBRcz17fTtmdW5jdGlvbiBnYSh0LGUpe2lmKCFRc1t0XSYmV24oITApKXtRc1t0XT0hMDtsZXQgbj1gVGhlIG9wdGlvbiAnJHt0fScgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2VgO24rPWU/YCwgdXNlICcke2V9JyBpbnN0ZWFkLmA6XCIuXCIsam4obixcIkRlcHJlY2F0aW9uV2FybmluZ1wiKX19ei5iaW5hcnk9cmE7ei5mbG9hdFRpbWU9cGE7ei5pbnRUaW1lPXVhO3oub21hcD1hYTt6LnBhaXJzPXNhO3ouc2V0PWZhO3oudGltZXN0YW1wPW1hO3oud2Fybj1qbjt6Lndhcm5GaWxlRGVwcmVjYXRpb249aGE7ei53YXJuT3B0aW9uRGVwcmVjYXRpb249Z2F9KTt2YXIgWG49dGUobGk9PntcInVzZSBzdHJpY3RcIjt2YXIgSnQ9bGUoKSxFPXFlKCksRD1RbigpO2Z1bmN0aW9uIGRhKHQsZSxuKXtsZXQgcj1uZXcgRS5ZQU1MTWFwKHQpO2lmKGUgaW5zdGFuY2VvZiBNYXApZm9yKGxldFtzLGldb2YgZSlyLml0ZW1zLnB1c2godC5jcmVhdGVQYWlyKHMsaSxuKSk7ZWxzZSBpZihlJiZ0eXBlb2YgZT09XCJvYmplY3RcIilmb3IobGV0IHMgb2YgT2JqZWN0LmtleXMoZSkpci5pdGVtcy5wdXNoKHQuY3JlYXRlUGFpcihzLGVbc10sbikpO3JldHVybiB0eXBlb2YgdC5zb3J0TWFwRW50cmllcz09XCJmdW5jdGlvblwiJiZyLml0ZW1zLnNvcnQodC5zb3J0TWFwRW50cmllcykscn12YXIgZ3Q9e2NyZWF0ZU5vZGU6ZGEsZGVmYXVsdDohMCxub2RlQ2xhc3M6RS5ZQU1MTWFwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOm1hcFwiLHJlc29sdmU6RS5yZXNvbHZlTWFwfTtmdW5jdGlvbiB5YSh0LGUsbil7bGV0IHI9bmV3IEUuWUFNTFNlcSh0KTtpZihlJiZlW1N5bWJvbC5pdGVyYXRvcl0pZm9yKGxldCBzIG9mIGUpe2xldCBpPXQuY3JlYXRlTm9kZShzLG4ud3JhcFNjYWxhcnMsbnVsbCxuKTtyLml0ZW1zLnB1c2goaSl9cmV0dXJuIHJ9dmFyIEd0PXtjcmVhdGVOb2RlOnlhLGRlZmF1bHQ6ITAsbm9kZUNsYXNzOkUuWUFNTFNlcSx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpzZXFcIixyZXNvbHZlOkUucmVzb2x2ZVNlcX0sRWE9e2lkZW50aWZ5OnQ9PnR5cGVvZiB0PT1cInN0cmluZ1wiLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6c3RyXCIscmVzb2x2ZTpFLnJlc29sdmVTdHJpbmcsc3RyaW5naWZ5KHQsZSxuLHIpe3JldHVybiBlPU9iamVjdC5hc3NpZ24oe2FjdHVhbFN0cmluZzohMH0sZSksRS5zdHJpbmdpZnlTdHJpbmcodCxlLG4scil9LG9wdGlvbnM6RS5zdHJPcHRpb25zfSxHbj1bZ3QsR3QsRWFdLEh0PXQ9PnR5cGVvZiB0PT1cImJpZ2ludFwifHxOdW1iZXIuaXNJbnRlZ2VyKHQpLEhuPSh0LGUsbik9PkUuaW50T3B0aW9ucy5hc0JpZ0ludD9CaWdJbnQodCk6cGFyc2VJbnQoZSxuKTtmdW5jdGlvbiBacyh0LGUsbil7bGV0e3ZhbHVlOnJ9PXQ7cmV0dXJuIEh0KHIpJiZyPj0wP24rci50b1N0cmluZyhlKTpFLnN0cmluZ2lmeU51bWJlcih0KX12YXIgZWk9e2lkZW50aWZ5OnQ9PnQ9PW51bGwsY3JlYXRlTm9kZToodCxlLG4pPT5uLndyYXBTY2FsYXJzP25ldyBFLlNjYWxhcihudWxsKTpudWxsLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6bnVsbFwiLHRlc3Q6L14oPzp+fFtObl11bGx8TlVMTCk/JC8scmVzb2x2ZTooKT0+bnVsbCxvcHRpb25zOkUubnVsbE9wdGlvbnMsc3RyaW5naWZ5OigpPT5FLm51bGxPcHRpb25zLm51bGxTdHJ9LHRpPXtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJib29sZWFuXCIsZGVmYXVsdDohMCx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpib29sXCIsdGVzdDovXig/OltUdF1ydWV8VFJVRXxbRmZdYWxzZXxGQUxTRSkkLyxyZXNvbHZlOnQ9PnRbMF09PT1cInRcInx8dFswXT09PVwiVFwiLG9wdGlvbnM6RS5ib29sT3B0aW9ucyxzdHJpbmdpZnk6KHt2YWx1ZTp0fSk9PnQ/RS5ib29sT3B0aW9ucy50cnVlU3RyOkUuYm9vbE9wdGlvbnMuZmFsc2VTdHJ9LG5pPXtpZGVudGlmeTp0PT5IdCh0KSYmdD49MCxkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmludFwiLGZvcm1hdDpcIk9DVFwiLHRlc3Q6L14wbyhbMC03XSspJC8scmVzb2x2ZToodCxlKT0+SG4odCxlLDgpLG9wdGlvbnM6RS5pbnRPcHRpb25zLHN0cmluZ2lmeTp0PT5acyh0LDgsXCIwb1wiKX0scmk9e2lkZW50aWZ5Okh0LGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6aW50XCIsdGVzdDovXlstK10/WzAtOV0rJC8scmVzb2x2ZTp0PT5Ibih0LHQsMTApLG9wdGlvbnM6RS5pbnRPcHRpb25zLHN0cmluZ2lmeTpFLnN0cmluZ2lmeU51bWJlcn0sc2k9e2lkZW50aWZ5OnQ9Pkh0KHQpJiZ0Pj0wLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6aW50XCIsZm9ybWF0OlwiSEVYXCIsdGVzdDovXjB4KFswLTlhLWZBLUZdKykkLyxyZXNvbHZlOih0LGUpPT5Ibih0LGUsMTYpLG9wdGlvbnM6RS5pbnRPcHRpb25zLHN0cmluZ2lmeTp0PT5acyh0LDE2LFwiMHhcIil9LGlpPXtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJudW1iZXJcIixkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmZsb2F0XCIsdGVzdDovXig/OlstK10/XFwuaW5mfChcXC5uYW4pKSQvaSxyZXNvbHZlOih0LGUpPT5lP05hTjp0WzBdPT09XCItXCI/TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZOk51bWJlci5QT1NJVElWRV9JTkZJTklUWSxzdHJpbmdpZnk6RS5zdHJpbmdpZnlOdW1iZXJ9LG9pPXtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJudW1iZXJcIixkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmZsb2F0XCIsZm9ybWF0OlwiRVhQXCIsdGVzdDovXlstK10/KD86XFwuWzAtOV0rfFswLTldKyg/OlxcLlswLTldKik/KVtlRV1bLStdP1swLTldKyQvLHJlc29sdmU6dD0+cGFyc2VGbG9hdCh0KSxzdHJpbmdpZnk6KHt2YWx1ZTp0fSk9Pk51bWJlcih0KS50b0V4cG9uZW50aWFsKCl9LGFpPXtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJudW1iZXJcIixkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmZsb2F0XCIsdGVzdDovXlstK10/KD86XFwuKFswLTldKyl8WzAtOV0rXFwuKFswLTldKikpJC8scmVzb2x2ZSh0LGUsbil7bGV0IHI9ZXx8bixzPW5ldyBFLlNjYWxhcihwYXJzZUZsb2F0KHQpKTtyZXR1cm4gciYmcltyLmxlbmd0aC0xXT09PVwiMFwiJiYocy5taW5GcmFjdGlvbkRpZ2l0cz1yLmxlbmd0aCksc30sc3RyaW5naWZ5OkUuc3RyaW5naWZ5TnVtYmVyfSxTYT1Hbi5jb25jYXQoW2VpLHRpLG5pLHJpLHNpLGlpLG9pLGFpXSksWHM9dD0+dHlwZW9mIHQ9PVwiYmlnaW50XCJ8fE51bWJlci5pc0ludGVnZXIodCksanQ9KHt2YWx1ZTp0fSk9PkpTT04uc3RyaW5naWZ5KHQpLGNpPVtndCxHdCx7aWRlbnRpZnk6dD0+dHlwZW9mIHQ9PVwic3RyaW5nXCIsZGVmYXVsdDohMCx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpzdHJcIixyZXNvbHZlOkUucmVzb2x2ZVN0cmluZyxzdHJpbmdpZnk6anR9LHtpZGVudGlmeTp0PT50PT1udWxsLGNyZWF0ZU5vZGU6KHQsZSxuKT0+bi53cmFwU2NhbGFycz9uZXcgRS5TY2FsYXIobnVsbCk6bnVsbCxkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOm51bGxcIix0ZXN0Oi9ebnVsbCQvLHJlc29sdmU6KCk9Pm51bGwsc3RyaW5naWZ5Omp0fSx7aWRlbnRpZnk6dD0+dHlwZW9mIHQ9PVwiYm9vbGVhblwiLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6Ym9vbFwiLHRlc3Q6L150cnVlfGZhbHNlJC8scmVzb2x2ZTp0PT50PT09XCJ0cnVlXCIsc3RyaW5naWZ5Omp0fSx7aWRlbnRpZnk6WHMsZGVmYXVsdDohMCx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjppbnRcIix0ZXN0Oi9eLT8oPzowfFsxLTldWzAtOV0qKSQvLHJlc29sdmU6dD0+RS5pbnRPcHRpb25zLmFzQmlnSW50P0JpZ0ludCh0KTpwYXJzZUludCh0LDEwKSxzdHJpbmdpZnk6KHt2YWx1ZTp0fSk9PlhzKHQpP3QudG9TdHJpbmcoKTpKU09OLnN0cmluZ2lmeSh0KX0se2lkZW50aWZ5OnQ9PnR5cGVvZiB0PT1cIm51bWJlclwiLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6ZmxvYXRcIix0ZXN0Oi9eLT8oPzowfFsxLTldWzAtOV0qKSg/OlxcLlswLTldKik/KD86W2VFXVstK10/WzAtOV0rKT8kLyxyZXNvbHZlOnQ9PnBhcnNlRmxvYXQodCksc3RyaW5naWZ5Omp0fV07Y2kuc2NhbGFyRmFsbGJhY2s9dD0+e3Rocm93IG5ldyBTeW50YXhFcnJvcihgVW5yZXNvbHZlZCBwbGFpbiBzY2FsYXIgJHtKU09OLnN0cmluZ2lmeSh0KX1gKX07dmFyIHpzPSh7dmFsdWU6dH0pPT50P0UuYm9vbE9wdGlvbnMudHJ1ZVN0cjpFLmJvb2xPcHRpb25zLmZhbHNlU3RyLGh0PXQ9PnR5cGVvZiB0PT1cImJpZ2ludFwifHxOdW1iZXIuaXNJbnRlZ2VyKHQpO2Z1bmN0aW9uIFF0KHQsZSxuKXtsZXQgcj1lLnJlcGxhY2UoL18vZyxcIlwiKTtpZihFLmludE9wdGlvbnMuYXNCaWdJbnQpe3N3aXRjaChuKXtjYXNlIDI6cj1gMGIke3J9YDticmVhaztjYXNlIDg6cj1gMG8ke3J9YDticmVhaztjYXNlIDE2OnI9YDB4JHtyfWA7YnJlYWt9bGV0IGk9QmlnSW50KHIpO3JldHVybiB0PT09XCItXCI/QmlnSW50KC0xKSppOml9bGV0IHM9cGFyc2VJbnQocixuKTtyZXR1cm4gdD09PVwiLVwiPy0xKnM6c31mdW5jdGlvbiBKbih0LGUsbil7bGV0e3ZhbHVlOnJ9PXQ7aWYoaHQocikpe2xldCBzPXIudG9TdHJpbmcoZSk7cmV0dXJuIHI8MD9cIi1cIituK3Muc3Vic3RyKDEpOm4rc31yZXR1cm4gRS5zdHJpbmdpZnlOdW1iZXIodCl9dmFyIHdhPUduLmNvbmNhdChbe2lkZW50aWZ5OnQ9PnQ9PW51bGwsY3JlYXRlTm9kZToodCxlLG4pPT5uLndyYXBTY2FsYXJzP25ldyBFLlNjYWxhcihudWxsKTpudWxsLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6bnVsbFwiLHRlc3Q6L14oPzp+fFtObl11bGx8TlVMTCk/JC8scmVzb2x2ZTooKT0+bnVsbCxvcHRpb25zOkUubnVsbE9wdGlvbnMsc3RyaW5naWZ5OigpPT5FLm51bGxPcHRpb25zLm51bGxTdHJ9LHtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJib29sZWFuXCIsZGVmYXVsdDohMCx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpib29sXCIsdGVzdDovXig/Oll8eXxbWXldZXN8WUVTfFtUdF1ydWV8VFJVRXxbT29dbnxPTikkLyxyZXNvbHZlOigpPT4hMCxvcHRpb25zOkUuYm9vbE9wdGlvbnMsc3RyaW5naWZ5OnpzfSx7aWRlbnRpZnk6dD0+dHlwZW9mIHQ9PVwiYm9vbGVhblwiLGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6Ym9vbFwiLHRlc3Q6L14oPzpOfG58W05uXW98Tk98W0ZmXWFsc2V8RkFMU0V8W09vXWZmfE9GRikkL2kscmVzb2x2ZTooKT0+ITEsb3B0aW9uczpFLmJvb2xPcHRpb25zLHN0cmluZ2lmeTp6c30se2lkZW50aWZ5Omh0LGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6aW50XCIsZm9ybWF0OlwiQklOXCIsdGVzdDovXihbLStdPykwYihbMC0xX10rKSQvLHJlc29sdmU6KHQsZSxuKT0+UXQoZSxuLDIpLHN0cmluZ2lmeTp0PT5Kbih0LDIsXCIwYlwiKX0se2lkZW50aWZ5Omh0LGRlZmF1bHQ6ITAsdGFnOlwidGFnOnlhbWwub3JnLDIwMDI6aW50XCIsZm9ybWF0OlwiT0NUXCIsdGVzdDovXihbLStdPykwKFswLTdfXSspJC8scmVzb2x2ZToodCxlLG4pPT5RdChlLG4sOCksc3RyaW5naWZ5OnQ9PkpuKHQsOCxcIjBcIil9LHtpZGVudGlmeTpodCxkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmludFwiLHRlc3Q6L14oWy0rXT8pKFswLTldWzAtOV9dKikkLyxyZXNvbHZlOih0LGUsbik9PlF0KGUsbiwxMCksc3RyaW5naWZ5OkUuc3RyaW5naWZ5TnVtYmVyfSx7aWRlbnRpZnk6aHQsZGVmYXVsdDohMCx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjppbnRcIixmb3JtYXQ6XCJIRVhcIix0ZXN0Oi9eKFstK10/KTB4KFswLTlhLWZBLUZfXSspJC8scmVzb2x2ZToodCxlLG4pPT5RdChlLG4sMTYpLHN0cmluZ2lmeTp0PT5Kbih0LDE2LFwiMHhcIil9LHtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJudW1iZXJcIixkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmZsb2F0XCIsdGVzdDovXig/OlstK10/XFwuaW5mfChcXC5uYW4pKSQvaSxyZXNvbHZlOih0LGUpPT5lP05hTjp0WzBdPT09XCItXCI/TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZOk51bWJlci5QT1NJVElWRV9JTkZJTklUWSxzdHJpbmdpZnk6RS5zdHJpbmdpZnlOdW1iZXJ9LHtpZGVudGlmeTp0PT50eXBlb2YgdD09XCJudW1iZXJcIixkZWZhdWx0OiEwLHRhZzpcInRhZzp5YW1sLm9yZywyMDAyOmZsb2F0XCIsZm9ybWF0OlwiRVhQXCIsdGVzdDovXlstK10/KFswLTldWzAtOV9dKik/KFxcLlswLTlfXSopP1tlRV1bLStdP1swLTldKyQvLHJlc29sdmU6dD0+cGFyc2VGbG9hdCh0LnJlcGxhY2UoL18vZyxcIlwiKSksc3RyaW5naWZ5Oih7dmFsdWU6dH0pPT5OdW1iZXIodCkudG9FeHBvbmVudGlhbCgpfSx7aWRlbnRpZnk6dD0+dHlwZW9mIHQ9PVwibnVtYmVyXCIsZGVmYXVsdDohMCx0YWc6XCJ0YWc6eWFtbC5vcmcsMjAwMjpmbG9hdFwiLHRlc3Q6L15bLStdPyg/OlswLTldWzAtOV9dKik/XFwuKFswLTlfXSopJC8scmVzb2x2ZSh0LGUpe2xldCBuPW5ldyBFLlNjYWxhcihwYXJzZUZsb2F0KHQucmVwbGFjZSgvXy9nLFwiXCIpKSk7aWYoZSl7bGV0IHI9ZS5yZXBsYWNlKC9fL2csXCJcIik7cltyLmxlbmd0aC0xXT09PVwiMFwiJiYobi5taW5GcmFjdGlvbkRpZ2l0cz1yLmxlbmd0aCl9cmV0dXJuIG59LHN0cmluZ2lmeTpFLnN0cmluZ2lmeU51bWJlcn1dLEQuYmluYXJ5LEQub21hcCxELnBhaXJzLEQuc2V0LEQuaW50VGltZSxELmZsb2F0VGltZSxELnRpbWVzdGFtcCksYmE9e2NvcmU6U2EsZmFpbHNhZmU6R24sanNvbjpjaSx5YW1sMTE6d2F9LE5hPXtiaW5hcnk6RC5iaW5hcnksYm9vbDp0aSxmbG9hdDphaSxmbG9hdEV4cDpvaSxmbG9hdE5hTjppaSxmbG9hdFRpbWU6RC5mbG9hdFRpbWUsaW50OnJpLGludEhleDpzaSxpbnRPY3Q6bmksaW50VGltZTpELmludFRpbWUsbWFwOmd0LG51bGw6ZWksb21hcDpELm9tYXAscGFpcnM6RC5wYWlycyxzZXE6R3Qsc2V0OkQuc2V0LHRpbWVzdGFtcDpELnRpbWVzdGFtcH07ZnVuY3Rpb24gT2EodCxlLG4pe2lmKGUpe2xldCByPW4uZmlsdGVyKGk9PmkudGFnPT09ZSkscz1yLmZpbmQoaT0+IWkuZm9ybWF0KXx8clswXTtpZighcyl0aHJvdyBuZXcgRXJyb3IoYFRhZyAke2V9IG5vdCBmb3VuZGApO3JldHVybiBzfXJldHVybiBuLmZpbmQocj0+KHIuaWRlbnRpZnkmJnIuaWRlbnRpZnkodCl8fHIuY2xhc3MmJnQgaW5zdGFuY2VvZiByLmNsYXNzKSYmIXIuZm9ybWF0KX1mdW5jdGlvbiBMYSh0LGUsbil7aWYodCBpbnN0YW5jZW9mIEUuTm9kZSlyZXR1cm4gdDtsZXR7ZGVmYXVsdFByZWZpeDpyLG9uVGFnT2JqOnMscHJldk9iamVjdHM6aSxzY2hlbWE6byx3cmFwU2NhbGFyczphfT1uO2UmJmUuc3RhcnRzV2l0aChcIiEhXCIpJiYoZT1yK2Uuc2xpY2UoMikpO2xldCBjPU9hKHQsZSxvLnRhZ3MpO2lmKCFjKXtpZih0eXBlb2YgdC50b0pTT049PVwiZnVuY3Rpb25cIiYmKHQ9dC50b0pTT04oKSksIXR8fHR5cGVvZiB0IT1cIm9iamVjdFwiKXJldHVybiBhP25ldyBFLlNjYWxhcih0KTp0O2M9dCBpbnN0YW5jZW9mIE1hcD9ndDp0W1N5bWJvbC5pdGVyYXRvcl0/R3Q6Z3R9cyYmKHMoYyksZGVsZXRlIG4ub25UYWdPYmopO2xldCBsPXt2YWx1ZTp2b2lkIDAsbm9kZTp2b2lkIDB9O2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwiJiZpKXtsZXQgZj1pLmdldCh0KTtpZihmKXtsZXQgbT1uZXcgRS5BbGlhcyhmKTtyZXR1cm4gbi5hbGlhc05vZGVzLnB1c2gobSksbX1sLnZhbHVlPXQsaS5zZXQodCxsKX1yZXR1cm4gbC5ub2RlPWMuY3JlYXRlTm9kZT9jLmNyZWF0ZU5vZGUobi5zY2hlbWEsdCxuKTphP25ldyBFLlNjYWxhcih0KTp0LGUmJmwubm9kZSBpbnN0YW5jZW9mIEUuTm9kZSYmKGwubm9kZS50YWc9ZSksbC5ub2RlfWZ1bmN0aW9uIEFhKHQsZSxuLHIpe2xldCBzPXRbci5yZXBsYWNlKC9cXFcvZyxcIlwiKV07aWYoIXMpe2xldCBpPU9iamVjdC5rZXlzKHQpLm1hcChvPT5KU09OLnN0cmluZ2lmeShvKSkuam9pbihcIiwgXCIpO3Rocm93IG5ldyBFcnJvcihgVW5rbm93biBzY2hlbWEgXCIke3J9XCI7IHVzZSBvbmUgb2YgJHtpfWApfWlmKEFycmF5LmlzQXJyYXkobikpZm9yKGxldCBpIG9mIG4pcz1zLmNvbmNhdChpKTtlbHNlIHR5cGVvZiBuPT1cImZ1bmN0aW9uXCImJihzPW4ocy5zbGljZSgpKSk7Zm9yKGxldCBpPTA7aTxzLmxlbmd0aDsrK2kpe2xldCBvPXNbaV07aWYodHlwZW9mIG89PVwic3RyaW5nXCIpe2xldCBhPWVbb107aWYoIWEpe2xldCBjPU9iamVjdC5rZXlzKGUpLm1hcChsPT5KU09OLnN0cmluZ2lmeShsKSkuam9pbihcIiwgXCIpO3Rocm93IG5ldyBFcnJvcihgVW5rbm93biBjdXN0b20gdGFnIFwiJHtvfVwiOyB1c2Ugb25lIG9mICR7Y31gKX1zW2ldPWF9fXJldHVybiBzfXZhciBUYT0odCxlKT0+dC5rZXk8ZS5rZXk/LTE6dC5rZXk+ZS5rZXk/MTowLGR0PWNsYXNzIHR7Y29uc3RydWN0b3Ioe2N1c3RvbVRhZ3M6ZSxtZXJnZTpuLHNjaGVtYTpyLHNvcnRNYXBFbnRyaWVzOnMsdGFnczppfSl7dGhpcy5tZXJnZT0hIW4sdGhpcy5uYW1lPXIsdGhpcy5zb3J0TWFwRW50cmllcz1zPT09ITA/VGE6c3x8bnVsbCwhZSYmaSYmRC53YXJuT3B0aW9uRGVwcmVjYXRpb24oXCJ0YWdzXCIsXCJjdXN0b21UYWdzXCIpLHRoaXMudGFncz1BYShiYSxOYSxlfHxpLHIpfWNyZWF0ZU5vZGUoZSxuLHIscyl7bGV0IGk9e2RlZmF1bHRQcmVmaXg6dC5kZWZhdWx0UHJlZml4LHNjaGVtYTp0aGlzLHdyYXBTY2FsYXJzOm59LG89cz9PYmplY3QuYXNzaWduKHMsaSk6aTtyZXR1cm4gTGEoZSxyLG8pfWNyZWF0ZVBhaXIoZSxuLHIpe3J8fChyPXt3cmFwU2NhbGFyczohMH0pO2xldCBzPXRoaXMuY3JlYXRlTm9kZShlLHIud3JhcFNjYWxhcnMsbnVsbCxyKSxpPXRoaXMuY3JlYXRlTm9kZShuLHIud3JhcFNjYWxhcnMsbnVsbCxyKTtyZXR1cm4gbmV3IEUuUGFpcihzLGkpfX07SnQuX2RlZmluZVByb3BlcnR5KGR0LFwiZGVmYXVsdFByZWZpeFwiLEp0LmRlZmF1bHRUYWdQcmVmaXgpO0p0Ll9kZWZpbmVQcm9wZXJ0eShkdCxcImRlZmF1bHRUYWdzXCIsSnQuZGVmYXVsdFRhZ3MpO2xpLlNjaGVtYT1kdH0pO3ZhciBtaT10ZShlbj0+e1widXNlIHN0cmljdFwiO3ZhciBZPWxlKCksUz1xZSgpLGZpPVhuKCksQ2E9e2FuY2hvclByZWZpeDpcImFcIixjdXN0b21UYWdzOm51bGwsaW5kZW50OjIsaW5kZW50U2VxOiEwLGtlZXBDc3ROb2RlczohMSxrZWVwTm9kZVR5cGVzOiEwLGtlZXBCbG9ic0luSlNPTjohMCxtYXBBc01hcDohMSxtYXhBbGlhc0NvdW50OjEwMCxwcmV0dHlFcnJvcnM6ITEsc2ltcGxlS2V5czohMSx2ZXJzaW9uOlwiMS4yXCJ9LE1hPXtnZXQgYmluYXJ5KCl7cmV0dXJuIFMuYmluYXJ5T3B0aW9uc30sc2V0IGJpbmFyeSh0KXtPYmplY3QuYXNzaWduKFMuYmluYXJ5T3B0aW9ucyx0KX0sZ2V0IGJvb2woKXtyZXR1cm4gUy5ib29sT3B0aW9uc30sc2V0IGJvb2wodCl7T2JqZWN0LmFzc2lnbihTLmJvb2xPcHRpb25zLHQpfSxnZXQgaW50KCl7cmV0dXJuIFMuaW50T3B0aW9uc30sc2V0IGludCh0KXtPYmplY3QuYXNzaWduKFMuaW50T3B0aW9ucyx0KX0sZ2V0IG51bGwoKXtyZXR1cm4gUy5udWxsT3B0aW9uc30sc2V0IG51bGwodCl7T2JqZWN0LmFzc2lnbihTLm51bGxPcHRpb25zLHQpfSxnZXQgc3RyKCl7cmV0dXJuIFMuc3RyT3B0aW9uc30sc2V0IHN0cih0KXtPYmplY3QuYXNzaWduKFMuc3RyT3B0aW9ucyx0KX19LHBpPXtcIjEuMFwiOntzY2hlbWE6XCJ5YW1sLTEuMVwiLG1lcmdlOiEwLHRhZ1ByZWZpeGVzOlt7aGFuZGxlOlwiIVwiLHByZWZpeDpZLmRlZmF1bHRUYWdQcmVmaXh9LHtoYW5kbGU6XCIhIVwiLHByZWZpeDpcInRhZzpwcml2YXRlLnlhbWwub3JnLDIwMDI6XCJ9XX0sMS4xOntzY2hlbWE6XCJ5YW1sLTEuMVwiLG1lcmdlOiEwLHRhZ1ByZWZpeGVzOlt7aGFuZGxlOlwiIVwiLHByZWZpeDpcIiFcIn0se2hhbmRsZTpcIiEhXCIscHJlZml4OlkuZGVmYXVsdFRhZ1ByZWZpeH1dfSwxLjI6e3NjaGVtYTpcImNvcmVcIixtZXJnZTohMSx0YWdQcmVmaXhlczpbe2hhbmRsZTpcIiFcIixwcmVmaXg6XCIhXCJ9LHtoYW5kbGU6XCIhIVwiLHByZWZpeDpZLmRlZmF1bHRUYWdQcmVmaXh9XX19O2Z1bmN0aW9uIHVpKHQsZSl7aWYoKHQudmVyc2lvbnx8dC5vcHRpb25zLnZlcnNpb24pPT09XCIxLjBcIil7bGV0IHM9ZS5tYXRjaCgvXnRhZzpwcml2YXRlXFwueWFtbFxcLm9yZywyMDAyOihbXjovXSspJC8pO2lmKHMpcmV0dXJuXCIhXCIrc1sxXTtsZXQgaT1lLm1hdGNoKC9edGFnOihbYS16QS1aMC05LV0rKVxcLnlhbWxcXC5vcmcsMjAwMjooLiopLyk7cmV0dXJuIGk/YCEke2lbMV19LyR7aVsyXX1gOmAhJHtlLnJlcGxhY2UoL150YWc6LyxcIlwiKX1gfWxldCBuPXQudGFnUHJlZml4ZXMuZmluZChzPT5lLmluZGV4T2Yocy5wcmVmaXgpPT09MCk7aWYoIW4pe2xldCBzPXQuZ2V0RGVmYXVsdHMoKS50YWdQcmVmaXhlcztuPXMmJnMuZmluZChpPT5lLmluZGV4T2YoaS5wcmVmaXgpPT09MCl9aWYoIW4pcmV0dXJuIGVbMF09PT1cIiFcIj9lOmAhPCR7ZX0+YDtsZXQgcj1lLnN1YnN0cihuLnByZWZpeC5sZW5ndGgpLnJlcGxhY2UoL1shLFtcXF17fV0vZyxzPT4oe1wiIVwiOlwiJTIxXCIsXCIsXCI6XCIlMkNcIixcIltcIjpcIiU1QlwiLFwiXVwiOlwiJTVEXCIsXCJ7XCI6XCIlN0JcIixcIn1cIjpcIiU3RFwifSlbc10pO3JldHVybiBuLmhhbmRsZStyfWZ1bmN0aW9uIGthKHQsZSl7aWYoZSBpbnN0YW5jZW9mIFMuQWxpYXMpcmV0dXJuIFMuQWxpYXM7aWYoZS50YWcpe2xldCBzPXQuZmlsdGVyKGk9PmkudGFnPT09ZS50YWcpO2lmKHMubGVuZ3RoPjApcmV0dXJuIHMuZmluZChpPT5pLmZvcm1hdD09PWUuZm9ybWF0KXx8c1swXX1sZXQgbixyO2lmKGUgaW5zdGFuY2VvZiBTLlNjYWxhcil7cj1lLnZhbHVlO2xldCBzPXQuZmlsdGVyKGk9PmkuaWRlbnRpZnkmJmkuaWRlbnRpZnkocil8fGkuY2xhc3MmJnIgaW5zdGFuY2VvZiBpLmNsYXNzKTtuPXMuZmluZChpPT5pLmZvcm1hdD09PWUuZm9ybWF0KXx8cy5maW5kKGk9PiFpLmZvcm1hdCl9ZWxzZSByPWUsbj10LmZpbmQocz0+cy5ub2RlQ2xhc3MmJnIgaW5zdGFuY2VvZiBzLm5vZGVDbGFzcyk7aWYoIW4pe2xldCBzPXImJnIuY29uc3RydWN0b3I/ci5jb25zdHJ1Y3Rvci5uYW1lOnR5cGVvZiByO3Rocm93IG5ldyBFcnJvcihgVGFnIG5vdCByZXNvbHZlZCBmb3IgJHtzfSB2YWx1ZWApfXJldHVybiBufWZ1bmN0aW9uIHZhKHQsZSx7YW5jaG9yczpuLGRvYzpyfSl7bGV0IHM9W10saT1yLmFuY2hvcnMuZ2V0TmFtZSh0KTtyZXR1cm4gaSYmKG5baV09dCxzLnB1c2goYCYke2l9YCkpLHQudGFnP3MucHVzaCh1aShyLHQudGFnKSk6ZS5kZWZhdWx0fHxzLnB1c2godWkocixlLnRhZykpLHMuam9pbihcIiBcIil9ZnVuY3Rpb24gWHQodCxlLG4scil7bGV0e2FuY2hvcnM6cyxzY2hlbWE6aX09ZS5kb2MsbztpZighKHQgaW5zdGFuY2VvZiBTLk5vZGUpKXtsZXQgbD17YWxpYXNOb2RlczpbXSxvblRhZ09iajpmPT5vPWYscHJldk9iamVjdHM6bmV3IE1hcH07dD1pLmNyZWF0ZU5vZGUodCwhMCxudWxsLGwpO2ZvcihsZXQgZiBvZiBsLmFsaWFzTm9kZXMpe2Yuc291cmNlPWYuc291cmNlLm5vZGU7bGV0IG09cy5nZXROYW1lKGYuc291cmNlKTttfHwobT1zLm5ld05hbWUoKSxzLm1hcFttXT1mLnNvdXJjZSl9fWlmKHQgaW5zdGFuY2VvZiBTLlBhaXIpcmV0dXJuIHQudG9TdHJpbmcoZSxuLHIpO298fChvPWthKGkudGFncyx0KSk7bGV0IGE9dmEodCxvLGUpO2EubGVuZ3RoPjAmJihlLmluZGVudEF0U3RhcnQ9KGUuaW5kZW50QXRTdGFydHx8MCkrYS5sZW5ndGgrMSk7bGV0IGM9dHlwZW9mIG8uc3RyaW5naWZ5PT1cImZ1bmN0aW9uXCI/by5zdHJpbmdpZnkodCxlLG4scik6dCBpbnN0YW5jZW9mIFMuU2NhbGFyP1Muc3RyaW5naWZ5U3RyaW5nKHQsZSxuLHIpOnQudG9TdHJpbmcoZSxuLHIpO3JldHVybiBhP3QgaW5zdGFuY2VvZiBTLlNjYWxhcnx8Y1swXT09PVwie1wifHxjWzBdPT09XCJbXCI/YCR7YX0gJHtjfWA6YCR7YX1cbiR7ZS5pbmRlbnR9JHtjfWA6Y312YXIgem49Y2xhc3MgdHtzdGF0aWMgdmFsaWRBbmNob3JOb2RlKGUpe3JldHVybiBlIGluc3RhbmNlb2YgUy5TY2FsYXJ8fGUgaW5zdGFuY2VvZiBTLllBTUxTZXF8fGUgaW5zdGFuY2VvZiBTLllBTUxNYXB9Y29uc3RydWN0b3IoZSl7WS5fZGVmaW5lUHJvcGVydHkodGhpcyxcIm1hcFwiLE9iamVjdC5jcmVhdGUobnVsbCkpLHRoaXMucHJlZml4PWV9Y3JlYXRlQWxpYXMoZSxuKXtyZXR1cm4gdGhpcy5zZXRBbmNob3IoZSxuKSxuZXcgUy5BbGlhcyhlKX1jcmVhdGVNZXJnZVBhaXIoLi4uZSl7bGV0IG49bmV3IFMuTWVyZ2U7cmV0dXJuIG4udmFsdWUuaXRlbXM9ZS5tYXAocj0+e2lmKHIgaW5zdGFuY2VvZiBTLkFsaWFzKXtpZihyLnNvdXJjZSBpbnN0YW5jZW9mIFMuWUFNTE1hcClyZXR1cm4gcn1lbHNlIGlmKHIgaW5zdGFuY2VvZiBTLllBTUxNYXApcmV0dXJuIHRoaXMuY3JlYXRlQWxpYXMocik7dGhyb3cgbmV3IEVycm9yKFwiTWVyZ2Ugc291cmNlcyBtdXN0IGJlIE1hcCBub2RlcyBvciB0aGVpciBBbGlhc2VzXCIpfSksbn1nZXROYW1lKGUpe2xldHttYXA6bn09dGhpcztyZXR1cm4gT2JqZWN0LmtleXMobikuZmluZChyPT5uW3JdPT09ZSl9Z2V0TmFtZXMoKXtyZXR1cm4gT2JqZWN0LmtleXModGhpcy5tYXApfWdldE5vZGUoZSl7cmV0dXJuIHRoaXMubWFwW2VdfW5ld05hbWUoZSl7ZXx8KGU9dGhpcy5wcmVmaXgpO2xldCBuPU9iamVjdC5rZXlzKHRoaXMubWFwKTtmb3IobGV0IHI9MTs7KytyKXtsZXQgcz1gJHtlfSR7cn1gO2lmKCFuLmluY2x1ZGVzKHMpKXJldHVybiBzfX1yZXNvbHZlTm9kZXMoKXtsZXR7bWFwOmUsX2NzdEFsaWFzZXM6bn09dGhpcztPYmplY3Qua2V5cyhlKS5mb3JFYWNoKHI9PntlW3JdPWVbcl0ucmVzb2x2ZWR9KSxuLmZvckVhY2gocj0+e3Iuc291cmNlPXIuc291cmNlLnJlc29sdmVkfSksZGVsZXRlIHRoaXMuX2NzdEFsaWFzZXN9c2V0QW5jaG9yKGUsbil7aWYoZSE9bnVsbCYmIXQudmFsaWRBbmNob3JOb2RlKGUpKXRocm93IG5ldyBFcnJvcihcIkFuY2hvcnMgbWF5IG9ubHkgYmUgc2V0IGZvciBTY2FsYXIsIFNlcSBhbmQgTWFwIG5vZGVzXCIpO2lmKG4mJi9bXFx4MDAtXFx4MTlcXHMsW1xcXXt9XS8udGVzdChuKSl0aHJvdyBuZXcgRXJyb3IoXCJBbmNob3IgbmFtZXMgbXVzdCBub3QgY29udGFpbiB3aGl0ZXNwYWNlIG9yIGNvbnRyb2wgY2hhcmFjdGVyc1wiKTtsZXR7bWFwOnJ9PXRoaXMscz1lJiZPYmplY3Qua2V5cyhyKS5maW5kKGk9PnJbaV09PT1lKTtpZihzKWlmKG4pcyE9PW4mJihkZWxldGUgcltzXSxyW25dPWUpO2Vsc2UgcmV0dXJuIHM7ZWxzZXtpZighbil7aWYoIWUpcmV0dXJuIG51bGw7bj10aGlzLm5ld05hbWUoKX1yW25dPWV9cmV0dXJuIG59fSx6dD0odCxlKT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwiKXtsZXR7dGFnOm59PXQ7dCBpbnN0YW5jZW9mIFMuQ29sbGVjdGlvbj8obiYmKGVbbl09ITApLHQuaXRlbXMuZm9yRWFjaChyPT56dChyLGUpKSk6dCBpbnN0YW5jZW9mIFMuUGFpcj8oenQodC5rZXksZSksenQodC52YWx1ZSxlKSk6dCBpbnN0YW5jZW9mIFMuU2NhbGFyJiZuJiYoZVtuXT0hMCl9cmV0dXJuIGV9LElhPXQ9Pk9iamVjdC5rZXlzKHp0KHQse30pKTtmdW5jdGlvbiBQYSh0LGUpe2xldCBuPXtiZWZvcmU6W10sYWZ0ZXI6W119LHIscz0hMTtmb3IobGV0IGkgb2YgZSlpZihpLnZhbHVlUmFuZ2Upe2lmKHIhPT12b2lkIDApe2xldCBhPVwiRG9jdW1lbnQgY29udGFpbnMgdHJhaWxpbmcgY29udGVudCBub3Qgc2VwYXJhdGVkIGJ5IGEgLi4uIG9yIC0tLSBsaW5lXCI7dC5lcnJvcnMucHVzaChuZXcgWS5ZQU1MU3ludGF4RXJyb3IoaSxhKSk7YnJlYWt9bGV0IG89Uy5yZXNvbHZlTm9kZSh0LGkpO3MmJihvLnNwYWNlQmVmb3JlPSEwLHM9ITEpLHI9b31lbHNlIGkuY29tbWVudCE9PW51bGw/KHI9PT12b2lkIDA/bi5iZWZvcmU6bi5hZnRlcikucHVzaChpLmNvbW1lbnQpOmkudHlwZT09PVkuVHlwZS5CTEFOS19MSU5FJiYocz0hMCxyPT09dm9pZCAwJiZuLmJlZm9yZS5sZW5ndGg+MCYmIXQuY29tbWVudEJlZm9yZSYmKHQuY29tbWVudEJlZm9yZT1uLmJlZm9yZS5qb2luKGBcbmApLG4uYmVmb3JlPVtdKSk7aWYodC5jb250ZW50cz1yfHxudWxsLCFyKXQuY29tbWVudD1uLmJlZm9yZS5jb25jYXQobi5hZnRlcikuam9pbihgXG5gKXx8bnVsbDtlbHNle2xldCBpPW4uYmVmb3JlLmpvaW4oYFxuYCk7aWYoaSl7bGV0IG89ciBpbnN0YW5jZW9mIFMuQ29sbGVjdGlvbiYmci5pdGVtc1swXT9yLml0ZW1zWzBdOnI7by5jb21tZW50QmVmb3JlPW8uY29tbWVudEJlZm9yZT9gJHtpfVxuJHtvLmNvbW1lbnRCZWZvcmV9YDppfXQuY29tbWVudD1uLmFmdGVyLmpvaW4oYFxuYCl8fG51bGx9fWZ1bmN0aW9uIF9hKHt0YWdQcmVmaXhlczp0fSxlKXtsZXRbbixyXT1lLnBhcmFtZXRlcnM7aWYoIW58fCFyKXtsZXQgcz1cIkluc3VmZmljaWVudCBwYXJhbWV0ZXJzIGdpdmVuIGZvciAlVEFHIGRpcmVjdGl2ZVwiO3Rocm93IG5ldyBZLllBTUxTZW1hbnRpY0Vycm9yKGUscyl9aWYodC5zb21lKHM9PnMuaGFuZGxlPT09bikpe2xldCBzPVwiVGhlICVUQUcgZGlyZWN0aXZlIG11c3Qgb25seSBiZSBnaXZlbiBhdCBtb3N0IG9uY2UgcGVyIGhhbmRsZSBpbiB0aGUgc2FtZSBkb2N1bWVudC5cIjt0aHJvdyBuZXcgWS5ZQU1MU2VtYW50aWNFcnJvcihlLHMpfXJldHVybntoYW5kbGU6bixwcmVmaXg6cn19ZnVuY3Rpb24geGEodCxlKXtsZXRbbl09ZS5wYXJhbWV0ZXJzO2lmKGUubmFtZT09PVwiWUFNTDoxLjBcIiYmKG49XCIxLjBcIiksIW4pe2xldCByPVwiSW5zdWZmaWNpZW50IHBhcmFtZXRlcnMgZ2l2ZW4gZm9yICVZQU1MIGRpcmVjdGl2ZVwiO3Rocm93IG5ldyBZLllBTUxTZW1hbnRpY0Vycm9yKGUscil9aWYoIXBpW25dKXtsZXQgcz1gRG9jdW1lbnQgd2lsbCBiZSBwYXJzZWQgYXMgWUFNTCAke3QudmVyc2lvbnx8dC5vcHRpb25zLnZlcnNpb259IHJhdGhlciB0aGFuIFlBTUwgJHtufWA7dC53YXJuaW5ncy5wdXNoKG5ldyBZLllBTUxXYXJuaW5nKGUscykpfXJldHVybiBufWZ1bmN0aW9uIFJhKHQsZSxuKXtsZXQgcj1bXSxzPSExO2ZvcihsZXQgaSBvZiBlKXtsZXR7Y29tbWVudDpvLG5hbWU6YX09aTtzd2l0Y2goYSl7Y2FzZVwiVEFHXCI6dHJ5e3QudGFnUHJlZml4ZXMucHVzaChfYSh0LGkpKX1jYXRjaChjKXt0LmVycm9ycy5wdXNoKGMpfXM9ITA7YnJlYWs7Y2FzZVwiWUFNTFwiOmNhc2VcIllBTUw6MS4wXCI6aWYodC52ZXJzaW9uKXtsZXQgYz1cIlRoZSAlWUFNTCBkaXJlY3RpdmUgbXVzdCBvbmx5IGJlIGdpdmVuIGF0IG1vc3Qgb25jZSBwZXIgZG9jdW1lbnQuXCI7dC5lcnJvcnMucHVzaChuZXcgWS5ZQU1MU2VtYW50aWNFcnJvcihpLGMpKX10cnl7dC52ZXJzaW9uPXhhKHQsaSl9Y2F0Y2goYyl7dC5lcnJvcnMucHVzaChjKX1zPSEwO2JyZWFrO2RlZmF1bHQ6aWYoYSl7bGV0IGM9YFlBTUwgb25seSBzdXBwb3J0cyAlVEFHIGFuZCAlWUFNTCBkaXJlY3RpdmVzLCBhbmQgbm90ICUke2F9YDt0Lndhcm5pbmdzLnB1c2gobmV3IFkuWUFNTFdhcm5pbmcoaSxjKSl9fW8mJnIucHVzaChvKX1pZihuJiYhcyYmKHQudmVyc2lvbnx8bi52ZXJzaW9ufHx0Lm9wdGlvbnMudmVyc2lvbik9PT1cIjEuMVwiKXtsZXQgaT0oe2hhbmRsZTpvLHByZWZpeDphfSk9Pih7aGFuZGxlOm8scHJlZml4OmF9KTt0LnRhZ1ByZWZpeGVzPW4udGFnUHJlZml4ZXMubWFwKGkpLHQudmVyc2lvbj1uLnZlcnNpb259dC5jb21tZW50QmVmb3JlPXIuam9pbihgXG5gKXx8bnVsbH1mdW5jdGlvbiBWZSh0KXtpZih0IGluc3RhbmNlb2YgUy5Db2xsZWN0aW9uKXJldHVybiEwO3Rocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGEgWUFNTCBjb2xsZWN0aW9uIGFzIGRvY3VtZW50IGNvbnRlbnRzXCIpfXZhciBadD1jbGFzcyB0e2NvbnN0cnVjdG9yKGUpe3RoaXMuYW5jaG9ycz1uZXcgem4oZS5hbmNob3JQcmVmaXgpLHRoaXMuY29tbWVudEJlZm9yZT1udWxsLHRoaXMuY29tbWVudD1udWxsLHRoaXMuY29udGVudHM9bnVsbCx0aGlzLmRpcmVjdGl2ZXNFbmRNYXJrZXI9bnVsbCx0aGlzLmVycm9ycz1bXSx0aGlzLm9wdGlvbnM9ZSx0aGlzLnNjaGVtYT1udWxsLHRoaXMudGFnUHJlZml4ZXM9W10sdGhpcy52ZXJzaW9uPW51bGwsdGhpcy53YXJuaW5ncz1bXX1hZGQoZSl7cmV0dXJuIFZlKHRoaXMuY29udGVudHMpLHRoaXMuY29udGVudHMuYWRkKGUpfWFkZEluKGUsbil7VmUodGhpcy5jb250ZW50cyksdGhpcy5jb250ZW50cy5hZGRJbihlLG4pfWRlbGV0ZShlKXtyZXR1cm4gVmUodGhpcy5jb250ZW50cyksdGhpcy5jb250ZW50cy5kZWxldGUoZSl9ZGVsZXRlSW4oZSl7cmV0dXJuIFMuaXNFbXB0eVBhdGgoZSk/dGhpcy5jb250ZW50cz09bnVsbD8hMToodGhpcy5jb250ZW50cz1udWxsLCEwKTooVmUodGhpcy5jb250ZW50cyksdGhpcy5jb250ZW50cy5kZWxldGVJbihlKSl9Z2V0RGVmYXVsdHMoKXtyZXR1cm4gdC5kZWZhdWx0c1t0aGlzLnZlcnNpb25dfHx0LmRlZmF1bHRzW3RoaXMub3B0aW9ucy52ZXJzaW9uXXx8e319Z2V0KGUsbil7cmV0dXJuIHRoaXMuY29udGVudHMgaW5zdGFuY2VvZiBTLkNvbGxlY3Rpb24/dGhpcy5jb250ZW50cy5nZXQoZSxuKTp2b2lkIDB9Z2V0SW4oZSxuKXtyZXR1cm4gUy5pc0VtcHR5UGF0aChlKT8hbiYmdGhpcy5jb250ZW50cyBpbnN0YW5jZW9mIFMuU2NhbGFyP3RoaXMuY29udGVudHMudmFsdWU6dGhpcy5jb250ZW50czp0aGlzLmNvbnRlbnRzIGluc3RhbmNlb2YgUy5Db2xsZWN0aW9uP3RoaXMuY29udGVudHMuZ2V0SW4oZSxuKTp2b2lkIDB9aGFzKGUpe3JldHVybiB0aGlzLmNvbnRlbnRzIGluc3RhbmNlb2YgUy5Db2xsZWN0aW9uP3RoaXMuY29udGVudHMuaGFzKGUpOiExfWhhc0luKGUpe3JldHVybiBTLmlzRW1wdHlQYXRoKGUpP3RoaXMuY29udGVudHMhPT12b2lkIDA6dGhpcy5jb250ZW50cyBpbnN0YW5jZW9mIFMuQ29sbGVjdGlvbj90aGlzLmNvbnRlbnRzLmhhc0luKGUpOiExfXNldChlLG4pe1ZlKHRoaXMuY29udGVudHMpLHRoaXMuY29udGVudHMuc2V0KGUsbil9c2V0SW4oZSxuKXtTLmlzRW1wdHlQYXRoKGUpP3RoaXMuY29udGVudHM9bjooVmUodGhpcy5jb250ZW50cyksdGhpcy5jb250ZW50cy5zZXRJbihlLG4pKX1zZXRTY2hlbWEoZSxuKXtpZighZSYmIW4mJnRoaXMuc2NoZW1hKXJldHVybjt0eXBlb2YgZT09XCJudW1iZXJcIiYmKGU9ZS50b0ZpeGVkKDEpKSxlPT09XCIxLjBcInx8ZT09PVwiMS4xXCJ8fGU9PT1cIjEuMlwiPyh0aGlzLnZlcnNpb24/dGhpcy52ZXJzaW9uPWU6dGhpcy5vcHRpb25zLnZlcnNpb249ZSxkZWxldGUgdGhpcy5vcHRpb25zLnNjaGVtYSk6ZSYmdHlwZW9mIGU9PVwic3RyaW5nXCImJih0aGlzLm9wdGlvbnMuc2NoZW1hPWUpLEFycmF5LmlzQXJyYXkobikmJih0aGlzLm9wdGlvbnMuY3VzdG9tVGFncz1uKTtsZXQgcj1PYmplY3QuYXNzaWduKHt9LHRoaXMuZ2V0RGVmYXVsdHMoKSx0aGlzLm9wdGlvbnMpO3RoaXMuc2NoZW1hPW5ldyBmaS5TY2hlbWEocil9cGFyc2UoZSxuKXt0aGlzLm9wdGlvbnMua2VlcENzdE5vZGVzJiYodGhpcy5jc3ROb2RlPWUpLHRoaXMub3B0aW9ucy5rZWVwTm9kZVR5cGVzJiYodGhpcy50eXBlPVwiRE9DVU1FTlRcIik7bGV0e2RpcmVjdGl2ZXM6cj1bXSxjb250ZW50czpzPVtdLGRpcmVjdGl2ZXNFbmRNYXJrZXI6aSxlcnJvcjpvLHZhbHVlUmFuZ2U6YX09ZTtpZihvJiYoby5zb3VyY2V8fChvLnNvdXJjZT10aGlzKSx0aGlzLmVycm9ycy5wdXNoKG8pKSxSYSh0aGlzLHIsbiksaSYmKHRoaXMuZGlyZWN0aXZlc0VuZE1hcmtlcj0hMCksdGhpcy5yYW5nZT1hP1thLnN0YXJ0LGEuZW5kXTpudWxsLHRoaXMuc2V0U2NoZW1hKCksdGhpcy5hbmNob3JzLl9jc3RBbGlhc2VzPVtdLFBhKHRoaXMscyksdGhpcy5hbmNob3JzLnJlc29sdmVOb2RlcygpLHRoaXMub3B0aW9ucy5wcmV0dHlFcnJvcnMpe2ZvcihsZXQgYyBvZiB0aGlzLmVycm9ycyljIGluc3RhbmNlb2YgWS5ZQU1MRXJyb3ImJmMubWFrZVByZXR0eSgpO2ZvcihsZXQgYyBvZiB0aGlzLndhcm5pbmdzKWMgaW5zdGFuY2VvZiBZLllBTUxFcnJvciYmYy5tYWtlUHJldHR5KCl9cmV0dXJuIHRoaXN9bGlzdE5vbkRlZmF1bHRUYWdzKCl7cmV0dXJuIElhKHRoaXMuY29udGVudHMpLmZpbHRlcihlPT5lLmluZGV4T2YoZmkuU2NoZW1hLmRlZmF1bHRQcmVmaXgpIT09MCl9c2V0VGFnUHJlZml4KGUsbil7aWYoZVswXSE9PVwiIVwifHxlW2UubGVuZ3RoLTFdIT09XCIhXCIpdGhyb3cgbmV3IEVycm9yKFwiSGFuZGxlIG11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoICFcIik7aWYobil7bGV0IHI9dGhpcy50YWdQcmVmaXhlcy5maW5kKHM9PnMuaGFuZGxlPT09ZSk7cj9yLnByZWZpeD1uOnRoaXMudGFnUHJlZml4ZXMucHVzaCh7aGFuZGxlOmUscHJlZml4Om59KX1lbHNlIHRoaXMudGFnUHJlZml4ZXM9dGhpcy50YWdQcmVmaXhlcy5maWx0ZXIocj0+ci5oYW5kbGUhPT1lKX10b0pTT04oZSxuKXtsZXR7a2VlcEJsb2JzSW5KU09OOnIsbWFwQXNNYXA6cyxtYXhBbGlhc0NvdW50Oml9PXRoaXMub3B0aW9ucyxvPXImJih0eXBlb2YgZSE9XCJzdHJpbmdcInx8ISh0aGlzLmNvbnRlbnRzIGluc3RhbmNlb2YgUy5TY2FsYXIpKSxhPXtkb2M6dGhpcyxpbmRlbnRTdGVwOlwiICBcIixrZWVwOm8sbWFwQXNNYXA6byYmISFzLG1heEFsaWFzQ291bnQ6aSxzdHJpbmdpZnk6WHR9LGM9T2JqZWN0LmtleXModGhpcy5hbmNob3JzLm1hcCk7Yy5sZW5ndGg+MCYmKGEuYW5jaG9ycz1uZXcgTWFwKGMubWFwKGY9Plt0aGlzLmFuY2hvcnMubWFwW2ZdLHthbGlhczpbXSxhbGlhc0NvdW50OjAsY291bnQ6MX1dKSkpO2xldCBsPVMudG9KU09OKHRoaXMuY29udGVudHMsZSxhKTtpZih0eXBlb2Ygbj09XCJmdW5jdGlvblwiJiZhLmFuY2hvcnMpZm9yKGxldHtjb3VudDpmLHJlczptfW9mIGEuYW5jaG9ycy52YWx1ZXMoKSluKG0sZik7cmV0dXJuIGx9dG9TdHJpbmcoKXtpZih0aGlzLmVycm9ycy5sZW5ndGg+MCl0aHJvdyBuZXcgRXJyb3IoXCJEb2N1bWVudCB3aXRoIGVycm9ycyBjYW5ub3QgYmUgc3RyaW5naWZpZWRcIik7bGV0IGU9dGhpcy5vcHRpb25zLmluZGVudDtpZighTnVtYmVyLmlzSW50ZWdlcihlKXx8ZTw9MCl7bGV0IGM9SlNPTi5zdHJpbmdpZnkoZSk7dGhyb3cgbmV3IEVycm9yKGBcImluZGVudFwiIG9wdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgbm90ICR7Y31gKX10aGlzLnNldFNjaGVtYSgpO2xldCBuPVtdLHI9ITE7aWYodGhpcy52ZXJzaW9uKXtsZXQgYz1cIiVZQU1MIDEuMlwiO3RoaXMuc2NoZW1hLm5hbWU9PT1cInlhbWwtMS4xXCImJih0aGlzLnZlcnNpb249PT1cIjEuMFwiP2M9XCIlWUFNTDoxLjBcIjp0aGlzLnZlcnNpb249PT1cIjEuMVwiJiYoYz1cIiVZQU1MIDEuMVwiKSksbi5wdXNoKGMpLHI9ITB9bGV0IHM9dGhpcy5saXN0Tm9uRGVmYXVsdFRhZ3MoKTt0aGlzLnRhZ1ByZWZpeGVzLmZvckVhY2goKHtoYW5kbGU6YyxwcmVmaXg6bH0pPT57cy5zb21lKGY9PmYuaW5kZXhPZihsKT09PTApJiYobi5wdXNoKGAlVEFHICR7Y30gJHtsfWApLHI9ITApfSksKHJ8fHRoaXMuZGlyZWN0aXZlc0VuZE1hcmtlcikmJm4ucHVzaChcIi0tLVwiKSx0aGlzLmNvbW1lbnRCZWZvcmUmJigocnx8IXRoaXMuZGlyZWN0aXZlc0VuZE1hcmtlcikmJm4udW5zaGlmdChcIlwiKSxuLnVuc2hpZnQodGhpcy5jb21tZW50QmVmb3JlLnJlcGxhY2UoL14vZ20sXCIjXCIpKSk7bGV0IGk9e2FuY2hvcnM6T2JqZWN0LmNyZWF0ZShudWxsKSxkb2M6dGhpcyxpbmRlbnQ6XCJcIixpbmRlbnRTdGVwOlwiIFwiLnJlcGVhdChlKSxzdHJpbmdpZnk6WHR9LG89ITEsYT1udWxsO2lmKHRoaXMuY29udGVudHMpe3RoaXMuY29udGVudHMgaW5zdGFuY2VvZiBTLk5vZGUmJih0aGlzLmNvbnRlbnRzLnNwYWNlQmVmb3JlJiYocnx8dGhpcy5kaXJlY3RpdmVzRW5kTWFya2VyKSYmbi5wdXNoKFwiXCIpLHRoaXMuY29udGVudHMuY29tbWVudEJlZm9yZSYmbi5wdXNoKHRoaXMuY29udGVudHMuY29tbWVudEJlZm9yZS5yZXBsYWNlKC9eL2dtLFwiI1wiKSksaS5mb3JjZUJsb2NrSW5kZW50PSEhdGhpcy5jb21tZW50LGE9dGhpcy5jb250ZW50cy5jb21tZW50KTtsZXQgYz1hP251bGw6KCk9Pm89ITAsbD1YdCh0aGlzLmNvbnRlbnRzLGksKCk9PmE9bnVsbCxjKTtuLnB1c2goUy5hZGRDb21tZW50KGwsXCJcIixhKSl9ZWxzZSB0aGlzLmNvbnRlbnRzIT09dm9pZCAwJiZuLnB1c2goWHQodGhpcy5jb250ZW50cyxpKSk7cmV0dXJuIHRoaXMuY29tbWVudCYmKCghb3x8YSkmJm5bbi5sZW5ndGgtMV0hPT1cIlwiJiZuLnB1c2goXCJcIiksbi5wdXNoKHRoaXMuY29tbWVudC5yZXBsYWNlKC9eL2dtLFwiI1wiKSkpLG4uam9pbihgXG5gKStgXG5gfX07WS5fZGVmaW5lUHJvcGVydHkoWnQsXCJkZWZhdWx0c1wiLHBpKTtlbi5Eb2N1bWVudD1adDtlbi5kZWZhdWx0T3B0aW9ucz1DYTtlbi5zY2FsYXJPcHRpb25zPU1hfSk7dmFyIGRpPXRlKGdpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIFpuPVJzKCksT2U9bWkoKSxEYT1YbigpLFlhPWxlKCksJGE9UW4oKTtxZSgpO2Z1bmN0aW9uIEJhKHQsZT0hMCxuKXtuPT09dm9pZCAwJiZ0eXBlb2YgZT09XCJzdHJpbmdcIiYmKG49ZSxlPSEwKTtsZXQgcj1PYmplY3QuYXNzaWduKHt9LE9lLkRvY3VtZW50LmRlZmF1bHRzW09lLmRlZmF1bHRPcHRpb25zLnZlcnNpb25dLE9lLmRlZmF1bHRPcHRpb25zKTtyZXR1cm4gbmV3IERhLlNjaGVtYShyKS5jcmVhdGVOb2RlKHQsZSxuKX12YXIgV2U9Y2xhc3MgZXh0ZW5kcyBPZS5Eb2N1bWVudHtjb25zdHJ1Y3RvcihlKXtzdXBlcihPYmplY3QuYXNzaWduKHt9LE9lLmRlZmF1bHRPcHRpb25zLGUpKX19O2Z1bmN0aW9uIEZhKHQsZSl7bGV0IG49W10scjtmb3IobGV0IHMgb2YgWm4ucGFyc2UodCkpe2xldCBpPW5ldyBXZShlKTtpLnBhcnNlKHMsciksbi5wdXNoKGkpLHI9aX1yZXR1cm4gbn1mdW5jdGlvbiBoaSh0LGUpe2xldCBuPVpuLnBhcnNlKHQpLHI9bmV3IFdlKGUpLnBhcnNlKG5bMF0pO2lmKG4ubGVuZ3RoPjEpe2xldCBzPVwiU291cmNlIGNvbnRhaW5zIG11bHRpcGxlIGRvY3VtZW50czsgcGxlYXNlIHVzZSBZQU1MLnBhcnNlQWxsRG9jdW1lbnRzKClcIjtyLmVycm9ycy51bnNoaWZ0KG5ldyBZYS5ZQU1MU2VtYW50aWNFcnJvcihuWzFdLHMpKX1yZXR1cm4gcn1mdW5jdGlvbiBxYSh0LGUpe2xldCBuPWhpKHQsZSk7aWYobi53YXJuaW5ncy5mb3JFYWNoKHI9PiRhLndhcm4ocikpLG4uZXJyb3JzLmxlbmd0aD4wKXRocm93IG4uZXJyb3JzWzBdO3JldHVybiBuLnRvSlNPTigpfWZ1bmN0aW9uIFVhKHQsZSl7bGV0IG49bmV3IFdlKGUpO3JldHVybiBuLmNvbnRlbnRzPXQsU3RyaW5nKG4pfXZhciBLYT17Y3JlYXRlTm9kZTpCYSxkZWZhdWx0T3B0aW9uczpPZS5kZWZhdWx0T3B0aW9ucyxEb2N1bWVudDpXZSxwYXJzZTpxYSxwYXJzZUFsbERvY3VtZW50czpGYSxwYXJzZUNTVDpabi5wYXJzZSxwYXJzZURvY3VtZW50OmhpLHNjYWxhck9wdGlvbnM6T2Uuc2NhbGFyT3B0aW9ucyxzdHJpbmdpZnk6VWF9O2dpLllBTUw9S2F9KTt2YXIgRWk9dGUoKHFtLHlpKT0+e3lpLmV4cG9ydHM9ZGkoKS5ZQU1MfSk7dmFyIFNpPXRlKEo9PntcInVzZSBzdHJpY3RcIjt2YXIgamU9cWUoKSxRZT1sZSgpO0ouZmluZFBhaXI9amUuZmluZFBhaXI7Si5wYXJzZU1hcD1qZS5yZXNvbHZlTWFwO0oucGFyc2VTZXE9amUucmVzb2x2ZVNlcTtKLnN0cmluZ2lmeU51bWJlcj1qZS5zdHJpbmdpZnlOdW1iZXI7Si5zdHJpbmdpZnlTdHJpbmc9amUuc3RyaW5naWZ5U3RyaW5nO0oudG9KU09OPWplLnRvSlNPTjtKLlR5cGU9UWUuVHlwZTtKLllBTUxFcnJvcj1RZS5ZQU1MRXJyb3I7Si5ZQU1MUmVmZXJlbmNlRXJyb3I9UWUuWUFNTFJlZmVyZW5jZUVycm9yO0ouWUFNTFNlbWFudGljRXJyb3I9UWUuWUFNTFNlbWFudGljRXJyb3I7Si5ZQU1MU3ludGF4RXJyb3I9UWUuWUFNTFN5bnRheEVycm9yO0ouWUFNTFdhcm5pbmc9UWUuWUFNTFdhcm5pbmd9KTt2YXIgbnI9e307cnIobnIse2xhbmd1YWdlczooKT0+X3Isb3B0aW9uczooKT0+eHIscGFyc2VyczooKT0+dHIscHJpbnRlcnM6KCk9PkhhfSk7dmFyIFBpPSh0LGUsbixyKT0+e2lmKCEodCYmZT09bnVsbCkpcmV0dXJuIGUucmVwbGFjZUFsbD9lLnJlcGxhY2VBbGwobixyKTpuLmdsb2JhbD9lLnJlcGxhY2UobixyKTplLnNwbGl0KG4pLmpvaW4ocil9LHl0PVBpO3ZhciBMZT1cInN0cmluZ1wiLEplPVwiYXJyYXlcIixHZT1cImN1cnNvclwiLEhlPVwiaW5kZW50XCIsQWU9XCJhbGlnblwiLFhlPVwidHJpbVwiLFRlPVwiZ3JvdXBcIixDZT1cImZpbGxcIixoZT1cImlmLWJyZWFrXCIsemU9XCJpbmRlbnQtaWYtYnJlYWtcIixNZT1cImxpbmUtc3VmZml4XCIsWmU9XCJsaW5lLXN1ZmZpeC1ib3VuZGFyeVwiLFo9XCJsaW5lXCIsZXQ9XCJsYWJlbFwiLGtlPVwiYnJlYWstcGFyZW50XCIsRXQ9bmV3IFNldChbR2UsSGUsQWUsWGUsVGUsQ2UsaGUsemUsTWUsWmUsWixldCxrZV0pO3ZhciBfaT0odCxlLG4pPT57aWYoISh0JiZlPT1udWxsKSlyZXR1cm4gQXJyYXkuaXNBcnJheShlKXx8dHlwZW9mIGU9PVwic3RyaW5nXCI/ZVtuPDA/ZS5sZW5ndGgrbjpuXTplLmF0KG4pfSx4PV9pO2Z1bmN0aW9uIHhpKHQpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXJldHVybiBMZTtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBKZTtpZighdClyZXR1cm47bGV0e3R5cGU6ZX09dDtpZihFdC5oYXMoZSkpcmV0dXJuIGV9dmFyIHZlPXhpO3ZhciBSaT10PT5uZXcgSW50bC5MaXN0Rm9ybWF0KFwiZW4tVVNcIix7dHlwZTpcImRpc2p1bmN0aW9uXCJ9KS5mb3JtYXQodCk7ZnVuY3Rpb24gRGkodCl7bGV0IGU9dD09PW51bGw/XCJudWxsXCI6dHlwZW9mIHQ7aWYoZSE9PVwic3RyaW5nXCImJmUhPT1cIm9iamVjdFwiKXJldHVybmBVbmV4cGVjdGVkIGRvYyAnJHtlfScsIFxuRXhwZWN0ZWQgaXQgdG8gYmUgJ3N0cmluZycgb3IgJ29iamVjdCcuYDtpZih2ZSh0KSl0aHJvdyBuZXcgRXJyb3IoXCJkb2MgaXMgdmFsaWQuXCIpO2xldCBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KTtpZihuIT09XCJbb2JqZWN0IE9iamVjdF1cIilyZXR1cm5gVW5leHBlY3RlZCBkb2MgJyR7bn0nLmA7bGV0IHI9UmkoWy4uLkV0XS5tYXAocz0+YCcke3N9J2ApKTtyZXR1cm5gVW5leHBlY3RlZCBkb2MudHlwZSAnJHt0LnR5cGV9Jy5cbkV4cGVjdGVkIGl0IHRvIGJlICR7cn0uYH12YXIgbm49Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiSW52YWxpZERvY0Vycm9yXCI7Y29uc3RydWN0b3IoZSl7c3VwZXIoRGkoZSkpLHRoaXMuZG9jPWV9fSxybj1ubjtmdW5jdGlvbiAkaSh0LGUpe2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKXJldHVybiBlKHQpO2xldCBuPW5ldyBNYXA7cmV0dXJuIHIodCk7ZnVuY3Rpb24gcihpKXtpZihuLmhhcyhpKSlyZXR1cm4gbi5nZXQoaSk7bGV0IG89cyhpKTtyZXR1cm4gbi5zZXQoaSxvKSxvfWZ1bmN0aW9uIHMoaSl7c3dpdGNoKHZlKGkpKXtjYXNlIEplOnJldHVybiBlKGkubWFwKHIpKTtjYXNlIENlOnJldHVybiBlKHsuLi5pLHBhcnRzOmkucGFydHMubWFwKHIpfSk7Y2FzZSBoZTpyZXR1cm4gZSh7Li4uaSxicmVha0NvbnRlbnRzOnIoaS5icmVha0NvbnRlbnRzKSxmbGF0Q29udGVudHM6cihpLmZsYXRDb250ZW50cyl9KTtjYXNlIFRlOntsZXR7ZXhwYW5kZWRTdGF0ZXM6byxjb250ZW50czphfT1pO3JldHVybiBvPyhvPW8ubWFwKHIpLGE9b1swXSk6YT1yKGEpLGUoey4uLmksY29udGVudHM6YSxleHBhbmRlZFN0YXRlczpvfSl9Y2FzZSBBZTpjYXNlIEhlOmNhc2UgemU6Y2FzZSBldDpjYXNlIE1lOnJldHVybiBlKHsuLi5pLGNvbnRlbnRzOnIoaS5jb250ZW50cyl9KTtjYXNlIExlOmNhc2UgR2U6Y2FzZSBYZTpjYXNlIFplOmNhc2UgWjpjYXNlIGtlOnJldHVybiBlKGkpO2RlZmF1bHQ6dGhyb3cgbmV3IHJuKGkpfX19ZnVuY3Rpb24gaXIodCxlPXR0KXtyZXR1cm4gJGkodCxuPT50eXBlb2Ygbj09XCJzdHJpbmdcIj92KGUsbi5zcGxpdChgXG5gKSk6bil9dmFyIHNuPSgpPT57fSxnZT1zbixvbj1zbixvcj1zbjtmdW5jdGlvbiBudCh0LGUpe3JldHVybiBnZShlKSx7dHlwZTpBZSxjb250ZW50czplLG46dH19ZnVuY3Rpb24gSWUodCxlPXt9KXtyZXR1cm4gZ2UodCksb24oZS5leHBhbmRlZFN0YXRlcywhMCkse3R5cGU6VGUsaWQ6ZS5pZCxjb250ZW50czp0LGJyZWFrOiEhZS5zaG91bGRCcmVhayxleHBhbmRlZFN0YXRlczplLmV4cGFuZGVkU3RhdGVzfX1mdW5jdGlvbiBhbih0KXtyZXR1cm4gbnQoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLHQpfWZ1bmN0aW9uIGFyKHQpe3JldHVybiBudCh7dHlwZTpcInJvb3RcIn0sdCl9ZnVuY3Rpb24gY3IodCl7cmV0dXJuIG50KC0xLHQpfWZ1bmN0aW9uIGNuKHQsZSl7cmV0dXJuIEllKHRbMF0sey4uLmUsZXhwYW5kZWRTdGF0ZXM6dH0pfWZ1bmN0aW9uIFN0KHQpe3JldHVybiBvcih0KSx7dHlwZTpDZSxwYXJ0czp0fX1mdW5jdGlvbiBydCh0LGU9XCJcIixuPXt9KXtyZXR1cm4gZ2UodCksZSE9PVwiXCImJmdlKGUpLHt0eXBlOmhlLGJyZWFrQ29udGVudHM6dCxmbGF0Q29udGVudHM6ZSxncm91cElkOm4uZ3JvdXBJZH19ZnVuY3Rpb24gbHIodCl7cmV0dXJuIGdlKHQpLHt0eXBlOk1lLGNvbnRlbnRzOnR9fXZhciB3dD17dHlwZTprZX07dmFyIEJpPXt0eXBlOlosaGFyZDohMH0sRmk9e3R5cGU6WixoYXJkOiEwLGxpdGVyYWw6ITB9LG5lPXt0eXBlOlp9LGJ0PXt0eXBlOlosc29mdDohMH0sTj1bQmksd3RdLHR0PVtGaSx3dF07ZnVuY3Rpb24gdih0LGUpe2dlKHQpLG9uKGUpO2xldCBuPVtdO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7cisrKXIhPT0wJiZuLnB1c2godCksbi5wdXNoKGVbcl0pO3JldHVybiBufWZ1bmN0aW9uIE50KHQpe3JldHVybihlLG4scik9PntsZXQgcz0hIShyIT1udWxsJiZyLmJhY2t3YXJkcyk7aWYobj09PSExKXJldHVybiExO2xldHtsZW5ndGg6aX09ZSxvPW47Zm9yKDtvPj0wJiZvPGk7KXtsZXQgYT1lLmNoYXJBdChvKTtpZih0IGluc3RhbmNlb2YgUmVnRXhwKXtpZighdC50ZXN0KGEpKXJldHVybiBvfWVsc2UgaWYoIXQuaW5jbHVkZXMoYSkpcmV0dXJuIG87cz9vLS06bysrfXJldHVybiBvPT09LTF8fG89PT1pP286ITF9fXZhciBNYz1OdCgvXFxzL3UpLGxuPU50KFwiIFx0XCIpLGtjPU50KFwiLDsgXHRcIiksdmM9TnQoL1teXFxuXFxyXS91KTtmdW5jdGlvbiBxaSh0LGUsbil7bGV0IHI9ISEobiE9bnVsbCYmbi5iYWNrd2FyZHMpO2lmKGU9PT0hMSlyZXR1cm4hMTtsZXQgcz10LmNoYXJBdChlKTtpZihyKXtpZih0LmNoYXJBdChlLTEpPT09XCJcXHJcIiYmcz09PWBcbmApcmV0dXJuIGUtMjtpZihzPT09YFxuYHx8cz09PVwiXFxyXCJ8fHM9PT1cIlxcdTIwMjhcInx8cz09PVwiXFx1MjAyOVwiKXJldHVybiBlLTF9ZWxzZXtpZihzPT09XCJcXHJcIiYmdC5jaGFyQXQoZSsxKT09PWBcbmApcmV0dXJuIGUrMjtpZihzPT09YFxuYHx8cz09PVwiXFxyXCJ8fHM9PT1cIlxcdTIwMjhcInx8cz09PVwiXFx1MjAyOVwiKXJldHVybiBlKzF9cmV0dXJuIGV9dmFyIGZuPXFpO2Z1bmN0aW9uIFVpKHQsZSl7bGV0IG49ZS0xO249bG4odCxuLHtiYWNrd2FyZHM6ITB9KSxuPWZuKHQsbix7YmFja3dhcmRzOiEwfSksbj1sbih0LG4se2JhY2t3YXJkczohMH0pO2xldCByPWZuKHQsbix7YmFja3dhcmRzOiEwfSk7cmV0dXJuIG4hPT1yfXZhciBmcj1VaTt2YXIgdW49Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiVW5leHBlY3RlZE5vZGVFcnJvclwiO2NvbnN0cnVjdG9yKGUsbixyPVwidHlwZVwiKXtzdXBlcihgVW5leHBlY3RlZCAke259IG5vZGUgJHtyfTogJHtKU09OLnN0cmluZ2lmeShlW3JdKX0uYCksdGhpcy5ub2RlPWV9fSx1cj11bjtmdW5jdGlvbiBwcih0LGUpe2xldHtub2RlOm59PXQ7aWYobi50eXBlPT09XCJyb290XCImJmUuZmlsZXBhdGgmJi8oPzpbL1xcXFxdfF4pXFwuKD86cHJldHRpZXJ8c3R5bGVsaW50fGxpbnRzdGFnZWQpcmMkL3UudGVzdChlLmZpbGVwYXRoKSlyZXR1cm4gYXN5bmMgcj0+e2xldCBzPWF3YWl0IHIoZS5vcmlnaW5hbFRleHQse3BhcnNlcjpcImpzb25cIn0pO3JldHVybiBzP1tzLE5dOnZvaWQgMH19cHIuZ2V0VmlzaXRvcktleXM9KCk9PltdO3ZhciBtcj1wcjt2YXIgc3Q9bnVsbDtmdW5jdGlvbiBpdCh0KXtpZihzdCE9PW51bGwmJnR5cGVvZiBzdC5wcm9wZXJ0eSl7bGV0IGU9c3Q7cmV0dXJuIHN0PWl0LnByb3RvdHlwZT1udWxsLGV9cmV0dXJuIHN0PWl0LnByb3RvdHlwZT10Pz9PYmplY3QuY3JlYXRlKG51bGwpLG5ldyBpdH12YXIgS2k9MTA7Zm9yKGxldCB0PTA7dDw9S2k7dCsrKWl0KCk7ZnVuY3Rpb24gcG4odCl7cmV0dXJuIGl0KHQpfWZ1bmN0aW9uIFZpKHQsZT1cInR5cGVcIil7cG4odCk7ZnVuY3Rpb24gbihyKXtsZXQgcz1yW2VdLGk9dFtzXTtpZighQXJyYXkuaXNBcnJheShpKSl0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihgTWlzc2luZyB2aXNpdG9yIGtleXMgZm9yICcke3N9Jy5gKSx7bm9kZTpyfSk7cmV0dXJuIGl9cmV0dXJuIG59dmFyIGhyPVZpO3ZhciBXaT1PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoe3Jvb3Q6W1wiY2hpbGRyZW5cIl0sZG9jdW1lbnQ6W1wiaGVhZFwiLFwiYm9keVwiLFwiY2hpbGRyZW5cIl0sZG9jdW1lbnRIZWFkOltcImNoaWxkcmVuXCJdLGRvY3VtZW50Qm9keTpbXCJjaGlsZHJlblwiXSxkaXJlY3RpdmU6W10sYWxpYXM6W10sYmxvY2tMaXRlcmFsOltdLGJsb2NrRm9sZGVkOltcImNoaWxkcmVuXCJdLHBsYWluOltcImNoaWxkcmVuXCJdLHF1b3RlU2luZ2xlOltdLHF1b3RlRG91YmxlOltdLG1hcHBpbmc6W1wiY2hpbGRyZW5cIl0sbWFwcGluZ0l0ZW06W1wia2V5XCIsXCJ2YWx1ZVwiLFwiY2hpbGRyZW5cIl0sbWFwcGluZ0tleTpbXCJjb250ZW50XCIsXCJjaGlsZHJlblwiXSxtYXBwaW5nVmFsdWU6W1wiY29udGVudFwiLFwiY2hpbGRyZW5cIl0sc2VxdWVuY2U6W1wiY2hpbGRyZW5cIl0sc2VxdWVuY2VJdGVtOltcImNvbnRlbnRcIixcImNoaWxkcmVuXCJdLGZsb3dNYXBwaW5nOltcImNoaWxkcmVuXCJdLGZsb3dNYXBwaW5nSXRlbTpbXCJrZXlcIixcInZhbHVlXCIsXCJjaGlsZHJlblwiXSxmbG93U2VxdWVuY2U6W1wiY2hpbGRyZW5cIl0sZmxvd1NlcXVlbmNlSXRlbTpbXCJjb250ZW50XCIsXCJjaGlsZHJlblwiXSxjb21tZW50OltdLHRhZzpbXSxhbmNob3I6W119KS5tYXAoKFt0LGVdKT0+W3QsWy4uLmUsXCJhbmNob3JcIixcInRhZ1wiLFwiaW5kaWNhdG9yQ29tbWVudFwiLFwibGVhZGluZ0NvbW1lbnRzXCIsXCJtaWRkbGVDb21tZW50c1wiLFwidHJhaWxpbmdDb21tZW50XCIsXCJlbmRDb21tZW50c1wiXV0pKSxncj1XaTt2YXIgamk9aHIoZ3IpLGRyPWppO2Z1bmN0aW9uIFBlKHQpe3JldHVybiB0LnBvc2l0aW9uLnN0YXJ0Lm9mZnNldH1mdW5jdGlvbiB5cih0KXtyZXR1cm4gdC5wb3NpdGlvbi5lbmQub2Zmc2V0fWZ1bmN0aW9uIEVyKHQpe3JldHVybi9eXFxzKkAoPzpwcmV0dGllcnxmb3JtYXQpXFxzKiQvdS50ZXN0KHQpfWZ1bmN0aW9uIFNyKHQpe3JldHVybi9eXFxzKiNbXlxcU1xcbl0qQCg/OnByZXR0aWVyfGZvcm1hdClcXHMqPyg/OlxcbnwkKS91LnRlc3QodCl9ZnVuY3Rpb24gd3IodCl7cmV0dXJuYCMgQGZvcm1hdFxuXG4ke3R9YH1mdW5jdGlvbiBRaSh0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KSYmdC5sZW5ndGg+MH12YXIgX2U9UWk7ZnVuY3Rpb24gSCh0LGUpe3JldHVybiB0eXBlb2YodD09bnVsbD92b2lkIDA6dC50eXBlKT09XCJzdHJpbmdcIiYmKCFlfHxlLmluY2x1ZGVzKHQudHlwZSkpfWZ1bmN0aW9uIG1uKHQsZSxuKXtyZXR1cm4gZShcImNoaWxkcmVuXCJpbiB0P3suLi50LGNoaWxkcmVuOnQuY2hpbGRyZW4ubWFwKHI9Pm1uKHIsZSx0KSl9OnQsbil9ZnVuY3Rpb24geGUodCxlLG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2dldDpuLGVudW1lcmFibGU6ITF9KX1mdW5jdGlvbiBOcih0LGUpe2xldCBuPTAscj1lLmxlbmd0aDtmb3IobGV0IHM9dC5wb3NpdGlvbi5lbmQub2Zmc2V0LTE7czxyO3MrKyl7bGV0IGk9ZVtzXTtpZihpPT09YFxuYCYmbisrLG49PT0xJiYvXFxTL3UudGVzdChpKSlyZXR1cm4hMTtpZihuPT09MilyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBPdCh0KXtsZXR7bm9kZTplfT10O3N3aXRjaChlLnR5cGUpe2Nhc2VcInRhZ1wiOmNhc2VcImFuY2hvclwiOmNhc2VcImNvbW1lbnRcIjpyZXR1cm4hMX1sZXQgbj10LnN0YWNrLmxlbmd0aDtmb3IobGV0IHI9MTtyPG47cisrKXtsZXQgcz10LnN0YWNrW3JdLGk9dC5zdGFja1tyLTFdO2lmKEFycmF5LmlzQXJyYXkoaSkmJnR5cGVvZiBzPT1cIm51bWJlclwiJiZzIT09aS5sZW5ndGgtMSlyZXR1cm4hMX1yZXR1cm4hMH1mdW5jdGlvbiBMdCh0KXtyZXR1cm4gX2UodC5jaGlsZHJlbik/THQoeCghMSx0LmNoaWxkcmVuLC0xKSk6dH1mdW5jdGlvbiBicih0KXtyZXR1cm4gdC52YWx1ZS50cmltKCk9PT1cInByZXR0aWVyLWlnbm9yZVwifWZ1bmN0aW9uIE9yKHQpe2xldHtub2RlOmV9PXQ7aWYoZS50eXBlPT09XCJkb2N1bWVudEJvZHlcIil7bGV0IG49dC5wYXJlbnQuaGVhZDtyZXR1cm4gUihuKSYmYnIoeCghMSxuLmVuZENvbW1lbnRzLC0xKSl9cmV0dXJuIGVlKGUpJiZicih4KCExLGUubGVhZGluZ0NvbW1lbnRzLC0xKSl9ZnVuY3Rpb24gUmUodCl7cmV0dXJuIV9lKHQuY2hpbGRyZW4pJiYhSmkodCl9ZnVuY3Rpb24gSmkodCl7cmV0dXJuIGVlKHQpfHxpZSh0KXx8aG4odCl8fEsodCl8fFIodCl9ZnVuY3Rpb24gZWUodCl7cmV0dXJuIF9lKHQ9PW51bGw/dm9pZCAwOnQubGVhZGluZ0NvbW1lbnRzKX1mdW5jdGlvbiBpZSh0KXtyZXR1cm4gX2UodD09bnVsbD92b2lkIDA6dC5taWRkbGVDb21tZW50cyl9ZnVuY3Rpb24gaG4odCl7cmV0dXJuIHQ9PW51bGw/dm9pZCAwOnQuaW5kaWNhdG9yQ29tbWVudH1mdW5jdGlvbiBLKHQpe3JldHVybiB0PT1udWxsP3ZvaWQgMDp0LnRyYWlsaW5nQ29tbWVudH1mdW5jdGlvbiBSKHQpe3JldHVybiBfZSh0PT1udWxsP3ZvaWQgMDp0LmVuZENvbW1lbnRzKX1mdW5jdGlvbiBMcih0KXtsZXQgZT1bXSxuO2ZvcihsZXQgciBvZiB0LnNwbGl0KC8oICspL3UpKXIhPT1cIiBcIj9uPT09XCIgXCI/ZS5wdXNoKHIpOmUucHVzaCgoZS5wb3AoKXx8XCJcIikrcik6bj09PXZvaWQgMCYmZS51bnNoaWZ0KFwiXCIpLG49cjtyZXR1cm4gbj09PVwiIFwiJiZlLnB1c2goKGUucG9wKCl8fFwiXCIpK1wiIFwiKSxlWzBdPT09XCJcIiYmKGUuc2hpZnQoKSxlLnVuc2hpZnQoXCIgXCIrKGUuc2hpZnQoKXx8XCJcIikpKSxlfWZ1bmN0aW9uIEFyKHQsZSxuKXtsZXQgcj1lLnNwbGl0KGBcbmApLm1hcCgocyxpLG8pPT5pPT09MCYmaT09PW8ubGVuZ3RoLTE/czppIT09MCYmaSE9PW8ubGVuZ3RoLTE/cy50cmltKCk6aT09PTA/cy50cmltRW5kKCk6cy50cmltU3RhcnQoKSk7cmV0dXJuIG4ucHJvc2VXcmFwPT09XCJwcmVzZXJ2ZVwiP3IubWFwKHM9PnMubGVuZ3RoPT09MD9bXTpbc10pOnIubWFwKHM9PnMubGVuZ3RoPT09MD9bXTpMcihzKSkucmVkdWNlKChzLGksbyk9Pm8hPT0wJiZyW28tMV0ubGVuZ3RoPjAmJmkubGVuZ3RoPjAmJiEodD09PVwicXVvdGVEb3VibGVcIiYmeCghMSx4KCExLHMsLTEpLC0xKS5lbmRzV2l0aChcIlxcXFxcIikpP1suLi5zLnNsaWNlKDAsLTEpLFsuLi54KCExLHMsLTEpLC4uLmldXTpbLi4ucyxpXSxbXSkubWFwKHM9Pm4ucHJvc2VXcmFwPT09XCJuZXZlclwiP1tzLmpvaW4oXCIgXCIpXTpzKX1mdW5jdGlvbiBUcih0LHtwYXJlbnRJbmRlbnQ6ZSxpc0xhc3REZXNjZW5kYW50Om4sb3B0aW9uczpyfSl7bGV0IHM9dC5wb3NpdGlvbi5zdGFydC5saW5lPT09dC5wb3NpdGlvbi5lbmQubGluZT9cIlwiOnIub3JpZ2luYWxUZXh0LnNsaWNlKHQucG9zaXRpb24uc3RhcnQub2Zmc2V0LHQucG9zaXRpb24uZW5kLm9mZnNldCkubWF0Y2goL15bXlxcbl0qXFxuKC4qKSQvc3UpWzFdLGk7aWYodC5pbmRlbnQ9PT1udWxsKXtsZXQgYz1zLm1hdGNoKC9eKD88bGVhZGluZ1NwYWNlPiAqKVteXFxuXFxyIF0vbXUpO2k9Yz9jLmdyb3Vwcy5sZWFkaW5nU3BhY2UubGVuZ3RoOk51bWJlci5QT1NJVElWRV9JTkZJTklUWX1lbHNlIGk9dC5pbmRlbnQtMStlO2xldCBvPXMuc3BsaXQoYFxuYCkubWFwKGM9PmMuc2xpY2UoaSkpO2lmKHIucHJvc2VXcmFwPT09XCJwcmVzZXJ2ZVwifHx0LnR5cGU9PT1cImJsb2NrTGl0ZXJhbFwiKXJldHVybiBhKG8ubWFwKGM9PmMubGVuZ3RoPT09MD9bXTpbY10pKTtyZXR1cm4gYShvLm1hcChjPT5jLmxlbmd0aD09PTA/W106THIoYykpLnJlZHVjZSgoYyxsLGYpPT5mIT09MCYmb1tmLTFdLmxlbmd0aD4wJiZsLmxlbmd0aD4wJiYhL15cXHMvdS50ZXN0KGxbMF0pJiYhL15cXHN8XFxzJC91LnRlc3QoeCghMSxjLC0xKSk/Wy4uLmMuc2xpY2UoMCwtMSksWy4uLngoITEsYywtMSksLi4ubF1dOlsuLi5jLGxdLFtdKS5tYXAoYz0+Yy5yZWR1Y2UoKGwsZik9PmwubGVuZ3RoPjAmJi9cXHMkL3UudGVzdCh4KCExLGwsLTEpKT9bLi4ubC5zbGljZSgwLC0xKSx4KCExLGwsLTEpK1wiIFwiK2ZdOlsuLi5sLGZdLFtdKSkubWFwKGM9PnIucHJvc2VXcmFwPT09XCJuZXZlclwiP1tjLmpvaW4oXCIgXCIpXTpjKSk7ZnVuY3Rpb24gYShjKXtpZih0LmNob21waW5nPT09XCJrZWVwXCIpcmV0dXJuIHgoITEsYywtMSkubGVuZ3RoPT09MD9jLnNsaWNlKDAsLTEpOmM7bGV0IGw9MDtmb3IobGV0IGY9Yy5sZW5ndGgtMTtmPj0wJiZjW2ZdLmxlbmd0aD09PTA7Zi0tKWwrKztyZXR1cm4gbD09PTA/YzpsPj0yJiYhbj9jLnNsaWNlKDAsLShsLTEpKTpjLnNsaWNlKDAsLWwpfX1mdW5jdGlvbiBvdCh0KXtpZighdClyZXR1cm4hMDtzd2l0Y2godC50eXBlKXtjYXNlXCJwbGFpblwiOmNhc2VcInF1b3RlRG91YmxlXCI6Y2FzZVwicXVvdGVTaW5nbGVcIjpjYXNlXCJhbGlhc1wiOmNhc2VcImZsb3dNYXBwaW5nXCI6Y2FzZVwiZmxvd1NlcXVlbmNlXCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19dmFyIGduPW5ldyBXZWFrTWFwO2Z1bmN0aW9uIEF0KHQsZSl7bGV0e25vZGU6bixyb290OnJ9PXQscztyZXR1cm4gZ24uaGFzKHIpP3M9Z24uZ2V0KHIpOihzPW5ldyBTZXQsZ24uc2V0KHIscykpLCFzLmhhcyhuLnBvc2l0aW9uLmVuZC5saW5lKSYmKHMuYWRkKG4ucG9zaXRpb24uZW5kLmxpbmUpLE5yKG4sZSkmJiFkbih0LnBhcmVudCkpP2J0OlwiXCJ9ZnVuY3Rpb24gZG4odCl7cmV0dXJuIFIodCkmJiFIKHQsW1wiZG9jdW1lbnRIZWFkXCIsXCJkb2N1bWVudEJvZHlcIixcImZsb3dNYXBwaW5nXCIsXCJmbG93U2VxdWVuY2VcIl0pfWZ1bmN0aW9uIEkodCxlKXtyZXR1cm4gbnQoXCIgXCIucmVwZWF0KHQpLGUpfWZ1bmN0aW9uIEdpKHQsZSxuKXtsZXR7bm9kZTpyfT10LHM9dC5hbmNlc3RvcnMuZmlsdGVyKGw9PmwudHlwZT09PVwic2VxdWVuY2VcInx8bC50eXBlPT09XCJtYXBwaW5nXCIpLmxlbmd0aCxpPU90KHQpLG89W3IudHlwZT09PVwiYmxvY2tGb2xkZWRcIj9cIj5cIjpcInxcIl07ci5pbmRlbnQhPT1udWxsJiZvLnB1c2goci5pbmRlbnQudG9TdHJpbmcoKSksci5jaG9tcGluZyE9PVwiY2xpcFwiJiZvLnB1c2goci5jaG9tcGluZz09PVwia2VlcFwiP1wiK1wiOlwiLVwiKSxobihyKSYmby5wdXNoKFwiIFwiLGUoXCJpbmRpY2F0b3JDb21tZW50XCIpKTtsZXQgYT1UcihyLHtwYXJlbnRJbmRlbnQ6cyxpc0xhc3REZXNjZW5kYW50Omksb3B0aW9uczpufSksYz1bXTtmb3IobGV0W2wsZl1vZiBhLmVudHJpZXMoKSlsPT09MCYmYy5wdXNoKE4pLGMucHVzaChTdCh2KG5lLGYpKSksbCE9PWEubGVuZ3RoLTE/Yy5wdXNoKGYubGVuZ3RoPT09MD9OOmFyKHR0KSk6ci5jaG9tcGluZz09PVwia2VlcFwiJiZpJiZjLnB1c2goYW4oZi5sZW5ndGg9PT0wP046dHQpKTtyZXR1cm4gci5pbmRlbnQ9PT1udWxsP28ucHVzaChjcihJKG4udGFiV2lkdGgsYykpKTpvLnB1c2goYW4oSShyLmluZGVudC0xK3MsYykpKSxvfXZhciBDcj1HaTtmdW5jdGlvbiBUdCh0LGUsbil7bGV0e25vZGU6cn09dCxzPXIudHlwZT09PVwiZmxvd01hcHBpbmdcIixpPXM/XCJ7XCI6XCJbXCIsbz1zP1wifVwiOlwiXVwiLGE9YnQ7cyYmci5jaGlsZHJlbi5sZW5ndGg+MCYmbi5icmFja2V0U3BhY2luZyYmKGE9bmUpO2xldCBjPXgoITEsci5jaGlsZHJlbiwtMSksbD0oYz09bnVsbD92b2lkIDA6Yy50eXBlKT09PVwiZmxvd01hcHBpbmdJdGVtXCImJlJlKGMua2V5KSYmUmUoYy52YWx1ZSk7cmV0dXJuW2ksSShuLnRhYldpZHRoLFthLEhpKHQsZSxuKSxuLnRyYWlsaW5nQ29tbWE9PT1cIm5vbmVcIj9cIlwiOnJ0KFwiLFwiKSxSKHIpP1tOLHYoTix0Lm1hcChlLFwiZW5kQ29tbWVudHNcIikpXTpcIlwiXSksbD9cIlwiOmEsb119ZnVuY3Rpb24gSGkodCxlLG4pe3JldHVybiB0Lm1hcCgoe2lzTGFzdDpyLG5vZGU6cyxuZXh0Oml9KT0+W2UoKSxyP1wiXCI6W1wiLFwiLG5lLHMucG9zaXRpb24uc3RhcnQubGluZSE9PWkucG9zaXRpb24uc3RhcnQubGluZT9BdCh0LG4ub3JpZ2luYWxUZXh0KTpcIlwiXV0sXCJjaGlsZHJlblwiKX1mdW5jdGlvbiBYaSh0LGUsbil7dmFyIEM7bGV0e25vZGU6cixwYXJlbnQ6c309dCx7a2V5OmksdmFsdWU6b309cixhPVJlKGkpLGM9UmUobyk7aWYoYSYmYylyZXR1cm5cIjogXCI7bGV0IGw9ZShcImtleVwiKSxmPXppKHIpP1wiIFwiOlwiXCI7aWYoYylyZXR1cm4gci50eXBlPT09XCJmbG93TWFwcGluZ0l0ZW1cIiYmcy50eXBlPT09XCJmbG93TWFwcGluZ1wiP2w6ci50eXBlPT09XCJtYXBwaW5nSXRlbVwiJiZ5bihpLmNvbnRlbnQsbikmJiFLKGkuY29udGVudCkmJigoQz1zLnRhZyk9PW51bGw/dm9pZCAwOkMudmFsdWUpIT09XCJ0YWc6eWFtbC5vcmcsMjAwMjpzZXRcIj9bbCxmLFwiOlwiXTpbXCI/IFwiLEkoMixsKV07bGV0IG09ZShcInZhbHVlXCIpO2lmKGEpcmV0dXJuW1wiOiBcIixJKDIsbSldO2lmKGVlKG8pfHwhb3QoaS5jb250ZW50KSlyZXR1cm5bXCI/IFwiLEkoMixsKSxOLC4uLnQubWFwKCgpPT5bZSgpLE5dLFwidmFsdWVcIixcImxlYWRpbmdDb21tZW50c1wiKSxcIjogXCIsSSgyLG0pXTtpZihaaShpLmNvbnRlbnQpJiYhZWUoaS5jb250ZW50KSYmIWllKGkuY29udGVudCkmJiFLKGkuY29udGVudCkmJiFSKGkpJiYhZWUoby5jb250ZW50KSYmIWllKG8uY29udGVudCkmJiFSKG8pJiZ5bihvLmNvbnRlbnQsbikpcmV0dXJuW2wsZixcIjogXCIsbV07bGV0IGQ9U3ltYm9sKFwibWFwcGluZ0tleVwiKSx5PUllKFtydChcIj8gXCIpLEllKEkoMixsKSx7aWQ6ZH0pXSksaD1bTixcIjogXCIsSSgyLG0pXSxnPVtmLFwiOlwiXTtlZShvLmNvbnRlbnQpfHxSKG8pJiZvLmNvbnRlbnQmJiFIKG8uY29udGVudCxbXCJtYXBwaW5nXCIsXCJzZXF1ZW5jZVwiXSl8fHMudHlwZT09PVwibWFwcGluZ1wiJiZLKGkuY29udGVudCkmJm90KG8uY29udGVudCl8fEgoby5jb250ZW50LFtcIm1hcHBpbmdcIixcInNlcXVlbmNlXCJdKSYmby5jb250ZW50LnRhZz09PW51bGwmJm8uY29udGVudC5hbmNob3I9PT1udWxsP2cucHVzaChOKTpvLmNvbnRlbnQ/Zy5wdXNoKG5lKTpLKG8pJiZnLnB1c2goXCIgXCIpLGcucHVzaChtKTtsZXQgdz1JKG4udGFiV2lkdGgsZyk7cmV0dXJuIHluKGkuY29udGVudCxuKSYmIWVlKGkuY29udGVudCkmJiFpZShpLmNvbnRlbnQpJiYhUihpKT9jbihbW2wsd11dKTpjbihbW3kscnQoaCx3LHtncm91cElkOmR9KV1dKX1mdW5jdGlvbiB5bih0LGUpe2lmKCF0KXJldHVybiEwO3N3aXRjaCh0LnR5cGUpe2Nhc2VcInBsYWluXCI6Y2FzZVwicXVvdGVTaW5nbGVcIjpjYXNlXCJxdW90ZURvdWJsZVwiOmJyZWFrO2Nhc2VcImFsaWFzXCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX1pZihlLnByb3NlV3JhcD09PVwicHJlc2VydmVcIilyZXR1cm4gdC5wb3NpdGlvbi5zdGFydC5saW5lPT09dC5wb3NpdGlvbi5lbmQubGluZTtpZigvXFxcXCQvbXUudGVzdChlLm9yaWdpbmFsVGV4dC5zbGljZSh0LnBvc2l0aW9uLnN0YXJ0Lm9mZnNldCx0LnBvc2l0aW9uLmVuZC5vZmZzZXQpKSlyZXR1cm4hMTtzd2l0Y2goZS5wcm9zZVdyYXApe2Nhc2VcIm5ldmVyXCI6cmV0dXJuIXQudmFsdWUuaW5jbHVkZXMoYFxuYCk7Y2FzZVwiYWx3YXlzXCI6cmV0dXJuIS9bXFxuIF0vdS50ZXN0KHQudmFsdWUpO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIHppKHQpe3ZhciBlO3JldHVybigoZT10LmtleS5jb250ZW50KT09bnVsbD92b2lkIDA6ZS50eXBlKT09PVwiYWxpYXNcIn1mdW5jdGlvbiBaaSh0KXtpZighdClyZXR1cm4hMDtzd2l0Y2godC50eXBlKXtjYXNlXCJwbGFpblwiOmNhc2VcInF1b3RlRG91YmxlXCI6Y2FzZVwicXVvdGVTaW5nbGVcIjpyZXR1cm4gdC5wb3NpdGlvbi5zdGFydC5saW5lPT09dC5wb3NpdGlvbi5lbmQubGluZTtjYXNlXCJhbGlhc1wiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fXZhciBNcj1YaTtmdW5jdGlvbiBlbyh0KXtyZXR1cm4gbW4odCx0byl9ZnVuY3Rpb24gdG8odCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwiZG9jdW1lbnRcIjp4ZSh0LFwiaGVhZFwiLCgpPT50LmNoaWxkcmVuWzBdKSx4ZSh0LFwiYm9keVwiLCgpPT50LmNoaWxkcmVuWzFdKTticmVhaztjYXNlXCJkb2N1bWVudEJvZHlcIjpjYXNlXCJzZXF1ZW5jZUl0ZW1cIjpjYXNlXCJmbG93U2VxdWVuY2VJdGVtXCI6Y2FzZVwibWFwcGluZ0tleVwiOmNhc2VcIm1hcHBpbmdWYWx1ZVwiOnhlKHQsXCJjb250ZW50XCIsKCk9PnQuY2hpbGRyZW5bMF0pO2JyZWFrO2Nhc2VcIm1hcHBpbmdJdGVtXCI6Y2FzZVwiZmxvd01hcHBpbmdJdGVtXCI6eGUodCxcImtleVwiLCgpPT50LmNoaWxkcmVuWzBdKSx4ZSh0LFwidmFsdWVcIiwoKT0+dC5jaGlsZHJlblsxXSk7YnJlYWt9cmV0dXJuIHR9dmFyIGtyPWVvO2Z1bmN0aW9uIG5vKHQsZSxuKXtsZXR7bm9kZTpyfT10LHM9W107ci50eXBlIT09XCJtYXBwaW5nVmFsdWVcIiYmZWUocikmJnMucHVzaChbdihOLHQubWFwKG4sXCJsZWFkaW5nQ29tbWVudHNcIikpLE5dKTtsZXR7dGFnOmksYW5jaG9yOm99PXI7aSYmcy5wdXNoKG4oXCJ0YWdcIikpLGkmJm8mJnMucHVzaChcIiBcIiksbyYmcy5wdXNoKG4oXCJhbmNob3JcIikpO2xldCBhPVwiXCI7cmV0dXJuIEgocixbXCJtYXBwaW5nXCIsXCJzZXF1ZW5jZVwiLFwiY29tbWVudFwiLFwiZGlyZWN0aXZlXCIsXCJtYXBwaW5nSXRlbVwiLFwic2VxdWVuY2VJdGVtXCJdKSYmIU90KHQpJiYoYT1BdCh0LGUub3JpZ2luYWxUZXh0KSksKGl8fG8pJiYoSChyLFtcInNlcXVlbmNlXCIsXCJtYXBwaW5nXCJdKSYmIWllKHIpP3MucHVzaChOKTpzLnB1c2goXCIgXCIpKSxpZShyKSYmcy5wdXNoKFtyLm1pZGRsZUNvbW1lbnRzLmxlbmd0aD09PTE/XCJcIjpOLHYoTix0Lm1hcChuLFwibWlkZGxlQ29tbWVudHNcIikpLE5dKSxPcih0KT9zLnB1c2goaXIoZS5vcmlnaW5hbFRleHQuc2xpY2Uoci5wb3NpdGlvbi5zdGFydC5vZmZzZXQsci5wb3NpdGlvbi5lbmQub2Zmc2V0KS50cmltRW5kKCkpKTpzLnB1c2goSWUocm8odCxlLG4pKSksSyhyKSYmIUgocixbXCJkb2N1bWVudFwiLFwiZG9jdW1lbnRIZWFkXCJdKSYmcy5wdXNoKGxyKFtyLnR5cGU9PT1cIm1hcHBpbmdWYWx1ZVwiJiYhci5jb250ZW50P1wiXCI6XCIgXCIsdC5wYXJlbnQudHlwZT09PVwibWFwcGluZ0tleVwiJiZ0LmdldFBhcmVudE5vZGUoMikudHlwZT09PVwibWFwcGluZ1wiJiZvdChyKT9cIlwiOnd0LG4oXCJ0cmFpbGluZ0NvbW1lbnRcIildKSksZG4ocikmJnMucHVzaChJKHIudHlwZT09PVwic2VxdWVuY2VJdGVtXCI/MjowLFtOLHYoTix0Lm1hcCgoe25vZGU6Y30pPT5bZnIoZS5vcmlnaW5hbFRleHQsUGUoYykpP046XCJcIixuKCldLFwiZW5kQ29tbWVudHNcIikpXSkpLHMucHVzaChhKSxzfWZ1bmN0aW9uIHJvKHQsZSxuKXtsZXR7bm9kZTpyfT10O3N3aXRjaChyLnR5cGUpe2Nhc2VcInJvb3RcIjp7bGV0IHM9W107dC5lYWNoKCh7bm9kZTpvLG5leHQ6YSxpc0ZpcnN0OmN9KT0+e2N8fHMucHVzaChOKSxzLnB1c2gobigpKSx2cihvLGEpPyhzLnB1c2goTixcIi4uLlwiKSxLKG8pJiZzLnB1c2goXCIgXCIsbihcInRyYWlsaW5nQ29tbWVudFwiKSkpOmEmJiFLKGEuaGVhZCkmJnMucHVzaChOLFwiLS0tXCIpfSxcImNoaWxkcmVuXCIpO2xldCBpPUx0KHIpO3JldHVybighSChpLFtcImJsb2NrTGl0ZXJhbFwiLFwiYmxvY2tGb2xkZWRcIl0pfHxpLmNob21waW5nIT09XCJrZWVwXCIpJiZzLnB1c2goTiksc31jYXNlXCJkb2N1bWVudFwiOntsZXQgcz1bXTtyZXR1cm4gaW8odCxlKT09PVwiaGVhZFwiJiYoKHIuaGVhZC5jaGlsZHJlbi5sZW5ndGg+MHx8ci5oZWFkLmVuZENvbW1lbnRzLmxlbmd0aD4wKSYmcy5wdXNoKG4oXCJoZWFkXCIpKSxLKHIuaGVhZCk/cy5wdXNoKFtcIi0tLVwiLFwiIFwiLG4oW1wiaGVhZFwiLFwidHJhaWxpbmdDb21tZW50XCJdKV0pOnMucHVzaChcIi0tLVwiKSksc28ocikmJnMucHVzaChuKFwiYm9keVwiKSksdihOLHMpfWNhc2VcImRvY3VtZW50SGVhZFwiOnJldHVybiB2KE4sWy4uLnQubWFwKG4sXCJjaGlsZHJlblwiKSwuLi50Lm1hcChuLFwiZW5kQ29tbWVudHNcIildKTtjYXNlXCJkb2N1bWVudEJvZHlcIjp7bGV0e2NoaWxkcmVuOnMsZW5kQ29tbWVudHM6aX09cixvPVwiXCI7aWYocy5sZW5ndGg+MCYmaS5sZW5ndGg+MCl7bGV0IGE9THQocik7SChhLFtcImJsb2NrRm9sZGVkXCIsXCJibG9ja0xpdGVyYWxcIl0pP2EuY2hvbXBpbmchPT1cImtlZXBcIiYmKG89W04sTl0pOm89Tn1yZXR1cm5bdihOLHQubWFwKG4sXCJjaGlsZHJlblwiKSksbyx2KE4sdC5tYXAobixcImVuZENvbW1lbnRzXCIpKV19Y2FzZVwiZGlyZWN0aXZlXCI6cmV0dXJuW1wiJVwiLHYoXCIgXCIsW3IubmFtZSwuLi5yLnBhcmFtZXRlcnNdKV07Y2FzZVwiY29tbWVudFwiOnJldHVybltcIiNcIixyLnZhbHVlXTtjYXNlXCJhbGlhc1wiOnJldHVybltcIipcIixyLnZhbHVlXTtjYXNlXCJ0YWdcIjpyZXR1cm4gZS5vcmlnaW5hbFRleHQuc2xpY2Uoci5wb3NpdGlvbi5zdGFydC5vZmZzZXQsci5wb3NpdGlvbi5lbmQub2Zmc2V0KTtjYXNlXCJhbmNob3JcIjpyZXR1cm5bXCImXCIsci52YWx1ZV07Y2FzZVwicGxhaW5cIjpyZXR1cm4gYXQoci50eXBlLGUub3JpZ2luYWxUZXh0LnNsaWNlKHIucG9zaXRpb24uc3RhcnQub2Zmc2V0LHIucG9zaXRpb24uZW5kLm9mZnNldCksZSk7Y2FzZVwicXVvdGVEb3VibGVcIjpjYXNlXCJxdW90ZVNpbmdsZVwiOntsZXQgcz1cIidcIixpPSdcIicsbz1lLm9yaWdpbmFsVGV4dC5zbGljZShyLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldCsxLHIucG9zaXRpb24uZW5kLm9mZnNldC0xKTtpZihyLnR5cGU9PT1cInF1b3RlU2luZ2xlXCImJm8uaW5jbHVkZXMoXCJcXFxcXCIpfHxyLnR5cGU9PT1cInF1b3RlRG91YmxlXCImJi9cXFxcW15cIl0vdS50ZXN0KG8pKXtsZXQgYz1yLnR5cGU9PT1cInF1b3RlRG91YmxlXCI/aTpzO3JldHVybltjLGF0KHIudHlwZSxvLGUpLGNdfWlmKG8uaW5jbHVkZXMoaSkpcmV0dXJuW3MsYXQoci50eXBlLHIudHlwZT09PVwicXVvdGVEb3VibGVcIj95dCghMSx5dCghMSxvLFN0cmluZy5yYXdgXFxcImAsaSksXCInXCIscy5yZXBlYXQoMikpOm8sZSksc107aWYoby5pbmNsdWRlcyhzKSlyZXR1cm5baSxhdChyLnR5cGUsci50eXBlPT09XCJxdW90ZVNpbmdsZVwiP3l0KCExLG8sXCInJ1wiLHMpOm8sZSksaV07bGV0IGE9ZS5zaW5nbGVRdW90ZT9zOmk7cmV0dXJuW2EsYXQoci50eXBlLG8sZSksYV19Y2FzZVwiYmxvY2tGb2xkZWRcIjpjYXNlXCJibG9ja0xpdGVyYWxcIjpyZXR1cm4gQ3IodCxuLGUpO2Nhc2VcIm1hcHBpbmdcIjpjYXNlXCJzZXF1ZW5jZVwiOnJldHVybiB2KE4sdC5tYXAobixcImNoaWxkcmVuXCIpKTtjYXNlXCJzZXF1ZW5jZUl0ZW1cIjpyZXR1cm5bXCItIFwiLEkoMixyLmNvbnRlbnQ/bihcImNvbnRlbnRcIik6XCJcIildO2Nhc2VcIm1hcHBpbmdLZXlcIjpjYXNlXCJtYXBwaW5nVmFsdWVcIjpyZXR1cm4gci5jb250ZW50P24oXCJjb250ZW50XCIpOlwiXCI7Y2FzZVwibWFwcGluZ0l0ZW1cIjpjYXNlXCJmbG93TWFwcGluZ0l0ZW1cIjpyZXR1cm4gTXIodCxuLGUpO2Nhc2VcImZsb3dNYXBwaW5nXCI6cmV0dXJuIFR0KHQsbixlKTtjYXNlXCJmbG93U2VxdWVuY2VcIjpyZXR1cm4gVHQodCxuLGUpO2Nhc2VcImZsb3dTZXF1ZW5jZUl0ZW1cIjpyZXR1cm4gbihcImNvbnRlbnRcIik7ZGVmYXVsdDp0aHJvdyBuZXcgdXIocixcIllBTUxcIil9fWZ1bmN0aW9uIHNvKHQpe3JldHVybiB0LmJvZHkuY2hpbGRyZW4ubGVuZ3RoPjB8fFIodC5ib2R5KX1mdW5jdGlvbiB2cih0LGUpe3JldHVybiBLKHQpfHxlJiYoZS5oZWFkLmNoaWxkcmVuLmxlbmd0aD4wfHxSKGUuaGVhZCkpfWZ1bmN0aW9uIGlvKHQsZSl7bGV0IG49dC5ub2RlO2lmKHQuaXNGaXJzdCYmLy0tLSg/Olxcc3wkKS91LnRlc3QoZS5vcmlnaW5hbFRleHQuc2xpY2UoUGUobiksUGUobikrNCkpfHxuLmhlYWQuY2hpbGRyZW4ubGVuZ3RoPjB8fFIobi5oZWFkKXx8SyhuLmhlYWQpKXJldHVyblwiaGVhZFwiO2xldCByPXQubmV4dDtyZXR1cm4gdnIobixyKT8hMTpyP1wicm9vdFwiOiExfWZ1bmN0aW9uIGF0KHQsZSxuKXtsZXQgcj1Bcih0LGUsbik7cmV0dXJuIHYoTixyLm1hcChzPT5TdCh2KG5lLHMpKSkpfWZ1bmN0aW9uIElyKHQsZSl7aWYoSCh0KSlzd2l0Y2godC50eXBlKXtjYXNlXCJjb21tZW50XCI6aWYoRXIodC52YWx1ZSkpcmV0dXJuIG51bGw7YnJlYWs7Y2FzZVwicXVvdGVEb3VibGVcIjpjYXNlXCJxdW90ZVNpbmdsZVwiOmUudHlwZT1cInF1b3RlXCI7YnJlYWt9fUlyLmlnbm9yZWRQcm9wZXJ0aWVzPW5ldyBTZXQoW1wicG9zaXRpb25cIl0pO3ZhciBvbz17cHJlcHJvY2VzczprcixlbWJlZDptcixwcmludDpubyxtYXNzYWdlQXN0Tm9kZTpJcixpbnNlcnRQcmFnbWE6d3IsZ2V0VmlzaXRvcktleXM6ZHJ9LFByPW9vO3ZhciBfcj1be2xpbmd1aXN0TGFuZ3VhZ2VJZDo0MDcsbmFtZTpcIllBTUxcIix0eXBlOlwiZGF0YVwiLGNvbG9yOlwiI2NiMTcxZVwiLHRtU2NvcGU6XCJzb3VyY2UueWFtbFwiLGFsaWFzZXM6W1wieW1sXCJdLGV4dGVuc2lvbnM6W1wiLnltbFwiLFwiLm1pclwiLFwiLnJlZWtcIixcIi5ydml6XCIsXCIuc3VibGltZS1zeW50YXhcIixcIi5zeW50YXhcIixcIi55YW1sXCIsXCIueWFtbC10bWxhbmd1YWdlXCIsXCIueWFtbC5zZWRcIixcIi55bWwubXlzcWxcIl0sZmlsZW5hbWVzOltcIi5jbGFuZy1mb3JtYXRcIixcIi5jbGFuZy10aWR5XCIsXCIuZ2VtcmNcIixcIkNJVEFUSU9OLmNmZlwiLFwiZ2xpZGUubG9ja1wiLFwiLnByZXR0aWVycmNcIixcIi5zdHlsZWxpbnRyY1wiLFwiLmxpbnRzdGFnZWRyY1wiXSxhY2VNb2RlOlwieWFtbFwiLGNvZGVtaXJyb3JNb2RlOlwieWFtbFwiLGNvZGVtaXJyb3JNaW1lVHlwZTpcInRleHQveC15YW1sXCIscGFyc2VyczpbXCJ5YW1sXCJdLHZzY29kZUxhbmd1YWdlSWRzOltcInlhbWxcIixcImFuc2libGVcIixcImRvY2tlcmNvbXBvc2VcIixcImdpdGh1Yi1hY3Rpb25zLXdvcmtmbG93XCIsXCJob21lLWFzc2lzdGFudFwiXX1dO3ZhciBDdD17YnJhY2tldFNwYWNpbmc6e2NhdGVnb3J5OlwiQ29tbW9uXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiEwLGRlc2NyaXB0aW9uOlwiUHJpbnQgc3BhY2VzIGJldHdlZW4gYnJhY2tldHMuXCIsb3Bwb3NpdGVEZXNjcmlwdGlvbjpcIkRvIG5vdCBwcmludCBzcGFjZXMgYmV0d2VlbiBicmFja2V0cy5cIn0sb2JqZWN0V3JhcDp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJIb3cgdG8gd3JhcCBvYmplY3QgbGl0ZXJhbHMuXCIsY2hvaWNlczpbe3ZhbHVlOlwicHJlc2VydmVcIixkZXNjcmlwdGlvbjpcIktlZXAgYXMgbXVsdGktbGluZSwgaWYgdGhlcmUgaXMgYSBuZXdsaW5lIGJldHdlZW4gdGhlIG9wZW5pbmcgYnJhY2UgYW5kIGZpcnN0IHByb3BlcnR5LlwifSx7dmFsdWU6XCJjb2xsYXBzZVwiLGRlc2NyaXB0aW9uOlwiRml0IHRvIGEgc2luZ2xlIGxpbmUgd2hlbiBwb3NzaWJsZS5cIn1dfSxzaW5nbGVRdW90ZTp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJVc2Ugc2luZ2xlIHF1b3RlcyBpbnN0ZWFkIG9mIGRvdWJsZSBxdW90ZXMuXCJ9LHByb3NlV3JhcDp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJIb3cgdG8gd3JhcCBwcm9zZS5cIixjaG9pY2VzOlt7dmFsdWU6XCJhbHdheXNcIixkZXNjcmlwdGlvbjpcIldyYXAgcHJvc2UgaWYgaXQgZXhjZWVkcyB0aGUgcHJpbnQgd2lkdGguXCJ9LHt2YWx1ZTpcIm5ldmVyXCIsZGVzY3JpcHRpb246XCJEbyBub3Qgd3JhcCBwcm9zZS5cIn0se3ZhbHVlOlwicHJlc2VydmVcIixkZXNjcmlwdGlvbjpcIldyYXAgcHJvc2UgYXMtaXMuXCJ9XX0sYnJhY2tldFNhbWVMaW5lOntjYXRlZ29yeTpcIkNvbW1vblwiLHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMSxkZXNjcmlwdGlvbjpcIlB1dCA+IG9mIG9wZW5pbmcgdGFncyBvbiB0aGUgbGFzdCBsaW5lIGluc3RlYWQgb2Ygb24gYSBuZXcgbGluZS5cIn0sc2luZ2xlQXR0cmlidXRlUGVyTGluZTp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJFbmZvcmNlIHNpbmdsZSBhdHRyaWJ1dGUgcGVyIGxpbmUgaW4gSFRNTCwgVnVlIGFuZCBKU1guXCJ9fTt2YXIgYW89e2JyYWNrZXRTcGFjaW5nOkN0LmJyYWNrZXRTcGFjaW5nLHNpbmdsZVF1b3RlOkN0LnNpbmdsZVF1b3RlLHByb3NlV3JhcDpDdC5wcm9zZVdyYXB9LHhyPWFvO3ZhciB0cj17fTtycih0cix7eWFtbDooKT0+R2F9KTt2YXIgTXQ9YFxuYCxScj1cIlxcclwiLERyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXt0aGlzLmxlbmd0aD1lLmxlbmd0aDtmb3IodmFyIG49WzBdLHI9MDtyPGUubGVuZ3RoOylzd2l0Y2goZVtyXSl7Y2FzZSBNdDpyKz1NdC5sZW5ndGgsbi5wdXNoKHIpO2JyZWFrO2Nhc2UgUnI6cis9UnIubGVuZ3RoLGVbcl09PT1NdCYmKHIrPU10Lmxlbmd0aCksbi5wdXNoKHIpO2JyZWFrO2RlZmF1bHQ6cisrO2JyZWFrfXRoaXMub2Zmc2V0cz1ufXJldHVybiB0LnByb3RvdHlwZS5sb2NhdGlvbkZvckluZGV4PWZ1bmN0aW9uKGUpe2lmKGU8MHx8ZT50aGlzLmxlbmd0aClyZXR1cm4gbnVsbDtmb3IodmFyIG49MCxyPXRoaXMub2Zmc2V0cztyW24rMV08PWU7KW4rKzt2YXIgcz1lLXJbbl07cmV0dXJue2xpbmU6bixjb2x1bW46c319LHQucHJvdG90eXBlLmluZGV4Rm9yTG9jYXRpb249ZnVuY3Rpb24oZSl7dmFyIG49ZS5saW5lLHI9ZS5jb2x1bW47cmV0dXJuIG48MHx8bj49dGhpcy5vZmZzZXRzLmxlbmd0aHx8cjwwfHxyPnRoaXMubGVuZ3RoT2ZMaW5lKG4pP251bGw6dGhpcy5vZmZzZXRzW25dK3J9LHQucHJvdG90eXBlLmxlbmd0aE9mTGluZT1mdW5jdGlvbihlKXt2YXIgbj10aGlzLm9mZnNldHNbZV0scj1lPT09dGhpcy5vZmZzZXRzLmxlbmd0aC0xP3RoaXMubGVuZ3RoOnRoaXMub2Zmc2V0c1tlKzFdO3JldHVybiByLW59LHR9KCk7ZnVuY3Rpb24gJCh0LGU9bnVsbCl7XCJjaGlsZHJlblwiaW4gdCYmdC5jaGlsZHJlbi5mb3JFYWNoKG49PiQobix0KSksXCJhbmNob3JcImluIHQmJnQuYW5jaG9yJiYkKHQuYW5jaG9yLHQpLFwidGFnXCJpbiB0JiZ0LnRhZyYmJCh0LnRhZyx0KSxcImxlYWRpbmdDb21tZW50c1wiaW4gdCYmdC5sZWFkaW5nQ29tbWVudHMuZm9yRWFjaChuPT4kKG4sdCkpLFwibWlkZGxlQ29tbWVudHNcImluIHQmJnQubWlkZGxlQ29tbWVudHMuZm9yRWFjaChuPT4kKG4sdCkpLFwiaW5kaWNhdG9yQ29tbWVudFwiaW4gdCYmdC5pbmRpY2F0b3JDb21tZW50JiYkKHQuaW5kaWNhdG9yQ29tbWVudCx0KSxcInRyYWlsaW5nQ29tbWVudFwiaW4gdCYmdC50cmFpbGluZ0NvbW1lbnQmJiQodC50cmFpbGluZ0NvbW1lbnQsdCksXCJlbmRDb21tZW50c1wiaW4gdCYmdC5lbmRDb21tZW50cy5mb3JFYWNoKG49PiQobix0KSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfcGFyZW50XCIse3ZhbHVlOmUsZW51bWVyYWJsZTohMX0pfWZ1bmN0aW9uIGRlKHQpe3JldHVybmAke3QubGluZX06JHt0LmNvbHVtbn1gfWZ1bmN0aW9uIFlyKHQpeyQodCk7bGV0IGU9Y28odCksbj10LmNoaWxkcmVuLnNsaWNlKCk7dC5jb21tZW50cy5zb3J0KChyLHMpPT5yLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldC1zLnBvc2l0aW9uLmVuZC5vZmZzZXQpLmZpbHRlcihyPT4hci5fcGFyZW50KS5mb3JFYWNoKHI9Pntmb3IoO24ubGVuZ3RoPjEmJnIucG9zaXRpb24uc3RhcnQubGluZT5uWzBdLnBvc2l0aW9uLmVuZC5saW5lOyluLnNoaWZ0KCk7bG8ocixlLG5bMF0pfSl9ZnVuY3Rpb24gY28odCl7bGV0IGU9QXJyYXkuZnJvbShuZXcgQXJyYXkodC5wb3NpdGlvbi5lbmQubGluZSksKCk9Pih7fSkpO2ZvcihsZXQgbiBvZiB0LmNvbW1lbnRzKWVbbi5wb3NpdGlvbi5zdGFydC5saW5lLTFdLmNvbW1lbnQ9bjtyZXR1cm4gJHIoZSx0KSxlfWZ1bmN0aW9uICRyKHQsZSl7aWYoZS5wb3NpdGlvbi5zdGFydC5vZmZzZXQhPT1lLnBvc2l0aW9uLmVuZC5vZmZzZXQpe2lmKFwibGVhZGluZ0NvbW1lbnRzXCJpbiBlKXtsZXR7c3RhcnQ6bn09ZS5wb3NpdGlvbix7bGVhZGluZ0F0dGFjaGFibGVOb2RlOnJ9PXRbbi5saW5lLTFdOyghcnx8bi5jb2x1bW48ci5wb3NpdGlvbi5zdGFydC5jb2x1bW4pJiYodFtuLmxpbmUtMV0ubGVhZGluZ0F0dGFjaGFibGVOb2RlPWUpfWlmKFwidHJhaWxpbmdDb21tZW50XCJpbiBlJiZlLnBvc2l0aW9uLmVuZC5jb2x1bW4+MSYmZS50eXBlIT09XCJkb2N1bWVudFwiJiZlLnR5cGUhPT1cImRvY3VtZW50SGVhZFwiKXtsZXR7ZW5kOm59PWUucG9zaXRpb24se3RyYWlsaW5nQXR0YWNoYWJsZU5vZGU6cn09dFtuLmxpbmUtMV07KCFyfHxuLmNvbHVtbj49ci5wb3NpdGlvbi5lbmQuY29sdW1uKSYmKHRbbi5saW5lLTFdLnRyYWlsaW5nQXR0YWNoYWJsZU5vZGU9ZSl9aWYoZS50eXBlIT09XCJyb290XCImJmUudHlwZSE9PVwiZG9jdW1lbnRcIiYmZS50eXBlIT09XCJkb2N1bWVudEhlYWRcIiYmZS50eXBlIT09XCJkb2N1bWVudEJvZHlcIil7bGV0e3N0YXJ0Om4sZW5kOnJ9PWUucG9zaXRpb24scz1bci5saW5lXS5jb25jYXQobi5saW5lPT09ci5saW5lP1tdOm4ubGluZSk7Zm9yKGxldCBpIG9mIHMpe2xldCBvPXRbaS0xXS50cmFpbGluZ05vZGU7KCFvfHxyLmNvbHVtbj49by5wb3NpdGlvbi5lbmQuY29sdW1uKSYmKHRbaS0xXS50cmFpbGluZ05vZGU9ZSl9fVwiY2hpbGRyZW5cImluIGUmJmUuY2hpbGRyZW4uZm9yRWFjaChuPT57JHIodCxuKX0pfX1mdW5jdGlvbiBsbyh0LGUsbil7bGV0IHI9dC5wb3NpdGlvbi5zdGFydC5saW5lLHt0cmFpbGluZ0F0dGFjaGFibGVOb2RlOnN9PWVbci0xXTtpZihzKXtpZihzLnRyYWlsaW5nQ29tbWVudCl0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgbXVsdGlwbGUgdHJhaWxpbmcgY29tbWVudCBhdCAke2RlKHQucG9zaXRpb24uc3RhcnQpfWApOyQodCxzKSxzLnRyYWlsaW5nQ29tbWVudD10O3JldHVybn1mb3IobGV0IG89cjtvPj1uLnBvc2l0aW9uLnN0YXJ0LmxpbmU7by0tKXtsZXR7dHJhaWxpbmdOb2RlOmF9PWVbby0xXSxjO2lmKGEpYz1hO2Vsc2UgaWYobyE9PXImJmVbby0xXS5jb21tZW50KWM9ZVtvLTFdLmNvbW1lbnQuX3BhcmVudDtlbHNlIGNvbnRpbnVlO2lmKChjLnR5cGU9PT1cInNlcXVlbmNlXCJ8fGMudHlwZT09PVwibWFwcGluZ1wiKSYmKGM9Yy5jaGlsZHJlblswXSksYy50eXBlPT09XCJtYXBwaW5nSXRlbVwiKXtsZXRbbCxmXT1jLmNoaWxkcmVuO2M9QnIobCk/bDpmfWZvcig7Oyl7aWYoZm8oYyx0KSl7JCh0LGMpLGMuZW5kQ29tbWVudHMucHVzaCh0KTtyZXR1cm59aWYoIWMuX3BhcmVudClicmVhaztjPWMuX3BhcmVudH1icmVha31mb3IobGV0IG89cisxO288PW4ucG9zaXRpb24uZW5kLmxpbmU7bysrKXtsZXR7bGVhZGluZ0F0dGFjaGFibGVOb2RlOmF9PWVbby0xXTtpZihhKXskKHQsYSksYS5sZWFkaW5nQ29tbWVudHMucHVzaCh0KTtyZXR1cm59fWxldCBpPW4uY2hpbGRyZW5bMV07JCh0LGkpLGkuZW5kQ29tbWVudHMucHVzaCh0KX1mdW5jdGlvbiBmbyh0LGUpe2lmKHQucG9zaXRpb24uc3RhcnQub2Zmc2V0PGUucG9zaXRpb24uc3RhcnQub2Zmc2V0JiZ0LnBvc2l0aW9uLmVuZC5vZmZzZXQ+ZS5wb3NpdGlvbi5lbmQub2Zmc2V0KXN3aXRjaCh0LnR5cGUpe2Nhc2VcImZsb3dNYXBwaW5nXCI6Y2FzZVwiZmxvd1NlcXVlbmNlXCI6cmV0dXJuIHQuY2hpbGRyZW4ubGVuZ3RoPT09MHx8ZS5wb3NpdGlvbi5zdGFydC5saW5lPnQuY2hpbGRyZW5bdC5jaGlsZHJlbi5sZW5ndGgtMV0ucG9zaXRpb24uZW5kLmxpbmV9aWYoZS5wb3NpdGlvbi5lbmQub2Zmc2V0PHQucG9zaXRpb24uZW5kLm9mZnNldClyZXR1cm4hMTtzd2l0Y2godC50eXBlKXtjYXNlXCJzZXF1ZW5jZUl0ZW1cIjpyZXR1cm4gZS5wb3NpdGlvbi5zdGFydC5jb2x1bW4+dC5wb3NpdGlvbi5zdGFydC5jb2x1bW47Y2FzZVwibWFwcGluZ0tleVwiOmNhc2VcIm1hcHBpbmdWYWx1ZVwiOnJldHVybiBlLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbj50Ll9wYXJlbnQucG9zaXRpb24uc3RhcnQuY29sdW1uJiYodC5jaGlsZHJlbi5sZW5ndGg9PT0wfHx0LmNoaWxkcmVuLmxlbmd0aD09PTEmJnQuY2hpbGRyZW5bMF0udHlwZSE9PVwiYmxvY2tGb2xkZWRcIiYmdC5jaGlsZHJlblswXS50eXBlIT09XCJibG9ja0xpdGVyYWxcIikmJih0LnR5cGU9PT1cIm1hcHBpbmdWYWx1ZVwifHxCcih0KSk7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gQnIodCl7cmV0dXJuIHQucG9zaXRpb24uc3RhcnQhPT10LnBvc2l0aW9uLmVuZCYmKHQuY2hpbGRyZW4ubGVuZ3RoPT09MHx8dC5wb3NpdGlvbi5zdGFydC5vZmZzZXQhPT10LmNoaWxkcmVuWzBdLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldCl9ZnVuY3Rpb24gYih0LGUpe3JldHVybnt0eXBlOnQscG9zaXRpb246ZX19ZnVuY3Rpb24gRnIodCxlLG4pe3JldHVybnsuLi5iKFwicm9vdFwiLHQpLGNoaWxkcmVuOmUsY29tbWVudHM6bn19ZnVuY3Rpb24gY3QodCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwiRE9DVU1FTlRcIjpmb3IobGV0IGU9dC5jb250ZW50cy5sZW5ndGgtMTtlPj0wO2UtLSl0LmNvbnRlbnRzW2VdLnR5cGU9PT1cIkJMQU5LX0xJTkVcIj90LmNvbnRlbnRzLnNwbGljZShlLDEpOmN0KHQuY29udGVudHNbZV0pO2ZvcihsZXQgZT10LmRpcmVjdGl2ZXMubGVuZ3RoLTE7ZT49MDtlLS0pdC5kaXJlY3RpdmVzW2VdLnR5cGU9PT1cIkJMQU5LX0xJTkVcIiYmdC5kaXJlY3RpdmVzLnNwbGljZShlLDEpO2JyZWFrO2Nhc2VcIkZMT1dfTUFQXCI6Y2FzZVwiRkxPV19TRVFcIjpjYXNlXCJNQVBcIjpjYXNlXCJTRVFcIjpmb3IobGV0IGU9dC5pdGVtcy5sZW5ndGgtMTtlPj0wO2UtLSl7bGV0IG49dC5pdGVtc1tlXTtcImNoYXJcImluIG58fChuLnR5cGU9PT1cIkJMQU5LX0xJTkVcIj90Lml0ZW1zLnNwbGljZShlLDEpOmN0KG4pKX1icmVhaztjYXNlXCJNQVBfS0VZXCI6Y2FzZVwiTUFQX1ZBTFVFXCI6Y2FzZVwiU0VRX0lURU1cIjp0Lm5vZGUmJmN0KHQubm9kZSk7YnJlYWs7Y2FzZVwiQUxJQVNcIjpjYXNlXCJCTEFOS19MSU5FXCI6Y2FzZVwiQkxPQ0tfRk9MREVEXCI6Y2FzZVwiQkxPQ0tfTElURVJBTFwiOmNhc2VcIkNPTU1FTlRcIjpjYXNlXCJESVJFQ1RJVkVcIjpjYXNlXCJQTEFJTlwiOmNhc2VcIlFVT1RFX0RPVUJMRVwiOmNhc2VcIlFVT1RFX1NJTkdMRVwiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIG5vZGUgdHlwZSAke0pTT04uc3RyaW5naWZ5KHQudHlwZSl9YCl9fWZ1bmN0aW9uIFgoKXtyZXR1cm57bGVhZGluZ0NvbW1lbnRzOltdfX1mdW5jdGlvbiBvZSh0PW51bGwpe3JldHVybnt0cmFpbGluZ0NvbW1lbnQ6dH19ZnVuY3Rpb24gQigpe3JldHVybnsuLi5YKCksLi4ub2UoKX19ZnVuY3Rpb24gcXIodCxlLG4pe3JldHVybnsuLi5iKFwiYWxpYXNcIix0KSwuLi5CKCksLi4uZSx2YWx1ZTpufX1mdW5jdGlvbiBVcih0LGUpe2xldCBuPXQuY3N0Tm9kZTtyZXR1cm4gcXIoZS50cmFuc2Zvcm1SYW5nZSh7b3JpZ1N0YXJ0Om4udmFsdWVSYW5nZS5vcmlnU3RhcnQtMSxvcmlnRW5kOm4udmFsdWVSYW5nZS5vcmlnRW5kfSksZS50cmFuc2Zvcm1Db250ZW50KHQpLG4ucmF3VmFsdWUpfWZ1bmN0aW9uIEtyKHQpe3JldHVybnsuLi50LHR5cGU6XCJibG9ja0ZvbGRlZFwifX1mdW5jdGlvbiBWcih0LGUsbixyLHMsaSl7cmV0dXJuey4uLmIoXCJibG9ja1ZhbHVlXCIsdCksLi4uWCgpLC4uLmUsY2hvbXBpbmc6bixpbmRlbnQ6cix2YWx1ZTpzLGluZGljYXRvckNvbW1lbnQ6aX19dmFyIGFlOyhmdW5jdGlvbih0KXt0LlRhZz1cIiFcIix0LkFuY2hvcj1cIiZcIix0LkNvbW1lbnQ9XCIjXCJ9KShhZXx8KGFlPXt9KSk7ZnVuY3Rpb24gV3IodCxlKXtyZXR1cm57Li4uYihcImFuY2hvclwiLHQpLHZhbHVlOmV9fWZ1bmN0aW9uIERlKHQsZSl7cmV0dXJuey4uLmIoXCJjb21tZW50XCIsdCksdmFsdWU6ZX19ZnVuY3Rpb24ganIodCxlLG4pe3JldHVybnthbmNob3I6ZSx0YWc6dCxtaWRkbGVDb21tZW50czpufX1mdW5jdGlvbiBRcih0LGUpe3JldHVybnsuLi5iKFwidGFnXCIsdCksdmFsdWU6ZX19ZnVuY3Rpb24ga3QodCxlLG49KCk9PiExKXtsZXQgcj10LmNzdE5vZGUscz1bXSxpPW51bGwsbz1udWxsLGE9bnVsbDtmb3IobGV0IGMgb2Ygci5wcm9wcyl7bGV0IGw9ZS50ZXh0W2Mub3JpZ1N0YXJ0XTtzd2l0Y2gobCl7Y2FzZSBhZS5UYWc6aT1pfHxjLG89UXIoZS50cmFuc2Zvcm1SYW5nZShjKSx0LnRhZyk7YnJlYWs7Y2FzZSBhZS5BbmNob3I6aT1pfHxjLGE9V3IoZS50cmFuc2Zvcm1SYW5nZShjKSxyLmFuY2hvcik7YnJlYWs7Y2FzZSBhZS5Db21tZW50OntsZXQgZj1EZShlLnRyYW5zZm9ybVJhbmdlKGMpLGUudGV4dC5zbGljZShjLm9yaWdTdGFydCsxLGMub3JpZ0VuZCkpO2UuY29tbWVudHMucHVzaChmKSwhbihmKSYmaSYmaS5vcmlnRW5kPD1jLm9yaWdTdGFydCYmYy5vcmlnRW5kPD1yLnZhbHVlUmFuZ2Uub3JpZ1N0YXJ0JiZzLnB1c2goZik7YnJlYWt9ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgbGVhZGluZyBjaGFyYWN0ZXIgJHtKU09OLnN0cmluZ2lmeShsKX1gKX19cmV0dXJuIGpyKG8sYSxzKX12YXIgRW47KGZ1bmN0aW9uKHQpe3QuQ0xJUD1cImNsaXBcIix0LlNUUklQPVwic3RyaXBcIix0LktFRVA9XCJrZWVwXCJ9KShFbnx8KEVuPXt9KSk7ZnVuY3Rpb24gdnQodCxlKXtsZXQgbj10LmNzdE5vZGUscj0xLHM9bi5jaG9tcGluZz09PVwiQ0xJUFwiPzA6MSxvPW4uaGVhZGVyLm9yaWdFbmQtbi5oZWFkZXIub3JpZ1N0YXJ0LXItcyE9PTAsYT1lLnRyYW5zZm9ybVJhbmdlKHtvcmlnU3RhcnQ6bi5oZWFkZXIub3JpZ1N0YXJ0LG9yaWdFbmQ6bi52YWx1ZVJhbmdlLm9yaWdFbmR9KSxjPW51bGwsbD1rdCh0LGUsZj0+e2lmKCEoYS5zdGFydC5vZmZzZXQ8Zi5wb3NpdGlvbi5zdGFydC5vZmZzZXQmJmYucG9zaXRpb24uZW5kLm9mZnNldDxhLmVuZC5vZmZzZXQpKXJldHVybiExO2lmKGMpdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIG11bHRpcGxlIGluZGljYXRvciBjb21tZW50cyBhdCAke2RlKGYucG9zaXRpb24uc3RhcnQpfWApO3JldHVybiBjPWYsITB9KTtyZXR1cm4gVnIoYSxsLEVuW24uY2hvbXBpbmddLG8/bi5ibG9ja0luZGVudDpudWxsLG4uc3RyVmFsdWUsYyl9ZnVuY3Rpb24gSnIodCxlKXtyZXR1cm4gS3IodnQodCxlKSl9ZnVuY3Rpb24gR3IodCl7cmV0dXJuey4uLnQsdHlwZTpcImJsb2NrTGl0ZXJhbFwifX1mdW5jdGlvbiBIcih0LGUpe3JldHVybiBHcih2dCh0LGUpKX1mdW5jdGlvbiBYcih0LGUpe3JldHVybiBEZShlLnRyYW5zZm9ybVJhbmdlKHQucmFuZ2UpLHQuY29tbWVudCl9ZnVuY3Rpb24genIodCxlLG4pe3JldHVybnsuLi5iKFwiZGlyZWN0aXZlXCIsdCksLi4uQigpLG5hbWU6ZSxwYXJhbWV0ZXJzOm59fWZ1bmN0aW9uIFllKHQsZSl7Zm9yKGxldCBuIG9mIHQucHJvcHMpe2xldCByPWUudGV4dFtuLm9yaWdTdGFydF07c3dpdGNoKHIpe2Nhc2UgYWUuQ29tbWVudDplLmNvbW1lbnRzLnB1c2goRGUoZS50cmFuc2Zvcm1SYW5nZShuKSxlLnRleHQuc2xpY2Uobi5vcmlnU3RhcnQrMSxuLm9yaWdFbmQpKSk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgbGVhZGluZyBjaGFyYWN0ZXIgJHtKU09OLnN0cmluZ2lmeShyKX1gKX19fWZ1bmN0aW9uIFpyKHQsZSl7cmV0dXJuIFllKHQsZSksenIoZS50cmFuc2Zvcm1SYW5nZSh0LnJhbmdlKSx0Lm5hbWUsdC5wYXJhbWV0ZXJzKX1mdW5jdGlvbiBlcyh0LGUsbixyKXtyZXR1cm57Li4uYihcImRvY3VtZW50XCIsdCksLi4ub2UociksY2hpbGRyZW46W2Usbl19fWZ1bmN0aW9uIFYodCxlKXtyZXR1cm57c3RhcnQ6dCxlbmQ6ZX19ZnVuY3Rpb24gU24odCl7cmV0dXJue3N0YXJ0OnQsZW5kOnR9fWZ1bmN0aW9uIEYodD1bXSl7cmV0dXJue2VuZENvbW1lbnRzOnR9fWZ1bmN0aW9uIHRzKHQsZSxuKXtyZXR1cm57Li4uYihcImRvY3VtZW50Qm9keVwiLHQpLC4uLkYobiksY2hpbGRyZW46ZT9bZV06W119fWZ1bmN0aW9uIHEodCl7cmV0dXJuIHRbdC5sZW5ndGgtMV19ZnVuY3Rpb24gSXQodCxlKXtsZXQgbj10Lm1hdGNoKGUpO3JldHVybiBuP24uaW5kZXg6LTF9ZnVuY3Rpb24gbnModCxlLG4pe2xldCByPXQuY3N0Tm9kZSx7Y29tbWVudHM6cyxlbmRDb21tZW50czppLGRvY3VtZW50VHJhaWxpbmdDb21tZW50Om8sZG9jdW1lbnRIZWFkVHJhaWxpbmdDb21tZW50OmF9PXVvKHIsZSxuKSxjPWUudHJhbnNmb3JtTm9kZSh0LmNvbnRlbnRzKSx7cG9zaXRpb246bCxkb2N1bWVudEVuZFBvaW50OmZ9PXBvKHIsYyxlKTtyZXR1cm4gZS5jb21tZW50cy5wdXNoKC4uLnMsLi4uaSkse2RvY3VtZW50Qm9keTp0cyhsLGMsaSksZG9jdW1lbnRFbmRQb2ludDpmLGRvY3VtZW50VHJhaWxpbmdDb21tZW50Om8sZG9jdW1lbnRIZWFkVHJhaWxpbmdDb21tZW50OmF9fWZ1bmN0aW9uIHVvKHQsZSxuKXtsZXQgcj1bXSxzPVtdLGk9W10sbz1bXSxhPSExO2ZvcihsZXQgYz10LmNvbnRlbnRzLmxlbmd0aC0xO2M+PTA7Yy0tKXtsZXQgbD10LmNvbnRlbnRzW2NdO2lmKGwudHlwZT09PVwiQ09NTUVOVFwiKXtsZXQgZj1lLnRyYW5zZm9ybU5vZGUobCk7biYmbi5saW5lPT09Zi5wb3NpdGlvbi5zdGFydC5saW5lP28udW5zaGlmdChmKTphP3IudW5zaGlmdChmKTpmLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldD49dC52YWx1ZVJhbmdlLm9yaWdFbmQ/aS51bnNoaWZ0KGYpOnIudW5zaGlmdChmKX1lbHNlIGE9ITB9aWYoaS5sZW5ndGg+MSl0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgbXVsdGlwbGUgZG9jdW1lbnQgdHJhaWxpbmcgY29tbWVudHMgYXQgJHtkZShpWzFdLnBvc2l0aW9uLnN0YXJ0KX1gKTtpZihvLmxlbmd0aD4xKXRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBtdWx0aXBsZSBkb2N1bWVudEhlYWQgdHJhaWxpbmcgY29tbWVudHMgYXQgJHtkZShvWzFdLnBvc2l0aW9uLnN0YXJ0KX1gKTtyZXR1cm57Y29tbWVudHM6cixlbmRDb21tZW50czpzLGRvY3VtZW50VHJhaWxpbmdDb21tZW50OnEoaSl8fG51bGwsZG9jdW1lbnRIZWFkVHJhaWxpbmdDb21tZW50OnEobyl8fG51bGx9fWZ1bmN0aW9uIHBvKHQsZSxuKXtsZXQgcj1JdChuLnRleHQuc2xpY2UodC52YWx1ZVJhbmdlLm9yaWdFbmQpLC9eXFwuXFwuXFwuLykscz1yPT09LTE/dC52YWx1ZVJhbmdlLm9yaWdFbmQ6TWF0aC5tYXgoMCx0LnZhbHVlUmFuZ2Uub3JpZ0VuZC0xKTtuLnRleHRbcy0xXT09PVwiXFxyXCImJnMtLTtsZXQgaT1uLnRyYW5zZm9ybVJhbmdlKHtvcmlnU3RhcnQ6ZSE9PW51bGw/ZS5wb3NpdGlvbi5zdGFydC5vZmZzZXQ6cyxvcmlnRW5kOnN9KSxvPXI9PT0tMT9pLmVuZDpuLnRyYW5zZm9ybU9mZnNldCh0LnZhbHVlUmFuZ2Uub3JpZ0VuZCszKTtyZXR1cm57cG9zaXRpb246aSxkb2N1bWVudEVuZFBvaW50Om99fWZ1bmN0aW9uIHJzKHQsZSxuLHIpe3JldHVybnsuLi5iKFwiZG9jdW1lbnRIZWFkXCIsdCksLi4uRihuKSwuLi5vZShyKSxjaGlsZHJlbjplfX1mdW5jdGlvbiBzcyh0LGUpe2xldCBuPXQuY3N0Tm9kZSx7ZGlyZWN0aXZlczpyLGNvbW1lbnRzOnMsZW5kQ29tbWVudHM6aX09bW8obixlKSx7cG9zaXRpb246byxlbmRNYXJrZXJQb2ludDphfT1obyhuLHIsZSk7cmV0dXJuIGUuY29tbWVudHMucHVzaCguLi5zLC4uLmkpLHtjcmVhdGVEb2N1bWVudEhlYWRXaXRoVHJhaWxpbmdDb21tZW50Omw9PihsJiZlLmNvbW1lbnRzLnB1c2gobCkscnMobyxyLGksbCkpLGRvY3VtZW50SGVhZEVuZE1hcmtlclBvaW50OmF9fWZ1bmN0aW9uIG1vKHQsZSl7bGV0IG49W10scj1bXSxzPVtdLGk9ITE7Zm9yKGxldCBvPXQuZGlyZWN0aXZlcy5sZW5ndGgtMTtvPj0wO28tLSl7bGV0IGE9ZS50cmFuc2Zvcm1Ob2RlKHQuZGlyZWN0aXZlc1tvXSk7YS50eXBlPT09XCJjb21tZW50XCI/aT9yLnVuc2hpZnQoYSk6cy51bnNoaWZ0KGEpOihpPSEwLG4udW5zaGlmdChhKSl9cmV0dXJue2RpcmVjdGl2ZXM6bixjb21tZW50czpyLGVuZENvbW1lbnRzOnN9fWZ1bmN0aW9uIGhvKHQsZSxuKXtsZXQgcj1JdChuLnRleHQuc2xpY2UoMCx0LnZhbHVlUmFuZ2Uub3JpZ1N0YXJ0KSwvLS0tXFxzKiQvKTtyPjAmJiEvW1xcclxcbl0vLnRlc3Qobi50ZXh0W3ItMV0pJiYocj0tMSk7bGV0IHM9cj09PS0xP3tvcmlnU3RhcnQ6dC52YWx1ZVJhbmdlLm9yaWdTdGFydCxvcmlnRW5kOnQudmFsdWVSYW5nZS5vcmlnU3RhcnR9OntvcmlnU3RhcnQ6cixvcmlnRW5kOnIrM307cmV0dXJuIGUubGVuZ3RoIT09MCYmKHMub3JpZ1N0YXJ0PWVbMF0ucG9zaXRpb24uc3RhcnQub2Zmc2V0KSx7cG9zaXRpb246bi50cmFuc2Zvcm1SYW5nZShzKSxlbmRNYXJrZXJQb2ludDpyPT09LTE/bnVsbDpuLnRyYW5zZm9ybU9mZnNldChyKX19ZnVuY3Rpb24gaXModCxlKXtsZXR7Y3JlYXRlRG9jdW1lbnRIZWFkV2l0aFRyYWlsaW5nQ29tbWVudDpuLGRvY3VtZW50SGVhZEVuZE1hcmtlclBvaW50OnJ9PXNzKHQsZSkse2RvY3VtZW50Qm9keTpzLGRvY3VtZW50RW5kUG9pbnQ6aSxkb2N1bWVudFRyYWlsaW5nQ29tbWVudDpvLGRvY3VtZW50SGVhZFRyYWlsaW5nQ29tbWVudDphfT1ucyh0LGUsciksYz1uKGEpO3JldHVybiBvJiZlLmNvbW1lbnRzLnB1c2gobyksZXMoVihjLnBvc2l0aW9uLnN0YXJ0LGkpLGMscyxvKX1mdW5jdGlvbiBQdCh0LGUsbil7cmV0dXJuey4uLmIoXCJmbG93Q29sbGVjdGlvblwiLHQpLC4uLkIoKSwuLi5GKCksLi4uZSxjaGlsZHJlbjpufX1mdW5jdGlvbiBvcyh0LGUsbil7cmV0dXJuey4uLlB0KHQsZSxuKSx0eXBlOlwiZmxvd01hcHBpbmdcIn19ZnVuY3Rpb24gX3QodCxlLG4pe3JldHVybnsuLi5iKFwiZmxvd01hcHBpbmdJdGVtXCIsdCksLi4uWCgpLGNoaWxkcmVuOltlLG5dfX1mdW5jdGlvbiBjZSh0LGUpe2xldCBuPVtdO2ZvcihsZXQgciBvZiB0KXImJlwidHlwZVwiaW4gciYmci50eXBlPT09XCJDT01NRU5UXCI/ZS5jb21tZW50cy5wdXNoKGUudHJhbnNmb3JtTm9kZShyKSk6bi5wdXNoKHIpO3JldHVybiBufWZ1bmN0aW9uIHh0KHQpe2xldFtlLG5dPVtcIj9cIixcIjpcIl0ubWFwKHI9PntsZXQgcz10LmZpbmQoaT0+XCJjaGFyXCJpbiBpJiZpLmNoYXI9PT1yKTtyZXR1cm4gcz97b3JpZ1N0YXJ0OnMub3JpZ09mZnNldCxvcmlnRW5kOnMub3JpZ09mZnNldCsxfTpudWxsfSk7cmV0dXJue2FkZGl0aW9uYWxLZXlSYW5nZTplLGFkZGl0aW9uYWxWYWx1ZVJhbmdlOm59fWZ1bmN0aW9uIFJ0KHQsZSl7bGV0IG49ZTtyZXR1cm4gcj0+dC5zbGljZShuLG49cil9ZnVuY3Rpb24gRHQodCl7bGV0IGU9W10sbj1SdCh0LDEpLHI9ITE7Zm9yKGxldCBzPTE7czx0Lmxlbmd0aC0xO3MrKyl7bGV0IGk9dFtzXTtpZihcImNoYXJcImluIGkmJmkuY2hhcj09PVwiLFwiKXtlLnB1c2gobihzKSksbihzKzEpLHI9ITE7Y29udGludWV9cj0hMH1yZXR1cm4gciYmZS5wdXNoKG4odC5sZW5ndGgtMSkpLGV9ZnVuY3Rpb24gd24odCxlKXtyZXR1cm57Li4uYihcIm1hcHBpbmdLZXlcIix0KSwuLi5vZSgpLC4uLkYoKSxjaGlsZHJlbjplP1tlXTpbXX19ZnVuY3Rpb24gYm4odCxlKXtyZXR1cm57Li4uYihcIm1hcHBpbmdWYWx1ZVwiLHQpLC4uLkIoKSwuLi5GKCksY2hpbGRyZW46ZT9bZV06W119fWZ1bmN0aW9uICRlKHQsZSxuLHIscyl7bGV0IGk9ZS50cmFuc2Zvcm1Ob2RlKHQua2V5KSxvPWUudHJhbnNmb3JtTm9kZSh0LnZhbHVlKSxhPWl8fHI/d24oZS50cmFuc2Zvcm1SYW5nZSh7b3JpZ1N0YXJ0OnI/ci5vcmlnU3RhcnQ6aS5wb3NpdGlvbi5zdGFydC5vZmZzZXQsb3JpZ0VuZDppP2kucG9zaXRpb24uZW5kLm9mZnNldDpyLm9yaWdTdGFydCsxfSksaSk6bnVsbCxjPW98fHM/Ym4oZS50cmFuc2Zvcm1SYW5nZSh7b3JpZ1N0YXJ0OnM/cy5vcmlnU3RhcnQ6by5wb3NpdGlvbi5zdGFydC5vZmZzZXQsb3JpZ0VuZDpvP28ucG9zaXRpb24uZW5kLm9mZnNldDpzLm9yaWdTdGFydCsxfSksbyk6bnVsbDtyZXR1cm4gbihWKGE/YS5wb3NpdGlvbi5zdGFydDpjLnBvc2l0aW9uLnN0YXJ0LGM/Yy5wb3NpdGlvbi5lbmQ6YS5wb3NpdGlvbi5lbmQpLGF8fHduKFNuKGMucG9zaXRpb24uc3RhcnQpLG51bGwpLGN8fGJuKFNuKGEucG9zaXRpb24uZW5kKSxudWxsKSl9ZnVuY3Rpb24gYXModCxlKXtsZXQgbj1jZSh0LmNzdE5vZGUuaXRlbXMsZSkscj1EdChuKSxzPXQuaXRlbXMubWFwKChhLGMpPT57bGV0IGw9cltjXSx7YWRkaXRpb25hbEtleVJhbmdlOmYsYWRkaXRpb25hbFZhbHVlUmFuZ2U6bX09eHQobCk7cmV0dXJuICRlKGEsZSxfdCxmLG0pfSksaT1uWzBdLG89cShuKTtyZXR1cm4gb3MoZS50cmFuc2Zvcm1SYW5nZSh7b3JpZ1N0YXJ0Omkub3JpZ09mZnNldCxvcmlnRW5kOm8ub3JpZ09mZnNldCsxfSksZS50cmFuc2Zvcm1Db250ZW50KHQpLHMpfWZ1bmN0aW9uIGNzKHQsZSxuKXtyZXR1cm57Li4uUHQodCxlLG4pLHR5cGU6XCJmbG93U2VxdWVuY2VcIn19ZnVuY3Rpb24gbHModCxlKXtyZXR1cm57Li4uYihcImZsb3dTZXF1ZW5jZUl0ZW1cIix0KSxjaGlsZHJlbjpbZV19fWZ1bmN0aW9uIGZzKHQsZSl7bGV0IG49Y2UodC5jc3ROb2RlLml0ZW1zLGUpLHI9RHQobikscz10Lml0ZW1zLm1hcCgoYSxjKT0+e2lmKGEudHlwZSE9PVwiUEFJUlwiKXtsZXQgbD1lLnRyYW5zZm9ybU5vZGUoYSk7cmV0dXJuIGxzKFYobC5wb3NpdGlvbi5zdGFydCxsLnBvc2l0aW9uLmVuZCksbCl9ZWxzZXtsZXQgbD1yW2NdLHthZGRpdGlvbmFsS2V5UmFuZ2U6ZixhZGRpdGlvbmFsVmFsdWVSYW5nZTptfT14dChsKTtyZXR1cm4gJGUoYSxlLF90LGYsbSl9fSksaT1uWzBdLG89cShuKTtyZXR1cm4gY3MoZS50cmFuc2Zvcm1SYW5nZSh7b3JpZ1N0YXJ0Omkub3JpZ09mZnNldCxvcmlnRW5kOm8ub3JpZ09mZnNldCsxfSksZS50cmFuc2Zvcm1Db250ZW50KHQpLHMpfWZ1bmN0aW9uIHVzKHQsZSxuKXtyZXR1cm57Li4uYihcIm1hcHBpbmdcIix0KSwuLi5YKCksLi4uZSxjaGlsZHJlbjpufX1mdW5jdGlvbiBwcyh0LGUsbil7cmV0dXJuey4uLmIoXCJtYXBwaW5nSXRlbVwiLHQpLC4uLlgoKSxjaGlsZHJlbjpbZSxuXX19ZnVuY3Rpb24gbXModCxlKXtsZXQgbj10LmNzdE5vZGU7bi5pdGVtcy5maWx0ZXIobz0+by50eXBlPT09XCJNQVBfS0VZXCJ8fG8udHlwZT09PVwiTUFQX1ZBTFVFXCIpLmZvckVhY2gobz0+WWUobyxlKSk7bGV0IHI9Y2Uobi5pdGVtcyxlKSxzPWdvKHIpLGk9dC5pdGVtcy5tYXAoKG8sYSk9PntsZXQgYz1zW2FdLFtsLGZdPWNbMF0udHlwZT09PVwiTUFQX1ZBTFVFXCI/W251bGwsY1swXS5yYW5nZV06W2NbMF0ucmFuZ2UsYy5sZW5ndGg9PT0xP251bGw6Y1sxXS5yYW5nZV07cmV0dXJuICRlKG8sZSxwcyxsLGYpfSk7cmV0dXJuIHVzKFYoaVswXS5wb3NpdGlvbi5zdGFydCxxKGkpLnBvc2l0aW9uLmVuZCksZS50cmFuc2Zvcm1Db250ZW50KHQpLGkpfWZ1bmN0aW9uIGdvKHQpe2xldCBlPVtdLG49UnQodCwwKSxyPSExO2ZvcihsZXQgcz0wO3M8dC5sZW5ndGg7cysrKXtpZih0W3NdLnR5cGU9PT1cIk1BUF9WQUxVRVwiKXtlLnB1c2gobihzKzEpKSxyPSExO2NvbnRpbnVlfXImJmUucHVzaChuKHMpKSxyPSEwfXJldHVybiByJiZlLnB1c2gobigxLzApKSxlfWZ1bmN0aW9uIGhzKHQsZSxuKXtyZXR1cm57Li4uYihcInBsYWluXCIsdCksLi4uQigpLC4uLmUsdmFsdWU6bn19ZnVuY3Rpb24gZ3ModCxlLG4pe2ZvcihsZXQgcj1lO3I+PTA7ci0tKWlmKG4udGVzdCh0W3JdKSlyZXR1cm4gcjtyZXR1cm4tMX1mdW5jdGlvbiBkcyh0LGUpe2xldCBuPXQuY3N0Tm9kZTtyZXR1cm4gaHMoZS50cmFuc2Zvcm1SYW5nZSh7b3JpZ1N0YXJ0Om4udmFsdWVSYW5nZS5vcmlnU3RhcnQsb3JpZ0VuZDpncyhlLnRleHQsbi52YWx1ZVJhbmdlLm9yaWdFbmQtMSwvXFxTLykrMX0pLGUudHJhbnNmb3JtQ29udGVudCh0KSxuLnN0clZhbHVlKX1mdW5jdGlvbiB5cyh0KXtyZXR1cm57Li4udCx0eXBlOlwicXVvdGVEb3VibGVcIn19ZnVuY3Rpb24gRXModCxlLG4pe3JldHVybnsuLi5iKFwicXVvdGVWYWx1ZVwiLHQpLC4uLmUsLi4uQigpLHZhbHVlOm59fWZ1bmN0aW9uIFl0KHQsZSl7bGV0IG49dC5jc3ROb2RlO3JldHVybiBFcyhlLnRyYW5zZm9ybVJhbmdlKG4udmFsdWVSYW5nZSksZS50cmFuc2Zvcm1Db250ZW50KHQpLG4uc3RyVmFsdWUpfWZ1bmN0aW9uIFNzKHQsZSl7cmV0dXJuIHlzKFl0KHQsZSkpfWZ1bmN0aW9uIHdzKHQpe3JldHVybnsuLi50LHR5cGU6XCJxdW90ZVNpbmdsZVwifX1mdW5jdGlvbiBicyh0LGUpe3JldHVybiB3cyhZdCh0LGUpKX1mdW5jdGlvbiBOcyh0LGUsbil7cmV0dXJuey4uLmIoXCJzZXF1ZW5jZVwiLHQpLC4uLlgoKSwuLi5GKCksLi4uZSxjaGlsZHJlbjpufX1mdW5jdGlvbiBPcyh0LGUpe3JldHVybnsuLi5iKFwic2VxdWVuY2VJdGVtXCIsdCksLi4uQigpLC4uLkYoKSxjaGlsZHJlbjplP1tlXTpbXX19ZnVuY3Rpb24gTHModCxlKXtsZXQgcj1jZSh0LmNzdE5vZGUuaXRlbXMsZSkubWFwKChzLGkpPT57WWUocyxlKTtsZXQgbz1lLnRyYW5zZm9ybU5vZGUodC5pdGVtc1tpXSk7cmV0dXJuIE9zKFYoZS50cmFuc2Zvcm1PZmZzZXQocy52YWx1ZVJhbmdlLm9yaWdTdGFydCksbz09PW51bGw/ZS50cmFuc2Zvcm1PZmZzZXQocy52YWx1ZVJhbmdlLm9yaWdTdGFydCsxKTpvLnBvc2l0aW9uLmVuZCksbyl9KTtyZXR1cm4gTnMoVihyWzBdLnBvc2l0aW9uLnN0YXJ0LHEocikucG9zaXRpb24uZW5kKSxlLnRyYW5zZm9ybUNvbnRlbnQodCkscil9ZnVuY3Rpb24gQXModCxlKXtpZih0PT09bnVsbHx8dC50eXBlPT09dm9pZCAwJiZ0LnZhbHVlPT09bnVsbClyZXR1cm4gbnVsbDtzd2l0Y2godC50eXBlKXtjYXNlXCJBTElBU1wiOnJldHVybiBVcih0LGUpO2Nhc2VcIkJMT0NLX0ZPTERFRFwiOnJldHVybiBKcih0LGUpO2Nhc2VcIkJMT0NLX0xJVEVSQUxcIjpyZXR1cm4gSHIodCxlKTtjYXNlXCJDT01NRU5UXCI6cmV0dXJuIFhyKHQsZSk7Y2FzZVwiRElSRUNUSVZFXCI6cmV0dXJuIFpyKHQsZSk7Y2FzZVwiRE9DVU1FTlRcIjpyZXR1cm4gaXModCxlKTtjYXNlXCJGTE9XX01BUFwiOnJldHVybiBhcyh0LGUpO2Nhc2VcIkZMT1dfU0VRXCI6cmV0dXJuIGZzKHQsZSk7Y2FzZVwiTUFQXCI6cmV0dXJuIG1zKHQsZSk7Y2FzZVwiUExBSU5cIjpyZXR1cm4gZHModCxlKTtjYXNlXCJRVU9URV9ET1VCTEVcIjpyZXR1cm4gU3ModCxlKTtjYXNlXCJRVU9URV9TSU5HTEVcIjpyZXR1cm4gYnModCxlKTtjYXNlXCJTRVFcIjpyZXR1cm4gTHModCxlKTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBub2RlIHR5cGUgJHt0LnR5cGV9YCl9fWZ1bmN0aW9uIFRzKHQsZSxuKXtsZXQgcj1uZXcgU3ludGF4RXJyb3IodCk7cmV0dXJuIHIubmFtZT1cIllBTUxTeW50YXhFcnJvclwiLHIuc291cmNlPWUsci5wb3NpdGlvbj1uLHJ9ZnVuY3Rpb24gQ3ModCxlKXtsZXQgbj10LnNvdXJjZS5yYW5nZXx8dC5zb3VyY2UudmFsdWVSYW5nZTtyZXR1cm4gVHModC5tZXNzYWdlLGUudGV4dCxlLnRyYW5zZm9ybVJhbmdlKG4pKX1mdW5jdGlvbiBNcyh0LGUsbil7cmV0dXJue29mZnNldDp0LGxpbmU6ZSxjb2x1bW46bn19ZnVuY3Rpb24ga3ModCxlKXt0PDA/dD0wOnQ+ZS50ZXh0Lmxlbmd0aCYmKHQ9ZS50ZXh0Lmxlbmd0aCk7bGV0IG49ZS5sb2NhdG9yLmxvY2F0aW9uRm9ySW5kZXgodCk7cmV0dXJuIE1zKHQsbi5saW5lKzEsbi5jb2x1bW4rMSl9ZnVuY3Rpb24gdnModCxlKXtyZXR1cm4gVihlLnRyYW5zZm9ybU9mZnNldCh0Lm9yaWdTdGFydCksZS50cmFuc2Zvcm1PZmZzZXQodC5vcmlnRW5kKSl9ZnVuY3Rpb24gSXModCl7aWYoIXQuc2V0T3JpZ1JhbmdlcygpKXtsZXQgZT1uPT57aWYoeW8obikpcmV0dXJuIG4ub3JpZ1N0YXJ0PW4uc3RhcnQsbi5vcmlnRW5kPW4uZW5kLCEwO2lmKEVvKG4pKXJldHVybiBuLm9yaWdPZmZzZXQ9bi5vZmZzZXQsITB9O3QuZm9yRWFjaChuPT5ObihuLGUpKX19ZnVuY3Rpb24gTm4odCxlKXtpZighKCF0fHx0eXBlb2YgdCE9XCJvYmplY3RcIikmJmUodCkhPT0hMClmb3IobGV0IG4gb2YgT2JqZWN0LmtleXModCkpe2lmKG49PT1cImNvbnRleHRcInx8bj09PVwiZXJyb3JcIiljb250aW51ZTtsZXQgcj10W25dO0FycmF5LmlzQXJyYXkocik/ci5mb3JFYWNoKHM9Pk5uKHMsZSkpOk5uKHIsZSl9fWZ1bmN0aW9uIHlvKHQpe3JldHVybiB0eXBlb2YgdC5zdGFydD09XCJudW1iZXJcIn1mdW5jdGlvbiBFbyh0KXtyZXR1cm4gdHlwZW9mIHQub2Zmc2V0PT1cIm51bWJlclwifWZ1bmN0aW9uIE9uKHQpe2lmKFwiY2hpbGRyZW5cImluIHQpe2lmKHQuY2hpbGRyZW4ubGVuZ3RoPT09MSl7bGV0IGU9dC5jaGlsZHJlblswXTtpZihlLnR5cGU9PT1cInBsYWluXCImJmUudGFnPT09bnVsbCYmZS5hbmNob3I9PT1udWxsJiZlLnZhbHVlPT09XCJcIilyZXR1cm4gdC5jaGlsZHJlbi5zcGxpY2UoMCwxKSx0fXQuY2hpbGRyZW4uZm9yRWFjaChPbil9cmV0dXJuIHR9ZnVuY3Rpb24gTG4odCxlLG4scil7bGV0IHM9ZSh0KTtyZXR1cm4gaT0+e3IocyxpKSYmbih0LHM9aSl9fWZ1bmN0aW9uIEFuKHQpe2lmKHQ9PT1udWxsfHwhKFwiY2hpbGRyZW5cImluIHQpKXJldHVybjtsZXQgZT10LmNoaWxkcmVuO2lmKGUuZm9yRWFjaChBbiksdC50eXBlPT09XCJkb2N1bWVudFwiKXtsZXRbaSxvXT10LmNoaWxkcmVuO2kucG9zaXRpb24uc3RhcnQub2Zmc2V0PT09aS5wb3NpdGlvbi5lbmQub2Zmc2V0P2kucG9zaXRpb24uc3RhcnQ9aS5wb3NpdGlvbi5lbmQ9by5wb3NpdGlvbi5zdGFydDpvLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldD09PW8ucG9zaXRpb24uZW5kLm9mZnNldCYmKG8ucG9zaXRpb24uc3RhcnQ9by5wb3NpdGlvbi5lbmQ9aS5wb3NpdGlvbi5lbmQpfWxldCBuPUxuKHQucG9zaXRpb24sU28sd28sT28pLHI9TG4odC5wb3NpdGlvbixibyxObyxMbyk7XCJlbmRDb21tZW50c1wiaW4gdCYmdC5lbmRDb21tZW50cy5sZW5ndGghPT0wJiYobih0LmVuZENvbW1lbnRzWzBdLnBvc2l0aW9uLnN0YXJ0KSxyKHEodC5lbmRDb21tZW50cykucG9zaXRpb24uZW5kKSk7bGV0IHM9ZS5maWx0ZXIoaT0+aSE9PW51bGwpO2lmKHMubGVuZ3RoIT09MCl7bGV0IGk9c1swXSxvPXEocyk7bihpLnBvc2l0aW9uLnN0YXJ0KSxyKG8ucG9zaXRpb24uZW5kKSxcImxlYWRpbmdDb21tZW50c1wiaW4gaSYmaS5sZWFkaW5nQ29tbWVudHMubGVuZ3RoIT09MCYmbihpLmxlYWRpbmdDb21tZW50c1swXS5wb3NpdGlvbi5zdGFydCksXCJ0YWdcImluIGkmJmkudGFnJiZuKGkudGFnLnBvc2l0aW9uLnN0YXJ0KSxcImFuY2hvclwiaW4gaSYmaS5hbmNob3ImJm4oaS5hbmNob3IucG9zaXRpb24uc3RhcnQpLFwidHJhaWxpbmdDb21tZW50XCJpbiBvJiZvLnRyYWlsaW5nQ29tbWVudCYmcihvLnRyYWlsaW5nQ29tbWVudC5wb3NpdGlvbi5lbmQpfX1mdW5jdGlvbiBTbyh0KXtyZXR1cm4gdC5zdGFydH1mdW5jdGlvbiB3byh0LGUpe3Quc3RhcnQ9ZX1mdW5jdGlvbiBibyh0KXtyZXR1cm4gdC5lbmR9ZnVuY3Rpb24gTm8odCxlKXt0LmVuZD1lfWZ1bmN0aW9uIE9vKHQsZSl7cmV0dXJuIGUub2Zmc2V0PHQub2Zmc2V0fWZ1bmN0aW9uIExvKHQsZSl7cmV0dXJuIGUub2Zmc2V0PnQub2Zmc2V0fXZhciB3aT1zcihFaSgpLDEpO3ZhciBHPXNyKFNpKCksMSksS209Ry5kZWZhdWx0LmZpbmRQYWlyLFZtPUcuZGVmYXVsdC50b0pTT04sV209Ry5kZWZhdWx0LnBhcnNlTWFwLGptPUcuZGVmYXVsdC5wYXJzZVNlcSxRbT1HLmRlZmF1bHQuc3RyaW5naWZ5TnVtYmVyLEptPUcuZGVmYXVsdC5zdHJpbmdpZnlTdHJpbmcsR209Ry5kZWZhdWx0LlR5cGUsVmE9Ry5kZWZhdWx0LllBTUxFcnJvcixIbT1HLmRlZmF1bHQuWUFNTFJlZmVyZW5jZUVycm9yLGVyPUcuZGVmYXVsdC5ZQU1MU2VtYW50aWNFcnJvcixXYT1HLmRlZmF1bHQuWUFNTFN5bnRheEVycm9yLFhtPUcuZGVmYXVsdC5ZQU1MV2FybmluZzt2YXJ7RG9jdW1lbnQ6YmkscGFyc2VDU1Q6Tml9PXdpLmRlZmF1bHQ7ZnVuY3Rpb24gT2kodCl7bGV0IGU9TmkodCk7SXMoZSk7bGV0IG49ZS5tYXAoYT0+bmV3IGJpKHttZXJnZTohMSxrZWVwQ3N0Tm9kZXM6ITB9KS5wYXJzZShhKSkscj1uZXcgRHIodCkscz1bXSxpPXt0ZXh0OnQsbG9jYXRvcjpyLGNvbW1lbnRzOnMsdHJhbnNmb3JtT2Zmc2V0OmE9PmtzKGEsaSksdHJhbnNmb3JtUmFuZ2U6YT0+dnMoYSxpKSx0cmFuc2Zvcm1Ob2RlOmE9PkFzKGEsaSksdHJhbnNmb3JtQ29udGVudDphPT5rdChhLGkpfTtmb3IobGV0IGEgb2Ygbilmb3IobGV0IGMgb2YgYS5lcnJvcnMpaWYoIShjIGluc3RhbmNlb2YgZXImJmMubWVzc2FnZT09PSdNYXAga2V5cyBtdXN0IGJlIHVuaXF1ZTsgXCI8PFwiIGlzIHJlcGVhdGVkJykpdGhyb3cgQ3MoYyxpKTtuLmZvckVhY2goYT0+Y3QoYS5jc3ROb2RlKSk7bGV0IG89RnIoaS50cmFuc2Zvcm1SYW5nZSh7b3JpZ1N0YXJ0OjAsb3JpZ0VuZDppLnRleHQubGVuZ3RofSksbi5tYXAoaS50cmFuc2Zvcm1Ob2RlKSxzKTtyZXR1cm4gWXIobyksQW4obyksT24obyksb31mdW5jdGlvbiBRYSh0LGUpe2xldCBuPW5ldyBTeW50YXhFcnJvcih0K1wiIChcIitlLmxvYy5zdGFydC5saW5lK1wiOlwiK2UubG9jLnN0YXJ0LmNvbHVtbitcIilcIik7cmV0dXJuIE9iamVjdC5hc3NpZ24obixlKX12YXIgTGk9UWE7ZnVuY3Rpb24gSmEodCl7dHJ5e2xldCBlPU9pKHQpO3JldHVybiBkZWxldGUgZS5jb21tZW50cyxlfWNhdGNoKGUpe3Rocm93IGUhPW51bGwmJmUucG9zaXRpb24/TGkoZS5tZXNzYWdlLHtsb2M6ZS5wb3NpdGlvbixjYXVzZTplfSk6ZX19dmFyIEdhPXthc3RGb3JtYXQ6XCJ5YW1sXCIscGFyc2U6SmEsaGFzUHJhZ21hOlNyLGxvY1N0YXJ0OlBlLGxvY0VuZDp5cn07dmFyIEhhPXt5YW1sOlByfTt2YXIgT2g9bnI7ZXhwb3J0e09oIGFzIGRlZmF1bHQsX3IgYXMgbGFuZ3VhZ2VzLHhyIGFzIG9wdGlvbnMsdHIgYXMgcGFyc2VycyxIYSBhcyBwcmludGVyc307XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxLQUFHLE9BQU87QUFBTyxJQUFJLEtBQUcsT0FBTztBQUFlLElBQUksS0FBRyxPQUFPO0FBQXlCLElBQUksS0FBRyxPQUFPO0FBQW9CLElBQUksS0FBRyxPQUFPLGdCQUFlLEtBQUcsT0FBTyxVQUFVO0FBQWUsSUFBSSxLQUFHLENBQUMsR0FBRSxNQUFJLE9BQUssS0FBRyxHQUFHLElBQUUsRUFBQyxTQUFRLEdBQUUsR0FBRyxTQUFRLENBQUMsR0FBRSxFQUFFLFVBQVMsS0FBRyxDQUFDLEdBQUUsTUFBSTtBQUFDLFdBQVEsS0FBSyxFQUFFLElBQUcsR0FBRSxHQUFFLEVBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxZQUFXLEtBQUUsQ0FBQztBQUFDLEdBQUUsS0FBRyxDQUFDLEdBQUUsR0FBRSxHQUFFLE1BQUk7QUFBQyxNQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxLQUFHLFdBQVcsVUFBUSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUMsR0FBRyxLQUFLLEdBQUUsQ0FBQyxLQUFHLE1BQUksS0FBRyxHQUFHLEdBQUUsR0FBRSxFQUFDLEtBQUksTUFBSSxFQUFFLENBQUMsR0FBRSxZQUFXLEVBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxNQUFJLEVBQUUsV0FBVSxDQUFDO0FBQUUsU0FBTztBQUFDO0FBQUUsSUFBSSxLQUFHLENBQUMsR0FBRSxHQUFFLE9BQUssSUFBRSxLQUFHLE9BQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUEsR0FBRyxHQUF3QixHQUFHLEdBQUUsV0FBVSxFQUFDLE9BQU0sR0FBRSxZQUFXLEtBQUUsQ0FBQyxHQUFJLENBQUM7QUFBRyxJQUFJLEtBQUcsR0FBRyxPQUFHO0FBQWMsTUFBSSxLQUFHLEVBQUMsUUFBTyxLQUFJLFNBQVEsS0FBSSxLQUFJLEtBQUksZ0JBQWUsS0FBSSxjQUFhLElBQUcsR0FBRSxLQUFHLEVBQUMsT0FBTSxTQUFRLFlBQVcsY0FBYSxjQUFhLGdCQUFlLGVBQWMsaUJBQWdCLFNBQVEsV0FBVSxXQUFVLGFBQVksVUFBUyxZQUFXLFVBQVMsWUFBVyxVQUFTLFlBQVcsS0FBSSxPQUFNLFNBQVEsV0FBVSxXQUFVLGFBQVksT0FBTSxTQUFRLGNBQWEsZ0JBQWUsY0FBYSxnQkFBZSxLQUFJLE9BQU0sVUFBUyxXQUFVLEdBQUUsS0FBRyxzQkFBcUIsS0FBRyxFQUFDLEtBQUkseUJBQXdCLEtBQUkseUJBQXdCLEtBQUksd0JBQXVCO0FBQUUsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQVE7QUFBQSxDQUM3cUM7QUFBRSxXQUFLLE1BQUksS0FBSSxNQUFHLEdBQUUsRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLEVBQUUsUUFBUTtBQUFBLEdBQ3pDLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBSSxHQUFFO0FBQUUsV0FBTyxPQUFPLEtBQUcsWUFBVSxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsTUFBSSxNQUFNLFFBQVEsQ0FBQyxNQUFJLElBQUUsRUFBRSxDQUFDLElBQUcsS0FBRyxFQUFFLFlBQVUsRUFBRSxlQUFhLEVBQUUsYUFBVyxHQUFHLEVBQUUsUUFBUSxHQUFHLElBQUcsSUFBRSxFQUFFLFlBQVcsSUFBRSxFQUFFLFFBQVEsT0FBTSxFQUFDLFlBQVcsR0FBRSxLQUFJLEVBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsT0FBTyxLQUFHLFlBQVUsSUFBRSxFQUFFLFFBQU87QUFBSyxRQUFHLEVBQUMsWUFBVyxHQUFFLEtBQUksRUFBQyxJQUFFLEdBQUcsQ0FBQztBQUFFLFFBQUcsQ0FBQyxLQUFHLENBQUMsS0FBRyxJQUFFLEVBQUUsT0FBTyxRQUFPO0FBQUssYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUcsSUFBRSxFQUFFLFFBQU0sRUFBQyxNQUFLLEdBQUUsS0FBSSxJQUFFLEVBQUUsSUFBRSxDQUFDLElBQUUsRUFBQztBQUFFLFVBQUcsTUFBSSxFQUFFLFFBQU0sRUFBQyxNQUFLLElBQUUsR0FBRSxLQUFJLEVBQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxJQUFFLEVBQUU7QUFBTyxXQUFNLEVBQUMsTUFBSyxHQUFFLEtBQUksSUFBRSxFQUFFLElBQUUsQ0FBQyxJQUFFLEVBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBQyxZQUFXLEdBQUUsS0FBSSxFQUFDLElBQUUsR0FBRyxDQUFDO0FBQUUsUUFBRyxDQUFDLEtBQUcsRUFBRSxLQUFHLE1BQUksSUFBRSxFQUFFLE9BQU8sUUFBTztBQUFLLFFBQUksSUFBRSxFQUFFLElBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsV0FBSyxLQUFHLElBQUUsS0FBRyxFQUFFLElBQUUsQ0FBQyxNQUFJO0FBQUEsSUFDM21CLEdBQUU7QUFBRSxXQUFPLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEVBQUMsT0FBTSxHQUFFLEtBQUksRUFBQyxHQUFFLEdBQUUsSUFBRSxJQUFHO0FBQUMsUUFBSSxJQUFFLEdBQUcsRUFBRSxNQUFLLENBQUM7QUFBRSxRQUFHLENBQUMsRUFBRSxRQUFPO0FBQUssUUFBRyxFQUFDLEtBQUksRUFBQyxJQUFFO0FBQUUsUUFBRyxFQUFFLFNBQU8sRUFBRSxLQUFHLEtBQUcsSUFBRSxHQUFHLEtBQUUsRUFBRSxPQUFPLEdBQUUsSUFBRSxDQUFDLElBQUU7QUFBQSxTQUFhO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxJQUFFLENBQUM7QUFBRSxRQUFFLFNBQU8sSUFBRSxNQUFJLElBQUUsRUFBRSxPQUFPLEdBQUUsSUFBRSxJQUFFLENBQUMsSUFBRSxNQUFVLEtBQUcsRUFBRSxTQUFPLEdBQUUsSUFBRSxNQUFTLEVBQUUsT0FBTyxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBSSxJQUFFLEdBQUUsSUFBRTtBQUFHLFVBQUksRUFBRSxTQUFPLEVBQUUsUUFBTSxLQUFHLEVBQUUsTUFBSSxFQUFFLFFBQU0sSUFBRSxJQUFFLElBQUUsRUFBRSxNQUFJLEVBQUUsT0FBSyxJQUFFLEtBQUssSUFBSSxFQUFFLFNBQU8sR0FBRSxDQUFDLElBQUUsR0FBRSxJQUFFO0FBQVcsUUFBSSxJQUFFLElBQUUsSUFBRSxJQUFJLE9BQU8sSUFBRSxDQUFDLElBQUUsSUFBRyxJQUFFLElBQUksT0FBTyxDQUFDO0FBQUUsV0FBTSxH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QUUscUJBQXFCLEdBQUUsR0FBRSxDQUFDLElBQUU7QUFBQSxJQUFFO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxZQUFNLEVBQUUsU0FBTyxFQUFFLEtBQUssV0FBUyxFQUFFLEtBQUssTUFBSSxFQUFFLEtBQUssR0FBRztBQUFFLGVBQVEsSUFBRSxFQUFFLE1BQU0sU0FBTyxHQUFFLEtBQUcsR0FBRSxFQUFFLEVBQUUsS0FBRyxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQU0sRUFBRSxRQUFRLFdBQVU7QUFBQyxhQUFLLFFBQU0sRUFBRSxNQUFNLE1BQU0sR0FBRSxJQUFFLENBQUMsR0FBRSxFQUFFLFFBQU0sRUFBRSxNQUFNLE1BQU0sSUFBRSxDQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUcsRUFBRTtBQUFXLFVBQUUsTUFBTSxRQUFNLEVBQUU7QUFBTTtBQUFBLE1BQUs7QUFBQyxXQUFLLFFBQU0sQ0FBQyxDQUFDO0FBQUUsVUFBSSxJQUFFLEdBQUcsQ0FBQztBQUFFLFdBQUcsTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLE9BQU0sQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLElBQUksd0JBQXVCO0FBQUMsYUFBTyxLQUFLLE1BQU0sU0FBTztBQUFBLElBQUM7QUFBQSxJQUFDLE1BQU0sR0FBRSxHQUFFO0FBQUMsV0FBSyxVQUFRO0FBQUUsVUFBRyxFQUFDLFdBQVUsR0FBRSxLQUFJLEVBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxLQUFLLFlBQVksR0FBRSxDQUFDLEdBQUUsSUFBRSxLQUFLLE1BQU0sQ0FBQztBQUFFLFFBQUUsUUFBUSxTQUFPLE1BQUssS0FBSyxhQUFXLEVBQUUsTUFBTSxLQUFLLEVBQUUsVUFBVTtBQUFFLFVBQUksSUFBRSxFQUFFLE1BQU0sUUFBTSxFQUFFLFFBQVEsV0FBVSxJQUFFO0FBQUUsVUFBRSxFQUFFLEtBQUssZ0JBQWdCLEdBQUUsQ0FBQztBQUFFLFVBQUksSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsS0FBSyxnQkFBZ0IsR0FBRSxDQUFD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QVUsS0FBSyxNQUFNLEtBQUssT0FBTSxDQUFDO0FBQUEsTUFBQztBQUFDLGFBQU87QUFBQSxJQUFDO0FBQUEsSUFBQyxjQUFjLEdBQUUsR0FBRTtBQUFDLGFBQU8sSUFBRSxNQUFNLGNBQWMsR0FBRSxDQUFDLEdBQUUsS0FBSyxNQUFNLFFBQVEsT0FBRztBQUFDLFlBQUUsRUFBRSxjQUFjLEdBQUUsQ0FBQztBQUFBLE1BQUMsQ0FBQyxHQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsV0FBVTtBQUFDLFVBQUcsRUFBQyxTQUFRLEVBQUMsS0FBSSxFQUFDLEdBQUUsT0FBTSxHQUFFLE9BQU0sR0FBRSxPQUFNLEVBQUMsSUFBRTtBQUFLLFVBQUcsS0FBRyxLQUFLLFFBQU87QUFBRSxVQUFJLElBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEtBQUssSUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQUUsZUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUMsYUFBWSxHQUFFLFFBQU8sRUFBQyxJQUFFLEVBQUU7QUFBUSxZQUFHLEVBQUUsVUFBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsRUFBRSxNQUFHO0FBQUksYUFBRyxPQUFPLENBQUM7QUFBQSxNQUFDO0FBQUMsYUFBTyxFQUFFLEtBQUssb0JBQW9CLEdBQUUsRUFBRSxLQUFJLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQyxHQUFFLEtBQUcsY0FBYyxFQUFFLEtBQUk7QUFBQSxJQUFDLGNBQWE7QUFBQyxZQUFNLEVBQUUsS0FBSyxTQUFTLEdBQUUsS0FBSyxPQUFLO0FBQUEsSUFBSTtBQUFBLElBQUMsSUFBSSxhQUFZO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBUyxhQUFPLElBQUUsRUFBRSxLQUFNLEVBQUMsTUFBTSxRQUFRLElBQUUsQ0FBRTtBQUFBLElBQUE7QUFBQSxJQUFDLFVBQVUsR0FBRTtBQUFDLFVBQUcsRUFBQyxLQUFJLEVBQUMs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QUFJLEdBQUUsT0FBTyxFQUFFO0FBQUEsTUFBUTtBQUFHLFVBQUksSUFBRSxFQUFFLE9BQU8sR0FBRSxDQUFDO0FBQUUsYUFBTyxLQUFHLEVBQUUsWUFBVSxFQUFFLFNBQVMsQ0FBQyxHQUFFO0FBQUEsSUFBQztBQUFDLFlBQU8sQ0FBQyxLQUFHLENBQUMsRUFBRSxTQUFPLE9BQU8sS0FBRyxXQUFTLE9BQU8sQ0FBQyxJQUFFO0FBQUEsRUFBQztBQUFDLE1BQUksSUFBRSxjQUFjLEVBQUM7QUFBQSxJQUFDLFlBQVksR0FBRTtBQUFDLFlBQUssR0FBRyxLQUFLLFFBQU07QUFBQSxJQUFDO0FBQUEsSUFBQyxPQUFPLEdBQUUsR0FBRTtBQUFDLGFBQU8sS0FBRyxFQUFFLE9BQUssS0FBSyxRQUFNLEdBQUcsS0FBSyxPQUFNLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLFdBQVU7QUFBQyxhQUFPLE9BQU8sS0FBSyxLQUFLO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUU7QUFBRSxhQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBRyxHQUFFLEVBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxVQUFHLE9BQU8sVUFBVSxDQUFDLEtBQUcsS0FBRyxHQUFFO0FBQUMsWUFBSSxJQUFFLENBQUU7QUFBQyxVQUFFLENBQUMsSUFBRSxHQUFFLElBQUU7QUFBQSxNQUFDLE9BQUs7QUFBQyxZQUFJLElBQUUsQ0FBRTtBQUFDLGVBQU8sZUFBZSxHQUFFLEdBQUUsRUFBQyxPQUFNLEdBQUUsVUFBUyxNQUFHLFlBQVcsTUFBRyxjQUFhLEtBQUUsQ0FBQyxHQUFFLElBQUU7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFdBQU8sRUFBRSxXQUFXLEdBQUUsS0FBRTtBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsT0FBRyxLQUFHLFFBQU0sT0FBTyxLQUFHLFlBQVUsRUFBRSxPQUFPLFFBQVEsRUFBRyxFQUFDLEtBQU0sRUFBQyxN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QUFLLFVBQVUsSUFBSTtBQUFBLElBQUM7QUFBQSxFQUFDLEdBQUUsS0FBRyxDQUFDLEdBQUUsR0FBRSxNQUFJLE1BQUksT0FBSyxLQUFHLE9BQU8sS0FBRyxXQUFTLE9BQU8sQ0FBQyxJQUFFLGFBQWEsS0FBRyxLQUFHLEVBQUUsTUFBSSxFQUFFLFNBQVMsRUFBQyxTQUFRLHVCQUFPLE9BQU8sSUFBSSxHQUFFLEtBQUksRUFBRSxLQUFJLFFBQU8sSUFBRyxZQUFXLEVBQUUsWUFBVyxRQUFPLE1BQUcsZ0JBQWUsTUFBRyxXQUFVLEVBQUUsVUFBUyxDQUFDLElBQUUsS0FBSyxVQUFVLENBQUMsR0FBRSxJQUFFLE1BQU0sVUFBVSxFQUFDO0FBQUEsSUFBQyxZQUFZLEdBQUUsSUFBRSxNQUFLO0FBQUMsWUFBTyxHQUFDLEtBQUssTUFBSSxHQUFFLEtBQUssUUFBTSxHQUFFLEtBQUssT0FBSyxFQUFFLEtBQUs7QUFBQSxJQUFJO0FBQUEsSUFBQyxJQUFJLGdCQUFlO0FBQUMsYUFBTyxLQUFLLGVBQWUsSUFBRSxLQUFLLElBQUksZ0JBQWM7QUFBQSxJQUFNO0FBQUEsSUFBQyxJQUFJLGNBQWMsR0FBRTtBQUFDLFVBQUcsS0FBSyxPQUFLLFNBQU8sS0FBSyxNQUFJLElBQUksRUFBRSxJQUFJLElBQUcsS0FBSyxlQUFlLEVBQUUsTUFBSyxJQUFJLGdCQUFjO0FBQUEsV0FBTTtBQUFDLFlBQUksSUFBRTtBQUFnRyxjQUFNLElBQUksTUFBTSxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQSxJQUFDLFdBQVcsR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEdBQUcsS0FBSyxLQUFJLElBQUcsQ0FBQztBQUFFLFVBQUcsYUFBYSxLQUFJO0FBQUMsWUFBSSxJQUFFLEdBQUcsS0FBSyxPQUFNLEdBQUUsQ0FBQztBQUFFLFVBQUUsSUFBSSxHQUFFLENBQUM7QUFBQSxNQUFDLFdBQVMsYUFBYSxJQUFJLEdBQUUsSUFBSSxDQUFDO0FBQUEsV0FBTTtBQUFDLFlBQUksSUFBRSxHQUFHLEtBQUssS0FBSSxHQUFFLENBQUMs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SUFBQztBQUFBLElBQUMsT0FBTyxHQUFFO0FBQUMsVUFBSSxJQUFFLEdBQUcsS0FBSyxPQUFNLENBQUM7QUFBRSxhQUFPLElBQUUsS0FBSyxNQUFNLE9BQU8sS0FBSyxNQUFNLFFBQVEsQ0FBQyxHQUFFLENBQUMsRUFBRSxTQUFPLElBQUU7QUFBQSxJQUFFO0FBQUEsSUFBQyxJQUFJLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxHQUFHLEtBQUssT0FBTSxDQUFDLEdBQUUsSUFBRSxLQUFHLEVBQUU7QUFBTSxhQUFNLENBQUMsS0FBRyxhQUFhLElBQUUsRUFBRSxRQUFNO0FBQUEsSUFBQztBQUFBLElBQUMsSUFBSSxHQUFFO0FBQUMsYUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU0sQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLElBQUksR0FBRSxHQUFFO0FBQUMsV0FBSyxJQUFJLElBQUksRUFBRSxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUEsSUFBQztBQUFBLElBQUMsT0FBTyxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxJQUFFLElBQUksTUFBRSxLQUFHLEVBQUUsV0FBUyxvQkFBSSxRQUFJLENBQUE7QUFBRyxXQUFHLEVBQUUsWUFBVSxFQUFFLFNBQVMsQ0FBQztBQUFFLGVBQVEsS0FBSyxLQUFLLE1BQU0sR0FBRSxXQUFXLEdBQUUsQ0FBQztBQUFFLGFBQU87QUFBQSxJQUFDO0FBQUEsSUFBQyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsVUFBRyxDQUFDLEVBQUUsUUFBTyxLQUFLLFVBQVUsSUFBSTtBQUFFLGVBQVEsS0FBSyxLQUFLLE1BQU0sS0FBRyxFQUFFLGFBQWEsR0FBRyxPQUFNLElBQUksTUFBTSxzQ0FBc0MsS0FBSyxVQUFVLENBQUMsQ0FBQyxVQUFVO0FBQUUsYUFBTyxNQUFNLFNBQVMsR0FBRSxFQUFDLFdBQVUsT0FBRyxFQUFFLEtBQUksV0FBVSxFQUFDLE9BQU0sS0FBSSxLQUFJLElBQUcsR0FBRSxPQUFNLE1BQUcsWUFBVyxFQUFFLFVBQVEsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDLEdBQUUsS0FBRyxNQUFLLEtBQUcsY0FBYyxFQUFDO0FBQUEsSUFBQyxZQUFZLEdBQUU7QUFBQyxVQUFHLGFBQWEsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFO0FBQU0scUJBQWEsT0FBSyxJQUFFLElBQUksTUFBRyxFQUFFLE1BQU0sS0FBSyxFQUFFLEtBQUssR0FBRSxFQUFFLFFBQU0sRUFBRSxNQUFNLFFBQU8sTUFBTSxFQUFFLEtBQUksQ0FBQyxHQUFFLEtBQUssUUFBTSxFQUFFO0FBQUEsTUFBSyxNQUFNLE9BQU0sSUFBSSxFQUFFLEVBQUUsR0FBRSxJQUFJLElBQUU7QUFBRSxXQUFLLE9BQUssRUFBRSxLQUFLO0FBQUEsSUFBVTtBQUFBLElBQUMsV0FBVyxHQUFFLEdBQUU7QUFBQyxlQUFPLEVBQUMsUUFBTyxFQUFDLEtBQUksS0FBSyxNQUFNLE9BQU07QUFBQyxZQUFHLEVBQUUsYUFBYSxJQUFJLE9BQU0sSUFBSSxNQUFNLDRCQUE0QjtBQUFFLFlBQUksSUFBRSxFQUFFLE9BQU8sTUFBSyxHQUFFLEdBQUc7QUFBRSxpQkFBTyxDQUFDLEdBQUUsQ0FBQyxLQUFJLEVBQUUsY0FBYSxNQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUcsRUFBRSxJQUFJLEdBQUUsQ0FBQyxJQUFFLGFBQWEsTUFBSSxFQUFFLElBQUksQ0FBQyxJQUFFLE9BQU8sVUFBVSxlQUFlLEtBQUssR0FBRSxDQUFDLEtBQUcsT0FBTyxlQUFlLEdBQUUsR0FBRSxFQUFDLE9BQU0sR0FBRSxVQUFTLE1BQUcsWUFBVyxNQUFHLGNBQWEsS0FBRSxDQUFDO0FBQUEsTUFBQztBQUFDLGFBQU87QUFBQSxJQUFDO0FBQUEsSUFBQyxTQUFTLEdBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLO0FBQU0sVUFBRyxFQUFFLE1BQU0sU0FBTyxFQUFFLFFBQU8sTUFBTSxTQUFTLEdBQUUsQ0FBQztBQUFFLFdBQUssUUFBTSxFQUFFLE1BQU0sQ0FBQztBQUFFLFVBQUksSUFBRSxNQUFNLFNBQVMsR0FB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QU0sSUFBRTtBQUFBLFFBQUU7QUFBQyxZQUFHLEtBQUcsRUFBRSxLQUFHLEVBQUUsR0FBRSxLQUFLLENBQUMsR0FBRSxJQUFFLElBQUUsR0FBRSxJQUFFO0FBQUEsaUJBQWUsTUFBSSxJQUFHO0FBQUMsaUJBQUssTUFBSSxPQUFLLE1BQUksTUFBSyxLQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUcsQ0FBQyxHQUFFLElBQUU7QUFBRyxjQUFJLElBQUUsSUFBRSxJQUFFLElBQUUsSUFBRSxJQUFFLElBQUU7QUFBRSxjQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQU87QUFBRSxZQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsQ0FBQyxJQUFFLE1BQUcsSUFBRSxJQUFFLEdBQUUsSUFBRTtBQUFBLFFBQU0sTUFBTSxLQUFFO0FBQUEsTUFBRTtBQUFDLFVBQUU7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFHLEtBQUcsRUFBRyxHQUFDLEVBQUUsV0FBUyxFQUFFLFFBQU87QUFBRSxTQUFHLEVBQUM7QUFBRyxRQUFJLElBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRSxDQUFDLENBQUM7QUFBRSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxFQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLElBQUUsQ0FBQyxLQUFHLEVBQUU7QUFBTyxZQUFJLElBQUUsSUFBRTtBQUFBLEVBQ3RVLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRSxDQUFDLENBQUMsTUFBSSxNQUFJLE1BQUksRUFBRSxDQUFDLE1BQUksS0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU0sS0FBRztBQUFBLEVBQ3RELENBQUMsR0FBRyxFQUFFLE1BQU0sSUFBRSxHQUFFLENBQUMsQ0FBQztBQUFBLElBQUc7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLE1BQUksS0FBRyxDQUFDLEVBQUMsZUFBYyxFQUFDLE1BQUksSUFBRSxPQUFPLE9BQU8sRUFBQyxlQUFjLEVBQUMsR0FBRSxHQUFHLElBQUksSUFBRSxHQUFHLE1BQUssS0FBRyxPQUFHLG1CQUFtQixLQUFLLENBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsS0FBRyxJQUFFLEVBQUUsUUFBUTtBQUFDLFFBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFO0FBQU8sUUFBRyxLQUFHLEVBQUUsUUFBTTtBQUFHLGFBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxFQUFFLEtBQUcsRUFBRSxDQUFDLE1BQUk7QUFBQSxHQUM5UDtBQUFDLFVBQUcsSUFBRSxJQUFFLEVBQUUsUUFBUTtBQUFDLFVBQUcsSUFBRSxJQUFFLEdBQUUsSUFBRSxLQUFHLEVBQUU7SUFBUTtBQUFDO0VBQVE7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFDLGFBQVksRUFBQyxJQUFFLEdBQUUsRUFBQyxjQUFhLEdBQUUsb0JBQW1CLEVBQUMsSUFBRSxHQUFHLGNBQWEsSUFBRSxLQUFLLFVBQVUsQ0FBQztBQUFFLFFBQUcsRUFBRSxRQUFPO0FBQUUsUUFBSSxJQUFFLEVBQUUsV0FBUyxHQUFHLENBQUMsSUFBRSxPQUFLLEtBQUksSUFBRSxJQUFHLElBQUU7QUFBRSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUcsTUFBSSxPQUFLLEVBQUUsSUFBRSxDQUFDLE1BQUksUUFBTSxFQUFFLElBQUUsQ0FBQyxNQUFJLFFBQU0sS0FBRyxFQUFFLE1BQU0sR0FBRSxDQUFDLElBQUUsT0FBTSxLQUFHLEdBQUUsSUFBRSxHQUFFLElBQUUsT0FBTSxNQUFJLEtBQUssU0FBTyxFQUFFLElBQUUsQ0FBQyxHQUFHO0FBQUEsTUFBQSxLQUFJO0FBQUk7QUFBQyxlQUFHLEVBQUUsTUFBTSxHQUFFLENBQUM7QUFBRSxjQUFJLElBQUUsRUFBRSxPQUFPLElBQUUsR0FBRSxDQUFDO0FBQUUsa0JBQU8sR0FBRztBQUFBLFlBQUEsS0FBSTtBQUFPLG1CQUFHO0FBQU07QUFBQSxZQUFNLEtBQUk7QUFBTyxtQkFBRztBQUFNO0FBQUEsWUFBTSxLQUFJO0FBQU8sbUJBQUc7QUFBTTtBQUFBLFlBQU0sS0FBSTtBQUFPLG1CQUFHO0FBQU07QUFBQSxZQUFNLEtBQUk7QUFBTyxtQkFBRztBQUFNO0FBQUEsWUFBTSxLQUFJO0FBQU8sbUJBQUc7QUFBTTtBQUFBLFlBQU0sS0FBSTtBQUFPLG1CQUFHO0FBQU07QUFBQSxZQUFNLEtBQUk7QUFBTyxtQkFBRztBQUFNO0FBQUEsWUFBTTtBQUFRLGdCQUFFLE9BQU8sR0FBRSxDQUFDLE1BQUksT0FBSyxLQUFHLFFBQU0sRUFBRSxPQUFPLENBQUMsSUFBRSxLQUFHLEVBQUUsT0FBTyxHQUFFLENBQUM7QUFBQSxVQUFDO0FBQUMsZUFBRyxHQUFFLElBQUUsSUFBRTtBQUFBLFFBQUM7QUFBQztBQUFBLE1BQU0sS0FBSTtBQUFJLFlBQUcsS0FBRyxFQUFFLElBQUUsQ0FBQyxNQUFJLE9BQUssRUFBRSxTQUFPLEVBQUUsTUFBRztBQUFBLGFBQU07QUFBQyxlQUFJLEtBQUcsRUFBRSxNQUFNLEdBQUUsQ0FBQyxJQUFFO0FBQUE7QUFBQSxHQUVyd0IsRUFBRSxJQUFFLENBQUMsTUFBSSxRQUFNLEVBQUUsSUFBRSxDQUFDLE1BQUksT0FBSyxFQUFFLElBQUUsQ0FBQyxNQUFJLE1BQUssTUFBRztBQUFBLEdBQzlDLEtBQUc7QUFBRSxlQUFHLEdBQUUsRUFBRSxJQUFFLENBQUMsTUFBSSxRQUFNLEtBQUcsT0FBTSxLQUFHLEdBQUUsSUFBRSxJQUFFO0FBQUEsUUFBQztBQUFDO0FBQUEsTUFBTTtBQUFRLGFBQUc7QUFBQSxJQUFDO0FBQUMsV0FBTyxJQUFFLElBQUUsSUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFFLEdBQUUsSUFBRSxJQUFFLEdBQUcsR0FBRSxHQUFFLElBQUcsR0FBRyxDQUFDLENBQUM7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxhQUFZO0FBQUMsVUFBRyxLQUFLLEtBQUssQ0FBQyxFQUFFLFFBQU8s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QUFBQyxZQUFFO0FBQUc7QUFBQSxJQUFLO0FBQUMsV0FBTSxFQUFDLFVBQVMsR0FBRSxXQUFVLEdBQUUsUUFBTyxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUMsU0FBUSxHQUFFLFFBQU8sR0FBRSxRQUFPLEVBQUMsSUFBRTtBQUFFLFFBQUcsRUFBRSxTQUFPLEVBQUUsS0FBSyxPQUFNO0FBQUMsVUFBSSxJQUFFLEVBQUUsVUFBUyxJQUFFLEVBQUUsUUFBUSxDQUFDO0FBQUUsVUFBRyxDQUFDLEdBQUU7QUFBQyxZQUFJLElBQUUsNkJBQTZCLENBQUM7QUFBRyxlQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsbUJBQW1CLEdBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBQSxNQUFJO0FBQUMsVUFBSSxJQUFFLElBQUksR0FBRyxDQUFDO0FBQUUsYUFBTyxFQUFFLFlBQVksS0FBSyxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUMsUUFBSSxJQUFFLEdBQUcsR0FBRSxDQUFDO0FBQUUsUUFBRyxFQUFFLFFBQU8sR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxTQUFPLEVBQUUsS0FBSyxPQUFNO0FBQUMsVUFBSSxJQUFFLHFCQUFxQixFQUFFLElBQUk7QUFBYSxhQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsZ0JBQWdCLEdBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBQSxJQUFJO0FBQUMsUUFBRztBQUFDLFVBQUksSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFFLGFBQU8sR0FBRyxHQUFFLEVBQUUsTUFBSyxFQUFFLEtBQUssY0FBYztBQUFBLElBQUMsU0FBTyxHQUFFO0FBQUMsYUFBTyxFQUFFLFdBQVMsRUFBRSxTQUFPLElBQUcsRUFBRSxLQUFLLENBQUMsR0FBRTtBQUFBLElBQUk7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxFQUFFLFFBQU87QUFBSyxNQUFFLFNBQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxLQUFLO0FBQUUsUUFBRyxFQUFDLFVBQVMsR0FBRSxXQUFVLEdBQUUsUUFBTyxFQUFDLElBQUUsR0FBRyxFQUFFLFFBQU8sQ0FBQztBQUFFLFFBQUcsR0FBRTtBQUFDLFVBQUcsRUFBQyxTQUFRLEVBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxRQUFRLENBQUM7QUFBRSxZQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUUsSUFBRyxFQUFFLElBQUksQ0FBQyxJQUFFO0FBQUEsSUFBQztBQUFDLFFBQUcsRUFBRSxTQUFPLEVBQUUsS0FBSyxVQUFRLEtBQUcsSUFBRztBQUFDLFVBQUksSUFBRTtBQUFnRCxRQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsa0JBQWtCLEdBQUUsQ0FBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUksSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFFLFFBQUcsR0FBRTtBQUFDLFFBQUUsUUFBTSxDQUFDLEVBQUUsTUFBTSxPQUFNLEVBQUUsTUFBTSxHQUFHLEdBQUUsRUFBRSxRQUFRLGlCQUFlLEVBQUUsVUFBUSxJQUFHLEVBQUUsUUFBUSxrQkFBZ0IsRUFBRSxPQUFLLEVBQUU7QUFBTSxVQUFJLElBQUUsRUFBRSxPQUFPLEtBQUs7QUFBQSxDQUN0aUk7QUFBRSxZQUFJLEVBQUUsZ0JBQWMsRUFBRSxnQkFBYyxHQUFHLEVBQUUsYUFBYTtBQUFBLEVBQ3ZELENBQUMsS0FBRztBQUFHLFVBQUksSUFBRSxFQUFFLE1BQU0sS0FBSztBQUFBLENBQzNCO0FBQUUsWUFBSSxFQUFFLFVBQVEsRUFBRSxVQUFRLEdBQUcsRUFBRSxPQUFPO0FBQUEsRUFDckMsQ0FBQyxLQUFHO0FBQUEsSUFBRTtBQUFDLFdBQU8sRUFBRSxXQUFTO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsU0FBTyxFQUFFLEtBQUssT0FBSyxFQUFFLFNBQU8sRUFBRSxLQUFLLFVBQVM7QUFBQyxVQUFJLElBQUUsS0FBSyxFQUFFLElBQUk7QUFBd0MsYUFBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsZ0JBQWdCLEdBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBQSxJQUFJO0FBQUMsUUFBRyxFQUFDLFVBQVMsR0FBRSxPQUFNLEVBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxLQUFLLFdBQVMsR0FBRyxHQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsSUFBSTtBQUFHLE1BQUUsUUFBTSxHQUFFLEdBQUcsR0FBRSxDQUFDO0FBQUUsUUFBSSxJQUFFO0FBQUcsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxHQUFFO0FBQUMsVUFBRyxFQUFDLEtBQUksRUFBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQUcsYUFBYSxNQUFJLElBQUUsT0FBSSxFQUFFLE9BQU8sU0FBTyxLQUFHLEVBQUUsVUFBUSxJQUFHO0FBQUMsVUFBRSxDQUFDLElBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sT0FBTSxJQUFFO0FBQUssVUFBRSxLQUFLLE9BQUc7QUFBQyxjQUFHLGFBQWEsSUFBRztBQUFDLGdCQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsRUFBRTtBQUFPLG1CQUFPLE1BQUksRUFBRSxLQUFLLE9BQUssTUFBSSxFQUFFLEtBQUssV0FBUyxRQUFHLElBQUU7QUFBQSxVQUE0QztBQUFDLGlCQUFPLElBQUU7QUFBQSxRQUFpRCxDQUFDLEdBQUUsS0FBRyxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsa0JBQWtCLEdBQUUsQ0FBQyxDQUFDO0FBQUEsTUFBQyxNQUFNLFVBQVEsSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxHQUFFO0FBQUMsWUFBRyxFQUFDLEtBQUksRUFBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLFlBQUcsTUFBSSxLQUFHLEtBQUcsS0FBRyxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUUsT0FBTyxLQUFHLEVBQUUsVUFBUSxFQUFFLE9BQU07QUFBQyxjQUFJLElBQUUsNkJBQTZCLENBQUM7QUFBZ0IsWUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUMsQ0FBQztBQUFFO0FBQUEsUUFBSztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxLQUFHLENBQUMsRUFBRSxRQUFRLFVBQVM7QUFBQyxVQUFJLElBQUU7QUFBMkgsUUFBRSxTQUFTLEtBQUssSUFBSSxFQUFFLFlBQVksR0FBRSxDQUFDLENBQUM7QUFBQSxJQUFDO0FBQUMsV0FBTyxFQUFFLFdBQVMsR0FBRTtBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsQ0FBQyxFQUFDLFNBQVEsRUFBQyxXQUFVLEdBQUUsTUFBSyxHQUFFLEtBQUksRUFBQyxHQUFFLE9BQU0sRUFBQyxNQUFJO0FBQUMsUUFBRyxFQUFFLFdBQVMsRUFBRSxRQUFNO0FBQUcsUUFBRyxFQUFDLE9BQU0sRUFBQyxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUcsS0FBRyxJQUFFLEVBQUUsV0FBVyxTQUFPLEVBQUUsQ0FBQyxNQUFJLEVBQUUsS0FBSyxRQUFRLFFBQU07QUFBRyxhQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxFQUFFLEtBQUcsRUFBRSxDQUFDLE1BQUk7QUFBQSxFQUMzMEMsUUFBTTtBQUFHLFdBQVE7QUFBQSxFQUFBO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUFPLFFBQUksSUFBRSxFQUFFLGFBQWEsR0FBRSxFQUFFLEtBQUssU0FBUSxJQUFFLEdBQUUsSUFBRSxPQUFHLElBQUUsRUFBRSxNQUFNO0FBQWMsUUFBRyxLQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUUsR0FBRSxNQUFNLGdCQUFjLEVBQUUsT0FBTyxFQUFFLFNBQU8sQ0FBQyxHQUFFLElBQUU7QUFBQSxTQUFPO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBTTtBQUFRLE9BQUMsRUFBRSxRQUFNLEtBQUcsRUFBRSxXQUFXLENBQUMsTUFBSSxFQUFFLE1BQU0sVUFBUSxFQUFFLE9BQU8sRUFBRSxTQUFPLENBQUMsR0FBRSxJQUFFO0FBQUEsSUFBRztBQUFDLFVBQUksRUFBRSxVQUFRO0FBQUEsRUFBRTtBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBRSxHQUFDLElBQUUsQ0FBRSxHQUFDLEdBQUUsSUFBRTtBQUFLLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLFFBQU8sRUFBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsY0FBTyxFQUFFLE1BQUk7QUFBQSxRQUFFLEtBQUssRUFBRSxLQUFLO0FBQVcsWUFBRSxLQUFLLEVBQUMsVUFBUyxDQUFDLENBQUMsR0FBRSxRQUFPLEVBQUUsT0FBTSxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUssRUFBRSxLQUFLO0FBQVEsWUFBRSxLQUFLLEVBQUMsVUFBUyxDQUFDLENBQUMsR0FBRSxRQUFPLEVBQUUsUUFBTyxTQUFRLEVBQUUsUUFBTyxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUssRUFBRSxLQUFLO0FBQVEsZ0JBQUksVUFBUSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsU0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLEtBQUssR0FBRSxJQUFFLEdBQUcsR0FBRSxFQUFFLElBQUksR0FBRSxJQUFFO0FBQUs7QUFBQSxRQUFNLEtBQUssRUFBRSxLQUFLO0FBQVU7QUFBQyxnQkFBRyxNQUFJLFdBQVMsSUFBRSxPQUFNLEVBQUUsU0FBTyxFQUFFLE9BQU8sS0FBSyxFQUFFLEtBQUssR0FBRSxDQUFDLEVBQUUsUUFBUSxlQUFhLEVBQUUsUUFBTSxFQUFFLEtBQUssU0FBTyxFQUFFLEtBQUssT0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLGFBQVk7QUFBQyxrQkFBSSxJQUFFO0FBQXNELGdCQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsTUFBSyxDQUFDLENBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUksSUFBRSxFQUFFO0FBQUssZ0JBQUcsQ0FBQyxLQUFHLEVBQUUsTUFBTSxTQUFPLEdBQUU7QUFBQyxrQkFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssT0FBTSxDQUFFLENBQUEsR0FBRSxFQUFFLFVBQVEsRUFBQyxRQUFPLEdBQUUsS0FBSSxFQUFFLFFBQVEsSUFBRztBQUFFLGtCQUFJLElBQUUsRUFBRSxNQUFNLFFBQU07QUFBRSxrQkFBRyxFQUFFLFFBQU0sRUFBQyxPQUFNLEdBQUUsS0FBSSxFQUFDLEdBQUUsRUFBRSxhQUFXLEVBQUMsT0FBTSxHQUFFLEtBQUksRUFBQyxHQUFFLE9BQU8sRUFBRSxNQUFNLGFBQVcsVUFBUztBQUFDLG9CQUFJLElBQUUsRUFBRSxNQUFNLFlBQVU7QUFBRSxrQkFBRSxNQUFNLFlBQVUsRUFBRSxNQUFNLFVBQVEsR0FBRSxFQUFFLFdBQVcsWUFBVSxFQUFFLFdBQVcsVUFBUTtBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsZ0JBQUksSUFBRSxJQUFJLEVBQUUsR0FBRSxHQUFHLEdBQUUsQ0FBQyxDQUFDO0FBQUUsZUFBRyxHQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLEtBQUcsT0FBTyxLQUFHLFlBQVUsRUFBRSxNQUFNLFFBQU0sSUFBRSxRQUFNLEVBQUUsT0FBTyxLQUFLLEdBQUcsR0FBRSxDQUFDLENBQUMsR0FBRSxJQUFFLFFBQU8sSUFBRTtBQUFBLFVBQUk7QUFBQztBQUFBLFFBQU07QUFBUSxnQkFBSSxVQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxNQUFNLE9BQU0sRUFBRSxTQUFPLEVBQUUsT0FBTyxLQUFLLEVBQUUsS0FBSztBQUFFLFlBQUUsVUFBUSxJQUFFLElBQUUsS0FBRyxFQUFFLEdBQUU7QUFBQyxnQkFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsb0JBQU8sS0FBRyxFQUFFLE1BQU07QUFBQSxjQUFBLEtBQUssRUFBRSxLQUFLO0FBQUEsY0FBVyxLQUFLLEVBQUUsS0FBSztBQUFRLHlCQUFTO0FBQUEsY0FBRSxLQUFLLEVBQUUsS0FBSztBQUFVLHNCQUFNO0FBQUEsY0FBRSxTQUFRO0FBQUMsb0JBQUksSUFBRTtBQUFzRCxrQkFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUMsQ0FBQztBQUFFLHNCQUFNO0FBQUEsY0FBQztBQUFBLFlBQUM7QUFBQSxVQUFDO0FBQUMsY0FBRyxFQUFFLDJCQUEwQjtBQUFDLGdCQUFJLElBQUU7QUFBZ0QsY0FBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLFdBQU8sTUFBSSxVQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBQyxVQUFTLEdBQUUsT0FBTSxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBRSxHQUFDLElBQUUsQ0FBRSxHQUFDLEdBQUUsSUFBRSxPQUFHLElBQUU7QUFBSSxhQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxRQUFPLEVBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLE1BQU0sQ0FBQztBQUFFLFVBQUcsT0FBTyxFQUFFLFFBQU0sVUFBUztBQUFDLFlBQUcsRUFBQyxNQUFLLEdBQUUsUUFBTyxFQUFDLElBQUU7QUFBRSxZQUFHLE1BQUksT0FBSyxNQUFJLFVBQVEsQ0FBQyxHQUFFO0FBQUMsY0FBRSxNQUFHLElBQUU7QUFBSTtBQUFBLFFBQVE7QUFBQyxZQUFHLE1BQUksS0FBSTtBQUFDLGNBQUcsTUFBSSxXQUFTLElBQUUsT0FBTSxNQUFJLEtBQUk7QUFBQyxnQkFBRTtBQUFJO0FBQUEsVUFBUTtBQUFBLFFBQUMsV0FBUyxNQUFJLE1BQUksVUFBUSxNQUFJLFFBQU0sSUFBRSxPQUFNLElBQUUsUUFBSSxNQUFJLFdBQVMsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLFFBQU8sTUFBSSxNQUFLO0FBQUMsY0FBRTtBQUFJO0FBQUEsUUFBUTtBQUFDLFlBQUcsTUFBSSxLQUFJO0FBQUMsY0FBRyxNQUFJLEVBQUUsTUFBTSxTQUFPLEVBQUU7QUFBQSxRQUFRLFdBQVMsTUFBSSxHQUFFO0FBQUMsY0FBRTtBQUFJO0FBQUEsUUFBUTtBQUFDLFlBQUksSUFBRSxtQ0FBbUMsQ0FBQyxJQUFHLElBQUUsSUFBSSxFQUFFLGdCQUFnQixHQUFFLENBQUM7QUFBRSxVQUFFLFNBQU8sR0FBRSxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsTUFBQyxNQUFNLEdBQUUsU0FBTyxFQUFFLEtBQUssYUFBVyxFQUFFLEtBQUssRUFBQyxVQUFTLENBQUMsQ0FBQyxHQUFFLFFBQU8sRUFBRSxPQUFNLENBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxLQUFLLFdBQVMsR0FBRyxFQUFFLFFBQU8sQ0FBQyxHQUFFLEVBQUUsS0FBSyxFQUFDLFVBQVMsQ0FBQyxDQUFDLEdBQUUsUUFBTyxFQUFFLFFBQU8sU0FBUSxFQUFFLFFBQU8sQ0FBQyxLQUFHLE1BQUksVUFBUSxNQUFJLE9BQUssRUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFFLGlDQUFpQyxDQUFDLEdBQUUsSUFBRSxHQUFHLEdBQUUsQ0FBQyxNQUFJLE1BQUksT0FBSyxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsa0JBQWtCLEdBQUUsdUNBQXVDLENBQUMsR0FBRSxFQUFFLEtBQUssSUFBSSxFQUFFLEdBQUUsR0FBRyxHQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsSUFBRSxRQUFPLElBQUU7QUFBQSxJQUFHO0FBQUMsV0FBTyxHQUFHLEVBQUUsUUFBTyxDQUFDLEdBQUUsTUFBSSxVQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBQyxVQUFTLEdBQUUsT0FBTSxFQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsU0FBTyxFQUFFLEtBQUssT0FBSyxFQUFFLFNBQU8sRUFBRSxLQUFLLFVBQVM7QUFBQyxVQUFJLElBQUUsS0FBSyxFQUFFLElBQUk7QUFBeUMsYUFBTyxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUUsZ0JBQWdCLEdBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBQSxJQUFJO0FBQUMsUUFBRyxFQUFDLFVBQVMsR0FBRSxPQUFNLEVBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxLQUFLLFdBQVMsR0FBRyxHQUFFLENBQUMsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsSUFBSTtBQUFHLFFBQUcsRUFBRSxRQUFNLEdBQUUsR0FBRyxHQUFFLENBQUMsR0FBRSxDQUFDLEVBQUUsUUFBUSxZQUFVLEVBQUUsS0FBSyxPQUFHLGFBQWEsS0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFFO0FBQUMsVUFBSSxJQUFFO0FBQTJILFFBQUUsU0FBUyxLQUFLLElBQUksRUFBRSxZQUFZLEdBQUUsQ0FBQyxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU8sRUFBRSxXQUFTLEdBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFBLEdBQUcsSUFBRSxDQUFBO0FBQUcsYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sUUFBTyxFQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxNQUFNLENBQUM7QUFBRSxjQUFPLEVBQUU7UUFBTSxLQUFLLEVBQUUsS0FBSztBQUFXLFlBQUUsS0FBSyxFQUFDLFFBQU8sRUFBRSxPQUFNLENBQUM7QUFBRTtBQUFBLFFBQU0sS0FBSyxFQUFFLEtBQUs7QUFBUSxZQUFFLEtBQUssRUFBQyxTQUFRLEVBQUUsU0FBUSxRQUFPLEVBQUUsT0FBTSxDQUFDO0FBQUU7QUFBQSxRQUFNLEtBQUssRUFBRSxLQUFLO0FBQVMsY0FBRyxFQUFFLFNBQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxLQUFLLEdBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRSxFQUFFLElBQUksQ0FBQyxHQUFFLEVBQUUsVUFBUztBQUFDLGdCQUFJLElBQUU7QUFBb0UsY0FBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUMsQ0FBQztBQUFBLFVBQUM7QUFBQztBQUFBLFFBQU07QUFBUSxZQUFFLFNBQU8sRUFBRSxPQUFPLEtBQUssRUFBRSxLQUFLLEdBQUUsRUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGdCQUFnQixHQUFFLGNBQWMsRUFBRSxJQUFJLG1CQUFtQixDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxXQUFNLEVBQUMsVUFBUyxHQUFFLE9BQU0sRUFBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUUsR0FBQyxJQUFFLElBQUcsSUFBRSxPQUFHLEdBQUUsSUFBRSxNQUFLLElBQUUsS0FBSSxJQUFFO0FBQUssYUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sUUFBTyxFQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxNQUFNLENBQUM7QUFBRSxVQUFHLE9BQU8sRUFBRSxRQUFNLFVBQVM7QUFBQyxZQUFHLEVBQUMsTUFBSyxHQUFFLFFBQU8sRUFBQyxJQUFFO0FBQUUsWUFBRyxNQUFJLFFBQU0sS0FBRyxNQUFJLFlBQVUsS0FBRyxNQUFJLFdBQVMsSUFBRSxJQUFFLEVBQUUsSUFBRyxJQUFHLE9BQU0sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFLE9BQUcsSUFBRSxRQUFPLElBQUUsT0FBTSxNQUFJLEVBQUUsS0FBRTtBQUFBLGlCQUFhLENBQUMsS0FBRyxNQUFJLElBQUksS0FBRTtBQUFBLGlCQUFXLE1BQUksT0FBSyxNQUFJLE9BQUssTUFBSSxRQUFPO0FBQUMsY0FBRyxNQUFJLEtBQUk7QUFBQyxnQkFBRyxJQUFFLEVBQUUsSUFBSyxHQUFDLGFBQWEsR0FBRTtBQUFDLGtCQUFJLElBQUUsMkNBQTBDLElBQUUsSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUM7QUFBRSxnQkFBRSxTQUFPLEdBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLFlBQUM7QUFBQyxnQkFBRyxDQUFDLEtBQUcsT0FBTyxLQUFHLFVBQVM7QUFBQyxrQkFBSSxJQUFFLEVBQUUsUUFBTSxFQUFFLE1BQU0sUUFBTSxFQUFFO0FBQU8sa0JBQUUsSUFBRSxRQUFNLEVBQUUsT0FBTyxLQUFLLEdBQUcsR0FBRSxDQUFDLENBQUM7QUFBRSxrQkFBRyxFQUFDLEtBQUksRUFBQyxJQUFFLEVBQUU7QUFBUSx1QkFBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsRUFBRSxLQUFHLEVBQUUsQ0FBQyxNQUFJO0FBQUEsR0FDdm9KO0FBQUMsb0JBQUksSUFBRTtBQUFtRSxrQkFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUMsQ0FBQztBQUFFO0FBQUEsY0FBSztBQUFBLFlBQUM7QUFBQSxVQUFDLE1BQU0sS0FBRTtBQUFLLGNBQUUsTUFBSyxJQUFFLE9BQUcsSUFBRTtBQUFBLFFBQUksV0FBUyxNQUFJLE9BQUssTUFBSSxPQUFLLElBQUUsRUFBRSxNQUFNLFNBQU8sR0FBRTtBQUFDLGNBQUksSUFBRSx3Q0FBd0MsQ0FBQyxJQUFHLElBQUUsSUFBSSxFQUFFLGdCQUFnQixHQUFFLENBQUM7QUFBRSxZQUFFLFNBQU8sR0FBRSxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsUUFBQztBQUFBLE1BQUMsV0FBUyxFQUFFLFNBQU8sRUFBRSxLQUFLLFdBQVcsR0FBRSxLQUFLLEVBQUMsUUFBTyxFQUFFLE9BQU0sQ0FBQztBQUFBLGVBQVUsRUFBRSxTQUFPLEVBQUUsS0FBSyxRQUFRLElBQUcsRUFBRSxRQUFPLENBQUMsR0FBRSxFQUFFLEtBQUssRUFBQyxTQUFRLEVBQUUsU0FBUSxRQUFPLEVBQUUsT0FBTSxDQUFDO0FBQUEsV0FBTTtBQUFDLFlBQUcsR0FBRTtBQUFDLGNBQUksSUFBRSxjQUFjLENBQUM7QUFBb0IsWUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUMsQ0FBQztBQUFBLFFBQUM7QUFBQyxZQUFJLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxjQUFJLFVBQVEsRUFBRSxLQUFLLENBQUMsR0FBRSxJQUFFLE1BQUksRUFBRSxLQUFLLElBQUksRUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLElBQUUsU0FBUSxJQUFFLEVBQUUsTUFBTSxPQUFNLElBQUU7QUFBQSxNQUFHO0FBQUEsSUFBQztBQUFDLFdBQU8sR0FBRyxFQUFFLFFBQU8sQ0FBQyxHQUFFLE1BQUksVUFBUSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUMsVUFBUyxHQUFFLE9BQU0sRUFBQztBQUFBLEVBQUM7QUFBQyxJQUFFLFFBQU07QUFBRyxJQUFFLGFBQVc7QUFBRSxJQUFFLFFBQU07QUFBRyxJQUFFLE9BQUs7QUFBRSxJQUFFLE9BQUs7QUFBRSxJQUFFLFNBQU87QUFBRSxJQUFFLFVBQVE7QUFBRyxJQUFFLFVBQVE7QUFBRyxJQUFFLGFBQVc7QUFBRyxJQUFFLGdCQUFjO0FBQUcsSUFBRSxjQUFZO0FBQUcsSUFBRSxXQUFTO0FBQUcsSUFBRSxhQUFXO0FBQUcsSUFBRSxjQUFZO0FBQUcsSUFBRSxjQUFZO0FBQUcsSUFBRSxhQUFXO0FBQUcsSUFBRSxjQUFZO0FBQUcsSUFBRSxhQUFXO0FBQUcsSUFBRSxnQkFBYztBQUFHLElBQUUsYUFBVztBQUFHLElBQUUsa0JBQWdCO0FBQUcsSUFBRSxrQkFBZ0I7QUFBRyxJQUFFLFNBQU87QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEdBQUcsT0FBRztBQUFjLE1BQUksSUFBRSxHQUFFLEdBQUcsSUFBRSxNQUFLLEtBQUcsRUFBQyxVQUFTLE9BQUcsYUFBYSxZQUFXLFNBQVEsT0FBRyxLQUFJLDRCQUEyQixTQUFRLENBQUMsR0FBRSxNQUFJO0FBQUMsUUFBSSxJQUFFLEVBQUUsY0FBYyxHQUFFLENBQUM7QUFBRSxRQUFHLE9BQU8sVUFBUSxXQUFXLFFBQU8sT0FBTyxLQUFLLEdBQUUsUUFBUTtBQUFFLFFBQUcsT0FBTyxRQUFNLFlBQVc7QUFBQyxVQUFJLElBQUUsS0FBSyxFQUFFLFFBQVEsV0FBVSxFQUFFLENBQUMsR0FBRSxJQUFFLElBQUksV0FBVyxFQUFFLE1BQU07QUFBRSxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxFQUFFLEVBQUUsR0FBRSxDQUFDLElBQUUsRUFBRSxXQUFXLENBQUM7QUFBRSxhQUFPO0FBQUEsSUFBQyxPQUFLO0FBQUMsVUFBSSxJQUFFO0FBQTJGLGFBQU8sRUFBRSxPQUFPLEtBQUssSUFBSSxFQUFFLG1CQUFtQixHQUFFLENBQUMsQ0FBQyxHQUFFO0FBQUEsSUFBSTtBQUFBLEVBQUMsR0FBRSxTQUFRLEVBQUUsZUFBYyxXQUFVLENBQUMsRUFBQyxTQUFRLEdBQUUsTUFBSyxHQUFFLE9BQU0sRUFBQyxHQUFFLEdBQUUsR0FBRSxNQUFJO0FBQUMsUUFBSTtBQUFFLFFBQUcsT0FBTyxVQUFRLFdBQVcsS0FBRSxhQUFhLFNBQU8sRUFBRSxTQUFTLFFBQVEsSUFBRSxPQUFPLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxRQUFRO0FBQUEsYUFBVSxPQUFPLFFBQU0sWUFBVztBQUFDLFVBQUksSUFBRTtBQUFHLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEVBQUUsRUFBRSxNQUFHLE9BQU8sYUFBYSxFQUFFLENBQUMsQ0FBQztBQUFFLFVBQUUsS0FBSyxDQUFDO0FBQUEsSUFBQyxNQUFNLE9BQU0sSUFBSSxNQUFNLDBGQUEwRjtBQUFFLFFBQUcsTUFBSSxJQUFFLEVBQUUsY0FBYyxjQUFhLE1BQUksRUFBRSxLQUFLLGFBQWEsS0FBRTtBQUFBLFNBQU07QUFBQyxVQUFHLEVBQUMsV0FBVSxFQUFDLElBQUUsRUFBRSxlQUFjLElBQUUsS0FBSyxLQUFLLEVBQUUsU0FBTyxDQUFDLEdBQUUsSUFBRSxJQUFJLE1BQU0sQ0FBQztBQUFFLGVBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxHQUFFLEtBQUcsRUFBRSxHQUFFLENBQUMsSUFBRSxFQUFFLE9BQU8sR0FBRSxDQUFDO0FBQUUsVUFBRSxFQUFFLEtBQUssTUFBSSxFQUFFLEtBQUssZ0JBQWM7QUFBQSxJQUN4c0UsR0FBRztBQUFBLElBQUM7QUFBQyxXQUFPLEVBQUUsZ0JBQWdCLEVBQUMsU0FBUSxHQUFFLE1BQUssR0FBRSxPQUFNLEVBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUMsRUFBQztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxXQUFXLEdBQUUsQ0FBQztBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLFFBQU8sRUFBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsVUFBRyxFQUFFLGFBQWEsRUFBRSxPQUFNO0FBQUMsWUFBRyxhQUFhLEVBQUUsU0FBUTtBQUFDLGNBQUcsRUFBRSxNQUFNLFNBQU8sR0FBRTtBQUFDLGdCQUFJLElBQUU7QUFBaUQsa0JBQU0sSUFBSSxFQUFFLGtCQUFrQixHQUFFLENBQUM7QUFBQSxVQUFDO0FBQUMsY0FBSSxJQUFFLEVBQUUsTUFBTSxDQUFDLEtBQUcsSUFBSSxFQUFFO0FBQUssWUFBRSxrQkFBZ0IsRUFBRSxnQkFBYyxFQUFFLGdCQUFjLEdBQUcsRUFBRSxhQUFhO0FBQUEsRUFDcGEsRUFBRSxhQUFhLEtBQUcsRUFBRSxnQkFBZSxFQUFFLFlBQVUsRUFBRSxVQUFRLEVBQUUsVUFBUSxHQUFHLEVBQUUsT0FBTztBQUFBLEVBQy9FLEVBQUUsT0FBTyxLQUFHLEVBQUUsVUFBUyxJQUFFO0FBQUEsUUFBQztBQUFDLFVBQUUsTUFBTSxDQUFDLElBQUUsYUFBYSxFQUFFLE9BQUssSUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBQztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO0FBQUUsTUFBRSxNQUFJO0FBQTBCLGFBQVEsS0FBSyxHQUFFO0FBQUMsVUFBSSxHQUFFO0FBQUUsVUFBRyxNQUFNLFFBQVEsQ0FBQyxFQUFFLEtBQUcsRUFBRSxXQUFTLEVBQUUsS0FBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFBLFVBQU8sT0FBTSxJQUFJLFVBQVUsZ0NBQWdDLENBQUMsRUFBRTtBQUFBLGVBQVUsS0FBRyxhQUFhLFFBQU87QUFBQyxZQUFJLElBQUUsT0FBTyxLQUFLLENBQUM7QUFBRSxZQUFHLEVBQUUsV0FBUyxFQUFFLEtBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUM7QUFBQSxZQUFPLE9BQU0sSUFBSSxVQUFVLGtDQUFrQyxDQUFDLEVBQUU7QUFBQSxNQUFDLE1BQU0sS0FBRTtBQUFFLFVBQUksSUFBRSxFQUFFLFdBQVcsR0FBRSxHQUFFLENBQUM7QUFBRSxRQUFFLE1BQU0sS0FBSyxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsTUFBSSxLQUFHLEVBQUMsU0FBUSxPQUFHLEtBQUksMkJBQTBCLFNBQVEsSUFBRyxZQUFXLEdBQUUsR0FBRSxLQUFHLE1BQU0sVUFBVSxFQUFFLFFBQU87QUFBQSxJQUFDLGNBQWE7QUFBQyxlQUFRLEVBQUUsZ0JBQWdCLE1BQUssT0FBTSxFQUFFLFFBQVEsVUFBVSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUUsRUFBRSxnQkFBZ0IsTUFBSyxVQUFTLEVBQUUsUUFBUSxVQUFVLE9BQU8sS0FBSyxJQUFJLENBQUMsR0FBRSxFQUFFLGdCQUFnQixNQUFLLE9BQU0sRUFBRSxRQUFRLFVBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFFLEVBQUUsZ0JBQWdCLE1BQUssT0FBTSxFQUFFLFFBQVEsVUFBVSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUUsRUFBRSxnQkFBZ0IsTUFBSyxPQUFNLEVBQUUsUUFBUSxVQUFVLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRSxLQUFLLE1BQUksRUFBRTtBQUFBLElBQUc7QUFBQSxJQUFDLE9BQU8sR0FBRSxHQUFFO0FBQUMsVUFBSSxJQUFFLG9CQUFJO0FBQUksV0FBRyxFQUFFLFlBQVUsRUFBRSxTQUFTLENBQUM7QUFBRSxlQUFRLEtBQUssS0FBSyxPQUFNO0FBQUMsWUFBSSxHQUFFO0FBQUUsWUFBRyxhQUFhLEVBQUUsUUFBTSxJQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUksSUFBRyxDQUFDLEdBQUUsSUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFNLEdBQUUsQ0FBQyxLQUFHLElBQUUsRUFBRSxPQUFPLEdBQUUsSUFBRyxDQUFDLEdBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSw4Q0FBOEM7QUFBRSxVQUFFLElBQUksR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFDLGFBQU87QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFFLElBQUUsZ0JBQWdCLElBQUcsT0FBTSx3QkFBd0I7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEdBQUcsR0FBRSxDQUFDLEdBQUUsSUFBRTtBQUFHLGFBQU8sRUFBQyxLQUFJLEVBQUMsS0FBSSxFQUFFLE1BQU0sS0FBRyxhQUFhLEVBQUUsT0FBTyxLQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssR0FBRTtBQUFDLFVBQUksSUFBRTtBQUErQyxZQUFNLElBQUksRUFBRSxrQkFBa0IsR0FBRSxDQUFDO0FBQUEsSUFBQyxNQUFNLEdBQUUsS0FBSyxFQUFFLEtBQUs7QUFBRSxXQUFPLE9BQU8sT0FBTyxJQUFJLE1BQUcsQ0FBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsSUFBSTtBQUFHLFdBQU8sRUFBRSxRQUFNLEVBQUUsT0FBTTtBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsRUFBQyxVQUFTLE9BQUcsYUFBYSxLQUFJLFdBQVUsSUFBRyxTQUFRLE9BQUcsS0FBSSwwQkFBeUIsU0FBUSxJQUFHLFlBQVcsR0FBRSxHQUFFLEtBQUcsTUFBTSxVQUFVLEVBQUUsUUFBTztBQUFBLElBQUMsY0FBYTtBQUFDLGVBQVEsS0FBSyxNQUFJLEVBQUU7QUFBQSxJQUFHO0FBQUEsSUFBQyxJQUFJLEdBQUU7QUFBQyxVQUFJLElBQUUsYUFBYSxFQUFFLE9BQUssSUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUUsUUFBRSxTQUFTLEtBQUssT0FBTSxFQUFFLEdBQUcsS0FBRyxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsSUFBSSxHQUFFLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxTQUFTLEtBQUssT0FBTSxDQUFDO0FBQUUsYUFBTSxDQUFDLEtBQUcsYUFBYSxFQUFFLE9BQUssRUFBRSxlQUFlLEVBQUUsU0FBTyxFQUFFLElBQUksUUFBTSxFQUFFLE1BQUk7QUFBQSxJQUFDO0FBQUEsSUFBQyxJQUFJLEdBQUUsR0FBRTtBQUFDLFVBQUcsT0FBTyxLQUFHLFVBQVUsT0FBTSxJQUFJLE1BQU0saUVBQWlFLE9BQU8sQ0FBQyxFQUFFO0FBQUUsVUFBSSxJQUFFLEVBQUUsU0FBUyxLQUFLLE9BQU0sQ0FBQztBQUFFLFdBQUcsQ0FBQyxJQUFFLEtBQUssTUFBTSxPQUFPLEtBQUssTUFBTSxRQUFRLENBQUMsR0FBRSxDQUFDLElBQUUsQ0FBQyxLQUFHLEtBQUcsS0FBSyxNQUFNLEtBQUssSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsT0FBTyxHQUFFLEdBQUU7QUFBQyxhQUFPLE1BQU0sT0FBTyxHQUFFLEdBQUUsR0FBRztBQUFBLElBQUM7QUFBQSxJQUFDLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFHLENBQUMsRUFBRSxRQUFPLEtBQUssVUFBVSxJQUFJO0FBQUUsVUFBRyxLQUFLLG1CQUFtQixRQUFPLE1BQU0sU0FBUyxHQUFFLEdBQUUsQ0FBQztBQUFFLFlBQU0sSUFBSSxNQUFNLHFDQUFxQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUUsSUFBRSxnQkFBZ0IsSUFBRyxPQUFNLHVCQUF1QjtBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxXQUFXLEdBQUUsQ0FBQztBQUFFLFFBQUcsQ0FBQyxFQUFFLG1CQUFtQixPQUFNLElBQUksRUFBRSxrQkFBa0IsR0FBRSxxQ0FBcUM7QUFBRSxXQUFPLE9BQU8sT0FBTyxJQUFJLE1BQUcsQ0FBQztBQUFBLEVBQUM7QUFBQyxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsSUFBSTtBQUFHLGFBQVEsS0FBSyxFQUFFLEdBQUUsTUFBTSxLQUFLLEVBQUUsV0FBVyxHQUFFLE1BQUssQ0FBQyxDQUFDO0FBQUUsV0FBTztBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsRUFBQyxVQUFTLE9BQUcsYUFBYSxLQUFJLFdBQVUsSUFBRyxTQUFRLE9BQUcsS0FBSSx5QkFBd0IsU0FBUSxJQUFHLFlBQVcsR0FBRSxHQUFFLEtBQUcsQ0FBQyxHQUFFLE1BQUk7QUFBQyxRQUFJLElBQUUsRUFBRSxNQUFNLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRSxNQUFJLElBQUUsS0FBRyxPQUFPLENBQUMsR0FBRSxDQUFDO0FBQUUsV0FBTyxNQUFJLE1BQUksQ0FBQyxJQUFFO0FBQUEsRUFBQyxHQUFFLEtBQUcsQ0FBQyxFQUFDLE9BQU0sRUFBQyxNQUFJO0FBQUMsUUFBRyxNQUFNLENBQUMsS0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQU8sRUFBRSxnQkFBZ0IsQ0FBQztBQUFFLFFBQUksSUFBRTtBQUFHLFFBQUUsTUFBSSxJQUFFLEtBQUksSUFBRSxLQUFLLElBQUksQ0FBQztBQUFHLFFBQUksSUFBRSxDQUFDLElBQUUsRUFBRTtBQUFFLFdBQU8sSUFBRSxLQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUcsSUFBRSxLQUFLLE9BQU8sSUFBRSxFQUFFLENBQUMsS0FBRyxFQUFFLEdBQUUsRUFBRSxRQUFRLElBQUUsRUFBRSxHQUFFLEtBQUcsT0FBSyxJQUFFLEtBQUssT0FBTyxJQUFFLEVBQUUsQ0FBQyxLQUFHLEVBQUUsR0FBRSxFQUFFLFFBQVEsQ0FBQyxLQUFJLElBQUUsRUFBRSxJQUFJLE9BQUcsSUFBRSxLQUFHLE1BQUksT0FBTyxDQUFDLElBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxRQUFRLGNBQWEsRUFBRTtBQUFBLEVBQUMsR0FBRSxLQUFHLEVBQUMsVUFBUyxPQUFHLE9BQU8sS0FBRyxVQUFTLFNBQVEsTUFBRyxLQUFJLHlCQUF3QixRQUFPLFFBQU8sTUFBSyw0Q0FBMkMsU0FBUSxDQUFDLEdBQUUsR0FBRSxNQUFJLEdBQUcsR0FBRSxFQUFFLFFBQVEsTUFBSyxFQUFFLENBQUMsR0FBRSxXQUFVLEdBQUUsR0FBRSxLQUFHLEVBQUMsVUFBUyxPQUFHLE9BQU8sS0FBRyxVQUFTLFNBQVEsTUFBRyxLQUFJLDJCQUEwQixRQUFPLFFBQU8sTUFBSyxxREFBb0QsU0FBUSxDQUFDLEdBQUUsR0FBRSxNQUFJLEdBQUcsR0FBRSxFQUFFLFFBQVEsTUFBSyxFQUFFLENBQUMsR0FBRSxXQUFVLEdBQUUsR0FBRSxLQUFHLEVBQUMsVUFBUyxPQUFHLGFBQWEsTUFBSyxTQUFRLE1BQUcsS0FBSSwrQkFBOEIsTUFBSyxPQUFPLCtKQUErSixHQUFFLFNBQVEsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsTUFBSTtBQUFDLFVBQUksS0FBRyxJQUFFLE1BQU0sT0FBTyxHQUFFLENBQUM7QUFBRyxRQUFJLElBQUUsS0FBSyxJQUFJLEdBQUUsSUFBRSxHQUFFLEdBQUUsS0FBRyxHQUFFLEtBQUcsR0FBRSxLQUFHLEdBQUUsS0FBRyxDQUFDO0FBQUUsUUFBRyxLQUFHLE1BQUksS0FBSTtBQUFDLFVBQUksSUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFBRSxXQUFLLElBQUksQ0FBQyxJQUFFLE9BQUssS0FBRyxLQUFJLEtBQUcsTUFBSTtBQUFBLElBQUM7QUFBQyxXQUFPLElBQUksS0FBSyxDQUFDO0FBQUEsRUFBQyxHQUFFLFdBQVUsQ0FBQyxFQUFDLE9BQU0sRUFBQyxNQUFJLEVBQUUsY0FBYyxRQUFRLDBCQUF5QixFQUFFLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFBO0FBQUcsV0FBTyxJQUFFLE9BQU8sb0NBQWtDLE1BQUksQ0FBQyxvQ0FBa0MsQ0FBQyxFQUFFLG9DQUFrQyxPQUFPLHdCQUFzQixNQUFJLENBQUMsd0JBQXNCLENBQUMsRUFBRTtBQUFBLEVBQXFCO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE9BQUcsS0FBRSxLQUFHLFFBQVEsS0FBSyxJQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBRyxDQUFDO0FBQUEsRUFBQztBQUFDLFdBQVMsR0FBRyxHQUFFO0FBQUMsUUFBRyxHQUFHLElBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLFFBQVEsZ0JBQWUsRUFBRSxFQUFFLFFBQVEsU0FBUSxFQUFFLEVBQUUsUUFBUSxPQUFNLEdBQUc7QUFBRSxTQUFHLHNCQUFzQixDQUFDLDBDQUF5QyxvQkFBb0I7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLE1BQUksS0FBRztBQUFHLFdBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxRQUFHLENBQUMsR0FBRyxDQUFDLEtBQUcsR0FBRyxJQUFFLEdBQUU7QUFBQyxTQUFHLENBQUMsSUFBRTtBQUFHLFVBQUksSUFBRSxlQUFlLENBQUM7QUFBd0MsV0FBRyxJQUFFLFVBQVUsQ0FBQyxlQUFhLEtBQUksR0FBRyxHQUFFLG9CQUFvQjtBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsSUFBRSxTQUFPO0FBQUcsSUFBRSxZQUFVO0FBQUcsSUFBRSxVQUFRO0FBQUcsSUFBRSxPQUFLO0FBQUcsSUFBRSxRQUFNO0FBQUcsSUFBRSxNQUFJO0FBQUcsSUFBRSxZQUFVO0FBQUcsSUFBRSxPQUFLO0FBQUcsSUFBRSxzQkFBb0I7QUFBRyxJQUFFLHdCQUFzQjtBQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsR0FBRyxRQUFJO0FBQWMsTUFBSSxLQUFHLEdBQUUsR0FBRyxJQUFFLEdBQUksR0FBQyxJQUFFO0FBQUssV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLElBQUksRUFBRSxRQUFRLENBQUM7QUFBRSxRQUFHLGFBQWEsSUFBSSxVQUFPLENBQUMsR0FBRSxDQUFDLEtBQUksRUFBRSxHQUFFLE1BQU0sS0FBSyxFQUFFLFdBQVcsR0FBRSxHQUFFLENBQUMsQ0FBQztBQUFBLGFBQVUsS0FBRyxPQUFPLEtBQUcsU0FBUyxVQUFRLEtBQUssT0FBTyxLQUFLLENBQUMsRUFBRSxHQUFFLE1BQU0sS0FBSyxFQUFFLFdBQVcsR0FBRSxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUM7QUFBRSxXQUFPLE9BQU8sRUFBRSxrQkFBZ0IsY0FBWSxFQUFFLE1BQU0sS0FBSyxFQUFFLGNBQWMsR0FBRTtBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsRUFBQyxZQUFXLElBQUcsU0FBUSxNQUFHLFdBQVUsRUFBRSxTQUFRLEtBQUkseUJBQXdCLFNBQVEsRUFBRSxXQUFVO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLElBQUksRUFBRSxRQUFRLENBQUM7QUFBRSxRQUFHLEtBQUcsRUFBRSxPQUFPLFFBQVEsRUFBRSxVQUFRLEtBQUssR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLFdBQVcsR0FBRSxFQUFFLGFBQVksTUFBSyxDQUFDO0FBQUUsUUFBRSxNQUFNLEtBQUssQ0FBQztBQUFBLElBQUM7QUFBQyxXQUFPO0FBQUEsRUFBQztBQUFDLE1BQUksS0FBRyxFQUFDLFlBQVcsSUFBRyxTQUFRLE1BQUcsV0FBVSxFQUFFLFNBQVEsS0FBSSx5QkFBd0IsU0FBUSxFQUFFLFdBQVUsR0FBRSxLQUFHLEVBQUMsVUFBUyxPQUFHLE9BQU8sS0FBRyxVQUFTLFNBQVEsTUFBRyxLQUFJLHlCQUF3QixTQUFRLEVBQUUsZUFBYyxVQUFVLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxXQUFPLElBQUUsT0FBTyxPQUFPLEVBQUMsY0FBYSxLQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsZ0JBQWdCLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDLEdBQUUsU0FBUSxFQUFFLFdBQVUsR0FBRSxLQUFHLENBQUMsSUFBRyxJQUFHLEVBQUUsR0FBRSxLQUFHLE9BQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxVQUFVLENBQUMsR0FBRSxLQUFHLENBQUMsR0FBRSxHQUFFLE1BQUksRUFBRSxXQUFXLFdBQVMsT0FBTyxDQUFDLElBQUUsU0FBUyxHQUFFLENBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUMsT0FBTSxFQUFDLElBQUU7QUFBRSxXQUFPLEdBQUcsQ0FBQyxLQUFHLEtBQUcsSUFBRSxJQUFFLEVBQUUsU0FBUyxDQUFDLElBQUUsRUFBRSxnQkFBZ0IsQ0FBQztBQUFBLEVBQUM7QUFBQyxNQUFJLEtBQUcsRUFBQyxVQUFTLE9BQUcsS0FBRyxNQUFLLFlBQVcsQ0FBQyxHQUFFLEdBQUUsTUFBSSxFQUFFLGNBQVksSUFBSSxFQUFFLE9BQU8sSUFBSSxJQUFFLE1BQUssU0FBUSxNQUFHLEtBQUksMEJBQXlCLE1BQUsseUJBQXdCLFNBQVEsTUFBSSxNQUFLLFNBQVEsRUFBRSxhQUFZLFdBQVUsTUFBSSxFQUFFLFlBQVksUUFBTyxHQUFFLEtBQUcsRUFBQyxVQUFTLE9BQUcsT0FBTyxLQUFHLFdBQVUsU0FBUSxNQUFHLEtBQUksMEJBQXlCLE1BQUsscUNBQW9DLFNBQVEsT0FBRyxFQUFFLENBQUMsTUFBSSxPQUFLLEVBQUUsQ0FBQyxNQUFJLEtBQUksU0FBUSxFQUFFLGFBQVksV0FBVSxDQUFDLEVBQUMsT0FBTSxFQUFDLE1BQUksSUFBRSxFQUFFLFlBQVksVUFBUSxFQUFFLFlBQVksU0FBUSxHQUFFLEtBQUcsRUFBQyxVQUFTLE9BQUcsR0FBRyxDQUFDLEtBQUcsS0FBRyxHQUFFLFNBQVEsTUFBRyxLQUFJLHlCQUF3QixRQUFPLE9BQU0sTUFBSyxnQkFBZSxTQUFRLENBQUMsR0FBRSxNQUFJLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxTQUFRLEVBQUUsWUFBVyxXQUFVLE9BQUcsR0FBRyxHQUFFLEdBQUUsSUFBSSxFQUFDLEdBQUUsS0FBRyxFQUFDLFVBQVMsSUFBRyxTQUFRLE1BQUcsS0FBSSx5QkFBd0IsTUFBSyxpQkFBZ0IsU0FBUSxPQUFHLEdBQUcsR0FBRSxHQUFFLEVBQUUsR0FBRSxTQUFRLEVBQUUsWUFBVyxXQUFVLEVBQUUsZ0JBQWUsR0FBRSxLQUFHLEVBQUMsVUFBUyxPQUFHLEdBQUcsQ0FBQyxLQUFHLEtBQUcsR0FBRSxTQUFRLE1BQUcsS0FBSSx5QkFBd0IsUUFBTyxPQUFNLE1BQUssc0JBQXFCLFNBQVEsQ0FBQyxHQUFFLE1BQUksR0FBRyxHQUFFLEdBQUUsRUFBRSxHQUFFLFNBQVEsRUFBRSxZQUFXLFdBQVUsT0FBRyxHQUFHLEdBQUUsSUFBRyxJQUFJLEVBQUMsR0FBRSxLQUFHLEVBQUMsVUFBUyxPQUFHLE9BQU8sS0FBRyxVQUFTLFNBQVEsTUFBRyxLQUFJLDJCQUEwQixNQUFLLDZCQUE0QixTQUFRLENBQUMsR0FBRSxNQUFJLElBQUUsTUFBSSxFQUFFLENBQUMsTUFBSSxNQUFJLE9BQU8sb0JBQWtCLE9BQU8sbUJBQWtCLFdBQVUsRUFBRSxnQkFBZSxHQUFFLEtBQUcsRUFBQyxVQUFTLE9BQUcsT0FBTyxLQUFHLFVBQVMsU0FBUSxNQUFHLEtBQUksMkJBQTBCLFFBQU8sT0FBTSxNQUFLLDBEQUF5RCxTQUFRLE9BQUcsV0FBVyxDQUFDLEdBQUUsV0FBVSxDQUFDLEVBQUMsT0FBTSxFQUFDLE1BQUksT0FBTyxDQUFDLEVBQUUsY0FBZSxFQUFBLEdBQUUsS0FBRyxFQUFDLFVBQVMsT0FBRyxPQUFPLEtBQUcsVUFBUyxTQUFRLE1BQUcsS0FBSSwyQkFBMEIsTUFBSywwQ0FBeUMsUUFBUSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFHLEdBQUUsSUFBRSxJQUFJLEVBQUUsT0FBTyxXQUFXLENBQUMsQ0FBQztBQUFFLFdBQU8sS0FBRyxFQUFFLEVBQUUsU0FBTyxDQUFDLE1BQUksUUFBTSxFQUFFLG9CQUFrQixFQUFFLFNBQVE7QUFBQSxFQUFDLEdBQUUsV0FBVSxFQUFFLGdCQUFlLEdBQUUsS0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEVBQUUsQ0FBQyxHQUFFLEtBQUcsT0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLFVBQVUsQ0FBQyxHQUFFLEtBQUcsQ0FBQyxFQUFDLE9BQU0sRUFBQyxNQUFJLEtBQUssVUFBVSxDQUFDLEdBQUUsS0FBRyxDQUFDLElBQUcsSUFBRyxFQUFDLFVBQVMsT0FBRyxPQUFPLEtBQUcsVUFBUyxTQUFRLE1BQUcsS0FBSSx5QkFBd0IsU0FBUSxFQUFFLGVBQWMsV0FBVSxHQUFFLEdBQUUsRUFBQyxVQUFTLE9BQUcsS0FBRyxNQUFLLFlBQVcsQ0FBQyxHQUFFLEdBQUUsTUFBSSxFQUFFLGNBQVksSUFBSSxFQUFFLE9BQU8sSUFBSSxJQUFFLE1BQUssU0FBUSxNQUFHLEtBQUksMEJBQXlCLE1BQUssVUFBUyxTQUFRLE1BQUksTUFBSyxXQUFVLEdBQUUsR0FBRSxFQUFDLFVBQVMsT0FBRyxPQUFPLEtBQUcsV0FBVSxTQUFRLE1BQUcsS0FBSSwwQkFBeUIsTUFBSyxnQkFBZSxTQUFRLE9BQUcsTUFBSSxRQUFPLFdBQVUsR0FBRSxHQUFFLEVBQUMsVUFBUyxJQUFHLFNBQVEsTUFBRyxLQUFJLHlCQUF3QixNQUFLLHlCQUF3QixTQUFRLE9BQUcsRUFBRSxXQUFXLFdBQVMsT0FBTyxDQUFDLElBQUUsU0FBUyxHQUFFLEVBQUUsR0FBRSxXQUFVLENBQUMsRUFBQyxPQUFNLEVBQUMsTUFBSSxHQUFHLENBQUMsSUFBRSxFQUFFLGFBQVcsS0FBSyxVQUFVLENBQUMsRUFBQyxHQUFFLEVBQUMsVUFBUyxPQUFHLE9BQU8sS0FBRyxVQUFTLFNBQVEsTUFBRyxLQUFJLDJCQUEwQixNQUFLLDBEQUF5RCxTQUFRLE9BQUcsV0FBVyxDQUFDLEdBQUUsV0FBVSxHQUFFLENBQUM7QUFBRSxLQUFHLGlCQUFlLE9BQUc7QUFBQyxVQUFNLElBQUksWUFBWSwyQkFBMkIsS0FBSyxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQUEsRUFBQztBQUFFLE1BQUksS0FBRyxDQUFDLEVBQUMsT0FBTSxFQUFDLE1BQUksSUFBRSxFQUFFLFlBQVksVUFBUSxFQUFFLFlBQVksVUFBUyxLQUFHLE9BQUcsT0FBTyxLQUFHLFlBQVUsT0FBTyxVQUFVLENBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxRQUFRLE1BQUssRUFBRTtBQUFFLFFBQUcsRUFBRSxXQUFXLFVBQVM7QUFBQyxjQUFPO1FBQUcsS0FBSztBQUFFLGNBQUUsS0FBSyxDQUFDO0FBQUc7QUFBQSxRQUFNLEtBQUs7QUFBRSxjQUFFLEtBQUssQ0FBQztBQUFHO0FBQUEsUUFBTSxLQUFLO0FBQUcsY0FBRSxLQUFLLENBQUM7QUFBRztBQUFBLE1BQUs7QUFBQyxVQUFJLElBQUUsT0FBTyxDQUFDO0FBQUUsYUFBTyxNQUFJLE1BQUksT0FBTyxFQUFFLElBQUUsSUFBRTtBQUFBLElBQUM7QUFBQyxRQUFJLElBQUUsU0FBUyxHQUFFLENBQUM7QUFBRSxXQUFPLE1BQUksTUFBSSxLQUFHLElBQUU7QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxFQUFDLE9BQU0sRUFBQyxJQUFFO0FBQUUsUUFBRyxHQUFHLENBQUMsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLFNBQVMsQ0FBQztBQUFFLGFBQU8sSUFBRSxJQUFFLE1BQUksSUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFFLElBQUU7QUFBQSxJQUFDO0FBQUMsV0FBTyxFQUFFLGdCQUFnQixDQUFDO0FBQUEsRUFBQztBQUFDLE1BQUksS0FBRyxHQUFHLE9BQU8sQ0FBQyxFQUFDLFVBQVMsT0FBRyxLQUFHLE1BQUssWUFBVyxDQUFDLEdBQUUsR0FBRSxNQUFJLEVBQUUsY0FBWSxJQUFJLEVBQUUsT0FBTyxJQUFJLElBQUUsTUFBSyxTQUFRLE1BQUcsS0FBSSwwQkFBeUIsTUFBSyx5QkFBd0IsU0FBUSxNQUFJLE1BQUssU0FBUSxFQUFFLGFBQVksV0FBVSxNQUFJLEVBQUUsWUFBWSxRQUFPLEdBQUUsRUFBQyxVQUFTLE9BQUcsT0FBTyxLQUFHLFdBQVUsU0FBUSxNQUFHLEtBQUksMEJBQXlCLE1BQUssOENBQTZDLFNBQVEsTUFBSSxNQUFHLFNBQVEsRUFBRSxhQUFZLFdBQVUsR0FBRSxHQUFFLEVBQUMsVUFBUyxPQUFHLE9BQU8sS0FBRyxXQUFVLFNBQVEsTUFBRyxLQUFJLDBCQUF5QixNQUFLLGlEQUFnRCxTQUFRLE1BQUksT0FBRyxTQUFRLEVBQUUsYUFBWSxXQUFVLEdBQUUsR0FBRSxFQUFDLFVBQVMsSUFBRyxTQUFRLE1BQUcsS0FBSSx5QkFBd0IsUUFBTyxPQUFNLE1BQUssd0JBQXVCLFNBQVEsQ0FBQyxHQUFFLEdBQUUsTUFBSSxHQUFHLEdBQUUsR0FBRSxDQUFDLEdBQUUsV0FBVSxPQUFHLEdBQUcsR0FBRSxHQUFFLElBQUksRUFBQyxHQUFFLEVBQUMsVUFBUyxJQUFHLFNBQVEsTUFBRyxLQUFJLHlCQUF3QixRQUFPLE9BQU0sTUFBSyx1QkFBc0IsU0FBUSxDQUFDLEdBQUUsR0FBRSxNQUFJLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxXQUFVLE9BQUcsR0FBRyxHQUFFLEdBQUUsR0FBRyxFQUFDLEdBQUUsRUFBQyxVQUFTLElBQUcsU0FBUSxNQUFHLEtBQUkseUJBQXdCLE1BQUssMkJBQTBCLFNBQVEsQ0FBQyxHQUFFLEdBQUUsTUFBSSxHQUFHLEdBQUUsR0FBRSxFQUFFLEdBQUUsV0FBVSxFQUFFLGdCQUFlLEdBQUUsRUFBQyxVQUFTLElBQUcsU0FBUSxNQUFHLEtBQUkseUJBQXdCLFFBQU8sT0FBTSxNQUFLLDhCQUE2QixTQUFRLENBQUMsR0FBRSxHQUFFLE1BQUksR0FBRyxHQUFFLEdBQUUsRUFBRSxHQUFFLFdBQVUsT0FBRyxHQUFHLEdBQUUsSUFBRyxJQUFJLEVBQUMsR0FBRSxFQUFDLFVBQVMsT0FBRyxPQUFPLEtBQUcsVUFBUyxTQUFRLE1BQUcsS0FBSSwyQkFBMEIsTUFBSyw2QkFBNEIsU0FBUSxDQUFDLEdBQUUsTUFBSSxJQUFFLE1BQUksRUFBRSxDQUFDLE1BQUksTUFBSSxPQUFPLG9CQUFrQixPQUFPLG1CQUFrQixXQUFVLEVBQUUsZ0JBQWUsR0FBRSxFQUFDLFVBQVMsT0FBRyxPQUFPLEtBQUcsVUFBUyxTQUFRLE1BQUcsS0FBSSwyQkFBMEIsUUFBTyxPQUFNLE1BQUsscURBQW9ELFNBQVEsT0FBRyxXQUFXLEVBQUUsUUFBUSxNQUFLLEVBQUUsQ0FBQyxHQUFFLFdBQVUsQ0FBQyxFQUFDLE9BQU0sRUFBQyxNQUFJLE9BQU8sQ0FBQyxFQUFFLGNBQWEsRUFBRSxHQUFFLEVBQUMsVUFBUyxPQUFHLE9BQU8sS0FBRyxVQUFTLFNBQVEsTUFBRyxLQUFJLDJCQUEwQixNQUFLLHVDQUFzQyxRQUFRLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxJQUFJLEVBQUUsT0FBTyxXQUFXLEVBQUUsUUFBUSxNQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsUUFBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsUUFBUSxNQUFLLEVBQUU7QUFBRSxRQUFFLEVBQUUsU0FBTyxDQUFDLE1BQUksUUFBTSxFQUFFLG9CQUFrQixFQUFFO0FBQUEsSUFBTztBQUFDLFdBQU87QUFBQSxFQUFDLEdBQUUsV0FBVSxFQUFFLGdCQUFlLENBQUMsR0FBRSxFQUFFLFFBQU8sRUFBRSxNQUFLLEVBQUUsT0FBTSxFQUFFLEtBQUksRUFBRSxTQUFRLEVBQUUsV0FBVSxFQUFFLFNBQVMsR0FBRSxLQUFHLEVBQUMsTUFBSyxJQUFHLFVBQVMsSUFBRyxNQUFLLElBQUcsUUFBTyxHQUFFLEdBQUUsS0FBRyxFQUFDLFFBQU8sRUFBRSxRQUFPLE1BQUssSUFBRyxPQUFNLElBQUcsVUFBUyxJQUFHLFVBQVMsSUFBRyxXQUFVLEVBQUUsV0FBVSxLQUFJLElBQUcsUUFBTyxJQUFHLFFBQU8sSUFBRyxTQUFRLEVBQUUsU0FBUSxLQUFJLElBQUcsTUFBSyxJQUFHLE1BQUssRUFBRSxNQUFLLE9BQU0sRUFBRSxPQUFNLEtBQUksSUFBRyxLQUFJLEVBQUUsS0FBSSxXQUFVLEVBQUUsVUFBUztBQUFFLFdBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUcsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLE9BQU8sT0FBRyxFQUFFLFFBQU0sQ0FBQyxHQUFFLElBQUUsRUFBRSxLQUFLLE9BQUcsQ0FBQyxFQUFFLE1BQU0sS0FBRyxFQUFFLENBQUM7QUFBRSxVQUFHLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxPQUFPLENBQUMsWUFBWTtBQUFFLGFBQU87QUFBQSxJQUFDO0FBQUMsV0FBTyxFQUFFLEtBQUssUUFBSSxFQUFFLFlBQVUsRUFBRSxTQUFTLENBQUMsS0FBRyxFQUFFLFNBQU8sYUFBYSxFQUFFLFVBQVEsQ0FBQyxFQUFFLE1BQU07QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBRyxhQUFhLEVBQUUsS0FBSyxRQUFPO0FBQUUsUUFBRyxFQUFDLGVBQWMsR0FBRSxVQUFTLEdBQUUsYUFBWSxHQUFFLFFBQU8sR0FBRSxhQUFZLEVBQUMsSUFBRTtBQUFFLFNBQUcsRUFBRSxXQUFXLElBQUksTUFBSSxJQUFFLElBQUUsRUFBRSxNQUFNLENBQUM7QUFBRyxRQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsRUFBRSxJQUFJO0FBQUUsUUFBRyxDQUFDLEdBQUU7QUFBQyxVQUFHLE9BQU8sRUFBRSxVQUFRLGVBQWEsSUFBRSxFQUFFLFdBQVUsQ0FBQyxLQUFHLE9BQU8sS0FBRyxTQUFTLFFBQU8sSUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUU7QUFBRSxVQUFFLGFBQWEsTUFBSSxLQUFHLEVBQUUsT0FBTyxRQUFRLElBQUUsS0FBRztBQUFBLElBQUU7QUFBQyxVQUFJLEVBQUUsQ0FBQyxHQUFFLE9BQU8sRUFBRTtBQUFVLFFBQUksSUFBRSxFQUFDLE9BQU0sUUFBTyxNQUFLLE9BQU07QUFBRSxRQUFHLEtBQUcsT0FBTyxLQUFHLFlBQVUsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLElBQUksQ0FBQztBQUFFLFVBQUcsR0FBRTtBQUFDLFlBQUksSUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUUsZUFBTyxFQUFFLFdBQVcsS0FBSyxDQUFDLEdBQUU7QUFBQSxN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Q0FBQyxFQUFDLEdBQUUsS0FBSSxFQUFDLFFBQU8sUUFBTyxPQUFNLE9BQUcsYUFBWSxDQUFDLEVBQUMsUUFBTyxLQUFJLFFBQU8sSUFBRyxHQUFFLEVBQUMsUUFBTyxNQUFLLFFBQU8sRUFBRSxpQkFBZ0IsQ0FBQyxFQUFDLEVBQUM7QUFBRSxXQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBSSxFQUFFLFdBQVMsRUFBRSxRQUFRLGFBQVcsT0FBTTtBQUFDLFVBQUksSUFBRSxFQUFFLE1BQU0sd0NBQXdDO0FBQUUsVUFBRyxFQUFFLFFBQU0sTUFBSSxFQUFFLENBQUM7QUFBRSxVQUFJLElBQUUsRUFBRSxNQUFNLDJDQUEyQztBQUFFLGFBQU8sSUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBRyxJQUFJLEVBQUUsUUFBUSxTQUFRLEVBQUUsQ0FBQztBQUFBLElBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxZQUFZLEtBQUssT0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQUksQ0FBQztBQUFFLFFBQUcsQ0FBQyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsWUFBVyxFQUFHO0FBQVksVUFBRSxLQUFHLEVBQUUsS0FBSyxPQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBSSxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUcsQ0FBQyxFQUFFLFFBQU8sRUFBRSxDQUFDLE1BQUksTUFBSSxJQUFFLEtBQUssQ0FBQztBQUFJLFFBQUksSUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLE1BQU0sRUFBRSxRQUFRLGNBQWEsUUFBSSxFQUFDLEtBQUksT0FBTSxLQUFJLE9BQU0sS0FBSSxPQUFNLEtBQUksT0FBTSxLQUFJLE9BQU0sS0FBSSxNQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQUUsV0FBTyxFQUFFLFNBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUcsYUFBYSxFQUFFLE1BQU0sUUFBTyxFQUFFO0FBQU0sUUFBRyxFQUFFLEtBQUk7QUFBQyxVQUFJ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QyxNQUFHLE9BQU8sS0FBRyxTQUFTLFFBQU8sRUFBRSxDQUFDO0FBQUUsTUFBSSxJQUFFLG9CQUFJO0FBQUksU0FBTyxFQUFFLENBQUM7QUFBRSxXQUFTLEVBQUUsR0FBRTtBQUFDLFFBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxRQUFPLEVBQUUsSUFBSSxDQUFDO0FBQUUsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFdBQU8sRUFBRSxJQUFJLEdBQUUsQ0FBQyxHQUFFO0FBQUEsRUFBQztBQUFDLFdBQVMsRUFBRSxHQUFFO0FBQUMsWUFBTyxHQUFHLENBQUMsR0FBQztBQUFBLE1BQUUsS0FBSztBQUFHLGVBQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQUEsTUFBRSxLQUFLO0FBQUcsZUFBTyxFQUFFLEVBQUMsR0FBRyxHQUFFLE9BQU0sRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFDLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBRyxlQUFPLEVBQUUsRUFBQyxHQUFHLEdBQUUsZUFBYyxFQUFFLEVBQUUsYUFBYSxHQUFFLGNBQWEsRUFBRSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQUEsTUFBRSxLQUFLLElBQUc7QUFBQyxZQUFHLEVBQUMsZ0JBQWUsR0FBRSxVQUFTLEVBQUMsSUFBRTtBQUFFLGVBQU8sS0FBRyxJQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUUsRUFBQyxHQUFHLEdBQUUsVUFBUyxHQUFFLGdCQUFlLEVBQUMsQ0FBQztBQUFBLE1BQUM7QUFBQSxNQUFDLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBRyxlQUFPLEVBQUUsRUFBQyxHQUFHLEdBQUUsVUFBUyxFQUFFLEVBQUUsUUFBUSxFQUFDLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBQSxNQUFFLEtBQUs7QUFBRyxlQUFPLEVBQUUsQ0FBQztBQUFBLE1BQUU7QUFBUSxjQUFNLElBQUksR0FBRyxDQUFDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLElBQUUsSUFBRztBQUFDLFNBQU8sR0FBRyxHQUFFLE9BQUcsT0FBTyxLQUFHLFdBQVMsRUFBRSxHQUFFLEVBQUUsTUFBTTtBQUFBLENBQzF5QixDQUFDLElBQUUsQ0FBQztBQUFDO0FBQUksSUFBQyxLQUFHLE1BQUk7QUFBRSxHQUFPLEtBQUc7QUFBUyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBYSxFQUFDLE1BQUssSUFBRyxVQUFTLEdBQUUsR0FBRSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxJQUFFLElBQUc7QUFBQyxTQUFhLEdBQUcsRUFBRSxjQUFpQixHQUFFLEVBQUMsTUFBSyxJQUFHLElBQUcsRUFBRSxJQUFHLFVBQVMsR0FBRSxPQUFNLENBQUMsQ0FBQyxFQUFFLGFBQVksZ0JBQWUsRUFBRSxlQUFjO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxPQUFPLG1CQUFrQixDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxFQUFDLE1BQUssT0FBTSxHQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLElBQUcsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQU8sR0FBRyxFQUFFLENBQUMsR0FBRSxFQUFDLEdBQUcsR0FBRSxnQkFBZSxFQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBYSxFQUFDLE1BQUssSUFBRyxPQUFNLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLElBQUUsSUFBRyxJQUFFLENBQUEsR0FBRztBQUFDLFNBQTJCLEVBQUMsTUFBSyxJQUFHLGVBQWMsR0FBRSxjQUFhLEdBQUUsU0FBUSxFQUFFLFFBQU87QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBYSxFQUFDLE1BQUssSUFBRyxVQUFTLEVBQUM7QUFBQztBQUFDLElBQUksS0FBRyxFQUFDLE1BQUssR0FBRTtBQUFFLElBQUksS0FBRyxFQUFDLE1BQUssR0FBRSxNQUFLLEtBQUUsR0FBRSxLQUFHLEVBQUMsTUFBSyxHQUFFLE1BQUssTUFBRyxTQUFRLEtBQUUsR0FBRSxLQUFHLEVBQUMsTUFBSyxFQUFDLEdBQUUsS0FBRyxFQUFDLE1BQUssR0FBRSxNQUFLLEtBQUUsR0FBRSxJQUFFLENBQUMsSUFBRyxFQUFFLEdBQUUsS0FBRyxDQUFDLElBQUcsRUFBRTtBQUFFLFNBQVMsRUFBRSxHQUFFLEdBQUU7QUFBYSxNQUFJLElBQUUsQ0FBRTtBQUFDLFdBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUksT0FBSSxLQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsU0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFNLENBQUMsR0FBRSxHQUFFLE1BQUk7QUFBQyxRQUFJLElBQUUsQ0FBQyxFQUFFLEtBQUcsUUFBTSxFQUFFO0FBQVcsUUFBRyxNQUFJLE1BQUcsUUFBTTtBQUFHLFFBQUcsRUFBQyxRQUFPLEVBQUMsSUFBRSxHQUFFLElBQUU7QUFBRSxXQUFLLEtBQUcsS0FBRyxJQUFFLEtBQUc7QUFBQyxVQUFJLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBRSxVQUFHLGFBQWEsUUFBTztBQUFDLFlBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLFFBQU87QUFBQSxNQUFDLFdBQVMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQU87QUFBRSxVQUFFLE1BQUk7QUFBQSxJQUFHO0FBQUMsV0FBTyxNQUFJLE1BQUksTUFBSSxJQUFFLElBQUU7QUFBQSxFQUFFO0FBQUM7QUFBSSxJQUFjLEtBQUcsR0FBRyxJQUFJO0FBQWtDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxDQUFDLEVBQUUsS0FBRyxRQUFNLEVBQUU7QUFBVyxNQUFHLE1BQUksTUFBRyxRQUFRO0FBQUMsTUFBSSxJQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUUsTUFBRyxHQUFFO0FBQUMsUUFBRyxFQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksUUFBTSxNQUFJO0FBQUEsRUFDcHdDLFFBQU8sSUFBRTtBQUFFLFFBQUcsTUFBSTtBQUFBLEtBQ2pCLE1BQUksUUFBTSxNQUFJLFlBQVUsTUFBSSxTQUFTLFFBQU8sSUFBRTtBQUFBLEVBQUMsT0FBSztBQUFDLFFBQUcsTUFBSSxRQUFNLEVBQUUsT0FBTyxJQUFFLENBQUMsTUFBSTtBQUFBLEVBQ25GLFFBQU8sSUFBRTtBQUFFLFFBQUcsTUFBSTtBQUFBLEtBQ2pCLE1BQUksUUFBTSxNQUFJLFlBQVUsTUFBSSxTQUFTLFFBQU8sSUFBRTtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLElBQUU7QUFBRSxNQUFFLEdBQUcsR0FBRSxHQUFFLEVBQUMsV0FBVSxLQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxHQUFFLEVBQUMsV0FBVSxLQUFFLENBQUMsR0FBRSxJQUFFLEdBQUcsR0FBRSxHQUFFLEVBQUMsV0FBVSxLQUFFLENBQUM7QUFBRSxNQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsRUFBQyxXQUFVLEtBQUUsQ0FBQztBQUFFLFNBQU8sTUFBSTtBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsSUFBSSxLQUFHLGNBQWMsTUFBSztBQUFBLEVBQTRCLFlBQVksR0FBRSxHQUFFLElBQUUsUUFBTztBQUFDLFVBQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUc7QUFBaEgsZ0NBQUs7QUFBNkcsU0FBSyxPQUFLO0FBQUEsRUFBQztBQUFDLEdBQUUsS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUU7QUFBRSxNQUFHLEVBQUUsU0FBTyxVQUFRLEVBQUUsWUFBVSxxREFBcUQsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFPLE9BQU0sTUFBRztBQUFDLFFBQUksSUFBRSxNQUFNLEVBQUUsRUFBRSxjQUFhLEVBQUMsUUFBTyxPQUFNLENBQUM7QUFBRSxXQUFPLElBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRTtBQUFBLEVBQU07QUFBQztBQUFDLEdBQUcsaUJBQWUsTUFBSTtBQUFHLElBQUksS0FBRztBQUFHLElBQUksS0FBRztBQUFLLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxPQUFLLFFBQU0sT0FBTyxHQUFHLFVBQVM7QUFBQyxRQUFJLElBQUU7QUFBRyxXQUFPLEtBQUcsR0FBRyxZQUFVLE1BQUs7QUFBQSxFQUFDO0FBQUMsU0FBTyxLQUFHLEdBQUcsWUFBVSxLQUFHLHVCQUFPLE9BQU8sSUFBSSxHQUFFLElBQUk7QUFBRTtBQUFDLElBQUksS0FBRztBQUFHLFNBQVEsSUFBRSxHQUFFLEtBQUcsSUFBRyxJQUFJLElBQUk7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxJQUFFLFFBQU87QUFBQyxLQUFHLENBQUM7QUFBRSxXQUFTLEVBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUcsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxFQUFFLE9BQU0sT0FBTyxPQUFPLElBQUksTUFBTSw2QkFBNkIsQ0FBQyxJQUFJLEdBQUUsRUFBQyxNQUFLLEVBQUMsQ0FBQztBQUFFLFdBQU87QUFBQSxFQUFDO0FBQUMsU0FBTztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsSUFBSSxLQUFHLE9BQU8sWUFBWSxPQUFPLFFBQVEsRUFBQyxNQUFLLENBQUMsVUFBVSxHQUFFLFVBQVMsQ0FBQyxRQUFPLFFBQU8sVUFBVSxHQUFFLGNBQWEsQ0FBQyxVQUFVLEdBQUUsY0FBYSxDQUFDLFVBQVUsR0FBRSxXQUFVLENBQUUsR0FBQyxPQUFNLENBQUEsR0FBRyxjQUFhLENBQUUsR0FBQyxhQUFZLENBQUMsVUFBVSxHQUFFLE9BQU0sQ0FBQyxVQUFVLEdBQUUsYUFBWSxJQUFHLGFBQVksQ0FBQSxHQUFHLFNBQVEsQ0FBQyxVQUFVLEdBQUUsYUFBWSxDQUFDLE9BQU0sU0FBUSxVQUFVLEdBQUUsWUFBVyxDQUFDLFdBQVUsVUFBVSxHQUFFLGNBQWEsQ0FBQyxXQUFVLFVBQVUsR0FBRSxVQUFTLENBQUMsVUFBVSxHQUFFLGNBQWEsQ0FBQyxXQUFVLFVBQVUsR0FBRSxhQUFZLENBQUMsVUFBVSxHQUFFLGlCQUFnQixDQUFDLE9BQU0sU0FBUSxVQUFVLEdBQUUsY0FBYSxDQUFDLFVBQVUsR0FBRSxrQkFBaUIsQ0FBQyxXQUFVLFVBQVUsR0FBRSxTQUFRLENBQUEsR0FBRyxLQUFJLElBQUcsUUFBTyxDQUFBLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLENBQUMsR0FBRSxDQUFDLEdBQUcsR0FBRSxVQUFTLE9BQU0sb0JBQW1CLG1CQUFrQixrQkFBaUIsbUJBQWtCLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRSxLQUFHO0FBQUcsSUFBSSxLQUFHLEdBQUcsRUFBRSxHQUFFLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxTQUFTLE1BQU07QUFBTTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLFNBQVMsSUFBSTtBQUFNO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFNLGdDQUFnQyxLQUFLLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTSxpREFBaUQsS0FBSyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU07QUFBQTtBQUFBLEVBRXpnRSxDQUFDO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sTUFBTSxRQUFRLENBQUMsS0FBRyxFQUFFLFNBQU87QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxTQUFPLFFBQU8sS0FBRyxPQUFLLFNBQU8sRUFBRSxTQUFPLGFBQVcsQ0FBQyxLQUFHLEVBQUUsU0FBUyxFQUFFLElBQUk7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU8sRUFBRSxjQUFhLElBQUUsRUFBQyxHQUFHLEdBQUUsVUFBUyxFQUFFLFNBQVMsSUFBSSxPQUFHLEdBQUcsR0FBRSxHQUFFLENBQUMsQ0FBQyxFQUFDLElBQUUsR0FBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFPLGVBQWUsR0FBRSxHQUFFLEVBQUMsS0FBSSxHQUFFLFlBQVcsTUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFO0FBQU8sV0FBUSxJQUFFLEVBQUUsU0FBUyxJQUFJLFNBQU8sR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxRQUFHLE1BQUk7QUFBQSxLQUMzWixLQUFJLE1BQUksS0FBRyxNQUFNLEtBQUssQ0FBQyxFQUFFLFFBQVE7QUFBQyxRQUFHLE1BQUksRUFBRSxRQUFRO0FBQUEsRUFBQTtBQUFDLFNBQU07QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFO0FBQUUsVUFBTyxFQUFFLE1BQU07QUFBQSxJQUFBLEtBQUk7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFTLEtBQUk7QUFBVSxhQUFNO0FBQUEsRUFBRTtBQUFDLE1BQUksSUFBRSxFQUFFLE1BQU07QUFBTyxXQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLFFBQUksSUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUUsRUFBRSxNQUFNLElBQUUsQ0FBQztBQUFFLFFBQUcsTUFBTSxRQUFRLENBQUMsS0FBRyxPQUFPLEtBQUcsWUFBVSxNQUFJLEVBQUUsU0FBTyxFQUFFLFFBQVE7QUFBQSxFQUFBO0FBQUMsU0FBUTtBQUFBO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsRUFBRSxRQUFRLElBQUUsR0FBRyxFQUFFLE9BQUcsRUFBRSxVQUFTLEVBQUUsQ0FBQyxJQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxNQUFNLEtBQUksTUFBSztBQUFpQjtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFO0FBQUUsTUFBRyxFQUFFLFNBQU8sZ0JBQWU7QUFBQyxRQUFJLElBQUUsRUFBRSxPQUFPO0FBQUssV0FBTyxFQUFFLENBQUMsS0FBRyxHQUFHLEVBQUUsT0FBRyxFQUFFLGFBQVksRUFBRSxDQUFDO0FBQUEsRUFBQztBQUFDLFNBQU8sR0FBRyxDQUFDLEtBQUcsR0FBRyxFQUFFLE9BQUcsRUFBRSxpQkFBZ0IsRUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxLQUFHLENBQUMsR0FBRyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsRUFBRSxDQUFDLEtBQUcsRUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxLQUFHLE9BQUssU0FBTyxFQUFFLGVBQWU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLEtBQUcsT0FBSyxTQUFPLEVBQUUsY0FBYztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEtBQUcsT0FBSyxTQUFPLEVBQUU7QUFBZ0I7QUFBQyxTQUFTLEVBQUUsR0FBRTtBQUFDLFNBQU8sS0FBRyxPQUFLLFNBQU8sRUFBRTtBQUFlO0FBQUMsU0FBUyxFQUFFLEdBQUU7QUFBQyxTQUFPLEdBQUcsS0FBRyxPQUFLLFNBQU8sRUFBRSxXQUFXO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUksSUFBRSxDQUFFLEdBQUM7QUFBRSxXQUFRLEtBQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxPQUFJLE1BQUksTUFBSSxNQUFJLEVBQUUsS0FBSyxDQUFDLElBQUUsRUFBRSxNQUFNLEVBQUUsSUFBRyxLQUFJLE1BQUksQ0FBQyxJQUFFLE1BQUksVUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFFLElBQUU7QUFBRSxTQUFPLE1BQUksT0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFLLEtBQUUsTUFBSSxHQUFHLEdBQUUsRUFBRSxDQUFDLE1BQUksT0FBSyxFQUFFLE1BQUssR0FBRyxFQUFFLFFBQVEsT0FBSyxFQUFFLE1BQUssS0FBSSxHQUFHLElBQUc7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLE1BQU07QUFBQSxDQUM5c0MsRUFBRSxJQUFJLENBQUMsR0FBRSxHQUFFLE1BQUksTUFBSSxLQUFHLE1BQUksRUFBRSxTQUFPLElBQUUsSUFBRSxNQUFJLEtBQUcsTUFBSSxFQUFFLFNBQU8sSUFBRSxFQUFFLEtBQUksSUFBRyxNQUFJLElBQUUsRUFBRSxZQUFVLEVBQUUsV0FBVztBQUFFLFNBQU8sRUFBRSxjQUFZLGFBQVcsRUFBRSxJQUFJLE9BQUcsRUFBRSxXQUFTLElBQUUsS0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsSUFBSSxPQUFHLEVBQUUsV0FBUyxJQUFFLENBQUUsSUFBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFFLEdBQUUsTUFBSSxNQUFJLEtBQUcsRUFBRSxJQUFFLENBQUMsRUFBRSxTQUFPLEtBQUcsRUFBRSxTQUFPLEtBQUcsRUFBRSxNQUFJLGlCQUFlLEVBQUUsT0FBRyxFQUFFLE9BQUcsR0FBRSxFQUFFLEdBQUUsRUFBRSxFQUFFLFNBQVMsSUFBSSxLQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRSxFQUFFLEdBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBRyxHQUFFLEVBQUUsR0FBRSxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBRyxHQUFFLENBQUMsR0FBRSxDQUFBLENBQUUsRUFBRSxJQUFJLE9BQUcsRUFBRSxjQUFZLFVBQVEsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsRUFBQyxjQUFhLEdBQUUsa0JBQWlCLEdBQUUsU0FBUSxFQUFDLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxTQUFTLE1BQU0sU0FBTyxFQUFFLFNBQVMsSUFBSSxPQUFLLEtBQUcsRUFBRSxhQUFhLE1BQU0sRUFBRSxTQUFTLE1BQU0sUUFBTyxFQUFFLFNBQVMsSUFBSSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsRUFBRSxDQUFDLEdBQUU7QUFBRSxNQUFHLEVBQUUsV0FBUyxNQUFLO0FBQUMsUUFBSSxJQUFFLEVBQUUsTUFBTSxnQ0FBZ0M7QUFBRSxRQUFFLElBQUUsRUFBRSxPQUFPLGFBQWEsU0FBTyxPQUFPO0FBQUEsRUFBaUIsTUFBTSxLQUFFLEVBQUUsU0FBTyxJQUFFO0FBQUUsTUFBSSxJQUFFLEVBQUUsTUFBTTtBQUFBLENBQzF3QixFQUFFLElBQUksT0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQUUsTUFBRyxFQUFFLGNBQVksY0FBWSxFQUFFLFNBQU8sZUFBZSxRQUFPLEVBQUUsRUFBRSxJQUFJLE9BQUcsRUFBRSxXQUFTLElBQUUsQ0FBQSxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBRSxTQUFPLEVBQUUsRUFBRSxJQUFJLE9BQUcsRUFBRSxXQUFTLElBQUUsQ0FBQSxJQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUUsR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLElBQUUsQ0FBQyxFQUFFLFNBQU8sS0FBRyxFQUFFLFNBQU8sS0FBRyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFHLENBQUMsV0FBVyxLQUFLLEVBQUUsT0FBRyxHQUFFLEVBQUUsQ0FBQyxJQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sR0FBRSxFQUFFLEdBQUUsQ0FBQyxHQUFHLEVBQUUsT0FBRyxHQUFFLEVBQUUsR0FBRSxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBRyxHQUFFLENBQUMsR0FBRSxDQUFBLENBQUUsRUFBRSxJQUFJLE9BQUcsRUFBRSxPQUFPLENBQUMsR0FBRSxNQUFJLEVBQUUsU0FBTyxLQUFHLE9BQU8sS0FBSyxFQUFFLE9BQUcsR0FBRSxFQUFFLENBQUMsSUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEdBQUUsRUFBRSxHQUFFLEVBQUUsT0FBRyxHQUFFLEVBQUUsSUFBRSxNQUFJLENBQUMsSUFBRSxDQUFDLEdBQUcsR0FBRSxDQUFDLEdBQUUsQ0FBQSxDQUFFLENBQUMsRUFBRSxJQUFJLE9BQUcsRUFBRSxjQUFZLFVBQVEsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUUsQ0FBQyxDQUFDO0FBQUUsV0FBUyxFQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsYUFBVyxPQUFPLFFBQU8sRUFBRSxPQUFHLEdBQUUsRUFBRSxFQUFFLFdBQVMsSUFBRSxFQUFFLE1BQU0sR0FBRSxFQUFFLElBQUU7QUFBRSxRQUFJLElBQUU7QUFBRSxhQUFRLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBRyxLQUFHLEVBQUUsQ0FBQyxFQUFFLFdBQVMsR0FBRSxJQUFJO0FBQUksV0FBTyxNQUFJLElBQUUsSUFBRSxLQUFHLEtBQUcsQ0FBQyxJQUFFLEVBQUUsTUFBTSxHQUFFLEVBQUUsSUFBRSxFQUFFLElBQUUsRUFBRSxNQUFNLEdBQUUsQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLENBQUMsRUFBRSxRQUFRO0FBQUMsVUFBTyxFQUFFLE1BQUk7QUFBQSxJQUFFLEtBQUk7QUFBQSxJQUFRLEtBQUk7QUFBQSxJQUFjLEtBQUk7QUFBQSxJQUFjLEtBQUk7QUFBQSxJQUFRLEtBQUk7QUFBQSxJQUFjLEtBQUk7QUFBZSxhQUFRO0FBQUEsSUFBQztBQUFRLGFBQVE7QUFBQSxFQUFBO0FBQUM7QUFBQyxJQUFJLEtBQUcsb0JBQUk7QUFBUSxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssR0FBRSxNQUFLLEVBQUMsSUFBRSxHQUFFO0FBQUUsU0FBTyxHQUFHLElBQUksQ0FBQyxJQUFFLElBQUUsR0FBRyxJQUFJLENBQUMsS0FBRyxJQUFFLG9CQUFJLE9BQUksR0FBRyxJQUFJLEdBQUUsQ0FBQyxJQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLElBQUksTUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksSUFBSSxHQUFFLEdBQUcsR0FBRSxDQUFDLEtBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxLQUFHLEtBQUc7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLENBQUMsS0FBRyxDQUFDLEVBQUUsR0FBRSxDQUFDLGdCQUFlLGdCQUFlLGVBQWMsY0FBYyxDQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFDLE1BQUssRUFBQyxJQUFFLEdBQUUsSUFBRSxFQUFFLFVBQVUsT0FBTyxPQUFHLEVBQUUsU0FBTyxjQUFZLEVBQUUsU0FBTyxTQUFTLEVBQUUsUUFBTyxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsQ0FBQyxFQUFFLFNBQU8sZ0JBQWMsTUFBSSxHQUFHO0FBQUUsSUFBRSxXQUFTLFFBQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxTQUFRLENBQUUsR0FBRSxFQUFFLGFBQVcsVUFBUSxFQUFFLEtBQUssRUFBRSxhQUFXLFNBQU8sTUFBSSxHQUFHLEdBQUUsR0FBRyxDQUFDLEtBQUcsRUFBRSxLQUFLLEtBQUksRUFBRSxrQkFBa0IsQ0FBQztBQUFFLE1BQUksSUFBRSxHQUFHLEdBQUUsRUFBQyxjQUFhLEdBQUUsa0JBQWlCLEdBQUUsU0FBUSxFQUFDLENBQUMsR0FBRSxJQUFFLENBQUU7QUFBQyxXQUFPLENBQUMsR0FBRSxDQUFDLEtBQUksRUFBRSxVQUFVLE9BQUksS0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQyxHQUFFLE1BQUksRUFBRSxTQUFPLElBQUUsRUFBRSxLQUFLLEVBQUUsV0FBUyxJQUFFLElBQUUsR0FBRyxFQUFFLENBQUMsSUFBRSxFQUFFLGFBQVcsVUFBUSxLQUFHLEVBQUUsS0FBSyxHQUFHLEVBQUUsV0FBUyxJQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsU0FBTyxFQUFFLFdBQVMsT0FBSyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsVUFBUyxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxTQUFPLElBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQyxHQUFFO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUMsTUFBSyxFQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBTyxlQUFjLElBQUUsSUFBRSxNQUFJLEtBQUksSUFBRSxJQUFFLE1BQUksS0FBSSxJQUFFO0FBQUcsT0FBRyxFQUFFLFNBQVMsU0FBTyxLQUFHLEVBQUUsbUJBQWlCLElBQUU7QUFBSSxNQUFJLElBQUUsRUFBRSxPQUFHLEVBQUUsVUFBUyxFQUFFLEdBQUUsS0FBRyxLQUFHLE9BQUssU0FBTyxFQUFFLFVBQVEscUJBQW1CLEdBQUcsRUFBRSxHQUFHLEtBQUcsR0FBRyxFQUFFLEtBQUs7QUFBRSxTQUFNLENBQUMsR0FBRSxFQUFFLEVBQUUsVUFBUyxDQUFDLEdBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUUsa0JBQWdCLFNBQU8sS0FBRyxHQUFHLEdBQUcsR0FBRSxFQUFFLENBQUMsSUFBRSxDQUFDLEdBQUUsRUFBRSxHQUFFLEVBQUUsSUFBSSxHQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxLQUFHLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLElBQUksQ0FBQyxFQUFDLFFBQU8sR0FBRSxNQUFLLEdBQUUsTUFBSyxFQUFDLE1BQUksQ0FBQyxLQUFJLElBQUUsS0FBRyxDQUFDLEtBQUksSUFBRyxFQUFFLFNBQVMsTUFBTSxTQUFPLEVBQUUsU0FBUyxNQUFNLE9BQUssR0FBRyxHQUFFLEVBQUUsWUFBWSxJQUFFLEVBQUUsQ0FBQyxHQUFFLFVBQVU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUk7QUFBRSxNQUFHLEVBQUMsTUFBSyxHQUFFLFFBQU8sRUFBQyxJQUFFLEdBQUUsRUFBQyxLQUFJLEdBQUUsT0FBTSxFQUFDLElBQUUsR0FBRSxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDO0FBQUUsTUFBRyxLQUFHLEVBQUUsUUFBTTtBQUFLLE1BQUksSUFBRSxFQUFFLEtBQUssR0FBRSxJQUFFLEdBQUcsQ0FBQyxJQUFFLE1BQUk7QUFBRyxNQUFHLEVBQUUsUUFBTyxFQUFFLFNBQU8scUJBQW1CLEVBQUUsU0FBTyxnQkFBYyxJQUFFLEVBQUUsU0FBTyxpQkFBZSxHQUFHLEVBQUUsU0FBUSxDQUFDLEtBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxPQUFLLElBQUUsRUFBRSxRQUFNLE9BQUssU0FBTyxFQUFFLFdBQVMsMEJBQXdCLENBQUMsR0FBRSxHQUFFLEdBQUcsSUFBRSxDQUFDLE1BQUssRUFBRSxHQUFFLENBQUMsQ0FBQztBQUFFLE1BQUksSUFBRSxFQUFFLE9BQU87QUFBRSxNQUFHLEVBQUUsUUFBTSxDQUFDLE1BQUssRUFBRSxHQUFFLENBQUMsQ0FBQztBQUFFLE1BQUcsR0FBRyxDQUFDLEtBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQU0sQ0FBQyxNQUFLLEVBQUUsR0FBRSxDQUFDLEdBQUUsR0FBRSxHQUFHLEVBQUUsSUFBSSxNQUFJLENBQUMsRUFBQyxHQUFHLENBQUMsR0FBRSxTQUFRLGlCQUFpQixHQUFFLE1BQUssRUFBRSxHQUFFLENBQUMsQ0FBQztBQUFFLE1BQUcsR0FBRyxFQUFFLE9BQU8sS0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLEtBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxLQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sS0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sS0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLEtBQUcsQ0FBQyxFQUFFLENBQUMsS0FBRyxHQUFHLEVBQUUsU0FBUSxDQUFDLEVBQUUsUUFBTSxDQUFDLEdBQUUsR0FBRSxNQUFLLENBQUM7QUFBRSxNQUFJLElBQUUsT0FBTyxZQUFZLEdBQUUsSUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxHQUFFLEVBQUMsSUFBRyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsTUFBSyxFQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsSUFBRSxDQUFDLEdBQUUsR0FBRztBQUFFLEtBQUcsRUFBRSxPQUFPLEtBQUcsRUFBRSxDQUFDLEtBQUcsRUFBRSxXQUFTLENBQUMsRUFBRSxFQUFFLFNBQVEsQ0FBQyxXQUFVLFVBQVUsQ0FBQyxLQUFHLEVBQUUsU0FBTyxhQUFXLEVBQUUsRUFBRSxPQUFPLEtBQUcsR0FBRyxFQUFFLE9BQU8sS0FBRyxFQUFFLEVBQUUsU0FBUSxDQUFDLFdBQVUsVUFBVSxDQUFDLEtBQUcsRUFBRSxRQUFRLFFBQU0sUUFBTSxFQUFFLFFBQVEsV0FBUyxPQUFLLEVBQUUsS0FBSyxDQUFDLElBQUUsRUFBRSxVQUFRLEVBQUUsS0FBSyxFQUFFLElBQUUsRUFBRSxDQUFDLEtBQUcsRUFBRSxLQUFLLEdBQUcsR0FBRSxFQUFFLEtBQUssQ0FBQztBQUFFLE1BQUksSUFBRSxFQUFFLEVBQUUsVUFBUyxDQUFDO0FBQUUsU0FBTyxHQUFHLEVBQUUsU0FBUSxDQUFDLEtBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxLQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sS0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsSUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFFLEdBQUcsR0FBRSxHQUFFLEVBQUMsU0FBUSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFHLENBQUMsRUFBRSxRQUFNO0FBQUcsVUFBTyxFQUFFLE1BQU07QUFBQSxJQUFBLEtBQUk7QUFBQSxJQUFRLEtBQUk7QUFBQSxJQUFjLEtBQUk7QUFBYztBQUFBLElBQU0sS0FBSTtBQUFRLGFBQU07QUFBQSxJQUFHO0FBQVEsYUFBUTtBQUFBLEVBQUE7QUFBQyxNQUFHLEVBQUUsY0FBWSxXQUFXLFFBQU8sRUFBRSxTQUFTLE1BQU0sU0FBTyxFQUFFLFNBQVMsSUFBSTtBQUFLLE1BQUcsUUFBUSxLQUFLLEVBQUUsYUFBYSxNQUFNLEVBQUUsU0FBUyxNQUFNLFFBQU8sRUFBRSxTQUFTLElBQUksTUFBTSxDQUFDLEVBQUUsUUFBUTtBQUFDLFVBQU8sRUFBRSxXQUFTO0FBQUEsSUFBRSxLQUFJO0FBQVEsYUFBTSxDQUFDLEVBQUUsTUFBTSxTQUFTO0FBQUEsQ0FDM3JIO0FBQUEsSUFBRSxLQUFJO0FBQVMsYUFBTSxDQUFDLFNBQVMsS0FBSyxFQUFFLEtBQUs7QUFBQSxJQUFFO0FBQVEsYUFBUTtBQUFBLEVBQUE7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSTtBQUFFLFdBQVEsSUFBRSxFQUFFLElBQUksWUFBVSxPQUFLLFNBQU8sRUFBRSxVQUFRO0FBQU87QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsQ0FBQyxFQUFFLFFBQVE7QUFBQyxVQUFPLEVBQUUsTUFBTTtBQUFBLElBQUEsS0FBSTtBQUFBLElBQVEsS0FBSTtBQUFBLElBQWMsS0FBSTtBQUFjLGFBQU8sRUFBRSxTQUFTLE1BQU0sU0FBTyxFQUFFLFNBQVMsSUFBSTtBQUFBLElBQUssS0FBSTtBQUFRLGFBQVE7QUFBQSxJQUFDO0FBQVEsYUFBUTtBQUFBLEVBQUE7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUUsRUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxVQUFPLEVBQUUsTUFBTTtBQUFBLElBQUEsS0FBSTtBQUFXLFNBQUcsR0FBRSxRQUFPLE1BQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFLEdBQUcsR0FBRSxRQUFPLE1BQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBZSxLQUFJO0FBQUEsSUFBZSxLQUFJO0FBQUEsSUFBbUIsS0FBSTtBQUFBLElBQWEsS0FBSTtBQUFlLFNBQUcsR0FBRSxXQUFVLE1BQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBYyxLQUFJO0FBQWtCLFNBQUcsR0FBRSxPQUFNLE1BQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFFLEdBQUcsR0FBRSxTQUFRLE1BQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUFFO0FBQUEsRUFBSztBQUFDLFNBQU87QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQTtBQUFHLElBQUUsU0FBTyxrQkFBZ0IsR0FBRyxDQUFDLEtBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFFLEVBQUUsSUFBSSxHQUFFLGlCQUFpQixDQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQUUsTUFBRyxFQUFDLEtBQUksR0FBRSxRQUFPLEVBQUMsSUFBRTtBQUFFLE9BQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBRyxLQUFHLEVBQUUsS0FBSyxHQUFHLEdBQUUsS0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7QUFBRSxNQUFJLElBQUU7QUFBRyxTQUFPLEVBQUUsR0FBRSxDQUFDLFdBQVUsWUFBVyxXQUFVLGFBQVksZUFBYyxjQUFjLENBQUMsS0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLElBQUUsR0FBRyxHQUFFLEVBQUUsWUFBWSxLQUFJLEtBQUcsT0FBSyxFQUFFLEdBQUUsQ0FBQyxZQUFXLFNBQVMsQ0FBQyxLQUFHLENBQUMsR0FBRyxDQUFDLElBQUUsRUFBRSxLQUFLLENBQUMsSUFBRSxFQUFFLEtBQUssR0FBRyxJQUFHLEdBQUcsQ0FBQyxLQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsZUFBZSxXQUFTLElBQUUsS0FBRyxHQUFFLEVBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxnQkFBZ0IsQ0FBQyxHQUFFLENBQUMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxJQUFFLEVBQUUsS0FBSyxHQUFHLEVBQUUsYUFBYSxNQUFNLEVBQUUsU0FBUyxNQUFNLFFBQU8sRUFBRSxTQUFTLElBQUksTUFBTSxFQUFFLFFBQU8sQ0FBRSxDQUFDLElBQUUsRUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxFQUFFLENBQUMsS0FBRyxDQUFDLEVBQUUsR0FBRSxDQUFDLFlBQVcsY0FBYyxDQUFDLEtBQUcsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLFNBQU8sa0JBQWdCLENBQUMsRUFBRSxVQUFRLEtBQUcsS0FBSSxFQUFFLE9BQU8sU0FBTyxnQkFBYyxFQUFFLGNBQWMsQ0FBQyxFQUFFLFNBQU8sYUFBVyxHQUFHLENBQUMsSUFBRSxLQUFHLElBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFHLENBQUMsS0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQU8saUJBQWUsSUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsRUFBRSxJQUFJLENBQUMsRUFBQyxNQUFLLEVBQUMsTUFBSSxDQUFDLEdBQUcsRUFBRSxjQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUUsSUFBRSxJQUFHLEVBQUcsQ0FBQSxHQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsRUFBQyxNQUFLLEVBQUMsSUFBRTtBQUFFLFVBQU8sRUFBRSxNQUFNO0FBQUEsSUFBQSxLQUFJLFFBQU87QUFBQyxVQUFJLElBQUUsQ0FBRTtBQUFDLFFBQUUsS0FBSyxDQUFDLEVBQUMsTUFBSyxHQUFFLE1BQUssR0FBRSxTQUFRLEVBQUMsTUFBSTtBQUFDLGFBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLEtBQUssRUFBRyxDQUFBLEdBQUUsR0FBRyxHQUFFLENBQUMsS0FBRyxFQUFFLEtBQUssR0FBRSxLQUFLLEdBQUUsRUFBRSxDQUFDLEtBQUcsRUFBRSxLQUFLLEtBQUksRUFBRSxpQkFBaUIsQ0FBQyxLQUFHLEtBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxLQUFHLEVBQUUsS0FBSyxHQUFFLEtBQUs7QUFBQSxNQUFDLEdBQUUsVUFBVTtBQUFFLFVBQUksSUFBRSxHQUFHLENBQUM7QUFBRSxjQUFPLENBQUMsRUFBRSxHQUFFLENBQUMsZ0JBQWUsYUFBYSxDQUFDLEtBQUcsRUFBRSxhQUFXLFdBQVMsRUFBRSxLQUFLLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUksWUFBVztBQUFDLFVBQUksSUFBRSxDQUFFO0FBQUMsYUFBTyxHQUFHLEdBQUUsQ0FBQyxNQUFJLFlBQVUsRUFBRSxLQUFLLFNBQVMsU0FBTyxLQUFHLEVBQUUsS0FBSyxZQUFZLFNBQU8sTUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRSxFQUFFLEVBQUUsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU0sS0FBSSxFQUFFLENBQUMsUUFBTyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBRSxFQUFFLEtBQUssS0FBSyxJQUFHLEdBQUcsQ0FBQyxLQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFFLEVBQUUsR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFBLElBQUMsS0FBSTtBQUFlLGFBQU8sRUFBRSxHQUFFLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRSxVQUFVLEdBQUUsR0FBRyxFQUFFLElBQUksR0FBRSxhQUFhLENBQUMsQ0FBQztBQUFBLElBQUUsS0FBSSxnQkFBZTtBQUFDLFVBQUcsRUFBQyxVQUFTLEdBQUUsYUFBWSxFQUFDLElBQUUsR0FBRSxJQUFFO0FBQUcsVUFBRyxFQUFFLFNBQU8sS0FBRyxFQUFFLFNBQU8sR0FBRTtBQUFDLFlBQUksSUFBRSxHQUFHLENBQUM7QUFBRSxVQUFFLEdBQUUsQ0FBQyxlQUFjLGNBQWMsQ0FBQyxJQUFFLEVBQUUsYUFBVyxXQUFTLElBQUUsQ0FBQyxHQUFFLENBQUMsS0FBRyxJQUFFO0FBQUEsTUFBQztBQUFDLGFBQU0sQ0FBQyxFQUFFLEdBQUUsRUFBRSxJQUFJLEdBQUUsVUFBVSxDQUFDLEdBQUUsR0FBRSxFQUFFLEdBQUUsRUFBRSxJQUFJLEdBQUUsYUFBYSxDQUFDLENBQUM7QUFBQSxJQUFDO0FBQUEsSUFBQyxLQUFJO0FBQVksYUFBTSxDQUFDLEtBQUksRUFBRSxLQUFJLENBQUMsRUFBRSxNQUFLLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLElBQUUsS0FBSTtBQUFVLGFBQU0sQ0FBQyxLQUFJLEVBQUUsS0FBSztBQUFBLElBQUUsS0FBSTtBQUFRLGFBQU0sQ0FBQyxLQUFJLEVBQUUsS0FBSztBQUFBLElBQUUsS0FBSTtBQUFNLGFBQU8sRUFBRSxhQUFhLE1BQU0sRUFBRSxTQUFTLE1BQU0sUUFBTyxFQUFFLFNBQVMsSUFBSSxNQUFNO0FBQUEsSUFBRSxLQUFJO0FBQVMsYUFBTSxDQUFDLEtBQUksRUFBRSxLQUFLO0FBQUEsSUFBRSxLQUFJO0FBQVEsYUFBTyxHQUFHLEVBQUUsTUFBSyxFQUFFLGFBQWEsTUFBTSxFQUFFLFNBQVMsTUFBTSxRQUFPLEVBQUUsU0FBUyxJQUFJLE1BQU0sR0FBRSxDQUFDO0FBQUEsSUFBRSxLQUFJO0FBQUEsSUFBYyxLQUFJLGVBQWM7QUFBQyxVQUFJLElBQUUsS0FBSSxJQUFFLEtBQUksSUFBRSxFQUFFLGFBQWEsTUFBTSxFQUFFLFNBQVMsTUFBTSxTQUFPLEdBQUUsRUFBRSxTQUFTLElBQUksU0FBTyxDQUFDO0FBQUUsVUFBRyxFQUFFLFNBQU8saUJBQWUsRUFBRSxTQUFTLElBQUksS0FBRyxFQUFFLFNBQU8saUJBQWUsVUFBVSxLQUFLLENBQUMsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLFNBQU8sZ0JBQWMsSUFBRTtBQUFFLGVBQU0sQ0FBQyxHQUFFLEdBQUcsRUFBRSxNQUFLLEdBQUUsQ0FBQyxHQUFFLENBQUM7QUFBQSxNQUFDO0FBQUMsVUFBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQU0sQ0FBQyxHQUFFLEdBQUcsRUFBRSxNQUFLLEVBQUUsU0FBTyxnQkFBYyxHQUFHLE9BQUcsR0FBRyxPQUFHLEdBQUUsT0FBTyxTQUFRLENBQUMsR0FBRSxLQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBRSxHQUFFLENBQUMsR0FBRSxDQUFDO0FBQUUsVUFBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQU0sQ0FBQyxHQUFFLEdBQUcsRUFBRSxNQUFLLEVBQUUsU0FBTyxnQkFBYyxHQUFHLE9BQUcsR0FBRSxNQUFLLENBQUMsSUFBRSxHQUFFLENBQUMsR0FBRSxDQUFDO0FBQUUsVUFBSSxJQUFFLEVBQUUsY0FBWSxJQUFFO0FBQUUsYUFBTSxDQUFDLEdBQUUsR0FBRyxFQUFFLE1BQUssR0FBRSxDQUFDLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUk7QUFBQSxJQUFjLEtBQUk7QUFBZSxhQUFPLEdBQUcsR0FBRSxHQUFFLENBQUM7QUFBQSxJQUFFLEtBQUk7QUFBQSxJQUFVLEtBQUk7QUFBVyxhQUFPLEVBQUUsR0FBRSxFQUFFLElBQUksR0FBRSxVQUFVLENBQUM7QUFBQSxJQUFFLEtBQUk7QUFBZSxhQUFNLENBQUMsTUFBSyxFQUFFLEdBQUUsRUFBRSxVQUFRLEVBQUUsU0FBUyxJQUFFLEVBQUUsQ0FBQztBQUFBLElBQUUsS0FBSTtBQUFBLElBQWEsS0FBSTtBQUFlLGFBQU8sRUFBRSxVQUFRLEVBQUUsU0FBUyxJQUFFO0FBQUEsSUFBRyxLQUFJO0FBQUEsSUFBYyxLQUFJO0FBQWtCLGFBQU8sR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFBLElBQUUsS0FBSTtBQUFjLGFBQU8sR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFBLElBQUUsS0FBSTtBQUFlLGFBQU8sR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFBLElBQUUsS0FBSTtBQUFtQixhQUFPLEVBQUUsU0FBUztBQUFBLElBQUU7QUFBUSxZQUFNLElBQUksR0FBRyxHQUFFLE1BQU07QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxLQUFLLFNBQVMsU0FBTyxLQUFHLEVBQUUsRUFBRSxJQUFJO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLENBQUMsS0FBRyxNQUFJLEVBQUUsS0FBSyxTQUFTLFNBQU8sS0FBRyxFQUFFLEVBQUUsSUFBSTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUssTUFBRyxFQUFFLFdBQVMsZUFBZSxLQUFLLEVBQUUsYUFBYSxNQUFNLEdBQUcsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxJQUFFLENBQUMsQ0FBQyxLQUFHLEVBQUUsS0FBSyxTQUFTLFNBQU8sS0FBRyxFQUFFLEVBQUUsSUFBSSxLQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBTTtBQUFPLE1BQUksSUFBRSxFQUFFO0FBQUssU0FBTyxHQUFHLEdBQUUsQ0FBQyxJQUFFLFFBQUcsSUFBRSxTQUFPO0FBQUU7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsR0FBRyxHQUFFLEdBQUUsQ0FBQztBQUFFLFNBQU8sRUFBRSxHQUFFLEVBQUUsSUFB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QUFFLFNBQVEsSUFBRSxDQUFBLEdBQUcsSUFBRSxNQUFLLElBQUUsTUFBSyxJQUFFO0FBQUssV0FBUSxLQUFLLEVBQUUsT0FBTTtBQUFDLFFBQUksSUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTO0FBQUUsWUFBTztNQUFHLEtBQUssR0FBRztBQUFJLFlBQUUsS0FBRyxHQUFFLElBQUUsR0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFFLEVBQUUsR0FBRztBQUFFO0FBQUEsTUFBTSxLQUFLLEdBQUc7QUFBTyxZQUFFLEtBQUcsR0FBRSxJQUFFLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRSxFQUFFLE1BQU07QUFBRTtBQUFBLE1BQU0sS0FBSyxHQUFHLFNBQVE7QUFBQyxZQUFJLElBQUUsR0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFFLEVBQUUsS0FBSyxNQUFNLEVBQUUsWUFBVSxHQUFFLEVBQUUsT0FBTyxDQUFDO0FBQUUsVUFBRSxTQUFTLEtBQUssQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLEtBQUcsS0FBRyxFQUFFLFdBQVMsRUFBRSxhQUFXLEVBQUUsV0FBUyxFQUFFLFdBQVcsYUFBVyxFQUFFLEtBQUssQ0FBQztBQUFFO0FBQUEsTUFBSztBQUFBLE1BQUM7QUFBUSxjQUFNLElBQUksTUFBTSxnQ0FBZ0MsS0FBSyxVQUFVLENBQUMsQ0FBQyxFQUFFO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxTQUFPLEdBQUcsR0FBRSxHQUFFLENBQUM7QUFBQztBQUFDLElBQUk7QUFBQSxDQUFJLFNBQVMsR0FBRTtBQUFDLElBQUUsT0FBSyxRQUFPLEVBQUUsUUFBTSxTQUFRLEVBQUUsT0FBSztBQUFNLEdBQUcsT0FBSyxLQUFHLEdBQUc7QUFBRSxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsU0FBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLGFBQVcsU0FBTyxJQUFFLEdBQUUsSUFBRSxFQUFFLE9BQU8sVUFBUSxFQUFFLE9BQU8sWUFBVSxJQUFFLE1BQUksR0FBRSxJQUFFLEVBQUUsZUFBZSxFQUFDLFdBQVUsRUFBRSxPQUFPLFdBQVUsU0FBUSxFQUFFLFdBQVcsUUFBTyxDQUFDLEdBQUUsSUFBRSxNQUFLLElBQUUsR0FBRyxHQUFFLEdBQUUsT0FBRztBQUFDLFFBQUcsRUFBRSxFQUFFLE1BQU0sU0FBTyxFQUFFLFNBQVMsTUFBTSxVQUFRLEVBQUUsU0FBUyxJQUFJLFNBQU8sRUFBRSxJQUFJLFFBQVEsUUFBUTtBQUFDLFFBQUcsRUFBRSxPQUFNLElBQUksTUFBTSw2Q0FBNkMsR0FBRyxFQUFFLFNBQVMsS0FBSyxDQUFDLEVBQUU7QUFBRSxXQUFPLElBQUUsR0FBRTtBQUFBLEVBQUUsQ0FBQztBQUFFLFNBQU8sR0FBRyxHQUFFLEdBQUUsR0FBRyxFQUFFLFFBQVEsR0FBRSxJQUFFLEVBQUUsY0FBWSxNQUFLLEVBQUUsVUFBUyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUcsR0FBRSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTSxFQUFDLEdBQUcsR0FBRSxNQUFLLGVBQWM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFPLEdBQUcsR0FBRyxHQUFFLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQU8sR0FBRyxFQUFFLGVBQWUsRUFBRSxLQUFLLEdBQUUsRUFBRSxPQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFNLEVBQUMsR0FBRyxFQUFFLGFBQVksQ0FBQyxHQUFFLEdBQUcsRUFBQyxHQUFHLE1BQUssR0FBRSxZQUFXLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxXQUFRLEtBQUssRUFBRSxPQUFNO0FBQUMsUUFBSSxJQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVM7QUFBRSxZQUFPLEdBQUM7QUFBQSxNQUFFLEtBQUssR0FBRztBQUFRLFVBQUUsU0FBUyxLQUFLLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRSxFQUFFLEtBQUssTUFBTSxFQUFFLFlBQVUsR0FBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQUU7QUFBQSxNQUFNO0FBQVEsY0FBTSxJQUFJLE1BQU0sZ0NBQWdDLEtBQUssVUFBVSxDQUFDLENBQUMsRUFBRTtBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTyxHQUFHLEdBQUUsQ0FBQyxHQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsS0FBSyxHQUFFLEVBQUUsTUFBSyxFQUFFLFVBQVU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxFQUFDLEdBQUcsRUFBRSxZQUFXLENBQUMsR0FBRSxHQUFHLEdBQUcsQ0FBQyxHQUFFLFVBQVMsQ0FBQyxHQUFFLENBQUMsRUFBQztBQUFDO0FBQUMsU0FBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU0sRUFBQyxPQUFNLEdBQUUsS0FBSSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU0sRUFBQyxPQUFNLEdBQUUsS0FBSSxFQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUUsSUFBRSxDQUFFLEdBQUM7QUFBQyxTQUFNLEVBQUMsYUFBWSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFNLEVBQUMsR0FBRyxFQUFFLGdCQUFlLENBQUMsR0FBRSxHQUFHLEVBQUUsQ0FBQyxHQUFFLFVBQVMsSUFBRSxDQUFDLENBQUMsSUFBRSxDQUFFLEVBQUE7QUFBQztBQUFDLFNBQVMsRUFBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLEVBQUUsU0FBTyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsTUFBTSxDQUFDO0FBQUUsU0FBTyxJQUFFLEVBQUUsUUFBTTtBQUFFO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsU0FBUSxFQUFD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QUFFLEVBQUUsQ0FBQztBQUFFLFNBQU8sS0FBRyxFQUFFLFNBQVMsS0FBSyxDQUFDLEdBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxPQUFNLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxFQUFDLEdBQUcsRUFBRSxrQkFBaUIsQ0FBQyxHQUFFLEdBQUcsRUFBQyxHQUFHLEdBQUcsRUFBQyxHQUFHLEdBQUcsR0FBRSxVQUFTLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU0sRUFBQyxHQUFHLEdBQUcsR0FBRSxHQUFFLENBQUMsR0FBRSxNQUFLLGNBQWE7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU0sRUFBQyxHQUFHLEVBQUUsbUJBQWtCLENBQUMsR0FBRSxHQUFHLEVBQUcsR0FBQyxVQUFTLENBQUMsR0FBRSxDQUFDLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUU7QUFBRyxXQUFRLEtBQUssRUFBRSxNQUFHLFVBQVMsS0FBRyxFQUFFLFNBQU8sWUFBVSxFQUFFLFNBQVMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUUsRUFBRSxLQUFLLENBQUM7QUFBRSxTQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsQ0FBQyxHQUFFLENBQUMsSUFBRSxDQUFDLEtBQUksR0FBRyxFQUFFLElBQUksT0FBRztBQUFDLFFBQUksSUFBRSxFQUFFLEtBQUssT0FBRyxVQUFTLEtBQUcsRUFBRSxTQUFPLENBQUM7QUFBRSxXQUFPLElBQUUsRUFBQyxXQUFVLEVBQUUsWUFBVyxTQUFRLEVBQUUsYUFBVyxFQUFDLElBQUU7QUFBQSxFQUFJLENBQUM7QUFBRSxTQUFNLEVBQUMsb0JBQW1CLEdBQUUsc0JBQXFCLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUU7QUFBRSxTQUFPLE9BQUcsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUksSUFBRSxDQUFBLEdBQUcsSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUU7QUFBRyxXQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsU0FBTyxHQUFFLEtBQUk7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsUUFBRyxVQUFTLEtBQUcsRUFBRSxTQUFPLEtBQUk7QUFBQyxRQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRSxFQUFFLElBQUUsQ0FBQyxHQUFFLElBQUU7QUFBRztBQUFBLElBQVE7QUFBQyxRQUFFO0FBQUEsRUFBRTtBQUFDLFNBQU8sS0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQU8sQ0FBQyxDQUFDLEdBQUU7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxTQUFNLEVBQUMsR0FBRyxFQUFFLGNBQWEsQ0FBQyxHQUFFLEdBQUcsTUFBSyxHQUFHLEVBQUMsR0FBRyxVQUFTLElBQUUsQ0FBQyxDQUFDLElBQUUsQ0FBQSxFQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsU0FBTSxFQUFDLEdBQUcsRUFBRSxnQkFBZSxDQUFDLEdBQUUsR0FBRyxLQUFJLEdBQUcsRUFBQyxHQUFHLFVBQVMsSUFBRSxDQUFDLENBQUMsSUFBRSxDQUFFLEVBQUE7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxHQUFFLElBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxHQUFFLElBQUUsS0FBRyxJQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUMsV0FBVSxJQUFFLEVBQUUsWUFBVSxFQUFFLFNBQVMsTUFBTSxRQUFPLFNBQVEsSUFBRSxFQUFFLFNBQVMsSUFBSSxTQUFPLEVBQUUsWUFBVSxFQUFDLENBQUMsR0FBRSxDQUFDLElBQUUsTUFBSyxJQUFFLEtBQUcsSUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFDLFdBQVUsSUFBRSxFQUFFLFlBQVUsRUFBRSxTQUFTLE1BQU0sUUFBTyxTQUFRLElBQUUsRUFBRSxTQUFTLElBQUksU0FBTyxFQUFFLFlBQVUsRUFBQyxDQUFDLEdBQUUsQ0FBQyxJQUFFO0FBQUssU0FBTyxFQUFFLEVBQUUsSUFBRSxFQUFFLFNBQVMsUUFBTSxFQUFFLFNBQVMsT0FBTSxJQUFFLEVBQUUsU0FBUyxNQUFJLEVBQUUsU0FBUyxHQUFHLEdBQUUsS0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEtBQUssR0FBRSxJQUFJLEdBQUUsS0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRSxJQUFJLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsR0FBRyxFQUFFLFFBQVEsT0FBTSxDQUFDLEdBQUUsSUFBRSxHQUFHLENBQUMsR0FBRSxJQUFFLEVBQUUsTUFBTSxJQUFJLENBQUMsR0FBRSxNQUFJO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLEVBQUMsb0JBQW1CLEdBQUUsc0JBQXFCLEVBQUMsSUFBRSxHQUFHLENBQUM7QUFBRSxXQUFPLEdBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxDQUFDO0FBQUEsRUFBQyxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLFNBQU8sR0FBRyxFQUFFLGVBQWUsRUFBQyxXQUFVLEVBQUUsWUFBVyxTQUFRLEVBQUUsYUFBVyxFQUFDLENBQUMsR0FBRSxFQUFFLGlCQUFpQixDQUFDLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxFQUFDLEdBQUcsR0FBRyxHQUFFLEdBQUUsQ0FBQyxHQUFFLE1BQUssZUFBYztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFNBQU0sRUFBQyxHQUFHLEVBQUUsb0JBQW1CLENBQUMsR0FBRSxVQUFTLENBQUMsQ0FBQyxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsRUFBRSxRQUFRLE9BQU0sQ0FBQyxHQUFFLElBQUUsR0FBRyxDQUFDLEdBQUUsSUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUUsTUFBSTtBQUFDLFFBQUcsRUFBRSxTQUFPLFFBQU87QUFBQyxVQUFJLElBQUUsRUFBRSxjQUFjLENBQUM7QUFBRSxhQUFPLEdBQUcsRUFBRSxFQUFFLFNBQVMsT0FBTSxFQUFFLFNBQVMsR0FBRyxHQUFFLENBQUM7QUFBQSxJQUFDLE9BQUs7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsRUFBQyxvQkFBbUIsR0FBRSxzQkFBcUIsRUFBQyxJQUFFLEdBQUcsQ0FBQztBQUFFLGFBQU8sR0FBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQyxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLFNBQU8sR0FBRyxFQUFFLGVBQWUsRUFBQyxXQUFVLEVBQUUsWUFBVyxTQUFRLEVBQUUsYUFBVyxFQUFDLENBQUMsR0FBRSxFQUFFLGlCQUFpQixDQUFDLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTSxFQUFDLEdBQUcsRUFBRSxXQUFVLENBQUMsR0FBRSxHQUFHLEVBQUcsR0FBQyxHQUFHLEdBQUUsVUFBUyxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFNLEVBQUMsR0FBRyxFQUFFLGVBQWMsQ0FBQyxHQUFFLEdBQUcsRUFBQyxHQUFHLFVBQVMsQ0FBQyxHQUFFLENBQUMsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQVEsSUFBRSxNQUFNLE9BQU8sT0FBRyxFQUFFLFNBQU8sYUFBVyxFQUFFLFNBQU8sV0FBVyxFQUFFLFFBQVEsT0FBRyxHQUFHLEdBQUUsQ0FBQyxDQUFDO0FBQUUsTUFBSSxJQUFFLEdBQUcsRUFBRSxPQUFNLENBQUMsR0FBRSxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsRUFBRSxNQUFNLElBQUksQ0FBQyxHQUFFLE1BQUk7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsQ0FBQyxHQUFFLENBQUMsSUFBRSxFQUFFLENBQUMsRUFBRSxTQUFPLGNBQVksQ0FBQyxNQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssSUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU0sRUFBRSxXQUFTLElBQUUsT0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLO0FBQUUsV0FBTyxHQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUUsQ0FBQztBQUFBLEVBQUMsQ0FBQztBQUFFLFNBQU8sR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsT0FBTSxFQUFFLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRSxFQUFFLGlCQUFpQixDQUFDLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLElBQUUsQ0FBQSxHQUFHLElBQUUsR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFFO0FBQUcsV0FBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLFFBQUcsRUFBRSxDQUFDLEVBQUUsU0FBTyxhQUFZO0FBQUMsUUFBRSxLQUFLLEVBQUUsSUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFO0FBQUc7QUFBQSxJQUFRO0FBQUMsU0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRSxJQUFFO0FBQUEsRUFBRTtBQUFDLFNBQU8sS0FBRyxFQUFFLEtBQUssRUFBRSxJQUFFLENBQUMsQ0FBQyxHQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFNLEVBQUMsR0FBRyxFQUFFLFNBQVEsQ0FBQyxHQUFFLEdBQUcsS0FBSSxHQUFHLEdBQUUsT0FBTSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUU7QUFBQyxX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O0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsQ0FBQyxFQUFFLGNBQWUsR0FBQztBQUFDLFFBQUksSUFBRSxPQUFHO0FBQUMsVUFBRyxHQUFHLENBQUMsRUFBRSxRQUFPLEVBQUUsWUFBVSxFQUFFLE9BQU0sRUFBRSxVQUFRLEVBQUUsS0FBSTtBQUFHLFVBQUcsR0FBRyxDQUFDLEVBQUUsUUFBTyxFQUFFLGFBQVcsRUFBRSxRQUFPO0FBQUEsSUFBRTtBQUFFLE1BQUUsUUFBUSxPQUFHLEdBQUcsR0FBRSxDQUFDLENBQUM7QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFFLENBQUMsS0FBRyxPQUFPLEtBQUcsYUFBVyxFQUFFLENBQUMsTUFBSSxLQUFHLFVBQVEsS0FBSyxPQUFPLEtBQUssQ0FBQyxHQUFFO0FBQUMsUUFBRyxNQUFJLGFBQVcsTUFBSSxRQUFRO0FBQVMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFVBQU0sUUFBUSxDQUFDLElBQUUsRUFBRSxRQUFRLE9BQUcsR0FBRyxHQUFFLENBQUMsQ0FBQyxJQUFFLEdBQUcsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLE9BQU8sRUFBRSxTQUFPO0FBQVE7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sT0FBTyxFQUFFLFVBQVE7QUFBUTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxjQUFhLEdBQUU7QUFBQyxRQUFHLEVBQUUsU0FBUyxXQUFTLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxTQUFTLENBQUM7QUFBRSxVQUFHLEVBQUUsU0FBTyxXQUFTLEVBQUUsUUFBTSxRQUFNLEVBQUUsV0FBUyxRQUFNLEVBQUUsVUFBUSxHQUFHLFFBQU8sRUFBRSxTQUFTLE9BQU8sR0FBRSxDQUFDLEdBQUU7QUFBQSxJQUFDO0FBQUMsTUFBRSxTQUFTLFFBQVEsRUFBRTtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLENBQUM7QUFBRSxTQUFPLE9BQUc7QUFBQyxNQUFFLEdBQUUsQ0FBQyxLQUFHLEVBQUUsR0FBRSxJQUFFLENBQUM7QUFBQSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUcsTUFBSSxRQUFNLEVBQUUsY0FBYSxHQUFHO0FBQU8sTUFBSSxJQUFFLEVBQUU7QUFBUyxNQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUUsRUFBRSxTQUFPLFlBQVc7QUFBQyxRQUFHLENBQUMsR0FBRSxDQUFDLElBQUUsRUFBRTtBQUFTLE1BQUUsU0FBUyxNQUFNLFdBQVMsRUFBRSxTQUFTLElBQUksU0FBTyxFQUFFLFNBQVMsUUFBTSxFQUFFLFNBQVMsTUFBSSxFQUFFLFNBQVMsUUFBTSxFQUFFLFNBQVMsTUFBTSxXQUFTLEVBQUUsU0FBUyxJQUFJLFdBQVMsRUFBRSxTQUFTLFFBQU0sRUFBRSxTQUFTLE1BQUksRUFBRSxTQUFTO0FBQUEsRUFBSTtBQUFDLE1BQUksSUFBRSxHQUFHLEVBQUUsVUFBUyxJQUFHLElBQUcsRUFBRSxHQUFFLElBQUUsR0FBRyxFQUFFLFVBQVMsSUFBRyxJQUFHLEVBQUU7QUFBRSxtQkFBZ0IsS0FBRyxFQUFFLFlBQVksV0FBUyxNQUFJLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRSxTQUFTLEtBQUssR0FBRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsU0FBUyxHQUFHO0FBQUcsTUFBSSxJQUFFLEVBQUUsT0FBTyxPQUFHLE1BQUksSUFBSTtBQUFFLE1BQUcsRUFBRSxXQUFTLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUM7QUFBRSxNQUFFLEVBQUUsU0FBUyxLQUFLLEdBQUUsRUFBRSxFQUFFLFNBQVMsR0FBRyxHQUFFLHFCQUFvQixLQUFHLEVBQUUsZ0JBQWdCLFdBQVMsS0FBRyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxTQUFTLEtBQUssR0FBRSxT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
