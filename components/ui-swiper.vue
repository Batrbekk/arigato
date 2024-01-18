<template>
  <div class="border-x border-b border-customBlack">
    <Carousel
      :autoplay="3000"
      :items-to-show="itemsToShow"
      :wrap-around="true"
      :transition="800"
      class="py-4"
    >
      <Slide
        v-for="slide in reviews"
        :key="slide.id"
        class="cursor-pointer"
      >
        <div class="px-4">
          <NuxtImg
            :src="slide.src"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import {Carousel, Slide} from "vue3-carousel";

const reviews = [
  {
    id: 0,
    src: '/images/swiper/1.png',
  },
  {
    id: 1,
    src: '/images/swiper/2.png',
  },
  {
    id: 2,
    src: '/images/swiper/3.png',
  },
  {
    id: 3,
    src: '/images/swiper/4.png',
  },
  {
    id: 4,
    src: '/images/swiper/5.png',
  },
  {
    id: 5,
    src: '/images/swiper/6.png',
  },
  {
    id: 6,
    src: '/images/swiper/8.png',
  },
  {
    id: 7,
    src: '/images/swiper/9.png',
  },
  {
    id: 8,
    src: '/images/swiper/10.png',
  },
  {
    id: 9,
    src: '/images/swiper/11.png',
  }
];

const itemsToShow = computed(() => {
  if(process.client) {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth > 728 && windowWidth < 1280) {
      return 2;
    } else  if (windowWidth > 1280) {
      return 3;
    } else if (windowWidth > 0 && windowWidth < 728) {
      return 1;
    }
  }
});
</script>

<style lang="scss">
.carousel__slide--active {
  opacity: 1!important;
  transform: none!important;
  box-shadow: none!important;
}
.carousel__slide {
  box-shadow: rgba(5, 64, 72, 0.05) 0 1px 20px 0;
  transform: rotateY(20deg) scale(0.9);
  opacity: 0.2;
}
</style>
