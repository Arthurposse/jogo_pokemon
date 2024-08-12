const texto = document.getElementById('texto');

// BOTAO CONTINUAR

const botao_continuar = document.getElementById('botao_continuar');

let ordem = 0;
botao_continuar.addEventListener('click', function(){

    if(ordem === 0) {
        texto.textContent = 'Agora, com saudades do agito, resolveu voltar a duelar. O destino? Vilarejo Sereno, que não é tão sereno assim... mas enfim, cheio de arenas Pokémon.';

        ordem = 1;
    }

    else if(ordem === 1) {
        texto.textContent = 'Com sua turma de monstrinhos do lado, encarou os desafios pra ver se ainda tinha o jeito. ';

        ordem = 2;
    }

    else if(ordem === 2) {
        texto.textContent = 'O objetivo? Ganhar insígnias para provar que ainda dominava as batalhas.';

        ordem = 3;
    }

    else if(ordem === 3) {
        window.location.href = '../Tela Selecionar/index.html';
    }
})

// BOTAO PULAR

const botao_pular = document.getElementById('botao_pular');

setTimeout(() => {
    botao_pular.style.visibility = 'visible';
}, 1000);

botao_pular.addEventListener('click', function(){
    window.location.href = '../Tela Selecionar/index.html';
})