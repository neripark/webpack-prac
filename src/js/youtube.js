// youtubeの動画を再生するスクリプト
export class Youtube {

  constructor(videoId) {
    this.videoId = videoId;
    this.init();
  }

  init() {
    // youtube APIを読み込んで実行
    const scriptTag = document.createElement("script");
    const fsTag = document.getElementsByTagName("script")[0];
    scriptTag.src = this.youtubeApiUrl;
    fsTag.parentNode.insertBefore(scriptTag, fsTag);
    // グローバルな領域にコールバックを定義
    window.onYouTubeIframeAPIReady = this.onReady(this.videoSetting);
  }

  // play() {
  //   window.player.playVideo();
  // }

  pause() {
    window.player.pauseVideo();
  }

  onReady(setting) {
    return () => {
      // グローバルな場所にプレイヤーをイニシャライズ
      window.player = new YT.Player("player", setting);
      console.log('The video is ready.');
    }
  }

  get youtubeApiUrl() {
    return "https://www.youtube.com/iframe_api";
  }

  set videoId(videoId) {
    this._videoId = videoId;
  }
  get videoId() {
    return this._videoId;
  }

  // 動画のセッティング
  get videoSetting() {
    return {
      // height: "540",
      // width: "960",
      videoId: this.videoId,
      playerVars: {
        autohide: 1,
        controls: 1,
        modestbranding: 1,
        iv_load_policy: 3,
        showinfo: 0,
        rel: 0,
        autoplay: 0
      }
    };
  }
}
