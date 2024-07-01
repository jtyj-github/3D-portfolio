import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className='info-box'>
            <p className='font-medium sm:text-lg text-center'>{text}</p>
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
            <br />
            Click and drag or use the arrow keys to explore the island!
        </h1>
    ),
    2: (
        <InfoBox 
            text='Professionally, I am a Digital Solutions Engineer, but I create Full Stack web applications as a hobby.' 
            link='/about' 
            btnText='Here is a little more about me!' 
        />
    ),
    3: (
        <InfoBox 
            text='I have embarked on a few projects throughout my career, here are some of the projects I have worked on.' 
            link='/projects' 
            btnText="Check out my projects!" 
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo