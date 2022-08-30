<template>
  <div>
    <button
      class="flex w-40 justify-center items-center text-neutral-50 font-bold rounded-2xl my-2"
      :class="props.type"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["type", "title"]);

let text = computed(() => {
  return props.title.toUpperCase();
});
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

.grass {
  background-color: #86efac;
}

.fire {
  background-color: #fca5a5;
}

.water {
  background-color: #93c5fd;
}
.bug {
  background-color: #bef264;
}
.normal {
  background-color: #fdba74;
}
.electric {
  background-color: #fde047;
}
.poison {
  background-color: #d8b4fe;
}
</style>
