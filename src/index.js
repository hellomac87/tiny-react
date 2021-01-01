/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title(props) {
  return (
    <div>
      <h2>정말 동작할까?</h2>
      <p>잘 동작하는지 보고싶다.</p>
    </div>
  );
}

console.log(Title());
// render(<Title />, document.getElementById("root"));
