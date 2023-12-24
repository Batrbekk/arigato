<template>
  <MainLayout>
    <!--    <ui-headline />-->
    <ui-counters />
    <about-japan />
    <about-us id="about" />
    <ui-services id="services" />
    <ui-partners />
    <ui-reviews />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "~/layout/mainLayout.vue";
import UiCounters from "~/components/ui-counters.vue";
import AboutJapan from "~/components/about-japan.vue";
import UiServices from "~/components/ui-services.vue";
import AboutUs from "~/components/about-us.vue";
</script>
