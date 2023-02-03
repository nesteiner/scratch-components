import { defineComponent as b, useCssVars as C, unref as u, computed as f, openBlock as E, createElementBlock as S, renderSlot as N, ref as ot, normalizeStyle as it, onMounted as vt, withDirectives as bt } from "vue";
const Et = { class: "row" }, St = /* @__PURE__ */ b({
  __name: "Row",
  props: {
    mainAxisAligment: {
      type: String,
      default: "start"
    },
    crossAxisAligment: {
      type: String,
      default: "start"
    },
    mainAxisSize: {
      type: String,
      default: "max"
    },
    crossAxisSize: {
      type: String,
      default: "min"
    }
  },
  setup(t) {
    const e = t;
    C((a) => ({
      "1bfa89e2": u(s),
      f41ada8a: u(o),
      "5a2934c8": u(n),
      f661adbe: u(r)
    }));
    const n = f(() => i(e.mainAxisAligment)), r = f(() => i(e.crossAxisAligment)), s = f(() => c(e.mainAxisSize)), o = f(() => c(e.crossAxisSize));
    function i(a) {
      return a == "center" ? "center" : a == "start" ? "flex-start" : a == "end" ? "flex-end" : a;
    }
    function c(a) {
      return a == "max" ? "100%" : "fit-content";
    }
    return (a, d) => (E(), S("div", Et, [
      N(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const $ = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, s] of e)
    n[r] = s;
  return n;
}, xe = /* @__PURE__ */ $(St, [["__scopeId", "data-v-4a3ae814"]]), Nt = { class: "column" }, At = /* @__PURE__ */ b({
  __name: "Column",
  props: {
    mainAxisAligment: {
      type: String,
      default: "start"
    },
    crossAxisAligment: {
      type: String,
      default: "start"
    },
    mainAxisSize: {
      type: String,
      default: "max"
    },
    crossAxisSize: {
      type: String,
      default: "min"
    }
  },
  setup(t) {
    const e = t;
    C((a) => ({
      "1270e251": u(o),
      "3948ef8c": u(s),
      "8dce951c": u(n),
      "03cfbdb7": u(r)
    }));
    const n = f(() => i(e.mainAxisAligment)), r = f(() => i(e.crossAxisAligment)), s = f(() => c(e.mainAxisSize)), o = f(() => c(e.crossAxisSize));
    function i(a) {
      return a == "center" ? "center" : a == "start" ? "flex-start" : a == "end" ? "flex-end" : a;
    }
    function c(a) {
      return a == "max" ? "100%" : "fit-content";
    }
    return (a, d) => (E(), S("div", Nt, [
      N(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const we = /* @__PURE__ */ $(At, [["__scopeId", "data-v-d064b4cb"]]), yt = { class: "expanded" }, Ot = /* @__PURE__ */ b({
  __name: "Expanded",
  props: {
    flex: { type: Number, default: 1 }
  },
  setup(t) {
    return C((e) => ({
      "6e306754": t.flex
    })), (e, n) => (E(), S("div", yt, [
      N(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const ve = /* @__PURE__ */ $(Ot, [["__scopeId", "data-v-2c240e85"]]), be = /* @__PURE__ */ b({
  __name: "SizedBox",
  props: {
    width: {
      type: Number,
      default: -1
    },
    height: {
      type: Number,
      default: -1
    }
  },
  setup(t) {
    const e = t, n = f(() => e.width >= 0 ? e.width.toString() + "px" : "fit-content"), r = f(() => e.height >= 0 ? e.height.toString() + "px" : "fit-content"), s = ot({
      width: n.value,
      height: r.value
    });
    return (o, i) => (E(), S("div", {
      class: "sizedbox",
      style: it(s.value)
    }, [
      N(o.$slots, "default")
    ], 4));
  }
}), It = { class: "fractional" }, zt = /* @__PURE__ */ b({
  __name: "Fractional",
  props: {
    widthFactor: { type: Number, default: 1 },
    heightFactor: { type: Number, default: 1 }
  },
  setup(t) {
    const e = t;
    C((s) => ({
      "375a69d3": u(n),
      "7e14ddf8": u(r)
    }));
    const n = f(() => Number(e.widthFactor * 100).toFixed(0).toString() + "%"), r = f(() => Number(e.heightFactor * 100).toFixed(0).toString() + "%");
    return (s, o) => (E(), S("div", It, [
      N(s.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Ee = /* @__PURE__ */ $(zt, [["__scopeId", "data-v-a4454282"]]);
function Rt(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = !0;
  return e ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const $t = Object.assign, Tt = Object.prototype.hasOwnProperty, F = (t, e) => Tt.call(t, e), g = Array.isArray, O = (t) => ct(t) === "[object Map]", Mt = (t) => typeof t == "string", Y = (t) => typeof t == "symbol", P = (t) => t !== null && typeof t == "object", Dt = Object.prototype.toString, ct = (t) => Dt.call(t), at = (t) => ct(t).slice(8, -1), U = (t) => Mt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Vt = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, jt = Vt((t) => t.charAt(0).toUpperCase() + t.slice(1)), q = (t, e) => !Object.is(t, e), Kt = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
function Z(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
const I = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Ct = (t) => (t.w & J) > 0, Ft = (t) => (t.n & J) > 0, L = /* @__PURE__ */ new WeakMap();
let J = 1, h;
const v = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), H = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
let z = !0;
const lt = [];
function Pt() {
  lt.push(z), z = !1;
}
function Bt() {
  const t = lt.pop();
  z = t === void 0 ? !0 : t;
}
function p(t, e, n) {
  if (z && h) {
    let r = L.get(t);
    r || L.set(t, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = I());
    const o = process.env.NODE_ENV !== "production" ? { effect: h, target: t, type: e, key: n } : void 0;
    G(s, o);
  }
}
function G(t, e) {
  let n = !1;
  Ft(t) || (t.n |= J, n = !Ct(t)), n && (t.add(h), h.deps.push(t), process.env.NODE_ENV !== "production" && h.onTrack && h.onTrack(Object.assign({ effect: h }, e)));
}
function x(t, e, n, r, s, o) {
  const i = L.get(t);
  if (!i)
    return;
  let c = [];
  if (e === "clear")
    c = [...i.values()];
  else if (n === "length" && g(t)) {
    const d = Kt(r);
    i.forEach((_, w) => {
      (w === "length" || w >= d) && c.push(_);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), e) {
      case "add":
        g(t) ? U(n) && c.push(i.get("length")) : (c.push(i.get(v)), O(t) && c.push(i.get(H)));
        break;
      case "delete":
        g(t) || (c.push(i.get(v)), O(t) && c.push(i.get(H)));
        break;
      case "set":
        O(t) && c.push(i.get(v));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: s, oldTarget: o } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? A(c[0], a) : A(c[0]));
  else {
    const d = [];
    for (const _ of c)
      _ && d.push(..._);
    process.env.NODE_ENV !== "production" ? A(I(d), a) : A(I(d));
  }
}
function A(t, e) {
  const n = g(t) ? t : [...t];
  for (const r of n)
    r.computed && k(r, e);
  for (const r of n)
    r.computed || k(r, e);
}
function k(t, e) {
  (t !== h || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger($t({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const Wt = /* @__PURE__ */ Rt("__proto__,__v_isRef,__isVue"), ut = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Y)
), Lt = /* @__PURE__ */ ft(), Ht = /* @__PURE__ */ ft(!0), tt = /* @__PURE__ */ Gt();
function Gt() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = l(this);
      for (let o = 0, i = this.length; o < i; o++)
        p(r, "get", o + "");
      const s = r[e](...n);
      return s === -1 || s === !1 ? r[e](...n.map(l)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Pt();
      const r = l(this)[e].apply(this, n);
      return Bt(), r;
    };
  }), t;
}
function ft(t = !1, e = !1) {
  return function(r, s, o) {
    if (s === "__v_isReactive")
      return !t;
    if (s === "__v_isReadonly")
      return t;
    if (s === "__v_isShallow")
      return e;
    if (s === "__v_raw" && o === (t ? e ? ce : ht : e ? ie : _t).get(r))
      return r;
    const i = g(r);
    if (!t && i && F(tt, s))
      return Reflect.get(tt, s, o);
    const c = Reflect.get(r, s, o);
    return (Y(s) ? ut.has(s) : Wt(s)) || (t || p(r, "get", s), e) ? c : y(c) ? i && U(s) ? c : c.value : P(c) ? t ? gt(c) : mt(c) : c;
  };
}
const Yt = /* @__PURE__ */ Ut();
function Ut(t = !1) {
  return function(n, r, s, o) {
    let i = n[r];
    if (K(i) && y(i) && !y(s))
      return !1;
    if (!t && (!wt(s) && !K(s) && (i = l(i), s = l(s)), !g(n) && y(i) && !y(s)))
      return i.value = s, !0;
    const c = g(n) && U(r) ? Number(r) < n.length : F(n, r), a = Reflect.set(n, r, s, o);
    return n === l(o) && (c ? q(s, i) && x(n, "set", r, s, i) : x(n, "add", r, s)), a;
  };
}
function qt(t, e) {
  const n = F(t, e), r = t[e], s = Reflect.deleteProperty(t, e);
  return s && n && x(t, "delete", e, void 0, r), s;
}
function Jt(t, e) {
  const n = Reflect.has(t, e);
  return (!Y(e) || !ut.has(e)) && p(t, "has", e), n;
}
function Qt(t) {
  return p(t, "iterate", g(t) ? "length" : v), Reflect.ownKeys(t);
}
const Xt = {
  get: Lt,
  set: Yt,
  deleteProperty: qt,
  has: Jt,
  ownKeys: Qt
}, Zt = {
  get: Ht,
  set(t, e) {
    return process.env.NODE_ENV !== "production" && Z(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  },
  deleteProperty(t, e) {
    return process.env.NODE_ENV !== "production" && Z(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  }
}, Q = (t) => t, B = (t) => Reflect.getPrototypeOf(t);
function T(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const s = l(t), o = l(e);
  n || (e !== o && p(s, "get", e), p(s, "get", o));
  const { has: i } = B(s), c = r ? Q : n ? X : R;
  if (i.call(s, e))
    return c(t.get(e));
  if (i.call(s, o))
    return c(t.get(o));
  t !== s && t.get(e);
}
function M(t, e = !1) {
  const n = this.__v_raw, r = l(n), s = l(t);
  return e || (t !== s && p(r, "has", t), p(r, "has", s)), t === s ? n.has(t) : n.has(t) || n.has(s);
}
function D(t, e = !1) {
  return t = t.__v_raw, !e && p(l(t), "iterate", v), Reflect.get(t, "size", t);
}
function et(t) {
  t = l(t);
  const e = l(this);
  return B(e).has.call(e, t) || (e.add(t), x(e, "add", t, t)), this;
}
function nt(t, e) {
  e = l(e);
  const n = l(this), { has: r, get: s } = B(n);
  let o = r.call(n, t);
  o ? process.env.NODE_ENV !== "production" && pt(n, r, t) : (t = l(t), o = r.call(n, t));
  const i = s.call(n, t);
  return n.set(t, e), o ? q(e, i) && x(n, "set", t, e, i) : x(n, "add", t, e), this;
}
function st(t) {
  const e = l(this), { has: n, get: r } = B(e);
  let s = n.call(e, t);
  s ? process.env.NODE_ENV !== "production" && pt(e, n, t) : (t = l(t), s = n.call(e, t));
  const o = r ? r.call(e, t) : void 0, i = e.delete(t);
  return s && x(e, "delete", t, void 0, o), i;
}
function rt() {
  const t = l(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? O(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && x(t, "clear", void 0, void 0, n), r;
}
function V(t, e) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = l(i), a = e ? Q : t ? X : R;
    return !t && p(c, "iterate", v), i.forEach((d, _) => r.call(s, a(d), a(_), o));
  };
}
function j(t, e, n) {
  return function(...r) {
    const s = this.__v_raw, o = l(s), i = O(o), c = t === "entries" || t === Symbol.iterator && i, a = t === "keys" && i, d = s[t](...r), _ = n ? Q : e ? X : R;
    return !e && p(o, "iterate", a ? H : v), {
      // iterator protocol
      next() {
        const { value: w, done: W } = d.next();
        return W ? { value: w, done: W } : {
          value: c ? [_(w[0]), _(w[1])] : _(w),
          done: W
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function m(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${jt(t)} operation ${n}failed: target is readonly.`, l(this));
    }
    return t === "delete" ? !1 : this;
  };
}
function kt() {
  const t = {
    get(o) {
      return T(this, o);
    },
    get size() {
      return D(this);
    },
    has: M,
    add: et,
    set: nt,
    delete: st,
    clear: rt,
    forEach: V(!1, !1)
  }, e = {
    get(o) {
      return T(this, o, !1, !0);
    },
    get size() {
      return D(this);
    },
    has: M,
    add: et,
    set: nt,
    delete: st,
    clear: rt,
    forEach: V(!1, !0)
  }, n = {
    get(o) {
      return T(this, o, !0);
    },
    get size() {
      return D(this, !0);
    },
    has(o) {
      return M.call(this, o, !0);
    },
    add: m(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: m(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: m(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: m(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: V(!0, !1)
  }, r = {
    get(o) {
      return T(this, o, !0, !0);
    },
    get size() {
      return D(this, !0);
    },
    has(o) {
      return M.call(this, o, !0);
    },
    add: m(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: m(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: m(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: m(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: V(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    t[o] = j(o, !1, !1), n[o] = j(o, !0, !1), e[o] = j(o, !1, !0), r[o] = j(o, !0, !0);
  }), [
    t,
    n,
    e,
    r
  ];
}
const [te, ee, ne, se] = /* @__PURE__ */ kt();
function dt(t, e) {
  const n = e ? t ? se : ne : t ? ee : te;
  return (r, s, o) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(F(n, s) && s in r ? n : r, s, o);
}
const re = {
  get: /* @__PURE__ */ dt(!1, !1)
}, oe = {
  get: /* @__PURE__ */ dt(!0, !1)
};
function pt(t, e, n) {
  const r = l(n);
  if (r !== n && e.call(t, r)) {
    const s = at(t);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const _t = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap();
function ae(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function le(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ae(at(t));
}
function mt(t) {
  return K(t) ? t : xt(t, !1, Xt, re, _t);
}
function gt(t) {
  return xt(t, !0, Zt, oe, ht);
}
function xt(t, e, n, r, s) {
  if (!P(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const o = s.get(t);
  if (o)
    return o;
  const i = le(t);
  if (i === 0)
    return t;
  const c = new Proxy(t, i === 2 ? r : n);
  return s.set(t, c), c;
}
function K(t) {
  return !!(t && t.__v_isReadonly);
}
function wt(t) {
  return !!(t && t.__v_isShallow);
}
function l(t) {
  const e = t && t.__v_raw;
  return e ? l(e) : t;
}
const R = (t) => P(t) ? mt(t) : t, X = (t) => P(t) ? gt(t) : t;
function ue(t) {
  z && h && (t = l(t), process.env.NODE_ENV !== "production" ? G(t.dep || (t.dep = I()), {
    target: t,
    type: "get",
    key: "value"
  }) : G(t.dep || (t.dep = I())));
}
function fe(t, e) {
  t = l(t), t.dep && (process.env.NODE_ENV !== "production" ? A(t.dep, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : A(t.dep));
}
function y(t) {
  return !!(t && t.__v_isRef === !0);
}
function de(t) {
  return pe(t, !1);
}
function pe(t, e) {
  return y(t) ? t : new _e(t, e);
}
class _e {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : l(e), this._value = n ? e : R(e);
  }
  get value() {
    return ue(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || wt(e) || K(e);
    e = n ? e : l(e), q(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : R(e), fe(this, e));
  }
}
const Se = /* @__PURE__ */ b({
  __name: "Padding",
  props: {
    left: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
    top: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 }
  },
  setup(t) {
    const e = t, n = de({
      paddingLeft: `${e.left}px`,
      paddingRight: `${e.right}px`,
      paddingTop: `${e.top}px`,
      paddingBottom: `${e.bottom}px`
    });
    return (r, s) => (E(), S("div", {
      class: "padding",
      style: it(u(n))
    }, [
      N(r.$slots, "default")
    ], 4));
  }
}), he = {
  mounted: (t) => {
    let e = t.style.zIndex === "" ? "0" : t.style.zIndex, n = parseInt(e), r = 0, s = t.childElementCount - 1;
    for (; r <= s; ) {
      let o = t.children.item(r);
      o.style.zIndex = n.toString(), o.style.position = "absolute", n += 1, r += 1;
    }
  }
}, me = /* @__PURE__ */ b({
  __name: "Stack",
  props: {
    aligment: { default: "topStart" },
    fit: { default: "loose" }
  },
  setup(t) {
    const e = t, n = ot();
    return vt(() => {
      let r = n.value.childElementCount - 1;
      for (let s = 0; s <= r; s += 1) {
        let o = n.value.children.item(s);
        if (!o.className.includes("positioned")) {
          e.fit == "loose" ? (o.style.width = "fit-content", o.style.height = "fit-content") : (o.style.width = "100%", o.style.height = "100%");
          let i = o.style;
          i.margin = "auto", i.left = "0", i.right = "0", i.top = "0", i.bottom = "0", e.aligment == "center" || (e.aligment == "centerStart" ? i.marginLeft = "0" : e.aligment == "centerEnd" ? i.marginRight = "0" : e.aligment == "topStart" ? (i.marginLeft = "0", i.marginTop = "0") : e.aligment == "topCenter" ? i.marginTop = "0" : e.aligment == "topEnd" ? (i.marginRight = "0", i.marginTop = "0") : e.aligment == "bottomStart" ? (i.marginBottom = "0", i.marginLeft = "0") : e.aligment == "bottomCenter" ? i.marginBottom = "0" : e.aligment == "bottomEnd" && (i.marginBottom = "0", i.marginRight = "0"));
        }
      }
    }), (r, s) => bt((E(), S("div", {
      class: "stack",
      ref_key: "stack",
      ref: n
    }, [
      N(r.$slots, "default", {}, void 0, !0)
    ])), [
      [u(he)]
    ]);
  }
});
const Ne = /* @__PURE__ */ $(me, [["__scopeId", "data-v-900df87c"]]);
export {
  we as Column,
  ve as Expanded,
  Ee as Fractional,
  Se as Padding,
  xe as Row,
  be as SizedBox,
  Ne as Stack
};
