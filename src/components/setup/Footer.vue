<template>
  <div id="spotify">
    <span>Now playing: {{ musicInfo }}</span>
  </div>
  <div id="hashtag-guide">hashtag: <span>#PGRF2</span></div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const musicInfo = computed(() => store.getters.shortSpotifyInfo)
</script>

<style lang="scss" scoped>
$spotifyHeight: 48px;

#spotify {
  display: flex;
  align-items: center;
  height: $spotifyHeight;
  line-height: $spotifyHeight;
  padding: 0 24px;
  background-color: white;
  border-radius: 24px;
}

#hashtag-guide {
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;

  span {
    text-decoration: underline dashed;
  }
}
</style>
