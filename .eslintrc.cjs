module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    plugins: ['@typescript-eslint', 'react-refresh'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    overrides: [
        {
            files: ['tests/**/*'],
            env: {
                jest: true
            }
        }
    ],
    rules: {
        'no-console': 'off',
        // remove when dev bench deepens, create new process/gulp task to run and 'check' before each merge
        'no-empty': [
            2,
            {
                allowEmptyCatch: true
            }
        ],
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': 2,
        'no-multi-spaces': 2,
        'one-var': [2, 'never'],
        'no-nested-ternary': 0,
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'space-unary-ops': [
            2,
            {
                words: false,
                nonwords: false
            }
        ],
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'unused-imports/no-unused-imports': 'off',
        'no-spaced-func': 2,
        'space-before-function-paren': [
            2,
            {
                anonymous: 'ignore',
                named: 'never'
            }
        ],
        'array-bracket-spacing': [
            2,
            'never',
            {
                singleValue: false,
                objectsInArrays: false,
                arraysInArrays: false
            }
        ],
        'space-in-parens': [2, 'never'],
        'comma-dangle': [2, 'never'],
        'no-unused-vars': [
            0,
            {
                vars: 'all',
                args: 'none',
                varsIgnorePattern: '[Debugger|skin|tag|Tag|]',
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                caughtErrors: 'none'
            }
        ],
        'no-var': 2,
        yoda: [2, 'never'],
        'comma-style': [2, 'last'],
        curly: [2, 'all'],
        'template-curly-spacing': ['off'],
        'eol-last': 2,
        semi: [2, 'always'],
        'space-infix-ops': 2,
        'keyword-spacing': [
            2,
            {
                overrides: {
                    else: {
                        before: true
                    },
                    while: {
                        before: true
                    },
                    catch: {
                        before: true
                    },
                    finally: {
                        before: true
                    }
                }
            }
        ],
        strict: [2, 'global'],
        'consistent-this': [2, 'that', '_self'],
        'linebreak-style': [2, 'unix'],
        'function-paren-newline': [2, 'never'],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true
            }
        ],
        'no-useless-catch': 1,
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['./', '../'],
                        message: 'Relative imports are not allowed.'
                    }
                ]
            }
        ],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-ts-comment': [0],
        '@typescript-eslint/no-this-alias': [0],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                varsIgnorePattern: '[Debugger|skin|tag|Tag|]',
                argsIgnorePattern: '^[_|...]',
                caughtErrors: 'none',
                ignoreRestSiblings: true
            }
        ]
    }
};
