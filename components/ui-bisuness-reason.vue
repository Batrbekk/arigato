<template>
  <div class="border-x border-customBlack border-t">
    <div
      v-for="item in staticTexts"
      :key="item.id"
      class="flex flex-col border-customBlack border-b"
      :class="item.id % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
      <div
        class="bg-gray w-full lg:w-1/2 h-64 border-customBlack border-b lg:border-b-0"
      />
      <div
        class="p-4 lg:p-8 w-full lg:w-[50.05%] flex flex-col gap-y-4"
        :class="item.id % 2 !== 0 ? 'lg:border-r' : 'lg:border-l'"
      >
        <h1 class="text-customBlack text-2xl lg:text-3xl font-amiko font-semibold">
          {{ item.title }}
        </h1>
        <p class="text-customBlack font-amiko text-lg">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const staticTexts = [
  {
    id: 1,
    title: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    id: 2,
    title: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    id: 3,
    title: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  }
];
</script>
