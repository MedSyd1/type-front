"use client"

import { FormEvent, useState } from "react";
import "./login.css";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode"; // Ensure correct import
import { CustomJwtPayload, login } from "../provider";
import { getCookie } from "../lib/cookies";

export default function Page() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const data = await login(username, password);
            console.log("This is the data: ", data);

            let decodeData = jwtDecode<CustomJwtPayload>(data['access-token']);
            let roles = decodeData.scope;

            if (roles.includes("user_role")) {
                router.push("/home");
            } else {
                console.log("You do not have the required role.");
            }

            console.log(decodeData);

        } catch (error) {
            console.error("Login failed:", error);
            // Display error message to the user
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="container">
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}
