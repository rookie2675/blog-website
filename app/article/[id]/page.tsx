"use server";

import { prisma } from "@/prisma/prisma";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const article = await prisma.article.findUnique({
        where: {
            id: Number(params.id),
        },
        include: {
            author: true,
        },
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
                    <Link href={`/author/${article.authorId}`}>
                        {article.author.name}
                    </Link>
                </p>
                <p>{article.body}</p>
            </div>
        );
    }
}
