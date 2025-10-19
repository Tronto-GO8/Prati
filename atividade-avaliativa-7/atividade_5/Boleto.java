package exercico_avaliativo_8.atividade_5;

public class Boleto extends FormaPagamento{
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public void ValidarPagamento() throws PagamentoInvalidoException {
        if (codigoBarras == null || !codigoBarras.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Código de barras inválido. Deve conter 47 dígitos numéricos.");
        }
    }
}
