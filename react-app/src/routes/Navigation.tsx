import React from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
import { FormikBasicPage } from "../forms/pages/FormikBasicPage";
import { RegisterPage } from "../forms/pages/RegisterPage";
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
                                to="/users"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Users
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
                    <Route path="users" element={<h1>Users page</h1>}></Route>
                    <Route
                        path="/*"
                        element={<Navigate to="register" replace />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
