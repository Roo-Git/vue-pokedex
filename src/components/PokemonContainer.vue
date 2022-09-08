<template>
  <PokemonItem
    v-if="showPokemon"
    :key="pokemon.id"
    :name="pokemon.name"
    :img="pokemon.sprites.front_default"
    :type="pokemon.types[0].type.name"
    :dreamImg="pokemon.sprites.other.dream_world.front_default"
    :height="pokemon.height"
    :weight="pokemon.weight"
    :attacks="pokemon.abilities[0].ability.name"
  >
  </PokemonItem>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getPokemonByName } from "../api";
import PokemonItem from "./PokemonItem.vue";
const pokemon = ref(null);
const props = defineProps(["name", "search", "activeTypes"]);

const showPokemon = computed(() => {
  if (!pokemon.value) {
    return false;
  }

  const searchMatches = pokemon.value.name
    .toLowerCase()
    .includes(props.search.toLowerCase());
  const filterMatches =
    (props.activeTypes.grass &&
      pokemon.value.types[0].type.name.includes("grass")) ||
    (props.activeTypes.fire &&
      pokemon.value.types[0].type.name.includes("fire")) ||
    (props.activeTypes.water &&
      pokemon.value.types[0].type.name.includes("water")) ||
    (props.activeTypes.bug &&
      pokemon.value.types[0].type.name.includes("bug")) ||
    (props.activeTypes.normal &&
      pokemon.value.types[0].type.name.includes("normal")) ||
    (props.activeTypes.electric &&
      pokemon.value.types[0].type.name.includes("electric")) ||
    (props.activeTypes.poison &&
      pokemon.value.types[0].type.name.includes("poison"));

  return searchMatches && filterMatches;
});

onMounted(async () => {
  const { data } = await getPokemonByName(props.name);
  pokemon.value = data;
});
</script>
