import test from 'ava'
import isCyclic from '.'

test('detects regular cyclic object', (t) => {
  const object = { a: 1, b: 2, c: { d: 9, e: { f: 8 } } }
  object.c.e.g = object

  t.is(isCyclic(object), true)
})

test('detects cyclic object with symbol keys', (t) => {
  const object = { a: 1, b: 2 }
  const key = Symbol('key')
  object[key] = object

  t.is(isCyclic(object), true)
})

test('recognizes non-cyclic object', (t) => {
  const object = { a: 1, b: 2, c: { d: 8, e: { f: 9 } } }

  t.is(isCyclic(object), false)
})
