const insignia_arena1 = document.getElementById('insignia_arena1');
const insignia_arena2 = document.getElementById('insignia_arena2');
const insignia_arena3 = document.getElementById('insignia_arena3');

if(localStorage.getItem('Arena 1') === 'foi') {
    insignia_arena1.style.opacity = '1';
}

if(localStorage.getItem('Arena 2') === 'foi') {
    insignia_arena2.style.opacity = '1';
}

if(localStorage.getItem('Arena 3') === 'foi') {
    insignia_arena3.style.opacity = '1';
}

// VERIFICAR PERSONAGEM

const Ash_img = document.querySelector('.Ash');
const Serena_img = document.querySelector('.Serena');
let personagem = localStorage.getItem('personagem');

let frente = '';
let costas = '';
let direita = '';
let esquerda = '';

if (personagem === 'Serena') {

    frente = '../../Imagens/Sprites Bonecos/Serena/Frente/Frente Serena.png';
    costas = '../../Imagens/Sprites Bonecos/Serena/Costas/Costas Serena.png';
    direita = '../../Imagens/Sprites Bonecos/Serena/Direita/Direita Serena.png';
    esquerda = '../../Imagens/Sprites Bonecos/Serena/Esquerda/Esquerda Serena.png';

    Serena_img.style.visibility = 'visible';

    boneco_documet = document.querySelector('.Serena');

} else if (personagem === 'Ash') {
    frente = '../../Imagens/Sprites Bonecos/Ash/Frente/Frente Ash.png';
    costas = '../../Imagens/Sprites Bonecos/Ash/Costas/Costas Ash.png';
    direita = '../../Imagens/Sprites Bonecos/Ash/Direita/Direita Ash.png';
    esquerda = '../../Imagens/Sprites Bonecos/Ash/Esquerda/Esquerda Ash.png';

    Ash_img.style.visibility = 'visible';

    boneco_documet = document.querySelector('.Ash');
}

// INVENTARIO

const inventario = document.querySelector('.inventario');
const img_inv_1 = document.getElementById('img_inv_1');
const img_inv_2 = document.getElementById('img_inv_2');
const img_inv_3 = document.getElementById('img_inv_3');

const pok_inv_1 = document.getElementById('pok_inv_1');
const pok_inv_2 = document.getElementById('pok_inv_2');
const pok_inv_3 = document.getElementById('pok_inv_3');

let url = 'https://pokeapi.co/api/v2/pokemon/';

async function pegandoVidaPok(url) {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }) 
        .then(response => response.json())
        .then(pok => {
            vida_poks.push(pok.stats[5].base_stat);
        })
        .catch((err) => {
            console.log(err);
        })
    }

vida_poks = [];
async function buscandoPok() {
    const poks = JSON.parse(localStorage.getItem('Deck'));
    const deck_imgs = JSON.parse(localStorage.getItem('Deck_imgs'));
    
    img_inv_1.setAttribute('src', deck_imgs[0]);
    img_inv_2.setAttribute('src', deck_imgs[1]);
    img_inv_3.setAttribute('src', deck_imgs[2]);
}

// MOVIMENTOS PERSONAGEM

const boneco = boneco_documet;

let limiteCima = 1.6;
let limiteBaixo = 90;
let limiteDireita = 86;
let limiteEsquerda = 10.5;

if (localStorage.getItem('caminho_cen_pok') === 'Passou') {

    boneco.style.left = '48%';
    boneco.style.top = '2.4%';

    posLeft = 48;
    posTop = 2.4;

    localStorage.removeItem('caminho_cen_pok');

} else {
    boneco.setAttribute('src', costas);

    boneco.style.left = '48.5%';
    boneco.style.top = '90%';

    posLeft = 48.5;
    posTop = 90;
}

