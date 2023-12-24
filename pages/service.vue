<template>
  <main-layout>
    <div
      v-if="param === 'group'"
      class="flex lg:flex-row flex-col-reverse items-center w-full border-x border-b border-customBlack"
    >
      <div class="w-full lg:w-1/2 flex flex-col gap-y-4 p-10">
        <h2 class="text-redJapan text-3xl font-semibold font-amiko">
          Культурное наследие Японии!
        </h2>
        <p class="text-xl text-lightBlack font-amiko">
          Камерная и комфортная группа в 10 человек
        </p>
        <div class="flex items-center gap-x-4 my-4">
          <p class="bg-redJapan px-4 py-2 md:px-8 md:py-4 rounded-full text-lightYellow font-amiko font-semibold text-xl">
            Токио
          </p>
          <p class="bg-redJapan px-4 py-2 md:px-8 md:py-4 rounded-full text-lightYellow font-amiko font-semibold text-xl">
            Киото
          </p>
          <p class="bg-redJapan px-4 py-2 md:px-8 md:py-4 rounded-full text-lightYellow font-amiko font-semibold text-xl">
            Нара
          </p>
        </div>
        <div class="flex flex-col gap-y-4">
          <div class="flex items-center gap-x-4">
            <div class="flex items-center justify-center bg-redJapan text-lightYellow p-2 rounded-full">
              <Icon
                name="uil:metro"
                size="24"
              />
            </div>
            <p class="text-lightBlack font-amiko text-lg">
              Передвижения на Общественном транспорте;
            </p>
          </div>
          <div class="flex items-center gap-x-4">
            <div class="flex items-center justify-center bg-redJapan text-lightYellow p-2 rounded-full">
              <Icon
                name="ic:twotone-star-border"
                size="24"
              />
            </div>
            <p class="text-lightBlack font-amiko text-lg">
              Размещение в отличных отелях 3/4 звезды
              при 2х местном размещении;
            </p>
          </div>
          <div class="flex items-center gap-x-4">
            <div class="flex items-center justify-center bg-redJapan text-lightYellow p-2 rounded-full">
              <Icon
                name="material-symbols:line-end-arrow-notch-rounded"
                size="24"
              />
            </div>
            <p class="text-lightBlack font-amiko text-lg">
              Индивидуальный трансфер для группы Аэропорт - Отель - Аэропорт;
            </p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:border-l border-t lg:border-t-0 border-customBlack">
        <video
          muted
          loop
          autoplay
          src="/video/corp.mp4"
        />
      </div>
    </div>
    <div
      v-if="param === 'group'"
      class="flex lg:flex-row flex-col items-center w-full border-x border-b border-customBlack"
    >
      <div class="w-full lg:w-1/2 lg:border-r border-t lg:border-t-0 border-customBlack">
        <NuxtImg
          class="w-full"
          src="/images/graphic.svg"
        />
      </div>
      <div class="w-full lg:w-1/2 flex flex-col gap-y-4">
        <Carousel
          :wrap-around="true"
          :autoplay="3000"
        >
          <Slide
            v-for="slide in days"
            :key="slide.id"
          >
            <NuxtImg
              :src="slide.src"
              class="w-full"
              alt="img"
            />
          </Slide>
        </Carousel>
      </div>
    </div>
    <div
      v-if="param === 'group'"
      class="flex lg:flex-row flex-col items-start w-full border-x border-b border-customBlack"
    >
      <div class="w-full lg:w-1/2 border-customBlack">
        <div class="flex flex-col gap-y-4 p-4 lg:p-10">
          <div class="bg-redJapan p-4">
            <h2 class="text-lightYellow font-semibold font-amiko md:text-xl lg:text-2xl">
              Включено в тур:
            </h2>
            <div class="flex flex-col mt-4 text-lightYellow gap-y-2 md:text-base lg:text-lg">
              <p>Виза в Японию (полное сопровождение);</p>
              <p>Страховой медицинский полис на даты тура;</p>
              <p>Размещение в чистых и комфортных отелях 3/4 звезды при 2х местном размещении;</p>
              <p>Питание: Завтраки Включены;</p>
              <p>Все входные билеты Включены (Shibuya Sky, Team Lab тоже включены);</p>
              <p>Индивидуальный трансфер для группы Аэропорт - Отель - Аэропорт;</p>
            </div>
          </div>
          <div class="bg-gray p-4">
            <h2 class="text-lightYellow font-semibold font-amiko md:text-xl lg:text-2xl">
              В тур не включено:
            </h2>
            <div class="flex flex-col mt-4 text-lightYellow gap-y-2 md:text-base lg:text-lg">
              <p>Авиабилеты до Японии,через Сеул;</p>
              <p>Проездные Билеты и билеты н а скоростной поезд-300$-Обеды,Ужины и Личные расходы</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:border-l border-t lg:border-t-0 flex flex-col gap-y-4">
        <NuxtImg
          class="w-full"
          src="/images/corp-price.svg"
        />
      </div>
    </div>
    <div v-else>
      {{ param }}
    </div>
  </main-layout>
</template>

<script lang="ts" setup>
import MainLayout from "~/layout/mainLayout.vue";
import type {LocationQueryValue} from "vue-router";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel";

const param = useState< LocationQueryValue | LocationQueryValue[] | string>(() => '');
const router = useRoute();

const days = [
  {
    id: 1,
    src: '/images/graph-day/1.svg'
  },
  {
    id: 2,
    src: '/images/graph-day/2.svg'
  },{
    id: 3,
    src: '/images/graph-day/3.svg'
  },{
    id: 4,
    src: '/images/graph-day/4.svg'
  },{
    id: 5,
    src: '/images/graph-day/5.svg'
  },{
    id: 6,
    src: '/images/graph-day/6.svg'
  },{
    id: 7,
    src: '/images/graph-day/7.svg'
  }
]

onMounted(() => {
  param.value = router.query.type
})
</script>
