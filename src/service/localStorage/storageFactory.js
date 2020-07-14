/* ISC License (ISC). Copyright 2017 Michal Zalecki */
// Manual configuration

export function storageFactory(storage) {
  let inMemoryStorage = {};
  const length = 0;
  function parseCookies() {
    return document.cookie.split(';').reduce((res, c) => {
      const [record, value] = c
        .trim()
        .split('=')
        .map(decodeURIComponent);
      const allNumbers = str => /^\d+$/.test(str);
      try {
        return Object.assign(res, {
          [record]: allNumbers(value) ? value : JSON.parse(value),
        });
      } catch (e) {
        return Object.assign(res, { [record]: value });
      }
    }, {});
  }

  function isSupported() {
    try {
      const testKey = '__some_random_key_you_are_not_going_to_use__';
      storage.setItem(testKey, testKey);
      storage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  function clear() {
    if (isSupported()) {
      storage.clear();
    } else {
      inMemoryStorage = {};
    }
  }

  function getItem(name) {
    if (isSupported()) {
      return storage.getItem(name);
    }
    // eslint-disable-next-line
    if (inMemoryStorage.hasOwnProperty(name)) {
      return inMemoryStorage[name];
    }
    return null;
  }

  function key(index) {
    if (isSupported()) {
      return storage.key(index);
    }
    return Object.keys(inMemoryStorage)[index] || null;
  }

  function removeItem(name) {
    if (isSupported()) {
      storage.removeItem(name);
    } else {
      delete inMemoryStorage[name];
    }
  }

  function setItem(name, value) {
    if (isSupported()) {
      storage.setItem(name, value);
    } else {
      inMemoryStorage[name] = String(value);
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
    clear,
    key,
    length,
  };
}
