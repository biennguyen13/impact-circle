<template>
  <div class="service mx-auto max-w-[800px] pb-[76px] pt-12 md:pt-[100px]">
    <div class="text-center mb-10 md:mb-20">
      <p
        class="text-[16px] md:text-[24px] leading-[24px] opacity-60 font-[600]"
      >
        Service
      </p>
      <CommonUnderline class="underline text-center" />
      <h2
        class="mt-6 text-[26px] leading-[26px] md:text-[48px] md:leading-[48px] font-[700] text-impact-black"
      >
        サービス概要
      </h2>
    </div>
    <p
      class="mb-20 font-[700] md:text-[32px] md:leading-[64px] text-[20px] leading-[40px] text-justify"
    >
      インパクトサークルは、今後安定的に成長が見込まれる物流業界においてドライバーの方の収入向上や新たな雇用機会の創出を目的として、個人向けにカーリースの提供を行っています。従来の金融機関・リース会社による「過去」に基づく審査ではなく、「これからの」頑張りを評価する独自の審査基準によって、未来に向けて一歩踏み出す意志ある方を応援していきます。
    </p>
    <img :src="service" alt="service" />
  </div>
</template>

<script lang="ts" setup>
import service from "~/assets/images/home-page/service.png"
</script>
