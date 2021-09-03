import { createApp } from 'vue'
import NESTetris from '../../src/NESTetris.vue'
import store from '../../src/store/index.js'

createApp(NESTetris).use(store).mount('#root')
