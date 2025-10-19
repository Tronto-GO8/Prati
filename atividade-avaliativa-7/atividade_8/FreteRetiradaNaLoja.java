package exercico_avaliativo_8.atividade_8;

import java.math.BigDecimal;

public class FreteRetiradaNaLoja implements CalculadoraFrete{
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return BigDecimal.ZERO;
    }
}
