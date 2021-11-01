const palavras = ["BANANA", "CAJU", "MORANGO", "KIWI", "TAMARINDO"];
var quantidadeErros = 0;
var acertos = 0;
palavraSecreta = palavras[Math.floor(Math.random()*5)];
var tentativas = "";
/* Tentativas não estava vazio, e recebendo uma palavra aletória
    além de estar printando, no adiciona tentativa, a palavraSecreta, 
    ao inves de apenas os erros das letras. 
*/  


var c = document.getElementById("forca");
var ctx = c.getContext("2d");



window.onkeypress = teclaPressionada;
function teclaPressionada(){
    if(!tentativas.includes((event.key).toUpperCase()) && palavraSecreta.includes((event.key).toUpperCase())){
        adicionaTentativa();
        for(var i = 0; i < palavraSecreta.length; i++){
            if(palavraSecreta[i] == (event.key).toUpperCase()){
                ctx.font="35px Arial";
                ctx.fillText((event.key).toUpperCase(), 20 + (35 * i), 200);
                acertos++;
            }
        }
    }else{
        adicionaTentativa();
        quantidadeErros++;
        desenhaBoneco(quantidadeErros);
    }
    verificaFimJogo();
}

function adicionaTentativa(){
    if(!tentativas.includes(event.key)){
        tentativas = tentativas + event.key; /* Tentativas não estava vazia acabou recebendo a palavra secreta e os erros junto */
        ctx.font = "20px Arial";
        ctx.fillText("Tentativas: " + tentativas.toUpperCase(), 20, 280);
    }
}

function verificaFimJogo(){
    if(quantidadeErros >= 6){
        ctx.font = "20px Arial";
        ctx.fillText("Gamer Over! A palavra era:" + palavraSecreta, 200, 100);
        window.onkeypress = null;
        return;
    }
    if(acertos == palavraSecreta.length){
        ctx.font = "20 px Arial";
        ctx.fillText("Você ganhou!", 200, 100);
        window.onkeypress = null;
        return;
    }
}
/*Primeiro erro que achei estava dentro da função desenhaPoste
    Os traços não estava aparecendo
*/ 

desenhaPoste();
desenhaBarraSuperior();
desenhaApoio();
desenhaTracos();

function desenhaPoste(){
    ctx.moveTo(10, 10);
    ctx.lineTo(10, 100);
    ctx.stroke();
}

function desenhaBarraSuperior(){
    ctx.moveTo(10, 10);
    ctx.lineTo(60, 10);
    ctx.stroke();
}

function desenhaApoio(){
    ctx.moveTo(60, 10);
    ctx.lineTo(60, 30);
    ctx.stroke();
}

function desenhaTracos(){
    for(var i = 0; i < palavraSecreta.length; i++){
        ctx.moveTo(20 +(35*i), 200);
        ctx.lineTo(50 +(35*i), 200);
        ctx.stroke();
    }
}

function desenhaBoneco(quantidadeErros){
    switch(quantidadeErros){
        case 1:
            desenhaCabeca();
            break;
        case 2:
            desenhaTronco();
            break;
        case 3:
            desenhaBracoEsquerdo();
            break;
        case 4:
            desenhaBracoDireito();
            break;
        case 5:
            desenhaPernaEsquerda();
            break;
        case 6:
            desenhaPernaDireita();
            break;
    }
}
/*Segundo erro que achei estava dentro da função desenhaCabeca
    o mesmo erro que o anterior
    Os traços não estava aparecendo
*/ 

function desenhaCabeca(){
    ctx.beginPath();
    ctx.arc(60, 40, 10, 0, 2*Math.PI);
    ctx.stroke();

}


function desenhaTronco(){
    ctx.moveTo(60, 50);
    ctx.lineTo(60, 80);
    ctx.stroke();
}

function desenhaBracoEsquerdo(){
    ctx.moveTo(60, 60);
    ctx.lineTo(50, 70);
    ctx.stroke();
}

function desenhaBracoDireito(){
    ctx.moveTo(60, 60);
    ctx.lineTo(70, 70);
    ctx.stroke();
}

function desenhaPernaEsquerda(){
    ctx.moveTo(60, 80);
    ctx.lineTo(50, 90);
    ctx.stroke();
}

function desenhaPernaDireita(){
    ctx.moveTo(60, 80);
    ctx.lineTo(70, 90);
    ctx.stroke();
}