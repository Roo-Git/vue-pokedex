<template>
  <div class="card" :class="props.type">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps(["type"]);
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 13rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.grass {
  border: 4px solid green;
}

.fire {
  border: 4px solid red;
}

.water {
  border: 4px solid blue;
}
.bug {
  border: 4px solid greenyellow;
}
.normal {
  border: 4px solid orange;
}
.electric {
  border: 4px solid yellow;
}
.poison {
  border: 4px solid purple;
}
</style>
