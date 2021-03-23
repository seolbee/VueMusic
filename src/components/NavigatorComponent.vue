<template>
  <nav>
    <div class="top">
        <router-link to="/"><img src="/image/logo.png" alt="img"></router-link>
    </div>
    <div class="nav">
      <router-link to="/"><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>홈</router-link>
      <router-link to="/playlist"><font-awesome-icon :icon="['fas', 'list']"></font-awesome-icon>플레이리스트</router-link>
      <router-link to='/chart'><font-awesome-icon :icon="['fas','chart-bar']"></font-awesome-icon>실시간 차트</router-link>
    </div>
  </nav>
</template>
<script>
export default {
    name:'NavigatorComponent'
}
</script>
<style scoped>
  nav{
    height: 100vh;
    width: 250px;
    /* background-color: rgb(250,250,250); */
    background-color: black;
    /* background-color: #333; */
    box-shadow: 0px 0px 1px rgba(0,0,0, .01);
  }

  .top{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .top > a > img{
    width: 100%;
  }

  .nav{
    display: flex;
    flex-direction: column;
  }

  .nav > a{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    font-size: 18px;
  }

  .nav > a > svg {
    margin-right: 10px;
  }
</style>