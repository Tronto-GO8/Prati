package exercico_avaliativo_8.atividade_3;

import java.util.ArrayList;
import java.util.List;
import java.math.BigDecimal;

public class Interface {
    public static void main(String[] args) {
        List<Funcionario> funcionarios = new ArrayList<>();

        funcionarios.add(new Gerente("Pablo", new BigDecimal("12000")));
        funcionarios.add(new Desenvolvedor("Marina", new BigDecimal("8000")));
        funcionarios.add(new Desenvolvedor("Lucas", new BigDecimal("5000")));
        funcionarios.add(new Gerente("Rafaela", new BigDecimal("15000")));

        for (Funcionario f : funcionarios) {
            System.out.println(f.getNome() + " - Bônus: R$" + f.calcularBonus());
        }
    }
}
