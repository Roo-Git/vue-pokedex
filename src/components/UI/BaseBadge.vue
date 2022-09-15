<template>
  <div>
    <span class="base-badge" :class="props.type">{{ text }} </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type: string;
  title: string;
}

const props = defineProps<Props>();
const text = computed<string>(() => {
  return props.title.toUpperCase();
});
</script>

<style scoped>
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
