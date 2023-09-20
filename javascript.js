let grideLines=0;
let hoverMetod="onecolor";
let defultColor="#d89274";
const color=document.querySelector(".color");
const range=document.getElementById("range1");
const board=document.querySelector(".board");
const titleSize=document.querySelector("#titleSize");
const eraser=document.querySelector(".erase");
const reset=document.querySelector(".reset");
const rainbow=document.querySelector("rainbow");
const gray=document.querySelector(".gray");
const gridLine=document.querySelector(".grid");
const size1=document.querySelector("#size1");
const buttons=document.querySelectorAll(".button");

function getColor(){
    console.log(this);
}

function setGrides(){
    const size=this.value||16;
    color.addEventListener("onchange",getColor);
    titleSize.textContent=`${size} X ${size}`;
    size1.textContent= `${size} X ${size}`;
    

    board.style=`grid-template-columns: repeat(${size}, 1fr);grid-template-rows: repeat(${size}, 1fr)`;
    for(let i=1;i<=size;i++){
        for(let j=1;j<=size;j++){
           const square= document.createElement("div");
           square.style=`hieght:auto;width:auto`;
           board.append(square); 
           if(grideLines==1){
            square.style=`border:1px solid gray`;
            
           }
           else if(hoverMetod==="onecolor"){
            square.addEventListener("mouseover",()=> {
            square.style=`background-color:${defultColor};`;});
        
           }
        }
    }
  

}
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        button.classList.toggle("activ");
        console.log(button);
        if(button.value==="Rainbow"){
            hoverMetod="RainbowColor";
            console.log("Rainbow");

        }
        else if(button.value==="Gray"){
            hoverMetod==="Gray";
            console.log("Gray");

        }
        else if(button.value==="GridLines"){
        
            console.log("GridLine");

        }
        else if(button.value==="Erase"){
            hoverMetod="White";
            defultColor="white";
            console.log("Erase");

        }
    })
    
});
range.addEventListener("change",setGrides);
//range.addEventListener("mouseover",setGrides);

setGrides();