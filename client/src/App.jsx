import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Login from "./pages/login";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="grow bg-gray-200 font-poppins">
                <div className="mx-auto my-10 max-w-[80%]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/books/:id" element={<Book />} />
                        <Route path="/query/:query" element={<Search />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
