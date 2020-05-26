const MyKoa = require("./lib/application");
const app = new MyKoa();

// app.use((ctx) =>{
//     ctx.body = 'hellow body';
// })
// app.listen(3000);
app.use((req , res) =>{
    res.end('hellow world')
})
app.listen(3001,()=>{
    console.log(`你的应用在3001端口启动`)
});