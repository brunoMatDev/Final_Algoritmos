import LinkButton from "../Components/Buttons/LinkButton";
import FunctionButton from "../Components/Buttons/FunctionButton";
import { useEffect, useState } from "react";

let MENU_DATA = [];


const Frontend = (props) => {
    
    const [userData, setUserData] = useState(false);
    
    const logOut = () => {
        localStorage.clear();
        window.location.replace("/");
    }
    function obtenerFechaActual() {
        const fecha = new Date();
        const dia = String(fecha.getDate()).padStart(2, '0'); // Obtener el día y agregar un cero si es necesario
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados, así que sumamos 1
        const anio = String(fecha.getFullYear()).slice(-2); // Obtener los últimos dos dígitos del año
        const horas = String(fecha.getHours()).padStart(2, '0');
        const minutos = String(fecha.getMinutes()).padStart(2, '0');
        return `${dia}/${mes}/${anio}-${horas}:${minutos}`;
    }
    
    useEffect(() => {
        let tmp = localStorage.getItem("session");
        if(tmp)
            {
                setUserData(JSON.parse(tmp));
            }
            if(localStorage.getItem("session")){
                MENU_DATA = [
                    {
                        to: '/inicio',
                        text: 'Inicio'
                    },
                    {
                        to: '/users',
                        text: 'Users'
                    }
                ]
            }
        }, [props.session]);
        
        return(
            <>
            {/* Condicionar la barra de navegación solo si hay datos del usuario */}
            {userData && (
                <header className="w-full h-16 bg-gradient-to-r from-blue-500 to-blue-300 shadow-md flex items-center justify-between px-6">
                    <div className="flex space-x-6">
                        {
                            MENU_DATA.map((item, index) => (
                                <LinkButton
                                    text={item.text}
                                    to={item.to}
                                    key={index}
                                    className="text-white hover:text-gray-200 transition-all duration-300 ease-in-out"
                                />
                            ))
                        }
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="text-white">
                            <span className="font-semibold">User: {userData.username}</span>
                        </div>
                        <div className="text-white">
                            <span className="font-semibold">Logged in at: {obtenerFechaActual()}</span>
                        </div>
                        <FunctionButton
                            text="Log Out"
                            callback={logOut}
                            className="bg-white text-blue-600 font-semibold py-1 px-4 rounded hover:bg-gray-100 transition duration-300"
                        />
                    </div>
                </header>
            )}
            {props.children}
        </>
    );
}

export default Frontend;