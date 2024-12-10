import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Navbar from "./features/Navbar";
import Footer from "./features/Footer";

function Signin() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please enter a valid email address.")
                .required("Email is required."),
            password: Yup.string()
                .min(8, "Your password should be at least 8 characters long.")
                .required("Password is required."),
        }),
        onSubmit: (values) => {
            axios
                .post("http://localhost:8080/api/auth/login", values)
                .then((response) => {
                    toast.success("Login successful");
                    const token = response.data; // Use the token from response
                    // dispatch(login(response.data)); // Uncomment and use if redux is set up
                    console.log("Token received:", token);
                    return axios.get("http://localhost:8080/api/auth/verify-token", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                })
                .then((response) => {
                    // dispatch(setUserRole(response.data)); // Uncomment and use if redux is set up
                    navigate("/");
                })
                .catch((error) => {
                    if (error.response?.status === 401) {
                        toast.error("Invalid credentials or unauthorized");
                    } else {
                        toast.error("Error in fetching your role");
                    }
                    // dispatch(logout()); // Uncomment and use if redux is set up
                    console.error("Error during login or role verification:", error);
                });
        },
    });

    return (
        <>
            <Navbar />

            <div className="signin-wrapper flex justify-center items-center bg-gray-800 min-h-screen">
                <div className="signin-container p-10 rounded-lg shadow-lg bg-gray-900 w-full max-w-md mx-auto">
                    <h3 className="signin-title text-3xl text-center mb-5 text-white">Sign In</h3>
                    <form className="signin-form space-y-6" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label className="form-label text-sm text-gray-400" htmlFor="email">Enter your email</label>
                            <input
                                className="signin-input px-4 py-2 border rounded-md bg-transparent border-gray-700 focus:outline-none text-white w-full"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="error-message mt-1 text-sm text-red-500">{formik.errors.email}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="form-label text-sm text-gray-400" htmlFor="password">Your password should be at least 8 characters long</label>
                            <input
                                className="signin-input px-4 py-2 border rounded-md bg-transparent border-gray-700 focus:outline-none text-white w-full"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="error-message mt-1 text-sm text-red-500">{formik.errors.password}</p>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                className="signin-button px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer transition duration-200 hover:bg-blue-600 w-full"
                                type="submit"
                                value="Sign In"
                                disabled={formik.isSubmitting} // Prevent multiple submissions
                            />
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Signin;
