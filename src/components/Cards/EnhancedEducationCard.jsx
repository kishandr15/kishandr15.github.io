import React, { memo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Card = styled(motion.div)`
  width: 650px;
  border-radius: 12px;
  padding: 20px 24px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_border};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.text_tertiary};
    box-shadow: ${({ theme }) => theme.shadow_md};
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 20px;
    gap: 10px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 10px;
  margin-top: 2px;
  object-fit: cover;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.card_border};

  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_tertiary};
  margin-top: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  b {
    color: ${({ theme }) => theme.text_primary};
  }

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
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
