let jogador = {
    nome: "Pedro",
    moedas: 100,
}

let ValorAposta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let TipoAposta = ["Numero Exato", "Par ou Impar"]
let Cartinha = [1, 2, 3, 4, 5, 6]
let NumeroDaSorte = [1, 2, 3, 4, 5, 6]

for (let rodadas = 1; rodadas <= 10 && jogador.moedas > 0; rodadas ++) {
    console.log ("--- RODADA", rodadas, "---")  
    console.log (" ")

// Definição de Valores Aleatórios

    let valoraposta_aleatorio = Math.floor (
        Math.random() * ValorAposta.length)
    let valoraposta_sorteado = ValorAposta[valoraposta_aleatorio]

    console.log("Valor da Aposta:", valoraposta_sorteado);

    let tipoaposta_aleatorio = Math.floor (
        Math.random () * TipoAposta.length)
    let tipoaposta_sorteado = TipoAposta[tipoaposta_aleatorio]

    console.log ("Tipo da Rodada:", tipoaposta_sorteado)

    let cartinha_aleatorio = Math.floor (
        Math.random() * Cartinha.length)
    let cartinha_sorteado = Cartinha[cartinha_aleatorio]

    console.log ("Cartinha Sorteada:", cartinha_sorteado)

    let numerodasorte_aleatorio = Math.floor (
        Math.random() * NumeroDaSorte.length)
    let numerodasorte_sorteado = NumeroDaSorte[numerodasorte_aleatorio]
        
    console.log ("Numero do Jogador:", numerodasorte_sorteado)

// Condições de Vitoria ou Derrota

    if (tipoaposta_sorteado == "Numero Exato") {

        if (numerodasorte_sorteado == cartinha_sorteado) {
            console.log ("Você Ganhou a Rodada")
            let resultado = valoraposta_sorteado * 5
            console.log ("Valor Ganho:", resultado)
            jogador.moedas = jogador.moedas + resultado
        }
        else {
            console.log ("Você Perdeu a Rodada")
            let resultado = valoraposta_sorteado
            console.log ("Valor Perdido:", resultado)
            jogador.moedas = jogador.moedas - resultado
        }
    }

    if (tipoaposta_sorteado == "Par ou Impar") {
        if (cartinha_sorteado == 2 || cartinha_sorteado == 4 || cartinha_sorteado == 6) {
            if (numerodasorte_sorteado %2 == 0) {
                console.log ("Você Ganhou a Rodada")
            let resultado = valoraposta_sorteado * 2
            console.log ("Valor Ganho:", resultado)
            jogador.moedas = jogador.moedas + resultado
            }
            else {
                console.log ("Você Perdeu a Rodada")
                let resultado = valoraposta_sorteado
                console.log ("Valor Perdido:", resultado)
                jogador.moedas = jogador.moedas - resultado
            }
        }
    }

    if (tipoaposta_sorteado == "Par ou Impar") {
        if (cartinha_sorteado == 1 || cartinha_sorteado == 3 || cartinha_sorteado == 5) {
            if (numerodasorte_sorteado %2 !== 0) {
                console.log ("Você Ganhou a Rodada")
            let resultado = valoraposta_sorteado * 2
            console.log ("Valor Ganho:", resultado)
            jogador.moedas = jogador.moedas + resultado
            }
            else {
                console.log ("Você Perdeu a Rodada")
                let resultado = valoraposta_sorteado
                console.log ("Valor Perdido:", resultado)
                jogador.moedas = jogador.moedas - resultado
            }
        }
    }

    console.log (" ")
}

// Resultados Finais

console.log ("--- RESULTADO DAS APOSTAS ---")
console.log (" ")

console.log ("Saldo Final:", jogador.moedas)

if (jogador.moedas <= 0) {
    console.log ("Você Perdeu, suas moedas se esgotaram")
}