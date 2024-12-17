"use server";

import { prisma } from "@/prisma/prisma";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Page(props: { params: Promise<{ id: number }> }): Promise<JSX.Element> {
    const params = await props.params;
    const article = await prisma.article.findUnique({
        where: {
            id: Number(params.id),
        },
        include: {
            author: true,
        },
    });

    if (!article) {
        return (
            <div>
                <h1>Article Not Found</h1>
                <p>Sorry, we couldn&apos;t find the article you&apos;re looking for.</p>
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{article.title}</h1>
                <p className={styles.author}>
                    <strong>Author: </strong>
                    <Link href={`/author/${article.authorId}`}>{article.author.name}</Link>
                </p>
                <p className={styles.body}>{article.body}</p>
            </div>
        );
    }
}
