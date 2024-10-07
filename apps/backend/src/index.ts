import express from "express"
const app = express();
import { name } from "@repo/common/config";

console.log(name)
app.listen(4000,()=>{
    console.log("hello world we are listening on port 4000")
})

app.get('/',(req,res)=>{
    res.send("hello this is legend right there")
    return;
})