let esc_aberto = false;
let mochila_aberta = false;
let num_arena = 0;
document.onkeydown = function (event) {

    // MOVIMENTAÇÃO PERSONAGEM 

    if (event.key === 'd' || event.key === 'ArrowRight') {
        boneco.setAttribute('src', direita);

        posLeft += 0.5;
        boneco.style.left = posLeft + "%";

        if (posLeft === limiteDireita) {
            posLeft -= 0.5;
        }

    } else if (event.key === 'a' || event.key === 'ArrowLeft') {
        boneco.setAttribute('src', esquerda);

        posLeft -= 0.5;
        boneco.style.left = posLeft + "%";

        if (posLeft === limiteEsquerda) {
            posLeft += 0.5;
        }

    } else if (event.key === 's' || event.key === 'ArrowDown') {
        boneco.setAttribute('src', frente);

        posTop += 0.8;
        boneco.style.top = posTop + "%";

        if (posTop >= limiteBaixo) {
            posTop -= 0.8;
        }

    } else if (event.key === 'w' || event.key === 'ArrowUp') {
        boneco.setAttribute('src', costas);

        posTop -= 0.8;
        boneco.style.top = posTop + "%";

        if (posTop <= limiteCima) {
            posTop += 0.8;
        }
    }  

    // BOTAO ENTRAR

    const botao_entrar = document.getElementById('botao_entrar');
   
    if(posLeft >= 22 && posLeft <= 23 && posTop >= 50 && posTop <= 51) {
        num_arena = 1;
        
        if(localStorage.getItem('tds_poks_mortos') === '0') {
            alert('Recupere a vida de seus pokemons!!')
        }

        else if(localStorage.getItem('Arena 1') !== 'foi') {
            botao_entrar.style.visibility = 'visible';

        } else {
            alert('Você já derrotou esta arena!')
        }
    }

    else if(posLeft >= 22 && posLeft <= 23 && posTop >= 29.2 && posTop <= 30.9) {
        num_arena = 2;

        if(localStorage.getItem('tds_poks_mortos') === '0') {
            alert('Recupere a vida de seus pokemons!!')
        }

        else if(localStorage.getItem('Arena 2') !== 'foi') {
            botao_entrar.style.visibility = 'visible';

        } else {
            alert('Você já derrotou esta arena!')
        }
    }

    else if(posLeft >= 75 && posLeft <= 76 && posTop >= 9.2 && posTop <= 11.7) {
        num_arena = 3;

        if(localStorage.getItem('tds_poks_mortos') === '0') {
            alert('Recupere a vida de seus pokemons!!')
        }

        else if(localStorage.getItem('Arena 3') !== 'foi') {
            botao_entrar.style.visibility = 'visible';

        } else {
            alert('Você já derrotou esta arena!')
        }
    }

    else {
        num_arena = 0;

        botao_entrar.style.visibility = 'collapse';
    }

    botao_entrar.addEventListener('click', function(){
        if(num_arena === 1){
            localStorage.setItem('Arena', 'Arena 1');
        } 
        
        else if(num_arena === 2) {
            localStorage.setItem('Arena', 'Arena 2');
        }

        else if(num_arena === 3) {
            localStorage.setItem('Arena', 'Arena 3');
        }

        window.location.href = '../../Arenas/Escolhendo Pok/index.html';
    })

    // ESC

    const bloco_esc = document.querySelector('.esc_menu');
    const botao_X = document.getElementById('botao_X');

    if (event.key === 'Escape') {
        if (esc_aberto === false) {
            bloco_esc.style.visibility = 'visible';

            boneco.style.visibility = 'collapse';

            esc_aberto = true;

        } else {

            bloco_esc.style.visibility = 'collapse';

            boneco.style.visibility = 'visible';

            esc_aberto = false;
        }
    }

    botao_X.addEventListener('click', function () {
        bloco_esc.style.visibility = 'collapse';

        boneco.style.visibility = 'visible';

        esc_aberto = false;
    })

    const botao_home = document.getElementById('botao_home');
    const botao_comandos = document.getElementById('botao_comandos');

    botao_home.addEventListener('click', function () {
        window.location.href = '../../Tela Home/index.html';
    });

    botao_comandos.addEventListener('click', function () {
        localStorage.setItem('tela_comandos', 'cam_prin')

        window.location.href = '../../Tela Comandos/index.html';
    })

    // MOCHILA
    
    async function mochila_poks(){
        const mochila = document.getElementById('mochila');
        
        if (event.key === 'b') {
            if (mochila_aberta === false) {
                mochila.setAttribute('src', '../../Imagens/Mochila/Mochila Aberta.png')
                
                await buscandoPok();

                inventario.style.opacity = '0.8';
    
                mochila_aberta = true;
    
            } else {
                mochila.setAttribute('src', '../../Imagens/Mochila/Mochila Fechada.png')
    
                inventario.style.opacity = '0';
    
                mochila_aberta = false;
            }
        }
    }

    mochila_poks();

    // VERIFICANDO POSIÇÕES

    if (posLeft >= 45 && posLeft <= 50 && posTop < 2.4) {
        window.location.href = '../Caminho Centro Pokemon/index.html';
    }

    // COLISÕES

    // #-- Vila --#

    // Parte da esquerda

    if(posLeft === 55 && posTop > 80.8 && posTop <= 90) {
        posLeft -= 0.5;
    }

    if(posLeft >= 55.5 && posLeft <= 56.5 && posTop > 80.4 && posTop < 81.2) {
        posTop -= 0.8;
    }

    if(posLeft === 57 && posTop > 72.5 && posTop < 80.8) {
        posLeft -= 0.5;
    }

    if(posLeft === 57.5 && posTop > 61.2 && posTop < 72.4) {
        posLeft -= 0.5;
    }

    if(posLeft >= 57 && posLeft <= 57.5 && posTop > 72.4 && posTop < 73.2) {
        posTop -= 0.8;
    }

    if(posLeft >= 58 && posLeft <= 59 && posTop > 60.4 && posTop < 61.2) {
        posTop -= 0.8;
    }

    if(posLeft === 59 && posTop > 38.1 && posTop < 61.2) {
        posLeft -= 0.5;
    }

    if(posLeft > 59 && posLeft <= 62 && posTop > 38 && posTop < 38.8) {
        posTop -= 0.8;
    }

    // Parte de cima

    if(posLeft === 62 && posTop > 32.4 && posTop < 38) {
        posLeft -= 0.5;
    }
    
    if(posLeft > 62 && posLeft <= 69 && posTop > 31.6 && posTop < 32.4) {
        posTop -= 0.8;
    }

    if(posLeft === 69 && posTop > 30 && posTop < 30.9) {
        posLeft -= 0.5;
    }

    if(posLeft >= 69.5 && posLeft <= 85.5 && posTop >= 29.2 && posTop <= 30) {
        posTop -= 0.8;
    }

    // #-- Arenas --#

    // Arena 1 - Canto inferior esquerdo

    // Arena 1 - Direita

    if(posLeft === 34.5 && posTop >= 86.8 && posTop <= 90) {
        posLeft += 0.5;
    }

    if(posLeft >= 34.5 && posLeft < 38.5 && posTop >= 86 && posTop <= 86.8) {
        posTop += 0.8;
    }

    if(posLeft === 38 && posTop >= 74.8 && posTop <= 86.8) {
        posLeft += 0.5;
    }

    if(posLeft === 37.5 && posTop >= 68.4 && posTop <= 74.1) {
        posLeft += 0.5;
    }

    if(posLeft === 36.5 && posTop >= 68.4 && posTop <= 69.2) {
        posTop -= 0.8;
    }

    if(posLeft === 36.5 && posTop >= 61.2 && posTop <= 67.8) {
        posLeft += 0.5;
    }

    if(posLeft >= 34.5 && posLeft <= 36.5 && posTop >= 60.4 && posTop <= 61.2) {
        posTop -= 0.8;
    }

    if(posLeft === 34.5 && posTop >= 53.2 && posTop <= 60.4) {
        posLeft += 0.5;
    }

    // Arena 1 - Em cima

    if(posLeft >= 29 && posLeft <= 34 && posTop > 52.4 && posTop < 53.2) {
        posTop -= 0.8;
    }

    if(posLeft === 29 && posTop > 51.6 && posTop < 52.4) {
        posLeft += 0.5;
    }

    if(posLeft >= 18 && posLeft <= 28.5 && posTop > 50.8 && posTop < 51.6) {
        posTop -= 0.8;
    }

    if(posLeft >= 11.5 && posLeft <= 17.5 && posTop > 51.6 && posTop < 52.4) {
        posTop -= 0.8;
    }

    // Arena 1 - Esquerda

    if(posLeft === 11.5 && posTop >= 51.6 && posTop <= 61.2) {
        posLeft -= 0.5;
    }

    if(posLeft >= 11 && posLeft <= 11.5 && posTop >= 60.4 && posTop <= 61.2) {
        posTop -= 0.8;
    }

    // Arena 2 - Canto superior esquerdo

    // embaixo - parte esquerda
    if(posLeft >= 11 && posLeft <= 14.5 && posTop <= 26.8) {
        posTop += 0.8;
    }

    if(posLeft === 14.5 && posTop >= 26.8 && posTop <= 30) {
        posLeft -= 0.5;
    }

    // embaixo - centro

    if(posLeft >= 14.5 && posLeft <= 34.5 && posTop >= 26.8 && posTop <= 30) {
        posTop += 0.8;
    }

    // embaixo - parte direita

    if(posLeft === 35 && posTop >= 24.4 && posTop <= 30) {
        posLeft += 0.5;
    }

    if(posLeft >= 35 && posLeft < 38 && posTop >= 23.6 && posTop <= 24.4) {
        posTop += 0.8;
    }

    // Parte Direita

    if(posLeft === 38 && posTop >= 10.8 && posTop <= 23.6) {
        posLeft += 0.5;
    }

    if(posLeft >= 38 && posLeft <= 42 && posTop >= 10 && posTop <= 10.8) {
        posTop += 0.8;
    }

    if(posLeft === 42 && posTop >= 6.8 && posTop <= 10.8) {
        posLeft += 0.5;
    }

    if(posLeft >= 42 && posLeft <= 45 && posTop >= 6 && posTop <= 6.8) {
        posTop += 0.8;
    }

    if(posLeft === 45 && posTop >= 2 && posTop <= 6.8) {
        posLeft += 0.5;
    }

    // #-- Placa --#

    // Esquerda

    if(posLeft === 51 && posTop > 2.8 && posTop <= 13.2) {
        posLeft -= 0.5;
    }
    
    // Embaixo

    if(posLeft >= 51 && posLeft <= 57.5 && posTop >= 12.4 && posTop <= 13.2) {
        posTop += 0.8;
    }

    // Direita

    if(posLeft === 58 && posTop > 2.8 && posTop <= 13.2) {
        posLeft += 0.5;
    }

    // Em cima

    if(posLeft >= 51 && posLeft <= 57.5 && posTop >= 2 && posTop <= 2.8) {
        posTop -= 0.8;
    }

    // Arena 3 - Canto superior direito

    // Parte esquerda
    if(posLeft === 64.5 && posTop >= 2 && posTop <= 2.8) {
        posLeft -= 0.5;
    }

    if(posLeft === 66 && posTop >= 2 && posTop <= 3.7) {
        posLeft -= 0.5;
    }

    if(posLeft === 67 && posTop >= 4.4 && posTop <= 5.3) {
        posLeft -= 0.5;
    }

    if(posLeft >= 66.5 && posLeft <= 67 && posTop >= 4.4 && posTop <= 5.3) {
        posTop += 0.8;
    }

    if(posLeft === 67 && posTop >= 6.0 && posTop <= 6.8) {
        posLeft -= 0.5;
    }
    
    if(posLeft === 69 && posTop >= 6.8 && posTop <= 7.9) {
        posLeft -= 0.5;
    }

    if(posLeft >= 68.5 && posLeft <= 69 && posTop >= 6.0 && posTop <= 6.9) {
        posTop += 0.8;
    }

    if(posLeft === 71.5 && posTop >= 7.6 && posTop <= 8.4) {
        posLeft -= 0.5;
    }

    if(posLeft === 72 && posTop >= 7.6 && posTop <= 8.5) {
        posLeft -= 0.5;
    }

    if(posLeft >= 69 && posLeft <= 71.5 && posTop >= 7.6 && posTop <= 8.4) {
        posTop += 0.8;
    }

    // Parte da frente

    if(posLeft >= 72 && posLeft <= 76 && posTop >= 8.4 && posTop <= 9.3) {
        posTop += 0.8;
    }

    // Placa

    if(posLeft === 76 && posTop >= 9.2 && posTop <= 16.5) {
        posLeft -= 0.5;
    }

    if(posLeft >= 76 && posLeft <= 81 && posTop >= 16.4 && posTop <= 17.2) {
        posTop += 0.8;
    }

    if(posLeft === 81 && posTop >= 9.2 && posTop <= 17.2) {
        posLeft += 0.5;
    }

    // Parte direita

    if(posLeft >= 81 && posLeft <= 82.5 && posTop >= 8.4 && posTop <= 9.2) {
        posTop += 0.8;
    }

    if(posLeft >= 83 && posLeft <= 85 && posTop >= 6.8 && posTop <= 7.7) {
        posTop += 0.8;
    }

    if(posLeft >= 84 && posLeft <= 85.5 && posTop >= 4.4 && posTop <= 5.3) {
        posTop += 0.8;
    }

    if(posLeft === 85 && posTop >= 5.2 && posTop <= 6.1) {
        posLeft += 0.5;
    }
}