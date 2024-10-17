import TextInput from "../Components/Inputs/TextInput";
import FunctionButton from "../Components/Buttons/FunctionButton";
import { useState } from "react";
import { POST } from "../Services/Fetch";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import LinkButton from "../Components/Buttons/LinkButton";
import { Spinner } from "react-bootstrap";

const Login = (props) => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const submmitLogin = async () => {
    if (!formData?.Username) {
      window.alert("Complete los campos para continuar.");
    } else {
      setLoading(true);
      let rsp = await POST("login", formData);
      if (rsp.success == true) {
        props.session(rsp.data);
        localStorage.setItem("token", JSON.stringify(rsp.data));
        localStorage.setItem("session", JSON.stringify(jwtDecode(rsp.data)));
        navigate("/inicio");
      } else {
        window.alert("Credenciales incorrectas");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-w-[100vw] min-h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full" align="center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>

            <div className="mb-4">
                <TextInput
                    type={'text'}
                    callback={(e) => { setFormData({ ...formData, Username: e.target.value }) }}
                    placeholder={'Username'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-800 placeholder-gray-500"
                />
            </div>

            <div className="mb-6">
                <TextInput
                    type={'password'}
                    callback={(e) => { setFormData({ ...formData, Password: e.target.value }) }}
                    placeholder={'Password'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-800 placeholder-gray-500"
                />
            </div>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                      <FunctionButton
                          text={'Login'}
                          callback={() => { submmitLogin() }}
                          
                          style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} // Efecto de sombra
                      />
                    </button>

            }

            <div className="mt-4 text-center">
                <LinkButton
                    text="¿No tienes una cuenta? Regístrate"
                    to='/Register'
                    className="text-blue-500 hover:text-blue-600 text-sm"
                />
            </div>

            {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
        </div>
    </div>
);
};

export default Login;
