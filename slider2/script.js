let slides=document.querySelectorAll(".slide");
//console.log(slides);
let counter=0;
slides.forEach((slide,index)=>{
       slide.style.bottom=`${index*100}%`;
});
 function displayimage(){
       slides.forEach((slide)=>{
          slide.style.transform=`translateY(${counter*100}%)`    
       })
 }
 const prev=()=>{
       if(counter>=1){
          counter--;
     displayimage();     
       }
       else{
              counter=slides.length-1;
              displayimage()
       }
    
 }
 const next=()=>{
       if(counter<slides.length-1){
         counter++
     displayimage();     
       }
       else{
        counter=0;
       displayimage();
       }
       
 }