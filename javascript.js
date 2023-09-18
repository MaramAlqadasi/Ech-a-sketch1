const range=document.getElementById("range1");
const board=document.querySelector(".board");
const titleSize=document.querySelector("#titleSize");

function changeSize(){
    const size=this.value||16;
    titleSize.textContent=`${size} X ${size}`;
    board.style=`grid-template-columns: repeat(${size}, 1fr);grid-template-rows: repeat(${size}, 1fr)`;
    for(let i=1;i<=size;i++){
           const square= document.createElement("div");
           board.append(square); 
    }

}
console.log(range.addEventListener("change",changeSize));

range.addEventListener("change",changeSize);
range.addEventListener("mouseover",changeSize(range.value));
