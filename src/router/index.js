import Vue from 'vue'
import Router from 'vue-router'
const HomeView = () => import(/* webpackChunkName: "HomeView" */ '@/components/HomeView')
const DetailView = () => import(/* webpackChunkName: "DetailView" */ '@/components/DetailView')
const PostView = () => import(/* webpackChunkName: "PostView" */ '@/components/PostView')
const CameraView = () => import(/* webpackChunkName: "CameraView" */ '@/components/CameraView')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView
    }
  ]
})
