<template>
	<el-col :span="20" style=" width: 1024px; height: 100%;  background-color: #ffffff;    position: absolute; left: 220px;margin-top: 20px;">
		<div style="padding: 20px;background-color: #ffffff;">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>基础设置</el-breadcrumb-item>
			</el-breadcrumb>
			<el-tabs v-model="activeName2" type="card" @tab-click="handleClick" style="margin-top: 20px;">
				<el-tab-pane label="部门管理" name="first">
					<div>
						<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"> </el-input>
					</div>
					<div>
						<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
					</div>

				</el-tab-pane>
				<el-tab-pane label="职位管理" name="second">
					<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="日期" width="120">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column label="姓名" width="180">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top">
									<p>姓名: {{ scope.row.name }}</p>
									<p>住址: {{ scope.row.address }}</p>
									<div slot="reference" class="name-wrapper">
										<el-tag size="medium">{{ scope.row.name }}</el-tag>
									</div>
								</el-popover>
							</template>
						</el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>



				</el-tab-pane>
				<el-tab-pane label="职称管理" name="third">
					<el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<el-table-column label="日期" width="120">
							<template slot-scope="scope">{{ scope.row.date }}</template>
						</el-table-column>
						<el-table-column label="姓名" width="180">
							<template slot-scope="scope">
								<el-popover trigger="hover" placement="top">
									<p>姓名: {{ scope.row.name }}</p>
									<p>住址: {{ scope.row.address }}</p>
									<div slot="reference" class="name-wrapper">
										<el-tag size="medium">{{ scope.row.name }}</el-tag>
									</div>
								</el-popover>
							</template>
						</el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>

				</el-tab-pane>
				<el-tab-pane label="奖惩规则" name="fourth">奖惩规则</el-tab-pane>
				<el-tab-pane label="权限组" name="admin">
					<el-input placeholder="请输入内容" v-model="input3" style="width: 200px;">
						<template slot="prepend">role</template>
					</el-input>
					<el-input v-model="input" placeholder="添加中文名称" style="width: 200px;"></el-input>
					<el-button type="primary">主要按钮</el-button>
					<el-collapse accordion>
						<el-collapse-item>
							<template slot="title">
								一致性 Consistency<i class="header-icon el-icon-info"></i>
							</template>
							<el-card class="box-card">
								<div slot="header" class="clearfix">
									<span>卡片名称</span>
									<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
								</div>
								<div v-for="o in 4" :key="o" class="text item">
									{{'列表内容 ' + o }}
								</div>
							</el-card>
						</el-collapse-item>
						<el-collapse-item title="反馈 Feedback">
							<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
							<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
						</el-collapse-item>
						<el-collapse-item title="效率 Efficiency">
							<div>简化流程：设计简洁直观的操作流程；</div>
							<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
							<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
						</el-collapse-item>
						<el-collapse-item title="可控 Controllability">
							<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
							<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
						</el-collapse-item>
					</el-collapse>


				</el-tab-pane>
			</el-tabs>


		</div>
	</el-col>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				activeName2: 'first',
				tableData3: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection: [],
				input3: '',
				input: ''

			};
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
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
		width: 480px;
	}
</style>
