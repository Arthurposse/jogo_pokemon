// VERIFICAR PERSONAGEM

const Ash_img = document.querySelector('.Ash');
const Serena_img = document.querySelector('.Serena');
let personagem = localStorage.getItem('personagem');

let frente = '';
let costas = '';
let direita = '';
let esquerda = '';

if(personagem === 'Serena'){

    frente = '../../../Imagens/Sprites Bonecos/Serena/Frente/Frente Serena.png';
    costas = '../../../Imagens/Sprites Bonecos/Serena/Costas/Costas Serena.png';
    direita = '../../../Imagens/Sprites Bonecos/Serena/Direita/Direita Serena.png';
    esquerda = '../../../Imagens/Sprites Bonecos/Serena/Esquerda/Esquerda Serena.png';

    Serena_img.style.visibility = 'visible';

    boneco_documet = document.querySelector('.Serena');

} else if (personagem === 'Ash') {
    frente = '../../../Imagens/Sprites Bonecos/Ash/Frente/Frente Ash.png';
    costas = '../../../Imagens/Sprites Bonecos/Ash/Costas/Costas Ash.png';
    direita = '../../../Imagens/Sprites Bonecos/Ash/Direita/Direita Ash.png';
    esquerda = '../../../Imagens/Sprites Bonecos/Ash/Esquerda/Esquerda Ash.png';

    Ash_img.style.visibility = 'visible';

    boneco_documet = document.querySelector('.Ash');
}

// MOVIMENTOS PERSONAGEM + FALAS

const boneco = boneco_documet;
const interacao_doutora = document.getElementById('interacao_doutora');
const falas = document.getElementById('falas');

let limiteCima = 2;
let limiteBaixo = 81;
let limiteDireita = 64;
let limiteEsquerda = 33;

if (localStorage.getItem('tela_recup') === 'Passou') {
    
    interacao_doutora.style.visibility = 'collapse';
    falas.style.visibility = 'visible';
    falas.textContent = 'Doutora: Prontinho, novinhos em folha.';

    setTimeout(() => {
        if(personagem === 'Ash') {
            falas.textContent = 'Obrigado!';
        
        } else if (personagem === 'Serena') {
            falas.textContent = 'Obrigada!';
        }

        setTimeout(() => {
            falas.textContent = 'Doutora: Eu que agradeço!';
        }, 2000);
    }, 2400);

    boneco.style.left = '51.5%';
    boneco.style.top = '57%';
    
    posLeft = 51.5;
    posTop = 58;

    localStorage.removeItem('tela_recup')
}

else if (localStorage.getItem('Api') === 'Passou') {

    boneco.style.left = '55.5%';
    boneco.style.top = '58%';
    
    posLeft = 55.5;
    posTop = 58;

    localStorage.removeItem('Api');
} 

else {
    boneco.style.left = '48.5%';
    boneco.style.top = '79%';
    
    posLeft = 48.5;
    posTop = 79;
}

let esc_aberto = false; 
document.onkeydown = function(event) {
    
    console.log(posLeft);
    console.log(posTop);
    
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

        if(posTop >= limiteBaixo) {
            posTop -= 0.7;
        }

    } else if (event.key === 'w' || event.key === 'ArrowUp') {
        boneco.setAttribute('src', costas);

        posTop -= 0.7;
        boneco.style.top = posTop + "%";

        if(posTop <= limiteCima) {
            posTop += 0.7;
        }
    }

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
        window.location.href = '../../../Tela Home/index.html';
    });

    botao_comandos.addEventListener('click', function(){
        localStorage.setItem('tela_comandos', 'dentro_centro_pok')

        window.location.href = '../../../Tela Comandos/index.html';
    })

    // VERIFICANDO POSIÇÕES
    const ponto_exclamacao = document.getElementById('p_exclamacao');

    if (posLeft === 52 && posTop >= 56 && posTop <= 57.6) {

        falas.textContent = 'Doutora: Olá, em que posso ajudar?';
        falas.style.visibility = 'visible';

        interacao_doutora.style.visibility = 'visible';
    }

    else if(posLeft >= 54.5 && posLeft <= 56.5 && posTop >= 56 && posTop <= 57.6) {
        ponto_exclamacao.style.visibility = 'visible';

        if (event.key === 'e') {
            localStorage.setItem('centro_pok_api', 'Passou');

            window.location.href = '../../../Tela consultando API/index.html';
        }
    }

    else if(posLeft >= 48 && posLeft <= 48.5 && posTop >= 80) {
        ponto_exclamacao.style.visibility = 'visible';
        
        if (event.key === 'e') {
            localStorage.setItem('centro_pok', 'Passou');

            window.location.href = '../index.html';
        }
    }

    else {
        falas.style.visibility = 'collapse';
        interacao_doutora.style.visibility = 'collapse';
        ponto_exclamacao.style.visibility = 'collapse';
    }

    // Botões interação Doutora
    
    const botao_recuperar_vida_pok = document.getElementById('recuperar_vida_pok');
    const botao_procurar_pok = document.getElementById('procurar_pok');
    
    botao_recuperar_vida_pok.addEventListener('click', function(){
        window.location.href = '../Cutscene Recuperando vida/index.html';
    })
    
    botao_procurar_pok.addEventListener('click', function(){
        interacao_doutora.style.visibility = 'collapse';

        falas.textContent = 'Doutora: Você pode usar o computador ao lado.';

        setTimeout(() => {
            if(personagem === 'Ash') {
                falas.textContent = 'Tá bom, obrigado.';
            } 
            else if (personagem === 'Serena') {
                falas.textContent = 'Tá bom, obrigada.';
            }

            setTimeout(() => {
                falas.textContent = 'Doutora: Disponha.';
            }, 2000);
        }, 2000);
    })
}
