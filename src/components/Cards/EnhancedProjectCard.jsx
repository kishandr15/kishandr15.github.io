import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 360px;
  height: 470px;
  background: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.card_border};
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-rows: 180px 1fr;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.text_tertiary};
    box-shadow: ${({ theme }) => theme.shadow_lg};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primary};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    grid-template-rows: 180px auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.bgLight};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${({ theme }) => theme.bg}e6;
  color: ${({ theme }) => theme.text_secondary};
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.3px;
  backdrop-filter: blur(8px);
  border: 1px solid ${({ theme }) => theme.card_border};
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  flex: 1;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 10px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_tertiary};
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 13px;
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
  margin-top: auto;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  background: ${({ theme }) => theme.bgLight};
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
`;

const EnhancedProjectCard = ({ project, setOpenModal }) => {
  const handleOpen = () => setOpenModal({ state: true, project });

  return (
    <Card
      onClick={handleOpen}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handleOpen())}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
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

      {/* Footer with project links - hidden from UI
      <Footer onClick={(e) => e.stopPropagation()}>
        {project.github && project.github !== '#' && (
          <LinkButton
            className="secondary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub /> Code
          </LinkButton>
        )}
        {project.webapp && project.webapp !== '#' && (
          <LinkButton
            className="primary"
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt /> Live Demo
          </LinkButton>
        )}
        {(!project.github || project.github === '#') && (!project.webapp || project.webapp === '#') && (
          <LinkButton
            className="primary"
            as="button"
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation();
              setOpenModal({ state: true, project });
            }}
          >
            View Details
          </LinkButton>
        )}
      </Footer>
      */}
    </Card>
  );
};

export default EnhancedProjectCard;
