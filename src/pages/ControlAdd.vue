<template>
  <form-item>
    <my-label>Прикрепление</my-label>
    <select :class="theme">
      <option value="" disabled selected>Выберите...</option>
    </select>
    <my-label>Лечение</my-label>
    <select :class="theme">
    </select>
    <my-label>Время</my-label>
    <my-input-time :class="theme" v-model="time"></my-input-time>
    <my-button type="submit">Создать</my-button>
  </form-item>
</template>

<script>
import FormItem from "@/components/Form-Item.vue";
import MyLabel from "@/components/UI/MyLabel.vue";
import MyInputDate from "@/components/UI/MyInputDate.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyInputTime from "@/components/UI/MyInputTime.vue";
import {useToast} from "vue-toastification";
import {mapState} from "vuex";
import axios from "axios";

export default {
  name: "ControlAdd",
  components: {MyInputTime, MyButton, MyInputDate, MyLabel, FormItem},
  data() {
    return {}
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get('http://localhost/CodingOnSideOfServer/api/add_control')
        console.log(response)
      } catch (e) {
        this.toast.error('Ошибка!', {
          position: "top-right",
          timeout: 1500,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.62,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        })
        console.log(e);
      }
    },
  },
  mounted() {
    this.getItems()
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme,
    }),
  },
  setup() {
    const toast = useToast()
    return {toast}
  }
}
</script>

<style scoped>

</style>