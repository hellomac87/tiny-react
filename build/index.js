/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title(props) {
  return createElement("div", null, createElement("h2", null, "\uC815\uB9D0 \uB3D9\uC791\uD560\uAE4C?"), createElement("p", null, "\uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uBCF4\uACE0\uC2F6\uB2E4."));
}

render(createElement(Title, null), document.getElementById("root"));