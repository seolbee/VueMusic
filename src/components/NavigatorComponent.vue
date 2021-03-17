<template>
  <nav>
    <router-link to="/"><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>홈으로</router-link>
    <router-link to="/playlist"><font-awesome-icon :icon="['fas', 'list']"></font-awesome-icon>플레이리스트</router-link>
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
    width: 200px;
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #050213;
  }

  nav > a{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    font-size: 18px;
  }

  nav > a > svg{
    margin-right: 10px;
  }
</style>