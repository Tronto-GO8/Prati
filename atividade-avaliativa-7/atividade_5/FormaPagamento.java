package exercico_avaliativo_8.atividade_5;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract void ValidarPagamento() throws PagamentoInvalidoException;

    public void processarPagamento(BigDecimal valor) throws  PagamentoInvalidoException{
        if (valor == null || valor.compareTo(BigDecimal.ZERO) <= 0) {
            throw new PagamentoInvalidoException("O valor do pagamento deve ser maior que zero.");
        }
        ValidarPagamento();
        System.out.println("Pagamento de R$" + valor + " processado com sucesso via " + this.getClass().getSimpleName());

    }
}
