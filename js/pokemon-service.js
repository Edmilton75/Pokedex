/**
 * Função para pegar os 150 primeiros pokemons
 * e guardar em um array
 * 
 */

export default async function pegarPrimeiraGeracao() {
    const URL_BASE = "https://pokeapi.co/api/v2/pokemon/"

    const pokemons = [];

    for(let i = 1; i <= 150; i++) {
        const requisicao = await fetch(`${URL_BASE}${i}`)

        const respostaJson = await requisicao.json()

        pokemons.push(respostaJson)
    }

    return pokemons;
}
