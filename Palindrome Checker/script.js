const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


btn.addEventListener("click", () => {

    var worD =   document.querySelector(".input-text").value;
    var word = worD.toString().trim().toUpperCase().split("");
    console.log(word);
     var i = 0, j = word.length-1 ;
     var output = true;
     while(i< j){

        if(word[i] != word[j]){
           output = false;
        }
        i++;
        j--;
     }

    if(output){
         
        result.innerHTML = `${worD.toUpperCase()} is a palindrome!`
    
    }
    else{
         
        result.innerHTML = `${worD.toUpperCase()} is not a palindrome!`;
         
    }

})