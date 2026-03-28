import CloseRounded from '@mui/icons-material/CloseRounded';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { FiExternalLink } from 'react-icons/fi';
import Modal from '@mui/material/Modal';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.6);
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.3s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 12px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 24px;
display: flex;
flex-direction: column;
position: relative;
border: 1px solid ${({ theme }) => theme.card_border};
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const Date = styled.div`
    font-size: 14px;
    margin: 4px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_tertiary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Desc = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    margin: 8px 6px;
    line-height: 1.6;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const Image = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 20px;
    border: 1px solid ${({ theme }) => theme.card_border};

    @media only screen and (max-width: 600px) {
        max-height: 300px;
    }
`;

const Label = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    gap: 4px;
`;

const Tag = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin: 4px;
    padding: 3px 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.bgLight};
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.card_border};
`;

const MemberName = styled.div`
    font-size: 15px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 16px 0px;
    gap: 10px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.white};
    padding: 10px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${theme.card_hover};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.15s ease;
    &:hover {
        opacity: 0.9;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setOpenModal({ state: false, project: null });
        }
    };

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container onClick={handleBackdropClick}>
                <Wrapper onClick={(e) => e.stopPropagation()}>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "12px",
                            right: "16px",
                            cursor: "pointer",
                            color: 'inherit',
                            opacity: 0.5,
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image
                        src={project?.image}
                        alt={project?.title ? `${project.title} project screenshot` : "Project screenshot"}
                        loading="lazy"
                        decoding="async"
                    />
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage
                                            src={member.img}
                                            alt={member.name ? `${member.name} profile photo` : "Team member photo"}
                                            loading="lazy"
                                        />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    {/* Project links - hidden from UI
                    {(project?.github && project.github !== '#') || (project?.webapp && project.webapp !== '#') ? (
                        <ButtonGroup>
                            {project?.github && project.github !== '#' && (
                                <Button dull href={project.github} target='new'>
                                    <GitHub />
                                    View Code
                                </Button>
                            )}
                            {project?.webapp && project.webapp !== '#' && (
                                <Button href={project.webapp} target='new'>
                                    <FiExternalLink size={18} />
                                    View Live App
                                </Button>
                            )}
                        </ButtonGroup>
                    ) : null}
                    */}
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default index
