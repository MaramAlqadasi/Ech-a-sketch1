const range=document.getElementById("range1");
const board=document.querySelector(".board");
const titleSize=document.querySelector("#titleSize");
const eraser=document.querySelector(".erase");
const reset=document.querySelector(".reset");
const rainbow=document.querySelector("rainbow");
const gray=document.querySelector(".gray");
const gridLine=document.querySelector(".grid");
const size1=document.querySelector("#size1")

function changeSize(){
    const size=this.value||16;
    titleSize.textContent=`${size} X ${size}`;
    size1.textContent= `${size} X ${size}`;
    board.style=`grid-template-columns: repeat(${size}, 1fr);grid-template-rows: repeat(${size}, 1fr)`;
    for(let i=1;i<=size;i++){
           const square= document.createElement("div");
           board.append(square); 
    }

}

function showGridLine(){
    // const squares=Array(board.querySelectorAll("div"));
    // for(let i=0 ;i<=squares.length;i++){
    //     for(let j=0;j<=squares.length;j++){
            
    //             squares[i][j].style="border:1px solid gray;";
                
          
    //     }
    // }
  
}

gridLine.addEventListener("click",showGridLine);
range.addEventListener("change",changeSize);
range.addEventListener("mouseover",changeSize(range.value));
