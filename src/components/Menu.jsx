import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { mainMenuBackgroundClick, mainMenuBackground, boldTitleFont } from "../style/theme";

export default function Menu() {
  return (
    <WrapperDiv>
      <nav>
        <ul css={menuContainer}>
          <li>
            <NavLink css={menuStyle} to='/studylog'>
              공부기록
            </NavLink>
          </li>
          <li>
            <NavLink css={menuStyle} to='/'>
              Hello
            </NavLink>
          </li>
          <li>
            <NavLink css={menuStyle} to='/contact'>
              기록의 퐁당
            </NavLink>
          </li>
        </ul>
      </nav>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  /* border: 1px solid olive; */
  ${boldTitleFont}
  font-size: 24px;
  margin-bottom: 30px;
`;

const menuContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const menuStyle = css`
  padding: 20px 30px;
  display: inline-block;
  line-height: 100%;
  ${mainMenuBackground}
  &.active {
    ${mainMenuBackgroundClick}
  }

  @media (max-width: 500px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;
