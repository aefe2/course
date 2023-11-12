<template>
  <form>
    <my-input-text :class="theme" type="search" class="search" placeholder="Поиск.."></my-input-text>
    <my-button type="submit" name="submit" class="submit"><img class="img-search" src="@/assets/img/search-ico.png"
                                                               alt="Поиск"></my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import {mapState} from "vuex";

export default {
  name: "Search-item",
  components: {MyInputText, MyButton},
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
}
</script>

<style scoped>
.light {
  border: 1px solid #2D2D2D;
  background: #F9F9F9;
  color: #2D2D2D;
}

.dark {
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  color: #e3e2e2;
}

form {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 30px;
}

.img-search {
  padding: 2px;
  width: 17px;
  height: 17px;
}

.search {
  width: 150px;
  padding: 4px 4px 4px 5px;
  border: #00A26D 1px solid;
  border-radius: 10px 0 0 10px;
}

.submit {
  background-color: #00A26D;
  cursor: pointer;
  padding: 5px;
  border-radius: 0 10px 10px 0;
  font-size: 13px;
}

.dark .search:focus {
  background-color: #2D2D2D;
}

.light .search:focus {
  background-color: #F9F9F9;
}
</style>