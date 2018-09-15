const uuidv4 = require('uuid/v4');

// youtubeの動画を再生するスクリプト
export class Youtube {

  constructor(videoId, distId) {
    this.videoId = videoId;
    this.distId = distId;
    this.playerId = `player_${uuidv4()}`;
    this.init();
  }

  init() {
    if (!window.onYouTubeIframeAPIReady) {
      // youtube API未取得の場合は取得してからプレイヤーをイニシャライズ
      const scriptTag = document.createElement("script");
      const fsTag = document.getElementsByTagName("script")[0];
      scriptTag.src = this.youtubeApiUrl;
      fsTag.parentNode.insertBefore(scriptTag, fsTag);
      window.onYouTubeIframeAPIReady = this.initPlayer();
    } else {
      // 取得済の場合はすぐにプレイヤーをイニシャライズ
      (this.initPlayer())();
    };
  }

  // play() {
  //   window[this.playerId].playVideo();
  // }

  pause() {
    window[this.playerId].pauseVideo();
  }

  initPlayer() {
    const distId = this.distId;
    const playerId = this.playerId;
    const setting = this.videoSetting;
    return () => {
      // グローバルな場所にプレイヤーをイニシャライズ
      window[playerId] = new YT.Player(distId, setting); // 第１引数は描画先のID
    }
  }

  get youtubeApiUrl() {
    return "https://www.youtube.com/iframe_api";
  }

  // ***** プレイヤーのID *****
  set playerId(playerId) {
    this._playerId = playerId;
  }
  get playerId() {
    return this._playerId;
  }

  // ***** 動画のID *****
  set videoId(videoId) {
    this._videoId = videoId;
  }
  get videoId() {
    return this._videoId;
  }

  // ***** 描画先の要素のID *****
  set distId(distId) {
    this._distId = distId;
  }
  get distId() {
    return this._distId;
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
