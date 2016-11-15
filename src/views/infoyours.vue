<style scoped>
    label{ color:aquamarine;}
</style>

<template>
    <ul>
        <li>
            <label>姓名：</label>
            {{$route.params.name }}
        </li>
        <li>
            <label>性别：</label>
            女
        </li>
        <li>
            <label>身份证：</label>
            保密
        </li>
    </ul>
</template>
<script>
//    console.debug("============  下面是路由实例 ==========");
//    console.log(this.$route);
</script>