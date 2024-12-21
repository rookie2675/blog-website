"use client";

import styles from "./LoginForm.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { JSX, useState } from "react";
import { z } from "zod";
import Link from "next/link";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";

type Inputs = z.output<typeof schema>;

export const schema = z.object({
    email: z.string().email("Please enter a valid email").trim(),
    password: z.string().min(1, { message: "Please enter your password" }),
});

interface Props {
    login: (email: string, password: string) => Promise<User | null>;
}

/**
 * Component for rendering a login form.
 *
 * @param {Props} props - The props containing the login function.
 * @return {JSX.Element} The rendered login form component.
 *
 * This component uses the `react-hook-form` library to manage the form state,
 * validation, and submission handling. It uses a zod schema for form validation.
 * Upon successful login, the user is redirected to the home page. On login failure,
 * an error message is displayed.
 */

export default function LoginForm(props: Props): JSX.Element {
    const router = useRouter();
    const [failedLogin, setFailedLogin] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    async function onSubmit(data: Inputs) {
        const user = await props.login(data.email, data.password);
        if (user) {
            router.push("/");
        } else {
            setFailedLogin(true);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="formField">
                <label htmlFor="email">Email Address</label>
                <input className="formInput" {...register("email")}></input>
                <div className="formFieldError">{errors.email && <span>{errors.email.message}</span>}</div>
            </div>
            <div className="formField">
                <label htmlFor="password">Password</label>
                <input className="formInput" {...register("password")} type="password"></input>
                <div className="formFieldError">{errors.password && <span>{errors.password.message}</span>}</div>
            </div>
            <div className="formFieldError">{failedLogin && <span>Incorrect email or password</span>}</div>
            <div className={styles.buttonsContainer}>
                <button className="formButton" type="submit">
                    Login
                </button>
                <button className="formButton" type="button">
                    <Link href="/forgot-password">Forgot password</Link>
                </button>
                <button className="formButton" type="button">
                    <Link href="/signup">Create new account</Link>
                </button>
            </div>
        </form>
    );
}
