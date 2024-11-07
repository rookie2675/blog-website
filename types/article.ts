import { Author } from "./author";

export class Article {
    id: number;
    title: string;
    author: Author;
    summary: string;
    body: string;

    constructor(
        id: number,
        title: string,
        author: Author,
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
