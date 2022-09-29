// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
   const cOne = [...cats]
   cOne.push(name)
   return cOne
}
function prependCat(name) {
    const cOne = [...cats]
    cOne.unshift(name)
    return cOne
 }
 function removeLastCat(name) {
    const cOne = [...cats]
    cOne.pop(name)
    return cOne
 }
 function removeFirstCat(name) {
    const cOne = [...cats]
    cOne.shift(name)
    return cOne
 }