import Skeleton from "./Squeleton";
import "../css/ProductCard.css"
import "../css/buttons.css"

function ProductCard({ product, isloading, adicionarItem }) {
  if (isloading) {
    return (
      <div className="product-card">

        <div className="div-img">
          <Skeleton width = "100%" height = "100%"/>
        </div>

        <div className="div-dados">
          <Skeleton width = "100%" height = "20%"/>
          <Skeleton width = "100%" height = "70%"/>
        </div>
      </div>
    )
  }
  return (
    <div className="product-card">
      {/* Imagem 1:1 com espaço reservado */}

      <div aria-label={`Adicionar ${product.title} ao carrinho`} className="div-img">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="div-dados">

        <h2>{product.title}</h2>

        {/* Preço */}
        <div className="div-texto-avalidacao">
          <p aria-label={`O valor do ${product.title} é ${product.price}`}>{product.price}</p>

          {/* Rating (★) */}
          <div aria-label={`A avaliação do produto é ${product.rating}`}>
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
          </div>
        </div>

        {/* Tag */}
        <div className="tag">
          {product.tag && <span>{product.tag}</span>}
        </div>

        {/* Botões (solid / outline / ghost → variante tratada no CSS depois) */}
        <div className="div-botao">
          <button data-variant="solid" onClick={adicionarItem}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
