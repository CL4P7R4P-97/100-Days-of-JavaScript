var random_number = document.querySelector(".random_number");
var generate = document.querySelector(".generate");



generate.addEventListener("click", ()=>{

    let num = Math.floor(Math.random() * 100  +1);
    random_number.innerHTML = num;
})