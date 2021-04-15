function adolescenteFase() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('./IMAGENS/adolfase1.jfif')";

    setTimeout(function () {
        escolha1 = alert("Essa útima nao tinha reposta mesmo\nClique em ok para avançar.");
        adolescentefase2()
    }, 300)
}
function adolescentefase2() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
            
            setTimeout(function () {alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 1) {
            fase2()
        }

    }, 300)
}
