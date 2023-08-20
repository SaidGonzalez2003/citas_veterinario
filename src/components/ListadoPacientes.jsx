import React, { useId } from "react";

import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes,  setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {/* Condicional ternario*/} 

      {pacientes.length > 0 ? ( //se evalua el resultado
        <>
          <h2 className="text-3xl font-black text-center ">
            Listado Pacientes
          </h2>

          <p className="text-xl mt-5 m-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => {
            return <Pacientes key={paciente.id}
             paciente={paciente}
             setPaciente={setPaciente}
             eliminarPaciente = {eliminarPaciente}/>;
          })}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center ">
            No hay Pacientes
          </h2>

          <p className="text-xl mt-5 m-10 text-center">
            Comienza a agregar tus {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
      <div className=""></div>
    </div>
  );
};

export default ListadoPacientes;
