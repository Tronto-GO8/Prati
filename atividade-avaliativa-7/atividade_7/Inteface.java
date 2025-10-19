package exercico_avaliativo_8.atividade_7;

import java.math.BigDecimal;

public class Inteface {
    public static void main(String[] args) {
        InMemoryRepository<Produto, Integer> repoProdutos = new InMemoryRepository<>();
        InMemoryRepository<Funcionario, Integer> repoFuncionarios = new InMemoryRepository<>();

        repoProdutos.salvar(new Produto(1, "Notebook"));
        repoProdutos.salvar(new Produto(2, "Mouse"));

        repoFuncionarios.salvar(new Funcionario(1, "Ana", new BigDecimal("5000")));
        repoFuncionarios.salvar(new Funcionario(2, "Carlos", new BigDecimal("7000")));

        System.out.println("Produtos: " + repoProdutos.listarTodos());
        System.out.println("Funcionários: " + repoFuncionarios.listarTodos());

        repoProdutos.buscarPorId(1).ifPresent(p -> System.out.println("Encontrado: " + p));

        try {
            repoProdutos.remover(99);
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
