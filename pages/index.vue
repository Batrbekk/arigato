<template>
  <MainLayout>
    <ui-counters />
    <ui-swiper />
    <ui-services
      id="services"
      @handle-modal="handleModal"
    />
    <ui-calendar id="calendar" />
    <ui-emotion />
    <ui-slide-emotion />
    <about-us id="about" />
    <ui-reasons />
  </MainLayout>
  <div
    v-if="isOpen"
    class="top-0 fixed w-screen h-screen z-50 bg-customBlack/[.54] flex items-center justify-center"
  >
    <div class="bg-lightYellow lg:w-6/12 relative">
      <button
        class="absolute right-2 top-2"
        @click="handleModal"
      >
        <Icon
          size="18"
          name="material-symbols:close"
        />
      </button>
      <div class="p-8">
        <div class="bg-gray w-full h-32 lg:h-64" />
        <div class="flex flex-col items-center gap-y-4 mt-4 lg:mt-8">
          <h1 class="text-customBlack lg:text-5xl font-bold md:text-4xl text-3xl text-center">
            Индивидуальные приключения!
          </h1>
          <p class="font-amiko text-lg text-customBlack text-center">
            Мы разработаем индивидуальное путешествие
            для вас в Японию. Оставьте ваши контакты, и
            наш менеджер с вами свяжется!
          </p>
        </div>
      </div>
      <div class="bg-customBlack w-full p-8">
        <div class="flex flex-col items-center gap-2">
          <div class="flex flex-col lg:flex-row items-center gap-2 w-full">
            <ui-input
              label=""
              classes="lg:w-full"
              wrapper-class="w-full lg:max-w-full"
              :model-value="name"
              placeholder="Введите имя"
              type="text"
              @update:model-value="handleInputValueChange"
            />
            <ui-input
              label=""
              classes="lg:w-full"
              wrapper-class="w-full lg:max-w-full"
              :model-value="phoneNumber"
              placeholder="Введите номер телефона"
              type="text"
              @update:model-value="handleNumberValueChange"
            />
          </div>
          <button
            class="bg-redJapan text-lightYellow font-mono text-lg p-4 w-full"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainLayout from "~/layout/mainLayout.vue";
import UiCounters from "~/components/ui-counters.vue";
import UiServices from "~/components/ui-services.vue";
import AboutUs from "~/components/about-us.vue";
import UiCalendar from "~/components/ui-calendar.vue";
import UiEmotion from "~/components/ui-emotion.vue";

const isOpen = useState(() => false);
const name = useState(() => '');
const phoneNumber = useState(() => '');

function handleInputValueChange (newValue: string) {
  name.value = newValue;
}

function handleNumberValueChange (newValue: string) {
  phoneNumber.value = newValue;
}

const handleModal = () => {
  isOpen.value = !isOpen.value;
}
</script>
