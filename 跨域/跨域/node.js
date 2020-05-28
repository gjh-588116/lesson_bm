const http = require('http');
http.createServer((req,res) =>{
    let posts = ['js','php'];
    res.end(JSON.stringify(posts));
})
.listen(9090,() =>{
    console.log(9090);
});