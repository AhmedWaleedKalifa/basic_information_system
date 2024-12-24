let http=require("http")
let fs=require("fs")
let url=require("url")
http.createServer((req,res)=>{
    let q= url.parse(req.url,true)
    let pathName=q.pathname
    let fileName=""
    if(pathName=="/"){
        fileName="./index.html"
    }else if(pathName=="/about"){
        fileName="./about.html"
    }else if(pathName=="/contact"){
        fileName="./contact.html"
    }else{
        fileName="./404.html"
    }
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.writeHead(404,{"Content-Type":"text/html"})
            return res.end("404 Not Found")
        }
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        return res.end()
    })   
}).listen(8080,()=>{console.log("server running in   http://localhost:8080")})