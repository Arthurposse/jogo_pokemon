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

async function buscandoPok() {
    const poks = JSON.parse(localStorage.getItem('Deck'));
    const deck_imgs = JSON.parse(localStorage.getItem('Deck_imgs'));

    img_inv_1.setAttribute('src', deck_imgs[0]);
    img_inv_2.setAttribute('src', deck_imgs[1]);
    img_inv_3.setAttribute('src', deck_imgs[2]);

    // pok_inv_1.textContent += poks[0];
    // pok_inv_2.textContent += poks[1];
    // pok_inv_3.textContent += poks[2];
}

// MOVIMENTOS PERSONAGEM

const boneco = boneco_documet;

if (localStorage.getItem('dentro_casa') === 'Passou') {

    boneco.style.left = '57.5%';
    boneco.style.top = '78%';

    posLeft = 57.5;
    posTop = 78;

    localStorage.removeItem('dentro_casa')

} else if (localStorage.getItem('centro_pok') === 'Passou') {

    boneco.style.left = '37%';
    boneco.style.top = '52.4%';

    posLeft = 37;
    posTop = 52.4;

    localStorage.removeItem('centro_pok')

} else {
    boneco.style.left = '85%';
    boneco.style.top = '45%';
    
    posLeft = 85;
    posTop = 45;
}

let limiteCima = 39;
let limiteBaixo = 88;
let limiteDireita = 86.5;
let limiteEsquerda = 22;

