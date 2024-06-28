import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>{text}</p>
            <Link to={link} className='neo-brutalism-white neo-btn'>
                {btnText}
                <img src={arrow} className='w-4 h-4 object-contain' />
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white-mx-5'>
            Hi! I am <span className='font-semibold'>Justin</span>
            <br />
            An Aspiring Full Stack Developer from Singapore. 
        </h1>
    ),
    2: (
        <InfoBox 
            text='placeholder' 
            link='/about' 
            btnText='Learn more about me!' 
        />
    ),
    3: (
        <InfoBox 
            text='placeholder' 
            link='/projects' 
            btnText='Check out some of the work I have done!' 
        />
    ),
    4: (
        <InfoBox 
            text='placeholder' 
            link='/resume' 
            btnText='Resume' 
        />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo