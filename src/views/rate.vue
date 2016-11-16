<template>
    <el-rate
            v-model="value4"
            :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
            void-icon-class="icon-rate-face-off"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
    </el-rate>

</template>
<script>
    export default {
        data() {
            return {
                value4: 2
            }
        }
    }
</script>