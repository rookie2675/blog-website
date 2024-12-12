"use server";

import styles from "./page.module.css";
import ArticleCard from "@/components/ArticleCard";
import { prisma } from "@/prisma/prisma";
import type { Article } from "@prisma/client";

export default async function Home(props: { searchParams?: Promise<{ query?: string }>; }): Promise<JSX.Element> {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";

    const articles: ReadonlyArray<Article> = (await prisma.article.findMany()).filter((article: Article) =>
        article.title.toLowerCase().includes(query.toLowerCase()));

    // Duplicated the articles to check how tha page handles scrolling
    return (
        <div className={styles.articles}>
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}

        </div>
    );
}
