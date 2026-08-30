import Footer from "./Footer.jsx";
import "../App.css";

// ---------- Imágenes ----------
import logo from "../assets/IMAGENES/logoblanco.png";
import banner3 from "../assets/IMAGENES/Banner3.png";
import casa1 from "../assets/IMAGENES/CASA1.jpeg";
import apto1 from "../assets/IMAGENES/APTO1.jpeg";
import apto2 from "../assets/IMAGENES/APTO2.jpg";
import apto3 from "../assets/IMAGENES/APTO3.jpg";
import apto4 from "../assets/IMAGENES/APTO4.jpg";
import apto5 from "../assets/IMAGENES/APTO5.jpg";
// ---------- Datos ----------
const propiedadesVenta = [
  {
    id: 1,
    tipo: "Venta",
    badgeClass: "bg-blue",
    imagen: casa1,
    titulo: "Casa Familiar 2 Niveles",
    ubicacion: "Chía, Cundinamarca",
    area: "350 m²",
    habitaciones: 4,
    banos: 3,
    parqueaderos: 2,
    precio: "$1.000.000.000",
  },
  {
    id: 2,
    tipo: "Venta",
    badgeClass: "bg-blue",
    imagen: apto1,
    titulo: "Apartamento - Ciudad Salitre",
    ubicacion: "Bogotá D.C.",
    area: "69 m²",
    habitaciones: 3,
    banos: 2,
    parqueaderos: 1,
    precio: "$450.000.000",
  },
  {
    id: 3,
    tipo: "Venta",
    badgeClass: "bg-blue",
    imagen: apto2,
    titulo: "Apartamento - Chico Norte",
    ubicacion: "Bogotá D.C.",
    area: "120 m²",
    habitaciones: 4,
    banos: 3,
    parqueaderos: 1,
    precio: "$800.000.000",
  },
];

const propiedadesArriendo = [
  {
    id: 4,
    tipo: "Arriendo",
    badgeClass: "bg-orange",
    imagen: apto3,
    titulo: "Apartamento - Poblado",
    ubicacion: "Medellín",
    area: "98 m²",
    habitaciones: 3,
    banos: 2,
    parqueaderos: 1,
    precio: "$2.000.000 / mes",
  },
  {
    id: 5,
    tipo: "Arriendo",
    badgeClass: "bg-orange",
    imagen: apto5,
    titulo: "Apartamento - Chapinero",
    ubicacion: "Bogotá D.C.",
    area: "54 m²",
    habitaciones: 2,
    banos: 2,
    parqueaderos: 1,
    precio: "$1.700.000 / mes",
  },
  {
    id: 6,
    tipo: "Arriendo",
    badgeClass: "bg-orange",
    imagen: apto4,
    titulo: "Apartamento - Bocagrande",
    ubicacion: "Cartagena",
    area: "89 m²",
    habitaciones: 2,
    banos: 2,
    parqueaderos: 1,
    precio: "$1.900.000 / mes",
  },
];

// ---------- Tarjeta de inmueble ----------
function PropertyCard({ propiedad }) {
  const {
    tipo,
    badgeClass,
    imagen,
    titulo,
    ubicacion,
    area,
    habitaciones,
    banos,
    parqueaderos,
    precio,
  } = propiedad;

  return (
    <div className="col">
      <div className="card inmueble-card">
        <div className={`badge-tipo ${badgeClass}`}>{tipo}</div>

        <img src={imagen} className="card-img-top" alt={titulo} />

        <div className="card-body">
          <h4 className="card-title">{titulo}</h4>
          <p className="ubicacion">{ubicacion}</p>

          <hr />

          <div className="row informacion">
            <div className="col-6">
              <strong>Área</strong>
              <br />
              <span>{area}</span>
            </div>
            <div className="col-6">
              <strong>Habitaciones</strong>
              <br />
              <span>{habitaciones}</span>
            </div>
            <div className="col-6 mt-3">
              <strong>Baños</strong>
              <br />
              <span>{banos}</span>
            </div>
            <div className="col-6 mt-3">
              <strong>Parqueaderos</strong>
              <br />
              <span>{parqueaderos}</span>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between align-items-center">
            <h5 className="precio">{precio}</h5>
            <a href="#" className="btn btn-dark">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Header (nav + banner) ----------
function Header() {
  return (
    <header className="header">
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
                <a className="nav-link" href="/login">
                  Mi Cuenta
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/registro">
                  Registrarse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/citas">
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

      <div className="banner3">
        <img
          src={banner3}
          alt="fondolistado"
          style={{ width: "100%" }}
          className="fondolistado"
        />
      </div>
    </header>
  );
}

// ---------- Barra de búsqueda / filtros (SOLO VISUAL, sin lógica) ----------
function SearchFilterBar() {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="search-field">
          <label>Ubicación</label>
          <input type="text" placeholder="Ciudad o barrio" />
        </div>

        <div className="search-field">
          <label>Tipo de negocio</label>
          <select defaultValue="">
            <option value="" disabled>
              Selecciona
            </option>
            <option value="venta">Venta</option>
            <option value="arriendo">Arriendo</option>
          </select>
        </div>

        <div className="search-field">
          <label>Tipo de inmueble</label>
          <select defaultValue="">
            <option value="" disabled>
              Selecciona
            </option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
          </select>
        </div>

        <div className="search-field">
          <label>Habitaciones</label>
          <select defaultValue="">
            <option value="" disabled>
              Cualquiera
            </option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div className="search-field search-field-price">
          <label>Precio</label>
          <div className="price-inputs">
            <input type="text" placeholder="Mín" />
            <span>-</span>
            <input type="text" placeholder="Máx" />
          </div>
        </div>

        <button className="btn btn-dark search-btn" type="button">
          Buscar
        </button>
      </div>
    </div>
  );
}

// ---------- Componente principal ----------
export default function ListadoInmuebles() {
  return (
    <>
      <Header />

      <SearchFilterBar />

      <section className="container">
        <div className="titu">
          <h2>Propiedades Destacadas</h2>
        </div>

        <h2 className="text-center my-4 text-secondary">
          PROPIEDADES EN VENTA
        </h2>

        <div className="row g-4 align-items-stretch">
          {propiedadesVenta.map((propiedad) => (
            <PropertyCard key={propiedad.id} propiedad={propiedad} />
          ))}
        </div>

        <h2 className="text-center my-4 text-secondary">
          PROPIEDADES EN ARRIENDO
        </h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {propiedadesArriendo.map((propiedad) => (
            <PropertyCard key={propiedad.id} propiedad={propiedad} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}