var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example();
console.log(outsideExample); // "First string"
