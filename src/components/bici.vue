<template>

		<el-col :span="20" style=" height: 100%;  background-color: #ffffff; ">
			<div style="padding: 20px;background-color: #ffffff;">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>基本资料</el-breadcrumb-item>
				</el-breadcrumb>
				<div id="ks1">
					<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" class="isd"> </el-input>
		
					<el-button type="primary">主要按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
				</div>
		
				<div id="ks2">
					<el-button type="success">成功按钮</el-button>
					<el-button type="success">成功按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
				</div>
		
		
				<index-table></index-table>
			</div>
		</el-col>

</template>

<script>
	import IndexTable from './usertable.vue'
	export default {
	
		data() {
			return {
				input21: '',
				asd: '',
			}
		},
		components: {
			
			IndexTable
		}
	}
</script>

<style>
</style>
