import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Layouts
import Frontend from './Layouts/Frontend';
import Backoffice from './Layouts/Backoffice';

//Pages
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'



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
          {baseFrontRoutes("/page2", <Page2 />)}
          {baseFrontRoutes("/page3", <Page3 />)}
        </>
      );
    } else {
      setProtectedRoutes(
      <>
        {baseFrontRoutes("*", <Page1 />)}
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