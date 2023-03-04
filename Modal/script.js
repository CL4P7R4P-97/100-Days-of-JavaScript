var modal = document.querySelector(".modal");
var button = document.querySelector("#btn");
var closeB = document.querySelector(".close");
var modalContent = document.querySelector(".modal-content");


const open = (e) => {

    e.preventDefault();
    modal.style.display = 'block';

}

const close = () => {
//adding class
    modalContent.classList.add('slide-up');
   setTimeout(() => {
    modal.style.display = 'none';
    //removing class once model is closed
    modalContent.classList.remove('slide-up');
   }, 500);
     
}


button.addEventListener("click", open);
modal.addEventListener("click", close);
closeB.addEventListener("click", close);