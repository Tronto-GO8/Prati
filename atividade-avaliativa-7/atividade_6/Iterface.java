package exercico_avaliativo_8.atividade_6;

import java.math.BigDecimal;
import java.util.List;

public class Iterface {
    public static void main(String[] args) {
        Produtos p1 = new Produtos("Camiseta", new Dinheiro(new BigDecimal("80.00"), Moeda.BRL));
        Produtos p2 = new Produtos("Tênis", new Dinheiro(new BigDecimal("300.00"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(List.of(), BigDecimal.ZERO)
                .adicionarItem(new ItemCarrinho(p1, 2))
                .adicionarItem(new ItemCarrinho(p2, 1));

        System.out.println("Carrinho inicial: " + carrinho.getTotal());

        Carrinho comDesconto = carrinho.aplicarCupom(new BigDecimal("0.20"));
        System.out.println("Com desconto de 20%: " + comDesconto.getTotal());

        // Teste de erro (cupom inválido)
        try {
            carrinho.aplicarCupom(new BigDecimal("0.50"));
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
