import styles from "./Header.module.css";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { HomeIcon, PersonIcon } from "@primer/octicons-react";

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Link href="/"> <HomeIcon className={styles.home} size={30} /></Link>
            <Link href={"/login"}> <PersonIcon className={styles.login} size={30} /></Link>
            <SearchBar />
        </header>
    );
}