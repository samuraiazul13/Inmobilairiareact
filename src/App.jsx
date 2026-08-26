import { useState } from "react";

import Formularioiniciosesion from "./components/Formularioiniciosesion.jsx";
import Formularioregistro from "./components/Formularioregistro.jsx";
import Listadoinmueble from "./components/Listadoinmueble.jsx";
import GestionInmuebles from "./components/GestionInmuebles.jsx";

import "./App.css";

function App() {
  const [pagina, setPagina] = useState("login");

  const [rol, setRol] = useState("");

  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    contrasena: "",
  });

  return (
    <>
      {pagina === "login" && (
        <Formularioiniciosesion
          irARegistro={() => setPagina("registro")}

          iniciarSesion={(tipoUsuario) => {
            setRol(tipoUsuario);

            if (tipoUsuario === "admin") {
              setPagina("gestion");
            } else {
              setPagina("inmuebles");
            }
          }}
        />
      )}

      {pagina === "registro" && (
        <Formularioregistro
          persona={persona}
          setPersona={setPersona}

          anterior={() => setPagina("login")}

          siguiente={() => {
            alert("¡Registro exitoso!");
            setPagina("login");
          }}
        />
      )}

      {pagina === "inmuebles" && (
        <Listadoinmueble />
      )}

      {pagina === "gestion" && (
        <GestionInmuebles />
      )}
    </>
  );
}

export default App;