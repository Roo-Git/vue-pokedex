<template>
  <div>
    <h2 class="text-cyan-600">Find by Type</h2>
    <span>
      <input type="checkbox" id="grass" checked @change="setFilter" />
      <label for="grass">Grass</label>
    </span>
    <span>
      <input type="checkbox" id="fire" checked @change="setFilter" />
      <label for="fire">Fire</label>
    </span>
    <span>
      <input type="checkbox" id="water" checked @change="setFilter" />
      <label for="water">Water</label>
    </span>
    <span>
      <input type="checkbox" id="bug" checked @change="setFilter" />
      <label for="bug">Bug</label>
    </span>
    <span>
      <input type="checkbox" id="normal" checked @change="setFilter" />
      <label for="normal">Normal</label>
    </span>
    <span>
      <input type="checkbox" id="electric" checked @change="setFilter" />
      <label for="electric">Electric</label>
    </span>
    <span>
      <input type="checkbox" id="poison" checked @change="setFilter" />
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
