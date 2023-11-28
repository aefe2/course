<template>
  <div>
    <img ref="scrollTop" @click="scrollToTop" class="invisible" src="@/assets/img/arrow-top.png" alt="arrow to top"
         id="btn-to-top">
  </div>
</template>

<script>
export default {
  name: "ButtonToTop",
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTop;
      if (window.scrollY > 50) {
        scrollBtn.classList.remove("invisible");
      } else {
        scrollBtn.classList.add("invisible");
      }
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  }
}
</script>

<style scoped>
.invisible {
  display: none;
}

#btn-to-top {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background: none;
  color: #FFFFFF;
  cursor: pointer;
  padding: 15px;
  width: 25px;
  height: 25px;
  //filter: invert(1) opacity(70%) hue-rotate(160deg);
}
</style>