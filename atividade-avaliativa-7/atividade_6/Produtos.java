package exercico_avaliativo_8.atividade_6;

public class Produtos {
    private String nome;
    private Dinheiro preco;

    public Produtos(String nome, Dinheiro preco) {
        if (nome == null || nome.isBlank())
            throw new IllegalArgumentException("Nome inválido.");
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public Dinheiro getPreco() {
        return preco;
    }
}
