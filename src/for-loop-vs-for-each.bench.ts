import { bench, describe } from 'vitest';

const items = Array.from({ length: 100_000 }, (_, i) => i);

items.unshift(-1);

let _found = false;

describe('for loop vs for each', () => {
  beforeEach(() => {
    _found = false;
  });

  bench('for loop', () => {
    for (const item of items) {
      if (item === -1) {
        _found = true;

        break;
      }
    }
  });

  bench('for each', () => {
    items.forEach((item) => {
      if (_found) {
        return;
      }

      if (item === -1) {
        _found = true;
      }
    });
  });
});
