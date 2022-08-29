<template>
  <span class="badge" :class="props.type">{{ text }}</span>
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
  background-color: green;
  color: white;
}

.fire {
  background-color: red;
  color: white;
}

.water {
  background-color: blue;
  color: white;
}
.bug {
  background-color: greenyellow;
  color: white;
}
.normal {
  background-color: orange;
  color: white;
}
.electric {
  background-color: yellow;
  color: white;
}
.poison {
  background-color: purple;
  color: white;
}
</style>
