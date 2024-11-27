import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

export function InfoModal({ show, onHide, title, description }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered> 
      <Modal.Body className="d-flex align-items-center justify-content-center flex-column">
        <div className="d-flex align-items-center justify-content-center flex-column m-5">
        <h3 className="py-3"><strong>{title}</strong></h3>
        <p className="py-3 text-center">{description}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

InfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
