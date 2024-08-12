const logo = document.querySelector('.logo');
const div = document.querySelector('div');
let input = document.querySelector('input');
const lupa = document.getElementById('lupa');
const gif_load = document.getElementById('gif_load');
const seta = document.getElementById('seta');
const html = document.querySelector('html');

if(localStorage.getItem('centro_pok_api') === 'Passou') {
    setTimeout(() => {
        html.style.opacity = '1';
        html.style.transition = 'opacity 0.5s linear';
    }, 20)

    localStorage.removeItem('centro_pok_api');

} else {
    html.style.opacity = '1';
}

let url = 'https://pokeapi.co/api/v2/pokemon/';

let nome_pok = '';
let url_img_pok = '';
let tipo_pok = '';
let hp_pok = '';
let peso_pok = '';
let verificando = true;

// Consultando dano PP do pokemon

async function consultandoPP (url_consulta_pp) {
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

// Consultando informações do pokemon

async function getPokemon() {
    url = url + input.value;

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then(pokemon => {
            nome_pok = pokemon.name;
            url_img_pok = pokemon.sprites.front_default;
            tipo_pok = pokemon["types"][0]["type"]["name"];
            hp_pok = pokemon.stats[5].base_stat;
            peso_pok = pokemon.weight;
            
            localStorage.setItem('Nome_pok', nome_pok);
            localStorage.setItem('Img_pok', url_img_pok);
            localStorage.setItem('Tipo_pok', tipo_pok);
            localStorage.setItem('Hp_pok', hp_pok);
            localStorage.setItem('Peso_pok', peso_pok);

            nome_moves = [];
            pp_moves = [];
            for (let i = 0; i < 4; i++) {
                url_pp = pokemon.moves[i].move.url;
                nome = pokemon.moves[i].move.name;
                
                nome_moves.push(nome);
                consultandoPP(url_pp);
            }

            setTimeout(() => {
                habilidades = [];

                for(let j = 0; j <= 3; j++){
                    habilidades.push(Array(nome_moves[j], pp_moves[j]));
                }

                localStorage.setItem('Nomes_habilidades_pok', JSON.stringify(habilidades));
                
            }, 1100)

        })
        .catch((err) => {
            verificando = false;
        })
}

// BOTAO ENTER

document.onkeydown = function (event) {
    if (event.which === 13) {
        getPokemon();

        if (input.value.length >= 1) {
            logo.style.visibility = 'collapse';
            div.style.visibility = 'collapse';

            gif_load.setAttribute('src', '../Imagens/Gifs/Load.gif');
            gif_load.style.visibility = 'visible';

            setTimeout(() => {
                if (verificando === true) {
                    if(nome_pok === null || url_img_pok === null || tipo_pok === null || hp_pok === null || peso_pok === null) {
                        alert("ERROR! Tente novamente!");
                    } else {
                        input.value = '';
        
                        window.location.href = '../Tela Infos Pokemon/index.html';
                    }

                } else {
                    logo.style.visibility = 'visible';
                    div.style.visibility = 'visible';

                    gif_load.setAttribute('src', '');
                    gif_load.style.visibility = 'collapse';

                    alert('Não encontrado, digite novamente!');

                    input.value = '';

                    verificando = true;

                    url = 'https://pokeapi.co/api/v2/pokemon/';
                }
            }, 2600)

        } else {
            alert('Digite o pokemon que deseja buscar!')
        }
    }
}

// LUPA

lupa.addEventListener('click', function () {
    getPokemon();

    if (input.value.length >= 1) {
        logo.style.visibility = 'collapse';
        div.style.visibility = 'collapse';

        gif_load.setAttribute('src', '../Imagens/Gifs/Load.gif');
        gif_load.style.visibility = 'visible';

        setTimeout(() => {
            if (verificando === true) {
                if(nome_pok === null || url_img_pok === null || tipo_pok === null || hp_pok === null || peso_pok === null) {
                    alert("ERROR! Tente novamente!");
                } else {
                    input.value = '';
    
                    window.location.href = '../Tela Infos Pokemon/index.html';
                }

            } else {
                logo.style.visibility = 'visible';
                div.style.visibility = 'visible';

                gif_load.setAttribute('src', '');
                gif_load.style.visibility = 'collapse';

                alert('Não encontrado, digite novamente!');

                input.value = '';

                verificando = true;

                url = 'https://pokeapi.co/api/v2/pokemon/';
            }
        }, 2600)

    } else {
        alert('Digite o pokemon que deseja buscar!')
    }
});

// BOTAO SETA

seta.addEventListener('click', function(){

    localStorage.setItem('Api', 'Passou');

    window.location.href = '../Tela caminhos/Caminho Centro Pokemon/Parte Dentro Centro Pokemon/index.html';
})