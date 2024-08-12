const botao_voltar = document.getElementById('botao_voltar');
const tela = localStorage.getItem('tela_comandos');

botao_voltar.addEventListener('click', function(){
    if(tela === 'dentro_centro_pok') {
        localStorage.removeItem('tela_comandos');

        window.location.href = '../Tela caminhos/Caminho Centro Pokemon/Parte Dentro Centro Pokemon/index.html';
    }

    if(tela === 'cam_centro_pok') {
        localStorage.removeItem('tela_comandos');

        window.location.href = '../Tela caminhos/Caminho Centro Pokemon/index.html';
    }

    if(tela === 'cam_prin') {
        localStorage.removeItem('tela_comandos');

        window.location.href = '../Tela caminhos/Caminho Principal/index.html';
    }
})