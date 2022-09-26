export default function getSpecial(chr) {
  const result = [];
  if (!Object.hasOwn(chr, 'special')) {
    return [];
  }
  const { special } = chr;
  special.forEach((element) => {
    // eslint-disable-next-line object-curly-newline
    const { id, name, description = 'Описание недоступно', icon } = element;
    result.push({
      id,
      name,
      description,
      icon,
    });
  });
  return result;
}
