// Global Object

//console.log(global);

setTimeout(() => {
    console.log(`God is the Greatest`)
    clearInterval(int);
}, 5000);

const int = setInterval(() => {
    console.log(`Jesus is King`);
}, 1000);

// Directory Name and File Name

console.log(__dirname)
console.log(__filename)