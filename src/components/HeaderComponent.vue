<template>
  <header>
    <div class="logo">
      <router-link to="/">logo</router-link>
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

</style>