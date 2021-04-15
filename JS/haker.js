function hacker() {
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('/Users/Karoline/Desktop/RPG/IMAGENS/perg1.jfif')";
    
    setTimeout(function () {
        escolha1 = alert("Siga o coelho branco\nClique em Ok para avançar.");
        hackerfase1()
    }, 300)
}
function hackerfase1() {   

    setTimeout(function () {
        escolha1 = prompt("Escolha sua resposta com cuidado...");
        if (escolha1 == 2) {
           
            setTimeout(function () {alert ("Você morreu!");
            location.reload();}, 300)
        }
        else if (escolha1 == 1) {
            hackerfase2()
        }

    }, 300)
}