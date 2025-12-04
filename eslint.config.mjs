import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc', '**/vitest.config.*.timestamp*'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '@deep-badger/domain',
              onlyDependOnLibsWithTags: ['@deep-badger/domain'],
            },
            {
              sourceTag: '@deep-badger/application',
              onlyDependOnLibsWithTags: [
                '@deep-badger/application',
                '@deep-badger/domain',
              ],
            },
            {
              sourceTag: '@deep-badger/infrastructure',
              onlyDependOnLibsWithTags: [
                '@deep-badger/infrastructure',
                '@deep-badger/application',
                '@deep-badger/domain',
              ],
            },
            {
              sourceTag: '@deep-badger/tests',
              onlyDependOnLibsWithTags: [
                '@deep-badger/tests',
                '@deep-badger/application',
                '@deep-badger/domain',
                '@deep-badger/infrastructure',
              ],
            }
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
