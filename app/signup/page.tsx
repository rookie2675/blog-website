'use client'

import { FormEvent, useState } from "react";
import { z } from "zod";
import styles from "./page.module.css";

export default function Page() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const userSchema = z.object({
        email: z.string().email(),
        password: z.string(),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const parsedData = userSchema.parse(formData);
        console.log(parsedData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
                <div className={styles.fieldContainer}>
                    <input type="text" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className={styles.fieldContainer}>
                    <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                </div>
                <div className={styles.fieldContainer}>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    );
}