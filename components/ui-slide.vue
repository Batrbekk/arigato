<template>
  <div class="h-full flex gap-x-4">
    <div class="bg-milk w-full h-full flex flex-col justify-center relative cursor-pointer">
      <div class="flex flex-col absolute top-8 left-8">
        <p class="uppercase text-redJapan font-bold text-base">
          Токио
        </p>
        <p class="text-lightBlack font-bold text-2xl">
          И его окрестности
        </p>
      </div>
      <NuxtImg
        class="px-16"
        src="/images/head1.svg"
      />
    </div>
    <div class="bg-gray w-2/12 overflow-hidden relative cursor-pointer">
      <img
        class="h-full !max-w-none grayscale img-center"
        src="/images/head2.svg"
        alt="block"
      >
    </div>
    <div class="bg-gray w-2/12 overflow-hidden relative cursor-pointer">
      <img
        class="h-full !max-w-none grayscale img-center"
        src="/images/head3.svg"
        alt="block"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const currentCard = useState<number>(() => 0);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function changeCard (card: number) {
  currentCard.value = card;
}
</script>

<style lang="scss" scoped>
.img-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
}
</style>
