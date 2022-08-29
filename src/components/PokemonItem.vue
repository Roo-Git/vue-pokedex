<template>
  <div>
    <img :src="props.img" :alt="props.name" />
    <h2>{{ props.name }}</h2>
    <BaseBadge :type="type" :title="type"></BaseBadge>
  </div>
</template>

<script setup>
const props = defineProps(["id", "img", "name", "type", "attacks"]);
</script>
