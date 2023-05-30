<template>
  <form-item class="add-patient-form" @submit.prevent="patientAdd">
    <my-label>Фамилия</my-label>
    <my-input-text :class="theme" v-model.trim="last_name"></my-input-text>
    <my-label>Имя</my-label>
    <my-input-text :class="theme" v-model.trim="first_name"></my-input-text>
    <my-label>Отчество</my-label>
    <my-input-text :class="theme" v-model.trim="patronymic"></my-input-text>
    <my-label>Дата рождения</my-label>
    <my-input-date :class="theme" v-model="birthday"></my-input-date>
    <my-label>Снилс</my-label>
    <my-input-text :class="theme" v-model.number="snils_code"></my-input-text>
    <my-button type="submit">Создать</my-button>
  </form-item>
</template>

<script>
import {defineComponent} from "vue";
import FormItem from "@/components/Form-Item.vue";
import MyInputText from "@/components/UI/MyInputText.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInputDate from "@/components/UI/MyInputDate.vue";
import {mapState} from "vuex";

export default defineComponent({
  components: {MyInputDate, MyButton, MyLabel, MyInputText, FormItem},
  data() {
    return {
      first_name: '',
      last_name: '',
      patronymic: '',
      birthday: '',
      snils_code: ''
    }
  },
  methods: {},
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  }
})
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
  color: #FFFFFF;
}

.add-patient-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
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