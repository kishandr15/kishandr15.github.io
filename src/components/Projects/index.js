import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((item) => item.category === toggle);
    
  return (
    <Container id="projects">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. Here are some of my projects.
          </Desc>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <ToggleButtonGroup>
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            }
            <Divider />
            {toggle === 'machine learning' ?
              <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
              :
              <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            }
          </ToggleButtonGroup>
        </motion.div>
        
        <CardContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={toggle}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            </motion.div>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects