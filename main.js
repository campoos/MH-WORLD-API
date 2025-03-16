"use strict";

const linkMonstros = document.getElementById('redirecionamentoMonstros');
const linkArmas = document.getElementById('redirecionamentoArmas');
const linkArmaduras = document.getElementById('redirecionamentoArmaduras');

// Função para buscar os dados das APIs
async function pesquisarDados(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data; // Retorna os dados da API
}

// Função para substituir o conteúdo na tela
function ReplaceDados(dados) {
    const containerPrincipal = document.getElementById('containerPrincipal')
    const containerHome = document.getElementById('homeContainer');
    const newContaienr = document.createElement('div')
    const linkVoltar = document.createElement('a')
    const botaoVoltar = document.createElement('img')
    
    linkVoltar.className = "linkVoltar"
    linkVoltar.href = "./index.html"

    botaoVoltar.src = "./img/Reply Arrow.png"

    linkVoltar.appendChild(botaoVoltar)

    newContaienr.id = 'newContainer'
    newContaienr.className = 'newContainer'

    // Limpa o conteúdo atual
    containerPrincipal.removeChild(containerHome)

    containerPrincipal.appendChild(newContaienr)

    newContaienr.appendChild(linkVoltar)
    
    // Cria um novo elemento para exibir os dados
    dados.forEach(item => {
        const cards = document.createElement('div')
        
        cards.id = "card"
        cards.className = "card"
    
        const itemSpan = document.createElement('span');
        itemSpan.textContent = item.name
        cards.appendChild(itemSpan);
        newContaienr.appendChild(cards)
    });
}

// Funções específicas para cada seção (Monstros, Armas e Armaduras)
async function telaMonstros() {
    const dadosMonstros = await pesquisarDados("https://mhw-db.com/monsters");
    ReplaceDados(dadosMonstros); // Exibe os dados de monstros
}

async function telaArmas() {
    const dadosArmas = await pesquisarDados("https://mhw-db.com/weapons");
    ReplaceDados(dadosArmas); // Exibe os dados de armas
}

async function telaArmaduras() {
    const dadosArmaduras = await pesquisarDados("https://mhw-db.com/armor");
    ReplaceDados(dadosArmaduras); // Exibe os dados de armaduras
}

// Eventos para os links
linkMonstros.addEventListener('click', telaMonstros);
linkArmas.addEventListener('click', telaArmas);
linkArmaduras.addEventListener('click', telaArmaduras);
