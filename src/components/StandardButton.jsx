import styled from "styled-components";

export function StandardButton({ children, className }) {
  const StandardButton = styled.button`
    border: none;
    padding: 0.5rem 1rem;
    background-color: #aaaaaa;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #019381;
      transform: translateY(-2px);
    }

    &:active {
      background-color: #004085;
      transform: translateY(0);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
  `;
  return <StandardButton className={className}>{children}</StandardButton>;
}
