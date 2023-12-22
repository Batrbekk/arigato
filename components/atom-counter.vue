<template>
  <div class="py-5 flex flex-col justify-center items-center h-28 lg:h-32">
    <p class="text-customBlack lg:text-lg text-center">
      {{ label }}
    </p>
    <p class="font-bold text-2xl md:text-3xl lg:text-6xl">
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
