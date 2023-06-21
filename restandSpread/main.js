const name =['aman','jui','sanno'];
function getName(name){
 console.log(...name);
}
getName(name);
const numbers = [2, 3, 5];

function addNumber(a, b, c, ...otherNumbers) {
  console.log(otherNumbers);

  return a + b + c + otherNumbers.reduce((sum, num) => {
       console.log(sum);
       return 
       sum + num});
}

console.log(addNumber(...numbers, 4, 5, 6, 7, 8));

const obj={name:'aman',age:20};
console.log({...obj,name:'jui'})