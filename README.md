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
var pluralise = require('mp-bubble-sort');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'mp-bubble-sort';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mp-bubble-sort');
});
```
## Test 
```sh
npm run test
```