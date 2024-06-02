import React from 'react'

const TechStackList = ({ techStacks }) => {
    return (
        <div>
            <ul className="ml-1 mt-4 flex items-center gap-2 flex-wrap">
                {techStacks?.map(item => (
                    <li key={item.techStack.id}
                        className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
                        {item.techStack.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default TechStackList
