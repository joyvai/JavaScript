var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample); // "Second string"
