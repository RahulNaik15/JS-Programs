//////////Problem solving examples//////////////

function sumNum() {
    const number1 = prompt("Enter num1=");
    const number2 = prompt("Enter num2=");
    const result = (+number1) + (+number2);
    alert(` Sum =${result}`);
 }



function fullName() {
    const firstName = prompt("Enter first name=");
     const lastName = prompt("Enter last name=");
   const result = (`${firstName} ${lastName}`);
    alert(result);
}


function evenOdd() {
   const number = prompt("Enter the number=");
   if (number % 2 === 0) {
       alert("Even Number");
   }
    else {
        alert("Odd Number")
    }
 }


function stringLength() {
    const string1 = prompt("Enter the string=");
    const r = string1.length
    alert(`Length of string = ${r}`)
 }


function multiplication() {
    const n = prompt("Enter the number=");
    for (let i = 1; i <= 10; i++)
    {
        const result = n * i;
        console.log(result)
    }
 }


 function sum() {
    const sum = 0;
    for (let i = 1; i <= 100; i++){
       sum = sum + i;
       console.log(sum);
   }
 }


function largestNum() {
   const num1 = prompt("Enter num1=");
   const num2 = prompt("Enter num2=");
   const num3 = prompt("Enter num3=");
 if (num1 > num2 && num1> num3) {
       alert(`${num1} is larges`)
   }
  else if (num2 > num1 && num2>num3) {
      alert(`${num2} is largest`)
  }
   else {
      alert(`${num3} is largest`)
   }
 }




function randomNum() {
    const num = Math.random() * 10 + 1;
    const round = Math.floor(num);
    console.log(round);
}
