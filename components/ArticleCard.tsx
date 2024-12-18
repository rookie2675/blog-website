"use server";

import Link from "next/link";
import styles from "./ArticleCard.module.css";
import { Article } from "@prisma/client";
import { JSX } from "react";
import { prisma } from "@/prisma/prisma";

interface ArticleCardProps {
    article: Article;
}

export default async function ArticleCard(props: ArticleCardProps): Promise<JSX.Element> {
    const article = props.article;

    const author = await prisma.user.findUnique({
        where: {
            id: Number(props.article.userId),
        },
    });

    return (
        <article className={styles.article}>
            <Link className={styles.link} href={`/author/${props.article.userId}`}>
                <b>Author: </b>
                {author?.firstName} {author?.lastName}
            </Link>
            <Link className={styles.title} href={`/article/${article.id}`}>
                {article.title}
            </Link>
            <div className={styles.date}>March 20, 2023</div>
            <p className={styles.description}>{article.summary}</p>
        </article>
    );
}
