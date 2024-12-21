import { JSX } from "react";
import styles from "./page.module.css";
import { prisma } from "@/prisma/prisma";
import { User } from "@prisma/client";
import LoginForm from "@/components/LoginForm";

/**
 * Attempts to log in a user with the given email and password. If the user's
email and password match a user in the database, the user is returned. If
 * not, null is returned.
 *
 * @param {string} email The email address of the user to log in.
 * @param {string} password The password of the user to log in.
 * @return {Promise<User | null>} A promise resolving to the user or null if the user could not be found.
 */
async function login(email: string, password: string): Promise<User | null> {
    "use server";
    return (await prisma.user.findFirst({
        where: {
            email: email,
            password: password,
        },
    })) as User;
}

/**
 * Page to log in a user.
 *
 * @return {Promise<JSX.Element>} A promise resolving to the JSX element representing the page.
 */
export default async function Page(): Promise<JSX.Element> {
    return (
        <div className={styles.container}>
            <LoginForm login={login} />
        </div>
    );
}
