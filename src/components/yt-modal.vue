<template>
  <div class="yt-modal">
    <div>
      <p class="opener" @click="modalOpen">これがオープンスイッチです。</p>
    </div>
    <transition class="fade">
      <div class="yt-wrap" v-show="isModalOpen">
        <div class="player-box">
          <div :id="dist"></div>
        </div>
        <div class="overlay" @click="modalClose"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Youtube } from "../js/youtube.js";

export default {
  props: ["vid", "dist"],
  data() {
    return {
      isModalOpen: false,
      yt: undefined
    };
  },
  methods: {
    modalOpen() {
      this.isModalOpen = true;
      // 初回のみインスタンス生成
      if (!this.yt) this.yt = new Youtube(this.vid, this.dist);
    },
    modalClose() {
      this.isModalOpen = false;
      this.yt.pause();
    }
  }
}
</script>

<style lang="scss" scoped>
.yt-wrap {
  .player-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: 1;
  }
}
.opener {
  background: #ccc;
  border-radius: 5px;
  padding: 10px;
  line-height: 1.5;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
}

// transition
.v-enter-active, .v-leave-active {
  transition: opacity .3s
}
.v-enter, .v-leave-to {
  opacity: 0
}
</style>
