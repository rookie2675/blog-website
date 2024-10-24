import Link from "next/link";
import styles from "./ArticleCard.module.css"; // Create a CSS module for styling
import { Article } from "@/types/article";

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.description}>{article.summary}</p>
            <div className={styles.buttonContainer}>
                <Link href={`/article/${article.id}`}>Read more...</Link>
            </div>
        </article>
    );
}
