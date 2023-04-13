<template>
    <div class="login">
        <el-form :model="form" :rules="rules" ref="FormRef" label-width="120px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"/>
          </el-form-item>        
          <el-form-item>
      <el-button type="primary" @click="onSubmit(FormRef)">登录</el-button>
    </el-form-item>
        </el-form>
    </div>
</template>

<script setup>

import { trigger } from '@vue/reactivity';
import { reactive, ref} from 'vue';

const FormRef = ref()

const form = reactive({
  username:'',
  password:'',
})

const rules = reactive({
  username:[
  { required: true, message: '用户名不能为空', trigger: 'blur' },
  { pattern: /^[a-zA-Z0-9_-]{4,16}$/,message: '您的用户名格式有误',trigger: 'blur'}
  ],
  password:[
  { required: true, message: '密码不能为空', trigger: 'blur' },
  { pattern: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,message: '您的密码格式有误',trigger: 'blur'}
  ]
})

const onSubmit = (formEl) => {

  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!',form)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.el-form{
  width: 400px;
  margin: 200px;
  margin-left: 770px;
  position: fixed;
  right: 0;
  top: 10px;

}
.el-button{
  width: 100%;
  height: 40px;
  background-color: #ffd700;
}
.login {
  display: flex;
  flex-direction: column;
  background-image: url("../img/login.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;

  width: 100%;
  height: 100%;
  min-width: 900px;
  min-height: 750px;
 
  justify-content: center;
  align-items: center;
  
}




</style>