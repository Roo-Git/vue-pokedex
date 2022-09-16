<template>
  <main role="main">
    <TheHeader />
    <BaseWrapper class="wrapped-menu">
      <BaseButton
        @click="changeFilter"
        class="change-filters-btn"
        :title="'Change Filter'"
      />
      <div class="centered-menu">
        <SearchPokemon
          @search="updateSearch"
          :search-name="search"
          v-show="activeComponent"
        />
        <FilterPokemon @change-filter="setFilters" v-show="!activeComponent" />
      </div>
    </BaseWrapper>
    <BaseWrapper class="wrapped-pokemon-list">
      <PokemonContainer
        v-for="pokemon in pokedex"
        :key="pokemon.name"
        :name="pokemon.name"
        :search="search"
        :active-types="activeTypes"
      />
    </BaseWrapper>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getPokemons } from "./api";
import type { Pokemon, ActiveTypesType } from "./types";
import SearchPokemon from "./components/SearchPokemon.vue";
import FilterPokemon from "./components/FilterPokemon.vue";
import BaseWrapper from "./components/UI/BaseWrapper.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import PokemonContainer from "./components/PokemonContainer.vue";

const search = ref<string>("");

const activeTypes = ref<ActiveTypesType>({
  grass: true,
  fire: true,
  water: true,
  bug: true,
  normal: true,
  electric: true,
  poison: true,
  rock: true,
  ghost: true,
  fighting: true,
  ground: true,
  dragon: true,
});

function updateSearch(value: string): void {
  search.value = value;
}
function setFilters(updatedFilters: ActiveTypesType): void {
  activeTypes.value = updatedFilters;
}

const activeComponent = ref<boolean>(true);

function changeFilter(): void {
  activeComponent.value = !activeComponent.value;
}

const pokedex = ref<Pokemon[]>([]);

onMounted(async () => {
  const data = await getPokemons();
  pokedex.value = data.data.results;
});
</script>
