const assert = require('assert')

// escreva sum abaixo

const sum = (...sum) => sum.reduce((sum1,sum2)=>sum1 + sum2,0)

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)