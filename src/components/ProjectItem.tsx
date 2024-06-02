import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TechStackList from './TechStackList';

const ProjectItem = ({ name, details, link, techStacks, cover, isDone }) => {
    return (
        <div className='mb-12'>
            <div className='group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'>
                </div>
                <div className='block group lg:grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='z-10 sm:col-span-2 mt-2 mb-4 lg:mb-0'>
                        <Image className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 relative' src={cover} width={100} height={50} alt='Project Cover' />
                    </div>
                    <div className='z-10 sm:col-span-6'>
                        <Link target='_blank' href={link}
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
                            {name}
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        </Link>
                        <p className="mt-2 text-sm leading-normal">
                            {details}
                        </p>
                        <TechStackList techStacks={techStacks} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
