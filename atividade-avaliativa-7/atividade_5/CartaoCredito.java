package exercico_avaliativo_8.atividade_5;

public class CartaoCredito extends FormaPagamento{
    private String numeroCartao;

    public CartaoCredito(String numeroCartao){
        this.numeroCartao = numeroCartao;
    }

    @Override
    public void ValidarPagamento() throws PagamentoInvalidoException {
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número de cartão inválido. Deve conter 16 dígitos numéricos.");
        }

    }




}
