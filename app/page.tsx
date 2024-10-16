"use server";

import { articles } from "@/data/database";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
    return (
        <div className={styles.container}>
            <h1>Articles</h1>
            <div className={styles.articles}>
                {articles.map((article, index) => (
                    <article key={index} className={styles.article}>
                        <h2>{article.title}</h2>
                        <p className={styles.description}>{article.summary}</p>
                        <div className={styles.buttonContainer}>
                            <Link href={`/article/${article.id}`}>
                                Read more...
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
