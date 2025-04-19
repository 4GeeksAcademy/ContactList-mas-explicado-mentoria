import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearAgenda, obtenerAgendas } from "../Services/Fetchs";
import { Link } from "react-router-dom";

function CrearAgenda() {
  const { store, dispatch } = useGlobalReducer();
  const { agendas } = store;
  const [nombreAgenda, setNombreAgenda] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  // Verificar si existe alguna agenda con el nombre ingresado (case insensitive)
  const existeAgenda = agendas?.agendas?.some(
    (agenda) => agenda.slug.toLowerCase() === nombreAgenda.trim().toLowerCase()
  );

  const handleCrearAgenda = () => {
    crearAgenda(nombreAgenda, dispatch);
    setLoading(true);
    setMensaje("");
    setNombreAgenda("");
    obtenerAgendas(dispatch);
  };

  return (
    <div className="crear-agenda-container text-center">
      <h2>Crear Nueva Agenda</h2>

      <div className="mb-3">
        <label htmlFor="nombreAgenda" className="form-label">
          Nombre de la agenda:
        </label>
        <input
          id="nombreAgenda"
          type="text"
          placeholder="Introduzca el nombre de la agenda"
          className="form-control"
          value={nombreAgenda}
          onChange={(e) => setNombreAgenda(e.target.value)}
          disabled={loading}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={() => {
          handleCrearAgenda();
        }}
        disabled={loading || !nombreAgenda.trim()}
      >
        {loading ? (
          "Creando..."
        ) : (
          <Link className="text-white" to={`/agendaEspecifica/${nombreAgenda}`}>"Crear Agenda"</Link>
        )}
      </button>

      {mensaje && (
        <div
          className={`alert ${
            mensaje.includes("éxito") ? "alert-success" : "alert-warning"
          } mt-3`}
        >
          {mensaje}
        </div>
      )}

      <div className="mt-4">
        <h4>Agendas existentes:</h4>
        {agendas?.agendas?.length > 0 ? (
          <ul className="list-group">
            {agendas.agendas.map((agenda, index) => (
              <li key={index} className="list-group-item">
                <strong>{agenda.slug}</strong> 
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay agendas disponibles</p>
        )}
      </div>
    </div>
  );
}

export default CrearAgenda;
