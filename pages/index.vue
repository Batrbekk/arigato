<template>
  <MainLayout>
    <!--    <ui-headline />-->
    <ui-counters />
    <about-japan />
    <ui-services />
    <ui-reviews />
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layout/mainLayout.vue";
import UiCounters from "~/components/ui-counters.vue";
import AboutJapan from "~/components/about-japan.vue";
import UiServices from "~/components/ui-services.vue";
</script>
