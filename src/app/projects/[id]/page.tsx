import React from 'react'

const ProjectPage = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <div>
            Project with id: {id}
        </div>
    )
}

export default ProjectPage
