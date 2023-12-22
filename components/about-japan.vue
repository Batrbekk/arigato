<template>
  <div class="flex lg:flex-row flex-col items-center border border-customBlack lg:h-[650px] mb-10">
    <div class="lg:w-1/2 w-full lg:border-r border-b border-customBlack flex flex-col justify-center items-center h-full gap-8 py-8 lg:py-0">
      <NuxtImg
        src="/images/about_japan.svg"
        class="w-1/2"
      />
      <div class="flex flex-col gap-3 max-w-lg items-center p-4 lg:p-0">
        <h3 class="text-redJapan font-bold text-4xl">
          О Японии
        </h3>
        <p class="text-customBlack text-lg text-center">
          Окунитесь в волшебство Японии: современные технологии, традиционная культура и захватывающие пейзажи.
          От сакуры до сверкающих небоскребов – Япония ждет вас.
          Почувствуйте гармонию в каждой детали этой удивительной страны.
        </p>
      </div>
    </div>
    <div class="lg:w-1/2 flex flex-col justify-center h-full lg:px-12 px-4 gap-y-8 py-8 lg:py-0">
      <div
        v-for="item in desc"
        :key="item.id"
        class="flex flex-col gap-3 lg:max-w-[85%]"
      >
        <h4 class="font-bold text-customBlack text-2xl lg:text-3xl">
          {{ item.title }}
        </h4>
        <p class="text-lg text-customBlack">
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const desc = [
  {
    id: 1,
    title: 'Большой опыт путешествий',
    label: 'Our team has extensive experience in creating e-commerce websites that are easy to navigate and optimized for sales.'
  },
  {
    id: 2,
    title: 'Уникальность маршрута',
    label: 'Whether it\'s a web-based CRM or an inventory management system, Our team can develop custom web applications tailored to your specific needs.'
  },
  {
    id: 3,
    title: 'Сильное окружение',
    label: 'With a focus on responsive design, Our team ensures that your website looks and functions flawlessly across all devices'
  },
  {
    id: 4,
    title: 'Эстетика и комфорт',
    label: 'We can develop customized content management systems (CMS) that make it easy for you to manage your website content.'
  }
]
</script>
