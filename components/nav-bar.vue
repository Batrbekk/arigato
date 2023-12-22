<template>
  <div
    class="container mx-auto border border-customBlack md:h-20 h-16 relative"
    :class="isOpen && '!h-80'"
  >
    <div
      class="flex items-center justify-between h-full"
      :class="isOpen && '!h-16'"
    >
      <NuxtLink
        to="/"
        class="cursor-pointer px-4 h-full flex items-center"
      >
        <div class="hidden lg:block">
          <NuxtImg
            src="/images/logo.svg"
            height="56"
          />
        </div>
        <div class="block lg:hidden">
          <NuxtImg
            src="/images/mobileLogo.svg"
            height="36"
          />
        </div>
      </NuxtLink>
      <div class="lg:flex items-center h-full hidden">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-mono text-lg px-6 border-l border-customBlack h-full flex items-center hover:text-lightYellow"
          :class="link.to === '/contact' ? 'hover:bg-redJapan' : 'hover:bg-customBlack'"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
      <div class="block lg:hidden px-2 z-50">
        <button
          class="px-1 text-lightBlack"
          @click="handleOpen"
        >
          <Icon
            v-if="!isOpen"
            size="24"
            name="ci:hamburger"
          />
          <Icon
            v-else
            size="24"
            name="material-symbols:close"
          />
        </button>
      </div>
      <div
        class="items-center h-full hidden flex-col absolute justify-end bottom-0 w-full border border-customBlack"
        :class="isOpen && '!flex'"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="font-mono text-lg h-16 px-6 border-customBlack border-t flex items-center justify-center w-full"
          :class="link.to === '/contact' && 'bg-redJapan text-lightYellow'"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
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

const isOpen = useState(() => false);

function handleOpen () {
  isOpen.value = !isOpen.value
}
</script>
