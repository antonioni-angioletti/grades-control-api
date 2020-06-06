import app from "./app";

app.listen(3002, () => {
    try {
     fs.readFile('accounts.json','utf-8',(err,data)=>{
         if(err){    
            let dado = {
                 nextId:1,
                 grades:[]
            };
            fs.writeFile("accounts.json",JSON.stringify(dado),err=>{
        });
         }
     }); 
     
    } catch (error) {
        console.log(error.message);
    }
 
     console.log("Server on")
 });