let esc_aberto = false; 
let mochila_aberta = false;
document.onkeydown = function (event) {
   
    // MOVIMENTAÇÃO PERSONAGEM 

    if(event.key === 'd' || event.key === 'ArrowRight') {
        boneco.setAttribute('src', direita);

        posLeft += 0.5;
        boneco.style.left = posLeft + "%";

        if(posLeft === limiteDireita) {
            posLeft -= 0.5;
        }

    } else if (event.key === 'a' || event.key === 'ArrowLeft') {
        boneco.setAttribute('src', esquerda);

        posLeft -= 0.5;
        boneco.style.left = posLeft + "%";

        if(posLeft === limiteEsquerda) {
            posLeft += 0.5;
        }

    } else if (event.key === 's' || event.key === 'ArrowDown') {
        boneco.setAttribute('src', frente);

        posTop += 0.7;
        boneco.style.top = posTop + "%";

        if(posTop > limiteBaixo) {
            posTop -= 0.7;
        }

    } else if (event.key === 'w' || event.key === 'ArrowUp') {
        boneco.setAttribute('src', costas);

        posTop -= 0.7;
        boneco.style.top = posTop + "%";

        if(posTop < limiteCima) {
            posTop += 0.7;
        }
    }

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
    
    // ESC

    const bloco_esc = document.querySelector('.esc_menu');
    const botao_X = document.getElementById('botao_X');

    if(event.key === 'Escape') {
        if(esc_aberto === false) {
            bloco_esc.style.visibility = 'visible';

            boneco.style.visibility = 'collapse';
            
            esc_aberto = true;
            
        } else {
            
            bloco_esc.style.visibility = 'collapse';

            boneco.style.visibility = 'visible';
            
            esc_aberto = false;
        }
    }
    
    botao_X.addEventListener('click', function(){
        bloco_esc.style.visibility = 'collapse';

        boneco.style.visibility = 'visible';

        esc_aberto = false;
    })

    const botao_home = document.getElementById('botao_home');
    const botao_comandos = document.getElementById('botao_comandos');

    botao_home.addEventListener('click', function(){
        window.location.href = '../../Tela Home/index.html';
    });

    botao_comandos.addEventListener('click', function(){
        localStorage.setItem('tela_comandos', 'cam_centro_pok')

        window.location.href = '../../Tela Comandos/index.html';
    })

    // VERIFICANDO POSIÇÕES

    if(posLeft === 86 && posTop > 42 && posTop < 49) {
        localStorage.setItem('caminho_cen_pok', 'Passou');

        window.location.href = '../Caminho Principal/index.html';
    }

    const ponto_exclamacao = document.getElementById('p_exclamacao');

    if (posLeft >= 36 && posLeft <= 38 && posTop > 52 && posTop < 53) {
        ponto_exclamacao.style.visibility = 'visible';

        if (event.key === 'e') {
            window.location.href = 'Parte Dentro Centro Pokemon/index.html';
        }
    }

    else {
        ponto_exclamacao.style.visibility = 'collapse';
    }

    // COLISÕES

    // #-- Casa Personagem --#

    // Esquerda
    if (posLeft === 54 && posTop >= 56 && posTop <= 76.9) {
        posLeft -= 0.5;
    }

    // Direita
    if (posLeft === 64 && posTop >= 56 && posTop <= 76.9) {
        posLeft += 0.5;
    }

    // Cima
    if (posTop >= 55.1 && posTop <= 55.9 && posLeft >= 54.5 && posLeft <= 63.5) {
        posTop -= 0.7;
    }

    // Baixo
    if (posTop >= 77 && posTop <= 78 && posLeft >= 54.5 && posLeft <= 63.5) {
        posTop += 0.7;
    }

    // #-- Casa em L --#

    // Esquerda
    if (posLeft === 62 && posTop >= 39 && posTop <= 46.4) {
        posLeft -= 0.5;
    }

    // Esquerda 2
    if (posLeft === 67.5 && posTop >= 43.9 && posTop <= 49.2) {
        posLeft -= 0.5;
    }

    // Direita
    if (posLeft === 76 && posTop >= 39 && posTop <= 49) {
        posLeft += 0.5;
    }

    // Baixo - Lado Direito
    if(posTop >= 49 && posTop <= 49.6 && posLeft >= 68 && posLeft < 76) {
        posTop += 0.7;
    }

    // Baixo - Lado Esquerdo
    if (posTop <= 46.4 && posLeft >= 62.5 && posLeft <= 68.5) {
        posTop += 0.7;
    }

    // Esquerda
    if (posLeft === 41 && posTop >= 49.3 && posTop <= 53.4) {
        posLeft -= 0.5;
    }

    // Direita
    if (posLeft === 51 && posTop >= 39 && posTop <= 53.4) {
        posLeft += 0.5;
    }

    // Baixo
    if (posTop <= 53.5 && posLeft >= 41.5 && posLeft <= 50.5) {
        posTop += 0.7;
    }

    // #-- Arvore entre Mart e o Centro Pokemon

    if(posTop > 49 && posTop < 50 && posLeft >= 39.5 && posLeft <= 41) {
        posTop += 0.7;
    }

    // #-- Centro Pokemon --#

    // Baixo - Lado direto da porta
    if(posTop > 50 && posTop < 51 && posLeft >= 38 && posLeft <= 39.5) {
        posLeft += 0.5;
    }

    // Baixo 
    if(posTop > 51 && posTop < 52 && posLeft >= 34.5 && posLeft <= 39){
        posTop += 0.7;
    }

    // Baixo - Lado Esquerdo da porta
    if(posTop > 48 && posTop < 51 && posLeft === 34) {
        posLeft -= 0.5;
    }

    // Baixo - lado esquerdo perto da casa
    if(posTop >= 48 && posTop <= 50 && posLeft > 32 && posLeft <= 34) {
        posTop += 0.7;
    }

    // Lado Esquerdo 
    if(posTop >= 47 && posTop <= 48 && posLeft > 31 && posLeft <= 32) {
        posLeft -= 0.5;
    }

    // #-- Casa Canto Esquerdo --#

    // Baixo 
    if(posTop >= 46.3 && posTop <= 47 && posLeft > 23.5 && posLeft <= 32.5) {
        posTop += 0.7;
    }

    // Lado Esquerdo
    if(posTop > 39 && posTop <= 47 && posLeft === 23.5) {
        posLeft -= 0.5;
    }

    // #-- Árvores - Parte de Baixo --#

    if(posTop > 67.8 && posLeft >= 22.5 && posLeft <= 25) {
        posTop -= 0.7;
    }

    if(posTop >= 68 && posTop <= 74.9 && posLeft === 25.5) {
        posLeft += 0.5;
    }

    if(posTop > 75.1 && posLeft >= 26 && posLeft < 28.5) {
        posTop -= 0.7;
    }

    if(posTop > 75.2 && posTop < 82.1 && posLeft === 28.5) {
        posLeft += 0.5;
    }

    if(posTop > 81.8 && posLeft >= 29 && posLeft <= 32) {
        posTop -= 0.7;
    }

    if(posTop > 75.2 && posTop < 82.1 && posLeft === 32) {
        posLeft -= 0.5;
    }

    if(posTop > 74.8 && posTop < 75.9 && posLeft > 32 && posLeft <= 38.5) {
        posTop -= 0.7;
    }

    if(posTop > 68.1 && posTop < 74.5 && posLeft === 38.5) {
        posLeft -= 0.5;
    }

    if(posTop > 67.8 && posTop < 68.4 && posLeft > 38.5 && posLeft < 48) {
        posTop -= 0.7;
    }

    if(posTop > 68.2 && posTop < 75.2 && posLeft === 48) {
        posLeft += 0.5;
    }

    if(posTop > 74.8 && posTop < 75.2 && posLeft >= 48.5 && posLeft < 51) {
        posTop -= 0.7;
    }

    if(posTop > 75.2 && posTop < 82.2 && posLeft === 51) {
        posLeft += 0.5;
    }

    if(posTop > 81.8 && posTop < 82.2 && posLeft > 51 && posLeft < 54) {
        posTop -= 0.7;
    }

    if(posTop > 82 && posTop < 87.8 && posLeft === 54) {
        posLeft += 0.5;
    }

    if(posTop > 80.8 && posTop < 87.8 && posLeft === 60.5) {
        posLeft -= 0.5;
    }

    if(posTop > 80.4 && posTop < 82.2 && posLeft > 60.5 && posLeft < 67.5) {
        posTop -= 0.7;
    }

    if(posTop > 75.1 && posTop < 80.8 && posLeft === 67.5) {
        posLeft -= 0.5;
    }

    if(posTop > 74.4 && posTop < 75.2 && posLeft > 67.5 && posLeft < 77) {
        posTop -= 0.7;
    }

    if(posTop > 68.2 && posTop < 74.5 && posLeft === 77) {
        posLeft -= 0.5;
    }

    if(posTop > 68 && posTop < 68.9 && posLeft > 77 && posLeft < 80) {
        posTop -= 0.7;
    }

    if(posTop > 54.2 && posTop < 67.5 && posLeft === 80) {
        posLeft -= 0.5;
    }

    if(posTop > 54.1 && posTop < 54.9 && posLeft > 80 && posLeft < 83.5) {
        posTop -= 0.7;
    }

    if(posTop > 47.9 && posTop < 54.9 && posLeft === 83.5) {
        posLeft -= 0.5;
    }

    if(posTop > 47.8 && posTop < 48.6 && posLeft > 83.5 && posLeft <= 86) {
        posTop -= 0.7;
    }

    //#-- Elementos espalhados no mapa --#

    // #-- Árvore da Esquerda --#

    // Direita
    if(posTop > 59.1 && posTop < 74 && posLeft === 34.5) {
        posLeft += 0.5;
    }

    // Baixo 
    if(posTop > 73.7 && posTop < 74.4 && posLeft > 26.5 && posLeft <= 34) {
        posTop += 0.7;
    }

    // Esquerda
    if(posTop > 59.1 && posTop < 74 && posLeft === 26.5) {
        posLeft -= 0.5;
    }

    // Cima
    if(posTop > 59 && posTop < 59.8&& posLeft > 26.5 && posLeft <= 34) {
        posTop -= 0.7;
    }

    // #-- Placa no Meio --# 

    // Direita
    if(posTop > 60.5 && posTop < 66.8 && posLeft === 51.5) {
        posLeft += 0.5;
    }

    // Baixo
    if(posTop > 66 && posTop < 66.8 && posLeft > 47.5 && posLeft < 51.5) {
        posTop += 0.7;
    }

    // Esquerda
    if(posTop > 60.5 && posTop < 66.8 && posLeft === 47.5) {
        posLeft -= 0.5;
    }

    // Cima
    if(posTop > 60.3 && posTop < 61.2 && posLeft > 47.5 && posLeft < 51.5) {
        posTop -= 0.7;
    }

    // #-- Árvore da Direita --#

    // Direita
    if(posTop > 52.7 && posTop < 67.3 && posLeft === 77.5) {
        posLeft += 0.5;
    }

    // Baixo
    if(posTop > 66.7 && posTop < 67.4 && posLeft >= 70 && posLeft <= 77.5) {
        posTop += 0.7;
    }

    // Esquerda
    if(posTop > 52.7 && posTop < 67.3 && posLeft === 69.5) {
        posLeft -= 0.5;
    }

    // Cima
    if(posTop > 51.9 && posTop < 53.5 && posLeft >= 70 && posLeft <= 77.5) {
        posTop -= 0.7;
    }
}