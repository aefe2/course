import {createRouter, createWebHistory} from 'vue-router'
import AddDoctor from "@/pages/AddDoctor.vue";
import TimetablePage from "@/pages/TimetablePage.vue";
import Appointment from "@/pages/Appointment.vue";
import Control from "@/pages/Control.vue";
import DiagnosisAdd from "@/pages/DiagnosisAdd.vue";
import HealAdd from "@/pages/HealAdd.vue";
import Login from "@/pages/Login.vue";
import PatientHistory from "@/pages/PatientHistory.vue";
import Patients from "@/pages/Patients.vue";
import RecordPatient from "@/pages/RecordPatient.vue";

const routes = [
    {
        path: '/',
        component: TimetablePage,
        name: 'Расписание',
    },
    {
        path: '/add-doctor',
        component: AddDoctor,
        name: 'Добавить врача',
    },
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
        path: '/record-patient',
        component: RecordPatient,
        name: 'Записать пациента',
    },
    // {
    //     path: '*',
    //     redirect: NotFoundPage
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     // console.log(to)
//     document.title = to.meta.name;
//     next()
// })

export default router
