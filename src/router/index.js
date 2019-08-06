import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import login from '@/components/login'
import head from '@/components/head'
import menu from '@/components/menu'
import userinfo from '@/components/user/userinfo'
import usertable from '@/components/usertable'
import bici from '@/components/bici'
import jiangcheng from '@/components/meibiyao/jiangcheng'
import peixun from '@/components/meibiyao/peixun'
import diaodong from '@/components/meibiyao/diaodong'
import diaoxin from '@/components/meibiyao/diaoxin'
import gongzi from '@/components/xinzi/gongzi'
import zhangtao from '@/components/xinzi/zhangtao'
import gongzibiao from '@/components/xinzi/gongzibiao'
import yuemo from '@/components/xinzi/yuemo'
import select from '@/components/xinzi/select'
import jifen from '@/components/tongji/jifen'
import jilu from '@/components/tongji/jilu'
import renshi from '@/components/tongji/renshi'
import zonghe from '@/components/tongji/zonghe'
import jiben from '@/components/set/jiben'
import admi  from '@/components/set/admi'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/head',
			name: 'head',
			component: head
		},
		{
			path: '/menu',
			name: 'menu',
			component: menu
		},
		{
			path: '/userinfo',
			name: 'userinfo',
			component: userinfo,
			children: [{
					path: '/userinfo/bici',
					name: 'bici',
					component: bici
				},
				{
					path: '/meibiyao/jiangcheng',
					name: 'jiangcheng',
					component: jiangcheng
				},
				{
					path: '/meibiyao/peixun',
					name: 'peixun',
					component: peixun
				},
					{
					path: '/meibiyao/diaodong',
					name: 'diaodong',
					component: diaodong
				},
					{
					path: '/meibiyao/diaoxin',
					name: 'diaoxin',
					component: diaoxin
				},
				{
					path: '/xinzi/gongzi',
					name: 'gongzi',
					component: gongzi
				},
				{
					path: '/xinzi/zhangtao',
					name: 'zhangtao',
					component: zhangtao
				},
				{
					path: '/xinzi/gongzibiao',
					name: 'gongzibiao',
					component: gongzibiao 
				},
				{
					path: '/xinzi/yuemo',
					name: 'yuemo',
					component: yuemo 
				},
				{
					path: '/xinzi/select',
					name: 'select',
					component: select 
				},
					{
					path: '/tongji/jifen',
					name: 'jifen',
					component: jifen 
				},
					{
					path: '/tongji/jilu',
					name: 'jilu',
					component: jilu 
				},
					{
					path: '/tongji/renshi',
					name: 'renshi',
					component: renshi 
				},
					{
					path: '/tongji/zonghe',
					name: 'zonghe',
					component: zonghe 
				},
					{
					path: '/set/jiben',
					name: 'jiben',
					component: jiben 
				},
				{
					path: '/set/admi',
					name: 'admi',
					component: admi 
				}
			]
		},
		{
			path: '/usertable',
			name: 'usertable',
			component: usertable
		}
	]
})
