<template>
  <div class="py-5 flex flex-col items-center">
    <p class="text-customBlack text-lg">
      {{ label }}
    </p>
    <p class="font-bold text-6xl">
      {{ counter }} <span class="text-redJapan">{{ unit }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
const {label, maxCount, unit} = defineProps({
  label: {
    type: String,
    default: ''
  },
  maxCount: {
    type: Number,
    default: 0
  },
  unit: {
    type: String,
    default: ''
  }
});

const counter = ref(0);

const startCount = () => {
  const intervalId = setInterval(() => {
    if (counter.value < maxCount) {
      counter.value++;
    } else {
      clearInterval(intervalId);
    }
  }, 10);
};

onMounted(() => {
  startCount();
});
</script>
