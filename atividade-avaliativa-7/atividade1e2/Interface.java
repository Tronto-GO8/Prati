package exercico_avaliativo_8.atividade1e2;

public class Interface {
    public static void main(String[] args) {
        try {
            Produto p1 = new Produto("Notebook", 3500.0, 5);
            System.out.println("Produto criado com sucesso: " + p1);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }

        // ❌ Tentativa 2 — preço negativo
        try {
            Produto p2 = new Produto("Mouse", -50.0, 10);
            System.out.println("Produto criado: " + p2);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }

        // ❌ Tentativa 3 — nome vazio
        try {
            Produto p3 = new Produto("   ", 80.0, 3);
            System.out.println("Produto criado: " + p3);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }

        // ✅ Tentativa 4 — alterar valores válidos
        try {
            Produto p4 = new Produto("Teclado", 200.0, 8);
            System.out.println("Produto criado: " + p4);

            p4.setPreco(250.0);
            p4.setQuantidadeEmEstoque(10);
            System.out.println("Valores alterados com sucesso: " + p4);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        // ❌ Tentativa 5 — tentar setar nome nulo
        try {
            Produto p5 = new Produto("Monitor", 1200.0, 2);
            p5.setNome(null);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao alterar nome: " + e.getMessage());
        }
        // ❌ Tentativa 6 — quantidade negativa
        try {
            Produto p6 = new Produto("HD Externo", 500.0, -1);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao criar produto: " + e.getMessage());
        }

        try {
            aplicarDesconto p1 = new aplicarDesconto("Notebook", 5000.0, 10);
            System.out.println("Preço original: R$" + p1.getPreco());

            p1.desconto(20);
            System.out.println("Preço com 20% de desconto: R$" + p1.getPreco());

            // Teste com desconto inválido
            p1.desconto(70); // deve lançar exceção
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
