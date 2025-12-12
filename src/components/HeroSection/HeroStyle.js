import styled from "styled-components";

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.bg} 0%, ${({ theme }) => theme.bgLight} 50%, ${({ theme }) => theme.bg} 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px;
  overflow: hidden;
  @media (max-width: 960px) {
    padding: 80px 16px;
  }
  @media (max-width: 640px) {
    padding: 60px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 98%, 0 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(133, 76, 230, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(133, 76, 230, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
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
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
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

  @media (max-width: 640px) {
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
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.shadow_glow};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 56px;
  background: linear-gradient(135deg, ${({ theme }) => theme.text_primary} 0%, ${({ theme }) => theme.primary_light} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-bottom: 16px;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 1.3;
    margin-bottom: 12px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 32px;
    color:${({ theme }) => theme.white};
    border-radius: 12px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${({ theme }) => theme.gradient_primary};
    box-shadow: ${({ theme }) => theme.shadow_md};
    position: relative;
    overflow: hidden;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadow_lg};
    }
    
    &:hover::before {
        left: 100%;
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @media (max-width: 640px) {
        padding: 14px 24px;
        font-size: 16px;
        min-height: 44px;
    }
    
    @media (max-width: 480px) {
        padding: 12px 20px;
        font-size: 15px;
        width: 100%;
        max-width: 100%;
    } 

`;

export const SocialMediaIcons = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 24px;
    justify-content: center;
    @media (max-width: 960px) {
        justify-content: center;
    }
`;

export const SocialMediaIcon = styled.a`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text_primary};
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid ${({ theme }) => theme.primary + 20};
    min-width: 44px;
    min-height: 44px;
    
    &:hover {
        transform: translateY(-4px) scale(1.1);
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
        box-shadow: ${({ theme }) => theme.shadow_glow};
        border-color: ${({ theme }) => theme.primary};
    }
    
    @media (max-width: 640px) {
        width: 44px;
        height: 44px;
        font-size: 18px;
    }
`;
