import "./WebElements.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { CiCircleInfo, CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { InfoModal } from "./InfoModal";

export function WebElements({
  elements,
  setElements,
  handleClickAdd,
  handleClickRest,
}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  function handleModal(type) {
    if (type === "pages") {
      setModalContent({
        title: "Number of pages",
        description: "Add the number of pages ​​your project will have. The cost of each page is 30€.",
      });
    } else if (type === "languages") {
      setModalContent({
        title: "Number of languages",
        description: "Add the number of languages ​​your project will have. The cost of each language is 30€.",
      });
    }
    setModalShow(true);
  };

  return (
    <div className="number-container">
      <div className="number-input">
        <button onClick={() => handleModal("pages")} className="">
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
        onHide={() => setModalShow(false)}
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
