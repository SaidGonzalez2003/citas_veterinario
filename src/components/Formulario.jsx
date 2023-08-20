import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  //Hooks useState
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {

      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setCorreo(paciente.correo);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }

  }, [paciente]);



  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, correo, fecha, sintomas].includes("")) {
      setError(true);

      return;
    }

    const objPaciente = {
      nombre,
      propietario,
      correo,
      fecha,
      sintomas
    };

    if (paciente.id) {

        //Editando el registro
        objPaciente.id = paciente.id;

        const pacientesActualizados = pacientes.map( pState => {  

          if(pState.id === paciente.id) {

            return objPaciente;

          } 

          return pState;

        })

        setPacientes(pacientesActualizados)

    }else{

      objPaciente.id =  Date.now().toString(36) + Math.random().toString(36).substr(2),

      setPacientes([...pacientes, objPaciente]);
      setError(false);

    }

    //Reiniciar Formulario
    setNombre("");
    setPropietario("");
    setCorreo("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-8 px-5 mb-4 "
        onSubmit={handleSubmit}
      >
        {/* Formulario */}

        {error && <Error>Llene todos los campos</Error>}

        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase text-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propiertario"
            className="block text-gray-700 uppercase text-bold"
          >
            Nombre del Propietario
          </label>

          <input
            id="propiertario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="correo"
            className="block text-gray-700 uppercase text-bold"
          >
            Correo Electronico
          </label>

          <input
            id="correo"
            type="email"
            placeholder="Correo Electronico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase text-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase text-bold"
          >
            Síntomas
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:scale-105 shadow-md transition duration-300 rounded-md hover:bg-indigo-700 mb-10 cursor-pointer"
          value={paciente.id ? "Editar Paciente" : "Añadir Paciete"}
        />
      </form>
    </div>
  );
};

export default Formulario;
