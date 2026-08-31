import { useState } from "react";
import "../App.css";

// ---------- Imágenes ----------
import logo from "../assets/IMAGENES/logoblanco.png";
import apto2 from "../assets/IMAGENES/APTO2.jpg";
import casa1 from "../assets/IMAGENES/CASA1.jpeg";
import apto4 from "../assets/IMAGENES/APTO4.jpg";

function GestionInmuebles({
  irAInicio,
  irAGestionInmuebles,
  irAUsuarios,
  irACitas,
  irAReportes,
  irAConfiguracion,
  cerrarSesion,
}) {
  const [inmuebles, setInmuebles] = useState([
    {
      id: "001",
      imagen: apto2,
      nombre: "Apartamento Chicó Norte",
      ciudad: "Bogotá",
      tipo: "Apartamento",
      precio: "$800.000.000",
      proceso: "Venta",
      estado: "Disponible",
    },
    {
      id: "002",
      imagen: casa1,
      nombre: "Casa Familiar 2 Niveles",
      ciudad: "Chía, Cundinamarca",
      tipo: "Casa",
      precio: "$1.000.000.000",
      proceso: "Venta",
      estado: "Vendido",
    },
    {
      id: "003",
      imagen: apto4,
      nombre: "Apartamento - Bocagrande",
      ciudad: "Cartagena",
      tipo: "Local",
      precio: "$1.900.000",
      proceso: "Arriendo",
      estado: "Disponible",
    },
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [proceso, setProceso] = useState("Proceso");
  const [tipo, setTipo] = useState("Todos los tipos");

  const inmueblesFiltrados = inmuebles.filter((inmueble) => {
    const textoBusqueda = busqueda.toLowerCase();

    const coincideBusqueda =
      inmueble.nombre.toLowerCase().includes(textoBusqueda) ||
      inmueble.ciudad.toLowerCase().includes(textoBusqueda);

    const coincideProceso = proceso === "Proceso" || inmueble.proceso === proceso;

    const coincideTipo = tipo === "Todos los tipos" || inmueble.tipo === tipo;

    return coincideBusqueda && coincideProceso && coincideTipo;
  });

  const eliminarInmueble = (id) => {
    const confirmar = window.confirm(
      "¿Está seguro de que desea eliminar este inmueble?"
    );

    if (!confirmar) {
      return;
    }

    setInmuebles(inmuebles.filter((inmueble) => inmueble.id !== id));

    alert("Inmueble eliminado correctamente");
  };

  const verInmueble = (inmueble) => {
    alert(
      `Inmueble: ${inmueble.nombre}\n` +
      `Ciudad: ${inmueble.ciudad}\n` +
      `Tipo: ${inmueble.tipo}\n` +
      `Precio: ${inmueble.precio}\n` +
      `Proceso: ${inmueble.proceso}\n` +
      `Estado: ${inmueble.estado}`
    );
  };

  const editarInmueble = (inmueble) => {
    alert(`Aquí podrás editar el inmueble:\n\n${inmueble.nombre}`);
  };

  const agregarInmueble = () => {
    alert("Aquí podrás agregar un nuevo inmueble.");
  };

  return (
    <div className="gestion-page">
      <div className="gestion-sidebar">
        <div className="gestion-perfil">
          <img src={logo} alt="Administrador" />

          <h3>Felipe</h3>
          <p>Administrador</p>
        </div>

        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                irAInicio();
              }}
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                irAGestionInmuebles();
              }}
            >
              Gestionar Inmuebles
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                irAUsuarios();
              }}
            >
              Gestionar Usuarios
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                irACitas();
              }}
            >
              Gestionar Citas
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                irAReportes();
              }}
            >
              Reportes
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                irAConfiguracion();
              }}
            >
              Configuración
            </a>
          </li>
        </ul>

        <a
          href="#"
          className="gestion-cerrar"
          onClick={(e) => {
            e.preventDefault();
            cerrarSesion();
          }}
        >
          Cerrar sesión
        </a>
      </div>

      <div className="gestion-contenido">
        <div className="container py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="gestion-titulo">Gestión de Inmuebles</h2>

            <button className="btn btn-primary" onClick={agregarInmueble}>
              + Agregar Inmueble
            </button>
          </div>

          <div className="card shadow p-4">
            <div className="row mb-4">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar inmueble..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <select
                  className="form-select"
                  value={proceso}
                  onChange={(e) => setProceso(e.target.value)}
                >
                  <option value="Proceso">Proceso</option>
                  <option value="Venta">Venta</option>
                  <option value="Arriendo">Arriendo</option>
                </select>
              </div>

              <div className="col-md-3">
                <select
                  className="form-select"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value="Todos los tipos">Todos los tipos</option>
                  <option value="Casa">Casa</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Local">Local</option>
                  <option value="Lote">Lote</option>
                </select>
              </div>

              <div className="col-md-2">
                <button className="btn btn-dark w-100" onClick={() => { }}>
                  Buscar
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Ciudad</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Proceso</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {inmueblesFiltrados.length > 0 ? (
                    inmueblesFiltrados.map((inmueble) => (
                      <tr key={inmueble.id}>
                        <td>{inmueble.id}</td>

                        <td>
                          <img
                            src={inmueble.imagen}
                            width="90"
                            className="rounded"
                            alt={inmueble.nombre}
                          />
                        </td>

                        <td>{inmueble.nombre}</td>
                        <td>{inmueble.ciudad}</td>
                        <td>{inmueble.tipo}</td>
                        <td>{inmueble.precio}</td>
                        <td>{inmueble.proceso}</td>

                        <td>
                          <span
                            className={
                              inmueble.estado === "Disponible"
                                ? "badge bg-success"
                                : "badge bg-secondary"
                            }
                          >
                            {inmueble.estado}
                          </span>
                        </td>

                        <td className="gestion-acciones">
                          <button
                            className="gestion-btn-editar"
                            onClick={() => editarInmueble(inmueble)}
                            title="Editar"
                          >
                            <i className="bi bi-pencil-square"></i>
                          </button>

                          <button
                            className="gestion-btn-eliminar"
                            onClick={() => eliminarInmueble(inmueble.id)}
                            title="Eliminar"
                          >
                            <i className="bi bi-trash"></i>
                          </button>

                          <button
                            className="gestion-btn-ver"
                            onClick={() => verInmueble(inmueble)}
                            title="Ver"
                          >
                            <i className="bi bi-eye"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center py-4">
                        No se encontraron inmuebles.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionInmuebles;