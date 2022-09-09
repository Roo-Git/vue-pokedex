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

<script setup>
import { reactive } from "vue";

const emit = defineEmits(["change-filter"]);
let filters = reactive({
  grass: true,
  fire: true,
  water: true,
  bug: true,
  normal: true,
  electric: true,
  poison: true,
});

function setFilter(event) {
  const inputId = event.target.id;
  const isActive = event.target.checked;
  const updatedFilters = {
    ...filters,
    [inputId]: isActive,
  };
  filters = updatedFilters;
  emit("change-filter", updatedFilters);
}
</script>
