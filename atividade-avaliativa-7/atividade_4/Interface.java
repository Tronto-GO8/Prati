package exercico_avaliativo_8.atividade_4;

import java.util.ArrayList;
import java.util.List;

public class Interface {
    public static void main(String[] args) {
        List<IMeioTransporte> meios = new ArrayList<>();
        meios.add(new Carro());
        meios.add(new Bicilceta());
        meios.add(new Trem());

        for (IMeioTransporte meio : meios) {
            try {
                meio.acelerar();
                meio.acelerar();
                meio.frear();
                System.out.println();
            } catch (IllegalStateException e) {
                System.out.println("Erro: " + e.getMessage());
            }
        }
    }
}
