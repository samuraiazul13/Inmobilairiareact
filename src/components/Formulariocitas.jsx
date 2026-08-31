import { useState } from "react";
import Footer from "./Footer.jsx";
import "../App.css";

// 1. Se agrega irAInmuebles (o irAInicio) en la desestructuración de props
function Formulariocitas({ irAInmuebles, irALogin, irACitas, cerrarSesion }) {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <div className="citas-page">
        <header className="citas-header">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              <img
                src="./src/assets/IMAGENES/logoblanco.png"
                alt="Avatar Logo"
                style={{ width: "40px" }}
                className="rounded-pill"
              />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (irAInmuebles) irAInmuebles(); // Llama a la navegación de inicio/inmuebles
                      }}
                    >
                      Ver Inmuebles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (cerrarSesion) cerrarSesion(); // O irALogin() según tu lógica
                        else if (irALogin) irALogin();
                      }}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (irACitas) irACitas();
                      }}
                    >
                      +57 3112225555 citas
                    </a>
                  </li>
                </ul>
                <form
                  className="d-flex"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Que quieres consultar!"
                  />
                  <button className="btn btn-dark" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </nav>

          <div className="citas-banner">
            <img
              src="./src/assets/IMAGENES/Banner2.png"
              alt="fondocitas"
              style={{ width: "100%" }}
              className="citas-fondocitas"
            />
          </div>
        </header>

        <section className="citas-content">
          <div className="citas-titu"></div>

          <div className="citas-left">
            <div className="citas-form-wrapper">
              <h2>Solicita tu cita</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="citas-input-icon">
                  <img
                    src="./src/assets/IMAGENES/ICONOUSU.png"
                    alt="User icon for names input field"
                  />
                  <input type="text" placeholder="Nombres" />
                </div>

                <div className="citas-input-icon">
                  <img
                    src="./src/assets/IMAGENES/ICONOUSU.png"
                    alt="User icon for last names input field"
                  />
                  <input type="text" placeholder="Apellidos" />
                </div>

                <div className="citas-input-icon">
                  <img
                    src="./src/assets/IMAGENES/icorreo.png"
                    alt="Email icon for electronic mail input field"
                  />
                  <input type="email" placeholder="Correo electrónico" />
                </div>

                <div className="citas-input-icon">
                  <img
                    src="./src/assets/IMAGENES/itelef.png"
                    alt="Phone icon for telephone input field"
                  />
                  <input type="tel" placeholder="Teléfono" />
                </div>

                <div className="citas-input-icon-select">
                  <label htmlFor="motivo">Motivo</label>
                  <select id="motivo" defaultValue="">
                    <option value="" disabled>
                      Seleccione una opción
                    </option>
                    <option value="compra">Compra</option>
                    <option value="tomar-arriendo">Tomar en arriendo</option>
                    <option value="vender">Vender</option>
                    <option value="arrendar">Arrendar</option>
                  </select>
                </div>

                <label htmlFor="fecha">Fecha:</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  className="form-control"
                />

                <label htmlFor="hora">Hora:</label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  className="form-control"
                />

                <div className="citas-input-icon">
                  <label htmlFor="mensaje">Ingrese un mensaje</label>
                  <textarea
                    id="mensaje"
                    placeholder="Ingrese más detalles"
                  ></textarea>
                </div>

                <div className="citas-opciones">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>

          <div className="citas-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14394.526759788612!2d-74.09810841284177!3d4.662103700000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b3b7f3619cb%3A0x4b8af379d4bd6cd0!2sINMOBILIARIA%20SUMINISTRAMOS%20Y%20CONSTRUIMOS%20VENTAS%20DE%20OPORTUNIDAD!5e1!3m2!1ses-419!2sco!4v1782762488294!5m2!1ses-419!2sco"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Formulariocitas;