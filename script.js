const curtir = document.getElementById("curtir") //pega o botão curtir pelo id
curtir.addEventListener("click", aumentarCurtidas) //quando clicar chama a função

//função de aumentar curtidas 
function aumentarCurtidas(){
let quantidade = document.querySelector("span")
quantidade.textContent++;

}