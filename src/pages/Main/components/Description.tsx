import React, { useContext } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../shared/theme';
import { AppContext } from '../../../shared/context';
import { Flex } from '../../../components';

export const Description = (): JSX.Element => {
  const { theme } = useContext(AppContext);
  return (
    <StyledDescription column align justify theme={theme}>
      <p>
        Welcome to the sacred land of cats, Liches and code of questionable
        quality.
      </p>
    </StyledDescription>
  );
};

const StyledDescription = styled(Flex)<{ theme: Theme }>`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.secondaryBg};
  color: ${({ theme }) => theme.secondaryText};
  p {
    margin: 0;
  }
`;
