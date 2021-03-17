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
      <router-link to="/login" class="login_btn">로그인</router-link>
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
    padding: 20px;
    align-items: center;
    background-color: #050213;
  }

  .left{
    display:flex;
  }
  
  .left img{
    display: none;
  }

  .login_btn{
    background-color: #0000b3;
    padding: 7px 20px;
    border-radius: 3px;
  }
</style>