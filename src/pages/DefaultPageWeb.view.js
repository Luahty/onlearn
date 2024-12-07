import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const DefaultPageWeb = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DefaultPageWeb
