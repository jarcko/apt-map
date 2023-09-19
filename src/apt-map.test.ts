import { describe, expect, test } from '@jest/globals';

import { AptMap } from './apt-map';

describe('AptMap', () => {
  let entries: Array<[any, any]>;
  let aptMap: AptMap<any, any>;

  beforeEach(() => {
    entries = [
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ];

    aptMap = new AptMap(entries);
  });

  test('should be created', () => {
    expect(aptMap).toBeTruthy();
  });

  describe('firstKey getter', () => {
    test('should return first key when it exists', () => {
      const result = aptMap.firstKey;
      expect(result).toBe(entries[0][0]);
    });

    test('should return undefined when apt map is empty', () => {
      aptMap = new AptMap();
      const result = aptMap.firstKey;
      expect(result).toBeUndefined();
    });
  });

  describe('firstValue getter', () => {
    test('should return first value when it exists', () => {
      const result = aptMap.firstValue;
      expect(result).toBe(entries[0][1]);
    });

    test('should return undefined when apt map is empty', () => {
      aptMap = new AptMap();
      const result = aptMap.firstValue;
      expect(result).toBeUndefined();
    });
  });

  describe('isEmpty getter', () => {
    test('should return false if is not empty', () => {
      const result = aptMap.isEmpty;
      expect(result).toBe(false);
    });

    test('should return true when empty', () => {
      aptMap = new AptMap();
      const result = aptMap.isEmpty;
      expect(result).toBe(true);
    });
  });

  describe('lastKey getter', () => {
    test('should return last key when it exists', () => {
      const result = aptMap.lastKey;
      expect(result).toBe(entries[2][0]);
    });

    test('should return undefined when apt map is empty', () => {
      aptMap = new AptMap();
      const result = aptMap.lastKey;
      expect(result).toBeUndefined();
    });
  });

  describe('lastValue getter', () => {
    test('should return last value when it exists', () => {
      const result = aptMap.lastValue;
      expect(result).toBe(entries[2][1]);
    });

    test('should return undefined when apt map is empty', () => {
      aptMap = new AptMap();
      const result = aptMap.lastValue;
      expect(result).toBeUndefined();
    });
  });

  describe('clone method', () => {
    let aptMapClone: AptMap<any, any>;

    beforeEach(() => {
      aptMapClone = aptMap.clone();
    });

    test('should return new apt map with the same values', () => {
      expect(aptMapClone).toEqual(aptMap);
    });

    test('should not return the same apt map', () => {
      const result = aptMapClone === aptMap;
      expect(result).toBe(false);
    });
  });

  describe('concat method', () => {
    let entries2: Array<[any, any]>;
    let aptMap2: AptMap<any, any>;

    beforeEach(() => {
      entries2 = [
        ['d', 4],
        ['e', 5],
      ];

      aptMap2 = new AptMap(entries2)
    });

    test('should return new apt map combined of 2 apt maps', () => {
      const expectedAptMap = new AptMap([...entries, ...entries2]);
      const result = aptMap.concat(aptMap2);
      expect(result).toEqual(expectedAptMap);
    });

    test('should override same keys in combined apt map ', () => {
      entries2 = [
        ['a', 5],
        ['d', 4],
        ['b', 6],
      ];
      aptMap2 = new AptMap(entries2);

      const expectedAptMap = new AptMap([
        entries2[0],
        entries2[2],
        entries[2],
        entries2[1],
      ]);

      const result = aptMap.concat(aptMap2);
      expect(result).toEqual(expectedAptMap);
    });
  });

  describe('entriesAsArray method', () => {
    test('should return entries as array', () => {
      const result = aptMap.entriesAsArray();
      expect(result).toEqual(entries);
    });
  });

  describe('every method', () => {
    test('should return true if callback function condition is satisfied for all entries', () => {
      const result = aptMap.every((value, key) => value > 0 && key !== 'x');
      expect(result).toBe(true);
    });

    test('should return false if callback function condition is not fulfilled at least for one entry', () => {
      const result = aptMap.every((value, key) => value > 0 && key !== 'c');
      expect(result).toBe(false);
    });
  });

  describe('filter method', () => {
    test('should return new apt map with filtered entries', () => {
      const filteredAptMap = aptMap.filter((value, key) => value > 1 && key !== 'b');
      const expectedAptMap = new AptMap([entries[2]]);
      expect(filteredAptMap).toEqual(expectedAptMap);
    });
  });

  describe('findEntry method', () => {
    test('should return the entry which satisfies callback function condition', () => {
      const result = aptMap.findEntry((value, key) => value === 2 && key === 'b');
      expect(result).toEqual(entries[1]);
    });

    test('should return an empty array if callback function condition is not fulfilled', () => {
      const result = aptMap.findEntry((value, key) => value === 0 && key === '');
      expect(result).toEqual([]);
    });
  });

  describe('findKey method', () => {
    test('should return the key which satisfies callback function condition', () => {
      const result = aptMap.findKey((value, key) => value === 2 && key === 'b');
      expect(result).toEqual(entries[1][0]);
    });

    test('should return an empty array if callback function condition is not fulfilled', () => {
      const result = aptMap.findKey((value, key) => value === 0 && key === '');
      expect(result).toBeUndefined();
    });
  });

  describe('findValue method', () => {
    test('should return the key which satisfies callback function condition', () => {
      const result = aptMap.findValue((value, key) => value === 2 && key === 'b');
      expect(result).toEqual(entries[1][1]);
    });

    test('should return an empty array if callback function condition is not fulfilled', () => {
      const result = aptMap.findValue((value, key) => value === 0 && key === '');
      expect(result).toBeUndefined();
    });
  });

  describe('getEntryByIndex method', () => {
    test('should return entry which corresponds to index of the entries order', () => {
      const result = aptMap.getEntryByIndex(1);
      expect(result).toEqual(entries[1]);
    });

    test('should an empty array if no entry corresponds to index', () => {
      const result = aptMap.getEntryByIndex(-1);
      expect(result).toEqual([]);
    });
  });

  describe('getMany method', () => {
    test('should return new apt map which corresponds with subset of entries', () => {
      const expectedAptMap = new AptMap([
        entries[0],
        entries[2],
      ]);

      const result = aptMap.getMany(['a', 'x', 'c']);
      expect(result).toEqual(expectedAptMap);
    });
  });

  describe('hasValue method', () => {
    test('should return true if value exists', () => {
      const result = aptMap.hasValue(2);
      expect(result).toBe(true);
    });

    test('should return false if value does not exist', () => {
      const result = aptMap.hasValue(0);
      expect(result).toBe(false);
    });

    test('should return true if value exists with compare structure', () => {
      const newKey = 'x';
      const newValue = { foo: 'bar' };
      const newValueClone = { foo: 'bar' };

      aptMap.set(newKey, newValue);
      const result = aptMap.hasValue(newValueClone, true);
      expect(result).toBe(true);
    });
  });

  describe('keysAsArray method', () => {
    test('should return keys as array', () => {
      const result = aptMap.keysAsArray();
      expect(result).toEqual(['a', 'b', 'c']);
    });
  });

  describe('remapValues method', () => {
    test('should return new apt map with same keys but new values', () => {
      const multiplier = 2;
      const expectedAptMap = new AptMap([
        [entries[0][0], entries[0][1] * multiplier],
        [entries[1][0], entries[1][1] * multiplier],
        [entries[2][0], entries[2][1] * multiplier],
      ]);

      const result = aptMap.remapValues((value) => value * multiplier);
      expect(result).toEqual(expectedAptMap);
    });
  });

  describe('remapToArray method', () => {
    test('should return an array with new re-mapped values', () => {
      const multiplier = 2;
      const expectedArray = [
        entries[0][1] * multiplier,
        entries[1][1] * multiplier,
        entries[2][1] * multiplier,
      ];

      const result = aptMap.remapToArray((value) => value * multiplier);
      expect(result).toEqual(expectedArray);
    });
  });

  describe('remapToObject method', () => {
    test('should return an object with keys from apt map and new re-mapped values', () => {
      const multiplier = 2;
      const expectedObject = {
        'a': entries[0][1] * multiplier,
        'b': entries[1][1] * multiplier,
        'c': entries[2][1] * multiplier,
      };

      const result = aptMap.remapToObject((value) => value * multiplier);
      expect(result).toEqual(expectedObject);
    });
  });

  describe('setMany method', () => {
    let entries2: Array<[any, any]>;
    let aptMap2: AptMap<any, any>;

    beforeEach(() => {
      entries2 = [
        ['d', 4],
        ['e', 5],
      ];

      aptMap2 = new AptMap(entries2)
    });

    test('should return updated apt map with added entries', () => {
      const expectedAptMap = new AptMap([...entries, ...entries2]);
      const result = aptMap.setMany(aptMap2);
      expect(result).toEqual(expectedAptMap);
    });

    test('should override existing entries when keys already exist', () => {
      entries2 = [
        ['a', 5],
        ['d', 4],
        ['b', 6],
      ];
      aptMap2 = new AptMap(entries2);

      const expectedAptMap = new AptMap([
        entries2[0],
        entries2[2],
        entries[2],
        entries2[1],
      ]);

      const result = aptMap.setMany(aptMap2);
      expect(result).toEqual(expectedAptMap);
    });
  });

  describe('some method', () => {
    test('should return true if callback function condition is satisfied at least for one entry', () => {
      const result = aptMap.some((value, key) => value > 2 && key === 'c');
      expect(result).toBe(true);
    });

    test('should return false if callback function condition is not fulfilled', () => {
      const result = aptMap.some((value, key) => value < 0 && key === 'x');
      expect(result).toBe(false);
    });
  });

  describe('toObject method', () => {
    test('should covert apt map to object', () => {
      const expectedObject = {
        'a': entries[0][1],
        'b': entries[1][1],
        'c': entries[2][1],
      };

      const result = aptMap.toObject();
      expect(result).toEqual(expectedObject);

    });
  });

  describe('valuesAsArray method', () => {
    test('should return values as array', () => {
      const result = aptMap.valuesAsArray();
      expect(result).toEqual([1, 2, 3]);
    });
  });

});