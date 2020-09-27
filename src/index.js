export default function isCyclic(object, seen = new WeakSet().add(object)) {
    const props = getProps(object)
    let len = props.length

    while (len--) {
        const value = object[props[len]]
        if (value instanceof Object) {
            if (seen.has(value)) {
                return true
            }
            return isCyclic(value, seen.add(value))
        }
    }

    return false
}

function getProps(object) {
    const props = Object.keys(object)
    if (Object.getOwnPropertySymbols) {
        const symbolProperties = Object.getOwnPropertySymbols(object)
        Array.prototype.push.apply(props, symbolProperties)
    }

    return props
}
