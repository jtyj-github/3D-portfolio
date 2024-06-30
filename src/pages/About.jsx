import React from 'react'

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Justin</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p className='text-lg'>
                    I am a Full Stack Developer based in Singapore. I am passionate about creating beautiful and functional websites and applications. I have experience working with React, Node.js, Express, and MongoDB. I am constantly learning new technologies and frameworks to improve my skills.
                </p>
            </div>
            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>
                    My Skills
                </h3>
                <div className='mt-16 flex flex-wrap gap-12'>

                </div>
            </div>
        </section>
    )
}

export default About