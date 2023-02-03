import { defineComponent as S, useCssVars as K, unref as f, computed as l, openBlock as N, createElementBlock as A, renderSlot as O, ref as wt, normalizeStyle as ot } from "vue";
const bt = { class: "row" }, vt = /* @__PURE__ */ S({
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
    K((a) => ({
      "1bfa89e2": f(s),
      f41ada8a: f(o),
      "5a2934c8": f(n),
      f661adbe: f(r)
    }));
    const n = l(() => i(e.mainAxisAligment)), r = l(() => i(e.crossAxisAligment)), s = l(() => c(e.mainAxisSize)), o = l(() => c(e.crossAxisSize));
    function i(a) {
      return a == "center" ? "center" : a == "start" ? "flex-start" : a == "end" ? "flex-end" : a;
    }
    function c(a) {
      return a == "max" ? "100%" : "fit-content";
    }
    return (a, d) => (N(), A("div", bt, [
      O(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const F = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, s] of e)
    n[r] = s;
  return n;
}, _e = /* @__PURE__ */ F(vt, [["__scopeId", "data-v-4a3ae814"]]), Et = { class: "column" }, St = /* @__PURE__ */ S({
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
    K((a) => ({
      "1270e251": f(o),
      "3948ef8c": f(s),
      "8dce951c": f(n),
      "03cfbdb7": f(r)
    }));
    const n = l(() => i(e.mainAxisAligment)), r = l(() => i(e.crossAxisAligment)), s = l(() => c(e.mainAxisSize)), o = l(() => c(e.crossAxisSize));
    function i(a) {
      return a == "center" ? "center" : a == "start" ? "flex-start" : a == "end" ? "flex-end" : a;
    }
    function c(a) {
      return a == "max" ? "100%" : "fit-content";
    }
    return (a, d) => (N(), A("div", Et, [
      O(a.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const he = /* @__PURE__ */ F(St, [["__scopeId", "data-v-d064b4cb"]]), Nt = { class: "expanded" }, At = /* @__PURE__ */ S({
  __name: "Expanded",
  props: {
    flex: { type: Number, default: 1 }
  },
  setup(t) {
    const e = t;
    K((r) => ({
      "08535f8b": f(n)
    }));
    const n = l(() => e.flex.toString());
    return (r, s) => (N(), A("div", Nt, [
      O(r.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const ge = /* @__PURE__ */ F(At, [["__scopeId", "data-v-88a537bf"]]), me = /* @__PURE__ */ S({
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
    const e = t, n = l(() => e.width >= 0 ? e.width.toString() + "px" : "fit-content"), r = l(() => e.height >= 0 ? e.height.toString() + "px" : "fit-content"), s = wt({
      width: n.value,
      height: r.value
    });
    return (o, i) => (N(), A("div", {
      class: "sizedbox",
      style: ot(s.value)
    }, [
      O(o.$slots, "default")
    ], 4));
  }
}), Ot = { class: "fractional" }, yt = /* @__PURE__ */ S({
  __name: "Fractional",
  props: {
    widthFactor: { type: Number, default: 1 },
    heightFactor: { type: Number, default: 1 }
  },
  setup(t) {
    const e = t;
    K((s) => ({
      "375a69d3": f(n),
      "7e14ddf8": f(r)
    }));
    const n = l(() => Number(e.widthFactor * 100).toFixed(0).toString() + "%"), r = l(() => Number(e.heightFactor * 100).toFixed(0).toString() + "%");
    return (s, o) => (N(), A("div", Ot, [
      O(s.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const xe = /* @__PURE__ */ F(yt, [["__scopeId", "data-v-a4454282"]]);
function Rt(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = !0;
  return e ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const $t = Object.assign, It = Object.prototype.hasOwnProperty, P = (t, e) => It.call(t, e), m = Array.isArray, y = (t) => it(t) === "[object Map]", Mt = (t) => typeof t == "string", Y = (t) => typeof t == "symbol", C = (t) => t !== null && typeof t == "object", zt = Object.prototype.toString, it = (t) => zt.call(t), ct = (t) => it(t).slice(8, -1), U = (t) => Mt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Tt = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Dt = Tt((t) => t.charAt(0).toUpperCase() + t.slice(1)), q = (t, e) => !Object.is(t, e), Vt = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
function Z(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
const R = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, jt = (t) => (t.w & J) > 0, Kt = (t) => (t.n & J) > 0, H = /* @__PURE__ */ new WeakMap();
let J = 1, h;
const b = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), G = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
let $ = !0;
const at = [];
function Ft() {
  at.push($), $ = !1;
}
function Pt() {
  const t = at.pop();
  $ = t === void 0 ? !0 : t;
}
function p(t, e, n) {
  if ($ && h) {
    let r = H.get(t);
    r || H.set(t, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = R());
    const o = process.env.NODE_ENV !== "production" ? { effect: h, target: t, type: e, key: n } : void 0;
    L(s, o);
  }
}
function L(t, e) {
  let n = !1;
  Kt(t) || (t.n |= J, n = !jt(t)), n && (t.add(h), h.deps.push(t), process.env.NODE_ENV !== "production" && h.onTrack && h.onTrack(Object.assign({ effect: h }, e)));
}
function x(t, e, n, r, s, o) {
  const i = H.get(t);
  if (!i)
    return;
  let c = [];
  if (e === "clear")
    c = [...i.values()];
  else if (n === "length" && m(t)) {
    const d = Vt(r);
    i.forEach((_, w) => {
      (w === "length" || w >= d) && c.push(_);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), e) {
      case "add":
        m(t) ? U(n) && c.push(i.get("length")) : (c.push(i.get(b)), y(t) && c.push(i.get(G)));
        break;
      case "delete":
        m(t) || (c.push(i.get(b)), y(t) && c.push(i.get(G)));
        break;
      case "set":
        y(t) && c.push(i.get(b));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: s, oldTarget: o } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? v(c[0], a) : v(c[0]));
  else {
    const d = [];
    for (const _ of c)
      _ && d.push(..._);
    process.env.NODE_ENV !== "production" ? v(R(d), a) : v(R(d));
  }
}
function v(t, e) {
  const n = m(t) ? t : [...t];
  for (const r of n)
    r.computed && k(r, e);
  for (const r of n)
    r.computed || k(r, e);
}
function k(t, e) {
  (t !== h || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger($t({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const Ct = /* @__PURE__ */ Rt("__proto__,__v_isRef,__isVue"), ut = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Y)
), Wt = /* @__PURE__ */ lt(), Bt = /* @__PURE__ */ lt(!0), tt = /* @__PURE__ */ Ht();
function Ht() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = u(this);
      for (let o = 0, i = this.length; o < i; o++)
        p(r, "get", o + "");
      const s = r[e](...n);
      return s === -1 || s === !1 ? r[e](...n.map(u)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Ft();
      const r = u(this)[e].apply(this, n);
      return Pt(), r;
    };
  }), t;
}
function lt(t = !1, e = !1) {
  return function(r, s, o) {
    if (s === "__v_isReactive")
      return !t;
    if (s === "__v_isReadonly")
      return t;
    if (s === "__v_isShallow")
      return e;
    if (s === "__v_raw" && o === (t ? e ? oe : _t : e ? re : pt).get(r))
      return r;
    const i = m(r);
    if (!t && i && P(tt, s))
      return Reflect.get(tt, s, o);
    const c = Reflect.get(r, s, o);
    return (Y(s) ? ut.has(s) : Ct(s)) || (t || p(r, "get", s), e) ? c : E(c) ? i && U(s) ? c : c.value : C(c) ? t ? gt(c) : ht(c) : c;
  };
}
const Gt = /* @__PURE__ */ Lt();
function Lt(t = !1) {
  return function(n, r, s, o) {
    let i = n[r];
    if (j(i) && E(i) && !E(s))
      return !1;
    if (!t && (!xt(s) && !j(s) && (i = u(i), s = u(s)), !m(n) && E(i) && !E(s)))
      return i.value = s, !0;
    const c = m(n) && U(r) ? Number(r) < n.length : P(n, r), a = Reflect.set(n, r, s, o);
    return n === u(o) && (c ? q(s, i) && x(n, "set", r, s, i) : x(n, "add", r, s)), a;
  };
}
function Yt(t, e) {
  const n = P(t, e), r = t[e], s = Reflect.deleteProperty(t, e);
  return s && n && x(t, "delete", e, void 0, r), s;
}
function Ut(t, e) {
  const n = Reflect.has(t, e);
  return (!Y(e) || !ut.has(e)) && p(t, "has", e), n;
}
function qt(t) {
  return p(t, "iterate", m(t) ? "length" : b), Reflect.ownKeys(t);
}
const Jt = {
  get: Wt,
  set: Gt,
  deleteProperty: Yt,
  has: Ut,
  ownKeys: qt
}, Qt = {
  get: Bt,
  set(t, e) {
    return process.env.NODE_ENV !== "production" && Z(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  },
  deleteProperty(t, e) {
    return process.env.NODE_ENV !== "production" && Z(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  }
}, Q = (t) => t, W = (t) => Reflect.getPrototypeOf(t);
function M(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const s = u(t), o = u(e);
  n || (e !== o && p(s, "get", e), p(s, "get", o));
  const { has: i } = W(s), c = r ? Q : n ? X : I;
  if (i.call(s, e))
    return c(t.get(e));
  if (i.call(s, o))
    return c(t.get(o));
  t !== s && t.get(e);
}
function z(t, e = !1) {
  const n = this.__v_raw, r = u(n), s = u(t);
  return e || (t !== s && p(r, "has", t), p(r, "has", s)), t === s ? n.has(t) : n.has(t) || n.has(s);
}
function T(t, e = !1) {
  return t = t.__v_raw, !e && p(u(t), "iterate", b), Reflect.get(t, "size", t);
}
function et(t) {
  t = u(t);
  const e = u(this);
  return W(e).has.call(e, t) || (e.add(t), x(e, "add", t, t)), this;
}
function nt(t, e) {
  e = u(e);
  const n = u(this), { has: r, get: s } = W(n);
  let o = r.call(n, t);
  o ? process.env.NODE_ENV !== "production" && dt(n, r, t) : (t = u(t), o = r.call(n, t));
  const i = s.call(n, t);
  return n.set(t, e), o ? q(e, i) && x(n, "set", t, e, i) : x(n, "add", t, e), this;
}
function st(t) {
  const e = u(this), { has: n, get: r } = W(e);
  let s = n.call(e, t);
  s ? process.env.NODE_ENV !== "production" && dt(e, n, t) : (t = u(t), s = n.call(e, t));
  const o = r ? r.call(e, t) : void 0, i = e.delete(t);
  return s && x(e, "delete", t, void 0, o), i;
}
function rt() {
  const t = u(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? y(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && x(t, "clear", void 0, void 0, n), r;
}
function D(t, e) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = u(i), a = e ? Q : t ? X : I;
    return !t && p(c, "iterate", b), i.forEach((d, _) => r.call(s, a(d), a(_), o));
  };
}
function V(t, e, n) {
  return function(...r) {
    const s = this.__v_raw, o = u(s), i = y(o), c = t === "entries" || t === Symbol.iterator && i, a = t === "keys" && i, d = s[t](...r), _ = n ? Q : e ? X : I;
    return !e && p(o, "iterate", a ? G : b), {
      // iterator protocol
      next() {
        const { value: w, done: B } = d.next();
        return B ? { value: w, done: B } : {
          value: c ? [_(w[0]), _(w[1])] : _(w),
          done: B
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function g(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${Dt(t)} operation ${n}failed: target is readonly.`, u(this));
    }
    return t === "delete" ? !1 : this;
  };
}
function Xt() {
  const t = {
    get(o) {
      return M(this, o);
    },
    get size() {
      return T(this);
    },
    has: z,
    add: et,
    set: nt,
    delete: st,
    clear: rt,
    forEach: D(!1, !1)
  }, e = {
    get(o) {
      return M(this, o, !1, !0);
    },
    get size() {
      return T(this);
    },
    has: z,
    add: et,
    set: nt,
    delete: st,
    clear: rt,
    forEach: D(!1, !0)
  }, n = {
    get(o) {
      return M(this, o, !0);
    },
    get size() {
      return T(this, !0);
    },
    has(o) {
      return z.call(this, o, !0);
    },
    add: g(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: g(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: g(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: g(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: D(!0, !1)
  }, r = {
    get(o) {
      return M(this, o, !0, !0);
    },
    get size() {
      return T(this, !0);
    },
    has(o) {
      return z.call(this, o, !0);
    },
    add: g(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: g(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: g(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: g(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: D(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    t[o] = V(o, !1, !1), n[o] = V(o, !0, !1), e[o] = V(o, !1, !0), r[o] = V(o, !0, !0);
  }), [
    t,
    n,
    e,
    r
  ];
}
const [Zt, kt, te, ee] = /* @__PURE__ */ Xt();
function ft(t, e) {
  const n = e ? t ? ee : te : t ? kt : Zt;
  return (r, s, o) => s === "__v_isReactive" ? !t : s === "__v_isReadonly" ? t : s === "__v_raw" ? r : Reflect.get(P(n, s) && s in r ? n : r, s, o);
}
const ne = {
  get: /* @__PURE__ */ ft(!1, !1)
}, se = {
  get: /* @__PURE__ */ ft(!0, !1)
};
function dt(t, e, n) {
  const r = u(n);
  if (r !== n && e.call(t, r)) {
    const s = ct(t);
    console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const pt = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap();
function ie(t) {
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
function ce(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : ie(ct(t));
}
function ht(t) {
  return j(t) ? t : mt(t, !1, Jt, ne, pt);
}
function gt(t) {
  return mt(t, !0, Qt, se, _t);
}
function mt(t, e, n, r, s) {
  if (!C(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const o = s.get(t);
  if (o)
    return o;
  const i = ce(t);
  if (i === 0)
    return t;
  const c = new Proxy(t, i === 2 ? r : n);
  return s.set(t, c), c;
}
function j(t) {
  return !!(t && t.__v_isReadonly);
}
function xt(t) {
  return !!(t && t.__v_isShallow);
}
function u(t) {
  const e = t && t.__v_raw;
  return e ? u(e) : t;
}
const I = (t) => C(t) ? ht(t) : t, X = (t) => C(t) ? gt(t) : t;
function ae(t) {
  $ && h && (t = u(t), process.env.NODE_ENV !== "production" ? L(t.dep || (t.dep = R()), {
    target: t,
    type: "get",
    key: "value"
  }) : L(t.dep || (t.dep = R())));
}
function ue(t, e) {
  t = u(t), t.dep && (process.env.NODE_ENV !== "production" ? v(t.dep, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : v(t.dep));
}
function E(t) {
  return !!(t && t.__v_isRef === !0);
}
function le(t) {
  return fe(t, !1);
}
function fe(t, e) {
  return E(t) ? t : new de(t, e);
}
class de {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : u(e), this._value = n ? e : I(e);
  }
  get value() {
    return ae(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || xt(e) || j(e);
    e = n ? e : u(e), q(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : I(e), ue(this, e));
  }
}
const we = /* @__PURE__ */ S({
  __name: "Padding",
  props: {
    left: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
    top: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 }
  },
  setup(t) {
    const e = t, n = le({
      paddingLeft: `${e.left}px`,
      paddingRight: `${e.right}px`,
      paddingTop: `${e.top}px`,
      paddingBottom: `${e.bottom}px`
    });
    return (r, s) => (N(), A("div", {
      class: "padding",
      style: ot(f(n))
    }, [
      O(r.$slots, "default")
    ], 4));
  }
});
export {
  he as Column,
  ge as Expanded,
  xe as Fractional,
  we as Padding,
  _e as Row,
  me as SizedBox
};
