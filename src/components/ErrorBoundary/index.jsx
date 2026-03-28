import React from 'react';
import styled from 'styled-components';

const Fallback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 40px;
  gap: 16px;
  color: #B1B2B3;
  font-size: 15px;
  text-align: center;
`;

const RetryButton = styled.button`
  padding: 10px 24px;
  background: rgba(133, 76, 230, 0.15);
  border: 1px solid rgba(133, 76, 230, 0.4);
  border-radius: 8px;
  color: #A66EF0;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover { background: rgba(133, 76, 230, 0.25); }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fallback>
          <span>Failed to load {this.props.sectionName || 'this section'}</span>
          <RetryButton onClick={() => window.location.reload()}>
            Reload page
          </RetryButton>
        </Fallback>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
