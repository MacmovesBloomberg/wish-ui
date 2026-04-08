let styleTag: HTMLStyleElement | null = null;
const inserted = new Set<string>();

function canUseDOM() {
  return typeof document !== "undefined";
}

export function ensureStyleTag() {
  if (!canUseDOM()) return;

  // 🔹 Handle remount edge case
  if (styleTag && !document.head.contains(styleTag)) {
    styleTag = null;
  }

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.setAttribute("data-wish", "true");
    document.head.appendChild(styleTag);
  }
}

export function insertCSS(id: string, css: string) {
  if (inserted.has(id)) return;

  ensureStyleTag();
  if (!styleTag) return;

  styleTag.appendChild(
    document.createTextNode(`/* ${id} */\n${css}\n`)
  );

  inserted.add(id);
}

// 🔥 Keyframes
export function insertKeyframes(name: string, frames: string) {
  const id = `keyframes-${name}`;

  if (inserted.has(id)) return;

  ensureStyleTag();
  if (!styleTag) return;

  const css = `@keyframes ${name} { ${frames} }`;

  styleTag.appendChild(
    document.createTextNode(`/* ${id} */\n${css}\n`)
  );

  inserted.add(id);
}