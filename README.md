# apt-map

Convenient iterable map based on ES6 Map. Classic map has only `forEach()` method,
which is not quite enough in many cases. AptMap implements the most commonly used methods
from array like filter, find, some etc.

```
AptMap<K, V>
```

K - generic type for key, can be any type including object

V - generic type for value, can be any type including object

Example:

```
const obj = {
  a: 1,
  b: 2,
};
const entries: [string, number][] = Object.entries(obj);

const map = new AptMap<string, number>();

```

## Installation

```
npm install --save apt-map
```

## Features

- Combines pros of array and ES6 Map(classic js object). You can work with the collection similar way as with an array
  and also able to get element by key with O(1) complexity
- Extends basic ES6 Map so backward compatible and Map can be substituted with AptMap when needed

## Properties

| Name         | Description                                                              |
|--------------|--------------------------------------------------------------------------|
| `firstKey`   | Returns first key                                                        |
| `firstValue` | Returns first value                                                      |
| `isEmpty`    | Returns `true` if apt map does not have any elements, otherwise, `false` |
| `lastKey`    | Returns last key                                                         |
| `lastValue`  | Returns last value                                                       |
| `size`       | Returns the number of elements in this map                               |

## Methods

| Name                                                                                       | Description                                                                                                                                                                         |
|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `clear(): void`                                                                            | Deletes all entries (key-value pairs)                                                                                                                                               |
| `clone(): AptMap<K, V>`                                                                    | Creates a shallow copy of an AptMap and returns it                                                                                                                                  |
| `concat<T extends V>(aptMap: AptMap<K, T>): AptMap<K, V>`                                  | Concatenates 2 apt maps and return merged result                                                                                                                                    |
| `entries(): IterableIterator<[K, V]>`                                                      | Returns a new iterator object that contains the `[key, value]` pairs                                                                                                                |
| `entriesAsArray(): Array<[K, V]>`                                                          | Returns an array of `[key, value]` pairs                                                                                                                                            |
| `delete(key: K): boolean`                                                                  | Deletes element by key and returns `true` if element has been removed                                                                                                               |
| `filter(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): AptMap<K, V>`          | Filters input apt map using callback function and returns filtered apt map                                                                                                          |
| `findEntry(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): [K, V]`             | Return first entry which satisfies condition in callback function                                                                                                                   |
| `forEach(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => void)`                          | Iterates via apt map and calls callback function per each entry                                                                                                                     |
| `get(key: K): V`                                                                           | Retrieves an element by key                                                                                                                                                         |
| `getEntryByIndex(index: number): [K, V]`                                                   | Returns an entry by index                                                                                                                                                           |
| `getMany(keys: K[]): AptMap<K, V>`                                                         | Returns an apt map of entries which corresponds to specified keys if they exist in source apt map                                                                                   |
| `has(key: K): boolean`                                                                     | Returns `true` if apt map has a specified key, otherwise `false`. Objects compared by reference by default. Specify second argument when you need to compare objects by structure   |
| `hasValue(value: V, compareStructure?: boolean): boolean`                                  | Returns `true` if apt map has a specified value, otherwise `false`. Objects compared by reference by default. Specify second argument when you need to compare objects by structure |                                                                                                                                                                                     |
| `keys(): IterableIterator<K>`                                                              | Returns a new iterator object that contains the keys for each element in this apt map                                                                                               |
| `keysAsArray(): K[]`                                                                       | Returns an array of keys                                                                                                                                                            |
| `remapValues<T>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): AptMap<K, T>`        | Re-maps an apt map values to new values returned in callback function                                                                                                               |
| `remapToArray<T>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): T[]`                | Re-maps an apt map to an array with values returned in callback function                                                                                                            |
| `remapToObject<T>(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => T): Record<string, T>` | Re-maps an apt map to an object keys from map and values returned in callback function                                                                                              |
| `set(key: K, value: V): AptMap<K, V>`                                                      | Adds/updates an entry with a specified key and a value. Returns updated apt map                                                                                                     |
| `setMany<T extends V>(aptMap: AptMap<K, T>): AptMap<K, V>`                                 | Adds/updates entries specified as input apt map. Returns updated apt map                                                                                                            |
| `some(cb: (value: V, key?: K, aptMap?: AptMap<K, V>) => boolean): boolean`                 | Returns `true` if a condition in callback function is satisfied, otherwise `false`                                                                                                  |
| `toObject(): Record<string, V>`                                                            | Converts apt map to object                                                                                                                                                          |
| `values(): IterableIterator<V>`                                                            | Returns a new iterator object that contains the values for each element in this apt map                                                                                             |
| `valuesAsArray(): V[]`                                                                     | Returns an array of values                                                                                                                                                          |