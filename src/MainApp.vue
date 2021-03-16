<template>
    <div>
        <header></header>
        <router-view></router-view>
        <music-controller></music-controller>
    </div>
</template>
<script>
import MusicController from '@/components/MusicControllerComponent';
import Header from '@/components/HeaderComponent';
export default {
    name:"MainApp",
    components:{
        'music-controller' : MusicController,
        'header':Header
    }
}
</script>
<style scoped>
    
</style>