<template>
    <div class="login">
        <form>
            <div class="input_box">
                <div class="input">
                    <label for="userid">유저 아이디</label>
                    <input type="text" id="userid" v-model="userid">
                </div>
            </div>
            <div class="input_box">
                <div class="input">
                    <label for="password">비밀번호</label>
                    <input type="password" id="password" v-model="password">
                </div>
            </div>
            <button>로그인</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            formData:{
                userid:'',
                password:'',
            }
        }
    }
}
</script>
<style scoped>

</style>