<template>
  <div class="feature mx-auto pb-10 md:pb-[100px] bg-impact-blue-2">
    <CommonRectangle bgColor="white" />
    <div class="text-center mt-10 mb-10 md:mb-20">
      <p
        class="text-[16px] md:text-[24px] leading-[24px] opacity-60 font-[600]"
      >
        Feature
      </p>
      <CommonUnderline class="underline text-center" />
      <h2
        class="mt-6 text-[26px] leading-[38px] md:text-[48px] md:leading-[48px] font-[700] text-impact-black"
      >
        インパクトサークルのリースの特徴
      </h2>
    </div>

    <div
      class="flex gap-8 md:gap-10 mb-16 md:mb-10 flex-wrap justify-center max-w-[1040px] mx-auto"
    >
      <div class="rounded-lg bg-white overflow-hidden max-w-[320px]">
        <img :src="feature1" alt="独自の審査ノウハウに基づく高い審査通過率" />
        <div class="p-6">
          <p class="text-[18px] leading-[26px] font-[500] text-center">
            独自の審査ノウハウに基づく 高い審査通過率
          </p>
        </div>
      </div>
      <div class="rounded-lg bg-white overflow-hidden max-w-[320px]">
        <img
          :src="feature2"
          alt="クルマだけでなく安定収入のお仕事*も一緒にご提供"
        />
        <div class="p-6">
          <p class="text-[18px] leading-[26px] font-[500] text-center">
            クルマだけでなく安定収入のお仕事*も一緒にご提供
          </p>
        </div>
      </div>
      <div class="rounded-lg bg-white overflow-hidden max-w-[320px]">
        <img
          :src="feature3"
          alt="メンテナンス・任意保険まで込みのあんしんリースプラン"
        />
        <div class="p-6">
          <p class="text-[18px] leading-[26px] font-[500] text-center">
            メンテナンス・任意保険まで込みのあんしんリースプラン
          </p>
        </div>
      </div>
      <div class="rounded-lg bg-white overflow-hidden max-w-[320px]">
        <img :src="feature4" alt="リーズナブルな月額リース料" />
        <div class="p-6">
          <p class="text-[18px] leading-[26px] font-[500] text-center">
            リーズナブルな 月額リース料
          </p>
        </div>
      </div>
      <div class="rounded-lg bg-white overflow-hidden max-w-[320px]">
        <img :src="feature5" alt="リース期間終了後はそのまま自己所有が可能" />
        <div class="p-6">
          <p class="text-[18px] leading-[26px] font-[500] text-center">
            リース期間終了後は そのまま自己所有が可能
          </p>
        </div>
      </div>
    </div>

    <div class="md:px-4">
      <div
        class="max-w-[1120px] bg-white md:rounded-lg px-[24px] md:px-[75px] py-[48px] md:py-[64px] mx-auto"
      >
        <h3
          class="underline text-[26px] md:text-[32px] font-[900] leading-[40px] text-impact-blue-1 text-center"
        >
          個人事業主の方が安心して生活を支えられる仕事が
          <br class="hidden md:block" />
          セットになった新しいカーリース
        </h3>

        <p
          class="mt-8 md:mt-12 mb-8 font-[700] leading-[32px] text-[18px] md:leading-[36px] md:text-[22px] text-justify"
        >
          インパクトサークルのカーリースは、車両をリースで提供するだけの従来のカーリースとは異なり、物流企業とのパートナー連携を通じて、個人事業主のドライバーの方が生活を支えられる安定したお仕事と収入もセットで提供する新しいカーリースサービスです。ドライバーの方に安心してお仕事をいただく為に、リースには任意保険が付保されており、リース料は毎月の収入でお支払い可能なリーズナブルな設定となっています。
        </p>

        <div class="flex justify-between items-center flex-col sm:flex-row">
          <img class="sm:w-[33%] xs:w-[65%]" :src="pig" alt="40万円〜" />
          <img
            class="img-center sm:w-[33%] xs:w-[65%]"
            :src="taxi"
            alt="自動加入"
          />
          <img
            class="sm:w-[33%] xs:w-[65%]"
            :src="taxiImpact"
            alt="28,000円〜"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import feature1 from "~/assets/images/home-page/feature-1.png"
import feature2 from "~/assets/images/home-page/feature-2.png"
import feature3 from "~/assets/images/home-page/feature-3.png"
import feature4 from "~/assets/images/home-page/feature-4.png"
import feature5 from "~/assets/images/home-page/feature-5.png"
import pig from "~/assets/images/home-page/pig.png"
import taxi from "~/assets/images/home-page/taxi.png"
import taxiImpact from "~/assets/images/home-page/taxi-impact.png"
</script>

<style lang="scss" scoped>
.img-center {
  border-top: 2px solid #0198e0;
  border-bottom: 2px solid #0198e0;
  @screen sm {
    border-top: 0px solid #0198e0;
    border-bottom: 0px solid #0198e0;
    border-left: 2px solid #0198e0;
    border-right: 2px solid #0198e0;
  }
}
</style>
