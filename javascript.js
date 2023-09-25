const defultSize=16;
const defultMode="oneColor";
const defultColor="#d89274";
let currentSize=defultSize;
let currentMode=defultMode;
let currentColor=defultColor;
const color=document.querySelector(".color");
const range=document.getElementById("range1");
const board=document.querySelector(".board");
const eraser=document.querySelector(".erase");
const reset=document.querySelector(".reset");
const rainbow=document.querySelector(".rainbow");
const gray=document.querySelector(".gray");
const oneColorBtn=document.querySelector(".one_color")
const gridLine=document.querySelector(".grid");
const rangeTitle=document.querySelector("#size1");



let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setCurrentSize(newSize){
    currentSize=newSize;
   
}

function setCurrentColor(newColor) {
    currentColor = newColor
  }

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
  }

function reloadBoard(){
  clearBoard();
  setGrids(defultSize);
    
}
function clearBoard(){
    board.innerHTML="";
}
function changeSize(newSize){
    setCurrentSize(newSize);
    updateSizeValue(newSize);
    reloadBoard();

}
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
        if (currentMode === 'Rainbow') {
          const randomR = Math.floor(Math.random() * 256)
          const randomG = Math.floor(Math.random() * 256)
          const randomB = Math.floor(Math.random() * 256)
          e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        } else if (currentMode === "oneColor") {
            console.log(currentMode);
          e.target.style.backgroundColor = currentColor;
        } else if (currentMode === 'eraser') {
          e.target.style.backgroundColor = '#fefefe'
    }
}
function updateSizeValue(newSize) {
    rangeTitle.textContent= `${newSize} X ${newSize}`;
  }

  function activateButton(newMode) {
    if (currentMode === 'Rainbow') {
      rainbow.classList.remove('activ')
    } else if (currentMode === 'oneColor') {
      oneColorBtn.classList.remove('activ')
    } else if (currentMode === 'eraser') {
      eraser.classList.remove('activ')
    }
  
    if (newMode === 'Rainbow') {
      rainbow.classList.add('activ')
    } else if (newMode === 'oneColor') {
      oneColorBtn.classList.add('activ')
    } else if (newMode === 'eraser') {
      eraser.classList.add('activ')
    }
  }
  
range.addEventListener("change",e =>changeSize(e.target.value));
//range.addEventListener("mouseover",e =>changeSize(e.target.value));
color.oninput = (e) => setCurrentColor(e.target.value)
oneColorBtn.onclick = () => setCurrentMode("oneColor")
rainbow.onclick = () => setCurrentMode('Rainbow')
eraser.onclick = () => setCurrentMode('eraser')
reset.onclick = () => {
  reset.classList.add("activ");
  setInterval(() => {
    reset.classList.remove("activ");
  }, 100);
  
  reloadBoard();
} 
//rainbow.addEventListener("click",setCurrentMode("RainbowColor"));



function setGrids(size){
    
    board.style=`grid-template-columns: repeat(${size}, 1fr);grid-template-rows: repeat(${size}, 1fr)`;
    for(let i=1;i<=size;i++){
        for(let j=1;j<=size;j++){
           const square= document.createElement("div");
           square.classList.add("square");
           square.addEventListener("mouseover",changeColor);
           square.addEventListener('mousedown', changeColor)
           board.append(square); 
        }
    }
}


window.onload = () => {
    setGrids(defultSize);
    activateButton(defultMode);
  }
