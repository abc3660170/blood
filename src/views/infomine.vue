<style scoped>
    label{ color: coral;}
</style>

<template>
    <ul>
       <li>
           <label>姓名：</label>
           {{$route.params.name }}
       </li>
        <li>
            <label>性别：</label>
            男
        </li>
        <li>
            <label>出生日期：</label>
            <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期时间">
            </el-date-picker>
        </li>
        <li>
            <label>身份证：</label>
            321281198909086338
        </li>
        <!--<li>-->
            <!--<label>评分：</label>-->
            <!--<el-rate-->
                    <!--v-model="value3"-->
                    <!--show-text>-->
            <!--</el-rate>-->
        <!--</li>-->


    </ul>

</template>
<script>
    export default {
        data() {
            return {
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: ''
            };
        }
    };
</script>