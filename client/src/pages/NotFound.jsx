import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex h-full flex-col justify-center gap-3">
            <h3 className="font-zilla text-5xl ">404</h3>
            <span>Sorry, we couldn't find the page you were looking for!</span>
            <Link
                to={"/"}
                className="rounded-lg bg-blue-900 px-3 py-2 text-center text-white"
            >
                Please return to homepage
            </Link>
        </div>
    );
};

export default NotFound;
