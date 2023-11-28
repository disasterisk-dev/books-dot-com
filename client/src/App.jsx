import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="grow bg-gray-200 font-poppins">
                <div className="mx-auto my-10 max-w-[80%]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/books/:id" element={<Book />} />
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
