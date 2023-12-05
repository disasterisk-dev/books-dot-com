import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import PasswordField from "./PasswordField";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        login(email, password);
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
            <PasswordField value={password} setValue={setPassword} />

            <button
                className="rounded-lg bg-blue-900 py-2 font-zilla text-lg font-semibold text-white"
                disabled={isLoading}
            >
                Login
            </button>
            {error && (
                <div className="m-3 border-2 border-red-500 p-3 text-red-500">
                    <p>{error}</p>
                </div>
            )}
        </form>
    );
};

export default SignIn;
