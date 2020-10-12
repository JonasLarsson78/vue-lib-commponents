# Vue-lib-commponents

Vue-lib-commponents is a Vue library for add commponents.

## Installation

Use the package manager npm to install vue-lib-commponents.

```bash
npm install vue-lib-commponents
```
Add css file to global scope.
```bash
@import "../../node_modules/vue-lib-commponents/src/lib-components/css.css";
```

## Usage

```vue.js
import {
  VueLibButton,
  VueLibInput,
  VueLibDatepicker,
  VueLibTableList 
  } from "vue-lib-commponents";

components: {
    VueLibButton,
    VueLibInput,
    VueLibDatepicker,
    VueLibTableList
  },
```