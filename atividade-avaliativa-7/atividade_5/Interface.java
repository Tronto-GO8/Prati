package exercico_avaliativo_8.atividade_5;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Interface {
    public static void main(String[] args) {
        List<FormaPagamento> pagamentos = new ArrayList<>();

        pagamentos.add(new CartaoCredito("1234567890123456")); // válido
        pagamentos.add(new Boleto("12345678901234567890123456789012345678901234567")); // válido
        pagamentos.add(new Pix("email@exemplo.com")); // válido

        pagamentos.add(new CartaoCredito("123")); // inválido (teste de erro)
        pagamentos.add(new Pix("pixinvalido#")); // inválido

        for (FormaPagamento p : pagamentos) {
            try {
                p.processarPagamento(new BigDecimal("250.00"));
            } catch (PagamentoInvalidoException e) {
                System.out.println("Erro ao processar " + p.getClass().getSimpleName() + ": " + e.getMessage());
            }
            System.out.println();
        }
    }
}
