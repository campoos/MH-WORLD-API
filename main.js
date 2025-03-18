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

// Função para substituir o conteúdo na tela (para monstros)
function ReplaceDadosMonstros(dados) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const containerHome = document.getElementById('homeContainer');
    const newContainer = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');
    
    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html";
    
    botaoVoltar.src = "./img/Reply Arrow.png";
    
    linkVoltar.appendChild(botaoVoltar);
    
    newContainer.id = 'newContainer';
    newContainer.className = 'newContainer';

    // Limpa o conteúdo atual
    containerPrincipal.removeChild(containerHome);
    containerPrincipal.appendChild(newContainer);

    newContainer.appendChild(linkVoltar);

    // Cria um novo elemento para exibir os dados
    dados.forEach(item => {
        const cards = document.createElement('div');
        cards.id = "card";
        cards.className = "card";

        // Cria o nome do monstro com link
        const itemSpan = document.createElement('a');
        itemSpan.textContent = item.name;
        itemSpan.href = "#";
        cards.appendChild(itemSpan);

        // Cria uma div geral para as fraquezas
        const fraquezasContainer = document.createElement('div');
        fraquezasContainer.className = 'fraquezasContainer'; // Div geral para as fraquezas

        // Itera sobre as fraquezas e exibe o ícone e o número de fraqueza
        item.weaknesses.forEach(fraqueza => {
            const fraquezaItem = document.createElement('div');
            fraquezaItem.className = 'fraquezaItem';

            // Criar o ícone do elemento (com o nome correto, ex: fogo_icon.png)
            const elementoIcon = document.createElement('img');
            elementoIcon.className = 'elementoIcon';
            elementoIcon.src = `./img/${fraqueza.element}_icon.webp`; // Caminho para o ícone baseado no nome do elemento

            // Exibe o número da fraqueza
            const numeroFraqueza = document.createElement('span');
            numeroFraqueza.className = 'numeroFraqueza';
            numeroFraqueza.textContent = `${fraqueza.stars}`; // Exibe o número de fraqueza (sem as estrelas)

            // Adiciona o ícone e o número da fraqueza à fraqueza
            fraquezaItem.appendChild(elementoIcon);
            fraquezaItem.appendChild(numeroFraqueza);

            // Adiciona a fraqueza ao container de fraquezas
            fraquezasContainer.appendChild(fraquezaItem);
        });

        // Adiciona o container de fraquezas ao card
        cards.appendChild(fraquezasContainer);

        // Adiciona o card ao novo container
        newContainer.appendChild(cards);
    });
}

// Função para substituir o conteúdo na tela (para armaduras)
function ReplaceDadosArmaduras(dados) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const containerHome = document.getElementById('homeContainer');
    const newContainer = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');
    
    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html";
    
    botaoVoltar.src = "./img/Reply Arrow.png";
    
    linkVoltar.appendChild(botaoVoltar);
    
    newContainer.id = 'newContainer';
    newContainer.className = 'newContainer';

    // Limpa o conteúdo atual
    containerPrincipal.removeChild(containerHome);
    containerPrincipal.appendChild(newContainer);

    newContainer.appendChild(linkVoltar);

    // Cria um novo elemento para exibir os dados
    dados.forEach(item => {
        const cards = document.createElement('div');
        cards.id = "card";
        cards.className = "card";

        // Cria o nome da armadura com link
        const itemSpan = document.createElement('a');
        itemSpan.textContent = item.name;
        itemSpan.href = "#";
        cards.appendChild(itemSpan);

        // Cria uma div geral para as resistências
        const resistancesContainer = document.createElement('div');
        resistancesContainer.className = 'resistancesContainer'; // Div geral para as resistências

        // Itera sobre as resistências e exibe o ícone e o número de resistência
        Object.keys(item.resistances).forEach(element => {
            const resistenciaItem = document.createElement('div');
            resistenciaItem.className = 'resistenciaItem';

            // Criar o ícone do elemento (com o nome correto, ex: fogo_icon.png)
            const elementoIcon = document.createElement('img');
            elementoIcon.className = 'elementoIcon';
            elementoIcon.src = `./img/${element}_icon.webp`; // Caminho para o ícone baseado no nome do elemento

            // Exibe o número da resistência
            const numeroResistencia = document.createElement('span');
            numeroResistencia.className = 'numeroResistencia';
            numeroResistencia.textContent = `${item.resistances[element]}`; // Exibe o número de resistência

            // Adiciona o ícone e o número da resistência à resistência
            resistenciaItem.appendChild(elementoIcon);
            resistenciaItem.appendChild(numeroResistencia);

            // Adiciona a resistência ao container de resistências
            resistancesContainer.appendChild(resistenciaItem);
        });

        // Adiciona o container de resistências ao card
        cards.appendChild(resistancesContainer);

        // Adiciona o card ao novo container
        newContainer.appendChild(cards);
    });
}

// Função para substituir o conteúdo na tela (para armas)
function ReplaceDadosArmas(dados) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const containerHome = document.getElementById('homeContainer');
    const newContainer = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');
    
    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html";
    
    botaoVoltar.src = "./img/Reply Arrow.png";
    
    linkVoltar.appendChild(botaoVoltar);
    
    newContainer.id = 'newContainer';
    newContainer.className = 'newContainer';

    // Limpa o conteúdo atual
    containerPrincipal.removeChild(containerHome);
    containerPrincipal.appendChild(newContainer);

    newContainer.appendChild(linkVoltar);

    // Cria um novo elemento para exibir os dados
    dados.forEach(item => {
        const cards = document.createElement('div');
        cards.id = "card";
        cards.className = "card";

        const itemSpan = document.createElement('a');
        itemSpan.textContent = item.name;
        itemSpan.href = '#';
        cards.appendChild(itemSpan);
        newContainer.appendChild(cards);
    });
}

// Funções específicas para cada seção (Monstros, Armas e Armaduras)
async function telaMonstros() {
    const dadosMonstros = await pesquisarDados("https://mhw-db.com/monsters");
    ReplaceDadosMonstros(dadosMonstros); // Exibe os dados de monstros
}

async function telaArmas() {
    const dadosArmas = await pesquisarDados("https://mhw-db.com/weapons");
    ReplaceDadosArmas(dadosArmas); // Exibe os dados de armas
}

async function telaArmaduras() {
    const dadosArmaduras = await pesquisarDados("https://mhw-db.com/armor");
    ReplaceDadosArmaduras(dadosArmaduras); // Exibe os dados de armaduras
}

// Eventos para os links
linkMonstros.addEventListener('click', telaMonstros);
linkArmas.addEventListener('click', telaArmas);
linkArmaduras.addEventListener('click', telaArmaduras);