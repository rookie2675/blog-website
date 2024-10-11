"use server";

export default async function Page({ params }: { params: { id: number } }) {
    return <div>Article {params.id} </div>;
}
