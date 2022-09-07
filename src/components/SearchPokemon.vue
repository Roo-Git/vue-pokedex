<template>
  <div>
    <input
      class="placeholder:uppercase w-[345px] px-10 py-2 rounded outline-none h-14"
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
