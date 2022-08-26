<template>
  <div>
    <img :src="props.img" :alt="props.name" />
    <h2>{{ props.name }}</h2>
    <h2>{{ props.type }}</h2>
    <li>
      {{ props.attacks }}
    </li>
  </div>
</template>

<script setup>
const props = defineProps(["id", "img", "name", "type", "attacks"]);
</script>
