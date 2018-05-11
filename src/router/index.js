import Vue from 'vue'
import Router from 'vue-router'
import yuangong from '@/components/yuangong'
import NewContact from '@/components/NewContact'




Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'yuangong',
        component: yuangong

    }, {
        path: '/newcontact',
        name: 'newcontact',
        component: NewContact
    }]

})