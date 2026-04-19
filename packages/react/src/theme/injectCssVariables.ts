// src/theme/injectCssVariables.ts

export function injectCssVariables(vars: Record<string, string>) {
  const root = document.documentElement;

  // 1. Keep your existing logic for static tokens (colors, spacing, etc.)
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  // 2. Inject the Responsive Engine for the Box component
  const styleId = "wish-ui-responsive-engine";
  if (!document.getElementById(styleId)) {
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
    `;
    
    document.head.appendChild(styleElement);
  }
}