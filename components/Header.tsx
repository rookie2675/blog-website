import styles from "./Header.module.css";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header(): JSX.Element {
    return (
        <div className={styles.header}>
            <Link href="/">Home</Link>
            <Link href={"/signup"}>Register</Link>
            <Link href={"/login"}>Login</Link>
            <SearchBar />
        </div>
    );
}