import { describe, expect, test } from '@jest/globals';

import { AptMap } from './apt-map';


describe('AptMap', () => {
  test('should be created', () => {
    const aptMap = new AptMap();
    expect(aptMap).toBeTruthy();
  });
});