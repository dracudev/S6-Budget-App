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
  const {modalShow, modalContent, handleModal, handleClose} = useModal();

  return (
    <div className="number-container">
      <div className="number-input">
        <button onClick={() => handleModal("pages")}>
          <CiCircleInfo />
        </button>
        <p className="pages">Pages</p>
        <div className="d-flex">
          <button onClick={() => handleClickRest("pages")}>
            <CiCircleMinus />
          </button>
          <input
            type="number"
            value={elements.pages}
            onChange={(e) =>
              setElements({ ...elements, pages: Number(e.target.value) })
            }
          />
          <button type="button" onClick={() => handleClickAdd("pages")}>
            <CiCirclePlus />
          </button>
        </div>
      </div>
      <div className="number-input">
        <button onClick={() => handleModal("languages")}>
          <CiCircleInfo />
        </button>
        <p>Languages</p>
        <div className="d-flex">
          <button type="button" onClick={() => handleClickRest("languages")}>
            <CiCircleMinus />
          </button>
          <input
            type="number"
            value={elements.languages}
            onChange={(e) =>
              setElements({ ...elements, languages: Number(e.target.value) })
            }
          />
          <button type="button" onClick={() => handleClickAdd("languages")}>
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
