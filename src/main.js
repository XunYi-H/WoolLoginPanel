

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            PCode: null,
            VCode: null,
            data: '变量'
        }
    },
    mutations: {
        Change_PCode(state, PCode) {
            state.PCode = PCode
        },
        Change_VCode(state, VCode) {
            state.VCode = VCode
        },
        Change_data(state, data) {
            state.data = data
        }

    }
})

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
