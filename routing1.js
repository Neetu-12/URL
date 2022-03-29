const http=require("http");
var fs =require("fs")
http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=='/'){
        fs.readFile('./h1.html',(err,data)=>{
            // res.writeHead(200,{'Conetent-Type':'data'})
            res.write(data)
            res.end()

        })
    }
    else if(req.url=="/about"){
        fs.readFile('./h2.html',(err,data1)=>{
            // res.writeHead(200,{'Content-Type':'data1'})
            res.write(data1)
            res.end()

        })
    }
    else if(req.url=="/contact"){
        fs.readFile('./h3.html',(err,data2)=>{
            // res.writeHead(200,{'Content-Type':'data2'})
            res.write(data2)
            res.end()
        })

    }
    else if(req.url=="/login"){
        fs.readFile('./h4.html',(err,data3)=>{
            // res.writeHead(200,{'Content-Type':'data3'})
            res.write(data3)
            res.end()
        })
    }
    else{
        fs.readFile('./h5404.html',(err,data4)=>{
            // res.writeHead(200,{'Content-Typr':"data4"})
            res.write(data4)
            res.end()
        })
    }
})
.listen(8000,()=>{
    console.log("listening")
})
