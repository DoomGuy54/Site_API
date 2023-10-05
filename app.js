const perfil = document.querySelector('#perfil');
const pnome = document.querySelector('#pnome');
const unome = document.querySelector('#unome');
const idade = document.querySelector('#idade');
const pais = document.querySelector('#pais');
const num = document.querySelector("#num");
const email = document.querySelector('#email');

const gerarPerfil = async () =>{
    const url = 'https://randomuser.me/api/';
    const resposta = await fetch(url);
    const { results } = await resposta.json();
    const info = results[0];

    perfil.src = info.picture.medium;
    pnome.textContent = info.name.first;
    unome.textContent = info.name.last;
    idade.textContent = info.dob.age;
    pais.textContent = info.location.country;
    num.textContent = info.phone;
    email.textContent = info.email;
}

document.addEventListener('DOMContentLoaded', gerarPerfil);
botao.addEventListener('click', gerarPerfil);