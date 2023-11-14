export class AptMap<K = any, V = any> extends Map<K, V> {
  /**
   * Returns first key if it exists, otherwise `undefined`.
   */
  get firstKey(): K | undefined {
    return this.keys().next().value;
  }

  /**
   * Returns first value if it exists, otherwise `undefined`.
   */
  get firstValue(): V | undefined {
    return this.values().next().value;
  }

  /**
   * Returns `true` if apt map does not have any elements, otherwise `false`.
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Returns last key if it exists, otherwise `undefined`.
   */
  get lastKey(): K | undefined {
    const index = this.size - 1;
    const keys = this.keysAsArray();

    return keys[index];
  }

  /**
   * Returns last value if it exists, otherwise `undefined`.
   */
  get lastValue(): V | undefined {
    const index = this.size - 1;
    const values = this.valuesAsArray();

    return values[index];
  }

  /**
   * Creates a shallow copy of an AptMap and returns it.
   */
  clone(): AptMap<K, V> {
    return new AptMap<K, V>(this.entriesAsArray());
  }

  /**
   * Concatenates 2 apt maps and return merged result.
   */
  concat<T extends V>(aptMap: AptMap<K, T>): AptMap<K, V> {
    return this
      .clone()
      .setMany<T>(aptMap);
  }

  /**
   * Returns an array of [key, value] pairs.
   */
  entriesAsArray(): Array<[K, V]> {
    return Array.from(this.entries());
  }

  /**
   * Returns `true` if a condition in callback function is satisfied for all entries, otherwise `false`.
   */
  every(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): boolean {
    let result = false;

    for (const [mapKey, mapValue] of this) {
      result = cb.apply(this, [mapValue, mapKey, this]);

      if (!result) {
        break;
      }
    }

    return result;
  }

  /**
   * Filters input apt map using callback function and returns filtered apt map.
   */
  filter(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): AptMap<K, V> {
    const filtered = new AptMap<K, V>();

    for (const [mapKey, mapValue] of this) {
      const isFiltered = cb.apply(this, [mapValue, mapKey, this]);

      if (isFiltered) {
        filtered.set(mapKey, mapValue);
      }
    }

    return filtered;
  }

  /**
   * Returns first entry which satisfies condition in callback function, otherwise an empty array.
   */
  findEntry(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): [K, V] | [] {
    let foundKey: K | undefined;
    let foundValue: V | undefined;

    for (const [mapKey, mapValue] of this) {
      const isFound = cb.apply(this, [mapValue, mapKey, this]);

      if (isFound) {
        foundKey = mapKey;
        foundValue = mapValue;

        break;
      }
    }

    return foundKey && foundValue
      ? [foundKey, foundValue]
      : [];
  }

  /**
   * Returns first key which satisfies condition in callback function, otherwise `undefined`.
   */
  findKey(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): K | undefined {
    const [key] = this.findEntry(cb);

    return key;
  }

  /**
   * Returns first value which satisfies condition in callback function, otherwise `undefined`.
   */
  findValue(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): V | undefined {
    const [, value] = this.findEntry(cb);

    return value;
  }

  /**
   * Returns an entry by index if it exists, otherwise an empty array.
   */
  getEntryByIndex(index: number): [K, V] | [] {
    let resultEntry: [K, V] | [] = [];
    const isIndexInRange = index >= 0 && index < this.size;

    if (isIndexInRange) {
      let mapIndex = 0;

      for (const entry of this) {
        if (index === mapIndex) {
          resultEntry = entry;

          break;
        }

        mapIndex++;
      }
    }

    return resultEntry;
  }

  /**
   * Returns an apt map of entries which corresponds to specified keys if they exist in source apt map.
   */
  getMany(keys: K[]): AptMap<K, V> {
    const mappings = keys.reduce((acc, key) => {
      const doesExist = this.has(key);

      if (doesExist) {
        acc.push([key, this.get(key) as V]);
      }

      return acc;
    }, [] as Array<[K, V]>);

    return new AptMap<K, V>(mappings);
  }

  /**
   * Returns `true` if apt map has a specified value, otherwise `false`. Objects compared by reference by default.
   * Specify second argument when you need to compare objects by structure.
   */
  hasValue(value: V, compareStructure = false): boolean {
    let result = false;

    const compareFn = compareStructure
      ? (val1: V, val2: V) => JSON.stringify(val1) === JSON.stringify(val2)
      : (val1: V, val2: V) => val1 === val2;

    for (const [, mapValue] of this) {
      const areEqual = compareFn(value, mapValue);

      if (areEqual) {
        result = true;

        break;
      }
    }

    return result;
  }

  /**
   * Returns an array of keys.
   */
  keysAsArray(): K[] {
    return Array.from(this.keys());
  }

  /**
   * Re-maps an apt map values to new values returned in callback function.
   */
  remapValues<T = any>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): AptMap<K, T> {
    const mapped = new AptMap<K, T>();

    for (const [mapKey, mapValue] of this) {
      const resultValue = cb.apply(this, [mapValue, mapKey, this]);

      mapped.set(mapKey, resultValue);
    }

    return mapped;
  }

  /**
   * Re-maps an apt map to an array with values returned in callback function.
   */
  remapToArray<T = any>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): T[] {
    const mapped: T[] = [];

    for (const [mapKey, mapValue] of this) {
      const resultValue = cb.apply(this, [mapValue, mapKey, this]);

      mapped.push(resultValue);
    }

    return mapped;
  }

  /**
   * Re-maps an apt map to an object keys from map and values returned in callback function.
   */
  remapToObject<T = any>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): Record<string, T> {
    const mapped: Record<string, T> = {};

    for (const [mapKey, mapValue] of this) {
      const objectKey = typeof mapKey === 'object'
        ? JSON.stringify(mapKey)
        : String(mapKey);

      mapped[objectKey] = cb.apply(this, [mapValue, mapKey, this]);
    }

    return mapped;
  }

  /**
   * Adds/updates entries specified as input apt map. Returns updated apt map.
   */
  setMany<T extends V>(aptMap: AptMap<K, T>): AptMap<K, V> {
    aptMap.forEach((value, key) => this.set(key, value));

    return this;
  }

  /**
   * Returns `true` if a condition in callback function is satisfied at least for one entry, otherwise `false`
   */
  some(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): boolean {
    let result = false;

    for (const [mapKey, mapValue] of this) {
      const isTruthy = cb.apply(this, [mapValue, mapKey, this]);

      if (isTruthy) {
        result = true;

        break;
      }
    }

    return result;
  }

  /**
   * Converts apt map to object.
   */
  toObject(): Record<string, V> {
    return this.remapToObject((value) => value);
  }

  /**
   * Returns an array of values.
   */
  valuesAsArray(): V[] {
    return Array.from(this.values());
  }
}
