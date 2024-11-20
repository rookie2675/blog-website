import Link from "next/link";
import styles from "./ArticleCard.module.css";
import { Article } from "@prisma/client";
import { JSX } from "react";

export default function ArticleCard({
    article,
}: {
    article: Article;
}): JSX.Element {
    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.description}>{article.summary}</p>
            <div className={styles.buttonContainer}>
                <Link href={`/article/${article.id}`}>Read more...</Link>
            </div>
        </article>
    );
}
