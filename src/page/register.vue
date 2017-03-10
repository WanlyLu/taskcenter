<template>
  <el-form :model="regForm" :rules="rules" ref="regForm" label-width="100px" class="demo-ruleForm">
   <el-form-item label="用户名" prop="userName">
      <el-input type="text" v-model="regForm.userName" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="regForm.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="regForm.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('regForm')">提交</el-button>
      <el-button @click="resetForm('regForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    var validataUserName = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('用户名长度不能短于8位'))
      } else {
        this.$http.get('http://127.0.0.1:5000' + '?userName=' + value)
          .then(result => {
            if (result.data === -1) {
              callback(new Error('用户名已存在'))
            } else {
              this.$refs.regForm.validateField('checkPass')
              callback()
            }
          })
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('密码不能短于8位'))
      } else {
        if (this.regForm.checkPass !== '') {
          this.$refs.regForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.regForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      regForm: {
        userName: '',
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        userName: [{
          validator: validataUserName,
          trigger: 'blur'
        }],
        pass: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass: [{
          validator: validatePass2,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.get('http://127.0.0.1:5000' + '?userName=' + this.regForm.userName)
            .then(data => {
              console.log(data)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less">
</style>
