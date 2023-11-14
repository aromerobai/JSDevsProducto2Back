const Semestre = require("../models/Semestre");
const Asignatura = require("../models/Asignatura");

const resolvers = {
  Query: {

    //querys para Semestres
    hello: () => "Hello world",

    getAllSemestre: async () => {
      const semestres = await Semestre.find();  
      return semestres; 
    },

    async getSemestre(_, { id }) {
      return await Semestre.findById(id);
    },

    //querys para asignaturas

    getAllAsignatura: async () => {
      try {
        const asignaturas = await Asignatura.find();
        return asignaturas;
      } catch (error) {
        console.error(error);
        throw new Error('Error al obtener todas las asignaturas');
      }
    },
    getAsignatura: async (_, { id }) => {
      try {
        const asignatura = await Asignatura.findById(id);
        return asignatura;
      } catch (error) {
        console.error(error);
        throw new Error(`Error al obtener la asignatura con ID ${id}`);
      }
    },
    getAsignaturasBySemestre: async (_, { semestreId }) => {
      try {
        const asignaturas = await Asignatura.find({ semestreId });
        return asignaturas;
      } catch (error) {
        console.error(error);
        throw new Error(`Error al obtener las asignaturas del semestre con ID ${semestreId}`);
      }
    },
  },
  
  
  Mutation: {
    //Mutations para semestres
    async createSemestre(parent, { SemestreInput }, context, info) {
      const { nombre, descripcion, anno, inicio, final, color } = SemestreInput; 
      const newSemestre = new Semestre({ nombre, descripcion, anno, inicio, final, color });
      await newSemestre.save();
      return newSemestre;
    },
    async deleteSemestre(_, { id }) {
        await Semestre.findByIdAndDelete(id);
        return "Task Deleted";
      },
    async deleteSemestreByIndex(_, { index }) {
        const semestreToDelete = await Semestre.findOne().skip(index).exec();
        if (!semestreToDelete) {
            throw new Error("Semestre not found");
        }
        await Semestre.deleteOne({ _id: semestreToDelete._id });
        return "Semestre Deleted";
    },

    //Mutations para ASIGNATURAS
    async createAsignatura(parent, { AsignaturaInput }, context, info) {
      const { nombre, descripcion, dificultad, estadoAsignatura, semestreId } = AsignaturaInput;
      const newAsignatura = new Asignatura({ nombre, descripcion, dificultad, estadoAsignatura, semestreId });
      await newAsignatura.save();
      return newAsignatura;
    },
    async updateAsignatura(_, { id, AsignaturaInput }) {
      const updatedAsignatura = await Asignatura.findByIdAndUpdate(id, AsignaturaInput, { new: true });
      return updatedAsignatura;
    },
    async deleteAsignatura(_, { id }) {
      await Asignatura.findByIdAndDelete(id);
      return "Asignatura Deleted";
    },
  

  },
};

module.exports = {
  resolvers,
};