"use server";

import styles from "./page.module.css";
import { prisma } from "@/prisma/prisma";
import ArticleGrid from "@/components/ArticleGrid";

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const author = await prisma.user.findUnique({
        where: {
            id: Number(params.id),
        },
        include: {
            articles: true,
        },
    });

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {author?.firstName} {author?.lastName}{" "}
            </h1>
            <div className={styles.photo}></div>
            <ArticleGrid articles={author?.articles || []} />
        </div>
    );
}
