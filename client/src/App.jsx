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
            <main className="flex grow flex-col overflow-y-scroll bg-gray-200 font-poppins">
                <div className="mx-auto my-10 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/books/:id" element={<Book />} />
                        <Route path="/query/:query" element={<Search />} />
                    </Routes>
                </div>
                <Footer />
            </main>
        </BrowserRouter>
    );
}

export default App;
