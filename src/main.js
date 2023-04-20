

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 0,
            PCode: null,
            VCode: null
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        Change_PCode(state, PCode) {
            state.PCode = PCode
        },
        Change_VCode(state, VCode) {
            state.VCode = VCode
        }

    }
})

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
