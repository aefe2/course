<template>
  <header-item></header-item>
  <div class="main">
    <h1>Not Found</h1>
  </div>
  <footer-item></footer-item>
</template>

<script>
import HeaderItem from "@/App.vue";
import FooterItem from "@/App.vue";

export default {
  name: "NotFoundPage",
  components: {FooterItem, HeaderItem}
}
</script>

<style scoped>
.main {
  margin-top: 50px;
}

</style>