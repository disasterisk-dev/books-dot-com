import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BookContextProvider } from "./context/BookContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <BookContextProvider>
                <App />
            </BookContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
);
