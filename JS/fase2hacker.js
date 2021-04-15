function hackerfase2() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('/Users/Karoline/Desktop/RPG/IMAGENS/perg2hack.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("O que você faria?\nClique em ok para avançar.");
        hackerfase3()
    }, 300)
}
function hackerfase3() {
   
    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 1) {
           
            setTimeout(function () {
                alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 2) {
            hackerult()
        }
    }, 300)
}