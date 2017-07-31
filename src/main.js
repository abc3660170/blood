/**
 * Created by 毛俊杰 on 2016/11/11 0011.
 */
import 'normalize.css'
import Vue from 'vue';
import App from './App.vue'
import router from './router/index'

import 'dplayer/dist/DPlayer.min.css'

new Vue({ // eslint-disable-line
    render: h => h(App),
    router
}).$mount('#app');


