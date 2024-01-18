<template>
  <div class="flex flex-col border border-customBlack">
    <div class="border-b border-customBlack p-4">
      <h1 class="text-customBlack lg:text-5xl font-bold md:text-4xl text-3xl">
        Формат приключения
      </h1>
    </div>
    <div class="flex items-stretch flex-col lg:flex-row">
      <div
        v-for="item in services"
        :key="item.id"
        class="w-full lg:w-1/3 border-b lg:border-0 lg:border-r h-full border-customBlack last:border-0 lg:py-16 lg:h-auto"
      >
        <div class="max-w-sm mx-auto flex flex-col items-center gap-y-5 py-4 md:py-14 lg:py-0">
          <NuxtImg
            class="w-full"
            :src="item.src"
          />
          <h3
            class="text-customBlack text-3xl md:text-4xl font-bold text-center"
            v-html="item.title"
          />
          <NuxtLink
            v-if="item.id !== 3"
            :href="`${item.code}`"
            class="text-redJapan font-semibold cursor-pointer flex items-center gap-x-1"
          >
            Подробнее
            <Icon
              size="18"
              name="material-symbols:arrow-right-alt"
            />
          </NuxtLink>
          <NuxtLink
            v-else
            class="text-redJapan font-semibold cursor-pointer flex items-center gap-x-1"
            @click="$emit('handleModal')"
          >
            Подробнее
            <Icon
              size="18"
              name="material-symbols:arrow-right-alt"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const services = [
  {
    id: 1,
    code: '/#calendar',
    src: '/images/service/group.png',
    icon: 'material-symbols:person-raised-hand',
    title: 'Групповые путешествия',
  },
  {
    id: 2,
    code: '/bisuness',
    src: '/images/service/bisuness.png',
    icon: 'ph:users-four-fill',
    title: 'Бизнес <br/> туры',
  },
  {
    id: 3,
    code: 'group',
    src: '/images/service/individual.png',
    icon: 'material-symbols:groups',
    title: 'Индивидуальные приключения',
  }
];
</script>
