
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
        <div id="player1" style="width: 800px; height: 600px; margin: 50px auto"></div>
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
    import $ from 'jquery'
    import DPlayer from 'dplayer/dist/DPlayer.min.js'
    $(document).ready(function(){
        var dp = new DPlayer({
            element: document.getElementById('player1'),
            video: {
                url: 'http://devtest.qiniudn.com/%E8%8B%A5%E8%83%BD%E7%BB%BD%E6%94%BE%E5%85%89%E8%8A%92.mp4',
                pic: 'http://devtest.qiniudn.com/%E8%8B%A5%E8%83%BD%E7%BB%BD%E6%94%BE%E5%85%89%E8%8A%92.png'
            }
        });
    })

</script>