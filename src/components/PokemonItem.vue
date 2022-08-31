<template>
  <div>
    <BaseCard :type="type">
      <img :src="props.img" :alt="props.name" />
      <h2 class="font-bold text-neutral-50">{{ props.name }}</h2>
      <BaseBadge :type="type" :title="type" />
      <BaseDialog @close="hideDialog" :type="type" :open="dialogIsVisible">
        <h2>{{ props.name }}</h2>
        <img :src="props.dreamImg" :alt="props.name" />
        <p>{{ props.type }}</p>
        <p>{{ props.height }}</p>
        <p>{{ props.weight }}</p>
        <p>{{ props.attacks }}</p>
        <button @click="hideDialog">Close it!</button>
      </BaseDialog>
      <br />
      <div>
        <BaseButton :type="type" :title="info" @click="showDialog"></BaseButton>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseBadge from "./UI/BaseBadge.vue";
import BaseButton from "./UI/BaseButton.vue";

const props = defineProps([
  "id",
  "img",
  "dreamImg",
  "name",
  "type",
  "attacks",
  "height",
  "weight",
]);
const info = ref("More info");

let dialogIsVisible = ref(false);

function showDialog() {
  dialogIsVisible.value = true;
}

function hideDialog() {
  dialogIsVisible.value = false;
}
</script>
