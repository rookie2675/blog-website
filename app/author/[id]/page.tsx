"use server";

import { prisma } from "@/prisma/prisma";

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const author = await prisma.author.findUnique({
        where: {
            id: Number(params.id),
        },
    });

    return <h1>{author?.name}</h1>;
}
