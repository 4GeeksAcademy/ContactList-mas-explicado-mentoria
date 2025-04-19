import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { obtenerAgendas } from "../Services/Fetchs.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const { allAgendas } = store;
  console.log(store);

  useEffect(() => {
    obtenerAgendas(dispatch);
  }, [dispatch]);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <button className="btn btn-secondary">
        <Link to="/crearAgenda"> Crear Agenda</Link>
				
      </button>
    </div>
  );
};
