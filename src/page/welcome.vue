<template>
  	<el-row type="flex" class="row-bg" justify="center" align="middle">
  		<el-col :span="6">
  			<div class="grid-content bg-purple">
  				<h1>welcome</h1>
  				<div class="login-btn">
  					<el-button type="primary" size="large" v-on:click="loginHandler()">登陆</el-button>
  				</div>
  			</div>
  		</el-col>
	</el-row>
</template>

<script>
  export default {
    methods: {
      loginHandler () {
        window.location.href = '#/login'
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
