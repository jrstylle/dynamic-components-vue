import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => require(['@/pages/Home'], resolve)
const Page1 = (resolve) => require(['@/pages/Page1'], resolve)
const Page2 = (resolve) => require(['@/pages/Page2'], resolve)
const HelloWorld = (resolve) => require(['@/pages/HelloWorld'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
