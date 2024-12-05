"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { z } from "zod";

export default function Page(): JSX.Element {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const formSchema = z.object({
        email: z.string().email(),
        password: z.string(),
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const parsedData = formSchema.parse(formData);
        console.log(parsedData);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.form}>
                <div className={styles.field}>
                    <input className={styles.input} id="email" name="email" type="text" value={formData.email} placeholder="Email" onChange={handleChange} required></input>
                </div>
                <div className={styles.field}>
                    <input className={styles.input} id="password " name="password" type="password" value={formData.password} placeholder="Password" onChange={handleChange} required></input>
                </div>
                <button className={styles.button} type="submit">Login</button>
                <Link href="/signup">No account? Click here to sign up</Link>
            </div>
        </form>
    );
}
