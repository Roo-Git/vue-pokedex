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
