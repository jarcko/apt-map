export class AptMap<K = any, V = any> extends Map<K, V> {
  get firstKey(): K | undefined {
    return this.keys().next().value;
  }

  get firstValue(): V | undefined {
    return this.values().next().value;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  get lastKey(): K | undefined {
    const index = this.size - 1;
    const keys = this.keysAsArray();

    return keys[index]
  }

  get lastValue(): V | undefined {
    const index = this.size - 1;
    const values = this.valuesAsArray();

    return values[index]
  }

  clone(): AptMap<K, V> {
    return new AptMap<K, V>(this.entriesAsArray());
  }

  concat<T extends V>(aptMap: AptMap<K, T>): AptMap<K, V> {
    return this
      .clone()
      .setMany<T>(aptMap)
  }

  entriesAsArray(): Array<[K, V]> {
    return Array.from(this.entries());
  }

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

    return Boolean(foundKey && foundValue)
      ? [foundKey as K, foundValue as V]
      : [];
  }

  findKey(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): K | undefined {
    const [key] = this.findEntry(cb);
    return key;
  }

  findValue(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): V | undefined {
    const [, value] = this.findEntry(cb);
    return value;
  }

  getEntryByIndex(index: number): [K, V] | unknown[] {
    let resultEntry: [K, V] | unknown[] = [];
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

  getMany(keys: K[]): AptMap<K, V> {
    const mappings: Array<[K, V]> = keys.reduce((acc, key) => {
      const isExist = this.has(key);

      if (isExist) {
        acc.push([key, this.get(key) as V]);
      }

      return acc;
    }, [] as Array<[K, V]>);

    return new AptMap<K, V>(mappings);
  }

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

  keysAsArray(): K[] {
    return Array.from(this.keys());
  }

  remapValues<T = any>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): AptMap<K, T> {
    const mapped = new AptMap<K, T>();

    for (const [mapKey, mapValue] of this) {
      const resultValue = cb.apply(this, [mapValue, mapKey, this]);
      mapped.set(mapKey, resultValue);
    }

    return mapped;
  }

  remapToArray<T = any>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): T[] {
    const mapped: T[] = [];

    for (const [mapKey, mapValue] of this) {
      const resultValue = cb.apply(this, [mapValue, mapKey, this]);
      mapped.push(resultValue);
    }

    return mapped;
  }

  remapToObject<T = any>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): Record<string, T> {
    const mapped: Record<string, T> = {};

    for (const [mapKey, mapValue] of this) {
      const objectKey = typeof mapKey === 'object'
        ? JSON.stringify(mapKey)
        : String(mapKey)

      mapped[objectKey] = cb.apply(this, [mapValue, mapKey, this]);
    }

    return mapped;
  }

  setMany<T extends V>(aptMap: AptMap<K, T>): AptMap<K, V> {
    aptMap.forEach((value, key) => this.set(key, value));
    return this;
  }

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

  toObject(): Record<string, V> {
    return this.remapToObject((value) => value);
  }

  valuesAsArray(): V[] {
    return Array.from(this.values());
  }
}