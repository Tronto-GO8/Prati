package exercico_avaliativo_8.atividade1e2;

public class aplicarDesconto extends Produto{
    public aplicarDesconto(String nome, Double preco, int quantidadeEmEstoque) {
        super(nome, preco, quantidadeEmEstoque);
    }

    public void desconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("O desconto deve estar entre 0% e 50%.");
        }

        double novoPreco = getPreco() - (getPreco() * porcentagem / 100);
        setPreco(novoPreco);
    }
}
