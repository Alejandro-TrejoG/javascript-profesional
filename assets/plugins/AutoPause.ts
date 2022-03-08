import MediaPlayer from "../MediaPlayer"

class AutoPause {
    private threshold: number
    player: MediaPlayer
    constructor() {
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibility = this.handlerVisibility.bind(this)
    }
    run(player) {
        this.player = player
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold,

        })
        observer.observe(player.media)

        // VisibilityChange - Nos sirve para saber si el Tab donde estqa nuestra pagina es el que esta observando el usuario,
        // es decir, es el Tab que esta hasta el frente
        document.addEventListener("visibilitychange", this.handlerVisibility)
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        if (isVisible) {
            this.player.media.play()
        } else {
            this.player.media.pause()
        }
    }
    private handlerVisibility() {
        const isVisible = document.visibilityState === "visible"
        if (isVisible) {
            this.player.media.play()
        } else {
            this.player.media.pause()
        }
    }
}

export default AutoPause