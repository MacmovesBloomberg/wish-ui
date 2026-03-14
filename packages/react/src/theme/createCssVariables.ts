type TokenObject = Record<string, any>;

function generateVars(
  obj: TokenObject,
  prefix: string,
  path: string[] = []
): Record<string, string> {
  const vars: Record<string, string> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const newPath = [...path, key];

    if (typeof value === "object") {
      Object.assign(vars, generateVars(value, prefix, newPath));
    } else {
      const varName = `--${prefix}-${newPath.join("-")}`;
      vars[varName] = value;
    }
  });

  return vars;
}

export function createCssVariables(tokens: TokenObject) {
  return generateVars(tokens, "wish");
}