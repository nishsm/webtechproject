const {start} = require("./server");

start({

    port:8000,
    callback:()=> console.log("listening on port " + 8000)
})