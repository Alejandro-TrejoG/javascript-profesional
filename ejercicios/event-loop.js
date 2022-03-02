function moreAsync() {
    console.log("Start")
    setTimeout(() => {
        console.log("setTimeOut()")
    }, 0);
    Promise.resolve("Promise 1").then(msg => { console.log(msg) })
    Promise.resolve("Promise 2").then(msg => { console.log(msg) })
    console.log("End")
}

moreAsync()