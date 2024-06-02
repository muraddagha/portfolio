import React from 'react'
import Navigation from './Navigation'
import Social from './Social'
import Summary from './Summary'

const Aside = () => {
    return (
        <aside className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div>
                <Summary />
                <Navigation />
            </div>
            <Social />
        </aside>
    )
}

export default Aside
