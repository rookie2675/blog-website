"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { JSX, useState } from "react";

export default function SearchBar(): JSX.Element {
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParameters = useSearchParams();

    const [query, setQuery] = useState("");

    function handleSubmit() {
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
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" aria-label="Search">
                🔎
            </button>
        </form>
    );
}
