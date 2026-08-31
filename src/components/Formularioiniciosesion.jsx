import { useState } from "react";
import Footer from "./Footer.jsx";
import "../App.css";

// Recomendado: importar imágenes directamente para evitar fallos en build/producción
import iconoUsuario from "../assets/IMAGENES/ICONOUSU.png";
import iconoContra from "../assets/IMAGENES/ICONOCONTRA.png";
import logoInmo from "../assets/IMAGENES/LOGOINMO1.png";

function Formularioiniciosesion({ irARegistro, irAInmuebles, iniciarSesion }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [recordarme, setRecordarme] = useState(false);

  const iniciarSesionFormulario = (e) => {
    e.preventDefault();

    if (usuario.trim() === "") {
      alert("Ingrese su usuario o correo electrónico");
      return;
    }

    if (contrasena.trim() === "") {
      alert("Ingrese su contraseña");
      return;
    }

    if (usuario === "admin" && contrasena === "admin") {
      alert("Inicio de sesión como administrador");
      iniciarSesion("admin");
    } else if (usuario === "usuario" && contrasena === "1234") {
      alert("Inicio de sesión como usuario");
      iniciarSesion("usuario");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <div className="login-form-wrapper">
            <h2>BIENVENID@ DE NUEVO</h2>

            <form onSubmit={iniciarSesionFormulario}>
              <div className="login-input-icon">
                <img src={iconoUsuario} alt="Usuario" />
                <input
                  type="text"
                  placeholder="Usuario o correo electrónico"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>

              <div className="login-input-icon">
                <img src={iconoContra} alt="Contraseña" />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>

              <div className="login-opciones">
                <label>
                  <input
                    type="checkbox"
                    checked={recordarme}
                    onChange={(e) => setRecordarme(e.target.checked)}
                  />
                  Recordarme
                </label>

                <a href="#!" onClick={(e) => e.preventDefault()}>
                  Olvidé mi contraseña
                </a>
              </div>

              <button type="submit">INICIAR SESIÓN</button>
            </form>

            <div className="login-registro">
              <p>¿No tienes una cuenta?</p>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  irARegistro();
                }}
              >
                Regístrate aquí
              </a>
            </div>

            <div className="login-redes">
              <h3>Inicia también con:</h3>
            </div>

            <div className="login-social-col">
              <div className="login-social-btn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  alt="Facebook"
                />
                <span>Continuar con Facebook</span>
              </div>

              <div className="login-social-btn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="Google"
                />
                <span>Continuar con Google</span>
              </div>

              <div className="login-social-btn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
                  alt="Apple"
                />
                <span>Continuar con Apple</span>
              </div>

              <p>
                Al continuar, aceptas nuestros{" "}
                <a href="#!" onClick={(e) => e.preventDefault()}>
                  Términos de uso
                </a>{" "}
                y{" "}
                <a href="#!" onClick={(e) => e.preventDefault()}>
                  Política de privacidad
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div className="login-right">
          <img src={logoInmo} alt="Logo inmobiliaria" />

          <div className="login-pagina">
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                irAInmuebles();
              }}
            >
              Ver inmuebles sin iniciar sesión
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Formularioiniciosesion;