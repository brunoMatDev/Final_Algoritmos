import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Layouts
import Frontend from './Layouts/Frontend';
import Backoffice from './Layouts/Backoffice';

//Pages
import Login from "./Pages/Login";
import Inicio from "./Pages/Inicio"
import Blog from "./Pages/Blog";
import Users from "./Pages/Users";

// ----- CONSIGNA ----- //
/**
  En este repositorio, encontraran una instalacion minima Vite y React Router Dom.
  
  ------------------------------------------------------------------------------------
  IMPORTANTE: Para realizar esta actividad ejecutar los siguientes comandos despues de
  realizar un clon del repositorio.

  git branch <Su Nombre (UpperCamelCase)>
  git checkout <Su Nombre (UpperCamelCase)>
  
  Despues de terminada la actividad
  git commit -m "<Comentarios>"
  push -u origin <Su Nombre (UpperCamelCase)>

  ------------------------------------------------------------------------------------
  
  1. Crear componentes modulares
    a. Botones de acceso que utilicen el tag Link de React Router Dom
    b. Botones que disparen callbacks
    c. Menus que puedan ser formados de manera dinamica (utilizando objetos)
    d. Al menos un Header o menu contextual que tenga la capacidad de recibir elementos a travez de parametros
  2. Utilizar el componente de Header/Menu del punto anterior para crear un Layout (Pueden utilizar el archivo Frontend.jsx)
  3. Crear una pagina con algun tipo de contenido estatico (El contenido realmente no importa) y asignarle una ruta (Pueden utilizar la funcion baseFrontRoutes)
 
  */

const RouterApp = (props) => {
  const [user, setUser] = useState(null);
  const [protectedRoutes, setProtectedRoutes] = useState(<></>);

  const baseFrontRoutes = (route, children) => {
    return (
      <Route path={route} element={<Frontend children={children} session={user}/>}/>
    );
  }

  const baseBackendRoutes = (route, children) => {
    return (
      <Route path={route} element={<Backoffice children={children}/>} />
    )
  }

  useEffect(() => {
    if (localStorage.getItem("session")) {
      setProtectedRoutes(
        <>
          {baseFrontRoutes("/users", <Users />)}
          {baseFrontRoutes("/Inicio", <Inicio />)}
          {baseFrontRoutes("/blog", <Blog />)}
          {baseFrontRoutes("*", <>404</>)}
        </>
      );
    } else {
      setProtectedRoutes(
      <>
        {baseFrontRoutes("*", <Login session={setUser}/>)}
      </>
      );
    }
  }, [user])


  return (
    <>
      <BrowserRouter>
          <Routes>
            {protectedRoutes}
          </Routes>
      </BrowserRouter>
    </>

  );
}

export default RouterApp;