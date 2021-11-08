import React, { useContext } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../shared/theme';
import { AppContext } from '../../../shared/context';
import { Flex } from '../../../components';

export const Description = (): JSX.Element => {
  const { theme } = useContext(AppContext);
  return (
    <StyledDescription column justify theme={theme}>
      <p>Hello there, name&apos;s Arcyvilk.</p>
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
  padding: 16px 16px 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.secondaryBg};
  color: ${({ theme }) => theme.primaryText};
  font-size: 1.1em;
  p {
    text-align: left;
    margin: 4px 0;
  }
`;
