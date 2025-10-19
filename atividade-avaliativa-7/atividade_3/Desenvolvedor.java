package exercico_avaliativo_8.atividade_3;

import java.math.BigDecimal;

public class Desenvolvedor extends Funcionario {
    Desenvolvedor(String nome, BigDecimal salario){
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus(){
        return salario.multiply(new BigDecimal("0.20"));
    }
}
