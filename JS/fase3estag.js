function estagFas3() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('./IMAGENS/perg3.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("Vamos para zoo ver as girafinhas\nClique em ok para avançar.");
        Estagiariofase3()
    }, 300)
}
function Estagiariofase3() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
            
            setTimeout(function () {alert ("Você morreu!\nCaiu nessa em...");
            location.reload();}, 300)
        }
        else if (escolha1 == 1) {
            estagFas4()
        }

    }, 300)
}
