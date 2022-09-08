<template>
  <PokemonItem
    v-if="pokemon"
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
import { ref, onMounted } from "vue";
import { getPokemonByName } from "../api";
import PokemonItem from "./PokemonItem.vue";
const pokemon = ref(null);
const props = defineProps(["name"]);

onMounted(async () => {
  const { data } = await getPokemonByName(props.name);
  pokemon.value = data;
});
</script>
