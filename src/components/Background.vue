<template>
  <div id="wrapper">
    <div id="filter"></div>
    <div id="boxes" v-if="animated">
      <BlinkSquare
        v-for="i in [...Array(boxCount)].map((_, i) => i)"
        :key="i"
      ></BlinkSquare>
    </div>
    <div id="boxes" v-else>
      <Square
        v-for="i in [...Array(boxCount)].map((_, i) => i)"
        :key="i"
        :opacity="Math.random()"
      ></Square>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import BlinkSquare from './background/BlinkSquare.vue'
import Square from './background/Square.vue'

const props = defineProps({
  animated: Boolean
})
const boxCount = ref(60)

onMounted(() => {
  nodecg.Replicant('assets:background').on('change', (newVal) => {
    document.getElementById('root').style.backgroundImage = `url(${newVal[0]?.url})`
  })
})
</script>

<style scoped>
#wrapper {
  position: fixed;
  overflow: hidden;
  width: 1920px;
  height: 1080px;
  z-index: -1;
}

#filter {
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, white 30%, rgba(0, 0, 0, 0));
}

#boxes {
  position: relative;
  z-index: -3;
  width: 2200px;
  display: flex;
  flex-wrap: wrap;
  transform: translate(-110px, 60px) rotate(-15deg);
  filter: blur(6px);
}

p {
  font-size: 5em;
  color: lightgray;
}
</style>
