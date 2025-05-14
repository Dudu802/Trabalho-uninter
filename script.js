let botao = document.querySelector("#botao"); 
let paragrafoMensagem = document.querySelector("#mensagem"); 


botao.addEventListener("click", () => {
    paragrafoMensagem.innerText = "Saudações!";
});