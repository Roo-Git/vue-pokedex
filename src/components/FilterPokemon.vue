<template>
  <div class="flex w-full justify-center items-center">
    <span class="flex items-center mr-2">
      <input
        class="accent-green-600 cursor-pointer rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="grass"
        checked
        @change="setFilter"
      />
      <label for="grass" class="ml-1 text-sm font-medium text-gray-900"
        >Grass</label
      >
    </span>
    <span class="flex items-center mr-2">
      <input
        class="accent-red-600 cursor-pointer rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="fire"
        checked
        @change="setFilter"
      />
      <label class="ml-1 text-sm font-medium text-gray-900" for="fire"
        >Fire</label
      >
    </span>
    <span class="flex items-center mr-2">
      <input
        class="accent-blue-600 cursor-pointer rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="water"
        checked
        @change="setFilter"
      />
      <label class="ml-1 text-sm font-medium text-gray-900" for="water"
        >Water</label
      >
    </span>
    <span class="flex items-center mr-2">
      <input
        class="accent-lime-600 cursor-pointer rounded focus:ring-lime-500 dark:focus:ring-lime-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="bug"
        checked
        @change="setFilter"
      />
      <label class="ml-1 text-sm font-medium text-gray-900" for="bug"
        >Bug</label
      >
    </span>
    <span class="flex items-center mr-2">
      <input
        class="accent-orange-600 cursor-pointer rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="normal"
        checked
        @change="setFilter"
      />
      <label class="ml-1 text-sm font-medium text-gray-900" for="normal"
        >Normal</label
      >
    </span>
    <span class="flex items-center mr-2">
      <input
        class="accent-yellow-700 cursor-pointer rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="electric"
        checked
        @change="setFilter"
      />
      <label class="ml-1 text-sm font-medium text-gray-900" for="electric"
        >Electric</label
      >
    </span>
    <span class="flex items-center mr-2">
      <input
        class="accent-purple-600 cursor-pointer rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        id="poison"
        checked
        @change="setFilter"
      />
      <label class="ml-1 text-sm font-medium text-gray-900" for="poison"
        >Poison</label
      >
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
