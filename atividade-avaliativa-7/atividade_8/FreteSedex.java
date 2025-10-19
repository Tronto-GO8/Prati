package exercico_avaliativo_8.atividade_8;

import java.math.BigDecimal;

public class FreteSedex implements CalculadoraFrete{
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("30.00"); // fixo, por exemplo
    }
}
