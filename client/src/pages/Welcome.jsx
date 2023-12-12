import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-5">
            <h2 className="font-zilla text-5xl text-blue-900">
                Welcome to <span className="font-bold">Books</span>
            </h2>
            <span className="text-center">
                Books is a MERN stack web app for finding and reviewing books.
                The front-end is built in React, with Material UI and Tailwind
                CSS. The back-end API is built in the Node runtime with
                Express.js. Data and authentication via MongoDB and JWT. The
                search functionality is made possible by the{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://openlibrary.org/"
                    className="font-semibold text-blue-900 underline"
                >
                    Open Library API
                </a>{" "}
                .
            </span>
            <Link
                to={"/login"}
                className="my-10 w-1/2 rounded-lg bg-blue-900 py-5 text-center font-zilla text-xl text-white"
            >
                Sign Up to get started
            </Link>
        </div>
    );
};

export default Welcome;
