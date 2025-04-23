var di = Object.create;
var we = Object.defineProperty;
var mi = Object.getOwnPropertyDescriptor;
var xi = Object.getOwnPropertyNames;
var yi = Object.getPrototypeOf, gi = Object.prototype.hasOwnProperty;
var $e = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), vi = (e, t) => {
  for (var i in t) we(e, i, { get: t[i], enumerable: true });
}, bi = (e, t, i, s) => {
  if (t && typeof t == "object" || typeof t == "function") for (let r of xi(t)) !gi.call(e, r) && r !== i && we(e, r, { get: () => t[r], enumerable: !(s = mi(t, r)) || s.enumerable });
  return e;
};
var et = (e, t, i) => (i = e != null ? di(yi(e)) : {}, bi(we(i, "default", { value: e, enumerable: true }), e));
var Gt = $e((Qs, qt) => {
  qt.exports = {};
});
var Je = $e((Ys, Ge) => {
  var ns = Gt(), os = /^[\da-fA-F]+$/, us = /^\d+$/, Jt = /* @__PURE__ */ new WeakMap();
  function Kt(e) {
    e = e.Parser.acorn || e;
    let t = Jt.get(e);
    if (!t) {
      let i = e.tokTypes, s = e.TokContext, r = e.TokenType, n = new s("<tag", false), o = new s("</tag", false), u = new s("<tag>...</tag>", true, true), p = { tc_oTag: n, tc_cTag: o, tc_expr: u }, d = { jsxName: new r("jsxName"), jsxText: new r("jsxText", { beforeExpr: true }), jsxTagStart: new r("jsxTagStart", { startsExpr: true }), jsxTagEnd: new r("jsxTagEnd") };
      d.jsxTagStart.updateContext = function() {
        this.context.push(u), this.context.push(n), this.exprAllowed = false;
      }, d.jsxTagEnd.updateContext = function(f) {
        let C = this.context.pop();
        C === n && f === i.slash || C === o ? (this.context.pop(), this.exprAllowed = this.curContext() === u) : this.exprAllowed = true;
      }, t = { tokContexts: p, tokTypes: d }, Jt.set(e, t);
    }
    return t;
  }
  function ne(e) {
    if (!e) return e;
    if (e.type === "JSXIdentifier") return e.name;
    if (e.type === "JSXNamespacedName") return e.namespace.name + ":" + e.name.name;
    if (e.type === "JSXMemberExpression") return ne(e.object) + "." + ne(e.property);
  }
  Ge.exports = function(e) {
    return e = e || {}, function(t) {
      return ps({ allowNamespaces: e.allowNamespaces !== false, allowNamespacedObjects: !!e.allowNamespacedObjects }, t);
    };
  };
  Object.defineProperty(Ge.exports, "tokTypes", { get: function() {
    return Kt(void 0).tokTypes;
  }, configurable: true, enumerable: true });
  function ps(e, t) {
    let i = t.acorn || void 0, s = Kt(i), r = i.tokTypes, n = s.tokTypes, o = i.tokContexts, u = s.tokContexts.tc_oTag, p = s.tokContexts.tc_cTag, d = s.tokContexts.tc_expr, f = i.isNewLine, C = i.isIdentifierStart, B = i.isIdentifierChar;
    return class extends t {
      static get acornJsx() {
        return s;
      }
      jsx_readToken() {
        let h = "", m = this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated JSX contents");
          let x = this.input.charCodeAt(this.pos);
          switch (x) {
            case 60:
            case 123:
              return this.pos === this.start ? x === 60 && this.exprAllowed ? (++this.pos, this.finishToken(n.jsxTagStart)) : this.getTokenFromCode(x) : (h += this.input.slice(m, this.pos), this.finishToken(n.jsxText, h));
            case 38:
              h += this.input.slice(m, this.pos), h += this.jsx_readEntity(), m = this.pos;
              break;
            case 62:
            case 125:
              this.raise(this.pos, "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" + (x === 62 ? "&gt;" : "&rbrace;") + '` or `{"' + this.input[this.pos] + '"}`?');
            default:
              f(x) ? (h += this.input.slice(m, this.pos), h += this.jsx_readNewLine(true), m = this.pos) : ++this.pos;
          }
        }
      }
      jsx_readNewLine(h) {
        let m = this.input.charCodeAt(this.pos), x;
        return ++this.pos, m === 13 && this.input.charCodeAt(this.pos) === 10 ? (++this.pos, x = h ? `
` : `\r
`) : x = String.fromCharCode(m), this.options.locations && (++this.curLine, this.lineStart = this.pos), x;
      }
      jsx_readString(h) {
        let m = "", x = ++this.pos;
        for (; ; ) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
          let g = this.input.charCodeAt(this.pos);
          if (g === h) break;
          g === 38 ? (m += this.input.slice(x, this.pos), m += this.jsx_readEntity(), x = this.pos) : f(g) ? (m += this.input.slice(x, this.pos), m += this.jsx_readNewLine(false), x = this.pos) : ++this.pos;
        }
        return m += this.input.slice(x, this.pos++), this.finishToken(r.string, m);
      }
      jsx_readEntity() {
        let h = "", m = 0, x, g = this.input[this.pos];
        g !== "&" && this.raise(this.pos, "Entity must start with an ampersand");
        let w = ++this.pos;
        for (; this.pos < this.input.length && m++ < 10; ) {
          if (g = this.input[this.pos++], g === ";") {
            h[0] === "#" ? h[1] === "x" ? (h = h.substr(2), os.test(h) && (x = String.fromCharCode(parseInt(h, 16)))) : (h = h.substr(1), us.test(h) && (x = String.fromCharCode(parseInt(h, 10)))) : x = ns[h];
            break;
          }
          h += g;
        }
        return x || (this.pos = w, "&");
      }
      jsx_readWord() {
        let h, m = this.pos;
        do
          h = this.input.charCodeAt(++this.pos);
        while (B(h) || h === 45);
        return this.finishToken(n.jsxName, this.input.slice(m, this.pos));
      }
      jsx_parseIdentifier() {
        let h = this.startNode();
        return this.type === n.jsxName ? h.name = this.value : this.type.keyword ? h.name = this.type.keyword : this.unexpected(), this.next(), this.finishNode(h, "JSXIdentifier");
      }
      jsx_parseNamespacedName() {
        let h = this.start, m = this.startLoc, x = this.jsx_parseIdentifier();
        if (!e.allowNamespaces || !this.eat(r.colon)) return x;
        var g = this.startNodeAt(h, m);
        return g.namespace = x, g.name = this.jsx_parseIdentifier(), this.finishNode(g, "JSXNamespacedName");
      }
      jsx_parseElementName() {
        if (this.type === n.jsxTagEnd) return "";
        let h = this.start, m = this.startLoc, x = this.jsx_parseNamespacedName();
        for (this.type === r.dot && x.type === "JSXNamespacedName" && !e.allowNamespacedObjects && this.unexpected(); this.eat(r.dot); ) {
          let g = this.startNodeAt(h, m);
          g.object = x, g.property = this.jsx_parseIdentifier(), x = this.finishNode(g, "JSXMemberExpression");
        }
        return x;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case r.braceL:
            let h = this.jsx_parseExpressionContainer();
            return h.expression.type === "JSXEmptyExpression" && this.raise(h.start, "JSX attributes must only be assigned a non-empty expression"), h;
          case n.jsxTagStart:
          case r.string:
            return this.parseExprAtom();
          default:
            this.raise(this.start, "JSX value should be either an expression or a quoted JSX text");
        }
      }
      jsx_parseEmptyExpression() {
        let h = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(h, "JSXEmptyExpression", this.start, this.startLoc);
      }
      jsx_parseExpressionContainer() {
        let h = this.startNode();
        return this.next(), h.expression = this.type === r.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression(), this.expect(r.braceR), this.finishNode(h, "JSXExpressionContainer");
      }
      jsx_parseAttribute() {
        let h = this.startNode();
        return this.eat(r.braceL) ? (this.expect(r.ellipsis), h.argument = this.parseMaybeAssign(), this.expect(r.braceR), this.finishNode(h, "JSXSpreadAttribute")) : (h.name = this.jsx_parseNamespacedName(), h.value = this.eat(r.eq) ? this.jsx_parseAttributeValue() : null, this.finishNode(h, "JSXAttribute"));
      }
      jsx_parseOpeningElementAt(h, m) {
        let x = this.startNodeAt(h, m);
        x.attributes = [];
        let g = this.jsx_parseElementName();
        for (g && (x.name = g); this.type !== r.slash && this.type !== n.jsxTagEnd; ) x.attributes.push(this.jsx_parseAttribute());
        return x.selfClosing = this.eat(r.slash), this.expect(n.jsxTagEnd), this.finishNode(x, g ? "JSXOpeningElement" : "JSXOpeningFragment");
      }
      jsx_parseClosingElementAt(h, m) {
        let x = this.startNodeAt(h, m), g = this.jsx_parseElementName();
        return g && (x.name = g), this.expect(n.jsxTagEnd), this.finishNode(x, g ? "JSXClosingElement" : "JSXClosingFragment");
      }
      jsx_parseElementAt(h, m) {
        let x = this.startNodeAt(h, m), g = [], w = this.jsx_parseOpeningElementAt(h, m), he = null;
        if (!w.selfClosing) {
          e: for (; ; ) switch (this.type) {
            case n.jsxTagStart:
              if (h = this.start, m = this.startLoc, this.next(), this.eat(r.slash)) {
                he = this.jsx_parseClosingElementAt(h, m);
                break e;
              }
              g.push(this.jsx_parseElementAt(h, m));
              break;
            case n.jsxText:
              g.push(this.parseExprAtom());
              break;
            case r.braceL:
              g.push(this.jsx_parseExpressionContainer());
              break;
            default:
              this.unexpected();
          }
          ne(he.name) !== ne(w.name) && this.raise(he.start, "Expected corresponding JSX closing tag for <" + ne(w.name) + ">");
        }
        let Ee = w.name ? "Element" : "Fragment";
        return x["opening" + Ee] = w, x["closing" + Ee] = he, x.children = g, this.type === r.relational && this.value === "<" && this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag"), this.finishNode(x, "JSX" + Ee);
      }
      jsx_parseText() {
        let h = this.parseLiteral(this.value);
        return h.type = "JSXText", h;
      }
      jsx_parseElement() {
        let h = this.start, m = this.startLoc;
        return this.next(), this.jsx_parseElementAt(h, m);
      }
      parseExprAtom(h) {
        return this.type === n.jsxText ? this.jsx_parseText() : this.type === n.jsxTagStart ? this.jsx_parseElement() : super.parseExprAtom(h);
      }
      readToken(h) {
        let m = this.curContext();
        if (m === d) return this.jsx_readToken();
        if (m === u || m === p) {
          if (C(h)) return this.jsx_readWord();
          if (h == 62) return ++this.pos, this.finishToken(n.jsxTagEnd);
          if ((h === 34 || h === 39) && m == u) return this.jsx_readString(h);
        }
        return h === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33 ? (++this.pos, this.finishToken(n.jsxTagStart)) : super.readToken(h);
      }
      updateContext(h) {
        if (this.type == r.braceL) {
          var m = this.curContext();
          m == u ? this.context.push(o.b_expr) : m == d ? this.context.push(o.b_tmpl) : super.updateContext(h), this.exprAllowed = true;
        } else if (this.type === r.slash && h === n.jsxTagStart) this.context.length -= 2, this.context.push(p), this.exprAllowed = false;
        else return super.updateContext(h);
      }
    };
  }
});
var Ze = {};
vi(Ze, { parsers: () => zs });
var Si = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239], nt = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191], Ci = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･", ot = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", Ae = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" }, Pe = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", _i = { 5: Pe, "5module": Pe + " export import", 6: Pe + " const class extends export import super" }, Ti = /^in(stanceof)?$/, ki = new RegExp("[" + ot + "]"), Ei = new RegExp("[" + ot + Ci + "]");
function Ne(e, t) {
  for (var i = 65536, s = 0; s < t.length; s += 2) {
    if (i += t[s], i > e) return false;
    if (i += t[s + 1], i >= e) return true;
  }
  return false;
}
function M(e, t) {
  return e < 65 ? e === 36 : e < 91 ? true : e < 97 ? e === 95 : e < 123 ? true : e <= 65535 ? e >= 170 && ki.test(String.fromCharCode(e)) : t === false ? false : Ne(e, nt);
}
function H(e, t) {
  return e < 48 ? e === 36 : e < 58 ? true : e < 65 ? false : e < 91 ? true : e < 97 ? e === 95 : e < 123 ? true : e <= 65535 ? e >= 170 && Ei.test(String.fromCharCode(e)) : t === false ? false : Ne(e, nt) || Ne(e, Si);
}
var S = function(t, i) {
  i === void 0 && (i = {}), this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
};
function P(e, t) {
  return new S(e, { beforeExpr: true, binop: t });
}
var I = { beforeExpr: true }, A = { startsExpr: true }, Oe = {};
function b(e, t) {
  return t === void 0 && (t = {}), t.keyword = e, Oe[e] = new S(e, t);
}
var a = { num: new S("num", A), regexp: new S("regexp", A), string: new S("string", A), name: new S("name", A), privateId: new S("privateId", A), eof: new S("eof"), bracketL: new S("[", { beforeExpr: true, startsExpr: true }), bracketR: new S("]"), braceL: new S("{", { beforeExpr: true, startsExpr: true }), braceR: new S("}"), parenL: new S("(", { beforeExpr: true, startsExpr: true }), parenR: new S(")"), comma: new S(",", I), semi: new S(";", I), colon: new S(":", I), dot: new S("."), question: new S("?", I), questionDot: new S("?."), arrow: new S("=>", I), template: new S("template"), invalidTemplate: new S("invalidTemplate"), ellipsis: new S("...", I), backQuote: new S("`", A), dollarBraceL: new S("${", { beforeExpr: true, startsExpr: true }), eq: new S("=", { beforeExpr: true, isAssign: true }), assign: new S("_=", { beforeExpr: true, isAssign: true }), incDec: new S("++/--", { prefix: true, postfix: true, startsExpr: true }), prefix: new S("!/~", { beforeExpr: true, prefix: true, startsExpr: true }), logicalOR: P("||", 1), logicalAND: P("&&", 2), bitwiseOR: P("|", 3), bitwiseXOR: P("^", 4), bitwiseAND: P("&", 5), equality: P("==/!=/===/!==", 6), relational: P("</>/<=/>=", 7), bitShift: P("<</>>/>>>", 8), plusMin: new S("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }), modulo: P("%", 10), star: P("*", 10), slash: P("/", 10), starstar: new S("**", { beforeExpr: true }), coalesce: P("??", 1), _break: b("break"), _case: b("case", I), _catch: b("catch"), _continue: b("continue"), _debugger: b("debugger"), _default: b("default", I), _do: b("do", { isLoop: true, beforeExpr: true }), _else: b("else", I), _finally: b("finally"), _for: b("for", { isLoop: true }), _function: b("function", A), _if: b("if"), _return: b("return", I), _switch: b("switch"), _throw: b("throw", I), _try: b("try"), _var: b("var"), _const: b("const"), _while: b("while", { isLoop: true }), _with: b("with"), _new: b("new", { beforeExpr: true, startsExpr: true }), _this: b("this", A), _super: b("super", A), _class: b("class", A), _extends: b("extends", I), _export: b("export"), _import: b("import", A), _null: b("null", A), _true: b("true", A), _false: b("false", A), _in: b("in", { beforeExpr: true, binop: 7 }), _instanceof: b("instanceof", { beforeExpr: true, binop: 7 }), _typeof: b("typeof", { beforeExpr: true, prefix: true, startsExpr: true }), _void: b("void", { beforeExpr: true, prefix: true, startsExpr: true }), _delete: b("delete", { beforeExpr: true, prefix: true, startsExpr: true }) }, L = /\r\n?|\n|\u2028|\u2029/, wi = new RegExp(L.source, "g");
function Q(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function ut(e, t, i) {
  i === void 0 && (i = e.length);
  for (var s = t; s < i; s++) {
    var r = e.charCodeAt(s);
    if (Q(r)) return s < i - 1 && r === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
  }
  return -1;
}
var pt = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, N = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ht = Object.prototype, Ai = ht.hasOwnProperty, Pi = ht.toString, Y = Object.hasOwn || function(e, t) {
  return Ai.call(e, t);
}, tt = Array.isArray || function(e) {
  return Pi.call(e) === "[object Array]";
}, it = /* @__PURE__ */ Object.create(null);
function K(e) {
  return it[e] || (it[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
}
function U(e) {
  return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
var Ii = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, ie = function(t, i) {
  this.line = t, this.column = i;
};
ie.prototype.offset = function(t) {
  return new ie(this.line, this.column + t);
};
var xe = function(t, i, s) {
  this.start = i, this.end = s, t.sourceFile !== null && (this.source = t.sourceFile);
};
function ct(e, t) {
  for (var i = 1, s = 0; ; ) {
    var r = ut(e, s, t);
    if (r < 0) return new ie(i, t - s);
    ++i, s = r;
  }
}
var Ve = { ecmaVersion: null, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowAwaitOutsideFunction: null, allowSuperOutsideMethod: null, allowHashBang: false, checkPrivateFields: true, locations: false, onToken: null, onComment: null, ranges: false, program: null, sourceFile: null, directSourceFile: null, preserveParens: false }, st = false;
function Ni(e) {
  var t = {};
  for (var i in Ve) t[i] = e && Y(e, i) ? e[i] : Ve[i];
  if (t.ecmaVersion === "latest" ? t.ecmaVersion = 1e8 : t.ecmaVersion == null ? (!st && typeof console == "object" && console.warn && (st = true, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)), t.ecmaVersion = 11) : t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5), (!e || e.allowHashBang == null) && (t.allowHashBang = t.ecmaVersion >= 14), tt(t.onToken)) {
    var s = t.onToken;
    t.onToken = function(r) {
      return s.push(r);
    };
  }
  return tt(t.onComment) && (t.onComment = Vi(t, t.onComment)), t;
}
function Vi(e, t) {
  return function(i, s, r, n, o, u) {
    var p = { type: i ? "Block" : "Line", value: s, start: r, end: n };
    e.locations && (p.loc = new xe(this, o, u)), e.ranges && (p.range = [r, n]), t.push(p);
  };
}
var se = 1, Z = 2, Be = 4, lt = 8, ft = 16, dt = 32, De = 64, mt = 128, re = 256, Fe = se | Z | re;
function je(e, t) {
  return Z | (e ? Be : 0) | (t ? lt : 0);
}
var le = 0, Me = 1, G = 2, xt = 3, yt = 4, gt = 5, T = function(t, i, s) {
  this.options = t = Ni(t), this.sourceFile = t.sourceFile, this.keywords = K(_i[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
  var r = "";
  t.allowReserved !== true && (r = Ae[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module" && (r += " await")), this.reservedWords = K(r);
  var n = (r ? r + " " : "") + Ae.strict;
  this.reservedWordsStrict = K(n), this.reservedWordsStrictBind = K(n + " " + Ae.strictBind), this.input = String(i), this.containsEsc = false, s ? (this.pos = s, this.lineStart = this.input.lastIndexOf(`
`, s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(L).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = a.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = true, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = false, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = /* @__PURE__ */ Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!" && this.skipLineComment(2), this.scopeStack = [], this.enterScope(se), this.regexpState = null, this.privateNameStack = [];
}, F = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
T.prototype.parse = function() {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
F.inFunction.get = function() {
  return (this.currentVarScope().flags & Z) > 0;
};
F.inGenerator.get = function() {
  return (this.currentVarScope().flags & lt) > 0 && !this.currentVarScope().inClassFieldInit;
};
F.inAsync.get = function() {
  return (this.currentVarScope().flags & Be) > 0 && !this.currentVarScope().inClassFieldInit;
};
F.canAwait.get = function() {
  for (var e = this.scopeStack.length - 1; e >= 0; e--) {
    var t = this.scopeStack[e];
    if (t.inClassFieldInit || t.flags & re) return false;
    if (t.flags & Z) return (t.flags & Be) > 0;
  }
  return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
};
F.allowSuper.get = function() {
  var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
  return (t & De) > 0 || i || this.options.allowSuperOutsideMethod;
};
F.allowDirectSuper.get = function() {
  return (this.currentThisScope().flags & mt) > 0;
};
F.treatFunctionsAsVar.get = function() {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
F.allowNewDotTarget.get = function() {
  var e = this.currentThisScope(), t = e.flags, i = e.inClassFieldInit;
  return (t & (Z | re)) > 0 || i;
};
F.inClassStaticBlock.get = function() {
  return (this.currentVarScope().flags & re) > 0;
};
T.extend = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  for (var s = this, r = 0; r < t.length; r++) s = t[r](s);
  return s;
};
T.parse = function(t, i) {
  return new this(i, t).parse();
};
T.parseExpressionAt = function(t, i, s) {
  var r = new this(s, t, i);
  return r.nextToken(), r.parseExpression();
};
T.tokenizer = function(t, i) {
  return new this(i, t);
};
Object.defineProperties(T.prototype, F);
var k = T.prototype, Li = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
k.strictDirective = function(e) {
  if (this.options.ecmaVersion < 5) return false;
  for (; ; ) {
    N.lastIndex = e, e += N.exec(this.input)[0].length;
    var t = Li.exec(this.input.slice(e));
    if (!t) return false;
    if ((t[1] || t[2]) === "use strict") {
      N.lastIndex = e + t[0].length;
      var i = N.exec(this.input), s = i.index + i[0].length, r = this.input.charAt(s);
      return r === ";" || r === "}" || L.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || r === "!" && this.input.charAt(s + 1) === "=");
    }
    e += t[0].length, N.lastIndex = e, e += N.exec(this.input)[0].length, this.input[e] === ";" && e++;
  }
};
k.eat = function(e) {
  return this.type === e ? (this.next(), true) : false;
};
k.isContextual = function(e) {
  return this.type === a.name && this.value === e && !this.containsEsc;
};
k.eatContextual = function(e) {
  return this.isContextual(e) ? (this.next(), true) : false;
};
k.expectContextual = function(e) {
  this.eatContextual(e) || this.unexpected();
};
k.canInsertSemicolon = function() {
  return this.type === a.eof || this.type === a.braceR || L.test(this.input.slice(this.lastTokEnd, this.start));
};
k.insertSemicolon = function() {
  if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), true;
};
k.semicolon = function() {
  !this.eat(a.semi) && !this.insertSemicolon() && this.unexpected();
};
k.afterTrailingComma = function(e, t) {
  if (this.type === e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), true;
};
k.expect = function(e) {
  this.eat(e) || this.unexpected();
};
k.unexpected = function(e) {
  this.raise(e ?? this.start, "Unexpected token");
};
var ye = function() {
  this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
};
k.checkPatternErrors = function(e, t) {
  if (e) {
    e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
    var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
    i > -1 && this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
  }
};
k.checkExpressionErrors = function(e, t) {
  if (!e) return false;
  var i = e.shorthandAssign, s = e.doubleProto;
  if (!t) return i >= 0 || s >= 0;
  i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
};
k.checkYieldAwaitInDefaultParams = function() {
  this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
};
k.isSimpleAssignTarget = function(e) {
  return e.type === "ParenthesizedExpression" ? this.isSimpleAssignTarget(e.expression) : e.type === "Identifier" || e.type === "MemberExpression";
};
var l = T.prototype;
l.parseTopLevel = function(e) {
  var t = /* @__PURE__ */ Object.create(null);
  for (e.body || (e.body = []); this.type !== a.eof; ) {
    var i = this.parseStatement(null, true, t);
    e.body.push(i);
  }
  if (this.inModule) for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
    var n = r[s];
    this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined");
  }
  return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
};
var Ue = { kind: "loop" }, Ri = { kind: "switch" };
l.isLet = function(e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return false;
  N.lastIndex = this.pos;
  var t = N.exec(this.input), i = this.pos + t[0].length, s = this.input.charCodeAt(i);
  if (s === 91 || s === 92) return true;
  if (e) return false;
  if (s === 123 || s > 55295 && s < 56320) return true;
  if (M(s, true)) {
    for (var r = i + 1; H(s = this.input.charCodeAt(r), true); ) ++r;
    if (s === 92 || s > 55295 && s < 56320) return true;
    var n = this.input.slice(i, r);
    if (!Ti.test(n)) return true;
  }
  return false;
};
l.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return false;
  N.lastIndex = this.pos;
  var e = N.exec(this.input), t = this.pos + e[0].length, i;
  return !L.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(H(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
};
l.parseStatement = function(e, t, i) {
  var s = this.type, r = this.startNode(), n;
  switch (this.isLet(e) && (s = a._var, n = "let"), s) {
    case a._break:
    case a._continue:
      return this.parseBreakContinueStatement(r, s.keyword);
    case a._debugger:
      return this.parseDebuggerStatement(r);
    case a._do:
      return this.parseDoStatement(r);
    case a._for:
      return this.parseForStatement(r);
    case a._function:
      return e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(r, false, !e);
    case a._class:
      return e && this.unexpected(), this.parseClass(r, true);
    case a._if:
      return this.parseIfStatement(r);
    case a._return:
      return this.parseReturnStatement(r);
    case a._switch:
      return this.parseSwitchStatement(r);
    case a._throw:
      return this.parseThrowStatement(r);
    case a._try:
      return this.parseTryStatement(r);
    case a._const:
    case a._var:
      return n = n || this.value, e && n !== "var" && this.unexpected(), this.parseVarStatement(r, n);
    case a._while:
      return this.parseWhileStatement(r);
    case a._with:
      return this.parseWithStatement(r);
    case a.braceL:
      return this.parseBlock(true, r);
    case a.semi:
      return this.parseEmptyStatement(r);
    case a._export:
    case a._import:
      if (this.options.ecmaVersion > 10 && s === a._import) {
        N.lastIndex = this.pos;
        var o = N.exec(this.input), u = this.pos + o[0].length, p = this.input.charCodeAt(u);
        if (p === 40 || p === 46) return this.parseExpressionStatement(r, this.parseExpression());
      }
      return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), s === a._import ? this.parseImport(r) : this.parseExport(r, i);
    default:
      if (this.isAsyncFunction()) return e && this.unexpected(), this.next(), this.parseFunctionStatement(r, true, !e);
      var d = this.value, f = this.parseExpression();
      return s === a.name && f.type === "Identifier" && this.eat(a.colon) ? this.parseLabeledStatement(r, d, f, e) : this.parseExpressionStatement(r, f);
  }
};
l.parseBreakContinueStatement = function(e, t) {
  var i = t === "break";
  this.next(), this.eat(a.semi) || this.insertSemicolon() ? e.label = null : this.type !== a.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());
  for (var s = 0; s < this.labels.length; ++s) {
    var r = this.labels[s];
    if ((e.label == null || r.name === e.label.name) && (r.kind != null && (i || r.kind === "loop") || e.label && i)) break;
  }
  return s === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
};
l.parseDebuggerStatement = function(e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
l.parseDoStatement = function(e) {
  return this.next(), this.labels.push(Ue), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(a._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(a.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
};
l.parseForStatement = function(e) {
  this.next();
  var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
  if (this.labels.push(Ue), this.enterScope(0), this.expect(a.parenL), this.type === a.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var i = this.isLet();
  if (this.type === a._var || this.type === a._const || i) {
    var s = this.startNode(), r = i ? "let" : this.value;
    return this.next(), this.parseVar(s, true, r), this.finishNode(s, "VariableDeclaration"), (this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && s.declarations.length === 1 ? (this.options.ecmaVersion >= 9 && (this.type === a._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, s)) : (t > -1 && this.unexpected(t), this.parseFor(e, s));
  }
  var n = this.isContextual("let"), o = false, u = this.containsEsc, p = new ye(), d = this.start, f = t > -1 ? this.parseExprSubscripts(p, "await") : this.parseExpression(true, p);
  return this.type === a._in || (o = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t > -1 ? (this.type === a._in && this.unexpected(t), e.await = true) : o && this.options.ecmaVersion >= 8 && (f.start === d && !u && f.type === "Identifier" && f.name === "async" ? this.unexpected() : this.options.ecmaVersion >= 9 && (e.await = false)), n && o && this.raise(f.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(f, false, p), this.checkLValPattern(f), this.parseForIn(e, f)) : (this.checkExpressionErrors(p, true), t > -1 && this.unexpected(t), this.parseFor(e, f));
};
l.parseFunctionStatement = function(e, t, i) {
  return this.next(), this.parseFunction(e, te | (i ? 0 : Le), false, t);
};
l.parseIfStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(a._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
};
l.parseReturnStatement = function(e) {
  return !this.inFunction && !this.options.allowReturnOutsideFunction && this.raise(this.start, "'return' outside of function"), this.next(), this.eat(a.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
};
l.parseSwitchStatement = function(e) {
  this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(a.braceL), this.labels.push(Ri), this.enterScope(0);
  for (var t, i = false; this.type !== a.braceR; ) if (this.type === a._case || this.type === a._default) {
    var s = this.type === a._case;
    t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), s ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = true, t.test = null), this.expect(a.colon);
  } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return this.exitScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
};
l.parseThrowStatement = function(e) {
  return this.next(), L.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
};
var Oi = [];
l.parseCatchClauseParam = function() {
  var e = this.parseBindingAtom(), t = e.type === "Identifier";
  return this.enterScope(t ? dt : 0), this.checkLValPattern(e, t ? yt : G), this.expect(a.parenR), e;
};
l.parseTryStatement = function(e) {
  if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === a._catch) {
    var t = this.startNode();
    this.next(), this.eat(a.parenL) ? t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t.param = null, this.enterScope(0)), t.body = this.parseBlock(false), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
  }
  return e.finalizer = this.eat(a._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer && this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
};
l.parseVarStatement = function(e, t, i) {
  return this.next(), this.parseVar(e, false, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
};
l.parseWhileStatement = function(e) {
  return this.next(), e.test = this.parseParenExpression(), this.labels.push(Ue), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
};
l.parseWithStatement = function(e) {
  return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
};
l.parseEmptyStatement = function(e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
l.parseLabeledStatement = function(e, t, i, s) {
  for (var r = 0, n = this.labels; r < n.length; r += 1) {
    var o = n[r];
    o.name === t && this.raise(i.start, "Label '" + t + "' is already declared");
  }
  for (var u = this.type.isLoop ? "loop" : this.type === a._switch ? "switch" : null, p = this.labels.length - 1; p >= 0; p--) {
    var d = this.labels[p];
    if (d.statementStart === e.start) d.statementStart = this.start, d.kind = u;
    else break;
  }
  return this.labels.push({ name: t, kind: u, statementStart: this.start }), e.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
};
l.parseExpressionStatement = function(e, t) {
  return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
};
l.parseBlock = function(e, t, i) {
  for (e === void 0 && (e = true), t === void 0 && (t = this.startNode()), t.body = [], this.expect(a.braceL), e && this.enterScope(0); this.type !== a.braceR; ) {
    var s = this.parseStatement(null);
    t.body.push(s);
  }
  return i && (this.strict = false), this.next(), e && this.exitScope(), this.finishNode(t, "BlockStatement");
};
l.parseFor = function(e, t) {
  return e.init = t, this.expect(a.semi), e.test = this.type === a.semi ? null : this.parseExpression(), this.expect(a.semi), e.update = this.type === a.parenR ? null : this.parseExpression(), this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
};
l.parseForIn = function(e, t) {
  var i = this.type === a._in;
  return this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier") && this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(a.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
};
l.parseVar = function(e, t, i, s) {
  for (e.declarations = [], e.kind = i; ; ) {
    var r = this.startNode();
    if (this.parseVarId(r, i), this.eat(a.eq) ? r.init = this.parseMaybeAssign(t) : !s && i === "const" && !(this.type === a._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) ? this.unexpected() : !s && r.id.type !== "Identifier" && !(t && (this.type === a._in || this.isContextual("of"))) ? this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : r.init = null, e.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(a.comma)) break;
  }
  return e;
};
l.parseVarId = function(e, t) {
  e.id = this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? Me : G, false);
};
var te = 1, Le = 2, vt = 4;
l.parseFunction = function(e, t, i, s, r) {
  this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) && (this.type === a.star && t & Le && this.unexpected(), e.generator = this.eat(a.star)), this.options.ecmaVersion >= 8 && (e.async = !!s), t & te && (e.id = t & vt && this.type !== a.name ? null : this.parseIdent(), e.id && !(t & Le) && this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Me : G : xt));
  var n = this.yieldPos, o = this.awaitPos, u = this.awaitIdentPos;
  return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(je(e.async, e.generator)), t & te || (e.id = this.type === a.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i, false, r), this.yieldPos = n, this.awaitPos = o, this.awaitIdentPos = u, this.finishNode(e, t & te ? "FunctionDeclaration" : "FunctionExpression");
};
l.parseFunctionParams = function(e) {
  this.expect(a.parenL), e.params = this.parseBindingList(a.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
};
l.parseClass = function(e, t) {
  this.next();
  var i = this.strict;
  this.strict = true, this.parseClassId(e, t), this.parseClassSuper(e);
  var s = this.enterClassBody(), r = this.startNode(), n = false;
  for (r.body = [], this.expect(a.braceL); this.type !== a.braceR; ) {
    var o = this.parseClassElement(e.superClass !== null);
    o && (r.body.push(o), o.type === "MethodDefinition" && o.kind === "constructor" ? (n && this.raiseRecoverable(o.start, "Duplicate constructor in the same class"), n = true) : o.key && o.key.type === "PrivateIdentifier" && Bi(s, o) && this.raiseRecoverable(o.key.start, "Identifier '#" + o.key.name + "' has already been declared"));
  }
  return this.strict = i, this.next(), e.body = this.finishNode(r, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
};
l.parseClassElement = function(e) {
  if (this.eat(a.semi)) return null;
  var t = this.options.ecmaVersion, i = this.startNode(), s = "", r = false, n = false, o = "method", u = false;
  if (this.eatContextual("static")) {
    if (t >= 13 && this.eat(a.braceL)) return this.parseClassStaticBlock(i), i;
    this.isClassElementNameStart() || this.type === a.star ? u = true : s = "static";
  }
  if (i.static = u, !s && t >= 8 && this.eatContextual("async") && ((this.isClassElementNameStart() || this.type === a.star) && !this.canInsertSemicolon() ? n = true : s = "async"), !s && (t >= 9 || !n) && this.eat(a.star) && (r = true), !s && !n && !r) {
    var p = this.value;
    (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? o = p : s = p);
  }
  if (s ? (i.computed = false, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = s, this.finishNode(i.key, "Identifier")) : this.parseClassElementName(i), t < 13 || this.type === a.parenL || o !== "method" || r || n) {
    var d = !i.static && fe(i, "constructor"), f = d && e;
    d && o !== "method" && this.raise(i.key.start, "Constructor can't have get/set modifier"), i.kind = d ? "constructor" : o, this.parseClassMethod(i, r, n, f);
  } else this.parseClassField(i);
  return i;
};
l.isClassElementNameStart = function() {
  return this.type === a.name || this.type === a.privateId || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword;
};
l.parseClassElementName = function(e) {
  this.type === a.privateId ? (this.value === "constructor" && this.raise(this.start, "Classes can't have an element named '#constructor'"), e.computed = false, e.key = this.parsePrivateIdent()) : this.parsePropertyName(e);
};
l.parseClassMethod = function(e, t, i, s) {
  var r = e.key;
  e.kind === "constructor" ? (t && this.raise(r.start, "Constructor can't be a generator"), i && this.raise(r.start, "Constructor can't be an async method")) : e.static && fe(e, "prototype") && this.raise(r.start, "Classes may not have a static property named prototype");
  var n = e.value = this.parseMethod(t, i, s);
  return e.kind === "get" && n.params.length !== 0 && this.raiseRecoverable(n.start, "getter should have no params"), e.kind === "set" && n.params.length !== 1 && this.raiseRecoverable(n.start, "setter should have exactly one param"), e.kind === "set" && n.params[0].type === "RestElement" && this.raiseRecoverable(n.params[0].start, "Setter cannot use rest params"), this.finishNode(e, "MethodDefinition");
};
l.parseClassField = function(e) {
  if (fe(e, "constructor") ? this.raise(e.key.start, "Classes can't have a field named 'constructor'") : e.static && fe(e, "prototype") && this.raise(e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(a.eq)) {
    var t = this.currentThisScope(), i = t.inClassFieldInit;
    t.inClassFieldInit = true, e.value = this.parseMaybeAssign(), t.inClassFieldInit = i;
  } else e.value = null;
  return this.semicolon(), this.finishNode(e, "PropertyDefinition");
};
l.parseClassStaticBlock = function(e) {
  e.body = [];
  var t = this.labels;
  for (this.labels = [], this.enterScope(re | De); this.type !== a.braceR; ) {
    var i = this.parseStatement(null);
    e.body.push(i);
  }
  return this.next(), this.exitScope(), this.labels = t, this.finishNode(e, "StaticBlock");
};
l.parseClassId = function(e, t) {
  this.type === a.name ? (e.id = this.parseIdent(), t && this.checkLValSimple(e.id, G, false)) : (t === true && this.unexpected(), e.id = null);
};
l.parseClassSuper = function(e) {
  e.superClass = this.eat(a._extends) ? this.parseExprSubscripts(null, false) : null;
};
l.enterClassBody = function() {
  var e = { declared: /* @__PURE__ */ Object.create(null), used: [] };
  return this.privateNameStack.push(e), e.declared;
};
l.exitClassBody = function() {
  var e = this.privateNameStack.pop(), t = e.declared, i = e.used;
  if (this.options.checkPrivateFields) for (var s = this.privateNameStack.length, r = s === 0 ? null : this.privateNameStack[s - 1], n = 0; n < i.length; ++n) {
    var o = i[n];
    Y(t, o.name) || (r ? r.used.push(o) : this.raiseRecoverable(o.start, "Private field '#" + o.name + "' must be declared in an enclosing class"));
  }
};
function Bi(e, t) {
  var i = t.key.name, s = e[i], r = "true";
  return t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set") && (r = (t.static ? "s" : "i") + t.kind), s === "iget" && r === "iset" || s === "iset" && r === "iget" || s === "sget" && r === "sset" || s === "sset" && r === "sget" ? (e[i] = "true", false) : s ? true : (e[i] = r, false);
}
function fe(e, t) {
  var i = e.computed, s = e.key;
  return !i && (s.type === "Identifier" && s.name === t || s.type === "Literal" && s.value === t);
}
l.parseExportAllDeclaration = function(e, t) {
  return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart)) : e.exported = null), this.expectContextual("from"), this.type !== a.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
};
l.parseExport = function(e, t) {
  if (this.next(), this.eat(a.star)) return this.parseExportAllDeclaration(e, t);
  if (this.eat(a._default)) return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
  if (this.shouldParseExportStatement()) e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration" ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id, e.declaration.id.start), e.specifiers = [], e.source = null;
  else {
    if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== a.string && this.unexpected(), e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause());
    else {
      for (var i = 0, s = e.specifiers; i < s.length; i += 1) {
        var r = s[i];
        this.checkUnreserved(r.local), this.checkLocalExport(r.local), r.local.type === "Literal" && this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.");
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
l.parseExportDeclaration = function(e) {
  return this.parseStatement(null);
};
l.parseExportDefaultDeclaration = function() {
  var e;
  if (this.type === a._function || (e = this.isAsyncFunction())) {
    var t = this.startNode();
    return this.next(), e && this.next(), this.parseFunction(t, te | vt, false, e);
  } else if (this.type === a._class) {
    var i = this.startNode();
    return this.parseClass(i, "nullableID");
  } else {
    var s = this.parseMaybeAssign();
    return this.semicolon(), s;
  }
};
l.checkExport = function(e, t, i) {
  e && (typeof t != "string" && (t = t.type === "Identifier" ? t.name : t.value), Y(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = true);
};
l.checkPatternExport = function(e, t) {
  var i = t.type;
  if (i === "Identifier") this.checkExport(e, t, t.start);
  else if (i === "ObjectPattern") for (var s = 0, r = t.properties; s < r.length; s += 1) {
    var n = r[s];
    this.checkPatternExport(e, n);
  }
  else if (i === "ArrayPattern") for (var o = 0, u = t.elements; o < u.length; o += 1) {
    var p = u[o];
    p && this.checkPatternExport(e, p);
  }
  else i === "Property" ? this.checkPatternExport(e, t.value) : i === "AssignmentPattern" ? this.checkPatternExport(e, t.left) : i === "RestElement" && this.checkPatternExport(e, t.argument);
};
l.checkVariableExport = function(e, t) {
  if (e) for (var i = 0, s = t; i < s.length; i += 1) {
    var r = s[i];
    this.checkPatternExport(e, r.id);
  }
};
l.shouldParseExportStatement = function() {
  return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
};
l.parseExportSpecifier = function(e) {
  var t = this.startNode();
  return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(e, t.exported, t.exported.start), this.finishNode(t, "ExportSpecifier");
};
l.parseExportSpecifiers = function(e) {
  var t = [], i = true;
  for (this.expect(a.braceL); !this.eat(a.braceR); ) {
    if (i) i = false;
    else if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
    t.push(this.parseExportSpecifier(e));
  }
  return t;
};
l.parseImport = function(e) {
  return this.next(), this.type === a.string ? (e.specifiers = Oi, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === a.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
};
l.parseImportSpecifier = function() {
  var e = this.startNode();
  return e.imported = this.parseModuleExportName(), this.eatContextual("as") ? e.local = this.parseIdent() : (this.checkUnreserved(e.imported), e.local = e.imported), this.checkLValSimple(e.local, G), this.finishNode(e, "ImportSpecifier");
};
l.parseImportDefaultSpecifier = function() {
  var e = this.startNode();
  return e.local = this.parseIdent(), this.checkLValSimple(e.local, G), this.finishNode(e, "ImportDefaultSpecifier");
};
l.parseImportNamespaceSpecifier = function() {
  var e = this.startNode();
  return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, G), this.finishNode(e, "ImportNamespaceSpecifier");
};
l.parseImportSpecifiers = function() {
  var e = [], t = true;
  if (this.type === a.name && (e.push(this.parseImportDefaultSpecifier()), !this.eat(a.comma))) return e;
  if (this.type === a.star) return e.push(this.parseImportNamespaceSpecifier()), e;
  for (this.expect(a.braceL); !this.eat(a.braceR); ) {
    if (t) t = false;
    else if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
    e.push(this.parseImportSpecifier());
  }
  return e;
};
l.parseWithClause = function() {
  var e = [];
  if (!this.eat(a._with)) return e;
  this.expect(a.braceL);
  for (var t = {}, i = true; !this.eat(a.braceR); ) {
    if (i) i = false;
    else if (this.expect(a.comma), this.afterTrailingComma(a.braceR)) break;
    var s = this.parseImportAttribute(), r = s.key.type === "Identifier" ? s.key.name : s.key.value;
    Y(t, r) && this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + r + "'"), t[r] = true, e.push(s);
  }
  return e;
};
l.parseImportAttribute = function() {
  var e = this.startNode();
  return e.key = this.type === a.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(a.colon), this.type !== a.string && this.unexpected(), e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
};
l.parseModuleExportName = function() {
  if (this.options.ecmaVersion >= 13 && this.type === a.string) {
    var e = this.parseLiteral(this.value);
    return Ii.test(e.value) && this.raise(e.start, "An export name cannot include a lone surrogate."), e;
  }
  return this.parseIdent(true);
};
l.adaptDirectivePrologue = function(e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
};
l.isDirectiveCandidate = function(e) {
  return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
};
var R = T.prototype;
R.toAssignable = function(e, t, i) {
  if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
    case "Identifier":
      this.inAsync && e.name === "await" && this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
      break;
    case "ObjectPattern":
    case "ArrayPattern":
    case "AssignmentPattern":
    case "RestElement":
      break;
    case "ObjectExpression":
      e.type = "ObjectPattern", i && this.checkPatternErrors(i, true);
      for (var s = 0, r = e.properties; s < r.length; s += 1) {
        var n = r[s];
        this.toAssignable(n, t), n.type === "RestElement" && (n.argument.type === "ArrayPattern" || n.argument.type === "ObjectPattern") && this.raise(n.argument.start, "Unexpected token");
      }
      break;
    case "Property":
      e.kind !== "init" && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);
      break;
    case "ArrayExpression":
      e.type = "ArrayPattern", i && this.checkPatternErrors(i, true), this.toAssignableList(e.elements, t);
      break;
    case "SpreadElement":
      e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern" && this.raise(e.argument.start, "Rest elements cannot have a default value");
      break;
    case "AssignmentExpression":
      e.operator !== "=" && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
      break;
    case "ParenthesizedExpression":
      this.toAssignable(e.expression, t, i);
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      if (!t) break;
    default:
      this.raise(e.start, "Assigning to rvalue");
  }
  else i && this.checkPatternErrors(i, true);
  return e;
};
R.toAssignableList = function(e, t) {
  for (var i = e.length, s = 0; s < i; s++) {
    var r = e[s];
    r && this.toAssignable(r, t);
  }
  if (i) {
    var n = e[i - 1];
    this.options.ecmaVersion === 6 && t && n && n.type === "RestElement" && n.argument.type !== "Identifier" && this.unexpected(n.argument.start);
  }
  return e;
};
R.parseSpread = function(e) {
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeAssign(false, e), this.finishNode(t, "SpreadElement");
};
R.parseRestBinding = function() {
  var e = this.startNode();
  return this.next(), this.options.ecmaVersion === 6 && this.type !== a.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
};
R.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) switch (this.type) {
    case a.bracketL:
      var e = this.startNode();
      return this.next(), e.elements = this.parseBindingList(a.bracketR, true, true), this.finishNode(e, "ArrayPattern");
    case a.braceL:
      return this.parseObj(true);
  }
  return this.parseIdent();
};
R.parseBindingList = function(e, t, i, s) {
  for (var r = [], n = true; !this.eat(e); ) if (n ? n = false : this.expect(a.comma), t && this.type === a.comma) r.push(null);
  else {
    if (i && this.afterTrailingComma(e)) break;
    if (this.type === a.ellipsis) {
      var o = this.parseRestBinding();
      this.parseBindingListItem(o), r.push(o), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e);
      break;
    } else r.push(this.parseAssignableListItem(s));
  }
  return r;
};
R.parseAssignableListItem = function(e) {
  var t = this.parseMaybeDefault(this.start, this.startLoc);
  return this.parseBindingListItem(t), t;
};
R.parseBindingListItem = function(e) {
  return e;
};
R.parseMaybeDefault = function(e, t, i) {
  if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(a.eq)) return i;
  var s = this.startNodeAt(e, t);
  return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
};
R.checkLValSimple = function(e, t, i) {
  t === void 0 && (t = le);
  var s = t !== le;
  switch (e.type) {
    case "Identifier":
      this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (s ? "Binding " : "Assigning to ") + e.name + " in strict mode"), s && (t === G && e.name === "let" && this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name"), i && (Y(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = true), t !== gt && this.declareName(e.name, t, e.start));
      break;
    case "ChainExpression":
      this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
      break;
    case "MemberExpression":
      s && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ParenthesizedExpression":
      return s && this.raiseRecoverable(e.start, "Binding parenthesized expression"), this.checkLValSimple(e.expression, t, i);
    default:
      this.raise(e.start, (s ? "Binding" : "Assigning to") + " rvalue");
  }
};
R.checkLValPattern = function(e, t, i) {
  switch (t === void 0 && (t = le), e.type) {
    case "ObjectPattern":
      for (var s = 0, r = e.properties; s < r.length; s += 1) {
        var n = r[s];
        this.checkLValInnerPattern(n, t, i);
      }
      break;
    case "ArrayPattern":
      for (var o = 0, u = e.elements; o < u.length; o += 1) {
        var p = u[o];
        p && this.checkLValInnerPattern(p, t, i);
      }
      break;
    default:
      this.checkLValSimple(e, t, i);
  }
};
R.checkLValInnerPattern = function(e, t, i) {
  switch (t === void 0 && (t = le), e.type) {
    case "Property":
      this.checkLValInnerPattern(e.value, t, i);
      break;
    case "AssignmentPattern":
      this.checkLValPattern(e.left, t, i);
      break;
    case "RestElement":
      this.checkLValPattern(e.argument, t, i);
      break;
    default:
      this.checkLValPattern(e, t, i);
  }
};
var D = function(t, i, s, r, n) {
  this.token = t, this.isExpr = !!i, this.preserveSpace = !!s, this.override = r, this.generator = !!n;
}, _ = { b_stat: new D("{", false), b_expr: new D("{", true), b_tmpl: new D("${", false), p_stat: new D("(", false), p_expr: new D("(", true), q_tmpl: new D("`", true, true, function(e) {
  return e.tryReadTemplateToken();
}), f_stat: new D("function", false), f_expr: new D("function", true), f_expr_gen: new D("function", true, false, null, true), f_gen: new D("function", false, false, null, true) }, $ = T.prototype;
$.initialContext = function() {
  return [_.b_stat];
};
$.curContext = function() {
  return this.context[this.context.length - 1];
};
$.braceIsBlock = function(e) {
  var t = this.curContext();
  return t === _.f_expr || t === _.f_stat ? true : e === a.colon && (t === _.b_stat || t === _.b_expr) ? !t.isExpr : e === a._return || e === a.name && this.exprAllowed ? L.test(this.input.slice(this.lastTokEnd, this.start)) : e === a._else || e === a.semi || e === a.eof || e === a.parenR || e === a.arrow ? true : e === a.braceL ? t === _.b_stat : e === a._var || e === a._const || e === a.name ? false : !this.exprAllowed;
};
$.inGeneratorContext = function() {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === "function") return t.generator;
  }
  return false;
};
$.updateContext = function(e) {
  var t, i = this.type;
  i.keyword && e === a.dot ? this.exprAllowed = false : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
};
$.overrideContext = function(e) {
  this.curContext() !== e && (this.context[this.context.length - 1] = e);
};
a.parenR.updateContext = a.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return;
  }
  var e = this.context.pop();
  e === _.b_stat && this.curContext().token === "function" && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
};
a.braceL.updateContext = function(e) {
  this.context.push(this.braceIsBlock(e) ? _.b_stat : _.b_expr), this.exprAllowed = true;
};
a.dollarBraceL.updateContext = function() {
  this.context.push(_.b_tmpl), this.exprAllowed = true;
};
a.parenL.updateContext = function(e) {
  var t = e === a._if || e === a._for || e === a._with || e === a._while;
  this.context.push(t ? _.p_stat : _.p_expr), this.exprAllowed = true;
};
a.incDec.updateContext = function() {
};
a._function.updateContext = a._class.updateContext = function(e) {
  e.beforeExpr && e !== a._else && !(e === a.semi && this.curContext() !== _.p_stat) && !(e === a._return && L.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === a.colon || e === a.braceL) && this.curContext() === _.b_stat) ? this.context.push(_.f_expr) : this.context.push(_.f_stat), this.exprAllowed = false;
};
a.colon.updateContext = function() {
  this.curContext().token === "function" && this.context.pop(), this.exprAllowed = true;
};
a.backQuote.updateContext = function() {
  this.curContext() === _.q_tmpl ? this.context.pop() : this.context.push(_.q_tmpl), this.exprAllowed = false;
};
a.star.updateContext = function(e) {
  if (e === a._function) {
    var t = this.context.length - 1;
    this.context[t] === _.f_expr ? this.context[t] = _.f_expr_gen : this.context[t] = _.f_gen;
  }
  this.exprAllowed = true;
};
a.name.updateContext = function(e) {
  var t = false;
  this.options.ecmaVersion >= 6 && e !== a.dot && (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) && (t = true), this.exprAllowed = t;
};
var y = T.prototype;
y.checkPropClash = function(e, t, i) {
  if (!(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") && !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
    var s = e.key, r;
    switch (s.type) {
      case "Identifier":
        r = s.name;
        break;
      case "Literal":
        r = String(s.value);
        break;
      default:
        return;
    }
    var n = e.kind;
    if (this.options.ecmaVersion >= 6) {
      r === "__proto__" && n === "init" && (t.proto && (i ? i.doubleProto < 0 && (i.doubleProto = s.start) : this.raiseRecoverable(s.start, "Redefinition of __proto__ property")), t.proto = true);
      return;
    }
    r = "$" + r;
    var o = t[r];
    if (o) {
      var u;
      n === "init" ? u = this.strict && o.init || o.get || o.set : u = o.init || o[n], u && this.raiseRecoverable(s.start, "Redefinition of property");
    } else o = t[r] = { init: false, get: false, set: false };
    o[n] = true;
  }
};
y.parseExpression = function(e, t) {
  var i = this.start, s = this.startLoc, r = this.parseMaybeAssign(e, t);
  if (this.type === a.comma) {
    var n = this.startNodeAt(i, s);
    for (n.expressions = [r]; this.eat(a.comma); ) n.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(n, "SequenceExpression");
  }
  return r;
};
y.parseMaybeAssign = function(e, t, i) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = false;
  }
  var s = false, r = -1, n = -1, o = -1;
  t ? (r = t.parenthesizedAssign, n = t.trailingComma, o = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1) : (t = new ye(), s = true);
  var u = this.start, p = this.startLoc;
  (this.type === a.parenL || this.type === a.name) && (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await");
  var d = this.parseMaybeConditional(e, t);
  if (i && (d = i.call(this, d, u, p)), this.type.isAssign) {
    var f = this.startNodeAt(u, p);
    return f.operator = this.value, this.type === a.eq && (d = this.toAssignable(d, false, t)), s || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1), t.shorthandAssign >= d.start && (t.shorthandAssign = -1), this.type === a.eq ? this.checkLValPattern(d) : this.checkLValSimple(d), f.left = d, this.next(), f.right = this.parseMaybeAssign(e), o > -1 && (t.doubleProto = o), this.finishNode(f, "AssignmentExpression");
  } else s && this.checkExpressionErrors(t, true);
  return r > -1 && (t.parenthesizedAssign = r), n > -1 && (t.trailingComma = n), d;
};
y.parseMaybeConditional = function(e, t) {
  var i = this.start, s = this.startLoc, r = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t)) return r;
  if (this.eat(a.question)) {
    var n = this.startNodeAt(i, s);
    return n.test = r, n.consequent = this.parseMaybeAssign(), this.expect(a.colon), n.alternate = this.parseMaybeAssign(e), this.finishNode(n, "ConditionalExpression");
  }
  return r;
};
y.parseExprOps = function(e, t) {
  var i = this.start, s = this.startLoc, r = this.parseMaybeUnary(t, false, false, e);
  return this.checkExpressionErrors(t) || r.start === i && r.type === "ArrowFunctionExpression" ? r : this.parseExprOp(r, i, s, -1, e);
};
y.parseExprOp = function(e, t, i, s, r) {
  var n = this.type.binop;
  if (n != null && (!r || this.type !== a._in) && n > s) {
    var o = this.type === a.logicalOR || this.type === a.logicalAND, u = this.type === a.coalesce;
    u && (n = a.logicalAND.binop);
    var p = this.value;
    this.next();
    var d = this.start, f = this.startLoc, C = this.parseExprOp(this.parseMaybeUnary(null, false, false, r), d, f, n, r), B = this.buildBinary(t, i, e, C, p, o || u);
    return (o && this.type === a.coalesce || u && (this.type === a.logicalOR || this.type === a.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(B, t, i, s, r);
  }
  return e;
};
y.buildBinary = function(e, t, i, s, r, n) {
  s.type === "PrivateIdentifier" && this.raise(s.start, "Private identifier can only be left side of binary expression");
  var o = this.startNodeAt(e, t);
  return o.left = i, o.operator = r, o.right = s, this.finishNode(o, n ? "LogicalExpression" : "BinaryExpression");
};
y.parseMaybeUnary = function(e, t, i, s) {
  var r = this.start, n = this.startLoc, o;
  if (this.isContextual("await") && this.canAwait) o = this.parseAwait(s), t = true;
  else if (this.type.prefix) {
    var u = this.startNode(), p = this.type === a.incDec;
    u.operator = this.value, u.prefix = true, this.next(), u.argument = this.parseMaybeUnary(null, true, p, s), this.checkExpressionErrors(e, true), p ? this.checkLValSimple(u.argument) : this.strict && u.operator === "delete" && bt(u.argument) ? this.raiseRecoverable(u.start, "Deleting local variable in strict mode") : u.operator === "delete" && Re(u.argument) ? this.raiseRecoverable(u.start, "Private fields can not be deleted") : t = true, o = this.finishNode(u, p ? "UpdateExpression" : "UnaryExpression");
  } else if (!t && this.type === a.privateId) (s || this.privateNameStack.length === 0) && this.options.checkPrivateFields && this.unexpected(), o = this.parsePrivateIdent(), this.type !== a._in && this.unexpected();
  else {
    if (o = this.parseExprSubscripts(e, s), this.checkExpressionErrors(e)) return o;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var d = this.startNodeAt(r, n);
      d.operator = this.value, d.prefix = false, d.argument = o, this.checkLValSimple(o), this.next(), o = this.finishNode(d, "UpdateExpression");
    }
  }
  if (!i && this.eat(a.starstar)) if (t) this.unexpected(this.lastTokStart);
  else return this.buildBinary(r, n, o, this.parseMaybeUnary(null, false, false, s), "**", false);
  else return o;
};
function bt(e) {
  return e.type === "Identifier" || e.type === "ParenthesizedExpression" && bt(e.expression);
}
function Re(e) {
  return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Re(e.expression) || e.type === "ParenthesizedExpression" && Re(e.expression);
}
y.parseExprSubscripts = function(e, t) {
  var i = this.start, s = this.startLoc, r = this.parseExprAtom(e, t);
  if (r.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return r;
  var n = this.parseSubscripts(r, i, s, false, t);
  return e && n.type === "MemberExpression" && (e.parenthesizedAssign >= n.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= n.start && (e.parenthesizedBind = -1), e.trailingComma >= n.start && (e.trailingComma = -1)), n;
};
y.parseSubscripts = function(e, t, i, s, r) {
  for (var n = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start, o = false; ; ) {
    var u = this.parseSubscript(e, t, i, s, n, o, r);
    if (u.optional && (o = true), u === e || u.type === "ArrowFunctionExpression") {
      if (o) {
        var p = this.startNodeAt(t, i);
        p.expression = u, u = this.finishNode(p, "ChainExpression");
      }
      return u;
    }
    e = u;
  }
};
y.shouldParseAsyncArrow = function() {
  return !this.canInsertSemicolon() && this.eat(a.arrow);
};
y.parseSubscriptAsyncArrow = function(e, t, i, s) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, true, s);
};
y.parseSubscript = function(e, t, i, s, r, n, o) {
  var u = this.options.ecmaVersion >= 11, p = u && this.eat(a.questionDot);
  s && p && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
  var d = this.eat(a.bracketL);
  if (d || p && this.type !== a.parenL && this.type !== a.backQuote || this.eat(a.dot)) {
    var f = this.startNodeAt(t, i);
    f.object = e, d ? (f.property = this.parseExpression(), this.expect(a.bracketR)) : this.type === a.privateId && e.type !== "Super" ? f.property = this.parsePrivateIdent() : f.property = this.parseIdent(this.options.allowReserved !== "never"), f.computed = !!d, u && (f.optional = p), e = this.finishNode(f, "MemberExpression");
  } else if (!s && this.eat(a.parenL)) {
    var C = new ye(), B = this.yieldPos, h = this.awaitPos, m = this.awaitIdentPos;
    this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
    var x = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, false, C);
    if (r && !p && this.shouldParseAsyncArrow()) return this.checkPatternErrors(C, false), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = B, this.awaitPos = h, this.awaitIdentPos = m, this.parseSubscriptAsyncArrow(t, i, x, o);
    this.checkExpressionErrors(C, true), this.yieldPos = B || this.yieldPos, this.awaitPos = h || this.awaitPos, this.awaitIdentPos = m || this.awaitIdentPos;
    var g = this.startNodeAt(t, i);
    g.callee = e, g.arguments = x, u && (g.optional = p), e = this.finishNode(g, "CallExpression");
  } else if (this.type === a.backQuote) {
    (p || n) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
    var w = this.startNodeAt(t, i);
    w.tag = e, w.quasi = this.parseTemplate({ isTagged: true }), e = this.finishNode(w, "TaggedTemplateExpression");
  }
  return e;
};
y.parseExprAtom = function(e, t, i) {
  this.type === a.slash && this.readRegexp();
  var s, r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case a._super:
      return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s = this.startNode(), this.next(), this.type === a.parenL && !this.allowDirectSuper && this.raise(s.start, "super() call outside constructor of a subclass"), this.type !== a.dot && this.type !== a.bracketL && this.type !== a.parenL && this.unexpected(), this.finishNode(s, "Super");
    case a._this:
      return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
    case a.name:
      var n = this.start, o = this.startLoc, u = this.containsEsc, p = this.parseIdent(false);
      if (this.options.ecmaVersion >= 8 && !u && p.name === "async" && !this.canInsertSemicolon() && this.eat(a._function)) return this.overrideContext(_.f_expr), this.parseFunction(this.startNodeAt(n, o), 0, false, true, t);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(a.arrow)) return this.parseArrowExpression(this.startNodeAt(n, o), [p], false, t);
        if (this.options.ecmaVersion >= 8 && p.name === "async" && this.type === a.name && !u && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) return p = this.parseIdent(false), (this.canInsertSemicolon() || !this.eat(a.arrow)) && this.unexpected(), this.parseArrowExpression(this.startNodeAt(n, o), [p], true, t);
      }
      return p;
    case a.regexp:
      var d = this.value;
      return s = this.parseLiteral(d.value), s.regex = { pattern: d.pattern, flags: d.flags }, s;
    case a.num:
    case a.string:
      return this.parseLiteral(this.value);
    case a._null:
    case a._true:
    case a._false:
      return s = this.startNode(), s.value = this.type === a._null ? null : this.type === a._true, s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");
    case a.parenL:
      var f = this.start, C = this.parseParenAndDistinguishExpression(r, t);
      return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(C) && (e.parenthesizedAssign = f), e.parenthesizedBind < 0 && (e.parenthesizedBind = f)), C;
    case a.bracketL:
      return s = this.startNode(), this.next(), s.elements = this.parseExprList(a.bracketR, true, true, e), this.finishNode(s, "ArrayExpression");
    case a.braceL:
      return this.overrideContext(_.b_expr), this.parseObj(false, e);
    case a._function:
      return s = this.startNode(), this.next(), this.parseFunction(s, 0);
    case a._class:
      return this.parseClass(this.startNode(), false);
    case a._new:
      return this.parseNew();
    case a.backQuote:
      return this.parseTemplate();
    case a._import:
      return this.options.ecmaVersion >= 11 ? this.parseExprImport(i) : this.unexpected();
    default:
      return this.parseExprAtomDefault();
  }
};
y.parseExprAtomDefault = function() {
  this.unexpected();
};
y.parseExprImport = function(e) {
  var t = this.startNode();
  if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === a.parenL && !e) return this.parseDynamicImport(t);
  if (this.type === a.dot) {
    var i = this.startNodeAt(t.start, t.loc && t.loc.start);
    return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
  } else this.unexpected();
};
y.parseDynamicImport = function(e) {
  if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) this.eat(a.parenR) ? e.options = null : (this.expect(a.comma), this.afterTrailingComma(a.parenR) ? e.options = null : (e.options = this.parseMaybeAssign(), this.eat(a.parenR) || (this.expect(a.comma), this.afterTrailingComma(a.parenR) || this.unexpected())));
  else if (!this.eat(a.parenR)) {
    var t = this.start;
    this.eat(a.comma) && this.eat(a.parenR) ? this.raiseRecoverable(t, "Trailing comma is not allowed in import()") : this.unexpected(t);
  }
  return this.finishNode(e, "ImportExpression");
};
y.parseImportMeta = function(e) {
  this.next();
  var t = this.containsEsc;
  return e.property = this.parseIdent(true), e.property.name !== "meta" && this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'"), t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"), this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere && this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e, "MetaProperty");
};
y.parseLiteral = function(e) {
  var t = this.startNode();
  return t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t, "Literal");
};
y.parseParenExpression = function() {
  this.expect(a.parenL);
  var e = this.parseExpression();
  return this.expect(a.parenR), e;
};
y.shouldParseArrow = function(e) {
  return !this.canInsertSemicolon();
};
y.parseParenAndDistinguishExpression = function(e, t) {
  var i = this.start, s = this.startLoc, r, n = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var o = this.start, u = this.startLoc, p = [], d = true, f = false, C = new ye(), B = this.yieldPos, h = this.awaitPos, m;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== a.parenR; ) if (d ? d = false : this.expect(a.comma), n && this.afterTrailingComma(a.parenR, true)) {
      f = true;
      break;
    } else if (this.type === a.ellipsis) {
      m = this.start, p.push(this.parseParenItem(this.parseRestBinding())), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
      break;
    } else p.push(this.parseMaybeAssign(false, C, this.parseParenItem));
    var x = this.lastTokEnd, g = this.lastTokEndLoc;
    if (this.expect(a.parenR), e && this.shouldParseArrow(p) && this.eat(a.arrow)) return this.checkPatternErrors(C, false), this.checkYieldAwaitInDefaultParams(), this.yieldPos = B, this.awaitPos = h, this.parseParenArrowList(i, s, p, t);
    (!p.length || f) && this.unexpected(this.lastTokStart), m && this.unexpected(m), this.checkExpressionErrors(C, true), this.yieldPos = B || this.yieldPos, this.awaitPos = h || this.awaitPos, p.length > 1 ? (r = this.startNodeAt(o, u), r.expressions = p, this.finishNodeAt(r, "SequenceExpression", x, g)) : r = p[0];
  } else r = this.parseParenExpression();
  if (this.options.preserveParens) {
    var w = this.startNodeAt(i, s);
    return w.expression = r, this.finishNode(w, "ParenthesizedExpression");
  } else return r;
};
y.parseParenItem = function(e) {
  return e;
};
y.parseParenArrowList = function(e, t, i, s) {
  return this.parseArrowExpression(this.startNodeAt(e, t), i, false, s);
};
var Di = [];
y.parseNew = function() {
  this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode();
  if (this.next(), this.options.ecmaVersion >= 6 && this.type === a.dot) {
    var t = this.startNodeAt(e.start, e.loc && e.loc.start);
    t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
    var i = this.containsEsc;
    return e.property = this.parseIdent(true), e.property.name !== "target" && this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'"), i && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e, "MetaProperty");
  }
  var s = this.start, r = this.startLoc;
  return e.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), s, r, true, false), this.eat(a.parenL) ? e.arguments = this.parseExprList(a.parenR, this.options.ecmaVersion >= 8, false) : e.arguments = Di, this.finishNode(e, "NewExpression");
};
y.parseTemplateElement = function(e) {
  var t = e.isTagged, i = this.startNode();
  return this.type === a.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = { raw: this.value.replace(/\r\n?/g, `
`), cooked: null }) : i.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`), cooked: this.value }, this.next(), i.tail = this.type === a.backQuote, this.finishNode(i, "TemplateElement");
};
y.parseTemplate = function(e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = false);
  var i = this.startNode();
  this.next(), i.expressions = [];
  var s = this.parseTemplateElement({ isTagged: t });
  for (i.quasis = [s]; !s.tail; ) this.type === a.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(a.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(a.braceR), i.quasis.push(s = this.parseTemplateElement({ isTagged: t }));
  return this.next(), this.finishNode(i, "TemplateLiteral");
};
y.isAsyncProp = function(e) {
  return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === a.name || this.type === a.num || this.type === a.string || this.type === a.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === a.star) && !L.test(this.input.slice(this.lastTokEnd, this.start));
};
y.parseObj = function(e, t) {
  var i = this.startNode(), s = true, r = {};
  for (i.properties = [], this.next(); !this.eat(a.braceR); ) {
    if (s) s = false;
    else if (this.expect(a.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(a.braceR)) break;
    var n = this.parseProperty(e, t);
    e || this.checkPropClash(n, r, t), i.properties.push(n);
  }
  return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
};
y.parseProperty = function(e, t) {
  var i = this.startNode(), s, r, n, o;
  if (this.options.ecmaVersion >= 9 && this.eat(a.ellipsis)) return e ? (i.argument = this.parseIdent(false), this.type === a.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(i, "RestElement")) : (i.argument = this.parseMaybeAssign(false, t), this.type === a.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(i, "SpreadElement"));
  this.options.ecmaVersion >= 6 && (i.method = false, i.shorthand = false, (e || t) && (n = this.start, o = this.startLoc), e || (s = this.eat(a.star)));
  var u = this.containsEsc;
  return this.parsePropertyName(i), !e && !u && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i) ? (r = true, s = this.options.ecmaVersion >= 9 && this.eat(a.star), this.parsePropertyName(i)) : r = false, this.parsePropertyValue(i, e, s, r, n, o, t, u), this.finishNode(i, "Property");
};
y.parseGetterSetter = function(e) {
  e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(false);
  var t = e.kind === "get" ? 0 : 1;
  if (e.value.params.length !== t) {
    var i = e.value.start;
    e.kind === "get" ? this.raiseRecoverable(i, "getter should have no params") : this.raiseRecoverable(i, "setter should have exactly one param");
  } else e.kind === "set" && e.value.params[0].type === "RestElement" && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
};
y.parsePropertyValue = function(e, t, i, s, r, n, o, u) {
  (i || s) && this.type === a.colon && this.unexpected(), this.eat(a.colon) ? (e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, o), e.kind = "init") : this.options.ecmaVersion >= 6 && this.type === a.parenL ? (t && this.unexpected(), e.kind = "init", e.method = true, e.value = this.parseMethod(i, s)) : !t && !u && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== a.comma && this.type !== a.braceR && this.type !== a.eq ? ((i || s) && this.unexpected(), this.parseGetterSetter(e)) : this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier" ? ((i || s) && this.unexpected(), this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = r), e.kind = "init", t ? e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key)) : this.type === a.eq && o ? (o.shorthandAssign < 0 && (o.shorthandAssign = this.start), e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key))) : e.value = this.copyNode(e.key), e.shorthand = true) : this.unexpected();
};
y.parsePropertyName = function(e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(a.bracketL)) return e.computed = true, e.key = this.parseMaybeAssign(), this.expect(a.bracketR), e.key;
    e.computed = false;
  }
  return e.key = this.type === a.num || this.type === a.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
};
y.initFunction = function(e) {
  e.id = null, this.options.ecmaVersion >= 6 && (e.generator = e.expression = false), this.options.ecmaVersion >= 8 && (e.async = false);
};
y.parseMethod = function(e, t, i) {
  var s = this.startNode(), r = this.yieldPos, n = this.awaitPos, o = this.awaitIdentPos;
  return this.initFunction(s), this.options.ecmaVersion >= 6 && (s.generator = e), this.options.ecmaVersion >= 8 && (s.async = !!t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(je(t, s.generator) | De | (i ? mt : 0)), this.expect(a.parenL), s.params = this.parseBindingList(a.parenR, false, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, false, true, false), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(s, "FunctionExpression");
};
y.parseArrowExpression = function(e, t, i, s) {
  var r = this.yieldPos, n = this.awaitPos, o = this.awaitIdentPos;
  return this.enterScope(je(i, false) | ft), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, true), this.parseFunctionBody(e, true, false, s), this.yieldPos = r, this.awaitPos = n, this.awaitIdentPos = o, this.finishNode(e, "ArrowFunctionExpression");
};
y.parseFunctionBody = function(e, t, i, s) {
  var r = t && this.type !== a.braceL, n = this.strict, o = false;
  if (r) e.body = this.parseMaybeAssign(s), e.expression = true, this.checkParams(e, false);
  else {
    var u = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!n || u) && (o = this.strictDirective(this.end), o && u && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list"));
    var p = this.labels;
    this.labels = [], o && (this.strict = true), this.checkParams(e, !n && !o && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id && this.checkLValSimple(e.id, gt), e.body = this.parseBlock(false, void 0, o && !n), e.expression = false, this.adaptDirectivePrologue(e.body.body), this.labels = p;
  }
  this.exitScope();
};
y.isSimpleParamList = function(e) {
  for (var t = 0, i = e; t < i.length; t += 1) {
    var s = i[t];
    if (s.type !== "Identifier") return false;
  }
  return true;
};
y.checkParams = function(e, t) {
  for (var i = /* @__PURE__ */ Object.create(null), s = 0, r = e.params; s < r.length; s += 1) {
    var n = r[s];
    this.checkLValInnerPattern(n, Me, t ? null : i);
  }
};
y.parseExprList = function(e, t, i, s) {
  for (var r = [], n = true; !this.eat(e); ) {
    if (n) n = false;
    else if (this.expect(a.comma), t && this.afterTrailingComma(e)) break;
    var o = void 0;
    i && this.type === a.comma ? o = null : this.type === a.ellipsis ? (o = this.parseSpread(s), s && this.type === a.comma && s.trailingComma < 0 && (s.trailingComma = this.start)) : o = this.parseMaybeAssign(false, s), r.push(o);
  }
  return r;
};
y.checkUnreserved = function(e) {
  var t = e.start, i = e.end, s = e.name;
  if (this.inGenerator && s === "yield" && this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && s === "arguments" && this.raiseRecoverable(t, "Cannot use 'arguments' in class field initializer"), this.inClassStaticBlock && (s === "arguments" || s === "await") && this.raise(t, "Cannot use " + s + " in class static initialization block"), this.keywords.test(s) && this.raise(t, "Unexpected keyword '" + s + "'"), !(this.options.ecmaVersion < 6 && this.input.slice(t, i).indexOf("\\") !== -1)) {
    var r = this.strict ? this.reservedWordsStrict : this.reservedWords;
    r.test(s) && (!this.inAsync && s === "await" && this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + s + "' is reserved"));
  }
};
y.parseIdent = function(e) {
  var t = this.parseIdentNode();
  return this.next(!!e), this.finishNode(t, "Identifier"), e || (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos && (this.awaitIdentPos = t.start)), t;
};
y.parseIdentNode = function() {
  var e = this.startNode();
  return this.type === a.name ? e.name = this.value : this.type.keyword ? (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46) && this.context.pop(), this.type = a.name) : this.unexpected(), e;
};
y.parsePrivateIdent = function() {
  var e = this.startNode();
  return this.type === a.privateId ? e.name = this.value : this.unexpected(), this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields && (this.privateNameStack.length === 0 ? this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e)), e;
};
y.parseYield = function(e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return this.next(), this.type === a.semi || this.canInsertSemicolon() || this.type !== a.star && !this.type.startsExpr ? (t.delegate = false, t.argument = null) : (t.delegate = this.eat(a.star), t.argument = this.parseMaybeAssign(e)), this.finishNode(t, "YieldExpression");
};
y.parseAwait = function(e) {
  this.awaitPos || (this.awaitPos = this.start);
  var t = this.startNode();
  return this.next(), t.argument = this.parseMaybeUnary(null, true, false, e), this.finishNode(t, "AwaitExpression");
};
var de = T.prototype;
de.raise = function(e, t) {
  var i = ct(this.input, e);
  t += " (" + i.line + ":" + i.column + ")";
  var s = new SyntaxError(t);
  throw s.pos = e, s.loc = i, s.raisedAt = this.pos, s;
};
de.raiseRecoverable = de.raise;
de.curPosition = function() {
  if (this.options.locations) return new ie(this.curLine, this.pos - this.lineStart);
};
var W = T.prototype, Fi = function(t) {
  this.flags = t, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = false;
};
W.enterScope = function(e) {
  this.scopeStack.push(new Fi(e));
};
W.exitScope = function() {
  this.scopeStack.pop();
};
W.treatFunctionsAsVarInScope = function(e) {
  return e.flags & Z || !this.inModule && e.flags & se;
};
W.declareName = function(e, t, i) {
  var s = false;
  if (t === G) {
    var r = this.currentScope();
    s = r.lexical.indexOf(e) > -1 || r.functions.indexOf(e) > -1 || r.var.indexOf(e) > -1, r.lexical.push(e), this.inModule && r.flags & se && delete this.undefinedExports[e];
  } else if (t === yt) {
    var n = this.currentScope();
    n.lexical.push(e);
  } else if (t === xt) {
    var o = this.currentScope();
    this.treatFunctionsAsVar ? s = o.lexical.indexOf(e) > -1 : s = o.lexical.indexOf(e) > -1 || o.var.indexOf(e) > -1, o.functions.push(e);
  } else for (var u = this.scopeStack.length - 1; u >= 0; --u) {
    var p = this.scopeStack[u];
    if (p.lexical.indexOf(e) > -1 && !(p.flags & dt && p.lexical[0] === e) || !this.treatFunctionsAsVarInScope(p) && p.functions.indexOf(e) > -1) {
      s = true;
      break;
    }
    if (p.var.push(e), this.inModule && p.flags & se && delete this.undefinedExports[e], p.flags & Fe) break;
  }
  s && this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
};
W.checkLocalExport = function(e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1 && (this.undefinedExports[e.name] = e);
};
W.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1];
};
W.currentVarScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Fe) return t;
  }
};
W.currentThisScope = function() {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Fe && !(t.flags & ft)) return t;
  }
};
var ge = function(t, i, s) {
  this.type = "", this.start = i, this.end = 0, t.options.locations && (this.loc = new xe(t, s)), t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile), t.options.ranges && (this.range = [i, 0]);
}, ae = T.prototype;
ae.startNode = function() {
  return new ge(this, this.start, this.startLoc);
};
ae.startNodeAt = function(e, t) {
  return new ge(this, e, t);
};
function St(e, t, i, s) {
  return e.type = t, e.end = i, this.options.locations && (e.loc.end = s), this.options.ranges && (e.range[1] = i), e;
}
ae.finishNode = function(e, t) {
  return St.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
ae.finishNodeAt = function(e, t, i, s) {
  return St.call(this, e, t, i, s);
};
ae.copyNode = function(e) {
  var t = new ge(this, e.start, this.startLoc);
  for (var i in e) t[i] = e[i];
  return t;
};
var ji = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz", Ct = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", _t = Ct + " Extended_Pictographic", Tt = _t, kt = Tt + " EBase EComp EMod EPres ExtPict", Et = kt, Mi = Et, Ui = { 9: Ct, 10: _t, 11: Tt, 12: kt, 13: Et, 14: Mi }, qi = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji", Gi = { 9: "", 10: "", 11: "", 12: "", 13: "", 14: qi }, rt = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", wt = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", At = wt + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", Pt = At + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", It = Pt + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", Nt = It + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", Ji = Nt + " " + ji, Ki = { 9: wt, 10: At, 11: Pt, 12: It, 13: Nt, 14: Ji }, Vt = {};
function Wi(e) {
  var t = Vt[e] = { binary: K(Ui[e] + " " + rt), binaryOfStrings: K(Gi[e]), nonBinary: { General_Category: K(rt), Script: K(Ki[e]) } };
  t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
}
for (ce = 0, Ie = [9, 10, 11, 12, 13, 14]; ce < Ie.length; ce += 1) at = Ie[ce], Wi(at);
var at, ce, Ie, c = T.prototype, me = function(t, i) {
  this.parent = t, this.base = i || this;
};
me.prototype.separatedFrom = function(t) {
  for (var i = this; i; i = i.parent) for (var s = t; s; s = s.parent) if (i.base === s.base && i !== s) return true;
  return false;
};
me.prototype.sibling = function() {
  return new me(this.parent, this.base);
};
var j = function(t) {
  this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = Vt[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = false, this.switchV = false, this.switchN = false, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = false, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = /* @__PURE__ */ Object.create(null), this.backReferenceNames = [], this.branchID = null;
};
j.prototype.reset = function(t, i, s) {
  var r = s.indexOf("v") !== -1, n = s.indexOf("u") !== -1;
  this.start = t | 0, this.source = i + "", this.flags = s, r && this.parser.options.ecmaVersion >= 15 ? (this.switchU = true, this.switchV = true, this.switchN = true) : (this.switchU = n && this.parser.options.ecmaVersion >= 6, this.switchV = false, this.switchN = n && this.parser.options.ecmaVersion >= 9);
};
j.prototype.raise = function(t) {
  this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
};
j.prototype.at = function(t, i) {
  i === void 0 && (i = false);
  var s = this.source, r = s.length;
  if (t >= r) return -1;
  var n = s.charCodeAt(t);
  if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r) return n;
  var o = s.charCodeAt(t + 1);
  return o >= 56320 && o <= 57343 ? (n << 10) + o - 56613888 : n;
};
j.prototype.nextIndex = function(t, i) {
  i === void 0 && (i = false);
  var s = this.source, r = s.length;
  if (t >= r) return r;
  var n = s.charCodeAt(t), o;
  return !(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r || (o = s.charCodeAt(t + 1)) < 56320 || o > 57343 ? t + 1 : t + 2;
};
j.prototype.current = function(t) {
  return t === void 0 && (t = false), this.at(this.pos, t);
};
j.prototype.lookahead = function(t) {
  return t === void 0 && (t = false), this.at(this.nextIndex(this.pos, t), t);
};
j.prototype.advance = function(t) {
  t === void 0 && (t = false), this.pos = this.nextIndex(this.pos, t);
};
j.prototype.eat = function(t, i) {
  return i === void 0 && (i = false), this.current(i) === t ? (this.advance(i), true) : false;
};
j.prototype.eatChars = function(t, i) {
  i === void 0 && (i = false);
  for (var s = this.pos, r = 0, n = t; r < n.length; r += 1) {
    var o = n[r], u = this.at(s, i);
    if (u === -1 || u !== o) return false;
    s = this.nextIndex(s, i);
  }
  return this.pos = s, true;
};
c.validateRegExpFlags = function(e) {
  for (var t = e.validFlags, i = e.flags, s = false, r = false, n = 0; n < i.length; n++) {
    var o = i.charAt(n);
    t.indexOf(o) === -1 && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(o, n + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag"), o === "u" && (s = true), o === "v" && (r = true);
  }
  this.options.ecmaVersion >= 15 && s && r && this.raise(e.start, "Invalid regular expression flag");
};
function Xi(e) {
  for (var t in e) return true;
  return false;
}
c.validateRegExpPattern = function(e) {
  this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Xi(e.groupNames) && (e.switchN = true, this.regexp_pattern(e));
};
c.regexp_pattern = function(e) {
  e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = false, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = /* @__PURE__ */ Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
    var s = i[t];
    e.groupNames[s] || e.raise("Invalid named capture referenced");
  }
};
c.regexp_disjunction = function(e) {
  var t = this.options.ecmaVersion >= 16;
  for (t && (e.branchID = new me(e.branchID, null)), this.regexp_alternative(e); e.eat(124); ) t && (e.branchID = e.branchID.sibling()), this.regexp_alternative(e);
  t && (e.branchID = e.branchID.parent), this.regexp_eatQuantifier(e, true) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
};
c.regexp_alternative = function(e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); ) ;
};
c.regexp_eatTerm = function(e) {
  return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), true) : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) ? (this.regexp_eatQuantifier(e), true) : false;
};
c.regexp_eatAssertion = function(e) {
  var t = e.pos;
  if (e.lastAssertionIsQuantifiable = false, e.eat(94) || e.eat(36)) return true;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return true;
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var i = false;
    if (this.options.ecmaVersion >= 9 && (i = e.eat(60)), e.eat(61) || e.eat(33)) return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !i, true;
  }
  return e.pos = t, false;
};
c.regexp_eatQuantifier = function(e, t) {
  return t === void 0 && (t = false), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), true) : false;
};
c.regexp_eatQuantifierPrefix = function(e, t) {
  return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
};
c.regexp_eatBracedQuantifier = function(e, t) {
  var i = e.pos;
  if (e.eat(123)) {
    var s = 0, r = -1;
    if (this.regexp_eatDecimalDigits(e) && (s = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue), e.eat(125))) return r !== -1 && r < s && !t && e.raise("numbers out of order in {} quantifier"), true;
    e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
  }
  return false;
};
c.regexp_eatAtom = function(e) {
  return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
};
c.regexp_eatReverseSolidusAtomEscape = function(e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return true;
    e.pos = t;
  }
  return false;
};
c.regexp_eatUncapturingGroup = function(e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63)) {
      if (this.options.ecmaVersion >= 16) {
        var i = this.regexp_eatModifiers(e), s = e.eat(45);
        if (i || s) {
          for (var r = 0; r < i.length; r++) {
            var n = i.charAt(r);
            i.indexOf(n, r + 1) > -1 && e.raise("Duplicate regular expression modifiers");
          }
          if (s) {
            var o = this.regexp_eatModifiers(e);
            !i && !o && e.current() === 58 && e.raise("Invalid regular expression modifiers");
            for (var u = 0; u < o.length; u++) {
              var p = o.charAt(u);
              (o.indexOf(p, u + 1) > -1 || i.indexOf(p) > -1) && e.raise("Duplicate regular expression modifiers");
            }
          }
        }
      }
      if (e.eat(58)) {
        if (this.regexp_disjunction(e), e.eat(41)) return true;
        e.raise("Unterminated group");
      }
    }
    e.pos = t;
  }
  return false;
};
c.regexp_eatCapturingGroup = function(e) {
  if (e.eat(40)) {
    if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : e.current() === 63 && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, true;
    e.raise("Unterminated group");
  }
  return false;
};
c.regexp_eatModifiers = function(e) {
  for (var t = "", i = 0; (i = e.current()) !== -1 && zi(i); ) t += U(i), e.advance();
  return t;
};
function zi(e) {
  return e === 105 || e === 109 || e === 115;
}
c.regexp_eatExtendedAtom = function(e) {
  return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
};
c.regexp_eatInvalidBracedQuantifier = function(e) {
  return this.regexp_eatBracedQuantifier(e, true) && e.raise("Nothing to repeat"), false;
};
c.regexp_eatSyntaxCharacter = function(e) {
  var t = e.current();
  return Lt(t) ? (e.lastIntValue = t, e.advance(), true) : false;
};
function Lt(e) {
  return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
}
c.regexp_eatPatternCharacters = function(e) {
  for (var t = e.pos, i = 0; (i = e.current()) !== -1 && !Lt(i); ) e.advance();
  return e.pos !== t;
};
c.regexp_eatExtendedPatternCharacter = function(e) {
  var t = e.current();
  return t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124 ? (e.advance(), true) : false;
};
c.regexp_groupSpecifier = function(e) {
  if (e.eat(63)) {
    this.regexp_eatGroupName(e) || e.raise("Invalid group");
    var t = this.options.ecmaVersion >= 16, i = e.groupNames[e.lastStringValue];
    if (i) if (t) for (var s = 0, r = i; s < r.length; s += 1) {
      var n = r[s];
      n.separatedFrom(e.branchID) || e.raise("Duplicate capture group name");
    }
    else e.raise("Duplicate capture group name");
    t ? (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID) : e.groupNames[e.lastStringValue] = true;
  }
};
c.regexp_eatGroupName = function(e) {
  if (e.lastStringValue = "", e.eat(60)) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return true;
    e.raise("Invalid capture group name");
  }
  return false;
};
c.regexp_eatRegExpIdentifierName = function(e) {
  if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
    for (e.lastStringValue += U(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); ) e.lastStringValue += U(e.lastIntValue);
    return true;
  }
  return false;
};
c.regexp_eatRegExpIdentifierStart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
  return e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue), Hi(s) ? (e.lastIntValue = s, true) : (e.pos = t, false);
};
function Hi(e) {
  return M(e, true) || e === 36 || e === 95;
}
c.regexp_eatRegExpIdentifierPart = function(e) {
  var t = e.pos, i = this.options.ecmaVersion >= 11, s = e.current(i);
  return e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i) && (s = e.lastIntValue), Qi(s) ? (e.lastIntValue = s, true) : (e.pos = t, false);
};
function Qi(e) {
  return H(e, true) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
c.regexp_eatAtomEscape = function(e) {
  return this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e) ? true : (e.switchU && (e.current() === 99 && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), false);
};
c.regexp_eatBackReference = function(e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var i = e.lastIntValue;
    if (e.switchU) return i > e.maxBackReference && (e.maxBackReference = i), true;
    if (i <= e.numCapturingParens) return true;
    e.pos = t;
  }
  return false;
};
c.regexp_eatKGroupName = function(e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), true;
    e.raise("Invalid named reference");
  }
  return false;
};
c.regexp_eatCharacterEscape = function(e) {
  return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, false) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
};
c.regexp_eatCControlLetter = function(e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return true;
    e.pos = t;
  }
  return false;
};
c.regexp_eatZero = function(e) {
  return e.current() === 48 && !ve(e.lookahead()) ? (e.lastIntValue = 0, e.advance(), true) : false;
};
c.regexp_eatControlEscape = function(e) {
  var t = e.current();
  return t === 116 ? (e.lastIntValue = 9, e.advance(), true) : t === 110 ? (e.lastIntValue = 10, e.advance(), true) : t === 118 ? (e.lastIntValue = 11, e.advance(), true) : t === 102 ? (e.lastIntValue = 12, e.advance(), true) : t === 114 ? (e.lastIntValue = 13, e.advance(), true) : false;
};
c.regexp_eatControlLetter = function(e) {
  var t = e.current();
  return Rt(t) ? (e.lastIntValue = t % 32, e.advance(), true) : false;
};
function Rt(e) {
  return e >= 65 && e <= 90 || e >= 97 && e <= 122;
}
c.regexp_eatRegExpUnicodeEscapeSequence = function(e, t) {
  t === void 0 && (t = false);
  var i = e.pos, s = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var r = e.lastIntValue;
      if (s && r >= 55296 && r <= 56319) {
        var n = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var o = e.lastIntValue;
          if (o >= 56320 && o <= 57343) return e.lastIntValue = (r - 55296) * 1024 + (o - 56320) + 65536, true;
        }
        e.pos = n, e.lastIntValue = r;
      }
      return true;
    }
    if (s && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Yi(e.lastIntValue)) return true;
    s && e.raise("Invalid unicode escape"), e.pos = i;
  }
  return false;
};
function Yi(e) {
  return e >= 0 && e <= 1114111;
}
c.regexp_eatIdentityEscape = function(e) {
  if (e.switchU) return this.regexp_eatSyntaxCharacter(e) ? true : e.eat(47) ? (e.lastIntValue = 47, true) : false;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107) ? (e.lastIntValue = t, e.advance(), true) : false;
};
c.regexp_eatDecimalEscape = function(e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do
      e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return true;
  }
  return false;
};
var Ot = 0, q = 1, V = 2;
c.regexp_eatCharacterClassEscape = function(e) {
  var t = e.current();
  if (Zi(t)) return e.lastIntValue = -1, e.advance(), q;
  var i = false;
  if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
    e.lastIntValue = -1, e.advance();
    var s;
    if (e.eat(123) && (s = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125)) return i && s === V && e.raise("Invalid property name"), s;
    e.raise("Invalid property name");
  }
  return Ot;
};
function Zi(e) {
  return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
}
c.regexp_eatUnicodePropertyValueExpression = function(e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var i = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var s = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, i, s), q;
    }
  }
  if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
    var r = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, r);
  }
  return Ot;
};
c.regexp_validateUnicodePropertyNameAndValue = function(e, t, i) {
  Y(e.unicodeProperties.nonBinary, t) || e.raise("Invalid property name"), e.unicodeProperties.nonBinary[t].test(i) || e.raise("Invalid property value");
};
c.regexp_validateUnicodePropertyNameOrValue = function(e, t) {
  if (e.unicodeProperties.binary.test(t)) return q;
  if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return V;
  e.raise("Invalid property name");
};
c.regexp_eatUnicodePropertyName = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; Bt(t = e.current()); ) e.lastStringValue += U(t), e.advance();
  return e.lastStringValue !== "";
};
function Bt(e) {
  return Rt(e) || e === 95;
}
c.regexp_eatUnicodePropertyValue = function(e) {
  var t = 0;
  for (e.lastStringValue = ""; $i(t = e.current()); ) e.lastStringValue += U(t), e.advance();
  return e.lastStringValue !== "";
};
function $i(e) {
  return Bt(e) || ve(e);
}
c.regexp_eatLoneUnicodePropertyNameOrValue = function(e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
c.regexp_eatCharacterClass = function(e) {
  if (e.eat(91)) {
    var t = e.eat(94), i = this.regexp_classContents(e);
    return e.eat(93) || e.raise("Unterminated character class"), t && i === V && e.raise("Negated character class may contain strings"), true;
  }
  return false;
};
c.regexp_classContents = function(e) {
  return e.current() === 93 ? q : e.switchV ? this.regexp_classSetExpression(e) : (this.regexp_nonEmptyClassRanges(e), q);
};
c.regexp_nonEmptyClassRanges = function(e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var i = e.lastIntValue;
      e.switchU && (t === -1 || i === -1) && e.raise("Invalid character class"), t !== -1 && i !== -1 && t > i && e.raise("Range out of order in character class");
    }
  }
};
c.regexp_eatClassAtom = function(e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return true;
    if (e.switchU) {
      var i = e.current();
      (i === 99 || jt(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
    }
    e.pos = t;
  }
  var s = e.current();
  return s !== 93 ? (e.lastIntValue = s, e.advance(), true) : false;
};
c.regexp_eatClassEscape = function(e) {
  var t = e.pos;
  if (e.eat(98)) return e.lastIntValue = 8, true;
  if (e.switchU && e.eat(45)) return e.lastIntValue = 45, true;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return true;
    e.pos = t;
  }
  return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
};
c.regexp_classSetExpression = function(e) {
  var t = q, i;
  if (!this.regexp_eatClassSetRange(e)) if (i = this.regexp_eatClassSetOperand(e)) {
    i === V && (t = V);
    for (var s = e.pos; e.eatChars([38, 38]); ) {
      if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
        i !== V && (t = q);
        continue;
      }
      e.raise("Invalid character in character class");
    }
    if (s !== e.pos) return t;
    for (; e.eatChars([45, 45]); ) this.regexp_eatClassSetOperand(e) || e.raise("Invalid character in character class");
    if (s !== e.pos) return t;
  } else e.raise("Invalid character in character class");
  for (; ; ) if (!this.regexp_eatClassSetRange(e)) {
    if (i = this.regexp_eatClassSetOperand(e), !i) return t;
    i === V && (t = V);
  }
};
c.regexp_eatClassSetRange = function(e) {
  var t = e.pos;
  if (this.regexp_eatClassSetCharacter(e)) {
    var i = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassSetCharacter(e)) {
      var s = e.lastIntValue;
      return i !== -1 && s !== -1 && i > s && e.raise("Range out of order in character class"), true;
    }
    e.pos = t;
  }
  return false;
};
c.regexp_eatClassSetOperand = function(e) {
  return this.regexp_eatClassSetCharacter(e) ? q : this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
};
c.regexp_eatNestedClass = function(e) {
  var t = e.pos;
  if (e.eat(91)) {
    var i = e.eat(94), s = this.regexp_classContents(e);
    if (e.eat(93)) return i && s === V && e.raise("Negated character class may contain strings"), s;
    e.pos = t;
  }
  if (e.eat(92)) {
    var r = this.regexp_eatCharacterClassEscape(e);
    if (r) return r;
    e.pos = t;
  }
  return null;
};
c.regexp_eatClassStringDisjunction = function(e) {
  var t = e.pos;
  if (e.eatChars([92, 113])) {
    if (e.eat(123)) {
      var i = this.regexp_classStringDisjunctionContents(e);
      if (e.eat(125)) return i;
    } else e.raise("Invalid escape");
    e.pos = t;
  }
  return null;
};
c.regexp_classStringDisjunctionContents = function(e) {
  for (var t = this.regexp_classString(e); e.eat(124); ) this.regexp_classString(e) === V && (t = V);
  return t;
};
c.regexp_classString = function(e) {
  for (var t = 0; this.regexp_eatClassSetCharacter(e); ) t++;
  return t === 1 ? q : V;
};
c.regexp_eatClassSetCharacter = function(e) {
  var t = e.pos;
  if (e.eat(92)) return this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e) ? true : e.eat(98) ? (e.lastIntValue = 8, true) : (e.pos = t, false);
  var i = e.current();
  return i < 0 || i === e.lookahead() && es(i) || ts(i) ? false : (e.advance(), e.lastIntValue = i, true);
};
function es(e) {
  return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
}
function ts(e) {
  return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
}
c.regexp_eatClassSetReservedPunctuator = function(e) {
  var t = e.current();
  return is(t) ? (e.lastIntValue = t, e.advance(), true) : false;
};
function is(e) {
  return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
}
c.regexp_eatClassControlLetter = function(e) {
  var t = e.current();
  return ve(t) || t === 95 ? (e.lastIntValue = t % 32, e.advance(), true) : false;
};
c.regexp_eatHexEscapeSequence = function(e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return true;
    e.switchU && e.raise("Invalid escape"), e.pos = t;
  }
  return false;
};
c.regexp_eatDecimalDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; ve(i = e.current()); ) e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
  return e.pos !== t;
};
function ve(e) {
  return e >= 48 && e <= 57;
}
c.regexp_eatHexDigits = function(e) {
  var t = e.pos, i = 0;
  for (e.lastIntValue = 0; Dt(i = e.current()); ) e.lastIntValue = 16 * e.lastIntValue + Ft(i), e.advance();
  return e.pos !== t;
};
function Dt(e) {
  return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
}
function Ft(e) {
  return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48;
}
c.regexp_eatLegacyOctalEscapeSequence = function(e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var i = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = t * 64 + i * 8 + e.lastIntValue : e.lastIntValue = t * 8 + i;
    } else e.lastIntValue = t;
    return true;
  }
  return false;
};
c.regexp_eatOctalDigit = function(e) {
  var t = e.current();
  return jt(t) ? (e.lastIntValue = t - 48, e.advance(), true) : (e.lastIntValue = 0, false);
};
function jt(e) {
  return e >= 48 && e <= 55;
}
c.regexp_eatFixedHexDigits = function(e, t) {
  var i = e.pos;
  e.lastIntValue = 0;
  for (var s = 0; s < t; ++s) {
    var r = e.current();
    if (!Dt(r)) return e.pos = i, false;
    e.lastIntValue = 16 * e.lastIntValue + Ft(r), e.advance();
  }
  return true;
};
var qe = function(t) {
  this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations && (this.loc = new xe(t, t.startLoc, t.endLoc)), t.options.ranges && (this.range = [t.start, t.end]);
}, v = T.prototype;
v.next = function(e) {
  !e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new qe(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
};
v.getToken = function() {
  return this.next(), new qe(this);
};
typeof Symbol < "u" && (v[Symbol.iterator] = function() {
  var e = this;
  return { next: function() {
    var t = e.getToken();
    return { done: t.type === a.eof, value: t };
  } };
});
v.nextToken = function() {
  var e = this.curContext();
  if ((!e || !e.preserveSpace) && this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length) return this.finishToken(a.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
v.readToken = function(e) {
  return M(e, this.options.ecmaVersion >= 6) || e === 92 ? this.readWord() : this.getTokenFromCode(e);
};
v.fullCharCodeAtPos = function() {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 56320) return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
};
v.skipBlockComment = function() {
  var e = this.options.onComment && this.curPosition(), t = this.pos, i = this.input.indexOf("*/", this.pos += 2);
  if (i === -1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i + 2, this.options.locations) for (var s = void 0, r = t; (s = ut(this.input, r, this.pos)) > -1; ) ++this.curLine, r = this.lineStart = s;
  this.options.onComment && this.options.onComment(true, this.input.slice(t + 2, i), t, this.pos, e, this.curPosition());
};
v.skipLineComment = function(e) {
  for (var t = this.pos, i = this.options.onComment && this.curPosition(), s = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !Q(s); ) s = this.input.charCodeAt(++this.pos);
  this.options.onComment && this.options.onComment(false, this.input.slice(t + e, this.pos), t, this.pos, i, this.curPosition());
};
v.skipSpace = function() {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if (e > 8 && e < 14 || e >= 5760 && pt.test(String.fromCharCode(e))) ++this.pos;
        else break e;
    }
  }
};
v.finishToken = function(e, t) {
  this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
  var i = this.type;
  this.type = e, this.value = t, this.updateContext(i);
};
v.readToken_dot = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(true);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46 ? (this.pos += 3, this.finishToken(a.ellipsis)) : (++this.pos, this.finishToken(a.dot));
};
v.readToken_slash = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed ? (++this.pos, this.readRegexp()) : e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.slash, 1);
};
v.readToken_mult_modulo_exp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1, s = e === 42 ? a.star : a.modulo;
  return this.options.ecmaVersion >= 7 && e === 42 && t === 42 && (++i, s = a.starstar, t = this.input.charCodeAt(this.pos + 2)), t === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(s, i);
};
v.readToken_pipe_amp = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i === 61) return this.finishOp(a.assign, 3);
    }
    return this.finishOp(e === 124 ? a.logicalOR : a.logicalAND, 2);
  }
  return t === 61 ? this.finishOp(a.assign, 2) : this.finishOp(e === 124 ? a.bitwiseOR : a.bitwiseAND, 1);
};
v.readToken_caret = function() {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.bitwiseXOR, 1);
};
v.readToken_plus_min = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e ? t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || L.test(this.input.slice(this.lastTokEnd, this.pos))) ? (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : this.finishOp(a.incDec, 2) : t === 61 ? this.finishOp(a.assign, 2) : this.finishOp(a.plusMin, 1);
};
v.readToken_lt_gt = function(e) {
  var t = this.input.charCodeAt(this.pos + 1), i = 1;
  return t === e ? (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61 ? this.finishOp(a.assign, i + 1) : this.finishOp(a.bitShift, i)) : t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45 ? (this.skipLineComment(4), this.skipSpace(), this.nextToken()) : (t === 61 && (i = 2), this.finishOp(a.relational, i));
};
v.readToken_eq_excl = function(e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61 ? this.finishOp(a.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) : e === 61 && t === 62 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(a.arrow)) : this.finishOp(e === 61 ? a.eq : a.prefix, 1);
};
v.readToken_question = function() {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var i = this.input.charCodeAt(this.pos + 2);
      if (i < 48 || i > 57) return this.finishOp(a.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var s = this.input.charCodeAt(this.pos + 2);
        if (s === 61) return this.finishOp(a.assign, 3);
      }
      return this.finishOp(a.coalesce, 2);
    }
  }
  return this.finishOp(a.question, 1);
};
v.readToken_numberSign = function() {
  var e = this.options.ecmaVersion, t = 35;
  if (e >= 13 && (++this.pos, t = this.fullCharCodeAtPos(), M(t, true) || t === 92)) return this.finishToken(a.privateId, this.readWord1());
  this.raise(this.pos, "Unexpected character '" + U(t) + "'");
};
v.getTokenFromCode = function(e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(a.parenL);
    case 41:
      return ++this.pos, this.finishToken(a.parenR);
    case 59:
      return ++this.pos, this.finishToken(a.semi);
    case 44:
      return ++this.pos, this.finishToken(a.comma);
    case 91:
      return ++this.pos, this.finishToken(a.bracketL);
    case 93:
      return ++this.pos, this.finishToken(a.bracketR);
    case 123:
      return ++this.pos, this.finishToken(a.braceL);
    case 125:
      return ++this.pos, this.finishToken(a.braceR);
    case 58:
      return ++this.pos, this.finishToken(a.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(a.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79) return this.readRadixNumber(8);
        if (t === 98 || t === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(false);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(a.prefix, 1);
    case 35:
      return this.readToken_numberSign();
  }
  this.raise(this.pos, "Unexpected character '" + U(e) + "'");
};
v.finishOp = function(e, t) {
  var i = this.input.slice(this.pos, this.pos + t);
  return this.pos += t, this.finishToken(e, i);
};
v.readRegexp = function() {
  for (var e, t, i = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");
    var s = this.input.charAt(this.pos);
    if (L.test(s) && this.raise(i, "Unterminated regular expression"), e) e = false;
    else {
      if (s === "[") t = true;
      else if (s === "]" && t) t = false;
      else if (s === "/" && !t) break;
      e = s === "\\";
    }
    ++this.pos;
  }
  var r = this.input.slice(i, this.pos);
  ++this.pos;
  var n = this.pos, o = this.readWord1();
  this.containsEsc && this.unexpected(n);
  var u = this.regexpState || (this.regexpState = new j(this));
  u.reset(i, r, o), this.validateRegExpFlags(u), this.validateRegExpPattern(u);
  var p = null;
  try {
    p = new RegExp(r, o);
  } catch {
  }
  return this.finishToken(a.regexp, { pattern: r, flags: o, value: p });
};
v.readInt = function(e, t, i) {
  for (var s = this.options.ecmaVersion >= 12 && t === void 0, r = i && this.input.charCodeAt(this.pos) === 48, n = this.pos, o = 0, u = 0, p = 0, d = t ?? 1 / 0; p < d; ++p, ++this.pos) {
    var f = this.input.charCodeAt(this.pos), C = void 0;
    if (s && f === 95) {
      r && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), u === 95 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), p === 0 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), u = f;
      continue;
    }
    if (f >= 97 ? C = f - 97 + 10 : f >= 65 ? C = f - 65 + 10 : f >= 48 && f <= 57 ? C = f - 48 : C = 1 / 0, C >= e) break;
    u = f, o = o * e + C;
  }
  return s && u === 95 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n || t != null && this.pos - n !== t ? null : o;
};
function ss(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function Mt(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
v.readRadixNumber = function(e) {
  var t = this.pos;
  this.pos += 2;
  var i = this.readInt(e);
  return i == null && this.raise(this.start + 2, "Expected number in radix " + e), this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110 ? (i = Mt(this.input.slice(t, this.pos)), ++this.pos) : M(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(a.num, i);
};
v.readNumber = function(e) {
  var t = this.pos;
  !e && this.readInt(10, void 0, true) === null && this.raise(t, "Invalid number");
  var i = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  i && this.strict && this.raise(t, "Invalid number");
  var s = this.input.charCodeAt(this.pos);
  if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
    var r = Mt(this.input.slice(t, this.pos));
    return ++this.pos, M(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(a.num, r);
  }
  i && /[89]/.test(this.input.slice(t, this.pos)) && (i = false), s === 46 && !i && (++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos)), (s === 69 || s === 101) && !i && (s = this.input.charCodeAt(++this.pos), (s === 43 || s === 45) && ++this.pos, this.readInt(10) === null && this.raise(t, "Invalid number")), M(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
  var n = ss(this.input.slice(t, this.pos), i);
  return this.finishToken(a.num, n);
};
v.readCodePoint = function() {
  var e = this.input.charCodeAt(this.pos), t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var i = ++this.pos;
    t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111 && this.invalidStringToken(i, "Code point out of bounds");
  } else t = this.readHexChar(4);
  return t;
};
v.readString = function(e) {
  for (var t = "", i = ++this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
    var s = this.input.charCodeAt(this.pos);
    if (s === e) break;
    s === 92 ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(false), i = this.pos) : s === 8232 || s === 8233 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (Q(s) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
  }
  return t += this.input.slice(i, this.pos++), this.finishToken(a.string, t);
};
var Ut = {};
v.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === Ut) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = false;
};
v.invalidStringToken = function(e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Ut;
  this.raise(e, t);
};
v.readTmplToken = function() {
  for (var e = "", t = this.pos; ; ) {
    this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
    var i = this.input.charCodeAt(this.pos);
    if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123) return this.pos === this.start && (this.type === a.template || this.type === a.invalidTemplate) ? i === 36 ? (this.pos += 2, this.finishToken(a.dollarBraceL)) : (++this.pos, this.finishToken(a.backQuote)) : (e += this.input.slice(t, this.pos), this.finishToken(a.template, e));
    if (i === 92) e += this.input.slice(t, this.pos), e += this.readEscapedChar(true), t = this.pos;
    else if (Q(i)) {
      switch (e += this.input.slice(t, this.pos), ++this.pos, i) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(i);
          break;
      }
      this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
    } else ++this.pos;
  }
};
v.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
    case "\\":
      ++this.pos;
      break;
    case "$":
      if (this.input[this.pos + 1] !== "{") break;
    case "`":
      return this.finishToken(a.invalidTemplate, this.input.slice(this.start, this.pos));
    case "\r":
      this.input[this.pos + 1] === `
` && ++this.pos;
    case `
`:
    case "\u2028":
    case "\u2029":
      ++this.curLine, this.lineStart = this.pos + 1;
      break;
  }
  this.raise(this.start, "Unterminated template");
};
v.readEscapedChar = function(e) {
  var t = this.input.charCodeAt(++this.pos);
  switch (++this.pos, t) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return U(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
    case 56:
    case 57:
      if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e) {
        var i = this.pos - 1;
        this.invalidStringToken(i, "Invalid escape sequence in template string");
      }
    default:
      if (t >= 48 && t <= 55) {
        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], r = parseInt(s, 8);
        return r > 255 && (s = s.slice(0, -1), r = parseInt(s, 8)), this.pos += s.length - 1, t = this.input.charCodeAt(this.pos), (s !== "0" || t === 56 || t === 57) && (this.strict || e) && this.invalidStringToken(this.pos - 1 - s.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r);
      }
      return Q(t) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t);
  }
};
v.readHexChar = function(e) {
  var t = this.pos, i = this.readInt(16, e);
  return i === null && this.invalidStringToken(t, "Bad character escape sequence"), i;
};
v.readWord1 = function() {
  this.containsEsc = false;
  for (var e = "", t = true, i = this.pos, s = this.options.ecmaVersion >= 6; this.pos < this.input.length; ) {
    var r = this.fullCharCodeAtPos();
    if (H(r, s)) this.pos += r <= 65535 ? 1 : 2;
    else if (r === 92) {
      this.containsEsc = true, e += this.input.slice(i, this.pos);
      var n = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
      var o = this.readCodePoint();
      (t ? M : H)(o, s) || this.invalidStringToken(n, "Invalid Unicode escape"), e += U(o), i = this.pos;
    } else break;
    t = false;
  }
  return e + this.input.slice(i, this.pos);
};
v.readWord = function() {
  var e = this.readWord1(), t = a.name;
  return this.keywords.test(e) && (t = Oe[e]), this.finishToken(t, e);
};
var rs = "8.14.0";
T.acorn = { Parser: T, version: rs, defaultOptions: Ve, Position: ie, SourceLocation: xe, getLineInfo: ct, Node: ge, TokenType: S, tokTypes: a, keywordTypes: Oe, TokContext: D, tokContexts: _, isIdentifierChar: H, isIdentifierStart: M, Token: qe, isNewLine: Q, lineBreak: L, lineBreakG: wi, nonASCIIwhitespace: pt };
var ni = et(Je());
function hs(e, t) {
  let i = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(i, t);
}
var be = hs;
function cs(e) {
  let t = [];
  for (let i of e) try {
    return i();
  } catch (s) {
    t.push(s);
  }
  throw Object.assign(new Error("All combinations failed"), { errors: t });
}
var Se = cs;
var ls = (e, t, i) => {
  if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[i < 0 ? t.length + i : i] : t.at(i);
}, X = ls;
function fs(e) {
  return Array.isArray(e) && e.length > 0;
}
var Wt = fs;
function O(e) {
  var s, r, n;
  let t = ((s = e.range) == null ? void 0 : s[0]) ?? e.start, i = (n = ((r = e.declaration) == null ? void 0 : r.decorators) ?? e.decorators) == null ? void 0 : n[0];
  return i ? Math.min(O(i), t) : t;
}
function J(e) {
  var t;
  return ((t = e.range) == null ? void 0 : t[1]) ?? e.end;
}
function ds(e) {
  let t = new Set(e);
  return (i) => t.has(i == null ? void 0 : i.type);
}
var Xt = ds;
var ms = Xt(["Block", "CommentBlock", "MultiLine"]), oe = ms;
function xs(e) {
  let t = `*${e.value}*`.split(`
`);
  return t.length > 1 && t.every((i) => i.trimStart()[0] === "*");
}
var Ke = xs;
function ys(e) {
  return oe(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value);
}
var zt = ys;
var ue = null;
function pe(e) {
  if (ue !== null && typeof ue.property) {
    let t = ue;
    return ue = pe.prototype = null, t;
  }
  return ue = pe.prototype = e ?? /* @__PURE__ */ Object.create(null), new pe();
}
var gs = 10;
for (let e = 0; e <= gs; e++) pe();
function We(e) {
  return pe(e);
}
function vs(e, t = "type") {
  We(e);
  function i(s) {
    let r = s[t], n = e[r];
    if (!Array.isArray(n)) throw Object.assign(new Error(`Missing visitor keys for '${r}'.`), { node: s });
    return n;
  }
  return i;
}
var Ht = vs;
var Qt = { ArrayExpression: ["elements"], AssignmentExpression: ["left", "right"], BinaryExpression: ["left", "right"], InterpreterDirective: [], Directive: ["value"], DirectiveLiteral: [], BlockStatement: ["directives", "body"], BreakStatement: ["label"], CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], CatchClause: ["param", "body"], ConditionalExpression: ["test", "consequent", "alternate"], ContinueStatement: ["label"], DebuggerStatement: [], DoWhileStatement: ["body", "test"], EmptyStatement: [], ExpressionStatement: ["expression"], File: ["program"], ForInStatement: ["left", "right", "body"], ForStatement: ["init", "test", "update", "body"], FunctionDeclaration: ["id", "typeParameters", "params", "predicate", "returnType", "body"], FunctionExpression: ["id", "typeParameters", "params", "returnType", "body"], Identifier: ["typeAnnotation", "decorators"], IfStatement: ["test", "consequent", "alternate"], LabeledStatement: ["label", "body"], StringLiteral: [], NumericLiteral: [], NullLiteral: [], BooleanLiteral: [], RegExpLiteral: [], LogicalExpression: ["left", "right"], MemberExpression: ["object", "property"], NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"], Program: ["directives", "body"], ObjectExpression: ["properties"], ObjectMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectProperty: ["key", "value", "decorators"], RestElement: ["argument", "typeAnnotation", "decorators"], ReturnStatement: ["argument"], SequenceExpression: ["expressions"], ParenthesizedExpression: ["expression"], SwitchCase: ["test", "consequent"], SwitchStatement: ["discriminant", "cases"], ThisExpression: [], ThrowStatement: ["argument"], TryStatement: ["block", "handler", "finalizer"], UnaryExpression: ["argument"], UpdateExpression: ["argument"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id", "init"], WhileStatement: ["test", "body"], WithStatement: ["object", "body"], AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"], ArrayPattern: ["elements", "typeAnnotation", "decorators"], ArrowFunctionExpression: ["typeParameters", "params", "predicate", "returnType", "body"], ClassBody: ["body"], ClassExpression: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ClassDeclaration: ["decorators", "id", "typeParameters", "superClass", "superTypeParameters", "mixins", "implements", "body", "superTypeArguments"], ExportAllDeclaration: ["source", "attributes", "exported"], ExportDefaultDeclaration: ["declaration"], ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"], ExportSpecifier: ["local", "exported"], ForOfStatement: ["left", "right", "body"], ImportDeclaration: ["specifiers", "source", "attributes"], ImportDefaultSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportSpecifier: ["imported", "local"], ImportExpression: ["source", "options"], MetaProperty: ["meta", "property"], ClassMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], ObjectPattern: ["properties", "typeAnnotation", "decorators"], SpreadElement: ["argument"], Super: [], TaggedTemplateExpression: ["tag", "typeParameters", "quasi", "typeArguments"], TemplateElement: [], TemplateLiteral: ["quasis", "expressions"], YieldExpression: ["argument"], AwaitExpression: ["argument"], BigIntLiteral: [], ExportNamespaceSpecifier: ["exported"], OptionalMemberExpression: ["object", "property"], OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"], ClassProperty: ["decorators", "variance", "key", "typeAnnotation", "value"], ClassAccessorProperty: ["decorators", "key", "typeAnnotation", "value"], ClassPrivateProperty: ["decorators", "variance", "key", "typeAnnotation", "value"], ClassPrivateMethod: ["decorators", "key", "typeParameters", "params", "returnType", "body"], PrivateName: ["id"], StaticBlock: ["body"], AnyTypeAnnotation: [], ArrayTypeAnnotation: ["elementType"], BooleanTypeAnnotation: [], BooleanLiteralTypeAnnotation: [], NullLiteralTypeAnnotation: [], ClassImplements: ["id", "typeParameters"], DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"], DeclareFunction: ["id", "predicate"], DeclareInterface: ["id", "typeParameters", "extends", "body"], DeclareModule: ["id", "body"], DeclareModuleExports: ["typeAnnotation"], DeclareTypeAlias: ["id", "typeParameters", "right"], DeclareOpaqueType: ["id", "typeParameters", "supertype"], DeclareVariable: ["id"], DeclareExportDeclaration: ["declaration", "specifiers", "source", "attributes"], DeclareExportAllDeclaration: ["source", "attributes"], DeclaredPredicate: ["value"], ExistsTypeAnnotation: [], FunctionTypeAnnotation: ["typeParameters", "this", "params", "rest", "returnType"], FunctionTypeParam: ["name", "typeAnnotation"], GenericTypeAnnotation: ["id", "typeParameters"], InferredPredicate: [], InterfaceExtends: ["id", "typeParameters"], InterfaceDeclaration: ["id", "typeParameters", "extends", "body"], InterfaceTypeAnnotation: ["extends", "body"], IntersectionTypeAnnotation: ["types"], MixedTypeAnnotation: [], EmptyTypeAnnotation: [], NullableTypeAnnotation: ["typeAnnotation"], NumberLiteralTypeAnnotation: [], NumberTypeAnnotation: [], ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"], ObjectTypeInternalSlot: ["id", "value"], ObjectTypeCallProperty: ["value"], ObjectTypeIndexer: ["variance", "id", "key", "value"], ObjectTypeProperty: ["key", "value", "variance"], ObjectTypeSpreadProperty: ["argument"], OpaqueType: ["id", "typeParameters", "supertype", "impltype"], QualifiedTypeIdentifier: ["qualification", "id"], StringLiteralTypeAnnotation: [], StringTypeAnnotation: [], SymbolTypeAnnotation: [], ThisTypeAnnotation: [], TupleTypeAnnotation: ["types", "elementTypes"], TypeofTypeAnnotation: ["argument", "typeArguments"], TypeAlias: ["id", "typeParameters", "right"], TypeAnnotation: ["typeAnnotation"], TypeCastExpression: ["expression", "typeAnnotation"], TypeParameter: ["bound", "default", "variance"], TypeParameterDeclaration: ["params"], TypeParameterInstantiation: ["params"], UnionTypeAnnotation: ["types"], Variance: [], VoidTypeAnnotation: [], EnumDeclaration: ["id", "body"], EnumBooleanBody: ["members"], EnumNumberBody: ["members"], EnumStringBody: ["members"], EnumSymbolBody: ["members"], EnumBooleanMember: ["id", "init"], EnumNumberMember: ["id", "init"], EnumStringMember: ["id", "init"], EnumDefaultedMember: ["id"], IndexedAccessType: ["objectType", "indexType"], OptionalIndexedAccessType: ["objectType", "indexType"], JSXAttribute: ["name", "value"], JSXClosingElement: ["name"], JSXElement: ["openingElement", "children", "closingElement"], JSXEmptyExpression: [], JSXExpressionContainer: ["expression"], JSXSpreadChild: ["expression"], JSXIdentifier: [], JSXMemberExpression: ["object", "property"], JSXNamespacedName: ["namespace", "name"], JSXOpeningElement: ["name", "typeParameters", "typeArguments", "attributes"], JSXSpreadAttribute: ["argument"], JSXText: [], JSXFragment: ["openingFragment", "children", "closingFragment"], JSXOpeningFragment: [], JSXClosingFragment: [], Noop: [], Placeholder: [], V8IntrinsicIdentifier: [], ArgumentPlaceholder: [], BindExpression: ["object", "callee"], ImportAttribute: ["key", "value"], Decorator: ["expression"], DoExpression: ["body"], ExportDefaultSpecifier: ["exported"], RecordExpression: ["properties"], TupleExpression: ["elements"], ModuleExpression: ["body"], TopicReference: [], PipelineTopicExpression: ["expression"], PipelineBareFunction: ["callee"], PipelinePrimaryTopicReference: [], TSParameterProperty: ["parameter", "decorators"], TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"], TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"], TSQualifiedName: ["left", "right"], TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSPropertySignature: ["key", "typeAnnotation"], TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSIndexSignature: ["parameters", "typeAnnotation"], TSAnyKeyword: [], TSBooleanKeyword: [], TSBigIntKeyword: [], TSIntrinsicKeyword: [], TSNeverKeyword: [], TSNullKeyword: [], TSNumberKeyword: [], TSObjectKeyword: [], TSStringKeyword: [], TSSymbolKeyword: [], TSUndefinedKeyword: [], TSUnknownKeyword: [], TSVoidKeyword: [], TSThisType: [], TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"], TSTypeReference: ["typeName", "typeParameters", "typeArguments"], TSTypePredicate: ["parameterName", "typeAnnotation"], TSTypeQuery: ["exprName", "typeParameters", "typeArguments"], TSTypeLiteral: ["members"], TSArrayType: ["elementType"], TSTupleType: ["elementTypes"], TSOptionalType: ["typeAnnotation"], TSRestType: ["typeAnnotation"], TSNamedTupleMember: ["label", "elementType"], TSUnionType: ["types"], TSIntersectionType: ["types"], TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"], TSInferType: ["typeParameter"], TSParenthesizedType: ["typeAnnotation"], TSTypeOperator: ["typeAnnotation"], TSIndexedAccessType: ["objectType", "indexType"], TSMappedType: ["typeParameter", "nameType", "typeAnnotation"], TSTemplateLiteralType: ["quasis", "types"], TSLiteralType: ["literal"], TSExpressionWithTypeArguments: ["expression", "typeParameters"], TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"], TSInterfaceBody: ["body"], TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"], TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"], TSAsExpression: ["expression", "typeAnnotation"], TSSatisfiesExpression: ["expression", "typeAnnotation"], TSTypeAssertion: ["typeAnnotation", "expression"], TSEnumBody: ["members"], TSEnumDeclaration: ["id", "members"], TSEnumMember: ["id", "initializer"], TSModuleDeclaration: ["id", "body"], TSModuleBlock: ["body"], TSImportType: ["argument", "options", "qualifier", "typeParameters", "typeArguments"], TSImportEqualsDeclaration: ["id", "moduleReference"], TSExternalModuleReference: ["expression"], TSNonNullExpression: ["expression"], TSExportAssignment: ["expression"], TSNamespaceExportDeclaration: ["id"], TSTypeAnnotation: ["typeAnnotation"], TSTypeParameterInstantiation: ["params"], TSTypeParameterDeclaration: ["params"], TSTypeParameter: ["constraint", "default", "name"], ChainExpression: ["expression"], ExperimentalRestProperty: ["argument"], ExperimentalSpreadProperty: ["argument"], Literal: [], MethodDefinition: ["decorators", "key", "value"], PrivateIdentifier: [], Property: ["key", "value"], PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"], AccessorProperty: ["decorators", "key", "typeAnnotation", "value"], TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"], TSAbstractKeyword: [], TSAbstractMethodDefinition: ["key", "value"], TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"], TSAsyncKeyword: [], TSClassImplements: ["expression", "typeArguments", "typeParameters"], TSDeclareKeyword: [], TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"], TSExportKeyword: [], TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"], TSPrivateKeyword: [], TSProtectedKeyword: [], TSPublicKeyword: [], TSReadonlyKeyword: [], TSStaticKeyword: [], AsConstExpression: ["expression"], AsExpression: ["expression", "typeAnnotation"], BigIntLiteralTypeAnnotation: [], BigIntTypeAnnotation: [], ComponentDeclaration: ["id", "params", "body", "typeParameters", "rendersType"], ComponentParameter: ["name", "local"], ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"], ComponentTypeParameter: ["name", "typeAnnotation"], ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"], DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"], DeclareEnum: ["id", "body"], DeclareHook: ["id"], DeclareNamespace: ["id", "body"], EnumBigIntBody: ["members"], EnumBigIntMember: ["id", "init"], HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"], HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"], InferTypeAnnotation: ["typeParameter"], KeyofTypeAnnotation: ["argument"], ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"], QualifiedTypeofIdentifier: ["qualification", "id"], TupleTypeLabeledElement: ["label", "elementType", "variance"], TupleTypeSpreadElement: ["label", "typeAnnotation"], TypeOperator: ["typeAnnotation"], TypePredicate: ["parameterName", "typeAnnotation", "asserts"], NGRoot: ["node"], NGPipeExpression: ["left", "right", "arguments"], NGChainedExpression: ["expressions"], NGEmptyExpression: [], NGMicrosyntax: ["body"], NGMicrosyntaxKey: [], NGMicrosyntaxExpression: ["expression", "alias"], NGMicrosyntaxKeyedExpression: ["key", "expression"], NGMicrosyntaxLet: ["key", "value"], NGMicrosyntaxAs: ["key", "alias"], JsExpressionRoot: ["node"], JsonRoot: ["node"], TSJSDocAllType: [], TSJSDocUnknownType: [], TSJSDocNullableType: ["typeAnnotation"], TSJSDocNonNullableType: ["typeAnnotation"], NeverTypeAnnotation: [], UndefinedTypeAnnotation: [], UnknownTypeAnnotation: [], SatisfiesExpression: ["expression", "typeAnnotation"] };
var bs = Ht(Qt), Yt = bs;
function Xe(e, t) {
  if (!(e !== null && typeof e == "object")) return e;
  if (Array.isArray(e)) {
    for (let s = 0; s < e.length; s++) e[s] = Xe(e[s], t);
    return e;
  }
  let i = Yt(e);
  for (let s = 0; s < i.length; s++) e[i[s]] = Xe(e[i[s]], t);
  return t(e) || e;
}
var Ce = Xe;
function Ss(e, t) {
  let { parser: i, text: s } = t;
  if (e.type === "File" && e.program.interpreter) {
    let { program: { interpreter: r }, comments: n } = e;
    delete e.program.interpreter, n.unshift(r);
  }
  if (i === "babel") {
    let r = /* @__PURE__ */ new Set();
    e = Ce(e, (n) => {
      var o;
      (o = n.leadingComments) != null && o.some(zt) && r.add(O(n));
    }), e = Ce(e, (n) => {
      if (n.type === "ParenthesizedExpression") {
        let { expression: o } = n;
        if (o.type === "TypeCastExpression") return o.range = [...n.range], o;
        let u = O(n);
        if (!r.has(u)) return o.extra = { ...o.extra, parenthesized: true }, o;
      }
    });
  }
  if (e = Ce(e, (r) => {
    switch (r.type) {
      case "LogicalExpression":
        if (Zt(r)) return ze(r);
        break;
      case "VariableDeclaration": {
        let n = X(false, r.declarations, -1);
        n != null && n.init && s[J(n)] !== ";" && (r.range = [O(r), J(n)]);
        break;
      }
      case "TSParenthesizedType":
        return r.typeAnnotation;
      case "TSTypeParameter":
        if (typeof r.name == "string") {
          let n = O(r);
          r.name = { type: "Identifier", name: r.name, range: [n, n + r.name.length] };
        }
        break;
      case "TopicReference":
        e.extra = { ...e.extra, __isUsingHackPipeline: true };
        break;
      case "TSUnionType":
      case "TSIntersectionType":
        if (r.types.length === 1) return r.types[0];
        break;
    }
  }), Wt(e.comments)) {
    let r = X(false, e.comments, -1);
    for (let n = e.comments.length - 2; n >= 0; n--) {
      let o = e.comments[n];
      J(o) === O(r) && oe(o) && oe(r) && Ke(o) && Ke(r) && (e.comments.splice(n + 1, 1), o.value += "*//*" + r.value, o.range = [O(o), J(r)]), r = o;
    }
  }
  return e.type === "Program" && (e.range = [0, s.length]), e;
}
function Zt(e) {
  return e.type === "LogicalExpression" && e.right.type === "LogicalExpression" && e.operator === e.right.operator;
}
function ze(e) {
  return Zt(e) ? ze({ type: "LogicalExpression", operator: e.operator, left: ze({ type: "LogicalExpression", operator: e.operator, left: e.left, right: e.right.left, range: [O(e.left), J(e.right.left)] }), right: e.right.right, range: [O(e), J(e)] }) : e;
}
var _e = Ss;
var Cs = (e, t, i, s) => {
  if (!(e && t == null)) return t.replaceAll ? t.replaceAll(i, s) : i.global ? t.replace(i, s) : t.split(i).join(s);
}, ee = Cs;
var _s = /\*\/$/, Ts = /^\/\*\*?/, ks = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, Es = /(^|\s+)\/\/([^\n\r]*)/g, $t = /^(\r?\n)+/, ws = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g, ei = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g, As = /(\r?\n|^) *\* ?/g, Ps = [];
function ti(e) {
  let t = e.match(ks);
  return t ? t[0].trimStart() : "";
}
function ii(e) {
  let t = `
`;
  e = ee(false, e.replace(Ts, "").replace(_s, ""), As, "$1");
  let i = "";
  for (; i !== e; ) i = e, e = ee(false, e, ws, `${t}$1 $2${t}`);
  e = e.replace($t, "").trimEnd();
  let s = /* @__PURE__ */ Object.create(null), r = ee(false, e, ei, "").replace($t, "").trimEnd(), n;
  for (; n = ei.exec(e); ) {
    let o = ee(false, n[2], Es, "");
    if (typeof s[n[1]] == "string" || Array.isArray(s[n[1]])) {
      let u = s[n[1]];
      s[n[1]] = [...Ps, ...Array.isArray(u) ? u : [u], o];
    } else s[n[1]] = o;
  }
  return { comments: r, pragmas: s };
}
function Is(e) {
  if (!e.startsWith("#!")) return "";
  let t = e.indexOf(`
`);
  return t === -1 ? e : e.slice(0, t);
}
var si = Is;
function Ns(e) {
  let t = si(e);
  t && (e = e.slice(t.length + 1));
  let i = ti(e), { pragmas: s, comments: r } = ii(i);
  return { shebang: t, text: e, pragmas: s, comments: r };
}
function ri(e) {
  let { pragmas: t } = Ns(e);
  return Object.prototype.hasOwnProperty.call(t, "prettier") || Object.prototype.hasOwnProperty.call(t, "format");
}
function Vs(e) {
  return e = typeof e == "function" ? { parse: e } : e, { astFormat: "estree", hasPragma: ri, locStart: O, locEnd: J, ...e };
}
var Te = Vs;
function Ls(e) {
  let { filepath: t } = e;
  if (t) {
    if (t = t.toLowerCase(), t.endsWith(".cjs") || t.endsWith(".cts")) return "script";
    if (t.endsWith(".mjs") || t.endsWith(".mts")) return "module";
  }
}
var ke = Ls;
var Rs = { ecmaVersion: "latest", allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, locations: true, ranges: true };
function Os(e) {
  let { message: t, loc: i } = e;
  if (!i) return e;
  let { line: s, column: r } = i;
  return be(t.replace(/ \(\d+:\d+\)$/u, ""), { loc: { start: { line: s, column: r + 1 } }, cause: e });
}
var ai, Bs = () => (ai ?? (ai = T.extend((0, ni.default)())), ai);
function Ds(e, t) {
  let i = Bs(), s = [], r = [], n = i.parse(e, { ...Rs, sourceType: t, allowImportExportEverywhere: t === "module", onComment: s, onToken: r });
  return n.comments = s, n.tokens = r, n;
}
function Fs(e, t = {}) {
  let i = ke(t), s = (i ? [i] : ["module", "script"]).map((n) => () => Ds(e, n)), r;
  try {
    r = Se(s);
  } catch ({ errors: [n] }) {
    throw Os(n);
  }
  return _e(r, { text: e });
}
var oi = Te(Fs);
var ci = et(Je());
var E = { Boolean: "Boolean", Identifier: "Identifier", PrivateIdentifier: "PrivateIdentifier", Keyword: "Keyword", Null: "Null", Numeric: "Numeric", Punctuator: "Punctuator", String: "String", RegularExpression: "RegularExpression", Template: "Template", JSXIdentifier: "JSXIdentifier", JSXText: "JSXText" };
function js(e, t) {
  let i = e[0], s = X(false, e, -1), r = { type: E.Template, value: t.slice(i.start, s.end) };
  return i.loc && (r.loc = { start: i.loc.start, end: s.loc.end }), i.range && (r.start = i.range[0], r.end = s.range[1], r.range = [r.start, r.end]), r;
}
function He(e, t) {
  this._acornTokTypes = e, this._tokens = [], this._curlyBrace = null, this._code = t;
}
He.prototype = { constructor: He, translate(e, t) {
  let i = e.type, s = this._acornTokTypes;
  if (i === s.name) e.type = E.Identifier, e.value === "static" && (e.type = E.Keyword), t.ecmaVersion > 5 && (e.value === "yield" || e.value === "let") && (e.type = E.Keyword);
  else if (i === s.privateId) e.type = E.PrivateIdentifier;
  else if (i === s.semi || i === s.comma || i === s.parenL || i === s.parenR || i === s.braceL || i === s.braceR || i === s.dot || i === s.bracketL || i === s.colon || i === s.question || i === s.bracketR || i === s.ellipsis || i === s.arrow || i === s.jsxTagStart || i === s.incDec || i === s.starstar || i === s.jsxTagEnd || i === s.prefix || i === s.questionDot || i.binop && !i.keyword || i.isAssign) e.type = E.Punctuator, e.value = this._code.slice(e.start, e.end);
  else if (i === s.jsxName) e.type = E.JSXIdentifier;
  else if (i.label === "jsxText" || i === s.jsxAttrValueToken) e.type = E.JSXText;
  else if (i.keyword) i.keyword === "true" || i.keyword === "false" ? e.type = E.Boolean : i.keyword === "null" ? e.type = E.Null : e.type = E.Keyword;
  else if (i === s.num) e.type = E.Numeric, e.value = this._code.slice(e.start, e.end);
  else if (i === s.string) t.jsxAttrValueToken ? (t.jsxAttrValueToken = false, e.type = E.JSXText) : e.type = E.String, e.value = this._code.slice(e.start, e.end);
  else if (i === s.regexp) {
    e.type = E.RegularExpression;
    let r = e.value;
    e.regex = { flags: r.flags, pattern: r.pattern }, e.value = `/${r.pattern}/${r.flags}`;
  }
  return e;
}, onToken(e, t) {
  let i = this._acornTokTypes, s = t.tokens, r = this._tokens, n = () => {
    s.push(js(this._tokens, this._code)), this._tokens = [];
  };
  if (e.type === i.eof) {
    this._curlyBrace && s.push(this.translate(this._curlyBrace, t));
    return;
  }
  if (e.type === i.backQuote) {
    this._curlyBrace && (s.push(this.translate(this._curlyBrace, t)), this._curlyBrace = null), r.push(e), r.length > 1 && n();
    return;
  }
  if (e.type === i.dollarBraceL) {
    r.push(e), n();
    return;
  }
  if (e.type === i.braceR) {
    this._curlyBrace && s.push(this.translate(this._curlyBrace, t)), this._curlyBrace = e;
    return;
  }
  if (e.type === i.template || e.type === i.invalidTemplate) {
    this._curlyBrace && (r.push(this._curlyBrace), this._curlyBrace = null), r.push(e);
    return;
  }
  this._curlyBrace && (s.push(this.translate(this._curlyBrace, t)), this._curlyBrace = null), s.push(this.translate(e, t));
} };
var ui = He;
var pi = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function Ms() {
  return X(false, pi, -1);
}
function Us(e = 5) {
  let t = e === "latest" ? Ms() : e;
  if (typeof t != "number") throw new Error(`ecmaVersion must be a number or "latest". Received value of type ${typeof e} instead.`);
  if (t >= 2015 && (t -= 2009), !pi.includes(t)) throw new Error("Invalid ecmaVersion.");
  return t;
}
function qs(e = "script") {
  if (e === "script" || e === "module") return e;
  if (e === "commonjs") return "script";
  throw new Error("Invalid sourceType.");
}
function hi(e) {
  let t = Us(e.ecmaVersion), i = qs(e.sourceType), s = e.range === true, r = e.loc === true;
  if (t !== 3 && e.allowReserved) throw new Error("`allowReserved` is only supported when ecmaVersion is 3");
  if (typeof e.allowReserved < "u" && typeof e.allowReserved != "boolean") throw new Error("`allowReserved`, when present, must be `true` or `false`");
  let n = t === 3 ? e.allowReserved || "never" : false, o = e.ecmaFeatures || {}, u = e.sourceType === "commonjs" || !!o.globalReturn;
  if (i === "module" && t < 6) throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
  return Object.assign({}, e, { ecmaVersion: t, sourceType: i, ranges: s, locations: r, allowReserved: n, allowReturnOutsideFunction: u });
}
var z = Symbol("espree's internal state"), Qe = Symbol("espree's esprimaFinishNode");
function Gs(e, t, i, s, r, n, o) {
  let u;
  e ? u = "Block" : o.slice(i, i + 2) === "#!" ? u = "Hashbang" : u = "Line";
  let p = { type: u, value: t };
  return typeof i == "number" && (p.start = i, p.end = s, p.range = [i, s]), typeof r == "object" && (p.loc = { start: r, end: n }), p;
}
var Ye = () => (e) => {
  let t = Object.assign({}, e.acorn.tokTypes);
  return e.acornJsx && Object.assign(t, e.acornJsx.tokTypes), class extends e {
    constructor(s, r) {
      (typeof s != "object" || s === null) && (s = {}), typeof r != "string" && !(r instanceof String) && (r = String(r));
      let n = s.sourceType, o = hi(s), u = o.ecmaFeatures || {}, p = o.tokens === true ? new ui(t, r) : null, d = { originalSourceType: n || o.sourceType, tokens: p ? [] : null, comments: o.comment === true ? [] : null, impliedStrict: u.impliedStrict === true && o.ecmaVersion >= 5, ecmaVersion: o.ecmaVersion, jsxAttrValueToken: false, lastToken: null, templateElements: [] };
      super({ ecmaVersion: o.ecmaVersion, sourceType: o.sourceType, ranges: o.ranges, locations: o.locations, allowReserved: o.allowReserved, allowReturnOutsideFunction: o.allowReturnOutsideFunction, onToken(f) {
        p && p.onToken(f, d), f.type !== t.eof && (d.lastToken = f);
      }, onComment(f, C, B, h, m, x) {
        if (d.comments) {
          let g = Gs(f, C, B, h, m, x, r);
          d.comments.push(g);
        }
      } }, r), this[z] = d;
    }
    tokenize() {
      do
        this.next();
      while (this.type !== t.eof);
      this.next();
      let s = this[z], r = s.tokens;
      return s.comments && (r.comments = s.comments), r;
    }
    finishNode(...s) {
      let r = super.finishNode(...s);
      return this[Qe](r);
    }
    finishNodeAt(...s) {
      let r = super.finishNodeAt(...s);
      return this[Qe](r);
    }
    parse() {
      let s = this[z], r = super.parse();
      if (r.sourceType = s.originalSourceType, s.comments && (r.comments = s.comments), s.tokens && (r.tokens = s.tokens), r.body.length) {
        let [n] = r.body;
        r.range && (r.range[0] = n.range[0]), r.loc && (r.loc.start = n.loc.start), r.start = n.start;
      }
      return s.lastToken && (r.range && (r.range[1] = s.lastToken.range[1]), r.loc && (r.loc.end = s.lastToken.loc.end), r.end = s.lastToken.end), this[z].templateElements.forEach((n) => {
        let u = n.tail ? 1 : 2;
        n.start += -1, n.end += u, n.range && (n.range[0] += -1, n.range[1] += u), n.loc && (n.loc.start.column += -1, n.loc.end.column += u);
      }), r;
    }
    parseTopLevel(s) {
      return this[z].impliedStrict && (this.strict = true), super.parseTopLevel(s);
    }
    raise(s, r) {
      let n = e.acorn.getLineInfo(this.input, s), o = new SyntaxError(r);
      throw o.index = s, o.lineNumber = n.line, o.column = n.column + 1, o;
    }
    raiseRecoverable(s, r) {
      this.raise(s, r);
    }
    unexpected(s) {
      let r = "Unexpected token";
      if (s != null) {
        if (this.pos = s, this.options.locations) for (; this.pos < this.lineStart; ) this.lineStart = this.input.lastIndexOf(`
`, this.lineStart - 2) + 1, --this.curLine;
        this.nextToken();
      }
      this.end > this.start && (r += ` ${this.input.slice(this.start, this.end)}`), this.raise(this.start, r);
    }
    jsx_readString(s) {
      let r = super.jsx_readString(s);
      return this.type === t.string && (this[z].jsxAttrValueToken = true), r;
    }
    [Qe](s) {
      return s.type === "TemplateElement" && this[z].templateElements.push(s), s.type.includes("Function") && !s.generator && (s.generator = false), s;
    }
  };
};
var Js = { _regular: null, _jsx: null, get regular() {
  return this._regular === null && (this._regular = T.extend(Ye())), this._regular;
}, get jsx() {
  return this._jsx === null && (this._jsx = T.extend((0, ci.default)(), Ye())), this._jsx;
}, get(e) {
  return !!(e && e.ecmaFeatures && e.ecmaFeatures.jsx) ? this.jsx : this.regular;
} };
function li(e, t) {
  let i = Js.get(t);
  return new i(t, e).parse();
}
var Ks = { ecmaVersion: "latest", range: true, loc: true, comment: true, tokens: true, sourceType: "module", ecmaFeatures: { jsx: true, globalReturn: true, impliedStrict: false } };
function Ws(e) {
  let { message: t, lineNumber: i, column: s } = e;
  return typeof i != "number" ? e : be(t, { loc: { start: { line: i, column: s } }, cause: e });
}
function Xs(e, t = {}) {
  let i = ke(t), s = (i ? [i] : ["module", "script"]).map((n) => () => li(e, { ...Ks, sourceType: n })), r;
  try {
    r = Se(s);
  } catch ({ errors: [n] }) {
    throw Ws(n);
  }
  return _e(r, { text: e });
}
var fi = Te(Xs);
var zs = { acorn: oi, espree: fi };
var Ca = Ze;
export {
  Ca as default,
  zs as parsers
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNvcm4tQmlwM19EbEkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcmV0dGllci9wbHVnaW5zL2Fjb3JuLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGk9T2JqZWN0LmNyZWF0ZTt2YXIgd2U9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBtaT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB4aT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgeWk9T2JqZWN0LmdldFByb3RvdHlwZU9mLGdpPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyICRlPShlLHQpPT4oKT0+KHR8fGUoKHQ9e2V4cG9ydHM6e319KS5leHBvcnRzLHQpLHQuZXhwb3J0cyksdmk9KGUsdCk9Pntmb3IodmFyIGkgaW4gdCl3ZShlLGkse2dldDp0W2ldLGVudW1lcmFibGU6ITB9KX0sYmk9KGUsdCxpLHMpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCByIG9mIHhpKHQpKSFnaS5jYWxsKGUscikmJnIhPT1pJiZ3ZShlLHIse2dldDooKT0+dFtyXSxlbnVtZXJhYmxlOiEocz1taSh0LHIpKXx8cy5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciBldD0oZSx0LGkpPT4oaT1lIT1udWxsP2RpKHlpKGUpKTp7fSxiaSh0fHwhZXx8IWUuX19lc01vZHVsZT93ZShpLFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KTppLGUpKTt2YXIgR3Q9JGUoKFFzLHF0KT0+e3F0LmV4cG9ydHM9e319KTt2YXIgSmU9JGUoKFlzLEdlKT0+e1widXNlIHN0cmljdFwiO3ZhciBucz1HdCgpLG9zPS9eW1xcZGEtZkEtRl0rJC8sdXM9L15cXGQrJC8sSnQ9bmV3IFdlYWtNYXA7ZnVuY3Rpb24gS3QoZSl7ZT1lLlBhcnNlci5hY29ybnx8ZTtsZXQgdD1KdC5nZXQoZSk7aWYoIXQpe2xldCBpPWUudG9rVHlwZXMscz1lLlRva0NvbnRleHQscj1lLlRva2VuVHlwZSxuPW5ldyBzKFwiPHRhZ1wiLCExKSxvPW5ldyBzKFwiPC90YWdcIiwhMSksdT1uZXcgcyhcIjx0YWc+Li4uPC90YWc+XCIsITAsITApLHA9e3RjX29UYWc6bix0Y19jVGFnOm8sdGNfZXhwcjp1fSxkPXtqc3hOYW1lOm5ldyByKFwianN4TmFtZVwiKSxqc3hUZXh0Om5ldyByKFwianN4VGV4dFwiLHtiZWZvcmVFeHByOiEwfSksanN4VGFnU3RhcnQ6bmV3IHIoXCJqc3hUYWdTdGFydFwiLHtzdGFydHNFeHByOiEwfSksanN4VGFnRW5kOm5ldyByKFwianN4VGFnRW5kXCIpfTtkLmpzeFRhZ1N0YXJ0LnVwZGF0ZUNvbnRleHQ9ZnVuY3Rpb24oKXt0aGlzLmNvbnRleHQucHVzaCh1KSx0aGlzLmNvbnRleHQucHVzaChuKSx0aGlzLmV4cHJBbGxvd2VkPSExfSxkLmpzeFRhZ0VuZC51cGRhdGVDb250ZXh0PWZ1bmN0aW9uKGYpe2xldCBDPXRoaXMuY29udGV4dC5wb3AoKTtDPT09biYmZj09PWkuc2xhc2h8fEM9PT1vPyh0aGlzLmNvbnRleHQucG9wKCksdGhpcy5leHByQWxsb3dlZD10aGlzLmN1ckNvbnRleHQoKT09PXUpOnRoaXMuZXhwckFsbG93ZWQ9ITB9LHQ9e3Rva0NvbnRleHRzOnAsdG9rVHlwZXM6ZH0sSnQuc2V0KGUsdCl9cmV0dXJuIHR9ZnVuY3Rpb24gbmUoZSl7aWYoIWUpcmV0dXJuIGU7aWYoZS50eXBlPT09XCJKU1hJZGVudGlmaWVyXCIpcmV0dXJuIGUubmFtZTtpZihlLnR5cGU9PT1cIkpTWE5hbWVzcGFjZWROYW1lXCIpcmV0dXJuIGUubmFtZXNwYWNlLm5hbWUrXCI6XCIrZS5uYW1lLm5hbWU7aWYoZS50eXBlPT09XCJKU1hNZW1iZXJFeHByZXNzaW9uXCIpcmV0dXJuIG5lKGUub2JqZWN0KStcIi5cIituZShlLnByb3BlcnR5KX1HZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlPWV8fHt9LGZ1bmN0aW9uKHQpe3JldHVybiBwcyh7YWxsb3dOYW1lc3BhY2VzOmUuYWxsb3dOYW1lc3BhY2VzIT09ITEsYWxsb3dOYW1lc3BhY2VkT2JqZWN0czohIWUuYWxsb3dOYW1lc3BhY2VkT2JqZWN0c30sdCl9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoR2UuZXhwb3J0cyxcInRva1R5cGVzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBLdCh2b2lkIDApLnRva1R5cGVzfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH0pO2Z1bmN0aW9uIHBzKGUsdCl7bGV0IGk9dC5hY29ybnx8dm9pZCAwLHM9S3QoaSkscj1pLnRva1R5cGVzLG49cy50b2tUeXBlcyxvPWkudG9rQ29udGV4dHMsdT1zLnRva0NvbnRleHRzLnRjX29UYWcscD1zLnRva0NvbnRleHRzLnRjX2NUYWcsZD1zLnRva0NvbnRleHRzLnRjX2V4cHIsZj1pLmlzTmV3TGluZSxDPWkuaXNJZGVudGlmaWVyU3RhcnQsQj1pLmlzSWRlbnRpZmllckNoYXI7cmV0dXJuIGNsYXNzIGV4dGVuZHMgdHtzdGF0aWMgZ2V0IGFjb3JuSnN4KCl7cmV0dXJuIHN9anN4X3JlYWRUb2tlbigpe2xldCBoPVwiXCIsbT10aGlzLnBvcztmb3IoOzspe3RoaXMucG9zPj10aGlzLmlucHV0Lmxlbmd0aCYmdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LFwiVW50ZXJtaW5hdGVkIEpTWCBjb250ZW50c1wiKTtsZXQgeD10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO3N3aXRjaCh4KXtjYXNlIDYwOmNhc2UgMTIzOnJldHVybiB0aGlzLnBvcz09PXRoaXMuc3RhcnQ/eD09PTYwJiZ0aGlzLmV4cHJBbGxvd2VkPygrK3RoaXMucG9zLHRoaXMuZmluaXNoVG9rZW4obi5qc3hUYWdTdGFydCkpOnRoaXMuZ2V0VG9rZW5Gcm9tQ29kZSh4KTooaCs9dGhpcy5pbnB1dC5zbGljZShtLHRoaXMucG9zKSx0aGlzLmZpbmlzaFRva2VuKG4uanN4VGV4dCxoKSk7Y2FzZSAzODpoKz10aGlzLmlucHV0LnNsaWNlKG0sdGhpcy5wb3MpLGgrPXRoaXMuanN4X3JlYWRFbnRpdHkoKSxtPXRoaXMucG9zO2JyZWFrO2Nhc2UgNjI6Y2FzZSAxMjU6dGhpcy5yYWlzZSh0aGlzLnBvcyxcIlVuZXhwZWN0ZWQgdG9rZW4gYFwiK3RoaXMuaW5wdXRbdGhpcy5wb3NdK1wiYC4gRGlkIHlvdSBtZWFuIGBcIisoeD09PTYyP1wiJmd0O1wiOlwiJnJicmFjZTtcIikrJ2Agb3IgYHtcIicrdGhpcy5pbnB1dFt0aGlzLnBvc10rJ1wifWA/Jyk7ZGVmYXVsdDpmKHgpPyhoKz10aGlzLmlucHV0LnNsaWNlKG0sdGhpcy5wb3MpLGgrPXRoaXMuanN4X3JlYWROZXdMaW5lKCEwKSxtPXRoaXMucG9zKTorK3RoaXMucG9zfX19anN4X3JlYWROZXdMaW5lKGgpe2xldCBtPXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcykseDtyZXR1cm4rK3RoaXMucG9zLG09PT0xMyYmdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKT09PTEwPygrK3RoaXMucG9zLHg9aD9gXG5gOmBcXHJcbmApOng9U3RyaW5nLmZyb21DaGFyQ29kZShtKSx0aGlzLm9wdGlvbnMubG9jYXRpb25zJiYoKyt0aGlzLmN1ckxpbmUsdGhpcy5saW5lU3RhcnQ9dGhpcy5wb3MpLHh9anN4X3JlYWRTdHJpbmcoaCl7bGV0IG09XCJcIix4PSsrdGhpcy5wb3M7Zm9yKDs7KXt0aGlzLnBvcz49dGhpcy5pbnB1dC5sZW5ndGgmJnRoaXMucmFpc2UodGhpcy5zdGFydCxcIlVudGVybWluYXRlZCBzdHJpbmcgY29uc3RhbnRcIik7bGV0IGc9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtpZihnPT09aClicmVhaztnPT09Mzg/KG0rPXRoaXMuaW5wdXQuc2xpY2UoeCx0aGlzLnBvcyksbSs9dGhpcy5qc3hfcmVhZEVudGl0eSgpLHg9dGhpcy5wb3MpOmYoZyk/KG0rPXRoaXMuaW5wdXQuc2xpY2UoeCx0aGlzLnBvcyksbSs9dGhpcy5qc3hfcmVhZE5ld0xpbmUoITEpLHg9dGhpcy5wb3MpOisrdGhpcy5wb3N9cmV0dXJuIG0rPXRoaXMuaW5wdXQuc2xpY2UoeCx0aGlzLnBvcysrKSx0aGlzLmZpbmlzaFRva2VuKHIuc3RyaW5nLG0pfWpzeF9yZWFkRW50aXR5KCl7bGV0IGg9XCJcIixtPTAseCxnPXRoaXMuaW5wdXRbdGhpcy5wb3NdO2chPT1cIiZcIiYmdGhpcy5yYWlzZSh0aGlzLnBvcyxcIkVudGl0eSBtdXN0IHN0YXJ0IHdpdGggYW4gYW1wZXJzYW5kXCIpO2xldCB3PSsrdGhpcy5wb3M7Zm9yKDt0aGlzLnBvczx0aGlzLmlucHV0Lmxlbmd0aCYmbSsrPDEwOyl7aWYoZz10aGlzLmlucHV0W3RoaXMucG9zKytdLGc9PT1cIjtcIil7aFswXT09PVwiI1wiP2hbMV09PT1cInhcIj8oaD1oLnN1YnN0cigyKSxvcy50ZXN0KGgpJiYoeD1TdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGgsMTYpKSkpOihoPWguc3Vic3RyKDEpLHVzLnRlc3QoaCkmJih4PVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaCwxMCkpKSk6eD1uc1toXTticmVha31oKz1nfXJldHVybiB4fHwodGhpcy5wb3M9dyxcIiZcIil9anN4X3JlYWRXb3JkKCl7bGV0IGgsbT10aGlzLnBvcztkbyBoPXRoaXMuaW5wdXQuY2hhckNvZGVBdCgrK3RoaXMucG9zKTt3aGlsZShCKGgpfHxoPT09NDUpO3JldHVybiB0aGlzLmZpbmlzaFRva2VuKG4uanN4TmFtZSx0aGlzLmlucHV0LnNsaWNlKG0sdGhpcy5wb3MpKX1qc3hfcGFyc2VJZGVudGlmaWVyKCl7bGV0IGg9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy50eXBlPT09bi5qc3hOYW1lP2gubmFtZT10aGlzLnZhbHVlOnRoaXMudHlwZS5rZXl3b3JkP2gubmFtZT10aGlzLnR5cGUua2V5d29yZDp0aGlzLnVuZXhwZWN0ZWQoKSx0aGlzLm5leHQoKSx0aGlzLmZpbmlzaE5vZGUoaCxcIkpTWElkZW50aWZpZXJcIil9anN4X3BhcnNlTmFtZXNwYWNlZE5hbWUoKXtsZXQgaD10aGlzLnN0YXJ0LG09dGhpcy5zdGFydExvYyx4PXRoaXMuanN4X3BhcnNlSWRlbnRpZmllcigpO2lmKCFlLmFsbG93TmFtZXNwYWNlc3x8IXRoaXMuZWF0KHIuY29sb24pKXJldHVybiB4O3ZhciBnPXRoaXMuc3RhcnROb2RlQXQoaCxtKTtyZXR1cm4gZy5uYW1lc3BhY2U9eCxnLm5hbWU9dGhpcy5qc3hfcGFyc2VJZGVudGlmaWVyKCksdGhpcy5maW5pc2hOb2RlKGcsXCJKU1hOYW1lc3BhY2VkTmFtZVwiKX1qc3hfcGFyc2VFbGVtZW50TmFtZSgpe2lmKHRoaXMudHlwZT09PW4uanN4VGFnRW5kKXJldHVyblwiXCI7bGV0IGg9dGhpcy5zdGFydCxtPXRoaXMuc3RhcnRMb2MseD10aGlzLmpzeF9wYXJzZU5hbWVzcGFjZWROYW1lKCk7Zm9yKHRoaXMudHlwZT09PXIuZG90JiZ4LnR5cGU9PT1cIkpTWE5hbWVzcGFjZWROYW1lXCImJiFlLmFsbG93TmFtZXNwYWNlZE9iamVjdHMmJnRoaXMudW5leHBlY3RlZCgpO3RoaXMuZWF0KHIuZG90KTspe2xldCBnPXRoaXMuc3RhcnROb2RlQXQoaCxtKTtnLm9iamVjdD14LGcucHJvcGVydHk9dGhpcy5qc3hfcGFyc2VJZGVudGlmaWVyKCkseD10aGlzLmZpbmlzaE5vZGUoZyxcIkpTWE1lbWJlckV4cHJlc3Npb25cIil9cmV0dXJuIHh9anN4X3BhcnNlQXR0cmlidXRlVmFsdWUoKXtzd2l0Y2godGhpcy50eXBlKXtjYXNlIHIuYnJhY2VMOmxldCBoPXRoaXMuanN4X3BhcnNlRXhwcmVzc2lvbkNvbnRhaW5lcigpO3JldHVybiBoLmV4cHJlc3Npb24udHlwZT09PVwiSlNYRW1wdHlFeHByZXNzaW9uXCImJnRoaXMucmFpc2UoaC5zdGFydCxcIkpTWCBhdHRyaWJ1dGVzIG11c3Qgb25seSBiZSBhc3NpZ25lZCBhIG5vbi1lbXB0eSBleHByZXNzaW9uXCIpLGg7Y2FzZSBuLmpzeFRhZ1N0YXJ0OmNhc2Ugci5zdHJpbmc6cmV0dXJuIHRoaXMucGFyc2VFeHByQXRvbSgpO2RlZmF1bHQ6dGhpcy5yYWlzZSh0aGlzLnN0YXJ0LFwiSlNYIHZhbHVlIHNob3VsZCBiZSBlaXRoZXIgYW4gZXhwcmVzc2lvbiBvciBhIHF1b3RlZCBKU1ggdGV4dFwiKX19anN4X3BhcnNlRW1wdHlFeHByZXNzaW9uKCl7bGV0IGg9dGhpcy5zdGFydE5vZGVBdCh0aGlzLmxhc3RUb2tFbmQsdGhpcy5sYXN0VG9rRW5kTG9jKTtyZXR1cm4gdGhpcy5maW5pc2hOb2RlQXQoaCxcIkpTWEVtcHR5RXhwcmVzc2lvblwiLHRoaXMuc3RhcnQsdGhpcy5zdGFydExvYyl9anN4X3BhcnNlRXhwcmVzc2lvbkNvbnRhaW5lcigpe2xldCBoPXRoaXMuc3RhcnROb2RlKCk7cmV0dXJuIHRoaXMubmV4dCgpLGguZXhwcmVzc2lvbj10aGlzLnR5cGU9PT1yLmJyYWNlUj90aGlzLmpzeF9wYXJzZUVtcHR5RXhwcmVzc2lvbigpOnRoaXMucGFyc2VFeHByZXNzaW9uKCksdGhpcy5leHBlY3Qoci5icmFjZVIpLHRoaXMuZmluaXNoTm9kZShoLFwiSlNYRXhwcmVzc2lvbkNvbnRhaW5lclwiKX1qc3hfcGFyc2VBdHRyaWJ1dGUoKXtsZXQgaD10aGlzLnN0YXJ0Tm9kZSgpO3JldHVybiB0aGlzLmVhdChyLmJyYWNlTCk/KHRoaXMuZXhwZWN0KHIuZWxsaXBzaXMpLGguYXJndW1lbnQ9dGhpcy5wYXJzZU1heWJlQXNzaWduKCksdGhpcy5leHBlY3Qoci5icmFjZVIpLHRoaXMuZmluaXNoTm9kZShoLFwiSlNYU3ByZWFkQXR0cmlidXRlXCIpKTooaC5uYW1lPXRoaXMuanN4X3BhcnNlTmFtZXNwYWNlZE5hbWUoKSxoLnZhbHVlPXRoaXMuZWF0KHIuZXEpP3RoaXMuanN4X3BhcnNlQXR0cmlidXRlVmFsdWUoKTpudWxsLHRoaXMuZmluaXNoTm9kZShoLFwiSlNYQXR0cmlidXRlXCIpKX1qc3hfcGFyc2VPcGVuaW5nRWxlbWVudEF0KGgsbSl7bGV0IHg9dGhpcy5zdGFydE5vZGVBdChoLG0pO3guYXR0cmlidXRlcz1bXTtsZXQgZz10aGlzLmpzeF9wYXJzZUVsZW1lbnROYW1lKCk7Zm9yKGcmJih4Lm5hbWU9Zyk7dGhpcy50eXBlIT09ci5zbGFzaCYmdGhpcy50eXBlIT09bi5qc3hUYWdFbmQ7KXguYXR0cmlidXRlcy5wdXNoKHRoaXMuanN4X3BhcnNlQXR0cmlidXRlKCkpO3JldHVybiB4LnNlbGZDbG9zaW5nPXRoaXMuZWF0KHIuc2xhc2gpLHRoaXMuZXhwZWN0KG4uanN4VGFnRW5kKSx0aGlzLmZpbmlzaE5vZGUoeCxnP1wiSlNYT3BlbmluZ0VsZW1lbnRcIjpcIkpTWE9wZW5pbmdGcmFnbWVudFwiKX1qc3hfcGFyc2VDbG9zaW5nRWxlbWVudEF0KGgsbSl7bGV0IHg9dGhpcy5zdGFydE5vZGVBdChoLG0pLGc9dGhpcy5qc3hfcGFyc2VFbGVtZW50TmFtZSgpO3JldHVybiBnJiYoeC5uYW1lPWcpLHRoaXMuZXhwZWN0KG4uanN4VGFnRW5kKSx0aGlzLmZpbmlzaE5vZGUoeCxnP1wiSlNYQ2xvc2luZ0VsZW1lbnRcIjpcIkpTWENsb3NpbmdGcmFnbWVudFwiKX1qc3hfcGFyc2VFbGVtZW50QXQoaCxtKXtsZXQgeD10aGlzLnN0YXJ0Tm9kZUF0KGgsbSksZz1bXSx3PXRoaXMuanN4X3BhcnNlT3BlbmluZ0VsZW1lbnRBdChoLG0pLGhlPW51bGw7aWYoIXcuc2VsZkNsb3Npbmcpe2U6Zm9yKDs7KXN3aXRjaCh0aGlzLnR5cGUpe2Nhc2Ugbi5qc3hUYWdTdGFydDppZihoPXRoaXMuc3RhcnQsbT10aGlzLnN0YXJ0TG9jLHRoaXMubmV4dCgpLHRoaXMuZWF0KHIuc2xhc2gpKXtoZT10aGlzLmpzeF9wYXJzZUNsb3NpbmdFbGVtZW50QXQoaCxtKTticmVhayBlfWcucHVzaCh0aGlzLmpzeF9wYXJzZUVsZW1lbnRBdChoLG0pKTticmVhaztjYXNlIG4uanN4VGV4dDpnLnB1c2godGhpcy5wYXJzZUV4cHJBdG9tKCkpO2JyZWFrO2Nhc2Ugci5icmFjZUw6Zy5wdXNoKHRoaXMuanN4X3BhcnNlRXhwcmVzc2lvbkNvbnRhaW5lcigpKTticmVhaztkZWZhdWx0OnRoaXMudW5leHBlY3RlZCgpfW5lKGhlLm5hbWUpIT09bmUody5uYW1lKSYmdGhpcy5yYWlzZShoZS5zdGFydCxcIkV4cGVjdGVkIGNvcnJlc3BvbmRpbmcgSlNYIGNsb3NpbmcgdGFnIGZvciA8XCIrbmUody5uYW1lKStcIj5cIil9bGV0IEVlPXcubmFtZT9cIkVsZW1lbnRcIjpcIkZyYWdtZW50XCI7cmV0dXJuIHhbXCJvcGVuaW5nXCIrRWVdPXcseFtcImNsb3NpbmdcIitFZV09aGUseC5jaGlsZHJlbj1nLHRoaXMudHlwZT09PXIucmVsYXRpb25hbCYmdGhpcy52YWx1ZT09PVwiPFwiJiZ0aGlzLnJhaXNlKHRoaXMuc3RhcnQsXCJBZGphY2VudCBKU1ggZWxlbWVudHMgbXVzdCBiZSB3cmFwcGVkIGluIGFuIGVuY2xvc2luZyB0YWdcIiksdGhpcy5maW5pc2hOb2RlKHgsXCJKU1hcIitFZSl9anN4X3BhcnNlVGV4dCgpe2xldCBoPXRoaXMucGFyc2VMaXRlcmFsKHRoaXMudmFsdWUpO3JldHVybiBoLnR5cGU9XCJKU1hUZXh0XCIsaH1qc3hfcGFyc2VFbGVtZW50KCl7bGV0IGg9dGhpcy5zdGFydCxtPXRoaXMuc3RhcnRMb2M7cmV0dXJuIHRoaXMubmV4dCgpLHRoaXMuanN4X3BhcnNlRWxlbWVudEF0KGgsbSl9cGFyc2VFeHByQXRvbShoKXtyZXR1cm4gdGhpcy50eXBlPT09bi5qc3hUZXh0P3RoaXMuanN4X3BhcnNlVGV4dCgpOnRoaXMudHlwZT09PW4uanN4VGFnU3RhcnQ/dGhpcy5qc3hfcGFyc2VFbGVtZW50KCk6c3VwZXIucGFyc2VFeHByQXRvbShoKX1yZWFkVG9rZW4oaCl7bGV0IG09dGhpcy5jdXJDb250ZXh0KCk7aWYobT09PWQpcmV0dXJuIHRoaXMuanN4X3JlYWRUb2tlbigpO2lmKG09PT11fHxtPT09cCl7aWYoQyhoKSlyZXR1cm4gdGhpcy5qc3hfcmVhZFdvcmQoKTtpZihoPT02MilyZXR1cm4rK3RoaXMucG9zLHRoaXMuZmluaXNoVG9rZW4obi5qc3hUYWdFbmQpO2lmKChoPT09MzR8fGg9PT0zOSkmJm09PXUpcmV0dXJuIHRoaXMuanN4X3JlYWRTdHJpbmcoaCl9cmV0dXJuIGg9PT02MCYmdGhpcy5leHByQWxsb3dlZCYmdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzEpIT09MzM/KCsrdGhpcy5wb3MsdGhpcy5maW5pc2hUb2tlbihuLmpzeFRhZ1N0YXJ0KSk6c3VwZXIucmVhZFRva2VuKGgpfXVwZGF0ZUNvbnRleHQoaCl7aWYodGhpcy50eXBlPT1yLmJyYWNlTCl7dmFyIG09dGhpcy5jdXJDb250ZXh0KCk7bT09dT90aGlzLmNvbnRleHQucHVzaChvLmJfZXhwcik6bT09ZD90aGlzLmNvbnRleHQucHVzaChvLmJfdG1wbCk6c3VwZXIudXBkYXRlQ29udGV4dChoKSx0aGlzLmV4cHJBbGxvd2VkPSEwfWVsc2UgaWYodGhpcy50eXBlPT09ci5zbGFzaCYmaD09PW4uanN4VGFnU3RhcnQpdGhpcy5jb250ZXh0Lmxlbmd0aC09Mix0aGlzLmNvbnRleHQucHVzaChwKSx0aGlzLmV4cHJBbGxvd2VkPSExO2Vsc2UgcmV0dXJuIHN1cGVyLnVwZGF0ZUNvbnRleHQoaCl9fX19KTt2YXIgWmU9e307dmkoWmUse3BhcnNlcnM6KCk9PnpzfSk7dmFyIFNpPVs1MDksMCwyMjcsMCwxNTAsNCwyOTQsOSwxMzY4LDIsMiwxLDYsMyw0MSwyLDUsMCwxNjYsMSw1NzQsMyw5LDksNyw5LDMyLDQsMzE4LDEsODAsMyw3MSwxMCw1MCwzLDEyMywyLDU0LDE0LDMyLDEwLDMsMSwxMSwzLDQ2LDEwLDgsMCw0Niw5LDcsMiwzNywxMywyLDksNiwxLDQ1LDAsMTMsMiw0OSwxMyw5LDMsMiwxMSw4MywxMSw3LDAsMywwLDE1OCwxMSw2LDksNywzLDU2LDEsMiw2LDMsMSwzLDIsMTAsMCwxMSwxLDMsNiw0LDQsNjgsOCwyLDAsMywwLDIsMywyLDQsMiwwLDE1LDEsODMsMTcsMTAsOSw1LDAsODIsMTksMTMsOSwyMTQsNiwzLDgsMjgsMSw4MywxNiwxNiw5LDgyLDEyLDksOSw3LDE5LDU4LDE0LDUsOSwyNDMsMTQsMTY2LDksNzEsNSwyLDEsMywzLDIsMCwyLDEsMTMsOSwxMjAsNiwzLDYsNCwwLDI5LDksNDEsNiwyLDMsOSwwLDEwLDEwLDQ3LDE1LDM0Myw5LDU0LDcsMiw3LDE3LDksNTcsMjEsMiwxMywxMjMsNSw0LDAsMiwxLDIsNiwyLDAsOSw5LDQ5LDQsMiwxLDIsNCw5LDksMzMwLDMsMTAsMSwyLDAsNDksNiw0LDQsMTQsMTAsNTM1MCwwLDcsMTQsMTE0NjUsMjcsMjM0Myw5LDg3LDksMzksNCw2MCw2LDI2LDksNTM1LDksNDcwLDAsMiw1NCw4LDMsODIsMCwxMiwxLDE5NjI4LDEsNDE3OCw5LDUxOSw0NSwzLDIyLDU0Myw0LDQsNSw5LDcsMyw2LDMxLDMsMTQ5LDIsMTQxOCw0OSw1MTMsNTQsNSw0OSw5LDAsMTUsMCwyMyw0LDIsMTQsMTM2MSw2LDIsMTYsMyw2LDIsMSwyLDQsMTAxLDAsMTYxLDYsMTAsOSwzNTcsMCw2MiwxMyw0OTksMTMsMjQ1LDEsMiw5LDcyNiw2LDExMCw2LDYsOSw0NzU5LDksNzg3NzE5LDIzOV0sbnQ9WzAsMTEsMiwyNSwyLDE4LDIsMSwyLDE0LDMsMTMsMzUsMTIyLDcwLDUyLDI2OCwyOCw0LDQ4LDQ4LDMxLDE0LDI5LDYsMzcsMTEsMjksMywzNSw1LDcsMiw0LDQzLDE1NywxOSwzNSw1LDM1LDUsMzksOSw1MSwxMywxMCwyLDE0LDIsNiwyLDEsMiwxMCwyLDE0LDIsNiwyLDEsNCw1MSwxMywzMTAsMTAsMjEsMTEsNywyNSw1LDIsNDEsMiw4LDcwLDUsMywwLDIsNDMsMiwxLDQsMCwzLDIyLDExLDIyLDEwLDMwLDY2LDE4LDIsMSwxMSwyMSwxMSwyNSw3MSw1NSw3LDEsNjUsMCwxNiwzLDIsMiwyLDI4LDQzLDI4LDQsMjgsMzYsNywyLDI3LDI4LDUzLDExLDIxLDExLDE4LDE0LDE3LDExMSw3Miw1Niw1MCwxNCw1MCwxNCwzNSwzOSwyNywxMCwyMiwyNTEsNDEsNywxLDE3LDIsNjAsMjgsMTEsMCw5LDIxLDQzLDE3LDQ3LDIwLDI4LDIyLDEzLDUyLDU4LDEsMywwLDE0LDQ0LDMzLDI0LDI3LDM1LDMwLDAsMywwLDksMzQsNCwwLDEzLDQ3LDE1LDMsMjIsMCwyLDAsMzYsMTcsMiwyNCwyMCwxLDY0LDYsMiwwLDIsMywyLDE0LDIsOSw4LDQ2LDM5LDcsMywxLDMsMjEsMiw2LDIsMSwyLDQsNCwwLDE5LDAsMTMsNCwzMSw5LDIsMCwzLDAsMiwzNywyLDAsMjYsMCwyLDAsNDUsNTIsMTksMywyMSwyLDMxLDQ3LDIxLDEsMiwwLDE4NSw0Niw0MiwzLDM3LDQ3LDIxLDAsNjAsNDIsMTQsMCw3MiwyNiwzOCw2LDE4Niw0MywxMTcsNjMsMzIsNywzLDAsMyw3LDIsMSwyLDIzLDE2LDAsMiwwLDk1LDcsMywzOCwxNywwLDIsMCwyOSwwLDExLDM5LDgsMCwyMiwwLDEyLDQ1LDIwLDAsMTksNzIsMjAwLDMyLDMyLDgsMiwzNiwxOCwwLDUwLDI5LDExMyw2LDIsMSwyLDM3LDIyLDAsMjYsNSwyLDEsMiwzMSwxNSwwLDMyOCwxOCwxNiwwLDIsMTIsMiwzMywxMjUsMCw4MCw5MjEsMTAzLDExMCwxOCwxOTUsMjYzNyw5NiwxNiwxMDcxLDE4LDUsMjYsMzk5NCw2LDU4Miw2ODQyLDI5LDE3NjMsNTY4LDgsMzAsMTgsNzgsMTgsMjksMTksNDcsMTcsMywzMiwyMCw2LDE4LDQzMyw0NCwyMTIsNjMsMTI5LDc0LDYsMCw2NywxMiw2NSwxLDIsMCwyOSw2MTM1LDksMTIzNyw0Miw5LDg5MzYsMywyLDYsMiwxLDIsMjkwLDE2LDAsMzAsMiwzLDAsMTUsMyw5LDM5NSwyMzA5LDEwNiw2LDEyLDQsOCw4LDksNTk5MSw4NCwyLDcwLDIsMSwzLDAsMywxLDMsMywyLDExLDIsMCwyLDYsMiw2NCwyLDMsMyw3LDIsNiwyLDI3LDIsMywyLDQsMiwwLDQsNiwyLDMzOSwzLDI0LDIsMjQsMiwzMCwyLDI0LDIsMzAsMiwyNCwyLDMwLDIsMjQsMiwzMCwyLDI0LDIsNywxODQ1LDMwLDcsNSwyNjIsNjEsMTQ3LDQ0LDExLDYsMTcsMCwzMjIsMjksMTksNDMsNDg1LDI3LDIyOSwyOSwzLDAsNDk2LDYsMiwzLDIsMSwyLDE0LDIsMTk2LDYwLDY3LDgsMCwxMjA1LDMsMiwyNiwyLDEsMiwwLDMsMCwyLDksMiwzLDIsMCwyLDAsNywwLDUsMCwyLDAsMiwwLDIsMiwyLDEsMiwwLDMsMCwyLDAsMiwwLDIsMCwyLDAsMiwxLDIsMCwzLDMsMiw2LDIsMywyLDMsMiwwLDIsOSwyLDE2LDYsMiwyLDQsMiwxNiw0NDIxLDQyNzE5LDMzLDQxNTMsNywyMjEsMyw1NzYxLDE1LDc0NzIsMTYsNjIxLDI0NjcsNTQxLDE1MDcsNDkzOCw2LDQxOTFdLENpPVwiXFx1MjAwQ1xcdTIwMERcXHhCN1xcdTAzMDAtXFx1MDM2RlxcdTAzODdcXHUwNDgzLVxcdTA0ODdcXHUwNTkxLVxcdTA1QkRcXHUwNUJGXFx1MDVDMVxcdTA1QzJcXHUwNUM0XFx1MDVDNVxcdTA1QzdcXHUwNjEwLVxcdTA2MUFcXHUwNjRCLVxcdTA2NjlcXHUwNjcwXFx1MDZENi1cXHUwNkRDXFx1MDZERi1cXHUwNkU0XFx1MDZFN1xcdTA2RThcXHUwNkVBLVxcdTA2RURcXHUwNkYwLVxcdTA2RjlcXHUwNzExXFx1MDczMC1cXHUwNzRBXFx1MDdBNi1cXHUwN0IwXFx1MDdDMC1cXHUwN0M5XFx1MDdFQi1cXHUwN0YzXFx1MDdGRFxcdTA4MTYtXFx1MDgxOVxcdTA4MUItXFx1MDgyM1xcdTA4MjUtXFx1MDgyN1xcdTA4MjktXFx1MDgyRFxcdTA4NTktXFx1MDg1QlxcdTA4OTctXFx1MDg5RlxcdTA4Q0EtXFx1MDhFMVxcdTA4RTMtXFx1MDkwM1xcdTA5M0EtXFx1MDkzQ1xcdTA5M0UtXFx1MDk0RlxcdTA5NTEtXFx1MDk1N1xcdTA5NjJcXHUwOTYzXFx1MDk2Ni1cXHUwOTZGXFx1MDk4MS1cXHUwOTgzXFx1MDlCQ1xcdTA5QkUtXFx1MDlDNFxcdTA5QzdcXHUwOUM4XFx1MDlDQi1cXHUwOUNEXFx1MDlEN1xcdTA5RTJcXHUwOUUzXFx1MDlFNi1cXHUwOUVGXFx1MDlGRVxcdTBBMDEtXFx1MEEwM1xcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTFcXHUwQTY2LVxcdTBBNzFcXHUwQTc1XFx1MEE4MS1cXHUwQTgzXFx1MEFCQ1xcdTBBQkUtXFx1MEFDNVxcdTBBQzctXFx1MEFDOVxcdTBBQ0ItXFx1MEFDRFxcdTBBRTJcXHUwQUUzXFx1MEFFNi1cXHUwQUVGXFx1MEFGQS1cXHUwQUZGXFx1MEIwMS1cXHUwQjAzXFx1MEIzQ1xcdTBCM0UtXFx1MEI0NFxcdTBCNDdcXHUwQjQ4XFx1MEI0Qi1cXHUwQjREXFx1MEI1NS1cXHUwQjU3XFx1MEI2MlxcdTBCNjNcXHUwQjY2LVxcdTBCNkZcXHUwQjgyXFx1MEJCRS1cXHUwQkMyXFx1MEJDNi1cXHUwQkM4XFx1MEJDQS1cXHUwQkNEXFx1MEJEN1xcdTBCRTYtXFx1MEJFRlxcdTBDMDAtXFx1MEMwNFxcdTBDM0NcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjJcXHUwQzYzXFx1MEM2Ni1cXHUwQzZGXFx1MEM4MS1cXHUwQzgzXFx1MENCQ1xcdTBDQkUtXFx1MENDNFxcdTBDQzYtXFx1MENDOFxcdTBDQ0EtXFx1MENDRFxcdTBDRDVcXHUwQ0Q2XFx1MENFMlxcdTBDRTNcXHUwQ0U2LVxcdTBDRUZcXHUwQ0YzXFx1MEQwMC1cXHUwRDAzXFx1MEQzQlxcdTBEM0NcXHUwRDNFLVxcdTBENDRcXHUwRDQ2LVxcdTBENDhcXHUwRDRBLVxcdTBENERcXHUwRDU3XFx1MEQ2MlxcdTBENjNcXHUwRDY2LVxcdTBENkZcXHUwRDgxLVxcdTBEODNcXHUwRENBXFx1MERDRi1cXHUwREQ0XFx1MERENlxcdTBERDgtXFx1MERERlxcdTBERTYtXFx1MERFRlxcdTBERjJcXHUwREYzXFx1MEUzMVxcdTBFMzQtXFx1MEUzQVxcdTBFNDctXFx1MEU0RVxcdTBFNTAtXFx1MEU1OVxcdTBFQjFcXHUwRUI0LVxcdTBFQkNcXHUwRUM4LVxcdTBFQ0VcXHUwRUQwLVxcdTBFRDlcXHUwRjE4XFx1MEYxOVxcdTBGMjAtXFx1MEYyOVxcdTBGMzVcXHUwRjM3XFx1MEYzOVxcdTBGM0VcXHUwRjNGXFx1MEY3MS1cXHUwRjg0XFx1MEY4NlxcdTBGODdcXHUwRjhELVxcdTBGOTdcXHUwRjk5LVxcdTBGQkNcXHUwRkM2XFx1MTAyQi1cXHUxMDNFXFx1MTA0MC1cXHUxMDQ5XFx1MTA1Ni1cXHUxMDU5XFx1MTA1RS1cXHUxMDYwXFx1MTA2Mi1cXHUxMDY0XFx1MTA2Ny1cXHUxMDZEXFx1MTA3MS1cXHUxMDc0XFx1MTA4Mi1cXHUxMDhEXFx1MTA4Ri1cXHUxMDlEXFx1MTM1RC1cXHUxMzVGXFx1MTM2OS1cXHUxMzcxXFx1MTcxMi1cXHUxNzE1XFx1MTczMi1cXHUxNzM0XFx1MTc1MlxcdTE3NTNcXHUxNzcyXFx1MTc3M1xcdTE3QjQtXFx1MTdEM1xcdTE3RERcXHUxN0UwLVxcdTE3RTlcXHUxODBCLVxcdTE4MERcXHUxODBGLVxcdTE4MTlcXHUxOEE5XFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MTk0Ni1cXHUxOTRGXFx1MTlEMC1cXHUxOURBXFx1MUExNy1cXHUxQTFCXFx1MUE1NS1cXHUxQTVFXFx1MUE2MC1cXHUxQTdDXFx1MUE3Ri1cXHUxQTg5XFx1MUE5MC1cXHUxQTk5XFx1MUFCMC1cXHUxQUJEXFx1MUFCRi1cXHUxQUNFXFx1MUIwMC1cXHUxQjA0XFx1MUIzNC1cXHUxQjQ0XFx1MUI1MC1cXHUxQjU5XFx1MUI2Qi1cXHUxQjczXFx1MUI4MC1cXHUxQjgyXFx1MUJBMS1cXHUxQkFEXFx1MUJCMC1cXHUxQkI5XFx1MUJFNi1cXHUxQkYzXFx1MUMyNC1cXHUxQzM3XFx1MUM0MC1cXHUxQzQ5XFx1MUM1MC1cXHUxQzU5XFx1MUNEMC1cXHUxQ0QyXFx1MUNENC1cXHUxQ0U4XFx1MUNFRFxcdTFDRjRcXHUxQ0Y3LVxcdTFDRjlcXHUxREMwLVxcdTFERkZcXHUyMDBDXFx1MjAwRFxcdTIwM0ZcXHUyMDQwXFx1MjA1NFxcdTIwRDAtXFx1MjBEQ1xcdTIwRTFcXHUyMEU1LVxcdTIwRjBcXHUyQ0VGLVxcdTJDRjFcXHUyRDdGXFx1MkRFMC1cXHUyREZGXFx1MzAyQS1cXHUzMDJGXFx1MzA5OVxcdTMwOUFcXHUzMEZCXFx1QTYyMC1cXHVBNjI5XFx1QTY2RlxcdUE2NzQtXFx1QTY3RFxcdUE2OUVcXHVBNjlGXFx1QTZGMFxcdUE2RjFcXHVBODAyXFx1QTgwNlxcdUE4MEJcXHVBODIzLVxcdUE4MjdcXHVBODJDXFx1QTg4MFxcdUE4ODFcXHVBOEI0LVxcdUE4QzVcXHVBOEQwLVxcdUE4RDlcXHVBOEUwLVxcdUE4RjFcXHVBOEZGLVxcdUE5MDlcXHVBOTI2LVxcdUE5MkRcXHVBOTQ3LVxcdUE5NTNcXHVBOTgwLVxcdUE5ODNcXHVBOUIzLVxcdUE5QzBcXHVBOUQwLVxcdUE5RDlcXHVBOUU1XFx1QTlGMC1cXHVBOUY5XFx1QUEyOS1cXHVBQTM2XFx1QUE0M1xcdUFBNENcXHVBQTREXFx1QUE1MC1cXHVBQTU5XFx1QUE3Qi1cXHVBQTdEXFx1QUFCMFxcdUFBQjItXFx1QUFCNFxcdUFBQjdcXHVBQUI4XFx1QUFCRVxcdUFBQkZcXHVBQUMxXFx1QUFFQi1cXHVBQUVGXFx1QUFGNVxcdUFBRjZcXHVBQkUzLVxcdUFCRUFcXHVBQkVDXFx1QUJFRFxcdUFCRjAtXFx1QUJGOVxcdUZCMUVcXHVGRTAwLVxcdUZFMEZcXHVGRTIwLVxcdUZFMkZcXHVGRTMzXFx1RkUzNFxcdUZFNEQtXFx1RkU0RlxcdUZGMTAtXFx1RkYxOVxcdUZGM0ZcXHVGRjY1XCIsb3Q9XCJcXHhBQVxceEI1XFx4QkFcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx4RjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzdGXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MkZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MC1cXHUwNTg4XFx1MDVEMC1cXHUwNUVBXFx1MDVFRi1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4NjAtXFx1MDg2QVxcdTA4NzAtXFx1MDg4N1xcdTA4ODktXFx1MDg4RVxcdTA4QTAtXFx1MDhDOVxcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTgwXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MDlGQ1xcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBBRjlcXHUwQjA1LVxcdTBCMENcXHUwQjBGXFx1MEIxMFxcdTBCMTMtXFx1MEIyOFxcdTBCMkEtXFx1MEIzMFxcdTBCMzJcXHUwQjMzXFx1MEIzNS1cXHUwQjM5XFx1MEIzRFxcdTBCNUNcXHUwQjVEXFx1MEI1Ri1cXHUwQjYxXFx1MEI3MVxcdTBCODNcXHUwQjg1LVxcdTBCOEFcXHUwQjhFLVxcdTBCOTBcXHUwQjkyLVxcdTBCOTVcXHUwQjk5XFx1MEI5QVxcdTBCOUNcXHUwQjlFXFx1MEI5RlxcdTBCQTNcXHUwQkE0XFx1MEJBOC1cXHUwQkFBXFx1MEJBRS1cXHUwQkI5XFx1MEJEMFxcdTBDMDUtXFx1MEMwQ1xcdTBDMEUtXFx1MEMxMFxcdTBDMTItXFx1MEMyOFxcdTBDMkEtXFx1MEMzOVxcdTBDM0RcXHUwQzU4LVxcdTBDNUFcXHUwQzVEXFx1MEM2MFxcdTBDNjFcXHUwQzgwXFx1MEM4NS1cXHUwQzhDXFx1MEM4RS1cXHUwQzkwXFx1MEM5Mi1cXHUwQ0E4XFx1MENBQS1cXHUwQ0IzXFx1MENCNS1cXHUwQ0I5XFx1MENCRFxcdTBDRERcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDQtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ1NC1cXHUwRDU2XFx1MEQ1Ri1cXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4Ni1cXHUwRThBXFx1MEU4Qy1cXHUwRUEzXFx1MEVBNVxcdTBFQTctXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y1XFx1MTNGOC1cXHUxM0ZEXFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTZFRS1cXHUxNkY4XFx1MTcwMC1cXHUxNzExXFx1MTcxRi1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzhcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFFXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlCMC1cXHUxOUM5XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0Q1xcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUM4MC1cXHUxQzhBXFx1MUM5MC1cXHUxQ0JBXFx1MUNCRC1cXHUxQ0JGXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YzXFx1MUNGNVxcdTFDRjZcXHUxQ0ZBXFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOC1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxNjAtXFx1MjE4OFxcdTJDMDAtXFx1MkNFNFxcdTJDRUItXFx1MkNFRVxcdTJDRjJcXHUyQ0YzXFx1MkQwMC1cXHUyRDI1XFx1MkQyN1xcdTJEMkRcXHUyRDMwLVxcdTJENjdcXHUyRDZGXFx1MkQ4MC1cXHUyRDk2XFx1MkRBMC1cXHUyREE2XFx1MkRBOC1cXHUyREFFXFx1MkRCMC1cXHUyREI2XFx1MkRCOC1cXHUyREJFXFx1MkRDMC1cXHUyREM2XFx1MkRDOC1cXHUyRENFXFx1MkREMC1cXHUyREQ2XFx1MkREOC1cXHUyRERFXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5Qi1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJGXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJGXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REJGXFx1NEUwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OURcXHVBNkEwLVxcdUE2RUZcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3Q0RcXHVBN0QwXFx1QTdEMVxcdUE3RDNcXHVBN0Q1LVxcdUE3RENcXHVBN0YyLVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QThGRFxcdUE4RkVcXHVBOTBBLVxcdUE5MjVcXHVBOTMwLVxcdUE5NDZcXHVBOTYwLVxcdUE5N0NcXHVBOTg0LVxcdUE5QjJcXHVBOUNGXFx1QTlFMC1cXHVBOUU0XFx1QTlFNi1cXHVBOUVGXFx1QTlGQS1cXHVBOUZFXFx1QUEwMC1cXHVBQTI4XFx1QUE0MC1cXHVBQTQyXFx1QUE0NC1cXHVBQTRCXFx1QUE2MC1cXHVBQTc2XFx1QUE3QVxcdUFBN0UtXFx1QUFBRlxcdUFBQjFcXHVBQUI1XFx1QUFCNlxcdUFBQjktXFx1QUFCRFxcdUFBQzBcXHVBQUMyXFx1QUFEQi1cXHVBQUREXFx1QUFFMC1cXHVBQUVBXFx1QUFGMi1cXHVBQUY0XFx1QUIwMS1cXHVBQjA2XFx1QUIwOS1cXHVBQjBFXFx1QUIxMS1cXHVBQjE2XFx1QUIyMC1cXHVBQjI2XFx1QUIyOC1cXHVBQjJFXFx1QUIzMC1cXHVBQjVBXFx1QUI1Qy1cXHVBQjY5XFx1QUI3MC1cXHVBQkUyXFx1QUMwMC1cXHVEN0EzXFx1RDdCMC1cXHVEN0M2XFx1RDdDQi1cXHVEN0ZCXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XFx1RkIwMC1cXHVGQjA2XFx1RkIxMy1cXHVGQjE3XFx1RkIxRFxcdUZCMUYtXFx1RkIyOFxcdUZCMkEtXFx1RkIzNlxcdUZCMzgtXFx1RkIzQ1xcdUZCM0VcXHVGQjQwXFx1RkI0MVxcdUZCNDNcXHVGQjQ0XFx1RkI0Ni1cXHVGQkIxXFx1RkJEMy1cXHVGRDNEXFx1RkQ1MC1cXHVGRDhGXFx1RkQ5Mi1cXHVGREM3XFx1RkRGMC1cXHVGREZCXFx1RkU3MC1cXHVGRTc0XFx1RkU3Ni1cXHVGRUZDXFx1RkYyMS1cXHVGRjNBXFx1RkY0MS1cXHVGRjVBXFx1RkY2Ni1cXHVGRkJFXFx1RkZDMi1cXHVGRkM3XFx1RkZDQS1cXHVGRkNGXFx1RkZEMi1cXHVGRkQ3XFx1RkZEQS1cXHVGRkRDXCIsQWU9ezM6XCJhYnN0cmFjdCBib29sZWFuIGJ5dGUgY2hhciBjbGFzcyBkb3VibGUgZW51bSBleHBvcnQgZXh0ZW5kcyBmaW5hbCBmbG9hdCBnb3RvIGltcGxlbWVudHMgaW1wb3J0IGludCBpbnRlcmZhY2UgbG9uZyBuYXRpdmUgcGFja2FnZSBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgc2hvcnQgc3RhdGljIHN1cGVyIHN5bmNocm9uaXplZCB0aHJvd3MgdHJhbnNpZW50IHZvbGF0aWxlXCIsNTpcImNsYXNzIGVudW0gZXh0ZW5kcyBzdXBlciBjb25zdCBleHBvcnQgaW1wb3J0XCIsNjpcImVudW1cIixzdHJpY3Q6XCJpbXBsZW1lbnRzIGludGVyZmFjZSBsZXQgcGFja2FnZSBwcml2YXRlIHByb3RlY3RlZCBwdWJsaWMgc3RhdGljIHlpZWxkXCIsc3RyaWN0QmluZDpcImV2YWwgYXJndW1lbnRzXCJ9LFBlPVwiYnJlYWsgY2FzZSBjYXRjaCBjb250aW51ZSBkZWJ1Z2dlciBkZWZhdWx0IGRvIGVsc2UgZmluYWxseSBmb3IgZnVuY3Rpb24gaWYgcmV0dXJuIHN3aXRjaCB0aHJvdyB0cnkgdmFyIHdoaWxlIHdpdGggbnVsbCB0cnVlIGZhbHNlIGluc3RhbmNlb2YgdHlwZW9mIHZvaWQgZGVsZXRlIG5ldyBpbiB0aGlzXCIsX2k9ezU6UGUsXCI1bW9kdWxlXCI6UGUrXCIgZXhwb3J0IGltcG9ydFwiLDY6UGUrXCIgY29uc3QgY2xhc3MgZXh0ZW5kcyBleHBvcnQgaW1wb3J0IHN1cGVyXCJ9LFRpPS9eaW4oc3RhbmNlb2YpPyQvLGtpPW5ldyBSZWdFeHAoXCJbXCIrb3QrXCJdXCIpLEVpPW5ldyBSZWdFeHAoXCJbXCIrb3QrQ2krXCJdXCIpO2Z1bmN0aW9uIE5lKGUsdCl7Zm9yKHZhciBpPTY1NTM2LHM9MDtzPHQubGVuZ3RoO3MrPTIpe2lmKGkrPXRbc10saT5lKXJldHVybiExO2lmKGkrPXRbcysxXSxpPj1lKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIE0oZSx0KXtyZXR1cm4gZTw2NT9lPT09MzY6ZTw5MT8hMDplPDk3P2U9PT05NTplPDEyMz8hMDplPD02NTUzNT9lPj0xNzAmJmtpLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShlKSk6dD09PSExPyExOk5lKGUsbnQpfWZ1bmN0aW9uIEgoZSx0KXtyZXR1cm4gZTw0OD9lPT09MzY6ZTw1OD8hMDplPDY1PyExOmU8OTE/ITA6ZTw5Nz9lPT09OTU6ZTwxMjM/ITA6ZTw9NjU1MzU/ZT49MTcwJiZFaS50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZSkpOnQ9PT0hMT8hMTpOZShlLG50KXx8TmUoZSxTaSl9dmFyIFM9ZnVuY3Rpb24odCxpKXtpPT09dm9pZCAwJiYoaT17fSksdGhpcy5sYWJlbD10LHRoaXMua2V5d29yZD1pLmtleXdvcmQsdGhpcy5iZWZvcmVFeHByPSEhaS5iZWZvcmVFeHByLHRoaXMuc3RhcnRzRXhwcj0hIWkuc3RhcnRzRXhwcix0aGlzLmlzTG9vcD0hIWkuaXNMb29wLHRoaXMuaXNBc3NpZ249ISFpLmlzQXNzaWduLHRoaXMucHJlZml4PSEhaS5wcmVmaXgsdGhpcy5wb3N0Zml4PSEhaS5wb3N0Zml4LHRoaXMuYmlub3A9aS5iaW5vcHx8bnVsbCx0aGlzLnVwZGF0ZUNvbnRleHQ9bnVsbH07ZnVuY3Rpb24gUChlLHQpe3JldHVybiBuZXcgUyhlLHtiZWZvcmVFeHByOiEwLGJpbm9wOnR9KX12YXIgST17YmVmb3JlRXhwcjohMH0sQT17c3RhcnRzRXhwcjohMH0sT2U9e307ZnVuY3Rpb24gYihlLHQpe3JldHVybiB0PT09dm9pZCAwJiYodD17fSksdC5rZXl3b3JkPWUsT2VbZV09bmV3IFMoZSx0KX12YXIgYT17bnVtOm5ldyBTKFwibnVtXCIsQSkscmVnZXhwOm5ldyBTKFwicmVnZXhwXCIsQSksc3RyaW5nOm5ldyBTKFwic3RyaW5nXCIsQSksbmFtZTpuZXcgUyhcIm5hbWVcIixBKSxwcml2YXRlSWQ6bmV3IFMoXCJwcml2YXRlSWRcIixBKSxlb2Y6bmV3IFMoXCJlb2ZcIiksYnJhY2tldEw6bmV3IFMoXCJbXCIse2JlZm9yZUV4cHI6ITAsc3RhcnRzRXhwcjohMH0pLGJyYWNrZXRSOm5ldyBTKFwiXVwiKSxicmFjZUw6bmV3IFMoXCJ7XCIse2JlZm9yZUV4cHI6ITAsc3RhcnRzRXhwcjohMH0pLGJyYWNlUjpuZXcgUyhcIn1cIikscGFyZW5MOm5ldyBTKFwiKFwiLHtiZWZvcmVFeHByOiEwLHN0YXJ0c0V4cHI6ITB9KSxwYXJlblI6bmV3IFMoXCIpXCIpLGNvbW1hOm5ldyBTKFwiLFwiLEkpLHNlbWk6bmV3IFMoXCI7XCIsSSksY29sb246bmV3IFMoXCI6XCIsSSksZG90Om5ldyBTKFwiLlwiKSxxdWVzdGlvbjpuZXcgUyhcIj9cIixJKSxxdWVzdGlvbkRvdDpuZXcgUyhcIj8uXCIpLGFycm93Om5ldyBTKFwiPT5cIixJKSx0ZW1wbGF0ZTpuZXcgUyhcInRlbXBsYXRlXCIpLGludmFsaWRUZW1wbGF0ZTpuZXcgUyhcImludmFsaWRUZW1wbGF0ZVwiKSxlbGxpcHNpczpuZXcgUyhcIi4uLlwiLEkpLGJhY2tRdW90ZTpuZXcgUyhcImBcIixBKSxkb2xsYXJCcmFjZUw6bmV3IFMoXCIke1wiLHtiZWZvcmVFeHByOiEwLHN0YXJ0c0V4cHI6ITB9KSxlcTpuZXcgUyhcIj1cIix7YmVmb3JlRXhwcjohMCxpc0Fzc2lnbjohMH0pLGFzc2lnbjpuZXcgUyhcIl89XCIse2JlZm9yZUV4cHI6ITAsaXNBc3NpZ246ITB9KSxpbmNEZWM6bmV3IFMoXCIrKy8tLVwiLHtwcmVmaXg6ITAscG9zdGZpeDohMCxzdGFydHNFeHByOiEwfSkscHJlZml4Om5ldyBTKFwiIS9+XCIse2JlZm9yZUV4cHI6ITAscHJlZml4OiEwLHN0YXJ0c0V4cHI6ITB9KSxsb2dpY2FsT1I6UChcInx8XCIsMSksbG9naWNhbEFORDpQKFwiJiZcIiwyKSxiaXR3aXNlT1I6UChcInxcIiwzKSxiaXR3aXNlWE9SOlAoXCJeXCIsNCksYml0d2lzZUFORDpQKFwiJlwiLDUpLGVxdWFsaXR5OlAoXCI9PS8hPS89PT0vIT09XCIsNikscmVsYXRpb25hbDpQKFwiPC8+Lzw9Lz49XCIsNyksYml0U2hpZnQ6UChcIjw8Lz4+Lz4+PlwiLDgpLHBsdXNNaW46bmV3IFMoXCIrLy1cIix7YmVmb3JlRXhwcjohMCxiaW5vcDo5LHByZWZpeDohMCxzdGFydHNFeHByOiEwfSksbW9kdWxvOlAoXCIlXCIsMTApLHN0YXI6UChcIipcIiwxMCksc2xhc2g6UChcIi9cIiwxMCksc3RhcnN0YXI6bmV3IFMoXCIqKlwiLHtiZWZvcmVFeHByOiEwfSksY29hbGVzY2U6UChcIj8/XCIsMSksX2JyZWFrOmIoXCJicmVha1wiKSxfY2FzZTpiKFwiY2FzZVwiLEkpLF9jYXRjaDpiKFwiY2F0Y2hcIiksX2NvbnRpbnVlOmIoXCJjb250aW51ZVwiKSxfZGVidWdnZXI6YihcImRlYnVnZ2VyXCIpLF9kZWZhdWx0OmIoXCJkZWZhdWx0XCIsSSksX2RvOmIoXCJkb1wiLHtpc0xvb3A6ITAsYmVmb3JlRXhwcjohMH0pLF9lbHNlOmIoXCJlbHNlXCIsSSksX2ZpbmFsbHk6YihcImZpbmFsbHlcIiksX2ZvcjpiKFwiZm9yXCIse2lzTG9vcDohMH0pLF9mdW5jdGlvbjpiKFwiZnVuY3Rpb25cIixBKSxfaWY6YihcImlmXCIpLF9yZXR1cm46YihcInJldHVyblwiLEkpLF9zd2l0Y2g6YihcInN3aXRjaFwiKSxfdGhyb3c6YihcInRocm93XCIsSSksX3RyeTpiKFwidHJ5XCIpLF92YXI6YihcInZhclwiKSxfY29uc3Q6YihcImNvbnN0XCIpLF93aGlsZTpiKFwid2hpbGVcIix7aXNMb29wOiEwfSksX3dpdGg6YihcIndpdGhcIiksX25ldzpiKFwibmV3XCIse2JlZm9yZUV4cHI6ITAsc3RhcnRzRXhwcjohMH0pLF90aGlzOmIoXCJ0aGlzXCIsQSksX3N1cGVyOmIoXCJzdXBlclwiLEEpLF9jbGFzczpiKFwiY2xhc3NcIixBKSxfZXh0ZW5kczpiKFwiZXh0ZW5kc1wiLEkpLF9leHBvcnQ6YihcImV4cG9ydFwiKSxfaW1wb3J0OmIoXCJpbXBvcnRcIixBKSxfbnVsbDpiKFwibnVsbFwiLEEpLF90cnVlOmIoXCJ0cnVlXCIsQSksX2ZhbHNlOmIoXCJmYWxzZVwiLEEpLF9pbjpiKFwiaW5cIix7YmVmb3JlRXhwcjohMCxiaW5vcDo3fSksX2luc3RhbmNlb2Y6YihcImluc3RhbmNlb2ZcIix7YmVmb3JlRXhwcjohMCxiaW5vcDo3fSksX3R5cGVvZjpiKFwidHlwZW9mXCIse2JlZm9yZUV4cHI6ITAscHJlZml4OiEwLHN0YXJ0c0V4cHI6ITB9KSxfdm9pZDpiKFwidm9pZFwiLHtiZWZvcmVFeHByOiEwLHByZWZpeDohMCxzdGFydHNFeHByOiEwfSksX2RlbGV0ZTpiKFwiZGVsZXRlXCIse2JlZm9yZUV4cHI6ITAscHJlZml4OiEwLHN0YXJ0c0V4cHI6ITB9KX0sTD0vXFxyXFxuP3xcXG58XFx1MjAyOHxcXHUyMDI5Lyx3aT1uZXcgUmVnRXhwKEwuc291cmNlLFwiZ1wiKTtmdW5jdGlvbiBRKGUpe3JldHVybiBlPT09MTB8fGU9PT0xM3x8ZT09PTgyMzJ8fGU9PT04MjMzfWZ1bmN0aW9uIHV0KGUsdCxpKXtpPT09dm9pZCAwJiYoaT1lLmxlbmd0aCk7Zm9yKHZhciBzPXQ7czxpO3MrKyl7dmFyIHI9ZS5jaGFyQ29kZUF0KHMpO2lmKFEocikpcmV0dXJuIHM8aS0xJiZyPT09MTMmJmUuY2hhckNvZGVBdChzKzEpPT09MTA/cysyOnMrMX1yZXR1cm4tMX12YXIgcHQ9L1tcXHUxNjgwXFx1MjAwMC1cXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1ZmVmZl0vLE49Lyg/Olxcc3xcXC9cXC8uKnxcXC9cXCpbXl0qP1xcKlxcLykqL2csaHQ9T2JqZWN0LnByb3RvdHlwZSxBaT1odC5oYXNPd25Qcm9wZXJ0eSxQaT1odC50b1N0cmluZyxZPU9iamVjdC5oYXNPd258fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIEFpLmNhbGwoZSx0KX0sdHQ9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuIFBpLmNhbGwoZSk9PT1cIltvYmplY3QgQXJyYXldXCJ9LGl0PU9iamVjdC5jcmVhdGUobnVsbCk7ZnVuY3Rpb24gSyhlKXtyZXR1cm4gaXRbZV18fChpdFtlXT1uZXcgUmVnRXhwKFwiXig/OlwiK2UucmVwbGFjZSgvIC9nLFwifFwiKStcIikkXCIpKX1mdW5jdGlvbiBVKGUpe3JldHVybiBlPD02NTUzNT9TdHJpbmcuZnJvbUNoYXJDb2RlKGUpOihlLT02NTUzNixTdHJpbmcuZnJvbUNoYXJDb2RlKChlPj4xMCkrNTUyOTYsKGUmMTAyMykrNTYzMjApKX12YXIgSWk9Lyg/OltcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS8saWU9ZnVuY3Rpb24odCxpKXt0aGlzLmxpbmU9dCx0aGlzLmNvbHVtbj1pfTtpZS5wcm90b3R5cGUub2Zmc2V0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaWUodGhpcy5saW5lLHRoaXMuY29sdW1uK3QpfTt2YXIgeGU9ZnVuY3Rpb24odCxpLHMpe3RoaXMuc3RhcnQ9aSx0aGlzLmVuZD1zLHQuc291cmNlRmlsZSE9PW51bGwmJih0aGlzLnNvdXJjZT10LnNvdXJjZUZpbGUpfTtmdW5jdGlvbiBjdChlLHQpe2Zvcih2YXIgaT0xLHM9MDs7KXt2YXIgcj11dChlLHMsdCk7aWYocjwwKXJldHVybiBuZXcgaWUoaSx0LXMpOysraSxzPXJ9fXZhciBWZT17ZWNtYVZlcnNpb246bnVsbCxzb3VyY2VUeXBlOlwic2NyaXB0XCIsb25JbnNlcnRlZFNlbWljb2xvbjpudWxsLG9uVHJhaWxpbmdDb21tYTpudWxsLGFsbG93UmVzZXJ2ZWQ6bnVsbCxhbGxvd1JldHVybk91dHNpZGVGdW5jdGlvbjohMSxhbGxvd0ltcG9ydEV4cG9ydEV2ZXJ5d2hlcmU6ITEsYWxsb3dBd2FpdE91dHNpZGVGdW5jdGlvbjpudWxsLGFsbG93U3VwZXJPdXRzaWRlTWV0aG9kOm51bGwsYWxsb3dIYXNoQmFuZzohMSxjaGVja1ByaXZhdGVGaWVsZHM6ITAsbG9jYXRpb25zOiExLG9uVG9rZW46bnVsbCxvbkNvbW1lbnQ6bnVsbCxyYW5nZXM6ITEscHJvZ3JhbTpudWxsLHNvdXJjZUZpbGU6bnVsbCxkaXJlY3RTb3VyY2VGaWxlOm51bGwscHJlc2VydmVQYXJlbnM6ITF9LHN0PSExO2Z1bmN0aW9uIE5pKGUpe3ZhciB0PXt9O2Zvcih2YXIgaSBpbiBWZSl0W2ldPWUmJlkoZSxpKT9lW2ldOlZlW2ldO2lmKHQuZWNtYVZlcnNpb249PT1cImxhdGVzdFwiP3QuZWNtYVZlcnNpb249MWU4OnQuZWNtYVZlcnNpb249PW51bGw/KCFzdCYmdHlwZW9mIGNvbnNvbGU9PVwib2JqZWN0XCImJmNvbnNvbGUud2FybiYmKHN0PSEwLGNvbnNvbGUud2FybihgU2luY2UgQWNvcm4gOC4wLjAsIG9wdGlvbnMuZWNtYVZlcnNpb24gaXMgcmVxdWlyZWQuXG5EZWZhdWx0aW5nIHRvIDIwMjAsIGJ1dCB0aGlzIHdpbGwgc3RvcCB3b3JraW5nIGluIHRoZSBmdXR1cmUuYCkpLHQuZWNtYVZlcnNpb249MTEpOnQuZWNtYVZlcnNpb24+PTIwMTUmJih0LmVjbWFWZXJzaW9uLT0yMDA5KSx0LmFsbG93UmVzZXJ2ZWQ9PW51bGwmJih0LmFsbG93UmVzZXJ2ZWQ9dC5lY21hVmVyc2lvbjw1KSwoIWV8fGUuYWxsb3dIYXNoQmFuZz09bnVsbCkmJih0LmFsbG93SGFzaEJhbmc9dC5lY21hVmVyc2lvbj49MTQpLHR0KHQub25Ub2tlbikpe3ZhciBzPXQub25Ub2tlbjt0Lm9uVG9rZW49ZnVuY3Rpb24ocil7cmV0dXJuIHMucHVzaChyKX19cmV0dXJuIHR0KHQub25Db21tZW50KSYmKHQub25Db21tZW50PVZpKHQsdC5vbkNvbW1lbnQpKSx0fWZ1bmN0aW9uIFZpKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGkscyxyLG4sbyx1KXt2YXIgcD17dHlwZTppP1wiQmxvY2tcIjpcIkxpbmVcIix2YWx1ZTpzLHN0YXJ0OnIsZW5kOm59O2UubG9jYXRpb25zJiYocC5sb2M9bmV3IHhlKHRoaXMsbyx1KSksZS5yYW5nZXMmJihwLnJhbmdlPVtyLG5dKSx0LnB1c2gocCl9fXZhciBzZT0xLFo9MixCZT00LGx0PTgsZnQ9MTYsZHQ9MzIsRGU9NjQsbXQ9MTI4LHJlPTI1NixGZT1zZXxafHJlO2Z1bmN0aW9uIGplKGUsdCl7cmV0dXJuIFp8KGU/QmU6MCl8KHQ/bHQ6MCl9dmFyIGxlPTAsTWU9MSxHPTIseHQ9Myx5dD00LGd0PTUsVD1mdW5jdGlvbih0LGkscyl7dGhpcy5vcHRpb25zPXQ9TmkodCksdGhpcy5zb3VyY2VGaWxlPXQuc291cmNlRmlsZSx0aGlzLmtleXdvcmRzPUsoX2lbdC5lY21hVmVyc2lvbj49Nj82OnQuc291cmNlVHlwZT09PVwibW9kdWxlXCI/XCI1bW9kdWxlXCI6NV0pO3ZhciByPVwiXCI7dC5hbGxvd1Jlc2VydmVkIT09ITAmJihyPUFlW3QuZWNtYVZlcnNpb24+PTY/Njp0LmVjbWFWZXJzaW9uPT09NT81OjNdLHQuc291cmNlVHlwZT09PVwibW9kdWxlXCImJihyKz1cIiBhd2FpdFwiKSksdGhpcy5yZXNlcnZlZFdvcmRzPUsocik7dmFyIG49KHI/citcIiBcIjpcIlwiKStBZS5zdHJpY3Q7dGhpcy5yZXNlcnZlZFdvcmRzU3RyaWN0PUsobiksdGhpcy5yZXNlcnZlZFdvcmRzU3RyaWN0QmluZD1LKG4rXCIgXCIrQWUuc3RyaWN0QmluZCksdGhpcy5pbnB1dD1TdHJpbmcoaSksdGhpcy5jb250YWluc0VzYz0hMSxzPyh0aGlzLnBvcz1zLHRoaXMubGluZVN0YXJ0PXRoaXMuaW5wdXQubGFzdEluZGV4T2YoYFxuYCxzLTEpKzEsdGhpcy5jdXJMaW5lPXRoaXMuaW5wdXQuc2xpY2UoMCx0aGlzLmxpbmVTdGFydCkuc3BsaXQoTCkubGVuZ3RoKToodGhpcy5wb3M9dGhpcy5saW5lU3RhcnQ9MCx0aGlzLmN1ckxpbmU9MSksdGhpcy50eXBlPWEuZW9mLHRoaXMudmFsdWU9bnVsbCx0aGlzLnN0YXJ0PXRoaXMuZW5kPXRoaXMucG9zLHRoaXMuc3RhcnRMb2M9dGhpcy5lbmRMb2M9dGhpcy5jdXJQb3NpdGlvbigpLHRoaXMubGFzdFRva0VuZExvYz10aGlzLmxhc3RUb2tTdGFydExvYz1udWxsLHRoaXMubGFzdFRva1N0YXJ0PXRoaXMubGFzdFRva0VuZD10aGlzLnBvcyx0aGlzLmNvbnRleHQ9dGhpcy5pbml0aWFsQ29udGV4dCgpLHRoaXMuZXhwckFsbG93ZWQ9ITAsdGhpcy5pbk1vZHVsZT10LnNvdXJjZVR5cGU9PT1cIm1vZHVsZVwiLHRoaXMuc3RyaWN0PXRoaXMuaW5Nb2R1bGV8fHRoaXMuc3RyaWN0RGlyZWN0aXZlKHRoaXMucG9zKSx0aGlzLnBvdGVudGlhbEFycm93QXQ9LTEsdGhpcy5wb3RlbnRpYWxBcnJvd0luRm9yQXdhaXQ9ITEsdGhpcy55aWVsZFBvcz10aGlzLmF3YWl0UG9zPXRoaXMuYXdhaXRJZGVudFBvcz0wLHRoaXMubGFiZWxzPVtdLHRoaXMudW5kZWZpbmVkRXhwb3J0cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMucG9zPT09MCYmdC5hbGxvd0hhc2hCYW5nJiZ0aGlzLmlucHV0LnNsaWNlKDAsMik9PT1cIiMhXCImJnRoaXMuc2tpcExpbmVDb21tZW50KDIpLHRoaXMuc2NvcGVTdGFjaz1bXSx0aGlzLmVudGVyU2NvcGUoc2UpLHRoaXMucmVnZXhwU3RhdGU9bnVsbCx0aGlzLnByaXZhdGVOYW1lU3RhY2s9W119LEY9e2luRnVuY3Rpb246e2NvbmZpZ3VyYWJsZTohMH0saW5HZW5lcmF0b3I6e2NvbmZpZ3VyYWJsZTohMH0saW5Bc3luYzp7Y29uZmlndXJhYmxlOiEwfSxjYW5Bd2FpdDp7Y29uZmlndXJhYmxlOiEwfSxhbGxvd1N1cGVyOntjb25maWd1cmFibGU6ITB9LGFsbG93RGlyZWN0U3VwZXI6e2NvbmZpZ3VyYWJsZTohMH0sdHJlYXRGdW5jdGlvbnNBc1Zhcjp7Y29uZmlndXJhYmxlOiEwfSxhbGxvd05ld0RvdFRhcmdldDp7Y29uZmlndXJhYmxlOiEwfSxpbkNsYXNzU3RhdGljQmxvY2s6e2NvbmZpZ3VyYWJsZTohMH19O1QucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnByb2dyYW18fHRoaXMuc3RhcnROb2RlKCk7cmV0dXJuIHRoaXMubmV4dFRva2VuKCksdGhpcy5wYXJzZVRvcExldmVsKHQpfTtGLmluRnVuY3Rpb24uZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuY3VycmVudFZhclNjb3BlKCkuZmxhZ3MmWik+MH07Ri5pbkdlbmVyYXRvci5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4odGhpcy5jdXJyZW50VmFyU2NvcGUoKS5mbGFncyZsdCk+MCYmIXRoaXMuY3VycmVudFZhclNjb3BlKCkuaW5DbGFzc0ZpZWxkSW5pdH07Ri5pbkFzeW5jLmdldD1mdW5jdGlvbigpe3JldHVybih0aGlzLmN1cnJlbnRWYXJTY29wZSgpLmZsYWdzJkJlKT4wJiYhdGhpcy5jdXJyZW50VmFyU2NvcGUoKS5pbkNsYXNzRmllbGRJbml0fTtGLmNhbkF3YWl0LmdldD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnNjb3BlU3RhY2subGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciB0PXRoaXMuc2NvcGVTdGFja1tlXTtpZih0LmluQ2xhc3NGaWVsZEluaXR8fHQuZmxhZ3MmcmUpcmV0dXJuITE7aWYodC5mbGFncyZaKXJldHVybih0LmZsYWdzJkJlKT4wfXJldHVybiB0aGlzLmluTW9kdWxlJiZ0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTEzfHx0aGlzLm9wdGlvbnMuYWxsb3dBd2FpdE91dHNpZGVGdW5jdGlvbn07Ri5hbGxvd1N1cGVyLmdldD1mdW5jdGlvbigpe3ZhciBlPXRoaXMuY3VycmVudFRoaXNTY29wZSgpLHQ9ZS5mbGFncyxpPWUuaW5DbGFzc0ZpZWxkSW5pdDtyZXR1cm4odCZEZSk+MHx8aXx8dGhpcy5vcHRpb25zLmFsbG93U3VwZXJPdXRzaWRlTWV0aG9kfTtGLmFsbG93RGlyZWN0U3VwZXIuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuY3VycmVudFRoaXNTY29wZSgpLmZsYWdzJm10KT4wfTtGLnRyZWF0RnVuY3Rpb25zQXNWYXIuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJlYXRGdW5jdGlvbnNBc1ZhckluU2NvcGUodGhpcy5jdXJyZW50U2NvcGUoKSl9O0YuYWxsb3dOZXdEb3RUYXJnZXQuZ2V0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jdXJyZW50VGhpc1Njb3BlKCksdD1lLmZsYWdzLGk9ZS5pbkNsYXNzRmllbGRJbml0O3JldHVybih0JihafHJlKSk+MHx8aX07Ri5pbkNsYXNzU3RhdGljQmxvY2suZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMuY3VycmVudFZhclNjb3BlKCkuZmxhZ3MmcmUpPjB9O1QuZXh0ZW5kPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGk9YXJndW1lbnRzLmxlbmd0aDtpLS07KXRbaV09YXJndW1lbnRzW2ldO2Zvcih2YXIgcz10aGlzLHI9MDtyPHQubGVuZ3RoO3IrKylzPXRbcl0ocyk7cmV0dXJuIHN9O1QucGFyc2U9ZnVuY3Rpb24odCxpKXtyZXR1cm4gbmV3IHRoaXMoaSx0KS5wYXJzZSgpfTtULnBhcnNlRXhwcmVzc2lvbkF0PWZ1bmN0aW9uKHQsaSxzKXt2YXIgcj1uZXcgdGhpcyhzLHQsaSk7cmV0dXJuIHIubmV4dFRva2VuKCksci5wYXJzZUV4cHJlc3Npb24oKX07VC50b2tlbml6ZXI9ZnVuY3Rpb24odCxpKXtyZXR1cm4gbmV3IHRoaXMoaSx0KX07T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVC5wcm90b3R5cGUsRik7dmFyIGs9VC5wcm90b3R5cGUsTGk9L14oPzonKCg/OlxcXFxbXl18W14nXFxcXF0pKj8pJ3xcIigoPzpcXFxcW15dfFteXCJcXFxcXSkqPylcIikvO2suc3RyaWN0RGlyZWN0aXZlPWZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbjw1KXJldHVybiExO2Zvcig7Oyl7Ti5sYXN0SW5kZXg9ZSxlKz1OLmV4ZWModGhpcy5pbnB1dClbMF0ubGVuZ3RoO3ZhciB0PUxpLmV4ZWModGhpcy5pbnB1dC5zbGljZShlKSk7aWYoIXQpcmV0dXJuITE7aWYoKHRbMV18fHRbMl0pPT09XCJ1c2Ugc3RyaWN0XCIpe04ubGFzdEluZGV4PWUrdFswXS5sZW5ndGg7dmFyIGk9Ti5leGVjKHRoaXMuaW5wdXQpLHM9aS5pbmRleCtpWzBdLmxlbmd0aCxyPXRoaXMuaW5wdXQuY2hhckF0KHMpO3JldHVybiByPT09XCI7XCJ8fHI9PT1cIn1cInx8TC50ZXN0KGlbMF0pJiYhKC9bKGAuWytcXC0vKiU8Pj0sP14mXS8udGVzdChyKXx8cj09PVwiIVwiJiZ0aGlzLmlucHV0LmNoYXJBdChzKzEpPT09XCI9XCIpfWUrPXRbMF0ubGVuZ3RoLE4ubGFzdEluZGV4PWUsZSs9Ti5leGVjKHRoaXMuaW5wdXQpWzBdLmxlbmd0aCx0aGlzLmlucHV0W2VdPT09XCI7XCImJmUrK319O2suZWF0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnR5cGU9PT1lPyh0aGlzLm5leHQoKSwhMCk6ITF9O2suaXNDb250ZXh0dWFsPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnR5cGU9PT1hLm5hbWUmJnRoaXMudmFsdWU9PT1lJiYhdGhpcy5jb250YWluc0VzY307ay5lYXRDb250ZXh0dWFsPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmlzQ29udGV4dHVhbChlKT8odGhpcy5uZXh0KCksITApOiExfTtrLmV4cGVjdENvbnRleHR1YWw9ZnVuY3Rpb24oZSl7dGhpcy5lYXRDb250ZXh0dWFsKGUpfHx0aGlzLnVuZXhwZWN0ZWQoKX07ay5jYW5JbnNlcnRTZW1pY29sb249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50eXBlPT09YS5lb2Z8fHRoaXMudHlwZT09PWEuYnJhY2VSfHxMLnRlc3QodGhpcy5pbnB1dC5zbGljZSh0aGlzLmxhc3RUb2tFbmQsdGhpcy5zdGFydCkpfTtrLmluc2VydFNlbWljb2xvbj1mdW5jdGlvbigpe2lmKHRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkpcmV0dXJuIHRoaXMub3B0aW9ucy5vbkluc2VydGVkU2VtaWNvbG9uJiZ0aGlzLm9wdGlvbnMub25JbnNlcnRlZFNlbWljb2xvbih0aGlzLmxhc3RUb2tFbmQsdGhpcy5sYXN0VG9rRW5kTG9jKSwhMH07ay5zZW1pY29sb249ZnVuY3Rpb24oKXshdGhpcy5lYXQoYS5zZW1pKSYmIXRoaXMuaW5zZXJ0U2VtaWNvbG9uKCkmJnRoaXMudW5leHBlY3RlZCgpfTtrLmFmdGVyVHJhaWxpbmdDb21tYT1mdW5jdGlvbihlLHQpe2lmKHRoaXMudHlwZT09PWUpcmV0dXJuIHRoaXMub3B0aW9ucy5vblRyYWlsaW5nQ29tbWEmJnRoaXMub3B0aW9ucy5vblRyYWlsaW5nQ29tbWEodGhpcy5sYXN0VG9rU3RhcnQsdGhpcy5sYXN0VG9rU3RhcnRMb2MpLHR8fHRoaXMubmV4dCgpLCEwfTtrLmV4cGVjdD1mdW5jdGlvbihlKXt0aGlzLmVhdChlKXx8dGhpcy51bmV4cGVjdGVkKCl9O2sudW5leHBlY3RlZD1mdW5jdGlvbihlKXt0aGlzLnJhaXNlKGU/P3RoaXMuc3RhcnQsXCJVbmV4cGVjdGVkIHRva2VuXCIpfTt2YXIgeWU9ZnVuY3Rpb24oKXt0aGlzLnNob3J0aGFuZEFzc2lnbj10aGlzLnRyYWlsaW5nQ29tbWE9dGhpcy5wYXJlbnRoZXNpemVkQXNzaWduPXRoaXMucGFyZW50aGVzaXplZEJpbmQ9dGhpcy5kb3VibGVQcm90bz0tMX07ay5jaGVja1BhdHRlcm5FcnJvcnM9ZnVuY3Rpb24oZSx0KXtpZihlKXtlLnRyYWlsaW5nQ29tbWE+LTEmJnRoaXMucmFpc2VSZWNvdmVyYWJsZShlLnRyYWlsaW5nQ29tbWEsXCJDb21tYSBpcyBub3QgcGVybWl0dGVkIGFmdGVyIHRoZSByZXN0IGVsZW1lbnRcIik7dmFyIGk9dD9lLnBhcmVudGhlc2l6ZWRBc3NpZ246ZS5wYXJlbnRoZXNpemVkQmluZDtpPi0xJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUoaSx0P1wiQXNzaWduaW5nIHRvIHJ2YWx1ZVwiOlwiUGFyZW50aGVzaXplZCBwYXR0ZXJuXCIpfX07ay5jaGVja0V4cHJlc3Npb25FcnJvcnM9ZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm4hMTt2YXIgaT1lLnNob3J0aGFuZEFzc2lnbixzPWUuZG91YmxlUHJvdG87aWYoIXQpcmV0dXJuIGk+PTB8fHM+PTA7aT49MCYmdGhpcy5yYWlzZShpLFwiU2hvcnRoYW5kIHByb3BlcnR5IGFzc2lnbm1lbnRzIGFyZSB2YWxpZCBvbmx5IGluIGRlc3RydWN0dXJpbmcgcGF0dGVybnNcIikscz49MCYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHMsXCJSZWRlZmluaXRpb24gb2YgX19wcm90b19fIHByb3BlcnR5XCIpfTtrLmNoZWNrWWllbGRBd2FpdEluRGVmYXVsdFBhcmFtcz1mdW5jdGlvbigpe3RoaXMueWllbGRQb3MmJighdGhpcy5hd2FpdFBvc3x8dGhpcy55aWVsZFBvczx0aGlzLmF3YWl0UG9zKSYmdGhpcy5yYWlzZSh0aGlzLnlpZWxkUG9zLFwiWWllbGQgZXhwcmVzc2lvbiBjYW5ub3QgYmUgYSBkZWZhdWx0IHZhbHVlXCIpLHRoaXMuYXdhaXRQb3MmJnRoaXMucmFpc2UodGhpcy5hd2FpdFBvcyxcIkF3YWl0IGV4cHJlc3Npb24gY2Fubm90IGJlIGEgZGVmYXVsdCB2YWx1ZVwiKX07ay5pc1NpbXBsZUFzc2lnblRhcmdldD1mdW5jdGlvbihlKXtyZXR1cm4gZS50eXBlPT09XCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiP3RoaXMuaXNTaW1wbGVBc3NpZ25UYXJnZXQoZS5leHByZXNzaW9uKTplLnR5cGU9PT1cIklkZW50aWZpZXJcInx8ZS50eXBlPT09XCJNZW1iZXJFeHByZXNzaW9uXCJ9O3ZhciBsPVQucHJvdG90eXBlO2wucGFyc2VUb3BMZXZlbD1mdW5jdGlvbihlKXt2YXIgdD1PYmplY3QuY3JlYXRlKG51bGwpO2ZvcihlLmJvZHl8fChlLmJvZHk9W10pO3RoaXMudHlwZSE9PWEuZW9mOyl7dmFyIGk9dGhpcy5wYXJzZVN0YXRlbWVudChudWxsLCEwLHQpO2UuYm9keS5wdXNoKGkpfWlmKHRoaXMuaW5Nb2R1bGUpZm9yKHZhciBzPTAscj1PYmplY3Qua2V5cyh0aGlzLnVuZGVmaW5lZEV4cG9ydHMpO3M8ci5sZW5ndGg7cys9MSl7dmFyIG49cltzXTt0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy51bmRlZmluZWRFeHBvcnRzW25dLnN0YXJ0LFwiRXhwb3J0ICdcIituK1wiJyBpcyBub3QgZGVmaW5lZFwiKX1yZXR1cm4gdGhpcy5hZGFwdERpcmVjdGl2ZVByb2xvZ3VlKGUuYm9keSksdGhpcy5uZXh0KCksZS5zb3VyY2VUeXBlPXRoaXMub3B0aW9ucy5zb3VyY2VUeXBlLHRoaXMuZmluaXNoTm9kZShlLFwiUHJvZ3JhbVwiKX07dmFyIFVlPXtraW5kOlwibG9vcFwifSxSaT17a2luZDpcInN3aXRjaFwifTtsLmlzTGV0PWZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbjw2fHwhdGhpcy5pc0NvbnRleHR1YWwoXCJsZXRcIikpcmV0dXJuITE7Ti5sYXN0SW5kZXg9dGhpcy5wb3M7dmFyIHQ9Ti5leGVjKHRoaXMuaW5wdXQpLGk9dGhpcy5wb3MrdFswXS5sZW5ndGgscz10aGlzLmlucHV0LmNoYXJDb2RlQXQoaSk7aWYocz09PTkxfHxzPT09OTIpcmV0dXJuITA7aWYoZSlyZXR1cm4hMTtpZihzPT09MTIzfHxzPjU1Mjk1JiZzPDU2MzIwKXJldHVybiEwO2lmKE0ocywhMCkpe2Zvcih2YXIgcj1pKzE7SChzPXRoaXMuaW5wdXQuY2hhckNvZGVBdChyKSwhMCk7KSsrcjtpZihzPT09OTJ8fHM+NTUyOTUmJnM8NTYzMjApcmV0dXJuITA7dmFyIG49dGhpcy5pbnB1dC5zbGljZShpLHIpO2lmKCFUaS50ZXN0KG4pKXJldHVybiEwfXJldHVybiExfTtsLmlzQXN5bmNGdW5jdGlvbj1mdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbjw4fHwhdGhpcy5pc0NvbnRleHR1YWwoXCJhc3luY1wiKSlyZXR1cm4hMTtOLmxhc3RJbmRleD10aGlzLnBvczt2YXIgZT1OLmV4ZWModGhpcy5pbnB1dCksdD10aGlzLnBvcytlWzBdLmxlbmd0aCxpO3JldHVybiFMLnRlc3QodGhpcy5pbnB1dC5zbGljZSh0aGlzLnBvcyx0KSkmJnRoaXMuaW5wdXQuc2xpY2UodCx0KzgpPT09XCJmdW5jdGlvblwiJiYodCs4PT09dGhpcy5pbnB1dC5sZW5ndGh8fCEoSChpPXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0KzgpKXx8aT41NTI5NSYmaTw1NjMyMCkpfTtsLnBhcnNlU3RhdGVtZW50PWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz10aGlzLnR5cGUscj10aGlzLnN0YXJ0Tm9kZSgpLG47c3dpdGNoKHRoaXMuaXNMZXQoZSkmJihzPWEuX3ZhcixuPVwibGV0XCIpLHMpe2Nhc2UgYS5fYnJlYWs6Y2FzZSBhLl9jb250aW51ZTpyZXR1cm4gdGhpcy5wYXJzZUJyZWFrQ29udGludWVTdGF0ZW1lbnQocixzLmtleXdvcmQpO2Nhc2UgYS5fZGVidWdnZXI6cmV0dXJuIHRoaXMucGFyc2VEZWJ1Z2dlclN0YXRlbWVudChyKTtjYXNlIGEuX2RvOnJldHVybiB0aGlzLnBhcnNlRG9TdGF0ZW1lbnQocik7Y2FzZSBhLl9mb3I6cmV0dXJuIHRoaXMucGFyc2VGb3JTdGF0ZW1lbnQocik7Y2FzZSBhLl9mdW5jdGlvbjpyZXR1cm4gZSYmKHRoaXMuc3RyaWN0fHxlIT09XCJpZlwiJiZlIT09XCJsYWJlbFwiKSYmdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj02JiZ0aGlzLnVuZXhwZWN0ZWQoKSx0aGlzLnBhcnNlRnVuY3Rpb25TdGF0ZW1lbnQociwhMSwhZSk7Y2FzZSBhLl9jbGFzczpyZXR1cm4gZSYmdGhpcy51bmV4cGVjdGVkKCksdGhpcy5wYXJzZUNsYXNzKHIsITApO2Nhc2UgYS5faWY6cmV0dXJuIHRoaXMucGFyc2VJZlN0YXRlbWVudChyKTtjYXNlIGEuX3JldHVybjpyZXR1cm4gdGhpcy5wYXJzZVJldHVyblN0YXRlbWVudChyKTtjYXNlIGEuX3N3aXRjaDpyZXR1cm4gdGhpcy5wYXJzZVN3aXRjaFN0YXRlbWVudChyKTtjYXNlIGEuX3Rocm93OnJldHVybiB0aGlzLnBhcnNlVGhyb3dTdGF0ZW1lbnQocik7Y2FzZSBhLl90cnk6cmV0dXJuIHRoaXMucGFyc2VUcnlTdGF0ZW1lbnQocik7Y2FzZSBhLl9jb25zdDpjYXNlIGEuX3ZhcjpyZXR1cm4gbj1ufHx0aGlzLnZhbHVlLGUmJm4hPT1cInZhclwiJiZ0aGlzLnVuZXhwZWN0ZWQoKSx0aGlzLnBhcnNlVmFyU3RhdGVtZW50KHIsbik7Y2FzZSBhLl93aGlsZTpyZXR1cm4gdGhpcy5wYXJzZVdoaWxlU3RhdGVtZW50KHIpO2Nhc2UgYS5fd2l0aDpyZXR1cm4gdGhpcy5wYXJzZVdpdGhTdGF0ZW1lbnQocik7Y2FzZSBhLmJyYWNlTDpyZXR1cm4gdGhpcy5wYXJzZUJsb2NrKCEwLHIpO2Nhc2UgYS5zZW1pOnJldHVybiB0aGlzLnBhcnNlRW1wdHlTdGF0ZW1lbnQocik7Y2FzZSBhLl9leHBvcnQ6Y2FzZSBhLl9pbXBvcnQ6aWYodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPjEwJiZzPT09YS5faW1wb3J0KXtOLmxhc3RJbmRleD10aGlzLnBvczt2YXIgbz1OLmV4ZWModGhpcy5pbnB1dCksdT10aGlzLnBvcytvWzBdLmxlbmd0aCxwPXRoaXMuaW5wdXQuY2hhckNvZGVBdCh1KTtpZihwPT09NDB8fHA9PT00NilyZXR1cm4gdGhpcy5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQocix0aGlzLnBhcnNlRXhwcmVzc2lvbigpKX1yZXR1cm4gdGhpcy5vcHRpb25zLmFsbG93SW1wb3J0RXhwb3J0RXZlcnl3aGVyZXx8KHR8fHRoaXMucmFpc2UodGhpcy5zdGFydCxcIidpbXBvcnQnIGFuZCAnZXhwb3J0JyBtYXkgb25seSBhcHBlYXIgYXQgdGhlIHRvcCBsZXZlbFwiKSx0aGlzLmluTW9kdWxlfHx0aGlzLnJhaXNlKHRoaXMuc3RhcnQsXCInaW1wb3J0JyBhbmQgJ2V4cG9ydCcgbWF5IGFwcGVhciBvbmx5IHdpdGggJ3NvdXJjZVR5cGU6IG1vZHVsZSdcIikpLHM9PT1hLl9pbXBvcnQ/dGhpcy5wYXJzZUltcG9ydChyKTp0aGlzLnBhcnNlRXhwb3J0KHIsaSk7ZGVmYXVsdDppZih0aGlzLmlzQXN5bmNGdW5jdGlvbigpKXJldHVybiBlJiZ0aGlzLnVuZXhwZWN0ZWQoKSx0aGlzLm5leHQoKSx0aGlzLnBhcnNlRnVuY3Rpb25TdGF0ZW1lbnQociwhMCwhZSk7dmFyIGQ9dGhpcy52YWx1ZSxmPXRoaXMucGFyc2VFeHByZXNzaW9uKCk7cmV0dXJuIHM9PT1hLm5hbWUmJmYudHlwZT09PVwiSWRlbnRpZmllclwiJiZ0aGlzLmVhdChhLmNvbG9uKT90aGlzLnBhcnNlTGFiZWxlZFN0YXRlbWVudChyLGQsZixlKTp0aGlzLnBhcnNlRXhwcmVzc2lvblN0YXRlbWVudChyLGYpfX07bC5wYXJzZUJyZWFrQ29udGludWVTdGF0ZW1lbnQ9ZnVuY3Rpb24oZSx0KXt2YXIgaT10PT09XCJicmVha1wiO3RoaXMubmV4dCgpLHRoaXMuZWF0KGEuc2VtaSl8fHRoaXMuaW5zZXJ0U2VtaWNvbG9uKCk/ZS5sYWJlbD1udWxsOnRoaXMudHlwZSE9PWEubmFtZT90aGlzLnVuZXhwZWN0ZWQoKTooZS5sYWJlbD10aGlzLnBhcnNlSWRlbnQoKSx0aGlzLnNlbWljb2xvbigpKTtmb3IodmFyIHM9MDtzPHRoaXMubGFiZWxzLmxlbmd0aDsrK3Mpe3ZhciByPXRoaXMubGFiZWxzW3NdO2lmKChlLmxhYmVsPT1udWxsfHxyLm5hbWU9PT1lLmxhYmVsLm5hbWUpJiYoci5raW5kIT1udWxsJiYoaXx8ci5raW5kPT09XCJsb29wXCIpfHxlLmxhYmVsJiZpKSlicmVha31yZXR1cm4gcz09PXRoaXMubGFiZWxzLmxlbmd0aCYmdGhpcy5yYWlzZShlLnN0YXJ0LFwiVW5zeW50YWN0aWMgXCIrdCksdGhpcy5maW5pc2hOb2RlKGUsaT9cIkJyZWFrU3RhdGVtZW50XCI6XCJDb250aW51ZVN0YXRlbWVudFwiKX07bC5wYXJzZURlYnVnZ2VyU3RhdGVtZW50PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm5leHQoKSx0aGlzLnNlbWljb2xvbigpLHRoaXMuZmluaXNoTm9kZShlLFwiRGVidWdnZXJTdGF0ZW1lbnRcIil9O2wucGFyc2VEb1N0YXRlbWVudD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5uZXh0KCksdGhpcy5sYWJlbHMucHVzaChVZSksZS5ib2R5PXRoaXMucGFyc2VTdGF0ZW1lbnQoXCJkb1wiKSx0aGlzLmxhYmVscy5wb3AoKSx0aGlzLmV4cGVjdChhLl93aGlsZSksZS50ZXN0PXRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKSx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTY/dGhpcy5lYXQoYS5zZW1pKTp0aGlzLnNlbWljb2xvbigpLHRoaXMuZmluaXNoTm9kZShlLFwiRG9XaGlsZVN0YXRlbWVudFwiKX07bC5wYXJzZUZvclN0YXRlbWVudD1mdW5jdGlvbihlKXt0aGlzLm5leHQoKTt2YXIgdD10aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTkmJnRoaXMuY2FuQXdhaXQmJnRoaXMuZWF0Q29udGV4dHVhbChcImF3YWl0XCIpP3RoaXMubGFzdFRva1N0YXJ0Oi0xO2lmKHRoaXMubGFiZWxzLnB1c2goVWUpLHRoaXMuZW50ZXJTY29wZSgwKSx0aGlzLmV4cGVjdChhLnBhcmVuTCksdGhpcy50eXBlPT09YS5zZW1pKXJldHVybiB0Pi0xJiZ0aGlzLnVuZXhwZWN0ZWQodCksdGhpcy5wYXJzZUZvcihlLG51bGwpO3ZhciBpPXRoaXMuaXNMZXQoKTtpZih0aGlzLnR5cGU9PT1hLl92YXJ8fHRoaXMudHlwZT09PWEuX2NvbnN0fHxpKXt2YXIgcz10aGlzLnN0YXJ0Tm9kZSgpLHI9aT9cImxldFwiOnRoaXMudmFsdWU7cmV0dXJuIHRoaXMubmV4dCgpLHRoaXMucGFyc2VWYXIocywhMCxyKSx0aGlzLmZpbmlzaE5vZGUocyxcIlZhcmlhYmxlRGVjbGFyYXRpb25cIiksKHRoaXMudHlwZT09PWEuX2lufHx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTYmJnRoaXMuaXNDb250ZXh0dWFsKFwib2ZcIikpJiZzLmRlY2xhcmF0aW9ucy5sZW5ndGg9PT0xPyh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTkmJih0aGlzLnR5cGU9PT1hLl9pbj90Pi0xJiZ0aGlzLnVuZXhwZWN0ZWQodCk6ZS5hd2FpdD10Pi0xKSx0aGlzLnBhcnNlRm9ySW4oZSxzKSk6KHQ+LTEmJnRoaXMudW5leHBlY3RlZCh0KSx0aGlzLnBhcnNlRm9yKGUscykpfXZhciBuPXRoaXMuaXNDb250ZXh0dWFsKFwibGV0XCIpLG89ITEsdT10aGlzLmNvbnRhaW5zRXNjLHA9bmV3IHllLGQ9dGhpcy5zdGFydCxmPXQ+LTE/dGhpcy5wYXJzZUV4cHJTdWJzY3JpcHRzKHAsXCJhd2FpdFwiKTp0aGlzLnBhcnNlRXhwcmVzc2lvbighMCxwKTtyZXR1cm4gdGhpcy50eXBlPT09YS5faW58fChvPXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NiYmdGhpcy5pc0NvbnRleHR1YWwoXCJvZlwiKSk/KHQ+LTE/KHRoaXMudHlwZT09PWEuX2luJiZ0aGlzLnVuZXhwZWN0ZWQodCksZS5hd2FpdD0hMCk6byYmdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj04JiYoZi5zdGFydD09PWQmJiF1JiZmLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmZi5uYW1lPT09XCJhc3luY1wiP3RoaXMudW5leHBlY3RlZCgpOnRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OSYmKGUuYXdhaXQ9ITEpKSxuJiZvJiZ0aGlzLnJhaXNlKGYuc3RhcnQsXCJUaGUgbGVmdC1oYW5kIHNpZGUgb2YgYSBmb3Itb2YgbG9vcCBtYXkgbm90IHN0YXJ0IHdpdGggJ2xldCcuXCIpLHRoaXMudG9Bc3NpZ25hYmxlKGYsITEscCksdGhpcy5jaGVja0xWYWxQYXR0ZXJuKGYpLHRoaXMucGFyc2VGb3JJbihlLGYpKToodGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnMocCwhMCksdD4tMSYmdGhpcy51bmV4cGVjdGVkKHQpLHRoaXMucGFyc2VGb3IoZSxmKSl9O2wucGFyc2VGdW5jdGlvblN0YXRlbWVudD1mdW5jdGlvbihlLHQsaSl7cmV0dXJuIHRoaXMubmV4dCgpLHRoaXMucGFyc2VGdW5jdGlvbihlLHRlfChpPzA6TGUpLCExLHQpfTtsLnBhcnNlSWZTdGF0ZW1lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubmV4dCgpLGUudGVzdD10aGlzLnBhcnNlUGFyZW5FeHByZXNzaW9uKCksZS5jb25zZXF1ZW50PXRoaXMucGFyc2VTdGF0ZW1lbnQoXCJpZlwiKSxlLmFsdGVybmF0ZT10aGlzLmVhdChhLl9lbHNlKT90aGlzLnBhcnNlU3RhdGVtZW50KFwiaWZcIik6bnVsbCx0aGlzLmZpbmlzaE5vZGUoZSxcIklmU3RhdGVtZW50XCIpfTtsLnBhcnNlUmV0dXJuU3RhdGVtZW50PWZ1bmN0aW9uKGUpe3JldHVybiF0aGlzLmluRnVuY3Rpb24mJiF0aGlzLm9wdGlvbnMuYWxsb3dSZXR1cm5PdXRzaWRlRnVuY3Rpb24mJnRoaXMucmFpc2UodGhpcy5zdGFydCxcIidyZXR1cm4nIG91dHNpZGUgb2YgZnVuY3Rpb25cIiksdGhpcy5uZXh0KCksdGhpcy5lYXQoYS5zZW1pKXx8dGhpcy5pbnNlcnRTZW1pY29sb24oKT9lLmFyZ3VtZW50PW51bGw6KGUuYXJndW1lbnQ9dGhpcy5wYXJzZUV4cHJlc3Npb24oKSx0aGlzLnNlbWljb2xvbigpKSx0aGlzLmZpbmlzaE5vZGUoZSxcIlJldHVyblN0YXRlbWVudFwiKX07bC5wYXJzZVN3aXRjaFN0YXRlbWVudD1mdW5jdGlvbihlKXt0aGlzLm5leHQoKSxlLmRpc2NyaW1pbmFudD10aGlzLnBhcnNlUGFyZW5FeHByZXNzaW9uKCksZS5jYXNlcz1bXSx0aGlzLmV4cGVjdChhLmJyYWNlTCksdGhpcy5sYWJlbHMucHVzaChSaSksdGhpcy5lbnRlclNjb3BlKDApO2Zvcih2YXIgdCxpPSExO3RoaXMudHlwZSE9PWEuYnJhY2VSOylpZih0aGlzLnR5cGU9PT1hLl9jYXNlfHx0aGlzLnR5cGU9PT1hLl9kZWZhdWx0KXt2YXIgcz10aGlzLnR5cGU9PT1hLl9jYXNlO3QmJnRoaXMuZmluaXNoTm9kZSh0LFwiU3dpdGNoQ2FzZVwiKSxlLmNhc2VzLnB1c2godD10aGlzLnN0YXJ0Tm9kZSgpKSx0LmNvbnNlcXVlbnQ9W10sdGhpcy5uZXh0KCkscz90LnRlc3Q9dGhpcy5wYXJzZUV4cHJlc3Npb24oKTooaSYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMubGFzdFRva1N0YXJ0LFwiTXVsdGlwbGUgZGVmYXVsdCBjbGF1c2VzXCIpLGk9ITAsdC50ZXN0PW51bGwpLHRoaXMuZXhwZWN0KGEuY29sb24pfWVsc2UgdHx8dGhpcy51bmV4cGVjdGVkKCksdC5jb25zZXF1ZW50LnB1c2godGhpcy5wYXJzZVN0YXRlbWVudChudWxsKSk7cmV0dXJuIHRoaXMuZXhpdFNjb3BlKCksdCYmdGhpcy5maW5pc2hOb2RlKHQsXCJTd2l0Y2hDYXNlXCIpLHRoaXMubmV4dCgpLHRoaXMubGFiZWxzLnBvcCgpLHRoaXMuZmluaXNoTm9kZShlLFwiU3dpdGNoU3RhdGVtZW50XCIpfTtsLnBhcnNlVGhyb3dTdGF0ZW1lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubmV4dCgpLEwudGVzdCh0aGlzLmlucHV0LnNsaWNlKHRoaXMubGFzdFRva0VuZCx0aGlzLnN0YXJ0KSkmJnRoaXMucmFpc2UodGhpcy5sYXN0VG9rRW5kLFwiSWxsZWdhbCBuZXdsaW5lIGFmdGVyIHRocm93XCIpLGUuYXJndW1lbnQ9dGhpcy5wYXJzZUV4cHJlc3Npb24oKSx0aGlzLnNlbWljb2xvbigpLHRoaXMuZmluaXNoTm9kZShlLFwiVGhyb3dTdGF0ZW1lbnRcIil9O3ZhciBPaT1bXTtsLnBhcnNlQ2F0Y2hDbGF1c2VQYXJhbT1mdW5jdGlvbigpe3ZhciBlPXRoaXMucGFyc2VCaW5kaW5nQXRvbSgpLHQ9ZS50eXBlPT09XCJJZGVudGlmaWVyXCI7cmV0dXJuIHRoaXMuZW50ZXJTY29wZSh0P2R0OjApLHRoaXMuY2hlY2tMVmFsUGF0dGVybihlLHQ/eXQ6RyksdGhpcy5leHBlY3QoYS5wYXJlblIpLGV9O2wucGFyc2VUcnlTdGF0ZW1lbnQ9ZnVuY3Rpb24oZSl7aWYodGhpcy5uZXh0KCksZS5ibG9jaz10aGlzLnBhcnNlQmxvY2soKSxlLmhhbmRsZXI9bnVsbCx0aGlzLnR5cGU9PT1hLl9jYXRjaCl7dmFyIHQ9dGhpcy5zdGFydE5vZGUoKTt0aGlzLm5leHQoKSx0aGlzLmVhdChhLnBhcmVuTCk/dC5wYXJhbT10aGlzLnBhcnNlQ2F0Y2hDbGF1c2VQYXJhbSgpOih0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb248MTAmJnRoaXMudW5leHBlY3RlZCgpLHQucGFyYW09bnVsbCx0aGlzLmVudGVyU2NvcGUoMCkpLHQuYm9keT10aGlzLnBhcnNlQmxvY2soITEpLHRoaXMuZXhpdFNjb3BlKCksZS5oYW5kbGVyPXRoaXMuZmluaXNoTm9kZSh0LFwiQ2F0Y2hDbGF1c2VcIil9cmV0dXJuIGUuZmluYWxpemVyPXRoaXMuZWF0KGEuX2ZpbmFsbHkpP3RoaXMucGFyc2VCbG9jaygpOm51bGwsIWUuaGFuZGxlciYmIWUuZmluYWxpemVyJiZ0aGlzLnJhaXNlKGUuc3RhcnQsXCJNaXNzaW5nIGNhdGNoIG9yIGZpbmFsbHkgY2xhdXNlXCIpLHRoaXMuZmluaXNoTm9kZShlLFwiVHJ5U3RhdGVtZW50XCIpfTtsLnBhcnNlVmFyU3RhdGVtZW50PWZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gdGhpcy5uZXh0KCksdGhpcy5wYXJzZVZhcihlLCExLHQsaSksdGhpcy5zZW1pY29sb24oKSx0aGlzLmZpbmlzaE5vZGUoZSxcIlZhcmlhYmxlRGVjbGFyYXRpb25cIil9O2wucGFyc2VXaGlsZVN0YXRlbWVudD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5uZXh0KCksZS50ZXN0PXRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKSx0aGlzLmxhYmVscy5wdXNoKFVlKSxlLmJvZHk9dGhpcy5wYXJzZVN0YXRlbWVudChcIndoaWxlXCIpLHRoaXMubGFiZWxzLnBvcCgpLHRoaXMuZmluaXNoTm9kZShlLFwiV2hpbGVTdGF0ZW1lbnRcIil9O2wucGFyc2VXaXRoU3RhdGVtZW50PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnN0cmljdCYmdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LFwiJ3dpdGgnIGluIHN0cmljdCBtb2RlXCIpLHRoaXMubmV4dCgpLGUub2JqZWN0PXRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKSxlLmJvZHk9dGhpcy5wYXJzZVN0YXRlbWVudChcIndpdGhcIiksdGhpcy5maW5pc2hOb2RlKGUsXCJXaXRoU3RhdGVtZW50XCIpfTtsLnBhcnNlRW1wdHlTdGF0ZW1lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubmV4dCgpLHRoaXMuZmluaXNoTm9kZShlLFwiRW1wdHlTdGF0ZW1lbnRcIil9O2wucGFyc2VMYWJlbGVkU3RhdGVtZW50PWZ1bmN0aW9uKGUsdCxpLHMpe2Zvcih2YXIgcj0wLG49dGhpcy5sYWJlbHM7cjxuLmxlbmd0aDtyKz0xKXt2YXIgbz1uW3JdO28ubmFtZT09PXQmJnRoaXMucmFpc2UoaS5zdGFydCxcIkxhYmVsICdcIit0K1wiJyBpcyBhbHJlYWR5IGRlY2xhcmVkXCIpfWZvcih2YXIgdT10aGlzLnR5cGUuaXNMb29wP1wibG9vcFwiOnRoaXMudHlwZT09PWEuX3N3aXRjaD9cInN3aXRjaFwiOm51bGwscD10aGlzLmxhYmVscy5sZW5ndGgtMTtwPj0wO3AtLSl7dmFyIGQ9dGhpcy5sYWJlbHNbcF07aWYoZC5zdGF0ZW1lbnRTdGFydD09PWUuc3RhcnQpZC5zdGF0ZW1lbnRTdGFydD10aGlzLnN0YXJ0LGQua2luZD11O2Vsc2UgYnJlYWt9cmV0dXJuIHRoaXMubGFiZWxzLnB1c2goe25hbWU6dCxraW5kOnUsc3RhdGVtZW50U3RhcnQ6dGhpcy5zdGFydH0pLGUuYm9keT10aGlzLnBhcnNlU3RhdGVtZW50KHM/cy5pbmRleE9mKFwibGFiZWxcIik9PT0tMT9zK1wibGFiZWxcIjpzOlwibGFiZWxcIiksdGhpcy5sYWJlbHMucG9wKCksZS5sYWJlbD1pLHRoaXMuZmluaXNoTm9kZShlLFwiTGFiZWxlZFN0YXRlbWVudFwiKX07bC5wYXJzZUV4cHJlc3Npb25TdGF0ZW1lbnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5leHByZXNzaW9uPXQsdGhpcy5zZW1pY29sb24oKSx0aGlzLmZpbmlzaE5vZGUoZSxcIkV4cHJlc3Npb25TdGF0ZW1lbnRcIil9O2wucGFyc2VCbG9jaz1mdW5jdGlvbihlLHQsaSl7Zm9yKGU9PT12b2lkIDAmJihlPSEwKSx0PT09dm9pZCAwJiYodD10aGlzLnN0YXJ0Tm9kZSgpKSx0LmJvZHk9W10sdGhpcy5leHBlY3QoYS5icmFjZUwpLGUmJnRoaXMuZW50ZXJTY29wZSgwKTt0aGlzLnR5cGUhPT1hLmJyYWNlUjspe3ZhciBzPXRoaXMucGFyc2VTdGF0ZW1lbnQobnVsbCk7dC5ib2R5LnB1c2gocyl9cmV0dXJuIGkmJih0aGlzLnN0cmljdD0hMSksdGhpcy5uZXh0KCksZSYmdGhpcy5leGl0U2NvcGUoKSx0aGlzLmZpbmlzaE5vZGUodCxcIkJsb2NrU3RhdGVtZW50XCIpfTtsLnBhcnNlRm9yPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuaW5pdD10LHRoaXMuZXhwZWN0KGEuc2VtaSksZS50ZXN0PXRoaXMudHlwZT09PWEuc2VtaT9udWxsOnRoaXMucGFyc2VFeHByZXNzaW9uKCksdGhpcy5leHBlY3QoYS5zZW1pKSxlLnVwZGF0ZT10aGlzLnR5cGU9PT1hLnBhcmVuUj9udWxsOnRoaXMucGFyc2VFeHByZXNzaW9uKCksdGhpcy5leHBlY3QoYS5wYXJlblIpLGUuYm9keT10aGlzLnBhcnNlU3RhdGVtZW50KFwiZm9yXCIpLHRoaXMuZXhpdFNjb3BlKCksdGhpcy5sYWJlbHMucG9wKCksdGhpcy5maW5pc2hOb2RlKGUsXCJGb3JTdGF0ZW1lbnRcIil9O2wucGFyc2VGb3JJbj1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMudHlwZT09PWEuX2luO3JldHVybiB0aGlzLm5leHQoKSx0LnR5cGU9PT1cIlZhcmlhYmxlRGVjbGFyYXRpb25cIiYmdC5kZWNsYXJhdGlvbnNbMF0uaW5pdCE9bnVsbCYmKCFpfHx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb248OHx8dGhpcy5zdHJpY3R8fHQua2luZCE9PVwidmFyXCJ8fHQuZGVjbGFyYXRpb25zWzBdLmlkLnR5cGUhPT1cIklkZW50aWZpZXJcIikmJnRoaXMucmFpc2UodC5zdGFydCwoaT9cImZvci1pblwiOlwiZm9yLW9mXCIpK1wiIGxvb3AgdmFyaWFibGUgZGVjbGFyYXRpb24gbWF5IG5vdCBoYXZlIGFuIGluaXRpYWxpemVyXCIpLGUubGVmdD10LGUucmlnaHQ9aT90aGlzLnBhcnNlRXhwcmVzc2lvbigpOnRoaXMucGFyc2VNYXliZUFzc2lnbigpLHRoaXMuZXhwZWN0KGEucGFyZW5SKSxlLmJvZHk9dGhpcy5wYXJzZVN0YXRlbWVudChcImZvclwiKSx0aGlzLmV4aXRTY29wZSgpLHRoaXMubGFiZWxzLnBvcCgpLHRoaXMuZmluaXNoTm9kZShlLGk/XCJGb3JJblN0YXRlbWVudFwiOlwiRm9yT2ZTdGF0ZW1lbnRcIil9O2wucGFyc2VWYXI9ZnVuY3Rpb24oZSx0LGkscyl7Zm9yKGUuZGVjbGFyYXRpb25zPVtdLGUua2luZD1pOzspe3ZhciByPXRoaXMuc3RhcnROb2RlKCk7aWYodGhpcy5wYXJzZVZhcklkKHIsaSksdGhpcy5lYXQoYS5lcSk/ci5pbml0PXRoaXMucGFyc2VNYXliZUFzc2lnbih0KTohcyYmaT09PVwiY29uc3RcIiYmISh0aGlzLnR5cGU9PT1hLl9pbnx8dGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj02JiZ0aGlzLmlzQ29udGV4dHVhbChcIm9mXCIpKT90aGlzLnVuZXhwZWN0ZWQoKTohcyYmci5pZC50eXBlIT09XCJJZGVudGlmaWVyXCImJiEodCYmKHRoaXMudHlwZT09PWEuX2lufHx0aGlzLmlzQ29udGV4dHVhbChcIm9mXCIpKSk/dGhpcy5yYWlzZSh0aGlzLmxhc3RUb2tFbmQsXCJDb21wbGV4IGJpbmRpbmcgcGF0dGVybnMgcmVxdWlyZSBhbiBpbml0aWFsaXphdGlvbiB2YWx1ZVwiKTpyLmluaXQ9bnVsbCxlLmRlY2xhcmF0aW9ucy5wdXNoKHRoaXMuZmluaXNoTm9kZShyLFwiVmFyaWFibGVEZWNsYXJhdG9yXCIpKSwhdGhpcy5lYXQoYS5jb21tYSkpYnJlYWt9cmV0dXJuIGV9O2wucGFyc2VWYXJJZD1mdW5jdGlvbihlLHQpe2UuaWQ9dGhpcy5wYXJzZUJpbmRpbmdBdG9tKCksdGhpcy5jaGVja0xWYWxQYXR0ZXJuKGUuaWQsdD09PVwidmFyXCI/TWU6RywhMSl9O3ZhciB0ZT0xLExlPTIsdnQ9NDtsLnBhcnNlRnVuY3Rpb249ZnVuY3Rpb24oZSx0LGkscyxyKXt0aGlzLmluaXRGdW5jdGlvbihlKSwodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj05fHx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTYmJiFzKSYmKHRoaXMudHlwZT09PWEuc3RhciYmdCZMZSYmdGhpcy51bmV4cGVjdGVkKCksZS5nZW5lcmF0b3I9dGhpcy5lYXQoYS5zdGFyKSksdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj04JiYoZS5hc3luYz0hIXMpLHQmdGUmJihlLmlkPXQmdnQmJnRoaXMudHlwZSE9PWEubmFtZT9udWxsOnRoaXMucGFyc2VJZGVudCgpLGUuaWQmJiEodCZMZSkmJnRoaXMuY2hlY2tMVmFsU2ltcGxlKGUuaWQsdGhpcy5zdHJpY3R8fGUuZ2VuZXJhdG9yfHxlLmFzeW5jP3RoaXMudHJlYXRGdW5jdGlvbnNBc1Zhcj9NZTpHOnh0KSk7dmFyIG49dGhpcy55aWVsZFBvcyxvPXRoaXMuYXdhaXRQb3MsdT10aGlzLmF3YWl0SWRlbnRQb3M7cmV0dXJuIHRoaXMueWllbGRQb3M9MCx0aGlzLmF3YWl0UG9zPTAsdGhpcy5hd2FpdElkZW50UG9zPTAsdGhpcy5lbnRlclNjb3BlKGplKGUuYXN5bmMsZS5nZW5lcmF0b3IpKSx0JnRlfHwoZS5pZD10aGlzLnR5cGU9PT1hLm5hbWU/dGhpcy5wYXJzZUlkZW50KCk6bnVsbCksdGhpcy5wYXJzZUZ1bmN0aW9uUGFyYW1zKGUpLHRoaXMucGFyc2VGdW5jdGlvbkJvZHkoZSxpLCExLHIpLHRoaXMueWllbGRQb3M9bix0aGlzLmF3YWl0UG9zPW8sdGhpcy5hd2FpdElkZW50UG9zPXUsdGhpcy5maW5pc2hOb2RlKGUsdCZ0ZT9cIkZ1bmN0aW9uRGVjbGFyYXRpb25cIjpcIkZ1bmN0aW9uRXhwcmVzc2lvblwiKX07bC5wYXJzZUZ1bmN0aW9uUGFyYW1zPWZ1bmN0aW9uKGUpe3RoaXMuZXhwZWN0KGEucGFyZW5MKSxlLnBhcmFtcz10aGlzLnBhcnNlQmluZGluZ0xpc3QoYS5wYXJlblIsITEsdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj04KSx0aGlzLmNoZWNrWWllbGRBd2FpdEluRGVmYXVsdFBhcmFtcygpfTtsLnBhcnNlQ2xhc3M9ZnVuY3Rpb24oZSx0KXt0aGlzLm5leHQoKTt2YXIgaT10aGlzLnN0cmljdDt0aGlzLnN0cmljdD0hMCx0aGlzLnBhcnNlQ2xhc3NJZChlLHQpLHRoaXMucGFyc2VDbGFzc1N1cGVyKGUpO3ZhciBzPXRoaXMuZW50ZXJDbGFzc0JvZHkoKSxyPXRoaXMuc3RhcnROb2RlKCksbj0hMTtmb3Ioci5ib2R5PVtdLHRoaXMuZXhwZWN0KGEuYnJhY2VMKTt0aGlzLnR5cGUhPT1hLmJyYWNlUjspe3ZhciBvPXRoaXMucGFyc2VDbGFzc0VsZW1lbnQoZS5zdXBlckNsYXNzIT09bnVsbCk7byYmKHIuYm9keS5wdXNoKG8pLG8udHlwZT09PVwiTWV0aG9kRGVmaW5pdGlvblwiJiZvLmtpbmQ9PT1cImNvbnN0cnVjdG9yXCI/KG4mJnRoaXMucmFpc2VSZWNvdmVyYWJsZShvLnN0YXJ0LFwiRHVwbGljYXRlIGNvbnN0cnVjdG9yIGluIHRoZSBzYW1lIGNsYXNzXCIpLG49ITApOm8ua2V5JiZvLmtleS50eXBlPT09XCJQcml2YXRlSWRlbnRpZmllclwiJiZCaShzLG8pJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUoby5rZXkuc3RhcnQsXCJJZGVudGlmaWVyICcjXCIrby5rZXkubmFtZStcIicgaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZFwiKSl9cmV0dXJuIHRoaXMuc3RyaWN0PWksdGhpcy5uZXh0KCksZS5ib2R5PXRoaXMuZmluaXNoTm9kZShyLFwiQ2xhc3NCb2R5XCIpLHRoaXMuZXhpdENsYXNzQm9keSgpLHRoaXMuZmluaXNoTm9kZShlLHQ/XCJDbGFzc0RlY2xhcmF0aW9uXCI6XCJDbGFzc0V4cHJlc3Npb25cIil9O2wucGFyc2VDbGFzc0VsZW1lbnQ9ZnVuY3Rpb24oZSl7aWYodGhpcy5lYXQoYS5zZW1pKSlyZXR1cm4gbnVsbDt2YXIgdD10aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24saT10aGlzLnN0YXJ0Tm9kZSgpLHM9XCJcIixyPSExLG49ITEsbz1cIm1ldGhvZFwiLHU9ITE7aWYodGhpcy5lYXRDb250ZXh0dWFsKFwic3RhdGljXCIpKXtpZih0Pj0xMyYmdGhpcy5lYXQoYS5icmFjZUwpKXJldHVybiB0aGlzLnBhcnNlQ2xhc3NTdGF0aWNCbG9jayhpKSxpO3RoaXMuaXNDbGFzc0VsZW1lbnROYW1lU3RhcnQoKXx8dGhpcy50eXBlPT09YS5zdGFyP3U9ITA6cz1cInN0YXRpY1wifWlmKGkuc3RhdGljPXUsIXMmJnQ+PTgmJnRoaXMuZWF0Q29udGV4dHVhbChcImFzeW5jXCIpJiYoKHRoaXMuaXNDbGFzc0VsZW1lbnROYW1lU3RhcnQoKXx8dGhpcy50eXBlPT09YS5zdGFyKSYmIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCk/bj0hMDpzPVwiYXN5bmNcIiksIXMmJih0Pj05fHwhbikmJnRoaXMuZWF0KGEuc3RhcikmJihyPSEwKSwhcyYmIW4mJiFyKXt2YXIgcD10aGlzLnZhbHVlOyh0aGlzLmVhdENvbnRleHR1YWwoXCJnZXRcIil8fHRoaXMuZWF0Q29udGV4dHVhbChcInNldFwiKSkmJih0aGlzLmlzQ2xhc3NFbGVtZW50TmFtZVN0YXJ0KCk/bz1wOnM9cCl9aWYocz8oaS5jb21wdXRlZD0hMSxpLmtleT10aGlzLnN0YXJ0Tm9kZUF0KHRoaXMubGFzdFRva1N0YXJ0LHRoaXMubGFzdFRva1N0YXJ0TG9jKSxpLmtleS5uYW1lPXMsdGhpcy5maW5pc2hOb2RlKGkua2V5LFwiSWRlbnRpZmllclwiKSk6dGhpcy5wYXJzZUNsYXNzRWxlbWVudE5hbWUoaSksdDwxM3x8dGhpcy50eXBlPT09YS5wYXJlbkx8fG8hPT1cIm1ldGhvZFwifHxyfHxuKXt2YXIgZD0haS5zdGF0aWMmJmZlKGksXCJjb25zdHJ1Y3RvclwiKSxmPWQmJmU7ZCYmbyE9PVwibWV0aG9kXCImJnRoaXMucmFpc2UoaS5rZXkuc3RhcnQsXCJDb25zdHJ1Y3RvciBjYW4ndCBoYXZlIGdldC9zZXQgbW9kaWZpZXJcIiksaS5raW5kPWQ/XCJjb25zdHJ1Y3RvclwiOm8sdGhpcy5wYXJzZUNsYXNzTWV0aG9kKGkscixuLGYpfWVsc2UgdGhpcy5wYXJzZUNsYXNzRmllbGQoaSk7cmV0dXJuIGl9O2wuaXNDbGFzc0VsZW1lbnROYW1lU3RhcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50eXBlPT09YS5uYW1lfHx0aGlzLnR5cGU9PT1hLnByaXZhdGVJZHx8dGhpcy50eXBlPT09YS5udW18fHRoaXMudHlwZT09PWEuc3RyaW5nfHx0aGlzLnR5cGU9PT1hLmJyYWNrZXRMfHx0aGlzLnR5cGUua2V5d29yZH07bC5wYXJzZUNsYXNzRWxlbWVudE5hbWU9ZnVuY3Rpb24oZSl7dGhpcy50eXBlPT09YS5wcml2YXRlSWQ/KHRoaXMudmFsdWU9PT1cImNvbnN0cnVjdG9yXCImJnRoaXMucmFpc2UodGhpcy5zdGFydCxcIkNsYXNzZXMgY2FuJ3QgaGF2ZSBhbiBlbGVtZW50IG5hbWVkICcjY29uc3RydWN0b3InXCIpLGUuY29tcHV0ZWQ9ITEsZS5rZXk9dGhpcy5wYXJzZVByaXZhdGVJZGVudCgpKTp0aGlzLnBhcnNlUHJvcGVydHlOYW1lKGUpfTtsLnBhcnNlQ2xhc3NNZXRob2Q9ZnVuY3Rpb24oZSx0LGkscyl7dmFyIHI9ZS5rZXk7ZS5raW5kPT09XCJjb25zdHJ1Y3RvclwiPyh0JiZ0aGlzLnJhaXNlKHIuc3RhcnQsXCJDb25zdHJ1Y3RvciBjYW4ndCBiZSBhIGdlbmVyYXRvclwiKSxpJiZ0aGlzLnJhaXNlKHIuc3RhcnQsXCJDb25zdHJ1Y3RvciBjYW4ndCBiZSBhbiBhc3luYyBtZXRob2RcIikpOmUuc3RhdGljJiZmZShlLFwicHJvdG90eXBlXCIpJiZ0aGlzLnJhaXNlKHIuc3RhcnQsXCJDbGFzc2VzIG1heSBub3QgaGF2ZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBwcm90b3R5cGVcIik7dmFyIG49ZS52YWx1ZT10aGlzLnBhcnNlTWV0aG9kKHQsaSxzKTtyZXR1cm4gZS5raW5kPT09XCJnZXRcIiYmbi5wYXJhbXMubGVuZ3RoIT09MCYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKG4uc3RhcnQsXCJnZXR0ZXIgc2hvdWxkIGhhdmUgbm8gcGFyYW1zXCIpLGUua2luZD09PVwic2V0XCImJm4ucGFyYW1zLmxlbmd0aCE9PTEmJnRoaXMucmFpc2VSZWNvdmVyYWJsZShuLnN0YXJ0LFwic2V0dGVyIHNob3VsZCBoYXZlIGV4YWN0bHkgb25lIHBhcmFtXCIpLGUua2luZD09PVwic2V0XCImJm4ucGFyYW1zWzBdLnR5cGU9PT1cIlJlc3RFbGVtZW50XCImJnRoaXMucmFpc2VSZWNvdmVyYWJsZShuLnBhcmFtc1swXS5zdGFydCxcIlNldHRlciBjYW5ub3QgdXNlIHJlc3QgcGFyYW1zXCIpLHRoaXMuZmluaXNoTm9kZShlLFwiTWV0aG9kRGVmaW5pdGlvblwiKX07bC5wYXJzZUNsYXNzRmllbGQ9ZnVuY3Rpb24oZSl7aWYoZmUoZSxcImNvbnN0cnVjdG9yXCIpP3RoaXMucmFpc2UoZS5rZXkuc3RhcnQsXCJDbGFzc2VzIGNhbid0IGhhdmUgYSBmaWVsZCBuYW1lZCAnY29uc3RydWN0b3InXCIpOmUuc3RhdGljJiZmZShlLFwicHJvdG90eXBlXCIpJiZ0aGlzLnJhaXNlKGUua2V5LnN0YXJ0LFwiQ2xhc3NlcyBjYW4ndCBoYXZlIGEgc3RhdGljIGZpZWxkIG5hbWVkICdwcm90b3R5cGUnXCIpLHRoaXMuZWF0KGEuZXEpKXt2YXIgdD10aGlzLmN1cnJlbnRUaGlzU2NvcGUoKSxpPXQuaW5DbGFzc0ZpZWxkSW5pdDt0LmluQ2xhc3NGaWVsZEluaXQ9ITAsZS52YWx1ZT10aGlzLnBhcnNlTWF5YmVBc3NpZ24oKSx0LmluQ2xhc3NGaWVsZEluaXQ9aX1lbHNlIGUudmFsdWU9bnVsbDtyZXR1cm4gdGhpcy5zZW1pY29sb24oKSx0aGlzLmZpbmlzaE5vZGUoZSxcIlByb3BlcnR5RGVmaW5pdGlvblwiKX07bC5wYXJzZUNsYXNzU3RhdGljQmxvY2s9ZnVuY3Rpb24oZSl7ZS5ib2R5PVtdO3ZhciB0PXRoaXMubGFiZWxzO2Zvcih0aGlzLmxhYmVscz1bXSx0aGlzLmVudGVyU2NvcGUocmV8RGUpO3RoaXMudHlwZSE9PWEuYnJhY2VSOyl7dmFyIGk9dGhpcy5wYXJzZVN0YXRlbWVudChudWxsKTtlLmJvZHkucHVzaChpKX1yZXR1cm4gdGhpcy5uZXh0KCksdGhpcy5leGl0U2NvcGUoKSx0aGlzLmxhYmVscz10LHRoaXMuZmluaXNoTm9kZShlLFwiU3RhdGljQmxvY2tcIil9O2wucGFyc2VDbGFzc0lkPWZ1bmN0aW9uKGUsdCl7dGhpcy50eXBlPT09YS5uYW1lPyhlLmlkPXRoaXMucGFyc2VJZGVudCgpLHQmJnRoaXMuY2hlY2tMVmFsU2ltcGxlKGUuaWQsRywhMSkpOih0PT09ITAmJnRoaXMudW5leHBlY3RlZCgpLGUuaWQ9bnVsbCl9O2wucGFyc2VDbGFzc1N1cGVyPWZ1bmN0aW9uKGUpe2Uuc3VwZXJDbGFzcz10aGlzLmVhdChhLl9leHRlbmRzKT90aGlzLnBhcnNlRXhwclN1YnNjcmlwdHMobnVsbCwhMSk6bnVsbH07bC5lbnRlckNsYXNzQm9keT1mdW5jdGlvbigpe3ZhciBlPXtkZWNsYXJlZDpPYmplY3QuY3JlYXRlKG51bGwpLHVzZWQ6W119O3JldHVybiB0aGlzLnByaXZhdGVOYW1lU3RhY2sucHVzaChlKSxlLmRlY2xhcmVkfTtsLmV4aXRDbGFzc0JvZHk9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByaXZhdGVOYW1lU3RhY2sucG9wKCksdD1lLmRlY2xhcmVkLGk9ZS51c2VkO2lmKHRoaXMub3B0aW9ucy5jaGVja1ByaXZhdGVGaWVsZHMpZm9yKHZhciBzPXRoaXMucHJpdmF0ZU5hbWVTdGFjay5sZW5ndGgscj1zPT09MD9udWxsOnRoaXMucHJpdmF0ZU5hbWVTdGFja1tzLTFdLG49MDtuPGkubGVuZ3RoOysrbil7dmFyIG89aVtuXTtZKHQsby5uYW1lKXx8KHI/ci51c2VkLnB1c2gobyk6dGhpcy5yYWlzZVJlY292ZXJhYmxlKG8uc3RhcnQsXCJQcml2YXRlIGZpZWxkICcjXCIrby5uYW1lK1wiJyBtdXN0IGJlIGRlY2xhcmVkIGluIGFuIGVuY2xvc2luZyBjbGFzc1wiKSl9fTtmdW5jdGlvbiBCaShlLHQpe3ZhciBpPXQua2V5Lm5hbWUscz1lW2ldLHI9XCJ0cnVlXCI7cmV0dXJuIHQudHlwZT09PVwiTWV0aG9kRGVmaW5pdGlvblwiJiYodC5raW5kPT09XCJnZXRcInx8dC5raW5kPT09XCJzZXRcIikmJihyPSh0LnN0YXRpYz9cInNcIjpcImlcIikrdC5raW5kKSxzPT09XCJpZ2V0XCImJnI9PT1cImlzZXRcInx8cz09PVwiaXNldFwiJiZyPT09XCJpZ2V0XCJ8fHM9PT1cInNnZXRcIiYmcj09PVwic3NldFwifHxzPT09XCJzc2V0XCImJnI9PT1cInNnZXRcIj8oZVtpXT1cInRydWVcIiwhMSk6cz8hMDooZVtpXT1yLCExKX1mdW5jdGlvbiBmZShlLHQpe3ZhciBpPWUuY29tcHV0ZWQscz1lLmtleTtyZXR1cm4haSYmKHMudHlwZT09PVwiSWRlbnRpZmllclwiJiZzLm5hbWU9PT10fHxzLnR5cGU9PT1cIkxpdGVyYWxcIiYmcy52YWx1ZT09PXQpfWwucGFyc2VFeHBvcnRBbGxEZWNsYXJhdGlvbj1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTExJiYodGhpcy5lYXRDb250ZXh0dWFsKFwiYXNcIik/KGUuZXhwb3J0ZWQ9dGhpcy5wYXJzZU1vZHVsZUV4cG9ydE5hbWUoKSx0aGlzLmNoZWNrRXhwb3J0KHQsZS5leHBvcnRlZCx0aGlzLmxhc3RUb2tTdGFydCkpOmUuZXhwb3J0ZWQ9bnVsbCksdGhpcy5leHBlY3RDb250ZXh0dWFsKFwiZnJvbVwiKSx0aGlzLnR5cGUhPT1hLnN0cmluZyYmdGhpcy51bmV4cGVjdGVkKCksZS5zb3VyY2U9dGhpcy5wYXJzZUV4cHJBdG9tKCksdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj0xNiYmKGUuYXR0cmlidXRlcz10aGlzLnBhcnNlV2l0aENsYXVzZSgpKSx0aGlzLnNlbWljb2xvbigpLHRoaXMuZmluaXNoTm9kZShlLFwiRXhwb3J0QWxsRGVjbGFyYXRpb25cIil9O2wucGFyc2VFeHBvcnQ9ZnVuY3Rpb24oZSx0KXtpZih0aGlzLm5leHQoKSx0aGlzLmVhdChhLnN0YXIpKXJldHVybiB0aGlzLnBhcnNlRXhwb3J0QWxsRGVjbGFyYXRpb24oZSx0KTtpZih0aGlzLmVhdChhLl9kZWZhdWx0KSlyZXR1cm4gdGhpcy5jaGVja0V4cG9ydCh0LFwiZGVmYXVsdFwiLHRoaXMubGFzdFRva1N0YXJ0KSxlLmRlY2xhcmF0aW9uPXRoaXMucGFyc2VFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24oKSx0aGlzLmZpbmlzaE5vZGUoZSxcIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvblwiKTtpZih0aGlzLnNob3VsZFBhcnNlRXhwb3J0U3RhdGVtZW50KCkpZS5kZWNsYXJhdGlvbj10aGlzLnBhcnNlRXhwb3J0RGVjbGFyYXRpb24oZSksZS5kZWNsYXJhdGlvbi50eXBlPT09XCJWYXJpYWJsZURlY2xhcmF0aW9uXCI/dGhpcy5jaGVja1ZhcmlhYmxlRXhwb3J0KHQsZS5kZWNsYXJhdGlvbi5kZWNsYXJhdGlvbnMpOnRoaXMuY2hlY2tFeHBvcnQodCxlLmRlY2xhcmF0aW9uLmlkLGUuZGVjbGFyYXRpb24uaWQuc3RhcnQpLGUuc3BlY2lmaWVycz1bXSxlLnNvdXJjZT1udWxsO2Vsc2V7aWYoZS5kZWNsYXJhdGlvbj1udWxsLGUuc3BlY2lmaWVycz10aGlzLnBhcnNlRXhwb3J0U3BlY2lmaWVycyh0KSx0aGlzLmVhdENvbnRleHR1YWwoXCJmcm9tXCIpKXRoaXMudHlwZSE9PWEuc3RyaW5nJiZ0aGlzLnVuZXhwZWN0ZWQoKSxlLnNvdXJjZT10aGlzLnBhcnNlRXhwckF0b20oKSx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTE2JiYoZS5hdHRyaWJ1dGVzPXRoaXMucGFyc2VXaXRoQ2xhdXNlKCkpO2Vsc2V7Zm9yKHZhciBpPTAscz1lLnNwZWNpZmllcnM7aTxzLmxlbmd0aDtpKz0xKXt2YXIgcj1zW2ldO3RoaXMuY2hlY2tVbnJlc2VydmVkKHIubG9jYWwpLHRoaXMuY2hlY2tMb2NhbEV4cG9ydChyLmxvY2FsKSxyLmxvY2FsLnR5cGU9PT1cIkxpdGVyYWxcIiYmdGhpcy5yYWlzZShyLmxvY2FsLnN0YXJ0LFwiQSBzdHJpbmcgbGl0ZXJhbCBjYW5ub3QgYmUgdXNlZCBhcyBhbiBleHBvcnRlZCBiaW5kaW5nIHdpdGhvdXQgYGZyb21gLlwiKX1lLnNvdXJjZT1udWxsfXRoaXMuc2VtaWNvbG9uKCl9cmV0dXJuIHRoaXMuZmluaXNoTm9kZShlLFwiRXhwb3J0TmFtZWREZWNsYXJhdGlvblwiKX07bC5wYXJzZUV4cG9ydERlY2xhcmF0aW9uPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnBhcnNlU3RhdGVtZW50KG51bGwpfTtsLnBhcnNlRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uPWZ1bmN0aW9uKCl7dmFyIGU7aWYodGhpcy50eXBlPT09YS5fZnVuY3Rpb258fChlPXRoaXMuaXNBc3luY0Z1bmN0aW9uKCkpKXt2YXIgdD10aGlzLnN0YXJ0Tm9kZSgpO3JldHVybiB0aGlzLm5leHQoKSxlJiZ0aGlzLm5leHQoKSx0aGlzLnBhcnNlRnVuY3Rpb24odCx0ZXx2dCwhMSxlKX1lbHNlIGlmKHRoaXMudHlwZT09PWEuX2NsYXNzKXt2YXIgaT10aGlzLnN0YXJ0Tm9kZSgpO3JldHVybiB0aGlzLnBhcnNlQ2xhc3MoaSxcIm51bGxhYmxlSURcIil9ZWxzZXt2YXIgcz10aGlzLnBhcnNlTWF5YmVBc3NpZ24oKTtyZXR1cm4gdGhpcy5zZW1pY29sb24oKSxzfX07bC5jaGVja0V4cG9ydD1mdW5jdGlvbihlLHQsaSl7ZSYmKHR5cGVvZiB0IT1cInN0cmluZ1wiJiYodD10LnR5cGU9PT1cIklkZW50aWZpZXJcIj90Lm5hbWU6dC52YWx1ZSksWShlLHQpJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUoaSxcIkR1cGxpY2F0ZSBleHBvcnQgJ1wiK3QrXCInXCIpLGVbdF09ITApfTtsLmNoZWNrUGF0dGVybkV4cG9ydD1mdW5jdGlvbihlLHQpe3ZhciBpPXQudHlwZTtpZihpPT09XCJJZGVudGlmaWVyXCIpdGhpcy5jaGVja0V4cG9ydChlLHQsdC5zdGFydCk7ZWxzZSBpZihpPT09XCJPYmplY3RQYXR0ZXJuXCIpZm9yKHZhciBzPTAscj10LnByb3BlcnRpZXM7czxyLmxlbmd0aDtzKz0xKXt2YXIgbj1yW3NdO3RoaXMuY2hlY2tQYXR0ZXJuRXhwb3J0KGUsbil9ZWxzZSBpZihpPT09XCJBcnJheVBhdHRlcm5cIilmb3IodmFyIG89MCx1PXQuZWxlbWVudHM7bzx1Lmxlbmd0aDtvKz0xKXt2YXIgcD11W29dO3AmJnRoaXMuY2hlY2tQYXR0ZXJuRXhwb3J0KGUscCl9ZWxzZSBpPT09XCJQcm9wZXJ0eVwiP3RoaXMuY2hlY2tQYXR0ZXJuRXhwb3J0KGUsdC52YWx1ZSk6aT09PVwiQXNzaWdubWVudFBhdHRlcm5cIj90aGlzLmNoZWNrUGF0dGVybkV4cG9ydChlLHQubGVmdCk6aT09PVwiUmVzdEVsZW1lbnRcIiYmdGhpcy5jaGVja1BhdHRlcm5FeHBvcnQoZSx0LmFyZ3VtZW50KX07bC5jaGVja1ZhcmlhYmxlRXhwb3J0PWZ1bmN0aW9uKGUsdCl7aWYoZSlmb3IodmFyIGk9MCxzPXQ7aTxzLmxlbmd0aDtpKz0xKXt2YXIgcj1zW2ldO3RoaXMuY2hlY2tQYXR0ZXJuRXhwb3J0KGUsci5pZCl9fTtsLnNob3VsZFBhcnNlRXhwb3J0U3RhdGVtZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHlwZS5rZXl3b3JkPT09XCJ2YXJcInx8dGhpcy50eXBlLmtleXdvcmQ9PT1cImNvbnN0XCJ8fHRoaXMudHlwZS5rZXl3b3JkPT09XCJjbGFzc1wifHx0aGlzLnR5cGUua2V5d29yZD09PVwiZnVuY3Rpb25cInx8dGhpcy5pc0xldCgpfHx0aGlzLmlzQXN5bmNGdW5jdGlvbigpfTtsLnBhcnNlRXhwb3J0U3BlY2lmaWVyPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc3RhcnROb2RlKCk7cmV0dXJuIHQubG9jYWw9dGhpcy5wYXJzZU1vZHVsZUV4cG9ydE5hbWUoKSx0LmV4cG9ydGVkPXRoaXMuZWF0Q29udGV4dHVhbChcImFzXCIpP3RoaXMucGFyc2VNb2R1bGVFeHBvcnROYW1lKCk6dC5sb2NhbCx0aGlzLmNoZWNrRXhwb3J0KGUsdC5leHBvcnRlZCx0LmV4cG9ydGVkLnN0YXJ0KSx0aGlzLmZpbmlzaE5vZGUodCxcIkV4cG9ydFNwZWNpZmllclwiKX07bC5wYXJzZUV4cG9ydFNwZWNpZmllcnM9ZnVuY3Rpb24oZSl7dmFyIHQ9W10saT0hMDtmb3IodGhpcy5leHBlY3QoYS5icmFjZUwpOyF0aGlzLmVhdChhLmJyYWNlUik7KXtpZihpKWk9ITE7ZWxzZSBpZih0aGlzLmV4cGVjdChhLmNvbW1hKSx0aGlzLmFmdGVyVHJhaWxpbmdDb21tYShhLmJyYWNlUikpYnJlYWs7dC5wdXNoKHRoaXMucGFyc2VFeHBvcnRTcGVjaWZpZXIoZSkpfXJldHVybiB0fTtsLnBhcnNlSW1wb3J0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm5leHQoKSx0aGlzLnR5cGU9PT1hLnN0cmluZz8oZS5zcGVjaWZpZXJzPU9pLGUuc291cmNlPXRoaXMucGFyc2VFeHByQXRvbSgpKTooZS5zcGVjaWZpZXJzPXRoaXMucGFyc2VJbXBvcnRTcGVjaWZpZXJzKCksdGhpcy5leHBlY3RDb250ZXh0dWFsKFwiZnJvbVwiKSxlLnNvdXJjZT10aGlzLnR5cGU9PT1hLnN0cmluZz90aGlzLnBhcnNlRXhwckF0b20oKTp0aGlzLnVuZXhwZWN0ZWQoKSksdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj0xNiYmKGUuYXR0cmlidXRlcz10aGlzLnBhcnNlV2l0aENsYXVzZSgpKSx0aGlzLnNlbWljb2xvbigpLHRoaXMuZmluaXNoTm9kZShlLFwiSW1wb3J0RGVjbGFyYXRpb25cIil9O2wucGFyc2VJbXBvcnRTcGVjaWZpZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXJ0Tm9kZSgpO3JldHVybiBlLmltcG9ydGVkPXRoaXMucGFyc2VNb2R1bGVFeHBvcnROYW1lKCksdGhpcy5lYXRDb250ZXh0dWFsKFwiYXNcIik/ZS5sb2NhbD10aGlzLnBhcnNlSWRlbnQoKToodGhpcy5jaGVja1VucmVzZXJ2ZWQoZS5pbXBvcnRlZCksZS5sb2NhbD1lLmltcG9ydGVkKSx0aGlzLmNoZWNrTFZhbFNpbXBsZShlLmxvY2FsLEcpLHRoaXMuZmluaXNoTm9kZShlLFwiSW1wb3J0U3BlY2lmaWVyXCIpfTtsLnBhcnNlSW1wb3J0RGVmYXVsdFNwZWNpZmllcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMuc3RhcnROb2RlKCk7cmV0dXJuIGUubG9jYWw9dGhpcy5wYXJzZUlkZW50KCksdGhpcy5jaGVja0xWYWxTaW1wbGUoZS5sb2NhbCxHKSx0aGlzLmZpbmlzaE5vZGUoZSxcIkltcG9ydERlZmF1bHRTcGVjaWZpZXJcIil9O2wucGFyc2VJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXI9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXJ0Tm9kZSgpO3JldHVybiB0aGlzLm5leHQoKSx0aGlzLmV4cGVjdENvbnRleHR1YWwoXCJhc1wiKSxlLmxvY2FsPXRoaXMucGFyc2VJZGVudCgpLHRoaXMuY2hlY2tMVmFsU2ltcGxlKGUubG9jYWwsRyksdGhpcy5maW5pc2hOb2RlKGUsXCJJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXJcIil9O2wucGFyc2VJbXBvcnRTcGVjaWZpZXJzPWZ1bmN0aW9uKCl7dmFyIGU9W10sdD0hMDtpZih0aGlzLnR5cGU9PT1hLm5hbWUmJihlLnB1c2godGhpcy5wYXJzZUltcG9ydERlZmF1bHRTcGVjaWZpZXIoKSksIXRoaXMuZWF0KGEuY29tbWEpKSlyZXR1cm4gZTtpZih0aGlzLnR5cGU9PT1hLnN0YXIpcmV0dXJuIGUucHVzaCh0aGlzLnBhcnNlSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyKCkpLGU7Zm9yKHRoaXMuZXhwZWN0KGEuYnJhY2VMKTshdGhpcy5lYXQoYS5icmFjZVIpOyl7aWYodCl0PSExO2Vsc2UgaWYodGhpcy5leHBlY3QoYS5jb21tYSksdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEoYS5icmFjZVIpKWJyZWFrO2UucHVzaCh0aGlzLnBhcnNlSW1wb3J0U3BlY2lmaWVyKCkpfXJldHVybiBlfTtsLnBhcnNlV2l0aENsYXVzZT1mdW5jdGlvbigpe3ZhciBlPVtdO2lmKCF0aGlzLmVhdChhLl93aXRoKSlyZXR1cm4gZTt0aGlzLmV4cGVjdChhLmJyYWNlTCk7Zm9yKHZhciB0PXt9LGk9ITA7IXRoaXMuZWF0KGEuYnJhY2VSKTspe2lmKGkpaT0hMTtlbHNlIGlmKHRoaXMuZXhwZWN0KGEuY29tbWEpLHRoaXMuYWZ0ZXJUcmFpbGluZ0NvbW1hKGEuYnJhY2VSKSlicmVhazt2YXIgcz10aGlzLnBhcnNlSW1wb3J0QXR0cmlidXRlKCkscj1zLmtleS50eXBlPT09XCJJZGVudGlmaWVyXCI/cy5rZXkubmFtZTpzLmtleS52YWx1ZTtZKHQscikmJnRoaXMucmFpc2VSZWNvdmVyYWJsZShzLmtleS5zdGFydCxcIkR1cGxpY2F0ZSBhdHRyaWJ1dGUga2V5ICdcIityK1wiJ1wiKSx0W3JdPSEwLGUucHVzaChzKX1yZXR1cm4gZX07bC5wYXJzZUltcG9ydEF0dHJpYnV0ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXMuc3RhcnROb2RlKCk7cmV0dXJuIGUua2V5PXRoaXMudHlwZT09PWEuc3RyaW5nP3RoaXMucGFyc2VFeHByQXRvbSgpOnRoaXMucGFyc2VJZGVudCh0aGlzLm9wdGlvbnMuYWxsb3dSZXNlcnZlZCE9PVwibmV2ZXJcIiksdGhpcy5leHBlY3QoYS5jb2xvbiksdGhpcy50eXBlIT09YS5zdHJpbmcmJnRoaXMudW5leHBlY3RlZCgpLGUudmFsdWU9dGhpcy5wYXJzZUV4cHJBdG9tKCksdGhpcy5maW5pc2hOb2RlKGUsXCJJbXBvcnRBdHRyaWJ1dGVcIil9O2wucGFyc2VNb2R1bGVFeHBvcnROYW1lPWZ1bmN0aW9uKCl7aWYodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj0xMyYmdGhpcy50eXBlPT09YS5zdHJpbmcpe3ZhciBlPXRoaXMucGFyc2VMaXRlcmFsKHRoaXMudmFsdWUpO3JldHVybiBJaS50ZXN0KGUudmFsdWUpJiZ0aGlzLnJhaXNlKGUuc3RhcnQsXCJBbiBleHBvcnQgbmFtZSBjYW5ub3QgaW5jbHVkZSBhIGxvbmUgc3Vycm9nYXRlLlwiKSxlfXJldHVybiB0aGlzLnBhcnNlSWRlbnQoITApfTtsLmFkYXB0RGlyZWN0aXZlUHJvbG9ndWU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aCYmdGhpcy5pc0RpcmVjdGl2ZUNhbmRpZGF0ZShlW3RdKTsrK3QpZVt0XS5kaXJlY3RpdmU9ZVt0XS5leHByZXNzaW9uLnJhdy5zbGljZSgxLC0xKX07bC5pc0RpcmVjdGl2ZUNhbmRpZGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj01JiZlLnR5cGU9PT1cIkV4cHJlc3Npb25TdGF0ZW1lbnRcIiYmZS5leHByZXNzaW9uLnR5cGU9PT1cIkxpdGVyYWxcIiYmdHlwZW9mIGUuZXhwcmVzc2lvbi52YWx1ZT09XCJzdHJpbmdcIiYmKHRoaXMuaW5wdXRbZS5zdGFydF09PT0nXCInfHx0aGlzLmlucHV0W2Uuc3RhcnRdPT09XCInXCIpfTt2YXIgUj1ULnByb3RvdHlwZTtSLnRvQXNzaWduYWJsZT1mdW5jdGlvbihlLHQsaSl7aWYodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj02JiZlKXN3aXRjaChlLnR5cGUpe2Nhc2VcIklkZW50aWZpZXJcIjp0aGlzLmluQXN5bmMmJmUubmFtZT09PVwiYXdhaXRcIiYmdGhpcy5yYWlzZShlLnN0YXJ0LFwiQ2Fubm90IHVzZSAnYXdhaXQnIGFzIGlkZW50aWZpZXIgaW5zaWRlIGFuIGFzeW5jIGZ1bmN0aW9uXCIpO2JyZWFrO2Nhc2VcIk9iamVjdFBhdHRlcm5cIjpjYXNlXCJBcnJheVBhdHRlcm5cIjpjYXNlXCJBc3NpZ25tZW50UGF0dGVyblwiOmNhc2VcIlJlc3RFbGVtZW50XCI6YnJlYWs7Y2FzZVwiT2JqZWN0RXhwcmVzc2lvblwiOmUudHlwZT1cIk9iamVjdFBhdHRlcm5cIixpJiZ0aGlzLmNoZWNrUGF0dGVybkVycm9ycyhpLCEwKTtmb3IodmFyIHM9MCxyPWUucHJvcGVydGllcztzPHIubGVuZ3RoO3MrPTEpe3ZhciBuPXJbc107dGhpcy50b0Fzc2lnbmFibGUobix0KSxuLnR5cGU9PT1cIlJlc3RFbGVtZW50XCImJihuLmFyZ3VtZW50LnR5cGU9PT1cIkFycmF5UGF0dGVyblwifHxuLmFyZ3VtZW50LnR5cGU9PT1cIk9iamVjdFBhdHRlcm5cIikmJnRoaXMucmFpc2Uobi5hcmd1bWVudC5zdGFydCxcIlVuZXhwZWN0ZWQgdG9rZW5cIil9YnJlYWs7Y2FzZVwiUHJvcGVydHlcIjplLmtpbmQhPT1cImluaXRcIiYmdGhpcy5yYWlzZShlLmtleS5zdGFydCxcIk9iamVjdCBwYXR0ZXJuIGNhbid0IGNvbnRhaW4gZ2V0dGVyIG9yIHNldHRlclwiKSx0aGlzLnRvQXNzaWduYWJsZShlLnZhbHVlLHQpO2JyZWFrO2Nhc2VcIkFycmF5RXhwcmVzc2lvblwiOmUudHlwZT1cIkFycmF5UGF0dGVyblwiLGkmJnRoaXMuY2hlY2tQYXR0ZXJuRXJyb3JzKGksITApLHRoaXMudG9Bc3NpZ25hYmxlTGlzdChlLmVsZW1lbnRzLHQpO2JyZWFrO2Nhc2VcIlNwcmVhZEVsZW1lbnRcIjplLnR5cGU9XCJSZXN0RWxlbWVudFwiLHRoaXMudG9Bc3NpZ25hYmxlKGUuYXJndW1lbnQsdCksZS5hcmd1bWVudC50eXBlPT09XCJBc3NpZ25tZW50UGF0dGVyblwiJiZ0aGlzLnJhaXNlKGUuYXJndW1lbnQuc3RhcnQsXCJSZXN0IGVsZW1lbnRzIGNhbm5vdCBoYXZlIGEgZGVmYXVsdCB2YWx1ZVwiKTticmVhaztjYXNlXCJBc3NpZ25tZW50RXhwcmVzc2lvblwiOmUub3BlcmF0b3IhPT1cIj1cIiYmdGhpcy5yYWlzZShlLmxlZnQuZW5kLFwiT25seSAnPScgb3BlcmF0b3IgY2FuIGJlIHVzZWQgZm9yIHNwZWNpZnlpbmcgZGVmYXVsdCB2YWx1ZS5cIiksZS50eXBlPVwiQXNzaWdubWVudFBhdHRlcm5cIixkZWxldGUgZS5vcGVyYXRvcix0aGlzLnRvQXNzaWduYWJsZShlLmxlZnQsdCk7YnJlYWs7Y2FzZVwiUGFyZW50aGVzaXplZEV4cHJlc3Npb25cIjp0aGlzLnRvQXNzaWduYWJsZShlLmV4cHJlc3Npb24sdCxpKTticmVhaztjYXNlXCJDaGFpbkV4cHJlc3Npb25cIjp0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZS5zdGFydCxcIk9wdGlvbmFsIGNoYWluaW5nIGNhbm5vdCBhcHBlYXIgaW4gbGVmdC1oYW5kIHNpZGVcIik7YnJlYWs7Y2FzZVwiTWVtYmVyRXhwcmVzc2lvblwiOmlmKCF0KWJyZWFrO2RlZmF1bHQ6dGhpcy5yYWlzZShlLnN0YXJ0LFwiQXNzaWduaW5nIHRvIHJ2YWx1ZVwiKX1lbHNlIGkmJnRoaXMuY2hlY2tQYXR0ZXJuRXJyb3JzKGksITApO3JldHVybiBlfTtSLnRvQXNzaWduYWJsZUxpc3Q9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIGk9ZS5sZW5ndGgscz0wO3M8aTtzKyspe3ZhciByPWVbc107ciYmdGhpcy50b0Fzc2lnbmFibGUocix0KX1pZihpKXt2YXIgbj1lW2ktMV07dGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPT09NiYmdCYmbiYmbi50eXBlPT09XCJSZXN0RWxlbWVudFwiJiZuLmFyZ3VtZW50LnR5cGUhPT1cIklkZW50aWZpZXJcIiYmdGhpcy51bmV4cGVjdGVkKG4uYXJndW1lbnQuc3RhcnQpfXJldHVybiBlfTtSLnBhcnNlU3ByZWFkPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc3RhcnROb2RlKCk7cmV0dXJuIHRoaXMubmV4dCgpLHQuYXJndW1lbnQ9dGhpcy5wYXJzZU1heWJlQXNzaWduKCExLGUpLHRoaXMuZmluaXNoTm9kZSh0LFwiU3ByZWFkRWxlbWVudFwiKX07Ui5wYXJzZVJlc3RCaW5kaW5nPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy5uZXh0KCksdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPT09NiYmdGhpcy50eXBlIT09YS5uYW1lJiZ0aGlzLnVuZXhwZWN0ZWQoKSxlLmFyZ3VtZW50PXRoaXMucGFyc2VCaW5kaW5nQXRvbSgpLHRoaXMuZmluaXNoTm9kZShlLFwiUmVzdEVsZW1lbnRcIil9O1IucGFyc2VCaW5kaW5nQXRvbT1mdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49Nilzd2l0Y2godGhpcy50eXBlKXtjYXNlIGEuYnJhY2tldEw6dmFyIGU9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy5uZXh0KCksZS5lbGVtZW50cz10aGlzLnBhcnNlQmluZGluZ0xpc3QoYS5icmFja2V0UiwhMCwhMCksdGhpcy5maW5pc2hOb2RlKGUsXCJBcnJheVBhdHRlcm5cIik7Y2FzZSBhLmJyYWNlTDpyZXR1cm4gdGhpcy5wYXJzZU9iaighMCl9cmV0dXJuIHRoaXMucGFyc2VJZGVudCgpfTtSLnBhcnNlQmluZGluZ0xpc3Q9ZnVuY3Rpb24oZSx0LGkscyl7Zm9yKHZhciByPVtdLG49ITA7IXRoaXMuZWF0KGUpOylpZihuP249ITE6dGhpcy5leHBlY3QoYS5jb21tYSksdCYmdGhpcy50eXBlPT09YS5jb21tYSlyLnB1c2gobnVsbCk7ZWxzZXtpZihpJiZ0aGlzLmFmdGVyVHJhaWxpbmdDb21tYShlKSlicmVhaztpZih0aGlzLnR5cGU9PT1hLmVsbGlwc2lzKXt2YXIgbz10aGlzLnBhcnNlUmVzdEJpbmRpbmcoKTt0aGlzLnBhcnNlQmluZGluZ0xpc3RJdGVtKG8pLHIucHVzaChvKSx0aGlzLnR5cGU9PT1hLmNvbW1hJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCxcIkNvbW1hIGlzIG5vdCBwZXJtaXR0ZWQgYWZ0ZXIgdGhlIHJlc3QgZWxlbWVudFwiKSx0aGlzLmV4cGVjdChlKTticmVha31lbHNlIHIucHVzaCh0aGlzLnBhcnNlQXNzaWduYWJsZUxpc3RJdGVtKHMpKX1yZXR1cm4gcn07Ui5wYXJzZUFzc2lnbmFibGVMaXN0SXRlbT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcnNlTWF5YmVEZWZhdWx0KHRoaXMuc3RhcnQsdGhpcy5zdGFydExvYyk7cmV0dXJuIHRoaXMucGFyc2VCaW5kaW5nTGlzdEl0ZW0odCksdH07Ui5wYXJzZUJpbmRpbmdMaXN0SXRlbT1mdW5jdGlvbihlKXtyZXR1cm4gZX07Ui5wYXJzZU1heWJlRGVmYXVsdD1mdW5jdGlvbihlLHQsaSl7aWYoaT1pfHx0aGlzLnBhcnNlQmluZGluZ0F0b20oKSx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb248Nnx8IXRoaXMuZWF0KGEuZXEpKXJldHVybiBpO3ZhciBzPXRoaXMuc3RhcnROb2RlQXQoZSx0KTtyZXR1cm4gcy5sZWZ0PWkscy5yaWdodD10aGlzLnBhcnNlTWF5YmVBc3NpZ24oKSx0aGlzLmZpbmlzaE5vZGUocyxcIkFzc2lnbm1lbnRQYXR0ZXJuXCIpfTtSLmNoZWNrTFZhbFNpbXBsZT1mdW5jdGlvbihlLHQsaSl7dD09PXZvaWQgMCYmKHQ9bGUpO3ZhciBzPXQhPT1sZTtzd2l0Y2goZS50eXBlKXtjYXNlXCJJZGVudGlmaWVyXCI6dGhpcy5zdHJpY3QmJnRoaXMucmVzZXJ2ZWRXb3Jkc1N0cmljdEJpbmQudGVzdChlLm5hbWUpJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZS5zdGFydCwocz9cIkJpbmRpbmcgXCI6XCJBc3NpZ25pbmcgdG8gXCIpK2UubmFtZStcIiBpbiBzdHJpY3QgbW9kZVwiKSxzJiYodD09PUcmJmUubmFtZT09PVwibGV0XCImJnRoaXMucmFpc2VSZWNvdmVyYWJsZShlLnN0YXJ0LFwibGV0IGlzIGRpc2FsbG93ZWQgYXMgYSBsZXhpY2FsbHkgYm91bmQgbmFtZVwiKSxpJiYoWShpLGUubmFtZSkmJnRoaXMucmFpc2VSZWNvdmVyYWJsZShlLnN0YXJ0LFwiQXJndW1lbnQgbmFtZSBjbGFzaFwiKSxpW2UubmFtZV09ITApLHQhPT1ndCYmdGhpcy5kZWNsYXJlTmFtZShlLm5hbWUsdCxlLnN0YXJ0KSk7YnJlYWs7Y2FzZVwiQ2hhaW5FeHByZXNzaW9uXCI6dGhpcy5yYWlzZVJlY292ZXJhYmxlKGUuc3RhcnQsXCJPcHRpb25hbCBjaGFpbmluZyBjYW5ub3QgYXBwZWFyIGluIGxlZnQtaGFuZCBzaWRlXCIpO2JyZWFrO2Nhc2VcIk1lbWJlckV4cHJlc3Npb25cIjpzJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZS5zdGFydCxcIkJpbmRpbmcgbWVtYmVyIGV4cHJlc3Npb25cIik7YnJlYWs7Y2FzZVwiUGFyZW50aGVzaXplZEV4cHJlc3Npb25cIjpyZXR1cm4gcyYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKGUuc3RhcnQsXCJCaW5kaW5nIHBhcmVudGhlc2l6ZWQgZXhwcmVzc2lvblwiKSx0aGlzLmNoZWNrTFZhbFNpbXBsZShlLmV4cHJlc3Npb24sdCxpKTtkZWZhdWx0OnRoaXMucmFpc2UoZS5zdGFydCwocz9cIkJpbmRpbmdcIjpcIkFzc2lnbmluZyB0b1wiKStcIiBydmFsdWVcIil9fTtSLmNoZWNrTFZhbFBhdHRlcm49ZnVuY3Rpb24oZSx0LGkpe3N3aXRjaCh0PT09dm9pZCAwJiYodD1sZSksZS50eXBlKXtjYXNlXCJPYmplY3RQYXR0ZXJuXCI6Zm9yKHZhciBzPTAscj1lLnByb3BlcnRpZXM7czxyLmxlbmd0aDtzKz0xKXt2YXIgbj1yW3NdO3RoaXMuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKG4sdCxpKX1icmVhaztjYXNlXCJBcnJheVBhdHRlcm5cIjpmb3IodmFyIG89MCx1PWUuZWxlbWVudHM7bzx1Lmxlbmd0aDtvKz0xKXt2YXIgcD11W29dO3AmJnRoaXMuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuKHAsdCxpKX1icmVhaztkZWZhdWx0OnRoaXMuY2hlY2tMVmFsU2ltcGxlKGUsdCxpKX19O1IuY2hlY2tMVmFsSW5uZXJQYXR0ZXJuPWZ1bmN0aW9uKGUsdCxpKXtzd2l0Y2godD09PXZvaWQgMCYmKHQ9bGUpLGUudHlwZSl7Y2FzZVwiUHJvcGVydHlcIjp0aGlzLmNoZWNrTFZhbElubmVyUGF0dGVybihlLnZhbHVlLHQsaSk7YnJlYWs7Y2FzZVwiQXNzaWdubWVudFBhdHRlcm5cIjp0aGlzLmNoZWNrTFZhbFBhdHRlcm4oZS5sZWZ0LHQsaSk7YnJlYWs7Y2FzZVwiUmVzdEVsZW1lbnRcIjp0aGlzLmNoZWNrTFZhbFBhdHRlcm4oZS5hcmd1bWVudCx0LGkpO2JyZWFrO2RlZmF1bHQ6dGhpcy5jaGVja0xWYWxQYXR0ZXJuKGUsdCxpKX19O3ZhciBEPWZ1bmN0aW9uKHQsaSxzLHIsbil7dGhpcy50b2tlbj10LHRoaXMuaXNFeHByPSEhaSx0aGlzLnByZXNlcnZlU3BhY2U9ISFzLHRoaXMub3ZlcnJpZGU9cix0aGlzLmdlbmVyYXRvcj0hIW59LF89e2Jfc3RhdDpuZXcgRChcIntcIiwhMSksYl9leHByOm5ldyBEKFwie1wiLCEwKSxiX3RtcGw6bmV3IEQoXCIke1wiLCExKSxwX3N0YXQ6bmV3IEQoXCIoXCIsITEpLHBfZXhwcjpuZXcgRChcIihcIiwhMCkscV90bXBsOm5ldyBEKFwiYFwiLCEwLCEwLGZ1bmN0aW9uKGUpe3JldHVybiBlLnRyeVJlYWRUZW1wbGF0ZVRva2VuKCl9KSxmX3N0YXQ6bmV3IEQoXCJmdW5jdGlvblwiLCExKSxmX2V4cHI6bmV3IEQoXCJmdW5jdGlvblwiLCEwKSxmX2V4cHJfZ2VuOm5ldyBEKFwiZnVuY3Rpb25cIiwhMCwhMSxudWxsLCEwKSxmX2dlbjpuZXcgRChcImZ1bmN0aW9uXCIsITEsITEsbnVsbCwhMCl9LCQ9VC5wcm90b3R5cGU7JC5pbml0aWFsQ29udGV4dD1mdW5jdGlvbigpe3JldHVybltfLmJfc3RhdF19OyQuY3VyQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbnRleHRbdGhpcy5jb250ZXh0Lmxlbmd0aC0xXX07JC5icmFjZUlzQmxvY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5jdXJDb250ZXh0KCk7cmV0dXJuIHQ9PT1fLmZfZXhwcnx8dD09PV8uZl9zdGF0PyEwOmU9PT1hLmNvbG9uJiYodD09PV8uYl9zdGF0fHx0PT09Xy5iX2V4cHIpPyF0LmlzRXhwcjplPT09YS5fcmV0dXJufHxlPT09YS5uYW1lJiZ0aGlzLmV4cHJBbGxvd2VkP0wudGVzdCh0aGlzLmlucHV0LnNsaWNlKHRoaXMubGFzdFRva0VuZCx0aGlzLnN0YXJ0KSk6ZT09PWEuX2Vsc2V8fGU9PT1hLnNlbWl8fGU9PT1hLmVvZnx8ZT09PWEucGFyZW5SfHxlPT09YS5hcnJvdz8hMDplPT09YS5icmFjZUw/dD09PV8uYl9zdGF0OmU9PT1hLl92YXJ8fGU9PT1hLl9jb25zdHx8ZT09PWEubmFtZT8hMTohdGhpcy5leHByQWxsb3dlZH07JC5pbkdlbmVyYXRvckNvbnRleHQ9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5jb250ZXh0Lmxlbmd0aC0xO2U+PTE7ZS0tKXt2YXIgdD10aGlzLmNvbnRleHRbZV07aWYodC50b2tlbj09PVwiZnVuY3Rpb25cIilyZXR1cm4gdC5nZW5lcmF0b3J9cmV0dXJuITF9OyQudXBkYXRlQ29udGV4dD1mdW5jdGlvbihlKXt2YXIgdCxpPXRoaXMudHlwZTtpLmtleXdvcmQmJmU9PT1hLmRvdD90aGlzLmV4cHJBbGxvd2VkPSExOih0PWkudXBkYXRlQ29udGV4dCk/dC5jYWxsKHRoaXMsZSk6dGhpcy5leHByQWxsb3dlZD1pLmJlZm9yZUV4cHJ9OyQub3ZlcnJpZGVDb250ZXh0PWZ1bmN0aW9uKGUpe3RoaXMuY3VyQ29udGV4dCgpIT09ZSYmKHRoaXMuY29udGV4dFt0aGlzLmNvbnRleHQubGVuZ3RoLTFdPWUpfTthLnBhcmVuUi51cGRhdGVDb250ZXh0PWEuYnJhY2VSLnVwZGF0ZUNvbnRleHQ9ZnVuY3Rpb24oKXtpZih0aGlzLmNvbnRleHQubGVuZ3RoPT09MSl7dGhpcy5leHByQWxsb3dlZD0hMDtyZXR1cm59dmFyIGU9dGhpcy5jb250ZXh0LnBvcCgpO2U9PT1fLmJfc3RhdCYmdGhpcy5jdXJDb250ZXh0KCkudG9rZW49PT1cImZ1bmN0aW9uXCImJihlPXRoaXMuY29udGV4dC5wb3AoKSksdGhpcy5leHByQWxsb3dlZD0hZS5pc0V4cHJ9O2EuYnJhY2VMLnVwZGF0ZUNvbnRleHQ9ZnVuY3Rpb24oZSl7dGhpcy5jb250ZXh0LnB1c2godGhpcy5icmFjZUlzQmxvY2soZSk/Xy5iX3N0YXQ6Xy5iX2V4cHIpLHRoaXMuZXhwckFsbG93ZWQ9ITB9O2EuZG9sbGFyQnJhY2VMLnVwZGF0ZUNvbnRleHQ9ZnVuY3Rpb24oKXt0aGlzLmNvbnRleHQucHVzaChfLmJfdG1wbCksdGhpcy5leHByQWxsb3dlZD0hMH07YS5wYXJlbkwudXBkYXRlQ29udGV4dD1mdW5jdGlvbihlKXt2YXIgdD1lPT09YS5faWZ8fGU9PT1hLl9mb3J8fGU9PT1hLl93aXRofHxlPT09YS5fd2hpbGU7dGhpcy5jb250ZXh0LnB1c2godD9fLnBfc3RhdDpfLnBfZXhwciksdGhpcy5leHByQWxsb3dlZD0hMH07YS5pbmNEZWMudXBkYXRlQ29udGV4dD1mdW5jdGlvbigpe307YS5fZnVuY3Rpb24udXBkYXRlQ29udGV4dD1hLl9jbGFzcy51cGRhdGVDb250ZXh0PWZ1bmN0aW9uKGUpe2UuYmVmb3JlRXhwciYmZSE9PWEuX2Vsc2UmJiEoZT09PWEuc2VtaSYmdGhpcy5jdXJDb250ZXh0KCkhPT1fLnBfc3RhdCkmJiEoZT09PWEuX3JldHVybiYmTC50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLHRoaXMuc3RhcnQpKSkmJiEoKGU9PT1hLmNvbG9ufHxlPT09YS5icmFjZUwpJiZ0aGlzLmN1ckNvbnRleHQoKT09PV8uYl9zdGF0KT90aGlzLmNvbnRleHQucHVzaChfLmZfZXhwcik6dGhpcy5jb250ZXh0LnB1c2goXy5mX3N0YXQpLHRoaXMuZXhwckFsbG93ZWQ9ITF9O2EuY29sb24udXBkYXRlQ29udGV4dD1mdW5jdGlvbigpe3RoaXMuY3VyQ29udGV4dCgpLnRva2VuPT09XCJmdW5jdGlvblwiJiZ0aGlzLmNvbnRleHQucG9wKCksdGhpcy5leHByQWxsb3dlZD0hMH07YS5iYWNrUXVvdGUudXBkYXRlQ29udGV4dD1mdW5jdGlvbigpe3RoaXMuY3VyQ29udGV4dCgpPT09Xy5xX3RtcGw/dGhpcy5jb250ZXh0LnBvcCgpOnRoaXMuY29udGV4dC5wdXNoKF8ucV90bXBsKSx0aGlzLmV4cHJBbGxvd2VkPSExfTthLnN0YXIudXBkYXRlQ29udGV4dD1mdW5jdGlvbihlKXtpZihlPT09YS5fZnVuY3Rpb24pe3ZhciB0PXRoaXMuY29udGV4dC5sZW5ndGgtMTt0aGlzLmNvbnRleHRbdF09PT1fLmZfZXhwcj90aGlzLmNvbnRleHRbdF09Xy5mX2V4cHJfZ2VuOnRoaXMuY29udGV4dFt0XT1fLmZfZ2VufXRoaXMuZXhwckFsbG93ZWQ9ITB9O2EubmFtZS51cGRhdGVDb250ZXh0PWZ1bmN0aW9uKGUpe3ZhciB0PSExO3RoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NiYmZSE9PWEuZG90JiYodGhpcy52YWx1ZT09PVwib2ZcIiYmIXRoaXMuZXhwckFsbG93ZWR8fHRoaXMudmFsdWU9PT1cInlpZWxkXCImJnRoaXMuaW5HZW5lcmF0b3JDb250ZXh0KCkpJiYodD0hMCksdGhpcy5leHByQWxsb3dlZD10fTt2YXIgeT1ULnByb3RvdHlwZTt5LmNoZWNrUHJvcENsYXNoPWZ1bmN0aW9uKGUsdCxpKXtpZighKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OSYmZS50eXBlPT09XCJTcHJlYWRFbGVtZW50XCIpJiYhKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NiYmKGUuY29tcHV0ZWR8fGUubWV0aG9kfHxlLnNob3J0aGFuZCkpKXt2YXIgcz1lLmtleSxyO3N3aXRjaChzLnR5cGUpe2Nhc2VcIklkZW50aWZpZXJcIjpyPXMubmFtZTticmVhaztjYXNlXCJMaXRlcmFsXCI6cj1TdHJpbmcocy52YWx1ZSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59dmFyIG49ZS5raW5kO2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49Nil7cj09PVwiX19wcm90b19fXCImJm49PT1cImluaXRcIiYmKHQucHJvdG8mJihpP2kuZG91YmxlUHJvdG88MCYmKGkuZG91YmxlUHJvdG89cy5zdGFydCk6dGhpcy5yYWlzZVJlY292ZXJhYmxlKHMuc3RhcnQsXCJSZWRlZmluaXRpb24gb2YgX19wcm90b19fIHByb3BlcnR5XCIpKSx0LnByb3RvPSEwKTtyZXR1cm59cj1cIiRcIityO3ZhciBvPXRbcl07aWYobyl7dmFyIHU7bj09PVwiaW5pdFwiP3U9dGhpcy5zdHJpY3QmJm8uaW5pdHx8by5nZXR8fG8uc2V0OnU9by5pbml0fHxvW25dLHUmJnRoaXMucmFpc2VSZWNvdmVyYWJsZShzLnN0YXJ0LFwiUmVkZWZpbml0aW9uIG9mIHByb3BlcnR5XCIpfWVsc2Ugbz10W3JdPXtpbml0OiExLGdldDohMSxzZXQ6ITF9O29bbl09ITB9fTt5LnBhcnNlRXhwcmVzc2lvbj1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMuc3RhcnQscz10aGlzLnN0YXJ0TG9jLHI9dGhpcy5wYXJzZU1heWJlQXNzaWduKGUsdCk7aWYodGhpcy50eXBlPT09YS5jb21tYSl7dmFyIG49dGhpcy5zdGFydE5vZGVBdChpLHMpO2ZvcihuLmV4cHJlc3Npb25zPVtyXTt0aGlzLmVhdChhLmNvbW1hKTspbi5leHByZXNzaW9ucy5wdXNoKHRoaXMucGFyc2VNYXliZUFzc2lnbihlLHQpKTtyZXR1cm4gdGhpcy5maW5pc2hOb2RlKG4sXCJTZXF1ZW5jZUV4cHJlc3Npb25cIil9cmV0dXJuIHJ9O3kucGFyc2VNYXliZUFzc2lnbj1mdW5jdGlvbihlLHQsaSl7aWYodGhpcy5pc0NvbnRleHR1YWwoXCJ5aWVsZFwiKSl7aWYodGhpcy5pbkdlbmVyYXRvcilyZXR1cm4gdGhpcy5wYXJzZVlpZWxkKGUpO3RoaXMuZXhwckFsbG93ZWQ9ITF9dmFyIHM9ITEscj0tMSxuPS0xLG89LTE7dD8ocj10LnBhcmVudGhlc2l6ZWRBc3NpZ24sbj10LnRyYWlsaW5nQ29tbWEsbz10LmRvdWJsZVByb3RvLHQucGFyZW50aGVzaXplZEFzc2lnbj10LnRyYWlsaW5nQ29tbWE9LTEpOih0PW5ldyB5ZSxzPSEwKTt2YXIgdT10aGlzLnN0YXJ0LHA9dGhpcy5zdGFydExvYzsodGhpcy50eXBlPT09YS5wYXJlbkx8fHRoaXMudHlwZT09PWEubmFtZSkmJih0aGlzLnBvdGVudGlhbEFycm93QXQ9dGhpcy5zdGFydCx0aGlzLnBvdGVudGlhbEFycm93SW5Gb3JBd2FpdD1lPT09XCJhd2FpdFwiKTt2YXIgZD10aGlzLnBhcnNlTWF5YmVDb25kaXRpb25hbChlLHQpO2lmKGkmJihkPWkuY2FsbCh0aGlzLGQsdSxwKSksdGhpcy50eXBlLmlzQXNzaWduKXt2YXIgZj10aGlzLnN0YXJ0Tm9kZUF0KHUscCk7cmV0dXJuIGYub3BlcmF0b3I9dGhpcy52YWx1ZSx0aGlzLnR5cGU9PT1hLmVxJiYoZD10aGlzLnRvQXNzaWduYWJsZShkLCExLHQpKSxzfHwodC5wYXJlbnRoZXNpemVkQXNzaWduPXQudHJhaWxpbmdDb21tYT10LmRvdWJsZVByb3RvPS0xKSx0LnNob3J0aGFuZEFzc2lnbj49ZC5zdGFydCYmKHQuc2hvcnRoYW5kQXNzaWduPS0xKSx0aGlzLnR5cGU9PT1hLmVxP3RoaXMuY2hlY2tMVmFsUGF0dGVybihkKTp0aGlzLmNoZWNrTFZhbFNpbXBsZShkKSxmLmxlZnQ9ZCx0aGlzLm5leHQoKSxmLnJpZ2h0PXRoaXMucGFyc2VNYXliZUFzc2lnbihlKSxvPi0xJiYodC5kb3VibGVQcm90bz1vKSx0aGlzLmZpbmlzaE5vZGUoZixcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIpfWVsc2UgcyYmdGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnModCwhMCk7cmV0dXJuIHI+LTEmJih0LnBhcmVudGhlc2l6ZWRBc3NpZ249ciksbj4tMSYmKHQudHJhaWxpbmdDb21tYT1uKSxkfTt5LnBhcnNlTWF5YmVDb25kaXRpb25hbD1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMuc3RhcnQscz10aGlzLnN0YXJ0TG9jLHI9dGhpcy5wYXJzZUV4cHJPcHMoZSx0KTtpZih0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyh0KSlyZXR1cm4gcjtpZih0aGlzLmVhdChhLnF1ZXN0aW9uKSl7dmFyIG49dGhpcy5zdGFydE5vZGVBdChpLHMpO3JldHVybiBuLnRlc3Q9cixuLmNvbnNlcXVlbnQ9dGhpcy5wYXJzZU1heWJlQXNzaWduKCksdGhpcy5leHBlY3QoYS5jb2xvbiksbi5hbHRlcm5hdGU9dGhpcy5wYXJzZU1heWJlQXNzaWduKGUpLHRoaXMuZmluaXNoTm9kZShuLFwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIpfXJldHVybiByfTt5LnBhcnNlRXhwck9wcz1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMuc3RhcnQscz10aGlzLnN0YXJ0TG9jLHI9dGhpcy5wYXJzZU1heWJlVW5hcnkodCwhMSwhMSxlKTtyZXR1cm4gdGhpcy5jaGVja0V4cHJlc3Npb25FcnJvcnModCl8fHIuc3RhcnQ9PT1pJiZyLnR5cGU9PT1cIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCI/cjp0aGlzLnBhcnNlRXhwck9wKHIsaSxzLC0xLGUpfTt5LnBhcnNlRXhwck9wPWZ1bmN0aW9uKGUsdCxpLHMscil7dmFyIG49dGhpcy50eXBlLmJpbm9wO2lmKG4hPW51bGwmJighcnx8dGhpcy50eXBlIT09YS5faW4pJiZuPnMpe3ZhciBvPXRoaXMudHlwZT09PWEubG9naWNhbE9SfHx0aGlzLnR5cGU9PT1hLmxvZ2ljYWxBTkQsdT10aGlzLnR5cGU9PT1hLmNvYWxlc2NlO3UmJihuPWEubG9naWNhbEFORC5iaW5vcCk7dmFyIHA9dGhpcy52YWx1ZTt0aGlzLm5leHQoKTt2YXIgZD10aGlzLnN0YXJ0LGY9dGhpcy5zdGFydExvYyxDPXRoaXMucGFyc2VFeHByT3AodGhpcy5wYXJzZU1heWJlVW5hcnkobnVsbCwhMSwhMSxyKSxkLGYsbixyKSxCPXRoaXMuYnVpbGRCaW5hcnkodCxpLGUsQyxwLG98fHUpO3JldHVybihvJiZ0aGlzLnR5cGU9PT1hLmNvYWxlc2NlfHx1JiYodGhpcy50eXBlPT09YS5sb2dpY2FsT1J8fHRoaXMudHlwZT09PWEubG9naWNhbEFORCkpJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCxcIkxvZ2ljYWwgZXhwcmVzc2lvbnMgYW5kIGNvYWxlc2NlIGV4cHJlc3Npb25zIGNhbm5vdCBiZSBtaXhlZC4gV3JhcCBlaXRoZXIgYnkgcGFyZW50aGVzZXNcIiksdGhpcy5wYXJzZUV4cHJPcChCLHQsaSxzLHIpfXJldHVybiBlfTt5LmJ1aWxkQmluYXJ5PWZ1bmN0aW9uKGUsdCxpLHMscixuKXtzLnR5cGU9PT1cIlByaXZhdGVJZGVudGlmaWVyXCImJnRoaXMucmFpc2Uocy5zdGFydCxcIlByaXZhdGUgaWRlbnRpZmllciBjYW4gb25seSBiZSBsZWZ0IHNpZGUgb2YgYmluYXJ5IGV4cHJlc3Npb25cIik7dmFyIG89dGhpcy5zdGFydE5vZGVBdChlLHQpO3JldHVybiBvLmxlZnQ9aSxvLm9wZXJhdG9yPXIsby5yaWdodD1zLHRoaXMuZmluaXNoTm9kZShvLG4/XCJMb2dpY2FsRXhwcmVzc2lvblwiOlwiQmluYXJ5RXhwcmVzc2lvblwiKX07eS5wYXJzZU1heWJlVW5hcnk9ZnVuY3Rpb24oZSx0LGkscyl7dmFyIHI9dGhpcy5zdGFydCxuPXRoaXMuc3RhcnRMb2MsbztpZih0aGlzLmlzQ29udGV4dHVhbChcImF3YWl0XCIpJiZ0aGlzLmNhbkF3YWl0KW89dGhpcy5wYXJzZUF3YWl0KHMpLHQ9ITA7ZWxzZSBpZih0aGlzLnR5cGUucHJlZml4KXt2YXIgdT10aGlzLnN0YXJ0Tm9kZSgpLHA9dGhpcy50eXBlPT09YS5pbmNEZWM7dS5vcGVyYXRvcj10aGlzLnZhbHVlLHUucHJlZml4PSEwLHRoaXMubmV4dCgpLHUuYXJndW1lbnQ9dGhpcy5wYXJzZU1heWJlVW5hcnkobnVsbCwhMCxwLHMpLHRoaXMuY2hlY2tFeHByZXNzaW9uRXJyb3JzKGUsITApLHA/dGhpcy5jaGVja0xWYWxTaW1wbGUodS5hcmd1bWVudCk6dGhpcy5zdHJpY3QmJnUub3BlcmF0b3I9PT1cImRlbGV0ZVwiJiZidCh1LmFyZ3VtZW50KT90aGlzLnJhaXNlUmVjb3ZlcmFibGUodS5zdGFydCxcIkRlbGV0aW5nIGxvY2FsIHZhcmlhYmxlIGluIHN0cmljdCBtb2RlXCIpOnUub3BlcmF0b3I9PT1cImRlbGV0ZVwiJiZSZSh1LmFyZ3VtZW50KT90aGlzLnJhaXNlUmVjb3ZlcmFibGUodS5zdGFydCxcIlByaXZhdGUgZmllbGRzIGNhbiBub3QgYmUgZGVsZXRlZFwiKTp0PSEwLG89dGhpcy5maW5pc2hOb2RlKHUscD9cIlVwZGF0ZUV4cHJlc3Npb25cIjpcIlVuYXJ5RXhwcmVzc2lvblwiKX1lbHNlIGlmKCF0JiZ0aGlzLnR5cGU9PT1hLnByaXZhdGVJZCkoc3x8dGhpcy5wcml2YXRlTmFtZVN0YWNrLmxlbmd0aD09PTApJiZ0aGlzLm9wdGlvbnMuY2hlY2tQcml2YXRlRmllbGRzJiZ0aGlzLnVuZXhwZWN0ZWQoKSxvPXRoaXMucGFyc2VQcml2YXRlSWRlbnQoKSx0aGlzLnR5cGUhPT1hLl9pbiYmdGhpcy51bmV4cGVjdGVkKCk7ZWxzZXtpZihvPXRoaXMucGFyc2VFeHByU3Vic2NyaXB0cyhlLHMpLHRoaXMuY2hlY2tFeHByZXNzaW9uRXJyb3JzKGUpKXJldHVybiBvO2Zvcig7dGhpcy50eXBlLnBvc3RmaXgmJiF0aGlzLmNhbkluc2VydFNlbWljb2xvbigpOyl7dmFyIGQ9dGhpcy5zdGFydE5vZGVBdChyLG4pO2Qub3BlcmF0b3I9dGhpcy52YWx1ZSxkLnByZWZpeD0hMSxkLmFyZ3VtZW50PW8sdGhpcy5jaGVja0xWYWxTaW1wbGUobyksdGhpcy5uZXh0KCksbz10aGlzLmZpbmlzaE5vZGUoZCxcIlVwZGF0ZUV4cHJlc3Npb25cIil9fWlmKCFpJiZ0aGlzLmVhdChhLnN0YXJzdGFyKSlpZih0KXRoaXMudW5leHBlY3RlZCh0aGlzLmxhc3RUb2tTdGFydCk7ZWxzZSByZXR1cm4gdGhpcy5idWlsZEJpbmFyeShyLG4sbyx0aGlzLnBhcnNlTWF5YmVVbmFyeShudWxsLCExLCExLHMpLFwiKipcIiwhMSk7ZWxzZSByZXR1cm4gb307ZnVuY3Rpb24gYnQoZSl7cmV0dXJuIGUudHlwZT09PVwiSWRlbnRpZmllclwifHxlLnR5cGU9PT1cIlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCImJmJ0KGUuZXhwcmVzc2lvbil9ZnVuY3Rpb24gUmUoZSl7cmV0dXJuIGUudHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwiJiZlLnByb3BlcnR5LnR5cGU9PT1cIlByaXZhdGVJZGVudGlmaWVyXCJ8fGUudHlwZT09PVwiQ2hhaW5FeHByZXNzaW9uXCImJlJlKGUuZXhwcmVzc2lvbil8fGUudHlwZT09PVwiUGFyZW50aGVzaXplZEV4cHJlc3Npb25cIiYmUmUoZS5leHByZXNzaW9uKX15LnBhcnNlRXhwclN1YnNjcmlwdHM9ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLnN0YXJ0LHM9dGhpcy5zdGFydExvYyxyPXRoaXMucGFyc2VFeHByQXRvbShlLHQpO2lmKHIudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIiYmdGhpcy5pbnB1dC5zbGljZSh0aGlzLmxhc3RUb2tTdGFydCx0aGlzLmxhc3RUb2tFbmQpIT09XCIpXCIpcmV0dXJuIHI7dmFyIG49dGhpcy5wYXJzZVN1YnNjcmlwdHMocixpLHMsITEsdCk7cmV0dXJuIGUmJm4udHlwZT09PVwiTWVtYmVyRXhwcmVzc2lvblwiJiYoZS5wYXJlbnRoZXNpemVkQXNzaWduPj1uLnN0YXJ0JiYoZS5wYXJlbnRoZXNpemVkQXNzaWduPS0xKSxlLnBhcmVudGhlc2l6ZWRCaW5kPj1uLnN0YXJ0JiYoZS5wYXJlbnRoZXNpemVkQmluZD0tMSksZS50cmFpbGluZ0NvbW1hPj1uLnN0YXJ0JiYoZS50cmFpbGluZ0NvbW1hPS0xKSksbn07eS5wYXJzZVN1YnNjcmlwdHM9ZnVuY3Rpb24oZSx0LGkscyxyKXtmb3IodmFyIG49dGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj04JiZlLnR5cGU9PT1cIklkZW50aWZpZXJcIiYmZS5uYW1lPT09XCJhc3luY1wiJiZ0aGlzLmxhc3RUb2tFbmQ9PT1lLmVuZCYmIXRoaXMuY2FuSW5zZXJ0U2VtaWNvbG9uKCkmJmUuZW5kLWUuc3RhcnQ9PT01JiZ0aGlzLnBvdGVudGlhbEFycm93QXQ9PT1lLnN0YXJ0LG89ITE7Oyl7dmFyIHU9dGhpcy5wYXJzZVN1YnNjcmlwdChlLHQsaSxzLG4sbyxyKTtpZih1Lm9wdGlvbmFsJiYobz0hMCksdT09PWV8fHUudHlwZT09PVwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb25cIil7aWYobyl7dmFyIHA9dGhpcy5zdGFydE5vZGVBdCh0LGkpO3AuZXhwcmVzc2lvbj11LHU9dGhpcy5maW5pc2hOb2RlKHAsXCJDaGFpbkV4cHJlc3Npb25cIil9cmV0dXJuIHV9ZT11fX07eS5zaG91bGRQYXJzZUFzeW5jQXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKSYmdGhpcy5lYXQoYS5hcnJvdyl9O3kucGFyc2VTdWJzY3JpcHRBc3luY0Fycm93PWZ1bmN0aW9uKGUsdCxpLHMpe3JldHVybiB0aGlzLnBhcnNlQXJyb3dFeHByZXNzaW9uKHRoaXMuc3RhcnROb2RlQXQoZSx0KSxpLCEwLHMpfTt5LnBhcnNlU3Vic2NyaXB0PWZ1bmN0aW9uKGUsdCxpLHMscixuLG8pe3ZhciB1PXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49MTEscD11JiZ0aGlzLmVhdChhLnF1ZXN0aW9uRG90KTtzJiZwJiZ0aGlzLnJhaXNlKHRoaXMubGFzdFRva1N0YXJ0LFwiT3B0aW9uYWwgY2hhaW5pbmcgY2Fubm90IGFwcGVhciBpbiB0aGUgY2FsbGVlIG9mIG5ldyBleHByZXNzaW9uc1wiKTt2YXIgZD10aGlzLmVhdChhLmJyYWNrZXRMKTtpZihkfHxwJiZ0aGlzLnR5cGUhPT1hLnBhcmVuTCYmdGhpcy50eXBlIT09YS5iYWNrUXVvdGV8fHRoaXMuZWF0KGEuZG90KSl7dmFyIGY9dGhpcy5zdGFydE5vZGVBdCh0LGkpO2Yub2JqZWN0PWUsZD8oZi5wcm9wZXJ0eT10aGlzLnBhcnNlRXhwcmVzc2lvbigpLHRoaXMuZXhwZWN0KGEuYnJhY2tldFIpKTp0aGlzLnR5cGU9PT1hLnByaXZhdGVJZCYmZS50eXBlIT09XCJTdXBlclwiP2YucHJvcGVydHk9dGhpcy5wYXJzZVByaXZhdGVJZGVudCgpOmYucHJvcGVydHk9dGhpcy5wYXJzZUlkZW50KHRoaXMub3B0aW9ucy5hbGxvd1Jlc2VydmVkIT09XCJuZXZlclwiKSxmLmNvbXB1dGVkPSEhZCx1JiYoZi5vcHRpb25hbD1wKSxlPXRoaXMuZmluaXNoTm9kZShmLFwiTWVtYmVyRXhwcmVzc2lvblwiKX1lbHNlIGlmKCFzJiZ0aGlzLmVhdChhLnBhcmVuTCkpe3ZhciBDPW5ldyB5ZSxCPXRoaXMueWllbGRQb3MsaD10aGlzLmF3YWl0UG9zLG09dGhpcy5hd2FpdElkZW50UG9zO3RoaXMueWllbGRQb3M9MCx0aGlzLmF3YWl0UG9zPTAsdGhpcy5hd2FpdElkZW50UG9zPTA7dmFyIHg9dGhpcy5wYXJzZUV4cHJMaXN0KGEucGFyZW5SLHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OCwhMSxDKTtpZihyJiYhcCYmdGhpcy5zaG91bGRQYXJzZUFzeW5jQXJyb3coKSlyZXR1cm4gdGhpcy5jaGVja1BhdHRlcm5FcnJvcnMoQywhMSksdGhpcy5jaGVja1lpZWxkQXdhaXRJbkRlZmF1bHRQYXJhbXMoKSx0aGlzLmF3YWl0SWRlbnRQb3M+MCYmdGhpcy5yYWlzZSh0aGlzLmF3YWl0SWRlbnRQb3MsXCJDYW5ub3QgdXNlICdhd2FpdCcgYXMgaWRlbnRpZmllciBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb25cIiksdGhpcy55aWVsZFBvcz1CLHRoaXMuYXdhaXRQb3M9aCx0aGlzLmF3YWl0SWRlbnRQb3M9bSx0aGlzLnBhcnNlU3Vic2NyaXB0QXN5bmNBcnJvdyh0LGkseCxvKTt0aGlzLmNoZWNrRXhwcmVzc2lvbkVycm9ycyhDLCEwKSx0aGlzLnlpZWxkUG9zPUJ8fHRoaXMueWllbGRQb3MsdGhpcy5hd2FpdFBvcz1ofHx0aGlzLmF3YWl0UG9zLHRoaXMuYXdhaXRJZGVudFBvcz1tfHx0aGlzLmF3YWl0SWRlbnRQb3M7dmFyIGc9dGhpcy5zdGFydE5vZGVBdCh0LGkpO2cuY2FsbGVlPWUsZy5hcmd1bWVudHM9eCx1JiYoZy5vcHRpb25hbD1wKSxlPXRoaXMuZmluaXNoTm9kZShnLFwiQ2FsbEV4cHJlc3Npb25cIil9ZWxzZSBpZih0aGlzLnR5cGU9PT1hLmJhY2tRdW90ZSl7KHB8fG4pJiZ0aGlzLnJhaXNlKHRoaXMuc3RhcnQsXCJPcHRpb25hbCBjaGFpbmluZyBjYW5ub3QgYXBwZWFyIGluIHRoZSB0YWcgb2YgdGFnZ2VkIHRlbXBsYXRlIGV4cHJlc3Npb25zXCIpO3ZhciB3PXRoaXMuc3RhcnROb2RlQXQodCxpKTt3LnRhZz1lLHcucXVhc2k9dGhpcy5wYXJzZVRlbXBsYXRlKHtpc1RhZ2dlZDohMH0pLGU9dGhpcy5maW5pc2hOb2RlKHcsXCJUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb25cIil9cmV0dXJuIGV9O3kucGFyc2VFeHByQXRvbT1mdW5jdGlvbihlLHQsaSl7dGhpcy50eXBlPT09YS5zbGFzaCYmdGhpcy5yZWFkUmVnZXhwKCk7dmFyIHMscj10aGlzLnBvdGVudGlhbEFycm93QXQ9PT10aGlzLnN0YXJ0O3N3aXRjaCh0aGlzLnR5cGUpe2Nhc2UgYS5fc3VwZXI6cmV0dXJuIHRoaXMuYWxsb3dTdXBlcnx8dGhpcy5yYWlzZSh0aGlzLnN0YXJ0LFwiJ3N1cGVyJyBrZXl3b3JkIG91dHNpZGUgYSBtZXRob2RcIikscz10aGlzLnN0YXJ0Tm9kZSgpLHRoaXMubmV4dCgpLHRoaXMudHlwZT09PWEucGFyZW5MJiYhdGhpcy5hbGxvd0RpcmVjdFN1cGVyJiZ0aGlzLnJhaXNlKHMuc3RhcnQsXCJzdXBlcigpIGNhbGwgb3V0c2lkZSBjb25zdHJ1Y3RvciBvZiBhIHN1YmNsYXNzXCIpLHRoaXMudHlwZSE9PWEuZG90JiZ0aGlzLnR5cGUhPT1hLmJyYWNrZXRMJiZ0aGlzLnR5cGUhPT1hLnBhcmVuTCYmdGhpcy51bmV4cGVjdGVkKCksdGhpcy5maW5pc2hOb2RlKHMsXCJTdXBlclwiKTtjYXNlIGEuX3RoaXM6cmV0dXJuIHM9dGhpcy5zdGFydE5vZGUoKSx0aGlzLm5leHQoKSx0aGlzLmZpbmlzaE5vZGUocyxcIlRoaXNFeHByZXNzaW9uXCIpO2Nhc2UgYS5uYW1lOnZhciBuPXRoaXMuc3RhcnQsbz10aGlzLnN0YXJ0TG9jLHU9dGhpcy5jb250YWluc0VzYyxwPXRoaXMucGFyc2VJZGVudCghMSk7aWYodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj04JiYhdSYmcC5uYW1lPT09XCJhc3luY1wiJiYhdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKSYmdGhpcy5lYXQoYS5fZnVuY3Rpb24pKXJldHVybiB0aGlzLm92ZXJyaWRlQ29udGV4dChfLmZfZXhwciksdGhpcy5wYXJzZUZ1bmN0aW9uKHRoaXMuc3RhcnROb2RlQXQobixvKSwwLCExLCEwLHQpO2lmKHImJiF0aGlzLmNhbkluc2VydFNlbWljb2xvbigpKXtpZih0aGlzLmVhdChhLmFycm93KSlyZXR1cm4gdGhpcy5wYXJzZUFycm93RXhwcmVzc2lvbih0aGlzLnN0YXJ0Tm9kZUF0KG4sbyksW3BdLCExLHQpO2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OCYmcC5uYW1lPT09XCJhc3luY1wiJiZ0aGlzLnR5cGU9PT1hLm5hbWUmJiF1JiYoIXRoaXMucG90ZW50aWFsQXJyb3dJbkZvckF3YWl0fHx0aGlzLnZhbHVlIT09XCJvZlwifHx0aGlzLmNvbnRhaW5zRXNjKSlyZXR1cm4gcD10aGlzLnBhcnNlSWRlbnQoITEpLCh0aGlzLmNhbkluc2VydFNlbWljb2xvbigpfHwhdGhpcy5lYXQoYS5hcnJvdykpJiZ0aGlzLnVuZXhwZWN0ZWQoKSx0aGlzLnBhcnNlQXJyb3dFeHByZXNzaW9uKHRoaXMuc3RhcnROb2RlQXQobixvKSxbcF0sITAsdCl9cmV0dXJuIHA7Y2FzZSBhLnJlZ2V4cDp2YXIgZD10aGlzLnZhbHVlO3JldHVybiBzPXRoaXMucGFyc2VMaXRlcmFsKGQudmFsdWUpLHMucmVnZXg9e3BhdHRlcm46ZC5wYXR0ZXJuLGZsYWdzOmQuZmxhZ3N9LHM7Y2FzZSBhLm51bTpjYXNlIGEuc3RyaW5nOnJldHVybiB0aGlzLnBhcnNlTGl0ZXJhbCh0aGlzLnZhbHVlKTtjYXNlIGEuX251bGw6Y2FzZSBhLl90cnVlOmNhc2UgYS5fZmFsc2U6cmV0dXJuIHM9dGhpcy5zdGFydE5vZGUoKSxzLnZhbHVlPXRoaXMudHlwZT09PWEuX251bGw/bnVsbDp0aGlzLnR5cGU9PT1hLl90cnVlLHMucmF3PXRoaXMudHlwZS5rZXl3b3JkLHRoaXMubmV4dCgpLHRoaXMuZmluaXNoTm9kZShzLFwiTGl0ZXJhbFwiKTtjYXNlIGEucGFyZW5MOnZhciBmPXRoaXMuc3RhcnQsQz10aGlzLnBhcnNlUGFyZW5BbmREaXN0aW5ndWlzaEV4cHJlc3Npb24ocix0KTtyZXR1cm4gZSYmKGUucGFyZW50aGVzaXplZEFzc2lnbjwwJiYhdGhpcy5pc1NpbXBsZUFzc2lnblRhcmdldChDKSYmKGUucGFyZW50aGVzaXplZEFzc2lnbj1mKSxlLnBhcmVudGhlc2l6ZWRCaW5kPDAmJihlLnBhcmVudGhlc2l6ZWRCaW5kPWYpKSxDO2Nhc2UgYS5icmFja2V0TDpyZXR1cm4gcz10aGlzLnN0YXJ0Tm9kZSgpLHRoaXMubmV4dCgpLHMuZWxlbWVudHM9dGhpcy5wYXJzZUV4cHJMaXN0KGEuYnJhY2tldFIsITAsITAsZSksdGhpcy5maW5pc2hOb2RlKHMsXCJBcnJheUV4cHJlc3Npb25cIik7Y2FzZSBhLmJyYWNlTDpyZXR1cm4gdGhpcy5vdmVycmlkZUNvbnRleHQoXy5iX2V4cHIpLHRoaXMucGFyc2VPYmooITEsZSk7Y2FzZSBhLl9mdW5jdGlvbjpyZXR1cm4gcz10aGlzLnN0YXJ0Tm9kZSgpLHRoaXMubmV4dCgpLHRoaXMucGFyc2VGdW5jdGlvbihzLDApO2Nhc2UgYS5fY2xhc3M6cmV0dXJuIHRoaXMucGFyc2VDbGFzcyh0aGlzLnN0YXJ0Tm9kZSgpLCExKTtjYXNlIGEuX25ldzpyZXR1cm4gdGhpcy5wYXJzZU5ldygpO2Nhc2UgYS5iYWNrUXVvdGU6cmV0dXJuIHRoaXMucGFyc2VUZW1wbGF0ZSgpO2Nhc2UgYS5faW1wb3J0OnJldHVybiB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTExP3RoaXMucGFyc2VFeHBySW1wb3J0KGkpOnRoaXMudW5leHBlY3RlZCgpO2RlZmF1bHQ6cmV0dXJuIHRoaXMucGFyc2VFeHByQXRvbURlZmF1bHQoKX19O3kucGFyc2VFeHByQXRvbURlZmF1bHQ9ZnVuY3Rpb24oKXt0aGlzLnVuZXhwZWN0ZWQoKX07eS5wYXJzZUV4cHJJbXBvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zdGFydE5vZGUoKTtpZih0aGlzLmNvbnRhaW5zRXNjJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCxcIkVzY2FwZSBzZXF1ZW5jZSBpbiBrZXl3b3JkIGltcG9ydFwiKSx0aGlzLm5leHQoKSx0aGlzLnR5cGU9PT1hLnBhcmVuTCYmIWUpcmV0dXJuIHRoaXMucGFyc2VEeW5hbWljSW1wb3J0KHQpO2lmKHRoaXMudHlwZT09PWEuZG90KXt2YXIgaT10aGlzLnN0YXJ0Tm9kZUF0KHQuc3RhcnQsdC5sb2MmJnQubG9jLnN0YXJ0KTtyZXR1cm4gaS5uYW1lPVwiaW1wb3J0XCIsdC5tZXRhPXRoaXMuZmluaXNoTm9kZShpLFwiSWRlbnRpZmllclwiKSx0aGlzLnBhcnNlSW1wb3J0TWV0YSh0KX1lbHNlIHRoaXMudW5leHBlY3RlZCgpfTt5LnBhcnNlRHluYW1pY0ltcG9ydD1mdW5jdGlvbihlKXtpZih0aGlzLm5leHQoKSxlLnNvdXJjZT10aGlzLnBhcnNlTWF5YmVBc3NpZ24oKSx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTE2KXRoaXMuZWF0KGEucGFyZW5SKT9lLm9wdGlvbnM9bnVsbDoodGhpcy5leHBlY3QoYS5jb21tYSksdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEoYS5wYXJlblIpP2Uub3B0aW9ucz1udWxsOihlLm9wdGlvbnM9dGhpcy5wYXJzZU1heWJlQXNzaWduKCksdGhpcy5lYXQoYS5wYXJlblIpfHwodGhpcy5leHBlY3QoYS5jb21tYSksdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEoYS5wYXJlblIpfHx0aGlzLnVuZXhwZWN0ZWQoKSkpKTtlbHNlIGlmKCF0aGlzLmVhdChhLnBhcmVuUikpe3ZhciB0PXRoaXMuc3RhcnQ7dGhpcy5lYXQoYS5jb21tYSkmJnRoaXMuZWF0KGEucGFyZW5SKT90aGlzLnJhaXNlUmVjb3ZlcmFibGUodCxcIlRyYWlsaW5nIGNvbW1hIGlzIG5vdCBhbGxvd2VkIGluIGltcG9ydCgpXCIpOnRoaXMudW5leHBlY3RlZCh0KX1yZXR1cm4gdGhpcy5maW5pc2hOb2RlKGUsXCJJbXBvcnRFeHByZXNzaW9uXCIpfTt5LnBhcnNlSW1wb3J0TWV0YT1mdW5jdGlvbihlKXt0aGlzLm5leHQoKTt2YXIgdD10aGlzLmNvbnRhaW5zRXNjO3JldHVybiBlLnByb3BlcnR5PXRoaXMucGFyc2VJZGVudCghMCksZS5wcm9wZXJ0eS5uYW1lIT09XCJtZXRhXCImJnRoaXMucmFpc2VSZWNvdmVyYWJsZShlLnByb3BlcnR5LnN0YXJ0LFwiVGhlIG9ubHkgdmFsaWQgbWV0YSBwcm9wZXJ0eSBmb3IgaW1wb3J0IGlzICdpbXBvcnQubWV0YSdcIiksdCYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKGUuc3RhcnQsXCInaW1wb3J0Lm1ldGEnIG11c3Qgbm90IGNvbnRhaW4gZXNjYXBlZCBjaGFyYWN0ZXJzXCIpLHRoaXMub3B0aW9ucy5zb3VyY2VUeXBlIT09XCJtb2R1bGVcIiYmIXRoaXMub3B0aW9ucy5hbGxvd0ltcG9ydEV4cG9ydEV2ZXJ5d2hlcmUmJnRoaXMucmFpc2VSZWNvdmVyYWJsZShlLnN0YXJ0LFwiQ2Fubm90IHVzZSAnaW1wb3J0Lm1ldGEnIG91dHNpZGUgYSBtb2R1bGVcIiksdGhpcy5maW5pc2hOb2RlKGUsXCJNZXRhUHJvcGVydHlcIil9O3kucGFyc2VMaXRlcmFsPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc3RhcnROb2RlKCk7cmV0dXJuIHQudmFsdWU9ZSx0LnJhdz10aGlzLmlucHV0LnNsaWNlKHRoaXMuc3RhcnQsdGhpcy5lbmQpLHQucmF3LmNoYXJDb2RlQXQodC5yYXcubGVuZ3RoLTEpPT09MTEwJiYodC5iaWdpbnQ9dC5yYXcuc2xpY2UoMCwtMSkucmVwbGFjZSgvXy9nLFwiXCIpKSx0aGlzLm5leHQoKSx0aGlzLmZpbmlzaE5vZGUodCxcIkxpdGVyYWxcIil9O3kucGFyc2VQYXJlbkV4cHJlc3Npb249ZnVuY3Rpb24oKXt0aGlzLmV4cGVjdChhLnBhcmVuTCk7dmFyIGU9dGhpcy5wYXJzZUV4cHJlc3Npb24oKTtyZXR1cm4gdGhpcy5leHBlY3QoYS5wYXJlblIpLGV9O3kuc2hvdWxkUGFyc2VBcnJvdz1mdW5jdGlvbihlKXtyZXR1cm4hdGhpcy5jYW5JbnNlcnRTZW1pY29sb24oKX07eS5wYXJzZVBhcmVuQW5kRGlzdGluZ3Vpc2hFeHByZXNzaW9uPWZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5zdGFydCxzPXRoaXMuc3RhcnRMb2MscixuPXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49ODtpZih0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTYpe3RoaXMubmV4dCgpO3ZhciBvPXRoaXMuc3RhcnQsdT10aGlzLnN0YXJ0TG9jLHA9W10sZD0hMCxmPSExLEM9bmV3IHllLEI9dGhpcy55aWVsZFBvcyxoPXRoaXMuYXdhaXRQb3MsbTtmb3IodGhpcy55aWVsZFBvcz0wLHRoaXMuYXdhaXRQb3M9MDt0aGlzLnR5cGUhPT1hLnBhcmVuUjspaWYoZD9kPSExOnRoaXMuZXhwZWN0KGEuY29tbWEpLG4mJnRoaXMuYWZ0ZXJUcmFpbGluZ0NvbW1hKGEucGFyZW5SLCEwKSl7Zj0hMDticmVha31lbHNlIGlmKHRoaXMudHlwZT09PWEuZWxsaXBzaXMpe209dGhpcy5zdGFydCxwLnB1c2godGhpcy5wYXJzZVBhcmVuSXRlbSh0aGlzLnBhcnNlUmVzdEJpbmRpbmcoKSkpLHRoaXMudHlwZT09PWEuY29tbWEmJnRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LFwiQ29tbWEgaXMgbm90IHBlcm1pdHRlZCBhZnRlciB0aGUgcmVzdCBlbGVtZW50XCIpO2JyZWFrfWVsc2UgcC5wdXNoKHRoaXMucGFyc2VNYXliZUFzc2lnbighMSxDLHRoaXMucGFyc2VQYXJlbkl0ZW0pKTt2YXIgeD10aGlzLmxhc3RUb2tFbmQsZz10aGlzLmxhc3RUb2tFbmRMb2M7aWYodGhpcy5leHBlY3QoYS5wYXJlblIpLGUmJnRoaXMuc2hvdWxkUGFyc2VBcnJvdyhwKSYmdGhpcy5lYXQoYS5hcnJvdykpcmV0dXJuIHRoaXMuY2hlY2tQYXR0ZXJuRXJyb3JzKEMsITEpLHRoaXMuY2hlY2tZaWVsZEF3YWl0SW5EZWZhdWx0UGFyYW1zKCksdGhpcy55aWVsZFBvcz1CLHRoaXMuYXdhaXRQb3M9aCx0aGlzLnBhcnNlUGFyZW5BcnJvd0xpc3QoaSxzLHAsdCk7KCFwLmxlbmd0aHx8ZikmJnRoaXMudW5leHBlY3RlZCh0aGlzLmxhc3RUb2tTdGFydCksbSYmdGhpcy51bmV4cGVjdGVkKG0pLHRoaXMuY2hlY2tFeHByZXNzaW9uRXJyb3JzKEMsITApLHRoaXMueWllbGRQb3M9Qnx8dGhpcy55aWVsZFBvcyx0aGlzLmF3YWl0UG9zPWh8fHRoaXMuYXdhaXRQb3MscC5sZW5ndGg+MT8ocj10aGlzLnN0YXJ0Tm9kZUF0KG8sdSksci5leHByZXNzaW9ucz1wLHRoaXMuZmluaXNoTm9kZUF0KHIsXCJTZXF1ZW5jZUV4cHJlc3Npb25cIix4LGcpKTpyPXBbMF19ZWxzZSByPXRoaXMucGFyc2VQYXJlbkV4cHJlc3Npb24oKTtpZih0aGlzLm9wdGlvbnMucHJlc2VydmVQYXJlbnMpe3ZhciB3PXRoaXMuc3RhcnROb2RlQXQoaSxzKTtyZXR1cm4gdy5leHByZXNzaW9uPXIsdGhpcy5maW5pc2hOb2RlKHcsXCJQYXJlbnRoZXNpemVkRXhwcmVzc2lvblwiKX1lbHNlIHJldHVybiByfTt5LnBhcnNlUGFyZW5JdGVtPWZ1bmN0aW9uKGUpe3JldHVybiBlfTt5LnBhcnNlUGFyZW5BcnJvd0xpc3Q9ZnVuY3Rpb24oZSx0LGkscyl7cmV0dXJuIHRoaXMucGFyc2VBcnJvd0V4cHJlc3Npb24odGhpcy5zdGFydE5vZGVBdChlLHQpLGksITEscyl9O3ZhciBEaT1bXTt5LnBhcnNlTmV3PWZ1bmN0aW9uKCl7dGhpcy5jb250YWluc0VzYyYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsXCJFc2NhcGUgc2VxdWVuY2UgaW4ga2V5d29yZCBuZXdcIik7dmFyIGU9dGhpcy5zdGFydE5vZGUoKTtpZih0aGlzLm5leHQoKSx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTYmJnRoaXMudHlwZT09PWEuZG90KXt2YXIgdD10aGlzLnN0YXJ0Tm9kZUF0KGUuc3RhcnQsZS5sb2MmJmUubG9jLnN0YXJ0KTt0Lm5hbWU9XCJuZXdcIixlLm1ldGE9dGhpcy5maW5pc2hOb2RlKHQsXCJJZGVudGlmaWVyXCIpLHRoaXMubmV4dCgpO3ZhciBpPXRoaXMuY29udGFpbnNFc2M7cmV0dXJuIGUucHJvcGVydHk9dGhpcy5wYXJzZUlkZW50KCEwKSxlLnByb3BlcnR5Lm5hbWUhPT1cInRhcmdldFwiJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUoZS5wcm9wZXJ0eS5zdGFydCxcIlRoZSBvbmx5IHZhbGlkIG1ldGEgcHJvcGVydHkgZm9yIG5ldyBpcyAnbmV3LnRhcmdldCdcIiksaSYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKGUuc3RhcnQsXCInbmV3LnRhcmdldCcgbXVzdCBub3QgY29udGFpbiBlc2NhcGVkIGNoYXJhY3RlcnNcIiksdGhpcy5hbGxvd05ld0RvdFRhcmdldHx8dGhpcy5yYWlzZVJlY292ZXJhYmxlKGUuc3RhcnQsXCInbmV3LnRhcmdldCcgY2FuIG9ubHkgYmUgdXNlZCBpbiBmdW5jdGlvbnMgYW5kIGNsYXNzIHN0YXRpYyBibG9ja1wiKSx0aGlzLmZpbmlzaE5vZGUoZSxcIk1ldGFQcm9wZXJ0eVwiKX12YXIgcz10aGlzLnN0YXJ0LHI9dGhpcy5zdGFydExvYztyZXR1cm4gZS5jYWxsZWU9dGhpcy5wYXJzZVN1YnNjcmlwdHModGhpcy5wYXJzZUV4cHJBdG9tKG51bGwsITEsITApLHMsciwhMCwhMSksdGhpcy5lYXQoYS5wYXJlbkwpP2UuYXJndW1lbnRzPXRoaXMucGFyc2VFeHByTGlzdChhLnBhcmVuUix0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTgsITEpOmUuYXJndW1lbnRzPURpLHRoaXMuZmluaXNoTm9kZShlLFwiTmV3RXhwcmVzc2lvblwiKX07eS5wYXJzZVRlbXBsYXRlRWxlbWVudD1mdW5jdGlvbihlKXt2YXIgdD1lLmlzVGFnZ2VkLGk9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy50eXBlPT09YS5pbnZhbGlkVGVtcGxhdGU/KHR8fHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LFwiQmFkIGVzY2FwZSBzZXF1ZW5jZSBpbiB1bnRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsXCIpLGkudmFsdWU9e3Jhdzp0aGlzLnZhbHVlLnJlcGxhY2UoL1xcclxcbj8vZyxgXG5gKSxjb29rZWQ6bnVsbH0pOmkudmFsdWU9e3Jhdzp0aGlzLmlucHV0LnNsaWNlKHRoaXMuc3RhcnQsdGhpcy5lbmQpLnJlcGxhY2UoL1xcclxcbj8vZyxgXG5gKSxjb29rZWQ6dGhpcy52YWx1ZX0sdGhpcy5uZXh0KCksaS50YWlsPXRoaXMudHlwZT09PWEuYmFja1F1b3RlLHRoaXMuZmluaXNoTm9kZShpLFwiVGVtcGxhdGVFbGVtZW50XCIpfTt5LnBhcnNlVGVtcGxhdGU9ZnVuY3Rpb24oZSl7ZT09PXZvaWQgMCYmKGU9e30pO3ZhciB0PWUuaXNUYWdnZWQ7dD09PXZvaWQgMCYmKHQ9ITEpO3ZhciBpPXRoaXMuc3RhcnROb2RlKCk7dGhpcy5uZXh0KCksaS5leHByZXNzaW9ucz1bXTt2YXIgcz10aGlzLnBhcnNlVGVtcGxhdGVFbGVtZW50KHtpc1RhZ2dlZDp0fSk7Zm9yKGkucXVhc2lzPVtzXTshcy50YWlsOyl0aGlzLnR5cGU9PT1hLmVvZiYmdGhpcy5yYWlzZSh0aGlzLnBvcyxcIlVudGVybWluYXRlZCB0ZW1wbGF0ZSBsaXRlcmFsXCIpLHRoaXMuZXhwZWN0KGEuZG9sbGFyQnJhY2VMKSxpLmV4cHJlc3Npb25zLnB1c2godGhpcy5wYXJzZUV4cHJlc3Npb24oKSksdGhpcy5leHBlY3QoYS5icmFjZVIpLGkucXVhc2lzLnB1c2gocz10aGlzLnBhcnNlVGVtcGxhdGVFbGVtZW50KHtpc1RhZ2dlZDp0fSkpO3JldHVybiB0aGlzLm5leHQoKSx0aGlzLmZpbmlzaE5vZGUoaSxcIlRlbXBsYXRlTGl0ZXJhbFwiKX07eS5pc0FzeW5jUHJvcD1mdW5jdGlvbihlKXtyZXR1cm4hZS5jb21wdXRlZCYmZS5rZXkudHlwZT09PVwiSWRlbnRpZmllclwiJiZlLmtleS5uYW1lPT09XCJhc3luY1wiJiYodGhpcy50eXBlPT09YS5uYW1lfHx0aGlzLnR5cGU9PT1hLm51bXx8dGhpcy50eXBlPT09YS5zdHJpbmd8fHRoaXMudHlwZT09PWEuYnJhY2tldEx8fHRoaXMudHlwZS5rZXl3b3JkfHx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTkmJnRoaXMudHlwZT09PWEuc3RhcikmJiFMLnRlc3QodGhpcy5pbnB1dC5zbGljZSh0aGlzLmxhc3RUb2tFbmQsdGhpcy5zdGFydCkpfTt5LnBhcnNlT2JqPWZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5zdGFydE5vZGUoKSxzPSEwLHI9e307Zm9yKGkucHJvcGVydGllcz1bXSx0aGlzLm5leHQoKTshdGhpcy5lYXQoYS5icmFjZVIpOyl7aWYocylzPSExO2Vsc2UgaWYodGhpcy5leHBlY3QoYS5jb21tYSksdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj01JiZ0aGlzLmFmdGVyVHJhaWxpbmdDb21tYShhLmJyYWNlUikpYnJlYWs7dmFyIG49dGhpcy5wYXJzZVByb3BlcnR5KGUsdCk7ZXx8dGhpcy5jaGVja1Byb3BDbGFzaChuLHIsdCksaS5wcm9wZXJ0aWVzLnB1c2gobil9cmV0dXJuIHRoaXMuZmluaXNoTm9kZShpLGU/XCJPYmplY3RQYXR0ZXJuXCI6XCJPYmplY3RFeHByZXNzaW9uXCIpfTt5LnBhcnNlUHJvcGVydHk9ZnVuY3Rpb24oZSx0KXt2YXIgaT10aGlzLnN0YXJ0Tm9kZSgpLHMscixuLG87aWYodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj05JiZ0aGlzLmVhdChhLmVsbGlwc2lzKSlyZXR1cm4gZT8oaS5hcmd1bWVudD10aGlzLnBhcnNlSWRlbnQoITEpLHRoaXMudHlwZT09PWEuY29tbWEmJnRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnN0YXJ0LFwiQ29tbWEgaXMgbm90IHBlcm1pdHRlZCBhZnRlciB0aGUgcmVzdCBlbGVtZW50XCIpLHRoaXMuZmluaXNoTm9kZShpLFwiUmVzdEVsZW1lbnRcIikpOihpLmFyZ3VtZW50PXRoaXMucGFyc2VNYXliZUFzc2lnbighMSx0KSx0aGlzLnR5cGU9PT1hLmNvbW1hJiZ0JiZ0LnRyYWlsaW5nQ29tbWE8MCYmKHQudHJhaWxpbmdDb21tYT10aGlzLnN0YXJ0KSx0aGlzLmZpbmlzaE5vZGUoaSxcIlNwcmVhZEVsZW1lbnRcIikpO3RoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NiYmKGkubWV0aG9kPSExLGkuc2hvcnRoYW5kPSExLChlfHx0KSYmKG49dGhpcy5zdGFydCxvPXRoaXMuc3RhcnRMb2MpLGV8fChzPXRoaXMuZWF0KGEuc3RhcikpKTt2YXIgdT10aGlzLmNvbnRhaW5zRXNjO3JldHVybiB0aGlzLnBhcnNlUHJvcGVydHlOYW1lKGkpLCFlJiYhdSYmdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj04JiYhcyYmdGhpcy5pc0FzeW5jUHJvcChpKT8ocj0hMCxzPXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OSYmdGhpcy5lYXQoYS5zdGFyKSx0aGlzLnBhcnNlUHJvcGVydHlOYW1lKGkpKTpyPSExLHRoaXMucGFyc2VQcm9wZXJ0eVZhbHVlKGksZSxzLHIsbixvLHQsdSksdGhpcy5maW5pc2hOb2RlKGksXCJQcm9wZXJ0eVwiKX07eS5wYXJzZUdldHRlclNldHRlcj1mdW5jdGlvbihlKXtlLmtpbmQ9ZS5rZXkubmFtZSx0aGlzLnBhcnNlUHJvcGVydHlOYW1lKGUpLGUudmFsdWU9dGhpcy5wYXJzZU1ldGhvZCghMSk7dmFyIHQ9ZS5raW5kPT09XCJnZXRcIj8wOjE7aWYoZS52YWx1ZS5wYXJhbXMubGVuZ3RoIT09dCl7dmFyIGk9ZS52YWx1ZS5zdGFydDtlLmtpbmQ9PT1cImdldFwiP3RoaXMucmFpc2VSZWNvdmVyYWJsZShpLFwiZ2V0dGVyIHNob3VsZCBoYXZlIG5vIHBhcmFtc1wiKTp0aGlzLnJhaXNlUmVjb3ZlcmFibGUoaSxcInNldHRlciBzaG91bGQgaGF2ZSBleGFjdGx5IG9uZSBwYXJhbVwiKX1lbHNlIGUua2luZD09PVwic2V0XCImJmUudmFsdWUucGFyYW1zWzBdLnR5cGU9PT1cIlJlc3RFbGVtZW50XCImJnRoaXMucmFpc2VSZWNvdmVyYWJsZShlLnZhbHVlLnBhcmFtc1swXS5zdGFydCxcIlNldHRlciBjYW5ub3QgdXNlIHJlc3QgcGFyYW1zXCIpfTt5LnBhcnNlUHJvcGVydHlWYWx1ZT1mdW5jdGlvbihlLHQsaSxzLHIsbixvLHUpeyhpfHxzKSYmdGhpcy50eXBlPT09YS5jb2xvbiYmdGhpcy51bmV4cGVjdGVkKCksdGhpcy5lYXQoYS5jb2xvbik/KGUudmFsdWU9dD90aGlzLnBhcnNlTWF5YmVEZWZhdWx0KHRoaXMuc3RhcnQsdGhpcy5zdGFydExvYyk6dGhpcy5wYXJzZU1heWJlQXNzaWduKCExLG8pLGUua2luZD1cImluaXRcIik6dGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj02JiZ0aGlzLnR5cGU9PT1hLnBhcmVuTD8odCYmdGhpcy51bmV4cGVjdGVkKCksZS5raW5kPVwiaW5pdFwiLGUubWV0aG9kPSEwLGUudmFsdWU9dGhpcy5wYXJzZU1ldGhvZChpLHMpKTohdCYmIXUmJnRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NSYmIWUuY29tcHV0ZWQmJmUua2V5LnR5cGU9PT1cIklkZW50aWZpZXJcIiYmKGUua2V5Lm5hbWU9PT1cImdldFwifHxlLmtleS5uYW1lPT09XCJzZXRcIikmJnRoaXMudHlwZSE9PWEuY29tbWEmJnRoaXMudHlwZSE9PWEuYnJhY2VSJiZ0aGlzLnR5cGUhPT1hLmVxPygoaXx8cykmJnRoaXMudW5leHBlY3RlZCgpLHRoaXMucGFyc2VHZXR0ZXJTZXR0ZXIoZSkpOnRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NiYmIWUuY29tcHV0ZWQmJmUua2V5LnR5cGU9PT1cIklkZW50aWZpZXJcIj8oKGl8fHMpJiZ0aGlzLnVuZXhwZWN0ZWQoKSx0aGlzLmNoZWNrVW5yZXNlcnZlZChlLmtleSksZS5rZXkubmFtZT09PVwiYXdhaXRcIiYmIXRoaXMuYXdhaXRJZGVudFBvcyYmKHRoaXMuYXdhaXRJZGVudFBvcz1yKSxlLmtpbmQ9XCJpbml0XCIsdD9lLnZhbHVlPXRoaXMucGFyc2VNYXliZURlZmF1bHQocixuLHRoaXMuY29weU5vZGUoZS5rZXkpKTp0aGlzLnR5cGU9PT1hLmVxJiZvPyhvLnNob3J0aGFuZEFzc2lnbjwwJiYoby5zaG9ydGhhbmRBc3NpZ249dGhpcy5zdGFydCksZS52YWx1ZT10aGlzLnBhcnNlTWF5YmVEZWZhdWx0KHIsbix0aGlzLmNvcHlOb2RlKGUua2V5KSkpOmUudmFsdWU9dGhpcy5jb3B5Tm9kZShlLmtleSksZS5zaG9ydGhhbmQ9ITApOnRoaXMudW5leHBlY3RlZCgpfTt5LnBhcnNlUHJvcGVydHlOYW1lPWZ1bmN0aW9uKGUpe2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49Nil7aWYodGhpcy5lYXQoYS5icmFja2V0TCkpcmV0dXJuIGUuY29tcHV0ZWQ9ITAsZS5rZXk9dGhpcy5wYXJzZU1heWJlQXNzaWduKCksdGhpcy5leHBlY3QoYS5icmFja2V0UiksZS5rZXk7ZS5jb21wdXRlZD0hMX1yZXR1cm4gZS5rZXk9dGhpcy50eXBlPT09YS5udW18fHRoaXMudHlwZT09PWEuc3RyaW5nP3RoaXMucGFyc2VFeHByQXRvbSgpOnRoaXMucGFyc2VJZGVudCh0aGlzLm9wdGlvbnMuYWxsb3dSZXNlcnZlZCE9PVwibmV2ZXJcIil9O3kuaW5pdEZ1bmN0aW9uPWZ1bmN0aW9uKGUpe2UuaWQ9bnVsbCx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTYmJihlLmdlbmVyYXRvcj1lLmV4cHJlc3Npb249ITEpLHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OCYmKGUuYXN5bmM9ITEpfTt5LnBhcnNlTWV0aG9kPWZ1bmN0aW9uKGUsdCxpKXt2YXIgcz10aGlzLnN0YXJ0Tm9kZSgpLHI9dGhpcy55aWVsZFBvcyxuPXRoaXMuYXdhaXRQb3Msbz10aGlzLmF3YWl0SWRlbnRQb3M7cmV0dXJuIHRoaXMuaW5pdEZ1bmN0aW9uKHMpLHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NiYmKHMuZ2VuZXJhdG9yPWUpLHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OCYmKHMuYXN5bmM9ISF0KSx0aGlzLnlpZWxkUG9zPTAsdGhpcy5hd2FpdFBvcz0wLHRoaXMuYXdhaXRJZGVudFBvcz0wLHRoaXMuZW50ZXJTY29wZShqZSh0LHMuZ2VuZXJhdG9yKXxEZXwoaT9tdDowKSksdGhpcy5leHBlY3QoYS5wYXJlbkwpLHMucGFyYW1zPXRoaXMucGFyc2VCaW5kaW5nTGlzdChhLnBhcmVuUiwhMSx0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTgpLHRoaXMuY2hlY2tZaWVsZEF3YWl0SW5EZWZhdWx0UGFyYW1zKCksdGhpcy5wYXJzZUZ1bmN0aW9uQm9keShzLCExLCEwLCExKSx0aGlzLnlpZWxkUG9zPXIsdGhpcy5hd2FpdFBvcz1uLHRoaXMuYXdhaXRJZGVudFBvcz1vLHRoaXMuZmluaXNoTm9kZShzLFwiRnVuY3Rpb25FeHByZXNzaW9uXCIpfTt5LnBhcnNlQXJyb3dFeHByZXNzaW9uPWZ1bmN0aW9uKGUsdCxpLHMpe3ZhciByPXRoaXMueWllbGRQb3Msbj10aGlzLmF3YWl0UG9zLG89dGhpcy5hd2FpdElkZW50UG9zO3JldHVybiB0aGlzLmVudGVyU2NvcGUoamUoaSwhMSl8ZnQpLHRoaXMuaW5pdEZ1bmN0aW9uKGUpLHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OCYmKGUuYXN5bmM9ISFpKSx0aGlzLnlpZWxkUG9zPTAsdGhpcy5hd2FpdFBvcz0wLHRoaXMuYXdhaXRJZGVudFBvcz0wLGUucGFyYW1zPXRoaXMudG9Bc3NpZ25hYmxlTGlzdCh0LCEwKSx0aGlzLnBhcnNlRnVuY3Rpb25Cb2R5KGUsITAsITEscyksdGhpcy55aWVsZFBvcz1yLHRoaXMuYXdhaXRQb3M9bix0aGlzLmF3YWl0SWRlbnRQb3M9byx0aGlzLmZpbmlzaE5vZGUoZSxcIkFycm93RnVuY3Rpb25FeHByZXNzaW9uXCIpfTt5LnBhcnNlRnVuY3Rpb25Cb2R5PWZ1bmN0aW9uKGUsdCxpLHMpe3ZhciByPXQmJnRoaXMudHlwZSE9PWEuYnJhY2VMLG49dGhpcy5zdHJpY3Qsbz0hMTtpZihyKWUuYm9keT10aGlzLnBhcnNlTWF5YmVBc3NpZ24ocyksZS5leHByZXNzaW9uPSEwLHRoaXMuY2hlY2tQYXJhbXMoZSwhMSk7ZWxzZXt2YXIgdT10aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTcmJiF0aGlzLmlzU2ltcGxlUGFyYW1MaXN0KGUucGFyYW1zKTsoIW58fHUpJiYobz10aGlzLnN0cmljdERpcmVjdGl2ZSh0aGlzLmVuZCksbyYmdSYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKGUuc3RhcnQsXCJJbGxlZ2FsICd1c2Ugc3RyaWN0JyBkaXJlY3RpdmUgaW4gZnVuY3Rpb24gd2l0aCBub24tc2ltcGxlIHBhcmFtZXRlciBsaXN0XCIpKTt2YXIgcD10aGlzLmxhYmVsczt0aGlzLmxhYmVscz1bXSxvJiYodGhpcy5zdHJpY3Q9ITApLHRoaXMuY2hlY2tQYXJhbXMoZSwhbiYmIW8mJiF0JiYhaSYmdGhpcy5pc1NpbXBsZVBhcmFtTGlzdChlLnBhcmFtcykpLHRoaXMuc3RyaWN0JiZlLmlkJiZ0aGlzLmNoZWNrTFZhbFNpbXBsZShlLmlkLGd0KSxlLmJvZHk9dGhpcy5wYXJzZUJsb2NrKCExLHZvaWQgMCxvJiYhbiksZS5leHByZXNzaW9uPSExLHRoaXMuYWRhcHREaXJlY3RpdmVQcm9sb2d1ZShlLmJvZHkuYm9keSksdGhpcy5sYWJlbHM9cH10aGlzLmV4aXRTY29wZSgpfTt5LmlzU2ltcGxlUGFyYW1MaXN0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLGk9ZTt0PGkubGVuZ3RoO3QrPTEpe3ZhciBzPWlbdF07aWYocy50eXBlIT09XCJJZGVudGlmaWVyXCIpcmV0dXJuITF9cmV0dXJuITB9O3kuY2hlY2tQYXJhbXM9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKSxzPTAscj1lLnBhcmFtcztzPHIubGVuZ3RoO3MrPTEpe3ZhciBuPXJbc107dGhpcy5jaGVja0xWYWxJbm5lclBhdHRlcm4obixNZSx0P251bGw6aSl9fTt5LnBhcnNlRXhwckxpc3Q9ZnVuY3Rpb24oZSx0LGkscyl7Zm9yKHZhciByPVtdLG49ITA7IXRoaXMuZWF0KGUpOyl7aWYobiluPSExO2Vsc2UgaWYodGhpcy5leHBlY3QoYS5jb21tYSksdCYmdGhpcy5hZnRlclRyYWlsaW5nQ29tbWEoZSkpYnJlYWs7dmFyIG89dm9pZCAwO2kmJnRoaXMudHlwZT09PWEuY29tbWE/bz1udWxsOnRoaXMudHlwZT09PWEuZWxsaXBzaXM/KG89dGhpcy5wYXJzZVNwcmVhZChzKSxzJiZ0aGlzLnR5cGU9PT1hLmNvbW1hJiZzLnRyYWlsaW5nQ29tbWE8MCYmKHMudHJhaWxpbmdDb21tYT10aGlzLnN0YXJ0KSk6bz10aGlzLnBhcnNlTWF5YmVBc3NpZ24oITEscyksci5wdXNoKG8pfXJldHVybiByfTt5LmNoZWNrVW5yZXNlcnZlZD1mdW5jdGlvbihlKXt2YXIgdD1lLnN0YXJ0LGk9ZS5lbmQscz1lLm5hbWU7aWYodGhpcy5pbkdlbmVyYXRvciYmcz09PVwieWllbGRcIiYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHQsXCJDYW5ub3QgdXNlICd5aWVsZCcgYXMgaWRlbnRpZmllciBpbnNpZGUgYSBnZW5lcmF0b3JcIiksdGhpcy5pbkFzeW5jJiZzPT09XCJhd2FpdFwiJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUodCxcIkNhbm5vdCB1c2UgJ2F3YWl0JyBhcyBpZGVudGlmaWVyIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvblwiKSx0aGlzLmN1cnJlbnRUaGlzU2NvcGUoKS5pbkNsYXNzRmllbGRJbml0JiZzPT09XCJhcmd1bWVudHNcIiYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHQsXCJDYW5ub3QgdXNlICdhcmd1bWVudHMnIGluIGNsYXNzIGZpZWxkIGluaXRpYWxpemVyXCIpLHRoaXMuaW5DbGFzc1N0YXRpY0Jsb2NrJiYocz09PVwiYXJndW1lbnRzXCJ8fHM9PT1cImF3YWl0XCIpJiZ0aGlzLnJhaXNlKHQsXCJDYW5ub3QgdXNlIFwiK3MrXCIgaW4gY2xhc3Mgc3RhdGljIGluaXRpYWxpemF0aW9uIGJsb2NrXCIpLHRoaXMua2V5d29yZHMudGVzdChzKSYmdGhpcy5yYWlzZSh0LFwiVW5leHBlY3RlZCBrZXl3b3JkICdcIitzK1wiJ1wiKSwhKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbjw2JiZ0aGlzLmlucHV0LnNsaWNlKHQsaSkuaW5kZXhPZihcIlxcXFxcIikhPT0tMSkpe3ZhciByPXRoaXMuc3RyaWN0P3RoaXMucmVzZXJ2ZWRXb3Jkc1N0cmljdDp0aGlzLnJlc2VydmVkV29yZHM7ci50ZXN0KHMpJiYoIXRoaXMuaW5Bc3luYyYmcz09PVwiYXdhaXRcIiYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHQsXCJDYW5ub3QgdXNlIGtleXdvcmQgJ2F3YWl0JyBvdXRzaWRlIGFuIGFzeW5jIGZ1bmN0aW9uXCIpLHRoaXMucmFpc2VSZWNvdmVyYWJsZSh0LFwiVGhlIGtleXdvcmQgJ1wiK3MrXCInIGlzIHJlc2VydmVkXCIpKX19O3kucGFyc2VJZGVudD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnBhcnNlSWRlbnROb2RlKCk7cmV0dXJuIHRoaXMubmV4dCghIWUpLHRoaXMuZmluaXNoTm9kZSh0LFwiSWRlbnRpZmllclwiKSxlfHwodGhpcy5jaGVja1VucmVzZXJ2ZWQodCksdC5uYW1lPT09XCJhd2FpdFwiJiYhdGhpcy5hd2FpdElkZW50UG9zJiYodGhpcy5hd2FpdElkZW50UG9zPXQuc3RhcnQpKSx0fTt5LnBhcnNlSWRlbnROb2RlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy50eXBlPT09YS5uYW1lP2UubmFtZT10aGlzLnZhbHVlOnRoaXMudHlwZS5rZXl3b3JkPyhlLm5hbWU9dGhpcy50eXBlLmtleXdvcmQsKGUubmFtZT09PVwiY2xhc3NcInx8ZS5uYW1lPT09XCJmdW5jdGlvblwiKSYmKHRoaXMubGFzdFRva0VuZCE9PXRoaXMubGFzdFRva1N0YXJ0KzF8fHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmxhc3RUb2tTdGFydCkhPT00NikmJnRoaXMuY29udGV4dC5wb3AoKSx0aGlzLnR5cGU9YS5uYW1lKTp0aGlzLnVuZXhwZWN0ZWQoKSxlfTt5LnBhcnNlUHJpdmF0ZUlkZW50PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy50eXBlPT09YS5wcml2YXRlSWQ/ZS5uYW1lPXRoaXMudmFsdWU6dGhpcy51bmV4cGVjdGVkKCksdGhpcy5uZXh0KCksdGhpcy5maW5pc2hOb2RlKGUsXCJQcml2YXRlSWRlbnRpZmllclwiKSx0aGlzLm9wdGlvbnMuY2hlY2tQcml2YXRlRmllbGRzJiYodGhpcy5wcml2YXRlTmFtZVN0YWNrLmxlbmd0aD09PTA/dGhpcy5yYWlzZShlLnN0YXJ0LFwiUHJpdmF0ZSBmaWVsZCAnI1wiK2UubmFtZStcIicgbXVzdCBiZSBkZWNsYXJlZCBpbiBhbiBlbmNsb3NpbmcgY2xhc3NcIik6dGhpcy5wcml2YXRlTmFtZVN0YWNrW3RoaXMucHJpdmF0ZU5hbWVTdGFjay5sZW5ndGgtMV0udXNlZC5wdXNoKGUpKSxlfTt5LnBhcnNlWWllbGQ9ZnVuY3Rpb24oZSl7dGhpcy55aWVsZFBvc3x8KHRoaXMueWllbGRQb3M9dGhpcy5zdGFydCk7dmFyIHQ9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy5uZXh0KCksdGhpcy50eXBlPT09YS5zZW1pfHx0aGlzLmNhbkluc2VydFNlbWljb2xvbigpfHx0aGlzLnR5cGUhPT1hLnN0YXImJiF0aGlzLnR5cGUuc3RhcnRzRXhwcj8odC5kZWxlZ2F0ZT0hMSx0LmFyZ3VtZW50PW51bGwpOih0LmRlbGVnYXRlPXRoaXMuZWF0KGEuc3RhciksdC5hcmd1bWVudD10aGlzLnBhcnNlTWF5YmVBc3NpZ24oZSkpLHRoaXMuZmluaXNoTm9kZSh0LFwiWWllbGRFeHByZXNzaW9uXCIpfTt5LnBhcnNlQXdhaXQ9ZnVuY3Rpb24oZSl7dGhpcy5hd2FpdFBvc3x8KHRoaXMuYXdhaXRQb3M9dGhpcy5zdGFydCk7dmFyIHQ9dGhpcy5zdGFydE5vZGUoKTtyZXR1cm4gdGhpcy5uZXh0KCksdC5hcmd1bWVudD10aGlzLnBhcnNlTWF5YmVVbmFyeShudWxsLCEwLCExLGUpLHRoaXMuZmluaXNoTm9kZSh0LFwiQXdhaXRFeHByZXNzaW9uXCIpfTt2YXIgZGU9VC5wcm90b3R5cGU7ZGUucmFpc2U9ZnVuY3Rpb24oZSx0KXt2YXIgaT1jdCh0aGlzLmlucHV0LGUpO3QrPVwiIChcIitpLmxpbmUrXCI6XCIraS5jb2x1bW4rXCIpXCI7dmFyIHM9bmV3IFN5bnRheEVycm9yKHQpO3Rocm93IHMucG9zPWUscy5sb2M9aSxzLnJhaXNlZEF0PXRoaXMucG9zLHN9O2RlLnJhaXNlUmVjb3ZlcmFibGU9ZGUucmFpc2U7ZGUuY3VyUG9zaXRpb249ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMubG9jYXRpb25zKXJldHVybiBuZXcgaWUodGhpcy5jdXJMaW5lLHRoaXMucG9zLXRoaXMubGluZVN0YXJ0KX07dmFyIFc9VC5wcm90b3R5cGUsRmk9ZnVuY3Rpb24odCl7dGhpcy5mbGFncz10LHRoaXMudmFyPVtdLHRoaXMubGV4aWNhbD1bXSx0aGlzLmZ1bmN0aW9ucz1bXSx0aGlzLmluQ2xhc3NGaWVsZEluaXQ9ITF9O1cuZW50ZXJTY29wZT1mdW5jdGlvbihlKXt0aGlzLnNjb3BlU3RhY2sucHVzaChuZXcgRmkoZSkpfTtXLmV4aXRTY29wZT1mdW5jdGlvbigpe3RoaXMuc2NvcGVTdGFjay5wb3AoKX07Vy50cmVhdEZ1bmN0aW9uc0FzVmFySW5TY29wZT1mdW5jdGlvbihlKXtyZXR1cm4gZS5mbGFncyZafHwhdGhpcy5pbk1vZHVsZSYmZS5mbGFncyZzZX07Vy5kZWNsYXJlTmFtZT1mdW5jdGlvbihlLHQsaSl7dmFyIHM9ITE7aWYodD09PUcpe3ZhciByPXRoaXMuY3VycmVudFNjb3BlKCk7cz1yLmxleGljYWwuaW5kZXhPZihlKT4tMXx8ci5mdW5jdGlvbnMuaW5kZXhPZihlKT4tMXx8ci52YXIuaW5kZXhPZihlKT4tMSxyLmxleGljYWwucHVzaChlKSx0aGlzLmluTW9kdWxlJiZyLmZsYWdzJnNlJiZkZWxldGUgdGhpcy51bmRlZmluZWRFeHBvcnRzW2VdfWVsc2UgaWYodD09PXl0KXt2YXIgbj10aGlzLmN1cnJlbnRTY29wZSgpO24ubGV4aWNhbC5wdXNoKGUpfWVsc2UgaWYodD09PXh0KXt2YXIgbz10aGlzLmN1cnJlbnRTY29wZSgpO3RoaXMudHJlYXRGdW5jdGlvbnNBc1Zhcj9zPW8ubGV4aWNhbC5pbmRleE9mKGUpPi0xOnM9by5sZXhpY2FsLmluZGV4T2YoZSk+LTF8fG8udmFyLmluZGV4T2YoZSk+LTEsby5mdW5jdGlvbnMucHVzaChlKX1lbHNlIGZvcih2YXIgdT10aGlzLnNjb3BlU3RhY2subGVuZ3RoLTE7dT49MDstLXUpe3ZhciBwPXRoaXMuc2NvcGVTdGFja1t1XTtpZihwLmxleGljYWwuaW5kZXhPZihlKT4tMSYmIShwLmZsYWdzJmR0JiZwLmxleGljYWxbMF09PT1lKXx8IXRoaXMudHJlYXRGdW5jdGlvbnNBc1ZhckluU2NvcGUocCkmJnAuZnVuY3Rpb25zLmluZGV4T2YoZSk+LTEpe3M9ITA7YnJlYWt9aWYocC52YXIucHVzaChlKSx0aGlzLmluTW9kdWxlJiZwLmZsYWdzJnNlJiZkZWxldGUgdGhpcy51bmRlZmluZWRFeHBvcnRzW2VdLHAuZmxhZ3MmRmUpYnJlYWt9cyYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKGksXCJJZGVudGlmaWVyICdcIitlK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkXCIpfTtXLmNoZWNrTG9jYWxFeHBvcnQ9ZnVuY3Rpb24oZSl7dGhpcy5zY29wZVN0YWNrWzBdLmxleGljYWwuaW5kZXhPZihlLm5hbWUpPT09LTEmJnRoaXMuc2NvcGVTdGFja1swXS52YXIuaW5kZXhPZihlLm5hbWUpPT09LTEmJih0aGlzLnVuZGVmaW5lZEV4cG9ydHNbZS5uYW1lXT1lKX07Vy5jdXJyZW50U2NvcGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zY29wZVN0YWNrW3RoaXMuc2NvcGVTdGFjay5sZW5ndGgtMV19O1cuY3VycmVudFZhclNjb3BlPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuc2NvcGVTdGFjay5sZW5ndGgtMTs7ZS0tKXt2YXIgdD10aGlzLnNjb3BlU3RhY2tbZV07aWYodC5mbGFncyZGZSlyZXR1cm4gdH19O1cuY3VycmVudFRoaXNTY29wZT1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLnNjb3BlU3RhY2subGVuZ3RoLTE7O2UtLSl7dmFyIHQ9dGhpcy5zY29wZVN0YWNrW2VdO2lmKHQuZmxhZ3MmRmUmJiEodC5mbGFncyZmdCkpcmV0dXJuIHR9fTt2YXIgZ2U9ZnVuY3Rpb24odCxpLHMpe3RoaXMudHlwZT1cIlwiLHRoaXMuc3RhcnQ9aSx0aGlzLmVuZD0wLHQub3B0aW9ucy5sb2NhdGlvbnMmJih0aGlzLmxvYz1uZXcgeGUodCxzKSksdC5vcHRpb25zLmRpcmVjdFNvdXJjZUZpbGUmJih0aGlzLnNvdXJjZUZpbGU9dC5vcHRpb25zLmRpcmVjdFNvdXJjZUZpbGUpLHQub3B0aW9ucy5yYW5nZXMmJih0aGlzLnJhbmdlPVtpLDBdKX0sYWU9VC5wcm90b3R5cGU7YWUuc3RhcnROb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBnZSh0aGlzLHRoaXMuc3RhcnQsdGhpcy5zdGFydExvYyl9O2FlLnN0YXJ0Tm9kZUF0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBnZSh0aGlzLGUsdCl9O2Z1bmN0aW9uIFN0KGUsdCxpLHMpe3JldHVybiBlLnR5cGU9dCxlLmVuZD1pLHRoaXMub3B0aW9ucy5sb2NhdGlvbnMmJihlLmxvYy5lbmQ9cyksdGhpcy5vcHRpb25zLnJhbmdlcyYmKGUucmFuZ2VbMV09aSksZX1hZS5maW5pc2hOb2RlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIFN0LmNhbGwodGhpcyxlLHQsdGhpcy5sYXN0VG9rRW5kLHRoaXMubGFzdFRva0VuZExvYyl9O2FlLmZpbmlzaE5vZGVBdD1mdW5jdGlvbihlLHQsaSxzKXtyZXR1cm4gU3QuY2FsbCh0aGlzLGUsdCxpLHMpfTthZS5jb3B5Tm9kZT1mdW5jdGlvbihlKXt2YXIgdD1uZXcgZ2UodGhpcyxlLnN0YXJ0LHRoaXMuc3RhcnRMb2MpO2Zvcih2YXIgaSBpbiBlKXRbaV09ZVtpXTtyZXR1cm4gdH07dmFyIGppPVwiR2FyYSBHYXJheSBHdWtoIEd1cnVuZ19LaGVtYSBIcmt0IEthdGFrYW5hX09yX0hpcmFnYW5hIEthd2kgS2lyYXRfUmFpIEtyYWkgTmFnX011bmRhcmkgTmFnbSBPbF9PbmFsIE9uYW8gU3VudSBTdW51d2FyIFRvZGhyaSBUb2RyIFR1bHVfVGlnYWxhcmkgVHV0ZyBVbmtub3duIFp6enpcIixDdD1cIkFTQ0lJIEFTQ0lJX0hleF9EaWdpdCBBSGV4IEFscGhhYmV0aWMgQWxwaGEgQW55IEFzc2lnbmVkIEJpZGlfQ29udHJvbCBCaWRpX0MgQmlkaV9NaXJyb3JlZCBCaWRpX00gQ2FzZV9JZ25vcmFibGUgQ0kgQ2FzZWQgQ2hhbmdlc19XaGVuX0Nhc2Vmb2xkZWQgQ1dDRiBDaGFuZ2VzX1doZW5fQ2FzZW1hcHBlZCBDV0NNIENoYW5nZXNfV2hlbl9Mb3dlcmNhc2VkIENXTCBDaGFuZ2VzX1doZW5fTkZLQ19DYXNlZm9sZGVkIENXS0NGIENoYW5nZXNfV2hlbl9UaXRsZWNhc2VkIENXVCBDaGFuZ2VzX1doZW5fVXBwZXJjYXNlZCBDV1UgRGFzaCBEZWZhdWx0X0lnbm9yYWJsZV9Db2RlX1BvaW50IERJIERlcHJlY2F0ZWQgRGVwIERpYWNyaXRpYyBEaWEgRW1vamkgRW1vamlfQ29tcG9uZW50IEVtb2ppX01vZGlmaWVyIEVtb2ppX01vZGlmaWVyX0Jhc2UgRW1vamlfUHJlc2VudGF0aW9uIEV4dGVuZGVyIEV4dCBHcmFwaGVtZV9CYXNlIEdyX0Jhc2UgR3JhcGhlbWVfRXh0ZW5kIEdyX0V4dCBIZXhfRGlnaXQgSGV4IElEU19CaW5hcnlfT3BlcmF0b3IgSURTQiBJRFNfVHJpbmFyeV9PcGVyYXRvciBJRFNUIElEX0NvbnRpbnVlIElEQyBJRF9TdGFydCBJRFMgSWRlb2dyYXBoaWMgSWRlbyBKb2luX0NvbnRyb2wgSm9pbl9DIExvZ2ljYWxfT3JkZXJfRXhjZXB0aW9uIExPRSBMb3dlcmNhc2UgTG93ZXIgTWF0aCBOb25jaGFyYWN0ZXJfQ29kZV9Qb2ludCBOQ2hhciBQYXR0ZXJuX1N5bnRheCBQYXRfU3luIFBhdHRlcm5fV2hpdGVfU3BhY2UgUGF0X1dTIFF1b3RhdGlvbl9NYXJrIFFNYXJrIFJhZGljYWwgUmVnaW9uYWxfSW5kaWNhdG9yIFJJIFNlbnRlbmNlX1Rlcm1pbmFsIFNUZXJtIFNvZnRfRG90dGVkIFNEIFRlcm1pbmFsX1B1bmN0dWF0aW9uIFRlcm0gVW5pZmllZF9JZGVvZ3JhcGggVUlkZW8gVXBwZXJjYXNlIFVwcGVyIFZhcmlhdGlvbl9TZWxlY3RvciBWUyBXaGl0ZV9TcGFjZSBzcGFjZSBYSURfQ29udGludWUgWElEQyBYSURfU3RhcnQgWElEU1wiLF90PUN0K1wiIEV4dGVuZGVkX1BpY3RvZ3JhcGhpY1wiLFR0PV90LGt0PVR0K1wiIEVCYXNlIEVDb21wIEVNb2QgRVByZXMgRXh0UGljdFwiLEV0PWt0LE1pPUV0LFVpPXs5OkN0LDEwOl90LDExOlR0LDEyOmt0LDEzOkV0LDE0Ok1pfSxxaT1cIkJhc2ljX0Vtb2ppIEVtb2ppX0tleWNhcF9TZXF1ZW5jZSBSR0lfRW1vamlfTW9kaWZpZXJfU2VxdWVuY2UgUkdJX0Vtb2ppX0ZsYWdfU2VxdWVuY2UgUkdJX0Vtb2ppX1RhZ19TZXF1ZW5jZSBSR0lfRW1vamlfWldKX1NlcXVlbmNlIFJHSV9FbW9qaVwiLEdpPXs5OlwiXCIsMTA6XCJcIiwxMTpcIlwiLDEyOlwiXCIsMTM6XCJcIiwxNDpxaX0scnQ9XCJDYXNlZF9MZXR0ZXIgTEMgQ2xvc2VfUHVuY3R1YXRpb24gUGUgQ29ubmVjdG9yX1B1bmN0dWF0aW9uIFBjIENvbnRyb2wgQ2MgY250cmwgQ3VycmVuY3lfU3ltYm9sIFNjIERhc2hfUHVuY3R1YXRpb24gUGQgRGVjaW1hbF9OdW1iZXIgTmQgZGlnaXQgRW5jbG9zaW5nX01hcmsgTWUgRmluYWxfUHVuY3R1YXRpb24gUGYgRm9ybWF0IENmIEluaXRpYWxfUHVuY3R1YXRpb24gUGkgTGV0dGVyIEwgTGV0dGVyX051bWJlciBObCBMaW5lX1NlcGFyYXRvciBabCBMb3dlcmNhc2VfTGV0dGVyIExsIE1hcmsgTSBDb21iaW5pbmdfTWFyayBNYXRoX1N5bWJvbCBTbSBNb2RpZmllcl9MZXR0ZXIgTG0gTW9kaWZpZXJfU3ltYm9sIFNrIE5vbnNwYWNpbmdfTWFyayBNbiBOdW1iZXIgTiBPcGVuX1B1bmN0dWF0aW9uIFBzIE90aGVyIEMgT3RoZXJfTGV0dGVyIExvIE90aGVyX051bWJlciBObyBPdGhlcl9QdW5jdHVhdGlvbiBQbyBPdGhlcl9TeW1ib2wgU28gUGFyYWdyYXBoX1NlcGFyYXRvciBacCBQcml2YXRlX1VzZSBDbyBQdW5jdHVhdGlvbiBQIHB1bmN0IFNlcGFyYXRvciBaIFNwYWNlX1NlcGFyYXRvciBacyBTcGFjaW5nX01hcmsgTWMgU3Vycm9nYXRlIENzIFN5bWJvbCBTIFRpdGxlY2FzZV9MZXR0ZXIgTHQgVW5hc3NpZ25lZCBDbiBVcHBlcmNhc2VfTGV0dGVyIEx1XCIsd3Q9XCJBZGxhbSBBZGxtIEFob20gQW5hdG9saWFuX0hpZXJvZ2x5cGhzIEhsdXcgQXJhYmljIEFyYWIgQXJtZW5pYW4gQXJtbiBBdmVzdGFuIEF2c3QgQmFsaW5lc2UgQmFsaSBCYW11bSBCYW11IEJhc3NhX1ZhaCBCYXNzIEJhdGFrIEJhdGsgQmVuZ2FsaSBCZW5nIEJoYWlrc3VraSBCaGtzIEJvcG9tb2ZvIEJvcG8gQnJhaG1pIEJyYWggQnJhaWxsZSBCcmFpIEJ1Z2luZXNlIEJ1Z2kgQnVoaWQgQnVoZCBDYW5hZGlhbl9BYm9yaWdpbmFsIENhbnMgQ2FyaWFuIENhcmkgQ2F1Y2FzaWFuX0FsYmFuaWFuIEFnaGIgQ2hha21hIENha20gQ2hhbSBDaGFtIENoZXJva2VlIENoZXIgQ29tbW9uIFp5eXkgQ29wdGljIENvcHQgUWFhYyBDdW5laWZvcm0gWHN1eCBDeXByaW90IENwcnQgQ3lyaWxsaWMgQ3lybCBEZXNlcmV0IERzcnQgRGV2YW5hZ2FyaSBEZXZhIER1cGxveWFuIER1cGwgRWd5cHRpYW5fSGllcm9nbHlwaHMgRWd5cCBFbGJhc2FuIEVsYmEgRXRoaW9waWMgRXRoaSBHZW9yZ2lhbiBHZW9yIEdsYWdvbGl0aWMgR2xhZyBHb3RoaWMgR290aCBHcmFudGhhIEdyYW4gR3JlZWsgR3JlayBHdWphcmF0aSBHdWpyIEd1cm11a2hpIEd1cnUgSGFuIEhhbmkgSGFuZ3VsIEhhbmcgSGFudW5vbyBIYW5vIEhhdHJhbiBIYXRyIEhlYnJldyBIZWJyIEhpcmFnYW5hIEhpcmEgSW1wZXJpYWxfQXJhbWFpYyBBcm1pIEluaGVyaXRlZCBaaW5oIFFhYWkgSW5zY3JpcHRpb25hbF9QYWhsYXZpIFBobGkgSW5zY3JpcHRpb25hbF9QYXJ0aGlhbiBQcnRpIEphdmFuZXNlIEphdmEgS2FpdGhpIEt0aGkgS2FubmFkYSBLbmRhIEthdGFrYW5hIEthbmEgS2F5YWhfTGkgS2FsaSBLaGFyb3NodGhpIEtoYXIgS2htZXIgS2htciBLaG9qa2kgS2hvaiBLaHVkYXdhZGkgU2luZCBMYW8gTGFvbyBMYXRpbiBMYXRuIExlcGNoYSBMZXBjIExpbWJ1IExpbWIgTGluZWFyX0EgTGluYSBMaW5lYXJfQiBMaW5iIExpc3UgTGlzdSBMeWNpYW4gTHljaSBMeWRpYW4gTHlkaSBNYWhhamFuaSBNYWhqIE1hbGF5YWxhbSBNbHltIE1hbmRhaWMgTWFuZCBNYW5pY2hhZWFuIE1hbmkgTWFyY2hlbiBNYXJjIE1hc2FyYW1fR29uZGkgR29ubSBNZWV0ZWlfTWF5ZWsgTXRlaSBNZW5kZV9LaWtha3VpIE1lbmQgTWVyb2l0aWNfQ3Vyc2l2ZSBNZXJjIE1lcm9pdGljX0hpZXJvZ2x5cGhzIE1lcm8gTWlhbyBQbHJkIE1vZGkgTW9uZ29saWFuIE1vbmcgTXJvIE1yb28gTXVsdGFuaSBNdWx0IE15YW5tYXIgTXltciBOYWJhdGFlYW4gTmJhdCBOZXdfVGFpX0x1ZSBUYWx1IE5ld2EgTmV3YSBOa28gTmtvbyBOdXNodSBOc2h1IE9naGFtIE9nYW0gT2xfQ2hpa2kgT2xjayBPbGRfSHVuZ2FyaWFuIEh1bmcgT2xkX0l0YWxpYyBJdGFsIE9sZF9Ob3J0aF9BcmFiaWFuIE5hcmIgT2xkX1Blcm1pYyBQZXJtIE9sZF9QZXJzaWFuIFhwZW8gT2xkX1NvdXRoX0FyYWJpYW4gU2FyYiBPbGRfVHVya2ljIE9ya2ggT3JpeWEgT3J5YSBPc2FnZSBPc2dlIE9zbWFueWEgT3NtYSBQYWhhd2hfSG1vbmcgSG1uZyBQYWxteXJlbmUgUGFsbSBQYXVfQ2luX0hhdSBQYXVjIFBoYWdzX1BhIFBoYWcgUGhvZW5pY2lhbiBQaG54IFBzYWx0ZXJfUGFobGF2aSBQaGxwIFJlamFuZyBSam5nIFJ1bmljIFJ1bnIgU2FtYXJpdGFuIFNhbXIgU2F1cmFzaHRyYSBTYXVyIFNoYXJhZGEgU2hyZCBTaGF2aWFuIFNoYXcgU2lkZGhhbSBTaWRkIFNpZ25Xcml0aW5nIFNnbncgU2luaGFsYSBTaW5oIFNvcmFfU29tcGVuZyBTb3JhIFNveW9tYm8gU295byBTdW5kYW5lc2UgU3VuZCBTeWxvdGlfTmFncmkgU3lsbyBTeXJpYWMgU3lyYyBUYWdhbG9nIFRnbGcgVGFnYmFud2EgVGFnYiBUYWlfTGUgVGFsZSBUYWlfVGhhbSBMYW5hIFRhaV9WaWV0IFRhdnQgVGFrcmkgVGFrciBUYW1pbCBUYW1sIFRhbmd1dCBUYW5nIFRlbHVndSBUZWx1IFRoYWFuYSBUaGFhIFRoYWkgVGhhaSBUaWJldGFuIFRpYnQgVGlmaW5hZ2ggVGZuZyBUaXJodXRhIFRpcmggVWdhcml0aWMgVWdhciBWYWkgVmFpaSBXYXJhbmdfQ2l0aSBXYXJhIFlpIFlpaWkgWmFuYWJhemFyX1NxdWFyZSBaYW5iXCIsQXQ9d3QrXCIgRG9ncmEgRG9nciBHdW5qYWxhX0dvbmRpIEdvbmcgSGFuaWZpX1JvaGluZ3lhIFJvaGcgTWFrYXNhciBNYWthIE1lZGVmYWlkcmluIE1lZGYgT2xkX1NvZ2RpYW4gU29nbyBTb2dkaWFuIFNvZ2RcIixQdD1BdCtcIiBFbHltYWljIEVseW0gTmFuZGluYWdhcmkgTmFuZCBOeWlha2VuZ19QdWFjaHVlX0htb25nIEhtbnAgV2FuY2hvIFdjaG9cIixJdD1QdCtcIiBDaG9yYXNtaWFuIENocnMgRGlhayBEaXZlc19Ba3VydSBLaGl0YW5fU21hbGxfU2NyaXB0IEtpdHMgWWV6aSBZZXppZGlcIixOdD1JdCtcIiBDeXByb19NaW5vYW4gQ3BtbiBPbGRfVXlnaHVyIE91Z3IgVGFuZ3NhIFRuc2EgVG90byBWaXRoa3VxaSBWaXRoXCIsSmk9TnQrXCIgXCIramksS2k9ezk6d3QsMTA6QXQsMTE6UHQsMTI6SXQsMTM6TnQsMTQ6Sml9LFZ0PXt9O2Z1bmN0aW9uIFdpKGUpe3ZhciB0PVZ0W2VdPXtiaW5hcnk6SyhVaVtlXStcIiBcIitydCksYmluYXJ5T2ZTdHJpbmdzOksoR2lbZV0pLG5vbkJpbmFyeTp7R2VuZXJhbF9DYXRlZ29yeTpLKHJ0KSxTY3JpcHQ6SyhLaVtlXSl9fTt0Lm5vbkJpbmFyeS5TY3JpcHRfRXh0ZW5zaW9ucz10Lm5vbkJpbmFyeS5TY3JpcHQsdC5ub25CaW5hcnkuZ2M9dC5ub25CaW5hcnkuR2VuZXJhbF9DYXRlZ29yeSx0Lm5vbkJpbmFyeS5zYz10Lm5vbkJpbmFyeS5TY3JpcHQsdC5ub25CaW5hcnkuc2N4PXQubm9uQmluYXJ5LlNjcmlwdF9FeHRlbnNpb25zfWZvcihjZT0wLEllPVs5LDEwLDExLDEyLDEzLDE0XTtjZTxJZS5sZW5ndGg7Y2UrPTEpYXQ9SWVbY2VdLFdpKGF0KTt2YXIgYXQsY2UsSWUsYz1ULnByb3RvdHlwZSxtZT1mdW5jdGlvbih0LGkpe3RoaXMucGFyZW50PXQsdGhpcy5iYXNlPWl8fHRoaXN9O21lLnByb3RvdHlwZS5zZXBhcmF0ZWRGcm9tPWZ1bmN0aW9uKHQpe2Zvcih2YXIgaT10aGlzO2k7aT1pLnBhcmVudClmb3IodmFyIHM9dDtzO3M9cy5wYXJlbnQpaWYoaS5iYXNlPT09cy5iYXNlJiZpIT09cylyZXR1cm4hMDtyZXR1cm4hMX07bWUucHJvdG90eXBlLnNpYmxpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG1lKHRoaXMucGFyZW50LHRoaXMuYmFzZSl9O3ZhciBqPWZ1bmN0aW9uKHQpe3RoaXMucGFyc2VyPXQsdGhpcy52YWxpZEZsYWdzPVwiZ2ltXCIrKHQub3B0aW9ucy5lY21hVmVyc2lvbj49Nj9cInV5XCI6XCJcIikrKHQub3B0aW9ucy5lY21hVmVyc2lvbj49OT9cInNcIjpcIlwiKSsodC5vcHRpb25zLmVjbWFWZXJzaW9uPj0xMz9cImRcIjpcIlwiKSsodC5vcHRpb25zLmVjbWFWZXJzaW9uPj0xNT9cInZcIjpcIlwiKSx0aGlzLnVuaWNvZGVQcm9wZXJ0aWVzPVZ0W3Qub3B0aW9ucy5lY21hVmVyc2lvbj49MTQ/MTQ6dC5vcHRpb25zLmVjbWFWZXJzaW9uXSx0aGlzLnNvdXJjZT1cIlwiLHRoaXMuZmxhZ3M9XCJcIix0aGlzLnN0YXJ0PTAsdGhpcy5zd2l0Y2hVPSExLHRoaXMuc3dpdGNoVj0hMSx0aGlzLnN3aXRjaE49ITEsdGhpcy5wb3M9MCx0aGlzLmxhc3RJbnRWYWx1ZT0wLHRoaXMubGFzdFN0cmluZ1ZhbHVlPVwiXCIsdGhpcy5sYXN0QXNzZXJ0aW9uSXNRdWFudGlmaWFibGU9ITEsdGhpcy5udW1DYXB0dXJpbmdQYXJlbnM9MCx0aGlzLm1heEJhY2tSZWZlcmVuY2U9MCx0aGlzLmdyb3VwTmFtZXM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmJhY2tSZWZlcmVuY2VOYW1lcz1bXSx0aGlzLmJyYW5jaElEPW51bGx9O2oucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKHQsaSxzKXt2YXIgcj1zLmluZGV4T2YoXCJ2XCIpIT09LTEsbj1zLmluZGV4T2YoXCJ1XCIpIT09LTE7dGhpcy5zdGFydD10fDAsdGhpcy5zb3VyY2U9aStcIlwiLHRoaXMuZmxhZ3M9cyxyJiZ0aGlzLnBhcnNlci5vcHRpb25zLmVjbWFWZXJzaW9uPj0xNT8odGhpcy5zd2l0Y2hVPSEwLHRoaXMuc3dpdGNoVj0hMCx0aGlzLnN3aXRjaE49ITApOih0aGlzLnN3aXRjaFU9biYmdGhpcy5wYXJzZXIub3B0aW9ucy5lY21hVmVyc2lvbj49Nix0aGlzLnN3aXRjaFY9ITEsdGhpcy5zd2l0Y2hOPW4mJnRoaXMucGFyc2VyLm9wdGlvbnMuZWNtYVZlcnNpb24+PTkpfTtqLnByb3RvdHlwZS5yYWlzZT1mdW5jdGlvbih0KXt0aGlzLnBhcnNlci5yYWlzZVJlY292ZXJhYmxlKHRoaXMuc3RhcnQsXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbjogL1wiK3RoaXMuc291cmNlK1wiLzogXCIrdCl9O2oucHJvdG90eXBlLmF0PWZ1bmN0aW9uKHQsaSl7aT09PXZvaWQgMCYmKGk9ITEpO3ZhciBzPXRoaXMuc291cmNlLHI9cy5sZW5ndGg7aWYodD49cilyZXR1cm4tMTt2YXIgbj1zLmNoYXJDb2RlQXQodCk7aWYoIShpfHx0aGlzLnN3aXRjaFUpfHxuPD01NTI5NXx8bj49NTczNDR8fHQrMT49cilyZXR1cm4gbjt2YXIgbz1zLmNoYXJDb2RlQXQodCsxKTtyZXR1cm4gbz49NTYzMjAmJm88PTU3MzQzPyhuPDwxMCkrby01NjYxMzg4ODpufTtqLnByb3RvdHlwZS5uZXh0SW5kZXg9ZnVuY3Rpb24odCxpKXtpPT09dm9pZCAwJiYoaT0hMSk7dmFyIHM9dGhpcy5zb3VyY2Uscj1zLmxlbmd0aDtpZih0Pj1yKXJldHVybiByO3ZhciBuPXMuY2hhckNvZGVBdCh0KSxvO3JldHVybiEoaXx8dGhpcy5zd2l0Y2hVKXx8bjw9NTUyOTV8fG4+PTU3MzQ0fHx0KzE+PXJ8fChvPXMuY2hhckNvZGVBdCh0KzEpKTw1NjMyMHx8bz41NzM0Mz90KzE6dCsyfTtqLnByb3RvdHlwZS5jdXJyZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0PT09dm9pZCAwJiYodD0hMSksdGhpcy5hdCh0aGlzLnBvcyx0KX07ai5wcm90b3R5cGUubG9va2FoZWFkPWZ1bmN0aW9uKHQpe3JldHVybiB0PT09dm9pZCAwJiYodD0hMSksdGhpcy5hdCh0aGlzLm5leHRJbmRleCh0aGlzLnBvcyx0KSx0KX07ai5wcm90b3R5cGUuYWR2YW5jZT1mdW5jdGlvbih0KXt0PT09dm9pZCAwJiYodD0hMSksdGhpcy5wb3M9dGhpcy5uZXh0SW5kZXgodGhpcy5wb3MsdCl9O2oucHJvdG90eXBlLmVhdD1mdW5jdGlvbih0LGkpe3JldHVybiBpPT09dm9pZCAwJiYoaT0hMSksdGhpcy5jdXJyZW50KGkpPT09dD8odGhpcy5hZHZhbmNlKGkpLCEwKTohMX07ai5wcm90b3R5cGUuZWF0Q2hhcnM9ZnVuY3Rpb24odCxpKXtpPT09dm9pZCAwJiYoaT0hMSk7Zm9yKHZhciBzPXRoaXMucG9zLHI9MCxuPXQ7cjxuLmxlbmd0aDtyKz0xKXt2YXIgbz1uW3JdLHU9dGhpcy5hdChzLGkpO2lmKHU9PT0tMXx8dSE9PW8pcmV0dXJuITE7cz10aGlzLm5leHRJbmRleChzLGkpfXJldHVybiB0aGlzLnBvcz1zLCEwfTtjLnZhbGlkYXRlUmVnRXhwRmxhZ3M9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUudmFsaWRGbGFncyxpPWUuZmxhZ3Mscz0hMSxyPSExLG49MDtuPGkubGVuZ3RoO24rKyl7dmFyIG89aS5jaGFyQXQobik7dC5pbmRleE9mKG8pPT09LTEmJnRoaXMucmFpc2UoZS5zdGFydCxcIkludmFsaWQgcmVndWxhciBleHByZXNzaW9uIGZsYWdcIiksaS5pbmRleE9mKG8sbisxKT4tMSYmdGhpcy5yYWlzZShlLnN0YXJ0LFwiRHVwbGljYXRlIHJlZ3VsYXIgZXhwcmVzc2lvbiBmbGFnXCIpLG89PT1cInVcIiYmKHM9ITApLG89PT1cInZcIiYmKHI9ITApfXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49MTUmJnMmJnImJnRoaXMucmFpc2UoZS5zdGFydCxcIkludmFsaWQgcmVndWxhciBleHByZXNzaW9uIGZsYWdcIil9O2Z1bmN0aW9uIFhpKGUpe2Zvcih2YXIgdCBpbiBlKXJldHVybiEwO3JldHVybiExfWMudmFsaWRhdGVSZWdFeHBQYXR0ZXJuPWZ1bmN0aW9uKGUpe3RoaXMucmVnZXhwX3BhdHRlcm4oZSksIWUuc3dpdGNoTiYmdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj05JiZYaShlLmdyb3VwTmFtZXMpJiYoZS5zd2l0Y2hOPSEwLHRoaXMucmVnZXhwX3BhdHRlcm4oZSkpfTtjLnJlZ2V4cF9wYXR0ZXJuPWZ1bmN0aW9uKGUpe2UucG9zPTAsZS5sYXN0SW50VmFsdWU9MCxlLmxhc3RTdHJpbmdWYWx1ZT1cIlwiLGUubGFzdEFzc2VydGlvbklzUXVhbnRpZmlhYmxlPSExLGUubnVtQ2FwdHVyaW5nUGFyZW5zPTAsZS5tYXhCYWNrUmVmZXJlbmNlPTAsZS5ncm91cE5hbWVzPU9iamVjdC5jcmVhdGUobnVsbCksZS5iYWNrUmVmZXJlbmNlTmFtZXMubGVuZ3RoPTAsZS5icmFuY2hJRD1udWxsLHRoaXMucmVnZXhwX2Rpc2p1bmN0aW9uKGUpLGUucG9zIT09ZS5zb3VyY2UubGVuZ3RoJiYoZS5lYXQoNDEpJiZlLnJhaXNlKFwiVW5tYXRjaGVkICcpJ1wiKSwoZS5lYXQoOTMpfHxlLmVhdCgxMjUpKSYmZS5yYWlzZShcIkxvbmUgcXVhbnRpZmllciBicmFja2V0c1wiKSksZS5tYXhCYWNrUmVmZXJlbmNlPmUubnVtQ2FwdHVyaW5nUGFyZW5zJiZlLnJhaXNlKFwiSW52YWxpZCBlc2NhcGVcIik7Zm9yKHZhciB0PTAsaT1lLmJhY2tSZWZlcmVuY2VOYW1lczt0PGkubGVuZ3RoO3QrPTEpe3ZhciBzPWlbdF07ZS5ncm91cE5hbWVzW3NdfHxlLnJhaXNlKFwiSW52YWxpZCBuYW1lZCBjYXB0dXJlIHJlZmVyZW5jZWRcIil9fTtjLnJlZ2V4cF9kaXNqdW5jdGlvbj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTE2O2Zvcih0JiYoZS5icmFuY2hJRD1uZXcgbWUoZS5icmFuY2hJRCxudWxsKSksdGhpcy5yZWdleHBfYWx0ZXJuYXRpdmUoZSk7ZS5lYXQoMTI0KTspdCYmKGUuYnJhbmNoSUQ9ZS5icmFuY2hJRC5zaWJsaW5nKCkpLHRoaXMucmVnZXhwX2FsdGVybmF0aXZlKGUpO3QmJihlLmJyYW5jaElEPWUuYnJhbmNoSUQucGFyZW50KSx0aGlzLnJlZ2V4cF9lYXRRdWFudGlmaWVyKGUsITApJiZlLnJhaXNlKFwiTm90aGluZyB0byByZXBlYXRcIiksZS5lYXQoMTIzKSYmZS5yYWlzZShcIkxvbmUgcXVhbnRpZmllciBicmFja2V0c1wiKX07Yy5yZWdleHBfYWx0ZXJuYXRpdmU9ZnVuY3Rpb24oZSl7Zm9yKDtlLnBvczxlLnNvdXJjZS5sZW5ndGgmJnRoaXMucmVnZXhwX2VhdFRlcm0oZSk7KTt9O2MucmVnZXhwX2VhdFRlcm09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVnZXhwX2VhdEFzc2VydGlvbihlKT8oZS5sYXN0QXNzZXJ0aW9uSXNRdWFudGlmaWFibGUmJnRoaXMucmVnZXhwX2VhdFF1YW50aWZpZXIoZSkmJmUuc3dpdGNoVSYmZS5yYWlzZShcIkludmFsaWQgcXVhbnRpZmllclwiKSwhMCk6KGUuc3dpdGNoVT90aGlzLnJlZ2V4cF9lYXRBdG9tKGUpOnRoaXMucmVnZXhwX2VhdEV4dGVuZGVkQXRvbShlKSk/KHRoaXMucmVnZXhwX2VhdFF1YW50aWZpZXIoZSksITApOiExfTtjLnJlZ2V4cF9lYXRBc3NlcnRpb249ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wb3M7aWYoZS5sYXN0QXNzZXJ0aW9uSXNRdWFudGlmaWFibGU9ITEsZS5lYXQoOTQpfHxlLmVhdCgzNikpcmV0dXJuITA7aWYoZS5lYXQoOTIpKXtpZihlLmVhdCg2Nil8fGUuZWF0KDk4KSlyZXR1cm4hMDtlLnBvcz10fWlmKGUuZWF0KDQwKSYmZS5lYXQoNjMpKXt2YXIgaT0hMTtpZih0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTkmJihpPWUuZWF0KDYwKSksZS5lYXQoNjEpfHxlLmVhdCgzMykpcmV0dXJuIHRoaXMucmVnZXhwX2Rpc2p1bmN0aW9uKGUpLGUuZWF0KDQxKXx8ZS5yYWlzZShcIlVudGVybWluYXRlZCBncm91cFwiKSxlLmxhc3RBc3NlcnRpb25Jc1F1YW50aWZpYWJsZT0haSwhMH1yZXR1cm4gZS5wb3M9dCwhMX07Yy5yZWdleHBfZWF0UXVhbnRpZmllcj1mdW5jdGlvbihlLHQpe3JldHVybiB0PT09dm9pZCAwJiYodD0hMSksdGhpcy5yZWdleHBfZWF0UXVhbnRpZmllclByZWZpeChlLHQpPyhlLmVhdCg2MyksITApOiExfTtjLnJlZ2V4cF9lYXRRdWFudGlmaWVyUHJlZml4PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZWF0KDQyKXx8ZS5lYXQoNDMpfHxlLmVhdCg2Myl8fHRoaXMucmVnZXhwX2VhdEJyYWNlZFF1YW50aWZpZXIoZSx0KX07Yy5yZWdleHBfZWF0QnJhY2VkUXVhbnRpZmllcj1mdW5jdGlvbihlLHQpe3ZhciBpPWUucG9zO2lmKGUuZWF0KDEyMykpe3ZhciBzPTAscj0tMTtpZih0aGlzLnJlZ2V4cF9lYXREZWNpbWFsRGlnaXRzKGUpJiYocz1lLmxhc3RJbnRWYWx1ZSxlLmVhdCg0NCkmJnRoaXMucmVnZXhwX2VhdERlY2ltYWxEaWdpdHMoZSkmJihyPWUubGFzdEludFZhbHVlKSxlLmVhdCgxMjUpKSlyZXR1cm4gciE9PS0xJiZyPHMmJiF0JiZlLnJhaXNlKFwibnVtYmVycyBvdXQgb2Ygb3JkZXIgaW4ge30gcXVhbnRpZmllclwiKSwhMDtlLnN3aXRjaFUmJiF0JiZlLnJhaXNlKFwiSW5jb21wbGV0ZSBxdWFudGlmaWVyXCIpLGUucG9zPWl9cmV0dXJuITF9O2MucmVnZXhwX2VhdEF0b209ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVnZXhwX2VhdFBhdHRlcm5DaGFyYWN0ZXJzKGUpfHxlLmVhdCg0Nil8fHRoaXMucmVnZXhwX2VhdFJldmVyc2VTb2xpZHVzQXRvbUVzY2FwZShlKXx8dGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3MoZSl8fHRoaXMucmVnZXhwX2VhdFVuY2FwdHVyaW5nR3JvdXAoZSl8fHRoaXMucmVnZXhwX2VhdENhcHR1cmluZ0dyb3VwKGUpfTtjLnJlZ2V4cF9lYXRSZXZlcnNlU29saWR1c0F0b21Fc2NhcGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wb3M7aWYoZS5lYXQoOTIpKXtpZih0aGlzLnJlZ2V4cF9lYXRBdG9tRXNjYXBlKGUpKXJldHVybiEwO2UucG9zPXR9cmV0dXJuITF9O2MucmVnZXhwX2VhdFVuY2FwdHVyaW5nR3JvdXA9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wb3M7aWYoZS5lYXQoNDApKXtpZihlLmVhdCg2Mykpe2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49MTYpe3ZhciBpPXRoaXMucmVnZXhwX2VhdE1vZGlmaWVycyhlKSxzPWUuZWF0KDQ1KTtpZihpfHxzKXtmb3IodmFyIHI9MDtyPGkubGVuZ3RoO3IrKyl7dmFyIG49aS5jaGFyQXQocik7aS5pbmRleE9mKG4scisxKT4tMSYmZS5yYWlzZShcIkR1cGxpY2F0ZSByZWd1bGFyIGV4cHJlc3Npb24gbW9kaWZpZXJzXCIpfWlmKHMpe3ZhciBvPXRoaXMucmVnZXhwX2VhdE1vZGlmaWVycyhlKTshaSYmIW8mJmUuY3VycmVudCgpPT09NTgmJmUucmFpc2UoXCJJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbiBtb2RpZmllcnNcIik7Zm9yKHZhciB1PTA7dTxvLmxlbmd0aDt1Kyspe3ZhciBwPW8uY2hhckF0KHUpOyhvLmluZGV4T2YocCx1KzEpPi0xfHxpLmluZGV4T2YocCk+LTEpJiZlLnJhaXNlKFwiRHVwbGljYXRlIHJlZ3VsYXIgZXhwcmVzc2lvbiBtb2RpZmllcnNcIil9fX19aWYoZS5lYXQoNTgpKXtpZih0aGlzLnJlZ2V4cF9kaXNqdW5jdGlvbihlKSxlLmVhdCg0MSkpcmV0dXJuITA7ZS5yYWlzZShcIlVudGVybWluYXRlZCBncm91cFwiKX19ZS5wb3M9dH1yZXR1cm4hMX07Yy5yZWdleHBfZWF0Q2FwdHVyaW5nR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZS5lYXQoNDApKXtpZih0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTk/dGhpcy5yZWdleHBfZ3JvdXBTcGVjaWZpZXIoZSk6ZS5jdXJyZW50KCk9PT02MyYmZS5yYWlzZShcIkludmFsaWQgZ3JvdXBcIiksdGhpcy5yZWdleHBfZGlzanVuY3Rpb24oZSksZS5lYXQoNDEpKXJldHVybiBlLm51bUNhcHR1cmluZ1BhcmVucys9MSwhMDtlLnJhaXNlKFwiVW50ZXJtaW5hdGVkIGdyb3VwXCIpfXJldHVybiExfTtjLnJlZ2V4cF9lYXRNb2RpZmllcnM9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVwiXCIsaT0wOyhpPWUuY3VycmVudCgpKSE9PS0xJiZ6aShpKTspdCs9VShpKSxlLmFkdmFuY2UoKTtyZXR1cm4gdH07ZnVuY3Rpb24gemkoZSl7cmV0dXJuIGU9PT0xMDV8fGU9PT0xMDl8fGU9PT0xMTV9Yy5yZWdleHBfZWF0RXh0ZW5kZWRBdG9tPWZ1bmN0aW9uKGUpe3JldHVybiBlLmVhdCg0Nil8fHRoaXMucmVnZXhwX2VhdFJldmVyc2VTb2xpZHVzQXRvbUVzY2FwZShlKXx8dGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3MoZSl8fHRoaXMucmVnZXhwX2VhdFVuY2FwdHVyaW5nR3JvdXAoZSl8fHRoaXMucmVnZXhwX2VhdENhcHR1cmluZ0dyb3VwKGUpfHx0aGlzLnJlZ2V4cF9lYXRJbnZhbGlkQnJhY2VkUXVhbnRpZmllcihlKXx8dGhpcy5yZWdleHBfZWF0RXh0ZW5kZWRQYXR0ZXJuQ2hhcmFjdGVyKGUpfTtjLnJlZ2V4cF9lYXRJbnZhbGlkQnJhY2VkUXVhbnRpZmllcj1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZWdleHBfZWF0QnJhY2VkUXVhbnRpZmllcihlLCEwKSYmZS5yYWlzZShcIk5vdGhpbmcgdG8gcmVwZWF0XCIpLCExfTtjLnJlZ2V4cF9lYXRTeW50YXhDaGFyYWN0ZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jdXJyZW50KCk7cmV0dXJuIEx0KHQpPyhlLmxhc3RJbnRWYWx1ZT10LGUuYWR2YW5jZSgpLCEwKTohMX07ZnVuY3Rpb24gTHQoZSl7cmV0dXJuIGU9PT0zNnx8ZT49NDAmJmU8PTQzfHxlPT09NDZ8fGU9PT02M3x8ZT49OTEmJmU8PTk0fHxlPj0xMjMmJmU8PTEyNX1jLnJlZ2V4cF9lYXRQYXR0ZXJuQ2hhcmFjdGVycz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5wb3MsaT0wOyhpPWUuY3VycmVudCgpKSE9PS0xJiYhTHQoaSk7KWUuYWR2YW5jZSgpO3JldHVybiBlLnBvcyE9PXR9O2MucmVnZXhwX2VhdEV4dGVuZGVkUGF0dGVybkNoYXJhY3Rlcj1mdW5jdGlvbihlKXt2YXIgdD1lLmN1cnJlbnQoKTtyZXR1cm4gdCE9PS0xJiZ0IT09MzYmJiEodD49NDAmJnQ8PTQzKSYmdCE9PTQ2JiZ0IT09NjMmJnQhPT05MSYmdCE9PTk0JiZ0IT09MTI0PyhlLmFkdmFuY2UoKSwhMCk6ITF9O2MucmVnZXhwX2dyb3VwU3BlY2lmaWVyPWZ1bmN0aW9uKGUpe2lmKGUuZWF0KDYzKSl7dGhpcy5yZWdleHBfZWF0R3JvdXBOYW1lKGUpfHxlLnJhaXNlKFwiSW52YWxpZCBncm91cFwiKTt2YXIgdD10aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTE2LGk9ZS5ncm91cE5hbWVzW2UubGFzdFN0cmluZ1ZhbHVlXTtpZihpKWlmKHQpZm9yKHZhciBzPTAscj1pO3M8ci5sZW5ndGg7cys9MSl7dmFyIG49cltzXTtuLnNlcGFyYXRlZEZyb20oZS5icmFuY2hJRCl8fGUucmFpc2UoXCJEdXBsaWNhdGUgY2FwdHVyZSBncm91cCBuYW1lXCIpfWVsc2UgZS5yYWlzZShcIkR1cGxpY2F0ZSBjYXB0dXJlIGdyb3VwIG5hbWVcIik7dD8oaXx8KGUuZ3JvdXBOYW1lc1tlLmxhc3RTdHJpbmdWYWx1ZV09W10pKS5wdXNoKGUuYnJhbmNoSUQpOmUuZ3JvdXBOYW1lc1tlLmxhc3RTdHJpbmdWYWx1ZV09ITB9fTtjLnJlZ2V4cF9lYXRHcm91cE5hbWU9ZnVuY3Rpb24oZSl7aWYoZS5sYXN0U3RyaW5nVmFsdWU9XCJcIixlLmVhdCg2MCkpe2lmKHRoaXMucmVnZXhwX2VhdFJlZ0V4cElkZW50aWZpZXJOYW1lKGUpJiZlLmVhdCg2MikpcmV0dXJuITA7ZS5yYWlzZShcIkludmFsaWQgY2FwdHVyZSBncm91cCBuYW1lXCIpfXJldHVybiExfTtjLnJlZ2V4cF9lYXRSZWdFeHBJZGVudGlmaWVyTmFtZT1mdW5jdGlvbihlKXtpZihlLmxhc3RTdHJpbmdWYWx1ZT1cIlwiLHRoaXMucmVnZXhwX2VhdFJlZ0V4cElkZW50aWZpZXJTdGFydChlKSl7Zm9yKGUubGFzdFN0cmluZ1ZhbHVlKz1VKGUubGFzdEludFZhbHVlKTt0aGlzLnJlZ2V4cF9lYXRSZWdFeHBJZGVudGlmaWVyUGFydChlKTspZS5sYXN0U3RyaW5nVmFsdWUrPVUoZS5sYXN0SW50VmFsdWUpO3JldHVybiEwfXJldHVybiExfTtjLnJlZ2V4cF9lYXRSZWdFeHBJZGVudGlmaWVyU3RhcnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wb3MsaT10aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTExLHM9ZS5jdXJyZW50KGkpO3JldHVybiBlLmFkdmFuY2UoaSkscz09PTkyJiZ0aGlzLnJlZ2V4cF9lYXRSZWdFeHBVbmljb2RlRXNjYXBlU2VxdWVuY2UoZSxpKSYmKHM9ZS5sYXN0SW50VmFsdWUpLEhpKHMpPyhlLmxhc3RJbnRWYWx1ZT1zLCEwKTooZS5wb3M9dCwhMSl9O2Z1bmN0aW9uIEhpKGUpe3JldHVybiBNKGUsITApfHxlPT09MzZ8fGU9PT05NX1jLnJlZ2V4cF9lYXRSZWdFeHBJZGVudGlmaWVyUGFydD1mdW5jdGlvbihlKXt2YXIgdD1lLnBvcyxpPXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49MTEscz1lLmN1cnJlbnQoaSk7cmV0dXJuIGUuYWR2YW5jZShpKSxzPT09OTImJnRoaXMucmVnZXhwX2VhdFJlZ0V4cFVuaWNvZGVFc2NhcGVTZXF1ZW5jZShlLGkpJiYocz1lLmxhc3RJbnRWYWx1ZSksUWkocyk/KGUubGFzdEludFZhbHVlPXMsITApOihlLnBvcz10LCExKX07ZnVuY3Rpb24gUWkoZSl7cmV0dXJuIEgoZSwhMCl8fGU9PT0zNnx8ZT09PTk1fHxlPT09ODIwNHx8ZT09PTgyMDV9Yy5yZWdleHBfZWF0QXRvbUVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZWdleHBfZWF0QmFja1JlZmVyZW5jZShlKXx8dGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3NFc2NhcGUoZSl8fHRoaXMucmVnZXhwX2VhdENoYXJhY3RlckVzY2FwZShlKXx8ZS5zd2l0Y2hOJiZ0aGlzLnJlZ2V4cF9lYXRLR3JvdXBOYW1lKGUpPyEwOihlLnN3aXRjaFUmJihlLmN1cnJlbnQoKT09PTk5JiZlLnJhaXNlKFwiSW52YWxpZCB1bmljb2RlIGVzY2FwZVwiKSxlLnJhaXNlKFwiSW52YWxpZCBlc2NhcGVcIikpLCExKX07Yy5yZWdleHBfZWF0QmFja1JlZmVyZW5jZT1mdW5jdGlvbihlKXt2YXIgdD1lLnBvcztpZih0aGlzLnJlZ2V4cF9lYXREZWNpbWFsRXNjYXBlKGUpKXt2YXIgaT1lLmxhc3RJbnRWYWx1ZTtpZihlLnN3aXRjaFUpcmV0dXJuIGk+ZS5tYXhCYWNrUmVmZXJlbmNlJiYoZS5tYXhCYWNrUmVmZXJlbmNlPWkpLCEwO2lmKGk8PWUubnVtQ2FwdHVyaW5nUGFyZW5zKXJldHVybiEwO2UucG9zPXR9cmV0dXJuITF9O2MucmVnZXhwX2VhdEtHcm91cE5hbWU9ZnVuY3Rpb24oZSl7aWYoZS5lYXQoMTA3KSl7aWYodGhpcy5yZWdleHBfZWF0R3JvdXBOYW1lKGUpKXJldHVybiBlLmJhY2tSZWZlcmVuY2VOYW1lcy5wdXNoKGUubGFzdFN0cmluZ1ZhbHVlKSwhMDtlLnJhaXNlKFwiSW52YWxpZCBuYW1lZCByZWZlcmVuY2VcIil9cmV0dXJuITF9O2MucmVnZXhwX2VhdENoYXJhY3RlckVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZWdleHBfZWF0Q29udHJvbEVzY2FwZShlKXx8dGhpcy5yZWdleHBfZWF0Q0NvbnRyb2xMZXR0ZXIoZSl8fHRoaXMucmVnZXhwX2VhdFplcm8oZSl8fHRoaXMucmVnZXhwX2VhdEhleEVzY2FwZVNlcXVlbmNlKGUpfHx0aGlzLnJlZ2V4cF9lYXRSZWdFeHBVbmljb2RlRXNjYXBlU2VxdWVuY2UoZSwhMSl8fCFlLnN3aXRjaFUmJnRoaXMucmVnZXhwX2VhdExlZ2FjeU9jdGFsRXNjYXBlU2VxdWVuY2UoZSl8fHRoaXMucmVnZXhwX2VhdElkZW50aXR5RXNjYXBlKGUpfTtjLnJlZ2V4cF9lYXRDQ29udHJvbExldHRlcj1mdW5jdGlvbihlKXt2YXIgdD1lLnBvcztpZihlLmVhdCg5OSkpe2lmKHRoaXMucmVnZXhwX2VhdENvbnRyb2xMZXR0ZXIoZSkpcmV0dXJuITA7ZS5wb3M9dH1yZXR1cm4hMX07Yy5yZWdleHBfZWF0WmVybz1mdW5jdGlvbihlKXtyZXR1cm4gZS5jdXJyZW50KCk9PT00OCYmIXZlKGUubG9va2FoZWFkKCkpPyhlLmxhc3RJbnRWYWx1ZT0wLGUuYWR2YW5jZSgpLCEwKTohMX07Yy5yZWdleHBfZWF0Q29udHJvbEVzY2FwZT1mdW5jdGlvbihlKXt2YXIgdD1lLmN1cnJlbnQoKTtyZXR1cm4gdD09PTExNj8oZS5sYXN0SW50VmFsdWU9OSxlLmFkdmFuY2UoKSwhMCk6dD09PTExMD8oZS5sYXN0SW50VmFsdWU9MTAsZS5hZHZhbmNlKCksITApOnQ9PT0xMTg/KGUubGFzdEludFZhbHVlPTExLGUuYWR2YW5jZSgpLCEwKTp0PT09MTAyPyhlLmxhc3RJbnRWYWx1ZT0xMixlLmFkdmFuY2UoKSwhMCk6dD09PTExND8oZS5sYXN0SW50VmFsdWU9MTMsZS5hZHZhbmNlKCksITApOiExfTtjLnJlZ2V4cF9lYXRDb250cm9sTGV0dGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY3VycmVudCgpO3JldHVybiBSdCh0KT8oZS5sYXN0SW50VmFsdWU9dCUzMixlLmFkdmFuY2UoKSwhMCk6ITF9O2Z1bmN0aW9uIFJ0KGUpe3JldHVybiBlPj02NSYmZTw9OTB8fGU+PTk3JiZlPD0xMjJ9Yy5yZWdleHBfZWF0UmVnRXhwVW5pY29kZUVzY2FwZVNlcXVlbmNlPWZ1bmN0aW9uKGUsdCl7dD09PXZvaWQgMCYmKHQ9ITEpO3ZhciBpPWUucG9zLHM9dHx8ZS5zd2l0Y2hVO2lmKGUuZWF0KDExNykpe2lmKHRoaXMucmVnZXhwX2VhdEZpeGVkSGV4RGlnaXRzKGUsNCkpe3ZhciByPWUubGFzdEludFZhbHVlO2lmKHMmJnI+PTU1Mjk2JiZyPD01NjMxOSl7dmFyIG49ZS5wb3M7aWYoZS5lYXQoOTIpJiZlLmVhdCgxMTcpJiZ0aGlzLnJlZ2V4cF9lYXRGaXhlZEhleERpZ2l0cyhlLDQpKXt2YXIgbz1lLmxhc3RJbnRWYWx1ZTtpZihvPj01NjMyMCYmbzw9NTczNDMpcmV0dXJuIGUubGFzdEludFZhbHVlPShyLTU1Mjk2KSoxMDI0KyhvLTU2MzIwKSs2NTUzNiwhMH1lLnBvcz1uLGUubGFzdEludFZhbHVlPXJ9cmV0dXJuITB9aWYocyYmZS5lYXQoMTIzKSYmdGhpcy5yZWdleHBfZWF0SGV4RGlnaXRzKGUpJiZlLmVhdCgxMjUpJiZZaShlLmxhc3RJbnRWYWx1ZSkpcmV0dXJuITA7cyYmZS5yYWlzZShcIkludmFsaWQgdW5pY29kZSBlc2NhcGVcIiksZS5wb3M9aX1yZXR1cm4hMX07ZnVuY3Rpb24gWWkoZSl7cmV0dXJuIGU+PTAmJmU8PTExMTQxMTF9Yy5yZWdleHBfZWF0SWRlbnRpdHlFc2NhcGU9ZnVuY3Rpb24oZSl7aWYoZS5zd2l0Y2hVKXJldHVybiB0aGlzLnJlZ2V4cF9lYXRTeW50YXhDaGFyYWN0ZXIoZSk/ITA6ZS5lYXQoNDcpPyhlLmxhc3RJbnRWYWx1ZT00NywhMCk6ITE7dmFyIHQ9ZS5jdXJyZW50KCk7cmV0dXJuIHQhPT05OSYmKCFlLnN3aXRjaE58fHQhPT0xMDcpPyhlLmxhc3RJbnRWYWx1ZT10LGUuYWR2YW5jZSgpLCEwKTohMX07Yy5yZWdleHBfZWF0RGVjaW1hbEVzY2FwZT1mdW5jdGlvbihlKXtlLmxhc3RJbnRWYWx1ZT0wO3ZhciB0PWUuY3VycmVudCgpO2lmKHQ+PTQ5JiZ0PD01Nyl7ZG8gZS5sYXN0SW50VmFsdWU9MTAqZS5sYXN0SW50VmFsdWUrKHQtNDgpLGUuYWR2YW5jZSgpO3doaWxlKCh0PWUuY3VycmVudCgpKT49NDgmJnQ8PTU3KTtyZXR1cm4hMH1yZXR1cm4hMX07dmFyIE90PTAscT0xLFY9MjtjLnJlZ2V4cF9lYXRDaGFyYWN0ZXJDbGFzc0VzY2FwZT1mdW5jdGlvbihlKXt2YXIgdD1lLmN1cnJlbnQoKTtpZihaaSh0KSlyZXR1cm4gZS5sYXN0SW50VmFsdWU9LTEsZS5hZHZhbmNlKCkscTt2YXIgaT0hMTtpZihlLnN3aXRjaFUmJnRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49OSYmKChpPXQ9PT04MCl8fHQ9PT0xMTIpKXtlLmxhc3RJbnRWYWx1ZT0tMSxlLmFkdmFuY2UoKTt2YXIgcztpZihlLmVhdCgxMjMpJiYocz10aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZUV4cHJlc3Npb24oZSkpJiZlLmVhdCgxMjUpKXJldHVybiBpJiZzPT09ViYmZS5yYWlzZShcIkludmFsaWQgcHJvcGVydHkgbmFtZVwiKSxzO2UucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IG5hbWVcIil9cmV0dXJuIE90fTtmdW5jdGlvbiBaaShlKXtyZXR1cm4gZT09PTEwMHx8ZT09PTY4fHxlPT09MTE1fHxlPT09ODN8fGU9PT0xMTl8fGU9PT04N31jLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZUV4cHJlc3Npb249ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wb3M7aWYodGhpcy5yZWdleHBfZWF0VW5pY29kZVByb3BlcnR5TmFtZShlKSYmZS5lYXQoNjEpKXt2YXIgaT1lLmxhc3RTdHJpbmdWYWx1ZTtpZih0aGlzLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZShlKSl7dmFyIHM9ZS5sYXN0U3RyaW5nVmFsdWU7cmV0dXJuIHRoaXMucmVnZXhwX3ZhbGlkYXRlVW5pY29kZVByb3BlcnR5TmFtZUFuZFZhbHVlKGUsaSxzKSxxfX1pZihlLnBvcz10LHRoaXMucmVnZXhwX2VhdExvbmVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZShlKSl7dmFyIHI9ZS5sYXN0U3RyaW5nVmFsdWU7cmV0dXJuIHRoaXMucmVnZXhwX3ZhbGlkYXRlVW5pY29kZVByb3BlcnR5TmFtZU9yVmFsdWUoZSxyKX1yZXR1cm4gT3R9O2MucmVnZXhwX3ZhbGlkYXRlVW5pY29kZVByb3BlcnR5TmFtZUFuZFZhbHVlPWZ1bmN0aW9uKGUsdCxpKXtZKGUudW5pY29kZVByb3BlcnRpZXMubm9uQmluYXJ5LHQpfHxlLnJhaXNlKFwiSW52YWxpZCBwcm9wZXJ0eSBuYW1lXCIpLGUudW5pY29kZVByb3BlcnRpZXMubm9uQmluYXJ5W3RdLnRlc3QoaSl8fGUucmFpc2UoXCJJbnZhbGlkIHByb3BlcnR5IHZhbHVlXCIpfTtjLnJlZ2V4cF92YWxpZGF0ZVVuaWNvZGVQcm9wZXJ0eU5hbWVPclZhbHVlPWZ1bmN0aW9uKGUsdCl7aWYoZS51bmljb2RlUHJvcGVydGllcy5iaW5hcnkudGVzdCh0KSlyZXR1cm4gcTtpZihlLnN3aXRjaFYmJmUudW5pY29kZVByb3BlcnRpZXMuYmluYXJ5T2ZTdHJpbmdzLnRlc3QodCkpcmV0dXJuIFY7ZS5yYWlzZShcIkludmFsaWQgcHJvcGVydHkgbmFtZVwiKX07Yy5yZWdleHBfZWF0VW5pY29kZVByb3BlcnR5TmFtZT1mdW5jdGlvbihlKXt2YXIgdD0wO2ZvcihlLmxhc3RTdHJpbmdWYWx1ZT1cIlwiO0J0KHQ9ZS5jdXJyZW50KCkpOyllLmxhc3RTdHJpbmdWYWx1ZSs9VSh0KSxlLmFkdmFuY2UoKTtyZXR1cm4gZS5sYXN0U3RyaW5nVmFsdWUhPT1cIlwifTtmdW5jdGlvbiBCdChlKXtyZXR1cm4gUnQoZSl8fGU9PT05NX1jLnJlZ2V4cF9lYXRVbmljb2RlUHJvcGVydHlWYWx1ZT1mdW5jdGlvbihlKXt2YXIgdD0wO2ZvcihlLmxhc3RTdHJpbmdWYWx1ZT1cIlwiOyRpKHQ9ZS5jdXJyZW50KCkpOyllLmxhc3RTdHJpbmdWYWx1ZSs9VSh0KSxlLmFkdmFuY2UoKTtyZXR1cm4gZS5sYXN0U3RyaW5nVmFsdWUhPT1cIlwifTtmdW5jdGlvbiAkaShlKXtyZXR1cm4gQnQoZSl8fHZlKGUpfWMucmVnZXhwX2VhdExvbmVVbmljb2RlUHJvcGVydHlOYW1lT3JWYWx1ZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yZWdleHBfZWF0VW5pY29kZVByb3BlcnR5VmFsdWUoZSl9O2MucmVnZXhwX2VhdENoYXJhY3RlckNsYXNzPWZ1bmN0aW9uKGUpe2lmKGUuZWF0KDkxKSl7dmFyIHQ9ZS5lYXQoOTQpLGk9dGhpcy5yZWdleHBfY2xhc3NDb250ZW50cyhlKTtyZXR1cm4gZS5lYXQoOTMpfHxlLnJhaXNlKFwiVW50ZXJtaW5hdGVkIGNoYXJhY3RlciBjbGFzc1wiKSx0JiZpPT09ViYmZS5yYWlzZShcIk5lZ2F0ZWQgY2hhcmFjdGVyIGNsYXNzIG1heSBjb250YWluIHN0cmluZ3NcIiksITB9cmV0dXJuITF9O2MucmVnZXhwX2NsYXNzQ29udGVudHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY3VycmVudCgpPT09OTM/cTplLnN3aXRjaFY/dGhpcy5yZWdleHBfY2xhc3NTZXRFeHByZXNzaW9uKGUpOih0aGlzLnJlZ2V4cF9ub25FbXB0eUNsYXNzUmFuZ2VzKGUpLHEpfTtjLnJlZ2V4cF9ub25FbXB0eUNsYXNzUmFuZ2VzPWZ1bmN0aW9uKGUpe2Zvcig7dGhpcy5yZWdleHBfZWF0Q2xhc3NBdG9tKGUpOyl7dmFyIHQ9ZS5sYXN0SW50VmFsdWU7aWYoZS5lYXQoNDUpJiZ0aGlzLnJlZ2V4cF9lYXRDbGFzc0F0b20oZSkpe3ZhciBpPWUubGFzdEludFZhbHVlO2Uuc3dpdGNoVSYmKHQ9PT0tMXx8aT09PS0xKSYmZS5yYWlzZShcIkludmFsaWQgY2hhcmFjdGVyIGNsYXNzXCIpLHQhPT0tMSYmaSE9PS0xJiZ0PmkmJmUucmFpc2UoXCJSYW5nZSBvdXQgb2Ygb3JkZXIgaW4gY2hhcmFjdGVyIGNsYXNzXCIpfX19O2MucmVnZXhwX2VhdENsYXNzQXRvbT1mdW5jdGlvbihlKXt2YXIgdD1lLnBvcztpZihlLmVhdCg5Mikpe2lmKHRoaXMucmVnZXhwX2VhdENsYXNzRXNjYXBlKGUpKXJldHVybiEwO2lmKGUuc3dpdGNoVSl7dmFyIGk9ZS5jdXJyZW50KCk7KGk9PT05OXx8anQoaSkpJiZlLnJhaXNlKFwiSW52YWxpZCBjbGFzcyBlc2NhcGVcIiksZS5yYWlzZShcIkludmFsaWQgZXNjYXBlXCIpfWUucG9zPXR9dmFyIHM9ZS5jdXJyZW50KCk7cmV0dXJuIHMhPT05Mz8oZS5sYXN0SW50VmFsdWU9cyxlLmFkdmFuY2UoKSwhMCk6ITF9O2MucmVnZXhwX2VhdENsYXNzRXNjYXBlPWZ1bmN0aW9uKGUpe3ZhciB0PWUucG9zO2lmKGUuZWF0KDk4KSlyZXR1cm4gZS5sYXN0SW50VmFsdWU9OCwhMDtpZihlLnN3aXRjaFUmJmUuZWF0KDQ1KSlyZXR1cm4gZS5sYXN0SW50VmFsdWU9NDUsITA7aWYoIWUuc3dpdGNoVSYmZS5lYXQoOTkpKXtpZih0aGlzLnJlZ2V4cF9lYXRDbGFzc0NvbnRyb2xMZXR0ZXIoZSkpcmV0dXJuITA7ZS5wb3M9dH1yZXR1cm4gdGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3NFc2NhcGUoZSl8fHRoaXMucmVnZXhwX2VhdENoYXJhY3RlckVzY2FwZShlKX07Yy5yZWdleHBfY2xhc3NTZXRFeHByZXNzaW9uPWZ1bmN0aW9uKGUpe3ZhciB0PXEsaTtpZighdGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRSYW5nZShlKSlpZihpPXRoaXMucmVnZXhwX2VhdENsYXNzU2V0T3BlcmFuZChlKSl7aT09PVYmJih0PVYpO2Zvcih2YXIgcz1lLnBvcztlLmVhdENoYXJzKFszOCwzOF0pOyl7aWYoZS5jdXJyZW50KCkhPT0zOCYmKGk9dGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRPcGVyYW5kKGUpKSl7aSE9PVYmJih0PXEpO2NvbnRpbnVlfWUucmFpc2UoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBjaGFyYWN0ZXIgY2xhc3NcIil9aWYocyE9PWUucG9zKXJldHVybiB0O2Zvcig7ZS5lYXRDaGFycyhbNDUsNDVdKTspdGhpcy5yZWdleHBfZWF0Q2xhc3NTZXRPcGVyYW5kKGUpfHxlLnJhaXNlKFwiSW52YWxpZCBjaGFyYWN0ZXIgaW4gY2hhcmFjdGVyIGNsYXNzXCIpO2lmKHMhPT1lLnBvcylyZXR1cm4gdH1lbHNlIGUucmFpc2UoXCJJbnZhbGlkIGNoYXJhY3RlciBpbiBjaGFyYWN0ZXIgY2xhc3NcIik7Zm9yKDs7KWlmKCF0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldFJhbmdlKGUpKXtpZihpPXRoaXMucmVnZXhwX2VhdENsYXNzU2V0T3BlcmFuZChlKSwhaSlyZXR1cm4gdDtpPT09ViYmKHQ9Vil9fTtjLnJlZ2V4cF9lYXRDbGFzc1NldFJhbmdlPWZ1bmN0aW9uKGUpe3ZhciB0PWUucG9zO2lmKHRoaXMucmVnZXhwX2VhdENsYXNzU2V0Q2hhcmFjdGVyKGUpKXt2YXIgaT1lLmxhc3RJbnRWYWx1ZTtpZihlLmVhdCg0NSkmJnRoaXMucmVnZXhwX2VhdENsYXNzU2V0Q2hhcmFjdGVyKGUpKXt2YXIgcz1lLmxhc3RJbnRWYWx1ZTtyZXR1cm4gaSE9PS0xJiZzIT09LTEmJmk+cyYmZS5yYWlzZShcIlJhbmdlIG91dCBvZiBvcmRlciBpbiBjaGFyYWN0ZXIgY2xhc3NcIiksITB9ZS5wb3M9dH1yZXR1cm4hMX07Yy5yZWdleHBfZWF0Q2xhc3NTZXRPcGVyYW5kPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJlZ2V4cF9lYXRDbGFzc1NldENoYXJhY3RlcihlKT9xOnRoaXMucmVnZXhwX2VhdENsYXNzU3RyaW5nRGlzanVuY3Rpb24oZSl8fHRoaXMucmVnZXhwX2VhdE5lc3RlZENsYXNzKGUpfTtjLnJlZ2V4cF9lYXROZXN0ZWRDbGFzcz1mdW5jdGlvbihlKXt2YXIgdD1lLnBvcztpZihlLmVhdCg5MSkpe3ZhciBpPWUuZWF0KDk0KSxzPXRoaXMucmVnZXhwX2NsYXNzQ29udGVudHMoZSk7aWYoZS5lYXQoOTMpKXJldHVybiBpJiZzPT09ViYmZS5yYWlzZShcIk5lZ2F0ZWQgY2hhcmFjdGVyIGNsYXNzIG1heSBjb250YWluIHN0cmluZ3NcIikscztlLnBvcz10fWlmKGUuZWF0KDkyKSl7dmFyIHI9dGhpcy5yZWdleHBfZWF0Q2hhcmFjdGVyQ2xhc3NFc2NhcGUoZSk7aWYocilyZXR1cm4gcjtlLnBvcz10fXJldHVybiBudWxsfTtjLnJlZ2V4cF9lYXRDbGFzc1N0cmluZ0Rpc2p1bmN0aW9uPWZ1bmN0aW9uKGUpe3ZhciB0PWUucG9zO2lmKGUuZWF0Q2hhcnMoWzkyLDExM10pKXtpZihlLmVhdCgxMjMpKXt2YXIgaT10aGlzLnJlZ2V4cF9jbGFzc1N0cmluZ0Rpc2p1bmN0aW9uQ29udGVudHMoZSk7aWYoZS5lYXQoMTI1KSlyZXR1cm4gaX1lbHNlIGUucmFpc2UoXCJJbnZhbGlkIGVzY2FwZVwiKTtlLnBvcz10fXJldHVybiBudWxsfTtjLnJlZ2V4cF9jbGFzc1N0cmluZ0Rpc2p1bmN0aW9uQ29udGVudHM9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMucmVnZXhwX2NsYXNzU3RyaW5nKGUpO2UuZWF0KDEyNCk7KXRoaXMucmVnZXhwX2NsYXNzU3RyaW5nKGUpPT09ViYmKHQ9Vik7cmV0dXJuIHR9O2MucmVnZXhwX2NsYXNzU3RyaW5nPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wO3RoaXMucmVnZXhwX2VhdENsYXNzU2V0Q2hhcmFjdGVyKGUpOyl0Kys7cmV0dXJuIHQ9PT0xP3E6Vn07Yy5yZWdleHBfZWF0Q2xhc3NTZXRDaGFyYWN0ZXI9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wb3M7aWYoZS5lYXQoOTIpKXJldHVybiB0aGlzLnJlZ2V4cF9lYXRDaGFyYWN0ZXJFc2NhcGUoZSl8fHRoaXMucmVnZXhwX2VhdENsYXNzU2V0UmVzZXJ2ZWRQdW5jdHVhdG9yKGUpPyEwOmUuZWF0KDk4KT8oZS5sYXN0SW50VmFsdWU9OCwhMCk6KGUucG9zPXQsITEpO3ZhciBpPWUuY3VycmVudCgpO3JldHVybiBpPDB8fGk9PT1lLmxvb2thaGVhZCgpJiZlcyhpKXx8dHMoaSk/ITE6KGUuYWR2YW5jZSgpLGUubGFzdEludFZhbHVlPWksITApfTtmdW5jdGlvbiBlcyhlKXtyZXR1cm4gZT09PTMzfHxlPj0zNSYmZTw9Mzh8fGU+PTQyJiZlPD00NHx8ZT09PTQ2fHxlPj01OCYmZTw9NjR8fGU9PT05NHx8ZT09PTk2fHxlPT09MTI2fWZ1bmN0aW9uIHRzKGUpe3JldHVybiBlPT09NDB8fGU9PT00MXx8ZT09PTQ1fHxlPT09NDd8fGU+PTkxJiZlPD05M3x8ZT49MTIzJiZlPD0xMjV9Yy5yZWdleHBfZWF0Q2xhc3NTZXRSZXNlcnZlZFB1bmN0dWF0b3I9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jdXJyZW50KCk7cmV0dXJuIGlzKHQpPyhlLmxhc3RJbnRWYWx1ZT10LGUuYWR2YW5jZSgpLCEwKTohMX07ZnVuY3Rpb24gaXMoZSl7cmV0dXJuIGU9PT0zM3x8ZT09PTM1fHxlPT09Mzd8fGU9PT0zOHx8ZT09PTQ0fHxlPT09NDV8fGU+PTU4JiZlPD02Mnx8ZT09PTY0fHxlPT09OTZ8fGU9PT0xMjZ9Yy5yZWdleHBfZWF0Q2xhc3NDb250cm9sTGV0dGVyPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY3VycmVudCgpO3JldHVybiB2ZSh0KXx8dD09PTk1PyhlLmxhc3RJbnRWYWx1ZT10JTMyLGUuYWR2YW5jZSgpLCEwKTohMX07Yy5yZWdleHBfZWF0SGV4RXNjYXBlU2VxdWVuY2U9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wb3M7aWYoZS5lYXQoMTIwKSl7aWYodGhpcy5yZWdleHBfZWF0Rml4ZWRIZXhEaWdpdHMoZSwyKSlyZXR1cm4hMDtlLnN3aXRjaFUmJmUucmFpc2UoXCJJbnZhbGlkIGVzY2FwZVwiKSxlLnBvcz10fXJldHVybiExfTtjLnJlZ2V4cF9lYXREZWNpbWFsRGlnaXRzPWZ1bmN0aW9uKGUpe3ZhciB0PWUucG9zLGk9MDtmb3IoZS5sYXN0SW50VmFsdWU9MDt2ZShpPWUuY3VycmVudCgpKTspZS5sYXN0SW50VmFsdWU9MTAqZS5sYXN0SW50VmFsdWUrKGktNDgpLGUuYWR2YW5jZSgpO3JldHVybiBlLnBvcyE9PXR9O2Z1bmN0aW9uIHZlKGUpe3JldHVybiBlPj00OCYmZTw9NTd9Yy5yZWdleHBfZWF0SGV4RGlnaXRzPWZ1bmN0aW9uKGUpe3ZhciB0PWUucG9zLGk9MDtmb3IoZS5sYXN0SW50VmFsdWU9MDtEdChpPWUuY3VycmVudCgpKTspZS5sYXN0SW50VmFsdWU9MTYqZS5sYXN0SW50VmFsdWUrRnQoaSksZS5hZHZhbmNlKCk7cmV0dXJuIGUucG9zIT09dH07ZnVuY3Rpb24gRHQoZSl7cmV0dXJuIGU+PTQ4JiZlPD01N3x8ZT49NjUmJmU8PTcwfHxlPj05NyYmZTw9MTAyfWZ1bmN0aW9uIEZ0KGUpe3JldHVybiBlPj02NSYmZTw9NzA/MTArKGUtNjUpOmU+PTk3JiZlPD0xMDI/MTArKGUtOTcpOmUtNDh9Yy5yZWdleHBfZWF0TGVnYWN5T2N0YWxFc2NhcGVTZXF1ZW5jZT1mdW5jdGlvbihlKXtpZih0aGlzLnJlZ2V4cF9lYXRPY3RhbERpZ2l0KGUpKXt2YXIgdD1lLmxhc3RJbnRWYWx1ZTtpZih0aGlzLnJlZ2V4cF9lYXRPY3RhbERpZ2l0KGUpKXt2YXIgaT1lLmxhc3RJbnRWYWx1ZTt0PD0zJiZ0aGlzLnJlZ2V4cF9lYXRPY3RhbERpZ2l0KGUpP2UubGFzdEludFZhbHVlPXQqNjQraSo4K2UubGFzdEludFZhbHVlOmUubGFzdEludFZhbHVlPXQqOCtpfWVsc2UgZS5sYXN0SW50VmFsdWU9dDtyZXR1cm4hMH1yZXR1cm4hMX07Yy5yZWdleHBfZWF0T2N0YWxEaWdpdD1mdW5jdGlvbihlKXt2YXIgdD1lLmN1cnJlbnQoKTtyZXR1cm4ganQodCk/KGUubGFzdEludFZhbHVlPXQtNDgsZS5hZHZhbmNlKCksITApOihlLmxhc3RJbnRWYWx1ZT0wLCExKX07ZnVuY3Rpb24ganQoZSl7cmV0dXJuIGU+PTQ4JiZlPD01NX1jLnJlZ2V4cF9lYXRGaXhlZEhleERpZ2l0cz1mdW5jdGlvbihlLHQpe3ZhciBpPWUucG9zO2UubGFzdEludFZhbHVlPTA7Zm9yKHZhciBzPTA7czx0Oysrcyl7dmFyIHI9ZS5jdXJyZW50KCk7aWYoIUR0KHIpKXJldHVybiBlLnBvcz1pLCExO2UubGFzdEludFZhbHVlPTE2KmUubGFzdEludFZhbHVlK0Z0KHIpLGUuYWR2YW5jZSgpfXJldHVybiEwfTt2YXIgcWU9ZnVuY3Rpb24odCl7dGhpcy50eXBlPXQudHlwZSx0aGlzLnZhbHVlPXQudmFsdWUsdGhpcy5zdGFydD10LnN0YXJ0LHRoaXMuZW5kPXQuZW5kLHQub3B0aW9ucy5sb2NhdGlvbnMmJih0aGlzLmxvYz1uZXcgeGUodCx0LnN0YXJ0TG9jLHQuZW5kTG9jKSksdC5vcHRpb25zLnJhbmdlcyYmKHRoaXMucmFuZ2U9W3Quc3RhcnQsdC5lbmRdKX0sdj1ULnByb3RvdHlwZTt2Lm5leHQ9ZnVuY3Rpb24oZSl7IWUmJnRoaXMudHlwZS5rZXl3b3JkJiZ0aGlzLmNvbnRhaW5zRXNjJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5zdGFydCxcIkVzY2FwZSBzZXF1ZW5jZSBpbiBrZXl3b3JkIFwiK3RoaXMudHlwZS5rZXl3b3JkKSx0aGlzLm9wdGlvbnMub25Ub2tlbiYmdGhpcy5vcHRpb25zLm9uVG9rZW4obmV3IHFlKHRoaXMpKSx0aGlzLmxhc3RUb2tFbmQ9dGhpcy5lbmQsdGhpcy5sYXN0VG9rU3RhcnQ9dGhpcy5zdGFydCx0aGlzLmxhc3RUb2tFbmRMb2M9dGhpcy5lbmRMb2MsdGhpcy5sYXN0VG9rU3RhcnRMb2M9dGhpcy5zdGFydExvYyx0aGlzLm5leHRUb2tlbigpfTt2LmdldFRva2VuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubmV4dCgpLG5ldyBxZSh0aGlzKX07dHlwZW9mIFN5bWJvbDxcInVcIiYmKHZbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJue25leHQ6ZnVuY3Rpb24oKXt2YXIgdD1lLmdldFRva2VuKCk7cmV0dXJue2RvbmU6dC50eXBlPT09YS5lb2YsdmFsdWU6dH19fX0pO3YubmV4dFRva2VuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5jdXJDb250ZXh0KCk7aWYoKCFlfHwhZS5wcmVzZXJ2ZVNwYWNlKSYmdGhpcy5za2lwU3BhY2UoKSx0aGlzLnN0YXJ0PXRoaXMucG9zLHRoaXMub3B0aW9ucy5sb2NhdGlvbnMmJih0aGlzLnN0YXJ0TG9jPXRoaXMuY3VyUG9zaXRpb24oKSksdGhpcy5wb3M+PXRoaXMuaW5wdXQubGVuZ3RoKXJldHVybiB0aGlzLmZpbmlzaFRva2VuKGEuZW9mKTtpZihlLm92ZXJyaWRlKXJldHVybiBlLm92ZXJyaWRlKHRoaXMpO3RoaXMucmVhZFRva2VuKHRoaXMuZnVsbENoYXJDb2RlQXRQb3MoKSl9O3YucmVhZFRva2VuPWZ1bmN0aW9uKGUpe3JldHVybiBNKGUsdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj02KXx8ZT09PTkyP3RoaXMucmVhZFdvcmQoKTp0aGlzLmdldFRva2VuRnJvbUNvZGUoZSl9O3YuZnVsbENoYXJDb2RlQXRQb3M9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO2lmKGU8PTU1Mjk1fHxlPj01NjMyMClyZXR1cm4gZTt2YXIgdD10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMSk7cmV0dXJuIHQ8PTU2MzE5fHx0Pj01NzM0ND9lOihlPDwxMCkrdC01NjYxMzg4OH07di5za2lwQmxvY2tDb21tZW50PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcHRpb25zLm9uQ29tbWVudCYmdGhpcy5jdXJQb3NpdGlvbigpLHQ9dGhpcy5wb3MsaT10aGlzLmlucHV0LmluZGV4T2YoXCIqL1wiLHRoaXMucG9zKz0yKTtpZihpPT09LTEmJnRoaXMucmFpc2UodGhpcy5wb3MtMixcIlVudGVybWluYXRlZCBjb21tZW50XCIpLHRoaXMucG9zPWkrMix0aGlzLm9wdGlvbnMubG9jYXRpb25zKWZvcih2YXIgcz12b2lkIDAscj10OyhzPXV0KHRoaXMuaW5wdXQscix0aGlzLnBvcykpPi0xOykrK3RoaXMuY3VyTGluZSxyPXRoaXMubGluZVN0YXJ0PXM7dGhpcy5vcHRpb25zLm9uQ29tbWVudCYmdGhpcy5vcHRpb25zLm9uQ29tbWVudCghMCx0aGlzLmlucHV0LnNsaWNlKHQrMixpKSx0LHRoaXMucG9zLGUsdGhpcy5jdXJQb3NpdGlvbigpKX07di5za2lwTGluZUNvbW1lbnQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMucG9zLGk9dGhpcy5vcHRpb25zLm9uQ29tbWVudCYmdGhpcy5jdXJQb3NpdGlvbigpLHM9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKz1lKTt0aGlzLnBvczx0aGlzLmlucHV0Lmxlbmd0aCYmIVEocyk7KXM9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KCsrdGhpcy5wb3MpO3RoaXMub3B0aW9ucy5vbkNvbW1lbnQmJnRoaXMub3B0aW9ucy5vbkNvbW1lbnQoITEsdGhpcy5pbnB1dC5zbGljZSh0K2UsdGhpcy5wb3MpLHQsdGhpcy5wb3MsaSx0aGlzLmN1clBvc2l0aW9uKCkpfTt2LnNraXBTcGFjZT1mdW5jdGlvbigpe2U6Zm9yKDt0aGlzLnBvczx0aGlzLmlucHV0Lmxlbmd0aDspe3ZhciBlPXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk7c3dpdGNoKGUpe2Nhc2UgMzI6Y2FzZSAxNjA6Kyt0aGlzLnBvczticmVhaztjYXNlIDEzOnRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcysxKT09PTEwJiYrK3RoaXMucG9zO2Nhc2UgMTA6Y2FzZSA4MjMyOmNhc2UgODIzMzorK3RoaXMucG9zLHRoaXMub3B0aW9ucy5sb2NhdGlvbnMmJigrK3RoaXMuY3VyTGluZSx0aGlzLmxpbmVTdGFydD10aGlzLnBvcyk7YnJlYWs7Y2FzZSA0Nzpzd2l0Y2godGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzEpKXtjYXNlIDQyOnRoaXMuc2tpcEJsb2NrQ29tbWVudCgpO2JyZWFrO2Nhc2UgNDc6dGhpcy5za2lwTGluZUNvbW1lbnQoMik7YnJlYWs7ZGVmYXVsdDpicmVhayBlfWJyZWFrO2RlZmF1bHQ6aWYoZT44JiZlPDE0fHxlPj01NzYwJiZwdC50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZSkpKSsrdGhpcy5wb3M7ZWxzZSBicmVhayBlfX19O3YuZmluaXNoVG9rZW49ZnVuY3Rpb24oZSx0KXt0aGlzLmVuZD10aGlzLnBvcyx0aGlzLm9wdGlvbnMubG9jYXRpb25zJiYodGhpcy5lbmRMb2M9dGhpcy5jdXJQb3NpdGlvbigpKTt2YXIgaT10aGlzLnR5cGU7dGhpcy50eXBlPWUsdGhpcy52YWx1ZT10LHRoaXMudXBkYXRlQ29udGV4dChpKX07di5yZWFkVG9rZW5fZG90PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzEpO2lmKGU+PTQ4JiZlPD01NylyZXR1cm4gdGhpcy5yZWFkTnVtYmVyKCEwKTt2YXIgdD10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMik7cmV0dXJuIHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49NiYmZT09PTQ2JiZ0PT09NDY/KHRoaXMucG9zKz0zLHRoaXMuZmluaXNoVG9rZW4oYS5lbGxpcHNpcykpOigrK3RoaXMucG9zLHRoaXMuZmluaXNoVG9rZW4oYS5kb3QpKX07di5yZWFkVG9rZW5fc2xhc2g9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMSk7cmV0dXJuIHRoaXMuZXhwckFsbG93ZWQ/KCsrdGhpcy5wb3MsdGhpcy5yZWFkUmVnZXhwKCkpOmU9PT02MT90aGlzLmZpbmlzaE9wKGEuYXNzaWduLDIpOnRoaXMuZmluaXNoT3AoYS5zbGFzaCwxKX07di5yZWFkVG9rZW5fbXVsdF9tb2R1bG9fZXhwPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcysxKSxpPTEscz1lPT09NDI/YS5zdGFyOmEubW9kdWxvO3JldHVybiB0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24+PTcmJmU9PT00MiYmdD09PTQyJiYoKytpLHM9YS5zdGFyc3Rhcix0PXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcysyKSksdD09PTYxP3RoaXMuZmluaXNoT3AoYS5hc3NpZ24saSsxKTp0aGlzLmZpbmlzaE9wKHMsaSl9O3YucmVhZFRva2VuX3BpcGVfYW1wPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcysxKTtpZih0PT09ZSl7aWYodGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj0xMil7dmFyIGk9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzIpO2lmKGk9PT02MSlyZXR1cm4gdGhpcy5maW5pc2hPcChhLmFzc2lnbiwzKX1yZXR1cm4gdGhpcy5maW5pc2hPcChlPT09MTI0P2EubG9naWNhbE9SOmEubG9naWNhbEFORCwyKX1yZXR1cm4gdD09PTYxP3RoaXMuZmluaXNoT3AoYS5hc3NpZ24sMik6dGhpcy5maW5pc2hPcChlPT09MTI0P2EuYml0d2lzZU9SOmEuYml0d2lzZUFORCwxKX07di5yZWFkVG9rZW5fY2FyZXQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMSk7cmV0dXJuIGU9PT02MT90aGlzLmZpbmlzaE9wKGEuYXNzaWduLDIpOnRoaXMuZmluaXNoT3AoYS5iaXR3aXNlWE9SLDEpfTt2LnJlYWRUb2tlbl9wbHVzX21pbj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMSk7cmV0dXJuIHQ9PT1lP3Q9PT00NSYmIXRoaXMuaW5Nb2R1bGUmJnRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcysyKT09PTYyJiYodGhpcy5sYXN0VG9rRW5kPT09MHx8TC50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodGhpcy5sYXN0VG9rRW5kLHRoaXMucG9zKSkpPyh0aGlzLnNraXBMaW5lQ29tbWVudCgzKSx0aGlzLnNraXBTcGFjZSgpLHRoaXMubmV4dFRva2VuKCkpOnRoaXMuZmluaXNoT3AoYS5pbmNEZWMsMik6dD09PTYxP3RoaXMuZmluaXNoT3AoYS5hc3NpZ24sMik6dGhpcy5maW5pc2hPcChhLnBsdXNNaW4sMSl9O3YucmVhZFRva2VuX2x0X2d0PWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcysxKSxpPTE7cmV0dXJuIHQ9PT1lPyhpPWU9PT02MiYmdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzIpPT09NjI/MzoyLHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcytpKT09PTYxP3RoaXMuZmluaXNoT3AoYS5hc3NpZ24saSsxKTp0aGlzLmZpbmlzaE9wKGEuYml0U2hpZnQsaSkpOnQ9PT0zMyYmZT09PTYwJiYhdGhpcy5pbk1vZHVsZSYmdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzIpPT09NDUmJnRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyszKT09PTQ1Pyh0aGlzLnNraXBMaW5lQ29tbWVudCg0KSx0aGlzLnNraXBTcGFjZSgpLHRoaXMubmV4dFRva2VuKCkpOih0PT09NjEmJihpPTIpLHRoaXMuZmluaXNoT3AoYS5yZWxhdGlvbmFsLGkpKX07di5yZWFkVG9rZW5fZXFfZXhjbD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMSk7cmV0dXJuIHQ9PT02MT90aGlzLmZpbmlzaE9wKGEuZXF1YWxpdHksdGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzIpPT09NjE/MzoyKTplPT09NjEmJnQ9PT02MiYmdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj02Pyh0aGlzLnBvcys9Mix0aGlzLmZpbmlzaFRva2VuKGEuYXJyb3cpKTp0aGlzLmZpbmlzaE9wKGU9PT02MT9hLmVxOmEucHJlZml4LDEpfTt2LnJlYWRUb2tlbl9xdWVzdGlvbj1mdW5jdGlvbigpe3ZhciBlPXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbjtpZihlPj0xMSl7dmFyIHQ9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzEpO2lmKHQ9PT00Nil7dmFyIGk9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzIpO2lmKGk8NDh8fGk+NTcpcmV0dXJuIHRoaXMuZmluaXNoT3AoYS5xdWVzdGlvbkRvdCwyKX1pZih0PT09NjMpe2lmKGU+PTEyKXt2YXIgcz10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMik7aWYocz09PTYxKXJldHVybiB0aGlzLmZpbmlzaE9wKGEuYXNzaWduLDMpfXJldHVybiB0aGlzLmZpbmlzaE9wKGEuY29hbGVzY2UsMil9fXJldHVybiB0aGlzLmZpbmlzaE9wKGEucXVlc3Rpb24sMSl9O3YucmVhZFRva2VuX251bWJlclNpZ249ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9wdGlvbnMuZWNtYVZlcnNpb24sdD0zNTtpZihlPj0xMyYmKCsrdGhpcy5wb3MsdD10aGlzLmZ1bGxDaGFyQ29kZUF0UG9zKCksTSh0LCEwKXx8dD09PTkyKSlyZXR1cm4gdGhpcy5maW5pc2hUb2tlbihhLnByaXZhdGVJZCx0aGlzLnJlYWRXb3JkMSgpKTt0aGlzLnJhaXNlKHRoaXMucG9zLFwiVW5leHBlY3RlZCBjaGFyYWN0ZXIgJ1wiK1UodCkrXCInXCIpfTt2LmdldFRva2VuRnJvbUNvZGU9ZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2UgNDY6cmV0dXJuIHRoaXMucmVhZFRva2VuX2RvdCgpO2Nhc2UgNDA6cmV0dXJuKyt0aGlzLnBvcyx0aGlzLmZpbmlzaFRva2VuKGEucGFyZW5MKTtjYXNlIDQxOnJldHVybisrdGhpcy5wb3MsdGhpcy5maW5pc2hUb2tlbihhLnBhcmVuUik7Y2FzZSA1OTpyZXR1cm4rK3RoaXMucG9zLHRoaXMuZmluaXNoVG9rZW4oYS5zZW1pKTtjYXNlIDQ0OnJldHVybisrdGhpcy5wb3MsdGhpcy5maW5pc2hUb2tlbihhLmNvbW1hKTtjYXNlIDkxOnJldHVybisrdGhpcy5wb3MsdGhpcy5maW5pc2hUb2tlbihhLmJyYWNrZXRMKTtjYXNlIDkzOnJldHVybisrdGhpcy5wb3MsdGhpcy5maW5pc2hUb2tlbihhLmJyYWNrZXRSKTtjYXNlIDEyMzpyZXR1cm4rK3RoaXMucG9zLHRoaXMuZmluaXNoVG9rZW4oYS5icmFjZUwpO2Nhc2UgMTI1OnJldHVybisrdGhpcy5wb3MsdGhpcy5maW5pc2hUb2tlbihhLmJyYWNlUik7Y2FzZSA1ODpyZXR1cm4rK3RoaXMucG9zLHRoaXMuZmluaXNoVG9rZW4oYS5jb2xvbik7Y2FzZSA5NjppZih0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb248NilicmVhaztyZXR1cm4rK3RoaXMucG9zLHRoaXMuZmluaXNoVG9rZW4oYS5iYWNrUXVvdGUpO2Nhc2UgNDg6dmFyIHQ9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKzEpO2lmKHQ9PT0xMjB8fHQ9PT04OClyZXR1cm4gdGhpcy5yZWFkUmFkaXhOdW1iZXIoMTYpO2lmKHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49Nil7aWYodD09PTExMXx8dD09PTc5KXJldHVybiB0aGlzLnJlYWRSYWRpeE51bWJlcig4KTtpZih0PT09OTh8fHQ9PT02NilyZXR1cm4gdGhpcy5yZWFkUmFkaXhOdW1iZXIoMil9Y2FzZSA0OTpjYXNlIDUwOmNhc2UgNTE6Y2FzZSA1MjpjYXNlIDUzOmNhc2UgNTQ6Y2FzZSA1NTpjYXNlIDU2OmNhc2UgNTc6cmV0dXJuIHRoaXMucmVhZE51bWJlcighMSk7Y2FzZSAzNDpjYXNlIDM5OnJldHVybiB0aGlzLnJlYWRTdHJpbmcoZSk7Y2FzZSA0NzpyZXR1cm4gdGhpcy5yZWFkVG9rZW5fc2xhc2goKTtjYXNlIDM3OmNhc2UgNDI6cmV0dXJuIHRoaXMucmVhZFRva2VuX211bHRfbW9kdWxvX2V4cChlKTtjYXNlIDEyNDpjYXNlIDM4OnJldHVybiB0aGlzLnJlYWRUb2tlbl9waXBlX2FtcChlKTtjYXNlIDk0OnJldHVybiB0aGlzLnJlYWRUb2tlbl9jYXJldCgpO2Nhc2UgNDM6Y2FzZSA0NTpyZXR1cm4gdGhpcy5yZWFkVG9rZW5fcGx1c19taW4oZSk7Y2FzZSA2MDpjYXNlIDYyOnJldHVybiB0aGlzLnJlYWRUb2tlbl9sdF9ndChlKTtjYXNlIDYxOmNhc2UgMzM6cmV0dXJuIHRoaXMucmVhZFRva2VuX2VxX2V4Y2woZSk7Y2FzZSA2MzpyZXR1cm4gdGhpcy5yZWFkVG9rZW5fcXVlc3Rpb24oKTtjYXNlIDEyNjpyZXR1cm4gdGhpcy5maW5pc2hPcChhLnByZWZpeCwxKTtjYXNlIDM1OnJldHVybiB0aGlzLnJlYWRUb2tlbl9udW1iZXJTaWduKCl9dGhpcy5yYWlzZSh0aGlzLnBvcyxcIlVuZXhwZWN0ZWQgY2hhcmFjdGVyICdcIitVKGUpK1wiJ1wiKX07di5maW5pc2hPcD1mdW5jdGlvbihlLHQpe3ZhciBpPXRoaXMuaW5wdXQuc2xpY2UodGhpcy5wb3MsdGhpcy5wb3MrdCk7cmV0dXJuIHRoaXMucG9zKz10LHRoaXMuZmluaXNoVG9rZW4oZSxpKX07di5yZWFkUmVnZXhwPWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQsaT10aGlzLnBvczs7KXt0aGlzLnBvcz49dGhpcy5pbnB1dC5sZW5ndGgmJnRoaXMucmFpc2UoaSxcIlVudGVybWluYXRlZCByZWd1bGFyIGV4cHJlc3Npb25cIik7dmFyIHM9dGhpcy5pbnB1dC5jaGFyQXQodGhpcy5wb3MpO2lmKEwudGVzdChzKSYmdGhpcy5yYWlzZShpLFwiVW50ZXJtaW5hdGVkIHJlZ3VsYXIgZXhwcmVzc2lvblwiKSxlKWU9ITE7ZWxzZXtpZihzPT09XCJbXCIpdD0hMDtlbHNlIGlmKHM9PT1cIl1cIiYmdCl0PSExO2Vsc2UgaWYocz09PVwiL1wiJiYhdClicmVhaztlPXM9PT1cIlxcXFxcIn0rK3RoaXMucG9zfXZhciByPXRoaXMuaW5wdXQuc2xpY2UoaSx0aGlzLnBvcyk7Kyt0aGlzLnBvczt2YXIgbj10aGlzLnBvcyxvPXRoaXMucmVhZFdvcmQxKCk7dGhpcy5jb250YWluc0VzYyYmdGhpcy51bmV4cGVjdGVkKG4pO3ZhciB1PXRoaXMucmVnZXhwU3RhdGV8fCh0aGlzLnJlZ2V4cFN0YXRlPW5ldyBqKHRoaXMpKTt1LnJlc2V0KGkscixvKSx0aGlzLnZhbGlkYXRlUmVnRXhwRmxhZ3ModSksdGhpcy52YWxpZGF0ZVJlZ0V4cFBhdHRlcm4odSk7dmFyIHA9bnVsbDt0cnl7cD1uZXcgUmVnRXhwKHIsbyl9Y2F0Y2h7fXJldHVybiB0aGlzLmZpbmlzaFRva2VuKGEucmVnZXhwLHtwYXR0ZXJuOnIsZmxhZ3M6byx2YWx1ZTpwfSl9O3YucmVhZEludD1mdW5jdGlvbihlLHQsaSl7Zm9yKHZhciBzPXRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49MTImJnQ9PT12b2lkIDAscj1pJiZ0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpPT09NDgsbj10aGlzLnBvcyxvPTAsdT0wLHA9MCxkPXQ/PzEvMDtwPGQ7KytwLCsrdGhpcy5wb3Mpe3ZhciBmPXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyksQz12b2lkIDA7aWYocyYmZj09PTk1KXtyJiZ0aGlzLnJhaXNlUmVjb3ZlcmFibGUodGhpcy5wb3MsXCJOdW1lcmljIHNlcGFyYXRvciBpcyBub3QgYWxsb3dlZCBpbiBsZWdhY3kgb2N0YWwgbnVtZXJpYyBsaXRlcmFsc1wiKSx1PT09OTUmJnRoaXMucmFpc2VSZWNvdmVyYWJsZSh0aGlzLnBvcyxcIk51bWVyaWMgc2VwYXJhdG9yIG11c3QgYmUgZXhhY3RseSBvbmUgdW5kZXJzY29yZVwiKSxwPT09MCYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMucG9zLFwiTnVtZXJpYyBzZXBhcmF0b3IgaXMgbm90IGFsbG93ZWQgYXQgdGhlIGZpcnN0IG9mIGRpZ2l0c1wiKSx1PWY7Y29udGludWV9aWYoZj49OTc/Qz1mLTk3KzEwOmY+PTY1P0M9Zi02NSsxMDpmPj00OCYmZjw9NTc/Qz1mLTQ4OkM9MS8wLEM+PWUpYnJlYWs7dT1mLG89byplK0N9cmV0dXJuIHMmJnU9PT05NSYmdGhpcy5yYWlzZVJlY292ZXJhYmxlKHRoaXMucG9zLTEsXCJOdW1lcmljIHNlcGFyYXRvciBpcyBub3QgYWxsb3dlZCBhdCB0aGUgbGFzdCBvZiBkaWdpdHNcIiksdGhpcy5wb3M9PT1ufHx0IT1udWxsJiZ0aGlzLnBvcy1uIT09dD9udWxsOm99O2Z1bmN0aW9uIHNzKGUsdCl7cmV0dXJuIHQ/cGFyc2VJbnQoZSw4KTpwYXJzZUZsb2F0KGUucmVwbGFjZSgvXy9nLFwiXCIpKX1mdW5jdGlvbiBNdChlKXtyZXR1cm4gdHlwZW9mIEJpZ0ludCE9XCJmdW5jdGlvblwiP251bGw6QmlnSW50KGUucmVwbGFjZSgvXy9nLFwiXCIpKX12LnJlYWRSYWRpeE51bWJlcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnBvczt0aGlzLnBvcys9Mjt2YXIgaT10aGlzLnJlYWRJbnQoZSk7cmV0dXJuIGk9PW51bGwmJnRoaXMucmFpc2UodGhpcy5zdGFydCsyLFwiRXhwZWN0ZWQgbnVtYmVyIGluIHJhZGl4IFwiK2UpLHRoaXMub3B0aW9ucy5lY21hVmVyc2lvbj49MTEmJnRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcyk9PT0xMTA/KGk9TXQodGhpcy5pbnB1dC5zbGljZSh0LHRoaXMucG9zKSksKyt0aGlzLnBvcyk6TSh0aGlzLmZ1bGxDaGFyQ29kZUF0UG9zKCkpJiZ0aGlzLnJhaXNlKHRoaXMucG9zLFwiSWRlbnRpZmllciBkaXJlY3RseSBhZnRlciBudW1iZXJcIiksdGhpcy5maW5pc2hUb2tlbihhLm51bSxpKX07di5yZWFkTnVtYmVyPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucG9zOyFlJiZ0aGlzLnJlYWRJbnQoMTAsdm9pZCAwLCEwKT09PW51bGwmJnRoaXMucmFpc2UodCxcIkludmFsaWQgbnVtYmVyXCIpO3ZhciBpPXRoaXMucG9zLXQ+PTImJnRoaXMuaW5wdXQuY2hhckNvZGVBdCh0KT09PTQ4O2kmJnRoaXMuc3RyaWN0JiZ0aGlzLnJhaXNlKHQsXCJJbnZhbGlkIG51bWJlclwiKTt2YXIgcz10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO2lmKCFpJiYhZSYmdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj0xMSYmcz09PTExMCl7dmFyIHI9TXQodGhpcy5pbnB1dC5zbGljZSh0LHRoaXMucG9zKSk7cmV0dXJuKyt0aGlzLnBvcyxNKHRoaXMuZnVsbENoYXJDb2RlQXRQb3MoKSkmJnRoaXMucmFpc2UodGhpcy5wb3MsXCJJZGVudGlmaWVyIGRpcmVjdGx5IGFmdGVyIG51bWJlclwiKSx0aGlzLmZpbmlzaFRva2VuKGEubnVtLHIpfWkmJi9bODldLy50ZXN0KHRoaXMuaW5wdXQuc2xpY2UodCx0aGlzLnBvcykpJiYoaT0hMSkscz09PTQ2JiYhaSYmKCsrdGhpcy5wb3MsdGhpcy5yZWFkSW50KDEwKSxzPXRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLnBvcykpLChzPT09Njl8fHM9PT0xMDEpJiYhaSYmKHM9dGhpcy5pbnB1dC5jaGFyQ29kZUF0KCsrdGhpcy5wb3MpLChzPT09NDN8fHM9PT00NSkmJisrdGhpcy5wb3MsdGhpcy5yZWFkSW50KDEwKT09PW51bGwmJnRoaXMucmFpc2UodCxcIkludmFsaWQgbnVtYmVyXCIpKSxNKHRoaXMuZnVsbENoYXJDb2RlQXRQb3MoKSkmJnRoaXMucmFpc2UodGhpcy5wb3MsXCJJZGVudGlmaWVyIGRpcmVjdGx5IGFmdGVyIG51bWJlclwiKTt2YXIgbj1zcyh0aGlzLmlucHV0LnNsaWNlKHQsdGhpcy5wb3MpLGkpO3JldHVybiB0aGlzLmZpbmlzaFRva2VuKGEubnVtLG4pfTt2LnJlYWRDb2RlUG9pbnQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpLHQ7aWYoZT09PTEyMyl7dGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPDYmJnRoaXMudW5leHBlY3RlZCgpO3ZhciBpPSsrdGhpcy5wb3M7dD10aGlzLnJlYWRIZXhDaGFyKHRoaXMuaW5wdXQuaW5kZXhPZihcIn1cIix0aGlzLnBvcyktdGhpcy5wb3MpLCsrdGhpcy5wb3MsdD4xMTE0MTExJiZ0aGlzLmludmFsaWRTdHJpbmdUb2tlbihpLFwiQ29kZSBwb2ludCBvdXQgb2YgYm91bmRzXCIpfWVsc2UgdD10aGlzLnJlYWRIZXhDaGFyKDQpO3JldHVybiB0fTt2LnJlYWRTdHJpbmc9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVwiXCIsaT0rK3RoaXMucG9zOzspe3RoaXMucG9zPj10aGlzLmlucHV0Lmxlbmd0aCYmdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LFwiVW50ZXJtaW5hdGVkIHN0cmluZyBjb25zdGFudFwiKTt2YXIgcz10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO2lmKHM9PT1lKWJyZWFrO3M9PT05Mj8odCs9dGhpcy5pbnB1dC5zbGljZShpLHRoaXMucG9zKSx0Kz10aGlzLnJlYWRFc2NhcGVkQ2hhcighMSksaT10aGlzLnBvcyk6cz09PTgyMzJ8fHM9PT04MjMzPyh0aGlzLm9wdGlvbnMuZWNtYVZlcnNpb248MTAmJnRoaXMucmFpc2UodGhpcy5zdGFydCxcIlVudGVybWluYXRlZCBzdHJpbmcgY29uc3RhbnRcIiksKyt0aGlzLnBvcyx0aGlzLm9wdGlvbnMubG9jYXRpb25zJiYodGhpcy5jdXJMaW5lKyssdGhpcy5saW5lU3RhcnQ9dGhpcy5wb3MpKTooUShzKSYmdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LFwiVW50ZXJtaW5hdGVkIHN0cmluZyBjb25zdGFudFwiKSwrK3RoaXMucG9zKX1yZXR1cm4gdCs9dGhpcy5pbnB1dC5zbGljZShpLHRoaXMucG9zKyspLHRoaXMuZmluaXNoVG9rZW4oYS5zdHJpbmcsdCl9O3ZhciBVdD17fTt2LnRyeVJlYWRUZW1wbGF0ZVRva2VuPWZ1bmN0aW9uKCl7dGhpcy5pblRlbXBsYXRlRWxlbWVudD0hMDt0cnl7dGhpcy5yZWFkVG1wbFRva2VuKCl9Y2F0Y2goZSl7aWYoZT09PVV0KXRoaXMucmVhZEludmFsaWRUZW1wbGF0ZVRva2VuKCk7ZWxzZSB0aHJvdyBlfXRoaXMuaW5UZW1wbGF0ZUVsZW1lbnQ9ITF9O3YuaW52YWxpZFN0cmluZ1Rva2VuPWZ1bmN0aW9uKGUsdCl7aWYodGhpcy5pblRlbXBsYXRlRWxlbWVudCYmdGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj05KXRocm93IFV0O3RoaXMucmFpc2UoZSx0KX07di5yZWFkVG1wbFRva2VuPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVwiXCIsdD10aGlzLnBvczs7KXt0aGlzLnBvcz49dGhpcy5pbnB1dC5sZW5ndGgmJnRoaXMucmFpc2UodGhpcy5zdGFydCxcIlVudGVybWluYXRlZCB0ZW1wbGF0ZVwiKTt2YXIgaT10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpO2lmKGk9PT05Nnx8aT09PTM2JiZ0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MrMSk9PT0xMjMpcmV0dXJuIHRoaXMucG9zPT09dGhpcy5zdGFydCYmKHRoaXMudHlwZT09PWEudGVtcGxhdGV8fHRoaXMudHlwZT09PWEuaW52YWxpZFRlbXBsYXRlKT9pPT09MzY/KHRoaXMucG9zKz0yLHRoaXMuZmluaXNoVG9rZW4oYS5kb2xsYXJCcmFjZUwpKTooKyt0aGlzLnBvcyx0aGlzLmZpbmlzaFRva2VuKGEuYmFja1F1b3RlKSk6KGUrPXRoaXMuaW5wdXQuc2xpY2UodCx0aGlzLnBvcyksdGhpcy5maW5pc2hUb2tlbihhLnRlbXBsYXRlLGUpKTtpZihpPT09OTIpZSs9dGhpcy5pbnB1dC5zbGljZSh0LHRoaXMucG9zKSxlKz10aGlzLnJlYWRFc2NhcGVkQ2hhcighMCksdD10aGlzLnBvcztlbHNlIGlmKFEoaSkpe3N3aXRjaChlKz10aGlzLmlucHV0LnNsaWNlKHQsdGhpcy5wb3MpLCsrdGhpcy5wb3MsaSl7Y2FzZSAxMzp0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpPT09MTAmJisrdGhpcy5wb3M7Y2FzZSAxMDplKz1gXG5gO2JyZWFrO2RlZmF1bHQ6ZSs9U3RyaW5nLmZyb21DaGFyQ29kZShpKTticmVha310aGlzLm9wdGlvbnMubG9jYXRpb25zJiYoKyt0aGlzLmN1ckxpbmUsdGhpcy5saW5lU3RhcnQ9dGhpcy5wb3MpLHQ9dGhpcy5wb3N9ZWxzZSsrdGhpcy5wb3N9fTt2LnJlYWRJbnZhbGlkVGVtcGxhdGVUb2tlbj1mdW5jdGlvbigpe2Zvcig7dGhpcy5wb3M8dGhpcy5pbnB1dC5sZW5ndGg7dGhpcy5wb3MrKylzd2l0Y2godGhpcy5pbnB1dFt0aGlzLnBvc10pe2Nhc2VcIlxcXFxcIjorK3RoaXMucG9zO2JyZWFrO2Nhc2VcIiRcIjppZih0aGlzLmlucHV0W3RoaXMucG9zKzFdIT09XCJ7XCIpYnJlYWs7Y2FzZVwiYFwiOnJldHVybiB0aGlzLmZpbmlzaFRva2VuKGEuaW52YWxpZFRlbXBsYXRlLHRoaXMuaW5wdXQuc2xpY2UodGhpcy5zdGFydCx0aGlzLnBvcykpO2Nhc2VcIlxcclwiOnRoaXMuaW5wdXRbdGhpcy5wb3MrMV09PT1gXG5gJiYrK3RoaXMucG9zO2Nhc2VgXG5gOmNhc2VcIlxcdTIwMjhcIjpjYXNlXCJcXHUyMDI5XCI6Kyt0aGlzLmN1ckxpbmUsdGhpcy5saW5lU3RhcnQ9dGhpcy5wb3MrMTticmVha310aGlzLnJhaXNlKHRoaXMuc3RhcnQsXCJVbnRlcm1pbmF0ZWQgdGVtcGxhdGVcIil9O3YucmVhZEVzY2FwZWRDaGFyPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuaW5wdXQuY2hhckNvZGVBdCgrK3RoaXMucG9zKTtzd2l0Y2goKyt0aGlzLnBvcyx0KXtjYXNlIDExMDpyZXR1cm5gXG5gO2Nhc2UgMTE0OnJldHVyblwiXFxyXCI7Y2FzZSAxMjA6cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUodGhpcy5yZWFkSGV4Q2hhcigyKSk7Y2FzZSAxMTc6cmV0dXJuIFUodGhpcy5yZWFkQ29kZVBvaW50KCkpO2Nhc2UgMTE2OnJldHVyblwiXHRcIjtjYXNlIDk4OnJldHVyblwiXFxiXCI7Y2FzZSAxMTg6cmV0dXJuXCJcXHZcIjtjYXNlIDEwMjpyZXR1cm5cIlxcZlwiO2Nhc2UgMTM6dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMucG9zKT09PTEwJiYrK3RoaXMucG9zO2Nhc2UgMTA6cmV0dXJuIHRoaXMub3B0aW9ucy5sb2NhdGlvbnMmJih0aGlzLmxpbmVTdGFydD10aGlzLnBvcywrK3RoaXMuY3VyTGluZSksXCJcIjtjYXNlIDU2OmNhc2UgNTc6aWYodGhpcy5zdHJpY3QmJnRoaXMuaW52YWxpZFN0cmluZ1Rva2VuKHRoaXMucG9zLTEsXCJJbnZhbGlkIGVzY2FwZSBzZXF1ZW5jZVwiKSxlKXt2YXIgaT10aGlzLnBvcy0xO3RoaXMuaW52YWxpZFN0cmluZ1Rva2VuKGksXCJJbnZhbGlkIGVzY2FwZSBzZXF1ZW5jZSBpbiB0ZW1wbGF0ZSBzdHJpbmdcIil9ZGVmYXVsdDppZih0Pj00OCYmdDw9NTUpe3ZhciBzPXRoaXMuaW5wdXQuc3Vic3RyKHRoaXMucG9zLTEsMykubWF0Y2goL15bMC03XSsvKVswXSxyPXBhcnNlSW50KHMsOCk7cmV0dXJuIHI+MjU1JiYocz1zLnNsaWNlKDAsLTEpLHI9cGFyc2VJbnQocyw4KSksdGhpcy5wb3MrPXMubGVuZ3RoLTEsdD10aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpLChzIT09XCIwXCJ8fHQ9PT01Nnx8dD09PTU3KSYmKHRoaXMuc3RyaWN0fHxlKSYmdGhpcy5pbnZhbGlkU3RyaW5nVG9rZW4odGhpcy5wb3MtMS1zLmxlbmd0aCxlP1wiT2N0YWwgbGl0ZXJhbCBpbiB0ZW1wbGF0ZSBzdHJpbmdcIjpcIk9jdGFsIGxpdGVyYWwgaW4gc3RyaWN0IG1vZGVcIiksU3RyaW5nLmZyb21DaGFyQ29kZShyKX1yZXR1cm4gUSh0KT8odGhpcy5vcHRpb25zLmxvY2F0aW9ucyYmKHRoaXMubGluZVN0YXJ0PXRoaXMucG9zLCsrdGhpcy5jdXJMaW5lKSxcIlwiKTpTdHJpbmcuZnJvbUNoYXJDb2RlKHQpfX07di5yZWFkSGV4Q2hhcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnBvcyxpPXRoaXMucmVhZEludCgxNixlKTtyZXR1cm4gaT09PW51bGwmJnRoaXMuaW52YWxpZFN0cmluZ1Rva2VuKHQsXCJCYWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZVwiKSxpfTt2LnJlYWRXb3JkMT1mdW5jdGlvbigpe3RoaXMuY29udGFpbnNFc2M9ITE7Zm9yKHZhciBlPVwiXCIsdD0hMCxpPXRoaXMucG9zLHM9dGhpcy5vcHRpb25zLmVjbWFWZXJzaW9uPj02O3RoaXMucG9zPHRoaXMuaW5wdXQubGVuZ3RoOyl7dmFyIHI9dGhpcy5mdWxsQ2hhckNvZGVBdFBvcygpO2lmKEgocixzKSl0aGlzLnBvcys9cjw9NjU1MzU/MToyO2Vsc2UgaWYocj09PTkyKXt0aGlzLmNvbnRhaW5zRXNjPSEwLGUrPXRoaXMuaW5wdXQuc2xpY2UoaSx0aGlzLnBvcyk7dmFyIG49dGhpcy5wb3M7dGhpcy5pbnB1dC5jaGFyQ29kZUF0KCsrdGhpcy5wb3MpIT09MTE3JiZ0aGlzLmludmFsaWRTdHJpbmdUb2tlbih0aGlzLnBvcyxcIkV4cGVjdGluZyBVbmljb2RlIGVzY2FwZSBzZXF1ZW5jZSBcXFxcdVhYWFhcIiksKyt0aGlzLnBvczt2YXIgbz10aGlzLnJlYWRDb2RlUG9pbnQoKTsodD9NOkgpKG8scyl8fHRoaXMuaW52YWxpZFN0cmluZ1Rva2VuKG4sXCJJbnZhbGlkIFVuaWNvZGUgZXNjYXBlXCIpLGUrPVUobyksaT10aGlzLnBvc31lbHNlIGJyZWFrO3Q9ITF9cmV0dXJuIGUrdGhpcy5pbnB1dC5zbGljZShpLHRoaXMucG9zKX07di5yZWFkV29yZD1mdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZFdvcmQxKCksdD1hLm5hbWU7cmV0dXJuIHRoaXMua2V5d29yZHMudGVzdChlKSYmKHQ9T2VbZV0pLHRoaXMuZmluaXNoVG9rZW4odCxlKX07dmFyIHJzPVwiOC4xNC4wXCI7VC5hY29ybj17UGFyc2VyOlQsdmVyc2lvbjpycyxkZWZhdWx0T3B0aW9uczpWZSxQb3NpdGlvbjppZSxTb3VyY2VMb2NhdGlvbjp4ZSxnZXRMaW5lSW5mbzpjdCxOb2RlOmdlLFRva2VuVHlwZTpTLHRva1R5cGVzOmEsa2V5d29yZFR5cGVzOk9lLFRva0NvbnRleHQ6RCx0b2tDb250ZXh0czpfLGlzSWRlbnRpZmllckNoYXI6SCxpc0lkZW50aWZpZXJTdGFydDpNLFRva2VuOnFlLGlzTmV3TGluZTpRLGxpbmVCcmVhazpMLGxpbmVCcmVha0c6d2ksbm9uQVNDSUl3aGl0ZXNwYWNlOnB0fTt2YXIgbmk9ZXQoSmUoKSwxKTtmdW5jdGlvbiBocyhlLHQpe2xldCBpPW5ldyBTeW50YXhFcnJvcihlK1wiIChcIit0LmxvYy5zdGFydC5saW5lK1wiOlwiK3QubG9jLnN0YXJ0LmNvbHVtbitcIilcIik7cmV0dXJuIE9iamVjdC5hc3NpZ24oaSx0KX12YXIgYmU9aHM7ZnVuY3Rpb24gY3MoZSl7bGV0IHQ9W107Zm9yKGxldCBpIG9mIGUpdHJ5e3JldHVybiBpKCl9Y2F0Y2gocyl7dC5wdXNoKHMpfXRocm93IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKFwiQWxsIGNvbWJpbmF0aW9ucyBmYWlsZWRcIikse2Vycm9yczp0fSl9dmFyIFNlPWNzO3ZhciBscz0oZSx0LGkpPT57aWYoIShlJiZ0PT1udWxsKSlyZXR1cm4gQXJyYXkuaXNBcnJheSh0KXx8dHlwZW9mIHQ9PVwic3RyaW5nXCI/dFtpPDA/dC5sZW5ndGgraTppXTp0LmF0KGkpfSxYPWxzO2Z1bmN0aW9uIGZzKGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpJiZlLmxlbmd0aD4wfXZhciBXdD1mcztmdW5jdGlvbiBPKGUpe3ZhciBzLHIsbjtsZXQgdD0oKHM9ZS5yYW5nZSk9PW51bGw/dm9pZCAwOnNbMF0pPz9lLnN0YXJ0LGk9KG49KChyPWUuZGVjbGFyYXRpb24pPT1udWxsP3ZvaWQgMDpyLmRlY29yYXRvcnMpPz9lLmRlY29yYXRvcnMpPT1udWxsP3ZvaWQgMDpuWzBdO3JldHVybiBpP01hdGgubWluKE8oaSksdCk6dH1mdW5jdGlvbiBKKGUpe3ZhciB0O3JldHVybigodD1lLnJhbmdlKT09bnVsbD92b2lkIDA6dFsxXSk/P2UuZW5kfWZ1bmN0aW9uIGRzKGUpe2xldCB0PW5ldyBTZXQoZSk7cmV0dXJuIGk9PnQuaGFzKGk9PW51bGw/dm9pZCAwOmkudHlwZSl9dmFyIFh0PWRzO3ZhciBtcz1YdChbXCJCbG9ja1wiLFwiQ29tbWVudEJsb2NrXCIsXCJNdWx0aUxpbmVcIl0pLG9lPW1zO2Z1bmN0aW9uIHhzKGUpe2xldCB0PWAqJHtlLnZhbHVlfSpgLnNwbGl0KGBcbmApO3JldHVybiB0Lmxlbmd0aD4xJiZ0LmV2ZXJ5KGk9PmkudHJpbVN0YXJ0KClbMF09PT1cIipcIil9dmFyIEtlPXhzO2Z1bmN0aW9uIHlzKGUpe3JldHVybiBvZShlKSYmZS52YWx1ZVswXT09PVwiKlwiJiYvQCg/OnR5cGV8c2F0aXNmaWVzKVxcYi91LnRlc3QoZS52YWx1ZSl9dmFyIHp0PXlzO3ZhciB1ZT1udWxsO2Z1bmN0aW9uIHBlKGUpe2lmKHVlIT09bnVsbCYmdHlwZW9mIHVlLnByb3BlcnR5KXtsZXQgdD11ZTtyZXR1cm4gdWU9cGUucHJvdG90eXBlPW51bGwsdH1yZXR1cm4gdWU9cGUucHJvdG90eXBlPWU/P09iamVjdC5jcmVhdGUobnVsbCksbmV3IHBlfXZhciBncz0xMDtmb3IobGV0IGU9MDtlPD1ncztlKyspcGUoKTtmdW5jdGlvbiBXZShlKXtyZXR1cm4gcGUoZSl9ZnVuY3Rpb24gdnMoZSx0PVwidHlwZVwiKXtXZShlKTtmdW5jdGlvbiBpKHMpe2xldCByPXNbdF0sbj1lW3JdO2lmKCFBcnJheS5pc0FycmF5KG4pKXRocm93IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGBNaXNzaW5nIHZpc2l0b3Iga2V5cyBmb3IgJyR7cn0nLmApLHtub2RlOnN9KTtyZXR1cm4gbn1yZXR1cm4gaX12YXIgSHQ9dnM7dmFyIFF0PXtBcnJheUV4cHJlc3Npb246W1wiZWxlbWVudHNcIl0sQXNzaWdubWVudEV4cHJlc3Npb246W1wibGVmdFwiLFwicmlnaHRcIl0sQmluYXJ5RXhwcmVzc2lvbjpbXCJsZWZ0XCIsXCJyaWdodFwiXSxJbnRlcnByZXRlckRpcmVjdGl2ZTpbXSxEaXJlY3RpdmU6W1widmFsdWVcIl0sRGlyZWN0aXZlTGl0ZXJhbDpbXSxCbG9ja1N0YXRlbWVudDpbXCJkaXJlY3RpdmVzXCIsXCJib2R5XCJdLEJyZWFrU3RhdGVtZW50OltcImxhYmVsXCJdLENhbGxFeHByZXNzaW9uOltcImNhbGxlZVwiLFwiYXJndW1lbnRzXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiXSxDYXRjaENsYXVzZTpbXCJwYXJhbVwiLFwiYm9keVwiXSxDb25kaXRpb25hbEV4cHJlc3Npb246W1widGVzdFwiLFwiY29uc2VxdWVudFwiLFwiYWx0ZXJuYXRlXCJdLENvbnRpbnVlU3RhdGVtZW50OltcImxhYmVsXCJdLERlYnVnZ2VyU3RhdGVtZW50OltdLERvV2hpbGVTdGF0ZW1lbnQ6W1wiYm9keVwiLFwidGVzdFwiXSxFbXB0eVN0YXRlbWVudDpbXSxFeHByZXNzaW9uU3RhdGVtZW50OltcImV4cHJlc3Npb25cIl0sRmlsZTpbXCJwcm9ncmFtXCJdLEZvckluU3RhdGVtZW50OltcImxlZnRcIixcInJpZ2h0XCIsXCJib2R5XCJdLEZvclN0YXRlbWVudDpbXCJpbml0XCIsXCJ0ZXN0XCIsXCJ1cGRhdGVcIixcImJvZHlcIl0sRnVuY3Rpb25EZWNsYXJhdGlvbjpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInBhcmFtc1wiLFwicHJlZGljYXRlXCIsXCJyZXR1cm5UeXBlXCIsXCJib2R5XCJdLEZ1bmN0aW9uRXhwcmVzc2lvbjpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInBhcmFtc1wiLFwicmV0dXJuVHlwZVwiLFwiYm9keVwiXSxJZGVudGlmaWVyOltcInR5cGVBbm5vdGF0aW9uXCIsXCJkZWNvcmF0b3JzXCJdLElmU3RhdGVtZW50OltcInRlc3RcIixcImNvbnNlcXVlbnRcIixcImFsdGVybmF0ZVwiXSxMYWJlbGVkU3RhdGVtZW50OltcImxhYmVsXCIsXCJib2R5XCJdLFN0cmluZ0xpdGVyYWw6W10sTnVtZXJpY0xpdGVyYWw6W10sTnVsbExpdGVyYWw6W10sQm9vbGVhbkxpdGVyYWw6W10sUmVnRXhwTGl0ZXJhbDpbXSxMb2dpY2FsRXhwcmVzc2lvbjpbXCJsZWZ0XCIsXCJyaWdodFwiXSxNZW1iZXJFeHByZXNzaW9uOltcIm9iamVjdFwiLFwicHJvcGVydHlcIl0sTmV3RXhwcmVzc2lvbjpbXCJjYWxsZWVcIixcImFyZ3VtZW50c1wiLFwidHlwZVBhcmFtZXRlcnNcIixcInR5cGVBcmd1bWVudHNcIl0sUHJvZ3JhbTpbXCJkaXJlY3RpdmVzXCIsXCJib2R5XCJdLE9iamVjdEV4cHJlc3Npb246W1wicHJvcGVydGllc1wiXSxPYmplY3RNZXRob2Q6W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCIsXCJib2R5XCJdLE9iamVjdFByb3BlcnR5OltcImtleVwiLFwidmFsdWVcIixcImRlY29yYXRvcnNcIl0sUmVzdEVsZW1lbnQ6W1wiYXJndW1lbnRcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJkZWNvcmF0b3JzXCJdLFJldHVyblN0YXRlbWVudDpbXCJhcmd1bWVudFwiXSxTZXF1ZW5jZUV4cHJlc3Npb246W1wiZXhwcmVzc2lvbnNcIl0sUGFyZW50aGVzaXplZEV4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiXSxTd2l0Y2hDYXNlOltcInRlc3RcIixcImNvbnNlcXVlbnRcIl0sU3dpdGNoU3RhdGVtZW50OltcImRpc2NyaW1pbmFudFwiLFwiY2FzZXNcIl0sVGhpc0V4cHJlc3Npb246W10sVGhyb3dTdGF0ZW1lbnQ6W1wiYXJndW1lbnRcIl0sVHJ5U3RhdGVtZW50OltcImJsb2NrXCIsXCJoYW5kbGVyXCIsXCJmaW5hbGl6ZXJcIl0sVW5hcnlFeHByZXNzaW9uOltcImFyZ3VtZW50XCJdLFVwZGF0ZUV4cHJlc3Npb246W1wiYXJndW1lbnRcIl0sVmFyaWFibGVEZWNsYXJhdGlvbjpbXCJkZWNsYXJhdGlvbnNcIl0sVmFyaWFibGVEZWNsYXJhdG9yOltcImlkXCIsXCJpbml0XCJdLFdoaWxlU3RhdGVtZW50OltcInRlc3RcIixcImJvZHlcIl0sV2l0aFN0YXRlbWVudDpbXCJvYmplY3RcIixcImJvZHlcIl0sQXNzaWdubWVudFBhdHRlcm46W1wibGVmdFwiLFwicmlnaHRcIixcImRlY29yYXRvcnNcIixcInR5cGVBbm5vdGF0aW9uXCJdLEFycmF5UGF0dGVybjpbXCJlbGVtZW50c1wiLFwidHlwZUFubm90YXRpb25cIixcImRlY29yYXRvcnNcIl0sQXJyb3dGdW5jdGlvbkV4cHJlc3Npb246W1widHlwZVBhcmFtZXRlcnNcIixcInBhcmFtc1wiLFwicHJlZGljYXRlXCIsXCJyZXR1cm5UeXBlXCIsXCJib2R5XCJdLENsYXNzQm9keTpbXCJib2R5XCJdLENsYXNzRXhwcmVzc2lvbjpbXCJkZWNvcmF0b3JzXCIsXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInN1cGVyQ2xhc3NcIixcInN1cGVyVHlwZVBhcmFtZXRlcnNcIixcIm1peGluc1wiLFwiaW1wbGVtZW50c1wiLFwiYm9keVwiLFwic3VwZXJUeXBlQXJndW1lbnRzXCJdLENsYXNzRGVjbGFyYXRpb246W1wiZGVjb3JhdG9yc1wiLFwiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJzdXBlckNsYXNzXCIsXCJzdXBlclR5cGVQYXJhbWV0ZXJzXCIsXCJtaXhpbnNcIixcImltcGxlbWVudHNcIixcImJvZHlcIixcInN1cGVyVHlwZUFyZ3VtZW50c1wiXSxFeHBvcnRBbGxEZWNsYXJhdGlvbjpbXCJzb3VyY2VcIixcImF0dHJpYnV0ZXNcIixcImV4cG9ydGVkXCJdLEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbjpbXCJkZWNsYXJhdGlvblwiXSxFeHBvcnROYW1lZERlY2xhcmF0aW9uOltcImRlY2xhcmF0aW9uXCIsXCJzcGVjaWZpZXJzXCIsXCJzb3VyY2VcIixcImF0dHJpYnV0ZXNcIl0sRXhwb3J0U3BlY2lmaWVyOltcImxvY2FsXCIsXCJleHBvcnRlZFwiXSxGb3JPZlN0YXRlbWVudDpbXCJsZWZ0XCIsXCJyaWdodFwiLFwiYm9keVwiXSxJbXBvcnREZWNsYXJhdGlvbjpbXCJzcGVjaWZpZXJzXCIsXCJzb3VyY2VcIixcImF0dHJpYnV0ZXNcIl0sSW1wb3J0RGVmYXVsdFNwZWNpZmllcjpbXCJsb2NhbFwiXSxJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXI6W1wibG9jYWxcIl0sSW1wb3J0U3BlY2lmaWVyOltcImltcG9ydGVkXCIsXCJsb2NhbFwiXSxJbXBvcnRFeHByZXNzaW9uOltcInNvdXJjZVwiLFwib3B0aW9uc1wiXSxNZXRhUHJvcGVydHk6W1wibWV0YVwiLFwicHJvcGVydHlcIl0sQ2xhc3NNZXRob2Q6W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCIsXCJib2R5XCJdLE9iamVjdFBhdHRlcm46W1wicHJvcGVydGllc1wiLFwidHlwZUFubm90YXRpb25cIixcImRlY29yYXRvcnNcIl0sU3ByZWFkRWxlbWVudDpbXCJhcmd1bWVudFwiXSxTdXBlcjpbXSxUYWdnZWRUZW1wbGF0ZUV4cHJlc3Npb246W1widGFnXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicXVhc2lcIixcInR5cGVBcmd1bWVudHNcIl0sVGVtcGxhdGVFbGVtZW50OltdLFRlbXBsYXRlTGl0ZXJhbDpbXCJxdWFzaXNcIixcImV4cHJlc3Npb25zXCJdLFlpZWxkRXhwcmVzc2lvbjpbXCJhcmd1bWVudFwiXSxBd2FpdEV4cHJlc3Npb246W1wiYXJndW1lbnRcIl0sQmlnSW50TGl0ZXJhbDpbXSxFeHBvcnROYW1lc3BhY2VTcGVjaWZpZXI6W1wiZXhwb3J0ZWRcIl0sT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uOltcIm9iamVjdFwiLFwicHJvcGVydHlcIl0sT3B0aW9uYWxDYWxsRXhwcmVzc2lvbjpbXCJjYWxsZWVcIixcImFyZ3VtZW50c1wiLFwidHlwZVBhcmFtZXRlcnNcIixcInR5cGVBcmd1bWVudHNcIl0sQ2xhc3NQcm9wZXJ0eTpbXCJkZWNvcmF0b3JzXCIsXCJ2YXJpYW5jZVwiLFwia2V5XCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwidmFsdWVcIl0sQ2xhc3NBY2Nlc3NvclByb3BlcnR5OltcImRlY29yYXRvcnNcIixcImtleVwiLFwidHlwZUFubm90YXRpb25cIixcInZhbHVlXCJdLENsYXNzUHJpdmF0ZVByb3BlcnR5OltcImRlY29yYXRvcnNcIixcInZhcmlhbmNlXCIsXCJrZXlcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJ2YWx1ZVwiXSxDbGFzc1ByaXZhdGVNZXRob2Q6W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCIsXCJib2R5XCJdLFByaXZhdGVOYW1lOltcImlkXCJdLFN0YXRpY0Jsb2NrOltcImJvZHlcIl0sQW55VHlwZUFubm90YXRpb246W10sQXJyYXlUeXBlQW5ub3RhdGlvbjpbXCJlbGVtZW50VHlwZVwiXSxCb29sZWFuVHlwZUFubm90YXRpb246W10sQm9vbGVhbkxpdGVyYWxUeXBlQW5ub3RhdGlvbjpbXSxOdWxsTGl0ZXJhbFR5cGVBbm5vdGF0aW9uOltdLENsYXNzSW1wbGVtZW50czpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIl0sRGVjbGFyZUNsYXNzOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwiZXh0ZW5kc1wiLFwibWl4aW5zXCIsXCJpbXBsZW1lbnRzXCIsXCJib2R5XCJdLERlY2xhcmVGdW5jdGlvbjpbXCJpZFwiLFwicHJlZGljYXRlXCJdLERlY2xhcmVJbnRlcmZhY2U6W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJleHRlbmRzXCIsXCJib2R5XCJdLERlY2xhcmVNb2R1bGU6W1wiaWRcIixcImJvZHlcIl0sRGVjbGFyZU1vZHVsZUV4cG9ydHM6W1widHlwZUFubm90YXRpb25cIl0sRGVjbGFyZVR5cGVBbGlhczpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInJpZ2h0XCJdLERlY2xhcmVPcGFxdWVUeXBlOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwic3VwZXJ0eXBlXCJdLERlY2xhcmVWYXJpYWJsZTpbXCJpZFwiXSxEZWNsYXJlRXhwb3J0RGVjbGFyYXRpb246W1wiZGVjbGFyYXRpb25cIixcInNwZWNpZmllcnNcIixcInNvdXJjZVwiLFwiYXR0cmlidXRlc1wiXSxEZWNsYXJlRXhwb3J0QWxsRGVjbGFyYXRpb246W1wic291cmNlXCIsXCJhdHRyaWJ1dGVzXCJdLERlY2xhcmVkUHJlZGljYXRlOltcInZhbHVlXCJdLEV4aXN0c1R5cGVBbm5vdGF0aW9uOltdLEZ1bmN0aW9uVHlwZUFubm90YXRpb246W1widHlwZVBhcmFtZXRlcnNcIixcInRoaXNcIixcInBhcmFtc1wiLFwicmVzdFwiLFwicmV0dXJuVHlwZVwiXSxGdW5jdGlvblR5cGVQYXJhbTpbXCJuYW1lXCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxHZW5lcmljVHlwZUFubm90YXRpb246W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCJdLEluZmVycmVkUHJlZGljYXRlOltdLEludGVyZmFjZUV4dGVuZHM6W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCJdLEludGVyZmFjZURlY2xhcmF0aW9uOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwiZXh0ZW5kc1wiLFwiYm9keVwiXSxJbnRlcmZhY2VUeXBlQW5ub3RhdGlvbjpbXCJleHRlbmRzXCIsXCJib2R5XCJdLEludGVyc2VjdGlvblR5cGVBbm5vdGF0aW9uOltcInR5cGVzXCJdLE1peGVkVHlwZUFubm90YXRpb246W10sRW1wdHlUeXBlQW5ub3RhdGlvbjpbXSxOdWxsYWJsZVR5cGVBbm5vdGF0aW9uOltcInR5cGVBbm5vdGF0aW9uXCJdLE51bWJlckxpdGVyYWxUeXBlQW5ub3RhdGlvbjpbXSxOdW1iZXJUeXBlQW5ub3RhdGlvbjpbXSxPYmplY3RUeXBlQW5ub3RhdGlvbjpbXCJwcm9wZXJ0aWVzXCIsXCJpbmRleGVyc1wiLFwiY2FsbFByb3BlcnRpZXNcIixcImludGVybmFsU2xvdHNcIl0sT2JqZWN0VHlwZUludGVybmFsU2xvdDpbXCJpZFwiLFwidmFsdWVcIl0sT2JqZWN0VHlwZUNhbGxQcm9wZXJ0eTpbXCJ2YWx1ZVwiXSxPYmplY3RUeXBlSW5kZXhlcjpbXCJ2YXJpYW5jZVwiLFwiaWRcIixcImtleVwiLFwidmFsdWVcIl0sT2JqZWN0VHlwZVByb3BlcnR5OltcImtleVwiLFwidmFsdWVcIixcInZhcmlhbmNlXCJdLE9iamVjdFR5cGVTcHJlYWRQcm9wZXJ0eTpbXCJhcmd1bWVudFwiXSxPcGFxdWVUeXBlOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwic3VwZXJ0eXBlXCIsXCJpbXBsdHlwZVwiXSxRdWFsaWZpZWRUeXBlSWRlbnRpZmllcjpbXCJxdWFsaWZpY2F0aW9uXCIsXCJpZFwiXSxTdHJpbmdMaXRlcmFsVHlwZUFubm90YXRpb246W10sU3RyaW5nVHlwZUFubm90YXRpb246W10sU3ltYm9sVHlwZUFubm90YXRpb246W10sVGhpc1R5cGVBbm5vdGF0aW9uOltdLFR1cGxlVHlwZUFubm90YXRpb246W1widHlwZXNcIixcImVsZW1lbnRUeXBlc1wiXSxUeXBlb2ZUeXBlQW5ub3RhdGlvbjpbXCJhcmd1bWVudFwiLFwidHlwZUFyZ3VtZW50c1wiXSxUeXBlQWxpYXM6W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJyaWdodFwiXSxUeXBlQW5ub3RhdGlvbjpbXCJ0eXBlQW5ub3RhdGlvblwiXSxUeXBlQ2FzdEV4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiLFwidHlwZUFubm90YXRpb25cIl0sVHlwZVBhcmFtZXRlcjpbXCJib3VuZFwiLFwiZGVmYXVsdFwiLFwidmFyaWFuY2VcIl0sVHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uOltcInBhcmFtc1wiXSxUeXBlUGFyYW1ldGVySW5zdGFudGlhdGlvbjpbXCJwYXJhbXNcIl0sVW5pb25UeXBlQW5ub3RhdGlvbjpbXCJ0eXBlc1wiXSxWYXJpYW5jZTpbXSxWb2lkVHlwZUFubm90YXRpb246W10sRW51bURlY2xhcmF0aW9uOltcImlkXCIsXCJib2R5XCJdLEVudW1Cb29sZWFuQm9keTpbXCJtZW1iZXJzXCJdLEVudW1OdW1iZXJCb2R5OltcIm1lbWJlcnNcIl0sRW51bVN0cmluZ0JvZHk6W1wibWVtYmVyc1wiXSxFbnVtU3ltYm9sQm9keTpbXCJtZW1iZXJzXCJdLEVudW1Cb29sZWFuTWVtYmVyOltcImlkXCIsXCJpbml0XCJdLEVudW1OdW1iZXJNZW1iZXI6W1wiaWRcIixcImluaXRcIl0sRW51bVN0cmluZ01lbWJlcjpbXCJpZFwiLFwiaW5pdFwiXSxFbnVtRGVmYXVsdGVkTWVtYmVyOltcImlkXCJdLEluZGV4ZWRBY2Nlc3NUeXBlOltcIm9iamVjdFR5cGVcIixcImluZGV4VHlwZVwiXSxPcHRpb25hbEluZGV4ZWRBY2Nlc3NUeXBlOltcIm9iamVjdFR5cGVcIixcImluZGV4VHlwZVwiXSxKU1hBdHRyaWJ1dGU6W1wibmFtZVwiLFwidmFsdWVcIl0sSlNYQ2xvc2luZ0VsZW1lbnQ6W1wibmFtZVwiXSxKU1hFbGVtZW50OltcIm9wZW5pbmdFbGVtZW50XCIsXCJjaGlsZHJlblwiLFwiY2xvc2luZ0VsZW1lbnRcIl0sSlNYRW1wdHlFeHByZXNzaW9uOltdLEpTWEV4cHJlc3Npb25Db250YWluZXI6W1wiZXhwcmVzc2lvblwiXSxKU1hTcHJlYWRDaGlsZDpbXCJleHByZXNzaW9uXCJdLEpTWElkZW50aWZpZXI6W10sSlNYTWVtYmVyRXhwcmVzc2lvbjpbXCJvYmplY3RcIixcInByb3BlcnR5XCJdLEpTWE5hbWVzcGFjZWROYW1lOltcIm5hbWVzcGFjZVwiLFwibmFtZVwiXSxKU1hPcGVuaW5nRWxlbWVudDpbXCJuYW1lXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiLFwiYXR0cmlidXRlc1wiXSxKU1hTcHJlYWRBdHRyaWJ1dGU6W1wiYXJndW1lbnRcIl0sSlNYVGV4dDpbXSxKU1hGcmFnbWVudDpbXCJvcGVuaW5nRnJhZ21lbnRcIixcImNoaWxkcmVuXCIsXCJjbG9zaW5nRnJhZ21lbnRcIl0sSlNYT3BlbmluZ0ZyYWdtZW50OltdLEpTWENsb3NpbmdGcmFnbWVudDpbXSxOb29wOltdLFBsYWNlaG9sZGVyOltdLFY4SW50cmluc2ljSWRlbnRpZmllcjpbXSxBcmd1bWVudFBsYWNlaG9sZGVyOltdLEJpbmRFeHByZXNzaW9uOltcIm9iamVjdFwiLFwiY2FsbGVlXCJdLEltcG9ydEF0dHJpYnV0ZTpbXCJrZXlcIixcInZhbHVlXCJdLERlY29yYXRvcjpbXCJleHByZXNzaW9uXCJdLERvRXhwcmVzc2lvbjpbXCJib2R5XCJdLEV4cG9ydERlZmF1bHRTcGVjaWZpZXI6W1wiZXhwb3J0ZWRcIl0sUmVjb3JkRXhwcmVzc2lvbjpbXCJwcm9wZXJ0aWVzXCJdLFR1cGxlRXhwcmVzc2lvbjpbXCJlbGVtZW50c1wiXSxNb2R1bGVFeHByZXNzaW9uOltcImJvZHlcIl0sVG9waWNSZWZlcmVuY2U6W10sUGlwZWxpbmVUb3BpY0V4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiXSxQaXBlbGluZUJhcmVGdW5jdGlvbjpbXCJjYWxsZWVcIl0sUGlwZWxpbmVQcmltYXJ5VG9waWNSZWZlcmVuY2U6W10sVFNQYXJhbWV0ZXJQcm9wZXJ0eTpbXCJwYXJhbWV0ZXJcIixcImRlY29yYXRvcnNcIl0sVFNEZWNsYXJlRnVuY3Rpb246W1wiaWRcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIixcImJvZHlcIl0sVFNEZWNsYXJlTWV0aG9kOltcImRlY29yYXRvcnNcIixcImtleVwiLFwidHlwZVBhcmFtZXRlcnNcIixcInBhcmFtc1wiLFwicmV0dXJuVHlwZVwiXSxUU1F1YWxpZmllZE5hbWU6W1wibGVmdFwiLFwicmlnaHRcIl0sVFNDYWxsU2lnbmF0dXJlRGVjbGFyYXRpb246W1widHlwZVBhcmFtZXRlcnNcIixcInBhcmFtZXRlcnNcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJwYXJhbXNcIixcInJldHVyblR5cGVcIl0sVFNDb25zdHJ1Y3RTaWduYXR1cmVEZWNsYXJhdGlvbjpbXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1ldGVyc1wiLFwidHlwZUFubm90YXRpb25cIixcInBhcmFtc1wiLFwicmV0dXJuVHlwZVwiXSxUU1Byb3BlcnR5U2lnbmF0dXJlOltcImtleVwiLFwidHlwZUFubm90YXRpb25cIl0sVFNNZXRob2RTaWduYXR1cmU6W1wia2V5XCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1ldGVyc1wiLFwidHlwZUFubm90YXRpb25cIixcInBhcmFtc1wiLFwicmV0dXJuVHlwZVwiXSxUU0luZGV4U2lnbmF0dXJlOltcInBhcmFtZXRlcnNcIixcInR5cGVBbm5vdGF0aW9uXCJdLFRTQW55S2V5d29yZDpbXSxUU0Jvb2xlYW5LZXl3b3JkOltdLFRTQmlnSW50S2V5d29yZDpbXSxUU0ludHJpbnNpY0tleXdvcmQ6W10sVFNOZXZlcktleXdvcmQ6W10sVFNOdWxsS2V5d29yZDpbXSxUU051bWJlcktleXdvcmQ6W10sVFNPYmplY3RLZXl3b3JkOltdLFRTU3RyaW5nS2V5d29yZDpbXSxUU1N5bWJvbEtleXdvcmQ6W10sVFNVbmRlZmluZWRLZXl3b3JkOltdLFRTVW5rbm93bktleXdvcmQ6W10sVFNWb2lkS2V5d29yZDpbXSxUU1RoaXNUeXBlOltdLFRTRnVuY3Rpb25UeXBlOltcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbWV0ZXJzXCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCJdLFRTQ29uc3RydWN0b3JUeXBlOltcInR5cGVQYXJhbWV0ZXJzXCIsXCJwYXJhbWV0ZXJzXCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCJdLFRTVHlwZVJlZmVyZW5jZTpbXCJ0eXBlTmFtZVwiLFwidHlwZVBhcmFtZXRlcnNcIixcInR5cGVBcmd1bWVudHNcIl0sVFNUeXBlUHJlZGljYXRlOltcInBhcmFtZXRlck5hbWVcIixcInR5cGVBbm5vdGF0aW9uXCJdLFRTVHlwZVF1ZXJ5OltcImV4cHJOYW1lXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwidHlwZUFyZ3VtZW50c1wiXSxUU1R5cGVMaXRlcmFsOltcIm1lbWJlcnNcIl0sVFNBcnJheVR5cGU6W1wiZWxlbWVudFR5cGVcIl0sVFNUdXBsZVR5cGU6W1wiZWxlbWVudFR5cGVzXCJdLFRTT3B0aW9uYWxUeXBlOltcInR5cGVBbm5vdGF0aW9uXCJdLFRTUmVzdFR5cGU6W1widHlwZUFubm90YXRpb25cIl0sVFNOYW1lZFR1cGxlTWVtYmVyOltcImxhYmVsXCIsXCJlbGVtZW50VHlwZVwiXSxUU1VuaW9uVHlwZTpbXCJ0eXBlc1wiXSxUU0ludGVyc2VjdGlvblR5cGU6W1widHlwZXNcIl0sVFNDb25kaXRpb25hbFR5cGU6W1wiY2hlY2tUeXBlXCIsXCJleHRlbmRzVHlwZVwiLFwidHJ1ZVR5cGVcIixcImZhbHNlVHlwZVwiXSxUU0luZmVyVHlwZTpbXCJ0eXBlUGFyYW1ldGVyXCJdLFRTUGFyZW50aGVzaXplZFR5cGU6W1widHlwZUFubm90YXRpb25cIl0sVFNUeXBlT3BlcmF0b3I6W1widHlwZUFubm90YXRpb25cIl0sVFNJbmRleGVkQWNjZXNzVHlwZTpbXCJvYmplY3RUeXBlXCIsXCJpbmRleFR5cGVcIl0sVFNNYXBwZWRUeXBlOltcInR5cGVQYXJhbWV0ZXJcIixcIm5hbWVUeXBlXCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxUU1RlbXBsYXRlTGl0ZXJhbFR5cGU6W1wicXVhc2lzXCIsXCJ0eXBlc1wiXSxUU0xpdGVyYWxUeXBlOltcImxpdGVyYWxcIl0sVFNFeHByZXNzaW9uV2l0aFR5cGVBcmd1bWVudHM6W1wiZXhwcmVzc2lvblwiLFwidHlwZVBhcmFtZXRlcnNcIl0sVFNJbnRlcmZhY2VEZWNsYXJhdGlvbjpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcImV4dGVuZHNcIixcImJvZHlcIl0sVFNJbnRlcmZhY2VCb2R5OltcImJvZHlcIl0sVFNUeXBlQWxpYXNEZWNsYXJhdGlvbjpbXCJpZFwiLFwidHlwZVBhcmFtZXRlcnNcIixcInR5cGVBbm5vdGF0aW9uXCJdLFRTSW5zdGFudGlhdGlvbkV4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiLFwidHlwZVBhcmFtZXRlcnNcIixcInR5cGVBcmd1bWVudHNcIl0sVFNBc0V4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiLFwidHlwZUFubm90YXRpb25cIl0sVFNTYXRpc2ZpZXNFeHByZXNzaW9uOltcImV4cHJlc3Npb25cIixcInR5cGVBbm5vdGF0aW9uXCJdLFRTVHlwZUFzc2VydGlvbjpbXCJ0eXBlQW5ub3RhdGlvblwiLFwiZXhwcmVzc2lvblwiXSxUU0VudW1Cb2R5OltcIm1lbWJlcnNcIl0sVFNFbnVtRGVjbGFyYXRpb246W1wiaWRcIixcIm1lbWJlcnNcIl0sVFNFbnVtTWVtYmVyOltcImlkXCIsXCJpbml0aWFsaXplclwiXSxUU01vZHVsZURlY2xhcmF0aW9uOltcImlkXCIsXCJib2R5XCJdLFRTTW9kdWxlQmxvY2s6W1wiYm9keVwiXSxUU0ltcG9ydFR5cGU6W1wiYXJndW1lbnRcIixcIm9wdGlvbnNcIixcInF1YWxpZmllclwiLFwidHlwZVBhcmFtZXRlcnNcIixcInR5cGVBcmd1bWVudHNcIl0sVFNJbXBvcnRFcXVhbHNEZWNsYXJhdGlvbjpbXCJpZFwiLFwibW9kdWxlUmVmZXJlbmNlXCJdLFRTRXh0ZXJuYWxNb2R1bGVSZWZlcmVuY2U6W1wiZXhwcmVzc2lvblwiXSxUU05vbk51bGxFeHByZXNzaW9uOltcImV4cHJlc3Npb25cIl0sVFNFeHBvcnRBc3NpZ25tZW50OltcImV4cHJlc3Npb25cIl0sVFNOYW1lc3BhY2VFeHBvcnREZWNsYXJhdGlvbjpbXCJpZFwiXSxUU1R5cGVBbm5vdGF0aW9uOltcInR5cGVBbm5vdGF0aW9uXCJdLFRTVHlwZVBhcmFtZXRlckluc3RhbnRpYXRpb246W1wicGFyYW1zXCJdLFRTVHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uOltcInBhcmFtc1wiXSxUU1R5cGVQYXJhbWV0ZXI6W1wiY29uc3RyYWludFwiLFwiZGVmYXVsdFwiLFwibmFtZVwiXSxDaGFpbkV4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiXSxFeHBlcmltZW50YWxSZXN0UHJvcGVydHk6W1wiYXJndW1lbnRcIl0sRXhwZXJpbWVudGFsU3ByZWFkUHJvcGVydHk6W1wiYXJndW1lbnRcIl0sTGl0ZXJhbDpbXSxNZXRob2REZWZpbml0aW9uOltcImRlY29yYXRvcnNcIixcImtleVwiLFwidmFsdWVcIl0sUHJpdmF0ZUlkZW50aWZpZXI6W10sUHJvcGVydHk6W1wia2V5XCIsXCJ2YWx1ZVwiXSxQcm9wZXJ0eURlZmluaXRpb246W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwidmFsdWVcIixcInZhcmlhbmNlXCJdLEFjY2Vzc29yUHJvcGVydHk6W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlQW5ub3RhdGlvblwiLFwidmFsdWVcIl0sVFNBYnN0cmFjdEFjY2Vzc29yUHJvcGVydHk6W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxUU0Fic3RyYWN0S2V5d29yZDpbXSxUU0Fic3RyYWN0TWV0aG9kRGVmaW5pdGlvbjpbXCJrZXlcIixcInZhbHVlXCJdLFRTQWJzdHJhY3RQcm9wZXJ0eURlZmluaXRpb246W1wiZGVjb3JhdG9yc1wiLFwia2V5XCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxUU0FzeW5jS2V5d29yZDpbXSxUU0NsYXNzSW1wbGVtZW50czpbXCJleHByZXNzaW9uXCIsXCJ0eXBlQXJndW1lbnRzXCIsXCJ0eXBlUGFyYW1ldGVyc1wiXSxUU0RlY2xhcmVLZXl3b3JkOltdLFRTRW1wdHlCb2R5RnVuY3Rpb25FeHByZXNzaW9uOltcImlkXCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicGFyYW1zXCIsXCJyZXR1cm5UeXBlXCJdLFRTRXhwb3J0S2V5d29yZDpbXSxUU0ludGVyZmFjZUhlcml0YWdlOltcImV4cHJlc3Npb25cIixcInR5cGVBcmd1bWVudHNcIixcInR5cGVQYXJhbWV0ZXJzXCJdLFRTUHJpdmF0ZUtleXdvcmQ6W10sVFNQcm90ZWN0ZWRLZXl3b3JkOltdLFRTUHVibGljS2V5d29yZDpbXSxUU1JlYWRvbmx5S2V5d29yZDpbXSxUU1N0YXRpY0tleXdvcmQ6W10sQXNDb25zdEV4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiXSxBc0V4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiLFwidHlwZUFubm90YXRpb25cIl0sQmlnSW50TGl0ZXJhbFR5cGVBbm5vdGF0aW9uOltdLEJpZ0ludFR5cGVBbm5vdGF0aW9uOltdLENvbXBvbmVudERlY2xhcmF0aW9uOltcImlkXCIsXCJwYXJhbXNcIixcImJvZHlcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJyZW5kZXJzVHlwZVwiXSxDb21wb25lbnRQYXJhbWV0ZXI6W1wibmFtZVwiLFwibG9jYWxcIl0sQ29tcG9uZW50VHlwZUFubm90YXRpb246W1wicGFyYW1zXCIsXCJyZXN0XCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicmVuZGVyc1R5cGVcIl0sQ29tcG9uZW50VHlwZVBhcmFtZXRlcjpbXCJuYW1lXCIsXCJ0eXBlQW5ub3RhdGlvblwiXSxDb25kaXRpb25hbFR5cGVBbm5vdGF0aW9uOltcImNoZWNrVHlwZVwiLFwiZXh0ZW5kc1R5cGVcIixcInRydWVUeXBlXCIsXCJmYWxzZVR5cGVcIl0sRGVjbGFyZUNvbXBvbmVudDpbXCJpZFwiLFwicGFyYW1zXCIsXCJyZXN0XCIsXCJ0eXBlUGFyYW1ldGVyc1wiLFwicmVuZGVyc1R5cGVcIl0sRGVjbGFyZUVudW06W1wiaWRcIixcImJvZHlcIl0sRGVjbGFyZUhvb2s6W1wiaWRcIl0sRGVjbGFyZU5hbWVzcGFjZTpbXCJpZFwiLFwiYm9keVwiXSxFbnVtQmlnSW50Qm9keTpbXCJtZW1iZXJzXCJdLEVudW1CaWdJbnRNZW1iZXI6W1wiaWRcIixcImluaXRcIl0sSG9va0RlY2xhcmF0aW9uOltcImlkXCIsXCJwYXJhbXNcIixcImJvZHlcIixcInR5cGVQYXJhbWV0ZXJzXCIsXCJyZXR1cm5UeXBlXCJdLEhvb2tUeXBlQW5ub3RhdGlvbjpbXCJwYXJhbXNcIixcInJldHVyblR5cGVcIixcInJlc3RcIixcInR5cGVQYXJhbWV0ZXJzXCJdLEluZmVyVHlwZUFubm90YXRpb246W1widHlwZVBhcmFtZXRlclwiXSxLZXlvZlR5cGVBbm5vdGF0aW9uOltcImFyZ3VtZW50XCJdLE9iamVjdFR5cGVNYXBwZWRUeXBlUHJvcGVydHk6W1wia2V5VHBhcmFtXCIsXCJwcm9wVHlwZVwiLFwic291cmNlVHlwZVwiLFwidmFyaWFuY2VcIl0sUXVhbGlmaWVkVHlwZW9mSWRlbnRpZmllcjpbXCJxdWFsaWZpY2F0aW9uXCIsXCJpZFwiXSxUdXBsZVR5cGVMYWJlbGVkRWxlbWVudDpbXCJsYWJlbFwiLFwiZWxlbWVudFR5cGVcIixcInZhcmlhbmNlXCJdLFR1cGxlVHlwZVNwcmVhZEVsZW1lbnQ6W1wibGFiZWxcIixcInR5cGVBbm5vdGF0aW9uXCJdLFR5cGVPcGVyYXRvcjpbXCJ0eXBlQW5ub3RhdGlvblwiXSxUeXBlUHJlZGljYXRlOltcInBhcmFtZXRlck5hbWVcIixcInR5cGVBbm5vdGF0aW9uXCIsXCJhc3NlcnRzXCJdLE5HUm9vdDpbXCJub2RlXCJdLE5HUGlwZUV4cHJlc3Npb246W1wibGVmdFwiLFwicmlnaHRcIixcImFyZ3VtZW50c1wiXSxOR0NoYWluZWRFeHByZXNzaW9uOltcImV4cHJlc3Npb25zXCJdLE5HRW1wdHlFeHByZXNzaW9uOltdLE5HTWljcm9zeW50YXg6W1wiYm9keVwiXSxOR01pY3Jvc3ludGF4S2V5OltdLE5HTWljcm9zeW50YXhFeHByZXNzaW9uOltcImV4cHJlc3Npb25cIixcImFsaWFzXCJdLE5HTWljcm9zeW50YXhLZXllZEV4cHJlc3Npb246W1wia2V5XCIsXCJleHByZXNzaW9uXCJdLE5HTWljcm9zeW50YXhMZXQ6W1wia2V5XCIsXCJ2YWx1ZVwiXSxOR01pY3Jvc3ludGF4QXM6W1wia2V5XCIsXCJhbGlhc1wiXSxKc0V4cHJlc3Npb25Sb290OltcIm5vZGVcIl0sSnNvblJvb3Q6W1wibm9kZVwiXSxUU0pTRG9jQWxsVHlwZTpbXSxUU0pTRG9jVW5rbm93blR5cGU6W10sVFNKU0RvY051bGxhYmxlVHlwZTpbXCJ0eXBlQW5ub3RhdGlvblwiXSxUU0pTRG9jTm9uTnVsbGFibGVUeXBlOltcInR5cGVBbm5vdGF0aW9uXCJdLE5ldmVyVHlwZUFubm90YXRpb246W10sVW5kZWZpbmVkVHlwZUFubm90YXRpb246W10sVW5rbm93blR5cGVBbm5vdGF0aW9uOltdLFNhdGlzZmllc0V4cHJlc3Npb246W1wiZXhwcmVzc2lvblwiLFwidHlwZUFubm90YXRpb25cIl19O3ZhciBicz1IdChRdCksWXQ9YnM7ZnVuY3Rpb24gWGUoZSx0KXtpZighKGUhPT1udWxsJiZ0eXBlb2YgZT09XCJvYmplY3RcIikpcmV0dXJuIGU7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKGxldCBzPTA7czxlLmxlbmd0aDtzKyspZVtzXT1YZShlW3NdLHQpO3JldHVybiBlfWxldCBpPVl0KGUpO2ZvcihsZXQgcz0wO3M8aS5sZW5ndGg7cysrKWVbaVtzXV09WGUoZVtpW3NdXSx0KTtyZXR1cm4gdChlKXx8ZX12YXIgQ2U9WGU7ZnVuY3Rpb24gU3MoZSx0KXtsZXR7cGFyc2VyOmksdGV4dDpzfT10O2lmKGUudHlwZT09PVwiRmlsZVwiJiZlLnByb2dyYW0uaW50ZXJwcmV0ZXIpe2xldHtwcm9ncmFtOntpbnRlcnByZXRlcjpyfSxjb21tZW50czpufT1lO2RlbGV0ZSBlLnByb2dyYW0uaW50ZXJwcmV0ZXIsbi51bnNoaWZ0KHIpfWlmKGk9PT1cImJhYmVsXCIpe2xldCByPW5ldyBTZXQ7ZT1DZShlLG49Pnt2YXIgbzsobz1uLmxlYWRpbmdDb21tZW50cykhPW51bGwmJm8uc29tZSh6dCkmJnIuYWRkKE8obikpfSksZT1DZShlLG49PntpZihuLnR5cGU9PT1cIlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uXCIpe2xldHtleHByZXNzaW9uOm99PW47aWYoby50eXBlPT09XCJUeXBlQ2FzdEV4cHJlc3Npb25cIilyZXR1cm4gby5yYW5nZT1bLi4ubi5yYW5nZV0sbztsZXQgdT1PKG4pO2lmKCFyLmhhcyh1KSlyZXR1cm4gby5leHRyYT17Li4uby5leHRyYSxwYXJlbnRoZXNpemVkOiEwfSxvfX0pfWlmKGU9Q2UoZSxyPT57c3dpdGNoKHIudHlwZSl7Y2FzZVwiTG9naWNhbEV4cHJlc3Npb25cIjppZihadChyKSlyZXR1cm4gemUocik7YnJlYWs7Y2FzZVwiVmFyaWFibGVEZWNsYXJhdGlvblwiOntsZXQgbj1YKCExLHIuZGVjbGFyYXRpb25zLC0xKTtuIT1udWxsJiZuLmluaXQmJnNbSihuKV0hPT1cIjtcIiYmKHIucmFuZ2U9W08ociksSihuKV0pO2JyZWFrfWNhc2VcIlRTUGFyZW50aGVzaXplZFR5cGVcIjpyZXR1cm4gci50eXBlQW5ub3RhdGlvbjtjYXNlXCJUU1R5cGVQYXJhbWV0ZXJcIjppZih0eXBlb2Ygci5uYW1lPT1cInN0cmluZ1wiKXtsZXQgbj1PKHIpO3IubmFtZT17dHlwZTpcIklkZW50aWZpZXJcIixuYW1lOnIubmFtZSxyYW5nZTpbbixuK3IubmFtZS5sZW5ndGhdfX1icmVhaztjYXNlXCJUb3BpY1JlZmVyZW5jZVwiOmUuZXh0cmE9ey4uLmUuZXh0cmEsX19pc1VzaW5nSGFja1BpcGVsaW5lOiEwfTticmVhaztjYXNlXCJUU1VuaW9uVHlwZVwiOmNhc2VcIlRTSW50ZXJzZWN0aW9uVHlwZVwiOmlmKHIudHlwZXMubGVuZ3RoPT09MSlyZXR1cm4gci50eXBlc1swXTticmVha319KSxXdChlLmNvbW1lbnRzKSl7bGV0IHI9WCghMSxlLmNvbW1lbnRzLC0xKTtmb3IobGV0IG49ZS5jb21tZW50cy5sZW5ndGgtMjtuPj0wO24tLSl7bGV0IG89ZS5jb21tZW50c1tuXTtKKG8pPT09TyhyKSYmb2UobykmJm9lKHIpJiZLZShvKSYmS2UocikmJihlLmNvbW1lbnRzLnNwbGljZShuKzEsMSksby52YWx1ZSs9XCIqLy8qXCIrci52YWx1ZSxvLnJhbmdlPVtPKG8pLEoocildKSxyPW99fXJldHVybiBlLnR5cGU9PT1cIlByb2dyYW1cIiYmKGUucmFuZ2U9WzAscy5sZW5ndGhdKSxlfWZ1bmN0aW9uIFp0KGUpe3JldHVybiBlLnR5cGU9PT1cIkxvZ2ljYWxFeHByZXNzaW9uXCImJmUucmlnaHQudHlwZT09PVwiTG9naWNhbEV4cHJlc3Npb25cIiYmZS5vcGVyYXRvcj09PWUucmlnaHQub3BlcmF0b3J9ZnVuY3Rpb24gemUoZSl7cmV0dXJuIFp0KGUpP3plKHt0eXBlOlwiTG9naWNhbEV4cHJlc3Npb25cIixvcGVyYXRvcjplLm9wZXJhdG9yLGxlZnQ6emUoe3R5cGU6XCJMb2dpY2FsRXhwcmVzc2lvblwiLG9wZXJhdG9yOmUub3BlcmF0b3IsbGVmdDplLmxlZnQscmlnaHQ6ZS5yaWdodC5sZWZ0LHJhbmdlOltPKGUubGVmdCksSihlLnJpZ2h0LmxlZnQpXX0pLHJpZ2h0OmUucmlnaHQucmlnaHQscmFuZ2U6W08oZSksSihlKV19KTplfXZhciBfZT1Tczt2YXIgQ3M9KGUsdCxpLHMpPT57aWYoIShlJiZ0PT1udWxsKSlyZXR1cm4gdC5yZXBsYWNlQWxsP3QucmVwbGFjZUFsbChpLHMpOmkuZ2xvYmFsP3QucmVwbGFjZShpLHMpOnQuc3BsaXQoaSkuam9pbihzKX0sZWU9Q3M7dmFyIF9zPS9cXCpcXC8kLyxUcz0vXlxcL1xcKlxcKj8vLGtzPS9eXFxzKihcXC9cXCpcXCo/KC58XFxyP1xcbikqP1xcKlxcLykvLEVzPS8oXnxcXHMrKVxcL1xcLyhbXlxcblxccl0qKS9nLCR0PS9eKFxccj9cXG4pKy8sd3M9Lyg/Ol58XFxyP1xcbikgKihAW15cXG5cXHJdKj8pICpcXHI/XFxuICooPyFbXlxcblxcckBdKlxcL1xcL1teXSopKFteXFxzQF1bXlxcblxcckBdKz8pICpcXHI/XFxuL2csZWk9Lyg/Ol58XFxyP1xcbikgKkAoXFxTKykgKihbXlxcblxccl0qKS9nLEFzPS8oXFxyP1xcbnxeKSAqXFwqID8vZyxQcz1bXTtmdW5jdGlvbiB0aShlKXtsZXQgdD1lLm1hdGNoKGtzKTtyZXR1cm4gdD90WzBdLnRyaW1TdGFydCgpOlwiXCJ9ZnVuY3Rpb24gaWkoZSl7bGV0IHQ9YFxuYDtlPWVlKCExLGUucmVwbGFjZShUcyxcIlwiKS5yZXBsYWNlKF9zLFwiXCIpLEFzLFwiJDFcIik7bGV0IGk9XCJcIjtmb3IoO2khPT1lOylpPWUsZT1lZSghMSxlLHdzLGAke3R9JDEgJDIke3R9YCk7ZT1lLnJlcGxhY2UoJHQsXCJcIikudHJpbUVuZCgpO2xldCBzPU9iamVjdC5jcmVhdGUobnVsbCkscj1lZSghMSxlLGVpLFwiXCIpLnJlcGxhY2UoJHQsXCJcIikudHJpbUVuZCgpLG47Zm9yKDtuPWVpLmV4ZWMoZSk7KXtsZXQgbz1lZSghMSxuWzJdLEVzLFwiXCIpO2lmKHR5cGVvZiBzW25bMV1dPT1cInN0cmluZ1wifHxBcnJheS5pc0FycmF5KHNbblsxXV0pKXtsZXQgdT1zW25bMV1dO3NbblsxXV09Wy4uLlBzLC4uLkFycmF5LmlzQXJyYXkodSk/dTpbdV0sb119ZWxzZSBzW25bMV1dPW99cmV0dXJue2NvbW1lbnRzOnIscHJhZ21hczpzfX1mdW5jdGlvbiBJcyhlKXtpZighZS5zdGFydHNXaXRoKFwiIyFcIikpcmV0dXJuXCJcIjtsZXQgdD1lLmluZGV4T2YoYFxuYCk7cmV0dXJuIHQ9PT0tMT9lOmUuc2xpY2UoMCx0KX12YXIgc2k9SXM7ZnVuY3Rpb24gTnMoZSl7bGV0IHQ9c2koZSk7dCYmKGU9ZS5zbGljZSh0Lmxlbmd0aCsxKSk7bGV0IGk9dGkoZSkse3ByYWdtYXM6cyxjb21tZW50czpyfT1paShpKTtyZXR1cm57c2hlYmFuZzp0LHRleHQ6ZSxwcmFnbWFzOnMsY29tbWVudHM6cn19ZnVuY3Rpb24gcmkoZSl7bGV0e3ByYWdtYXM6dH09TnMoZSk7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LFwicHJldHRpZXJcIil8fE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LFwiZm9ybWF0XCIpfWZ1bmN0aW9uIFZzKGUpe3JldHVybiBlPXR5cGVvZiBlPT1cImZ1bmN0aW9uXCI/e3BhcnNlOmV9OmUse2FzdEZvcm1hdDpcImVzdHJlZVwiLGhhc1ByYWdtYTpyaSxsb2NTdGFydDpPLGxvY0VuZDpKLC4uLmV9fXZhciBUZT1WcztmdW5jdGlvbiBMcyhlKXtsZXR7ZmlsZXBhdGg6dH09ZTtpZih0KXtpZih0PXQudG9Mb3dlckNhc2UoKSx0LmVuZHNXaXRoKFwiLmNqc1wiKXx8dC5lbmRzV2l0aChcIi5jdHNcIikpcmV0dXJuXCJzY3JpcHRcIjtpZih0LmVuZHNXaXRoKFwiLm1qc1wiKXx8dC5lbmRzV2l0aChcIi5tdHNcIikpcmV0dXJuXCJtb2R1bGVcIn19dmFyIGtlPUxzO3ZhciBScz17ZWNtYVZlcnNpb246XCJsYXRlc3RcIixhbGxvd1JldHVybk91dHNpZGVGdW5jdGlvbjohMCxhbGxvd1N1cGVyT3V0c2lkZU1ldGhvZDohMCxsb2NhdGlvbnM6ITAscmFuZ2VzOiEwfTtmdW5jdGlvbiBPcyhlKXtsZXR7bWVzc2FnZTp0LGxvYzppfT1lO2lmKCFpKXJldHVybiBlO2xldHtsaW5lOnMsY29sdW1uOnJ9PWk7cmV0dXJuIGJlKHQucmVwbGFjZSgvIFxcKFxcZCs6XFxkK1xcKSQvdSxcIlwiKSx7bG9jOntzdGFydDp7bGluZTpzLGNvbHVtbjpyKzF9fSxjYXVzZTplfSl9dmFyIGFpLEJzPSgpPT4oYWk/PyhhaT1ULmV4dGVuZCgoMCxuaS5kZWZhdWx0KSgpKSksYWkpO2Z1bmN0aW9uIERzKGUsdCl7bGV0IGk9QnMoKSxzPVtdLHI9W10sbj1pLnBhcnNlKGUsey4uLlJzLHNvdXJjZVR5cGU6dCxhbGxvd0ltcG9ydEV4cG9ydEV2ZXJ5d2hlcmU6dD09PVwibW9kdWxlXCIsb25Db21tZW50OnMsb25Ub2tlbjpyfSk7cmV0dXJuIG4uY29tbWVudHM9cyxuLnRva2Vucz1yLG59ZnVuY3Rpb24gRnMoZSx0PXt9KXtsZXQgaT1rZSh0KSxzPShpP1tpXTpbXCJtb2R1bGVcIixcInNjcmlwdFwiXSkubWFwKG49PigpPT5EcyhlLG4pKSxyO3RyeXtyPVNlKHMpfWNhdGNoKHtlcnJvcnM6W25dfSl7dGhyb3cgT3Mobil9cmV0dXJuIF9lKHIse3RleHQ6ZX0pfXZhciBvaT1UZShGcyk7dmFyIGNpPWV0KEplKCksMSk7dmFyIEU9e0Jvb2xlYW46XCJCb29sZWFuXCIsRU9GOlwiPGVuZD5cIixJZGVudGlmaWVyOlwiSWRlbnRpZmllclwiLFByaXZhdGVJZGVudGlmaWVyOlwiUHJpdmF0ZUlkZW50aWZpZXJcIixLZXl3b3JkOlwiS2V5d29yZFwiLE51bGw6XCJOdWxsXCIsTnVtZXJpYzpcIk51bWVyaWNcIixQdW5jdHVhdG9yOlwiUHVuY3R1YXRvclwiLFN0cmluZzpcIlN0cmluZ1wiLFJlZ3VsYXJFeHByZXNzaW9uOlwiUmVndWxhckV4cHJlc3Npb25cIixUZW1wbGF0ZTpcIlRlbXBsYXRlXCIsSlNYSWRlbnRpZmllcjpcIkpTWElkZW50aWZpZXJcIixKU1hUZXh0OlwiSlNYVGV4dFwifTtmdW5jdGlvbiBqcyhlLHQpe2xldCBpPWVbMF0scz1YKCExLGUsLTEpLHI9e3R5cGU6RS5UZW1wbGF0ZSx2YWx1ZTp0LnNsaWNlKGkuc3RhcnQscy5lbmQpfTtyZXR1cm4gaS5sb2MmJihyLmxvYz17c3RhcnQ6aS5sb2Muc3RhcnQsZW5kOnMubG9jLmVuZH0pLGkucmFuZ2UmJihyLnN0YXJ0PWkucmFuZ2VbMF0sci5lbmQ9cy5yYW5nZVsxXSxyLnJhbmdlPVtyLnN0YXJ0LHIuZW5kXSkscn1mdW5jdGlvbiBIZShlLHQpe3RoaXMuX2Fjb3JuVG9rVHlwZXM9ZSx0aGlzLl90b2tlbnM9W10sdGhpcy5fY3VybHlCcmFjZT1udWxsLHRoaXMuX2NvZGU9dH1IZS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOkhlLHRyYW5zbGF0ZShlLHQpe2xldCBpPWUudHlwZSxzPXRoaXMuX2Fjb3JuVG9rVHlwZXM7aWYoaT09PXMubmFtZSllLnR5cGU9RS5JZGVudGlmaWVyLGUudmFsdWU9PT1cInN0YXRpY1wiJiYoZS50eXBlPUUuS2V5d29yZCksdC5lY21hVmVyc2lvbj41JiYoZS52YWx1ZT09PVwieWllbGRcInx8ZS52YWx1ZT09PVwibGV0XCIpJiYoZS50eXBlPUUuS2V5d29yZCk7ZWxzZSBpZihpPT09cy5wcml2YXRlSWQpZS50eXBlPUUuUHJpdmF0ZUlkZW50aWZpZXI7ZWxzZSBpZihpPT09cy5zZW1pfHxpPT09cy5jb21tYXx8aT09PXMucGFyZW5MfHxpPT09cy5wYXJlblJ8fGk9PT1zLmJyYWNlTHx8aT09PXMuYnJhY2VSfHxpPT09cy5kb3R8fGk9PT1zLmJyYWNrZXRMfHxpPT09cy5jb2xvbnx8aT09PXMucXVlc3Rpb258fGk9PT1zLmJyYWNrZXRSfHxpPT09cy5lbGxpcHNpc3x8aT09PXMuYXJyb3d8fGk9PT1zLmpzeFRhZ1N0YXJ0fHxpPT09cy5pbmNEZWN8fGk9PT1zLnN0YXJzdGFyfHxpPT09cy5qc3hUYWdFbmR8fGk9PT1zLnByZWZpeHx8aT09PXMucXVlc3Rpb25Eb3R8fGkuYmlub3AmJiFpLmtleXdvcmR8fGkuaXNBc3NpZ24pZS50eXBlPUUuUHVuY3R1YXRvcixlLnZhbHVlPXRoaXMuX2NvZGUuc2xpY2UoZS5zdGFydCxlLmVuZCk7ZWxzZSBpZihpPT09cy5qc3hOYW1lKWUudHlwZT1FLkpTWElkZW50aWZpZXI7ZWxzZSBpZihpLmxhYmVsPT09XCJqc3hUZXh0XCJ8fGk9PT1zLmpzeEF0dHJWYWx1ZVRva2VuKWUudHlwZT1FLkpTWFRleHQ7ZWxzZSBpZihpLmtleXdvcmQpaS5rZXl3b3JkPT09XCJ0cnVlXCJ8fGkua2V5d29yZD09PVwiZmFsc2VcIj9lLnR5cGU9RS5Cb29sZWFuOmkua2V5d29yZD09PVwibnVsbFwiP2UudHlwZT1FLk51bGw6ZS50eXBlPUUuS2V5d29yZDtlbHNlIGlmKGk9PT1zLm51bSllLnR5cGU9RS5OdW1lcmljLGUudmFsdWU9dGhpcy5fY29kZS5zbGljZShlLnN0YXJ0LGUuZW5kKTtlbHNlIGlmKGk9PT1zLnN0cmluZyl0LmpzeEF0dHJWYWx1ZVRva2VuPyh0LmpzeEF0dHJWYWx1ZVRva2VuPSExLGUudHlwZT1FLkpTWFRleHQpOmUudHlwZT1FLlN0cmluZyxlLnZhbHVlPXRoaXMuX2NvZGUuc2xpY2UoZS5zdGFydCxlLmVuZCk7ZWxzZSBpZihpPT09cy5yZWdleHApe2UudHlwZT1FLlJlZ3VsYXJFeHByZXNzaW9uO2xldCByPWUudmFsdWU7ZS5yZWdleD17ZmxhZ3M6ci5mbGFncyxwYXR0ZXJuOnIucGF0dGVybn0sZS52YWx1ZT1gLyR7ci5wYXR0ZXJufS8ke3IuZmxhZ3N9YH1yZXR1cm4gZX0sb25Ub2tlbihlLHQpe2xldCBpPXRoaXMuX2Fjb3JuVG9rVHlwZXMscz10LnRva2VucyxyPXRoaXMuX3Rva2VucyxuPSgpPT57cy5wdXNoKGpzKHRoaXMuX3Rva2Vucyx0aGlzLl9jb2RlKSksdGhpcy5fdG9rZW5zPVtdfTtpZihlLnR5cGU9PT1pLmVvZil7dGhpcy5fY3VybHlCcmFjZSYmcy5wdXNoKHRoaXMudHJhbnNsYXRlKHRoaXMuX2N1cmx5QnJhY2UsdCkpO3JldHVybn1pZihlLnR5cGU9PT1pLmJhY2tRdW90ZSl7dGhpcy5fY3VybHlCcmFjZSYmKHMucHVzaCh0aGlzLnRyYW5zbGF0ZSh0aGlzLl9jdXJseUJyYWNlLHQpKSx0aGlzLl9jdXJseUJyYWNlPW51bGwpLHIucHVzaChlKSxyLmxlbmd0aD4xJiZuKCk7cmV0dXJufWlmKGUudHlwZT09PWkuZG9sbGFyQnJhY2VMKXtyLnB1c2goZSksbigpO3JldHVybn1pZihlLnR5cGU9PT1pLmJyYWNlUil7dGhpcy5fY3VybHlCcmFjZSYmcy5wdXNoKHRoaXMudHJhbnNsYXRlKHRoaXMuX2N1cmx5QnJhY2UsdCkpLHRoaXMuX2N1cmx5QnJhY2U9ZTtyZXR1cm59aWYoZS50eXBlPT09aS50ZW1wbGF0ZXx8ZS50eXBlPT09aS5pbnZhbGlkVGVtcGxhdGUpe3RoaXMuX2N1cmx5QnJhY2UmJihyLnB1c2godGhpcy5fY3VybHlCcmFjZSksdGhpcy5fY3VybHlCcmFjZT1udWxsKSxyLnB1c2goZSk7cmV0dXJufXRoaXMuX2N1cmx5QnJhY2UmJihzLnB1c2godGhpcy50cmFuc2xhdGUodGhpcy5fY3VybHlCcmFjZSx0KSksdGhpcy5fY3VybHlCcmFjZT1udWxsKSxzLnB1c2godGhpcy50cmFuc2xhdGUoZSx0KSl9fTt2YXIgdWk9SGU7dmFyIHBpPVszLDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNl07ZnVuY3Rpb24gTXMoKXtyZXR1cm4gWCghMSxwaSwtMSl9ZnVuY3Rpb24gVXMoZT01KXtsZXQgdD1lPT09XCJsYXRlc3RcIj9NcygpOmU7aWYodHlwZW9mIHQhPVwibnVtYmVyXCIpdGhyb3cgbmV3IEVycm9yKGBlY21hVmVyc2lvbiBtdXN0IGJlIGEgbnVtYmVyIG9yIFwibGF0ZXN0XCIuIFJlY2VpdmVkIHZhbHVlIG9mIHR5cGUgJHt0eXBlb2YgZX0gaW5zdGVhZC5gKTtpZih0Pj0yMDE1JiYodC09MjAwOSksIXBpLmluY2x1ZGVzKHQpKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZWNtYVZlcnNpb24uXCIpO3JldHVybiB0fWZ1bmN0aW9uIHFzKGU9XCJzY3JpcHRcIil7aWYoZT09PVwic2NyaXB0XCJ8fGU9PT1cIm1vZHVsZVwiKXJldHVybiBlO2lmKGU9PT1cImNvbW1vbmpzXCIpcmV0dXJuXCJzY3JpcHRcIjt0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNvdXJjZVR5cGUuXCIpfWZ1bmN0aW9uIGhpKGUpe2xldCB0PVVzKGUuZWNtYVZlcnNpb24pLGk9cXMoZS5zb3VyY2VUeXBlKSxzPWUucmFuZ2U9PT0hMCxyPWUubG9jPT09ITA7aWYodCE9PTMmJmUuYWxsb3dSZXNlcnZlZCl0aHJvdyBuZXcgRXJyb3IoXCJgYWxsb3dSZXNlcnZlZGAgaXMgb25seSBzdXBwb3J0ZWQgd2hlbiBlY21hVmVyc2lvbiBpcyAzXCIpO2lmKHR5cGVvZiBlLmFsbG93UmVzZXJ2ZWQ8XCJ1XCImJnR5cGVvZiBlLmFsbG93UmVzZXJ2ZWQhPVwiYm9vbGVhblwiKXRocm93IG5ldyBFcnJvcihcImBhbGxvd1Jlc2VydmVkYCwgd2hlbiBwcmVzZW50LCBtdXN0IGJlIGB0cnVlYCBvciBgZmFsc2VgXCIpO2xldCBuPXQ9PT0zP2UuYWxsb3dSZXNlcnZlZHx8XCJuZXZlclwiOiExLG89ZS5lY21hRmVhdHVyZXN8fHt9LHU9ZS5zb3VyY2VUeXBlPT09XCJjb21tb25qc1wifHwhIW8uZ2xvYmFsUmV0dXJuO2lmKGk9PT1cIm1vZHVsZVwiJiZ0PDYpdGhyb3cgbmV3IEVycm9yKFwic291cmNlVHlwZSAnbW9kdWxlJyBpcyBub3Qgc3VwcG9ydGVkIHdoZW4gZWNtYVZlcnNpb24gPCAyMDE1LiBDb25zaWRlciBhZGRpbmcgYHsgZWNtYVZlcnNpb246IDIwMTUgfWAgdG8gdGhlIHBhcnNlciBvcHRpb25zLlwiKTtyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSxlLHtlY21hVmVyc2lvbjp0LHNvdXJjZVR5cGU6aSxyYW5nZXM6cyxsb2NhdGlvbnM6cixhbGxvd1Jlc2VydmVkOm4sYWxsb3dSZXR1cm5PdXRzaWRlRnVuY3Rpb246dX0pfXZhciB6PVN5bWJvbChcImVzcHJlZSdzIGludGVybmFsIHN0YXRlXCIpLFFlPVN5bWJvbChcImVzcHJlZSdzIGVzcHJpbWFGaW5pc2hOb2RlXCIpO2Z1bmN0aW9uIEdzKGUsdCxpLHMscixuLG8pe2xldCB1O2U/dT1cIkJsb2NrXCI6by5zbGljZShpLGkrMik9PT1cIiMhXCI/dT1cIkhhc2hiYW5nXCI6dT1cIkxpbmVcIjtsZXQgcD17dHlwZTp1LHZhbHVlOnR9O3JldHVybiB0eXBlb2YgaT09XCJudW1iZXJcIiYmKHAuc3RhcnQ9aSxwLmVuZD1zLHAucmFuZ2U9W2ksc10pLHR5cGVvZiByPT1cIm9iamVjdFwiJiYocC5sb2M9e3N0YXJ0OnIsZW5kOm59KSxwfXZhciBZZT0oKT0+ZT0+e2xldCB0PU9iamVjdC5hc3NpZ24oe30sZS5hY29ybi50b2tUeXBlcyk7cmV0dXJuIGUuYWNvcm5Kc3gmJk9iamVjdC5hc3NpZ24odCxlLmFjb3JuSnN4LnRva1R5cGVzKSxjbGFzcyBleHRlbmRzIGV7Y29uc3RydWN0b3IocyxyKXsodHlwZW9mIHMhPVwib2JqZWN0XCJ8fHM9PT1udWxsKSYmKHM9e30pLHR5cGVvZiByIT1cInN0cmluZ1wiJiYhKHIgaW5zdGFuY2VvZiBTdHJpbmcpJiYocj1TdHJpbmcocikpO2xldCBuPXMuc291cmNlVHlwZSxvPWhpKHMpLHU9by5lY21hRmVhdHVyZXN8fHt9LHA9by50b2tlbnM9PT0hMD9uZXcgdWkodCxyKTpudWxsLGQ9e29yaWdpbmFsU291cmNlVHlwZTpufHxvLnNvdXJjZVR5cGUsdG9rZW5zOnA/W106bnVsbCxjb21tZW50czpvLmNvbW1lbnQ9PT0hMD9bXTpudWxsLGltcGxpZWRTdHJpY3Q6dS5pbXBsaWVkU3RyaWN0PT09ITAmJm8uZWNtYVZlcnNpb24+PTUsZWNtYVZlcnNpb246by5lY21hVmVyc2lvbixqc3hBdHRyVmFsdWVUb2tlbjohMSxsYXN0VG9rZW46bnVsbCx0ZW1wbGF0ZUVsZW1lbnRzOltdfTtzdXBlcih7ZWNtYVZlcnNpb246by5lY21hVmVyc2lvbixzb3VyY2VUeXBlOm8uc291cmNlVHlwZSxyYW5nZXM6by5yYW5nZXMsbG9jYXRpb25zOm8ubG9jYXRpb25zLGFsbG93UmVzZXJ2ZWQ6by5hbGxvd1Jlc2VydmVkLGFsbG93UmV0dXJuT3V0c2lkZUZ1bmN0aW9uOm8uYWxsb3dSZXR1cm5PdXRzaWRlRnVuY3Rpb24sb25Ub2tlbihmKXtwJiZwLm9uVG9rZW4oZixkKSxmLnR5cGUhPT10LmVvZiYmKGQubGFzdFRva2VuPWYpfSxvbkNvbW1lbnQoZixDLEIsaCxtLHgpe2lmKGQuY29tbWVudHMpe2xldCBnPUdzKGYsQyxCLGgsbSx4LHIpO2QuY29tbWVudHMucHVzaChnKX19fSxyKSx0aGlzW3pdPWR9dG9rZW5pemUoKXtkbyB0aGlzLm5leHQoKTt3aGlsZSh0aGlzLnR5cGUhPT10LmVvZik7dGhpcy5uZXh0KCk7bGV0IHM9dGhpc1t6XSxyPXMudG9rZW5zO3JldHVybiBzLmNvbW1lbnRzJiYoci5jb21tZW50cz1zLmNvbW1lbnRzKSxyfWZpbmlzaE5vZGUoLi4ucyl7bGV0IHI9c3VwZXIuZmluaXNoTm9kZSguLi5zKTtyZXR1cm4gdGhpc1tRZV0ocil9ZmluaXNoTm9kZUF0KC4uLnMpe2xldCByPXN1cGVyLmZpbmlzaE5vZGVBdCguLi5zKTtyZXR1cm4gdGhpc1tRZV0ocil9cGFyc2UoKXtsZXQgcz10aGlzW3pdLHI9c3VwZXIucGFyc2UoKTtpZihyLnNvdXJjZVR5cGU9cy5vcmlnaW5hbFNvdXJjZVR5cGUscy5jb21tZW50cyYmKHIuY29tbWVudHM9cy5jb21tZW50cykscy50b2tlbnMmJihyLnRva2Vucz1zLnRva2Vucyksci5ib2R5Lmxlbmd0aCl7bGV0W25dPXIuYm9keTtyLnJhbmdlJiYoci5yYW5nZVswXT1uLnJhbmdlWzBdKSxyLmxvYyYmKHIubG9jLnN0YXJ0PW4ubG9jLnN0YXJ0KSxyLnN0YXJ0PW4uc3RhcnR9cmV0dXJuIHMubGFzdFRva2VuJiYoci5yYW5nZSYmKHIucmFuZ2VbMV09cy5sYXN0VG9rZW4ucmFuZ2VbMV0pLHIubG9jJiYoci5sb2MuZW5kPXMubGFzdFRva2VuLmxvYy5lbmQpLHIuZW5kPXMubGFzdFRva2VuLmVuZCksdGhpc1t6XS50ZW1wbGF0ZUVsZW1lbnRzLmZvckVhY2gobj0+e2xldCB1PW4udGFpbD8xOjI7bi5zdGFydCs9LTEsbi5lbmQrPXUsbi5yYW5nZSYmKG4ucmFuZ2VbMF0rPS0xLG4ucmFuZ2VbMV0rPXUpLG4ubG9jJiYobi5sb2Muc3RhcnQuY29sdW1uKz0tMSxuLmxvYy5lbmQuY29sdW1uKz11KX0pLHJ9cGFyc2VUb3BMZXZlbChzKXtyZXR1cm4gdGhpc1t6XS5pbXBsaWVkU3RyaWN0JiYodGhpcy5zdHJpY3Q9ITApLHN1cGVyLnBhcnNlVG9wTGV2ZWwocyl9cmFpc2UocyxyKXtsZXQgbj1lLmFjb3JuLmdldExpbmVJbmZvKHRoaXMuaW5wdXQscyksbz1uZXcgU3ludGF4RXJyb3Iocik7dGhyb3cgby5pbmRleD1zLG8ubGluZU51bWJlcj1uLmxpbmUsby5jb2x1bW49bi5jb2x1bW4rMSxvfXJhaXNlUmVjb3ZlcmFibGUocyxyKXt0aGlzLnJhaXNlKHMscil9dW5leHBlY3RlZChzKXtsZXQgcj1cIlVuZXhwZWN0ZWQgdG9rZW5cIjtpZihzIT1udWxsKXtpZih0aGlzLnBvcz1zLHRoaXMub3B0aW9ucy5sb2NhdGlvbnMpZm9yKDt0aGlzLnBvczx0aGlzLmxpbmVTdGFydDspdGhpcy5saW5lU3RhcnQ9dGhpcy5pbnB1dC5sYXN0SW5kZXhPZihgXG5gLHRoaXMubGluZVN0YXJ0LTIpKzEsLS10aGlzLmN1ckxpbmU7dGhpcy5uZXh0VG9rZW4oKX10aGlzLmVuZD50aGlzLnN0YXJ0JiYocis9YCAke3RoaXMuaW5wdXQuc2xpY2UodGhpcy5zdGFydCx0aGlzLmVuZCl9YCksdGhpcy5yYWlzZSh0aGlzLnN0YXJ0LHIpfWpzeF9yZWFkU3RyaW5nKHMpe2xldCByPXN1cGVyLmpzeF9yZWFkU3RyaW5nKHMpO3JldHVybiB0aGlzLnR5cGU9PT10LnN0cmluZyYmKHRoaXNbel0uanN4QXR0clZhbHVlVG9rZW49ITApLHJ9W1FlXShzKXtyZXR1cm4gcy50eXBlPT09XCJUZW1wbGF0ZUVsZW1lbnRcIiYmdGhpc1t6XS50ZW1wbGF0ZUVsZW1lbnRzLnB1c2gocykscy50eXBlLmluY2x1ZGVzKFwiRnVuY3Rpb25cIikmJiFzLmdlbmVyYXRvciYmKHMuZ2VuZXJhdG9yPSExKSxzfX19O3ZhciBKcz17X3JlZ3VsYXI6bnVsbCxfanN4Om51bGwsZ2V0IHJlZ3VsYXIoKXtyZXR1cm4gdGhpcy5fcmVndWxhcj09PW51bGwmJih0aGlzLl9yZWd1bGFyPVQuZXh0ZW5kKFllKCkpKSx0aGlzLl9yZWd1bGFyfSxnZXQganN4KCl7cmV0dXJuIHRoaXMuX2pzeD09PW51bGwmJih0aGlzLl9qc3g9VC5leHRlbmQoKDAsY2kuZGVmYXVsdCkoKSxZZSgpKSksdGhpcy5fanN4fSxnZXQoZSl7cmV0dXJuISEoZSYmZS5lY21hRmVhdHVyZXMmJmUuZWNtYUZlYXR1cmVzLmpzeCk/dGhpcy5qc3g6dGhpcy5yZWd1bGFyfX07ZnVuY3Rpb24gbGkoZSx0KXtsZXQgaT1Kcy5nZXQodCk7cmV0dXJuIG5ldyBpKHQsZSkucGFyc2UoKX12YXIgS3M9e2VjbWFWZXJzaW9uOlwibGF0ZXN0XCIscmFuZ2U6ITAsbG9jOiEwLGNvbW1lbnQ6ITAsdG9rZW5zOiEwLHNvdXJjZVR5cGU6XCJtb2R1bGVcIixlY21hRmVhdHVyZXM6e2pzeDohMCxnbG9iYWxSZXR1cm46ITAsaW1wbGllZFN0cmljdDohMX19O2Z1bmN0aW9uIFdzKGUpe2xldHttZXNzYWdlOnQsbGluZU51bWJlcjppLGNvbHVtbjpzfT1lO3JldHVybiB0eXBlb2YgaSE9XCJudW1iZXJcIj9lOmJlKHQse2xvYzp7c3RhcnQ6e2xpbmU6aSxjb2x1bW46c319LGNhdXNlOmV9KX1mdW5jdGlvbiBYcyhlLHQ9e30pe2xldCBpPWtlKHQpLHM9KGk/W2ldOltcIm1vZHVsZVwiLFwic2NyaXB0XCJdKS5tYXAobj0+KCk9PmxpKGUsey4uLktzLHNvdXJjZVR5cGU6bn0pKSxyO3RyeXtyPVNlKHMpfWNhdGNoKHtlcnJvcnM6W25dfSl7dGhyb3cgV3Mobil9cmV0dXJuIF9lKHIse3RleHQ6ZX0pfXZhciBmaT1UZShYcyk7dmFyIHpzPXthY29ybjpvaSxlc3ByZWU6Zml9O3ZhciBDYT1aZTtleHBvcnR7Q2EgYXMgZGVmYXVsdCx6cyBhcyBwYXJzZXJzfTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLEtBQUcsT0FBTztBQUFPLElBQUksS0FBRyxPQUFPO0FBQWUsSUFBSSxLQUFHLE9BQU87QUFBeUIsSUFBSSxLQUFHLE9BQU87QUFBb0IsSUFBSSxLQUFHLE9BQU8sZ0JBQWUsS0FBRyxPQUFPLFVBQVU7QUFBZSxJQUFJLEtBQUcsQ0FBQyxHQUFFLE1BQUksT0FBSyxLQUFHLEdBQUcsSUFBRSxFQUFDLFNBQVEsQ0FBQSxFQUFFLEdBQUcsU0FBUSxDQUFDLEdBQUUsRUFBRSxVQUFTLEtBQUcsQ0FBQyxHQUFFLE1BQUk7QUFBQyxXQUFRLEtBQUssRUFBRSxJQUFHLEdBQUUsR0FBRSxFQUFDLEtBQUksRUFBRSxDQUFDLEdBQUUsWUFBVyxLQUFFLENBQUM7QUFBQyxHQUFFLEtBQUcsQ0FBQyxHQUFFLEdBQUUsR0FBRSxNQUFJO0FBQUMsTUFBRyxLQUFHLE9BQU8sS0FBRyxZQUFVLE9BQU8sS0FBRyxXQUFXLFVBQVEsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFDLEdBQUcsS0FBSyxHQUFFLENBQUMsS0FBRyxNQUFJLEtBQUcsR0FBRyxHQUFFLEdBQUUsRUFBQyxLQUFJLE1BQUksRUFBRSxDQUFDLEdBQUUsWUFBVyxFQUFFLElBQUUsR0FBRyxHQUFFLENBQUMsTUFBSSxFQUFFLFdBQVUsQ0FBQztBQUFFLFNBQU87QUFBQztBQUFFLElBQUksS0FBRyxDQUFDLEdBQUUsR0FBRSxPQUFLLElBQUUsS0FBRyxPQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBRSxJQUFHLEdBQXdCLEdBQUcsR0FBRSxXQUFVLEVBQUMsT0FBTSxHQUFFLFlBQVcsS0FBRSxDQUFDLEdBQUksQ0FBQztBQUFHLElBQUksS0FBRyxHQUFHLENBQUMsSUFBRyxPQUFLO0FBQUMsS0FBRyxVQUFRLENBQUE7QUFBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLEdBQUcsQ0FBQyxJQUFHLE9BQUs7QUFBYyxNQUFJLEtBQUcsR0FBSSxHQUFDLEtBQUcsaUJBQWdCLEtBQUcsU0FBUSxLQUFHLG9CQUFJO0FBQVEsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFFLEVBQUUsT0FBTyxTQUFPO0FBQUUsUUFBSSxJQUFFLEdBQUcsSUFBSSxDQUFDO0FBQUUsUUFBRyxDQUFDLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxVQUFTLElBQUUsRUFBRSxZQUFXLElBQUUsRUFBRSxXQUFVLElBQUUsSUFBSSxFQUFFLFFBQU8sS0FBRSxHQUFFLElBQUUsSUFBSSxFQUFFLFNBQVEsS0FBRSxHQUFFLElBQUUsSUFBSSxFQUFFLGtCQUFpQixNQUFHLElBQUUsR0FBRSxJQUFFLEVBQUMsU0FBUSxHQUFFLFNBQVEsR0FBRSxTQUFRLEVBQUMsR0FBRSxJQUFFLEVBQUMsU0FBUSxJQUFJLEVBQUUsU0FBUyxHQUFFLFNBQVEsSUFBSSxFQUFFLFdBQVUsRUFBQyxZQUFXLEtBQUUsQ0FBQyxHQUFFLGFBQVksSUFBSSxFQUFFLGVBQWMsRUFBQyxZQUFXLEtBQUUsQ0FBQyxHQUFFLFdBQVUsSUFBSSxFQUFFLFdBQVcsRUFBQztBQUFFLFFBQUUsWUFBWSxnQkFBYyxXQUFVO0FBQUMsYUFBSyxRQUFRLEtBQUssQ0FBQyxHQUFFLEtBQUssUUFBUSxLQUFLLENBQUMsR0FBRSxLQUFLLGNBQVk7QUFBQSxNQUFFLEdBQUUsRUFBRSxVQUFVLGdCQUFjLFNBQVMsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLLFFBQVEsSUFBRztBQUFHLGNBQUksS0FBRyxNQUFJLEVBQUUsU0FBTyxNQUFJLEtBQUcsS0FBSyxRQUFRLElBQUssR0FBQyxLQUFLLGNBQVksS0FBSyxXQUFZLE1BQUcsS0FBRyxLQUFLLGNBQVk7QUFBQSxNQUFFLEdBQUUsSUFBRSxFQUFDLGFBQVksR0FBRSxVQUFTLEVBQUMsR0FBRSxHQUFHLElBQUksR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUMsV0FBUyxHQUFHLEdBQUU7QUFBQyxRQUFHLENBQUMsRUFBRSxRQUFPO0FBQUUsUUFBRyxFQUFFLFNBQU8sZ0JBQWdCLFFBQU8sRUFBRTtBQUFLLFFBQUcsRUFBRSxTQUFPLG9CQUFvQixRQUFPLEVBQUUsVUFBVSxPQUFLLE1BQUksRUFBRSxLQUFLO0FBQUssUUFBRyxFQUFFLFNBQU8sc0JBQXNCLFFBQU8sR0FBRyxFQUFFLE1BQU0sSUFBRSxNQUFJLEdBQUcsRUFBRSxRQUFRO0FBQUEsRUFBQztBQUFDLEtBQUcsVUFBUSxTQUFTLEdBQUU7QUFBQyxXQUFPLElBQUUsS0FBRyxDQUFFLEdBQUMsU0FBUyxHQUFFO0FBQUMsYUFBTyxHQUFHLEVBQUMsaUJBQWdCLEVBQUUsb0JBQWtCLE9BQUcsd0JBQXVCLENBQUMsQ0FBQyxFQUFFLHVCQUFzQixHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFFLFNBQU8sZUFBZSxHQUFHLFNBQVEsWUFBVyxFQUFDLEtBQUksV0FBVTtBQUFDLFdBQU8sR0FBRyxNQUFNLEVBQUU7QUFBQSxFQUFRLEdBQUUsY0FBYSxNQUFHLFlBQVcsS0FBRSxDQUFDO0FBQUUsV0FBUyxHQUFHLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLFNBQU8sUUFBTyxJQUFFLEdBQUcsQ0FBQyxHQUFFLElBQUUsRUFBRSxVQUFTLElBQUUsRUFBRSxVQUFTLElBQUUsRUFBRSxhQUFZLElBQUUsRUFBRSxZQUFZLFNBQVEsSUFBRSxFQUFFLFlBQVksU0FBUSxJQUFFLEVBQUUsWUFBWSxTQUFRLElBQUUsRUFBRSxXQUFVLElBQUUsRUFBRSxtQkFBa0IsSUFBRSxFQUFFO0FBQWlCLFdBQU8sY0FBYyxFQUFDO0FBQUEsTUFBQyxXQUFXLFdBQVU7QUFBQyxlQUFPO0FBQUEsTUFBQztBQUFBLE1BQUMsZ0JBQWU7QUFBQyxZQUFJLElBQUUsSUFBRyxJQUFFLEtBQUs7QUFBSSxtQkFBTztBQUFDLGVBQUssT0FBSyxLQUFLLE1BQU0sVUFBUSxLQUFLLE1BQU0sS0FBSyxPQUFNLDJCQUEyQjtBQUFFLGNBQUksSUFBRSxLQUFLLE1BQU0sV0FBVyxLQUFLLEdBQUc7QUFBRSxrQkFBTyxHQUFDO0FBQUEsWUFBRSxLQUFLO0FBQUEsWUFBRyxLQUFLO0FBQUkscUJBQU8sS0FBSyxRQUFNLEtBQUssUUFBTSxNQUFJLE1BQUksS0FBSyxlQUFhLEVBQUUsS0FBSyxLQUFJLEtBQUssWUFBWSxFQUFFLFdBQVcsS0FBRyxLQUFLLGlCQUFpQixDQUFDLEtBQUcsS0FBRyxLQUFLLE1BQU0sTUFBTSxHQUFFLEtBQUssR0FBRyxHQUFFLEtBQUssWUFBWSxFQUFFLFNBQVEsQ0FBQztBQUFBLFlBQUcsS0FBSztBQUFHLG1CQUFHLEtBQUssTUFBTSxNQUFNLEdBQUUsS0FBSyxHQUFHLEdBQUUsS0FBRyxLQUFLLGVBQWMsR0FBRyxJQUFFLEtBQUs7QUFBSTtBQUFBLFlBQU0sS0FBSztBQUFBLFlBQUcsS0FBSztBQUFJLG1CQUFLLE1BQU0sS0FBSyxLQUFJLHVCQUFxQixLQUFLLE1BQU0sS0FBSyxHQUFHLElBQUUsdUJBQXFCLE1BQUksS0FBRyxTQUFPLGNBQVksYUFBVyxLQUFLLE1BQU0sS0FBSyxHQUFHLElBQUUsTUFBTTtBQUFBLFlBQUU7QUFBUSxnQkFBRSxDQUFDLEtBQUcsS0FBRyxLQUFLLE1BQU0sTUFBTSxHQUFFLEtBQUssR0FBRyxHQUFFLEtBQUcsS0FBSyxnQkFBZ0IsSUFBRSxHQUFFLElBQUUsS0FBSyxPQUFLLEVBQUUsS0FBSztBQUFBLFVBQUc7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBLE1BQUMsZ0JBQWdCLEdBQUU7QUFBQyxZQUFJLElBQUUsS0FBSyxNQUFNLFdBQVcsS0FBSyxHQUFHLEdBQUU7QUFBRSxlQUFNLEVBQUUsS0FBSyxLQUFJLE1BQUksTUFBSSxLQUFLLE1BQU0sV0FBVyxLQUFLLEdBQUcsTUFBSSxNQUFJLEVBQUUsS0FBSyxLQUFJLElBQUUsSUFBRTtBQUFBLElBQy84RjtBQUFBLEtBQ0MsSUFBRSxPQUFPLGFBQWEsQ0FBQyxHQUFFLEtBQUssUUFBUSxjQUFZLEVBQUUsS0FBSyxTQUFRLEtBQUssWUFBVSxLQUFLLE1BQUs7QUFBQSxNQUFDO0FBQUEsTUFBQyxlQUFlLEdBQUU7QUFBQyxZQUFJLElBQUUsSUFBRyxJQUFFLEVBQUUsS0FBSztBQUFJLG1CQUFPO0FBQUMsZUFBSyxPQUFLLEtBQUssTUFBTSxVQUFRLEtBQUssTUFBTSxLQUFLLE9BQU0sOEJBQThCO0FBQUUsY0FBSSxJQUFFLEtBQUssTUFBTSxXQUFXLEtBQUssR0FBRztBQUFFLGNBQUcsTUFBSSxFQUFFO0FBQU0sZ0JBQUksTUFBSSxLQUFHLEtBQUssTUFBTSxNQUFNLEdBQUUsS0FBSyxHQUFHLEdBQUUsS0FBRyxLQUFLLGVBQWdCLEdBQUMsSUFBRSxLQUFLLE9BQUssRUFBRSxDQUFDLEtBQUcsS0FBRyxLQUFLLE1BQU0sTUFBTSxHQUFFLEtBQUssR0FBRyxHQUFFLEtBQUcsS0FBSyxnQkFBZ0IsS0FBRSxHQUFFLElBQUUsS0FBSyxPQUFLLEVBQUUsS0FBSztBQUFBLFFBQUc7QUFBQyxlQUFPLEtBQUcsS0FBSyxNQUFNLE1BQU0sR0FBRSxLQUFLLEtBQUssR0FBRSxLQUFLLFlBQVksRUFBRSxRQUFPLENBQUM7QUFBQSxNQUFDO0FBQUEsTUFBQyxpQkFBZ0I7QUFBQyxZQUFJLElBQUUsSUFBRyxJQUFFLEdBQUUsR0FBRSxJQUFFLEtBQUssTUFBTSxLQUFLLEdBQUc7QUFBRSxjQUFJLE9BQUssS0FBSyxNQUFNLEtBQUssS0FBSSxxQ0FBcUM7QUFBRSxZQUFJLElBQUUsRUFBRSxLQUFLO0FBQUksZUFBSyxLQUFLLE1BQUksS0FBSyxNQUFNLFVBQVEsTUFBSSxNQUFJO0FBQUMsY0FBRyxJQUFFLEtBQUssTUFBTSxLQUFLLEtBQUssR0FBRSxNQUFJLEtBQUk7QUFBQyxjQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsQ0FBQyxNQUFJLE9BQUssSUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFFLEdBQUcsS0FBSyxDQUFDLE1BQUksSUFBRSxPQUFPLGFBQWEsU0FBUyxHQUFFLEVBQUUsQ0FBQyxPQUFLLElBQUUsRUFBRSxPQUFPLENBQUMsR0FBRSxHQUFHLEtBQUssQ0FBQyxNQUFJLElBQUUsT0FBTyxhQUFhLFNBQVMsR0FBRSxFQUFFLENBQUMsTUFBSSxJQUFFLEdBQUcsQ0FBQztBQUFFO0FBQUEsVUFBSztBQUFDLGVBQUc7QUFBQSxRQUFDO0FBQUMsZUFBTyxNQUFJLEtBQUssTUFBSSxHQUFFO0FBQUEsTUFBSTtBQUFBLE1BQUMsZUFBYztBQUFDLFlBQUksR0FBRSxJQUFFLEtBQUs7QUFBSTtBQUFHLGNBQUUsS0FBSyxNQUFNLFdBQVcsRUFBRSxLQUFLLEdBQUc7QUFBQSxlQUFRLEVBQUUsQ0FBQyxLQUFHLE1BQUk7QUFBSSxlQUFPLEtBQUssWUFBWSxFQUFFLFNBQVEsS0FBSyxNQUFNLE1BQU0sR0FBRSxLQUFLLEdBQUcsQ0FBQztBQUFBLE1BQUM7QUFBQSxNQUFDLHNCQUFxQjtBQUFDLFlBQUksSUFBRSxLQUFLLFVBQVM7QUFBRyxlQUFPLEtBQUssU0FBTyxFQUFFLFVBQVEsRUFBRSxPQUFLLEtBQUssUUFBTSxLQUFLLEtBQUssVUFBUSxFQUFFLE9BQUssS0FBSyxLQUFLLFVBQVEsS0FBSyxXQUFVLEdBQUcsS0FBSyxLQUFNLEdBQUMsS0FBSyxXQUFXLEdBQUUsZUFBZTtBQUFBLE1BQUM7QUFBQSxNQUFDLDBCQUF5QjtBQUFDLFlBQUksSUFBRSxLQUFLLE9BQU0sSUFBRSxLQUFLLFVBQVMsSUFBRSxLQUFLLG9CQUFxQjtBQUFDLFlBQUcsQ0FBQyxFQUFFLG1CQUFpQixDQUFDLEtBQUssSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFPO0FBQUUsWUFBSSxJQUFFLEtBQUssWUFBWSxHQUFFLENBQUM7QUFBRSxlQUFPLEVBQUUsWUFBVSxHQUFFLEVBQUUsT0FBSyxLQUFLLG9CQUFtQixHQUFHLEtBQUssV0FBVyxHQUFFLG1CQUFtQjtBQUFBLE1BQUM7QUFBQSxNQUFDLHVCQUFzQjtBQUFDLFlBQUcsS0FBSyxTQUFPLEVBQUUsVUFBVSxRQUFNO0FBQUcsWUFBSSxJQUFFLEtBQUssT0FBTSxJQUFFLEtBQUssVUFBUyxJQUFFLEtBQUssd0JBQXlCO0FBQUMsYUFBSSxLQUFLLFNBQU8sRUFBRSxPQUFLLEVBQUUsU0FBTyx1QkFBcUIsQ0FBQyxFQUFFLDBCQUF3QixLQUFLLFdBQVksR0FBQyxLQUFLLElBQUksRUFBRSxHQUFHLEtBQUc7QUFBQyxjQUFJLElBQUUsS0FBSyxZQUFZLEdBQUUsQ0FBQztBQUFFLFlBQUUsU0FBTyxHQUFFLEVBQUUsV0FBUyxLQUFLLG9CQUFtQixHQUFHLElBQUUsS0FBSyxXQUFXLEdBQUUscUJBQXFCO0FBQUEsUUFBQztBQUFDLGVBQU87QUFBQSxNQUFDO0FBQUEsTUFBQywwQkFBeUI7QUFBQyxnQkFBTyxLQUFLLE1BQU07QUFBQSxVQUFBLEtBQUssRUFBRTtBQUFPLGdCQUFJLElBQUUsS0FBSyw2QkFBNEI7QUFBRyxtQkFBTyxFQUFFLFdBQVcsU0FBTyx3QkFBc0IsS0FBSyxNQUFNLEVBQUUsT0FBTSw2REFBNkQsR0FBRTtBQUFBLFVBQUUsS0FBSyxFQUFFO0FBQUEsVUFBWSxLQUFLLEVBQUU7QUFBTyxtQkFBTyxLQUFLO1VBQWdCO0FBQVEsaUJBQUssTUFBTSxLQUFLLE9BQU0sK0RBQStEO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBQSxNQUFDLDJCQUEwQjtBQUFDLFlBQUksSUFBRSxLQUFLLFlBQVksS0FBSyxZQUFXLEtBQUssYUFBYTtBQUFFLGVBQU8sS0FBSyxhQUFhLEdBQUUsc0JBQXFCLEtBQUssT0FBTSxLQUFLLFFBQVE7QUFBQSxNQUFDO0FBQUEsTUFBQywrQkFBOEI7QUFBQyxZQUFJLElBQUUsS0FBSyxVQUFTO0FBQUcsZUFBTyxLQUFLLEtBQUksR0FBRyxFQUFFLGFBQVcsS0FBSyxTQUFPLEVBQUUsU0FBTyxLQUFLLDZCQUEyQixLQUFLLGdCQUFlLEdBQUcsS0FBSyxPQUFPLEVBQUUsTUFBTSxHQUFFLEtBQUssV0FBVyxHQUFFLHdCQUF3QjtBQUFBLE1BQUM7QUFBQSxNQUFDLHFCQUFvQjtBQUFDLFlBQUksSUFBRSxLQUFLLFVBQVc7QUFBQyxlQUFPLEtBQUssSUFBSSxFQUFFLE1BQU0sS0FBRyxLQUFLLE9BQU8sRUFBRSxRQUFRLEdBQUUsRUFBRSxXQUFTLEtBQUssaUJBQWdCLEdBQUcsS0FBSyxPQUFPLEVBQUUsTUFBTSxHQUFFLEtBQUssV0FBVyxHQUFFLG9CQUFvQixNQUFJLEVBQUUsT0FBSyxLQUFLLDJCQUEwQixFQUFFLFFBQU0sS0FBSyxJQUFJLEVBQUUsRUFBRSxJQUFFLEtBQUssd0JBQXVCLElBQUcsTUFBSyxLQUFLLFdBQVcsR0FBRSxjQUFjO0FBQUEsTUFBRTtBQUFBLE1BQUMsMEJBQTBCLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLLFlBQVksR0FBRSxDQUFDO0FBQUUsVUFBRSxhQUFXLENBQUU7QUFBQyxZQUFJLElBQUUsS0FBSyxxQkFBc0I7QUFBQyxhQUFJLE1BQUksRUFBRSxPQUFLLElBQUcsS0FBSyxTQUFPLEVBQUUsU0FBTyxLQUFLLFNBQU8sRUFBRSxZQUFXLEdBQUUsV0FBVyxLQUFLLEtBQUssbUJBQWtCLENBQUU7QUFBRSxlQUFPLEVBQUUsY0FBWSxLQUFLLElBQUksRUFBRSxLQUFLLEdBQUUsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFFLEtBQUssV0FBVyxHQUFFLElBQUUsc0JBQW9CLG9CQUFvQjtBQUFBLE1BQUM7QUFBQSxNQUFDLDBCQUEwQixHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsS0FBSyxZQUFZLEdBQUUsQ0FBQyxHQUFFLElBQUUsS0FBSyxxQkFBc0I7QUFBQyxlQUFPLE1BQUksRUFBRSxPQUFLLElBQUcsS0FBSyxPQUFPLEVBQUUsU0FBUyxHQUFFLEtBQUssV0FBVyxHQUFFLElBQUUsc0JBQW9CLG9CQUFvQjtBQUFBLE1BQUM7QUFBQSxNQUFDLG1CQUFtQixHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsS0FBSyxZQUFZLEdBQUUsQ0FBQyxHQUFFLElBQUUsQ0FBQSxHQUFHLElBQUUsS0FBSywwQkFBMEIsR0FBRSxDQUFDLEdBQUUsS0FBRztBQUFLLFlBQUcsQ0FBQyxFQUFFLGFBQVk7QUFBQyxZQUFFLFdBQU8sU0FBTyxLQUFLO1lBQU0sS0FBSyxFQUFFO0FBQVksa0JBQUcsSUFBRSxLQUFLLE9BQU0sSUFBRSxLQUFLLFVBQVMsS0FBSyxRQUFPLEtBQUssSUFBSSxFQUFFLEtBQUssR0FBRTtBQUFDLHFCQUFHLEtBQUssMEJBQTBCLEdBQUUsQ0FBQztBQUFFLHNCQUFNO0FBQUEsY0FBQztBQUFDLGdCQUFFLEtBQUssS0FBSyxtQkFBbUIsR0FBRSxDQUFDLENBQUM7QUFBRTtBQUFBLFlBQU0sS0FBSyxFQUFFO0FBQVEsZ0JBQUUsS0FBSyxLQUFLLGNBQWEsQ0FBRTtBQUFFO0FBQUEsWUFBTSxLQUFLLEVBQUU7QUFBTyxnQkFBRSxLQUFLLEtBQUssNkJBQTRCLENBQUU7QUFBRTtBQUFBLFlBQU07QUFBUSxtQkFBSyxXQUFVO0FBQUEsVUFBRTtBQUFDLGFBQUcsR0FBRyxJQUFJLE1BQUksR0FBRyxFQUFFLElBQUksS0FBRyxLQUFLLE1BQU0sR0FBRyxPQUFNLGlEQUErQyxHQUFHLEVBQUUsSUFBSSxJQUFFLEdBQUc7QUFBQSxRQUFDO0FBQUMsWUFBSSxLQUFHLEVBQUUsT0FBSyxZQUFVO0FBQVcsZUFBTyxFQUFFLFlBQVUsRUFBRSxJQUFFLEdBQUUsRUFBRSxZQUFVLEVBQUUsSUFBRSxJQUFHLEVBQUUsV0FBUyxHQUFFLEtBQUssU0FBTyxFQUFFLGNBQVksS0FBSyxVQUFRLE9BQUssS0FBSyxNQUFNLEtBQUssT0FBTSwyREFBMkQsR0FBRSxLQUFLLFdBQVcsR0FBRSxRQUFNLEVBQUU7QUFBQSxNQUFDO0FBQUEsTUFBQyxnQkFBZTtBQUFDLFlBQUksSUFBRSxLQUFLLGFBQWEsS0FBSyxLQUFLO0FBQUUsZUFBTyxFQUFFLE9BQUssV0FBVTtBQUFBLE1BQUM7QUFBQSxNQUFDLG1CQUFrQjtBQUFDLFlBQUksSUFBRSxLQUFLLE9BQU0sSUFBRSxLQUFLO0FBQVMsZUFBTyxLQUFLLEtBQUksR0FBRyxLQUFLLG1CQUFtQixHQUFFLENBQUM7QUFBQSxNQUFDO0FBQUEsTUFBQyxjQUFjLEdBQUU7QUFBQyxlQUFPLEtBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxjQUFlLElBQUMsS0FBSyxTQUFPLEVBQUUsY0FBWSxLQUFLLHFCQUFtQixNQUFNLGNBQWMsQ0FBQztBQUFBLE1BQUM7QUFBQSxNQUFDLFVBQVUsR0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLLFdBQVU7QUFBRyxZQUFHLE1BQUksRUFBRSxRQUFPLEtBQUssY0FBYTtBQUFHLFlBQUcsTUFBSSxLQUFHLE1BQUksR0FBRTtBQUFDLGNBQUcsRUFBRSxDQUFDLEVBQUUsUUFBTyxLQUFLLGFBQVk7QUFBRyxjQUFHLEtBQUcsR0FBRyxRQUFNLEVBQUUsS0FBSyxLQUFJLEtBQUssWUFBWSxFQUFFLFNBQVM7QUFBRSxlQUFJLE1BQUksTUFBSSxNQUFJLE9BQUssS0FBRyxFQUFFLFFBQU8sS0FBSyxlQUFlLENBQUM7QUFBQSxRQUFDO0FBQUMsZUFBTyxNQUFJLE1BQUksS0FBSyxlQUFhLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBSSxDQUFDLE1BQUksTUFBSSxFQUFFLEtBQUssS0FBSSxLQUFLLFlBQVksRUFBRSxXQUFXLEtBQUcsTUFBTSxVQUFVLENBQUM7QUFBQSxNQUFDO0FBQUEsTUFBQyxjQUFjLEdBQUU7QUFBQyxZQUFHLEtBQUssUUFBTSxFQUFFLFFBQU87QUFBQyxjQUFJLElBQUUsS0FBSyxXQUFVO0FBQUcsZUFBRyxJQUFFLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxJQUFFLEtBQUcsSUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sSUFBRSxNQUFNLGNBQWMsQ0FBQyxHQUFFLEtBQUssY0FBWTtBQUFBLFFBQUUsV0FBUyxLQUFLLFNBQU8sRUFBRSxTQUFPLE1BQUksRUFBRSxZQUFZLE1BQUssUUFBUSxVQUFRLEdBQUUsS0FBSyxRQUFRLEtBQUssQ0FBQyxHQUFFLEtBQUssY0FBWTtBQUFBLFlBQVEsUUFBTyxNQUFNLGNBQWMsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLENBQUM7QUFBRSxJQUFJLEtBQUcsQ0FBQTtBQUFHLEdBQUcsSUFBRyxFQUFDLFNBQVEsTUFBSSxHQUFFLENBQUM7QUFBRSxJQUFJLEtBQUcsQ0FBQyxLQUFJLEdBQUUsS0FBSSxHQUFFLEtBQUksR0FBRSxLQUFJLEdBQUUsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxLQUFJLEdBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEtBQUksR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxLQUFJLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEtBQUksSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLEtBQUksSUFBRyxLQUFJLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsS0FBSSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsS0FBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEtBQUksR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLE1BQUssR0FBRSxHQUFFLElBQUcsT0FBTSxJQUFHLE1BQUssR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsS0FBSSxHQUFFLEtBQUksR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsT0FBTSxHQUFFLE1BQUssR0FBRSxLQUFJLElBQUcsR0FBRSxJQUFHLEtBQUksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsS0FBSSxHQUFFLE1BQUssSUFBRyxLQUFJLElBQUcsR0FBRSxJQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxNQUFLLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEtBQUksR0FBRSxLQUFJLEdBQUUsSUFBRyxHQUFFLEtBQUksR0FBRSxJQUFHLElBQUcsS0FBSSxJQUFHLEtBQUksR0FBRSxHQUFFLEdBQUUsS0FBSSxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsTUFBSyxHQUFFLFFBQU8sR0FBRyxHQUFFLEtBQUcsQ0FBQyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLEtBQUksSUFBRyxJQUFHLEtBQUksSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsS0FBSSxJQUFHLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxLQUFJLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxJQUFHLEdBQUUsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxLQUFJLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxLQUFJLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxLQUFJLElBQUcsSUFBRyxHQUFFLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxHQUFFLEtBQUksSUFBRyxLQUFJLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLElBQUcsSUFBRyxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxJQUFHLElBQUcsS0FBSSxJQUFHLElBQUcsR0FBRSxHQUFFLElBQUcsSUFBRyxHQUFFLElBQUcsSUFBRyxLQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsSUFBRyxHQUFFLEtBQUksSUFBRyxJQUFHLEdBQUUsR0FBRSxJQUFHLEdBQUUsSUFBRyxLQUFJLEdBQUUsSUFBRyxLQUFJLEtBQUksS0FBSSxJQUFHLEtBQUksTUFBSyxJQUFHLElBQUcsTUFBSyxJQUFHLEdBQUUsSUFBRyxNQUFLLEdBQUUsS0FBSSxNQUFLLElBQUcsTUFBSyxLQUFJLEdBQUUsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEdBQUUsSUFBRyxJQUFHLEdBQUUsSUFBRyxLQUFJLElBQUcsS0FBSSxJQUFHLEtBQUksSUFBRyxHQUFFLEdBQUUsSUFBRyxJQUFHLElBQUcsR0FBRSxHQUFFLEdBQUUsSUFBRyxNQUFLLEdBQUUsTUFBSyxJQUFHLEdBQUUsTUFBSyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFJLElBQUcsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEtBQUksTUFBSyxLQUFJLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLE1BQUssSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsS0FBSSxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxJQUFHLEdBQUUsSUFBRyxHQUFFLElBQUcsR0FBRSxHQUFFLE1BQUssSUFBRyxHQUFFLEdBQUUsS0FBSSxJQUFHLEtBQUksSUFBRyxJQUFHLEdBQUUsSUFBRyxHQUFFLEtBQUksSUFBRyxJQUFHLElBQUcsS0FBSSxJQUFHLEtBQUksSUFBRyxHQUFFLEdBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsS0FBSSxJQUFHLElBQUcsR0FBRSxHQUFFLE1BQUssR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFHLE1BQUssT0FBTSxJQUFHLE1BQUssR0FBRSxLQUFJLEdBQUUsTUFBSyxJQUFHLE1BQUssSUFBRyxLQUFJLE1BQUssS0FBSSxNQUFLLE1BQUssR0FBRSxJQUFJLEdBQUUsS0FBRywwakJBQTRsRixLQUFHLHE2QkFBK3FJLEtBQUcsRUFBQyxHQUFFLHVOQUFzTixHQUFFLGdEQUErQyxHQUFFLFFBQU8sUUFBTywwRUFBeUUsWUFBVyxpQkFBZ0IsR0FBRSxLQUFHLCtLQUE4SyxLQUFHLEVBQUMsR0FBRSxJQUFHLFdBQVUsS0FBRyxrQkFBaUIsR0FBRSxLQUFHLDJDQUEwQyxHQUFFLEtBQUcsbUJBQWtCLEtBQUcsSUFBSSxPQUFPLE1BQUksS0FBRyxHQUFHLEdBQUUsS0FBRyxJQUFJLE9BQU8sTUFBSSxLQUFHLEtBQUcsR0FBRztBQUFFLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxXQUFRLElBQUUsT0FBTSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsUUFBRyxLQUFHLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRTtBQUFTLFFBQUcsS0FBRyxFQUFFLElBQUUsQ0FBQyxHQUFFLEtBQUcsRUFBRSxRQUFNO0FBQUEsRUFBRTtBQUFDLFNBQU07QUFBRTtBQUFDLFNBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxTQUFPLElBQUUsS0FBRyxNQUFJLEtBQUcsSUFBRSxLQUFHLE9BQUcsSUFBRSxLQUFHLE1BQUksS0FBRyxJQUFFLE1BQUksT0FBRyxLQUFHLFFBQU0sS0FBRyxPQUFLLEdBQUcsS0FBSyxPQUFPLGFBQWEsQ0FBQyxDQUFDLElBQUUsTUFBSSxRQUFHLFFBQUcsR0FBRyxHQUFFLEVBQUU7QUFBQztBQUFDLFNBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxTQUFPLElBQUUsS0FBRyxNQUFJLEtBQUcsSUFBRSxLQUFHLE9BQUcsSUFBRSxLQUFHLFFBQUcsSUFBRSxLQUFHLE9BQUcsSUFBRSxLQUFHLE1BQUksS0FBRyxJQUFFLE1BQUksT0FBRyxLQUFHLFFBQU0sS0FBRyxPQUFLLEdBQUcsS0FBSyxPQUFPLGFBQWEsQ0FBQyxDQUFDLElBQUUsTUFBSSxRQUFHLFFBQUcsR0FBRyxHQUFFLEVBQUUsS0FBRyxHQUFHLEdBQUUsRUFBRTtBQUFDO0FBQUMsSUFBSSxJQUFFLFNBQVMsR0FBRSxHQUFFO0FBQUMsUUFBSSxXQUFTLElBQUUsQ0FBQSxJQUFJLEtBQUssUUFBTSxHQUFFLEtBQUssVUFBUSxFQUFFLFNBQVEsS0FBSyxhQUFXLENBQUMsQ0FBQyxFQUFFLFlBQVcsS0FBSyxhQUFXLENBQUMsQ0FBQyxFQUFFLFlBQVcsS0FBSyxTQUFPLENBQUMsQ0FBQyxFQUFFLFFBQU8sS0FBSyxXQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVMsS0FBSyxTQUFPLENBQUMsQ0FBQyxFQUFFLFFBQU8sS0FBSyxVQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVEsS0FBSyxRQUFNLEVBQUUsU0FBTyxNQUFLLEtBQUssZ0JBQWM7QUFBSTtBQUFFLFNBQVMsRUFBRSxHQUFFLEdBQUU7QUFBQyxTQUFPLElBQUksRUFBRSxHQUFFLEVBQUMsWUFBVyxNQUFHLE9BQU0sRUFBQyxDQUFDO0FBQUM7QUFBQyxJQUFJLElBQUUsRUFBQyxZQUFXLEtBQUUsR0FBRSxJQUFFLEVBQUMsWUFBVyxLQUFFLEdBQUUsS0FBRyxDQUFBO0FBQUcsU0FBUyxFQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU8sTUFBSSxXQUFTLElBQUUsQ0FBQSxJQUFJLEVBQUUsVUFBUSxHQUFFLEdBQUcsQ0FBQyxJQUFFLElBQUksRUFBRSxHQUFFLENBQUM7QUFBQztBQUFDLElBQUksSUFBRSxFQUFDLEtBQUksSUFBSSxFQUFFLE9BQU0sQ0FBQyxHQUFFLFFBQU8sSUFBSSxFQUFFLFVBQVMsQ0FBQyxHQUFFLFFBQU8sSUFBSSxFQUFFLFVBQVMsQ0FBQyxHQUFFLE1BQUssSUFBSSxFQUFFLFFBQU8sQ0FBQyxHQUFFLFdBQVUsSUFBSSxFQUFFLGFBQVksQ0FBQyxHQUFFLEtBQUksSUFBSSxFQUFFLEtBQUssR0FBRSxVQUFTLElBQUksRUFBRSxLQUFJLEVBQUMsWUFBVyxNQUFHLFlBQVcsS0FBRSxDQUFDLEdBQUUsVUFBUyxJQUFJLEVBQUUsR0FBRyxHQUFFLFFBQU8sSUFBSSxFQUFFLEtBQUksRUFBQyxZQUFXLE1BQUcsWUFBVyxLQUFFLENBQUMsR0FBRSxRQUFPLElBQUksRUFBRSxHQUFHLEdBQUUsUUFBTyxJQUFJLEVBQUUsS0FBSSxFQUFDLFlBQVcsTUFBRyxZQUFXLEtBQUUsQ0FBQyxHQUFFLFFBQU8sSUFBSSxFQUFFLEdBQUcsR0FBRSxPQUFNLElBQUksRUFBRSxLQUFJLENBQUMsR0FBRSxNQUFLLElBQUksRUFBRSxLQUFJLENBQUMsR0FBRSxPQUFNLElBQUksRUFBRSxLQUFJLENBQUMsR0FBRSxLQUFJLElBQUksRUFBRSxHQUFHLEdBQUUsVUFBUyxJQUFJLEVBQUUsS0FBSSxDQUFDLEdBQUUsYUFBWSxJQUFJLEVBQUUsSUFBSSxHQUFFLE9BQU0sSUFBSSxFQUFFLE1BQUssQ0FBQyxHQUFFLFVBQVMsSUFBSSxFQUFFLFVBQVUsR0FBRSxpQkFBZ0IsSUFBSSxFQUFFLGlCQUFpQixHQUFFLFVBQVMsSUFBSSxFQUFFLE9BQU0sQ0FBQyxHQUFFLFdBQVUsSUFBSSxFQUFFLEtBQUksQ0FBQyxHQUFFLGNBQWEsSUFBSSxFQUFFLE1BQUssRUFBQyxZQUFXLE1BQUcsWUFBVyxLQUFFLENBQUMsR0FBRSxJQUFHLElBQUksRUFBRSxLQUFJLEVBQUMsWUFBVyxNQUFHLFVBQVMsS0FBRSxDQUFDLEdBQUUsUUFBTyxJQUFJLEVBQUUsTUFBSyxFQUFDLFlBQVcsTUFBRyxVQUFTLEtBQUUsQ0FBQyxHQUFFLFFBQU8sSUFBSSxFQUFFLFNBQVEsRUFBQyxRQUFPLE1BQUcsU0FBUSxNQUFHLFlBQVcsS0FBRSxDQUFDLEdBQUUsUUFBTyxJQUFJLEVBQUUsT0FBTSxFQUFDLFlBQVcsTUFBRyxRQUFPLE1BQUcsWUFBVyxLQUFFLENBQUMsR0FBRSxXQUFVLEVBQUUsTUFBSyxDQUFDLEdBQUUsWUFBVyxFQUFFLE1BQUssQ0FBQyxHQUFFLFdBQVUsRUFBRSxLQUFJLENBQUMsR0FBRSxZQUFXLEVBQUUsS0FBSSxDQUFDLEdBQUUsWUFBVyxFQUFFLEtBQUksQ0FBQyxHQUFFLFVBQVMsRUFBRSxpQkFBZ0IsQ0FBQyxHQUFFLFlBQVcsRUFBRSxhQUFZLENBQUMsR0FBRSxVQUFTLEVBQUUsYUFBWSxDQUFDLEdBQUUsU0FBUSxJQUFJLEVBQUUsT0FBTSxFQUFDLFlBQVcsTUFBRyxPQUFNLEdBQUUsUUFBTyxNQUFHLFlBQVcsS0FBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLEtBQUksRUFBRSxHQUFFLE1BQUssRUFBRSxLQUFJLEVBQUUsR0FBRSxPQUFNLEVBQUUsS0FBSSxFQUFFLEdBQUUsVUFBUyxJQUFJLEVBQUUsTUFBSyxFQUFDLFlBQVcsS0FBRSxDQUFDLEdBQUUsVUFBUyxFQUFFLE1BQUssQ0FBQyxHQUFFLFFBQU8sRUFBRSxPQUFPLEdBQUUsT0FBTSxFQUFFLFFBQU8sQ0FBQyxHQUFFLFFBQU8sRUFBRSxPQUFPLEdBQUUsV0FBVSxFQUFFLFVBQVUsR0FBRSxXQUFVLEVBQUUsVUFBVSxHQUFFLFVBQVMsRUFBRSxXQUFVLENBQUMsR0FBRSxLQUFJLEVBQUUsTUFBSyxFQUFDLFFBQU8sTUFBRyxZQUFXLEtBQUUsQ0FBQyxHQUFFLE9BQU0sRUFBRSxRQUFPLENBQUMsR0FBRSxVQUFTLEVBQUUsU0FBUyxHQUFFLE1BQUssRUFBRSxPQUFNLEVBQUMsUUFBTyxLQUFFLENBQUMsR0FBRSxXQUFVLEVBQUUsWUFBVyxDQUFDLEdBQUUsS0FBSSxFQUFFLElBQUksR0FBRSxTQUFRLEVBQUUsVUFBUyxDQUFDLEdBQUUsU0FBUSxFQUFFLFFBQVEsR0FBRSxRQUFPLEVBQUUsU0FBUSxDQUFDLEdBQUUsTUFBSyxFQUFFLEtBQUssR0FBRSxNQUFLLEVBQUUsS0FBSyxHQUFFLFFBQU8sRUFBRSxPQUFPLEdBQUUsUUFBTyxFQUFFLFNBQVEsRUFBQyxRQUFPLEtBQUUsQ0FBQyxHQUFFLE9BQU0sRUFBRSxNQUFNLEdBQUUsTUFBSyxFQUFFLE9BQU0sRUFBQyxZQUFXLE1BQUcsWUFBVyxLQUFFLENBQUMsR0FBRSxPQUFNLEVBQUUsUUFBTyxDQUFDLEdBQUUsUUFBTyxFQUFFLFNBQVEsQ0FBQyxHQUFFLFFBQU8sRUFBRSxTQUFRLENBQUMsR0FBRSxVQUFTLEVBQUUsV0FBVSxDQUFDLEdBQUUsU0FBUSxFQUFFLFFBQVEsR0FBRSxTQUFRLEVBQUUsVUFBUyxDQUFDLEdBQUUsT0FBTSxFQUFFLFFBQU8sQ0FBQyxHQUFFLE9BQU0sRUFBRSxRQUFPLENBQUMsR0FBRSxRQUFPLEVBQUUsU0FBUSxDQUFDLEdBQUUsS0FBSSxFQUFFLE1BQUssRUFBQyxZQUFXLE1BQUcsT0FBTSxFQUFDLENBQUMsR0FBRSxhQUFZLEVBQUUsY0FBYSxFQUFDLFlBQVcsTUFBRyxPQUFNLEVBQUMsQ0FBQyxHQUFFLFNBQVEsRUFBRSxVQUFTLEVBQUMsWUFBVyxNQUFHLFFBQU8sTUFBRyxZQUFXLEtBQUUsQ0FBQyxHQUFFLE9BQU0sRUFBRSxRQUFPLEVBQUMsWUFBVyxNQUFHLFFBQU8sTUFBRyxZQUFXLEtBQUUsQ0FBQyxHQUFFLFNBQVEsRUFBRSxVQUFTLEVBQUMsWUFBVyxNQUFHLFFBQU8sTUFBRyxZQUFXLEtBQUUsQ0FBQyxFQUFDLEdBQUUsSUFBRSwwQkFBeUIsS0FBRyxJQUFJLE9BQU8sRUFBRSxRQUFPLEdBQUc7QUFBRSxTQUFTLEVBQUUsR0FBRTtBQUFDLFNBQU8sTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLFFBQU0sTUFBSTtBQUFJO0FBQUMsU0FBUyxHQUFHLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxXQUFTLElBQUUsRUFBRTtBQUFRLFdBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFJO0FBQUMsUUFBSSxJQUFFLEVBQUUsV0FBVyxDQUFDO0FBQUUsUUFBRyxFQUFFLENBQUMsRUFBRSxR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QixFQUFFLElBQUksR0FBRSxLQUFLLEtBQU0sR0FBQyxFQUFFLGFBQVcsS0FBSyxRQUFRLFlBQVcsS0FBSyxXQUFXLEdBQUUsU0FBUztBQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUMsTUFBSyxPQUFNLEdBQUUsS0FBRyxFQUFDLE1BQUssU0FBUTtBQUFFLEVBQUUsUUFBTSxTQUFTLEdBQUU7QUFBQyxNQUFHLEtBQUssUUFBUSxjQUFZLEtBQUcsQ0FBQyxLQUFLLGFBQWEsS0FBSyxFQUFFLFFBQU07QUFBRyxJQUFFLFlBQVUsS0FBSztBQUFJLE1BQUksSUFBRSxFQUFFLEtBQUssS0FBSyxLQUFLLEdBQUUsSUFBRSxLQUFLLE1BQUksRUFBRSxDQUFDLEVBQUUsUUFBTyxJQUFFLEtBQUssTUFBTSxXQUFXLENBQUM7QUFBRSxNQUFHLE1BQUksTUFBSSxNQUFJLEdBQUcsUUFBTTtBQUFHLE1BQUcsRUFBRSxRQUFNO0FBQUcsTUFBRyxNQUFJLE9BQUssSUFBRSxTQUFPLElBQUUsTUFBTSxRQUFNO0FBQUcsTUFBRyxFQUFFLEdBQUUsSUFBRSxHQUFFO0FBQUMsYUFBUSxJQUFFLElBQUUsR0FBRSxFQUFFLElBQUUsS0FBSyxNQUFNLFdBQVcsQ0FBQyxHQUFFLElBQUUsSUFBRyxHQUFFO0FBQUUsUUFBRyxNQUFJLE1BQUksSUFBRSxTQUFPLElBQUUsTUFBTSxRQUFNO0FBQUcsUUFBSSxJQUFFLEtBQUssTUFBTSxNQUFNLEdBQUUsQ0FBQztBQUFFLFFBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLFFBQU07QUFBQSxFQUFFO0FBQUMsU0FBUTtBQUFBO0FBQUUsRUFBRSxrQkFBZ0IsV0FBVTtBQUFDLE1BQUcsS0FBSyxRQUFRLGNBQVksS0FBRyxDQUFDLEtBQUssYUFBYSxPQUFPLEVBQUUsUUFBTTtBQUFHLElBQUUsWUFBVSxLQUFLO0FBQUksTUFBSSxJQUFFLEVBQUUsS0FBSyxLQUFLLEtBQUssR0FBRSxJQUFFLEtBQUssTUFBSSxFQUFFLENBQUMsRUFBRSxRQUFPO0FBQUUsU0FBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLEtBQUksQ0FBQyxDQUFDLEtBQUcsS0FBSyxNQUFNLE1BQU0sR0FBRSxJQUFFLENBQUMsTUFBSSxlQUFhLElBQUUsTUFBSSxLQUFLLE1BQU0sVUFBUSxFQUFFLEVBQUUsSUFBRSxLQUFLLE1BQU0sV0FBVyxJQUFFLENBQUMsQ0FBQyxLQUFHLElBQUUsU0FBTyxJQUFFO0FBQU87QUFBRSxFQUFFLGlCQUFlLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsS0FBSyxNQUFLLElBQUUsS0FBSyxVQUFXLEdBQUM7QUFBRSxVQUFPLEtBQUssTUFBTSxDQUFDLE1BQUksSUFBRSxFQUFFLE1BQUssSUFBRSxRQUFPLEdBQUc7QUFBQSxJQUFBLEtBQUssRUFBRTtBQUFBLElBQU8sS0FBSyxFQUFFO0FBQVUsYUFBTyxLQUFLLDRCQUE0QixHQUFFLEVBQUUsT0FBTztBQUFBLElBQUUsS0FBSyxFQUFFO0FBQVUsYUFBTyxLQUFLLHVCQUF1QixDQUFDO0FBQUEsSUFBRSxLQUFLLEVBQUU7QUFBSSxhQUFPLEtBQUssaUJBQWlCLENBQUM7QUFBQSxJQUFFLEtBQUssRUFBRTtBQUFLLGFBQU8sS0FBSyxrQkFBa0IsQ0FBQztBQUFBLElBQUUsS0FBSyxFQUFFO0FBQVUsYUFBTyxNQUFJLEtBQUssVUFBUSxNQUFJLFFBQU0sTUFBSSxZQUFVLEtBQUssUUFBUSxlQUFhLEtBQUcsS0FBSyxXQUFZLEdBQUMsS0FBSyx1QkFBdUIsR0FBRSxPQUFHLENBQUMsQ0FBQztBQUFBLElBQUUsS0FBSyxFQUFFO0FBQU8sYUFBTyxLQUFHLEtBQUssV0FBVSxHQUFHLEtBQUssV0FBVyxHQUFFLElBQUU7QUFBQSxJQUFFLEtBQUssRUFBRTtBQUFJLGFBQU8sS0FBSyxpQkFBaUIsQ0FBQztBQUFBLElBQUUsS0FBSyxFQUFFO0FBQVEsYUFBTyxLQUFLLHFCQUFxQixDQUFDO0FBQUEsSUFBRSxLQUFLLEVBQUU7QUFBUSxhQUFPLEtBQUsscUJBQXFCLENBQUM7QUFBQSxJQUFFLEtBQUssRUFBRTtBQUFPLGFBQU8sS0FBSyxvQkFBb0IsQ0FBQztBQUFBLElBQUUsS0FBSyxFQUFFO0FBQUssYUFBTyxLQUFLLGtCQUFrQixDQUFDO0FBQUEsSUFBRSxLQUFLLEVBQUU7QUFBQSxJQUFPLEtBQUssRUFBRTtBQUFLLGFBQU8sSUFBRSxLQUFHLEtBQUssT0FBTSxLQUFHLE1BQUksU0FBTyxLQUFLLFdBQVUsR0FBRyxLQUFLLGtCQUFrQixHQUFFLENBQUM7QUFBQSxJQUFFLEtBQUssRUFBRTtBQUFPLGFBQU8sS0FBSyxvQkFBb0IsQ0FBQztBQUFBLElBQUUsS0FBSyxFQUFFO0FBQU0sYUFBTyxLQUFLLG1CQUFtQixDQUFDO0FBQUEsSUFBRSxLQUFLLEVBQUU7QUFBTyxhQUFPLEtBQUssV0FBVyxNQUFHLENBQUM7QUFBQSxJQUFFLEtBQUssRUFBRTtBQUFLLGFBQU8sS0FBSyxvQkFBb0IsQ0FBQztBQUFBLElBQUUsS0FBSyxFQUFFO0FBQUEsSUFBUSxLQUFLLEVBQUU7QUFBUSxVQUFHLEtBQUssUUFBUSxjQUFZLE1BQUksTUFBSSxFQUFFLFNBQVE7QUFBQyxVQUFFLFlBQVUsS0FBSztBQUFJLFlBQUksSUFBRSxFQUFFLEtBQUssS0FBSyxLQUFLLEdBQUUsSUFBRSxLQUFLLE1BQUksRUFBRSxDQUFDLEVBQUUsUUFBTyxJQUFFLEtBQUssTUFBTSxXQUFXLENBQUM7QUFBRSxZQUFHLE1BQUksTUFBSSxNQUFJLEdBQUcsUUFBTyxLQUFLLHlCQUF5QixHQUFFLEtBQUssZ0JBQWlCLENBQUE7QUFBQSxNQUFDO0FBQUMsYUFBTyxLQUFLLFFBQVEsZ0NBQThCLEtBQUcsS0FBSyxNQUFNLEtBQUssT0FBTSx3REFBd0QsR0FBRSxLQUFLLFlBQVUsS0FBSyxNQUFNLEtBQUssT0FBTSxpRUFBaUUsSUFBRyxNQUFJLEVBQUUsVUFBUSxLQUFLLFlBQVksQ0FBQyxJQUFFLEtBQUssWUFBWSxHQUFFLENBQUM7QUFBQSxJQUFFO0FBQVEsVUFBRyxLQUFLLGdCQUFpQixFQUFDLFFBQU8sS0FBRyxLQUFLLFdBQVksR0FBQyxLQUFLLEtBQUksR0FBRyxLQUFLLHVCQUF1QixHQUFFLE1BQUcsQ0FBQyxDQUFDO0FBQUUsVUFBSSxJQUFFLEtBQUssT0FBTSxJQUFFLEtBQUssZ0JBQWU7QUFBRyxhQUFPLE1BQUksRUFBRSxRQUFNLEVBQUUsU0FBTyxnQkFBYyxLQUFLLElBQUksRUFBRSxLQUFLLElBQUUsS0FBSyxzQkFBc0IsR0FBRSxHQUFFLEdBQUUsQ0FBQyxJQUFFLEtBQUsseUJBQXlCLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQztBQUFFLEVBQUUsOEJBQTRCLFNBQVMsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLE1BQUk7QUFBUSxPQUFLLEtBQUksR0FBRyxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUcsS0FBSyxnQkFBZSxJQUFHLEVBQUUsUUFBTSxPQUFLLEtBQUssU0FBTyxFQUFFLE9BQUssS0FBSyxXQUFZLEtBQUUsRUFBRSxRQUFNLEtBQUssV0FBVSxHQUFHLEtBQUssVUFBVztBQUFFLFdBQVEsSUFBRSxHQUFFLElBQUUsS0FBSyxPQUFPLFFBQU8sRUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssT0FBTyxDQUFDO0FBQUUsU0FBSSxFQUFFLFNBQU8sUUFBTSxFQUFFLFNBQU8sRUFBRSxNQUFNLFVBQVEsRUFBRSxRQUFNLFNBQU8sS0FBRyxFQUFFLFNBQU8sV0FBUyxFQUFFLFNBQU8sR0FBRztBQUFBLEVBQUs7QUFBQyxTQUFPLE1BQUksS0FBSyxPQUFPLFVBQVEsS0FBSyxNQUFNLEVBQUUsT0FBTSxpQkFBZSxDQUFDLEdBQUUsS0FBSyxXQUFXLEdBQUUsSUFBRSxtQkFBaUIsbUJBQW1CO0FBQUM7QUFBRSxFQUFFLHlCQUF1QixTQUFTLEdBQUU7QUFBQyxTQUFPLEtBQUssS0FBSSxHQUFHLEtBQUssVUFBVyxHQUFDLEtBQUssV0FBVyxHQUFFLG1CQUFtQjtBQUFDO0FBQUUsRUFBRSxtQkFBaUIsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLEtBQU0sR0FBQyxLQUFLLE9BQU8sS0FBSyxFQUFFLEdBQUUsRUFBRSxPQUFLLEtBQUssZUFBZSxJQUFJLEdBQUUsS0FBSyxPQUFPLElBQUcsR0FBRyxLQUFLLE9BQU8sRUFBRSxNQUFNLEdBQUUsRUFBRSxPQUFLLEtBQUsscUJBQW9CLEdBQUcsS0FBSyxRQUFRLGVBQWEsSUFBRSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUUsS0FBSyxVQUFTLEdBQUcsS0FBSyxXQUFXLEdBQUUsa0JBQWtCO0FBQUM7QUFBRSxFQUFFLG9CQUFrQixTQUFTLEdBQUU7QUFBQyxPQUFLLEtBQU07QUFBQyxNQUFJLElBQUUsS0FBSyxRQUFRLGVBQWEsS0FBRyxLQUFLLFlBQVUsS0FBSyxjQUFjLE9BQU8sSUFBRSxLQUFLLGVBQWE7QUFBRyxNQUFHLEtBQUssT0FBTyxLQUFLLEVBQUUsR0FBRSxLQUFLLFdBQVcsQ0FBQyxHQUFFLEtBQUssT0FBTyxFQUFFLE1BQU0sR0FBRSxLQUFLLFNBQU8sRUFBRSxLQUFLLFFBQU8sSUFBRSxNQUFJLEtBQUssV0FBVyxDQUFDLEdBQUUsS0FBSyxTQUFTLEdBQUUsSUFBSTtBQUFFLE1BQUksSUFBRSxLQUFLLE1BQU87QUFBQyxNQUFHLEtBQUssU0FBTyxFQUFFLFFBQU0sS0FBSyxTQUFPLEVBQUUsVUFBUSxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssVUFBVyxHQUFDLElBQUUsSUFBRSxRQUFNLEtBQUs7QUFBTSxXQUFPLEtBQUssS0FBTSxHQUFDLEtBQUssU0FBUyxHQUFFLE1BQUcsQ0FBQyxHQUFFLEtBQUssV0FBVyxHQUFFLHFCQUFxQixJQUFHLEtBQUssU0FBTyxFQUFFLE9BQUssS0FBSyxRQUFRLGVBQWEsS0FBRyxLQUFLLGFBQWEsSUFBSSxNQUFJLEVBQUUsYUFBYSxXQUFTLEtBQUcsS0FBSyxRQUFRLGVBQWEsTUFBSSxLQUFLLFNBQU8sRUFBRSxNQUFJLElBQUUsTUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFFLEVBQUUsUUFBTSxJQUFFLEtBQUksS0FBSyxXQUFXLEdBQUUsQ0FBQyxNQUFJLElBQUUsTUFBSSxLQUFLLFdBQVcsQ0FBQyxHQUFFLEtBQUssU0FBUyxHQUFFLENBQUM7QUFBQSxFQUFFO0FBQUMsTUFBSSxJQUFFLEtBQUssYUFBYSxLQUFLLEdBQUUsSUFBRSxPQUFHLElBQUUsS0FBSyxhQUFZLElBQUUsSUFBSSxNQUFHLElBQUUsS0FBSyxPQUFNLElBQUUsSUFBRSxLQUFHLEtBQUssb0JBQW9CLEdBQUUsT0FBTyxJQUFFLEtBQUssZ0JBQWdCLE1BQUcsQ0FBQztBQUFFLFNBQU8sS0FBSyxTQUFPLEVBQUUsUUFBTSxJQUFFLEtBQUssUUFBUSxlQUFhLEtBQUcsS0FBSyxhQUFhLElBQUksTUFBSSxJQUFFLE1BQUksS0FBSyxTQUFPLEVBQUUsT0FBSyxLQUFLLFdBQVcsQ0FBQyxHQUFFLEVBQUUsUUFBTSxRQUFJLEtBQUcsS0FBSyxRQUFRLGVBQWEsTUFBSSxFQUFFLFVBQVEsS0FBRyxDQUFDLEtBQUcsRUFBRSxTQUFPLGdCQUFjLEVBQUUsU0FBTyxVQUFRLEtBQUssV0FBVSxJQUFHLEtBQUssUUFBUSxlQUFhLE1BQUksRUFBRSxRQUFNLFNBQUssS0FBRyxLQUFHLEtBQUssTUFBTSxFQUFFLE9BQU0sK0RBQStELEdBQUUsS0FBSyxhQUFhLEdBQUUsT0FBRyxDQUFDLEdBQUUsS0FBSyxpQkFBaUIsQ0FBQyxHQUFFLEtBQUssV0FBVyxHQUFFLENBQUMsTUFBSSxLQUFLLHNCQUFzQixHQUFFLElBQUUsR0FBRSxJQUFFLE1BQUksS0FBSyxXQUFXLENBQUMsR0FBRSxLQUFLLFNBQVMsR0FBRSxDQUFDO0FBQUU7QUFBRSxFQUFFLHlCQUF1QixTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxLQUFLLEtBQU0sR0FBQyxLQUFLLGNBQWMsR0FBRSxNQUFJLElBQUUsSUFBRSxLQUFJLE9BQUcsQ0FBQztBQUFDO0FBQUUsRUFBRSxtQkFBaUIsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLEtBQUksR0FBRyxFQUFFLE9BQUssS0FBSyxxQkFBc0IsR0FBQyxFQUFFLGFBQVcsS0FBSyxlQUFlLElBQUksR0FBRSxFQUFFLFlBQVUsS0FBSyxJQUFJLEVBQUUsS0FBSyxJQUFFLEtBQUssZUFBZSxJQUFJLElBQUUsTUFBSyxLQUFLLFdBQVcsR0FBRSxhQUFhO0FBQUM7QUFBRSxFQUFFLHVCQUFxQixTQUFTLEdBQUU7QUFBQyxTQUFNLENBQUMsS0FBSyxjQUFZLENBQUMsS0FBSyxRQUFRLDhCQUE0QixLQUFLLE1BQU0sS0FBSyxPQUFNLDhCQUE4QixHQUFFLEtBQUssS0FBSSxHQUFHLEtBQUssSUFBSSxFQUFFLElBQUksS0FBRyxLQUFLLGdCQUFlLElBQUcsRUFBRSxXQUFTLFFBQU0sRUFBRSxXQUFTLEtBQUssZ0JBQWlCLEdBQUMsS0FBSyxVQUFTLElBQUksS0FBSyxXQUFXLEdBQUUsaUJBQWlCO0FBQUM7QUFBRSxFQUFFLHVCQUFxQixTQUFTLEdBQUU7QUFBQyxPQUFLLEtBQUksR0FBRyxFQUFFLGVBQWEsS0FBSyxxQkFBc0IsR0FBQyxFQUFFLFFBQU0sQ0FBRSxHQUFDLEtBQUssT0FBTyxFQUFFLE1BQU0sR0FBRSxLQUFLLE9BQU8sS0FBSyxFQUFFLEdBQUUsS0FBSyxXQUFXLENBQUM7QUFBRSxXQUFRLEdBQUUsSUFBRSxPQUFHLEtBQUssU0FBTyxFQUFFLFNBQVEsS0FBRyxLQUFLLFNBQU8sRUFBRSxTQUFPLEtBQUssU0FBTyxFQUFFLFVBQVM7QUFBQyxRQUFJLElBQUUsS0FBSyxTQUFPLEVBQUU7QUFBTSxTQUFHLEtBQUssV0FBVyxHQUFFLFlBQVksR0FBRSxFQUFFLE1BQU0sS0FBSyxJQUFFLEtBQUssVUFBVyxDQUFBLEdBQUUsRUFBRSxhQUFXLENBQUEsR0FBRyxLQUFLLEtBQU0sR0FBQyxJQUFFLEVBQUUsT0FBSyxLQUFLLGdCQUFlLEtBQUksS0FBRyxLQUFLLGlCQUFpQixLQUFLLGNBQWEsMEJBQTBCLEdBQUUsSUFBRSxNQUFHLEVBQUUsT0FBSyxPQUFNLEtBQUssT0FBTyxFQUFFLEtBQUs7QUFBQSxFQUFDLE1BQU0sTUFBRyxLQUFLLFdBQVksR0FBQyxFQUFFLFdBQVcsS0FBSyxLQUFLLGVBQWUsSUFBSSxDQUFDO0FBQUUsU0FBTyxLQUFLLFVBQVcsR0FBQyxLQUFHLEtBQUssV0FBVyxHQUFFLFlBQVksR0FBRSxLQUFLLEtBQU0sR0FBQyxLQUFLLE9BQU8sSUFBRyxHQUFHLEtBQUssV0FBVyxHQUFFLGlCQUFpQjtBQUFDO0FBQUUsRUFBRSxzQkFBb0IsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLEtBQUksR0FBRyxFQUFFLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxZQUFXLEtBQUssS0FBSyxDQUFDLEtBQUcsS0FBSyxNQUFNLEtBQUssWUFBVyw2QkFBNkIsR0FBRSxFQUFFLFdBQVMsS0FBSyxnQkFBZSxHQUFHLEtBQUssVUFBVyxHQUFDLEtBQUssV0FBVyxHQUFFLGdCQUFnQjtBQUFDO0FBQUUsSUFBSSxLQUFHLENBQUE7QUFBRyxFQUFFLHdCQUFzQixXQUFVO0FBQUMsTUFBSSxJQUFFLEtBQUssaUJBQWdCLEdBQUcsSUFBRSxFQUFFLFNBQU87QUFBYSxTQUFPLEtBQUssV0FBVyxJQUFFLEtBQUcsQ0FBQyxHQUFFLEtBQUssaUJBQWlCLEdBQUUsSUFBRSxLQUFHLENBQUMsR0FBRSxLQUFLLE9BQU8sRUFBRSxNQUFNLEdBQUU7QUFBQztBQUFFLEVBQUUsb0JBQWtCLFNBQVMsR0FBRTtBQUFDLE1BQUcsS0FBSyxLQUFNLEdBQUMsRUFBRSxRQUFNLEtBQUssV0FBVSxHQUFHLEVBQUUsVUFBUSxNQUFLLEtBQUssU0FBTyxFQUFFLFFBQU87QUFBQyxRQUFJLElBQUUsS0FBSyxVQUFTO0FBQUcsU0FBSyxLQUFNLEdBQUMsS0FBSyxJQUFJLEVBQUUsTUFBTSxJQUFFLEVBQUUsUUFBTSxLQUFLLHNCQUF1QixLQUFFLEtBQUssUUFBUSxjQUFZLE1BQUksS0FBSyxXQUFVLEdBQUcsRUFBRSxRQUFNLE1BQUssS0FBSyxXQUFXLENBQUMsSUFBRyxFQUFFLE9BQUssS0FBSyxXQUFXLEtBQUUsR0FBRSxLQUFLLFVBQVMsR0FBRyxFQUFFLFVBQVEsS0FBSyxXQUFXLEdBQUUsYUFBYTtBQUFBLEVBQUM7QUFBQyxTQUFPLEVBQUUsWUFBVSxLQUFLLElBQUksRUFBRSxRQUFRLElBQUUsS0FBSyxXQUFVLElBQUcsTUFBSyxDQUFDLEVBQUUsV0FBUyxDQUFDLEVBQUUsYUFBVyxLQUFLLE1BQU0sRUFBRSxPQUFNLGlDQUFpQyxHQUFFLEtBQUssV0FBVyxHQUFFLGNBQWM7QUFBQztBQUFFLEVBQUUsb0JBQWtCLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFPLEtBQUssS0FBTSxHQUFDLEtBQUssU0FBUyxHQUFFLE9BQUcsR0FBRSxDQUFDLEdBQUUsS0FBSyxVQUFXLEdBQUMsS0FBSyxXQUFXLEdBQUUscUJBQXFCO0FBQUM7QUFBRSxFQUFFLHNCQUFvQixTQUFTLEdBQUU7QUFBQyxTQUFPLEtBQUssS0FBTSxHQUFDLEVBQUUsT0FBSyxLQUFLLHFCQUFvQixHQUFHLEtBQUssT0FBTyxLQUFLLEVBQUUsR0FBRSxFQUFFLE9BQUssS0FBSyxlQUFlLE9BQU8sR0FBRSxLQUFLLE9BQU8sSUFBSyxHQUFDLEtBQUssV0FBVyxHQUFFLGdCQUFnQjtBQUFDO0FBQUUsRUFBRSxxQkFBbUIsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLFVBQVEsS0FBSyxNQUFNLEtBQUssT0FBTSx1QkFBdUIsR0FBRSxLQUFLLEtBQUksR0FBRyxFQUFFLFNBQU8sS0FBSyxxQkFBc0IsR0FBQyxFQUFFLE9BQUssS0FBSyxlQUFlLE1BQU0sR0FBRSxLQUFLLFdBQVcsR0FBRSxlQUFlO0FBQUM7QUFBRSxFQUFFLHNCQUFvQixTQUFTLEdBQUU7QUFBQyxTQUFPLEtBQUssS0FBSSxHQUFHLEtBQUssV0FBVyxHQUFFLGdCQUFnQjtBQUFDO0FBQUUsRUFBRSx3QkFBc0IsU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBUSxJQUFFLEdBQUUsSUFBRSxLQUFLLFFBQU8sSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLE1BQUUsU0FBTyxLQUFHLEtBQUssTUFBTSxFQUFFLE9BQU0sWUFBVSxJQUFFLHVCQUF1QjtBQUFBLEVBQUM7QUFBQyxXQUFRLElBQUUsS0FBSyxLQUFLLFNBQU8sU0FBTyxLQUFLLFNBQU8sRUFBRSxVQUFRLFdBQVMsTUFBSyxJQUFFLEtBQUssT0FBTyxTQUFPLEdBQUUsS0FBRyxHQUFFLEtBQUk7QUFBQyxRQUFJLElBQUUsS0FBSyxPQUFPLENBQUM7QUFBRSxRQUFHLEVBQUUsbUJBQWlCLEVBQUUsTUFBTSxHQUFFLGlCQUFlLEtBQUssT0FBTSxFQUFFLE9BQUs7QUFBQSxRQUFPO0FBQUEsRUFBSztBQUFDLFNBQU8sS0FBSyxPQUFPLEtBQUssRUFBQyxNQUFLLEdBQUUsTUFBSyxHQUFFLGdCQUFlLEtBQUssTUFBSyxDQUFDLEdBQUUsRUFBRSxPQUFLLEtBQUssZUFBZSxJQUFFLEVBQUUsUUFBUSxPQUFPLE1BQUksS0FBRyxJQUFFLFVBQVEsSUFBRSxPQUFPLEdBQUUsS0FBSyxPQUFPLElBQUcsR0FBRyxFQUFFLFFBQU0sR0FBRSxLQUFLLFdBQVcsR0FBRSxrQkFBa0I7QUFBQztBQUFFLEVBQUUsMkJBQXlCLFNBQVMsR0FBRSxHQUFFO0FBQUMsU0FBTyxFQUFFLGFBQVcsR0FBRSxLQUFLLFVBQVMsR0FBRyxLQUFLLFdBQVcsR0FBRSxxQkFBcUI7QUFBQztBQUFFLEVBQUUsYUFBVyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsT0FBSSxNQUFJLFdBQVMsSUFBRSxPQUFJLE1BQUksV0FBUyxJQUFFLEtBQUssVUFBVyxJQUFFLEVBQUUsT0FBSyxDQUFBLEdBQUcsS0FBSyxPQUFPLEVBQUUsTUFBTSxHQUFFLEtBQUcsS0FBSyxXQUFXLENBQUMsR0FBRSxLQUFLLFNBQU8sRUFBRSxVQUFRO0FBQUMsUUFBSSxJQUFFLEtBQUssZUFBZSxJQUFJO0FBQUUsTUFBRSxLQUFLLEtBQUssQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFPLE1BQUksS0FBSyxTQUFPLFFBQUksS0FBSyxLQUFNLEdBQUMsS0FBRyxLQUFLLFVBQVMsR0FBRyxLQUFLLFdBQVcsR0FBRSxnQkFBZ0I7QUFBQztBQUFFLEVBQUUsV0FBUyxTQUFTLEdBQUUsR0FBRTtBQUFDLFNBQU8sRUFBRSxPQUFLLEdBQUUsS0FBSyxPQUFPLEVBQUUsSUFBSSxHQUFFLEVBQUUsT0FBSyxLQUFLLFNBQU8sRUFBRSxPQUFLLE9BQUssS0FBSyxnQkFBaUIsR0FBQyxLQUFLLE9BQU8sRUFBRSxJQUFJLEdBQUUsRUFBRSxTQUFPLEtBQUssU0FBTyxFQUFFLFNBQU8sT0FBSyxLQUFLLGdCQUFpQixHQUFDLEtBQUssT0FBTyxFQUFFLE1BQU0sR0FBRSxFQUFFLE9BQUssS0FBSyxlQUFlLEtBQUssR0FBRSxLQUFLLFVBQVMsR0FBRyxLQUFLLE9BQU8sSUFBSyxHQUFDLEtBQUssV0FBVyxHQUFFLGNBQWM7QUFBQztBQUFFLEVBQUUsYUFBVyxTQUFTLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxLQUFLLFNBQU8sRUFBRTtBQUFJLFNBQU8sS0FBSyxLQUFJLEdBQUcsRUFBRSxTQUFPLHlCQUF1QixFQUFFLGFBQWEsQ0FBQyxFQUFFLFFBQU0sU0FBTyxDQUFDLEtBQUcsS0FBSyxRQUFRLGNBQVksS0FBRyxLQUFLLFVBQVEsRUFBRSxTQUFPLFNBQU8sRUFBRSxhQUFhLENBQUMsRUFBRSxHQUFHLFNBQU8saUJBQWUsS0FBSyxNQUFNLEVBQUUsUUFBTyxJQUFFLFdBQVMsWUFBVSx3REFBd0QsR0FBRSxFQUFFLE9BQUssR0FBRSxFQUFFLFFBQU0sSUFBRSxLQUFLLGdCQUFpQixJQUFDLEtBQUssaUJBQWdCLEdBQUcsS0FBSyxPQUFPLEVBQUUsTUFBTSxHQUFFLEVBQUUsT0FBSyxLQUFLLGVBQWUsS0FBSyxHQUFFLEtBQUssVUFBVyxHQUFDLEtBQUssT0FBTyxJQUFHLEdBQUcsS0FBSyxXQUFXLEdBQUUsSUFBRSxtQkFBaUIsZ0JBQWdCO0FBQUM7QUFBRSxFQUFFLFdBQVMsU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsT0FBSSxFQUFFLGVBQWEsQ0FBRSxHQUFDLEVBQUUsT0FBSyxPQUFJO0FBQUMsUUFBSSxJQUFFLEtBQUssVUFBVztBQUFDLFFBQUcsS0FBSyxXQUFXLEdBQUUsQ0FBQyxHQUFFLEtBQUssSUFBSSxFQUFFLEVBQUUsSUFBRSxFQUFFLE9BQUssS0FBSyxpQkFBaUIsQ0FBQyxJQUFFLENBQUMsS0FBRyxNQUFJLFdBQVMsRUFBRSxLQUFLLFNBQU8sRUFBRSxPQUFLLEtBQUssUUFBUSxlQUFhLEtBQUcsS0FBSyxhQUFhLElBQUksS0FBRyxLQUFLLFdBQVUsSUFBRyxDQUFDLEtBQUcsRUFBRSxHQUFHLFNBQU8sZ0JBQWMsRUFBRSxNQUFJLEtBQUssU0FBTyxFQUFFLE9BQUssS0FBSyxhQUFhLElBQUksTUFBSSxLQUFLLE1BQU0sS0FBSyxZQUFXLDBEQUEwRCxJQUFFLEVBQUUsT0FBSyxNQUFLLEVBQUUsYUFBYSxLQUFLLEtBQUssV0FBVyxHQUFFLG9CQUFvQixDQUFDLEdBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxLQUFLLEVBQUU7QUFBQSxFQUFLO0FBQUMsU0FBTztBQUFDO0FBQUUsRUFBRSxhQUFXLFNBQVMsR0FBRSxHQUFFO0FBQUMsSUFBRSxLQUFHLEtBQUssaUJBQWtCLEdBQUMsS0FBSyxpQkFBaUIsRUFBRSxJQUFHLE1BQUksUUFBTSxLQUFHLEdBQUUsS0FBRTtBQUFDO0FBQUUsSUFBSSxLQUFHLEdBQUUsS0FBRyxHQUFFLEtBQUc7QUFBRSxFQUFFLGdCQUFjLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsT0FBSyxhQUFhLENBQUMsSUFBRyxLQUFLLFFBQVEsZUFBYSxLQUFHLEtBQUssUUFBUSxlQUFhLEtBQUcsQ0FBQyxPQUFLLEtBQUssU0FBTyxFQUFFLFFBQU0sSUFBRSxNQUFJLEtBQUssV0FBVSxHQUFHLEVBQUUsWUFBVSxLQUFLLElBQUksRUFBRSxJQUFJLElBQUcsS0FBSyxRQUFRLGVBQWEsTUFBSSxFQUFFLFFBQU0sQ0FBQyxDQUFDLElBQUcsSUFBRSxPQUFLLEVBQUUsS0FBRyxJQUFFLE1BQUksS0FBSyxTQUFPLEVBQUUsT0FBSyxPQUFLLEtBQUssV0FBVSxHQUFHLEVBQUUsTUFBSSxFQUFFLElBQUUsT0FBSyxLQUFLLGdCQUFnQixFQUFFLElBQUcsS0FBSyxVQUFRLEVBQUUsYUFBVyxFQUFFLFFBQU0sS0FBSyxzQkFBb0IsS0FBRyxJQUFFLEVBQUU7QUFBRyxNQUFJLElBQUUsS0FBSyxVQUFTLElBQUUsS0FBSyxVQUFTLElBQUUsS0FBSztBQUFjLFNBQU8sS0FBSyxXQUFTLEdBQUUsS0FBSyxXQUFTLEdBQUUsS0FBSyxnQkFBYyxHQUFFLEtBQUssV0FBVyxHQUFHLEVBQUUsT0FBTSxFQUFFLFNBQVMsQ0FBQyxHQUFFLElBQUUsT0FBSyxFQUFFLEtBQUcsS0FBSyxTQUFPLEVBQUUsT0FBSyxLQUFLLFdBQVksSUFBQyxPQUFNLEtBQUssb0JBQW9CLENBQUMsR0FBRSxLQUFLLGtCQUFrQixHQUFFLEdBQUUsT0FBRyxDQUFDLEdBQUUsS0FBSyxXQUFTLEdBQUUsS0FBSyxXQUFTLEdBQUUsS0FBSyxnQkFBYyxHQUFFLEtBQUssV0FBVyxHQUFFLElBQUUsS0FBRyx3QkFBc0Isb0JBQW9CO0FBQUM7QUFBRSxFQUFFLHNCQUFvQixTQUFTLEdBQUU7QUFBQyxPQUFLLE9BQU8sRUFBRSxNQUFNLEdBQUUsRUFBRSxTQUFPLEtBQUssaUJBQWlCLEVBQUUsUUFBTyxPQUFHLEtBQUssUUFBUSxlQUFhLENBQUMsR0FBRSxLQUFLLCtCQUE4QjtBQUFFO0FBQUUsRUFBRSxhQUFXLFNBQVMsR0FBRSxHQUFFO0FBQUMsT0FBSyxLQUFJO0FBQUcsTUFBSSxJQUFFLEtBQUs7QUFBTyxPQUFLLFNBQU8sTUFBRyxLQUFLLGFBQWEsR0FBRSxDQUFDLEdBQUUsS0FBSyxnQkFBZ0IsQ0FBQztBQUFFLE1BQUksSUFBRSxLQUFLLGVBQWdCLEdBQUMsSUFBRSxLQUFLLFVBQVMsR0FBRyxJQUFFO0FBQUcsT0FBSSxFQUFFLE9BQUssQ0FBRSxHQUFDLEtBQUssT0FBTyxFQUFFLE1BQU0sR0FBRSxLQUFLLFNBQU8sRUFBRSxVQUFRO0FBQUMsUUFBSSxJQUFFLEtBQUssa0JBQWtCLEVBQUUsZUFBYSxJQUFJO0FBQUUsVUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsRUFBRSxTQUFPLHNCQUFvQixFQUFFLFNBQU8saUJBQWUsS0FBRyxLQUFLLGlCQUFpQixFQUFFLE9BQU0seUNBQXlDLEdBQUUsSUFBRSxRQUFJLEVBQUUsT0FBSyxFQUFFLElBQUksU0FBTyx1QkFBcUIsR0FBRyxHQUFFLENBQUMsS0FBRyxLQUFLLGlCQUFpQixFQUFFLElBQUksT0FBTSxrQkFBZ0IsRUFBRSxJQUFJLE9BQUssNkJBQTZCO0FBQUEsRUFBRTtBQUFDLFNBQU8sS0FBSyxTQUFPLEdBQUUsS0FBSyxLQUFJLEdBQUcsRUFBRSxPQUFLLEtBQUssV0FBVyxHQUFFLFdBQVcsR0FBRSxLQUFLLGNBQWEsR0FBRyxLQUFLLFdBQVcsR0FBRSxJQUFFLHFCQUFtQixpQkFBaUI7QUFBQztBQUFFLEVBQUUsb0JBQWtCLFNBQVMsR0FBRTtBQUFDLE1BQUcsS0FBSyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQU87QUFBSyxNQUFJLElBQUUsS0FBSyxRQUFRLGFBQVksSUFBRSxLQUFLLFVBQVcsR0FBQyxJQUFFLElBQUcsSUFBRSxPQUFHLElBQUUsT0FBRyxJQUFFLFVBQVMsSUFBRTtBQUFHLE1BQUcsS0FBSyxjQUFjLFFBQVEsR0FBRTtBQUFDLFFBQUcsS0FBRyxNQUFJLEtBQUssSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFPLEtBQUssc0JBQXNCLENBQUMsR0FBRTtBQUFFLFNBQUssd0JBQXlCLEtBQUUsS0FBSyxTQUFPLEVBQUUsT0FBSyxJQUFFLE9BQUcsSUFBRTtBQUFBLEVBQVE7QUFBQyxNQUFHLEVBQUUsU0FBTyxHQUFFLENBQUMsS0FBRyxLQUFHLEtBQUcsS0FBSyxjQUFjLE9BQU8sT0FBSyxLQUFLLHdCQUF1QixLQUFJLEtBQUssU0FBTyxFQUFFLFNBQU8sQ0FBQyxLQUFLLG1CQUFrQixJQUFHLElBQUUsT0FBRyxJQUFFLFVBQVMsQ0FBQyxNQUFJLEtBQUcsS0FBRyxDQUFDLE1BQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxNQUFJLElBQUUsT0FBSSxDQUFDLEtBQUcsQ0FBQyxLQUFHLENBQUMsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLO0FBQU0sS0FBQyxLQUFLLGNBQWMsS0FBSyxLQUFHLEtBQUssY0FBYyxLQUFLLE9BQUssS0FBSyx3QkFBeUIsSUFBQyxJQUFFLElBQUUsSUFBRTtBQUFBLEVBQUU7QUFBQyxNQUFHLEtBQUcsRUFBRSxXQUFTLE9BQUcsRUFBRSxNQUFJLEtBQUssWUFBWSxLQUFLLGNBQWEsS0FBSyxlQUFlLEdBQUUsRUFBRSxJQUFJLE9BQUssR0FBRSxLQUFLLFdBQVcsRUFBRSxLQUFJLFlBQVksS0FBRyxLQUFLLHNCQUFzQixDQUFDLEdBQUUsSUFBRSxNQUFJLEtBQUssU0FBTyxFQUFFLFVBQVEsTUFBSSxZQUFVLEtBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFDLEVBQUUsVUFBUSxHQUFHLEdBQUUsYUFBYSxHQUFFLElBQUUsS0FBRztBQUFFLFNBQUcsTUFBSSxZQUFVLEtBQUssTUFBTSxFQUFFLElBQUksT0FBTSx5Q0FBeUMsR0FBRSxFQUFFLE9BQUssSUFBRSxnQkFBYyxHQUFFLEtBQUssaUJBQWlCLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDLE1BQU0sTUFBSyxnQkFBZ0IsQ0FBQztBQUFFLFNBQU87QUFBQztBQUFFLEVBQUUsMEJBQXdCLFdBQVU7QUFBQyxTQUFPLEtBQUssU0FBTyxFQUFFLFFBQU0sS0FBSyxTQUFPLEVBQUUsYUFBVyxLQUFLLFNBQU8sRUFBRSxPQUFLLEtBQUssU0FBTyxFQUFFLFVBQVEsS0FBSyxTQUFPLEVBQUUsWUFBVSxLQUFLLEtBQUs7QUFBTztBQUFFLEVBQUUsd0JBQXNCLFNBQVMsR0FBRTtBQUFDLE9BQUssU0FBTyxFQUFFLGFBQVcsS0FBSyxVQUFRLGlCQUFlLEtBQUssTUFBTSxLQUFLLE9BQU0sb0RBQW9ELEdBQUUsRUFBRSxXQUFTLE9BQUcsRUFBRSxNQUFJLEtBQUssa0JBQW1CLEtBQUUsS0FBSyxrQkFBa0IsQ0FBQztBQUFDO0FBQUUsRUFBRSxtQkFBaUIsU0FBUyxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSSxJQUFFLFNBQU8saUJBQWUsS0FBRyxLQUFLLE1BQU0sRUFBRSxPQUFNLGtDQUFrQyxHQUFFLEtBQUcsS0FBSyxNQUFNLEVBQUUsT0FBTSxzQ0FBc0MsS0FBRyxFQUFFLFVBQVEsR0FBRyxHQUFFLFdBQVcsS0FBRyxLQUFLLE1BQU0sRUFBRSxPQUFNLHdEQUF3RDtBQUFFLE1BQUksSUFBRSxFQUFFLFFBQU0sS0FBSyxZQUFZLEdBQUUsR0FBRSxDQUFDO0FBQUUsU0FBTyxFQUFFLFNBQU8sU0FBTyxFQUFFLE9BQU8sV0FBUyxLQUFHLEtBQUssaUJBQWlCLEVBQUUsT0FBTSw4QkFBOEIsR0FBRSxFQUFFLFNBQU8sU0FBTyxFQUFFLE9BQU8sV0FBUyxLQUFHLEtBQUssaUJBQWlCLEVBQUUsT0FBTSxzQ0FBc0MsR0FBRSxFQUFFLFNBQU8sU0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFNBQU8saUJBQWUsS0FBSyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFNLCtCQUErQixHQUFFLEtBQUssV0FBVyxHQUFFLGtCQUFrQjtBQUFDO0FBQUUsRUFBRSxrQkFBZ0IsU0FBUyxHQUFFO0FBQUMsTUFBRyxHQUFHLEdBQUUsYUFBYSxJQUFFLEtBQUssTUFBTSxFQUFFLElBQUksT0FBTSxnREFBZ0QsSUFBRSxFQUFFLFVBQVEsR0FBRyxHQUFFLFdBQVcsS0FBRyxLQUFLLE1BQU0sRUFBRSxJQUFJLE9BQU0scURBQXFELEdBQUUsS0FBSyxJQUFJLEVBQUUsRUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssaUJBQWtCLEdBQUMsSUFBRSxFQUFFO0FBQWlCLE1BQUUsbUJBQWlCLE1BQUcsRUFBRSxRQUFNLEtBQUssaUJBQWtCLEdBQUMsRUFBRSxtQkFBaUI7QUFBQSxFQUFDLE1BQU0sR0FBRSxRQUFNO0FBQUssU0FBTyxLQUFLLFVBQVMsR0FBRyxLQUFLLFdBQVcsR0FBRSxvQkFBb0I7QUFBQztBQUFFLEVBQUUsd0JBQXNCLFNBQVMsR0FBRTtBQUFDLElBQUUsT0FBSyxDQUFBO0FBQUcsTUFBSSxJQUFFLEtBQUs7QUFBTyxPQUFJLEtBQUssU0FBTyxDQUFBLEdBQUcsS0FBSyxXQUFXLEtBQUcsRUFBRSxHQUFFLEtBQUssU0FBTyxFQUFFLFVBQVE7QUFBQyxRQUFJLElBQUUsS0FBSyxlQUFlLElBQUk7QUFBRSxNQUFFLEtBQUssS0FBSyxDQUFDO0FBQUEsRUFBQztBQUFDLFNBQU8sS0FBSyxLQUFNLEdBQUMsS0FBSyxVQUFTLEdBQUcsS0FBSyxTQUFPLEdBQUUsS0FBSyxXQUFXLEdBQUUsYUFBYTtBQUFDO0FBQUUsRUFBRSxlQUFhLFNBQVMsR0FBRSxHQUFFO0FBQUMsT0FBSyxTQUFPLEVBQUUsUUFBTSxFQUFFLEtBQUcsS0FBSyxXQUFZLEdBQUMsS0FBRyxLQUFLLGdCQUFnQixFQUFFLElBQUcsR0FBRSxLQUFFLE1BQUksTUFBSSxRQUFJLEtBQUssV0FBWSxHQUFDLEVBQUUsS0FBRztBQUFLO0FBQUUsRUFBRSxrQkFBZ0IsU0FBUyxHQUFFO0FBQUMsSUFBRSxhQUFXLEtBQUssSUFBSSxFQUFFLFFBQVEsSUFBRSxLQUFLLG9CQUFvQixNQUFLLEtBQUUsSUFBRTtBQUFJO0FBQUUsRUFBRSxpQkFBZSxXQUFVO0FBQUMsTUFBSSxJQUFFLEVBQUMsVUFBUyx1QkFBTyxPQUFPLElBQUksR0FBRSxNQUFLLENBQUUsRUFBQTtBQUFFLFNBQU8sS0FBSyxpQkFBaUIsS0FBSyxDQUFDLEdBQUUsRUFBRTtBQUFRO0FBQUUsRUFBRSxnQkFBYyxXQUFVO0FBQUMsTUFBSSxJQUFFLEtBQUssaUJBQWlCLElBQUssR0FBQyxJQUFFLEVBQUUsVUFBUyxJQUFFLEVBQUU7QUFBSyxNQUFHLEtBQUssUUFBUSxtQkFBbUIsVUFBUSxJQUFFLEtBQUssaUJBQWlCLFFBQU8sSUFBRSxNQUFJLElBQUUsT0FBSyxLQUFLLGlCQUFpQixJQUFFLENBQUMsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sRUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLE1BQUUsR0FBRSxFQUFFLElBQUksTUFBSSxJQUFFLEVBQUUsS0FBSyxLQUFLLENBQUMsSUFBRSxLQUFLLGlCQUFpQixFQUFFLE9BQU0scUJBQW1CLEVBQUUsT0FBSywwQ0FBMEM7QUFBQSxFQUFFO0FBQUM7QUFBRSxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsSUFBSSxNQUFLLElBQUUsRUFBRSxDQUFDLEdBQUUsSUFBRTtBQUFPLFNBQU8sRUFBRSxTQUFPLHVCQUFxQixFQUFFLFNBQU8sU0FBTyxFQUFFLFNBQU8sV0FBUyxLQUFHLEVBQUUsU0FBTyxNQUFJLE9BQUssRUFBRSxPQUFNLE1BQUksVUFBUSxNQUFJLFVBQVEsTUFBSSxVQUFRLE1BQUksVUFBUSxNQUFJLFVBQVEsTUFBSSxVQUFRLE1BQUksVUFBUSxNQUFJLFVBQVEsRUFBRSxDQUFDLElBQUUsUUFBTyxTQUFJLElBQUUsUUFBSSxFQUFFLENBQUMsSUFBRSxHQUFFO0FBQUc7QUFBQyxTQUFTLEdBQUcsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsVUFBUyxJQUFFLEVBQUU7QUFBSSxTQUFNLENBQUMsTUFBSSxFQUFFLFNBQU8sZ0JBQWMsRUFBRSxTQUFPLEtBQUcsRUFBRSxTQUFPLGFBQVcsRUFBRSxVQUFRO0FBQUU7QUFBQyxFQUFFLDRCQUEwQixTQUFTLEdBQUUsR0FBRTtBQUFDLFNBQU8sS0FBSyxRQUFRLGVBQWEsT0FBSyxLQUFLLGNBQWMsSUFBSSxLQUFHLEVBQUUsV0FBUyxLQUFLLHNCQUFxQixHQUFHLEtBQUssWUFBWSxHQUFFLEVBQUUsVUFBUyxLQUFLLFlBQVksS0FBRyxFQUFFLFdBQVMsT0FBTSxLQUFLLGlCQUFpQixNQUFNLEdBQUUsS0FBSyxTQUFPLEVBQUUsVUFBUSxLQUFLLFdBQVUsR0FBRyxFQUFFLFNBQU8sS0FBSyxjQUFlLEdBQUMsS0FBSyxRQUFRLGVBQWEsT0FBSyxFQUFFLGFBQVcsS0FBSyxnQkFBZSxJQUFJLEtBQUssVUFBUyxHQUFHLEtBQUssV0FBVyxHQUFFLHNCQUFzQjtBQUFDO0FBQUUsRUFBRSxjQUFZLFNBQVMsR0FBRSxHQUFFO0FBQUMsTUFBRyxLQUFLLEtBQUksR0FBRyxLQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBTyxLQUFLLDBCQUEwQixHQUFFLENBQUM7QUFBRSxNQUFHLEtBQUssSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFPLEtBQUssWUFBWSxHQUFFLFdBQVUsS0FBSyxZQUFZLEdBQUUsRUFBRSxjQUFZLEtBQUssOEJBQTZCLEdBQUcsS0FBSyxXQUFXLEdBQUUsMEJBQTBCO0FBQUUsTUFBRyxLQUFLLDJCQUE0QixFQUFDLEdBQUUsY0FBWSxLQUFLLHVCQUF1QixDQUFDLEdBQUUsRUFBRSxZQUFZLFNBQU8sd0JBQXNCLEtBQUssb0JBQW9CLEdBQUUsRUFBRSxZQUFZLFlBQVksSUFBRSxLQUFLLFlBQVksR0FBRSxFQUFFLFlBQVksSUFBRyxFQUFFLFlBQVksR0FBRyxLQUFLLEdBQUUsRUFBRSxhQUFXLENBQUEsR0FBRyxFQUFFLFNBQU87QUFBQSxPQUFTO0FBQUMsUUFBRyxFQUFFLGNBQVksTUFBSyxFQUFFLGFBQVcsS0FBSyxzQkFBc0IsQ0FBQyxHQUFFLEtBQUssY0FBYyxNQUFNLEVBQUUsTUFBSyxTQUFPLEVBQUUsVUFBUSxLQUFLLFdBQVUsR0FBRyxFQUFFLFNBQU8sS0FBSyxjQUFlLEdBQUMsS0FBSyxRQUFRLGVBQWEsT0FBSyxFQUFFLGFBQVcsS0FBSyxnQkFBZTtBQUFBLFNBQVE7QUFBQyxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsWUFBVyxJQUFFLEVBQUUsUUFBTyxLQUFHLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsYUFBSyxnQkFBZ0IsRUFBRSxLQUFLLEdBQUUsS0FBSyxpQkFBaUIsRUFBRSxLQUFLLEdBQUUsRUFBRSxNQUFNLFNBQU8sYUFBVyxLQUFLLE1BQU0sRUFBRSxNQUFNLE9BQU0sd0VBQXdFO0FBQUEsTUFBQztBQUFDLFFBQUUsU0FBTztBQUFBLElBQUk7QUFBQyxTQUFLLFVBQVM7QUFBQSxFQUFFO0FBQUMsU0FBTyxLQUFLLFdBQVcsR0FBRSx3QkFBd0I7QUFBQztBQUFFLEVBQUUseUJBQXVCLFNBQVMsR0FBRTtBQUFDLFNBQU8sS0FBSyxlQUFlLElBQUk7QUFBQztBQUFFLEVBQUUsZ0NBQThCLFdBQVU7QUFBQyxNQUFJO0FBQUUsTUFBRyxLQUFLLFNBQU8sRUFBRSxjQUFZLElBQUUsS0FBSyxnQkFBaUIsSUFBRTtBQUFDLFFBQUksSUFBRSxLQUFLLFVBQVM7QUFBRyxXQUFPLEtBQUssS0FBSSxHQUFHLEtBQUcsS0FBSyxLQUFNLEdBQUMsS0FBSyxjQUFjLEdBQUUsS0FBRyxJQUFHLE9BQUcsQ0FBQztBQUFBLEVBQUMsV0FBUyxLQUFLLFNBQU8sRUFBRSxRQUFPO0FBQUMsUUFBSSxJQUFFLEtBQUssVUFBVztBQUFDLFdBQU8sS0FBSyxXQUFXLEdBQUUsWUFBWTtBQUFBLEVBQUMsT0FBSztBQUFDLFFBQUksSUFBRSxLQUFLLGlCQUFrQjtBQUFDLFdBQU8sS0FBSyxVQUFXLEdBQUM7QUFBQSxFQUFDO0FBQUM7QUFBRSxFQUFFLGNBQVksU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksT0FBTyxLQUFHLGFBQVcsSUFBRSxFQUFFLFNBQU8sZUFBYSxFQUFFLE9BQUssRUFBRSxRQUFPLEVBQUUsR0FBRSxDQUFDLEtBQUcsS0FBSyxpQkFBaUIsR0FBRSx1QkFBcUIsSUFBRSxHQUFHLEdBQUUsRUFBRSxDQUFDLElBQUU7QUFBRztBQUFFLEVBQUUscUJBQW1CLFNBQVMsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSyxNQUFHLE1BQUksYUFBYSxNQUFLLFlBQVksR0FBRSxHQUFFLEVBQUUsS0FBSztBQUFBLFdBQVUsTUFBSSxnQkFBZ0IsVUFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFlBQVcsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFNBQUssbUJBQW1CLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQSxXQUFTLE1BQUksZUFBZSxVQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsVUFBUyxJQUFFLEVBQUUsUUFBTyxLQUFHLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsU0FBRyxLQUFLLG1CQUFtQixHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUEsTUFBTSxPQUFJLGFBQVcsS0FBSyxtQkFBbUIsR0FBRSxFQUFFLEtBQUssSUFBRSxNQUFJLHNCQUFvQixLQUFLLG1CQUFtQixHQUFFLEVBQUUsSUFBSSxJQUFFLE1BQUksaUJBQWUsS0FBSyxtQkFBbUIsR0FBRSxFQUFFLFFBQVE7QUFBQztBQUFFLEVBQUUsc0JBQW9CLFNBQVMsR0FBRSxHQUFFO0FBQUMsTUFBRyxFQUFFLFVBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFHLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsU0FBSyxtQkFBbUIsR0FBRSxFQUFFLEVBQUU7QUFBQSxFQUFDO0FBQUM7QUFBRSxFQUFFLDZCQUEyQixXQUFVO0FBQUMsU0FBTyxLQUFLLEtBQUssWUFBVSxTQUFPLEtBQUssS0FBSyxZQUFVLFdBQVMsS0FBSyxLQUFLLFlBQVUsV0FBUyxLQUFLLEtBQUssWUFBVSxjQUFZLEtBQUssTUFBTyxLQUFFLEtBQUssZ0JBQWU7QUFBRTtBQUFFLEVBQUUsdUJBQXFCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxLQUFLLFVBQVc7QUFBQyxTQUFPLEVBQUUsUUFBTSxLQUFLLHNCQUF1QixHQUFDLEVBQUUsV0FBUyxLQUFLLGNBQWMsSUFBSSxJQUFFLEtBQUssc0JBQXVCLElBQUMsRUFBRSxPQUFNLEtBQUssWUFBWSxHQUFFLEVBQUUsVUFBUyxFQUFFLFNBQVMsS0FBSyxHQUFFLEtBQUssV0FBVyxHQUFFLGlCQUFpQjtBQUFDO0FBQUUsRUFBRSx3QkFBc0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLENBQUEsR0FBRyxJQUFFO0FBQUcsT0FBSSxLQUFLLE9BQU8sRUFBRSxNQUFNLEdBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxNQUFNLEtBQUc7QUFBQyxRQUFHLEVBQUUsS0FBRTtBQUFBLGFBQVcsS0FBSyxPQUFPLEVBQUUsS0FBSyxHQUFFLEtBQUssbUJBQW1CLEVBQUUsTUFBTSxFQUFFO0FBQU0sTUFBRSxLQUFLLEtBQUsscUJBQXFCLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBRSxFQUFFLGNBQVksU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLEtBQU0sR0FBQyxLQUFLLFNBQU8sRUFBRSxVQUFRLEVBQUUsYUFBVyxJQUFHLEVBQUUsU0FBTyxLQUFLLGNBQWEsTUFBSyxFQUFFLGFBQVcsS0FBSyxzQkFBdUIsR0FBQyxLQUFLLGlCQUFpQixNQUFNLEdBQUUsRUFBRSxTQUFPLEtBQUssU0FBTyxFQUFFLFNBQU8sS0FBSyxjQUFlLElBQUMsS0FBSyxXQUFVLElBQUksS0FBSyxRQUFRLGVBQWEsT0FBSyxFQUFFLGFBQVcsS0FBSyxnQkFBZSxJQUFJLEtBQUssVUFBUyxHQUFHLEtBQUssV0FBVyxHQUFFLG1CQUFtQjtBQUFDO0FBQUUsRUFBRSx1QkFBcUIsV0FBVTtBQUFDLE1BQUksSUFBRSxLQUFLLFVBQVM7QUFBRyxTQUFPLEVBQUUsV0FBUyxLQUFLLHNCQUFxQixHQUFHLEtBQUssY0FBYyxJQUFJLElBQUUsRUFBRSxRQUFNLEtBQUssV0FBVSxLQUFJLEtBQUssZ0JBQWdCLEVBQUUsUUFBUSxHQUFFLEVBQUUsUUFBTSxFQUFFLFdBQVUsS0FBSyxnQkFBZ0IsRUFBRSxPQUFNLENBQUMsR0FBRSxLQUFLLFdBQVcsR0FBRSxpQkFBaUI7QUFBQztBQUFFLEVBQUUsOEJBQTRCLFdBQVU7QUFBQyxNQUFJLElBQUUsS0FBSyxVQUFTO0FBQUcsU0FBTyxFQUFFLFFBQU0sS0FBSyxXQUFVLEdBQUcsS0FBSyxnQkFBZ0IsRUFBRSxPQUFNLENBQUMsR0FBRSxLQUFLLFdBQVcsR0FBRSx3QkFBd0I7QUFBQztBQUFFLEVBQUUsZ0NBQThCLFdBQVU7QUFBQyxNQUFJLElBQUUsS0FBSyxVQUFXO0FBQUMsU0FBTyxLQUFLLEtBQU0sR0FBQyxLQUFLLGlCQUFpQixJQUFJLEdBQUUsRUFBRSxRQUFNLEtBQUssV0FBWSxHQUFDLEtBQUssZ0JBQWdCLEVBQUUsT0FBTSxDQUFDLEdBQUUsS0FBSyxXQUFXLEdBQUUsMEJBQTBCO0FBQUM7QUFBRSxFQUFFLHdCQUFzQixXQUFVO0FBQUMsTUFBSSxJQUFFLENBQUUsR0FBQyxJQUFFO0FBQUcsTUFBRyxLQUFLLFNBQU8sRUFBRSxTQUFPLEVBQUUsS0FBSyxLQUFLLDRCQUE2QixDQUFBLEdBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxLQUFLLEdBQUcsUUFBTztBQUFFLE1BQUcsS0FBSyxTQUFPLEVBQUUsS0FBSyxRQUFPLEVBQUUsS0FBSyxLQUFLLDhCQUErQixDQUFBLEdBQUU7QUFBRSxPQUFJLEtBQUssT0FBTyxFQUFFLE1BQU0sR0FBRSxDQUFDLEtBQUssSUFBSSxFQUFFLE1BQU0sS0FBRztBQUFDLFFBQUcsRUFBRSxLQUFFO0FBQUEsYUFBVyxLQUFLLE9BQU8sRUFBRSxLQUFLLEdBQUUsS0FBSyxtQkFBbUIsRUFBRSxNQUFNLEVBQUU7QUFBTSxNQUFFLEtBQUssS0FBSyxxQkFBb0IsQ0FBRTtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBRSxFQUFFLGtCQUFnQixXQUFVO0FBQUMsTUFBSSxJQUFFLENBQUE7QUFBRyxNQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQU87QUFBRSxPQUFLLE9BQU8sRUFBRSxNQUFNO0FBQUUsV0FBUSxJQUFFLENBQUEsR0FBRyxJQUFFLE1BQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxNQUFNLEtBQUc7QUFBQyxRQUFHLEVBQUUsS0FBRTtBQUFBLGFBQVcsS0FBSyxPQUFPLEVBQUUsS0FBSyxHQUFFLEtBQUssbUJBQW1CLEVBQUUsTUFBTSxFQUFFO0FBQU0sUUFBSSxJQUFFLEtBQUsscUJBQXNCLEdBQUMsSUFBRSxFQUFFLElBQUksU0FBTyxlQUFhLEVBQUUsSUFBSSxPQUFLLEVBQUUsSUFBSTtBQUFNLE1BQUUsR0FBRSxDQUFDLEtBQUcsS0FBSyxpQkFBaUIsRUFBRSxJQUFJLE9BQU0sOEJBQTRCLElBQUUsR0FBRyxHQUFFLEVBQUUsQ0FBQyxJQUFFLE1BQUcsRUFBRSxLQUFLLENBQUM7QUFBQSxFQUFDO0FBQUMsU0FBTztBQUFDO0FBQUUsRUFBRSx1QkFBcUIsV0FBVTtBQUFDLE1BQUksSUFBRSxLQUFLLFVBQVc7QUFBQyxTQUFPLEVBQUUsTUFBSSxLQUFLLFNBQU8sRUFBRSxTQUFPLEtBQUssY0FBZSxJQUFDLEtBQUssV0FBVyxLQUFLLFFBQVEsa0JBQWdCLE9BQU8sR0FBRSxLQUFLLE9BQU8sRUFBRSxLQUFLLEdBQUUsS0FBSyxTQUFPLEVBQUUsVUFBUSxLQUFLLFdBQVUsR0FBRyxFQUFFLFFBQU0sS0FBSyxjQUFlLEdBQUMsS0FBSyxXQUFXLEdBQUUsaUJBQWlCO0FBQUM7QUFBRSxFQUFFLHdCQUFzQixXQUFVO0FBQUMsTUFBRyxLQUFLLFFBQVEsZUFBYSxNQUFJLEtBQUssU0FBTyxFQUFFLFFBQU87QUFBQyxRQUFJLElBQUUsS0FBSyxhQUFhLEtBQUssS0FBSztBQUFFLFdBQU8sR0FBRyxLQUFLLEVBQUUsS0FBSyxLQUFHLEtBQUssTUFBTSxFQUFFLE9BQU0saURBQWlELEdBQUU7QUFBQSxFQUFDO0FBQUMsU0FBTyxLQUFLLFdBQVcsSUFBRTtBQUFDO0FBQUUsRUFBRSx5QkFBdUIsU0FBUyxHQUFFO0FBQUMsV0FBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFVBQVEsS0FBSyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsR0FBRSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQUUsWUFBVSxFQUFFLENBQUMsRUFBRSxXQUFXLElBQUksTUFBTSxHQUFFLEVBQUU7QUFBQztBQUFFLEVBQUUsdUJBQXFCLFNBQVMsR0FBRTtBQUFDLFNBQU8sS0FBSyxRQUFRLGVBQWEsS0FBRyxFQUFFLFNBQU8seUJBQXVCLEVBQUUsV0FBVyxTQUFPLGFBQVcsT0FBTyxFQUFFLFdBQVcsU0FBTyxhQUFXLEtBQUssTUFBTSxFQUFFLEtBQUssTUFBSSxPQUFLLEtBQUssTUFBTSxFQUFFLEtBQUssTUFBSTtBQUFJO0FBQUUsSUFBSSxJQUFFLEVBQUU7QUFBVSxFQUFFLGVBQWEsU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUcsS0FBSyxRQUFRLGVBQWEsS0FBRyxFQUFFLFNBQU8sRUFBRSxNQUFJO0FBQUEsSUFBRSxLQUFJO0FBQWEsV0FBSyxXQUFTLEVBQUUsU0FBTyxXQUFTLEtBQUssTUFBTSxFQUFFLE9BQU0sMkRBQTJEO0FBQUU7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFnQixLQUFJO0FBQUEsSUFBZSxLQUFJO0FBQUEsSUFBb0IsS0FBSTtBQUFjO0FBQUEsSUFBTSxLQUFJO0FBQW1CLFFBQUUsT0FBSyxpQkFBZ0IsS0FBRyxLQUFLLG1CQUFtQixHQUFFLElBQUU7QUFBRSxlQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsWUFBVyxJQUFFLEVBQUUsUUFBTyxLQUFHLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsYUFBSyxhQUFhLEdBQUUsQ0FBQyxHQUFFLEVBQUUsU0FBTyxrQkFBZ0IsRUFBRSxTQUFTLFNBQU8sa0JBQWdCLEVBQUUsU0FBUyxTQUFPLG9CQUFrQixLQUFLLE1BQU0sRUFBRSxTQUFTLE9BQU0sa0JBQWtCO0FBQUEsTUFBQztBQUFDO0FBQUEsSUFBTSxLQUFJO0FBQVcsUUFBRSxTQUFPLFVBQVEsS0FBSyxNQUFNLEVBQUUsSUFBSSxPQUFNLCtDQUErQyxHQUFFLEtBQUssYUFBYSxFQUFFLE9BQU0sQ0FBQztBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQWtCLFFBQUUsT0FBSyxnQkFBZSxLQUFHLEtBQUssbUJBQW1CLEdBQUUsSUFBRSxHQUFFLEtBQUssaUJBQWlCLEVBQUUsVUFBUyxDQUFDO0FBQUU7QUFBQSxJQUFNLEtBQUk7QUFBZ0IsUUFBRSxPQUFLLGVBQWMsS0FBSyxhQUFhLEVBQUUsVUFBUyxDQUFDLEdBQUUsRUFBRSxTQUFTLFNBQU8sdUJBQXFCLEtBQUssTUFBTSxFQUFFLFNBQVMsT0FBTSwyQ0FBMkM7QUFBRTtBQUFBLElBQU0sS0FBSTtBQUF1QixRQUFFLGFBQVcsT0FBSyxLQUFLLE1BQU0sRUFBRSxLQUFLLEtBQUksNkRBQTZELEdBQUUsRUFBRSxPQUFLLHFCQUFvQixPQUFPLEVBQUUsVUFBUyxLQUFLLGFBQWEsRUFBRSxNQUFLLENBQUM7QUFBRTtBQUFBLElBQU0sS0FBSTtBQUEwQixXQUFLLGFBQWEsRUFBRSxZQUFXLEdBQUUsQ0FBQztBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQWtCLFdBQUssaUJBQWlCLEVBQUUsT0FBTSxtREFBbUQ7QUFBRTtBQUFBLElBQU0sS0FBSTtBQUFtQixVQUFHLENBQUMsRUFBRTtBQUFBLElBQU07QUFBUSxXQUFLLE1BQU0sRUFBRSxPQUFNLHFCQUFxQjtBQUFBLEVBQUM7QUFBQSxNQUFNLE1BQUcsS0FBSyxtQkFBbUIsR0FBRSxJQUFFO0FBQUUsU0FBTztBQUFDO0FBQUUsRUFBRSxtQkFBaUIsU0FBUyxHQUFFLEdBQUU7QUFBQyxXQUFRLElBQUUsRUFBRSxRQUFPLElBQUUsR0FBRSxJQUFFLEdBQUUsS0FBSTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxTQUFHLEtBQUssYUFBYSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUMsTUFBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsSUFBRSxDQUFDO0FBQUUsU0FBSyxRQUFRLGdCQUFjLEtBQUcsS0FBRyxLQUFHLEVBQUUsU0FBTyxpQkFBZSxFQUFFLFNBQVMsU0FBTyxnQkFBYyxLQUFLLFdBQVcsRUFBRSxTQUFTLEtBQUs7QUFBQSxFQUFDO0FBQUMsU0FBTztBQUFDO0FBQUUsRUFBRSxjQUFZLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxLQUFLLFVBQVM7QUFBRyxTQUFPLEtBQUssS0FBSSxHQUFHLEVBQUUsV0FBUyxLQUFLLGlCQUFpQixPQUFHLENBQUMsR0FBRSxLQUFLLFdBQVcsR0FBRSxlQUFlO0FBQUM7QUFBRSxFQUFFLG1CQUFpQixXQUFVO0FBQUMsTUFBSSxJQUFFLEtBQUssVUFBVztBQUFDLFNBQU8sS0FBSyxLQUFNLEdBQUMsS0FBSyxRQUFRLGdCQUFjLEtBQUcsS0FBSyxTQUFPLEVBQUUsUUFBTSxLQUFLLFdBQVUsR0FBRyxFQUFFLFdBQVMsS0FBSyxpQkFBa0IsR0FBQyxLQUFLLFdBQVcsR0FBRSxhQUFhO0FBQUM7QUFBRSxFQUFFLG1CQUFpQixXQUFVO0FBQUMsTUFBRyxLQUFLLFFBQVEsZUFBYSxFQUFFLFNBQU8sS0FBSyxNQUFNO0FBQUEsSUFBQSxLQUFLLEVBQUU7QUFBUyxVQUFJLElBQUUsS0FBSyxVQUFXO0FBQUMsYUFBTyxLQUFLLEtBQU0sR0FBQyxFQUFFLFdBQVMsS0FBSyxpQkFBaUIsRUFBRSxVQUFTLE1BQUcsSUFBRSxHQUFFLEtBQUssV0FBVyxHQUFFLGNBQWM7QUFBQSxJQUFFLEtBQUssRUFBRTtBQUFPLGFBQU8sS0FBSyxTQUFTLElBQUU7QUFBQSxFQUFDO0FBQUMsU0FBTyxLQUFLLFdBQVU7QUFBRTtBQUFFLEVBQUUsbUJBQWlCLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQVEsSUFBRSxDQUFFLEdBQUMsSUFBRSxNQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBRyxLQUFHLElBQUUsSUFBRSxRQUFHLEtBQUssT0FBTyxFQUFFLEtBQUssR0FBRSxLQUFHLEtBQUssU0FBTyxFQUFFLE1BQU0sR0FBRSxLQUFLLElBQUk7QUFBQSxPQUFNO0FBQUMsUUFBRyxLQUFHLEtBQUssbUJBQW1CLENBQUMsRUFBRTtBQUFNLFFBQUcsS0FBSyxTQUFPLEVBQUUsVUFBUztBQUFDLFVBQUksSUFBRSxLQUFLLGlCQUFrQjtBQUFDLFdBQUsscUJBQXFCLENBQUMsR0FBRSxFQUFFLEtBQUssQ0FBQyxHQUFFLEtBQUssU0FBTyxFQUFFLFNBQU8sS0FBSyxpQkFBaUIsS0FBSyxPQUFNLCtDQUErQyxHQUFFLEtBQUssT0FBTyxDQUFDO0FBQUU7QUFBQSxJQUFLLE1BQU0sR0FBRSxLQUFLLEtBQUssd0JBQXdCLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUM7QUFBRSxFQUFFLDBCQUF3QixTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsS0FBSyxrQkFBa0IsS0FBSyxPQUFNLEtBQUssUUFBUTtBQUFFLFNBQU8sS0FBSyxxQkFBcUIsQ0FBQyxHQUFFO0FBQUM7QUFBRSxFQUFFLHVCQUFxQixTQUFTLEdBQUU7QUFBQyxTQUFPO0FBQUM7QUFBRSxFQUFFLG9CQUFrQixTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsTUFBRyxJQUFFLEtBQUcsS0FBSyxpQkFBa0IsR0FBQyxLQUFLLFFBQVEsY0FBWSxLQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQU87QUFBRSxNQUFJLElBQUUsS0FBSyxZQUFZLEdBQUUsQ0FBQztBQUFFLFNBQU8sRUFBRSxPQUFLLEdBQUUsRUFBRSxRQUFNLEtBQUssaUJBQWdCLEdBQUcsS0FBSyxXQUFXLEdBQUUsbUJBQW1CO0FBQUM7QUFBRSxFQUFFLGtCQUFnQixTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxXQUFTLElBQUU7QUFBSSxNQUFJLElBQUUsTUFBSTtBQUFHLFVBQU8sRUFBRSxNQUFJO0FBQUEsSUFBRSxLQUFJO0FBQWEsV0FBSyxVQUFRLEtBQUssd0JBQXdCLEtBQUssRUFBRSxJQUFJLEtBQUcsS0FBSyxpQkFBaUIsRUFBRSxRQUFPLElBQUUsYUFBVyxtQkFBaUIsRUFBRSxPQUFLLGlCQUFpQixHQUFFLE1BQUksTUFBSSxLQUFHLEVBQUUsU0FBTyxTQUFPLEtBQUssaUJBQWlCLEVBQUUsT0FBTSw2Q0FBNkMsR0FBRSxNQUFJLEVBQUUsR0FBRSxFQUFFLElBQUksS0FBRyxLQUFLLGlCQUFpQixFQUFFLE9BQU0scUJBQXFCLEdBQUUsRUFBRSxFQUFFLElBQUksSUFBRSxPQUFJLE1BQUksTUFBSSxLQUFLLFlBQVksRUFBRSxNQUFLLEdBQUUsRUFBRSxLQUFLO0FBQUc7QUFBQSxJQUFNLEtBQUk7QUFBa0IsV0FBSyxpQkFBaUIsRUFBRSxPQUFNLG1EQUFtRDtBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQW1CLFdBQUcsS0FBSyxpQkFBaUIsRUFBRSxPQUFNLDJCQUEyQjtBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQTBCLGFBQU8sS0FBRyxLQUFLLGlCQUFpQixFQUFFLE9BQU0sa0NBQWtDLEdBQUUsS0FBSyxnQkFBZ0IsRUFBRSxZQUFXLEdBQUUsQ0FBQztBQUFBLElBQUU7QUFBUSxXQUFLLE1BQU0sRUFBRSxRQUFPLElBQUUsWUFBVSxrQkFBZ0IsU0FBUztBQUFBLEVBQUM7QUFBQztBQUFFLEVBQUUsbUJBQWlCLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxVQUFPLE1BQUksV0FBUyxJQUFFLEtBQUksRUFBRSxNQUFJO0FBQUEsSUFBRSxLQUFJO0FBQWdCLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxZQUFXLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxhQUFLLHNCQUFzQixHQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQztBQUFBLElBQU0sS0FBSTtBQUFlLGVBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxVQUFTLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFLENBQUM7QUFBRSxhQUFHLEtBQUssc0JBQXNCLEdBQUUsR0FBRSxDQUFDO0FBQUEsTUFBQztBQUFDO0FBQUEsSUFBTTtBQUFRLFdBQUssZ0JBQWdCLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFDO0FBQUUsRUFBRSx3QkFBc0IsU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFVBQU8sTUFBSSxXQUFTLElBQUUsS0FBSSxFQUFFLE1BQUk7QUFBQSxJQUFFLEtBQUk7QUFBVyxXQUFLLHNCQUFzQixFQUFFLE9BQU0sR0FBRSxDQUFDO0FBQUU7QUFBQSxJQUFNLEtBQUk7QUFBb0IsV0FBSyxpQkFBaUIsRUFBRSxNQUFLLEdBQUUsQ0FBQztBQUFFO0FBQUEsSUFBTSxLQUFJO0FBQWMsV0FBSyxpQkFBaUIsRUFBRSxVQUFTLEdBQUUsQ0FBQztBQUFFO0FBQUEsSUFBTTtBQUFRLFdBQUssaUJBQWlCLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFDO0FBQUUsSUFBSSxJQUFFLFNBQVMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsT0FBSyxRQUFNLEdBQUUsS0FBSyxTQUFPLENBQUMsQ0FBQyxHQUFFLEtBQUssZ0JBQWMsQ0FBQyxDQUFDLEdBQUUsS0FBSyxXQUFTLEdBQUUsS0FBSyxZQUFVLENBQUMsQ0FBQztBQUFDLEdBQUUsSUFBRSxFQUFDLFFBQU8sSUFBSSxFQUFFLEtBQUksS0FBRSxHQUFFLFFBQU8sSUFBSSxFQUFFLEtBQUksSUFBRSxHQUFFLFFBQU8sSUFBSSxFQUFFLE1BQUssS0FBRSxHQUFFLFFBQU8sSUFBSSxFQUFFLEtBQUksS0FBRSxHQUFFLFFBQU8sSUFBSSxFQUFFLEtBQUksSUFBRSxHQUFFLFFBQU8sSUFBSSxFQUFFLEtBQUksTUFBRyxNQUFHLFNBQVMsR0FBRTtBQUFDLFNBQU8sRUFBRSxxQkFBb0I7QUFBRSxDQUFDLEdBQUUsUUFBTyxJQUFJLEVBQUUsWUFBVyxLQUFFLEdBQUUsUUFBTyxJQUFJLEVBQUUsWUFBVyxJQUFFLEdBQUUsWUFBVyxJQUFJLEVBQUUsWUFBVyxNQUFHLE9BQUcsTUFBSyxJQUFFLEdBQUUsT0FBTSxJQUFJLEVBQUUsWUFBVyxPQUFHLE9BQUcsTUFBSyxJQUFFLEVBQUMsR0FBRSxJQUFFLEVBQUU7QUFBVSxFQUFFLGlCQUFlLFdBQVU7QUFBQyxTQUFNLENBQUMsRUFBRSxNQUFNO0FBQUM7QUFBRSxFQUFFLGFBQVcsV0FBVTtBQUFDLFNBQU8sS0FBSyxRQUFRLEtBQUssUUFBUSxTQUFPLENBQUM7QUFBQztBQUFFLEVBQUUsZUFBYSxTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsS0FBSyxXQUFZO0FBQUMsU0FBTyxNQUFJLEVBQUUsVUFBUSxNQUFJLEVBQUUsU0FBTyxPQUFHLE1BQUksRUFBRSxVQUFRLE1BQUksRUFBRSxVQUFRLE1BQUksRUFBRSxVQUFRLENBQUMsRUFBRSxTQUFPLE1BQUksRUFBRSxXQUFTLE1BQUksRUFBRSxRQUFNLEtBQUssY0FBWSxFQUFFLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxZQUFXLEtBQUssS0FBSyxDQUFDLElBQUUsTUFBSSxFQUFFLFNBQU8sTUFBSSxFQUFFLFFBQU0sTUFBSSxFQUFFLE9BQUssTUFBSSxFQUFFLFVBQVEsTUFBSSxFQUFFLFFBQU0sT0FBRyxNQUFJLEVBQUUsU0FBTyxNQUFJLEVBQUUsU0FBTyxNQUFJLEVBQUUsUUFBTSxNQUFJLEVBQUUsVUFBUSxNQUFJLEVBQUUsT0FBSyxRQUFHLENBQUMsS0FBSztBQUFXO0FBQUUsRUFBRSxxQkFBbUIsV0FBVTtBQUFDLFdBQVEsSUFBRSxLQUFLLFFBQVEsU0FBTyxHQUFFLEtBQUcsR0FBRSxLQUFJO0FBQUMsUUFBSSxJQUFFLEtBQUssUUFBUSxDQUFDO0FBQUUsUUFBRyxFQUFFLFVBQVEsV0FBVyxRQUFPLEVBQUU7QUFBQSxFQUFTO0FBQUMsU0FBUTtBQUFBO0FBQUUsRUFBRSxnQkFBYyxTQUFTLEdBQUU7QUFBQyxNQUFJLEdBQUUsSUFBRSxLQUFLO0FBQUssSUFBRSxXQUFTLE1BQUksRUFBRSxNQUFJLEtBQUssY0FBWSxTQUFJLElBQUUsRUFBRSxpQkFBZSxFQUFFLEtBQUssTUFBSyxDQUFDLElBQUUsS0FBSyxjQUFZLEVBQUU7QUFBVTtBQUFFLEVBQUUsa0JBQWdCLFNBQVMsR0FBRTtBQUFDLE9BQUssV0FBWSxNQUFHLE1BQUksS0FBSyxRQUFRLEtBQUssUUFBUSxTQUFPLENBQUMsSUFBRTtBQUFFO0FBQUUsRUFBRSxPQUFPLGdCQUFjLEVBQUUsT0FBTyxnQkFBYyxXQUFVO0FBQUMsTUFBRyxLQUFLLFFBQVEsV0FBUyxHQUFFO0FBQUMsU0FBSyxjQUFZO0FBQUc7QUFBQSxFQUFNO0FBQUMsTUFBSSxJQUFFLEtBQUssUUFBUSxJQUFHO0FBQUcsUUFBSSxFQUFFLFVBQVEsS0FBSyxXQUFZLEVBQUMsVUFBUSxlQUFhLElBQUUsS0FBSyxRQUFRLElBQUcsSUFBSSxLQUFLLGNBQVksQ0FBQyxFQUFFO0FBQU07QUFBRSxFQUFFLE9BQU8sZ0JBQWMsU0FBUyxHQUFFO0FBQUMsT0FBSyxRQUFRLEtBQUssS0FBSyxhQUFhLENBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxNQUFNLEdBQUUsS0FBSyxjQUFZO0FBQUU7QUFBRSxFQUFFLGFBQWEsZ0JBQWMsV0FBVTtBQUFDLE9BQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxHQUFFLEtBQUssY0FBWTtBQUFFO0FBQUUsRUFBRSxPQUFPLGdCQUFjLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxNQUFJLEVBQUUsT0FBSyxNQUFJLEVBQUUsUUFBTSxNQUFJLEVBQUUsU0FBTyxNQUFJLEVBQUU7QUFBTyxPQUFLLFFBQVEsS0FBSyxJQUFFLEVBQUUsU0FBTyxFQUFFLE1BQU0sR0FBRSxLQUFLLGNBQVk7QUFBRTtBQUFFLEVBQUUsT0FBTyxnQkFBYyxXQUFVO0FBQUU7QUFBQyxFQUFFLFVBQVUsZ0JBQWMsRUFBRSxPQUFPLGdCQUFjLFNBQVMsR0FBRTtBQUFDLElBQUUsY0FBWSxNQUFJLEVBQUUsU0FBTyxFQUFFLE1BQUksRUFBRSxRQUFNLEtBQUssV0FBWSxNQUFHLEVBQUUsV0FBUyxFQUFFLE1BQUksRUFBRSxXQUFTLEVBQUUsS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLFlBQVcsS0FBSyxLQUFLLENBQUMsTUFBSSxHQUFHLE1BQUksRUFBRSxTQUFPLE1BQUksRUFBRSxXQUFTLEtBQUssV0FBWSxNQUFHLEVBQUUsVUFBUSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sSUFBRSxLQUFLLFFBQVEsS0FBSyxFQUFFLE1BQU0sR0FBRSxLQUFLLGNBQVk7QUFBRTtBQUFFLEVBQUUsTUFBTSxnQkFBYyxXQUFVO0FBQUMsT0FBSyxXQUFVLEVBQUcsVUFBUSxjQUFZLEtBQUssUUFBUSxJQUFLLEdBQUMsS0FBSyxjQUFZO0FBQUU7QUFBRSxFQUFFLFVBQVUsZ0JBQWMsV0FBVTtBQUFDLE9BQUssV0FBWSxNQUFHLEVBQUUsU0FBTyxLQUFLLFFBQVEsSUFBRyxJQUFHLEtBQUssUUFBUSxLQUFLLEVBQUUsTUFBTSxHQUFFLEtBQUssY0FBWTtBQUFFO0FBQUUsRUFBRSxLQUFLLGdCQUFjLFNBQVMsR0FBRTtBQUFDLE1BQUcsTUFBSSxFQUFFLFdBQVU7QUFBQyxRQUFJLElBQUUsS0FBSyxRQUFRLFNBQU87QUFBRSxTQUFLLFFB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Q0FBQyxJQUFFLElBQUcsRUFBRSxRQUFRLEtBQUssQ0FBQyxHQUFFLEtBQUssWUFBVSxFQUFFLFFBQU0sTUFBSSxPQUFPLEtBQUssaUJBQWlCLENBQUM7QUFBQSxFQUFDLFdBQVMsTUFBSSxJQUFHO0FBQUMsUUFBSSxJQUFFLEtBQUssYUFBWTtBQUFHLE1BQUUsUUFBUSxLQUFLLENBQUM7QUFBQSxFQUFDLFdBQVMsTUFBSSxJQUFHO0FBQUMsUUFBSSxJQUFFLEtBQUssYUFBYztBQUFDLFNBQUssc0JBQW9CLElBQUUsRUFBRSxRQUFRLFFBQVEsQ0FBQyxJQUFFLEtBQUcsSUFBRSxFQUFFLFFBQVEsUUFBUSxDQUFDLElBQUUsTUFBSSxFQUFFLElBQUksUUFBUSxDQUFDLElBQUUsSUFBRyxFQUFFLFVBQVUsS0FBSyxDQUFDO0FBQUEsRUFBQyxNQUFNLFVBQVEsSUFBRSxLQUFLLFdBQVcsU0FBTyxHQUFFLEtBQUcsR0FBRSxFQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSyxXQUFXLENBQUM7QUFBRSxRQUFHLEVBQUUsUUFBUSxRQUFRLENBQUMsSUFBRSxNQUFJLEVBQUUsRUFBRSxRQUFNLE1BQUksRUFBRSxRQUFRLENBQUMsTUFBSSxNQUFJLENBQUMsS0FBSywyQkFBMkIsQ0FBQyxLQUFHLEVBQUUsVUFBVSxRQUFRLENBQUMsSUFBRSxJQUFHO0FBQUMsVUFBRTtBQUFHO0FBQUEsSUFBSztBQUFDLFFBQUcsRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFFLEtBQUssWUFBVSxFQUFFLFFBQU0sTUFBSSxPQUFPLEtBQUssaUJBQWlCLENBQUMsR0FBRSxFQUFFLFFBQU0sR0FBRztBQUFBLEVBQUs7QUFBQyxPQUFHLEtBQUssaUJBQWlCLEdBQUUsaUJBQWUsSUFBRSw2QkFBNkI7QUFBQztBQUFFLEVBQUUsbUJBQWlCLFNBQVMsR0FBRTtBQUFDLE9BQUssV0FBVyxDQUFDLEVBQUUsUUFBUSxRQUFRLEVBQUUsSUFBSSxNQUFJLE1BQUksS0FBSyxXQUFXLENBQUMsRUFBRSxJQUFJLFFBQVEsRUFBRSxJQUFJLE1BQUks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U0FBTyxJQUFFLEtBQUcsRUFBRSxRQUFPO0FBQUUsTUFBSSxJQUFFLEVBQUUsV0FBVyxJQUFFLENBQUM7QUFBRSxTQUFPLEtBQUcsU0FBTyxLQUFHLFNBQU8sS0FBRyxNQUFJLElBQUUsV0FBUztBQUFDO0FBQUUsRUFBRSxVQUFVLFlBQVUsU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFJLFdBQVMsSUFBRTtBQUFJLE1BQUksSUFBRSxLQUFLLFFBQU8sSUFBRSxFQUFFO0FBQU8sTUFBRyxLQUFHLEVBQUUsUUFBTztBQUFFLE1BQUksSUFBRSxFQUFFLFdBQVcsQ0FBQyxHQUFFO0FBQUUsU0FBTSxFQUFFLEtBQUcsS0FBSyxZQUFVLEtBQUcsU0FBTyxLQUFHLFNBQU8sSUFBRSxLQUFHLE1BQUksSUFBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLEtBQUcsU0FBTyxJQUFFLFFBQU0sSUFBRSxJQUFFLElBQUU7QUFBQztBQUFFLEVBQUUsVUFBVSxVQUFRLFNBQVMsR0FBRTtBQUFDLFNBQU8sTUFBSSxXQUFTLElBQUUsUUFBSSxLQUFLLEdBQUcsS0FBSyxLQUFJLENBQUM7QUFBQztBQUFFLEVBQUUsVUFBVSxZQUFVLFNBQVMsR0FBRTtBQUFDLFNBQU8sTUFBSSxXQUFTLElBQUUsUUFBSSxLQUFLLEdBQUcsS0FBSyxVQUFVLEtBQUssS0FBSSxDQUFDLEdBQUUsQ0FBQztBQUFDO0FBQUUsRUFBRSxVQUFVLFVBQVEsU0FBUyxHQUFFO0FBQUMsUUFBSSxXQUFTLElBQUUsUUFBSSxLQUFLLE1BQUksS0FBSyxVQUFVLEtBQUssS0FBSSxDQUFDO0FBQUM7QUFBRSxFQUFFLFVBQVUsTUFBSSxTQUFTLEdBQUUsR0FBRTtBQUFDLFNBQU8sTUFBSSxXQUFTLElBQUUsUUFBSSxLQUFLLFFBQVEsQ0FBQyxNQUFJLEtBQUcsS0FBSyxRQUFRLENBQUMsR0FBRSxRQUFJO0FBQUU7QUFBRSxFQUFFLFVBQVUsV0FBUyxTQUFTLEdBQUUsR0FBRTtBQUFDLFFBQUksV0FBUyxJQUFFO0FBQUksV0FBUSxJQUFFLEtBQUssS0FBSSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFLEtBQUssR0FBRyxHQUFFLENBQUM7QUFBRSxRQUFHLE1BQUksTUFBSSxNQUFJLEVBQUUsUUFBTTtBQUFHLFFBQUUsS0FBSyxVQUFVLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFPLEtBQUssTUFBSSxHQUFFO0FBQUU7QUFBRSxFQUFFLHNCQUFvQixTQUFTLEdBQUU7QUFBQyxXQUFRLElBQUUsRUFBRSxZQUFXLElBQUUsRUFBRSxPQUFNLElBQUUsT0FBRyxJQUFFLE9BQUcsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxRQUFJLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBRSxNQUFFLFFBQVEsQ0FBQyxNQUFJLE1BQUksS0FBSyxNQUFNLEVBQUUsT0FBTSxpQ0FBaUMsR0FBRSxFQUFFLFFBQVEsR0FBRSxJQUFFLENBQUMsSUFBRSxNQUFJLEtBQUssTUFBTSxFQUFFLE9BQU0sbUNBQW1DLEdBQUUsTUFBSSxRQUFNLElBQUUsT0FBSSxNQUFJLFFBQU0sSUFBRTtBQUFBLEVBQUc7QUFBQyxPQUFLLFFBQVEsZUFBYSxNQUFJLEtBQUcsS0FBRyxLQUFLLE1BQU0sRUFBRSxPQUFNLGlDQUFpQztBQUFDO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxXQUFRLEtBQUssRUFBRSxRQUFRO0FBQUMsU0FBUTtBQUFBO0FBQUMsRUFBRSx3QkFBc0IsU0FBUyxHQUFFO0FBQUMsT0FBSyxlQUFlLENBQUMsR0FBRSxDQUFDLEVBQUUsV0FBUyxLQUFLLFFBQVEsZUFBYSxLQUFHLEdBQUcsRUFBRSxVQUFVLE1BQUksRUFBRSxVQUFRLE1BQUcsS0FBSyxlQUFlLENBQUM7QUFBRTtBQUFFLEVBQUUsaUJBQWUsU0FBUyxHQUFFO0FBQUMsSUFBRSxNQUFJLEdBQUUsRUFBRSxlQUFhLEdBQUUsRUFBRSxrQkFBZ0IsSUFBRyxFQUFFLDhCQUE0QixPQUFHLEVBQUUscUJBQW1CLEdBQUUsRUFBRSxtQkFBaUIsR0FBRSxFQUFFLGFBQVcsdUJBQU8sT0FBTyxJQUFJLEdBQUUsRUFBRSxtQkFBbUIsU0FBTyxHQUFFLEVBQUUsV0FBUyxNQUFLLEtBQUssbUJBQW1CLENBQUMsR0FBRSxFQUFFLFFBQU0sRUFBRSxPQUFPLFdBQVMsRUFBRSxJQUFJLEVBQUUsS0FBRyxFQUFFLE1BQU0sZUFBZSxJQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUcsRUFBRSxJQUFJLEdBQUcsTUFBSSxFQUFFLE1BQU0sMEJBQTBCLElBQUcsRUFBRSxtQkFBaUIsRUFBRSxzQkFBb0IsRUFBRSxNQUFNLGdCQUFnQjtBQUFFLFdBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxvQkFBbUIsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLE1BQUUsV0FBVyxDQUFDLEtBQUcsRUFBRSxNQUFNLGtDQUFrQztBQUFBLEVBQUM7QUFBQztBQUFFLEVBQUUscUJBQW1CLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxLQUFLLFFBQVEsZUFBYTtBQUFHLE9BQUksTUFBSSxFQUFFLFdBQVMsSUFBSSxHQUFHLEVBQUUsVUFBUyxJQUFJLElBQUcsS0FBSyxtQkFBbUIsQ0FBQyxHQUFFLEVBQUUsSUFBSSxHQUFHLElBQUcsT0FBSSxFQUFFLFdBQVMsRUFBRSxTQUFTLFFBQU8sSUFBSSxLQUFLLG1CQUFtQixDQUFDO0FBQUUsUUFBSSxFQUFFLFdBQVMsRUFBRSxTQUFTLFNBQVEsS0FBSyxxQkFBcUIsR0FBRSxJQUFFLEtBQUcsRUFBRSxNQUFNLG1CQUFtQixHQUFFLEVBQUUsSUFBSSxHQUFHLEtBQUcsRUFBRSxNQUFNLDBCQUEwQjtBQUFDO0FBQUUsRUFBRSxxQkFBbUIsU0FBUyxHQUFFO0FBQUMsU0FBSyxFQUFFLE1BQUksRUFBRSxPQUFPLFVBQVEsS0FBSyxlQUFlLENBQUMsSUFBRztBQUFDO0FBQUUsRUFBRSxpQkFBZSxTQUFTLEdBQUU7QUFBQyxTQUFPLEtBQUssb0JBQW9CLENBQUMsS0FBRyxFQUFFLCtCQUE2QixLQUFLLHFCQUFxQixDQUFDLEtBQUcsRUFBRSxXQUFTLEVBQUUsTUFBTSxvQkFBb0IsR0FBRSxTQUFLLEVBQUUsVUFBUSxLQUFLLGVBQWUsQ0FBQyxJQUFFLEtBQUssdUJBQXVCLENBQUMsTUFBSSxLQUFLLHFCQUFxQixDQUFDLEdBQUUsUUFBSTtBQUFFO0FBQUUsRUFBRSxzQkFBb0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSSxNQUFHLEVBQUUsOEJBQTRCLE9BQUcsRUFBRSxJQUFJLEVBQUUsS0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLFFBQU07QUFBRyxNQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFRO0FBQUMsTUFBRSxNQUFJO0FBQUEsRUFBQztBQUFDLE1BQUcsRUFBRSxJQUFJLEVBQUUsS0FBRyxFQUFFLElBQUksRUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFO0FBQUcsUUFBRyxLQUFLLFFBQVEsZUFBYSxNQUFJLElBQUUsRUFBRSxJQUFJLEVBQUUsSUFBRyxFQUFFLElBQUksRUFBRSxLQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBTyxLQUFLLG1CQUFtQixDQUFDLEdBQUUsRUFBRSxJQUFJLEVBQUUsS0FBRyxFQUFFLE1BQU0sb0JBQW9CLEdBQUUsRUFBRSw4QkFBNEIsQ0FBQyxHQUFFO0FBQUEsRUFBRTtBQUFDLFNBQU8sRUFBRSxNQUFJLEdBQUU7QUFBRTtBQUFFLEVBQUUsdUJBQXFCLFNBQVMsR0FBRSxHQUFFO0FBQUMsU0FBTyxNQUFJLFdBQVMsSUFBRSxRQUFJLEtBQUssMkJBQTJCLEdBQUUsQ0FBQyxLQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUUsUUFBSTtBQUFFO0FBQUUsRUFBRSw2QkFBMkIsU0FBUyxHQUFFLEdBQUU7QUFBQyxTQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUcsRUFBRSxJQUFJLEVBQUUsS0FBRyxFQUFFLElBQUksRUFBRSxLQUFHLEtBQUssMkJBQTJCLEdBQUUsQ0FBQztBQUFDO0FBQUUsRUFBRSw2QkFBMkIsU0FBUyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRTtBQUFJLE1BQUcsRUFBRSxJQUFJLEdBQUcsR0FBRTtBQUFDLFFBQUksSUFBRSxHQUFFLElBQUU7QUFBRyxRQUFHLEtBQUssd0JBQXdCLENBQUMsTUFBSSxJQUFFLEVBQUUsY0FBYSxFQUFFLElBQUksRUFBRSxLQUFHLEtBQUssd0JBQXdCLENBQUMsTUFBSSxJQUFFLEVBQUUsZUFBYyxFQUFFLElBQUksR0FBRyxHQUFHLFFBQU8sTUFBSSxNQUFJLElBQUUsS0FBRyxDQUFDLEtBQUcsRUFBRSxNQUFNLHVDQUF1QyxHQUFFO0FBQUcsTUFBRSxXQUFTLENBQUMsS0FBRyxFQUFFLE1BQU0sdUJBQXVCLEdBQUUsRUFBRSxNQUFJO0FBQUEsRUFBQztBQUFDLFNBQU07QUFBRTtBQUFFLEVBQUUsaUJBQWUsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLDRCQUE0QixDQUFDLEtBQUcsRUFBRSxJQUFJLEVBQUUsS0FBRyxLQUFLLG1DQUFtQyxDQUFDLEtBQUcsS0FBSyx5QkFBeUIsQ0FBQyxLQUFHLEtBQUssMkJBQTJCLENBQUMsS0FBRyxLQUFLLHlCQUF5QixDQUFDO0FBQUM7QUFBRSxFQUFFLHFDQUFtQyxTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRTtBQUFJLE1BQUcsRUFBRSxJQUFJLEVBQUUsR0FBRTtBQUFDLFFBQUcsS0FBSyxxQkFBcUIsQ0FBQyxFQUFFLFFBQU07QUFBRyxNQUFFLE1BQUk7QUFBQSxFQUFDO0FBQUMsU0FBTTtBQUFFO0FBQUUsRUFBRSw2QkFBMkIsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSSxNQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxRQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxVQUFHLEtBQUssUUFBUSxlQUFhLElBQUc7QUFBQyxZQUFJLElBQUUsS0FBSyxvQkFBb0IsQ0FBQyxHQUFFLElBQUUsRUFBRSxJQUFJLEVBQUU7QUFBRSxZQUFHLEtBQUcsR0FBRTtBQUFDLG1CQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxLQUFJO0FBQUMsZ0JBQUksSUFBRSxFQUFFLE9BQU8sQ0FBQztBQUFFLGNBQUUsUUFBUSxHQUFFLElBQUUsQ0FBQyxJQUFFLE1BQUksRUFBRSxNQUFNLHdDQUF3QztBQUFBLFVBQUM7QUFBQyxjQUFHLEdBQUU7QUFBQyxnQkFBSSxJQUFFLEtBQUssb0JBQW9CLENBQUM7QUFBRSxhQUFDLEtBQUcsQ0FBQyxLQUFHLEVBQUUsY0FBWSxNQUFJLEVBQUUsTUFBTSxzQ0FBc0M7QUFBRSxxQkFBUSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBSTtBQUFDLGtCQUFJLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBRSxlQUFDLEVBQUUsUUFBUSxHQUFFLElBQUUsQ0FBQyxJQUFFLE1BQUksRUFBRSxRQUFRLENBQUMsSUFBRSxPQUFLLEVBQUUsTUFBTSx3Q0FBd0M7QUFBQSxZQUFDO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUMsVUFBRyxFQUFFLElBQUksRUFBRSxHQUFFO0FBQUMsWUFBRyxLQUFLLG1CQUFtQixDQUFDLEdBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUFTLFVBQUUsTUFBTSxvQkFBb0I7QUFBQSxNQUFDO0FBQUEsSUFBQztBQUFDLE1BQUUsTUFBSTtBQUFBLEVBQUM7QUFBQyxTQUFNO0FBQUU7QUFBRSxFQUFFLDJCQUF5QixTQUFTLEdBQUU7QUFBQyxNQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxRQUFHLEtBQUssUUFBUSxlQUFhLElBQUUsS0FBSyxzQkFBc0IsQ0FBQyxJQUFFLEVBQUUsUUFBTyxNQUFLLE1BQUksRUFBRSxNQUFNLGVBQWUsR0FBRSxLQUFLLG1CQUFtQixDQUFDLEdBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxRQUFPLEVBQUUsc0JBQW9CLEdBQUU7QUFBRyxNQUFFLE1BQU0sb0JBQW9CO0FBQUEsRUFBQztBQUFDLFNBQU07QUFBRTtBQUFFLEVBQUUsc0JBQW9CLFNBQVMsR0FBRTtBQUFDLFdBQVEsSUFBRSxJQUFHLElBQUUsSUFBRyxJQUFFLEVBQUUsUUFBTyxPQUFNLE1BQUksR0FBRyxDQUFDLElBQUcsTUFBRyxFQUFFLENBQUMsR0FBRSxFQUFFLFFBQVM7QUFBQyxTQUFPO0FBQUM7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sTUFBSSxPQUFLLE1BQUksT0FBSyxNQUFJO0FBQUc7QUFBQyxFQUFFLHlCQUF1QixTQUFTLEdBQUU7QUFBQyxTQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUcsS0FBSyxtQ0FBbUMsQ0FBQyxLQUFHLEtBQUsseUJBQXlCLENBQUMsS0FBRyxLQUFLLDJCQUEyQixDQUFDLEtBQUcsS0FBSyx5QkFBeUIsQ0FBQyxLQUFHLEtBQUssa0NBQWtDLENBQUMsS0FBRyxLQUFLLG1DQUFtQyxDQUFDO0FBQUM7QUFBRSxFQUFFLG9DQUFrQyxTQUFTLEdBQUU7QUFBQyxTQUFPLEtBQUssMkJBQTJCLEdBQUUsSUFBRSxLQUFHLEVBQUUsTUFBTSxtQkFBbUIsR0FBRTtBQUFFO0FBQUUsRUFBRSw0QkFBMEIsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsUUFBUztBQUFDLFNBQU8sR0FBRyxDQUFDLEtBQUcsRUFBRSxlQUFhLEdBQUUsRUFBRSxRQUFTLEdBQUMsUUFBSTtBQUFFO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLE1BQUksTUFBSSxLQUFHLE1BQUksS0FBRyxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksS0FBRyxNQUFJLEtBQUcsTUFBSSxLQUFHLE9BQUssS0FBRztBQUFHO0FBQUMsRUFBRSw4QkFBNEIsU0FBUyxHQUFFO0FBQUMsV0FBUSxJQUFFLEVBQUUsS0FBSSxJQUFFLElBQUcsSUFBRSxFQUFFLFFBQU8sT0FBTSxNQUFJLENBQUMsR0FBRyxDQUFDLElBQUcsR0FBRSxRQUFTO0FBQUMsU0FBTyxFQUFFLFFBQU07QUFBQztBQUFFLEVBQUUscUNBQW1DLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLFFBQVM7QUFBQyxTQUFPLE1BQUksTUFBSSxNQUFJLE1BQUksRUFBRSxLQUFHLE1BQUksS0FBRyxPQUFLLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE9BQUssRUFBRSxRQUFTLEdBQUMsUUFBSTtBQUFFO0FBQUUsRUFBRSx3QkFBc0IsU0FBUyxHQUFFO0FBQUMsTUFBRyxFQUFFLElBQUksRUFBRSxHQUFFO0FBQUMsU0FBSyxvQkFBb0IsQ0FBQyxLQUFHLEVBQUUsTUFBTSxlQUFlO0FBQUUsUUFBSSxJQUFFLEtBQUssUUFBUSxlQUFhLElBQUcsSUFBRSxFQUFFLFdBQVcsRUFBRSxlQUFlO0FBQUUsUUFBRyxFQUFFLEtBQUcsRUFBRSxVQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFFBQU8sS0FBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLFFBQUUsY0FBYyxFQUFFLFFBQVEsS0FBRyxFQUFFLE1BQU0sOEJBQThCO0FBQUEsSUFBQztBQUFBLFFBQU0sR0FBRSxNQUFNLDhCQUE4QjtBQUFFLFNBQUcsTUFBSSxFQUFFLFdBQVcsRUFBRSxlQUFlLElBQUUsQ0FBQSxJQUFLLEtBQUssRUFBRSxRQUFRLElBQUUsRUFBRSxXQUFXLEVBQUUsZUFBZSxJQUFFO0FBQUEsRUFBRTtBQUFDO0FBQUUsRUFBRSxzQkFBb0IsU0FBUyxHQUFFO0FBQUMsTUFBRyxFQUFFLGtCQUFnQixJQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxRQUFHLEtBQUssK0JBQStCLENBQUMsS0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLFFBQU07QUFBRyxNQUFFLE1BQU0sNEJBQTRCO0FBQUEsRUFBQztBQUFDLFNBQVE7QUFBQTtBQUFFLEVBQUUsaUNBQStCLFNBQVMsR0FBRTtBQUFDLE1BQUcsRUFBRSxrQkFBZ0IsSUFBRyxLQUFLLGdDQUFnQyxDQUFDLEdBQUU7QUFBQyxTQUFJLEVBQUUsbUJBQWlCLEVBQUUsRUFBRSxZQUFZLEdBQUUsS0FBSywrQkFBK0IsQ0FBQyxJQUFHLEdBQUUsbUJBQWlCLEVBQUUsRUFBRSxZQUFZO0FBQUUsV0FBTTtBQUFBLEVBQUU7QUFBQyxTQUFRO0FBQUE7QUFBRSxFQUFFLGtDQUFnQyxTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxLQUFJLElBQUUsS0FBSyxRQUFRLGVBQWEsSUFBRyxJQUFFLEVBQUUsUUFBUSxDQUFDO0FBQUUsU0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFFLE1BQUksTUFBSSxLQUFLLHNDQUFzQyxHQUFFLENBQUMsTUFBSSxJQUFFLEVBQUUsZUFBYyxHQUFHLENBQUMsS0FBRyxFQUFFLGVBQWEsR0FBRSxTQUFLLEVBQUUsTUFBSSxHQUFFO0FBQUc7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sRUFBRSxHQUFFLElBQUUsS0FBRyxNQUFJLE1BQUksTUFBSTtBQUFFO0FBQUMsRUFBRSxpQ0FBK0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsS0FBSSxJQUFFLEtBQUssUUFBUSxlQUFhLElBQUcsSUFBRSxFQUFFLFFBQVEsQ0FBQztBQUFFLFNBQU8sRUFBRSxRQUFRLENBQUMsR0FBRSxNQUFJLE1BQUksS0FBSyxzQ0FBc0MsR0FBRSxDQUFDLE1BQUksSUFBRSxFQUFFLGVBQWMsR0FBRyxDQUFDLEtBQUcsRUFBRSxlQUFhLEdBQUUsU0FBSyxFQUFFLE1BQUksR0FBRTtBQUFHO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEVBQUUsR0FBRSxJQUFFLEtBQUcsTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLFFBQU0sTUFBSTtBQUFJO0FBQUMsRUFBRSx1QkFBcUIsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLHdCQUF3QixDQUFDLEtBQUcsS0FBSywrQkFBK0IsQ0FBQyxLQUFHLEtBQUssMEJBQTBCLENBQUMsS0FBRyxFQUFFLFdBQVMsS0FBSyxxQkFBcUIsQ0FBQyxJQUFFLFFBQUksRUFBRSxZQUFVLEVBQUUsUUFBUyxNQUFHLE1BQUksRUFBRSxNQUFNLHdCQUF3QixHQUFFLEVBQUUsTUFBTSxnQkFBZ0IsSUFBRztBQUFHO0FBQUUsRUFBRSwwQkFBd0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSSxNQUFHLEtBQUssd0JBQXdCLENBQUMsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFO0FBQWEsUUFBRyxFQUFFLFFBQVEsUUFBTyxJQUFFLEVBQUUscUJBQW1CLEVBQUUsbUJBQWlCLElBQUc7QUFBRyxRQUFHLEtBQUcsRUFBRSxtQkFBbUIsUUFBUTtBQUFDLE1BQUUsTUFBSTtBQUFBLEVBQUM7QUFBQztBQUFRO0FBQUUsRUFBRSx1QkFBcUIsU0FBUyxHQUFFO0FBQUMsTUFBRyxFQUFFLElBQUksR0FBRyxHQUFFO0FBQUMsUUFBRyxLQUFLLG9CQUFvQixDQUFDLEVBQUUsUUFBTyxFQUFFLG1CQUFtQixLQUFLLEVBQUUsZUFBZSxHQUFFO0FBQUcsTUFBRSxNQUFNLHlCQUF5QjtBQUFBLEVBQUM7QUFBQyxTQUFRO0FBQUE7QUFBRSxFQUFFLDRCQUEwQixTQUFTLEdBQUU7QUFBQyxTQUFPLEtBQUssd0JBQXdCLENBQUMsS0FBRyxLQUFLLHlCQUF5QixDQUFDLEtBQUcsS0FBSyxlQUFlLENBQUMsS0FBRyxLQUFLLDRCQUE0QixDQUFDLEtBQUcsS0FBSyxzQ0FBc0MsR0FBRSxLQUFFLEtBQUcsQ0FBQyxFQUFFLFdBQVMsS0FBSyxvQ0FBb0MsQ0FBQyxLQUFHLEtBQUsseUJBQXlCLENBQUM7QUFBQztBQUFFLEVBQUUsMkJBQXlCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUksTUFBRyxFQUFFLElBQUksRUFBRSxHQUFFO0FBQUMsUUFBRyxLQUFLLHdCQUF3QixDQUFDLEVBQUUsUUFBUTtBQUFDLE1BQUUsTUFBSTtBQUFBLEVBQUM7QUFBQyxTQUFRO0FBQUE7QUFBRSxFQUFFLGlCQUFlLFNBQVMsR0FBRTtBQUFDLFNBQU8sRUFBRSxjQUFZLE1BQUksQ0FBQyxHQUFHLEVBQUUsVUFBVyxDQUFBLEtBQUcsRUFBRSxlQUFhLEdBQUUsRUFBRSxXQUFVLFFBQUk7QUFBRTtBQUFFLEVBQUUsMEJBQXdCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLFFBQVM7QUFBQyxTQUFPLE1BQUksT0FBSyxFQUFFLGVBQWEsR0FBRSxFQUFFLFFBQVMsR0FBQyxRQUFJLE1BQUksT0FBSyxFQUFFLGVBQWEsSUFBRyxFQUFFLFFBQVMsR0FBQyxRQUFJLE1BQUksT0FBSyxFQUFFLGVBQWEsSUFBRyxFQUFFLFFBQVMsR0FBQyxRQUFJLE1BQUksT0FBSyxFQUFFLGVBQWEsSUFBRyxFQUFFLFdBQVUsUUFBSSxNQUFJLE9BQUssRUFBRSxlQUFhLElBQUcsRUFBRSxRQUFTLEdBQUMsUUFBSTtBQUFFO0FBQUUsRUFBRSwwQkFBd0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsUUFBTztBQUFHLFNBQU8sR0FBRyxDQUFDLEtBQUcsRUFBRSxlQUFhLElBQUUsSUFBRyxFQUFFLFFBQU8sR0FBRyxRQUFJO0FBQUU7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sS0FBRyxNQUFJLEtBQUcsTUFBSSxLQUFHLE1BQUksS0FBRztBQUFHO0FBQUMsRUFBRSx3Q0FBc0MsU0FBUyxHQUFFLEdBQUU7QUFBQyxRQUFJLFdBQVMsSUFBRTtBQUFJLE1BQUksSUFBRSxFQUFFLEtBQUksSUFBRSxLQUFHLEVBQUU7QUFBUSxNQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUU7QUFBQyxRQUFHLEtBQUsseUJBQXlCLEdBQUUsQ0FBQyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUU7QUFBYSxVQUFHLEtBQUcsS0FBRyxTQUFPLEtBQUcsT0FBTTtBQUFDLFlBQUksSUFBRSxFQUFFO0FBQUksWUFBRyxFQUFFLElBQUksRUFBRSxLQUFHLEVBQUUsSUFBSSxHQUFHLEtBQUcsS0FBSyx5QkFBeUIsR0FBRSxDQUFDLEdBQUU7QUFBQyxjQUFJLElBQUUsRUFBRTtBQUFhLGNBQUcsS0FBRyxTQUFPLEtBQUcsTUFBTSxRQUFPLEVBQUUsZ0JBQWMsSUFBRSxTQUFPLFFBQU0sSUFBRSxTQUFPLE9BQU07QUFBQSxRQUFFO0FBQUMsVUFBRSxNQUFJLEdBQUUsRUFBRSxlQUFhO0FBQUEsTUFBQztBQUFDLGFBQVE7QUFBQSxJQUFBO0FBQUMsUUFBRyxLQUFHLEVBQUUsSUFBSSxHQUFHLEtBQUcsS0FBSyxvQkFBb0IsQ0FBQyxLQUFHLEVBQUUsSUFBSSxHQUFHLEtBQUcsR0FBRyxFQUFFLFlBQVksRUFBRSxRQUFNO0FBQUcsU0FBRyxFQUFFLE1BQU0sd0JBQXdCLEdBQUUsRUFBRSxNQUFJO0FBQUEsRUFBQztBQUFDLFNBQU07QUFBRTtBQUFFLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxLQUFHLEtBQUcsS0FBRztBQUFPO0FBQUMsRUFBRSwyQkFBeUIsU0FBUyxHQUFFO0FBQUMsTUFBRyxFQUFFLFFBQVEsUUFBTyxLQUFLLDBCQUEwQixDQUFDLElBQUUsT0FBRyxFQUFFLElBQUksRUFBRSxLQUFHLEVBQUUsZUFBYSxJQUFHLFFBQUk7QUFBRyxNQUFJLElBQUUsRUFBRTtBQUFVLFNBQU8sTUFBSSxPQUFLLENBQUMsRUFBRSxXQUFTLE1BQUksUUFBTSxFQUFFLGVBQWEsR0FBRSxFQUFFLFFBQU8sR0FBRyxRQUFJO0FBQUU7QUFBRSxFQUFFLDBCQUF3QixTQUFTLEdBQUU7QUFBQyxJQUFFLGVBQWE7QUFBRSxNQUFJLElBQUUsRUFBRSxRQUFPO0FBQUcsTUFBRyxLQUFHLE1BQUksS0FBRyxJQUFHO0FBQUM7QUFBRyxRQUFFLGVBQWEsS0FBRyxFQUFFLGdCQUFjLElBQUUsS0FBSSxFQUFFLFFBQU87QUFBQSxZQUFVLElBQUUsRUFBRSxRQUFTLE1BQUcsTUFBSSxLQUFHO0FBQUksV0FBUTtBQUFBLEVBQUE7QUFBQyxTQUFNO0FBQUU7QUFBRSxJQUFJLEtBQUcsR0FBRSxJQUFFLEdBQUUsSUFBRTtBQUFFLEVBQUUsaUNBQStCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLFFBQVM7QUFBQyxNQUFHLEdBQUcsQ0FBQyxFQUFFLFFBQU8sRUFBRSxlQUFhLElBQUcsRUFBRSxXQUFVO0FBQUUsTUFBSSxJQUFFO0FBQUcsTUFBRyxFQUFFLFdBQVMsS0FBSyxRQUFRLGVBQWEsT0FBSyxJQUFFLE1BQUksT0FBSyxNQUFJLE1BQUs7QUFBQyxNQUFFLGVBQWEsSUFBRyxFQUFFO0FBQVUsUUFBSTtBQUFFLFFBQUcsRUFBRSxJQUFJLEdBQUcsTUFBSSxJQUFFLEtBQUsseUNBQXlDLENBQUMsTUFBSSxFQUFFLElBQUksR0FBRyxFQUFFLFFBQU8sS0FBRyxNQUFJLEtBQUcsRUFBRSxNQUFNLHVCQUF1QixHQUFFO0FBQUUsTUFBRSxNQUFNLHVCQUF1QjtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUU7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sTUFBSSxPQUFLLE1BQUksTUFBSSxNQUFJLE9BQUssTUFBSSxNQUFJLE1BQUksT0FBSyxNQUFJO0FBQUU7QUFBQyxFQUFFLDJDQUF5QyxTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRTtBQUFJLE1BQUcsS0FBSyw4QkFBOEIsQ0FBQyxLQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRTtBQUFnQixRQUFHLEtBQUssK0JBQStCLENBQUMsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFO0FBQWdCLGFBQU8sS0FBSywyQ0FBMkMsR0FBRSxHQUFFLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsTUFBRyxFQUFFLE1BQUksR0FBRSxLQUFLLHlDQUF5QyxDQUFDLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRTtBQUFnQixXQUFPLEtBQUssMENBQTBDLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUU7QUFBRSxFQUFFLDZDQUEyQyxTQUFTLEdBQUUsR0FBRSxHQUFFO0FBQUMsSUFBRSxFQUFFLGtCQUFrQixXQUFVLENBQUMsS0FBRyxFQUFFLE1BQU0sdUJBQXVCLEdBQUUsRUFBRSxrQkFBa0IsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUcsRUFBRSxNQUFNLHdCQUF3QjtBQUFDO0FBQUUsRUFBRSw0Q0FBMEMsU0FBUyxHQUFFLEdBQUU7QUFBQyxNQUFHLEVBQUUsa0JBQWtCLE9BQU8sS0FBSyxDQUFDLEVBQUUsUUFBTztBQUFFLE1BQUcsRUFBRSxXQUFTLEVBQUUsa0JBQWtCLGdCQUFnQixLQUFLLENBQUMsRUFBRSxRQUFPO0FBQUUsSUFBRSxNQUFNLHVCQUF1QjtBQUFDO0FBQUUsRUFBRSxnQ0FBOEIsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFO0FBQUUsT0FBSSxFQUFFLGtCQUFnQixJQUFHLEdBQUcsSUFBRSxFQUFFLFFBQU8sQ0FBRSxJQUFHLEdBQUUsbUJBQWlCLEVBQUUsQ0FBQyxHQUFFLEVBQUUsUUFBUztBQUFDLFNBQU8sRUFBRSxvQkFBa0I7QUFBRTtBQUFFLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxHQUFHLENBQUMsS0FBRyxNQUFJO0FBQUU7QUFBQyxFQUFFLGlDQUErQixTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUU7QUFBRSxPQUFJLEVBQUUsa0JBQWdCLElBQUcsR0FBRyxJQUFFLEVBQUUsUUFBTyxDQUFFLElBQUcsR0FBRSxtQkFBaUIsRUFBRSxDQUFDLEdBQUUsRUFBRSxRQUFPO0FBQUcsU0FBTyxFQUFFLG9CQUFrQjtBQUFFO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQztBQUFDO0FBQUMsRUFBRSwyQ0FBeUMsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLCtCQUErQixDQUFDO0FBQUM7QUFBRSxFQUFFLDJCQUF5QixTQUFTLEdBQUU7QUFBQyxNQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFFLEtBQUsscUJBQXFCLENBQUM7QUFBRSxXQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUcsRUFBRSxNQUFNLDhCQUE4QixHQUFFLEtBQUcsTUFBSSxLQUFHLEVBQUUsTUFBTSw2Q0FBNkMsR0FBRTtBQUFBLEVBQUU7QUFBQyxTQUFNO0FBQUU7QUFBRSxFQUFFLHVCQUFxQixTQUFTLEdBQUU7QUFBQyxTQUFPLEVBQUUsUUFBTyxNQUFLLEtBQUcsSUFBRSxFQUFFLFVBQVEsS0FBSywwQkFBMEIsQ0FBQyxLQUFHLEtBQUssMkJBQTJCLENBQUMsR0FBRTtBQUFFO0FBQUUsRUFBRSw2QkFBMkIsU0FBUyxHQUFFO0FBQUMsU0FBSyxLQUFLLG9CQUFvQixDQUFDLEtBQUc7QUFBQyxRQUFJLElBQUUsRUFBRTtBQUFhLFFBQUcsRUFBRSxJQUFJLEVBQUUsS0FBRyxLQUFLLG9CQUFvQixDQUFDLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRTtBQUFhLFFBQUUsWUFBVSxNQUFJLE1BQUksTUFBSSxPQUFLLEVBQUUsTUFBTSx5QkFBeUIsR0FBRSxNQUFJLE1BQUksTUFBSSxNQUFJLElBQUUsS0FBRyxFQUFFLE1BQU0sdUNBQXVDO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQztBQUFFLEVBQUUsc0JBQW9CLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUksTUFBRyxFQUFFLElBQUksRUFBRSxHQUFFO0FBQUMsUUFBRyxLQUFLLHNCQUFzQixDQUFDLEVBQUUsUUFBUTtBQUFDLFFBQUcsRUFBRSxTQUFRO0FBQUMsVUFBSSxJQUFFLEVBQUUsUUFBTztBQUFHLE9BQUMsTUFBSSxNQUFJLEdBQUcsQ0FBQyxNQUFJLEVBQUUsTUFBTSxzQkFBc0IsR0FBRSxFQUFFLE1BQU0sZ0JBQWdCO0FBQUEsSUFBQztBQUFDLE1BQUUsTUFBSTtBQUFBLEVBQUM7QUFBQyxNQUFJLElBQUUsRUFBRSxRQUFTO0FBQUMsU0FBTyxNQUFJLE1BQUksRUFBRSxlQUFhLEdBQUUsRUFBRSxRQUFTLEdBQUMsUUFBSTtBQUFFO0FBQUUsRUFBRSx3QkFBc0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSSxNQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBTyxFQUFFLGVBQWEsR0FBRTtBQUFHLE1BQUcsRUFBRSxXQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBTyxFQUFFLGVBQWEsSUFBRztBQUFHLE1BQUcsQ0FBQyxFQUFFLFdBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRTtBQUFDLFFBQUcsS0FBSyw2QkFBNkIsQ0FBQyxFQUFFO0FBQVMsTUFBRSxNQUFJO0FBQUEsRUFBQztBQUFDLFNBQU8sS0FBSywrQkFBK0IsQ0FBQyxLQUFHLEtBQUssMEJBQTBCLENBQUM7QUFBQztBQUFFLEVBQUUsNEJBQTBCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxHQUFFO0FBQUUsTUFBRyxDQUFDLEtBQUssd0JBQXdCLENBQUMsRUFBRSxLQUFHLElBQUUsS0FBSywwQkFBMEIsQ0FBQyxHQUFFO0FBQUMsVUFBSSxNQUFJLElBQUU7QUFBRyxhQUFRLElBQUUsRUFBRSxLQUFJLEVBQUUsU0FBUyxDQUFDLElBQUcsRUFBRSxDQUFDLEtBQUc7QUFBQyxVQUFHLEVBQUUsUUFBTyxNQUFLLE9BQUssSUFBRSxLQUFLLDBCQUEwQixDQUFDLElBQUc7QUFBQyxjQUFJLE1BQUksSUFBRTtBQUFHO0FBQUEsTUFBUTtBQUFDLFFBQUUsTUFBTSxzQ0FBc0M7QUFBQSxJQUFDO0FBQUMsUUFBRyxNQUFJLEVBQUUsSUFBSSxRQUFPO0FBQUUsV0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFHLEVBQUUsQ0FBQyxJQUFHLE1BQUssMEJBQTBCLENBQUMsS0FBRyxFQUFFLE1BQU0sc0NBQXNDO0FBQUUsUUFBRyxNQUFJLEVBQUUsSUFBSSxRQUFPO0FBQUEsRUFBQyxNQUFNLEdBQUUsTUFBTSxzQ0FBc0M7QUFBRSxZQUFPLEtBQUcsQ0FBQyxLQUFLLHdCQUF3QixDQUFDLEdBQUU7QUFBQyxRQUFHLElBQUUsS0FBSywwQkFBMEIsQ0FBQyxHQUFFLENBQUMsRUFBRSxRQUFPO0FBQUUsVUFBSSxNQUFJLElBQUU7QUFBQSxFQUFFO0FBQUM7QUFBRSxFQUFFLDBCQUF3QixTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRTtBQUFJLE1BQUcsS0FBSyw0QkFBNEIsQ0FBQyxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUU7QUFBYSxRQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUcsS0FBSyw0QkFBNEIsQ0FBQyxHQUFFO0FBQUMsVUFBSSxJQUFFLEVBQUU7QUFBYSxhQUFPLE1BQUksTUFBSSxNQUFJLE1BQUksSUFBRSxLQUFHLEVBQUUsTUFBTSx1Q0FBdUMsR0FBRTtBQUFBLElBQUU7QUFBQyxNQUFFLE1BQUk7QUFBQSxFQUFDO0FBQUMsU0FBUTtBQUFBO0FBQUUsRUFBRSw0QkFBMEIsU0FBUyxHQUFFO0FBQUMsU0FBTyxLQUFLLDRCQUE0QixDQUFDLElBQUUsSUFBRSxLQUFLLGlDQUFpQyxDQUFDLEtBQUcsS0FBSyxzQkFBc0IsQ0FBQztBQUFDO0FBQUUsRUFBRSx3QkFBc0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSSxNQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRSxJQUFFLEtBQUsscUJBQXFCLENBQUM7QUFBRSxRQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBTyxLQUFHLE1BQUksS0FBRyxFQUFFLE1BQU0sNkNBQTZDLEdBQUU7QUFBRSxNQUFFLE1BQUk7QUFBQSxFQUFDO0FBQUMsTUFBRyxFQUFFLElBQUksRUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssK0JBQStCLENBQUM7QUFBRSxRQUFHLEVBQUUsUUFBTztBQUFFLE1BQUUsTUFBSTtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUk7QUFBRSxFQUFFLG1DQUFpQyxTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRTtBQUFJLE1BQUcsRUFBRSxTQUFTLENBQUMsSUFBRyxHQUFHLENBQUMsR0FBRTtBQUFDLFFBQUcsRUFBRSxJQUFJLEdBQUcsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLLHNDQUFzQyxDQUFDO0FBQUUsVUFBRyxFQUFFLElBQUksR0FBRyxFQUFFLFFBQU87QUFBQSxJQUFDLE1BQU0sR0FBRSxNQUFNLGdCQUFnQjtBQUFFLE1BQUUsTUFBSTtBQUFBLEVBQUM7QUFBQyxTQUFPO0FBQUk7QUFBRSxFQUFFLHdDQUFzQyxTQUFTLEdBQUU7QUFBQyxXQUFRLElBQUUsS0FBSyxtQkFBbUIsQ0FBQyxHQUFFLEVBQUUsSUFBSSxHQUFHLElBQUcsTUFBSyxtQkFBbUIsQ0FBQyxNQUFJLE1BQUksSUFBRTtBQUFHLFNBQU87QUFBQztBQUFFLEVBQUUscUJBQW1CLFNBQVMsR0FBRTtBQUFDLFdBQVEsSUFBRSxHQUFFLEtBQUssNEJBQTRCLENBQUMsSUFBRztBQUFJLFNBQU8sTUFBSSxJQUFFLElBQUU7QUFBQztBQUFFLEVBQUUsOEJBQTRCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUksTUFBRyxFQUFFLElBQUksRUFBRSxFQUFFLFFBQU8sS0FBSywwQkFBMEIsQ0FBQyxLQUFHLEtBQUsscUNBQXFDLENBQUMsSUFBRSxPQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUcsRUFBRSxlQUFhLEdBQUUsU0FBSyxFQUFFLE1BQUksR0FBRTtBQUFJLE1BQUksSUFBRSxFQUFFLFFBQU87QUFBRyxTQUFPLElBQUUsS0FBRyxNQUFJLEVBQUUsVUFBVyxLQUFFLEdBQUcsQ0FBQyxLQUFHLEdBQUcsQ0FBQyxJQUFFLFNBQUksRUFBRSxRQUFTLEdBQUMsRUFBRSxlQUFhLEdBQUU7QUFBRztBQUFFLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxNQUFJLE1BQUksS0FBRyxNQUFJLEtBQUcsTUFBSSxLQUFHLE1BQUksS0FBRyxNQUFJLE1BQUksTUFBSSxLQUFHLE1BQUksS0FBRyxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSTtBQUFHO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxLQUFHLE1BQUksS0FBRyxNQUFJLEtBQUcsT0FBSyxLQUFHO0FBQUc7QUFBQyxFQUFFLHVDQUFxQyxTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxRQUFPO0FBQUcsU0FBTyxHQUFHLENBQUMsS0FBRyxFQUFFLGVBQWEsR0FBRSxFQUFFLFFBQU8sR0FBRyxRQUFJO0FBQUU7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUksS0FBRyxNQUFJLEtBQUcsTUFBSSxNQUFJLE1BQUksTUFBSSxNQUFJLE1BQUk7QUFBRztBQUFDLEVBQUUsK0JBQTZCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLFFBQU87QUFBRyxTQUFPLEdBQUcsQ0FBQyxLQUFHLE1BQUksTUFBSSxFQUFFLGVBQWEsSUFBRSxJQUFHLEVBQUUsUUFBUyxHQUFDLFFBQUk7QUFBRTtBQUFFLEVBQUUsOEJBQTRCLFNBQVMsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFO0FBQUksTUFBRyxFQUFFLElBQUksR0FBRyxHQUFFO0FBQUMsUUFBRyxLQUFLLHlCQUF5QixHQUFFLENBQUMsRUFBRSxRQUFRO0FBQUMsTUFBRSxXQUFTLEVBQUUsTUFBTSxnQkFBZ0IsR0FBRSxFQUFFLE1BQUk7QUFBQSxFQUFDO0FBQUMsU0FBTTtBQUFFO0FBQUUsRUFBRSwwQkFBd0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsS0FBSSxJQUFFO0FBQUUsT0FBSSxFQUFFLGVBQWEsR0FBRSxHQUFHLElBQUUsRUFBRSxRQUFPLENBQUUsSUFBRyxHQUFFLGVBQWEsS0FBRyxFQUFFLGdCQUFjLElBQUUsS0FBSSxFQUFFLFFBQVM7QUFBQyxTQUFPLEVBQUUsUUFBTTtBQUFDO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEtBQUcsTUFBSSxLQUFHO0FBQUU7QUFBQyxFQUFFLHNCQUFvQixTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRSxLQUFJLElBQUU7QUFBRSxPQUFJLEVBQUUsZUFBYSxHQUFFLEdBQUcsSUFBRSxFQUFFLFFBQU8sQ0FBRSxJQUFHLEdBQUUsZUFBYSxLQUFHLEVBQUUsZUFBYSxHQUFHLENBQUMsR0FBRSxFQUFFLFFBQVM7QUFBQyxTQUFPLEVBQUUsUUFBTTtBQUFDO0FBQUUsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEtBQUcsTUFBSSxLQUFHLE1BQUksS0FBRyxNQUFJLEtBQUcsTUFBSSxLQUFHLE1BQUksS0FBRztBQUFHO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLEtBQUcsTUFBSSxLQUFHLEtBQUcsTUFBSSxJQUFFLE1BQUksS0FBRyxNQUFJLEtBQUcsTUFBSSxNQUFJLElBQUUsTUFBSSxJQUFFO0FBQUU7QUFBQyxFQUFFLHNDQUFvQyxTQUFTLEdBQUU7QUFBQyxNQUFHLEtBQUsscUJBQXFCLENBQUMsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFO0FBQWEsUUFBRyxLQUFLLHFCQUFxQixDQUFDLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRTtBQUFhLFdBQUcsS0FBRyxLQUFLLHFCQUFxQixDQUFDLElBQUUsRUFBRSxlQUFhLElBQUUsS0FBRyxJQUFFLElBQUUsRUFBRSxlQUFhLEVBQUUsZUFBYSxJQUFFLElBQUU7QUFBQSxJQUFDLE1BQU0sR0FBRSxlQUFhO0FBQUUsV0FBTTtBQUFBLEVBQUU7QUFBQyxTQUFRO0FBQUE7QUFBRSxFQUFFLHVCQUFxQixTQUFTLEdBQUU7QUFBQyxNQUFJLElBQUUsRUFBRTtBQUFVLFNBQU8sR0FBRyxDQUFDLEtBQUcsRUFBRSxlQUFhLElBQUUsSUFBRyxFQUFFLFFBQU8sR0FBRyxTQUFLLEVBQUUsZUFBYSxHQUFFO0FBQUc7QUFBRSxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sS0FBRyxNQUFJLEtBQUc7QUFBRTtBQUFDLEVBQUUsMkJBQXlCLFNBQVMsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUU7QUFBSSxJQUFFLGVBQWE7QUFBRSxXQUFRLElBQUUsR0FBRSxJQUFFLEdBQUUsRUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEVBQUUsUUFBUztBQUFDLFFBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFPLEVBQUUsTUFBSSxHQUFFO0FBQUcsTUFBRSxlQUFhLEtBQUcsRUFBRSxlQUFhLEdBQUcsQ0FBQyxHQUFFLEVBQUUsUUFBUztBQUFBLEVBQUE7QUFBQyxTQUFNO0FBQUU7QUFBRSxJQUFJLEtBQUcsU0FBUyxHQUFFO0FBQUMs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SyxTQUFTLEVBQUUsUUFBTyxDQUFDLElBQUUsTUFBSSxLQUFHLEtBQUssU0FBUyxFQUFFLFFBQU8sQ0FBQyxJQUFFLEtBQUssU0FBUyxFQUFFLFNBQVEsQ0FBQztBQUFDO0FBQUUsRUFBRSxrQkFBZ0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBSSxDQUFDLEdBQUUsSUFBRTtBQUFFLFNBQU8sTUFBSSxLQUFHLElBQUUsTUFBSSxNQUFJLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBSSxDQUFDLE1BQUksS0FBRyxJQUFFLEdBQUUsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFJLENBQUMsTUFBSSxLQUFHLEtBQUssU0FBUyxFQUFFLFFBQU8sSUFBRSxDQUFDLElBQUUsS0FBSyxTQUFTLEVBQUUsVUFBUyxDQUFDLEtBQUcsTUFBSSxNQUFJLE1BQUksTUFBSSxDQUFDLEtBQUssWUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQUksQ0FBQyxNQUFJLE1BQUksS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFJLENBQUMsTUFBSSxNQUFJLEtBQUssZ0JBQWdCLENBQUMsR0FBRSxLQUFLLFVBQVcsR0FBQyxLQUFLLFVBQVcsTUFBRyxNQUFJLE9BQUssSUFBRSxJQUFHLEtBQUssU0FBUyxFQUFFLFlBQVcsQ0FBQztBQUFFO0FBQUUsRUFBRSxvQkFBa0IsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBSSxDQUFDO0FBQUUsU0FBTyxNQUFJLEtBQUcsS0FBSyxTQUFTLEVBQUUsVUFBUyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQUksQ0FBQyxNQUFJLEtBQUcsSUFBRSxDQUFDLElBQUUsTUFBSSxNQUFJLE1BQUksTUFBSSxLQUFLLFFBQVEsZUFBYSxLQUFHLEtBQUssT0FBSyxHQUFFLEtBQUssWUFBWSxFQUFFLEtBQUssS0FBRyxLQUFLLFNBQVMsTUFBSSxLQUFHLEVBQUUsS0FBRyxFQUFFLFFBQU8sQ0FBQztBQUFDO0FBQUUsRUFBRSxxQkFBbUIsV0FBVTtBQUFDLE1BQUksSUFBRSxLQUFLLFFBQVE7QUFBWSxNQUFHLEtBQUcsSUFBRztBQUFDLFFBQUksSUFBRSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQUksQ0FBQztBQUFFLFFBQUcsTUFBSSxJQUFHO0FBQUMsVUFBSSxJQUFFLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBSSxDQUFDO0FBQUUsVUFBRyxJQUFFLE1BQUksSUFBRSxHQUFHLFFBQU8sS0FBSyxTQUFTLEVBQUUsYUFBWSxDQUFDO0FBQUEsSUFBQztBQUFDLFFBQUcsTUFBSSxJQUFHO0FBQUMsVUFBRyxLQUFHLElBQUc7QUFBQyxZQUFJLElBQUUsS0FBSyxNQUFNLFdBQVcsS0FBSyxNQUFJLENBQUM7QUFBRSxZQUFHLE1BQUksR0FBRyxRQUFPLEtBQUssU0FBUyxFQUFFLFFBQU8sQ0FBQztBQUFBLE1BQUM7QUFBQyxhQUFPLEtBQUssU0FBUyxFQUFFLFVBQVMsQ0FBQztBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUMsU0FBTyxLQUFLLFNBQVMsRUFBRSxVQUFTLENBQUM7QUFBQztBQUFFLEVBQUUsdUJBQXFCLFdBQVU7QUFBQyxNQUFJLElBQUUsS0FBSyxRQUFRLGFBQVksSUFBRTtBQUFHLE1BQUcsS0FBRyxPQUFLLEVBQUUsS0FBSyxLQUFJLElBQUUsS0FBSyxrQkFBaUIsR0FBRyxFQUFFLEdBQUUsSUFBRSxLQUFHLE1BQUksSUFBSSxRQUFPLEtBQUssWUFBWSxFQUFFLFdBQVUsS0FBSyxVQUFTLENBQUU7QUFBRSxPQUFLLE1BQU0sS0FBSyxLQUFJLDJCQUF5QixFQUFFLENBQUMsSUFBRSxHQUFHO0FBQUM7QUFBRSxFQUFFLG1CQUFpQixTQUFTLEdBQUU7QUFBQyxVQUFPLEdBQUc7QUFBQSxJQUFBLEtBQUs7QUFBRyxhQUFPLEtBQUssY0FBYTtBQUFBLElBQUcsS0FBSztBQUFHLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsTUFBTTtBQUFBLElBQUUsS0FBSztBQUFHLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsTUFBTTtBQUFBLElBQUUsS0FBSztBQUFHLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsSUFBSTtBQUFBLElBQUUsS0FBSztBQUFHLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsS0FBSztBQUFBLElBQUUsS0FBSztBQUFHLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsUUFBUTtBQUFBLElBQUUsS0FBSztBQUFHLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsUUFBUTtBQUFBLElBQUUsS0FBSztBQUFJLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsTUFBTTtBQUFBLElBQUUsS0FBSztBQUFJLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsTUFBTTtBQUFBLElBQUUsS0FBSztBQUFHLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsS0FBSztBQUFBLElBQUUsS0FBSztBQUFHLFVBQUcsS0FBSyxRQUFRLGNBQVksRUFBRTtBQUFNLGFBQU0sRUFBRSxLQUFLLEtBQUksS0FBSyxZQUFZLEVBQUUsU0FBUztBQUFBLElBQUUsS0FBSztBQUFHLFVBQUksSUFBRSxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQUksQ0FBQztBQUFFLFVBQUcsTUFBSSxPQUFLLE1BQUksR0FBRyxRQUFPLEtBQUssZ0JBQWdCLEVBQUU7QUFBRSxVQUFHLEtBQUssUUFBUSxlQUFhLEdBQUU7QUFBQyxZQUFHLE1BQUksT0FBSyxNQUFJLEdBQUcsUUFBTyxLQUFLLGdCQUFnQixDQUFDO0FBQUUsWUFBRyxNQUFJLE1BQUksTUFBSSxHQUFHLFFBQU8sS0FBSyxnQkFBZ0IsQ0FBQztBQUFBLE1BQUM7QUFBQSxJQUFDLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJQUFHLEtBQUs7QUFBQSxJ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QUFJLEtBQUc7QUFBRyxJQUFJLEtBQUcsQ0FBQyxHQUFFLEdBQUUsTUFBSTtBQUFDLE1BQUcsRUFBRSxLQUFHLEtBQUcsTUFBTSxRQUFPLE1BQU0sUUFBUSxDQUFDLEtBQUcsT0FBTyxLQUFHLFdBQVMsRUFBRSxJQUFFLElBQUUsRUFBRSxTQUFPLElBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRyxDQUFDO0FBQUMsR0FBRSxJQUFFO0FBQUcsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLE1BQU0sUUFBUSxDQUFDLEtBQUcsRUFBRSxTQUFPO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEVBQUUsR0FBRTtBQUFDLE1BQUksR0FBRSxHQUFFO0FBQUUsTUFBSSxNQUFJLElBQUUsRUFBRSxVQUFRLE9BQUssU0FBTyxFQUFFLENBQUMsTUFBSSxFQUFFLE9BQU0sS0FBRyxNQUFJLElBQUUsRUFBRSxnQkFBYyxPQUFLLFNBQU8sRUFBRSxlQUFhLEVBQUUsZUFBYSxPQUFLLFNBQU8sRUFBRSxDQUFDO0FBQUUsU0FBTyxJQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsR0FBRSxDQUFDLElBQUU7QUFBQztBQUFDLFNBQVMsRUFBRSxHQUFFO0FBQUMsTUFBSTtBQUFFLFdBQVEsSUFBRSxFQUFFLFVBQVEsT0FBSyxTQUFPLEVBQUUsQ0FBQyxNQUFJLEVBQUU7QUFBRztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFLElBQUksSUFBSSxDQUFDO0FBQUUsU0FBTyxPQUFHLEVBQUUsSUFBSSxLQUFHLE9BQUssU0FBTyxFQUFFLElBQUk7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLElBQUksS0FBRyxHQUFHLENBQUMsU0FBUSxnQkFBZSxXQUFXLENBQUMsR0FBRSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFJLElBQUUsSUFBSSxFQUFFLEtBQUssSUFBSSxNQUFNO0FBQUEsQ0FDdjlGO0FBQUUsU0FBTyxFQUFFLFNBQU8sS0FBRyxFQUFFLE1BQU0sT0FBRyxFQUFFLFVBQVMsRUFBRyxDQUFDLE1B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SSxJQUFFLEVBQUUsU0FBUyxDQUFDO0FBQUUsUUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLE1BQUksRUFBRSxTQUFTLE9BQU8sSUFBRSxHQUFFLENBQUMsR0FBRSxFQUFFLFNBQU8sU0FBTyxFQUFFLE9BQU0sRUFBRSxRQUFNLENBQUMsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsSUFBRyxJQUFFO0FBQUEsSUFBQztBQUFBLEVBQUM7QUFBQyxTQUFPLEVBQUUsU0FBTyxjQUFZLEVBQUUsUUFBTSxDQUFDLEdBQUUsRUFBRSxNQUFNLElBQUc7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsU0FBTyxFQUFFLFNBQU8sdUJBQXFCLEVBQUUsTUFBTSxTQUFPLHVCQUFxQixFQUFFLGFBQVcsRUFBRSxNQUFNO0FBQVE7QUFBQyxTQUFTLEdBQUcsR0FBRTtBQUFDLFNBQU8sR0FBRyxDQUFDLElBQUUsR0FBRyxFQUFDLE1BQUsscUJBQW9CLFVBQVMsRUFBRSxVQUFTLE1BQUssR0FBRyxFQUFDLE1BQUsscUJBQW9CLFVBQVMsRUFBRSxVQUFTLE1BQUssRUFBRSxNQUFLLE9BQU0sRUFBRSxNQUFNLE1BQUssT0FBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUUsRUFBRSxFQUFFLE1BQU0sSUFBSSxDQUFDLEVBQUMsQ0FBQyxHQUFFLE9BQU0sRUFBRSxNQUFNLE9BQU0sT0FBTSxDQUFDLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFFO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxJQUFJLEtBQUcsQ0FBQyxHQUFFLEdBQUUsR0FBRSxNQUFJO0FBQUMsTUFBRyxFQUFFLEtBQUcsS0FBRyxNQUFNLFFBQU8sRUFBRSxhQUFXLEVBQUUsV0FBVyxHQUFFLENBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxRQUFRLEdBQUUsQ0FBQyxJQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUMsR0FBRSxLQUFHO0FBQUcsSUFBSSxLQUFHLFNBQVEsS0FBRyxZQUFXLEtBQUcsZ0NBQStCLEtBQUcsMEJBQXlCLEtBQUcsYUFBWSxLQUFHLHFGQUFvRixLQUFHLG9DQUFtQyxLQUFHLG9CQUFtQixLQUFHLENBQUE7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUksSUFBRSxFQUFFLE1BQU0sRUFBRTtBQUFFLFNBQU8sSUFBRSxFQUFFLENBQUMsRUFBRSxVQUFXLElBQUM7QUFBRTtBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBSSxJQUFFO0FBQUE7QUFDdHhlLE1BQUUsR0FBRyxPQUFHLEVBQUUsUUFBUSxJQUFHLEVBQUUsRUFBRSxRQUFRLElBQUcsRUFBRSxHQUFFLElBQUcsSUFBSTtBQUFFLE1BQUksSUFBRTtBQUFHLFNBQUssTUFBSSxJQUFHLEtBQUUsR0FBRSxJQUFFLEdBQUcsT0FBRyxHQUFFLElBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQUUsTUFBRSxFQUFFLFFBQVEsSUFBRyxFQUFFLEVBQUUsUUFBTztBQUFHLE1BQUksSUFBRSx1QkFBTyxPQUFPLElBQUksR0FBRSxJQUFFLEdBQUcsT0FBRyxHQUFFLElBQUcsRUFBRSxFQUFFLFFBQVEsSUFBRyxFQUFFLEVBQUUsUUFBUyxHQUFDO0FBQUUsU0FBSyxJQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUc7QUFBQyxRQUFJLElBQUUsR0FBRyxPQUFHLEVBQUUsQ0FBQyxHQUFFLElBQUcsRUFBRTtBQUFFLFFBQUcsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUcsWUFBVSxNQUFNLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUFFLFFBQUUsRUFBRSxDQUFDLENBQUMsSUFBRSxDQUFDLEdBQUcsSUFBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUUsSUFBRSxDQUFDLENBQUMsR0FBRSxDQUFDO0FBQUEsSUFBQyxNQUFNLEdBQUUsRUFBRSxDQUFDLENBQUMsSUFBRTtBQUFBLEVBQUM7QUFBQyxTQUFNLEVBQUMsVUFBUyxHQUFFLFNBQVEsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLENBQUMsRUFBRSxXQUFXLElBQUksRUFBRSxRQUFNO0FBQUcsTUFBSSxJQUFFLEVBQUUsUUFBUTtBQUFBLENBQ2xkO0FBQUUsU0FBTyxNQUFJLEtBQUcsSUFBRSxFQUFFLE1BQU0sR0FBRSxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUcsR0FBRTtBQUFDLE1BQUksSUFBRSxHQUFHLENBQUM7QUFBRSxRQUFJLElBQUUsRUFBRSxNQUFNLEVBQUUsU0FBTyxDQUFDO0FBQUcsTUFBSSxJQUFFLEdBQUcsQ0FBQyxHQUFFLEVBQUMsU0FBUSxHQUFFLFVBQVMsRUFBQyxJQUFFLEdBQUcsQ0FBQztBQUFFLFNBQU0sRUFBQyxTQUFRLEdBQUUsTUFBSyxHQUFFLFNBQVEsR0FBRSxVQUFTLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxFQUFDLFNBQVEsRUFBQyxJQUFFLEdBQUcsQ0FBQztBQUFFLFNBQU8sT0FBTyxVQUFVLGVBQWUsS0FBSyxHQUFFLFVBQVUsS0FBRyxPQUFPLFVBQVUsZUFBZSxLQUFLLEdBQUUsUUFBUTtBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUU7QUFBQyxTQUFPLElBQUUsT0FBTyxLQUFHLGFBQVcsRUFBQyxPQUFNLEVBQUMsSUFBRSxHQUFFLEVBQUMsV0FBVSxVQUFTLFdBQVUsSUFBRyxVQUFTLEdBQUUsUUFBTyxHQUFFLEdBQUcsRUFBQztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHLEdBQUU7QUFBQyxNQUFHLEVBQUMsVUFBUyxFQUFDLElBQUU7QUFBRSxNQUFHLEdBQUU7QUFBQyxRQUFHLElBQUUsRUFBRSxlQUFjLEVBQUUsU0FBUyxNQUFNLEtBQUcsRUFBRSxTQUFTLE1BQU0sRUFBRSxRQUFNO0FBQVMsUUFBRyxFQUFFLFNBQVMsTUFBTSxL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LE1BQUssTUFBSyxJQUFJLFVBQVM7QUFBQyxTQUFPLEtBQUssYUFBVyxTQUFPLEtBQUssV0FBUyxFQUFFLE9BQU8sR0FBSSxDQUFBLElBQUcsS0FBSztBQUFRLEdBQUUsSUFBSSxNQUFLO0FBQUMsU0FBTyxLQUFLLFNBQU8sU0FBTyxLQUFLLE9BQUssRUFBRSxRQUFVLEdBQUEsR0FBRyxTQUFVLEdBQUMsR0FBRSxDQUFFLElBQUcsS0FBSztBQUFJLEdBQUUsSUFBSSxHQUFFO0FBQUMsU0FBTSxDQUFDLEVBQUUsS0FBRyxFQUFFLGdCQUFjLEVBQUUsYUFBYSxPQUFLLEtBQUssTUFBSSxLQUFLO0FBQU8sRUFBQztBQUFFLFNBQVMsR0FBRyxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsR0FBRyxJQUFJLENBQUM7QUFBRSxTQUFPLElBQUksRUFBRSxHQUFFLENBQUMsRUFBRSxNQUFPO0FBQUE7QUFBQyxJQUFJLEtBQUcsRUFBQyxhQUFZLFVBQVMsT0FBTSxNQUFHLEtBQUksTUFBRyxTQUFRLE1BQUcsUUFBTyxNQUFHLFlBQVcsVUFBUyxjQUFhLEVBQUMsS0FBSSxNQUFHLGNBQWEsTUFBRyxlQUFjLE1BQUUsRUFBQztBQUFFLFNBQVMsR0FBRyxHQUFFO0FBQUMsTUFBRyxFQUFDLFNBQVEsR0FBRSxZQUFXLEdBQUUsUUFBTyxFQUFDLElBQUU7QUFBRSxTQUFPLE9BQU8sS0FBRyxXQUFTLElBQUUsR0FBRyxHQUFFLEVBQUMsS0FBSSxFQUFDLE9BQU0sRUFBQyxNQUFLLEdBQUUsUUFBTyxFQUFDLEVBQUMsR0FBRSxPQUFNLEVBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEdBQUUsSUFBRSxDQUFBLEdBQUc7QUFBQyxNQUFJLElBQUUsR0FBRyxDQUFDLEdBQUUsS0FBRyxJQUFFLENBQUMsQ0FBQyxJQUFFLENBQUMsVUFBUyxRQUFRLEdBQUcsSUFBSSxPQUFHLE1BQUksR0FBRyxHQUFFLEVBQUMsR0FBRyxJQUFHLFlBQVcsRUFBQyxDQUFDLENBQUMsR0FBRTtBQUFFLE1BQUc7QUFBQyxRQUFFLEdBQUcsQ0FBQztBQUFBLEVBQUMsU0FBTyxFQUFDLFFBQU8sQ0FBQyxDQUFDLEVBQUMsR0FBRTtBQUFDLFVBQU0sR0FBRyxDQUFDO0FBQUEsRUFBQztBQUFDLFNBQU8sR0FBRyxHQUFFLEVBQUMsTUFBSyxFQUFDLENBQUM7QUFBQztBQUFDLElBQUksS0FBRyxHQUFHLEVBQUU7QUFBSyxJQUFDLEtBQUcsRUFBQyxPQUFNLElBQUcsUUFBTyxHQUFFO0FBQUssSUFBQyxLQUFHOyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
