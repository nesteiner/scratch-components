import { defineComponent as p, computed as u, openBlock as i, createElementBlock as d, renderSlot as h, withDirectives as F, unref as v, inject as w, onMounted as A, createElementVNode as r, isRef as T, vModelRadio as E, Fragment as B, createTextVNode as $, toDisplayString as y, createCommentVNode as V, normalizeClass as x, provide as S, pushScopeId as C, popScopeId as z, createBlock as j, withCtx as f, createVNode as b, ref as I, watch as H } from "vue";
const k = /* @__PURE__ */ p({
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
    },
    inline: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const a = t, e = u(() => m(a.mainAxisAligment)), l = u(() => m(a.crossAxisAligment)), s = u(() => c(a.mainAxisSize)), o = u(() => c(a.crossAxisSize)), n = u(() => a.inline ? "inline-flex" : "flex");
    function m(_) {
      return _ == "center" ? "center" : _ == "start" ? "flex-start" : _ == "end" ? "flex-end" : _;
    }
    function c(_) {
      return _ == "max" ? "100%" : "auto";
    }
    const N = {
      width: s.value,
      height: o.value,
      display: n.value,
      justifyContent: e.value,
      alignItems: l.value
    };
    return (_, L) => (i(), d("div", {
      class: "row",
      style: N
    }, [
      h(_.$slots, "default")
    ]));
  }
}), ke = /* @__PURE__ */ p({
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
    },
    inline: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const a = t, e = u(() => m(a.mainAxisAligment)), l = u(() => m(a.crossAxisAligment)), s = u(() => c(a.mainAxisSize)), o = u(() => c(a.crossAxisSize)), n = u(() => a.inline ? "inline-flex" : "flex");
    function m(_) {
      return _ == "center" ? "center" : _ == "start" ? "flex-start" : _ == "end" ? "flex-end" : _;
    }
    function c(_) {
      return _ == "max" ? "100%" : "auto";
    }
    const N = {
      display: n.value,
      width: o.value,
      height: s.value,
      flexDirection: "column",
      justifyContent: e.value,
      alignItems: l.value
    };
    return (_, L) => (i(), d("div", {
      class: "column",
      style: N
    }, [
      h(_.$slots, "default")
    ]));
  }
}), G = /* @__PURE__ */ p({
  __name: "Expanded",
  props: {
    flex: { type: Number, default: 1 }
  },
  setup(t) {
    const a = t, l = {
      flexGrow: u(() => a.flex).value,
      flexShrink: 1,
      flexBasis: "auto"
    };
    return (s, o) => (i(), d("div", {
      class: "expanded",
      style: l
    }, [
      h(s.$slots, "default")
    ]));
  }
}), O = /* @__PURE__ */ p({
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
    const a = t, e = u(() => a.width >= 0 ? a.width.toString() + "px" : "fit-content"), l = u(() => a.height >= 0 ? a.height.toString() + "px" : "fit-content"), s = {
      width: e.value,
      height: l.value
    };
    return (o, n) => (i(), d("div", {
      class: "sizedbox",
      style: s
    }, [
      h(o.$slots, "default")
    ]));
  }
}), Ae = /* @__PURE__ */ p({
  __name: "Fractional",
  props: {
    widthFactor: { type: Number, default: 1 },
    heightFactor: { type: Number, default: 1 }
  },
  setup(t) {
    const a = t, e = u(() => Number(a.widthFactor * 100).toFixed(0).toString() + "%"), l = u(() => Number(a.heightFactor * 100).toFixed(0).toString() + "%"), s = {
      width: e.value,
      height: l.value
    };
    return (o, n) => (i(), d("div", {
      class: "fractional",
      style: s
    }, [
      h(o.$slots, "default")
    ]));
  }
}), Be = /* @__PURE__ */ p({
  __name: "Padding",
  props: {
    left: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
    top: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 }
  },
  setup(t) {
    const a = t, e = {
      paddingLeft: `${a.left}px`,
      paddingRight: `${a.right}px`,
      paddingTop: `${a.top}px`,
      paddingBottom: `${a.bottom}px`
    };
    return (l, s) => (i(), d("div", {
      class: "padding",
      style: e
    }, [
      h(l.$slots, "default")
    ]));
  }
}), P = {
  mounted: (t) => {
    if (t.children.length != 1)
      throw "[error] in Center there must be only one child";
  }
}, Ce = /* @__PURE__ */ p({
  __name: "Center",
  setup(t) {
    const a = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    };
    return (e, l) => F((i(), d("div", {
      class: "center",
      style: a
    }, [
      h(e.$slots, "default")
    ])), [
      [v(P)]
    ]);
  }
}), U = { class: "radio" }, q = ["value", "disabled"], ze = /* @__PURE__ */ p({
  __name: "Radio",
  props: {
    modelValue: { type: [Number, String, Boolean, Object], default: void 0 },
    value: { type: [Number, String, Boolean, Object] },
    label: null,
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = e.modelValue !== void 0 ? u({
      get: () => e.modelValue,
      set: (s) => a("update:modelValue", s)
    }) : w("selected");
    return A(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you must set v-model in `RadioGroup` in while don't set v-model in `Radio`";
    }), (s, o) => (i(), d("span", U, [
      F(r("input", {
        type: "radio",
        value: t.value,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => T(l) ? l.value = n : null),
        disabled: t.disabled
      }, null, 8, q), [
        [E, v(l)]
      ]),
      r("span", null, [
        h(s.$slots, "default"),
        s.$slots.default ? V("", !0) : (i(), d(B, { key: 0 }, [
          $(y(t.label), 1)
        ], 64))
      ])
    ]));
  }
}), J = /* @__PURE__ */ p({
  __name: "RadioButton",
  props: {
    value: { type: [Number, String, Boolean, Object] },
    modelValue: { type: [Number, String, Boolean, Object], default: void 0 },
    disabled: { type: Boolean, default: !1 },
    label: null
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = e.modelValue !== void 0 ? u({
      get: () => e.modelValue,
      set: (o) => a("update:modelValue", o)
    }) : w("selected");
    function s() {
      !e.disabled && (l == null ? void 0 : l.value) !== void 0 && (l.value = e.value);
    }
    return A(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you must set v-model in `RadioGroup` in while don't set v-model in `RadioButton`";
    }), (o, n) => (i(), d("span", {
      class: x(["radio-button", { active: v(l) === t.value && !t.disabled, disabled: t.disabled }]),
      onClick: s
    }, [
      r("span", null, [
        h(o.$slots, "default", {}, void 0, !0),
        o.$slots.default ? V("", !0) : (i(), d(B, { key: 0 }, [
          $(y(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
const g = (t, a) => {
  const e = t.__vccOpts || t;
  for (const [l, s] of a)
    e[l] = s;
  return e;
}, Ne = /* @__PURE__ */ g(J, [["__scopeId", "data-v-e2a8b270"]]), K = { class: "radio-group" }, Ie = /* @__PURE__ */ p({
  __name: "RadioGroup",
  props: {
    modelValue: { type: [Number, String, Boolean, Object] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = u({
      get: () => e.modelValue,
      set: (s) => a("update:modelValue", s)
    });
    return S("selected", l), (s, o) => (i(), d("span", K, [
      h(s.$slots, "default")
    ]));
  }
}), M = (t) => (C("data-v-c36e308d"), t = t(), z(), t), Q = /* @__PURE__ */ M(() => /* @__PURE__ */ r("div", { class: "slot" }, null, -1)), W = /* @__PURE__ */ M(() => /* @__PURE__ */ r("div", { class: "circle" }, null, -1)), X = [
  Q,
  W
], Y = /* @__PURE__ */ p({
  __name: "Switch",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t;
    function l() {
      a("update:modelValue", !e.modelValue);
    }
    return (s, o) => (i(), d("div", {
      class: x(["switcher", { active: t.modelValue }]),
      onClick: l
    }, X, 2));
  }
});
const Oe = /* @__PURE__ */ g(Y, [["__scopeId", "data-v-c36e308d"]]), Z = { class: "input" }, ee = ["checked", "value", "disabled"], te = { class: "label" }, le = /* @__PURE__ */ p({
  __name: "Checkbox",
  props: {
    modelValue: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    value: { type: [Number, String, Boolean, Object] },
    label: null
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = e.modelValue !== void 0 ? void 0 : w("selected"), s = u(() => e.modelValue !== void 0 ? e.modelValue.includes(e.value) : (l == null ? void 0 : l.value.includes(e.value)) ?? !1), o = (n) => {
      let m = n.target.checked;
      if (e.modelValue !== void 0) {
        let c = [...e.modelValue];
        m ? c.push(e.value) : c.splice(c.indexOf(e.value), 1), a("update:modelValue", c);
      } else if ((l == null ? void 0 : l.value) instanceof Array) {
        let c = [...l.value];
        m ? c.push(e.value) : c.splice(c.indexOf(e.value), 1), l.value = c;
      }
    };
    return A(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you can't without v-model on CheckbogGroup while without v-model on Checkbox";
    }), (n, m) => (i(), d("label", {
      class: x(["checkbox", { disabled: t.disabled }])
    }, [
      r("span", Z, [
        r("input", {
          type: "checkbox",
          checked: v(s),
          value: t.value,
          onChange: m[0] || (m[0] = (c) => o(c)),
          disabled: t.disabled
        }, null, 40, ee)
      ]),
      r("span", te, [
        h(n.$slots, "default", {}, void 0, !0),
        n.$slots.default ? V("", !0) : (i(), d(B, { key: 0 }, [
          $(y(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
const Re = /* @__PURE__ */ g(le, [["__scopeId", "data-v-49609f16"]]), ae = { class: "inner" }, se = /* @__PURE__ */ p({
  __name: "CheckboxButton",
  props: {
    modelValue: { default: void 0 },
    value: { type: [Number, String, Boolean, Object] },
    disabled: { type: Boolean, default: !1 },
    label: null
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = e.modelValue !== void 0 ? void 0 : w("selected"), s = u(() => e.modelValue !== void 0 ? e.modelValue.includes(e.value) : (l == null ? void 0 : l.value.includes(e.value)) ?? !1), o = () => {
      if (!e.disabled) {
        if (e.modelValue !== void 0) {
          let n = [...e.modelValue];
          s.value ? n.splice(n.indexOf(e.value), 1) : n.push(e.value), a("update:modelValue", n);
        } else if ((l == null ? void 0 : l.value) instanceof Array) {
          let n = [...l.value];
          s.value ? n.splice(n.indexOf(e.value), 1) : n.push(e.value), l.value = n;
        }
      }
    };
    return A(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you can't without v-model on CheckbogGroup while without v-model on CheckboxButton";
    }), (n, m) => (i(), d("span", {
      class: x(["checkbox-button", { disabled: t.disabled, ischecked: v(s) }]),
      onClick: o
    }, [
      r("span", ae, [
        h(n.$slots, "default", {}, void 0, !0),
        n.$slots.default ? V("", !0) : (i(), d(B, { key: 0 }, [
          $(y(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
const Fe = /* @__PURE__ */ g(se, [["__scopeId", "data-v-62ba1790"]]), oe = { class: "checkbox-group" }, je = /* @__PURE__ */ p({
  __name: "CheckboxGroup",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = u({
      get: () => e.modelValue,
      set: (s) => a("update:modelValue", s)
    });
    return S("selected", l), (s, o) => (i(), d("div", oe, [
      h(s.$slots, "default")
    ]));
  }
}), R = (t) => (C("data-v-74e435c7"), t = t(), z(), t), ne = ["type", "maxlength", "value", "placeholder", "disabled"], ie = /* @__PURE__ */ R(() => /* @__PURE__ */ r("path", {
  d: "M923.2 803l-632.2-0.8L0.1 511.3l290.9-290h632.1c55.7 0 100.9 45.3 100.9 100.9v379.9c0.1 55.6-45.2 100.9-100.8 100.9z m-616-39.9l616 0.8c34.1 0 61.8-27.8 61.8-61.9V322.2c0-34.1-27.8-61.9-61.9-61.9h-616l-251.8 251 251.9 251.8z",
  fill: "#303030",
  "p-id": "2705"
}, null, -1)), de = /* @__PURE__ */ R(() => /* @__PURE__ */ r("path", {
  d: "M739.4 371.3l40.2 40.2-241.3 241.4-40.2-40.2 241.3-241.4z",
  fill: "#303030",
  "p-id": "2706"
}, null, -1)), ue = /* @__PURE__ */ R(() => /* @__PURE__ */ r("path", {
  d: "M538.3 371.3l241.4 241.4-40.2 40.2-241.4-241.3 40.2-40.3z",
  fill: "#303030",
  "p-id": "2707"
}, null, -1)), ce = [
  ie,
  de,
  ue
], re = {
  key: 1,
  class: "limit"
}, pe = /* @__PURE__ */ p({
  __name: "TextField",
  props: {
    modelValue: null,
    type: { default: "text" },
    maxlength: { default: void 0 },
    clearable: { type: Boolean, default: !1 },
    placeholder: { default: void 0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = () => a("update:modelValue", ""), l = (s) => {
      let o = s.target;
      a("update:modelValue", o.value);
    };
    return (s, o) => (i(), j(v(k), {
      class: "textfield",
      "main-axis-size": "max",
      "cross-axis-aligment": "center"
    }, {
      default: f(() => [
        b(v(G), { class: "left" }, {
          default: f(() => [
            r("input", {
              type: t.type,
              maxlength: t.maxlength,
              value: t.modelValue,
              onInput: o[0] || (o[0] = (n) => l(n)),
              placeholder: t.placeholder,
              disabled: t.disabled
            }, null, 40, ne)
          ]),
          _: 1
        }),
        b(v(k), {
          class: "right",
          "main-axis-size": "min",
          "cross-axis-aligment": "center"
        }, {
          default: f(() => [
            t.clearable && t.modelValue.length > 0 ? (i(), d("svg", {
              key: 0,
              onClick: e,
              t: "1676018443900",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "2704"
            }, ce)) : V("", !0),
            t.maxlength !== void 0 && t.modelValue.length > 0 ? (i(), d("span", re, y(t.modelValue.length) + "/" + y(t.maxlength), 1)) : V("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
const Ge = /* @__PURE__ */ g(pe, [["__scopeId", "data-v-74e435c7"]]), me = (t) => (C("data-v-6ec0a165"), t = t(), z(), t), _e = ["value"], ve = /* @__PURE__ */ me(() => /* @__PURE__ */ r("path", {
  d: "M736 480c-12.5-12.5-32.8-12.5-45.3 0L523.3 647.4c-6.2 6.2-16.4 6.2-22.6 0L333.3 480c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 704c25 25 65.5 25 90.5 0L736 525.3c12.5-12.5 12.5-32.8 0-45.3z",
  "p-id": "2779"
}, null, -1)), he = [
  ve
], fe = {
  key: 0,
  class: "options"
}, xe = /* @__PURE__ */ p({
  __name: "Select",
  props: {
    modelValue: { type: [Number, String, Boolean, Object] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = I(!1), s = I(e.modelValue);
    I([]);
    const o = () => l.value = !1, n = () => l.value = !l.value;
    return S("open", l), S("selected", s), H(s, (m, c) => {
      a("update:modelValue", m);
    }), (m, c) => (i(), d("div", {
      class: "select",
      onBlur: o,
      tabindex: "0"
    }, [
      r("div", {
        class: "selected",
        onClick: n
      }, [
        b(v(k), {
          "main-axis-aligment": "space-between",
          "cross-axis-aligment": "center"
        }, {
          default: f(() => [
            r("input", { value: s.value }, null, 8, _e),
            (i(), d("svg", {
              class: x([{ expand: l.value }, "icon"]),
              t: "1676739105788",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "2778"
            }, he, 2))
          ]),
          _: 1
        })
      ]),
      l.value ? (i(), d("div", fe, [
        h(m.$slots, "default", {}, void 0, !0)
      ])) : V("", !0)
    ], 32));
  }
});
const Me = /* @__PURE__ */ g(xe, [["__scopeId", "data-v-6ec0a165"]]), ge = /* @__PURE__ */ p({
  __name: "Option",
  props: {
    value: { type: [Number, String, Boolean, Object] }
  },
  setup(t) {
    const a = t, e = w("open"), l = w("selected"), s = () => {
      l.value = a.value, e.value = !1;
    };
    return (o, n) => (i(), d("div", {
      class: "option",
      onClick: s
    }, [
      h(o.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const De = /* @__PURE__ */ g(ge, [["__scopeId", "data-v-1a2643a8"]]), D = (t) => (C("data-v-b292b814"), t = t(), z(), t), be = /* @__PURE__ */ D(() => /* @__PURE__ */ r("path", {
  d: "M170.666667 469.333333h682.666666v85.333334H170.666667z",
  fill: "#444444",
  "p-id": "2756"
}, null, -1)), ye = [
  be
], Ve = /* @__PURE__ */ D(() => /* @__PURE__ */ r("path", {
  d: "M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z",
  fill: "#444444",
  "p-id": "3731"
}, null, -1)), we = [
  Ve
], $e = /* @__PURE__ */ p({
  __name: "InputNumber",
  props: {
    modelValue: null,
    min: { default: -1 / 0 },
    max: { default: 1 / 0 },
    disabled: { type: Boolean, default: !1 },
    step: { default: 1 }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = () => {
      !e.disabled && e.modelValue > e.min && a("update:modelValue", e.modelValue - e.step);
    }, s = () => {
      !e.disabled && e.modelValue < e.max && a("update:modelValue", e.modelValue + e.step);
    }, o = u(() => e.modelValue == e.min || e.modelValue - e.step < e.min), n = u(() => e.modelValue == e.max || e.modelValue + e.step > e.max);
    return (m, c) => (i(), j(v(O), {
      class: x(["input-number", { disabled: t.disabled }]),
      width: 150,
      height: 30
    }, {
      default: f(() => [
        b(v(k), {
          "cross-axis-aligment": "center",
          "main-axis-aligment": "space-between",
          inline: ""
        }, {
          default: f(() => [
            b(v(O), {
              class: x(["icon decrease", { disabled: v(o) }]),
              width: 32,
              height: 30
            }, {
              default: f(() => [
                (i(), d("svg", {
                  onClick: l,
                  t: "1676774750628",
                  class: "icon decrease",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "2755"
                }, ye))
              ]),
              _: 1
            }, 8, ["class"]),
            b(v(G), null, {
              default: f(() => [
                $(y(t.modelValue), 1)
              ]),
              _: 1
            }),
            b(v(O), {
              class: x(["icon increase", { disabled: v(n) }]),
              width: 32,
              height: 30
            }, {
              default: f(() => [
                (i(), d("svg", {
                  class: x([{ disabled: v(n) }, "icon increase"]),
                  onClick: s,
                  t: "1676774779254",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "3730"
                }, we, 2))
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const Le = /* @__PURE__ */ g($e, [["__scopeId", "data-v-b292b814"]]);
export {
  Ce as Center,
  Re as Checkbox,
  Fe as CheckboxButton,
  je as CheckboxGroup,
  ke as Column,
  G as Expanded,
  Ae as Fractional,
  Le as InputNumber,
  De as Option,
  Be as Padding,
  ze as Radio,
  Ne as RadioButton,
  Ie as RadioGroup,
  k as Row,
  Me as Select,
  O as SizedBox,
  Oe as Switch,
  Ge as TextField
};
