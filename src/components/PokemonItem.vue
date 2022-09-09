<template>
  <div>
    <BaseCard :type="type">
      <img :src="props.img" :alt="props.name" />
      <h2 class="pokemon-card-name">{{ props.name }}</h2>
      <BaseBadge :type="type" :title="type" />
      <BaseDialog @close="hideDialog" :type="type" :open="dialogIsVisible">
        <div class="dialog-card-container">
          <h2 class="pokemon-dialog-name">
            {{ props.name }}
          </h2>
          <img :src="props.dreamImg" :alt="props.name" />
          <p class="pokemon-data">Type: {{ props.type.toUpperCase() }}</p>
          <p class="pokemon-data">Height: {{ props.height }}</p>
          <p class="pokemon-data">Weight: {{ props.weight }}</p>
          <p class="pokemon-data">Attack: {{ props.attacks }}</p>
          <BaseButton
            @click="hideDialog"
            class="close-dialog-btn"
            :title="closeBtn"
          />
        </div>
      </BaseDialog>
      <div>
        <BaseButton :type="type" :title="info" @click="showDialog" />
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseBadge from "./UI/BaseBadge.vue";
import BaseButton from "./UI/BaseButton.vue";

const props = defineProps([
  "name",
  "img",
  "type",
  "dreamImg",
  "height",
  "weight",
  "attacks",
]);
const info = ref("More info");
const closeBtn = ref("Close");

let dialogIsVisible = ref(false);

function showDialog() {
  dialogIsVisible.value = true;
}

function hideDialog() {
  dialogIsVisible.value = false;
}
</script>
