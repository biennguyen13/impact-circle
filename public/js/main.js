window.addEventListener("load", function (event) {
  // header - begin
  const headerRef = document.querySelector('[ref="headerRef"]');

  this.addEventListener("scroll", function () {
    if (!headerRef) return;
    var scrollPosition = this.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 100) {
      headerRef.classList.add("scrolling");
    } else {
      headerRef.classList.remove("scrolling");
    }
  });

  const hamburgerButton = document.querySelector("#hamburger");
  const navMobile = document.querySelector("#nav-mobile");

  hamburgerButton?.addEventListener("click", function (event) {
    navMobile?.classList.toggle("left-[-100%]");
  });
  // header - end

  // banner - begin
  const sunRise1 = document.querySelector("#sun-rise-1");
  const sunRise2 = document.querySelector("#sun-rise-2");
  if (sunRise1) {
    const textArr =
      sunRise1.textContent
        ?.replaceAll?.(" ", "")
        .replaceAll("\n", "")
        .split("") ?? [];

    let result = "";
    const delay = 0.1;

    textArr.forEach((item, index) => {
      result += `<span class="inline-block overflow-hidden"><span class="a--hn inline-block" style="transition-delay: ${delay}s;">${item}</span></span>`;
    });

    sunRise1.innerHTML = result;

    this.setTimeout(() => {
      sunRise1.querySelectorAll(".a--hn").forEach((item) => {
        item.classList.add("a--hdn");
      });
    });
  }
  if (sunRise2) {
    const textArr =
      sunRise2.textContent
        ?.replaceAll?.(" ", "")
        .replaceAll("\n", "")
        .split("") ?? [];

    let result = "";
    const delay = 0.5;

    textArr.forEach((item, index) => {
      result += `<span class="inline-block overflow-hidden"><span class="a--hn inline-block" style="transition-delay: ${
        delay + index * 0.1
      }s;">${item}</span></span>`;
    });

    sunRise2.innerHTML = result;

    this.setTimeout(() => {
      sunRise2.querySelectorAll(".a--hn").forEach((item) => {
        item.classList.add("a--hdn");
      });
    });
  }
  // banner - end

  // IntersectionObserver - begin
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,
    }
  );

  document.querySelectorAll("[observe]").forEach((ele) => {
    observer.observe(ele);
  });
  // IntersectionObserver - end

  // product slider

  $("#productSlider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<div class="arr prev-arr">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9654 36.7154L1.18459 19.9731C1.04356 19.832 0.939707 19.6846 0.873041 19.5307C0.806374 19.3769 0.773041 19.2 0.773041 19C0.773041 18.8 0.806374 18.6231 0.873041 18.4692C0.939707 18.3154 1.04356 18.1679 1.18459 18.0269L18.0038 1.24613C18.2167 1.00766 18.4974 0.888428 18.8461 0.888428C19.1949 0.888428 19.4885 1.02048 19.7269 1.28458C19.9731 1.50511 20.0961 1.80063 20.0961 2.17113C20.0961 2.54163 19.9731 2.84996 19.7269 3.09613L3.82309 19L19.7654 34.9423C20.0192 35.2218 20.1423 35.5256 20.1346 35.8538C20.1269 36.182 19.991 36.4654 19.7269 36.7038C19.5064 36.95 19.2109 37.0731 18.8404 37.0731C18.4699 37.0731 18.1782 36.9538 17.9654 36.7154Z" fill="#666666"/>
</svg>
      </div>
`,
    nextArrow: `<div class="arr next-arr">
      <svg width="21" height="38" viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.22306 36.6424C0.984622 36.4219 0.863471 36.1347 0.859605 35.7808C0.855771 35.427 0.976922 35.127 1.22306 34.8808L17.1654 18.9385L1.1846 2.9962C0.946138 2.75774 0.824989 2.47249 0.821155 2.14045C0.817322 1.80839 0.951288 1.51927 1.22306 1.2731C1.46152 1.02697 1.75961 0.895572 2.11731 0.878905C2.47501 0.862238 2.77694 0.97697 3.02311 1.2231L19.7654 17.9655C19.9064 18.1321 20.0103 18.2924 20.077 18.4462C20.1436 18.6 20.177 18.7641 20.177 18.9385C20.177 19.1385 20.1436 19.3154 20.077 19.4693C20.0103 19.6231 19.9064 19.7706 19.7654 19.9116L2.9846 36.6924C2.74614 36.9308 2.46089 37.0501 2.12886 37.0501C1.79679 37.0501 1.49486 36.9142 1.22306 36.6424Z" fill="#666666"/>
</svg>
      </div>
`,
  });

  // faq

  const faqs = [
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
      question:
        "現在リースをしている車両から契約を乗り換えることはできますか。",
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
  ];

  const buildFaqItemElement = (faq, index) => {
    const faqTemplate = document.querySelector("#faqTemplate");

    const faqFragment = faqTemplate.content.cloneNode(true);

    const faqElement = faqFragment.querySelector(".faq-item");

    faqElement.setAttribute("id", `faq-${index}`);

    const question = faqElement.querySelector(".question-description");

    question.textContent = faq.question;

    const answer = faqElement.querySelector(".answer-description");

    answer.textContent = faq.answer;

    const questionSection = faqElement.querySelector(".question-wrapper");

    questionSection.addEventListener("click", () => {
      faqElement.classList.toggle("active");
    });

    return faqElement;
  };

  const buildFaqList = (faqs) => {
    const faqWrapper = document.querySelector(".faq-list");
    if (!faqWrapper) return;

    faqs.forEach((faq, index) => {
      faqWrapper.appendChild(buildFaqItemElement(faq, index));
    });
  };

  buildFaqList(faqs);
});
