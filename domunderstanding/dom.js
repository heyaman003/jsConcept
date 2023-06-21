
//const dates= new Date();
const myfunc=(e)=>{
   let dates=new Date(e);
   document.getElementById('date').innerHTML=dates.toLocaleString('sr-IN',{weekday:'long'});
}
// 03,nover,2019
