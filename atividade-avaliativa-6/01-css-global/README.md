# Projeto 01 - CSS Global

## Descrição
Este projeto implementa uma tela de produtos usando **CSS Global**.  
Todos os estilos estão centralizados em um arquivo `estiloglobal.css` e aplicados globalmente.

## Estrutura
- `src/componentes/Navbar.jsx` → Navbar com toggle de tema e badge do carrinho.
- `src/componentes/ProductCard.jsx` → Card de produto com imagem, título, preço, rating, tag e botão.
- `src/componentes/Skeleton.jsx` → Componente de carregamento (skeleton) para produtos.
- `src/01-css-global/estiloglobal.css` → Estilos globais para toda a aplicação.

## Tecnologias
- React
- CSS Global
- Local Storage para persistência do tema (claro/escuro)

## Como rodar
1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:5173`