import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='text-3xl'>
            <h1>NAVBAR from root</h1>
            {children}
        </div>
    )
}

export default Layout
