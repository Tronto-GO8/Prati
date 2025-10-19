package exercico_avaliativo_8.atividade_8;

import java.math.BigDecimal;

public class Interface {
    public static void main(String[] args) {
        // Estratégias normais
        CalculadoraFrete sedex = new FreteSedex();
        CalculadoraFrete pac = new FretePac();
        CalculadoraFrete retirada = new FreteRetiradaNaLoja();

        // Estratégia via lambda → frete grátis acima de R$200
        CalculadoraFrete fretePromocional = pedido ->
                pedido.getValorTotal().compareTo(new BigDecimal("200")) >= 0
                        ? BigDecimal.ZERO
                        : new BigDecimal("25.00");

        // Criando pedido
        Pedido pedido = new Pedido("12345678", new BigDecimal("180"), sedex);

        System.out.println("Frete (Sedex): R$" + pedido.calcularFrete());

        // Trocando estratégia em tempo de execução
        pedido.setEstrategiaFrete(pac);
        System.out.println("Frete (PAC): R$" + pedido.calcularFrete());

        pedido.setEstrategiaFrete(retirada);
        System.out.println("Frete (Retirada na loja): R$" + pedido.calcularFrete());

        pedido.setEstrategiaFrete(fretePromocional);
        System.out.println("Frete (Promocional): R$" + pedido.calcularFrete());
    }
}
