import type { ShjTheme } from "../types.ts";

// The ElysiaJS docs in dark mode: Shiki's `github-dark` on the site's own code
// block background, Tailwind's mauve-800, as set in elysiajs/documentation
const theme: ShjTheme = {
  name: "elysia-dark",
  scheme: "dark",
  bg: "#2a212c",
  fg: "#e1e4e8",
  // VitePress's `--vp-c-text-3` over that background, the line number color
  numbers: "#736e78",
  tokens: {
    // `keyword` and `storage`, which the theme also gives every operator
    kwd: "#f97583",
    oper: "#f97583",
    // `message.error` and `invalid.*`
    err: "#fdaeb7",
    deleted: "#fdaeb7",
    // `variable`, the orange the GitHub themes give a class too
    class: "#ffab70",
    cmnt: "#6a737d",
    // `brackethighlighter.*`
    bracket: "#d1d5da",
    num: "#79b8ff",
    bool: "#79b8ff",
    type: "#79b8ff",
    section: "#79b8ff",
    var: "#79b8ff",
    str: "#9ecbff",
    func: "#b392f0",
    insert: "#85e89d",
  },
};

export default theme;
