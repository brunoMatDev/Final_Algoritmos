import { useState, useEffect } from "react";
import { GET } from "../Services/Fetch"; // Supongo que usas un servicio GET similar a POST

const users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await GET("listar");
            
            if (response && response.data) {
                setUsers(response.data);
            } else {
                setError("Error al cargar usuarios");
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Usuarios Cargados</h2>
                
                {error ? (
                    <div className="text-red-500 text-center mb-4">{error}</div>
                ) : (
                    <ul className="space-y-4">
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <li key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                                    <p><strong>Username:</strong> {user.username}</p>
                                    <p><strong>Password:</strong> {user.password}</p>
                                    <p><strong>Rol:</strong> {user.rol}</p>
                                </li>
                            ))
                        ) : (
                            <div className="text-gray-600 text-center">No se encontraron usuarios.</div>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default users;
