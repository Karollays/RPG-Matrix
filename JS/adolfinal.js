function fasefinal() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('/Users/Karoline/Desktop/RPG/IMAGENS/adolfase3.jfif')";

    setTimeout(function () {
        escolha1 = alert("Há uma diferença entre conhecer o caminho e percorrer o caminho.\nClique em ok para avançar.");
        adolescentefase4()
    }, 300)
}
function adolescentefase4() {
    
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
            
            setTimeout(function () {alert ("Você morreu! Essa era muito obvia poxa.");
            location.reload();}, 300)
        }
        else if (escolha1 == 1) {
            alert ("VOCÊ DESCOBRIU A MATRIX!");
            alert ("NADA É REAL, TUDO É APENAS UMA SIMULAÇAO!");
            elem = document.querySelector('#pagFase');
            elem.style.backgroundImage = "url('/Users/Karoline/Desktop/RPG/IMAGENS/giphy.webp')"; 

        }

    }, 300)
}