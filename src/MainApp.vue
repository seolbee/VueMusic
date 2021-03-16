<template>
    <div>
        <music-header></music-header>
        <music-nav></music-nav>
        <router-view></router-view>
        <music-controller></music-controller>
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
    }
}
</script>
<style scoped>
    
</style>