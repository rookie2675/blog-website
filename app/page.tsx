"use server";

import { articles } from "@/data/database";
import styles from "./page.module.css";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/article";

export default async function Home() {
    return (
        <div className={styles.container}>
            <h1>Articles</h1>
            <div className={styles.articles}>
                {articles.map((article: Article, index: number) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}
