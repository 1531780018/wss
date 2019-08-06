<template>
	<div class="con">

		<index-head></index-head>

		<el-container style="height: 100%; border: 1px solid #eee;position: absolute;background-color:#ECECEC">
			<el-row>
				<el-col :span="4">
					<index-menu style="background-color:#ECECEC "></index-menu>

				</el-col>
				<!-- <el-col :span="20" style=" height: 100%;  background-color: #ffffff; ">
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
				</el-col> -->
				<router-view/>
			</el-row>
		</el-container>


	</div>
</template>

<script>
	import IndexHead from '../head.vue'
	import IndexMenu from '../menu.vue'
	import IndexTable from '../usertable.vue'
	export default {

		data() {
			return {
				input21: '',
				asd: '',
			}
		},
		components: {
			IndexHead,

			IndexMenu,
			IndexTable
		}
	}
</script>

<style>
	.isd {
		width: 400px;
	}

	#ks1 {
		margin-top: 20px;
		display: inline-block;
	}

	#ks2 {
		margin-top: 20px;
		display: inline-block;
	}
</style>
