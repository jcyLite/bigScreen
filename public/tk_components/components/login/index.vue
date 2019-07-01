<style lang="less">
        .tk-login{
                .tk-login-box{
                        width:calc(100vw - 60px);
                        height:300px;
                        margin:10px;
                        input{
                                border-radius:5px;
                                opacity:.8;
                                width:100%;
                                height:50px;
                                margin:10px;
                                box-shadow: 3px 3px 6px rgba(158, 151, 151, 0.336);
                                padding-left:20px;
                                color:rgba(90, 85, 85, 0.616);
                                &:focus{
                                        outline:none;
                                }
                                &::-webkit-input-placeholder{
                                        color:#666;
                                }
                        }
                        .tk-button{
                                opacity:.9;
                                margin-left:20px;
                        }
                }
        }
</style>
<template>
        <div class="tk-login">
                <div class="tk-login-box">
                        <input v-model="uname" placeholder="请输入用户名" type="text">
                        <input v-model="upassword" placeholder="请输入密码" type="password">
                        <tk-button @click="$emit('submit',uname,upassword)" style="margin-top:30px;">提交</tk-button>
                </div>
                
        </div>
</template>

<script>
export default {
        data(){
                return {
                        uname:'',
                        upassword:''
                }
        }
}
</script>


