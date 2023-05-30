<template>
  <form-item class="appointment-form">
    <my-label for="patient">Пациент</my-label>
    <my-select :class="theme" name="patient-select" id="patient">
      <option value="1">AaAaA</option>
    </my-select>
    <my-label for="diagnos">Диагноз</my-label>
    <my-select :class="theme" name="diagnosis" id="diagnos">
      <option value="13">DS5</option>
    </my-select>
    <my-button @click="$router.push('/diagnosis-add')" class="diagnos-add"><span>Добавить диагноз</span></my-button>
    <my-label for="heal">Лечение</my-label>
    <my-select :class="theme" name="heal" id="heal">
      <option value="123">pipi</option>
    </my-select>
    <my-button @click="$router.push('/heal-add')" class="heal-add"><span>Добавить лечение</span></my-button>
    <my-label for="doctor">Врач</my-label>
    <my-select :class="theme" name="doctor" id="doctor">
      <option value="123">dadaya</option>
    </my-select>
    <my-button type="submit">Отправить</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mapState} from "vuex";

export default {
  name: "Appointment",
  components: {MyButton, MySelect, MyLabel, FormItem},
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
  color-scheme: dark;
}

.dark {
  background-color: #2D2D2D;
  border: solid 1.5px #FFF;
  color: #e3e2e2;
}

.appointment-form {
  font-size: 18px;
  display: grid;
  grid-gap: 11px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.appointment-form > label {
  color: #00A26D;
}

.appointment-form > button, input {
  font-size: 16px;
  padding: 8px;
  border-radius: 5px;
}

.appointment-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}

.appointment-form > select {
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
}

.btn:last-child {
  margin-top: 5px;
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

select {
  border-color: #79b7a3;
}

.appointment-form button {
  background-color: #00A26D;
  border: none;
  cursor: pointer;
}

.appointment-form button:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

.diagnos-add span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.diagnos-add span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.diagnos-add:hover span {
  padding-right: 15px;
}

.diagnos-add:hover span:after {
  opacity: 1;
  right: 0;
}

/**/
.heal-add span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.heal-add span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.heal-add:hover span {
  padding-right: 15px;
}

.heal-add:hover span:after {
  opacity: 1;
  right: 0;
}
</style>