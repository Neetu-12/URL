const http=require("http");
http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        res.end('hi....on home page...')
    }
    else if(req.url=="/about"){
        res.end('hii on about page')
    }
    else if(req.url=="/contact"){
        res.end('hii on contact page')

    }
    else{
        res.writeHead(404)
        res.end('404 erro');
    }
})
.listen(8000,()=>{
    console.log("listening");
})
