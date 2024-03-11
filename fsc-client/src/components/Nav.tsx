"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function Nav() {

    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList>

                <NavigationMenuItem 
                    className={pathname == "/" ? "border-b-2 border-green-500": ""}
                >
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Página inicial
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem
                    className={pathname.split("/")[1] == "popular" ? "border-b-2 border-green-500": ""}
                >
                    <NavigationMenuTrigger>
                        <Link href="/popular/1">
                            Populares
                        </Link>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="pl-0 pr-2">
                        <ul className="grid gap-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-5">
                                <NavigationMenuLink asChild>
                                    <div className="relative w-full h-full bg-cover bg-no-repeat bg-[url('https://br.web.img2.acsta.net/pictures/23/04/25/20/10/1515852.jpg')]">
                                        <div className="absolute w-full h-4/5 bottom-0 left-0 flex flex-col justify-end items-start py-2 px-0 bg-gradient-to-t from-black to bg-transparent">
                                            <span className="px-2">
                                                <h1 className="text-lg font-black">Os mais populares</h1>
                                                <p className="text-xs text-gray-300 mt-0.5 mb-1">
                                                    Confira os filmes e séries mais populares do momento!
                                                </p>
                                                <Link href={`/popular/1`} className="bg-green-500 hover:bg-green-600">Confira a lista!</Link>
                                            </span>
                                        </div>
                                    </div>
                                </NavigationMenuLink>
                            </li>

                            <h1 className="ml-1 mt-2 text-2xl font-bold">Filtros</h1>

                            <ListItem href="/docs" title="Livre">
                                Classificação livre para todos os públicos.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Adulto">
                                Classificação para maiores de 18 anos.
                                <small>
                                    (Conteúdo adulto, violência, nudez, etc.)
                                </small>
                            </ListItem>

                            <Button variant={"secondary"}>Veja mais...</Button>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem
                    className={pathname.split("/")[1] == "top-rated" ? "border-b-2 border-green-500": ""}
                >
                    <NavigationMenuTrigger>
                        <Link href="/top-rated/1">
                            Mais votados
                        </Link>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="min-w-[450px] px-2 py-1 flex flex-col gap-2">
                            <ListItem href="/docs" title="Introduction">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"