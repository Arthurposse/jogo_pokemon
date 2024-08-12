const Ash = document.getElementById('Ash');
const Serena = document.getElementById('Serena');

Ash.addEventListener('click', function(){
    localStorage.setItem('personagem', 'Ash')

    window.location.href = '../Tela Decks/index.html';
})

Serena.addEventListener('click', function(){
    localStorage.setItem('personagem', 'Serena')

    window.location.href = '../Tela Decks/index.html';
})