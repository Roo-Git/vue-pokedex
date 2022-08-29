<template>
  <div>
    <BaseCard :type="type">
      <img :src="props.img" :alt="props.name" />
      <h2>{{ props.name }}</h2>
      <BaseBadge :type="type" :title="type" />
    </BaseCard>
  </div>
</template>

<script setup>
const props = defineProps(["id", "img", "name", "type", "attacks"]);
</script>
