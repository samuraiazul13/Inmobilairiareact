import { useState } from "react";
import logo from "../assets/IMAGENES/logoblanco.png";
import "../App.css";


const citasIniciales = [
    {
        id: "001",
        nombre: "Ailyn",
        apellido: "Betancour",
        correo: "Alin455@gmail.com",
        telefono: "300030303",
        motivo: "Compra",
        fecha: "30/06/2026",
        hora: "1:00 p.m",
        mensaje: "Quiero adquir...",
        estado: "En curso",
    },
    {
        id: "002",
        nombre: "Jose",
        apellido: "Perez",
        correo: "perezangg@hotmail.com",
        telefono: "3344566776",
        motivo: "Arrendar",
        fecha: "16/07/2026",
        hora: "2:00 p.m",
        mensaje: "N/A",
        estado: "Cancelada",
    },
    {
        id: "003",
        nombre: "Sara",
        apellido: "Culma",
        correo: "sarxx5@hotmail.com",
        telefono: "300456565",
        motivo: "Vender",
        fecha: "1/07/2026",
        hora: "3 p.m",
        mensaje: "Tengo un apto...",
        estado: "Pendiente",
    },
];

function GestionCitas({
    irAInicio,
    irAGestionInmuebles,
    irAUsuarios,
    irACitas,
    irAReportes,
    irAConfiguracion,
    cerrarSesion,
    onAgregarCita,
    onEditarCita,
    onEliminarCita,
    onVerCita,
    citas = citasIniciales,
}) {
    return (
        <div className="cg-layout">
            <aside className="cg-sidebar">
                <div className="cg-perfil">
                    <img src={logo} alt="Administrador" className="cg-perfil-avatar" />
                    <h3 className="cg-perfil-nombre">Felipe</h3>
                    <p className="cg-perfil-rol">Administrador</p>
                </div>

                <ul className="cg-menu">
                    <li className="cg-menu-item">
                        <a
                            href="#"
                            className="cg-menu-link"
                            onClick={(e) => {
                                e.preventDefault();
                                irAInicio();
                            }}
                        >
                            Inicio
                        </a>
                    </li>
                    <li className="cg-menu-item">
                        <a
                            href="#"
                            className="cg-menu-link"
                            onClick={(e) => {
                                e.preventDefault();
                                irAGestionInmuebles();
                            }}
                        >
                            Gestionar Inmuebles
                        </a>
                    </li>
                    <li className="cg-menu-item">
                        <a
                            href="#"
                            className="cg-menu-link"
                            onClick={(e) => {
                                e.preventDefault();
                                irAUsuarios();
                            }}
                        >
                            Gestionar Usuarios
                        </a>
                    </li>
                    <li className="cg-menu-item">
                        <a
                            href="#"
                            className="cg-menu-link cg-menu-link-activo"
                            onClick={(e) => {
                                e.preventDefault();
                                irACitas();
                            }}
                        >
                            Gestionar Citas
                        </a>
                    </li>
                    <li className="cg-menu-item">
                        <a
                            href="#"
                            className="cg-menu-link"
                            onClick={(e) => {
                                e.preventDefault();
                                irAReportes();
                            }}
                        >
                            Reportes
                        </a>
                    </li>
                    <li className="cg-menu-item">
                        <a
                            href="#"
                            className="cg-menu-link"
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
                    className="cg-cerrar-sesion"
                    onClick={(e) => {
                        e.preventDefault();
                        cerrarSesion();
                    }}
                >
                    Cerrar sesión
                </a>
            </aside>

            <main className="cg-contenido">
                <div className="cg-contenedor">
                    <div className="cg-encabezado">
                        <h2 className="cg-titulo">Gestión de Citas</h2>

                        <button className="cg-btn-agregar" onClick={onAgregarCita}>
                            + Agregar Cita
                        </button>
                    </div>

                    <div className="cg-tarjeta">
                        <div className="cg-filtros">
                            <div className="cg-filtro-busqueda">
                                <input
                                    type="text"
                                    className="cg-input"
                                    placeholder="Buscar cita..."
                                />
                            </div>

                            <div className="cg-filtro-tipo-cliente">
                                <select className="cg-select">
                                    <option>Tipo de cliente</option>
                                    <option>Inversor</option>
                                    <option>Comprador</option>
                                    <option>Vendedor</option>
                                    <option>Corporativo</option>
                                </select>
                            </div>

                            <div className="cg-filtro-tipo-inmueble">
                                <select className="cg-select">
                                    <option>Todos los tipos</option>
                                    <option>Casa</option>
                                    <option>Apartamento</option>
                                    <option>Local</option>
                                    <option>Lote</option>
                                </select>
                            </div>

                            <div className="cg-filtro-boton">
                                <button className="cg-btn-buscar">Buscar</button>
                            </div>
                        </div>

                        <div className="cg-tabla-wrapper">
                            <table className="cg-tabla">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Correo</th>
                                        <th>Telefono</th>
                                        <th>Motivo</th>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Mensaje</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {citas.map((cita) => (
                                        <tr key={cita.id}>
                                            <td>{cita.id}</td>
                                            <td>{cita.nombre}</td>
                                            <td>{cita.apellido}</td>
                                            <td>{cita.correo}</td>
                                            <td>{cita.telefono}</td>
                                            <td>{cita.motivo}</td>
                                            <td>{cita.fecha}</td>
                                            <td>{cita.hora}</td>
                                            <td>{cita.mensaje}</td>
                                            <td>
                                                <span
                                                    className={`cg-estado cg-estado-${cita.estado
                                                        .toLowerCase()
                                                        .normalize("NFD")
                                                        .replace(/[\u0300-\u036f]/g, "")
                                                        .replace(/\s+/g, "-")}`}
                                                >
                                                    {cita.estado}
                                                </span>
                                            </td>
                                            <td className="cg-acciones">
                                                <button
                                                    className="cg-btn-editar"
                                                    onClick={() => onEditarCita?.(cita)}
                                                    aria-label={`Editar cita ${cita.id}`}
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button
                                                    className="cg-btn-eliminar"
                                                    onClick={() => onEliminarCita?.(cita)}
                                                    aria-label={`Eliminar cita ${cita.id}`}
                                                >
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                                <button
                                                    className="cg-btn-ver"
                                                    onClick={() => onVerCita?.(cita)}
                                                    aria-label={`Ver cita ${cita.id}`}
                                                >
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default GestionCitas;