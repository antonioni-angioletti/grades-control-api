import Person from "../models/Person";

class PersonController {
  async create(req, res) {

    Person.createGrid(req.body);

    return res.json(req.body);

  }

  async searchStudent(req, res) {
    let dado = Person.search(req.params.id)
    try {
      Promise.resolve(dado).then((value) => {

        res.send(value);
      });
    } catch (error) {
      res.status(400).send({
        Error: error.message
      })
    }
  }
  async listStudent(req, res) {
    let dado = Person.list();
    try {
      Promise.resolve(dado).then((value) => {

        res.send(value);
      });
    } catch (error) {
      res.status(400).send({
        Error: error.message
      })
    }
  }
  async deleteStudent(req, res) {
   
    try {
      Person.deleteStudent(req.params.id)
      res.send("Estudante deletado");
    } catch (error) {
      res.status(400).send({
        Error: error.message
      })
    }
  }
  async updateStudent(req, res) {
    try {
      Person.updateStudent(req.body)
      res.send("Estudante atualizado");
    } catch (error) {
      res.status(400).send({
        Error: error.message
      })
    }
  }
}
export default new PersonController();