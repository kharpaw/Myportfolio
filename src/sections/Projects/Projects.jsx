import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../common/ProjectCard'
import hipsster from '../../assets/hipsster.png'

function Projects() {
  return (
    <section id= "projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} 
            link='https://github.com/kharpaw/reactproject'
            h3="Docs"
            p="Docs App"
            />

            <ProjectCard src={freshBurger} 
            link='https://github.com/Goffyass/hote'
            h3="Kiljava Hotel"
            p="Kiljava Hotel"
            />

            <ProjectCard src={hipsster} 
            link='https://github.com/kharpaw/portfolio'
            h3="Portfolio"
            p="Portfolio"
            />
            
        </div>

        </section>
  )
}

export default Projects