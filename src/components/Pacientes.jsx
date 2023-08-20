
const Pacientes = ({paciente,setPaciente, eliminarPaciente}) => {

    const {id, nombre, propietario, correo, fecha, sintomas} = paciente;

    const handleEliminar = () => {

      const respuesta = confirm('Deseas eliminar al paciente')

      if (respuesta) {
        eliminarPaciente(id)
      }

    }

  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 pt-10 pb-4 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Correo: {""}
          <span className="font-normal normal-case">{correo}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">
            {sintomas}
          </span>
        </p>

        <div className="flex justify-between px-3 w-full">

            <button className="py-2 px-8 mt-5 bg-blue-500 rounded-md shadow-md  hover:bg-blue-700 transition duration-300 hover:scale-105 font-black text-white" onClick={() => (
              setPaciente(paciente))
            }>Editar</button>

            <button className="py-2 px-8 mt-5 bg-red-500 rounded-md shadow-md hover:bg-red-700 transition duration-300 hover:scale-105 font-black text-white" onClick={handleEliminar}>Eliminar</button>

        </div>
      </div>
  )
}

export default Pacientes