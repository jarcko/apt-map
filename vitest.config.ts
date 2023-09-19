import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      branches: 98,
      enabled: true,
      functions: 100,
      lines: 99.64,
      provider: 'v8',
      reporter: [
        'html',
        'text-summary',
      ],
      statements: 99.64,
      thresholdAutoUpdate: true,
    },
    globals: true,
    reporters: [
      'html',
      'verbose',
    ],
  },
})
