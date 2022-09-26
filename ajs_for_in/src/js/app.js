export default function orderByProps(object, order = []) {
  const arrayWithProp = [];
  const arrayWithoutProp = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in object) {
    if (Object.hasOwnProperty.call(object, prop)) {
      const element = { key: prop, value: object[prop] };
      if (order.indexOf(prop) < 0) {
        arrayWithoutProp.push(element);
      } else {
        arrayWithProp[order.indexOf(prop)] = element;
      }
    }
  }
  const result = [
    ...arrayWithProp.filter((e) => e),
    ...arrayWithoutProp.sort((a, b) => a.key > b.key),
  ];
  return result;
}
