import {createRouter, createWebHistory} from 'vue-router'
import TimetablePage from "@/pages/TimetablePage.vue";
import Appointment from "@/pages/Appointment.vue";
import Control from "@/pages/Control.vue";
import DiagnosisAdd from "@/pages/DiagnosisAdd.vue";
import HealAdd from "@/pages/HealAdd.vue";
import Login from "@/pages/Login.vue";
import PatientHistory from "@/pages/PatientHistory.vue";
import Patients from "@/pages/Patients.vue";
import RecordPatient from "@/pages/RecordPatient.vue";
import PatientAdd from "@/pages/PatientAdd.vue"
import Logout from "@/pages/Logout.vue";
import AddTimesheet from "@/pages/AddTimesheet.vue";
import Register from "@/pages/Register.vue";
import Heals from "@/pages/Heals.vue";
import Diagnoses from "@/pages/Diagnoses.vue";
import Departments from "@/pages/Departments.vue";
import AddDepartment from "@/pages/AddDepartment.vue";
import AdminPanel from "@/pages/AdminPanel.vue";
import Reseptiones from "@/pages/Reseptiones.vue";
import AddReseptione from "@/pages/AddReseptione.vue";
import Binding from "@/pages/Binding.vue";
import AddBinding from "@/pages/AddBinding.vue";
import AddProfession from "@/pages/AddProfession.vue";
import Professions from "@/pages/Professions.vue";
import Specializations from "@/pages/Specializations.vue";
import AddSpecialization from "@/pages/AddSpecialization.vue";
import Rooms from "@/pages/Rooms.vue";
import AddRoom from "@/pages/AddRoom.vue";
import Chambers from "@/pages/Chambers.vue";
import AddChamber from "@/pages/AddChamber.vue";

const routes = [
    {
        path: '/',
        component: TimetablePage,
        name: 'Расписание',
        // meta: {requiresAuth: true}
    },
    // {
    //     path: '/add-doctor',
    //     component: AddDoctor,
    //     name: 'Добавить врача',
    //     meta: {requiresAuth: true}
    // },
    {
        path: '/appointment',
        component: Appointment,
        name: 'Добавить запись в медкарту',
    },
    {
        path: '/control/:id',
        component: Control,
        name: 'Контроль',
        props: true
    },
    {
        path: '/diagnosis-add',
        component: DiagnosisAdd,
        name: 'Добавить диагноз',
    },
    {
        path: '/heal-add',
        component: HealAdd,
        name: 'Добавить лечение',
    },
    {
        path: '/login',
        component: Login,
        name: 'Авторизация',
    },
    {
        path: '/logout',
        component: Logout,
        name: 'Выход'
    },
    {
        path: '/patient-history',
        component: PatientHistory,
        name: 'История пациента',
    },
    {
        path: '/patients',
        component: Patients,
        name: 'Пациенты',
    },
    {
        path: '/patient-add',
        component: PatientAdd,
        name: 'Добавить пациента',
    },
    {
        path: '/record-patient',
        component: RecordPatient,
        name: 'Записать пациента',
    },
    {
        path: '/add_timesheet',
        component: AddTimesheet,
        name: 'Добавить запись в расписание'
    },
    {
        path: '/register',
        component: Register,
        name: 'Регистрация'
    },
    {
        path: '/heals',
        component: Heals,
        name: 'Лечения'
    },
    {
        path: '/diagnoses',
        component: Diagnoses,
        name: 'Диагнозы'
    },
    {
        path: '/add-department',
        component: AddDepartment,
        name: 'Добавление отдела'
    },
    {
        path: '/departments',
        component: Departments,
        name: 'Отделы'
    },
    {
        path: '/admin',
        component: AdminPanel,
        name: 'Админ панель'
    },
    {
        path: '/reseptiones',
        component: Reseptiones,
        name: 'Приемы'
    },
    {
        path: '/add_reseptione',
        component: AddReseptione,
        name: 'Добавить прием'
    },
    {
        path: '/bindings',
        component: Binding,
        name: 'Прикрепления'
    },
    {
        path: '/add-binding',
        component: AddBinding,
        name: 'Добавить прикрепление'
    },
    {
        path: '/add-profession',
        component: AddProfession,
        name: 'Добавить профессию'
    },
    {
        path: '/professions',
        component: Professions,
        name: 'Профессии'
    },
    {
        path: '/specializations',
        component: Specializations,
        name: 'Специальности'
    },
    {
        path: '/add-specialization',
        component: AddSpecialization,
        name: 'Добавить специальность'
    },
    {
        path: '/rooms',
        component: Rooms,
        name: 'Кабинеты'
    },
    {
        path: '/add-room',
        component: AddRoom,
        name: 'Добавить кабинет'
    },
    {
        path: '/chambers',
        component: Chambers,
        name: 'Палаты'
    },
    {
        path: '/add-chamber',
        component: AddChamber,
        name: 'Добавить палату'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.meta.requiresAuth && !token) {
        next('/login')
    } else {
        next()
    }
})

// router.beforeEach((to, from, next) => {
//     // console.log(to)
//     document.title = to.meta.name;
//     next()
// })

export default router
