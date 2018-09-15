<template>
  <div id="test" class="test-component">
    <section>
      <h2></h2>
      <p>{{int}}</p>
    </section>
    <button @click="increment">increment!!</button>
    <yt-modal :vid="'mNpPQXMgtmw'" :dist="'keyaki'" />
    <yt-modal :vid="'236KUEBlXLE'" :dist="'tomas'" />
  </div>
</template>

<script>
import ytModal from "./yt-modal.vue";

export default {
  components: {
    ytModal
  },
  data() {
    return {
      int: 0
    }
  },
  methods: {
    increment() {
      this.int = this.int + 1;
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 10px;
  background: #ccc;
}
</style>
