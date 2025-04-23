var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var ft = Object.defineProperty;
var ye = (e2, t) => {
  for (var n in t) ft(e2, n, { get: t[n], enumerable: true });
};
var _e = {};
ye(_e, { languages: () => Je, options: () => qe, parsers: () => Ne, printers: () => an });
var ht = (e2, t, n, i) => {
  if (!(e2 && t == null)) return t.replaceAll ? t.replaceAll(n, i) : n.global ? t.replace(n, i) : t.split(n).join(i);
}, j = ht;
var G = "indent";
var $ = "group";
var F = "if-break";
var C = "line";
var J = "break-parent";
var ve = () => {
}, le = ve;
function _(e2) {
  return { type: G, contents: e2 };
}
function x(e2, t = {}) {
  return le(t.expandedStates), { type: $, id: t.id, contents: e2, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function I(e2, t = "", n = {}) {
  return { type: F, breakContents: e2, flatContents: t, groupId: n.groupId };
}
var Tt = { type: J };
var Nt = { type: C, hard: true };
var k = { type: C }, p = { type: C, soft: true }, f = [Nt, Tt];
function E(e2, t) {
  let n = [];
  for (let i = 0; i < t.length; i++) i !== 0 && n.push(e2), n.push(t[i]);
  return n;
}
function X(e2) {
  return (t, n, i) => {
    let r = !!(i != null && i.backwards);
    if (n === false) return false;
    let { length: s } = t, a = n;
    for (; a >= 0 && a < s; ) {
      let u = t.charAt(a);
      if (e2 instanceof RegExp) {
        if (!e2.test(u)) return a;
      } else if (!e2.includes(u)) return a;
      r ? a-- : a++;
    }
    return a === -1 || a === s ? a : false;
  };
}
var q = X(" 	"), be = X(",; 	"), Le = X(/[^\n\r]/u);
function _t(e2, t, n) {
  let i = !!(n != null && n.backwards);
  if (t === false) return false;
  let r = e2.charAt(t);
  if (i) {
    if (e2.charAt(t - 1) === "\r" && r === `
`) return t - 2;
    if (r === `
` || r === "\r" || r === "\u2028" || r === "\u2029") return t - 1;
  } else {
    if (r === "\r" && e2.charAt(t + 1) === `
`) return t + 2;
    if (r === `
` || r === "\r" || r === "\u2028" || r === "\u2029") return t + 1;
  }
  return t;
}
var Q = _t;
function yt(e2, t, n = {}) {
  let i = q(e2, n.backwards ? t - 1 : t, n), r = Q(e2, i, n);
  return i !== r;
}
var Re = yt;
function xt(e2, t) {
  if (t === false) return false;
  if (e2.charAt(t) === "/" && e2.charAt(t + 1) === "*") {
    for (let n = t + 2; n < e2.length; ++n) if (e2.charAt(n) === "*" && e2.charAt(n + 1) === "/") return n + 2;
  }
  return t;
}
var Pe = xt;
function Ot(e2, t) {
  return t === false ? false : e2.charAt(t) === "/" && e2.charAt(t + 1) === "/" ? Le(e2, t) : t;
}
var Fe = Ot;
function It(e2, t) {
  let n = null, i = t;
  for (; i !== n; ) n = i, i = be(e2, i), i = Pe(e2, i), i = q(e2, i);
  return i = Fe(e2, i), i = Q(e2, i), i !== false && Re(e2, i);
}
var we = It;
function Dt(e2) {
  return Array.isArray(e2) && e2.length > 0;
}
var pe = Dt;
var fe = class extends Error {
  constructor(t, n, i = "type") {
    super(`Unexpected ${n} node ${i}: ${JSON.stringify(t[i])}.`);
    __publicField(this, "name", "UnexpectedNodeError");
    this.node = t;
  }
}, Be = fe;
var w = null;
function B(e2) {
  if (w !== null && typeof w.property) {
    let t = w;
    return w = B.prototype = null, t;
  }
  return w = B.prototype = e2 ?? /* @__PURE__ */ Object.create(null), new B();
}
var gt = 10;
for (let e2 = 0; e2 <= gt; e2++) B();
function he(e2) {
  return B(e2);
}
function At(e2, t = "type") {
  he(e2);
  function n(i) {
    let r = i[t], s = e2[r];
    if (!Array.isArray(s)) throw Object.assign(new Error(`Missing visitor keys for '${r}'.`), { node: i });
    return s;
  }
  return n;
}
var Ue = At;
var H = class {
  constructor(t, n, i) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = i;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}, U = class {
  constructor(t, n, i, r, s, a) {
    this.kind = t, this.start = n, this.end = i, this.line = r, this.column = s, this.value = a, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return { kind: this.kind, value: this.value, line: this.line, column: this.column };
  }
}, W = { Name: [], Document: ["definitions"], OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"], VariableDefinition: ["variable", "type", "defaultValue", "directives"], Variable: ["name"], SelectionSet: ["selections"], Field: ["alias", "name", "arguments", "directives", "selectionSet"], Argument: ["name", "value"], FragmentSpread: ["name", "directives"], InlineFragment: ["typeCondition", "directives", "selectionSet"], FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"], IntValue: [], FloatValue: [], StringValue: [], BooleanValue: [], NullValue: [], EnumValue: [], ListValue: ["values"], ObjectValue: ["fields"], ObjectField: ["name", "value"], Directive: ["name", "arguments"], NamedType: ["name"], ListType: ["type"], NonNullType: ["type"], SchemaDefinition: ["description", "directives", "operationTypes"], OperationTypeDefinition: ["type"], ScalarTypeDefinition: ["description", "name", "directives"], ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], FieldDefinition: ["description", "name", "arguments", "type", "directives"], InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"], InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"], UnionTypeDefinition: ["description", "name", "directives", "types"], EnumTypeDefinition: ["description", "name", "directives", "values"], EnumValueDefinition: ["description", "name", "directives"], InputObjectTypeDefinition: ["description", "name", "directives", "fields"], DirectiveDefinition: ["description", "name", "arguments", "locations"], SchemaExtension: ["directives", "operationTypes"], ScalarTypeExtension: ["name", "directives"], ObjectTypeExtension: ["name", "interfaces", "directives", "fields"], InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"], UnionTypeExtension: ["name", "directives", "types"], EnumTypeExtension: ["name", "directives", "values"], InputObjectTypeExtension: ["name", "directives", "fields"] };
new Set(Object.keys(W));
var S;
(function(e2) {
  e2.QUERY = "query", e2.MUTATION = "mutation", e2.SUBSCRIPTION = "subscription";
})(S || (S = {}));
var kt = Ue(W, "kind"), Ve = kt;
function K(e2) {
  return e2.loc.start;
}
function z(e2) {
  return e2.loc.end;
}
function Ye(e2) {
  return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/u.test(e2);
}
function Me(e2) {
  return `# @format

` + e2;
}
function Ct(e2, t, n) {
  let { node: i } = e2;
  if (!i.description) return "";
  let r = [n("description")];
  return i.kind === "InputValueDefinition" && !i.description.block ? r.push(k) : r.push(f), r;
}
var g = Ct;
function St(e2, t, n) {
  let { node: i } = e2;
  switch (i.kind) {
    case "Document":
      return [...E(f, A(e2, t, n, "definitions")), f];
    case "OperationDefinition": {
      let r = t.originalText[K(i)] !== "{", s = !!i.name;
      return [r ? i.operation : "", r && s ? [" ", n("name")] : "", r && !s && pe(i.variableDefinitions) ? " " : "", je(e2, n), y(e2, n, i), !r && !s ? "" : " ", n("selectionSet")];
    }
    case "FragmentDefinition":
      return ["fragment ", n("name"), je(e2, n), " on ", n("typeCondition"), y(e2, n, i), " ", n("selectionSet")];
    case "SelectionSet":
      return ["{", _([f, E(f, A(e2, t, n, "selections"))]), f, "}"];
    case "Field":
      return x([i.alias ? [n("alias"), ": "] : "", n("name"), i.arguments.length > 0 ? x(["(", _([p, E([I("", ", "), p], A(e2, t, n, "arguments"))]), p, ")"]) : "", y(e2, n, i), i.selectionSet ? " " : "", n("selectionSet")]);
    case "Name":
      return i.value;
    case "StringValue":
      if (i.block) {
        let r = j(false, i.value, '"""', String.raw`\"""`).split(`
`);
        return r.length === 1 && (r[0] = r[0].trim()), r.every((s) => s === "") && (r.length = 0), E(f, ['"""', ...r, '"""']);
      }
      return ['"', j(false, j(false, i.value, /["\\]/gu, String.raw`\$&`), `
`, String.raw`\n`), '"'];
    case "IntValue":
    case "FloatValue":
    case "EnumValue":
      return i.value;
    case "BooleanValue":
      return i.value ? "true" : "false";
    case "NullValue":
      return "null";
    case "Variable":
      return ["$", n("name")];
    case "ListValue":
      return x(["[", _([p, E([I("", ", "), p], e2.map(n, "values"))]), p, "]"]);
    case "ObjectValue": {
      let r = t.bracketSpacing && i.fields.length > 0 ? " " : "";
      return x(["{", r, _([p, E([I("", ", "), p], e2.map(n, "fields"))]), p, I("", r), "}"]);
    }
    case "ObjectField":
    case "Argument":
      return [n("name"), ": ", n("value")];
    case "Directive":
      return ["@", n("name"), i.arguments.length > 0 ? x(["(", _([p, E([I("", ", "), p], A(e2, t, n, "arguments"))]), p, ")"]) : ""];
    case "NamedType":
      return n("name");
    case "VariableDefinition":
      return [n("variable"), ": ", n("type"), i.defaultValue ? [" = ", n("defaultValue")] : "", y(e2, n, i)];
    case "ObjectTypeExtension":
    case "ObjectTypeDefinition":
    case "InputObjectTypeExtension":
    case "InputObjectTypeDefinition":
    case "InterfaceTypeExtension":
    case "InterfaceTypeDefinition": {
      let { kind: r } = i, s = [];
      return r.endsWith("TypeDefinition") ? s.push(g(e2, t, n)) : s.push("extend "), r.startsWith("ObjectType") ? s.push("type") : r.startsWith("InputObjectType") ? s.push("input") : s.push("interface"), s.push(" ", n("name")), !r.startsWith("InputObjectType") && i.interfaces.length > 0 && s.push(" implements ", ...Lt(e2, t, n)), s.push(y(e2, n, i)), i.fields.length > 0 && s.push([" {", _([f, E(f, A(e2, t, n, "fields"))]), f, "}"]), s;
    }
    case "FieldDefinition":
      return [g(e2, t, n), n("name"), i.arguments.length > 0 ? x(["(", _([p, E([I("", ", "), p], A(e2, t, n, "arguments"))]), p, ")"]) : "", ": ", n("type"), y(e2, n, i)];
    case "DirectiveDefinition":
      return [g(e2, t, n), "directive ", "@", n("name"), i.arguments.length > 0 ? x(["(", _([p, E([I("", ", "), p], A(e2, t, n, "arguments"))]), p, ")"]) : "", i.repeatable ? " repeatable" : "", " on ", ...E(" | ", e2.map(n, "locations"))];
    case "EnumTypeExtension":
    case "EnumTypeDefinition":
      return [g(e2, t, n), i.kind === "EnumTypeExtension" ? "extend " : "", "enum ", n("name"), y(e2, n, i), i.values.length > 0 ? [" {", _([f, E(f, A(e2, t, n, "values"))]), f, "}"] : ""];
    case "EnumValueDefinition":
      return [g(e2, t, n), n("name"), y(e2, n, i)];
    case "InputValueDefinition":
      return [g(e2, t, n), n("name"), ": ", n("type"), i.defaultValue ? [" = ", n("defaultValue")] : "", y(e2, n, i)];
    case "SchemaExtension":
      return ["extend schema", y(e2, n, i), ...i.operationTypes.length > 0 ? [" {", _([f, E(f, A(e2, t, n, "operationTypes"))]), f, "}"] : []];
    case "SchemaDefinition":
      return [g(e2, t, n), "schema", y(e2, n, i), " {", i.operationTypes.length > 0 ? _([f, E(f, A(e2, t, n, "operationTypes"))]) : "", f, "}"];
    case "OperationTypeDefinition":
      return [i.operation, ": ", n("type")];
    case "FragmentSpread":
      return ["...", n("name"), y(e2, n, i)];
    case "InlineFragment":
      return ["...", i.typeCondition ? [" on ", n("typeCondition")] : "", y(e2, n, i), " ", n("selectionSet")];
    case "UnionTypeExtension":
    case "UnionTypeDefinition":
      return x([g(e2, t, n), x([i.kind === "UnionTypeExtension" ? "extend " : "", "union ", n("name"), y(e2, n, i), i.types.length > 0 ? [" =", I("", " "), _([I([k, "| "]), E([k, "| "], e2.map(n, "types"))])] : ""])]);
    case "ScalarTypeExtension":
    case "ScalarTypeDefinition":
      return [g(e2, t, n), i.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", n("name"), y(e2, n, i)];
    case "NonNullType":
      return [n("type"), "!"];
    case "ListType":
      return ["[", n("type"), "]"];
    default:
      throw new Be(i, "Graphql", "kind");
  }
}
function y(e2, t, n) {
  if (n.directives.length === 0) return "";
  let i = E(k, e2.map(t, "directives"));
  return n.kind === "FragmentDefinition" || n.kind === "OperationDefinition" ? x([k, i]) : [" ", x(_([p, i]))];
}
function A(e2, t, n, i) {
  return e2.map(({ isLast: r, node: s }) => {
    let a = n();
    return !r && we(t.originalText, z(s)) ? [a, f] : a;
  }, i);
}
function vt(e2) {
  return e2.kind !== "Comment";
}
function bt(e2) {
  let t = e2.node;
  if (t.kind === "Comment") return "#" + t.value.trimEnd();
  throw new Error("Not a comment: " + JSON.stringify(t));
}
function Lt(e2, t, n) {
  let { node: i } = e2, r = [], { interfaces: s } = i, a = e2.map(n, "interfaces");
  for (let u = 0; u < s.length; u++) {
    let l = s[u];
    r.push(a[u]);
    let T = s[u + 1];
    if (T) {
      let D = t.originalText.slice(l.loc.end, T.loc.start).includes("#");
      r.push(" &", D ? k : " ");
    }
  }
  return r;
}
function je(e2, t) {
  let { node: n } = e2;
  return pe(n.variableDefinitions) ? x(["(", _([p, E([I("", ", "), p], e2.map(t, "variableDefinitions"))]), p, ")"]) : "";
}
function Ge(e2, t) {
  e2.kind === "StringValue" && e2.block && !e2.value.includes(`
`) && (t.value = e2.value.trim());
}
Ge.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
function Rt(e2) {
  var n;
  let { node: t } = e2;
  return (n = t == null ? void 0 : t.comments) == null ? void 0 : n.some((i) => i.value.trim() === "prettier-ignore");
}
var Pt = { print: St, massageAstNode: Ge, hasPrettierIgnore: Rt, insertPragma: Me, printComment: bt, canAttachComment: vt, getVisitorKeys: Ve }, $e = Pt;
var Je = [{ linguistLanguageId: 139, name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }];
var Xe = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." } };
var Ft = { bracketSpacing: Xe.bracketSpacing }, qe = Ft;
var Ne = {};
ye(Ne, { graphql: () => on });
function Qe(e2) {
  return typeof e2 == "object" && e2 !== null;
}
function He(e2, t) {
  throw new Error("Unexpected invariant triggered.");
}
var wt = /\r\n|[\n\r]/g;
function V(e2, t) {
  let n = 0, i = 1;
  for (let r of e2.body.matchAll(wt)) {
    if (typeof r.index == "number" || He(), r.index >= t) break;
    n = r.index + r[0].length, i += 1;
  }
  return { line: i, column: t + 1 - n };
}
function Ke(e2) {
  return de(e2.source, V(e2.source, e2.start));
}
function de(e2, t) {
  let n = e2.locationOffset.column - 1, i = "".padStart(n) + e2.body, r = t.line - 1, s = e2.locationOffset.line - 1, a = t.line + s, u = t.line === 1 ? n : 0, l = t.column + u, T = `${e2.name}:${a}:${l}
`, h = i.split(/\r\n|[\n\r]/g), D = h[r];
  if (D.length > 120) {
    let O = Math.floor(l / 80), ae = l % 80, N = [];
    for (let b = 0; b < D.length; b += 80) N.push(D.slice(b, b + 80));
    return T + We([[`${a} |`, N[0]], ...N.slice(1, O + 1).map((b) => ["|", b]), ["|", "^".padStart(ae)], ["|", N[O + 1]]]);
  }
  return T + We([[`${a - 1} |`, h[r - 1]], [`${a} |`, D], ["|", "^".padStart(l)], [`${a + 1} |`, h[r + 1]]]);
}
function We(e2) {
  let t = e2.filter(([i, r]) => r !== void 0), n = Math.max(...t.map(([i]) => i.length));
  return t.map(([i, r]) => i.padStart(n) + (r ? " " + r : "")).join(`
`);
}
function Bt(e2) {
  let t = e2[0];
  return t == null || "kind" in t || "length" in t ? { nodes: t, source: e2[1], positions: e2[2], path: e2[3], originalError: e2[4], extensions: e2[5] } : t;
}
var Z = class e extends Error {
  constructor(t, ...n) {
    var i, r, s;
    let { nodes: a, source: u, positions: l, path: T, originalError: h, extensions: D } = Bt(n);
    super(t), this.name = "GraphQLError", this.path = T ?? void 0, this.originalError = h ?? void 0, this.nodes = ze(Array.isArray(a) ? a : a ? [a] : void 0);
    let O = ze((i = this.nodes) === null || i === void 0 ? void 0 : i.map((N) => N.loc).filter((N) => N != null));
    this.source = u ?? (O == null || (r = O[0]) === null || r === void 0 ? void 0 : r.source), this.positions = l ?? (O == null ? void 0 : O.map((N) => N.start)), this.locations = l && u ? l.map((N) => V(u, N)) : O == null ? void 0 : O.map((N) => V(N.source, N.start));
    let ae = Qe(h == null ? void 0 : h.extensions) ? h == null ? void 0 : h.extensions : void 0;
    this.extensions = (s = D ?? ae) !== null && s !== void 0 ? s : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, { message: { writable: true, enumerable: true }, name: { enumerable: false }, nodes: { enumerable: false }, source: { enumerable: false }, positions: { enumerable: false }, originalError: { enumerable: false } }), h != null && h.stack ? Object.defineProperty(this, "stack", { value: h.stack, writable: true, configurable: true }) : Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", { value: Error().stack, writable: true, configurable: true });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes) for (let n of this.nodes) n.loc && (t += `

` + Ke(n.loc));
    else if (this.source && this.locations) for (let n of this.locations) t += `

` + de(this.source, n);
    return t;
  }
  toJSON() {
    let t = { message: this.message };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
};
function ze(e2) {
  return e2 === void 0 || e2.length === 0 ? void 0 : e2;
}
function d(e2, t, n) {
  return new Z(`Syntax Error: ${n}`, { source: e2, positions: [t] });
}
var ee;
(function(e2) {
  e2.QUERY = "QUERY", e2.MUTATION = "MUTATION", e2.SUBSCRIPTION = "SUBSCRIPTION", e2.FIELD = "FIELD", e2.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e2.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e2.INLINE_FRAGMENT = "INLINE_FRAGMENT", e2.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e2.SCHEMA = "SCHEMA", e2.SCALAR = "SCALAR", e2.OBJECT = "OBJECT", e2.FIELD_DEFINITION = "FIELD_DEFINITION", e2.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e2.INTERFACE = "INTERFACE", e2.UNION = "UNION", e2.ENUM = "ENUM", e2.ENUM_VALUE = "ENUM_VALUE", e2.INPUT_OBJECT = "INPUT_OBJECT", e2.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(ee || (ee = {}));
var c;
(function(e2) {
  e2.NAME = "Name", e2.DOCUMENT = "Document", e2.OPERATION_DEFINITION = "OperationDefinition", e2.VARIABLE_DEFINITION = "VariableDefinition", e2.SELECTION_SET = "SelectionSet", e2.FIELD = "Field", e2.ARGUMENT = "Argument", e2.FRAGMENT_SPREAD = "FragmentSpread", e2.INLINE_FRAGMENT = "InlineFragment", e2.FRAGMENT_DEFINITION = "FragmentDefinition", e2.VARIABLE = "Variable", e2.INT = "IntValue", e2.FLOAT = "FloatValue", e2.STRING = "StringValue", e2.BOOLEAN = "BooleanValue", e2.NULL = "NullValue", e2.ENUM = "EnumValue", e2.LIST = "ListValue", e2.OBJECT = "ObjectValue", e2.OBJECT_FIELD = "ObjectField", e2.DIRECTIVE = "Directive", e2.NAMED_TYPE = "NamedType", e2.LIST_TYPE = "ListType", e2.NON_NULL_TYPE = "NonNullType", e2.SCHEMA_DEFINITION = "SchemaDefinition", e2.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e2.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e2.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e2.FIELD_DEFINITION = "FieldDefinition", e2.INPUT_VALUE_DEFINITION = "InputValueDefinition", e2.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e2.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e2.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e2.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e2.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e2.DIRECTIVE_DEFINITION = "DirectiveDefinition", e2.SCHEMA_EXTENSION = "SchemaExtension", e2.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e2.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e2.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e2.UNION_TYPE_EXTENSION = "UnionTypeExtension", e2.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e2.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(c || (c = {}));
function Ze(e2) {
  return e2 === 9 || e2 === 32;
}
function R(e2) {
  return e2 >= 48 && e2 <= 57;
}
function et(e2) {
  return e2 >= 97 && e2 <= 122 || e2 >= 65 && e2 <= 90;
}
function me(e2) {
  return et(e2) || e2 === 95;
}
function tt(e2) {
  return et(e2) || R(e2) || e2 === 95;
}
function nt(e2) {
  var t;
  let n = Number.MAX_SAFE_INTEGER, i = null, r = -1;
  for (let a = 0; a < e2.length; ++a) {
    var s;
    let u = e2[a], l = Ut(u);
    l !== u.length && (i = (s = i) !== null && s !== void 0 ? s : a, r = a, a !== 0 && l < n && (n = l));
  }
  return e2.map((a, u) => u === 0 ? a : a.slice(n)).slice((t = i) !== null && t !== void 0 ? t : 0, r + 1);
}
function Ut(e2) {
  let t = 0;
  for (; t < e2.length && Ze(e2.charCodeAt(t)); ) ++t;
  return t;
}
var o;
(function(e2) {
  e2.SOF = "<SOF>", e2.EOF = "<EOF>", e2.BANG = "!", e2.DOLLAR = "$", e2.AMP = "&", e2.PAREN_L = "(", e2.PAREN_R = ")", e2.SPREAD = "...", e2.COLON = ":", e2.EQUALS = "=", e2.AT = "@", e2.BRACKET_L = "[", e2.BRACKET_R = "]", e2.BRACE_L = "{", e2.PIPE = "|", e2.BRACE_R = "}", e2.NAME = "Name", e2.INT = "Int", e2.FLOAT = "Float", e2.STRING = "String", e2.BLOCK_STRING = "BlockString", e2.COMMENT = "Comment";
})(o || (o = {}));
var te = class {
  constructor(t) {
    let n = new U(o.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== o.EOF) do
      if (t.next) t = t.next;
      else {
        let n = Vt(this, t.end);
        t.next = n, n.prev = t, t = n;
      }
    while (t.kind === o.COMMENT);
    return t;
  }
};
function it(e2) {
  return e2 === o.BANG || e2 === o.DOLLAR || e2 === o.AMP || e2 === o.PAREN_L || e2 === o.PAREN_R || e2 === o.SPREAD || e2 === o.COLON || e2 === o.EQUALS || e2 === o.AT || e2 === o.BRACKET_L || e2 === o.BRACKET_R || e2 === o.BRACE_L || e2 === o.PIPE || e2 === o.BRACE_R;
}
function P(e2) {
  return e2 >= 0 && e2 <= 55295 || e2 >= 57344 && e2 <= 1114111;
}
function ne(e2, t) {
  return st(e2.charCodeAt(t)) && ot(e2.charCodeAt(t + 1));
}
function st(e2) {
  return e2 >= 55296 && e2 <= 56319;
}
function ot(e2) {
  return e2 >= 56320 && e2 <= 57343;
}
function v(e2, t) {
  let n = e2.source.body.codePointAt(t);
  if (n === void 0) return o.EOF;
  if (n >= 32 && n <= 126) {
    let i = String.fromCodePoint(n);
    return i === '"' ? `'"'` : `"${i}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function m(e2, t, n, i, r) {
  let s = e2.line, a = 1 + n - e2.lineStart;
  return new U(t, n, i, s, a, r);
}
function Vt(e2, t) {
  let n = e2.source.body, i = n.length, r = t;
  for (; r < i; ) {
    let s = n.charCodeAt(r);
    switch (s) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++r;
        continue;
      case 10:
        ++r, ++e2.line, e2.lineStart = r;
        continue;
      case 13:
        n.charCodeAt(r + 1) === 10 ? r += 2 : ++r, ++e2.line, e2.lineStart = r;
        continue;
      case 35:
        return Yt(e2, r);
      case 33:
        return m(e2, o.BANG, r, r + 1);
      case 36:
        return m(e2, o.DOLLAR, r, r + 1);
      case 38:
        return m(e2, o.AMP, r, r + 1);
      case 40:
        return m(e2, o.PAREN_L, r, r + 1);
      case 41:
        return m(e2, o.PAREN_R, r, r + 1);
      case 46:
        if (n.charCodeAt(r + 1) === 46 && n.charCodeAt(r + 2) === 46) return m(e2, o.SPREAD, r, r + 3);
        break;
      case 58:
        return m(e2, o.COLON, r, r + 1);
      case 61:
        return m(e2, o.EQUALS, r, r + 1);
      case 64:
        return m(e2, o.AT, r, r + 1);
      case 91:
        return m(e2, o.BRACKET_L, r, r + 1);
      case 93:
        return m(e2, o.BRACKET_R, r, r + 1);
      case 123:
        return m(e2, o.BRACE_L, r, r + 1);
      case 124:
        return m(e2, o.PIPE, r, r + 1);
      case 125:
        return m(e2, o.BRACE_R, r, r + 1);
      case 34:
        return n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34 ? Xt(e2, r) : jt(e2, r);
    }
    if (R(s) || s === 45) return Mt(e2, r, s);
    if (me(s)) return qt(e2, r);
    throw d(e2.source, r, s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : P(s) || ne(n, r) ? `Unexpected character: ${v(e2, r)}.` : `Invalid character: ${v(e2, r)}.`);
  }
  return m(e2, o.EOF, i, i);
}
function Yt(e2, t) {
  let n = e2.source.body, i = n.length, r = t + 1;
  for (; r < i; ) {
    let s = n.charCodeAt(r);
    if (s === 10 || s === 13) break;
    if (P(s)) ++r;
    else if (ne(n, r)) r += 2;
    else break;
  }
  return m(e2, o.COMMENT, t, r, n.slice(t + 1, r));
}
function Mt(e2, t, n) {
  let i = e2.source.body, r = t, s = n, a = false;
  if (s === 45 && (s = i.charCodeAt(++r)), s === 48) {
    if (s = i.charCodeAt(++r), R(s)) throw d(e2.source, r, `Invalid number, unexpected digit after 0: ${v(e2, r)}.`);
  } else r = Ee(e2, r, s), s = i.charCodeAt(r);
  if (s === 46 && (a = true, s = i.charCodeAt(++r), r = Ee(e2, r, s), s = i.charCodeAt(r)), (s === 69 || s === 101) && (a = true, s = i.charCodeAt(++r), (s === 43 || s === 45) && (s = i.charCodeAt(++r)), r = Ee(e2, r, s), s = i.charCodeAt(r)), s === 46 || me(s)) throw d(e2.source, r, `Invalid number, expected digit but got: ${v(e2, r)}.`);
  return m(e2, a ? o.FLOAT : o.INT, t, r, i.slice(t, r));
}
function Ee(e2, t, n) {
  if (!R(n)) throw d(e2.source, t, `Invalid number, expected digit but got: ${v(e2, t)}.`);
  let i = e2.source.body, r = t + 1;
  for (; R(i.charCodeAt(r)); ) ++r;
  return r;
}
function jt(e2, t) {
  let n = e2.source.body, i = n.length, r = t + 1, s = r, a = "";
  for (; r < i; ) {
    let u = n.charCodeAt(r);
    if (u === 34) return a += n.slice(s, r), m(e2, o.STRING, t, r + 1, a);
    if (u === 92) {
      a += n.slice(s, r);
      let l = n.charCodeAt(r + 1) === 117 ? n.charCodeAt(r + 2) === 123 ? Gt(e2, r) : $t(e2, r) : Jt(e2, r);
      a += l.value, r += l.size, s = r;
      continue;
    }
    if (u === 10 || u === 13) break;
    if (P(u)) ++r;
    else if (ne(n, r)) r += 2;
    else throw d(e2.source, r, `Invalid character within String: ${v(e2, r)}.`);
  }
  throw d(e2.source, r, "Unterminated string.");
}
function Gt(e2, t) {
  let n = e2.source.body, i = 0, r = 3;
  for (; r < 12; ) {
    let s = n.charCodeAt(t + r++);
    if (s === 125) {
      if (r < 5 || !P(i)) break;
      return { value: String.fromCodePoint(i), size: r };
    }
    if (i = i << 4 | Y(s), i < 0) break;
  }
  throw d(e2.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + r)}".`);
}
function $t(e2, t) {
  let n = e2.source.body, i = rt(n, t + 2);
  if (P(i)) return { value: String.fromCodePoint(i), size: 6 };
  if (st(i) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    let r = rt(n, t + 8);
    if (ot(r)) return { value: String.fromCodePoint(i, r), size: 12 };
  }
  throw d(e2.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function rt(e2, t) {
  return Y(e2.charCodeAt(t)) << 12 | Y(e2.charCodeAt(t + 1)) << 8 | Y(e2.charCodeAt(t + 2)) << 4 | Y(e2.charCodeAt(t + 3));
}
function Y(e2) {
  return e2 >= 48 && e2 <= 57 ? e2 - 48 : e2 >= 65 && e2 <= 70 ? e2 - 55 : e2 >= 97 && e2 <= 102 ? e2 - 87 : -1;
}
function Jt(e2, t) {
  let n = e2.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 };
    case 92:
      return { value: "\\", size: 2 };
    case 47:
      return { value: "/", size: 2 };
    case 98:
      return { value: "\b", size: 2 };
    case 102:
      return { value: "\f", size: 2 };
    case 110:
      return { value: `
`, size: 2 };
    case 114:
      return { value: "\r", size: 2 };
    case 116:
      return { value: "	", size: 2 };
  }
  throw d(e2.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function Xt(e2, t) {
  let n = e2.source.body, i = n.length, r = e2.lineStart, s = t + 3, a = s, u = "", l = [];
  for (; s < i; ) {
    let T = n.charCodeAt(s);
    if (T === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
      u += n.slice(a, s), l.push(u);
      let h = m(e2, o.BLOCK_STRING, t, s + 3, nt(l).join(`
`));
      return e2.line += l.length - 1, e2.lineStart = r, h;
    }
    if (T === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
      u += n.slice(a, s), a = s + 1, s += 4;
      continue;
    }
    if (T === 10 || T === 13) {
      u += n.slice(a, s), l.push(u), T === 13 && n.charCodeAt(s + 1) === 10 ? s += 2 : ++s, u = "", a = s, r = s;
      continue;
    }
    if (P(T)) ++s;
    else if (ne(n, s)) s += 2;
    else throw d(e2.source, s, `Invalid character within String: ${v(e2, s)}.`);
  }
  throw d(e2.source, s, "Unterminated string.");
}
function qt(e2, t) {
  let n = e2.source.body, i = n.length, r = t + 1;
  for (; r < i; ) {
    let s = n.charCodeAt(r);
    if (tt(s)) ++r;
    else break;
  }
  return m(e2, o.NAME, t, r, n.slice(t, r));
}
function re(e2, t) {
  throw new Error(t);
}
function ie(e2) {
  return se(e2, []);
}
function se(e2, t) {
  switch (typeof e2) {
    case "string":
      return JSON.stringify(e2);
    case "function":
      return e2.name ? `[function ${e2.name}]` : "[function]";
    case "object":
      return Qt(e2, t);
    default:
      return String(e2);
  }
}
function Qt(e2, t) {
  if (e2 === null) return "null";
  if (t.includes(e2)) return "[Circular]";
  let n = [...t, e2];
  if (Ht(e2)) {
    let i = e2.toJSON();
    if (i !== e2) return typeof i == "string" ? i : se(i, n);
  } else if (Array.isArray(e2)) return Kt(e2, n);
  return Wt(e2, n);
}
function Ht(e2) {
  return typeof e2.toJSON == "function";
}
function Wt(e2, t) {
  let n = Object.entries(e2);
  return n.length === 0 ? "{}" : t.length > 2 ? "[" + zt(e2) + "]" : "{ " + n.map(([r, s]) => r + ": " + se(s, t)).join(", ") + " }";
}
function Kt(e2, t) {
  if (e2.length === 0) return "[]";
  if (t.length > 2) return "[Array]";
  let n = Math.min(10, e2.length), i = e2.length - n, r = [];
  for (let s = 0; s < n; ++s) r.push(se(e2[s], t));
  return i === 1 ? r.push("... 1 more item") : i > 1 && r.push(`... ${i} more items`), "[" + r.join(", ") + "]";
}
function zt(e2) {
  let t = Object.prototype.toString.call(e2).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e2.constructor == "function") {
    let n = e2.constructor.name;
    if (typeof n == "string" && n !== "") return n;
  }
  return t;
}
var Zt = globalThis.process && true, at = Zt ? function(t, n) {
  return t instanceof n;
} : function(t, n) {
  if (t instanceof n) return true;
  if (typeof t == "object" && t !== null) {
    var i;
    let r = n.prototype[Symbol.toStringTag], s = Symbol.toStringTag in t ? t[Symbol.toStringTag] : (i = t.constructor) === null || i === void 0 ? void 0 : i.name;
    if (r === s) {
      let a = ie(t);
      throw new Error(`Cannot use ${r} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
    }
  }
  return false;
};
var M = class {
  constructor(t, n = "GraphQL request", i = { line: 1, column: 1 }) {
    typeof t == "string" || re(false, `Body must be a string. Received: ${ie(t)}.`), this.body = t, this.name = n, this.locationOffset = i, this.locationOffset.line > 0 || re(false, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || re(false, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
};
function ct(e2) {
  return at(e2, M);
}
function ut(e2, t) {
  let n = new Te(e2, t), i = n.parseDocument();
  return Object.defineProperty(i, "tokenCount", { enumerable: false, value: n.tokenCount }), i;
}
var Te = class {
  constructor(t, n = {}) {
    let i = ct(t) ? t : new M(t);
    this._lexer = new te(i), this._options = n, this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  parseName() {
    let t = this.expectToken(o.NAME);
    return this.node(t, { kind: c.NAME, value: t.value });
  }
  parseDocument() {
    return this.node(this._lexer.token, { kind: c.DOCUMENT, definitions: this.many(o.SOF, this.parseDefinition, o.EOF) });
  }
  parseDefinition() {
    if (this.peek(o.BRACE_L)) return this.parseOperationDefinition();
    let t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === o.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t) throw d(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    let t = this._lexer.token;
    if (this.peek(o.BRACE_L)) return this.node(t, { kind: c.OPERATION_DEFINITION, operation: S.QUERY, name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet() });
    let n = this.parseOperationType(), i;
    return this.peek(o.NAME) && (i = this.parseName()), this.node(t, { kind: c.OPERATION_DEFINITION, operation: n, name: i, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() });
  }
  parseOperationType() {
    let t = this.expectToken(o.NAME);
    switch (t.value) {
      case "query":
        return S.QUERY;
      case "mutation":
        return S.MUTATION;
      case "subscription":
        return S.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(o.PAREN_L, this.parseVariableDefinition, o.PAREN_R);
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, { kind: c.VARIABLE_DEFINITION, variable: this.parseVariable(), type: (this.expectToken(o.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(o.EQUALS) ? this.parseConstValueLiteral() : void 0, directives: this.parseConstDirectives() });
  }
  parseVariable() {
    let t = this._lexer.token;
    return this.expectToken(o.DOLLAR), this.node(t, { kind: c.VARIABLE, name: this.parseName() });
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, { kind: c.SELECTION_SET, selections: this.many(o.BRACE_L, this.parseSelection, o.BRACE_R) });
  }
  parseSelection() {
    return this.peek(o.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    let t = this._lexer.token, n = this.parseName(), i, r;
    return this.expectOptionalToken(o.COLON) ? (i = n, r = this.parseName()) : r = n, this.node(t, { kind: c.FIELD, alias: i, name: r, arguments: this.parseArguments(false), directives: this.parseDirectives(false), selectionSet: this.peek(o.BRACE_L) ? this.parseSelectionSet() : void 0 });
  }
  parseArguments(t) {
    let n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(o.PAREN_L, n, o.PAREN_R);
  }
  parseArgument(t = false) {
    let n = this._lexer.token, i = this.parseName();
    return this.expectToken(o.COLON), this.node(n, { kind: c.ARGUMENT, name: i, value: this.parseValueLiteral(t) });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  parseFragment() {
    let t = this._lexer.token;
    this.expectToken(o.SPREAD);
    let n = this.expectOptionalKeyword("on");
    return !n && this.peek(o.NAME) ? this.node(t, { kind: c.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(false) }) : this.node(t, { kind: c.INLINE_FRAGMENT, typeCondition: n ? this.parseNamedType() : void 0, directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() });
  }
  parseFragmentDefinition() {
    let t = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === true ? this.node(t, { kind: c.FRAGMENT_DEFINITION, name: this.parseFragmentName(), variableDefinitions: this.parseVariableDefinitions(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() }) : this.node(t, { kind: c.FRAGMENT_DEFINITION, name: this.parseFragmentName(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(false), selectionSet: this.parseSelectionSet() });
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on") throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    let n = this._lexer.token;
    switch (n.kind) {
      case o.BRACKET_L:
        return this.parseList(t);
      case o.BRACE_L:
        return this.parseObject(t);
      case o.INT:
        return this.advanceLexer(), this.node(n, { kind: c.INT, value: n.value });
      case o.FLOAT:
        return this.advanceLexer(), this.node(n, { kind: c.FLOAT, value: n.value });
      case o.STRING:
      case o.BLOCK_STRING:
        return this.parseStringLiteral();
      case o.NAME:
        switch (this.advanceLexer(), n.value) {
          case "true":
            return this.node(n, { kind: c.BOOLEAN, value: true });
          case "false":
            return this.node(n, { kind: c.BOOLEAN, value: false });
          case "null":
            return this.node(n, { kind: c.NULL });
          default:
            return this.node(n, { kind: c.ENUM, value: n.value });
        }
      case o.DOLLAR:
        if (t) if (this.expectToken(o.DOLLAR), this._lexer.token.kind === o.NAME) {
          let i = this._lexer.token.value;
          throw d(this._lexer.source, n.start, `Unexpected variable "$${i}" in constant value.`);
        } else throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    let t = this._lexer.token;
    return this.advanceLexer(), this.node(t, { kind: c.STRING, value: t.value, block: t.kind === o.BLOCK_STRING });
  }
  parseList(t) {
    let n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, { kind: c.LIST, values: this.any(o.BRACKET_L, n, o.BRACKET_R) });
  }
  parseObject(t) {
    let n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, { kind: c.OBJECT, fields: this.any(o.BRACE_L, n, o.BRACE_R) });
  }
  parseObjectField(t) {
    let n = this._lexer.token, i = this.parseName();
    return this.expectToken(o.COLON), this.node(n, { kind: c.OBJECT_FIELD, name: i, value: this.parseValueLiteral(t) });
  }
  parseDirectives(t) {
    let n = [];
    for (; this.peek(o.AT); ) n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  parseDirective(t) {
    let n = this._lexer.token;
    return this.expectToken(o.AT), this.node(n, { kind: c.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(t) });
  }
  parseTypeReference() {
    let t = this._lexer.token, n;
    if (this.expectOptionalToken(o.BRACKET_L)) {
      let i = this.parseTypeReference();
      this.expectToken(o.BRACKET_R), n = this.node(t, { kind: c.LIST_TYPE, type: i });
    } else n = this.parseNamedType();
    return this.expectOptionalToken(o.BANG) ? this.node(t, { kind: c.NON_NULL_TYPE, type: n }) : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, { kind: c.NAMED_TYPE, name: this.parseName() });
  }
  peekDescription() {
    return this.peek(o.STRING) || this.peek(o.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    let i = this.parseConstDirectives(), r = this.many(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
    return this.node(t, { kind: c.SCHEMA_DEFINITION, description: n, directives: i, operationTypes: r });
  }
  parseOperationTypeDefinition() {
    let t = this._lexer.token, n = this.parseOperationType();
    this.expectToken(o.COLON);
    let i = this.parseNamedType();
    return this.node(t, { kind: c.OPERATION_TYPE_DEFINITION, operation: n, type: i });
  }
  parseScalarTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    let i = this.parseName(), r = this.parseConstDirectives();
    return this.node(t, { kind: c.SCALAR_TYPE_DEFINITION, description: n, name: i, directives: r });
  }
  parseObjectTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    let i = this.parseName(), r = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, { kind: c.OBJECT_TYPE_DEFINITION, description: n, name: i, interfaces: r, directives: s, fields: a });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(o.AMP, this.parseNamedType) : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseFieldDefinition, o.BRACE_R);
  }
  parseFieldDefinition() {
    let t = this._lexer.token, n = this.parseDescription(), i = this.parseName(), r = this.parseArgumentDefs();
    this.expectToken(o.COLON);
    let s = this.parseTypeReference(), a = this.parseConstDirectives();
    return this.node(t, { kind: c.FIELD_DEFINITION, description: n, name: i, arguments: r, type: s, directives: a });
  }
  parseArgumentDefs() {
    return this.optionalMany(o.PAREN_L, this.parseInputValueDef, o.PAREN_R);
  }
  parseInputValueDef() {
    let t = this._lexer.token, n = this.parseDescription(), i = this.parseName();
    this.expectToken(o.COLON);
    let r = this.parseTypeReference(), s;
    this.expectOptionalToken(o.EQUALS) && (s = this.parseConstValueLiteral());
    let a = this.parseConstDirectives();
    return this.node(t, { kind: c.INPUT_VALUE_DEFINITION, description: n, name: i, type: r, defaultValue: s, directives: a });
  }
  parseInterfaceTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    let i = this.parseName(), r = this.parseImplementsInterfaces(), s = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, { kind: c.INTERFACE_TYPE_DEFINITION, description: n, name: i, interfaces: r, directives: s, fields: a });
  }
  parseUnionTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    let i = this.parseName(), r = this.parseConstDirectives(), s = this.parseUnionMemberTypes();
    return this.node(t, { kind: c.UNION_TYPE_DEFINITION, description: n, name: i, directives: r, types: s });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(o.EQUALS) ? this.delimitedMany(o.PIPE, this.parseNamedType) : [];
  }
  parseEnumTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    let i = this.parseName(), r = this.parseConstDirectives(), s = this.parseEnumValuesDefinition();
    return this.node(t, { kind: c.ENUM_TYPE_DEFINITION, description: n, name: i, directives: r, values: s });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseEnumValueDefinition, o.BRACE_R);
  }
  parseEnumValueDefinition() {
    let t = this._lexer.token, n = this.parseDescription(), i = this.parseEnumValueName(), r = this.parseConstDirectives();
    return this.node(t, { kind: c.ENUM_VALUE_DEFINITION, description: n, name: i, directives: r });
  }
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw d(this._lexer.source, this._lexer.token.start, `${oe(this._lexer.token)} is reserved and cannot be used for an enum value.`);
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    let i = this.parseName(), r = this.parseConstDirectives(), s = this.parseInputFieldsDefinition();
    return this.node(t, { kind: c.INPUT_OBJECT_TYPE_DEFINITION, description: n, name: i, directives: r, fields: s });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseInputValueDef, o.BRACE_R);
  }
  parseTypeSystemExtension() {
    let t = this._lexer.lookahead();
    if (t.kind === o.NAME) switch (t.value) {
      case "schema":
        return this.parseSchemaExtension();
      case "scalar":
        return this.parseScalarTypeExtension();
      case "type":
        return this.parseObjectTypeExtension();
      case "interface":
        return this.parseInterfaceTypeExtension();
      case "union":
        return this.parseUnionTypeExtension();
      case "enum":
        return this.parseEnumTypeExtension();
      case "input":
        return this.parseInputObjectTypeExtension();
    }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    let n = this.parseConstDirectives(), i = this.optionalMany(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
    if (n.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.SCHEMA_EXTENSION, directives: n, operationTypes: i });
  }
  parseScalarTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    let n = this.parseName(), i = this.parseConstDirectives();
    if (i.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.SCALAR_TYPE_EXTENSION, name: n, directives: i });
  }
  parseObjectTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    let n = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.OBJECT_TYPE_EXTENSION, name: n, interfaces: i, directives: r, fields: s });
  }
  parseInterfaceTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    let n = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), s = this.parseFieldsDefinition();
    if (i.length === 0 && r.length === 0 && s.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.INTERFACE_TYPE_EXTENSION, name: n, interfaces: i, directives: r, fields: s });
  }
  parseUnionTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    let n = this.parseName(), i = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.UNION_TYPE_EXTENSION, name: n, directives: i, types: r });
  }
  parseEnumTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    let n = this.parseName(), i = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.ENUM_TYPE_EXTENSION, name: n, directives: i, values: r });
  }
  parseInputObjectTypeExtension() {
    let t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    let n = this.parseName(), i = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
    if (i.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, { kind: c.INPUT_OBJECT_TYPE_EXTENSION, name: n, directives: i, fields: r });
  }
  parseDirectiveDefinition() {
    let t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(o.AT);
    let i = this.parseName(), r = this.parseArgumentDefs(), s = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    let a = this.parseDirectiveLocations();
    return this.node(t, { kind: c.DIRECTIVE_DEFINITION, description: n, name: i, arguments: r, repeatable: s, locations: a });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(o.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    let t = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(ee, n.value)) return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    return this._options.noLocation !== true && (n.loc = new H(t, this._lexer.lastToken, this._lexer.source)), n;
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    let n = this._lexer.token;
    if (n.kind === t) return this.advanceLexer(), n;
    throw d(this._lexer.source, n.start, `Expected ${lt(t)}, found ${oe(n)}.`);
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), true) : false;
  }
  expectKeyword(t) {
    let n = this._lexer.token;
    if (n.kind === o.NAME && n.value === t) this.advanceLexer();
    else throw d(this._lexer.source, n.start, `Expected "${t}", found ${oe(n)}.`);
  }
  expectOptionalKeyword(t) {
    let n = this._lexer.token;
    return n.kind === o.NAME && n.value === t ? (this.advanceLexer(), true) : false;
  }
  unexpected(t) {
    let n = t ?? this._lexer.token;
    return d(this._lexer.source, n.start, `Unexpected ${oe(n)}.`);
  }
  any(t, n, i) {
    this.expectToken(t);
    let r = [];
    for (; !this.expectOptionalToken(i); ) r.push(n.call(this));
    return r;
  }
  optionalMany(t, n, i) {
    if (this.expectOptionalToken(t)) {
      let r = [];
      do
        r.push(n.call(this));
      while (!this.expectOptionalToken(i));
      return r;
    }
    return [];
  }
  many(t, n, i) {
    this.expectToken(t);
    let r = [];
    do
      r.push(n.call(this));
    while (!this.expectOptionalToken(i));
    return r;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    let i = [];
    do
      i.push(n.call(this));
    while (this.expectOptionalToken(t));
    return i;
  }
  advanceLexer() {
    let { maxTokens: t } = this._options, n = this._lexer.advance();
    if (n.kind !== o.EOF && (++this._tokenCounter, t !== void 0 && this._tokenCounter > t)) throw d(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`);
  }
};
function oe(e2) {
  let t = e2.value;
  return lt(e2.kind) + (t != null ? ` "${t}"` : "");
}
function lt(e2) {
  return it(e2) ? `"${e2}"` : e2;
}
function en(e2, t) {
  let n = new SyntaxError(e2 + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(n, t);
}
var pt = en;
function tn(e2) {
  let t = [], { startToken: n, endToken: i } = e2.loc;
  for (let r = n; r !== i; r = r.next) r.kind === "Comment" && t.push({ ...r, loc: { start: r.start, end: r.end } });
  return t;
}
var nn = { allowLegacyFragmentVariables: true };
function rn(e2) {
  if ((e2 == null ? void 0 : e2.name) === "GraphQLError") {
    let { message: t, locations: [n] } = e2;
    return pt(t, { loc: { start: n }, cause: e2 });
  }
  return e2;
}
function sn(e2) {
  let t;
  try {
    t = ut(e2, nn);
  } catch (n) {
    throw rn(n);
  }
  return t.comments = tn(t), t;
}
var on = { parse: sn, astFormat: "graphql", hasPragma: Ye, locStart: K, locEnd: z };
var an = { graphql: $e };
var Si = _e;
export {
  Si as default,
  Je as languages,
  qe as options,
  Ne as parsers,
  an as printers
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbC1DVkRwSFhDVy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3ByZXR0aWVyL3BsdWdpbnMvZ3JhcGhxbC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGZ0PU9iamVjdC5kZWZpbmVQcm9wZXJ0eTt2YXIgeWU9KGUsdCk9Pntmb3IodmFyIG4gaW4gdClmdChlLG4se2dldDp0W25dLGVudW1lcmFibGU6ITB9KX07dmFyIF9lPXt9O3llKF9lLHtsYW5ndWFnZXM6KCk9PkplLG9wdGlvbnM6KCk9PnFlLHBhcnNlcnM6KCk9Pk5lLHByaW50ZXJzOigpPT5hbn0pO3ZhciBodD0oZSx0LG4saSk9PntpZighKGUmJnQ9PW51bGwpKXJldHVybiB0LnJlcGxhY2VBbGw/dC5yZXBsYWNlQWxsKG4saSk6bi5nbG9iYWw/dC5yZXBsYWNlKG4saSk6dC5zcGxpdChuKS5qb2luKGkpfSxqPWh0O3ZhciBHPVwiaW5kZW50XCI7dmFyICQ9XCJncm91cFwiO3ZhciBGPVwiaWYtYnJlYWtcIjt2YXIgQz1cImxpbmVcIjt2YXIgSj1cImJyZWFrLXBhcmVudFwiO3ZhciB2ZT0oKT0+e30sTD12ZSxsZT12ZTtmdW5jdGlvbiBfKGUpe3JldHVybiBMKGUpLHt0eXBlOkcsY29udGVudHM6ZX19ZnVuY3Rpb24geChlLHQ9e30pe3JldHVybiBMKGUpLGxlKHQuZXhwYW5kZWRTdGF0ZXMsITApLHt0eXBlOiQsaWQ6dC5pZCxjb250ZW50czplLGJyZWFrOiEhdC5zaG91bGRCcmVhayxleHBhbmRlZFN0YXRlczp0LmV4cGFuZGVkU3RhdGVzfX1mdW5jdGlvbiBJKGUsdD1cIlwiLG49e30pe3JldHVybiBMKGUpLHQhPT1cIlwiJiZMKHQpLHt0eXBlOkYsYnJlYWtDb250ZW50czplLGZsYXRDb250ZW50czp0LGdyb3VwSWQ6bi5ncm91cElkfX12YXIgVHQ9e3R5cGU6Sn07dmFyIE50PXt0eXBlOkMsaGFyZDohMH07dmFyIGs9e3R5cGU6Q30scD17dHlwZTpDLHNvZnQ6ITB9LGY9W050LFR0XTtmdW5jdGlvbiBFKGUsdCl7TChlKSxsZSh0KTtsZXQgbj1bXTtmb3IobGV0IGk9MDtpPHQubGVuZ3RoO2krKylpIT09MCYmbi5wdXNoKGUpLG4ucHVzaCh0W2ldKTtyZXR1cm4gbn1mdW5jdGlvbiBYKGUpe3JldHVybih0LG4saSk9PntsZXQgcj0hIShpIT1udWxsJiZpLmJhY2t3YXJkcyk7aWYobj09PSExKXJldHVybiExO2xldHtsZW5ndGg6c309dCxhPW47Zm9yKDthPj0wJiZhPHM7KXtsZXQgdT10LmNoYXJBdChhKTtpZihlIGluc3RhbmNlb2YgUmVnRXhwKXtpZighZS50ZXN0KHUpKXJldHVybiBhfWVsc2UgaWYoIWUuaW5jbHVkZXModSkpcmV0dXJuIGE7cj9hLS06YSsrfXJldHVybiBhPT09LTF8fGE9PT1zP2E6ITF9fXZhciBqbj1YKC9cXHMvdSkscT1YKFwiIFx0XCIpLGJlPVgoXCIsOyBcdFwiKSxMZT1YKC9bXlxcblxccl0vdSk7ZnVuY3Rpb24gX3QoZSx0LG4pe2xldCBpPSEhKG4hPW51bGwmJm4uYmFja3dhcmRzKTtpZih0PT09ITEpcmV0dXJuITE7bGV0IHI9ZS5jaGFyQXQodCk7aWYoaSl7aWYoZS5jaGFyQXQodC0xKT09PVwiXFxyXCImJnI9PT1gXG5gKXJldHVybiB0LTI7aWYocj09PWBcbmB8fHI9PT1cIlxcclwifHxyPT09XCJcXHUyMDI4XCJ8fHI9PT1cIlxcdTIwMjlcIilyZXR1cm4gdC0xfWVsc2V7aWYocj09PVwiXFxyXCImJmUuY2hhckF0KHQrMSk9PT1gXG5gKXJldHVybiB0KzI7aWYocj09PWBcbmB8fHI9PT1cIlxcclwifHxyPT09XCJcXHUyMDI4XCJ8fHI9PT1cIlxcdTIwMjlcIilyZXR1cm4gdCsxfXJldHVybiB0fXZhciBRPV90O2Z1bmN0aW9uIHl0KGUsdCxuPXt9KXtsZXQgaT1xKGUsbi5iYWNrd2FyZHM/dC0xOnQsbikscj1RKGUsaSxuKTtyZXR1cm4gaSE9PXJ9dmFyIFJlPXl0O2Z1bmN0aW9uIHh0KGUsdCl7aWYodD09PSExKXJldHVybiExO2lmKGUuY2hhckF0KHQpPT09XCIvXCImJmUuY2hhckF0KHQrMSk9PT1cIipcIil7Zm9yKGxldCBuPXQrMjtuPGUubGVuZ3RoOysrbilpZihlLmNoYXJBdChuKT09PVwiKlwiJiZlLmNoYXJBdChuKzEpPT09XCIvXCIpcmV0dXJuIG4rMn1yZXR1cm4gdH12YXIgUGU9eHQ7ZnVuY3Rpb24gT3QoZSx0KXtyZXR1cm4gdD09PSExPyExOmUuY2hhckF0KHQpPT09XCIvXCImJmUuY2hhckF0KHQrMSk9PT1cIi9cIj9MZShlLHQpOnR9dmFyIEZlPU90O2Z1bmN0aW9uIEl0KGUsdCl7bGV0IG49bnVsbCxpPXQ7Zm9yKDtpIT09bjspbj1pLGk9YmUoZSxpKSxpPVBlKGUsaSksaT1xKGUsaSk7cmV0dXJuIGk9RmUoZSxpKSxpPVEoZSxpKSxpIT09ITEmJlJlKGUsaSl9dmFyIHdlPUl0O2Z1bmN0aW9uIER0KGUpe3JldHVybiBBcnJheS5pc0FycmF5KGUpJiZlLmxlbmd0aD4wfXZhciBwZT1EdDt2YXIgZmU9Y2xhc3MgZXh0ZW5kcyBFcnJvcntuYW1lPVwiVW5leHBlY3RlZE5vZGVFcnJvclwiO2NvbnN0cnVjdG9yKHQsbixpPVwidHlwZVwiKXtzdXBlcihgVW5leHBlY3RlZCAke259IG5vZGUgJHtpfTogJHtKU09OLnN0cmluZ2lmeSh0W2ldKX0uYCksdGhpcy5ub2RlPXR9fSxCZT1mZTt2YXIgdz1udWxsO2Z1bmN0aW9uIEIoZSl7aWYodyE9PW51bGwmJnR5cGVvZiB3LnByb3BlcnR5KXtsZXQgdD13O3JldHVybiB3PUIucHJvdG90eXBlPW51bGwsdH1yZXR1cm4gdz1CLnByb3RvdHlwZT1lPz9PYmplY3QuY3JlYXRlKG51bGwpLG5ldyBCfXZhciBndD0xMDtmb3IobGV0IGU9MDtlPD1ndDtlKyspQigpO2Z1bmN0aW9uIGhlKGUpe3JldHVybiBCKGUpfWZ1bmN0aW9uIEF0KGUsdD1cInR5cGVcIil7aGUoZSk7ZnVuY3Rpb24gbihpKXtsZXQgcj1pW3RdLHM9ZVtyXTtpZighQXJyYXkuaXNBcnJheShzKSl0aHJvdyBPYmplY3QuYXNzaWduKG5ldyBFcnJvcihgTWlzc2luZyB2aXNpdG9yIGtleXMgZm9yICcke3J9Jy5gKSx7bm9kZTppfSk7cmV0dXJuIHN9cmV0dXJuIG59dmFyIFVlPUF0O3ZhciBIPWNsYXNze2NvbnN0cnVjdG9yKHQsbixpKXt0aGlzLnN0YXJ0PXQuc3RhcnQsdGhpcy5lbmQ9bi5lbmQsdGhpcy5zdGFydFRva2VuPXQsdGhpcy5lbmRUb2tlbj1uLHRoaXMuc291cmNlPWl9Z2V0W1N5bWJvbC50b1N0cmluZ1RhZ10oKXtyZXR1cm5cIkxvY2F0aW9uXCJ9dG9KU09OKCl7cmV0dXJue3N0YXJ0OnRoaXMuc3RhcnQsZW5kOnRoaXMuZW5kfX19LFU9Y2xhc3N7Y29uc3RydWN0b3IodCxuLGkscixzLGEpe3RoaXMua2luZD10LHRoaXMuc3RhcnQ9bix0aGlzLmVuZD1pLHRoaXMubGluZT1yLHRoaXMuY29sdW1uPXMsdGhpcy52YWx1ZT1hLHRoaXMucHJldj1udWxsLHRoaXMubmV4dD1udWxsfWdldFtTeW1ib2wudG9TdHJpbmdUYWddKCl7cmV0dXJuXCJUb2tlblwifXRvSlNPTigpe3JldHVybntraW5kOnRoaXMua2luZCx2YWx1ZTp0aGlzLnZhbHVlLGxpbmU6dGhpcy5saW5lLGNvbHVtbjp0aGlzLmNvbHVtbn19fSxXPXtOYW1lOltdLERvY3VtZW50OltcImRlZmluaXRpb25zXCJdLE9wZXJhdGlvbkRlZmluaXRpb246W1wibmFtZVwiLFwidmFyaWFibGVEZWZpbml0aW9uc1wiLFwiZGlyZWN0aXZlc1wiLFwic2VsZWN0aW9uU2V0XCJdLFZhcmlhYmxlRGVmaW5pdGlvbjpbXCJ2YXJpYWJsZVwiLFwidHlwZVwiLFwiZGVmYXVsdFZhbHVlXCIsXCJkaXJlY3RpdmVzXCJdLFZhcmlhYmxlOltcIm5hbWVcIl0sU2VsZWN0aW9uU2V0OltcInNlbGVjdGlvbnNcIl0sRmllbGQ6W1wiYWxpYXNcIixcIm5hbWVcIixcImFyZ3VtZW50c1wiLFwiZGlyZWN0aXZlc1wiLFwic2VsZWN0aW9uU2V0XCJdLEFyZ3VtZW50OltcIm5hbWVcIixcInZhbHVlXCJdLEZyYWdtZW50U3ByZWFkOltcIm5hbWVcIixcImRpcmVjdGl2ZXNcIl0sSW5saW5lRnJhZ21lbnQ6W1widHlwZUNvbmRpdGlvblwiLFwiZGlyZWN0aXZlc1wiLFwic2VsZWN0aW9uU2V0XCJdLEZyYWdtZW50RGVmaW5pdGlvbjpbXCJuYW1lXCIsXCJ2YXJpYWJsZURlZmluaXRpb25zXCIsXCJ0eXBlQ29uZGl0aW9uXCIsXCJkaXJlY3RpdmVzXCIsXCJzZWxlY3Rpb25TZXRcIl0sSW50VmFsdWU6W10sRmxvYXRWYWx1ZTpbXSxTdHJpbmdWYWx1ZTpbXSxCb29sZWFuVmFsdWU6W10sTnVsbFZhbHVlOltdLEVudW1WYWx1ZTpbXSxMaXN0VmFsdWU6W1widmFsdWVzXCJdLE9iamVjdFZhbHVlOltcImZpZWxkc1wiXSxPYmplY3RGaWVsZDpbXCJuYW1lXCIsXCJ2YWx1ZVwiXSxEaXJlY3RpdmU6W1wibmFtZVwiLFwiYXJndW1lbnRzXCJdLE5hbWVkVHlwZTpbXCJuYW1lXCJdLExpc3RUeXBlOltcInR5cGVcIl0sTm9uTnVsbFR5cGU6W1widHlwZVwiXSxTY2hlbWFEZWZpbml0aW9uOltcImRlc2NyaXB0aW9uXCIsXCJkaXJlY3RpdmVzXCIsXCJvcGVyYXRpb25UeXBlc1wiXSxPcGVyYXRpb25UeXBlRGVmaW5pdGlvbjpbXCJ0eXBlXCJdLFNjYWxhclR5cGVEZWZpbml0aW9uOltcImRlc2NyaXB0aW9uXCIsXCJuYW1lXCIsXCJkaXJlY3RpdmVzXCJdLE9iamVjdFR5cGVEZWZpbml0aW9uOltcImRlc2NyaXB0aW9uXCIsXCJuYW1lXCIsXCJpbnRlcmZhY2VzXCIsXCJkaXJlY3RpdmVzXCIsXCJmaWVsZHNcIl0sRmllbGREZWZpbml0aW9uOltcImRlc2NyaXB0aW9uXCIsXCJuYW1lXCIsXCJhcmd1bWVudHNcIixcInR5cGVcIixcImRpcmVjdGl2ZXNcIl0sSW5wdXRWYWx1ZURlZmluaXRpb246W1wiZGVzY3JpcHRpb25cIixcIm5hbWVcIixcInR5cGVcIixcImRlZmF1bHRWYWx1ZVwiLFwiZGlyZWN0aXZlc1wiXSxJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbjpbXCJkZXNjcmlwdGlvblwiLFwibmFtZVwiLFwiaW50ZXJmYWNlc1wiLFwiZGlyZWN0aXZlc1wiLFwiZmllbGRzXCJdLFVuaW9uVHlwZURlZmluaXRpb246W1wiZGVzY3JpcHRpb25cIixcIm5hbWVcIixcImRpcmVjdGl2ZXNcIixcInR5cGVzXCJdLEVudW1UeXBlRGVmaW5pdGlvbjpbXCJkZXNjcmlwdGlvblwiLFwibmFtZVwiLFwiZGlyZWN0aXZlc1wiLFwidmFsdWVzXCJdLEVudW1WYWx1ZURlZmluaXRpb246W1wiZGVzY3JpcHRpb25cIixcIm5hbWVcIixcImRpcmVjdGl2ZXNcIl0sSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbjpbXCJkZXNjcmlwdGlvblwiLFwibmFtZVwiLFwiZGlyZWN0aXZlc1wiLFwiZmllbGRzXCJdLERpcmVjdGl2ZURlZmluaXRpb246W1wiZGVzY3JpcHRpb25cIixcIm5hbWVcIixcImFyZ3VtZW50c1wiLFwibG9jYXRpb25zXCJdLFNjaGVtYUV4dGVuc2lvbjpbXCJkaXJlY3RpdmVzXCIsXCJvcGVyYXRpb25UeXBlc1wiXSxTY2FsYXJUeXBlRXh0ZW5zaW9uOltcIm5hbWVcIixcImRpcmVjdGl2ZXNcIl0sT2JqZWN0VHlwZUV4dGVuc2lvbjpbXCJuYW1lXCIsXCJpbnRlcmZhY2VzXCIsXCJkaXJlY3RpdmVzXCIsXCJmaWVsZHNcIl0sSW50ZXJmYWNlVHlwZUV4dGVuc2lvbjpbXCJuYW1lXCIsXCJpbnRlcmZhY2VzXCIsXCJkaXJlY3RpdmVzXCIsXCJmaWVsZHNcIl0sVW5pb25UeXBlRXh0ZW5zaW9uOltcIm5hbWVcIixcImRpcmVjdGl2ZXNcIixcInR5cGVzXCJdLEVudW1UeXBlRXh0ZW5zaW9uOltcIm5hbWVcIixcImRpcmVjdGl2ZXNcIixcInZhbHVlc1wiXSxJbnB1dE9iamVjdFR5cGVFeHRlbnNpb246W1wibmFtZVwiLFwiZGlyZWN0aXZlc1wiLFwiZmllbGRzXCJdfSxjcj1uZXcgU2V0KE9iamVjdC5rZXlzKFcpKTt2YXIgUzsoZnVuY3Rpb24oZSl7ZS5RVUVSWT1cInF1ZXJ5XCIsZS5NVVRBVElPTj1cIm11dGF0aW9uXCIsZS5TVUJTQ1JJUFRJT049XCJzdWJzY3JpcHRpb25cIn0pKFN8fChTPXt9KSk7dmFyIGt0PVVlKFcsXCJraW5kXCIpLFZlPWt0O2Z1bmN0aW9uIEsoZSl7cmV0dXJuIGUubG9jLnN0YXJ0fWZ1bmN0aW9uIHooZSl7cmV0dXJuIGUubG9jLmVuZH1mdW5jdGlvbiBZZShlKXtyZXR1cm4vXlxccyojW15cXFNcXG5dKkAoPzpmb3JtYXR8cHJldHRpZXIpXFxzKig/OlxcbnwkKS91LnRlc3QoZSl9ZnVuY3Rpb24gTWUoZSl7cmV0dXJuYCMgQGZvcm1hdFxuXG5gK2V9ZnVuY3Rpb24gQ3QoZSx0LG4pe2xldHtub2RlOml9PWU7aWYoIWkuZGVzY3JpcHRpb24pcmV0dXJuXCJcIjtsZXQgcj1bbihcImRlc2NyaXB0aW9uXCIpXTtyZXR1cm4gaS5raW5kPT09XCJJbnB1dFZhbHVlRGVmaW5pdGlvblwiJiYhaS5kZXNjcmlwdGlvbi5ibG9jaz9yLnB1c2goayk6ci5wdXNoKGYpLHJ9dmFyIGc9Q3Q7ZnVuY3Rpb24gU3QoZSx0LG4pe2xldHtub2RlOml9PWU7c3dpdGNoKGkua2luZCl7Y2FzZVwiRG9jdW1lbnRcIjpyZXR1cm5bLi4uRShmLEEoZSx0LG4sXCJkZWZpbml0aW9uc1wiKSksZl07Y2FzZVwiT3BlcmF0aW9uRGVmaW5pdGlvblwiOntsZXQgcj10Lm9yaWdpbmFsVGV4dFtLKGkpXSE9PVwie1wiLHM9ISFpLm5hbWU7cmV0dXJuW3I/aS5vcGVyYXRpb246XCJcIixyJiZzP1tcIiBcIixuKFwibmFtZVwiKV06XCJcIixyJiYhcyYmcGUoaS52YXJpYWJsZURlZmluaXRpb25zKT9cIiBcIjpcIlwiLGplKGUsbikseShlLG4saSksIXImJiFzP1wiXCI6XCIgXCIsbihcInNlbGVjdGlvblNldFwiKV19Y2FzZVwiRnJhZ21lbnREZWZpbml0aW9uXCI6cmV0dXJuW1wiZnJhZ21lbnQgXCIsbihcIm5hbWVcIiksamUoZSxuKSxcIiBvbiBcIixuKFwidHlwZUNvbmRpdGlvblwiKSx5KGUsbixpKSxcIiBcIixuKFwic2VsZWN0aW9uU2V0XCIpXTtjYXNlXCJTZWxlY3Rpb25TZXRcIjpyZXR1cm5bXCJ7XCIsXyhbZixFKGYsQShlLHQsbixcInNlbGVjdGlvbnNcIikpXSksZixcIn1cIl07Y2FzZVwiRmllbGRcIjpyZXR1cm4geChbaS5hbGlhcz9bbihcImFsaWFzXCIpLFwiOiBcIl06XCJcIixuKFwibmFtZVwiKSxpLmFyZ3VtZW50cy5sZW5ndGg+MD94KFtcIihcIixfKFtwLEUoW0koXCJcIixcIiwgXCIpLHBdLEEoZSx0LG4sXCJhcmd1bWVudHNcIikpXSkscCxcIilcIl0pOlwiXCIseShlLG4saSksaS5zZWxlY3Rpb25TZXQ/XCIgXCI6XCJcIixuKFwic2VsZWN0aW9uU2V0XCIpXSk7Y2FzZVwiTmFtZVwiOnJldHVybiBpLnZhbHVlO2Nhc2VcIlN0cmluZ1ZhbHVlXCI6aWYoaS5ibG9jayl7bGV0IHI9aighMSxpLnZhbHVlLCdcIlwiXCInLFN0cmluZy5yYXdgXFxcIlwiXCJgKS5zcGxpdChgXG5gKTtyZXR1cm4gci5sZW5ndGg9PT0xJiYoclswXT1yWzBdLnRyaW0oKSksci5ldmVyeShzPT5zPT09XCJcIikmJihyLmxlbmd0aD0wKSxFKGYsWydcIlwiXCInLC4uLnIsJ1wiXCJcIiddKX1yZXR1cm5bJ1wiJyxqKCExLGooITEsaS52YWx1ZSwvW1wiXFxcXF0vZ3UsU3RyaW5nLnJhd2BcXCQmYCksYFxuYCxTdHJpbmcucmF3YFxcbmApLCdcIiddO2Nhc2VcIkludFZhbHVlXCI6Y2FzZVwiRmxvYXRWYWx1ZVwiOmNhc2VcIkVudW1WYWx1ZVwiOnJldHVybiBpLnZhbHVlO2Nhc2VcIkJvb2xlYW5WYWx1ZVwiOnJldHVybiBpLnZhbHVlP1widHJ1ZVwiOlwiZmFsc2VcIjtjYXNlXCJOdWxsVmFsdWVcIjpyZXR1cm5cIm51bGxcIjtjYXNlXCJWYXJpYWJsZVwiOnJldHVybltcIiRcIixuKFwibmFtZVwiKV07Y2FzZVwiTGlzdFZhbHVlXCI6cmV0dXJuIHgoW1wiW1wiLF8oW3AsRShbSShcIlwiLFwiLCBcIikscF0sZS5tYXAobixcInZhbHVlc1wiKSldKSxwLFwiXVwiXSk7Y2FzZVwiT2JqZWN0VmFsdWVcIjp7bGV0IHI9dC5icmFja2V0U3BhY2luZyYmaS5maWVsZHMubGVuZ3RoPjA/XCIgXCI6XCJcIjtyZXR1cm4geChbXCJ7XCIscixfKFtwLEUoW0koXCJcIixcIiwgXCIpLHBdLGUubWFwKG4sXCJmaWVsZHNcIikpXSkscCxJKFwiXCIsciksXCJ9XCJdKX1jYXNlXCJPYmplY3RGaWVsZFwiOmNhc2VcIkFyZ3VtZW50XCI6cmV0dXJuW24oXCJuYW1lXCIpLFwiOiBcIixuKFwidmFsdWVcIildO2Nhc2VcIkRpcmVjdGl2ZVwiOnJldHVybltcIkBcIixuKFwibmFtZVwiKSxpLmFyZ3VtZW50cy5sZW5ndGg+MD94KFtcIihcIixfKFtwLEUoW0koXCJcIixcIiwgXCIpLHBdLEEoZSx0LG4sXCJhcmd1bWVudHNcIikpXSkscCxcIilcIl0pOlwiXCJdO2Nhc2VcIk5hbWVkVHlwZVwiOnJldHVybiBuKFwibmFtZVwiKTtjYXNlXCJWYXJpYWJsZURlZmluaXRpb25cIjpyZXR1cm5bbihcInZhcmlhYmxlXCIpLFwiOiBcIixuKFwidHlwZVwiKSxpLmRlZmF1bHRWYWx1ZT9bXCIgPSBcIixuKFwiZGVmYXVsdFZhbHVlXCIpXTpcIlwiLHkoZSxuLGkpXTtjYXNlXCJPYmplY3RUeXBlRXh0ZW5zaW9uXCI6Y2FzZVwiT2JqZWN0VHlwZURlZmluaXRpb25cIjpjYXNlXCJJbnB1dE9iamVjdFR5cGVFeHRlbnNpb25cIjpjYXNlXCJJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uXCI6Y2FzZVwiSW50ZXJmYWNlVHlwZUV4dGVuc2lvblwiOmNhc2VcIkludGVyZmFjZVR5cGVEZWZpbml0aW9uXCI6e2xldHtraW5kOnJ9PWkscz1bXTtyZXR1cm4gci5lbmRzV2l0aChcIlR5cGVEZWZpbml0aW9uXCIpP3MucHVzaChnKGUsdCxuKSk6cy5wdXNoKFwiZXh0ZW5kIFwiKSxyLnN0YXJ0c1dpdGgoXCJPYmplY3RUeXBlXCIpP3MucHVzaChcInR5cGVcIik6ci5zdGFydHNXaXRoKFwiSW5wdXRPYmplY3RUeXBlXCIpP3MucHVzaChcImlucHV0XCIpOnMucHVzaChcImludGVyZmFjZVwiKSxzLnB1c2goXCIgXCIsbihcIm5hbWVcIikpLCFyLnN0YXJ0c1dpdGgoXCJJbnB1dE9iamVjdFR5cGVcIikmJmkuaW50ZXJmYWNlcy5sZW5ndGg+MCYmcy5wdXNoKFwiIGltcGxlbWVudHMgXCIsLi4uTHQoZSx0LG4pKSxzLnB1c2goeShlLG4saSkpLGkuZmllbGRzLmxlbmd0aD4wJiZzLnB1c2goW1wiIHtcIixfKFtmLEUoZixBKGUsdCxuLFwiZmllbGRzXCIpKV0pLGYsXCJ9XCJdKSxzfWNhc2VcIkZpZWxkRGVmaW5pdGlvblwiOnJldHVybltnKGUsdCxuKSxuKFwibmFtZVwiKSxpLmFyZ3VtZW50cy5sZW5ndGg+MD94KFtcIihcIixfKFtwLEUoW0koXCJcIixcIiwgXCIpLHBdLEEoZSx0LG4sXCJhcmd1bWVudHNcIikpXSkscCxcIilcIl0pOlwiXCIsXCI6IFwiLG4oXCJ0eXBlXCIpLHkoZSxuLGkpXTtjYXNlXCJEaXJlY3RpdmVEZWZpbml0aW9uXCI6cmV0dXJuW2coZSx0LG4pLFwiZGlyZWN0aXZlIFwiLFwiQFwiLG4oXCJuYW1lXCIpLGkuYXJndW1lbnRzLmxlbmd0aD4wP3goW1wiKFwiLF8oW3AsRShbSShcIlwiLFwiLCBcIikscF0sQShlLHQsbixcImFyZ3VtZW50c1wiKSldKSxwLFwiKVwiXSk6XCJcIixpLnJlcGVhdGFibGU/XCIgcmVwZWF0YWJsZVwiOlwiXCIsXCIgb24gXCIsLi4uRShcIiB8IFwiLGUubWFwKG4sXCJsb2NhdGlvbnNcIikpXTtjYXNlXCJFbnVtVHlwZUV4dGVuc2lvblwiOmNhc2VcIkVudW1UeXBlRGVmaW5pdGlvblwiOnJldHVybltnKGUsdCxuKSxpLmtpbmQ9PT1cIkVudW1UeXBlRXh0ZW5zaW9uXCI/XCJleHRlbmQgXCI6XCJcIixcImVudW0gXCIsbihcIm5hbWVcIikseShlLG4saSksaS52YWx1ZXMubGVuZ3RoPjA/W1wiIHtcIixfKFtmLEUoZixBKGUsdCxuLFwidmFsdWVzXCIpKV0pLGYsXCJ9XCJdOlwiXCJdO2Nhc2VcIkVudW1WYWx1ZURlZmluaXRpb25cIjpyZXR1cm5bZyhlLHQsbiksbihcIm5hbWVcIikseShlLG4saSldO2Nhc2VcIklucHV0VmFsdWVEZWZpbml0aW9uXCI6cmV0dXJuW2coZSx0LG4pLG4oXCJuYW1lXCIpLFwiOiBcIixuKFwidHlwZVwiKSxpLmRlZmF1bHRWYWx1ZT9bXCIgPSBcIixuKFwiZGVmYXVsdFZhbHVlXCIpXTpcIlwiLHkoZSxuLGkpXTtjYXNlXCJTY2hlbWFFeHRlbnNpb25cIjpyZXR1cm5bXCJleHRlbmQgc2NoZW1hXCIseShlLG4saSksLi4uaS5vcGVyYXRpb25UeXBlcy5sZW5ndGg+MD9bXCIge1wiLF8oW2YsRShmLEEoZSx0LG4sXCJvcGVyYXRpb25UeXBlc1wiKSldKSxmLFwifVwiXTpbXV07Y2FzZVwiU2NoZW1hRGVmaW5pdGlvblwiOnJldHVybltnKGUsdCxuKSxcInNjaGVtYVwiLHkoZSxuLGkpLFwiIHtcIixpLm9wZXJhdGlvblR5cGVzLmxlbmd0aD4wP18oW2YsRShmLEEoZSx0LG4sXCJvcGVyYXRpb25UeXBlc1wiKSldKTpcIlwiLGYsXCJ9XCJdO2Nhc2VcIk9wZXJhdGlvblR5cGVEZWZpbml0aW9uXCI6cmV0dXJuW2kub3BlcmF0aW9uLFwiOiBcIixuKFwidHlwZVwiKV07Y2FzZVwiRnJhZ21lbnRTcHJlYWRcIjpyZXR1cm5bXCIuLi5cIixuKFwibmFtZVwiKSx5KGUsbixpKV07Y2FzZVwiSW5saW5lRnJhZ21lbnRcIjpyZXR1cm5bXCIuLi5cIixpLnR5cGVDb25kaXRpb24/W1wiIG9uIFwiLG4oXCJ0eXBlQ29uZGl0aW9uXCIpXTpcIlwiLHkoZSxuLGkpLFwiIFwiLG4oXCJzZWxlY3Rpb25TZXRcIildO2Nhc2VcIlVuaW9uVHlwZUV4dGVuc2lvblwiOmNhc2VcIlVuaW9uVHlwZURlZmluaXRpb25cIjpyZXR1cm4geChbZyhlLHQsbikseChbaS5raW5kPT09XCJVbmlvblR5cGVFeHRlbnNpb25cIj9cImV4dGVuZCBcIjpcIlwiLFwidW5pb24gXCIsbihcIm5hbWVcIikseShlLG4saSksaS50eXBlcy5sZW5ndGg+MD9bXCIgPVwiLEkoXCJcIixcIiBcIiksXyhbSShbayxcInwgXCJdKSxFKFtrLFwifCBcIl0sZS5tYXAobixcInR5cGVzXCIpKV0pXTpcIlwiXSldKTtjYXNlXCJTY2FsYXJUeXBlRXh0ZW5zaW9uXCI6Y2FzZVwiU2NhbGFyVHlwZURlZmluaXRpb25cIjpyZXR1cm5bZyhlLHQsbiksaS5raW5kPT09XCJTY2FsYXJUeXBlRXh0ZW5zaW9uXCI/XCJleHRlbmQgXCI6XCJcIixcInNjYWxhciBcIixuKFwibmFtZVwiKSx5KGUsbixpKV07Y2FzZVwiTm9uTnVsbFR5cGVcIjpyZXR1cm5bbihcInR5cGVcIiksXCIhXCJdO2Nhc2VcIkxpc3RUeXBlXCI6cmV0dXJuW1wiW1wiLG4oXCJ0eXBlXCIpLFwiXVwiXTtkZWZhdWx0OnRocm93IG5ldyBCZShpLFwiR3JhcGhxbFwiLFwia2luZFwiKX19ZnVuY3Rpb24geShlLHQsbil7aWYobi5kaXJlY3RpdmVzLmxlbmd0aD09PTApcmV0dXJuXCJcIjtsZXQgaT1FKGssZS5tYXAodCxcImRpcmVjdGl2ZXNcIikpO3JldHVybiBuLmtpbmQ9PT1cIkZyYWdtZW50RGVmaW5pdGlvblwifHxuLmtpbmQ9PT1cIk9wZXJhdGlvbkRlZmluaXRpb25cIj94KFtrLGldKTpbXCIgXCIseChfKFtwLGldKSldfWZ1bmN0aW9uIEEoZSx0LG4saSl7cmV0dXJuIGUubWFwKCh7aXNMYXN0OnIsbm9kZTpzfSk9PntsZXQgYT1uKCk7cmV0dXJuIXImJndlKHQub3JpZ2luYWxUZXh0LHoocykpP1thLGZdOmF9LGkpfWZ1bmN0aW9uIHZ0KGUpe3JldHVybiBlLmtpbmQhPT1cIkNvbW1lbnRcIn1mdW5jdGlvbiBidChlKXtsZXQgdD1lLm5vZGU7aWYodC5raW5kPT09XCJDb21tZW50XCIpcmV0dXJuXCIjXCIrdC52YWx1ZS50cmltRW5kKCk7dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgY29tbWVudDogXCIrSlNPTi5zdHJpbmdpZnkodCkpfWZ1bmN0aW9uIEx0KGUsdCxuKXtsZXR7bm9kZTppfT1lLHI9W10se2ludGVyZmFjZXM6c309aSxhPWUubWFwKG4sXCJpbnRlcmZhY2VzXCIpO2ZvcihsZXQgdT0wO3U8cy5sZW5ndGg7dSsrKXtsZXQgbD1zW3VdO3IucHVzaChhW3VdKTtsZXQgVD1zW3UrMV07aWYoVCl7bGV0IEQ9dC5vcmlnaW5hbFRleHQuc2xpY2UobC5sb2MuZW5kLFQubG9jLnN0YXJ0KS5pbmNsdWRlcyhcIiNcIik7ci5wdXNoKFwiICZcIixEP2s6XCIgXCIpfX1yZXR1cm4gcn1mdW5jdGlvbiBqZShlLHQpe2xldHtub2RlOm59PWU7cmV0dXJuIHBlKG4udmFyaWFibGVEZWZpbml0aW9ucyk/eChbXCIoXCIsXyhbcCxFKFtJKFwiXCIsXCIsIFwiKSxwXSxlLm1hcCh0LFwidmFyaWFibGVEZWZpbml0aW9uc1wiKSldKSxwLFwiKVwiXSk6XCJcIn1mdW5jdGlvbiBHZShlLHQpe2Uua2luZD09PVwiU3RyaW5nVmFsdWVcIiYmZS5ibG9jayYmIWUudmFsdWUuaW5jbHVkZXMoYFxuYCkmJih0LnZhbHVlPWUudmFsdWUudHJpbSgpKX1HZS5pZ25vcmVkUHJvcGVydGllcz1uZXcgU2V0KFtcImxvY1wiLFwiY29tbWVudHNcIl0pO2Z1bmN0aW9uIFJ0KGUpe3ZhciBuO2xldHtub2RlOnR9PWU7cmV0dXJuKG49dD09bnVsbD92b2lkIDA6dC5jb21tZW50cyk9PW51bGw/dm9pZCAwOm4uc29tZShpPT5pLnZhbHVlLnRyaW0oKT09PVwicHJldHRpZXItaWdub3JlXCIpfXZhciBQdD17cHJpbnQ6U3QsbWFzc2FnZUFzdE5vZGU6R2UsaGFzUHJldHRpZXJJZ25vcmU6UnQsaW5zZXJ0UHJhZ21hOk1lLHByaW50Q29tbWVudDpidCxjYW5BdHRhY2hDb21tZW50OnZ0LGdldFZpc2l0b3JLZXlzOlZlfSwkZT1QdDt2YXIgSmU9W3tsaW5ndWlzdExhbmd1YWdlSWQ6MTM5LG5hbWU6XCJHcmFwaFFMXCIsdHlwZTpcImRhdGFcIixjb2xvcjpcIiNlMTAwOThcIixleHRlbnNpb25zOltcIi5ncmFwaHFsXCIsXCIuZ3FsXCIsXCIuZ3JhcGhxbHNcIl0sdG1TY29wZTpcInNvdXJjZS5ncmFwaHFsXCIsYWNlTW9kZTpcInRleHRcIixwYXJzZXJzOltcImdyYXBocWxcIl0sdnNjb2RlTGFuZ3VhZ2VJZHM6W1wiZ3JhcGhxbFwiXX1dO3ZhciBYZT17YnJhY2tldFNwYWNpbmc6e2NhdGVnb3J5OlwiQ29tbW9uXCIsdHlwZTpcImJvb2xlYW5cIixkZWZhdWx0OiEwLGRlc2NyaXB0aW9uOlwiUHJpbnQgc3BhY2VzIGJldHdlZW4gYnJhY2tldHMuXCIsb3Bwb3NpdGVEZXNjcmlwdGlvbjpcIkRvIG5vdCBwcmludCBzcGFjZXMgYmV0d2VlbiBicmFja2V0cy5cIn0sb2JqZWN0V3JhcDp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJIb3cgdG8gd3JhcCBvYmplY3QgbGl0ZXJhbHMuXCIsY2hvaWNlczpbe3ZhbHVlOlwicHJlc2VydmVcIixkZXNjcmlwdGlvbjpcIktlZXAgYXMgbXVsdGktbGluZSwgaWYgdGhlcmUgaXMgYSBuZXdsaW5lIGJldHdlZW4gdGhlIG9wZW5pbmcgYnJhY2UgYW5kIGZpcnN0IHByb3BlcnR5LlwifSx7dmFsdWU6XCJjb2xsYXBzZVwiLGRlc2NyaXB0aW9uOlwiRml0IHRvIGEgc2luZ2xlIGxpbmUgd2hlbiBwb3NzaWJsZS5cIn1dfSxzaW5nbGVRdW90ZTp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJVc2Ugc2luZ2xlIHF1b3RlcyBpbnN0ZWFkIG9mIGRvdWJsZSBxdW90ZXMuXCJ9LHByb3NlV3JhcDp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiY2hvaWNlXCIsZGVmYXVsdDpcInByZXNlcnZlXCIsZGVzY3JpcHRpb246XCJIb3cgdG8gd3JhcCBwcm9zZS5cIixjaG9pY2VzOlt7dmFsdWU6XCJhbHdheXNcIixkZXNjcmlwdGlvbjpcIldyYXAgcHJvc2UgaWYgaXQgZXhjZWVkcyB0aGUgcHJpbnQgd2lkdGguXCJ9LHt2YWx1ZTpcIm5ldmVyXCIsZGVzY3JpcHRpb246XCJEbyBub3Qgd3JhcCBwcm9zZS5cIn0se3ZhbHVlOlwicHJlc2VydmVcIixkZXNjcmlwdGlvbjpcIldyYXAgcHJvc2UgYXMtaXMuXCJ9XX0sYnJhY2tldFNhbWVMaW5lOntjYXRlZ29yeTpcIkNvbW1vblwiLHR5cGU6XCJib29sZWFuXCIsZGVmYXVsdDohMSxkZXNjcmlwdGlvbjpcIlB1dCA+IG9mIG9wZW5pbmcgdGFncyBvbiB0aGUgbGFzdCBsaW5lIGluc3RlYWQgb2Ygb24gYSBuZXcgbGluZS5cIn0sc2luZ2xlQXR0cmlidXRlUGVyTGluZTp7Y2F0ZWdvcnk6XCJDb21tb25cIix0eXBlOlwiYm9vbGVhblwiLGRlZmF1bHQ6ITEsZGVzY3JpcHRpb246XCJFbmZvcmNlIHNpbmdsZSBhdHRyaWJ1dGUgcGVyIGxpbmUgaW4gSFRNTCwgVnVlIGFuZCBKU1guXCJ9fTt2YXIgRnQ9e2JyYWNrZXRTcGFjaW5nOlhlLmJyYWNrZXRTcGFjaW5nfSxxZT1GdDt2YXIgTmU9e307eWUoTmUse2dyYXBocWw6KCk9Pm9ufSk7ZnVuY3Rpb24gUWUoZSl7cmV0dXJuIHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbH1mdW5jdGlvbiBIZShlLHQpe2lmKCEhIWUpdGhyb3cgbmV3IEVycm9yKHQ/P1wiVW5leHBlY3RlZCBpbnZhcmlhbnQgdHJpZ2dlcmVkLlwiKX12YXIgd3Q9L1xcclxcbnxbXFxuXFxyXS9nO2Z1bmN0aW9uIFYoZSx0KXtsZXQgbj0wLGk9MTtmb3IobGV0IHIgb2YgZS5ib2R5Lm1hdGNoQWxsKHd0KSl7aWYodHlwZW9mIHIuaW5kZXg9PVwibnVtYmVyXCJ8fEhlKCExKSxyLmluZGV4Pj10KWJyZWFrO249ci5pbmRleCtyWzBdLmxlbmd0aCxpKz0xfXJldHVybntsaW5lOmksY29sdW1uOnQrMS1ufX1mdW5jdGlvbiBLZShlKXtyZXR1cm4gZGUoZS5zb3VyY2UsVihlLnNvdXJjZSxlLnN0YXJ0KSl9ZnVuY3Rpb24gZGUoZSx0KXtsZXQgbj1lLmxvY2F0aW9uT2Zmc2V0LmNvbHVtbi0xLGk9XCJcIi5wYWRTdGFydChuKStlLmJvZHkscj10LmxpbmUtMSxzPWUubG9jYXRpb25PZmZzZXQubGluZS0xLGE9dC5saW5lK3MsdT10LmxpbmU9PT0xP246MCxsPXQuY29sdW1uK3UsVD1gJHtlLm5hbWV9OiR7YX06JHtsfVxuYCxoPWkuc3BsaXQoL1xcclxcbnxbXFxuXFxyXS9nKSxEPWhbcl07aWYoRC5sZW5ndGg+MTIwKXtsZXQgTz1NYXRoLmZsb29yKGwvODApLGFlPWwlODAsTj1bXTtmb3IobGV0IGI9MDtiPEQubGVuZ3RoO2IrPTgwKU4ucHVzaChELnNsaWNlKGIsYis4MCkpO3JldHVybiBUK1dlKFtbYCR7YX0gfGAsTlswXV0sLi4uTi5zbGljZSgxLE8rMSkubWFwKGI9PltcInxcIixiXSksW1wifFwiLFwiXlwiLnBhZFN0YXJ0KGFlKV0sW1wifFwiLE5bTysxXV1dKX1yZXR1cm4gVCtXZShbW2Ake2EtMX0gfGAsaFtyLTFdXSxbYCR7YX0gfGAsRF0sW1wifFwiLFwiXlwiLnBhZFN0YXJ0KGwpXSxbYCR7YSsxfSB8YCxoW3IrMV1dXSl9ZnVuY3Rpb24gV2UoZSl7bGV0IHQ9ZS5maWx0ZXIoKFtpLHJdKT0+ciE9PXZvaWQgMCksbj1NYXRoLm1heCguLi50Lm1hcCgoW2ldKT0+aS5sZW5ndGgpKTtyZXR1cm4gdC5tYXAoKFtpLHJdKT0+aS5wYWRTdGFydChuKSsocj9cIiBcIityOlwiXCIpKS5qb2luKGBcbmApfWZ1bmN0aW9uIEJ0KGUpe2xldCB0PWVbMF07cmV0dXJuIHQ9PW51bGx8fFwia2luZFwiaW4gdHx8XCJsZW5ndGhcImluIHQ/e25vZGVzOnQsc291cmNlOmVbMV0scG9zaXRpb25zOmVbMl0scGF0aDplWzNdLG9yaWdpbmFsRXJyb3I6ZVs0XSxleHRlbnNpb25zOmVbNV19OnR9dmFyIFo9Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQsLi4ubil7dmFyIGkscixzO2xldHtub2RlczphLHNvdXJjZTp1LHBvc2l0aW9uczpsLHBhdGg6VCxvcmlnaW5hbEVycm9yOmgsZXh0ZW5zaW9uczpEfT1CdChuKTtzdXBlcih0KSx0aGlzLm5hbWU9XCJHcmFwaFFMRXJyb3JcIix0aGlzLnBhdGg9VD8/dm9pZCAwLHRoaXMub3JpZ2luYWxFcnJvcj1oPz92b2lkIDAsdGhpcy5ub2Rlcz16ZShBcnJheS5pc0FycmF5KGEpP2E6YT9bYV06dm9pZCAwKTtsZXQgTz16ZSgoaT10aGlzLm5vZGVzKT09PW51bGx8fGk9PT12b2lkIDA/dm9pZCAwOmkubWFwKE49Pk4ubG9jKS5maWx0ZXIoTj0+TiE9bnVsbCkpO3RoaXMuc291cmNlPXU/PyhPPT1udWxsfHwocj1PWzBdKT09PW51bGx8fHI9PT12b2lkIDA/dm9pZCAwOnIuc291cmNlKSx0aGlzLnBvc2l0aW9ucz1sPz8oTz09bnVsbD92b2lkIDA6Ty5tYXAoTj0+Ti5zdGFydCkpLHRoaXMubG9jYXRpb25zPWwmJnU/bC5tYXAoTj0+Vih1LE4pKTpPPT1udWxsP3ZvaWQgMDpPLm1hcChOPT5WKE4uc291cmNlLE4uc3RhcnQpKTtsZXQgYWU9UWUoaD09bnVsbD92b2lkIDA6aC5leHRlbnNpb25zKT9oPT1udWxsP3ZvaWQgMDpoLmV4dGVuc2lvbnM6dm9pZCAwO3RoaXMuZXh0ZW5zaW9ucz0ocz1EPz9hZSkhPT1udWxsJiZzIT09dm9pZCAwP3M6T2JqZWN0LmNyZWF0ZShudWxsKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLHttZXNzYWdlOnt3cml0YWJsZTohMCxlbnVtZXJhYmxlOiEwfSxuYW1lOntlbnVtZXJhYmxlOiExfSxub2Rlczp7ZW51bWVyYWJsZTohMX0sc291cmNlOntlbnVtZXJhYmxlOiExfSxwb3NpdGlvbnM6e2VudW1lcmFibGU6ITF9LG9yaWdpbmFsRXJyb3I6e2VudW1lcmFibGU6ITF9fSksaCE9bnVsbCYmaC5zdGFjaz9PYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YWNrXCIse3ZhbHVlOmguc3RhY2ssd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSk6RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U/RXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyxlKTpPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInN0YWNrXCIse3ZhbHVlOkVycm9yKCkuc3RhY2ssd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfSl9Z2V0W1N5bWJvbC50b1N0cmluZ1RhZ10oKXtyZXR1cm5cIkdyYXBoUUxFcnJvclwifXRvU3RyaW5nKCl7bGV0IHQ9dGhpcy5tZXNzYWdlO2lmKHRoaXMubm9kZXMpZm9yKGxldCBuIG9mIHRoaXMubm9kZXMpbi5sb2MmJih0Kz1gXG5cbmArS2Uobi5sb2MpKTtlbHNlIGlmKHRoaXMuc291cmNlJiZ0aGlzLmxvY2F0aW9ucylmb3IobGV0IG4gb2YgdGhpcy5sb2NhdGlvbnMpdCs9YFxuXG5gK2RlKHRoaXMuc291cmNlLG4pO3JldHVybiB0fXRvSlNPTigpe2xldCB0PXttZXNzYWdlOnRoaXMubWVzc2FnZX07cmV0dXJuIHRoaXMubG9jYXRpb25zIT1udWxsJiYodC5sb2NhdGlvbnM9dGhpcy5sb2NhdGlvbnMpLHRoaXMucGF0aCE9bnVsbCYmKHQucGF0aD10aGlzLnBhdGgpLHRoaXMuZXh0ZW5zaW9ucyE9bnVsbCYmT2JqZWN0LmtleXModGhpcy5leHRlbnNpb25zKS5sZW5ndGg+MCYmKHQuZXh0ZW5zaW9ucz10aGlzLmV4dGVuc2lvbnMpLHR9fTtmdW5jdGlvbiB6ZShlKXtyZXR1cm4gZT09PXZvaWQgMHx8ZS5sZW5ndGg9PT0wP3ZvaWQgMDplfWZ1bmN0aW9uIGQoZSx0LG4pe3JldHVybiBuZXcgWihgU3ludGF4IEVycm9yOiAke259YCx7c291cmNlOmUscG9zaXRpb25zOlt0XX0pfXZhciBlZTsoZnVuY3Rpb24oZSl7ZS5RVUVSWT1cIlFVRVJZXCIsZS5NVVRBVElPTj1cIk1VVEFUSU9OXCIsZS5TVUJTQ1JJUFRJT049XCJTVUJTQ1JJUFRJT05cIixlLkZJRUxEPVwiRklFTERcIixlLkZSQUdNRU5UX0RFRklOSVRJT049XCJGUkFHTUVOVF9ERUZJTklUSU9OXCIsZS5GUkFHTUVOVF9TUFJFQUQ9XCJGUkFHTUVOVF9TUFJFQURcIixlLklOTElORV9GUkFHTUVOVD1cIklOTElORV9GUkFHTUVOVFwiLGUuVkFSSUFCTEVfREVGSU5JVElPTj1cIlZBUklBQkxFX0RFRklOSVRJT05cIixlLlNDSEVNQT1cIlNDSEVNQVwiLGUuU0NBTEFSPVwiU0NBTEFSXCIsZS5PQkpFQ1Q9XCJPQkpFQ1RcIixlLkZJRUxEX0RFRklOSVRJT049XCJGSUVMRF9ERUZJTklUSU9OXCIsZS5BUkdVTUVOVF9ERUZJTklUSU9OPVwiQVJHVU1FTlRfREVGSU5JVElPTlwiLGUuSU5URVJGQUNFPVwiSU5URVJGQUNFXCIsZS5VTklPTj1cIlVOSU9OXCIsZS5FTlVNPVwiRU5VTVwiLGUuRU5VTV9WQUxVRT1cIkVOVU1fVkFMVUVcIixlLklOUFVUX09CSkVDVD1cIklOUFVUX09CSkVDVFwiLGUuSU5QVVRfRklFTERfREVGSU5JVElPTj1cIklOUFVUX0ZJRUxEX0RFRklOSVRJT05cIn0pKGVlfHwoZWU9e30pKTt2YXIgYzsoZnVuY3Rpb24oZSl7ZS5OQU1FPVwiTmFtZVwiLGUuRE9DVU1FTlQ9XCJEb2N1bWVudFwiLGUuT1BFUkFUSU9OX0RFRklOSVRJT049XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsZS5WQVJJQUJMRV9ERUZJTklUSU9OPVwiVmFyaWFibGVEZWZpbml0aW9uXCIsZS5TRUxFQ1RJT05fU0VUPVwiU2VsZWN0aW9uU2V0XCIsZS5GSUVMRD1cIkZpZWxkXCIsZS5BUkdVTUVOVD1cIkFyZ3VtZW50XCIsZS5GUkFHTUVOVF9TUFJFQUQ9XCJGcmFnbWVudFNwcmVhZFwiLGUuSU5MSU5FX0ZSQUdNRU5UPVwiSW5saW5lRnJhZ21lbnRcIixlLkZSQUdNRU5UX0RFRklOSVRJT049XCJGcmFnbWVudERlZmluaXRpb25cIixlLlZBUklBQkxFPVwiVmFyaWFibGVcIixlLklOVD1cIkludFZhbHVlXCIsZS5GTE9BVD1cIkZsb2F0VmFsdWVcIixlLlNUUklORz1cIlN0cmluZ1ZhbHVlXCIsZS5CT09MRUFOPVwiQm9vbGVhblZhbHVlXCIsZS5OVUxMPVwiTnVsbFZhbHVlXCIsZS5FTlVNPVwiRW51bVZhbHVlXCIsZS5MSVNUPVwiTGlzdFZhbHVlXCIsZS5PQkpFQ1Q9XCJPYmplY3RWYWx1ZVwiLGUuT0JKRUNUX0ZJRUxEPVwiT2JqZWN0RmllbGRcIixlLkRJUkVDVElWRT1cIkRpcmVjdGl2ZVwiLGUuTkFNRURfVFlQRT1cIk5hbWVkVHlwZVwiLGUuTElTVF9UWVBFPVwiTGlzdFR5cGVcIixlLk5PTl9OVUxMX1RZUEU9XCJOb25OdWxsVHlwZVwiLGUuU0NIRU1BX0RFRklOSVRJT049XCJTY2hlbWFEZWZpbml0aW9uXCIsZS5PUEVSQVRJT05fVFlQRV9ERUZJTklUSU9OPVwiT3BlcmF0aW9uVHlwZURlZmluaXRpb25cIixlLlNDQUxBUl9UWVBFX0RFRklOSVRJT049XCJTY2FsYXJUeXBlRGVmaW5pdGlvblwiLGUuT0JKRUNUX1RZUEVfREVGSU5JVElPTj1cIk9iamVjdFR5cGVEZWZpbml0aW9uXCIsZS5GSUVMRF9ERUZJTklUSU9OPVwiRmllbGREZWZpbml0aW9uXCIsZS5JTlBVVF9WQUxVRV9ERUZJTklUSU9OPVwiSW5wdXRWYWx1ZURlZmluaXRpb25cIixlLklOVEVSRkFDRV9UWVBFX0RFRklOSVRJT049XCJJbnRlcmZhY2VUeXBlRGVmaW5pdGlvblwiLGUuVU5JT05fVFlQRV9ERUZJTklUSU9OPVwiVW5pb25UeXBlRGVmaW5pdGlvblwiLGUuRU5VTV9UWVBFX0RFRklOSVRJT049XCJFbnVtVHlwZURlZmluaXRpb25cIixlLkVOVU1fVkFMVUVfREVGSU5JVElPTj1cIkVudW1WYWx1ZURlZmluaXRpb25cIixlLklOUFVUX09CSkVDVF9UWVBFX0RFRklOSVRJT049XCJJbnB1dE9iamVjdFR5cGVEZWZpbml0aW9uXCIsZS5ESVJFQ1RJVkVfREVGSU5JVElPTj1cIkRpcmVjdGl2ZURlZmluaXRpb25cIixlLlNDSEVNQV9FWFRFTlNJT049XCJTY2hlbWFFeHRlbnNpb25cIixlLlNDQUxBUl9UWVBFX0VYVEVOU0lPTj1cIlNjYWxhclR5cGVFeHRlbnNpb25cIixlLk9CSkVDVF9UWVBFX0VYVEVOU0lPTj1cIk9iamVjdFR5cGVFeHRlbnNpb25cIixlLklOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTj1cIkludGVyZmFjZVR5cGVFeHRlbnNpb25cIixlLlVOSU9OX1RZUEVfRVhURU5TSU9OPVwiVW5pb25UeXBlRXh0ZW5zaW9uXCIsZS5FTlVNX1RZUEVfRVhURU5TSU9OPVwiRW51bVR5cGVFeHRlbnNpb25cIixlLklOUFVUX09CSkVDVF9UWVBFX0VYVEVOU0lPTj1cIklucHV0T2JqZWN0VHlwZUV4dGVuc2lvblwifSkoY3x8KGM9e30pKTtmdW5jdGlvbiBaZShlKXtyZXR1cm4gZT09PTl8fGU9PT0zMn1mdW5jdGlvbiBSKGUpe3JldHVybiBlPj00OCYmZTw9NTd9ZnVuY3Rpb24gZXQoZSl7cmV0dXJuIGU+PTk3JiZlPD0xMjJ8fGU+PTY1JiZlPD05MH1mdW5jdGlvbiBtZShlKXtyZXR1cm4gZXQoZSl8fGU9PT05NX1mdW5jdGlvbiB0dChlKXtyZXR1cm4gZXQoZSl8fFIoZSl8fGU9PT05NX1mdW5jdGlvbiBudChlKXt2YXIgdDtsZXQgbj1OdW1iZXIuTUFYX1NBRkVfSU5URUdFUixpPW51bGwscj0tMTtmb3IobGV0IGE9MDthPGUubGVuZ3RoOysrYSl7dmFyIHM7bGV0IHU9ZVthXSxsPVV0KHUpO2whPT11Lmxlbmd0aCYmKGk9KHM9aSkhPT1udWxsJiZzIT09dm9pZCAwP3M6YSxyPWEsYSE9PTAmJmw8biYmKG49bCkpfXJldHVybiBlLm1hcCgoYSx1KT0+dT09PTA/YTphLnNsaWNlKG4pKS5zbGljZSgodD1pKSE9PW51bGwmJnQhPT12b2lkIDA/dDowLHIrMSl9ZnVuY3Rpb24gVXQoZSl7bGV0IHQ9MDtmb3IoO3Q8ZS5sZW5ndGgmJlplKGUuY2hhckNvZGVBdCh0KSk7KSsrdDtyZXR1cm4gdH12YXIgbzsoZnVuY3Rpb24oZSl7ZS5TT0Y9XCI8U09GPlwiLGUuRU9GPVwiPEVPRj5cIixlLkJBTkc9XCIhXCIsZS5ET0xMQVI9XCIkXCIsZS5BTVA9XCImXCIsZS5QQVJFTl9MPVwiKFwiLGUuUEFSRU5fUj1cIilcIixlLlNQUkVBRD1cIi4uLlwiLGUuQ09MT049XCI6XCIsZS5FUVVBTFM9XCI9XCIsZS5BVD1cIkBcIixlLkJSQUNLRVRfTD1cIltcIixlLkJSQUNLRVRfUj1cIl1cIixlLkJSQUNFX0w9XCJ7XCIsZS5QSVBFPVwifFwiLGUuQlJBQ0VfUj1cIn1cIixlLk5BTUU9XCJOYW1lXCIsZS5JTlQ9XCJJbnRcIixlLkZMT0FUPVwiRmxvYXRcIixlLlNUUklORz1cIlN0cmluZ1wiLGUuQkxPQ0tfU1RSSU5HPVwiQmxvY2tTdHJpbmdcIixlLkNPTU1FTlQ9XCJDb21tZW50XCJ9KShvfHwobz17fSkpO3ZhciB0ZT1jbGFzc3tjb25zdHJ1Y3Rvcih0KXtsZXQgbj1uZXcgVShvLlNPRiwwLDAsMCwwKTt0aGlzLnNvdXJjZT10LHRoaXMubGFzdFRva2VuPW4sdGhpcy50b2tlbj1uLHRoaXMubGluZT0xLHRoaXMubGluZVN0YXJ0PTB9Z2V0W1N5bWJvbC50b1N0cmluZ1RhZ10oKXtyZXR1cm5cIkxleGVyXCJ9YWR2YW5jZSgpe3JldHVybiB0aGlzLmxhc3RUb2tlbj10aGlzLnRva2VuLHRoaXMudG9rZW49dGhpcy5sb29rYWhlYWQoKX1sb29rYWhlYWQoKXtsZXQgdD10aGlzLnRva2VuO2lmKHQua2luZCE9PW8uRU9GKWRvIGlmKHQubmV4dCl0PXQubmV4dDtlbHNle2xldCBuPVZ0KHRoaXMsdC5lbmQpO3QubmV4dD1uLG4ucHJldj10LHQ9bn13aGlsZSh0LmtpbmQ9PT1vLkNPTU1FTlQpO3JldHVybiB0fX07ZnVuY3Rpb24gaXQoZSl7cmV0dXJuIGU9PT1vLkJBTkd8fGU9PT1vLkRPTExBUnx8ZT09PW8uQU1QfHxlPT09by5QQVJFTl9MfHxlPT09by5QQVJFTl9SfHxlPT09by5TUFJFQUR8fGU9PT1vLkNPTE9OfHxlPT09by5FUVVBTFN8fGU9PT1vLkFUfHxlPT09by5CUkFDS0VUX0x8fGU9PT1vLkJSQUNLRVRfUnx8ZT09PW8uQlJBQ0VfTHx8ZT09PW8uUElQRXx8ZT09PW8uQlJBQ0VfUn1mdW5jdGlvbiBQKGUpe3JldHVybiBlPj0wJiZlPD01NTI5NXx8ZT49NTczNDQmJmU8PTExMTQxMTF9ZnVuY3Rpb24gbmUoZSx0KXtyZXR1cm4gc3QoZS5jaGFyQ29kZUF0KHQpKSYmb3QoZS5jaGFyQ29kZUF0KHQrMSkpfWZ1bmN0aW9uIHN0KGUpe3JldHVybiBlPj01NTI5NiYmZTw9NTYzMTl9ZnVuY3Rpb24gb3QoZSl7cmV0dXJuIGU+PTU2MzIwJiZlPD01NzM0M31mdW5jdGlvbiB2KGUsdCl7bGV0IG49ZS5zb3VyY2UuYm9keS5jb2RlUG9pbnRBdCh0KTtpZihuPT09dm9pZCAwKXJldHVybiBvLkVPRjtpZihuPj0zMiYmbjw9MTI2KXtsZXQgaT1TdHJpbmcuZnJvbUNvZGVQb2ludChuKTtyZXR1cm4gaT09PSdcIic/YCdcIidgOmBcIiR7aX1cImB9cmV0dXJuXCJVK1wiK24udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkucGFkU3RhcnQoNCxcIjBcIil9ZnVuY3Rpb24gbShlLHQsbixpLHIpe2xldCBzPWUubGluZSxhPTErbi1lLmxpbmVTdGFydDtyZXR1cm4gbmV3IFUodCxuLGkscyxhLHIpfWZ1bmN0aW9uIFZ0KGUsdCl7bGV0IG49ZS5zb3VyY2UuYm9keSxpPW4ubGVuZ3RoLHI9dDtmb3IoO3I8aTspe2xldCBzPW4uY2hhckNvZGVBdChyKTtzd2l0Y2gocyl7Y2FzZSA2NTI3OTpjYXNlIDk6Y2FzZSAzMjpjYXNlIDQ0Oisrcjtjb250aW51ZTtjYXNlIDEwOisrciwrK2UubGluZSxlLmxpbmVTdGFydD1yO2NvbnRpbnVlO2Nhc2UgMTM6bi5jaGFyQ29kZUF0KHIrMSk9PT0xMD9yKz0yOisrciwrK2UubGluZSxlLmxpbmVTdGFydD1yO2NvbnRpbnVlO2Nhc2UgMzU6cmV0dXJuIFl0KGUscik7Y2FzZSAzMzpyZXR1cm4gbShlLG8uQkFORyxyLHIrMSk7Y2FzZSAzNjpyZXR1cm4gbShlLG8uRE9MTEFSLHIscisxKTtjYXNlIDM4OnJldHVybiBtKGUsby5BTVAscixyKzEpO2Nhc2UgNDA6cmV0dXJuIG0oZSxvLlBBUkVOX0wscixyKzEpO2Nhc2UgNDE6cmV0dXJuIG0oZSxvLlBBUkVOX1IscixyKzEpO2Nhc2UgNDY6aWYobi5jaGFyQ29kZUF0KHIrMSk9PT00NiYmbi5jaGFyQ29kZUF0KHIrMik9PT00NilyZXR1cm4gbShlLG8uU1BSRUFELHIsciszKTticmVhaztjYXNlIDU4OnJldHVybiBtKGUsby5DT0xPTixyLHIrMSk7Y2FzZSA2MTpyZXR1cm4gbShlLG8uRVFVQUxTLHIscisxKTtjYXNlIDY0OnJldHVybiBtKGUsby5BVCxyLHIrMSk7Y2FzZSA5MTpyZXR1cm4gbShlLG8uQlJBQ0tFVF9MLHIscisxKTtjYXNlIDkzOnJldHVybiBtKGUsby5CUkFDS0VUX1IscixyKzEpO2Nhc2UgMTIzOnJldHVybiBtKGUsby5CUkFDRV9MLHIscisxKTtjYXNlIDEyNDpyZXR1cm4gbShlLG8uUElQRSxyLHIrMSk7Y2FzZSAxMjU6cmV0dXJuIG0oZSxvLkJSQUNFX1IscixyKzEpO2Nhc2UgMzQ6cmV0dXJuIG4uY2hhckNvZGVBdChyKzEpPT09MzQmJm4uY2hhckNvZGVBdChyKzIpPT09MzQ/WHQoZSxyKTpqdChlLHIpfWlmKFIocyl8fHM9PT00NSlyZXR1cm4gTXQoZSxyLHMpO2lmKG1lKHMpKXJldHVybiBxdChlLHIpO3Rocm93IGQoZS5zb3VyY2UscixzPT09Mzk/YFVuZXhwZWN0ZWQgc2luZ2xlIHF1b3RlIGNoYXJhY3RlciAoJyksIGRpZCB5b3UgbWVhbiB0byB1c2UgYSBkb3VibGUgcXVvdGUgKFwiKT9gOlAocyl8fG5lKG4scik/YFVuZXhwZWN0ZWQgY2hhcmFjdGVyOiAke3YoZSxyKX0uYDpgSW52YWxpZCBjaGFyYWN0ZXI6ICR7dihlLHIpfS5gKX1yZXR1cm4gbShlLG8uRU9GLGksaSl9ZnVuY3Rpb24gWXQoZSx0KXtsZXQgbj1lLnNvdXJjZS5ib2R5LGk9bi5sZW5ndGgscj10KzE7Zm9yKDtyPGk7KXtsZXQgcz1uLmNoYXJDb2RlQXQocik7aWYocz09PTEwfHxzPT09MTMpYnJlYWs7aWYoUChzKSkrK3I7ZWxzZSBpZihuZShuLHIpKXIrPTI7ZWxzZSBicmVha31yZXR1cm4gbShlLG8uQ09NTUVOVCx0LHIsbi5zbGljZSh0KzEscikpfWZ1bmN0aW9uIE10KGUsdCxuKXtsZXQgaT1lLnNvdXJjZS5ib2R5LHI9dCxzPW4sYT0hMTtpZihzPT09NDUmJihzPWkuY2hhckNvZGVBdCgrK3IpKSxzPT09NDgpe2lmKHM9aS5jaGFyQ29kZUF0KCsrciksUihzKSl0aHJvdyBkKGUuc291cmNlLHIsYEludmFsaWQgbnVtYmVyLCB1bmV4cGVjdGVkIGRpZ2l0IGFmdGVyIDA6ICR7dihlLHIpfS5gKX1lbHNlIHI9RWUoZSxyLHMpLHM9aS5jaGFyQ29kZUF0KHIpO2lmKHM9PT00NiYmKGE9ITAscz1pLmNoYXJDb2RlQXQoKytyKSxyPUVlKGUscixzKSxzPWkuY2hhckNvZGVBdChyKSksKHM9PT02OXx8cz09PTEwMSkmJihhPSEwLHM9aS5jaGFyQ29kZUF0KCsrciksKHM9PT00M3x8cz09PTQ1KSYmKHM9aS5jaGFyQ29kZUF0KCsrcikpLHI9RWUoZSxyLHMpLHM9aS5jaGFyQ29kZUF0KHIpKSxzPT09NDZ8fG1lKHMpKXRocm93IGQoZS5zb3VyY2UscixgSW52YWxpZCBudW1iZXIsIGV4cGVjdGVkIGRpZ2l0IGJ1dCBnb3Q6ICR7dihlLHIpfS5gKTtyZXR1cm4gbShlLGE/by5GTE9BVDpvLklOVCx0LHIsaS5zbGljZSh0LHIpKX1mdW5jdGlvbiBFZShlLHQsbil7aWYoIVIobikpdGhyb3cgZChlLnNvdXJjZSx0LGBJbnZhbGlkIG51bWJlciwgZXhwZWN0ZWQgZGlnaXQgYnV0IGdvdDogJHt2KGUsdCl9LmApO2xldCBpPWUuc291cmNlLmJvZHkscj10KzE7Zm9yKDtSKGkuY2hhckNvZGVBdChyKSk7KSsrcjtyZXR1cm4gcn1mdW5jdGlvbiBqdChlLHQpe2xldCBuPWUuc291cmNlLmJvZHksaT1uLmxlbmd0aCxyPXQrMSxzPXIsYT1cIlwiO2Zvcig7cjxpOyl7bGV0IHU9bi5jaGFyQ29kZUF0KHIpO2lmKHU9PT0zNClyZXR1cm4gYSs9bi5zbGljZShzLHIpLG0oZSxvLlNUUklORyx0LHIrMSxhKTtpZih1PT09OTIpe2ErPW4uc2xpY2UocyxyKTtsZXQgbD1uLmNoYXJDb2RlQXQocisxKT09PTExNz9uLmNoYXJDb2RlQXQocisyKT09PTEyMz9HdChlLHIpOiR0KGUscik6SnQoZSxyKTthKz1sLnZhbHVlLHIrPWwuc2l6ZSxzPXI7Y29udGludWV9aWYodT09PTEwfHx1PT09MTMpYnJlYWs7aWYoUCh1KSkrK3I7ZWxzZSBpZihuZShuLHIpKXIrPTI7ZWxzZSB0aHJvdyBkKGUuc291cmNlLHIsYEludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6ICR7dihlLHIpfS5gKX10aHJvdyBkKGUuc291cmNlLHIsXCJVbnRlcm1pbmF0ZWQgc3RyaW5nLlwiKX1mdW5jdGlvbiBHdChlLHQpe2xldCBuPWUuc291cmNlLmJvZHksaT0wLHI9Mztmb3IoO3I8MTI7KXtsZXQgcz1uLmNoYXJDb2RlQXQodCtyKyspO2lmKHM9PT0xMjUpe2lmKHI8NXx8IVAoaSkpYnJlYWs7cmV0dXJue3ZhbHVlOlN0cmluZy5mcm9tQ29kZVBvaW50KGkpLHNpemU6cn19aWYoaT1pPDw0fFkocyksaTwwKWJyZWFrfXRocm93IGQoZS5zb3VyY2UsdCxgSW52YWxpZCBVbmljb2RlIGVzY2FwZSBzZXF1ZW5jZTogXCIke24uc2xpY2UodCx0K3IpfVwiLmApfWZ1bmN0aW9uICR0KGUsdCl7bGV0IG49ZS5zb3VyY2UuYm9keSxpPXJ0KG4sdCsyKTtpZihQKGkpKXJldHVybnt2YWx1ZTpTdHJpbmcuZnJvbUNvZGVQb2ludChpKSxzaXplOjZ9O2lmKHN0KGkpJiZuLmNoYXJDb2RlQXQodCs2KT09PTkyJiZuLmNoYXJDb2RlQXQodCs3KT09PTExNyl7bGV0IHI9cnQobix0KzgpO2lmKG90KHIpKXJldHVybnt2YWx1ZTpTdHJpbmcuZnJvbUNvZGVQb2ludChpLHIpLHNpemU6MTJ9fXRocm93IGQoZS5zb3VyY2UsdCxgSW52YWxpZCBVbmljb2RlIGVzY2FwZSBzZXF1ZW5jZTogXCIke24uc2xpY2UodCx0KzYpfVwiLmApfWZ1bmN0aW9uIHJ0KGUsdCl7cmV0dXJuIFkoZS5jaGFyQ29kZUF0KHQpKTw8MTJ8WShlLmNoYXJDb2RlQXQodCsxKSk8PDh8WShlLmNoYXJDb2RlQXQodCsyKSk8PDR8WShlLmNoYXJDb2RlQXQodCszKSl9ZnVuY3Rpb24gWShlKXtyZXR1cm4gZT49NDgmJmU8PTU3P2UtNDg6ZT49NjUmJmU8PTcwP2UtNTU6ZT49OTcmJmU8PTEwMj9lLTg3Oi0xfWZ1bmN0aW9uIEp0KGUsdCl7bGV0IG49ZS5zb3VyY2UuYm9keTtzd2l0Y2gobi5jaGFyQ29kZUF0KHQrMSkpe2Nhc2UgMzQ6cmV0dXJue3ZhbHVlOidcIicsc2l6ZToyfTtjYXNlIDkyOnJldHVybnt2YWx1ZTpcIlxcXFxcIixzaXplOjJ9O2Nhc2UgNDc6cmV0dXJue3ZhbHVlOlwiL1wiLHNpemU6Mn07Y2FzZSA5ODpyZXR1cm57dmFsdWU6XCJcXGJcIixzaXplOjJ9O2Nhc2UgMTAyOnJldHVybnt2YWx1ZTpcIlxcZlwiLHNpemU6Mn07Y2FzZSAxMTA6cmV0dXJue3ZhbHVlOmBcbmAsc2l6ZToyfTtjYXNlIDExNDpyZXR1cm57dmFsdWU6XCJcXHJcIixzaXplOjJ9O2Nhc2UgMTE2OnJldHVybnt2YWx1ZTpcIlx0XCIsc2l6ZToyfX10aHJvdyBkKGUuc291cmNlLHQsYEludmFsaWQgY2hhcmFjdGVyIGVzY2FwZSBzZXF1ZW5jZTogXCIke24uc2xpY2UodCx0KzIpfVwiLmApfWZ1bmN0aW9uIFh0KGUsdCl7bGV0IG49ZS5zb3VyY2UuYm9keSxpPW4ubGVuZ3RoLHI9ZS5saW5lU3RhcnQscz10KzMsYT1zLHU9XCJcIixsPVtdO2Zvcig7czxpOyl7bGV0IFQ9bi5jaGFyQ29kZUF0KHMpO2lmKFQ9PT0zNCYmbi5jaGFyQ29kZUF0KHMrMSk9PT0zNCYmbi5jaGFyQ29kZUF0KHMrMik9PT0zNCl7dSs9bi5zbGljZShhLHMpLGwucHVzaCh1KTtsZXQgaD1tKGUsby5CTE9DS19TVFJJTkcsdCxzKzMsbnQobCkuam9pbihgXG5gKSk7cmV0dXJuIGUubGluZSs9bC5sZW5ndGgtMSxlLmxpbmVTdGFydD1yLGh9aWYoVD09PTkyJiZuLmNoYXJDb2RlQXQocysxKT09PTM0JiZuLmNoYXJDb2RlQXQocysyKT09PTM0JiZuLmNoYXJDb2RlQXQocyszKT09PTM0KXt1Kz1uLnNsaWNlKGEscyksYT1zKzEscys9NDtjb250aW51ZX1pZihUPT09MTB8fFQ9PT0xMyl7dSs9bi5zbGljZShhLHMpLGwucHVzaCh1KSxUPT09MTMmJm4uY2hhckNvZGVBdChzKzEpPT09MTA/cys9MjorK3MsdT1cIlwiLGE9cyxyPXM7Y29udGludWV9aWYoUChUKSkrK3M7ZWxzZSBpZihuZShuLHMpKXMrPTI7ZWxzZSB0aHJvdyBkKGUuc291cmNlLHMsYEludmFsaWQgY2hhcmFjdGVyIHdpdGhpbiBTdHJpbmc6ICR7dihlLHMpfS5gKX10aHJvdyBkKGUuc291cmNlLHMsXCJVbnRlcm1pbmF0ZWQgc3RyaW5nLlwiKX1mdW5jdGlvbiBxdChlLHQpe2xldCBuPWUuc291cmNlLmJvZHksaT1uLmxlbmd0aCxyPXQrMTtmb3IoO3I8aTspe2xldCBzPW4uY2hhckNvZGVBdChyKTtpZih0dChzKSkrK3I7ZWxzZSBicmVha31yZXR1cm4gbShlLG8uTkFNRSx0LHIsbi5zbGljZSh0LHIpKX1mdW5jdGlvbiByZShlLHQpe2lmKCEhIWUpdGhyb3cgbmV3IEVycm9yKHQpfWZ1bmN0aW9uIGllKGUpe3JldHVybiBzZShlLFtdKX1mdW5jdGlvbiBzZShlLHQpe3N3aXRjaCh0eXBlb2YgZSl7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpO2Nhc2VcImZ1bmN0aW9uXCI6cmV0dXJuIGUubmFtZT9gW2Z1bmN0aW9uICR7ZS5uYW1lfV1gOlwiW2Z1bmN0aW9uXVwiO2Nhc2VcIm9iamVjdFwiOnJldHVybiBRdChlLHQpO2RlZmF1bHQ6cmV0dXJuIFN0cmluZyhlKX19ZnVuY3Rpb24gUXQoZSx0KXtpZihlPT09bnVsbClyZXR1cm5cIm51bGxcIjtpZih0LmluY2x1ZGVzKGUpKXJldHVyblwiW0NpcmN1bGFyXVwiO2xldCBuPVsuLi50LGVdO2lmKEh0KGUpKXtsZXQgaT1lLnRvSlNPTigpO2lmKGkhPT1lKXJldHVybiB0eXBlb2YgaT09XCJzdHJpbmdcIj9pOnNlKGksbil9ZWxzZSBpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBLdChlLG4pO3JldHVybiBXdChlLG4pfWZ1bmN0aW9uIEh0KGUpe3JldHVybiB0eXBlb2YgZS50b0pTT049PVwiZnVuY3Rpb25cIn1mdW5jdGlvbiBXdChlLHQpe2xldCBuPU9iamVjdC5lbnRyaWVzKGUpO3JldHVybiBuLmxlbmd0aD09PTA/XCJ7fVwiOnQubGVuZ3RoPjI/XCJbXCIrenQoZSkrXCJdXCI6XCJ7IFwiK24ubWFwKChbcixzXSk9PnIrXCI6IFwiK3NlKHMsdCkpLmpvaW4oXCIsIFwiKStcIiB9XCJ9ZnVuY3Rpb24gS3QoZSx0KXtpZihlLmxlbmd0aD09PTApcmV0dXJuXCJbXVwiO2lmKHQubGVuZ3RoPjIpcmV0dXJuXCJbQXJyYXldXCI7bGV0IG49TWF0aC5taW4oMTAsZS5sZW5ndGgpLGk9ZS5sZW5ndGgtbixyPVtdO2ZvcihsZXQgcz0wO3M8bjsrK3Mpci5wdXNoKHNlKGVbc10sdCkpO3JldHVybiBpPT09MT9yLnB1c2goXCIuLi4gMSBtb3JlIGl0ZW1cIik6aT4xJiZyLnB1c2goYC4uLiAke2l9IG1vcmUgaXRlbXNgKSxcIltcIityLmpvaW4oXCIsIFwiKStcIl1cIn1mdW5jdGlvbiB6dChlKXtsZXQgdD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkucmVwbGFjZSgvXlxcW29iamVjdCAvLFwiXCIpLnJlcGxhY2UoL10kLyxcIlwiKTtpZih0PT09XCJPYmplY3RcIiYmdHlwZW9mIGUuY29uc3RydWN0b3I9PVwiZnVuY3Rpb25cIil7bGV0IG49ZS5jb25zdHJ1Y3Rvci5uYW1lO2lmKHR5cGVvZiBuPT1cInN0cmluZ1wiJiZuIT09XCJcIilyZXR1cm4gbn1yZXR1cm4gdH12YXIgWnQ9Z2xvYmFsVGhpcy5wcm9jZXNzJiYhMCxhdD1adD9mdW5jdGlvbih0LG4pe3JldHVybiB0IGluc3RhbmNlb2Ygbn06ZnVuY3Rpb24odCxuKXtpZih0IGluc3RhbmNlb2YgbilyZXR1cm4hMDtpZih0eXBlb2YgdD09XCJvYmplY3RcIiYmdCE9PW51bGwpe3ZhciBpO2xldCByPW4ucHJvdG90eXBlW1N5bWJvbC50b1N0cmluZ1RhZ10scz1TeW1ib2wudG9TdHJpbmdUYWcgaW4gdD90W1N5bWJvbC50b1N0cmluZ1RhZ106KGk9dC5jb25zdHJ1Y3Rvcik9PT1udWxsfHxpPT09dm9pZCAwP3ZvaWQgMDppLm5hbWU7aWYocj09PXMpe2xldCBhPWllKHQpO3Rocm93IG5ldyBFcnJvcihgQ2Fubm90IHVzZSAke3J9IFwiJHthfVwiIGZyb20gYW5vdGhlciBtb2R1bGUgb3IgcmVhbG0uXG5cbkVuc3VyZSB0aGF0IHRoZXJlIGlzIG9ubHkgb25lIGluc3RhbmNlIG9mIFwiZ3JhcGhxbFwiIGluIHRoZSBub2RlX21vZHVsZXNcbmRpcmVjdG9yeS4gSWYgZGlmZmVyZW50IHZlcnNpb25zIG9mIFwiZ3JhcGhxbFwiIGFyZSB0aGUgZGVwZW5kZW5jaWVzIG9mIG90aGVyXG5yZWxpZWQgb24gbW9kdWxlcywgdXNlIFwicmVzb2x1dGlvbnNcIiB0byBlbnN1cmUgb25seSBvbmUgdmVyc2lvbiBpcyBpbnN0YWxsZWQuXG5cbmh0dHBzOi8veWFybnBrZy5jb20vZW4vZG9jcy9zZWxlY3RpdmUtdmVyc2lvbi1yZXNvbHV0aW9uc1xuXG5EdXBsaWNhdGUgXCJncmFwaHFsXCIgbW9kdWxlcyBjYW5ub3QgYmUgdXNlZCBhdCB0aGUgc2FtZSB0aW1lIHNpbmNlIGRpZmZlcmVudFxudmVyc2lvbnMgbWF5IGhhdmUgZGlmZmVyZW50IGNhcGFiaWxpdGllcyBhbmQgYmVoYXZpb3IuIFRoZSBkYXRhIGZyb20gb25lXG52ZXJzaW9uIHVzZWQgaW4gdGhlIGZ1bmN0aW9uIGZyb20gYW5vdGhlciBjb3VsZCBwcm9kdWNlIGNvbmZ1c2luZyBhbmRcbnNwdXJpb3VzIHJlc3VsdHMuYCl9fXJldHVybiExfTt2YXIgTT1jbGFzc3tjb25zdHJ1Y3Rvcih0LG49XCJHcmFwaFFMIHJlcXVlc3RcIixpPXtsaW5lOjEsY29sdW1uOjF9KXt0eXBlb2YgdD09XCJzdHJpbmdcInx8cmUoITEsYEJvZHkgbXVzdCBiZSBhIHN0cmluZy4gUmVjZWl2ZWQ6ICR7aWUodCl9LmApLHRoaXMuYm9keT10LHRoaXMubmFtZT1uLHRoaXMubG9jYXRpb25PZmZzZXQ9aSx0aGlzLmxvY2F0aW9uT2Zmc2V0LmxpbmU+MHx8cmUoITEsXCJsaW5lIGluIGxvY2F0aW9uT2Zmc2V0IGlzIDEtaW5kZXhlZCBhbmQgbXVzdCBiZSBwb3NpdGl2ZS5cIiksdGhpcy5sb2NhdGlvbk9mZnNldC5jb2x1bW4+MHx8cmUoITEsXCJjb2x1bW4gaW4gbG9jYXRpb25PZmZzZXQgaXMgMS1pbmRleGVkIGFuZCBtdXN0IGJlIHBvc2l0aXZlLlwiKX1nZXRbU3ltYm9sLnRvU3RyaW5nVGFnXSgpe3JldHVyblwiU291cmNlXCJ9fTtmdW5jdGlvbiBjdChlKXtyZXR1cm4gYXQoZSxNKX1mdW5jdGlvbiB1dChlLHQpe2xldCBuPW5ldyBUZShlLHQpLGk9bi5wYXJzZURvY3VtZW50KCk7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwidG9rZW5Db3VudFwiLHtlbnVtZXJhYmxlOiExLHZhbHVlOm4udG9rZW5Db3VudH0pLGl9dmFyIFRlPWNsYXNze2NvbnN0cnVjdG9yKHQsbj17fSl7bGV0IGk9Y3QodCk/dDpuZXcgTSh0KTt0aGlzLl9sZXhlcj1uZXcgdGUoaSksdGhpcy5fb3B0aW9ucz1uLHRoaXMuX3Rva2VuQ291bnRlcj0wfWdldCB0b2tlbkNvdW50KCl7cmV0dXJuIHRoaXMuX3Rva2VuQ291bnRlcn1wYXJzZU5hbWUoKXtsZXQgdD10aGlzLmV4cGVjdFRva2VuKG8uTkFNRSk7cmV0dXJuIHRoaXMubm9kZSh0LHtraW5kOmMuTkFNRSx2YWx1ZTp0LnZhbHVlfSl9cGFyc2VEb2N1bWVudCgpe3JldHVybiB0aGlzLm5vZGUodGhpcy5fbGV4ZXIudG9rZW4se2tpbmQ6Yy5ET0NVTUVOVCxkZWZpbml0aW9uczp0aGlzLm1hbnkoby5TT0YsdGhpcy5wYXJzZURlZmluaXRpb24sby5FT0YpfSl9cGFyc2VEZWZpbml0aW9uKCl7aWYodGhpcy5wZWVrKG8uQlJBQ0VfTCkpcmV0dXJuIHRoaXMucGFyc2VPcGVyYXRpb25EZWZpbml0aW9uKCk7bGV0IHQ9dGhpcy5wZWVrRGVzY3JpcHRpb24oKSxuPXQ/dGhpcy5fbGV4ZXIubG9va2FoZWFkKCk6dGhpcy5fbGV4ZXIudG9rZW47aWYobi5raW5kPT09by5OQU1FKXtzd2l0Y2gobi52YWx1ZSl7Y2FzZVwic2NoZW1hXCI6cmV0dXJuIHRoaXMucGFyc2VTY2hlbWFEZWZpbml0aW9uKCk7Y2FzZVwic2NhbGFyXCI6cmV0dXJuIHRoaXMucGFyc2VTY2FsYXJUeXBlRGVmaW5pdGlvbigpO2Nhc2VcInR5cGVcIjpyZXR1cm4gdGhpcy5wYXJzZU9iamVjdFR5cGVEZWZpbml0aW9uKCk7Y2FzZVwiaW50ZXJmYWNlXCI6cmV0dXJuIHRoaXMucGFyc2VJbnRlcmZhY2VUeXBlRGVmaW5pdGlvbigpO2Nhc2VcInVuaW9uXCI6cmV0dXJuIHRoaXMucGFyc2VVbmlvblR5cGVEZWZpbml0aW9uKCk7Y2FzZVwiZW51bVwiOnJldHVybiB0aGlzLnBhcnNlRW51bVR5cGVEZWZpbml0aW9uKCk7Y2FzZVwiaW5wdXRcIjpyZXR1cm4gdGhpcy5wYXJzZUlucHV0T2JqZWN0VHlwZURlZmluaXRpb24oKTtjYXNlXCJkaXJlY3RpdmVcIjpyZXR1cm4gdGhpcy5wYXJzZURpcmVjdGl2ZURlZmluaXRpb24oKX1pZih0KXRocm93IGQodGhpcy5fbGV4ZXIuc291cmNlLHRoaXMuX2xleGVyLnRva2VuLnN0YXJ0LFwiVW5leHBlY3RlZCBkZXNjcmlwdGlvbiwgZGVzY3JpcHRpb25zIGFyZSBzdXBwb3J0ZWQgb25seSBvbiB0eXBlIGRlZmluaXRpb25zLlwiKTtzd2l0Y2gobi52YWx1ZSl7Y2FzZVwicXVlcnlcIjpjYXNlXCJtdXRhdGlvblwiOmNhc2VcInN1YnNjcmlwdGlvblwiOnJldHVybiB0aGlzLnBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpO2Nhc2VcImZyYWdtZW50XCI6cmV0dXJuIHRoaXMucGFyc2VGcmFnbWVudERlZmluaXRpb24oKTtjYXNlXCJleHRlbmRcIjpyZXR1cm4gdGhpcy5wYXJzZVR5cGVTeXN0ZW1FeHRlbnNpb24oKX19dGhyb3cgdGhpcy51bmV4cGVjdGVkKG4pfXBhcnNlT3BlcmF0aW9uRGVmaW5pdGlvbigpe2xldCB0PXRoaXMuX2xleGVyLnRva2VuO2lmKHRoaXMucGVlayhvLkJSQUNFX0wpKXJldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLk9QRVJBVElPTl9ERUZJTklUSU9OLG9wZXJhdGlvbjpTLlFVRVJZLG5hbWU6dm9pZCAwLHZhcmlhYmxlRGVmaW5pdGlvbnM6W10sZGlyZWN0aXZlczpbXSxzZWxlY3Rpb25TZXQ6dGhpcy5wYXJzZVNlbGVjdGlvblNldCgpfSk7bGV0IG49dGhpcy5wYXJzZU9wZXJhdGlvblR5cGUoKSxpO3JldHVybiB0aGlzLnBlZWsoby5OQU1FKSYmKGk9dGhpcy5wYXJzZU5hbWUoKSksdGhpcy5ub2RlKHQse2tpbmQ6Yy5PUEVSQVRJT05fREVGSU5JVElPTixvcGVyYXRpb246bixuYW1lOmksdmFyaWFibGVEZWZpbml0aW9uczp0aGlzLnBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpLGRpcmVjdGl2ZXM6dGhpcy5wYXJzZURpcmVjdGl2ZXMoITEpLHNlbGVjdGlvblNldDp0aGlzLnBhcnNlU2VsZWN0aW9uU2V0KCl9KX1wYXJzZU9wZXJhdGlvblR5cGUoKXtsZXQgdD10aGlzLmV4cGVjdFRva2VuKG8uTkFNRSk7c3dpdGNoKHQudmFsdWUpe2Nhc2VcInF1ZXJ5XCI6cmV0dXJuIFMuUVVFUlk7Y2FzZVwibXV0YXRpb25cIjpyZXR1cm4gUy5NVVRBVElPTjtjYXNlXCJzdWJzY3JpcHRpb25cIjpyZXR1cm4gUy5TVUJTQ1JJUFRJT059dGhyb3cgdGhpcy51bmV4cGVjdGVkKHQpfXBhcnNlVmFyaWFibGVEZWZpbml0aW9ucygpe3JldHVybiB0aGlzLm9wdGlvbmFsTWFueShvLlBBUkVOX0wsdGhpcy5wYXJzZVZhcmlhYmxlRGVmaW5pdGlvbixvLlBBUkVOX1IpfXBhcnNlVmFyaWFibGVEZWZpbml0aW9uKCl7cmV0dXJuIHRoaXMubm9kZSh0aGlzLl9sZXhlci50b2tlbix7a2luZDpjLlZBUklBQkxFX0RFRklOSVRJT04sdmFyaWFibGU6dGhpcy5wYXJzZVZhcmlhYmxlKCksdHlwZToodGhpcy5leHBlY3RUb2tlbihvLkNPTE9OKSx0aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpKSxkZWZhdWx0VmFsdWU6dGhpcy5leHBlY3RPcHRpb25hbFRva2VuKG8uRVFVQUxTKT90aGlzLnBhcnNlQ29uc3RWYWx1ZUxpdGVyYWwoKTp2b2lkIDAsZGlyZWN0aXZlczp0aGlzLnBhcnNlQ29uc3REaXJlY3RpdmVzKCl9KX1wYXJzZVZhcmlhYmxlKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW47cmV0dXJuIHRoaXMuZXhwZWN0VG9rZW4oby5ET0xMQVIpLHRoaXMubm9kZSh0LHtraW5kOmMuVkFSSUFCTEUsbmFtZTp0aGlzLnBhcnNlTmFtZSgpfSl9cGFyc2VTZWxlY3Rpb25TZXQoKXtyZXR1cm4gdGhpcy5ub2RlKHRoaXMuX2xleGVyLnRva2VuLHtraW5kOmMuU0VMRUNUSU9OX1NFVCxzZWxlY3Rpb25zOnRoaXMubWFueShvLkJSQUNFX0wsdGhpcy5wYXJzZVNlbGVjdGlvbixvLkJSQUNFX1IpfSl9cGFyc2VTZWxlY3Rpb24oKXtyZXR1cm4gdGhpcy5wZWVrKG8uU1BSRUFEKT90aGlzLnBhcnNlRnJhZ21lbnQoKTp0aGlzLnBhcnNlRmllbGQoKX1wYXJzZUZpZWxkKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW4sbj10aGlzLnBhcnNlTmFtZSgpLGkscjtyZXR1cm4gdGhpcy5leHBlY3RPcHRpb25hbFRva2VuKG8uQ09MT04pPyhpPW4scj10aGlzLnBhcnNlTmFtZSgpKTpyPW4sdGhpcy5ub2RlKHQse2tpbmQ6Yy5GSUVMRCxhbGlhczppLG5hbWU6cixhcmd1bWVudHM6dGhpcy5wYXJzZUFyZ3VtZW50cyghMSksZGlyZWN0aXZlczp0aGlzLnBhcnNlRGlyZWN0aXZlcyghMSksc2VsZWN0aW9uU2V0OnRoaXMucGVlayhvLkJSQUNFX0wpP3RoaXMucGFyc2VTZWxlY3Rpb25TZXQoKTp2b2lkIDB9KX1wYXJzZUFyZ3VtZW50cyh0KXtsZXQgbj10P3RoaXMucGFyc2VDb25zdEFyZ3VtZW50OnRoaXMucGFyc2VBcmd1bWVudDtyZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoby5QQVJFTl9MLG4sby5QQVJFTl9SKX1wYXJzZUFyZ3VtZW50KHQ9ITEpe2xldCBuPXRoaXMuX2xleGVyLnRva2VuLGk9dGhpcy5wYXJzZU5hbWUoKTtyZXR1cm4gdGhpcy5leHBlY3RUb2tlbihvLkNPTE9OKSx0aGlzLm5vZGUobix7a2luZDpjLkFSR1VNRU5ULG5hbWU6aSx2YWx1ZTp0aGlzLnBhcnNlVmFsdWVMaXRlcmFsKHQpfSl9cGFyc2VDb25zdEFyZ3VtZW50KCl7cmV0dXJuIHRoaXMucGFyc2VBcmd1bWVudCghMCl9cGFyc2VGcmFnbWVudCgpe2xldCB0PXRoaXMuX2xleGVyLnRva2VuO3RoaXMuZXhwZWN0VG9rZW4oby5TUFJFQUQpO2xldCBuPXRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKFwib25cIik7cmV0dXJuIW4mJnRoaXMucGVlayhvLk5BTUUpP3RoaXMubm9kZSh0LHtraW5kOmMuRlJBR01FTlRfU1BSRUFELG5hbWU6dGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLGRpcmVjdGl2ZXM6dGhpcy5wYXJzZURpcmVjdGl2ZXMoITEpfSk6dGhpcy5ub2RlKHQse2tpbmQ6Yy5JTkxJTkVfRlJBR01FTlQsdHlwZUNvbmRpdGlvbjpuP3RoaXMucGFyc2VOYW1lZFR5cGUoKTp2b2lkIDAsZGlyZWN0aXZlczp0aGlzLnBhcnNlRGlyZWN0aXZlcyghMSksc2VsZWN0aW9uU2V0OnRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKX0pfXBhcnNlRnJhZ21lbnREZWZpbml0aW9uKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW47cmV0dXJuIHRoaXMuZXhwZWN0S2V5d29yZChcImZyYWdtZW50XCIpLHRoaXMuX29wdGlvbnMuYWxsb3dMZWdhY3lGcmFnbWVudFZhcmlhYmxlcz09PSEwP3RoaXMubm9kZSh0LHtraW5kOmMuRlJBR01FTlRfREVGSU5JVElPTixuYW1lOnRoaXMucGFyc2VGcmFnbWVudE5hbWUoKSx2YXJpYWJsZURlZmluaXRpb25zOnRoaXMucGFyc2VWYXJpYWJsZURlZmluaXRpb25zKCksdHlwZUNvbmRpdGlvbjoodGhpcy5leHBlY3RLZXl3b3JkKFwib25cIiksdGhpcy5wYXJzZU5hbWVkVHlwZSgpKSxkaXJlY3RpdmVzOnRoaXMucGFyc2VEaXJlY3RpdmVzKCExKSxzZWxlY3Rpb25TZXQ6dGhpcy5wYXJzZVNlbGVjdGlvblNldCgpfSk6dGhpcy5ub2RlKHQse2tpbmQ6Yy5GUkFHTUVOVF9ERUZJTklUSU9OLG5hbWU6dGhpcy5wYXJzZUZyYWdtZW50TmFtZSgpLHR5cGVDb25kaXRpb246KHRoaXMuZXhwZWN0S2V5d29yZChcIm9uXCIpLHRoaXMucGFyc2VOYW1lZFR5cGUoKSksZGlyZWN0aXZlczp0aGlzLnBhcnNlRGlyZWN0aXZlcyghMSksc2VsZWN0aW9uU2V0OnRoaXMucGFyc2VTZWxlY3Rpb25TZXQoKX0pfXBhcnNlRnJhZ21lbnROYW1lKCl7aWYodGhpcy5fbGV4ZXIudG9rZW4udmFsdWU9PT1cIm9uXCIpdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7cmV0dXJuIHRoaXMucGFyc2VOYW1lKCl9cGFyc2VWYWx1ZUxpdGVyYWwodCl7bGV0IG49dGhpcy5fbGV4ZXIudG9rZW47c3dpdGNoKG4ua2luZCl7Y2FzZSBvLkJSQUNLRVRfTDpyZXR1cm4gdGhpcy5wYXJzZUxpc3QodCk7Y2FzZSBvLkJSQUNFX0w6cmV0dXJuIHRoaXMucGFyc2VPYmplY3QodCk7Y2FzZSBvLklOVDpyZXR1cm4gdGhpcy5hZHZhbmNlTGV4ZXIoKSx0aGlzLm5vZGUobix7a2luZDpjLklOVCx2YWx1ZTpuLnZhbHVlfSk7Y2FzZSBvLkZMT0FUOnJldHVybiB0aGlzLmFkdmFuY2VMZXhlcigpLHRoaXMubm9kZShuLHtraW5kOmMuRkxPQVQsdmFsdWU6bi52YWx1ZX0pO2Nhc2Ugby5TVFJJTkc6Y2FzZSBvLkJMT0NLX1NUUklORzpyZXR1cm4gdGhpcy5wYXJzZVN0cmluZ0xpdGVyYWwoKTtjYXNlIG8uTkFNRTpzd2l0Y2godGhpcy5hZHZhbmNlTGV4ZXIoKSxuLnZhbHVlKXtjYXNlXCJ0cnVlXCI6cmV0dXJuIHRoaXMubm9kZShuLHtraW5kOmMuQk9PTEVBTix2YWx1ZTohMH0pO2Nhc2VcImZhbHNlXCI6cmV0dXJuIHRoaXMubm9kZShuLHtraW5kOmMuQk9PTEVBTix2YWx1ZTohMX0pO2Nhc2VcIm51bGxcIjpyZXR1cm4gdGhpcy5ub2RlKG4se2tpbmQ6Yy5OVUxMfSk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5ub2RlKG4se2tpbmQ6Yy5FTlVNLHZhbHVlOm4udmFsdWV9KX1jYXNlIG8uRE9MTEFSOmlmKHQpaWYodGhpcy5leHBlY3RUb2tlbihvLkRPTExBUiksdGhpcy5fbGV4ZXIudG9rZW4ua2luZD09PW8uTkFNRSl7bGV0IGk9dGhpcy5fbGV4ZXIudG9rZW4udmFsdWU7dGhyb3cgZCh0aGlzLl9sZXhlci5zb3VyY2Usbi5zdGFydCxgVW5leHBlY3RlZCB2YXJpYWJsZSBcIiQke2l9XCIgaW4gY29uc3RhbnQgdmFsdWUuYCl9ZWxzZSB0aHJvdyB0aGlzLnVuZXhwZWN0ZWQobik7cmV0dXJuIHRoaXMucGFyc2VWYXJpYWJsZSgpO2RlZmF1bHQ6dGhyb3cgdGhpcy51bmV4cGVjdGVkKCl9fXBhcnNlQ29uc3RWYWx1ZUxpdGVyYWwoKXtyZXR1cm4gdGhpcy5wYXJzZVZhbHVlTGl0ZXJhbCghMCl9cGFyc2VTdHJpbmdMaXRlcmFsKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW47cmV0dXJuIHRoaXMuYWR2YW5jZUxleGVyKCksdGhpcy5ub2RlKHQse2tpbmQ6Yy5TVFJJTkcsdmFsdWU6dC52YWx1ZSxibG9jazp0LmtpbmQ9PT1vLkJMT0NLX1NUUklOR30pfXBhcnNlTGlzdCh0KXtsZXQgbj0oKT0+dGhpcy5wYXJzZVZhbHVlTGl0ZXJhbCh0KTtyZXR1cm4gdGhpcy5ub2RlKHRoaXMuX2xleGVyLnRva2VuLHtraW5kOmMuTElTVCx2YWx1ZXM6dGhpcy5hbnkoby5CUkFDS0VUX0wsbixvLkJSQUNLRVRfUil9KX1wYXJzZU9iamVjdCh0KXtsZXQgbj0oKT0+dGhpcy5wYXJzZU9iamVjdEZpZWxkKHQpO3JldHVybiB0aGlzLm5vZGUodGhpcy5fbGV4ZXIudG9rZW4se2tpbmQ6Yy5PQkpFQ1QsZmllbGRzOnRoaXMuYW55KG8uQlJBQ0VfTCxuLG8uQlJBQ0VfUil9KX1wYXJzZU9iamVjdEZpZWxkKHQpe2xldCBuPXRoaXMuX2xleGVyLnRva2VuLGk9dGhpcy5wYXJzZU5hbWUoKTtyZXR1cm4gdGhpcy5leHBlY3RUb2tlbihvLkNPTE9OKSx0aGlzLm5vZGUobix7a2luZDpjLk9CSkVDVF9GSUVMRCxuYW1lOmksdmFsdWU6dGhpcy5wYXJzZVZhbHVlTGl0ZXJhbCh0KX0pfXBhcnNlRGlyZWN0aXZlcyh0KXtsZXQgbj1bXTtmb3IoO3RoaXMucGVlayhvLkFUKTspbi5wdXNoKHRoaXMucGFyc2VEaXJlY3RpdmUodCkpO3JldHVybiBufXBhcnNlQ29uc3REaXJlY3RpdmVzKCl7cmV0dXJuIHRoaXMucGFyc2VEaXJlY3RpdmVzKCEwKX1wYXJzZURpcmVjdGl2ZSh0KXtsZXQgbj10aGlzLl9sZXhlci50b2tlbjtyZXR1cm4gdGhpcy5leHBlY3RUb2tlbihvLkFUKSx0aGlzLm5vZGUobix7a2luZDpjLkRJUkVDVElWRSxuYW1lOnRoaXMucGFyc2VOYW1lKCksYXJndW1lbnRzOnRoaXMucGFyc2VBcmd1bWVudHModCl9KX1wYXJzZVR5cGVSZWZlcmVuY2UoKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbixuO2lmKHRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihvLkJSQUNLRVRfTCkpe2xldCBpPXRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCk7dGhpcy5leHBlY3RUb2tlbihvLkJSQUNLRVRfUiksbj10aGlzLm5vZGUodCx7a2luZDpjLkxJU1RfVFlQRSx0eXBlOml9KX1lbHNlIG49dGhpcy5wYXJzZU5hbWVkVHlwZSgpO3JldHVybiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oby5CQU5HKT90aGlzLm5vZGUodCx7a2luZDpjLk5PTl9OVUxMX1RZUEUsdHlwZTpufSk6bn1wYXJzZU5hbWVkVHlwZSgpe3JldHVybiB0aGlzLm5vZGUodGhpcy5fbGV4ZXIudG9rZW4se2tpbmQ6Yy5OQU1FRF9UWVBFLG5hbWU6dGhpcy5wYXJzZU5hbWUoKX0pfXBlZWtEZXNjcmlwdGlvbigpe3JldHVybiB0aGlzLnBlZWsoby5TVFJJTkcpfHx0aGlzLnBlZWsoby5CTE9DS19TVFJJTkcpfXBhcnNlRGVzY3JpcHRpb24oKXtpZih0aGlzLnBlZWtEZXNjcmlwdGlvbigpKXJldHVybiB0aGlzLnBhcnNlU3RyaW5nTGl0ZXJhbCgpfXBhcnNlU2NoZW1hRGVmaW5pdGlvbigpe2xldCB0PXRoaXMuX2xleGVyLnRva2VuLG49dGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7dGhpcy5leHBlY3RLZXl3b3JkKFwic2NoZW1hXCIpO2xldCBpPXRoaXMucGFyc2VDb25zdERpcmVjdGl2ZXMoKSxyPXRoaXMubWFueShvLkJSQUNFX0wsdGhpcy5wYXJzZU9wZXJhdGlvblR5cGVEZWZpbml0aW9uLG8uQlJBQ0VfUik7cmV0dXJuIHRoaXMubm9kZSh0LHtraW5kOmMuU0NIRU1BX0RFRklOSVRJT04sZGVzY3JpcHRpb246bixkaXJlY3RpdmVzOmksb3BlcmF0aW9uVHlwZXM6cn0pfXBhcnNlT3BlcmF0aW9uVHlwZURlZmluaXRpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbixuPXRoaXMucGFyc2VPcGVyYXRpb25UeXBlKCk7dGhpcy5leHBlY3RUb2tlbihvLkNPTE9OKTtsZXQgaT10aGlzLnBhcnNlTmFtZWRUeXBlKCk7cmV0dXJuIHRoaXMubm9kZSh0LHtraW5kOmMuT1BFUkFUSU9OX1RZUEVfREVGSU5JVElPTixvcGVyYXRpb246bix0eXBlOml9KX1wYXJzZVNjYWxhclR5cGVEZWZpbml0aW9uKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW4sbj10aGlzLnBhcnNlRGVzY3JpcHRpb24oKTt0aGlzLmV4cGVjdEtleXdvcmQoXCJzY2FsYXJcIik7bGV0IGk9dGhpcy5wYXJzZU5hbWUoKSxyPXRoaXMucGFyc2VDb25zdERpcmVjdGl2ZXMoKTtyZXR1cm4gdGhpcy5ub2RlKHQse2tpbmQ6Yy5TQ0FMQVJfVFlQRV9ERUZJTklUSU9OLGRlc2NyaXB0aW9uOm4sbmFtZTppLGRpcmVjdGl2ZXM6cn0pfXBhcnNlT2JqZWN0VHlwZURlZmluaXRpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbixuPXRoaXMucGFyc2VEZXNjcmlwdGlvbigpO3RoaXMuZXhwZWN0S2V5d29yZChcInR5cGVcIik7bGV0IGk9dGhpcy5wYXJzZU5hbWUoKSxyPXRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpLHM9dGhpcy5wYXJzZUNvbnN0RGlyZWN0aXZlcygpLGE9dGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtyZXR1cm4gdGhpcy5ub2RlKHQse2tpbmQ6Yy5PQkpFQ1RfVFlQRV9ERUZJTklUSU9OLGRlc2NyaXB0aW9uOm4sbmFtZTppLGludGVyZmFjZXM6cixkaXJlY3RpdmVzOnMsZmllbGRzOmF9KX1wYXJzZUltcGxlbWVudHNJbnRlcmZhY2VzKCl7cmV0dXJuIHRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKFwiaW1wbGVtZW50c1wiKT90aGlzLmRlbGltaXRlZE1hbnkoby5BTVAsdGhpcy5wYXJzZU5hbWVkVHlwZSk6W119cGFyc2VGaWVsZHNEZWZpbml0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KG8uQlJBQ0VfTCx0aGlzLnBhcnNlRmllbGREZWZpbml0aW9uLG8uQlJBQ0VfUil9cGFyc2VGaWVsZERlZmluaXRpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbixuPXRoaXMucGFyc2VEZXNjcmlwdGlvbigpLGk9dGhpcy5wYXJzZU5hbWUoKSxyPXRoaXMucGFyc2VBcmd1bWVudERlZnMoKTt0aGlzLmV4cGVjdFRva2VuKG8uQ09MT04pO2xldCBzPXRoaXMucGFyc2VUeXBlUmVmZXJlbmNlKCksYT10aGlzLnBhcnNlQ29uc3REaXJlY3RpdmVzKCk7cmV0dXJuIHRoaXMubm9kZSh0LHtraW5kOmMuRklFTERfREVGSU5JVElPTixkZXNjcmlwdGlvbjpuLG5hbWU6aSxhcmd1bWVudHM6cix0eXBlOnMsZGlyZWN0aXZlczphfSl9cGFyc2VBcmd1bWVudERlZnMoKXtyZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoby5QQVJFTl9MLHRoaXMucGFyc2VJbnB1dFZhbHVlRGVmLG8uUEFSRU5fUil9cGFyc2VJbnB1dFZhbHVlRGVmKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW4sbj10aGlzLnBhcnNlRGVzY3JpcHRpb24oKSxpPXRoaXMucGFyc2VOYW1lKCk7dGhpcy5leHBlY3RUb2tlbihvLkNPTE9OKTtsZXQgcj10aGlzLnBhcnNlVHlwZVJlZmVyZW5jZSgpLHM7dGhpcy5leHBlY3RPcHRpb25hbFRva2VuKG8uRVFVQUxTKSYmKHM9dGhpcy5wYXJzZUNvbnN0VmFsdWVMaXRlcmFsKCkpO2xldCBhPXRoaXMucGFyc2VDb25zdERpcmVjdGl2ZXMoKTtyZXR1cm4gdGhpcy5ub2RlKHQse2tpbmQ6Yy5JTlBVVF9WQUxVRV9ERUZJTklUSU9OLGRlc2NyaXB0aW9uOm4sbmFtZTppLHR5cGU6cixkZWZhdWx0VmFsdWU6cyxkaXJlY3RpdmVzOmF9KX1wYXJzZUludGVyZmFjZVR5cGVEZWZpbml0aW9uKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW4sbj10aGlzLnBhcnNlRGVzY3JpcHRpb24oKTt0aGlzLmV4cGVjdEtleXdvcmQoXCJpbnRlcmZhY2VcIik7bGV0IGk9dGhpcy5wYXJzZU5hbWUoKSxyPXRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpLHM9dGhpcy5wYXJzZUNvbnN0RGlyZWN0aXZlcygpLGE9dGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtyZXR1cm4gdGhpcy5ub2RlKHQse2tpbmQ6Yy5JTlRFUkZBQ0VfVFlQRV9ERUZJTklUSU9OLGRlc2NyaXB0aW9uOm4sbmFtZTppLGludGVyZmFjZXM6cixkaXJlY3RpdmVzOnMsZmllbGRzOmF9KX1wYXJzZVVuaW9uVHlwZURlZmluaXRpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbixuPXRoaXMucGFyc2VEZXNjcmlwdGlvbigpO3RoaXMuZXhwZWN0S2V5d29yZChcInVuaW9uXCIpO2xldCBpPXRoaXMucGFyc2VOYW1lKCkscj10aGlzLnBhcnNlQ29uc3REaXJlY3RpdmVzKCkscz10aGlzLnBhcnNlVW5pb25NZW1iZXJUeXBlcygpO3JldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLlVOSU9OX1RZUEVfREVGSU5JVElPTixkZXNjcmlwdGlvbjpuLG5hbWU6aSxkaXJlY3RpdmVzOnIsdHlwZXM6c30pfXBhcnNlVW5pb25NZW1iZXJUeXBlcygpe3JldHVybiB0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oby5FUVVBTFMpP3RoaXMuZGVsaW1pdGVkTWFueShvLlBJUEUsdGhpcy5wYXJzZU5hbWVkVHlwZSk6W119cGFyc2VFbnVtVHlwZURlZmluaXRpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbixuPXRoaXMucGFyc2VEZXNjcmlwdGlvbigpO3RoaXMuZXhwZWN0S2V5d29yZChcImVudW1cIik7bGV0IGk9dGhpcy5wYXJzZU5hbWUoKSxyPXRoaXMucGFyc2VDb25zdERpcmVjdGl2ZXMoKSxzPXRoaXMucGFyc2VFbnVtVmFsdWVzRGVmaW5pdGlvbigpO3JldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLkVOVU1fVFlQRV9ERUZJTklUSU9OLGRlc2NyaXB0aW9uOm4sbmFtZTppLGRpcmVjdGl2ZXM6cix2YWx1ZXM6c30pfXBhcnNlRW51bVZhbHVlc0RlZmluaXRpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25hbE1hbnkoby5CUkFDRV9MLHRoaXMucGFyc2VFbnVtVmFsdWVEZWZpbml0aW9uLG8uQlJBQ0VfUil9cGFyc2VFbnVtVmFsdWVEZWZpbml0aW9uKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW4sbj10aGlzLnBhcnNlRGVzY3JpcHRpb24oKSxpPXRoaXMucGFyc2VFbnVtVmFsdWVOYW1lKCkscj10aGlzLnBhcnNlQ29uc3REaXJlY3RpdmVzKCk7cmV0dXJuIHRoaXMubm9kZSh0LHtraW5kOmMuRU5VTV9WQUxVRV9ERUZJTklUSU9OLGRlc2NyaXB0aW9uOm4sbmFtZTppLGRpcmVjdGl2ZXM6cn0pfXBhcnNlRW51bVZhbHVlTmFtZSgpe2lmKHRoaXMuX2xleGVyLnRva2VuLnZhbHVlPT09XCJ0cnVlXCJ8fHRoaXMuX2xleGVyLnRva2VuLnZhbHVlPT09XCJmYWxzZVwifHx0aGlzLl9sZXhlci50b2tlbi52YWx1ZT09PVwibnVsbFwiKXRocm93IGQodGhpcy5fbGV4ZXIuc291cmNlLHRoaXMuX2xleGVyLnRva2VuLnN0YXJ0LGAke29lKHRoaXMuX2xleGVyLnRva2VuKX0gaXMgcmVzZXJ2ZWQgYW5kIGNhbm5vdCBiZSB1c2VkIGZvciBhbiBlbnVtIHZhbHVlLmApO3JldHVybiB0aGlzLnBhcnNlTmFtZSgpfXBhcnNlSW5wdXRPYmplY3RUeXBlRGVmaW5pdGlvbigpe2xldCB0PXRoaXMuX2xleGVyLnRva2VuLG49dGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7dGhpcy5leHBlY3RLZXl3b3JkKFwiaW5wdXRcIik7bGV0IGk9dGhpcy5wYXJzZU5hbWUoKSxyPXRoaXMucGFyc2VDb25zdERpcmVjdGl2ZXMoKSxzPXRoaXMucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKTtyZXR1cm4gdGhpcy5ub2RlKHQse2tpbmQ6Yy5JTlBVVF9PQkpFQ1RfVFlQRV9ERUZJTklUSU9OLGRlc2NyaXB0aW9uOm4sbmFtZTppLGRpcmVjdGl2ZXM6cixmaWVsZHM6c30pfXBhcnNlSW5wdXRGaWVsZHNEZWZpbml0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9uYWxNYW55KG8uQlJBQ0VfTCx0aGlzLnBhcnNlSW5wdXRWYWx1ZURlZixvLkJSQUNFX1IpfXBhcnNlVHlwZVN5c3RlbUV4dGVuc2lvbigpe2xldCB0PXRoaXMuX2xleGVyLmxvb2thaGVhZCgpO2lmKHQua2luZD09PW8uTkFNRSlzd2l0Y2godC52YWx1ZSl7Y2FzZVwic2NoZW1hXCI6cmV0dXJuIHRoaXMucGFyc2VTY2hlbWFFeHRlbnNpb24oKTtjYXNlXCJzY2FsYXJcIjpyZXR1cm4gdGhpcy5wYXJzZVNjYWxhclR5cGVFeHRlbnNpb24oKTtjYXNlXCJ0eXBlXCI6cmV0dXJuIHRoaXMucGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCk7Y2FzZVwiaW50ZXJmYWNlXCI6cmV0dXJuIHRoaXMucGFyc2VJbnRlcmZhY2VUeXBlRXh0ZW5zaW9uKCk7Y2FzZVwidW5pb25cIjpyZXR1cm4gdGhpcy5wYXJzZVVuaW9uVHlwZUV4dGVuc2lvbigpO2Nhc2VcImVudW1cIjpyZXR1cm4gdGhpcy5wYXJzZUVudW1UeXBlRXh0ZW5zaW9uKCk7Y2FzZVwiaW5wdXRcIjpyZXR1cm4gdGhpcy5wYXJzZUlucHV0T2JqZWN0VHlwZUV4dGVuc2lvbigpfXRocm93IHRoaXMudW5leHBlY3RlZCh0KX1wYXJzZVNjaGVtYUV4dGVuc2lvbigpe2xldCB0PXRoaXMuX2xleGVyLnRva2VuO3RoaXMuZXhwZWN0S2V5d29yZChcImV4dGVuZFwiKSx0aGlzLmV4cGVjdEtleXdvcmQoXCJzY2hlbWFcIik7bGV0IG49dGhpcy5wYXJzZUNvbnN0RGlyZWN0aXZlcygpLGk9dGhpcy5vcHRpb25hbE1hbnkoby5CUkFDRV9MLHRoaXMucGFyc2VPcGVyYXRpb25UeXBlRGVmaW5pdGlvbixvLkJSQUNFX1IpO2lmKG4ubGVuZ3RoPT09MCYmaS5sZW5ndGg9PT0wKXRocm93IHRoaXMudW5leHBlY3RlZCgpO3JldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLlNDSEVNQV9FWFRFTlNJT04sZGlyZWN0aXZlczpuLG9wZXJhdGlvblR5cGVzOml9KX1wYXJzZVNjYWxhclR5cGVFeHRlbnNpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbjt0aGlzLmV4cGVjdEtleXdvcmQoXCJleHRlbmRcIiksdGhpcy5leHBlY3RLZXl3b3JkKFwic2NhbGFyXCIpO2xldCBuPXRoaXMucGFyc2VOYW1lKCksaT10aGlzLnBhcnNlQ29uc3REaXJlY3RpdmVzKCk7aWYoaS5sZW5ndGg9PT0wKXRocm93IHRoaXMudW5leHBlY3RlZCgpO3JldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLlNDQUxBUl9UWVBFX0VYVEVOU0lPTixuYW1lOm4sZGlyZWN0aXZlczppfSl9cGFyc2VPYmplY3RUeXBlRXh0ZW5zaW9uKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW47dGhpcy5leHBlY3RLZXl3b3JkKFwiZXh0ZW5kXCIpLHRoaXMuZXhwZWN0S2V5d29yZChcInR5cGVcIik7bGV0IG49dGhpcy5wYXJzZU5hbWUoKSxpPXRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpLHI9dGhpcy5wYXJzZUNvbnN0RGlyZWN0aXZlcygpLHM9dGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtpZihpLmxlbmd0aD09PTAmJnIubGVuZ3RoPT09MCYmcy5sZW5ndGg9PT0wKXRocm93IHRoaXMudW5leHBlY3RlZCgpO3JldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLk9CSkVDVF9UWVBFX0VYVEVOU0lPTixuYW1lOm4saW50ZXJmYWNlczppLGRpcmVjdGl2ZXM6cixmaWVsZHM6c30pfXBhcnNlSW50ZXJmYWNlVHlwZUV4dGVuc2lvbigpe2xldCB0PXRoaXMuX2xleGVyLnRva2VuO3RoaXMuZXhwZWN0S2V5d29yZChcImV4dGVuZFwiKSx0aGlzLmV4cGVjdEtleXdvcmQoXCJpbnRlcmZhY2VcIik7bGV0IG49dGhpcy5wYXJzZU5hbWUoKSxpPXRoaXMucGFyc2VJbXBsZW1lbnRzSW50ZXJmYWNlcygpLHI9dGhpcy5wYXJzZUNvbnN0RGlyZWN0aXZlcygpLHM9dGhpcy5wYXJzZUZpZWxkc0RlZmluaXRpb24oKTtpZihpLmxlbmd0aD09PTAmJnIubGVuZ3RoPT09MCYmcy5sZW5ndGg9PT0wKXRocm93IHRoaXMudW5leHBlY3RlZCgpO3JldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLklOVEVSRkFDRV9UWVBFX0VYVEVOU0lPTixuYW1lOm4saW50ZXJmYWNlczppLGRpcmVjdGl2ZXM6cixmaWVsZHM6c30pfXBhcnNlVW5pb25UeXBlRXh0ZW5zaW9uKCl7bGV0IHQ9dGhpcy5fbGV4ZXIudG9rZW47dGhpcy5leHBlY3RLZXl3b3JkKFwiZXh0ZW5kXCIpLHRoaXMuZXhwZWN0S2V5d29yZChcInVuaW9uXCIpO2xldCBuPXRoaXMucGFyc2VOYW1lKCksaT10aGlzLnBhcnNlQ29uc3REaXJlY3RpdmVzKCkscj10aGlzLnBhcnNlVW5pb25NZW1iZXJUeXBlcygpO2lmKGkubGVuZ3RoPT09MCYmci5sZW5ndGg9PT0wKXRocm93IHRoaXMudW5leHBlY3RlZCgpO3JldHVybiB0aGlzLm5vZGUodCx7a2luZDpjLlVOSU9OX1RZUEVfRVhURU5TSU9OLG5hbWU6bixkaXJlY3RpdmVzOmksdHlwZXM6cn0pfXBhcnNlRW51bVR5cGVFeHRlbnNpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbjt0aGlzLmV4cGVjdEtleXdvcmQoXCJleHRlbmRcIiksdGhpcy5leHBlY3RLZXl3b3JkKFwiZW51bVwiKTtsZXQgbj10aGlzLnBhcnNlTmFtZSgpLGk9dGhpcy5wYXJzZUNvbnN0RGlyZWN0aXZlcygpLHI9dGhpcy5wYXJzZUVudW1WYWx1ZXNEZWZpbml0aW9uKCk7aWYoaS5sZW5ndGg9PT0wJiZyLmxlbmd0aD09PTApdGhyb3cgdGhpcy51bmV4cGVjdGVkKCk7cmV0dXJuIHRoaXMubm9kZSh0LHtraW5kOmMuRU5VTV9UWVBFX0VYVEVOU0lPTixuYW1lOm4sZGlyZWN0aXZlczppLHZhbHVlczpyfSl9cGFyc2VJbnB1dE9iamVjdFR5cGVFeHRlbnNpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbjt0aGlzLmV4cGVjdEtleXdvcmQoXCJleHRlbmRcIiksdGhpcy5leHBlY3RLZXl3b3JkKFwiaW5wdXRcIik7bGV0IG49dGhpcy5wYXJzZU5hbWUoKSxpPXRoaXMucGFyc2VDb25zdERpcmVjdGl2ZXMoKSxyPXRoaXMucGFyc2VJbnB1dEZpZWxkc0RlZmluaXRpb24oKTtpZihpLmxlbmd0aD09PTAmJnIubGVuZ3RoPT09MCl0aHJvdyB0aGlzLnVuZXhwZWN0ZWQoKTtyZXR1cm4gdGhpcy5ub2RlKHQse2tpbmQ6Yy5JTlBVVF9PQkpFQ1RfVFlQRV9FWFRFTlNJT04sbmFtZTpuLGRpcmVjdGl2ZXM6aSxmaWVsZHM6cn0pfXBhcnNlRGlyZWN0aXZlRGVmaW5pdGlvbigpe2xldCB0PXRoaXMuX2xleGVyLnRva2VuLG49dGhpcy5wYXJzZURlc2NyaXB0aW9uKCk7dGhpcy5leHBlY3RLZXl3b3JkKFwiZGlyZWN0aXZlXCIpLHRoaXMuZXhwZWN0VG9rZW4oby5BVCk7bGV0IGk9dGhpcy5wYXJzZU5hbWUoKSxyPXRoaXMucGFyc2VBcmd1bWVudERlZnMoKSxzPXRoaXMuZXhwZWN0T3B0aW9uYWxLZXl3b3JkKFwicmVwZWF0YWJsZVwiKTt0aGlzLmV4cGVjdEtleXdvcmQoXCJvblwiKTtsZXQgYT10aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb25zKCk7cmV0dXJuIHRoaXMubm9kZSh0LHtraW5kOmMuRElSRUNUSVZFX0RFRklOSVRJT04sZGVzY3JpcHRpb246bixuYW1lOmksYXJndW1lbnRzOnIscmVwZWF0YWJsZTpzLGxvY2F0aW9uczphfSl9cGFyc2VEaXJlY3RpdmVMb2NhdGlvbnMoKXtyZXR1cm4gdGhpcy5kZWxpbWl0ZWRNYW55KG8uUElQRSx0aGlzLnBhcnNlRGlyZWN0aXZlTG9jYXRpb24pfXBhcnNlRGlyZWN0aXZlTG9jYXRpb24oKXtsZXQgdD10aGlzLl9sZXhlci50b2tlbixuPXRoaXMucGFyc2VOYW1lKCk7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVlLG4udmFsdWUpKXJldHVybiBuO3Rocm93IHRoaXMudW5leHBlY3RlZCh0KX1ub2RlKHQsbil7cmV0dXJuIHRoaXMuX29wdGlvbnMubm9Mb2NhdGlvbiE9PSEwJiYobi5sb2M9bmV3IEgodCx0aGlzLl9sZXhlci5sYXN0VG9rZW4sdGhpcy5fbGV4ZXIuc291cmNlKSksbn1wZWVrKHQpe3JldHVybiB0aGlzLl9sZXhlci50b2tlbi5raW5kPT09dH1leHBlY3RUb2tlbih0KXtsZXQgbj10aGlzLl9sZXhlci50b2tlbjtpZihuLmtpbmQ9PT10KXJldHVybiB0aGlzLmFkdmFuY2VMZXhlcigpLG47dGhyb3cgZCh0aGlzLl9sZXhlci5zb3VyY2Usbi5zdGFydCxgRXhwZWN0ZWQgJHtsdCh0KX0sIGZvdW5kICR7b2Uobil9LmApfWV4cGVjdE9wdGlvbmFsVG9rZW4odCl7cmV0dXJuIHRoaXMuX2xleGVyLnRva2VuLmtpbmQ9PT10Pyh0aGlzLmFkdmFuY2VMZXhlcigpLCEwKTohMX1leHBlY3RLZXl3b3JkKHQpe2xldCBuPXRoaXMuX2xleGVyLnRva2VuO2lmKG4ua2luZD09PW8uTkFNRSYmbi52YWx1ZT09PXQpdGhpcy5hZHZhbmNlTGV4ZXIoKTtlbHNlIHRocm93IGQodGhpcy5fbGV4ZXIuc291cmNlLG4uc3RhcnQsYEV4cGVjdGVkIFwiJHt0fVwiLCBmb3VuZCAke29lKG4pfS5gKX1leHBlY3RPcHRpb25hbEtleXdvcmQodCl7bGV0IG49dGhpcy5fbGV4ZXIudG9rZW47cmV0dXJuIG4ua2luZD09PW8uTkFNRSYmbi52YWx1ZT09PXQ/KHRoaXMuYWR2YW5jZUxleGVyKCksITApOiExfXVuZXhwZWN0ZWQodCl7bGV0IG49dD8/dGhpcy5fbGV4ZXIudG9rZW47cmV0dXJuIGQodGhpcy5fbGV4ZXIuc291cmNlLG4uc3RhcnQsYFVuZXhwZWN0ZWQgJHtvZShuKX0uYCl9YW55KHQsbixpKXt0aGlzLmV4cGVjdFRva2VuKHQpO2xldCByPVtdO2Zvcig7IXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihpKTspci5wdXNoKG4uY2FsbCh0aGlzKSk7cmV0dXJuIHJ9b3B0aW9uYWxNYW55KHQsbixpKXtpZih0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4odCkpe2xldCByPVtdO2RvIHIucHVzaChuLmNhbGwodGhpcykpO3doaWxlKCF0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4oaSkpO3JldHVybiByfXJldHVybltdfW1hbnkodCxuLGkpe3RoaXMuZXhwZWN0VG9rZW4odCk7bGV0IHI9W107ZG8gci5wdXNoKG4uY2FsbCh0aGlzKSk7d2hpbGUoIXRoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbihpKSk7cmV0dXJuIHJ9ZGVsaW1pdGVkTWFueSh0LG4pe3RoaXMuZXhwZWN0T3B0aW9uYWxUb2tlbih0KTtsZXQgaT1bXTtkbyBpLnB1c2gobi5jYWxsKHRoaXMpKTt3aGlsZSh0aGlzLmV4cGVjdE9wdGlvbmFsVG9rZW4odCkpO3JldHVybiBpfWFkdmFuY2VMZXhlcigpe2xldHttYXhUb2tlbnM6dH09dGhpcy5fb3B0aW9ucyxuPXRoaXMuX2xleGVyLmFkdmFuY2UoKTtpZihuLmtpbmQhPT1vLkVPRiYmKCsrdGhpcy5fdG9rZW5Db3VudGVyLHQhPT12b2lkIDAmJnRoaXMuX3Rva2VuQ291bnRlcj50KSl0aHJvdyBkKHRoaXMuX2xleGVyLnNvdXJjZSxuLnN0YXJ0LGBEb2N1bWVudCBjb250YWlucyBtb3JlIHRoYXQgJHt0fSB0b2tlbnMuIFBhcnNpbmcgYWJvcnRlZC5gKX19O2Z1bmN0aW9uIG9lKGUpe2xldCB0PWUudmFsdWU7cmV0dXJuIGx0KGUua2luZCkrKHQhPW51bGw/YCBcIiR7dH1cImA6XCJcIil9ZnVuY3Rpb24gbHQoZSl7cmV0dXJuIGl0KGUpP2BcIiR7ZX1cImA6ZX1mdW5jdGlvbiBlbihlLHQpe2xldCBuPW5ldyBTeW50YXhFcnJvcihlK1wiIChcIit0LmxvYy5zdGFydC5saW5lK1wiOlwiK3QubG9jLnN0YXJ0LmNvbHVtbitcIilcIik7cmV0dXJuIE9iamVjdC5hc3NpZ24obix0KX12YXIgcHQ9ZW47ZnVuY3Rpb24gdG4oZSl7bGV0IHQ9W10se3N0YXJ0VG9rZW46bixlbmRUb2tlbjppfT1lLmxvYztmb3IobGV0IHI9bjtyIT09aTtyPXIubmV4dClyLmtpbmQ9PT1cIkNvbW1lbnRcIiYmdC5wdXNoKHsuLi5yLGxvYzp7c3RhcnQ6ci5zdGFydCxlbmQ6ci5lbmR9fSk7cmV0dXJuIHR9dmFyIG5uPXthbGxvd0xlZ2FjeUZyYWdtZW50VmFyaWFibGVzOiEwfTtmdW5jdGlvbiBybihlKXtpZigoZT09bnVsbD92b2lkIDA6ZS5uYW1lKT09PVwiR3JhcGhRTEVycm9yXCIpe2xldHttZXNzYWdlOnQsbG9jYXRpb25zOltuXX09ZTtyZXR1cm4gcHQodCx7bG9jOntzdGFydDpufSxjYXVzZTplfSl9cmV0dXJuIGV9ZnVuY3Rpb24gc24oZSl7bGV0IHQ7dHJ5e3Q9dXQoZSxubil9Y2F0Y2gobil7dGhyb3cgcm4obil9cmV0dXJuIHQuY29tbWVudHM9dG4odCksdH12YXIgb249e3BhcnNlOnNuLGFzdEZvcm1hdDpcImdyYXBocWxcIixoYXNQcmFnbWE6WWUsbG9jU3RhcnQ6Syxsb2NFbmQ6en07dmFyIGFuPXtncmFwaHFsOiRlfTt2YXIgU2k9X2U7ZXhwb3J0e1NpIGFzIGRlZmF1bHQsSmUgYXMgbGFuZ3VhZ2VzLHFlIGFzIG9wdGlvbnMsTmUgYXMgcGFyc2VycyxhbiBhcyBwcmludGVyc307XG4iXSwibmFtZXMiOlsiZSJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxLQUFHLE9BQU87QUFBZSxJQUFJLEtBQUcsQ0FBQ0EsSUFBRSxNQUFJO0FBQUMsV0FBUSxLQUFLLEVBQUUsSUFBR0EsSUFBRSxHQUFFLEVBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxZQUFXLEtBQUUsQ0FBQztBQUFDO0FBQUUsSUFBSSxLQUFHLENBQUU7QUFBQyxHQUFHLElBQUcsRUFBQyxXQUFVLE1BQUksSUFBRyxTQUFRLE1BQUksSUFBRyxTQUFRLE1BQUksSUFBRyxVQUFTLE1BQUksR0FBRSxDQUFDO0FBQUUsSUFBSSxLQUFHLENBQUNBLElBQUUsR0FBRSxHQUFFLE1BQUk7QUFBQyxNQUFHLEVBQUVBLE1BQUcsS0FBRyxNQUFNLFFBQU8sRUFBRSxhQUFXLEVBQUUsV0FBVyxHQUFFLENBQUMsSUFBRSxFQUFFLFNBQU8sRUFBRSxRQUFRLEdBQUUsQ0FBQyxJQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDO0FBQUMsR0FBRSxJQUFFO0FBQUcsSUFBSSxJQUFFO0FBQVMsSUFBSSxJQUFFO0FBQVEsSUFBSSxJQUFFO0FBQVcsSUFBSSxJQUFFO0FBQU8sSUFBSSxJQUFFO0FBQWtCLElBQUMsS0FBRyxNQUFJO0FBQUUsR0FBTSxLQUFHO0FBQUcsU0FBUyxFQUFFQSxJQUFFO0FBQUMsU0FBWSxFQUFDLE1BQUssR0FBRSxVQUFTQSxHQUFDO0FBQUM7QUFBQyxTQUFTLEVBQUVBLElBQUUsSUFBRSxDQUFFLEdBQUM7QUFBQyxTQUFZLEdBQUcsRUFBRSxjQUFpQixHQUFFLEVBQUMsTUFBSyxHQUFFLElBQUcsRUFBRSxJQUFHLFVBQVNBLElBQUUsT0FBTSxDQUFDLENBQUMsRUFBRSxhQUFZLGdCQUFlLEVBQUUsZUFBYztBQUFDO0FBQUMsU0FBUyxFQUFFQSxJQUFFLElBQUUsSUFBRyxJQUFFLElBQUc7QUFBQyxTQUF5QixFQUFDLE1BQUssR0FBRSxlQUFjQSxJQUFFLGNBQWEsR0FBRSxTQUFRLEVBQUUsUUFBTztBQUFDO0FBQUMsSUFBSSxLQUFHLEVBQUMsTUFBSyxFQUFDO0FBQUUsSUFBSSxLQUFHLEVBQUMsTUFBSyxHQUFFLE1BQUssS0FBRTtBQUFFLElBQUksSUFBRSxFQUFDLE1BQUssRUFBQyxHQUFFLElBQUUsRUFBQyxNQUFLLEdBQUUsTUFBSyxLQUFFLEdBQUUsSUFBRSxDQUFDLElBQUcsRUFBRTtBQUFFLFNBQVMsRUFBRUEsSUFBRSxHQUFFO0FBQVksTUFBSSxJQUFFLENBQUE7QUFBRyxXQUFRLElBQUUsR0FBRSxJQUFFLEVBQUUsUUFBTyxJQUFJLE9BQUksS0FBRyxFQUFFLEtBQUtBLEVBQUMsR0FBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFBRSxTQUFPO0FBQUM7QUFBQyxTQUFTLEVBQUVBLElBQUU7QUFBQyxTQUFNLENBQUMsR0FBRSxHQUFFLE1BQUk7QUFBQyxRQUFJLElBQUUsQ0FBQyxFQUFFLEtBQUcsUUFBTSxFQUFFO0FBQVcsUUFBRyxNQUFJLE1BQUcsUUFBUTtBQUFDLFFBQUcsRUFBQyxRQUFPLEVBQUMsSUFBRSxHQUFFLElBQUU7QUFBRSxXQUFLLEtBQUcsS0FBRyxJQUFFLEtBQUc7QUFBQyxVQUFJLElBQUUsRUFBRSxPQUFPLENBQUM7QUFBRSxVQUFHQSxjQUFhLFFBQU87QUFBQyxZQUFHLENBQUNBLEdBQUUsS0FBSyxDQUFDLEVBQUUsUUFBTztBQUFBLE1BQUMsV0FBUyxDQUFDQSxHQUFFLFNBQVMsQ0FBQyxFQUFFLFFBQU87QUFBRSxVQUFFLE1BQUk7QUFBQSxJQUFHO0FBQUMsV0FBTyxNQUFJLE1BQUksTUFBSSxJQUFFLElBQUU7QUFBQSxFQUFFO0FBQUM7QUFBSSxJQUFhLElBQUUsRUFBRSxJQUFJLEdBQUUsS0FBRyxFQUFFLE1BQU0sR0FBRSxLQUFHLEVBQUUsVUFBVTtBQUFFLFNBQVMsR0FBR0EsSUFBRSxHQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsQ0FBQyxFQUFFLEtBQUcsUUFBTSxFQUFFO0FBQVcsTUFBRyxNQUFJLE1BQUc7QUFBUyxNQUFJLElBQUVBLEdBQUUsT0FBTyxDQUFDO0FBQUUsTUFBRyxHQUFFO0FBQUMsUUFBR0EsR0FBRSxPQUFPLElBQUUsQ0FBQyxNQUFJLFFBQU0sTUFBSTtBQUFBLEVBQzF4QyxRQUFPLElBQUU7QUFBRSxRQUFHLE1BQUk7QUFBQSxLQUNqQixNQUFJLFFBQU0sTUFBSSxZQUFVLE1BQUksU0FBUyxRQUFPLElBQUU7QUFBQSxFQUFDLE9BQUs7QUFBQyxRQUFHLE1BQUksUUFBTUEsR0FBRSxPQUFPLElBQUUsQ0FBQyxNQUFJO0FBQUEsRUFDbkYsUUFBTyxJQUFFO0FBQUUsUUFBRyxNQUFJO0FBQUEsS0FDakIsTUFBSSxRQUFNLE1BQUksWUFBVSxNQUFJLFNBQVMsUUFBTyxJQUFFO0FBQUEsRUFBQztBQUFDLFNBQU87QUFBQztBQUFDLElBQUksSUFBRTtBQUFHLFNBQVMsR0FBR0EsSUFBRSxHQUFFLElBQUUsQ0FBQSxHQUFHO0FBQUMsTUFBSSxJQUFFLEVBQUVBLElBQUUsRUFBRSxZQUFVLElBQUUsSUFBRSxHQUFFLENBQUMsR0FBRSxJQUFFLEVBQUVBLElBQUUsR0FBRSxDQUFDO0FBQUUsU0FBTyxNQUFJO0FBQUM7QUFBQyxJQUFJLEtBQUc7QUFBRyxTQUFTLEdBQUdBLElBQUUsR0FBRTtBQUFDLE1BQUcsTUFBSSxNQUFHLFFBQU07QUFBRyxNQUFHQSxHQUFFLE9BQU8sQ0FBQyxNQUFJLE9BQUtBLEdBQUUsT0FBTyxJQUFFLENBQUMsTUFBSSxLQUFJO0FBQUMsYUFBUSxJQUFFLElBQUUsR0FBRSxJQUFFQSxHQUFFLFFBQU8sRUFBRSxFQUFFLEtBQUdBLEdBQUUsT0FBTyxDQUFDLE1BQUksT0FBS0EsR0FBRSxPQUFPLElBQUUsQ0FBQyxNQUFJLElBQUksUUFBTyxJQUFFO0FBQUEsRUFBQztBQUFDLFNBQU87QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBR0EsSUFBRSxHQUFFO0FBQUMsU0FBTyxNQUFJLFFBQUcsUUFBR0EsR0FBRSxPQUFPLENBQUMsTUFBSSxPQUFLQSxHQUFFLE9BQU8sSUFBRSxDQUFDLE1BQUksTUFBSSxHQUFHQSxJQUFFLENBQUMsSUFBRTtBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsTUFBSyxJQUFFO0FBQUUsU0FBSyxNQUFJLElBQUcsS0FBRSxHQUFFLElBQUUsR0FBR0EsSUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFHQSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUVBLElBQUUsQ0FBQztBQUFFLFNBQU8sSUFBRSxHQUFHQSxJQUFFLENBQUMsR0FBRSxJQUFFLEVBQUVBLElBQUUsQ0FBQyxHQUFFLE1BQUksU0FBSSxHQUFHQSxJQUFFLENBQUM7QUFBQztBQUFDLElBQUksS0FBRztBQUFHLFNBQVMsR0FBR0EsSUFBRTtBQUFDLFNBQU8sTUFBTSxRQUFRQSxFQUFDLEtBQUdBLEdBQUUsU0FBTztBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsSUFBSSxLQUFHLGNBQWMsTUFBSztBQUFBLEVBQTRCLFlBQVksR0FBRSxHQUFFLElBQUUsUUFBTztBQUFDLFVBQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUc7QUFBaEgsZ0NBQUs7QUFBNkcsU0FBSyxPQUFLO0FBQUEsRUFBQztBQUFDLEdBQUUsS0FBRztBQUFHLElBQUksSUFBRTtBQUFLLFNBQVMsRUFBRUEsSUFBRTtBQUFDLE1BQUcsTUFBSSxRQUFNLE9BQU8sRUFBRSxVQUFTO0FBQUMsUUFBSSxJQUFFO0FBQUUsV0FBTyxJQUFFLEVBQUUsWUFBVSxNQUFLO0FBQUEsRUFBQztBQUFDLFNBQU8sSUFBRSxFQUFFLFlBQVVBLE1BQUcsdUJBQU8sT0FBTyxJQUFJLEdBQUUsSUFBSTtBQUFDO0FBQUMsSUFBSSxLQUFHO0FBQUcsU0FBUUEsS0FBRSxHQUFFQSxNQUFHLElBQUdBLEtBQUksR0FBQztBQUFHLFNBQVMsR0FBR0EsSUFBRTtBQUFDLFNBQU8sRUFBRUEsRUFBQztBQUFDO0FBQUMsU0FBUyxHQUFHQSxJQUFFLElBQUUsUUFBTztBQUFDLEtBQUdBLEVBQUM7QUFBRSxXQUFTLEVBQUUsR0FBRTtBQUFDLFFBQUksSUFBRSxFQUFFLENBQUMsR0FBRSxJQUFFQSxHQUFFLENBQUM7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QUFNO0FBQUEsSUFBQSxLQUFJO0FBQVcsYUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFFLEVBQUVBLElBQUUsR0FBRSxHQUFFLGFBQWEsQ0FBQyxHQUFFLENBQUM7QUFBQSxJQUFFLEtBQUksdUJBQXNCO0FBQUMsVUFBSSxJQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxNQUFJLEtBQUksSUFBRSxDQUFDLENBQUMsRUFBRTtBQUFLLGFBQU0sQ0FBQyxJQUFFLEVBQUUsWUFBVSxJQUFHLEtBQUcsSUFBRSxDQUFDLEtBQUksRUFBRSxNQUFNLENBQUMsSUFBRSxJQUFHLEtBQUcsQ0FBQyxLQUFHLEdBQUcsRUFBRSxtQkFBbUIsSUFBRSxNQUFJLElBQUcsR0FBR0EsSUFBRSxDQUFDLEdBQUUsRUFBRUEsSUFBRSxHQUFFLENBQUMsR0FBRSxDQUFDLEtBQUcsQ0FBQyxJQUFFLEtBQUcsS0FBSSxFQUFFLGNBQWMsQ0FBQztBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUk7QUFBcUIsYUFBTSxDQUFDLGFBQVksRUFBRSxNQUFNLEdBQUUsR0FBR0EsSUFBRSxDQUFDLEdBQUUsUUFBTyxFQUFFLGVBQWUsR0FBRSxFQUFFQSxJQUFFLEdBQUUsQ0FBQyxHQUFFLEtBQUksRUFBRSxjQUFjLENBQUM7QUFBQSxJQUFFLEtBQUk7QUFBZSxhQUFNLENBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxFQUFFLEdBQUUsRUFBRUEsSUFBRSxHQUFFLEdBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUUsR0FBRztBQUFBLElBQUUsS0FBSTtBQUFRLGFBQU8sRUFBRSxDQUFDLEVBQUUsUUFBTSxDQUFDLEVBQUUsT0FBTyxHQUFFLElBQUksSUFBRSxJQUFHLEVBQUUsTUFBTSxHQUFFLEVBQUUsVUFBVSxTQUFPLElBQUUsRUFBRSxDQUFDLEtBQUksRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLEVBQUUsSUFBRyxJQUFJLEdBQUUsQ0FBQyxHQUFFLEVBQUVBLElBQUUsR0FBRSxHQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFF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RSxXQUFXLGlCQUFpQixJQUFFLEVBQUUsS0FBSyxPQUFPLElBQUUsRUFBRSxLQUFLLFdBQVcsR0FBRSxFQUFFLEtBQUssS0FBSSxFQUFFLE1BQU0sQ0FBQyxHQUFFLENBQUMsRUFBRSxXQUFXLGlCQUFpQixLQUFHLEVBQUUsV0FBVyxTQUFPLEtBQUcsRUFBRSxLQUFLLGdCQUFlLEdBQUcsR0FBR0EsSUFBRSxHQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUUsS0FBSyxFQUFFQSxJQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUUsRUFBRSxPQUFPLFNBQU8sS0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFLLEVBQUUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxFQUFFQSxJQUFFLEdBQUUsR0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUUsR0FBRSxHQUFHLENBQUMsR0FBRTtBQUFBLElBQUM7QUFBQSxJQUFDLEtBQUk7QUFBa0IsYUFBTSxDQUFDLEVBQUVBLElBQUUsR0FBRSxDQUFDLEdBQUUsRUFBRSxNQUFNLEdBQUUsRUFBRSxVQUFVLFNBQU8sSUFBRSxFQUFFLENBQUMsS0FBSSxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUMsRUFBRSxJQUFHLElBQUksR0FBRSxDQUFDLEdBQUUsRUFBRUEsSUFBRSxHQUFFLEdBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUUsR0FBRyxDQUFDLElBQUUsSUFBRyxNQUFLLEVBQUUsTUFBTSxHQUFFLEVBQUVBLElBQUUsR0FBRSxDQUFDLENBQUM7QUFBQSxJQUFFLEtBQUk7QUFBc0IsYUFBTSxDQUFDLEVBQUVBLElBQUUsR0FBRSxDQUFDLEdBQUUsY0FBYSxLQUFJLEVBQUUsTUFBTSxHQUFFLEVBQUUsVUFBVSxTQUFPLElBQUUsRUFBRSxDQUFDLEtBQUksRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLEVBQUUsSUFBRyxJQUFJLEdBQUUsQ0FBQyxHQUFFLEVBQUVBLElBQUUsR0FBRSxHQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFFLEdBQUcsQ0FBQyxJQUFFLElBQUcsRUFB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QUU7QUFBQyxNQUFJLElBQUVBLEdBQUUsZUFBZSxTQUFPLEdBQUUsSUFBRSxHQUFHLFNBQVMsQ0FBQyxJQUFFQSxHQUFFLE1BQUssSUFBRSxFQUFFLE9BQUssR0FBRSxJQUFFQSxHQUFFLGVBQWUsT0FBSyxHQUFFLElBQUUsRUFBRSxPQUFLLEdBQUUsSUFBRSxFQUFFLFNBQU8sSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLFNBQU8sR0FBRSxJQUFFLEdBQUdBLEdBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQUEsR0FDanlFLElBQUUsRUFBRSxNQUFNLGNBQWMsR0FBRSxJQUFFLEVBQUUsQ0FBQztBQUFFLE1BQUcsRUFBRSxTQUFPLEtBQUk7QUFBQyxRQUFJLElBQUUsS0FBSyxNQUFNLElBQUUsRUFBRSxHQUFFLEtBQUcsSUFBRSxJQUFHLElBQUUsQ0FBRTtBQUFDLGFBQVEsSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLEtBQUcsR0FBRyxHQUFFLEtBQUssRUFBRSxNQUFNLEdBQUUsSUFBRSxFQUFFLENBQUM7QUFBRSxXQUFPLElBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQUssRUFBRSxDQUFDLENBQUMsR0FBRSxHQUFHLEVBQUUsTUFBTSxHQUFFLElBQUUsQ0FBQyxFQUFFLElBQUksT0FBRyxDQUFDLEtBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxLQUFJLElBQUksU0FBUyxFQUFFLENBQUMsR0FBRSxDQUFDLEtBQUksRUFBRSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUFDO0FBQUMsU0FBTyxJQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBRSxDQUFDLE1BQUssRUFBRSxJQUFFLENBQUMsQ0FBQyxHQUFFLENBQUMsR0FBRyxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsS0FBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLEdBQUUsQ0FBQyxHQUFHLElBQUUsQ0FBQyxNQUFLLEVBQUUsSUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLElBQUU7QUFBQyxNQUFJLElBQUVBLEdBQUUsT0FBTyxDQUFDLENBQUMsR0FBRSxDQUFDLE1BQUksTUFBSSxNQUFNLEdBQUUsSUFBRSxLQUFLLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFFLFNBQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsTUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFHLElBQUUsTUFBSSxJQUFFLEdBQUcsRUFBRSxLQUFLO0FBQUEsQ0FDM2Q7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRTtBQUFDLE1BQUksSUFBRUEsR0FBRSxDQUFDO0FBQUUsU0FBTyxLQUFHLFFBQU0sVUFBUyxLQUFHLFlBQVcsSUFBRSxFQUFDLE9BQU0sR0FBRSxRQUFPQSxHQUFFLENBQUMsR0FBRSxXQUFVQSxHQUFFLENBQUMsR0FBRSxNQUFLQSxHQUFFLENBQUMsR0FBRSxlQUFjQSxHQUFFLENBQUMsR0FBRSxZQUFXQSxHQUFFLENBQUMsRUFBQyxJQUFFO0FBQUM7QUFBQyxJQUFJLElBQUUsTUFBTSxVQUFVLE1BQUs7QUFBQSxFQUFDLFlBQVksTUFBSyxHQUFFO0FBQUMsUUFBSSxHQUFFLEdBQUU7QUFBRSxRQUFHLEVBQUMsT0FBTSxHQUFFLFFBQU8sR0FBRSxXQUFVLEdBQUUsTUFBSyxHQUFFLGVBQWMsR0FBRSxZQUFXLEVBQUMsSUFBRSxHQUFHLENBQUM7QUFBRSxVQUFNLENBQUMsR0FBRSxLQUFLLE9BQUssZ0JBQWUsS0FBSyxPQUFLLEtBQUcsUUFBTyxLQUFLLGdCQUFjLEtBQUcsUUFBTyxLQUFLLFFBQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFFLElBQUUsSUFBRSxDQUFDLENBQUMsSUFBRSxNQUFNO0FBQUUsUUFBSSxJQUFFLElBQUksSUFBRSxLQUFLLFdBQVMsUUFBTSxNQUFJLFNBQU8sU0FBTyxFQUFFLElBQUksT0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLE9BQUcsS0FBRyxJQUFJLENBQUM7QUFBRSxTQUFLLFNBQU8sTUFBSSxLQUFH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LElBQUUsQ0FBQSxFQUFHO0FBQUUsU0FBUyxHQUFHQSxJQUFFO0FBQUMsU0FBT0EsT0FBSSxLQUFHQSxPQUFJO0FBQUU7QUFBQyxTQUFTLEVBQUVBLElBQUU7QUFBQyxTQUFPQSxNQUFHLE1BQUlBLE1BQUc7QUFBRTtBQUFDLFNBQVMsR0FBR0EsSUFBRTtBQUFDLFNBQU9BLE1BQUcsTUFBSUEsTUFBRyxPQUFLQSxNQUFHLE1BQUlBLE1BQUc7QUFBRTtBQUFDLFNBQVMsR0FBR0EsSUFBRTtBQUFDLFNBQU8sR0FBR0EsRUFBQyxLQUFHQSxPQUFJO0FBQUU7QUFBQyxTQUFTLEdBQUdBLElBQUU7QUFBQyxTQUFPLEdBQUdBLEVBQUMsS0FBRyxFQUFFQSxFQUFDLEtBQUdBLE9BQUk7QUFBRTtBQUFDLFNBQVMsR0FBR0EsSUFBRTtBQUFDLE1BQUk7QUFBRSxNQUFJLElBQUUsT0FBTyxrQkFBaUIsSUFBRSxNQUFLLElBQUU7QUFBRyxXQUFRLElBQUUsR0FBRSxJQUFFQSxHQUFFLFFBQU8sRUFBRSxHQUFFO0FBQUMsUUFBSTtBQUFFLFFBQUksSUFBRUEsR0FBRSxDQUFDLEdBQUUsSUFBRSxHQUFHLENBQUM7QUFBRSxVQUFJLEVBQUUsV0FBUyxLQUFHLElBQUUsT0FBSyxRQUFNLE1BQUksU0FBTyxJQUFFLEdBQUUsSUFBRSxHQUFFLE1BQUksS0FBRyxJQUFFLE1BQUksSUFBRTtBQUFBLEVBQUc7QUFBQyxTQUFPQSxHQUFFLElBQUksQ0FBQyxHQUFFLE1BQUksTUFBSSxJQUFFLElBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBRSxPQUFLLFFBQU0sTUFBSSxTQUFPLElBQUUsR0FBRSxJQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRTtBQUFDLE1BQUksSUFBRTtBQUFFLFNBQUssSUFBRUEsR0FBRSxVQUFRLEdBQUdBLEdBQUUsV0FBVyxDQUFDLENBQUMsSUFBRyxHQUFFO0FBQUUsU0FBTztBQUFDO0FBQUMsSUFBSTtBQUFBLENBQUcsU0FBU0EsSUFBRTtBQUFDLEVBQUFBLEdBQUUsTUFBSSxTQUFRQSxHQUFFLE1BQUksU0FBUUEsR0FBRSxPQUFLLEtBQUlBLEdBQUUsU0FBTyxLQUFJQSxHQUFFLE1BQUksS0FBSUEsR0FBRSxVQUFRLEtBQUlBLEdBQUUsVUFBUSxLQUFJQSxHQUFFLFNBQU8sT0FBTUEsR0FBRSxRQUFNLEtBQUlBLEdBQUUsU0FBTyxLQUFJQSxHQUFFLEtBQUcsS0FBSUEsR0FBRSxZQUFVLEtBQUlBLEdBQUUsWUFBVSxLQUFJQSxHQUFFLFVBQVEsS0FBSUEsR0FBRSxPQUFLLEtBQUlBLEdBQUUsVUFBUSxLQUFJQSxHQUFFLE9BQUssUUFBT0EsR0FBRSxNQUFJLE9BQU1BLEdBQUUsUUFBTSxTQUFRQSxHQUFFLFNBQU8sVUFBU0EsR0FBRSxlQUFhLGVBQWNBLEdBQUUsVUFBUTtBQUFTLEdBQUcsTUFBSSxJQUFFLENBQUUsRUFBQztBQUFFLElBQUksS0FBRyxNQUFLO0FBQUEsRUFBQyxZQUFZLEdBQUU7QUFBQyxRQUFJLElBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUUsU0FBSyxTQUFPLEdBQUUsS0FBSyxZQUFVLEdBQUUsS0FBSyxRQUFNLEdBQUUsS0FBSyxPQUFLLEdBQUUsS0FBSyxZQUFVO0FBQUEsRUFBQztBQUFBLEVBQUMsS0FBSSxPQUFPLFdBQVcsSUFBRztBQUFDLFdBQU07QUFBQSxFQUFPO0FBQUEsRUFBQyxVQUFTO0FBQUMsV0FBTyxLQUFLLFlBQVUsS0FBSyxPQUFNLEtBQUssUUFBTSxLQUFLLFVBQVc7QUFBQSxFQUFBO0FBQUEsRUFBQyxZQUFXO0FBQUMsUUFBSSxJQUFFLEtBQUs7QUFBTSxRQUFHLEVBQUUsU0FBTyxFQUFFLElBQUk7QUFBRyxVQUFHLEVBQUUsS0FBSyxLQUFFLEVBQUU7QUFBQSxXQUFTO0FBQUMsWUFBSSxJQUFFLEdBQUcsTUFBSyxFQUFFLEdBQUc7QUFBRSxVQUFFLE9BQUssR0FBRSxFQUFFLE9BQUssR0FBRSxJQUFFO0FBQUEsTUFBQztBQUFBLFdBQU8sRUFBRSxTQUFPLEVBQUU7QUFBUyxXQUFPO0FBQUEsRUFBQztBQUFDO0FBQUUsU0FBUyxHQUFHQSxJQUFFO0FBQUMsU0FBT0EsT0FBSSxFQUFFLFFBQU1BLE9BQUksRUFBRSxVQUFRQSxPQUFJLEVBQUUsT0FBS0EsT0FBSSxFQUFFLFdBQVNBLE9BQUksRUFBRSxXQUFTQSxPQUFJLEVBQUUsVUFBUUEsT0FBSSxFQUFFLFNBQU9BLE9BQUksRUFBRSxVQUFRQSxPQUFJLEVBQUUsTUFBSUEsT0FBSSxFQUFFLGFBQVdBLE9BQUksRUFBRSxhQUFXQSxPQUFJLEVBQUUsV0FBU0EsT0FBSSxFQUFFLFFBQU1BLE9BQUksRUFBRTtBQUFPO0FBQUMsU0FBUyxFQUFFQSxJQUFFO0FBQUMsU0FBT0EsTUFBRyxLQUFHQSxNQUFHLFNBQU9BLE1BQUcsU0FBT0EsTUFBRztBQUFPO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxTQUFPLEdBQUdBLEdBQUUsV0FBVyxDQUFDLENBQUMsS0FBRyxHQUFHQSxHQUFFLFdBQVcsSUFBRSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRTtBQUFDLFNBQU9BLE1BQUcsU0FBT0EsTUFBRztBQUFLO0FBQUMsU0FBUyxHQUFHQSxJQUFFO0FBQUMsU0FBT0EsTUFBRyxTQUFPQSxNQUFHO0FBQUs7QUFBQyxTQUFTLEVBQUVBLElBQUUsR0FBRTtBQUFDLE1BQUksSUFBRUEsR0FBRSxPQUFPLEtBQUssWUFBWSxDQUFDO0FBQUUsTUFBRyxNQUFJLE9BQU8sUUFBTyxFQUFFO0FBQUksTUFBRyxLQUFHLE1BQUksS0FBRyxLQUFJO0FBQUMsUUFBSSxJQUFFLE9BQU8sY0FBYyxDQUFDO0FBQUUsV0FBTyxNQUFJLE1BQUksUUFBTSxJQUFJLENBQUM7QUFBQSxFQUFHO0FBQUMsU0FBTSxPQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsWUFBYSxFQUFDLFNBQVMsR0FBRSxHQUFHO0FBQUM7QUFBQyxTQUFTLEVBQUVBLElBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRTtBQUFDLE1BQUksSUFBRUEsR0FBRSxNQUFLLElBQUUsSUFBRSxJQUFFQSxHQUFFO0FBQVUsU0FBTyxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRSxHQUFFO0FBQUMsTUFBSSxJQUFFQSxHQUFFLE9BQU8sTUFBSyxJQUFFLEVBQUUsUUFBTyxJQUFFO0FBQUUsU0FBSyxJQUFFLEtBQUc7QUFBQyxRQUFJLElBQUUsRUFBRSxXQUFXLENBQUM7QUFBRSxZQUFPLEdBQUc7QUFBQSxNQUFBLEtBQUs7QUFBQSxNQUFNLEtBQUs7QUFBQSxNQUFFLEtBQUs7QUFBQSxNQUFHLEtBQUs7QUFBRyxVQUFFO0FBQUU7QUFBQSxNQUFTLEtBQUs7QUFBRyxVQUFFLEdBQUUsRUFBRUEsR0FBRSxNQUFLQSxHQUFFLFlBQVU7QUFBRTtBQUFBLE1BQVMsS0FBSztBQUFHLFVBQUUsV0FBVyxJQUFFLENBQUMsTUFBSSxLQUFHLEtBQUcsSUFBRSxFQUFFLEdBQUUsRUFBRUEsR0FBRSxNQUFLQSxHQUFFLFlBQVU7QUFBRTtBQUFBLE1BQVMsS0FBSztBQUFHLGVBQU8sR0FBR0EsSUFBRSxDQUFDO0FBQUEsTUFBRSxLQUFLO0FBQUcsZUFBTyxFQUFFQSxJQUFFLEVBQUUsTUFBSyxHQUFFLElBQUUsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFHLGVBQU8sRUFBRUEsSUFBRSxFQUFFLFFBQU8sR0FBRSxJQUFFLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBRyxlQUFPLEVBQUVBLElBQUUsRUFBRSxLQUFJLEdBQUUsSUFBRSxDQUFDO0FBQUEsTUFBRSxLQUFLO0FBQUcsZUFBTyxFQUFFQSxJQUFFLEVBQUUsU0FBUSxHQUFFLElBQUUsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFHLGVBQU8sRUFBRUEsSUFBRSxFQUFFLFNBQVEsR0FBRSxJQUFFLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBRyxZQUFHLEVBQUUsV0FBVyxJQUFFLENBQUMsTUFBSSxNQUFJLEVBQUUsV0FBVyxJQUFFLENBQUMsTUFBSSxHQUFHLFFBQU8sRUFBRUEsSUFBRSxFQUFFLFFBQU8sR0FBRSxJQUFFLENBQUM7QUFBRTtBQUFBLE1BQU0sS0FBSztBQUFHLGVBQU8sRUFBRUEsSUFBRSxFQUFFLE9BQU0sR0FBRSxJQUFFLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBRyxlQUFPLEVBQUVBLElBQUUsRUFBRSxRQUFPLEdBQUUsSUFBRSxDQUFDO0FBQUEsTUFBRSxLQUFLO0FBQUcsZUFBTyxFQUFFQSxJQUFFLEVBQUUsSUFBRyxHQUFFLElBQUUsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFHLGVBQU8sRUFBRUEsSUFBRSxFQUFFLFdBQVUsR0FBRSxJQUFFLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBRyxlQUFPLEVBQUVBLElBQUUsRUFBRSxXQUFVLEdBQUUsSUFBRSxDQUFDO0FBQUEsTUFBRSxLQUFLO0FBQUksZUFBTyxFQUFFQSxJQUFFLEVBQUUsU0FBUSxHQUFFLElBQUUsQ0FBQztBQUFBLE1BQUUsS0FBSztBQUFJLGVBQU8sRUFBRUEsSUFBRSxFQUFFLE1BQUssR0FBRSxJQUFFLENBQUM7QUFBQSxNQUFFLEtBQUs7QUFBSSxlQUFPLEVBQUVBLElBQUUsRUFBRSxTQUFRLEdBQUUsSUFBRSxDQUFDO0FBQUEsTUFBRSxLQUFLO0FBQUcsZUFBTyxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksTUFBSSxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksS0FBRyxHQUFHQSxJQUFFLENBQUMsSUFBRSxHQUFHQSxJQUFFLENBQUM7QUFBQSxJQUFDO0FBQUMsUUFBRyxFQUFFLENBQUMsS0FBRyxNQUFJLEdBQUcsUUFBTyxHQUFHQSxJQUFFLEdBQUUsQ0FBQztBQUFFLFFBQUcsR0FBRyxDQUFDLEVBQUUsUUFBTyxHQUFHQSxJQUFFLENBQUM7QUFBRSxVQUFNLEVBQUVBLEdBQUUsUUFBTyxHQUFFLE1BQUksS0FBRyxtRkFBaUYsRUFBRSxDQUFDLEtBQUcsR0FBRyxHQUFFLENBQUMsSUFBRSx5QkFBeUIsRUFBRUEsSUFBRSxDQUFDLENBQUMsTUFBSSxzQkFBc0IsRUFBRUEsSUFBRSxDQUFDLENBQUMsR0FBRztBQUFBLEVBQUM7QUFBQyxTQUFPLEVBQUVBLElBQUUsRUFBRSxLQUFJLEdBQUUsQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxNQUFJLElBQUVBLEdBQUUsT0FBTyxNQUFLLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRTtBQUFFLFNBQUssSUFBRSxLQUFHO0FBQUMsUUFBSSxJQUFFLEVBQUUsV0FBVyxDQUFDO0FBQUUsUUFBRyxNQUFJLE1BQUksTUFBSSxHQUFHO0FBQU0sUUFBRyxFQUFFLENBQUMsRUFBRSxHQUFFO0FBQUEsYUFBVSxHQUFHLEdBQUUsQ0FBQyxFQUFFLE1BQUc7QUFBQSxRQUFPO0FBQUEsRUFBSztBQUFDLFNBQU8sRUFBRUEsSUFBRSxFQUFFLFNBQVEsR0FBRSxHQUFFLEVBQUUsTUFBTSxJQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLElBQUUsR0FBRSxHQUFFO0FBQUMsTUFBSSxJQUFFQSxHQUFFLE9BQU8sTUFBSyxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUU7QUFBRyxNQUFHLE1BQUksT0FBSyxJQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsSUFBRyxNQUFJLElBQUc7QUFBQyxRQUFHLElBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU0sRUFBRUEsR0FBRSxRQUFPLEdBQUUsNkNBQTZDLEVBQUVBLElBQUUsQ0FBQyxDQUFDLEdBQUc7QUFBQSxFQUFDLE1BQU0sS0FBRSxHQUFHQSxJQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxXQUFXLENBQUM7QUFBRSxNQUFHLE1BQUksT0FBSyxJQUFFLE1BQUcsSUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEdBQUUsSUFBRSxHQUFHQSxJQUFFLEdBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRSxXQUFXLENBQUMsS0FBSSxNQUFJLE1BQUksTUFBSSxTQUFPLElBQUUsTUFBRyxJQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsSUFBRyxNQUFJLE1BQUksTUFBSSxRQUFNLElBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxJQUFHLElBQUUsR0FBR0EsSUFBRSxHQUFFLENBQUMsR0FBRSxJQUFFLEVBQUUsV0FBVyxDQUFDLElBQUcsTUFBSSxNQUFJLEdBQUcsQ0FBQyxFQUFFLE9BQU0sRUFBRUEsR0FBRSxRQUFPLEdBQUUsMkNBQTJDLEVBQUVBLElBQUUsQ0FBQyxDQUFDLEdBQUc7QUFBRSxTQUFPLEVBQUVBLElBQUUsSUFBRSxFQUFFLFFBQU0sRUFBRSxLQUFJLEdBQUUsR0FBRSxFQUFFLE1BQU0sR0FBRSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRSxHQUFFLEdBQUU7QUFBQyxNQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTSxFQUFFQSxHQUFFLFFBQU8sR0FBRSwyQ0FBMkMsRUFBRUEsSUFBRSxDQUFDLENBQUMsR0FBRztBQUFFLE1BQUksSUFBRUEsR0FBRSxPQUFPLE1BQUssSUFBRSxJQUFFO0FBQUUsU0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBRyxHQUFFO0FBQUUsU0FBTztBQUFDO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxNQUFJLElBQUVBLEdBQUUsT0FBTyxNQUFLLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRSxHQUFFLElBQUUsR0FBRSxJQUFFO0FBQUcsU0FBSyxJQUFFLEtBQUc7QUFBQyxRQUFJLElBQUUsRUFBRSxXQUFXLENBQUM7QUFBRSxRQUFHLE1BQUksR0FBRyxRQUFPLEtBQUcsRUFBRSxNQUFNLEdBQUUsQ0FBQyxHQUFFLEVBQUVBLElBQUUsRUFBRSxRQUFPLEdBQUUsSUFBRSxHQUFFLENBQUM7QUFBRSxRQUFHLE1BQUksSUFBRztBQUFDLFdBQUcsRUFBRSxNQUFNLEdBQUUsQ0FBQztBQUFFLFVBQUksSUFBRSxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksTUFBSSxFQUFFLFdBQVcsSUFBRSxDQUFDLE1BQUksTUFBSSxHQUFHQSxJQUFFLENBQUMsSUFBRSxHQUFHQSxJQUFFLENBQUMsSUFBRSxHQUFHQSxJQUFFLENBQUM7QUFBRSxXQUFHLEVBQUUsT0FBTSxLQUFHLEVBQUUsTUFBSyxJQUFFO0FBQUU7QUFBQSxJQUFRO0FBQUMsUUFBRyxNQUFJLE1BQUksTUFBSSxHQUFHO0FBQU0sUUFBRyxFQUFFLENBQUMsRUFBRSxHQUFFO0FBQUEsYUFBVSxHQUFHLEdBQUUsQ0FBQyxFQUFFLE1BQUc7QUFBQSxRQUFPLE9BQU0sRUFBRUEsR0FBRSxRQUFPLEdBQUUsb0NBQW9DLEVBQUVBLElBQUUsQ0FBQyxDQUFDLEdBQUc7QUFBQSxFQUFDO0FBQUMsUUFBTSxFQUFFQSxHQUFFLFFBQU8sR0FBRSxzQkFBc0I7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRSxHQUFFO0FBQUMsTUFBSSxJQUFFQSxHQUFFLE9BQU8sTUFBSyxJQUFFLEdBQUUsSUFBRTtBQUFFLFNBQUssSUFBRSxNQUFJO0FBQUMsUUFBSSxJQUFFLEVBQUUsV0FBVyxJQUFFLEdBQUc7QUFBRSxRQUFHLE1BQUksS0FBSTtBQUFDLFVBQUcsSUFBRSxLQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFBTSxhQUFNLEVBQUMsT0FBTSxPQUFPLGNBQWMsQ0FBQyxHQUFFLE1BQUssRUFBQztBQUFBLElBQUM7QUFBQyxRQUFHLElBQUUsS0FBRyxJQUFFLEVBQUUsQ0FBQyxHQUFFLElBQUUsRUFBRTtBQUFBLEVBQUs7QUFBQyxRQUFNLEVBQUVBLEdBQUUsUUFBTyxHQUFFLHFDQUFxQyxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsQ0FBQyxJQUFJO0FBQUM7QUFBQyxTQUFTLEdBQUdBLElBQUUsR0FBRTtBQUFDLE1BQUksSUFBRUEsR0FBRSxPQUFPLE1BQUssSUFBRSxHQUFHLEdBQUUsSUFBRSxDQUFDO0FBQUUsTUFBRyxFQUFFLENBQUMsRUFBRSxRQUFNLEVBQUMsT0FBTSxPQUFPLGNBQWMsQ0FBQyxHQUFFLE1BQUssRUFBQztBQUFFLE1BQUcsR0FBRyxDQUFDLEtBQUcsRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLE1BQUksRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLEtBQUk7QUFBQyxRQUFJLElBQUUsR0FBRyxHQUFFLElBQUUsQ0FBQztBQUFFLFFBQUcsR0FBRyxDQUFDLEVBQUUsUUFBTSxFQUFDLE9BQU0sT0FBTyxjQUFjLEdBQUUsQ0FBQyxHQUFFLE1BQUssR0FBRTtBQUFBLEVBQUM7QUFBQyxRQUFNLEVBQUVBLEdBQUUsUUFBTyxHQUFFLHFDQUFxQyxFQUFFLE1BQU0sR0FBRSxJQUFFLENBQUMsQ0FBQyxJQUFJO0FBQUM7QUFBQyxTQUFTLEdBQUdBLElBQUUsR0FBRTtBQUFDLFNBQU8sRUFBRUEsR0FBRSxXQUFXLENBQUMsQ0FBQyxLQUFHLEtBQUcsRUFBRUEsR0FBRSxXQUFXLElBQUUsQ0FBQyxDQUFDLEtBQUcsSUFBRSxFQUFFQSxHQUFFLFdBQVcsSUFBRSxDQUFDLENBQUMsS0FBRyxJQUFFLEVBQUVBLEdBQUUsV0FBVyxJQUFFLENBQUMsQ0FBQztBQUFDO0FBQUMsU0FBUyxFQUFFQSxJQUFFO0FBQUMsU0FBT0EsTUFBRyxNQUFJQSxNQUFHLEtBQUdBLEtBQUUsS0FBR0EsTUFBRyxNQUFJQSxNQUFHLEtBQUdBLEtBQUUsS0FBR0EsTUFBRyxNQUFJQSxNQUFHLE1BQUlBLEtBQUUsS0FBRztBQUFFO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxNQUFJLElBQUVBLEdBQUUsT0FBTztBQUFLLFVBQU8sRUFBRSxXQUFXLElBQUUsQ0FBQyxHQUFHO0FBQUEsSUFBQSxLQUFLO0FBQUcsYUFBTSxFQUFDLE9BQU0sS0FBSSxNQUFLLEVBQUM7QUFBQSxJQUFFLEtBQUs7QUFBRyxhQUFNLEVBQUMsT0FBTSxNQUFLLE1BQUssRUFBQztBQUFBLElBQUUsS0FBSztBQUFHLGFBQU0sRUFBQyxPQUFNLEtBQUksTUFBSyxFQUFDO0FBQUEsSUFBRSxLQUFLO0FBQUcsYUFBTSxFQUFDLE9BQU0sTUFBSyxNQUFLLEVBQUM7QUFBQSxJQUFFLEtBQUs7QUFBSSxhQUFNLEVBQUMsT0FBTSxNQUFLLE1BQUssRUFBQztBQUFBLElBQUUsS0FBSztBQUFJLGFBQU0sRUFBQyxPQUFNO0FBQUEsR0FDdjRQLE1BQUssRUFBQztBQUFBLElBQUUsS0FBSztBQUFJLGFBQU0sRUFBQyxPQUFNLE1BQUssTUFBSyxFQUFDO0FBQUEsSUFBRSxLQUFLO0FBQUksYUFBTSxFQUFDLE9BQU0sS0FBSSxNQUFLLEVBQUM7QUFBQSxFQUFDO0FBQUMsUUFBTSxFQUFFQSxHQUFFLFFBQU8sR0FBRSx1Q0FBdUMsRUFBRSxNQUFNLEdBQUUsSUFBRSxDQUFDLENBQUMsSUFBSTtBQUFDO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxNQUFJLElBQUVBLEdBQUUsT0FBTyxNQUFLLElBQUUsRUFBRSxRQUFPLElBQUVBLEdBQUUsV0FBVSxJQUFFLElBQUUsR0FBRSxJQUFFLEdBQUUsSUFBRSxJQUFHLElBQUUsQ0FBRTtBQUFDLFNBQUssSUFBRSxLQUFHO0FBQUMsUUFBSSxJQUFFLEVBQUUsV0FBVyxDQUFDO0FBQUUsUUFBRyxNQUFJLE1BQUksRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLE1BQUksRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLElBQUc7QUFBQyxXQUFHLEVBQUUsTUFBTSxHQUFFLENBQUMsR0FBRSxFQUFFLEtBQUssQ0FBQztBQUFFLFVBQUksSUFBRSxFQUFFQSxJQUFFLEVBQUUsY0FBYSxHQUFFLElBQUUsR0FBRSxHQUFHLENBQUMsRUFBRSxLQUFLO0FBQUEsQ0FDOVksQ0FBQztBQUFFLGFBQU9BLEdBQUUsUUFBTSxFQUFFLFNBQU8sR0FBRUEsR0FBRSxZQUFVLEdBQUU7QUFBQSxJQUFDO0FBQUMsUUFBRyxNQUFJLE1BQUksRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLE1BQUksRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLE1BQUksRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLElBQUc7QUFBQyxXQUFHLEVBQUUsTUFBTSxHQUFFLENBQUMsR0FBRSxJQUFFLElBQUUsR0FBRSxLQUFHO0FBQUU7QUFBQSxJQUFRO0FBQUMsUUFBRyxNQUFJLE1BQUksTUFBSSxJQUFHO0FBQUMsV0FBRyxFQUFFLE1BQU0sR0FBRSxDQUFDLEdBQUUsRUFBRSxLQUFLLENBQUMsR0FBRSxNQUFJLE1BQUksRUFBRSxXQUFXLElBQUUsQ0FBQyxNQUFJLEtBQUcsS0FBRyxJQUFFLEVBQUUsR0FBRSxJQUFFLElBQUcsSUFBRSxHQUFFLElBQUU7QUFBRTtBQUFBLElBQVE7QUFBQyxRQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUU7QUFBQSxhQUFVLEdBQUcsR0FBRSxDQUFDLEVBQUUsTUFBRztBQUFBLFFBQU8sT0FBTSxFQUFFQSxHQUFFLFFBQU8sR0FBRSxvQ0FBb0MsRUFBRUEsSUFBRSxDQUFDLENBQUMsR0FBRztBQUFBLEVBQUM7QUFBQyxRQUFNLEVBQUVBLEdBQUUsUUFBTyxHQUFFLHNCQUFzQjtBQUFDO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxNQUFJLElBQUVBLEdBQUUsT0FBTyxNQUFLLElBQUUsRUFBRSxRQUFPLElBQUUsSUFBRTtBQUFFLFNBQUssSUFBRSxLQUFHO0FBQUMsUUFBSSxJQUFFLEVBQUUsV0FBVyxDQUFDO0FBQUUsUUFBRyxHQUFHLENBQUMsRUFBRSxHQUFFO0FBQUEsUUFBTztBQUFBLEVBQUs7QUFBQyxTQUFPLEVBQUVBLElBQUUsRUFBRSxNQUFLLEdBQUUsR0FBRSxFQUFFLE1BQU0sR0FBRSxDQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRSxHQUFFO0FBQVMsUUFBTSxJQUFJLE1BQU0sQ0FBQztBQUFDO0FBQUMsU0FBUyxHQUFHQSxJQUFFO0FBQUMsU0FBTyxHQUFHQSxJQUFFLENBQUEsQ0FBRTtBQUFDO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxVQUFPLE9BQU9BLElBQUM7QUFBQSxJQUFFLEtBQUk7QUFBUyxhQUFPLEtBQUssVUFBVUEsRUFBQztBQUFBLElBQUUsS0FBSTtBQUFXLGFBQU9BLEdBQUUsT0FBSyxhQUFhQSxHQUFFLElBQUksTUFBSTtBQUFBLElBQWEsS0FBSTtBQUFTLGFBQU8sR0FBR0EsSUFBRSxDQUFDO0FBQUEsSUFBRTtBQUFRLGFBQU8sT0FBT0EsRUFBQztBQUFBLEVBQUM7QUFBQztBQUFDLFNBQVMsR0FBR0EsSUFBRSxHQUFFO0FBQUMsTUFBR0EsT0FBSSxLQUFLLFFBQU07QUFBTyxNQUFHLEVBQUUsU0FBU0EsRUFBQyxFQUFFLFFBQU07QUFBYSxNQUFJLElBQUUsQ0FBQyxHQUFHLEdBQUVBLEVBQUM7QUFBRSxNQUFHLEdBQUdBLEVBQUMsR0FBRTtBQUFDLFFBQUksSUFBRUEsR0FBRSxPQUFRO0FBQUMsUUFBRyxNQUFJQSxHQUFFLFFBQU8sT0FBTyxLQUFHLFdBQVMsSUFBRSxHQUFHLEdBQUUsQ0FBQztBQUFBLEVBQUMsV0FBUyxNQUFNLFFBQVFBLEVBQUMsRUFBRSxRQUFPLEdBQUdBLElBQUUsQ0FBQztBQUFFLFNBQU8sR0FBR0EsSUFBRSxDQUFDO0FBQUM7QUFBQyxTQUFTLEdBQUdBLElBQUU7QUFBQyxTQUFPLE9BQU9BLEdBQUUsVUFBUTtBQUFVO0FBQUMsU0FBUyxHQUFHQSxJQUFFLEdBQUU7QUFBQyxNQUFJLElBQUUsT0FBTyxRQUFRQSxFQUFDO0FBQUUsU0FBTyxFQUFFLFdBQVMsSUFBRSxPQUFLLEVBQUUsU0FBTyxJQUFFLE1BQUksR0FBR0EsRUFBQyxJQUFFLE1BQUksT0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUUsQ0FBQyxNQUFJLElBQUUsT0FBSyxHQUFHLEdBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUU7QUFBSTtBQUFDLFNBQVMsR0FBR0EsSUFBRSxHQUFFO0FBQUMsTUFBR0EsR0FBRSxXQUFTLEVBQUUsUUFBTTtBQUFLLE1BQUcsRUFBRSxTQUFPLEVBQUUsUUFBTTtBQUFVLE1BQUksSUFBRSxLQUFLLElBQUksSUFBR0EsR0FBRSxNQUFNLEdBQUUsSUFBRUEsR0FBRSxTQUFPLEdBQUUsSUFBRSxDQUFBO0FBQUcsV0FBUSxJQUFFLEdBQUUsSUFBRSxHQUFFLEVBQUUsRUFBRSxHQUFFLEtBQUssR0FBR0EsR0FBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDO0FBQUUsU0FBTyxNQUFJLElBQUUsRUFBRSxLQUFLLGlCQUFp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
