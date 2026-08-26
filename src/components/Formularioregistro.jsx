import { useState } from "react";
import "../App.css";

function Formularioregistro({ persona, setPersona, anterior, siguiente }) {
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const registrar = (e) => {
    e.preventDefault();

    if (persona.nombre.trim() === "") {
      alert("Ingrese sus nombres");
      return;
    }

    if (persona.apellido.trim() === "") {
      alert("Ingrese sus apellidos");
      return;
    }

    if (persona.correo.trim() === "") {
      alert("Ingrese su correo electrónico");
      return;
    }

    if (persona.telefono.trim() === "") {
      alert("Ingrese su teléfono");
      return;
    }

    if (persona.contrasena.trim() === "") {
      alert("Ingrese una contraseña");
      return;
    }

    if (confirmarContrasena.trim() === "") {
      alert("Confirme su contraseña");
      return;
    }

    if (persona.contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Datos registrados:", persona);

    siguiente();
  };

  return (
    <div className="container">

      <div className="left">

        <div className="logincontenedor">

          <h2>
            BIENVENID@!
            <br />
            REGÍSTRATE
          </h2>

          <form onSubmit={registrar}>

            <div className="input-icon">
              <img
                src="/src/assets/IMAGENES/ICONOUSU.png"
                alt="Nombres"
              />

              <input
                type="text"
                placeholder="Nombres"
                value={persona.nombre}
                onChange={(e) =>
                  setPersona({
                    ...persona,
                    nombre: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-icon">
              <img
                src="/src/assets/IMAGENES/ICONOUSU.png"
                alt="Apellidos"
              />

              <input
                type="text"
                placeholder="Apellidos"
                value={persona.apellido}
                onChange={(e) =>
                  setPersona({
                    ...persona,
                    apellido: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-icon">
              <img
                src="/src/assets/IMAGENES/icorreo.png"
                alt="Correo"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                value={persona.correo}
                onChange={(e) =>
                  setPersona({
                    ...persona,
                    correo: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-icon">
              <img
                src="/src/assets/IMAGENES/itelef.png"
                alt="Teléfono"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                value={persona.telefono}
                onChange={(e) =>
                  setPersona({
                    ...persona,
                    telefono: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-icon">
              <img
                src="/src/assets/IMAGENES/ICONOCONTRA.png"
                alt="Contraseña"
              />

              <input
                type="password"
                placeholder="Contraseña"
                value={persona.contrasena}
                onChange={(e) =>
                  setPersona({
                    ...persona,
                    contrasena: e.target.value,
                  })
                }
              />
            </div>

            <div className="input-icon">
              <img
                src="/src/assets/IMAGENES/ICONOCONTRA.png"
                alt="Confirmar contraseña"
              />

              <input
                type="password"
                placeholder="Ingrese nuevamente la contraseña"
                value={confirmarContrasena}
                onChange={(e) =>
                  setConfirmarContrasena(e.target.value)
                }
              />
            </div>

            <div className="botones-registro">

              <button
                type="button"
                onClick={anterior}
                className="btn-anterior"
              >
                VOLVER
              </button>

              <button
                type="submit"
                className="btn-registrarme"
              >
                REGISTRARME
              </button>

            </div>

          </form>

        </div>

      </div>

      <div className="right">

        <img
          src="/src/assets/IMAGENES/LOGOINMO1.png"
          alt="Logo inmobiliaria"
        />

        <div className="leyenda">

          <p>
            Accede a miles de inmuebles disponibles para venta y
            arriendo. Encuentra las mejores ubicaciones, precios
            competitivos y la asesoría que necesitas para hacer
            realidad tu próximo hogar.
          </p>

          <div className="registro">

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
  );
}

export default Formularioregistro;