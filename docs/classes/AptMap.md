[apt-map](../README.md) / [Exports](../modules.md) / AptMap

# Class: AptMap<K, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `any` |
| `V` | `any` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`AptMap`**

## Table of contents

### Constructors

- [constructor](AptMap.md#constructor)

### Properties

- [[toStringTag]](AptMap.md#[tostringtag])
- [size](AptMap.md#size)
- [[species]](AptMap.md#[species])

### Accessors

- [firstKey](AptMap.md#firstkey)
- [firstValue](AptMap.md#firstvalue)
- [isEmpty](AptMap.md#isempty)
- [lastKey](AptMap.md#lastkey)
- [lastValue](AptMap.md#lastvalue)

### Methods

- [[iterator]](AptMap.md#[iterator])
- [clear](AptMap.md#clear)
- [clone](AptMap.md#clone)
- [concat](AptMap.md#concat)
- [delete](AptMap.md#delete)
- [entries](AptMap.md#entries)
- [entriesAsArray](AptMap.md#entriesasarray)
- [every](AptMap.md#every)
- [filter](AptMap.md#filter)
- [findEntry](AptMap.md#findentry)
- [findKey](AptMap.md#findkey)
- [findValue](AptMap.md#findvalue)
- [forEach](AptMap.md#foreach)
- [get](AptMap.md#get)
- [getEntryByIndex](AptMap.md#getentrybyindex)
- [getMany](AptMap.md#getmany)
- [has](AptMap.md#has)
- [hasValue](AptMap.md#hasvalue)
- [keys](AptMap.md#keys)
- [keysAsArray](AptMap.md#keysasarray)
- [remapToArray](AptMap.md#remaptoarray)
- [remapToObject](AptMap.md#remaptoobject)
- [remapValues](AptMap.md#remapvalues)
- [set](AptMap.md#set)
- [setMany](AptMap.md#setmany)
- [some](AptMap.md#some)
- [toObject](AptMap.md#toobject)
- [values](AptMap.md#values)
- [valuesAsArray](AptMap.md#valuesasarray)

## Constructors

### constructor

• **new AptMap**<`K`, `V`\>(`entries?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `any` |
| `V` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`K`, `V`][] |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:51

• **new AptMap**<`K`, `V`\>(`iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `any` |
| `V` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | ``null`` \| `Iterable`<readonly [`K`, `V`]\> |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:159

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.[toStringTag]

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:46

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.[species]

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

## Accessors

### firstKey

• `get` **firstKey**(): `undefined` \| `K`

Returns first key if it exists, otherwise `undefined`.

#### Returns

`undefined` \| `K`

#### Defined in

[src/apt-map.ts:7](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L7)

___

### firstValue

• `get` **firstValue**(): `undefined` \| `V`

Returns first value if it exists, otherwise `undefined`.

#### Returns

`undefined` \| `V`

#### Defined in

[src/apt-map.ts:14](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L14)

___

### isEmpty

• `get` **isEmpty**(): `boolean`

Returns `true` if apt map does not have any elements, otherwise `false`.

#### Returns

`boolean`

#### Defined in

[src/apt-map.ts:21](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L21)

___

### lastKey

• `get` **lastKey**(): `undefined` \| `K`

Returns last key if it exists, otherwise `undefined`.

#### Returns

`undefined` \| `K`

#### Defined in

[src/apt-map.ts:28](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L28)

___

### lastValue

• `get` **lastValue**(): `undefined` \| `V`

Returns last value if it exists, otherwise `undefined`.

#### Returns

`undefined` \| `V`

#### Defined in

[src/apt-map.ts:38](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L38)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.[iterator]

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:119

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:21

___

### clone

▸ **clone**(): [`AptMap`](AptMap.md)<`K`, `V`\>

Creates a shallow copy of an AptMap and returns it.

#### Returns

[`AptMap`](AptMap.md)<`K`, `V`\>

#### Defined in

[src/apt-map.ts:64](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L64)

___

### concat

▸ **concat**<`T`\>(`aptMap`): [`AptMap`](AptMap.md)<`K`, `V`\>

Concatenates 2 apt maps and return merged result.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `aptMap` | [`AptMap`](AptMap.md)<`K`, `T`\> |

#### Returns

[`AptMap`](AptMap.md)<`K`, `V`\>

#### Defined in

[src/apt-map.ts:71](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L71)

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

Map.delete

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:124

___

### entriesAsArray

▸ **entriesAsArray**(): [`K`, `V`][]

Returns an array of [key, value] pairs.

#### Returns

[`K`, `V`][]

#### Defined in

[src/apt-map.ts:80](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L80)

___

### every

▸ **every**(`cb`): `boolean`

Returns `true` if a condition in callback function is satisfied for all entries, otherwise `false`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `V`, `key?`: `K`, `aptMap?`: [`AptMap`](AptMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/apt-map.ts:48](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L48)

___

### filter

▸ **filter**(`cb`): [`AptMap`](AptMap.md)<`K`, `V`\>

Filters input apt map using callback function and returns filtered apt map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `boolean`\> |

#### Returns

[`AptMap`](AptMap.md)<`K`, `V`\>

#### Defined in

[src/apt-map.ts:87](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L87)

___

### findEntry

▸ **findEntry**(`cb`): [] \| [`K`, `V`]

Returns first entry which satisfies condition in callback function, otherwise an empty array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `boolean`\> |

#### Returns

[] \| [`K`, `V`]

#### Defined in

[src/apt-map.ts:103](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L103)

___

### findKey

▸ **findKey**(`cb`): `undefined` \| `K`

Returns first key which satisfies condition in callback function, otherwise `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `boolean`\> |

#### Returns

`undefined` \| `K`

#### Defined in

[src/apt-map.ts:125](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L125)

___

### findValue

▸ **findValue**(`cb`): `undefined` \| `V`

Returns first value which satisfies condition in callback function, otherwise `undefined`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `boolean`\> |

#### Returns

`undefined` \| `V`

#### Defined in

[src/apt-map.ts:134](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L134)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:29

___

### get

▸ **get**(`key`): `undefined` \| `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

Map.get

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:34

___

### getEntryByIndex

▸ **getEntryByIndex**(`index`): [] \| [`K`, `V`]

Returns an entry by index if it exists, otherwise an empty array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[] \| [`K`, `V`]

#### Defined in

[src/apt-map.ts:143](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L143)

___

### getMany

▸ **getMany**(`keys`): [`AptMap`](AptMap.md)<`K`, `V`\>

Returns an apt map of entries which corresponds to specified keys if they exist in source apt map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `K`[] |

#### Returns

[`AptMap`](AptMap.md)<`K`, `V`\>

#### Defined in

[src/apt-map.ts:167](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L167)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

Map.has

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:38

▸ **has**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `K` \| `WidenLiteral`<`K`\> & {} |

#### Returns

`boolean`

#### Inherited from

Map.has

#### Defined in

node_modules/.pnpm/@total-typescript+ts-reset@0.5.1/node_modules/@total-typescript/ts-reset/dist/map-has.d.ts:4

___

### hasValue

▸ **hasValue**(`value`, `compareStructure?`): `boolean`

Returns `true` if apt map has a specified value, otherwise `false`. Objects compared by reference by default.
Specify second argument when you need to compare objects by structure.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `V` | `undefined` |
| `compareStructure` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/apt-map.ts:184](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L184)

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:129

___

### keysAsArray

▸ **keysAsArray**(): `K`[]

Returns an array of keys.

#### Returns

`K`[]

#### Defined in

[src/apt-map.ts:206](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L206)

___

### remapToArray

▸ **remapToArray**<`T`\>(`cb`): `T`[]

Re-maps an apt map to an array with values returned in callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `T`\> |

#### Returns

`T`[]

#### Defined in

[src/apt-map.ts:228](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L228)

___

### remapToObject

▸ **remapToObject**<`T`\>(`cb`): `Record`<`string`, `T`\>

Re-maps an apt map to an object keys from map and values returned in callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `T`\> |

#### Returns

`Record`<`string`, `T`\>

#### Defined in

[src/apt-map.ts:243](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L243)

___

### remapValues

▸ **remapValues**<`T`\>(`cb`): [`AptMap`](AptMap.md)<`K`, `T`\>

Re-maps an apt map values to new values returned in callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `T`\> |

#### Returns

[`AptMap`](AptMap.md)<`K`, `T`\>

#### Defined in

[src/apt-map.ts:213](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L213)

___

### set

▸ **set**(`key`, `value`): [`AptMap`](AptMap.md)<`K`, `V`\>

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`AptMap`](AptMap.md)<`K`, `V`\>

#### Inherited from

Map.set

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.collection.d.ts:42

___

### setMany

▸ **setMany**<`T`\>(`aptMap`): [`AptMap`](AptMap.md)<`K`, `V`\>

Adds/updates entries specified as input apt map. Returns updated apt map.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `aptMap` | [`AptMap`](AptMap.md)<`K`, `T`\> |

#### Returns

[`AptMap`](AptMap.md)<`K`, `V`\>

#### Defined in

[src/apt-map.ts:260](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L260)

___

### some

▸ **some**(`cb`): `boolean`

Returns `true` if a condition in callback function is satisfied at least for one entry, otherwise `false`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `Callback`<`K`, `V`, `boolean`\> |

#### Returns

`boolean`

#### Defined in

[src/apt-map.ts:269](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L269)

___

### toObject

▸ **toObject**(): `Record`<`string`, `V`\>

Converts apt map to object.

#### Returns

`Record`<`string`, `V`\>

#### Defined in

[src/apt-map.ts:287](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L287)

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/.pnpm/typescript@5.2.2/node_modules/typescript/lib/lib.es2015.iterable.d.ts:134

___

### valuesAsArray

▸ **valuesAsArray**(): `V`[]

Returns an array of values.

#### Returns

`V`[]

#### Defined in

[src/apt-map.ts:294](https://github.com/jarcko/apt-map/blob/d83863d0eb40/src/apt-map.ts#L294)
