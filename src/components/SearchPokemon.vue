<template>
  <div>
    <input
      class="search-placeholder"
      type="search"
      @input="search"
      :value="props.searchName"
      placeholder="Search pokemon"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  searchName: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (event: "search", value: string): void;
}>();

function search(event: Event) {
  emit("search", (event.target as HTMLInputElement).value);
}
</script>
