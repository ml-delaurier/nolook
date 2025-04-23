var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e2;
var $s = Object.defineProperty;
var Xt = (t22) => {
  throw TypeError(t22);
};
var Jt = (t22, e) => {
  for (var n in e) $s(t22, n, { get: e[n], enumerable: true });
};
var it = (t22, e, n) => e.has(t22) || Xt("Cannot " + n);
var L = (t22, e, n) => (it(t22, e, "read from private field"), n ? n.call(t22) : e.get(t22)), V = (t22, e, n) => e.has(t22) ? Xt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t22) : e.set(t22, n), K = (t22, e, n, s) => (it(t22, e, "write to private field"), e.set(t22, n), n), c = (t22, e, n) => (it(t22, e, "access private method"), n);
var zt = {};
Jt(zt, { parsers: () => jt });
var jt = {};
Jt(jt, { __ng_action: () => Ur, __ng_binding: () => Wr, __ng_directive: () => jr, __ng_interpolation: () => qr });
var Yt;
(function(t22) {
  t22[t22.Emulated = 0] = "Emulated", t22[t22.None = 2] = "None", t22[t22.ShadowDom = 3] = "ShadowDom";
})(Yt || (Yt = {}));
var Qt;
(function(t22) {
  t22[t22.OnPush = 0] = "OnPush", t22[t22.Default = 1] = "Default";
})(Qt || (Qt = {}));
var Kt;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.SignalBased = 1] = "SignalBased", t22[t22.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
})(Kt || (Kt = {}));
var B;
(function(t22) {
  t22[t22.NONE = 0] = "NONE", t22[t22.HTML = 1] = "HTML", t22[t22.STYLE = 2] = "STYLE", t22[t22.SCRIPT = 3] = "SCRIPT", t22[t22.URL = 4] = "URL", t22[t22.RESOURCE_URL = 5] = "RESOURCE_URL";
})(B || (B = {}));
var Zt;
(function(t22) {
  t22[t22.Error = 0] = "Error", t22[t22.Warning = 1] = "Warning", t22[t22.Ignore = 2] = "Ignore";
})(Zt || (Zt = {}));
var en;
(function(t22) {
  t22[t22.Little = 0] = "Little", t22[t22.Big = 1] = "Big";
})(en || (en = {}));
var tn;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.Const = 1] = "Const";
})(tn || (tn = {}));
var nn;
(function(t22) {
  t22[t22.Dynamic = 0] = "Dynamic", t22[t22.Bool = 1] = "Bool", t22[t22.String = 2] = "String", t22[t22.Int = 3] = "Int", t22[t22.Number = 4] = "Number", t22[t22.Function = 5] = "Function", t22[t22.Inferred = 6] = "Inferred", t22[t22.None = 7] = "None";
})(nn || (nn = {}));
var Rs = void 0;
var sn;
(function(t22) {
  t22[t22.Minus = 0] = "Minus", t22[t22.Plus = 1] = "Plus";
})(sn || (sn = {}));
var _;
(function(t22) {
  t22[t22.Equals = 0] = "Equals", t22[t22.NotEquals = 1] = "NotEquals", t22[t22.Identical = 2] = "Identical", t22[t22.NotIdentical = 3] = "NotIdentical", t22[t22.Minus = 4] = "Minus", t22[t22.Plus = 5] = "Plus", t22[t22.Divide = 6] = "Divide", t22[t22.Multiply = 7] = "Multiply", t22[t22.Modulo = 8] = "Modulo", t22[t22.And = 9] = "And", t22[t22.Or = 10] = "Or", t22[t22.BitwiseOr = 11] = "BitwiseOr", t22[t22.BitwiseAnd = 12] = "BitwiseAnd", t22[t22.Lower = 13] = "Lower", t22[t22.LowerEquals = 14] = "LowerEquals", t22[t22.Bigger = 15] = "Bigger", t22[t22.BiggerEquals = 16] = "BiggerEquals", t22[t22.NullishCoalesce = 17] = "NullishCoalesce";
})(_ || (_ = {}));
function Bs(t22, e) {
  return t22 == null || e == null ? t22 == e : t22.isEquivalent(e);
}
function Ds(t22, e, n) {
  let s = t22.length;
  if (s !== e.length) return false;
  for (let r = 0; r < s; r++) if (!n(t22[r], e[r])) return false;
  return true;
}
function tt(t22, e) {
  return Ds(t22, e, (n, s) => n.isEquivalent(s));
}
var k = class {
  constructor(e, n) {
    __publicField(this, "type");
    __publicField(this, "sourceSpan");
    this.type = e || null, this.sourceSpan = n || null;
  }
  prop(e, n) {
    return new gt(this, e, null, n);
  }
  key(e, n, s) {
    return new vt(this, e, n, s);
  }
  callFn(e, n, s) {
    return new Xe(this, e, null, n, s);
  }
  instantiate(e, n, s) {
    return new ft(this, e, n, s);
  }
  conditional(e, n = null, s) {
    return new mt(this, e, n, null, s);
  }
  equals(e, n) {
    return new C(_.Equals, this, e, null, n);
  }
  notEquals(e, n) {
    return new C(_.NotEquals, this, e, null, n);
  }
  identical(e, n) {
    return new C(_.Identical, this, e, null, n);
  }
  notIdentical(e, n) {
    return new C(_.NotIdentical, this, e, null, n);
  }
  minus(e, n) {
    return new C(_.Minus, this, e, null, n);
  }
  plus(e, n) {
    return new C(_.Plus, this, e, null, n);
  }
  divide(e, n) {
    return new C(_.Divide, this, e, null, n);
  }
  multiply(e, n) {
    return new C(_.Multiply, this, e, null, n);
  }
  modulo(e, n) {
    return new C(_.Modulo, this, e, null, n);
  }
  and(e, n) {
    return new C(_.And, this, e, null, n);
  }
  bitwiseOr(e, n, s = true) {
    return new C(_.BitwiseOr, this, e, null, n, s);
  }
  bitwiseAnd(e, n, s = true) {
    return new C(_.BitwiseAnd, this, e, null, n, s);
  }
  or(e, n) {
    return new C(_.Or, this, e, null, n);
  }
  lower(e, n) {
    return new C(_.Lower, this, e, null, n);
  }
  lowerEquals(e, n) {
    return new C(_.LowerEquals, this, e, null, n);
  }
  bigger(e, n) {
    return new C(_.Bigger, this, e, null, n);
  }
  biggerEquals(e, n) {
    return new C(_.BiggerEquals, this, e, null, n);
  }
  isBlank(e) {
    return this.equals(TYPED_NULL_EXPR, e);
  }
  nullishCoalesce(e, n) {
    return new C(_.NullishCoalesce, this, e, null, n);
  }
  toStmt() {
    return new xt(this, null);
  }
}, Ge = class t extends k {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "name");
    this.name = e;
  }
  isEquivalent(e) {
    return e instanceof t && this.name === e.name;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitReadVarExpr(this, n);
  }
  clone() {
    return new t(this.name, this.type, this.sourceSpan);
  }
  set(e) {
    return new ut(this.name, e, null, this.sourceSpan);
  }
}, ct = class t2 extends k {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "expr");
    this.expr = e;
  }
  visitExpression(e, n) {
    return e.visitTypeofExpr(this, n);
  }
  isEquivalent(e) {
    return e instanceof t2 && e.expr.isEquivalent(this.expr);
  }
  isConstant() {
    return this.expr.isConstant();
  }
  clone() {
    return new t2(this.expr.clone());
  }
};
var ut = class t3 extends k {
  constructor(e, n, s, r) {
    super(s || n.type, r);
    __publicField(this, "name");
    __publicField(this, "value");
    this.name = e, this.value = n;
  }
  isEquivalent(e) {
    return e instanceof t3 && this.name === e.name && this.value.isEquivalent(e.value);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitWriteVarExpr(this, n);
  }
  clone() {
    return new t3(this.name, this.value.clone(), this.type, this.sourceSpan);
  }
  toDeclStmt(e, n) {
    return new wt(this.name, this.value, e, n, this.sourceSpan);
  }
  toConstDecl() {
    return this.toDeclStmt(Rs, Ee.Final);
  }
}, pt = class t4 extends k {
  constructor(e, n, s, r, o) {
    super(r || s.type, o);
    __publicField(this, "receiver");
    __publicField(this, "index");
    __publicField(this, "value");
    this.receiver = e, this.index = n, this.value = s;
  }
  isEquivalent(e) {
    return e instanceof t4 && this.receiver.isEquivalent(e.receiver) && this.index.isEquivalent(e.index) && this.value.isEquivalent(e.value);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitWriteKeyExpr(this, n);
  }
  clone() {
    return new t4(this.receiver.clone(), this.index.clone(), this.value.clone(), this.type, this.sourceSpan);
  }
}, ht = class t5 extends k {
  constructor(e, n, s, r, o) {
    super(r || s.type, o);
    __publicField(this, "receiver");
    __publicField(this, "name");
    __publicField(this, "value");
    this.receiver = e, this.name = n, this.value = s;
  }
  isEquivalent(e) {
    return e instanceof t5 && this.receiver.isEquivalent(e.receiver) && this.name === e.name && this.value.isEquivalent(e.value);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitWritePropExpr(this, n);
  }
  clone() {
    return new t5(this.receiver.clone(), this.name, this.value.clone(), this.type, this.sourceSpan);
  }
}, Xe = class t6 extends k {
  constructor(e, n, s, r, o = false) {
    super(s, r);
    __publicField(this, "fn");
    __publicField(this, "args");
    __publicField(this, "pure");
    this.fn = e, this.args = n, this.pure = o;
  }
  get receiver() {
    return this.fn;
  }
  isEquivalent(e) {
    return e instanceof t6 && this.fn.isEquivalent(e.fn) && tt(this.args, e.args) && this.pure === e.pure;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitInvokeFunctionExpr(this, n);
  }
  clone() {
    return new t6(this.fn.clone(), this.args.map((e) => e.clone()), this.type, this.sourceSpan, this.pure);
  }
};
var ft = class t7 extends k {
  constructor(e, n, s, r) {
    super(s, r);
    __publicField(this, "classExpr");
    __publicField(this, "args");
    this.classExpr = e, this.args = n;
  }
  isEquivalent(e) {
    return e instanceof t7 && this.classExpr.isEquivalent(e.classExpr) && tt(this.args, e.args);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitInstantiateExpr(this, n);
  }
  clone() {
    return new t7(this.classExpr.clone(), this.args.map((e) => e.clone()), this.type, this.sourceSpan);
  }
}, Je = class t8 extends k {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "value");
    this.value = e;
  }
  isEquivalent(e) {
    return e instanceof t8 && this.value === e.value;
  }
  isConstant() {
    return true;
  }
  visitExpression(e, n) {
    return e.visitLiteralExpr(this, n);
  }
  clone() {
    return new t8(this.value, this.type, this.sourceSpan);
  }
};
var dt = class t9 extends k {
  constructor(e, n, s = null, r) {
    super(n, r);
    __publicField(this, "value");
    __publicField(this, "typeParams");
    this.value = e, this.typeParams = s;
  }
  isEquivalent(e) {
    return e instanceof t9 && this.value.name === e.value.name && this.value.moduleName === e.value.moduleName;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitExternalExpr(this, n);
  }
  clone() {
    return new t9(this.value, this.type, this.typeParams, this.sourceSpan);
  }
};
var mt = class t10 extends k {
  constructor(e, n, s = null, r, o) {
    super(r || n.type, o);
    __publicField(this, "condition");
    __publicField(this, "falseCase");
    __publicField(this, "trueCase");
    this.condition = e, this.falseCase = s, this.trueCase = n;
  }
  isEquivalent(e) {
    return e instanceof t10 && this.condition.isEquivalent(e.condition) && this.trueCase.isEquivalent(e.trueCase) && Bs(this.falseCase, e.falseCase);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitConditionalExpr(this, n);
  }
  clone() {
    var e;
    return new t10(this.condition.clone(), this.trueCase.clone(), (e = this.falseCase) == null ? void 0 : e.clone(), this.type, this.sourceSpan);
  }
};
var C = class t11 extends k {
  constructor(e, n, s, r, o, a = true) {
    super(r || n.type, o);
    __publicField(this, "operator");
    __publicField(this, "rhs");
    __publicField(this, "parens");
    __publicField(this, "lhs");
    this.operator = e, this.rhs = s, this.parens = a, this.lhs = n;
  }
  isEquivalent(e) {
    return e instanceof t11 && this.operator === e.operator && this.lhs.isEquivalent(e.lhs) && this.rhs.isEquivalent(e.rhs);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitBinaryOperatorExpr(this, n);
  }
  clone() {
    return new t11(this.operator, this.lhs.clone(), this.rhs.clone(), this.type, this.sourceSpan, this.parens);
  }
}, gt = class t12 extends k {
  constructor(e, n, s, r) {
    super(s, r);
    __publicField(this, "receiver");
    __publicField(this, "name");
    this.receiver = e, this.name = n;
  }
  get index() {
    return this.name;
  }
  isEquivalent(e) {
    return e instanceof t12 && this.receiver.isEquivalent(e.receiver) && this.name === e.name;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitReadPropExpr(this, n);
  }
  set(e) {
    return new ht(this.receiver, this.name, e, null, this.sourceSpan);
  }
  clone() {
    return new t12(this.receiver.clone(), this.name, this.type, this.sourceSpan);
  }
}, vt = class t13 extends k {
  constructor(e, n, s, r) {
    super(s, r);
    __publicField(this, "receiver");
    __publicField(this, "index");
    this.receiver = e, this.index = n;
  }
  isEquivalent(e) {
    return e instanceof t13 && this.receiver.isEquivalent(e.receiver) && this.index.isEquivalent(e.index);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitReadKeyExpr(this, n);
  }
  set(e) {
    return new pt(this.receiver, this.index, e, null, this.sourceSpan);
  }
  clone() {
    return new t13(this.receiver.clone(), this.index.clone(), this.type, this.sourceSpan);
  }
}, Ye = class t14 extends k {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "entries");
    this.entries = e;
  }
  isConstant() {
    return this.entries.every((e) => e.isConstant());
  }
  isEquivalent(e) {
    return e instanceof t14 && tt(this.entries, e.entries);
  }
  visitExpression(e, n) {
    return e.visitLiteralArrayExpr(this, n);
  }
  clone() {
    return new t14(this.entries.map((e) => e.clone()), this.type, this.sourceSpan);
  }
};
var Qe = class t15 extends k {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "entries");
    __publicField(this, "valueType", null);
    this.entries = e, n && (this.valueType = n.valueType);
  }
  isEquivalent(e) {
    return e instanceof t15 && tt(this.entries, e.entries);
  }
  isConstant() {
    return this.entries.every((e) => e.value.isConstant());
  }
  visitExpression(e, n) {
    return e.visitLiteralMapExpr(this, n);
  }
  clone() {
    let e = this.entries.map((n) => n.clone());
    return new t15(e, this.type, this.sourceSpan);
  }
};
var Ee;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.Final = 1] = "Final", t22[t22.Private = 2] = "Private", t22[t22.Exported = 4] = "Exported", t22[t22.Static = 8] = "Static";
})(Ee || (Ee = {}));
var Ke = class {
  constructor(e = Ee.None, n = null, s) {
    __publicField(this, "modifiers");
    __publicField(this, "sourceSpan");
    __publicField(this, "leadingComments");
    this.modifiers = e, this.sourceSpan = n, this.leadingComments = s;
  }
  hasModifier(e) {
    return (this.modifiers & e) !== 0;
  }
  addLeadingComment(e) {
    this.leadingComments = this.leadingComments ?? [], this.leadingComments.push(e);
  }
}, wt = class t16 extends Ke {
  constructor(e, n, s, r, o, a) {
    super(r, o, a);
    __publicField(this, "name");
    __publicField(this, "value");
    __publicField(this, "type");
    this.name = e, this.value = n, this.type = s || n && n.type || null;
  }
  isEquivalent(e) {
    return e instanceof t16 && this.name === e.name && (this.value ? !!e.value && this.value.isEquivalent(e.value) : !e.value);
  }
  visitStatement(e, n) {
    return e.visitDeclareVarStmt(this, n);
  }
};
var xt = class t17 extends Ke {
  constructor(e, n, s) {
    super(Ee.None, n, s);
    __publicField(this, "expr");
    this.expr = e;
  }
  isEquivalent(e) {
    return e instanceof t17 && this.expr.isEquivalent(e.expr);
  }
  visitStatement(e, n) {
    return e.visitExpressionStmt(this, n);
  }
};
function Os(t22, e, n) {
  return new Ge(t22, e, n);
}
Os("<unknown>");
_a = class {
  keyOf(e) {
    if (e instanceof Je && typeof e.value == "string") return `"${e.value}"`;
    if (e instanceof Je) return String(e.value);
    if (e instanceof Ye) {
      let n = [];
      for (let s of e.entries) n.push(this.keyOf(s));
      return `[${n.join(",")}]`;
    } else if (e instanceof Qe) {
      let n = [];
      for (let s of e.entries) {
        let r = s.key;
        s.quoted && (r = `"${r}"`), n.push(r + ":" + this.keyOf(s.value));
      }
      return `{${n.join(",")}}`;
    } else {
      if (e instanceof dt) return `import("${e.value.moduleName}", ${e.value.name})`;
      if (e instanceof Ge) return `read(${e.name})`;
      if (e instanceof ct) return `typeof(${this.keyOf(e.expr)})`;
      throw new Error(`${this.constructor.name} does not handle expressions of type ${e.constructor.name}`);
    }
  }
}, __publicField(_a, "INSTANCE", new _a()), _a;
var i = "@angular/core", P = (_b = class {
}, __publicField(_b, "NEW_METHOD", "factory"), __publicField(_b, "TRANSFORM_METHOD", "transform"), __publicField(_b, "PATCH_DEPS", "patchedDeps"), __publicField(_b, "core", { name: null, moduleName: i }), __publicField(_b, "namespaceHTML", { name: "ɵɵnamespaceHTML", moduleName: i }), __publicField(_b, "namespaceMathML", { name: "ɵɵnamespaceMathML", moduleName: i }), __publicField(_b, "namespaceSVG", { name: "ɵɵnamespaceSVG", moduleName: i }), __publicField(_b, "element", { name: "ɵɵelement", moduleName: i }), __publicField(_b, "elementStart", { name: "ɵɵelementStart", moduleName: i }), __publicField(_b, "elementEnd", { name: "ɵɵelementEnd", moduleName: i }), __publicField(_b, "advance", { name: "ɵɵadvance", moduleName: i }), __publicField(_b, "syntheticHostProperty", { name: "ɵɵsyntheticHostProperty", moduleName: i }), __publicField(_b, "syntheticHostListener", { name: "ɵɵsyntheticHostListener", moduleName: i }), __publicField(_b, "attribute", { name: "ɵɵattribute", moduleName: i }), __publicField(_b, "attributeInterpolate1", { name: "ɵɵattributeInterpolate1", moduleName: i }), __publicField(_b, "attributeInterpolate2", { name: "ɵɵattributeInterpolate2", moduleName: i }), __publicField(_b, "attributeInterpolate3", { name: "ɵɵattributeInterpolate3", moduleName: i }), __publicField(_b, "attributeInterpolate4", { name: "ɵɵattributeInterpolate4", moduleName: i }), __publicField(_b, "attributeInterpolate5", { name: "ɵɵattributeInterpolate5", moduleName: i }), __publicField(_b, "attributeInterpolate6", { name: "ɵɵattributeInterpolate6", moduleName: i }), __publicField(_b, "attributeInterpolate7", { name: "ɵɵattributeInterpolate7", moduleName: i }), __publicField(_b, "attributeInterpolate8", { name: "ɵɵattributeInterpolate8", moduleName: i }), __publicField(_b, "attributeInterpolateV", { name: "ɵɵattributeInterpolateV", moduleName: i }), __publicField(_b, "classProp", { name: "ɵɵclassProp", moduleName: i }), __publicField(_b, "elementContainerStart", { name: "ɵɵelementContainerStart", moduleName: i }), __publicField(_b, "elementContainerEnd", { name: "ɵɵelementContainerEnd", moduleName: i }), __publicField(_b, "elementContainer", { name: "ɵɵelementContainer", moduleName: i }), __publicField(_b, "styleMap", { name: "ɵɵstyleMap", moduleName: i }), __publicField(_b, "styleMapInterpolate1", { name: "ɵɵstyleMapInterpolate1", moduleName: i }), __publicField(_b, "styleMapInterpolate2", { name: "ɵɵstyleMapInterpolate2", moduleName: i }), __publicField(_b, "styleMapInterpolate3", { name: "ɵɵstyleMapInterpolate3", moduleName: i }), __publicField(_b, "styleMapInterpolate4", { name: "ɵɵstyleMapInterpolate4", moduleName: i }), __publicField(_b, "styleMapInterpolate5", { name: "ɵɵstyleMapInterpolate5", moduleName: i }), __publicField(_b, "styleMapInterpolate6", { name: "ɵɵstyleMapInterpolate6", moduleName: i }), __publicField(_b, "styleMapInterpolate7", { name: "ɵɵstyleMapInterpolate7", moduleName: i }), __publicField(_b, "styleMapInterpolate8", { name: "ɵɵstyleMapInterpolate8", moduleName: i }), __publicField(_b, "styleMapInterpolateV", { name: "ɵɵstyleMapInterpolateV", moduleName: i }), __publicField(_b, "classMap", { name: "ɵɵclassMap", moduleName: i }), __publicField(_b, "classMapInterpolate1", { name: "ɵɵclassMapInterpolate1", moduleName: i }), __publicField(_b, "classMapInterpolate2", { name: "ɵɵclassMapInterpolate2", moduleName: i }), __publicField(_b, "classMapInterpolate3", { name: "ɵɵclassMapInterpolate3", moduleName: i }), __publicField(_b, "classMapInterpolate4", { name: "ɵɵclassMapInterpolate4", moduleName: i }), __publicField(_b, "classMapInterpolate5", { name: "ɵɵclassMapInterpolate5", moduleName: i }), __publicField(_b, "classMapInterpolate6", { name: "ɵɵclassMapInterpolate6", moduleName: i }), __publicField(_b, "classMapInterpolate7", { name: "ɵɵclassMapInterpolate7", moduleName: i }), __publicField(_b, "classMapInterpolate8", { name: "ɵɵclassMapInterpolate8", moduleName: i }), __publicField(_b, "classMapInterpolateV", { name: "ɵɵclassMapInterpolateV", moduleName: i }), __publicField(_b, "styleProp", { name: "ɵɵstyleProp", moduleName: i }), __publicField(_b, "stylePropInterpolate1", { name: "ɵɵstylePropInterpolate1", moduleName: i }), __publicField(_b, "stylePropInterpolate2", { name: "ɵɵstylePropInterpolate2", moduleName: i }), __publicField(_b, "stylePropInterpolate3", { name: "ɵɵstylePropInterpolate3", moduleName: i }), __publicField(_b, "stylePropInterpolate4", { name: "ɵɵstylePropInterpolate4", moduleName: i }), __publicField(_b, "stylePropInterpolate5", { name: "ɵɵstylePropInterpolate5", moduleName: i }), __publicField(_b, "stylePropInterpolate6", { name: "ɵɵstylePropInterpolate6", moduleName: i }), __publicField(_b, "stylePropInterpolate7", { name: "ɵɵstylePropInterpolate7", moduleName: i }), __publicField(_b, "stylePropInterpolate8", { name: "ɵɵstylePropInterpolate8", moduleName: i }), __publicField(_b, "stylePropInterpolateV", { name: "ɵɵstylePropInterpolateV", moduleName: i }), __publicField(_b, "nextContext", { name: "ɵɵnextContext", moduleName: i }), __publicField(_b, "resetView", { name: "ɵɵresetView", moduleName: i }), __publicField(_b, "templateCreate", { name: "ɵɵtemplate", moduleName: i }), __publicField(_b, "defer", { name: "ɵɵdefer", moduleName: i }), __publicField(_b, "deferWhen", { name: "ɵɵdeferWhen", moduleName: i }), __publicField(_b, "deferOnIdle", { name: "ɵɵdeferOnIdle", moduleName: i }), __publicField(_b, "deferOnImmediate", { name: "ɵɵdeferOnImmediate", moduleName: i }), __publicField(_b, "deferOnTimer", { name: "ɵɵdeferOnTimer", moduleName: i }), __publicField(_b, "deferOnHover", { name: "ɵɵdeferOnHover", moduleName: i }), __publicField(_b, "deferOnInteraction", { name: "ɵɵdeferOnInteraction", moduleName: i }), __publicField(_b, "deferOnViewport", { name: "ɵɵdeferOnViewport", moduleName: i }), __publicField(_b, "deferPrefetchWhen", { name: "ɵɵdeferPrefetchWhen", moduleName: i }), __publicField(_b, "deferPrefetchOnIdle", { name: "ɵɵdeferPrefetchOnIdle", moduleName: i }), __publicField(_b, "deferPrefetchOnImmediate", { name: "ɵɵdeferPrefetchOnImmediate", moduleName: i }), __publicField(_b, "deferPrefetchOnTimer", { name: "ɵɵdeferPrefetchOnTimer", moduleName: i }), __publicField(_b, "deferPrefetchOnHover", { name: "ɵɵdeferPrefetchOnHover", moduleName: i }), __publicField(_b, "deferPrefetchOnInteraction", { name: "ɵɵdeferPrefetchOnInteraction", moduleName: i }), __publicField(_b, "deferPrefetchOnViewport", { name: "ɵɵdeferPrefetchOnViewport", moduleName: i }), __publicField(_b, "deferHydrateWhen", { name: "ɵɵdeferHydrateWhen", moduleName: i }), __publicField(_b, "deferHydrateNever", { name: "ɵɵdeferHydrateNever", moduleName: i }), __publicField(_b, "deferHydrateOnIdle", { name: "ɵɵdeferHydrateOnIdle", moduleName: i }), __publicField(_b, "deferHydrateOnImmediate", { name: "ɵɵdeferHydrateOnImmediate", moduleName: i }), __publicField(_b, "deferHydrateOnTimer", { name: "ɵɵdeferHydrateOnTimer", moduleName: i }), __publicField(_b, "deferHydrateOnHover", { name: "ɵɵdeferHydrateOnHover", moduleName: i }), __publicField(_b, "deferHydrateOnInteraction", { name: "ɵɵdeferHydrateOnInteraction", moduleName: i }), __publicField(_b, "deferHydrateOnViewport", { name: "ɵɵdeferHydrateOnViewport", moduleName: i }), __publicField(_b, "deferEnableTimerScheduling", { name: "ɵɵdeferEnableTimerScheduling", moduleName: i }), __publicField(_b, "conditional", { name: "ɵɵconditional", moduleName: i }), __publicField(_b, "repeater", { name: "ɵɵrepeater", moduleName: i }), __publicField(_b, "repeaterCreate", { name: "ɵɵrepeaterCreate", moduleName: i }), __publicField(_b, "repeaterTrackByIndex", { name: "ɵɵrepeaterTrackByIndex", moduleName: i }), __publicField(_b, "repeaterTrackByIdentity", { name: "ɵɵrepeaterTrackByIdentity", moduleName: i }), __publicField(_b, "componentInstance", { name: "ɵɵcomponentInstance", moduleName: i }), __publicField(_b, "text", { name: "ɵɵtext", moduleName: i }), __publicField(_b, "enableBindings", { name: "ɵɵenableBindings", moduleName: i }), __publicField(_b, "disableBindings", { name: "ɵɵdisableBindings", moduleName: i }), __publicField(_b, "getCurrentView", { name: "ɵɵgetCurrentView", moduleName: i }), __publicField(_b, "textInterpolate", { name: "ɵɵtextInterpolate", moduleName: i }), __publicField(_b, "textInterpolate1", { name: "ɵɵtextInterpolate1", moduleName: i }), __publicField(_b, "textInterpolate2", { name: "ɵɵtextInterpolate2", moduleName: i }), __publicField(_b, "textInterpolate3", { name: "ɵɵtextInterpolate3", moduleName: i }), __publicField(_b, "textInterpolate4", { name: "ɵɵtextInterpolate4", moduleName: i }), __publicField(_b, "textInterpolate5", { name: "ɵɵtextInterpolate5", moduleName: i }), __publicField(_b, "textInterpolate6", { name: "ɵɵtextInterpolate6", moduleName: i }), __publicField(_b, "textInterpolate7", { name: "ɵɵtextInterpolate7", moduleName: i }), __publicField(_b, "textInterpolate8", { name: "ɵɵtextInterpolate8", moduleName: i }), __publicField(_b, "textInterpolateV", { name: "ɵɵtextInterpolateV", moduleName: i }), __publicField(_b, "restoreView", { name: "ɵɵrestoreView", moduleName: i }), __publicField(_b, "pureFunction0", { name: "ɵɵpureFunction0", moduleName: i }), __publicField(_b, "pureFunction1", { name: "ɵɵpureFunction1", moduleName: i }), __publicField(_b, "pureFunction2", { name: "ɵɵpureFunction2", moduleName: i }), __publicField(_b, "pureFunction3", { name: "ɵɵpureFunction3", moduleName: i }), __publicField(_b, "pureFunction4", { name: "ɵɵpureFunction4", moduleName: i }), __publicField(_b, "pureFunction5", { name: "ɵɵpureFunction5", moduleName: i }), __publicField(_b, "pureFunction6", { name: "ɵɵpureFunction6", moduleName: i }), __publicField(_b, "pureFunction7", { name: "ɵɵpureFunction7", moduleName: i }), __publicField(_b, "pureFunction8", { name: "ɵɵpureFunction8", moduleName: i }), __publicField(_b, "pureFunctionV", { name: "ɵɵpureFunctionV", moduleName: i }), __publicField(_b, "pipeBind1", { name: "ɵɵpipeBind1", moduleName: i }), __publicField(_b, "pipeBind2", { name: "ɵɵpipeBind2", moduleName: i }), __publicField(_b, "pipeBind3", { name: "ɵɵpipeBind3", moduleName: i }), __publicField(_b, "pipeBind4", { name: "ɵɵpipeBind4", moduleName: i }), __publicField(_b, "pipeBindV", { name: "ɵɵpipeBindV", moduleName: i }), __publicField(_b, "hostProperty", { name: "ɵɵhostProperty", moduleName: i }), __publicField(_b, "property", { name: "ɵɵproperty", moduleName: i }), __publicField(_b, "propertyInterpolate", { name: "ɵɵpropertyInterpolate", moduleName: i }), __publicField(_b, "propertyInterpolate1", { name: "ɵɵpropertyInterpolate1", moduleName: i }), __publicField(_b, "propertyInterpolate2", { name: "ɵɵpropertyInterpolate2", moduleName: i }), __publicField(_b, "propertyInterpolate3", { name: "ɵɵpropertyInterpolate3", moduleName: i }), __publicField(_b, "propertyInterpolate4", { name: "ɵɵpropertyInterpolate4", moduleName: i }), __publicField(_b, "propertyInterpolate5", { name: "ɵɵpropertyInterpolate5", moduleName: i }), __publicField(_b, "propertyInterpolate6", { name: "ɵɵpropertyInterpolate6", moduleName: i }), __publicField(_b, "propertyInterpolate7", { name: "ɵɵpropertyInterpolate7", moduleName: i }), __publicField(_b, "propertyInterpolate8", { name: "ɵɵpropertyInterpolate8", moduleName: i }), __publicField(_b, "propertyInterpolateV", { name: "ɵɵpropertyInterpolateV", moduleName: i }), __publicField(_b, "i18n", { name: "ɵɵi18n", moduleName: i }), __publicField(_b, "i18nAttributes", { name: "ɵɵi18nAttributes", moduleName: i }), __publicField(_b, "i18nExp", { name: "ɵɵi18nExp", moduleName: i }), __publicField(_b, "i18nStart", { name: "ɵɵi18nStart", moduleName: i }), __publicField(_b, "i18nEnd", { name: "ɵɵi18nEnd", moduleName: i }), __publicField(_b, "i18nApply", { name: "ɵɵi18nApply", moduleName: i }), __publicField(_b, "i18nPostprocess", { name: "ɵɵi18nPostprocess", moduleName: i }), __publicField(_b, "pipe", { name: "ɵɵpipe", moduleName: i }), __publicField(_b, "projection", { name: "ɵɵprojection", moduleName: i }), __publicField(_b, "projectionDef", { name: "ɵɵprojectionDef", moduleName: i }), __publicField(_b, "reference", { name: "ɵɵreference", moduleName: i }), __publicField(_b, "inject", { name: "ɵɵinject", moduleName: i }), __publicField(_b, "injectAttribute", { name: "ɵɵinjectAttribute", moduleName: i }), __publicField(_b, "directiveInject", { name: "ɵɵdirectiveInject", moduleName: i }), __publicField(_b, "invalidFactory", { name: "ɵɵinvalidFactory", moduleName: i }), __publicField(_b, "invalidFactoryDep", { name: "ɵɵinvalidFactoryDep", moduleName: i }), __publicField(_b, "templateRefExtractor", { name: "ɵɵtemplateRefExtractor", moduleName: i }), __publicField(_b, "forwardRef", { name: "forwardRef", moduleName: i }), __publicField(_b, "resolveForwardRef", { name: "resolveForwardRef", moduleName: i }), __publicField(_b, "replaceMetadata", { name: "ɵɵreplaceMetadata", moduleName: i }), __publicField(_b, "ɵɵdefineInjectable", { name: "ɵɵdefineInjectable", moduleName: i }), __publicField(_b, "declareInjectable", { name: "ɵɵngDeclareInjectable", moduleName: i }), __publicField(_b, "InjectableDeclaration", { name: "ɵɵInjectableDeclaration", moduleName: i }), __publicField(_b, "resolveWindow", { name: "ɵɵresolveWindow", moduleName: i }), __publicField(_b, "resolveDocument", { name: "ɵɵresolveDocument", moduleName: i }), __publicField(_b, "resolveBody", { name: "ɵɵresolveBody", moduleName: i }), __publicField(_b, "getComponentDepsFactory", { name: "ɵɵgetComponentDepsFactory", moduleName: i }), __publicField(_b, "defineComponent", { name: "ɵɵdefineComponent", moduleName: i }), __publicField(_b, "declareComponent", { name: "ɵɵngDeclareComponent", moduleName: i }), __publicField(_b, "setComponentScope", { name: "ɵɵsetComponentScope", moduleName: i }), __publicField(_b, "ChangeDetectionStrategy", { name: "ChangeDetectionStrategy", moduleName: i }), __publicField(_b, "ViewEncapsulation", { name: "ViewEncapsulation", moduleName: i }), __publicField(_b, "ComponentDeclaration", { name: "ɵɵComponentDeclaration", moduleName: i }), __publicField(_b, "FactoryDeclaration", { name: "ɵɵFactoryDeclaration", moduleName: i }), __publicField(_b, "declareFactory", { name: "ɵɵngDeclareFactory", moduleName: i }), __publicField(_b, "FactoryTarget", { name: "ɵɵFactoryTarget", moduleName: i }), __publicField(_b, "defineDirective", { name: "ɵɵdefineDirective", moduleName: i }), __publicField(_b, "declareDirective", { name: "ɵɵngDeclareDirective", moduleName: i }), __publicField(_b, "DirectiveDeclaration", { name: "ɵɵDirectiveDeclaration", moduleName: i }), __publicField(_b, "InjectorDef", { name: "ɵɵInjectorDef", moduleName: i }), __publicField(_b, "InjectorDeclaration", { name: "ɵɵInjectorDeclaration", moduleName: i }), __publicField(_b, "defineInjector", { name: "ɵɵdefineInjector", moduleName: i }), __publicField(_b, "declareInjector", { name: "ɵɵngDeclareInjector", moduleName: i }), __publicField(_b, "NgModuleDeclaration", { name: "ɵɵNgModuleDeclaration", moduleName: i }), __publicField(_b, "ModuleWithProviders", { name: "ModuleWithProviders", moduleName: i }), __publicField(_b, "defineNgModule", { name: "ɵɵdefineNgModule", moduleName: i }), __publicField(_b, "declareNgModule", { name: "ɵɵngDeclareNgModule", moduleName: i }), __publicField(_b, "setNgModuleScope", { name: "ɵɵsetNgModuleScope", moduleName: i }), __publicField(_b, "registerNgModuleType", { name: "ɵɵregisterNgModuleType", moduleName: i }), __publicField(_b, "PipeDeclaration", { name: "ɵɵPipeDeclaration", moduleName: i }), __publicField(_b, "definePipe", { name: "ɵɵdefinePipe", moduleName: i }), __publicField(_b, "declarePipe", { name: "ɵɵngDeclarePipe", moduleName: i }), __publicField(_b, "declareClassMetadata", { name: "ɵɵngDeclareClassMetadata", moduleName: i }), __publicField(_b, "declareClassMetadataAsync", { name: "ɵɵngDeclareClassMetadataAsync", moduleName: i }), __publicField(_b, "setClassMetadata", { name: "ɵsetClassMetadata", moduleName: i }), __publicField(_b, "setClassMetadataAsync", { name: "ɵsetClassMetadataAsync", moduleName: i }), __publicField(_b, "setClassDebugInfo", { name: "ɵsetClassDebugInfo", moduleName: i }), __publicField(_b, "queryRefresh", { name: "ɵɵqueryRefresh", moduleName: i }), __publicField(_b, "viewQuery", { name: "ɵɵviewQuery", moduleName: i }), __publicField(_b, "loadQuery", { name: "ɵɵloadQuery", moduleName: i }), __publicField(_b, "contentQuery", { name: "ɵɵcontentQuery", moduleName: i }), __publicField(_b, "viewQuerySignal", { name: "ɵɵviewQuerySignal", moduleName: i }), __publicField(_b, "contentQuerySignal", { name: "ɵɵcontentQuerySignal", moduleName: i }), __publicField(_b, "queryAdvance", { name: "ɵɵqueryAdvance", moduleName: i }), __publicField(_b, "twoWayProperty", { name: "ɵɵtwoWayProperty", moduleName: i }), __publicField(_b, "twoWayBindingSet", { name: "ɵɵtwoWayBindingSet", moduleName: i }), __publicField(_b, "twoWayListener", { name: "ɵɵtwoWayListener", moduleName: i }), __publicField(_b, "declareLet", { name: "ɵɵdeclareLet", moduleName: i }), __publicField(_b, "storeLet", { name: "ɵɵstoreLet", moduleName: i }), __publicField(_b, "readContextLet", { name: "ɵɵreadContextLet", moduleName: i }), __publicField(_b, "attachSourceLocations", { name: "ɵɵattachSourceLocations", moduleName: i }), __publicField(_b, "NgOnChangesFeature", { name: "ɵɵNgOnChangesFeature", moduleName: i }), __publicField(_b, "InheritDefinitionFeature", { name: "ɵɵInheritDefinitionFeature", moduleName: i }), __publicField(_b, "CopyDefinitionFeature", { name: "ɵɵCopyDefinitionFeature", moduleName: i }), __publicField(_b, "ProvidersFeature", { name: "ɵɵProvidersFeature", moduleName: i }), __publicField(_b, "HostDirectivesFeature", { name: "ɵɵHostDirectivesFeature", moduleName: i }), __publicField(_b, "InputTransformsFeatureFeature", { name: "ɵɵInputTransformsFeature", moduleName: i }), __publicField(_b, "ExternalStylesFeature", { name: "ɵɵExternalStylesFeature", moduleName: i }), __publicField(_b, "listener", { name: "ɵɵlistener", moduleName: i }), __publicField(_b, "getInheritedFactory", { name: "ɵɵgetInheritedFactory", moduleName: i }), __publicField(_b, "sanitizeHtml", { name: "ɵɵsanitizeHtml", moduleName: i }), __publicField(_b, "sanitizeStyle", { name: "ɵɵsanitizeStyle", moduleName: i }), __publicField(_b, "sanitizeResourceUrl", { name: "ɵɵsanitizeResourceUrl", moduleName: i }), __publicField(_b, "sanitizeScript", { name: "ɵɵsanitizeScript", moduleName: i }), __publicField(_b, "sanitizeUrl", { name: "ɵɵsanitizeUrl", moduleName: i }), __publicField(_b, "sanitizeUrlOrResourceUrl", { name: "ɵɵsanitizeUrlOrResourceUrl", moduleName: i }), __publicField(_b, "trustConstantHtml", { name: "ɵɵtrustConstantHtml", moduleName: i }), __publicField(_b, "trustConstantResourceUrl", { name: "ɵɵtrustConstantResourceUrl", moduleName: i }), __publicField(_b, "validateIframeAttribute", { name: "ɵɵvalidateIframeAttribute", moduleName: i }), __publicField(_b, "InputSignalBrandWriteType", { name: "ɵINPUT_SIGNAL_BRAND_WRITE_TYPE", moduleName: i }), __publicField(_b, "UnwrapDirectiveSignalInputs", { name: "ɵUnwrapDirectiveSignalInputs", moduleName: i }), __publicField(_b, "unwrapWritableSignal", { name: "ɵunwrapWritableSignal", moduleName: i }), _b);
var St = class {
  constructor(e) {
    __publicField(this, "full");
    __publicField(this, "major");
    __publicField(this, "minor");
    __publicField(this, "patch");
    this.full = e;
    let n = e.split(".");
    this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join(".");
  }
};
var on;
(function(t22) {
  t22[t22.Class = 0] = "Class", t22[t22.Function = 1] = "Function";
})(on || (on = {}));
var an;
(function(t22) {
  t22[t22.Directive = 0] = "Directive", t22[t22.Component = 1] = "Component", t22[t22.Injectable = 2] = "Injectable", t22[t22.Pipe = 3] = "Pipe", t22[t22.NgModule = 4] = "NgModule";
})(an || (an = {}));
var ye = class {
  constructor(e, n, s, r) {
    __publicField(this, "input");
    __publicField(this, "errLocation");
    __publicField(this, "ctxLocation");
    __publicField(this, "message");
    this.input = n, this.errLocation = s, this.ctxLocation = r, this.message = `Parser Error: ${e} ${s} [${n}] in ${r}`;
  }
}, G = class {
  constructor(e, n) {
    __publicField(this, "start");
    __publicField(this, "end");
    this.start = e, this.end = n;
  }
  toAbsolute(e) {
    return new O(e + this.start, e + this.end);
  }
}, E = class {
  constructor(e, n) {
    __publicField(this, "span");
    __publicField(this, "sourceSpan");
    this.span = e, this.sourceSpan = n;
  }
  toString() {
    return "AST";
  }
}, se = class extends E {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "nameSpan");
    this.nameSpan = s;
  }
}, b = class extends E {
  visit(e, n = null) {
  }
}, X = class extends E {
  visit(e, n = null) {
    return e.visitImplicitReceiver(this, n);
  }
}, Et = class extends X {
  visit(e, n = null) {
    var s;
    return (s = e.visitThisReceiver) == null ? void 0 : s.call(e, this, n);
  }
}, _e = class extends E {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expressions");
    this.expressions = s;
  }
  visit(e, n = null) {
    return e.visitChain(this, n);
  }
}, Ce = class extends E {
  constructor(e, n, s, r, o) {
    super(e, n);
    __publicField(this, "condition");
    __publicField(this, "trueExp");
    __publicField(this, "falseExp");
    this.condition = s, this.trueExp = r, this.falseExp = o;
  }
  visit(e, n = null) {
    return e.visitConditional(this, n);
  }
}, re = class extends se {
  constructor(e, n, s, r, o) {
    super(e, n, s);
    __publicField(this, "receiver");
    __publicField(this, "name");
    this.receiver = r, this.name = o;
  }
  visit(e, n = null) {
    return e.visitPropertyRead(this, n);
  }
}, Te = class extends se {
  constructor(e, n, s, r, o, a) {
    super(e, n, s);
    __publicField(this, "receiver");
    __publicField(this, "name");
    __publicField(this, "value");
    this.receiver = r, this.name = o, this.value = a;
  }
  visit(e, n = null) {
    return e.visitPropertyWrite(this, n);
  }
}, ie = class extends se {
  constructor(e, n, s, r, o) {
    super(e, n, s);
    __publicField(this, "receiver");
    __publicField(this, "name");
    this.receiver = r, this.name = o;
  }
  visit(e, n = null) {
    return e.visitSafePropertyRead(this, n);
  }
}, ke = class extends E {
  constructor(e, n, s, r) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "key");
    this.receiver = s, this.key = r;
  }
  visit(e, n = null) {
    return e.visitKeyedRead(this, n);
  }
}, oe = class extends E {
  constructor(e, n, s, r) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "key");
    this.receiver = s, this.key = r;
  }
  visit(e, n = null) {
    return e.visitSafeKeyedRead(this, n);
  }
}, Ie = class extends E {
  constructor(e, n, s, r, o) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "key");
    __publicField(this, "value");
    this.receiver = s, this.key = r, this.value = o;
  }
  visit(e, n = null) {
    return e.visitKeyedWrite(this, n);
  }
}, be = class extends se {
  constructor(e, n, s, r, o, a) {
    super(e, n, a);
    __publicField(this, "exp");
    __publicField(this, "name");
    __publicField(this, "args");
    this.exp = s, this.name = r, this.args = o;
  }
  visit(e, n = null) {
    return e.visitPipe(this, n);
  }
}, N = class extends E {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "value");
    this.value = s;
  }
  visit(e, n = null) {
    return e.visitLiteralPrimitive(this, n);
  }
}, Ne = class extends E {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expressions");
    this.expressions = s;
  }
  visit(e, n = null) {
    return e.visitLiteralArray(this, n);
  }
}, Ae = class extends E {
  constructor(e, n, s, r) {
    super(e, n);
    __publicField(this, "keys");
    __publicField(this, "values");
    this.keys = s, this.values = r;
  }
  visit(e, n = null) {
    return e.visitLiteralMap(this, n);
  }
}, Pe = class extends E {
  constructor(e, n, s, r) {
    super(e, n);
    __publicField(this, "strings");
    __publicField(this, "expressions");
    this.strings = s, this.expressions = r;
  }
  visit(e, n = null) {
    return e.visitInterpolation(this, n);
  }
}, A = class extends E {
  constructor(e, n, s, r, o) {
    super(e, n);
    __publicField(this, "operation");
    __publicField(this, "left");
    __publicField(this, "right");
    this.operation = s, this.left = r, this.right = o;
  }
  visit(e, n = null) {
    return e.visitBinary(this, n);
  }
}, ae = class t18 extends A {
  constructor(e, n, s, r, o, a, l) {
    super(e, n, o, a, l);
    __publicField(this, "operator");
    __publicField(this, "expr");
    __publicField(this, "left", null);
    __publicField(this, "right", null);
    __publicField(this, "operation", null);
    this.operator = s, this.expr = r;
  }
  static createMinus(e, n, s) {
    return new t18(e, n, "-", s, "-", new N(e, n, 0), s);
  }
  static createPlus(e, n, s) {
    return new t18(e, n, "+", s, "-", s, new N(e, n, 0));
  }
  visit(e, n = null) {
    return e.visitUnary !== void 0 ? e.visitUnary(this, n) : e.visitBinary(this, n);
  }
}, Le = class extends E {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitPrefixNot(this, n);
  }
}, Me = class extends E {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitTypeofExpression(this, n);
  }
}, $e = class extends E {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitNonNullAssert(this, n);
  }
}, Re = class extends E {
  constructor(e, n, s, r, o) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "args");
    __publicField(this, "argumentSpan");
    this.receiver = s, this.args = r, this.argumentSpan = o;
  }
  visit(e, n = null) {
    return e.visitCall(this, n);
  }
}, le = class extends E {
  constructor(e, n, s, r, o) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "args");
    __publicField(this, "argumentSpan");
    this.receiver = s, this.args = r, this.argumentSpan = o;
  }
  visit(e, n = null) {
    return e.visitSafeCall(this, n);
  }
}, O = class {
  constructor(e, n) {
    __publicField(this, "start");
    __publicField(this, "end");
    this.start = e, this.end = n;
  }
}, W = class extends E {
  constructor(e, n, s, r, o) {
    super(new G(0, n === null ? 0 : n.length), new O(r, n === null ? r : r + n.length));
    __publicField(this, "ast");
    __publicField(this, "source");
    __publicField(this, "location");
    __publicField(this, "errors");
    this.ast = e, this.source = n, this.location = s, this.errors = o;
  }
  visit(e, n = null) {
    return e.visitASTWithSource ? e.visitASTWithSource(this, n) : this.ast.visit(e, n);
  }
  toString() {
    return `${this.source} in ${this.location}`;
  }
}, ce = class {
  constructor(e, n, s) {
    __publicField(this, "sourceSpan");
    __publicField(this, "key");
    __publicField(this, "value");
    this.sourceSpan = e, this.key = n, this.value = s;
  }
}, Be = class {
  constructor(e, n, s) {
    __publicField(this, "sourceSpan");
    __publicField(this, "key");
    __publicField(this, "value");
    this.sourceSpan = e, this.key = n, this.value = s;
  }
}, yt = class {
  visit(e, n) {
    e.visit(this, n);
  }
  visitUnary(e, n) {
    this.visit(e.expr, n);
  }
  visitBinary(e, n) {
    this.visit(e.left, n), this.visit(e.right, n);
  }
  visitChain(e, n) {
    this.visitAll(e.expressions, n);
  }
  visitConditional(e, n) {
    this.visit(e.condition, n), this.visit(e.trueExp, n), this.visit(e.falseExp, n);
  }
  visitPipe(e, n) {
    this.visit(e.exp, n), this.visitAll(e.args, n);
  }
  visitImplicitReceiver(e, n) {
  }
  visitThisReceiver(e, n) {
  }
  visitInterpolation(e, n) {
    this.visitAll(e.expressions, n);
  }
  visitKeyedRead(e, n) {
    this.visit(e.receiver, n), this.visit(e.key, n);
  }
  visitKeyedWrite(e, n) {
    this.visit(e.receiver, n), this.visit(e.key, n), this.visit(e.value, n);
  }
  visitLiteralArray(e, n) {
    this.visitAll(e.expressions, n);
  }
  visitLiteralMap(e, n) {
    this.visitAll(e.values, n);
  }
  visitLiteralPrimitive(e, n) {
  }
  visitPrefixNot(e, n) {
    this.visit(e.expression, n);
  }
  visitTypeofExpression(e, n) {
    this.visit(e.expression, n);
  }
  visitNonNullAssert(e, n) {
    this.visit(e.expression, n);
  }
  visitPropertyRead(e, n) {
    this.visit(e.receiver, n);
  }
  visitPropertyWrite(e, n) {
    this.visit(e.receiver, n), this.visit(e.value, n);
  }
  visitSafePropertyRead(e, n) {
    this.visit(e.receiver, n);
  }
  visitSafeKeyedRead(e, n) {
    this.visit(e.receiver, n), this.visit(e.key, n);
  }
  visitCall(e, n) {
    this.visit(e.receiver, n), this.visitAll(e.args, n);
  }
  visitSafeCall(e, n) {
    this.visit(e.receiver, n), this.visitAll(e.args, n);
  }
  visitAll(e, n) {
    for (let s of e) this.visit(s, n);
  }
};
var ln;
(function(t22) {
  t22[t22.DEFAULT = 0] = "DEFAULT", t22[t22.LITERAL_ATTR = 1] = "LITERAL_ATTR", t22[t22.ANIMATION = 2] = "ANIMATION", t22[t22.TWO_WAY = 3] = "TWO_WAY";
})(ln || (ln = {}));
var cn;
(function(t22) {
  t22[t22.Regular = 0] = "Regular", t22[t22.Animation = 1] = "Animation", t22[t22.TwoWay = 2] = "TwoWay";
})(cn || (cn = {}));
var H;
(function(t22) {
  t22[t22.Property = 0] = "Property", t22[t22.Attribute = 1] = "Attribute", t22[t22.Class = 2] = "Class", t22[t22.Style = 3] = "Style", t22[t22.Animation = 4] = "Animation", t22[t22.TwoWay = 5] = "TwoWay";
})(H || (H = {}));
var un;
(function(t22) {
  t22[t22.RAW_TEXT = 0] = "RAW_TEXT", t22[t22.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t22[t22.PARSABLE_DATA = 2] = "PARSABLE_DATA";
})(un || (un = {}));
var Fs = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function Vs(t22, e) {
  if (e != null && !(Array.isArray(e) && e.length == 2)) throw new Error(`Expected '${t22}' to be an array, [start, end].`);
  if (e != null) {
    let n = e[0], s = e[1];
    Fs.forEach((r) => {
      if (r.test(n) || r.test(s)) throw new Error(`['${n}', '${s}'] contains unusable interpolation symbol.`);
    });
  }
}
var _t = class t19 {
  constructor(e, n) {
    __publicField(this, "start");
    __publicField(this, "end");
    this.start = e, this.end = n;
  }
  static fromArray(e) {
    return e ? (Vs("interpolation", e), new t19(e[0], e[1])) : Z;
  }
}, Z = new _t("{{", "}}");
var ot = 0;
var Un = 9, Hs = 10, Us = 11, Ws = 12, qs = 13, Wn = 32, js = 33, qn = 34, zs = 35, jn = 36, Gs = 37, pn = 38, zn = 39, je = 40, me = 41, Xs = 42, Gn = 43, ge = 44, Xn = 45, ee = 46, Ct = 47, te = 58, ve = 59, Js = 60, qe = 61, Ys = 62, hn = 63, Qs = 48;
var Ks = 57, Jn = 65, Zs = 69;
var Yn = 90, ze = 91, er = 92, we = 93, tr = 94, Mt = 95, Qn = 97;
var nr = 101, sr = 102, rr = 110, ir = 114, or = 116, ar = 117, lr = 118;
var Kn = 122, Tt = 123, fn = 124, xe = 125, Zn = 160;
var cr = 96;
function ur(t22) {
  return t22 >= Un && t22 <= Wn || t22 == Zn;
}
function j(t22) {
  return Qs <= t22 && t22 <= Ks;
}
function pr(t22) {
  return t22 >= Qn && t22 <= Kn || t22 >= Jn && t22 <= Yn;
}
function dn(t22) {
  return t22 === zn || t22 === qn || t22 === cr;
}
var mn;
(function(t22) {
  t22[t22.WARNING = 0] = "WARNING", t22[t22.ERROR = 1] = "ERROR";
})(mn || (mn = {}));
var gn;
(function(t22) {
  t22[t22.Inline = 0] = "Inline", t22[t22.SideEffect = 1] = "SideEffect", t22[t22.Omit = 2] = "Omit";
})(gn || (gn = {}));
var vn;
(function(t22) {
  t22[t22.Global = 0] = "Global", t22[t22.Local = 1] = "Local";
})(vn || (vn = {}));
var wn;
(function(t22) {
  t22[t22.Directive = 0] = "Directive", t22[t22.Pipe = 1] = "Pipe", t22[t22.NgModule = 2] = "NgModule";
})(wn || (wn = {}));
var f;
(function(t22) {
  t22[t22.ListEnd = 0] = "ListEnd", t22[t22.Statement = 1] = "Statement", t22[t22.Variable = 2] = "Variable", t22[t22.ElementStart = 3] = "ElementStart", t22[t22.Element = 4] = "Element", t22[t22.Template = 5] = "Template", t22[t22.ElementEnd = 6] = "ElementEnd", t22[t22.ContainerStart = 7] = "ContainerStart", t22[t22.Container = 8] = "Container", t22[t22.ContainerEnd = 9] = "ContainerEnd", t22[t22.DisableBindings = 10] = "DisableBindings", t22[t22.Conditional = 11] = "Conditional", t22[t22.EnableBindings = 12] = "EnableBindings", t22[t22.Text = 13] = "Text", t22[t22.Listener = 14] = "Listener", t22[t22.InterpolateText = 15] = "InterpolateText", t22[t22.Binding = 16] = "Binding", t22[t22.Property = 17] = "Property", t22[t22.StyleProp = 18] = "StyleProp", t22[t22.ClassProp = 19] = "ClassProp", t22[t22.StyleMap = 20] = "StyleMap", t22[t22.ClassMap = 21] = "ClassMap", t22[t22.Advance = 22] = "Advance", t22[t22.Pipe = 23] = "Pipe", t22[t22.Attribute = 24] = "Attribute", t22[t22.ExtractedAttribute = 25] = "ExtractedAttribute", t22[t22.Defer = 26] = "Defer", t22[t22.DeferOn = 27] = "DeferOn", t22[t22.DeferWhen = 28] = "DeferWhen", t22[t22.I18nMessage = 29] = "I18nMessage", t22[t22.HostProperty = 30] = "HostProperty", t22[t22.Namespace = 31] = "Namespace", t22[t22.ProjectionDef = 32] = "ProjectionDef", t22[t22.Projection = 33] = "Projection", t22[t22.RepeaterCreate = 34] = "RepeaterCreate", t22[t22.Repeater = 35] = "Repeater", t22[t22.TwoWayProperty = 36] = "TwoWayProperty", t22[t22.TwoWayListener = 37] = "TwoWayListener", t22[t22.DeclareLet = 38] = "DeclareLet", t22[t22.StoreLet = 39] = "StoreLet", t22[t22.I18nStart = 40] = "I18nStart", t22[t22.I18n = 41] = "I18n", t22[t22.I18nEnd = 42] = "I18nEnd", t22[t22.I18nExpression = 43] = "I18nExpression", t22[t22.I18nApply = 44] = "I18nApply", t22[t22.IcuStart = 45] = "IcuStart", t22[t22.IcuEnd = 46] = "IcuEnd", t22[t22.IcuPlaceholder = 47] = "IcuPlaceholder", t22[t22.I18nContext = 48] = "I18nContext", t22[t22.I18nAttributes = 49] = "I18nAttributes", t22[t22.SourceLocation = 50] = "SourceLocation";
})(f || (f = {}));
var J;
(function(t22) {
  t22[t22.LexicalRead = 0] = "LexicalRead", t22[t22.Context = 1] = "Context", t22[t22.TrackContext = 2] = "TrackContext", t22[t22.ReadVariable = 3] = "ReadVariable", t22[t22.NextContext = 4] = "NextContext", t22[t22.Reference = 5] = "Reference", t22[t22.StoreLet = 6] = "StoreLet", t22[t22.ContextLetReference = 7] = "ContextLetReference", t22[t22.GetCurrentView = 8] = "GetCurrentView", t22[t22.RestoreView = 9] = "RestoreView", t22[t22.ResetView = 10] = "ResetView", t22[t22.PureFunctionExpr = 11] = "PureFunctionExpr", t22[t22.PureFunctionParameterExpr = 12] = "PureFunctionParameterExpr", t22[t22.PipeBinding = 13] = "PipeBinding", t22[t22.PipeBindingVariadic = 14] = "PipeBindingVariadic", t22[t22.SafePropertyRead = 15] = "SafePropertyRead", t22[t22.SafeKeyedRead = 16] = "SafeKeyedRead", t22[t22.SafeInvokeFunction = 17] = "SafeInvokeFunction", t22[t22.SafeTernaryExpr = 18] = "SafeTernaryExpr", t22[t22.EmptyExpr = 19] = "EmptyExpr", t22[t22.AssignTemporaryExpr = 20] = "AssignTemporaryExpr", t22[t22.ReadTemporaryExpr = 21] = "ReadTemporaryExpr", t22[t22.SlotLiteralExpr = 22] = "SlotLiteralExpr", t22[t22.ConditionalCase = 23] = "ConditionalCase", t22[t22.ConstCollected = 24] = "ConstCollected", t22[t22.TwoWayBindingSet = 25] = "TwoWayBindingSet";
})(J || (J = {}));
var xn;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.AlwaysInline = 1] = "AlwaysInline";
})(xn || (xn = {}));
var Sn;
(function(t22) {
  t22[t22.Context = 0] = "Context", t22[t22.Identifier = 1] = "Identifier", t22[t22.SavedView = 2] = "SavedView", t22[t22.Alias = 3] = "Alias";
})(Sn || (Sn = {}));
var En;
(function(t22) {
  t22[t22.Normal = 0] = "Normal", t22[t22.TemplateDefinitionBuilder = 1] = "TemplateDefinitionBuilder";
})(En || (En = {}));
var U;
(function(t22) {
  t22[t22.Attribute = 0] = "Attribute", t22[t22.ClassName = 1] = "ClassName", t22[t22.StyleProperty = 2] = "StyleProperty", t22[t22.Property = 3] = "Property", t22[t22.Template = 4] = "Template", t22[t22.I18n = 5] = "I18n", t22[t22.Animation = 6] = "Animation", t22[t22.TwoWayProperty = 7] = "TwoWayProperty";
})(U || (U = {}));
var yn;
(function(t22) {
  t22[t22.Creation = 0] = "Creation", t22[t22.Postproccessing = 1] = "Postproccessing";
})(yn || (yn = {}));
var _n;
(function(t22) {
  t22[t22.I18nText = 0] = "I18nText", t22[t22.I18nAttribute = 1] = "I18nAttribute";
})(_n || (_n = {}));
var Cn;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.ElementTag = 1] = "ElementTag", t22[t22.TemplateTag = 2] = "TemplateTag", t22[t22.OpenTag = 4] = "OpenTag", t22[t22.CloseTag = 8] = "CloseTag", t22[t22.ExpressionIndex = 16] = "ExpressionIndex";
})(Cn || (Cn = {}));
var Tn;
(function(t22) {
  t22[t22.HTML = 0] = "HTML", t22[t22.SVG = 1] = "SVG", t22[t22.Math = 2] = "Math";
})(Tn || (Tn = {}));
var kn;
(function(t22) {
  t22[t22.Idle = 0] = "Idle", t22[t22.Immediate = 1] = "Immediate", t22[t22.Timer = 2] = "Timer", t22[t22.Hover = 3] = "Hover", t22[t22.Interaction = 4] = "Interaction", t22[t22.Viewport = 5] = "Viewport", t22[t22.Never = 6] = "Never";
})(kn || (kn = {}));
var In;
(function(t22) {
  t22[t22.RootI18n = 0] = "RootI18n", t22[t22.Icu = 1] = "Icu", t22[t22.Attr = 2] = "Attr";
})(In || (In = {}));
var bn;
(function(t22) {
  t22[t22.NgTemplate = 0] = "NgTemplate", t22[t22.Structural = 1] = "Structural", t22[t22.Block = 2] = "Block";
})(bn || (bn = {}));
var Oe = Symbol("ConsumesVars"), Rt = Symbol("UsesVarOffset");
var Ze = class {
  constructor(e, n, s) {
    __publicField(this, "strings");
    __publicField(this, "expressions");
    __publicField(this, "i18nPlaceholders");
    if (this.strings = e, this.expressions = n, this.i18nPlaceholders = s, s.length !== 0 && s.length !== n.length) throw new Error(`Expected ${n.length} placeholders to match interpolation expression count, but got ${s.length}`);
  }
};
var Y = class extends k {
  constructor(e = null) {
    super(null, e);
  }
};
var kt = class t20 extends (_e2 = Y, _d = Oe, _c = Rt, _e2) {
  constructor(e, n, s, r) {
    super();
    __publicField(this, "target");
    __publicField(this, "targetSlot");
    __publicField(this, "name");
    __publicField(this, "args");
    __publicField(this, "kind", J.PipeBinding);
    __publicField(this, _d, true);
    __publicField(this, _c, true);
    __publicField(this, "varOffset", null);
    this.target = e, this.targetSlot = n, this.name = s, this.args = r;
  }
  visitExpression(e, n) {
    for (let s of this.args) s.visitExpression(e, n);
  }
  isEquivalent() {
    return false;
  }
  isConstant() {
    return false;
  }
  transformInternalExpressions(e, n) {
    for (let s = 0; s < this.args.length; s++) this.args[s] = (this.args[s], void 0);
  }
  clone() {
    let e = new t20(this.target, this.targetSlot, this.name, this.args.map((n) => n.clone()));
    return e.varOffset = this.varOffset, e;
  }
};
var It = class t21 extends Y {
  constructor(e, n) {
    super();
    __publicField(this, "receiver");
    __publicField(this, "args");
    __publicField(this, "kind", J.SafeInvokeFunction);
    this.receiver = e, this.args = n;
  }
  visitExpression(e, n) {
    this.receiver.visitExpression(e, n);
    for (let s of this.args) s.visitExpression(e, n);
  }
  isEquivalent() {
    return false;
  }
  isConstant() {
    return false;
  }
  transformInternalExpressions(e, n) {
    this.receiver = (this.receiver, void 0);
    for (let s = 0; s < this.args.length; s++) this.args[s] = (this.args[s], void 0);
  }
  clone() {
    return new t21(this.receiver.clone(), this.args.map((e) => e.clone()));
  }
};
var bt;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.InChildOperation = 1] = "InChildOperation";
})(bt || (bt = {}));
/* @__PURE__ */ new Set([f.Element, f.ElementStart, f.Container, f.ContainerStart, f.Template, f.RepeaterCreate]);
var Ln;
(function(t22) {
  t22[t22.Tmpl = 0] = "Tmpl", t22[t22.Host = 1] = "Host", t22[t22.Both = 2] = "Both";
})(Ln || (Ln = {}));
/* @__PURE__ */ new Map([[f.ElementEnd, [f.ElementStart, f.Element]], [f.ContainerEnd, [f.ContainerStart, f.Container]], [f.I18nEnd, [f.I18nStart, f.I18n]]]);
/* @__PURE__ */ new Set([f.Pipe]);
[Xe, Ye, Qe, It, kt].map((t22) => t22.constructor.name);
var Mn;
(function(t22) {
  t22.HEX = "hexadecimal", t22.DEC = "decimal";
})(Mn || (Mn = {}));
var d;
(function(t22) {
  t22[t22.Character = 0] = "Character", t22[t22.Identifier = 1] = "Identifier", t22[t22.PrivateIdentifier = 2] = "PrivateIdentifier", t22[t22.Keyword = 3] = "Keyword", t22[t22.String = 4] = "String", t22[t22.Operator = 5] = "Operator", t22[t22.Number = 6] = "Number", t22[t22.Error = 7] = "Error";
})(d || (d = {}));
var Sr = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this", "typeof"], De = class {
  tokenize(e) {
    let n = new Nt(e), s = [], r = n.scanToken();
    for (; r != null; ) s.push(r), r = n.scanToken();
    return s;
  }
}, M = class {
  constructor(e, n, s, r, o) {
    __publicField(this, "index");
    __publicField(this, "end");
    __publicField(this, "type");
    __publicField(this, "numValue");
    __publicField(this, "strValue");
    this.index = e, this.end = n, this.type = s, this.numValue = r, this.strValue = o;
  }
  isCharacter(e) {
    return this.type == d.Character && this.numValue == e;
  }
  isNumber() {
    return this.type == d.Number;
  }
  isString() {
    return this.type == d.String;
  }
  isOperator(e) {
    return this.type == d.Operator && this.strValue == e;
  }
  isIdentifier() {
    return this.type == d.Identifier;
  }
  isPrivateIdentifier() {
    return this.type == d.PrivateIdentifier;
  }
  isKeyword() {
    return this.type == d.Keyword;
  }
  isKeywordLet() {
    return this.type == d.Keyword && this.strValue == "let";
  }
  isKeywordAs() {
    return this.type == d.Keyword && this.strValue == "as";
  }
  isKeywordNull() {
    return this.type == d.Keyword && this.strValue == "null";
  }
  isKeywordUndefined() {
    return this.type == d.Keyword && this.strValue == "undefined";
  }
  isKeywordTrue() {
    return this.type == d.Keyword && this.strValue == "true";
  }
  isKeywordFalse() {
    return this.type == d.Keyword && this.strValue == "false";
  }
  isKeywordThis() {
    return this.type == d.Keyword && this.strValue == "this";
  }
  isKeywordTypeof() {
    return this.type === d.Keyword && this.strValue === "typeof";
  }
  isError() {
    return this.type == d.Error;
  }
  toNumber() {
    return this.type == d.Number ? this.numValue : -1;
  }
  toString() {
    switch (this.type) {
      case d.Character:
      case d.Identifier:
      case d.Keyword:
      case d.Operator:
      case d.PrivateIdentifier:
      case d.String:
      case d.Error:
        return this.strValue;
      case d.Number:
        return this.numValue.toString();
      default:
        return null;
    }
  }
};
function $n(t22, e, n) {
  return new M(t22, e, d.Character, n, String.fromCharCode(n));
}
function Er(t22, e, n) {
  return new M(t22, e, d.Identifier, 0, n);
}
function yr(t22, e, n) {
  return new M(t22, e, d.PrivateIdentifier, 0, n);
}
function _r(t22, e, n) {
  return new M(t22, e, d.Keyword, 0, n);
}
function at(t22, e, n) {
  return new M(t22, e, d.Operator, 0, n);
}
function Cr(t22, e, n) {
  return new M(t22, e, d.String, 0, n);
}
function Tr(t22, e, n) {
  return new M(t22, e, d.Number, n, "");
}
function kr(t22, e, n) {
  return new M(t22, e, d.Error, 0, n);
}
var lt = new M(-1, -1, d.Character, 0, ""), Nt = class {
  constructor(e) {
    __publicField(this, "input");
    __publicField(this, "length");
    __publicField(this, "peek", 0);
    __publicField(this, "index", -1);
    this.input = e, this.length = e.length, this.advance();
  }
  advance() {
    this.peek = ++this.index >= this.length ? ot : this.input.charCodeAt(this.index);
  }
  scanToken() {
    let e = this.input, n = this.length, s = this.peek, r = this.index;
    for (; s <= Wn; ) if (++r >= n) {
      s = ot;
      break;
    } else s = e.charCodeAt(r);
    if (this.peek = s, this.index = r, r >= n) return null;
    if (Rn(s)) return this.scanIdentifier();
    if (j(s)) return this.scanNumber(r);
    let o = r;
    switch (s) {
      case ee:
        return this.advance(), j(this.peek) ? this.scanNumber(o) : $n(o, this.index, ee);
      case je:
      case me:
      case Tt:
      case xe:
      case ze:
      case we:
      case ge:
      case te:
      case ve:
        return this.scanCharacter(o, s);
      case zn:
      case qn:
        return this.scanString();
      case zs:
        return this.scanPrivateIdentifier();
      case Gn:
      case Xn:
      case Xs:
      case Ct:
      case Gs:
      case tr:
        return this.scanOperator(o, String.fromCharCode(s));
      case hn:
        return this.scanQuestion(o);
      case Js:
      case Ys:
        return this.scanComplexOperator(o, String.fromCharCode(s), qe, "=");
      case js:
      case qe:
        return this.scanComplexOperator(o, String.fromCharCode(s), qe, "=", qe, "=");
      case pn:
        return this.scanComplexOperator(o, "&", pn, "&");
      case fn:
        return this.scanComplexOperator(o, "|", fn, "|");
      case Zn:
        for (; ur(this.peek); ) this.advance();
        return this.scanToken();
    }
    return this.advance(), this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0);
  }
  scanCharacter(e, n) {
    return this.advance(), $n(e, this.index, n);
  }
  scanOperator(e, n) {
    return this.advance(), at(e, this.index, n);
  }
  scanComplexOperator(e, n, s, r, o, a) {
    this.advance();
    let l = n;
    return this.peek == s && (this.advance(), l += r), o != null && this.peek == o && (this.advance(), l += a), at(e, this.index, l);
  }
  scanIdentifier() {
    let e = this.index;
    for (this.advance(); Bn(this.peek); ) this.advance();
    let n = this.input.substring(e, this.index);
    return Sr.indexOf(n) > -1 ? _r(e, this.index, n) : Er(e, this.index, n);
  }
  scanPrivateIdentifier() {
    let e = this.index;
    if (this.advance(), !Rn(this.peek)) return this.error("Invalid character [#]", -1);
    for (; Bn(this.peek); ) this.advance();
    let n = this.input.substring(e, this.index);
    return yr(e, this.index, n);
  }
  scanNumber(e) {
    let n = this.index === e, s = false;
    for (this.advance(); ; ) {
      if (!j(this.peek)) if (this.peek === Mt) {
        if (!j(this.input.charCodeAt(this.index - 1)) || !j(this.input.charCodeAt(this.index + 1))) return this.error("Invalid numeric separator", 0);
        s = true;
      } else if (this.peek === ee) n = false;
      else if (Ir(this.peek)) {
        if (this.advance(), br(this.peek) && this.advance(), !j(this.peek)) return this.error("Invalid exponent", -1);
        n = false;
      } else break;
      this.advance();
    }
    let r = this.input.substring(e, this.index);
    s && (r = r.replace(/_/g, ""));
    let o = n ? Ar(r) : parseFloat(r);
    return Tr(e, this.index, o);
  }
  scanString() {
    let e = this.index, n = this.peek;
    this.advance();
    let s = "", r = this.index, o = this.input;
    for (; this.peek != n; ) if (this.peek == er) {
      s += o.substring(r, this.index);
      let l;
      if (this.advance(), this.peek == ar) {
        let u = o.substring(this.index + 1, this.index + 5);
        if (/^[0-9a-f]+$/i.test(u)) l = parseInt(u, 16);
        else return this.error(`Invalid unicode escape [\\u${u}]`, 0);
        for (let h = 0; h < 5; h++) this.advance();
      } else l = Nr(this.peek), this.advance();
      s += String.fromCharCode(l), r = this.index;
    } else {
      if (this.peek == ot) return this.error("Unterminated quote", 0);
      this.advance();
    }
    let a = o.substring(r, this.index);
    return this.advance(), Cr(e, this.index, s + a);
  }
  scanQuestion(e) {
    this.advance();
    let n = "?";
    return (this.peek === hn || this.peek === ee) && (n += this.peek === ee ? "." : "?", this.advance()), at(e, this.index, n);
  }
  error(e, n) {
    let s = this.index + n;
    return kr(s, this.index, `Lexer Error: ${e} at column ${s} in expression [${this.input}]`);
  }
};
function Rn(t22) {
  return Qn <= t22 && t22 <= Kn || Jn <= t22 && t22 <= Yn || t22 == Mt || t22 == jn;
}
function Bn(t22) {
  return pr(t22) || j(t22) || t22 == Mt || t22 == jn;
}
function Ir(t22) {
  return t22 == nr || t22 == Zs;
}
function br(t22) {
  return t22 == Xn || t22 == Gn;
}
function Nr(t22) {
  switch (t22) {
    case rr:
      return Hs;
    case sr:
      return Ws;
    case ir:
      return qs;
    case or:
      return Un;
    case lr:
      return Us;
    default:
      return t22;
  }
}
function Ar(t22) {
  let e = parseInt(t22);
  if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t22);
  return e;
}
var At = class {
  constructor(e, n, s) {
    __publicField(this, "strings");
    __publicField(this, "expressions");
    __publicField(this, "offsets");
    this.strings = e, this.expressions = n, this.offsets = s;
  }
}, Pt = class {
  constructor(e, n, s) {
    __publicField(this, "templateBindings");
    __publicField(this, "warnings");
    __publicField(this, "errors");
    this.templateBindings = e, this.warnings = n, this.errors = s;
  }
}, ue = class {
  constructor(e) {
    __publicField(this, "_lexer");
    __publicField(this, "errors", []);
    this._lexer = e;
  }
  parseAction(e, n, s, r = Z) {
    this._checkNoInterpolation(e, n, r);
    let o = this._stripComments(e), a = this._lexer.tokenize(o), l = new z(e, n, s, a, 1, this.errors, 0).parseChain();
    return new W(l, e, n, s, this.errors);
  }
  parseBinding(e, n, s, r = Z) {
    let o = this._parseBindingAst(e, n, s, r);
    return new W(o, e, n, s, this.errors);
  }
  checkSimpleExpression(e) {
    let n = new Lt();
    return e.visit(n), n.errors;
  }
  parseSimpleBinding(e, n, s, r = Z) {
    let o = this._parseBindingAst(e, n, s, r), a = this.checkSimpleExpression(o);
    return a.length > 0 && this._reportError(`Host binding expression cannot contain ${a.join(" ")}`, e, n), new W(o, e, n, s, this.errors);
  }
  _reportError(e, n, s, r) {
    this.errors.push(new ye(e, n, s, r));
  }
  _parseBindingAst(e, n, s, r) {
    this._checkNoInterpolation(e, n, r);
    let o = this._stripComments(e), a = this._lexer.tokenize(o);
    return new z(e, n, s, a, 0, this.errors, 0).parseChain();
  }
  parseTemplateBindings(e, n, s, r, o) {
    let a = this._lexer.tokenize(n);
    return new z(n, s, o, a, 0, this.errors, 0).parseTemplateBindings({ source: e, span: new O(r, r + e.length) });
  }
  parseInterpolation(e, n, s, r, o = Z) {
    let { strings: a, expressions: l, offsets: u } = this.splitInterpolation(e, n, r, o);
    if (l.length === 0) return null;
    let h = [];
    for (let g = 0; g < l.length; ++g) {
      let S = l[g].text, w = this._stripComments(S), y = this._lexer.tokenize(w), T = new z(e, n, s, y, 0, this.errors, u[g]).parseChain();
      h.push(T);
    }
    return this.createInterpolationAst(a.map((g) => g.text), h, e, n, s);
  }
  parseInterpolationExpression(e, n, s) {
    let r = this._stripComments(e), o = this._lexer.tokenize(r), a = new z(e, n, s, o, 0, this.errors, 0).parseChain(), l = ["", ""];
    return this.createInterpolationAst(l, [a], e, n, s);
  }
  createInterpolationAst(e, n, s, r, o) {
    let a = new G(0, s.length), l = new Pe(a, a.toAbsolute(o), e, n);
    return new W(l, s, r, o, this.errors);
  }
  splitInterpolation(e, n, s, r = Z) {
    let o = [], a = [], l = [], u = s ? Pr(s) : null, h = 0, g = false, S = false, { start: w, end: y } = r;
    for (; h < e.length; ) if (g) {
      let T = h, F = T + w.length, fe = this._getInterpolationEndIndex(e, y, F);
      if (fe === -1) {
        g = false, S = true;
        break;
      }
      let de = fe + y.length, q = e.substring(F, fe);
      q.trim().length === 0 && this._reportError("Blank expressions are not allowed in interpolated strings", e, `at column ${h} in`, n), a.push({ text: q, start: T, end: de });
      let Ms = ((u == null ? void 0 : u.get(T)) ?? T) + w.length;
      l.push(Ms), h = de, g = false;
    } else {
      let T = h;
      h = e.indexOf(w, h), h === -1 && (h = e.length);
      let F = e.substring(T, h);
      o.push({ text: F, start: T, end: h }), g = true;
    }
    if (!g) if (S) {
      let T = o[o.length - 1];
      T.text += e.substring(h), T.end = e.length;
    } else o.push({ text: e.substring(h), start: h, end: e.length });
    return new At(o, a, l);
  }
  wrapLiteralPrimitive(e, n, s) {
    let r = new G(0, e == null ? 0 : e.length);
    return new W(new N(r, r.toAbsolute(s), e), e, n, s, this.errors);
  }
  _stripComments(e) {
    let n = this._commentStart(e);
    return n != null ? e.substring(0, n) : e;
  }
  _commentStart(e) {
    let n = null;
    for (let s = 0; s < e.length - 1; s++) {
      let r = e.charCodeAt(s), o = e.charCodeAt(s + 1);
      if (r === Ct && o == Ct && n == null) return s;
      n === r ? n = null : n == null && dn(r) && (n = r);
    }
    return null;
  }
  _checkNoInterpolation(e, n, { start: s, end: r }) {
    let o = -1, a = -1;
    for (let l of this._forEachUnquotedChar(e, 0)) if (o === -1) e.startsWith(s) && (o = l);
    else if (a = this._getInterpolationEndIndex(e, r, l), a > -1) break;
    o > -1 && a > -1 && this._reportError(`Got interpolation (${s}${r}) where expression was expected`, e, `at column ${o} in`, n);
  }
  _getInterpolationEndIndex(e, n, s) {
    for (let r of this._forEachUnquotedChar(e, s)) {
      if (e.startsWith(n, r)) return r;
      if (e.startsWith("//", r)) return e.indexOf(n, r);
    }
    return -1;
  }
  *_forEachUnquotedChar(e, n) {
    let s = null, r = 0;
    for (let o = n; o < e.length; o++) {
      let a = e[o];
      dn(e.charCodeAt(o)) && (s === null || s === a) && r % 2 === 0 ? s = s === null ? a : null : s === null && (yield o), r = a === "\\" ? r + 1 : 0;
    }
  }
}, ne;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.Writable = 1] = "Writable";
})(ne || (ne = {}));
var z = class {
  constructor(e, n, s, r, o, a, l) {
    __publicField(this, "input");
    __publicField(this, "location");
    __publicField(this, "absoluteOffset");
    __publicField(this, "tokens");
    __publicField(this, "parseFlags");
    __publicField(this, "errors");
    __publicField(this, "offset");
    __publicField(this, "rparensExpected", 0);
    __publicField(this, "rbracketsExpected", 0);
    __publicField(this, "rbracesExpected", 0);
    __publicField(this, "context", ne.None);
    __publicField(this, "sourceSpanCache", /* @__PURE__ */ new Map());
    __publicField(this, "index", 0);
    this.input = e, this.location = n, this.absoluteOffset = s, this.tokens = r, this.parseFlags = o, this.errors = a, this.offset = l;
  }
  peek(e) {
    let n = this.index + e;
    return n < this.tokens.length ? this.tokens[n] : lt;
  }
  get next() {
    return this.peek(0);
  }
  get atEOF() {
    return this.index >= this.tokens.length;
  }
  get inputIndex() {
    return this.atEOF ? this.currentEndIndex : this.next.index + this.offset;
  }
  get currentEndIndex() {
    return this.index > 0 ? this.peek(-1).end + this.offset : this.tokens.length === 0 ? this.input.length + this.offset : this.next.index + this.offset;
  }
  get currentAbsoluteOffset() {
    return this.absoluteOffset + this.inputIndex;
  }
  span(e, n) {
    let s = this.currentEndIndex;
    if (n !== void 0 && n > this.currentEndIndex && (s = n), e > s) {
      let r = s;
      s = e, e = r;
    }
    return new G(e, s);
  }
  sourceSpan(e, n) {
    let s = `${e}@${this.inputIndex}:${n}`;
    return this.sourceSpanCache.has(s) || this.sourceSpanCache.set(s, this.span(e, n).toAbsolute(this.absoluteOffset)), this.sourceSpanCache.get(s);
  }
  advance() {
    this.index++;
  }
  withContext(e, n) {
    this.context |= e;
    let s = n();
    return this.context ^= e, s;
  }
  consumeOptionalCharacter(e) {
    return this.next.isCharacter(e) ? (this.advance(), true) : false;
  }
  peekKeywordLet() {
    return this.next.isKeywordLet();
  }
  peekKeywordAs() {
    return this.next.isKeywordAs();
  }
  expectCharacter(e) {
    this.consumeOptionalCharacter(e) || this.error(`Missing expected ${String.fromCharCode(e)}`);
  }
  consumeOptionalOperator(e) {
    return this.next.isOperator(e) ? (this.advance(), true) : false;
  }
  expectOperator(e) {
    this.consumeOptionalOperator(e) || this.error(`Missing expected operator ${e}`);
  }
  prettyPrintToken(e) {
    return e === lt ? "end of input" : `token ${e}`;
  }
  expectIdentifierOrKeyword() {
    let e = this.next;
    return !e.isIdentifier() && !e.isKeyword() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier or keyword") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier or keyword`), null) : (this.advance(), e.toString());
  }
  expectIdentifierOrKeywordOrString() {
    let e = this.next;
    return !e.isIdentifier() && !e.isKeyword() && !e.isString() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier, keyword or string") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier, keyword, or string`), "") : (this.advance(), e.toString());
  }
  parseChain() {
    let e = [], n = this.inputIndex;
    for (; this.index < this.tokens.length; ) {
      let s = this.parsePipe();
      if (e.push(s), this.consumeOptionalCharacter(ve)) for (this.parseFlags & 1 || this.error("Binding expression cannot contain chained expression"); this.consumeOptionalCharacter(ve); ) ;
      else if (this.index < this.tokens.length) {
        let r = this.index;
        if (this.error(`Unexpected token '${this.next}'`), this.index === r) break;
      }
    }
    if (e.length === 0) {
      let s = this.offset, r = this.offset + this.input.length;
      return new b(this.span(s, r), this.sourceSpan(s, r));
    }
    return e.length == 1 ? e[0] : new _e(this.span(n), this.sourceSpan(n), e);
  }
  parsePipe() {
    let e = this.inputIndex, n = this.parseExpression();
    if (this.consumeOptionalOperator("|")) {
      this.parseFlags & 1 && this.error("Cannot have a pipe in an action expression");
      do {
        let s = this.inputIndex, r = this.expectIdentifierOrKeyword(), o, a;
        r !== null ? o = this.sourceSpan(s) : (r = "", a = this.next.index !== -1 ? this.next.index : this.input.length + this.offset, o = new G(a, a).toAbsolute(this.absoluteOffset));
        let l = [];
        for (; this.consumeOptionalCharacter(te); ) l.push(this.parseExpression());
        n = new be(this.span(e), this.sourceSpan(e, a), n, r, l, o);
      } while (this.consumeOptionalOperator("|"));
    }
    return n;
  }
  parseExpression() {
    return this.parseConditional();
  }
  parseConditional() {
    let e = this.inputIndex, n = this.parseLogicalOr();
    if (this.consumeOptionalOperator("?")) {
      let s = this.parsePipe(), r;
      if (this.consumeOptionalCharacter(te)) r = this.parsePipe();
      else {
        let o = this.inputIndex, a = this.input.substring(e, o);
        this.error(`Conditional expression ${a} requires all 3 expressions`), r = new b(this.span(e), this.sourceSpan(e));
      }
      return new Ce(this.span(e), this.sourceSpan(e), n, s, r);
    } else return n;
  }
  parseLogicalOr() {
    let e = this.inputIndex, n = this.parseLogicalAnd();
    for (; this.consumeOptionalOperator("||"); ) {
      let s = this.parseLogicalAnd();
      n = new A(this.span(e), this.sourceSpan(e), "||", n, s);
    }
    return n;
  }
  parseLogicalAnd() {
    let e = this.inputIndex, n = this.parseNullishCoalescing();
    for (; this.consumeOptionalOperator("&&"); ) {
      let s = this.parseNullishCoalescing();
      n = new A(this.span(e), this.sourceSpan(e), "&&", n, s);
    }
    return n;
  }
  parseNullishCoalescing() {
    let e = this.inputIndex, n = this.parseEquality();
    for (; this.consumeOptionalOperator("??"); ) {
      let s = this.parseEquality();
      n = new A(this.span(e), this.sourceSpan(e), "??", n, s);
    }
    return n;
  }
  parseEquality() {
    let e = this.inputIndex, n = this.parseRelational();
    for (; this.next.type == d.Operator; ) {
      let s = this.next.strValue;
      switch (s) {
        case "==":
        case "===":
        case "!=":
        case "!==":
          this.advance();
          let r = this.parseRelational();
          n = new A(this.span(e), this.sourceSpan(e), s, n, r);
          continue;
      }
      break;
    }
    return n;
  }
  parseRelational() {
    let e = this.inputIndex, n = this.parseAdditive();
    for (; this.next.type == d.Operator; ) {
      let s = this.next.strValue;
      switch (s) {
        case "<":
        case ">":
        case "<=":
        case ">=":
          this.advance();
          let r = this.parseAdditive();
          n = new A(this.span(e), this.sourceSpan(e), s, n, r);
          continue;
      }
      break;
    }
    return n;
  }
  parseAdditive() {
    let e = this.inputIndex, n = this.parseMultiplicative();
    for (; this.next.type == d.Operator; ) {
      let s = this.next.strValue;
      switch (s) {
        case "+":
        case "-":
          this.advance();
          let r = this.parseMultiplicative();
          n = new A(this.span(e), this.sourceSpan(e), s, n, r);
          continue;
      }
      break;
    }
    return n;
  }
  parseMultiplicative() {
    let e = this.inputIndex, n = this.parsePrefix();
    for (; this.next.type == d.Operator; ) {
      let s = this.next.strValue;
      switch (s) {
        case "*":
        case "%":
        case "/":
          this.advance();
          let r = this.parsePrefix();
          n = new A(this.span(e), this.sourceSpan(e), s, n, r);
          continue;
      }
      break;
    }
    return n;
  }
  parsePrefix() {
    if (this.next.type == d.Operator) {
      let e = this.inputIndex, n = this.next.strValue, s;
      switch (n) {
        case "+":
          return this.advance(), s = this.parsePrefix(), ae.createPlus(this.span(e), this.sourceSpan(e), s);
        case "-":
          return this.advance(), s = this.parsePrefix(), ae.createMinus(this.span(e), this.sourceSpan(e), s);
        case "!":
          return this.advance(), s = this.parsePrefix(), new Le(this.span(e), this.sourceSpan(e), s);
      }
    } else if (this.next.isKeywordTypeof()) {
      this.advance();
      let e = this.inputIndex, n = this.parsePrefix();
      return new Me(this.span(e), this.sourceSpan(e), n);
    }
    return this.parseCallChain();
  }
  parseCallChain() {
    let e = this.inputIndex, n = this.parsePrimary();
    for (; ; ) if (this.consumeOptionalCharacter(ee)) n = this.parseAccessMember(n, e, false);
    else if (this.consumeOptionalOperator("?.")) this.consumeOptionalCharacter(je) ? n = this.parseCall(n, e, true) : n = this.consumeOptionalCharacter(ze) ? this.parseKeyedReadOrWrite(n, e, true) : this.parseAccessMember(n, e, true);
    else if (this.consumeOptionalCharacter(ze)) n = this.parseKeyedReadOrWrite(n, e, false);
    else if (this.consumeOptionalCharacter(je)) n = this.parseCall(n, e, false);
    else if (this.consumeOptionalOperator("!")) n = new $e(this.span(e), this.sourceSpan(e), n);
    else return n;
  }
  parsePrimary() {
    let e = this.inputIndex;
    if (this.consumeOptionalCharacter(je)) {
      this.rparensExpected++;
      let n = this.parsePipe();
      return this.rparensExpected--, this.expectCharacter(me), n;
    } else {
      if (this.next.isKeywordNull()) return this.advance(), new N(this.span(e), this.sourceSpan(e), null);
      if (this.next.isKeywordUndefined()) return this.advance(), new N(this.span(e), this.sourceSpan(e), void 0);
      if (this.next.isKeywordTrue()) return this.advance(), new N(this.span(e), this.sourceSpan(e), true);
      if (this.next.isKeywordFalse()) return this.advance(), new N(this.span(e), this.sourceSpan(e), false);
      if (this.next.isKeywordThis()) return this.advance(), new Et(this.span(e), this.sourceSpan(e));
      if (this.consumeOptionalCharacter(ze)) {
        this.rbracketsExpected++;
        let n = this.parseExpressionList(we);
        return this.rbracketsExpected--, this.expectCharacter(we), new Ne(this.span(e), this.sourceSpan(e), n);
      } else {
        if (this.next.isCharacter(Tt)) return this.parseLiteralMap();
        if (this.next.isIdentifier()) return this.parseAccessMember(new X(this.span(e), this.sourceSpan(e)), e, false);
        if (this.next.isNumber()) {
          let n = this.next.toNumber();
          return this.advance(), new N(this.span(e), this.sourceSpan(e), n);
        } else if (this.next.isString()) {
          let n = this.next.toString();
          return this.advance(), new N(this.span(e), this.sourceSpan(e), n);
        } else return this.next.isPrivateIdentifier() ? (this._reportErrorForPrivateIdentifier(this.next, null), new b(this.span(e), this.sourceSpan(e))) : this.index >= this.tokens.length ? (this.error(`Unexpected end of expression: ${this.input}`), new b(this.span(e), this.sourceSpan(e))) : (this.error(`Unexpected token ${this.next}`), new b(this.span(e), this.sourceSpan(e)));
      }
    }
  }
  parseExpressionList(e) {
    let n = [];
    do
      if (!this.next.isCharacter(e)) n.push(this.parsePipe());
      else break;
    while (this.consumeOptionalCharacter(ge));
    return n;
  }
  parseLiteralMap() {
    let e = [], n = [], s = this.inputIndex;
    if (this.expectCharacter(Tt), !this.consumeOptionalCharacter(xe)) {
      this.rbracesExpected++;
      do {
        let r = this.inputIndex, o = this.next.isString(), a = this.expectIdentifierOrKeywordOrString(), l = { key: a, quoted: o };
        if (e.push(l), o) this.expectCharacter(te), n.push(this.parsePipe());
        else if (this.consumeOptionalCharacter(te)) n.push(this.parsePipe());
        else {
          l.isShorthandInitialized = true;
          let u = this.span(r), h = this.sourceSpan(r);
          n.push(new re(u, h, h, new X(u, h), a));
        }
      } while (this.consumeOptionalCharacter(ge) && !this.next.isCharacter(xe));
      this.rbracesExpected--, this.expectCharacter(xe);
    }
    return new Ae(this.span(s), this.sourceSpan(s), e, n);
  }
  parseAccessMember(e, n, s) {
    let r = this.inputIndex, o = this.withContext(ne.Writable, () => {
      let u = this.expectIdentifierOrKeyword() ?? "";
      return u.length === 0 && this.error("Expected identifier for property access", e.span.end), u;
    }), a = this.sourceSpan(r), l;
    if (s) this.consumeOptionalOperator("=") ? (this.error("The '?.' operator cannot be used in the assignment"), l = new b(this.span(n), this.sourceSpan(n))) : l = new ie(this.span(n), this.sourceSpan(n), a, e, o);
    else if (this.consumeOptionalOperator("=")) {
      if (!(this.parseFlags & 1)) return this.error("Bindings cannot contain assignments"), new b(this.span(n), this.sourceSpan(n));
      let u = this.parseConditional();
      l = new Te(this.span(n), this.sourceSpan(n), a, e, o, u);
    } else l = new re(this.span(n), this.sourceSpan(n), a, e, o);
    return l;
  }
  parseCall(e, n, s) {
    let r = this.inputIndex;
    this.rparensExpected++;
    let o = this.parseCallArguments(), a = this.span(r, this.inputIndex).toAbsolute(this.absoluteOffset);
    this.expectCharacter(me), this.rparensExpected--;
    let l = this.span(n), u = this.sourceSpan(n);
    return s ? new le(l, u, e, o, a) : new Re(l, u, e, o, a);
  }
  parseCallArguments() {
    if (this.next.isCharacter(me)) return [];
    let e = [];
    do
      e.push(this.parsePipe());
    while (this.consumeOptionalCharacter(ge));
    return e;
  }
  expectTemplateBindingKey() {
    let e = "", n = false, s = this.currentAbsoluteOffset;
    do
      e += this.expectIdentifierOrKeywordOrString(), n = this.consumeOptionalOperator("-"), n && (e += "-");
    while (n);
    return { source: e, span: new O(s, s + e.length) };
  }
  parseTemplateBindings(e) {
    let n = [];
    for (n.push(...this.parseDirectiveKeywordBindings(e)); this.index < this.tokens.length; ) {
      let s = this.parseLetBinding();
      if (s) n.push(s);
      else {
        let r = this.expectTemplateBindingKey(), o = this.parseAsBinding(r);
        o ? n.push(o) : (r.source = e.source + r.source.charAt(0).toUpperCase() + r.source.substring(1), n.push(...this.parseDirectiveKeywordBindings(r)));
      }
      this.consumeStatementTerminator();
    }
    return new Pt(n, [], this.errors);
  }
  parseKeyedReadOrWrite(e, n, s) {
    return this.withContext(ne.Writable, () => {
      this.rbracketsExpected++;
      let r = this.parsePipe();
      if (r instanceof b && this.error("Key access cannot be empty"), this.rbracketsExpected--, this.expectCharacter(we), this.consumeOptionalOperator("=")) if (s) this.error("The '?.' operator cannot be used in the assignment");
      else {
        let o = this.parseConditional();
        return new Ie(this.span(n), this.sourceSpan(n), e, r, o);
      }
      else return s ? new oe(this.span(n), this.sourceSpan(n), e, r) : new ke(this.span(n), this.sourceSpan(n), e, r);
      return new b(this.span(n), this.sourceSpan(n));
    });
  }
  parseDirectiveKeywordBindings(e) {
    let n = [];
    this.consumeOptionalCharacter(te);
    let s = this.getDirectiveBoundTarget(), r = this.currentAbsoluteOffset, o = this.parseAsBinding(e);
    o || (this.consumeStatementTerminator(), r = this.currentAbsoluteOffset);
    let a = new O(e.span.start, r);
    return n.push(new Be(a, e, s)), o && n.push(o), n;
  }
  getDirectiveBoundTarget() {
    if (this.next === lt || this.peekKeywordAs() || this.peekKeywordLet()) return null;
    let e = this.parsePipe(), { start: n, end: s } = e.span, r = this.input.substring(n, s);
    return new W(e, r, this.location, this.absoluteOffset + n, this.errors);
  }
  parseAsBinding(e) {
    if (!this.peekKeywordAs()) return null;
    this.advance();
    let n = this.expectTemplateBindingKey();
    this.consumeStatementTerminator();
    let s = new O(e.span.start, this.currentAbsoluteOffset);
    return new ce(s, n, e);
  }
  parseLetBinding() {
    if (!this.peekKeywordLet()) return null;
    let e = this.currentAbsoluteOffset;
    this.advance();
    let n = this.expectTemplateBindingKey(), s = null;
    this.consumeOptionalOperator("=") && (s = this.expectTemplateBindingKey()), this.consumeStatementTerminator();
    let r = new O(e, this.currentAbsoluteOffset);
    return new ce(r, n, s);
  }
  consumeStatementTerminator() {
    this.consumeOptionalCharacter(ve) || this.consumeOptionalCharacter(ge);
  }
  error(e, n = null) {
    this.errors.push(new ye(e, this.input, this.locationText(n), this.location)), this.skip();
  }
  locationText(e = null) {
    return e == null && (e = this.index), e < this.tokens.length ? `at column ${this.tokens[e].index + 1} in` : "at the end of the expression";
  }
  _reportErrorForPrivateIdentifier(e, n) {
    let s = `Private identifiers are not supported. Unexpected private identifier: ${e}`;
    n !== null && (s += `, ${n}`), this.error(s);
  }
  skip() {
    let e = this.next;
    for (; this.index < this.tokens.length && !e.isCharacter(ve) && !e.isOperator("|") && (this.rparensExpected <= 0 || !e.isCharacter(me)) && (this.rbracesExpected <= 0 || !e.isCharacter(xe)) && (this.rbracketsExpected <= 0 || !e.isCharacter(we)) && (!(this.context & ne.Writable) || !e.isOperator("=")); ) this.next.isError() && this.errors.push(new ye(this.next.toString(), this.input, this.locationText(), this.location)), this.advance(), e = this.next;
  }
}, Lt = class extends yt {
  constructor() {
    super(...arguments);
    __publicField(this, "errors", []);
  }
  visitPipe() {
    this.errors.push("pipes");
  }
};
function Pr(t22) {
  let e = /* @__PURE__ */ new Map(), n = 0, s = 0, r = 0;
  for (; r < t22.length; ) {
    let o = t22[r];
    if (o.type === 9) {
      let [a, l] = o.parts;
      n += l.length, s += a.length;
    } else {
      let a = o.parts.reduce((l, u) => l + u.length, 0);
      s += a, n += a;
    }
    e.set(s, n), r++;
  }
  return e;
}
var Lr = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" }));
Array.from(Lr).reduce((t22, [e, n]) => (t22.set(e, n), t22), /* @__PURE__ */ new Map());
function D(t22) {
  return (e) => e.kind === t22;
}
function Se(t22, e) {
  return (n) => n.kind === t22 && e === n.expression instanceof Ze;
}
function Mr(t22) {
  return (t22.kind === f.Property || t22.kind === f.TwoWayProperty) && !(t22.expression instanceof Ze);
}
[{ test: D(f.StyleMap), transform: et }, { test: D(f.ClassMap), transform: et }, { test: D(f.StyleProp) }, { test: D(f.ClassProp) }, { test: Se(f.Attribute, true) }, { test: Se(f.Property, true) }, { test: Mr }, { test: Se(f.Attribute, false) }];
[{ test: Se(f.HostProperty, true) }, { test: Se(f.HostProperty, false) }, { test: D(f.Attribute) }, { test: D(f.StyleMap), transform: et }, { test: D(f.ClassMap), transform: et }, { test: D(f.StyleProp) }, { test: D(f.ClassProp) }];
/* @__PURE__ */ new Set([f.Listener, f.TwoWayListener, f.StyleMap, f.ClassMap, f.StyleProp, f.ClassProp, f.Property, f.TwoWayProperty, f.HostProperty, f.Attribute]);
function et(t22) {
  return t22.slice(t22.length - 1);
}
/* @__PURE__ */ new Map([[B.HTML, P.sanitizeHtml], [B.RESOURCE_URL, P.sanitizeResourceUrl], [B.SCRIPT, P.sanitizeScript], [B.STYLE, P.sanitizeStyle], [B.URL, P.sanitizeUrl]]);
/* @__PURE__ */ new Map([[B.HTML, P.trustConstantHtml], [B.RESOURCE_URL, P.trustConstantResourceUrl]]);
var Dn;
(function(t22) {
  t22[t22.None = 0] = "None", t22[t22.ViewContextRead = 1] = "ViewContextRead", t22[t22.ViewContextWrite = 2] = "ViewContextWrite", t22[t22.SideEffectful = 4] = "SideEffectful";
})(Dn || (Dn = {}));
/* @__PURE__ */ new Map([[H.Property, U.Property], [H.TwoWay, U.TwoWayProperty], [H.Attribute, U.Attribute], [H.Class, U.ClassName], [H.Style, U.StyleProperty], [H.Animation, U.Animation]]);
var On;
(function(t22) {
  t22[t22.NG_CONTENT = 0] = "NG_CONTENT", t22[t22.STYLE = 1] = "STYLE", t22[t22.STYLESHEET = 2] = "STYLESHEET", t22[t22.SCRIPT = 3] = "SCRIPT", t22[t22.OTHER = 4] = "OTHER";
})(On || (On = {}));
var Fn;
(function(t22) {
  t22.IDLE = "idle", t22.TIMER = "timer", t22.INTERACTION = "interaction", t22.IMMEDIATE = "immediate", t22.HOVER = "hover", t22.VIEWPORT = "viewport", t22.NEVER = "never";
})(Fn || (Fn = {}));
new St("19.1.2");
var Vn;
(function(t22) {
  t22[t22.Extract = 0] = "Extract", t22[t22.Merge = 1] = "Merge";
})(Vn || (Vn = {}));
var Hn;
(function(t22) {
  t22[t22.Directive = 0] = "Directive", t22[t22.Component = 1] = "Component", t22[t22.Injectable = 2] = "Injectable", t22[t22.Pipe = 3] = "Pipe", t22[t22.NgModule = 4] = "NgModule";
})(Hn || (Hn = {}));
function os({ start: t22, end: e }, n) {
  let s = t22, r = e;
  for (; r !== s && /\s/.test(n[r - 1]); ) r--;
  for (; s !== r && /\s/.test(n[s]); ) s++;
  return { start: s, end: r };
}
function Rr({ start: t22, end: e }, n) {
  let s = t22, r = e;
  for (; r !== n.length && /\s/.test(n[r]); ) r++;
  for (; s !== 0 && /\s/.test(n[s - 1]); ) s--;
  return { start: s, end: r };
}
function Br(t22, e) {
  return e[t22.start - 1] === "(" && e[t22.end] === ")" ? { start: t22.start - 1, end: t22.end + 1 } : t22;
}
function as(t22, e, n) {
  let s = 0, r = { start: t22.start, end: t22.end };
  for (; ; ) {
    let o = Rr(r, e), a = Br(o, e);
    if (o.start === a.start && o.end === a.end) break;
    r.start = a.start, r.end = a.end, s++;
  }
  return { hasParens: (n ? s - 1 : s) !== 0, outerSpan: os(n ? { start: r.start + 1, end: r.end - 1 } : r, e), innerSpan: os(t22, e) };
}
function ls(t22) {
  return typeof t22 == "string" ? (e) => e === t22 : (e) => t22.test(e);
}
function cs(t22, e, n) {
  let s = ls(e);
  for (let r = n; r >= 0; r--) {
    let o = t22[r];
    if (s(o)) return r;
  }
  throw new Error(`Cannot find front char ${e} from index ${n} in ${JSON.stringify(t22)}`);
}
function us(t22, e, n) {
  let s = ls(e);
  for (let r = n; r < t22.length; r++) {
    let o = t22[r];
    if (s(o)) return r;
  }
  throw new Error(`Cannot find character ${e} from index ${n} in ${JSON.stringify(t22)}`);
}
function ps(t22) {
  return t22.slice(0, 1).toLowerCase() + t22.slice(1);
}
function Fe(t22) {
  let { start: e, end: n } = t22;
  return { start: e, end: n, range: [e, n] };
}
var Dr = (t22) => ue.prototype._commentStart(t22);
function Or(t22, e) {
  let n = e ? Dr(t22) : null;
  if (n === null) return { text: t22, comments: [] };
  let s = { type: "CommentLine", value: t22.slice(n + 2), ...Fe({ start: n, end: t22.length }) };
  return { text: t22.slice(0, n), comments: [s] };
}
function Ve(t22, e = true) {
  return (n) => {
    let s = new De(), r = new ue(s), { text: o, comments: a } = Or(n, e), l = t22(o, r);
    if (l.errors.length !== 0) {
      let [{ message: u }] = l.errors;
      throw new SyntaxError(u.replace(/^Parser Error: | at column \d+ in [^]*$/g, ""));
    }
    return { result: l, comments: a, text: o };
  };
}
var hs = Ve((t22, e) => e.parseBinding(t22, "", 0)), fs = Ve((t22, e) => e.parseAction(t22, "", 0)), ds = Ve((t22, e) => e.parseInterpolationExpression(t22, "", 0)), ms = Ve((t22, e) => e.parseTemplateBindings("", t22, "", 0, 0), false);
var Hr = (t22, e, n) => {
  if (!(t22 && e == null)) return Array.isArray(e) || typeof e == "string" ? e[n < 0 ? e.length + n : n] : e.at(n);
}, nt = Hr;
var Bt = class {
  constructor(e) {
    __publicField(this, "text");
    this.text = e;
  }
  getCharacterIndex(e, n) {
    return us(this.text, e, n);
  }
  getCharacterLastIndex(e, n) {
    return cs(this.text, e, n);
  }
  transformSpan(e, { stripSpaces: n = false, hasParentParens: s = false } = {}) {
    if (!n) return Fe(e);
    let { outerSpan: r, innerSpan: o, hasParens: a } = as(e, this.text, s), l = Fe(o);
    return a && (l.extra = { parenthesized: true, parenStart: r.start, parenEnd: r.end }), l;
  }
  createNode(e, { stripSpaces: n = true, hasParentParens: s = false } = {}) {
    let { type: r, start: o, end: a } = e, l = { ...e, ...this.transformSpan({ start: o, end: a }, { stripSpaces: n, hasParentParens: s }) };
    switch (r) {
      case "NumericLiteral":
      case "StringLiteral": {
        let u = this.text.slice(l.start, l.end), { value: h } = l;
        l.extra = { ...l.extra, raw: u, rawValue: h };
        break;
      }
      case "ObjectProperty": {
        let { shorthand: u } = l;
        u && (l.extra = { ...l.extra, shorthand: u });
        break;
      }
    }
    return l;
  }
}, gs = Bt;
function Ot(t22) {
  var e;
  return !!((e = t22.extra) != null && e.parenthesized);
}
function $(t22) {
  return Ot(t22) ? t22.extra.parenStart : t22.start;
}
function R(t22) {
  return Ot(t22) ? t22.extra.parenEnd : t22.end;
}
function vs(t22) {
  return (t22.type === "OptionalCallExpression" || t22.type === "OptionalMemberExpression") && !Ot(t22);
}
function ws(t22, e) {
  let { start: n, end: s } = t22.sourceSpan;
  return n >= s || /^\s+$/.test(e.slice(n, s));
}
var We, pe, p, v, He, x, Dt, Ue = class extends gs {
  constructor(n, s) {
    super(s);
    V(this, p);
    V(this, We);
    V(this, pe);
    K(this, We, n), K(this, pe, s);
  }
  get node() {
    return c(this, p, x).call(this, L(this, We));
  }
  transformNode(n) {
    return c(this, p, Dt).call(this, n);
  }
};
We = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakSet(), v = function(n, { stripSpaces: s = true, hasParentParens: r = false } = {}) {
  return this.createNode(n, { stripSpaces: s, hasParentParens: r });
}, He = function(n, s, { computed: r, optional: o, end: a = R(s), hasParentParens: l = false }) {
  if (ws(n, L(this, pe)) || n.sourceSpan.start === s.start) return s;
  let u = c(this, p, x).call(this, n), h = vs(u);
  return c(this, p, v).call(this, { type: o || h ? "OptionalMemberExpression" : "MemberExpression", object: u, property: s, computed: r, ...o ? { optional: true } : h ? { optional: false } : void 0, start: $(u), end: a }, { hasParentParens: l });
}, x = function(n, s = false) {
  return c(this, p, Dt).call(this, n, s);
}, Dt = function(n, s = false) {
  if (n instanceof Pe) {
    let { expressions: o } = n;
    if (o.length !== 1) throw new Error("Unexpected 'Interpolation'");
    return c(this, p, x).call(this, o[0]);
  }
  if (n instanceof ae) return c(this, p, v).call(this, { type: "UnaryExpression", prefix: true, argument: c(this, p, x).call(this, n.expr), operator: n.operator, ...n.sourceSpan }, { hasParentParens: s });
  if (n instanceof A) {
    let { left: o, operation: a, right: l } = n, u = c(this, p, x).call(this, o), h = c(this, p, x).call(this, l), g = $(u), S = R(h), w = { left: u, right: h, start: g, end: S };
    return a === "&&" || a === "||" || a === "??" ? c(this, p, v).call(this, { ...w, type: "LogicalExpression", operator: a }, { hasParentParens: s }) : c(this, p, v).call(this, { ...w, type: "BinaryExpression", operator: a }, { hasParentParens: s });
  }
  if (n instanceof be) {
    let { exp: o, name: a, args: l } = n, u = c(this, p, x).call(this, o), h = $(u), g = R(u), S = this.getCharacterIndex(/\S/, this.getCharacterIndex("|", g) + 1), w = c(this, p, v).call(this, { type: "Identifier", name: a, start: S, end: S + a.length }), y = l.map((T) => c(this, p, x).call(this, T));
    return c(this, p, v).call(this, { type: "NGPipeExpression", left: u, right: w, arguments: y, start: h, end: R(y.length === 0 ? w : nt(false, y, -1)) }, { hasParentParens: s });
  }
  if (n instanceof _e) return c(this, p, v).call(this, { type: "NGChainedExpression", expressions: n.expressions.map((o) => c(this, p, x).call(this, o)), ...n.sourceSpan }, { hasParentParens: s });
  if (n instanceof Ce) {
    let { condition: o, trueExp: a, falseExp: l } = n, u = c(this, p, x).call(this, o), h = c(this, p, x).call(this, a), g = c(this, p, x).call(this, l);
    return c(this, p, v).call(this, { type: "ConditionalExpression", test: u, consequent: h, alternate: g, start: $(u), end: R(g) }, { hasParentParens: s });
  }
  if (n instanceof b) return c(this, p, v).call(this, { type: "NGEmptyExpression", ...n.sourceSpan }, { hasParentParens: s });
  if (n instanceof X) return c(this, p, v).call(this, { type: "ThisExpression", ...n.sourceSpan }, { hasParentParens: s });
  if (n instanceof ke || n instanceof oe) return c(this, p, He).call(this, n.receiver, c(this, p, x).call(this, n.key), { computed: true, optional: n instanceof oe, end: n.sourceSpan.end, hasParentParens: s });
  if (n instanceof Ne) return c(this, p, v).call(this, { type: "ArrayExpression", elements: n.expressions.map((o) => c(this, p, x).call(this, o)), ...n.sourceSpan }, { hasParentParens: s });
  if (n instanceof Ae) {
    let { keys: o, values: a } = n, l = a.map((h) => c(this, p, x).call(this, h)), u = o.map(({ key: h, quoted: g }, S) => {
      let w = l[S], y = $(w), T = R(w), F = this.getCharacterIndex(/\S/, S === 0 ? n.sourceSpan.start + 1 : this.getCharacterIndex(",", R(l[S - 1])) + 1), fe = y === F ? T : this.getCharacterLastIndex(/\S/, this.getCharacterLastIndex(":", y - 1) - 1) + 1, de = { start: F, end: fe }, q = g ? c(this, p, v).call(this, { type: "StringLiteral", value: h, ...de }) : c(this, p, v).call(this, { type: "Identifier", name: h, ...de }), Gt = q.end < q.start || F === y;
      return c(this, p, v).call(this, { type: "ObjectProperty", key: q, value: w, shorthand: Gt, computed: false, start: $(q), end: T });
    });
    return c(this, p, v).call(this, { type: "ObjectExpression", properties: u, ...n.sourceSpan }, { hasParentParens: s });
  }
  if (n instanceof N) {
    let { value: o } = n;
    switch (typeof o) {
      case "boolean":
        return c(this, p, v).call(this, { type: "BooleanLiteral", value: o, ...n.sourceSpan }, { hasParentParens: s });
      case "number":
        return c(this, p, v).call(this, { type: "NumericLiteral", value: o, ...n.sourceSpan }, { hasParentParens: s });
      case "object":
        return c(this, p, v).call(this, { type: "NullLiteral", ...n.sourceSpan }, { hasParentParens: s });
      case "string":
        return c(this, p, v).call(this, { type: "StringLiteral", value: o, ...n.sourceSpan }, { hasParentParens: s });
      case "undefined":
        return c(this, p, v).call(this, { type: "Identifier", name: "undefined", ...n.sourceSpan }, { hasParentParens: s });
      default:
        throw new Error(`Unexpected LiteralPrimitive value type ${typeof o}`);
    }
  }
  if (n instanceof Re || n instanceof le) {
    let o = n instanceof le, { receiver: a, args: l } = n, u = l.length === 1 ? [c(this, p, x).call(this, l[0], true)] : l.map((w) => c(this, p, x).call(this, w)), h = c(this, p, x).call(this, a), g = vs(h), S = o || g ? "OptionalCallExpression" : "CallExpression";
    return c(this, p, v).call(this, { type: S, callee: h, arguments: u, optional: S === "OptionalCallExpression" ? o : void 0, start: $(h), end: n.sourceSpan.end }, { hasParentParens: s });
  }
  if (n instanceof $e) {
    let o = c(this, p, x).call(this, n.expression);
    return c(this, p, v).call(this, { type: "TSNonNullExpression", expression: o, start: $(o), end: n.sourceSpan.end }, { hasParentParens: s });
  }
  let r = n instanceof Le;
  if (r || n instanceof Me) {
    let o = c(this, p, x).call(this, n.expression), a = r ? "!" : "typeof", { start: l } = n.sourceSpan;
    if (!r) {
      let u = this.text.lastIndexOf(a, l);
      if (u === -1) throw new Error(`Cannot find operator ${a} from index ${l} in ${JSON.stringify(this.text)}`);
      l = u;
    }
    return c(this, p, v).call(this, { type: "UnaryExpression", prefix: true, operator: a, argument: o, start: l, end: R(o) }, { hasParentParens: s });
  }
  if (n instanceof re || n instanceof ie) {
    let { receiver: o, name: a } = n, l = this.getCharacterLastIndex(/\S/, n.sourceSpan.end - 1) + 1, u = c(this, p, v).call(this, { type: "Identifier", name: a, start: l - a.length, end: l }, ws(o, L(this, pe)) ? { hasParentParens: s } : {});
    return c(this, p, He).call(this, o, u, { computed: false, optional: n instanceof ie, hasParentParens: s });
  }
  if (n instanceof Ie) {
    let o = c(this, p, x).call(this, n.key), a = c(this, p, x).call(this, n.value), l = c(this, p, He).call(this, n.receiver, o, { computed: true, optional: false, end: this.getCharacterIndex("]", R(o)) + 1 });
    return c(this, p, v).call(this, { type: "AssignmentExpression", left: l, operator: "=", right: a, start: $(l), end: R(a) }, { hasParentParens: s });
  }
  if (n instanceof Te) {
    let { receiver: o, name: a, value: l } = n, u = c(this, p, x).call(this, l), h = this.getCharacterLastIndex(/\S/, this.getCharacterLastIndex("=", $(u) - 1) - 1) + 1, g = c(this, p, v).call(this, { type: "Identifier", name: a, start: h - a.length, end: h }), S = c(this, p, He).call(this, o, g, { computed: false, optional: false });
    return c(this, p, v).call(this, { type: "AssignmentExpression", left: S, operator: "=", right: u, start: $(S), end: R(u) }, { hasParentParens: s });
  }
  throw Object.assign(new Error("Unexpected node"), { node: n });
};
function xs(t22, e) {
  return new Ue(t22, e).node;
}
function Ss(t22) {
  return t22 instanceof Be;
}
function Es(t22) {
  return t22 instanceof ce;
}
var he, Q, m, ys, I, Vt, Ht, Ut, _s, Cs, Ts, ks, Ft = class extends Ue {
  constructor(n, s) {
    super(void 0, s);
    V(this, m);
    V(this, he);
    V(this, Q);
    K(this, he, n), K(this, Q, s);
    for (let r of n) c(this, m, _s).call(this, r);
  }
  get expressions() {
    return c(this, m, Ts).call(this);
  }
};
he = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakSet(), ys = function() {
  return L(this, he)[0].key;
}, I = function(n, { stripSpaces: s = true } = {}) {
  return this.createNode(n, { stripSpaces: s });
}, Vt = function(n) {
  return this.transformNode(n);
}, Ht = function(n) {
  return ps(n.slice(L(this, m, ys).source.length));
}, Ut = function(n) {
  let s = L(this, Q);
  if (s[n.start] !== '"' && s[n.start] !== "'") return;
  let r = s[n.start], o = false;
  for (let a = n.start + 1; a < s.length; a++) switch (s[a]) {
    case r:
      if (!o) {
        n.end = a + 1;
        return;
      }
    default:
      o = false;
      break;
    case "\\":
      o = !o;
      break;
  }
}, _s = function(n) {
  c(this, m, Ut).call(this, n.key.span), Es(n) && n.value && c(this, m, Ut).call(this, n.value.span);
}, Cs = function(n) {
  if (!n.value || n.value.source) return n.value;
  let s = this.getCharacterIndex(/\S/, n.sourceSpan.start);
  return { source: "$implicit", span: { start: s, end: s } };
}, Ts = function() {
  let n = L(this, he), [s] = n, r = L(this, Q).slice(s.sourceSpan.start, s.sourceSpan.end).trim().length === 0 ? n.slice(1) : n, o = [], a = null;
  for (let [l, u] of r.entries()) {
    if (a && Ss(a) && Es(u) && u.value && u.value.source === a.key.source) {
      let h = c(this, m, I).call(this, { type: "NGMicrosyntaxKey", name: u.key.source, ...u.key.span }), g = (y, T) => ({ ...y, ...this.transformSpan({ start: y.start, end: T }) }), S = (y) => ({ ...g(y, h.end), alias: h }), w = o.pop();
      if (w.type === "NGMicrosyntaxExpression") o.push(S(w));
      else if (w.type === "NGMicrosyntaxKeyedExpression") {
        let y = S(w.expression);
        o.push(g({ ...w, expression: y }, y.end));
      } else throw new Error(`Unexpected type ${w.type}`);
    } else o.push(c(this, m, ks).call(this, u, l));
    a = u;
  }
  return c(this, m, I).call(this, { type: "NGMicrosyntax", body: o, ...o.length === 0 ? n[0].sourceSpan : { start: o[0].start, end: nt(false, o, -1).end } });
}, ks = function(n, s) {
  if (Ss(n)) {
    let { key: r, value: o } = n;
    return o ? s === 0 ? c(this, m, I).call(this, { type: "NGMicrosyntaxExpression", expression: c(this, m, Vt).call(this, o.ast), alias: null, ...o.sourceSpan }) : c(this, m, I).call(this, { type: "NGMicrosyntaxKeyedExpression", key: c(this, m, I).call(this, { type: "NGMicrosyntaxKey", name: c(this, m, Ht).call(this, r.source), ...r.span }), expression: c(this, m, I).call(this, { type: "NGMicrosyntaxExpression", expression: c(this, m, Vt).call(this, o.ast), alias: null, ...o.sourceSpan }), start: r.span.start, end: o.sourceSpan.end }) : c(this, m, I).call(this, { type: "NGMicrosyntaxKey", name: c(this, m, Ht).call(this, r.source), ...r.span });
  } else {
    let { key: r, sourceSpan: o } = n;
    if (/^let\s$/.test(L(this, Q).slice(o.start, o.start + 4))) {
      let { value: l } = n;
      return c(this, m, I).call(this, { type: "NGMicrosyntaxLet", key: c(this, m, I).call(this, { type: "NGMicrosyntaxKey", name: r.source, ...r.span }), value: l ? c(this, m, I).call(this, { type: "NGMicrosyntaxKey", name: l.source, ...l.span }) : null, start: o.start, end: l ? l.span.end : r.span.end });
    } else {
      let l = c(this, m, Cs).call(this, n);
      return c(this, m, I).call(this, { type: "NGMicrosyntaxAs", key: c(this, m, I).call(this, { type: "NGMicrosyntaxKey", name: l.source, ...l.span }), alias: c(this, m, I).call(this, { type: "NGMicrosyntaxKey", name: r.source, ...r.span }), start: l.span.start, end: r.span.end });
    }
  }
};
function Is(t22, e) {
  return new Ft(t22, e).expressions;
}
function st({ result: { ast: t22 }, text: e, comments: n }) {
  return Object.assign(xs(t22, e), { comments: n });
}
function bs({ result: { templateBindings: t22 }, text: e }) {
  return Is(t22, e);
}
var Ns = (t22) => st(hs(t22));
var As = (t22) => st(ds(t22)), Wt = (t22) => st(fs(t22)), Ps = (t22) => bs(ms(t22));
function qt(t22) {
  var s, r, o;
  let e = ((s = t22.range) == null ? void 0 : s[0]) ?? t22.start, n = (o = ((r = t22.declaration) == null ? void 0 : r.decorators) ?? t22.decorators) == null ? void 0 : o[0];
  return n ? Math.min(qt(n), e) : e;
}
function Ls(t22) {
  var e;
  return ((e = t22.range) == null ? void 0 : e[1]) ?? t22.end;
}
function rt(t22) {
  return { astFormat: "estree", parse(e) {
    let n = t22(e);
    return { type: "NGRoot", node: t22 === Wt && n.type !== "NGChainedExpression" ? { ...n, type: "NGChainedExpression", expressions: [n] } : n };
  }, locStart: qt, locEnd: Ls };
}
var Ur = rt(Wt), Wr = rt(Ns), qr = rt(As), jr = rt(Ps);
var Zi = zt;
export {
  Zi as default,
  jt as parsers
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1EZ0V4UkFoUS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0aWVyL3BsdWdpbnMvYW5ndWxhci5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICRzPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgWHQ9dD0+e3Rocm93IFR5cGVFcnJvcih0KX07dmFyIEp0PSh0LGUpPT57Zm9yKHZhciBuIGluIGUpJHModCxuLHtnZXQ6ZVtuXSxlbnVtZXJhYmxlOiEwfSl9O3ZhciBpdD0odCxlLG4pPT5lLmhhcyh0KXx8WHQoXCJDYW5ub3QgXCIrbik7dmFyIEw9KHQsZSxuKT0+KGl0KHQsZSxcInJlYWQgZnJvbSBwcml2YXRlIGZpZWxkXCIpLG4/bi5jYWxsKHQpOmUuZ2V0KHQpKSxWPSh0LGUsbik9PmUuaGFzKHQpP1h0KFwiQ2Fubm90IGFkZCB0aGUgc2FtZSBwcml2YXRlIG1lbWJlciBtb3JlIHRoYW4gb25jZVwiKTplIGluc3RhbmNlb2YgV2Vha1NldD9lLmFkZCh0KTplLnNldCh0LG4pLEs9KHQsZSxuLHMpPT4oaXQodCxlLFwid3JpdGUgdG8gcHJpdmF0ZSBmaWVsZFwiKSxzP3MuY2FsbCh0LG4pOmUuc2V0KHQsbiksbiksYz0odCxlLG4pPT4oaXQodCxlLFwiYWNjZXNzIHByaXZhdGUgbWV0aG9kXCIpLG4pO3ZhciB6dD17fTtKdCh6dCx7cGFyc2VyczooKT0+anR9KTt2YXIganQ9e307SnQoanQse19fbmdfYWN0aW9uOigpPT5VcixfX25nX2JpbmRpbmc6KCk9PldyLF9fbmdfZGlyZWN0aXZlOigpPT5qcixfX25nX2ludGVycG9sYXRpb246KCk9PnFyfSk7dmFyIEdyPW5ldyBSZWdFeHAoYChcXFxcOm5vdFxcXFwoKXwoKFtcXFxcLlxcXFwjXT8pWy1cXFxcd10rKXwoPzpcXFxcWyhbLS5cXFxcdypcXFxcXFxcXCRdKykoPzo9KFtcIiddPykoW15cXFxcXVwiJ10qKVxcXFw1KT9cXFxcXSl8KFxcXFwpKXwoXFxcXHMqLFxcXFxzKilgLFwiZ1wiKTt2YXIgWXQ7KGZ1bmN0aW9uKHQpe3RbdC5FbXVsYXRlZD0wXT1cIkVtdWxhdGVkXCIsdFt0Lk5vbmU9Ml09XCJOb25lXCIsdFt0LlNoYWRvd0RvbT0zXT1cIlNoYWRvd0RvbVwifSkoWXR8fChZdD17fSkpO3ZhciBRdDsoZnVuY3Rpb24odCl7dFt0Lk9uUHVzaD0wXT1cIk9uUHVzaFwiLHRbdC5EZWZhdWx0PTFdPVwiRGVmYXVsdFwifSkoUXR8fChRdD17fSkpO3ZhciBLdDsoZnVuY3Rpb24odCl7dFt0Lk5vbmU9MF09XCJOb25lXCIsdFt0LlNpZ25hbEJhc2VkPTFdPVwiU2lnbmFsQmFzZWRcIix0W3QuSGFzRGVjb3JhdG9ySW5wdXRUcmFuc2Zvcm09Ml09XCJIYXNEZWNvcmF0b3JJbnB1dFRyYW5zZm9ybVwifSkoS3R8fChLdD17fSkpO3ZhciBCOyhmdW5jdGlvbih0KXt0W3QuTk9ORT0wXT1cIk5PTkVcIix0W3QuSFRNTD0xXT1cIkhUTUxcIix0W3QuU1RZTEU9Ml09XCJTVFlMRVwiLHRbdC5TQ1JJUFQ9M109XCJTQ1JJUFRcIix0W3QuVVJMPTRdPVwiVVJMXCIsdFt0LlJFU09VUkNFX1VSTD01XT1cIlJFU09VUkNFX1VSTFwifSkoQnx8KEI9e30pKTt2YXIgWnQ7KGZ1bmN0aW9uKHQpe3RbdC5FcnJvcj0wXT1cIkVycm9yXCIsdFt0Lldhcm5pbmc9MV09XCJXYXJuaW5nXCIsdFt0Lklnbm9yZT0yXT1cIklnbm9yZVwifSkoWnR8fChadD17fSkpO3ZhciBlbjsoZnVuY3Rpb24odCl7dFt0LkxpdHRsZT0wXT1cIkxpdHRsZVwiLHRbdC5CaWc9MV09XCJCaWdcIn0pKGVufHwoZW49e30pKTt2YXIgdG47KGZ1bmN0aW9uKHQpe3RbdC5Ob25lPTBdPVwiTm9uZVwiLHRbdC5Db25zdD0xXT1cIkNvbnN0XCJ9KSh0bnx8KHRuPXt9KSk7dmFyIG5uOyhmdW5jdGlvbih0KXt0W3QuRHluYW1pYz0wXT1cIkR5bmFtaWNcIix0W3QuQm9vbD0xXT1cIkJvb2xcIix0W3QuU3RyaW5nPTJdPVwiU3RyaW5nXCIsdFt0LkludD0zXT1cIkludFwiLHRbdC5OdW1iZXI9NF09XCJOdW1iZXJcIix0W3QuRnVuY3Rpb249NV09XCJGdW5jdGlvblwiLHRbdC5JbmZlcnJlZD02XT1cIkluZmVycmVkXCIsdFt0Lk5vbmU9N109XCJOb25lXCJ9KShubnx8KG5uPXt9KSk7dmFyIFJzPXZvaWQgMDt2YXIgc247KGZ1bmN0aW9uKHQpe3RbdC5NaW51cz0wXT1cIk1pbnVzXCIsdFt0LlBsdXM9MV09XCJQbHVzXCJ9KShzbnx8KHNuPXt9KSk7dmFyIF87KGZ1bmN0aW9uKHQpe3RbdC5FcXVhbHM9MF09XCJFcXVhbHNcIix0W3QuTm90RXF1YWxzPTFdPVwiTm90RXF1YWxzXCIsdFt0LklkZW50aWNhbD0yXT1cIklkZW50aWNhbFwiLHRbdC5Ob3RJZGVudGljYWw9M109XCJOb3RJZGVudGljYWxcIix0W3QuTWludXM9NF09XCJNaW51c1wiLHRbdC5QbHVzPTVdPVwiUGx1c1wiLHRbdC5EaXZpZGU9Nl09XCJEaXZpZGVcIix0W3QuTXVsdGlwbHk9N109XCJNdWx0aXBseVwiLHRbdC5Nb2R1bG89OF09XCJNb2R1bG9cIix0W3QuQW5kPTldPVwiQW5kXCIsdFt0Lk9yPTEwXT1cIk9yXCIsdFt0LkJpdHdpc2VPcj0xMV09XCJCaXR3aXNlT3JcIix0W3QuQml0d2lzZUFuZD0xMl09XCJCaXR3aXNlQW5kXCIsdFt0Lkxvd2VyPTEzXT1cIkxvd2VyXCIsdFt0Lkxvd2VyRXF1YWxzPTE0XT1cIkxvd2VyRXF1YWxzXCIsdFt0LkJpZ2dlcj0xNV09XCJCaWdnZXJcIix0W3QuQmlnZ2VyRXF1YWxzPTE2XT1cIkJpZ2dlckVxdWFsc1wiLHRbdC5OdWxsaXNoQ29hbGVzY2U9MTddPVwiTnVsbGlzaENvYWxlc2NlXCJ9KShffHwoXz17fSkpO2Z1bmN0aW9uIEJzKHQsZSl7cmV0dXJuIHQ9PW51bGx8fGU9PW51bGw/dD09ZTp0LmlzRXF1aXZhbGVudChlKX1mdW5jdGlvbiBEcyh0LGUsbil7bGV0IHM9dC5sZW5ndGg7aWYocyE9PWUubGVuZ3RoKXJldHVybiExO2ZvcihsZXQgcj0wO3I8cztyKyspaWYoIW4odFtyXSxlW3JdKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiB0dCh0LGUpe3JldHVybiBEcyh0LGUsKG4scyk9Pm4uaXNFcXVpdmFsZW50KHMpKX12YXIgaz1jbGFzc3t0eXBlO3NvdXJjZVNwYW47Y29uc3RydWN0b3IoZSxuKXt0aGlzLnR5cGU9ZXx8bnVsbCx0aGlzLnNvdXJjZVNwYW49bnx8bnVsbH1wcm9wKGUsbil7cmV0dXJuIG5ldyBndCh0aGlzLGUsbnVsbCxuKX1rZXkoZSxuLHMpe3JldHVybiBuZXcgdnQodGhpcyxlLG4scyl9Y2FsbEZuKGUsbixzKXtyZXR1cm4gbmV3IFhlKHRoaXMsZSxudWxsLG4scyl9aW5zdGFudGlhdGUoZSxuLHMpe3JldHVybiBuZXcgZnQodGhpcyxlLG4scyl9Y29uZGl0aW9uYWwoZSxuPW51bGwscyl7cmV0dXJuIG5ldyBtdCh0aGlzLGUsbixudWxsLHMpfWVxdWFscyhlLG4pe3JldHVybiBuZXcgQyhfLkVxdWFscyx0aGlzLGUsbnVsbCxuKX1ub3RFcXVhbHMoZSxuKXtyZXR1cm4gbmV3IEMoXy5Ob3RFcXVhbHMsdGhpcyxlLG51bGwsbil9aWRlbnRpY2FsKGUsbil7cmV0dXJuIG5ldyBDKF8uSWRlbnRpY2FsLHRoaXMsZSxudWxsLG4pfW5vdElkZW50aWNhbChlLG4pe3JldHVybiBuZXcgQyhfLk5vdElkZW50aWNhbCx0aGlzLGUsbnVsbCxuKX1taW51cyhlLG4pe3JldHVybiBuZXcgQyhfLk1pbnVzLHRoaXMsZSxudWxsLG4pfXBsdXMoZSxuKXtyZXR1cm4gbmV3IEMoXy5QbHVzLHRoaXMsZSxudWxsLG4pfWRpdmlkZShlLG4pe3JldHVybiBuZXcgQyhfLkRpdmlkZSx0aGlzLGUsbnVsbCxuKX1tdWx0aXBseShlLG4pe3JldHVybiBuZXcgQyhfLk11bHRpcGx5LHRoaXMsZSxudWxsLG4pfW1vZHVsbyhlLG4pe3JldHVybiBuZXcgQyhfLk1vZHVsbyx0aGlzLGUsbnVsbCxuKX1hbmQoZSxuKXtyZXR1cm4gbmV3IEMoXy5BbmQsdGhpcyxlLG51bGwsbil9Yml0d2lzZU9yKGUsbixzPSEwKXtyZXR1cm4gbmV3IEMoXy5CaXR3aXNlT3IsdGhpcyxlLG51bGwsbixzKX1iaXR3aXNlQW5kKGUsbixzPSEwKXtyZXR1cm4gbmV3IEMoXy5CaXR3aXNlQW5kLHRoaXMsZSxudWxsLG4scyl9b3IoZSxuKXtyZXR1cm4gbmV3IEMoXy5Pcix0aGlzLGUsbnVsbCxuKX1sb3dlcihlLG4pe3JldHVybiBuZXcgQyhfLkxvd2VyLHRoaXMsZSxudWxsLG4pfWxvd2VyRXF1YWxzKGUsbil7cmV0dXJuIG5ldyBDKF8uTG93ZXJFcXVhbHMsdGhpcyxlLG51bGwsbil9YmlnZ2VyKGUsbil7cmV0dXJuIG5ldyBDKF8uQmlnZ2VyLHRoaXMsZSxudWxsLG4pfWJpZ2dlckVxdWFscyhlLG4pe3JldHVybiBuZXcgQyhfLkJpZ2dlckVxdWFscyx0aGlzLGUsbnVsbCxuKX1pc0JsYW5rKGUpe3JldHVybiB0aGlzLmVxdWFscyhUWVBFRF9OVUxMX0VYUFIsZSl9bnVsbGlzaENvYWxlc2NlKGUsbil7cmV0dXJuIG5ldyBDKF8uTnVsbGlzaENvYWxlc2NlLHRoaXMsZSxudWxsLG4pfXRvU3RtdCgpe3JldHVybiBuZXcgeHQodGhpcyxudWxsKX19LEdlPWNsYXNzIHQgZXh0ZW5kcyBre25hbWU7Y29uc3RydWN0b3IoZSxuLHMpe3N1cGVyKG4scyksdGhpcy5uYW1lPWV9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdGhpcy5uYW1lPT09ZS5uYW1lfWlzQ29uc3RhbnQoKXtyZXR1cm4hMX12aXNpdEV4cHJlc3Npb24oZSxuKXtyZXR1cm4gZS52aXNpdFJlYWRWYXJFeHByKHRoaXMsbil9Y2xvbmUoKXtyZXR1cm4gbmV3IHQodGhpcy5uYW1lLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4pfXNldChlKXtyZXR1cm4gbmV3IHV0KHRoaXMubmFtZSxlLG51bGwsdGhpcy5zb3VyY2VTcGFuKX19LGN0PWNsYXNzIHQgZXh0ZW5kcyBre2V4cHI7Y29uc3RydWN0b3IoZSxuLHMpe3N1cGVyKG4scyksdGhpcy5leHByPWV9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRUeXBlb2ZFeHByKHRoaXMsbil9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmZS5leHByLmlzRXF1aXZhbGVudCh0aGlzLmV4cHIpfWlzQ29uc3RhbnQoKXtyZXR1cm4gdGhpcy5leHByLmlzQ29uc3RhbnQoKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLmV4cHIuY2xvbmUoKSl9fTt2YXIgdXQ9Y2xhc3MgdCBleHRlbmRzIGt7bmFtZTt2YWx1ZTtjb25zdHJ1Y3RvcihlLG4scyxyKXtzdXBlcihzfHxuLnR5cGUsciksdGhpcy5uYW1lPWUsdGhpcy52YWx1ZT1ufWlzRXF1aXZhbGVudChlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIHQmJnRoaXMubmFtZT09PWUubmFtZSYmdGhpcy52YWx1ZS5pc0VxdWl2YWxlbnQoZS52YWx1ZSl9aXNDb25zdGFudCgpe3JldHVybiExfXZpc2l0RXhwcmVzc2lvbihlLG4pe3JldHVybiBlLnZpc2l0V3JpdGVWYXJFeHByKHRoaXMsbil9Y2xvbmUoKXtyZXR1cm4gbmV3IHQodGhpcy5uYW1lLHRoaXMudmFsdWUuY2xvbmUoKSx0aGlzLnR5cGUsdGhpcy5zb3VyY2VTcGFuKX10b0RlY2xTdG10KGUsbil7cmV0dXJuIG5ldyB3dCh0aGlzLm5hbWUsdGhpcy52YWx1ZSxlLG4sdGhpcy5zb3VyY2VTcGFuKX10b0NvbnN0RGVjbCgpe3JldHVybiB0aGlzLnRvRGVjbFN0bXQoUnMsRWUuRmluYWwpfX0scHQ9Y2xhc3MgdCBleHRlbmRzIGt7cmVjZWl2ZXI7aW5kZXg7dmFsdWU7Y29uc3RydWN0b3IoZSxuLHMscixvKXtzdXBlcihyfHxzLnR5cGUsbyksdGhpcy5yZWNlaXZlcj1lLHRoaXMuaW5kZXg9bix0aGlzLnZhbHVlPXN9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdGhpcy5yZWNlaXZlci5pc0VxdWl2YWxlbnQoZS5yZWNlaXZlcikmJnRoaXMuaW5kZXguaXNFcXVpdmFsZW50KGUuaW5kZXgpJiZ0aGlzLnZhbHVlLmlzRXF1aXZhbGVudChlLnZhbHVlKX1pc0NvbnN0YW50KCl7cmV0dXJuITF9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRXcml0ZUtleUV4cHIodGhpcyxuKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLnJlY2VpdmVyLmNsb25lKCksdGhpcy5pbmRleC5jbG9uZSgpLHRoaXMudmFsdWUuY2xvbmUoKSx0aGlzLnR5cGUsdGhpcy5zb3VyY2VTcGFuKX19LGh0PWNsYXNzIHQgZXh0ZW5kcyBre3JlY2VpdmVyO25hbWU7dmFsdWU7Y29uc3RydWN0b3IoZSxuLHMscixvKXtzdXBlcihyfHxzLnR5cGUsbyksdGhpcy5yZWNlaXZlcj1lLHRoaXMubmFtZT1uLHRoaXMudmFsdWU9c31pc0VxdWl2YWxlbnQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0JiZ0aGlzLnJlY2VpdmVyLmlzRXF1aXZhbGVudChlLnJlY2VpdmVyKSYmdGhpcy5uYW1lPT09ZS5uYW1lJiZ0aGlzLnZhbHVlLmlzRXF1aXZhbGVudChlLnZhbHVlKX1pc0NvbnN0YW50KCl7cmV0dXJuITF9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRXcml0ZVByb3BFeHByKHRoaXMsbil9Y2xvbmUoKXtyZXR1cm4gbmV3IHQodGhpcy5yZWNlaXZlci5jbG9uZSgpLHRoaXMubmFtZSx0aGlzLnZhbHVlLmNsb25lKCksdGhpcy50eXBlLHRoaXMuc291cmNlU3Bhbil9fSxYZT1jbGFzcyB0IGV4dGVuZHMga3tmbjthcmdzO3B1cmU7Y29uc3RydWN0b3IoZSxuLHMscixvPSExKXtzdXBlcihzLHIpLHRoaXMuZm49ZSx0aGlzLmFyZ3M9bix0aGlzLnB1cmU9b31nZXQgcmVjZWl2ZXIoKXtyZXR1cm4gdGhpcy5mbn1pc0VxdWl2YWxlbnQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0JiZ0aGlzLmZuLmlzRXF1aXZhbGVudChlLmZuKSYmdHQodGhpcy5hcmdzLGUuYXJncykmJnRoaXMucHVyZT09PWUucHVyZX1pc0NvbnN0YW50KCl7cmV0dXJuITF9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRJbnZva2VGdW5jdGlvbkV4cHIodGhpcyxuKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLmZuLmNsb25lKCksdGhpcy5hcmdzLm1hcChlPT5lLmNsb25lKCkpLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4sdGhpcy5wdXJlKX19O3ZhciBmdD1jbGFzcyB0IGV4dGVuZHMga3tjbGFzc0V4cHI7YXJncztjb25zdHJ1Y3RvcihlLG4scyxyKXtzdXBlcihzLHIpLHRoaXMuY2xhc3NFeHByPWUsdGhpcy5hcmdzPW59aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdGhpcy5jbGFzc0V4cHIuaXNFcXVpdmFsZW50KGUuY2xhc3NFeHByKSYmdHQodGhpcy5hcmdzLGUuYXJncyl9aXNDb25zdGFudCgpe3JldHVybiExfXZpc2l0RXhwcmVzc2lvbihlLG4pe3JldHVybiBlLnZpc2l0SW5zdGFudGlhdGVFeHByKHRoaXMsbil9Y2xvbmUoKXtyZXR1cm4gbmV3IHQodGhpcy5jbGFzc0V4cHIuY2xvbmUoKSx0aGlzLmFyZ3MubWFwKGU9PmUuY2xvbmUoKSksdGhpcy50eXBlLHRoaXMuc291cmNlU3Bhbil9fSxKZT1jbGFzcyB0IGV4dGVuZHMga3t2YWx1ZTtjb25zdHJ1Y3RvcihlLG4scyl7c3VwZXIobixzKSx0aGlzLnZhbHVlPWV9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdGhpcy52YWx1ZT09PWUudmFsdWV9aXNDb25zdGFudCgpe3JldHVybiEwfXZpc2l0RXhwcmVzc2lvbihlLG4pe3JldHVybiBlLnZpc2l0TGl0ZXJhbEV4cHIodGhpcyxuKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLnZhbHVlLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4pfX07dmFyIGR0PWNsYXNzIHQgZXh0ZW5kcyBre3ZhbHVlO3R5cGVQYXJhbXM7Y29uc3RydWN0b3IoZSxuLHM9bnVsbCxyKXtzdXBlcihuLHIpLHRoaXMudmFsdWU9ZSx0aGlzLnR5cGVQYXJhbXM9c31pc0VxdWl2YWxlbnQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0JiZ0aGlzLnZhbHVlLm5hbWU9PT1lLnZhbHVlLm5hbWUmJnRoaXMudmFsdWUubW9kdWxlTmFtZT09PWUudmFsdWUubW9kdWxlTmFtZX1pc0NvbnN0YW50KCl7cmV0dXJuITF9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRFeHRlcm5hbEV4cHIodGhpcyxuKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLnZhbHVlLHRoaXMudHlwZSx0aGlzLnR5cGVQYXJhbXMsdGhpcy5zb3VyY2VTcGFuKX19O3ZhciBtdD1jbGFzcyB0IGV4dGVuZHMga3tjb25kaXRpb247ZmFsc2VDYXNlO3RydWVDYXNlO2NvbnN0cnVjdG9yKGUsbixzPW51bGwscixvKXtzdXBlcihyfHxuLnR5cGUsbyksdGhpcy5jb25kaXRpb249ZSx0aGlzLmZhbHNlQ2FzZT1zLHRoaXMudHJ1ZUNhc2U9bn1pc0VxdWl2YWxlbnQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0JiZ0aGlzLmNvbmRpdGlvbi5pc0VxdWl2YWxlbnQoZS5jb25kaXRpb24pJiZ0aGlzLnRydWVDYXNlLmlzRXF1aXZhbGVudChlLnRydWVDYXNlKSYmQnModGhpcy5mYWxzZUNhc2UsZS5mYWxzZUNhc2UpfWlzQ29uc3RhbnQoKXtyZXR1cm4hMX12aXNpdEV4cHJlc3Npb24oZSxuKXtyZXR1cm4gZS52aXNpdENvbmRpdGlvbmFsRXhwcih0aGlzLG4pfWNsb25lKCl7dmFyIGU7cmV0dXJuIG5ldyB0KHRoaXMuY29uZGl0aW9uLmNsb25lKCksdGhpcy50cnVlQ2FzZS5jbG9uZSgpLChlPXRoaXMuZmFsc2VDYXNlKT09bnVsbD92b2lkIDA6ZS5jbG9uZSgpLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4pfX07dmFyIEM9Y2xhc3MgdCBleHRlbmRzIGt7b3BlcmF0b3I7cmhzO3BhcmVucztsaHM7Y29uc3RydWN0b3IoZSxuLHMscixvLGE9ITApe3N1cGVyKHJ8fG4udHlwZSxvKSx0aGlzLm9wZXJhdG9yPWUsdGhpcy5yaHM9cyx0aGlzLnBhcmVucz1hLHRoaXMubGhzPW59aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdGhpcy5vcGVyYXRvcj09PWUub3BlcmF0b3ImJnRoaXMubGhzLmlzRXF1aXZhbGVudChlLmxocykmJnRoaXMucmhzLmlzRXF1aXZhbGVudChlLnJocyl9aXNDb25zdGFudCgpe3JldHVybiExfXZpc2l0RXhwcmVzc2lvbihlLG4pe3JldHVybiBlLnZpc2l0QmluYXJ5T3BlcmF0b3JFeHByKHRoaXMsbil9Y2xvbmUoKXtyZXR1cm4gbmV3IHQodGhpcy5vcGVyYXRvcix0aGlzLmxocy5jbG9uZSgpLHRoaXMucmhzLmNsb25lKCksdGhpcy50eXBlLHRoaXMuc291cmNlU3Bhbix0aGlzLnBhcmVucyl9fSxndD1jbGFzcyB0IGV4dGVuZHMga3tyZWNlaXZlcjtuYW1lO2NvbnN0cnVjdG9yKGUsbixzLHIpe3N1cGVyKHMsciksdGhpcy5yZWNlaXZlcj1lLHRoaXMubmFtZT1ufWdldCBpbmRleCgpe3JldHVybiB0aGlzLm5hbWV9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdGhpcy5yZWNlaXZlci5pc0VxdWl2YWxlbnQoZS5yZWNlaXZlcikmJnRoaXMubmFtZT09PWUubmFtZX1pc0NvbnN0YW50KCl7cmV0dXJuITF9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRSZWFkUHJvcEV4cHIodGhpcyxuKX1zZXQoZSl7cmV0dXJuIG5ldyBodCh0aGlzLnJlY2VpdmVyLHRoaXMubmFtZSxlLG51bGwsdGhpcy5zb3VyY2VTcGFuKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLnJlY2VpdmVyLmNsb25lKCksdGhpcy5uYW1lLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4pfX0sdnQ9Y2xhc3MgdCBleHRlbmRzIGt7cmVjZWl2ZXI7aW5kZXg7Y29uc3RydWN0b3IoZSxuLHMscil7c3VwZXIocyxyKSx0aGlzLnJlY2VpdmVyPWUsdGhpcy5pbmRleD1ufWlzRXF1aXZhbGVudChlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIHQmJnRoaXMucmVjZWl2ZXIuaXNFcXVpdmFsZW50KGUucmVjZWl2ZXIpJiZ0aGlzLmluZGV4LmlzRXF1aXZhbGVudChlLmluZGV4KX1pc0NvbnN0YW50KCl7cmV0dXJuITF9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRSZWFkS2V5RXhwcih0aGlzLG4pfXNldChlKXtyZXR1cm4gbmV3IHB0KHRoaXMucmVjZWl2ZXIsdGhpcy5pbmRleCxlLG51bGwsdGhpcy5zb3VyY2VTcGFuKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLnJlY2VpdmVyLmNsb25lKCksdGhpcy5pbmRleC5jbG9uZSgpLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4pfX0sWWU9Y2xhc3MgdCBleHRlbmRzIGt7ZW50cmllcztjb25zdHJ1Y3RvcihlLG4scyl7c3VwZXIobixzKSx0aGlzLmVudHJpZXM9ZX1pc0NvbnN0YW50KCl7cmV0dXJuIHRoaXMuZW50cmllcy5ldmVyeShlPT5lLmlzQ29uc3RhbnQoKSl9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdHQodGhpcy5lbnRyaWVzLGUuZW50cmllcyl9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRMaXRlcmFsQXJyYXlFeHByKHRoaXMsbil9Y2xvbmUoKXtyZXR1cm4gbmV3IHQodGhpcy5lbnRyaWVzLm1hcChlPT5lLmNsb25lKCkpLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4pfX07dmFyIFFlPWNsYXNzIHQgZXh0ZW5kcyBre2VudHJpZXM7dmFsdWVUeXBlPW51bGw7Y29uc3RydWN0b3IoZSxuLHMpe3N1cGVyKG4scyksdGhpcy5lbnRyaWVzPWUsbiYmKHRoaXMudmFsdWVUeXBlPW4udmFsdWVUeXBlKX1pc0VxdWl2YWxlbnQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0JiZ0dCh0aGlzLmVudHJpZXMsZS5lbnRyaWVzKX1pc0NvbnN0YW50KCl7cmV0dXJuIHRoaXMuZW50cmllcy5ldmVyeShlPT5lLnZhbHVlLmlzQ29uc3RhbnQoKSl9dmlzaXRFeHByZXNzaW9uKGUsbil7cmV0dXJuIGUudmlzaXRMaXRlcmFsTWFwRXhwcih0aGlzLG4pfWNsb25lKCl7bGV0IGU9dGhpcy5lbnRyaWVzLm1hcChuPT5uLmNsb25lKCkpO3JldHVybiBuZXcgdChlLHRoaXMudHlwZSx0aGlzLnNvdXJjZVNwYW4pfX07dmFyIEVlOyhmdW5jdGlvbih0KXt0W3QuTm9uZT0wXT1cIk5vbmVcIix0W3QuRmluYWw9MV09XCJGaW5hbFwiLHRbdC5Qcml2YXRlPTJdPVwiUHJpdmF0ZVwiLHRbdC5FeHBvcnRlZD00XT1cIkV4cG9ydGVkXCIsdFt0LlN0YXRpYz04XT1cIlN0YXRpY1wifSkoRWV8fChFZT17fSkpO3ZhciBLZT1jbGFzc3ttb2RpZmllcnM7c291cmNlU3BhbjtsZWFkaW5nQ29tbWVudHM7Y29uc3RydWN0b3IoZT1FZS5Ob25lLG49bnVsbCxzKXt0aGlzLm1vZGlmaWVycz1lLHRoaXMuc291cmNlU3Bhbj1uLHRoaXMubGVhZGluZ0NvbW1lbnRzPXN9aGFzTW9kaWZpZXIoZSl7cmV0dXJuKHRoaXMubW9kaWZpZXJzJmUpIT09MH1hZGRMZWFkaW5nQ29tbWVudChlKXt0aGlzLmxlYWRpbmdDb21tZW50cz10aGlzLmxlYWRpbmdDb21tZW50cz8/W10sdGhpcy5sZWFkaW5nQ29tbWVudHMucHVzaChlKX19LHd0PWNsYXNzIHQgZXh0ZW5kcyBLZXtuYW1lO3ZhbHVlO3R5cGU7Y29uc3RydWN0b3IoZSxuLHMscixvLGEpe3N1cGVyKHIsbyxhKSx0aGlzLm5hbWU9ZSx0aGlzLnZhbHVlPW4sdGhpcy50eXBlPXN8fG4mJm4udHlwZXx8bnVsbH1pc0VxdWl2YWxlbnQoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0JiZ0aGlzLm5hbWU9PT1lLm5hbWUmJih0aGlzLnZhbHVlPyEhZS52YWx1ZSYmdGhpcy52YWx1ZS5pc0VxdWl2YWxlbnQoZS52YWx1ZSk6IWUudmFsdWUpfXZpc2l0U3RhdGVtZW50KGUsbil7cmV0dXJuIGUudmlzaXREZWNsYXJlVmFyU3RtdCh0aGlzLG4pfX07dmFyIHh0PWNsYXNzIHQgZXh0ZW5kcyBLZXtleHByO2NvbnN0cnVjdG9yKGUsbixzKXtzdXBlcihFZS5Ob25lLG4scyksdGhpcy5leHByPWV9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmdGhpcy5leHByLmlzRXF1aXZhbGVudChlLmV4cHIpfXZpc2l0U3RhdGVtZW50KGUsbil7cmV0dXJuIGUudmlzaXRFeHByZXNzaW9uU3RtdCh0aGlzLG4pfX07ZnVuY3Rpb24gT3ModCxlLG4pe3JldHVybiBuZXcgR2UodCxlLG4pfXZhciBYcj1PcyhcIjx1bmtub3duPlwiKTt2YXIgcm49Y2xhc3MgdHtzdGF0aWMgSU5TVEFOQ0U9bmV3IHQ7a2V5T2YoZSl7aWYoZSBpbnN0YW5jZW9mIEplJiZ0eXBlb2YgZS52YWx1ZT09XCJzdHJpbmdcIilyZXR1cm5gXCIke2UudmFsdWV9XCJgO2lmKGUgaW5zdGFuY2VvZiBKZSlyZXR1cm4gU3RyaW5nKGUudmFsdWUpO2lmKGUgaW5zdGFuY2VvZiBZZSl7bGV0IG49W107Zm9yKGxldCBzIG9mIGUuZW50cmllcyluLnB1c2godGhpcy5rZXlPZihzKSk7cmV0dXJuYFske24uam9pbihcIixcIil9XWB9ZWxzZSBpZihlIGluc3RhbmNlb2YgUWUpe2xldCBuPVtdO2ZvcihsZXQgcyBvZiBlLmVudHJpZXMpe2xldCByPXMua2V5O3MucXVvdGVkJiYocj1gXCIke3J9XCJgKSxuLnB1c2gocitcIjpcIit0aGlzLmtleU9mKHMudmFsdWUpKX1yZXR1cm5geyR7bi5qb2luKFwiLFwiKX19YH1lbHNle2lmKGUgaW5zdGFuY2VvZiBkdClyZXR1cm5gaW1wb3J0KFwiJHtlLnZhbHVlLm1vZHVsZU5hbWV9XCIsICR7ZS52YWx1ZS5uYW1lfSlgO2lmKGUgaW5zdGFuY2VvZiBHZSlyZXR1cm5gcmVhZCgke2UubmFtZX0pYDtpZihlIGluc3RhbmNlb2YgY3QpcmV0dXJuYHR5cGVvZigke3RoaXMua2V5T2YoZS5leHByKX0pYDt0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBkb2VzIG5vdCBoYW5kbGUgZXhwcmVzc2lvbnMgb2YgdHlwZSAke2UuY29uc3RydWN0b3IubmFtZX1gKX19fTt2YXIgaT1cIkBhbmd1bGFyL2NvcmVcIixQPWNsYXNze3N0YXRpYyBORVdfTUVUSE9EPVwiZmFjdG9yeVwiO3N0YXRpYyBUUkFOU0ZPUk1fTUVUSE9EPVwidHJhbnNmb3JtXCI7c3RhdGljIFBBVENIX0RFUFM9XCJwYXRjaGVkRGVwc1wiO3N0YXRpYyBjb3JlPXtuYW1lOm51bGwsbW9kdWxlTmFtZTppfTtzdGF0aWMgbmFtZXNwYWNlSFRNTD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1bmFtZXNwYWNlSFRNTFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIG5hbWVzcGFjZU1hdGhNTD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1bmFtZXNwYWNlTWF0aE1MXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgbmFtZXNwYWNlU1ZHPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVuYW1lc3BhY2VTVkdcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBlbGVtZW50PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVlbGVtZW50XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZWxlbWVudFN0YXJ0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVlbGVtZW50U3RhcnRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBlbGVtZW50RW5kPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVlbGVtZW50RW5kXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgYWR2YW5jZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1YWR2YW5jZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN5bnRoZXRpY0hvc3RQcm9wZXJ0eT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1c3ludGhldGljSG9zdFByb3BlcnR5XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc3ludGhldGljSG9zdExpc3RlbmVyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzeW50aGV0aWNIb3N0TGlzdGVuZXJcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBhdHRyaWJ1dGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWF0dHJpYnV0ZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGF0dHJpYnV0ZUludGVycG9sYXRlMT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1YXR0cmlidXRlSW50ZXJwb2xhdGUxXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgYXR0cmlidXRlSW50ZXJwb2xhdGUyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVhdHRyaWJ1dGVJbnRlcnBvbGF0ZTJcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBhdHRyaWJ1dGVJbnRlcnBvbGF0ZTM9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWF0dHJpYnV0ZUludGVycG9sYXRlM1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIGF0dHJpYnV0ZUludGVycG9sYXRlND17bmFtZTpcIlxcdTAyNzVcXHUwMjc1YXR0cmlidXRlSW50ZXJwb2xhdGU0XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgYXR0cmlidXRlSW50ZXJwb2xhdGU1PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVhdHRyaWJ1dGVJbnRlcnBvbGF0ZTVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBhdHRyaWJ1dGVJbnRlcnBvbGF0ZTY9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWF0dHJpYnV0ZUludGVycG9sYXRlNlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGF0dHJpYnV0ZUludGVycG9sYXRlNz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1YXR0cmlidXRlSW50ZXJwb2xhdGU3XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgYXR0cmlidXRlSW50ZXJwb2xhdGU4PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVhdHRyaWJ1dGVJbnRlcnBvbGF0ZThcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBhdHRyaWJ1dGVJbnRlcnBvbGF0ZVY9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWF0dHJpYnV0ZUludGVycG9sYXRlVlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzUHJvcD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1Y2xhc3NQcm9wXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZWxlbWVudENvbnRhaW5lclN0YXJ0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVlbGVtZW50Q29udGFpbmVyU3RhcnRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBlbGVtZW50Q29udGFpbmVyRW5kPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVlbGVtZW50Q29udGFpbmVyRW5kXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZWxlbWVudENvbnRhaW5lcj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZWxlbWVudENvbnRhaW5lclwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGUxPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlMVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGUyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlMlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGUzPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlM1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGU0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlNFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGU1PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlNVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGU2PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlNlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGU3PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlN1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGU4PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlOFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlTWFwSW50ZXJwb2xhdGVWPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZU1hcEludGVycG9sYXRlVlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGUxPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlMVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGUyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlMlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGUzPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlM1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGU0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlNFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGU1PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlNVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGU2PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlNlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGU3PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlN1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGU4PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlOFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNsYXNzTWFwSW50ZXJwb2xhdGVWPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjbGFzc01hcEludGVycG9sYXRlVlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlUHJvcD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1c3R5bGVQcm9wXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc3R5bGVQcm9wSW50ZXJwb2xhdGUxPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZVByb3BJbnRlcnBvbGF0ZTFcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBzdHlsZVByb3BJbnRlcnBvbGF0ZTI9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXN0eWxlUHJvcEludGVycG9sYXRlMlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlUHJvcEludGVycG9sYXRlMz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1c3R5bGVQcm9wSW50ZXJwb2xhdGUzXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc3R5bGVQcm9wSW50ZXJwb2xhdGU0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZVByb3BJbnRlcnBvbGF0ZTRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBzdHlsZVByb3BJbnRlcnBvbGF0ZTU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXN0eWxlUHJvcEludGVycG9sYXRlNVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlUHJvcEludGVycG9sYXRlNj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1c3R5bGVQcm9wSW50ZXJwb2xhdGU2XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc3R5bGVQcm9wSW50ZXJwb2xhdGU3PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdHlsZVByb3BJbnRlcnBvbGF0ZTdcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBzdHlsZVByb3BJbnRlcnBvbGF0ZTg9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXN0eWxlUHJvcEludGVycG9sYXRlOFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0eWxlUHJvcEludGVycG9sYXRlVj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1c3R5bGVQcm9wSW50ZXJwb2xhdGVWXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgbmV4dENvbnRleHQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NW5leHRDb250ZXh0XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcmVzZXRWaWV3PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVyZXNldFZpZXdcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0ZW1wbGF0ZUNyZWF0ZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1dGVtcGxhdGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlcj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVmZXJcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlcldoZW49e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVyV2hlblwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyT25JZGxlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlck9uSWRsZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyT25JbW1lZGlhdGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVyT25JbW1lZGlhdGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlck9uVGltZXI9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVyT25UaW1lclwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyT25Ib3Zlcj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVmZXJPbkhvdmVyXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGVmZXJPbkludGVyYWN0aW9uPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlck9uSW50ZXJhY3Rpb25cIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlck9uVmlld3BvcnQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVyT25WaWV3cG9ydFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyUHJlZmV0Y2hXaGVuPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlclByZWZldGNoV2hlblwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyUHJlZmV0Y2hPbklkbGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVyUHJlZmV0Y2hPbklkbGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlclByZWZldGNoT25JbW1lZGlhdGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVyUHJlZmV0Y2hPbkltbWVkaWF0ZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyUHJlZmV0Y2hPblRpbWVyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlclByZWZldGNoT25UaW1lclwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyUHJlZmV0Y2hPbkhvdmVyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlclByZWZldGNoT25Ib3ZlclwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyUHJlZmV0Y2hPbkludGVyYWN0aW9uPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlclByZWZldGNoT25JbnRlcmFjdGlvblwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVyUHJlZmV0Y2hPblZpZXdwb3J0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlclByZWZldGNoT25WaWV3cG9ydFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVySHlkcmF0ZVdoZW49e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVySHlkcmF0ZVdoZW5cIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlckh5ZHJhdGVOZXZlcj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVmZXJIeWRyYXRlTmV2ZXJcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlckh5ZHJhdGVPbklkbGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVySHlkcmF0ZU9uSWRsZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVySHlkcmF0ZU9uSW1tZWRpYXRlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlckh5ZHJhdGVPbkltbWVkaWF0ZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVySHlkcmF0ZU9uVGltZXI9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVySHlkcmF0ZU9uVGltZXJcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlckh5ZHJhdGVPbkhvdmVyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkZWZlckh5ZHJhdGVPbkhvdmVyXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGVmZXJIeWRyYXRlT25JbnRlcmFjdGlvbj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVmZXJIeWRyYXRlT25JbnRlcmFjdGlvblwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmVySHlkcmF0ZU9uVmlld3BvcnQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmVySHlkcmF0ZU9uVmlld3BvcnRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZlckVuYWJsZVRpbWVyU2NoZWR1bGluZz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVmZXJFbmFibGVUaW1lclNjaGVkdWxpbmdcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBjb25kaXRpb25hbD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1Y29uZGl0aW9uYWxcIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZXBlYXRlcj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cmVwZWF0ZXJcIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZXBlYXRlckNyZWF0ZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cmVwZWF0ZXJDcmVhdGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZXBlYXRlclRyYWNrQnlJbmRleD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cmVwZWF0ZXJUcmFja0J5SW5kZXhcIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZXBlYXRlclRyYWNrQnlJZGVudGl0eT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cmVwZWF0ZXJUcmFja0J5SWRlbnRpdHlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBjb21wb25lbnRJbnN0YW5jZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1Y29tcG9uZW50SW5zdGFuY2VcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0ZXh0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzV0ZXh0XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZW5hYmxlQmluZGluZ3M9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWVuYWJsZUJpbmRpbmdzXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGlzYWJsZUJpbmRpbmdzPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkaXNhYmxlQmluZGluZ3NcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBnZXRDdXJyZW50Vmlldz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1Z2V0Q3VycmVudFZpZXdcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0ZXh0SW50ZXJwb2xhdGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXRleHRJbnRlcnBvbGF0ZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHRleHRJbnRlcnBvbGF0ZTE9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXRleHRJbnRlcnBvbGF0ZTFcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0ZXh0SW50ZXJwb2xhdGUyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzV0ZXh0SW50ZXJwb2xhdGUyXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgdGV4dEludGVycG9sYXRlMz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1dGV4dEludGVycG9sYXRlM1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIHRleHRJbnRlcnBvbGF0ZTQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXRleHRJbnRlcnBvbGF0ZTRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0ZXh0SW50ZXJwb2xhdGU1PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzV0ZXh0SW50ZXJwb2xhdGU1XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgdGV4dEludGVycG9sYXRlNj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1dGV4dEludGVycG9sYXRlNlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHRleHRJbnRlcnBvbGF0ZTc9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXRleHRJbnRlcnBvbGF0ZTdcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0ZXh0SW50ZXJwb2xhdGU4PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzV0ZXh0SW50ZXJwb2xhdGU4XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgdGV4dEludGVycG9sYXRlVj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1dGV4dEludGVycG9sYXRlVlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHJlc3RvcmVWaWV3PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVyZXN0b3JlVmlld1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIHB1cmVGdW5jdGlvbjA9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXB1cmVGdW5jdGlvbjBcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwdXJlRnVuY3Rpb24xPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVwdXJlRnVuY3Rpb24xXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHVyZUZ1bmN0aW9uMj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cHVyZUZ1bmN0aW9uMlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHB1cmVGdW5jdGlvbjM9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXB1cmVGdW5jdGlvbjNcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwdXJlRnVuY3Rpb240PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVwdXJlRnVuY3Rpb240XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHVyZUZ1bmN0aW9uNT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cHVyZUZ1bmN0aW9uNVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHB1cmVGdW5jdGlvbjY9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXB1cmVGdW5jdGlvbjZcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwdXJlRnVuY3Rpb243PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVwdXJlRnVuY3Rpb243XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHVyZUZ1bmN0aW9uOD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cHVyZUZ1bmN0aW9uOFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHB1cmVGdW5jdGlvblY9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXB1cmVGdW5jdGlvblZcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwaXBlQmluZDE9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXBpcGVCaW5kMVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHBpcGVCaW5kMj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cGlwZUJpbmQyXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcGlwZUJpbmQzPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVwaXBlQmluZDNcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwaXBlQmluZDQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXBpcGVCaW5kNFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHBpcGVCaW5kVj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cGlwZUJpbmRWXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgaG9zdFByb3BlcnR5PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVob3N0UHJvcGVydHlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwcm9wZXJ0eT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cHJvcGVydHlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwcm9wZXJ0eUludGVycG9sYXRlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVwcm9wZXJ0eUludGVycG9sYXRlXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTE9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGUxXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTI9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGUyXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTM9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGUzXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGU0XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGU1XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTY9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGU2XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTc9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGU3XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZTg9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGU4XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcHJvcGVydHlJbnRlcnBvbGF0ZVY9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb3BlcnR5SW50ZXJwb2xhdGVWXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgaTE4bj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1aTE4blwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGkxOG5BdHRyaWJ1dGVzPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVpMThuQXR0cmlidXRlc1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIGkxOG5FeHA9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWkxOG5FeHBcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBpMThuU3RhcnQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWkxOG5TdGFydFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGkxOG5FbmQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWkxOG5FbmRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBpMThuQXBwbHk9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWkxOG5BcHBseVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGkxOG5Qb3N0cHJvY2Vzcz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1aTE4blBvc3Rwcm9jZXNzXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcGlwZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cGlwZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHByb2plY3Rpb249e25hbWU6XCJcXHUwMjc1XFx1MDI3NXByb2plY3Rpb25cIixtb2R1bGVOYW1lOml9O3N0YXRpYyBwcm9qZWN0aW9uRGVmPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVwcm9qZWN0aW9uRGVmXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcmVmZXJlbmNlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVyZWZlcmVuY2VcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBpbmplY3Q9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWluamVjdFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGluamVjdEF0dHJpYnV0ZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1aW5qZWN0QXR0cmlidXRlXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGlyZWN0aXZlSW5qZWN0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVkaXJlY3RpdmVJbmplY3RcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBpbnZhbGlkRmFjdG9yeT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1aW52YWxpZEZhY3RvcnlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBpbnZhbGlkRmFjdG9yeURlcD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1aW52YWxpZEZhY3RvcnlEZXBcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0ZW1wbGF0ZVJlZkV4dHJhY3Rvcj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1dGVtcGxhdGVSZWZFeHRyYWN0b3JcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBmb3J3YXJkUmVmPXtuYW1lOlwiZm9yd2FyZFJlZlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHJlc29sdmVGb3J3YXJkUmVmPXtuYW1lOlwicmVzb2x2ZUZvcndhcmRSZWZcIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZXBsYWNlTWV0YWRhdGE9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXJlcGxhY2VNZXRhZGF0YVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIFxcdTAyNzVcXHUwMjc1ZGVmaW5lSW5qZWN0YWJsZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVmaW5lSW5qZWN0YWJsZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlY2xhcmVJbmplY3RhYmxlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVuZ0RlY2xhcmVJbmplY3RhYmxlXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgSW5qZWN0YWJsZURlY2xhcmF0aW9uPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVJbmplY3RhYmxlRGVjbGFyYXRpb25cIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZXNvbHZlV2luZG93PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVyZXNvbHZlV2luZG93XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcmVzb2x2ZURvY3VtZW50PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVyZXNvbHZlRG9jdW1lbnRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZXNvbHZlQm9keT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cmVzb2x2ZUJvZHlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBnZXRDb21wb25lbnREZXBzRmFjdG9yeT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1Z2V0Q29tcG9uZW50RGVwc0ZhY3RvcnlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZpbmVDb21wb25lbnQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmluZUNvbXBvbmVudFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlY2xhcmVDb21wb25lbnQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NW5nRGVjbGFyZUNvbXBvbmVudFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHNldENvbXBvbmVudFNjb3BlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzZXRDb21wb25lbnRTY29wZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIENoYW5nZURldGVjdGlvblN0cmF0ZWd5PXtuYW1lOlwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBWaWV3RW5jYXBzdWxhdGlvbj17bmFtZTpcIlZpZXdFbmNhcHN1bGF0aW9uXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgQ29tcG9uZW50RGVjbGFyYXRpb249e25hbWU6XCJcXHUwMjc1XFx1MDI3NUNvbXBvbmVudERlY2xhcmF0aW9uXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgRmFjdG9yeURlY2xhcmF0aW9uPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVGYWN0b3J5RGVjbGFyYXRpb25cIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWNsYXJlRmFjdG9yeT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1bmdEZWNsYXJlRmFjdG9yeVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIEZhY3RvcnlUYXJnZXQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NUZhY3RvcnlUYXJnZXRcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZpbmVEaXJlY3RpdmU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmluZURpcmVjdGl2ZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlY2xhcmVEaXJlY3RpdmU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NW5nRGVjbGFyZURpcmVjdGl2ZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIERpcmVjdGl2ZURlY2xhcmF0aW9uPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVEaXJlY3RpdmVEZWNsYXJhdGlvblwiLG1vZHVsZU5hbWU6aX07c3RhdGljIEluamVjdG9yRGVmPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVJbmplY3RvckRlZlwiLG1vZHVsZU5hbWU6aX07c3RhdGljIEluamVjdG9yRGVjbGFyYXRpb249e25hbWU6XCJcXHUwMjc1XFx1MDI3NUluamVjdG9yRGVjbGFyYXRpb25cIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWZpbmVJbmplY3Rvcj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVmaW5lSW5qZWN0b3JcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWNsYXJlSW5qZWN0b3I9e25hbWU6XCJcXHUwMjc1XFx1MDI3NW5nRGVjbGFyZUluamVjdG9yXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgTmdNb2R1bGVEZWNsYXJhdGlvbj17bmFtZTpcIlxcdTAyNzVcXHUwMjc1TmdNb2R1bGVEZWNsYXJhdGlvblwiLG1vZHVsZU5hbWU6aX07c3RhdGljIE1vZHVsZVdpdGhQcm92aWRlcnM9e25hbWU6XCJNb2R1bGVXaXRoUHJvdmlkZXJzXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGVmaW5lTmdNb2R1bGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmluZU5nTW9kdWxlXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGVjbGFyZU5nTW9kdWxlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVuZ0RlY2xhcmVOZ01vZHVsZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHNldE5nTW9kdWxlU2NvcGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXNldE5nTW9kdWxlU2NvcGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyByZWdpc3Rlck5nTW9kdWxlVHlwZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1cmVnaXN0ZXJOZ01vZHVsZVR5cGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBQaXBlRGVjbGFyYXRpb249e25hbWU6XCJcXHUwMjc1XFx1MDI3NVBpcGVEZWNsYXJhdGlvblwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlZmluZVBpcGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWRlZmluZVBpcGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBkZWNsYXJlUGlwZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1bmdEZWNsYXJlUGlwZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGRlY2xhcmVDbGFzc01ldGFkYXRhPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVuZ0RlY2xhcmVDbGFzc01ldGFkYXRhXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGVjbGFyZUNsYXNzTWV0YWRhdGFBc3luYz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1bmdEZWNsYXJlQ2xhc3NNZXRhZGF0YUFzeW5jXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc2V0Q2xhc3NNZXRhZGF0YT17bmFtZTpcIlxcdTAyNzVzZXRDbGFzc01ldGFkYXRhXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc2V0Q2xhc3NNZXRhZGF0YUFzeW5jPXtuYW1lOlwiXFx1MDI3NXNldENsYXNzTWV0YWRhdGFBc3luY1wiLG1vZHVsZU5hbWU6aX07c3RhdGljIHNldENsYXNzRGVidWdJbmZvPXtuYW1lOlwiXFx1MDI3NXNldENsYXNzRGVidWdJbmZvXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcXVlcnlSZWZyZXNoPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVxdWVyeVJlZnJlc2hcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB2aWV3UXVlcnk9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXZpZXdRdWVyeVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGxvYWRRdWVyeT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1bG9hZFF1ZXJ5XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgY29udGVudFF1ZXJ5PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVjb250ZW50UXVlcnlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB2aWV3UXVlcnlTaWduYWw9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXZpZXdRdWVyeVNpZ25hbFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGNvbnRlbnRRdWVyeVNpZ25hbD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1Y29udGVudFF1ZXJ5U2lnbmFsXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgcXVlcnlBZHZhbmNlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVxdWVyeUFkdmFuY2VcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0d29XYXlQcm9wZXJ0eT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1dHdvV2F5UHJvcGVydHlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0d29XYXlCaW5kaW5nU2V0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzV0d29XYXlCaW5kaW5nU2V0XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgdHdvV2F5TGlzdGVuZXI9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXR3b1dheUxpc3RlbmVyXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgZGVjbGFyZUxldD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1ZGVjbGFyZUxldFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHN0b3JlTGV0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzdG9yZUxldFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHJlYWRDb250ZXh0TGV0PXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVyZWFkQ29udGV4dExldFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGF0dGFjaFNvdXJjZUxvY2F0aW9ucz17bmFtZTpcIlxcdTAyNzVcXHUwMjc1YXR0YWNoU291cmNlTG9jYXRpb25zXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgTmdPbkNoYW5nZXNGZWF0dXJlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVOZ09uQ2hhbmdlc0ZlYXR1cmVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBJbmhlcml0RGVmaW5pdGlvbkZlYXR1cmU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NUluaGVyaXREZWZpbml0aW9uRmVhdHVyZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIENvcHlEZWZpbml0aW9uRmVhdHVyZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1Q29weURlZmluaXRpb25GZWF0dXJlXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgUHJvdmlkZXJzRmVhdHVyZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1UHJvdmlkZXJzRmVhdHVyZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIEhvc3REaXJlY3RpdmVzRmVhdHVyZT17bmFtZTpcIlxcdTAyNzVcXHUwMjc1SG9zdERpcmVjdGl2ZXNGZWF0dXJlXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgSW5wdXRUcmFuc2Zvcm1zRmVhdHVyZUZlYXR1cmU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NUlucHV0VHJhbnNmb3Jtc0ZlYXR1cmVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBFeHRlcm5hbFN0eWxlc0ZlYXR1cmU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NUV4dGVybmFsU3R5bGVzRmVhdHVyZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGxpc3RlbmVyPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVsaXN0ZW5lclwiLG1vZHVsZU5hbWU6aX07c3RhdGljIGdldEluaGVyaXRlZEZhY3Rvcnk9e25hbWU6XCJcXHUwMjc1XFx1MDI3NWdldEluaGVyaXRlZEZhY3RvcnlcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBzYW5pdGl6ZUh0bWw9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXNhbml0aXplSHRtbFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHNhbml0aXplU3R5bGU9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXNhbml0aXplU3R5bGVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBzYW5pdGl6ZVJlc291cmNlVXJsPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzYW5pdGl6ZVJlc291cmNlVXJsXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc2FuaXRpemVTY3JpcHQ9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXNhbml0aXplU2NyaXB0XCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc2FuaXRpemVVcmw9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXNhbml0aXplVXJsXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgc2FuaXRpemVVcmxPclJlc291cmNlVXJsPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzVzYW5pdGl6ZVVybE9yUmVzb3VyY2VVcmxcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0cnVzdENvbnN0YW50SHRtbD17bmFtZTpcIlxcdTAyNzVcXHUwMjc1dHJ1c3RDb25zdGFudEh0bWxcIixtb2R1bGVOYW1lOml9O3N0YXRpYyB0cnVzdENvbnN0YW50UmVzb3VyY2VVcmw9e25hbWU6XCJcXHUwMjc1XFx1MDI3NXRydXN0Q29uc3RhbnRSZXNvdXJjZVVybFwiLG1vZHVsZU5hbWU6aX07c3RhdGljIHZhbGlkYXRlSWZyYW1lQXR0cmlidXRlPXtuYW1lOlwiXFx1MDI3NVxcdTAyNzV2YWxpZGF0ZUlmcmFtZUF0dHJpYnV0ZVwiLG1vZHVsZU5hbWU6aX07c3RhdGljIElucHV0U2lnbmFsQnJhbmRXcml0ZVR5cGU9e25hbWU6XCJcXHUwMjc1SU5QVVRfU0lHTkFMX0JSQU5EX1dSSVRFX1RZUEVcIixtb2R1bGVOYW1lOml9O3N0YXRpYyBVbndyYXBEaXJlY3RpdmVTaWduYWxJbnB1dHM9e25hbWU6XCJcXHUwMjc1VW53cmFwRGlyZWN0aXZlU2lnbmFsSW5wdXRzXCIsbW9kdWxlTmFtZTppfTtzdGF0aWMgdW53cmFwV3JpdGFibGVTaWduYWw9e25hbWU6XCJcXHUwMjc1dW53cmFwV3JpdGFibGVTaWduYWxcIixtb2R1bGVOYW1lOml9fTt2YXIgU3Q9Y2xhc3N7ZnVsbDttYWpvcjttaW5vcjtwYXRjaDtjb25zdHJ1Y3RvcihlKXt0aGlzLmZ1bGw9ZTtsZXQgbj1lLnNwbGl0KFwiLlwiKTt0aGlzLm1ham9yPW5bMF0sdGhpcy5taW5vcj1uWzFdLHRoaXMucGF0Y2g9bi5zbGljZSgyKS5qb2luKFwiLlwiKX19O3ZhciBvbjsoZnVuY3Rpb24odCl7dFt0LkNsYXNzPTBdPVwiQ2xhc3NcIix0W3QuRnVuY3Rpb249MV09XCJGdW5jdGlvblwifSkob258fChvbj17fSkpO3ZhciBhbjsoZnVuY3Rpb24odCl7dFt0LkRpcmVjdGl2ZT0wXT1cIkRpcmVjdGl2ZVwiLHRbdC5Db21wb25lbnQ9MV09XCJDb21wb25lbnRcIix0W3QuSW5qZWN0YWJsZT0yXT1cIkluamVjdGFibGVcIix0W3QuUGlwZT0zXT1cIlBpcGVcIix0W3QuTmdNb2R1bGU9NF09XCJOZ01vZHVsZVwifSkoYW58fChhbj17fSkpO3ZhciB5ZT1jbGFzc3tpbnB1dDtlcnJMb2NhdGlvbjtjdHhMb2NhdGlvbjttZXNzYWdlO2NvbnN0cnVjdG9yKGUsbixzLHIpe3RoaXMuaW5wdXQ9bix0aGlzLmVyckxvY2F0aW9uPXMsdGhpcy5jdHhMb2NhdGlvbj1yLHRoaXMubWVzc2FnZT1gUGFyc2VyIEVycm9yOiAke2V9ICR7c30gWyR7bn1dIGluICR7cn1gfX0sRz1jbGFzc3tzdGFydDtlbmQ7Y29uc3RydWN0b3IoZSxuKXt0aGlzLnN0YXJ0PWUsdGhpcy5lbmQ9bn10b0Fic29sdXRlKGUpe3JldHVybiBuZXcgTyhlK3RoaXMuc3RhcnQsZSt0aGlzLmVuZCl9fSxFPWNsYXNze3NwYW47c291cmNlU3Bhbjtjb25zdHJ1Y3RvcihlLG4pe3RoaXMuc3Bhbj1lLHRoaXMuc291cmNlU3Bhbj1ufXRvU3RyaW5nKCl7cmV0dXJuXCJBU1RcIn19LHNlPWNsYXNzIGV4dGVuZHMgRXtuYW1lU3Bhbjtjb25zdHJ1Y3RvcihlLG4scyl7c3VwZXIoZSxuKSx0aGlzLm5hbWVTcGFuPXN9fSxiPWNsYXNzIGV4dGVuZHMgRXt2aXNpdChlLG49bnVsbCl7fX0sWD1jbGFzcyBleHRlbmRzIEV7dmlzaXQoZSxuPW51bGwpe3JldHVybiBlLnZpc2l0SW1wbGljaXRSZWNlaXZlcih0aGlzLG4pfX0sRXQ9Y2xhc3MgZXh0ZW5kcyBYe3Zpc2l0KGUsbj1udWxsKXt2YXIgcztyZXR1cm4ocz1lLnZpc2l0VGhpc1JlY2VpdmVyKT09bnVsbD92b2lkIDA6cy5jYWxsKGUsdGhpcyxuKX19LF9lPWNsYXNzIGV4dGVuZHMgRXtleHByZXNzaW9ucztjb25zdHJ1Y3RvcihlLG4scyl7c3VwZXIoZSxuKSx0aGlzLmV4cHJlc3Npb25zPXN9dmlzaXQoZSxuPW51bGwpe3JldHVybiBlLnZpc2l0Q2hhaW4odGhpcyxuKX19LENlPWNsYXNzIGV4dGVuZHMgRXtjb25kaXRpb247dHJ1ZUV4cDtmYWxzZUV4cDtjb25zdHJ1Y3RvcihlLG4scyxyLG8pe3N1cGVyKGUsbiksdGhpcy5jb25kaXRpb249cyx0aGlzLnRydWVFeHA9cix0aGlzLmZhbHNlRXhwPW99dmlzaXQoZSxuPW51bGwpe3JldHVybiBlLnZpc2l0Q29uZGl0aW9uYWwodGhpcyxuKX19LHJlPWNsYXNzIGV4dGVuZHMgc2V7cmVjZWl2ZXI7bmFtZTtjb25zdHJ1Y3RvcihlLG4scyxyLG8pe3N1cGVyKGUsbixzKSx0aGlzLnJlY2VpdmVyPXIsdGhpcy5uYW1lPW99dmlzaXQoZSxuPW51bGwpe3JldHVybiBlLnZpc2l0UHJvcGVydHlSZWFkKHRoaXMsbil9fSxUZT1jbGFzcyBleHRlbmRzIHNle3JlY2VpdmVyO25hbWU7dmFsdWU7Y29uc3RydWN0b3IoZSxuLHMscixvLGEpe3N1cGVyKGUsbixzKSx0aGlzLnJlY2VpdmVyPXIsdGhpcy5uYW1lPW8sdGhpcy52YWx1ZT1hfXZpc2l0KGUsbj1udWxsKXtyZXR1cm4gZS52aXNpdFByb3BlcnR5V3JpdGUodGhpcyxuKX19LGllPWNsYXNzIGV4dGVuZHMgc2V7cmVjZWl2ZXI7bmFtZTtjb25zdHJ1Y3RvcihlLG4scyxyLG8pe3N1cGVyKGUsbixzKSx0aGlzLnJlY2VpdmVyPXIsdGhpcy5uYW1lPW99dmlzaXQoZSxuPW51bGwpe3JldHVybiBlLnZpc2l0U2FmZVByb3BlcnR5UmVhZCh0aGlzLG4pfX0sa2U9Y2xhc3MgZXh0ZW5kcyBFe3JlY2VpdmVyO2tleTtjb25zdHJ1Y3RvcihlLG4scyxyKXtzdXBlcihlLG4pLHRoaXMucmVjZWl2ZXI9cyx0aGlzLmtleT1yfXZpc2l0KGUsbj1udWxsKXtyZXR1cm4gZS52aXNpdEtleWVkUmVhZCh0aGlzLG4pfX0sb2U9Y2xhc3MgZXh0ZW5kcyBFe3JlY2VpdmVyO2tleTtjb25zdHJ1Y3RvcihlLG4scyxyKXtzdXBlcihlLG4pLHRoaXMucmVjZWl2ZXI9cyx0aGlzLmtleT1yfXZpc2l0KGUsbj1udWxsKXtyZXR1cm4gZS52aXNpdFNhZmVLZXllZFJlYWQodGhpcyxuKX19LEllPWNsYXNzIGV4dGVuZHMgRXtyZWNlaXZlcjtrZXk7dmFsdWU7Y29uc3RydWN0b3IoZSxuLHMscixvKXtzdXBlcihlLG4pLHRoaXMucmVjZWl2ZXI9cyx0aGlzLmtleT1yLHRoaXMudmFsdWU9b312aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRLZXllZFdyaXRlKHRoaXMsbil9fSxiZT1jbGFzcyBleHRlbmRzIHNle2V4cDtuYW1lO2FyZ3M7Y29uc3RydWN0b3IoZSxuLHMscixvLGEpe3N1cGVyKGUsbixhKSx0aGlzLmV4cD1zLHRoaXMubmFtZT1yLHRoaXMuYXJncz1vfXZpc2l0KGUsbj1udWxsKXtyZXR1cm4gZS52aXNpdFBpcGUodGhpcyxuKX19LE49Y2xhc3MgZXh0ZW5kcyBFe3ZhbHVlO2NvbnN0cnVjdG9yKGUsbixzKXtzdXBlcihlLG4pLHRoaXMudmFsdWU9c312aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRMaXRlcmFsUHJpbWl0aXZlKHRoaXMsbil9fSxOZT1jbGFzcyBleHRlbmRzIEV7ZXhwcmVzc2lvbnM7Y29uc3RydWN0b3IoZSxuLHMpe3N1cGVyKGUsbiksdGhpcy5leHByZXNzaW9ucz1zfXZpc2l0KGUsbj1udWxsKXtyZXR1cm4gZS52aXNpdExpdGVyYWxBcnJheSh0aGlzLG4pfX0sQWU9Y2xhc3MgZXh0ZW5kcyBFe2tleXM7dmFsdWVzO2NvbnN0cnVjdG9yKGUsbixzLHIpe3N1cGVyKGUsbiksdGhpcy5rZXlzPXMsdGhpcy52YWx1ZXM9cn12aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRMaXRlcmFsTWFwKHRoaXMsbil9fSxQZT1jbGFzcyBleHRlbmRzIEV7c3RyaW5ncztleHByZXNzaW9ucztjb25zdHJ1Y3RvcihlLG4scyxyKXtzdXBlcihlLG4pLHRoaXMuc3RyaW5ncz1zLHRoaXMuZXhwcmVzc2lvbnM9cn12aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRJbnRlcnBvbGF0aW9uKHRoaXMsbil9fSxBPWNsYXNzIGV4dGVuZHMgRXtvcGVyYXRpb247bGVmdDtyaWdodDtjb25zdHJ1Y3RvcihlLG4scyxyLG8pe3N1cGVyKGUsbiksdGhpcy5vcGVyYXRpb249cyx0aGlzLmxlZnQ9cix0aGlzLnJpZ2h0PW99dmlzaXQoZSxuPW51bGwpe3JldHVybiBlLnZpc2l0QmluYXJ5KHRoaXMsbil9fSxhZT1jbGFzcyB0IGV4dGVuZHMgQXtvcGVyYXRvcjtleHByO2xlZnQ9bnVsbDtyaWdodD1udWxsO29wZXJhdGlvbj1udWxsO3N0YXRpYyBjcmVhdGVNaW51cyhlLG4scyl7cmV0dXJuIG5ldyB0KGUsbixcIi1cIixzLFwiLVwiLG5ldyBOKGUsbiwwKSxzKX1zdGF0aWMgY3JlYXRlUGx1cyhlLG4scyl7cmV0dXJuIG5ldyB0KGUsbixcIitcIixzLFwiLVwiLHMsbmV3IE4oZSxuLDApKX1jb25zdHJ1Y3RvcihlLG4scyxyLG8sYSxsKXtzdXBlcihlLG4sbyxhLGwpLHRoaXMub3BlcmF0b3I9cyx0aGlzLmV4cHI9cn12aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRVbmFyeSE9PXZvaWQgMD9lLnZpc2l0VW5hcnkodGhpcyxuKTplLnZpc2l0QmluYXJ5KHRoaXMsbil9fSxMZT1jbGFzcyBleHRlbmRzIEV7ZXhwcmVzc2lvbjtjb25zdHJ1Y3RvcihlLG4scyl7c3VwZXIoZSxuKSx0aGlzLmV4cHJlc3Npb249c312aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRQcmVmaXhOb3QodGhpcyxuKX19LE1lPWNsYXNzIGV4dGVuZHMgRXtleHByZXNzaW9uO2NvbnN0cnVjdG9yKGUsbixzKXtzdXBlcihlLG4pLHRoaXMuZXhwcmVzc2lvbj1zfXZpc2l0KGUsbj1udWxsKXtyZXR1cm4gZS52aXNpdFR5cGVvZkV4cHJlc3Npb24odGhpcyxuKX19LCRlPWNsYXNzIGV4dGVuZHMgRXtleHByZXNzaW9uO2NvbnN0cnVjdG9yKGUsbixzKXtzdXBlcihlLG4pLHRoaXMuZXhwcmVzc2lvbj1zfXZpc2l0KGUsbj1udWxsKXtyZXR1cm4gZS52aXNpdE5vbk51bGxBc3NlcnQodGhpcyxuKX19LFJlPWNsYXNzIGV4dGVuZHMgRXtyZWNlaXZlcjthcmdzO2FyZ3VtZW50U3Bhbjtjb25zdHJ1Y3RvcihlLG4scyxyLG8pe3N1cGVyKGUsbiksdGhpcy5yZWNlaXZlcj1zLHRoaXMuYXJncz1yLHRoaXMuYXJndW1lbnRTcGFuPW99dmlzaXQoZSxuPW51bGwpe3JldHVybiBlLnZpc2l0Q2FsbCh0aGlzLG4pfX0sbGU9Y2xhc3MgZXh0ZW5kcyBFe3JlY2VpdmVyO2FyZ3M7YXJndW1lbnRTcGFuO2NvbnN0cnVjdG9yKGUsbixzLHIsbyl7c3VwZXIoZSxuKSx0aGlzLnJlY2VpdmVyPXMsdGhpcy5hcmdzPXIsdGhpcy5hcmd1bWVudFNwYW49b312aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRTYWZlQ2FsbCh0aGlzLG4pfX0sTz1jbGFzc3tzdGFydDtlbmQ7Y29uc3RydWN0b3IoZSxuKXt0aGlzLnN0YXJ0PWUsdGhpcy5lbmQ9bn19LFc9Y2xhc3MgZXh0ZW5kcyBFe2FzdDtzb3VyY2U7bG9jYXRpb247ZXJyb3JzO2NvbnN0cnVjdG9yKGUsbixzLHIsbyl7c3VwZXIobmV3IEcoMCxuPT09bnVsbD8wOm4ubGVuZ3RoKSxuZXcgTyhyLG49PT1udWxsP3I6cituLmxlbmd0aCkpLHRoaXMuYXN0PWUsdGhpcy5zb3VyY2U9bix0aGlzLmxvY2F0aW9uPXMsdGhpcy5lcnJvcnM9b312aXNpdChlLG49bnVsbCl7cmV0dXJuIGUudmlzaXRBU1RXaXRoU291cmNlP2UudmlzaXRBU1RXaXRoU291cmNlKHRoaXMsbik6dGhpcy5hc3QudmlzaXQoZSxuKX10b1N0cmluZygpe3JldHVybmAke3RoaXMuc291cmNlfSBpbiAke3RoaXMubG9jYXRpb259YH19LGNlPWNsYXNze3NvdXJjZVNwYW47a2V5O3ZhbHVlO2NvbnN0cnVjdG9yKGUsbixzKXt0aGlzLnNvdXJjZVNwYW49ZSx0aGlzLmtleT1uLHRoaXMudmFsdWU9c319LEJlPWNsYXNze3NvdXJjZVNwYW47a2V5O3ZhbHVlO2NvbnN0cnVjdG9yKGUsbixzKXt0aGlzLnNvdXJjZVNwYW49ZSx0aGlzLmtleT1uLHRoaXMudmFsdWU9c319LHl0PWNsYXNze3Zpc2l0KGUsbil7ZS52aXNpdCh0aGlzLG4pfXZpc2l0VW5hcnkoZSxuKXt0aGlzLnZpc2l0KGUuZXhwcixuKX12aXNpdEJpbmFyeShlLG4pe3RoaXMudmlzaXQoZS5sZWZ0LG4pLHRoaXMudmlzaXQoZS5yaWdodCxuKX12aXNpdENoYWluKGUsbil7dGhpcy52aXNpdEFsbChlLmV4cHJlc3Npb25zLG4pfXZpc2l0Q29uZGl0aW9uYWwoZSxuKXt0aGlzLnZpc2l0KGUuY29uZGl0aW9uLG4pLHRoaXMudmlzaXQoZS50cnVlRXhwLG4pLHRoaXMudmlzaXQoZS5mYWxzZUV4cCxuKX12aXNpdFBpcGUoZSxuKXt0aGlzLnZpc2l0KGUuZXhwLG4pLHRoaXMudmlzaXRBbGwoZS5hcmdzLG4pfXZpc2l0SW1wbGljaXRSZWNlaXZlcihlLG4pe312aXNpdFRoaXNSZWNlaXZlcihlLG4pe312aXNpdEludGVycG9sYXRpb24oZSxuKXt0aGlzLnZpc2l0QWxsKGUuZXhwcmVzc2lvbnMsbil9dmlzaXRLZXllZFJlYWQoZSxuKXt0aGlzLnZpc2l0KGUucmVjZWl2ZXIsbiksdGhpcy52aXNpdChlLmtleSxuKX12aXNpdEtleWVkV3JpdGUoZSxuKXt0aGlzLnZpc2l0KGUucmVjZWl2ZXIsbiksdGhpcy52aXNpdChlLmtleSxuKSx0aGlzLnZpc2l0KGUudmFsdWUsbil9dmlzaXRMaXRlcmFsQXJyYXkoZSxuKXt0aGlzLnZpc2l0QWxsKGUuZXhwcmVzc2lvbnMsbil9dmlzaXRMaXRlcmFsTWFwKGUsbil7dGhpcy52aXNpdEFsbChlLnZhbHVlcyxuKX12aXNpdExpdGVyYWxQcmltaXRpdmUoZSxuKXt9dmlzaXRQcmVmaXhOb3QoZSxuKXt0aGlzLnZpc2l0KGUuZXhwcmVzc2lvbixuKX12aXNpdFR5cGVvZkV4cHJlc3Npb24oZSxuKXt0aGlzLnZpc2l0KGUuZXhwcmVzc2lvbixuKX12aXNpdE5vbk51bGxBc3NlcnQoZSxuKXt0aGlzLnZpc2l0KGUuZXhwcmVzc2lvbixuKX12aXNpdFByb3BlcnR5UmVhZChlLG4pe3RoaXMudmlzaXQoZS5yZWNlaXZlcixuKX12aXNpdFByb3BlcnR5V3JpdGUoZSxuKXt0aGlzLnZpc2l0KGUucmVjZWl2ZXIsbiksdGhpcy52aXNpdChlLnZhbHVlLG4pfXZpc2l0U2FmZVByb3BlcnR5UmVhZChlLG4pe3RoaXMudmlzaXQoZS5yZWNlaXZlcixuKX12aXNpdFNhZmVLZXllZFJlYWQoZSxuKXt0aGlzLnZpc2l0KGUucmVjZWl2ZXIsbiksdGhpcy52aXNpdChlLmtleSxuKX12aXNpdENhbGwoZSxuKXt0aGlzLnZpc2l0KGUucmVjZWl2ZXIsbiksdGhpcy52aXNpdEFsbChlLmFyZ3Msbil9dmlzaXRTYWZlQ2FsbChlLG4pe3RoaXMudmlzaXQoZS5yZWNlaXZlcixuKSx0aGlzLnZpc2l0QWxsKGUuYXJncyxuKX12aXNpdEFsbChlLG4pe2ZvcihsZXQgcyBvZiBlKXRoaXMudmlzaXQocyxuKX19O3ZhciBsbjsoZnVuY3Rpb24odCl7dFt0LkRFRkFVTFQ9MF09XCJERUZBVUxUXCIsdFt0LkxJVEVSQUxfQVRUUj0xXT1cIkxJVEVSQUxfQVRUUlwiLHRbdC5BTklNQVRJT049Ml09XCJBTklNQVRJT05cIix0W3QuVFdPX1dBWT0zXT1cIlRXT19XQVlcIn0pKGxufHwobG49e30pKTt2YXIgY247KGZ1bmN0aW9uKHQpe3RbdC5SZWd1bGFyPTBdPVwiUmVndWxhclwiLHRbdC5BbmltYXRpb249MV09XCJBbmltYXRpb25cIix0W3QuVHdvV2F5PTJdPVwiVHdvV2F5XCJ9KShjbnx8KGNuPXt9KSk7dmFyIEg7KGZ1bmN0aW9uKHQpe3RbdC5Qcm9wZXJ0eT0wXT1cIlByb3BlcnR5XCIsdFt0LkF0dHJpYnV0ZT0xXT1cIkF0dHJpYnV0ZVwiLHRbdC5DbGFzcz0yXT1cIkNsYXNzXCIsdFt0LlN0eWxlPTNdPVwiU3R5bGVcIix0W3QuQW5pbWF0aW9uPTRdPVwiQW5pbWF0aW9uXCIsdFt0LlR3b1dheT01XT1cIlR3b1dheVwifSkoSHx8KEg9e30pKTt2YXIgdW47KGZ1bmN0aW9uKHQpe3RbdC5SQVdfVEVYVD0wXT1cIlJBV19URVhUXCIsdFt0LkVTQ0FQQUJMRV9SQVdfVEVYVD0xXT1cIkVTQ0FQQUJMRV9SQVdfVEVYVFwiLHRbdC5QQVJTQUJMRV9EQVRBPTJdPVwiUEFSU0FCTEVfREFUQVwifSkodW58fCh1bj17fSkpO3ZhciBGcz1bL0AvLC9eXFxzKiQvLC9bPD5dLywvXlt7fV0kLywvJigjfFthLXpdKS9pLC9eXFwvXFwvL107ZnVuY3Rpb24gVnModCxlKXtpZihlIT1udWxsJiYhKEFycmF5LmlzQXJyYXkoZSkmJmUubGVuZ3RoPT0yKSl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICcke3R9JyB0byBiZSBhbiBhcnJheSwgW3N0YXJ0LCBlbmRdLmApO2lmKGUhPW51bGwpe2xldCBuPWVbMF0scz1lWzFdO0ZzLmZvckVhY2gocj0+e2lmKHIudGVzdChuKXx8ci50ZXN0KHMpKXRocm93IG5ldyBFcnJvcihgWycke259JywgJyR7c30nXSBjb250YWlucyB1bnVzYWJsZSBpbnRlcnBvbGF0aW9uIHN5bWJvbC5gKX0pfX12YXIgX3Q9Y2xhc3MgdHtzdGFydDtlbmQ7c3RhdGljIGZyb21BcnJheShlKXtyZXR1cm4gZT8oVnMoXCJpbnRlcnBvbGF0aW9uXCIsZSksbmV3IHQoZVswXSxlWzFdKSk6Wn1jb25zdHJ1Y3RvcihlLG4pe3RoaXMuc3RhcnQ9ZSx0aGlzLmVuZD1ufX0sWj1uZXcgX3QoXCJ7e1wiLFwifX1cIik7dmFyIG90PTA7dmFyIFVuPTksSHM9MTAsVXM9MTEsV3M9MTIscXM9MTMsV249MzIsanM9MzMscW49MzQsenM9MzUsam49MzYsR3M9MzcscG49Mzgsem49MzksamU9NDAsbWU9NDEsWHM9NDIsR249NDMsZ2U9NDQsWG49NDUsZWU9NDYsQ3Q9NDcsdGU9NTgsdmU9NTksSnM9NjAscWU9NjEsWXM9NjIsaG49NjMsUXM9NDg7dmFyIEtzPTU3LEpuPTY1LFpzPTY5O3ZhciBZbj05MCx6ZT05MSxlcj05Mix3ZT05Myx0cj05NCxNdD05NSxRbj05Nzt2YXIgbnI9MTAxLHNyPTEwMixycj0xMTAsaXI9MTE0LG9yPTExNixhcj0xMTcsbHI9MTE4O3ZhciBLbj0xMjIsVHQ9MTIzLGZuPTEyNCx4ZT0xMjUsWm49MTYwO3ZhciBjcj05NjtmdW5jdGlvbiB1cih0KXtyZXR1cm4gdD49VW4mJnQ8PVdufHx0PT1abn1mdW5jdGlvbiBqKHQpe3JldHVybiBRczw9dCYmdDw9S3N9ZnVuY3Rpb24gcHIodCl7cmV0dXJuIHQ+PVFuJiZ0PD1Lbnx8dD49Sm4mJnQ8PVlufWZ1bmN0aW9uIGRuKHQpe3JldHVybiB0PT09em58fHQ9PT1xbnx8dD09PWNyfXZhciBtbjsoZnVuY3Rpb24odCl7dFt0LldBUk5JTkc9MF09XCJXQVJOSU5HXCIsdFt0LkVSUk9SPTFdPVwiRVJST1JcIn0pKG1ufHwobW49e30pKTt2YXIgZ247KGZ1bmN0aW9uKHQpe3RbdC5JbmxpbmU9MF09XCJJbmxpbmVcIix0W3QuU2lkZUVmZmVjdD0xXT1cIlNpZGVFZmZlY3RcIix0W3QuT21pdD0yXT1cIk9taXRcIn0pKGdufHwoZ249e30pKTt2YXIgdm47KGZ1bmN0aW9uKHQpe3RbdC5HbG9iYWw9MF09XCJHbG9iYWxcIix0W3QuTG9jYWw9MV09XCJMb2NhbFwifSkodm58fCh2bj17fSkpO3ZhciB3bjsoZnVuY3Rpb24odCl7dFt0LkRpcmVjdGl2ZT0wXT1cIkRpcmVjdGl2ZVwiLHRbdC5QaXBlPTFdPVwiUGlwZVwiLHRbdC5OZ01vZHVsZT0yXT1cIk5nTW9kdWxlXCJ9KSh3bnx8KHduPXt9KSk7dmFyIGhyPVwiKDood2hlcmV8aXMpXFxcXCgpP1wiO3ZhciBlcz1cIi1zaGFkb3djc3Nob3N0XCIsdHM9XCItc2hhZG93Y3NzY29udGV4dFwiLCR0PVwiKD86XFxcXCgoKD86XFxcXChbXikoXSpcXFxcKXxbXikoXSopKz8pXFxcXCkpPyhbXix7XSopXCIsSnI9bmV3IFJlZ0V4cChlcyskdCxcImdpbVwiKSxZcj1uZXcgUmVnRXhwKGhyK1wiKFwiK3RzKyR0K1wiKVwiLFwiZ2ltXCIpLFFyPW5ldyBSZWdFeHAodHMrJHQsXCJpbVwiKSxmcj1lcytcIi1uby1jb21iaW5hdG9yXCIsS3I9bmV3IFJlZ0V4cChgJHtmcn0oPyFbXihdKlxcXFwpKWAsXCJnXCIpO3ZhciBucz1cIiVDT01NRU5UJVwiLFpyPW5ldyBSZWdFeHAobnMsXCJnXCIpO3ZhciBlaT1uZXcgUmVnRXhwKGAoXFxcXHMqKD86JHtuc31cXFxccyopKikoW147XFxcXHtcXFxcfV0rPykoXFxcXHMqKSgoPzp7JUJMT0NLJX0/XFxcXHMqOz8pfCg/OlxcXFxzKjspKWAsXCJnXCIpO3ZhciBkcj1cIiVDT01NQV9JTl9QTEFDRUhPTERFUiVcIixtcj1cIiVTRU1JX0lOX1BMQUNFSE9MREVSJVwiLGdyPVwiJUNPTE9OX0lOX1BMQUNFSE9MREVSJVwiLHRpPW5ldyBSZWdFeHAoZHIsXCJnXCIpLG5pPW5ldyBSZWdFeHAobXIsXCJnXCIpLHNpPW5ldyBSZWdFeHAoZ3IsXCJnXCIpO3ZhciBmOyhmdW5jdGlvbih0KXt0W3QuTGlzdEVuZD0wXT1cIkxpc3RFbmRcIix0W3QuU3RhdGVtZW50PTFdPVwiU3RhdGVtZW50XCIsdFt0LlZhcmlhYmxlPTJdPVwiVmFyaWFibGVcIix0W3QuRWxlbWVudFN0YXJ0PTNdPVwiRWxlbWVudFN0YXJ0XCIsdFt0LkVsZW1lbnQ9NF09XCJFbGVtZW50XCIsdFt0LlRlbXBsYXRlPTVdPVwiVGVtcGxhdGVcIix0W3QuRWxlbWVudEVuZD02XT1cIkVsZW1lbnRFbmRcIix0W3QuQ29udGFpbmVyU3RhcnQ9N109XCJDb250YWluZXJTdGFydFwiLHRbdC5Db250YWluZXI9OF09XCJDb250YWluZXJcIix0W3QuQ29udGFpbmVyRW5kPTldPVwiQ29udGFpbmVyRW5kXCIsdFt0LkRpc2FibGVCaW5kaW5ncz0xMF09XCJEaXNhYmxlQmluZGluZ3NcIix0W3QuQ29uZGl0aW9uYWw9MTFdPVwiQ29uZGl0aW9uYWxcIix0W3QuRW5hYmxlQmluZGluZ3M9MTJdPVwiRW5hYmxlQmluZGluZ3NcIix0W3QuVGV4dD0xM109XCJUZXh0XCIsdFt0Lkxpc3RlbmVyPTE0XT1cIkxpc3RlbmVyXCIsdFt0LkludGVycG9sYXRlVGV4dD0xNV09XCJJbnRlcnBvbGF0ZVRleHRcIix0W3QuQmluZGluZz0xNl09XCJCaW5kaW5nXCIsdFt0LlByb3BlcnR5PTE3XT1cIlByb3BlcnR5XCIsdFt0LlN0eWxlUHJvcD0xOF09XCJTdHlsZVByb3BcIix0W3QuQ2xhc3NQcm9wPTE5XT1cIkNsYXNzUHJvcFwiLHRbdC5TdHlsZU1hcD0yMF09XCJTdHlsZU1hcFwiLHRbdC5DbGFzc01hcD0yMV09XCJDbGFzc01hcFwiLHRbdC5BZHZhbmNlPTIyXT1cIkFkdmFuY2VcIix0W3QuUGlwZT0yM109XCJQaXBlXCIsdFt0LkF0dHJpYnV0ZT0yNF09XCJBdHRyaWJ1dGVcIix0W3QuRXh0cmFjdGVkQXR0cmlidXRlPTI1XT1cIkV4dHJhY3RlZEF0dHJpYnV0ZVwiLHRbdC5EZWZlcj0yNl09XCJEZWZlclwiLHRbdC5EZWZlck9uPTI3XT1cIkRlZmVyT25cIix0W3QuRGVmZXJXaGVuPTI4XT1cIkRlZmVyV2hlblwiLHRbdC5JMThuTWVzc2FnZT0yOV09XCJJMThuTWVzc2FnZVwiLHRbdC5Ib3N0UHJvcGVydHk9MzBdPVwiSG9zdFByb3BlcnR5XCIsdFt0Lk5hbWVzcGFjZT0zMV09XCJOYW1lc3BhY2VcIix0W3QuUHJvamVjdGlvbkRlZj0zMl09XCJQcm9qZWN0aW9uRGVmXCIsdFt0LlByb2plY3Rpb249MzNdPVwiUHJvamVjdGlvblwiLHRbdC5SZXBlYXRlckNyZWF0ZT0zNF09XCJSZXBlYXRlckNyZWF0ZVwiLHRbdC5SZXBlYXRlcj0zNV09XCJSZXBlYXRlclwiLHRbdC5Ud29XYXlQcm9wZXJ0eT0zNl09XCJUd29XYXlQcm9wZXJ0eVwiLHRbdC5Ud29XYXlMaXN0ZW5lcj0zN109XCJUd29XYXlMaXN0ZW5lclwiLHRbdC5EZWNsYXJlTGV0PTM4XT1cIkRlY2xhcmVMZXRcIix0W3QuU3RvcmVMZXQ9MzldPVwiU3RvcmVMZXRcIix0W3QuSTE4blN0YXJ0PTQwXT1cIkkxOG5TdGFydFwiLHRbdC5JMThuPTQxXT1cIkkxOG5cIix0W3QuSTE4bkVuZD00Ml09XCJJMThuRW5kXCIsdFt0LkkxOG5FeHByZXNzaW9uPTQzXT1cIkkxOG5FeHByZXNzaW9uXCIsdFt0LkkxOG5BcHBseT00NF09XCJJMThuQXBwbHlcIix0W3QuSWN1U3RhcnQ9NDVdPVwiSWN1U3RhcnRcIix0W3QuSWN1RW5kPTQ2XT1cIkljdUVuZFwiLHRbdC5JY3VQbGFjZWhvbGRlcj00N109XCJJY3VQbGFjZWhvbGRlclwiLHRbdC5JMThuQ29udGV4dD00OF09XCJJMThuQ29udGV4dFwiLHRbdC5JMThuQXR0cmlidXRlcz00OV09XCJJMThuQXR0cmlidXRlc1wiLHRbdC5Tb3VyY2VMb2NhdGlvbj01MF09XCJTb3VyY2VMb2NhdGlvblwifSkoZnx8KGY9e30pKTt2YXIgSjsoZnVuY3Rpb24odCl7dFt0LkxleGljYWxSZWFkPTBdPVwiTGV4aWNhbFJlYWRcIix0W3QuQ29udGV4dD0xXT1cIkNvbnRleHRcIix0W3QuVHJhY2tDb250ZXh0PTJdPVwiVHJhY2tDb250ZXh0XCIsdFt0LlJlYWRWYXJpYWJsZT0zXT1cIlJlYWRWYXJpYWJsZVwiLHRbdC5OZXh0Q29udGV4dD00XT1cIk5leHRDb250ZXh0XCIsdFt0LlJlZmVyZW5jZT01XT1cIlJlZmVyZW5jZVwiLHRbdC5TdG9yZUxldD02XT1cIlN0b3JlTGV0XCIsdFt0LkNvbnRleHRMZXRSZWZlcmVuY2U9N109XCJDb250ZXh0TGV0UmVmZXJlbmNlXCIsdFt0LkdldEN1cnJlbnRWaWV3PThdPVwiR2V0Q3VycmVudFZpZXdcIix0W3QuUmVzdG9yZVZpZXc9OV09XCJSZXN0b3JlVmlld1wiLHRbdC5SZXNldFZpZXc9MTBdPVwiUmVzZXRWaWV3XCIsdFt0LlB1cmVGdW5jdGlvbkV4cHI9MTFdPVwiUHVyZUZ1bmN0aW9uRXhwclwiLHRbdC5QdXJlRnVuY3Rpb25QYXJhbWV0ZXJFeHByPTEyXT1cIlB1cmVGdW5jdGlvblBhcmFtZXRlckV4cHJcIix0W3QuUGlwZUJpbmRpbmc9MTNdPVwiUGlwZUJpbmRpbmdcIix0W3QuUGlwZUJpbmRpbmdWYXJpYWRpYz0xNF09XCJQaXBlQmluZGluZ1ZhcmlhZGljXCIsdFt0LlNhZmVQcm9wZXJ0eVJlYWQ9MTVdPVwiU2FmZVByb3BlcnR5UmVhZFwiLHRbdC5TYWZlS2V5ZWRSZWFkPTE2XT1cIlNhZmVLZXllZFJlYWRcIix0W3QuU2FmZUludm9rZUZ1bmN0aW9uPTE3XT1cIlNhZmVJbnZva2VGdW5jdGlvblwiLHRbdC5TYWZlVGVybmFyeUV4cHI9MThdPVwiU2FmZVRlcm5hcnlFeHByXCIsdFt0LkVtcHR5RXhwcj0xOV09XCJFbXB0eUV4cHJcIix0W3QuQXNzaWduVGVtcG9yYXJ5RXhwcj0yMF09XCJBc3NpZ25UZW1wb3JhcnlFeHByXCIsdFt0LlJlYWRUZW1wb3JhcnlFeHByPTIxXT1cIlJlYWRUZW1wb3JhcnlFeHByXCIsdFt0LlNsb3RMaXRlcmFsRXhwcj0yMl09XCJTbG90TGl0ZXJhbEV4cHJcIix0W3QuQ29uZGl0aW9uYWxDYXNlPTIzXT1cIkNvbmRpdGlvbmFsQ2FzZVwiLHRbdC5Db25zdENvbGxlY3RlZD0yNF09XCJDb25zdENvbGxlY3RlZFwiLHRbdC5Ud29XYXlCaW5kaW5nU2V0PTI1XT1cIlR3b1dheUJpbmRpbmdTZXRcIn0pKEp8fChKPXt9KSk7dmFyIHhuOyhmdW5jdGlvbih0KXt0W3QuTm9uZT0wXT1cIk5vbmVcIix0W3QuQWx3YXlzSW5saW5lPTFdPVwiQWx3YXlzSW5saW5lXCJ9KSh4bnx8KHhuPXt9KSk7dmFyIFNuOyhmdW5jdGlvbih0KXt0W3QuQ29udGV4dD0wXT1cIkNvbnRleHRcIix0W3QuSWRlbnRpZmllcj0xXT1cIklkZW50aWZpZXJcIix0W3QuU2F2ZWRWaWV3PTJdPVwiU2F2ZWRWaWV3XCIsdFt0LkFsaWFzPTNdPVwiQWxpYXNcIn0pKFNufHwoU249e30pKTt2YXIgRW47KGZ1bmN0aW9uKHQpe3RbdC5Ob3JtYWw9MF09XCJOb3JtYWxcIix0W3QuVGVtcGxhdGVEZWZpbml0aW9uQnVpbGRlcj0xXT1cIlRlbXBsYXRlRGVmaW5pdGlvbkJ1aWxkZXJcIn0pKEVufHwoRW49e30pKTt2YXIgVTsoZnVuY3Rpb24odCl7dFt0LkF0dHJpYnV0ZT0wXT1cIkF0dHJpYnV0ZVwiLHRbdC5DbGFzc05hbWU9MV09XCJDbGFzc05hbWVcIix0W3QuU3R5bGVQcm9wZXJ0eT0yXT1cIlN0eWxlUHJvcGVydHlcIix0W3QuUHJvcGVydHk9M109XCJQcm9wZXJ0eVwiLHRbdC5UZW1wbGF0ZT00XT1cIlRlbXBsYXRlXCIsdFt0LkkxOG49NV09XCJJMThuXCIsdFt0LkFuaW1hdGlvbj02XT1cIkFuaW1hdGlvblwiLHRbdC5Ud29XYXlQcm9wZXJ0eT03XT1cIlR3b1dheVByb3BlcnR5XCJ9KShVfHwoVT17fSkpO3ZhciB5bjsoZnVuY3Rpb24odCl7dFt0LkNyZWF0aW9uPTBdPVwiQ3JlYXRpb25cIix0W3QuUG9zdHByb2NjZXNzaW5nPTFdPVwiUG9zdHByb2NjZXNzaW5nXCJ9KSh5bnx8KHluPXt9KSk7dmFyIF9uOyhmdW5jdGlvbih0KXt0W3QuSTE4blRleHQ9MF09XCJJMThuVGV4dFwiLHRbdC5JMThuQXR0cmlidXRlPTFdPVwiSTE4bkF0dHJpYnV0ZVwifSkoX258fChfbj17fSkpO3ZhciBDbjsoZnVuY3Rpb24odCl7dFt0Lk5vbmU9MF09XCJOb25lXCIsdFt0LkVsZW1lbnRUYWc9MV09XCJFbGVtZW50VGFnXCIsdFt0LlRlbXBsYXRlVGFnPTJdPVwiVGVtcGxhdGVUYWdcIix0W3QuT3BlblRhZz00XT1cIk9wZW5UYWdcIix0W3QuQ2xvc2VUYWc9OF09XCJDbG9zZVRhZ1wiLHRbdC5FeHByZXNzaW9uSW5kZXg9MTZdPVwiRXhwcmVzc2lvbkluZGV4XCJ9KShDbnx8KENuPXt9KSk7dmFyIFRuOyhmdW5jdGlvbih0KXt0W3QuSFRNTD0wXT1cIkhUTUxcIix0W3QuU1ZHPTFdPVwiU1ZHXCIsdFt0Lk1hdGg9Ml09XCJNYXRoXCJ9KShUbnx8KFRuPXt9KSk7dmFyIGtuOyhmdW5jdGlvbih0KXt0W3QuSWRsZT0wXT1cIklkbGVcIix0W3QuSW1tZWRpYXRlPTFdPVwiSW1tZWRpYXRlXCIsdFt0LlRpbWVyPTJdPVwiVGltZXJcIix0W3QuSG92ZXI9M109XCJIb3ZlclwiLHRbdC5JbnRlcmFjdGlvbj00XT1cIkludGVyYWN0aW9uXCIsdFt0LlZpZXdwb3J0PTVdPVwiVmlld3BvcnRcIix0W3QuTmV2ZXI9Nl09XCJOZXZlclwifSkoa258fChrbj17fSkpO3ZhciBJbjsoZnVuY3Rpb24odCl7dFt0LlJvb3RJMThuPTBdPVwiUm9vdEkxOG5cIix0W3QuSWN1PTFdPVwiSWN1XCIsdFt0LkF0dHI9Ml09XCJBdHRyXCJ9KShJbnx8KEluPXt9KSk7dmFyIGJuOyhmdW5jdGlvbih0KXt0W3QuTmdUZW1wbGF0ZT0wXT1cIk5nVGVtcGxhdGVcIix0W3QuU3RydWN0dXJhbD0xXT1cIlN0cnVjdHVyYWxcIix0W3QuQmxvY2s9Ml09XCJCbG9ja1wifSkoYm58fChibj17fSkpO3ZhciB2cj1TeW1ib2woXCJDb25zdW1lc1Nsb3RcIiksc3M9U3ltYm9sKFwiRGVwZW5kc09uU2xvdENvbnRleHRcIiksT2U9U3ltYm9sKFwiQ29uc3VtZXNWYXJzXCIpLFJ0PVN5bWJvbChcIlVzZXNWYXJPZmZzZXRcIikscmk9e1t2cl06ITAsbnVtU2xvdHNVc2VkOjF9LGlpPXtbc3NdOiEwfSxvaT17W09lXTohMH07dmFyIFplPWNsYXNze3N0cmluZ3M7ZXhwcmVzc2lvbnM7aTE4blBsYWNlaG9sZGVycztjb25zdHJ1Y3RvcihlLG4scyl7aWYodGhpcy5zdHJpbmdzPWUsdGhpcy5leHByZXNzaW9ucz1uLHRoaXMuaTE4blBsYWNlaG9sZGVycz1zLHMubGVuZ3RoIT09MCYmcy5sZW5ndGghPT1uLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkICR7bi5sZW5ndGh9IHBsYWNlaG9sZGVycyB0byBtYXRjaCBpbnRlcnBvbGF0aW9uIGV4cHJlc3Npb24gY291bnQsIGJ1dCBnb3QgJHtzLmxlbmd0aH1gKX19O3ZhciBZPWNsYXNzIGV4dGVuZHMga3tjb25zdHJ1Y3RvcihlPW51bGwpe3N1cGVyKG51bGwsZSl9fTt2YXIgTm49Y2xhc3MgdCBleHRlbmRzIFl7dGFyZ2V0O3ZhbHVlO3NvdXJjZVNwYW47a2luZD1KLlN0b3JlTGV0O1tPZV09ITA7W3NzXT0hMDtjb25zdHJ1Y3RvcihlLG4scyl7c3VwZXIoKSx0aGlzLnRhcmdldD1lLHRoaXMudmFsdWU9bix0aGlzLnNvdXJjZVNwYW49c312aXNpdEV4cHJlc3Npb24oKXt9aXNFcXVpdmFsZW50KGUpe3JldHVybiBlIGluc3RhbmNlb2YgdCYmZS50YXJnZXQ9PT10aGlzLnRhcmdldCYmZS52YWx1ZS5pc0VxdWl2YWxlbnQodGhpcy52YWx1ZSl9aXNDb25zdGFudCgpe3JldHVybiExfXRyYW5zZm9ybUludGVybmFsRXhwcmVzc2lvbnMoZSxuKXt0aGlzLnZhbHVlPSh0aGlzLnZhbHVlLHZvaWQgMCl9Y2xvbmUoKXtyZXR1cm4gbmV3IHQodGhpcy50YXJnZXQsdGhpcy52YWx1ZSx0aGlzLnNvdXJjZVNwYW4pfX07dmFyIEFuPWNsYXNzIHQgZXh0ZW5kcyBZe2tpbmQ9Si5QdXJlRnVuY3Rpb25FeHByO1tPZV09ITA7W1J0XT0hMDt2YXJPZmZzZXQ9bnVsbDtib2R5O2FyZ3M7Zm49bnVsbDtjb25zdHJ1Y3RvcihlLG4pe3N1cGVyKCksdGhpcy5ib2R5PWUsdGhpcy5hcmdzPW59dmlzaXRFeHByZXNzaW9uKGUsbil7dmFyIHM7KHM9dGhpcy5ib2R5KT09bnVsbHx8cy52aXNpdEV4cHJlc3Npb24oZSxuKTtmb3IobGV0IHIgb2YgdGhpcy5hcmdzKXIudmlzaXRFeHByZXNzaW9uKGUsbil9aXNFcXVpdmFsZW50KGUpe3JldHVybiEoZSBpbnN0YW5jZW9mIHQpfHxlLmFyZ3MubGVuZ3RoIT09dGhpcy5hcmdzLmxlbmd0aD8hMTplLmJvZHkhPT1udWxsJiZ0aGlzLmJvZHkhPT1udWxsJiZlLmJvZHkuaXNFcXVpdmFsZW50KHRoaXMuYm9keSkmJmUuYXJncy5ldmVyeSgobixzKT0+bi5pc0VxdWl2YWxlbnQodGhpcy5hcmdzW3NdKSl9aXNDb25zdGFudCgpe3JldHVybiExfXRyYW5zZm9ybUludGVybmFsRXhwcmVzc2lvbnMoZSxuKXt0aGlzLmJvZHkhPT1udWxsP3RoaXMuYm9keT0odGhpcy5ib2R5LG58YnQuSW5DaGlsZE9wZXJhdGlvbix2b2lkIDApOnRoaXMuZm4hPT1udWxsJiYodGhpcy5mbj0odGhpcy5mbix2b2lkIDApKTtmb3IobGV0IHM9MDtzPHRoaXMuYXJncy5sZW5ndGg7cysrKXRoaXMuYXJnc1tzXT0odGhpcy5hcmdzW3NdLHZvaWQgMCl9Y2xvbmUoKXt2YXIgbixzO2xldCBlPW5ldyB0KCgobj10aGlzLmJvZHkpPT1udWxsP3ZvaWQgMDpuLmNsb25lKCkpPz9udWxsLHRoaXMuYXJncy5tYXAocj0+ci5jbG9uZSgpKSk7cmV0dXJuIGUuZm49KChzPXRoaXMuZm4pPT1udWxsP3ZvaWQgMDpzLmNsb25lKCkpPz9udWxsLGUudmFyT2Zmc2V0PXRoaXMudmFyT2Zmc2V0LGV9fTt2YXIga3Q9Y2xhc3MgdCBleHRlbmRzIFl7dGFyZ2V0O3RhcmdldFNsb3Q7bmFtZTthcmdzO2tpbmQ9Si5QaXBlQmluZGluZztbT2VdPSEwO1tSdF09ITA7dmFyT2Zmc2V0PW51bGw7Y29uc3RydWN0b3IoZSxuLHMscil7c3VwZXIoKSx0aGlzLnRhcmdldD1lLHRoaXMudGFyZ2V0U2xvdD1uLHRoaXMubmFtZT1zLHRoaXMuYXJncz1yfXZpc2l0RXhwcmVzc2lvbihlLG4pe2ZvcihsZXQgcyBvZiB0aGlzLmFyZ3Mpcy52aXNpdEV4cHJlc3Npb24oZSxuKX1pc0VxdWl2YWxlbnQoKXtyZXR1cm4hMX1pc0NvbnN0YW50KCl7cmV0dXJuITF9dHJhbnNmb3JtSW50ZXJuYWxFeHByZXNzaW9ucyhlLG4pe2ZvcihsZXQgcz0wO3M8dGhpcy5hcmdzLmxlbmd0aDtzKyspdGhpcy5hcmdzW3NdPSh0aGlzLmFyZ3Nbc10sdm9pZCAwKX1jbG9uZSgpe2xldCBlPW5ldyB0KHRoaXMudGFyZ2V0LHRoaXMudGFyZ2V0U2xvdCx0aGlzLm5hbWUsdGhpcy5hcmdzLm1hcChuPT5uLmNsb25lKCkpKTtyZXR1cm4gZS52YXJPZmZzZXQ9dGhpcy52YXJPZmZzZXQsZX19LFBuPWNsYXNzIHQgZXh0ZW5kcyBZe3RhcmdldDt0YXJnZXRTbG90O25hbWU7YXJncztudW1BcmdzO2tpbmQ9Si5QaXBlQmluZGluZ1ZhcmlhZGljO1tPZV09ITA7W1J0XT0hMDt2YXJPZmZzZXQ9bnVsbDtjb25zdHJ1Y3RvcihlLG4scyxyLG8pe3N1cGVyKCksdGhpcy50YXJnZXQ9ZSx0aGlzLnRhcmdldFNsb3Q9bix0aGlzLm5hbWU9cyx0aGlzLmFyZ3M9cix0aGlzLm51bUFyZ3M9b312aXNpdEV4cHJlc3Npb24oZSxuKXt0aGlzLmFyZ3MudmlzaXRFeHByZXNzaW9uKGUsbil9aXNFcXVpdmFsZW50KCl7cmV0dXJuITF9aXNDb25zdGFudCgpe3JldHVybiExfXRyYW5zZm9ybUludGVybmFsRXhwcmVzc2lvbnMoZSxuKXt0aGlzLmFyZ3M9KHRoaXMuYXJncyx2b2lkIDApfWNsb25lKCl7bGV0IGU9bmV3IHQodGhpcy50YXJnZXQsdGhpcy50YXJnZXRTbG90LHRoaXMubmFtZSx0aGlzLmFyZ3MuY2xvbmUoKSx0aGlzLm51bUFyZ3MpO3JldHVybiBlLnZhck9mZnNldD10aGlzLnZhck9mZnNldCxlfX07dmFyIEl0PWNsYXNzIHQgZXh0ZW5kcyBZe3JlY2VpdmVyO2FyZ3M7a2luZD1KLlNhZmVJbnZva2VGdW5jdGlvbjtjb25zdHJ1Y3RvcihlLG4pe3N1cGVyKCksdGhpcy5yZWNlaXZlcj1lLHRoaXMuYXJncz1ufXZpc2l0RXhwcmVzc2lvbihlLG4pe3RoaXMucmVjZWl2ZXIudmlzaXRFeHByZXNzaW9uKGUsbik7Zm9yKGxldCBzIG9mIHRoaXMuYXJncylzLnZpc2l0RXhwcmVzc2lvbihlLG4pfWlzRXF1aXZhbGVudCgpe3JldHVybiExfWlzQ29uc3RhbnQoKXtyZXR1cm4hMX10cmFuc2Zvcm1JbnRlcm5hbEV4cHJlc3Npb25zKGUsbil7dGhpcy5yZWNlaXZlcj0odGhpcy5yZWNlaXZlcix2b2lkIDApO2ZvcihsZXQgcz0wO3M8dGhpcy5hcmdzLmxlbmd0aDtzKyspdGhpcy5hcmdzW3NdPSh0aGlzLmFyZ3Nbc10sdm9pZCAwKX1jbG9uZSgpe3JldHVybiBuZXcgdCh0aGlzLnJlY2VpdmVyLmNsb25lKCksdGhpcy5hcmdzLm1hcChlPT5lLmNsb25lKCkpKX19O3ZhciBidDsoZnVuY3Rpb24odCl7dFt0Lk5vbmU9MF09XCJOb25lXCIsdFt0LkluQ2hpbGRPcGVyYXRpb249MV09XCJJbkNoaWxkT3BlcmF0aW9uXCJ9KShidHx8KGJ0PXt9KSk7dmFyIGFpPW5ldyBTZXQoW2YuRWxlbWVudCxmLkVsZW1lbnRTdGFydCxmLkNvbnRhaW5lcixmLkNvbnRhaW5lclN0YXJ0LGYuVGVtcGxhdGUsZi5SZXBlYXRlckNyZWF0ZV0pO3ZhciBMbjsoZnVuY3Rpb24odCl7dFt0LlRtcGw9MF09XCJUbXBsXCIsdFt0Lkhvc3Q9MV09XCJIb3N0XCIsdFt0LkJvdGg9Ml09XCJCb3RoXCJ9KShMbnx8KExuPXt9KSk7dmFyIGxpPU9iamVjdC5mcmVlemUoW10pO3ZhciBjaT1uZXcgTWFwKFtbZi5FbGVtZW50RW5kLFtmLkVsZW1lbnRTdGFydCxmLkVsZW1lbnRdXSxbZi5Db250YWluZXJFbmQsW2YuQ29udGFpbmVyU3RhcnQsZi5Db250YWluZXJdXSxbZi5JMThuRW5kLFtmLkkxOG5TdGFydCxmLkkxOG5dXV0pLHVpPW5ldyBTZXQoW2YuUGlwZV0pO3ZhciBwaT1bWGUsWWUsUWUsSXQsa3RdLm1hcCh0PT50LmNvbnN0cnVjdG9yLm5hbWUpO3ZhciB3cj17fSx4cj1cIlxcdUU1MDBcIjt3ci5uZ3NwPXhyO3ZhciBNbjsoZnVuY3Rpb24odCl7dC5IRVg9XCJoZXhhZGVjaW1hbFwiLHQuREVDPVwiZGVjaW1hbFwifSkoTW58fChNbj17fSkpO3ZhciBycz1gIFxcZlxuXFxyXHRcXHZcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1RkVGRmAsaGk9bmV3IFJlZ0V4cChgW14ke3JzfV1gKSxmaT1uZXcgUmVnRXhwKGBbJHtyc31dezIsfWAsXCJnXCIpO3ZhciBkOyhmdW5jdGlvbih0KXt0W3QuQ2hhcmFjdGVyPTBdPVwiQ2hhcmFjdGVyXCIsdFt0LklkZW50aWZpZXI9MV09XCJJZGVudGlmaWVyXCIsdFt0LlByaXZhdGVJZGVudGlmaWVyPTJdPVwiUHJpdmF0ZUlkZW50aWZpZXJcIix0W3QuS2V5d29yZD0zXT1cIktleXdvcmRcIix0W3QuU3RyaW5nPTRdPVwiU3RyaW5nXCIsdFt0Lk9wZXJhdG9yPTVdPVwiT3BlcmF0b3JcIix0W3QuTnVtYmVyPTZdPVwiTnVtYmVyXCIsdFt0LkVycm9yPTddPVwiRXJyb3JcIn0pKGR8fChkPXt9KSk7dmFyIFNyPVtcInZhclwiLFwibGV0XCIsXCJhc1wiLFwibnVsbFwiLFwidW5kZWZpbmVkXCIsXCJ0cnVlXCIsXCJmYWxzZVwiLFwiaWZcIixcImVsc2VcIixcInRoaXNcIixcInR5cGVvZlwiXSxEZT1jbGFzc3t0b2tlbml6ZShlKXtsZXQgbj1uZXcgTnQoZSkscz1bXSxyPW4uc2NhblRva2VuKCk7Zm9yKDtyIT1udWxsOylzLnB1c2gocikscj1uLnNjYW5Ub2tlbigpO3JldHVybiBzfX0sTT1jbGFzc3tpbmRleDtlbmQ7dHlwZTtudW1WYWx1ZTtzdHJWYWx1ZTtjb25zdHJ1Y3RvcihlLG4scyxyLG8pe3RoaXMuaW5kZXg9ZSx0aGlzLmVuZD1uLHRoaXMudHlwZT1zLHRoaXMubnVtVmFsdWU9cix0aGlzLnN0clZhbHVlPW99aXNDaGFyYWN0ZXIoZSl7cmV0dXJuIHRoaXMudHlwZT09ZC5DaGFyYWN0ZXImJnRoaXMubnVtVmFsdWU9PWV9aXNOdW1iZXIoKXtyZXR1cm4gdGhpcy50eXBlPT1kLk51bWJlcn1pc1N0cmluZygpe3JldHVybiB0aGlzLnR5cGU9PWQuU3RyaW5nfWlzT3BlcmF0b3IoZSl7cmV0dXJuIHRoaXMudHlwZT09ZC5PcGVyYXRvciYmdGhpcy5zdHJWYWx1ZT09ZX1pc0lkZW50aWZpZXIoKXtyZXR1cm4gdGhpcy50eXBlPT1kLklkZW50aWZpZXJ9aXNQcml2YXRlSWRlbnRpZmllcigpe3JldHVybiB0aGlzLnR5cGU9PWQuUHJpdmF0ZUlkZW50aWZpZXJ9aXNLZXl3b3JkKCl7cmV0dXJuIHRoaXMudHlwZT09ZC5LZXl3b3JkfWlzS2V5d29yZExldCgpe3JldHVybiB0aGlzLnR5cGU9PWQuS2V5d29yZCYmdGhpcy5zdHJWYWx1ZT09XCJsZXRcIn1pc0tleXdvcmRBcygpe3JldHVybiB0aGlzLnR5cGU9PWQuS2V5d29yZCYmdGhpcy5zdHJWYWx1ZT09XCJhc1wifWlzS2V5d29yZE51bGwoKXtyZXR1cm4gdGhpcy50eXBlPT1kLktleXdvcmQmJnRoaXMuc3RyVmFsdWU9PVwibnVsbFwifWlzS2V5d29yZFVuZGVmaW5lZCgpe3JldHVybiB0aGlzLnR5cGU9PWQuS2V5d29yZCYmdGhpcy5zdHJWYWx1ZT09XCJ1bmRlZmluZWRcIn1pc0tleXdvcmRUcnVlKCl7cmV0dXJuIHRoaXMudHlwZT09ZC5LZXl3b3JkJiZ0aGlzLnN0clZhbHVlPT1cInRydWVcIn1pc0tleXdvcmRGYWxzZSgpe3JldHVybiB0aGlzLnR5cGU9PWQuS2V5d29yZCYmdGhpcy5zdHJWYWx1ZT09XCJmYWxzZVwifWlzS2V5d29yZFRoaXMoKXtyZXR1cm4gdGhpcy50eXBlPT1kLktleXdvcmQmJnRoaXMuc3RyVmFsdWU9PVwidGhpc1wifWlzS2V5d29yZFR5cGVvZigpe3JldHVybiB0aGlzLnR5cGU9PT1kLktleXdvcmQmJnRoaXMuc3RyVmFsdWU9PT1cInR5cGVvZlwifWlzRXJyb3IoKXtyZXR1cm4gdGhpcy50eXBlPT1kLkVycm9yfXRvTnVtYmVyKCl7cmV0dXJuIHRoaXMudHlwZT09ZC5OdW1iZXI/dGhpcy5udW1WYWx1ZTotMX10b1N0cmluZygpe3N3aXRjaCh0aGlzLnR5cGUpe2Nhc2UgZC5DaGFyYWN0ZXI6Y2FzZSBkLklkZW50aWZpZXI6Y2FzZSBkLktleXdvcmQ6Y2FzZSBkLk9wZXJhdG9yOmNhc2UgZC5Qcml2YXRlSWRlbnRpZmllcjpjYXNlIGQuU3RyaW5nOmNhc2UgZC5FcnJvcjpyZXR1cm4gdGhpcy5zdHJWYWx1ZTtjYXNlIGQuTnVtYmVyOnJldHVybiB0aGlzLm51bVZhbHVlLnRvU3RyaW5nKCk7ZGVmYXVsdDpyZXR1cm4gbnVsbH19fTtmdW5jdGlvbiAkbih0LGUsbil7cmV0dXJuIG5ldyBNKHQsZSxkLkNoYXJhY3RlcixuLFN0cmluZy5mcm9tQ2hhckNvZGUobikpfWZ1bmN0aW9uIEVyKHQsZSxuKXtyZXR1cm4gbmV3IE0odCxlLGQuSWRlbnRpZmllciwwLG4pfWZ1bmN0aW9uIHlyKHQsZSxuKXtyZXR1cm4gbmV3IE0odCxlLGQuUHJpdmF0ZUlkZW50aWZpZXIsMCxuKX1mdW5jdGlvbiBfcih0LGUsbil7cmV0dXJuIG5ldyBNKHQsZSxkLktleXdvcmQsMCxuKX1mdW5jdGlvbiBhdCh0LGUsbil7cmV0dXJuIG5ldyBNKHQsZSxkLk9wZXJhdG9yLDAsbil9ZnVuY3Rpb24gQ3IodCxlLG4pe3JldHVybiBuZXcgTSh0LGUsZC5TdHJpbmcsMCxuKX1mdW5jdGlvbiBUcih0LGUsbil7cmV0dXJuIG5ldyBNKHQsZSxkLk51bWJlcixuLFwiXCIpfWZ1bmN0aW9uIGtyKHQsZSxuKXtyZXR1cm4gbmV3IE0odCxlLGQuRXJyb3IsMCxuKX12YXIgbHQ9bmV3IE0oLTEsLTEsZC5DaGFyYWN0ZXIsMCxcIlwiKSxOdD1jbGFzc3tpbnB1dDtsZW5ndGg7cGVlaz0wO2luZGV4PS0xO2NvbnN0cnVjdG9yKGUpe3RoaXMuaW5wdXQ9ZSx0aGlzLmxlbmd0aD1lLmxlbmd0aCx0aGlzLmFkdmFuY2UoKX1hZHZhbmNlKCl7dGhpcy5wZWVrPSsrdGhpcy5pbmRleD49dGhpcy5sZW5ndGg/b3Q6dGhpcy5pbnB1dC5jaGFyQ29kZUF0KHRoaXMuaW5kZXgpfXNjYW5Ub2tlbigpe2xldCBlPXRoaXMuaW5wdXQsbj10aGlzLmxlbmd0aCxzPXRoaXMucGVlayxyPXRoaXMuaW5kZXg7Zm9yKDtzPD1XbjspaWYoKytyPj1uKXtzPW90O2JyZWFrfWVsc2Ugcz1lLmNoYXJDb2RlQXQocik7aWYodGhpcy5wZWVrPXMsdGhpcy5pbmRleD1yLHI+PW4pcmV0dXJuIG51bGw7aWYoUm4ocykpcmV0dXJuIHRoaXMuc2NhbklkZW50aWZpZXIoKTtpZihqKHMpKXJldHVybiB0aGlzLnNjYW5OdW1iZXIocik7bGV0IG89cjtzd2l0Y2gocyl7Y2FzZSBlZTpyZXR1cm4gdGhpcy5hZHZhbmNlKCksaih0aGlzLnBlZWspP3RoaXMuc2Nhbk51bWJlcihvKTokbihvLHRoaXMuaW5kZXgsZWUpO2Nhc2UgamU6Y2FzZSBtZTpjYXNlIFR0OmNhc2UgeGU6Y2FzZSB6ZTpjYXNlIHdlOmNhc2UgZ2U6Y2FzZSB0ZTpjYXNlIHZlOnJldHVybiB0aGlzLnNjYW5DaGFyYWN0ZXIobyxzKTtjYXNlIHpuOmNhc2UgcW46cmV0dXJuIHRoaXMuc2NhblN0cmluZygpO2Nhc2UgenM6cmV0dXJuIHRoaXMuc2NhblByaXZhdGVJZGVudGlmaWVyKCk7Y2FzZSBHbjpjYXNlIFhuOmNhc2UgWHM6Y2FzZSBDdDpjYXNlIEdzOmNhc2UgdHI6cmV0dXJuIHRoaXMuc2Nhbk9wZXJhdG9yKG8sU3RyaW5nLmZyb21DaGFyQ29kZShzKSk7Y2FzZSBobjpyZXR1cm4gdGhpcy5zY2FuUXVlc3Rpb24obyk7Y2FzZSBKczpjYXNlIFlzOnJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3IobyxTdHJpbmcuZnJvbUNoYXJDb2RlKHMpLHFlLFwiPVwiKTtjYXNlIGpzOmNhc2UgcWU6cmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihvLFN0cmluZy5mcm9tQ2hhckNvZGUocykscWUsXCI9XCIscWUsXCI9XCIpO2Nhc2UgcG46cmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihvLFwiJlwiLHBuLFwiJlwiKTtjYXNlIGZuOnJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3IobyxcInxcIixmbixcInxcIik7Y2FzZSBabjpmb3IoO3VyKHRoaXMucGVlayk7KXRoaXMuYWR2YW5jZSgpO3JldHVybiB0aGlzLnNjYW5Ub2tlbigpfXJldHVybiB0aGlzLmFkdmFuY2UoKSx0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBbJHtTdHJpbmcuZnJvbUNoYXJDb2RlKHMpfV1gLDApfXNjYW5DaGFyYWN0ZXIoZSxuKXtyZXR1cm4gdGhpcy5hZHZhbmNlKCksJG4oZSx0aGlzLmluZGV4LG4pfXNjYW5PcGVyYXRvcihlLG4pe3JldHVybiB0aGlzLmFkdmFuY2UoKSxhdChlLHRoaXMuaW5kZXgsbil9c2NhbkNvbXBsZXhPcGVyYXRvcihlLG4scyxyLG8sYSl7dGhpcy5hZHZhbmNlKCk7bGV0IGw9bjtyZXR1cm4gdGhpcy5wZWVrPT1zJiYodGhpcy5hZHZhbmNlKCksbCs9ciksbyE9bnVsbCYmdGhpcy5wZWVrPT1vJiYodGhpcy5hZHZhbmNlKCksbCs9YSksYXQoZSx0aGlzLmluZGV4LGwpfXNjYW5JZGVudGlmaWVyKCl7bGV0IGU9dGhpcy5pbmRleDtmb3IodGhpcy5hZHZhbmNlKCk7Qm4odGhpcy5wZWVrKTspdGhpcy5hZHZhbmNlKCk7bGV0IG49dGhpcy5pbnB1dC5zdWJzdHJpbmcoZSx0aGlzLmluZGV4KTtyZXR1cm4gU3IuaW5kZXhPZihuKT4tMT9fcihlLHRoaXMuaW5kZXgsbik6RXIoZSx0aGlzLmluZGV4LG4pfXNjYW5Qcml2YXRlSWRlbnRpZmllcigpe2xldCBlPXRoaXMuaW5kZXg7aWYodGhpcy5hZHZhbmNlKCksIVJuKHRoaXMucGVlaykpcmV0dXJuIHRoaXMuZXJyb3IoXCJJbnZhbGlkIGNoYXJhY3RlciBbI11cIiwtMSk7Zm9yKDtCbih0aGlzLnBlZWspOyl0aGlzLmFkdmFuY2UoKTtsZXQgbj10aGlzLmlucHV0LnN1YnN0cmluZyhlLHRoaXMuaW5kZXgpO3JldHVybiB5cihlLHRoaXMuaW5kZXgsbil9c2Nhbk51bWJlcihlKXtsZXQgbj10aGlzLmluZGV4PT09ZSxzPSExO2Zvcih0aGlzLmFkdmFuY2UoKTs7KXtpZighaih0aGlzLnBlZWspKWlmKHRoaXMucGVlaz09PU10KXtpZighaih0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5pbmRleC0xKSl8fCFqKHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmluZGV4KzEpKSlyZXR1cm4gdGhpcy5lcnJvcihcIkludmFsaWQgbnVtZXJpYyBzZXBhcmF0b3JcIiwwKTtzPSEwfWVsc2UgaWYodGhpcy5wZWVrPT09ZWUpbj0hMTtlbHNlIGlmKElyKHRoaXMucGVlaykpe2lmKHRoaXMuYWR2YW5jZSgpLGJyKHRoaXMucGVlaykmJnRoaXMuYWR2YW5jZSgpLCFqKHRoaXMucGVlaykpcmV0dXJuIHRoaXMuZXJyb3IoXCJJbnZhbGlkIGV4cG9uZW50XCIsLTEpO249ITF9ZWxzZSBicmVhazt0aGlzLmFkdmFuY2UoKX1sZXQgcj10aGlzLmlucHV0LnN1YnN0cmluZyhlLHRoaXMuaW5kZXgpO3MmJihyPXIucmVwbGFjZSgvXy9nLFwiXCIpKTtsZXQgbz1uP0FyKHIpOnBhcnNlRmxvYXQocik7cmV0dXJuIFRyKGUsdGhpcy5pbmRleCxvKX1zY2FuU3RyaW5nKCl7bGV0IGU9dGhpcy5pbmRleCxuPXRoaXMucGVlazt0aGlzLmFkdmFuY2UoKTtsZXQgcz1cIlwiLHI9dGhpcy5pbmRleCxvPXRoaXMuaW5wdXQ7Zm9yKDt0aGlzLnBlZWshPW47KWlmKHRoaXMucGVlaz09ZXIpe3MrPW8uc3Vic3RyaW5nKHIsdGhpcy5pbmRleCk7bGV0IGw7aWYodGhpcy5hZHZhbmNlKCksdGhpcy5wZWVrPT1hcil7bGV0IHU9by5zdWJzdHJpbmcodGhpcy5pbmRleCsxLHRoaXMuaW5kZXgrNSk7aWYoL15bMC05YS1mXSskL2kudGVzdCh1KSlsPXBhcnNlSW50KHUsMTYpO2Vsc2UgcmV0dXJuIHRoaXMuZXJyb3IoYEludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JHt1fV1gLDApO2ZvcihsZXQgaD0wO2g8NTtoKyspdGhpcy5hZHZhbmNlKCl9ZWxzZSBsPU5yKHRoaXMucGVlayksdGhpcy5hZHZhbmNlKCk7cys9U3RyaW5nLmZyb21DaGFyQ29kZShsKSxyPXRoaXMuaW5kZXh9ZWxzZXtpZih0aGlzLnBlZWs9PW90KXJldHVybiB0aGlzLmVycm9yKFwiVW50ZXJtaW5hdGVkIHF1b3RlXCIsMCk7dGhpcy5hZHZhbmNlKCl9bGV0IGE9by5zdWJzdHJpbmcocix0aGlzLmluZGV4KTtyZXR1cm4gdGhpcy5hZHZhbmNlKCksQ3IoZSx0aGlzLmluZGV4LHMrYSl9c2NhblF1ZXN0aW9uKGUpe3RoaXMuYWR2YW5jZSgpO2xldCBuPVwiP1wiO3JldHVybih0aGlzLnBlZWs9PT1obnx8dGhpcy5wZWVrPT09ZWUpJiYobis9dGhpcy5wZWVrPT09ZWU/XCIuXCI6XCI/XCIsdGhpcy5hZHZhbmNlKCkpLGF0KGUsdGhpcy5pbmRleCxuKX1lcnJvcihlLG4pe2xldCBzPXRoaXMuaW5kZXgrbjtyZXR1cm4ga3Iocyx0aGlzLmluZGV4LGBMZXhlciBFcnJvcjogJHtlfSBhdCBjb2x1bW4gJHtzfSBpbiBleHByZXNzaW9uIFske3RoaXMuaW5wdXR9XWApfX07ZnVuY3Rpb24gUm4odCl7cmV0dXJuIFFuPD10JiZ0PD1Lbnx8Sm48PXQmJnQ8PVlufHx0PT1NdHx8dD09am59ZnVuY3Rpb24gQm4odCl7cmV0dXJuIHByKHQpfHxqKHQpfHx0PT1NdHx8dD09am59ZnVuY3Rpb24gSXIodCl7cmV0dXJuIHQ9PW5yfHx0PT1ac31mdW5jdGlvbiBicih0KXtyZXR1cm4gdD09WG58fHQ9PUdufWZ1bmN0aW9uIE5yKHQpe3N3aXRjaCh0KXtjYXNlIHJyOnJldHVybiBIcztjYXNlIHNyOnJldHVybiBXcztjYXNlIGlyOnJldHVybiBxcztjYXNlIG9yOnJldHVybiBVbjtjYXNlIGxyOnJldHVybiBVcztkZWZhdWx0OnJldHVybiB0fX1mdW5jdGlvbiBBcih0KXtsZXQgZT1wYXJzZUludCh0KTtpZihpc05hTihlKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXIgbGl0ZXJhbCB3aGVuIHBhcnNpbmcgXCIrdCk7cmV0dXJuIGV9dmFyIEF0PWNsYXNze3N0cmluZ3M7ZXhwcmVzc2lvbnM7b2Zmc2V0cztjb25zdHJ1Y3RvcihlLG4scyl7dGhpcy5zdHJpbmdzPWUsdGhpcy5leHByZXNzaW9ucz1uLHRoaXMub2Zmc2V0cz1zfX0sUHQ9Y2xhc3N7dGVtcGxhdGVCaW5kaW5nczt3YXJuaW5ncztlcnJvcnM7Y29uc3RydWN0b3IoZSxuLHMpe3RoaXMudGVtcGxhdGVCaW5kaW5ncz1lLHRoaXMud2FybmluZ3M9bix0aGlzLmVycm9ycz1zfX0sdWU9Y2xhc3N7X2xleGVyO2Vycm9ycz1bXTtjb25zdHJ1Y3RvcihlKXt0aGlzLl9sZXhlcj1lfXBhcnNlQWN0aW9uKGUsbixzLHI9Wil7dGhpcy5fY2hlY2tOb0ludGVycG9sYXRpb24oZSxuLHIpO2xldCBvPXRoaXMuX3N0cmlwQ29tbWVudHMoZSksYT10aGlzLl9sZXhlci50b2tlbml6ZShvKSxsPW5ldyB6KGUsbixzLGEsMSx0aGlzLmVycm9ycywwKS5wYXJzZUNoYWluKCk7cmV0dXJuIG5ldyBXKGwsZSxuLHMsdGhpcy5lcnJvcnMpfXBhcnNlQmluZGluZyhlLG4scyxyPVope2xldCBvPXRoaXMuX3BhcnNlQmluZGluZ0FzdChlLG4scyxyKTtyZXR1cm4gbmV3IFcobyxlLG4scyx0aGlzLmVycm9ycyl9Y2hlY2tTaW1wbGVFeHByZXNzaW9uKGUpe2xldCBuPW5ldyBMdDtyZXR1cm4gZS52aXNpdChuKSxuLmVycm9yc31wYXJzZVNpbXBsZUJpbmRpbmcoZSxuLHMscj1aKXtsZXQgbz10aGlzLl9wYXJzZUJpbmRpbmdBc3QoZSxuLHMsciksYT10aGlzLmNoZWNrU2ltcGxlRXhwcmVzc2lvbihvKTtyZXR1cm4gYS5sZW5ndGg+MCYmdGhpcy5fcmVwb3J0RXJyb3IoYEhvc3QgYmluZGluZyBleHByZXNzaW9uIGNhbm5vdCBjb250YWluICR7YS5qb2luKFwiIFwiKX1gLGUsbiksbmV3IFcobyxlLG4scyx0aGlzLmVycm9ycyl9X3JlcG9ydEVycm9yKGUsbixzLHIpe3RoaXMuZXJyb3JzLnB1c2gobmV3IHllKGUsbixzLHIpKX1fcGFyc2VCaW5kaW5nQXN0KGUsbixzLHIpe3RoaXMuX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGUsbixyKTtsZXQgbz10aGlzLl9zdHJpcENvbW1lbnRzKGUpLGE9dGhpcy5fbGV4ZXIudG9rZW5pemUobyk7cmV0dXJuIG5ldyB6KGUsbixzLGEsMCx0aGlzLmVycm9ycywwKS5wYXJzZUNoYWluKCl9cGFyc2VUZW1wbGF0ZUJpbmRpbmdzKGUsbixzLHIsbyl7bGV0IGE9dGhpcy5fbGV4ZXIudG9rZW5pemUobik7cmV0dXJuIG5ldyB6KG4scyxvLGEsMCx0aGlzLmVycm9ycywwKS5wYXJzZVRlbXBsYXRlQmluZGluZ3Moe3NvdXJjZTplLHNwYW46bmV3IE8ocixyK2UubGVuZ3RoKX0pfXBhcnNlSW50ZXJwb2xhdGlvbihlLG4scyxyLG89Wil7bGV0e3N0cmluZ3M6YSxleHByZXNzaW9uczpsLG9mZnNldHM6dX09dGhpcy5zcGxpdEludGVycG9sYXRpb24oZSxuLHIsbyk7aWYobC5sZW5ndGg9PT0wKXJldHVybiBudWxsO2xldCBoPVtdO2ZvcihsZXQgZz0wO2c8bC5sZW5ndGg7KytnKXtsZXQgUz1sW2ddLnRleHQsdz10aGlzLl9zdHJpcENvbW1lbnRzKFMpLHk9dGhpcy5fbGV4ZXIudG9rZW5pemUodyksVD1uZXcgeihlLG4scyx5LDAsdGhpcy5lcnJvcnMsdVtnXSkucGFyc2VDaGFpbigpO2gucHVzaChUKX1yZXR1cm4gdGhpcy5jcmVhdGVJbnRlcnBvbGF0aW9uQXN0KGEubWFwKGc9PmcudGV4dCksaCxlLG4scyl9cGFyc2VJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihlLG4scyl7bGV0IHI9dGhpcy5fc3RyaXBDb21tZW50cyhlKSxvPXRoaXMuX2xleGVyLnRva2VuaXplKHIpLGE9bmV3IHooZSxuLHMsbywwLHRoaXMuZXJyb3JzLDApLnBhcnNlQ2hhaW4oKSxsPVtcIlwiLFwiXCJdO3JldHVybiB0aGlzLmNyZWF0ZUludGVycG9sYXRpb25Bc3QobCxbYV0sZSxuLHMpfWNyZWF0ZUludGVycG9sYXRpb25Bc3QoZSxuLHMscixvKXtsZXQgYT1uZXcgRygwLHMubGVuZ3RoKSxsPW5ldyBQZShhLGEudG9BYnNvbHV0ZShvKSxlLG4pO3JldHVybiBuZXcgVyhsLHMscixvLHRoaXMuZXJyb3JzKX1zcGxpdEludGVycG9sYXRpb24oZSxuLHMscj1aKXtsZXQgbz1bXSxhPVtdLGw9W10sdT1zP1ByKHMpOm51bGwsaD0wLGc9ITEsUz0hMSx7c3RhcnQ6dyxlbmQ6eX09cjtmb3IoO2g8ZS5sZW5ndGg7KWlmKGcpe2xldCBUPWgsRj1UK3cubGVuZ3RoLGZlPXRoaXMuX2dldEludGVycG9sYXRpb25FbmRJbmRleChlLHksRik7aWYoZmU9PT0tMSl7Zz0hMSxTPSEwO2JyZWFrfWxldCBkZT1mZSt5Lmxlbmd0aCxxPWUuc3Vic3RyaW5nKEYsZmUpO3EudHJpbSgpLmxlbmd0aD09PTAmJnRoaXMuX3JlcG9ydEVycm9yKFwiQmxhbmsgZXhwcmVzc2lvbnMgYXJlIG5vdCBhbGxvd2VkIGluIGludGVycG9sYXRlZCBzdHJpbmdzXCIsZSxgYXQgY29sdW1uICR7aH0gaW5gLG4pLGEucHVzaCh7dGV4dDpxLHN0YXJ0OlQsZW5kOmRlfSk7bGV0IE1zPSgodT09bnVsbD92b2lkIDA6dS5nZXQoVCkpPz9UKSt3Lmxlbmd0aDtsLnB1c2goTXMpLGg9ZGUsZz0hMX1lbHNle2xldCBUPWg7aD1lLmluZGV4T2YodyxoKSxoPT09LTEmJihoPWUubGVuZ3RoKTtsZXQgRj1lLnN1YnN0cmluZyhULGgpO28ucHVzaCh7dGV4dDpGLHN0YXJ0OlQsZW5kOmh9KSxnPSEwfWlmKCFnKWlmKFMpe2xldCBUPW9bby5sZW5ndGgtMV07VC50ZXh0Kz1lLnN1YnN0cmluZyhoKSxULmVuZD1lLmxlbmd0aH1lbHNlIG8ucHVzaCh7dGV4dDplLnN1YnN0cmluZyhoKSxzdGFydDpoLGVuZDplLmxlbmd0aH0pO3JldHVybiBuZXcgQXQobyxhLGwpfXdyYXBMaXRlcmFsUHJpbWl0aXZlKGUsbixzKXtsZXQgcj1uZXcgRygwLGU9PW51bGw/MDplLmxlbmd0aCk7cmV0dXJuIG5ldyBXKG5ldyBOKHIsci50b0Fic29sdXRlKHMpLGUpLGUsbixzLHRoaXMuZXJyb3JzKX1fc3RyaXBDb21tZW50cyhlKXtsZXQgbj10aGlzLl9jb21tZW50U3RhcnQoZSk7cmV0dXJuIG4hPW51bGw/ZS5zdWJzdHJpbmcoMCxuKTplfV9jb21tZW50U3RhcnQoZSl7bGV0IG49bnVsbDtmb3IobGV0IHM9MDtzPGUubGVuZ3RoLTE7cysrKXtsZXQgcj1lLmNoYXJDb2RlQXQocyksbz1lLmNoYXJDb2RlQXQocysxKTtpZihyPT09Q3QmJm89PUN0JiZuPT1udWxsKXJldHVybiBzO249PT1yP249bnVsbDpuPT1udWxsJiZkbihyKSYmKG49cil9cmV0dXJuIG51bGx9X2NoZWNrTm9JbnRlcnBvbGF0aW9uKGUsbix7c3RhcnQ6cyxlbmQ6cn0pe2xldCBvPS0xLGE9LTE7Zm9yKGxldCBsIG9mIHRoaXMuX2ZvckVhY2hVbnF1b3RlZENoYXIoZSwwKSlpZihvPT09LTEpZS5zdGFydHNXaXRoKHMpJiYobz1sKTtlbHNlIGlmKGE9dGhpcy5fZ2V0SW50ZXJwb2xhdGlvbkVuZEluZGV4KGUscixsKSxhPi0xKWJyZWFrO28+LTEmJmE+LTEmJnRoaXMuX3JlcG9ydEVycm9yKGBHb3QgaW50ZXJwb2xhdGlvbiAoJHtzfSR7cn0pIHdoZXJlIGV4cHJlc3Npb24gd2FzIGV4cGVjdGVkYCxlLGBhdCBjb2x1bW4gJHtvfSBpbmAsbil9X2dldEludGVycG9sYXRpb25FbmRJbmRleChlLG4scyl7Zm9yKGxldCByIG9mIHRoaXMuX2ZvckVhY2hVbnF1b3RlZENoYXIoZSxzKSl7aWYoZS5zdGFydHNXaXRoKG4scikpcmV0dXJuIHI7aWYoZS5zdGFydHNXaXRoKFwiLy9cIixyKSlyZXR1cm4gZS5pbmRleE9mKG4scil9cmV0dXJuLTF9Kl9mb3JFYWNoVW5xdW90ZWRDaGFyKGUsbil7bGV0IHM9bnVsbCxyPTA7Zm9yKGxldCBvPW47bzxlLmxlbmd0aDtvKyspe2xldCBhPWVbb107ZG4oZS5jaGFyQ29kZUF0KG8pKSYmKHM9PT1udWxsfHxzPT09YSkmJnIlMj09PTA/cz1zPT09bnVsbD9hOm51bGw6cz09PW51bGwmJih5aWVsZCBvKSxyPWE9PT1cIlxcXFxcIj9yKzE6MH19fSxuZTsoZnVuY3Rpb24odCl7dFt0Lk5vbmU9MF09XCJOb25lXCIsdFt0LldyaXRhYmxlPTFdPVwiV3JpdGFibGVcIn0pKG5lfHwobmU9e30pKTt2YXIgej1jbGFzc3tpbnB1dDtsb2NhdGlvbjthYnNvbHV0ZU9mZnNldDt0b2tlbnM7cGFyc2VGbGFncztlcnJvcnM7b2Zmc2V0O3JwYXJlbnNFeHBlY3RlZD0wO3JicmFja2V0c0V4cGVjdGVkPTA7cmJyYWNlc0V4cGVjdGVkPTA7Y29udGV4dD1uZS5Ob25lO3NvdXJjZVNwYW5DYWNoZT1uZXcgTWFwO2luZGV4PTA7Y29uc3RydWN0b3IoZSxuLHMscixvLGEsbCl7dGhpcy5pbnB1dD1lLHRoaXMubG9jYXRpb249bix0aGlzLmFic29sdXRlT2Zmc2V0PXMsdGhpcy50b2tlbnM9cix0aGlzLnBhcnNlRmxhZ3M9byx0aGlzLmVycm9ycz1hLHRoaXMub2Zmc2V0PWx9cGVlayhlKXtsZXQgbj10aGlzLmluZGV4K2U7cmV0dXJuIG48dGhpcy50b2tlbnMubGVuZ3RoP3RoaXMudG9rZW5zW25dOmx0fWdldCBuZXh0KCl7cmV0dXJuIHRoaXMucGVlaygwKX1nZXQgYXRFT0YoKXtyZXR1cm4gdGhpcy5pbmRleD49dGhpcy50b2tlbnMubGVuZ3RofWdldCBpbnB1dEluZGV4KCl7cmV0dXJuIHRoaXMuYXRFT0Y/dGhpcy5jdXJyZW50RW5kSW5kZXg6dGhpcy5uZXh0LmluZGV4K3RoaXMub2Zmc2V0fWdldCBjdXJyZW50RW5kSW5kZXgoKXtyZXR1cm4gdGhpcy5pbmRleD4wP3RoaXMucGVlaygtMSkuZW5kK3RoaXMub2Zmc2V0OnRoaXMudG9rZW5zLmxlbmd0aD09PTA/dGhpcy5pbnB1dC5sZW5ndGgrdGhpcy5vZmZzZXQ6dGhpcy5uZXh0LmluZGV4K3RoaXMub2Zmc2V0fWdldCBjdXJyZW50QWJzb2x1dGVPZmZzZXQoKXtyZXR1cm4gdGhpcy5hYnNvbHV0ZU9mZnNldCt0aGlzLmlucHV0SW5kZXh9c3BhbihlLG4pe2xldCBzPXRoaXMuY3VycmVudEVuZEluZGV4O2lmKG4hPT12b2lkIDAmJm4+dGhpcy5jdXJyZW50RW5kSW5kZXgmJihzPW4pLGU+cyl7bGV0IHI9cztzPWUsZT1yfXJldHVybiBuZXcgRyhlLHMpfXNvdXJjZVNwYW4oZSxuKXtsZXQgcz1gJHtlfUAke3RoaXMuaW5wdXRJbmRleH06JHtufWA7cmV0dXJuIHRoaXMuc291cmNlU3BhbkNhY2hlLmhhcyhzKXx8dGhpcy5zb3VyY2VTcGFuQ2FjaGUuc2V0KHMsdGhpcy5zcGFuKGUsbikudG9BYnNvbHV0ZSh0aGlzLmFic29sdXRlT2Zmc2V0KSksdGhpcy5zb3VyY2VTcGFuQ2FjaGUuZ2V0KHMpfWFkdmFuY2UoKXt0aGlzLmluZGV4Kyt9d2l0aENvbnRleHQoZSxuKXt0aGlzLmNvbnRleHR8PWU7bGV0IHM9bigpO3JldHVybiB0aGlzLmNvbnRleHRePWUsc31jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoZSl7cmV0dXJuIHRoaXMubmV4dC5pc0NoYXJhY3RlcihlKT8odGhpcy5hZHZhbmNlKCksITApOiExfXBlZWtLZXl3b3JkTGV0KCl7cmV0dXJuIHRoaXMubmV4dC5pc0tleXdvcmRMZXQoKX1wZWVrS2V5d29yZEFzKCl7cmV0dXJuIHRoaXMubmV4dC5pc0tleXdvcmRBcygpfWV4cGVjdENoYXJhY3RlcihlKXt0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihlKXx8dGhpcy5lcnJvcihgTWlzc2luZyBleHBlY3RlZCAke1N0cmluZy5mcm9tQ2hhckNvZGUoZSl9YCl9Y29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoZSl7cmV0dXJuIHRoaXMubmV4dC5pc09wZXJhdG9yKGUpPyh0aGlzLmFkdmFuY2UoKSwhMCk6ITF9ZXhwZWN0T3BlcmF0b3IoZSl7dGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcihlKXx8dGhpcy5lcnJvcihgTWlzc2luZyBleHBlY3RlZCBvcGVyYXRvciAke2V9YCl9cHJldHR5UHJpbnRUb2tlbihlKXtyZXR1cm4gZT09PWx0P1wiZW5kIG9mIGlucHV0XCI6YHRva2VuICR7ZX1gfWV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKXtsZXQgZT10aGlzLm5leHQ7cmV0dXJuIWUuaXNJZGVudGlmaWVyKCkmJiFlLmlzS2V5d29yZCgpPyhlLmlzUHJpdmF0ZUlkZW50aWZpZXIoKT90aGlzLl9yZXBvcnRFcnJvckZvclByaXZhdGVJZGVudGlmaWVyKGUsXCJleHBlY3RlZCBpZGVudGlmaWVyIG9yIGtleXdvcmRcIik6dGhpcy5lcnJvcihgVW5leHBlY3RlZCAke3RoaXMucHJldHR5UHJpbnRUb2tlbihlKX0sIGV4cGVjdGVkIGlkZW50aWZpZXIgb3Iga2V5d29yZGApLG51bGwpOih0aGlzLmFkdmFuY2UoKSxlLnRvU3RyaW5nKCkpfWV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpe2xldCBlPXRoaXMubmV4dDtyZXR1cm4hZS5pc0lkZW50aWZpZXIoKSYmIWUuaXNLZXl3b3JkKCkmJiFlLmlzU3RyaW5nKCk/KGUuaXNQcml2YXRlSWRlbnRpZmllcigpP3RoaXMuX3JlcG9ydEVycm9yRm9yUHJpdmF0ZUlkZW50aWZpZXIoZSxcImV4cGVjdGVkIGlkZW50aWZpZXIsIGtleXdvcmQgb3Igc3RyaW5nXCIpOnRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgJHt0aGlzLnByZXR0eVByaW50VG9rZW4oZSl9LCBleHBlY3RlZCBpZGVudGlmaWVyLCBrZXl3b3JkLCBvciBzdHJpbmdgKSxcIlwiKToodGhpcy5hZHZhbmNlKCksZS50b1N0cmluZygpKX1wYXJzZUNoYWluKCl7bGV0IGU9W10sbj10aGlzLmlucHV0SW5kZXg7Zm9yKDt0aGlzLmluZGV4PHRoaXMudG9rZW5zLmxlbmd0aDspe2xldCBzPXRoaXMucGFyc2VQaXBlKCk7aWYoZS5wdXNoKHMpLHRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKHZlKSlmb3IodGhpcy5wYXJzZUZsYWdzJjF8fHRoaXMuZXJyb3IoXCJCaW5kaW5nIGV4cHJlc3Npb24gY2Fubm90IGNvbnRhaW4gY2hhaW5lZCBleHByZXNzaW9uXCIpO3RoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKHZlKTspO2Vsc2UgaWYodGhpcy5pbmRleDx0aGlzLnRva2Vucy5sZW5ndGgpe2xldCByPXRoaXMuaW5kZXg7aWYodGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAnJHt0aGlzLm5leHR9J2ApLHRoaXMuaW5kZXg9PT1yKWJyZWFrfX1pZihlLmxlbmd0aD09PTApe2xldCBzPXRoaXMub2Zmc2V0LHI9dGhpcy5vZmZzZXQrdGhpcy5pbnB1dC5sZW5ndGg7cmV0dXJuIG5ldyBiKHRoaXMuc3BhbihzLHIpLHRoaXMuc291cmNlU3BhbihzLHIpKX1yZXR1cm4gZS5sZW5ndGg9PTE/ZVswXTpuZXcgX2UodGhpcy5zcGFuKG4pLHRoaXMuc291cmNlU3BhbihuKSxlKX1wYXJzZVBpcGUoKXtsZXQgZT10aGlzLmlucHV0SW5kZXgsbj10aGlzLnBhcnNlRXhwcmVzc2lvbigpO2lmKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoXCJ8XCIpKXt0aGlzLnBhcnNlRmxhZ3MmMSYmdGhpcy5lcnJvcihcIkNhbm5vdCBoYXZlIGEgcGlwZSBpbiBhbiBhY3Rpb24gZXhwcmVzc2lvblwiKTtkb3tsZXQgcz10aGlzLmlucHV0SW5kZXgscj10aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKSxvLGE7ciE9PW51bGw/bz10aGlzLnNvdXJjZVNwYW4ocyk6KHI9XCJcIixhPXRoaXMubmV4dC5pbmRleCE9PS0xP3RoaXMubmV4dC5pbmRleDp0aGlzLmlucHV0Lmxlbmd0aCt0aGlzLm9mZnNldCxvPW5ldyBHKGEsYSkudG9BYnNvbHV0ZSh0aGlzLmFic29sdXRlT2Zmc2V0KSk7bGV0IGw9W107Zm9yKDt0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3Rlcih0ZSk7KWwucHVzaCh0aGlzLnBhcnNlRXhwcmVzc2lvbigpKTtuPW5ldyBiZSh0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUsYSksbixyLGwsbyl9d2hpbGUodGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcihcInxcIikpfXJldHVybiBufXBhcnNlRXhwcmVzc2lvbigpe3JldHVybiB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKX1wYXJzZUNvbmRpdGlvbmFsKCl7bGV0IGU9dGhpcy5pbnB1dEluZGV4LG49dGhpcy5wYXJzZUxvZ2ljYWxPcigpO2lmKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoXCI/XCIpKXtsZXQgcz10aGlzLnBhcnNlUGlwZSgpLHI7aWYodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIodGUpKXI9dGhpcy5wYXJzZVBpcGUoKTtlbHNle2xldCBvPXRoaXMuaW5wdXRJbmRleCxhPXRoaXMuaW5wdXQuc3Vic3RyaW5nKGUsbyk7dGhpcy5lcnJvcihgQ29uZGl0aW9uYWwgZXhwcmVzc2lvbiAke2F9IHJlcXVpcmVzIGFsbCAzIGV4cHJlc3Npb25zYCkscj1uZXcgYih0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpKX1yZXR1cm4gbmV3IENlKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSksbixzLHIpfWVsc2UgcmV0dXJuIG59cGFyc2VMb2dpY2FsT3IoKXtsZXQgZT10aGlzLmlucHV0SW5kZXgsbj10aGlzLnBhcnNlTG9naWNhbEFuZCgpO2Zvcig7dGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcihcInx8XCIpOyl7bGV0IHM9dGhpcy5wYXJzZUxvZ2ljYWxBbmQoKTtuPW5ldyBBKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSksXCJ8fFwiLG4scyl9cmV0dXJuIG59cGFyc2VMb2dpY2FsQW5kKCl7bGV0IGU9dGhpcy5pbnB1dEluZGV4LG49dGhpcy5wYXJzZU51bGxpc2hDb2FsZXNjaW5nKCk7Zm9yKDt0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKFwiJiZcIik7KXtsZXQgcz10aGlzLnBhcnNlTnVsbGlzaENvYWxlc2NpbmcoKTtuPW5ldyBBKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSksXCImJlwiLG4scyl9cmV0dXJuIG59cGFyc2VOdWxsaXNoQ29hbGVzY2luZygpe2xldCBlPXRoaXMuaW5wdXRJbmRleCxuPXRoaXMucGFyc2VFcXVhbGl0eSgpO2Zvcig7dGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcihcIj8/XCIpOyl7bGV0IHM9dGhpcy5wYXJzZUVxdWFsaXR5KCk7bj1uZXcgQSh0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpLFwiPz9cIixuLHMpfXJldHVybiBufXBhcnNlRXF1YWxpdHkoKXtsZXQgZT10aGlzLmlucHV0SW5kZXgsbj10aGlzLnBhcnNlUmVsYXRpb25hbCgpO2Zvcig7dGhpcy5uZXh0LnR5cGU9PWQuT3BlcmF0b3I7KXtsZXQgcz10aGlzLm5leHQuc3RyVmFsdWU7c3dpdGNoKHMpe2Nhc2VcIj09XCI6Y2FzZVwiPT09XCI6Y2FzZVwiIT1cIjpjYXNlXCIhPT1cIjp0aGlzLmFkdmFuY2UoKTtsZXQgcj10aGlzLnBhcnNlUmVsYXRpb25hbCgpO249bmV3IEEodGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSxzLG4scik7Y29udGludWV9YnJlYWt9cmV0dXJuIG59cGFyc2VSZWxhdGlvbmFsKCl7bGV0IGU9dGhpcy5pbnB1dEluZGV4LG49dGhpcy5wYXJzZUFkZGl0aXZlKCk7Zm9yKDt0aGlzLm5leHQudHlwZT09ZC5PcGVyYXRvcjspe2xldCBzPXRoaXMubmV4dC5zdHJWYWx1ZTtzd2l0Y2gocyl7Y2FzZVwiPFwiOmNhc2VcIj5cIjpjYXNlXCI8PVwiOmNhc2VcIj49XCI6dGhpcy5hZHZhbmNlKCk7bGV0IHI9dGhpcy5wYXJzZUFkZGl0aXZlKCk7bj1uZXcgQSh0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpLHMsbixyKTtjb250aW51ZX1icmVha31yZXR1cm4gbn1wYXJzZUFkZGl0aXZlKCl7bGV0IGU9dGhpcy5pbnB1dEluZGV4LG49dGhpcy5wYXJzZU11bHRpcGxpY2F0aXZlKCk7Zm9yKDt0aGlzLm5leHQudHlwZT09ZC5PcGVyYXRvcjspe2xldCBzPXRoaXMubmV4dC5zdHJWYWx1ZTtzd2l0Y2gocyl7Y2FzZVwiK1wiOmNhc2VcIi1cIjp0aGlzLmFkdmFuY2UoKTtsZXQgcj10aGlzLnBhcnNlTXVsdGlwbGljYXRpdmUoKTtuPW5ldyBBKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSkscyxuLHIpO2NvbnRpbnVlfWJyZWFrfXJldHVybiBufXBhcnNlTXVsdGlwbGljYXRpdmUoKXtsZXQgZT10aGlzLmlucHV0SW5kZXgsbj10aGlzLnBhcnNlUHJlZml4KCk7Zm9yKDt0aGlzLm5leHQudHlwZT09ZC5PcGVyYXRvcjspe2xldCBzPXRoaXMubmV4dC5zdHJWYWx1ZTtzd2l0Y2gocyl7Y2FzZVwiKlwiOmNhc2VcIiVcIjpjYXNlXCIvXCI6dGhpcy5hZHZhbmNlKCk7bGV0IHI9dGhpcy5wYXJzZVByZWZpeCgpO249bmV3IEEodGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSxzLG4scik7Y29udGludWV9YnJlYWt9cmV0dXJuIG59cGFyc2VQcmVmaXgoKXtpZih0aGlzLm5leHQudHlwZT09ZC5PcGVyYXRvcil7bGV0IGU9dGhpcy5pbnB1dEluZGV4LG49dGhpcy5uZXh0LnN0clZhbHVlLHM7c3dpdGNoKG4pe2Nhc2VcIitcIjpyZXR1cm4gdGhpcy5hZHZhbmNlKCkscz10aGlzLnBhcnNlUHJlZml4KCksYWUuY3JlYXRlUGx1cyh0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpLHMpO2Nhc2VcIi1cIjpyZXR1cm4gdGhpcy5hZHZhbmNlKCkscz10aGlzLnBhcnNlUHJlZml4KCksYWUuY3JlYXRlTWludXModGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSxzKTtjYXNlXCIhXCI6cmV0dXJuIHRoaXMuYWR2YW5jZSgpLHM9dGhpcy5wYXJzZVByZWZpeCgpLG5ldyBMZSh0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpLHMpfX1lbHNlIGlmKHRoaXMubmV4dC5pc0tleXdvcmRUeXBlb2YoKSl7dGhpcy5hZHZhbmNlKCk7bGV0IGU9dGhpcy5pbnB1dEluZGV4LG49dGhpcy5wYXJzZVByZWZpeCgpO3JldHVybiBuZXcgTWUodGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSxuKX1yZXR1cm4gdGhpcy5wYXJzZUNhbGxDaGFpbigpfXBhcnNlQ2FsbENoYWluKCl7bGV0IGU9dGhpcy5pbnB1dEluZGV4LG49dGhpcy5wYXJzZVByaW1hcnkoKTtmb3IoOzspaWYodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoZWUpKW49dGhpcy5wYXJzZUFjY2Vzc01lbWJlcihuLGUsITEpO2Vsc2UgaWYodGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcihcIj8uXCIpKXRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKGplKT9uPXRoaXMucGFyc2VDYWxsKG4sZSwhMCk6bj10aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3Rlcih6ZSk/dGhpcy5wYXJzZUtleWVkUmVhZE9yV3JpdGUobixlLCEwKTp0aGlzLnBhcnNlQWNjZXNzTWVtYmVyKG4sZSwhMCk7ZWxzZSBpZih0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3Rlcih6ZSkpbj10aGlzLnBhcnNlS2V5ZWRSZWFkT3JXcml0ZShuLGUsITEpO2Vsc2UgaWYodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoamUpKW49dGhpcy5wYXJzZUNhbGwobixlLCExKTtlbHNlIGlmKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoXCIhXCIpKW49bmV3ICRlKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSksbik7ZWxzZSByZXR1cm4gbn1wYXJzZVByaW1hcnkoKXtsZXQgZT10aGlzLmlucHV0SW5kZXg7aWYodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoamUpKXt0aGlzLnJwYXJlbnNFeHBlY3RlZCsrO2xldCBuPXRoaXMucGFyc2VQaXBlKCk7cmV0dXJuIHRoaXMucnBhcmVuc0V4cGVjdGVkLS0sdGhpcy5leHBlY3RDaGFyYWN0ZXIobWUpLG59ZWxzZXtpZih0aGlzLm5leHQuaXNLZXl3b3JkTnVsbCgpKXJldHVybiB0aGlzLmFkdmFuY2UoKSxuZXcgTih0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpLG51bGwpO2lmKHRoaXMubmV4dC5pc0tleXdvcmRVbmRlZmluZWQoKSlyZXR1cm4gdGhpcy5hZHZhbmNlKCksbmV3IE4odGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSx2b2lkIDApO2lmKHRoaXMubmV4dC5pc0tleXdvcmRUcnVlKCkpcmV0dXJuIHRoaXMuYWR2YW5jZSgpLG5ldyBOKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSksITApO2lmKHRoaXMubmV4dC5pc0tleXdvcmRGYWxzZSgpKXJldHVybiB0aGlzLmFkdmFuY2UoKSxuZXcgTih0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpLCExKTtpZih0aGlzLm5leHQuaXNLZXl3b3JkVGhpcygpKXJldHVybiB0aGlzLmFkdmFuY2UoKSxuZXcgRXQodGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSk7aWYodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoemUpKXt0aGlzLnJicmFja2V0c0V4cGVjdGVkKys7bGV0IG49dGhpcy5wYXJzZUV4cHJlc3Npb25MaXN0KHdlKTtyZXR1cm4gdGhpcy5yYnJhY2tldHNFeHBlY3RlZC0tLHRoaXMuZXhwZWN0Q2hhcmFjdGVyKHdlKSxuZXcgTmUodGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSxuKX1lbHNle2lmKHRoaXMubmV4dC5pc0NoYXJhY3RlcihUdCkpcmV0dXJuIHRoaXMucGFyc2VMaXRlcmFsTWFwKCk7aWYodGhpcy5uZXh0LmlzSWRlbnRpZmllcigpKXJldHVybiB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyKG5ldyBYKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSkpLGUsITEpO2lmKHRoaXMubmV4dC5pc051bWJlcigpKXtsZXQgbj10aGlzLm5leHQudG9OdW1iZXIoKTtyZXR1cm4gdGhpcy5hZHZhbmNlKCksbmV3IE4odGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSxuKX1lbHNlIGlmKHRoaXMubmV4dC5pc1N0cmluZygpKXtsZXQgbj10aGlzLm5leHQudG9TdHJpbmcoKTtyZXR1cm4gdGhpcy5hZHZhbmNlKCksbmV3IE4odGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSxuKX1lbHNlIHJldHVybiB0aGlzLm5leHQuaXNQcml2YXRlSWRlbnRpZmllcigpPyh0aGlzLl9yZXBvcnRFcnJvckZvclByaXZhdGVJZGVudGlmaWVyKHRoaXMubmV4dCxudWxsKSxuZXcgYih0aGlzLnNwYW4oZSksdGhpcy5zb3VyY2VTcGFuKGUpKSk6dGhpcy5pbmRleD49dGhpcy50b2tlbnMubGVuZ3RoPyh0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAke3RoaXMuaW5wdXR9YCksbmV3IGIodGhpcy5zcGFuKGUpLHRoaXMuc291cmNlU3BhbihlKSkpOih0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7dGhpcy5uZXh0fWApLG5ldyBiKHRoaXMuc3BhbihlKSx0aGlzLnNvdXJjZVNwYW4oZSkpKX19fXBhcnNlRXhwcmVzc2lvbkxpc3QoZSl7bGV0IG49W107ZG8gaWYoIXRoaXMubmV4dC5pc0NoYXJhY3RlcihlKSluLnB1c2godGhpcy5wYXJzZVBpcGUoKSk7ZWxzZSBicmVhazt3aGlsZSh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihnZSkpO3JldHVybiBufXBhcnNlTGl0ZXJhbE1hcCgpe2xldCBlPVtdLG49W10scz10aGlzLmlucHV0SW5kZXg7aWYodGhpcy5leHBlY3RDaGFyYWN0ZXIoVHQpLCF0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3Rlcih4ZSkpe3RoaXMucmJyYWNlc0V4cGVjdGVkKys7ZG97bGV0IHI9dGhpcy5pbnB1dEluZGV4LG89dGhpcy5uZXh0LmlzU3RyaW5nKCksYT10aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpLGw9e2tleTphLHF1b3RlZDpvfTtpZihlLnB1c2gobCksbyl0aGlzLmV4cGVjdENoYXJhY3Rlcih0ZSksbi5wdXNoKHRoaXMucGFyc2VQaXBlKCkpO2Vsc2UgaWYodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIodGUpKW4ucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtlbHNle2wuaXNTaG9ydGhhbmRJbml0aWFsaXplZD0hMDtsZXQgdT10aGlzLnNwYW4ociksaD10aGlzLnNvdXJjZVNwYW4ocik7bi5wdXNoKG5ldyByZSh1LGgsaCxuZXcgWCh1LGgpLGEpKX19d2hpbGUodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoZ2UpJiYhdGhpcy5uZXh0LmlzQ2hhcmFjdGVyKHhlKSk7dGhpcy5yYnJhY2VzRXhwZWN0ZWQtLSx0aGlzLmV4cGVjdENoYXJhY3Rlcih4ZSl9cmV0dXJuIG5ldyBBZSh0aGlzLnNwYW4ocyksdGhpcy5zb3VyY2VTcGFuKHMpLGUsbil9cGFyc2VBY2Nlc3NNZW1iZXIoZSxuLHMpe2xldCByPXRoaXMuaW5wdXRJbmRleCxvPXRoaXMud2l0aENvbnRleHQobmUuV3JpdGFibGUsKCk9PntsZXQgdT10aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKT8/XCJcIjtyZXR1cm4gdS5sZW5ndGg9PT0wJiZ0aGlzLmVycm9yKFwiRXhwZWN0ZWQgaWRlbnRpZmllciBmb3IgcHJvcGVydHkgYWNjZXNzXCIsZS5zcGFuLmVuZCksdX0pLGE9dGhpcy5zb3VyY2VTcGFuKHIpLGw7aWYocyl0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKFwiPVwiKT8odGhpcy5lcnJvcihcIlRoZSAnPy4nIG9wZXJhdG9yIGNhbm5vdCBiZSB1c2VkIGluIHRoZSBhc3NpZ25tZW50XCIpLGw9bmV3IGIodGhpcy5zcGFuKG4pLHRoaXMuc291cmNlU3BhbihuKSkpOmw9bmV3IGllKHRoaXMuc3BhbihuKSx0aGlzLnNvdXJjZVNwYW4obiksYSxlLG8pO2Vsc2UgaWYodGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcihcIj1cIikpe2lmKCEodGhpcy5wYXJzZUZsYWdzJjEpKXJldHVybiB0aGlzLmVycm9yKFwiQmluZGluZ3MgY2Fubm90IGNvbnRhaW4gYXNzaWdubWVudHNcIiksbmV3IGIodGhpcy5zcGFuKG4pLHRoaXMuc291cmNlU3BhbihuKSk7bGV0IHU9dGhpcy5wYXJzZUNvbmRpdGlvbmFsKCk7bD1uZXcgVGUodGhpcy5zcGFuKG4pLHRoaXMuc291cmNlU3BhbihuKSxhLGUsbyx1KX1lbHNlIGw9bmV3IHJlKHRoaXMuc3BhbihuKSx0aGlzLnNvdXJjZVNwYW4obiksYSxlLG8pO3JldHVybiBsfXBhcnNlQ2FsbChlLG4scyl7bGV0IHI9dGhpcy5pbnB1dEluZGV4O3RoaXMucnBhcmVuc0V4cGVjdGVkKys7bGV0IG89dGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKSxhPXRoaXMuc3BhbihyLHRoaXMuaW5wdXRJbmRleCkudG9BYnNvbHV0ZSh0aGlzLmFic29sdXRlT2Zmc2V0KTt0aGlzLmV4cGVjdENoYXJhY3RlcihtZSksdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtsZXQgbD10aGlzLnNwYW4obiksdT10aGlzLnNvdXJjZVNwYW4obik7cmV0dXJuIHM/bmV3IGxlKGwsdSxlLG8sYSk6bmV3IFJlKGwsdSxlLG8sYSl9cGFyc2VDYWxsQXJndW1lbnRzKCl7aWYodGhpcy5uZXh0LmlzQ2hhcmFjdGVyKG1lKSlyZXR1cm5bXTtsZXQgZT1bXTtkbyBlLnB1c2godGhpcy5wYXJzZVBpcGUoKSk7d2hpbGUodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoZ2UpKTtyZXR1cm4gZX1leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKXtsZXQgZT1cIlwiLG49ITEscz10aGlzLmN1cnJlbnRBYnNvbHV0ZU9mZnNldDtkbyBlKz10aGlzLmV4cGVjdElkZW50aWZpZXJPcktleXdvcmRPclN0cmluZygpLG49dGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcihcIi1cIiksbiYmKGUrPVwiLVwiKTt3aGlsZShuKTtyZXR1cm57c291cmNlOmUsc3BhbjpuZXcgTyhzLHMrZS5sZW5ndGgpfX1wYXJzZVRlbXBsYXRlQmluZGluZ3MoZSl7bGV0IG49W107Zm9yKG4ucHVzaCguLi50aGlzLnBhcnNlRGlyZWN0aXZlS2V5d29yZEJpbmRpbmdzKGUpKTt0aGlzLmluZGV4PHRoaXMudG9rZW5zLmxlbmd0aDspe2xldCBzPXRoaXMucGFyc2VMZXRCaW5kaW5nKCk7aWYocyluLnB1c2gocyk7ZWxzZXtsZXQgcj10aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpLG89dGhpcy5wYXJzZUFzQmluZGluZyhyKTtvP24ucHVzaChvKTooci5zb3VyY2U9ZS5zb3VyY2Urci5zb3VyY2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrci5zb3VyY2Uuc3Vic3RyaW5nKDEpLG4ucHVzaCguLi50aGlzLnBhcnNlRGlyZWN0aXZlS2V5d29yZEJpbmRpbmdzKHIpKSl9dGhpcy5jb25zdW1lU3RhdGVtZW50VGVybWluYXRvcigpfXJldHVybiBuZXcgUHQobixbXSx0aGlzLmVycm9ycyl9cGFyc2VLZXllZFJlYWRPcldyaXRlKGUsbixzKXtyZXR1cm4gdGhpcy53aXRoQ29udGV4dChuZS5Xcml0YWJsZSwoKT0+e3RoaXMucmJyYWNrZXRzRXhwZWN0ZWQrKztsZXQgcj10aGlzLnBhcnNlUGlwZSgpO2lmKHIgaW5zdGFuY2VvZiBiJiZ0aGlzLmVycm9yKFwiS2V5IGFjY2VzcyBjYW5ub3QgYmUgZW1wdHlcIiksdGhpcy5yYnJhY2tldHNFeHBlY3RlZC0tLHRoaXMuZXhwZWN0Q2hhcmFjdGVyKHdlKSx0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKFwiPVwiKSlpZihzKXRoaXMuZXJyb3IoXCJUaGUgJz8uJyBvcGVyYXRvciBjYW5ub3QgYmUgdXNlZCBpbiB0aGUgYXNzaWdubWVudFwiKTtlbHNle2xldCBvPXRoaXMucGFyc2VDb25kaXRpb25hbCgpO3JldHVybiBuZXcgSWUodGhpcy5zcGFuKG4pLHRoaXMuc291cmNlU3BhbihuKSxlLHIsbyl9ZWxzZSByZXR1cm4gcz9uZXcgb2UodGhpcy5zcGFuKG4pLHRoaXMuc291cmNlU3BhbihuKSxlLHIpOm5ldyBrZSh0aGlzLnNwYW4obiksdGhpcy5zb3VyY2VTcGFuKG4pLGUscik7cmV0dXJuIG5ldyBiKHRoaXMuc3BhbihuKSx0aGlzLnNvdXJjZVNwYW4obikpfSl9cGFyc2VEaXJlY3RpdmVLZXl3b3JkQmluZGluZ3MoZSl7bGV0IG49W107dGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIodGUpO2xldCBzPXRoaXMuZ2V0RGlyZWN0aXZlQm91bmRUYXJnZXQoKSxyPXRoaXMuY3VycmVudEFic29sdXRlT2Zmc2V0LG89dGhpcy5wYXJzZUFzQmluZGluZyhlKTtvfHwodGhpcy5jb25zdW1lU3RhdGVtZW50VGVybWluYXRvcigpLHI9dGhpcy5jdXJyZW50QWJzb2x1dGVPZmZzZXQpO2xldCBhPW5ldyBPKGUuc3Bhbi5zdGFydCxyKTtyZXR1cm4gbi5wdXNoKG5ldyBCZShhLGUscykpLG8mJm4ucHVzaChvKSxufWdldERpcmVjdGl2ZUJvdW5kVGFyZ2V0KCl7aWYodGhpcy5uZXh0PT09bHR8fHRoaXMucGVla0tleXdvcmRBcygpfHx0aGlzLnBlZWtLZXl3b3JkTGV0KCkpcmV0dXJuIG51bGw7bGV0IGU9dGhpcy5wYXJzZVBpcGUoKSx7c3RhcnQ6bixlbmQ6c309ZS5zcGFuLHI9dGhpcy5pbnB1dC5zdWJzdHJpbmcobixzKTtyZXR1cm4gbmV3IFcoZSxyLHRoaXMubG9jYXRpb24sdGhpcy5hYnNvbHV0ZU9mZnNldCtuLHRoaXMuZXJyb3JzKX1wYXJzZUFzQmluZGluZyhlKXtpZighdGhpcy5wZWVrS2V5d29yZEFzKCkpcmV0dXJuIG51bGw7dGhpcy5hZHZhbmNlKCk7bGV0IG49dGhpcy5leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTt0aGlzLmNvbnN1bWVTdGF0ZW1lbnRUZXJtaW5hdG9yKCk7bGV0IHM9bmV3IE8oZS5zcGFuLnN0YXJ0LHRoaXMuY3VycmVudEFic29sdXRlT2Zmc2V0KTtyZXR1cm4gbmV3IGNlKHMsbixlKX1wYXJzZUxldEJpbmRpbmcoKXtpZighdGhpcy5wZWVrS2V5d29yZExldCgpKXJldHVybiBudWxsO2xldCBlPXRoaXMuY3VycmVudEFic29sdXRlT2Zmc2V0O3RoaXMuYWR2YW5jZSgpO2xldCBuPXRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCkscz1udWxsO3RoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoXCI9XCIpJiYocz10aGlzLmV4cGVjdFRlbXBsYXRlQmluZGluZ0tleSgpKSx0aGlzLmNvbnN1bWVTdGF0ZW1lbnRUZXJtaW5hdG9yKCk7bGV0IHI9bmV3IE8oZSx0aGlzLmN1cnJlbnRBYnNvbHV0ZU9mZnNldCk7cmV0dXJuIG5ldyBjZShyLG4scyl9Y29uc3VtZVN0YXRlbWVudFRlcm1pbmF0b3IoKXt0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3Rlcih2ZSl8fHRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKGdlKX1lcnJvcihlLG49bnVsbCl7dGhpcy5lcnJvcnMucHVzaChuZXcgeWUoZSx0aGlzLmlucHV0LHRoaXMubG9jYXRpb25UZXh0KG4pLHRoaXMubG9jYXRpb24pKSx0aGlzLnNraXAoKX1sb2NhdGlvblRleHQoZT1udWxsKXtyZXR1cm4gZT09bnVsbCYmKGU9dGhpcy5pbmRleCksZTx0aGlzLnRva2Vucy5sZW5ndGg/YGF0IGNvbHVtbiAke3RoaXMudG9rZW5zW2VdLmluZGV4KzF9IGluYDpcImF0IHRoZSBlbmQgb2YgdGhlIGV4cHJlc3Npb25cIn1fcmVwb3J0RXJyb3JGb3JQcml2YXRlSWRlbnRpZmllcihlLG4pe2xldCBzPWBQcml2YXRlIGlkZW50aWZpZXJzIGFyZSBub3Qgc3VwcG9ydGVkLiBVbmV4cGVjdGVkIHByaXZhdGUgaWRlbnRpZmllcjogJHtlfWA7biE9PW51bGwmJihzKz1gLCAke259YCksdGhpcy5lcnJvcihzKX1za2lwKCl7bGV0IGU9dGhpcy5uZXh0O2Zvcig7dGhpcy5pbmRleDx0aGlzLnRva2Vucy5sZW5ndGgmJiFlLmlzQ2hhcmFjdGVyKHZlKSYmIWUuaXNPcGVyYXRvcihcInxcIikmJih0aGlzLnJwYXJlbnNFeHBlY3RlZDw9MHx8IWUuaXNDaGFyYWN0ZXIobWUpKSYmKHRoaXMucmJyYWNlc0V4cGVjdGVkPD0wfHwhZS5pc0NoYXJhY3Rlcih4ZSkpJiYodGhpcy5yYnJhY2tldHNFeHBlY3RlZDw9MHx8IWUuaXNDaGFyYWN0ZXIod2UpKSYmKCEodGhpcy5jb250ZXh0Jm5lLldyaXRhYmxlKXx8IWUuaXNPcGVyYXRvcihcIj1cIikpOyl0aGlzLm5leHQuaXNFcnJvcigpJiZ0aGlzLmVycm9ycy5wdXNoKG5ldyB5ZSh0aGlzLm5leHQudG9TdHJpbmcoKSx0aGlzLmlucHV0LHRoaXMubG9jYXRpb25UZXh0KCksdGhpcy5sb2NhdGlvbikpLHRoaXMuYWR2YW5jZSgpLGU9dGhpcy5uZXh0fX0sTHQ9Y2xhc3MgZXh0ZW5kcyB5dHtlcnJvcnM9W107dmlzaXRQaXBlKCl7dGhpcy5lcnJvcnMucHVzaChcInBpcGVzXCIpfX07ZnVuY3Rpb24gUHIodCl7bGV0IGU9bmV3IE1hcCxuPTAscz0wLHI9MDtmb3IoO3I8dC5sZW5ndGg7KXtsZXQgbz10W3JdO2lmKG8udHlwZT09PTkpe2xldFthLGxdPW8ucGFydHM7bis9bC5sZW5ndGgscys9YS5sZW5ndGh9ZWxzZXtsZXQgYT1vLnBhcnRzLnJlZHVjZSgobCx1KT0+bCt1Lmxlbmd0aCwwKTtzKz1hLG4rPWF9ZS5zZXQocyxuKSxyKyt9cmV0dXJuIGV9dmFyIExyPW5ldyBNYXAoT2JqZWN0LmVudHJpZXMoe2NsYXNzOlwiY2xhc3NOYW1lXCIsZm9yOlwiaHRtbEZvclwiLGZvcm1hY3Rpb246XCJmb3JtQWN0aW9uXCIsaW5uZXJIdG1sOlwiaW5uZXJIVE1MXCIscmVhZG9ubHk6XCJyZWFkT25seVwiLHRhYmluZGV4OlwidGFiSW5kZXhcIn0pKSxkaT1BcnJheS5mcm9tKExyKS5yZWR1Y2UoKHQsW2Usbl0pPT4odC5zZXQoZSxuKSx0KSxuZXcgTWFwKTt2YXIgbWk9bmV3IHVlKG5ldyBEZSk7ZnVuY3Rpb24gRCh0KXtyZXR1cm4gZT0+ZS5raW5kPT09dH1mdW5jdGlvbiBTZSh0LGUpe3JldHVybiBuPT5uLmtpbmQ9PT10JiZlPT09bi5leHByZXNzaW9uIGluc3RhbmNlb2YgWmV9ZnVuY3Rpb24gTXIodCl7cmV0dXJuKHQua2luZD09PWYuUHJvcGVydHl8fHQua2luZD09PWYuVHdvV2F5UHJvcGVydHkpJiYhKHQuZXhwcmVzc2lvbiBpbnN0YW5jZW9mIFplKX12YXIgZ2k9W3t0ZXN0OkQoZi5TdHlsZU1hcCksdHJhbnNmb3JtOmV0fSx7dGVzdDpEKGYuQ2xhc3NNYXApLHRyYW5zZm9ybTpldH0se3Rlc3Q6RChmLlN0eWxlUHJvcCl9LHt0ZXN0OkQoZi5DbGFzc1Byb3ApfSx7dGVzdDpTZShmLkF0dHJpYnV0ZSwhMCl9LHt0ZXN0OlNlKGYuUHJvcGVydHksITApfSx7dGVzdDpNcn0se3Rlc3Q6U2UoZi5BdHRyaWJ1dGUsITEpfV0sdmk9W3t0ZXN0OlNlKGYuSG9zdFByb3BlcnR5LCEwKX0se3Rlc3Q6U2UoZi5Ib3N0UHJvcGVydHksITEpfSx7dGVzdDpEKGYuQXR0cmlidXRlKX0se3Rlc3Q6RChmLlN0eWxlTWFwKSx0cmFuc2Zvcm06ZXR9LHt0ZXN0OkQoZi5DbGFzc01hcCksdHJhbnNmb3JtOmV0fSx7dGVzdDpEKGYuU3R5bGVQcm9wKX0se3Rlc3Q6RChmLkNsYXNzUHJvcCl9XSx3aT1uZXcgU2V0KFtmLkxpc3RlbmVyLGYuVHdvV2F5TGlzdGVuZXIsZi5TdHlsZU1hcCxmLkNsYXNzTWFwLGYuU3R5bGVQcm9wLGYuQ2xhc3NQcm9wLGYuUHJvcGVydHksZi5Ud29XYXlQcm9wZXJ0eSxmLkhvc3RQcm9wZXJ0eSxmLkF0dHJpYnV0ZV0pO2Z1bmN0aW9uIGV0KHQpe3JldHVybiB0LnNsaWNlKHQubGVuZ3RoLTEpfXZhciB4aT1uZXcgTWFwKFtbXCJ3aW5kb3dcIixQLnJlc29sdmVXaW5kb3ddLFtcImRvY3VtZW50XCIsUC5yZXNvbHZlRG9jdW1lbnRdLFtcImJvZHlcIixQLnJlc29sdmVCb2R5XV0pO3ZhciBTaT1uZXcgTWFwKFtbQi5IVE1MLFAuc2FuaXRpemVIdG1sXSxbQi5SRVNPVVJDRV9VUkwsUC5zYW5pdGl6ZVJlc291cmNlVXJsXSxbQi5TQ1JJUFQsUC5zYW5pdGl6ZVNjcmlwdF0sW0IuU1RZTEUsUC5zYW5pdGl6ZVN0eWxlXSxbQi5VUkwsUC5zYW5pdGl6ZVVybF1dKSxFaT1uZXcgTWFwKFtbQi5IVE1MLFAudHJ1c3RDb25zdGFudEh0bWxdLFtCLlJFU09VUkNFX1VSTCxQLnRydXN0Q29uc3RhbnRSZXNvdXJjZVVybF1dKTt2YXIgRG47KGZ1bmN0aW9uKHQpe3RbdC5Ob25lPTBdPVwiTm9uZVwiLHRbdC5WaWV3Q29udGV4dFJlYWQ9MV09XCJWaWV3Q29udGV4dFJlYWRcIix0W3QuVmlld0NvbnRleHRXcml0ZT0yXT1cIlZpZXdDb250ZXh0V3JpdGVcIix0W3QuU2lkZUVmZmVjdGZ1bD00XT1cIlNpZGVFZmZlY3RmdWxcIn0pKERufHwoRG49e30pKTt2YXIgeWk9bmV3IE1hcChbW0guUHJvcGVydHksVS5Qcm9wZXJ0eV0sW0guVHdvV2F5LFUuVHdvV2F5UHJvcGVydHldLFtILkF0dHJpYnV0ZSxVLkF0dHJpYnV0ZV0sW0guQ2xhc3MsVS5DbGFzc05hbWVdLFtILlN0eWxlLFUuU3R5bGVQcm9wZXJ0eV0sW0guQW5pbWF0aW9uLFUuQW5pbWF0aW9uXV0pO3ZhciBfaT1TeW1ib2woXCJxdWVyeUFkdmFuY2VQbGFjZWhvbGRlclwiKTt2YXIgT247KGZ1bmN0aW9uKHQpe3RbdC5OR19DT05URU5UPTBdPVwiTkdfQ09OVEVOVFwiLHRbdC5TVFlMRT0xXT1cIlNUWUxFXCIsdFt0LlNUWUxFU0hFRVQ9Ml09XCJTVFlMRVNIRUVUXCIsdFt0LlNDUklQVD0zXT1cIlNDUklQVFwiLHRbdC5PVEhFUj00XT1cIk9USEVSXCJ9KShPbnx8KE9uPXt9KSk7dmFyIEZuOyhmdW5jdGlvbih0KXt0LklETEU9XCJpZGxlXCIsdC5USU1FUj1cInRpbWVyXCIsdC5JTlRFUkFDVElPTj1cImludGVyYWN0aW9uXCIsdC5JTU1FRElBVEU9XCJpbW1lZGlhdGVcIix0LkhPVkVSPVwiaG92ZXJcIix0LlZJRVdQT1JUPVwidmlld3BvcnRcIix0Lk5FVkVSPVwibmV2ZXJcIn0pKEZufHwoRm49e30pKTt2YXIgaXM9XCIlQ09NUCVcIixDaT1gX25naG9zdC0ke2lzfWAsVGk9YF9uZ2NvbnRlbnQtJHtpc31gO3ZhciBraT1uZXcgU3QoXCIxOS4xLjJcIik7dmFyIFZuOyhmdW5jdGlvbih0KXt0W3QuRXh0cmFjdD0wXT1cIkV4dHJhY3RcIix0W3QuTWVyZ2U9MV09XCJNZXJnZVwifSkoVm58fChWbj17fSkpO3ZhciBIbjsoZnVuY3Rpb24odCl7dFt0LkRpcmVjdGl2ZT0wXT1cIkRpcmVjdGl2ZVwiLHRbdC5Db21wb25lbnQ9MV09XCJDb21wb25lbnRcIix0W3QuSW5qZWN0YWJsZT0yXT1cIkluamVjdGFibGVcIix0W3QuUGlwZT0zXT1cIlBpcGVcIix0W3QuTmdNb2R1bGU9NF09XCJOZ01vZHVsZVwifSkoSG58fChIbj17fSkpO2Z1bmN0aW9uIG9zKHtzdGFydDp0LGVuZDplfSxuKXtsZXQgcz10LHI9ZTtmb3IoO3IhPT1zJiYvXFxzLy50ZXN0KG5bci0xXSk7KXItLTtmb3IoO3MhPT1yJiYvXFxzLy50ZXN0KG5bc10pOylzKys7cmV0dXJue3N0YXJ0OnMsZW5kOnJ9fWZ1bmN0aW9uIFJyKHtzdGFydDp0LGVuZDplfSxuKXtsZXQgcz10LHI9ZTtmb3IoO3IhPT1uLmxlbmd0aCYmL1xccy8udGVzdChuW3JdKTspcisrO2Zvcig7cyE9PTAmJi9cXHMvLnRlc3QobltzLTFdKTspcy0tO3JldHVybntzdGFydDpzLGVuZDpyfX1mdW5jdGlvbiBCcih0LGUpe3JldHVybiBlW3Quc3RhcnQtMV09PT1cIihcIiYmZVt0LmVuZF09PT1cIilcIj97c3RhcnQ6dC5zdGFydC0xLGVuZDp0LmVuZCsxfTp0fWZ1bmN0aW9uIGFzKHQsZSxuKXtsZXQgcz0wLHI9e3N0YXJ0OnQuc3RhcnQsZW5kOnQuZW5kfTtmb3IoOzspe2xldCBvPVJyKHIsZSksYT1CcihvLGUpO2lmKG8uc3RhcnQ9PT1hLnN0YXJ0JiZvLmVuZD09PWEuZW5kKWJyZWFrO3Iuc3RhcnQ9YS5zdGFydCxyLmVuZD1hLmVuZCxzKyt9cmV0dXJue2hhc1BhcmVuczoobj9zLTE6cykhPT0wLG91dGVyU3BhbjpvcyhuP3tzdGFydDpyLnN0YXJ0KzEsZW5kOnIuZW5kLTF9OnIsZSksaW5uZXJTcGFuOm9zKHQsZSl9fWZ1bmN0aW9uIGxzKHQpe3JldHVybiB0eXBlb2YgdD09XCJzdHJpbmdcIj9lPT5lPT09dDplPT50LnRlc3QoZSl9ZnVuY3Rpb24gY3ModCxlLG4pe2xldCBzPWxzKGUpO2ZvcihsZXQgcj1uO3I+PTA7ci0tKXtsZXQgbz10W3JdO2lmKHMobykpcmV0dXJuIHJ9dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBmcm9udCBjaGFyICR7ZX0gZnJvbSBpbmRleCAke259IGluICR7SlNPTi5zdHJpbmdpZnkodCl9YCl9ZnVuY3Rpb24gdXModCxlLG4pe2xldCBzPWxzKGUpO2ZvcihsZXQgcj1uO3I8dC5sZW5ndGg7cisrKXtsZXQgbz10W3JdO2lmKHMobykpcmV0dXJuIHJ9dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBjaGFyYWN0ZXIgJHtlfSBmcm9tIGluZGV4ICR7bn0gaW4gJHtKU09OLnN0cmluZ2lmeSh0KX1gKX1mdW5jdGlvbiBwcyh0KXtyZXR1cm4gdC5zbGljZSgwLDEpLnRvTG93ZXJDYXNlKCkrdC5zbGljZSgxKX1mdW5jdGlvbiBGZSh0KXtsZXR7c3RhcnQ6ZSxlbmQ6bn09dDtyZXR1cm57c3RhcnQ6ZSxlbmQ6bixyYW5nZTpbZSxuXX19dmFyIERyPXQ9PnVlLnByb3RvdHlwZS5fY29tbWVudFN0YXJ0KHQpO2Z1bmN0aW9uIE9yKHQsZSl7bGV0IG49ZT9Ecih0KTpudWxsO2lmKG49PT1udWxsKXJldHVybnt0ZXh0OnQsY29tbWVudHM6W119O2xldCBzPXt0eXBlOlwiQ29tbWVudExpbmVcIix2YWx1ZTp0LnNsaWNlKG4rMiksLi4uRmUoe3N0YXJ0Om4sZW5kOnQubGVuZ3RofSl9O3JldHVybnt0ZXh0OnQuc2xpY2UoMCxuKSxjb21tZW50czpbc119fWZ1bmN0aW9uIFZlKHQsZT0hMCl7cmV0dXJuIG49PntsZXQgcz1uZXcgRGUscj1uZXcgdWUocykse3RleHQ6byxjb21tZW50czphfT1PcihuLGUpLGw9dChvLHIpO2lmKGwuZXJyb3JzLmxlbmd0aCE9PTApe2xldFt7bWVzc2FnZTp1fV09bC5lcnJvcnM7dGhyb3cgbmV3IFN5bnRheEVycm9yKHUucmVwbGFjZSgvXlBhcnNlciBFcnJvcjogfCBhdCBjb2x1bW4gXFxkKyBpbiBbXl0qJC9nLFwiXCIpKX1yZXR1cm57cmVzdWx0OmwsY29tbWVudHM6YSx0ZXh0Om99fX12YXIgaHM9VmUoKHQsZSk9PmUucGFyc2VCaW5kaW5nKHQsXCJcIiwwKSksRnI9VmUoKHQsZSk9PmUucGFyc2VTaW1wbGVCaW5kaW5nKHQsXCJcIiwwKSksZnM9VmUoKHQsZSk9PmUucGFyc2VBY3Rpb24odCxcIlwiLDApKSxkcz1WZSgodCxlKT0+ZS5wYXJzZUludGVycG9sYXRpb25FeHByZXNzaW9uKHQsXCJcIiwwKSksbXM9VmUoKHQsZSk9PmUucGFyc2VUZW1wbGF0ZUJpbmRpbmdzKFwiXCIsdCxcIlwiLDAsMCksITEpO3ZhciBIcj0odCxlLG4pPT57aWYoISh0JiZlPT1udWxsKSlyZXR1cm4gQXJyYXkuaXNBcnJheShlKXx8dHlwZW9mIGU9PVwic3RyaW5nXCI/ZVtuPDA/ZS5sZW5ndGgrbjpuXTplLmF0KG4pfSxudD1Icjt2YXIgQnQ9Y2xhc3N7dGV4dDtjb25zdHJ1Y3RvcihlKXt0aGlzLnRleHQ9ZX1nZXRDaGFyYWN0ZXJJbmRleChlLG4pe3JldHVybiB1cyh0aGlzLnRleHQsZSxuKX1nZXRDaGFyYWN0ZXJMYXN0SW5kZXgoZSxuKXtyZXR1cm4gY3ModGhpcy50ZXh0LGUsbil9dHJhbnNmb3JtU3BhbihlLHtzdHJpcFNwYWNlczpuPSExLGhhc1BhcmVudFBhcmVuczpzPSExfT17fSl7aWYoIW4pcmV0dXJuIEZlKGUpO2xldHtvdXRlclNwYW46cixpbm5lclNwYW46byxoYXNQYXJlbnM6YX09YXMoZSx0aGlzLnRleHQscyksbD1GZShvKTtyZXR1cm4gYSYmKGwuZXh0cmE9e3BhcmVudGhlc2l6ZWQ6ITAscGFyZW5TdGFydDpyLnN0YXJ0LHBhcmVuRW5kOnIuZW5kfSksbH1jcmVhdGVOb2RlKGUse3N0cmlwU3BhY2VzOm49ITAsaGFzUGFyZW50UGFyZW5zOnM9ITF9PXt9KXtsZXR7dHlwZTpyLHN0YXJ0Om8sZW5kOmF9PWUsbD17Li4uZSwuLi50aGlzLnRyYW5zZm9ybVNwYW4oe3N0YXJ0Om8sZW5kOmF9LHtzdHJpcFNwYWNlczpuLGhhc1BhcmVudFBhcmVuczpzfSl9O3N3aXRjaChyKXtjYXNlXCJOdW1lcmljTGl0ZXJhbFwiOmNhc2VcIlN0cmluZ0xpdGVyYWxcIjp7bGV0IHU9dGhpcy50ZXh0LnNsaWNlKGwuc3RhcnQsbC5lbmQpLHt2YWx1ZTpofT1sO2wuZXh0cmE9ey4uLmwuZXh0cmEscmF3OnUscmF3VmFsdWU6aH07YnJlYWt9Y2FzZVwiT2JqZWN0UHJvcGVydHlcIjp7bGV0e3Nob3J0aGFuZDp1fT1sO3UmJihsLmV4dHJhPXsuLi5sLmV4dHJhLHNob3J0aGFuZDp1fSk7YnJlYWt9fXJldHVybiBsfX0sZ3M9QnQ7ZnVuY3Rpb24gT3QodCl7dmFyIGU7cmV0dXJuISEoKGU9dC5leHRyYSkhPW51bGwmJmUucGFyZW50aGVzaXplZCl9ZnVuY3Rpb24gJCh0KXtyZXR1cm4gT3QodCk/dC5leHRyYS5wYXJlblN0YXJ0OnQuc3RhcnR9ZnVuY3Rpb24gUih0KXtyZXR1cm4gT3QodCk/dC5leHRyYS5wYXJlbkVuZDp0LmVuZH1mdW5jdGlvbiB2cyh0KXtyZXR1cm4odC50eXBlPT09XCJPcHRpb25hbENhbGxFeHByZXNzaW9uXCJ8fHQudHlwZT09PVwiT3B0aW9uYWxNZW1iZXJFeHByZXNzaW9uXCIpJiYhT3QodCl9ZnVuY3Rpb24gd3ModCxlKXtsZXR7c3RhcnQ6bixlbmQ6c309dC5zb3VyY2VTcGFuO3JldHVybiBuPj1zfHwvXlxccyskLy50ZXN0KGUuc2xpY2UobixzKSl9dmFyIFdlLHBlLHAsdixIZSx4LER0LFVlPWNsYXNzIGV4dGVuZHMgZ3N7Y29uc3RydWN0b3IobixzKXtzdXBlcihzKTtWKHRoaXMscCk7Vih0aGlzLFdlKTtWKHRoaXMscGUpO0sodGhpcyxXZSxuKSxLKHRoaXMscGUscyl9Z2V0IG5vZGUoKXtyZXR1cm4gYyh0aGlzLHAseCkuY2FsbCh0aGlzLEwodGhpcyxXZSkpfXRyYW5zZm9ybU5vZGUobil7cmV0dXJuIGModGhpcyxwLER0KS5jYWxsKHRoaXMsbil9fTtXZT1uZXcgV2Vha01hcCxwZT1uZXcgV2Vha01hcCxwPW5ldyBXZWFrU2V0LHY9ZnVuY3Rpb24obix7c3RyaXBTcGFjZXM6cz0hMCxoYXNQYXJlbnRQYXJlbnM6cj0hMX09e30pe3JldHVybiB0aGlzLmNyZWF0ZU5vZGUobix7c3RyaXBTcGFjZXM6cyxoYXNQYXJlbnRQYXJlbnM6cn0pfSxIZT1mdW5jdGlvbihuLHMse2NvbXB1dGVkOnIsb3B0aW9uYWw6byxlbmQ6YT1SKHMpLGhhc1BhcmVudFBhcmVuczpsPSExfSl7aWYod3MobixMKHRoaXMscGUpKXx8bi5zb3VyY2VTcGFuLnN0YXJ0PT09cy5zdGFydClyZXR1cm4gcztsZXQgdT1jKHRoaXMscCx4KS5jYWxsKHRoaXMsbiksaD12cyh1KTtyZXR1cm4gYyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOm98fGg/XCJPcHRpb25hbE1lbWJlckV4cHJlc3Npb25cIjpcIk1lbWJlckV4cHJlc3Npb25cIixvYmplY3Q6dSxwcm9wZXJ0eTpzLGNvbXB1dGVkOnIsLi4ubz97b3B0aW9uYWw6ITB9Omg/e29wdGlvbmFsOiExfTp2b2lkIDAsc3RhcnQ6JCh1KSxlbmQ6YX0se2hhc1BhcmVudFBhcmVuczpsfSl9LHg9ZnVuY3Rpb24obixzPSExKXtyZXR1cm4gYyh0aGlzLHAsRHQpLmNhbGwodGhpcyxuLHMpfSxEdD1mdW5jdGlvbihuLHM9ITEpe2lmKG4gaW5zdGFuY2VvZiBQZSl7bGV0e2V4cHJlc3Npb25zOm99PW47aWYoby5sZW5ndGghPT0xKXRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgJ0ludGVycG9sYXRpb24nXCIpO3JldHVybiBjKHRoaXMscCx4KS5jYWxsKHRoaXMsb1swXSl9aWYobiBpbnN0YW5jZW9mIGFlKXJldHVybiBjKHRoaXMscCx2KS5jYWxsKHRoaXMse3R5cGU6XCJVbmFyeUV4cHJlc3Npb25cIixwcmVmaXg6ITAsYXJndW1lbnQ6Yyh0aGlzLHAseCkuY2FsbCh0aGlzLG4uZXhwciksb3BlcmF0b3I6bi5vcGVyYXRvciwuLi5uLnNvdXJjZVNwYW59LHtoYXNQYXJlbnRQYXJlbnM6c30pO2lmKG4gaW5zdGFuY2VvZiBBKXtsZXR7bGVmdDpvLG9wZXJhdGlvbjphLHJpZ2h0Omx9PW4sdT1jKHRoaXMscCx4KS5jYWxsKHRoaXMsbyksaD1jKHRoaXMscCx4KS5jYWxsKHRoaXMsbCksZz0kKHUpLFM9UihoKSx3PXtsZWZ0OnUscmlnaHQ6aCxzdGFydDpnLGVuZDpTfTtyZXR1cm4gYT09PVwiJiZcInx8YT09PVwifHxcInx8YT09PVwiPz9cIj9jKHRoaXMscCx2KS5jYWxsKHRoaXMsey4uLncsdHlwZTpcIkxvZ2ljYWxFeHByZXNzaW9uXCIsb3BlcmF0b3I6YX0se2hhc1BhcmVudFBhcmVuczpzfSk6Yyh0aGlzLHAsdikuY2FsbCh0aGlzLHsuLi53LHR5cGU6XCJCaW5hcnlFeHByZXNzaW9uXCIsb3BlcmF0b3I6YX0se2hhc1BhcmVudFBhcmVuczpzfSl9aWYobiBpbnN0YW5jZW9mIGJlKXtsZXR7ZXhwOm8sbmFtZTphLGFyZ3M6bH09bix1PWModGhpcyxwLHgpLmNhbGwodGhpcyxvKSxoPSQodSksZz1SKHUpLFM9dGhpcy5nZXRDaGFyYWN0ZXJJbmRleCgvXFxTLyx0aGlzLmdldENoYXJhY3RlckluZGV4KFwifFwiLGcpKzEpLHc9Yyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOlwiSWRlbnRpZmllclwiLG5hbWU6YSxzdGFydDpTLGVuZDpTK2EubGVuZ3RofSkseT1sLm1hcChUPT5jKHRoaXMscCx4KS5jYWxsKHRoaXMsVCkpO3JldHVybiBjKHRoaXMscCx2KS5jYWxsKHRoaXMse3R5cGU6XCJOR1BpcGVFeHByZXNzaW9uXCIsbGVmdDp1LHJpZ2h0OncsYXJndW1lbnRzOnksc3RhcnQ6aCxlbmQ6Uih5Lmxlbmd0aD09PTA/dzpudCghMSx5LC0xKSl9LHtoYXNQYXJlbnRQYXJlbnM6c30pfWlmKG4gaW5zdGFuY2VvZiBfZSlyZXR1cm4gYyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOlwiTkdDaGFpbmVkRXhwcmVzc2lvblwiLGV4cHJlc3Npb25zOm4uZXhwcmVzc2lvbnMubWFwKG89PmModGhpcyxwLHgpLmNhbGwodGhpcyxvKSksLi4ubi5zb3VyY2VTcGFufSx7aGFzUGFyZW50UGFyZW5zOnN9KTtpZihuIGluc3RhbmNlb2YgQ2Upe2xldHtjb25kaXRpb246byx0cnVlRXhwOmEsZmFsc2VFeHA6bH09bix1PWModGhpcyxwLHgpLmNhbGwodGhpcyxvKSxoPWModGhpcyxwLHgpLmNhbGwodGhpcyxhKSxnPWModGhpcyxwLHgpLmNhbGwodGhpcyxsKTtyZXR1cm4gYyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOlwiQ29uZGl0aW9uYWxFeHByZXNzaW9uXCIsdGVzdDp1LGNvbnNlcXVlbnQ6aCxhbHRlcm5hdGU6ZyxzdGFydDokKHUpLGVuZDpSKGcpfSx7aGFzUGFyZW50UGFyZW5zOnN9KX1pZihuIGluc3RhbmNlb2YgYilyZXR1cm4gYyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOlwiTkdFbXB0eUV4cHJlc3Npb25cIiwuLi5uLnNvdXJjZVNwYW59LHtoYXNQYXJlbnRQYXJlbnM6c30pO2lmKG4gaW5zdGFuY2VvZiBYKXJldHVybiBjKHRoaXMscCx2KS5jYWxsKHRoaXMse3R5cGU6XCJUaGlzRXhwcmVzc2lvblwiLC4uLm4uc291cmNlU3Bhbn0se2hhc1BhcmVudFBhcmVuczpzfSk7aWYobiBpbnN0YW5jZW9mIGtlfHxuIGluc3RhbmNlb2Ygb2UpcmV0dXJuIGModGhpcyxwLEhlKS5jYWxsKHRoaXMsbi5yZWNlaXZlcixjKHRoaXMscCx4KS5jYWxsKHRoaXMsbi5rZXkpLHtjb21wdXRlZDohMCxvcHRpb25hbDpuIGluc3RhbmNlb2Ygb2UsZW5kOm4uc291cmNlU3Bhbi5lbmQsaGFzUGFyZW50UGFyZW5zOnN9KTtpZihuIGluc3RhbmNlb2YgTmUpcmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIkFycmF5RXhwcmVzc2lvblwiLGVsZW1lbnRzOm4uZXhwcmVzc2lvbnMubWFwKG89PmModGhpcyxwLHgpLmNhbGwodGhpcyxvKSksLi4ubi5zb3VyY2VTcGFufSx7aGFzUGFyZW50UGFyZW5zOnN9KTtpZihuIGluc3RhbmNlb2YgQWUpe2xldHtrZXlzOm8sdmFsdWVzOmF9PW4sbD1hLm1hcChoPT5jKHRoaXMscCx4KS5jYWxsKHRoaXMsaCkpLHU9by5tYXAoKHtrZXk6aCxxdW90ZWQ6Z30sUyk9PntsZXQgdz1sW1NdLHk9JCh3KSxUPVIodyksRj10aGlzLmdldENoYXJhY3RlckluZGV4KC9cXFMvLFM9PT0wP24uc291cmNlU3Bhbi5zdGFydCsxOnRoaXMuZ2V0Q2hhcmFjdGVySW5kZXgoXCIsXCIsUihsW1MtMV0pKSsxKSxmZT15PT09Rj9UOnRoaXMuZ2V0Q2hhcmFjdGVyTGFzdEluZGV4KC9cXFMvLHRoaXMuZ2V0Q2hhcmFjdGVyTGFzdEluZGV4KFwiOlwiLHktMSktMSkrMSxkZT17c3RhcnQ6RixlbmQ6ZmV9LHE9Zz9jKHRoaXMscCx2KS5jYWxsKHRoaXMse3R5cGU6XCJTdHJpbmdMaXRlcmFsXCIsdmFsdWU6aCwuLi5kZX0pOmModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIklkZW50aWZpZXJcIixuYW1lOmgsLi4uZGV9KSxHdD1xLmVuZDxxLnN0YXJ0fHxGPT09eTtyZXR1cm4gYyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOlwiT2JqZWN0UHJvcGVydHlcIixrZXk6cSx2YWx1ZTp3LHNob3J0aGFuZDpHdCxjb21wdXRlZDohMSxzdGFydDokKHEpLGVuZDpUfSl9KTtyZXR1cm4gYyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOlwiT2JqZWN0RXhwcmVzc2lvblwiLHByb3BlcnRpZXM6dSwuLi5uLnNvdXJjZVNwYW59LHtoYXNQYXJlbnRQYXJlbnM6c30pfWlmKG4gaW5zdGFuY2VvZiBOKXtsZXR7dmFsdWU6b309bjtzd2l0Y2godHlwZW9mIG8pe2Nhc2VcImJvb2xlYW5cIjpyZXR1cm4gYyh0aGlzLHAsdikuY2FsbCh0aGlzLHt0eXBlOlwiQm9vbGVhbkxpdGVyYWxcIix2YWx1ZTpvLC4uLm4uc291cmNlU3Bhbn0se2hhc1BhcmVudFBhcmVuczpzfSk7Y2FzZVwibnVtYmVyXCI6cmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIk51bWVyaWNMaXRlcmFsXCIsdmFsdWU6bywuLi5uLnNvdXJjZVNwYW59LHtoYXNQYXJlbnRQYXJlbnM6c30pO2Nhc2VcIm9iamVjdFwiOnJldHVybiBjKHRoaXMscCx2KS5jYWxsKHRoaXMse3R5cGU6XCJOdWxsTGl0ZXJhbFwiLC4uLm4uc291cmNlU3Bhbn0se2hhc1BhcmVudFBhcmVuczpzfSk7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIlN0cmluZ0xpdGVyYWxcIix2YWx1ZTpvLC4uLm4uc291cmNlU3Bhbn0se2hhc1BhcmVudFBhcmVuczpzfSk7Y2FzZVwidW5kZWZpbmVkXCI6cmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIklkZW50aWZpZXJcIixuYW1lOlwidW5kZWZpbmVkXCIsLi4ubi5zb3VyY2VTcGFufSx7aGFzUGFyZW50UGFyZW5zOnN9KTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBMaXRlcmFsUHJpbWl0aXZlIHZhbHVlIHR5cGUgJHt0eXBlb2Ygb31gKX19aWYobiBpbnN0YW5jZW9mIFJlfHxuIGluc3RhbmNlb2YgbGUpe2xldCBvPW4gaW5zdGFuY2VvZiBsZSx7cmVjZWl2ZXI6YSxhcmdzOmx9PW4sdT1sLmxlbmd0aD09PTE/W2ModGhpcyxwLHgpLmNhbGwodGhpcyxsWzBdLCEwKV06bC5tYXAodz0+Yyh0aGlzLHAseCkuY2FsbCh0aGlzLHcpKSxoPWModGhpcyxwLHgpLmNhbGwodGhpcyxhKSxnPXZzKGgpLFM9b3x8Zz9cIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIjpcIkNhbGxFeHByZXNzaW9uXCI7cmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpTLGNhbGxlZTpoLGFyZ3VtZW50czp1LG9wdGlvbmFsOlM9PT1cIk9wdGlvbmFsQ2FsbEV4cHJlc3Npb25cIj9vOnZvaWQgMCxzdGFydDokKGgpLGVuZDpuLnNvdXJjZVNwYW4uZW5kfSx7aGFzUGFyZW50UGFyZW5zOnN9KX1pZihuIGluc3RhbmNlb2YgJGUpe2xldCBvPWModGhpcyxwLHgpLmNhbGwodGhpcyxuLmV4cHJlc3Npb24pO3JldHVybiBjKHRoaXMscCx2KS5jYWxsKHRoaXMse3R5cGU6XCJUU05vbk51bGxFeHByZXNzaW9uXCIsZXhwcmVzc2lvbjpvLHN0YXJ0OiQobyksZW5kOm4uc291cmNlU3Bhbi5lbmR9LHtoYXNQYXJlbnRQYXJlbnM6c30pfWxldCByPW4gaW5zdGFuY2VvZiBMZTtpZihyfHxuIGluc3RhbmNlb2YgTWUpe2xldCBvPWModGhpcyxwLHgpLmNhbGwodGhpcyxuLmV4cHJlc3Npb24pLGE9cj9cIiFcIjpcInR5cGVvZlwiLHtzdGFydDpsfT1uLnNvdXJjZVNwYW47aWYoIXIpe2xldCB1PXRoaXMudGV4dC5sYXN0SW5kZXhPZihhLGwpO2lmKHU9PT0tMSl0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIG9wZXJhdG9yICR7YX0gZnJvbSBpbmRleCAke2x9IGluICR7SlNPTi5zdHJpbmdpZnkodGhpcy50ZXh0KX1gKTtsPXV9cmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIlVuYXJ5RXhwcmVzc2lvblwiLHByZWZpeDohMCxvcGVyYXRvcjphLGFyZ3VtZW50Om8sc3RhcnQ6bCxlbmQ6UihvKX0se2hhc1BhcmVudFBhcmVuczpzfSl9aWYobiBpbnN0YW5jZW9mIHJlfHxuIGluc3RhbmNlb2YgaWUpe2xldHtyZWNlaXZlcjpvLG5hbWU6YX09bixsPXRoaXMuZ2V0Q2hhcmFjdGVyTGFzdEluZGV4KC9cXFMvLG4uc291cmNlU3Bhbi5lbmQtMSkrMSx1PWModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIklkZW50aWZpZXJcIixuYW1lOmEsc3RhcnQ6bC1hLmxlbmd0aCxlbmQ6bH0sd3MobyxMKHRoaXMscGUpKT97aGFzUGFyZW50UGFyZW5zOnN9Ont9KTtyZXR1cm4gYyh0aGlzLHAsSGUpLmNhbGwodGhpcyxvLHUse2NvbXB1dGVkOiExLG9wdGlvbmFsOm4gaW5zdGFuY2VvZiBpZSxoYXNQYXJlbnRQYXJlbnM6c30pfWlmKG4gaW5zdGFuY2VvZiBJZSl7bGV0IG89Yyh0aGlzLHAseCkuY2FsbCh0aGlzLG4ua2V5KSxhPWModGhpcyxwLHgpLmNhbGwodGhpcyxuLnZhbHVlKSxsPWModGhpcyxwLEhlKS5jYWxsKHRoaXMsbi5yZWNlaXZlcixvLHtjb21wdXRlZDohMCxvcHRpb25hbDohMSxlbmQ6dGhpcy5nZXRDaGFyYWN0ZXJJbmRleChcIl1cIixSKG8pKSsxfSk7cmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIsbGVmdDpsLG9wZXJhdG9yOlwiPVwiLHJpZ2h0OmEsc3RhcnQ6JChsKSxlbmQ6UihhKX0se2hhc1BhcmVudFBhcmVuczpzfSl9aWYobiBpbnN0YW5jZW9mIFRlKXtsZXR7cmVjZWl2ZXI6byxuYW1lOmEsdmFsdWU6bH09bix1PWModGhpcyxwLHgpLmNhbGwodGhpcyxsKSxoPXRoaXMuZ2V0Q2hhcmFjdGVyTGFzdEluZGV4KC9cXFMvLHRoaXMuZ2V0Q2hhcmFjdGVyTGFzdEluZGV4KFwiPVwiLCQodSktMSktMSkrMSxnPWModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIklkZW50aWZpZXJcIixuYW1lOmEsc3RhcnQ6aC1hLmxlbmd0aCxlbmQ6aH0pLFM9Yyh0aGlzLHAsSGUpLmNhbGwodGhpcyxvLGcse2NvbXB1dGVkOiExLG9wdGlvbmFsOiExfSk7cmV0dXJuIGModGhpcyxwLHYpLmNhbGwodGhpcyx7dHlwZTpcIkFzc2lnbm1lbnRFeHByZXNzaW9uXCIsbGVmdDpTLG9wZXJhdG9yOlwiPVwiLHJpZ2h0OnUsc3RhcnQ6JChTKSxlbmQ6Uih1KX0se2hhc1BhcmVudFBhcmVuczpzfSl9dGhyb3cgT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG5vZGVcIikse25vZGU6bn0pfTtmdW5jdGlvbiB4cyh0LGUpe3JldHVybiBuZXcgVWUodCxlKS5ub2RlfWZ1bmN0aW9uIFNzKHQpe3JldHVybiB0IGluc3RhbmNlb2YgQmV9ZnVuY3Rpb24gRXModCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBjZX12YXIgaGUsUSxtLHlzLEksVnQsSHQsVXQsX3MsQ3MsVHMsa3MsRnQ9Y2xhc3MgZXh0ZW5kcyBVZXtjb25zdHJ1Y3RvcihuLHMpe3N1cGVyKHZvaWQgMCxzKTtWKHRoaXMsbSk7Vih0aGlzLGhlKTtWKHRoaXMsUSk7Syh0aGlzLGhlLG4pLEsodGhpcyxRLHMpO2ZvcihsZXQgciBvZiBuKWModGhpcyxtLF9zKS5jYWxsKHRoaXMscil9Z2V0IGV4cHJlc3Npb25zKCl7cmV0dXJuIGModGhpcyxtLFRzKS5jYWxsKHRoaXMpfX07aGU9bmV3IFdlYWtNYXAsUT1uZXcgV2Vha01hcCxtPW5ldyBXZWFrU2V0LHlzPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyxoZSlbMF0ua2V5fSxJPWZ1bmN0aW9uKG4se3N0cmlwU3BhY2VzOnM9ITB9PXt9KXtyZXR1cm4gdGhpcy5jcmVhdGVOb2RlKG4se3N0cmlwU3BhY2VzOnN9KX0sVnQ9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMudHJhbnNmb3JtTm9kZShuKX0sSHQ9ZnVuY3Rpb24obil7cmV0dXJuIHBzKG4uc2xpY2UoTCh0aGlzLG0seXMpLnNvdXJjZS5sZW5ndGgpKX0sVXQ9ZnVuY3Rpb24obil7bGV0IHM9TCh0aGlzLFEpO2lmKHNbbi5zdGFydF0hPT0nXCInJiZzW24uc3RhcnRdIT09XCInXCIpcmV0dXJuO2xldCByPXNbbi5zdGFydF0sbz0hMTtmb3IobGV0IGE9bi5zdGFydCsxO2E8cy5sZW5ndGg7YSsrKXN3aXRjaChzW2FdKXtjYXNlIHI6aWYoIW8pe24uZW5kPWErMTtyZXR1cm59ZGVmYXVsdDpvPSExO2JyZWFrO2Nhc2VcIlxcXFxcIjpvPSFvO2JyZWFrfX0sX3M9ZnVuY3Rpb24obil7Yyh0aGlzLG0sVXQpLmNhbGwodGhpcyxuLmtleS5zcGFuKSxFcyhuKSYmbi52YWx1ZSYmYyh0aGlzLG0sVXQpLmNhbGwodGhpcyxuLnZhbHVlLnNwYW4pfSxDcz1mdW5jdGlvbihuKXtpZighbi52YWx1ZXx8bi52YWx1ZS5zb3VyY2UpcmV0dXJuIG4udmFsdWU7bGV0IHM9dGhpcy5nZXRDaGFyYWN0ZXJJbmRleCgvXFxTLyxuLnNvdXJjZVNwYW4uc3RhcnQpO3JldHVybntzb3VyY2U6XCIkaW1wbGljaXRcIixzcGFuOntzdGFydDpzLGVuZDpzfX19LFRzPWZ1bmN0aW9uKCl7bGV0IG49TCh0aGlzLGhlKSxbc109bixyPUwodGhpcyxRKS5zbGljZShzLnNvdXJjZVNwYW4uc3RhcnQscy5zb3VyY2VTcGFuLmVuZCkudHJpbSgpLmxlbmd0aD09PTA/bi5zbGljZSgxKTpuLG89W10sYT1udWxsO2ZvcihsZXRbbCx1XW9mIHIuZW50cmllcygpKXtpZihhJiZTcyhhKSYmRXModSkmJnUudmFsdWUmJnUudmFsdWUuc291cmNlPT09YS5rZXkuc291cmNlKXtsZXQgaD1jKHRoaXMsbSxJKS5jYWxsKHRoaXMse3R5cGU6XCJOR01pY3Jvc3ludGF4S2V5XCIsbmFtZTp1LmtleS5zb3VyY2UsLi4udS5rZXkuc3Bhbn0pLGc9KHksVCk9Pih7Li4ueSwuLi50aGlzLnRyYW5zZm9ybVNwYW4oe3N0YXJ0Onkuc3RhcnQsZW5kOlR9KX0pLFM9eT0+KHsuLi5nKHksaC5lbmQpLGFsaWFzOmh9KSx3PW8ucG9wKCk7aWYody50eXBlPT09XCJOR01pY3Jvc3ludGF4RXhwcmVzc2lvblwiKW8ucHVzaChTKHcpKTtlbHNlIGlmKHcudHlwZT09PVwiTkdNaWNyb3N5bnRheEtleWVkRXhwcmVzc2lvblwiKXtsZXQgeT1TKHcuZXhwcmVzc2lvbik7by5wdXNoKGcoey4uLncsZXhwcmVzc2lvbjp5fSx5LmVuZCkpfWVsc2UgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHR5cGUgJHt3LnR5cGV9YCl9ZWxzZSBvLnB1c2goYyh0aGlzLG0sa3MpLmNhbGwodGhpcyx1LGwpKTthPXV9cmV0dXJuIGModGhpcyxtLEkpLmNhbGwodGhpcyx7dHlwZTpcIk5HTWljcm9zeW50YXhcIixib2R5Om8sLi4uby5sZW5ndGg9PT0wP25bMF0uc291cmNlU3Bhbjp7c3RhcnQ6b1swXS5zdGFydCxlbmQ6bnQoITEsbywtMSkuZW5kfX0pfSxrcz1mdW5jdGlvbihuLHMpe2lmKFNzKG4pKXtsZXR7a2V5OnIsdmFsdWU6b309bjtyZXR1cm4gbz9zPT09MD9jKHRoaXMsbSxJKS5jYWxsKHRoaXMse3R5cGU6XCJOR01pY3Jvc3ludGF4RXhwcmVzc2lvblwiLGV4cHJlc3Npb246Yyh0aGlzLG0sVnQpLmNhbGwodGhpcyxvLmFzdCksYWxpYXM6bnVsbCwuLi5vLnNvdXJjZVNwYW59KTpjKHRoaXMsbSxJKS5jYWxsKHRoaXMse3R5cGU6XCJOR01pY3Jvc3ludGF4S2V5ZWRFeHByZXNzaW9uXCIsa2V5OmModGhpcyxtLEkpLmNhbGwodGhpcyx7dHlwZTpcIk5HTWljcm9zeW50YXhLZXlcIixuYW1lOmModGhpcyxtLEh0KS5jYWxsKHRoaXMsci5zb3VyY2UpLC4uLnIuc3Bhbn0pLGV4cHJlc3Npb246Yyh0aGlzLG0sSSkuY2FsbCh0aGlzLHt0eXBlOlwiTkdNaWNyb3N5bnRheEV4cHJlc3Npb25cIixleHByZXNzaW9uOmModGhpcyxtLFZ0KS5jYWxsKHRoaXMsby5hc3QpLGFsaWFzOm51bGwsLi4uby5zb3VyY2VTcGFufSksc3RhcnQ6ci5zcGFuLnN0YXJ0LGVuZDpvLnNvdXJjZVNwYW4uZW5kfSk6Yyh0aGlzLG0sSSkuY2FsbCh0aGlzLHt0eXBlOlwiTkdNaWNyb3N5bnRheEtleVwiLG5hbWU6Yyh0aGlzLG0sSHQpLmNhbGwodGhpcyxyLnNvdXJjZSksLi4uci5zcGFufSl9ZWxzZXtsZXR7a2V5OnIsc291cmNlU3BhbjpvfT1uO2lmKC9ebGV0XFxzJC8udGVzdChMKHRoaXMsUSkuc2xpY2Uoby5zdGFydCxvLnN0YXJ0KzQpKSl7bGV0e3ZhbHVlOmx9PW47cmV0dXJuIGModGhpcyxtLEkpLmNhbGwodGhpcyx7dHlwZTpcIk5HTWljcm9zeW50YXhMZXRcIixrZXk6Yyh0aGlzLG0sSSkuY2FsbCh0aGlzLHt0eXBlOlwiTkdNaWNyb3N5bnRheEtleVwiLG5hbWU6ci5zb3VyY2UsLi4uci5zcGFufSksdmFsdWU6bD9jKHRoaXMsbSxJKS5jYWxsKHRoaXMse3R5cGU6XCJOR01pY3Jvc3ludGF4S2V5XCIsbmFtZTpsLnNvdXJjZSwuLi5sLnNwYW59KTpudWxsLHN0YXJ0Om8uc3RhcnQsZW5kOmw/bC5zcGFuLmVuZDpyLnNwYW4uZW5kfSl9ZWxzZXtsZXQgbD1jKHRoaXMsbSxDcykuY2FsbCh0aGlzLG4pO3JldHVybiBjKHRoaXMsbSxJKS5jYWxsKHRoaXMse3R5cGU6XCJOR01pY3Jvc3ludGF4QXNcIixrZXk6Yyh0aGlzLG0sSSkuY2FsbCh0aGlzLHt0eXBlOlwiTkdNaWNyb3N5bnRheEtleVwiLG5hbWU6bC5zb3VyY2UsLi4ubC5zcGFufSksYWxpYXM6Yyh0aGlzLG0sSSkuY2FsbCh0aGlzLHt0eXBlOlwiTkdNaWNyb3N5bnRheEtleVwiLG5hbWU6ci5zb3VyY2UsLi4uci5zcGFufSksc3RhcnQ6bC5zcGFuLnN0YXJ0LGVuZDpyLnNwYW4uZW5kfSl9fX07ZnVuY3Rpb24gSXModCxlKXtyZXR1cm4gbmV3IEZ0KHQsZSkuZXhwcmVzc2lvbnN9ZnVuY3Rpb24gc3Qoe3Jlc3VsdDp7YXN0OnR9LHRleHQ6ZSxjb21tZW50czpufSl7cmV0dXJuIE9iamVjdC5hc3NpZ24oeHModCxlKSx7Y29tbWVudHM6bn0pfWZ1bmN0aW9uIGJzKHtyZXN1bHQ6e3RlbXBsYXRlQmluZGluZ3M6dH0sdGV4dDplfSl7cmV0dXJuIElzKHQsZSl9dmFyIE5zPXQ9PnN0KGhzKHQpKTt2YXIgQXM9dD0+c3QoZHModCkpLFd0PXQ9PnN0KGZzKHQpKSxQcz10PT5icyhtcyh0KSk7ZnVuY3Rpb24gcXQodCl7dmFyIHMscixvO2xldCBlPSgocz10LnJhbmdlKT09bnVsbD92b2lkIDA6c1swXSk/P3Quc3RhcnQsbj0obz0oKHI9dC5kZWNsYXJhdGlvbik9PW51bGw/dm9pZCAwOnIuZGVjb3JhdG9ycyk/P3QuZGVjb3JhdG9ycyk9PW51bGw/dm9pZCAwOm9bMF07cmV0dXJuIG4/TWF0aC5taW4ocXQobiksZSk6ZX1mdW5jdGlvbiBMcyh0KXt2YXIgZTtyZXR1cm4oKGU9dC5yYW5nZSk9PW51bGw/dm9pZCAwOmVbMV0pPz90LmVuZH1mdW5jdGlvbiBydCh0KXtyZXR1cm57YXN0Rm9ybWF0OlwiZXN0cmVlXCIscGFyc2UoZSl7bGV0IG49dChlKTtyZXR1cm57dHlwZTpcIk5HUm9vdFwiLG5vZGU6dD09PVd0JiZuLnR5cGUhPT1cIk5HQ2hhaW5lZEV4cHJlc3Npb25cIj97Li4ubix0eXBlOlwiTkdDaGFpbmVkRXhwcmVzc2lvblwiLGV4cHJlc3Npb25zOltuXX06bn19LGxvY1N0YXJ0OnF0LGxvY0VuZDpMc319dmFyIFVyPXJ0KFd0KSxXcj1ydChOcykscXI9cnQoQXMpLGpyPXJ0KFBzKTt2YXIgWmk9enQ7ZXhwb3J0e1ppIGFzIGRlZmF1bHQsanQgYXMgcGFyc2Vyc307XG4iXSwibmFtZXMiOlsiX2UiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7QUFBQSxvQkFBQUE7QUFBQSxJQUFJLEtBQUcsT0FBTztBQUFlLElBQUksS0FBRyxDQUFBQyxRQUFHO0FBQUMsUUFBTSxVQUFVQSxHQUFDO0FBQUM7QUFBRSxJQUFJLEtBQUcsQ0FBQ0EsS0FBRSxNQUFJO0FBQUMsV0FBUSxLQUFLLEVBQUUsSUFBR0EsS0FBRSxHQUFFLEVBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxZQUFXLEtBQUUsQ0FBQztBQUFDO0FBQUUsSUFBSSxLQUFHLENBQUNBLEtBQUUsR0FBRSxNQUFJLEVBQUUsSUFBSUEsR0FBQyxLQUFHLEdBQUcsWUFBVSxDQUFDO0FBQUUsSUFBSSxJQUFFLENBQUNBLEtBQUUsR0FBRSxPQUFLLEdBQUdBLEtBQUUsR0FBRSx5QkFBeUIsR0FBRSxJQUFFLEVBQUUsS0FBS0EsR0FBQyxJQUFFLEVBQUUsSUFBSUEsR0FBQyxJQUFHLElBQUUsQ0FBQ0EsS0FBRSxHQUFFLE1BQUksRUFBRSxJQUFJQSxHQUFDLElBQUUsR0FBRyxtREFBbUQsSUFBRSxhQUFhLFVBQVEsRUFBRSxJQUFJQSxHQUFDLElBQUUsRUFBRSxJQUFJQSxLQUFFLENBQUMsR0FBRSxJQUFFLENBQUNBLEtBQUUsR0FBRSxHQUFFLE9BQUssR0FBR0EsS0FBRSxHQUFFLHdCQUF3QixHQUFnQixFQUFFLElBQUlBLEtBQUUsQ0FBQyxHQUFFLElBQUcsSUFBRSxDQUFDQSxLQUFFLEdBQUUsT0FBSyxHQUFHQSxLQUFFLEdBQUUsdUJBQXVCLEdBQUU7QUFBRyxJQUFJLEtBQUc7QUFBRyxHQUFHLElBQUcsRUFBQyxTQUFRLE1BQUksR0FBRSxDQUFDO0FBQUssSUFBQyxLQUFHLENBQUE7QUFBRyxHQUFHLElBQUcsRUFBQyxhQUFZLE1BQUksSUFBRyxjQUFhLE1BQUksSUFBRyxnQkFBZSxNQUFJLElBQUcsb0JBQW1CLE1BQUksR0FBRSxDQUFDO0FBQW9JLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFdBQVMsQ0FBQyxJQUFFLFlBQVdBLElBQUVBLElBQUUsT0FBSyxDQUFDLElBQUUsUUFBT0EsSUFBRUEsSUFBRSxZQUFVLENBQUMsSUFBRTtBQUFXLEdBQUcsT0FBSyxLQUFHLENBQUEsRUFBRztBQUFFLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFNBQU8sQ0FBQyxJQUFFLFVBQVNBLElBQUVBLElBQUUsVUFBUSxDQUFDLElBQUU7QUFBUyxHQUFHLE9BQUssS0FBRyxHQUFHO0FBQUUsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsT0FBSyxDQUFDLElBQUUsUUFBT0EsSUFBRUEsSUFBRSxjQUFZLENBQUMsSUFBRSxlQUFjQSxJQUFFQSxJQUFFLDZCQUEyQixDQUFDLElBQUU7QUFBNEIsR0FBRyxPQUFLLEtBQUcsQ0FBRSxFQUFDO0FBQUUsSUFBSTtBQUFBLENBQUcsU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsT0FBSyxDQUFDLElBQUUsUUFBT0EsSUFBRUEsSUFBRSxPQUFLLENBQUMsSUFBRSxRQUFPQSxJQUFFQSxJQUFFLFFBQU0sQ0FBQyxJQUFFLFNBQVFBLElBQUVBLElBQUUsU0FBTyxDQUFDLElBQUUsVUFBU0EsSUFBRUEsSUFBRSxNQUFJLENBQUMsSUFBRSxPQUFNQSxJQUFFQSxJQUFFLGVBQWEsQ0FBQyxJQUFFO0FBQWMsR0FBRyxNQUFJLElBQUUsQ0FBRSxFQUFDO0FBQUUsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsUUFBTSxDQUFDLElBQUUsU0FBUUEsSUFBRUEsSUFBRSxVQUFRLENBQUMsSUFBRSxXQUFVQSxJQUFFQSxJQUFFLFNBQU8sQ0FBQyxJQUFFO0FBQVEsR0FBRyxPQUFLLEtBQUcsQ0FBRSxFQUFDO0FBQUUsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsU0FBTyxDQUFDLElBQUUsVUFBU0EsSUFBRUEsSUFBRSxNQUFJLENBQUMsSUFBRTtBQUFLLEdBQUcsT0FBSyxLQUFHLENBQUUsRUFBQztBQUFFLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLE9BQUssQ0FBQyxJQUFFLFFBQU9BLElBQUVBLElBQUUsUUFBTSxDQUFDLElBQUU7QUFBTyxHQUFHLE9BQUssS0FBRyxDQUFFLEVBQUM7QUFBRSxJQUFJO0FBQUEsQ0FBSSxTQUFTQSxLQUFFO0FBQUMsRUFBQUEsSUFBRUEsSUFBRSxVQUFRLENBQUMsSUFBRSxXQUFVQSxJQUFFQSxJQUFFLE9BQUssQ0FBQyxJQUFFLFFBQU9BLElBQUVBLElBQUUsU0FBTyxDQUFDLElBQUUsVUFBU0EsSUFBRUEsSUFBRSxNQUFJLENBQUMsSUFBRSxPQUFNQSxJQUFFQSxJQUFFLFNBQU8sQ0FBQyxJQUFFLFVBQVNBLElBQUVBLElBQUUsV0FBUyxDQUFDLElBQUUsWUFBV0EsSUFBRUEsSUFBRSxXQUFTLENBQUMsSUFBRSxZQUFXQSxJQUFFQSxJQUFFLE9BQUssQ0FBQyxJQUFFO0FBQU0sR0FBRyxPQUFLLEtBQUcsQ0FBQSxFQUFHO0FBQUUsSUFBSSxLQUFHO0FBQU8sSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsUUFBTSxDQUFDLElBQUUsU0FBUUEsSUFBRUEsSUFBRSxPQUFLLENBQUMsSUFBRTtBQUFNLEdBQUcsT0FBSyxLQUFHLENBQUUsRUFBQztBQUFFLElBQUk7QUFBQSxDQUFHLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFNBQU8sQ0FBQyxJQUFFLFVBQVNBLElBQUVBLElBQUUsWUFBVSxDQUFDLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxZQUFVLENBQUMsSUFBRSxhQUFZQSxJQUFFQSxJQUFFLGVBQWEsQ0FBQyxJQUFFLGdCQUFlQSxJQUFFQSxJQUFFLFFBQU0sQ0FBQyxJQUFFLFNBQVFBLElBQUVBLElBQUUsT0FBSyxDQUFDLElBQUUsUUFBT0EsSUFBRUEsSUFBRSxTQUFPLENBQUMsSUFBRSxVQUFTQSxJQUFFQSxJQUFFLFdBQVMsQ0FBQyxJQUFFLFlBQVdBLElBQUVBLElBQUUsU0FBTyxDQUFDLElBQUUsVUFBU0EsSUFBRUEsSUFBRSxNQUFJLENBQUMsSUFBRSxPQUFNQSxJQUFFQSxJQUFFLEtBQUcsRUFBRSxJQUFFLE1BQUtBLElBQUVBLElBQUUsWUFBVSxFQUFFLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxhQUFXLEVBQUUsSUFBRSxjQUFhQSxJQUFFQSxJQUFFLFFBQU0sRUFBRSxJQUFFLFNBQVFBLElBQUVBLElBQUUsY0FBWSxFQUFFLElBQUUsZUFBY0EsSUFBRUEsSUFBRSxTQUFPLEVBQUUsSUFBRSxVQUFTQSxJQUFFQSxJQUFFLGVBQWEsRUFBRSxJQUFFLGdCQUFlQSxJQUFFQSxJQUFFLGtCQUFnQixFQUFFLElBQUU7QUFBaUIsR0FBRyxNQUFJLElBQUUsQ0FBQSxFQUFHO0FBQUUsU0FBUyxHQUFHQSxLQUFFLEdBQUU7QUFBQyxTQUFPQSxPQUFHLFFBQU0sS0FBRyxPQUFLQSxPQUFHLElBQUVBLElBQUUsYUFBYSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFQSxJQUFFO0FBQU8sTUFBRyxNQUFJLEVBQUUsT0FBTyxRQUFNO0FBQUcsV0FBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUksS0FBRyxDQUFDLEVBQUVBLElBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFBUyxTQUFRO0FBQUE7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRTtBQUFDLFNBQU8sR0FBR0EsS0FBRSxHQUFFLENBQUMsR0FBRSxNQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFBQztBQUFDLElBQUksSUFBRSxNQUFLO0FBQUEsRUFBaUIsWUFBWSxHQUFFLEdBQUU7QUFBaEM7QUFBSztBQUE0QixTQUFLLE9BQUssS0FBRyxNQUFLLEtBQUssYUFBVyxLQUFHO0FBQUEsRUFBSTtBQUFBLEVBQUMsS0FBSyxHQUFFLEdBQUU7QUFBQyxXQUFPLElBQUksR0FBRyxNQUFLLEdBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsSUFBSSxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxHQUFHLE1BQUssR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxPQUFPLEdBQUUsR0FBRSxHQUFFO0FBQUMsV0FBTyxJQUFJLEdBQUcsTUFBSyxHQUFFLE1BQUssR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsWUFBWSxHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxHQUFHLE1BQUssR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxZQUFZLEdBQUUsSUFBRSxNQUFLLEdBQUU7QUFBQyxXQUFPLElBQUksR0FBRyxNQUFLLEdBQUUsR0FBRSxNQUFLLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxPQUFPLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUUsUUFBTyxNQUFLLEdBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsVUFBVSxHQUFFLEdBQUU7QUFBQyxXQUFPLElBQUksRUFBRSxFQUFFLFdBQVUsTUFBSyxHQUFFLE1BQUssQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLFVBQVUsR0FBRSxHQUFFO0FBQUMsV0FBTyxJQUFJLEVBQUUsRUFBRSxXQUFVLE1BQUssR0FBRSxNQUFLLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxhQUFhLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUUsY0FBYSxNQUFLLEdBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsTUFBTSxHQUFFLEdBQUU7QUFBQyxXQUFPLElBQUksRUFBRSxFQUFFLE9BQU0sTUFBSyxHQUFFLE1BQUssQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLEtBQUssR0FBRSxHQUFFO0FBQUMsV0FBTyxJQUFJLEVBQUUsRUFBRSxNQUFLLE1BQUssR0FBRSxNQUFLLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxPQUFPLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUUsUUFBTyxNQUFLLEdBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxXQUFPLElBQUksRUFBRSxFQUFFLFVBQVMsTUFBSyxHQUFFLE1BQUssQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLE9BQU8sR0FBRSxHQUFFO0FBQUMsV0FBTyxJQUFJLEVBQUUsRUFBRSxRQUFPLE1BQUssR0FBRSxNQUFLLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxJQUFJLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUUsS0FBSSxNQUFLLEdBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsVUFBVSxHQUFFLEdBQUUsSUFBRSxNQUFHO0FBQUMsV0FBTyxJQUFJLEVBQUUsRUFBRSxXQUFVLE1BQUssR0FBRSxNQUFLLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLFdBQVcsR0FBRSxHQUFFLElBQUUsTUFBRztBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUUsWUFBVyxNQUFLLEdBQUUsTUFBSyxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxHQUFHLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUUsSUFBRyxNQUFLLEdBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsTUFBTSxHQUFFLEdBQUU7QUFBQyxXQUFPLElBQUksRUFBRSxFQUFFLE9BQU0sTUFBSyxHQUFFLE1BQUssQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLFlBQVksR0FBRSxHQUFFO0FBQUMsV0FBTyxJQUFJLEVBQUUsRUFBRSxhQUFZLE1BQUssR0FBRSxNQUFLLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxPQUFPLEdBQUUsR0FBRTtBQUFDLFdBQU8sSUFBSSxFQUFFLEVBQUUsUUFBTyxNQUFLLEdBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsYUFBYSxHQUFFLEdBQUU7QUFBQyxXQUFP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QUFBQSxFQUFDO0FBQUEsRUFBQyxXQUFVO0FBQUMsV0FBTSxHQUFHLEtBQUssTUFBTSxPQUFPLEtBQUssUUFBUTtBQUFBLEVBQUU7QUFBQyxHQUFFLEtBQUcsTUFBSztBQUFBLEVBQXNCLFlBQVksR0FBRSxHQUFFLEdBQUU7QUFBdkM7QUFBVztBQUFJO0FBQXlCLFNBQUssYUFBVyxHQUFFLEtBQUssTUFBSSxHQUFFLEtBQUssUUFBTTtBQUFBLEVBQUM7QUFBQyxHQUFFLEtBQUcsTUFBSztBQUFBLEVBQXNCLFlBQVksR0FBRSxHQUFFLEdBQUU7QUFBdkM7QUFBVztBQUFJO0FBQXlCLFNBQUssYUFBVyxHQUFFLEtBQUssTUFBSSxHQUFFLEtBQUssUUFBTTtBQUFBLEVBQUM7QUFBQyxHQUFFLEtBQUcsTUFBSztBQUFBLEVBQUMsTUFBTSxHQUFFLEdBQUU7QUFBQyxNQUFFLE1BQU0sTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsV0FBVyxHQUFFLEdBQUU7QUFBQyxTQUFLLE1BQU0sRUFBRSxNQUFLLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxZQUFZLEdBQUUsR0FBRTtBQUFDLFNBQUssTUFBTSxFQUFFLE1BQUssQ0FBQyxHQUFFLEtBQUssTUFBTSxFQUFFLE9BQU0sQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLFdBQVcsR0FBRSxHQUFFO0FBQUMsU0FBSyxTQUFTLEVBQUUsYUFBWSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsaUJBQWlCLEdBQUUsR0FBRTtBQUFDLFNBQUssTUFBTSxFQUFFLFdBQVUsQ0FBQyxHQUFFLEtBQUssTUFBTSxFQUFFLFNBQVEsQ0FBQyxHQUFFLEtBQUssTUFBTSxFQUFFLFVBQVMsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLFVBQVUsR0FBRSxHQUFFO0FBQUMsU0FBSyxNQUFNLEVBQUUsS0FBSSxDQUFDLEdBQUUsS0FBSyxTQUFTLEVBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsc0JBQXNCLEdBQUUsR0FBRTtBQUFBLEVBQUE7QUFBQSxFQUFFLGtCQUFrQixHQUFFLEdBQUU7QUFBQSxFQUFBO0FBQUEsRUFBRSxtQkFBbUIsR0FBRSxHQUFFO0FBQUMsU0FBSyxTQUFTLEVBQUUsYUFBWSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsZUFBZSxHQUFFLEdBQUU7QUFBQyxTQUFLLE1BQU0sRUFBRSxVQUFTLENBQUMsR0FBRSxLQUFLLE1BQU0sRUFBRSxLQUFJLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxnQkFBZ0IsR0FBRSxHQUFFO0FBQUMsU0FBSyxNQUFNLEVBQUUsVUFBUyxDQUFDLEdBQUUsS0FBSyxNQUFNLEVBQUUsS0FBSSxDQUFDLEdBQUUsS0FBSyxNQUFNLEVBQUUsT0FBTSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsa0JBQWtCLEdBQUUsR0FBRTtBQUFDLFNBQUssU0FBUyxFQUFFLGFBQVksQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLGdCQUFnQixHQUFFLEdBQUU7QUFBQyxTQUFLLFNBQVMsRUFBRSxRQUFPLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxzQkFBc0IsR0FBRSxHQUFFO0FBQUEsRUFBQTtBQUFBLEVBQUUsZUFBZSxHQUFFLEdBQUU7QUFBQyxTQUFLLE1BQU0sRUFBRSxZQUFXLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxzQkFBc0IsR0FBRSxHQUFFO0FBQUMsU0FBSyxNQUFNLEVBQUUsWUFBVyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsbUJBQW1CLEdBQUUsR0FBRTtBQUFDLFNBQUssTUFBTSxFQUFFLFlBQVcsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLGtCQUFrQixHQUFFLEdBQUU7QUFBQyxTQUFLLE1BQU0sRUFBRSxVQUFTLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxtQkFBbUIsR0FBRSxHQUFFO0FBQUMsU0FBSyxNQUFNLEVBQUUsVUFBUyxDQUFDLEdBQUUsS0FBSyxNQUFNLEVBQUUsT0FBTSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsc0JBQXNCLEdBQUUsR0FBRTtBQUFDLFNBQUssTUFBTSxFQUFFLFVBQVMsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLG1CQUFtQixHQUFFLEdBQUU7QUFBQyxTQUFLLE1BQU0sRUFBRSxVQUFTLENBQUMsR0FBRSxLQUFLLE1BQU0sRUFBRSxLQUFJLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxVQUFVLEdBQUUsR0FBRTtBQUFDLFNBQUssTUFBTSxFQUFFLFVBQVMsQ0FBQyxHQUFFLEtBQUssU0FBUyxFQUFFLE1BQUssQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLGNBQWMsR0FBRSxHQUFFO0FBQUMsU0FBSyxNQUFNLEVBQUUsVUFBUyxDQUFDLEdBQUUsS0FBSyxTQUFTLEVBQUUsTUFBSyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxhQUFRLEtBQUssRUFBRSxNQUFLLE1BQU0sR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFDO0FBQUUsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsVUFBUSxDQUFDLElBQUUsV0FBVUEsSUFBRUEsSUFBRSxlQUFhLENBQUMsSUFBRSxnQkFBZUEsSUFBRUEsSUFBRSxZQUFVLENBQUMsSUFBRSxhQUFZQSxJQUFFQSxJQUFFLFVBQVEsQ0FBQyxJQUFFO0FBQVMsR0FBRyxPQUFLLEtBQUcsR0FBRztBQUFFLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFVBQVEsQ0FBQyxJQUFFLFdBQVVBLElBQUVBLElBQUUsWUFBVSxDQUFDLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxTQUFPLENBQUMsSUFBRTtBQUFRLEdBQUcsT0FBSyxLQUFHLENBQUUsRUFBQztBQUFFLElBQUk7QUFBQSxDQUFHLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFdBQVMsQ0FBQyxJQUFFLFlBQVdBLElBQUVBLElBQUUsWUFBVSxDQUFDLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxRQUFNLENBQUMsSUFBRSxTQUFRQSxJQUFFQSxJQUFFLFFBQU0sQ0FBQyxJQUFFLFNBQVFBLElBQUVBLElBQUUsWUFBVSxDQUFDLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxTQUFPLENBQUMsSUFBRTtBQUFRLEdBQUcsTUFBSSxJQUFFLENBQUUsRUFBQztBQUFFLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFdBQVMsQ0FBQyxJQUFFLFlBQVdBLElBQUVBLElBQUUscUJBQW1CLENBQUMsSUFBRSxzQkFBcUJBLElBQUVBLElBQUUsZ0JBQWMsQ0FBQyxJQUFFO0FBQWUsR0FBRyxPQUFLLEtBQUcsQ0FBRSxFQUFDO0FBQUUsSUFBSSxLQUFHLENBQUMsS0FBSSxTQUFRLFFBQU8sVUFBUyxlQUFjLE9BQU87QUFBRSxTQUFTLEdBQUdBLEtBQUUsR0FBRTtBQUFDLE1BQUcsS0FBRyxRQUFNLEVBQUUsTUFBTSxRQUFRLENBQUMsS0FBRyxFQUFFLFVBQVEsR0FBRyxPQUFNLElBQUksTUFBTSxhQUFhQSxHQUFDLGlDQUFpQztBQUFFLE1BQUcsS0FBRyxNQUFLO0FBQUMsUUFBSSxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxDQUFDO0FBQUUsT0FBRyxRQUFRLE9BQUc7QUFBQyxVQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFNLElBQUksTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLDRDQUE0QztBQUFBLElBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQztBQUFDLElBQUksS0FBRyxNQUFNQSxJQUFDO0FBQUEsRUFBbUYsWUFBWSxHQUFFLEdBQUU7QUFBbEc7QUFBTTtBQUE2RixTQUFLLFFBQU0sR0FBRSxLQUFLLE1BQUk7QUFBQSxFQUFDO0FBQUEsRUFBaEgsT0FBTyxVQUFVLEdBQUU7QUFBQyxXQUFPLEtBQUcsR0FBRyxpQkFBZ0IsQ0FBQyxHQUFFLElBQUlBLElBQUUsRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUMsS0FBRztBQUFBLEVBQUM7QUFBMEMsR0FBRSxJQUFFLElBQUksR0FBRyxNQUFLLElBQUk7QUFBRSxJQUFJLEtBQUc7QUFBRSxJQUFJLEtBQUcsR0FBRSxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUc7QUFBRyxJQUFJLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRztBQUFHLElBQUksS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRyxJQUFHLEtBQUcsSUFBRyxLQUFHLElBQUcsS0FBRztBQUFHLElBQUksS0FBRyxLQUFJLEtBQUcsS0FBSSxLQUFHLEtBQUksS0FBRyxLQUFJLEtBQUcsS0FBSSxLQUFHLEtBQUksS0FBRztBQUFJLElBQUksS0FBRyxLQUFJLEtBQUcsS0FBSSxLQUFHLEtBQUksS0FBRyxLQUFJLEtBQUc7QUFBSSxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUdBLEtBQUU7QUFBQyxTQUFPQSxPQUFHLE1BQUlBLE9BQUcsTUFBSUEsT0FBRztBQUFFO0FBQUMsU0FBUyxFQUFFQSxLQUFFO0FBQUMsU0FBTyxNQUFJQSxPQUFHQSxPQUFHO0FBQUU7QUFBQyxTQUFTLEdBQUdBLEtBQUU7QUFBQyxTQUFPQSxPQUFHLE1BQUlBLE9BQUcsTUFBSUEsT0FBRyxNQUFJQSxPQUFHO0FBQUU7QUFBQyxTQUFTLEdBQUdBLEtBQUU7QUFBQyxTQUFPQSxRQUFJLE1BQUlBLFFBQUksTUFBSUEsUUFBSTtBQUFFO0FBQUMsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsVUFBUSxDQUFDLElBQUUsV0FBVUEsSUFBRUEsSUFBRSxRQUFNLENBQUMsSUFBRTtBQUFPLEdBQUcsT0FBSyxLQUFHLENBQUUsRUFBQztBQUFFLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFNBQU8sQ0FBQyxJQUFFLFVBQVNBLElBQUVBLElBQUUsYUFBVyxDQUFDLElBQUUsY0FBYUEsSUFBRUEsSUFBRSxPQUFLLENBQUMsSUFBRTtBQUFNLEdBQUcsT0FBSyxLQUFHLENBQUUsRUFBQztBQUFFLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFNBQU8sQ0FBQyxJQUFFLFVBQVNBLElBQUVBLElBQUUsUUFBTSxDQUFDLElBQUU7QUFBTyxHQUFHLE9BQUssS0FBRyxHQUFHO0FBQUUsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsWUFBVSxDQUFDLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxPQUFLLENBQUMsSUFBRSxRQUFPQSxJQUFFQSxJQUFFLFdBQVMsQ0FBQyxJQUFFO0FBQVUsR0FBRyxPQUFLLEtBQUcsQ0FBQSxFQUFHO0FBQTZqQixJQUFJO0FBQUEsQ0FBRyxTQUFTQSxLQUFFO0FBQUMsRUFBQUEsSUFBRUEsSUFBRSxVQUFRLENBQUMsSUFBRSxXQUFVQSxJQUFFQSxJQUFFLFlBQVUsQ0FBQyxJQUFFLGFBQVlBLElBQUVBLElBQUUsV0FBUyxDQUFDLElBQUUsWUFBV0EsSUFBRUEsSUFBRSxlQUFhLENBQUMsSUFBRSxnQkFBZUEsSUFBRUEsSUFBRSxVQUFRLENBQUMsSUFBRSxXQUFVQSxJQUFFQSxJQUFFLFdBQVMsQ0FBQyxJQUFFLFlBQVdBLElBQUVBLElBQUUsYUFBVyxDQUFDLElBQUUsY0FBYUEsSUFBRUEsSUFBRSxpQkFBZSxDQUFDLElBQUUsa0JBQWlCQSxJQUFFQSxJQUFFLFlBQVUsQ0FBQyxJQUFFLGFBQVlBLElBQUVBLElBQUUsZUFBYSxDQUFDLElBQUUsZ0JBQWVBLElBQUVBLElBQUUsa0JBQWdCLEVBQUUsSUFBRSxtQkFBa0JBLElBQUVBLElBQUUsY0FBWSxFQUFFLElBQUUsZUFBY0EsSUFBRUEsSUFBRSxpQkFBZSxFQUFFLElBQUUsa0JBQWlCQSxJQUFFQSxJQUFFLE9BQUssRUFBRSxJQUFFLFFBQU9BLElBQUVBLElBQUUsV0FBUyxFQUFFLElBQUUsWUFBV0EsSUFBRUEsSUFBRSxrQkFBZ0IsRUFBRSxJQUFFLG1CQUFrQkEsSUFBRUEsSUFBRSxVQUFRLEVBQUUsSUFBRSxXQUFVQSxJQUFFQSxJQUFFLFdBQVMsRUFBRSxJQUFFLFlBQVdBLElBQUVBLElBQUUsWUFBVSxFQUFFLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxZQUFVLEVBQUUsSUFBRSxhQUFZQSxJQUFFQSxJQUFFLFdBQVMsRUFBRSxJQUFFLFlBQVdBLElBQUVBLElBQUUsV0FBUyxFQUFFLElBQUUsWUFBV0EsSUFBRUEsSUFBRSxVQUFRLEVBQUUsSUFBRSxXQUFVQSxJQUFFQSxJQUFFLE9BQUssRUFBRSxJQUFFLFFBQU9BLElBQUVBLElBQUUsWUFBVSxFQUFFLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxxQkFBbUIsRUFBRSxJQUFFLHNCQUFxQkEsSUFBRUEsSUFBRSxRQUFNLEVBQUUsSUFBRSxTQUFRQSxJQUFFQSxJQUFFLFVBQVEsRUFBRSxJQUFFLFdBQVVBLElBQUVBLElBQUUsWUFBVSxFQUFFLElBQUUsYUFBWUEsSUFBRUEsSUFBRSxjQUFZLEVBQUUsSUFBRSxlQUFjQSxJQUFFQSxJQUFFLGVBQWEsRUFBRSxJQUFFLGdCQUFlQSxJQUFFQSxJQUFFLFlBQVUsRUFBRSxJQUFFLGFBQVlBLElBQUVBLElBQUUsZ0JBQWMsRUFBRSxJQUFFLGlCQUFnQkEsSUFBRUEsSUFBRSxhQUFXLEVBQUUsSUFBRSxjQUFhQSxJQUFFQSxJQUFFLGlCQUFlLEVBQUUsSUFBRSxrQkFBaUJBLElBQUVBLElBQUUsV0FBUyxFQUFFLElBQUUsWUFBV0EsSUFBRUEsSUFBRSxpQkFBZSxFQUFFLElBQUUsa0JBQWlCQSxJQUFFQSxJQUFFLGlCQUFlLEVBQUUsSUFBRSxrQkFBaUJBLElBQUVBLElBQUUsYUFBVyxFQUFFLElBQUUs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LEtBQUssUUFBTSxFQUFFLFdBQVMsS0FBSyxZQUFVO0FBQUEsRUFBVztBQUFBLEVBQUMsZ0JBQWU7QUFBQyxXQUFPLEtBQUssUUFBTSxFQUFFLFdBQVMsS0FBSyxZQUFVO0FBQUEsRUFBTTtBQUFBLEVBQUMsaUJBQWdCO0FBQUMsV0FBTyxLQUFLLFFBQU0sRUFBRSxXQUFTLEtBQUssWUFBVTtBQUFBLEVBQU87QUFBQSxFQUFDLGdCQUFlO0FBQUMsV0FBTyxLQUFLLFFBQU0sRUFBRSxXQUFTLEtBQUssWUFBVTtBQUFBLEVBQU07QUFBQSxFQUFDLGtCQUFpQjtBQUFDLFdBQU8sS0FBSyxTQUFPLEVBQUUsV0FBUyxLQUFLLGFBQVc7QUFBQSxFQUFRO0FBQUEsRUFBQyxVQUFTO0FBQUMsV0FBTyxLQUFLLFFBQU0sRUFBRTtBQUFBLEVBQUs7QUFBQSxFQUFDLFdBQVU7QUFBQyxXQUFPLEtBQUssUUFBTSxFQUFFLFNBQU8sS0FBSyxXQUFTO0FBQUEsRUFBRTtBQUFBLEVBQUMsV0FBVTtBQUFDLFlBQU8sS0FBSyxNQUFJO0FBQUEsTUFBRSxLQUFLLEVBQUU7QUFBQSxNQUFVLEtBQUssRUFBRTtBQUFBLE1BQVcsS0FBSyxFQUFFO0FBQUEsTUFBUSxLQUFLLEVBQUU7QUFBQSxNQUFTLEtBQUssRUFBRTtBQUFBLE1BQWtCLEtBQUssRUFBRTtBQUFBLE1BQU8sS0FBSyxFQUFFO0FBQU0sZUFBTyxLQUFLO0FBQUEsTUFBUyxLQUFLLEVBQUU7QUFBTyxlQUFPLEtBQUssU0FBUyxTQUFRO0FBQUEsTUFBRztBQUFRLGVBQU87QUFBQSxJQUFJO0FBQUEsRUFBQztBQUFDO0FBQUUsU0FBUyxHQUFHQSxLQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU8sSUFBSSxFQUFFQSxLQUFFLEdBQUUsRUFBRSxXQUFVLEdBQUUsT0FBTyxhQUFhLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHQSxLQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU8sSUFBSSxFQUFFQSxLQUFFLEdBQUUsRUFBRSxZQUFXLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHQSxLQUFFLEdBQUUsR0FBRTtBQUFDLFNBQU8sSUFBSSxFQUFFQSxLQUFFLEdBQUUsRUFBRSxtQkFBa0IsR0FBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxJQUFJLEVBQUVBLEtBQUUsR0FBRSxFQUFFLFNBQVEsR0FBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxJQUFJLEVBQUVBLEtBQUUsR0FBRSxFQUFFLFVBQVMsR0FBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxJQUFJLEVBQUVBLEtBQUUsR0FBRSxFQUFFLFFBQU8sR0FBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxJQUFJLEVBQUVBLEtBQUUsR0FBRSxFQUFFLFFBQU8sR0FBRSxFQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRSxHQUFFO0FBQUMsU0FBTyxJQUFJLEVBQUVBLEtBQUUsR0FBRSxFQUFFLE9BQU0sR0FBRSxDQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUcsSUFBSSxFQUFFLElBQUcsSUFBRyxFQUFFLFdBQVUsR0FBRSxFQUFFLEdBQUUsS0FBRyxNQUFLO0FBQUEsRUFBOEIsWUFBWSxHQUFFO0FBQTNDO0FBQU07QUFBTyxnQ0FBSztBQUFFLGlDQUFNO0FBQWtCLFNBQUssUUFBTSxHQUFFLEtBQUssU0FBTyxFQUFFLFFBQU8sS0FBSyxRQUFPO0FBQUEsRUFBRTtBQUFBLEVBQUMsVUFBUztBQUFDLFNBQUssT0FBSyxFQUFFLEtBQUssU0FBTyxLQUFLLFNBQU8sS0FBRyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUs7QUFBQSxFQUFDO0FBQUEsRUFBQyxZQUFXO0FBQUMsUUFBSSxJQUFFLEtBQUssT0FBTSxJQUFFLEtBQUssUUFBTyxJQUFFLEtBQUssTUFBSyxJQUFFLEtBQUs7QUFBTSxXQUFLLEtBQUcsS0FBSSxLQUFHLEVBQUUsS0FBRyxHQUFFO0FBQUMsVUFBRTtBQUFHO0FBQUEsSUFBSyxNQUFNLEtBQUUsRUFBRSxXQUFXLENBQUM7QUFBRSxRQUFHLEtBQUssT0FBSyxHQUFFLEtBQUssUUFBTSxHQUFFLEtBQUcsRUFBRSxRQUFPO0FBQUssUUFBRyxHQUFHLENBQUMsRUFBRSxRQUFPLEtBQUssZUFBZ0I7QUFBQyxRQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQU8sS0FBSyxXQUFXLENBQUM7QUFBRSxRQUFJLElBQUU7QUFBRSxZQUFPO01BQUcsS0FBSztBQUFHLGVBQU8sS0FBSyxRQUFTLEdBQUMsRUFBRSxLQUFLLElBQUksSUFBRSxLQUFLLFdBQVcsQ0FBQyxJQUFFLEdBQUcsR0FBRSxLQUFLLE9BQU0sRUFBRTtBQUFBLE1BQUUsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFHLGVBQU8sS0FBSyxjQUFjLEdBQUUsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFHLGVBQU8sS0FBSyxXQUFVO0FBQUEsTUFBRyxLQUFLO0FBQUcsZUFBTyxLQUFLLHNCQUF1QjtBQUFBLE1BQUMsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFBLE1BQUcsS0FBSztBQUFHLGVBQU8sS0FBSyxhQUFhLEdBQUUsT0FBTyxhQUFhLENBQUMsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFHLGVBQU8sS0FBSyxhQUFhLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBRyxlQUFPLEtBQUssb0JBQW9CLEdBQUUsT0FBTyxhQUFhLENBQUMsR0FBRSxJQUFHLEdBQUc7QUFBQSxNQUFFLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBRyxlQUFPLEtBQUssb0JBQW9CLEdB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LElBQUUsV0FBVyxDQUFDO0FBQUUsV0FBTyxHQUFHLEdBQUUsS0FBSyxPQUFNLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxhQUFZO0FBQUMsUUFBSSxJQUFFLEtBQUssT0FBTSxJQUFFLEtBQUs7QUFBSyxTQUFLO0FBQVUsUUFBSSxJQUFFLElBQUcsSUFBRSxLQUFLLE9BQU0sSUFBRSxLQUFLO0FBQU0sV0FBSyxLQUFLLFFBQU0sSUFBRyxLQUFHLEtBQUssUUFBTSxJQUFHO0FBQUMsV0FBRyxFQUFFLFVBQVUsR0FBRSxLQUFLLEtBQUs7QUFBRSxVQUFJO0FBQUUsVUFBRyxLQUFLLFFBQU8sR0FBRyxLQUFLLFFBQU0sSUFBRztBQUFDLFlBQUksSUFBRSxFQUFFLFVBQVUsS0FBSyxRQUFNLEdBQUUsS0FBSyxRQUFNLENBQUM7QUFBRSxZQUFHLGVBQWUsS0FBSyxDQUFDLEVBQUUsS0FBRSxTQUFTLEdBQUUsRUFBRTtBQUFBLFlBQU8sUUFBTyxLQUFLLE1BQU0sOEJBQThCLENBQUMsS0FBSSxDQUFDO0FBQUUsaUJBQVEsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFJLE1BQUssUUFBUztBQUFBLE1BQUEsTUFBTSxLQUFFLEdBQUcsS0FBSyxJQUFJLEdBQUUsS0FBSyxRQUFPO0FBQUcsV0FBRyxPQUFPLGFBQWEsQ0FBQyxHQUFFLElBQUUsS0FBSztBQUFBLElBQUssT0FBSztBQUFDLFVBQUcsS0FBSyxRQUFNLEdBQUcsUUFBTyxLQUFLLE1BQU0sc0JBQXFCLENBQUM7QUFBRSxXQUFLO0lBQVM7QUFBQyxRQUFJLElBQUUsRUFBRSxVQUFVLEdBQUUsS0FBSyxLQUFLO0FBQUUsV0FBTyxLQUFLLFFBQU8sR0FBRyxHQUFHLEdBQUUsS0FBSyxPQUFNLElBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLGFBQWEsR0FBRTtBQUFDLFNBQUssUUFBTztBQUFHLFFBQUksSUFBRTtBQUFJLFlBQU8sS0FBSyxTQUFPLE1BQUksS0FBSyxTQUFPLFFBQU0sS0FBRyxLQUFLLFNBQU8sS0FBRyxNQUFJLEtBQUksS0FBSyxRQUFT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QUMsR0FBRSxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFLLE1BQU07QUFBQSxFQUFDO0FBQUEsRUFBQyxhQUFhLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFLLE9BQU8sS0FBSyxJQUFJLEdBQUcsR0FBRSxHQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsaUJBQWlCLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxTQUFLLHNCQUFzQixHQUFFLEdBQUUsQ0FBQztBQUFFLFFBQUksSUFBRSxLQUFLLGVBQWUsQ0FBQyxHQUFFLElBQUUsS0FBSyxPQUFPLFNBQVMsQ0FBQztBQUFFLFdBQU8sSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFLLFFBQU8sQ0FBQyxFQUFFO0VBQVk7QUFBQSxFQUFDLHNCQUFzQixHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSyxPQUFPLFNBQVMsQ0FBQztBQUFFLFdBQU8sSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFLLFFBQU8sQ0FBQyxFQUFFLHNCQUFzQixFQUFDLFFBQU8sR0FBRSxNQUFLLElBQUksRUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLG1CQUFtQixHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUUsR0FBRTtBQUFDLFFBQUcsRUFBQyxTQUFRLEdBQUUsYUFBWSxHQUFFLFNBQVEsRUFBQyxJQUFFLEtBQUssbUJBQW1CLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsV0FBUyxFQUFFLFFBQU87QUFBSyxRQUFJLElBQUUsQ0FBQTtBQUFHLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEVBQUUsR0FBRTtBQUFDLFVBQUksSUFBRSxFQUFFLENBQUMsRUFBRSxNQUFLLElBQUUsS0FBSyxlQUFlLENBQUMsR0FBRSxJQUFFLEtBQUssT0FBTyxTQUFTLENBQUMsR0FBRSxJQUFFLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsS0FBSyxRQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBWTtBQUFDLFFBQUUsS0FBSyxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU8sS0FBSyx1QkFBdUIsRUFBRSxJQUFJLE9BQUcsRUFBRSxJQUFJLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLDZCQUE2QixHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLGVBQWUsQ0FBQyxHQUFFLElBQUUsS0FBSyxPQUFPLFNBQVMsQ0FBQyxHQUFFLElBQUUsSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFLLFFBQU8sQ0FBQyxFQUFFLFdBQVksR0FBQyxJQUFFLENBQUMsSUFBRyxFQUFFO0FBQUUsV0FBTyxLQUFLLHVCQUF1QixHQUFFLENBQUMsQ0FBQyxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsdUJBQXVCLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxJQUFJLEVBQUUsR0FBRSxFQUFFLE1BQU0sR0FBRSxJQUFFLElBQUksR0FBRyxHQUFFLEVBQUUsV0FBVyxDQUFDLEdBQUUsR0FBRSxDQUFDO0FBQUUsV0FBTyxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxLQUFLLE1BQU07QUFBQSxFQUFDO0FBQUEsRUFBQyxtQkFBbUIsR0FBRSxHQUFFLEdBQUUsSUFBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLElBQUcsSUFBRSxDQUFBLEdBQUcsSUFBRSxDQUFFLEdBQUMsSUFBRSxJQUFFLEdBQUcsQ0FBQyxJQUFFLE1BQUssSUFBRSxHQUFFLElBQUUsT0FBRyxJQUFFLE9BQUcsRUFBQyxPQUFNLEdBQUUsS0FBSSxFQUFDLElBQUU7QUFBRSxXQUFLLElBQUUsRUFBRSxTQUFRLEtBQUcsR0FBRTtBQUFDLFVBQUksSUFBRSxHQUFFLElBQUUsSUFBRSxFQUFFLFFBQU8sS0FBRyxLQUFLLDBCQUEwQixHQUFFLEdBQUUsQ0FBQztBQUFFLFVBQUcsT0FBSyxJQUFHO0FBQUMsWUFBRSxPQUFHLElBQUU7QUFBRztBQUFBLE1BQUs7QUFBQyxVQUFJLEtBQUcsS0FBRyxFQUFFLFFBQU8sSUFBRSxFQUFFLFVBQVUsR0FBRSxFQUFFO0FBQUUsUUFBRSxLQUFJLEVBQUcsV0FBUyxLQUFHLEtBQUssYUFBYSw2REFBNEQsR0FBRSxhQUFhLENBQUMsT0FBTSxDQUFDLEdBQUUsRUFBRSxLQUFLLEVBQUMsTUFBSyxHQUFFLE9BQU0sR0FBRSxLQUFJLEdBQUUsQ0FBQztBQUFFLFVBQUksT0FBSyxLQUFHLE9BQUssU0FBTyxFQUFFLElBQUksQ0FBQyxNQUFJLEtBQUcsRUFBRTtBQUFPLFFBQUUsS0FBSyxFQUFFLEdBQUUsSUFBRSxJQUFHLElBQUU7QUFBQSxJQUFFLE9BQUs7QUFBQyxVQUFJLElBQUU7QUFBRSxVQUFFLEVBQUUsUUFBUSxHQUFFLENBQUMsR0FBRSxNQUFJLE9BQUssSUFBRSxFQUFFO0FBQVEsVUFBSSxJQUFFLEVBQUUsVUFBVSxHQUFFLENBQUM7QUFBRSxRQUFFLEtBQUssRUFBQyxNQUFLLEdBQUUsT0FBTSxHQUFFLEtBQUksRUFBQyxDQUFDLEdBQUUsSUFBRTtBQUFBLElBQUU7QUFBQyxRQUFHLENBQUMsRUFBRSxLQUFHLEdBQUU7QUFBQyxVQUFJLElBQUUsRUFBRSxFQUFFLFNBQU8sQ0FBQztBQUFFLFFBQUUsUUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFFLEVBQUUsTUFBSSxFQUFFO0FBQUEsSUFBTSxNQUFNLEdBQUUsS0FBSyxFQUFDLE1BQUssRUFBRSxVQUFVLENBQUMsR0FBRSxPQUFNLEdBQUUsS0FBSSxFQUFFLE9BQU0sQ0FBQztBQUFFLFdBQU8sSUFBSSxHQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMscUJBQXFCLEdBQUUsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLElBQUksRUFBRSxHQUFFLEtBQUcsT0FBSyxJQUFFLEVBQUUsTUFBTTtBQUFFLFdBQU8sSUFBSSxFQUFFLElBQUksRUFBRSxHQUFFLEVBQUUsV0FBVyxDQUFDLEdBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxHQUFFLEtBQUssTUFBTTtBQUFBLEVBQUM7QUFBQSxFQUFDLGVBQWUsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLLGNBQWMsQ0FBQztBQUFFLFdBQU8sS0FBRyxPQUFLLEVBQUUsVUFBVSxHQUFFLENBQUMsSUFBRTtBQUFBLEVBQUM7QUFBQSxFQUFDLGNBQWMsR0FBRTtBQUFDLFFBQUksSUFBRTtBQUFLLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxTQUFPLEdBQUUsS0FBSTtBQUFDLFVBQUksSUFBRSxFQUFFLFdBQVcsQ0FBQyxHQUFFLElBQUUsRUFBRSxXQUFXLElBQUUsQ0FBQztBQUFFLFVBQUcsTUFBSSxNQUFJLEtBQUcsTUFBSSxLQUFHLEtBQUssUUFBTztBQUFFLFlBQUksSUFBRSxJQUFFLE9BQUssS0FBRyxRQUFNLEdBQUcsQ0FBQyxNQUFJLElBQUU7QUFBQSxJQUFFO0FBQUMsV0FBTztBQUFBLEVBQUk7QUFBQSxFQUFDLHNCQUFzQixHQUFFLEdBQUUsRUFBQyxPQUFNLEdBQUUsS0FBSSxFQUFDLEdBQUU7QUFBQyxRQUFJLElBQUUsSUFBRyxJQUFFO0FBQUcsYUFBUSxLQUFLLEtBQUsscUJBQXFCLEdBQUUsQ0FBQyxFQUFFLEtBQUcsTUFBSSxHQUFHLEdBQUUsV0FBVyxDQUFDLE1BQUksSUFBRTtBQUFBLGFBQVcsSUFBRSxLQUFLLDBCQUEwQixHQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRztBQUFNLFFBQUUsTUFBSSxJQUFFLE1BQUksS0FBSyxhQUFhLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxtQ0FBa0MsR0FBRSxhQUFhLENBQUMsT0FBTSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsMEJBQTBCLEdBQUUsR0FBRSxHQUFFO0FBQUMsYUFBUSxLQUFLLEtBQUsscUJBQXFCLEdBQUUsQ0FBQyxHQUFFO0FBQUMsVUFBRyxFQUFFLFdBQVcsR0FBRSxDQUFDLEVBQUUsUUFBTztBQUFFLFVBQUcsRUFBRSxXQUFXLE1BQUssQ0FBQyxFQUFFLFFBQU8sRUFBRSxRQUFRLEdBQUUsQ0FBQztBQUFBLElBQUM7QUFBQyxXQUFNO0FBQUEsRUFBRTtBQUFBLEVBQUMsQ0FBQyxxQkFBcUIsR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLE1BQUssSUFBRTtBQUFFLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUk7QUFBQyxVQUFJLElBQUUsRUFBRSxDQUFDO0FBQUUsU0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLE1BQUksTUFBSSxRQUFNLE1BQUksTUFBSSxJQUFFLE1BQUksSUFBRSxJQUFFLE1BQUksT0FBSyxJQUFFLE9BQUssTUFBSSxTQUFPLE1BQU0sSUFBRyxJQUFFLE1BQUksT0FBSyxJQUFFLElBQUU7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDLEdBQUU7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLE9BQUssQ0FBQyxJQUFFLFFBQU9BLElBQUVBLElBQUUsV0FBUyxDQUFDLElBQUU7QUFBVSxHQUFHLE9BQUssS0FBRyxDQUFFLEVBQUM7QUFBRSxJQUFJLElBQUUsTUFBSztBQUFBLEVBQXVLLFlBQVksR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFoTTtBQUFNO0FBQVM7QUFBZTtBQUFPO0FBQVc7QUFBTztBQUFPLDJDQUFnQjtBQUFFLDZDQUFrQjtBQUFFLDJDQUFnQjtBQUFFLG1DQUFRLEdBQUc7QUFBSywyQ0FBZ0Isb0JBQUk7QUFBSSxpQ0FBTTtBQUE2QixTQUFLLFFBQU0sR0FBRSxLQUFLLFdBQVMsR0FBRSxLQUFLLGlCQUFlLEdBQUUsS0FBSyxTQUFPLEdBQUUsS0FBSyxhQUFXLEdBQUUsS0FBSyxTQUFPLEdBQUUsS0FBSyxTQUFPO0FBQUEsRUFBQztBQUFBLEVBQUMsS0FBSyxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUssUUFBTTtBQUFFLFdBQU8sSUFBRSxLQUFLLE9BQU8sU0FBTyxLQUFLLE9BQU8sQ0FBQyxJQUFFO0FBQUEsRUFBRTtBQUFBLEVBQUMsSUFBSSxPQUFNO0FBQUMsV0FBTyxLQUFLLEtBQUssQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLElBQUksUUFBTztBQUFDLFdBQU8sS0FBSyxTQUFPLEtBQUssT0FBTztBQUFBLEVBQU07QUFBQSxFQUFDLElBQUksYUFBWTtBQUFDLFdBQU8sS0FBSyxRQUFNLEtBQUssa0JBQWdCLEtBQUssS0FBSyxRQUFNLEtBQUs7QUFBQSxFQUFNO0FBQUEsRUFBQyxJQUFJLGtCQUFpQjtBQUFDLFdBQU8sS0FBSyxRQUFNLElBQUUsS0FBSyxLQUFLLEVBQUUsRUFBRSxNQUFJLEtBQUssU0FBTyxLQUFLLE9BQU8sV0FBUyxJQUFFLEtBQUssTUFBTSxTQUFPLEtBQUssU0FBTyxLQUFLLEtBQUssUUFBTSxLQUFLO0FBQUEsRUFBTTtBQUFBLEVBQUMsSUFBSSx3QkFBdUI7QUFBQyxXQUFPLEtBQUssaUJBQWUsS0FBSztBQUFBLEVBQVU7QUFBQSxFQUFDLEtBQUssR0FBRSxHQUFFO0FBQUMsUUFBSSxJQUFFLEtBQUs7QUFBZ0IsUUFBRyxNQUFJLFVBQVEsSUFBRSxLQUFLLG9CQUFrQixJQUFFLElBQUcsSUFBRSxHQUFFO0FBQUMsVUFBSSxJQUFFO0FBQUUsVUFBRSxHQUFFLElBQUU7QUFBQSxJQUFDO0FBQUMsV0FBTyxJQUFJLEVBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsV0FBVyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksQ0FBQztBQUFHLFdBQU8sS0FBSyxnQkFBZ0IsSUFBSSxDQUFDLEtBQUcsS0FBSyxnQkFBZ0IsSUFBSSxHQUFFLEtBQUssS0FBSyxHQUFFLENBQUMsRUFBRSxXQUFXLEtBQUssY0FBYyxDQUFDLEdBQUUsS0FBSyxnQkFBZ0IsSUFBSSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsVUFBUztBQUFDLFNBQUs7QUFBQSxFQUFPO0FBQUEsRUFBQyxZQUFZLEdBQUUsR0FBRTtBQUFDLFNBQUssV0FBUztBQUFFLFFBQUksSUFBRSxFQUFHO0FBQUMsV0FBTyxLQUFLLFdBQVMsR0FBRTtBQUFBLEVBQUM7QUFBQSxFQUFDLHlCQUF5QixHQUFFO0FBQUMsV0FBTyxLQUFLLEtBQUssWUFBWSxDQUFDLEtBQUcsS0FBSyxRQUFPLEdBQUcsUUFBSTtBQUFBLEVBQUU7QUFBQSxFQUFDLGlCQUFnQjtBQUFDLFdBQU8sS0FBSyxLQUFLO0VBQWM7QUFBQSxFQUFDLGdCQUFlO0FBQUMsV0FBTyxLQUFLLEtBQUssWUFBYTtBQUFBLEVBQUE7QUFBQSxFQUFDLGdCQUFnQixHQUFFO0FBQUMsU0FBSyx5QkFBeUIsQ0FBQyxLQUFHLEtBQUssTUFBTSxvQkFBb0IsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFO0FBQUEsRUFBQztBQUFBLEVBQUMsd0JBQXdCLEdBQUU7QUFBQyxXQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsS0FBRyxLQUFLLFFBQVMsR0FBQyxRQUFJO0FBQUEsRUFBRTtBQUFBLEVBQUMsZUFBZSxHQUFFO0FBQUMsU0FBSyx3QkFBd0IsQ0FBQyxLQUFHLEtBQUssTUFBTSw2QkFBNkIsQ0FBQyxFQUFFO0FBQUEsRUFBQztBQUFBLEVBQUMsaUJBQWlCLEdBQUU7QUFBQyxXQUFPLE1BQUksS0FBRyxpQkFBZSxTQUFTLENBQUM7QUFBQSxFQUFFO0FBQUEsRUFBQyw0QkFBMkI7QUFBQyxRQUFJLElBQUUsS0FBSztBQUFLLFdBQU0sQ0FBQyxFQUFFLGtCQUFnQixDQUFDLEVBQUUsVUFBUyxLQUFJLEVBQUUsb0JBQW1CLElBQUcsS0FBSyxpQ0FBaUMsR0FBRSxnQ0FBZ0MsSUFBRSxLQUFLLE1BQU0sY0FBYyxLQUFLLGlCQUFpQixDQUFDLENBQUMsa0NBQWtDLEdBQUUsU0FBTyxLQUFLLFFBQVMsR0FBQyxFQUFFLFNBQVU7QUFBQSxFQUFDO0FBQUEsRUFBQyxvQ0FBbUM7QUFBQyxRQUFJLElBQUUsS0FBSztBQUFLLFdBQU0sQ0FBQyxFQUFFLGFBQWMsS0FBRSxDQUFDLEVBQUUsVUFBUyxLQUFJLENBQUMsRUFBRSxTQUFVLEtBQUUsRUFBRSxvQkFBcUIsSUFBQyxLQUFLLGlDQUFpQyxHQUFFLHdDQUF3QyxJQUFFLEtBQUssTUFBTSxjQUFjLEtBQUssaUJBQWlCLENBQUMsQ0FBQywyQ0FBMkMsR0FBRSxPQUFLLEtBQUssUUFBUyxHQUFDLEVBQUUsU0FBUTtBQUFBLEVBQUc7QUFBQSxFQUFDLGFBQVk7QUFBQyxRQUFJLElBQUUsQ0FBRSxHQUFDLElBQUUsS0FBSztBQUFXLFdBQUssS0FBSyxRQUFNLEtBQUssT0FBTyxVQUFRO0FBQUMsVUFBSSxJQUFFLEtBQUs7QUFBWSxVQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUUsS0FBSyx5QkFBeUIsRUFBRSxFQUFFLE1BQUksS0FBSyxhQUFXLEtBQUcsS0FBSyxNQUFNLHNEQUFzRCxHQUFFLEtBQUsseUJBQXlCLEVBQUUsSUFBRztBQUFBLGVBQVMsS0FBSyxRQUFNLEtBQUssT0FBTyxRQUFPO0FBQUMsWUFBSSxJQUFFLEtBQUs7QUFBTSxZQUFHLEtBQUssTUFBTSxxQkFBcUIsS0FBSyxJQUFJLEdBQUcsR0FBRSxLQUFLLFVBQVEsRUFBRTtBQUFBLE1BQUs7QUFBQSxJQUFDO0FBQUMsUUFBRyxFQUFFLFdBQVMsR0FBRTtBQUFDLFVBQUksSUFBRSxLQUFLLFFBQU8sSUFBRSxLQUFLLFNBQU8sS0FBSyxNQUFNO0FBQU8sYUFBTyxJQUFJLEVBQUUsS0FBSyxLQUFLLEdBQUUsQ0FBQyxHQUFFLEtBQUssV0FBVyxHQUFFLENBQUMsQ0FBQztBQUFBLElBQUM7QUFBQyxXQUFPLEVBQUUsVUFBUSxJQUFFLEVBQUUsQ0FBQyxJQUFFLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLFlBQVc7QUFBQyxRQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSyxnQkFBaUI7QUFBQyxRQUFHLEtBQUssd0JBQXdCLEdBQUcsR0FBRTtBQUFDLFdBQUssYUFBVyxLQUFHLEtBQUssTUFBTSw0Q0FBNEM7QUFBRSxTQUFFO0FBQUMsWUFBSSxJQUFFLEtBQUssWUFBVyxJQUFFLEtBQUssMEJBQTJCLEdBQUMsR0FBRTtBQUFFLGNBQUksT0FBSyxJQUFFLEtBQUssV0FBVyxDQUFDLEtBQUcsSUFBRSxJQUFHLElBQUUsS0FBSyxLQUFLLFVBQVEsS0FBRyxLQUFLLEtBQUssUUFBTSxLQUFLLE1BQU0sU0FBTyxLQUFLLFFBQU8sSUFBRSxJQUFJLEVBQUUsR0FBRSxDQUFDLEVBQUUsV0FBVyxLQUFLLGNBQWM7QUFBRyxZQUFJLElBQUUsQ0FBQTtBQUFHLGVBQUssS0FBSyx5QkFBeUIsRUFBRSxJQUFHLEdBQUUsS0FBSyxLQUFLLGdCQUFlLENBQUU7QUFBRSxZQUFFLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxHQUFFLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsTUFBQyxTQUFPLEtBQUssd0JBQXdCLEdBQUc7QUFBQSxJQUFFO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBQSxFQUFDLGtCQUFpQjtBQUFDLFdBQU8sS0FBSyxpQkFBa0I7QUFBQSxFQUFBO0FBQUEsRUFBQyxtQkFBa0I7QUFBQyxRQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSyxlQUFnQjtBQUFDLFFBQUcsS0FBSyx3QkFBd0IsR0FBRyxHQUFFO0FBQUMsVUFBSSxJQUFFLEtBQUssVUFBVyxHQUFDO0FBQUUsVUFBRyxLQUFLLHlCQUF5QixFQUFFLEVBQUUsS0FBRSxLQUFLLFVBQVc7QUFBQSxXQUFLO0FBQUMsWUFBSSxJQUFFLEtBQUssWUFBVyxJQUFFLEtBQUssTUFBTSxVQUFVLEdBQUUsQ0FBQztBQUFFLGFBQUssTUFBTSwwQkFBMEIsQ0FBQyw2QkFBNkIsR0FBRSxJQUFFLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLENBQUM7QUFBQSxNQUFDO0FBQUMsYUFBTyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsSUFBQyxNQUFNLFFBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyxpQkFBZ0I7QUFBQyxRQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSyxnQkFBZTtBQUFHLFdBQUssS0FBSyx3QkFBd0IsSUFBSSxLQUFHO0FBQUMsVUFBSSxJQUFFLEtBQUssZ0JBQWU7QUFBRyxVQUFFLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsTUFBSyxHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBQSxFQUFDLGtCQUFpQjtBQUFDLFFBQUksSUFBRSxLQUFLLFlBQVcsSUFBRSxLQUFLLHVCQUFzQjtBQUFHLFdBQUssS0FBSyx3QkFBd0IsSUFBSSxLQUFHO0FBQUMsVUFBSSxJQUFFLEtBQUssdUJBQXNCO0FBQUcsVUFBRSxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxHQUFFLE1BQUssR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyx5QkFBd0I7QUFBQyxRQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSztBQUFnQixXQUFLLEtBQUssd0JBQXdCLElBQUksS0FBRztBQUFDLFVBQUksSUFBRSxLQUFLLGNBQWU7QUFBQyxVQUFFLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsTUFBSyxHQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsV0FBTztBQUFBLEVBQUM7QUFBQSxFQUFDLGdCQUFlO0FBQUMsUUFBSSxJQUFFLEtBQUssWUFBVyxJQUFFLEtBQUs7QUFBa0IsV0FBSyxLQUFLLEtBQUssUUFBTSxFQUFFLFlBQVU7QUFBQyxVQUFJLElBQUUsS0FBSyxLQUFLO0FBQVMsY0FBTyxHQUFHO0FBQUEsUUFBQSxLQUFJO0FBQUEsUUFBSyxLQUFJO0FBQUEsUUFBTSxLQUFJO0FBQUEsUUFBSyxLQUFJO0FBQU0sZUFBSztBQUFVLGNBQUksSUFBRSxLQUFLLGdCQUFpQjtBQUFDLGNBQUUsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFO0FBQUEsTUFBUTtBQUFDO0FBQUEsSUFBSztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyxrQkFBaUI7QUFBQyxRQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSyxjQUFhO0FBQUcsV0FBSyxLQUFLLEtBQUssUUFBTSxFQUFFLFlBQVU7QUFBQyxVQUFJLElBQUUsS0FBSyxLQUFLO0FBQVMsY0FBTyxHQUFDO0FBQUEsUUFBRSxLQUFJO0FBQUEsUUFBSSxLQUFJO0FBQUEsUUFBSSxLQUFJO0FBQUEsUUFBSyxLQUFJO0FBQUssZUFBSyxRQUFPO0FBQUcsY0FBSSxJQUFFLEtBQUssY0FBZTtBQUFDLGNBQUUsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFO0FBQUEsTUFBUTtBQUFDO0FBQUEsSUFBSztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyxnQkFBZTtBQUFDLFFBQUksSUFBRSxLQUFLLFlBQVcsSUFBRSxLQUFLLG9CQUFxQjtBQUFDLFdBQUssS0FBSyxLQUFLLFFBQU0sRUFBRSxZQUFVO0FBQUMsVUFBSSxJQUFFLEtBQUssS0FBSztBQUFTLGNBQU8sR0FBQztBQUFBLFFBQUUsS0FBSTtBQUFBLFFBQUksS0FBSTtBQUFJLGVBQUssUUFBUztBQUFDLGNBQUksSUFBRSxLQUFLO0FBQXNCLGNBQUUsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFO0FBQUEsTUFBUTtBQUFDO0FBQUEsSUFBSztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyxzQkFBcUI7QUFBQyxRQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSyxZQUFhO0FBQUMsV0FBSyxLQUFLLEtBQUssUUFBTSxFQUFFLFlBQVU7QUFBQyxVQUFJLElBQUUsS0FBSyxLQUFLO0FBQVMsY0FBTyxHQUFHO0FBQUEsUUFBQSxLQUFJO0FBQUEsUUFBSSxLQUFJO0FBQUEsUUFBSSxLQUFJO0FBQUksZUFBSyxRQUFPO0FBQUcsY0FBSSxJQUFFLEtBQUssWUFBYTtBQUFDLGNBQUUsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFFO0FBQUEsTUFBUTtBQUFDO0FBQUEsSUFBSztBQUFDLFdBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyxjQUFhO0FBQUMsUUFBRyxLQUFLLEtBQUssUUFBTSxFQUFFLFVBQVM7QUFBQyxVQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSyxLQUFLLFVBQVM7QUFBRSxjQUFPLEdBQUc7QUFBQSxRQUFBLEtBQUk7QUFBSSxpQkFBTyxLQUFLLFFBQU8sR0FBRyxJQUFFLEtBQUssWUFBVyxHQUFHLEdBQUcsV0FBVyxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsQ0FBQztBQUFBLFFBQUUsS0FBSTtBQUFJLGlCQUFPLEtBQUssUUFBUyxHQUFDLElBQUUsS0FBSyxZQUFhLEdBQUMsR0FBRyxZQUFZLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxDQUFDO0FBQUEsUUFBRSxLQUFJO0FBQUksaUJBQU8sS0FBSyxRQUFPLEdBQUcsSUFBRSxLQUFLLFlBQVcsR0FBRyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxHQUFFLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQyxXQUFTLEtBQUssS0FBSyxnQkFBZSxHQUFHO0FBQUMsV0FBSyxRQUFTO0FBQUMsVUFBSSxJQUFFLEtBQUssWUFBVyxJQUFFLEtBQUssWUFBYTtBQUFDLGFBQU8sSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU8sS0FBSyxlQUFnQjtBQUFBLEVBQUE7QUFBQSxFQUFDLGlCQUFnQjtBQUFDLFFBQUksSUFBRSxLQUFLLFlBQVcsSUFBRSxLQUFLLGFBQWM7QUFBQyxjQUFPLEtBQUcsS0FBSyx5QkFBeUIsRUFBRSxFQUFFLEtBQUUsS0FBSyxrQkFBa0IsR0FBRSxHQUFFLEtBQUU7QUFBQSxhQUFVLEtBQUssd0JBQXdCLElBQUksRUFBRSxNQUFLLHlCQUF5QixFQUFFLElBQUUsSUFBRSxLQUFLLFVBQVUsR0FBRSxHQUFFLElBQUUsSUFBRSxJQUFFLEtBQUsseUJBQXlCLEVBQUUsSUFBRSxLQUFLLHNCQUFzQixHQUFFLEdBQUUsSUFBRSxJQUFFLEtBQUssa0JBQWtCLEdBQUUsR0FBRSxJQUFFO0FBQUEsYUFBVSxLQUFLLHlCQUF5QixFQUFFLEVBQUUsS0FBRSxLQUFLLHNCQUFzQixHQUFFLEdBQUUsS0FBRTtBQUFBLGFBQVUsS0FBSyx5QkFBeUIsRUFBRSxFQUFFLEtBQUUsS0FBSyxVQUFVLEdBQUUsR0FBRSxLQUFFO0FBQUEsYUFBVSxLQUFLLHdCQUF3QixHQUFHLEVBQUUsS0FBRSxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxHQUFFLENBQUM7QUFBQSxRQUFPLFFBQU87QUFBQSxFQUFDO0FBQUEsRUFBQyxlQUFjO0FBQUMsUUFBSSxJQUFFLEtBQUs7QUFBVyxRQUFHLEtBQUsseUJBQXlCLEVBQUUsR0FBRTtBQUFDLFdBQUs7QUFBa0IsVUFBSSxJQUFFLEtBQUs7QUFBWSxhQUFPLEtBQUssbUJBQWtCLEtBQUssZ0JBQWdCLEVBQUUsR0FBRTtBQUFBLElBQUMsT0FBSztBQUFDLFVBQUcsS0FBSyxLQUFLLGNBQWUsRUFBQyxRQUFPLEtBQUssUUFBTyxHQUFHLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsSUFBSTtBQUFFLFVBQUcsS0FBSyxLQUFLLG1CQUFrQixFQUFHLFFBQU8sS0FBSyxRQUFTLEdBQUMsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxNQUFNO0FBQUUsVUFBRyxLQUFLLEtBQUssY0FBZSxFQUFDLFFBQU8sS0FBSyxRQUFPLEdBQUcsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxJQUFFO0FBQUUsVUFBRyxLQUFLLEtBQUssZUFBZ0IsRUFBQyxRQUFPLEtBQUssUUFBTyxHQUFHLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsS0FBRTtBQUFFLFVBQUcsS0FBSyxLQUFLLGNBQWEsRUFBRyxRQUFPLEtBQUssUUFBUyxHQUFDLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLENBQUM7QUFBRSxVQUFHLEtBQUsseUJBQXlCLEVBQUUsR0FBRTtBQUFDLGFBQUs7QUFBb0IsWUFBSSxJQUFFLEtBQUssb0JBQW9CLEVBQUU7QUFBRSxlQUFPLEtBQUsscUJBQW9CLEtBQUssZ0JBQWdCLEVBQUUsR0FBRSxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxHQUFFLENBQUM7QUFBQSxNQUFDLE9BQUs7QUFBQyxZQUFHLEtBQUssS0FBSyxZQUFZLEVBQUUsRUFBRSxRQUFPLEtBQUssZ0JBQWU7QUFBRyxZQUFHLEtBQUssS0FBSyxhQUFjLEVBQUMsUUFBTyxLQUFLLGtCQUFrQixJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxDQUFDLEdBQUUsR0FBRSxLQUFFO0FBQUUsWUFBRyxLQUFLLEtBQUssWUFBVztBQUFDLGNBQUksSUFBRSxLQUFLLEtBQUssU0FBUTtBQUFHLGlCQUFPLEtBQUssUUFBUyxHQUFDLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsQ0FBQztBQUFBLFFBQUMsV0FBUyxLQUFLLEtBQUssU0FBVSxHQUFDO0FBQUMsY0FBSSxJQUFFLEtBQUssS0FBSyxTQUFRO0FBQUcsaUJBQU8sS0FBSyxRQUFTLEdBQUMsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxDQUFDO0FBQUEsUUFBQyxNQUFNLFFBQU8sS0FBSyxLQUFLLG9CQUFtQixLQUFJLEtBQUssaUNBQWlDLEtBQUssTUFBSyxJQUFJLEdBQUUsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsQ0FBQyxLQUFHLEtBQUssU0FBTyxLQUFLLE9BQU8sVUFBUSxLQUFLLE1BQU0saUNBQWlDLEtBQUssS0FBSyxFQUFFLEdBQUUsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsQ0FBQyxNQUFJLEtBQUssTUFBTSxvQkFBb0IsS0FBSyxJQUFJLEVBQUUsR0FBRSxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxDQUFDO0FBQUEsTUFBRTtBQUFBLElBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxvQkFBb0IsR0FBRTtBQUFDLFFBQUksSUFBRSxDQUFFO0FBQUM7QUFBRyxVQUFHLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxFQUFFLEdBQUUsS0FBSyxLQUFLLFVBQVcsQ0FBQTtBQUFBLFVBQU87QUFBQSxXQUFZLEtBQUsseUJBQXlCLEVBQUU7QUFBRyxXQUFPO0FBQUEsRUFBQztBQUFBLEVBQUMsa0JBQWlCO0FBQUMsUUFBSSxJQUFFLENBQUEsR0FBRyxJQUFFLENBQUEsR0FBRyxJQUFFLEtBQUs7QUFBVyxRQUFHLEtBQUssZ0JBQWdCLEVBQUUsR0FBRSxDQUFDLEtBQUsseUJBQXlCLEVBQUUsR0FBRTtBQUFDLFdBQUs7QUFBa0IsU0FBRTtBQUFDLFlBQUksSUFBRSxLQUFLLFlBQVcsSUFBRSxLQUFLLEtBQUssU0FBUSxHQUFHLElBQUUsS0FBSyxrQ0FBaUMsR0FBRyxJQUFFLEVBQUMsS0FBSSxHQUFFLFFBQU8sRUFBQztBQUFFLFlBQUcsRUFBRSxLQUFLLENBQUMsR0FBRSxFQUFFLE1BQUssZ0JBQWdCLEVBQUUsR0FBRSxFQUFFLEtBQUssS0FBSyxXQUFXO0FBQUEsaUJBQVUsS0FBSyx5QkFBeUIsRUFBRSxFQUFFLEdBQUUsS0FBSyxLQUFLLFVBQVcsQ0FBQTtBQUFBLGFBQU07QUFBQyxZQUFFLHlCQUF1QjtBQUFHLGNBQUksSUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLElBQUUsS0FBSyxXQUFXLENBQUM7QUFBRSxZQUFFLEtBQUssSUFBSSxHQUFHLEdBQUUsR0FBRSxHQUFFLElBQUksRUFBRSxHQUFFLENBQUMsR0FBRSxDQUFDLENBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQyxTQUFPLEtBQUsseUJBQXlCLEVBQUUsS0FBRyxDQUFDLEtBQUssS0FBSyxZQUFZLEVBQUU7QUFBRyxXQUFLLG1CQUFrQixLQUFLLGdCQUFnQixFQUFFO0FBQUEsSUFBQztBQUFDLFdBQU8sSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxrQkFBa0IsR0FBRSxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUsS0FBSyxZQUFXLElBQUUsS0FBSyxZQUFZLEdBQUcsVUFBUyxNQUFJO0FBQUMsVUFBSSxJQUFFLEtBQUssMEJBQXlCLEtBQUk7QUFBRyxhQUFPLEVBQUUsV0FBUyxLQUFHLEtBQUssTUFBTSwyQ0FBMEMsRUFBRSxLQUFLLEdBQUcsR0FBRTtBQUFBLElBQUMsQ0FBQyxHQUFFLElBQUUsS0FBSyxXQUFXLENBQUMsR0FBRTtBQUFFLFFBQUcsRUFBRSxNQUFLLHdCQUF3QixHQUFHLEtBQUcsS0FBSyxNQUFNLG9EQUFvRCxHQUFFLElBQUUsSUFBSSxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsQ0FBQyxLQUFHLElBQUUsSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLGFBQVUsS0FBSyx3QkFBd0IsR0FBRyxHQUFFO0FBQUMsVUFBRyxFQUFFLEtBQUssYUFBVyxHQUFHLFFBQU8sS0FBSyxNQUFNLHFDQUFxQyxHQUFFLElBQUksRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLENBQUM7QUFBRSxVQUFJLElBQUUsS0FBSyxpQkFBZ0I7QUFBRyxVQUFFLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLElBQUMsTUFBTSxLQUFFLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBRSxXQUFPO0FBQUEsRUFBQztBQUFBLEVBQUMsVUFBVSxHQUFFLEdBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxLQUFLO0FBQVcsU0FBSztBQUFrQixRQUFJLElBQUUsS0FBSyxtQkFBb0IsR0FBQyxJQUFFLEtBQUssS0FBSyxHQUFFLEtBQUssVUFBVSxFQUFFLFdBQVcsS0FBSyxjQUFjO0FBQUUsU0FBSyxnQkFBZ0IsRUFBRSxHQUFFLEtBQUs7QUFBa0IsUUFBSSxJQUFFLEtBQUssS0FBSyxDQUFDLEdBQUUsSUFBRSxLQUFLLFdBQVcsQ0FBQztBQUFFLFdBQU8sSUFBRSxJQUFJLEdBQUcsR0FBRSxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUUsSUFBSSxHQUFHLEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLHFCQUFvQjtBQUFDLFFBQUcsS0FBSyxLQUFLLFlBQVksRUFBRSxFQUFFLFFBQU0sQ0FBQTtBQUFHLFFBQUksSUFBRTtBQUFHO0FBQUcsUUFBRSxLQUFLLEtBQUssVUFBVyxDQUFBO0FBQUEsV0FBUSxLQUFLLHlCQUF5QixFQUFFO0FBQUcsV0FBTztBQUFBLEVBQUM7QUFBQSxFQUFDLDJCQUEwQjtBQUFDLFFBQUksSUFBRSxJQUFHLElBQUUsT0FBRyxJQUFFLEtBQUs7QUFBc0I7QUFBRyxXQUFHLEtBQUsscUNBQW9DLElBQUUsS0FBSyx3QkFBd0IsR0FBRyxHQUFFLE1BQUksS0FBRztBQUFBLFdBQVc7QUFBRyxXQUFNLEVBQUMsUUFBTyxHQUFFLE1BQUssSUFBSSxFQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQztBQUFBLEVBQUM7QUFBQSxFQUFDLHNCQUFzQixHQUFFO0FBQUMsUUFBSSxJQUFFLENBQUE7QUFBRyxTQUFJLEVBQUUsS0FBSyxHQUFHLEtBQUssOEJBQThCLENBQUMsQ0FBQyxHQUFFLEtBQUssUUFBTSxLQUFLLE9BQU8sVUFBUTtBQUFDLFVBQUksSUFBRSxLQUFLO0FBQWtCLFVBQUcsRUFBRSxHQUFFLEtBQUssQ0FBQztBQUFBLFdBQU07QUFBQyxZQUFJLElBQUUsS0FBSyx5QkFBd0IsR0FBRyxJQUFFLEtBQUssZUFBZSxDQUFDO0FBQUUsWUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFHLEVBQUUsU0FBTyxFQUFFLFNBQU8sRUFBRSxPQUFPLE9BQU8sQ0FBQyxFQUFFLFlBQWEsSUFBQyxFQUFFLE9BQU8sVUFBVSxDQUFDLEdBQUUsRUFBRSxLQUFLLEdBQUcsS0FBSyw4QkFBOEIsQ0FBQyxDQUFDO0FBQUEsTUFBRTtBQUFDLFdBQUssMkJBQTRCO0FBQUEsSUFBQTtBQUFDLFdBQU8sSUFBSSxHQUFHLEdBQUUsQ0FBQSxHQUFHLEtBQUssTUFBTTtBQUFBLEVBQUM7QUFBQSxFQUFDLHNCQUFzQixHQUFFLEdBQUUsR0FBRTtBQUFDLFdBQU8sS0FBSyxZQUFZLEdBQUcsVUFBUyxNQUFJO0FBQUMsV0FBSztBQUFvQixVQUFJLElBQUUsS0FBSztBQUFZLFVBQUcsYUFBYSxLQUFHLEtBQUssTUFBTSw0QkFBNEIsR0FBRSxLQUFLLHFCQUFvQixLQUFLLGdCQUFnQixFQUFFLEdBQUUsS0FBSyx3QkFBd0IsR0FBRyxFQUFFLEtBQUcsRUFBRSxNQUFLLE1BQU0sb0RBQW9EO0FBQUEsV0FBTTtBQUFDLFlBQUksSUFBRSxLQUFLLGlCQUFrQjtBQUFDLGVBQU8sSUFBSSxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUUsS0FBSyxXQUFXLENBQUMsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLE1BQUM7QUFBQSxVQUFNLFFBQU8sSUFBRSxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxHQUFFLEdBQUUsQ0FBQyxJQUFFLElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFFLEtBQUssV0FBVyxDQUFDLEdBQUUsR0FBRSxDQUFDO0FBQUUsYUFBTyxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRSxLQUFLLFdBQVcsQ0FBQyxDQUFDO0FBQUEsSUFBQyxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsOEJBQThCLEdBQUU7QUFBQyxRQUFJLElBQUUsQ0FBRTtBQUFDLFNBQUsseUJBQXlCLEVBQUU7QUFBRSxRQUFJLElBQUUsS0FBSyx3QkFBdUIsR0FBRyxJQUFFLEtBQUssdUJBQXNCLElBQUUsS0FBSyxlQUFlLENBQUM7QUFBRSxVQUFJLEtBQUssMkJBQTRCLEdBQUMsSUFBRSxLQUFLO0FBQXVCLFFBQUksSUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQU0sQ0FBQztBQUFFLFdBQU8sRUFBRSxLQUFLLElBQUksR0FBRyxHQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsS0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFFO0FBQUEsRUFBQztBQUFBLEVBQUMsMEJBQXlCO0FBQUMsUUFBRyxLQUFLLFNBQU8sTUFBSSxLQUFLLGNBQWUsS0FBRSxLQUFLLGVBQWMsRUFBRyxRQUFPO0FBQUssUUFBSSxJQUFFLEtBQUssVUFBVyxHQUFDLEVBQUMsT0FBTSxHQUFFLEtBQUksRUFBQyxJQUFFLEVBQUUsTUFBSyxJQUFFLEtBQUssTUFBTSxVQUFVLEdBQUUsQ0FBQztBQUFFLFdBQU8sSUFBSSxFQUFFLEdBQUUsR0FBRSxLQUFLLFVBQVMsS0FBSyxpQkFBZSxHQUFFLEtBQUssTUFBTTtBQUFBLEVBQUM7QUFBQSxFQUFDLGVBQWUsR0FBRTtBQUFDLFFBQUcsQ0FBQyxLQUFLLGNBQWEsRUFBRyxRQUFPO0FBQUssU0FBSyxRQUFTO0FBQUMsUUFBSSxJQUFFLEtBQUsseUJBQXdCO0FBQUcsU0FBSywyQkFBMEI7QUFBRyxRQUFJLElBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFNLEtBQUsscUJBQXFCO0FBQUUsV0FBTyxJQUFJLEdBQUcsR0FBRSxHQUFFLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxrQkFBaUI7QUFBQyxRQUFHLENBQUMsS0FBSyxlQUFjLEVBQUcsUUFBTztBQUFLLFFBQUksSUFBRSxLQUFLO0FBQXNCLFNBQUs7QUFBVSxRQUFJLElBQUUsS0FBSyx5QkFBMEIsR0FBQyxJQUFFO0FBQUssU0FBSyx3QkFBd0IsR0FBRyxNQUFJLElBQUUsS0FBSyx5QkFBMEIsSUFBRSxLQUFLLDJCQUEwQjtBQUFHLFFBQUksSUFBRSxJQUFJLEVBQUUsR0FBRSxLQUFLLHFCQUFxQjtBQUFFLFdBQU8sSUFBSSxHQUFHLEdBQUUsR0FBRSxDQUFDO0FBQUEsRUFBQztBQUFBLEVBQUMsNkJBQTRCO0FBQUMsU0FBSyx5QkFBeUIsRUFBRSxLQUFHLEtBQUsseUJBQXlCLEVBQUU7QUFBQSxFQUFDO0FBQUEsRUFBQyxNQUFNLEdBQUUsSUFBRSxNQUFLO0FBQUMsU0FBSyxPQUFPLEtBQUssSUFBSSxHQUFHLEdBQUUsS0FBSyxPQUFNLEtBQUssYUFBYSxDQUFDLEdBQUUsS0FBSyxRQUFRLENBQUMsR0FBRSxLQUFLLEtBQUk7QUFBQSxFQUFFO0FBQUEsRUFBQyxhQUFhLElBQUUsTUFBSztBQUFDLFdBQU8sS0FBRyxTQUFPLElBQUUsS0FBSyxRQUFPLElBQUUsS0FBSyxPQUFPLFNBQU8sYUFBYSxLQUFLLE9BQU8sQ0FBQyxFQUFFLFFBQU0sQ0FBQyxRQUFNO0FBQUEsRUFBOEI7QUFBQSxFQUFDLGlDQUFpQyxHQUFFLEdBQUU7QUFBQyxRQUFJLElBQUUseUVBQXlFLENBQUM7QUFBRyxVQUFJLFNBQU8sS0FBRyxLQUFLLENBQUMsS0FBSSxLQUFLLE1BQU0sQ0FBQztBQUFBLEVBQUM7QUFBQSxFQUFDLE9BQU07QUFBQyxRQUFJLElBQUUsS0FBSztBQUFLLFdBQUssS0FBSyxRQUFNLEtBQUssT0FBTyxVQUFRLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBRyxDQUFDLEVBQUUsV0FBVyxHQUFHLE1BQUksS0FBSyxtQkFBaUIsS0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQUssS0FBSyxtQkFBaUIsS0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQUssS0FBSyxxQkFBbUIsS0FBRyxDQUFDLEVBQUUsWUFBWSxFQUFFLE9BQUssRUFBRSxLQUFLLFVBQVEsR0FBRyxhQUFXLENBQUMsRUFBRSxXQUFXLEdBQUcsS0FBSSxNQUFLLEtBQUssUUFBUyxLQUFFLEtBQUssT0FBTyxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssU0FBVSxHQUFDLEtBQUssT0FBTSxLQUFLLGdCQUFlLEtBQUssUUFBUSxDQUFDLEdBQUUsS0FBSyxRQUFPLEdBQUcsSUFBRSxLQUFLO0FBQUEsRUFBSTtBQUFDLEdBQUUsS0FBRyxjQUFjLEdBQUU7QUFBQSxFQUFoQjtBQUFBO0FBQWlCLGtDQUFPOztFQUFHLFlBQVc7QUFBQyxTQUFLLE9BQU8sS0FBSyxPQUFPO0FBQUEsRUFBQztBQUFDO0FBQUUsU0FBUyxHQUFHQSxLQUFFO0FBQUMsTUFBSSxJQUFFLG9CQUFJLE9BQUksSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFO0FBQUUsU0FBSyxJQUFFQSxJQUFFLFVBQVE7QUFBQyxRQUFJLElBQUVBLElBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxTQUFPLEdBQUU7QUFBQyxVQUFHLENBQUMsR0FBRSxDQUFDLElBQUUsRUFBRTtBQUFNLFdBQUcsRUFBRSxRQUFPLEtBQUcsRUFBRTtBQUFBLElBQU0sT0FBSztBQUFDLFVBQUksSUFBRSxFQUFFLE1BQU0sT0FBTyxDQUFDLEdBQUUsTUFBSSxJQUFFLEVBQUUsUUFBTyxDQUFDO0FBQUUsV0FBRyxHQUFFLEtBQUc7QUFBQSxJQUFDO0FBQUMsTUFBRSxJQUFJLEdBQUUsQ0FBQyxHQUFFO0FBQUEsRUFBRztBQUFDLFNBQU87QUFBQztBQUFJLElBQUMsS0FBRyxJQUFJLElBQUksT0FBTyxRQUFRLEVBQUMsT0FBTSxhQUFZLEtBQUksV0FBVSxZQUFXLGNBQWEsV0FBVSxhQUFZLFVBQVMsWUFBVyxVQUFTLFdBQVUsQ0FBQyxDQUFDO0FBQUssTUFBTSxLQUFLLEVBQUUsRUFBRSxPQUFPLENBQUNBLEtBQUUsQ0FBQyxHQUFFLENBQUMsT0FBS0EsSUFBRSxJQUFJLEdBQUUsQ0FBQyxHQUFFQSxNQUFHLG9CQUFJLEtBQUc7QUFBd0IsU0FBUyxFQUFFQSxLQUFFO0FBQUMsU0FBTyxPQUFHLEVBQUUsU0FBT0E7QUFBQztBQUFDLFNBQVMsR0FBR0EsS0FBRSxHQUFFO0FBQUMsU0FBTyxPQUFHLEVBQUUsU0FBT0EsT0FBRyxNQUFJLEVBQUUsc0JBQXNCO0FBQUU7QUFBQyxTQUFTLEdBQUdBLEtBQUU7QUFBQyxVQUFPQSxJQUFFLFNBQU8sRUFBRSxZQUFVQSxJQUFFLFNBQU8sRUFBRSxtQkFBaUIsRUFBRUEsSUFBRSxzQkFBc0I7QUFBRztBQUFRLENBQUMsRUFBQyxNQUFLLEVBQUUsRUFBRSxRQUFRLEdBQUUsV0FBVSxHQUFFLEdBQUUsRUFBQyxNQUFLLEVBQUUsRUFBRSxRQUFRLEdBQUUsV0FBVSxHQUFFLEdBQUUsRUFBQyxNQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUMsR0FBRSxFQUFDLE1BQUssRUFBRSxFQUFFLFNBQVMsRUFBQyxHQUFFLEVBQUMsTUFBSyxHQUFHLEVBQUUsV0FBVSxJQUFFLEVBQUMsR0FBRSxFQUFDLE1BQUssR0FBRyxFQUFFLFVBQVMsSUFBRSxFQUFDLEdBQUUsRUFBQyxNQUFLLEdBQUUsR0FBRSxFQUFDLE1BQUssR0FBRyxFQUFFLFdBQVUsS0FBRSxFQUFDLENBQUM7QUFBSyxDQUFDLEVBQUMsTUFBSyxHQUFHLEVBQUUsY0FBYSxJQUFFLEVBQUMsR0FBRSxFQUFDLE1BQUssR0FBRyxFQUFFLGNBQWEsS0FBRSxFQUFDLEdBQUUsRUFBQyxNQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUMsR0FBRSxFQUFDLE1BQUssRUFBRSxFQUFFLFFBQVEsR0FBRSxXQUFVLEdBQUUsR0FBRSxFQUFDLE1BQUssRUFBRSxFQUFFLFFBQVEsR0FBRSxXQUFVLEdBQUUsR0FBRSxFQUFDLE1BQUssRUFBRSxFQUFFLFNBQVMsRUFBQyxHQUFFLEVBQUMsTUFBSyxFQUFFLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFBSyxvQkFBSSxJQUFJLENBQUMsRUFBRSxVQUFTLEVBQUUsZ0JBQWUsRUFBRSxVQUFTLEVBQUUsVUFBUyxFQUFFLFdBQVUsRUFBRSxXQUFVLEVBQUUsVUFBUyxFQUFFLGdCQUFlLEVBQUUsY0FBYSxFQUFFLFNBQVMsQ0FBQztBQUFFLFNBQVMsR0FBR0EsS0FBRTtBQUFDLFNBQU9BLElBQUUsTUFBTUEsSUFBRSxTQUFPLENBQUM7QUFBQztBQUEyRyxvQkFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQUssRUFBRSxZQUFZLEdBQUUsQ0FBQyxFQUFFLGNBQWEsRUFBRSxtQkFBbUIsR0FBRSxDQUFDLEVBQUUsUUFBTyxFQUFFLGNBQWMsR0FBRSxDQUFDLEVBQUUsT0FBTSxFQUFFLGFBQWEsR0FBRSxDQUFDLEVBQUUsS0FBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQUssb0JBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFLLEVBQUUsaUJBQWlCLEdBQUUsQ0FBQyxFQUFFLGNBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0FBQUUsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUVBLElBQUUsT0FBSyxDQUFDLElBQUUsUUFBT0EsSUFBRUEsSUFBRSxrQkFBZ0IsQ0FBQyxJQUFFLG1CQUFrQkEsSUFBRUEsSUFBRSxtQkFBaUIsQ0FBQyxJQUFFLG9CQUFtQkEsSUFBRUEsSUFBRSxnQkFBYyxDQUFDLElBQUU7QUFBZSxHQUFHLE9BQUssS0FBRyxDQUFFLEVBQUM7QUFBUyxvQkFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLFVBQVMsRUFBRSxRQUFRLEdBQUUsQ0FBQyxFQUFFLFFBQU8sRUFBRSxjQUFjLEdBQUUsQ0FBQyxFQUFFLFdBQVUsRUFBRSxTQUFTLEdBQUUsQ0FBQyxFQUFFLE9BQU0sRUFBRSxTQUFTLEdBQUUsQ0FBQyxFQUFFLE9BQU0sRUFBRSxhQUFhLEdBQUUsQ0FBQyxFQUFFLFdBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUEyQyxJQUFJO0FBQUEsQ0FBSSxTQUFTQSxLQUFFO0FBQUMsRUFBQUEsSUFBRUEsSUFBRSxhQUFXLENBQUMsSUFBRSxjQUFhQSxJQUFFQSxJQUFFLFFBQU0sQ0FBQyxJQUFFLFNBQVFBLElBQUVBLElBQUUsYUFBVyxDQUFDLElBQUUsY0FBYUEsSUFBRUEsSUFBRSxTQUFPLENBQUMsSUFBRSxVQUFTQSxJQUFFQSxJQUFFLFFBQU0sQ0FBQyxJQUFFO0FBQU8sR0FBRyxPQUFLLEtBQUcsQ0FBQSxFQUFHO0FBQUUsSUFBSTtBQUFBLENBQUksU0FBU0EsS0FBRTtBQUFDLEVBQUFBLElBQUUsT0FBSyxRQUFPQSxJQUFFLFFBQU0sU0FBUUEsSUFBRSxjQUFZLGVBQWNBLElBQUUsWUFBVSxhQUFZQSxJQUFFLFFBQU0sU0FBUUEsSUFBRSxXQUFTLFlBQVdBLElBQUUsUUFBTTtBQUFPLEdBQUcsT0FBSyxLQUFHLENBQUUsRUFBQztBQUFrRSxJQUFJLEdBQUcsUUFBUTtBQUFFLElBQUk7QUFBQSxDQUFJLFNBQVNBLEtBQUU7QUFBQyxFQUFBQSxJQUFFQSxJQUFFLFVBQVEsQ0FBQyxJQUFFLFdBQVVBLElBQUVBLElBQUUsUUFBTSxDQUFDLElBQUU7QUFBTyxHQUFHLE9BQUssS0FBRyxDQUFFLEVBQUM7QUFBRSxJQUFJO0FBQUEsQ0FBSSxTQUFTQSxLQUFFO0FBQUMsRUFBQUEsSUFBRUEsSUFBRSxZQUFVLENBQUMsSUFBRSxhQUFZQSxJQUFFQSxJQUFFLFlBQVUsQ0FBQyxJQUFFLGFBQVlBLElBQUVBLElBQUUsYUFBVyxDQUFDLElBQUUsY0FBYUEsSUFBRUEsSUFBRSxPQUFLLENBQUMsSUFBRSxRQUFPQSxJQUFFQSxJQUFFLFdBQVMsQ0FBQyxJQUFFO0FBQVUsR0FBRyxPQUFLLEtBQUcsQ0FBQSxFQUFHO0FBQUUsU0FBUyxHQUFHLEVBQUMsT0FBTUEsS0FBRSxLQUFJLEVBQUMsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFQSxLQUFFLElBQUU7QUFBRSxTQUFLLE1BQUksS0FBRyxLQUFLLEtBQUssRUFBRSxJQUFFLENBQUMsQ0FBQyxJQUFHO0FBQUksU0FBSyxNQUFJLEtBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUc7QUFBSSxTQUFNLEVBQUMsT0FBTSxHQUFFLEtBQUksRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEVBQUMsT0FBTUEsS0FBRSxLQUFJLEVBQUMsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFQSxLQUFFLElBQUU7QUFBRSxTQUFLLE1BQUksRUFBRSxVQUFRLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFHO0FBQUksU0FBSyxNQUFJLEtBQUcsS0FBSyxLQUFLLEVBQUUsSUFBRSxDQUFDLENBQUMsSUFBRztBQUFJLFNBQU0sRUFBQyxPQUFNLEdBQUUsS0FBSSxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRTtBQUFDLFNBQU8sRUFBRUEsSUFBRSxRQUFNLENBQUMsTUFBSSxPQUFLLEVBQUVBLElBQUUsR0FBRyxNQUFJLE1BQUksRUFBQyxPQUFNQSxJQUFFLFFBQU0sR0FBRSxLQUFJQSxJQUFFLE1BQUksRUFBQyxJQUFFQTtBQUFDO0FBQUMsU0FBUyxHQUFHQSxLQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBQyxPQUFNQSxJQUFFLE9BQU0sS0FBSUEsSUFBRSxJQUFHO0FBQUUsYUFBTztBQUFDLFFBQUksSUFBRSxHQUFHLEdBQUUsQ0FBQyxHQUFFLElBQUUsR0FBRyxHQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsVUFBUSxFQUFFLFNBQU8sRUFBRSxRQUFNLEVBQUUsSUFBSTtBQUFNLE1BQUUsUUFBTSxFQUFFLE9BQU0sRUFBRSxNQUFJLEVBQUUsS0FBSTtBQUFBLEVBQUc7QUFBQyxTQUFNLEVBQUMsWUFBVyxJQUFFLElBQUUsSUFBRSxPQUFLLEdBQUUsV0FBVSxHQUFHLElBQUUsRUFBQyxPQUFNLEVBQUUsUUFBTSxHQUFFLEtBQUksRUFBRSxNQUFJLEVBQUMsSUFBRSxHQUFFLENBQUMsR0FBRSxXQUFVLEdBQUdBLEtBQUUsQ0FBQyxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUU7QUFBQyxTQUFPLE9BQU9BLE9BQUcsV0FBUyxPQUFHLE1BQUlBLE1BQUUsT0FBR0EsSUFBRSxLQUFLLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsS0FBRSxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsR0FBRyxDQUFDO0FBQUUsV0FBUSxJQUFFLEdBQUUsS0FBRyxHQUFFLEtBQUk7QUFBQyxRQUFJLElBQUVBLElBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxDQUFDLEVBQUUsUUFBTztBQUFBLEVBQUM7QUFBQyxRQUFNLElBQUksTUFBTSwwQkFBMEIsQ0FBQyxlQUFlLENBQUMsT0FBTyxLQUFLLFVBQVVBLEdBQUMsQ0FBQyxFQUFFO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLEdBQUcsQ0FBQztBQUFFLFdBQVEsSUFBRSxHQUFFLElBQUVBLElBQUUsUUFBTyxLQUFJO0FBQUMsUUFBSSxJQUFFQSxJQUFFLENBQUM7QUFBRSxRQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQU87QUFBQSxFQUFDO0FBQUMsUUFBTSxJQUFJLE1BQU0seUJBQXlCLENBQUMsZUFBZSxDQUFDLE9BQU8sS0FBSyxVQUFVQSxHQUFDLENBQUMsRUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHQSxLQUFFO0FBQUMsU0FBT0EsSUFBRSxNQUFNLEdBQUUsQ0FBQyxFQUFFLFlBQVcsSUFBR0EsSUFBRSxNQUFNLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsS0FBRTtBQUFDLE1BQUcsRUFBQyxPQUFNLEdBQUUsS0FBSSxFQUFDLElBQUVBO0FBQUUsU0FBTSxFQUFDLE9BQU0sR0FBRSxLQUFJLEdBQUUsT0FBTSxDQUFDLEdBQUUsQ0FBQyxFQUFDO0FBQUM7QUFBQyxJQUFJLEtBQUcsQ0FBQUEsUUFBRyxHQUFHLFVBQVUsY0FBY0EsR0FBQztBQUFFLFNBQVMsR0FBR0EsS0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFLElBQUUsR0FBR0EsR0FBQyxJQUFFO0FBQUssTUFBRyxNQUFJLEtBQUssUUFBTSxFQUFDLE1BQUtBLEtBQUUsVUFBUyxDQUFFLEVBQUE7QUFBRSxNQUFJLElBQUUsRUFBQyxNQUFLLGVBQWMsT0FBTUEsSUFBRSxNQUFNLElBQUUsQ0FBQyxHQUFFLEdBQUcsR0FBRyxFQUFDLE9BQU0sR0FBRSxLQUFJQSxJQUFFLE9BQU0sQ0FBQyxFQUFDO0FBQUUsU0FBTSxFQUFDLE1BQUtBLElBQUUsTUFBTSxHQUFFLENBQUMsR0FBRSxVQUFTLENBQUMsQ0FBQyxFQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLEtBQUUsSUFBRSxNQUFHO0FBQUMsU0FBTyxPQUFHO0FBQUMsUUFBSSxJQUFFLElBQUksTUFBRyxJQUFFLElBQUksR0FBRyxDQUFDLEdBQUUsRUFBQyxNQUFLLEdBQUUsVUFBUyxFQUFDLElBQUUsR0FBRyxHQUFFLENBQUMsR0FBRSxJQUFFQSxJQUFFLEdBQUUsQ0FBQztBQUFFLFFBQUcsRUFBRSxPQUFPLFdBQVMsR0FBRTtBQUFDLFVBQUcsQ0FBQyxFQUFDLFNBQVEsRUFBQyxDQUFDLElBQUUsRUFBRTtBQUFPLFlBQU0sSUFBSSxZQUFZLEVBQUUsUUFBUSw0Q0FBMkMsRUFBRSxDQUFDO0FBQUEsSUFBQztBQUFDLFdBQU0sRUFBQyxRQUFPLEdBQUUsVUFBUyxHQUFFLE1BQUssRUFBQztBQUFBLEVBQUM7QUFBQztBQUFJLElBQUMsS0FBRyxHQUFHLENBQUNBLEtBQUUsTUFBSSxFQUFFLGFBQWFBLEtBQUUsSUFBRyxDQUFDLENBQUMsR0FBNkMsS0FBRyxHQUFHLENBQUNBLEtBQUUsTUFBSSxFQUFFLFlBQVlBLEtBQUUsSUFBRyxDQUFDLENBQUMsR0FBRSxLQUFHLEdBQUcsQ0FBQ0EsS0FBRSxNQUFJLEVBQUUsNkJBQTZCQSxLQUFFLElBQUcsQ0FBQyxDQUFDLEdBQUUsS0FBRyxHQUFHLENBQUNBLEtBQUUsTUFBSSxFQUFFLHNCQUFzQixJQUFHQSxLQUFFLElBQUcs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TUFBRyxhQUFhLElBQUc7QUFBQyxRQUFJLElBQUUsRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxFQUFFLEdBQUcsR0FBRSxJQUFFLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBRSxLQUFLLEdBQUUsSUFBRSxFQUFFLE1BQUssR0FBRSxFQUFFLEVBQUUsS0FBSyxNQUFLLEVBQUUsVUFBUyxHQUFFLEVBQUMsVUFBUyxNQUFHLFVBQVMsT0FBRyxLQUFJLEtBQUssa0JBQWtCLEtBQUksRUFBRSxDQUFDLENBQUMsSUFBRSxFQUFDLENBQUM7QUFBRSxXQUFPLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLHdCQUF1QixNQUFLLEdBQUUsVUFBUyxLQUFJLE9BQU0sR0FBRSxPQUFNLEVBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxDQUFDLEVBQUMsR0FBRSxFQUFDLGlCQUFnQixFQUFDLENBQUM7QUFBQSxFQUFDO0FBQUMsTUFBRyxhQUFhLElBQUc7QUFBQyxRQUFHLEVBQUMsVUFBUyxHQUFFLE1BQUssR0FBRSxPQUFNLEVBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxDQUFDLEdBQUUsSUFBRSxLQUFLLHNCQUFzQixNQUFLLEtBQUssc0JBQXNCLEtBQUksRUFBRSxDQUFDLElBQUUsQ0FBQyxJQUFFLENBQUMsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxFQUFDLE1BQUssY0FBYSxNQUFLLEdBQUUsT0FBTSxJQUFFLEVBQUUsUUFBTyxLQUFJLEVBQUMsQ0FBQyxHQUFFLElBQUUsRUFBRSxNQUFLLEdBQUUsRUFBRSxFQUFFLEtBQUssTUFBSyxHQUFFLEdBQUUsRUFBQyxVQUFTLE9BQUcsVUFBUyxNQUFFLENBQUM7QUFBRSxXQUFPLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLHdCQUF1QixNQUFLLEdBQUUsVUFBUyxLQUFJLE9BQU0sR0FBRSxPQUFNLEVBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxDQUFDLEVBQUMsR0FBRSxFQUFDLGlCQUFnQixFQUFDLENBQUM7QUFBQSxFQUFDO0FBQUMsUUFBTSxPQUFPLE9BQU8sSUFBSSxNQUFNLGlCQUFpQixHQUFFLEVBQUMsTUFBSyxFQUFDLENBQUM7QUFBQztBQUFFLFNBQVMsR0FBR0EsS0FBRSxHQUFFO0FBQUMsU0FBTyxJQUFJLEdBQUdBLEtBQUUsQ0FBQyxFQUFFO0FBQUk7QUFBQyxTQUFTLEdBQUdBLEtBQUU7QUFBQyxTQUFPQSxlQUFhO0FBQUU7QUFBQyxTQUFTLEdBQUdBLEtBQUU7QUFBQyxTQUFPQSxlQUFhO0FBQUU7QUFBQyxJQUFJLElBQUcsR0FBRSxHQUFFLElBQUcsR0FBRSxJQUFHLElBQUcsSUFBRyxJQUFHLElBQUcsSUFBRyxJQUFHLEtBQUcsY0FBYyxHQUFFO0FBQUEsRUFBQyxZQUFZLEdBQUUsR0FBRTtBQUFDLFVBQU0sUUFBTyxDQUFDO0FBQUUsTUFBRSxNQUFLLENBQUM7QUFBRSxNQUFFLE1BQUssRUFBRTtBQUFFLE1BQUUsTUFBSyxDQUFDO0FBQUUsTUFBRSxNQUFLLElBQUcsQ0FBQyxHQUFFLEVBQUUsTUFBSyxHQUFFLENBQUM7QUFBRSxhQUFRLEtBQUssRUFBRSxHQUFFLE1BQUssR0FBRSxFQUFFLEVBQUUsS0FBSyxNQUFLLENBQUM7QUFBQSxFQUFDO0FBQUEsRUFBQyxJQUFJLGNBQWE7QUFBQyxXQUFPLEVBQUUsTUFBSyxHQUFFLEVBQUUsRUFBRSxLQUFLLElBQUk7QUFBQSxFQUFDO0FBQUM7QUFBRSxLQUFHLG9CQUFJLFdBQVEsSUFBRSxvQkFBSSxXQUFRLElBQUUsb0JBQUksV0FBUSxLQUFHLFdBQVU7QUFBQyxTQUFPLEVBQUUsTUFBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQUcsR0FBRSxJQUFFLFNBQVMsR0FBRSxFQUFDLGFBQVksSUFBRSxLQUFFLElBQUUsQ0FBQSxHQUFHO0FBQUMsU0FBTyxLQUFLLFdBQVcsR0FBRSxFQUFDLGFBQVksRUFBQyxDQUFDO0FBQUMsR0FBRSxLQUFHLFNBQVMsR0FBRTtBQUFDLFNBQU8sS0FBSyxjQUFjLENBQUM7QUFBQyxHQUFFLEtBQUcsU0FBUyxHQUFFO0FBQUMsU0FBTyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQUssR0FBRSxFQUFFLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFBQyxHQUFFLEtBQUcsU0FBUyxHQUFFO0FBQUMsTUFBSSxJQUFFLEVBQUUsTUFBSyxDQUFDO0FBQUUsTUFBRyxFQUFFLEVBQUUsS0FBSyxNQUFJLE9BQUssRUFBRSxFQUFFLEtBQUssTUFBSSxJQUFJO0FBQU8sTUFBSSxJQUFFLEVBQUUsRUFBRSxLQUFLLEdBQUUsSUFBRTtBQUFHLFdBQVEsSUFBRSxFQUFFLFFBQU0sR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLFNBQU8sRUFBRSxDQUFDLEdBQUM7QUFBQSxJQUFFLEtBQUs7QUFBRSxVQUFHLENBQUMsR0FBRTtBQUFDLFVBQUUsTUFBSSxJQUFFO0FBQUU7QUFBQSxNQUFNO0FBQUEsSUFBQztBQUFRLFVBQUU7QUFBRztBQUFBLElBQU0sS0FBSTtBQUFLLFVBQUUsQ0FBQztBQUFFO0FBQUEsRUFBSztBQUFDLEdBQUUsS0FBRyxTQUFTLEdBQUU7QUFBQyxJQUFFLE1BQUssR0FBRSxFQUFFLEVBQUUsS0FBSyxNQUFLLEVBQUUsSUFBSSxJQUFJLEdBQUUsR0FBRyxDQUFDLEtBQUcsRUFBRSxTQUFPLEVBQUUsTUFBSyxHQUFFLEVBQUUsRUFBRSxLQUFLLE1BQUssRUFBRSxNQUFNLElBQUk7QUFBQyxHQUFFLEtBQUcsU0FBUyxHQUFFO0FBQUMsTUFBRyxDQUFDLEVBQUUsU0FBTyxFQUFFLE1BQU0sT0FBTyxRQUFPLEVBQUU7QUFBTSxNQUFJLElBQUUsS0FBSyxrQkFBa0IsTUFBSyxFQUFFLFdBQVcsS0FBSztBQUFFLFNBQU0sRUFBQyxRQUFPLGFBQVksTUFBSyxFQUFDLE9BQU0sR0FBRSxLQUFJLEVBQUMsRUFBQztBQUFDLEdBQUUsS0FBRyxXQUFVO0FBQUMsTUFBSSxJQUFFLEVBQUUsTUFBSyxFQUFFLEdBQUUsQ0FBQyxDQUFDLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsT0FBTSxFQUFFLFdBQVcsR0FBRyxFQUFFLEtBQUksRUFBRyxXQUFTLElBQUUsRUFBRSxNQUFNLENBQUMsSUFBRSxHQUFFLElBQUUsQ0FBQSxHQUFHLElBQUU7QUFBSyxXQUFPLENBQUMsR0FBRSxDQUFDLEtBQUksRUFBRSxRQUFPLEdBQUc7QUFBQyxRQUFHLEtBQUcsR0FBRyxDQUFDLEtBQUcsR0FBRyxDQUFDLEtBQUcsRUFBRSxTQUFPLEVBQUUsTUFBTSxXQUFTLEVBQUUsSUFBSSxRQUFPO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLG9CQUFtQixNQUFLLEVBQUUsSUFBSSxRQUFPLEdBQUcsRUFBRSxJQUFJLEtBQUksQ0FBQyxHQUFFLElBQUUsQ0FBQyxHQUFFLE9BQUssRUFBQyxHQUFHLEdBQUUsR0FBRyxLQUFLLGNBQWMsRUFBQyxPQUFNLEVBQUUsT0FBTSxLQUFJLEVBQUMsQ0FBQyxFQUFDLElBQUcsSUFBRSxRQUFJLEVBQUMsR0FBRyxFQUFFLEdBQUUsRUFBRSxHQUFHLEdBQUUsT0FBTSxFQUFDLElBQUcsSUFBRSxFQUFFLElBQUc7QUFBRyxVQUFHLEVBQUUsU0FBTywwQkFBMEIsR0FBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUEsZUFBVSxFQUFFLFNBQU8sZ0NBQStCO0FBQUMsWUFBSSxJQUFFLEVBQUUsRUFBRSxVQUFVO0FBQUUsVUFBRSxLQUFLLEVBQUUsRUFBQyxHQUFHLEdBQUUsWUFBVyxFQUFDLEdBQUUsRUFBRSxHQUFHLENBQUM7QUFBQSxNQUFDLE1BQU0sT0FBTSxJQUFJLE1BQU0sbUJBQW1CLEVBQUUsSUFBSSxFQUFFO0FBQUEsSUFBQyxNQUFNLEdBQUUsS0FBSyxFQUFFLE1BQUssR0FBRSxFQUFFLEVBQUUsS0FBSyxNQUFLLEdBQUUsQ0FBQyxDQUFDO0FBQUUsUUFBRTtBQUFBLEVBQUM7QUFBQyxTQUFPLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLGlCQUFnQixNQUFLLEdBQUUsR0FBRyxFQUFFLFdBQVMsSUFBRSxFQUFFLENBQUMsRUFBRSxhQUFXLEVBQUMsT0FBTSxFQUFFLENBQUMsRUFBRSxPQUFNLEtBQUksR0FBRyxPQUFHLEdBQUUsRUFBRSxFQUFFLElBQUcsRUFBQyxDQUFDO0FBQUMsR0FBRSxLQUFHLFNBQVMsR0FBRSxHQUFFO0FBQUMsTUFBRyxHQUFHLENBQUMsR0FBRTtBQUFDLFFBQUcsRUFBQyxLQUFJLEdBQUUsT0FBTSxFQUFDLElBQUU7QUFBRSxXQUFPLElBQUUsTUFBSSxJQUFFLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLDJCQUEwQixZQUFXLEVBQUUsTUFBSyxHQUFFLEVBQUUsRUFBRSxLQUFLLE1BQUssRUFBRSxHQUFHLEdBQUUsT0FBTSxNQUFLLEdBQUcsRUFBRSxXQUFVLENBQUMsSUFBRSxFQUFFLE1BQUssR0FBRSxDQUFDLEVBQUUsS0FBSyxNQUFLLEVBQUMsTUFBSyxnQ0FBK0IsS0FBSSxFQUFFLE1BQUssR0FBRSxDQUFDLEVBQUUsS0FBSyxNQUFLLEVBQUMsTUFBSyxvQkFBbUIsTUFBSyxFQUFFLE1BQUssR0FBRSxFQUFFLEVBQUUsS0FBSyxNQUFLLEVBQUUsTUFBTSxHQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRSxZQUFXLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLDJCQUEwQixZQUFXLEVBQUUsTUFBSyxHQUFFLEVBQUUsRUFBRSxLQUFLLE1BQUssRUFBRSxHQUFHLEdBQUUsT0FBTSxNQUFLLEdBQUcsRUFBRSxXQUFVLENBQUMsR0FBRSxPQUFNLEVBQUUsS0FBSyxPQUFNLEtBQUksRUFBRSxXQUFXLElBQUcsQ0FBQyxJQUFFLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLG9CQUFtQixNQUFLLEVBQUUsTUFBSyxHQUFFLEVBQUUsRUFBRSxLQUFLLE1BQUssRUFBRSxNQUFNLEdBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQztBQUFBLEVBQUMsT0FBSztBQUFDLFFBQUcsRUFBQyxLQUFJLEdBQUUsWUFBVyxFQUFDLElBQUU7QUFBRSxRQUFHLFVBQVUsS0FBSyxFQUFFLE1BQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFNLEVBQUUsUUFBTSxDQUFDLENBQUMsR0FBRTtBQUFDLFVBQUcsRUFBQyxPQUFNLEVBQUMsSUFBRTtBQUFFLGFBQU8sRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxFQUFDLE1BQUssb0JBQW1CLEtBQUksRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxFQUFDLE1BQUssb0JBQW1CLE1BQUssRUFBRSxRQUFPLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRSxPQUFNLElBQUUsRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxFQUFDLE1BQUssb0JBQW1CLE1BQUssRUFBRSxRQUFPLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBRSxNQUFLLE9BQU0sRUFBRSxPQUFNLEtBQUksSUFBRSxFQUFFLEtBQUssTUFBSSxFQUFFLEtBQUssSUFBRyxDQUFDO0FBQUEsSUFBQyxPQUFLO0FBQUMsVUFBSSxJQUFFLEVBQUUsTUFBSyxHQUFFLEVBQUUsRUFBRSxLQUFLLE1BQUssQ0FBQztBQUFFLGFBQU8sRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxFQUFDLE1BQUssbUJBQWtCLEtBQUksRUFBRSxNQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssTUFBSyxFQUFDLE1BQUssb0JBQW1CLE1BQUssRUFBRSxRQUFPLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRSxPQUFNLEVBQUUsTUFBSyxHQUFFLENBQUMsRUFBRSxLQUFLLE1BQUssRUFBQyxNQUFLLG9CQUFtQixNQUFLLEVBQUUsUUFBTyxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUUsT0FBTSxFQUFFLEtBQUssT0FBTSxLQUFJLEVBQUUsS0FBSyxJQUFHLENBQUM7QUFBQSxJQUFDO0FBQUEsRUFBQztBQUFDO0FBQUUsU0FBUyxHQUFHQSxLQUFFLEdBQUU7QUFBQyxTQUFPLElBQUksR0FBR0EsS0FBRSxDQUFDLEVBQUU7QUFBVztBQUFDLFNBQVMsR0FBRyxFQUFDLFFBQU8sRUFBQyxLQUFJQSxJQUFDLEdBQUUsTUFBSyxHQUFFLFVBQVMsRUFBQyxHQUFFO0FBQUMsU0FBTyxPQUFPLE9BQU8sR0FBR0EsS0FBRSxDQUFDLEdBQUUsRUFBQyxVQUFTLEVBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHLEVBQUMsUUFBTyxFQUFDLGtCQUFpQkEsSUFBQyxHQUFFLE1BQUssRUFBQyxHQUFFO0FBQUMsU0FBTyxHQUFHQSxLQUFFLENBQUM7QUFBQztBQUFDLElBQUksS0FBRyxDQUFBQSxRQUFHLEdBQUcsR0FBR0EsR0FBQyxDQUFDO0FBQUUsSUFBSSxLQUFHLENBQUFBLFFBQUcsR0FBRyxHQUFHQSxHQUFDLENBQUMsR0FBRSxLQUFHLENBQUFBLFFBQUcsR0FBRyxHQUFHQSxHQUFDLENBQUMsR0FBRSxLQUFHLENBQUFBLFFBQUcsR0FBRyxHQUFHQSxHQUFDLENBQUM7QUFBRSxTQUFTLEdBQUdBLEtBQUU7QUFBQyxNQUFJLEdBQUUsR0FBRTtBQUFFLE1BQUksTUFBSSxJQUFFQSxJQUFFLFVBQVEsT0FBSyxTQUFPLEVBQUUsQ0FBQyxNQUFJQSxJQUFFLE9BQU0sS0FBRyxNQUFJLElBQUVBLElBQUUsZ0JBQWMsT0FBSyxTQUFPLEVBQUUsZUFBYUEsSUFBRSxlQUFhLE9BQUssU0FBTyxFQUFFLENBQUM7QUFBRSxTQUFPLElBQUUsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFFLENBQUMsSUFBRTtBQUFDO0FBQUMsU0FBUyxHQUFHQSxLQUFFO0FBQUMsTUFBSTtBQUFFLFdBQVEsSUFBRUEsSUFBRSxVQUFRLE9BQUssU0FBTyxFQUFFLENBQUMsTUFBSUEsSUFBRTtBQUFHO0FBQUMsU0FBUyxHQUFHQSxLQUFFO0FBQUMsU0FBTSxFQUFDLFdBQVUsVUFBUyxNQUFNLEdBQUU7QUFBQyxRQUFJLElBQUVBLElBQUUsQ0FBQztBQUFFLFdBQU0sRUFBQyxNQUFLLFVBQVMsTUFBS0EsUUFBSSxNQUFJLEVBQUUsU0FBTyx3QkFBc0IsRUFBQyxHQUFHLEdBQUUsTUFBSyx1QkFBc0IsYUFBWSxDQUFDLENBQUMsRUFBQyxJQUFFLEVBQUM7QUFBQSxFQUFDLEdBQUUsVUFBUyxJQUFHLFFBQU8sR0FBRTtBQUFDO0FBQUMsSUFBSSxLQUFHLEdBQUcsRUFBRSxHQUFFLEtBQUcsR0FBRyxFQUFFLEdBQUUsS0FBRyxHQUFHLEVBQUUsR0FBRSxLQUFHLEdBQUcsRUFBRTtBQUFLLElBQUMsS0FBRzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
