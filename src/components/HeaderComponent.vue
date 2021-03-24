<template>
  <header>
    <div class="search">
      <div class="input_box">
        <form>
          <input type="text" placeholder="검색" />
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
    name:'HeaderComponent',
    methods:{
      nav_block(){
        
      }
    }
}
</script>
<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    /* background-color: rgb(250, 250, 250); */
    background-color: black;
    width: 100%;
    /* background-color: #333; */
  }
  
  .login_btn{
    padding: 7px 20px;
    border-radius: 3px;
    border: 1px solid #78FEE0;
    color: #78FEE0;
  }

  .nav_btn{
    margin-right: 30px;
    margin-left: 10px;
    font-size: 20px;
  }
</style>