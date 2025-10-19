package exercico_avaliativo_8.atividade_6;

import java.math.BigDecimal;

public class ItemCarrinho {
    private final Produtos produto;
    private final int quantidade;

    public ItemCarrinho(Produtos produto, int quantidade) {
        if (quantidade <= 0)
            throw new IllegalArgumentException("A quantidade deve ser maior que zero.");
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produtos getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Dinheiro getTotal() {
        return produto.getPreco().multiplicar(BigDecimal.valueOf(quantidade));
    }
}
