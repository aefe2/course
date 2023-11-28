import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/TimetablePage.vue'),
        name: 'Расписание',
    },
    {
        path: '/patient-cards',
        component: () => import('@/pages/PatientCards.vue'),
        name: 'Добавить запись в медкарту',
    },
    {
        path: '/control/:id',
        component: () => import('@/pages/Control.vue'),
        name: 'Контроль',
        props: true
    },
    {
        path: '/diagnosis-add',
        component: () => import('@/pages/DiagnosisAdd.vue'),
        name: 'Добавить диагноз',
    },
    {
        path: '/heal-add',
        component: () => import('@/pages/HealAdd.vue'),
        name: 'Добавить лечение',
    },
    {
        path: '/login',
        component: () => import('@/pages/Login.vue'),
        name: 'Авторизация',

    },
    {
        path: '/logout',
        component: () => import('@/pages/Logout.vue'),
        name: 'Выход'
    },
    {
        path: '/patient_history/:id',
        component: () => import('@/pages/PatientHistory.vue'),
        name: 'Мед. Карта    пациента',
        props: {name: 'id'}
    },
    {
        path: '/patients',
        component: () => import('@/pages/Patients.vue'),
        name: 'Пациенты',
    },
    {
        path: '/patient-add',
        component: () => import('@/pages/PatientAdd.vue'),
        name: 'Добавить пациента',
    },
    {
        path: '/record-patient',
        component: () => import('@/pages/RecordPatient.vue'),
        name: 'Записать пациента',
    },
    {
        path: '/add_timesheet',
        component: () => import('@/pages/AddTimesheet.vue'),
        name: 'Добавить запись в расписание'
    },
    {
        path: '/register',
        component: () => import('@/pages/Register.vue'),
        name: 'Регистрация'
    },
    {
        path: '/heals',
        component: () => import('@/pages/Heals.vue'),
        name: 'Лечения'
    },
    {
        path: '/diagnoses',
        component: () => import('@/pages/Diagnoses.vue'),
        name: 'Диагнозы'
    },
    {
        path: '/add-department',
        component: () => import('@/pages/AddDepartment.vue'),
        name: 'Добавление отдела'
    },
    {
        path: '/departments',
        component: () => import('@/pages/Departments.vue'),
        name: 'Отделы'
    },
    {
        path: '/admin',
        component: () => import('@/pages/AdminPanel.vue'),
        name: 'Админ панель'
    },
    {
        path: '/reseptiones',
        component: () => import('@/pages/Reseptiones.vue'),
        name: 'Приемы'
    },
    {
        path: '/add_reseptione',
        component: () => import('@/pages/AddReseptione.vue'),
        name: 'Добавить прием'
    },
    {
        path: '/bindings',
        component: () => import('@/pages/Binding.vue'),
        name: 'Прикрепления'
    },
    {
        path: '/add-binding',
        component: () => import('@/pages/AddBinding.vue'),
        name: 'Добавить прикрепление'
    },
    {
        path: '/add-profession',
        component: () => import('@/pages/AddProfession.vue'),
        name: 'Добавить профессию'
    },
    {
        path: '/professions',
        component: () => import('@/pages/Professions.vue'),
        name: 'Профессии'
    },
    {
        path: '/specializations',
        component: () => import('@/pages/Specializations.vue'),
        name: 'Специальности'
    },
    {
        path: '/add-specialization',
        component: () => import('@/pages/AddSpecialization.vue'),
        name: 'Добавить специальность'
    },
    {
        path: '/rooms',
        component: () => import('@/pages/Rooms.vue'),
        name: 'Кабинеты'
    },
    {
        path: '/add-room',
        component: () => import('@/pages/AddRoom.vue'),
        name: 'Добавить кабинет'
    },
    {
        path: '/chambers',
        component: () => import('@/pages/Chambers.vue'),
        name: 'Палаты'
    },
    {
        path: '/add-chamber',
        component: () => import('@/pages/AddChamber.vue'),
        name: 'Добавить палату'
    },
    {
        path: '/add-control',
        component: () => import('@/pages/ControlAdd.vue'),
        name: 'Добавить контроль'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('user')
    if (token !== '1' && to.path !== '/login' && to.path !== '/') {
        next('/login')
    } else {
        next()
    }
})

export default router
