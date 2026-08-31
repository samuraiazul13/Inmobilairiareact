import { useState } from "react";

import Formularioiniciosesion from "./components/Formularioiniciosesion.jsx";
import Formularioregistro from "./components/Formularioregistro.jsx";
import Listadoinmueble from "./components/Listadoinmueble.jsx";
import Detalleinmueble from "./components/Detalleinmueble.jsx";
import GestionInmuebles from "./components/GestionInmuebles.jsx";
import Gestiondecitas from "./components/Gestiondecitas.jsx";
import Formulariocitas from "./components/Formulariocitas.jsx";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("login");
  const [rol, setRol] = useState(null);

  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    contrasena: "",
  });

  const [inmuebleSeleccionado, setInmuebleSeleccionado] = useState(null);

  const verDetalle = (propiedad) => {
    setInmuebleSeleccionado(propiedad);
    setPagina("detalle");
  };

  const cerrarSesion = () => {
    setRol(null);
    setPagina("login");
  };


  const navAdmin = {
    irAInicio: () => setPagina("gestion"),
    irAGestionInmuebles: () => setPagina("gestion"),
    irAUsuarios: () => setPagina("usuarios"),     
    irACitas: () => setPagina("gestionCitas"),
    irAReportes: () => setPagina("reportes"),      
    irAConfiguracion: () => setPagina("configuracion"), 
    cerrarSesion: cerrarSesion,
  };

  return (
    <>
      {/* LOGIN */}
      {pagina === "login" && (
        <Formularioiniciosesion
          irARegistro={() => setPagina("registro")}
          irAInmuebles={() => setPagina("inmuebles")}
          iniciarSesion={(tipoUsuario) => {
            setRol(tipoUsuario);
            setPagina(tipoUsuario === "admin" ? "gestion" : "inmuebles");
          }}
        />
      )}

      {/* REGISTRO */}
      {pagina === "registro" && (
        <Formularioregistro
          persona={persona}
          setPersona={setPersona}
          anterior={() => setPagina("login")}
          irAInmuebles={() => setPagina("inmuebles")}
          siguiente={() => {
            alert("¡Registro exitoso!");
            setPagina("login");
          }}
        />
      )}

      {/* LISTADO DE INMUEBLES */}
      {pagina === "inmuebles" && (
        <Listadoinmueble
          verDetalle={verDetalle}
          irARegistro={() => setPagina("registro")}
          irACitas={() => setPagina("citas")}
          cerrarSesion={cerrarSesion}
        />
      )}

      {/* DETALLE */}
      {pagina === "detalle" && (
        <Detalleinmueble
          inmueble={inmuebleSeleccionado}
          irALogin={() => setPagina("login")}
          irAInmuebles={() => setPagina("inmuebles")}
          irACitas={() => setPagina("citas")}
          volver={() => setPagina("inmuebles")}
          cerrarSesion={cerrarSesion}
        />
      )}

      {/* GESTIÓN ADMINISTRADOR — Inmuebles */}
      {pagina === "gestion" && rol === "admin" && (
        <GestionInmuebles {...navAdmin} />
      )}

      {/* GESTIÓN ADMINISTRADOR — Citas */}
      {pagina === "gestionCitas" && rol === "admin" && (
        <Gestiondecitas {...navAdmin} />
      )}

      {/* CITAS (agendar, para el usuario final) */}
      {pagina === "citas" && rol === "usuario" && (
        <Formulariocitas
          irAInmuebles={() => setPagina("inmuebles")}
          irALogin={() => setPagina("login")}
          irACitas={() => setPagina("citas")}
          cerrarSesion={cerrarSesion}
        />
      )}
    </>
  );
}

export default App;