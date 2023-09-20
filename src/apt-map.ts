type Callback<K, V, R = boolean> = (value: V, key?: K, aptMap?: AptMap<K, V>) => R

export class AptMap<K = any, V = any> extends Map<K, V> {
  /**
   * Returns first key if it exists, otherwise `undefined`.
   */
  get firstKey(): K | undefined {
    return this.keys().next().value
  }

  /**
   * Returns first value if it exists, otherwise `undefined`.
   */
  get firstValue(): V | undefined {
    return this.values().next().value
  }

  /**
   * Returns `true` if apt map does not have any elements, otherwise `false`.
   */
  get isEmpty() {
    return this.size === 0
  }

  /**
   * Returns last key if it exists, otherwise `undefined`.
   */
  get lastKey() {
    const index = this.size - 1
    const keys = this.keysAsArray()

    return keys[index]
  }

  /**
   * Returns last value if it exists, otherwise `undefined`.
   */
  get lastValue() {
    const index = this.size - 1
    const values = this.valuesAsArray()

    return values[index]
  }

  /**
   * Returns `true` if a condition in callback function is satisfied for all entries, otherwise `false`.
   */
  every(cb: Callback<K, V>) {
    let result = false

    for (const [mapKey, mapValue] of this) {
      result = cb(mapValue, mapKey, this)

      if (!result)
        break
    }

    return result
  }

  /**
   * Creates a shallow copy of an AptMap and returns it.
   */
  clone() {
    return new AptMap<K, V>(this.entriesAsArray())
  }

  /**
   * Concatenates 2 apt maps and return merged result.
   */
  concat<T extends V>(aptMap: AptMap<K, T>) {
    return this
      .clone()
      .setMany<T>(aptMap)
  }

  /**
   * Returns an array of [key, value] pairs.
   */
  entriesAsArray() {
    return Array.from(this.entries())
  }

  /**
   * Filters input apt map using callback function and returns filtered apt map.
   */
  filter(cb: Callback<K, V>) {
    const filtered = new AptMap<K, V>()

    this.forEach((mapValue, mapKey) => {
      const isFiltered = cb(mapValue, mapKey, this)

      if (isFiltered)
        filtered.set(mapKey, mapValue)
    })

    return filtered
  }

  /**
   * Returns first entry which satisfies condition in callback function, otherwise an empty array.
   */
  findEntry(cb: Callback<K, V>) {
    let foundKey: K | undefined
    let foundValue: V | undefined

    this.forEach((mapValue, mapKey) => {
      const isFound = cb(mapValue, mapKey, this)

      if (!isFound)
        return

      foundKey = mapKey
      foundValue = mapValue
    })

    return foundKey && foundValue
      ? [foundKey, foundValue] as [K, V]
      : [] as []
  }

  /**
   * Returns first key which satisfies condition in callback function, otherwise `undefined`.
   */
  findKey(cb: Callback<K, V>) {
    const [key] = this.findEntry(cb)

    return key
  }

  /**
   * Returns first value which satisfies condition in callback function, otherwise `undefined`.
   */
  findValue(cb: Callback<K, V>) {
    const [, value] = this.findEntry(cb)

    return value
  }

  /**
   * Returns an entry by index if it exists, otherwise an empty array.
   */
  getEntryByIndex(index: number) {
    let resultEntry: [K, V] | [] = []
    const isIndexInRange = index >= 0 && index < this.size

    if (isIndexInRange) {
      let mapIndex = 0

      for (const entry of this) {
        if (index === mapIndex) {
          resultEntry = entry

          break
        }

        mapIndex++
      }
    }

    return resultEntry
  }

  /**
   * Returns an apt map of entries which corresponds to specified keys if they exist in source apt map.
   */
  getMany(keys: K[]) {
    const mappings: [K, V][] = []

    keys.forEach((key) => {
      if (!this.has(key))
        return

      mappings.push([key, this.get(key) as V])
    })

    return new AptMap<K, V>(mappings)
  }

  /**
   * Returns `true` if apt map has a specified value, otherwise `false`. Objects compared by reference by default.
   * Specify second argument when you need to compare objects by structure.
   */
  hasValue(value: V, compareStructure = false) {
    let result = false

    const compareFn = compareStructure
      ? (val1: V, val2: V) => JSON.stringify(val1) === JSON.stringify(val2)
      : (val1: V, val2: V) => val1 === val2

    this.forEach((mapValue) => {
      const areEqual = compareFn(value, mapValue)

      if (!areEqual)
        return

      result = true
    })

    return result
  }

  /**
   * Returns an array of keys.
   */
  keysAsArray() {
    return Array.from(this.keys())
  }

  /**
   * Re-maps an apt map values to new values returned in callback function.
   */
  remapValues<T = any>(cb: Callback<K, V, T>) {
    const mapped = new AptMap<K, T>()

    this.forEach((mapValue, mapKey) => {
      const resultValue = cb(mapValue, mapKey, this)

      mapped.set(mapKey, resultValue)
    })

    return mapped
  }

  /**
   * Re-maps an apt map to an array with values returned in callback function.
   */
  remapToArray<T = any>(cb: Callback<K, V, T>) {
    const mapped: T[] = []

    this.forEach((mapValue, mapKey) => {
      const resultValue = cb(mapValue, mapKey, this)

      mapped.push(resultValue)
    })

    return mapped
  }

  /**
   * Re-maps an apt map to an object keys from map and values returned in callback function.
   */
  remapToObject<T = any>(cb: Callback<K, V, T>) {
    const mapped: Record<string, T> = {}

    this.forEach((mapValue, mapKey) => {
      const objectKey = typeof mapKey === 'object'
        ? JSON.stringify(mapKey)
        : String(mapKey)

      mapped[objectKey] = cb(mapValue, mapKey, this)
    })

    return mapped
  }

  /**
   * Adds/updates entries specified as input apt map. Returns updated apt map.
   */
  setMany<T extends V>(aptMap: AptMap<K, T>) {
    aptMap.forEach((value, key) => this.set(key, value))

    return this
  }

  /**
   * Returns `true` if a condition in callback function is satisfied at least for one entry, otherwise `false`
   */
  some(cb: Callback<K, V>) {
    let result = false

    this.forEach((mapValue, mapKey) => {
      const isTruthy = cb(mapValue, mapKey, this)

      if (!isTruthy)
        return

      result = true
    })

    return result
  }

  /**
   * Converts apt map to object.
   */
  toObject() {
    return this.remapToObject(value => value)
  }

  /**
   * Returns an array of values.
   */
  valuesAsArray() {
    return Array.from(this.values())
  }
}
