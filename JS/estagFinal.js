function estagfinal() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('./IMAGENS/estagfinal.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("Não pense que é capaz, saiba que é.\nClique em ok para avançar.");
        Estagiariofase5()
    }, 300)
}
function Estagiariofase5() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
            
            setTimeout(function () {alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 1) {
            alert ("VOCÊ DESCOBRIU A MATRIX!");
            alert ("NADA É REAL, TUDO É APENAS UMA SIMULAÇAO!");
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('./IMAGENS/giphy.webp')"; 
            
        }

    }, 300)
}
