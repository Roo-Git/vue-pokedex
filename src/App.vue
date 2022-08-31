<template>
  <div>
    <BaseContainer
      class="grid grid-cols-2 grid-rows-3 gap-10 w-100 bg-stone-200 rounded-3xl m-2 p-6"
    >
      <h1
        class="flex justify-center items-center col-span-1 row-span-1 text-black-50 text-3xl font-bold tracking-wide"
      >
        POKEDEX
      </h1>
      <img
        class="col-span-1 row-span-2"
        src="./assets/img/pokeball.svg"
        alt="pokeball"
      />
      <BaseButton
        @click="changeFilter"
        class="flex w-50 m-3 col-span-1 row-span-1 text-white bg-red-500 rounded transition ease-in-out delay-150 duration-2000 hover:-translate-y-1 hover:scale-110 hover:bg-red-500"
      >
        Change filter
      </BaseButton>
      <div class="bg-red-200 col-span-2 row-span-1">
        <SearchPokemon
          @search="updateSearch"
          :search-name="pokemonName"
          v-show="activeComponent === true"
        ></SearchPokemon>
        <FilterPokemon
          @change-filter="setFilters"
          v-show="activeComponent === false"
        ></FilterPokemon>
      </div>
    </BaseContainer>
    <BaseContainer
      class="grid grid-cols-2 grid-rows-2 gap-1 w-100 bg-stone-100 rounded-3xl m-2 p-6"
    >
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
      <NotFoundPokemon v-show="NotFound"></NotFoundPokemon>
    </BaseContainer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import PokemonItem from "./components/PokemonItem.vue";
import SearchPokemon from "./components/SearchPokemon.vue";
import FilterPokemon from "./components/FilterPokemon.vue";
import NotFoundPokemon from "./components/NotFoundPokemon.vue";
import BaseContainer from "./components/UI/BaseContainer.vue";

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

const NotFound = computed(() => {
  return pokemonList.value.length === 0;
});

const activeComponent = ref(true);

function changeFilter() {
  activeComponent.value = !activeComponent.value;
}

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
