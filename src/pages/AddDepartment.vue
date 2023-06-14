<template>
  <div class="form-container">
    <form-item @submit.prevent="addDepartment" class="heal-form">
      <my-label for="heal-name">Название отдела</my-label>
      <my-input-text :class="theme" v-model="name"></my-input-text>
      <my-button type="submit">Добавить</my-button>
    </form-item>
  </div>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "HealAdd",
  components: {MyButton, MyInputText, MyLabel, FormItem},
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addDepartment() {
      axios({
        method: 'post',
        url: 'http://localhost/CodingOnSideOfServer/api/add_department',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: {
          name: this.name
        }
      })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          })
      this.name = ''
    }
  },
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

.heal-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.heal-form > label {
  color: #00A26D;
}

.heal-form > input {
  font-size: 16px;
  padding: 7px;
  border-radius: 5px;
}

.heal-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}

.btn {
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  width: 170px;
  cursor: pointer;
}

.btn:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}
</style>