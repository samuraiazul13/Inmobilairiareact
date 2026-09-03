import { useState } from "react";

import Formularioiniciosesion from "./components/Formularioiniciosesion.jsx";
import Formularioregistro from "./components/Formularioregistro.jsx";
import Listadoinmueble from "./components/Listadoinmueble.jsx";
import Detalleinmueble from "./components/Detalleinmueble.jsx";
import GestionInmuebles from "./components/GestionInmuebles.jsx";
import Gestiondecitas from "./components/Gestiondecitas.jsx";
import Formulariocitas from "./components/Formulariocitas.jsx";
import Registroinmueble from "./components/Registroinmueble.jsx";
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

  // Estado del formulario de "Registrar inmueble" (admin)
  const [inmuebleNuevo, setInmuebleNuevo] = useState({});

  const verDetalle = (propiedad) => {
    setInmuebleSeleccionado(propiedad);
    setPagina("detalle");
  };

  const cerrarSesion = () => {
    setRol(null);
    setPagina("login");
  };

  // Agendar cita requiere sesión iniciada como "usuario".
  // Si no hay sesión, se manda a login en vez de dejar la pantalla en blanco.
  const irACitas = () => {
    if (rol === "usuario") {
      setPagina("citas");
    } else {
      setPagina("login");
    }
  };

  const navAdmin = {
    irAInicio: () => setPagina("gestion"),
    irAGestionInmuebles: () => setPagina("gestion"),
    irARegistrarInmueble: () => setPagina("registrarInmueble"),
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
          irALogin={() => setPagina("login")}
          irARegistro={() => setPagina("registro")}
          irACitas={irACitas}
          cerrarSesion={cerrarSesion}
        />
      )}

      {/* DETALLE */}
      {pagina === "detalle" && (
        <Detalleinmueble
          inmueble={inmuebleSeleccionado}
          irALogin={() => setPagina("login")}
          irAInmuebles={() => setPagina("inmuebles")}
          irACitas={irACitas}
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

      {/* GESTIÓN ADMINISTRADOR — Registrar inmueble */}
      {pagina === "registrarInmueble" && rol === "admin" && (
        <Registroinmueble
          inmueble={inmuebleNuevo}
          setInmueble={setInmuebleNuevo}
          anterior={() => setPagina("gestion")}
          siguiente={() => {
            alert("¡Inmueble registrado!");
            setInmuebleNuevo({});
            setPagina("gestion");
          }}
        />
      )}

      {/* CITAS (agendar, para el usuario final ya logueado) */}
      {pagina === "citas" && rol === "usuario" && (
        <Formulariocitas
          irAInmuebles={() => setPagina("inmuebles")}
          irALogin={() => setPagina("login")}
          irACitas={irACitas}
          cerrarSesion={cerrarSesion}
        />
      )}
    </>
  );
}

export default App;