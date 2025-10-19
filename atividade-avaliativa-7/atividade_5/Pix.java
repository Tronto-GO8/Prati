package exercico_avaliativo_8.atividade_5;

public class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void ValidarPagamento() throws PagamentoInvalidoException {
        if (chavePix == null || chavePix.isBlank()) {
            throw new PagamentoInvalidoException("A chave Pix não pode ser vazia.");
        }

        boolean formatoValido = chavePix.matches("\\d{11}") ||               // CPF
                chavePix.matches(".+@.+\\..+") ||           // E-mail
                chavePix.matches("[a-fA-F0-9\\-]{36}");     // Chave aleatória

        if (!formatoValido) {
            throw new PagamentoInvalidoException("Formato de chave Pix inválido.");
        }
    }
}
