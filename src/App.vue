<template>
  <div v-for="pokemon in pokemonList" :key="pokemon">
    <img :src="pokemon.img" :alt="pokemon.name" />
    <p>{{ pokemon.name }}</p>
    <p>{{ pokemon.type }}</p>
    <p>{{ pokemon.attacks }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const pokemonName = ref("");

function filterPokemon() {
  let pokemon = pokemonName.value;
  return pokedex.value.filter((p) =>
    p.name.toLowerCase().includes(pokemon.toLowerCase())
  );
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
