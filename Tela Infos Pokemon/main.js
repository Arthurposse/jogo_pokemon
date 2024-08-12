const img_pok = document.getElementById('img_pok');
const nome_pok = document.getElementById('nome_pok');
const tipo_pok = document.getElementById('tipo_pok');
const nome_habilidades_pok = document.getElementById('nome_habilidades_pok');
const hp_pok = document.getElementById('hp_pok');
const peso_pok = document.getElementById('peso_pok');
const seta = document.getElementById('seta');

img_pok.setAttribute('src', localStorage.getItem('Img_pok'));

nome_pok.textContent = localStorage.getItem('Nome_pok');

hp_pok.textContent = localStorage.getItem('Hp_pok') + ".";

tipo_pok.textContent = localStorage.getItem('Tipo_pok') + ".";

const array_habilidades = localStorage.getItem('Nomes_habilidades_pok');
const habilidades = JSON.parse(array_habilidades);

for(let j = 0; j < 4; j++) {
    nome_habilidades_pok.innerHTML += `${habilidades[j][0]} PP: ${habilidades[j][1]} <br> <br>`;
}

peso_pok.textContent = localStorage.getItem('Peso_pok') + "Kg.";

seta.addEventListener('click', function(){
    localStorage.removeItem('Img_pok');
    localStorage.removeItem('Nome_pok');
    localStorage.removeItem('Tipo_pok');
    localStorage.removeItem('Nomes_habilidades_pok');
    localStorage.removeItem('Hp_pok');
    localStorage.removeItem('Nomes_habilidades_pok');
    localStorage.removeItem('Peso_pok');

    window.location.href = '../Tela consultando API/index.html';
})
