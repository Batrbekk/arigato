<template>
  <div class="flex h-16 bg-redJapan items-center w-full loop-container inset-box">
    <div class="flex horizontal-scrolling-items">
      <div
        v-for="element in elements"
        :key="element.id"
        class="flex justify-center items-center border-r-2 border-lightYellow h-full w-1/4 horizontal-scrolling-items__item"
        aria-hidden="true"
      >
        <p class="text-lightYellow text-2xl text-center w-48">
          {{ element.label }}
        </p>
      </div>
    </div>
    <div class="flex horizontal-scrolling-items">
      <div
        v-for="element in elements"
        :key="element.id"
        class="flex justify-center items-center border-r-2 border-lightYellow h-full horizontal-scrolling-items__item"
        aria-hidden="true"
      >
        <p class="text-lightYellow text-2xl text-center w-48">
          {{ element.label }}
        </p>
      </div>
    </div>
    <div class="flex horizontal-scrolling-items">
      <div
        v-for="element in elements"
        :key="element.id"
        class="flex justify-center items-center border-r-2 border-lightYellow h-full horizontal-scrolling-items__item"
        aria-hidden="true"
      >
        <p class="text-lightYellow text-2xl text-center w-48">
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
    label: 'Токио'
  },
  {
    id: 2,
    label: 'Осака'
  },
  {
    id: 3,
    label: 'Киото'
  },
  {
    id: 4,
    label: 'Arigato travel'
  }
];
</script>
