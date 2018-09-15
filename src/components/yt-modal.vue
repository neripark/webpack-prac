<template>
  <div class="yt-modal">
    <div>
      <p class="opener">これがオープンスイッチです。</p>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hogehoge: true
    };
  }
}
</script>

<style lang="scss" scoped>
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
</style>
