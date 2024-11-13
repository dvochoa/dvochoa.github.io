module.exports = {
    parser: '@typescript-eslint/parser',       // Specifies the ESLint parser
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:@next/next/recommended',         // Uses Next.js specific rules
        'prettier',                              // Integrate Prettier rules
        'plugin:prettier/recommended',           // Enables eslint-plugin-prettier
        'plugin:tailwindcss/recommended'         // Enables eslint-plugin-tailwindcss
    ],
    parserOptions: {
      ecmaVersion: 2020,                       // Use the latest ECMAScript standards
      sourceType: 'module',                    // Allows the use of imports
    },
    rules: {
        // Custom rules or overrides can be added here
        "tailwindcss/classnames-order": "off"
    },
};