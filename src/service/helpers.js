export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const isArray = a => Array.isArray(a);

export const isObject = o =>
  o === Object(o) && !isArray(o) && typeof o !== 'function';

export const toCamelCase = str => {
  if (str.toLowerCase() !== str) {
    str.toLowerCase();
  }
  return str.replace(/_([a-z])/g, m => m.toUpperCase()).replace(/_/g, '');
};

export const toSnakeCase = str =>
  str
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();

export const keysToCamel = o => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach(k => {
      n[toCamelCase(k)] = keysToCamel(o[k]);
    });
    return n;
  }
  if (isArray(o)) {
    return o.map(i => keysToCamel(i));
  }

  return o;
};

export const keysToSnake = o => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o).forEach(k => {
      n[toSnakeCase(k)] = keysToSnake(o[k]);
    });

    return n;
  }
  if (isArray(o)) {
    return o.map(i => keysToSnake(i));
  }

  return o;
};
