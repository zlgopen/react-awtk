export function toWindowName(obj) {
  let name = typeof obj === 'string' ? obj : obj.constructor.name;
  name = name.replace(/Page$/, '');
  return name.toLowerCase();
}
