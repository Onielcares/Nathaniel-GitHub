// Global Object

//console.log(global);

setTimeout(() => {
    console.log(`God is the Greatest`)
    clearInterval(int);
}, 30000);

const int = setInterval(() => {
    console.log(`Jesus is King`);
}, 1000);