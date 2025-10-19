package exercico_avaliativo_8.atividade_4;

public class Bicilceta implements IMeioTransporte{
    private int velocidade;
    private final int max_velocidade = 40;

    @Override
    public void acelerar() {
        if (velocidade + 4 > max_velocidade) {
            throw new IllegalStateException("Não é permitido ultrapassar o limite de velocidade" + max_velocidade);
        }
        velocidade += 4;
        System.out.println("Pedalando mais rápido, valocidade atual: " + velocidade);

    }
    @Override
    public void frear(){
        if (velocidade - 4 < 0) {
            throw new IllegalStateException("A bicicleta já está parada, velocidade atual: " + velocidade);
        }
        velocidade -= 4;
        System.out.println("Diminuindo a pedalada, valocidade atual: " + velocidade);

    }
}
