<template>
  <div class="box">
    <h1>我是App根组件</h1>
  </div>
</template>

<script setup lang="tsx">
const str = '我爱你祖国'
</script>

<style lang="scss">
.box {
  widows: 600px;
  height: 400px;
  background: black;

  h1 {
    color: white;
  }
}
</style>
