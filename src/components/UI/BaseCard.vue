<template>
  <div
    class="flex flex-col w-100 justify-around items-center rounded-3xl m-2"
    :class="props.type"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps(["type"]);
</script>

<style scoped>
.grass {
  background-color: #4ade80;
}

.fire {
  background-color: #f87171;
}

.water {
  background-color: #60a5fa;
}
.bug {
  background-color: #a3e635;
}
.normal {
  background-color: #fb923c;
}
.electric {
  background-color: #facc15;
}
.poison {
  background-color: #e879f9;
}
</style>
