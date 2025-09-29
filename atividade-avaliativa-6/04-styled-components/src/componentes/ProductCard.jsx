import styled from "styled-components";
import Skeleton from "./Squeleton";

const Card = styled.div`
  background-color: var(--cor-principal);
  color: var(--cor-texto);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: var(--cor-sombra);
  min-height: 350px;
  max-height: 350px;
  display: grid;
  grid-template-rows: 50% 50%;
  border: #111111 solid 1px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #ffffff;

  img {
    aspect-ratio: 1 / 1;
    width: 70%;
    height: 100%;
    object-fit: cover;
  }
`;

const Dados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px;
  padding-top: 10px;
  gap: 0.5rem; /* espaço entre elementos */
`;

const TextoAvaliacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: bold;
  }
`;

const Tag = styled.div`
  span {
    background: #facc15;
    color: #111111;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const Botoes = styled.div`
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

        <TextoAvaliacao>
          <p aria-label={`O valor do ${product.title} é ${product.price}`}>
            {product.price}
          </p>

          <div aria-label={`A avaliação do produto é ${product.rating}`}>
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
          </div>
        </TextoAvaliacao>

        <Tag>
          {product.tag && <span>{product.tag}</span>}
        </Tag>

        <Botoes>
          <button data-variant="solid" onClick={adicionarItem}>
            Adicionar
          </button>
        </Botoes>
      </Dados>
    </Card>
  );
}

export default ProductCard;
