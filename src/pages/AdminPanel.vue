<template>
  <div class="btn-link-container">
    <my-button @click="$router.push('/heals')" class="create-patient"><span>Просмотр лечений</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/diagnoses')" class="create-patient"><span>Просмотр диагнозов</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/departments')" class="create-patient"><span>Просмотр отделов</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/record-patient')" class="create-patient"><span>Записать пациента</span>
    </my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/diagnosis-add')" class="create-patient"><span>Добавить диагноз</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/heal-add')" class="create-patient"><span>Добавить лечение</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/appointment')" class="create-patient"><span>Добавить прием</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/add-department')" class="create-patient"><span>Добавить отдел</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/patient-add')" class="create-patient"><span>Добавить пациента</span></my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/add_timesheet')" class="create-patient"><span>Добавить запись в расписание</span>
    </my-button>
  </div>
  <div class="btn-link-container">
    <my-button @click="$router.push('/register')" class="create-patient"><span>Зарегестрировать пользователя</span>
    </my-button>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "AdminPanel",
  components: {MyButton}
}
</script>

<style scoped>

</style>