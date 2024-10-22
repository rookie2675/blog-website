"use server";

import { articles } from "@/data/database";
import { Article } from "@/types/article";

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const article: Article | undefined = articles.find((article) => {
        return article.id == params.id;
    });

    if (!article) {
        return (
            <div>
                <h1>Article Not Found</h1>
                <p>
                    Sorry, we couldn&apos;t find the article you&apos;re looking
                    for.
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>{article.title}</h1>
                <p>
                    <strong>Author: </strong>
                    {article.author}
                </p>
                <p>{article.body}</p>
            </div>
        );
    }
}
