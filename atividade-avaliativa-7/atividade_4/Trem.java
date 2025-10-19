package exercico_avaliativo_8.atividade_4;

public class Trem implements IMeioTransporte{
    private int velocidade;
    private final int max_velocidade = 400;

    @Override
    public void acelerar() {
        if (velocidade + 40 > max_velocidade) {
            throw new IllegalStateException("Não é permitido ultrapassar o limite de velocidade" + max_velocidade);
        }
        velocidade += 40;
        System.out.println("Acelerando, valocidade atual: " + velocidade);

    }
    @Override
    public void frear(){
        if (velocidade - 40 < 0) {
            throw new IllegalStateException("O trem já está parada, velocidade atual: " + velocidade);
        }
        velocidade -= 40;
        System.out.println("Diminuindo a velocidade da locomotiva, valocidade atual: " + velocidade);

    }
}
