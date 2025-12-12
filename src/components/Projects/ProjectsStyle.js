import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 768px) {
        font-size: 12px;
        margin: 18px 0px;
    }
    
    @media (max-width: 480px) {
        font-size: 11px;
        margin: 16px 0px;
        border-radius: 10px;
    }
`

export const ToggleButton = styled.div`
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    ${({ active, theme }) =>
        active ? `
    background: ${theme.primary};
    color: ${theme.white};
    box-shadow: ${theme.shadow_md};
    ` : `
    color: ${theme.text_primary};
    `
    }
    &:hover {
        background: ${({ theme, active }) => active ? theme.primary : theme.primary + 15};
        transform: translateY(-2px);
        box-shadow: ${({ theme, active }) => active ? theme.shadow_md : 'none'};
    }
    @media (max-width: 768px) {
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 11px;
        min-height: 36px;
    }
    
    @media (max-width: 480px) {
        padding: 6px 10px;
        font-size: 10px;
        min-height: 32px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        gap: 20px;
        padding: 0 16px;
    }
    
    @media (max-width: 480px) {
        gap: 16px;
        padding: 0 12px;
    }
`;
