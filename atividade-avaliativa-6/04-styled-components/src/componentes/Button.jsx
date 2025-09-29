import React from "react";
import styled, { css } from "styled-components";

// Estilo base do botão
const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:focus {
    outline: 3px solid #000000; 
    outline-offset: 2px;
  }

  ${(props) =>
    props.variant === "solid" &&
    css`
      background-color: #2563eb;
      color: white;
      border: none;
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      border: 2px solid #2563eb;
      color: #2563eb;
    `}

  ${(props) =>
    props.variant === "ghost" &&
    css`
      background-color: transparent;
      border: none;
      color: #2563eb;
    `}
`;

export default function Button({
  children,
  variant = "solid",
  disabled = false,
  loading = false,
  ...props
}) {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </StyledButton>
  );
}
