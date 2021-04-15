function estagFas4() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('/Users/Karoline/Desktop/RPG/IMAGENS/perg3estag.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("Eu só posso lhe mostrar a porta. Mas você tem que atravessar.\nClique em ok para avançar.");
        Estagiariofase4()
    }, 300)
}
function Estagiariofase4() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
            
            setTimeout(function () {alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 1) {
            estagfinal()
        }

    }, 300)
}