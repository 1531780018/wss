<template>
	<el-col :span="20" style=" width: 1024px; height: 100%;  background-color: #ffffff;    position: absolute; left: 220px;">
		<div style="padding: 20px;background-color: #ffffff;">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>工资表惯例</el-breadcrumb-item>
			</el-breadcrumb>
			<div slot="reference" class="name-wrapper" style="float: left;margin-top: 10px;">
				
            <el-tag size="medium">请选择</el-tag>
			<el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
          </div>
		 <p>main</p>
	
		
		</div>
	</el-col>
</template>

<script>
</script>

<style>
</style>
