<template>
  <section class="faq">
    <div class="container mx-auto">
      <h3 class="text-center faq-info-title text-[16px] lg:text-[24px]">
        FAQ
        <CommonUnderline class="underline text-center" />
      </h3>
      <h2 class="mt-[24px] text-[26px] lg:text-[48px] text-center mb-[80px]">
        よくあるご質問
      </h2>

      <div class="faq-list mt-[100px]">
        <div
          class="faq-item"
          :class="{ active: faq.active }"
          v-for="(faq, index) in faqs"
          :key="index"
          @click="toggleFaq(index)"
        >
          <div class="question-wrapper flex justify-between">
            <div class="question flex mr-[30px]">
              <p class="mr-[10px] font-bold question-text">Q</p>
              <p class="question-description text-[18px] lg:text-[24px]">
                {{ faq.question }}
              </p>
            </div>
            <div class="button-action">
              <CommonPlusOutline v-if="!faq.active" />
              <CommonMinusOutline v-else />
            </div>
          </div>

          <div class="answer flex">
            <p class="answer-text">A</p>
            <p class="answer-description">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = ref([
  {
    question:
      "過去に他の金融機関で審査を通過できなかったのですが、インパクトサークルのカーリースの審査に問題ありませんか？",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
  {
    question: "仕事を辞めてしまった場合、リース契約はどうなりますか。",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
  {
    question: "車両は自分で選ぶことができますか。",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
  {
    question: "「インパクト」とは何ですか。",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
  {
    question: "インパクトサークルの事業目的は何ですか。",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
  {
    question: "現在リースをしている車両から契約を乗り換えることはできますか。",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
  {
    question: "車両は私用でも使えますか。",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
  {
    question: "メンテナンスや保険は個人で別途契約することも可能ですか。",
    answer:
      "インパクトサークルは過去ではなく未来を審査する新しいカーリースです。これから長く安定的にお仕事に就ける方であれば、多くの方にご利用いただけます（独自の審査プロセスは設けております）。",
    active: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].active = !faqs.value[index].active;
};
</script>

<style lang="scss">
.faq {
  padding: 90px 0 120px 0;
}
.faq-info-title {
  font-weight: 700;
  opacity: 0.6;
}

.faq-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 40px 0;
  color: #444444;
  &.active {
    .question-text {
      color: #0198e0;
    }

    .answer {
      padding-top: 28px;
      padding-bottom: 28px;
      margin-top: 24px;
      opacity: 1;
      visibility: visible;
      height: 100%;
    }
  }
}

.faq-item:first-child {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.answer {
  padding-left: 24px;
  padding-right: 24px;
  background: #e8f5fc;
  border-radius: 8px;
  transition: 0.2s ease;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;

  .answer-text {
    margin-right: 16px;
    color: #9bded2;
  }
}
</style>
