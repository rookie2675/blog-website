"use server";

import styles from "./page.module.css";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/article";
import SearchBar from "@/components/SearchBar";
import { prisma } from "@/prisma/prisma";

export default async function Home(props: {
    searchParams?: Promise<{ query?: string }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";

    const articles = await prisma.article.findMany();

    const filteredArticles = articles.filter((article: Article) =>
        article.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Articles</h1>
                <SearchBar />
            </div>
            <div className={styles.articles}>
                {filteredArticles.map((article: Article, index: number) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}
