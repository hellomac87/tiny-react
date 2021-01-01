function renderRealDom(vdom) {
  if (typeof vdom === "string") {}
}

export function render(vdom, container) {
  container.appendChild();
}
export function createElement(tagName, props, ...children) {
  if (typeof tagName === "function") {
    return tagName.apply(null, [props, ...children]);
  }

  return {
    tagName,
    props,
    children
  };
}