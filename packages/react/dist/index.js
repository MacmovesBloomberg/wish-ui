import { jsx as a, jsxs as m, Fragment as W } from "react/jsx-runtime";
import b, { createContext as S, useContext as y, forwardRef as se, useState as k, useId as H, useRef as I, useLayoutEffect as oe, cloneElement as ie, useCallback as ne, useEffect as V } from "react";
import K from "react-dom";
function ae(e, r = []) {
  const t = {}, s = /* @__PURE__ */ new Set([
    ...r,
    "startIcon",
    "endIcon",
    "hasStartIcon",
    "hasEndIcon"
  ]);
  for (const o in e)
    s.has(o) || (t[o] = e[o]);
  return t;
}
const le = (e) => e !== null && typeof e == "object" && !Array.isArray(e);
function g(e, r) {
  const t = b.forwardRef(
    (o, i) => {
      const { as: n, className: d, style: l, ...c } = o, h = n || e;
      let u = {};
      if (r != null && r.__variantKeys) {
        for (const C of r.__variantKeys)
          if (C in o) {
            const D = o[C];
            u[C] = le(D) ? D.base : D;
          }
      }
      const f = typeof r == "function" ? r(u) : "", p = (r == null ? void 0 : r.__variantKeys) || [], w = ae(c, p), T = [d, f].filter(Boolean).join(" ");
      return /* @__PURE__ */ a(
        h,
        {
          ref: i,
          className: T,
          style: l,
          ...w
        }
      );
    }
  ), s = typeof e == "string" ? e : e.displayName || e.name || "Component";
  return t.displayName = `styled.${s}`, t;
}
let x = null;
const R = /* @__PURE__ */ new Set();
function ce() {
  return typeof document < "u";
}
function q() {
  ce() && (x && !document.head.contains(x) && (x = null), x || (x = document.createElement("style"), x.setAttribute("data-wish", "true"), document.head.appendChild(x)));
}
function L(e, r) {
  R.has(e) || (q(), x && (x.appendChild(
    document.createTextNode(`/* ${e} */
${r}
`)
  ), R.add(e)));
}
function de(e, r) {
  const t = `keyframes-${e}`;
  if (R.has(t) || (q(), !x)) return;
  const s = `@keyframes ${e} { ${r} }`;
  x.appendChild(
    document.createTextNode(`/* ${t} */
${s}
`)
  ), R.add(t);
}
function he(e) {
  return e.replace(/[A-Z]/g, (r) => "-" + r.toLowerCase());
}
const O = {
  _hover: ":hover",
  _focus: ":focus",
  _focusVisible: ":focus-visible",
  _active: ":active",
  _disabled: ":disabled",
  _open: '[data-state="open"]',
  _closed: '[data-state="closed"]'
};
function E(e, r) {
  let t = "", s = "";
  for (const i in r) {
    const n = r[i];
    if (O[i]) {
      const l = `${e}${O[i]}`;
      s += E(l, n);
      continue;
    }
    if (i.startsWith("&")) {
      const l = i.replace("&", e);
      s += E(l, n);
      continue;
    }
    const d = he(i);
    t += `${d}: ${n};`;
  }
  let o = "";
  return t && (o += `${e} { ${t} }`), s && (o += s), o;
}
function v(e, r) {
  const t = r, s = e.variants ? Object.keys(e.variants) : [];
  let o = !1;
  function i() {
    o || (o = !0, e.base && L(
      `${t}-base`,
      E(`.${t}`, e.base)
    ), e.variants && Object.entries(e.variants).forEach(([l, c]) => {
      Object.entries(c).forEach(([h, u]) => {
        const f = `${t}--${l}-${h}`;
        L(
          f,
          E(`.${f}`, u)
        );
      });
    }), e.compoundVariants && e.compoundVariants.forEach((l, c) => {
      const h = `${t}--cv-${c}`;
      L(
        h,
        E(`.${h}`, l.style)
      );
    }));
  }
  function n(l) {
    return typeof l == "boolean" ? l.toString() : l;
  }
  const d = (l = {}) => {
    i();
    const c = { ...e.defaultVariants, ...l }, h = [t];
    return e.variants && Object.entries(e.variants).forEach(([u, f]) => {
      let p = n(c[u]);
      if (p != null) {
        if (process.env.NODE_ENV !== "production" && !(p in f)) {
          console.warn(
            `[wish-ui] Invalid value "${p}" for variant "${u}" in ${t}`
          );
          return;
        }
        f[p] && h.push(`${t}--${u}-${p}`);
      }
    }), e.compoundVariants && e.compoundVariants.forEach((u, f) => {
      Object.entries(u).every(([w, T]) => w === "style" ? !0 : n(c[w]) === n(T)) && h.push(`${t}--cv-${f}`);
    }), h.join(" ");
  };
  return d.__variantKeys = s, d;
}
const pe = v(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--wish-radius-md)",
      fontWeight: "var(--wish-font-weight-medium)",
      cursor: "pointer",
      border: "none",
      // ✅ PSEUDO SUPPORT
      _hover: {
        opacity: 0.9
      },
      _active: {
        transform: "scale(0.98)"
      },
      _focusVisible: {
        outline: "2px solid var(--wish-color-primary)",
        outlineOffset: "2px"
      },
      _disabled: {
        opacity: 0.5,
        pointerEvents: "none"
      }
    },
    // ... inside createVariants
    variants: {
      variant: {
        solid: {
          background: "var(--wish-colors-primary-500)",
          color: "white",
          _hover: {
            background: "var(--wish-colors-primary-600)"
          }
        },
        outline: {
          border: "1px solid var(--wish-colors-gray-200)",
          background: "transparent",
          color: "var(--wish-colors-primary-500)",
          _hover: {
            background: "var(--wish-colors-primary-50)"
          }
        },
        ghost: {
          background: "transparent",
          _hover: {
            background: "var(--wish-color-surface-hover)"
          }
        }
      },
      size: {
        sm: {
          padding: "6px 10px",
          fontSize: "12px"
        },
        md: {
          padding: "8px 14px",
          fontSize: "14px"
        },
        lg: {
          padding: "10px 18px",
          fontSize: "16px"
        }
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md"
    }
  },
  "wish-button"
);
let j = !1;
function ue() {
  j || (de(
    "wish-spin",
    "to { transform: rotate(360deg); }"
  ), j = !0);
}
ue();
const fe = v(
  {
    base: {
      display: "inline-block",
      borderStyle: "solid",
      borderRadius: "50%",
      // 🟢 The "track" color (faint circle)
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      animation: "wish-spin 0.8s linear infinite"
    },
    variants: {
      size: {
        sm: { width: "16px", height: "16px", borderWidth: "2px" },
        md: { width: "24px", height: "24px", borderWidth: "3px" },
        lg: { width: "32px", height: "32px", borderWidth: "4px" }
      },
      variant: {
        solid: {},
        subtle: {}
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        style: {
          // 🟢 Fixed plural 'colors' and used 'main' or base color
          borderTopColor: "var(--wish-colors-primary-main, currentColor)",
          borderRightColor: "var(--wish-colors-primary-main, currentColor)"
        }
      },
      {
        variant: "subtle",
        style: {
          // 🟢 Fixed plural 'colors' and used neutral/gray
          borderTopColor: "var(--wish-colors-gray-400, #9ca3af)",
          borderRightColor: "var(--wish-colors-gray-400, #9ca3af)",
          opacity: 0.6
        }
      }
    ],
    defaultVariants: {
      size: "md",
      variant: "solid"
    }
  },
  "wish-spinner"
), we = g("span", fe), X = b.forwardRef(
  ({ size: e = "md", variant: r = "solid", ...t }, s) => /* @__PURE__ */ a(
    we,
    {
      ref: s,
      role: "status",
      size: e,
      variant: r,
      ...t
    }
  )
);
X.displayName = "Spinner";
const ve = g("button", pe), ge = v(
  {
    base: {
      display: "inline-flex",
      alignItems: "center"
    }
  },
  "wish-button-icon"
), M = g("span", ge), me = v(
  {
    base: {
      display: "inline-flex",
      alignItems: "center"
    }
  },
  "wish-button-text"
), U = g("span", me), be = b.forwardRef(
  ({
    children: e,
    startIcon: r,
    endIcon: t,
    loading: s = !1,
    disabled: o,
    loadingText: i,
    ...n
  }, d) => /* @__PURE__ */ a(
    ve,
    {
      ref: d,
      disabled: o || s,
      "aria-busy": s || void 0,
      hasStartIcon: !!r,
      hasEndIcon: !!t,
      ...n,
      children: s ? /* @__PURE__ */ m(W, { children: [
        /* @__PURE__ */ a(X, { size: "sm" }),
        i && /* @__PURE__ */ a(U, { children: i })
      ] }) : /* @__PURE__ */ m(W, { children: [
        r && /* @__PURE__ */ a(M, { children: r }),
        /* @__PURE__ */ a(U, { children: e }),
        t && /* @__PURE__ */ a(M, { children: t })
      ] })
    }
  )
);
be.displayName = "Button";
const xe = g("div"), z = b.forwardRef((e, r) => {
  const { display: t, width: s, height: o, padding: i, margin: n, gap: d, style: l, ...c } = e, h = (f, p) => p === void 0 ? {} : typeof p != "object" ? { [`--wish-${f}`]: p } : Object.entries(p).reduce((w, [T, C]) => (w[`--wish-${f}-${T}`] = C, w), {}), u = {
    ...h("display", t),
    ...h("w", s),
    ...h("h", o),
    ...h("p", i),
    ...h("m", n),
    ...h("gap", d),
    ...l
  };
  return /* @__PURE__ */ a(
    xe,
    {
      ref: r,
      style: u,
      className: "wish-box",
      ...c
    }
  );
});
z.displayName = "Box";
function ye({
  children: e,
  spacing: r = "var(--wish-spacing-4, 16px)",
  direction: t = "column",
  align: s = "stretch",
  justify: o = "flex-start",
  wrap: i = "nowrap",
  style: n,
  ...d
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: t,
        gap: r,
        alignItems: s,
        justifyContent: o,
        flexWrap: i,
        ...n
      },
      ...d,
      children: e
    }
  );
}
ye.displayName = "Stack";
function Dr({
  children: e,
  direction: r = "row",
  align: t = "stretch",
  justify: s = "flex-start",
  wrap: o = "nowrap",
  gap: i,
  style: n,
  ...d
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: r,
        alignItems: t,
        justifyContent: s,
        flexWrap: o,
        gap: i,
        ...n
      },
      ...d,
      children: e
    }
  );
}
function Lr({
  children: e,
  as: r = "span",
  size: t = "md",
  weight: s = "regular",
  color: o = "inherit",
  align: i,
  style: n,
  ...d
}) {
  return /* @__PURE__ */ a(
    r,
    {
      style: {
        fontSize: `var(--wish-fontSize-${t})`,
        fontWeight: `var(--wish-fontWeight-${s})`,
        color: o,
        textAlign: i,
        fontFamily: "var(--wish-fontFamily)",
        ...n
      },
      ...d,
      children: e
    }
  );
}
const Se = v({
  base: {
    width: "100%",
    outline: "none",
    fontFamily: "var(--wish-fonts-body, sans-serif)",
    transition: "all 0.2s ease",
    background: "transparent",
    border: "none",
    // 🟢 Input itself has no border; the wrapper Flex does
    color: "var(--wish-colors-text-base)"
  },
  variants: {
    variant: {
      outline: {},
      filled: {
        background: "var(--wish-colors-gray-100)"
      }
    },
    size: {
      sm: { fontSize: "12px" },
      md: { fontSize: "14px" },
      lg: { fontSize: "16px" }
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}, "wish-input"), Z = S({}), B = () => y(Z), ke = se(
  ({
    startIcon: e,
    endIcon: r,
    variant: t = "outline",
    size: s = "md",
    style: o,
    className: i,
    ...n
  }, d) => {
    const l = B(), [c, h] = k(!1), u = n["aria-invalid"] || (l == null ? void 0 : l.error), f = n.disabled || (l == null ? void 0 : l.disabled), p = n.required || (l == null ? void 0 : l.required), w = n.id || (l == null ? void 0 : l.inputId), T = l == null ? void 0 : l.helperTextId, C = Se({ variant: t, size: s });
    return /* @__PURE__ */ m(
      z,
      {
        className: [C, i].filter(Boolean).join(" "),
        display: "flex",
        style: {
          alignItems: "center",
          position: "relative",
          transition: "all 0.2s ease",
          // Focus/Error/Disabled states on the wrapper
          border: "1px solid",
          borderColor: u ? "var(--wish-colors-danger-main, #ef4444)" : c ? "var(--wish-colors-primary-main, #3b82f6)" : "var(--wish-colors-border, #e2e8f0)",
          boxShadow: c && !u ? "0 0 0 1px var(--wish-colors-primary-main)" : "none",
          opacity: f ? 0.6 : 1,
          cursor: f ? "not-allowed" : "text",
          backgroundColor: t === "filled" ? "var(--wish-colors-gray-100, #f1f5f9)" : "transparent",
          // Padding logic
          padding: s === "sm" ? "4px 8px" : s === "lg" ? "10px 16px" : "8px 12px",
          borderRadius: "var(--wish-radius-md, 6px)"
        },
        onFocus: () => !f && h(!0),
        onBlur: () => h(!1),
        children: [
          e && /* @__PURE__ */ a(
            z,
            {
              as: "span",
              display: "flex",
              style: {
                marginRight: "8px",
                color: "var(--wish-colors-gray-400)",
                fontSize: "1.1em"
              },
              children: e
            }
          ),
          /* @__PURE__ */ a(
            "input",
            {
              ref: d,
              id: w,
              disabled: f,
              required: p,
              "aria-invalid": !!u,
              "aria-describedby": T,
              "aria-required": p,
              style: {
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                padding: 0,
                fontSize: "var(--wish-font-sizes-sm, 14px)",
                color: "var(--wish-colors-text-main, #1e293b)",
                width: "100%",
                cursor: "inherit",
                ...o
              },
              ...n
            }
          ),
          r && /* @__PURE__ */ a(
            z,
            {
              as: "span",
              display: "flex",
              style: {
                marginLeft: "8px",
                color: "var(--wish-colors-gray-400)",
                fontSize: "1.1em"
              },
              children: r
            }
          )
        ]
      }
    );
  }
);
ke.displayName = "Input";
function Te({
  children: e,
  error: r = !1,
  disabled: t = !1,
  required: s = !1,
  className: o
}) {
  const i = H(), n = `${i}-input`, d = `${i}-helper`;
  return /* @__PURE__ */ a(
    Z.Provider,
    {
      value: {
        error: r,
        disabled: t,
        required: s,
        inputId: n,
        helperTextId: d
      },
      children: /* @__PURE__ */ a(
        z,
        {
          as: "div",
          className: ["wish-form-control", o].filter(Boolean).join(" "),
          display: "flex",
          style: { flexDirection: "column" },
          gap: "var(--wish-spacing-xs, 8px)",
          children: e
        }
      )
    }
  );
}
Te.displayName = "FormControl";
function Ce({ children: e, style: r, ...t }) {
  const { error: s, required: o, disabled: i, inputId: n } = B(), d = {
    // Typography
    fontSize: "var(--wish-font-sizes-sm, 14px)",
    fontWeight: "var(--wish-font-weights-medium, 500)",
    lineHeight: "var(--wish-font-line-heights-shorter, 1.25)",
    // Interaction
    display: "block",
    marginBottom: "var(--wish-spacing-1, 4px)",
    cursor: i ? "not-allowed" : "pointer",
    userSelect: "none",
    // Colors based on state
    color: i ? "var(--wish-colors-gray-400, #94a3b8)" : s ? "var(--wish-colors-danger-main, #ef4444)" : "var(--wish-colors-gray-700, #374151)",
    // Transitions for smooth state changes
    transition: "color 0.2s ease",
    ...r
  };
  return /* @__PURE__ */ m(
    "label",
    {
      htmlFor: n,
      style: d,
      ...t,
      children: [
        e,
        o && /* @__PURE__ */ a(
          "span",
          {
            "aria-hidden": "true",
            style: {
              marginLeft: "4px",
              color: "var(--wish-colors-danger-main, #ef4444)"
            },
            children: "*"
          }
        )
      ]
    }
  );
}
Ce.displayName = "Label";
function Ee({ children: e, style: r, ...t }) {
  const { error: s, disabled: o, helperTextId: i } = B(), n = {
    // Typography
    fontSize: "var(--wish-font-sizes-xs, 12px)",
    lineHeight: "var(--wish-font-line-heights-shorter, 1.25)",
    marginTop: "var(--wish-spacing-1, 4px)",
    // Colors based on state
    color: o ? "var(--wish-colors-gray-400, #94a3b8)" : s ? "var(--wish-colors-danger-main, #ef4444)" : "var(--wish-colors-gray-500, #64748b)",
    // Smooth transition for color changes (e.g., when validation kicks in)
    transition: "color 0.2s ease",
    // Ensure it respects parent container width
    maxWidth: "100%",
    wordBreak: "break-word",
    ...r
  };
  return /* @__PURE__ */ a(
    "p",
    {
      id: i,
      style: n,
      role: s ? "alert" : void 0,
      ...t,
      children: e
    }
  );
}
Ee.displayName = "HelperText";
const ze = v({
  base: {
    borderRadius: "var(--wish-radius-lg)",
    background: "var(--wish-colors-bg-primary, white)",
    overflow: "hidden",
    transition: "all 0.2s ease",
    color: "var(--wish-colors-text-base)",
    display: "flex",
    flexDirection: "column"
  },
  variants: {
    variant: {
      elevated: {
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      },
      outline: {
        border: "1px solid var(--wish-colors-gray-200)"
      }
    }
  },
  defaultVariants: {
    variant: "elevated"
  }
}, "wish-card");
function $r({ children: e, variant: r, className: t, style: s, ...o }) {
  const i = ze({ variant: r });
  return /* @__PURE__ */ a(
    "div",
    {
      className: `${i} ${t || ""}`.trim(),
      style: s,
      ...o,
      children: e
    }
  );
}
function Wr({ children: e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: "wish-card-header",
      style: {
        padding: "var(--wish-spacing-4, 16px)",
        borderBottom: "1px solid var(--wish-colors-gray-100)",
        fontWeight: "var(--wish-font-weights-medium, 500)"
      },
      children: e
    }
  );
}
function Vr({ children: e }) {
  return /* @__PURE__ */ a("div", { className: "wish-card-content", style: { padding: "var(--wish-spacing-4, 16px)" }, children: e });
}
function Br({ children: e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: "wish-card-footer",
      style: {
        padding: "var(--wish-spacing-4, 16px)",
        borderTop: "1px solid var(--wish-colors-gray-100)",
        display: "flex",
        justifyContent: "flex-end",
        gap: "var(--wish-spacing-2, 8px)"
      },
      children: e
    }
  );
}
const Ie = v(
  {
    base: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--wish-spacing-3)",
      padding: "var(--wish-spacing-3) var(--wish-spacing-4)",
      borderRadius: "var(--wish-radius-md)",
      fontSize: "var(--wish-font-size-sm)"
    },
    variants: {
      variant: {
        subtle: {},
        solid: {},
        outline: {
          border: "1px solid",
          background: "transparent"
        }
      },
      status: {
        success: {},
        error: {},
        warning: {},
        info: {}
      }
    },
    compoundVariants: [
      // 🔹 SUCCESS
      {
        variant: "subtle",
        status: "success",
        style: {
          background: "var(--wish-colors-success-subtle)",
          color: "var(--wish-colors-success-DEFAULT)"
        }
      },
      {
        variant: "solid",
        status: "success",
        style: {
          background: "var(--wish-colors-success-DEFAULT)",
          color: "var(--wish-colors-success-on)"
        }
      },
      {
        variant: "outline",
        status: "success",
        style: {
          borderColor: "var(--wish-colors-success-DEFAULT)",
          color: "var(--wish-colors-success-DEFAULT)"
        }
      },
      // 🔹 ERROR
      {
        variant: "subtle",
        status: "error",
        style: {
          background: "var(--wish-colors-danger-subtle)",
          color: "var(--wish-colors-danger-DEFAULT)"
        }
      },
      {
        variant: "solid",
        status: "error",
        style: {
          background: "var(--wish-colors-danger-DEFAULT)",
          color: "var(--wish-colors-danger-on)"
        }
      },
      {
        variant: "outline",
        status: "error",
        style: {
          borderColor: "var(--wish-colors-danger-DEFAULT)",
          color: "var(--wish-colors-danger-DEFAULT)"
        }
      },
      // 🔹 WARNING
      {
        variant: "subtle",
        status: "warning",
        style: {
          background: "var(--wish-colors-warning-subtle)",
          color: "var(--wish-colors-warning-DEFAULT)"
        }
      },
      {
        variant: "solid",
        status: "warning",
        style: {
          background: "var(--wish-colors-warning-DEFAULT)",
          color: "var(--wish-colors-warning-on)"
        }
      },
      {
        variant: "outline",
        status: "warning",
        style: {
          borderColor: "var(--wish-colors-warning-DEFAULT)",
          color: "var(--wish-colors-warning-DEFAULT)"
        }
      },
      // 🔹 INFO
      {
        variant: "subtle",
        status: "info",
        style: {
          background: "var(--wish-colors-primary-subtle)",
          color: "var(--wish-colors-primary-DEFAULT)"
        }
      },
      {
        variant: "solid",
        status: "info",
        style: {
          background: "var(--wish-colors-primary-DEFAULT)",
          color: "var(--wish-colors-primary-on)"
        }
      },
      {
        variant: "outline",
        status: "info",
        style: {
          borderColor: "var(--wish-colors-primary-DEFAULT)",
          color: "var(--wish-colors-primary-DEFAULT)"
        }
      }
    ],
    defaultVariants: {
      variant: "subtle",
      status: "info"
    }
  },
  "wish-alert"
), Re = g("div", Ie), Ae = b.forwardRef(
  ({ icon: e, title: r, children: t, ...s }, o) => /* @__PURE__ */ m(Re, { ref: o, role: "alert", ...s, children: [
    e && /* @__PURE__ */ a("span", { style: { display: "inline-flex", marginTop: "2px" }, children: e }),
    /* @__PURE__ */ m("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
      r && /* @__PURE__ */ a("strong", { children: r }),
      t
    ] })
  ] })
);
Ae.displayName = "Alert";
const De = v(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      // Using gray tokens as 'neutral'
      background: "var(--wish-colors-gray-100)",
      color: "var(--wish-colors-gray-600)",
      fontWeight: "var(--wish-typography-fontWeights-medium)",
      userSelect: "none",
      flexShrink: 0
    },
    variants: {
      size: {
        sm: {
          width: "24px",
          height: "24px",
          fontSize: "var(--wish-typography-fontSizes-xs)"
        },
        md: {
          width: "32px",
          height: "32px",
          fontSize: "var(--wish-typography-fontSizes-sm)"
        },
        lg: {
          width: "40px",
          height: "40px",
          fontSize: "var(--wish-typography-fontSizes-md)"
        }
      },
      variant: {
        circular: {
          borderRadius: "50%"
        },
        rounded: {
          borderRadius: "var(--wish-radius-md)"
        },
        square: {
          borderRadius: "0px"
        }
      }
    },
    defaultVariants: {
      size: "md",
      variant: "circular"
    }
  },
  "wish-avatar"
), Le = g("div", De), $e = b.forwardRef(
  ({ src: e, alt: r, fallback: t, children: s, ...o }, i) => {
    const [n, d] = b.useState(!1);
    return /* @__PURE__ */ a(Le, { ref: i, ...o, children: e && !n ? /* @__PURE__ */ a(
      "img",
      {
        src: e,
        alt: r,
        onError: () => d(!0),
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      }
    ) : t || s });
  }
);
$e.displayName = "Avatar";
const We = v(
  {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "var(--wish-typography-fontWeights-medium)",
      borderRadius: "var(--wish-radius-full)",
      whiteSpace: "nowrap",
      lineHeight: 1,
      userSelect: "none",
      cursor: "default"
    },
    variants: {
      variant: {
        solid: {},
        outline: {
          border: "1px solid",
          background: "transparent"
        },
        subtle: {}
      },
      size: {
        sm: {
          fontSize: "var(--wish-typography-fontSizes-xs)",
          padding: "0 var(--wish-spacing-2)",
          height: "20px"
        },
        md: {
          fontSize: "var(--wish-typography-fontSizes-sm)",
          padding: "0 var(--wish-spacing-3)",
          height: "24px"
        },
        lg: {
          fontSize: "var(--wish-typography-fontSizes-md)",
          padding: "0 var(--wish-spacing-4)",
          height: "28px"
        }
      },
      color: {
        primary: {},
        neutral: {},
        success: {},
        danger: {},
        warning: {}
      },
      // Fixes the "Invalid value false" console errors
      hasStartIcon: {
        true: { gap: "var(--wish-spacing-1)" },
        false: {}
      },
      hasEndIcon: {
        true: { gap: "var(--wish-spacing-1)" },
        false: {}
      }
    },
    compoundVariants: [
      // 🔵 PRIMARY
      {
        variant: "solid",
        color: "primary",
        style: {
          background: "var(--wish-colors-primary-500)",
          color: "var(--wish-white)",
          _hover: {
            background: "var(--wish-colors-primary-600)"
          }
        }
      },
      {
        variant: "subtle",
        color: "primary",
        style: {
          background: "var(--wish-colors-primary-50)",
          color: "var(--wish-colors-primary-700)",
          _hover: {
            background: "var(--wish-colors-primary-100)"
          }
        }
      },
      // ⚪ NEUTRAL (Mapped to Gray)
      {
        variant: "solid",
        color: "neutral",
        style: {
          background: "var(--wish-colors-gray-700)",
          color: "var(--wish-white)",
          _hover: {
            background: "var(--wish-colors-gray-800)"
          }
        }
      },
      {
        variant: "subtle",
        color: "neutral",
        style: {
          background: "var(--wish-colors-gray-100)",
          color: "var(--wish-colors-gray-700)",
          _hover: {
            background: "var(--wish-colors-gray-200)"
          }
        }
      },
      // 🟢 SUCCESS
      {
        variant: "solid",
        color: "success",
        style: {
          background: "var(--wish-colors-success-DEFAULT)",
          color: "var(--wish-colors-success-on)"
        }
      },
      {
        variant: "subtle",
        color: "success",
        style: {
          background: "var(--wish-colors-success-subtle)",
          color: "var(--wish-colors-success-DEFAULT)"
        }
      },
      // 🔴 DANGER
      {
        variant: "solid",
        color: "danger",
        style: {
          background: "var(--wish-colors-danger-DEFAULT)",
          color: "var(--wish-colors-danger-on)"
        }
      },
      {
        variant: "subtle",
        color: "danger",
        style: {
          background: "var(--wish-colors-danger-subtle)",
          color: "var(--wish-colors-danger-DEFAULT)"
        }
      },
      // 🟡 WARNING
      {
        variant: "solid",
        color: "warning",
        style: {
          background: "var(--wish-colors-warning-DEFAULT)",
          color: "var(--wish-colors-warning-on)"
        }
      },
      {
        variant: "subtle",
        color: "warning",
        style: {
          background: "var(--wish-colors-warning-subtle)",
          color: "var(--wish-colors-warning-DEFAULT)"
        }
      }
    ],
    defaultVariants: {
      variant: "subtle",
      size: "md",
      color: "neutral"
    }
  },
  "wish-badge"
), Ve = g("span", We), Be = b.forwardRef(
  ({ startIcon: e, endIcon: r, children: t, ...s }, o) => /* @__PURE__ */ m(
    Ve,
    {
      ref: o,
      hasStartIcon: !!e,
      hasEndIcon: !!r,
      ...s,
      children: [
        e,
        t,
        r
      ]
    }
  )
);
Be.displayName = "Badge";
const Fe = v(
  {
    base: {
      background: "var(--wish-colors-gray-200, #e5e7eb)",
      flexShrink: 0,
      border: "0 none",
      boxSizing: "border-box"
      // Prevents size flickering
    },
    variants: {
      orientation: {
        horizontal: {
          width: "100%",
          height: "1px"
        },
        vertical: {
          width: "1px",
          height: "100%",
          minHeight: "var(--wish-spacing-4, 16px)"
        }
      },
      variant: {
        solid: {},
        dashed: {
          background: "transparent !important",
          borderStyle: "dashed",
          borderColor: "var(--wish-colors-gray-200)"
        },
        dotted: {
          background: "transparent !important",
          borderStyle: "dotted",
          borderColor: "var(--wish-colors-gray-200)"
        }
      }
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        variant: "dashed",
        style: { borderWidth: "1px 0 0 0" }
      },
      {
        orientation: "horizontal",
        variant: "dotted",
        style: { borderWidth: "1px 0 0 0" }
      },
      {
        orientation: "vertical",
        variant: "dashed",
        style: { borderWidth: "0 0 0 1px" }
      },
      {
        orientation: "vertical",
        variant: "dotted",
        style: { borderWidth: "0 0 0 1px" }
      }
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "solid"
    }
  },
  "wish-divider"
), Ne = g("div", Fe), Pe = b.forwardRef(
  ({
    orientation: e = "horizontal",
    variant: r = "solid",
    // 🟢 Explicitly extract variant
    ...t
  }, s) => /* @__PURE__ */ a(
    Ne,
    {
      ref: s,
      role: "separator",
      "aria-orientation": e,
      orientation: e,
      variant: r,
      ...t
    }
  )
);
Pe.displayName = "Divider";
const Oe = v(
  {
    base: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      transition: "background 0.2s ease",
      borderRadius: "var(--wish-radius-full, 999px)",
      background: "var(--wish-colors-gray-300, #cbd5e1)",
      flexShrink: 0,
      outline: "none",
      // Focus ring for accessibility
      "&:has(input:focus-visible)": {
        boxShadow: "0 0 0 2px var(--wish-colors-white), 0 0 0 4px var(--wish-colors-primary-main)"
      },
      // The Thumb
      "&::after": {
        content: '""',
        position: "absolute",
        background: "var(--wish-colors-white, #ffffff)",
        borderRadius: "50%",
        transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "var(--wish-shadows-sm)",
        left: "2px"
      },
      // Active/Checked State logic
      "&:has(input:checked)": {
        background: "var(--wish-colors-primary-main, #3b82f6)"
      },
      "&:has(input:checked)::after": {
        transform: "translateX(var(--switch-x))"
      },
      "&[data-disabled='true']": {
        opacity: 0.5,
        cursor: "not-allowed"
      }
    },
    variants: {
      size: {
        sm: {
          width: "32px",
          height: "18px",
          "--switch-x": "14px",
          "&::after": { width: "14px", height: "14px" }
        },
        md: {
          width: "44px",
          height: "24px",
          "--switch-x": "20px",
          "&::after": { width: "20px", height: "20px" }
        },
        lg: {
          width: "56px",
          height: "30px",
          "--switch-x": "26px",
          "&::after": { width: "26px", height: "26px" }
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  "wish-switch"
), je = g("label", Oe), Me = b.forwardRef(
  ({ size: e = "md", checked: r, defaultChecked: t, disabled: s, onChange: o, id: i, ...n }, d) => {
    const l = H(), c = i || l;
    return /* @__PURE__ */ a(
      je,
      {
        htmlFor: c,
        size: e,
        "data-disabled": s,
        children: /* @__PURE__ */ a(
          "input",
          {
            id: c,
            type: "checkbox",
            ref: d,
            checked: r,
            defaultChecked: t,
            disabled: s,
            onChange: o,
            style: {
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0"
            },
            ...n
          }
        )
      }
    );
  }
);
Me.displayName = "Switch";
const Ue = ({
  placement: e = "bottom-start",
  offset: r = 4
} = {}) => {
  const t = I(null), s = I(null), [o, i] = k({
    x: 0,
    y: 0,
    strategy: "fixed"
  }), n = () => {
    const d = t.current, l = s.current;
    if (!d || !l) return;
    const c = d.getBoundingClientRect(), h = l.getBoundingClientRect(), u = window.innerHeight, f = window.innerWidth;
    let p = c.left, w = c.bottom + r;
    e === "left" ? (p = c.left - h.width - r, w = c.top + c.height / 2 - h.height / 2) : e === "right" ? (p = c.right + r, w = c.top + c.height / 2 - h.height / 2) : e.startsWith("top") ? (w = c.top - h.height - r, e === "top-end" ? p = c.right - h.width : e === "top-start" ? p = c.left : p = c.left + c.width / 2 - h.width / 2, w < 0 && (w = c.bottom + r)) : (w = c.bottom + r, e === "bottom-end" ? p = c.right - h.width : e === "bottom-start" ? p = c.left : p = c.left + c.width / 2 - h.width / 2, w + h.height > u && (w = c.top - h.height - r)), p = Math.max(0, Math.min(p, f - h.width)), i({ x: p, y: w, strategy: "fixed" });
  };
  return oe(() => (n(), window.addEventListener("resize", n), window.addEventListener("scroll", n, !0), () => {
    window.removeEventListener("resize", n), window.removeEventListener("scroll", n, !0);
  }), [e, r]), {
    x: o.x,
    y: o.y,
    strategy: o.strategy,
    refs: {
      reference: t,
      floating: s
    },
    update: n
  };
}, _e = v(
  {
    base: {
      background: "var(--wish-colors-gray-800, #1f2937)",
      color: "var(--wish-colors-white, #ffffff)",
      padding: "var(--wish-spacing-1) var(--wish-spacing-2)",
      borderRadius: "var(--wish-radius-sm, 4px)",
      fontSize: "var(--wish-font-sizes-xs, 12px)",
      fontWeight: "var(--wish-font-weights-medium, 500)",
      zIndex: 2e3,
      pointerEvents: "none",
      // Prevent mouse interference
      boxShadow: "var(--wish-shadows-sm)",
      whiteSpace: "nowrap",
      // Animation handled via data-state if your system supports it
      "&[data-state='open']": {
        animation: "wish-fade-in 0.15s ease-out"
      }
    }
  },
  "wish-tooltip"
), He = g("div", _e), Ke = ({
  children: e,
  content: r,
  placement: t = "top",
  delay: s = 200,
  offset: o = 8
}) => {
  const [i, n] = k(!1), d = I(void 0), { x: l, y: c, strategy: h, refs: u } = Ue({
    placement: t,
    offset: o
  }), f = () => {
    d.current = window.setTimeout(() => n(!0), s);
  }, p = () => {
    window.clearTimeout(d.current), n(!1);
  };
  return /* @__PURE__ */ m(W, { children: [
    ie(e, {
      ref: u.reference,
      onMouseEnter: f,
      onMouseLeave: p,
      onFocus: f,
      onBlur: p
    }),
    i && K.createPortal(
      /* @__PURE__ */ a(
        He,
        {
          ref: u.floating,
          role: "tooltip",
          "data-state": i ? "open" : "closed",
          style: {
            position: h,
            top: c ?? 0,
            left: l ?? 0
          },
          children: r
        }
      ),
      document.body
    )
  ] });
};
Ke.displayName = "Tooltip";
const G = S(null), F = () => {
  const e = y(G);
  if (!e) throw new Error("Tabs components must be wrapped in <Tabs />");
  return e;
}, Fr = ({
  children: e,
  defaultValue: r,
  value: t,
  onChange: s,
  variant: o = "line",
  orientation: i = "horizontal"
}) => {
  const [n, d] = k(r), l = t !== void 0, c = l ? t : n, h = (u) => {
    l || d(u), s == null || s(u);
  };
  return /* @__PURE__ */ a(G.Provider, { value: { value: c, onValueChange: h, variant: o, orientation: i }, children: /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: i === "vertical" ? "row" : "column" }, children: e }) });
}, qe = v({
  base: {
    display: "flex",
    borderBottom: "2px solid var(--wish-colors-border, #e2e8f0)",
    gap: "var(--wish-spacing-1, 4px)"
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row"
      },
      vertical: {
        flexDirection: "column",
        borderBottom: "none",
        borderRight: "2px solid var(--wish-colors-border, #e2e8f0)",
        alignItems: "flex-start"
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
}, "wish-tabs-list"), Xe = v({
  base: {
    padding: "var(--wish-spacing-3, 12px) var(--wish-spacing-4, 16px)",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    fontSize: "var(--wish-font-size-sm, 14px)",
    fontWeight: "var(--wish-font-weight-medium, 500)",
    color: "var(--wish-colors-text-muted, #64748b)",
    marginBottom: "-2px",
    transition: "all 0.2s ease",
    position: "relative",
    outline: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "var(--wish-colors-text-main, #1e293b)"
    },
    // Target the data attribute specifically
    "&[data-state='active']": {
      color: "var(--wish-colors-primary-main, #3b82f6)",
      borderBottom: "2px solid var(--wish-colors-primary-main, #3b82f6)"
    },
    "&[data-disabled='true']": {
      cursor: "not-allowed",
      opacity: 0.4
    }
  }
}, "wish-tab"), Ze = g("div", qe), Nr = ({ children: e }) => {
  const { orientation: r } = F();
  return /* @__PURE__ */ a(
    Ze,
    {
      role: "tablist",
      orientation: r,
      children: e
    }
  );
}, Ge = g("button", Xe), Pr = ({ value: e, children: r, disabled: t }) => {
  const { value: s, onValueChange: o } = F(), i = s === e;
  return /* @__PURE__ */ a(
    Ge,
    {
      type: "button",
      role: "tab",
      "aria-selected": i,
      "data-state": i ? "active" : "inactive",
      "data-disabled": t,
      onClick: () => !t && o(e),
      children: r
    }
  );
}, Or = ({ value: e, children: r }) => {
  const { value: t } = F();
  return t !== e ? null : /* @__PURE__ */ a("div", { role: "tabpanel", style: { padding: "var(--wish-spacing-4) 0" }, children: r });
}, Je = v({
  base: {
    borderBottom: "1px solid var(--wish-colors-border, #e2e8f0)",
    width: "100%",
    "&:last-child": { borderBottom: "none" }
  },
  variants: {
    variant: {
      bordered: {
        border: "1px solid var(--wish-colors-border, #e2e8f0)",
        borderRadius: "var(--wish-radius-md, 8px)",
        marginBottom: "var(--wish-spacing-2, 8px)",
        "&:last-child": { marginBottom: 0 }
      },
      ghost: { borderBottom: "1px solid var(--wish-colors-border, #e2e8f0)" }
    }
  }
}, "wish-accordion-item"), Qe = v({
  base: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "var(--wish-spacing-4, 16px)",
    fontWeight: "var(--wish-font-weight-medium, 500)",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s",
    "&:hover": { background: "var(--wish-colors-gray-50, #f8fafc)" },
    "&[data-disabled='true']": { cursor: "not-allowed", opacity: 0.5 }
  }
}, "wish-accordion-trigger"), Ye = v({
  base: {
    overflow: "hidden",
    fontSize: "var(--wish-font-size-sm, 14px)",
    transition: "all 0.2s ease-out",
    padding: "0 var(--wish-spacing-4, 16px) var(--wish-spacing-4, 16px)",
    color: "var(--wish-colors-text-muted, #64748b)"
  }
}, "wish-accordion-content"), J = S(null), Q = S(null), N = () => y(J), Y = () => y(Q), er = g("div", Je), jr = ({
  children: e,
  type: r = "single",
  defaultValue: t,
  value: s,
  onValueChange: o,
  variant: i = "ghost"
}) => {
  const [n, d] = k(t || (r === "multiple" ? [] : "")), l = s !== void 0, c = l ? s : n, h = (u) => {
    let f;
    if (r === "single")
      f = c === u ? "" : u;
    else {
      const p = c;
      f = p.includes(u) ? p.filter((w) => w !== u) : [...p, u];
    }
    l || d(f), o == null || o(f);
  };
  return /* @__PURE__ */ a(J.Provider, { value: { value: c, onToggle: h, variant: i }, children: /* @__PURE__ */ a("div", { style: { width: "100%" }, children: e }) });
}, Mr = ({ value: e, children: r, disabled: t }) => {
  const { variant: s } = N();
  return /* @__PURE__ */ a(Q.Provider, { value: { value: e, disabled: t }, children: /* @__PURE__ */ a(er, { variant: s, children: r }) });
}, rr = g("button", Qe), Ur = ({ children: e }) => {
  const { value: r, onToggle: t } = N(), { value: s, disabled: o } = Y(), i = Array.isArray(r) ? r.includes(s) : r === s;
  return /* @__PURE__ */ m(
    rr,
    {
      type: "button",
      onClick: () => !o && t(s),
      "data-state": i ? "open" : "closed",
      "data-disabled": o,
      "aria-expanded": i,
      children: [
        e,
        /* @__PURE__ */ a(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            style: { width: 16, height: 16, transform: i ? "rotate(180deg)" : "none", transition: "0.2s" },
            children: /* @__PURE__ */ a("polyline", { points: "6 9 12 15 18 9" })
          }
        )
      ]
    }
  );
}, tr = g("div", Ye), _r = ({ children: e }) => {
  const { value: r } = N(), { value: t } = Y();
  return (Array.isArray(r) ? r.includes(t) : r === t) ? /* @__PURE__ */ a(tr, { children: e }) : null;
}, sr = v({
  base: {
    display: "flex",
    flexDirection: "column",
    padding: "var(--wish-spacing-4, 16px)",
    borderRadius: "var(--wish-radius-md, 8px)",
    boxShadow: "var(--wish-shadows-lg, 0 10px 15px -3px rgba(0,0,0,0.1))",
    minWidth: "300px",
    maxWidth: "400px",
    background: "white",
    borderLeft: "4px solid",
    pointerEvents: "auto",
    marginBottom: "var(--wish-spacing-3, 12px)",
    transition: "all 0.3s ease"
  },
  variants: {
    status: {
      success: { borderColor: "#22c55e", background: "#f0fdf4" },
      error: { borderColor: "#ef4444", background: "#fef2f2" },
      warning: { borderColor: "#f59e0b", background: "#fffbeb" },
      info: { borderColor: "#3b82f6", background: "#eff6ff" }
    }
  }
}, "wish-toast"), or = g("div", sr), ee = S(null), Hr = ({ children: e }) => {
  const [r, t] = k([]), s = ne((o) => {
    const i = Math.random().toString(36).substr(2, 9), n = { ...o, id: i, status: o.status || "info", duration: o.duration || 5e3 };
    t((d) => [...d, n]), n.duration !== 1 / 0 && setTimeout(() => {
      t((d) => d.filter((l) => l.id !== i));
    }, n.duration);
  }, []);
  return /* @__PURE__ */ m(ee.Provider, { value: { addToast: s }, children: [
    e,
    K.createPortal(
      /* @__PURE__ */ a("div", { style: {
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        pointerEvents: "none"
      }, children: r.map((o) => /* @__PURE__ */ m(or, { status: o.status, children: [
        /* @__PURE__ */ a("strong", { style: { fontSize: "14px", color: "#1e293b" }, children: o.title }),
        o.description && /* @__PURE__ */ a("span", { style: { fontSize: "13px", color: "#64748b", marginTop: "4px" }, children: o.description })
      ] }, o.id)) }),
      document.body
    )
  ] });
}, Kr = () => {
  const e = y(ee);
  if (!e) throw new Error("useToast must be used within a ToastProvider");
  return e.addToast;
}, ir = v({
  base: {
    display: "flex",
    alignItems: "center",
    gap: "var(--wish-spacing-2, 8px)",
    userSelect: "none"
  }
}, "wish-pagination"), nr = v({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "36px",
    height: "36px",
    padding: "0 6px",
    borderRadius: "var(--wish-radius-md, 8px)",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    background: "transparent",
    border: "1px solid var(--wish-colors-border, #e2e8f0)",
    color: "var(--wish-colors-text-main, #1e293b)",
    "&:hover:not([data-active='true']):not(:disabled)": {
      background: "var(--wish-colors-gray-50, #f8fafc)",
      borderColor: "var(--wish-colors-gray-300, #cbd5e1)"
    },
    "&[data-active='true']": {
      background: "var(--wish-colors-primary-main, #3b82f6)",
      borderColor: "var(--wish-colors-primary-main, #3b82f6)",
      color: "white",
      cursor: "default"
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.4
    }
  }
}, "wish-pagination-item"), ar = g("nav", ir), $ = g("button", nr), qr = ({
  total: e,
  current: r,
  onChange: t,
  siblings: s = 1,
  boundaries: o = 1,
  disabled: i
}) => {
  const n = (l, c) => Array.from({ length: c - l + 1 }, (h, u) => l + u), d = b.useMemo(() => {
    if (s * 2 + 3 + o * 2 >= e) return n(1, e);
    const c = Math.max(r - s, o + 2), h = Math.min(r + s, e - (o + 1)), u = c > o + 2, f = h < e - (o + 1);
    if (!u && f) {
      const p = 3 + 2 * s;
      return [...n(1, p), "dots", ...n(e - o + 1, e)];
    }
    if (u && !f) {
      const p = 3 + 2 * s, w = n(e - p + 1, e);
      return [...n(1, o), "dots", ...w];
    }
    if (u && f) {
      const p = n(c, h);
      return [
        ...n(1, o),
        "dots",
        ...p,
        "dots",
        ...n(e - o + 1, e)
      ];
    }
    return [];
  }, [e, r, s, o]);
  return /* @__PURE__ */ m(ar, { "aria-label": "pagination", children: [
    /* @__PURE__ */ a(
      $,
      {
        onClick: () => t(r - 1),
        disabled: i || r === 1,
        children: "Prev"
      }
    ),
    d.map((l, c) => l === "dots" ? /* @__PURE__ */ a("span", { style: { padding: "0 8px" }, children: "..." }, `dots-${c}`) : /* @__PURE__ */ a(
      $,
      {
        "data-active": r === l,
        onClick: () => t(l),
        disabled: i,
        children: l
      },
      l
    )),
    /* @__PURE__ */ a(
      $,
      {
        onClick: () => t(r + 1),
        disabled: i || r === e,
        children: "Next"
      }
    )
  ] });
}, lr = v({
  base: {
    display: "block",
    background: "var(--wish-colors-gray-200, #e2e8f0)",
    position: "relative",
    overflow: "hidden",
    // The Shimmer Effect
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      transform: "translateX(-100%)",
      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
      animation: "shimmer 2s infinite"
    },
    "@keyframes shimmer": {
      "100%": {
        transform: "translateX(100%)"
      }
    },
    "@keyframes pulse": {
      "0%": { opacity: 1 },
      "50%": { opacity: 0.4 },
      "100%": { opacity: 1 }
    }
  },
  variants: {
    variant: {
      rect: { borderRadius: "var(--wish-radius-sm, 4px)" },
      circle: { borderRadius: "50%" },
      text: {
        borderRadius: "var(--wish-radius-sm, 4px)",
        height: "1em",
        margin: "0.2em 0"
      }
    },
    animation: {
      pulse: {
        animation: "pulse 1.5s ease-in-out infinite",
        "&::after": { display: "none" }
        // Disable shimmer if pulse is chosen
      },
      shimmer: {
        // Shimmer logic is handled in base + keyframe
      },
      none: {
        animation: "none",
        "&::after": { display: "none" }
      }
    }
  },
  defaultVariants: {
    variant: "rect",
    animation: "shimmer"
  }
}, "wish-skeleton"), cr = g("div", lr), dr = ({
  width: e,
  height: r,
  variant: t = "rect",
  isAnimated: s = !0,
  borderRadius: o,
  ...i
}) => /* @__PURE__ */ a(
  cr,
  {
    variant: t,
    isAnimated: s,
    style: {
      width: e ?? (t === "circle" ? "40px" : "100%"),
      height: r ?? (t === "circle" ? "40px" : void 0),
      borderRadius: o
    },
    ...i
  }
), Xr = ({ noOfLines: e = 3, spacing: r = "8px" }) => /* @__PURE__ */ a("div", { style: { display: "flex", flexDirection: "column", gap: r, width: "100%" }, children: Array.from({ length: e }).map((t, s) => /* @__PURE__ */ a(dr, { variant: "text", width: s === e - 1 ? "70%" : "100%" }, s)) }), hr = v({
  base: {
    position: "absolute",
    zIndex: 1e3,
    minWidth: "160px",
    padding: "var(--wish-spacing-1, 4px)",
    background: "var(--wish-colors-surface, #ffffff)",
    border: "1px solid var(--wish-colors-border, #e2e8f0)",
    borderRadius: "var(--wish-radius-md, 8px)",
    boxShadow: "var(--wish-shadows-lg, 0 10px 15px -3px rgba(0,0,0,0.1))",
    marginTop: "4px",
    display: "flex",
    flexDirection: "column"
  }
}, "wish-menu-content"), pr = v({
  base: {
    padding: "var(--wish-spacing-2, 8px) var(--wish-spacing-3, 12px)",
    borderRadius: "var(--wish-radius-sm, 4px)",
    fontSize: "var(--wish-font-size-sm, 14px)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "background 0.2s",
    border: "none",
    background: "transparent",
    textAlign: "left",
    width: "100%",
    "&:hover:not([data-disabled='true'])": {
      background: "var(--wish-colors-gray-100, #f1f5f9)"
    },
    "&[data-disabled='true']": {
      cursor: "not-allowed",
      opacity: 0.5
    }
  },
  variants: {
    variant: {
      default: { color: "var(--wish-colors-text-main, #1e293b)" },
      danger: {
        color: "var(--wish-colors-error-main, #ef4444)",
        "&:hover": { background: "var(--wish-colors-error-light, #fef2f2)" }
      }
    }
  },
  defaultVariants: { variant: "default" }
}, "wish-menu-item"), A = S(null), ur = g("div", hr), fr = g("button", pr), Zr = ({ children: e }) => {
  const [r, t] = k(!1), s = I(null);
  return V(() => {
    const o = (i) => {
      s.current && !s.current.contains(i.target) && t(!1);
    };
    return document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, []), /* @__PURE__ */ a(A.Provider, { value: { isOpen: r, setIsOpen: t }, children: /* @__PURE__ */ a(
    "div",
    {
      ref: s,
      style: { position: "relative", display: "inline-block" },
      children: e
    }
  ) });
}, Gr = ({ children: e }) => {
  const r = y(A);
  if (!r) throw new Error("MenuTrigger must be used within Menu");
  const { isOpen: t, setIsOpen: s } = r;
  return b.cloneElement(e, {
    onClick: (o) => {
      var i, n;
      (n = (i = e.props).onClick) == null || n.call(i, o), s(!t);
    },
    "aria-haspopup": "menu",
    "aria-expanded": t
  });
}, Jr = ({ children: e }) => {
  const r = y(A);
  if (!r) throw new Error("MenuContent must be used within Menu");
  return r.isOpen ? /* @__PURE__ */ a(ur, { role: "menu", children: e }) : null;
}, Qr = ({ children: e, onClick: r, variant: t, disabled: s }) => {
  const o = y(A);
  if (!o) throw new Error("MenuItem must be used within Menu");
  const { setIsOpen: i } = o;
  return /* @__PURE__ */ a(
    fr,
    {
      variant: t,
      onClick: (d) => {
        s || (r == null || r(), i(!1));
      },
      "data-disabled": s,
      role: "menuitem",
      children: e
    }
  );
}, wr = v({
  base: {
    position: "absolute",
    zIndex: 1500,
    minWidth: "240px",
    padding: "var(--wish-spacing-4, 16px)",
    background: "var(--wish-colors-surface, #ffffff)",
    border: "1px solid var(--wish-colors-border, #e2e8f0)",
    borderRadius: "var(--wish-radius-lg, 12px)",
    boxShadow: "var(--wish-shadows-xl, 0 20px 25px -5px rgba(0,0,0,0.1))",
    marginTop: "8px",
    // Ensure the popover doesn't bleed off small screens
    maxWidth: "calc(100vw - 32px)"
  }
}, "wish-popover-content"), P = S(null), vr = g("div", wr), Yr = ({ children: e, defaultOpen: r = !1 }) => {
  const [t, s] = k(r), o = I(null);
  return V(() => {
    const i = (n) => {
      o.current && !o.current.contains(n.target) && s(!1);
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, []), /* @__PURE__ */ a(P.Provider, { value: { isOpen: t, setIsOpen: s }, children: /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      style: { position: "relative", display: "inline-block" },
      children: e
    }
  ) });
}, et = ({ children: e }) => {
  const r = y(P);
  if (!r) throw new Error("PopoverTrigger must be used within Popover");
  return b.cloneElement(e, {
    onClick: (t) => {
      var s, o;
      (o = (s = e.props).onClick) == null || o.call(s, t), r.setIsOpen(!r.isOpen);
    }
  });
}, rt = ({ children: e, width: r }) => {
  const t = y(P);
  if (!t) throw new Error("PopoverContent must be used within Popover");
  return t.isOpen ? /* @__PURE__ */ a(vr, { role: "dialog", style: { width: r }, children: e }) : null;
}, gr = {
  primary: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  },
  text: {
    base: "#111827",
    // Gray 900 for light mode
    muted: "#6b7280"
  },
  success: {
    DEFAULT: "#22c55e",
    subtle: "#f0fdf4",
    // Very light green
    on: "#ffffff"
    // Contrast text for solid
  },
  warning: {
    DEFAULT: "#f59e0b",
    subtle: "#fffbeb",
    on: "#ffffff"
  },
  danger: {
    DEFAULT: "#ef4444",
    subtle: "#fef2f2",
    on: "#ffffff"
  },
  info: {
    DEFAULT: "#3b82f6",
    subtle: "#eff6ff",
    on: "#ffffff"
  },
  white: "#ffffff",
  black: "#000000"
}, mr = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "40px"
}, br = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px"
}, xr = {
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 6px rgba(0,0,0,0.1)",
  lg: "0 10px 15px rgba(0,0,0,0.15)"
}, yr = {
  fontFamily: "'Inter', sans-serif",
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px"
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700
  }
}, Sr = {
  colors: gr,
  spacing: mr,
  radius: br,
  shadows: xr,
  typography: yr
};
function re(e, r, t = []) {
  const s = {};
  return Object.entries(e).forEach(([o, i]) => {
    const n = [...t, o];
    if (typeof i == "object")
      Object.assign(s, re(i, r, n));
    else {
      const d = `--${r}-${n.join("-")}`;
      s[d] = i;
    }
  }), s;
}
function kr(e) {
  return re(e, "wish");
}
function Tr(e) {
  const r = document.documentElement;
  Object.entries(e).forEach(([s, o]) => {
    r.style.setProperty(s, o);
  });
  const t = "wish-ui-responsive-engine";
  if (!document.getElementById(t)) {
    const s = document.createElement("style");
    s.id = t, s.innerHTML = `
      .wish-box {
        display: var(--wish-display);
        width: var(--wish-w);
        height: var(--wish-h);
        padding: var(--wish-p);
        margin: var(--wish-m);
        gap: var(--wish-gap);
        box-sizing: border-box;
      }

      /* Base Styles (Mobile First) */
      .wish-box {
        --wish-display: var(--wish-display-base);
        --wish-w: var(--wish-w-base);
        --wish-h: var(--wish-h-base);
        --wish-p: var(--wish-p-base);
        --wish-m: var(--wish-m-base);
        --wish-gap: var(--wish-gap-base);
      }

      /* Tablet (md) - 768px */
      @media (min-width: 768px) {
        .wish-box {
          --wish-display: var(--wish-display-md, var(--wish-display-base));
          --wish-w: var(--wish-w-md, var(--wish-w-base));
          --wish-h: var(--wish-h-md, var(--wish-h-base));
          --wish-p: var(--wish-p-md, var(--wish-p-base));
          --wish-m: var(--wish-m-md, var(--wish-m-base));
          --wish-gap: var(--wish-gap-md, var(--wish-gap-base));
        }
      }

      /* Desktop (lg) - 992px */
      @media (min-width: 992px) {
        .wish-box {
          --wish-w: var(--wish-w-lg, var(--wish-w-md, var(--wish-w-base)));
          --wish-p: var(--wish-p-lg, var(--wish-p-md, var(--wish-p-base)));
        }
      }
    `, document.head.appendChild(s);
  }
}
const te = S(null), tt = () => {
  const e = y(te);
  if (!e)
    throw new Error("useTheme must be used within WishProvider");
  return e;
};
function st({
  children: e,
  theme: r
}) {
  const t = {
    ...Sr,
    ...r
  };
  return V(() => {
    const s = kr(t);
    Tr(s);
  }, [t]), /* @__PURE__ */ a(te.Provider, { value: t, children: e });
}
const Cr = (e) => /* @__PURE__ */ a(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    width: "1em",
    height: "1em",
    ...e,
    children: /* @__PURE__ */ a("path", { d: "M12 5v14M5 12h14" })
  }
), Er = (e) => /* @__PURE__ */ m(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    width: "1em",
    height: "1em",
    ...e,
    children: [
      /* @__PURE__ */ a("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ a("path", { d: "M21 21l-4.3-4.3" })
    ]
  }
), zr = {
  plus: Cr,
  search: Er
}, _ = {
  sm: "16px",
  md: "20px",
  lg: "24px"
};
function ot({
  name: e,
  size: r = "md",
  color: t = "currentColor",
  ...s
}) {
  const o = zr[e];
  return o ? /* @__PURE__ */ a(
    o,
    {
      width: _[r],
      height: _[r],
      style: { color: t },
      ...s
    }
  ) : null;
}
export {
  jr as Accordion,
  _r as AccordionContent,
  Mr as AccordionItem,
  Ur as AccordionTrigger,
  Ae as Alert,
  $e as Avatar,
  Be as Badge,
  z as Box,
  be as Button,
  $r as Card,
  Vr as CardContent,
  Br as CardFooter,
  Wr as CardHeader,
  Pe as Divider,
  Dr as Flex,
  Te as FormControl,
  Ee as HelperText,
  ot as Icon,
  ke as Input,
  Ce as Label,
  Zr as Menu,
  Jr as MenuContent,
  Qr as MenuItem,
  Gr as MenuTrigger,
  qr as Pagination,
  Cr as PlusIcon,
  Yr as Popover,
  rt as PopoverContent,
  et as PopoverTrigger,
  Er as SearchIcon,
  dr as Skeleton,
  Xr as SkeletonText,
  X as Spinner,
  ye as Stack,
  Me as Switch,
  Pr as Tab,
  Nr as TabList,
  Or as TabPanel,
  Fr as Tabs,
  Lr as Text,
  te as ThemeContext,
  Hr as ToastProvider,
  Ke as Tooltip,
  st as WishProvider,
  v as createVariants,
  zr as iconRegistry,
  g as styled,
  Sr as theme,
  N as useAccordion,
  Y as useAccordionItem,
  F as useTabs,
  tt as useTheme,
  Kr as useToast
};
//# sourceMappingURL=index.js.map
