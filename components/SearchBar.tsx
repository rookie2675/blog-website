"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { JSX, useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(): JSX.Element {
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParameters = useSearchParams();

    const [query, setQuery] = useState("");

    function handleSubmit(): void {
        const parameters = new URLSearchParams(searchParameters);

        if (query) {
            parameters.set("query", query);
        } else {
            parameters.delete("query");
        }

        replace(`${pathName}?${parameters.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className={styles.button} type="submit" aria-label="Search">
                🔎
            </button>
            <input className={styles.input} type="text" value={query} placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        </form>
    );
}
