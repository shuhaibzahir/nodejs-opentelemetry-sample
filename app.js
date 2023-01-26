const { init } = require('./tracing')
const api = require('@opentelemetry/api')
init('shuhaib', 'development')


const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    const activeSpan = api.trace.getSpan(api.context.active())
    activeSpan.addEvent('Hello API Called', { randomIndex: 1 })
    res.send("this is your world")
})


app.get("/hello",(req,res)=>{
    const activeSpan = api.trace.getSpan(api.context.active())
    activeSpan.addEvent('Hello API Called', { randomIndex: 1 })
   setTimeout(() => {
    res.send("this is your world")
   }, 5000);
})











app.listen(8088,()=>{
    console.log("server runnig ")
})