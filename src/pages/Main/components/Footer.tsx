import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../shared/context';
import { Theme } from '../../../shared/theme';

export const Footer = (): JSX.Element => {
  const { theme } = useContext(AppContext);

  return <StyledFooter theme={theme}>ARCYVILK © 2017-2021</StyledFooter>;
};

const StyledFooter = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.secondaryBg};
`;
