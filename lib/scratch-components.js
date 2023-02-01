import { defineComponent as u, useCssVars as _, unref as i, computed as r, openBlock as m, createElementBlock as x, renderSlot as l } from "vue";
const A = { class: "row" }, d = /* @__PURE__ */ u({
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
  setup(s) {
    const t = s;
    _((e) => ({
      "1bfa89e2": i(a),
      f41ada8a: i(p),
      "5a2934c8": i(n),
      f661adbe: i(o)
    }));
    const n = r(() => c(t.mainAxisAligment)), o = r(() => c(t.crossAxisAligment)), a = r(() => f(t.mainAxisSize)), p = r(() => f(t.crossAxisSize));
    function c(e) {
      return e == "center" ? "center" : e == "start" ? "flex-start" : e == "end" ? "flex-end" : e;
    }
    function f(e) {
      return e == "max" ? "100%" : "fit-content";
    }
    return (e, S) => (m(), x("div", A, [
      l(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const g = (s, t) => {
  const n = s.__vccOpts || s;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, y = /* @__PURE__ */ g(d, [["__scopeId", "data-v-4a3ae814"]]);
export {
  y as Row
};
