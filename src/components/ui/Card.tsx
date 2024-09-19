import React from 'react'

const Card = ({
    title, icon, description }: {
        title: string,
        icon: React.JSX.Element,
        description: string
    }) => {
    return (
        <div className="flex flex-col items-center rounded-lg bg-gray-900 p-6 shadow-md">
            <div className="mb-4 text-blue-600">{icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-center text-gray-600">{description}</p>
        </div>
    )
}

export default Card
