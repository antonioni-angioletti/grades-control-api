import "regenerator-runtime/runtime";
import fs from 'fs';
class Person {

   constructor() {
      
   }

   async createGrid(params) {
      fs.readFile('accounts.json', 'utf-8', (err, data) => {
            
             let dado = JSON.parse(data);
             let json = {id: dado.nextId++ , params};
            
             console.log(dado);
             dado.grades.push(json);
           
             fs.writeFile("accounts.json", JSON.stringify(dado), err => {
             });
      });
   }


}
 
export default new Person();