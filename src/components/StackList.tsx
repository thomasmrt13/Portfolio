interface StackListProps {
    technologies: string[];
}

function StackList({ technologies }: StackListProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <div key={technology}>
                    <div className="flex items-center justify-center px-2 py-1 border border-purple-900 rounded-md">
                        <p>{technology}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StackList;