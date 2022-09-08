<template>
  <div>
    <BaseCard :type="type">
      <img :src="props.img" :alt="props.name" />
      <h2 class="font-bold text-neutral-50">{{ props.name }}</h2>
      <BaseBadge :type="type" :title="type" />
      <BaseDialog @close="hideDialog" :type="type" :open="dialogIsVisible">
        <div class="flex flex-col justify-around items-center h-[40rem]">
          <h2 class="text-neutral-50 text-3xl font-bold tracking-wide">
            {{ props.name }}
          </h2>
          <img :src="props.dreamImg" :alt="props.name" />
          <p class="text-neutral-50 text-2xl font-medium">
            Type: {{ props.type.toUpperCase() }}
          </p>
          <p class="text-neutral-50 text-2xl font-medium">
            Height: {{ props.height }}
          </p>
          <p class="text-neutral-50 text-2xl font-medium">
            Weight: {{ props.weight }}
          </p>
          <p class="text-neutral-50 text-2xl font-medium">
            Attack: {{ props.attacks }}
          </p>
          <BaseButton
            @click="hideDialog"
            class="flex items-center justify-center border-neutral-50 border-4 w-full rounded-2xl text-xl cursor-pointer"
            >CLOSE</BaseButton
          >
        </div>
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
  "name",
  "img",
  "type",
  "dreamImg",
  "height",
  "weight",
  "attacks",
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
