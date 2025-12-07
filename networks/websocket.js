import express from "express";
import { WebSocketServer}   from "ws";

const app = express();
const port=8080;

const server = app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

const wss = new WebSocketServer({server});
wss.on('connection',(ws)=>{
    ws.send("connectiomn established");
    ws.on('message',(data)=>{
        console.log(`Received message: ${data}`);
        ws.send("thaks");
    })
  
})