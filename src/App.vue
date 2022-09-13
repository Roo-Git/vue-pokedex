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
          v-show="activeComponent === true"
        />
        <FilterPokemon
          @change-filter="setFilters"
          v-show="activeComponent === false"
        />
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
import SearchPokemon from "./components/SearchPokemon.vue";
import FilterPokemon from "./components/FilterPokemon.vue";
import BaseWrapper from "./components/UI/BaseWrapper.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import PokemonContainer from "./components/PokemonContainer.vue";

const search = ref<string>("");

interface PokemonTypes {
  grass: boolean;
  fire: boolean;
  water: boolean;
  bug: boolean;
  normal: boolean;
  electric: boolean;
  poison: boolean;
}
const activeTypes = ref<PokemonTypes>({
  grass: true,
  fire: true,
  water: true,
  bug: true,
  normal: true,
  electric: true,
  poison: true,
});

function updateSearch(value: string) {
  search.value = value;
}

function setFilters(updatedFilters: boolean) {
  activeTypes.value = updatedFilters;
}

const activeComponent = ref<boolean>(true);

function changeFilter() {
  activeComponent.value = !activeComponent.value;
}

const pokedex = ref<[]>([]);

onMounted(async () => {
  const data = await getPokemons();
  pokedex.value = data.data.results;
});
</script>
