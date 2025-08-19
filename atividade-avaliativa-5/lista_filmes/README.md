# Lista de Filmes - Aplicação React

Esta aplicação foi desenvolvida em **React** e consome a **API do OMDb** para permitir que usuários busquem filmes, vejam detalhes e montem uma lista de favoritos. O projeto inclui paginação, armazenamento de favoritos no `localStorage` e tratamento de erros.

---

## Visão Geral

O objetivo do projeto é criar uma aplicação que permita:

- Pesquisar filmes por nome.
- Visualizar detalhes completos de cada filme, incluindo diretor, elenco, sinopse e avaliação.
- Adicionar ou remover filmes de uma lista de favoritos persistida no `localStorage`.
- Navegar pelas páginas de resultados quando há muitos filmes.

A aplicação é composta por três páginas principais:

1. **Home** – página de busca e exibição de resultados.
2. **Detalhes do Filme** – página que mostra informações completas do filme selecionado.
3. **Favoritos** – lista de filmes adicionados aos favoritos.

---

## Funcionalidades

1. **Página de Busca**
   - Campo de texto para digitar o nome do filme.
   - Lista de resultados com pôster, título, ano e botão para ver detalhes.
   - Paginação para navegar entre páginas de resultados.

2. **Página de Detalhes**
   - Exibição completa das informações do filme.
   - Botão para adicionar o filme à lista de favoritos.

3. **Lista de Favoritos**
   - Lista de filmes favoritos.
   - Botão para remover filmes da lista.
   - Favoritos persistidos no `localStorage`.

4. **Tratamento de Erros e Loading**
   - Exibe mensagens de erro quando a API retorna falha ou quando o campo de busca está vazio.
   - Indicação de carregamento enquanto a requisição é processada.

---

## Configuração Local

Para rodar a aplicação localmente, siga os passos:

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <PASTA_DO_PROJETO>

2. **Obter a chave da API OMDb:**

    Acesse OMDb API e crie uma conta gratuita para receber sua chave (API Key).
    Adicione a chave no código:
    No arquivo src/pages/home.jsx e src/pages/detalheFilmes.jsx, substitua a variável kay pelo valor da sua chave da API:
    const kay = 'SUA_CHAVE_AQUI';

3. **Rodar:**
    instale as dependencias:
    npm install

    Inicie a aplicação:
    npm run dev
    
    Acesse no navegador:
    Abra http://localhost:5173

**Estrutura do Projeto:**
src/
 ├─ pages/
 │   ├─ home.jsx
 │   ├─ detalheFilmes.jsx
 │   └─ favoritos.jsx
 ├─ contextos/
 │   └─ favoritos_context.jsx
 ├─ style.css/
 │   ├─ Home.css
 │   ├─ DetalheFilmes.css
 │   └─ Favoritos.css
 └─ App.jsx

**Observações:**

1) É necessário ter Node.js instalado.

2) As páginas Home e Detalhes dependem da variável kay para fazer requisições à API e funcionar corretamente.

3) O localStorage é utilizado para salvar a lista de favoritos, permitindo que os dados sejam mantidos mesmo após recarregar a página.


