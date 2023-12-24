<template>
  <div class="flex flex-col border-x border-customBlack">
    <div class="border-b border-customBlack p-5">
      <h1 class="text-customBlack lg:text-5xl font-bold md:text-4xl text-3xl">
        О нас
      </h1>
    </div>
    <div class="flex items-center w-full flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 border-customBlack p-10">
        <p class="font-amiko text-lg">
          <span class="text-redJapan font-semibold text-xl">
            Arigato Travel
          </span>
          – ваш надежный проводник в удивительный мир Японии. Наша команда специализируется на организации запоминающихся туров в Страну восходящего солнца. Мы объединяем глубокие знания о Японии с индивидуальным подходом к каждому клиенту, чтобы сделать ваше путешествие незабываемым. С 2017 года на рынке
        </p>
      </div>
      <div class="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l flex justify-center bg-[#f2f2f5]">
        <video
          muted
          loop
          autoplay
          class="h-[400px]"
          src="/video/about.mp4"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
