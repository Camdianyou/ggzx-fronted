<template>
  <div class="box">
    <!-- 测试svg图标的使用 -->
    <!-- 需要和use标签结合使用 -->
    <svg>
      <use
        :xlink:href="prefix + name"
        :fill="color"
        :width="width"
        :height="height"
      ></use>
    </svg>
  </div>
</template>

<script setup lang="tsx">
// 接收父组件传递过来的参数
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
  },
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递的宽高
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style lang="scss"></style>
