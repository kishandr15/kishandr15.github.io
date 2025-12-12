import React, { memo } from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.shadow_md};
    padding: 20px 24px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.primary + 20};
    margin: 0;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: ${({ theme }) => theme.gradient_primary};
        transform: scaleY(0);
        transform-origin: top;
        transition: transform 0.4s ease;
    }
    
    &:hover{
        box-shadow: ${({ theme }) => theme.shadow_lg};
        transform: translateY(-8px);
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.card_hover || theme.card_light};
    }
    
    &:hover::before {
        transform: scaleY(1);
    }
    
    @media (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    
    @media (max-width: 480px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 56px;
    width: 56px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    margin-top: 4px;
    object-fit: contain;
    padding: 4px;
    border: 1px solid ${({ theme }) => theme.primary + 20};
    transition: all 0.3s ease;
    
    ${Card}:hover & {
        transform: scale(1.1);
        border-color: ${({ theme }) => theme.primary};
    }
    
    @media only screen and (max-width: 768px){
        height: 44px;
        width: 44px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 4px;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primary + 15};
    border: 1px solid ${({ theme }) => theme.primary + 30};
    padding: 4px 10px;
    border-radius: 6px;
    transition: all 0.2s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary + 25};
        border-color: ${({ theme }) => theme.primary};
    }
    
    @media only screen and (max-width: 768px){
        font-size: 11px;
        padding: 3px 8px;
    }
`



const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image 
                    src={experience.img} 
                    alt={experience.company ? `${experience.company} logo` : "Company logo"}
                    loading="lazy"
                    decoding="async"
                />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={`exp-skill-${index}-${skill}`}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} alt={experience.company ? `${experience.company} document` : "Experience document"} />
                </a>
            }
        </Card>
    )
}

export default memo(ExperienceCard)