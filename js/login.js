let inputEmail = document.getElementById("email");
let inputSenha = document.getElementById("password");
let linkPaginaSecundaria = document.getElementById("linkPaginaSecundaria");
let inputsClasse = document.querySelectorAll(".input");


divButton.addEventListener("click", (evt)=>{
    evt.preventDefault();
    var valorInputEmail = inputEmail.value;
    var valorInputSenha = inputSenha.value;

    if(valorInputEmail == "" || valorInputEmail == null || valorInputSenha == "" || valorInputSenha == null){
        for(var i = 0; i < inputsClasse.length; i++){
            
            inputsClasse[i].classList.remove("input");
            inputsClasse[i].classList.add("inputVazio");
        
        }
    }
    else{
        for(var i = 0; i < inputsClasse.length; i++){
            
            inputsClasse[i].classList.remove("input");
            inputsClasse[i].classList.add("inputPreenchido");
        
        }
        setTimeout(function(){
            window.location.href = "paginaSecundaria.html";
        }, 2000)
        
    }
})
