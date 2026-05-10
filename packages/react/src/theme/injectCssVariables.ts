import { breakpoints } from "./tokens/breakpoints";

export function injectCssVariables(vars: Record<string, string>) {
  const root = document.documentElement;

  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // Inject the responsive engine for the Box component.
  // Breakpoint values are read from the single source of truth in breakpoints.ts.
  const styleId = "wish-ui-responsive-engine";
  if (!document.getElementById(styleId)) {
    const md = breakpoints.md;
    const lg = breakpoints.lg;

    const styleElement = document.createElement("style");
    styleElement.id = styleId;

    styleElement.innerHTML = `
      .wish-box {
        display: var(--wish-display);
        width: var(--wish-w);
        height: var(--wish-h);
        padding: var(--wish-p);
        margin: var(--wish-m);
        gap: var(--wish-gap);
        box-sizing: border-box;
      }

      /* Base styles (mobile first) */
      .wish-box {
        --wish-display: var(--wish-display-base);
        --wish-w: var(--wish-w-base);
        --wish-h: var(--wish-h-base);
        --wish-p: var(--wish-p-base);
        --wish-m: var(--wish-m-base);
        --wish-gap: var(--wish-gap-base);
      }

      /* Tablet (md) - ${md} */
      @media (min-width: ${md}) {
        .wish-box {
          --wish-display: var(--wish-display-md, var(--wish-display-base));
          --wish-w: var(--wish-w-md, var(--wish-w-base));
          --wish-h: var(--wish-h-md, var(--wish-h-base));
          --wish-p: var(--wish-p-md, var(--wish-p-base));
          --wish-m: var(--wish-m-md, var(--wish-m-base));
          --wish-gap: var(--wish-gap-md, var(--wish-gap-base));
        }
      }

      /* Desktop (lg) - ${lg} */
      @media (min-width: ${lg}) {
        .wish-box {
          --wish-w: var(--wish-w-lg, var(--wish-w-md, var(--wish-w-base)));
          --wish-p: var(--wish-p-lg, var(--wish-p-md, var(--wish-p-base)));
        }
      }
    `;

    document.head.appendChild(styleElement);
  }
}
