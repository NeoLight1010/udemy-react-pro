import React from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
import {ShoppingPage} from "../component-patterns/pages/ShoppingPage";
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
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Shopping
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                About
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
                    <Route path="about" element={<h1>About Page</h1>}></Route>
                    <Route path="users" element={<h1>Users page</h1>}></Route>
                    <Route path="/" element={<ShoppingPage />}></Route>
                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
