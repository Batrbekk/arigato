<template>
  <div class="flex flex-col lg:flex-row items-center border-t-0 border border-customBlack md:px-0 lg:px-5 lg:h-64">
    <div class="lg:w-1/2 w-full p-4 lg:p-0 border-b border-customBlack lg:border-0">
      <h1 class="uppercase text-customBlack text-3xl md:text-5xl font-semibold text-center lg:text-left">
        У ВАС ЕСТЬ ВОПРОСЫ?
        ДАВАЙТЕ ПОГОВОРИМ.
      </h1>
    </div>
    <div class="lg:w-1/2 flex flex-col lg:flex-row items-start w-full p-4 md:p-8 gap-y-4">
      <div class="flex flex-row lg:flex-col items-center lg:items-start w-full lg:w-1/2">
        <div class="flex flex-col w-1/2 lg:w-full items-center lg:items-start lg:mb-4">
          <p class="text-redJapan text-base md:text-lg font-semibold">
            Обратная связь
          </p>
          <p class="text-lightBlack text-sm md:text-base md:w-4/6 lg:w-full xl:w-4/6 text-center lg:text-left">
            Хотите оставить отзыв нашей команде?
          </p>
        </div>
        <div class="flex flex-col w-1/2 lg:w-full items-center lg:items-start">
          <p class="text-redJapan text-base md:text-lg font-semibold">
            Карьера
          </p>
          <p class="text-lightBlack text-sm md:text-base md:w-4/6 lg:w-full xl:w-4/6 text-center lg:text-left">
            Хотите присоединиться к нашей растущей команде?
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-y-4">
        <div class="flex items-center gap-x-4 text-redJapan">
          <NuxtLink href="https://www.instagram.com/arigato.travel/">
            <Icon
              size="24"
              name="mdi:instagram"
            />
          </NuxtLink>
          <Icon
            size="24"
            name="mdi:twitter"
          />
          <Icon
            size="24"
            name="mdi:vk"
          />
          <Icon
            size="24"
            name="mdi:telegram"
          />
        </div>
        <div class="flex flex-col">
          <a
            href="mailto:hello@arigatotravel.kz"
            class="text-redJapan hover:underline font-semibold text-sm md:text-lg"
          >
            hello@arigatotravel.kz
          </a>
          <a
            href="tel:+77010638848"
            class="text-redJapan hover:underline font-semibold text-sm md:text-lg"
          >
            +7-(701)-063-88-48
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
