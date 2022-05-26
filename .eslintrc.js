/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier-vue/recommended', 'prettier/vue'],
  settings: {
    'prettier-vue': {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        // Settings for how to process custom blocks
        customBlocks: {
          module: { lang: 'js' },
        },
      },
      usePrettierrc: true,
    },
  },

  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  "env": {
    "vue/setup-compiler-macros": true
  }
}
