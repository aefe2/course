<template>
  <form @submit.prevent method="post" class="add-doctor-form">
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