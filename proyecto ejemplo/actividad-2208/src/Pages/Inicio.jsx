import { useState, useEffect } from "react";
import LinkButton from "../Components/Buttons/LinkButton";

const Inicio = () => {
    const userData = JSON.parse(localStorage.getItem("session"));
    const [greeting, setGreeting] = useState("");

    let MENU_DATA = [
        {
            id: 1,
            to: '/Users',
            text: 'Users'
        }
    ];
    

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting("Buenos días");
        } else if (hour < 18) {
            setGreeting("Buenas tardes");
        } else {
            setGreeting("Buenas noches");
        }
    }, []);

    return (
        <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    {greeting}, {userData.username}!
                </h2>
                <div className="flex justify-around">
                    {MENU_DATA.map((item) => (
                        <button key={item.id} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                            <LinkButton
                                text={item.text}
                                to={item.to}
                                className="text-white hover:text-gray-200 transition-all duration-300"
                            />
                        </button>
                    ))}

                </div>
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Último acceso: {new Date().toLocaleString()}
                </div>
            </div>
        </div>
    );
};

export default Inicio;
