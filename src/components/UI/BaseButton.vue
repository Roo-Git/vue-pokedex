<template>
  <div>
    <button class="base-btn" :class="props.type">
      <slot> {{ text }} </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
  type?: string;
  title: string;
};

const props = defineProps<Props>();

const text = computed<string>(() => {
  return props.title.toUpperCase();
});
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

.grass {
  background-color: #86efac;
}

.fire {
  background-color: #fca5a5;
}

.water {
  background-color: #93c5fd;
}
.bug {
  background-color: #bef264;
}
.normal {
  background-color: #fdba74;
}
.electric {
  background-color: #fde047;
}
.poison {
  background-color: #d8b4fe;
}
.rock {
  background-color: #d6d3d1;
}
.ghost {
  background-color: #c4b5fd;
}
.fighting {
  background-color: #d1d5db;
}
.ground {
  background-color: #b45309;
}
.dragon {
  background-color: #a5b4fc;
}
.ice {
  background-color: #7dd3fc;
}
.psychic {
  background-color: #f0abfc;
}
</style>
