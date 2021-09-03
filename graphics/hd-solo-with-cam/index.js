import { createApp } from 'vue'
import HDSoloWithCam from '../../src/HDSoloWithCam.vue'
import store from '../../src/store/index.js'

createApp(HDSoloWithCam).use(store).mount('#root')
