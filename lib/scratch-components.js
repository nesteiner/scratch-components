import { defineComponent as p, computed as u, openBlock as i, createElementBlock as d, renderSlot as h, withDirectives as R, unref as _, inject as w, onMounted as B, createElementVNode as r, isRef as L, vModelRadio as T, Fragment as A, createTextVNode as $, toDisplayString as y, createCommentVNode as V, normalizeClass as x, provide as k, pushScopeId as C, popScopeId as N, createBlock as F, withCtx as f, createVNode as b, ref as I, watch as E } from "vue";
const S = /* @__PURE__ */ p({
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
    inline: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const a = t, e = u(() => o(a.mainAxisAligment)), l = u(() => o(a.crossAxisAligment)), s = u(() => v(a.mainAxisSize)), n = u(() => a.inline ? "inline-flex" : "flex");
    function o(m) {
      return m == "center" ? "center" : m == "start" ? "flex-start" : m == "end" ? "flex-end" : m;
    }
    function v(m) {
      return m == "max" ? "100%" : "fit-content";
    }
    const c = {
      width: s.value,
      height: "100%",
      display: n.value,
      justifyContent: e.value,
      alignItems: l.value
    };
    return (m, D) => (i(), d("div", {
      class: "row",
      style: c
    }, [
      h(m.$slots, "default")
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
    inline: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const a = t, e = u(() => o(a.mainAxisAligment)), l = u(() => o(a.crossAxisAligment)), s = u(() => v(a.mainAxisSize)), n = u(() => a.inline ? "inline-flex" : "flex");
    function o(m) {
      return m == "center" ? "center" : m == "start" ? "flex-start" : m == "end" ? "flex-end" : m;
    }
    function v(m) {
      return m == "max" ? "100%" : "fit-content";
    }
    const c = {
      display: n.value,
      width: "100%",
      height: s.value,
      flexDirection: "column",
      justifyContent: e.value,
      alignItems: l.value
    };
    return (m, D) => (i(), d("div", {
      class: "column",
      style: c
    }, [
      h(m.$slots, "default")
    ]));
  }
}), j = /* @__PURE__ */ p({
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
    return (s, n) => (i(), d("div", {
      class: "expanded",
      style: l
    }, [
      h(s.$slots, "default")
    ]));
  }
}), z = /* @__PURE__ */ p({
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
    return (n, o) => (i(), d("div", {
      class: "sizedbox",
      style: s
    }, [
      h(n.$slots, "default")
    ]));
  }
}), Se = /* @__PURE__ */ p({
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
    return (n, o) => (i(), d("div", {
      class: "fractional",
      style: s
    }, [
      h(n.$slots, "default")
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
}), H = {
  mounted: (t) => {
    if (t.children.length != 1)
      throw "[error] in Center there must be only one child";
  }
}, Ae = /* @__PURE__ */ p({
  __name: "Center",
  setup(t) {
    const a = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    };
    return (e, l) => R((i(), d("div", {
      class: "center",
      style: a
    }, [
      h(e.$slots, "default")
    ])), [
      [_(H)]
    ]);
  }
}), P = { class: "radio" }, U = ["value", "disabled"], Ce = /* @__PURE__ */ p({
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
    return B(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you must set v-model in `RadioGroup` in while don't set v-model in `Radio`";
    }), (s, n) => (i(), d("span", P, [
      R(r("input", {
        type: "radio",
        value: t.value,
        "onUpdate:modelValue": n[0] || (n[0] = (o) => L(l) ? l.value = o : null),
        disabled: t.disabled
      }, null, 8, U), [
        [T, _(l)]
      ]),
      r("span", null, [
        h(s.$slots, "default"),
        s.$slots.default ? V("", !0) : (i(), d(A, { key: 0 }, [
          $(y(t.label), 1)
        ], 64))
      ])
    ]));
  }
}), q = /* @__PURE__ */ p({
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
      set: (n) => a("update:modelValue", n)
    }) : w("selected");
    function s() {
      !e.disabled && (l == null ? void 0 : l.value) !== void 0 && (l.value = e.value);
    }
    return B(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you must set v-model in `RadioGroup` in while don't set v-model in `RadioButton`";
    }), (n, o) => (i(), d("span", {
      class: x(["radio-button", { active: _(l) === t.value && !t.disabled, disabled: t.disabled }]),
      onClick: s
    }, [
      r("span", null, [
        h(n.$slots, "default", {}, void 0, !0),
        n.$slots.default ? V("", !0) : (i(), d(A, { key: 0 }, [
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
}, Ne = /* @__PURE__ */ g(q, [["__scopeId", "data-v-e2a8b270"]]), J = { class: "radio-group" }, Ie = /* @__PURE__ */ p({
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
    return k("selected", l), (s, n) => (i(), d("span", J, [
      h(s.$slots, "default")
    ]));
  }
}), G = (t) => (C("data-v-c36e308d"), t = t(), N(), t), K = /* @__PURE__ */ G(() => /* @__PURE__ */ r("div", { class: "slot" }, null, -1)), Q = /* @__PURE__ */ G(() => /* @__PURE__ */ r("div", { class: "circle" }, null, -1)), W = [
  K,
  Q
], X = /* @__PURE__ */ p({
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
    return (s, n) => (i(), d("div", {
      class: x(["switcher", { active: t.modelValue }]),
      onClick: l
    }, W, 2));
  }
});
const ze = /* @__PURE__ */ g(X, [["__scopeId", "data-v-c36e308d"]]), Y = { class: "input" }, Z = ["checked", "value", "disabled"], ee = { class: "label" }, te = /* @__PURE__ */ p({
  __name: "Checkbox",
  props: {
    modelValue: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    value: { type: [Number, String, Boolean, Object] },
    label: null
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = e.modelValue !== void 0 ? void 0 : w("selected"), s = u(() => e.modelValue !== void 0 ? e.modelValue.includes(e.value) : (l == null ? void 0 : l.value.includes(e.value)) ?? !1), n = (o) => {
      let v = o.target.checked;
      if (e.modelValue !== void 0) {
        let c = [...e.modelValue];
        v ? c.push(e.value) : c.splice(c.indexOf(e.value), 1), a("update:modelValue", c);
      } else if ((l == null ? void 0 : l.value) instanceof Array) {
        let c = [...l.value];
        v ? c.push(e.value) : c.splice(c.indexOf(e.value), 1), l.value = c;
      }
    };
    return B(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you can't without v-model on CheckbogGroup while without v-model on Checkbox";
    }), (o, v) => (i(), d("label", {
      class: x(["checkbox", { disabled: t.disabled }])
    }, [
      r("span", Y, [
        r("input", {
          type: "checkbox",
          checked: _(s),
          value: t.value,
          onChange: v[0] || (v[0] = (c) => n(c)),
          disabled: t.disabled
        }, null, 40, Z)
      ]),
      r("span", ee, [
        h(o.$slots, "default", {}, void 0, !0),
        o.$slots.default ? V("", !0) : (i(), d(A, { key: 0 }, [
          $(y(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
const Oe = /* @__PURE__ */ g(te, [["__scopeId", "data-v-49609f16"]]), le = { class: "inner" }, ae = /* @__PURE__ */ p({
  __name: "CheckboxButton",
  props: {
    modelValue: { default: void 0 },
    value: { type: [Number, String, Boolean, Object] },
    disabled: { type: Boolean, default: !1 },
    label: null
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = e.modelValue !== void 0 ? void 0 : w("selected"), s = u(() => e.modelValue !== void 0 ? e.modelValue.includes(e.value) : (l == null ? void 0 : l.value.includes(e.value)) ?? !1), n = () => {
      if (!e.disabled) {
        if (e.modelValue !== void 0) {
          let o = [...e.modelValue];
          s.value ? o.splice(o.indexOf(e.value), 1) : o.push(e.value), a("update:modelValue", o);
        } else if ((l == null ? void 0 : l.value) instanceof Array) {
          let o = [...l.value];
          s.value ? o.splice(o.indexOf(e.value), 1) : o.push(e.value), l.value = o;
        }
      }
    };
    return B(() => {
      if (e.modelValue == null && (l == null ? void 0 : l.value) == null)
        throw "[error] you can't without v-model on CheckbogGroup while without v-model on CheckboxButton";
    }), (o, v) => (i(), d("span", {
      class: x(["checkbox-button", { disabled: t.disabled, ischecked: _(s) }]),
      onClick: n
    }, [
      r("span", le, [
        h(o.$slots, "default", {}, void 0, !0),
        o.$slots.default ? V("", !0) : (i(), d(A, { key: 0 }, [
          $(y(t.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
const Re = /* @__PURE__ */ g(ae, [["__scopeId", "data-v-62ba1790"]]), se = { class: "checkbox-group" }, Fe = /* @__PURE__ */ p({
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
    return k("selected", l), (s, n) => (i(), d("div", se, [
      h(s.$slots, "default")
    ]));
  }
}), O = (t) => (C("data-v-74e435c7"), t = t(), N(), t), oe = ["type", "maxlength", "value", "placeholder", "disabled"], ne = /* @__PURE__ */ O(() => /* @__PURE__ */ r("path", {
  d: "M923.2 803l-632.2-0.8L0.1 511.3l290.9-290h632.1c55.7 0 100.9 45.3 100.9 100.9v379.9c0.1 55.6-45.2 100.9-100.8 100.9z m-616-39.9l616 0.8c34.1 0 61.8-27.8 61.8-61.9V322.2c0-34.1-27.8-61.9-61.9-61.9h-616l-251.8 251 251.9 251.8z",
  fill: "#303030",
  "p-id": "2705"
}, null, -1)), ie = /* @__PURE__ */ O(() => /* @__PURE__ */ r("path", {
  d: "M739.4 371.3l40.2 40.2-241.3 241.4-40.2-40.2 241.3-241.4z",
  fill: "#303030",
  "p-id": "2706"
}, null, -1)), de = /* @__PURE__ */ O(() => /* @__PURE__ */ r("path", {
  d: "M538.3 371.3l241.4 241.4-40.2 40.2-241.4-241.3 40.2-40.3z",
  fill: "#303030",
  "p-id": "2707"
}, null, -1)), ue = [
  ne,
  ie,
  de
], ce = {
  key: 1,
  class: "limit"
}, re = /* @__PURE__ */ p({
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
      let n = s.target;
      a("update:modelValue", n.value);
    };
    return (s, n) => (i(), F(_(S), {
      class: "textfield",
      "main-axis-size": "max",
      "cross-axis-aligment": "center"
    }, {
      default: f(() => [
        b(_(j), { class: "left" }, {
          default: f(() => [
            r("input", {
              type: t.type,
              maxlength: t.maxlength,
              value: t.modelValue,
              onInput: n[0] || (n[0] = (o) => l(o)),
              placeholder: t.placeholder,
              disabled: t.disabled
            }, null, 40, oe)
          ]),
          _: 1
        }),
        b(_(S), {
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
            }, ue)) : V("", !0),
            t.maxlength !== void 0 && t.modelValue.length > 0 ? (i(), d("span", ce, y(t.modelValue.length) + "/" + y(t.maxlength), 1)) : V("", !0)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
const je = /* @__PURE__ */ g(re, [["__scopeId", "data-v-74e435c7"]]), pe = (t) => (C("data-v-6ec0a165"), t = t(), N(), t), me = ["value"], _e = /* @__PURE__ */ pe(() => /* @__PURE__ */ r("path", {
  d: "M736 480c-12.5-12.5-32.8-12.5-45.3 0L523.3 647.4c-6.2 6.2-16.4 6.2-22.6 0L333.3 480c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 704c25 25 65.5 25 90.5 0L736 525.3c12.5-12.5 12.5-32.8 0-45.3z",
  "p-id": "2779"
}, null, -1)), ve = [
  _e
], he = {
  key: 0,
  class: "options"
}, fe = /* @__PURE__ */ p({
  __name: "Select",
  props: {
    modelValue: { type: [Number, String, Boolean, Object] }
  },
  emits: ["update:modelValue"],
  setup(t, { emit: a }) {
    const e = t, l = I(!1), s = I(e.modelValue);
    I([]);
    const n = () => l.value = !1, o = () => l.value = !l.value;
    return k("open", l), k("selected", s), E(s, (v, c) => {
      a("update:modelValue", v);
    }), (v, c) => (i(), d("div", {
      class: "select",
      onBlur: n,
      tabindex: "0"
    }, [
      r("div", {
        class: "selected",
        onClick: o
      }, [
        b(_(S), {
          "main-axis-aligment": "space-between",
          "cross-axis-aligment": "center"
        }, {
          default: f(() => [
            r("input", { value: s.value }, null, 8, me),
            (i(), d("svg", {
              class: x([{ expand: l.value }, "icon"]),
              t: "1676739105788",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "2778"
            }, ve, 2))
          ]),
          _: 1
        })
      ]),
      l.value ? (i(), d("div", he, [
        h(v.$slots, "default", {}, void 0, !0)
      ])) : V("", !0)
    ], 32));
  }
});
const Ge = /* @__PURE__ */ g(fe, [["__scopeId", "data-v-6ec0a165"]]), xe = /* @__PURE__ */ p({
  __name: "Option",
  props: {
    value: { type: [Number, String, Boolean, Object] }
  },
  setup(t) {
    const a = t, e = w("open"), l = w("selected"), s = () => {
      l.value = a.value, e.value = !1;
    };
    return (n, o) => (i(), d("div", {
      class: "option",
      onClick: s
    }, [
      h(n.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const Me = /* @__PURE__ */ g(xe, [["__scopeId", "data-v-1a2643a8"]]), M = (t) => (C("data-v-b292b814"), t = t(), N(), t), ge = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", {
  d: "M170.666667 469.333333h682.666666v85.333334H170.666667z",
  fill: "#444444",
  "p-id": "2756"
}, null, -1)), be = [
  ge
], ye = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", {
  d: "M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z",
  fill: "#444444",
  "p-id": "3731"
}, null, -1)), Ve = [
  ye
], we = /* @__PURE__ */ p({
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
    }, n = u(() => e.modelValue == e.min || e.modelValue - e.step < e.min), o = u(() => e.modelValue == e.max || e.modelValue + e.step > e.max);
    return (v, c) => (i(), F(_(z), {
      class: x(["input-number", { disabled: t.disabled }]),
      width: 150,
      height: 30
    }, {
      default: f(() => [
        b(_(S), {
          "cross-axis-aligment": "center",
          "main-axis-aligment": "space-between",
          inline: ""
        }, {
          default: f(() => [
            b(_(z), {
              class: x(["icon decrease", { disabled: _(n) }]),
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
                }, be))
              ]),
              _: 1
            }, 8, ["class"]),
            b(_(j), null, {
              default: f(() => [
                $(y(t.modelValue), 1)
              ]),
              _: 1
            }),
            b(_(z), {
              class: x(["icon increase", { disabled: _(o) }]),
              width: 32,
              height: 30
            }, {
              default: f(() => [
                (i(), d("svg", {
                  class: x([{ disabled: _(o) }, "icon increase"]),
                  onClick: s,
                  t: "1676774779254",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "3730"
                }, Ve, 2))
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
const De = /* @__PURE__ */ g(we, [["__scopeId", "data-v-b292b814"]]);
export {
  Ae as Center,
  Oe as Checkbox,
  Re as CheckboxButton,
  Fe as CheckboxGroup,
  ke as Column,
  j as Expanded,
  Se as Fractional,
  De as InputNumber,
  Me as Option,
  Be as Padding,
  Ce as Radio,
  Ne as RadioButton,
  Ie as RadioGroup,
  S as Row,
  Ge as Select,
  z as SizedBox,
  ze as Switch,
  je as TextField
};
