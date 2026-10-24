import type { ShjTheme } from "../types.ts";

// The ElysiaJS docs in light mode: Shiki's `github-light` on the site's own
// code block background, as set in elysiajs/documentation
const theme: ShjTheme = {
  name: "elysia-light",
  scheme: "light",
  bg: "#f6f8fa",
  fg: "#24292e",
  // VitePress's `--vp-c-text-3` over that background, the line number color
  numbers: "#8e8f94",
  tokens: {
    // `keyword` and `storage`, which the theme also gives every operator
    kwd: "#d73a49",
    oper: "#d73a49",
    // `message.error` and `invalid.*`
    err: "#b31d28",
    deleted: "#b31d28",
    // `variable`, the orange the GitHub themes give a class too
    class: "#e36209",
    cmnt: "#6a737d",
    // `brackethighlighter.*`
    bracket: "#586069",
    num: "#005cc5",
    bool: "#005cc5",
    type: "#005cc5",
    section: "#005cc5",
    var: "#005cc5",
    str: "#032f62",
    func: "#6f42c1",
    insert: "#22863a",
  },
};

export default theme;
