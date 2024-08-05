alert = aiiiiii
//criar menu salgados
document.addEventListener("DOMContentLoaded", () => {
    const dishes = [
        { name: "Frango com Catupiry", description: "Salgado frito feito com frango e requeijão,receita de família da vovó juju :). Tempo de preparo 2 min :(" },
        { name: "Pizza", description: "Presunto e Queijo" },
        { name: "Especial", description: "com abacate bem, para ficar forte" },
    ];

    const dishList = document.getElementById("dish-list");

    dishes.forEach(dish => {
        const listItem = document.createElement("li");//cria um elemento
        listItem.innerHTML = `<h3>${dish.name}</h3><p>${dish.description}</p>`;
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