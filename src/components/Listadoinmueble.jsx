
function Listadoinmueble() {
  return (
    <div>

      <header className="header">

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

          <div className="container-fluid">

            <img
              src="/IMAGENES/logoblanco.png"
              alt="Logo"
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
                  <a className="nav-link" href="#">
                    Mi Cuenta
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Registrarse
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    +57 3112225555 citas
                  </a>
                </li>

              </ul>

              <form className="d-flex">

                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="¿Qué quieres consultar?"
                />

                <button
                  className="btn btn-dark"
                  type="button"
                >
                  Buscar
                </button>

              </form>

            </div>

          </div>

        </nav>


        {/* BANNER */}
        <div className="banner1">

          <img
            src="/IMAGENES/Banner1.png"
            alt="Fondo listado"
            style={{ width: "100%" }}
            className="fondolistado"
          />

        </div>


        {/* MENÚ INFERIOR */}
        <div className="container-fluid">

          <div className="row">

            <div className="col-6 col-md-6 col-lg-4 bg-secondary text-white p-2 text-center">
              Inicio
            </div>

            <div className="col-6 col-md-6 col-lg-4 bg-dark text-white p-2 text-center">
              Servicios
            </div>

            <div className="col-6 col-md-6 col-lg-4 bg-secondary text-white p-2 text-center">
              Contáctanos
            </div>

          </div>

        </div>

      </header>

      <section className="container">

        <div className="titu">

          <br />

          <h2>
            Propiedades Destacadas
          </h2>

          <br />

        </div>

        <h2 className="text-center my-4 text-secondary">
          PROPIEDADES EN VENTA
        </h2>


        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-stretch">

          <div className="col">

            <div className="card inmueble-card h-100">

              <div className="badge-tipo bg-blue">
                Venta
              </div>

              <img
                src="/IMAGENES/CASA1.jpeg"
                className="card-img-top"
                alt="Casa familiar"
              />

              <div className="card-body">

                <h4 className="card-title">
                  Casa Familiar 2 Niveles
                </h4>

                <p className="ubicacion">
                  Chía, Cundinamarca
                </p>

                <hr />

                <div className="row informacion">

                  <div className="col-6">
                    <strong>Área</strong>
                    <br />
                    <span>350 m²</span>
                  </div>

                  <div className="col-6">
                    <strong>Habitaciones</strong>
                    <br />
                    <span>4</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Baños</strong>
                    <br />
                    <span>3</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Parqueaderos</strong>
                    <br />
                    <span>2</span>
                  </div>

                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="precio">
                    $1.000.000.000
                  </h5>

                  <a href="#" className="btn btn-dark">
                    Ver más
                  </a>

                </div>

              </div>

            </div>

          </div>

          <div className="col">

            <div className="card inmueble-card h-100">

              <div className="badge-tipo bg-blue">
                Venta
              </div>

              <img
                src="/IMAGENES/APTO1.jpeg"
                className="card-img-top"
                alt="Apartamento Ciudad Salitre"
              />

              <div className="card-body">

                <h4 className="card-title">
                  Apartamento - Ciudad Salitre
                </h4>

                <p className="ubicacion">
                  Bogotá D.C.
                </p>

                <hr />

                <div className="row informacion">

                  <div className="col-6">
                    <strong>Área</strong>
                    <br />
                    <span>69 m²</span>
                  </div>

                  <div className="col-6">
                    <strong>Habitaciones</strong>
                    <br />
                    <span>3</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Baños</strong>
                    <br />
                    <span>2</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Parqueaderos</strong>
                    <br />
                    <span>1</span>
                  </div>

                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="precio">
                    $450.000.000
                  </h5>

                  <a href="#" className="btn btn-dark">
                    Ver más
                  </a>

                </div>

              </div>

            </div>

          </div>


          <div className="col">

            <div className="card inmueble-card h-100">

              <div className="badge-tipo bg-blue">
                Venta
              </div>

              <img
                src="/IMAGENES/APTO2.jpg"
                className="card-img-top"
                alt="Apartamento Chico Norte"
              />

              <div className="card-body">

                <h4 className="card-title">
                  Apartamento - Chico Norte
                </h4>

                <p className="ubicacion">
                  Bogotá D.C.
                </p>

                <hr />

                <div className="row informacion">

                  <div className="col-6">
                    <strong>Área</strong>
                    <br />
                    <span>120 m²</span>
                  </div>

                  <div className="col-6">
                    <strong>Habitaciones</strong>
                    <br />
                    <span>4</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Baños</strong>
                    <br />
                    <span>3</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Parqueaderos</strong>
                    <br />
                    <span>1</span>
                  </div>

                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="precio">
                    $800.000.000
                  </h5>

                  <a href="#" className="btn btn-dark">
                    Ver más
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        <h2 className="text-center my-4 text-secondary">
          PROPIEDADES EN ARRIENDO
        </h2>


        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          <div className="col">

            <div className="card inmueble-card h-100">

              <div className="badge-tipo bg-orange">
                Arriendo
              </div>

              <img
                src="/IMAGENES/APTO3.jpg"
                className="card-img-top"
                alt="Apartamento Poblado"
              />

              <div className="card-body">

                <h4 className="card-title">
                  Apartamento - Poblado
                </h4>

                <p className="ubicacion">
                  Medellín
                </p>

                <hr />

                <div className="row informacion">

                  <div className="col-6">
                    <strong>Área</strong>
                    <br />
                    <span>98 m²</span>
                  </div>

                  <div className="col-6">
                    <strong>Habitaciones</strong>
                    <br />
                    <span>3</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Baños</strong>
                    <br />
                    <span>2</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Parqueaderos</strong>
                    <br />
                    <span>1</span>
                  </div>

                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="precio">
                    $2.000.000 / mes
                  </h5>

                  <a href="#" className="btn btn-dark">
                    Ver más
                  </a>

                </div>

              </div>

            </div>

          </div>

          <div className="col">

            <div className="card inmueble-card h-100">

              <div className="badge-tipo bg-orange">
                Arriendo
              </div>

              <img
                src="/IMAGENES/APTO5.jpg"
                className="card-img-top"
                alt="Apartamento Chapinero"
              />

              <div className="card-body">

                <h4 className="card-title">
                  Apartamento - Chapinero
                </h4>

                <p className="ubicacion">
                  Bogotá D.C.
                </p>

                <hr />

                <div className="row informacion">

                  <div className="col-6">
                    <strong>Área</strong>
                    <br />
                    <span>54 m²</span>
                  </div>

                  <div className="col-6">
                    <strong>Habitaciones</strong>
                    <br />
                    <span>2</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Baños</strong>
                    <br />
                    <span>2</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Parqueaderos</strong>
                    <br />
                    <span>1</span>
                  </div>

                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="precio">
                    $1.700.000 / mes
                  </h5>

                  <a href="#" className="btn btn-dark">
                    Ver más
                  </a>

                </div>

              </div>

            </div>

          </div>


          <div className="col">

            <div className="card inmueble-card h-100">

              <div className="badge-tipo bg-orange">
                Arriendo
              </div>

              <img
                src="/IMAGENES/APTO4.jpg"
                className="card-img-top"
                alt="Apartamento Bocagrande"
              />

              <div className="card-body">

                <h4 className="card-title">
                  Apartamento - Bocagrande
                </h4>

                <p className="ubicacion">
                  Cartagena
                </p>

                <hr />

                <div className="row informacion">

                  <div className="col-6">
                    <strong>Área</strong>
                    <br />
                    <span>89 m²</span>
                  </div>

                  <div className="col-6">
                    <strong>Habitaciones</strong>
                    <br />
                    <span>2</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Baños</strong>
                    <br />
                    <span>2</span>
                  </div>

                  <div className="col-6 mt-3">
                    <strong>Parqueaderos</strong>
                    <br />
                    <span>1</span>
                  </div>

                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">

                  <h5 className="precio">
                    $1.900.000 / mes
                  </h5>

                  <a href="#" className="btn btn-dark">
                    Ver más
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <footer className="bg-dark text-white text-center py-3 mt-5">

        <p>
          &copy; 2026 INMOBILIARIA - Todos los Derechos Reservados
        </p>

      </footer>

    </div>
  );
}

export default Listadoinmueble;