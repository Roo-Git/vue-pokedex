<template>
  <main role="main" class="main">
    <TheHeader></TheHeader>
    <BaseWrapper
      class="flex flex-col items-center w-100 bg-stone-200 rounded-3xl m-2 p-2"
    >
      <BaseButton
        @click="changeFilter"
        class="flex justify-center items-center w-[200px] text-white bg-red-500 rounded hover:bg-red-600 cursor-pointer mt-2"
      >
        Change Filter
      </BaseButton>
      <div class="flex justify-center items-center w-full h-14">
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

function updateSearch(value) {
  search.value = value;
}

function setFilters(updatedFilters) {
  activeTypes.value = updatedFilters;
}

const activeComponent = ref(true);

function changeFilter() {
  activeComponent.value = !activeComponent.value;
}

const pokedex = ref([]);

const NotFound = computed(() => {
  return search.value.length === 0;
});

onMounted(async () => {
  const data = await getPokemon();
  pokedex.value = data.data.results;
});
</script>

<style>
@import "./App.css";
</style>
