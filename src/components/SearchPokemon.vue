<template>
  <div>
    <input
      type="search"
      @input="search"
      :value="searchName"
      placeholder="Search pokemon"
    />
  </div>
</template>

<script setup>
defineProps(["searchName"]);
const emit = defineEmits(["search"]);
function search(event) {
  emit("search", event.target.value);
}
</script>
