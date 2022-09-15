<template>
  <div
    v-if="props.open"
    class="base-dialog-external-background"
    @click="closeDialog"
  >
    <transition name="modal">
      <dialog open v-if="props.open" class="base-dialog" :class="props.type">
        <slot></slot>
      </dialog>
    </transition>
  </div>
</template>
<script setup lang="ts">
type Props = {
  open: boolean;
  type: string;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

function closeDialog() {
  emit("close");
}
</script>

<style scoped>
.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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
</style>
