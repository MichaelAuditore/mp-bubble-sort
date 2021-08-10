# mp-bubble-sort

New package to publish on NPM registry

A Node.js module that returns a sorted list

## Installation

```sh
npm install mp-bubble-sort --save
yarn add mp-bubble-sort
bower install mp-bubble-sort --save
```

## Usage

### Javascript

```javascript
var sort = require("mp-bubble-sort");
var sortedList = sort.bubbleSort([3, 6, 5, 1, 4, 2, 8, 9, 7]);
```

```sh
Output should be '[1,2,3,4,5,6,7,8,9]'
```

### TypeScript

```typescript
import { bubbleSort } from "mp-bubble-sort";
console.log(bubbleSort(["Miguel", "Andrea", "Ana", "Julian", "Fernando", "Luis"]));
```

```sh
Output should be ["Ana", "Andrea", "Fernando", "Julian", "Luis", "Miguel"]
```

### AMD

```javascript
define(function (require, exports, module) {
  var sort = require("mp-bubble-sort");
});
```

## Test

```sh
npm run test
```
