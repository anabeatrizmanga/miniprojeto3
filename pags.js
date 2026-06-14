function criarCard(produto) {
    return `
        <div class="card">
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Preço:</strong> R$ ${produto.preco}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
        </div>
    `;
}

const produtos = [
    {
        nome: "Açaí",
        preco: 25.90,
        categoria: "Sobremesa"
    },
    {
        nome: "Sorvete",
        preco: 12.50,
        categoria: "Gelado"
    },
    {
        nome: "Chup-Chup",
        preco: 5.00,
        categoria: "Gelado"
    },
    {
        nome: "Milk Shake",
        preco: 18.00,
        categoria: "Bebida"
    },
    {
        nome: "Picolé",
        preco: 7.50,
        categoria: "Gelado"
    }
];

const container = document.querySelector("#container");

for (let ind = 0; ind < produtos.length; ind++) {
    container.innerHTML += criarCard(produtos[ind]);
}

const botao = document.querySelector("#exportar");
const saida = document.querySelector("#saida");

botao.addEventListener("click", function () {
    console.log(JSON.stringify(produtos));
    saida.textContent = JSON.stringify(produtos, null, 2);
});