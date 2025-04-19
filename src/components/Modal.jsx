import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearContacto } from "../Services/Fetchs";
import { useState } from "react";
import { Link } from "react-router-dom";

function Modal() {
  const { slug } = useParams();
  const [contacts, setContacts] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const { store, dispatch } = useGlobalReducer();

  const handleContact = () => {
    const contacto = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    crearContacto(contacto, dispatch, slug);
    useNavigate(`/agendaEspecifica/${slug}`);
    setContacts(contacto);
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="nombreContacto" className="form-label">
            Nombre del contacto:
          </label>
          <input
            id="nombreContacto"
            type="text"
            placeholder="Introduzca el nombre del contacto"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailContacto" className="form-label">
            Email del contacto:
          </label>
          <input
            id="emailContacto"
            type="email"
            placeholder="Introduzca el email del contacto"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            phone:
          </label>
          <input
            id="phone"
            type="phone"
            placeholder="Introduzca el phone del contacto"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Adrres del contacto:
          </label>
          <input
            id="adreess"
            type="adress"
            placeholder="Introduzca el adress del contacto"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            handleContact();
          }}
        >
          <Link to={`/agendaEspecifica/${slug}`}>Crear Contacto</Link>
        </button>
      </form>
    </div>
  );
}

export default Modal;
