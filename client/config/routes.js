/*
* @Author: lvyufeng
* @Date:   2018/5/8
*
*/
'use strict'

// import App from '../app.vue'
export default [
  {
    path: '/',
    // component: App
    redirect: '/app'
  },
  {
    path: '/app',
    // name: 'Board',
    component: () => import('../views/board/board.vue')

    // children: [
    //   {
    //     path: '/test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: 'this is login',
      description: 'sssssssss'
    }
  }
]
