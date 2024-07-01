/* eslint-disable react/jsx-key */
import React from 'react'
import { experiences, skills } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../components/Footer';

const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Justin</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p className='text-lg'>
                    I am a Digital Solutions Engineer based in Singapore. I am currently pursuing a career in software development and am passionate about building web applications that are both functional and visually appealing.
                    I am proficient in both frontend and backend technologies and am always looking to learn new skills.
                </p>
                <p className='text-lg'>
                    Outside of work, you can find me rock climbing at various gyms around Singapore or building webapps with friends for fun.
                    I&apos;m always looking to expand my network and meet new people, so feel free to reach out to me on LinkedIn!
                </p>
            </div>
            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>
                    My Skills
                </h3>
                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20'>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'> Work Experience </h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p className='text-lg'>
                        I&apos;ve had the opportunity to work with some amazing companies and teams throughout my career. Here are some of my work experience so far:
                    </p>
                </div>
                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                icon={<div className='flex justify-center items-center w-full h-full'>
                                    <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
                                </div>}
                                iconStyle={{ background: experience.iconBg }}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                                        {experience.company_name}
                                    </p>
                                </div>
                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`} className='text-black-500/75 font-normal pl-1 text-sm'>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
            <hr className='border-slate-500' />
            <Footer />
        </section>
    )
}

export default About