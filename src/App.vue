
<style>
    #container{
        height: 100%;
    }
    header{
        height: 50px;
        text-align:center;
        font-size: 22px;
        line-height: 120px;
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
        <header> 陈涛的博客，施工中... </header>
        <div id="player1" style="width: 800px; height: 600px; margin: 50px auto"></div>
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