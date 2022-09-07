<template>
  <div>
    <TheHeader></TheHeader>
    <BaseContainer
      class="flex flex-col items-center gap-6 w-100 bg-stone-200 rounded-3xl m-2 p-10"
    >
      <BaseButton
        @click="changeFilter"
        class="flex justify-center items-center w-[350px] h-14 text-white bg-red-500 rounded hover:bg-red-600 cursor-pointer"
      >
        Change Filter
      </BaseButton>
      <div class="flex justify-center items-center w-[350px] h-28">
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
      class="grid grid-cols-2 grid-rows-2 gap-6 w-100 bg-stone-100 rounded-3xl m-2 p-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7"
    >
      <PokemonItem
        v-for="pokemon in pokemonList"
        :key="pokemon"
        :id="pokemon.id"
        :img="pokemon.img"
        :dream-img="pokemon.dreamImg"
        :name="pokemon.name"
        :type="pokemon.type"
        :attacks="pokemon.attacks"
        :height="pokemon.height"
        :weight="pokemon.weight"
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
import BaseButton from "./components/UI/BaseButton.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

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
          dreamImg: response.data.sprites.other.dream_world.front_default,
          name: response.data.name.toUpperCase(),
          type: response.data.types[0].type.name,
          height: response.data.height,
          weight: response.data.weight,
          attacks:
            response.data.abilities[0].ability.name.charAt(0).toUpperCase() +
            response.data.abilities[1]?.ability.name.slice(1),
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
