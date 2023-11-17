<template>
  <div class="wwrapper">
    <search-item placeholder="Поиск..." v-model="search"></search-item>
    <div class="wrapper">
      <div class="addings">
        <p :class="theme">Добавления</p>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/record-patient')"
             class="create-patient"><span>Записать пациента</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/diagnosis-add')" class="create-patient"><span>Добавить диагноз</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/heal-add')" class="create-patient"><span>Добавить лечение</span></a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/appointment')" class="create-patient"><span>Добавить прием</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/add-department')" class="create-patient"><span>Добавить отдел</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/patient-add')" class="create-patient"><span>Добавить пациента</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/add-profession')"
             class="create-patient"><span>Добавить профессию</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/add-specialization')" class="create-patient"><span>Добавить специальность</span></a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/add-room')" class="create-patient"><span>Добавить кабинет</span></a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/add-chamber')"
             class="create-patient"><span>Добавить палату</span></a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/add_timesheet')" class="create-patient">
            <span>Добавить запись в расписание</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/register')" class="create-patient">
            Зарегестрировать пользователя
          </a>
        </div>
      </div>
      <div class="views">
        <p :class="theme">Просмотр</p>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/heals')" class="create-patient"><span>Просмотр лечений</span></a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/diagnoses')" class="create-patient"><span>Просмотр диагнозов</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/departments')" class="create-patient"><span>Просмотр отделов</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/professions')"
             class="create-patient"><span>Просмотр профессий</span>
          </a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/specializations')" class="create-patient"><span>Просмотр специальностей</span></a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/rooms')" class="create-patient"><span>Просмотр кабинетов</span></a>
        </div>
        <div class="btn-link-container">
          <a :class="theme" @click="$router.push('/chambers')" class="create-patient"><span>Просмотр палат</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import {mapState} from "vuex";
import SearchItem from "@/components/Search-item.vue";

export default {
  name: "AdminPanel",
  components: {SearchItem, MyButton},
  data() {
    return {
      search: '',
      links: [
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
        {route: '', name: ''},
      ]
    }
  },
  computed: {
    ...mapState({
      theme: state => state.themeModule.theme
    })
  },
}
</script>

<style scoped>
search-item {
  margin-right: auto;
}
p {
  margin-left: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  width: min-content;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
}

.btn-link-container {
  padding: 10px;
}

.light a:hover {
  color: #00A26D;
}

.dark a:hover {
  color: whitesmoke;
}

a:hover {
  cursor: pointer;
  transition-duration: .3s;
}

.light {
  color: #2D2D2D;
}

.dark {
  color: #06b67a;
}

.wwrapper {
  display: grid;
  grid-template-columns: .5fr;
  justify-content: center;
}

.wrapper {
  display: grid;
  grid-template-columns: .61fr .29fr;
}

.views, .addings {
  padding: 10px;
}

</style>