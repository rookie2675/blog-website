"use server";

import styles from "./page.module.css";
import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import { prisma } from "@/prisma/prisma";
import { Article } from "@prisma/client";
import Link from "next/link";

export default async function Home(props: {
    searchParams?: Promise<{ query?: string }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";

    const articles = await prisma.article.findMany();

    const filteredArticles: Article[] = articles.filter((article: Article) =>
        article.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Articles</h1>
                <div className={styles.dashboard}>
                    <Link href={"/login"}>Login</Link>
                    <SearchBar />
                </div>
            </div>
            <div className={styles.articles}>
                {filteredArticles.map((article, index: number) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}
