function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}
function increment(a){
    return a + 1
}
function decrement(a, b){
    return a -1
}
function makeInt(n){
    return parseInt(n,10)
}
console.log(makeInt('0x2328'));
console.log(makeInt((1).toString()));
console.log(isNaN(makeInt('sldkjflksjf')));

function preserveDecimal(n) {
    return parseFloat(n)
}
console.log(preserveDecimal('2.222'));
console.log(isNaN(preserveDecimal('sldkjflksjf')));