import React from 'react';
import styled from 'styled-components';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from '../../contexts/ThemeContext';

/* ─── Typography ─── */

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 2rem 0 1rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 1.75rem 0 0.75rem;
  line-height: 1.35;
`;

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 1.5rem 0 0.5rem;
  line-height: 1.4;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0 0 1.25rem;
`;

const Strong = styled.strong`
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

/* ─── Lists ─── */

const UL = styled.ul`
  margin: 0 0 1.25rem;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.75;
`;

const OL = styled.ol`
  margin: 0 0 1.25rem;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.75;
`;

const LI = styled.li`
  margin-bottom: 0.4rem;
`;

/* ─── Blockquote ─── */

const Blockquote = styled.blockquote`
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  border-left: 3px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary_alpha};
  border-radius: 0 8px 8px 0;
  color: ${({ theme }) => theme.text_primary};

  p {
    margin: 0;
  }
`;

/* ─── Horizontal Rule ─── */

const HR = styled.hr`
  border: none;
  height: 1px;
  background: ${({ theme }) => theme.card_border};
  margin: 2rem 0;
`;

/* ─── Inline Code ─── */

const InlineCode = styled.code`
  background: ${({ theme }) => theme.primary_alpha};
  color: ${({ theme }) => theme.primary};
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.875em;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, monospace;
`;

/* ─── Code Block ─── */

const CodeBlockWrapper = styled.div`
  margin: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.card_border};
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${({ theme }) => theme.bgLight};
  border-bottom: 1px solid ${({ theme }) => theme.card_border};
  font-size: 12px;
  color: ${({ theme }) => theme.text_tertiary};
  font-family: 'SF Mono', 'Fira Code', monospace;
`;

const Pre = styled.pre`
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.6;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, monospace;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text_tertiary};
    border-radius: 3px;
  }
`;

const CodeBlock = ({ children, className }) => {
  const { resolvedTheme } = useTheme();
  const language = className ? className.replace('language-', '') : '';
  const code = typeof children === 'string' ? children.trim() : '';

  if (!language) {
    return <InlineCode>{children}</InlineCode>;
  }

  return (
    <CodeBlockWrapper>
      {language && <CodeHeader>{language}</CodeHeader>}
      <Highlight
        theme={resolvedTheme === 'dark' ? themes.nightOwl : themes.nightOwlLight}
        code={code}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <Pre style={{ ...style, background: 'transparent' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </CodeBlockWrapper>
  );
};

/* ─── Image ─── */

const ImageWrapper = styled.figure`
  margin: 1.5rem 0;
  text-align: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.card_border};
`;

const Caption = styled.figcaption`
  margin-top: 8px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text_tertiary};
`;

const BlogImage = ({ src, alt, caption }) => (
  <ImageWrapper>
    <StyledImage src={src} alt={alt || ''} loading="lazy" />
    {(caption || alt) && <Caption>{caption || alt}</Caption>}
  </ImageWrapper>
);

/* ─── Callout ─── */

const CalloutWrapper = styled.div`
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  border-left: 3px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary_alpha};
  border-radius: 0 8px 8px 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;

  p {
    margin: 0;
  }
`;

const Callout = ({ children }) => (
  <CalloutWrapper>
    {children}
  </CalloutWrapper>
);

/* ─── Table ─── */

const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 1.5rem 0;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.card_border};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th, td {
    padding: 10px 16px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.card_border};
    color: ${({ theme }) => theme.text_secondary};
  }

  th {
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.bgLight};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

/* ─── Export component map for MDXProvider ─── */

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  strong: Strong,
  a: Anchor,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Blockquote,
  hr: HR,
  code: CodeBlock,
  pre: ({ children }) => <>{children}</>,
  img: (props) => <BlogImage {...props} />,
  table: (props) => <TableWrapper><StyledTable {...props} /></TableWrapper>,
  // Custom components usable directly in MDX
  BlogImage,
  Callout,
};

export { mdxComponents, BlogImage, Callout };
