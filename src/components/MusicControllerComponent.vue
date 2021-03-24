<template>
    <div class="music-bar">
        <div class="left">
            <div class="img">
                <img :src="'cd_image/'+music_obj.cover_img" alt="img">
                <div class="circle"></div>
            </div>
            <div class="info">
                <p class="title">{{music_obj.title}}</p>
                <p class="artist">{{music_obj.artist}}</p>
            </div>
        </div>
        <div class="center">
            <div class="btn_group">
                <font-awesome-icon :icon="['fas', 'step-backward']"></font-awesome-icon>
                <font-awesome-icon :icon="playName" @click="switch_play" class="play"></font-awesome-icon>
                <font-awesome-icon :icon="['fas', 'step-forward']"></font-awesome-icon>
            </div>
            <div class="music_controller">
                <span>00:00</span>
                <div class="controller">
                    <div class="trake" @click="changeDuration" ref="musicTrake">
                        <div class="active_trake" ref="activeMusicTrake" :style="{'width':this.music_width+'px'}"></div>
                    </div>
                </div>
                <span>03:15</span>
            </div>
        </div>
        <div class="right">
            <div class="volume_box">
                <font-awesome-icon :icon="volumeName" @click='switch_volume'></font-awesome-icon>
                <div class="volume_controller">
                    <div class="controller">
                        <div class="trake" @click="changeVolumn">
                            <div class="active_trake" ref="activeTrake" :style="{'width':this.volume_width+'px'}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more">
                <font-awesome-icon :icon="['fas', 'ellipsis-v']"></font-awesome-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"MusicControllerComponent",
    data(){
        return{
            audio : undefined,
            is_volume : true,
            is_play : true,
            music_width:0,
            volume_width:10,
            music_obj:{
                src : 'music/winner-아예.mp3',
                title : '아예',
                artist : 'winner',
                cover_img: 'we.jpg'
            }
        }
    },
    methods:{
        switch_volume(){
            this.is_volume = !this.is_volume;
        },
        switch_play(){
            if(this.is_play) this.audio.play();
            else this.audio.pause();
            this.is_play = !this.is_play;
        },
        changeDuration(e){
            this.music_width = e.offsetX;
        },
        changeVolumn(e){
            if(e.offsetX <= 0 && this.is_volume) this.switch_volume();
            else if(!this.is_volume) this.switch_volume();
            this.volume_width = e.offsetX;
        }
    },
    computed:{
        volumeName(){
            return this.is_volume ? ['fas', 'volume-up'] : ['fas', 'volume-off'];
        },
        playName(){
            return this.is_play ? ['fas', 'play'] : ['fas', 'pause'];
        },
        volumeValue(){
            
        },
        durationValue(){
            console.log(this.audio.duration);  
        }
        
    },
    mounted(){
        this.audio = new Audio(this.music_obj.src);
    }


}
</script>
<style scoped>
    .music-bar{
        display: flex;
        padding: 5px 20px;
        background-color: rgba(255, 255, 255, .3);
        width: 1000px;
        height: 70px;
        position: fixed;
        bottom: 10px;
        border-radius: 20px;
        backdrop-filter:blur(8px);
        justify-content: space-between;
        align-items: center;
    }

    .left{
        display: flex;
        align-items: center;
        width: 200px;
    }

    .left > .info{
        margin-left: 15px;
    }

    .img{
        position: relative;
        width: 60px;
        height: 60px;
    }

    .img > img{
        width: 60px;
        border-radius: 50%;
    }

    .img > .circle{
        position: absolute;
        left: 50%;
        top: 50%;
        transform : translate(-50%, -50%);
        z-index: 1;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: black;
    }

    .info{
        line-height: 1.6;
    }

    .info > .artist{
        font-size: 12px;
        color: #aaa;
    }

    .center{
        display: flex;
        width: 600px;
    }

    .btn_group{
        width: 100px;
        display: flex;
        justify-content: space-between;
    }

    .btn_group > *{
        cursor:pointer;
    }

    .music_controller{
        width: 450px;
        padding-left: 50px;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }

    .right{
        display: flex;
        justify-content: space-between;
        width: 110px;
    }

    .music_controller > .controller{
        width: 250px;
    }

    .volume_box{
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .volume_controller{
        margin-left: 10px;
    }

    .volume_controller > .controller{
        width: 60px;
    }

    .trake{
        width: 100%;
        background-color:rgba(50,50,50, .3);
        height: 3px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        cursor:pointer;
    }

    .active_trake{
        background-color: white;
        height: 3px;
        border-radius: 6px;
    }
</style>