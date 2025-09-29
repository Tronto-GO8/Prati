import Skeleton from "./Squeleton";
import Button from "./Button";
function ProductCard({ product, isloading, adicionarItem }) {
  if (isloading) {
    return (
      <div className="bg-principal-light dark:bg-principal-dark text-texto-light dark:text-texto-dark p-4 rounded-lg shadow transition hover:-translate-y-1 hover:shadow-forte grid grid-rows-2 min-w-[290px] max-w-[290px] min-h-[350px] max-h-[350px] border border-black">

        <div className="flex items-center justify-center p-1 bg-white">
          <Skeleton width = "100%" height = "100%"/>
        </div>

        <div className="flex flex-col justify-between p-2 pt-3">
          <Skeleton width = "100%" height = "20%"/>
          <Skeleton width = "100%" height = "70%"/>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-principal-light dark:bg-principal-dark text-texto-light dark:text-texto-dark p-4 rounded-lg shadow transition hover:-translate-y-1 hover:shadow-forte grid grid-rows-2 min-w-[290px] max-w-[290px] min-h-[350px] max-h-[350px] border border-black">
      {/* Imagem 1:1 com espaço reservado */}

      <div aria-label={`Adicionar ${product.title} ao carrinho`} className="flex items-center justify-center p-1 bg-white">
        <img src={product.image} alt={product.title} loading="lazy" className="aspect-square w-[70%] h-full object-cover" />
      </div>

      <div className="flex flex-col justify-between p-2 pt-3">

        <h2 className="line-clamp-2">{product.title}</h2>

        {/* Preço */}
        <div className="flex flex-col text-sm">
          <p aria-label={`O valor do ${product.title} é ${product.price}`}>{product.price}</p>

          {/* Rating (★) */}
          <div aria-label={`A avaliação do produto é ${product.rating}`}>
            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
          </div>
        </div>

        {/* Tag */}
        <div className="text-xs">
          {product.tag && <span >{product.tag}</span>}
        </div>

        {/* Botões (solid / outline / ghost → variante tratada no CSS depois) */}
        <div className="rounded text-white">
          <Button onClick={adicionarItem}>Adicionar</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
