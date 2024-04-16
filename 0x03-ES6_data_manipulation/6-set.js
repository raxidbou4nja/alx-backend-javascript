export default function setFromArray(array, index, value) {
  if (index < array.length) {
    return array.map((el, i) => (i === index ? value : el));
  }
  return array;
}
