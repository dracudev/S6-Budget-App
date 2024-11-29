import "./WebElements.css";
import PropTypes from "prop-types";
import { useModal } from "../../hooks/useModal";
import { CiCircleInfo, CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { InfoModal } from "../../components/InfoModal";

export function WebElements({
  elements,
  setElements,
  handleClickAdd,
  handleClickRest,
}) {
  const { modalShow, modalContent, handleModal, handleClose } = useModal();

  return (
    <div className="number-container">
      <div className="number-input">
        <p className="pages d-flex align-items-center justify-content-center">
          <button className="me-2 d-flex align-items-center justify-content-center" onClick={() => handleModal("pages")}>
            <CiCircleInfo />
          </button>
          Pages
        </p>
        <div className="d-flex">
          <button className="d-flex align-items-center justify-content-center" onClick={() => handleClickRest("pages")}>
            <CiCircleMinus />
          </button>
          <input
            type="number"
            value={elements.pages}
            onChange={(e) =>
              setElements({ ...elements, pages: Number(e.target.value) })
            }
          />
          <button className="d-flex align-items-center justify-content-center" type="button" onClick={() => handleClickAdd("pages")}>
            <CiCirclePlus />
          </button>
        </div>
      </div>
      <div className="number-input">
        <p className="d-flex align-items-center justify-content-center">
          <button className="me-2 d-flex align-items-center justify-content-center" onClick={() => handleModal("languages")}>
            <CiCircleInfo />
          </button>
          Languages
        </p>
        <div className="d-flex">
          <button className="d-flex align-items-center justify-content-center" type="button" onClick={() => handleClickRest("languages")}>
            <CiCircleMinus />
          </button>
          <input
            type="number"
            value={elements.languages}
            onChange={(e) =>
              setElements({ ...elements, languages: Number(e.target.value) })
            }
          />
          <button className="d-flex align-items-center justify-content-center" type="button" onClick={() => handleClickAdd("languages")}>
            <CiCirclePlus />
          </button>
        </div>
      </div>
      <InfoModal
        show={modalShow}
        onHide={handleClose}
        title={modalContent.title}
        description={modalContent.description}
      ></InfoModal>
    </div>
  );
}

WebElements.propTypes = {
  elements: PropTypes.shape({
    pages: PropTypes.number.isRequired,
    languages: PropTypes.number.isRequired,
  }).isRequired,
  setElements: PropTypes.func.isRequired,
  handleClickAdd: PropTypes.func.isRequired,
  handleClickRest: PropTypes.func.isRequired,
};
