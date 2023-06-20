<template>
  <header
    class="fixed z-10 bg-white w-full"
    style="border-bottom: 1px solid #00000010"
  >
    <div
      ref="headerRef"
      class="header-inner h-[62px] md:h-[90px] px-4 xl:px-10 flex items-center justify-between container mx-auto"
    >
      <NuxtLink to="/" class="flex-shrink-0">
        <img :src="logo" alt="logo" class="logo inline-block" />
      </NuxtLink>
      <div
        class="text-impact-black flex-shrink-0 gap-2 text-xs lg:text-base xl:gap-6 hidden md:flex"
      >
        <a href="javascript:void(0)">サービス概要</a>
        <a href="javascript:void(0)">インパクトサークルの特徴</a>
        <a href="javascript:void(0)">ユーザーの声</a>
        <a href="javascript:void(0)">提供車両</a>
        <a href="javascript:void(0)">ご利用の流れ</a>
        <a href="javascript:void(0)">よくあるご質問</a>
      </div>

      <button class="md:hidden">
        <img :src="menu" alt="menu" class="h-6 w-6" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import logo from "~/assets/images/home-page/logo.png"
import menu from "~/assets/menu.png"

const headerRef = ref<HTMLElement>()

const handler = function () {
  if (!headerRef.value) return
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (scrollPosition >= 100) {
    headerRef.value.classList.add("scrolling")
  } else {
    headerRef.value.classList.remove("scrolling")
  }
}

onMounted(() => {
  window.addEventListener("scroll", handler)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handler)
})
</script>

<style lang="scss" scoped>
.logo {
  width: clamp(200px, 20vw, 260px);
}
.header-inner {
  @screen md {
    &.scrolling {
      transition: height 0.35s;
      height: 62px;
      &:hover {
        height: 90px;
      }
    }
  }
}
</style>
