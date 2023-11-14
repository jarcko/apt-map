import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      branches: 100,
      functions: 100,
      lines: 100,
      reporter: ['text-summary', 'text'],
      statements: 100,
    },
    globals: true,
    reporters: ['verbose'],
  },
});
