import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import EnhancedProjectCard from '../Cards/EnhancedProjectCard'
import { projects } from '../../data/constants'

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
      duration: 0.2
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 15
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.25,
      ease: [0.55, 0.06, 0.68, 0.19]
    }
  }
}

const Projects = ({ openModal, setOpenModal }) => {
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
          <Title>Featured Projects</Title>
          <Desc>
            Case studies showcasing problem-solving, technical decisions, and measurable outcomes
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
              <ToggleButton $active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton $active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            }
            <Divider />
            {toggle === 'machine learning' ?
              <ToggleButton $active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
              :
              <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
            }
          </ToggleButtonGroup>
        </motion.div>

        <AnimatePresence mode="popLayout">
          <CardContainer
            as={motion.div}
            key={toggle}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
              >
                <EnhancedProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </motion.div>
            ))}
          </CardContainer>
        </AnimatePresence>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Projects)