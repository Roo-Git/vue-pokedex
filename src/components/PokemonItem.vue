<template>
  <div>
    <BaseCard :type="type" @click="showDialog">
      <img :src="props.img" :alt="props.name" />
      <h2 class="pokemon-card-name">{{ props.name }}</h2>
      <BaseBadge :type="type" :title="type" />
      <div>
        <BaseButton :type="type" :title="info" />
      </div>
    </BaseCard>
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
          :type="'undefined'"
        />
      </div>
    </BaseDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseBadge from "./UI/BaseBadge.vue";
import BaseButton from "./UI/BaseButton.vue";

type Props = {
  name: string;
  img: string;
  type: string;
  dreamImg: string;
  height: number;
  weight: number;
  attacks: string;
};

const props = defineProps<Props>();

const info = ref<string>("More info");
const closeBtn = ref<string>("Close");

const dialogIsVisible = ref<boolean>(false);

function showDialog(): void {
  dialogIsVisible.value = true;
}

function hideDialog(): void {
  dialogIsVisible.value = false;
}
</script>
