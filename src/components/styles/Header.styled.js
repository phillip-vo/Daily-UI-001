import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  width: 500px;
  height: 450px;
  border-radius: 25px 25px 50% 50%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: ${({ width }) => width || "300px"};
  margin: ${({ margin }) => margin || "30px 0 0 0"};
  position: ${({ position }) => position || "relative"};
  left: ${({ left }) => left};
`;

export const Image = styled.img`
  width: 378px;
  height: 319px;
  margin-top: 30px;
`;
