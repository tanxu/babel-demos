"use strict";

require("babel-polyfill");

console.log(Array.form('aaaa'));

var sum = function sum(a, b) {
  return a + b;
};

var x = sum(2, 2);

console.log(x);