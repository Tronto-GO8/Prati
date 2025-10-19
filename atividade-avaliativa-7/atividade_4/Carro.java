package exercico_avaliativo_8.atividade_4;

public class Carro implements IMeioTransporte {
    private int velocidade;
    private final int max_velocidade = 100;

    @Override
    public void acelerar() {
        if (velocidade + 10 > max_velocidade) {
            throw new IllegalStateException("Não é permitido ultrapassar o limite de velocidade" + max_velocidade);
        }
        velocidade += 10;
        System.out.println("Acelerando o carro, valocidade atual: " + velocidade);

    }
    @Override
    public void frear(){
        if (velocidade - 10 < 0) {
            throw new IllegalStateException("O carro já está parado, velocidade atual: " + velocidade);
        }
        velocidade -= 10;
        System.out.println("Desacelerando o carro, valocidade atual: " + velocidade);

    }
}