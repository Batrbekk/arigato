<template>
  <div class="flex border border-customBlack w-full items-center">
    <atom-counter
      v-for="item in counters"
      :key="item.label"
      class="w-1/3 border-r last:border-0"
      :label="item.label"
      :max-count="item.maxCount"
      :unit="item.unit"
    />
  </div>
</template>

<script lang="ts" setup>
const counters = [
  {
    label: 'Клиентов',
    maxCount: 300,
    unit: '+'
  },
  {
    label: 'Успешных поездок',
    maxCount: 200,
    unit: '+'
  },
  {
    label: 'Счастливых клиентов',
    maxCount: 100,
    unit: '%'
  }
]
</script>
