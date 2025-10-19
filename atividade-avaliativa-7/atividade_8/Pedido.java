package exercico_avaliativo_8.atividade_8;

import java.math.BigDecimal;

public class Pedido {
    private String cep;
    private BigDecimal valorTotal;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(String cep, BigDecimal valorTotal, CalculadoraFrete estrategiaFrete) {
        if (cep == null || !cep.matches("\\d{8}")) {
            throw new CepInvalidoException("CEP inválido! Use apenas 8 números, sem traços.");
        }
        this.cep = cep;
        this.valorTotal = valorTotal;
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }

    public void setEstrategiaFrete(CalculadoraFrete novaEstrategia) {
        this.estrategiaFrete = novaEstrategia;
    }

    public String getCep() {
        return cep;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }
}
