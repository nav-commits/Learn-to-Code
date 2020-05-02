const buttonTwo = document.querySelector(".but-two");
let getAll = document.querySelectorAll("input");
let filler = document.querySelector(".fillfirst");
let fillerTwo = document.querySelector(".filllast");
let fillerThree = document.querySelector(".fillemail");
let fillerFour = document.querySelector(".fillpass");

function excute(event){

let inputOne = getAll[0].value;
let inputTwo = getAll[1].value;
let inputThree = getAll[2].value;
let inputFour = getAll[3].value;



    if (inputOne.trim() === '' || inputTwo.trim() === '' || inputThree.trim() === '' || inputFour.trim() === '' ){
   for(usrinput of getAll) {

    usrinput.className = "empty-input";
    filler.style.display = 'block';
    fillerTwo.style.display = 'block';
    fillerThree.style.display = 'block';
    fillerFour.style.display = 'block';
   }
    
}
    event.prevent.Default();
    
}

buttonTwo.addEventListener("click",excute)


