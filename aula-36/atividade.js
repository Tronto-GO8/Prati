let pesquisar_filme = document.getElementById("requerir");
let informacoes = document.getElementById("informacoes");

pesquisar_filme.addEventListener("click", () => {
    requerirFilme();
});

async function requerirFilme() {
    let kay = '27e27952';
    let filme_procurado = document.getElementById("filme-requerido").value.trim();

    if (!filme_procurado) {
        informacoes.textContent = "Digite o nome de um filme.";
        return;
    }

    let requisicao = `https://www.omdbapi.com/?t=${filme_procurado}&apikey=${kay}`;

    try {
        const response = await fetch(requisicao); // método GET por padrão

        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const data = await response.json();

        if (data.response === "False") {
            informacoes.textContent = "Filme não encontrado.";
        } else {
            informacoes.innerHTML = `
                <h2>${data.Title}</h2>
                <p><strong>Ano:</strong> ${data.Year}</p>
                <p><strong>Gênero:</strong> ${data.Genre}</p>
                <img src="${data.Poster}" alt="Pôster do filme" style="max-width:200px">
            `;
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        informacoes.textContent = "Erro ao buscar informações do filme.";
    }
}


/*=======================
   TIPOS DE FUNÇÕES ASINC
  ======================*/

/*
🔹 1. Promise tradicional com .then() e .catch()
javascript
Copiar
Editar
function promessaTradicional() {
  return new Promise((resolve, reject) => {
    const sucesso = true;

    setTimeout(() => {
      if (sucesso) {
        resolve("Operação bem-sucedida!");
      } else {
        reject("Algo deu errado...");
      }
    }, 1000);
  });
}

promessaTradicional()
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));
🔹 2. Async/Await (ES2017+)
javascript
Copiar
Editar
function promessaComum() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados carregados com async/await!");
    }, 1000);
  });
}

async function executarAsyncAwait() {
  try {
    const resultado = await promessaComum();
    console.log(resultado);
  } catch (erro) {
    console.error(erro);
  }
}

executarAsyncAwait();
🔹 3. Promise encadeada (Chained Promises)
javascript
Copiar
Editar
function passo1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Passo 1 concluído"), 1000);
  });
}

function passo2(msgAnterior) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${msgAnterior} → Passo 2 concluído`), 1000);
  });
}

function passo3(msgAnterior) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${msgAnterior} → Passo 3 concluído`), 1000);
  });
}

passo1()
  .then(passo2)
  .then(passo3)
  .then(resultadoFinal => console.log(resultadoFinal))
  .catch(erro => console.error("Erro na cadeia:", erro));
🔹 4. Promise.all (executa várias promessas em paralelo)
javascript
Copiar
Editar
function criarPromise(nome, tempo) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${nome} finalizada`), tempo);
  });
}

Promise.all([
  criarPromise("Tarefa A", 1000),
  criarPromise("Tarefa B", 1500),
  criarPromise("Tarefa C", 500)
]).then(resultados => {
  console.log("Todas as tarefas concluídas:");
  console.log(resultados);
});
🔹 5. Promise.race (primeira que resolver/rejeitar)
javascript
Copiar
Editar
function tarefaRapidaOuLenta(nome, tempo) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${nome} venceu a corrida`), tempo);
  });
}

Promise.race([
  tarefaRapidaOuLenta("Rápida", 500),
  tarefaRapidaOuLenta("Lenta", 1500)
]).then(resultado => {
  console.log(resultado);
});
*/