import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from './MDXComponents';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 24px 60px;

  @media (max-width: 768px) {
    padding: 60px 16px 40px;
  }
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.text_tertiary};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 32px;
  transition: color 0.15s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin: 0 0 12px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 14px;
  color: ${({ theme }) => theme.text_tertiary};
`;

const Tag = styled.span`
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ theme }) => theme.primary_alpha};
  color: ${({ theme }) => theme.primary};
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.card_border};
  margin: 1.5rem 0 2rem;
`;

const Content = styled.article`
  min-height: 50vh;
`;

const BlogLayout = ({ meta, children }) => {
  const navigate = useNavigate();

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <BackLink href="/#blog" onClick={(e) => {
        e.preventDefault();
        navigate({ pathname: '/', hash: '#blog' });
      }}>
        ← Back to blog
      </BackLink>

      <Header>
        <Title>{meta.title}</Title>
        <Meta>
          <span>{meta.date}</span>
          {meta.readTime && <span>· {meta.readTime}</span>}
          {meta.tags && meta.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </Meta>
      </Header>

      <Divider />

      <Content>
        <MDXProvider components={mdxComponents}>
          {children}
        </MDXProvider>
      </Content>
    </Container>
  );
};

export default BlogLayout;
