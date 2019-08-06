<template>
	<el-col :span="20" style=" width: 1024px; height: 100%;  background-color: #ffffff;    position: absolute; left: 220px;">
		<div style="padding: 20px;background-color: #ffffff;">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>操作员管理</el-breadcrumb-item>
			</el-breadcrumb>
			<div>
				<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" style="width: 300px;">
				</el-input>
				<el-button type="primary">主要按钮</el-button>
			</div>
			<div>
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>卡片名称</span>
						<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
					</div>
					<div v-for="o in 4" :key="o" class="text item">
						{{'列表内容 ' + o }}
					</div>
				</el-card>
			</div>
		</div>
	</el-col>
</template>

<script>
	export default {
		data() {
			return {
				input21: ''
			}
		}
	}
</script>

<style>
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 18px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 350px;
		float: left;
		margin: 5px;
	}
</style>
