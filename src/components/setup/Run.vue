<template>
  <div class="run" :class="{ 'later-than-next': !upNext }">
    <p id="up-next" class="label" v-if="upNext">UP NEXT:</p>
    <div class="time" v-else>{{ run.startsAtOnSchedule() }}~</div>
    <div
      class="content-box"
      :class="{ next: upNext, 'later-than-next': !upNext }"
      v-if="!run.isSetupBlock()"
    >
      <span class="title">{{ run.title }}</span>
      <div class="info">
        <div class="category">
          <span class="label">Category: </span>{{ run.category }}
        </div>
        <div class="platform">
          <span class="label">Platform: </span>{{ run.platform }}
        </div>
        <div class="est"><span class="label">EST: </span>{{ run.est }}</div>
      </div>
      <div class="info">
        <div class="runner">
          <span class="label">Runner: </span>{{ run.joinedRunnerNames() }}
        </div>
        <div class="commentator" v-if="run.commentators.length > 0">
          <span class="label">Commentator: </span>{{ run.joinedCommentatorNames() }}
        </div>
      </div>
    </div>
    <div
      class="content-box setup"
      :class="{ next: upNext, 'later-than-next': !upNext }"
      v-else
    >
      <span class="title">{{ run.title }}</span>
      <div class="info">
        <span class="label">Duration: </span><span class="time">{{ run.est }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  run: Object,
  upNext: Boolean
})
</script>

<style lang="scss" scoped>
#up-next {
  font-size: 2em;
}

.run {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.later-than-next {
    flex-direction: row;
    align-items: center;
  }
}

.content-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.next {
    font-size: 1.4em;
    height: 200px;
  }

  &.later-than-next {
    font-size: 1.1em;
    height: 160px;
  }
}

.title {
  display: block;
  font-size: 1.6em;
  font-weight: 600;
  margin-top: -0.2em;
}

.info div {
  display: inline-block;
  margin-right: 1em;
}

.time {
  display: inline-block;
  font-size: 1.4em;
  width: 160px;
}

.setup {
  color: rgba($color: black, $alpha: 0.4);

  .time {
    font-size: 1em;
  }
}
</style>
