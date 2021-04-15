function estagFas2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('./IMAGENS/perg2.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("Que errado bisbilhoteiro!\nClique em ok para avançar.");
        Estagiariofase2()
    }, 300)
}
function Estagiariofase2() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
            
            setTimeout(function () {alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 1) {
            estagFas3()
        }

    }, 300)
}
