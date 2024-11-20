"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

export default function Page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log(username);
        console.log(password);
    }

    function handleUsernameChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setUsername(event.target.value);
    }

    function handlePasswordChange(
        event: React.ChangeEvent<HTMLInputElement>,
    ): void {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
                <div className={styles.fieldContainer}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    ></input>
                </div>
                <div className={styles.fieldContainer}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    ></input>
                </div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}
