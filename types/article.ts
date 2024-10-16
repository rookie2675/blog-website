export class Article {
    id: number;
    title: string;
    author: string;
    summary: string;
    body: string;

    constructor(
        id: number,
        title: string,
        author: string,
        summary: string,
        body: string,
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.body = body;
    }
}
