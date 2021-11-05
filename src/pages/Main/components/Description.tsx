import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../../components';

export const Description = (): JSX.Element => {
  return (
    <StyledDescription column align justify>
      <p>
        Welcome to the sacred land of cats, Liches and code of questionable
        quality.
      </p>
    </StyledDescription>
  );
};

const StyledDescription = styled(Flex)`
  padding: 32px 16px;
  p {
    margin: 0;
  }
`;
