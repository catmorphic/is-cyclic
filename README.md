# is-cyclic

> Detect cyclic object reference in JavaScript.

- Support `Symbol` key.
- Zero dependency.

## Install

```sh
npm install --save is-cyclic
```

### Usage

Pass an object.

```js
import isCyclic from "is-cyclic";

const obj = { a: 1, b: 2, c: { d: 9 } };
obj.c.e = obj;

isCyclic(obj); // => true
```

### License

[The Anti-Capitalist Software License (ACSL) ](https://anticapitalist.software/) © [Levi Wong](https://leviwong.io)
