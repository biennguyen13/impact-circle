<template>
  <div
    class="relative top-[-1px]"
    style="clip-path: polygon(0 0, 0% 100%, 100% 0)"
    :style="{
      backgroundColor: props.bgColor,
    }"
  ></div>
</template>

<script setup lang="ts">
const props = defineProps({
  bgColor: {
    type: String,
    default: "transparent",
  },
})
</script>

<style lang="scss" scoped>
div {
  height: clamp(40px, 8vw, 100px);
}
</style>
