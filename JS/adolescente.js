function adolescente() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('./IMAGENS/perg1ado.jfif')";

    setTimeout(function () {
        escolha1 = alert("Você não sabe essa...\nClique em ok para avançar.");
        adolescentefase1()
    }, 300)
}
function adolescentefase1() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 1) {
            
            setTimeout(function () {alert ("Você morreu!\nHAHA NÃO TINHA RESPOSTA");
            location.reload();}, 300)
        }
        else if (escolha1 == 2) {
            adolescenteFase()
        }

    }, 300)
}
