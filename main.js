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
        itemSpan.addEventListener('click', () => loadMonsterData(item)); // Adiciona o evento de clique
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

// Função que exibe os dados do monstro em uma nova tela
function loadMonsterData(monster) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const newContainer = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');

    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html";  // Link para a tela anterior (agora você vai poder configurar a navegação corretamente)

    // Botão de voltar com texto alternativo
    botaoVoltar.src = "./img/Reply Arrow.png";
    botaoVoltar.alt = "Voltar para a tela de monstros";  // Adicionando o texto alternativo para a imagem
    linkVoltar.appendChild(botaoVoltar);

    newContainer.id = 'newContainer';
    newContainer.className = 'newContainer';

    // Limpa o conteúdo atual
    containerPrincipal.innerHTML = '';  // Limpa o conteúdo da tela
    containerPrincipal.appendChild(newContainer);

    newContainer.appendChild(linkVoltar);

    // Nome do monstro
    const monsterName = document.createElement('h1');
    monsterName.textContent = monster.name;
    newContainer.appendChild(monsterName);

    // Descrição do monstro
    const monsterDescription = document.createElement('h2');
    monsterDescription.textContent = "Description";
    const description = document.createElement('p');
    description.textContent = monster.description;
    newContainer.appendChild(monsterDescription);
    newContainer.appendChild(description);

    // Resistências
    const resistancesContainer = document.createElement('div');
    resistancesContainer.className = 'resistancesContainer';
    resistancesContainer.innerHTML = "<h3>Resistências</h3>";

    monster.resistances.forEach(resistance => {
        const resistanceItem = document.createElement('div');
        resistanceItem.className = 'resistanceItem';
        
        // Exibindo o nome do elemento de resistência
        const resistanceElement = document.createElement('span');
        resistanceElement.textContent = `${resistance.element.charAt(0).toUpperCase() + resistance.element.slice(1)}`; // Capitaliza a primeira letra
        resistanceItem.appendChild(resistanceElement);
        
        // Se houver alguma condição, você pode exibi-la (caso esteja no seu JSON)
        if (resistance.condition) {
            const resistanceCondition = document.createElement('span');
            resistanceCondition.textContent = ` - Condition: ${resistance.condition}`;
            resistanceItem.appendChild(resistanceCondition);
        }

        // Adiciona o item de resistência ao container de resistências
        resistancesContainer.appendChild(resistanceItem);
    });
    newContainer.appendChild(resistancesContainer);

    // Fraquezas
    const weaknessesContainer = document.createElement('div');
    weaknessesContainer.className = 'weaknessesContainer';
    weaknessesContainer.innerHTML = "<h3>Fraquezas</h3>";

    monster.weaknesses.forEach(weakness => {
        const weaknessItem = document.createElement('div');
        weaknessItem.className = 'weaknessItem';

        const weaknessIcon = document.createElement('img');
        weaknessIcon.className = 'weaknessIcon';
        weaknessIcon.src = `./img/${weakness.element}_icon.webp`;  // Caminho para o ícone

        const weaknessValue = document.createElement('span');
        weaknessValue.className = 'weaknessValue';
        weaknessValue.textContent = weakness.stars;

        weaknessItem.appendChild(weaknessIcon);
        weaknessItem.appendChild(weaknessValue);

        weaknessesContainer.appendChild(weaknessItem);
    });
    newContainer.appendChild(weaknessesContainer);
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

    // Itera sobre os dados das armas
    dados.forEach(item => {
        const cards = document.createElement('div');
        cards.className = "card";

        // Nome da arma
        const itemSpan = document.createElement('a');
        itemSpan.textContent = item.name;
        itemSpan.href = '#';
        cards.appendChild(itemSpan);

        // Container para durabilidade
        const durabilityContainer = document.createElement('div');
        durabilityContainer.className = 'durabilityContainer';

        // Primeiro objeto do array durability (mínimo)
        const minDurability = item.durability[0];

        // Cores de durabilidade e seus valores
        const colors = {
            red: "#B14242",
            orange: "#BA683D",
            yellow: "#B79B47",
            green: "#589445",
            blue: "#5987B8",
            white: "#ADADAD",
            purple: "#AA65A2"
        };

        // Itera sobre as cores e seus valores corretamente
        Object.entries(colors).forEach(([key, color]) => {
            const durabilityItem = document.createElement('div');
            durabilityItem.className = 'durabilityItem';

            // Criar círculo colorido
            const colorCircle = document.createElement('div');
            colorCircle.className = 'colorCircle';
            colorCircle.style.backgroundColor = color;

            // Criar número da durabilidade
            const durabilityValue = document.createElement('span');
            durabilityValue.className = 'durabilityValue';
            durabilityValue.textContent = minDurability[key]; // Corrigido para acessar a propriedade correta

            // Adiciona o círculo e o número ao item
            durabilityItem.appendChild(colorCircle);
            durabilityItem.appendChild(durabilityValue);

            // Adiciona o item ao container de durabilidade
            durabilityContainer.appendChild(durabilityItem);
        });

        // Adiciona o container de durabilidade ao card
        cards.appendChild(durabilityContainer);

        // Adiciona o card ao novo container
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