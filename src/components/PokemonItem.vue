<template>
  <div>
    <BaseCard :type="type">
      <img :src="props.img" :alt="props.name" />
      <h2>{{ props.name }}</h2>
      <BaseBadge :type="type" :title="type" />
      <BaseDialog @close="hideDialog" :open="dialogIsVisible">
        <img :src="props.img" :alt="props.name" />
        {{ props.name }}
        {{ props.type }}
        {{ props.attacks }}
        <button @click="hideDialog">Close it!</button>
      </BaseDialog>
      <br />
      <div>
        <button @click="showDialog">Show Dialog</button>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["id", "img", "name", "type", "attacks"]);

let dialogIsVisible = ref(false);

function showDialog() {
  dialogIsVisible.value = true;
}

function hideDialog() {
  dialogIsVisible.value = false;
}
</script>
