import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";
import { eliminarContacto, obtenerContactos } from "../Services/Fetchs";
import { Link } from "react-router-dom";

function AgendaEspecifica() {
  const { store, dispatch } = useGlobalReducer();
  const { slug } = useParams();
  const { contacts } = store;

  useEffect(() => {
    obtenerContactos(dispatch, slug);
  }, [dispatch,slug]);

  console.log(contacts);

  const handleDelete=(id,slug,dispatch)=>{
    eliminarContacto(id,dispatch,slug);
  }
  return (
  <div className="container text-center">
    {contacts && contacts.length>0? "hay contactos": "no hay contactos"}
    <div>
      <button><Link to={`/modal/${slug}`}>AddContact</Link></button>
    </div>
    <ul>
      {contacts && contacts.map((contacto, index) => {
        return (
          <li key={index}>
            <div className="container d-flex flex-row gap-5">
              <div>
              <h3>{contacto.name}</h3>
            <p>{contacto.email}</p>
            <p>{contacto.phone}</p>
              </div>
              <div>
              <button className="btn btn-success" ><Link to={`/contactEdit/${contacto}`}>editar</Link></button>
              <button className="btn btn-danger"
              onClick={()=>{
              handleDelete(contacto.id,slug,dispatch)
              console.log("eliminar")
              }}>eliminar</button>
              </div>
            </div>
            
           
          </li>
        );
      })}
    </ul>
    
    </div>);
}

export default AgendaEspecifica;
