import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import { styled } from "styled-components";

const StyledFormCheck = styled(Form.Check)`
  .form-check-input {
    width: 4rem;
    height: 2rem;
    &:checked {
      background-color: #403a80;
      border-color: #004085;
    }
      &:disabled {
      background-color: #403a80;
      border-color: #403a80;
    }
    &:checked:disabled {
      background-color: #403a80;
      border-color: #403a80;
    }
      &:focus {
      box-shadow: 0 0 0 0.2rem rgba(64, 58, 128, 0.25);
    }
  }
`;

function SwitchButton({ textR, textL, onChange, checked }) {
  return (
    <Form>
      <div className="d-flex  align-items-center">
        <p className="me-3 m-0 lead">{textL}</p>
        <StyledFormCheck type="switch" id="switch-button" onChange={onChange} checked={checked}/>
        <p className="ms-2 m-0 lead">{textR}</p>
      </div>
    </Form>
  );
}

SwitchButton.propTypes = {
  textR: PropTypes.string,
  textL: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool.isRequired
};

export default SwitchButton;
