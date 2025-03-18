require("dotenv").config();
const express=require("express");
const path=require("path")
const app=express();
const port=process.env.PORT;


app.get("/",(req,res)=>{res.sendFile(path.join(__dirname,"pages","index.html"))});
app.get("/about",(req,res)=>{res.sendFile(path.join(__dirname,"pages","about.html"))});
app.get("/contact",(req,res)=>{res.sendFile(path.join(__dirname,"pages","contact.html"))});

app.use((req,res)=>{res.status(404).sendFile(path.join(__dirname,"pages","404.html"))})


app.listen(port,()=>{
    console.log(`Server running in http://localhost:${port}`)
})







//require("dotenv").config();
// let http=require("http")
// let fs=require("fs")
// let url=require("url")
// http.createServer((req,res)=>{
//     let q= url.parse(req.url,true)
//     let pathName=q.pathname
//     let fileName=""
//     if(pathName=="/"){
//         fileName="./index.html"
//     }else if(pathName=="/about"){
//         fileName="./about.html"
//     }else if(pathName=="/contact"){
//         fileName="./contact.html"
//     }else{
//         fileName="./404.html"
//     }
//     console.log("file name: "+fileName)
//     fs.readFile(fileName,(err,data)=>{
//         if(err){
//             res.writeHead(404,{"Content-Type":"text/html"})
//             return res.end("404 Not Found")
//         }
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.write(data)
//         return res.end()
//     })   
// }).listen(port||3000,()=>{console.log(`server running in   http://localhost:${port}`)})