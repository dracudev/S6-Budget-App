import { styled, css } from "styled-components";
import PropTypes from "prop-types";

const StdButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background-color: #403a80;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #286172;
  }

  &:active {
    background-color: #004085;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
  ${(props) =>
    props.$sm &&
    css`
      width: 20px;
      height: 20px;
      padding: 0.25rem;
      font-size: 0.5rem;
    `}
`;

export function StandardButton({ children, className, $sm, ...props }) {
  return <StdButton className={className} $sm={$sm} {...props}>{children}</StdButton>;
}

StandardButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  $sm: PropTypes.bool,
};
