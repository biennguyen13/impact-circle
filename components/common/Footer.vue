<template>
  <footer>
    <div class="footer-content-box">
      <div class="content">
        <h3>ドライバーパートナーに応募</h3>
        <p>※外部サイトにリンクします</p>
      </div>
      <div class="chev-right">
        <CommonChevRight />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
footer {
  padding: 14.5px 19px;
  background: linear-gradient(230.65deg, #0170a7 0.93%, #2ec7ff 100%);

  .footer-content-box {
    background: #ffffff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    padding: 24px 32px;
    color: #1392c9;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 24px;

      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
    p {
      font-size: 11px;
    }

    .content {
      margin-right: 50px;
      @media screen and (max-width: 768px) {
        margin-right: 20px;
      }
      text-align: center;
    }
  }
}
</style>
