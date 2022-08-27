<template>
  <div>
    <SearchPokemon
      @search="updateSearch"
      :search-name="pokemonName"
    ></SearchPokemon>
    <FilterPokemon @change-filter="setFilters"></FilterPokemon>
    <PokemonItem
      v-for="pokemon in pokemonList"
      :key="pokemon"
      :id="pokemon.id"
      :img="pokemon.img"
      :name="pokemon.name"
      :type="pokemon.type"
      :attacks="pokemon.attacks"
    >
    </PokemonItem>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import PokemonItem from "./components/PokemonItem.vue";
import SearchPokemon from "./components/SearchPokemon.vue";
import FilterPokemon from "./components/FilterPokemon.vue";

const pokemonName = ref("");
let activeTypes = ref({
  grass: true,
  fire: true,
  water: true,
  bug: true,
  normal: true,
  electric: true,
  poison: true,
});

function filterPokemon() {
  let pokemon = pokemonName.value;
  return pokedex.value
    .filter((p) => p.name.toLowerCase().includes(pokemon.toLowerCase()))
    .filter((p) => {
      if (activeTypes.value.grass && p.type.includes("grass")) {
        return true;
      }
      if (activeTypes.value.fire && p.type.includes("fire")) {
        return true;
      }
      if (activeTypes.value.water && p.type.includes("water")) {
        return true;
      }
      if (activeTypes.value.bug && p.type.includes("bug")) {
        return true;
      }
      if (activeTypes.value.normal && p.type.includes("normal")) {
        return true;
      }
      if (activeTypes.value.electric && p.type.includes("electric")) {
        return true;
      }
      if (activeTypes.value.poison && p.type.includes("poison")) {
        return true;
      }
      return false;
    });
}

function updateSearch(value) {
  pokemonName.value = value;
}

function setFilters(updatedFilters) {
  activeTypes.value = updatedFilters;
}

const pokemonList = computed(() => {
  return filterPokemon();
});

const pokedex = ref([]);
const URL_API = ref("https://pokeapi.co/api/v2/pokemon/");

onMounted(() => {
  for (let id = 1; id <= 151; id++) {
    axios
      .get(`${URL_API.value}${id}`)
      .then((response) => {
        let pokemon = {
          id: response.data.id,
          img: response.data.sprites.front_default,
          name: response.data.name.toUpperCase(),
          type: response.data.types[0].type.name,
          attacks:
            response.data.abilities[0].ability.name.charAt(0).toUpperCase() +
            response.data.abilities[0].ability.name.slice(1),
        };
        pokedex.value.push(pokemon);
      })
      .catch((err) => {
        const error = new Error(err.message);
        throw error;
      });
  }
});
</script>
