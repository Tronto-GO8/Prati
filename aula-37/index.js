const resposta = document.getElementById("text")
const botoes = document.querySelectorAll('button');

botoes.forEach(botoes => {
    botoes.addEventListener("click", () => {
        let valor = botoes.textContent;
        switch (botoes.id) {
            case 'limpar':
                resposta.value = ''
                break;
            case 'del':
                resposta.value = resposta.value.slice(0, -1)
                break;
            case 'resposta':
                resposta.value = calcular(resposta.value)
                break;
            default:
                let validacao_adicionar = ['*', '/', '+', '-']
                let ultimo = resposta.value[resposta.value.length - 1]
                if (resposta.value.length === 0 && !validacao_adicionar.includes(valor)) {
                    resposta.value += valor;
                } else if (!ultimo.includes(ultimo) && ultimo.includes(valor)) {
                    resposta.value += valor;
                }else if (!ultimo.includes(valor)) {
                    resposta.value += valor;
                } 
        }
    });
});

function calcular(valores) {
    let resposta = valores;
    let espacameto = resposta.replace(/([+\-*/])/g, ' $1 ').trim().split(/\s+/);;
    let modificar = espacameto.map(p => (/\d/.test(p) ? Number(p) : p));

    for (let i = 0; i < modificar.length; i++) {
        if (modificar[i] === '*' || modificar[i] === '/') {
            let temp = modificar[i] === '*' ? modificar[i - 1] * modificar[i + 1] : modificar[i - 1] / modificar[i + 1];
            modificar.splice(i - 1, 3, temp);
            i -= 1;
        }
    }
    for (let i = 0; i < modificar.length; i++) {
        if (modificar[i] === '+' || modificar[i] === '-') {
            let temp = modificar[i] === '+' ? modificar[i - 1] + modificar[i + 1] : modificar[i - 1] - modificar[i + 1];
            modificar.splice(i - 1, 3, temp);
            i -= 1;
        }
    }

    return modificar;
}