<template>
  <section class="product">
    <div class="product-bg"></div>
    <div ref="slideRef" class="slider-wrapper max-w-[840px] w-[80%]">
      <div v-for="index in 4" :key="index" class="slider-item">
        <div class="flex items-center flex-col">
          <h3 class="text-center product-info-title text-[16px] lg:text-[24px]">
            Vehicle
            <CommonUnderline class="underline text-center" />
          </h3>
          <h2
            class="mt-[24px] text-[26px] lg:text-[48px] text-center mb-[40px] lg:mb-[80px]"
          >
            提供車両例
          </h2>

          <div class="product-img max-w-[643px] mb-[16px]">
            <img class="w-max" src="/images/slider/1.png" alt="" />
          </div>

          <p class="font-bold text-[18px] lg:text-[24px]">
            ダイハツ ハイゼットカーゴ
          </p>
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <font-awesome-icon icon="fa-solid fa-chevron-left" />

          <p class="lg:text-[18px] text-[14px]">グレード スペシャル 5ドア</p>
          <button class="btn-pdf lg:mt-[40px] mt-[20px]">
            <CommonPdf />
            <span class="lg:text-[18px] text-[14px]"> リースプラン詳細 </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: [] },
  },
  data() {
    return {};
  },
  mounted() {
    const $ = window.jQuery;
    $(this.$refs.slideRef).slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: `<svg class="arr next-arr svg-inline--fa fa-chevron-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path class="" fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>`,
      prevArrow: `<svg class="arr prev-arr svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path class="" fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>`,
    });
  },
  methods: {
    handleButtonClick(method) {
      const $ = window.jQuery;
      $(this.$refs.slideRef).slick(method);
    },
    handleSlideClick(e) {
      console.log("%cSlide.vue line:62 e", "color: #007acc;", e);
    },
  },
};
</script>

<style lang="scss">
.product-info-title {
  font-weight: 700;
  opacity: 0.6;
}
.product {
  position: relative;
  background: #e8f5fc;
  clip-path: polygon(0% 5%, 0% 100%, 0 100%, 100% 100%, 100% 0%);
  min-height: 800px;
  padding: 100px 0;
}
.product-bg {
  background-image: url(~/assets/images/home-page/product-bg.png);
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 2;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0% 5%, 0% 100%, 0 100%, 100% 95%, 100% 0%);
}

.slider-wrapper {
  padding: 50px;
  background: #ffffff;
  border-radius: 8px;
  max-width: 840px;
  position: relative;
  z-index: 3;
  margin: 0 auto;
}

.btn-pdf {
  display: flex;
  color: #0198e0;
  border: 1px solid #0198e0;
  border-radius: 100px;
  padding: 12px 24px;
}

.arr {
  position: absolute;
  top: 50%;
  z-index: 200;
  font-size: 40px;
  color: #666666;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
}

.arr.next-arr {
  right: 30px;
}

.arr.prev-arr {
  left: 30px;
}
</style>
