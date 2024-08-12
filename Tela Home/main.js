const botao_start = document.getElementById('botao_start');

botao_start.addEventListener('click', function(){
    localStorage.removeItem('pok_morto');
    localStorage.removeItem('vida_pok_inimigo');
    localStorage.removeItem('aviso_pok_morto');
    localStorage.removeItem('1_pok_morto');
    localStorage.removeItem('2_pok_morto');
    localStorage.removeItem('3_pok_morto');
    localStorage.removeItem('soma_poks_mortos');
    localStorage.removeItem('Arena');
    localStorage.removeItem('Arena 1');
    localStorage.removeItem('Arena 2');
    localStorage.removeItem('Arena 3');
    localStorage.removeItem('1_pok');
    localStorage.removeItem('Deck_imgs');
    localStorage.removeItem('Deck');
    localStorage.removeItem('personagem');
    localStorage.removeItem('tds_poks_mortos');
    localStorage.removeItem('resultado_batalha');
    

    window.location.href = '../Tela História/index.html';
});