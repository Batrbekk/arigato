<template>
  <div class="flex flex-col border-x border-b border-customBlack">
    <div class="border-b border-customBlack p-4">
      <h1 class="text-customBlack lg:text-5xl font-bold md:text-4xl text-3xl">
        Календарь путешествий
      </h1>
    </div>
    <Carousel
      :autoplay="3000"
      :items-to-show="itemsToShow"
      :wrap-around="true"
      :transition="800"
      class="lg:py-20 py-10"
    >
      <Slide
        v-for="slide in reviews"
        :key="slide.id"
        class="cursor-pointer"
      >
        <div class="bg-lightYellow border flex flex-col items-center justify-center border-customBlack w-full px-10 md:w-[450px] mx-4 md:mx-0 h-[340px] md:px-12">
          <div class="bg-gray h-[200px] w-full" />
          <h3 class="text-customBlack text-2xl font-bold text-center mt-4">
            3-10 марта
          </h3>
          <NuxtLink
            href="#"
            class="text-redJapan font-semibold cursor-pointer flex items-center gap-x-1 mt-2"
          >
            Подробнее
            <Icon
              size="18"
              name="material-symbols:arrow-right-alt"
            />
          </NuxtLink>
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
    src: '/images/avatar.webp',
    name: 'Батырбек',
    nick: 'Любитель пляжей',
    review: '"Booking our beach honeymoon through BookEase was a breeze. The real-time availability feature made planning stress-free, and we found the perfect romantic getaway at SunsetBeach. We can\'t thank BookEase enough for making our dream honeymoon a reality."'
  },
  {
    id: 1,
    src: '/images/avatar.webp',
    name: 'Сара',
    nick: 'Сольный путешественник',
    review: '"As a solo traveler, I value convenience and safety. BookEase delivered on both fronts, and I had an amazing experience at CoralBay. The app\'s user-friendly interface made it easy for me to book and explore my chosen destination. I can\'t wait to use it for my next adventure!"'
  },
  {
    id: 2,
    src: '/images/avatar.webp',
    name: 'Марк',
    nick: 'Спикер',
    review: '"We love spontaneous getaways, and BookEase has become our go-to app. We booked an unforgettable island hopping trip to PalmIsle and had the time of our lives. The in-app travel itinerary and exclusive deals were the icing on the cake."'
  },
  {
    id: 3,
    src: '/images/avatar.webp',
    name: 'София',
    nick: 'Путешественник',
    review: '"Traveling on a budget can be challenging, but BookEase made it possible for me to visit GoldenCove without breaking the bank. The app\'s exclusive offers allowed me to have a luxurious experience without overspending."'
  },
  {
    id: 4,
    src: '/images/avatar.webp',
    name: 'Жанибек',
    nick: 'Летчик',
    review: '"Booking a family vacation can be overwhelming, but BookEase made it seamless. We discovered the family-friendly paradise at CrystalDunes, and our kids had a blast. The 24/7 customer support was a lifesaver when we had questions."'
  },
  {
    id: 5,
    src: '/images/avatar.webp',
    name: 'Аслан',
    nick: 'IT-шник',
    review: '"As a digital nomad, I\'m always on the go. BookEase has been my travel companion, helping me find serene workation spots like MoonlightBay. I can stay productive while surrounded by nature\'s beauty."'
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
