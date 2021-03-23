<template>
    <div class="container">
        <music-nav></music-nav>
        <section id="main">
            <music-header></music-header>
            <router-view></router-view>
            <music-controller></music-controller>
        </section>
    </div>
</template>
<script>
import MusicController from '@/components/MusicControllerComponent';
import Header from '@/components/HeaderComponent';
import Navigator from '@/components/NavigatorComponent';
export default {
    name:"MainApp",
    components:{
        'music-controller' : MusicController,
        'music-header':Header,
        'music-nav':Navigator
    },
    methods:{
        nav_block(){
            
        }
    }
}
</script>
<style scoped>
    .container{
        display: flex;
    }

    #main{
        width: 100%;
        height: 100vh;
    }
</style>