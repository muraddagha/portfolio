'use client'
import React, { useEffect, useState } from 'react'

const sections = ["#about", "#experience", "#projects"]

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(sections[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.3 } // Adjust this threshold as needed
        );

        sections.forEach((section) => {
            observer.observe(document.querySelector(section));
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(document.querySelector(section));
            });
        };
    }, []);

    return (
        <nav className='nav hidden lg:block'>
            <ul className='mt-16 w-max'>
                <li> <a href="#about" className={`group flex items-center py-3 ${activeSection === '#about' ? 'active' : ''}`}>
                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:opacity-100 group-[.active]:bg-slate-100`}></span>
                    About</a></li>
                <li> <a href="#experience" className={`group flex items-center py-3 ${activeSection === '#experience' ? 'active' : ''}`}>
                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:opacity-100 group-[.active]:bg-slate-100`}></span>
                    Experience</a>
                </li>
                <li> <a href="#projects" className={`group flex items-center py-3 ${activeSection === '#projects' ? 'active' : ''}`}>
                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none group-[.active]:w-16 group-[.active]:opacity-100 group-[.active]:bg-slate-100`}></span>
                    Projects</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
