<template>
  <form @submit.prevent method="post">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Form-Item"
}
</script>

<style scoped>

</style>