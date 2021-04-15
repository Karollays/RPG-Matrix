function fase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('/Users/Karoline/Desktop/RPG/IMAGENS/adolfase2.jfif')";

    setTimeout(function () {
        escolha1 = alert("Essas mensagens são de um tal de -Morfeu\nClique em ok para avançar.");
        adolescentefase3()
    }, 300)
}
function adolescentefase3() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 1) {
            
            setTimeout(function () {alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 2) {
            fasefinal()
            
        }

    }, 300)
}