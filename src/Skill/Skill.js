import React, { useState } from 'react';
import { skills } from './SkillData';
import { Icon } from '@iconify/react';
import './Skill.css'
import AOS from "aos";
import 'aos/dist/aos.css';




const Skill = () => {
    AOS.init({
        duration : 1500
      })
    // eslint-disable-next-line no-unused-vars
    const [skill, setSkill]=useState(skills)
    const [selectedSkillType, setSelectedSkillType]= useState('expert')
    const selectedSkill= skill.filter(skills=>skills.level===selectedSkillType)
    return (
        <section className='skill-area my-5'>
            
            <div>
               <nav>
               <h1>My Proficiency</h1>
               <ul className='nav justify-content-center mb-5 '>
               
                    <li onClick={()=> setSelectedSkillType('expert')} className='nav-item'>
                    <span to='expert' className={selectedSkillType ==='expert'?'active nav-link':'nav-link'}>Good At</span>
                    </li>

                    <li onClick={()=>setSelectedSkillType('comfortable')} className='nav-item'>
                        <span to='expert' className={selectedSkillType ==='comfortable'? 'active nav-link': 'nav-link'} >Comportable</span>
                        </li>

                    <li onClick={()=> setSelectedSkillType('familiar')} className='nav-item'>
                        <span to='familiar' className={selectedSkillType==='familiar'?'active nav-link':'nav-link'}>Familiar</span>
                        </li>

                    <li onClick={()=> setSelectedSkillType('tools')} className='nav-item'>
                        <span to='tools' className={selectedSkillType==='tools'?'active nav-link':'nav-link'}>Tools</span>
                        </li>
                </ul>
               </nav>
            </div>
            <div className=" container skill-wraper  ">
                {selectedSkill.map(skill=> <div data-aos="zoom-in" className='skills'>
                    <span ><Icon  icon={skill.icon}/></span>
                    <p>{skill.label}</p>

                    </div>)}
            </div>
        </section>
    );
};

export default Skill;