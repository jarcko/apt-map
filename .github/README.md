# apt-map

Convenient iterable map based on ES6 Map. Classic map has only `forEach()` method,
which is not quite enough in many cases. AptMap implements the most commonly used methods
from array like filter, find, some etc.

```ts
AptMap<K, V>;
```

`K` - generic type for key, can be any type including object

`V` - generic type for value, can be any type including object

Example:

```ts
const obj = {
  a: 1,
  b: 2,
};
const entries: [string, number][] = Object.entries(obj);
const map = new AptMap<string, number>();
```

## Installation

```bash
npm install --save apt-map
```

## Features

- Combines pros of array and `ES6 Map` (classic js object). You can work with the collection similar way as with an array
  and also able to get element by key with `O(1)` complexity.
- Extends basic ES6 Map so backward compatible and traditional `Map` can be substituted with `AptMap` when needed.

Please check the [generated documentation](../docs/classes/AptMap.md).
