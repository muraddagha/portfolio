import React from 'react'
import TechStackList from './TechStackList'
import Link from 'next/link'

const ExperienceItem = ({ title, company, startDate, endDate, role, description, link, techStacks, workedProjects }) => {
    return (
        <div className='mb-12'>
            <div className='group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
                </div>
                <div className='block group lg:grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <h4 className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 w-full'>{startDate} - {endDate}</h4>

                    <div className='z-10 sm:col-span-6 cursor-default'>
                        <h1 className='font-medium leading-snug text-slate-200 inline-flex items-baseline group-hover:text-teal-300 focus-visible:text-teal-300  group/link text-base]:'>
                            {title} - {company}</h1>
                        <p className="mt-2 text-sm leading-normal">
                            {description}
                        </p>

                        {workedProjects.map(item => (
                            <Link key={item.id} href={item.link} target='_blank' className='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                                {item.projectName}
                            </Link>
                        ))}



                        <TechStackList techStacks={techStacks} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem
