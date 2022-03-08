import MediaPlayer from "./MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"

const video = document.querySelector("video")
const buttonPlay: HTMLElement = document.querySelector(".play-pause")
const buttonMute: HTMLElement = document.querySelector(".mute")

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay, new AutoPause] })
buttonPlay.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMuted()


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(err => {
        console.log(err)
    })
}