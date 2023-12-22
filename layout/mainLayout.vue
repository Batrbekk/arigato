<template>
  <div>
    <nav-bar />
    <div class="container mx-auto">
      <slot />
    </div>
    <foo-ter />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "~/components/nav-bar.vue";
import FooTer from "~/components/foo-ter.vue";
</script>
