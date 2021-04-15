function Estagiario() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('/Users/Karoline/Desktop/RPG/IMAGENS/perg1est.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("Boa sorte coscuvilheiro.\nClique em ok para avançar.");
        Estagiariofase1()
    }, 300)
}
function Estagiariofase1() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 1) {
            
            setTimeout(function () {alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 2) {
            estagFas2()
        }

    }, 300)
}