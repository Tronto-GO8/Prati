import ProductCard from "./ProductCard";
import { products } from "../utilitarios/produtos";
import styles from "../css/Produtos.module.css";

function Produtos({isLoading, adicionarItem }) {
  return (
    <main className={styles.produtos}>
      {products.map(produto => (
        <ProductCard
          key={produto.id}
          product={produto}
          isloading={isLoading}
          adicionarItem={adicionarItem}
        />
      ))}
    </main>
  );
}

export default Produtos;