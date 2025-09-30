import styled from "styled-components";
import Skeleton from "./Squeleton";
import Button from "./Button";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  width: 290px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

const ImgWrapper = styled.div`
  flex-shrink: 0;
  height: 40%; /* 40% da altura do Card */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 5px;
  overflow: hidden; /* evita que a imagem ultrapasse */
  border-radius: 6px; /* opcional, arredonda junto do card */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* mantém proporção sem cortar */
    max-width: 100%;
    max-height: 100%;
  }
`;

const Dados = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden; 
  padding: 0.25rem;
  
  h2 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 0.25rem 0; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin: 0.25rem 0;
    font-weight: 500;
  }

  div {
    margin: 0.25rem 0;
  }
`;

const Botoes = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
`;

function ProductCard({ product, isloading, adicionarItem }) {
  if (isloading) {
    return (
      <Card>
        <ImgWrapper>
          <Skeleton width="100%" height="100%" />
        </ImgWrapper>

        <Dados>
          <Skeleton width="100%" height="20%" />
          <Skeleton width="100%" height="70%" />
        </Dados>
      </Card>
    );
  }

  return (
    <Card>
      <ImgWrapper aria-label={`Adicionar ${product.title} ao carrinho`}>
        <img src={product.image} alt={product.title} loading="lazy" />
      </ImgWrapper>

      <Dados>
        <h2>{product.title}</h2>

        <p aria-label={`O valor do ${product.title} é ${product.price}`}>
          {product.price}
        </p>

        <div aria-label={`A avaliação do produto é ${product.rating}`}>
          {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
        </div>

        <div>
          {product.tag && <span>{product.tag}</span>}
        </div>

        <Botoes>
          <Button data-variant="solid" onClick={adicionarItem}>
            Adicionar
          </Button>
        </Botoes>
      </Dados>
    </Card>
  );
}

export default ProductCard;
