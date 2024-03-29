import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../../shared/context';
import { Theme } from '../../../shared/theme';
import avatar from '../../../shared/img/avatar.png';

export const Header = (): JSX.Element => {
  const { theme, themeType, setThemeType } = useContext(AppContext);
  const onChangeThemeClick = () => {
    if (themeType === 'light') {
      setThemeType('dark');
    } else {
      setThemeType('light');
    }
  };

  return (
    <StyledHeader theme={theme}>
      <img src={avatar} alt="Arcyvilk's avatar" onClick={onChangeThemeClick} />
      <h1>ARCYVILK&apos;s hub</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 32px 16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.secondaryText};
  background-color: ${({ theme }) => theme.secondaryBg};

  h1 {
    width: 100%;
    @media (max-width: 650px) {
      margin: 0 8px;
      font-size: 3em;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }

  img {
    width: 128px;
    height: 128px;
    border-radius: 128px;
    border: 6px solid ${({ theme }) => theme.primaryText};
    margin: 0 32px;
    opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    @media (max-width: 650px) {
      width: 128px;
      height: 128px;
      border-radius: 128px;
      border: 3px solid ${({ theme }) => theme.primaryText};
      margin: 0 8px;
    }
  }
`;
