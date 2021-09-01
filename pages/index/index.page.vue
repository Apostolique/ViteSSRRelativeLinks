<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>

  <img src="./test.jpg" alt="">
  <br />
  <a href="./test.jpg">test1</a>
  <br />
  <a href="/pages/index/test.jpg">test2</a>
</template>

<script>
import Counter from './Counter.vue'
const components = { Counter }
export default { components }
</script>
