let inpnum= document.getElementById("input");
let resu= document.getElementById("result");
let randm= Math.ceil(100*(Math.random()));

function oncheck(){
  let rvalue= parseInt(inpnum.value);
  if(rvalue>randm){
    resu.textContent="Value is too high , try small number";
    resu.style.backgroundColor="blue";
    setTimeout(()=>{
      resu.textContent="";
      resu.style.backgroundColor="";
    }, 3000)
  }
  else if(rvalue==randm){
    resu.textContent="Congratulation you guessed it right";
    resu.style.backgroundColor="green";
    setTimeout(()=>{
      resu.textContent="";
    resu.style.backgroundColor="";
    }, 3000)
    
    randm=Math.ceil(100*(Math.random()));
  }
  else if(rvalue<randm){
    resu.textContent="Value is too less , try bigger number";
      resu.style.backgroundColor="yellow";
    setTimeout(()=>{
      resu.textContent="";
      resu.style.backgroundColor="";
    }, 3000)
   
  }
  else{
    resu.textContent="please provide valid number";
    resu.style.backgroundColor="red";
    setInterval(()=>{
      resu.textContent="";
    resu.style.backgroundColor="";
    }, 3000)
    
  }

}