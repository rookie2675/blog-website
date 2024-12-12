"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { JSX, useState } from "react";
import styles from "./SearchBar.module.css";
import { SearchIcon } from "@primer/octicons-react";
import { motion } from "framer-motion";

export default function SearchBar(): JSX.Element {
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParameters = useSearchParams();

    const [query, setQuery] = useState("");
    const [showInput, setShowInput] = useState(false);

    function handleButtonClick(): void {
        setShowInput(!showInput);
    }


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
        <div className={styles.container}>
            <button className={styles.button} type="button" aria-label="Search" onClick={handleButtonClick}>
                <SearchIcon className={styles.icon} size={30} />
            </button>
            <form onSubmit={handleSubmit}>
                {showInput && (
                    <motion.input
                        className={styles.input}
                        type="text"
                        value={query}
                        placeholder="Search"
                        onChange={(e) => setQuery(e.target.value)}
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '200px' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.3 }}
                        onBlur={() => setShowInput(false)}
                    />
                )}
            </form>
        </div>
    );
}
