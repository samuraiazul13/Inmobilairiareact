import { useState } from "react";
import Footer from "./Footer.jsx";
import "../App.css";


function Registroinmueble({ inmueble = {}, setInmueble, anterior, siguiente }) {

    const [errores, setErrores] = useState({});

    const handleChange = (campo, valor) => {
        setInmueble((prev) => ({
            ...prev,
            [campo]: valor,
        }));
    };

    const registrar = (e) => {
        e.preventDefault();

        const {
            Foto = "",
            CodigoInmueble = "",
            TipoInmueble = "",
            Direccion = "",
            Ciudad = "",
            Barrio = "",
            TipoOperacion = "",
            Valor = "",
            Estado = "",
            Area = "",
            NumHabitaciones = "",
            NumBanos = "",
            Descripcion = ""
        } = inmueble;


        if (!Foto.trim()) return alert("Ingrese la URL o foto del inmueble");
        if (!CodigoInmueble.trim()) return alert("Ingrese el código del inmueble");
        if (!TipoInmueble.trim()) return alert("Ingrese el tipo de inmueble");
        if (!Direccion.trim()) return alert("Ingrese la dirección del inmueble");
        if (!Ciudad.trim()) return alert("Ingrese la ciudad");
        if (!Barrio.trim()) return alert("Ingrese el barrio");
        if (!TipoOperacion.trim()) return alert("Ingrese el tipo de operación");
        if (!Valor) return alert("Ingrese el valor del inmueble");
        if (!Estado) return alert("Seleccione el estado del inmueble");
        if (!Area) return alert("Ingrese el área del inmueble");
        if (!NumHabitaciones) return alert("Seleccione el número de habitaciones");
        if (!NumBanos) return alert("Seleccione el número de baños");
        if (!Descripcion.trim()) return alert("Ingrese una descripción del inmueble");

        if (siguiente) {
            siguiente();
        }
    };

    return (
        <>
            <div className="registroinmu-container">
                <div className="registroinmu-form-wrapper">
                    <h2>Registro de Inmuebles</h2>


                    <form onSubmit={registrar}>
                        <h2>Información Básica</h2>
                        <div className="registroinmu-foto-group">
                            <label htmlFor="foto">Foto del Inmueble</label>

                            <input
                                id="foto" type="file"
                                accept="image/*"
                                onChange={(e) => handleChange("Foto", e.target.files[0])}
                            />
                            {errores.Foto && (
                                <span className="error-texto">{errores.Foto}</span>
                            )}
                        </div>

                        <div className="registroinmu-input-plain">
                            <label htmlFor="codigoInmueble">Código del inmueble</label>
                            <input
                                type="text"
                                placeholder="Ejemplo: 001, 002, 003"
                                value={inmueble.CodigoInmueble || ""}
                                onChange={(e) =>
                                    handleChange("CodigoInmueble", e.target.value)
                                }
                            />
                            {errores.CodigoInmueble && (
                                <span className="error-texto">{errores.CodigoInmueble}</span>
                            )}
                        </div>

                        <div className="registroinmu-input-icon">
                            <label htmlFor="tipoInmueble">Tipo de inmueble</label>
                            <input
                                type="text"
                                placeholder="Ejemplo: Apartamento, Casa, Oficina"
                                value={inmueble.TipoInmueble || ""}
                                onChange={(e) => handleChange("TipoInmueble", e.target.value)}
                            />
                            {errores.TipoInmueble && (
                                <span className="error-texto">{errores.TipoInmueble}</span>
                            )}
                        </div>

                        <div className="registroinmu-input-icon">
                            <label htmlFor="direccion">Dirección</label>
                            <input
                                type="text"
                                placeholder="Ejemplo: Cra 50 # 100-50"
                                value={inmueble.Direccion || ""}
                                onChange={(e) => handleChange("Direccion", e.target.value)}
                            />
                            {errores.Direccion && (
                                <span className="error-texto">{errores.Direccion}</span>
                            )}
                        </div>

                        <div className="registroinmu-input-icon">
                            <label htmlFor="ciudad">Ciudad</label>
                            <input
                                type="text"
                                placeholder="Ejemplo: Bogotá, Medellín, Cali"
                                value={inmueble.Ciudad || ""}
                                onChange={(e) => handleChange("Ciudad", e.target.value)}
                            />
                            {errores.Ciudad && (
                                <span className="error-texto">{errores.Ciudad}</span>
                            )}
                        </div>

                        <div className="registroinmu-input-plain">
                            <label htmlFor="barrio">Barrio</label>
                            <input
                                type="text"
                                id="barrio"
                                placeholder="Ejemplo: La Candelaria, El Poblado, Belén"
                                value={inmueble.Barrio || ""}
                                onChange={(e) => handleChange("Barrio", e.target.value)}
                            />
                            {errores.Barrio && (
                                <span className="error-texto">{errores.Barrio}</span>
                            )}
                        </div>

                        <h2>Información Comercial</h2>

                        <div className="registroinmu-input-plain">
                            <label htmlFor="operacion">Tipo de operación</label>
                            <input
                                type="text"
                                id="operacion"
                                placeholder="Ejemplo: Venta, Arriendo"
                                value={inmueble.TipoOperacion || ""}
                                onChange={(e) =>
                                    handleChange("TipoOperacion", e.target.value)
                                }
                            />
                            {errores.TipoOperacion && (
                                <span className="error-texto">{errores.TipoOperacion}</span>
                            )}
                        </div>

                        <div className="registroinmu-input-plain">
                            <label htmlFor="valor">Valor del inmueble</label>
                            <input
                                type="number"
                                id="valor"
                                placeholder="Ejemplo: $250,000,000"
                                value={inmueble.Valor || ""}
                                onChange={(e) => handleChange("Valor", e.target.value)}
                            />
                            {errores.Valor && (
                                <span className="error-texto">{errores.Valor}</span>
                            )}
                        </div>

                        <div className="registroinmu-select-group">
                            <label htmlFor="estado">Estado del inmueble</label>
                            <select
                                id="estado"
                                value={inmueble.Estado || ""}
                                onChange={(e) => handleChange("Estado", e.target.value)}
                            >
                                <option value="">Seleccione el estado</option>
                                <option value="Bueno">Bueno</option>
                                <option value="Regular">Regular</option>
                                <option value="Malo">Malo</option>
                            </select>
                            {errores.Estado && (
                                <span className="error-texto">{errores.Estado}</span>
                            )}
                        </div>

                        <h2>Características</h2>

                        <div className="registroinmu-select-group">
                            <label htmlFor="NumHabitaciones">Número de habitaciones</label>
                            <select
                                id="NumHabitaciones"
                                value={inmueble.NumHabitaciones || ""}
                                onChange={(e) =>
                                    handleChange("NumHabitaciones", e.target.value)
                                }
                            >
                                <option value="">Seleccione el número de habitaciones</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4+</option>
                            </select>
                            {errores.NumHabitaciones && (
                                <span className="error-texto">{errores.NumHabitaciones}</span>
                            )}
                        </div>

                        <div className="registroinmu-input-plain">
                            <label htmlFor="area">Área del inmueble</label>
                            <input
                                type="number"
                                id="area"
                                placeholder=" Ejemplo: 100 m²)"
                                value={inmueble.Area || ""}
                                onChange={(e) => handleChange("Area", e.target.value)}
                            />
                            {errores.Area && (
                                <span className="error-texto">{errores.Area}</span>
                            )}
                        </div>

                        <div className="registroinmu-select-group">
                            <label htmlFor="NumBanos">Número de baños</label>
                            <select
                                id="NumBanos"
                                value={inmueble.NumBanos || ""}
                                onChange={(e) => handleChange("NumBanos", e.target.value)}
                            >
                                <option value="">Seleccione el número de baños</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3+</option>
                            </select>
                            {errores.NumBanos && (
                                <span className="error-texto">{errores.NumBanos}</span>
                            )}
                        </div>

                        <div className="registroinmu-textarea-group">
                            <label htmlFor="mensaje">
                                Ingrese una descripción general del inmueble
                            </label>
                            <textarea
                                id="mensaje"
                                placeholder="Ingrese más detalles"
                                value={inmueble.Descripcion || ""}
                                onChange={(e) => handleChange("Descripcion", e.target.value)}
                            ></textarea>
                            {errores.Descripcion && (
                                <span className="error-texto">{errores.Descripcion}</span>
                            )}
                        </div>

                        <div className="registroinmu-botones-registro">
                            <button
                                type="button"
                                onClick={anterior}
                                className="registroinmu-btn-anterior"
                            >
                                VOLVER
                            </button>

                            <button type="submit" className="registroinmu-btn-registrarme">
                                REGISTRAR INMUEBLE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Registroinmueble;