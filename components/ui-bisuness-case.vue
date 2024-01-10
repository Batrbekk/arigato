<template>
  <div class="border-x border-b border-customBlack">
    <div class="border-b border-customBlack p-4">
      <h1 class="text-customBlack lg:text-5xl font-bold md:text-4xl text-3xl">
        Реализованные кейсы
      </h1>
    </div>
    <div class="flex items-start flex-col-reverse lg:flex-row">
      <div class="w-full lg:w-1/2">
        <ui-swiper
          class="!border-0"
          classes=""
        />
      </div>
      <div class="p-4 flex flex-col gap-y-2">
        <p class="text-lg font-amiko text-redJapan">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p class="text-md font-amiko text-customBlack">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
