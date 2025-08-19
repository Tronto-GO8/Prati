let sequencia = [1, 2, 3, 4]
let aumentar = 0
let adicionar = sequencia[aumentar];
let sudocu = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
for (let i = 0; i < sequencia.length; i++) {
    let verificacao_lina = true
    let verificação_coluna = true
    let verificacao_quadrado = true
    for (let x = 0; x < sudocu.length; x++) {

        for (let y = 0; y < sudocu[x].length; y++) {
            if (adicionar === sudocu[x][y]) {
                verificacao_lina = false
            }

            if (adicionar === sudocu[y][x]) {
                verificação_coluna = false
            }

            if ( y === sudocu[x].length-1) {
                if (verificacao_lina === true && verificacao_quadrado === true && verificação_coluna === true) {
                    sudocu[x][y] = adicionar;
                }
            }

        }

    }
}
console.log(sudocu)

