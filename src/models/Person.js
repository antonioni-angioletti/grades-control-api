import "regenerator-runtime/runtime";
import fs from 'fs';
class Person {

   constructor() {

   }

   async createGrid(data) {
      fs.readFile('accounts.json', 'utf-8', (err, dataAccount) => {

         let dado = JSON.parse(dataAccount);
         let {student,subject,type,value} = data
         let json = {id: dado.nextId++,student:data[0].student,subject:data[0].subject,type:data[0].type,value:data[0].value};

         console.log(json);
         dado.grades.push(json);

         fs.writeFile("accounts.json", JSON.stringify(dado), err => {});
      });
   }

   async search(id) {
      let dado = await fs.readFileSync('accounts.json', 'utf-8');
      let accountFound = JSON.parse(dado);

      return accountFound.grades.find(account => account.id == parseInt(id, 10));
   }
   async list() {
      let dado = await fs.readFileSync('accounts.json', 'utf-8');
   
      return JSON.parse(dado);
   }
   async deleteStudent(id) {
      let dado = await fs.readFileSync('accounts.json', 'utf-8');
      let accountFound = JSON.parse(dado);

      accountFound.grades = accountFound.grades.filter((account) => account.id !== parseInt(id, 10));
      console.log(accountFound);
      fs.writeFile("accounts.json", JSON.stringify(accountFound), err => {});

   };
   async updateStudent(body) {
      fs.readFile('accounts.json', 'utf-8', (err, dataAccount) => {

         let dado = JSON.parse(dataAccount);
         let oldIndex = dado.grades.findIndex((account) => account.id === body.id);
        
         dado.grades[oldIndex] = body;
         fs.writeFile("accounts.json", JSON.stringify(dado), err => {});

      });



   };



}

export default new Person();