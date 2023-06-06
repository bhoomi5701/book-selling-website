import { useState, useContext } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext, UserContext } from "../contexts";

const Login = () => {
    const api_url = import.meta.env.VITE_url;
    const navigate = useNavigate();
    const { isLogin, setIslogin } = useContext(LoginContext);
    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        return navigate("/register");
    };

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invaild email..").required("Email required"),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });

    const handleLogin = async (values) => {
        // alert(values.password);
        try {
            const res = await axios.post(api_url + "/user/login", {
                data: {
                    ...values
                }
            });
            // console.log(res);
            if(res.data.error) {
                toast(res.data.error, {
                    type: "error",
                })
            }
            else {
                const userData = res.data.user[0];
                setUser(userData);
                toast(res.data.message);
                setTimeout(()=>{
                    setIslogin(true);
                }, 3000);
            }
        } catch (err) {
            toast(err, {
                type: "warning",
            });
        }

    };
    return (
        <> {isLogin && navigate("/product")}
            {/* <ToastContainer position="top-left" /> */}
            <div className="text-center m-auto text-4xl font-bold font-roboto">
                Login or Create An Account
                <div className="border border-b-2 w-1/4 m-auto mt-3 border-black"></div>
            </div>
            <div className="flex mt-4 font-roboto gap-8">
                <div className="flex flex-col w-1/2 pr-10">
                    <p className="font-bold text-xl">New Customer</p>
                    <div className="border border-b-2 my-3"></div>
                    <p className="text-gray-500 font-bold text-md">Registration is free and easy.</p>
                    <ul className="mt-3 list-disc pl-4">
                        <li>Faster Checkout.</li>
                        <li>Save multiple shopping addresses.</li>
                        <li>View and track user orders.</li>
                    </ul>
                    <div className="mt-36">
                        <button className="bg-red-500 px-3 py-2 rounded hover:bg-red-600 text-white"
                            onClick={handleRegister}
                        >Create An Account</button>
                    </div>

                </div>
                <div className="flex flex-col w-1/2 font-roboto">
                    <p className="font-bold text-xl">Registered Customer</p>
                    <div className="border border-b-2 my-3"></div>
                    <p className="text-gray-500 font-bold text-md">If you have an account with us. Please Log In.</p>

                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => { return handleLogin(values) }}
                    >
                        {({ errors, touched, validateOnChange }) => (
                            <Form className="flex flex-col mt-3 gap-3">
                                <div className="flex flex-col font-bold gap-1">
                                    <label htmlFor="email" className="text-lg">Email <span>*</span></label>
                                    <Field type="email" name="email" className="border border-black rounded w-72 px-2 py-1" />
                                    {errors.email && touched.email ? (<div className="text-red-500 font-roboto text-sm">{errors.email}</div>) : null}
                                </div>
                                <div className="flex flex-col gap-1 font-bold">
                                    <label htmlFor="password" className="text-lg">Password <span>*</span></label>
                                    <Field type="password" name="password" className="border border-black rounded w-72 px-2 py-1" />
                                    {errors.password && touched.password ? (<div className="text-red-500 font-roboto text-sm">{errors.password}</div>) : null}
                                </div>
                                <div className="mt-2">
                                    <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                                    >Login</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default Login