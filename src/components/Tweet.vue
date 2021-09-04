<template>
  <transition :name="`slide-from-${from}`">
    <div id="tweet-wrapper" :class="wrapperStyle" v-if="tweet">
      <div id="tweet" v-if="tweet">
        <div id="tweet-label" class="label">
          TWEET WITH <span>#PGRF2</span>:
        </div>
        <div class="box">
          <div id="twitter-user">
            <img id="twitter-icon" :src="tweet.icon" alt="icon" />
            <span id="twitter-id">@{{ tweet.id }}</span>
          </div>
          <div id="tweet-text" :class="{ small }">
            {{ tweet.content }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  width: {
    type: String,
    default: '420px'
  },
  small: {
    type: Boolean
  },
  from: {
    type: String,
    default: 'left'
  }
})

const store = useStore()
const tweet = computed(() => store.getters.tweet)
const wrapperStyle = computed(() => ({
  'from-left': props.from === 'left',
  'from-right': props.from === 'right'
}))
</script>

<style lang="scss" scoped>
$borderStyle: 1px solid rgba($color: white, $alpha: 0);

#tweet-wrapper {
  overflow: hidden;

  &.from-left {
    border-left: $borderStyle;
  }

  &.from-right {
    border-right: $borderStyle;
  }
}

#tweet {
  display: flex;
  flex-direction: column;
}

#tweet-label {
  font-size: 1.4em;

  span {
    text-decoration: underline dashed;
  }
}

#twitter-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0 12px;
  border-bottom: 1px solid gray;
  font-size: 0.9em;
  font-weight: bold;
}

#twitter-icon {
  width: 56px;
  height: 56px;
  margin-right: 16px;
  background-color: white;
  border-radius: 28px;
}

#tweet-text {
  font-size: 0.9em;
  padding-top: 8px;

  &.small {
    font-size: 0.75em;
  }
}

$duration: 1s;
$easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1);
$easeInCirc: cubic-bezier(0.55, 0, 1, 0.45);

.slide-from-left-enter-active {
  animation: border $duration $easeOutCirc;

  #tweet {
    animation: slide-from-left $duration $easeOutCirc;
  }
}

.slide-from-left-leave-active {
  animation: border $duration $easeOutCirc;

  #tweet {
    animation: slide-from-left reverse $duration $easeInCirc;
  }
}

.slide-from-right-enter-active {
  animation: border $duration $easeOutCirc;

  #tweet {
    animation: slide-from-right $duration $easeOutCirc;
  }
}

.slide-from-right-leave-active {
  animation: border $duration $easeOutCirc;

  #tweet {
    animation: slide-from-right reverse $duration $easeInCirc;
  }
}

@keyframes slide-from-left {
  0%, 10% {
    transform: translateX(-100%);
  }
  90%, 100% {
    transform: translateX(0);
  }
}

@keyframes slide-from-right {
  0%, 10% {
    transform: translateX(100%);
  }
  90%, 100% {
    transform: translateX(0);
  }
}

@keyframes border {
  0% {
    border-color: rgba($color: #CCCCCC, $alpha: 0);
  }
  10% {
    border-color: rgba($color: #CCCCCC, $alpha: 1);
  }
  90% {
    border-color: rgba($color: #CCCCCC, $alpha: 1);
  }
  100% {
    border-color: rgba($color: #CCCCCC, $alpha: 0);
  }
}
</style>
