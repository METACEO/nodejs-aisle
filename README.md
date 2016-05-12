# aisle

[![Build Status](https://travis-ci.org/METACEO/nodejs.aisle.svg?branch=master)](https://travis-ci.org/METACEO/nodejs.aisle)
[![Dependency Status](https://david-dm.org/METACEO/nodejs.aisle.svg)](https://david-dm.org/METACEO/nodejs.aisle)

*Module for global event handling and namespacing.*

```
$ npm install aisle
```

## Usage

### Programmatically

```javascript
var aisle = require("aisle");
```

Call your `aisle` for namespaces or use it as you would an [EventEmitter](https://nodejs.org/docs/latest/api/events.html#events_class_eventemitter) object.

#### Namespaces

If you call `aisle` without any arguments, then `aisle` will tap into and return `require.main.exports`, otherwise `aisle` will return your namespace and its data. If you provide data with your namespace, then `aisle` will assign that data to your namespace (namespaces will be created or overwritten.)

```javascript
// main.js
var aisle = require("aisle");

module.exports = {"data": "main"};

aisle("my-namespace",{"abc": 123});

require("./other");
```

```javascript
// other.js
var aisle = require("aisle");

console.log(aisle()); // { data: 'main' }
console.log(aisle("my-namespace")); // { abc: 123 }
console.log(aisle("nonexistent-namespace")); // undefined
```

#### Events

With your Node's version, use Node's documentation to find its [EventEmitter](https://nodejs.org/docs/latest/api/events.html#events_class_eventemitter) abilities.

```javascript
// main.js
var aisle = require("aisle");

aisle.on("some global event",console.log); // { data: [ 'here', true ] }

require("./other");
```

```javascript
// other.js
var aisle = require("aisle");

aisle.emit("some global event",{"data": ["here",true]});
```
