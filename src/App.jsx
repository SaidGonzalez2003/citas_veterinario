import Header from "./components/Header";
import "./App.css";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useEffect, useState } from "react";

function App() {

  //Hooks useState
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {

    const eliminar = pacientes.filter((pState) => (pState.id !== id))

    setPacientes(eliminar);
    
  }

  useEffect(() => {

    const obtenerLS = () => {

      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];

      setPacientes(pacientesLS)
      
    }

    obtenerLS();
  },[])

  useEffect(() => {

    if(pacientes.length > 0){
      localStorage.setItem("pacientes", JSON.stringify(pacientes))
    }
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">

      <Header/>

      <div className="mt-12 md:flex">
        <Formulario 

        //Props
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}

        />
        <ListadoPacientes
        pacientes = {pacientes}
        setPaciente= {setPaciente}
        eliminarPaciente = {eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
