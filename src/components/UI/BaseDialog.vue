<template>
  <div
    v-if="props.open"
    class="fixed top-0 left-0 w-full h-full z-10 bg-zinc-800 opacity-70"
    @click="closeDialog"
  ></div>
  <transition name="modal">
    <dialog
      open
      v-if="props.open"
      class="fixed top-60 w-[26rem] rounded-2xl z-50"
      :class="props.type"
    >
      <slot></slot>
    </dialog>
  </transition>
</template>
<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
  },
});

const emit = defineEmits(["close"]);

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
