package exercico_avaliativo_8.atividade_3;

import java.math.BigDecimal;

public class Funcionario {
    protected String nome;
    protected BigDecimal salario;

    Funcionario(String nome, BigDecimal salario){
        if(nome == null || nome.isBlank()){
            throw  new IllegalArgumentException("nome não pode ser nulo ou estar vazio");
        }
        if(salario.compareTo(BigDecimal.ZERO) <= 0){
            throw new IllegalArgumentException("O valor não pode ser igual ou menor que zero");
        }
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    public BigDecimal calcularBonus(){
        return BigDecimal.ZERO;
    }
}
