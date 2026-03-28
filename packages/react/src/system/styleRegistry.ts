let styleTag: HTMLStyleElement | null = null;
const inserted = new Set<string>();

export function ensureStyleTag() {
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.setAttribute("data-wish", "true");
    document.head.appendChild(styleTag);
  }
}

export function insertCSS(id: string, css: string) {
  if (inserted.has(id)) return;

  ensureStyleTag();
  styleTag!.appendChild(document.createTextNode(css));
  inserted.add(id);
}

//
// 🔥 NEW: Keyframes helper
//

export function insertKeyframes(name: string, frames: string) {
  const id = `keyframes-${name}`;

  if (inserted.has(id)) return;

  ensureStyleTag();

  const css = `
@keyframes ${name} {
  ${frames}
}
`;

  styleTag!.appendChild(document.createTextNode(css));
  inserted.add(id);
}