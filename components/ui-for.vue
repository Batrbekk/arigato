<template>
  <div class="border-customBlack border-x border-t">
    <div class="border-b border-customBlack p-4">
      <h1 class="text-customBlack lg:text-5xl font-bold md:text-4xl text-3xl">
        <span class="text-redJapan">Arigato travel</span> для
      </h1>
    </div>
    <div class="flex flex-col lg:flex-row justify-between gap-2 lg:gap-0 p-4 lg:p-8 text-customBlack font-amiko font-semibold text-2xl">
      <p
        v-for="item in staticTexts"
        :key="item.id"
        class="hover:text-redJapan cursor-pointer"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const staticTexts = [
  {
    id: 0,
    text: 'Бизнес ĸлубов'
  },
  {
    id: 1,
    text: 'Корпораций и банĸов'
  },
  {
    id: 2,
    text: 'Крупных сообществ'
  },
  {
    id: 3,
    text: 'Онлайн- шĸол'
  },
  {
    id: 4,
    text: 'Топ-блогера'
  }
]
</script>
