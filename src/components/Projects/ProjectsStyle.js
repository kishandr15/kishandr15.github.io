import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    padding: 80px 24px;
    gap: 12px;

    @media (max-width: 768px) {
      padding: 64px 16px;
    }

    @media (max-width: 480px) {
      padding: 48px 16px;
    }
`;

export const Title = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Desc = styled.div`
    font-size: 16px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
      font-size: 15px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.card_border};
    border-radius: 8px;
    padding: 4px;
    font-size: 13px;
    font-weight: 500;
    margin: 20px 0px;
    gap: 2px;

    @media (max-width: 768px) {
        font-size: 12px;
        margin: 16px 0px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        flex-wrap: wrap;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s ease;
    font-weight: 500;
    white-space: nowrap;
    ${({ $active, theme }) =>
        $active ? `
    background: ${theme.primary};
    color: ${theme.white};
    ` : `
    background: transparent;
    color: ${theme.text_secondary};
    `
    }

    &:hover {
        ${({ $active, theme }) => !$active && `
            color: ${theme.text_primary};
            background: ${theme.primary_alpha};
        `}
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.primary};
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        padding: 6px 14px;
    }

    @media (max-width: 480px) {
        padding: 6px 10px;
        flex: 1;
        text-align: center;
    }
`

export const Divider = styled.div`
    display: none;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 24px;
    align-items: stretch;
    padding: 0;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;
