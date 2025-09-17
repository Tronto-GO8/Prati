function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Imagem 1:1 com espaço reservado */}
      <div aria-label={`Adicionar ${product.title} ao carrinho`}>
        <img src={product.image} alt={product.title} loading="lazy"/>
      </div>

      {/* Título (até 2 linhas com ellipsis → feito no CSS depois) */}
      <h2>{product.title}</h2>

      {/* Preço */}
      <p aria-label={`O valor do ${product.title} é ${product.price}`}>{product.price}</p>

      {/* Rating (★) */}
      <div aria-label={`A avaliação do produto é ${product.rating}`}>
        {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
      </div>

      {/* Tag */}
      {product.tag && <span>{product.tag}</span>}

      {/* Botões (solid / outline / ghost → variante tratada no CSS depois) */}
      <div>
        <button data-variant="solid">Adicionar</button>
        <button data-variant="outline">Adicionar</button>
        <button data-variant="ghost">Adicionar</button>
      </div>
    </div>
  );
}

export default ProductCard;
