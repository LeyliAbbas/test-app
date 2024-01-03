import React from "react";
import styled from "styled-components";

interface Props {
  type: "primary";
  size: "medium";
  state: "default";
  icon: boolean;
  className: any;
  divClassName: any;
  text: string;
}

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  background-color: var(--brandprimary);
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  padding: 14px 32px;
  position: relative;

  & .label {
    color: var(--neutralwhite);
    font-family: var(--button-link-medium-font-family);
    font-size: var(--button-link-medium-font-size);
    font-style: var(--button-link-medium-font-style);
    font-weight: var(--button-link-medium-font-weight);
    letter-spacing: var(--button-link-medium-letter-spacing);
    line-height: var(--button-link-medium-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const Button = ({ type, size, state, icon, className, divClassName, text = "Label" }: Props): JSX.Element => {
  return (
    <StyledButton className={`button ${className}`}>
      <div className={`label ${divClassName}`}>{text}</div>
    </StyledButton>
  );
};
