import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-lg flex-col"
        >
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                className="mb-4 rounded-lg px-3 py-2"
            />

            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                className="mb-4 rounded-lg px-3 py-2"
            />

            <button className="rounded-lg bg-blue-900 py-2 font-zilla text-lg font-semibold text-white">
                Login
            </button>
        </form>
    );
};

export default SignIn;
