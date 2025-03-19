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
    const newContainerLoadMonster = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');

    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html";  // Link para a tela anterior

    // Botão de voltar com texto alternativo
    botaoVoltar.src = "./img/Reply Arrow.png";
    botaoVoltar.alt = "Voltar para a tela de monstros";  
    linkVoltar.appendChild(botaoVoltar);

    newContainerLoadMonster.id = 'newContainerLoadMonster';
    newContainerLoadMonster.className = 'newContainerLoadMonster';

    // Limpa o conteúdo atual
    containerPrincipal.innerHTML = '';  
    containerPrincipal.appendChild(newContainerLoadMonster);

    newContainerLoadMonster.appendChild(linkVoltar);

    // Nome do monstro
    const monsterName = document.createElement('h1');
    monsterName.textContent = monster.name;
    newContainerLoadMonster.appendChild(monsterName);

    // Descrição do monstro
    const monsterDescription = document.createElement('h2');
    monsterDescription.textContent = "Description";
    const description = document.createElement('p');
    description.textContent = monster.description;
    newContainerLoadMonster.appendChild(monsterDescription);
    newContainerLoadMonster.appendChild(description);

    // Resistências
    const resistancesContainer = document.createElement('div');
    resistancesContainer.className = 'resistancesContainer';

    const resistancesTitle = document.createElement('h3');
    resistancesTitle.textContent = "Resistências";

    const resistancesContent = document.createElement('div');
    resistancesContent.className = 'resistancesContent';

    monster.resistances.forEach(resistance => {
        const resistanceItem = document.createElement('div');
        resistanceItem.className = 'resistanceItem';

        const resistanceElement = document.createElement('span');
        resistanceElement.textContent = `${resistance.element.charAt(0).toUpperCase() + resistance.element.slice(1)}`;

        resistanceItem.appendChild(resistanceElement);

        if (resistance.condition) {
            const resistanceCondition = document.createElement('span');
            resistanceCondition.textContent = ` - Condition: ${resistance.condition}`;
            resistanceItem.appendChild(resistanceCondition);
        }

        resistancesContent.appendChild(resistanceItem);
    });

    resistancesContainer.appendChild(resistancesTitle);
    resistancesContainer.appendChild(resistancesContent);
    newContainerLoadMonster.appendChild(resistancesContainer);

    // Fraquezas
    const weaknessesContainer = document.createElement('div');
    weaknessesContainer.className = 'weaknessesContainer';

    const weaknessesTitle = document.createElement('h3');
    weaknessesTitle.textContent = "Fraquezas";

    const weaknessesContent = document.createElement('div');
    weaknessesContent.className = 'weaknessesContent';

    monster.weaknesses.forEach(weakness => {
        const weaknessItem = document.createElement('div');
        weaknessItem.className = 'weaknessItem';

        const weaknessIcon = document.createElement('img');
        weaknessIcon.className = 'weaknessIcon';
        weaknessIcon.src = `./img/${weakness.element}_icon.webp`;

        const weaknessValue = document.createElement('span');
        weaknessValue.className = 'weaknessValue';
        weaknessValue.textContent = weakness.stars;

        weaknessItem.appendChild(weaknessIcon);
        weaknessItem.appendChild(weaknessValue);

        weaknessesContent.appendChild(weaknessItem);
    });

    weaknessesContainer.appendChild(weaknessesTitle);
    weaknessesContainer.appendChild(weaknessesContent);
    newContainerLoadMonster.appendChild(weaknessesContainer);
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
        
        // Remove o 'href' e adiciona um evento de clique
        itemSpan.href = "#"; // Manter para compatibilidade com navegadores antigos, mas o evento de clique substitui o comportamento padrão
        itemSpan.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento de navegação padrão (não irá rolar para o topo)
            loadArmorsData(item);  // Chama a função que carrega os dados da armadura
        });

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

