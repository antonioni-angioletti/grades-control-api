import "regenerator-runtime/runtime";
import fs from 'fs';
class Person {

   constructor(name, gender) {
      this._name = name;
      this._gender = gender;
   }

   get name() {
      return `${this._name}`;
   }
   async lerArquivo() {
      fs.readFile('accounts.json', 'utf-8', (err, data) => {
         let dado = JSON.parse(data);
         console.log(dado);
      });
   }


}

export default new Person();