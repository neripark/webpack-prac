export default class Animal {

  constructor(name, type, voice) {
    this.name = name;
    this.type = type;
    this.voice = voice;
  }

  check() {
    const data = `名前：${this.name} / 種類：${this.type} / 鳴き声：${this.voice}`
    console.log(data);
    return data;
  }
  
}
