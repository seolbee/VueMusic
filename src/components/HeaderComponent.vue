<template>
  <header>
    <div class="left">
      <div class="nav_btn"><font-awesome-icon :icon="['fas', 'bars']"></font-awesome-icon></div>
      <router-link to="/"><img src="/image/logo.png" alt="img"></router-link>
    </div>
    <div class="search">
      <div class="input_box">
        <form action="/search">
          <input type="text" placeholder="search music" />
        </form>
      </div>
    </div>
    <div class="user">
      <router-link to="/login">로그인</router-link>
    </div>
  </header>
</template>
<script>
export default {
    name:'HeaderComponent'
}
</script>
<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: 50px;
    align-items: center;
  }

  .left{
    display:flex;
  }
</style>