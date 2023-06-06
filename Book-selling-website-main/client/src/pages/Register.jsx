import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from "../contexts";


export default function Register() {
    const navigate = useNavigate();
    const api_url = import.meta.env.VITE_url;
    const [role, setRole] = useState("buyer");

    const registerSchema = Yup.object().shape({
        firstname: Yup.string().min(2, "Too Short").required("Required.."),
        lastname: Yup.string().min(2, "Too Short").required("Required.."),
        email: Yup.string().email("Invalid Email..").required("Required.."),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const handleRegister = async (values) => {
        try {
            const response = await axios.post(api_url + "/user", {
                data: {
                    ...values,
                    role: role
                }
            });
            const data = response.data;
            console.log(data)
            toast("Registered Successfully..");
            navigate("/login");
        } catch (err) {
            console.log(err);
            toast("Error" + err);
        }
    }


    return (
        <div className="flex flex-col">

            <div className="font-bold flex justify-center text-4xl font-roboto">
                Create An Account
            </div>
            <div className="mt-4">
                <div className="">
                    <p className="font-bold text-lg mb-2">Personal Information</p>
                    <div className="border-b-2 border-gray-200 mb-2"></div>
                    <p className="text-gray-400 font-roboto font-bold text-sm">Please Enter this following Information for creating Account</p>
                </div>

                <Formik
                    initialValues={{
                        email: "",
                        firstname: "",
                        lastname: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={registerSchema}
                    onSubmit={(values) => { return handleRegister(values) }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="max-w-screen flex mt-2 gap-4 font-roboto font-bold">
                                <div className="w-1/2 flex flex-col gap-1">
                                    <label htmlFor="firstname">Firstname <span>*</span> </label>
                                    <Field type="text" name="firstname" className="w-full border-black border rounded-md px-3 py-1" id="firstname" />
                                    {(errors.firstname && touched.firstname) ? <div className="text-red-500 font-roboto text-sm">{errors.firstname}</div> : null}
                                </div>
                                <div className="w-1/2 flex flex-col gap-1">
                                    <label htmlFor="lastname">Lastname <span>*</span></label>
                                    <Field type="text" className="w-full border-black border rounded-md px-3 py-1" id="lastname" name="lastname" />
                                    {(errors.lastname && touched.lastname) ? <div className="text-red-500 font-roboto text-sm">{errors.lastname}</div> : null}
                                </div>
                            </div>
                            <div className="max-w-screen flex mt-2 gap-4 font-roboto font-bold">
                                <div className="flex flex-col gap-1 w-1/2">
                                    <label htmlFor="email">Email <span>*</span></label>
                                    <Field type="email" className="border w-full border-black rounded-md px-3 py-1" id="email" name="email" />
                                    {(errors.email && touched.email) ? <div className="text-red-500 font-roboto text-sm">{errors.email}</div> : null}
                                </div>
                                <div className="flex flex-col gap-1 w-1/2">
                                    <label htmlFor="roles">Roles <span>*</span></label>
                                    <select
                                        name="roles"
                                        className="border w-full border-black rounded-md px-2 py-1"
                                        onChange={(e) => setRole(e.target.value)}>
                                        {/* <option value="">--Please choose an option--</option> */}
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-8 font-robotto font-bold">
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg">Login Information</p>
                                    <div className="border-b-2 border-gray-200 mb-2"></div>
                                </div>
                                <div className="max-w-screen flex mt-2 gap-4 font-roboto font-bold">
                                    <div className="w-1/2 flex flex-col gap-1">
                                        <label htmlFor="password">Password <span>*</span> </label>
                                        <Field type="password" className="w-full border-black border rounded-md px-3 py-1" id="password" name="password" />
                                        {(errors.password && touched.password) ? <div className="text-red-500 font-roboto text-sm">{errors.password}</div> : null}
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-1">
                                        <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                                        <Field type="password" className="w-full border-black border rounded-md px-3 py-1" id="confirmPassword" name="confirmPassword" />
                                        {(errors.confirmPassword && touched.confirmPassword) ? <div className="text-red-500 font-roboto text-sm">{errors.confirmPassword}</div> : null}
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <button type="submit" className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Register</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}