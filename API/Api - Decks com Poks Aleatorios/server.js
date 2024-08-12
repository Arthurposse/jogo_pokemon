let url = 'https://pokeapi.co/api/v2/pokemon/';

let deck_1 = [];
let deck_1_img = [];

let deck_2 = [];
let deck_2_img = [];


let deck_3 = [];
let deck_3_img = [];


let deck_4 = [];
let deck_4_img = [];

// Buscando pelos pokemons para armazena-los nas listas

async function getPokemon() {
    const response = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(pokemon => {
            if (pokemon.name !== 'xerneas' && pokemon.name !== 'blaziken' && pokemon.name !== 'lucario' && pokemon.name !== undefined && deck_1.length !== 3 && deck_1_img.length !== 3) {

                if(pokemon.sprites.front_default !== null) {
                    deck_1.push(pokemon.name);
                    deck_1_img.push(pokemon.sprites.front_default);
                }
            }

            if (pokemon.name !== undefined && deck_2.length !== 3 && deck_2_img.length !== 3) {
                if(pokemon.name !== 'xerneas' && pokemon.name !== 'blaziken' && pokemon.name !== 'lucario' && pokemon.name !== deck_1[0] && pokemon.name !== deck_1[1] && pokemon.name !== deck_1[2]) {

                    if(pokemon.sprites.front_default !== null) {
                        deck_2.push(pokemon.name);
                        deck_2_img.push(pokemon.sprites.front_default);
                    }
                }
            }

            if (pokemon.name !== undefined && deck_3.length !== 3 && deck_3_img.length !== 3) {
                if(pokemon.name !== 'xerneas' && pokemon.name !== 'blaziken' && pokemon.name !== 'lucario' && pokemon.name !== deck_1[0] && pokemon.name !== deck_1[1] && pokemon.name !== deck_1[2] && pokemon.name !== deck_2[0] && pokemon.name !== deck_2[1] && pokemon.name !== deck_2[2]) {

                    if(pokemon.sprites.front_default !== null) {
                        deck_3.push(pokemon.name);
                        deck_3_img.push(pokemon.sprites.front_default);
                    }
                }
            }

            if (pokemon.name !== undefined && deck_4.length !== 3 && deck_4_img.length !== 3) {
                if(pokemon.name !== 'xerneas' && pokemon.name !== 'blaziken' && pokemon.name !== 'lucario' && pokemon.name !== deck_1[0] && pokemon.name !== deck_1[1] && pokemon.name !== deck_1[2] && pokemon.name !== deck_2[0] && pokemon.name !== deck_2[1] && pokemon.name !== deck_2[2] && pokemon.name !== deck_3[0] && pokemon.name !== deck_3[1] && pokemon.name !== deck_3[2]) {

                    if(pokemon.sprites.front_default !== null) {
                        deck_4.push(pokemon.name);
                        deck_4_img.push(pokemon.sprites.front_default);
                    }
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

// SELECIONANDO POKEMONS P/ DECKS

let cont = 0;
while (cont !== 20) {
    id_pok = Math.trunc(Math.random() * 1018);

    url = url + id_pok;

    getPokemon();

    url = 'https://pokeapi.co/api/v2/pokemon/';

    cont += 1;
}

let imgs_pok = document.querySelector('.img_pok');
let nomes_pok = document.querySelector('.nome_pok');

let img_pok_d1_1 = document.getElementById('img_pok_d1_1');
let nome_pok_d1_1 = document.getElementById('nome_pok_d1_1');
let img_pok_d1_2 = document.getElementById('img_pok_d1_2');
let nome_pok_d1_2 = document.getElementById('nome_pok_d1_2');
let img_pok_d1_3 = document.getElementById('img_pok_d1_3');
let nome_pok_d1_3 = document.getElementById('nome_pok_d1_3');

let img_pok_d2_1 = document.getElementById('img_pok_d2_1');
let nome_pok_d2_1 = document.getElementById('nome_pok_d2_1');
let img_pok_d2_2 = document.getElementById('img_pok_d2_2');
let nome_pok_d2_2 = document.getElementById('nome_pok_d2_2');
let img_pok_d2_3 = document.getElementById('img_pok_d2_3');
let nome_pok_d2_3 = document.getElementById('nome_pok_d2_3');

let img_pok_d3_1 = document.getElementById('img_pok_d3_1');
let nome_pok_d3_1 = document.getElementById('nome_pok_d3_1');
let img_pok_d3_2 = document.getElementById('img_pok_d3_2');
let nome_pok_d3_2 = document.getElementById('nome_pok_d3_2');
let img_pok_d3_3 = document.getElementById('img_pok_d3_3');
let nome_pok_d3_3 = document.getElementById('nome_pok_d3_3');

let img_pok_d4_1 = document.getElementById('img_pok_d4_1');
let nome_pok_d4_1 = document.getElementById('nome_pok_d4_1');
let img_pok_d4_2 = document.getElementById('img_pok_d4_2');
let nome_pok_d4_2 = document.getElementById('nome_pok_d4_2');
let img_pok_d4_3 = document.getElementById('img_pok_d4_3');
let nome_pok_d4_3 = document.getElementById('nome_pok_d4_3');

setTimeout(() => {
    // console.log("Deck 1: " + deck_1);
    // console.log("Deck 2: " + deck_2);
    // console.log("Deck 3: " + deck_3);
    // console.log("Deck 4: " + deck_4);

    // DECK 1
    nome_pok_d1_1.textContent = deck_1[0];
    img_pok_d1_1.setAttribute('src', deck_1_img[0]);

    nome_pok_d1_2.textContent = deck_1[1];
    img_pok_d1_2.setAttribute('src', deck_1_img[1]);

    nome_pok_d1_3.textContent = deck_1[2];
    img_pok_d1_3.setAttribute('src', deck_1_img[2]);

    // DECK 2
    nome_pok_d2_1.textContent = deck_2[0];
    img_pok_d2_1.setAttribute('src', deck_2_img[0]);

    nome_pok_d2_2.textContent = deck_2[1];
    img_pok_d2_2.setAttribute('src', deck_2_img[1]);

    nome_pok_d2_3.textContent = deck_2[2];
    img_pok_d2_3.setAttribute('src', deck_2_img[2]);

    // DECK 3
    nome_pok_d3_1.textContent = deck_3[0];
    img_pok_d3_1.setAttribute('src', deck_3_img[0]);

    nome_pok_d3_2.textContent = deck_3[1];
    img_pok_d3_2.setAttribute('src', deck_3_img[1]);

    nome_pok_d3_3.textContent = deck_3[2];
    img_pok_d3_3.setAttribute('src', deck_3_img[2]);

    // DECK 4
    nome_pok_d4_1.textContent = deck_4[0];
    img_pok_d4_1.setAttribute('src', deck_4_img[0]);

    nome_pok_d4_2.textContent = deck_4[1];
    img_pok_d4_2.setAttribute('src', deck_4_img[1]);

    nome_pok_d4_3.textContent = deck_4[2];
    img_pok_d4_3.setAttribute('src', deck_4_img[2]);
}, 1000);

// #--- CHECKS - ESCOLHENDO O DECK ---#

// CHECK DECK 1

const check_d1 = document.getElementById('check_d1');

let deck_1_escolhido = false;

check_d1.addEventListener('click', function(){
    if(deck_1_escolhido === false){
        check_d2.style.opacity = '0';
        check_d3.style.opacity = '0';
        check_d4.style.opacity = '0';

        deck_2_escolhido = false;
        deck_3_escolhido = false;
        deck_4_escolhido = false;

        localStorage.setItem('Deck', JSON.stringify(deck_1));
        localStorage.setItem('Deck_imgs', JSON.stringify(deck_1_img))

        check_d1.style.opacity = '1';

        deck_1_escolhido = true;

    } else {
        localStorage.removeItem('Deck');
        check_d1.style.opacity = '0';

        deck_1_escolhido = false;
    }
})

// CHECK DECK 2

const check_d2 = document.getElementById('check_d2');

let deck_2_escolhido = false;

check_d2.addEventListener('click', function(){
    if(deck_2_escolhido === false){
        check_d1.style.opacity = '0';
        check_d3.style.opacity = '0';
        check_d4.style.opacity = '0';

        deck_1_escolhido = false;
        deck_3_escolhido = false;
        deck_4_escolhido = false;

        localStorage.setItem('Deck', JSON.stringify(deck_2));
        localStorage.setItem('Deck_imgs', JSON.stringify(deck_2_img))

        check_d2.style.opacity = '1';

        deck_2_escolhido = true;

    } else {
        localStorage.removeItem('Deck');
        check_d2.style.opacity = '0';

        deck_2_escolhido = false;
    }
})

// CHECK DECK 3

const check_d3 = document.getElementById('check_d3');

let deck_3_escolhido = false;

check_d3.addEventListener('click', function(){

    if(deck_3_escolhido === false){
        check_d1.style.opacity = '0';
        check_d2.style.opacity = '0';
        check_d4.style.opacity = '0';

        deck_1_escolhido = false;
        deck_2_escolhido = false;
        deck_4_escolhido = false;

        localStorage.setItem('Deck', JSON.stringify(deck_3));
        localStorage.setItem('Deck_imgs', JSON.stringify(deck_3_img))

        check_d3.style.opacity = '1';

        deck_3_escolhido = true;

    } else {
        localStorage.removeItem('Deck');
        check_d3.style.opacity = '0';

        deck_3_escolhido = false;
    }
})

// CHECK DECK 4

const check_d4 = document.getElementById('check_d4');

let deck_4_escolhido = false;

check_d4.addEventListener('click', function(){

    if(deck_4_escolhido === false){
        check_d1.style.opacity = '0';
        check_d2.style.opacity = '0';
        check_d3.style.opacity = '0';

        deck_1_escolhido = false;
        deck_2_escolhido = false;
        deck_3_escolhido = false;

        localStorage.setItem('Deck', JSON.stringify(deck_4));
        localStorage.setItem('Deck_imgs', JSON.stringify(deck_4_img))
        check_d4.style.opacity = '1';

        deck_4_escolhido = true;

    } else {
        localStorage.removeItem('Deck');
        check_d4.style.opacity = '0';

        deck_4_escolhido = false;
    }
})

const botao_recarregar = document.getElementById('botao_recarregar');
const botao_continuar = document.getElementById('botao_continuar');

botao_recarregar.addEventListener('click', function(){
    localStorage.removeItem('Deck');
    localStorage.removeItem('Deck_imgs');
    location.reload();
})

botao_continuar.addEventListener('click', function(){
    if(deck_1_escolhido === true || deck_2_escolhido === true || deck_3_escolhido === true || deck_4_escolhido === true){
        window.location.href = '../Tela caminhos/Caminho Principal/index.html';
    
    } else {
        alert('Escolha um deck antes de continuar!!');
    }  
})