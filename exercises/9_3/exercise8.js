const assert = require('assert')

// Escreva uma função greet que, 
// dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params.

// escreva greet abaixo

const greet = (name,salutation = 'Hi') => `${salutation} ${name}` 
console.log(greet('John','Good morning')) //teste
assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")
    
