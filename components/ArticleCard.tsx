'use server';

import Link from "next/link";
import styles from "./ArticleCard.module.css";
import { Article } from "@prisma/client";
import { JSX } from "react";
import { prisma } from "@/prisma/prisma";

export default async function ArticleCard({ article, }: { article: Article; }): Promise<JSX.Element> {

    const author = await prisma.author.findUnique({
        where: {
            id: Number(article.authorId),
        },
    });

    return (
        <article className={styles.article}>
            <Link className={styles.link} href={`/author/${article.authorId}`}><b>Author: </b>{author?.name} </Link>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.description}>{article.summary}</p>
            <Link className={styles.readMore} href={`/article/${article.id}`}><b>Read more...</b></Link>
        </article>
    );
}
