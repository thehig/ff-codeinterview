// Sails was not written with airbnb in mind, so there's 100+ errors
// module.exports = {
//     "extends": "airbnb-base",
//     "plugins": [
//         "import"
//     ]
// };

// sails-eslint recommended .eslintrc - https://github.com/jasancheg/sails-eslint/blob/master/.eslintrc
// Reduces initial error set to ~30
module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "node": true
  },
  "rules": {
    "comma-dangle": 0,
    "no-console": 0,
    "strict": [2, "global"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "keyword-spacing": 2,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [0, "always"],
    "dot-location": [2, "property"],
    "space-infix-ops": 2,
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "operator-linebreak": [2, "after"],
    "no-spaced-func": 2,
    "comma-spacing": [1, {"before": false, "after": true}],
    "no-multiple-empty-lines": [2, {"max": 2}],
    "camelcase": [1, {"properties": "always"}],
    "curly": 2,
    "wrap-iife": [2, "inside"],
    "eqeqeq": 2,
    "no-use-before-define": [2, "nofunc"],
    "no-unused-vars": 2,
    "no-unexpected-multiline": 2,
    "no-multi-str": 2,
    "no-irregular-whitespace": 2,
    "no-trailing-spaces": 2,
    "linebreak-style": 0,
    "eol-last": 2
  }
}