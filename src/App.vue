<template>
  <main role="main" class="main">
    <TheHeader></TheHeader>
    <BaseWrapper
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
          :search-name="search"
          v-show="activeComponent === true"
        ></SearchPokemon>
        <FilterPokemon
          @change-filter="setFilters"
          v-show="activeComponent === false"
        ></FilterPokemon>
      </div>
    </BaseWrapper>
    <BaseWrapper
      class="grid grid-cols-1 gap-6 w-100 bg-stone-100 rounded-3xl m-2 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <PokemonContainer
        v-for="pokemon in pokedex"
        :key="pokemon.name"
        :name="pokemon.name"
        :search="search"
        :active-types="activeTypes"
      />
      <NotFoundPokemon v-show="NotFound"></NotFoundPokemon>
    </BaseWrapper>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getPokemon } from "./api";
import SearchPokemon from "./components/SearchPokemon.vue";
import FilterPokemon from "./components/FilterPokemon.vue";
import NotFoundPokemon from "./components/NotFoundPokemon.vue";
import BaseWrapper from "./components/UI/BaseWrapper.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import PokemonContainer from "./components/PokemonContainer.vue";

const search = ref("");
let activeTypes = ref({
  grass: true,
  fire: true,
  water: true,
  bug: true,
  normal: true,
  electric: true,
  poison: true,
});

// function filterPokemon() {
//   let pokemon = pokemonName.value;
//   return pokedex.value
//     .filter((p) => p.name.toLowerCase().includes(pokemon.toLowerCase()))
//     .filter((p) => {
//       if (activeTypes.value.grass && p.type.includes("grass")) {
//         return true;
//       }
//       if (activeTypes.value.fire && p.type.includes("fire")) {
//         return true;
//       }
//       if (activeTypes.value.water && p.type.includes("water")) {
//         return true;
//       }
//       if (activeTypes.value.bug && p.type.includes("bug")) {
//         return true;
//       }
//       if (activeTypes.value.normal && p.type.includes("normal")) {
//         return true;
//       }
//       if (activeTypes.value.electric && p.type.includes("electric")) {
//         return true;
//       }
//       if (activeTypes.value.poison && p.type.includes("poison")) {
//         return true;
//       }
//       return false;
//     });
// }

function updateSearch(value) {
  search.value = value;
}

function setFilters(updatedFilters) {
  activeTypes.value = updatedFilters;
}

const NotFound = computed(() => {
  return pokedex.value.length === 0;
});

const activeComponent = ref(true);

function changeFilter() {
  activeComponent.value = !activeComponent.value;
}

const pokedex = ref([]);

onMounted(async () => {
  const data = await getPokemon();
  pokedex.value = data.data.results;
});
</script>

<style>
@import "./App.css";
</style>
