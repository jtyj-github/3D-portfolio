import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p className='text-lg'>
                    I&apos;ve embarked on numerous projects throughout my career, here are some of the projects I have worked on. 
                    They are mostly open-source, so if any of them interest you, feel free to explore the codebase and contribute
                    any ideas or improvements you may have!
                </p>
            </div>
            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div key={project.name} className='lg:w-[400px] w-full'>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img src={project.iconUrl} alt='Project Icon' className='w-1/2 h-1/2 object-contain' />
                            </div>
                        </div>
                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600'>
                                    {project.link.includes('none') ? null : 'View Project'}
                                </Link>
                                {project.link.includes('none') ? null : <img src={arrow} alt='arrow' className='h-4 w-4 object-contain' />}
                            </div>
                        </div>    
                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />
            
        </section>
    )
}

export default Projects