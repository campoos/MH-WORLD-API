"use strict";

const linkMonstros = document.getElementById('redirecionamentoMonstros');
const linkArmas = document.getElementById('redirecionamentoArmas');
const linkArmaduras = document.getElementById('redirecionamentoArmaduras');

const lateralMonstros = document.getElementById('linkLateralMonstros');
const lateralArmas = document.getElementById('linkLateralArmas');
const lateralArmaduras = document.getElementById('linkLateralArmaduras');

async function pesquisarDados(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data; 
}

function apagarContainer() {
    const containerPrincipal = document.getElementById('containerPrincipal');

    containerPrincipal.innerHTML = ""
}

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


    apagarContainer()
    containerPrincipal.appendChild(newContainer);

    newContainer.appendChild(linkVoltar);


    dados.forEach(item => {
        const cards = document.createElement('div');
        cards.id = "card";
        cards.className = "card";

        const itemSpan = document.createElement('a');
        itemSpan.textContent = item.name;
        itemSpan.href = "#";
        itemSpan.addEventListener('click', () => loadMonsterData(item)); 
        cards.appendChild(itemSpan);
   
        const fraquezasContainer = document.createElement('div');
        fraquezasContainer.className = 'fraquezasContainer'; 

        item.weaknesses.forEach(fraqueza => {
            const fraquezaItem = document.createElement('div');
            fraquezaItem.className = 'fraquezaItem';

            const elementoIcon = document.createElement('img');
            elementoIcon.className = 'elementoIcon';
            elementoIcon.src = `./img/${fraqueza.element}_icon.webp`;

            const numeroFraqueza = document.createElement('span');
            numeroFraqueza.className = 'numeroFraqueza';
            numeroFraqueza.textContent = `${fraqueza.stars}`; 

            fraquezaItem.appendChild(elementoIcon);
            fraquezaItem.appendChild(numeroFraqueza);

            fraquezasContainer.appendChild(fraquezaItem);
        });

        cards.appendChild(fraquezasContainer);

        newContainer.appendChild(cards);
    });
}

function loadMonsterData(monster) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const newContainerLoadMonster = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');

    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html"; 

    botaoVoltar.src = "./img/Reply Arrow.png";
    botaoVoltar.alt = "Voltar para a tela de monstros";  
    linkVoltar.appendChild(botaoVoltar);

    newContainerLoadMonster.id = 'newContainerLoadMonster';
    newContainerLoadMonster.className = 'newContainerLoadMonster';

    apagarContainer()
    containerPrincipal.appendChild(newContainerLoadMonster);

    newContainerLoadMonster.appendChild(linkVoltar);

    const monsterName = document.createElement('h1');
    monsterName.textContent = monster.name;
    newContainerLoadMonster.appendChild(monsterName);

    const monsterDescription = document.createElement('h2');
    monsterDescription.textContent = "Description";
    const description = document.createElement('p');
    description.textContent = monster.description;
    newContainerLoadMonster.appendChild(monsterDescription);
    newContainerLoadMonster.appendChild(description);

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

    apagarContainer()
    containerPrincipal.appendChild(newContainer);

    newContainer.appendChild(linkVoltar);

    dados.forEach(item => {
        const cards = document.createElement('div');
        cards.id = "card";
        cards.className = "card";

        const itemSpan = document.createElement('a');
        itemSpan.textContent = item.name;
        
        itemSpan.href = "#"; 
        itemSpan.addEventListener('click', function(event) {
            event.preventDefault(); 
            loadArmorsData(item); 
        });

        cards.appendChild(itemSpan);

        const resistancesContainer = document.createElement('div');
        resistancesContainer.className = 'resistancesContainer'; 

        Object.keys(item.resistances).forEach(element => {
            const resistenciaItem = document.createElement('div');
            resistenciaItem.className = 'resistenciaItem';

            const elementoIcon = document.createElement('img');
            elementoIcon.className = 'elementoIcon';
            elementoIcon.src = `./img/${element}_icon.webp`; 

            const numeroResistencia = document.createElement('span');
            numeroResistencia.className = 'numeroResistencia';
            numeroResistencia.textContent = `${item.resistances[element]}`;

            resistenciaItem.appendChild(elementoIcon);
            resistenciaItem.appendChild(numeroResistencia);

            resistancesContainer.appendChild(resistenciaItem);
        });

        cards.appendChild(resistancesContainer);

        newContainer.appendChild(cards);
    });
}

