import React, { memo } from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 330px;
    min-height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.primary + 20};
    box-shadow: ${({ theme }) => theme.shadow_md};
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
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
        transform: translateY(-12px) scale(1.02);
        box-shadow: ${({ theme }) => theme.shadow_lg};
        border-color: ${({ theme }) => theme.primary};
        background-color: ${({ theme }) => theme.card_hover || theme.card_light};
    }
    
    &:hover::before {
        transform: scaleX(1);
    }
    
    &:hover ${Button} {
        display: block;
    }
    
    @media (max-width: 768px) {
        width: calc(100% - 32px);
        max-width: 400px;
        min-height: auto;
    }
    
    @media (max-width: 480px) {
        width: calc(100% - 24px);
        padding: 20px 16px;
        gap: 12px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.shadow_sm};
    object-fit: cover;
    transition: transform 0.4s ease;
    
    ${Card}:hover & {
        transform: scale(1.05);
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 20};
    padding: 4px 10px;
    border-radius: 8px;
    transition: all 0.2s ease;
    border: 1px solid ${({ theme }) => theme.primary + 30};
    
    &:hover {
        background-color: ${({ theme }) => theme.primary + 30};
        transform: translateY(-1px);
    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image 
                src={project.image} 
                alt={project.title ? `${project.title} project screenshot` : "Project screenshot"}
                loading="lazy"
                decoding="async"
            />
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={`tag-${index}-${tag}`}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar 
                        key={`member-${index}-${member.name}`} 
                        src={member.img} 
                        alt={member.name ? `${member.name} profile photo` : "Team member photo"}
                        loading="lazy"
                    />
                ))}
            </Members>
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default memo(ProjectCards)