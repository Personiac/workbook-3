let globalVariable = 1;

function myFirstFunction() {
  let functionVariable = `Function Variable`;
  console.log(`Global ${globalVariable}`);
  console.log(functionVariable);

  if (true) {
    var blockVariable = `Block Var`;
    console.log(blockVariable);
}
console.log(blockVariable);
}
function mySecondFunction() {
  globalVariable = 2;
  let secondFunctionVariable = `Second Function Variable`;
  console.log(`Global ${globalVariable}`);
  console.log(secondFunctionVariable);
}

myFirstFunction();
mySecondFunction();
globalVariable = 5;
console.log(globalVariable);
