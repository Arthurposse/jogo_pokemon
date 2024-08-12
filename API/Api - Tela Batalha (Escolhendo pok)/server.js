const body = document.querySelector('body');
const resultado_batalha = localStorage.getItem('resultado_batalha');

if(localStorage.getItem('soma_poks_mortos') === null && localStorage.getItem('aviso_pok_morto') === 'morreu') {
    localStorage.setItem('soma_poks_mortos', 0);
}
else {
    let soma_poks_mortos = localStorage.getItem('soma_poks_mortos');

    soma_poks_mortos += 1;

    localStorage.setItem('soma_poks_mortos', soma_poks_mortos);

    if(localStorage.getItem('Arena 1') === 'foi' && localStorage.getItem('Arena 2') === 'foi' && localStorage.getItem('Arena 3') === 'foi') {
        window.location.href = '../../Tela Vitoria/index.html';
    }

    else if(resultado_batalha === 'Ganhou') {   
        alert('Parabéns, você ganhou!! Recebeu uma insígnia!!')

        localStorage.removeItem('pok_morto');
        localStorage.removeItem('vida_pok_inimigo');
        localStorage.removeItem('aviso_pok_morto');
        localStorage.removeItem('1_pok_morto');
        localStorage.removeItem('2_pok_morto');
        localStorage.removeItem('3_pok_morto');
        localStorage.removeItem('soma_poks_mortos');
        localStorage.removeItem('resultado_batalha');
        localStorage.removeItem('Arena');

        window.location.href = '../../Tela caminhos/Caminho Principal/index.html';
    }

    else if(soma_poks_mortos.length >= 4) {
        alert('Infelizmente você perdeu, recupere a vida dos seus pokémons no centro pokémon!!');
        
        localStorage.removeItem('pok_morto');
        localStorage.removeItem('vida_pok_inimigo');
        localStorage.removeItem('aviso_pok_morto');
        localStorage.removeItem('1_pok_morto');
        localStorage.removeItem('2_pok_morto');
        localStorage.removeItem('3_pok_morto');
        localStorage.removeItem('soma_poks_mortos');
        localStorage.removeItem('resultado_batalha');
        localStorage.removeItem('Arena');

        localStorage.setItem('tds_poks_mortos', 0);
            
        window.location.href = '../../Tela caminhos/Caminho Principal/index.html';
    }
}

setTimeout(() => {
    body.style.visibility = 'visible';

   if(localStorage.getItem('aviso_pok_morto') === 'morreu') {
        alert('Seu pokemon morreu, escolha outro!!')
    }

}, 600);

const personagem = localStorage.getItem('personagem');
const img_boneco = document.getElementById('img_boneco');

async function verPersonagem() {
    if(personagem === 'Ash') {
        img_boneco.setAttribute('src', '../../Imagens/Bonecos/Imagem Ash.png')
    } 

    else {
        img_boneco.setAttribute('src', '../../Imagens/Bonecos/Imagem Serena.png')
    }
}

verPersonagem();

const arena = localStorage.getItem('Arena');

async function verArena(){
    if(arena === 'Arena 1') {
        body.style.backgroundColor = '#5a78b5';
    }
    
    else if (arena === 'Arena 2') {
        body.style.backgroundColor = '#e9524e';
    }
    
    else if (arena === 'Arena 3') {
        body.style.backgroundColor = '#3a3131';
    }
}

const deck = JSON.parse(localStorage.getItem('Deck'));
const deck_imgs = JSON.parse(localStorage.getItem('Deck_imgs'));
const pok_morto = localStorage.getItem('pok_morto');

const img_1 = document.getElementById('img_1');
const texto_1 = document.getElementById('texto_1');

const img_2 = document.getElementById('img_2');
const texto_2 = document.getElementById('texto_2');

const img_3 = document.getElementById('img_3');
const texto_3 = document.getElementById('texto_3');

async function verificandoPoksMortos() {
    if(localStorage.getItem('1_pok_morto') === null) {
        localStorage.setItem('1_pok_morto', pok_morto);
    }

    else if(localStorage.getItem('2_pok_morto') === null) {
        localStorage.setItem('2_pok_morto', pok_morto);
    }

    else if(localStorage.getItem('3_pok_morto') === null) {
        localStorage.setItem('3_pok_morto', pok_morto);
    }
}

verificandoPoksMortos();

async function infosPok(){
    if(localStorage.getItem('1_pok_morto') !== deck[0] || localStorage.getItem('2_pok_morto') !== deck[0] || localStorage.getItem('3_pok_morto') !== deck[0]) {
        img_1.setAttribute('src', deck_imgs[0]);
        texto_1.textContent = deck[0];
    }

    if(localStorage.getItem('1_pok_morto') !== deck[1] || localStorage.getItem('2_pok_morto') !== deck[1] || localStorage.getItem('3_pok_morto') !== deck[1]) {
        img_2.setAttribute('src', deck_imgs[1]);
        texto_2.textContent = deck[1];
    }

    if(localStorage.getItem('1_pok_morto') !== deck[2] || localStorage.getItem('2_pok_morto') !== deck[2] || localStorage.getItem('3_pok_morto') !== deck[2]) {
        img_3.setAttribute('src', deck_imgs[2]);
        texto_3.textContent = deck[2];
    }

    quad_1.addEventListener('click', function(){
        if(localStorage.getItem('1_pok_morto') === deck[0] || localStorage.getItem('2_pok_morto') === deck[0] || localStorage.getItem('3_pok_morto') === deck[0]) {
            alert('Infelizmente este pokemon morreu.')

        } else {
            localStorage.setItem('1_pok', deck[0]);
        
            window.location.href = '../index.html';
        }
    })
    
    quad_2.addEventListener('click', function(){
        if(localStorage.getItem('1_pok_morto') === deck[1] || localStorage.getItem('2_pok_morto') === deck[1] || localStorage.getItem('3_pok_morto') === deck[1]) {
            alert('Infelizmente este pokemon morreu.')

        } else {
            localStorage.setItem('1_pok', deck[1]);
        
            window.location.href = '../index.html';
        }
    })
    
    quad_3.addEventListener('click', function(){
        if(localStorage.getItem('1_pok_morto') === deck[2] || localStorage.getItem('2_pok_morto') === deck[2] || localStorage.getItem('3_pok_morto') === deck[2]) {
            alert('Infelizmente este pokemon morreu.')

        } else {
            localStorage.setItem('1_pok', deck[2]);
        
            window.location.href = '../index.html';
        }
    })
}

verArena();

const quad_1 = document.getElementById('quad_1');
const quad_2 = document.getElementById('quad_2');
const quad_3 = document.getElementById('quad_3');

infosPok();