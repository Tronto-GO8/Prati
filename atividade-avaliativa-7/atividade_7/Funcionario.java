package exercico_avaliativo_8.atividade_7;


import java.math.BigDecimal;

public class Funcionario implements Identificavel<Integer> {
    private final Integer id;
    private String nome;
    private BigDecimal salario;

    public Funcionario(Integer id, String nome, BigDecimal salario) {
        this.id = id;
        this.nome = nome;
        this.salario = salario;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public BigDecimal getSalario() {
        return salario;
    }

    @Override
    public String toString() {
        return "Funcionario{id=" + id + ", nome='" + nome + "', salario=" + salario + "}";
    }
}