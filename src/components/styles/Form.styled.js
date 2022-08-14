import styled from "styled-components";

export const Form = styled.form`
  width: 310px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > label {
    font-size: 16px;
    font-weight: bold;
    color: #cccccc;
    margin-top: 30px;
  }

  & > input {
    width: 310px;
    height: 25px;
    border: none;
    border-bottom: 2px solid #cccccc;
  }

  & > Button {
    margin-top: 60px;
    margin-bottom: 0;
  }
`;
