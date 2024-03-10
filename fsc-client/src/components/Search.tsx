"use client";

import { useState } from "react";

export function Search() {

    const [search, setSearch] = useState<string>("");
    const [searchPopover, setSearchPopover] = useState<boolean>(false);

    const handleOpenSearch = (e: any) => {
        if (e.target.value == "/") {
            setSearchPopover(true);
        } else if (e.target.value == "") {
            setSearchPopover(false);
        }
    };

    const handleChangeSearch = (e: any) => setSearch(
        String(e.target.value).toLowerCase()
    );

    return (
        <div className="relative bg-zinc-700 rounded-md border border-separate border-zinc-600">
            <input
                type="text"
                placeholder="'/' ou um tema específico..."
                className="w-80 p-2 bg-zinc-700 rounded-md border-none text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition duration-300 ease-in-out hover:bg-zinc-600"
                value={search}
                onChange={handleChangeSearch}
                onInput={handleOpenSearch}
            />

            {searchPopover && (
                <div className="absolute top-12 left-0 px-2 py-1 max-w-[300px] bg-glass ring-1 ring-zinc-600 shadow-md backdrop-blur-sm">
                    <span
                        className="text-sm text-gray-300 text-wrap break-words"
                        tabIndex={0}
                    >
                        Pesquisando por: <strong>{search.substring(0, 30)}</strong>
                    </span>

                    <ul className="border-t border-zinc-700 text-base">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            )}
        </div>
    )
}