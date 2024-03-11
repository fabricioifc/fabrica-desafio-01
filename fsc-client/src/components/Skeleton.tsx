export const Skeleton = () => {
    return (
        <div className="w-full grid grid-cols-6 gap-2 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="w-full h-48 bg-zinc-800 animate-pulse"></div>
            ))}
        </div>
    )
}