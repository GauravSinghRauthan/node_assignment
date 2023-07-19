const http = require('http')

const PORT = 8080

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<h1>"I Am Happy To Learn Full Stack Web Development From PW Skills!"</h1>')
    }
    res.end()
})

server.listen(PORT,()=>{
    console.log(`server listening at PORT http://localhost:${PORT}`)
})