const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.strictEqual(isAbove(2, 1), true);
assert.strictEqual(isAbove(1, 2), false);

