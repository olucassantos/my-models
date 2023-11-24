import dados from "./modelos.json" assert { type: "json" };

// Para cada item do array, vai criar um elemento dentro da div de modelos

dados.forEach((modelo) => {
    // Cria um elemento div e guarda na variavel div
    const div = document.createElement("div");

    // Adicionar a classe modelo na div
    div.classList.add("modelo");

    // Adicionar a classe masc ou fem na div
    if (modelo.genero == "masculino") {
        div.classList.add("masc");
    } else {
        div.classList.add("femi");
    }

    // Adiciona o conteudo na div
    div.innerHTML = `
        <h3>${modelo.nome}</h3>
        <p>${modelo.idade} anos</p>
        <p>${modelo.altura}m</p>
        <p>${modelo.peso}kg</p>
        <p>${modelo.nacionalidade}</p>
    `;

    // Adiciona a div na div de modelos
    document.querySelector(".modelos").append(div);
});