// create a promise method. the will will get resolved after 6 second delay.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 6000)
})

// console log before calling the promise
console.log('Before calling promise');

// call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log('From Callback' + successMessage)
})

// console log after calling the promise
console.log('After calling promise');