"use server";

import ArticleGrid from "@/components/ArticleGrid";
import { prisma } from "@/prisma/prisma";
import type { Article } from "@prisma/client";

export default async function Home(props: { searchParams?: Promise<{ query?: string }> }): Promise<JSX.Element> {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";

    const articles: ReadonlyArray<Article> = (await prisma.article.findMany()).filter((article: Article) =>
        article.title.toLowerCase().includes(query.toLowerCase()),
    );

    return <ArticleGrid articles={articles} />;
}
