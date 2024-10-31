let carrinho = [];

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item, preco });
    alert(`${item} adicionado ao carrinho!`);
}

function mostrarCarrinho() {
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = '';
    let total = 0;

    carrinho.forEach((produto, index) => {
        total += produto.preco;
        carrinhoDiv.innerHTML += `<p>${produto.item} - R$ ${produto.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button></p>`;
    });

    document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    mostrarCarrinho();
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
    } else {
        alert("Compra finalizada! Obrigado pela preferência!");
        carrinho = [];
        mostrarCarrinho();
    }
}

// Mostrar carrinho na página do carrinho
if (document.getElementById('carrinho')) {
    mostrarCarrinho();
}
