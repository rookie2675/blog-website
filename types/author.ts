import { Article } from "./article";

export class Author {
    id: number;
    name: string;
    articles: Article[];

    constructor(id: number, name: string, articles: Article[]) {
        this.id = id;
        this.name = name;
        this.articles = articles;
    }
}
