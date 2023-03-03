const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
// const reset = document.querySelector(".reset");
const button = document.querySelector(".buttons");

// add.addEventListener("click", () =>{

//     count.innerHTML++;
// })

// subtract.addEventListener("click", () =>{

//     count.innerHTML--;
// })


// reset.addEventListener("click", () =>{

//     count.innerHTML = 0;
// })


//Implementing event delegation 

button.addEventListener("click", (e) =>{

    if(e.target.classList.contains("add")){
        count.innerHTML++;
        changeColor();
    }

    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        changeColor();
    }

    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        changeColor();
    }
});

function changeColor(){
    if(count.innerHTML > 0){
        count.style.color = "yellow";
    }
    else if(count.innerHTML < 0){
        count.style.color = "red"
    }
    else{
        count.style.color = " white";
    }
}
 
