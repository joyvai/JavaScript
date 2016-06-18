var suitcase = {
shirt: "Hawaiian"
};

if(!suitcase.hasOwnProperty("shorts"))
{
suitcase.shorts = "Greek";
console.log(suitcase.shorts);
}
else{
console.log(suitcase.shorts);
}
