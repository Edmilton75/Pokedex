/**
 * Criar card base
 * 
 */
import pegarPrimeiraGeracao from "./pokemon-service.js";

{/* <li>
<div id="pokemon-1" class="card">
 <div class="informacoes">
   <h1>aaaa</h1> <-
   <div class="stats">
     <div class="attack">
       <p class="stats-number">49</p>
       <p class="stat">Attack</p>
     </div>
     <div class="defense">
       <p class="stats-number">49</p>
       <p class="stat">Defense</p>
     </div>
   </div>
   <div class="type">
     <p>Grass</p>
     <p>Poison</p>
   </div>
 </div>

 <div class="pokemon-img">
   <img src="/images/placeholder.png" />
 </div>
</div>
</li> */}

// function criarCard(nome, stats, type) {
//     const li = document.createElement('li');

//     const container = document.querySelector(".container ul");
//     container.appendChild(li);

//     const card = document.createElement('div');
//     card.classList.add('card')
    
//     li.appendChild(card);

//     const informacoesElement = document.createElement('div')
//     informacoesElement.classList.add('informacoes')

//     card.appendChild(informacoesElement)

//     const nomePokemonElement = document.createElement('h1');
//     nomePokemonElement.textContent = nome;

//     informacoesElement.appendChild(nomePokemonElement)

//     const statsElement = document.createElement('div')
//     statsElement.classList.add('stats');

//     informacoesElement.appendChild(statsElement);

//     // Attack Data
//     const attackElement = document.createElement('div');
//     attackElement.classList.add('attack');

//     const attackValueElement = document.createElement('p');
//     attackValueElement.classList.add('stats-number');
//     attackValueElement.textContent = stats.attack;

//     const attackValueText = document.createElement('p');
//     attackValueText.classList.add('stat');
//     attackValueText.textContent = 'Attack';

//     attackElement.appendChild(attackValueElement);
//     attackElement.appendChild(attackValueText);

//     // Defense Data
//     const defenseElement = document.createElement('div');
//     defenseElement.classList.add('defense');

//     const defenseValueElement = document.createElement('p');
//     defenseValueElement.classList.add('stats-number');
//     defenseValueElement.textContent = stats.defense;
    
//     const defenseValuetext = document.createElement('p');
//     defenseValuetext.classList.add('stat');
//     defenseValuetext.textContent = 'Defense'

//     defenseElement.appendChild(defenseValueElement);
//     defenseElement.appendChild(defenseValuetext);


//     statsElement.appendChild(attackElement)
//     statsElement.appendChild(defenseElement);
    

//     const typeElement = document.createElement('div');
//     typeElement.classList.add('type');

//     const typeElementValue = document.createElement('p')
//     typeElementValue.textContent = type;

//     typeElement.appendChild(typeElementValue);

//     informacoesElement.appendChild(typeElement);
// }

function preLoad() {
  const load = document.createElement('div')

  const preLoader = document.querySelector('.container div')
  preLoader.appendChild(load)
  preLoader.classList.add('c-loader')

}

preLoad()
const remover = function removerLoad() {

document.getElementById("load").remove()
}

function criarCard(nome, stats, types, image) {
  
    const li = document.createElement('li');

    const container = document.querySelector(".container ul");
    container.appendChild(li);

    

    const typesElement = types.map((type) => {
      return `<p>${type.type.name}</p>`
    }).join(" ")

    
    li.innerHTML = `
        <div id=${nome} class="card ${types[0].type.name}">
            <div class="informacoes">
                <h1>${nome}</h1>

                <div class="stats">
                    <div class="attack">
                    <p class="stats-number">${stats.attack}</p>
                    <p class="stat">Attack</p>
                    </div>
                    <div class="defense">
                    <p class="stats-number">${stats.defense}</p>
                    <p class="stat">Defense</p>
                    </div>
                </div>
                <div class="type">
                  ${typesElement}
                </div>
            </div>
        
            <div class="pokemon-img">
            <img src=${image} />
            </div>
        </div>
    `
    
}

/**
 * Chama a função que pegar os 150 pokemons
 * E depois cria os 150 cards preenchendo os dados
 */
async function preencherDadoPokemon() {
    const listaPokemon = await pegarPrimeiraGeracao();  

    listaPokemon.forEach((pokemon) => {
      const image = pokemon.sprites.other.dream_world.front_default;

      const stats = {
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
      }

      

      criarCard(pokemon.name, stats, pokemon.types, image)
    })
    remover()
    // const card = document.getElementById('pokemon-1');
    // const nomePokemon = card.querySelector('.informacoes h1');
    // nomePokemon.innerText = listaPokemon[0].name
}

preencherDadoPokemon()
