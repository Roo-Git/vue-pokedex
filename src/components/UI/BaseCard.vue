<template>
  <div class="base-card" :class="props.type">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type Props = {
  type: string;
};

const props = defineProps<Props>();
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

.rock {
  background-color: #a8a29e;
}
</style>
