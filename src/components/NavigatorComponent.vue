<template>
  <nav>
    <router-link to="/">홈으로</router-link>
    <router-link to="/playlist">플레이리스트</router-link>
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
    width: 150px;
    position: static;
    display: flex;
    flex-direction: column;
  }

  nav > router-link{
    width: 100%;
  }
</style>