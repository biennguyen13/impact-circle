<template>
  <section class="flow py-[186px]">
    <div class="px-6 mx-auto">
      <h3 class="text-center flow-info-title text-[16px] lg:text-[24px]">
        Flow
        <CommonUnderline class="underline text-center" />
      </h3>
      <h2 class="mt-[24px] text-center mb-[80px] text-[26px] lg:text-[48px]">
        ご利用の流れ
      </h2>

      <div class="flow-box">
        <span>
          弊社パートナー企業の配送ドライバーパートナー（個人事業主）募集案件に応募
        </span>
      </div>

      <div class="down-icon">
        <CommonChevDown />
      </div>

      <div class="flow-box">
        <span> 弊社パートナー企業からの弊社リースサービスのご紹介 </span>
      </div>

      <div class="down-icon">
        <CommonChevDown />
      </div>
      <div class="flow-box">
        <span> リース申込書および事前アンケートの提出 </span>
      </div>

      <div class="down-icon">
        <CommonChevDown />
      </div>
      <div class="flow-box">
        <span> 審査完了、リース契約締結 </span>
      </div>

      <div class="down-icon">
        <CommonChevDown />
      </div>
      <div class="flow-box">
        <span> 納車および契約時期の調整 </span>
      </div>

      <div class="down-icon">
        <CommonChevDown />
      </div>
      <div class="flow-box">
        <span> 納車、リース開始 </span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.flow {
  background: #e8f5fc;
  clip-path: polygon(0% 0%, 0% 100%, 0 100%, 100% 95%, 100% 0%);
}
.flow-info-title {
  font-weight: 700;
  opacity: 0.6;
}

.flow-box {
  padding: 32px 0;
  @media screen and (max-width: 768px) {
    padding: 24px;
    font-size: 18px;
  }
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  text-align: center;
}

.down-icon {
  margin: 40px 0;
  text-align: center;

  svg {
    margin: 0 auto;
  }
}
</style>
