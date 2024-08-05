
//criar menu salgados
document.addEventListener("DOMContentLoaded", () => {//adiciona um evento que só será acionado quando a página inteira carregar
    const dishes = [//adiciona uma constante em que ira armazenar o menu
        { name: "Frango com Catupiry", description: "Salgado assadinho feito com frango e requeijão,receita de família da vovó juju :). Tempo de preparo 2 min :(" },
        { name: "Pizza", description: "Presunto e Queijo" },
        { name: "Especial", description: "com abacate bem, para ficar forte" },
        //name=nome do prato, description a descrição do prato
    ];

    const dishList = document.getElementById("dish-list");//aqui adiciona uma constante que vai adicionar um elemento chamado "dish-list"

    dishes.forEach(dish => {//isso vai fazer com que o codigo se "repita" até acabar
        const listItem = document.createElement("li");//cria um elemento que ia adicionar uma lista
        listItem.innerHTML = `<h3>${dish.name}</h3><p>${dish.description}</p>`;//aqui faz com que o name seja adicionado um titulo de nivel 3 e o paragrafo seja a descrição
        dishList.appendChild(listItem);
    });
});


//criar menu doce
document.addEventListener("DOMContentLoaded", () => {
    const dishes = [
        { name: "leite condeçado", description: "leite condenado"},
        { name: "ultra mega Especial", description: "é igual o primeiro doce mas vai abacate"},
    ];

    const dishList = document.getElementById("dish-list2");

    dishes.forEach(dish => {
        const listItem = document.createElement("li");//cria um elemento
        listItem.innerHTML = `<h3>${dish.name}</h3><p>${dish.description}</p>`;
        dishList.appendChild(listItem);
    });
});