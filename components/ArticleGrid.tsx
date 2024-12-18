import ArticleCard from "./ArticleCard";
import styles from "./ArticleGrid.module.css";
import { Article } from "@prisma/client";

interface Props {
    articles: Readonly<Array<Article>>;
}

export default function ArticleGrid(props: Props): JSX.Element {
    const articles = props.articles;

    return (
        <div className={styles.articles}>
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}
            {articles.map((article: Article, index: number) => (
                <ArticleCard key={index} article={article} />
            ))}
        </div>
    );
}
