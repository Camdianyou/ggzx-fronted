<template>
  <div class="">
    <h1>测试axios二次封装</h1>
  </div>
</template>

<script setup lang="ts">
import request from './utils/request'
import { onMounted } from 'vue'
onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((data) => {
    console.log(data)
  })
})
</script>

<style scoped lang="scss"></style>
