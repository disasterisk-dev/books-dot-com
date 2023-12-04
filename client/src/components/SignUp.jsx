import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password, checkPassword);
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

            <label>Confirm password:</label>
            <input
                type="password"
                value={checkPassword}
                onChange={(e) => {
                    setCheckPassword(e.target.value);
                }}
                className="mb-4 rounded-lg px-3 py-2"
            />

            <span className="mb-4">
                Passwords must contain:
                <ul className="list-disc pl-8">
                    <li>At least 8 characters</li>
                    <li>Lowercase letters</li>
                    <li>Uppercase letters</li>
                    <li>At least 1 number</li>
                    <li>At least 1 special character</li>
                </ul>
            </span>

            <button
                className="rounded-lg bg-blue-900 py-2 font-zilla text-lg font-semibold text-white"
                disabled={isLoading}
            >
                Sign Up
            </button>
            {error && (
                <div className="m-3 border-2 border-red-500 p-3 text-red-500">
                    <p>{error}</p>
                </div>
            )}
        </form>
    );
};

export default Signup;
