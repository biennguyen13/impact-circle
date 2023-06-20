<template>
  <div class="banner relative">
    <img :src="banner" alt="banner" />
    <div class="absolute inset-0 flex justify-center items-center">
      <h1
        class="md:text-[48px] md:leading-[64px] text-[40px] leading-[52px] font-[900] text-white text-center"
      >
        <span
          class="text-[14px] md:text-[24px] leading-[14px] md:leading-[32px] font-[900] text-white"
        >
          インパクトサークルのカーリース
        </span>
        <div class="mb-4"></div>
        新たな一歩を踏み出す人を応援します
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import banner from "~/assets/images/home-page/banner.png"
</script>

<style scoped lang="scss">
@media screen and (max-width: 767px) {
  .banner {
    /* margin: 0 -1.5rem; */
  }
}
</style>
