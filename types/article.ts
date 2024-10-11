export class Article {
    id: number;
    title: string;
    shortDescription: string;

    constructor(id: number, title: string, shortDescription: string) {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
    }
}
