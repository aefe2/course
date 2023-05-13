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
        component: TimetablePage
    },
    {
        path: '/add-doctor',
        component: AddDoctor
    },
    {
        path: '/appointment',
        component: Appointment
    },
    {
        path: '/control',
        component: Control
    },
    {
        path: '/diagnosis-add',
        component: DiagnosisAdd
    },
    {
        path: '/heal-add',
        component: HealAdd
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/patient-history',
        component: PatientHistory
    },
    {
        path: '/patients',
        component: Patients
    },
    {
        path: '/record-patient',
        component: RecordPatient
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

export default router
