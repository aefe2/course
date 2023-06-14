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
        name: 'Добавить прием',
    },
    {
        path: '/control',
        component: Control,
        name: 'Контроль',
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
