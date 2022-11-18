import React, { useContext } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../shared/theme';
import { AppContext } from '../../../shared/context';
import { Flex } from '../../../components';

export const Description = (): JSX.Element => {
  const { theme } = useContext(AppContext);
  return (
    <StyledDescription column justify theme={theme}>
      <h4>Hello there, name&apos;s Arcyvilk.</h4>
      <p>
        This website is supposed to function as a simple portfolio, or rather -
        due to my inability to ever finish anything - as a dump of all the
        projects I&apos;ve started and abandoned over the years. Or at least the
        cooler ones.
      </p>
      <p>
        Amongst the things I do but rarely finish are: ink art, both traditional
        and digital; comics; a bunch of bugged bots; some websites; a few really
        dumb applications; and possibly written works.
      </p>
    </StyledDescription>
  );
};

const StyledDescription = styled(Flex)<{ theme: Theme }>`
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.secondaryBg};
  padding: 16px;
  gap: 16px;
  font-size: 1.2em;
  p {
    margin: 0;
  }
  h4 {
    padding: 0;
  }
`;
