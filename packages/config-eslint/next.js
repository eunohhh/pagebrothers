const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
    extends: [
        ...[
            '@vercel/style-guide/eslint/node',
            '@vercel/style-guide/eslint/typescript',
            '@vercel/style-guide/eslint/browser',
            '@vercel/style-guide/eslint/react',
            '@vercel/style-guide/eslint/next',
        ].map(require.resolve),
        'turbo',
    ],
    parserOptions: {
        project,
    },
    globals: {
        React: true,
        JSX: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                project,
            },
            node: {
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    ignorePatterns: ['node_modules/', 'dist/'],
    // add rules configurations here
    rules: {
        'import/no-default-export': 'off',
        'unicorn/filename-case': 'off', // 이 줄을 추가하여 규칙 비활성화
        '@typescript-eslint/consistent-type-definitions': 'off', // 이 규칙을 비활성화
        // 'import/no-unresolved': 'off', // 경로 문제를 무시하도록 설정
    },
};
