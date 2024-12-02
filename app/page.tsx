"use server";

import Header from "@/components/Header";
import styles from "./page.module.css";
import ArticleCard from "@/components/ArticleCard";
import { prisma } from "@/prisma/prisma";
import { Article } from "@prisma/client";

export default async function Home(props: {
    searchParams?: Promise<{ query?: string }>;
}): Promise<JSX.Element> {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";

    const articles = await prisma.article.findMany();

    const filteredArticles: Article[] = articles.filter((article: Article) =>
        article.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.articles}>
                {filteredArticles.map((article, index: number) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}
