import { useState } from "react";
import Footer from "./Footer.jsx";
import "../App.css";

function Formularioiniciosesion({ irARegistro, iniciarSesion }) {
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

    console.log("Usuario:", usuario);
    console.log("Contraseña:", contrasena);
    console.log("Recordarme:", recordarme);

    alert("Inicio de sesión exitoso");

    iniciarSesion("usuario");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <div className="login-form-wrapper">
            <h2>BIENVENID@ DE NUEVO</h2>

            <form onSubmit={iniciarSesionFormulario}>
              <div className="login-input-icon">
                <img src="/src/assets/IMAGENES/ICONOUSU.png" alt="Usuario" />

                <input
                  type="text"
                  placeholder="Usuario o correo electrónico"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>

              <div className="login-input-icon">
                <img
                  src="/src/assets/IMAGENES/ICONOCONTRA.png"
                  alt="Contraseña"
                />

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

                <a href="#">Olvidé mi contraseña</a>
              </div>

              <button type="submit">INICIAR SESIÓN</button>
            </form>

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
                <a href="#">Términos de uso</a> y{" "}
                <a href="#">Política de privacidad</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="login-right">
          <img
            src="/src/assets/IMAGENES/LOGOINMO1.png"
            alt="Logo inmobiliaria"
          />

          <div className="login-registro">
            <p>¿No tienes una cuenta?</p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                irARegistro();
              }}
            >
              Regístrate aquí
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Formularioiniciosesion;