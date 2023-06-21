const obj={name:'aman',age:20,name:"jui"};
console.log(obj);
let x=Object.entries(obj);
console.log(x); //
console.log(x[0])
const person= new Map([
       ["name",'aman'],
       ["girlfriend",'jui'],
       ["sister",'sanno']
])
console.log(person.get('name'));
console.log(person.size);
console.log(person.delete('name'))
console.log(person.get('name'))
const obj1 = { name: 'aman', age: 20 };

for (const [key, value] of Object.entries(obj1)) {
  if (value === 'aman') {
    console.log(`${key}`);
    break;
  }
}

