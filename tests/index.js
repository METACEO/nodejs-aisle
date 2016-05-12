'use strict';

function fail(error){
  
  console.error(error);
  
  process.exit(1);
  
}

/* Prepare aisle.
*/
var aisle      = require('../');
module.exports = function EXPORTS(){ return "test" };

/* Prepare namespace.
*/
aisle("test",module.exports);

/* Prepare listener.
*/
aisle.on("test",function TEST(data){
  
  if(data !== module.exports) fail("Invalid exports.");
  
  if(data() !== "test") fail("Invalid data.");
  
  process.exit(0);
  
});

/* Include external file.
*/
require("./external");

/* Time against the external file.
*/
setTimeout(function TIMEOUT(){ fail("Timed out.") },1000);

