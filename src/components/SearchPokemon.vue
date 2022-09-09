<template>
  <div>
    <input
      class="placeholder:uppercase w-[320px] px-20 py-1 rounded outline-none"
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
