import React from 'react';
import Navbar from './features/Navbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Footer from './features/Footer';

function Signup() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm_password: '',
            role: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email format").required("Please enter your email"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password"),
            confirm_password: Yup.string()
                .required("Please confirm your password")
                .oneOf([Yup.ref('password'), null], "Passwords must match"),
        }),
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: (values) => {
            axios.post('http://localhost:8080/api/auth/register', values)
                .then((response) => {
                    if (response.status === 200) {
                        toast.success('User created successfully!');
                    } else {
                        toast.error();
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data);
                });
        },
    });

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 min-h-screen flex justify-center items-center">
                <div className="bg-black p-10 rounded-lg shadow-lg max-w-md w-full space-y-6">
                    <h3 className="text-3xl font-semibold text-center text-white">Create Account</h3>
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-white">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <small className="text-red-500">{formik.errors.email}</small>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-white">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {formik.touched.password && formik.errors.password && (
                                <small className="text-red-500">{formik.errors.password}</small>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-white">Confirm Password</label>
                            <input
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                value={formik.values.confirm_password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            {formik.touched.confirm_password && formik.errors.confirm_password && (
                                <small className="text-red-500">{formik.errors.confirm_password}</small>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Create User
                        </button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
