const img = document.querySelector('img');

setTimeout(() => {
    img.style.transition = 'opacity ease 1s';
    img.style.opacity = '1';
}, 400);

setTimeout(() => {
    localStorage.removeItem('tds_poks_mortos');
    window.location.href = '../Parte Dentro Centro Pokemon/index.html';
}, 8300)

localStorage.setItem('tela_recup', 'Passou');