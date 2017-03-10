<template>
  	<el-row type="flex" class="row-bg" justify="center" align="middle">
  		<el-col :span="6">
  			<div class="grid-content bg-purple">
  				<h1>welcome</h1>
  				<div class="user-btn">
  					<el-button type="primary" size="large" v-on:click="loginHandler()">登陆</el-button>
            <el-button type="primary" size="large" v-on:click="regHandler()">注册</el-button>
  				</div>
  			</div>
  		</el-col>
	</el-row>
</template>

<script>
  export default {
    methods: {
      loginHandler () {
        this.$router.push('login')
      },
      regHandler () {
        this.$router.push('register')
      }
    }
}

</script>

<style lang='less'>
	.el-row {
		height: 100%;
	}

	.el-col {
		text-align: center;
		font-size: 42px;
	}
</style>
