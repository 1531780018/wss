<template>
	<div class="coo">
		
				<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu default-active="$route.path" class="el-menu-vertical-demo mwback"
				 @open="handleOpen" @close="handleClose" :unique-opened="true" router>
					<el-submenu index="1">
						
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>员工资料</span>
						</template>
							
							<el-menu-item index="/userinfo/bici">基本资料</el-menu-item>	
						
					</el-submenu>
					<!-- 2 -->
					
					<el-submenu index="2">
						
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>人事管理</span>
						</template>
							
							<el-menu-item index="/meibiyao/jiangcheng">员工奖惩</el-menu-item>	
							<el-menu-item index="/meibiyao/peixun">员工培训</el-menu-item>	
							<el-menu-item index="/meibiyao/diaoxin">员工调薪</el-menu-item>	
							<el-menu-item index="/meibiyao/diaodong">员工调动</el-menu-item>	
					</el-submenu>
					
						<el-submenu index="3">
						
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>薪资管理</span>
						</template>
							
							<el-menu-item index="/xinzi/gongzi">工资账套管理</el-menu-item>	
						<el-menu-item index="/xinzi/zhangtao">员工账套设置</el-menu-item>	
						<el-menu-item index="/xinzi/gongzibiao">工资表管理</el-menu-item>	
						<el-menu-item index="/xinzi/yuemo">月末处理</el-menu-item>	
						<el-menu-item index="/xinzi/select">工资表查询</el-menu-item>	
	
					</el-submenu>
						<el-submenu index="4">
						
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>统计管理</span>
						</template>
							
							<el-menu-item index="/tongji/zonghe">综合信息统计</el-menu-item>	
							<el-menu-item index="/tongji/jifen">员工积分统计</el-menu-item>
							<el-menu-item index="/tongji/renshi">人事信息统计</el-menu-item>
							<el-menu-item index="/tongji/jilu">人事记录统计</el-menu-item>
							
						
					</el-submenu>
						<el-submenu index="5">
						
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>系统管理</span>
						</template>
							
							<el-menu-item index="/set/jiben">基础信息设置</el-menu-item>	
							<el-menu-item index="1-5">系统管理</el-menu-item>	
							<el-menu-item index="1-5">操作日志管理</el-menu-item>	
							<el-menu-item index="/set/admi">操作员管理</el-menu-item>	
							<el-menu-item index="1-5">备份恢复数据库</el-menu-item>	
							<el-menu-item index="1-5">初始化数据库</el-menu-item>	
						
					</el-submenu>
					
				</el-menu>
				</el-aside>
			
	</div>
</template>

<script>
 export default {
	 data() {
	 	return {
	 	
	 	}
	 },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.mwback{
	background-color:#ECECEC ;
}
.el-submenu__title {
	padding-left: 0px;
}
</style>
