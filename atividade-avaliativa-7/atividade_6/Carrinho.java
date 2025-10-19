package exercico_avaliativo_8.atividade_6;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public final class Carrinho {
    private final List<ItemCarrinho> itens;
    private final BigDecimal descontoPercentual;

    public Carrinho(List<ItemCarrinho> itens, BigDecimal descontoPercentual){
        if (descontoPercentual == null)
            descontoPercentual = BigDecimal.ZERO;

        if (descontoPercentual.compareTo(new BigDecimal("0.30")) > 0)
            throw new IllegalArgumentException("O desconto não pode ultrapassar 30%.");

        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
        this.descontoPercentual = descontoPercentual;
    }
    public Carrinho adicionarItem(ItemCarrinho item) {
        List<ItemCarrinho> novos = new ArrayList<>(itens);
        novos.add(item);
        return new Carrinho(novos, descontoPercentual);
    }

    public Carrinho removerItem(ItemCarrinho item) {
        List<ItemCarrinho> novos = new ArrayList<>(itens);
        novos.remove(item);
        return new Carrinho(novos, descontoPercentual);
    }

    public Carrinho aplicarCupom(BigDecimal desconto) {
        return new Carrinho(itens, desconto);
    }

    public Dinheiro getTotal() {
        BigDecimal soma = BigDecimal.ZERO;
        for (ItemCarrinho item : itens) {
            soma = soma.add(item.getTotal().getValor());
        }
        BigDecimal totalComDesconto = soma.multiply(BigDecimal.ONE.subtract(descontoPercentual))
                .setScale(2, BigDecimal.ROUND_HALF_EVEN);
        return new Dinheiro(totalComDesconto, Moeda.BRL);
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    @Override
    public String toString() {
        return "Carrinho{itens=" + itens.size() + ", total=" + getTotal() + "}";
    }
}
