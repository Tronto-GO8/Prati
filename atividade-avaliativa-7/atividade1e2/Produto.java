package exercico_avaliativo_8.atividade1e2;

public class Produto {
    private String nome;
    private Double preco;
    private int quantidadeEmEstoque;

    Produto(String nome, Double preco, int quantidadeEmEstoque){
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    public String getNome() {
        return nome;
    }

    public Double getPreco() {
        return preco;
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setNome(String nome) {
        if(nome == null || nome.trim().isEmpty()){
            throw new IllegalArgumentException("O nome do produto não pode ser vazio.");
        }
        this.nome = nome;
    }

    public void setPreco(Double preco) {
        if(preco == null || preco <= 0 ){
            throw new IllegalArgumentException("O Valor não pode ser nulo ou menor que ou igual a 0");
        }
        this.preco = preco;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if(quantidadeEmEstoque < 0){
            throw new IllegalArgumentException("A quantidade em estoque não pode ser nula ou menor que ou igual a 0");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
}
