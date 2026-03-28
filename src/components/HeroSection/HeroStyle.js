import styled from "styled-components";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 120px 32px 80px;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 80px 24px 64px;
    min-height: auto;
  }
  @media (max-width: 640px) {
    padding: 64px 16px 48px;
  }
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  position: relative;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 360px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.card_border};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 280px;
    max-height: 280px;
  }

  @media (max-width: 640px) {
    max-width: 220px;
    max-height: 220px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.15;
  margin-bottom: 16px;
  letter-spacing: -0.03em;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 40px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 12px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 500;
  font-size: 22px;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 520px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 1.7;
  }
`;

export const SocialMediaIcons = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 24px;

    @media (max-width: 960px) {
        justify-content: center;
    }
`;

export const SocialMediaIcon = styled.a`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${({ theme }) => theme.text_tertiary};
    font-size: 18px;
    cursor: pointer;
    transition: color 0.15s ease;
    border: 1px solid ${({ theme }) => theme.card_border};
    min-width: 44px;
    min-height: 44px;
    outline: none;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.primary};
        outline-offset: 2px;
    }

    &:hover {
        color: ${({ theme }) => theme.text_primary};
        border-color: ${({ theme }) => theme.text_tertiary};
    }

    @media (max-width: 640px) {
        width: 36px;
        height: 36px;
        font-size: 16px;
    }
`;
