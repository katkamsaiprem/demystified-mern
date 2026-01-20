console.log("1. program start")

setTimeout(() => {
    console.log("2. setTimeout one");

}, 0)
setTimeout(() => {
    console.log("3. setTimeout two");

})
setTimeout(() => {
    console.log("4. setTimeout three");

}, 0)
setTimeout(() => {
    console.log("5. setTimeout four");

},0)

fetch("https://fakestoreapi.com/products").then((data) => { return data.json() }).then((data) => { console.log(data) }).catch((error) => console.log(error));

fetch("https://fakestoreapi.com/users").then((data) => { return data.json() }).then((data) => console.log(data)).catch((error) => console.log(error));

