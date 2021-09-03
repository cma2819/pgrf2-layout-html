<template>
  <span>{{ num }}</span>
</template>

<script setup>
import { defineProps, reactive, computed, watch } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  destination: Number
})
const tweened = reactive({
  num: props.destination
})
const num = computed(() => tweened.num)

watch(
  () => props.destination,
  (newVal) => gsap.to(tweened, {
    num: newVal,
    duration: 1,
    snap: { num: 1 },
    ease: 'power4.out'
  })
)
</script>
