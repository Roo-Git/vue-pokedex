<template>
  <div class="grid grid-cols-3 grid-rows-4 w-96 p-2">
    <h2 class="grid col-span-3 text-black-50 font-bold tracking-wide ml-2">
      Find by Type:
    </h2>
    <span>
      <input
        class="m-2"
        type="checkbox"
        id="grass"
        checked
        @change="setFilter"
      />
      <label for="grass">Grass</label>
    </span>
    <span>
      <input
        class="m-2"
        type="checkbox"
        id="fire"
        checked
        @change="setFilter"
      />
      <label for="fire">Fire</label>
    </span>
    <span>
      <input
        class="m-2"
        type="checkbox"
        id="water"
        checked
        @change="setFilter"
      />
      <label for="water">Water</label>
    </span>
    <span>
      <input class="m-2" type="checkbox" id="bug" checked @change="setFilter" />
      <label for="bug">Bug</label>
    </span>
    <span>
      <input
        class="m-2"
        type="checkbox"
        id="normal"
        checked
        @change="setFilter"
      />
      <label for="normal">Normal</label>
    </span>
    <span>
      <input
        class="m-2"
        type="checkbox"
        id="electric"
        checked
        @change="setFilter"
      />
      <label for="electric">Electric</label>
    </span>
    <span>
      <input
        class="m-2"
        type="checkbox"
        id="poison"
        checked
        @change="setFilter"
      />
      <label for="poison">Poison</label>
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
