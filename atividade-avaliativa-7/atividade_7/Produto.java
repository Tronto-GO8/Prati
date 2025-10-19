package exercico_avaliativo_8.atividade_7;

public class Produto implements Identificavel<Integer> {
    private final Integer id;
    private String nome;

    public Produto(Integer id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "Produto{id=" + id + ", nome='" + nome + "'}";
    }
}