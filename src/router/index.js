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
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin', 'receptionDoctor']
        }
    },
    {
        path: '/control/:id',
        component: () => import('@/pages/Control.vue'),
        name: 'Контроль',
        props: true,
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin', 'healDoctor']
        }
    },
    {
        path: '/diagnosis-add',
        component: () => import('@/pages/DiagnosisAdd.vue'),
        name: 'Добавить диагноз',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/heal-add',
        component: () => import('@/pages/HealAdd.vue'),
        name: 'Добавить лечение',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
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
        props: {name: 'id'},
        meta: {requiresAuth: true}
    },
    {
        path: '/patients',
        component: () => import('@/pages/Patients.vue'),
        name: 'Пациенты',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/patient-add',
        component: () => import('@/pages/PatientAdd.vue'),
        name: 'Добавить пациента',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/record-patient',
        component: () => import('@/pages/RecordPatient.vue'),
        name: 'Записать пациента',
        meta: {
            requiresAuth: true,
            requiredRole: ['admin', 'worker']
        }
    },
    {
        path: '/add_timesheet',
        component: () => import('@/pages/AddTimesheet.vue'),
        name: 'Добавить запись в расписание',
        meta: {
            requiresAuth: true,
            requiredRole: ['admin', 'worker']
        }
    },
    {
        path: '/register',
        component: () => import('@/pages/Register.vue'),
        name: 'Регистрация',
        meta: {
            requiredRoles: ['admin']
        }
    },
    {
        path: '/heals',
        component: () => import('@/pages/Heals.vue'),
        name: 'Лечения',
        meta: {
            requiresAuth: true,
            requiredRole: ['admin', 'healDoctor']
        }
    },
    {
        path: '/diagnoses',
        component: () => import('@/pages/Diagnoses.vue'),
        name: 'Диагнозы',
        meta: {
            requiresAuth: true,
            requiredRole: ['admin', 'healDoctor']
        }
    },
    {
        path: '/add-department',
        component: () => import('@/pages/AddDepartment.vue'),
        name: 'Добавление отдела',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/departments',
        component: () => import('@/pages/Departments.vue'),
        name: 'Отделы',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/admin',
        component: () => import('@/pages/AdminPanel.vue'),
        name: 'Админ панель',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/reseptiones',
        component: () => import('@/pages/Reseptiones.vue'),
        name: 'Приемы',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin', 'worker']
        }
    },
    {
        path: '/add_reseptione',
        component: () => import('@/pages/AddReseptione.vue'),
        name: 'Добавить прием',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin', 'worker']
        }
    },
    {
        path: '/bindings',
        component: () => import('@/pages/Binding.vue'),
        name: 'Прикрепления',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin', 'healDoctor']
        }
    },
    {
        path: '/add-binding',
        component: () => import('@/pages/AddBinding.vue'),
        name: 'Добавить прикрепление',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin', 'healDoctor']
        }
    },
    {
        path: '/add-profession',
        component: () => import('@/pages/AddProfession.vue'),
        name: 'Добавить профессию',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/professions',
        component: () => import('@/pages/Professions.vue'),
        name: 'Профессии',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/specializations',
        component: () => import('@/pages/Specializations.vue'),
        name: 'Специальности',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/add-specialization',
        component: () => import('@/pages/AddSpecialization.vue'),
        name: 'Добавить специальность',
        meta: {
            requiredRoles: ['admin']
        }
    },
    {
        path: '/rooms',
        component: () => import('@/pages/Rooms.vue'),
        name: 'Кабинеты',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/add-room',
        component: () => import('@/pages/AddRoom.vue'),
        name: 'Добавить кабинет',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/chambers',
        component: () => import('@/pages/Chambers.vue'),
        name: 'Палаты',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/add-chamber',
        component: () => import('@/pages/AddChamber.vue'),
        name: 'Добавить палату',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/add-control',
        component: () => import('@/pages/ControlAdd.vue'),
        name: 'Добавить контроль',
        meta: {
            requiresAuth: true,
            requiredRoles: ['admin']
        }
    },
    {
        path: '/forbidden',
        component: () => import('@/pages/Forbidden.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let userRole = localStorage.getItem('userRole')
    if (userRole === '' || !userRole) {
        next('/login');
    } else {
        let requiredRoles = to.meta.requiredRoles;
        if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(userRole)) {
            next('/forbidden');
        } else {
            next();
        }
    }
})

export default router
