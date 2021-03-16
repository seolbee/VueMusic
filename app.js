import Vue from 'vue';
import Router from 'vue-router';
import MainApp from '@/MainApp';
import MainComponent from '@/components/MainComponent';
import PlayListComponent from '@/components/PlayListComponent';
import {FontAwesomeIcon} from 'fortawesome/vue-fontawesome';

import './app.css';

Vue.use(Router);
Vue.component('font-awesome-icon', FontAwesomeIcon);

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