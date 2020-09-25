export default function isCyclic(object, seen = new WeakSet().add(object)) {
	const props = getProps(object);
	for (const prop of props) {
		const value = object[prop];
		if (value instanceof Object) {
			return seen.has(value) || isCyclic(value, seen.add(value));
		}
	}

	return false;
}

function getProps(object) {
	const props = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		const symbolProperties = Object.getOwnPropertySymbols(object);
		Array.prototype.push.apply(props, symbolProperties);
	}

	return props;
}
