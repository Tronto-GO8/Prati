import styled from "styled-components";
import Button from "./Button";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;

    .botoes {
    display: flex;
    gap: 5px;
}
    button:focus {
  outline: 3px solid #000000;  
  outline-offset: 2px;     
}
`;

export default function Navbar({ toggleTheme, itensCarrinho }) {
  return (
    <Nav>
      <h1>Minha Logo</h1>
      <div className="botoes">
        <button variant="solid" onClick={toggleTheme}>Mudar tema</button>
        <button variant="solid" disabled>Carrinho {itensCarrinho}</button>
      </div>
    </Nav>
  );
}
