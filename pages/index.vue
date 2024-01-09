<template>
  <MainLayout>
    <ui-counters />
    <ui-swiper />
    <ui-services id="services" />
    <ui-calendar id="calendar" />
    <ui-emotion />
    <ui-slide-emotion />
    <about-us id="about" />
    <ui-reasons />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layout/mainLayout.vue";
import UiCounters from "~/components/ui-counters.vue";
import UiServices from "~/components/ui-services.vue";
import AboutUs from "~/components/about-us.vue";
import UiCalendar from "~/components/ui-calendar.vue";
import UiEmotion from "~/components/ui-emotion.vue";
</script>
