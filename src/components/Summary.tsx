import Link from 'next/link'
import React from 'react'

const Summary = () => {
  return (
    <section id='info'>
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
        <Link href="/">Murad Aghakishiyev</Link>
      </h1>
      <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Software Engineer</h2>
      <p className='mt-4 max-w-xs leading-normal'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
    </section>
  )
}

export default Summary
