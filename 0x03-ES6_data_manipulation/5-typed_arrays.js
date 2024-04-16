export default function createInt32TypedArray(length, position, value) {
  if (position < length) {
    const buffer = new ArrayBuffer(4 * length);
    const view = new Int32Array(buffer);
    view[position] = value;
    return view;
  }
  return 'Position outside range';
}
