<template>
  <PokemonItem
    v-if="pokemon !== null && showPokemon"
    :key="pokemon.id"
    :name="pokemon.name.toUpperCase()"
    :img="pokemon.sprites.front_default"
    :type="pokemon.types[0].type.name"
    :dreamImg="pokemon.sprites.other.dream_world.front_default"
    :height="pokemon.height"
    :weight="pokemon.weight"
    :attacks="pokemon.abilities[0].ability.name"
  >
  </PokemonItem>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { getPokemonByName } from "../api";
import type { ActiveTypesType, Pokemon } from "../types";
import PokemonItem from "./PokemonItem.vue";

const pokemon = ref<Pokemon | null>(null);

const props = defineProps<{
  name: string;
  search: string;
  activeTypes: ActiveTypesType;
}>();

const showPokemon = computed<boolean>(() => {
  if (!pokemon.value) {
    return false;
  }

  const searchMatches = pokemon.value.name
    .toLowerCase()
    .includes(props.search.toLowerCase());

  const filterMatches = [
    "grass",
    "fire",
    "water",
    "bug",
    "normal",
    "electric",
    "poison",
    "rock",
    "ghost",
    "fighting",
    "ground",
    "dragon",
    "ice",
  ].some((filter) => {
    return (
      props.activeTypes[filter] &&
      pokemon.value?.types[0].type.name.includes(filter)
    );
  });

  return searchMatches && filterMatches;
});

onMounted(async () => {
  const { data } = await getPokemonByName(props.name);
  pokemon.value = data;
});
</script>
