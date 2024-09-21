const ProjectCardSkeleton = () => {
    return (
        <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="w-full h-48 bg-gray-700 animate-pulse"></div> {/* Simula la imagen */}
            <div className="p-6 space-y-4">
                <div className="h-6 bg-gray-600 rounded-md w-3/4 animate-pulse"></div> {/* Simula el título */}
                <div className="h-4 bg-gray-600 rounded-md w-full animate-pulse"></div> {/* Simula la descripción */}
                <div className="h-4 bg-gray-600 rounded-md w-5/6 animate-pulse"></div> {/* Otra línea de descripción */}
            </div>
            <div className="flex flex-wrap p-6 space-x-2 space-y-2">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-full bg-blue-900 px-3 py-1 text-sm mx-1 mb-2 animate-pulse"></div>
                ))}
            </div>
            <div className="flex justify-end p-6">
                <div className="rounded-full bg-green-900 px-3 py-1 text-sm mx-1 mb-2 w-20 h-6 animate-pulse"></div> {/* Simula el botón */}
            </div>
        </div>
    );
};

export default ProjectCardSkeleton;
