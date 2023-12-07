import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
    const { user } = useAuthContext();

    return (
        <BrowserRouter>
            <Navbar />
            <main className="flex grow flex-col overflow-y-scroll bg-gray-200 font-poppins">
                <div className="mx-auto my-10 w-[95%] grow md:w-[80%] lg:w-[70%] xl:w-[60%]">
                    <Routes>
                        <Route path="/" element={user ? <Home /> : <Login />} />
                        <Route
                            path="/login"
                            element={!user ? <Login /> : <Home />}
                        />
                        <Route path="/books/:id" element={<Book />} />
                        <Route path="/query/:query" element={<Search />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </main>
        </BrowserRouter>
    );
}

export default App;
