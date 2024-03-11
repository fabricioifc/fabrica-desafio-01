"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationEllipsis,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation";

export const PaginationComponent = ({
    currentPage,
    totalPages,
    category
}: {
    currentPage: number;
    totalPages: number;
    category: string;
}) => {

    const searchParams = useSearchParams();
    const page = searchParams.get("page") || 1;

    const onPageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        window.location.href = `/${category}/${page}`;
    }

    return (
        <Pagination className="my-4 flex md:gap-3 gap-1">
            <PaginationPrevious
            className="bg-green-500 hover:bg-green-600"
                onClick={() => onPageChange(currentPage - 1)}
            >
                Anterior
            </PaginationPrevious>
            <PaginationContent>
                {
                    (currentPage > 3 && Number(page) > 4) ? (
                        <PaginationEllipsis />
                    ) : null
                }

                {
                    Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
                        if ((page >= currentPage - 2 && page <= currentPage + 3)) {
                            return (
                                <PaginationItem
                                    key={page}
                                    className="cursor-pointer"
                                    onClick={() => onPageChange(page)}
                                >
                                    <PaginationLink>{page}</PaginationLink>
                                </PaginationItem>
                            )
                        }
                    })
                }

                {
                    currentPage < totalPages - 2 && (
                        <PaginationEllipsis />
                    )
                }

                <PaginationItem
                    onClick={() => onPageChange(1)}
                >
                    <PaginationLink>{totalPages}</PaginationLink>
                </PaginationItem>
            </PaginationContent>
            <PaginationNext
                className="bg-green-500 hover:bg-green-600"
                onClick={() => onPageChange(currentPage + 1)}
            >
                Próxima
            </PaginationNext>
        </Pagination>
    );
}