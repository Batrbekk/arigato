<template>
  <div class="flex flex-col">
    <infinite-carousel />
    <div class="bg-customBlack p-24 lg:px-12 lg:py-16 md:!p-4">
      <div class="flex items-center justify-between lg:flex-col lg:gap-y-6">
        <div class="max-w-3xl">
          <h3 class="text-lightYellow font-bold font-mono text-4xl lg:text-center md:text-2xl">
            Будь в курсе с наших новостей. Оставайся в центре происходящего вместе с нами!
          </h3>
        </div>
        <div class="flex gap-x-6 md:flex-col md:w-full md:gap-y-2">
          <ui-input
            label=""
            :model-value="email"
            placeholder="Введите почту"
            type="text"
            classes="md:!w-full"
            wrapper-class="md:!max-w-full"
            @update:model-value="handleInputValueChange"
          />
          <button class="bg-redJapan text-lightYellow font-mono text-lg p-4 md:w-full">
            Подписаться
          </button>
        </div>
      </div>
      <div class="mt-24 flex items-start justify-between md:flex-col md:mt-8 md:items-center">
        <NuxtImg src="/images/whiteLogo.svg" />
        <div class="w-1/2 flex flex-wrap gap-y-4 md:w-full md:p-4 md:mt-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-lightYellow text-lg w-1/2 md:w-full md:text-center"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
      <div class="mt-20 md:mt-8 flex items-center justify-between md:justify-center md:flex-col gap-4">
        <p class="text-lightYellow text-xs font-mono">
          © Made by Batyrbek -  Powered by Nuxt3/tailwind/i18-n
        </p>
        <div class="text-lightYellow flex items-center gap-x-2">
          <Icon
            size="24"
            name="mdi:instagram"
          />
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
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InfiniteCarousel from "~/components/infinite-carousel.vue";

const links = [
  {
    label: 'Главная',
    to: '/'
  },
  {
    label: 'Агентам',
    to: '/agents'
  },
  {
    label: 'Услуги',
    to: '/services'
  },
  {
    label: 'О нас',
    to: '/about'
  },
  {
    label: 'Контакты',
    to: '/contact'
  }
];
const email = useState(() => '');

function handleInputValueChange (newValue: string) {
  email.value = newValue;
}
</script>
