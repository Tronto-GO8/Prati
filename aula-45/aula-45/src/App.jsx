import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Criar um componente que exibe as informaç~pes de um produto.
// O componente pai (APP) vai passar os dados do produto ( nome, proço, descrição) 
// como props para o componente filho (Produto), e o componente Filho vai exibir essas informações.
function Produto(props){
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Preço: R$ {props.preco}</p>
      <p>{props.descricao}</p>
    </div>
  );
}

function App() {
  <Informacoes nome='algo' proco='10.50' descricao='algo muito ultil para algo'/>

  return (
    <>
  
    </>
  )
}

export default App
