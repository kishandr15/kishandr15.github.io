import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../../data/blog';

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px 60px;

  @media (max-width: 768px) {
    padding: 60px 16px 40px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_tertiary};
  text-align: center;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.article)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.card_border};
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.text_tertiary};
    box-shadow: ${({ theme }) => theme.shadow_md};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 0 8px;
  line-height: 1.35;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin: 0 0 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${({ theme }) => theme.text_tertiary};
`;

const CardTag = styled.span`
  padding: 2px 8px;
  border-radius: 50px;
  font-size: 11px;
  font-weight: 500;
  background: ${({ theme }) => theme.primary_alpha};
  color: ${({ theme }) => theme.primary};
`;

const BlogList = () => {
  const navigate = useNavigate();

  return (
    <Section id="blog">
      <SectionTitle>Blog</SectionTitle>
      <SectionSubtitle>Thoughts, learnings, and things I find interesting</SectionSubtitle>

      <Grid>
        {blogPosts.map((post, index) => (
          <Card
            key={post.slug}
            onClick={() => navigate(`/blog/${post.slug}`)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {post.cover && <CardImage src={post.cover} alt={post.title} loading="lazy" />}
            <CardBody>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
              <CardMeta>
                <span>{post.date}</span>
                {post.readTime && <span>· {post.readTime}</span>}
                {post.tags && post.tags.map((tag) => <CardTag key={tag}>{tag}</CardTag>)}
              </CardMeta>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default BlogList;
