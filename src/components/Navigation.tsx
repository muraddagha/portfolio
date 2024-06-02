'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const Navigation = () => {
    const [activeLink, setActiveLink] = useState('');
    const router = useRouter();
    router

    useEffect(() => {
        const handleHashChange = () => {
            setActiveLink(window.location.hash);
        };
        setActiveLink(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('popstate', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('popstate', handleHashChange);
        };

    }, [])

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: "0px",
            threshold: 0.7,// Adjust thresholds to detect when a section is partially visible
        });
        const about = document.querySelector("#about")
        const experience = document.querySelector("#experience")
        const projects = document.querySelector("#projects")
        observer.observe(about)
        observer.observe(experience)
        observer.observe(projects)

        return () => {
            // sections.forEach(section => observer.unobserve(section));
            observer.unobserve(about)
            observer.unobserve(experience)
            observer.unobserve(projects)
        };
    }, []);

    return (
        <nav className='nav hidden lg:block'>
            <ul className='mt-16 w-max'>
                <li> <a href="#about" className={`group flex items-center py-3 ${activeLink === '#about' ? 'active' : ''}`}>
                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:opacity-100 group-[.active]:bg-slate-100`}></span>
                    About</a></li>
                <li> <a href="#experience" className={`group flex items-center py-3 ${activeLink === '#experience' ? 'active' : ''}`}>
                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:opacity-100 group-[.active]:bg-slate-100`}></span>
                    Experience</a>
                </li>
                <li> <a href="#projects" className={`group flex items-center py-3 ${activeLink === '#projects' ? 'active' : ''}`}>
                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:opacity-100 group-[.active]:bg-slate-100`}></span>
                    Projects</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