// Função que exibe os dados da armadura em uma nova tela
function loadArmorsData(armor) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const newContainerLoadArmor = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');

    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html";  // Link para a tela anterior

    // Botão de voltar com texto alternativo
    botaoVoltar.src = "./img/Reply Arrow.png";
    botaoVoltar.alt = "Voltar para a tela de armaduras";  
    linkVoltar.appendChild(botaoVoltar);

    newContainerLoadArmor.id = 'newContainerLoadArmor';
    newContainerLoadArmor.className = 'newContainerLoadArmor';

    // Limpa o conteúdo atual
    containerPrincipal.innerHTML = '';  
    containerPrincipal.appendChild(newContainerLoadArmor);

    newContainerLoadArmor.appendChild(linkVoltar);

    // Nome da armadura e tipo
    const armorName = document.createElement('h1');
    armorName.textContent = armor.name;
    const armorType = document.createElement('span');
    armorType.className = 'armorType';
    armorType.textContent = `Type: ${armor.type}`;
    newContainerLoadArmor.appendChild(armorName);
    newContainerLoadArmor.appendChild(armorType);

    // Criação da estrutura com descrição, defesa e materiais
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'detailsContainer';

    // Div de descrição
    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'descriptionContainer';
    const descriptionTitle = document.createElement('h2');
    descriptionTitle.textContent = "Description";
    const descriptionText = document.createElement('p');
    descriptionText.textContent = armor.skills[0] ? armor.skills[0].description : "No description available";
    descriptionContainer.appendChild(descriptionTitle);
    descriptionContainer.appendChild(descriptionText);

    // Div de defesa
    const defenseContainer = document.createElement('div');
    defenseContainer.className = 'defenseContainer';
    const defenseTitle = document.createElement('h3');
    defenseTitle.textContent = "Defense";
    const defenseText = document.createElement('p');
    defenseText.textContent = `Base: ${armor.defense.base} | Max: ${armor.defense.max}`;
    defenseContainer.appendChild(defenseTitle);
    defenseContainer.appendChild(defenseText);

    // Div de materiais
    const materialsContainer = document.createElement('div');
    materialsContainer.className = 'materialsContainer';
    const materialsTitle = document.createElement('h3');
    materialsTitle.textContent = "Materials";
    const materialsList = document.createElement('ul');
    armor.crafting.materials.forEach(material => {
        const materialItem = document.createElement('li');
        materialItem.textContent = `${material.quantity}x ${material.item.name}`;
        materialsList.appendChild(materialItem);
    });
    materialsContainer.appendChild(materialsTitle);
    materialsContainer.appendChild(materialsList);

    // Adiciona as divs ao container de detalhes
    detailsContainer.appendChild(descriptionContainer);
    detailsContainer.appendChild(defenseContainer);
    detailsContainer.appendChild(materialsContainer);

    newContainerLoadArmor.appendChild(detailsContainer);

    // Criação da seção de resistências
    const resistancesContainer = document.createElement('div');
    resistancesContainer.className = 'resistancesContainer';

    const resistancesTitle = document.createElement('h3');
    resistancesTitle.textContent = "Resistance";
    const resistancesList = document.createElement('div');
    resistancesList.className = 'resistancesList';

    // Itera sobre as resistências e exibe o ícone e o valor
    Object.keys(armor.resistances).forEach(element => {
        const resistanceItem = document.createElement('div');
        resistanceItem.className = 'resistanceItem';

        // Criar o ícone do elemento (com o nome correto, ex: fogo_icon.png)
        const elementIcon = document.createElement('img');
        elementIcon.className = 'elementIcon';
        elementIcon.src = `./img/${element}_icon.webp`;  // Caminho para o ícone baseado no nome do elemento

        // Exibe o número da resistência
        const resistanceValue = document.createElement('span');
        resistanceValue.className = 'resistanceValue';
        resistanceValue.textContent = armor.resistances[element];

        resistanceItem.appendChild(elementIcon);
        resistanceItem.appendChild(resistanceValue);

        resistancesList.appendChild(resistanceItem);
    });

    resistancesContainer.appendChild(resistancesTitle);
    resistancesContainer.appendChild(resistancesList);
    newContainerLoadArmor.appendChild(resistancesContainer);
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
