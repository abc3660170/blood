<style>
    #container{
        height: 100%;
    }
    header{
        height: 50px;
        background: cornflowerblue;
        border-radius: 10px;
    }
    #main{
        height: 400px;
        background:#FFF;
    }
    footer{
        height: 50px;
        background: mediumvioletred;
    }
    .content{height: 300px;}
</style>
<template>
    <div id="app">
        <header>
            这是为什么人生啊就是如此操蛋哈哈哈
        </header>
        <div id="main">
            <p>
                <!-- 使用 router-link 组件来导航. -->
                <!-- 通过传入 `to` 属性指定链接. -->
                <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
                <router-link to="/user/foo/mine">Go to Foo</router-link>
                <router-link to="/user/bar/yours">Go to Bar</router-link>
                <router-link to="/user/bar/rate">rate</router-link>
            </p>
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
        <footer>
            这里将展示本体结构
        </footer>
    </div>
</template>

<script>

</script>