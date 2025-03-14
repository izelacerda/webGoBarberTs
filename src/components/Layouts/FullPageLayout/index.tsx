import React from 'react';

import { Container } from './styles';

const FullPageLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FullPageLayout;
