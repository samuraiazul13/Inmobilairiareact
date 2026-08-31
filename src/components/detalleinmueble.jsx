import Footer from "./Footer.jsx";
import "../App.css";

// ---------- Imágenes ----------
import logo from "../assets/IMAGENES/logoblanco.png";
import banner3 from "../assets/IMAGENES/Banner3.png";
import iconoUbicacion from "../assets/IMAGENES/iubicacion.png";
import vista1 from "../assets/IMAGENES/VISTA1.png";
import vista2 from "../assets/IMAGENES/VISTA2.png";
import vista3 from "../assets/IMAGENES/VISTA3.png";
import vista4 from "../assets/IMAGENES/VISTA4.png";

function Detalleinmueble({ irAInmuebles, irACitas, cerrarSesion }) {
    return (
        <>
            <header className="detalle-header">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <img
                            src={logo}
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
                                            if (irAInmuebles) irAInmuebles();
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
                                            if (cerrarSesion) cerrarSesion();
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
                            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
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

                <div className="detalle-banner3">
                    <img src={banner3} alt="detalleinmueble" style={{ width: "100%" }} />
                </div>

            </header >

            <div className="detalle-inmueble">
                <div>
                    <section className="detalle-card">
                        <h4 className="card-title">Casa Familiar 2 Niveles</h4>

                        <p className="detalle-ubicacion">
                            <img
                                src={iconoUbicacion}
                                alt="ubicación"
                                className="detalle-icono-ubicacion"
                            />
                            Chía, Cundinamarca
                        </p>

                        <div className="detalle-comprar">
                            <button type="submit">Comprar</button>
                        </div>

                        <div className="detalle-info-precio">
                            <strong className="detalle-badge-venta">Precio de Venta</strong>
                            <span className="detalle-precio">$1.000.000.000</span>
                        </div>

                        <div className="detalle-carruselimagen">
                            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide-to="0"
                                        className="active"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide-to="1"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide-to="2"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#demo"
                                        data-bs-slide-to="3"
                                    ></button>
                                </div>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={vista1} className="d-block w-100" alt="Banner 1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={vista2} className="d-block w-100" alt="Banner 2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={vista3} className="d-block w-100" alt="Banner 3" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={vista4} className="d-block w-100" alt="Banner 4" />
                                    </div>
                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#demo"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#demo"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="detalle-info-section">
                <hr />

                <div className="row detalle-informacion1">
                    <div className="col-lg-6 col-md-12">
                        <strong>Atributos</strong>
                        <br />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <strong>Área</strong>
                        <br />
                        <span>350 m²</span>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <strong>Habitaciones</strong>
                        <br />
                        <span>4</span>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <strong>Baños</strong>
                        <br />
                        <span>3</span>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <strong>Parqueaderos</strong>
                        <br />
                        <span>2</span>
                    </div>
                </div>

                <hr />

                <div className="row detalle-informacion1">
                    <div className="col-lg-6 col-md-12">
                        <strong>Descripción</strong>
                        <br />
                        <p>
                            <br />
                            Esta casa combina un diseño contemporáneo de inspiración
                            escandinava con espacios amplios, luminosos y funcionales,
                            pensados para brindar el máximo confort a toda la familia. Su
                            arquitectura moderna, acabados en madera de alta calidad y
                            excelente aislamiento térmico convierten esta vivienda en una
                            opción ideal tanto para residencia permanente como para casa de
                            descanso. Cada detalle ha sido diseñado para ofrecer una
                            experiencia de vida cómoda, elegante y eficiente, integrando
                            materiales de primera calidad con un estilo minimalista que
                            nunca pasa de moda. El exterior de esta casa también está
                            decorado con Thermowood, un material de fácil mantenimiento que
                            destaca por su agradable aroma y su característico tono color
                            caramelo.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <video className="detalle-videocasa" controls>
                            <source
                                src="https://micasanordica.es/wp-content/uploads/2026/05/MARIA_RV_123m2.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <strong>Características Técnicas</strong>
                        <br />
                        <br />

                        <span>
                            <strong>Material:</strong> Pino nórdico natural y abeto
                            escandinavo certificado.
                        </span>
                        <br />
                        <br />

                        <span>
                            <strong>Tejado:</strong> Tablas machihembradas de 19–20 mm con
                            vigas estructurales de madera de 200 mm.
                        </span>
                        <br />
                        <br />

                        <span>
                            <strong>Inclinación del techo:</strong> 40° para un mejor
                            drenaje y una estética moderna.
                        </span>
                        <br />
                        <br />

                        <span>
                            <strong>Suelo:</strong> Vigas de cimentación de madera de 100 mm
                            que proporcionan estabilidad y resistencia.
                        </span>
                        <br />
                        <br />

                        <span>
                            <strong>Puerta principal:</strong> 100 × 210 cm.
                        </span>
                        <br />
                        <br />

                        <span>
                            <strong>Ventanas y puertas de balcón:</strong>
                        </span>

                        <ul>
                            <li>2 ventanas de 70 × 118.5 cm.</li>
                            <li>1 ventana de 138 × 118.5 cm.</li>
                            <li>2 ventanales de 85 × 205.5 cm.</li>
                            <li>3 puertas de balcón de 85 × 205.5 cm.</li>
                            <li>4 puertas de balcón de 130 × 205.5 cm.</li>
                            <li>2 puertas de balcón de 161 × 205.5 cm.</li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <strong>Ubicación</strong>
                        <br />
                        <br />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2139.745415627673!2d-74.04425875096877!3d4.666629257222023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schico!5e1!3m2!1ses-419!2sco!4v1782795033240!5m2!1ses-419!2sco"
                            width="100%"
                            height="350"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Detalleinmueble;