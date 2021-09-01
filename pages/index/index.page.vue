<template>
  <h1>Home</h1>

  <img src="./test.jpg" alt="">
  <br />
  <a href="./test.jpg">Test1</a>
  <br />
  <a href="/pages/index/test.jpg">Test2</a>
  <br />
  <a :href="imgUrl">Test3</a>
</template>

<script setup>
import imgUrl from './test.jpg'
</script>
