interface Observer{
    update: (data: any) => void
}

interface Subject{
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject{
    observers: Observer[] = []
    constructor(){
        const el: HTMLInputElement = document.querySelector("#value")
        el.addEventListener("input", ()=>{
            this.notify(el.value)
        })
    }
    subscribe(observer: Observer){
        this.observers.push(observer)
    }
    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obser => {
            return obser === observer
        })
        alert("Elemento desuscrito")
        this.observers.splice(index, 1)
    }
    notify(data){
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer{
    private el: HTMLElement
    constructor(element){
        this.el = element
    }
    update(data: any){
        this.el.innerText = data
    }

}

const value = new BitcoinPrice()
const display = new PriceDisplay(document.querySelector("#price"))

value.subscribe(display)

setTimeout(()=>
    value.unsubscribe(display), 5000)