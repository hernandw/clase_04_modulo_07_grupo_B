import Student from "../models/user.js";

//Crear Estudiantes
export const creaStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    await Student.create({ name, email });
    res.redirect("/"); //volvemos al home despues de guardar
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    res.status(500).send("Error interno del servidor");
  }
};

//Mostrar todos los estudiantes
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({ raw: true });
   
    res.render("home", {
      pageTitle: "Inicio",
      students,
    });
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    res.status(500).send("Error interno del servidor");
  }
};

//Eliminar un estudiante (Delete)
  export const deleteStudent = async (req, res) => {
    try {
      const { id } = req.params;
      
      // Sequelize.destroy borra la fila que coincida con la condición
      await Student.destroy({ where: { id } });
      
      res.redirect('/');
    } catch (error) {
      console.error('Error al eliminar:', error);
      res.status(500).send('No se pudo eliminar al estudiante');
    }
  }