<template>
  <div class="filters-container">
    <span class="checkbox-label-container">
      <input
        class="green-checkbox"
        type="checkbox"
        id="grass"
        checked
        @change="setFilter"
      />
      <label for="grass" class="filter-label">Grass</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="red-checkbox"
        type="checkbox"
        id="fire"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="fire">Fire</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="blue-checkbox"
        type="checkbox"
        id="water"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="water">Water</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="lime-checkbox"
        type="checkbox"
        id="bug"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="bug">Bug</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="orange-checkbox"
        type="checkbox"
        id="normal"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="normal">Normal</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="yellow-checkbox"
        type="checkbox"
        id="electric"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="electric">Electric</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="purple-checkbox"
        type="checkbox"
        id="poison"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="poison">Poison</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="stone-checkbox"
        type="checkbox"
        id="rock"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="rock">Rock</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="violet-checkbox"
        type="checkbox"
        id="ghost"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="ghost">Ghost</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="zinc-checkbox"
        type="checkbox"
        id="fighting"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="fighting">Fighting</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="amber-checkbox"
        type="checkbox"
        id="ground"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="ground">Ground</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="indigo-checkbox"
        type="checkbox"
        id="dragon"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="dragon">Dragon</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="sky-checkbox"
        type="checkbox"
        id="ice"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="ice">Ice</label>
    </span>
    <span class="checkbox-label-container">
      <input
        class="fuchsia-checkbox"
        type="checkbox"
        id="psychic"
        checked
        @change="setFilter"
      />
      <label class="filter-label" for="psychic">Psychic</label>
    </span>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ActiveTypesType } from "../types";

const emit = defineEmits<{
  (event: "change-filter", updatedFilters: ActiveTypesType): void;
}>();

let filters = reactive<ActiveTypesType>({
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
  ice: true,
  psychic: true,
});

function setFilter(event: Event) {
  const inputId = (event.target as HTMLInputElement).id;
  const isActive = (event.target as HTMLInputElement).checked;
  const updatedFilters = {
    ...filters,
    [inputId]: isActive,
  };
  filters = updatedFilters;
  emit("change-filter", updatedFilters);
}
</script>
