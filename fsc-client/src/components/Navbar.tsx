import { Nav } from "./Nav";
import { Search } from "./Search";

export async function Navbar() {
    return (
        <header className="w-full fixed top-0 py-2 mb-14 z-50 bg-zinc-800 text-gray-300">
            <section className="w-4/5 m-auto flex justify-between">
                <div className="flex items-center gap-1 text-xl font-extrabold tracking-wide">IFC <span className="rounded-sm bg-green-400 text-black px-1">hub</span> </div>

                <Nav />

                <Search />
            </section>
        </header>
    );
}