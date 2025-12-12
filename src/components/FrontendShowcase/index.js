import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FaReact, FaJs } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
  background: ${({ theme }) => theme.card_light};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 20px;
  gap: 40px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary_light} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ShowcaseCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + 20};
  border-radius: 16px;
  padding: 28px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.gradient_primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: ${({ theme }) => theme.shadow_lg};
    background: ${({ theme }) => theme.card_hover || theme.card_light};
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`

const CardIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
`

const CardDesc = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 16px;
`

const CodePreview = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 8px;
  padding: 16px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.primary + 20};
  overflow-x: auto;
  margin-top: 12px;
  
  code {
    color: ${({ theme }) => theme.primary};
  }
`

const TechBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: ${({ theme }) => theme.primary + 20};
  border: 1px solid ${({ theme }) => theme.primary + 30};
  border-radius: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  margin-right: 8px;
  margin-top: 8px;
`

const frontendShowcases = [
  {
    icon: <FaReact />,
    title: "React Expertise",
    description: "Building modern, scalable React applications with hooks, context API, and performance optimizations.",
    code: `const App = () => {
  const [state, setState] = useState();
  
  useEffect(() => {
    // Optimized rendering
  }, [deps]);
  
  return <Component />;
};`,
    tech: ["React", "Hooks", "Context API", "Performance"]
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript Mastery",
    description: "Type-safe development with TypeScript, ensuring robust and maintainable codebases.",
    code: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Kishan",
  age: 25
};`,
    tech: ["TypeScript", "Interfaces", "Types", "Generics"]
  },
  {
    icon: <SiTailwindcss />,
    title: "Modern Styling",
    description: "Creating beautiful, responsive UIs with Tailwind CSS and styled-components.",
    code: `const Button = styled.button\`
  background: \${({ theme }) => theme.primary};
  padding: 12px 24px;
  border-radius: 8px;
\`;`,
    tech: ["Tailwind CSS", "Styled Components", "CSS3", "Responsive"]
  },
  {
    icon: <FaJs />,
    title: "JavaScript Excellence",
    description: "Advanced JavaScript patterns, ES6+, async/await, and modern web APIs.",
    code: `const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};`,
    tech: ["ES6+", "Async/Await", "Promises", "APIs"]
  }
]

const FrontendShowcase = () => {
  return (
    <Container id="frontend-showcase">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Title>Frontend Skills Showcase</Title>
          <Desc>
            Interactive demonstrations of my frontend development expertise. 
            Hover over cards to see code examples and technologies I work with.
          </Desc>
        </motion.div>
        
        <ShowcaseGrid>
          {frontendShowcases.map((showcase, index) => (
            <ShowcaseCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <CardIcon>{showcase.icon}</CardIcon>
              <CardTitle>{showcase.title}</CardTitle>
              <CardDesc>{showcase.description}</CardDesc>
              <CodePreview>
                <pre>{showcase.code}</pre>
              </CodePreview>
              <div>
                {showcase.tech.map((tech, techIndex) => (
                  <TechBadge key={techIndex}>{tech}</TechBadge>
                ))}
              </div>
            </ShowcaseCard>
          ))}
        </ShowcaseGrid>
      </Wrapper>
    </Container>
  )
}

export default FrontendShowcase

