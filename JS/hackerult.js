function hackerult() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('./IMAGENS/ulthack.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("Vivemos em uma realidade programada.\nClique em ok para avançar.");
        hackerfase4()
    }, 300)
}
function hackerfase4() {
   
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
           
            setTimeout(function () {
                alert ("Você morreu!");
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
