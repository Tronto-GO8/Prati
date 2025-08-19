// Referências aos elementos do DOM
let campoItem = document.getElementById("itens");
let listaExibicao = document.getElementById("lista");
let botaoApagarLista = document.getElementById("apagar");
let botaoAdicionarItem = document.getElementById("adicionar");
let filtrarPorCategoria = document.getElementById("filtroCategoria");
let ordenar = document.getElementById("Ordenacao");
let quantidadeDeItens = document.getElementById("quantidadeDeItens")

// Lista de itens
let listaDeItens = [];

// Lista filtrada
filtrarPorCategoria.addEventListener("change", () => {
    let filtro_celecionado = filtrarPorCategoria.value;
    let lista_filtrada
    if (filtro_celecionado === "todos") {
        lista_filtrada = listaDeItens
    } else {
        lista_filtrada = listaDeItens.filter(item => item.status === filtro_celecionado);
    }
    renderizarLista(lista_filtrada)
})

// Ordenação
ordenar.addEventListener("change", () =>{
    let ordenador = ordenar.value;
    let lista_ordenada = listaDeItens;

    if(ordenador === "aufabetico"){
        lista_ordenada.sort((a,b) => a.nome.localeCompare(b.nome));
    }else if (ordenador === "status") {
        lista_ordenada.sort((a, b) => a.status.localeCompare(b.status));
    }
    renderizarLista(lista_ordenada)
});


// Evento para adicionar item
botaoAdicionarItem.addEventListener("click", adicionarItem);

window.addEventListener("DOMContentLoaded", () => {
    const dados = localStorage.getItem("listaCompras")
    if (dados) {
        listaDeItens = JSON.parse(dados);
        renderizarLista();
    }
});

// Função para salvar os dados no localStorage
function salvarListaNoStorage() {
    localStorage.setItem("listaCompras", JSON.stringify(listaDeItens));
}

// Função quantidade de itens
function quantidadeItens() {
    quantidadeDeItens.textContent = listaDeItens.length
}

// Função para renderizar os itens na tela
function renderizarLista(lista = listaDeItens) {
    listaExibicao.innerHTML = '';

    lista.forEach((item, indice) => {
        const elementoLista = document.createElement("li");

        const textoItem = document.createElement("span");
        textoItem.textContent = item.nome;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.title = "Remover Item";
        botaoRemover.addEventListener("click", () => removerItem(indice));

        const botaostatus = document.createElement("button");
        botaostatus.textContent = item.status
        botaostatus.title = "Comprar item";
        botaostatus.addEventListener("click", () => {
            if (lista[indice].status === "pendente") {
                lista[indice].status = "comprado"
            } else {
                lista[indice].status = "pendente"
            }
            salvarListaNoStorage();
            renderizarLista();
        })


        elementoLista.append(textoItem, botaoRemover, botaostatus);
        listaExibicao.appendChild(elementoLista);
    });
    quantidadeItens()
}


// Função para remover item da lista
function removerItem(indice) {
    listaDeItens.splice(indice, 1);
    salvarListaNoStorage();
    renderizarLista();
    quantidadeItens();
}

// Função para adicionar item à lista
function adicionarItem(evento) {
    evento.preventDefault();

    let novoItem = campoItem.value.trim();
    if (!novoItem) return;

    listaDeItens.push({ "nome": novoItem, "status": "pendente" });
    salvarListaNoStorage();
    renderizarLista();
    quantidadeItens();

    campoItem.value = '';
}

botaoApagarLista.addEventListener("click", () => {
    if (confirm("Deseja apagar todos os dados?")) {
        listaDeItens = []
        salvarListaNoStorage();
        renderizarLista();
        quantidadeItens();
    }
});

// Marcar como comprado
// Funcionalidades

// Marcar como comprado - Salvar no locar stórege V
// Contador de itens - mostrar quantos itens tem na lista, mostrar em tempo real V
// A dicionar filtros para lista, "comprados" e "pendentes" V
// permita ordenar alfabéticamente ou por status

// status = "comprado" ou "pendente" V
//filtro = "alfabético", "pendente"
//ordenar = "alfabético".