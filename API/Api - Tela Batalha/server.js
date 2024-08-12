const deck = JSON.parse(localStorage.getItem('Deck'));
const deck_imgs = JSON.parse(localStorage.getItem('Deck_imgs'));
const arena = localStorage.getItem('Arena');

const body = document.querySelector('body');

setTimeout(() => {
    body.style.visibility = 'visible';
}, 700);

const pok_img_direito = document.getElementById('pok_img_direito');
const pok_text_direito = document.getElementById('pok_text_direito');

const pok_img_esquerdo = document.getElementById('pok_img_esquerdo');
const pok_text_esquerdo = document.getElementById('pok_text_esquerdo');

let url = 'https://pokeapi.co/api/v2/pokemon/';

vida_pok_inimigo = 0;

if (arena === 'Arena 1') {
    body.style.backgroundColor = '#5a78b5';

    pokInimigo(url + 'xerneas');

    vida_pok_inimigo = 140;
}

else if (arena === 'Arena 2') {
    body.style.backgroundColor = '#e9524e';

    pokInimigo(url + 'blaziken');

    vida_pok_inimigo = 160;
}

else if (arena === 'Arena 3') {
    body.style.backgroundColor = '#3a3131';

    pokInimigo(url + 'lucario');

    vida_pok_inimigo = 200;
}

async function pokInimigo(url) {
    const response = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

        .then(response => response.json())
        .then(pok => {

            pok_img_direito.setAttribute('src', pok.sprites.front_default);

            pok_text_direito.textContent = pok.name;
        })

        .catch((err) => {
            console.log(err);
        })
}

pokInimigo(url);

async function pokUsuario(url) {
    url = url + localStorage.getItem('1_pok');

    const response = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

        .then(response => response.json())
        .then(pok => {

            pok_img_esquerdo.setAttribute('src', pok.sprites.front_default);

            pok_text_esquerdo.textContent = pok.name;
        })

        .catch((err) => {
            console.log(err);
        })
}

pokUsuario(url);

async function consultandoPP_comUrl(url_consulta_pp) {
    fetch(url_consulta_pp, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(consultandoPP => {
            pp_moves.push(consultandoPP.pp);
        })
        .catch((err) => {
            console.log(err);
        })
}

const pp_1 = document.getElementById('pp_1');
const pp_2 = document.getElementById('pp_2');
const pp_3 = document.getElementById('pp_3');

const texto_1 = document.getElementById('texto_1');
const texto_2 = document.getElementById('texto_2');
const texto_3 = document.getElementById('texto_3');

async function consultandoPP(url) {
    const response = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

        .then(response => response.json())
        .then(pokemon => {
            nome_moves = [];
            pp_moves = [];
            for (let i = 0; i < 3; i++) {
                url_pp = pokemon.moves[i].move.url;
                nome = pokemon.moves[i].move.name;

                nome_moves.push(nome);
                consultandoPP_comUrl(url_pp);

            }

            setTimeout(() => {
                habilidades = [];

                for (let j = 0; j <= 2; j++) {
                    habilidades.push(Array(nome_moves[j], pp_moves[j]));
                }

                setTimeout(() => {
                    pp_1.textContent = habilidades[0][1];
                    pp_2.textContent = habilidades[1][1];
                    pp_3.textContent = habilidades[2][1];

                    texto_1.textContent = habilidades[0][0];
                    texto_2.textContent = habilidades[1][0];
                    texto_3.textContent = habilidades[2][0];
                }, 100);
            }, 1200)
        })

        .catch((err) => {
            console.log(err);
        })
}

consultandoPP(url + localStorage.getItem('1_pok'));

const vida_pok_direito = document.getElementById('vida_pok_direito');
const vida_pok_esquerdo = document.getElementById('vida_pok_esquerdo');

const ataque_1 = document.getElementById('ataque_1');
const ataque_2 = document.getElementById('ataque_2');
const ataque_3 = document.getElementById('ataque_3');

let width_pok_direito = 0;
if (localStorage.getItem('vida_pok_inimigo') === null) {
    width_pok_direito = 100;

} else {
    width_pok_direito = localStorage.getItem('vida_pok_inimigo');
}

let width_pok_esquerdo = 100;

vida_pok_direito.style.width = width_pok_direito + '%';

vez = 0;
async function batalha() {

    if (width_pok_direito < 0) {
        if (arena === 'Arena 1') {
            localStorage.setItem('Arena 1', 'foi');
        }

        if (arena === 'Arena 2') {
            localStorage.setItem('Arena 2', 'foi');
        }

        if (arena === 'Arena 3') {
            localStorage.setItem('Arena 3', 'foi');
        }

        localStorage.setItem('resultado_batalha', 'Ganhou')
    
        window.location.href = 'Escolhendo pok/index.html';
        
    }

    if (width_pok_esquerdo < 0) {
        localStorage.setItem('pok_morto', pok_text_esquerdo.textContent);

        localStorage.setItem('vida_pok_inimigo', width_pok_direito);

        localStorage.setItem('aviso_pok_morto', 'morreu')

        window.location.href = 'Escolhendo pok/index.html';
    }

    else {
        if (vez === 0) {
            ataque_1.addEventListener('click', function () {
                let calc = width_pok_direito -= (pp_2.textContent / 4).toFixed(2);

                vida_pok_direito.style.width = calc + '%';

                vez = 1;

                batalha();
            })

            ataque_2.addEventListener('click', function () {
                let calc = width_pok_direito -= (pp_2.textContent / 4).toFixed(2);

                vida_pok_direito.style.width = calc + '%';

                vez = 1;

                batalha();
            })

            ataque_3.addEventListener('click', function () {
                let calc = width_pok_direito -= (pp_2.textContent / 4).toFixed(2);

                vida_pok_direito.style.width = calc + '%';

                vez = 1;

                batalha();
            })
        }

        else {
            let dano_inimigo_1 = 35;
            let dano_inimigo_2 = 15;

            setTimeout(() => {
                const num = Math.trunc(Math.random() * 2);

                console.log(num)

                if (num === 0) {
                    let calc = width_pok_esquerdo -= dano_inimigo_1;

                    vida_pok_esquerdo.style.width = calc + '%';

                    vez = 0;

                    batalha();
                }

                else if (num === 1) {
                    let calc = width_pok_esquerdo -= dano_inimigo_2;

                    vida_pok_esquerdo.style.width = calc + '%';

                    vez = 0;

                    batalha();
                }

            }, 500);
        }
    }
}


batalha();