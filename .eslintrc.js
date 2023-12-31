module.exports = {
    extends: ['react-app', 'react-app/jest', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        "jsx-a11y/anchor-is-valid": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "eqeqeq": "off",
        "array-callback-return": "off",
        "no-loop-func": "off",
        "no-loop-sync": "off",
        "import/no-anonymous-default-export": "off",
        "jsx-a11y/alt-text": "off",
        "no-useless-escape": "off",
        "no-template-curly-in-string": "off",
        "no-sequences": "off",
        "no-self-assign": "off",
        'max-len': [
            'warn',
            {
                code: 1000,
            },
        ],
        'max-lines': "off",
    },
}
