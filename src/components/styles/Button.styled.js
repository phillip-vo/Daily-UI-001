import styled from "styled-components";

export const Button = styled.button`
  width: 310px;
  height: 62px;
  background-color: ${({ bg }) => bg || "#FFF"};
  border-radius: 25px;
  border: ${({ border }) => border || "3px solid #3f3d56"};
  color: ${({ color }) => color || "#3f3d56"};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 25px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
