var titulo = document.getElementById("titulo")
var btn = document.querySelector("#btn")
/*titulo.innerText = "Rafael"/* serve para alterar objeto ou tag*/

function disparaAlerta(){
var body = document.querySelector("body")
body.classList.add("dark-mode")
}

btn.addEventListener("click",disparaAlerta)