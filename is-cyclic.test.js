import it from "ava";
import isCyclic from "./is-cyclic";

it("detects regular cyclic object", (t) => {
  const obj = { a: 1, b: 2, c: { d: 9 } };
  obj.c.e = obj;

  t.is(isCyclic(obj), true);
});

it("detects cyclic object with symbol keys", (t) => {
  const obj = { a: 1, b: 2 };
  const key = Symbol("key");
  obj[key] = obj;

  t.is(isCyclic(obj), true);
});

it("recognizes non-cyclic object", (t) => {
  const obj = { a: 1, b: 2, c: { d: 8, e: { f: 9 } } };

  t.is(isCyclic(obj), false);
});
