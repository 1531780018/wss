<template>
	<div id="loginsercice">
		<div class="con ">
			<div class="qiao">
				<h2> 系统登录 </h2>
			<el-form ref="form" :model="form" label-width="80px" class="formset">
				
				<el-form-item >
					<el-input v-model="form.name"  placeholder="用户名"></el-input>
				</el-form-item>
				<el-form-item >
					<el-input v-model="form.password"  placeholder="密码"></el-input>
				</el-form-item>
				<el-form-item >
					<el-checkbox v-model="checked">记住密码</el-checkbox>
				</el-form-item>
				<el-form-item >
					  <el-button type="primary el-button--primary" class="el-button el-button--primary" id="subss">登陆</el-button>
				</el-form-item> 
			</el-form>
</div>

		</div>


	</div>
</template>

<script>
	export default {
    data() {
      return {
        form: {
          name: '',
		   password: '',
		   checked:''
          
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
	.con{
		padding-left: 35%;
		padding-right: 35%;
		padding-top:10% ;
	}
	.formset{
		padding-right: 20%;
		padding-top: 10px;
		padding-bottom: 10px;
	
		
	}
	.qiao{
	    border-radius: 15px;
    background-clip: padding-box;
  
    width: 350px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
	}
	

</style>
