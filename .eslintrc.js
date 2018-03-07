module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true
  },
  "globals": {},
  "plugins": ["flowtype", "react"],
  "extends": ["standard", "standard-flow", "react-app"],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off"
  }
}
