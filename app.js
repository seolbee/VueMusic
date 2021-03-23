import Vue from 'vue';
import Router from 'vue-router';
import MainApp from '@/MainApp';
import MainComponent from '@/components/MainComponent';
import PlayListComponent from '@/components/PlayListComponent';
import LoginComponent from '@/components/LoginComponent';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars, faHome, faHeart, faList, faChartBar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import './app.css';

Vue.use(Router);
library.add(faBars, faHome,  faHeart, faList, faChartBar);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

const router = new Router({
    routes:[
        {
            path:'/',
            name:'main-page',
            component: MainComponent,
        },
        {
            path:'/playlist',
            name:'playlist-page',
            component: PlayListComponent
        },
        {
            path:'/login',
            name:'login-page',
            component:LoginComponent
        }
    ]
})

window.onload = ()=>{
    new Vue({
        el:"#app",
        router,
        render:h=>h(MainApp)
    })
};