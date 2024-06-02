import React from 'react'

const Footer = () => {
    return (
        <footer className="max-w-md lg:pb-16 text-sm text-slate-500 sm:pb-0 mt-12">
            Coded in <a target="_blank" href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">
                Visual Studio Code</a> by yours truly.
            Built with <a target="_blank" href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"> Next.js</a>,
            <a target="_blank" href="https://www.prisma.io/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"> Prisma</a>,
            <a target="_blank" href="https://www.mongodb.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"> MongoDB </a>
            and <a target="_blank" href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">Tailwind CSS</a>,
            deployed with  <a target="_blank" href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">Vercel</a>.
        </footer>
    )
}

export default Footer
