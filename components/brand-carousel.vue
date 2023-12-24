<template>
  <div class="flex h-16 items-center w-full loop-container inset-box">
    <div class="flex horizontal-scrolling-items">
      <div
        v-for="element in elements"
        :key="element.id"
        class="flex justify-center items-center h-full w-1/4 horizontal-scrolling-items__item"
        aria-hidden="true"
      >
        <p class="text-2xl text-center w-48">
          {{ element.label }}
        </p>
      </div>
    </div>
    <div class="flex horizontal-scrolling-items">
      <div
        v-for="element in elements"
        :key="element.id"
        class="flex justify-center items-center h-full horizontal-scrolling-items__item"
        aria-hidden="true"
      >
        <p class="text-2xl text-center w-48">
          {{ element.label }}
        </p>
      </div>
    </div>
    <div class="flex horizontal-scrolling-items">
      <div
        v-for="element in elements"
        :key="element.id"
        class="flex justify-center items-center h-full horizontal-scrolling-items__item"
        aria-hidden="true"
      >
        <p class="text-2xl text-center w-48">
          {{ element.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const elements = [
  {
    id: 1,
    label: 'Лого'
  },
  {
    id: 2,
    label: 'Лого'
  },
  {
    id: 3,
    label: 'Лого'
  },
  {
    id: 4,
    label: 'Лого'
  }
];
</script>
