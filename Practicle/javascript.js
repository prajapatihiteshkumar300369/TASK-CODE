// 15. Check Largest of 3 Numbers

let number1 = Number(prompt("Enter 1st number:"));
let number2 = Number(prompt("Enter 2nd number:"));
let number3 = Number(prompt("Enter 3nd number:"));


if(number1 > number2 && number1>number3){
  console.log("First  number is big");
}

else if(number2 > number1 && number2 > number3){
  console.log("Second  number is big");
}

else if(number3>number1 && number3> number2){
  console.log("Third  number is big");
}

else{
  console.log("Number is big");
}