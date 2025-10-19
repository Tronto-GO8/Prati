package exercico_avaliativo_8.atividade_6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;


public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda){
        if(valor == null || moeda == null){
            throw new IllegalArgumentException("Valor e moedas não podem ser nulos");
        }
        if(valor.compareTo(BigDecimal.ZERO) < 0){
            throw new IllegalArgumentException("Valor não pode ser menor que 0");
        }
        this.moeda = moeda;
        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN);
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    // Operação de soma retorna NOVO Dinheiro
    public Dinheiro adicionar(Dinheiro outro) {
        validarMesmaMoeda(outro);
        return new Dinheiro(this.valor.add(outro.valor), this.moeda);
    }

    // Operação de multiplicação
    public Dinheiro multiplicar(BigDecimal fator) {
        return new Dinheiro(this.valor.multiply(fator), this.moeda);
    }

    private void validarMesmaMoeda(Dinheiro outro) {
        if (!this.moeda.equals(outro.moeda))
            throw new IllegalArgumentException("As moedas devem ser iguais.");
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dinheiro)) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.equals(dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return moeda + " " + valor;
    }
}
