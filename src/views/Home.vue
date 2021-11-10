<!--
 * @Date: 2021-11-10 23:23:08
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-11 00:27:02
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HelloWorld from "@/components/HelloWorld.vue" // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  }
})
</script>
