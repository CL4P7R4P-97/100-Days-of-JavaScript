var colorName = document.querySelector(".randomHexColor");
var generate = document.querySelector(".generate");
 

const generateColor=  ()=>{

    let color = Math.random().toString(16).substring(2,8);
    colorName.innerHTML = "#"+ color;
    document.body.style.backgroundColor = "#" + color;
    
}


generate.addEventListener("click", generateColor);