export default function isCyclic(obj, seen = new WeakSet().add(obj)) {
  const props = getProps(obj);

  let i = props.length;
  while (i--) {
    const value = obj[props[i]];
    if (value instanceof Object) {
      return seen.has(value) || isCyclic(value, seen.add(value));
    }
  }

  return false;
}

function getProps(obj) {
  const props = Object.keys(obj);
  if (Object.getOwnPropertySymbols) {
    const symbolProperties = Object.getOwnPropertySymbols(obj);
    Array.prototype.push.apply(props, symbolProperties);
  }
  return props;
}

