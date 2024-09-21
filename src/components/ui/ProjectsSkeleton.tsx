import ProjectCardSkeleton from "./ProjectCardSkeleton";

const ProjectsSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
            {[...Array(3)].map((_, i) => (
                <ProjectCardSkeleton key={i} />
            ))}
        </div>
    );
};

export default ProjectsSkeleton;
