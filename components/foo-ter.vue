<template>
  <div class="flex flex-col">
    <infinite-carousel />
    <div class="bg-customBlack p-4 xl:p-24 md:px-12 md:py-16">
      <div class="flex lg:items-center justify-between flex-col lg:flex-row gap-y-6">
        <div class="max-w-3xl">
          <h3 class="text-lightYellow font-bold font-mono lg:text-4xl text-center lg:text-left text-2xl">
            Будь в курсе с наших новостей. Оставайся в центре происходящего вместе с нами!
          </h3>
        </div>
        <div class="flex gap-x-6 flex-col w-full gap-y-2 lg:flex-row lg:max-w-fit">
          <ui-input
            label=""
            wrapper-class=""
            :model-value="email"
            placeholder="Введите почту"
            type="text"
            @update:model-value="handleInputValueChange"
          />
          <button class="bg-redJapan text-lightYellow font-mono text-lg p-4 md:w-full">
            Подписаться
          </button>
        </div>
      </div>
      <div class="lg:mt-24 flex justify-between flex-col lg:flex-row mt-8 items-center">
        <NuxtImg src="/images/whiteLogo.svg" />
        <div class="lg:w-1/2 flex flex-wrap gap-y-4 w-full p-4 mt-4 lg:p-0 lg:mt-0">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-lightYellow text-lg lg:w-1/2 w-full text-center lg:text-left"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
      <div class="lg:mt-20 mt-8 flex items-center lg:justify-between justify-center flex-col md:flex-row gap-4">
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
