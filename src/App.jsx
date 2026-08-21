import { useState } from "react";

import Header from "./components/Header.jsx";
import Formularioiniciosesion from "./components/Formularioiniciosesion.jsx";
import Formularioregistro from "./components/Formularioregistro.jsx";
import Formularioregistroinmueble from "./components/Formularioregistroinmueble.jsx";
import gestiondeinmuebles from "./components/gestiondeinmuebles.jsx";
import detalleinmueble from "./components/detalleinmueble.jsx";
import Listadoinmueble from "./components/Listadoinmueble.jsx";
import citas from "./components/citas.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {

  // Controla qué formulario/pantalla se muestra
  const [paso, setPaso] = useState(1);

  // Datos compartidos
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    usuario: "",
    contrasena: "",
    telefono: "",
  });

  // Cambiar de pantalla
  const siguiente = () => {
    setPaso(paso + 1);
  };

  const anterior = () => {
    setPaso(paso - 1);
  };

  return (
    <>
      <Header />

      {paso === 1 && (
        <Formularioiniciosesion
          persona={persona}
          setPersona={setPersona}
          siguiente={siguiente}
        />
      )}

      {paso === 2 && (
        <Formularioregistro
          persona={persona}
          setPersona={setPersona}
          anterior={anterior}
          siguiente={siguiente}
        />
      )}

      {paso === 3 && (
        <Formularioregistroinmueble
          persona={persona}
          setPersona={setPersona}
          anterior={anterior}
          siguiente={siguiente}
        />
      )}

      {paso === 4 && (
        <gestiondeinmuebles
          persona={persona}
          setPersona={setPersona}
          anterior={anterior}
          siguiente={siguiente}
        />
      )}

      {paso === 5 && (
        <detalleinmueble
          persona={persona}
          setPersona={setPersona}
          anterior={anterior}
          siguiente={siguiente}
        />
      )}

      {paso === 6 && (
        <Listadoinmueble
          persona={persona}
          setPersona={setPersona}
          anterior={anterior}
          siguiente={siguiente}
        />
      )}

      {paso === 7 && (
        <citas
          persona={persona}
          setPersona={setPersona}
          anterior={anterior}
        />
      )}

      <Footer />
    </>
  );
}

export default App;