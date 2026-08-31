import { useState } from "react";
import Footer from "./Footer.jsx";
import "../App.css";

function Formularioregistro({ persona = {}, setPersona, anterior, siguiente }) {
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const handleChange = (campo, valor) => {
    setPersona((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const registrar = (e) => {
    e.preventDefault();

    const { nombre = "", apellido = "", correo = "", telefono = "", contrasena = "" } = persona;

    if (!nombre.trim()) {
      alert("Ingrese sus nombres");
      return;
    }

    if (!apellido.trim()) {
      alert("Ingrese sus apellidos");
      return;
    }

    if (!correo.trim()) {
      alert("Ingrese su correo electrónico");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Ingrese un correo electrónico válido");
      return;
    }

    if (!telefono.trim()) {
      alert("Ingrese su teléfono");
      return;
    }

    if (!contrasena.trim()) {
      alert("Ingrese una contraseña");
      return;
    }

    if (!confirmarContrasena.trim()) {
      alert("Confirme su contraseña");
      return;
    }

    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Datos registrados correctamente:", persona);
    siguiente();
  };

  return (
    <>
      <div className="registro-container">
        <div className="registro-left">
          <div className="registro-form-wrapper">
            <h2>
              BIENVENID@!
              <br />
              REGÍSTRATE
            </h2>

            <form onSubmit={registrar}>
              <div className="registro-input-icon">
                <img src="./src/assets/IMAGENES/ICONOUSU.png" alt="Nombres" />
                <input
                  type="text"
                  placeholder="Nombres"
                  value={persona.nombre || ""}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                />
              </div>

              <div className="registro-input-icon">
                <img src="./src/assets/IMAGENES/ICONOUSU.png" alt="Apellidos" />
                <input
                  type="text"
                  placeholder="Apellidos"
                  value={persona.apellido || ""}
                  onChange={(e) => handleChange("apellido", e.target.value)}
                />
              </div>

              <div className="registro-input-icon">
                <img src="./src/assets/IMAGENES/icorreo.png" alt="Correo" />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={persona.correo || ""}
                  onChange={(e) => handleChange("correo", e.target.value)}
                />
              </div>

              <div className="registro-input-icon">
                <img src="./src/assets/IMAGENES/itelef.png" alt="Teléfono" />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={persona.telefono || ""}
                  onChange={(e) => handleChange("telefono", e.target.value)}
                />
              </div>

              <div className="registro-input-icon">
                <img src="./src/assets/IMAGENES/icasa.png" alt="Ciudad" />
                <input
                  type="text"
                  placeholder="Ciudad"
                  value={persona.ciudad || ""}
                  onChange={(e) => handleChange("ciudad", e.target.value)}
                />
              </div>

              <div className="registro-input-icon">
                <img
                  src="./src/assets/IMAGENES/ICONOCONTRA.png"
                  alt="Contraseña"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={persona.contrasena || ""}
                  onChange={(e) => handleChange("contrasena", e.target.value)}
                />
              </div>

              <div className="registro-input-icon">
                <img
                  src="./src/assets/IMAGENES/ICONOCONTRA.png"
                  alt="Confirmar contraseña"
                />
                <input
                  type="password"
                  placeholder="Ingrese nuevamente la contraseña"
                  value={confirmarContrasena}
                  onChange={(e) => setConfirmarContrasena(e.target.value)}
                />
              </div>

              <div className="registro-botones-registro">
                <button
                  type="button"
                  onClick={anterior}
                  className="registro-btn-anterior"
                >
                  VOLVER
                </button>

                <button type="submit" className="registro-btn-registrarme">
                  REGISTRARME
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="registro-right">
          <img
            src="./src/assets/IMAGENES/LOGOINMO1.png"
            alt="Logo inmobiliaria"
          />

          <div className="registro-leyenda">
            <p>
              Accede a miles de inmuebles disponibles para venta y arriendo.
              Encuentra las mejores ubicaciones, precios competitivos y la
              asesoría que necesitas para hacer realidad tu próximo hogar.
            </p>

            <div className="registro-login-link">
              <p>¿Ya tienes una cuenta?</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  anterior();
                }}
              >
                Inicia sesión aquí
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Formularioregistro;