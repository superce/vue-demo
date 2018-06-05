import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Detail from '@/components/Detail';
import Se from '@/components/Se';
import Third from '@/components/Third';
import Four from '@/components/Four'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/se',
      name: 'Se',
      component: Se
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    },
    {
      path: '/four',
      name: 'Four',
      component: Four
    },

  ]
})
