module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-scss"],
  "rules": {
    "at-rule-empty-line-before": false,
    "at-rule-no-unknown": false,
    "rule-empty-line-before": ["always", {
      ignore: ["inside-block-and-after-rule"]
    }],
    "number-leading-zero": "never",
    "block-closing-brace-empty-line-before": ["always", {
      except: ["inside-block"]
    }]
  },
};
