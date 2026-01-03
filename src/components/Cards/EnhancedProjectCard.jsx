import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 380px;
  height: 580px;
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.primary + 20};
  box-shadow: ${({ theme }) => theme.shadow_md};
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-rows: 200px 1fr 64px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  transform-origin: center bottom;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradient_primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadow_xl};
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card_hover || theme.card_light};
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    grid-template-rows: 200px auto auto;
    
    &:active {
      transform: scale(0.97);
      box-shadow: ${({ theme }) => theme.shadow_lg};
      border-color: ${({ theme }) => theme.primary};
    }
    
    &:active::before {
      transform: scaleX(1);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.bgLight};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${Card}:hover & {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    ${Card}:active & {
      transform: scale(1.05);
      transition: transform 0.2s ease;
    }
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
`;


const Content = styled.div`
  padding: 24px;
  display: grid;
  grid-template-rows: 72px 67px 124px;
  gap: 16px;
  overflow: hidden;
  flex: 1;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    grid-template-rows: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 72px;
  
  @media (max-width: 768px) {
    min-height: auto;
    gap: 6px;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 67px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    min-height: auto;
    -webkit-line-clamp: 2;
  }
`;


const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: flex-start;
  align-content: flex-start;
  overflow: hidden;
  
  @media (max-width: 768px) {
    gap: 4px;
    margin-top: 4px;
  }
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary + 15};
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.primary + 30};
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: ${({ theme }) => theme.primary + 25};
    transform: translateY(-1px);
  }
`;

const Footer = styled.div`
  padding: 16px 24px;
  border-top: 1px solid ${({ theme }) => theme.card_border};
  display: flex;
  gap: 12px;
  align-items: center;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    gap: 8px;
    margin-top: auto;
  }
`;

const LinkButton = styled.a`
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &.primary {
    background: ${({ theme }) => theme.gradient_primary};
    color: ${({ theme }) => theme.white};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadow_md};
    }
    
    &:active {
      transform: translateY(0) scale(0.98);
      transition: transform 0.1s ease;
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${({ theme }) => theme.text_primary};
    border: 1px solid ${({ theme }) => theme.primary};
    
    &:hover {
      background: ${({ theme }) => theme.primary_alpha};
    }
    
    &:active {
      background: ${({ theme }) => theme.primary_alpha};
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }
  }
`;

const EnhancedProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card
      onClick={() => setOpenModal({ state: true, project })}
    >
      <ImageContainer>
        <Image
          src={project.image}
          alt={project.title ? `${project.title} screenshot` : 'Project screenshot'}
          loading="lazy"
          decoding="async"
        />

        <CategoryBadge>
          {project.category === 'web app' ? 'Web App' : 'ML Project'}
        </CategoryBadge>
      </ImageContainer>

      <Content>
        <Header>
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
        </Header>

        <Description>{project.description}</Description>

        <Tags>
          {project.tags?.map((tag, index) => (
            <Tag key={`${project.id}-tag-${index}`}>{tag}</Tag>
          ))}
        </Tags>
      </Content>

      <Footer>
        <LinkButton className="primary" style={{ cursor: 'pointer', width: '100%' }}>
          View Details
        </LinkButton>
      </Footer>
    </Card>
  );
};

export default EnhancedProjectCard;
