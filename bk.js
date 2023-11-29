const process = require("process")
const event = require("event")


ee = events.EventEmitter()
ee.on("login", ()=>
{
    console.log("loged in")
})

ee.emit("login")

console.log("enter any")

process.stdin.on("data", (data) =>{
    process.stdout.write(data)
    process.stdout.write("enter any: ")
})