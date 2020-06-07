import Person from "../models/Person";

class PersonController {
  async create(req, res) {
  
    Person.createGrid(req.body);

    return res.json(req.body);

  }

}

export default new PersonController();