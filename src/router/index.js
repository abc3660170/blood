import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);
// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: require('../views/infomine.vue') };
// const Bar = { template: require('../views/infoyours.vue') };
const User = {template:"<div>" +
                            "<h2>User {{$route.params.name }}</h2>" +
                            "<router-view></router-view>" +
                        "</div>"};
const UserHome = {template:"<div>我是父级路由</div>"};

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/user/:name/',
        component: User,
        children:[
            // 重定向 可以指向命名路由，也可以直接指向path
            { path: '',redirect: {name:'你的资料'},name:"信息", component: UserHome },
            { path: 'mine',name:"我的资料", component: require('../views/infomine.vue') },
            { path: 'yours',name:"你的资料", component: require('../views/infoyours.vue') },
            { path: 'rate',name:"评分", component: require('../views/rate.vue') }
        ]
       // component: User
    }

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
module.exports = router;