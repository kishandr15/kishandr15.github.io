import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  width: 650px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow_md};
  padding: 20px 24px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_border};
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient_primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow_lg};
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.primary};
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding: 16px 20px;
    gap: 12px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

const Image = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 12px;
  margin-top: 4px;
  object-fit: cover;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.card_border};
  
  @media only screen and (max-width: 768px) {
    height: 48px;
    width: 48px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Degree = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_tertiary};
  
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  
  b {
    color: ${({ theme }) => theme.text_primary};
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const EnhancedEducationCard = ({ education, index = 0 }) => {
  return (
    <Card>
      <Top>
        <Image
          src={education.img}
          alt={education.school ? `${education.school} logo` : "Education logo"}
          loading="lazy"
          decoding="async"
        />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade><b>Grade: </b>{education.grade}</Grade>
      <Description>{education.desc}</Description>
    </Card>
  );
};

export default memo(EnhancedEducationCard);
