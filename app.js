const http=require('http');
const fs=require('fs');
const path=require('path');
const filePath=path.join(__dirname,'data.txt');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/'){
    res.write('Hello');
res.end();    
    }
    else if(req.url==='/form'){
        res.setHeader("Content-Type","text/html")
        res.write("<form action='/submit' method='POST'>Input <input name='input'/>Input 2 <input name='input2'/><button>Submit</button></form>")
        res.end();
    }
    else if(req.url==='/submit'){
        let data ='';
        req.on("data",(chunk)=>{
            data+=chunk;
        })
        req.on("end",()=>{
            fs.readFile(filePath,'utf8',(err,oldData)=>{
               const newData=oldData+"\n"+data;
                fs.writeFile(filePath,newData,()=>{
                    console.log("Data Saved");
                })
            })
            
        })
        res.write("Data Received")
        res.end();
    }

})
server.listen(3000);