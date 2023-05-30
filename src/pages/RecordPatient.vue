<template>
  <form-item class="record-patient-form">
    <my-label for="choose-patient">Выбрать пациента</my-label>
    <my-select :class="theme" name="choose" id="choose-patient">
      <option value="1">aposdpo</option>
      <option value="2">sadasd</option>
      <option value="3">ghjk</option>
    </my-select>
    <my-button @click="$router.push('/patient-add')" class="create-patient-btn"><span>Создать пациента</span></my-button>
    <my-label for="chooce-cab">Выбрать кабинет</my-label>
    <my-select :class="theme" name="cab" id="chooce-cab">
      <option value="1">asd</option>
      <option value="12">sadas</option>
      <option value="13">asdas</option>
    </my-select>
    <my-label for="date">Дата</my-label>
    <my-input-date :class="theme" type="date" name="date" id="date"></my-input-date>
    <my-label for="time">Время</my-label>
    <my-input-time :class="theme" type="time" name="time" id="time"></my-input-time>
    <my-button type="submit">Записать</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInputDate from "@/components/UI/MyInputDate.vue";
import MyInputTime from "@/components/UI/MyInputTime.vue";
import {mapState} from "vuex";

export default {
  name: "RecordPatient",
  components: {MyInputTime, MyInputDate, MyButton, MySelect, MyLabel, FormItem},
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

.record-patient-form {
  font-size: 18px;
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  grid-template-columns: .2fr;
}

.record-patient-form > label {
  color: #00A26D;
}

.record-patient-form > input[type='text']:focus {
  outline: none;
  outline-offset: 0;
  background-color: rgba(0, 162, 109, 0.58);
}


.record-patient-form > select {
  font-size: 16px;
  border-radius: 5px;
  padding: 5px;
}

.btn:last-child {
  color: #FFFFFF;
  padding: 8px;
  border-radius: 5px;
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

.create-patient-btn {
  color: #FFFFFF;
  padding: 8px;
  border-radius: 5px;
  background-color: #00A26D;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.create-patient-btn:hover {
  background-color: rgba(0, 162, 109, 0.49);
  transition-duration: .3s;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

/**/
.create-patient-btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.create-patient-btn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.create-patient-btn:hover span {
  padding-right: 15px;
}

.create-patient-btn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>