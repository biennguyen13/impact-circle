<template>
  <section class="company-profile">
    <div class="company-bg"></div>
    <div class="company-profile-content">
      <h3 class="text-center company-info-title text-[16px] lg:text-[24px]">
        Company Profile
        <CommonUnderline class="underline text-center" />
      </h3>
      <h2 class="mt-[24px] text-[26px] lg:text-[48px] text-center">会社概要</h2>

      <div class="mt-[40px]"></div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          会社名
        </p>

        <p class="cpn-block-value text-[16px] lg:text-[18px]">
          インパクトサークル株式会社（英語表記：Impact Circle, Inc.）
        </p>
      </div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          代表者
        </p>

        <p class="cpn-block-value text-[16px] lg:text-[18px]">
          代表取締役社長/CEO 高橋 智志
        </p>
      </div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          監査役
        </p>

        <p class="cpn-block-value text-[16px] lg:text-[18px]">小林寛三</p>
      </div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          顧問弁護士
        </p>

        <p class="cpn-block-value text-[16px] lg:text-[18px]">
          AZX総合法律事務所
        </p>
      </div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          本 社
        </p>

        <p class="cpn-block-value text-[16px] lg:text-[18px]">
          〒108-0075 東京都港区港南2-16-2 太陽生命品川ビル28F
        </p>
      </div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          設立日
        </p>

        <p class="cpn-block-value text-[16px] lg:text-[18px]">2021年7月29日</p>
      </div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          資本金
        </p>

        <p class="cpn-block-value text-[16px] lg:text-[18px]">
          2億5,500万円（資本準備金含む）
        </p>
      </div>

      <div class="company-profile-block flex">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          事業内容
        </p>

        <ol>
          <li>・社会インパクト投資プラットフォームの提供</li>
          <li>・新興国等での社会インパクト型マイクロファイナンスの提供</li>
        </ol>
      </div>

      <div class="company-profile-block flex items-center">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">
          受賞・
          <br />
          所属団体等
        </p>

        <div
          class="px-0 mt-[10px] lg:mt-0 lg:px-[40px] grid gap-4 grid-cols-2 md:grid-cols-3"
        >
          <div class="img-wrapper flex justify-center items-center">
            <img src="/images/LP/2.png" alt="" />
          </div>
          <div class="img-wrapper flex justify-center items-center">
            <img src="/images/LP/4.png" alt="" />
          </div>
          <div class="img-wrapper flex justify-center items-center">
            <img src="/images/LP/5.png" alt="" />
          </div>
          <div class="img-wrapper flex justify-center items-center">
            <img src="/images/LP/3.png" alt="" />
          </div>
          <div class="img-wrapper flex justify-center items-center">
            <img src="/images/LP/1.png" alt="" />
          </div>
          <div class="img-wrapper flex justify-center items-center">
            <img src="/images/LP/6.png" alt="" />
          </div>
        </div>
      </div>

      <div class="company-profile-block flex items-center">
        <p class="cpn-block-label text-[14px] lg:text-[18px] w-[150px]">株主</p>

        <div class="mt-[10px] lg:mt-0">
          <div class="grid gap-4 grid-cols-3">
            <div class="img-wrapper flex items-center">
              <img src="/images/LP_2/3.png" alt="" />
            </div>
            <div class="img-wrapper flex items-center">
              <img src="/images/LP_2/2.png" alt="" />
            </div>
            <div class="img-wrapper flex items-center">
              <img src="/images/LP_2/1.png" alt="" />
            </div>
          </div>

          <p class="mt-[24px] text-[14px]">
            中島 徳至（Global Mobility Service 代表取締役社長）
          </p>
        </div>
      </div>
    </div>

    <div class="company-copy-right mt-[40px] w-[300px] mx-auto text-center">
      <div class="img-wrapper mx-auto flex justify-center">
        <img src="/images/logo.png" alt="" />
      </div>

      <p class="mt-[24px] copy-right">©IMPACT CIRCLE. All right Reserved</p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.company-profile {
  background: #e8f5fc;
  padding-bottom: 84px;
}
.company-bg {
  height: 548px;
  background-image: url(~/assets/images/home-page/company-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: -240px;
  width: 100%;
  @media screen and (max-width: 767px) {
    margin-bottom: -350px;
  }
}

.company-profile-content {
  max-width: 90%;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  padding: 100px 150px 300px 150px;

  @media screen and (max-width: 767px) {
    padding: 40px 24px 30px 24px;
  }
}

.company-info-title {
  font-weight: 700;
  opacity: 0.6;
}

.underline {
  display: block;
  margin: 16px auto 0 auto;
}

.company-profile-block {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 40px 0;
  color: #444444;
  font-size: 18px;

  @media screen and (max-width: 767px) {
    display: block;
  }
}

.copy-right {
  color: #999999;
  font-size: 12px;
}
</style>
