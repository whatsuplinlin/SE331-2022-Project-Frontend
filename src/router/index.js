import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PatientLayoutView from '../views/patient/PatientLayoutView.vue'
import PatientDetailView from '../views/patient/PatientDetailView.vue'
import DoctorComment from '../views/patient/DoctorComment.vue'
import VaccineDetail from '../views/patient/VaccineDetail.vue'
import PatientService from '@/service/PatientService.js'
import NotFound from '../views/NotFound.vue'
import NetWorkError from '../views/NetworkError.vue'
import NProgress from 'nprogress'
import GStore from '@/store'
import Login from '@/views/user/LoginFormView.vue'
import Register from '@/views/user/RegisterFormView.vue'
import UserListView from '@/views/user/UserListView.vue'
import DoctorListView from '@/views/doctor/DoctorViewList.vue'
import AddDoctorComment from '../views/patient/AddDoctorComment.vue'
import LandingPage from '@/views/LandingPage.vue'
import ChangeRole from '@/views/user/ChangeRole.vue'
import ChangeRoleToDoctor from '@/views/user/ChangeRoleToDoctor.vue'
import UserService from '@/service/UserService'
import UserLayout from '../views/user/UserLayout.vue'
import DoctorService from '@/service/DoctorService'
import DoctorDetail from '@/views/doctor/DoctorDetail.vue'
import DoctorPatientList from '@/views/doctor/DoctorPatientList.vue'
//import AuthService from '@/service/AuthService'
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    beforeEnter: () => {
      if (GStore.currentUser.authorities == 'ROLE_PATIENT') {
        return {
          name: 'PatientDetailView',
          params: { id: GStore.currentUser.id }
        }
      }
      return {
        name: 'home'
      }
    }
  },
  {
    path: '/doctorsPatient',
    name: 'DoctorPatient',
    component: DoctorPatientList,
    beforeEnter: () => {
      return DoctorService.getAllDoctor()
        .then((response) => {
          console.log(GStore.doctor)
          GStore.doctor = response.data
        })
        .catch(() => {
          GStore.doctor = null
          console.log('cannot load doctor')
        })
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 4
    })
  },
  {
    path: '/user',
    name: 'user',
    component: UserListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 4
    })
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: DoctorListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 4
    })
  },
  {
    path: '/',
    name: 'UserLayout',
    props: true,
    component: UserLayout,
    beforeEnter: (to) => {
      return UserService.getUser(to.params.id)
        .then((response) => {
          GStore.user = response.data
          console.log(GStore.user)
          // GStore.patient.doctorRec = GStore.comments.filter(
          //   (patient) => GStore.patient.id == patient.patient_id
          // )
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource'
            }
          } else {
            return { name: 'NetWorkError' }
          }
        })
    },
    children: [
      {
        path: 'changeRole/:id',
        name: 'ChangeRole',
        component: ChangeRole,
        props: true,
        beforeEnter: () => {
          return DoctorService.getAllDoctor()
            .then((response) => {
              console.log(GStore.doctor)
              GStore.doctor = response.data
            })
            .catch(() => {
              GStore.doctor = null
              console.log('cannot load doctor')
            })
        }
      },
      {
        path: 'changeRoleToDoctor/:id',
        name: 'ChangeRoleToDoctor',
        component: ChangeRoleToDoctor,
        props: true
      }
    ]
  },
  {
    path: '/',
    name: 'DoctorDetail',
    props: true,
    component: DoctorDetail,
    beforeEnter: (to) => {
      return DoctorService.getDoctor(to.params.id)
        .then((response) => {
          GStore.doctor = response.data
          console.log(GStore.doctor)
          // GStore.patient.doctorRec = GStore.comments.filter(
          //   (patient) => GStore.patient.id == patient.patient_id
          // )
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource'
            }
          } else {
            return { name: 'NetWorkError' }
          }
        })
    }
  },
  {
    path: '/',
    name: 'PatientLayout',
    props: true,
    component: PatientLayoutView,
    beforeEnter: (to) => {
      return (
        PatientService.getPatient(to.params.id)
          .then((response) => {
            GStore.patient = response.data
            // GStore.patient.doctorRec = GStore.comments.filter(
            //   (patient) => GStore.patient.id == patient.patient_id
            // )
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: '404Resource'
              }
            } else {
              return { name: 'NetWorkError' }
            }
          }),
        DoctorService.getAllDoctor()
          .then((response) => {
            console.log(GStore.doctor)
            GStore.doctor = response.data
          })
          .catch(() => {
            GStore.doctor = null
            console.log('cannot load doctor')
          })
      )
    },
    children: [
      {
        path: 'people/:id',
        name: 'PatientDetailView',
        component: PatientDetailView,
        props: true
      },
      {
        path: 'vaccine/:id',
        name: 'VaccineDetail',
        component: VaccineDetail,
        props: true
      },
      {
        path: 'comment/:id',
        name: 'DoctorComment',
        component: DoctorComment,
        props: true
      },
      {
        path: 'Addcomment/:id',
        name: 'AddDoctorComment',
        component: AddDoctorComment,
        props: true
      }
    ]
  },
  {
    path: '/404',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetWorkError',
    component: NetWorkError
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
