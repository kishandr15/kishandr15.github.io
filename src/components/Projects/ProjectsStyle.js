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
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.primary + 30};
    border-radius: 50px;
    padding: 4px;
    font-size: 14px;
    font-weight: 500;
    margin: 22px 0px;
    gap: 4px;
    box-shadow: ${({ theme }) => theme.shadow_sm};
    
    @media (max-width: 768px) {
        font-size: 12px;
        margin: 18px 0px;
    }
    
    @media (max-width: 480px) {
        font-size: 11px;
        margin: 16px 0px;
        flex-wrap: wrap;
    }
`

export const ToggleButton = styled.div`
    padding: 10px 24px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    white-space: nowrap;
    position: relative;
    ${({ $active, theme }) =>
        $active ? `
    background: ${theme.gradient_primary};
    color: ${theme.white};
    box-shadow: ${theme.shadow_md};
    transform: scale(1.02);
    ` : `
    background: transparent;
    color: ${theme.text_secondary};
    `
    }
    
    &:hover {
        ${({ $active, theme }) => !$active && `
            background: ${theme.primary + 15};
            color: ${theme.primary};
        `}
        transform: ${({ $active }) => $active ? 'scale(1.02)' : 'scale(1.05)'};
    }
    
    &:active {
        transform: scale(0.98);
    }
    
    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 11px;
    }
    
    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 10px;
        flex: 1;
        text-align: center;
    }
`
export const Divider = styled.div`
    display: none;
`


export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 32px;
    align-items: stretch;
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
        padding: 0 16px;
    }
    
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 12px;
    }
`;
