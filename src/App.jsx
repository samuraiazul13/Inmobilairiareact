import { useState } from "react";
import Formularioiniciosesion from "./components/Formularioiniciosesion.jsx";
import Formularioregistro from "./components/Formularioregistro.jsx";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("login");

  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    contrasena: "",
  });

  return (
    <>
      {pagina === "login" ? (
        <Formularioiniciosesion
          siguiente={() => setPagina("registro")}
        />
      ) : (
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
    </>
  );
}

export default App;