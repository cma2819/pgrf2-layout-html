<template>
  <img id="logo-ome" src="/assets/pgrf/images/ome_logo.png" alt="OME" />
  <span id="presents">presents</span>
  <img
    id="logo-pgrf"
    src="/assets/pgrf/images/pgrf2_logo_simple.png"
    alt="PGRF"
  />
  <div id="now" class="time">{{ formattedTIme }}</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { DateTime } from 'luxon'

const time = ref(DateTime.now())
const formattedTIme = computed(() => {
  const t = time.value
  if (t.second % 2 === 0) {
    return t.toFormat('HH:mm')
  } else {
    return t.toFormat('HH mm')
  }
})
onMounted(() => {
  setInterval(() => {
    time.value = DateTime.now()
  }, 50)
})

</script>

<style lang="scss" scoped>
#logo-ome,
#logo-pgrf {
  height: 100px;
}

#presents {
  margin: 0 0.5em;
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;
}

#now {
  font-size: 2em;
  margin-left: auto;
}
</style>
