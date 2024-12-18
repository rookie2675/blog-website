import styles from "./Header.module.css";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { HomeIcon, PersonIcon } from "@primer/octicons-react";

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Link href="/">
                {" "}
                <HomeIcon className={styles.home} size={20} />
            </Link>
            <Link href={"/login"}>
                {" "}
                <PersonIcon className={styles.login} size={20} />
            </Link>
            <SearchBar />
        </header>
    );
}
