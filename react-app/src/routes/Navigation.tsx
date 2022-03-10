import React from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
import {
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage,
    RegisterFormikPage,
    DynamicForm,
} from "../forms/pages";
import logo from "../logo.svg";

export const Navigation: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />

                    <ul>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-basic"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Formik Basic
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-yup"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Formik Yup
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-components"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Formik Components
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/formik-abstraction"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Formik Abstraction
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register-formik"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Register Formik
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dynamic-form"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Dynamic Form
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={<RegisterPage />}></Route>
                    <Route
                        path="formik-basic"
                        element={<FormikBasicPage />}
                    ></Route>
                    <Route
                        path="formik-yup"
                        element={<FormikYupPage />}
                    ></Route>
                    <Route
                        path="formik-components"
                        element={<FormikComponents />}
                    ></Route>
                    <Route
                        path="formik-abstraction"
                        element={<FormikAbstraction />}
                    ></Route>
                    <Route
                        path="register-formik"
                        element={<RegisterFormikPage />}
                    ></Route>
                    <Route
                        path="dynamic-form"
                        element={<DynamicForm />}
                    ></Route>
                    <Route
                        path="/*"
                        element={<Navigate to="register" replace />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
