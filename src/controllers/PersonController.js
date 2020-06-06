import Person from "../models/Person";

class PersonController {
  async index(req, res) {
    const text = await Person.lerArquivo();

    return res.json(text);
  }

}

export default new PersonController();