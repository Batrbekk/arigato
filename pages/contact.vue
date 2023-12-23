<template>
  <main-layout>
    <div class="mb-12">
      <contact-headline />
      <div
        style="position:relative;overflow:hidden;"
        class="my-2 lg:my-0 px-2 lg:px-0 md:px-0"
      >
        <iframe
          src="https://yandex.kz/map-widget/v1/?ll=76.947890%2C43.243409&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NzI5MTAxMxJI0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0YssINCd0LDQt9Cw0YDQsdCw0LXQsiDQtNCw0qPSk9GL0LvRiywgMTc3IgoNUuWZQhVA-SxC&z=17.65"
          width="100%"
          height="500"
          frameborder="1"
          :allowfullscreen="true"
          style="position:relative;"
        />
      </div>
      <div class="px-2 md:px-0 lg:px-0 lg:-translate-y-[100px]">
        <div class="lg:p-14 p-5 bg-snow shadow-lg max-w-[1100px] h-full mx-auto flex flex-col lg:flex-row md:items-center lg:items-start">
          <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            <p class="text-redJapan text-lg font-amiko">
              Напишите нам
            </p>
            <h2 class="text-4xl text-center lg:text-left lg:text-6xl font-sans uppercase font-semibold w-full lg:w-[70%] font-amiko">
              Готовы лететь с нами ?
            </h2>
            <p class="text-center lg:text-left mt-6 w-[80%] text-lightBlack text-lg">
              Не стесняйтесь связаться с нами через нашу
              контактную форму.
            </p>
          </div>
          <div
            v-if="!isTyPage"
            class="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0 gap-y-5"
          >
            <input
              v-model="name"
              type="text"
              class="bg-grayHard p-5 placeholder-[rgba_0_0_0_0.5] text-base"
              placeholder="Имя"
            >
            <input
              v-model="mail"
              type="text"
              class="bg-grayHard p-5 placeholder-[rgba_0_0_0_0.5] text-base"
              placeholder="Почта"
            >
            <textarea
              v-model="message"
              type="text"
              rows="5"
              class="bg-grayHard p-5 placeholder-[rgba_0_0_0_0.5] text-base resize-none"
              placeholder="Сообщение"
            />
            <button
              class="bg-redJapan p-5 text-snow font-ubuntu text-base"
              @click="sendAmo"
            >
              Отправить
            </button>
          </div>
          <div
            v-else
            class="w-full lg:w-1/2 flex flex-col items-center justify-center mt-4 lg:mt-0 h-full"
          >
            <div class="rounded-full bg-redJapan w-16 h-16 text-snow flex items-center justify-center">
              <Icon
                size="32"
                name="material-symbols:check-small"
              />
            </div>
            <h4 class="text-customBlack text-3xl mt-4">
              Спасибо за обращение
            </h4>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup lang="ts">
import MainLayout from "~/layout/mainLayout.vue";
import {$fetch} from "ofetch";

const isTyPage = useState(() => false);

const name = useState(() => '');
const mail = useState(() => '');
const message = useState(() => '');

async function  sendAmo () {
  console.log(name.value, mail.value, message.value);
  try {
    const res = await $fetch('https://forms.amocrm.ru/queue/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'fields[name_1]': name.value,
        'fields[781729_1][438977]': mail.value,
        'fields[1573689_2]': message.value,
        form_id: '1260130',
        hash: 'cd8390870c274b12fd71302080883a32',
        user_origin: `{datetime: ${new Date()},referer: 'https://arigatotravel.amocrm.ru/'}`,
        form_request_id: 'v3va30arv_',
        gso_session_uid: '25ba85e2-075a-4507-8ac4-9dd41546fbea'
      })
    });
    if (res.ok) {
      console.log('asd');
      isTyPage.value = true;
    }
  } catch (err) {
    console.error(err);
    isTyPage.value = true;
  }
}
</script>
