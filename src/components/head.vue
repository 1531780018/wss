<template>
	<el-row>
		<el-col :span="24">
			<div class="grid-content bg-purple-dark">

				<el-row>
					<el-col :span="12">
						<div class="leftsasd grid-content">微人事</div>
					</el-col>
					<el-col :span="12">
						<div class="rightasd grid-content"><i class="el-icon-bell"></i>
						<el-dropdown>
  <span class="el-dropdown-link">
    系统管理员<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
						<img class="headimg" :src="imgs" style="width: 40px; height: 40px; margin-right: 5px; margin-left: 5px; border-radius: 40px;" /></div>
					</el-col>
				</el-row>


			</div>
		</el-col>

	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				imgs: require("../assets/64573ce2edc0728.jpg")
			}
		}
	}
</script>

<style>
	.headimg {
		position: relative;
		top: 13px;
	}

	.el-row {}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		background-color: #20a0ff;
		color: #333;
		min-height: 66px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.leftsasd {
		color: white;
		float: left;
		line-height: 66px;
		font-size: 24px;
		font-weight: bold;
		margin-left: 30px;
	}

	.rightasd {
		vertical-align: middle;
		float: right;
		color: white;
	}
</style>
