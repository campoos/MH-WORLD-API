"use strict"

const linkMonstros = document.getElementById('redirecionamentoMonstros')

function telaMonstros(){
    const containerHome = document.getElementById('containerHome')

    containerHome.innerHTML = ""
}

linkMonstros.addEventListener('click', telaMonstros)