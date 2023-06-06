import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { LoginContext } from "../contexts";

export default function Header() {
    const { isLogin, setIslogin } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleRegister = () => {
        navigate("/register");
    }

    const handleCart = () => {
        navigate("/cart");
    };

    const handleLogout = () => {
        setIslogin(false);
        navigate("/login");
    };


    return (
        <div className="overflow-hidden z-10 w-full flex h-16 justify-between items-center bg-red-400 text-white mx-auto px-24">
            <div className="">
                <img src="http://localhost:5173/site-logo.svg" className="w-48 h-28" />
            </div>
            {!isLogin ?
                (<div className="flex gap-4">
                    <button className="bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700"
                        onClick={handleLogin}
                    >Login</button>

                    <button className="bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700"
                        onClick={handleRegister}
                    >Register</button>

                    <div className="bg-white border-blue-600 text-red-500 px-2 py-1 rounded-lg flex items-center gap-1 cursor-pointer"
                        onClick={handleCart}
                    >
                        <BsFillCartFill />
                        <p className="text-600">Cart</p>
                    </div>
                </div>)
                : (
                    <div className="flex gap-4">
                        <button className="bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-700"
                            onClick={handleLogout}
                        >Logout</button>
                    </div>
                )
            }
        </div>
    );
}