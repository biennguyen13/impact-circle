// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title:
        "ラクナル | 物件掲載で差別化を図る不動産デジタルサービスを一括発注",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { hid: "type", property: "type", content: "website" },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "title",
          property: "title",
          content:
            "ラクナル | 物件掲載で差別化を図る不動産デジタルサービスを一括発注",
        },
        {
          hid: "og-title",
          property: "og:title",
          content:
            "ラクナル | 物件掲載で差別化を図る不動産デジタルサービスを一括発注",
        },
        {
          hid: "desc",
          property: "description",
          content:
            "不動産ポータルや自社サイトにおいて他社との差別化を図り、反響獲得をサポートします。ラクナルは最新のデジタルサービスを利用した集客の質と量の課題をまとめて改善する一括発注プラットフォームです。",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "不動産ポータルや自社サイトにおいて他社との差別化を図り、反響獲得をサポートします。ラクナルは最新のデジタルサービスを利用した集客の質と量の課題をまとめて改善する一括発注プラットフォームです。",
        },
        // {
        //   hid: "image",
        //   property: "image",
        //   content: "https://raknal.com/OGP.png",
        // },
        // {
        //   hid: "og-image",
        //   property: "og:image",
        //   content: "https://raknal.com/OGP.png",
        // },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        // {
        //   innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        //   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        //   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        //   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        //   })(window,document,'script','dataLayer','GTM-5GT84FP');`,
        // },
        {
          src: "/libs/slick-1.8.1/jquery-2.2.0.min.js",
        },
        {
          src: "/libs/slick-1.8.1/slick/slick.js",
        },
        {
          src: "https://kit.fontawesome.com/d9876ed7d9.js",
          crossorigin: "anonymous",
        },
        // {
        //   src: "https://smtpjs.com/v3/smtp.js",
        // },
      ],
      // noscript: [
      //   {
      //     children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GT84FP" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      //     body: true,
      //   },
      // ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    // CSS file in the project
    "~/assets/scss/main.scss",
    "~/public/libs/slick-1.8.1/slick/slick.css",
    "~/public/libs/slick-1.8.1/slick/slick-theme.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
