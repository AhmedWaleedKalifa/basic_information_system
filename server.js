let http=require("http")

let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("Hello World!")
    
}).listen(8080,()=>{console.log("http://localhost:8080")})