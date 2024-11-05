import React from 'react'
import TitleFirst from '../components/About/TitleFirst'
import BannernText from '../components/About/BannernText'
import TranferInfo from '../components/About/TranferInfo'
import CarouselSlideItem from '../components/About/Carousel'
import Donation from '../components/About/Donation'
import HeaderAbout from '../components/About/HeaderAbout'

const AboutPage = () => {
    return (
        <div>
            <HeaderAbout />
            <TitleFirst />
            <BannernText />
            <TranferInfo />
            < CarouselSlideItem />
            <Donation />
        </div>
    )
}

export default AboutPage