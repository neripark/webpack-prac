<template>
  <div class="yt-modal">
    <div>
      <p class="opener" @click="modalOpen">これがオープンスイッチです。</p>
    </div>
    <transition class="fade">
      <div class="yt-wrap" v-show="isModalOpen">
        <div class="player-box">
          <div id="player"></div>
        </div>
        <div class="overlay" @click="modalClose"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Youtube from "../js/youtube.js";

export default {
  created() {
    // this.yt = new Youtube("mNpPQXMgtmw");
    // this.yt = new Youtube("236KUEBlXLE");
  },
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    modalOpen() {
      this.isModalOpen = true;
      // this.yt = new Youtube("mNpPQXMgtmw");
      this.yt = new Youtube("236KUEBlXLE"); // トーマス
    },
    modalClose() {
      this.isModalOpen = false;
      this.yt.pause();
    },

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
    // width: 960px;
    // height: 540px;
    // background: #fff;
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

.v-enter-active, .v-leave-active {
  transition: opacity .3s
}
.v-enter, .v-leave-to {
  opacity: 0
}
</style>