function loadArmorsData(armor) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const newContainerLoadArmor = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');

    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html"; 

    botaoVoltar.src = "./img/Reply Arrow.png";
    botaoVoltar.alt = "Voltar para a tela de armaduras";  
    linkVoltar.appendChild(botaoVoltar);

    newContainerLoadArmor.id = 'newContainerLoadArmor';
    newContainerLoadArmor.className = 'newContainerLoadArmor';

    apagarContainer()
    containerPrincipal.appendChild(newContainerLoadArmor);

    newContainerLoadArmor.appendChild(linkVoltar);

    const armorName = document.createElement('h1');
    armorName.textContent = armor.name;
    const armorType = document.createElement('span');
    armorType.className = 'armorType';
    armorType.textContent = `Type: ${armor.type}`;
    newContainerLoadArmor.appendChild(armorName);
    newContainerLoadArmor.appendChild(armorType);

    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'detailsContainer';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'descriptionContainer';
    const descriptionTitle = document.createElement('h2');
    descriptionTitle.textContent = "Description";
    const descriptionText = document.createElement('p');
    descriptionText.textContent = armor.skills[0] ? armor.skills[0].description : "No description available";
    descriptionContainer.appendChild(descriptionTitle);
    descriptionContainer.appendChild(descriptionText);

    const defenseContainer = document.createElement('div');
    defenseContainer.className = 'defenseContainer';
    const defenseTitle = document.createElement('h3');
    defenseTitle.textContent = "Defense";
    const defenseText = document.createElement('p');
    defenseText.textContent = `Base: ${armor.defense.base} | Max: ${armor.defense.max}`;
    defenseContainer.appendChild(defenseTitle);
    defenseContainer.appendChild(defenseText);

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

    detailsContainer.appendChild(descriptionContainer);
    detailsContainer.appendChild(defenseContainer);
    detailsContainer.appendChild(materialsContainer);

    newContainerLoadArmor.appendChild(detailsContainer);

    const resistancesContainer = document.createElement('div');
    resistancesContainer.className = 'resistancesContainer';

    const resistancesTitle = document.createElement('h3');
    resistancesTitle.textContent = "Resistance";
    const resistancesList = document.createElement('div');
    resistancesList.className = 'resistancesList';

    Object.keys(armor.resistances).forEach(element => {
        const resistanceItem = document.createElement('div');
        resistanceItem.className = 'resistanceItem';

        const elementIcon = document.createElement('img');
        elementIcon.className = 'elementIcon';
        elementIcon.src = `./img/${element}_icon.webp`;

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

    apagarContainer()
    containerPrincipal.appendChild(newContainer);

    newContainer.appendChild(linkVoltar);

    dados.forEach(item => {
        const cards = document.createElement('div');
        cards.className = "card";

        const itemSpan = document.createElement('a');
        itemSpan.textContent = item.name;
        itemSpan.href = '#'; 
        itemSpan.addEventListener('click', (e) => {
            e.preventDefault();
            loadWeaponsData(item);
        });
        cards.appendChild(itemSpan);

        const durabilityContainer = document.createElement('div');
        durabilityContainer.className = 'durabilityContainer';

        const minDurability = item.durability[0];

        const colors = {
            red: "#B14242",
            orange: "#BA683D",
            yellow: "#B79B47",
            green: "#589445",
            blue: "#5987B8",
            white: "#ADADAD",
            purple: "#AA65A2"
        };

        Object.entries(colors).forEach(([key, color]) => {
            const durabilityItem = document.createElement('div');
            durabilityItem.className = 'durabilityItem';

            const colorCircle = document.createElement('div');
            colorCircle.className = 'colorCircle';
            colorCircle.style.backgroundColor = color;

            const durabilityValue = document.createElement('span');
            durabilityValue.className = 'durabilityValue';
            durabilityValue.textContent = minDurability[key]; 

            durabilityItem.appendChild(colorCircle);
            durabilityItem.appendChild(durabilityValue);

            durabilityContainer.appendChild(durabilityItem);
        });

        cards.appendChild(durabilityContainer);

        newContainer.appendChild(cards);
    });
}

function loadWeaponsData(weapon) {
    const containerPrincipal = document.getElementById('containerPrincipal');
    const newContainerLoadWeapon = document.createElement('div');
    const linkVoltar = document.createElement('a');
    const botaoVoltar = document.createElement('img');

    linkVoltar.className = "linkVoltar";
    linkVoltar.href = "./index.html";
    botaoVoltar.src = "./img/Reply Arrow.png";
    linkVoltar.appendChild(botaoVoltar);

    newContainerLoadWeapon.id = 'newContainerLoadWeapon';
    newContainerLoadWeapon.className = 'newContainerLoadWeapon';

    apagarContainer()
    containerPrincipal.appendChild(newContainerLoadWeapon);

    newContainerLoadWeapon.appendChild(linkVoltar);

    const weaponName = document.createElement('h1');
    weaponName.textContent = weapon.name;
    newContainerLoadWeapon.appendChild(weaponName);

    const infoContainer = document.createElement('div');
    infoContainer.className = 'infoContainer';

    const materialsDiv = document.createElement('div');
    materialsDiv.className = 'materialsDiv';
    const materialsTitle = document.createElement('h3');
    materialsTitle.textContent = 'Materials';
    materialsDiv.appendChild(materialsTitle);

    const materialsToDisplay = weapon.crafting.craftable ? weapon.crafting.craftingMaterials : weapon.crafting.upgradeMaterials;
    
    materialsToDisplay.forEach(material => {
        const matItem = document.createElement('p');
        matItem.textContent = `${material.quantity}x ${material.item.name}`; 
        materialsDiv.appendChild(matItem);
    });

    const statsTable = document.createElement('div');
    statsTable.className = 'statsTable';

    const damage = document.createElement('div');
    damage.className = 'damage';
    const damageLabel = document.createElement('strong');
    damageLabel.textContent = 'Damage:';
    const damageValue = document.createElement('span');
    damageValue.textContent = weapon.attack.display;
    damage.appendChild(damageLabel);
    damage.appendChild(damageValue);

    const rarity = document.createElement('div');
    rarity.className = 'rarity';
    const rarityLabel = document.createElement('strong');
    rarityLabel.textContent = 'Rarity:';
    const rarityValue = document.createElement('span');
    rarityValue.textContent = weapon.rarity;
    rarity.appendChild(rarityLabel);
    rarity.appendChild(rarityValue);

    const slots = document.createElement('div');
    slots.className = 'slots';
    const slotsLabel = document.createElement('strong');
    slotsLabel.textContent = 'Slots:';
    const slotsValue = document.createElement('span');
    slotsValue.textContent = weapon.slots.length;
    slots.appendChild(slotsLabel);
    slots.appendChild(slotsValue);

    statsTable.appendChild(damage);
    statsTable.appendChild(rarity);
    statsTable.appendChild(slots);

    infoContainer.appendChild(materialsDiv);
    infoContainer.appendChild(statsTable);
    newContainerLoadWeapon.appendChild(infoContainer);

    const durabilityContainer = document.createElement('div');
    durabilityContainer.className = 'durabilityContainer';

    const colors = {
        red: "#B14242",
        orange: "#BA683D",
        yellow: "#B79B47",
        green: "#589445",
        blue: "#5987B8",
        white: "#ADADAD",
        purple: "#AA65A2"
    };

    const minDurabilityDiv = document.createElement('div');
    minDurabilityDiv.className = 'minDurability';
    const minDurability = weapon.durability[0];
    Object.entries(colors).forEach(([key, color]) => {
        const durabilityItem = document.createElement('div');
        durabilityItem.className = 'durabilityItem';

        const colorCircle = document.createElement('div');
        colorCircle.className = 'colorCircle';
        colorCircle.style.backgroundColor = color;

        const durabilityValue = document.createElement('span');
        durabilityValue.className = 'durabilityValue';
        durabilityValue.textContent = minDurability[key] || 0; 

        durabilityItem.appendChild(colorCircle);
        durabilityItem.appendChild(durabilityValue);
        minDurabilityDiv.appendChild(durabilityItem);
    });

    const maxDurabilityDiv = document.createElement('div');
    maxDurabilityDiv.className = 'maxDurability';
    const maxDurability = weapon.durability[weapon.durability.length - 1]; 
    Object.entries(colors).forEach(([key, color]) => {
        const durabilityItem = document.createElement('div');
        durabilityItem.className = 'durabilityItem';

        const colorCircle = document.createElement('div');
        colorCircle.className = 'colorCircle';
        colorCircle.style.backgroundColor = color;

        const durabilityValue = document.createElement('span');
        durabilityValue.className = 'durabilityValue';
        durabilityValue.textContent = maxDurability[key] || 0; 

        durabilityItem.appendChild(colorCircle);
        durabilityItem.appendChild(durabilityValue);
        maxDurabilityDiv.appendChild(durabilityItem);
    });

    const minDurabilityTitle = document.createElement('h3');
    minDurabilityTitle.textContent = 'Durability Min.';
    const maxDurabilityTitle = document.createElement('h3');
    maxDurabilityTitle.textContent = 'Durability Max.';

    durabilityContainer.appendChild(minDurabilityTitle);
    durabilityContainer.appendChild(minDurabilityDiv);
    durabilityContainer.appendChild(maxDurabilityTitle);
    durabilityContainer.appendChild(maxDurabilityDiv);

    newContainerLoadWeapon.appendChild(durabilityContainer);
}

async function telaMonstros() {
    const dadosMonstros = await pesquisarDados("https://mhw-db.com/monsters");
    ReplaceDadosMonstros(dadosMonstros);
}

async function telaArmas() {
    const dadosArmas = await pesquisarDados("https://mhw-db.com/weapons");
    ReplaceDadosArmas(dadosArmas); 
}

async function telaArmaduras() {
    const dadosArmaduras = await pesquisarDados("https://mhw-db.com/armor");
    ReplaceDadosArmaduras(dadosArmaduras); 
}

async function redirecionamentoBarraLateral(tipo) {
    const containerPrincipal = document.getElementById('containerPrincipal');

    containerPrincipal.innerHTML = "";

    const containerLoading = document.createElement('div');
    containerLoading.id = "containerLoading";

    const textLoading = document.createElement('p');
    textLoading.id = "textLoading";
    textLoading.textContent = "Loading...";

    containerLoading.appendChild(textLoading);
    containerPrincipal.appendChild(containerLoading); 

    if (tipo === 'monstros') {
        await telaMonstros();
    } else if (tipo === 'armas') {
        await telaArmas();
    } else if (tipo === 'armaduras') {
        await telaArmaduras();
    }

    containerLoading.remove();
}

linkMonstros.addEventListener('click', (event) => {
    event.preventDefault(); 
    redirecionamentoBarraLateral("monstros");
});

linkArmaduras.addEventListener('click', (event) => {
    event.preventDefault();
    redirecionamentoBarraLateral("armaduras");
});

linkArmas.addEventListener('click', (event) => {
    event.preventDefault();
    redirecionamentoBarraLateral("armas");
});



lateralMonstros.addEventListener('click', (event) => {
    event.preventDefault(); 
    redirecionamentoBarraLateral("monstros");
});

lateralArmaduras.addEventListener('click', (event) => {
    event.preventDefault();
    redirecionamentoBarraLateral("armaduras");
});

lateralArmas.addEventListener('click', (event) => {
    event.preventDefault();
    redirecionamentoBarraLateral("armas");
});